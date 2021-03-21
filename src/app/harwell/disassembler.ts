import { HarwellInstruction } from "./harwell-instruction";
import { HarwellProcessor } from "./harwell-processor";

export class Disassembler {
    constructor(private processor: HarwellProcessor) {
    }

    disassemble(entry: number): string {
        const entryText: string = (entry / 1000).toString().padStart(5, '0');
        return entryText + ' ' + this.disassembleInstruction(entry);
    }

    private disassembleInstruction(instruction: number): string {
        const operation: number = HarwellInstruction.getOperation(instruction);
        switch (operation) {
            case 0:
                return this.disassembleControl(instruction);
            case 1:
                return this.disassembleAdd(instruction);
            case 2:
                return this.disassembleAddAndClear(instruction);
            case 3:
                return this.disassembleSubtract(instruction);
            case 4:
                return this.disassembleSubtractAndClear(instruction);
            case 5:
                return this.disassembleMultiply(instruction);
            case 6:
                return this.disassembleDivide(instruction);
            case 7:
                return this.disassembleTransferPositiveModulus(instruction);
            default:
                throw new Error("Unknown order " + HarwellInstruction.getOrderCode(instruction));
        }
    }

    private disassembleControl(instruction: number): string {
        const addressA: number = HarwellInstruction.getAddressA(instruction);
        const addressB: number = HarwellInstruction.getAddressB(instruction);
        if (addressA >= 30 && addressA <= 39) {
            const blockNumber: number = addressA % 10;
            return "SEARCH for block " + blockNumber + " on tape " + addressB;
        }
        if (addressA >= 50 && addressA <= 59) {
            const blockNumber: number = addressA % 10;
            return "CONDITIONAL SEARCH for block " + blockNumber + " on tape " + addressB
                + " (" + (this.processor.state.yes ? "YES" : "NO") + ")";
        }
        if (addressA >= 70 && addressA <= 79) {
            const layoutNumber: number = addressA % 10;
            return "PRINT LAYOUT " + layoutNumber;
            return;
        }
        if (addressA >= 81 && addressA <= 89) {
            const shiftPosition: number = -(addressA % 10) + 2;
            const shiftPositionText: string = String.fromCharCode('A'.charCodeAt(0) - shiftPosition + 1);
            return "SELECT SHIFT POSITION " + shiftPositionText + " (10^" + (shiftPosition) + ")";
        }
        switch (addressA) {
            case 1:
                if (addressB === 0) {
                    return "FINISH";
                }
            case 11:
                return "TEST POSITIVE [" + addressB + "]"
                    + " (" + this.format(this.processor.peek(addressB)) + ")";
            case 12:
                return "TEST NEGATIVE [" + addressB + "]"
                    + " (" + this.format(this.processor.peek(addressB)) + ")";
            case 21:
                return "TRANSFER to " + ((addressB < 10) ? "tape " : "") + addressB;
            case 22:
                return "CONDITIONAL TRANSFER to " + addressB + 
                    " (" + (this.processor.state.yes ? "YES" : "NO") + ")";
            case 85:
                return "SHIFT";
            default:
                throw new Error("Unknown control order " + HarwellInstruction.getOrderCode(instruction));
        }
    }

    private disassembleAdd(instruction: number): string {
        const addressA: number = HarwellInstruction.getAddressA(instruction);
        const addressB: number = HarwellInstruction.getAddressB(instruction);
        const addend: number = this.processor.peekAhead(addressA);
        const addendText: string = this.format(addend);
        if (addressB === 1) {
            return "PRINT [" + addressA + "] (" + addendText + ")";
        }
        const current: number = this.processor.peek(addressB);
        const currentText: string = this.format(current);
        const result: string = this.format(current + addend);
        return "[" + addressB + "] += [" + addressA + "]"
            + " (" + currentText + " + " + addendText + " = " + result + ")";
    }

    private disassembleAddAndClear(instruction: number): string {
        const addressA: number = HarwellInstruction.getAddressA(instruction);
        const addressB: number = HarwellInstruction.getAddressB(instruction);
        const addend: number = this.processor.peekAhead(addressA);
        const addendText: string = this.format(addend);
        if (addressB === 0) {
            return "CLEAR [" + addressA + "] (" + addendText + ")";
        }
        if (addressB === 1) {
            return "PRINT [" + addressA + "] (" + addendText + ")";
        }
        const current: number = this.processor.peek(addressB);
        const currentText: string = this.format(current);
        const result: string = this.format(current + addend);
        return "[" + addressB + "] += [" + addressA + "]; CLEAR [" + addressA + "]"
            + " (" + currentText + " + " + addendText + " = " + result + ")";
    }

    private disassembleSubtract(instruction: number): string {
        const addressA: number = HarwellInstruction.getAddressA(instruction);
        const addressB: number = HarwellInstruction.getAddressB(instruction);
        const subtrahend: number = this.processor.peekAhead(addressA);
        const subtrahendText: string = this.format(subtrahend);
        if (addressB === 0) {
            return "CLEAR [" + addressA + "] (" + subtrahendText + ")";
        }
        if (addressB === 1) {
            return "PRINT [" + addressA + "] (" + subtrahendText + ")";
        }
        const current: number = this.processor.peek(addressB);
        const currentText: string = this.format(current);
        const result: string = this.format(current - subtrahend);
        return "[" + addressB + "] -= "
            + "[" + addressA + "]; CLEAR [" + addressA + "] (" + currentText + " - " + subtrahendText + " = " + result + ")";
    }

    private disassembleSubtractAndClear(instruction: number): string {
        const addressA: number = HarwellInstruction.getAddressA(instruction);
        const addressB: number = HarwellInstruction.getAddressB(instruction);
        const subtrahend: number = this.processor.peekAhead(addressA);
        const current: number = this.processor.peek(addressB);
        const currentText: string = this.format(current);
        const subtrahendText: string = this.format(subtrahend);
        const result: string = this.format(current - subtrahend);
        return "[" + addressB + "] -= "
            + "[" + addressA + "] (" + currentText + " - " + subtrahendText + " = " + result + ")";
    }

    private disassembleMultiply(instruction: number): string {
        const addressA: number = HarwellInstruction.getAddressA(instruction);
        const addressB: number = HarwellInstruction.getAddressB(instruction);
        const multiplicand: number = this.processor.peek(addressA);
        const multiplier: number = this.processor.peek(addressB);
        const multiplicandText: string = this.format(multiplier);
        const multiplierText: string = this.format(multiplier);
        const result: string = this.format((multiplicand * multiplier) / 10000000);
        return "[09] = " + "[" + addressA + "] * [" + addressB + "]"
            + " (" + multiplicandText + " * " + multiplierText + " = " + result + ")";
    }

    private disassembleDivide(instruction: number): string {
        const addressA: number = HarwellInstruction.getAddressA(instruction);
        const addressB: number = HarwellInstruction.getAddressB(instruction);
        const dividend: number = this.processor.peek(9);
        const divisor: number = this.processor.peek(addressA);
        const dividendText: string = this.format(dividend);
        const divisorText: string = this.format(divisor);
        const quotient: string = this.format((dividend / divisor) * 10000000);
        const remainder: string = this.format(dividend % divisor);
        return "[" + addressB + "] = " + "[09] / [" + addressA + "]"
            + " (" + dividendText + " / " + divisorText + " = " + quotient + "); "
            + "[09] = " + "[09] % [" + addressA + "]"
            + " (" + dividendText + " % " + divisorText + " = " + remainder + ")";
    }

    private disassembleTransferPositiveModulus(instruction: number): string {
        const addressA: number = HarwellInstruction.getAddressA(instruction);
        const value: number = this.processor.peek(addressA);
        if (value < 0) {
            return "TRANSFER POSITIVE MODULUS: " + this.disassembleSubtract(instruction);
        }
        return "TRANSFER POSITIVE MODULUS: " + this.disassembleAdd(instruction);
    }

    private format(value: number): string {
        if (value >= 1 && value <= 9) {
            return "0.000000" + value;
        }
        if (value >= -9 && value <= -1) {
            return "-0.000000" + -value;
        }
        return (value / 10000000).toString();
    }
}

import { HarwellInstruction } from "./harwell-instruction";
import { HarwellProcessor } from "./harwell-processor";

export class Disassembler {
    constructor(private processor: HarwellProcessor) {
    }

    disassemble(entry: number): string {
        const entryText: string = String(Math.round(entry * 10000)).padStart(5, '0')
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
            default:
                throw new Error("Unknown operation " + instruction);
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
        switch (addressA) {
            case 1:
                if (addressB === 0) {
                    return "FINISH";
                }
            case 11:
                return "TEST POSITIVE [" + addressB + "]"
                    + " (" + this.processor.peek(addressB) + ")";
            case 12:
                return "TEST NEGATIVE [" + addressB + "]"
                    + " (" + this.processor.peek(addressB) + ")";
            case 21:
                return "TRANSFER to " + addressB;
            case 22:
                return "CONDITIONAL TRANSFER to " + addressB + 
                    " (" + (this.processor.state.yes ? "YES" : "NO") + ")";
            case 73:
                return "PRINT LAYOUT REFERENCE 1";
            case 74:
                return "PRINT LAYOUT REFERENCE 2";
            default:
                throw new Error("Unknown control instruction " + instruction);
        }
    }

    private disassembleAdd(instruction: number): string {
        const addressA: number = HarwellInstruction.getAddressA(instruction);
        const addressB: number = HarwellInstruction.getAddressB(instruction);
        const addend: number = this.processor.peekAhead(addressA);
        if (addressB === 1) {
            return "PRINT [" + addressA + "] (" + addend + ")";
        }
        const current: number = this.processor.peek(addressB);
        const currentText: string = this.format(current);
        const addendText: string = this.format(addend);
        const result: string = this.format(current + addend);
        return "[" + addressB + "] += [" + addressA + "]"
            + " (" + currentText + " + " + addendText + " = " + result + ")";
    }

    private disassembleAddAndClear(instruction: number): string {
        const addressA: number = HarwellInstruction.getAddressA(instruction);
        const addressB: number = HarwellInstruction.getAddressB(instruction);
        const addend: number = this.processor.peekAhead(addressA);
        if (addressB === 0) {
            return "CLEAR [" + addressA + "] (" + addend + ")";
        }
        if (addressB === 1) {
            return "PRINT [" + addressA + "] (" + addend + ")";
        }
        const current: number = this.processor.peek(addressB);
        const currentText: string = this.format(current);
        const addendText: string = this.format(addend);
        const result: string = this.format(current + addend);
        return "[" + addressB + "] += [" + addressA + "]; CLEAR [" + addressA + "]"
            + " (" + currentText + " + " + addendText + " = " + result + ")";
    }

    private disassembleSubtract(instruction: number): string {
        const addressA: number = HarwellInstruction.getAddressA(instruction);
        const addressB: number = HarwellInstruction.getAddressB(instruction);
        const subtrahend: number = this.processor.peekAhead(addressA);
        if (addressB === 0) {
            return "CLEAR [" + addressA + "] (" + subtrahend + ")";
        }
        if (addressB === 1) {
            return "PRINT [" + addressA + "] (" + subtrahend + ")";
        }
        const current: number = this.processor.peek(addressB);
        const currentText: string = this.format(current);
        const subtrahendText: string = this.format(subtrahend);
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
        const result: string = this.format(multiplicand * multiplier);
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
        const quotient: string = this.format(dividend / divisor);
        const remainder: string = this.format(dividend % divisor);
        return "[" + addressB + "] = " + "[09] / [" + addressA + "]"
            + " (" + dividendText + " / " + divisorText + " = " + quotient + "); "
            + "[09] = " + "[09] % [" + addressA + "]"
            + " (" + dividendText + " % " + divisorText + " = " + remainder + ")";
    }

    private format(result: number): string {
        return Number(result.toFixed(7)).toString();
    }
}

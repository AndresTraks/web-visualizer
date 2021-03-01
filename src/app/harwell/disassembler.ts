import { HarwellInstruction } from "./harwell-instruction";
import { HarwellProcessor } from "./harwell-processor";
import { Block } from "./tape/block";
import { TapeEntry } from "./tape/tape-entry";

export class Disassembler {
    constructor(private processor: HarwellProcessor) {
    }

    disassemble(entry: TapeEntry): string {
        if (entry instanceof HarwellInstruction) {
            return entry.code + " " + this.disassembleInstruction(entry);
        }
        
        if (entry instanceof Block) {
            return "Block ID " + entry.blockNumber.toString();
        }

        throw Error("Cannot disassemble tape entry.");
    }

    private disassembleInstruction(instruction: HarwellInstruction): string {
        const operation: string = instruction.operation;
        switch (operation) {
            case '0':
                return this.disassembleControl(instruction);
            case '1':
                return this.disassembleAdd(instruction);
            case '2':
                return this.disassembleAddAndClear(instruction);
            case '3':
                return this.disassembleSubtract(instruction);
            case '4':
                return this.disassembleSubtractAndClear(instruction);
            case '5':
                return this.disassembleMultiply(instruction);
            case '6':
                return this.disassembleDivide(instruction);
            default:
                throw new Error("Unknown instruction " + instruction.code);
        }
    }

    private disassembleControl(instruction: HarwellInstruction): string {
        if (instruction.addressA[0] === '3') {
            const blockNumber: number = Number(instruction.addressA[1]);
            const tapeNumber: number = Number(instruction.addressB);
            return "SEARCH for block " + blockNumber + " on tape " + tapeNumber;
        }
        if (instruction.addressA[0] === '5') {
            const blockNumber: number = Number(instruction.addressA[1]);
            const tapeNumber: number = Number(instruction.addressB);
            return "CONDITIONAL SEARCH for block " + blockNumber + " on tape " + tapeNumber
                + " (" + (this.processor.state.yes ? "YES" : "NO") + ")";
        }
        switch (instruction.addressA) {
            case "01":
                if (instruction.addressB === "00") {
                    return "FINISH";
                }
            case "11":
                return "TEST POSITIVE [" + instruction.addressB + "]"
                    + " (" + this.processor.peek(instruction.addressB).toNumber() + ")";
            case "12":
                return "TEST NEGATIVE [" + instruction.addressB + "]"
                    + " (" + this.processor.peek(instruction.addressB).toNumber() + ")";
            case "21":
                return "TRANSFER to tape " + instruction.addressB;
            case "22":
                return "CONDITIONAL TRANSFER to tape " + instruction.addressB + 
                    " (" + (this.processor.state.yes ? "YES" : "NO") + ")";
            case "73":
                return "PRINT LAYOUT REFERENCE 1";
            case "74":
                return "PRINT LAYOUT REFERENCE 2";
            default:
                throw new Error("Unknown control instruction " + instruction.code);
        }
    }

    private disassembleAdd(instruction: HarwellInstruction): string {
        const addend: TapeEntry = this.processor.peekDataAfterInstruction(instruction.addressA);
        if (instruction.addressB === "01") {
            return "PRINT [" + instruction.addressA + "] (" + addend.toNumber() + ")";
        }
        const current: TapeEntry = this.processor.peek(instruction.addressB);
        const currentText: string = this.format(current);
        const addendText: string = this.format(addend);
        if (addend as HarwellInstruction && current.toNumber() == 0) {
            return "[" + instruction.addressB + "] = " + addend.toNumber();
        }
        const result: string = this.formatNumber(current.toNumber() + addend.toNumber());
        return "[" + instruction.addressB + "] += [" + instruction.addressA + "]"
            + " (" + currentText + " + " + addendText + " = " + result + ")";
    }

    private disassembleAddAndClear(instruction: HarwellInstruction): string {
        const addend: TapeEntry = this.processor.peekDataAfterInstruction(instruction.addressA);
        if (instruction.addressB === "00") {
            return "CLEAR [" + instruction.addressA + "] (" + addend.toNumber() + ")";
        }
        if (instruction.addressB === "01") {
            return "PRINT [" + instruction.addressA + "] (" + addend.toNumber() + ")";
        }
        const current: TapeEntry = this.processor.peek(instruction.addressB);
        const currentText: string = this.format(current);
        const addendText: string = this.format(addend);
        const result: string = this.formatNumber(current.toNumber() + addend.toNumber());
        return "[" + instruction.addressB + "] += [" + instruction.addressA + "]; CLEAR [" + instruction.addressA + "]"
            + " (" + currentText + " + " + addendText + " = " + result + ")";
    }

    private disassembleSubtract(instruction: HarwellInstruction): string {
        const subtrahend: TapeEntry = this.processor.peekDataAfterInstruction(instruction.addressA);
        if (instruction.addressB === "00") {
            return "CLEAR [" + instruction.addressA + "] (" + subtrahend.toNumber() + ")";
        }
        if (instruction.addressB === "01") {
            return "PRINT [" + instruction.addressA + "] (" + subtrahend.toNumber() + ")";
        }
        const current: TapeEntry = this.processor.peek(instruction.addressB);
        const currentText: string = this.format(current);
        const subtrahendText: string = this.format(subtrahend);
        const result: string = this.formatNumber(current.toNumber() - subtrahend.toNumber());
        return "[" + instruction.addressB + "] -= "
            + "[" + instruction.addressA + "]; CLEAR [" + instruction.addressA + "] (" + currentText + " - " + subtrahendText + " = " + result + ")";
    }

    private disassembleSubtractAndClear(instruction: HarwellInstruction): string {
        const subtrahend: TapeEntry = this.processor.peekDataAfterInstruction(instruction.addressA);
        const current: TapeEntry = this.processor.peek(instruction.addressB);
        const currentText: string = this.format(current);
        const subtrahendText: string = this.format(subtrahend);
        const result: string = this.formatNumber(current.toNumber() - subtrahend.toNumber());
        return "[" + instruction.addressB + "] -= "
            + "[" + instruction.addressA + "] (" + currentText + " - " + subtrahendText + " = " + result + ")";
    }

    private disassembleMultiply(instruction: HarwellInstruction): string {
        const multiplicand: TapeEntry = this.processor.peek(instruction.addressA);
        const multiplier: TapeEntry = this.processor.peek(instruction.addressB);
        const multiplicandText: string = this.format(multiplier);
        const multiplierText: string = this.format(multiplier);
        const result: string = this.formatNumber(multiplicand.toNumber() * multiplier.toNumber());
        return "[09] = " + "[" + instruction.addressA + "] * [" + instruction.addressB + "]"
            + " (" + multiplicandText + " * " + multiplierText + " = " + result + ")";
    }

    private disassembleDivide(instruction: HarwellInstruction): string {
        const dividend: TapeEntry = this.processor.peek("09");
        const divisor: TapeEntry = this.processor.peek(instruction.addressA);
        const dividendText: string = this.format(dividend);
        const divisorText: string = this.format(divisor);
        const quotient: string = this.formatNumber(dividend.toNumber() / divisor.toNumber());
        const remainder: string = this.formatNumber(dividend.toNumber() % divisor.toNumber());
        return "[" + instruction.addressB + "] = " + "[09] / [" + instruction.addressA + "]"
            + " (" + dividendText + " / " + divisorText + " = " + quotient + "); "
            + "[09] = " + "[09] % [" + instruction.addressA + "]"
            + " (" + dividendText + " % " + divisorText + " = " + remainder + ")";
    }

    private format(result: TapeEntry): string {
        return this.formatNumber(result.toNumber());
    }

    private formatNumber(result: number): string {
        return Number(result.toFixed(7)).toString();
    }
}

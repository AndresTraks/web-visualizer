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
                    + " (" + this.processor.peek(instruction.addressB) + ")";
            case "12":
                return "TEST NEGATIVE [" + instruction.addressB + "]"
                    + " (" + this.processor.peek(instruction.addressB) + ")";
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
        const addend: number = this.processor.peekDataAfterInstruction(instruction.addressA);
        if (instruction.addressB === "01") {
            return "PRINT [" + instruction.addressA + "] (" + addend + ")";
        }
        const current: number = this.processor.peek(instruction.addressB);
        const result: string = this.formatNumberResult(current + addend);
        return "[" + instruction.addressB + "] += [" + instruction.addressA + "]"
            + " (" + current + " + " + addend + " = " + result + ")";
    }

    private disassembleAddAndClear(instruction: HarwellInstruction): string {
        const addend: number = this.processor.peekDataAfterInstruction(instruction.addressA);
        if (instruction.addressB === "00") {
            return "CLEAR [" + instruction.addressA + "] (" + addend + ")";
        }
        if (instruction.addressB === "01") {
            return "PRINT [" + instruction.addressA + "] (" + addend + ")";
        }
        const current: number = this.processor.peek(instruction.addressB);
        const result: string = this.formatNumberResult(current + addend);
        return "[" + instruction.addressB + "] += [" + instruction.addressA + "]; CLEAR [" + instruction.addressA + "]"
            + " (" + current + " + " + addend + " = " + result + ")";
    }

    private disassembleSubtract(instruction: HarwellInstruction): string {
        const subtrahend: number = this.processor.peekDataAfterInstruction(instruction.addressA);
        if (instruction.addressB === "00") {
            return "CLEAR [" + instruction.addressA + "] (" + subtrahend + ")";
        }
        if (instruction.addressB === "01") {
            return "PRINT [" + instruction.addressA + "] (" + subtrahend + ")";
        }
        const current: number = this.processor.peek(instruction.addressB);
        const result: string = this.formatNumberResult(current - subtrahend);
        return "[" + instruction.addressB + "] -= "
            + "[" + instruction.addressA + "]; CLEAR [" + instruction.addressA + "] (" + current + " - " + subtrahend + " = " + result + ")";
    }

    private disassembleSubtractAndClear(instruction: HarwellInstruction): string {
        const subtrahend: number = this.processor.peekDataAfterInstruction(instruction.addressA);
        const current: number = this.processor.peek(instruction.addressB);
        const result: string = this.formatNumberResult(current - subtrahend);
        return "[" + instruction.addressB + "] -= "
            + "[" + instruction.addressA + "] (" + current + " - " + subtrahend + " = " + result + ")";
    }

    private disassembleMultiply(instruction: HarwellInstruction): string {
        const multiplicand: number = this.processor.peek(instruction.addressA);
        const multiplier: number = this.processor.peek(instruction.addressB);
        const result: string = this.formatNumberResult(multiplicand * multiplier);
        return "[09] = " + "[" + instruction.addressA + "] * [" + instruction.addressB + "]"
            + " (" + multiplicand + " * " + multiplier + " = " + result + ")";
    }

    private disassembleDivide(instruction: HarwellInstruction): string {
        const dividend: number = this.processor.peek("09");
        const divisor: number = this.processor.peek(instruction.addressA);
        const quotient: string = this.formatNumberResult(dividend / divisor);
        const remainder: string = this.formatNumberResult(dividend % divisor);
        return "[" + instruction.addressB + "] = " + "[09] / [" + instruction.addressA + "]"
            + " (" + dividend + " / " + divisor + " = " + quotient + "); "
            + "[09] = " + "[09] % [" + instruction.addressA + "]"
            + " (" + dividend + " % " + divisor + " = " + remainder + ")";
    }

    private formatNumberResult(result: number): string {
        return Number(result.toFixed(7)).toString();
    }
}

import { HarwellInstruction } from "./harwell-instruction";
import { Block } from "./tape/block";
import { Tape } from "./tape/tape";
import { TapeData } from "./tape/tape-data";
import { TapeEntry } from "./tape/tape-entry";

export class Assembler {
    static assemble(programText: string): Map<number, Tape> {
        const tapes: Map<number, Tape> = new Map<number, Tape>();
        var tapeNumber: number = 1;
        var entries: TapeEntry[] = [];
        programText.split('\n').forEach(entry => {
            if (entry.startsWith(';')) {
            } else if (entry == '==tape') {
                if (entries.length !== 0) {
                    tapes[tapeNumber] = new Tape(entries);
                    tapeNumber++;
                    entries = [];
                }
            } else if (entry.length === 5) {
                entries.push(HarwellInstruction.fromCode(entry));
            } else if (entry.length === 9) {
                const value: number = Number(entry) / 10000000;
                entries.push(new TapeData(value));
            } else if (entry.length === 3) {
                const blockNumber: number = Number(entry.substr(1, 1));
                entries.push(new Block(blockNumber));
            } else if (entry.length === 2) {
                const blockNumber: number = Number(entry.substr(1));
                entries.push(new Block(blockNumber));
            }
        });
        tapes[tapeNumber] = new Tape(entries);
        return tapes;
    }
}
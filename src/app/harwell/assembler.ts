import { Tape } from "./tape/tape";

export class Assembler {
    static assemble(programText: string): Map<number, Tape> {
        const tapes: Map<number, Tape> = new Map<number, Tape>();
        var tapeNumber: number = 1;
        var entries: number[] = [];
        var blockEntryIndices: Map<number, number> = new Map<number, number>();
        programText.split('\n').forEach(entry => {
            if (entry.startsWith(';')) {
            } else if (entry.startsWith('#')) {
                const blockNumber: number = Number(entry.substr(1));
                blockEntryIndices.set(blockNumber, entries.length);
            } else if (entry.startsWith('[') && entry.endsWith(']')) {
                const blockNumber: number = Number(entry.substr(1, entry.length - 2));
                blockEntryIndices.set(blockNumber, entries.length);
            } else if (entry == '==tape') {
                if (entries.length !== 0) {
                    tapes[tapeNumber] = new Tape(entries, blockEntryIndices);
                    tapeNumber++;
                    entries = [];
                    blockEntryIndices = new Map<number, number>();
                }
            } else if (entry.length === 5) {
                const instruction: number = Number(entry) * 1000;
                entries.push(instruction);
            } else if (entry.length === 9) {
                const data: number = Number(entry);
                entries.push(data);
            }
        });
        tapes[tapeNumber] = new Tape(entries, blockEntryIndices);
        return tapes;
    }
}
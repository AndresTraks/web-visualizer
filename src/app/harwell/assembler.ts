import { Tape } from "./tape/tape";

export class Assembler {
    static assemble(programText: string): Map<number, Tape> {
        const tapes: Map<number, Tape> = new Map<number, Tape>();
        var lineNumber: number = 0;
        var tapeNumber: number = 1;
        var entries: number[] = [];
        var blockEntryIndices: Map<number, number> = new Map<number, number>();
        programText.split('\n').forEach(entry => {
            lineNumber++;
            if (entry.startsWith(';') || entry.length === 0) {
            } else if (entry.startsWith('#')) {
                const blockNumber: number = Number(entry.substr(1));
                if (isNaN(blockNumber)) {
                    throw Error("Expected block number, got \"" + entry + "\" on line " + lineNumber + ".");
                }
                blockEntryIndices.set(blockNumber, entries.length);
            } else if (entry.startsWith('[') && entry.endsWith(']')) {
                const blockNumber: number = Number(entry.substr(1, entry.length - 2));
                if (isNaN(blockNumber)) {
                    throw Error("Expected block number, got \"" + entry + "\" on line " + lineNumber + ".");
                }
                blockEntryIndices.set(blockNumber, entries.length);
            } else if (entry.startsWith('Block ')) {
                const blockNumber: number = Number(entry.substr(6));
                if (isNaN(blockNumber)) {
                    throw Error("Expected block number, got \"" + entry + "\" on line " + lineNumber + ".");
                }
                blockEntryIndices.set(blockNumber, entries.length);
            } else if (entry == '==tape' || entry.startsWith('PTR')) {
                if (entries.length !== 0) {
                    tapes[tapeNumber] = new Tape(entries, blockEntryIndices);
                    tapeNumber++;
                    entries = [];
                    blockEntryIndices = new Map<number, number>();
                }
            } else if (entry.length === 5) {
                const instruction: number = Number(entry) * 1000;
                if (isNaN(instruction)) {
                    throw Error("Expected number, got \"" + entry + "\" on line " + lineNumber + ".");
                }
                entries.push(instruction);
            } else if (entry.length === 9) {
                let data: number = Number(entry);
                if (entry.includes('.')) {
                    data = data * 10000000;
                }
                if (isNaN(data)) {
                    throw Error("Expected number, got \"" + entry + "\" on line " + lineNumber + ".");
                }
                entries.push(data);
            } else {
                throw Error("Unexpected entry \"" + entry + "\" on line " + lineNumber + ".");
            }
        });
        tapes[tapeNumber] = new Tape(entries, blockEntryIndices);
        return tapes;
    }
}
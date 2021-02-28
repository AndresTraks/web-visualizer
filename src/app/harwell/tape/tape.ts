import { HarwellInstruction } from '../harwell-instruction';
import { TapeEntry } from './tape-entry';
import { TapeData } from './tape-data';
import { Block } from './block';

export class Tape {
    index: number = 0;
    blockNumber: number;

    private constructor(private entries: TapeEntry[]) {
    }

    static parse(data: string): Tape {
        const entries: TapeEntry[] = [];
        data.split('\n').forEach(entry => {
            if (entry.length === 5) {
                entries.push(HarwellInstruction.fromCode(entry));
            } else if (entry.length === 9) {
                const value: number = Number(entry) / 10000000;
                entries.push(new TapeData(value));
            } else if (entry.length === 3) {
                const blockNumber: number = Number(entry.substr(1, 1));
                entries.push(new Block(blockNumber));
            }
        });
        return new Tape(entries);
    }

    searchBlock(blockNumber: number): void {
        const startIndex: number = this.index;
        while (true) {
            const entry: TapeEntry = this.readEntry();
            if (entry instanceof Block) {
                if (entry.blockNumber === blockNumber) {
                    return;
                }
            }
            if (this.index === startIndex) {
                throw new Error("Block not found on tape after full loop");
            }
        }
    }

    readInstruction(): HarwellInstruction {
        return this.readEntry() as HarwellInstruction;
    }

    readData(): TapeData {
        return this.readEntry() as TapeData;
    }

    peekData(): TapeData {
        return this.peekEntry() as TapeData;
    }

    peekDataAfterInstruction(): TapeData {
        return this.peekEntryAt(this.index + 1) as TapeData;
    }

    readEntry(): TapeEntry {
        const entry: TapeEntry = this.peekEntry();
        this.index++;
        if (this.index >= this.entries.length) {
            this.index = 0;
        }
        if (entry instanceof Block) {
            this.blockNumber = entry.blockNumber;
        }
        return entry;
    }

    peekEntry(): TapeEntry {
        if (this.entries.length === 0) {
            throw new Error("No entry on tape to read.");
        }
        return this.entries[this.index];
    }

    peekEntryAt(index: number): TapeEntry {
        if (this.entries.length === 0) {
            throw new Error("No entry on tape to read.");
        }
        return this.entries[index];
    }
}

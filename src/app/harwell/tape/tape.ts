export class Tape {
    index: number = 0;
    blockNumber: number;

    constructor(private entries: number[], private blockEntryIndices: Map<number, number>) {
        for (const [block, index] of blockEntryIndices) {
            if (index === this.index) {
                this.blockNumber = block;
                break;
            }
        }
    }

    searchBlock(blockNumber: number): void {
        const index = this.blockEntryIndices.get(blockNumber);
        if (index !== undefined) {
            this.index = index;
            this.blockNumber = blockNumber;
        } else {
            throw new Error("Block " + blockNumber + " not found on tape after full loop");
        }
    }

    read(): number {
        const entry: number = this.peek();
        this.index++;
        if (this.index >= this.entries.length) {
            this.index = 0;
        }
        return entry;
    }

    peek(): number {
        if (this.entries.length === 0) {
            throw new Error("No entry on tape to read.");
        }
        return this.entries[this.index];
    }

    peekAhead(): number {
        if (this.index === this.entries.length - 1) {
            return this.peekAt(0);
        }
        return this.peekAt(this.index + 1);
    }

    peekAt(index: number): number {
        if (this.entries.length === 0) {
            throw new Error("No entry on tape to read.");
        }
        return this.entries[index];
    }
}

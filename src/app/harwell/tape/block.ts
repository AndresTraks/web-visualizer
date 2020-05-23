import { TapeEntry } from './tape-entry';

export class Block implements TapeEntry {
    blockNumber: number;

    constructor(blockNumber: number) {
        this.blockNumber = blockNumber;
    }
}

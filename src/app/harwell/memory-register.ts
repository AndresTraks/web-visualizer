import { SceneNode } from '../scene/scene-node';
import { Vector3 } from '../graphics/vector3';
import { TapeEntry } from './tape/tape-entry';
import { TapeData } from './tape/tape-data';

export class MemoryRegister {
    value: TapeEntry = new TapeData(0);
    indicators: SceneNode[];
    position: Vector3;

    constructor(indicators: SceneNode[], position: Vector3) {
        this.indicators = indicators;
        this.position = position;
    }
}

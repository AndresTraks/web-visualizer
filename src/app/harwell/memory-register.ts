import { SceneNode } from '../scene/scene-node';
import { Vector3 } from '../graphics/vector3';

export class MemoryRegister {
    value: number = 0;
    indicators: SceneNode[];
    position: Vector3;

    constructor(indicators: SceneNode[], position: Vector3) {
        this.indicators = indicators;
        this.position = position;
    }
}

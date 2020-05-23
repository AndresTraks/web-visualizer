import { Vector3 } from "../graphics/vector3";

export class Light {
    position: Vector3;

    constructor() {
        this.position = new Vector3(0, 2, 0);
    }

    set rotatingPosition(angle: number) {
        const lightAngle = angle / 16;
        const lightRadius = 2;
        this.position = new Vector3(Math.sin(lightAngle) * lightRadius, 1, Math.cos(lightAngle) * lightRadius);
    }
}

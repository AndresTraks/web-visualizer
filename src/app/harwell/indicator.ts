import { AppRenderingContext } from "../graphics/app-rendering-context";
import { Matrix4 } from "../graphics/matrix4";
import { Mesh } from "../graphics/mesh";
import { Vector3 } from "../graphics/vector3";
import { SceneNode } from "../scene/scene-node";

export class Indicator extends SceneNode {
    private currentDigit: number;

    constructor(mesh: Mesh, protected renderingContext: AppRenderingContext) {
        super(renderingContext);
        this.meshes = [mesh];
        this.color = [1, 0.2, 0.2, 1];
        this.program = renderingContext.emitterShader;
        this.position = Vector3.zero;
    }

    get digit() {
        return this.currentDigit;
    }

    set digit(digit: number) {
        if (this.currentDigit === digit) {
            return;
        }
        this.currentDigit = digit;

        const value = digit * (2 * Math.PI / 10);
        this.worldTransform = Matrix4.rotationX(Math.PI / 2)
            .multiply(Matrix4.translation(new Vector3(0, 0.0095, 0)))
            .multiply(Matrix4.rotationZ(value))
            .multiply(Matrix4.translation(this.position));
    }
}

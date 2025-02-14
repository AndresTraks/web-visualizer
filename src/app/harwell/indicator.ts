import { AppRenderingContext } from "../graphics/app-rendering-context";
import { Matrix4 } from "../graphics/matrix4";
import { Mesh } from "../graphics/mesh";
import { Vector3 } from "../graphics/vector3";
import { SceneNode } from "../scene/scene-node";

export class Indicator extends SceneNode {
    static readonly activeColor: number[] = [1, 0.2, 0.2, 1];
    static readonly passiveColor: number[] = [0.6, 0.12, 0.12, 1];

    private centerPosition: Vector3;
    private currentDigit: number;

    constructor(mesh: Mesh, renderingContext: AppRenderingContext, centerPosition: Vector3) {
        super(renderingContext);
        this.centerPosition = centerPosition.copy();
        this.meshes = [mesh];
        this.color = Indicator.passiveColor;
        this.program = renderingContext.emitterShader;
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
            .multiply(Matrix4.translation(this.centerPosition));
    }
}

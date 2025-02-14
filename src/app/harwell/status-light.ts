import { AppRenderingContext } from "../graphics/app-rendering-context";
import { Matrix4 } from "../graphics/matrix4";
import { Mesh } from "../graphics/mesh";
import { Vector3 } from "../graphics/vector3";
import { SceneNode } from "../scene/scene-node";

export class StatusLight extends SceneNode {
    
    static readonly activeRegisterColor: number[] = [1, 1, 1, 1];
    static readonly passiveRegisterColor: number[] = [0.2, 0.2, 0.2, 1];
    static readonly passiveStoreColor: number[] = [0, 0.2, 0, 1];
    static readonly activeStoreColor: number[] = [0, 1, 0, 1];
    static readonly passiveReadColor: number[] = [0.2, 0, 0, 1];
    static readonly activeReadColor: number[] = [1, 0, 0, 1];

    private statusFlag: boolean = false;
    private activeColorValue: number[] = StatusLight.activeRegisterColor;
    private passiveColorValue: number[] = StatusLight.passiveRegisterColor;

    constructor(mesh: Mesh, position: Vector3, renderingContext: AppRenderingContext) {
        super(renderingContext);
        this.meshes = [mesh];
        this.color = this.passiveColor;
        this.program = renderingContext.emitterShader;
        this.position = position;
    }

    get status(): boolean {
        return this.statusFlag;
    }

    set status(value: boolean) {
        this.statusFlag = value;
        this.color = this.statusFlag ? this.activeColorValue : this.passiveColorValue;
    }

    get activeColor(): number[] {
        return this.activeColorValue;
    }

    set activeColor(value: number[]) {
        this.activeColorValue = value;
        if (this.statusFlag) {
            this.color = this.activeColorValue;
        }
    }

    get passiveColor(): number[] {
        return this.passiveColorValue;
    }

    set passiveColor(value: number[]) {
        this.passiveColorValue = value;
        if (!this.statusFlag) {
            this.color = this.passiveColorValue;
        }
    }
}

import { Matrix4 } from "../graphics/matrix4";
import { Vector3 } from "../graphics/vector3";

export class Camera {
    eye: Vector3;
    target: Vector3;
    up: Vector3 = new Vector3(0, 1, 0);
    orthoScaling: number = 1;

    private fov: number = Math.PI / 4;
    private aspectRatio: number = 1;
    private nearPlane: number = 0.1;
    private farPlane: number = 100;
    private isOrthographic: boolean = false;

    private projection: Matrix4;

    constructor() {
        this.calculateProjection();
    }

    set fieldOfView(value: number) {
        this.fov = value;
        this.calculateProjection();
    }

    set near(value: number) {
        this.nearPlane = value;
        this.calculateProjection();
    }

    set far(value: number) {
        this.farPlane = value;
        this.calculateProjection();
    }

    set aspect(value: number) {
        this.aspectRatio = value;
        this.calculateProjection();
    }

    set orthographic(value: boolean) {
        this.isOrthographic = value;
        this.calculateProjection();
    }

    get viewMatrix(): Matrix4 {
        return Matrix4.view(this.eye, this.target, this.up);
    }

    get projectionMatrix(): Matrix4 {
        return this.projection;
    }

    private calculateProjection(): void {
        if (this.isOrthographic) {
            this.projection = Matrix4.orthographicProjection(this.aspectRatio * this.orthoScaling, this.orthoScaling, this.nearPlane, this.farPlane);
        } else {
            this.projection = Matrix4.perspectiveProjection(this.fov, this.aspectRatio, this.nearPlane, this.farPlane);
        }
    }

    set rotatingPosition(angle: number) {
        const eyeAngle = 1 + angle / 16;
        const eyeRadius = 1.75;
        this.eye = new Vector3(Math.sin(eyeAngle) * eyeRadius, 0.7 * Math.sin(eyeAngle + 4.5), Math.cos(eyeAngle) * eyeRadius);
    }
}

import { Matrix4 } from "../graphics/matrix4";
import { Vector3 } from "../graphics/vector3";

export class Camera {
    eye: Vector3;
    target: Vector3;
    up: Vector3 = new Vector3(0, 1, 0);

    fov: number = Math.PI / 4;
    aspect: number = 1;
    near: number = 0.1;
    far: number = 100;

    get viewMatrix(): Matrix4 {
        return Matrix4.view(this.eye, this.target, this.up);
    }

    get projectionMatrix(): Matrix4 {
        return Matrix4.perspectiveProjection(this.fov, this.aspect, this.near, this.far);
    }

    setRotatingPosition(seconds: number): void {
        const eyeAngle = 1 + seconds / 16;
        const eyeRadius = 1.75;
        this.eye = new Vector3(Math.sin(eyeAngle) * eyeRadius, 0.7 * Math.sin(eyeAngle + 4.5), Math.cos(eyeAngle) * eyeRadius);
    }
}

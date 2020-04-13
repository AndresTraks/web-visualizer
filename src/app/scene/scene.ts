import { Vector3 } from "../graphics/vector3";
import { ShaderProgram } from "../graphics/shader-program";
import { Camera } from "./camera";
import { Light } from "./light";

export class Scene {
    camera: Camera;
    light: Light;

    constructor(protected gl: WebGLRenderingContext) {
        this.camera = new Camera();
        this.camera.eye = new Vector3(1, 0.45, 0);
        //this.camera.target = new Vector3(-0.21, -0.155, 0.62);
        //this.camera.target = new Vector3(0, -0.2, 0);
        //this.camera.eye = new Vector3(1, 0, 0); // ortho front
        //this.camera.eye = new Vector3(-1, 0, 0); // ortho back
        //this.camera.eye = new Vector3(0.0001, -1, 0); // ortho bottom
        this.camera.eye = new Vector3(0.0001, 1, 0); // ortho top
        this.camera.target = new Vector3(0, 0, 0);

        this.light = new Light();
    }

    draw(program: ShaderProgram, seconds: number): void {
        this.light.setRotatingPosition(seconds),
        this.camera.setRotatingPosition(seconds);

        const perspectiveMatrixLocation: WebGLUniformLocation = program.getUniformLocation('projection_matrix');
        this.gl.uniformMatrix4fv(perspectiveMatrixLocation, false, this.camera.projectionMatrix.el);

        const viewMatrixLocation: WebGLUniformLocation = program.getUniformLocation('view_matrix');
        this.gl.uniformMatrix4fv(viewMatrixLocation, false, this.camera.viewMatrix.el);

        const eyePositionUniformLocation: WebGLUniformLocation = program.getUniformLocation('eye_position');
        this.gl.uniform3fv(eyePositionUniformLocation, this.camera.eye.el);

        const lightPositionUniformLocation: WebGLUniformLocation = program.getUniformLocation('light_position');
        this.gl.uniform3fv(lightPositionUniformLocation, this.light.position.el);
    }
}

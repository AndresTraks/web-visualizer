import { AppRenderingContext } from '../graphics/app-rendering-context';
import { ShaderProgram } from '../graphics/shader-program';
import { Vector3 } from "../graphics/vector3";
import { Camera } from "./camera";
import { Light } from "./light";

export class Scene {
    renderingContext: AppRenderingContext;
    protected gl: WebGLRenderingContext;

    camera: Camera;
    light: Light;
    clearColor: number[] = [0.5, 0.85, 0.8, 1.0];

    constructor(renderingContext: AppRenderingContext) {
        this.renderingContext = renderingContext;
        this.gl = renderingContext.gl;

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

    draw(seconds: number): void {
        this.setProgramUniforms(this.renderingContext.standardShader);
        this.setProgramUniforms(this.renderingContext.emitterShader);
    }

    setProgramUniforms(program: ShaderProgram): void {
        program.use();

        const perspectiveMatrixLocation: WebGLUniformLocation = program.getUniformLocation('projection_matrix');
        this.gl.uniformMatrix4fv(perspectiveMatrixLocation, false, this.camera.projectionMatrix.el);

        const viewMatrixLocation: WebGLUniformLocation = program.getUniformLocation('view_matrix');
        this.gl.uniformMatrix4fv(viewMatrixLocation, false, this.camera.viewMatrix.el);

        const lightPositionUniformLocation: WebGLUniformLocation = program.getUniformLocation('light_position');
        this.gl.uniform3fv(lightPositionUniformLocation, this.light.position.el);
    }
}

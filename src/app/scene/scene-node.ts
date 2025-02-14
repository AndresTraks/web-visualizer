import { AppRenderingContext } from '../graphics/app-rendering-context';
import { Matrix4 } from "../graphics/matrix4";
import { Mesh } from "../graphics/mesh";
import { Vector3 } from "../graphics/vector3";
import { ShaderProgram } from '../graphics/shader-program';

export class SceneNode {
    gl: WebGLRenderingContext;
    program: ShaderProgram;
    meshes?: Mesh[];
    worldTransform: Matrix4 = Matrix4.identity;
    color?: number[];
    children?: SceneNode[];

    get position(): Vector3 {
        return new Vector3(this.worldTransform.e41, this.worldTransform.e42, this.worldTransform.e43);
    }

    set position(value: Vector3) {
        this.worldTransform.e41 = value.x;
        this.worldTransform.e42 = value.y;
        this.worldTransform.e43 = value.z;
    }

    static withMesh(mesh: Mesh, renderingContext: AppRenderingContext): SceneNode {
        const node = new SceneNode(renderingContext);
        node.meshes = [mesh];
        return node;
    }

    constructor(protected renderingContext: AppRenderingContext) {
        this.gl = renderingContext.gl;
        this.program = this.renderingContext.standardShader;
    }

    draw(): void {
        if (this.color) {
            this.gl.uniform4fv(this.program.vertColorLocation, this.color);
        }

        if (this.meshes) {
            this.gl.uniformMatrix4fv(this.program.worldMatrixLocation, false, this.worldTransform.el);
            for (const mesh of this.meshes) {
                if (mesh.childWorldTransform) {
                    this.gl.uniformMatrix4fv(this.program.worldMatrixLocation, false, this.worldTransform.multiply(mesh.childWorldTransform).el);
                    mesh.draw(this.program);
                    this.gl.uniformMatrix4fv(this.program.worldMatrixLocation, false, this.worldTransform.el);
                } else {
                    mesh.draw(this.program);
                }
            }
        }

        if (this.children) {
            this.children.forEach(child => {
                child.draw();
            });
        }
    }
}

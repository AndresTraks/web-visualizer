import { Mesh } from "../graphics/mesh";
import { ShaderProgram } from "../graphics/shader-program";
import { Matrix4 } from "../graphics/matrix4";
import { Vector3 } from "../graphics/vector3";

export class SceneNode {
    meshes: Mesh[];
    position: Vector3;
    worldTransform: Matrix4 = Matrix4.identity;
    color: number[];
    children: SceneNode[];

    static withMesh(mesh: Mesh, gl: WebGLRenderingContext): SceneNode {
        const node = new SceneNode(gl);
        node.meshes = [mesh];
        return node;
    }

    constructor(protected gl: WebGLRenderingContext) {
    }

    draw(program: ShaderProgram): void {
        if (this.color) {
            this.gl.uniform4fv(program.vertColorLocation, this.color);
        }

        if (this.meshes) {
            this.gl.uniformMatrix4fv(program.worldMatrixLocation, false, this.worldTransform.el);
            for (const mesh of this.meshes) {
                if (mesh.childWorldTransform) {
                    this.gl.uniformMatrix4fv(program.worldMatrixLocation, false, this.worldTransform.multiply(mesh.childWorldTransform).el);
                    mesh.draw(program);
                    this.gl.uniformMatrix4fv(program.worldMatrixLocation, false, this.worldTransform.el);
                } else {
                    mesh.draw(program);
                }
            }
        }

        if (this.children) {
            this.children.forEach(child => {
                child.draw(program);
            });
        }
    }
}

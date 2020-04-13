import { Vector3 } from "./vector3";
import { ShaderProgram } from "./shader-program";
import { Matrix4 } from "./matrix4";

export class Mesh {
    numVertices: number;
    buffer: WebGLBuffer;
    positionAttribLocation: GLint;
    normalAttribLocation: GLint;
    childWorldTransform: Matrix4;

    constructor(vertices: Vector3[], private gl: WebGLRenderingContext) {
        this.buffer = gl.createBuffer();
        this.bind();
        this.gl.bufferData(this.gl.ARRAY_BUFFER, this.createBuffer(vertices), this.gl.STATIC_DRAW);

        this.numVertices = vertices.length / 2;
    }

    private createBuffer(vertices: Vector3[]): Float32Array {
        const arr: number[] = [];
        for (const vertex of vertices) {
            arr.push(vertex.x);
            arr.push(vertex.y);
            arr.push(vertex.z);
        }
        return new Float32Array(arr);
    }

    bind(): void {
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
    }

    draw(program: ShaderProgram): void {
        this.bind();

        this.positionAttribLocation = program.getAttribLocation('position');
        const stride = 6 * Float32Array.BYTES_PER_ELEMENT;
        this.gl.vertexAttribPointer(
            this.positionAttribLocation,
            3, // Number of components per attribute
            this.gl.FLOAT,
            false,
            stride,
            0
        );
        this.gl.enableVertexAttribArray(this.positionAttribLocation);

        this.normalAttribLocation = program.getAttribLocation('normal');
        this.gl.vertexAttribPointer(
            this.normalAttribLocation,
            3, // Number of components per attribute
            this.gl.FLOAT,
            false,
            stride,
            3 * Float32Array.BYTES_PER_ELEMENT
        );
        this.gl.enableVertexAttribArray(this.normalAttribLocation);

        this.gl.drawArrays(this.gl.TRIANGLES, 0, this.numVertices);

        this.gl.disableVertexAttribArray(this.positionAttribLocation);
        this.gl.disableVertexAttribArray(this.normalAttribLocation);
    }
}

import { Vector3 } from "./vector3";

export class Matrix4 {
    el: number[];

    constructor(el: number[]) {
        this.el = el;
    }

    get e11(): number { return this.el[0]; }
    get e12(): number { return this.el[1]; }
    get e13(): number { return this.el[2]; }
    get e14(): number { return this.el[3]; }
    get e21(): number { return this.el[4]; }
    get e22(): number { return this.el[5]; }
    get e23(): number { return this.el[6]; }
    get e24(): number { return this.el[7]; }
    get e31(): number { return this.el[8]; }
    get e32(): number { return this.el[9]; }
    get e33(): number { return this.el[10]; }
    get e34(): number { return this.el[11]; }
    get e41(): number { return this.el[12]; }
    get e42(): number { return this.el[13]; }
    get e43(): number { return this.el[14]; }
    get e44(): number { return this.el[15]; }

    set e11(value: number) { this.el[0] = value; }
    set e12(value: number) { this.el[1] = value; }
    set e13(value: number) { this.el[2] = value; }
    set e14(value: number) { this.el[3] = value; }
    set e21(value: number) { this.el[4] = value; }
    set e22(value: number) { this.el[5] = value; }
    set e23(value: number) { this.el[6] = value; }
    set e24(value: number) { this.el[7] = value; }
    set e31(value: number) { this.el[8] = value; }
    set e32(value: number) { this.el[9] = value; }
    set e33(value: number) { this.el[10] = value; }
    set e34(value: number) { this.el[11] = value; }
    set e41(value: number) { this.el[12] = value; }
    set e42(value: number) { this.el[13] = value; }
    set e43(value: number) { this.el[14] = value; }
    set e44(value: number) { this.el[15] = value; }

    static get identity(): Matrix4 {
        return new Matrix4([
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]);
    }

    static translation(origin: Vector3): Matrix4 {
        return new Matrix4([
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            origin.x, origin.y, origin.z, 1
        ]);
    }

    static rotationX(angle: number): Matrix4 {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return new Matrix4([
            1, 0, 0, 0,
            0, cos, sin, 0,
            0, -sin, cos, 0,
            0, 0, 0, 1
        ]);
    }

    static rotationY(angle: number): Matrix4 {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return new Matrix4([
            cos, 0, sin, 0,
            0, 1, 0, 0,
            -sin, 0, cos, 0,
            0, 0, 0, 1
        ]);
    }

    static rotationZ(angle: number): Matrix4 {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return new Matrix4([
            cos, -sin, 0, 0,
            sin, cos, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]);
    }

    static perspectiveProjection(fov: number, aspect: number, near: number, far: number): Matrix4 {
        const top = near * Math.tan(0.5 * fov);
        const bottom = -top;
        const left = bottom * aspect;
        const right = top * aspect;

        const x = (2 * near) / (right - left);
        const y = (2 * near) / (top - bottom);
        const a = (right + left) / (right - left);
        const b = (top + bottom) / (top - bottom);
        const c = -(far + near) / (far - near);
        const d = -(2 * far * near) / (far - near);

        return new Matrix4([
            x, 0, 0, 0,
            0, y, 0, 0,
            a, b, c, -1,
            0, 0, d, 0
        ]);
    }

    static orthographicProjection(width: number, height: number, near: number, far: number): Matrix4 {
        const left = -width / 2;
        const right = width / 2;
        const bottom = -height / 2;
        const top = height / 2;

        const inverseRL = 1 / (right - left);
        const inverseTB = 1 / (top - bottom);
        const inverseFN = 1 / (far - near);

        return new Matrix4([
            2 * inverseRL, 0, 0, 0,
            0, 2 * inverseTB, 0, 0,
            0, 0, -2 * inverseFN, 0,
            -(right + left) * inverseRL, -(top + bottom) * inverseTB, -(far + near) * inverseFN, 1
        ]);
    }

    static view(eye: Vector3, target: Vector3, up: Vector3): Matrix4 {
        const z: Vector3 = eye.subtract(target).normalized;
        const x: Vector3 = up.cross(z).normalized;
        const y: Vector3 = z.cross(x).normalized;

        return new Matrix4([
            x.x, y.x, z.x, 0,
            x.y, y.y, z.y, 0,
            x.z, y.z, z.z, 0,
            -x.dot(eye), -y.dot(eye), -z.dot(eye), 1]);
    }

    multiply(other: Matrix4): Matrix4 {
        var a = this;
        var b = other;
        const result: number[] = [
            a.e11 * b.e11 + a.e12 * b.e21 + a.e13 * b.e31 + a.e14 * b.e41,
            a.e11 * b.e12 + a.e12 * b.e22 + a.e13 * b.e32 + a.e14 * b.e42,
            a.e11 * b.e13 + a.e12 * b.e23 + a.e13 * b.e33 + a.e14 * b.e43,
            a.e11 * b.e14 + a.e12 * b.e24 + a.e13 * b.e34 + a.e14 * b.e44,

            a.e21 * b.e11 + a.e22 * b.e21 + a.e23 * b.e31 + a.e24 * b.e41,
            a.e21 * b.e12 + a.e22 * b.e22 + a.e23 * b.e32 + a.e24 * b.e42,
            a.e21 * b.e13 + a.e22 * b.e23 + a.e23 * b.e33 + a.e24 * b.e43,
            a.e21 * b.e14 + a.e22 * b.e24 + a.e23 * b.e34 + a.e24 * b.e44,

            a.e31 * b.e11 + a.e32 * b.e21 + a.e33 * b.e31 + a.e34 * b.e41,
            a.e31 * b.e12 + a.e32 * b.e22 + a.e33 * b.e32 + a.e34 * b.e42,
            a.e31 * b.e13 + a.e32 * b.e23 + a.e33 * b.e33 + a.e34 * b.e43,
            a.e31 * b.e14 + a.e32 * b.e24 + a.e33 * b.e34 + a.e34 * b.e44,

            a.e41 * b.e11 + a.e42 * b.e21 + a.e43 * b.e31 + a.e44 * b.e41,
            a.e41 * b.e12 + a.e42 * b.e22 + a.e43 * b.e32 + a.e44 * b.e42,
            a.e41 * b.e13 + a.e42 * b.e23 + a.e43 * b.e33 + a.e44 * b.e43,
            a.e41 * b.e14 + a.e42 * b.e24 + a.e43 * b.e34 + a.e44 * b.e44];
        return new Matrix4(result);
    }
}

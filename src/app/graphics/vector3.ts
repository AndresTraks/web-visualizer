export class Vector3 {
    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    static get zero(): Vector3 {
        return new Vector3(0, 0, 0);
    }

    get el(): number[] {
        return [this.x, this.y, this.z];
    }

    get length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    get negated(): Vector3 {
        return new Vector3(-this.x, -this.y, -this.z);
    }

    get normalized(): Vector3 {
        const scale = 1 / this.length;
        return new Vector3(
            this.x * scale,
            this.y * scale,
            this.z * scale);
    }

    add(other: Vector3): Vector3 {
        return new Vector3(
            this.x + other.x,
            this.y + other.y,
            this.z + other.z);
    }

    subtract(other: Vector3): Vector3 {
        return new Vector3(
            this.x - other.x,
            this.y - other.y,
            this.z - other.z);
    }

    cross(other: Vector3): Vector3 {
        return new Vector3(
            this.y * other.z - this.z * other.y,
            this.z * other.x - this.x * other.z,
            this.x * other.y - this.y * other.x);
    }

    dot(other: Vector3): number {
        return this.x * other.x + this.y * other.y + this.z * other.z;
    }
}

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

    static getBoundingPoints(vectors: Vector3[]): Vector3[] {
        let minPoint: Vector3 = vectors[0];
        let maxPoint: Vector3 = vectors[0];
        for (let i: number = 1; i < vectors.length; i++) {
            const v: Vector3 = vectors[i];
            minPoint.x = Math.min(minPoint.x, v.x);
            minPoint.y = Math.min(minPoint.y, v.y);
            minPoint.z = Math.min(minPoint.z, v.z);
            maxPoint.x = Math.max(maxPoint.x, v.x);
            maxPoint.y = Math.max(maxPoint.y, v.y);
            maxPoint.z = Math.max(maxPoint.z, v.z);
        }
        return [minPoint, maxPoint];
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

    copy(): Vector3 {
        return new Vector3(this.x, this.y, this.z);
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

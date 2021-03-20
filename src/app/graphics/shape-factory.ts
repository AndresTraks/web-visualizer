import { Vector3 } from "./vector3";

export class ShapeFactory {
    static createBox(halfSize: Vector3): Vector3[] {
        const p1 = new Vector3(-halfSize.x, halfSize.y, -halfSize.z);
        const p2 = new Vector3(-halfSize.x, halfSize.y, halfSize.z);
        const p3 = new Vector3(halfSize.x, halfSize.y, -halfSize.z);
        const p4 = new Vector3(halfSize.x, halfSize.y, halfSize.z);
        const p5 = new Vector3(-halfSize.x, -halfSize.y, -halfSize.z);
        const p6 = new Vector3(-halfSize.x, -halfSize.y, halfSize.z);
        const p7 = new Vector3(halfSize.x, -halfSize.y, -halfSize.z);
        const p8 = new Vector3(halfSize.x, -halfSize.y, halfSize.z);

        const vertices: Vector3[] = [];
        this.pushTriangle(vertices, p1, p2, p3);
        this.pushTriangle(vertices, p3, p2, p4);
        
        this.pushTriangle(vertices, p6, p5, p7);
        this.pushTriangle(vertices, p6, p7, p8);

        this.pushTriangle(vertices, p1, p3, p5);
        this.pushTriangle(vertices, p5, p3, p7);

        this.pushTriangle(vertices, p3, p4, p7);
        this.pushTriangle(vertices, p7, p4, p8);

        this.pushTriangle(vertices, p4, p2, p8);
        this.pushTriangle(vertices, p8, p2, p6);

        this.pushTriangle(vertices, p2, p1, p6);
        this.pushTriangle(vertices, p6, p1, p5);
        return vertices;
    }

    static createCase(halfSize: Vector3): Vector3[] {
        const thickness = 0.0075;
        const p1 = new Vector3(-halfSize.x, halfSize.y, -halfSize.z);
        const i1 = new Vector3(-halfSize.x + thickness, halfSize.y, -halfSize.z + thickness);
        const p2 = new Vector3(-halfSize.x, halfSize.y, halfSize.z);
        const i2 = new Vector3(-halfSize.x + thickness, halfSize.y, halfSize.z - thickness);
        const p3 = new Vector3(halfSize.x, halfSize.y, -halfSize.z);
        const i3 = new Vector3(halfSize.x - thickness, halfSize.y, -halfSize.z + thickness);
        const p4 = new Vector3(halfSize.x, halfSize.y, halfSize.z);
        const i4 = new Vector3(halfSize.x - thickness, halfSize.y, halfSize.z - thickness);
        const p5 = new Vector3(-halfSize.x, -halfSize.y, -halfSize.z);
        const i5 = new Vector3(-halfSize.x + thickness, -halfSize.y, -halfSize.z + thickness);
        const p6 = new Vector3(-halfSize.x, -halfSize.y, halfSize.z);
        const i6 = new Vector3(-halfSize.x + thickness, -halfSize.y, halfSize.z - thickness);
        const p7 = new Vector3(halfSize.x, -halfSize.y, -halfSize.z);
        const i7 = new Vector3(halfSize.x - thickness, -halfSize.y, -halfSize.z + thickness);
        const p8 = new Vector3(halfSize.x, -halfSize.y, halfSize.z);
        const i8 = new Vector3(halfSize.x - thickness, -halfSize.y, halfSize.z - thickness);

        const vertices: Vector3[] = [];
        this.pushTriangle(vertices, p1, p3, p5);
        this.pushTriangle(vertices, i1, i5, i3);
        this.pushTriangle(vertices, p5, p3, p7);
        this.pushTriangle(vertices, i3, i5, i7);

        this.pushTriangle(vertices, p3, p4, p7);
        this.pushTriangle(vertices, i4, i3, i7);
        this.pushTriangle(vertices, p7, p4, p8);
        this.pushTriangle(vertices, i4, i7, i8);

        this.pushTriangle(vertices, p4, p2, p8);
        this.pushTriangle(vertices, i2, i4, i8);
        this.pushTriangle(vertices, p8, p2, p6);
        this.pushTriangle(vertices, i2, i8, i6);

        this.pushTriangle(vertices, p2, p1, p6);
        this.pushTriangle(vertices, i1, i2, i6);
        this.pushTriangle(vertices, p6, p1, p5);
        this.pushTriangle(vertices, i1, i6, i5);

        this.pushTriangle(vertices, p1, p2, i1);
        this.pushTriangle(vertices, i1, p2, i2);
        this.pushTriangle(vertices, p2, p4, i2);
        this.pushTriangle(vertices, i2, p4, i4);
        this.pushTriangle(vertices, p3, i4, p4);
        this.pushTriangle(vertices, p3, i3, i4);
        this.pushTriangle(vertices, p1, i3, p3);
        this.pushTriangle(vertices, p1, i1, i3);

        this.pushTriangle(vertices, p5, i5, p6);
        this.pushTriangle(vertices, p6, i5, i6);
        this.pushTriangle(vertices, p6, i6, p8);
        this.pushTriangle(vertices, i6, i8, p8);
        this.pushTriangle(vertices, p7, p8, i8);
        this.pushTriangle(vertices, p7, i8, i7);
        this.pushTriangle(vertices, p5, p7, i7);
        this.pushTriangle(vertices, p5, i7, i5);
        return vertices;
    }

    static createDial(): Vector3[] {
        const y = 0.01;
        const z = 0.02;
        const p1 = new Vector3(-0.1, y, 0);
        const p2 = new Vector3(0, y, z);
        const p3 = new Vector3(0, y, -z);
        const p4 = new Vector3(-0.1, -y, 0);
        const p5 = new Vector3(0, -y, z);
        const p6 = new Vector3(0, -y, -z);

        const vertices: Vector3[] = [];
        this.pushTriangle(vertices, p1, p2, p3);

        this.pushTriangle(vertices, p1, p4, p2);
        this.pushTriangle(vertices, p2, p4, p5);

        this.pushTriangle(vertices, p1, p3, p4);
        this.pushTriangle(vertices, p4, p3, p6);

        this.pushTriangle(vertices, p3, p2, p6);
        this.pushTriangle(vertices, p6, p2, p5);

        this.pushTriangle(vertices, p5, p4, p6);
        return vertices;
    }

    static createCylinder(radius: number, height: number, numSteps: number): Vector3[] {
        const baseCenter = new Vector3(0, -height, 0);
        const vertices: Vector3[] = [];
        let angle = 0;
        const step = 2 * Math.PI / numSteps;
        for (let i = 0; i < numSteps; i++) {
            const p1 = new Vector3(radius * Math.sin(angle), 0, radius * Math.cos(angle));
            const p2 = new Vector3(radius * Math.sin(angle + step), 0, radius * Math.cos(angle + step));
            const p3 = p1.add(new Vector3(0, -height, 0));
            const p4 = p2.add(new Vector3(0, -height, 0));
            this.pushTriangle(vertices, Vector3.zero, p1, p2);
            this.pushTriangle(vertices, p3, baseCenter, p4);
            this.pushTriangle(vertices, p2, p1, p3);
            this.pushTriangle(vertices, p2, p3, p4);
            angle += step;
        }
        return vertices;
    }

    protected static pushTriangle(vertices: Vector3[], v1: Vector3, v2: Vector3, v3: Vector3): void {
        const normal: Vector3 = ShapeFactory.calculateNormal(v1, v2, v3);
        vertices.push(v1, normal, v2, normal, v3, normal);
    }

    protected static calculateNormal(v1: Vector3, v2: Vector3, v3: Vector3): Vector3 {
        const u: Vector3 = v2.subtract(v1);
        const v: Vector3 = v3.subtract(v1);
        const normal = new Vector3(
            u.y * v.z - u.z * v.y,
            u.z * v.x - u.x * v.z,
            u.x * v.y - u.y * v.x);
        return normal.normalized;
    }

    static append(to: Vector3[], from: Vector3[]): void {
        from.forEach(vertex => {
            to.push(vertex);
        });
    }

    static appendWithOffset(to: Vector3[], from: Vector3[], offset: Vector3): void {
        from.forEach(vertex => {
            to.push(vertex.add(offset));
        });
    }
}

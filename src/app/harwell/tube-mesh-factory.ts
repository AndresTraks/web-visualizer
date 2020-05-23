import { ShapeFactory } from '../graphics/shape-factory';
import { Vector3 } from '../graphics/vector3';

export class TubeFactory extends ShapeFactory {
    static readonly tubeDistance: number = 0.0425;

    static createTube(radius: number, height: number): Vector3[] {
        const numSegments = 10;
        const segmentAngle = 2 * Math.PI / numSegments;

        const vertices: Vector3[] = [];
        let angle = 0;

        for (let s = 0; s < numSegments; s++) {
            const t1 = new Vector3(radius * Math.cos(angle), 0, radius * Math.sin(angle));
            const b1 = new Vector3(radius * Math.cos(angle), -height, radius * Math.sin(angle));
            const b2 = new Vector3(0, -height, 0);
            const t2 = Vector3.zero;
            angle += segmentAngle;
            const t3 = new Vector3(radius * Math.cos(angle), 0, radius * Math.sin(angle));
            const b3 = new Vector3(radius * Math.cos(angle), -height, radius * Math.sin(angle));

            this.pushTriangle(vertices, t1, t2, t3);
            this.pushTriangle(vertices, b2, b1, b3);

            this.pushTriangle(vertices, t1, t3, b1);
            this.pushTriangle(vertices, b1, t3, b3);
        }

        return vertices;
    }

    static createTubeRow(z: number): Vector3[] {
        const tubes: Vector3[] = [];
        const tube = this.createTube(0.015, 0.05);

        const offset = new Vector3(-0.23, 0, z);
        for (let i = 0; i < 5; i++) {
            tube.forEach(vertex => {
                tubes.push(vertex.add(offset));
            });
            offset.x += 0.0425;
        }
        offset.x += 0.1;
        for (let i = 0; i < 4; i++) {
            tube.forEach(vertex => {
                tubes.push(vertex.add(offset));
            });
            offset.x += 0.0425;
        }
        return tubes;
    }

    static createMemoryUnit(): Vector3[] {
        const rows: Vector3[] = [];
        for (let i = 0; i < 5; i++) {
            const row = this.createTubeRow(-0.22 + i * this.tubeDistance);
            row.forEach(vertex => {
                rows.push(vertex);
            });
        }
        for (let i = 5; i < 10; i++) {
            const row = this.createTubeRow(-0.165 + i * this.tubeDistance);
            row.forEach(vertex => {
                rows.push(vertex);
            });
        }
        return rows;
    }
}

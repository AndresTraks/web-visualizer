import { Vector3 } from "./vector3";
import { ShapeFactory } from "./shape-factory";

export class GearMeshFactory extends ShapeFactory{
    static create(numTeeth: number, outerRadius: number, innerRadius:number, axleRadius: number): Vector3[] {
        return this.createWithAxle(numTeeth, outerRadius, innerRadius, axleRadius);
    }

    static createWithAxle(numTeeth: number, outerRadius: number, innerRadius:number, axleRadius: number): Vector3[] {
        const thickness = 0.025;

        const vertices: Vector3[] = [];
        const step = Math.PI / numTeeth;
        let angle = 0;
        for (let tooth = 0; tooth < numTeeth; tooth++) {
            const top1 = new Vector3(axleRadius * Math.sin(angle), 0, axleRadius * Math.cos(angle));
            const top2 = new Vector3(outerRadius * Math.sin(angle), 0, outerRadius * Math.cos(angle));
            angle += step
            const top3 = new Vector3(innerRadius * Math.sin(angle), 0, innerRadius * Math.cos(angle));
            angle += step;
            const top4 = new Vector3(axleRadius * Math.sin(angle), 0, axleRadius * Math.cos(angle));
            const top5 = new Vector3(outerRadius * Math.sin(angle), 0, outerRadius * Math.cos(angle));

            const bottom1 = top1.subtract(new Vector3(0, thickness, 0));
            const bottom2 = top2.subtract(new Vector3(0, thickness, 0));
            const bottom3 = top3.subtract(new Vector3(0, thickness, 0));
            const bottom4 = top4.subtract(new Vector3(0, thickness, 0));
            const bottom5 = top5.subtract(new Vector3(0, thickness, 0));

            this.pushTriangle(vertices, top1, top2, top3);
            this.pushTriangle(vertices, top1, top3, top4);
            this.pushTriangle(vertices, top4, top3, top5);

            this.pushTriangle(vertices, bottom2, bottom1, bottom3);
            this.pushTriangle(vertices, bottom3, bottom1, bottom4);
            this.pushTriangle(vertices, bottom3, bottom4, bottom5);

            this.pushTriangle(vertices, top2, bottom2, top3);
            this.pushTriangle(vertices, top3, bottom2, bottom3);
            this.pushTriangle(vertices, top3, bottom3, top5);
            this.pushTriangle(vertices, top5, bottom3, bottom5);

            this.pushTriangle(vertices, bottom1, top1, top4);
            this.pushTriangle(vertices, bottom1, top4, bottom4);
        }
        return vertices;
    }

    static createClosed(numTeeth: number, outerRadius: number, innerRadius: number): Vector3[] {
        return this.createWithAxle(numTeeth, outerRadius, innerRadius, 0.02);
        const thickness = 0.025;

        const vertices: Vector3[] = [];
        const step = Math.PI / numTeeth;
        let angle = 0;
        for (let tooth = 0; tooth < numTeeth; tooth++) {
            const top0 = new Vector3(0, 0, 0);
            const top2 = new Vector3(outerRadius * Math.sin(angle), 0, outerRadius * Math.cos(angle));
            angle += step
            const top3 = new Vector3(innerRadius * Math.sin(angle), 0, innerRadius * Math.cos(angle));
            angle += step;
            const top5 = new Vector3(outerRadius * Math.sin(angle), 0, outerRadius * Math.cos(angle));

            const bottom0 = top0.subtract(new Vector3(0, thickness, 0));
            const bottom2 = top2.subtract(new Vector3(0, thickness, 0));
            const bottom3 = top3.subtract(new Vector3(0, thickness, 0));
            const bottom5 = top5.subtract(new Vector3(0, thickness, 0));

            this.pushTriangle(vertices, top0, top2, top3);
            this.pushTriangle(vertices, top0, top3, top5);

            this.pushTriangle(vertices, bottom2, bottom0, bottom3);
            this.pushTriangle(vertices, bottom3, bottom0, bottom5);

            this.pushTriangle(vertices, top2, bottom2, top3);
            this.pushTriangle(vertices, top3, bottom2, bottom3);
            this.pushTriangle(vertices, top3, bottom3, top5);
            this.pushTriangle(vertices, top5, bottom3, bottom5);
        }
        return vertices;
    }

    static createFace(numTeeth: number, outerRadius: number, innerRadius: number): Vector3[] {
        const innerDepth = innerRadius - outerRadius;
        const axleRadius = outerRadius - 0.025;
        const depth = -0.1;

        const vertices: Vector3[] = [];
        const step = Math.PI / numTeeth;
        let angle = 0;
        for (let tooth = 0; tooth < numTeeth; tooth++) {
            const top1 = new Vector3(outerRadius * Math.sin(angle), depth, outerRadius * Math.cos(angle));
            const bottom1 = new Vector3(axleRadius * Math.sin(angle), depth, axleRadius * Math.cos(angle));
            const top2 = new Vector3(outerRadius * Math.sin(angle), 0, outerRadius * Math.cos(angle));
            const bottom2 = new Vector3(axleRadius * Math.sin(angle), 0, axleRadius * Math.cos(angle));
            angle += step
            const top3 = new Vector3(outerRadius * Math.sin(angle), innerDepth, outerRadius * Math.cos(angle));
            const bottom3 = new Vector3(axleRadius * Math.sin(angle), innerDepth, axleRadius * Math.cos(angle));
            angle += step;
            const top4 = new Vector3(outerRadius * Math.sin(angle), depth, outerRadius * Math.cos(angle));
            const bottom4 = new Vector3(axleRadius * Math.sin(angle), depth, axleRadius * Math.cos(angle));
            const top5 = new Vector3(outerRadius * Math.sin(angle), 0, outerRadius * Math.cos(angle));
            const bottom5 = new Vector3(axleRadius * Math.sin(angle), 0, axleRadius * Math.cos(angle));

            this.pushTriangle(vertices, top2, top1, top3);
            this.pushTriangle(vertices, top3, top1, top4);
            this.pushTriangle(vertices, top3, top4, top5);

            this.pushTriangle(vertices, bottom1, bottom2, bottom3);
            this.pushTriangle(vertices, bottom1, bottom3, bottom4);
            this.pushTriangle(vertices, bottom4, bottom3, bottom5);

            this.pushTriangle(vertices, bottom2, top2, top3);
            this.pushTriangle(vertices, bottom2, top3, bottom3);
            this.pushTriangle(vertices, bottom3, top3, top5);
            this.pushTriangle(vertices, bottom3, top5, bottom5);

            this.pushTriangle(vertices, top1, bottom1, top4);
            this.pushTriangle(vertices, top4, bottom1, bottom4);
        }
        return vertices;
    }
}

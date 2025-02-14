
import { Mesh } from "../graphics/mesh";
import { GearMeshFactory } from "../graphics/gear-mesh-factory";
import { SceneNode } from "./scene-node";
import { ShapeFactory } from "../graphics/shape-factory";
import { Vector3 } from "../graphics/vector3";
import { Matrix4 } from "../graphics/matrix4";
import { AppRenderingContext } from '../graphics/app-rendering-context';

export class GearNode extends SceneNode {
    angle: number = 0;

    static createFace(numTeeth: number, outerRadius: number, renderingContext: AppRenderingContext): GearNode {
        const innerRadius = GearNode.getRightAngleToothInnerRadius(outerRadius, numTeeth);
        const mesh = new Mesh(GearMeshFactory.createFace(numTeeth, outerRadius, innerRadius), renderingContext.gl);
        return new GearNode(numTeeth, outerRadius, innerRadius, null, mesh, renderingContext);
    }

    static create(numTeeth: number, outerRadius: number, axleRadius: number, renderingContext: AppRenderingContext): GearNode {
        const innerRadius = GearNode.getRightAngleToothInnerRadius(outerRadius, numTeeth);
        const mesh = new Mesh(GearMeshFactory.create(numTeeth, outerRadius, innerRadius, axleRadius), renderingContext.gl);
        return new GearNode(numTeeth, outerRadius, innerRadius, axleRadius, mesh, renderingContext);
    }

    static createClosed(numTeeth: number, outerRadius: number, renderingContext: AppRenderingContext): GearNode {
        const innerRadius = GearNode.getRightAngleToothInnerRadius(outerRadius, numTeeth);
        const mesh = new Mesh(GearMeshFactory.createClosed(numTeeth, outerRadius, innerRadius), renderingContext.gl);
        return new GearNode(numTeeth, outerRadius, innerRadius, null, mesh, renderingContext);
    }

    constructor(private numTeeth: number,
        private outerRadius: number,
        private innerRadius: number,
        private axleRadius: number | null,
        mesh: Mesh,
        renderingContext: AppRenderingContext) {
        super(renderingContext);
        this.meshes = [mesh];
    }

    private static getRightAngleToothInnerRadius(outerRadius: number, numTeeth: number) {
        const perimeter = 2 * Math.PI * outerRadius;
        const toothAngle = perimeter / numTeeth;
        const innerRadius = outerRadius - (toothAngle / 2);
        return innerRadius;
    }

    addCross(): void {
        const thickness = 0.01;
        const width = 0.08;
        const crossMesh1 = new Mesh(ShapeFactory.createBox(new Vector3(this.axleRadius!, thickness, width)), this.gl);
        crossMesh1.childWorldTransform = Matrix4.translation(new Vector3(0, -0.012, 0));
        const crossMesh2 = new Mesh(ShapeFactory.createBox(new Vector3(width, thickness, this.axleRadius!)), this.gl);
        crossMesh2.childWorldTransform = Matrix4.translation(new Vector3(0, -0.011, 0));
        this.meshes = this.meshes ?? [];
        this.meshes.push(crossMesh1, crossMesh2);
    }

    setAttributesToParent(parent: GearNode, offset: number): void {
        this.setAngleToParent(parent);
        this.setPositionToParent(parent, offset);
    }

    setAttributesByParent(parent: GearNode, angle: number): void {
        this.setAngleByParent(parent);
        this.setAdjacentPosition(parent, angle);
    }

    setAngleToParent(parent: GearNode): void {
        this.angle = parent.angle;
    }

    setAngleByParent(parent: GearNode): void {
        this.angle = -parent.angle * (parent.numTeeth / this.numTeeth);
    }

    setPositionToParent(parent: GearNode, offset: number): void {
        this.position = parent.position.add(new Vector3(0, offset, 0));
    }

    setAdjacentPosition(parent: GearNode, angle: number): void {
        const distance = this.innerRadius + parent.innerRadius +
            ((parent.outerRadius - parent.innerRadius) + (this.outerRadius - this.innerRadius)) / 2;
        this.position = parent.position.add(new Vector3(distance * Math.sin(angle), 0, distance * Math.cos(angle)));
    }
}

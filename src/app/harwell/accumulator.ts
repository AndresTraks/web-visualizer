import { AppRenderingContext } from '../graphics/app-rendering-context';
import { Matrix4 } from '../graphics/matrix4';
import { Mesh } from '../graphics/mesh';
import { ShapeFactory } from '../graphics/shape-factory';
import { Vector3 } from '../graphics/vector3';
import { SceneNode } from '../scene/scene-node';
import { Indicator } from './indicator';
import { MemoryRegister } from './memory-register';
import { TubeFactory } from './tube-mesh-factory';

export class Accumulator extends SceneNode {
    register: MemoryRegister;

    constructor(memoryUnitMesh: Mesh, tubeMesh: Mesh, indicatorMesh: Mesh, position: Vector3, renderingContext: AppRenderingContext) {
        super(renderingContext);
        this.position = position;

        const caseNode = SceneNode.withMesh(memoryUnitMesh, renderingContext);
        caseNode.color = [0.5, 0.5, 0.5, 1];
        caseNode.worldTransform = Matrix4.rotationX(Math.PI / 2).multiply(Matrix4.translation(position));

        const backNode = SceneNode.withMesh(new Mesh(ShapeFactory.createBox(new Vector3(0.25, 0.25, 0.1)), this.gl), renderingContext);
        backNode.color = [0.5, 0.5, 0.5, 1];
        backNode.worldTransform = Matrix4.translation(position.add(new Vector3(0, 0, -0.15)));

        const tubeNode = SceneNode.withMesh(tubeMesh, renderingContext);
        tubeNode.color = [0.2, 0.2, 0.2, 1];
        tubeNode.worldTransform = Matrix4.rotationX(Math.PI / 2).multiply(Matrix4.translation(position));

        this.children = [caseNode, backNode, tubeNode];

        this.register = this.createRegister(indicatorMesh, renderingContext);
    }

    private createRegister(indicatorMesh: Mesh, renderingContext: AppRenderingContext): MemoryRegister {
        const registerPosition = this.position.add(new Vector3(-0.15, -0.1, 0));
        const indicators: Indicator[] = this.createIndicators(indicatorMesh, renderingContext, registerPosition);
        return new MemoryRegister(indicators);
    }

    private createIndicators(indicatorMesh: Mesh, renderingContext: AppRenderingContext, origin: Vector3) {
        const indicators: Indicator[] = [];

        const indicatorPosition: Vector3 = origin.copy();
        for (let i = 0; i < 8; i++) {
            indicators[i] = new Indicator(indicatorMesh, renderingContext, indicatorPosition);
            indicatorPosition.x += TubeFactory.tubeDistance;
        }

        return indicators;
    }

    override draw(): void {
        this.children?.forEach(child => {
            child.draw();
        });

        this.renderingContext.emitterShader.use();
        for (const indicator of this.register.indicators) {
            indicator.draw();
        }
        this.renderingContext.standardShader.use();
    }
}

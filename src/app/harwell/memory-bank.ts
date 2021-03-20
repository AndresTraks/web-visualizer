import { AppRenderingContext } from '../graphics/app-rendering-context';
import { Matrix4 } from '../graphics/matrix4';
import { Mesh } from '../graphics/mesh';
import { ShapeFactory } from '../graphics/shape-factory';
import { Vector3 } from '../graphics/vector3';
import { SceneNode } from '../scene/scene-node';
import { Indicator } from './indicator';
import { MemoryRegister } from './memory-register';
import { TubeFactory } from './tube-mesh-factory';

export class MemoryBank extends SceneNode {
    registers: MemoryRegister[];

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

        this.createRegisters(indicatorMesh, renderingContext);
    }

    private createRegisters(indicatorMesh: Mesh, renderingContext: AppRenderingContext) {
        this.registers = [];
        let registerPosition = this.position.add(new Vector3(-0.23, 0.22, 0));
        const registerMiddleGap: number = 0.1;
        for (let r = 0; r < 5; r++) {
            const indicators: Indicator[] = this.createIndicators(indicatorMesh, renderingContext);
            const register: MemoryRegister = new MemoryRegister(indicators);
            register.setIndicatorPositions(registerPosition, TubeFactory.tubeDistance, registerMiddleGap);
            this.registers[r] = register;
            registerPosition = registerPosition.add(new Vector3(0, -TubeFactory.tubeDistance, 0));
        }
        registerPosition = registerPosition.add(new Vector3(0, -0.055, 0));
        for (let r = 5; r < 10; r++) {
            const indicators: Indicator[] = this.createIndicators(indicatorMesh, renderingContext);
            const register: MemoryRegister = new MemoryRegister(indicators);
            register.setIndicatorPositions(registerPosition, TubeFactory.tubeDistance, registerMiddleGap);
            this.registers[r] = register;
            registerPosition = registerPosition.add(new Vector3(0, -TubeFactory.tubeDistance, 0));
        }
    }

    private createIndicators(indicatorMesh: Mesh, renderingContext: AppRenderingContext) {
        const indicators: Indicator[] = [];
        for (let i = 0; i < 9; i++) {
            indicators[i] = new Indicator(indicatorMesh, renderingContext);
        }
        return indicators;
    }

    draw(): void {
        this.children.forEach(child => {
            child.draw();
        });

        this.renderingContext.emitterShader.use();
        this.registers.forEach(register => {
            for (const indicator of register.indicators) {
                indicator.draw();
            }
        });
        this.renderingContext.standardShader.use();
    }
}

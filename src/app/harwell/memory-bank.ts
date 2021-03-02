import { AppRenderingContext } from '../graphics/app-rendering-context';
import { Matrix4 } from '../graphics/matrix4';
import { Mesh } from '../graphics/mesh';
import { ShapeFactory } from '../graphics/shape-factory';
import { Vector3 } from '../graphics/vector3';
import { SceneNode } from '../scene/scene-node';
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
        for (let r = 0; r < 5; r++) {
            const indicators: SceneNode[] = this.createIndicators(indicatorMesh, renderingContext);
            this.registers[r] = new MemoryRegister(indicators, registerPosition);
            registerPosition = registerPosition.add(new Vector3(0, -TubeFactory.tubeDistance, 0));
        }
        registerPosition = registerPosition.add(new Vector3(0, -0.055, 0));
        for (let r = 5; r < 10; r++) {
            const indicators: SceneNode[] = this.createIndicators(indicatorMesh, renderingContext);
            this.registers[r] = new MemoryRegister(indicators, registerPosition);
            registerPosition = registerPosition.add(new Vector3(0, -TubeFactory.tubeDistance, 0));
        }
    }

    private createIndicators(indicatorMesh: Mesh, renderingContext: AppRenderingContext) {
        const indicators: SceneNode[] = [];
        for (let i = 0; i < 9; i++) {
            const indicatorNode = SceneNode.withMesh(indicatorMesh, renderingContext);
            indicatorNode.program = renderingContext.emitterShader;
            indicatorNode.color = [1, 0.2, 0.2, 1];
            indicators[i] = indicatorNode;
        }
        return indicators;
    }

    draw(): void {
        this.children.forEach(child => {
            child.draw();
        });

        this.renderingContext.emitterShader.use();
        this.registers.forEach(register => {
            let pos = register.position;
            for (let i = 0; i < 5; i++) {
                this.drawIndicator(register, i, pos);
                pos = pos.add(new Vector3(0.0425, 0, 0));
            }
            pos = pos.add(new Vector3(0.1, 0, 0));
            for (let i = 5; i < 9; i++) {
                this.drawIndicator(register, i, pos);
                pos = pos.add(new Vector3(0.0425, 0, 0));
            }
        });
        this.renderingContext.standardShader.use();
    }

    private drawIndicator(register: MemoryRegister, index: number, pos: Vector3) {
        const indicator: SceneNode = register.indicators[index];
        let value = 0;
        if (index !== 0) {
            if (index === 1) {
                index--;
            }
            if (register.value < 0) {
                index++;
            }
            const digit = Number(register.value.toFixed(7)[index]);
            value = digit * (2 * Math.PI / 10);
        }
        indicator.worldTransform = Matrix4.rotationX(Math.PI / 2)
            .multiply(Matrix4.translation(new Vector3(0, 0.0095, 0)))
            .multiply(Matrix4.rotationZ(value))
            .multiply(Matrix4.translation(pos));
        indicator.draw();
    }
}

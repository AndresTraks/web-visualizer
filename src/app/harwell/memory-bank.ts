import { AppRenderingContext } from '../graphics/app-rendering-context';
import { Matrix4 } from '../graphics/matrix4';
import { Mesh } from '../graphics/mesh';
import { ShapeFactory } from '../graphics/shape-factory';
import { StatusLight } from './status-light';
import { Vector3 } from '../graphics/vector3';
import { SceneNode } from '../scene/scene-node';
import { Indicator } from './indicator';
import { MemoryRegister } from './memory-register';
import { TubeFactory } from './tube-mesh-factory';

export class MemoryBank extends SceneNode {
    registers: MemoryRegister[];
    statusLights: StatusLight[];
    storeStatusLight: StatusLight;
    readStatusLight: StatusLight;

    constructor(memoryUnitMesh: Mesh, tubeMesh: Mesh, indicatorMesh: Mesh, statusLightMesh: Mesh, position: Vector3, renderingContext: AppRenderingContext) {
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

        const statusLightPlateNode = SceneNode.withMesh(new Mesh(ShapeFactory.createBox(new Vector3(0.05, 0.035, 0.02)), this.gl), renderingContext);
        statusLightPlateNode.color = [0.2, 0.2, 0.2, 1];
        statusLightPlateNode.worldTransform = Matrix4.translation(position.add(new Vector3(0.01, 0, 0)));

        this.children = [caseNode, backNode, tubeNode, statusLightPlateNode];

        this.createRegisters(indicatorMesh, renderingContext);
        this.createStatusLights(statusLightMesh, renderingContext);
    }

    private createStatusLights(statusLightMesh: Mesh, renderingContext: AppRenderingContext) {
        this.storeStatusLight = this.createStatusLight(this.position.add(new Vector3(-0.02, 0.015, 0.02)), statusLightMesh, renderingContext);
        this.storeStatusLight.activeColor = StatusLight.activeStoreColor;
        this.storeStatusLight.passiveColor = StatusLight.passiveStoreColor;

        this.readStatusLight = this.createStatusLight(this.position.add(new Vector3(0.04, 0.015, 0.02)), statusLightMesh, renderingContext);
        this.readStatusLight.activeColor = StatusLight.activeReadColor;
        this.readStatusLight.passiveColor = StatusLight.passiveReadColor;
        
        this.statusLights = [
            this.createStatusLight(this.position.add(new Vector3(0, 0.015, 0.02)), statusLightMesh, renderingContext),
            this.createStatusLight(this.position.add(new Vector3(0.02, 0.015, 0.02)), statusLightMesh, renderingContext),
            this.createStatusLight(this.position.add(new Vector3(-0.02, 0, 0.02)), statusLightMesh, renderingContext),
            this.createStatusLight(this.position.add(new Vector3(0, 0, 0.02)), statusLightMesh, renderingContext),
            this.createStatusLight(this.position.add(new Vector3(0.02, 0, 0.02)), statusLightMesh, renderingContext),
            this.createStatusLight(this.position.add(new Vector3(0.04, 0, 0.02)), statusLightMesh, renderingContext),
            this.createStatusLight(this.position.add(new Vector3(-0.02, -0.015, 0.02)), statusLightMesh, renderingContext),
            this.createStatusLight(this.position.add(new Vector3(0, -0.015, 0.02)), statusLightMesh, renderingContext),
            this.createStatusLight(this.position.add(new Vector3(0.02, -0.015, 0.02)), statusLightMesh, renderingContext),
            this.createStatusLight(this.position.add(new Vector3(0.04, -0.015, 0.02)), statusLightMesh, renderingContext),
        ];
    }

    private createStatusLight(position: Vector3, statusLightMesh: Mesh, renderingContext: AppRenderingContext): StatusLight {
        return new StatusLight(statusLightMesh, position, renderingContext)
    }

    private createRegisters(indicatorMesh: Mesh, renderingContext: AppRenderingContext): void {
        this.registers = [];
        let registerPosition = this.position.add(new Vector3(-0.23, -0.2175, 0));
        for (let r = 0; r < 5; r++) {
            const indicators: Indicator[] = this.createIndicators(indicatorMesh, renderingContext);
            const register: MemoryRegister = new MemoryRegister(indicators);
            this.setIndicatorPositions(register, registerPosition);
            this.registers[r] = register;
            registerPosition = registerPosition.add(new Vector3(0, TubeFactory.tubeDistance, 0));
        }
        registerPosition = registerPosition.add(new Vector3(0, 0.055, 0));
        for (let r = 5; r < 10; r++) {
            const indicators: Indicator[] = this.createIndicators(indicatorMesh, renderingContext);
            const register: MemoryRegister = new MemoryRegister(indicators);
            this.setIndicatorPositions(register, registerPosition);
            this.registers[r] = register;
            registerPosition = registerPosition.add(new Vector3(0, TubeFactory.tubeDistance, 0));
        }
    }

    private createIndicators(indicatorMesh: Mesh, renderingContext: AppRenderingContext): Indicator[] {
        const indicators: Indicator[] = [];
        for (let i = 0; i < 9; i++) {
            indicators[i] = new Indicator(indicatorMesh, renderingContext);
        }
        return indicators;
    }

    private setIndicatorPositions(register: MemoryRegister, origin: Vector3): void {
        const position: Vector3 = origin.copy();
        for (let i = 0; i < 5; i++) {
            const indicator: Indicator = register.indicators[i];
            indicator.position = position.copy();
            position.x += TubeFactory.tubeDistance;
        }
        position.x += TubeFactory.memoryRegisterMiddleGap;
        for (let i = 5; i < 9; i++) {
            const indicator: Indicator = register.indicators[i];
            indicator.position = position.copy();
            position.x += TubeFactory.tubeDistance;
        }
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
        this.storeStatusLight.draw();
        this.readStatusLight.draw();
        this.statusLights.forEach(statusLight => {
            statusLight.draw();
        });
        this.renderingContext.standardShader.use();
    }
}

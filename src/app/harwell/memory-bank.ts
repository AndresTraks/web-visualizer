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

        this.registers = this.createRegisters(indicatorMesh, renderingContext);
        this.storeStatusLight = this.createStoreStatusLight(statusLightMesh, renderingContext);
        this.readStatusLight = this.createReadStatusLight(statusLightMesh, renderingContext);
        this.statusLights = this.createStatusLights(statusLightMesh, renderingContext);
    }

    private createStoreStatusLight(statusLightMesh: Mesh, renderingContext: AppRenderingContext): StatusLight {
        const storeStatusLight: StatusLight = this.createStatusLight(this.position.add(new Vector3(-0.02, 0.015, 0.02)), statusLightMesh, renderingContext);
        storeStatusLight.activeColor = StatusLight.activeStoreColor;
        storeStatusLight.passiveColor = StatusLight.passiveStoreColor;
        return storeStatusLight;
    }

    private createReadStatusLight(statusLightMesh: Mesh, renderingContext: AppRenderingContext): StatusLight {
        const readStatusLight: StatusLight = this.createStatusLight(this.position.add(new Vector3(0.04, 0.015, 0.02)), statusLightMesh, renderingContext);
        readStatusLight.activeColor = StatusLight.activeReadColor;
        readStatusLight.passiveColor = StatusLight.passiveReadColor;
        return readStatusLight;
    }

    private createStatusLights(statusLightMesh: Mesh, renderingContext: AppRenderingContext): StatusLight[] {
        return [
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

    private createRegisters(indicatorMesh: Mesh, renderingContext: AppRenderingContext): MemoryRegister[] {
        const registers: MemoryRegister[] = [];
        let registerPosition = this.position.add(new Vector3(-0.23, -0.2175, 0));
        for (let r = 0; r < 5; r++) {
            const indicators: Indicator[] = this.createIndicators(indicatorMesh, renderingContext, registerPosition);
            registers[r] = new MemoryRegister(indicators);
            registerPosition = registerPosition.add(new Vector3(0, TubeFactory.tubeDistance, 0));
        }
        registerPosition = registerPosition.add(new Vector3(0, 0.055, 0));
        for (let r = 5; r < 10; r++) {
            const indicators: Indicator[] = this.createIndicators(indicatorMesh, renderingContext, registerPosition);
            registers[r] = new MemoryRegister(indicators);
            registerPosition = registerPosition.add(new Vector3(0, TubeFactory.tubeDistance, 0));
        }
        return registers;
    }

    private createIndicators(indicatorMesh: Mesh, renderingContext: AppRenderingContext, origin: Vector3): Indicator[] {
        const indicators: Indicator[] = [];

        const position: Vector3 = origin.copy();
        for (let i = 0; i < 5; i++) {
            indicators[i] = new Indicator(indicatorMesh, renderingContext, position);
            position.x += TubeFactory.tubeDistance;
        }
        position.x += TubeFactory.memoryRegisterMiddleGap;
        for (let i = 5; i < 9; i++) {
            indicators[i] = new Indicator(indicatorMesh, renderingContext, position);
            position.x += TubeFactory.tubeDistance;
        }

        return indicators;
    }

    override draw(): void {
        this.children?.forEach(child => {
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

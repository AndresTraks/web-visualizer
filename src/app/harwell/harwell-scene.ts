import { AppRenderingContext } from '../graphics/app-rendering-context';
import { Mesh } from '../graphics/mesh';
import { ShapeFactory } from '../graphics/shape-factory';
import { Vector3 } from '../graphics/vector3';
import { Scene } from '../scene/scene';
import { SceneNode } from '../scene/scene-node';
import { HarwellProcessor } from './harwell-processor';
import { MemoryBank } from './memory-bank';
import { TubeFactory } from './tube-mesh-factory';
import { MemoryRegister } from './memory-register';
import { Disassembler } from './disassembler';
import { ExamplePrograms } from './example-programs';
import { ProgramDescription } from './program-description';
import { Accumulator } from './accumulator';

export class HarwellScene extends Scene {
    processor: HarwellProcessor;
    disassembler: Disassembler;

    memoryBanks: MemoryBank[];
    accumulator8: Accumulator;
    accumulator9: Accumulator;
    nodes: SceneNode[];

    isSingleStepping: boolean = true;
    isSingleStepDone: boolean = true;
    nextInstructionText: string;

    programList: ProgramDescription[] = ExamplePrograms.programList;

    constructor(renderingContext: AppRenderingContext) {
        super(renderingContext)
        this.processor = new HarwellProcessor();
        this.disassembler = new Disassembler(this.processor);

        const memoryUnitMesh = new Mesh(ShapeFactory.createCase(new Vector3(0.25, 0.05, 0.25)), renderingContext.gl);
        const tubeMesh = new Mesh(TubeFactory.createMemoryUnit(), renderingContext.gl);
        const indicatorMesh = new Mesh(ShapeFactory.createBox(new Vector3(0.0025, 0.003, 0.0036)), renderingContext.gl);
        const accumulatorMesh = new Mesh(TubeFactory.createAccumulator(), renderingContext.gl);

        const memoryUnit1 = this.createMemoryUnitNode(memoryUnitMesh, tubeMesh, indicatorMesh, new Vector3(-0.5, -0.5, 0));
        const memoryUnit2 = this.createMemoryUnitNode(memoryUnitMesh, tubeMesh, indicatorMesh, new Vector3(-0.5, 0, 0));
        const memoryUnit3 = this.createMemoryUnitNode(memoryUnitMesh, tubeMesh, indicatorMesh, new Vector3(-0.5, 0.5, 0));
        const memoryUnit4 = this.createMemoryUnitNode(memoryUnitMesh, tubeMesh, indicatorMesh, new Vector3(-0.5, 1, 0));
        const memoryUnit5 = this.createMemoryUnitNode(memoryUnitMesh, tubeMesh, indicatorMesh, new Vector3(-1, -0.5, 0));
        const memoryUnit6 = this.createMemoryUnitNode(memoryUnitMesh, tubeMesh, indicatorMesh, new Vector3(-1, 0, 0));
        const memoryUnit7 = this.createMemoryUnitNode(memoryUnitMesh, tubeMesh, indicatorMesh, new Vector3(-1, 0.5, 0));
        const memoryUnit8 = this.createMemoryUnitNode(memoryUnitMesh, tubeMesh, indicatorMesh, new Vector3(-1, 1, 0));
        const memoryUnit9 = this.createMemoryUnitNode(memoryUnitMesh, tubeMesh, indicatorMesh, new Vector3(-1.5, 1, 0));

        this.accumulator8 = this.createAccumulatorNode(memoryUnitMesh, accumulatorMesh, indicatorMesh, new Vector3(0, -0.35, 0));
        this.accumulator9 = this.createAccumulatorNode(memoryUnitMesh, accumulatorMesh, indicatorMesh, new Vector3(0, 0.5, 0));

        this.memoryBanks = [memoryUnit1, memoryUnit2, memoryUnit3, memoryUnit4, memoryUnit5, memoryUnit6, memoryUnit7, memoryUnit8, memoryUnit9];
        this.nodes = [...this.memoryBanks, this.accumulator8, this.accumulator9];

        this.light.position = new Vector3(0.5, 2, 0.5);
        this.camera.eye = new Vector3(0, 0.5, 3.3);
        this.camera.target = new Vector3(0, 0.25, 0);
        this.clearColor = [0.1, 0.1, 0.1, 1];
        this.camera.orthoScaling = 2.7;

        this.loadFirstProgram();
    }

    private createMemoryUnitNode(memoryUnitMesh: Mesh, tubeMesh: Mesh, indicatorMesh: Mesh, position: Vector3): MemoryBank {
        return new MemoryBank(memoryUnitMesh, tubeMesh, indicatorMesh, position, this.renderingContext);
    }

    private createAccumulatorNode(memoryUnitMesh: Mesh, tubeMesh: Mesh, indicatorMesh: Mesh, position: Vector3): Accumulator {
        return new Accumulator(memoryUnitMesh, tubeMesh, indicatorMesh, position, this.renderingContext);
    }

    onProgramChange(selected: string): void {
        const program: ProgramDescription = this.programList.find(p => p.id === selected);
        this.processor.setProgram(program.text);
        this.resetProgram();
    }

    private loadFirstProgram(): void {
        this.onProgramChange(this.programList[0].id);
    }

    resetProgram(): void {
        this.processor.output = [""];
        this.isSingleStepping = true;
        this.isSingleStepDone = true;
        this.processor.state.finished = false;
        this.processor.state.tapeNumber = 1;
        this.setIndicatorsPassive();
        this.disassembleNextInstruction();
    }

    draw(seconds: number): void {
        super.draw(seconds);

        this.runProcessorForFrame();
        this.copyStateToRenderObject();

        this.renderingContext.standardShader.use();
        this.nodes.forEach(node => {
            node.draw();
        });
    }

    stepProcessor(): void {
        this.isSingleStepping = true;
        this.isSingleStepDone = false;
    }

    runProcessor(): void {
        this.isSingleStepping = !this.isSingleStepping;
    }

    runProcessorForFrame(): void {
        if (this.isSingleStepping) {
            if (!this.isSingleStepDone) {
                this.processor.step();
                this.disassembleNextInstruction();
                this.isSingleStepDone = true;
            }
        } else {
            this.processor.step();
            this.disassembleNextInstruction();
        }
        if (this.processor.state.finished) {
            this.isSingleStepping = true;
        }
    }

    private copyStateToRenderObject(): void {
        this.accumulator8.register.value = this.processor.peek(8);
        this.accumulator9.register.value = this.processor.peek(9);
        for (let b = 0; b < 9; b++) {
            const bank: MemoryBank = this.memoryBanks[b];
            for (let r = 0; r < 10; r++) {
                const register: MemoryRegister = bank.registers[r];
                register.value = this.processor.peek((b + 1) * 10 + r);
            }
        }
    }

    private setIndicatorsPassive(): void {
        for (let b = 0; b < 9; b++) {
            const bank: MemoryBank = this.memoryBanks[b];
            for (let r = 0; r < 10; r++) {
                const register: MemoryRegister = bank.registers[r];
                if (register.value === 0 || register.value === undefined) {
                    register.value = null;
                }
            }
        }
    }

    private disassembleNextInstruction(): void {
        var nextEntry: number;
        if (this.processor.state.tapeNumber > 7) {
            nextEntry = this.processor.state.get(this.processor.state.tapeNumber);
        } else {
            nextEntry = this.processor.currentTape.peek();
        }
        this.nextInstructionText = this.processor.state.finished
            ? "(finished)"
            : this.disassembler.disassemble(nextEntry);
        console.log(this.nextInstructionText);
    }
}

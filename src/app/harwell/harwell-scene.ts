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
import { TapeEntry } from './tape/tape-entry';
import { Disassembler } from './disassembler';

class ProgramDescription {
    constructor(public title: string, public value: string, public initFn: () => void) {
    }
}

export class HarwellScene extends Scene {
    processor: HarwellProcessor;
    disassembler: Disassembler;

    memoryBanks: MemoryBank[];
    nodes: SceneNode[];

    isSingleStepping: boolean = true;
    isSingleStepDone: boolean = true;
    nextInstructionText: string;

    programList: ProgramDescription[] = [
        new ProgramDescription("Example program 1", "1", () => this.loadExampleProgram1()),
        new ProgramDescription("Example program 2", "2", () => this.loadExampleProgram2())];

    constructor(renderingContext: AppRenderingContext) {
        super(renderingContext)
        this.processor = new HarwellProcessor();
        this.disassembler = new Disassembler(this.processor);
        this.loadExampleProgram1();

        const memoryUnitMesh = new Mesh(ShapeFactory.createCase(new Vector3(0.25, 0.05, 0.25)), renderingContext.gl);
        const tubeMesh = new Mesh(TubeFactory.createMemoryUnit(), renderingContext.gl);
        const indicatorMesh = new Mesh(ShapeFactory.createBox(new Vector3(0.0025, 0.003, 0.0036)), renderingContext.gl);

        const memoryUnit1 = this.createMemoryUnitNode(memoryUnitMesh, tubeMesh, indicatorMesh, new Vector3(-0.5, 1, 0));
        const memoryUnit2 = this.createMemoryUnitNode(memoryUnitMesh, tubeMesh, indicatorMesh, new Vector3(-0.5, 0.5, 0));
        const memoryUnit3 = this.createMemoryUnitNode(memoryUnitMesh, tubeMesh, indicatorMesh, new Vector3(-0.5, 0, 0));
        const memoryUnit4 = this.createMemoryUnitNode(memoryUnitMesh, tubeMesh, indicatorMesh, new Vector3(-0.5, -0.5, 0));
        const memoryUnit5 = this.createMemoryUnitNode(memoryUnitMesh, tubeMesh, indicatorMesh, new Vector3(-1, 1, 0));
        const memoryUnit6 = this.createMemoryUnitNode(memoryUnitMesh, tubeMesh, indicatorMesh, new Vector3(-1, 0.5, 0));
        const memoryUnit7 = this.createMemoryUnitNode(memoryUnitMesh, tubeMesh, indicatorMesh, new Vector3(-1, 0, 0));
        const memoryUnit8 = this.createMemoryUnitNode(memoryUnitMesh, tubeMesh, indicatorMesh, new Vector3(-1, -0.5, 0));
        const memoryUnit9 = this.createMemoryUnitNode(memoryUnitMesh, tubeMesh, indicatorMesh, new Vector3(-1.5, 1, 0));

        this.memoryBanks = [memoryUnit1, memoryUnit2, memoryUnit3, memoryUnit4, memoryUnit5, memoryUnit6, memoryUnit7, memoryUnit8, memoryUnit9];
        this.nodes = this.memoryBanks;

        this.light.position = new Vector3(0.5, 2, 0.5);
        this.camera.eye = new Vector3(0, 0.5, 3.3);
        this.camera.target = new Vector3(0, 0.25, 0);
        this.clearColor = [0.1, 0.1, 0.1, 1];
    }

    private createMemoryUnitNode(memoryUnitMesh: Mesh, tubeMesh: Mesh, indicatorMesh: Mesh, position: Vector3): MemoryBank {
        return new MemoryBank(memoryUnitMesh, tubeMesh, indicatorMesh, position, this.renderingContext);
    }

    onProgramChange(selected: string): void {
        this.programList.find(p => p.value === selected).initFn();
    }

    loadExampleProgram1(): void {
        this.processor.setTape(1,
            "[1]\n" +
            "20900\n" +
            "21000\n" +
            "22000\n" +
            "23000\n" +
            "24000\n" +
            "25000\n" +
            "10110\n" +
            "+10000000\n" +
            "10120\n" +
            "+01000000\n" +
            "10130\n" +
            "+15500000\n" +
            "03202\n" +
            "02102\n");
        this.processor.setTape(2,
            "[2]\n" +
            "11040\n" +
            "51040\n" +
            "07300\n" +
            "11001\n" +
            "07400\n" +
            "10901\n" +
            "12010\n" +
            "13040\n" +
            "31040\n" +
            "01140\n" +
            "24000\n" +
            "20900\n" +
            "05202\n" +
            "05202\n" +
            "00100\n");
        this.resetProgram();
    }

    loadExampleProgram2(): void {
        this.processor.setTape(1,
            "[1]\n" +
            "20900\n" +
            "21000\n" +
            "22000\n" +
            "23000\n" +
            "24000\n" +
            "25000\n" +
            "10110\n" +
            "+05000000\n" +
            "10120\n" +
            "+90000000\n" +
            "10130\n" +
            "+10000000\n" +
            "10140\n" +
            "+20000000\n" +
            "11050\n" +
            "03202\n" +
            "02102\n");
        this.processor.setTape(2,
            "[2]\n" +
            "07400\n" +
            "11001\n" +
            "33020\n" +
            "01220\n" +
            "05303\n" +
            "02203\n" +
            "25009\n" +
            "64050\n" +
            "20900\n" +
            "15010\n" +
            "03202\n");
        this.processor.setTape(3,
            "[3]\n" +
            "00100\n");
        this.resetProgram();
    }

    resetProgram(): void {
        this.processor.output = [""];
        this.isSingleStepping = true;
        this.isSingleStepDone = true;
        this.processor.state.finished = false;
        this.processor.state.tapeNumber = 1;
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
        for (let b = 0; b < 9; b++) {
            const bank: MemoryBank = this.memoryBanks[b];
            for (let r = 0; r < 10; r++) {
                const register: MemoryRegister = bank.registers[r];
                const address: string = String((b + 1) * 10 + r);
                register.value = this.processor.peek(address);
            }
        }
    }

    private disassembleNextInstruction(): void {
        const nextEntry: TapeEntry = this.processor.currentTape.peekEntry();
        this.nextInstructionText = this.processor.state.finished
            ? "(finished)"
            : this.disassembler.disassemble(nextEntry);
        console.log(this.nextInstructionText);
    }
}

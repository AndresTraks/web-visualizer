import { AppRenderingContext } from '../graphics/app-rendering-context';
import { Matrix4 } from "../graphics/matrix4";
import { Mesh } from "../graphics/mesh";
import { ShapeFactory } from "../graphics/shape-factory";
import { Vector3 } from "../graphics/vector3";
import { GearNode } from "../scene/gear-node";
import { Scene } from "../scene/scene";
import { SceneNode } from "../scene/scene-node";

class GearTrain extends SceneNode {
    readonly thickness: number = 0.025;
    readonly explodeOffset: number = 0.01;
    readonly plateThickness: number = 0.03;
    readonly axleOffset: number = -0.005;
    
    constructor(protected renderingContext: AppRenderingContext) {
        super(renderingContext);
    }
}

class SolarTrain extends GearTrain {
    a1: GearNode;
    b1: GearNode;
    b2: GearNode;

    constructor(renderingContext: AppRenderingContext) {
        super(renderingContext);
        this.a1 = GearNode.createFace(48, 0.136, this.renderingContext);
        this.b1 = GearNode.create(233, 0.65, 0.45, this.renderingContext);
        this.b1.addCross();
        this.b2 = GearNode.createClosed(64, 0.155, this.renderingContext);
        this.children = [this.a1, this.b1, this.b1];
    }

    update(seconds: number) {
        this.a1.angle = seconds * 1.2;
        this.a1.worldTransform = Matrix4.rotationY(this.a1.angle)
            .multiply(Matrix4.rotationX(Math.PI / 2))
            .multiply(Matrix4.translation(new Vector3(0, 0.136 - this.thickness, -0.65 + 0.001)));


        this.b1.setAngleByParent(this.a1);
        this.b1.position = Vector3.zero;
        const bRotation: Matrix4 = Matrix4.rotationY(this.b1.angle);
        this.b1.worldTransform = bRotation.multiply(Matrix4.translation(this.b1.position));

        this.b2.setAttributesToParent(this.b1, -(this.thickness + this.explodeOffset));
        this.b2.worldTransform = bRotation.multiply(Matrix4.translation(this.b2.position));
    }
}

class M1Train extends GearTrain {
    l1: GearNode;
    l2: GearNode;
    m1: GearNode;
    m2: GearNode;
    m3: GearNode;
    axleM: SceneNode;

    constructor(renderingContext: AppRenderingContext, private solarNode: SolarTrain) {
        super(renderingContext);
        this.l1 = GearNode.createClosed(38, 0.09, renderingContext);
        this.l2 = GearNode.createClosed(53, 0.131, renderingContext);
        this.m1 = GearNode.createClosed(96, 0.245, renderingContext);
        this.m2 = GearNode.createClosed(15, 0.044, renderingContext);
        this.m3 = GearNode.createClosed(27, 0.06, renderingContext);
        this.axleM = SceneNode.withMesh(new Mesh(ShapeFactory.createCylinder(0.02, 0.16, 16), renderingContext.gl), renderingContext);
        this.children = [this.l1, this.l2, this.m1, this.m2, this.m3, this.axleM];
    }

    update() {
        this.l1.setAttributesByParent(this.solarNode.b2, 0.2 * Math.PI);
        const lRotation = Matrix4.rotationY(this.l1.angle);
        this.l1.worldTransform = lRotation.multiply(Matrix4.translation(this.l1.position));

        this.l2.setAttributesToParent(this.l1, -(this.thickness + this.explodeOffset));
        this.l2.worldTransform = lRotation.multiply(Matrix4.translation(this.l2.position));

        this.m1.setAttributesByParent(this.l2, 1.8 * Math.PI);
        const mRotation = Matrix4.rotationY(this.m1.angle);
        this.m1.worldTransform = mRotation.multiply(Matrix4.translation(this.m1.position));

        this.m2.setAttributesToParent(this.m1, -(this.thickness + this.explodeOffset) - this.plateThickness);
        this.m2.worldTransform = mRotation.multiply(Matrix4.translation(this.m2.position));

        this.m3.setAttributesToParent(this.m2, -2 * (this.thickness + this.explodeOffset));
        this.m3.worldTransform = mRotation.multiply(Matrix4.translation(this.m3.position));

        this.axleM.position = this.m1.position.add(new Vector3(0, this.axleOffset, 0));
        this.axleM.worldTransform = mRotation.multiply(Matrix4.translation(this.axleM.position));
    }
}

class LunisolarTrain extends GearTrain {
    n1: GearNode;
    n2: GearNode;
    n3: GearNode;
    metonicDial: SceneNode;
    axleN: SceneNode;

    constructor(renderingContext: AppRenderingContext, private m1Node: M1Train) {
        super(renderingContext);
        this.n1 = GearNode.createClosed(53, 0.125, this.renderingContext);
        this.n2 = GearNode.createClosed(57, 0.1, this.renderingContext);
        this.n3 = GearNode.createClosed(15, 0.05, this.renderingContext);
        this.metonicDial = SceneNode.withMesh(new Mesh(ShapeFactory.createDial(), this.gl), this.renderingContext);
        this.axleN = SceneNode.withMesh(new Mesh(ShapeFactory.createCylinder(0.02, 0.25, 16), this.gl), this.renderingContext);
        this.children = [this.n1, this.n2, this.n3, this.metonicDial, this.axleN];
    }

    update() {
        this.n1.setAttributesByParent(this.m1Node.m2, 0.2 * Math.PI);
        const nRotation = Matrix4.rotationY(this.n1.angle);
        this.n1.worldTransform = nRotation.multiply(Matrix4.translation(this.n1.position));

        this.n2.setAttributesToParent(this.n1, -(this.thickness + this.explodeOffset));
        this.n2.worldTransform = nRotation.multiply(Matrix4.translation(this.n2.position));

        this.n3.setAttributesToParent(this.n2, -(this.thickness + this.explodeOffset));
        this.n3.worldTransform = nRotation.multiply(Matrix4.translation(this.n3.position));

        this.metonicDial.position = this.n3.position.add(new Vector3(0, -5 * (this.thickness + this.explodeOffset), 0));
        this.metonicDial.worldTransform = nRotation.multiply(Matrix4.translation(this.metonicDial.position));

        this.axleN.position = this.n1.position.add(new Vector3(0, this.axleOffset, 0));
        this.axleN.worldTransform = nRotation.multiply(Matrix4.translation(this.axleN.position));
    }
}

class OlympicTrain extends GearTrain {
    o1: GearNode;
    dial: SceneNode;
    axle: SceneNode;

    constructor(renderingContext: AppRenderingContext, private lunisolarNode: LunisolarTrain) {
        super(renderingContext);
        this.o1 = GearNode.createClosed(60, 0.09, this.renderingContext);
        this.dial = SceneNode.withMesh(new Mesh(ShapeFactory.createDial(), this.gl), this.renderingContext);
        this.axle = SceneNode.withMesh(new Mesh(ShapeFactory.createCylinder(0.02, 0.21, 16), this.gl), this.renderingContext);
        this.children = [this.o1, this.dial, this.axle];
    }

    update() {
        this.o1.setAngleByParent(this.lunisolarNode.n2);
        const oRotation = Matrix4.rotationY(this.o1.angle);
        this.o1.setAdjacentPosition(this.lunisolarNode.n2, 1.5 * Math.PI);
        this.o1.worldTransform = oRotation.multiply(Matrix4.translation(this.o1.position));
        
        this.dial.position = this.o1.position.add(new Vector3(0, -6 * (this.thickness + this.explodeOffset), 0));
        this.dial.worldTransform = oRotation.multiply(Matrix4.translation(this.dial.position));

        this.axle.position = this.o1.position.add(new Vector3(0, this.axleOffset, 0));
        this.axle.worldTransform = oRotation.multiply(Matrix4.translation(this.axle.position));
    }
}

class CallipicTrain extends GearTrain {
    p1: GearNode;
    p2: GearNode;
    q1: GearNode;
    dial: SceneNode;
    axleQ: SceneNode;

    constructor(renderingContext: AppRenderingContext, private lunisolarNode: LunisolarTrain) {
        super(renderingContext);
        this.p1 = GearNode.createClosed(60, 0.13, this.renderingContext);
        this.p2 = GearNode.createClosed(12, 0.045, this.renderingContext);
        this.q1 = GearNode.createClosed(60, 0.13, this.renderingContext);
        this.dial = SceneNode.withMesh(new Mesh(ShapeFactory.createDial(), this.gl), this.renderingContext);
        this.axleQ = SceneNode.withMesh(new Mesh(ShapeFactory.createCylinder(0.02, 0.14, 16), this.gl), this.renderingContext);
        this.children = [this.p1, this.p2, this.q1, this.dial, this.axleQ];
    }

    update() {
        this.p1.setAttributesByParent(this.lunisolarNode.n3, 0.25 * Math.PI);
        const pRotation = Matrix4.rotationY(this.p1.angle);
        this.p1.worldTransform = pRotation.multiply(Matrix4.translation(this.p1.position));

        this.p2.setAttributesToParent(this.p1, -(this.thickness + this.explodeOffset));
        this.p2.worldTransform = pRotation.multiply(Matrix4.translation(this.p2.position));


        this.q1.setAttributesByParent(this.p2, 0.75 * Math.PI);
        const qRotation = Matrix4.rotationY(this.q1.angle);
        this.q1.worldTransform = qRotation.multiply(Matrix4.translation(this.q1.position));

        this.dial.position = this.q1.position.add(new Vector3(0, -4 * (this.thickness + this.explodeOffset), 0));
        this.dial.worldTransform = qRotation.multiply(Matrix4.translation(this.dial.position));

        this.axleQ.position = this.q1.position.add(new Vector3(0, this.axleOffset, 0));
        this.axleQ.worldTransform = qRotation.multiply(Matrix4.translation(this.axleQ.position));
    }
}

class SarosTrain extends GearTrain {
    e3: GearNode;
    e4: GearNode;
    f1: GearNode;
    f2: GearNode;
    g1: GearNode;
    g2: GearNode;
    sarosDial: SceneNode;
    axleG: SceneNode;

    constructor(renderingContext: AppRenderingContext, private m1Node: M1Train) {
        super(renderingContext);
        this.e3 = GearNode.createClosed(223, 0.525, this.renderingContext);
        this.e4 = GearNode.create(188, 0.5, 0.425, this.renderingContext);
        this.f1 = GearNode.createClosed(53, 0.14, this.renderingContext);
        this.f2 = GearNode.createClosed(30, 0.08, this.renderingContext);
        this.g1 = GearNode.createClosed(54, 0.14, this.renderingContext);
        this.g2 = GearNode.createClosed(20, 0.05, this.renderingContext);
        this.sarosDial = SceneNode.withMesh(new Mesh(ShapeFactory.createDial(), this.gl), this.renderingContext);
        this.axleG = SceneNode.withMesh(new Mesh(ShapeFactory.createCylinder(0.02, 0.11, 16), this.gl), this.renderingContext);
        this.children = [this.e3, this.e4, this.f1, this.f2, this.g1, this.g2, this.sarosDial, this.axleG];
    }

    update() {
        this.e3.setAttributesByParent(this.m1Node.m3, 0.85 * Math.PI);
        const eRotation = Matrix4.rotationY(this.e3.angle);
        this.e3.worldTransform = eRotation.multiply(Matrix4.translation(this.e3.position));

        this.e4.setAttributesToParent(this.e3, -(this.thickness + this.explodeOffset));
        this.e4.worldTransform = eRotation.multiply(Matrix4.translation(this.e4.position));


        this.f1.setAttributesByParent(this.e4, 0.96 * Math.PI);
        const fRotation = Matrix4.rotationY(this.f1.angle);
        this.f1.worldTransform = fRotation.multiply(Matrix4.translation(this.f1.position));

        this.f2.setAttributesToParent(this.f1, -(this.thickness + this.explodeOffset));
        this.f2.worldTransform = fRotation.multiply(Matrix4.translation(this.f2.position));


        this.g1.setAttributesByParent(this.f2, 1.4 * Math.PI);
        const gRotation = Matrix4.rotationY(this.g1.angle);
        this.g1.worldTransform = gRotation.multiply(Matrix4.translation(this.g1.position));

        this.g2.setAttributesToParent(this.g1, -(this.thickness + this.explodeOffset));
        this.g2.worldTransform = gRotation.multiply(Matrix4.translation(this.g2.position));
        
        this.sarosDial.position = this.g2.position.add(new Vector3(0, -2 * (this.thickness + this.explodeOffset), 0));
        this.sarosDial.worldTransform = gRotation.multiply(Matrix4.translation(this.sarosDial.position));

        this.axleG.position = this.g1.position.add(new Vector3(0, this.axleOffset, 0));
        this.axleG.worldTransform = gRotation.multiply(Matrix4.translation(this.axleG.position));
    }
}

class ExeligmosTrain extends GearTrain {
    gearH1: GearNode;
    gearH2: GearNode;
    gearI1: GearNode;
    exigemosDial: SceneNode;
    axleI: SceneNode;

    constructor(renderingContext: AppRenderingContext, private sarosTrain: SarosTrain) {
        super(renderingContext);
        this.gearH1 = GearNode.createClosed(60, 0.14, renderingContext);
        this.gearH2 = GearNode.createClosed(15, 0.04, renderingContext);
        this.gearI1 = GearNode.createClosed(60, 0.13, renderingContext);
        this.exigemosDial = SceneNode.withMesh(new Mesh(ShapeFactory.createDial(), renderingContext.gl), renderingContext);
        this.axleI = SceneNode.withMesh(new Mesh(ShapeFactory.createCylinder(0.02, 0.04, 16), renderingContext.gl), renderingContext);
        this.children = [this.gearH1, this.gearH2, this.gearI1, this.exigemosDial, this.axleI];
    }

    update() {
        this.gearH1.setAttributesByParent(this.sarosTrain.g2, 1.35 * Math.PI);
        const hRotation = Matrix4.rotationY(this.gearH1.angle);
        this.gearH1.worldTransform = hRotation.multiply(Matrix4.translation(this.gearH1.position));

        this.gearH2.setAttributesToParent(this.gearH1, -(this.thickness + this.explodeOffset));
        this.gearH2.worldTransform = hRotation.multiply(Matrix4.translation(this.gearH2.position));


        this.gearI1.setAttributesByParent(this.gearH2, 1.75 * Math.PI);
        const iRotation = Matrix4.rotationY(this.gearI1.angle);
        this.gearI1.worldTransform = iRotation.multiply(Matrix4.translation(this.gearI1.position));

        this.exigemosDial.position = this.gearI1.position.add(new Vector3(0, -1 * (this.thickness + this.explodeOffset), 0));
        this.exigemosDial.worldTransform = iRotation.multiply(Matrix4.translation(this.exigemosDial.position));

        this.axleI.position = this.gearI1.position.add(new Vector3(0, this.axleOffset, 0));
        this.axleI.worldTransform = iRotation.multiply(Matrix4.translation(this.axleI.position));
    }
}

class LunarTrain extends GearTrain {
    c1: GearNode;
    c2: GearNode;
    d1: GearNode;
    d2: GearNode;
    e2: GearNode;
    e5: GearNode;
    k1: GearNode;
    axleD: SceneNode;

    constructor(renderingContext: AppRenderingContext, private solarTrain: SolarTrain, private sarosTrain: SarosTrain) {
        super(renderingContext);
        this.c1 = GearNode.createClosed(38, 0.1, renderingContext);
        this.c2 = GearNode.createClosed(48, 0.11, renderingContext);
        this.d1 = GearNode.createClosed(24, 0.055, renderingContext);
        this.d2 = GearNode.createClosed(127, 0.315, renderingContext);
        this.axleD = SceneNode.withMesh(new Mesh(ShapeFactory.createCylinder(0.02, 0.12, 16), renderingContext.gl), renderingContext);
        this.e2 = GearNode.createClosed(32, 0.08, renderingContext);
        this.e5 = GearNode.createClosed(50, 0.135, renderingContext);
        this.k1 = GearNode.createClosed(50, 0.135, renderingContext);
        this.children = [this.c1, this.c2, this.d1, this.d2, this.axleD, this.e2, this.e5, this.k1];
    }

    update() {
        this.c1.setAttributesByParent(this.solarTrain.b2, 1.1 * Math.PI);
        const cRotation = Matrix4.rotationY(this.c1.angle);
        this.c1.worldTransform = cRotation.multiply(Matrix4.translation(this.c1.position));

        this.c2.setAttributesToParent(this.c1, -(this.thickness + this.explodeOffset));
        this.c2.worldTransform = cRotation.multiply(Matrix4.translation(this.c2.position));


        this.d1.setAttributesByParent(this.c2, 0.82 * Math.PI);
        const dRotation = Matrix4.rotationY(this.d1.angle);
        this.d1.worldTransform = dRotation.multiply(Matrix4.translation(this.d1.position));

        this.d2.setAttributesToParent(this.d1, 2 * (-this.thickness - this.explodeOffset) - this.plateThickness);
        this.d2.worldTransform = dRotation.multiply(Matrix4.translation(this.d2.position));

        this.axleD.position = this.d1.position.add(new Vector3(0, this.axleOffset, 0));
        this.axleD.worldTransform = dRotation.multiply(Matrix4.translation(this.axleD.position));


        this.e2.setAttributesByParent(this.d2, 0.152 * Math.PI);
        const eRotation2 = Matrix4.rotationY(this.e2.angle);
        this.e2.worldTransform = eRotation2.multiply(Matrix4.translation(this.e2.position));

        this.e5.setAttributesToParent(this.e2, -2 * (this.thickness + this.explodeOffset));
        this.e5.worldTransform = eRotation2.multiply(Matrix4.translation(this.e5.position));

        this.k1.setAttributesByParent(this.e5, this.sarosTrain.e3.angle);
        this.k1.angle -= 2 * this.sarosTrain.e3.angle;
        const k1Rotation = Matrix4.rotationY(this.k1.angle);
        this.k1.worldTransform = k1Rotation.multiply(Matrix4.translation(this.k1.position));
    }
}

class HipparchusTrain extends GearTrain {
    b3: GearNode;
    e1: GearNode;
    e6: GearNode;
    k2: GearNode;
    moonDial: SceneNode;
    axleB: SceneNode;
    axleE: SceneNode;

    constructor(renderingContext: AppRenderingContext, private solarTrain: SolarTrain, private sarosTrain: SarosTrain, private lunarTrain: LunarTrain) {
        super(renderingContext);
        this.k2 = GearNode.createClosed(50, 0.140, renderingContext);
        this.e6 = GearNode.createClosed(50, 0.14, renderingContext);
        this.e1 = GearNode.createClosed(32, 0.1, renderingContext);
        this.b3 = GearNode.createClosed(32, 0.095, renderingContext);
        this.axleB = SceneNode.withMesh(new Mesh(ShapeFactory.createCylinder(0.02, 0.18, 16), renderingContext.gl), renderingContext);
        this.axleE = SceneNode.withMesh(new Mesh(ShapeFactory.createCylinder(0.02, 0.17, 16), renderingContext.gl), renderingContext);
        this.moonDial = SceneNode.withMesh(new Mesh(ShapeFactory.createDial(), renderingContext.gl), renderingContext);
        this.children = [this.k2, this.e6, this.e1, this.b3, this.axleB, this.axleE, this.moonDial];
    }

    update() {
        const k2PivotRadius = 0.27;
        const k2EpicycleMaxOffset = 2 * Math.PI / 60; // TODO
        this.k2.angle = this.lunarTrain.k1.angle + k2EpicycleMaxOffset * Math.sin(this.lunarTrain.k1.angle);
        this.k2.position = this.lunarTrain.e5.position.add(new Vector3(
            k2PivotRadius * Math.sin(this.sarosTrain.e3.angle),
            -this.thickness - this.explodeOffset,
            k2PivotRadius * Math.cos(this.sarosTrain.e3.angle)));
        const k2Rotation = Matrix4.rotationY(this.k2.angle);
        this.k2.worldTransform = k2Rotation.multiply(Matrix4.translation(this.k2.position));
        
        this.e6.setAttributesByParent(this.k2, Math.PI + this.sarosTrain.e3.angle);
        const eRotation3 = Matrix4.rotationY(this.e6.angle);
        this.e6.worldTransform = eRotation3.multiply(Matrix4.translation(this.e6.position));

        this.e1.setAttributesToParent(this.e6, 4 * (this.thickness + this.explodeOffset));
        this.e1.worldTransform = eRotation3.multiply(Matrix4.translation(this.e1.position));

        this.axleE.position = this.e1.position.add(new Vector3(0, this.axleOffset, 0));
        this.axleE.worldTransform = eRotation3.multiply(Matrix4.translation(this.axleE.position));


        this.b3.setAttributesByParent(this.e1, Math.PI);
        const bRotation2 = Matrix4.rotationY(this.b3.angle);
        this.b3.position = this.solarTrain.b2.position.add(new Vector3(0, -2 * (this.thickness + this.explodeOffset) - this.plateThickness, 0));
        this.b3.worldTransform = bRotation2.multiply(Matrix4.translation(this.b3.position));

        this.moonDial.position = this.b3.position.add(new Vector3(0, 5 * (this.thickness + this.explodeOffset), 0));
        this.moonDial.worldTransform = bRotation2.multiply(Matrix4.translation(this.moonDial.position));
        
        this.axleB.position = this.moonDial.position.add(new Vector3(0, this.axleOffset + 0.01, 0));
        this.axleB.worldTransform = bRotation2.multiply(Matrix4.translation(this.axleB.position));
    }
}

export class AntikytheraScene extends Scene {
    nodes: SceneNode[];

    solarTrain: SolarTrain;
    lunarTrain: LunarTrain;
    m1Train: M1Train;
    lunisolarTrain: LunisolarTrain;
    olympicTrain: OlympicTrain;
    callipicTrain: CallipicTrain;
    sarosTrain: SarosTrain;
    exeligmosTrain: ExeligmosTrain;
    hipparchusTrain: HipparchusTrain;

    constructor(renderingContext: AppRenderingContext) {
        super(renderingContext);

        const alpha = 0.95;

        this.solarTrain = new SolarTrain(renderingContext);
        this.solarTrain.color = [0.6, 0.5, 0.1, alpha];

        this.m1Train = new M1Train(renderingContext, this.solarTrain);
        this.m1Train.color = [0.9, 0.5, 0.1, alpha];

        this.lunisolarTrain = new LunisolarTrain(renderingContext, this.m1Train);
        this.lunisolarTrain.color = [0.25, 0.75, 0.3, alpha];

        this.olympicTrain = new OlympicTrain(renderingContext, this.lunisolarTrain);
        this.olympicTrain.color = [1, 1, 1, alpha];

        this.callipicTrain = new CallipicTrain(renderingContext, this.lunisolarTrain);
        this.callipicTrain.color = [0.5, 0.75, 0.2, alpha];

        this.sarosTrain = new SarosTrain(renderingContext, this.m1Train);
        this.sarosTrain.color = [0.45, 0.4, 0.7, alpha];

        this.exeligmosTrain = new ExeligmosTrain(renderingContext, this.sarosTrain);
        this.exeligmosTrain.color = [0.65, 0.4, 0.7, alpha];

        this.lunarTrain = new LunarTrain(renderingContext, this.solarTrain, this.sarosTrain);
        this.lunarTrain.color = [0.5, 0.75, 0.9, alpha];

        this.hipparchusTrain = new HipparchusTrain(renderingContext, this.solarTrain, this.sarosTrain, this.lunarTrain);
        this.hipparchusTrain.color = [0.45, 0.8, 0.75, alpha];

        this.nodes = [this.solarTrain, this.m1Train, this.lunisolarTrain, this.olympicTrain, this.callipicTrain,
            this.sarosTrain, this.exeligmosTrain, this.lunarTrain, this.hipparchusTrain];
    }

    draw(seconds: number): void {
        this.light.rotatingPosition = seconds;
        this.camera.rotatingPosition = seconds;

        this.update(seconds);

        super.draw(seconds);
        this.renderingContext.standardShader.use();
        this.nodes.forEach(node => {
            node.draw();
        });
    }

    private update(seconds: number) {
        this.solarTrain.update(seconds);
        this.m1Train.update();
        this.lunisolarTrain.update();
        this.olympicTrain.update();
        this.callipicTrain.update();
        this.sarosTrain.update();
        this.exeligmosTrain.update();
        this.lunarTrain.update();
        this.hipparchusTrain.update();
    }
}

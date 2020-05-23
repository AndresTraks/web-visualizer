import { AppRenderingContext } from '../graphics/app-rendering-context';
import { Matrix4 } from "../graphics/matrix4";
import { Mesh } from "../graphics/mesh";
import { ShapeFactory } from "../graphics/shape-factory";
import { Vector3 } from "../graphics/vector3";
import { GearNode } from "../scene/gear-node";
import { Scene } from "../scene/scene";
import { SceneNode } from "../scene/scene-node";

export class AntikytheraScene extends Scene {
    nodes: SceneNode[];

    solarNodes: SceneNode;
    lunarNodes: SceneNode;
    m1Nodes: SceneNode;
    lunisolarNodes: SceneNode;
    olympicNodes: SceneNode;
    callipicNodes: SceneNode;
    sarosNodes: SceneNode;
    exeligmosNodes: SceneNode;
    hipparchosNodes: SceneNode;

    gearA1: GearNode;
    gearB1: GearNode;
    gearB2: GearNode;
    gearB3: GearNode;
    gearC1: GearNode;
    gearC2: GearNode;
    gearD1: GearNode;
    gearD2: GearNode;
    gearE1: GearNode;
    gearE2: GearNode;
    gearE3: GearNode;
    gearE4: GearNode;
    gearE5: GearNode;
    gearE6: GearNode;
    gearF1: GearNode;
    gearF2: GearNode;
    gearG1: GearNode;
    gearG2: GearNode;
    gearH1: GearNode;
    gearH2: GearNode;
    gearI1: GearNode;
    gearL1: GearNode;
    gearL2: GearNode;
    gearK1: GearNode;
    gearK2: GearNode;
    gearM1: GearNode;
    gearM2: GearNode;
    gearM3: GearNode;
    gearN1: GearNode;
    gearN2: GearNode;
    gearN3: GearNode;
    gearO1: GearNode;
    gearP1: GearNode;
    gearP2: GearNode;
    gearQ1: GearNode;
    
    moonDial: SceneNode;
    sarosDial: SceneNode;
    exigemosDial: SceneNode;
    metonicDial: SceneNode;
    olympicDial: SceneNode;
    callipicDial: SceneNode;

    axleB: SceneNode;
    axleD: SceneNode;
    axleE: SceneNode;
    axleG: SceneNode;
    axleI: SceneNode;
    axleM: SceneNode;
    axleN: SceneNode;
    axleO: SceneNode;
    axleQ: SceneNode;

    constructor(renderingContext: AppRenderingContext) {
        super(renderingContext);
        const gl = renderingContext.gl;

        const alpha = 0.95;

        this.solarNodes = new SceneNode(renderingContext);
        this.solarNodes.color = [0.6, 0.5, 0.1, alpha];
        this.gearA1 = GearNode.createFace(48, 0.136, renderingContext);
        this.gearB1 = GearNode.create(233, 0.65, 0.45, renderingContext);
        this.gearB1.addCross();
        this.gearB2 = GearNode.createClosed(64, 0.155, renderingContext);
        this.solarNodes.children = [this.gearA1, this.gearB1, this.gearB2];
        
        this.m1Nodes = new SceneNode(renderingContext);
        this.m1Nodes.color = [0.9, 0.5, 0.1, alpha];
        this.gearL1 = GearNode.createClosed(38, 0.09, renderingContext);
        this.gearL2 = GearNode.createClosed(53, 0.131, renderingContext);
        this.gearM1 = GearNode.createClosed(96, 0.245, renderingContext);
        this.gearM2 = GearNode.createClosed(15, 0.044, renderingContext);
        this.gearM3 = GearNode.createClosed(27, 0.06, renderingContext);
        this.axleM = SceneNode.withMesh(new Mesh(ShapeFactory.createCylinder(0.02, 0.16, 16), gl), renderingContext);
        this.m1Nodes.children = [this.gearL1, this.gearL2, this.gearM1, this.gearM2, this.gearM3, this.axleM];

        this.lunisolarNodes = new SceneNode(renderingContext);
        this.lunisolarNodes.color = [0.25, 0.75, 0.3, alpha];
        this.gearN1 = GearNode.createClosed(53, 0.125, renderingContext);
        this.gearN2 = GearNode.createClosed(57, 0.1, renderingContext);
        this.gearN3 = GearNode.createClosed(15, 0.05, renderingContext);
        this.metonicDial = SceneNode.withMesh(new Mesh(ShapeFactory.createDial(), gl), renderingContext);
        this.axleN = SceneNode.withMesh(new Mesh(ShapeFactory.createCylinder(0.02, 0.25, 16), gl), renderingContext);
        this.lunisolarNodes.children = [this.gearN1, this.gearN2, this.gearN3, this.metonicDial, this.axleN];

        this.olympicNodes = new SceneNode(renderingContext);
        this.olympicNodes.color = [1, 1, 1, alpha];
        this.gearO1 = GearNode.createClosed(60, 0.09, renderingContext);
        this.olympicDial = SceneNode.withMesh(new Mesh(ShapeFactory.createDial(), gl), renderingContext);
        this.axleO = SceneNode.withMesh(new Mesh(ShapeFactory.createCylinder(0.02, 0.21, 16), gl), renderingContext);
        this.olympicNodes.children = [this.gearO1, this.olympicDial, this.axleO];

        this.callipicNodes = new SceneNode(renderingContext);
        this.callipicNodes.color = [0.5, 0.75, 0.2, alpha];
        this.gearP1 = GearNode.createClosed(60, 0.13, renderingContext);
        this.gearP2 = GearNode.createClosed(12, 0.045, renderingContext);
        this.gearQ1 = GearNode.createClosed(60, 0.13, renderingContext);
        this.callipicDial = SceneNode.withMesh(new Mesh(ShapeFactory.createDial(), gl), renderingContext);
        this.axleQ = SceneNode.withMesh(new Mesh(ShapeFactory.createCylinder(0.02, 0.14, 16), gl), renderingContext);
        this.callipicNodes.children = [this.gearP1, this.gearP2, this.gearQ1, this.callipicDial, this.axleQ];

        this.sarosNodes = new SceneNode(renderingContext);
        this.sarosNodes.color = [0.45, 0.4, 0.7, alpha];
        this.gearE3 = GearNode.createClosed(223, 0.525, renderingContext);
        this.gearE4 = GearNode.create(188, 0.5, 0.425, renderingContext);
        this.gearF1 = GearNode.createClosed(53, 0.14, renderingContext);
        this.gearF2 = GearNode.createClosed(30, 0.08, renderingContext);
        this.gearG1 = GearNode.createClosed(54, 0.14, renderingContext);
        this.gearG2 = GearNode.createClosed(20, 0.05, renderingContext);
        this.sarosDial = SceneNode.withMesh(new Mesh(ShapeFactory.createDial(), gl), renderingContext);
        this.axleG = SceneNode.withMesh(new Mesh(ShapeFactory.createCylinder(0.02, 0.11, 16), gl), renderingContext);
        this.sarosNodes.children = [this.gearE3, this.gearE4, this.gearF1, this.gearF2, this.gearG1, this.gearG2, this.sarosDial, this.axleG];

        this.exeligmosNodes = new SceneNode(renderingContext);
        this.exeligmosNodes.color = [0.65, 0.4, 0.7, alpha];
        this.gearH1 = GearNode.createClosed(60, 0.14, renderingContext);
        this.gearH2 = GearNode.createClosed(15, 0.04, renderingContext);
        this.gearI1 = GearNode.createClosed(60, 0.13, renderingContext);
        this.exigemosDial = SceneNode.withMesh(new Mesh(ShapeFactory.createDial(), gl), renderingContext);
        this.axleI = SceneNode.withMesh(new Mesh(ShapeFactory.createCylinder(0.02, 0.04, 16), gl), renderingContext);
        this.exeligmosNodes.children = [this.gearH1, this.gearH2, this.gearI1, this.exigemosDial, this.axleI];

        this.lunarNodes = new SceneNode(renderingContext);
        this.lunarNodes.color = [0.5, 0.75, 0.9, alpha];
        this.gearC1 = GearNode.createClosed(38, 0.1, renderingContext);
        this.gearC2 = GearNode.createClosed(48, 0.11, renderingContext);
        this.gearD1 = GearNode.createClosed(24, 0.055, renderingContext);
        this.gearD2 = GearNode.createClosed(127, 0.315, renderingContext);
        this.axleD = SceneNode.withMesh(new Mesh(ShapeFactory.createCylinder(0.02, 0.12, 16), gl), renderingContext);
        this.gearE2 = GearNode.createClosed(32, 0.08, renderingContext);
        this.gearE5 = GearNode.createClosed(50, 0.135, renderingContext);
        this.gearK1 = GearNode.createClosed(50, 0.135, renderingContext);
        this.lunarNodes.children = [this.gearC1, this.gearC2, this.gearD1, this.gearD2, this.axleD, this.gearE2, this.gearE5, this.gearK1];

        this.hipparchosNodes = new SceneNode(renderingContext);
        this.hipparchosNodes.color = [0.45, 0.8, 0.75, alpha];
        this.gearK2 = GearNode.createClosed(50, 0.140, renderingContext);
        this.gearE6 = GearNode.createClosed(50, 0.14, renderingContext);
        this.gearE1 = GearNode.createClosed(32, 0.1, renderingContext);
        this.gearB3 = GearNode.createClosed(32, 0.095, renderingContext);
        this.axleB = SceneNode.withMesh(new Mesh(ShapeFactory.createCylinder(0.02, 0.18, 16), gl), renderingContext);
        this.axleE = SceneNode.withMesh(new Mesh(ShapeFactory.createCylinder(0.02, 0.17, 16), gl), renderingContext);
        this.moonDial = SceneNode.withMesh(new Mesh(ShapeFactory.createDial(), gl), renderingContext);
        this.hipparchosNodes.children = [this.gearK2, this.gearE6, this.gearE1, this.gearB3, this.axleB, this.axleE, this.moonDial];

        this.nodes = [this.solarNodes, this.m1Nodes, this.lunisolarNodes, this.olympicNodes, this.callipicNodes,
            this.sarosNodes, this.exeligmosNodes, this.lunarNodes, this.hipparchosNodes];
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
        const thickness = 0.025;
        const plateThickness = 0.03;
        const explodeOffset = 0.01; // seconds / 200;
        const axleOffset = -0.005;


        // Input / Solar

        this.gearA1.angle = seconds * 1.2;
        this.gearA1.worldTransform = Matrix4.rotationY(this.gearA1.angle)
            .multiply(Matrix4.rotationX(Math.PI / 2))
            .multiply(Matrix4.translation(new Vector3(0, 0.136 - thickness, -0.65 + 0.001)));


        this.gearB1.setAngleByParent(this.gearA1);
        this.gearB1.position = Vector3.zero;
        const bRotation = Matrix4.rotationY(this.gearB1.angle);
        this.gearB1.worldTransform = bRotation.multiply(Matrix4.translation(this.gearB1.position));

        this.gearB2.setAttributesToParent(this.gearB1, -(thickness + explodeOffset));
        this.gearB2.worldTransform = bRotation.multiply(Matrix4.translation(this.gearB2.position));


        // m1

        this.gearL1.setAttributesByParent(this.gearB2, 0.2 * Math.PI);
        const lRotation = Matrix4.rotationY(this.gearL1.angle);
        this.gearL1.worldTransform = lRotation.multiply(Matrix4.translation(this.gearL1.position));

        this.gearL2.setAttributesToParent(this.gearL1, -(thickness + explodeOffset));
        this.gearL2.worldTransform = lRotation.multiply(Matrix4.translation(this.gearL2.position));


        this.gearM1.setAttributesByParent(this.gearL2, 1.8 * Math.PI);
        const mRotation = Matrix4.rotationY(this.gearM1.angle);
        this.gearM1.worldTransform = mRotation.multiply(Matrix4.translation(this.gearM1.position));

        this.gearM2.setAttributesToParent(this.gearM1, -(thickness + explodeOffset) - plateThickness);
        this.gearM2.worldTransform = mRotation.multiply(Matrix4.translation(this.gearM2.position));

        this.gearM3.setAttributesToParent(this.gearM2, -2 * (thickness + explodeOffset));
        this.gearM3.worldTransform = mRotation.multiply(Matrix4.translation(this.gearM3.position));

        this.axleM.position = this.gearM1.position.add(new Vector3(0, axleOffset, 0));
        this.axleM.worldTransform = mRotation.multiply(Matrix4.translation(this.axleM.position));


        // Lunisolar

        this.gearN1.setAttributesByParent(this.gearM2, 0.2 * Math.PI);
        const nRotation = Matrix4.rotationY(this.gearN1.angle);
        this.gearN1.worldTransform = nRotation.multiply(Matrix4.translation(this.gearN1.position));

        this.gearN2.setAttributesToParent(this.gearN1, -(thickness + explodeOffset));
        this.gearN2.worldTransform = nRotation.multiply(Matrix4.translation(this.gearN2.position));

        this.gearN3.setAttributesToParent(this.gearN2, -(thickness + explodeOffset));
        this.gearN3.worldTransform = nRotation.multiply(Matrix4.translation(this.gearN3.position));

        this.metonicDial.position = this.gearN3.position.add(new Vector3(0, -5 * (thickness + explodeOffset), 0));
        this.metonicDial.worldTransform = nRotation.multiply(Matrix4.translation(this.metonicDial.position));

        this.axleN.position = this.gearN1.position.add(new Vector3(0, axleOffset, 0));
        this.axleN.worldTransform = nRotation.multiply(Matrix4.translation(this.axleN.position));


        // Olympic

        this.gearO1.setAngleByParent(this.gearN2);
        const oRotation = Matrix4.rotationY(this.gearO1.angle);
        this.gearO1.setAdjacentPosition(this.gearN2, 1.5 * Math.PI);
        this.gearO1.worldTransform = oRotation.multiply(Matrix4.translation(this.gearO1.position));
        
        this.olympicDial.position = this.gearO1.position.add(new Vector3(0, -6 * (thickness + explodeOffset), 0));
        this.olympicDial.worldTransform = oRotation.multiply(Matrix4.translation(this.olympicDial.position));

        this.axleO.position = this.gearO1.position.add(new Vector3(0, axleOffset, 0));
        this.axleO.worldTransform = oRotation.multiply(Matrix4.translation(this.axleO.position));


        // Metonic

        this.gearP1.setAttributesByParent(this.gearN3, 0.25 * Math.PI);
        const pRotation = Matrix4.rotationY(this.gearP1.angle);
        this.gearP1.worldTransform = pRotation.multiply(Matrix4.translation(this.gearP1.position));

        this.gearP2.setAttributesToParent(this.gearP1, -(thickness + explodeOffset));
        this.gearP2.worldTransform = pRotation.multiply(Matrix4.translation(this.gearP2.position));


        this.gearQ1.setAttributesByParent(this.gearP2, 0.75 * Math.PI);
        const qRotation = Matrix4.rotationY(this.gearQ1.angle);
        this.gearQ1.worldTransform = qRotation.multiply(Matrix4.translation(this.gearQ1.position));

        this.callipicDial.position = this.gearQ1.position.add(new Vector3(0, -4 * (thickness + explodeOffset), 0));
        this.callipicDial.worldTransform = qRotation.multiply(Matrix4.translation(this.callipicDial.position));

        this.axleQ.position = this.gearQ1.position.add(new Vector3(0, axleOffset, 0));
        this.axleQ.worldTransform = qRotation.multiply(Matrix4.translation(this.axleQ.position));

       
        // Saros

        this.gearE3.setAttributesByParent(this.gearM3, 0.85 * Math.PI);
        const eRotation = Matrix4.rotationY(this.gearE3.angle);
        this.gearE3.worldTransform = eRotation.multiply(Matrix4.translation(this.gearE3.position));

        this.gearE4.setAttributesToParent(this.gearE3, -(thickness + explodeOffset));
        this.gearE4.worldTransform = eRotation.multiply(Matrix4.translation(this.gearE4.position));


        this.gearF1.setAttributesByParent(this.gearE4, 0.96 * Math.PI);
        const fRotation = Matrix4.rotationY(this.gearF1.angle);
        this.gearF1.worldTransform = fRotation.multiply(Matrix4.translation(this.gearF1.position));

        this.gearF2.setAttributesToParent(this.gearF1, -(thickness + explodeOffset));
        this.gearF2.worldTransform = fRotation.multiply(Matrix4.translation(this.gearF2.position));


        this.gearG1.setAttributesByParent(this.gearF2, 1.4 * Math.PI);
        const gRotation = Matrix4.rotationY(this.gearG1.angle);
        this.gearG1.worldTransform = gRotation.multiply(Matrix4.translation(this.gearG1.position));

        this.gearG2.setAttributesToParent(this.gearG1, -(thickness + explodeOffset));
        this.gearG2.worldTransform = gRotation.multiply(Matrix4.translation(this.gearG2.position));
        
        this.sarosDial.position = this.gearG2.position.add(new Vector3(0, -2 * (thickness + explodeOffset), 0));
        this.sarosDial.worldTransform = gRotation.multiply(Matrix4.translation(this.sarosDial.position));

        this.axleG.position = this.gearG1.position.add(new Vector3(0, axleOffset, 0));
        this.axleG.worldTransform = gRotation.multiply(Matrix4.translation(this.axleG.position));


        // Exeligmos

        this.gearH1.setAttributesByParent(this.gearG2, 1.35 * Math.PI);
        const hRotation = Matrix4.rotationY(this.gearH1.angle);
        this.gearH1.worldTransform = hRotation.multiply(Matrix4.translation(this.gearH1.position));

        this.gearH2.setAttributesToParent(this.gearH1, -(thickness + explodeOffset));
        this.gearH2.worldTransform = hRotation.multiply(Matrix4.translation(this.gearH2.position));


        this.gearI1.setAttributesByParent(this.gearH2, 1.75 * Math.PI);
        const iRotation = Matrix4.rotationY(this.gearI1.angle);
        this.gearI1.worldTransform = iRotation.multiply(Matrix4.translation(this.gearI1.position));

        this.exigemosDial.position = this.gearI1.position.add(new Vector3(0, -1 * (thickness + explodeOffset), 0));
        this.exigemosDial.worldTransform = iRotation.multiply(Matrix4.translation(this.exigemosDial.position));

        this.axleI.position = this.gearI1.position.add(new Vector3(0, axleOffset, 0));
        this.axleI.worldTransform = iRotation.multiply(Matrix4.translation(this.axleI.position));


        // Lunar

        this.gearC1.setAttributesByParent(this.gearB2, 1.1 * Math.PI);
        const cRotation = Matrix4.rotationY(this.gearC1.angle);
        this.gearC1.worldTransform = cRotation.multiply(Matrix4.translation(this.gearC1.position));

        this.gearC2.setAttributesToParent(this.gearC1, -(thickness + explodeOffset));
        this.gearC2.worldTransform = cRotation.multiply(Matrix4.translation(this.gearC2.position));


        this.gearD1.setAttributesByParent(this.gearC2, 0.82 * Math.PI);
        const dRotation = Matrix4.rotationY(this.gearD1.angle);
        this.gearD1.worldTransform = dRotation.multiply(Matrix4.translation(this.gearD1.position));

        this.gearD2.setAttributesToParent(this.gearD1, 2 * (-thickness - explodeOffset) - plateThickness);
        this.gearD2.worldTransform = dRotation.multiply(Matrix4.translation(this.gearD2.position));

        this.axleD.position = this.gearD1.position.add(new Vector3(0, axleOffset, 0));
        this.axleD.worldTransform = dRotation.multiply(Matrix4.translation(this.axleD.position));


        this.gearE2.setAttributesByParent(this.gearD2, 0.152 * Math.PI);
        const eRotation2 = Matrix4.rotationY(this.gearE2.angle);
        this.gearE2.worldTransform = eRotation2.multiply(Matrix4.translation(this.gearE2.position));

        this.gearE5.setAttributesToParent(this.gearE2, -2 * (thickness + explodeOffset));
        this.gearE5.worldTransform = eRotation2.multiply(Matrix4.translation(this.gearE5.position));


        // Hipparchos

        this.gearK1.setAttributesByParent(this.gearE5, this.gearE3.angle);
        this.gearK1.angle -= 2 * this.gearE3.angle;
        const k1Rotation = Matrix4.rotationY(this.gearK1.angle);
        this.gearK1.worldTransform = k1Rotation.multiply(Matrix4.translation(this.gearK1.position));

        const k2PivotRadius = 0.27;
        const k2EpicycleMaxOffset = 2 * Math.PI / 60; // TODO
        this.gearK2.angle = this.gearK1.angle + k2EpicycleMaxOffset * Math.sin(this.gearK1.angle);
        this.gearK2.position = this.gearE5.position.add(new Vector3(
            k2PivotRadius * Math.sin(this.gearE3.angle),
            -thickness - explodeOffset,
            k2PivotRadius * Math.cos(this.gearE3.angle)));
        const k2Rotation = Matrix4.rotationY(this.gearK2.angle);
        this.gearK2.worldTransform = k2Rotation.multiply(Matrix4.translation(this.gearK2.position));
        
        this.gearE6.setAttributesByParent(this.gearK2, Math.PI + this.gearE3.angle);
        const eRotation3 = Matrix4.rotationY(this.gearE6.angle);
        this.gearE6.worldTransform = eRotation3.multiply(Matrix4.translation(this.gearE6.position));

        this.gearE1.setAttributesToParent(this.gearE6, 4 * (thickness + explodeOffset));
        this.gearE1.worldTransform = eRotation3.multiply(Matrix4.translation(this.gearE1.position));

        this.axleE.position = this.gearE1.position.add(new Vector3(0, axleOffset, 0));
        this.axleE.worldTransform = eRotation3.multiply(Matrix4.translation(this.axleE.position));


        this.gearB3.setAttributesByParent(this.gearE1, Math.PI);
        const bRotation2 = Matrix4.rotationY(this.gearB3.angle);
        this.gearB3.position = this.gearB2.position.add(new Vector3(0, -2 * (thickness + explodeOffset) - plateThickness, 0));
        this.gearB3.worldTransform = bRotation2.multiply(Matrix4.translation(this.gearB3.position));

        this.moonDial.position = this.gearB3.position.add(new Vector3(0, 5 * (thickness + explodeOffset), 0));
        this.moonDial.worldTransform = bRotation2.multiply(Matrix4.translation(this.moonDial.position));
        
        this.axleB.position = this.moonDial.position.add(new Vector3(0, axleOffset + 0.01, 0));
        this.axleB.worldTransform = bRotation2.multiply(Matrix4.translation(this.axleB.position));
    }
}

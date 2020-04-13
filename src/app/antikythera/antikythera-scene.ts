import { Scene } from "../scene/scene";
import { GearNode } from "../scene/gear-node";
import { SceneNode } from "../scene/scene-node";
import { ShapeFactory } from "../graphics/shape-factory";
import { Mesh } from "../graphics/mesh";
import { ShaderProgram } from "../graphics/shader-program";
import { Matrix4 } from "../graphics/matrix4";
import { Vector3 } from "../graphics/vector3";

export class AntikytheraScene extends Scene {
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

    constructor(gl: WebGLRenderingContext) {
        super(gl);

        this.gearA1 = GearNode.createFace(48, 0.136, gl);
        this.gearB1 = GearNode.create(233, 0.65, 0.45, gl);
        this.gearB1.addCross();
        this.gearB2 = GearNode.createClosed(64, 0.155, gl);
        this.gearB3 = GearNode.createClosed(32, 0.095, gl);
        this.axleB = SceneNode.withMesh(new Mesh(ShapeFactory.createCylinder(0.02, 0.18), gl), gl);
        this.moonDial = SceneNode.withMesh(new Mesh(ShapeFactory.createDial(), gl), gl);
        this.gearC1 = GearNode.createClosed(38, 0.1, gl);
        this.gearC2 = GearNode.createClosed(48, 0.11, gl);
        this.gearD1 = GearNode.createClosed(24, 0.055, gl);
        this.gearD2 = GearNode.createClosed(127, 0.315, gl);
        this.axleD = SceneNode.withMesh(new Mesh(ShapeFactory.createCylinder(0.02, 0.12), gl), gl);
        this.gearE1 = GearNode.createClosed(32, 0.1, gl);
        this.gearE2 = GearNode.createClosed(32, 0.08, gl);
        this.gearE3 = GearNode.createClosed(223, 0.525, gl);
        this.gearE4 = GearNode.create(188, 0.5, 0.425, gl);
        this.gearE5 = GearNode.createClosed(50, 0.135, gl);
        this.gearE6 = GearNode.createClosed(50, 0.14, gl);
        this.axleE = SceneNode.withMesh(new Mesh(ShapeFactory.createCylinder(0.02, 0.17), gl), gl);
        this.gearF1 = GearNode.createClosed(53, 0.14, gl);
        this.gearF2 = GearNode.createClosed(30, 0.08, gl);
        this.gearG1 = GearNode.createClosed(54, 0.14, gl);
        this.sarosDial = SceneNode.withMesh(new Mesh(ShapeFactory.createDial(), gl), gl);
        this.gearG2 = GearNode.createClosed(20, 0.05, gl);
        this.axleG = SceneNode.withMesh(new Mesh(ShapeFactory.createCylinder(0.02, 0.11), gl), gl);
        this.gearH1 = GearNode.createClosed(60, 0.14, gl);
        this.gearH2 = GearNode.createClosed(15, 0.04, gl);
        this.gearI1 = GearNode.createClosed(60, 0.13, gl);
        this.exigemosDial = SceneNode.withMesh(new Mesh(ShapeFactory.createDial(), gl), gl);
        this.axleI = SceneNode.withMesh(new Mesh(ShapeFactory.createCylinder(0.02, 0.04), gl), gl);
        this.gearL1 = GearNode.createClosed(38, 0.09, gl);
        this.gearL2 = GearNode.createClosed(53, 0.131, gl);
        this.gearK1 = GearNode.createClosed(50, 0.135, gl);
        this.gearK2 = GearNode.createClosed(50, 0.140, gl);
        this.gearM1 = GearNode.createClosed(96, 0.245, gl);
        this.gearM2 = GearNode.createClosed(15, 0.044, gl);
        this.gearM3 = GearNode.createClosed(27, 0.06, gl);
        this.axleM = SceneNode.withMesh(new Mesh(ShapeFactory.createCylinder(0.02, 0.16), gl), gl);
        this.gearN1 = GearNode.createClosed(53, 0.125, gl);
        this.gearN2 = GearNode.createClosed(57, 0.1, gl);
        this.gearN3 = GearNode.createClosed(15, 0.05, gl);
        this.metonicDial = SceneNode.withMesh(new Mesh(ShapeFactory.createDial(), gl), gl);
        this.axleN = SceneNode.withMesh(new Mesh(ShapeFactory.createCylinder(0.02, 0.25), gl), gl);
        this.gearO1 = GearNode.createClosed(60, 0.09, gl);
        this.olympicDial = SceneNode.withMesh(new Mesh(ShapeFactory.createDial(), gl), gl);
        this.axleO = SceneNode.withMesh(new Mesh(ShapeFactory.createCylinder(0.02, 0.21), gl), gl);
        this.gearP1 = GearNode.createClosed(60, 0.13, gl);
        this.gearP2 = GearNode.createClosed(12, 0.045, gl);
        this.gearQ1 = GearNode.createClosed(60, 0.13, gl);
        this.callipicDial = SceneNode.withMesh(new Mesh(ShapeFactory.createDial(), gl), gl);
        this.axleQ = SceneNode.withMesh(new Mesh(ShapeFactory.createCylinder(0.02, 0.14), gl), gl);
    }

    draw(program: ShaderProgram, seconds: number): void {
        super.draw(program, seconds);

        this.drawNodes(program, seconds);
    }

    private drawNodes(program: ShaderProgram, seconds: number) {
        const alpha = 0.95;
        const thickness = 0.025;
        const plateThickness = 0.03;
        const explodeOffset = 0.01; // seconds / 200;
        const axleOffset = -0.005;


        // Input / Solar

        this.gl.uniform4fv(program.vertColorLocation, [0.6, 0.5, 0.1, alpha]);

        this.gearA1.angle = seconds * 1.2;
        this.gearA1.worldTransform = Matrix4.rotationY(this.gearA1.angle)
            .multiply(Matrix4.rotationX(Math.PI / 2))
            .multiply(Matrix4.translation(new Vector3(0, 0.136 - thickness, -0.65 + 0.001)));
        this.gearA1.draw(program);


        this.gearB1.setAngleByParent(this.gearA1);
        this.gearB1.position = Vector3.zero;
        const bRotation = Matrix4.rotationY(this.gearB1.angle);
        this.gearB1.worldTransform = bRotation.multiply(Matrix4.translation(this.gearB1.position));
        this.gearB1.draw(program);

        this.gearB2.setAttributesToParent(this.gearB1, -(thickness + explodeOffset));
        this.gearB2.worldTransform = bRotation.multiply(Matrix4.translation(this.gearB2.position));
        this.gearB2.draw(program);


        // m1

        this.gl.uniform4fv(program.vertColorLocation, [0.9, 0.5, 0.1, alpha]);

        this.gearL1.setAttributesByParent(this.gearB2, 0.2 * Math.PI);
        const lRotation = Matrix4.rotationY(this.gearL1.angle);
        this.gearL1.worldTransform = lRotation.multiply(Matrix4.translation(this.gearL1.position));
        this.gearL1.draw(program);

        this.gearL2.setAttributesToParent(this.gearL1, -(thickness + explodeOffset));
        this.gearL2.worldTransform = lRotation.multiply(Matrix4.translation(this.gearL2.position));
        this.gearL2.draw(program);


        this.gearM1.setAttributesByParent(this.gearL2, 1.8 * Math.PI);
        const mRotation = Matrix4.rotationY(this.gearM1.angle);
        this.gearM1.worldTransform = mRotation.multiply(Matrix4.translation(this.gearM1.position));
        this.gearM1.draw(program);

        this.gearM2.setAttributesToParent(this.gearM1, -(thickness + explodeOffset) - plateThickness);
        this.gearM2.worldTransform = mRotation.multiply(Matrix4.translation(this.gearM2.position));
        this.gearM2.draw(program);

        this.gearM3.setAttributesToParent(this.gearM2, -2 * (thickness + explodeOffset));
        this.gearM3.worldTransform = mRotation.multiply(Matrix4.translation(this.gearM3.position));
        this.gearM3.draw(program);

        this.axleM.position = this.gearM1.position.add(new Vector3(0, axleOffset, 0));
        this.axleM.worldTransform = mRotation.multiply(Matrix4.translation(this.axleM.position));
        this.axleM.draw(program);


        // Lunisolar

        this.gl.uniform4fv(program.vertColorLocation, [0.25, 0.75, 0.3, alpha]);

        this.gearN1.setAttributesByParent(this.gearM2, 0.2 * Math.PI);
        const nRotation = Matrix4.rotationY(this.gearN1.angle);
        this.gearN1.worldTransform = nRotation.multiply(Matrix4.translation(this.gearN1.position));
        this.gearN1.draw(program);

        this.gearN2.setAttributesToParent(this.gearN1, -(thickness + explodeOffset));
        this.gearN2.worldTransform = nRotation.multiply(Matrix4.translation(this.gearN2.position));
        this.gearN2.draw(program);

        this.gearN3.setAttributesToParent(this.gearN2, -(thickness + explodeOffset));
        this.gearN3.worldTransform = nRotation.multiply(Matrix4.translation(this.gearN3.position));
        this.gearN3.draw(program);

        this.metonicDial.position = this.gearN3.position.add(new Vector3(0, -5 * (thickness + explodeOffset), 0));
        this.metonicDial.worldTransform = nRotation.multiply(Matrix4.translation(this.metonicDial.position));
        this.metonicDial.draw(program);

        this.axleN.position = this.gearN1.position.add(new Vector3(0, axleOffset, 0));
        this.axleN.worldTransform = nRotation.multiply(Matrix4.translation(this.axleN.position));
        this.axleN.draw(program);


        // Olympic

        this.gl.uniform4fv(program.vertColorLocation, [1, 1, 1, alpha]);

        this.gearO1.setAngleByParent(this.gearN2);
        const oRotation = Matrix4.rotationY(this.gearO1.angle);
        this.gearO1.setAdjacentPosition(this.gearN2, 1.5 * Math.PI);
        this.gearO1.worldTransform = oRotation.multiply(Matrix4.translation(this.gearO1.position));
        this.gearO1.draw(program);

        
        this.olympicDial.position = this.gearO1.position.add(new Vector3(0, -6 * (thickness + explodeOffset), 0));
        this.olympicDial.worldTransform = oRotation.multiply(Matrix4.translation(this.olympicDial.position));
        this.olympicDial.draw(program);

        this.axleO.position = this.gearO1.position.add(new Vector3(0, axleOffset, 0));
        this.axleO.worldTransform = oRotation.multiply(Matrix4.translation(this.axleO.position));
        this.axleO.draw(program);


        // Metonic

        this.gl.uniform4fv(program.vertColorLocation, [0.5, 0.75, 0.2, alpha]);

        this.gearP1.setAttributesByParent(this.gearN3, 0.25 * Math.PI);
        const pRotation = Matrix4.rotationY(this.gearP1.angle);
        this.gearP1.worldTransform = pRotation.multiply(Matrix4.translation(this.gearP1.position));
        this.gearP1.draw(program);

        this.gearP2.setAttributesToParent(this.gearP1, -(thickness + explodeOffset));
        this.gearP2.worldTransform = pRotation.multiply(Matrix4.translation(this.gearP2.position));
        this.gearP2.draw(program);


        this.gearQ1.setAttributesByParent(this.gearP2, 0.75 * Math.PI);
        const qRotation = Matrix4.rotationY(this.gearQ1.angle);
        this.gearQ1.worldTransform = qRotation.multiply(Matrix4.translation(this.gearQ1.position));
        this.gearQ1.draw(program);

        this.callipicDial.position = this.gearQ1.position.add(new Vector3(0, -4 * (thickness + explodeOffset), 0));
        this.callipicDial.worldTransform = qRotation.multiply(Matrix4.translation(this.callipicDial.position));
        this.callipicDial.draw(program);

        this.axleQ.position = this.gearQ1.position.add(new Vector3(0, axleOffset, 0));
        this.axleQ.worldTransform = qRotation.multiply(Matrix4.translation(this.axleQ.position));
        this.axleQ.draw(program);

       
        // Saros

        this.gl.uniform4fv(program.vertColorLocation, [0.45, 0.4, 0.7, alpha]);

        this.gearE3.setAttributesByParent(this.gearM3, 0.85 * Math.PI);
        const eRotation = Matrix4.rotationY(this.gearE3.angle);
        this.gearE3.worldTransform = eRotation.multiply(Matrix4.translation(this.gearE3.position));
        this.gearE3.draw(program);

        this.gearE4.setAttributesToParent(this.gearE3, -(thickness + explodeOffset));
        this.gearE4.worldTransform = eRotation.multiply(Matrix4.translation(this.gearE4.position));
        this.gearE4.draw(program);


        this.gearF1.setAttributesByParent(this.gearE4, 0.96 * Math.PI);
        const fRotation = Matrix4.rotationY(this.gearF1.angle);
        this.gearF1.worldTransform = fRotation.multiply(Matrix4.translation(this.gearF1.position));
        this.gearF1.draw(program);

        this.gearF2.setAttributesToParent(this.gearF1, -(thickness + explodeOffset));
        this.gearF2.worldTransform = fRotation.multiply(Matrix4.translation(this.gearF2.position));
        this.gearF2.draw(program);


        this.gearG1.setAttributesByParent(this.gearF2, 1.4 * Math.PI);
        const gRotation = Matrix4.rotationY(this.gearG1.angle);
        this.gearG1.worldTransform = gRotation.multiply(Matrix4.translation(this.gearG1.position));
        this.gearG1.draw(program);

        this.gearG2.setAttributesToParent(this.gearG1, -(thickness + explodeOffset));
        this.gearG2.worldTransform = gRotation.multiply(Matrix4.translation(this.gearG2.position));
        this.gearG2.draw(program);
        
        this.sarosDial.position = this.gearG2.position.add(new Vector3(0, -2 * (thickness + explodeOffset), 0));
        this.sarosDial.worldTransform = gRotation.multiply(Matrix4.translation(this.sarosDial.position));
        this.sarosDial.draw(program);

        this.axleG.position = this.gearG1.position.add(new Vector3(0, axleOffset, 0));
        this.axleG.worldTransform = gRotation.multiply(Matrix4.translation(this.axleG.position));
        this.axleG.draw(program);


        // Exeligmos

        this.gl.uniform4fv(program.vertColorLocation, [0.65, 0.4, 0.7, alpha]);

        this.gearH1.setAttributesByParent(this.gearG2, 1.35 * Math.PI);
        const hRotation = Matrix4.rotationY(this.gearH1.angle);
        this.gearH1.worldTransform = hRotation.multiply(Matrix4.translation(this.gearH1.position));
        this.gearH1.draw(program);

        this.gearH2.setAttributesToParent(this.gearH1, -(thickness + explodeOffset));
        this.gearH2.worldTransform = hRotation.multiply(Matrix4.translation(this.gearH2.position));
        this.gearH2.draw(program);


        this.gearI1.setAttributesByParent(this.gearH2, 1.75 * Math.PI);
        const iRotation = Matrix4.rotationY(this.gearI1.angle);
        this.gearI1.worldTransform = iRotation.multiply(Matrix4.translation(this.gearI1.position));
        this.gearI1.draw(program);

        this.exigemosDial.position = this.gearI1.position.add(new Vector3(0, -1 * (thickness + explodeOffset), 0));
        this.exigemosDial.worldTransform = iRotation.multiply(Matrix4.translation(this.exigemosDial.position));
        this.exigemosDial.draw(program);

        this.axleI.position = this.gearI1.position.add(new Vector3(0, axleOffset, 0));
        this.axleI.worldTransform = iRotation.multiply(Matrix4.translation(this.axleI.position));
        this.axleI.draw(program);


        // Lunar

        this.gl.uniform4fv(program.vertColorLocation, [0.5, 0.75, 0.9, alpha]);

        this.gearC1.setAttributesByParent(this.gearB2, 1.1 * Math.PI);
        const cRotation = Matrix4.rotationY(this.gearC1.angle);
        this.gearC1.worldTransform = cRotation.multiply(Matrix4.translation(this.gearC1.position));
        this.gearC1.draw(program);

        this.gearC2.setAttributesToParent(this.gearC1, -(thickness + explodeOffset));
        this.gearC2.worldTransform = cRotation.multiply(Matrix4.translation(this.gearC2.position));
        this.gearC2.draw(program);


        this.gearD1.setAttributesByParent(this.gearC2, 0.82 * Math.PI);
        const dRotation = Matrix4.rotationY(this.gearD1.angle);
        this.gearD1.worldTransform = dRotation.multiply(Matrix4.translation(this.gearD1.position));
        this.gearD1.draw(program);

        this.gearD2.setAttributesToParent(this.gearD1, 2 * (-thickness - explodeOffset) - plateThickness);
        this.gearD2.worldTransform = dRotation.multiply(Matrix4.translation(this.gearD2.position));
        this.gearD2.draw(program);

        this.axleD.position = this.gearD1.position.add(new Vector3(0, axleOffset, 0));
        this.axleD.worldTransform = dRotation.multiply(Matrix4.translation(this.axleD.position));
        this.axleD.draw(program);


        this.gearE2.setAttributesByParent(this.gearD2, 0.152 * Math.PI);
        const eRotation2 = Matrix4.rotationY(this.gearE2.angle);
        this.gearE2.worldTransform = eRotation2.multiply(Matrix4.translation(this.gearE2.position));
        this.gearE2.draw(program);

        this.gearE5.setAttributesToParent(this.gearE2, -2 * (thickness + explodeOffset));
        this.gearE5.worldTransform = eRotation2.multiply(Matrix4.translation(this.gearE5.position));
        this.gearE5.draw(program);


        // Hipparchos

        this.gearK1.setAttributesByParent(this.gearE5, this.gearE3.angle);
        this.gearK1.angle -= 2 * this.gearE3.angle;
        const k1Rotation = Matrix4.rotationY(this.gearK1.angle);
        this.gearK1.worldTransform = k1Rotation.multiply(Matrix4.translation(this.gearK1.position));
        this.gearK1.draw(program);

        this.gl.uniform4fv(program.vertColorLocation, [0.45, 0.8, 0.75, alpha]);

        const k2PivotRadius = 0.27;
        const k2EpicycleMaxOffset = 2 * Math.PI / 60; // TODO
        this.gearK2.angle = this.gearK1.angle + k2EpicycleMaxOffset * Math.sin(this.gearK1.angle);
        this.gearK2.position = this.gearE5.position.add(new Vector3(
            k2PivotRadius * Math.sin(this.gearE3.angle),
            -thickness - explodeOffset,
            k2PivotRadius * Math.cos(this.gearE3.angle)));
        const k2Rotation = Matrix4.rotationY(this.gearK2.angle);
        this.gearK2.worldTransform = k2Rotation.multiply(Matrix4.translation(this.gearK2.position));
        this.gearK2.draw(program);
        
        this.gearE6.setAttributesByParent(this.gearK2, Math.PI + this.gearE3.angle);
        const eRotation3 = Matrix4.rotationY(this.gearE6.angle);
        this.gearE6.worldTransform = eRotation3.multiply(Matrix4.translation(this.gearE6.position));
        this.gearE6.draw(program);

        this.gearE1.setAttributesToParent(this.gearE6, 4 * (thickness + explodeOffset));
        this.gearE1.worldTransform = eRotation3.multiply(Matrix4.translation(this.gearE1.position));
        this.gearE1.draw(program);

        this.axleE.position = this.gearE1.position.add(new Vector3(0, axleOffset, 0));
        this.axleE.worldTransform = eRotation3.multiply(Matrix4.translation(this.axleE.position));
        this.axleE.draw(program);


        this.gearB3.setAttributesByParent(this.gearE1, Math.PI);
        const bRotation2 = Matrix4.rotationY(this.gearB3.angle);
        this.gearB3.position = this.gearB2.position.add(new Vector3(0, -2 * (thickness + explodeOffset) - plateThickness, 0));
        this.gearB3.worldTransform = bRotation2.multiply(Matrix4.translation(this.gearB3.position));
        this.gearB3.draw(program);

        this.moonDial.position = this.gearB3.position.add(new Vector3(0, 5 * (thickness + explodeOffset), 0));
        this.moonDial.worldTransform = bRotation2.multiply(Matrix4.translation(this.moonDial.position));
        this.moonDial.draw(program);
        
        this.axleB.position = this.moonDial.position.add(new Vector3(0, axleOffset + 0.01, 0));
        this.axleB.worldTransform = bRotation2.multiply(Matrix4.translation(this.axleB.position));
        this.axleB.draw(program);
    }
}

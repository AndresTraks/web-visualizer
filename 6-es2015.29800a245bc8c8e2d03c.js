(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{YJky:function(t,a,i){"use strict";i.r(a),i.d(a,"AntikytheraModule",function(){return y});var e=i("ofXK"),s=i("tyNb"),r=i("FCAv"),o=i("NCiM"),n=i("kCbX"),h=i("uhFJ");class l extends n.a{static create(t,a,i,e){return this.createWithAxle(t,a,i,e)}static createWithAxle(t,a,i,e){const s=[],r=Math.PI/t;let o=0;for(let n=0;n<t;n++){const t=new h.a(e*Math.sin(o),0,e*Math.cos(o)),n=new h.a(a*Math.sin(o),0,a*Math.cos(o));o+=r;const l=new h.a(i*Math.sin(o),0,i*Math.cos(o));o+=r;const g=new h.a(e*Math.sin(o),0,e*Math.cos(o)),c=new h.a(a*Math.sin(o),0,a*Math.cos(o)),p=t.subtract(new h.a(0,.025,0)),b=n.subtract(new h.a(0,.025,0)),d=l.subtract(new h.a(0,.025,0)),u=g.subtract(new h.a(0,.025,0)),w=c.subtract(new h.a(0,.025,0));this.pushTriangle(s,t,n,l),this.pushTriangle(s,t,l,g),this.pushTriangle(s,g,l,c),this.pushTriangle(s,b,p,d),this.pushTriangle(s,d,p,u),this.pushTriangle(s,d,u,w),this.pushTriangle(s,n,b,l),this.pushTriangle(s,l,b,d),this.pushTriangle(s,l,d,c),this.pushTriangle(s,c,d,w),this.pushTriangle(s,p,t,g),this.pushTriangle(s,p,g,u)}return s}static createClosed(t,a,i){return this.createWithAxle(t,a,i,.02)}static createFace(t,a,i){const e=i-a,s=a-.025,r=[],o=Math.PI/t;let n=0;for(let l=0;l<t;l++){const t=new h.a(a*Math.sin(n),-.1,a*Math.cos(n)),i=new h.a(s*Math.sin(n),-.1,s*Math.cos(n)),l=new h.a(a*Math.sin(n),0,a*Math.cos(n)),g=new h.a(s*Math.sin(n),0,s*Math.cos(n));n+=o;const c=new h.a(a*Math.sin(n),e,a*Math.cos(n)),p=new h.a(s*Math.sin(n),e,s*Math.cos(n));n+=o;const b=new h.a(a*Math.sin(n),-.1,a*Math.cos(n)),d=new h.a(s*Math.sin(n),-.1,s*Math.cos(n)),u=new h.a(a*Math.sin(n),0,a*Math.cos(n)),w=new h.a(s*Math.sin(n),0,s*Math.cos(n));this.pushTriangle(r,l,t,c),this.pushTriangle(r,c,t,b),this.pushTriangle(r,c,b,u),this.pushTriangle(r,i,g,p),this.pushTriangle(r,i,p,d),this.pushTriangle(r,d,p,w),this.pushTriangle(r,g,l,c),this.pushTriangle(r,g,c,p),this.pushTriangle(r,p,c,u),this.pushTriangle(r,p,u,w),this.pushTriangle(r,t,i,b),this.pushTriangle(r,b,i,d)}return r}}var g=i("+pcE");class c extends g.a{constructor(t,a,i,e,s,r){super(r),this.numTeeth=t,this.outerRadius=a,this.innerRadius=i,this.axleRadius=e,this.meshes=[s]}static createFace(t,a,i){const e=c.getRightAngleToothInnerRadius(a,t),s=new o.a(l.createFace(t,a,e),i.gl);return new c(t,a,e,null,s,i)}static create(t,a,i,e){const s=c.getRightAngleToothInnerRadius(a,t),r=new o.a(l.create(t,a,s,i),e.gl);return new c(t,a,s,i,r,e)}static createClosed(t,a,i){const e=c.getRightAngleToothInnerRadius(a,t),s=new o.a(l.createClosed(t,a,e),i.gl);return new c(t,a,e,null,s,i)}static getRightAngleToothInnerRadius(t,a){return t-2*Math.PI*t/a/2}addCross(){const t=new o.a(n.a.createBox(new h.a(this.axleRadius,.01,.08)),this.gl);t.childWorldTransform=r.a.translation(new h.a(0,-.012,0));const a=new o.a(n.a.createBox(new h.a(.08,.01,this.axleRadius)),this.gl);a.childWorldTransform=r.a.translation(new h.a(0,-.011,0)),this.meshes.push(t,a)}setAttributesToParent(t,a){this.setAngleToParent(t),this.setPositionToParent(t,a)}setAttributesByParent(t,a){this.setAngleByParent(t),this.setAdjacentPosition(t,a)}setAngleToParent(t){this.angle=t.angle}setAngleByParent(t){this.angle=t.numTeeth/this.numTeeth*-t.angle}setPositionToParent(t,a){this.position=t.position.add(new h.a(0,a,0))}setAdjacentPosition(t,a){const i=this.innerRadius+t.innerRadius+(t.outerRadius-t.innerRadius+(this.outerRadius-this.innerRadius))/2;this.position=t.position.add(new h.a(i*Math.sin(a),0,i*Math.cos(a)))}}var p=i("7G6I");class b extends p.a{constructor(t){super(t);const a=t.gl;this.camera.orthoScaling=1.4,this.solarNodes=new g.a(t),this.solarNodes.color=[.6,.5,.1,.95],this.gearA1=c.createFace(48,.136,t),this.gearB1=c.create(233,.65,.45,t),this.gearB1.addCross(),this.gearB2=c.createClosed(64,.155,t),this.solarNodes.children=[this.gearA1,this.gearB1,this.gearB2],this.m1Nodes=new g.a(t),this.m1Nodes.color=[.9,.5,.1,.95],this.gearL1=c.createClosed(38,.09,t),this.gearL2=c.createClosed(53,.131,t),this.gearM1=c.createClosed(96,.245,t),this.gearM2=c.createClosed(15,.044,t),this.gearM3=c.createClosed(27,.06,t),this.axleM=g.a.withMesh(new o.a(n.a.createCylinder(.02,.16,16),a),t),this.m1Nodes.children=[this.gearL1,this.gearL2,this.gearM1,this.gearM2,this.gearM3,this.axleM],this.lunisolarNodes=new g.a(t),this.lunisolarNodes.color=[.25,.75,.3,.95],this.gearN1=c.createClosed(53,.125,t),this.gearN2=c.createClosed(57,.1,t),this.gearN3=c.createClosed(15,.05,t),this.metonicDial=g.a.withMesh(new o.a(n.a.createDial(),a),t),this.axleN=g.a.withMesh(new o.a(n.a.createCylinder(.02,.25,16),a),t),this.lunisolarNodes.children=[this.gearN1,this.gearN2,this.gearN3,this.metonicDial,this.axleN],this.olympicNodes=new g.a(t),this.olympicNodes.color=[1,1,1,.95],this.gearO1=c.createClosed(60,.09,t),this.olympicDial=g.a.withMesh(new o.a(n.a.createDial(),a),t),this.axleO=g.a.withMesh(new o.a(n.a.createCylinder(.02,.21,16),a),t),this.olympicNodes.children=[this.gearO1,this.olympicDial,this.axleO],this.callipicNodes=new g.a(t),this.callipicNodes.color=[.5,.75,.2,.95],this.gearP1=c.createClosed(60,.13,t),this.gearP2=c.createClosed(12,.045,t),this.gearQ1=c.createClosed(60,.13,t),this.callipicDial=g.a.withMesh(new o.a(n.a.createDial(),a),t),this.axleQ=g.a.withMesh(new o.a(n.a.createCylinder(.02,.14,16),a),t),this.callipicNodes.children=[this.gearP1,this.gearP2,this.gearQ1,this.callipicDial,this.axleQ],this.sarosNodes=new g.a(t),this.sarosNodes.color=[.45,.4,.7,.95],this.gearE3=c.createClosed(223,.525,t),this.gearE4=c.create(188,.5,.425,t),this.gearF1=c.createClosed(53,.14,t),this.gearF2=c.createClosed(30,.08,t),this.gearG1=c.createClosed(54,.14,t),this.gearG2=c.createClosed(20,.05,t),this.sarosDial=g.a.withMesh(new o.a(n.a.createDial(),a),t),this.axleG=g.a.withMesh(new o.a(n.a.createCylinder(.02,.11,16),a),t),this.sarosNodes.children=[this.gearE3,this.gearE4,this.gearF1,this.gearF2,this.gearG1,this.gearG2,this.sarosDial,this.axleG],this.exeligmosNodes=new g.a(t),this.exeligmosNodes.color=[.65,.4,.7,.95],this.gearH1=c.createClosed(60,.14,t),this.gearH2=c.createClosed(15,.04,t),this.gearI1=c.createClosed(60,.13,t),this.exigemosDial=g.a.withMesh(new o.a(n.a.createDial(),a),t),this.axleI=g.a.withMesh(new o.a(n.a.createCylinder(.02,.04,16),a),t),this.exeligmosNodes.children=[this.gearH1,this.gearH2,this.gearI1,this.exigemosDial,this.axleI],this.lunarNodes=new g.a(t),this.lunarNodes.color=[.5,.75,.9,.95],this.gearC1=c.createClosed(38,.1,t),this.gearC2=c.createClosed(48,.11,t),this.gearD1=c.createClosed(24,.055,t),this.gearD2=c.createClosed(127,.315,t),this.axleD=g.a.withMesh(new o.a(n.a.createCylinder(.02,.12,16),a),t),this.gearE2=c.createClosed(32,.08,t),this.gearE5=c.createClosed(50,.135,t),this.gearK1=c.createClosed(50,.135,t),this.lunarNodes.children=[this.gearC1,this.gearC2,this.gearD1,this.gearD2,this.axleD,this.gearE2,this.gearE5,this.gearK1],this.hipparchosNodes=new g.a(t),this.hipparchosNodes.color=[.45,.8,.75,.95],this.gearK2=c.createClosed(50,.14,t),this.gearE6=c.createClosed(50,.14,t),this.gearE1=c.createClosed(32,.1,t),this.gearB3=c.createClosed(32,.095,t),this.axleB=g.a.withMesh(new o.a(n.a.createCylinder(.02,.18,16),a),t),this.axleE=g.a.withMesh(new o.a(n.a.createCylinder(.02,.17,16),a),t),this.moonDial=g.a.withMesh(new o.a(n.a.createDial(),a),t),this.hipparchosNodes.children=[this.gearK2,this.gearE6,this.gearE1,this.gearB3,this.axleB,this.axleE,this.moonDial],this.nodes=[this.solarNodes,this.m1Nodes,this.lunisolarNodes,this.olympicNodes,this.callipicNodes,this.sarosNodes,this.exeligmosNodes,this.lunarNodes,this.hipparchosNodes]}draw(t){this.light.rotatingPosition=t,this.camera.rotatingPosition=t,this.update(t),super.draw(t),this.renderingContext.standardShader.use(),this.nodes.forEach(t=>{t.draw()})}update(t){this.gearA1.angle=1.2*t,this.gearA1.worldTransform=r.a.rotationY(this.gearA1.angle).multiply(r.a.rotationX(Math.PI/2)).multiply(r.a.translation(new h.a(0,.136-.025,-.649))),this.gearB1.setAngleByParent(this.gearA1),this.gearB1.position=h.a.zero;const a=r.a.rotationY(this.gearB1.angle);this.gearB1.worldTransform=a.multiply(r.a.translation(this.gearB1.position)),this.gearB2.setAttributesToParent(this.gearB1,-.035),this.gearB2.worldTransform=a.multiply(r.a.translation(this.gearB2.position)),this.gearL1.setAttributesByParent(this.gearB2,.2*Math.PI);const i=r.a.rotationY(this.gearL1.angle);this.gearL1.worldTransform=i.multiply(r.a.translation(this.gearL1.position)),this.gearL2.setAttributesToParent(this.gearL1,-.035),this.gearL2.worldTransform=i.multiply(r.a.translation(this.gearL2.position)),this.gearM1.setAttributesByParent(this.gearL2,1.8*Math.PI);const e=r.a.rotationY(this.gearM1.angle);this.gearM1.worldTransform=e.multiply(r.a.translation(this.gearM1.position)),this.gearM2.setAttributesToParent(this.gearM1,-.065),this.gearM2.worldTransform=e.multiply(r.a.translation(this.gearM2.position)),this.gearM3.setAttributesToParent(this.gearM2,-.07),this.gearM3.worldTransform=e.multiply(r.a.translation(this.gearM3.position)),this.axleM.position=this.gearM1.position.add(new h.a(0,-.005,0)),this.axleM.worldTransform=e.multiply(r.a.translation(this.axleM.position)),this.gearN1.setAttributesByParent(this.gearM2,.2*Math.PI);const s=r.a.rotationY(this.gearN1.angle);this.gearN1.worldTransform=s.multiply(r.a.translation(this.gearN1.position)),this.gearN2.setAttributesToParent(this.gearN1,-.035),this.gearN2.worldTransform=s.multiply(r.a.translation(this.gearN2.position)),this.gearN3.setAttributesToParent(this.gearN2,-.035),this.gearN3.worldTransform=s.multiply(r.a.translation(this.gearN3.position)),this.metonicDial.position=this.gearN3.position.add(new h.a(0,.035*-5,0)),this.metonicDial.worldTransform=s.multiply(r.a.translation(this.metonicDial.position)),this.axleN.position=this.gearN1.position.add(new h.a(0,-.005,0)),this.axleN.worldTransform=s.multiply(r.a.translation(this.axleN.position)),this.gearO1.setAngleByParent(this.gearN2);const o=r.a.rotationY(this.gearO1.angle);this.gearO1.setAdjacentPosition(this.gearN2,1.5*Math.PI),this.gearO1.worldTransform=o.multiply(r.a.translation(this.gearO1.position)),this.olympicDial.position=this.gearO1.position.add(new h.a(0,.035*-6,0)),this.olympicDial.worldTransform=o.multiply(r.a.translation(this.olympicDial.position)),this.axleO.position=this.gearO1.position.add(new h.a(0,-.005,0)),this.axleO.worldTransform=o.multiply(r.a.translation(this.axleO.position)),this.gearP1.setAttributesByParent(this.gearN3,.25*Math.PI);const n=r.a.rotationY(this.gearP1.angle);this.gearP1.worldTransform=n.multiply(r.a.translation(this.gearP1.position)),this.gearP2.setAttributesToParent(this.gearP1,-.035),this.gearP2.worldTransform=n.multiply(r.a.translation(this.gearP2.position)),this.gearQ1.setAttributesByParent(this.gearP2,.75*Math.PI);const l=r.a.rotationY(this.gearQ1.angle);this.gearQ1.worldTransform=l.multiply(r.a.translation(this.gearQ1.position)),this.callipicDial.position=this.gearQ1.position.add(new h.a(0,-.14,0)),this.callipicDial.worldTransform=l.multiply(r.a.translation(this.callipicDial.position)),this.axleQ.position=this.gearQ1.position.add(new h.a(0,-.005,0)),this.axleQ.worldTransform=l.multiply(r.a.translation(this.axleQ.position)),this.gearE3.setAttributesByParent(this.gearM3,.85*Math.PI);const g=r.a.rotationY(this.gearE3.angle);this.gearE3.worldTransform=g.multiply(r.a.translation(this.gearE3.position)),this.gearE4.setAttributesToParent(this.gearE3,-.035),this.gearE4.worldTransform=g.multiply(r.a.translation(this.gearE4.position)),this.gearF1.setAttributesByParent(this.gearE4,.96*Math.PI);const c=r.a.rotationY(this.gearF1.angle);this.gearF1.worldTransform=c.multiply(r.a.translation(this.gearF1.position)),this.gearF2.setAttributesToParent(this.gearF1,-.035),this.gearF2.worldTransform=c.multiply(r.a.translation(this.gearF2.position)),this.gearG1.setAttributesByParent(this.gearF2,1.4*Math.PI);const p=r.a.rotationY(this.gearG1.angle);this.gearG1.worldTransform=p.multiply(r.a.translation(this.gearG1.position)),this.gearG2.setAttributesToParent(this.gearG1,-.035),this.gearG2.worldTransform=p.multiply(r.a.translation(this.gearG2.position)),this.sarosDial.position=this.gearG2.position.add(new h.a(0,-.07,0)),this.sarosDial.worldTransform=p.multiply(r.a.translation(this.sarosDial.position)),this.axleG.position=this.gearG1.position.add(new h.a(0,-.005,0)),this.axleG.worldTransform=p.multiply(r.a.translation(this.axleG.position)),this.gearH1.setAttributesByParent(this.gearG2,1.35*Math.PI);const b=r.a.rotationY(this.gearH1.angle);this.gearH1.worldTransform=b.multiply(r.a.translation(this.gearH1.position)),this.gearH2.setAttributesToParent(this.gearH1,-.035),this.gearH2.worldTransform=b.multiply(r.a.translation(this.gearH2.position)),this.gearI1.setAttributesByParent(this.gearH2,1.75*Math.PI);const d=r.a.rotationY(this.gearI1.angle);this.gearI1.worldTransform=d.multiply(r.a.translation(this.gearI1.position)),this.exigemosDial.position=this.gearI1.position.add(new h.a(0,-.035,0)),this.exigemosDial.worldTransform=d.multiply(r.a.translation(this.exigemosDial.position)),this.axleI.position=this.gearI1.position.add(new h.a(0,-.005,0)),this.axleI.worldTransform=d.multiply(r.a.translation(this.axleI.position)),this.gearC1.setAttributesByParent(this.gearB2,1.1*Math.PI);const u=r.a.rotationY(this.gearC1.angle);this.gearC1.worldTransform=u.multiply(r.a.translation(this.gearC1.position)),this.gearC2.setAttributesToParent(this.gearC1,-.035),this.gearC2.worldTransform=u.multiply(r.a.translation(this.gearC2.position)),this.gearD1.setAttributesByParent(this.gearC2,.82*Math.PI);const w=r.a.rotationY(this.gearD1.angle);this.gearD1.worldTransform=w.multiply(r.a.translation(this.gearD1.position)),this.gearD2.setAttributesToParent(this.gearD1,-.1),this.gearD2.worldTransform=w.multiply(r.a.translation(this.gearD2.position)),this.axleD.position=this.gearD1.position.add(new h.a(0,-.005,0)),this.axleD.worldTransform=w.multiply(r.a.translation(this.axleD.position)),this.gearE2.setAttributesByParent(this.gearD2,.152*Math.PI);const m=r.a.rotationY(this.gearE2.angle);this.gearE2.worldTransform=m.multiply(r.a.translation(this.gearE2.position)),this.gearE5.setAttributesToParent(this.gearE2,-.07),this.gearE5.worldTransform=m.multiply(r.a.translation(this.gearE5.position)),this.gearK1.setAttributesByParent(this.gearE5,this.gearE3.angle),this.gearK1.angle-=2*this.gearE3.angle;const M=r.a.rotationY(this.gearK1.angle);this.gearK1.worldTransform=M.multiply(r.a.translation(this.gearK1.position));const I=2*Math.PI/60;this.gearK2.angle=this.gearK1.angle+I*Math.sin(this.gearK1.angle),this.gearK2.position=this.gearE5.position.add(new h.a(.27*Math.sin(this.gearE3.angle),-.035,.27*Math.cos(this.gearE3.angle)));const P=r.a.rotationY(this.gearK2.angle);this.gearK2.worldTransform=P.multiply(r.a.translation(this.gearK2.position)),this.gearE6.setAttributesByParent(this.gearK2,Math.PI+this.gearE3.angle);const T=r.a.rotationY(this.gearE6.angle);this.gearE6.worldTransform=T.multiply(r.a.translation(this.gearE6.position)),this.gearE1.setAttributesToParent(this.gearE6,.14),this.gearE1.worldTransform=T.multiply(r.a.translation(this.gearE1.position)),this.axleE.position=this.gearE1.position.add(new h.a(0,-.005,0)),this.axleE.worldTransform=T.multiply(r.a.translation(this.axleE.position)),this.gearB3.setAttributesByParent(this.gearE1,Math.PI);const y=r.a.rotationY(this.gearB3.angle);this.gearB3.position=this.gearB2.position.add(new h.a(0,-.1,0)),this.gearB3.worldTransform=y.multiply(r.a.translation(this.gearB3.position)),this.moonDial.position=this.gearB3.position.add(new h.a(0,5*.035,0)),this.moonDial.worldTransform=y.multiply(r.a.translation(this.moonDial.position)),this.axleB.position=this.moonDial.position.add(new h.a(0,.005,0)),this.axleB.worldTransform=y.multiply(r.a.translation(this.axleB.position))}}var d=i("JKqQ"),u=i("4u2P"),w=i("fXoL"),m=i("jhN1"),M=i("S8xs");const I=[{path:"",component:(()=>{class t{constructor(t){this.isOrtographicProjection=!1,t.setTitle("Antikythera")}ngOnInit(){const t=this.appCanvas.surface.nativeElement.getContext("webgl");if(t){const a=new u.a(t);this.scene=new b(a),this.appCanvas.setScene(this.scene)}}onChangeOrtographicProjection(){this.isOrtographicProjection=!this.isOrtographicProjection,this.scene.camera.orthographic=this.isOrtographicProjection}}return t.\u0275fac=function(a){return new(a||t)(w.Gb(m.b))},t.\u0275cmp=w.Ab({type:t,selectors:[["antikythera-component"]],viewQuery:function(t,a){if(1&t&&w.dc(d.a,3),2&t){let t;w.Vb(t=w.Pb())&&(a.appCanvas=t.first)}},decls:112,vars:3,consts:[["id","bodyContainer"],["id","leftPanel"],[3,"isAnimated"],["accordion-heading","","type","button",1,"btn","btn-link","btn-block","clearfix"],[1,"badge","badge-arrow","float-left"],[1,"float-left"],["value","ds","type","checkbox",3,"checked","change"],[3,"isOpen"],[1,"gear-group-a"],[1,"gear-group-l"],[1,"gear-group-n"],[1,"gear-group-o"],[1,"gear-group-p"],[1,"gear-group-e"],[1,"gear-group-h"],[1,"gear-group-c"],[1,"gear-group-k"]],template:function(t,a){1&t&&(w.Jb(0,"div",0),w.Jb(1,"div",1),w.Jb(2,"accordion",2),w.Jb(3,"accordion-group"),w.Jb(4,"button",3),w.Jb(5,"span",4),w.Zb(6,"\u2b9e"),w.Ib(),w.Jb(7,"span",5),w.Zb(8,"Settings"),w.Ib(),w.Ib(),w.Jb(9,"label"),w.Jb(10,"input",6),w.Ob("change",function(){return a.onChangeOrtographicProjection()}),w.Ib(),w.Zb(11," Orthographic projection "),w.Ib(),w.Ib(),w.Jb(12,"accordion-group",7),w.Jb(13,"button",3),w.Jb(14,"span",4),w.Zb(15,"\u2b9e"),w.Ib(),w.Jb(16,"span",5),w.Zb(17,"Introduction"),w.Ib(),w.Ib(),w.Zb(18," The Antikythera mechanism is a mechanical computer used to predict eclipses and the positions of celestial objects. "),w.Ib(),w.Jb(19,"accordion-group"),w.Jb(20,"button",3),w.Jb(21,"span",4),w.Zb(22,"\u2b9e"),w.Ib(),w.Jb(23,"span",5),w.Zb(24,"Gears"),w.Ib(),w.Ib(),w.Jb(25,"ul",8),w.Jb(26,"li"),w.Zb(27," a1 "),w.Jb(28,"ul"),w.Jb(29,"li"),w.Zb(30," b1 "),w.Ib(),w.Jb(31,"li"),w.Zb(32," b2 "),w.Jb(33,"ul",9),w.Jb(34,"li"),w.Zb(35," l1 "),w.Ib(),w.Jb(36,"li"),w.Zb(37," l2 "),w.Jb(38,"ul"),w.Jb(39,"li"),w.Zb(40," m1 "),w.Ib(),w.Jb(41,"li"),w.Zb(42," m2 "),w.Jb(43,"ul",10),w.Jb(44,"li"),w.Zb(45," n1 "),w.Ib(),w.Jb(46,"li"),w.Zb(47," n2 "),w.Jb(48,"ul",11),w.Jb(49,"li"),w.Zb(50," o1 "),w.Ib(),w.Ib(),w.Ib(),w.Jb(51,"li"),w.Zb(52," n3 "),w.Jb(53,"ul",12),w.Jb(54,"li"),w.Zb(55," p1 "),w.Ib(),w.Jb(56,"li"),w.Zb(57," p2 "),w.Jb(58,"ul"),w.Jb(59,"li"),w.Zb(60," q1 "),w.Ib(),w.Ib(),w.Ib(),w.Ib(),w.Ib(),w.Ib(),w.Ib(),w.Jb(61,"li"),w.Zb(62," m3 "),w.Jb(63,"ul",13),w.Jb(64,"li"),w.Zb(65," e3 "),w.Ib(),w.Jb(66,"li"),w.Zb(67," e4 "),w.Jb(68,"ul"),w.Jb(69,"li"),w.Zb(70," f1 "),w.Ib(),w.Jb(71,"li"),w.Zb(72," f2 "),w.Jb(73,"ul"),w.Jb(74,"li"),w.Zb(75," g1 "),w.Ib(),w.Jb(76,"li"),w.Zb(77," g2 "),w.Jb(78,"ul",14),w.Jb(79,"li"),w.Zb(80," h1 "),w.Ib(),w.Jb(81,"li"),w.Zb(82," h2 "),w.Ib(),w.Ib(),w.Ib(),w.Ib(),w.Ib(),w.Ib(),w.Ib(),w.Ib(),w.Ib(),w.Ib(),w.Ib(),w.Ib(),w.Jb(83,"ul",15),w.Jb(84,"li"),w.Zb(85," c1 "),w.Ib(),w.Jb(86,"li"),w.Zb(87," c2 "),w.Jb(88,"ul"),w.Jb(89,"li"),w.Zb(90," d1 "),w.Ib(),w.Jb(91,"li"),w.Zb(92," d2 "),w.Jb(93,"ul"),w.Jb(94,"li"),w.Zb(95," e2 "),w.Ib(),w.Jb(96,"li"),w.Zb(97," e5 "),w.Jb(98,"ul"),w.Jb(99,"li"),w.Zb(100," k1 "),w.Ib(),w.Jb(101,"li",16),w.Zb(102," k2 "),w.Jb(103,"ul"),w.Jb(104,"li"),w.Zb(105," e6 "),w.Ib(),w.Jb(106,"li"),w.Zb(107," e1 "),w.Jb(108,"ul"),w.Jb(109,"li"),w.Zb(110," b3 "),w.Ib(),w.Ib(),w.Ib(),w.Ib(),w.Ib(),w.Ib(),w.Ib(),w.Ib(),w.Ib(),w.Ib(),w.Ib(),w.Ib(),w.Ib(),w.Ib(),w.Ib(),w.Ib(),w.Ib(),w.Ib(),w.Ib(),w.Hb(111,"app-canvas"),w.Ib()),2&t&&(w.wb(2),w.Tb("isAnimated",!0),w.wb(8),w.Tb("checked",a.isOrtographicProjection),w.wb(2),w.Tb("isOpen",!0))},directives:[M.a,M.c,d.a],styles:["#leftPanel[_ngcontent-%COMP%]{width:350px;height:768px;float:left;overflow-y:auto;white-space:normal}#bodyContainer[_ngcontent-%COMP%]{white-space:nowrap}.badge-arrow[_ngcontent-%COMP%]{margin-top:4px;transition-duration:.2s;transition-property:transform}.panel-open[_ngcontent-%COMP%]   .badge-arrow[_ngcontent-%COMP%]{transform:rotate(90deg)}ul[_ngcontent-%COMP%]{padding-left:25px}.gear-group-a[_ngcontent-%COMP%]{background-color:#99801a}.gear-group-l[_ngcontent-%COMP%]{background-color:#e6801a}.gear-group-n[_ngcontent-%COMP%]{background-color:#40bf4d}.gear-group-o[_ngcontent-%COMP%]{background-color:#fff}.gear-group-p[_ngcontent-%COMP%]{background-color:#80bf33}.gear-group-e[_ngcontent-%COMP%]{background-color:#7366b3}.gear-group-h[_ngcontent-%COMP%]{background-color:#a666b3}.gear-group-c[_ngcontent-%COMP%]{background-color:#80bfe6}.gear-group-k[_ngcontent-%COMP%]{background-color:#73ccbf}"]}),t})()}];let P=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=w.Eb({type:t}),t.\u0275inj=w.Db({imports:[[s.a.forChild(I)],s.a]}),t})();var T=i("YP2Z");let y=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=w.Eb({type:t}),t.\u0275inj=w.Db({imports:[[e.b,P,T.a,M.b.forRoot()]]}),t})()}}]);
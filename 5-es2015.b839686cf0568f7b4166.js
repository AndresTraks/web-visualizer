(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{YJky:function(t,e,i){"use strict";i.r(e),i.d(e,"AntikytheraModule",(function(){return F}));var s=i("ofXK"),r=i("tyNb");class a{constructor(t,e,i){this.x=t,this.y=e,this.z=i}static get zero(){return new a(0,0,0)}get el(){return[this.x,this.y,this.z]}get length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}get negated(){return new a(-this.x,-this.y,-this.z)}get normalized(){const t=1/this.length;return new a(this.x*t,this.y*t,this.z*t)}add(t){return new a(this.x+t.x,this.y+t.y,this.z+t.z)}subtract(t){return new a(this.x-t.x,this.y-t.y,this.z-t.z)}cross(t){return new a(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}}class n{constructor(t){this.el=t}get e11(){return this.el[0]}get e12(){return this.el[1]}get e13(){return this.el[2]}get e14(){return this.el[3]}get e21(){return this.el[4]}get e22(){return this.el[5]}get e23(){return this.el[6]}get e24(){return this.el[7]}get e31(){return this.el[8]}get e32(){return this.el[9]}get e33(){return this.el[10]}get e34(){return this.el[11]}get e41(){return this.el[12]}get e42(){return this.el[13]}get e43(){return this.el[14]}get e44(){return this.el[15]}set e11(t){this.el[0]=t}set e12(t){this.el[1]=t}set e13(t){this.el[2]=t}set e14(t){this.el[3]=t}set e21(t){this.el[4]=t}set e22(t){this.el[5]=t}set e23(t){this.el[6]=t}set e24(t){this.el[7]=t}set e31(t){this.el[8]=t}set e32(t){this.el[9]=t}set e33(t){this.el[10]=t}set e34(t){this.el[11]=t}set e41(t){this.el[12]=t}set e42(t){this.el[13]=t}set e43(t){this.el[14]=t}set e44(t){this.el[15]=t}static get identity(){return new n([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}static translation(t){return new n([1,0,0,0,0,1,0,0,0,0,1,0,t.x,t.y,t.z,1])}static rotationX(t){const e=Math.cos(t),i=Math.sin(t);return new n([1,0,0,0,0,e,i,0,0,-i,e,0,0,0,0,1])}static rotationY(t){const e=Math.cos(t),i=Math.sin(t);return new n([e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1])}static rotationZ(t){const e=Math.cos(t),i=Math.sin(t);return new n([e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1])}static perspectiveProjection(t,e,i,s){const r=i*Math.tan(.5*t),a=-r,o=a*e,h=r*e;return new n([2*i/(h-o),0,0,0,0,2*i/(r-a),0,0,(h+o)/(h-o),(r+a)/(r-a),-(s+i)/(s-i),-1,0,0,-2*s*i/(s-i),0])}static orthographicProjection(t,e,i,s){const r=-t/2,a=t/2,o=-e/2,h=e/2,l=1/(a-r),c=1/(h-o),g=1/(s-i);return new n([2*l,0,0,0,0,2*c,0,0,0,0,-2*g,0,-(a+r)*l,-(h+o)*c,-(s+i)*g,1])}static view(t,e,i){const s=t.subtract(e).normalized,r=i.cross(s).normalized,a=s.cross(r).normalized;return new n([r.x,a.x,s.x,0,r.y,a.y,s.y,0,r.z,a.z,s.z,0,-r.dot(t),-a.dot(t),-s.dot(t),1])}multiply(t){var e=this;return new n([e.e11*t.e11+e.e12*t.e21+e.e13*t.e31+e.e14*t.e41,e.e11*t.e12+e.e12*t.e22+e.e13*t.e32+e.e14*t.e42,e.e11*t.e13+e.e12*t.e23+e.e13*t.e33+e.e14*t.e43,e.e11*t.e14+e.e12*t.e24+e.e13*t.e34+e.e14*t.e44,e.e21*t.e11+e.e22*t.e21+e.e23*t.e31+e.e24*t.e41,e.e21*t.e12+e.e22*t.e22+e.e23*t.e32+e.e24*t.e42,e.e21*t.e13+e.e22*t.e23+e.e23*t.e33+e.e24*t.e43,e.e21*t.e14+e.e22*t.e24+e.e23*t.e34+e.e24*t.e44,e.e31*t.e11+e.e32*t.e21+e.e33*t.e31+e.e34*t.e41,e.e31*t.e12+e.e32*t.e22+e.e33*t.e32+e.e34*t.e42,e.e31*t.e13+e.e32*t.e23+e.e33*t.e33+e.e34*t.e43,e.e31*t.e14+e.e32*t.e24+e.e33*t.e34+e.e34*t.e44,e.e41*t.e11+e.e42*t.e21+e.e43*t.e31+e.e44*t.e41,e.e41*t.e12+e.e42*t.e22+e.e43*t.e32+e.e44*t.e42,e.e41*t.e13+e.e42*t.e23+e.e43*t.e33+e.e44*t.e43,e.e41*t.e14+e.e42*t.e24+e.e43*t.e34+e.e44*t.e44])}}class o{constructor(){this.up=new a(0,1,0),this.fov=Math.PI/4,this.aspectRatio=1,this.nearPlane=.1,this.farPlane=100,this.isOrthographic=!1,this.calculateProjection()}set fieldOfView(t){this.fov=t,this.calculateProjection()}set near(t){this.nearPlane=t,this.calculateProjection()}set far(t){this.farPlane=t,this.calculateProjection()}set aspect(t){this.aspectRatio=t,this.calculateProjection()}set orthographic(t){this.isOrthographic=t,this.calculateProjection()}get viewMatrix(){return n.view(this.eye,this.target,this.up)}get projectionMatrix(){return this.projection}calculateProjection(){this.projection=this.isOrthographic?n.orthographicProjection(this.aspectRatio,1,this.nearPlane,this.farPlane):n.perspectiveProjection(this.fov,this.aspectRatio,this.nearPlane,this.farPlane)}set rotatingPosition(t){const e=1+t/16;this.eye=new a(1.75*Math.sin(e),.7*Math.sin(e+4.5),1.75*Math.cos(e))}}class h{set rotatingPosition(t){const e=t/16;this.position=new a(2*Math.sin(e),1,2*Math.cos(e))}}class l{constructor(t,e){this.gl=e,this.buffer=e.createBuffer(),this.bind(),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.createBuffer(t),this.gl.STATIC_DRAW),this.numVertices=t.length/2}createBuffer(t){const e=[];for(const i of t)e.push(i.x),e.push(i.y),e.push(i.z);return new Float32Array(e)}bind(){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.buffer)}draw(t){this.bind(),this.positionAttribLocation=t.getAttribLocation("position");const e=6*Float32Array.BYTES_PER_ELEMENT;this.gl.vertexAttribPointer(this.positionAttribLocation,3,this.gl.FLOAT,!1,e,0),this.gl.enableVertexAttribArray(this.positionAttribLocation),this.normalAttribLocation=t.getAttribLocation("normal"),this.gl.vertexAttribPointer(this.normalAttribLocation,3,this.gl.FLOAT,!1,e,3*Float32Array.BYTES_PER_ELEMENT),this.gl.enableVertexAttribArray(this.normalAttribLocation),this.gl.drawArrays(this.gl.TRIANGLES,0,this.numVertices),this.gl.disableVertexAttribArray(this.positionAttribLocation),this.gl.disableVertexAttribArray(this.normalAttribLocation)}}class c{static createBox(t){const e=new a(-t.x,t.y,-t.z),i=new a(-t.x,t.y,t.z),s=new a(t.x,t.y,-t.z),r=new a(t.x,t.y,t.z),n=new a(-t.x,-t.y,-t.z),o=new a(-t.x,-t.y,t.z),h=new a(t.x,-t.y,-t.z),l=new a(t.x,-t.y,t.z),c=[];return this.pushTriangle(c,e,i,s),this.pushTriangle(c,s,i,r),this.pushTriangle(c,o,n,h),this.pushTriangle(c,o,h,l),this.pushTriangle(c,e,s,n),this.pushTriangle(c,n,s,h),this.pushTriangle(c,s,r,h),this.pushTriangle(c,h,r,l),this.pushTriangle(c,r,i,l),this.pushTriangle(c,l,i,o),this.pushTriangle(c,i,e,o),this.pushTriangle(c,o,e,n),c}static createDial(){const t=.01,e=.02,i=new a(-.1,t,0),s=new a(0,t,e),r=new a(0,t,-e),n=new a(-.1,-t,0),o=new a(0,-t,e),h=new a(0,-t,-e),l=[];return this.pushTriangle(l,i,s,r),this.pushTriangle(l,i,n,s),this.pushTriangle(l,s,n,o),this.pushTriangle(l,i,r,n),this.pushTriangle(l,n,r,h),this.pushTriangle(l,r,s,h),this.pushTriangle(l,h,s,o),this.pushTriangle(l,o,n,h),l}static createCylinder(t,e){const i=new a(0,-e,0),s=[];let r=0;const n=2*Math.PI/16;for(let o=0;o<16;o++){const o=new a(t*Math.sin(r),0,t*Math.cos(r)),h=new a(t*Math.sin(r+n),0,t*Math.cos(r+n)),l=o.add(new a(0,-e,0)),c=h.add(new a(0,-e,0));this.pushTriangle(s,a.zero,o,h),this.pushTriangle(s,l,i,c),this.pushTriangle(s,h,o,l),this.pushTriangle(s,h,l,c),r+=n}return s}static pushTriangle(t,e,i,s){const r=c.calculateNormal(e,i,s);t.push(e,r,i,r,s,r)}static calculateNormal(t,e,i){const s=e.subtract(t),r=i.subtract(t);return new a(s.y*r.z-s.z*r.y,s.z*r.x-s.x*r.z,s.x*r.y-s.y*r.x).normalized}}class g extends c{static create(t,e,i,s){return this.createWithAxle(t,e,i,s)}static createWithAxle(t,e,i,s){const r=[],n=Math.PI/t;let o=0;for(let h=0;h<t;h++){const t=new a(s*Math.sin(o),0,s*Math.cos(o)),h=new a(e*Math.sin(o),0,e*Math.cos(o));o+=n;const l=new a(i*Math.sin(o),0,i*Math.cos(o));o+=n;const c=new a(s*Math.sin(o),0,s*Math.cos(o)),g=new a(e*Math.sin(o),0,e*Math.cos(o)),d=t.subtract(new a(0,.025,0)),p=h.subtract(new a(0,.025,0)),u=l.subtract(new a(0,.025,0)),m=c.subtract(new a(0,.025,0)),w=g.subtract(new a(0,.025,0));this.pushTriangle(r,t,h,l),this.pushTriangle(r,t,l,c),this.pushTriangle(r,c,l,g),this.pushTriangle(r,p,d,u),this.pushTriangle(r,u,d,m),this.pushTriangle(r,u,m,w),this.pushTriangle(r,h,p,l),this.pushTriangle(r,l,p,u),this.pushTriangle(r,l,u,g),this.pushTriangle(r,g,u,w),this.pushTriangle(r,d,t,c),this.pushTriangle(r,d,c,m)}return r}static createClosed(t,e,i){return this.createWithAxle(t,e,i,.02)}static createFace(t,e,i){const s=i-e,r=e-.025,n=[],o=Math.PI/t;let h=0;for(let l=0;l<t;l++){const t=new a(e*Math.sin(h),-.1,e*Math.cos(h)),i=new a(r*Math.sin(h),-.1,r*Math.cos(h)),l=new a(e*Math.sin(h),0,e*Math.cos(h)),c=new a(r*Math.sin(h),0,r*Math.cos(h));h+=o;const g=new a(e*Math.sin(h),s,e*Math.cos(h)),d=new a(r*Math.sin(h),s,r*Math.cos(h));h+=o;const p=new a(e*Math.sin(h),-.1,e*Math.cos(h)),u=new a(r*Math.sin(h),-.1,r*Math.cos(h)),m=new a(e*Math.sin(h),0,e*Math.cos(h)),w=new a(r*Math.sin(h),0,r*Math.cos(h));this.pushTriangle(n,l,t,g),this.pushTriangle(n,g,t,p),this.pushTriangle(n,g,p,m),this.pushTriangle(n,i,c,d),this.pushTriangle(n,i,d,u),this.pushTriangle(n,u,d,w),this.pushTriangle(n,c,l,g),this.pushTriangle(n,c,g,d),this.pushTriangle(n,d,g,m),this.pushTriangle(n,d,m,w),this.pushTriangle(n,t,i,p),this.pushTriangle(n,p,i,u)}return n}}class d{constructor(t){this.gl=t,this.worldTransform=n.identity}static withMesh(t,e){const i=new d(e);return i.meshes=[t],i}draw(t){if(this.color&&this.gl.uniform4fv(t.vertColorLocation,this.color),this.meshes){this.gl.uniformMatrix4fv(t.worldMatrixLocation,!1,this.worldTransform.el);for(const e of this.meshes)e.childWorldTransform?(this.gl.uniformMatrix4fv(t.worldMatrixLocation,!1,this.worldTransform.multiply(e.childWorldTransform).el),e.draw(t),this.gl.uniformMatrix4fv(t.worldMatrixLocation,!1,this.worldTransform.el)):e.draw(t)}this.children&&this.children.forEach(e=>{e.draw(t)})}}class p extends d{constructor(t,e,i,s,r,a){super(a),this.numTeeth=t,this.outerRadius=e,this.innerRadius=i,this.axleRadius=s,this.meshes=[r]}static createFace(t,e,i){const s=p.getRightAngleToothInnerRadius(e,t),r=new l(g.createFace(t,e,s),i);return new p(t,e,s,null,r,i)}static create(t,e,i,s){const r=p.getRightAngleToothInnerRadius(e,t),a=new l(g.create(t,e,r,i),s);return new p(t,e,r,i,a,s)}static createClosed(t,e,i){const s=p.getRightAngleToothInnerRadius(e,t),r=new l(g.createClosed(t,e,s),i);return new p(t,e,s,null,r,i)}static getRightAngleToothInnerRadius(t,e){return t-2*Math.PI*t/e/2}addCross(){const t=new l(c.createBox(new a(this.axleRadius,.01,.08)),this.gl);t.childWorldTransform=n.translation(new a(0,-.012,0));const e=new l(c.createBox(new a(.08,.01,this.axleRadius)),this.gl);e.childWorldTransform=n.translation(new a(0,-.011,0)),this.meshes.push(t,e)}draw(t){super.draw(t)}setAttributesToParent(t,e){this.setAngleToParent(t),this.setPositionToParent(t,e)}setAttributesByParent(t,e){this.setAngleByParent(t),this.setAdjacentPosition(t,e)}setAngleToParent(t){this.angle=t.angle}setAngleByParent(t){this.angle=t.numTeeth/this.numTeeth*-t.angle}setPositionToParent(t,e){this.position=t.position.add(new a(0,e,0))}setAdjacentPosition(t,e){const i=this.innerRadius+t.innerRadius+(t.outerRadius-t.innerRadius+(this.outerRadius-this.innerRadius))/2;this.position=t.position.add(new a(i*Math.sin(e),0,i*Math.cos(e)))}}class u extends class{constructor(t){this.gl=t,this.camera=new o,this.camera.eye=new a(1,.45,0),this.camera.eye=new a(1e-4,1,0),this.camera.target=new a(0,0,0),this.light=new h}draw(t,e){this.light.rotatingPosition=e,this.camera.rotatingPosition=e;const i=t.getUniformLocation("projection_matrix");this.gl.uniformMatrix4fv(i,!1,this.camera.projectionMatrix.el);const s=t.getUniformLocation("view_matrix");this.gl.uniformMatrix4fv(s,!1,this.camera.viewMatrix.el);const r=t.getUniformLocation("eye_position");this.gl.uniform3fv(r,this.camera.eye.el);const a=t.getUniformLocation("light_position");this.gl.uniform3fv(a,this.light.position.el)}}{constructor(t){super(t),this.solarNodes=new d(t),this.solarNodes.color=[.6,.5,.1,.95],this.gearA1=p.createFace(48,.136,t),this.gearB1=p.create(233,.65,.45,t),this.gearB1.addCross(),this.gearB2=p.createClosed(64,.155,t),this.solarNodes.children=[this.gearA1,this.gearB1,this.gearB2],this.m1Nodes=new d(t),this.m1Nodes.color=[.9,.5,.1,.95],this.gearL1=p.createClosed(38,.09,t),this.gearL2=p.createClosed(53,.131,t),this.gearM1=p.createClosed(96,.245,t),this.gearM2=p.createClosed(15,.044,t),this.gearM3=p.createClosed(27,.06,t),this.axleM=d.withMesh(new l(c.createCylinder(.02,.16),t),t),this.m1Nodes.children=[this.gearL1,this.gearL2,this.gearM1,this.gearM2,this.gearM3,this.axleM],this.lunisolarNodes=new d(t),this.lunisolarNodes.color=[.25,.75,.3,.95],this.gearN1=p.createClosed(53,.125,t),this.gearN2=p.createClosed(57,.1,t),this.gearN3=p.createClosed(15,.05,t),this.metonicDial=d.withMesh(new l(c.createDial(),t),t),this.axleN=d.withMesh(new l(c.createCylinder(.02,.25),t),t),this.lunisolarNodes.children=[this.gearN1,this.gearN2,this.gearN3,this.metonicDial,this.axleN],this.olympicNodes=new d(t),this.olympicNodes.color=[1,1,1,.95],this.gearO1=p.createClosed(60,.09,t),this.olympicDial=d.withMesh(new l(c.createDial(),t),t),this.axleO=d.withMesh(new l(c.createCylinder(.02,.21),t),t),this.olympicNodes.children=[this.gearO1,this.olympicDial,this.axleO],this.callipicNodes=new d(t),this.callipicNodes.color=[.5,.75,.2,.95],this.gearP1=p.createClosed(60,.13,t),this.gearP2=p.createClosed(12,.045,t),this.gearQ1=p.createClosed(60,.13,t),this.callipicDial=d.withMesh(new l(c.createDial(),t),t),this.axleQ=d.withMesh(new l(c.createCylinder(.02,.14),t),t),this.callipicNodes.children=[this.gearP1,this.gearP2,this.gearQ1,this.callipicDial,this.axleQ],this.sarosNodes=new d(t),this.sarosNodes.color=[.45,.4,.7,.95],this.gearE3=p.createClosed(223,.525,t),this.gearE4=p.create(188,.5,.425,t),this.gearF1=p.createClosed(53,.14,t),this.gearF2=p.createClosed(30,.08,t),this.gearG1=p.createClosed(54,.14,t),this.gearG2=p.createClosed(20,.05,t),this.sarosDial=d.withMesh(new l(c.createDial(),t),t),this.axleG=d.withMesh(new l(c.createCylinder(.02,.11),t),t),this.sarosNodes.children=[this.gearE3,this.gearE4,this.gearF1,this.gearF2,this.gearG1,this.gearG2,this.sarosDial,this.axleG],this.exeligmosNodes=new d(t),this.exeligmosNodes.color=[.65,.4,.7,.95],this.gearH1=p.createClosed(60,.14,t),this.gearH2=p.createClosed(15,.04,t),this.gearI1=p.createClosed(60,.13,t),this.exigemosDial=d.withMesh(new l(c.createDial(),t),t),this.axleI=d.withMesh(new l(c.createCylinder(.02,.04),t),t),this.exeligmosNodes.children=[this.gearH1,this.gearH2,this.gearI1,this.exigemosDial,this.axleI],this.lunarNodes=new d(t),this.lunarNodes.color=[.5,.75,.9,.95],this.gearC1=p.createClosed(38,.1,t),this.gearC2=p.createClosed(48,.11,t),this.gearD1=p.createClosed(24,.055,t),this.gearD2=p.createClosed(127,.315,t),this.axleD=d.withMesh(new l(c.createCylinder(.02,.12),t),t),this.gearE2=p.createClosed(32,.08,t),this.gearE5=p.createClosed(50,.135,t),this.gearK1=p.createClosed(50,.135,t),this.lunarNodes.children=[this.gearC1,this.gearC2,this.gearD1,this.gearD2,this.axleD,this.gearE2,this.gearE5,this.gearK1],this.hipparchosNodes=new d(t),this.hipparchosNodes.color=[.45,.8,.75,.95],this.gearK2=p.createClosed(50,.14,t),this.gearE6=p.createClosed(50,.14,t),this.gearE1=p.createClosed(32,.1,t),this.gearB3=p.createClosed(32,.095,t),this.axleB=d.withMesh(new l(c.createCylinder(.02,.18),t),t),this.axleE=d.withMesh(new l(c.createCylinder(.02,.17),t),t),this.moonDial=d.withMesh(new l(c.createDial(),t),t),this.hipparchosNodes.children=[this.gearK2,this.gearE6,this.gearE1,this.gearB3,this.axleB,this.axleE,this.moonDial],this.nodes=[this.solarNodes,this.m1Nodes,this.lunisolarNodes,this.olympicNodes,this.callipicNodes,this.sarosNodes,this.exeligmosNodes,this.lunarNodes,this.hipparchosNodes]}draw(t,e){super.draw(t,e),this.update(e),this.nodes.forEach(e=>{e.draw(t)})}update(t){this.gearA1.angle=1.2*t,this.gearA1.worldTransform=n.rotationY(this.gearA1.angle).multiply(n.rotationX(Math.PI/2)).multiply(n.translation(new a(0,.136-.025,-.649))),this.gearB1.setAngleByParent(this.gearA1),this.gearB1.position=a.zero;const e=n.rotationY(this.gearB1.angle);this.gearB1.worldTransform=e.multiply(n.translation(this.gearB1.position)),this.gearB2.setAttributesToParent(this.gearB1,-.035),this.gearB2.worldTransform=e.multiply(n.translation(this.gearB2.position)),this.gearL1.setAttributesByParent(this.gearB2,.2*Math.PI);const i=n.rotationY(this.gearL1.angle);this.gearL1.worldTransform=i.multiply(n.translation(this.gearL1.position)),this.gearL2.setAttributesToParent(this.gearL1,-.035),this.gearL2.worldTransform=i.multiply(n.translation(this.gearL2.position)),this.gearM1.setAttributesByParent(this.gearL2,1.8*Math.PI);const s=n.rotationY(this.gearM1.angle);this.gearM1.worldTransform=s.multiply(n.translation(this.gearM1.position)),this.gearM2.setAttributesToParent(this.gearM1,-.065),this.gearM2.worldTransform=s.multiply(n.translation(this.gearM2.position)),this.gearM3.setAttributesToParent(this.gearM2,-.07),this.gearM3.worldTransform=s.multiply(n.translation(this.gearM3.position)),this.axleM.position=this.gearM1.position.add(new a(0,-.005,0)),this.axleM.worldTransform=s.multiply(n.translation(this.axleM.position)),this.gearN1.setAttributesByParent(this.gearM2,.2*Math.PI);const r=n.rotationY(this.gearN1.angle);this.gearN1.worldTransform=r.multiply(n.translation(this.gearN1.position)),this.gearN2.setAttributesToParent(this.gearN1,-.035),this.gearN2.worldTransform=r.multiply(n.translation(this.gearN2.position)),this.gearN3.setAttributesToParent(this.gearN2,-.035),this.gearN3.worldTransform=r.multiply(n.translation(this.gearN3.position)),this.metonicDial.position=this.gearN3.position.add(new a(0,.035*-5,0)),this.metonicDial.worldTransform=r.multiply(n.translation(this.metonicDial.position)),this.axleN.position=this.gearN1.position.add(new a(0,-.005,0)),this.axleN.worldTransform=r.multiply(n.translation(this.axleN.position)),this.gearO1.setAngleByParent(this.gearN2);const o=n.rotationY(this.gearO1.angle);this.gearO1.setAdjacentPosition(this.gearN2,1.5*Math.PI),this.gearO1.worldTransform=o.multiply(n.translation(this.gearO1.position)),this.olympicDial.position=this.gearO1.position.add(new a(0,.035*-6,0)),this.olympicDial.worldTransform=o.multiply(n.translation(this.olympicDial.position)),this.axleO.position=this.gearO1.position.add(new a(0,-.005,0)),this.axleO.worldTransform=o.multiply(n.translation(this.axleO.position)),this.gearP1.setAttributesByParent(this.gearN3,.25*Math.PI);const h=n.rotationY(this.gearP1.angle);this.gearP1.worldTransform=h.multiply(n.translation(this.gearP1.position)),this.gearP2.setAttributesToParent(this.gearP1,-.035),this.gearP2.worldTransform=h.multiply(n.translation(this.gearP2.position)),this.gearQ1.setAttributesByParent(this.gearP2,.75*Math.PI);const l=n.rotationY(this.gearQ1.angle);this.gearQ1.worldTransform=l.multiply(n.translation(this.gearQ1.position)),this.callipicDial.position=this.gearQ1.position.add(new a(0,-.14,0)),this.callipicDial.worldTransform=l.multiply(n.translation(this.callipicDial.position)),this.axleQ.position=this.gearQ1.position.add(new a(0,-.005,0)),this.axleQ.worldTransform=l.multiply(n.translation(this.axleQ.position)),this.gearE3.setAttributesByParent(this.gearM3,.85*Math.PI);const c=n.rotationY(this.gearE3.angle);this.gearE3.worldTransform=c.multiply(n.translation(this.gearE3.position)),this.gearE4.setAttributesToParent(this.gearE3,-.035),this.gearE4.worldTransform=c.multiply(n.translation(this.gearE4.position)),this.gearF1.setAttributesByParent(this.gearE4,.96*Math.PI);const g=n.rotationY(this.gearF1.angle);this.gearF1.worldTransform=g.multiply(n.translation(this.gearF1.position)),this.gearF2.setAttributesToParent(this.gearF1,-.035),this.gearF2.worldTransform=g.multiply(n.translation(this.gearF2.position)),this.gearG1.setAttributesByParent(this.gearF2,1.4*Math.PI);const d=n.rotationY(this.gearG1.angle);this.gearG1.worldTransform=d.multiply(n.translation(this.gearG1.position)),this.gearG2.setAttributesToParent(this.gearG1,-.035),this.gearG2.worldTransform=d.multiply(n.translation(this.gearG2.position)),this.sarosDial.position=this.gearG2.position.add(new a(0,-.07,0)),this.sarosDial.worldTransform=d.multiply(n.translation(this.sarosDial.position)),this.axleG.position=this.gearG1.position.add(new a(0,-.005,0)),this.axleG.worldTransform=d.multiply(n.translation(this.axleG.position)),this.gearH1.setAttributesByParent(this.gearG2,1.35*Math.PI);const p=n.rotationY(this.gearH1.angle);this.gearH1.worldTransform=p.multiply(n.translation(this.gearH1.position)),this.gearH2.setAttributesToParent(this.gearH1,-.035),this.gearH2.worldTransform=p.multiply(n.translation(this.gearH2.position)),this.gearI1.setAttributesByParent(this.gearH2,1.75*Math.PI);const u=n.rotationY(this.gearI1.angle);this.gearI1.worldTransform=u.multiply(n.translation(this.gearI1.position)),this.exigemosDial.position=this.gearI1.position.add(new a(0,-.035,0)),this.exigemosDial.worldTransform=u.multiply(n.translation(this.exigemosDial.position)),this.axleI.position=this.gearI1.position.add(new a(0,-.005,0)),this.axleI.worldTransform=u.multiply(n.translation(this.axleI.position)),this.gearC1.setAttributesByParent(this.gearB2,1.1*Math.PI);const m=n.rotationY(this.gearC1.angle);this.gearC1.worldTransform=m.multiply(n.translation(this.gearC1.position)),this.gearC2.setAttributesToParent(this.gearC1,-.035),this.gearC2.worldTransform=m.multiply(n.translation(this.gearC2.position)),this.gearD1.setAttributesByParent(this.gearC2,.82*Math.PI);const w=n.rotationY(this.gearD1.angle);this.gearD1.worldTransform=w.multiply(n.translation(this.gearD1.position)),this.gearD2.setAttributesToParent(this.gearD1,-.1),this.gearD2.worldTransform=w.multiply(n.translation(this.gearD2.position)),this.axleD.position=this.gearD1.position.add(new a(0,-.005,0)),this.axleD.worldTransform=w.multiply(n.translation(this.axleD.position)),this.gearE2.setAttributesByParent(this.gearD2,.152*Math.PI);const b=n.rotationY(this.gearE2.angle);this.gearE2.worldTransform=b.multiply(n.translation(this.gearE2.position)),this.gearE5.setAttributesToParent(this.gearE2,-.07),this.gearE5.worldTransform=b.multiply(n.translation(this.gearE5.position)),this.gearK1.setAttributesByParent(this.gearE5,this.gearE3.angle),this.gearK1.angle-=2*this.gearE3.angle;const y=n.rotationY(this.gearK1.angle);this.gearK1.worldTransform=y.multiply(n.translation(this.gearK1.position));const f=2*Math.PI/60;this.gearK2.angle=this.gearK1.angle+f*Math.sin(this.gearK1.angle),this.gearK2.position=this.gearE5.position.add(new a(.27*Math.sin(this.gearE3.angle),-.035,.27*Math.cos(this.gearE3.angle)));const T=n.rotationY(this.gearK2.angle);this.gearK2.worldTransform=T.multiply(n.translation(this.gearK2.position)),this.gearE6.setAttributesByParent(this.gearK2,Math.PI+this.gearE3.angle);const x=n.rotationY(this.gearE6.angle);this.gearE6.worldTransform=x.multiply(n.translation(this.gearE6.position)),this.gearE1.setAttributesToParent(this.gearE6,.14),this.gearE1.worldTransform=x.multiply(n.translation(this.gearE1.position)),this.axleE.position=this.gearE1.position.add(new a(0,-.005,0)),this.axleE.worldTransform=x.multiply(n.translation(this.axleE.position)),this.gearB3.setAttributesByParent(this.gearE1,Math.PI);const A=n.rotationY(this.gearB3.angle);this.gearB3.position=this.gearB2.position.add(new a(0,-.1,0)),this.gearB3.worldTransform=A.multiply(n.translation(this.gearB3.position)),this.moonDial.position=this.gearB3.position.add(new a(0,5*.035,0)),this.moonDial.worldTransform=A.multiply(n.translation(this.moonDial.position)),this.axleB.position=this.moonDial.position.add(new a(0,.005,0)),this.axleB.worldTransform=A.multiply(n.translation(this.axleB.position))}}class m{constructor(t){this.gl=t;const e=this.gl.createShader(this.gl.VERTEX_SHADER),i=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(e,"precision mediump float;\n\n            uniform mat4 world_matrix;\n            uniform mat4 view_matrix;\n            uniform mat4 projection_matrix;\n\n            attribute vec3 position;\n            attribute vec3 normal;\n            varying vec3 frag_normal;\n            varying vec3 world_position;\n\n            void main()\n            {\n                frag_normal = mat3(world_matrix) * normal;\n                world_position = (world_matrix * vec4(position, 1)).xyz;\n                gl_Position = projection_matrix * view_matrix * vec4(world_position, 1);\n            }"),this.gl.shaderSource(i,"precision mediump float;\n\n            uniform vec3 eye_position;\n            uniform vec3 light_position;\n            uniform vec4 vert_color;\n\n            varying vec3 frag_normal;\n            varying vec3 world_position;\n            void main()\n            {\n                vec3 light_direction = normalize(light_position - world_position);\n                vec3 view_direction = normalize(eye_position - world_position);\n                \n                vec3 diffuse = (vert_color.xyz * 0.25) + clamp(dot(frag_normal, light_direction), 0.0, 1.0) * (vert_color.xyz * 0.75);\n\n                gl_FragColor = vec4(diffuse, vert_color.w);\n            }"),this.gl.compileShader(e),this.gl.getShaderParameter(e,this.gl.COMPILE_STATUS)?(this.gl.compileShader(i),this.gl.getShaderParameter(i,this.gl.COMPILE_STATUS)?(this.program=this.gl.createProgram(),this.gl.attachShader(this.program,e),this.gl.attachShader(this.program,i),this.gl.linkProgram(this.program),this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS)?(this.gl.validateProgram(this.program),this.gl.getProgramParameter(this.program,this.gl.VALIDATE_STATUS)?(this.worldMatrixLocation=this.getUniformLocation("world_matrix"),this.vertColorLocation=this.getUniformLocation("vert_color")):console.error("ERROR validating program!",this.gl.getProgramInfoLog(this.program))):console.error("ERROR linking program!",this.gl.getProgramInfoLog(this.program))):console.error("ERROR compiling fragment shader!",this.gl.getShaderInfoLog(i))):console.error("ERROR compiling vertex shader!",this.gl.getShaderInfoLog(e))}use(){this.gl.useProgram(this.program)}getAttribLocation(t){return this.gl.getAttribLocation(this.program,t)}getUniformLocation(t){return this.gl.getUniformLocation(this.program,t)}}var w=i("fXoL");const b=["surface"];function y(t,e){1&t&&(w.Jb(0,"p"),w.bc(1,"Your browser does not support HTML5"),w.Ib())}let f=(()=>{class t{setScene(t,e){e||(this.glNotSupported=!0),this.gl=e,this.scene=t,this.scene.camera.aspect=this.surface.nativeElement.width/this.surface.nativeElement.height,this.program=new m(this.gl),this.program.use(),this.gl.enable(this.gl.DEPTH_TEST),this.gl.enable(this.gl.CULL_FACE),this.gl.cullFace(this.gl.BACK),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),requestAnimationFrame(this.render.bind(this))}render(t){const e=t.valueOf()/1e3;this.gl.clearColor(.5,.85,.8,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.program.use(),this.scene.draw(this.program,e),this.gl.useProgram(null),requestAnimationFrame(this.render.bind(this))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=w.Ab({type:t,selectors:[["app-canvas"]],viewQuery:function(t,e){var i;1&t&&w.Zb(b,!0),2&t&&w.Wb(i=w.Qb())&&(e.surface=i.first)},decls:4,vars:1,consts:[[4,"ngIf"],["width","1024","height","768"],["surface",""]],template:function(t,e){1&t&&(w.ac(0,y,2,0,"p",0),w.Jb(1,"canvas",1,2),w.bc(3," Your browser does not support HTML5\n"),w.Ib()),2&t&&w.Ub("ngIf",e.glNotSupported)},directives:[s.i],encapsulation:2}),t})();const T="undefined"!=typeof window&&window||{};let x;"undefined"==typeof console||console;var A=i("R0Ic");const P=[Object(A.g)({height:0,visibility:"hidden"}),Object(A.e)("400ms cubic-bezier(0.4,0.0,0.2,1)",Object(A.g)({height:"*",visibility:"visible"}))],M=[Object(A.g)({height:"*",visibility:"visible"}),Object(A.e)("400ms cubic-bezier(0.4,0.0,0.2,1)",Object(A.g)({height:0,visibility:"hidden"}))];let C=(()=>{class t{constructor(t,e,i){this._el=t,this._renderer=e,this.collapsed=new w.n,this.collapses=new w.n,this.expanded=new w.n,this.expands=new w.n,this.isExpanded=!0,this.collapseNewValue=!0,this.isCollapsed=!1,this.isCollapse=!0,this.isCollapsing=!1,this.isAnimated=!1,this._display="block",this._stylesLoaded=!1,this._COLLAPSE_ACTION_NAME="collapse",this._EXPAND_ACTION_NAME="expand",this._factoryCollapseAnimation=i.build(M),this._factoryExpandAnimation=i.build(P)}set display(t){this.isAnimated?(this._display=t,"none"!==t?this.show():this.hide()):this._renderer.setStyle(this._el.nativeElement,"display",t)}set collapse(t){this.collapseNewValue=t,this._player&&!this._isAnimationDone||(this.isExpanded=t,this.toggle())}get collapse(){return this.isExpanded}ngAfterViewChecked(){this._stylesLoaded=!0,this._player&&this._isAnimationDone&&(this._player.reset(),this._renderer.setStyle(this._el.nativeElement,"height","*"))}toggle(){this.isExpanded?this.hide():this.show()}hide(){this.isCollapsing=!0,this.isExpanded=!1,this.isCollapsed=!0,this.isCollapsing=!1,this.collapses.emit(this),this._isAnimationDone=!1,this.animationRun(this.isAnimated,this._COLLAPSE_ACTION_NAME)(()=>{this._isAnimationDone=!0,this.collapseNewValue!==this.isCollapsed&&this.isAnimated?this.show():(this.collapsed.emit(this),this._renderer.setStyle(this._el.nativeElement,"display","none"))})}show(){this._renderer.setStyle(this._el.nativeElement,"display",this._display),this.isCollapsing=!0,this.isExpanded=!0,this.isCollapsed=!1,this.isCollapsing=!1,this.expands.emit(this),this._isAnimationDone=!1,this.animationRun(this.isAnimated,this._EXPAND_ACTION_NAME)(()=>{this._isAnimationDone=!0,this.collapseNewValue!==this.isCollapsed&&this.isAnimated?this.hide():(this.expanded.emit(this),this._renderer.removeStyle(this._el.nativeElement,"overflow"))})}animationRun(t,e){if(!t||!this._stylesLoaded)return t=>t();this._renderer.setStyle(this._el.nativeElement,"overflow","hidden"),this._renderer.addClass(this._el.nativeElement,"collapse");const i=e===this._EXPAND_ACTION_NAME?this._factoryExpandAnimation:this._factoryCollapseAnimation;return this._player&&this._player.destroy(),this._player=i.create(this._el.nativeElement),this._player.play(),t=>this._player.onDone(t)}}return t.\u0275fac=function(e){return new(e||t)(w.Gb(w.l),w.Gb(w.D),w.Gb(A.b))},t.\u0275dir=w.Bb({type:t,selectors:[["","collapse",""]],hostVars:10,hostBindings:function(t,e){2&t&&(w.xb("aria-expanded",e.isExpanded)("aria-hidden",e.isCollapsed),w.yb("collapse",e.isCollapse)("in",e.isExpanded)("show",e.isExpanded)("collapsing",e.isCollapsing))},inputs:{isAnimated:"isAnimated",display:"display",collapse:"collapse"},outputs:{collapsed:"collapsed",collapses:"collapses",expanded:"expanded",expands:"expands"},exportAs:["bs-collapse"]}),t})(),_=(()=>{class t{static forRoot(){return{ngModule:t,providers:[]}}}return t.\u0275mod=w.Eb({type:t}),t.\u0275inj=w.Db({factory:function(e){return new(e||t)}}),t})();const E=["*"],v=function(t){return{"text-muted":t}};function N(t,e){if(1&t&&(w.Jb(0,"button",7),w.bc(1),w.Ib()),2&t){const t=w.Rb();w.Ub("ngClass",w.Vb(2,v,t.isDisabled)),w.wb(1),w.cc(" ",t.heading," ")}}const O=[[["","accordion-heading",""]],"*"],D=["[accordion-heading]","*"];let I=(()=>{class t{constructor(){this.closeOthers=!1,this.isAnimated=!1}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=w.Cb({token:t,factory:t.\u0275fac}),t})(),B=(()=>{class t{constructor(t){this.isAnimated=!1,this.groups=[],Object.assign(this,t)}closeOtherPanels(t){this.closeOthers&&this.groups.forEach(e=>{e!==t&&(e.isOpen=!1)})}addGroup(t){t.isAnimated=this.isAnimated,this.groups.push(t)}removeGroup(t){const e=this.groups.indexOf(t);-1!==e&&this.groups.splice(e,1)}}return t.\u0275fac=function(e){return new(e||t)(w.Gb(I))},t.\u0275cmp=w.Ab({type:t,selectors:[["accordion"]],hostAttrs:["role","tablist",1,"panel-group",2,"display","block"],hostVars:1,hostBindings:function(t,e){2&t&&w.xb("aria-multiselectable",e.closeOthers)},inputs:{isAnimated:"isAnimated",closeOthers:"closeOthers"},ngContentSelectors:E,decls:1,vars:0,template:function(t,e){1&t&&(w.Tb(),w.Sb(0))},encapsulation:2}),t})(),L=(()=>{class t{constructor(t){this.isAnimated=!1,this.isOpenChange=new w.n,this._isOpen=!1,this.accordion=t}get isOpen(){return this._isOpen}set isOpen(t){t!==this.isOpen&&(t&&this.accordion.closeOtherPanels(this),this._isOpen=t,Promise.resolve(null).then(()=>{this.isOpenChange.emit(t)}).catch(t=>{console.log(t)}))}get isBs3(){return void 0===T||(void 0===T.__theme?(x||(x=function(){if("undefined"==typeof document)return null;const t=document.createElement("span");t.innerText="test bs version",document.body.appendChild(t),t.classList.add("d-none");const e=t.getBoundingClientRect();return document.body.removeChild(t),e&&0===e.top?"bs4":"bs3"}()),"bs3"===x):"bs4"!==T.__theme)}ngOnInit(){this.panelClass=this.panelClass||"panel-default",this.accordion.addGroup(this)}ngOnDestroy(){this.accordion.removeGroup(this)}toggleOpen(){this.isDisabled||(this.isOpen=!this.isOpen)}}return t.\u0275fac=function(e){return new(e||t)(w.Gb(B))},t.\u0275cmp=w.Ab({type:t,selectors:[["accordion-group"],["accordion-panel"]],hostAttrs:[1,"panel",2,"display","block"],hostVars:2,hostBindings:function(t,e){2&t&&w.yb("panel-open",e.isOpen)},inputs:{isOpen:"isOpen",panelClass:"panelClass",heading:"heading",isDisabled:"isDisabled"},outputs:{isOpenChange:"isOpenChange"},ngContentSelectors:D,decls:9,vars:6,consts:[[1,"panel","card",3,"ngClass"],["role","tab",1,"panel-heading","card-header",3,"ngClass","click"],[1,"panel-title"],["role","button",1,"accordion-toggle"],["class","btn btn-link","type","button",3,"ngClass",4,"ngIf"],["role","tabpanel",1,"panel-collapse","collapse",3,"collapse","isAnimated"],[1,"panel-body","card-block","card-body"],["type","button",1,"btn","btn-link",3,"ngClass"]],template:function(t,e){1&t&&(w.Tb(O),w.Jb(0,"div",0),w.Jb(1,"div",1),w.Pb("click",(function(){return e.toggleOpen()})),w.Jb(2,"div",2),w.Jb(3,"div",3),w.ac(4,N,2,4,"button",4),w.Sb(5),w.Ib(),w.Ib(),w.Ib(),w.Jb(6,"div",5),w.Jb(7,"div",6),w.Sb(8,1),w.Ib(),w.Ib(),w.Ib()),2&t&&(w.Ub("ngClass",e.panelClass),w.wb(1),w.Ub("ngClass",e.isDisabled?"panel-disabled":"panel-enabled"),w.wb(2),w.xb("aria-expanded",e.isOpen),w.wb(1),w.Ub("ngIf",e.heading),w.wb(2),w.Ub("collapse",!e.isOpen)("isAnimated",e.isAnimated))},directives:[s.h,s.i,C],styles:["[_nghost-%COMP%]   .card-header.panel-enabled[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .card-header.panel-disabled[_ngcontent-%COMP%]   .btn.btn-link[_ngcontent-%COMP%]{cursor:default;text-decoration:none}"]}),t})(),R=(()=>{class t{static forRoot(){return{ngModule:t,providers:[I]}}}return t.\u0275mod=w.Eb({type:t}),t.\u0275inj=w.Db({factory:function(e){return new(e||t)},imports:[[s.b,_]]}),t})();const z=[{path:"",component:(()=>{class t{constructor(){this.isOrtographicProjection=!1}ngOnInit(){const t=this.appCanvas.surface.nativeElement.getContext("webgl");t&&(this.scene=new u(t),this.appCanvas.setScene(this.scene,t))}onChangeOrtographicProjection(){this.isOrtographicProjection=!this.isOrtographicProjection,this.scene.camera.orthographic=this.isOrtographicProjection}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=w.Ab({type:t,selectors:[["antikythera-component"]],viewQuery:function(t,e){var i;1&t&&w.Zb(f,!0),2&t&&w.Wb(i=w.Qb())&&(e.appCanvas=i.first)},decls:7,vars:2,consts:[["id","bodyContainer"],["id","leftPanel"],[3,"isAnimated"],["heading","Settings"],["value","ds","type","checkbox",3,"checked","change"]],template:function(t,e){1&t&&(w.Jb(0,"div",0),w.Jb(1,"div",1),w.Jb(2,"accordion",2),w.Jb(3,"accordion-group",3),w.Jb(4,"input",4),w.Pb("change",(function(){return e.onChangeOrtographicProjection()})),w.Ib(),w.bc(5," Orthographic projection "),w.Ib(),w.Ib(),w.Ib(),w.Hb(6,"app-canvas"),w.Ib()),2&t&&(w.wb(2),w.Ub("isAnimated",!0),w.wb(2),w.Ub("checked",e.isOrtographicProjection))},directives:[B,L,f],styles:["#leftPanel[_ngcontent-%COMP%]{width:350px;height:100%;float:left}#bodyContainer[_ngcontent-%COMP%]{white-space:nowrap}"]}),t})()}];let S=(()=>{class t{}return t.\u0275mod=w.Eb({type:t}),t.\u0275inj=w.Db({factory:function(e){return new(e||t)},imports:[[r.a.forChild(z)],r.a]}),t})(),j=(()=>{class t{}return t.\u0275mod=w.Eb({type:t}),t.\u0275inj=w.Db({factory:function(e){return new(e||t)},providers:[],imports:[[s.b]]}),t})(),F=(()=>{class t{}return t.\u0275mod=w.Eb({type:t}),t.\u0275inj=w.Db({factory:function(e){return new(e||t)},imports:[[s.b,S,j,R.forRoot()]]}),t})()}}]);
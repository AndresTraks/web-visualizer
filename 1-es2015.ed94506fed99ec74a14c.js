(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+pcE":function(t,e,i){"use strict";i.d(e,"a",function(){return n});var s=i("FCAv");class n{constructor(t){this.renderingContext=t,this.worldTransform=s.a.identity,this.gl=t.gl,this.program=this.renderingContext.standardShader}static withMesh(t,e){const i=new n(e);return i.meshes=[t],i}draw(){if(this.color&&this.gl.uniform4fv(this.program.vertColorLocation,this.color),this.meshes){this.gl.uniformMatrix4fv(this.program.worldMatrixLocation,!1,this.worldTransform.el);for(const t of this.meshes)t.childWorldTransform?(this.gl.uniformMatrix4fv(this.program.worldMatrixLocation,!1,this.worldTransform.multiply(t.childWorldTransform).el),t.draw(this.program),this.gl.uniformMatrix4fv(this.program.worldMatrixLocation,!1,this.worldTransform.el)):t.draw(this.program)}this.children&&this.children.forEach(t=>{t.draw()})}}},"4u2P":function(t,e,i){"use strict";i.d(e,"a",function(){return n});class s{constructor(t,e,i){this.gl=i;const s=this.gl.createShader(this.gl.VERTEX_SHADER),n=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(s,t),this.gl.shaderSource(n,e),this.gl.compileShader(s),this.gl.getShaderParameter(s,this.gl.COMPILE_STATUS)?(this.gl.compileShader(n),this.gl.getShaderParameter(n,this.gl.COMPILE_STATUS)?(this.program=this.gl.createProgram(),this.gl.attachShader(this.program,s),this.gl.attachShader(this.program,n),this.gl.linkProgram(this.program),this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS)?(this.gl.validateProgram(this.program),this.gl.getProgramParameter(this.program,this.gl.VALIDATE_STATUS)?(this.worldMatrixLocation=this.getUniformLocation("world_matrix"),this.vertColorLocation=this.getUniformLocation("vert_color")):console.error("ERROR validating program!",this.gl.getProgramInfoLog(this.program))):console.error("ERROR linking program!",this.gl.getProgramInfoLog(this.program))):console.error("ERROR compiling fragment shader!",this.gl.getShaderInfoLog(n))):console.error("ERROR compiling vertex shader!",this.gl.getShaderInfoLog(s))}use(){this.gl.useProgram(this.program)}getAttribLocation(t){return this.gl.getAttribLocation(this.program,t)}getUniformLocation(t){return this.gl.getUniformLocation(this.program,t)}}class n{constructor(t){this.gl=t,this.standardShader=new s(this.standardVertexShaderText,this.standardFragmentShaderText,this.gl),this.standardShader.use(),this.gl.enable(this.gl.DEPTH_TEST),this.gl.enable(this.gl.CULL_FACE),this.gl.cullFace(this.gl.BACK),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.emitterShader=new s(this.standardVertexShaderText,this.emitterFragmentShaderText,this.gl),this.emitterShader.use(),this.gl.enable(this.gl.DEPTH_TEST),this.gl.enable(this.gl.CULL_FACE),this.gl.cullFace(this.gl.BACK),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)}get standardVertexShaderText(){return"\n        precision mediump float;\n\n        uniform mat4 world_matrix;\n        uniform mat4 view_matrix;\n        uniform mat4 projection_matrix;\n\n        attribute vec3 position;\n        attribute vec3 normal;\n        varying vec3 frag_normal;\n        varying vec3 world_position;\n\n        void main()\n        {\n            frag_normal = mat3(world_matrix) * normal;\n            world_position = (world_matrix * vec4(position, 1)).xyz;\n            gl_Position = projection_matrix * view_matrix * vec4(world_position, 1);\n        }"}get standardFragmentShaderText(){return"\n        precision mediump float;\n\n        uniform vec3 eye_position;\n        uniform vec3 light_position;\n        uniform vec4 vert_color;\n\n        varying vec3 frag_normal;\n        varying vec3 world_position;\n        void main()\n        {\n            vec3 light_direction = normalize(light_position - world_position);\n            vec3 view_direction = normalize(eye_position - world_position);\n            \n            vec3 diffuse = (vert_color.xyz * 0.25) + clamp(dot(frag_normal, light_direction), 0.0, 1.0) * (vert_color.xyz * 0.75);\n\n            gl_FragColor = vec4(diffuse, vert_color.w);\n        }"}get emitterFragmentShaderText(){return"\n        precision mediump float;\n\n        uniform vec3 eye_position;\n        uniform vec3 light_position;\n        uniform vec4 vert_color;\n\n        varying vec3 frag_normal;\n        varying vec3 world_position;\n        void main()\n        {\n            vec3 light_direction = normalize(light_position - world_position);\n            vec3 view_direction = normalize(eye_position - world_position);\n            \n            vec3 diffuse = (vert_color.xyz * 0.75) + clamp(dot(frag_normal, light_direction), 0.0, 1.0) * (vert_color.xyz * 0.25);\n\n            gl_FragColor = vec4(diffuse, vert_color.w);\n        }"}}},"7G6I":function(t,e,i){"use strict";i.d(e,"a",function(){return o});var s=i("uhFJ"),n=i("FCAv");class r{constructor(){this.up=new s.a(0,1,0),this.orthoScaling=1,this.fov=Math.PI/4,this.aspectRatio=1,this.nearPlane=.1,this.farPlane=100,this.isOrthographic=!1,this.calculateProjection()}set fieldOfView(t){this.fov=t,this.calculateProjection()}set near(t){this.nearPlane=t,this.calculateProjection()}set far(t){this.farPlane=t,this.calculateProjection()}set aspect(t){this.aspectRatio=t,this.calculateProjection()}set orthographic(t){this.isOrthographic=t,this.calculateProjection()}get viewMatrix(){return n.a.view(this.eye,this.target,this.up)}get projectionMatrix(){return this.projection}calculateProjection(){this.projection=this.isOrthographic?n.a.orthographicProjection(this.aspectRatio*this.orthoScaling,this.orthoScaling,this.nearPlane,this.farPlane):n.a.perspectiveProjection(this.fov,this.aspectRatio,this.nearPlane,this.farPlane)}set rotatingPosition(t){const e=1+t/16;this.eye=new s.a(1.75*Math.sin(e),.7*Math.sin(e+4.5),1.75*Math.cos(e))}}class a{constructor(){this.position=new s.a(0,2,0)}set rotatingPosition(t){const e=t/16;this.position=new s.a(2*Math.sin(e),1,2*Math.cos(e))}}class o{constructor(t){this.clearColor=[.5,.85,.8,1],this.renderingContext=t,this.gl=t.gl,this.camera=new r,this.camera.eye=new s.a(1,.45,0),this.camera.eye=new s.a(1e-4,1,0),this.camera.target=new s.a(0,0,0),this.light=new a}draw(t){this.setProgramUniforms(this.renderingContext.standardShader),this.setProgramUniforms(this.renderingContext.emitterShader)}setProgramUniforms(t){t.use();const e=t.getUniformLocation("projection_matrix");this.gl.uniformMatrix4fv(e,!1,this.camera.projectionMatrix.el);const i=t.getUniformLocation("view_matrix");this.gl.uniformMatrix4fv(i,!1,this.camera.viewMatrix.el);const s=t.getUniformLocation("eye_position");this.gl.uniform3fv(s,this.camera.eye.el);const n=t.getUniformLocation("light_position");this.gl.uniform3fv(n,this.light.position.el)}}},FCAv:function(t,e,i){"use strict";i.d(e,"a",function(){return s});class s{constructor(t){this.el=t}get e11(){return this.el[0]}get e12(){return this.el[1]}get e13(){return this.el[2]}get e14(){return this.el[3]}get e21(){return this.el[4]}get e22(){return this.el[5]}get e23(){return this.el[6]}get e24(){return this.el[7]}get e31(){return this.el[8]}get e32(){return this.el[9]}get e33(){return this.el[10]}get e34(){return this.el[11]}get e41(){return this.el[12]}get e42(){return this.el[13]}get e43(){return this.el[14]}get e44(){return this.el[15]}set e11(t){this.el[0]=t}set e12(t){this.el[1]=t}set e13(t){this.el[2]=t}set e14(t){this.el[3]=t}set e21(t){this.el[4]=t}set e22(t){this.el[5]=t}set e23(t){this.el[6]=t}set e24(t){this.el[7]=t}set e31(t){this.el[8]=t}set e32(t){this.el[9]=t}set e33(t){this.el[10]=t}set e34(t){this.el[11]=t}set e41(t){this.el[12]=t}set e42(t){this.el[13]=t}set e43(t){this.el[14]=t}set e44(t){this.el[15]=t}static get identity(){return new s([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}static translation(t){return new s([1,0,0,0,0,1,0,0,0,0,1,0,t.x,t.y,t.z,1])}static rotationX(t){const e=Math.cos(t),i=Math.sin(t);return new s([1,0,0,0,0,e,i,0,0,-i,e,0,0,0,0,1])}static rotationY(t){const e=Math.cos(t),i=Math.sin(t);return new s([e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1])}static rotationZ(t){const e=Math.cos(t),i=Math.sin(t);return new s([e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1])}static perspectiveProjection(t,e,i,n){const r=i*Math.tan(.5*t),a=-r,o=a*e,h=r*e;return new s([2*i/(h-o),0,0,0,0,2*i/(r-a),0,0,(h+o)/(h-o),(r+a)/(r-a),-(n+i)/(n-i),-1,0,0,-2*n*i/(n-i),0])}static orthographicProjection(t,e,i,n){const r=-t/2,a=t/2,o=-e/2,h=e/2,l=1/(a-r),c=1/(h-o),g=1/(n-i);return new s([2*l,0,0,0,0,2*c,0,0,0,0,-2*g,0,-(a+r)*l,-(h+o)*c,-(n+i)*g,1])}static view(t,e,i){const n=t.subtract(e).normalized,r=i.cross(n).normalized,a=n.cross(r).normalized;return new s([r.x,a.x,n.x,0,r.y,a.y,n.y,0,r.z,a.z,n.z,0,-r.dot(t),-a.dot(t),-n.dot(t),1])}multiply(t){var e=this;return new s([e.e11*t.e11+e.e12*t.e21+e.e13*t.e31+e.e14*t.e41,e.e11*t.e12+e.e12*t.e22+e.e13*t.e32+e.e14*t.e42,e.e11*t.e13+e.e12*t.e23+e.e13*t.e33+e.e14*t.e43,e.e11*t.e14+e.e12*t.e24+e.e13*t.e34+e.e14*t.e44,e.e21*t.e11+e.e22*t.e21+e.e23*t.e31+e.e24*t.e41,e.e21*t.e12+e.e22*t.e22+e.e23*t.e32+e.e24*t.e42,e.e21*t.e13+e.e22*t.e23+e.e23*t.e33+e.e24*t.e43,e.e21*t.e14+e.e22*t.e24+e.e23*t.e34+e.e24*t.e44,e.e31*t.e11+e.e32*t.e21+e.e33*t.e31+e.e34*t.e41,e.e31*t.e12+e.e32*t.e22+e.e33*t.e32+e.e34*t.e42,e.e31*t.e13+e.e32*t.e23+e.e33*t.e33+e.e34*t.e43,e.e31*t.e14+e.e32*t.e24+e.e33*t.e34+e.e34*t.e44,e.e41*t.e11+e.e42*t.e21+e.e43*t.e31+e.e44*t.e41,e.e41*t.e12+e.e42*t.e22+e.e43*t.e32+e.e44*t.e42,e.e41*t.e13+e.e42*t.e23+e.e43*t.e33+e.e44*t.e43,e.e41*t.e14+e.e42*t.e24+e.e43*t.e34+e.e44*t.e44])}}},JKqQ:function(t,e,i){"use strict";i.d(e,"a",function(){return o});var s=i("fXoL"),n=i("ofXK");const r=["surface"];function a(t,e){1&t&&(s.Jb(0,"p"),s.Zb(1,"Your browser does not support HTML5"),s.Ib())}let o=(()=>{class t{setScene(t){t.renderingContext||(this.glNotSupported=!0),this.gl=t.renderingContext.gl,this.scene=t,this.scene.camera.aspect=this.surface.nativeElement.width/this.surface.nativeElement.height,requestAnimationFrame(this.render.bind(this))}render(t){const e=t.valueOf()/1e3,i=this.scene.clearColor;this.gl.clearColor(i[0],i[1],i[2],i[3]),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.scene.draw(e),this.gl.useProgram(null),requestAnimationFrame(this.render.bind(this))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Ab({type:t,selectors:[["app-canvas"]],viewQuery:function(t,e){if(1&t&&s.dc(r,3),2&t){let t;s.Vb(t=s.Pb())&&(e.surface=t.first)}},decls:4,vars:1,consts:[[4,"ngIf"],["width","1024","height","768"],["surface",""]],template:function(t,e){1&t&&(s.Yb(0,a,2,0,"p",0),s.Jb(1,"canvas",1,2),s.Zb(3," Your browser does not support HTML5\n"),s.Ib()),2&t&&s.Tb("ngIf",e.glNotSupported)},directives:[n.j],encapsulation:2}),t})()},NCiM:function(t,e,i){"use strict";i.d(e,"a",function(){return s});class s{constructor(t,e){this.gl=e,this.buffer=e.createBuffer(),this.bind(),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.createBuffer(t),this.gl.STATIC_DRAW),this.numVertices=t.length/2}createBuffer(t){const e=[];for(const i of t)e.push(i.x),e.push(i.y),e.push(i.z);return new Float32Array(e)}bind(){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.buffer)}draw(t){this.bind(),this.positionAttribLocation=t.getAttribLocation("position");const e=6*Float32Array.BYTES_PER_ELEMENT;this.gl.vertexAttribPointer(this.positionAttribLocation,3,this.gl.FLOAT,!1,e,0),this.gl.enableVertexAttribArray(this.positionAttribLocation),this.normalAttribLocation=t.getAttribLocation("normal"),this.gl.vertexAttribPointer(this.normalAttribLocation,3,this.gl.FLOAT,!1,e,3*Float32Array.BYTES_PER_ELEMENT),this.gl.enableVertexAttribArray(this.normalAttribLocation),this.gl.drawArrays(this.gl.TRIANGLES,0,this.numVertices),this.gl.disableVertexAttribArray(this.positionAttribLocation),this.gl.disableVertexAttribArray(this.normalAttribLocation)}}},S8xs:function(t,e,i){"use strict";i.d(e,"a",function(){return w}),i.d(e,"b",function(){return _}),i.d(e,"c",function(){return y});var s=i("fXoL");const n="undefined"!=typeof window&&window||{};let r;"undefined"==typeof console||console;var a=i("ofXK"),o=i("R0Ic");const h=[Object(o.g)({height:0,visibility:"hidden"}),Object(o.e)("400ms cubic-bezier(0.4,0.0,0.2,1)",Object(o.g)({height:"*",visibility:"visible"}))],l=[Object(o.g)({height:"*",visibility:"visible"}),Object(o.e)("400ms cubic-bezier(0.4,0.0,0.2,1)",Object(o.g)({height:0,visibility:"hidden"}))];let c=(()=>{class t{constructor(t,e,i){this._el=t,this._renderer=e,this.collapsed=new s.n,this.collapses=new s.n,this.expanded=new s.n,this.expands=new s.n,this.isExpanded=!0,this.collapseNewValue=!0,this.isCollapsed=!1,this.isCollapse=!0,this.isCollapsing=!1,this.isAnimated=!1,this._display="block",this._stylesLoaded=!1,this._COLLAPSE_ACTION_NAME="collapse",this._EXPAND_ACTION_NAME="expand",this._factoryCollapseAnimation=i.build(l),this._factoryExpandAnimation=i.build(h)}set display(t){this.isAnimated?(this._display=t,"none"!==t?this.show():this.hide()):this._renderer.setStyle(this._el.nativeElement,"display",t)}set collapse(t){this.collapseNewValue=t,this._player&&!this._isAnimationDone||(this.isExpanded=t,this.toggle())}get collapse(){return this.isExpanded}ngAfterViewChecked(){this._stylesLoaded=!0,this._player&&this._isAnimationDone&&(this._player.reset(),this._renderer.setStyle(this._el.nativeElement,"height","*"))}toggle(){this.isExpanded?this.hide():this.show()}hide(){this.isCollapsing=!0,this.isExpanded=!1,this.isCollapsed=!0,this.isCollapsing=!1,this.collapses.emit(this),this._isAnimationDone=!1,this.animationRun(this.isAnimated,this._COLLAPSE_ACTION_NAME)(()=>{this._isAnimationDone=!0,this.collapseNewValue!==this.isCollapsed&&this.isAnimated?this.show():(this.collapsed.emit(this),this._renderer.setStyle(this._el.nativeElement,"display","none"))})}show(){this._renderer.setStyle(this._el.nativeElement,"display",this._display),this.isCollapsing=!0,this.isExpanded=!0,this.isCollapsed=!1,this.isCollapsing=!1,this.expands.emit(this),this._isAnimationDone=!1,this.animationRun(this.isAnimated,this._EXPAND_ACTION_NAME)(()=>{this._isAnimationDone=!0,this.collapseNewValue!==this.isCollapsed&&this.isAnimated?this.hide():(this.expanded.emit(this),this._renderer.removeStyle(this._el.nativeElement,"overflow"))})}animationRun(t,e){if(!t||!this._stylesLoaded)return t=>t();this._renderer.setStyle(this._el.nativeElement,"overflow","hidden"),this._renderer.addClass(this._el.nativeElement,"collapse");const i=e===this._EXPAND_ACTION_NAME?this._factoryExpandAnimation:this._factoryCollapseAnimation;return this._player&&this._player.destroy(),this._player=i.create(this._el.nativeElement),this._player.play(),t=>this._player.onDone(t)}}return t.\u0275fac=function(e){return new(e||t)(s.Gb(s.l),s.Gb(s.E),s.Gb(o.b))},t.\u0275dir=s.Bb({type:t,selectors:[["","collapse",""]],hostVars:10,hostBindings:function(t,e){2&t&&(s.xb("aria-expanded",e.isExpanded)("aria-hidden",e.isCollapsed),s.yb("collapse",e.isCollapse)("in",e.isExpanded)("show",e.isExpanded)("collapsing",e.isCollapsing))},inputs:{isAnimated:"isAnimated",display:"display",collapse:"collapse"},outputs:{collapsed:"collapsed",collapses:"collapses",expanded:"expanded",expands:"expands"},exportAs:["bs-collapse"]}),t})(),g=(()=>{class t{static forRoot(){return{ngModule:t,providers:[]}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Eb({type:t}),t.\u0275inj=s.Db({}),t})();const d=["*"],u=function(t){return{"text-muted":t}};function p(t,e){if(1&t&&(s.Jb(0,"button",7),s.Zb(1),s.Ib()),2&t){const t=s.Qb();s.Tb("ngClass",s.Ub(2,u,t.isDisabled)),s.wb(1),s.bc(" ",t.heading," ")}}const m=[[["","accordion-heading",""]],"*"],f=["[accordion-heading]","*"];let b=(()=>{class t{constructor(){this.closeOthers=!1,this.isAnimated=!1}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=Object(s.Cb)({factory:function(){return new t},token:t,providedIn:"root"}),t})(),w=(()=>{class t{constructor(t){this.isAnimated=!1,this.groups=[],Object.assign(this,t)}closeOtherPanels(t){this.closeOthers&&this.groups.forEach(e=>{e!==t&&(e.isOpen=!1)})}addGroup(t){t.isAnimated=this.isAnimated,this.groups.push(t)}removeGroup(t){const e=this.groups.indexOf(t);-1!==e&&this.groups.splice(e,1)}}return t.\u0275fac=function(e){return new(e||t)(s.Gb(b))},t.\u0275cmp=s.Ab({type:t,selectors:[["accordion"]],hostAttrs:["role","tablist",1,"panel-group",2,"display","block"],hostVars:1,hostBindings:function(t,e){2&t&&s.xb("aria-multiselectable",e.closeOthers)},inputs:{isAnimated:"isAnimated",closeOthers:"closeOthers"},ngContentSelectors:d,decls:1,vars:0,template:function(t,e){1&t&&(s.Sb(),s.Rb(0))},encapsulation:2}),t})(),y=(()=>{class t{constructor(t){this.isAnimated=!1,this.isOpenChange=new s.n,this._isOpen=!1,this.accordion=t}get isOpen(){return this._isOpen}set isOpen(t){t!==this.isOpen&&(t&&this.accordion.closeOtherPanels(this),this._isOpen=t,Promise.resolve(null).then(()=>{this.isOpenChange.emit(t)}).catch(t=>{console.log(t)}))}get isBs3(){return void 0===n||(void 0===n.__theme?(r||(r=function(){if("undefined"==typeof document)return null;const t=document.createElement("span");t.innerText="test bs version",document.body.appendChild(t),t.classList.add("d-none");const e=t.getBoundingClientRect();return document.body.removeChild(t),e&&0===e.top?"bs4":"bs3"}()),"bs3"===r):"bs4"!==n.__theme)}ngOnInit(){this.panelClass=this.panelClass||"panel-default",this.accordion.addGroup(this)}ngOnDestroy(){this.accordion.removeGroup(this)}toggleOpen(){this.isDisabled||(this.isOpen=!this.isOpen)}}return t.\u0275fac=function(e){return new(e||t)(s.Gb(w))},t.\u0275cmp=s.Ab({type:t,selectors:[["accordion-group"],["accordion-panel"]],hostAttrs:[1,"panel",2,"display","block"],hostVars:2,hostBindings:function(t,e){2&t&&s.yb("panel-open",e.isOpen)},inputs:{isOpen:"isOpen",panelClass:"panelClass",heading:"heading",isDisabled:"isDisabled"},outputs:{isOpenChange:"isOpenChange"},ngContentSelectors:f,decls:9,vars:6,consts:[[1,"panel","card",3,"ngClass"],["role","tab",1,"panel-heading","card-header",3,"ngClass","click"],[1,"panel-title"],["role","button",1,"accordion-toggle"],["class","btn btn-link","type","button",3,"ngClass",4,"ngIf"],["role","tabpanel",1,"panel-collapse","collapse",3,"collapse","isAnimated"],[1,"panel-body","card-block","card-body"],["type","button",1,"btn","btn-link",3,"ngClass"]],template:function(t,e){1&t&&(s.Sb(m),s.Jb(0,"div",0),s.Jb(1,"div",1),s.Ob("click",function(){return e.toggleOpen()}),s.Jb(2,"div",2),s.Jb(3,"div",3),s.Yb(4,p,2,4,"button",4),s.Rb(5),s.Ib(),s.Ib(),s.Ib(),s.Jb(6,"div",5),s.Jb(7,"div",6),s.Rb(8,1),s.Ib(),s.Ib(),s.Ib()),2&t&&(s.Tb("ngClass",e.panelClass),s.wb(1),s.Tb("ngClass",e.isDisabled?"panel-disabled":"panel-enabled"),s.wb(2),s.xb("aria-expanded",e.isOpen),s.wb(1),s.Tb("ngIf",e.heading),s.wb(2),s.Tb("collapse",!e.isOpen)("isAnimated",e.isAnimated))},directives:[a.h,a.j,c],styles:["[_nghost-%COMP%]   .card-header.panel-enabled[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .card-header.panel-disabled[_ngcontent-%COMP%]   .btn.btn-link[_ngcontent-%COMP%]{cursor:default;text-decoration:none}"]}),t})(),_=(()=>{class t{static forRoot(){return{ngModule:t,providers:[]}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Eb({type:t}),t.\u0275inj=s.Db({imports:[[a.b,g]]}),t})()},YP2Z:function(t,e,i){"use strict";i.d(e,"a",function(){return r});var s=i("ofXK"),n=i("fXoL");let r=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.Eb({type:t}),t.\u0275inj=n.Db({providers:[],imports:[[s.b]]}),t})()},kCbX:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var s=i("uhFJ");class n{static createBox(t){const e=new s.a(-t.x,t.y,-t.z),i=new s.a(-t.x,t.y,t.z),n=new s.a(t.x,t.y,-t.z),r=new s.a(t.x,t.y,t.z),a=new s.a(-t.x,-t.y,-t.z),o=new s.a(-t.x,-t.y,t.z),h=new s.a(t.x,-t.y,-t.z),l=new s.a(t.x,-t.y,t.z),c=[];return this.pushTriangle(c,e,i,n),this.pushTriangle(c,n,i,r),this.pushTriangle(c,o,a,h),this.pushTriangle(c,o,h,l),this.pushTriangle(c,e,n,a),this.pushTriangle(c,a,n,h),this.pushTriangle(c,n,r,h),this.pushTriangle(c,h,r,l),this.pushTriangle(c,r,i,l),this.pushTriangle(c,l,i,o),this.pushTriangle(c,i,e,o),this.pushTriangle(c,o,e,a),c}static createCase(t){const e=new s.a(-t.x,t.y,-t.z),i=new s.a(.0075-t.x,t.y,.0075-t.z),n=new s.a(-t.x,t.y,t.z),r=new s.a(.0075-t.x,t.y,t.z-.0075),a=new s.a(t.x,t.y,-t.z),o=new s.a(t.x-.0075,t.y,.0075-t.z),h=new s.a(t.x,t.y,t.z),l=new s.a(t.x-.0075,t.y,t.z-.0075),c=new s.a(-t.x,-t.y,-t.z),g=new s.a(.0075-t.x,-t.y,.0075-t.z),d=new s.a(-t.x,-t.y,t.z),u=new s.a(.0075-t.x,-t.y,t.z-.0075),p=new s.a(t.x,-t.y,-t.z),m=new s.a(t.x-.0075,-t.y,.0075-t.z),f=new s.a(t.x,-t.y,t.z),b=new s.a(t.x-.0075,-t.y,t.z-.0075),w=[];return this.pushTriangle(w,e,a,c),this.pushTriangle(w,i,g,o),this.pushTriangle(w,c,a,p),this.pushTriangle(w,o,g,m),this.pushTriangle(w,a,h,p),this.pushTriangle(w,l,o,m),this.pushTriangle(w,p,h,f),this.pushTriangle(w,l,m,b),this.pushTriangle(w,h,n,f),this.pushTriangle(w,r,l,b),this.pushTriangle(w,f,n,d),this.pushTriangle(w,r,b,u),this.pushTriangle(w,n,e,d),this.pushTriangle(w,i,r,u),this.pushTriangle(w,d,e,c),this.pushTriangle(w,i,u,g),this.pushTriangle(w,e,n,i),this.pushTriangle(w,i,n,r),this.pushTriangle(w,n,h,r),this.pushTriangle(w,r,h,l),this.pushTriangle(w,a,l,h),this.pushTriangle(w,a,o,l),this.pushTriangle(w,e,o,a),this.pushTriangle(w,e,i,o),this.pushTriangle(w,c,g,d),this.pushTriangle(w,d,g,u),this.pushTriangle(w,d,u,f),this.pushTriangle(w,u,b,f),this.pushTriangle(w,p,f,b),this.pushTriangle(w,p,b,m),this.pushTriangle(w,c,p,m),this.pushTriangle(w,c,m,g),w}static createDial(){const t=.01,e=.02,i=new s.a(-.1,t,0),n=new s.a(0,t,e),r=new s.a(0,t,-e),a=new s.a(-.1,-t,0),o=new s.a(0,-t,e),h=new s.a(0,-t,-e),l=[];return this.pushTriangle(l,i,n,r),this.pushTriangle(l,i,a,n),this.pushTriangle(l,n,a,o),this.pushTriangle(l,i,r,a),this.pushTriangle(l,a,r,h),this.pushTriangle(l,r,n,h),this.pushTriangle(l,h,n,o),this.pushTriangle(l,o,a,h),l}static createCylinder(t,e,i){const n=new s.a(0,-e,0),r=[];let a=0;const o=2*Math.PI/i;for(let h=0;h<i;h++){const i=new s.a(t*Math.sin(a),0,t*Math.cos(a)),h=new s.a(t*Math.sin(a+o),0,t*Math.cos(a+o)),l=i.add(new s.a(0,-e,0)),c=h.add(new s.a(0,-e,0));this.pushTriangle(r,s.a.zero,i,h),this.pushTriangle(r,l,n,c),this.pushTriangle(r,h,i,l),this.pushTriangle(r,h,l,c),a+=o}return r}static pushTriangle(t,e,i,s){const r=n.calculateNormal(e,i,s);t.push(e,r,i,r,s,r)}static calculateNormal(t,e,i){const n=e.subtract(t),r=i.subtract(t);return new s.a(n.y*r.z-n.z*r.y,n.z*r.x-n.x*r.z,n.x*r.y-n.y*r.x).normalized}static append(t,e){e.forEach(e=>{t.push(e)})}static appendWithOffset(t,e,i){e.forEach(e=>{t.push(e.add(i))})}}},uhFJ:function(t,e,i){"use strict";i.d(e,"a",function(){return s});class s{constructor(t,e,i){this.x=t,this.y=e,this.z=i}static get zero(){return new s(0,0,0)}static getBoundingPoints(t){let e=t[0],i=t[0];for(let s=1;s<t.length;s++){const n=t[s];e.x=Math.min(e.x,n.x),e.y=Math.min(e.y,n.y),e.z=Math.min(e.z,n.z),i.x=Math.max(i.x,n.x),i.y=Math.max(i.y,n.y),i.z=Math.max(i.z,n.z)}return[e,i]}get el(){return[this.x,this.y,this.z]}get length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}get negated(){return new s(-this.x,-this.y,-this.z)}get normalized(){const t=1/this.length;return new s(this.x*t,this.y*t,this.z*t)}copy(){return new s(this.x,this.y,this.z)}add(t){return new s(this.x+t.x,this.y+t.y,this.z+t.z)}subtract(t){return new s(this.x-t.x,this.y-t.y,this.z-t.z)}cross(t){return new s(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}}}}]);
import{$ as A,Ba as B,Ca as V,D as L,E as P,F as q,K as Q,L as v,La as z,N as O,Na as I,O as _,Oa as st,S as W,V as j,W as R,X as y,Y as F,_ as x,ba as K,ca as Z,da as G,ea as k,fa as J,ga as S,ha as $,ia as D,ka as tt,ra as et,x as X,y as M,za as it}from"./chunk-VDP5YKTC.js";var nt="400ms cubic-bezier(0.4,0.0,0.2,1)",dt=[I({height:0,visibility:"hidden"}),z(nt,I({height:"*",visibility:"visible"}))],gt=[I({height:"*",visibility:"visible"}),z(nt,I({height:0,visibility:"hidden"}))],rt=(()=>{class n{set display(e){if(this._display=e,e==="none"){this.hide();return}this.isAnimated?this.toggle():this.show()}set collapse(e){this.collapseNewValue=e,(!this._player||this._isAnimationDone)&&(this.isExpanded=e,this.toggle())}get collapse(){return this.isExpanded}constructor(e,i,s){this._el=e,this._renderer=i,this.collapsed=new v,this.collapses=new v,this.expanded=new v,this.expands=new v,this.isExpanded=!0,this.collapseNewValue=!0,this.isCollapsed=!1,this.isCollapse=!0,this.isCollapsing=!1,this.isAnimated=!1,this._display="block",this._stylesLoaded=!1,this._COLLAPSE_ACTION_NAME="collapse",this._EXPAND_ACTION_NAME="expand",this._factoryCollapseAnimation=s.build(gt),this._factoryExpandAnimation=s.build(dt)}ngAfterViewChecked(){this._stylesLoaded=!0,!(!this._player||!this._isAnimationDone)&&(this._player.reset(),this._renderer.setStyle(this._el.nativeElement,"height","*"))}toggle(){this.isExpanded?this.hide():this.show()}hide(){this.isCollapsing=!0,this.isExpanded=!1,this.isCollapsed=!0,this.isCollapsing=!1,this.collapses.emit(this),this._isAnimationDone=!1,this.animationRun(this.isAnimated,this._COLLAPSE_ACTION_NAME)(()=>{if(this._isAnimationDone=!0,this.collapseNewValue!==this.isCollapsed&&this.isAnimated){this.show();return}this.collapsed.emit(this),this._renderer.setStyle(this._el.nativeElement,"display","none")})}show(){this._renderer.setStyle(this._el.nativeElement,"display",this._display),this.isCollapsing=!0,this.isExpanded=!0,this.isCollapsed=!1,this.isCollapsing=!1,this.expands.emit(this),this._isAnimationDone=!1,this.animationRun(this.isAnimated,this._EXPAND_ACTION_NAME)(()=>{if(this._isAnimationDone=!0,this.collapseNewValue!==this.isCollapsed&&this.isAnimated){this.hide();return}this.expanded.emit(this),this._renderer.removeStyle(this._el.nativeElement,"overflow")})}animationRun(e,i){if(!e||!this._stylesLoaded)return r=>r();this._renderer.setStyle(this._el.nativeElement,"overflow","hidden"),this._renderer.addClass(this._el.nativeElement,"collapse");let s=i===this._EXPAND_ACTION_NAME?this._factoryExpandAnimation:this._factoryCollapseAnimation;return this._player&&this._player.reset(),this._player=s.create(this._el.nativeElement),this._player.play(),r=>this._player?.onDone(r)}static{this.\u0275fac=function(i){return new(i||n)(_(Q),_(W),_(st))}}static{this.\u0275dir=q({type:n,selectors:[["","collapse",""]],hostVars:9,hostBindings:function(i,s){i&2&&(R("aria-hidden",s.isCollapsed),F("collapse",s.isCollapse)("in",s.isExpanded)("show",s.isExpanded)("collapsing",s.isCollapsing))},inputs:{display:"display",isAnimated:"isAnimated",collapse:"collapse"},outputs:{collapsed:"collapsed",collapses:"collapses",expanded:"expanded",expands:"expands"},exportAs:["bs-collapse"]})}}return n})(),ot=(()=>{class n{static forRoot(){return{ngModule:n,providers:[]}}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=P({type:n})}static{this.\u0275inj=M({})}}return n})();var ft=["*"],yt=[[["","accordion-heading",""]],"*"],xt=["[accordion-heading]","*"],wt=n=>({"text-muted":n});function vt(n,t){if(n&1&&(x(0,"button",7),D(1),A()),n&2){let e=Z();y("ngClass",et(2,wt,e.isDisabled)),O(),tt(" ",e.heading," ")}}var _t=(()=>{class n{constructor(){this.closeOthers=!1,this.isAnimated=!1}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=X({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),At=(()=>{class n{constructor(e){this.isAnimated=!1,this.closeOthers=!1,this.groups=[],Object.assign(this,e)}closeOtherPanels(e){this.closeOthers&&this.groups.forEach(i=>{i!==e&&(i.isOpen=!1)})}addGroup(e){e.isAnimated=this.isAnimated,this.groups.push(e)}removeGroup(e){let i=this.groups.indexOf(e);i!==-1&&this.groups.splice(i,1)}static{this.\u0275fac=function(i){return new(i||n)(_(_t))}}static{this.\u0275cmp=L({type:n,selectors:[["accordion"]],hostAttrs:["role","tablist",1,"panel-group",2,"display","block"],hostVars:1,hostBindings:function(i,s){i&2&&R("aria-multiselectable",s.closeOthers)},inputs:{isAnimated:"isAnimated",closeOthers:"closeOthers"},ngContentSelectors:ft,decls:1,vars:0,template:function(i,s){i&1&&(G(),k(0))},encapsulation:2})}}return n})(),zt=(()=>{class n{get isOpen(){return this._isOpen}set isOpen(e){e!==this.isOpen&&(e&&this.accordion.closeOtherPanels(this),this._isOpen=e,Promise.resolve(null).then(()=>{this.isOpenChange.emit(e)}))}constructor(e){this.isAnimated=!1,this.panelClass="panel-default",this.isDisabled=!1,this.isOpenChange=new v,this._isOpen=!1,this.accordion=e}ngOnInit(){this.accordion.addGroup(this)}ngOnDestroy(){this.accordion.removeGroup(this)}toggleOpen(){this.isDisabled||(this.isOpen=!this.isOpen)}static{this.\u0275fac=function(i){return new(i||n)(_(At))}}static{this.\u0275cmp=L({type:n,selectors:[["accordion-group"],["accordion-panel"]],hostAttrs:[1,"panel",2,"display","block"],hostVars:2,hostBindings:function(i,s){i&2&&F("panel-open",s.isOpen)},inputs:{heading:"heading",panelClass:"panelClass",isDisabled:"isDisabled",isOpen:"isOpen"},outputs:{isOpenChange:"isOpenChange"},ngContentSelectors:xt,decls:9,vars:6,consts:[[1,"panel","card",3,"ngClass"],["role","tab",1,"panel-heading","card-header",3,"click","ngClass"],[1,"panel-title"],["role","button",1,"accordion-toggle"],["class","btn btn-link","type","button",3,"ngClass",4,"ngIf"],["role","tabpanel",1,"panel-collapse","collapse",3,"collapse","isAnimated"],[1,"panel-body","card-block","card-body"],["type","button",1,"btn","btn-link",3,"ngClass"]],template:function(i,s){i&1&&(G(yt),x(0,"div",0)(1,"div",1),K("click",function(){return s.toggleOpen()}),x(2,"div",2)(3,"div",3),j(4,vt,2,4,"button",4),k(5),A()()(),x(6,"div",5)(7,"div",6),k(8,1),A()()()),i&2&&(y("ngClass",s.panelClass),O(),y("ngClass",s.isDisabled?"panel-disabled":"panel-enabled"),O(2),R("aria-expanded",s.isOpen),O(),y("ngIf",s.heading),O(2),y("collapse",!s.isOpen)("isAnimated",s.isAnimated))},dependencies:[it,B,rt],styles:["[_nghost-%COMP%]   .card-header.panel-enabled[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .card-header.panel-disabled[_ngcontent-%COMP%]   .btn.btn-link[_ngcontent-%COMP%]{cursor:default;text-decoration:none}"]})}}return n})(),Yt=(()=>{class n{static forRoot(){return{ngModule:n,providers:[]}}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=P({type:n})}static{this.\u0275inj=M({imports:[V,ot]})}}return n})();var Tt=["surface"];function Ct(n,t){n&1&&(x(0,"p"),D(1,"Your browser does not support HTML5"),A())}var qt=(()=>{class n{setScene(e){e.renderingContext||(this.glNotSupported=!0),this.gl=e.renderingContext.gl,this.scene=e,this.scene.camera.aspect=this.surface.nativeElement.width/this.surface.nativeElement.height,requestAnimationFrame(this.render.bind(this))}render(e){let i=e.valueOf()/1e3,s=this.scene.clearColor;this.gl.clearColor(s[0],s[1],s[2],s[3]),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.scene.draw(i),this.gl.useProgram(null),requestAnimationFrame(this.render.bind(this))}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=L({type:n,selectors:[["app-canvas"]],viewQuery:function(i,s){if(i&1&&J(Tt,7),i&2){let r;S(r=$())&&(s.surface=r.first)}},decls:4,vars:1,consts:[["surface",""],[4,"ngIf"],["width","1024","height","768"]],template:function(i,s){i&1&&(j(0,Ct,2,0,"p",1),x(1,"canvas",2,0),D(3,` Your browser does not support HTML5
`),A()),i&2&&y("ngIf",s.glNotSupported)},dependencies:[B],encapsulation:2})}}return n})();var Jt=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=P({type:n})}static{this.\u0275inj=M({imports:[V]})}}return n})();var N=class{constructor(t,e,i){this.gl=i;let s=this.createShader(this.gl.VERTEX_SHADER),r=this.createShader(this.gl.FRAGMENT_SHADER);if(this.gl.shaderSource(s,t),this.gl.shaderSource(r,e),this.gl.compileShader(s),!this.gl.getShaderParameter(s,this.gl.COMPILE_STATUS))throw Error(`ERROR compiling vertex shader!
`+this.gl.getShaderInfoLog(s));if(this.gl.compileShader(r),!this.gl.getShaderParameter(r,this.gl.COMPILE_STATUS))throw Error(`ERROR compiling fragment shader!
`+this.gl.getShaderInfoLog(r));if(this.program=this.createProgram(),this.gl.attachShader(this.program,s),this.gl.attachShader(this.program,r),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))throw Error(`ERROR linking program!
`+this.gl.getProgramInfoLog(this.program));if(this.gl.validateProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.VALIDATE_STATUS))throw Error(`ERROR validating program!
`+this.gl.getProgramInfoLog(this.program));this.worldMatrixLocation=this.getUniformLocation("world_matrix"),this.vertColorLocation=this.getUniformLocation("vert_color")}use(){this.gl.useProgram(this.program)}getAttribLocation(t){return this.gl.getAttribLocation(this.program,t)}getUniformLocation(t){let e=this.gl.getUniformLocation(this.program,t);if(!e)throw Error("ERROR getting uniform location of "+t);return e}createShader(t){let e=this.gl.createShader(t);if(!e)throw Error("ERROR creating shader!");return e}createProgram(){let t=this.gl.createProgram();if(!t)throw Error("ERROR creating program!");return t}};var at=class{constructor(t){this.gl=t,this.standardShader=new N(this.standardVertexShaderText,this.standardFragmentShaderText,this.gl),this.standardShader.use(),this.gl.enable(this.gl.DEPTH_TEST),this.gl.enable(this.gl.CULL_FACE),this.gl.cullFace(this.gl.BACK),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.emitterShader=new N(this.standardVertexShaderText,this.emitterFragmentShaderText,this.gl),this.emitterShader.use(),this.gl.enable(this.gl.DEPTH_TEST),this.gl.enable(this.gl.CULL_FACE),this.gl.cullFace(this.gl.BACK),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)}get standardVertexShaderText(){return`
        precision mediump float;

        uniform mat4 world_matrix;
        uniform mat4 view_matrix;
        uniform mat4 projection_matrix;

        attribute vec3 position;
        attribute vec3 normal;
        varying vec3 frag_normal;
        varying vec3 world_position;

        void main()
        {
            frag_normal = mat3(world_matrix) * normal;
            world_position = (world_matrix * vec4(position, 1)).xyz;
            gl_Position = projection_matrix * view_matrix * vec4(world_position, 1);
        }`}get standardFragmentShaderText(){return`
        precision mediump float;

        uniform vec3 light_position;
        uniform vec4 vert_color;

        varying vec3 frag_normal;
        varying vec3 world_position;
        void main()
        {
            vec3 light_direction = normalize(light_position - world_position);
            
            vec3 diffuse = (vert_color.xyz * 0.25) + clamp(dot(frag_normal, light_direction), 0.0, 1.0) * (vert_color.xyz * 0.75);

            gl_FragColor = vec4(diffuse, vert_color.w);
        }`}get emitterFragmentShaderText(){return`
        precision mediump float;

        uniform vec3 light_position;
        uniform vec4 vert_color;

        varying vec3 frag_normal;
        varying vec3 world_position;
        void main()
        {
            vec3 light_direction = normalize(light_position - world_position);
            
            vec3 diffuse = (vert_color.xyz * 0.75) + clamp(dot(frag_normal, light_direction), 0.0, 1.0) * (vert_color.xyz * 0.25);

            gl_FragColor = vec4(diffuse, vert_color.w);
        }`}};var w=class n{constructor(t){this.el=t}get e11(){return this.el[0]}get e12(){return this.el[1]}get e13(){return this.el[2]}get e14(){return this.el[3]}get e21(){return this.el[4]}get e22(){return this.el[5]}get e23(){return this.el[6]}get e24(){return this.el[7]}get e31(){return this.el[8]}get e32(){return this.el[9]}get e33(){return this.el[10]}get e34(){return this.el[11]}get e41(){return this.el[12]}get e42(){return this.el[13]}get e43(){return this.el[14]}get e44(){return this.el[15]}set e11(t){this.el[0]=t}set e12(t){this.el[1]=t}set e13(t){this.el[2]=t}set e14(t){this.el[3]=t}set e21(t){this.el[4]=t}set e22(t){this.el[5]=t}set e23(t){this.el[6]=t}set e24(t){this.el[7]=t}set e31(t){this.el[8]=t}set e32(t){this.el[9]=t}set e33(t){this.el[10]=t}set e34(t){this.el[11]=t}set e41(t){this.el[12]=t}set e42(t){this.el[13]=t}set e43(t){this.el[14]=t}set e44(t){this.el[15]=t}static get identity(){return new n([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}static translation(t){return new n([1,0,0,0,0,1,0,0,0,0,1,0,t.x,t.y,t.z,1])}static rotationX(t){let e=Math.cos(t),i=Math.sin(t);return new n([1,0,0,0,0,e,i,0,0,-i,e,0,0,0,0,1])}static rotationY(t){let e=Math.cos(t),i=Math.sin(t);return new n([e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1])}static rotationZ(t){let e=Math.cos(t),i=Math.sin(t);return new n([e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1])}static perspectiveProjection(t,e,i,s){let r=i*Math.tan(.5*t),a=-r,p=a*e,d=r*e,l=2*i/(d-p),c=2*i/(r-a),g=(d+p)/(d-p),u=(r+a)/(r-a),m=-(s+i)/(s-i),f=-(2*s*i)/(s-i);return new n([l,0,0,0,0,c,0,0,g,u,m,-1,0,0,f,0])}static orthographicProjection(t,e,i,s){let r=-t/2,a=t/2,p=-e/2,d=e/2,l=1/(a-r),c=1/(d-p),g=1/(s-i);return new n([2*l,0,0,0,0,2*c,0,0,0,0,-2*g,0,-(a+r)*l,-(d+p)*c,-(s+i)*g,1])}static view(t,e,i){let s=t.subtract(e).normalized,r=i.cross(s).normalized,a=s.cross(r).normalized;return new n([r.x,a.x,s.x,0,r.y,a.y,s.y,0,r.z,a.z,s.z,0,-r.dot(t),-a.dot(t),-s.dot(t),1])}multiply(t){var e=this,i=t;return new n([e.e11*i.e11+e.e12*i.e21+e.e13*i.e31+e.e14*i.e41,e.e11*i.e12+e.e12*i.e22+e.e13*i.e32+e.e14*i.e42,e.e11*i.e13+e.e12*i.e23+e.e13*i.e33+e.e14*i.e43,e.e11*i.e14+e.e12*i.e24+e.e13*i.e34+e.e14*i.e44,e.e21*i.e11+e.e22*i.e21+e.e23*i.e31+e.e24*i.e41,e.e21*i.e12+e.e22*i.e22+e.e23*i.e32+e.e24*i.e42,e.e21*i.e13+e.e22*i.e23+e.e23*i.e33+e.e24*i.e43,e.e21*i.e14+e.e22*i.e24+e.e23*i.e34+e.e24*i.e44,e.e31*i.e11+e.e32*i.e21+e.e33*i.e31+e.e34*i.e41,e.e31*i.e12+e.e32*i.e22+e.e33*i.e32+e.e34*i.e42,e.e31*i.e13+e.e32*i.e23+e.e33*i.e33+e.e34*i.e43,e.e31*i.e14+e.e32*i.e24+e.e33*i.e34+e.e34*i.e44,e.e41*i.e11+e.e42*i.e21+e.e43*i.e31+e.e44*i.e41,e.e41*i.e12+e.e42*i.e22+e.e43*i.e32+e.e44*i.e42,e.e41*i.e13+e.e42*i.e23+e.e43*i.e33+e.e44*i.e43,e.e41*i.e14+e.e42*i.e24+e.e43*i.e34+e.e44*i.e44])}};var ht=class{constructor(t,e){this.gl=e,this.buffer=this.createGLBuffer(),this.bind(),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.createBuffer(t),this.gl.STATIC_DRAW),this.numVertices=t.length/2}createGLBuffer(){let t=this.gl.createBuffer();if(!t)throw Error("ERROR creating GL buffer.");return t}createBuffer(t){let e=[];for(let i of t)e.push(i.x),e.push(i.y),e.push(i.z);return new Float32Array(e)}bind(){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.buffer)}draw(t){this.bind(),this.positionAttribLocation=t.getAttribLocation("position");let e=6*Float32Array.BYTES_PER_ELEMENT;this.gl.vertexAttribPointer(this.positionAttribLocation,3,this.gl.FLOAT,!1,e,0),this.gl.enableVertexAttribArray(this.positionAttribLocation),this.normalAttribLocation=t.getAttribLocation("normal"),this.gl.vertexAttribPointer(this.normalAttribLocation,3,this.gl.FLOAT,!1,e,3*Float32Array.BYTES_PER_ELEMENT),this.gl.enableVertexAttribArray(this.normalAttribLocation),this.gl.drawArrays(this.gl.TRIANGLES,0,this.numVertices),this.gl.disableVertexAttribArray(this.positionAttribLocation),this.gl.disableVertexAttribArray(this.normalAttribLocation)}};var o=class n{constructor(t,e,i){this.x=t,this.y=e,this.z=i}static get zero(){return new n(0,0,0)}static getBoundingPoints(t){let e=t[0],i=t[0];for(let s=1;s<t.length;s++){let r=t[s];e.x=Math.min(e.x,r.x),e.y=Math.min(e.y,r.y),e.z=Math.min(e.z,r.z),i.x=Math.max(i.x,r.x),i.y=Math.max(i.y,r.y),i.z=Math.max(i.z,r.z)}return[e,i]}get el(){return[this.x,this.y,this.z]}get length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}get negated(){return new n(-this.x,-this.y,-this.z)}get normalized(){let t=1/this.length;return new n(this.x*t,this.y*t,this.z*t)}copy(){return new n(this.x,this.y,this.z)}add(t){return new n(this.x+t.x,this.y+t.y,this.z+t.z)}subtract(t){return new n(this.x-t.x,this.y-t.y,this.z-t.z)}cross(t){return new n(this.y*t.z-this.z*t.y,this.z*t.x-this.x*t.z,this.x*t.y-this.y*t.x)}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}};var lt=class n{static createBox(t){let e=new o(-t.x,t.y,-t.z),i=new o(-t.x,t.y,t.z),s=new o(t.x,t.y,-t.z),r=new o(t.x,t.y,t.z),a=new o(-t.x,-t.y,-t.z),p=new o(-t.x,-t.y,t.z),d=new o(t.x,-t.y,-t.z),l=new o(t.x,-t.y,t.z),c=[];return this.pushTriangle(c,e,i,s),this.pushTriangle(c,s,i,r),this.pushTriangle(c,p,a,d),this.pushTriangle(c,p,d,l),this.pushTriangle(c,e,s,a),this.pushTriangle(c,a,s,d),this.pushTriangle(c,s,r,d),this.pushTriangle(c,d,r,l),this.pushTriangle(c,r,i,l),this.pushTriangle(c,l,i,p),this.pushTriangle(c,i,e,p),this.pushTriangle(c,p,e,a),c}static createCase(t){let i=new o(-t.x,t.y,-t.z),s=new o(-t.x+.0075,t.y,-t.z+.0075),r=new o(-t.x,t.y,t.z),a=new o(-t.x+.0075,t.y,t.z-.0075),p=new o(t.x,t.y,-t.z),d=new o(t.x-.0075,t.y,-t.z+.0075),l=new o(t.x,t.y,t.z),c=new o(t.x-.0075,t.y,t.z-.0075),g=new o(-t.x,-t.y,-t.z),u=new o(-t.x+.0075,-t.y,-t.z+.0075),m=new o(-t.x,-t.y,t.z),f=new o(-t.x+.0075,-t.y,t.z-.0075),T=new o(t.x,-t.y,-t.z),C=new o(t.x-.0075,-t.y,-t.z+.0075),b=new o(t.x,-t.y,t.z),E=new o(t.x-.0075,-t.y,t.z-.0075),h=[];return this.pushTriangle(h,i,p,g),this.pushTriangle(h,s,u,d),this.pushTriangle(h,g,p,T),this.pushTriangle(h,d,u,C),this.pushTriangle(h,p,l,T),this.pushTriangle(h,c,d,C),this.pushTriangle(h,T,l,b),this.pushTriangle(h,c,C,E),this.pushTriangle(h,l,r,b),this.pushTriangle(h,a,c,E),this.pushTriangle(h,b,r,m),this.pushTriangle(h,a,E,f),this.pushTriangle(h,r,i,m),this.pushTriangle(h,s,a,f),this.pushTriangle(h,m,i,g),this.pushTriangle(h,s,f,u),this.pushTriangle(h,i,r,s),this.pushTriangle(h,s,r,a),this.pushTriangle(h,r,l,a),this.pushTriangle(h,a,l,c),this.pushTriangle(h,p,c,l),this.pushTriangle(h,p,d,c),this.pushTriangle(h,i,d,p),this.pushTriangle(h,i,s,d),this.pushTriangle(h,g,u,m),this.pushTriangle(h,m,u,f),this.pushTriangle(h,m,f,b),this.pushTriangle(h,f,E,b),this.pushTriangle(h,T,b,E),this.pushTriangle(h,T,E,C),this.pushTriangle(h,g,T,C),this.pushTriangle(h,g,C,u),h}static createDial(){let i=new o(-.1,.01,0),s=new o(0,.01,.02),r=new o(0,.01,-.02),a=new o(-.1,-.01,0),p=new o(0,-.01,.02),d=new o(0,-.01,-.02),l=[];return this.pushTriangle(l,i,s,r),this.pushTriangle(l,i,a,s),this.pushTriangle(l,s,a,p),this.pushTriangle(l,i,r,a),this.pushTriangle(l,a,r,d),this.pushTriangle(l,r,s,d),this.pushTriangle(l,d,s,p),this.pushTriangle(l,p,a,d),l}static createCylinder(t,e,i){let s=new o(0,-e,0),r=[],a=0,p=2*Math.PI/i;for(let d=0;d<i;d++){let l=new o(t*Math.sin(a),0,t*Math.cos(a)),c=new o(t*Math.sin(a+p),0,t*Math.cos(a+p)),g=l.add(new o(0,-e,0)),u=c.add(new o(0,-e,0));this.pushTriangle(r,o.zero,l,c),this.pushTriangle(r,g,s,u),this.pushTriangle(r,c,l,g),this.pushTriangle(r,c,g,u),a+=p}return r}static pushTriangle(t,e,i,s){let r=n.calculateNormal(e,i,s);t.push(e,r,i,r,s,r)}static calculateNormal(t,e,i){let s=e.subtract(t),r=i.subtract(t);return new o(s.y*r.z-s.z*r.y,s.z*r.x-s.x*r.z,s.x*r.y-s.y*r.x).normalized}static append(t,e){e.forEach(i=>{t.push(i)})}static appendWithOffset(t,e,i){e.forEach(s=>{t.push(s.add(i))})}};var ct=class n{get position(){return new o(this.worldTransform.e41,this.worldTransform.e42,this.worldTransform.e43)}set position(t){this.worldTransform.e41=t.x,this.worldTransform.e42=t.y,this.worldTransform.e43=t.z}static withMesh(t,e){let i=new n(e);return i.meshes=[t],i}constructor(t){this.renderingContext=t,this.worldTransform=w.identity,this.gl=t.gl,this.program=this.renderingContext.standardShader}draw(){if(this.color&&this.gl.uniform4fv(this.program.vertColorLocation,this.color),this.meshes){this.gl.uniformMatrix4fv(this.program.worldMatrixLocation,!1,this.worldTransform.el);for(let t of this.meshes)t.childWorldTransform?(this.gl.uniformMatrix4fv(this.program.worldMatrixLocation,!1,this.worldTransform.multiply(t.childWorldTransform).el),t.draw(this.program),this.gl.uniformMatrix4fv(this.program.worldMatrixLocation,!1,this.worldTransform.el)):t.draw(this.program)}this.children&&this.children.forEach(t=>{t.draw()})}};var U=class{constructor(){this.eye=new o(1,0,0),this.target=o.zero,this.up=new o(0,1,0),this.orthoScaling=1,this.fov=Math.PI/4,this.aspectRatio=1,this.nearPlane=.1,this.farPlane=100,this.isOrthographic=!1,this.calculateProjection()}set fieldOfView(t){this.fov=t,this.calculateProjection()}set near(t){this.nearPlane=t,this.calculateProjection()}set far(t){this.farPlane=t,this.calculateProjection()}set aspect(t){this.aspectRatio=t,this.calculateProjection()}set orthographic(t){this.isOrthographic=t,this.calculateProjection()}get viewMatrix(){return w.view(this.eye,this.target,this.up)}get projectionMatrix(){return this.projection}calculateProjection(){this.isOrthographic?this.projection=w.orthographicProjection(this.aspectRatio*this.orthoScaling,this.orthoScaling,this.nearPlane,this.farPlane):this.projection=w.perspectiveProjection(this.fov,this.aspectRatio,this.nearPlane,this.farPlane)}set rotatingPosition(t){let e=1+t/16,i=1.75;this.eye=new o(Math.sin(e)*i,.7*Math.sin(e+4.5),Math.cos(e)*i)}};var H=class{constructor(){this.position=new o(0,2,0)}set rotatingPosition(t){let e=t/16,i=2;this.position=new o(Math.sin(e)*i,1,Math.cos(e)*i)}};var pt=class{constructor(t){this.clearColor=[.5,.85,.8,1],this.renderingContext=t,this.gl=t.gl,this.camera=new U,this.camera.eye=new o(1,.45,0),this.camera.eye=new o(1e-4,1,0),this.camera.target=new o(0,0,0),this.light=new H}draw(t){this.setProgramUniforms(this.renderingContext.standardShader),this.setProgramUniforms(this.renderingContext.emitterShader)}setProgramUniforms(t){t.use();let e=t.getUniformLocation("projection_matrix");this.gl.uniformMatrix4fv(e,!1,this.camera.projectionMatrix.el);let i=t.getUniformLocation("view_matrix");this.gl.uniformMatrix4fv(i,!1,this.camera.viewMatrix.el);let s=t.getUniformLocation("light_position");this.gl.uniform3fv(s,this.light.position.el)}};export{w as a,ht as b,o as c,lt as d,ct as e,pt as f,qt as g,at as h,At as i,zt as j,Yt as k,Jt as l};

function _get(e,t,r){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=_superPropBase(e,t);if(n){var s=Object.getOwnPropertyDescriptor(n,t);return s.get?s.get.call(r):s.value}})(e,t,r||e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var r,n=_getPrototypeOf(e);if(t){var s=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1MA0":function(e,t,r){"use strict";r.r(t),r.d(t,"HarwellModule",(function(){return B}));var n,s=r("ofXK"),a=r("tyNb"),i=r("JKqQ"),o=r("NCiM"),c=r("kCbX"),u=r("uhFJ"),d=r("7G6I"),l=function(){function e(){_classCallCheck(this,e),this.data={};for(var t=1;t<=99;t++)this.data[String(t).padStart(2,"0")]=0;this.tapeNumber=1}return _createClass(e,[{key:"get",value:function(e){return this.data[e]}},{key:"add",value:function(e,t){this.data[e]=Number((this.data[e]+t).toFixed(7))}},{key:"subtract",value:function(e,t){this.data[e]=Number((this.data[e]-t).toFixed(7))}},{key:"multiply",value:function(e,t){var r=this.get(e)*this.get(t);this.data["09"]=Number(r.toFixed(7)),this.clear(t)}},{key:"divide",value:function(e,t){var r=this.get("09")/this.get(e),n=this.get("09")%this.get(e);this.data[t]=Number(r.toFixed(7)),this.data["09"]=Number(n.toFixed(7))}},{key:"clear",value:function(e){this.data[e]=0}}]),e}(),h=function(){function e(t){_classCallCheck(this,e),this.code=t}return _createClass(e,[{key:"operation",get:function(){return this.code[0]}},{key:"addressA",get:function(){return this.code.substr(1,2)}},{key:"addressB",get:function(){return this.code.substr(3,2)}}],[{key:"fromCode",value:function(t){return new e(t)}}]),e}(),p=function(){function e(t){_classCallCheck(this,e),this.value=t}return _createClass(e,[{key:"valueOf",value:function(){return this.value}}]),e}(),f=function e(t){_classCallCheck(this,e),this.blockNumber=t},b=function(){function e(t){_classCallCheck(this,e),this.entries=t,this.index=0}return _createClass(e,[{key:"searchBlock",value:function(e){for(var t=this.index;;){var r=this.readEntry();if(r instanceof f&&r.blockNumber===e)return;if(this.index===t)throw new Error("Block not found on tape after full loop")}}},{key:"readInstruction",value:function(){return this.readEntry()}},{key:"readData",value:function(){return this.readEntry()}},{key:"peekData",value:function(){return this.peekEntry()}},{key:"peekTapeDataAfterInstruction",value:function(){return this.peekEntryAt(this.index+1)}},{key:"readEntry",value:function(){var e=this.peekEntry();return this.index++,this.index>=this.entries.length&&(this.index=0),e}},{key:"peekEntry",value:function(){if(0===this.entries.length)throw new Error("No entry on tape to read.");return this.entries[this.index]}},{key:"peekEntryAt",value:function(e){if(0===this.entries.length)throw new Error("No entry on tape to read.");return this.entries[e]}}],[{key:"parse",value:function(t){var r=[];return t.split("\n").forEach((function(e){if(5===e.length)r.push(h.fromCode(e));else if(9===e.length){var t=Number(e)/1e7;r.push(new p(t))}else if(3===e.length){var n=Number(e.substr(1,1));r.push(new f(n))}})),new e(r)}}]),e}(),v=function(){function e(){_classCallCheck(this,e),this.tapes=new Map,this.state=new l,this.output=[""]}return _createClass(e,[{key:"setTape",value:function(e,t){this.tapes[e]=b.parse(t)}},{key:"step",value:function(){if(!this.state.finished){var e=this.currentTape.readEntry();if(!(e instanceof f)){var t=e;switch(t.operation){case"0":this.control(t.addressA,t.addressB);break;case"1":this.add(t.addressA,t.addressB);break;case"2":this.addAndClear(t.addressA,t.addressB);break;case"3":this.subtract(t.addressA,t.addressB);break;case"4":this.subtractAndClear(t.addressA,t.addressB);break;case"5":this.multiply(t.addressA,t.addressB);break;case"6":this.divide(t.addressA,t.addressB);break;default:throw new Error("Unknown instruction "+t.code)}}}}},{key:"control",value:function(e,t){if("3"!==e[0]){if("5"!==e[0]){switch(e){case"01":"00"===t&&this.finish();case"11":return void this.testPositive(t);case"12":return void this.testNegative(t);case"21":return void this.transferControl(t);case"22":return void(this.state.yes&&this.transferControl(t));case"73":return void this.printLayoutReference1();case"74":return void this.printLayoutReference2()}throw new Error("Unknown control instruction 0"+e+t)}if(this.state.yes){var r=Number(e[1]),n=Number(t);this.searchBlock(r,n)}}else{var s=Number(e[1]),a=Number(t);this.searchBlock(s,a)}}},{key:"add",value:function(e,t){var r=this.load(e);"01"!==t?this.state.add(t,r):this.print(r)}},{key:"addAndClear",value:function(e,t){this.add(e,t),this.state.clear(e)}},{key:"subtract",value:function(e,t){var r=this.load(e);"01"!==t?this.state.subtract(t,r):this.print(r)}},{key:"subtractAndClear",value:function(e,t){this.subtract(e,t),this.state.clear(e)}},{key:"multiply",value:function(e,t){this.state.multiply(e,t)}},{key:"divide",value:function(e,t){this.state.divide(e,t)}},{key:"testPositive",value:function(e){this.state.yes=this.load(e)>0}},{key:"testNegative",value:function(e){this.state.yes=this.load(e)<0}},{key:"searchBlock",value:function(e,t){this.tapes[t].searchBlock(e)}},{key:"transferControl",value:function(e){this.state.tapeNumber=Number(e)}},{key:"finish",value:function(){this.state.finished=!0}},{key:"printLayoutReference1",value:function(){this.state.printLayout=1}},{key:"printLayoutReference2",value:function(){this.state.printLayout=2}},{key:"print",value:function(e){var t=(e<0?"-":"+")+e.toFixed(7);1===this.state.printLayout?this.output[this.output.length-1]+=t+"   ":2===this.state.printLayout&&(this.output[this.output.length-1]+=t,this.output.push(""))}},{key:"peek",value:function(e){return"01"==e?this.currentTape.peekData().valueOf():this.state.get(e)}},{key:"peekTapeDataAfterInstruction",value:function(){return this.currentTape.peekTapeDataAfterInstruction().valueOf()}},{key:"load",value:function(e){return"01"==e?this.currentTape.readData().valueOf():this.state.get(e)}},{key:"currentTape",get:function(){return this.tapes[this.state.tapeNumber]}}]),e}(),y=r("FCAv"),k=r("+pcE"),g=function e(t,r){_classCallCheck(this,e),this.value=0,this.indicators=t,this.position=r},m=((n=function(e){_inherits(r,e);var t=_createSuper(r);function r(){return _classCallCheck(this,r),t.apply(this,arguments)}return _createClass(r,null,[{key:"createTube",value:function(e,t){for(var r=2*Math.PI/10,n=[],s=0,a=0;a<10;a++){var i=new u.a(e*Math.cos(s),0,e*Math.sin(s)),o=new u.a(e*Math.cos(s),-t,e*Math.sin(s)),c=new u.a(0,-t,0),d=u.a.zero;s+=r;var l=new u.a(e*Math.cos(s),0,e*Math.sin(s)),h=new u.a(e*Math.cos(s),-t,e*Math.sin(s));this.pushTriangle(n,i,d,l),this.pushTriangle(n,c,o,h),this.pushTriangle(n,i,l,o),this.pushTriangle(n,o,l,h)}return n}},{key:"createTubeRow",value:function(e){for(var t=[],r=this.createTube(.015,.05),n=new u.a(-.23,0,e),s=0;s<5;s++)r.forEach((function(e){t.push(e.add(n))})),n.x+=.0425;n.x+=.1;for(var a=0;a<4;a++)r.forEach((function(e){t.push(e.add(n))})),n.x+=.0425;return t}},{key:"createMemoryUnit",value:function(){for(var e=[],t=0;t<5;t++)this.createTubeRow(t*this.tubeDistance-.22).forEach((function(t){e.push(t)}));for(var r=5;r<10;r++)this.createTubeRow(r*this.tubeDistance-.165).forEach((function(t){e.push(t)}));return e}}]),r}(c.a)).tubeDistance=.0425,n),w=function(e){_inherits(r,e);var t=_createSuper(r);function r(e,n,s,a,i){var d;_classCallCheck(this,r),(d=t.call(this,i)).position=a;var l=k.a.withMesh(e,i);l.color=[.5,.5,.5,1],l.worldTransform=y.a.rotationX(Math.PI/2).multiply(y.a.translation(a));var h=k.a.withMesh(new o.a(c.a.createBox(new u.a(.25,.25,.1)),d.gl),i);h.color=[.5,.5,.5,1],h.worldTransform=y.a.translation(a.add(new u.a(0,0,-.15)));var p=k.a.withMesh(n,i);return p.color=[.2,.2,.2,1],p.worldTransform=y.a.rotationX(Math.PI/2).multiply(y.a.translation(a)),d.children=[l,h,p],d.createRegisters(s,i),d}return _createClass(r,[{key:"createRegisters",value:function(e,t){this.registers=[];for(var r=this.position.add(new u.a(-.23,.22,0)),n=0;n<5;n++){var s=this.createIndicators(e,t);this.registers[n]=new g(s,r),r=r.add(new u.a(0,-m.tubeDistance,0))}r=r.add(new u.a(0,-.055,0));for(var a=5;a<10;a++){var i=this.createIndicators(e,t);this.registers[a]=new g(i,r),r=r.add(new u.a(0,-m.tubeDistance,0))}}},{key:"createIndicators",value:function(e,t){for(var r=[],n=0;n<9;n++){var s=k.a.withMesh(e,t);s.program=t.emitterShader,s.color=[1,.2,.2,1],r[n]=s}return r}},{key:"draw",value:function(){var e=this;this.children.forEach((function(e){e.draw()})),this.renderingContext.emitterShader.use(),this.registers.forEach((function(t){for(var r=t.position,n=0;n<5;n++)e.drawIndicator(t,n,r),r=r.add(new u.a(.0425,0,0));r=r.add(new u.a(.1,0,0));for(var s=5;s<9;s++)e.drawIndicator(t,s,r),r=r.add(new u.a(.0425,0,0))})),this.renderingContext.standardShader.use()}},{key:"drawIndicator",value:function(e,t,r){var n=e.indicators[t],s=0;0!==t&&(1===t&&t--,e.value<0&&t++,s=Number(e.value.toFixed(7)[t])*(2*Math.PI/10)),n.worldTransform=y.a.rotationX(Math.PI/2).multiply(y.a.translation(new u.a(0,.0095,0))).multiply(y.a.rotationZ(s)).multiply(y.a.translation(r)),n.draw()}}]),r}(k.a),C=function(){function e(t){_classCallCheck(this,e),this.processor=t}return _createClass(e,[{key:"disassemble",value:function(e){if(e instanceof h)return e.code+" "+this.disassembleInstruction(e);if(e instanceof f)return"Block ID "+e.blockNumber.toString();throw Error("Cannot disassemble tape entry.")}},{key:"disassembleInstruction",value:function(e){switch(e.operation){case"0":return this.disassembleControl(e);case"1":return this.disassembleAdd(e);case"2":return this.disassembleAddAndClear(e);case"3":return this.disassembleSubtract(e);case"4":return this.disassembleSubtractAndClear(e);case"5":return this.disassembleMultiply(e);case"6":return this.disassembleDivide(e);default:throw new Error("Unknown instruction "+e.code)}}},{key:"disassembleControl",value:function(e){if("3"===e.addressA[0])return"SEARCH for block "+Number(e.addressA[1])+" on tape "+Number(e.addressB);if("5"===e.addressA[0])return"CONDITIONAL SEARCH for block "+Number(e.addressA[1])+" on tape "+Number(e.addressB)+" ("+(this.processor.state.yes?"YES":"NO")+")";switch(e.addressA){case"01":if("00"===e.addressB)return"FINISH";case"11":return"TEST POSITIVE ["+e.addressB+"] ("+this.processor.peek(e.addressB)+")";case"12":return"TEST NEGATIVE ["+e.addressB+"] ("+this.processor.peek(e.addressB)+")";case"21":return"TRANSFER to tape "+e.addressB;case"22":return"CONDITIONAL TRANSFER to tape "+e.addressB+" ("+(this.processor.state.yes?"YES":"NO")+")";case"73":return"PRINT LAYOUT REFERENCE 1";case"74":return"PRINT LAYOUT REFERENCE 2";default:throw new Error("Unknown control instruction "+e.code)}}},{key:"disassembleAdd",value:function(e){var t="01"==e.addressA?this.processor.peekTapeDataAfterInstruction():this.processor.peek(e.addressA);if("01"===e.addressB)return"PRINT ["+e.addressA+"] ("+t+")";var r=this.processor.peek(e.addressB),n=this.formatNumberResult(r+t);return"["+e.addressB+"] += ["+e.addressA+"] ("+r+" + "+t+" = "+n+")"}},{key:"disassembleAddAndClear",value:function(e){var t="01"==e.addressA?this.processor.peekTapeDataAfterInstruction():this.processor.peek(e.addressA);if("00"===e.addressB)return"CLEAR ["+e.addressA+"] ("+t+")";if("01"===e.addressB)return"PRINT ["+e.addressA+"] ("+t+")";var r=this.processor.peek(e.addressB),n=this.formatNumberResult(r+t);return"["+e.addressB+"] += ["+e.addressA+"]; CLEAR ["+e.addressA+"] ("+r+" + "+t+" = "+n+")"}},{key:"disassembleSubtract",value:function(e){var t="01"==e.addressA?this.processor.peekTapeDataAfterInstruction():this.processor.peek(e.addressA);if("00"===e.addressB)return"CLEAR ["+e.addressA+"] ("+t+")";if("01"===e.addressB)return"PRINT ["+e.addressA+"] ("+t+")";var r=this.processor.peek(e.addressB),n=this.formatNumberResult(r-t);return"["+e.addressB+"] -= ["+e.addressA+"]; CLEAR ["+e.addressA+"] ("+r+" - "+t+" = "+n+")"}},{key:"disassembleSubtractAndClear",value:function(e){var t="01"==e.addressA?this.processor.peekTapeDataAfterInstruction():this.processor.peek(e.addressA),r=this.processor.peek(e.addressB),n=this.formatNumberResult(r-t);return"["+e.addressB+"] -= ["+e.addressA+"] ("+r+" - "+t+" = "+n+")"}},{key:"disassembleMultiply",value:function(e){var t=this.processor.peek(e.addressA),r=this.processor.peek(e.addressA),n=(t*r).toFixed(7);return"[09] = ["+e.addressA+"] * ["+e.addressB+"] ("+t+" * "+r+" = "+n+")"}},{key:"disassembleDivide",value:function(e){var t=this.processor.peek("09"),r=this.processor.peek(e.addressA),n=this.formatNumberResult(t/r),s=this.formatNumberResult(t%r);return"["+e.addressB+"] = [09] / ["+e.addressA+"] ("+t+" / "+r+" = "+n+"); [09] = [09] % ["+e.addressA+"] ("+t+" % "+r+" = "+s+")"}},{key:"formatNumberResult",value:function(e){return Number(e.toFixed(7)).toString()}}]),e}(),_=function(e){_inherits(r,e);var t=_createSuper(r);function r(e){var n;_classCallCheck(this,r),(n=t.call(this,e)).isSingleStepping=!0,n.isSingleStepDone=!0,n.processor=new v,n.disassembler=new C(n.processor),n.loadExampleProgram1(),n.disassembleNextInstruction();var s=new o.a(c.a.createCase(new u.a(.25,.05,.25)),e.gl),a=new o.a(m.createMemoryUnit(),e.gl),i=new o.a(c.a.createBox(new u.a(.0025,.003,.0036)),e.gl),d=n.createMemoryUnitNode(s,a,i,new u.a(-.5,1,0)),l=n.createMemoryUnitNode(s,a,i,new u.a(-.5,.5,0)),h=n.createMemoryUnitNode(s,a,i,new u.a(-.5,0,0)),p=n.createMemoryUnitNode(s,a,i,new u.a(-.5,-.5,0)),f=n.createMemoryUnitNode(s,a,i,new u.a(-1,1,0)),b=n.createMemoryUnitNode(s,a,i,new u.a(-1,.5,0)),y=n.createMemoryUnitNode(s,a,i,new u.a(-1,0,0)),k=n.createMemoryUnitNode(s,a,i,new u.a(-1,-.5,0)),g=n.createMemoryUnitNode(s,a,i,new u.a(-1.5,1,0));return n.memoryBanks=[d,l,h,p,f,b,y,k,g],n.nodes=n.memoryBanks,n.light.position=new u.a(.5,2,.5),n.camera.eye=new u.a(0,.5,3.3),n.camera.target=new u.a(0,.25,0),n.clearColor=[.1,.1,.1,1],n}return _createClass(r,[{key:"createMemoryUnitNode",value:function(e,t,r,n){return new w(e,t,r,n,this.renderingContext)}},{key:"loadExampleProgram1",value:function(){this.processor.setTape(1,"[1]\n20900\n21000\n22000\n23000\n24000\n25000\n10110\n+10000000\n10120\n+01000000\n10130\n+15500000\n03202\n02102\n"),this.processor.setTape(2,"[2]\n11040\n51040\n07300\n11001\n07400\n10901\n12010\n13040\n31040\n01140\n24000\n20900\n05202\n05202\n00100\n")}},{key:"loadExampleProgram2",value:function(){this.processor.setTape(1,"[1]\n20900\n21000\n22000\n23000\n24000\n25000\n10110\n+05000000\n10120\n+90000000\n10130\n+10000000\n10140\n+20000000\n11050\n03202\n02102\n"),this.processor.setTape(2,"[2]\n07400\n11001\n33020\n01220\n05303\n02203\n25009\n64050\n20900\n15010\n03202\n"),this.processor.setTape(3,"[3]\n00100\n")}},{key:"draw",value:function(e){_get(_getPrototypeOf(r.prototype),"draw",this).call(this,e),this.runProcessorForFrame(),this.copyStateToRenderObject(),this.renderingContext.standardShader.use(),this.nodes.forEach((function(e){e.draw()}))}},{key:"stepProcessor",value:function(){this.isSingleStepDone=!1}},{key:"runProcessor",value:function(){this.isSingleStepping=!this.isSingleStepping}},{key:"runProcessorForFrame",value:function(){this.isSingleStepping?this.isSingleStepDone||(this.processor.step(),this.disassembleNextInstruction(),this.isSingleStepDone=!0):(this.processor.step(),this.disassembleNextInstruction()),this.processor.state.finished&&(this.isSingleStepping=!0)}},{key:"copyStateToRenderObject",value:function(){for(var e=0;e<9;e++)for(var t=this.memoryBanks[e],r=0;r<10;r++){var n=t.registers[r],s=String(10*(e+1)+r);n.value=this.processor.peek(s)}}},{key:"disassembleNextInstruction",value:function(){var e=this.processor.currentTape.peekEntry();this.nextInstructionText=this.processor.state.finished?"(finished)":this.disassembler.disassemble(e),console.log(this.nextInstructionText)}}]),r}(d.a),A=r("4u2P"),P=r("fXoL"),N=r("jhN1"),I=r("S8xs");function O(e,t){if(1&e&&(P.Jb(0,"p",12),P.bc(1),P.Ib()),2&e){var r=t.$implicit;P.wb(1),P.cc(r)}}var E,T,S,R=[{path:"",component:(E=function(){function e(t){_classCallCheck(this,e),this.isOrtographicProjection=!1,t.setTitle("Harwell Dekatron")}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this.appCanvas.surface.nativeElement.getContext("webgl");if(e){var t=new A.a(e);this.scene=new _(t),this.appCanvas.setScene(this.scene)}}},{key:"onStep",value:function(){this.scene.stepProcessor()}},{key:"onRun",value:function(){this.scene.runProcessor()}},{key:"onChangeOrtographicProjection",value:function(){this.isOrtographicProjection=!this.isOrtographicProjection,this.scene.camera.orthographic=this.isOrtographicProjection}}]),e}(),E.\u0275fac=function(e){return new(e||E)(P.Gb(N.b))},E.\u0275cmp=P.Ab({type:E,selectors:[["harwell-component"]],viewQuery:function(e,t){var r;1&e&&P.Zb(i.a,!0),2&e&&P.Wb(r=P.Qb())&&(t.appCanvas=r.first)},decls:35,vars:9,consts:[["id","bodyContainer"],["id","leftPanel"],[3,"isAnimated"],[3,"isOpen"],["accordion-heading","","type","button",1,"btn","btn-link","btn-block","clearfix"],[1,"badge","badge-arrow","float-left"],[1,"float-left"],[1,"btn-toolbar","mb-2"],["type","button",1,"btn","btn-primary","mr-2",3,"disabled","click"],[2,"min-height","3em"],["class","mb-0",4,"ngFor","ngForOf"],["value","ds","type","checkbox",3,"checked","change"],[1,"mb-0"]],template:function(e,t){1&e&&(P.Jb(0,"div",0),P.Jb(1,"div",1),P.Jb(2,"accordion",2),P.Jb(3,"accordion-group",3),P.Jb(4,"button",4),P.Jb(5,"span",5),P.bc(6,"\u2b9e"),P.Ib(),P.Jb(7,"span",6),P.bc(8,"Control"),P.Ib(),P.Ib(),P.Jb(9,"div",7),P.Jb(10,"button",8),P.Pb("click",(function(){return t.onStep()})),P.bc(11,"Step"),P.Ib(),P.Jb(12,"button",8),P.Pb("click",(function(){return t.onRun()})),P.bc(13),P.Ib(),P.Hb(14,"br"),P.Ib(),P.Hb(15,"div"),P.Jb(16,"p",9),P.bc(17),P.Ib(),P.Ib(),P.Jb(18,"accordion-group",3),P.Jb(19,"button",4),P.Jb(20,"span",5),P.bc(21,"\u2b9e"),P.Ib(),P.Jb(22,"span",6),P.bc(23,"Output"),P.Ib(),P.Ib(),P.ac(24,O,2,1,"p",10),P.Ib(),P.Jb(25,"accordion-group"),P.Jb(26,"button",4),P.Jb(27,"span",5),P.bc(28,"\u2b9e"),P.Ib(),P.Jb(29,"span",6),P.bc(30,"Settings"),P.Ib(),P.Ib(),P.Jb(31,"label"),P.Jb(32,"input",11),P.Pb("change",(function(){return t.onChangeOrtographicProjection()})),P.Ib(),P.bc(33," Orthographic projection "),P.Ib(),P.Ib(),P.Ib(),P.Ib(),P.Hb(34,"app-canvas"),P.Ib()),2&e&&(P.wb(2),P.Ub("isAnimated",!0),P.wb(1),P.Ub("isOpen",!0),P.wb(7),P.Ub("disabled",t.scene.processor.state.finished),P.wb(2),P.Ub("disabled",t.scene.processor.state.finished),P.wb(1),P.dc(" ",t.scene.isSingleStepping?"Run":"Stop"," "),P.wb(4),P.dc("Next: ",t.scene.nextInstructionText,""),P.wb(1),P.Ub("isOpen",!0),P.wb(6),P.Ub("ngForOf",t.scene.processor.output),P.wb(8),P.Ub("checked",t.isOrtographicProjection))},directives:[I.a,I.c,s.i,i.a],styles:["#leftPanel[_ngcontent-%COMP%]{width:350px;height:768px;float:left;overflow-y:auto;white-space:normal}#bodyContainer[_ngcontent-%COMP%]{white-space:nowrap}.badge-arrow[_ngcontent-%COMP%]{margin-top:4px;transition-duration:.2s;transition-property:transform}.panel-open[_ngcontent-%COMP%]   .badge-arrow[_ngcontent-%COMP%]{transform:rotate(90deg)}ul[_ngcontent-%COMP%]{padding-left:25px}.gear-group-a[_ngcontent-%COMP%]{background-color:#99801a}.gear-group-l[_ngcontent-%COMP%]{background-color:#e6801a}.gear-group-n[_ngcontent-%COMP%]{background-color:#40bf4d}.gear-group-o[_ngcontent-%COMP%]{background-color:#fff}.gear-group-p[_ngcontent-%COMP%]{background-color:#80bf33}.gear-group-e[_ngcontent-%COMP%]{background-color:#7366b3}.gear-group-h[_ngcontent-%COMP%]{background-color:#a666b3}.gear-group-c[_ngcontent-%COMP%]{background-color:#80bfe6}.gear-group-k[_ngcontent-%COMP%]{background-color:#73ccbf}"]}),E)}],x=((T=function e(){_classCallCheck(this,e)}).\u0275mod=P.Eb({type:T}),T.\u0275inj=P.Db({factory:function(e){return new(e||T)},imports:[[a.a.forChild(R)],a.a]}),T),M=r("YP2Z"),B=((S=function e(){_classCallCheck(this,e)}).\u0275mod=P.Eb({type:S}),S.\u0275inj=P.Db({factory:function(e){return new(e||S)},imports:[[s.b,x,M.a,I.b.forRoot()]]}),S)}}]);
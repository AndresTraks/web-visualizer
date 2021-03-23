function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _get(t,e,r){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=_superPropBase(t,e);if(n){var s=Object.getOwnPropertyDescriptor(n,e);return s.get?s.get.call(r):s.value}})(t,e,r||t)}function _superPropBase(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_getPrototypeOf(t)););return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var r,n=_getPrototypeOf(t);if(e){var s=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,s=!1,a=void 0;try{for(var i,o=t[Symbol.iterator]();!(n=(i=o.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(c){s=!0,a=c}finally{try{n||null==o.return||o.return()}finally{if(s)throw a}}return r}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _createForOfIteratorHelper(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=_unsupportedIterableToArray(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,s,a=!0,i=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){i=!0,s=t},f:function(){try{a||null==n.return||n.return()}finally{if(i)throw s}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1MA0":function(t,e,r){"use strict";r.r(e),r.d(e,"HarwellModule",(function(){return H}));var n,s,a,i=r("ofXK"),o=r("tyNb"),c=r("JKqQ"),u=r("NCiM"),h=r("kCbX"),l=r("uhFJ"),d=r("7G6I"),f=function(){function t(){_classCallCheck(this,t),this.data=new Map;for(var e=0;e<=99;e++)this.data[e]=0;this.tapeNumber=1,this.shiftPosition=0}return _createClass(t,[{key:"get",value:function(t){return this.data[t]}},{key:"add",value:function(t,e){var r=this.data[t]+e;0!==this.shiftPosition&&(r*=Math.pow(10,this.shiftPosition),this.shiftPosition=0);var n=Math.trunc(r);if(this.data[t]=n,9==t){var s=Math.round(Math.abs(1e8*r)%1e8);this.data[8]=s}}},{key:"subtract",value:function(t,e){var r=this.data[t]-e;0!==this.shiftPosition&&(r*=Math.pow(10,this.shiftPosition),this.shiftPosition=0);var n=Math.trunc(r);if(this.data[t]=n,9==t){var s=Math.round(Math.abs(1e8*r)%1e8);this.data[8]=s}}},{key:"multiply",value:function(t,e){var r=this.get(t)*this.get(e),n=Math.abs(10*r)%1e7,s=Math.trunc(r/1e7);this.data[8]=n,this.data[9]=s,this.clear(e)}},{key:"divide",value:function(t,e){var r=this.get(t)/1e7,n=Math.trunc(this.get(9)/r),s=Math.trunc(this.get(9)%r);this.data[e]=n,this.data[9]=s}},{key:"clear",value:function(t){this.data[t]=0,9==t&&(this.data[8]=0)}}]),t}(),p=function(){function t(){_classCallCheck(this,t)}return _createClass(t,null,[{key:"getOperation",value:function(e){return Math.trunc(t.getOrderCode(e)/1e4)}},{key:"getAddressA",value:function(e){return Math.trunc(t.getOrderCode(e)/100)%100}},{key:"getAddressB",value:function(e){return t.getOrderCode(e)%100}},{key:"getOrderCode",value:function(t){return Math.trunc(t/1e3)}}]),t}(),b=function(){function t(e,r){_classCallCheck(this,t),this.entries=e,this.blockEntryIndices=r,this.index=0;var n,s=_createForOfIteratorHelper(r);try{for(s.s();!(n=s.n()).done;){var a=_slicedToArray(n.value,2),i=a[0];if(a[1]===this.index){this.blockNumber=i;break}}}catch(o){s.e(o)}finally{s.f()}}return _createClass(t,[{key:"searchBlock",value:function(t){if(!this.blockEntryIndices.has(t))throw new Error("Block not found on tape after full loop");this.index=this.blockEntryIndices.get(t),this.blockNumber=t}},{key:"read",value:function(){var t=this.peek();return this.index++,this.index>=this.entries.length&&(this.index=0),t}},{key:"peek",value:function(){if(0===this.entries.length)throw new Error("No entry on tape to read.");return this.entries[this.index]}},{key:"peekAhead",value:function(){return this.peekAt(this.index===this.entries.length-1?0:this.index+1)}},{key:"peekAt",value:function(t){if(0===this.entries.length)throw new Error("No entry on tape to read.");return this.entries[t]}}]),t}(),g=function(){function t(){_classCallCheck(this,t),this.tapes=new Map,this.state=new f,this.output=[""]}return _createClass(t,[{key:"setProgram",value:function(t){this.tapes=function(){function t(){_classCallCheck(this,t)}return _createClass(t,null,[{key:"assemble",value:function(t){var e=new Map,r=1,n=[],s=new Map;return t.split("\n").forEach((function(t){if(t.startsWith(";"));else if(t.startsWith("#")){var a=Number(t.substr(1));s.set(a,n.length)}else if(t.startsWith("[")&&t.endsWith("]")){var i=Number(t.substr(1,t.length-2));s.set(i,n.length)}else if("==tape"==t)0!==n.length&&(e[r]=new b(n,s),r++,n=[],s=new Map);else if(5===t.length){var o=1e3*Number(t);n.push(o)}else if(9===t.length){var c=Number(t);n.push(c)}})),e[r]=new b(n,s),e}}]),t}().assemble(t)}},{key:"peekNextEntry",value:function(){return this.state.tapeNumber>7?this.state.get(this.state.tapeNumber):this.currentTape.peek()}},{key:"readNextEntry",value:function(){if(this.state.tapeNumber>7){var t=this.state.get(this.state.tapeNumber);return this.state.tapeNumber++,t}return this.currentTape.read()}},{key:"step",value:function(){if(!this.state.finished){var t=this.readNextEntry(),e=p.getOperation(t),r=p.getAddressA(t),n=p.getAddressB(t);switch(e){case 0:this.control(r,n);break;case 1:this.add(r,n);break;case 2:this.addAndClear(r,n);break;case 3:this.subtract(r,n);break;case 4:this.subtractAndClear(r,n);break;case 5:this.multiply(r,n);break;case 6:this.divide(r,n);break;case 7:this.transferPositiveModulus(r,n);break;default:throw new Error("Unknown order "+p.getOrderCode(t))}}}},{key:"control",value:function(t,e){if(t>=30&&t<=39)this.searchBlock(t%10,e);else if(t>=50&&t<=59)this.state.yes&&this.searchBlock(t%10,e);else if(t>=70&&t<=79)this.state.printLayout=t%10;else{if(!(t>=81&&t<=89)){switch(t){case 1:0===e&&this.finish();case 11:return void this.testPositive(e);case 12:return void this.testNegative(e);case 21:return void this.transferControl(e);case 22:return void(this.state.yes&&this.transferControl(e))}throw new Error("Unknown control instruction 0"+t+e)}this.state.shiftPosition=-t%10+2}}},{key:"add",value:function(t,e){var r=this.read(t);1!==e?this.state.add(e,r):this.print(r)}},{key:"addAndClear",value:function(t,e){this.add(t,e),this.state.clear(t)}},{key:"subtract",value:function(t,e){var r=this.read(t);1!==e?this.state.subtract(e,r):this.print(r)}},{key:"subtractAndClear",value:function(t,e){this.subtract(t,e),this.state.clear(t)}},{key:"multiply",value:function(t,e){this.state.multiply(t,e)}},{key:"divide",value:function(t,e){this.state.divide(t,e)}},{key:"transferPositiveModulus",value:function(t,e){this.peek(t)<0?this.subtract(t,e):this.add(t,e)}},{key:"testPositive",value:function(t){this.state.yes=this.read(t)>0}},{key:"testNegative",value:function(t){this.state.yes=this.read(t)<0}},{key:"searchBlock",value:function(t,e){this.tapes[e].searchBlock(t)}},{key:"transferControl",value:function(t){this.state.tapeNumber=t}},{key:"finish",value:function(){this.state.finished=!0}},{key:"print",value:function(t){var e=(t<0?"":"+")+(t/1e7).toFixed(7);switch(this.state.printLayout){case 0:this.output.push("","","","","");break;case 3:this.output[this.output.length-1]+=e+"   ";break;case 4:this.output[this.output.length-1]+=e,this.output.push("")}}},{key:"peek",value:function(t){return t>0&&t<8?this.tapes[t].peekData():this.state.get(t)}},{key:"peekAhead",value:function(t){return t>0&&t<8?this.tapes[t].peekAhead():this.peek(t)}},{key:"read",value:function(t){return t>0&&t<8?this.tapes[t].read():this.state.get(t)}},{key:"currentTape",get:function(){return this.state.tapeNumber>7?null:this.tapes[this.state.tapeNumber]}},{key:"currentBlockNumber",get:function(){return null!=this.currentTape?this.currentTape.blockNumber:null}}]),t}(),v=r("FCAv"),y=r("+pcE"),m=((s=function(t){_inherits(r,t);var e=_createSuper(r);function r(t,n,s){var a;return _classCallCheck(this,r),(a=e.call(this,s)).renderingContext=s,a.statusFlag=!1,a.activeColorValue=r.activeRegisterColor,a.passiveColorValue=r.passiveRegisterColor,a.meshes=[t],a.color=a.passiveColor,a.program=s.emitterShader,a.position=n,a.worldTransform=v.a.translation(a.position),a}return _createClass(r,[{key:"status",get:function(){return this.statusFlag},set:function(t){this.statusFlag=t,this.color=this.statusFlag?this.activeColorValue:this.passiveColorValue}},{key:"activeColor",get:function(){return this.activeColorValue},set:function(t){this.activeColorValue=t,this.statusFlag&&(this.color=this.activeColorValue)}},{key:"passiveColor",get:function(){return this.passiveColorValue},set:function(t){this.passiveColorValue=t,this.statusFlag||(this.color=this.passiveColorValue)}}]),r}(y.a)).activeRegisterColor=[1,1,1,1],s.passiveRegisterColor=[.2,.2,.2,1],s.passiveStoreColor=[0,.2,0,1],s.activeStoreColor=[0,1,0,1],s.passiveReadColor=[.2,0,0,1],s.activeReadColor=[1,0,0,1],s),k=((n=function(t){_inherits(r,t);var e=_createSuper(r);function r(t,n){var s;return _classCallCheck(this,r),(s=e.call(this,n)).renderingContext=n,s.meshes=[t],s.color=r.passiveColor,s.program=n.emitterShader,s.position=l.a.zero,s}return _createClass(r,[{key:"digit",get:function(){return this.currentDigit},set:function(t){if(this.currentDigit!==t){this.currentDigit=t;var e=t*(2*Math.PI/10);this.worldTransform=v.a.rotationX(Math.PI/2).multiply(v.a.translation(new l.a(0,.0095,0))).multiply(v.a.rotationZ(e)).multiply(v.a.translation(this.position))}}}]),r}(y.a)).activeColor=[1,.2,.2,1],n.passiveColor=[.6,.12,.12,1],n),w=function(){function t(e){_classCallCheck(this,t),this.isActive=!1,this.indicators=e,this.hasSignDigit=9===e.length}return _createClass(t,[{key:"getSignDigit",value:function(){return this.currentValue>=0?0:9}},{key:"getDigit",value:function(t){return Math.round(Math.abs(this.currentValue)/Math.pow(10,7-t))%10}},{key:"setActive",value:function(t){if(this.isActive!==t){this.isActive=t;var e,r=_createForOfIteratorHelper(this.indicators);try{for(r.s();!(e=r.n()).done;){e.value.color=t?k.activeColor:k.passiveColor}}catch(n){r.e(n)}finally{r.f()}}}},{key:"value",set:function(t){if(this.currentValue!==t)if(null==t?(this.setActive(!1),t=0):this.setActive(!0),this.currentValue=t,this.hasSignDigit){this.indicators[0].digit=this.getSignDigit();for(var e=0;e<8;e++)this.indicators[e+1].digit=this.getDigit(e)}else for(var r=0;r<8;r++)this.indicators[r].digit=this.getDigit(r)}}]),t}(),C=((a=function(t){_inherits(r,t);var e=_createSuper(r);function r(){return _classCallCheck(this,r),e.apply(this,arguments)}return _createClass(r,null,[{key:"createTube",value:function(t,e){for(var r=2*Math.PI/10,n=[],s=0,a=0;a<10;a++){var i=new l.a(t*Math.cos(s),0,t*Math.sin(s)),o=new l.a(t*Math.cos(s),-e,t*Math.sin(s)),c=new l.a(0,-e,0),u=l.a.zero;s+=r;var h=new l.a(t*Math.cos(s),0,t*Math.sin(s)),d=new l.a(t*Math.cos(s),-e,t*Math.sin(s));this.pushTriangle(n,i,u,h),this.pushTriangle(n,c,o,d),this.pushTriangle(n,i,h,o),this.pushTriangle(n,o,h,d)}return n}},{key:"createTubeRow",value:function(t){for(var e=[],r=this.createTube(this.tubeRadius,this.tubeHeight),n=new l.a(-.23,0,t),s=0;s<5;s++)this.appendWithOffset(e,r,n),n.x+=this.tubeDistance;n.x+=this.memoryRegisterMiddleGap;for(var a=0;a<4;a++)this.appendWithOffset(e,r,n),n.x+=this.tubeDistance;return e}},{key:"createAccumulatorTubeRow",value:function(){for(var t=[],e=this.createTube(this.tubeRadius,this.tubeHeight),r=new l.a(-.15,0,.1),n=0;n<8;n++)this.appendWithOffset(t,e,r),r.x+=this.tubeDistance;return t}},{key:"createMemoryUnit",value:function(){for(var t=[],e=0;e<5;e++){var r=this.createTubeRow(e*this.tubeDistance-.22);this.append(t,r)}for(var n=5;n<10;n++){var s=this.createTubeRow(n*this.tubeDistance-.165);this.append(t,s)}return t}},{key:"createAccumulator",value:function(){return this.createAccumulatorTubeRow()}}]),r}(h.a)).tubeDistance=.0425,a.tubeRadius=.015,a.tubeHeight=.05,a.memoryRegisterMiddleGap=.1,a),S=function(t){_inherits(r,t);var e=_createSuper(r);function r(t,n,s,a,i,o){var c;_classCallCheck(this,r),(c=e.call(this,o)).position=i;var d=y.a.withMesh(t,o);d.color=[.5,.5,.5,1],d.worldTransform=v.a.rotationX(Math.PI/2).multiply(v.a.translation(i));var f=y.a.withMesh(new u.a(h.a.createBox(new l.a(.25,.25,.1)),c.gl),o);f.color=[.5,.5,.5,1],f.worldTransform=v.a.translation(i.add(new l.a(0,0,-.15)));var p=y.a.withMesh(n,o);p.color=[.2,.2,.2,1],p.worldTransform=v.a.rotationX(Math.PI/2).multiply(v.a.translation(i));var b=y.a.withMesh(new u.a(h.a.createBox(new l.a(.05,.035,.02)),c.gl),o);return b.color=[.2,.2,.2,1],b.worldTransform=v.a.translation(i.add(new l.a(.01,0,0))),c.children=[d,f,p,b],c.createRegisters(s,o),c.createStatusLights(a,o),c}return _createClass(r,[{key:"createStatusLights",value:function(t,e){this.storeStatusLight=this.createStatusLight(this.position.add(new l.a(-.02,.015,.02)),t,e),this.storeStatusLight.activeColor=m.activeStoreColor,this.storeStatusLight.passiveColor=m.passiveStoreColor,this.readStatusLight=this.createStatusLight(this.position.add(new l.a(.04,.015,.02)),t,e),this.readStatusLight.activeColor=m.activeReadColor,this.readStatusLight.passiveColor=m.passiveReadColor,this.statusLights=[this.createStatusLight(this.position.add(new l.a(0,.015,.02)),t,e),this.createStatusLight(this.position.add(new l.a(.02,.015,.02)),t,e),this.createStatusLight(this.position.add(new l.a(-.02,0,.02)),t,e),this.createStatusLight(this.position.add(new l.a(0,0,.02)),t,e),this.createStatusLight(this.position.add(new l.a(.02,0,.02)),t,e),this.createStatusLight(this.position.add(new l.a(.04,0,.02)),t,e),this.createStatusLight(this.position.add(new l.a(-.02,-.015,.02)),t,e),this.createStatusLight(this.position.add(new l.a(0,-.015,.02)),t,e),this.createStatusLight(this.position.add(new l.a(.02,-.015,.02)),t,e),this.createStatusLight(this.position.add(new l.a(.04,-.015,.02)),t,e)]}},{key:"createStatusLight",value:function(t,e,r){return new m(e,t,r)}},{key:"createRegisters",value:function(t,e){this.registers=[];for(var r=this.position.add(new l.a(-.23,-.2175,0)),n=0;n<5;n++){var s=this.createIndicators(t,e),a=new w(s);this.setIndicatorPositions(a,r),this.registers[n]=a,r=r.add(new l.a(0,C.tubeDistance,0))}r=r.add(new l.a(0,.055,0));for(var i=5;i<10;i++){var o=this.createIndicators(t,e),c=new w(o);this.setIndicatorPositions(c,r),this.registers[i]=c,r=r.add(new l.a(0,C.tubeDistance,0))}}},{key:"createIndicators",value:function(t,e){for(var r=[],n=0;n<9;n++)r[n]=new k(t,e);return r}},{key:"setIndicatorPositions",value:function(t,e){for(var r=e.copy(),n=0;n<5;n++)t.indicators[n].position=r.copy(),r.x+=C.tubeDistance;r.x+=C.memoryRegisterMiddleGap;for(var s=5;s<9;s++)t.indicators[s].position=r.copy(),r.x+=C.tubeDistance}},{key:"draw",value:function(){this.children.forEach((function(t){t.draw()})),this.renderingContext.emitterShader.use(),this.registers.forEach((function(t){var e,r=_createForOfIteratorHelper(t.indicators);try{for(r.s();!(e=r.n()).done;){e.value.draw()}}catch(n){r.e(n)}finally{r.f()}})),this.storeStatusLight.draw(),this.readStatusLight.draw(),this.statusLights.forEach((function(t){t.draw()})),this.renderingContext.standardShader.use()}}]),r}(y.a),_=function(){function t(e){_classCallCheck(this,t),this.processor=e}return _createClass(t,[{key:"disassemble",value:function(t){return(t/1e3).toString().padStart(5,"0")+" "+this.disassembleInstruction(t)}},{key:"disassembleInstruction",value:function(t){switch(p.getOperation(t)){case 0:return this.disassembleControl(t);case 1:return this.disassembleAdd(t);case 2:return this.disassembleAddAndClear(t);case 3:return this.disassembleSubtract(t);case 4:return this.disassembleSubtractAndClear(t);case 5:return this.disassembleMultiply(t);case 6:return this.disassembleDivide(t);case 7:return this.disassembleTransferPositiveModulus(t);default:throw new Error("Unknown order "+p.getOrderCode(t))}}},{key:"disassembleControl",value:function(t){var e=p.getAddressA(t),r=p.getAddressB(t);if(e>=30&&e<=39)return"SEARCH for block "+e%10+" on tape "+r;if(e>=50&&e<=59)return"CONDITIONAL SEARCH for block "+e%10+" on tape "+r+" ("+(this.processor.state.yes?"YES":"NO")+")";if(e>=70&&e<=79)return"PRINT LAYOUT "+e%10;if(e>=81&&e<=89){var n=-e%10+2;return"SELECT SHIFT POSITION "+String.fromCharCode("A".charCodeAt(0)-n+1)+" (10^"+n+")"}switch(e){case 1:if(0===r)return"FINISH";case 11:return"TEST POSITIVE ["+r+"] ("+this.format(this.processor.peek(r))+")";case 12:return"TEST NEGATIVE ["+r+"] ("+this.format(this.processor.peek(r))+")";case 21:return"TRANSFER to "+(r<10?"tape ":"")+r;case 22:return"CONDITIONAL TRANSFER to "+r+" ("+(this.processor.state.yes?"YES":"NO")+")";case 85:return"SHIFT";default:throw new Error("Unknown control order "+p.getOrderCode(t))}}},{key:"disassembleAdd",value:function(t){var e=p.getAddressA(t),r=p.getAddressB(t),n=this.processor.peekAhead(e),s=this.format(n);if(1===r)return"PRINT ["+e+"] ("+s+")";var a=this.processor.peek(r);return"["+r+"] += ["+e+"] ("+this.format(a)+" + "+s+" = "+this.format(a+n)+")"}},{key:"disassembleAddAndClear",value:function(t){var e=p.getAddressA(t),r=p.getAddressB(t),n=this.processor.peekAhead(e),s=this.format(n);if(0===r)return"CLEAR ["+e+"] ("+s+")";if(1===r)return"PRINT ["+e+"] ("+s+")";var a=this.processor.peek(r);return"["+r+"] += ["+e+"]; CLEAR ["+e+"] ("+this.format(a)+" + "+s+" = "+this.format(a+n)+")"}},{key:"disassembleSubtract",value:function(t){var e=p.getAddressA(t),r=p.getAddressB(t),n=this.processor.peekAhead(e),s=this.format(n);if(0===r)return"CLEAR ["+e+"] ("+s+")";if(1===r)return"PRINT ["+e+"] ("+s+")";var a=this.processor.peek(r);return"["+r+"] -= ["+e+"]; CLEAR ["+e+"] ("+this.format(a)+" - "+s+" = "+this.format(a-n)+")"}},{key:"disassembleSubtractAndClear",value:function(t){var e=p.getAddressA(t),r=p.getAddressB(t),n=this.processor.peekAhead(e),s=this.processor.peek(r);return"["+r+"] -= ["+e+"] ("+this.format(s)+" - "+this.format(n)+" = "+this.format(s-n)+")"}},{key:"disassembleMultiply",value:function(t){var e=p.getAddressA(t),r=p.getAddressB(t),n=this.processor.peek(e),s=this.processor.peek(r);return"[09] = ["+e+"] * ["+r+"] ("+this.format(s)+" * "+this.format(s)+" = "+this.format(n*s/1e7)+")"}},{key:"disassembleDivide",value:function(t){var e=p.getAddressA(t),r=p.getAddressB(t),n=this.processor.peek(9),s=this.processor.peek(e),a=this.format(n),i=this.format(s);return"["+r+"] = [09] / ["+e+"] ("+a+" / "+i+" = "+this.format(n/s*1e7)+"); [09] = [09] % ["+e+"] ("+a+" % "+i+" = "+this.format(n%s)+")"}},{key:"disassembleTransferPositiveModulus",value:function(t){var e=p.getAddressA(t);return this.processor.peek(e)<0?"TRANSFER POSITIVE MODULUS: "+this.disassembleSubtract(t):"TRANSFER POSITIVE MODULUS: "+this.disassembleAdd(t)}},{key:"format",value:function(t){return t>=1&&t<=9?"0.000000"+t:t>=-9&&t<=-1?"-0.000000"+-t:(t/1e7).toString()}}]),t}(),A=function t(e,r,n){_classCallCheck(this,t),this.id=e,this.title=r,this.text=n},I=function(){function t(){_classCallCheck(this,t)}return _createClass(t,null,[{key:"programList",get:function(){return[new A("1","Example program 1","\n[1]\n20900\n21000\n22000\n23000\n24000\n25000\n10110\n+10000000\n10120\n+01000000\n10130\n+15500000\n03202\n02102\n\n==tape\n[2]\n11040\n51040\n07300\n11001\n07400\n10901\n12010\n13040\n31040\n01140\n24000\n20900\n05202\n00100"),new A("2","Example program 2","\n[1]\n20900\n21000\n22000\n23000\n24000\n25000\n10110\n+05000000\n10120\n+90000000\n10130\n+10000000\n10140\n+20000000\n11050\n03202\n02102\n\n==tape\n[2]\n07400\n11001\n33020\n01220\n05303\n02203\n25009\n64050\n20900\n15010\n03202\n\n==tape\n[3]\n00100")]}}]),t}(),P=function(t){_inherits(r,t);var e=_createSuper(r);function r(t,n,s,a,i){var o;_classCallCheck(this,r),(o=e.call(this,i)).position=a;var c=y.a.withMesh(t,i);c.color=[.5,.5,.5,1],c.worldTransform=v.a.rotationX(Math.PI/2).multiply(v.a.translation(a));var d=y.a.withMesh(new u.a(h.a.createBox(new l.a(.25,.25,.1)),o.gl),i);d.color=[.5,.5,.5,1],d.worldTransform=v.a.translation(a.add(new l.a(0,0,-.15)));var f=y.a.withMesh(n,i);return f.color=[.2,.2,.2,1],f.worldTransform=v.a.rotationX(Math.PI/2).multiply(v.a.translation(a)),o.children=[c,d,f],o.createRegister(s,i),o}return _createClass(r,[{key:"createRegister",value:function(t,e){var r=this.position.add(new l.a(-.15,-.1,0)),n=this.createIndicators(t,e);this.register=new w(n),this.setIndicatorPositions(r)}},{key:"createIndicators",value:function(t,e){for(var r=[],n=0;n<8;n++)r[n]=new k(t,e);return r}},{key:"setIndicatorPositions",value:function(t){for(var e=t.copy(),r=0;r<8;r++)this.register.indicators[r].position=e.copy(),e.x+=C.tubeDistance}},{key:"draw",value:function(){this.children.forEach((function(t){t.draw()})),this.renderingContext.emitterShader.use();var t,e=_createForOfIteratorHelper(this.register.indicators);try{for(e.s();!(t=e.n()).done;){t.value.draw()}}catch(r){e.e(r)}finally{e.f()}this.renderingContext.standardShader.use()}}]),r}(y.a),O=function(t){_inherits(r,t);var e=_createSuper(r);function r(t){var n;_classCallCheck(this,r),(n=e.call(this,t)).isSingleStepping=!0,n.isSingleStepDone=!0,n.isInErrorState=!1,n.programList=I.programList,n.processor=new g,n.disassembler=new _(n.processor);var s=new u.a(h.a.createCase(new l.a(.25,.05,.25)),t.gl),a=new u.a(C.createMemoryUnit(),t.gl),i=new u.a(h.a.createBox(new l.a(.0025,.003,.0036)),t.gl),o=new u.a(h.a.createBox(new l.a(.003,.003,.0036)),t.gl),c=new u.a(C.createAccumulator(),t.gl),d=n.createMemoryUnitNode(s,a,i,o,new l.a(-.5,-.5,0)),f=n.createMemoryUnitNode(s,a,i,o,new l.a(-.5,0,0)),p=n.createMemoryUnitNode(s,a,i,o,new l.a(-.5,.5,0)),b=n.createMemoryUnitNode(s,a,i,o,new l.a(-.5,1,0)),v=n.createMemoryUnitNode(s,a,i,o,new l.a(-1,-.5,0)),y=n.createMemoryUnitNode(s,a,i,o,new l.a(-1,0,0)),m=n.createMemoryUnitNode(s,a,i,o,new l.a(-1,.5,0)),k=n.createMemoryUnitNode(s,a,i,o,new l.a(-1,1,0)),w=n.createMemoryUnitNode(s,a,i,o,new l.a(-1.5,1,0));return n.accumulator8=n.createAccumulatorNode(s,c,i,new l.a(0,-.35,0)),n.accumulator9=n.createAccumulatorNode(s,c,i,new l.a(0,.5,0)),n.memoryBanks=[d,f,p,b,v,y,m,k,w],n.nodes=[].concat(_toConsumableArray(n.memoryBanks),[n.accumulator8,n.accumulator9]),n.light.position=new l.a(.5,2,.5),n.camera.eye=new l.a(0,.5,3.3),n.camera.target=new l.a(0,.25,0),n.clearColor=[.1,.1,.1,1],n.camera.orthoScaling=2.7,n.loadFirstProgram(),n}return _createClass(r,[{key:"createMemoryUnitNode",value:function(t,e,r,n,s){return new S(t,e,r,n,s,this.renderingContext)}},{key:"createAccumulatorNode",value:function(t,e,r,n){return new P(t,e,r,n,this.renderingContext)}},{key:"onProgramChange",value:function(t){var e=this.programList.find((function(e){return e.id===t}));this.processor.setProgram(e.text),this.resetProgram()}},{key:"loadFirstProgram",value:function(){this.onProgramChange(this.programList[0].id)}},{key:"resetProgram",value:function(){this.processor.output=[""],this.isSingleStepping=!0,this.isSingleStepDone=!0,this.isInErrorState=!1,this.errorText=void 0,this.processor.state.finished=!1,this.processor.state.tapeNumber=1,this.processor.state.shiftPosition=0,this.setIndicatorsPassive(),this.disassembleNextInstruction()}},{key:"draw",value:function(t){_get(_getPrototypeOf(r.prototype),"draw",this).call(this,t);try{this.isInErrorState||this.runProcessorForFrame()}catch(e){console.error(e),this.errorText=e.message,this.isInErrorState=!0}this.copyStateToRenderObject(),this.renderingContext.standardShader.use(),this.nodes.forEach((function(t){t.draw()}))}},{key:"stepProcessor",value:function(){this.isSingleStepping=!0,this.isSingleStepDone=!1}},{key:"runProcessor",value:function(){this.isSingleStepping=!this.isSingleStepping}},{key:"runProcessorForFrame",value:function(){this.isSingleStepping?this.isSingleStepDone||(this.processor.step(),this.disassembleNextInstruction(),this.isSingleStepDone=!0):(this.processor.step(),this.disassembleNextInstruction()),this.processor.state.finished&&(this.isSingleStepping=!0)}},{key:"copyStateToRenderObject",value:function(){var t=this.processor.peekNextEntry(),e=p.getOperation(t),r=p.getAddressA(t),n=p.getAddressB(t),s=0!==e,a=2===e||4===e;this.accumulator8.register.value=this.processor.peek(8),this.accumulator9.register.value=this.processor.peek(9);for(var i=0;i<9;i++){for(var o=this.memoryBanks[i],c=!1,u=!1,h=0;h<10;h++){var l=10*(i+1)+h;o.registers[h].value=this.processor.peek(l);var d=!1;s&&(l==r&&(c=!0,d=!0,a&&(u=!0,d=!0)),l==n&&(u=!0,d=!0)),o.statusLights[h].status=d}o.readStatusLight.status=c,o.storeStatusLight.status=u}}},{key:"setIndicatorsPassive",value:function(){for(var t=0;t<9;t++)for(var e=this.memoryBanks[t],r=0;r<10;r++){var n=e.registers[r];0!==n.value&&void 0!==n.value||(n.value=null)}}},{key:"disassembleNextInstruction",value:function(){var t;t=this.processor.state.tapeNumber>7?this.processor.state.get(this.processor.state.tapeNumber):this.processor.currentTape.peek(),this.nextInstructionText=this.processor.state.finished?"(finished)":this.disassembler.disassemble(t),console.log(this.nextInstructionText)}}]),r}(d.a),M=r("4u2P"),T=r("fXoL"),N=r("jhN1"),x=r("S8xs");function R(t,e){if(1&t&&(T.Jb(0,"option",18),T.bc(1),T.Ib()),2&t){var r=e.$implicit;T.Ub("value",r.id),T.wb(1),T.cc(r.title)}}function E(t,e){if(1&t&&(T.Jb(0,"p",19),T.bc(1),T.Ib()),2&t){var r=T.Rb();T.wb(1),T.cc(r.scene.errorText)}}function L(t,e){if(1&t&&(T.Jb(0,"p",13),T.bc(1),T.Hb(2,"br"),T.Ib()),2&t){var r=e.$implicit;T.wb(1),T.cc(r)}}var D,F,U,J=[{path:"",component:(D=function(){function t(e){_classCallCheck(this,t),this.isOrtographicProjection=!1,e.setTitle("Harwell Dekatron")}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this.appCanvas.surface.nativeElement.getContext("webgl");if(t){var e=new M.a(t);this.scene=new O(e),this.appCanvas.setScene(this.scene)}}},{key:"onChangeOrtographicProjection",value:function(){this.isOrtographicProjection=!this.isOrtographicProjection,this.scene.camera.orthographic=this.isOrtographicProjection}}]),t}(),D.\u0275fac=function(t){return new(t||D)(T.Gb(N.b))},D.\u0275cmp=T.Ab({type:D,selectors:[["harwell-component"]],viewQuery:function(t,e){var r;1&t&&T.Zb(c.a,!0),2&t&&T.Wb(r=T.Qb())&&(e.appCanvas=r.first)},decls:41,vars:13,consts:[["id","bodyContainer"],["id","leftPanel"],[3,"isAnimated"],[3,"isOpen"],["accordion-heading","","type","button",1,"btn","btn-link","btn-block","clearfix"],[1,"badge","badge-arrow","float-left"],[1,"float-left"],[1,"mb-3",3,"change"],[3,"value",4,"ngFor","ngForOf"],[1,"btn-toolbar","mb-3"],["type","button",1,"btn","btn-primary","mr-2",3,"disabled","click"],["type","button",1,"btn","btn-primary","mr-4",3,"disabled","click"],["type","button",1,"btn","btn-primary","mr-2",3,"click"],[1,"mb-0"],[2,"min-height","5em"],["class","text-danger",4,"ngIf"],["class","mb-0",4,"ngFor","ngForOf"],["value","ds","type","checkbox",3,"checked","change"],[3,"value"],[1,"text-danger"]],template:function(t,e){1&t&&(T.Jb(0,"div",0),T.Jb(1,"div",1),T.Jb(2,"accordion",2),T.Jb(3,"accordion-group",3),T.Jb(4,"button",4),T.Jb(5,"span",5),T.bc(6,"\u2b9e"),T.Ib(),T.Jb(7,"span",6),T.bc(8,"Control"),T.Ib(),T.Ib(),T.Jb(9,"select",7),T.Pb("change",(function(t){return e.scene.onProgramChange(t.target.value)})),T.ac(10,R,2,2,"option",8),T.Ib(),T.Jb(11,"div",9),T.Jb(12,"button",10),T.Pb("click",(function(){return e.scene.stepProcessor()})),T.bc(13,"Step"),T.Ib(),T.Jb(14,"button",11),T.Pb("click",(function(){return e.scene.runProcessor()})),T.bc(15),T.Ib(),T.Jb(16,"button",12),T.Pb("click",(function(){return e.scene.resetProgram()})),T.bc(17,"Reload "),T.Ib(),T.Hb(18,"br"),T.Ib(),T.Jb(19,"p",13),T.bc(20),T.Ib(),T.Jb(21,"p",14),T.bc(22),T.Ib(),T.ac(23,E,2,1,"p",15),T.Ib(),T.Jb(24,"accordion-group",3),T.Jb(25,"button",4),T.Jb(26,"span",5),T.bc(27,"\u2b9e"),T.Ib(),T.Jb(28,"span",6),T.bc(29,"Output"),T.Ib(),T.Ib(),T.ac(30,L,3,1,"p",16),T.Ib(),T.Jb(31,"accordion-group"),T.Jb(32,"button",4),T.Jb(33,"span",5),T.bc(34,"\u2b9e"),T.Ib(),T.Jb(35,"span",6),T.bc(36,"Settings"),T.Ib(),T.Ib(),T.Jb(37,"label"),T.Jb(38,"input",17),T.Pb("change",(function(){return e.onChangeOrtographicProjection()})),T.Ib(),T.bc(39," Orthographic projection "),T.Ib(),T.Ib(),T.Ib(),T.Ib(),T.Hb(40,"app-canvas"),T.Ib()),2&t&&(T.wb(2),T.Ub("isAnimated",!0),T.wb(1),T.Ub("isOpen",!0),T.wb(7),T.Ub("ngForOf",e.scene.programList),T.wb(2),T.Ub("disabled",e.scene.processor.state.finished),T.wb(2),T.Ub("disabled",e.scene.processor.state.finished),T.wb(1),T.dc(" ",e.scene.isSingleStepping?"Run":"Stop"," "),T.wb(5),T.ec("Tape ",e.scene.processor.state.tapeNumber,", block ",e.scene.processor.currentBlockNumber,""),T.wb(2),T.dc("Order: ",e.scene.nextInstructionText,""),T.wb(1),T.Ub("ngIf",e.scene.isInErrorState),T.wb(1),T.Ub("isOpen",!0),T.wb(6),T.Ub("ngForOf",e.scene.processor.output),T.wb(8),T.Ub("checked",e.isOrtographicProjection))},directives:[x.a,x.c,i.i,i.j,c.a],styles:["#leftPanel[_ngcontent-%COMP%]{width:350px;height:768px;float:left;overflow-y:auto;white-space:normal}#bodyContainer[_ngcontent-%COMP%]{white-space:nowrap}.badge-arrow[_ngcontent-%COMP%]{margin-top:4px;transition-duration:.2s;transition-property:transform}.panel-open[_ngcontent-%COMP%]   .badge-arrow[_ngcontent-%COMP%]{transform:rotate(90deg)}ul[_ngcontent-%COMP%]{padding-left:25px}.gear-group-a[_ngcontent-%COMP%]{background-color:#99801a}.gear-group-l[_ngcontent-%COMP%]{background-color:#e6801a}.gear-group-n[_ngcontent-%COMP%]{background-color:#40bf4d}.gear-group-o[_ngcontent-%COMP%]{background-color:#fff}.gear-group-p[_ngcontent-%COMP%]{background-color:#80bf33}.gear-group-e[_ngcontent-%COMP%]{background-color:#7366b3}.gear-group-h[_ngcontent-%COMP%]{background-color:#a666b3}.gear-group-c[_ngcontent-%COMP%]{background-color:#80bfe6}.gear-group-k[_ngcontent-%COMP%]{background-color:#73ccbf}"]}),D)}],j=((F=function t(){_classCallCheck(this,t)}).\u0275mod=T.Eb({type:F}),F.\u0275inj=T.Db({factory:function(t){return new(t||F)},imports:[[o.a.forChild(J)],o.a]}),F),B=r("YP2Z"),H=((U=function t(){_classCallCheck(this,t)}).\u0275mod=T.Eb({type:U}),U.\u0275inj=T.Db({factory:function(t){return new(t||U)},imports:[[i.b,j,B.a,x.b.forRoot()]]}),U)}}]);
function Tp(s,d){for(var l=0;l<d.length;l++){const m=d[l];if(typeof m!="string"&&!Array.isArray(m)){for(const c in m)if(c!=="default"&&!(c in s)){const p=Object.getOwnPropertyDescriptor(m,c);p&&Object.defineProperty(s,c,p.get?p:{enumerable:!0,get:()=>m[c]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))m(c);new MutationObserver(c=>{for(const p of c)if(p.type==="childList")for(const f of p.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&m(f)}).observe(document,{childList:!0,subtree:!0});function l(c){const p={};return c.integrity&&(p.integrity=c.integrity),c.referrerPolicy&&(p.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?p.credentials="include":c.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function m(c){if(c.ep)return;c.ep=!0;const p=l(c);fetch(c.href,p)}})();function mu(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var vi={exports:{}},Go={},yi={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dc;function Op(){if(Dc)return ce;Dc=1;var s=Symbol.for("react.element"),d=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),j=Symbol.iterator;function E(N){return N===null||typeof N!="object"?null:(N=j&&N[j]||N["@@iterator"],typeof N=="function"?N:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,z={};function L(N,T,ae){this.props=N,this.context=T,this.refs=z,this.updater=ae||_}L.prototype.isReactComponent={},L.prototype.setState=function(N,T){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,T,"setState")},L.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function O(){}O.prototype=L.prototype;function q(N,T,ae){this.props=N,this.context=T,this.refs=z,this.updater=ae||_}var D=q.prototype=new O;D.constructor=q,F(D,L.prototype),D.isPureReactComponent=!0;var $=Array.isArray,X=Object.prototype.hasOwnProperty,J={current:null},H={key:!0,ref:!0,__self:!0,__source:!0};function ie(N,T,ae){var oe,le={},de=null,ve=null;if(T!=null)for(oe in T.ref!==void 0&&(ve=T.ref),T.key!==void 0&&(de=""+T.key),T)X.call(T,oe)&&!H.hasOwnProperty(oe)&&(le[oe]=T[oe]);var he=arguments.length-2;if(he===1)le.children=ae;else if(1<he){for(var Ce=Array(he),ra=0;ra<he;ra++)Ce[ra]=arguments[ra+2];le.children=Ce}if(N&&N.defaultProps)for(oe in he=N.defaultProps,he)le[oe]===void 0&&(le[oe]=he[oe]);return{$$typeof:s,type:N,key:de,ref:ve,props:le,_owner:J.current}}function ue(N,T){return{$$typeof:s,type:N.type,key:T,ref:N.ref,props:N.props,_owner:N._owner}}function ge(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function $e(N){var T={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ae){return T[ae]})}var _e=/\/+/g;function Ee(N,T){return typeof N=="object"&&N!==null&&N.key!=null?$e(""+N.key):T.toString(36)}function Be(N,T,ae,oe,le){var de=typeof N;(de==="undefined"||de==="boolean")&&(N=null);var ve=!1;if(N===null)ve=!0;else switch(de){case"string":case"number":ve=!0;break;case"object":switch(N.$$typeof){case s:case d:ve=!0}}if(ve)return ve=N,le=le(ve),N=oe===""?"."+Ee(ve,0):oe,$(le)?(ae="",N!=null&&(ae=N.replace(_e,"$&/")+"/"),Be(le,T,ae,"",function(ra){return ra})):le!=null&&(ge(le)&&(le=ue(le,ae+(!le.key||ve&&ve.key===le.key?"":(""+le.key).replace(_e,"$&/")+"/")+N)),T.push(le)),1;if(ve=0,oe=oe===""?".":oe+":",$(N))for(var he=0;he<N.length;he++){de=N[he];var Ce=oe+Ee(de,he);ve+=Be(de,T,ae,Ce,le)}else if(Ce=E(N),typeof Ce=="function")for(N=Ce.call(N),he=0;!(de=N.next()).done;)de=de.value,Ce=oe+Ee(de,he++),ve+=Be(de,T,ae,Ce,le);else if(de==="object")throw T=String(N),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.");return ve}function h(N,T,ae){if(N==null)return N;var oe=[],le=0;return Be(N,oe,"","",function(de){return T.call(ae,de,le++)}),oe}function I(N){if(N._status===-1){var T=N._result;T=T(),T.then(function(ae){(N._status===0||N._status===-1)&&(N._status=1,N._result=ae)},function(ae){(N._status===0||N._status===-1)&&(N._status=2,N._result=ae)}),N._status===-1&&(N._status=0,N._result=T)}if(N._status===1)return N._result.default;throw N._result}var w={current:null},M={transition:null},Q={ReactCurrentDispatcher:w,ReactCurrentBatchConfig:M,ReactCurrentOwner:J};function W(){throw Error("act(...) is not supported in production builds of React.")}return ce.Children={map:h,forEach:function(N,T,ae){h(N,function(){T.apply(this,arguments)},ae)},count:function(N){var T=0;return h(N,function(){T++}),T},toArray:function(N){return h(N,function(T){return T})||[]},only:function(N){if(!ge(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ce.Component=L,ce.Fragment=l,ce.Profiler=c,ce.PureComponent=q,ce.StrictMode=m,ce.Suspense=v,ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,ce.act=W,ce.cloneElement=function(N,T,ae){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var oe=F({},N.props),le=N.key,de=N.ref,ve=N._owner;if(T!=null){if(T.ref!==void 0&&(de=T.ref,ve=J.current),T.key!==void 0&&(le=""+T.key),N.type&&N.type.defaultProps)var he=N.type.defaultProps;for(Ce in T)X.call(T,Ce)&&!H.hasOwnProperty(Ce)&&(oe[Ce]=T[Ce]===void 0&&he!==void 0?he[Ce]:T[Ce])}var Ce=arguments.length-2;if(Ce===1)oe.children=ae;else if(1<Ce){he=Array(Ce);for(var ra=0;ra<Ce;ra++)he[ra]=arguments[ra+2];oe.children=he}return{$$typeof:s,type:N.type,key:le,ref:de,props:oe,_owner:ve}},ce.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:p,_context:N},N.Consumer=N},ce.createElement=ie,ce.createFactory=function(N){var T=ie.bind(null,N);return T.type=N,T},ce.createRef=function(){return{current:null}},ce.forwardRef=function(N){return{$$typeof:g,render:N}},ce.isValidElement=ge,ce.lazy=function(N){return{$$typeof:k,_payload:{_status:-1,_result:N},_init:I}},ce.memo=function(N,T){return{$$typeof:y,type:N,compare:T===void 0?null:T}},ce.startTransition=function(N){var T=M.transition;M.transition={};try{N()}finally{M.transition=T}},ce.unstable_act=W,ce.useCallback=function(N,T){return w.current.useCallback(N,T)},ce.useContext=function(N){return w.current.useContext(N)},ce.useDebugValue=function(){},ce.useDeferredValue=function(N){return w.current.useDeferredValue(N)},ce.useEffect=function(N,T){return w.current.useEffect(N,T)},ce.useId=function(){return w.current.useId()},ce.useImperativeHandle=function(N,T,ae){return w.current.useImperativeHandle(N,T,ae)},ce.useInsertionEffect=function(N,T){return w.current.useInsertionEffect(N,T)},ce.useLayoutEffect=function(N,T){return w.current.useLayoutEffect(N,T)},ce.useMemo=function(N,T){return w.current.useMemo(N,T)},ce.useReducer=function(N,T,ae){return w.current.useReducer(N,T,ae)},ce.useRef=function(N){return w.current.useRef(N)},ce.useState=function(N){return w.current.useState(N)},ce.useSyncExternalStore=function(N,T,ae){return w.current.useSyncExternalStore(N,T,ae)},ce.useTransition=function(){return w.current.useTransition()},ce.version="18.3.1",ce}var Ic;function Fi(){return Ic||(Ic=1,yi.exports=Op()),yi.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _c;function $p(){if(_c)return Go;_c=1;var s=Fi(),d=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function f(g,v,y){var k,j={},E=null,_=null;y!==void 0&&(E=""+y),v.key!==void 0&&(E=""+v.key),v.ref!==void 0&&(_=v.ref);for(k in v)m.call(v,k)&&!p.hasOwnProperty(k)&&(j[k]=v[k]);if(g&&g.defaultProps)for(k in v=g.defaultProps,v)j[k]===void 0&&(j[k]=v[k]);return{$$typeof:d,type:g,key:E,ref:_,props:j,_owner:c.current}}return Go.Fragment=l,Go.jsx=f,Go.jsxs=f,Go}var Fc;function Bp(){return Fc||(Fc=1,vi.exports=$p()),vi.exports}var r=Bp(),C=Fi();const pu=mu(C),Vp=Tp({__proto__:null,default:pu},[C]);var ln={},bi={exports:{}},aa={},ji={exports:{}},Ci={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tc;function qp(){return Tc||(Tc=1,(function(s){function d(M,Q){var W=M.length;M.push(Q);e:for(;0<W;){var N=W-1>>>1,T=M[N];if(0<c(T,Q))M[N]=Q,M[W]=T,W=N;else break e}}function l(M){return M.length===0?null:M[0]}function m(M){if(M.length===0)return null;var Q=M[0],W=M.pop();if(W!==Q){M[0]=W;e:for(var N=0,T=M.length,ae=T>>>1;N<ae;){var oe=2*(N+1)-1,le=M[oe],de=oe+1,ve=M[de];if(0>c(le,W))de<T&&0>c(ve,le)?(M[N]=ve,M[de]=W,N=de):(M[N]=le,M[oe]=W,N=oe);else if(de<T&&0>c(ve,W))M[N]=ve,M[de]=W,N=de;else break e}}return Q}function c(M,Q){var W=M.sortIndex-Q.sortIndex;return W!==0?W:M.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;s.unstable_now=function(){return p.now()}}else{var f=Date,g=f.now();s.unstable_now=function(){return f.now()-g}}var v=[],y=[],k=1,j=null,E=3,_=!1,F=!1,z=!1,L=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(M){for(var Q=l(y);Q!==null;){if(Q.callback===null)m(y);else if(Q.startTime<=M)m(y),Q.sortIndex=Q.expirationTime,d(v,Q);else break;Q=l(y)}}function $(M){if(z=!1,D(M),!F)if(l(v)!==null)F=!0,I(X);else{var Q=l(y);Q!==null&&w($,Q.startTime-M)}}function X(M,Q){F=!1,z&&(z=!1,O(ie),ie=-1),_=!0;var W=E;try{for(D(Q),j=l(v);j!==null&&(!(j.expirationTime>Q)||M&&!$e());){var N=j.callback;if(typeof N=="function"){j.callback=null,E=j.priorityLevel;var T=N(j.expirationTime<=Q);Q=s.unstable_now(),typeof T=="function"?j.callback=T:j===l(v)&&m(v),D(Q)}else m(v);j=l(v)}if(j!==null)var ae=!0;else{var oe=l(y);oe!==null&&w($,oe.startTime-Q),ae=!1}return ae}finally{j=null,E=W,_=!1}}var J=!1,H=null,ie=-1,ue=5,ge=-1;function $e(){return!(s.unstable_now()-ge<ue)}function _e(){if(H!==null){var M=s.unstable_now();ge=M;var Q=!0;try{Q=H(!0,M)}finally{Q?Ee():(J=!1,H=null)}}else J=!1}var Ee;if(typeof q=="function")Ee=function(){q(_e)};else if(typeof MessageChannel<"u"){var Be=new MessageChannel,h=Be.port2;Be.port1.onmessage=_e,Ee=function(){h.postMessage(null)}}else Ee=function(){L(_e,0)};function I(M){H=M,J||(J=!0,Ee())}function w(M,Q){ie=L(function(){M(s.unstable_now())},Q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(M){M.callback=null},s.unstable_continueExecution=function(){F||_||(F=!0,I(X))},s.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ue=0<M?Math.floor(1e3/M):5},s.unstable_getCurrentPriorityLevel=function(){return E},s.unstable_getFirstCallbackNode=function(){return l(v)},s.unstable_next=function(M){switch(E){case 1:case 2:case 3:var Q=3;break;default:Q=E}var W=E;E=Q;try{return M()}finally{E=W}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(M,Q){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var W=E;E=M;try{return Q()}finally{E=W}},s.unstable_scheduleCallback=function(M,Q,W){var N=s.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?N+W:N):W=N,M){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=W+T,M={id:k++,callback:Q,priorityLevel:M,startTime:W,expirationTime:T,sortIndex:-1},W>N?(M.sortIndex=W,d(y,M),l(v)===null&&M===l(y)&&(z?(O(ie),ie=-1):z=!0,w($,W-N))):(M.sortIndex=T,d(v,M),F||_||(F=!0,I(X))),M},s.unstable_shouldYield=$e,s.unstable_wrapCallback=function(M){var Q=E;return function(){var W=E;E=Q;try{return M.apply(this,arguments)}finally{E=W}}}})(Ci)),Ci}var Oc;function Up(){return Oc||(Oc=1,ji.exports=qp()),ji.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $c;function Wp(){if($c)return aa;$c=1;var s=Fi(),d=Up();function l(e){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)a+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m=new Set,c={};function p(e,a){f(e,a),f(e+"Capture",a)}function f(e,a){for(c[e]=a,e=0;e<a.length;e++)m.add(a[e])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),v=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,k={},j={};function E(e){return v.call(j,e)?!0:v.call(k,e)?!1:y.test(e)?j[e]=!0:(k[e]=!0,!1)}function _(e,a,o,t){if(o!==null&&o.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return t?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function F(e,a,o,t){if(a===null||typeof a>"u"||_(e,a,o,t))return!0;if(t)return!1;if(o!==null)switch(o.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function z(e,a,o,t,n,i,u){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=t,this.attributeNamespace=n,this.mustUseProperty=o,this.propertyName=e,this.type=a,this.sanitizeURL=i,this.removeEmptyString=u}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){L[e]=new z(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var a=e[0];L[a]=new z(a,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){L[e]=new z(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){L[e]=new z(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){L[e]=new z(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){L[e]=new z(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){L[e]=new z(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){L[e]=new z(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){L[e]=new z(e,5,!1,e.toLowerCase(),null,!1,!1)});var O=/[\-:]([a-z])/g;function q(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var a=e.replace(O,q);L[a]=new z(a,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var a=e.replace(O,q);L[a]=new z(a,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var a=e.replace(O,q);L[a]=new z(a,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){L[e]=new z(e,1,!1,e.toLowerCase(),null,!1,!1)}),L.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){L[e]=new z(e,1,!1,e.toLowerCase(),null,!0,!0)});function D(e,a,o,t){var n=L.hasOwnProperty(a)?L[a]:null;(n!==null?n.type!==0:t||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(F(a,o,n,t)&&(o=null),t||n===null?E(a)&&(o===null?e.removeAttribute(a):e.setAttribute(a,""+o)):n.mustUseProperty?e[n.propertyName]=o===null?n.type===3?!1:"":o:(a=n.attributeName,t=n.attributeNamespace,o===null?e.removeAttribute(a):(n=n.type,o=n===3||n===4&&o===!0?"":""+o,t?e.setAttributeNS(t,a,o):e.setAttribute(a,o))))}var $=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),J=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),ie=Symbol.for("react.strict_mode"),ue=Symbol.for("react.profiler"),ge=Symbol.for("react.provider"),$e=Symbol.for("react.context"),_e=Symbol.for("react.forward_ref"),Ee=Symbol.for("react.suspense"),Be=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),w=Symbol.for("react.offscreen"),M=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,N;function T(e){if(N===void 0)try{throw Error()}catch(o){var a=o.stack.trim().match(/\n( *(at )?)/);N=a&&a[1]||""}return`
`+N+e}var ae=!1;function oe(e,a){if(!e||ae)return"";ae=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(R){var t=R}Reflect.construct(e,[],a)}else{try{a.call()}catch(R){t=R}e.call(a.prototype)}else{try{throw Error()}catch(R){t=R}e()}}catch(R){if(R&&t&&typeof R.stack=="string"){for(var n=R.stack.split(`
`),i=t.stack.split(`
`),u=n.length-1,x=i.length-1;1<=u&&0<=x&&n[u]!==i[x];)x--;for(;1<=u&&0<=x;u--,x--)if(n[u]!==i[x]){if(u!==1||x!==1)do if(u--,x--,0>x||n[u]!==i[x]){var b=`
`+n[u].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=u&&0<=x);break}}}finally{ae=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?T(e):""}function le(e){switch(e.tag){case 5:return T(e.type);case 16:return T("Lazy");case 13:return T("Suspense");case 19:return T("SuspenseList");case 0:case 2:case 15:return e=oe(e.type,!1),e;case 11:return e=oe(e.type.render,!1),e;case 1:return e=oe(e.type,!0),e;default:return""}}function de(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case J:return"Portal";case ue:return"Profiler";case ie:return"StrictMode";case Ee:return"Suspense";case Be:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $e:return(e.displayName||"Context")+".Consumer";case ge:return(e._context.displayName||"Context")+".Provider";case _e:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case h:return a=e.displayName||null,a!==null?a:de(e.type)||"Memo";case I:a=e._payload,e=e._init;try{return de(e(a))}catch{}}return null}function ve(e){var a=e.type;switch(e.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=a.render,e=e.displayName||e.name||"",a.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(a);case 8:return a===ie?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function he(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ce(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function ra(e){var a=Ce(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,a),t=""+e[a];if(!e.hasOwnProperty(a)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var n=o.get,i=o.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return n.call(this)},set:function(u){t=""+u,i.call(this,u)}}),Object.defineProperty(e,a,{enumerable:o.enumerable}),{getValue:function(){return t},setValue:function(u){t=""+u},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Yo(e){e._valueTracker||(e._valueTracker=ra(e))}function $i(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var o=a.getValue(),t="";return e&&(t=Ce(e)?e.checked?"true":"false":e.value),e=t,e!==o?(a.setValue(e),!0):!1}function Zo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Nn(e,a){var o=a.checked;return W({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function Bi(e,a){var o=a.defaultValue==null?"":a.defaultValue,t=a.checked!=null?a.checked:a.defaultChecked;o=he(a.value!=null?a.value:o),e._wrapperState={initialChecked:t,initialValue:o,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function Vi(e,a){a=a.checked,a!=null&&D(e,"checked",a,!1)}function kn(e,a){Vi(e,a);var o=he(a.value),t=a.type;if(o!=null)t==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(t==="submit"||t==="reset"){e.removeAttribute("value");return}a.hasOwnProperty("value")?En(e,a.type,o):a.hasOwnProperty("defaultValue")&&En(e,a.type,he(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(e.defaultChecked=!!a.defaultChecked)}function qi(e,a,o){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var t=a.type;if(!(t!=="submit"&&t!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+e._wrapperState.initialValue,o||a===e.value||(e.value=a),e.defaultValue=a}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function En(e,a,o){(a!=="number"||Zo(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var so=Array.isArray;function Ar(e,a,o,t){if(e=e.options,a){a={};for(var n=0;n<o.length;n++)a["$"+o[n]]=!0;for(o=0;o<e.length;o++)n=a.hasOwnProperty("$"+e[o].value),e[o].selected!==n&&(e[o].selected=n),n&&t&&(e[o].defaultSelected=!0)}else{for(o=""+he(o),a=null,n=0;n<e.length;n++){if(e[n].value===o){e[n].selected=!0,t&&(e[n].defaultSelected=!0);return}a!==null||e[n].disabled||(a=e[n])}a!==null&&(a.selected=!0)}}function Pn(e,a){if(a.dangerouslySetInnerHTML!=null)throw Error(l(91));return W({},a,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ui(e,a){var o=a.value;if(o==null){if(o=a.children,a=a.defaultValue,o!=null){if(a!=null)throw Error(l(92));if(so(o)){if(1<o.length)throw Error(l(93));o=o[0]}a=o}a==null&&(a=""),o=a}e._wrapperState={initialValue:he(o)}}function Wi(e,a){var o=he(a.value),t=he(a.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),a.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),t!=null&&(e.defaultValue=""+t)}function Gi(e){var a=e.textContent;a===e._wrapperState.initialValue&&a!==""&&a!==null&&(e.value=a)}function Hi(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ln(e,a){return e==null||e==="http://www.w3.org/1999/xhtml"?Hi(a):e==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xo,Qi=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,o,t,n){MSApp.execUnsafeLocalFunction(function(){return e(a,o,t,n)})}:e})(function(e,a){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=a;else{for(Xo=Xo||document.createElement("div"),Xo.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=Xo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;a.firstChild;)e.appendChild(a.firstChild)}});function io(e,a){if(a){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=a;return}}e.textContent=a}var lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vu=["Webkit","ms","Moz","O"];Object.keys(lo).forEach(function(e){Vu.forEach(function(a){a=a+e.charAt(0).toUpperCase()+e.substring(1),lo[a]=lo[e]})});function Ji(e,a,o){return a==null||typeof a=="boolean"||a===""?"":o||typeof a!="number"||a===0||lo.hasOwnProperty(e)&&lo[e]?(""+a).trim():a+"px"}function Ki(e,a){e=e.style;for(var o in a)if(a.hasOwnProperty(o)){var t=o.indexOf("--")===0,n=Ji(o,a[o],t);o==="float"&&(o="cssFloat"),t?e.setProperty(o,n):e[o]=n}}var qu=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function An(e,a){if(a){if(qu[e]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(l(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(l(61))}if(a.style!=null&&typeof a.style!="object")throw Error(l(62))}}function Rn(e,a){if(e.indexOf("-")===-1)return typeof a.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zn=null;function Mn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dn=null,Rr=null,zr=null;function Yi(e){if(e=Ro(e)){if(typeof Dn!="function")throw Error(l(280));var a=e.stateNode;a&&(a=Ct(a),Dn(e.stateNode,e.type,a))}}function Zi(e){Rr?zr?zr.push(e):zr=[e]:Rr=e}function Xi(){if(Rr){var e=Rr,a=zr;if(zr=Rr=null,Yi(e),a)for(e=0;e<a.length;e++)Yi(a[e])}}function el(e,a){return e(a)}function al(){}var In=!1;function rl(e,a,o){if(In)return e(a,o);In=!0;try{return el(e,a,o)}finally{In=!1,(Rr!==null||zr!==null)&&(al(),Xi())}}function co(e,a){var o=e.stateNode;if(o===null)return null;var t=Ct(o);if(t===null)return null;o=t[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(l(231,a,typeof o));return o}var _n=!1;if(g)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){_n=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{_n=!1}function Uu(e,a,o,t,n,i,u,x,b){var R=Array.prototype.slice.call(arguments,3);try{a.apply(o,R)}catch(V){this.onError(V)}}var mo=!1,et=null,at=!1,Fn=null,Wu={onError:function(e){mo=!0,et=e}};function Gu(e,a,o,t,n,i,u,x,b){mo=!1,et=null,Uu.apply(Wu,arguments)}function Hu(e,a,o,t,n,i,u,x,b){if(Gu.apply(this,arguments),mo){if(mo){var R=et;mo=!1,et=null}else throw Error(l(198));at||(at=!0,Fn=R)}}function cr(e){var a=e,o=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(o=a.return),e=a.return;while(e)}return a.tag===3?o:null}function ol(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function tl(e){if(cr(e)!==e)throw Error(l(188))}function Qu(e){var a=e.alternate;if(!a){if(a=cr(e),a===null)throw Error(l(188));return a!==e?null:e}for(var o=e,t=a;;){var n=o.return;if(n===null)break;var i=n.alternate;if(i===null){if(t=n.return,t!==null){o=t;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===o)return tl(n),e;if(i===t)return tl(n),a;i=i.sibling}throw Error(l(188))}if(o.return!==t.return)o=n,t=i;else{for(var u=!1,x=n.child;x;){if(x===o){u=!0,o=n,t=i;break}if(x===t){u=!0,t=n,o=i;break}x=x.sibling}if(!u){for(x=i.child;x;){if(x===o){u=!0,o=i,t=n;break}if(x===t){u=!0,t=i,o=n;break}x=x.sibling}if(!u)throw Error(l(189))}}if(o.alternate!==t)throw Error(l(190))}if(o.tag!==3)throw Error(l(188));return o.stateNode.current===o?e:a}function nl(e){return e=Qu(e),e!==null?sl(e):null}function sl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var a=sl(e);if(a!==null)return a;e=e.sibling}return null}var il=d.unstable_scheduleCallback,ll=d.unstable_cancelCallback,Ju=d.unstable_shouldYield,Ku=d.unstable_requestPaint,Ae=d.unstable_now,Yu=d.unstable_getCurrentPriorityLevel,Tn=d.unstable_ImmediatePriority,dl=d.unstable_UserBlockingPriority,rt=d.unstable_NormalPriority,Zu=d.unstable_LowPriority,cl=d.unstable_IdlePriority,ot=null,Sa=null;function Xu(e){if(Sa&&typeof Sa.onCommitFiberRoot=="function")try{Sa.onCommitFiberRoot(ot,e,void 0,(e.current.flags&128)===128)}catch{}}var ga=Math.clz32?Math.clz32:rm,em=Math.log,am=Math.LN2;function rm(e){return e>>>=0,e===0?32:31-(em(e)/am|0)|0}var tt=64,nt=4194304;function po(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function st(e,a){var o=e.pendingLanes;if(o===0)return 0;var t=0,n=e.suspendedLanes,i=e.pingedLanes,u=o&268435455;if(u!==0){var x=u&~n;x!==0?t=po(x):(i&=u,i!==0&&(t=po(i)))}else u=o&~n,u!==0?t=po(u):i!==0&&(t=po(i));if(t===0)return 0;if(a!==0&&a!==t&&(a&n)===0&&(n=t&-t,i=a&-a,n>=i||n===16&&(i&4194240)!==0))return a;if((t&4)!==0&&(t|=o&16),a=e.entangledLanes,a!==0)for(e=e.entanglements,a&=t;0<a;)o=31-ga(a),n=1<<o,t|=e[o],a&=~n;return t}function om(e,a){switch(e){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tm(e,a){for(var o=e.suspendedLanes,t=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes;0<i;){var u=31-ga(i),x=1<<u,b=n[u];b===-1?((x&o)===0||(x&t)!==0)&&(n[u]=om(x,a)):b<=a&&(e.expiredLanes|=x),i&=~x}}function On(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ul(){var e=tt;return tt<<=1,(tt&4194240)===0&&(tt=64),e}function $n(e){for(var a=[],o=0;31>o;o++)a.push(e);return a}function fo(e,a,o){e.pendingLanes|=a,a!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,a=31-ga(a),e[a]=o}function nm(e,a){var o=e.pendingLanes&~a;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=a,e.mutableReadLanes&=a,e.entangledLanes&=a,a=e.entanglements;var t=e.eventTimes;for(e=e.expirationTimes;0<o;){var n=31-ga(o),i=1<<n;a[n]=0,t[n]=-1,e[n]=-1,o&=~i}}function Bn(e,a){var o=e.entangledLanes|=a;for(e=e.entanglements;o;){var t=31-ga(o),n=1<<t;n&a|e[t]&a&&(e[t]|=a),o&=~n}}var xe=0;function ml(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var pl,Vn,fl,gl,hl,qn=!1,it=[],Oa=null,$a=null,Ba=null,go=new Map,ho=new Map,Va=[],sm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xl(e,a){switch(e){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":go.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(a.pointerId)}}function xo(e,a,o,t,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:a,domEventName:o,eventSystemFlags:t,nativeEvent:i,targetContainers:[n]},a!==null&&(a=Ro(a),a!==null&&Vn(a)),e):(e.eventSystemFlags|=t,a=e.targetContainers,n!==null&&a.indexOf(n)===-1&&a.push(n),e)}function im(e,a,o,t,n){switch(a){case"focusin":return Oa=xo(Oa,e,a,o,t,n),!0;case"dragenter":return $a=xo($a,e,a,o,t,n),!0;case"mouseover":return Ba=xo(Ba,e,a,o,t,n),!0;case"pointerover":var i=n.pointerId;return go.set(i,xo(go.get(i)||null,e,a,o,t,n)),!0;case"gotpointercapture":return i=n.pointerId,ho.set(i,xo(ho.get(i)||null,e,a,o,t,n)),!0}return!1}function vl(e){var a=ur(e.target);if(a!==null){var o=cr(a);if(o!==null){if(a=o.tag,a===13){if(a=ol(o),a!==null){e.blockedOn=a,hl(e.priority,function(){fl(o)});return}}else if(a===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lt(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var o=Wn(e.domEventName,e.eventSystemFlags,a[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var t=new o.constructor(o.type,o);zn=t,o.target.dispatchEvent(t),zn=null}else return a=Ro(o),a!==null&&Vn(a),e.blockedOn=o,!1;a.shift()}return!0}function yl(e,a,o){lt(e)&&o.delete(a)}function lm(){qn=!1,Oa!==null&&lt(Oa)&&(Oa=null),$a!==null&&lt($a)&&($a=null),Ba!==null&&lt(Ba)&&(Ba=null),go.forEach(yl),ho.forEach(yl)}function vo(e,a){e.blockedOn===a&&(e.blockedOn=null,qn||(qn=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,lm)))}function yo(e){function a(n){return vo(n,e)}if(0<it.length){vo(it[0],e);for(var o=1;o<it.length;o++){var t=it[o];t.blockedOn===e&&(t.blockedOn=null)}}for(Oa!==null&&vo(Oa,e),$a!==null&&vo($a,e),Ba!==null&&vo(Ba,e),go.forEach(a),ho.forEach(a),o=0;o<Va.length;o++)t=Va[o],t.blockedOn===e&&(t.blockedOn=null);for(;0<Va.length&&(o=Va[0],o.blockedOn===null);)vl(o),o.blockedOn===null&&Va.shift()}var Mr=$.ReactCurrentBatchConfig,dt=!0;function dm(e,a,o,t){var n=xe,i=Mr.transition;Mr.transition=null;try{xe=1,Un(e,a,o,t)}finally{xe=n,Mr.transition=i}}function cm(e,a,o,t){var n=xe,i=Mr.transition;Mr.transition=null;try{xe=4,Un(e,a,o,t)}finally{xe=n,Mr.transition=i}}function Un(e,a,o,t){if(dt){var n=Wn(e,a,o,t);if(n===null)ls(e,a,t,ct,o),xl(e,t);else if(im(n,e,a,o,t))t.stopPropagation();else if(xl(e,t),a&4&&-1<sm.indexOf(e)){for(;n!==null;){var i=Ro(n);if(i!==null&&pl(i),i=Wn(e,a,o,t),i===null&&ls(e,a,t,ct,o),i===n)break;n=i}n!==null&&t.stopPropagation()}else ls(e,a,t,null,o)}}var ct=null;function Wn(e,a,o,t){if(ct=null,e=Mn(t),e=ur(e),e!==null)if(a=cr(e),a===null)e=null;else if(o=a.tag,o===13){if(e=ol(a),e!==null)return e;e=null}else if(o===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null);return ct=e,null}function bl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yu()){case Tn:return 1;case dl:return 4;case rt:case Zu:return 16;case cl:return 536870912;default:return 16}default:return 16}}var qa=null,Gn=null,ut=null;function jl(){if(ut)return ut;var e,a=Gn,o=a.length,t,n="value"in qa?qa.value:qa.textContent,i=n.length;for(e=0;e<o&&a[e]===n[e];e++);var u=o-e;for(t=1;t<=u&&a[o-t]===n[i-t];t++);return ut=n.slice(e,1<t?1-t:void 0)}function mt(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function pt(){return!0}function Cl(){return!1}function oa(e){function a(o,t,n,i,u){this._reactName=o,this._targetInst=n,this.type=t,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(o=e[x],this[x]=o?o(i):i[x]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?pt:Cl,this.isPropagationStopped=Cl,this}return W(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=pt)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=pt)},persist:function(){},isPersistent:pt}),a}var Dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hn=oa(Dr),bo=W({},Dr,{view:0,detail:0}),um=oa(bo),Qn,Jn,jo,ft=W({},bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jo&&(jo&&e.type==="mousemove"?(Qn=e.screenX-jo.screenX,Jn=e.screenY-jo.screenY):Jn=Qn=0,jo=e),Qn)},movementY:function(e){return"movementY"in e?e.movementY:Jn}}),Sl=oa(ft),mm=W({},ft,{dataTransfer:0}),pm=oa(mm),fm=W({},bo,{relatedTarget:0}),Kn=oa(fm),gm=W({},Dr,{animationName:0,elapsedTime:0,pseudoElement:0}),hm=oa(gm),xm=W({},Dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vm=oa(xm),ym=W({},Dr,{data:0}),wl=oa(ym),bm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sm(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Cm[e])?!!a[e]:!1}function Yn(){return Sm}var wm=W({},bo,{key:function(e){if(e.key){var a=bm[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=mt(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yn,charCode:function(e){return e.type==="keypress"?mt(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mt(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nm=oa(wm),km=W({},ft,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nl=oa(km),Em=W({},bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yn}),Pm=oa(Em),Lm=W({},Dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Am=oa(Lm),Rm=W({},ft,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zm=oa(Rm),Mm=[9,13,27,32],Zn=g&&"CompositionEvent"in window,Co=null;g&&"documentMode"in document&&(Co=document.documentMode);var Dm=g&&"TextEvent"in window&&!Co,kl=g&&(!Zn||Co&&8<Co&&11>=Co),El=" ",Pl=!1;function Ll(e,a){switch(e){case"keyup":return Mm.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Al(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ir=!1;function Im(e,a){switch(e){case"compositionend":return Al(a);case"keypress":return a.which!==32?null:(Pl=!0,El);case"textInput":return e=a.data,e===El&&Pl?null:e;default:return null}}function _m(e,a){if(Ir)return e==="compositionend"||!Zn&&Ll(e,a)?(e=jl(),ut=Gn=qa=null,Ir=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return kl&&a.locale!=="ko"?null:a.data;default:return null}}var Fm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rl(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!Fm[e.type]:a==="textarea"}function zl(e,a,o,t){Zi(t),a=yt(a,"onChange"),0<a.length&&(o=new Hn("onChange","change",null,o,t),e.push({event:o,listeners:a}))}var So=null,wo=null;function Tm(e){Kl(e,0)}function gt(e){var a=$r(e);if($i(a))return e}function Om(e,a){if(e==="change")return a}var Ml=!1;if(g){var Xn;if(g){var es="oninput"in document;if(!es){var Dl=document.createElement("div");Dl.setAttribute("oninput","return;"),es=typeof Dl.oninput=="function"}Xn=es}else Xn=!1;Ml=Xn&&(!document.documentMode||9<document.documentMode)}function Il(){So&&(So.detachEvent("onpropertychange",_l),wo=So=null)}function _l(e){if(e.propertyName==="value"&&gt(wo)){var a=[];zl(a,wo,e,Mn(e)),rl(Tm,a)}}function $m(e,a,o){e==="focusin"?(Il(),So=a,wo=o,So.attachEvent("onpropertychange",_l)):e==="focusout"&&Il()}function Bm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gt(wo)}function Vm(e,a){if(e==="click")return gt(a)}function qm(e,a){if(e==="input"||e==="change")return gt(a)}function Um(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ha=typeof Object.is=="function"?Object.is:Um;function No(e,a){if(ha(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var o=Object.keys(e),t=Object.keys(a);if(o.length!==t.length)return!1;for(t=0;t<o.length;t++){var n=o[t];if(!v.call(a,n)||!ha(e[n],a[n]))return!1}return!0}function Fl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tl(e,a){var o=Fl(e);e=0;for(var t;o;){if(o.nodeType===3){if(t=e+o.textContent.length,e<=a&&t>=a)return{node:o,offset:a-e};e=t}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Fl(o)}}function Ol(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Ol(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function $l(){for(var e=window,a=Zo();a instanceof e.HTMLIFrameElement;){try{var o=typeof a.contentWindow.location.href=="string"}catch{o=!1}if(o)e=a.contentWindow;else break;a=Zo(e.document)}return a}function as(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}function Wm(e){var a=$l(),o=e.focusedElem,t=e.selectionRange;if(a!==o&&o&&o.ownerDocument&&Ol(o.ownerDocument.documentElement,o)){if(t!==null&&as(o)){if(a=t.start,e=t.end,e===void 0&&(e=a),"selectionStart"in o)o.selectionStart=a,o.selectionEnd=Math.min(e,o.value.length);else if(e=(a=o.ownerDocument||document)&&a.defaultView||window,e.getSelection){e=e.getSelection();var n=o.textContent.length,i=Math.min(t.start,n);t=t.end===void 0?i:Math.min(t.end,n),!e.extend&&i>t&&(n=t,t=i,i=n),n=Tl(o,i);var u=Tl(o,t);n&&u&&(e.rangeCount!==1||e.anchorNode!==n.node||e.anchorOffset!==n.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(a=a.createRange(),a.setStart(n.node,n.offset),e.removeAllRanges(),i>t?(e.addRange(a),e.extend(u.node,u.offset)):(a.setEnd(u.node,u.offset),e.addRange(a)))}}for(a=[],e=o;e=e.parentNode;)e.nodeType===1&&a.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<a.length;o++)e=a[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gm=g&&"documentMode"in document&&11>=document.documentMode,_r=null,rs=null,ko=null,os=!1;function Bl(e,a,o){var t=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;os||_r==null||_r!==Zo(t)||(t=_r,"selectionStart"in t&&as(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),ko&&No(ko,t)||(ko=t,t=yt(rs,"onSelect"),0<t.length&&(a=new Hn("onSelect","select",null,a,o),e.push({event:a,listeners:t}),a.target=_r)))}function ht(e,a){var o={};return o[e.toLowerCase()]=a.toLowerCase(),o["Webkit"+e]="webkit"+a,o["Moz"+e]="moz"+a,o}var Fr={animationend:ht("Animation","AnimationEnd"),animationiteration:ht("Animation","AnimationIteration"),animationstart:ht("Animation","AnimationStart"),transitionend:ht("Transition","TransitionEnd")},ts={},Vl={};g&&(Vl=document.createElement("div").style,"AnimationEvent"in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),"TransitionEvent"in window||delete Fr.transitionend.transition);function xt(e){if(ts[e])return ts[e];if(!Fr[e])return e;var a=Fr[e],o;for(o in a)if(a.hasOwnProperty(o)&&o in Vl)return ts[e]=a[o];return e}var ql=xt("animationend"),Ul=xt("animationiteration"),Wl=xt("animationstart"),Gl=xt("transitionend"),Hl=new Map,Ql="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ua(e,a){Hl.set(e,a),p(a,[e])}for(var ns=0;ns<Ql.length;ns++){var ss=Ql[ns],Hm=ss.toLowerCase(),Qm=ss[0].toUpperCase()+ss.slice(1);Ua(Hm,"on"+Qm)}Ua(ql,"onAnimationEnd"),Ua(Ul,"onAnimationIteration"),Ua(Wl,"onAnimationStart"),Ua("dblclick","onDoubleClick"),Ua("focusin","onFocus"),Ua("focusout","onBlur"),Ua(Gl,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));function Jl(e,a,o){var t=e.type||"unknown-event";e.currentTarget=o,Hu(t,a,void 0,e),e.currentTarget=null}function Kl(e,a){a=(a&4)!==0;for(var o=0;o<e.length;o++){var t=e[o],n=t.event;t=t.listeners;e:{var i=void 0;if(a)for(var u=t.length-1;0<=u;u--){var x=t[u],b=x.instance,R=x.currentTarget;if(x=x.listener,b!==i&&n.isPropagationStopped())break e;Jl(n,x,R),i=b}else for(u=0;u<t.length;u++){if(x=t[u],b=x.instance,R=x.currentTarget,x=x.listener,b!==i&&n.isPropagationStopped())break e;Jl(n,x,R),i=b}}}if(at)throw e=Fn,at=!1,Fn=null,e}function be(e,a){var o=a[fs];o===void 0&&(o=a[fs]=new Set);var t=e+"__bubble";o.has(t)||(Yl(a,e,2,!1),o.add(t))}function is(e,a,o){var t=0;a&&(t|=4),Yl(o,e,t,a)}var vt="_reactListening"+Math.random().toString(36).slice(2);function Po(e){if(!e[vt]){e[vt]=!0,m.forEach(function(o){o!=="selectionchange"&&(Jm.has(o)||is(o,!1,e),is(o,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[vt]||(a[vt]=!0,is("selectionchange",!1,a))}}function Yl(e,a,o,t){switch(bl(a)){case 1:var n=dm;break;case 4:n=cm;break;default:n=Un}o=n.bind(null,a,o,e),n=void 0,!_n||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(n=!0),t?n!==void 0?e.addEventListener(a,o,{capture:!0,passive:n}):e.addEventListener(a,o,!0):n!==void 0?e.addEventListener(a,o,{passive:n}):e.addEventListener(a,o,!1)}function ls(e,a,o,t,n){var i=t;if((a&1)===0&&(a&2)===0&&t!==null)e:for(;;){if(t===null)return;var u=t.tag;if(u===3||u===4){var x=t.stateNode.containerInfo;if(x===n||x.nodeType===8&&x.parentNode===n)break;if(u===4)for(u=t.return;u!==null;){var b=u.tag;if((b===3||b===4)&&(b=u.stateNode.containerInfo,b===n||b.nodeType===8&&b.parentNode===n))return;u=u.return}for(;x!==null;){if(u=ur(x),u===null)return;if(b=u.tag,b===5||b===6){t=i=u;continue e}x=x.parentNode}}t=t.return}rl(function(){var R=i,V=Mn(o),U=[];e:{var B=Hl.get(e);if(B!==void 0){var K=Hn,Z=e;switch(e){case"keypress":if(mt(o)===0)break e;case"keydown":case"keyup":K=Nm;break;case"focusin":Z="focus",K=Kn;break;case"focusout":Z="blur",K=Kn;break;case"beforeblur":case"afterblur":K=Kn;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=Sl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=pm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=Pm;break;case ql:case Ul:case Wl:K=hm;break;case Gl:K=Am;break;case"scroll":K=um;break;case"wheel":K=zm;break;case"copy":case"cut":case"paste":K=vm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=Nl}var ee=(a&4)!==0,Re=!ee&&e==="scroll",P=ee?B!==null?B+"Capture":null:B;ee=[];for(var S=R,A;S!==null;){A=S;var G=A.stateNode;if(A.tag===5&&G!==null&&(A=G,P!==null&&(G=co(S,P),G!=null&&ee.push(Lo(S,G,A)))),Re)break;S=S.return}0<ee.length&&(B=new K(B,Z,null,o,V),U.push({event:B,listeners:ee}))}}if((a&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",K=e==="mouseout"||e==="pointerout",B&&o!==zn&&(Z=o.relatedTarget||o.fromElement)&&(ur(Z)||Z[La]))break e;if((K||B)&&(B=V.window===V?V:(B=V.ownerDocument)?B.defaultView||B.parentWindow:window,K?(Z=o.relatedTarget||o.toElement,K=R,Z=Z?ur(Z):null,Z!==null&&(Re=cr(Z),Z!==Re||Z.tag!==5&&Z.tag!==6)&&(Z=null)):(K=null,Z=R),K!==Z)){if(ee=Sl,G="onMouseLeave",P="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Nl,G="onPointerLeave",P="onPointerEnter",S="pointer"),Re=K==null?B:$r(K),A=Z==null?B:$r(Z),B=new ee(G,S+"leave",K,o,V),B.target=Re,B.relatedTarget=A,G=null,ur(V)===R&&(ee=new ee(P,S+"enter",Z,o,V),ee.target=A,ee.relatedTarget=Re,G=ee),Re=G,K&&Z)a:{for(ee=K,P=Z,S=0,A=ee;A;A=Tr(A))S++;for(A=0,G=P;G;G=Tr(G))A++;for(;0<S-A;)ee=Tr(ee),S--;for(;0<A-S;)P=Tr(P),A--;for(;S--;){if(ee===P||P!==null&&ee===P.alternate)break a;ee=Tr(ee),P=Tr(P)}ee=null}else ee=null;K!==null&&Zl(U,B,K,ee,!1),Z!==null&&Re!==null&&Zl(U,Re,Z,ee,!0)}}e:{if(B=R?$r(R):window,K=B.nodeName&&B.nodeName.toLowerCase(),K==="select"||K==="input"&&B.type==="file")var re=Om;else if(Rl(B))if(Ml)re=qm;else{re=Bm;var te=$m}else(K=B.nodeName)&&K.toLowerCase()==="input"&&(B.type==="checkbox"||B.type==="radio")&&(re=Vm);if(re&&(re=re(e,R))){zl(U,re,o,V);break e}te&&te(e,B,R),e==="focusout"&&(te=B._wrapperState)&&te.controlled&&B.type==="number"&&En(B,"number",B.value)}switch(te=R?$r(R):window,e){case"focusin":(Rl(te)||te.contentEditable==="true")&&(_r=te,rs=R,ko=null);break;case"focusout":ko=rs=_r=null;break;case"mousedown":os=!0;break;case"contextmenu":case"mouseup":case"dragend":os=!1,Bl(U,o,V);break;case"selectionchange":if(Gm)break;case"keydown":case"keyup":Bl(U,o,V)}var ne;if(Zn)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else Ir?Ll(e,o)&&(se="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(se="onCompositionStart");se&&(kl&&o.locale!=="ko"&&(Ir||se!=="onCompositionStart"?se==="onCompositionEnd"&&Ir&&(ne=jl()):(qa=V,Gn="value"in qa?qa.value:qa.textContent,Ir=!0)),te=yt(R,se),0<te.length&&(se=new wl(se,e,null,o,V),U.push({event:se,listeners:te}),ne?se.data=ne:(ne=Al(o),ne!==null&&(se.data=ne)))),(ne=Dm?Im(e,o):_m(e,o))&&(R=yt(R,"onBeforeInput"),0<R.length&&(V=new wl("onBeforeInput","beforeinput",null,o,V),U.push({event:V,listeners:R}),V.data=ne))}Kl(U,a)})}function Lo(e,a,o){return{instance:e,listener:a,currentTarget:o}}function yt(e,a){for(var o=a+"Capture",t=[];e!==null;){var n=e,i=n.stateNode;n.tag===5&&i!==null&&(n=i,i=co(e,o),i!=null&&t.unshift(Lo(e,i,n)),i=co(e,a),i!=null&&t.push(Lo(e,i,n))),e=e.return}return t}function Tr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zl(e,a,o,t,n){for(var i=a._reactName,u=[];o!==null&&o!==t;){var x=o,b=x.alternate,R=x.stateNode;if(b!==null&&b===t)break;x.tag===5&&R!==null&&(x=R,n?(b=co(o,i),b!=null&&u.unshift(Lo(o,b,x))):n||(b=co(o,i),b!=null&&u.push(Lo(o,b,x)))),o=o.return}u.length!==0&&e.push({event:a,listeners:u})}var Km=/\r\n?/g,Ym=/\u0000|\uFFFD/g;function Xl(e){return(typeof e=="string"?e:""+e).replace(Km,`
`).replace(Ym,"")}function bt(e,a,o){if(a=Xl(a),Xl(e)!==a&&o)throw Error(l(425))}function jt(){}var ds=null,cs=null;function us(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var ms=typeof setTimeout=="function"?setTimeout:void 0,Zm=typeof clearTimeout=="function"?clearTimeout:void 0,ed=typeof Promise=="function"?Promise:void 0,Xm=typeof queueMicrotask=="function"?queueMicrotask:typeof ed<"u"?function(e){return ed.resolve(null).then(e).catch(ep)}:ms;function ep(e){setTimeout(function(){throw e})}function ps(e,a){var o=a,t=0;do{var n=o.nextSibling;if(e.removeChild(o),n&&n.nodeType===8)if(o=n.data,o==="/$"){if(t===0){e.removeChild(n),yo(a);return}t--}else o!=="$"&&o!=="$?"&&o!=="$!"||t++;o=n}while(o);yo(a)}function Wa(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return e}function ad(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(a===0)return e;a--}else o==="/$"&&a++}e=e.previousSibling}return null}var Or=Math.random().toString(36).slice(2),wa="__reactFiber$"+Or,Ao="__reactProps$"+Or,La="__reactContainer$"+Or,fs="__reactEvents$"+Or,ap="__reactListeners$"+Or,rp="__reactHandles$"+Or;function ur(e){var a=e[wa];if(a)return a;for(var o=e.parentNode;o;){if(a=o[La]||o[wa]){if(o=a.alternate,a.child!==null||o!==null&&o.child!==null)for(e=ad(e);e!==null;){if(o=e[wa])return o;e=ad(e)}return a}e=o,o=e.parentNode}return null}function Ro(e){return e=e[wa]||e[La],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $r(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Ct(e){return e[Ao]||null}var gs=[],Br=-1;function Ga(e){return{current:e}}function je(e){0>Br||(e.current=gs[Br],gs[Br]=null,Br--)}function ye(e,a){Br++,gs[Br]=e.current,e.current=a}var Ha={},Ue=Ga(Ha),Ke=Ga(!1),mr=Ha;function Vr(e,a){var o=e.type.contextTypes;if(!o)return Ha;var t=e.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===a)return t.__reactInternalMemoizedMaskedChildContext;var n={},i;for(i in o)n[i]=a[i];return t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=n),n}function Ye(e){return e=e.childContextTypes,e!=null}function St(){je(Ke),je(Ue)}function rd(e,a,o){if(Ue.current!==Ha)throw Error(l(168));ye(Ue,a),ye(Ke,o)}function od(e,a,o){var t=e.stateNode;if(a=a.childContextTypes,typeof t.getChildContext!="function")return o;t=t.getChildContext();for(var n in t)if(!(n in a))throw Error(l(108,ve(e)||"Unknown",n));return W({},o,t)}function wt(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ha,mr=Ue.current,ye(Ue,e),ye(Ke,Ke.current),!0}function td(e,a,o){var t=e.stateNode;if(!t)throw Error(l(169));o?(e=od(e,a,mr),t.__reactInternalMemoizedMergedChildContext=e,je(Ke),je(Ue),ye(Ue,e)):je(Ke),ye(Ke,o)}var Aa=null,Nt=!1,hs=!1;function nd(e){Aa===null?Aa=[e]:Aa.push(e)}function op(e){Nt=!0,nd(e)}function Qa(){if(!hs&&Aa!==null){hs=!0;var e=0,a=xe;try{var o=Aa;for(xe=1;e<o.length;e++){var t=o[e];do t=t(!0);while(t!==null)}Aa=null,Nt=!1}catch(n){throw Aa!==null&&(Aa=Aa.slice(e+1)),il(Tn,Qa),n}finally{xe=a,hs=!1}}return null}var qr=[],Ur=0,kt=null,Et=0,da=[],ca=0,pr=null,Ra=1,za="";function fr(e,a){qr[Ur++]=Et,qr[Ur++]=kt,kt=e,Et=a}function sd(e,a,o){da[ca++]=Ra,da[ca++]=za,da[ca++]=pr,pr=e;var t=Ra;e=za;var n=32-ga(t)-1;t&=~(1<<n),o+=1;var i=32-ga(a)+n;if(30<i){var u=n-n%5;i=(t&(1<<u)-1).toString(32),t>>=u,n-=u,Ra=1<<32-ga(a)+n|o<<n|t,za=i+e}else Ra=1<<i|o<<n|t,za=e}function xs(e){e.return!==null&&(fr(e,1),sd(e,1,0))}function vs(e){for(;e===kt;)kt=qr[--Ur],qr[Ur]=null,Et=qr[--Ur],qr[Ur]=null;for(;e===pr;)pr=da[--ca],da[ca]=null,za=da[--ca],da[ca]=null,Ra=da[--ca],da[ca]=null}var ta=null,na=null,Se=!1,xa=null;function id(e,a){var o=fa(5,null,null,0);o.elementType="DELETED",o.stateNode=a,o.return=e,a=e.deletions,a===null?(e.deletions=[o],e.flags|=16):a.push(o)}function ld(e,a){switch(e.tag){case 5:var o=e.type;return a=a.nodeType!==1||o.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(e.stateNode=a,ta=e,na=Wa(a.firstChild),!0):!1;case 6:return a=e.pendingProps===""||a.nodeType!==3?null:a,a!==null?(e.stateNode=a,ta=e,na=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(o=pr!==null?{id:Ra,overflow:za}:null,e.memoizedState={dehydrated:a,treeContext:o,retryLane:1073741824},o=fa(18,null,null,0),o.stateNode=a,o.return=e,e.child=o,ta=e,na=null,!0):!1;default:return!1}}function ys(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bs(e){if(Se){var a=na;if(a){var o=a;if(!ld(e,a)){if(ys(e))throw Error(l(418));a=Wa(o.nextSibling);var t=ta;a&&ld(e,a)?id(t,o):(e.flags=e.flags&-4097|2,Se=!1,ta=e)}}else{if(ys(e))throw Error(l(418));e.flags=e.flags&-4097|2,Se=!1,ta=e}}}function dd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ta=e}function Pt(e){if(e!==ta)return!1;if(!Se)return dd(e),Se=!0,!1;var a;if((a=e.tag!==3)&&!(a=e.tag!==5)&&(a=e.type,a=a!=="head"&&a!=="body"&&!us(e.type,e.memoizedProps)),a&&(a=na)){if(ys(e))throw cd(),Error(l(418));for(;a;)id(e,a),a=Wa(a.nextSibling)}if(dd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,a=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(a===0){na=Wa(e.nextSibling);break e}a--}else o!=="$"&&o!=="$!"&&o!=="$?"||a++}e=e.nextSibling}na=null}}else na=ta?Wa(e.stateNode.nextSibling):null;return!0}function cd(){for(var e=na;e;)e=Wa(e.nextSibling)}function Wr(){na=ta=null,Se=!1}function js(e){xa===null?xa=[e]:xa.push(e)}var tp=$.ReactCurrentBatchConfig;function zo(e,a,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(l(309));var t=o.stateNode}if(!t)throw Error(l(147,e));var n=t,i=""+e;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===i?a.ref:(a=function(u){var x=n.refs;u===null?delete x[i]:x[i]=u},a._stringRef=i,a)}if(typeof e!="string")throw Error(l(284));if(!o._owner)throw Error(l(290,e))}return e}function Lt(e,a){throw e=Object.prototype.toString.call(a),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e))}function ud(e){var a=e._init;return a(e._payload)}function md(e){function a(P,S){if(e){var A=P.deletions;A===null?(P.deletions=[S],P.flags|=16):A.push(S)}}function o(P,S){if(!e)return null;for(;S!==null;)a(P,S),S=S.sibling;return null}function t(P,S){for(P=new Map;S!==null;)S.key!==null?P.set(S.key,S):P.set(S.index,S),S=S.sibling;return P}function n(P,S){return P=rr(P,S),P.index=0,P.sibling=null,P}function i(P,S,A){return P.index=A,e?(A=P.alternate,A!==null?(A=A.index,A<S?(P.flags|=2,S):A):(P.flags|=2,S)):(P.flags|=1048576,S)}function u(P){return e&&P.alternate===null&&(P.flags|=2),P}function x(P,S,A,G){return S===null||S.tag!==6?(S=mi(A,P.mode,G),S.return=P,S):(S=n(S,A),S.return=P,S)}function b(P,S,A,G){var re=A.type;return re===H?V(P,S,A.props.children,G,A.key):S!==null&&(S.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===I&&ud(re)===S.type)?(G=n(S,A.props),G.ref=zo(P,S,A),G.return=P,G):(G=Xt(A.type,A.key,A.props,null,P.mode,G),G.ref=zo(P,S,A),G.return=P,G)}function R(P,S,A,G){return S===null||S.tag!==4||S.stateNode.containerInfo!==A.containerInfo||S.stateNode.implementation!==A.implementation?(S=pi(A,P.mode,G),S.return=P,S):(S=n(S,A.children||[]),S.return=P,S)}function V(P,S,A,G,re){return S===null||S.tag!==7?(S=Cr(A,P.mode,G,re),S.return=P,S):(S=n(S,A),S.return=P,S)}function U(P,S,A){if(typeof S=="string"&&S!==""||typeof S=="number")return S=mi(""+S,P.mode,A),S.return=P,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case X:return A=Xt(S.type,S.key,S.props,null,P.mode,A),A.ref=zo(P,null,S),A.return=P,A;case J:return S=pi(S,P.mode,A),S.return=P,S;case I:var G=S._init;return U(P,G(S._payload),A)}if(so(S)||Q(S))return S=Cr(S,P.mode,A,null),S.return=P,S;Lt(P,S)}return null}function B(P,S,A,G){var re=S!==null?S.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return re!==null?null:x(P,S,""+A,G);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case X:return A.key===re?b(P,S,A,G):null;case J:return A.key===re?R(P,S,A,G):null;case I:return re=A._init,B(P,S,re(A._payload),G)}if(so(A)||Q(A))return re!==null?null:V(P,S,A,G,null);Lt(P,A)}return null}function K(P,S,A,G,re){if(typeof G=="string"&&G!==""||typeof G=="number")return P=P.get(A)||null,x(S,P,""+G,re);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case X:return P=P.get(G.key===null?A:G.key)||null,b(S,P,G,re);case J:return P=P.get(G.key===null?A:G.key)||null,R(S,P,G,re);case I:var te=G._init;return K(P,S,A,te(G._payload),re)}if(so(G)||Q(G))return P=P.get(A)||null,V(S,P,G,re,null);Lt(S,G)}return null}function Z(P,S,A,G){for(var re=null,te=null,ne=S,se=S=0,Oe=null;ne!==null&&se<A.length;se++){ne.index>se?(Oe=ne,ne=null):Oe=ne.sibling;var fe=B(P,ne,A[se],G);if(fe===null){ne===null&&(ne=Oe);break}e&&ne&&fe.alternate===null&&a(P,ne),S=i(fe,S,se),te===null?re=fe:te.sibling=fe,te=fe,ne=Oe}if(se===A.length)return o(P,ne),Se&&fr(P,se),re;if(ne===null){for(;se<A.length;se++)ne=U(P,A[se],G),ne!==null&&(S=i(ne,S,se),te===null?re=ne:te.sibling=ne,te=ne);return Se&&fr(P,se),re}for(ne=t(P,ne);se<A.length;se++)Oe=K(ne,P,se,A[se],G),Oe!==null&&(e&&Oe.alternate!==null&&ne.delete(Oe.key===null?se:Oe.key),S=i(Oe,S,se),te===null?re=Oe:te.sibling=Oe,te=Oe);return e&&ne.forEach(function(or){return a(P,or)}),Se&&fr(P,se),re}function ee(P,S,A,G){var re=Q(A);if(typeof re!="function")throw Error(l(150));if(A=re.call(A),A==null)throw Error(l(151));for(var te=re=null,ne=S,se=S=0,Oe=null,fe=A.next();ne!==null&&!fe.done;se++,fe=A.next()){ne.index>se?(Oe=ne,ne=null):Oe=ne.sibling;var or=B(P,ne,fe.value,G);if(or===null){ne===null&&(ne=Oe);break}e&&ne&&or.alternate===null&&a(P,ne),S=i(or,S,se),te===null?re=or:te.sibling=or,te=or,ne=Oe}if(fe.done)return o(P,ne),Se&&fr(P,se),re;if(ne===null){for(;!fe.done;se++,fe=A.next())fe=U(P,fe.value,G),fe!==null&&(S=i(fe,S,se),te===null?re=fe:te.sibling=fe,te=fe);return Se&&fr(P,se),re}for(ne=t(P,ne);!fe.done;se++,fe=A.next())fe=K(ne,P,se,fe.value,G),fe!==null&&(e&&fe.alternate!==null&&ne.delete(fe.key===null?se:fe.key),S=i(fe,S,se),te===null?re=fe:te.sibling=fe,te=fe);return e&&ne.forEach(function(Fp){return a(P,Fp)}),Se&&fr(P,se),re}function Re(P,S,A,G){if(typeof A=="object"&&A!==null&&A.type===H&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case X:e:{for(var re=A.key,te=S;te!==null;){if(te.key===re){if(re=A.type,re===H){if(te.tag===7){o(P,te.sibling),S=n(te,A.props.children),S.return=P,P=S;break e}}else if(te.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===I&&ud(re)===te.type){o(P,te.sibling),S=n(te,A.props),S.ref=zo(P,te,A),S.return=P,P=S;break e}o(P,te);break}else a(P,te);te=te.sibling}A.type===H?(S=Cr(A.props.children,P.mode,G,A.key),S.return=P,P=S):(G=Xt(A.type,A.key,A.props,null,P.mode,G),G.ref=zo(P,S,A),G.return=P,P=G)}return u(P);case J:e:{for(te=A.key;S!==null;){if(S.key===te)if(S.tag===4&&S.stateNode.containerInfo===A.containerInfo&&S.stateNode.implementation===A.implementation){o(P,S.sibling),S=n(S,A.children||[]),S.return=P,P=S;break e}else{o(P,S);break}else a(P,S);S=S.sibling}S=pi(A,P.mode,G),S.return=P,P=S}return u(P);case I:return te=A._init,Re(P,S,te(A._payload),G)}if(so(A))return Z(P,S,A,G);if(Q(A))return ee(P,S,A,G);Lt(P,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,S!==null&&S.tag===6?(o(P,S.sibling),S=n(S,A),S.return=P,P=S):(o(P,S),S=mi(A,P.mode,G),S.return=P,P=S),u(P)):o(P,S)}return Re}var Gr=md(!0),pd=md(!1),At=Ga(null),Rt=null,Hr=null,Cs=null;function Ss(){Cs=Hr=Rt=null}function ws(e){var a=At.current;je(At),e._currentValue=a}function Ns(e,a,o){for(;e!==null;){var t=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,t!==null&&(t.childLanes|=a)):t!==null&&(t.childLanes&a)!==a&&(t.childLanes|=a),e===o)break;e=e.return}}function Qr(e,a){Rt=e,Cs=Hr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&a)!==0&&(Ze=!0),e.firstContext=null)}function ua(e){var a=e._currentValue;if(Cs!==e)if(e={context:e,memoizedValue:a,next:null},Hr===null){if(Rt===null)throw Error(l(308));Hr=e,Rt.dependencies={lanes:0,firstContext:e}}else Hr=Hr.next=e;return a}var gr=null;function ks(e){gr===null?gr=[e]:gr.push(e)}function fd(e,a,o,t){var n=a.interleaved;return n===null?(o.next=o,ks(a)):(o.next=n.next,n.next=o),a.interleaved=o,Ma(e,t)}function Ma(e,a){e.lanes|=a;var o=e.alternate;for(o!==null&&(o.lanes|=a),o=e,e=e.return;e!==null;)e.childLanes|=a,o=e.alternate,o!==null&&(o.childLanes|=a),o=e,e=e.return;return o.tag===3?o.stateNode:null}var Ja=!1;function Es(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gd(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Da(e,a){return{eventTime:e,lane:a,tag:0,payload:null,callback:null,next:null}}function Ka(e,a,o){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,(me&2)!==0){var n=t.pending;return n===null?a.next=a:(a.next=n.next,n.next=a),t.pending=a,Ma(e,o)}return n=t.interleaved,n===null?(a.next=a,ks(t)):(a.next=n.next,n.next=a),t.interleaved=a,Ma(e,o)}function zt(e,a,o){if(a=a.updateQueue,a!==null&&(a=a.shared,(o&4194240)!==0)){var t=a.lanes;t&=e.pendingLanes,o|=t,a.lanes=o,Bn(e,o)}}function hd(e,a){var o=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,o===t)){var n=null,i=null;if(o=o.firstBaseUpdate,o!==null){do{var u={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};i===null?n=i=u:i=i.next=u,o=o.next}while(o!==null);i===null?n=i=a:i=i.next=a}else n=i=a;o={baseState:t.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:t.shared,effects:t.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=a:e.next=a,o.lastBaseUpdate=a}function Mt(e,a,o,t){var n=e.updateQueue;Ja=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,x=n.shared.pending;if(x!==null){n.shared.pending=null;var b=x,R=b.next;b.next=null,u===null?i=R:u.next=R,u=b;var V=e.alternate;V!==null&&(V=V.updateQueue,x=V.lastBaseUpdate,x!==u&&(x===null?V.firstBaseUpdate=R:x.next=R,V.lastBaseUpdate=b))}if(i!==null){var U=n.baseState;u=0,V=R=b=null,x=i;do{var B=x.lane,K=x.eventTime;if((t&B)===B){V!==null&&(V=V.next={eventTime:K,lane:0,tag:x.tag,payload:x.payload,callback:x.callback,next:null});e:{var Z=e,ee=x;switch(B=a,K=o,ee.tag){case 1:if(Z=ee.payload,typeof Z=="function"){U=Z.call(K,U,B);break e}U=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=ee.payload,B=typeof Z=="function"?Z.call(K,U,B):Z,B==null)break e;U=W({},U,B);break e;case 2:Ja=!0}}x.callback!==null&&x.lane!==0&&(e.flags|=64,B=n.effects,B===null?n.effects=[x]:B.push(x))}else K={eventTime:K,lane:B,tag:x.tag,payload:x.payload,callback:x.callback,next:null},V===null?(R=V=K,b=U):V=V.next=K,u|=B;if(x=x.next,x===null){if(x=n.shared.pending,x===null)break;B=x,x=B.next,B.next=null,n.lastBaseUpdate=B,n.shared.pending=null}}while(!0);if(V===null&&(b=U),n.baseState=b,n.firstBaseUpdate=R,n.lastBaseUpdate=V,a=n.shared.interleaved,a!==null){n=a;do u|=n.lane,n=n.next;while(n!==a)}else i===null&&(n.shared.lanes=0);vr|=u,e.lanes=u,e.memoizedState=U}}function xd(e,a,o){if(e=a.effects,a.effects=null,e!==null)for(a=0;a<e.length;a++){var t=e[a],n=t.callback;if(n!==null){if(t.callback=null,t=o,typeof n!="function")throw Error(l(191,n));n.call(t)}}}var Mo={},Na=Ga(Mo),Do=Ga(Mo),Io=Ga(Mo);function hr(e){if(e===Mo)throw Error(l(174));return e}function Ps(e,a){switch(ye(Io,a),ye(Do,e),ye(Na,Mo),e=a.nodeType,e){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:Ln(null,"");break;default:e=e===8?a.parentNode:a,a=e.namespaceURI||null,e=e.tagName,a=Ln(a,e)}je(Na),ye(Na,a)}function Jr(){je(Na),je(Do),je(Io)}function vd(e){hr(Io.current);var a=hr(Na.current),o=Ln(a,e.type);a!==o&&(ye(Do,e),ye(Na,o))}function Ls(e){Do.current===e&&(je(Na),je(Do))}var we=Ga(0);function Dt(e){for(var a=e;a!==null;){if(a.tag===13){var o=a.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var As=[];function Rs(){for(var e=0;e<As.length;e++)As[e]._workInProgressVersionPrimary=null;As.length=0}var It=$.ReactCurrentDispatcher,zs=$.ReactCurrentBatchConfig,xr=0,Ne=null,Me=null,Fe=null,_t=!1,_o=!1,Fo=0,np=0;function We(){throw Error(l(321))}function Ms(e,a){if(a===null)return!1;for(var o=0;o<a.length&&o<e.length;o++)if(!ha(e[o],a[o]))return!1;return!0}function Ds(e,a,o,t,n,i){if(xr=i,Ne=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,It.current=e===null||e.memoizedState===null?dp:cp,e=o(t,n),_o){i=0;do{if(_o=!1,Fo=0,25<=i)throw Error(l(301));i+=1,Fe=Me=null,a.updateQueue=null,It.current=up,e=o(t,n)}while(_o)}if(It.current=Ot,a=Me!==null&&Me.next!==null,xr=0,Fe=Me=Ne=null,_t=!1,a)throw Error(l(300));return e}function Is(){var e=Fo!==0;return Fo=0,e}function ka(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Ne.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function ma(){if(Me===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var a=Fe===null?Ne.memoizedState:Fe.next;if(a!==null)Fe=a,Me=e;else{if(e===null)throw Error(l(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Fe===null?Ne.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function To(e,a){return typeof a=="function"?a(e):a}function _s(e){var a=ma(),o=a.queue;if(o===null)throw Error(l(311));o.lastRenderedReducer=e;var t=Me,n=t.baseQueue,i=o.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,o.pending=null}if(n!==null){i=n.next,t=t.baseState;var x=u=null,b=null,R=i;do{var V=R.lane;if((xr&V)===V)b!==null&&(b=b.next={lane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),t=R.hasEagerState?R.eagerState:e(t,R.action);else{var U={lane:V,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null};b===null?(x=b=U,u=t):b=b.next=U,Ne.lanes|=V,vr|=V}R=R.next}while(R!==null&&R!==i);b===null?u=t:b.next=x,ha(t,a.memoizedState)||(Ze=!0),a.memoizedState=t,a.baseState=u,a.baseQueue=b,o.lastRenderedState=t}if(e=o.interleaved,e!==null){n=e;do i=n.lane,Ne.lanes|=i,vr|=i,n=n.next;while(n!==e)}else n===null&&(o.lanes=0);return[a.memoizedState,o.dispatch]}function Fs(e){var a=ma(),o=a.queue;if(o===null)throw Error(l(311));o.lastRenderedReducer=e;var t=o.dispatch,n=o.pending,i=a.memoizedState;if(n!==null){o.pending=null;var u=n=n.next;do i=e(i,u.action),u=u.next;while(u!==n);ha(i,a.memoizedState)||(Ze=!0),a.memoizedState=i,a.baseQueue===null&&(a.baseState=i),o.lastRenderedState=i}return[i,t]}function yd(){}function bd(e,a){var o=Ne,t=ma(),n=a(),i=!ha(t.memoizedState,n);if(i&&(t.memoizedState=n,Ze=!0),t=t.queue,Ts(Sd.bind(null,o,t,e),[e]),t.getSnapshot!==a||i||Fe!==null&&Fe.memoizedState.tag&1){if(o.flags|=2048,Oo(9,Cd.bind(null,o,t,n,a),void 0,null),Te===null)throw Error(l(349));(xr&30)!==0||jd(o,a,n)}return n}function jd(e,a,o){e.flags|=16384,e={getSnapshot:a,value:o},a=Ne.updateQueue,a===null?(a={lastEffect:null,stores:null},Ne.updateQueue=a,a.stores=[e]):(o=a.stores,o===null?a.stores=[e]:o.push(e))}function Cd(e,a,o,t){a.value=o,a.getSnapshot=t,wd(a)&&Nd(e)}function Sd(e,a,o){return o(function(){wd(a)&&Nd(e)})}function wd(e){var a=e.getSnapshot;e=e.value;try{var o=a();return!ha(e,o)}catch{return!0}}function Nd(e){var a=Ma(e,1);a!==null&&ja(a,e,1,-1)}function kd(e){var a=ka();return typeof e=="function"&&(e=e()),a.memoizedState=a.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:e},a.queue=e,e=e.dispatch=lp.bind(null,Ne,e),[a.memoizedState,e]}function Oo(e,a,o,t){return e={tag:e,create:a,destroy:o,deps:t,next:null},a=Ne.updateQueue,a===null?(a={lastEffect:null,stores:null},Ne.updateQueue=a,a.lastEffect=e.next=e):(o=a.lastEffect,o===null?a.lastEffect=e.next=e:(t=o.next,o.next=e,e.next=t,a.lastEffect=e)),e}function Ed(){return ma().memoizedState}function Ft(e,a,o,t){var n=ka();Ne.flags|=e,n.memoizedState=Oo(1|a,o,void 0,t===void 0?null:t)}function Tt(e,a,o,t){var n=ma();t=t===void 0?null:t;var i=void 0;if(Me!==null){var u=Me.memoizedState;if(i=u.destroy,t!==null&&Ms(t,u.deps)){n.memoizedState=Oo(a,o,i,t);return}}Ne.flags|=e,n.memoizedState=Oo(1|a,o,i,t)}function Pd(e,a){return Ft(8390656,8,e,a)}function Ts(e,a){return Tt(2048,8,e,a)}function Ld(e,a){return Tt(4,2,e,a)}function Ad(e,a){return Tt(4,4,e,a)}function Rd(e,a){if(typeof a=="function")return e=e(),a(e),function(){a(null)};if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function zd(e,a,o){return o=o!=null?o.concat([e]):null,Tt(4,4,Rd.bind(null,a,e),o)}function Os(){}function Md(e,a){var o=ma();a=a===void 0?null:a;var t=o.memoizedState;return t!==null&&a!==null&&Ms(a,t[1])?t[0]:(o.memoizedState=[e,a],e)}function Dd(e,a){var o=ma();a=a===void 0?null:a;var t=o.memoizedState;return t!==null&&a!==null&&Ms(a,t[1])?t[0]:(e=e(),o.memoizedState=[e,a],e)}function Id(e,a,o){return(xr&21)===0?(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=o):(ha(o,a)||(o=ul(),Ne.lanes|=o,vr|=o,e.baseState=!0),a)}function sp(e,a){var o=xe;xe=o!==0&&4>o?o:4,e(!0);var t=zs.transition;zs.transition={};try{e(!1),a()}finally{xe=o,zs.transition=t}}function _d(){return ma().memoizedState}function ip(e,a,o){var t=er(e);if(o={lane:t,action:o,hasEagerState:!1,eagerState:null,next:null},Fd(e))Td(a,o);else if(o=fd(e,a,o,t),o!==null){var n=Je();ja(o,e,t,n),Od(o,a,t)}}function lp(e,a,o){var t=er(e),n={lane:t,action:o,hasEagerState:!1,eagerState:null,next:null};if(Fd(e))Td(a,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=a.lastRenderedReducer,i!==null))try{var u=a.lastRenderedState,x=i(u,o);if(n.hasEagerState=!0,n.eagerState=x,ha(x,u)){var b=a.interleaved;b===null?(n.next=n,ks(a)):(n.next=b.next,b.next=n),a.interleaved=n;return}}catch{}finally{}o=fd(e,a,n,t),o!==null&&(n=Je(),ja(o,e,t,n),Od(o,a,t))}}function Fd(e){var a=e.alternate;return e===Ne||a!==null&&a===Ne}function Td(e,a){_o=_t=!0;var o=e.pending;o===null?a.next=a:(a.next=o.next,o.next=a),e.pending=a}function Od(e,a,o){if((o&4194240)!==0){var t=a.lanes;t&=e.pendingLanes,o|=t,a.lanes=o,Bn(e,o)}}var Ot={readContext:ua,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},dp={readContext:ua,useCallback:function(e,a){return ka().memoizedState=[e,a===void 0?null:a],e},useContext:ua,useEffect:Pd,useImperativeHandle:function(e,a,o){return o=o!=null?o.concat([e]):null,Ft(4194308,4,Rd.bind(null,a,e),o)},useLayoutEffect:function(e,a){return Ft(4194308,4,e,a)},useInsertionEffect:function(e,a){return Ft(4,2,e,a)},useMemo:function(e,a){var o=ka();return a=a===void 0?null:a,e=e(),o.memoizedState=[e,a],e},useReducer:function(e,a,o){var t=ka();return a=o!==void 0?o(a):a,t.memoizedState=t.baseState=a,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},t.queue=e,e=e.dispatch=ip.bind(null,Ne,e),[t.memoizedState,e]},useRef:function(e){var a=ka();return e={current:e},a.memoizedState=e},useState:kd,useDebugValue:Os,useDeferredValue:function(e){return ka().memoizedState=e},useTransition:function(){var e=kd(!1),a=e[0];return e=sp.bind(null,e[1]),ka().memoizedState=e,[a,e]},useMutableSource:function(){},useSyncExternalStore:function(e,a,o){var t=Ne,n=ka();if(Se){if(o===void 0)throw Error(l(407));o=o()}else{if(o=a(),Te===null)throw Error(l(349));(xr&30)!==0||jd(t,a,o)}n.memoizedState=o;var i={value:o,getSnapshot:a};return n.queue=i,Pd(Sd.bind(null,t,i,e),[e]),t.flags|=2048,Oo(9,Cd.bind(null,t,i,o,a),void 0,null),o},useId:function(){var e=ka(),a=Te.identifierPrefix;if(Se){var o=za,t=Ra;o=(t&~(1<<32-ga(t)-1)).toString(32)+o,a=":"+a+"R"+o,o=Fo++,0<o&&(a+="H"+o.toString(32)),a+=":"}else o=np++,a=":"+a+"r"+o.toString(32)+":";return e.memoizedState=a},unstable_isNewReconciler:!1},cp={readContext:ua,useCallback:Md,useContext:ua,useEffect:Ts,useImperativeHandle:zd,useInsertionEffect:Ld,useLayoutEffect:Ad,useMemo:Dd,useReducer:_s,useRef:Ed,useState:function(){return _s(To)},useDebugValue:Os,useDeferredValue:function(e){var a=ma();return Id(a,Me.memoizedState,e)},useTransition:function(){var e=_s(To)[0],a=ma().memoizedState;return[e,a]},useMutableSource:yd,useSyncExternalStore:bd,useId:_d,unstable_isNewReconciler:!1},up={readContext:ua,useCallback:Md,useContext:ua,useEffect:Ts,useImperativeHandle:zd,useInsertionEffect:Ld,useLayoutEffect:Ad,useMemo:Dd,useReducer:Fs,useRef:Ed,useState:function(){return Fs(To)},useDebugValue:Os,useDeferredValue:function(e){var a=ma();return Me===null?a.memoizedState=e:Id(a,Me.memoizedState,e)},useTransition:function(){var e=Fs(To)[0],a=ma().memoizedState;return[e,a]},useMutableSource:yd,useSyncExternalStore:bd,useId:_d,unstable_isNewReconciler:!1};function va(e,a){if(e&&e.defaultProps){a=W({},a),e=e.defaultProps;for(var o in e)a[o]===void 0&&(a[o]=e[o]);return a}return a}function $s(e,a,o,t){a=e.memoizedState,o=o(t,a),o=o==null?a:W({},a,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var $t={isMounted:function(e){return(e=e._reactInternals)?cr(e)===e:!1},enqueueSetState:function(e,a,o){e=e._reactInternals;var t=Je(),n=er(e),i=Da(t,n);i.payload=a,o!=null&&(i.callback=o),a=Ka(e,i,n),a!==null&&(ja(a,e,n,t),zt(a,e,n))},enqueueReplaceState:function(e,a,o){e=e._reactInternals;var t=Je(),n=er(e),i=Da(t,n);i.tag=1,i.payload=a,o!=null&&(i.callback=o),a=Ka(e,i,n),a!==null&&(ja(a,e,n,t),zt(a,e,n))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var o=Je(),t=er(e),n=Da(o,t);n.tag=2,a!=null&&(n.callback=a),a=Ka(e,n,t),a!==null&&(ja(a,e,t,o),zt(a,e,t))}};function $d(e,a,o,t,n,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,i,u):a.prototype&&a.prototype.isPureReactComponent?!No(o,t)||!No(n,i):!0}function Bd(e,a,o){var t=!1,n=Ha,i=a.contextType;return typeof i=="object"&&i!==null?i=ua(i):(n=Ye(a)?mr:Ue.current,t=a.contextTypes,i=(t=t!=null)?Vr(e,n):Ha),a=new a(o,i),e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=$t,e.stateNode=a,a._reactInternals=e,t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),a}function Vd(e,a,o,t){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(o,t),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(o,t),a.state!==e&&$t.enqueueReplaceState(a,a.state,null)}function Bs(e,a,o,t){var n=e.stateNode;n.props=o,n.state=e.memoizedState,n.refs={},Es(e);var i=a.contextType;typeof i=="object"&&i!==null?n.context=ua(i):(i=Ye(a)?mr:Ue.current,n.context=Vr(e,i)),n.state=e.memoizedState,i=a.getDerivedStateFromProps,typeof i=="function"&&($s(e,a,i,o),n.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(a=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),a!==n.state&&$t.enqueueReplaceState(n,n.state,null),Mt(e,o,n,t),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308)}function Kr(e,a){try{var o="",t=a;do o+=le(t),t=t.return;while(t);var n=o}catch(i){n=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:a,stack:n,digest:null}}function Vs(e,a,o){return{value:e,source:null,stack:o??null,digest:a??null}}function qs(e,a){try{console.error(a.value)}catch(o){setTimeout(function(){throw o})}}var mp=typeof WeakMap=="function"?WeakMap:Map;function qd(e,a,o){o=Da(-1,o),o.tag=3,o.payload={element:null};var t=a.value;return o.callback=function(){Ht||(Ht=!0,ti=t),qs(e,a)},o}function Ud(e,a,o){o=Da(-1,o),o.tag=3;var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var n=a.value;o.payload=function(){return t(n)},o.callback=function(){qs(e,a)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(o.callback=function(){qs(e,a),typeof t!="function"&&(Za===null?Za=new Set([this]):Za.add(this));var u=a.stack;this.componentDidCatch(a.value,{componentStack:u!==null?u:""})}),o}function Wd(e,a,o){var t=e.pingCache;if(t===null){t=e.pingCache=new mp;var n=new Set;t.set(a,n)}else n=t.get(a),n===void 0&&(n=new Set,t.set(a,n));n.has(o)||(n.add(o),e=kp.bind(null,e,a,o),a.then(e,e))}function Gd(e){do{var a;if((a=e.tag===13)&&(a=e.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return e;e=e.return}while(e!==null);return null}function Hd(e,a,o,t,n){return(e.mode&1)===0?(e===a?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(a=Da(-1,1),a.tag=2,Ka(o,a,1))),o.lanes|=1),e):(e.flags|=65536,e.lanes=n,e)}var pp=$.ReactCurrentOwner,Ze=!1;function Qe(e,a,o,t){a.child=e===null?pd(a,null,o,t):Gr(a,e.child,o,t)}function Qd(e,a,o,t,n){o=o.render;var i=a.ref;return Qr(a,n),t=Ds(e,a,o,t,i,n),o=Is(),e!==null&&!Ze?(a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~n,Ia(e,a,n)):(Se&&o&&xs(a),a.flags|=1,Qe(e,a,t,n),a.child)}function Jd(e,a,o,t,n){if(e===null){var i=o.type;return typeof i=="function"&&!ui(i)&&i.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(a.tag=15,a.type=i,Kd(e,a,i,t,n)):(e=Xt(o.type,null,t,a,a.mode,n),e.ref=a.ref,e.return=a,a.child=e)}if(i=e.child,(e.lanes&n)===0){var u=i.memoizedProps;if(o=o.compare,o=o!==null?o:No,o(u,t)&&e.ref===a.ref)return Ia(e,a,n)}return a.flags|=1,e=rr(i,t),e.ref=a.ref,e.return=a,a.child=e}function Kd(e,a,o,t,n){if(e!==null){var i=e.memoizedProps;if(No(i,t)&&e.ref===a.ref)if(Ze=!1,a.pendingProps=t=i,(e.lanes&n)!==0)(e.flags&131072)!==0&&(Ze=!0);else return a.lanes=e.lanes,Ia(e,a,n)}return Us(e,a,o,t,n)}function Yd(e,a,o){var t=a.pendingProps,n=t.children,i=e!==null?e.memoizedState:null;if(t.mode==="hidden")if((a.mode&1)===0)a.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Zr,sa),sa|=o;else{if((o&1073741824)===0)return e=i!==null?i.baseLanes|o:o,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:e,cachePool:null,transitions:null},a.updateQueue=null,ye(Zr,sa),sa|=e,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=i!==null?i.baseLanes:o,ye(Zr,sa),sa|=t}else i!==null?(t=i.baseLanes|o,a.memoizedState=null):t=o,ye(Zr,sa),sa|=t;return Qe(e,a,n,o),a.child}function Zd(e,a){var o=a.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(a.flags|=512,a.flags|=2097152)}function Us(e,a,o,t,n){var i=Ye(o)?mr:Ue.current;return i=Vr(a,i),Qr(a,n),o=Ds(e,a,o,t,i,n),t=Is(),e!==null&&!Ze?(a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~n,Ia(e,a,n)):(Se&&t&&xs(a),a.flags|=1,Qe(e,a,o,n),a.child)}function Xd(e,a,o,t,n){if(Ye(o)){var i=!0;wt(a)}else i=!1;if(Qr(a,n),a.stateNode===null)Vt(e,a),Bd(a,o,t),Bs(a,o,t,n),t=!0;else if(e===null){var u=a.stateNode,x=a.memoizedProps;u.props=x;var b=u.context,R=o.contextType;typeof R=="object"&&R!==null?R=ua(R):(R=Ye(o)?mr:Ue.current,R=Vr(a,R));var V=o.getDerivedStateFromProps,U=typeof V=="function"||typeof u.getSnapshotBeforeUpdate=="function";U||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(x!==t||b!==R)&&Vd(a,u,t,R),Ja=!1;var B=a.memoizedState;u.state=B,Mt(a,t,u,n),b=a.memoizedState,x!==t||B!==b||Ke.current||Ja?(typeof V=="function"&&($s(a,o,V,t),b=a.memoizedState),(x=Ja||$d(a,o,x,t,B,b,R))?(U||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(a.flags|=4194308)):(typeof u.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=t,a.memoizedState=b),u.props=t,u.state=b,u.context=R,t=x):(typeof u.componentDidMount=="function"&&(a.flags|=4194308),t=!1)}else{u=a.stateNode,gd(e,a),x=a.memoizedProps,R=a.type===a.elementType?x:va(a.type,x),u.props=R,U=a.pendingProps,B=u.context,b=o.contextType,typeof b=="object"&&b!==null?b=ua(b):(b=Ye(o)?mr:Ue.current,b=Vr(a,b));var K=o.getDerivedStateFromProps;(V=typeof K=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(x!==U||B!==b)&&Vd(a,u,t,b),Ja=!1,B=a.memoizedState,u.state=B,Mt(a,t,u,n);var Z=a.memoizedState;x!==U||B!==Z||Ke.current||Ja?(typeof K=="function"&&($s(a,o,K,t),Z=a.memoizedState),(R=Ja||$d(a,o,R,t,B,Z,b)||!1)?(V||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(t,Z,b),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(t,Z,b)),typeof u.componentDidUpdate=="function"&&(a.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof u.componentDidUpdate!="function"||x===e.memoizedProps&&B===e.memoizedState||(a.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&B===e.memoizedState||(a.flags|=1024),a.memoizedProps=t,a.memoizedState=Z),u.props=t,u.state=Z,u.context=b,t=R):(typeof u.componentDidUpdate!="function"||x===e.memoizedProps&&B===e.memoizedState||(a.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&B===e.memoizedState||(a.flags|=1024),t=!1)}return Ws(e,a,o,t,i,n)}function Ws(e,a,o,t,n,i){Zd(e,a);var u=(a.flags&128)!==0;if(!t&&!u)return n&&td(a,o,!1),Ia(e,a,i);t=a.stateNode,pp.current=a;var x=u&&typeof o.getDerivedStateFromError!="function"?null:t.render();return a.flags|=1,e!==null&&u?(a.child=Gr(a,e.child,null,i),a.child=Gr(a,null,x,i)):Qe(e,a,x,i),a.memoizedState=t.state,n&&td(a,o,!0),a.child}function ec(e){var a=e.stateNode;a.pendingContext?rd(e,a.pendingContext,a.pendingContext!==a.context):a.context&&rd(e,a.context,!1),Ps(e,a.containerInfo)}function ac(e,a,o,t,n){return Wr(),js(n),a.flags|=256,Qe(e,a,o,t),a.child}var Gs={dehydrated:null,treeContext:null,retryLane:0};function Hs(e){return{baseLanes:e,cachePool:null,transitions:null}}function rc(e,a,o){var t=a.pendingProps,n=we.current,i=!1,u=(a.flags&128)!==0,x;if((x=u)||(x=e!==null&&e.memoizedState===null?!1:(n&2)!==0),x?(i=!0,a.flags&=-129):(e===null||e.memoizedState!==null)&&(n|=1),ye(we,n&1),e===null)return bs(a),e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((a.mode&1)===0?a.lanes=1:e.data==="$!"?a.lanes=8:a.lanes=1073741824,null):(u=t.children,e=t.fallback,i?(t=a.mode,i=a.child,u={mode:"hidden",children:u},(t&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=u):i=en(u,t,0,null),e=Cr(e,t,o,null),i.return=a,e.return=a,i.sibling=e,a.child=i,a.child.memoizedState=Hs(o),a.memoizedState=Gs,e):Qs(a,u));if(n=e.memoizedState,n!==null&&(x=n.dehydrated,x!==null))return fp(e,a,u,t,x,n,o);if(i){i=t.fallback,u=a.mode,n=e.child,x=n.sibling;var b={mode:"hidden",children:t.children};return(u&1)===0&&a.child!==n?(t=a.child,t.childLanes=0,t.pendingProps=b,a.deletions=null):(t=rr(n,b),t.subtreeFlags=n.subtreeFlags&14680064),x!==null?i=rr(x,i):(i=Cr(i,u,o,null),i.flags|=2),i.return=a,t.return=a,t.sibling=i,a.child=t,t=i,i=a.child,u=e.child.memoizedState,u=u===null?Hs(o):{baseLanes:u.baseLanes|o,cachePool:null,transitions:u.transitions},i.memoizedState=u,i.childLanes=e.childLanes&~o,a.memoizedState=Gs,t}return i=e.child,e=i.sibling,t=rr(i,{mode:"visible",children:t.children}),(a.mode&1)===0&&(t.lanes=o),t.return=a,t.sibling=null,e!==null&&(o=a.deletions,o===null?(a.deletions=[e],a.flags|=16):o.push(e)),a.child=t,a.memoizedState=null,t}function Qs(e,a){return a=en({mode:"visible",children:a},e.mode,0,null),a.return=e,e.child=a}function Bt(e,a,o,t){return t!==null&&js(t),Gr(a,e.child,null,o),e=Qs(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function fp(e,a,o,t,n,i,u){if(o)return a.flags&256?(a.flags&=-257,t=Vs(Error(l(422))),Bt(e,a,u,t)):a.memoizedState!==null?(a.child=e.child,a.flags|=128,null):(i=t.fallback,n=a.mode,t=en({mode:"visible",children:t.children},n,0,null),i=Cr(i,n,u,null),i.flags|=2,t.return=a,i.return=a,t.sibling=i,a.child=t,(a.mode&1)!==0&&Gr(a,e.child,null,u),a.child.memoizedState=Hs(u),a.memoizedState=Gs,i);if((a.mode&1)===0)return Bt(e,a,u,null);if(n.data==="$!"){if(t=n.nextSibling&&n.nextSibling.dataset,t)var x=t.dgst;return t=x,i=Error(l(419)),t=Vs(i,t,void 0),Bt(e,a,u,t)}if(x=(u&e.childLanes)!==0,Ze||x){if(t=Te,t!==null){switch(u&-u){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=(n&(t.suspendedLanes|u))!==0?0:n,n!==0&&n!==i.retryLane&&(i.retryLane=n,Ma(e,n),ja(t,e,n,-1))}return ci(),t=Vs(Error(l(421))),Bt(e,a,u,t)}return n.data==="$?"?(a.flags|=128,a.child=e.child,a=Ep.bind(null,e),n._reactRetry=a,null):(e=i.treeContext,na=Wa(n.nextSibling),ta=a,Se=!0,xa=null,e!==null&&(da[ca++]=Ra,da[ca++]=za,da[ca++]=pr,Ra=e.id,za=e.overflow,pr=a),a=Qs(a,t.children),a.flags|=4096,a)}function oc(e,a,o){e.lanes|=a;var t=e.alternate;t!==null&&(t.lanes|=a),Ns(e.return,a,o)}function Js(e,a,o,t,n){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:t,tail:o,tailMode:n}:(i.isBackwards=a,i.rendering=null,i.renderingStartTime=0,i.last=t,i.tail=o,i.tailMode=n)}function tc(e,a,o){var t=a.pendingProps,n=t.revealOrder,i=t.tail;if(Qe(e,a,t.children,o),t=we.current,(t&2)!==0)t=t&1|2,a.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&oc(e,o,a);else if(e.tag===19)oc(e,o,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}if(ye(we,t),(a.mode&1)===0)a.memoizedState=null;else switch(n){case"forwards":for(o=a.child,n=null;o!==null;)e=o.alternate,e!==null&&Dt(e)===null&&(n=o),o=o.sibling;o=n,o===null?(n=a.child,a.child=null):(n=o.sibling,o.sibling=null),Js(a,!1,n,o,i);break;case"backwards":for(o=null,n=a.child,a.child=null;n!==null;){if(e=n.alternate,e!==null&&Dt(e)===null){a.child=n;break}e=n.sibling,n.sibling=o,o=n,n=e}Js(a,!0,o,null,i);break;case"together":Js(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Vt(e,a){(a.mode&1)===0&&e!==null&&(e.alternate=null,a.alternate=null,a.flags|=2)}function Ia(e,a,o){if(e!==null&&(a.dependencies=e.dependencies),vr|=a.lanes,(o&a.childLanes)===0)return null;if(e!==null&&a.child!==e.child)throw Error(l(153));if(a.child!==null){for(e=a.child,o=rr(e,e.pendingProps),a.child=o,o.return=a;e.sibling!==null;)e=e.sibling,o=o.sibling=rr(e,e.pendingProps),o.return=a;o.sibling=null}return a.child}function gp(e,a,o){switch(a.tag){case 3:ec(a),Wr();break;case 5:vd(a);break;case 1:Ye(a.type)&&wt(a);break;case 4:Ps(a,a.stateNode.containerInfo);break;case 10:var t=a.type._context,n=a.memoizedProps.value;ye(At,t._currentValue),t._currentValue=n;break;case 13:if(t=a.memoizedState,t!==null)return t.dehydrated!==null?(ye(we,we.current&1),a.flags|=128,null):(o&a.child.childLanes)!==0?rc(e,a,o):(ye(we,we.current&1),e=Ia(e,a,o),e!==null?e.sibling:null);ye(we,we.current&1);break;case 19:if(t=(o&a.childLanes)!==0,(e.flags&128)!==0){if(t)return tc(e,a,o);a.flags|=128}if(n=a.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),ye(we,we.current),t)break;return null;case 22:case 23:return a.lanes=0,Yd(e,a,o)}return Ia(e,a,o)}var nc,Ks,sc,ic;nc=function(e,a){for(var o=a.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break;for(;o.sibling===null;){if(o.return===null||o.return===a)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ks=function(){},sc=function(e,a,o,t){var n=e.memoizedProps;if(n!==t){e=a.stateNode,hr(Na.current);var i=null;switch(o){case"input":n=Nn(e,n),t=Nn(e,t),i=[];break;case"select":n=W({},n,{value:void 0}),t=W({},t,{value:void 0}),i=[];break;case"textarea":n=Pn(e,n),t=Pn(e,t),i=[];break;default:typeof n.onClick!="function"&&typeof t.onClick=="function"&&(e.onclick=jt)}An(o,t);var u;o=null;for(R in n)if(!t.hasOwnProperty(R)&&n.hasOwnProperty(R)&&n[R]!=null)if(R==="style"){var x=n[R];for(u in x)x.hasOwnProperty(u)&&(o||(o={}),o[u]="")}else R!=="dangerouslySetInnerHTML"&&R!=="children"&&R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&R!=="autoFocus"&&(c.hasOwnProperty(R)?i||(i=[]):(i=i||[]).push(R,null));for(R in t){var b=t[R];if(x=n!=null?n[R]:void 0,t.hasOwnProperty(R)&&b!==x&&(b!=null||x!=null))if(R==="style")if(x){for(u in x)!x.hasOwnProperty(u)||b&&b.hasOwnProperty(u)||(o||(o={}),o[u]="");for(u in b)b.hasOwnProperty(u)&&x[u]!==b[u]&&(o||(o={}),o[u]=b[u])}else o||(i||(i=[]),i.push(R,o)),o=b;else R==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,x=x?x.__html:void 0,b!=null&&x!==b&&(i=i||[]).push(R,b)):R==="children"?typeof b!="string"&&typeof b!="number"||(i=i||[]).push(R,""+b):R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&(c.hasOwnProperty(R)?(b!=null&&R==="onScroll"&&be("scroll",e),i||x===b||(i=[])):(i=i||[]).push(R,b))}o&&(i=i||[]).push("style",o);var R=i;(a.updateQueue=R)&&(a.flags|=4)}},ic=function(e,a,o,t){o!==t&&(a.flags|=4)};function $o(e,a){if(!Se)switch(e.tailMode){case"hidden":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var t=null;o!==null;)o.alternate!==null&&(t=o),o=o.sibling;t===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function Ge(e){var a=e.alternate!==null&&e.alternate.child===e.child,o=0,t=0;if(a)for(var n=e.child;n!==null;)o|=n.lanes|n.childLanes,t|=n.subtreeFlags&14680064,t|=n.flags&14680064,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)o|=n.lanes|n.childLanes,t|=n.subtreeFlags,t|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=t,e.childLanes=o,a}function hp(e,a,o){var t=a.pendingProps;switch(vs(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(a),null;case 1:return Ye(a.type)&&St(),Ge(a),null;case 3:return t=a.stateNode,Jr(),je(Ke),je(Ue),Rs(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Pt(a)?a.flags|=4:e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,xa!==null&&(ii(xa),xa=null))),Ks(e,a),Ge(a),null;case 5:Ls(a);var n=hr(Io.current);if(o=a.type,e!==null&&a.stateNode!=null)sc(e,a,o,t,n),e.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!t){if(a.stateNode===null)throw Error(l(166));return Ge(a),null}if(e=hr(Na.current),Pt(a)){t=a.stateNode,o=a.type;var i=a.memoizedProps;switch(t[wa]=a,t[Ao]=i,e=(a.mode&1)!==0,o){case"dialog":be("cancel",t),be("close",t);break;case"iframe":case"object":case"embed":be("load",t);break;case"video":case"audio":for(n=0;n<Eo.length;n++)be(Eo[n],t);break;case"source":be("error",t);break;case"img":case"image":case"link":be("error",t),be("load",t);break;case"details":be("toggle",t);break;case"input":Bi(t,i),be("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!i.multiple},be("invalid",t);break;case"textarea":Ui(t,i),be("invalid",t)}An(o,i),n=null;for(var u in i)if(i.hasOwnProperty(u)){var x=i[u];u==="children"?typeof x=="string"?t.textContent!==x&&(i.suppressHydrationWarning!==!0&&bt(t.textContent,x,e),n=["children",x]):typeof x=="number"&&t.textContent!==""+x&&(i.suppressHydrationWarning!==!0&&bt(t.textContent,x,e),n=["children",""+x]):c.hasOwnProperty(u)&&x!=null&&u==="onScroll"&&be("scroll",t)}switch(o){case"input":Yo(t),qi(t,i,!0);break;case"textarea":Yo(t),Gi(t);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(t.onclick=jt)}t=n,a.updateQueue=t,t!==null&&(a.flags|=4)}else{u=n.nodeType===9?n:n.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hi(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof t.is=="string"?e=u.createElement(o,{is:t.is}):(e=u.createElement(o),o==="select"&&(u=e,t.multiple?u.multiple=!0:t.size&&(u.size=t.size))):e=u.createElementNS(e,o),e[wa]=a,e[Ao]=t,nc(e,a,!1,!1),a.stateNode=e;e:{switch(u=Rn(o,t),o){case"dialog":be("cancel",e),be("close",e),n=t;break;case"iframe":case"object":case"embed":be("load",e),n=t;break;case"video":case"audio":for(n=0;n<Eo.length;n++)be(Eo[n],e);n=t;break;case"source":be("error",e),n=t;break;case"img":case"image":case"link":be("error",e),be("load",e),n=t;break;case"details":be("toggle",e),n=t;break;case"input":Bi(e,t),n=Nn(e,t),be("invalid",e);break;case"option":n=t;break;case"select":e._wrapperState={wasMultiple:!!t.multiple},n=W({},t,{value:void 0}),be("invalid",e);break;case"textarea":Ui(e,t),n=Pn(e,t),be("invalid",e);break;default:n=t}An(o,n),x=n;for(i in x)if(x.hasOwnProperty(i)){var b=x[i];i==="style"?Ki(e,b):i==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,b!=null&&Qi(e,b)):i==="children"?typeof b=="string"?(o!=="textarea"||b!=="")&&io(e,b):typeof b=="number"&&io(e,""+b):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(c.hasOwnProperty(i)?b!=null&&i==="onScroll"&&be("scroll",e):b!=null&&D(e,i,b,u))}switch(o){case"input":Yo(e),qi(e,t,!1);break;case"textarea":Yo(e),Gi(e);break;case"option":t.value!=null&&e.setAttribute("value",""+he(t.value));break;case"select":e.multiple=!!t.multiple,i=t.value,i!=null?Ar(e,!!t.multiple,i,!1):t.defaultValue!=null&&Ar(e,!!t.multiple,t.defaultValue,!0);break;default:typeof n.onClick=="function"&&(e.onclick=jt)}switch(o){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}}t&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return Ge(a),null;case 6:if(e&&a.stateNode!=null)ic(e,a,e.memoizedProps,t);else{if(typeof t!="string"&&a.stateNode===null)throw Error(l(166));if(o=hr(Io.current),hr(Na.current),Pt(a)){if(t=a.stateNode,o=a.memoizedProps,t[wa]=a,(i=t.nodeValue!==o)&&(e=ta,e!==null))switch(e.tag){case 3:bt(t.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&bt(t.nodeValue,o,(e.mode&1)!==0)}i&&(a.flags|=4)}else t=(o.nodeType===9?o:o.ownerDocument).createTextNode(t),t[wa]=a,a.stateNode=t}return Ge(a),null;case 13:if(je(we),t=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&na!==null&&(a.mode&1)!==0&&(a.flags&128)===0)cd(),Wr(),a.flags|=98560,i=!1;else if(i=Pt(a),t!==null&&t.dehydrated!==null){if(e===null){if(!i)throw Error(l(318));if(i=a.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(l(317));i[wa]=a}else Wr(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ge(a),i=!1}else xa!==null&&(ii(xa),xa=null),i=!0;if(!i)return a.flags&65536?a:null}return(a.flags&128)!==0?(a.lanes=o,a):(t=t!==null,t!==(e!==null&&e.memoizedState!==null)&&t&&(a.child.flags|=8192,(a.mode&1)!==0&&(e===null||(we.current&1)!==0?De===0&&(De=3):ci())),a.updateQueue!==null&&(a.flags|=4),Ge(a),null);case 4:return Jr(),Ks(e,a),e===null&&Po(a.stateNode.containerInfo),Ge(a),null;case 10:return ws(a.type._context),Ge(a),null;case 17:return Ye(a.type)&&St(),Ge(a),null;case 19:if(je(we),i=a.memoizedState,i===null)return Ge(a),null;if(t=(a.flags&128)!==0,u=i.rendering,u===null)if(t)$o(i,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(u=Dt(e),u!==null){for(a.flags|=128,$o(i,!1),t=u.updateQueue,t!==null&&(a.updateQueue=t,a.flags|=4),a.subtreeFlags=0,t=o,o=a.child;o!==null;)i=o,e=t,i.flags&=14680066,u=i.alternate,u===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=u.childLanes,i.lanes=u.lanes,i.child=u.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=u.memoizedProps,i.memoizedState=u.memoizedState,i.updateQueue=u.updateQueue,i.type=u.type,e=u.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return ye(we,we.current&1|2),a.child}e=e.sibling}i.tail!==null&&Ae()>Xr&&(a.flags|=128,t=!0,$o(i,!1),a.lanes=4194304)}else{if(!t)if(e=Dt(u),e!==null){if(a.flags|=128,t=!0,o=e.updateQueue,o!==null&&(a.updateQueue=o,a.flags|=4),$o(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!Se)return Ge(a),null}else 2*Ae()-i.renderingStartTime>Xr&&o!==1073741824&&(a.flags|=128,t=!0,$o(i,!1),a.lanes=4194304);i.isBackwards?(u.sibling=a.child,a.child=u):(o=i.last,o!==null?o.sibling=u:a.child=u,i.last=u)}return i.tail!==null?(a=i.tail,i.rendering=a,i.tail=a.sibling,i.renderingStartTime=Ae(),a.sibling=null,o=we.current,ye(we,t?o&1|2:o&1),a):(Ge(a),null);case 22:case 23:return di(),t=a.memoizedState!==null,e!==null&&e.memoizedState!==null!==t&&(a.flags|=8192),t&&(a.mode&1)!==0?(sa&1073741824)!==0&&(Ge(a),a.subtreeFlags&6&&(a.flags|=8192)):Ge(a),null;case 24:return null;case 25:return null}throw Error(l(156,a.tag))}function xp(e,a){switch(vs(a),a.tag){case 1:return Ye(a.type)&&St(),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Jr(),je(Ke),je(Ue),Rs(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 5:return Ls(a),null;case 13:if(je(we),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(l(340));Wr()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return je(we),null;case 4:return Jr(),null;case 10:return ws(a.type._context),null;case 22:case 23:return di(),null;case 24:return null;default:return null}}var qt=!1,He=!1,vp=typeof WeakSet=="function"?WeakSet:Set,Y=null;function Yr(e,a){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(t){Pe(e,a,t)}else o.current=null}function Ys(e,a,o){try{o()}catch(t){Pe(e,a,t)}}var lc=!1;function yp(e,a){if(ds=dt,e=$l(),as(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var t=o.getSelection&&o.getSelection();if(t&&t.rangeCount!==0){o=t.anchorNode;var n=t.anchorOffset,i=t.focusNode;t=t.focusOffset;try{o.nodeType,i.nodeType}catch{o=null;break e}var u=0,x=-1,b=-1,R=0,V=0,U=e,B=null;a:for(;;){for(var K;U!==o||n!==0&&U.nodeType!==3||(x=u+n),U!==i||t!==0&&U.nodeType!==3||(b=u+t),U.nodeType===3&&(u+=U.nodeValue.length),(K=U.firstChild)!==null;)B=U,U=K;for(;;){if(U===e)break a;if(B===o&&++R===n&&(x=u),B===i&&++V===t&&(b=u),(K=U.nextSibling)!==null)break;U=B,B=U.parentNode}U=K}o=x===-1||b===-1?null:{start:x,end:b}}else o=null}o=o||{start:0,end:0}}else o=null;for(cs={focusedElem:e,selectionRange:o},dt=!1,Y=a;Y!==null;)if(a=Y,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Y=e;else for(;Y!==null;){a=Y;try{var Z=a.alternate;if((a.flags&1024)!==0)switch(a.tag){case 0:case 11:case 15:break;case 1:if(Z!==null){var ee=Z.memoizedProps,Re=Z.memoizedState,P=a.stateNode,S=P.getSnapshotBeforeUpdate(a.elementType===a.type?ee:va(a.type,ee),Re);P.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var A=a.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(G){Pe(a,a.return,G)}if(e=a.sibling,e!==null){e.return=a.return,Y=e;break}Y=a.return}return Z=lc,lc=!1,Z}function Bo(e,a,o){var t=a.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.destroy;n.destroy=void 0,i!==void 0&&Ys(a,o,i)}n=n.next}while(n!==t)}}function Ut(e,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var o=a=a.next;do{if((o.tag&e)===e){var t=o.create;o.destroy=t()}o=o.next}while(o!==a)}}function Zs(e){var a=e.ref;if(a!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof a=="function"?a(e):a.current=e}}function dc(e){var a=e.alternate;a!==null&&(e.alternate=null,dc(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&(delete a[wa],delete a[Ao],delete a[fs],delete a[ap],delete a[rp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cc(e){return e.tag===5||e.tag===3||e.tag===4}function uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xs(e,a,o){var t=e.tag;if(t===5||t===6)e=e.stateNode,a?o.nodeType===8?o.parentNode.insertBefore(e,a):o.insertBefore(e,a):(o.nodeType===8?(a=o.parentNode,a.insertBefore(e,o)):(a=o,a.appendChild(e)),o=o._reactRootContainer,o!=null||a.onclick!==null||(a.onclick=jt));else if(t!==4&&(e=e.child,e!==null))for(Xs(e,a,o),e=e.sibling;e!==null;)Xs(e,a,o),e=e.sibling}function ei(e,a,o){var t=e.tag;if(t===5||t===6)e=e.stateNode,a?o.insertBefore(e,a):o.appendChild(e);else if(t!==4&&(e=e.child,e!==null))for(ei(e,a,o),e=e.sibling;e!==null;)ei(e,a,o),e=e.sibling}var Ve=null,ya=!1;function Ya(e,a,o){for(o=o.child;o!==null;)mc(e,a,o),o=o.sibling}function mc(e,a,o){if(Sa&&typeof Sa.onCommitFiberUnmount=="function")try{Sa.onCommitFiberUnmount(ot,o)}catch{}switch(o.tag){case 5:He||Yr(o,a);case 6:var t=Ve,n=ya;Ve=null,Ya(e,a,o),Ve=t,ya=n,Ve!==null&&(ya?(e=Ve,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):Ve.removeChild(o.stateNode));break;case 18:Ve!==null&&(ya?(e=Ve,o=o.stateNode,e.nodeType===8?ps(e.parentNode,o):e.nodeType===1&&ps(e,o),yo(e)):ps(Ve,o.stateNode));break;case 4:t=Ve,n=ya,Ve=o.stateNode.containerInfo,ya=!0,Ya(e,a,o),Ve=t,ya=n;break;case 0:case 11:case 14:case 15:if(!He&&(t=o.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){n=t=t.next;do{var i=n,u=i.destroy;i=i.tag,u!==void 0&&((i&2)!==0||(i&4)!==0)&&Ys(o,a,u),n=n.next}while(n!==t)}Ya(e,a,o);break;case 1:if(!He&&(Yr(o,a),t=o.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=o.memoizedProps,t.state=o.memoizedState,t.componentWillUnmount()}catch(x){Pe(o,a,x)}Ya(e,a,o);break;case 21:Ya(e,a,o);break;case 22:o.mode&1?(He=(t=He)||o.memoizedState!==null,Ya(e,a,o),He=t):Ya(e,a,o);break;default:Ya(e,a,o)}}function pc(e){var a=e.updateQueue;if(a!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new vp),a.forEach(function(t){var n=Pp.bind(null,e,t);o.has(t)||(o.add(t),t.then(n,n))})}}function ba(e,a){var o=a.deletions;if(o!==null)for(var t=0;t<o.length;t++){var n=o[t];try{var i=e,u=a,x=u;e:for(;x!==null;){switch(x.tag){case 5:Ve=x.stateNode,ya=!1;break e;case 3:Ve=x.stateNode.containerInfo,ya=!0;break e;case 4:Ve=x.stateNode.containerInfo,ya=!0;break e}x=x.return}if(Ve===null)throw Error(l(160));mc(i,u,n),Ve=null,ya=!1;var b=n.alternate;b!==null&&(b.return=null),n.return=null}catch(R){Pe(n,a,R)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)fc(a,e),a=a.sibling}function fc(e,a){var o=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ba(a,e),Ea(e),t&4){try{Bo(3,e,e.return),Ut(3,e)}catch(ee){Pe(e,e.return,ee)}try{Bo(5,e,e.return)}catch(ee){Pe(e,e.return,ee)}}break;case 1:ba(a,e),Ea(e),t&512&&o!==null&&Yr(o,o.return);break;case 5:if(ba(a,e),Ea(e),t&512&&o!==null&&Yr(o,o.return),e.flags&32){var n=e.stateNode;try{io(n,"")}catch(ee){Pe(e,e.return,ee)}}if(t&4&&(n=e.stateNode,n!=null)){var i=e.memoizedProps,u=o!==null?o.memoizedProps:i,x=e.type,b=e.updateQueue;if(e.updateQueue=null,b!==null)try{x==="input"&&i.type==="radio"&&i.name!=null&&Vi(n,i),Rn(x,u);var R=Rn(x,i);for(u=0;u<b.length;u+=2){var V=b[u],U=b[u+1];V==="style"?Ki(n,U):V==="dangerouslySetInnerHTML"?Qi(n,U):V==="children"?io(n,U):D(n,V,U,R)}switch(x){case"input":kn(n,i);break;case"textarea":Wi(n,i);break;case"select":var B=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!i.multiple;var K=i.value;K!=null?Ar(n,!!i.multiple,K,!1):B!==!!i.multiple&&(i.defaultValue!=null?Ar(n,!!i.multiple,i.defaultValue,!0):Ar(n,!!i.multiple,i.multiple?[]:"",!1))}n[Ao]=i}catch(ee){Pe(e,e.return,ee)}}break;case 6:if(ba(a,e),Ea(e),t&4){if(e.stateNode===null)throw Error(l(162));n=e.stateNode,i=e.memoizedProps;try{n.nodeValue=i}catch(ee){Pe(e,e.return,ee)}}break;case 3:if(ba(a,e),Ea(e),t&4&&o!==null&&o.memoizedState.isDehydrated)try{yo(a.containerInfo)}catch(ee){Pe(e,e.return,ee)}break;case 4:ba(a,e),Ea(e);break;case 13:ba(a,e),Ea(e),n=e.child,n.flags&8192&&(i=n.memoizedState!==null,n.stateNode.isHidden=i,!i||n.alternate!==null&&n.alternate.memoizedState!==null||(oi=Ae())),t&4&&pc(e);break;case 22:if(V=o!==null&&o.memoizedState!==null,e.mode&1?(He=(R=He)||V,ba(a,e),He=R):ba(a,e),Ea(e),t&8192){if(R=e.memoizedState!==null,(e.stateNode.isHidden=R)&&!V&&(e.mode&1)!==0)for(Y=e,V=e.child;V!==null;){for(U=Y=V;Y!==null;){switch(B=Y,K=B.child,B.tag){case 0:case 11:case 14:case 15:Bo(4,B,B.return);break;case 1:Yr(B,B.return);var Z=B.stateNode;if(typeof Z.componentWillUnmount=="function"){t=B,o=B.return;try{a=t,Z.props=a.memoizedProps,Z.state=a.memoizedState,Z.componentWillUnmount()}catch(ee){Pe(t,o,ee)}}break;case 5:Yr(B,B.return);break;case 22:if(B.memoizedState!==null){xc(U);continue}}K!==null?(K.return=B,Y=K):xc(U)}V=V.sibling}e:for(V=null,U=e;;){if(U.tag===5){if(V===null){V=U;try{n=U.stateNode,R?(i=n.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(x=U.stateNode,b=U.memoizedProps.style,u=b!=null&&b.hasOwnProperty("display")?b.display:null,x.style.display=Ji("display",u))}catch(ee){Pe(e,e.return,ee)}}}else if(U.tag===6){if(V===null)try{U.stateNode.nodeValue=R?"":U.memoizedProps}catch(ee){Pe(e,e.return,ee)}}else if((U.tag!==22&&U.tag!==23||U.memoizedState===null||U===e)&&U.child!==null){U.child.return=U,U=U.child;continue}if(U===e)break e;for(;U.sibling===null;){if(U.return===null||U.return===e)break e;V===U&&(V=null),U=U.return}V===U&&(V=null),U.sibling.return=U.return,U=U.sibling}}break;case 19:ba(a,e),Ea(e),t&4&&pc(e);break;case 21:break;default:ba(a,e),Ea(e)}}function Ea(e){var a=e.flags;if(a&2){try{e:{for(var o=e.return;o!==null;){if(cc(o)){var t=o;break e}o=o.return}throw Error(l(160))}switch(t.tag){case 5:var n=t.stateNode;t.flags&32&&(io(n,""),t.flags&=-33);var i=uc(e);ei(e,i,n);break;case 3:case 4:var u=t.stateNode.containerInfo,x=uc(e);Xs(e,x,u);break;default:throw Error(l(161))}}catch(b){Pe(e,e.return,b)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function bp(e,a,o){Y=e,gc(e)}function gc(e,a,o){for(var t=(e.mode&1)!==0;Y!==null;){var n=Y,i=n.child;if(n.tag===22&&t){var u=n.memoizedState!==null||qt;if(!u){var x=n.alternate,b=x!==null&&x.memoizedState!==null||He;x=qt;var R=He;if(qt=u,(He=b)&&!R)for(Y=n;Y!==null;)u=Y,b=u.child,u.tag===22&&u.memoizedState!==null?vc(n):b!==null?(b.return=u,Y=b):vc(n);for(;i!==null;)Y=i,gc(i),i=i.sibling;Y=n,qt=x,He=R}hc(e)}else(n.subtreeFlags&8772)!==0&&i!==null?(i.return=n,Y=i):hc(e)}}function hc(e){for(;Y!==null;){var a=Y;if((a.flags&8772)!==0){var o=a.alternate;try{if((a.flags&8772)!==0)switch(a.tag){case 0:case 11:case 15:He||Ut(5,a);break;case 1:var t=a.stateNode;if(a.flags&4&&!He)if(o===null)t.componentDidMount();else{var n=a.elementType===a.type?o.memoizedProps:va(a.type,o.memoizedProps);t.componentDidUpdate(n,o.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var i=a.updateQueue;i!==null&&xd(a,i,t);break;case 3:var u=a.updateQueue;if(u!==null){if(o=null,a.child!==null)switch(a.child.tag){case 5:o=a.child.stateNode;break;case 1:o=a.child.stateNode}xd(a,u,o)}break;case 5:var x=a.stateNode;if(o===null&&a.flags&4){o=x;var b=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":b.autoFocus&&o.focus();break;case"img":b.src&&(o.src=b.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var R=a.alternate;if(R!==null){var V=R.memoizedState;if(V!==null){var U=V.dehydrated;U!==null&&yo(U)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}He||a.flags&512&&Zs(a)}catch(B){Pe(a,a.return,B)}}if(a===e){Y=null;break}if(o=a.sibling,o!==null){o.return=a.return,Y=o;break}Y=a.return}}function xc(e){for(;Y!==null;){var a=Y;if(a===e){Y=null;break}var o=a.sibling;if(o!==null){o.return=a.return,Y=o;break}Y=a.return}}function vc(e){for(;Y!==null;){var a=Y;try{switch(a.tag){case 0:case 11:case 15:var o=a.return;try{Ut(4,a)}catch(b){Pe(a,o,b)}break;case 1:var t=a.stateNode;if(typeof t.componentDidMount=="function"){var n=a.return;try{t.componentDidMount()}catch(b){Pe(a,n,b)}}var i=a.return;try{Zs(a)}catch(b){Pe(a,i,b)}break;case 5:var u=a.return;try{Zs(a)}catch(b){Pe(a,u,b)}}}catch(b){Pe(a,a.return,b)}if(a===e){Y=null;break}var x=a.sibling;if(x!==null){x.return=a.return,Y=x;break}Y=a.return}}var jp=Math.ceil,Wt=$.ReactCurrentDispatcher,ai=$.ReactCurrentOwner,pa=$.ReactCurrentBatchConfig,me=0,Te=null,ze=null,qe=0,sa=0,Zr=Ga(0),De=0,Vo=null,vr=0,Gt=0,ri=0,qo=null,Xe=null,oi=0,Xr=1/0,_a=null,Ht=!1,ti=null,Za=null,Qt=!1,Xa=null,Jt=0,Uo=0,ni=null,Kt=-1,Yt=0;function Je(){return(me&6)!==0?Ae():Kt!==-1?Kt:Kt=Ae()}function er(e){return(e.mode&1)===0?1:(me&2)!==0&&qe!==0?qe&-qe:tp.transition!==null?(Yt===0&&(Yt=ul()),Yt):(e=xe,e!==0||(e=window.event,e=e===void 0?16:bl(e.type)),e)}function ja(e,a,o,t){if(50<Uo)throw Uo=0,ni=null,Error(l(185));fo(e,o,t),((me&2)===0||e!==Te)&&(e===Te&&((me&2)===0&&(Gt|=o),De===4&&ar(e,qe)),ea(e,t),o===1&&me===0&&(a.mode&1)===0&&(Xr=Ae()+500,Nt&&Qa()))}function ea(e,a){var o=e.callbackNode;tm(e,a);var t=st(e,e===Te?qe:0);if(t===0)o!==null&&ll(o),e.callbackNode=null,e.callbackPriority=0;else if(a=t&-t,e.callbackPriority!==a){if(o!=null&&ll(o),a===1)e.tag===0?op(bc.bind(null,e)):nd(bc.bind(null,e)),Xm(function(){(me&6)===0&&Qa()}),o=null;else{switch(ml(t)){case 1:o=Tn;break;case 4:o=dl;break;case 16:o=rt;break;case 536870912:o=cl;break;default:o=rt}o=Pc(o,yc.bind(null,e))}e.callbackPriority=a,e.callbackNode=o}}function yc(e,a){if(Kt=-1,Yt=0,(me&6)!==0)throw Error(l(327));var o=e.callbackNode;if(eo()&&e.callbackNode!==o)return null;var t=st(e,e===Te?qe:0);if(t===0)return null;if((t&30)!==0||(t&e.expiredLanes)!==0||a)a=Zt(e,t);else{a=t;var n=me;me|=2;var i=Cc();(Te!==e||qe!==a)&&(_a=null,Xr=Ae()+500,br(e,a));do try{wp();break}catch(x){jc(e,x)}while(!0);Ss(),Wt.current=i,me=n,ze!==null?a=0:(Te=null,qe=0,a=De)}if(a!==0){if(a===2&&(n=On(e),n!==0&&(t=n,a=si(e,n))),a===1)throw o=Vo,br(e,0),ar(e,t),ea(e,Ae()),o;if(a===6)ar(e,t);else{if(n=e.current.alternate,(t&30)===0&&!Cp(n)&&(a=Zt(e,t),a===2&&(i=On(e),i!==0&&(t=i,a=si(e,i))),a===1))throw o=Vo,br(e,0),ar(e,t),ea(e,Ae()),o;switch(e.finishedWork=n,e.finishedLanes=t,a){case 0:case 1:throw Error(l(345));case 2:jr(e,Xe,_a);break;case 3:if(ar(e,t),(t&130023424)===t&&(a=oi+500-Ae(),10<a)){if(st(e,0)!==0)break;if(n=e.suspendedLanes,(n&t)!==t){Je(),e.pingedLanes|=e.suspendedLanes&n;break}e.timeoutHandle=ms(jr.bind(null,e,Xe,_a),a);break}jr(e,Xe,_a);break;case 4:if(ar(e,t),(t&4194240)===t)break;for(a=e.eventTimes,n=-1;0<t;){var u=31-ga(t);i=1<<u,u=a[u],u>n&&(n=u),t&=~i}if(t=n,t=Ae()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*jp(t/1960))-t,10<t){e.timeoutHandle=ms(jr.bind(null,e,Xe,_a),t);break}jr(e,Xe,_a);break;case 5:jr(e,Xe,_a);break;default:throw Error(l(329))}}}return ea(e,Ae()),e.callbackNode===o?yc.bind(null,e):null}function si(e,a){var o=qo;return e.current.memoizedState.isDehydrated&&(br(e,a).flags|=256),e=Zt(e,a),e!==2&&(a=Xe,Xe=o,a!==null&&ii(a)),e}function ii(e){Xe===null?Xe=e:Xe.push.apply(Xe,e)}function Cp(e){for(var a=e;;){if(a.flags&16384){var o=a.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var t=0;t<o.length;t++){var n=o[t],i=n.getSnapshot;n=n.value;try{if(!ha(i(),n))return!1}catch{return!1}}}if(o=a.child,a.subtreeFlags&16384&&o!==null)o.return=a,a=o;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function ar(e,a){for(a&=~ri,a&=~Gt,e.suspendedLanes|=a,e.pingedLanes&=~a,e=e.expirationTimes;0<a;){var o=31-ga(a),t=1<<o;e[o]=-1,a&=~t}}function bc(e){if((me&6)!==0)throw Error(l(327));eo();var a=st(e,0);if((a&1)===0)return ea(e,Ae()),null;var o=Zt(e,a);if(e.tag!==0&&o===2){var t=On(e);t!==0&&(a=t,o=si(e,t))}if(o===1)throw o=Vo,br(e,0),ar(e,a),ea(e,Ae()),o;if(o===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=a,jr(e,Xe,_a),ea(e,Ae()),null}function li(e,a){var o=me;me|=1;try{return e(a)}finally{me=o,me===0&&(Xr=Ae()+500,Nt&&Qa())}}function yr(e){Xa!==null&&Xa.tag===0&&(me&6)===0&&eo();var a=me;me|=1;var o=pa.transition,t=xe;try{if(pa.transition=null,xe=1,e)return e()}finally{xe=t,pa.transition=o,me=a,(me&6)===0&&Qa()}}function di(){sa=Zr.current,je(Zr)}function br(e,a){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,Zm(o)),ze!==null)for(o=ze.return;o!==null;){var t=o;switch(vs(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&St();break;case 3:Jr(),je(Ke),je(Ue),Rs();break;case 5:Ls(t);break;case 4:Jr();break;case 13:je(we);break;case 19:je(we);break;case 10:ws(t.type._context);break;case 22:case 23:di()}o=o.return}if(Te=e,ze=e=rr(e.current,null),qe=sa=a,De=0,Vo=null,ri=Gt=vr=0,Xe=qo=null,gr!==null){for(a=0;a<gr.length;a++)if(o=gr[a],t=o.interleaved,t!==null){o.interleaved=null;var n=t.next,i=o.pending;if(i!==null){var u=i.next;i.next=n,t.next=u}o.pending=t}gr=null}return e}function jc(e,a){do{var o=ze;try{if(Ss(),It.current=Ot,_t){for(var t=Ne.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}_t=!1}if(xr=0,Fe=Me=Ne=null,_o=!1,Fo=0,ai.current=null,o===null||o.return===null){De=1,Vo=a,ze=null;break}e:{var i=e,u=o.return,x=o,b=a;if(a=qe,x.flags|=32768,b!==null&&typeof b=="object"&&typeof b.then=="function"){var R=b,V=x,U=V.tag;if((V.mode&1)===0&&(U===0||U===11||U===15)){var B=V.alternate;B?(V.updateQueue=B.updateQueue,V.memoizedState=B.memoizedState,V.lanes=B.lanes):(V.updateQueue=null,V.memoizedState=null)}var K=Gd(u);if(K!==null){K.flags&=-257,Hd(K,u,x,i,a),K.mode&1&&Wd(i,R,a),a=K,b=R;var Z=a.updateQueue;if(Z===null){var ee=new Set;ee.add(b),a.updateQueue=ee}else Z.add(b);break e}else{if((a&1)===0){Wd(i,R,a),ci();break e}b=Error(l(426))}}else if(Se&&x.mode&1){var Re=Gd(u);if(Re!==null){(Re.flags&65536)===0&&(Re.flags|=256),Hd(Re,u,x,i,a),js(Kr(b,x));break e}}i=b=Kr(b,x),De!==4&&(De=2),qo===null?qo=[i]:qo.push(i),i=u;do{switch(i.tag){case 3:i.flags|=65536,a&=-a,i.lanes|=a;var P=qd(i,b,a);hd(i,P);break e;case 1:x=b;var S=i.type,A=i.stateNode;if((i.flags&128)===0&&(typeof S.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Za===null||!Za.has(A)))){i.flags|=65536,a&=-a,i.lanes|=a;var G=Ud(i,x,a);hd(i,G);break e}}i=i.return}while(i!==null)}wc(o)}catch(re){a=re,ze===o&&o!==null&&(ze=o=o.return);continue}break}while(!0)}function Cc(){var e=Wt.current;return Wt.current=Ot,e===null?Ot:e}function ci(){(De===0||De===3||De===2)&&(De=4),Te===null||(vr&268435455)===0&&(Gt&268435455)===0||ar(Te,qe)}function Zt(e,a){var o=me;me|=2;var t=Cc();(Te!==e||qe!==a)&&(_a=null,br(e,a));do try{Sp();break}catch(n){jc(e,n)}while(!0);if(Ss(),me=o,Wt.current=t,ze!==null)throw Error(l(261));return Te=null,qe=0,De}function Sp(){for(;ze!==null;)Sc(ze)}function wp(){for(;ze!==null&&!Ju();)Sc(ze)}function Sc(e){var a=Ec(e.alternate,e,sa);e.memoizedProps=e.pendingProps,a===null?wc(e):ze=a,ai.current=null}function wc(e){var a=e;do{var o=a.alternate;if(e=a.return,(a.flags&32768)===0){if(o=hp(o,a,sa),o!==null){ze=o;return}}else{if(o=xp(o,a),o!==null){o.flags&=32767,ze=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{De=6,ze=null;return}}if(a=a.sibling,a!==null){ze=a;return}ze=a=e}while(a!==null);De===0&&(De=5)}function jr(e,a,o){var t=xe,n=pa.transition;try{pa.transition=null,xe=1,Np(e,a,o,t)}finally{pa.transition=n,xe=t}return null}function Np(e,a,o,t){do eo();while(Xa!==null);if((me&6)!==0)throw Error(l(327));o=e.finishedWork;var n=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var i=o.lanes|o.childLanes;if(nm(e,i),e===Te&&(ze=Te=null,qe=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Qt||(Qt=!0,Pc(rt,function(){return eo(),null})),i=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||i){i=pa.transition,pa.transition=null;var u=xe;xe=1;var x=me;me|=4,ai.current=null,yp(e,o),fc(o,e),Wm(cs),dt=!!ds,cs=ds=null,e.current=o,bp(o),Ku(),me=x,xe=u,pa.transition=i}else e.current=o;if(Qt&&(Qt=!1,Xa=e,Jt=n),i=e.pendingLanes,i===0&&(Za=null),Xu(o.stateNode),ea(e,Ae()),a!==null)for(t=e.onRecoverableError,o=0;o<a.length;o++)n=a[o],t(n.value,{componentStack:n.stack,digest:n.digest});if(Ht)throw Ht=!1,e=ti,ti=null,e;return(Jt&1)!==0&&e.tag!==0&&eo(),i=e.pendingLanes,(i&1)!==0?e===ni?Uo++:(Uo=0,ni=e):Uo=0,Qa(),null}function eo(){if(Xa!==null){var e=ml(Jt),a=pa.transition,o=xe;try{if(pa.transition=null,xe=16>e?16:e,Xa===null)var t=!1;else{if(e=Xa,Xa=null,Jt=0,(me&6)!==0)throw Error(l(331));var n=me;for(me|=4,Y=e.current;Y!==null;){var i=Y,u=i.child;if((Y.flags&16)!==0){var x=i.deletions;if(x!==null){for(var b=0;b<x.length;b++){var R=x[b];for(Y=R;Y!==null;){var V=Y;switch(V.tag){case 0:case 11:case 15:Bo(8,V,i)}var U=V.child;if(U!==null)U.return=V,Y=U;else for(;Y!==null;){V=Y;var B=V.sibling,K=V.return;if(dc(V),V===R){Y=null;break}if(B!==null){B.return=K,Y=B;break}Y=K}}}var Z=i.alternate;if(Z!==null){var ee=Z.child;if(ee!==null){Z.child=null;do{var Re=ee.sibling;ee.sibling=null,ee=Re}while(ee!==null)}}Y=i}}if((i.subtreeFlags&2064)!==0&&u!==null)u.return=i,Y=u;else e:for(;Y!==null;){if(i=Y,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Bo(9,i,i.return)}var P=i.sibling;if(P!==null){P.return=i.return,Y=P;break e}Y=i.return}}var S=e.current;for(Y=S;Y!==null;){u=Y;var A=u.child;if((u.subtreeFlags&2064)!==0&&A!==null)A.return=u,Y=A;else e:for(u=S;Y!==null;){if(x=Y,(x.flags&2048)!==0)try{switch(x.tag){case 0:case 11:case 15:Ut(9,x)}}catch(re){Pe(x,x.return,re)}if(x===u){Y=null;break e}var G=x.sibling;if(G!==null){G.return=x.return,Y=G;break e}Y=x.return}}if(me=n,Qa(),Sa&&typeof Sa.onPostCommitFiberRoot=="function")try{Sa.onPostCommitFiberRoot(ot,e)}catch{}t=!0}return t}finally{xe=o,pa.transition=a}}return!1}function Nc(e,a,o){a=Kr(o,a),a=qd(e,a,1),e=Ka(e,a,1),a=Je(),e!==null&&(fo(e,1,a),ea(e,a))}function Pe(e,a,o){if(e.tag===3)Nc(e,e,o);else for(;a!==null;){if(a.tag===3){Nc(a,e,o);break}else if(a.tag===1){var t=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(Za===null||!Za.has(t))){e=Kr(o,e),e=Ud(a,e,1),a=Ka(a,e,1),e=Je(),a!==null&&(fo(a,1,e),ea(a,e));break}}a=a.return}}function kp(e,a,o){var t=e.pingCache;t!==null&&t.delete(a),a=Je(),e.pingedLanes|=e.suspendedLanes&o,Te===e&&(qe&o)===o&&(De===4||De===3&&(qe&130023424)===qe&&500>Ae()-oi?br(e,0):ri|=o),ea(e,a)}function kc(e,a){a===0&&((e.mode&1)===0?a=1:(a=nt,nt<<=1,(nt&130023424)===0&&(nt=4194304)));var o=Je();e=Ma(e,a),e!==null&&(fo(e,a,o),ea(e,o))}function Ep(e){var a=e.memoizedState,o=0;a!==null&&(o=a.retryLane),kc(e,o)}function Pp(e,a){var o=0;switch(e.tag){case 13:var t=e.stateNode,n=e.memoizedState;n!==null&&(o=n.retryLane);break;case 19:t=e.stateNode;break;default:throw Error(l(314))}t!==null&&t.delete(a),kc(e,o)}var Ec;Ec=function(e,a,o){if(e!==null)if(e.memoizedProps!==a.pendingProps||Ke.current)Ze=!0;else{if((e.lanes&o)===0&&(a.flags&128)===0)return Ze=!1,gp(e,a,o);Ze=(e.flags&131072)!==0}else Ze=!1,Se&&(a.flags&1048576)!==0&&sd(a,Et,a.index);switch(a.lanes=0,a.tag){case 2:var t=a.type;Vt(e,a),e=a.pendingProps;var n=Vr(a,Ue.current);Qr(a,o),n=Ds(null,a,t,e,n,o);var i=Is();return a.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,Ye(t)?(i=!0,wt(a)):i=!1,a.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,Es(a),n.updater=$t,a.stateNode=n,n._reactInternals=a,Bs(a,t,e,o),a=Ws(null,a,t,!0,i,o)):(a.tag=0,Se&&i&&xs(a),Qe(null,a,n,o),a=a.child),a;case 16:t=a.elementType;e:{switch(Vt(e,a),e=a.pendingProps,n=t._init,t=n(t._payload),a.type=t,n=a.tag=Ap(t),e=va(t,e),n){case 0:a=Us(null,a,t,e,o);break e;case 1:a=Xd(null,a,t,e,o);break e;case 11:a=Qd(null,a,t,e,o);break e;case 14:a=Jd(null,a,t,va(t.type,e),o);break e}throw Error(l(306,t,""))}return a;case 0:return t=a.type,n=a.pendingProps,n=a.elementType===t?n:va(t,n),Us(e,a,t,n,o);case 1:return t=a.type,n=a.pendingProps,n=a.elementType===t?n:va(t,n),Xd(e,a,t,n,o);case 3:e:{if(ec(a),e===null)throw Error(l(387));t=a.pendingProps,i=a.memoizedState,n=i.element,gd(e,a),Mt(a,t,null,o);var u=a.memoizedState;if(t=u.element,i.isDehydrated)if(i={element:t,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},a.updateQueue.baseState=i,a.memoizedState=i,a.flags&256){n=Kr(Error(l(423)),a),a=ac(e,a,t,o,n);break e}else if(t!==n){n=Kr(Error(l(424)),a),a=ac(e,a,t,o,n);break e}else for(na=Wa(a.stateNode.containerInfo.firstChild),ta=a,Se=!0,xa=null,o=pd(a,null,t,o),a.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Wr(),t===n){a=Ia(e,a,o);break e}Qe(e,a,t,o)}a=a.child}return a;case 5:return vd(a),e===null&&bs(a),t=a.type,n=a.pendingProps,i=e!==null?e.memoizedProps:null,u=n.children,us(t,n)?u=null:i!==null&&us(t,i)&&(a.flags|=32),Zd(e,a),Qe(e,a,u,o),a.child;case 6:return e===null&&bs(a),null;case 13:return rc(e,a,o);case 4:return Ps(a,a.stateNode.containerInfo),t=a.pendingProps,e===null?a.child=Gr(a,null,t,o):Qe(e,a,t,o),a.child;case 11:return t=a.type,n=a.pendingProps,n=a.elementType===t?n:va(t,n),Qd(e,a,t,n,o);case 7:return Qe(e,a,a.pendingProps,o),a.child;case 8:return Qe(e,a,a.pendingProps.children,o),a.child;case 12:return Qe(e,a,a.pendingProps.children,o),a.child;case 10:e:{if(t=a.type._context,n=a.pendingProps,i=a.memoizedProps,u=n.value,ye(At,t._currentValue),t._currentValue=u,i!==null)if(ha(i.value,u)){if(i.children===n.children&&!Ke.current){a=Ia(e,a,o);break e}}else for(i=a.child,i!==null&&(i.return=a);i!==null;){var x=i.dependencies;if(x!==null){u=i.child;for(var b=x.firstContext;b!==null;){if(b.context===t){if(i.tag===1){b=Da(-1,o&-o),b.tag=2;var R=i.updateQueue;if(R!==null){R=R.shared;var V=R.pending;V===null?b.next=b:(b.next=V.next,V.next=b),R.pending=b}}i.lanes|=o,b=i.alternate,b!==null&&(b.lanes|=o),Ns(i.return,o,a),x.lanes|=o;break}b=b.next}}else if(i.tag===10)u=i.type===a.type?null:i.child;else if(i.tag===18){if(u=i.return,u===null)throw Error(l(341));u.lanes|=o,x=u.alternate,x!==null&&(x.lanes|=o),Ns(u,o,a),u=i.sibling}else u=i.child;if(u!==null)u.return=i;else for(u=i;u!==null;){if(u===a){u=null;break}if(i=u.sibling,i!==null){i.return=u.return,u=i;break}u=u.return}i=u}Qe(e,a,n.children,o),a=a.child}return a;case 9:return n=a.type,t=a.pendingProps.children,Qr(a,o),n=ua(n),t=t(n),a.flags|=1,Qe(e,a,t,o),a.child;case 14:return t=a.type,n=va(t,a.pendingProps),n=va(t.type,n),Jd(e,a,t,n,o);case 15:return Kd(e,a,a.type,a.pendingProps,o);case 17:return t=a.type,n=a.pendingProps,n=a.elementType===t?n:va(t,n),Vt(e,a),a.tag=1,Ye(t)?(e=!0,wt(a)):e=!1,Qr(a,o),Bd(a,t,n),Bs(a,t,n,o),Ws(null,a,t,!0,e,o);case 19:return tc(e,a,o);case 22:return Yd(e,a,o)}throw Error(l(156,a.tag))};function Pc(e,a){return il(e,a)}function Lp(e,a,o,t){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fa(e,a,o,t){return new Lp(e,a,o,t)}function ui(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ap(e){if(typeof e=="function")return ui(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_e)return 11;if(e===h)return 14}return 2}function rr(e,a){var o=e.alternate;return o===null?(o=fa(e.tag,a,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=a,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,a=e.dependencies,o.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function Xt(e,a,o,t,n,i){var u=2;if(t=e,typeof e=="function")ui(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case H:return Cr(o.children,n,i,a);case ie:u=8,n|=8;break;case ue:return e=fa(12,o,a,n|2),e.elementType=ue,e.lanes=i,e;case Ee:return e=fa(13,o,a,n),e.elementType=Ee,e.lanes=i,e;case Be:return e=fa(19,o,a,n),e.elementType=Be,e.lanes=i,e;case w:return en(o,n,i,a);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ge:u=10;break e;case $e:u=9;break e;case _e:u=11;break e;case h:u=14;break e;case I:u=16,t=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return a=fa(u,o,a,n),a.elementType=e,a.type=t,a.lanes=i,a}function Cr(e,a,o,t){return e=fa(7,e,t,a),e.lanes=o,e}function en(e,a,o,t){return e=fa(22,e,t,a),e.elementType=w,e.lanes=o,e.stateNode={isHidden:!1},e}function mi(e,a,o){return e=fa(6,e,null,a),e.lanes=o,e}function pi(e,a,o){return a=fa(4,e.children!==null?e.children:[],e.key,a),a.lanes=o,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}function Rp(e,a,o,t,n){this.tag=a,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$n(0),this.expirationTimes=$n(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$n(0),this.identifierPrefix=t,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function fi(e,a,o,t,n,i,u,x,b){return e=new Rp(e,a,o,x,b),a===1?(a=1,i===!0&&(a|=8)):a=0,i=fa(3,null,null,a),e.current=i,i.stateNode=e,i.memoizedState={element:t,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Es(i),e}function zp(e,a,o){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:J,key:t==null?null:""+t,children:e,containerInfo:a,implementation:o}}function Lc(e){if(!e)return Ha;e=e._reactInternals;e:{if(cr(e)!==e||e.tag!==1)throw Error(l(170));var a=e;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(Ye(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(l(171))}if(e.tag===1){var o=e.type;if(Ye(o))return od(e,o,a)}return a}function Ac(e,a,o,t,n,i,u,x,b){return e=fi(o,t,!0,e,n,i,u,x,b),e.context=Lc(null),o=e.current,t=Je(),n=er(o),i=Da(t,n),i.callback=a??null,Ka(o,i,n),e.current.lanes=n,fo(e,n,t),ea(e,t),e}function an(e,a,o,t){var n=a.current,i=Je(),u=er(n);return o=Lc(o),a.context===null?a.context=o:a.pendingContext=o,a=Da(i,u),a.payload={element:e},t=t===void 0?null:t,t!==null&&(a.callback=t),e=Ka(n,a,u),e!==null&&(ja(e,n,u,i),zt(e,n,u)),u}function rn(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rc(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<a?o:a}}function gi(e,a){Rc(e,a),(e=e.alternate)&&Rc(e,a)}function Mp(){return null}var zc=typeof reportError=="function"?reportError:function(e){console.error(e)};function hi(e){this._internalRoot=e}on.prototype.render=hi.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(l(409));an(e,a,null,null)},on.prototype.unmount=hi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;yr(function(){an(null,e,null,null)}),a[La]=null}};function on(e){this._internalRoot=e}on.prototype.unstable_scheduleHydration=function(e){if(e){var a=gl();e={blockedOn:null,target:e,priority:a};for(var o=0;o<Va.length&&a!==0&&a<Va[o].priority;o++);Va.splice(o,0,e),o===0&&vl(e)}};function xi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function tn(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Mc(){}function Dp(e,a,o,t,n){if(n){if(typeof t=="function"){var i=t;t=function(){var R=rn(u);i.call(R)}}var u=Ac(a,t,e,0,null,!1,!1,"",Mc);return e._reactRootContainer=u,e[La]=u.current,Po(e.nodeType===8?e.parentNode:e),yr(),u}for(;n=e.lastChild;)e.removeChild(n);if(typeof t=="function"){var x=t;t=function(){var R=rn(b);x.call(R)}}var b=fi(e,0,!1,null,null,!1,!1,"",Mc);return e._reactRootContainer=b,e[La]=b.current,Po(e.nodeType===8?e.parentNode:e),yr(function(){an(a,b,o,t)}),b}function nn(e,a,o,t,n){var i=o._reactRootContainer;if(i){var u=i;if(typeof n=="function"){var x=n;n=function(){var b=rn(u);x.call(b)}}an(a,u,e,n)}else u=Dp(o,a,e,n,t);return rn(u)}pl=function(e){switch(e.tag){case 3:var a=e.stateNode;if(a.current.memoizedState.isDehydrated){var o=po(a.pendingLanes);o!==0&&(Bn(a,o|1),ea(a,Ae()),(me&6)===0&&(Xr=Ae()+500,Qa()))}break;case 13:yr(function(){var t=Ma(e,1);if(t!==null){var n=Je();ja(t,e,1,n)}}),gi(e,1)}},Vn=function(e){if(e.tag===13){var a=Ma(e,134217728);if(a!==null){var o=Je();ja(a,e,134217728,o)}gi(e,134217728)}},fl=function(e){if(e.tag===13){var a=er(e),o=Ma(e,a);if(o!==null){var t=Je();ja(o,e,a,t)}gi(e,a)}},gl=function(){return xe},hl=function(e,a){var o=xe;try{return xe=e,a()}finally{xe=o}},Dn=function(e,a,o){switch(a){case"input":if(kn(e,o),a=o.name,o.type==="radio"&&a!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<o.length;a++){var t=o[a];if(t!==e&&t.form===e.form){var n=Ct(t);if(!n)throw Error(l(90));$i(t),kn(t,n)}}}break;case"textarea":Wi(e,o);break;case"select":a=o.value,a!=null&&Ar(e,!!o.multiple,a,!1)}},el=li,al=yr;var Ip={usingClientEntryPoint:!1,Events:[Ro,$r,Ct,Zi,Xi,li]},Wo={findFiberByHostInstance:ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_p={bundleType:Wo.bundleType,version:Wo.version,rendererPackageName:Wo.rendererPackageName,rendererConfig:Wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=nl(e),e===null?null:e.stateNode},findFiberByHostInstance:Wo.findFiberByHostInstance||Mp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sn.isDisabled&&sn.supportsFiber)try{ot=sn.inject(_p),Sa=sn}catch{}}return aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ip,aa.createPortal=function(e,a){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xi(a))throw Error(l(200));return zp(e,a,null,o)},aa.createRoot=function(e,a){if(!xi(e))throw Error(l(299));var o=!1,t="",n=zc;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(t=a.identifierPrefix),a.onRecoverableError!==void 0&&(n=a.onRecoverableError)),a=fi(e,1,!1,null,null,o,!1,t,n),e[La]=a.current,Po(e.nodeType===8?e.parentNode:e),new hi(a)},aa.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=nl(a),e=e===null?null:e.stateNode,e},aa.flushSync=function(e){return yr(e)},aa.hydrate=function(e,a,o){if(!tn(a))throw Error(l(200));return nn(null,e,a,!0,o)},aa.hydrateRoot=function(e,a,o){if(!xi(e))throw Error(l(405));var t=o!=null&&o.hydratedSources||null,n=!1,i="",u=zc;if(o!=null&&(o.unstable_strictMode===!0&&(n=!0),o.identifierPrefix!==void 0&&(i=o.identifierPrefix),o.onRecoverableError!==void 0&&(u=o.onRecoverableError)),a=Ac(a,null,e,1,o??null,n,!1,i,u),e[La]=a.current,Po(e),t)for(e=0;e<t.length;e++)o=t[e],n=o._getVersion,n=n(o._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[o,n]:a.mutableSourceEagerHydrationData.push(o,n);return new on(a)},aa.render=function(e,a,o){if(!tn(a))throw Error(l(200));return nn(null,e,a,!1,o)},aa.unmountComponentAtNode=function(e){if(!tn(e))throw Error(l(40));return e._reactRootContainer?(yr(function(){nn(null,null,e,!1,function(){e._reactRootContainer=null,e[La]=null})}),!0):!1},aa.unstable_batchedUpdates=li,aa.unstable_renderSubtreeIntoContainer=function(e,a,o,t){if(!tn(o))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return nn(e,a,o,!1,t)},aa.version="18.3.1-next-f1338f8080-20240426",aa}var Bc;function fu(){if(Bc)return bi.exports;Bc=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(d){console.error(d)}}return s(),bi.exports=Wp(),bi.exports}var Vc;function Gp(){if(Vc)return ln;Vc=1;var s=fu();return ln.createRoot=s.createRoot,ln.hydrateRoot=s.hydrateRoot,ln}var Hp=Gp();const Qp=mu(Hp);fu();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ho(){return Ho=Object.assign?Object.assign.bind():function(s){for(var d=1;d<arguments.length;d++){var l=arguments[d];for(var m in l)Object.prototype.hasOwnProperty.call(l,m)&&(s[m]=l[m])}return s},Ho.apply(this,arguments)}var sr;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(sr||(sr={}));const qc="popstate";function Jp(s){s===void 0&&(s={});function d(c,p){let{pathname:f="/",search:g="",hash:v=""}=kr(c.location.hash.substr(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Ai("",{pathname:f,search:g,hash:v},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function l(c,p){let f=c.document.querySelector("base"),g="";if(f&&f.getAttribute("href")){let v=c.location.href,y=v.indexOf("#");g=y===-1?v:v.slice(0,y)}return g+"#"+(typeof p=="string"?p:gn(p))}function m(c,p){vn(c.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(p)+")")}return Yp(d,l,m,s)}function Le(s,d){if(s===!1||s===null||typeof s>"u")throw new Error(d)}function vn(s,d){if(!s){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function Kp(){return Math.random().toString(36).substr(2,8)}function Uc(s,d){return{usr:s.state,key:s.key,idx:d}}function Ai(s,d,l,m){return l===void 0&&(l=null),Ho({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof d=="string"?kr(d):d,{state:l,key:d&&d.key||m||Kp()})}function gn(s){let{pathname:d="/",search:l="",hash:m=""}=s;return l&&l!=="?"&&(d+=l.charAt(0)==="?"?l:"?"+l),m&&m!=="#"&&(d+=m.charAt(0)==="#"?m:"#"+m),d}function kr(s){let d={};if(s){let l=s.indexOf("#");l>=0&&(d.hash=s.substr(l),s=s.substr(0,l));let m=s.indexOf("?");m>=0&&(d.search=s.substr(m),s=s.substr(0,m)),s&&(d.pathname=s)}return d}function Yp(s,d,l,m){m===void 0&&(m={});let{window:c=document.defaultView,v5Compat:p=!1}=m,f=c.history,g=sr.Pop,v=null,y=k();y==null&&(y=0,f.replaceState(Ho({},f.state,{idx:y}),""));function k(){return(f.state||{idx:null}).idx}function j(){g=sr.Pop;let L=k(),O=L==null?null:L-y;y=L,v&&v({action:g,location:z.location,delta:O})}function E(L,O){g=sr.Push;let q=Ai(z.location,L,O);l&&l(q,L),y=k()+1;let D=Uc(q,y),$=z.createHref(q);try{f.pushState(D,"",$)}catch(X){if(X instanceof DOMException&&X.name==="DataCloneError")throw X;c.location.assign($)}p&&v&&v({action:g,location:z.location,delta:1})}function _(L,O){g=sr.Replace;let q=Ai(z.location,L,O);l&&l(q,L),y=k();let D=Uc(q,y),$=z.createHref(q);f.replaceState(D,"",$),p&&v&&v({action:g,location:z.location,delta:0})}function F(L){let O=c.location.origin!=="null"?c.location.origin:c.location.href,q=typeof L=="string"?L:gn(L);return q=q.replace(/ $/,"%20"),Le(O,"No window.location.(origin|href) available to create URL for href: "+q),new URL(q,O)}let z={get action(){return g},get location(){return s(c,f)},listen(L){if(v)throw new Error("A history only accepts one active listener");return c.addEventListener(qc,j),v=L,()=>{c.removeEventListener(qc,j),v=null}},createHref(L){return d(c,L)},createURL:F,encodeLocation(L){let O=F(L);return{pathname:O.pathname,search:O.search,hash:O.hash}},push:E,replace:_,go(L){return f.go(L)}};return z}var Wc;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(Wc||(Wc={}));function Zp(s,d,l){return l===void 0&&(l="/"),Xp(s,d,l)}function Xp(s,d,l,m){let c=typeof d=="string"?kr(d):d,p=to(c.pathname||"/",l);if(p==null)return null;let f=gu(s);e0(f);let g=null;for(let v=0;g==null&&v<f.length;++v){let y=u0(p);g=d0(f[v],y)}return g}function gu(s,d,l,m){d===void 0&&(d=[]),l===void 0&&(l=[]),m===void 0&&(m="");let c=(p,f,g)=>{let v={relativePath:g===void 0?p.path||"":g,caseSensitive:p.caseSensitive===!0,childrenIndex:f,route:p};v.relativePath.startsWith("/")&&(Le(v.relativePath.startsWith(m),'Absolute route path "'+v.relativePath+'" nested under path '+('"'+m+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),v.relativePath=v.relativePath.slice(m.length));let y=ir([m,v.relativePath]),k=l.concat(v);p.children&&p.children.length>0&&(Le(p.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),gu(p.children,d,k,y)),!(p.path==null&&!p.index)&&d.push({path:y,score:i0(y,p.index),routesMeta:k})};return s.forEach((p,f)=>{var g;if(p.path===""||!((g=p.path)!=null&&g.includes("?")))c(p,f);else for(let v of hu(p.path))c(p,f,v)}),d}function hu(s){let d=s.split("/");if(d.length===0)return[];let[l,...m]=d,c=l.endsWith("?"),p=l.replace(/\?$/,"");if(m.length===0)return c?[p,""]:[p];let f=hu(m.join("/")),g=[];return g.push(...f.map(v=>v===""?p:[p,v].join("/"))),c&&g.push(...f),g.map(v=>s.startsWith("/")&&v===""?"/":v)}function e0(s){s.sort((d,l)=>d.score!==l.score?l.score-d.score:l0(d.routesMeta.map(m=>m.childrenIndex),l.routesMeta.map(m=>m.childrenIndex)))}const a0=/^:[\w-]+$/,r0=3,o0=2,t0=1,n0=10,s0=-2,Gc=s=>s==="*";function i0(s,d){let l=s.split("/"),m=l.length;return l.some(Gc)&&(m+=s0),d&&(m+=o0),l.filter(c=>!Gc(c)).reduce((c,p)=>c+(a0.test(p)?r0:p===""?t0:n0),m)}function l0(s,d){return s.length===d.length&&s.slice(0,-1).every((m,c)=>m===d[c])?s[s.length-1]-d[d.length-1]:0}function d0(s,d,l){let{routesMeta:m}=s,c={},p="/",f=[];for(let g=0;g<m.length;++g){let v=m[g],y=g===m.length-1,k=p==="/"?d:d.slice(p.length)||"/",j=Ri({path:v.relativePath,caseSensitive:v.caseSensitive,end:y},k),E=v.route;if(!j)return null;Object.assign(c,j.params),f.push({params:c,pathname:ir([p,j.pathname]),pathnameBase:h0(ir([p,j.pathnameBase])),route:E}),j.pathnameBase!=="/"&&(p=ir([p,j.pathnameBase]))}return f}function Ri(s,d){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[l,m]=c0(s.path,s.caseSensitive,s.end),c=d.match(l);if(!c)return null;let p=c[0],f=p.replace(/(.)\/+$/,"$1"),g=c.slice(1);return{params:m.reduce((y,k,j)=>{let{paramName:E,isOptional:_}=k;if(E==="*"){let z=g[j]||"";f=p.slice(0,p.length-z.length).replace(/(.)\/+$/,"$1")}const F=g[j];return _&&!F?y[E]=void 0:y[E]=(F||"").replace(/%2F/g,"/"),y},{}),pathname:p,pathnameBase:f,pattern:s}}function c0(s,d,l){d===void 0&&(d=!1),l===void 0&&(l=!0),vn(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let m=[],c="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,g,v)=>(m.push({paramName:g,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(m.push({paramName:"*"}),c+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?c+="\\/*$":s!==""&&s!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,d?void 0:"i"),m]}function u0(s){try{return s.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return vn(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+d+").")),s}}function to(s,d){if(d==="/")return s;if(!s.toLowerCase().startsWith(d.toLowerCase()))return null;let l=d.endsWith("/")?d.length-1:d.length,m=s.charAt(l);return m&&m!=="/"?null:s.slice(l)||"/"}const m0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,p0=s=>m0.test(s);function f0(s,d){d===void 0&&(d="/");let{pathname:l,search:m="",hash:c=""}=typeof s=="string"?kr(s):s,p;if(l)if(p0(l))p=l;else{if(l.includes("//")){let f=l;l=l.replace(/\/\/+/g,"/"),vn(!1,"Pathnames cannot have embedded double slashes - normalizing "+(f+" -> "+l))}l.startsWith("/")?p=Hc(l.substring(1),"/"):p=Hc(l,d)}else p=d;return{pathname:p,search:x0(m),hash:v0(c)}}function Hc(s,d){let l=d.replace(/\/+$/,"").split("/");return s.split("/").forEach(c=>{c===".."?l.length>1&&l.pop():c!=="."&&l.push(c)}),l.length>1?l.join("/"):"/"}function Si(s,d,l,m){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+d+"` field ["+JSON.stringify(m)+"].  Please separate it out to the ")+("`to."+l+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function g0(s){return s.filter((d,l)=>l===0||d.route.path&&d.route.path.length>0)}function xu(s,d){let l=g0(s);return d?l.map((m,c)=>c===l.length-1?m.pathname:m.pathnameBase):l.map(m=>m.pathnameBase)}function vu(s,d,l,m){m===void 0&&(m=!1);let c;typeof s=="string"?c=kr(s):(c=Ho({},s),Le(!c.pathname||!c.pathname.includes("?"),Si("?","pathname","search",c)),Le(!c.pathname||!c.pathname.includes("#"),Si("#","pathname","hash",c)),Le(!c.search||!c.search.includes("#"),Si("#","search","hash",c)));let p=s===""||c.pathname==="",f=p?"/":c.pathname,g;if(f==null)g=l;else{let j=d.length-1;if(!m&&f.startsWith("..")){let E=f.split("/");for(;E[0]==="..";)E.shift(),j-=1;c.pathname=E.join("/")}g=j>=0?d[j]:"/"}let v=f0(c,g),y=f&&f!=="/"&&f.endsWith("/"),k=(p||f===".")&&l.endsWith("/");return!v.pathname.endsWith("/")&&(y||k)&&(v.pathname+="/"),v}const ir=s=>s.join("/").replace(/\/\/+/g,"/"),h0=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),x0=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,v0=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function y0(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const yu=["post","put","patch","delete"];new Set(yu);const b0=["get",...yu];new Set(b0);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qo(){return Qo=Object.assign?Object.assign.bind():function(s){for(var d=1;d<arguments.length;d++){var l=arguments[d];for(var m in l)Object.prototype.hasOwnProperty.call(l,m)&&(s[m]=l[m])}return s},Qo.apply(this,arguments)}const yn=C.createContext(null),bu=C.createContext(null),lr=C.createContext(null),bn=C.createContext(null),Er=C.createContext({outlet:null,matches:[],isDataRoute:!1}),ju=C.createContext(null);function j0(s,d){let{relative:l}=d===void 0?{}:d;Jo()||Le(!1);let{basename:m,navigator:c}=C.useContext(lr),{hash:p,pathname:f,search:g}=Cn(s,{relative:l}),v=f;return m!=="/"&&(v=f==="/"?m:ir([m,f])),c.createHref({pathname:v,search:g,hash:p})}function Jo(){return C.useContext(bn)!=null}function Pr(){return Jo()||Le(!1),C.useContext(bn).location}function Cu(s){C.useContext(lr).static||C.useLayoutEffect(s)}function jn(){let{isDataRoute:s}=C.useContext(Er);return s?D0():C0()}function C0(){Jo()||Le(!1);let s=C.useContext(yn),{basename:d,future:l,navigator:m}=C.useContext(lr),{matches:c}=C.useContext(Er),{pathname:p}=Pr(),f=JSON.stringify(xu(c,l.v7_relativeSplatPath)),g=C.useRef(!1);return Cu(()=>{g.current=!0}),C.useCallback(function(y,k){if(k===void 0&&(k={}),!g.current)return;if(typeof y=="number"){m.go(y);return}let j=vu(y,JSON.parse(f),p,k.relative==="path");s==null&&d!=="/"&&(j.pathname=j.pathname==="/"?d:ir([d,j.pathname])),(k.replace?m.replace:m.push)(j,k.state,k)},[d,m,f,p,s])}function Cn(s,d){let{relative:l}=d===void 0?{}:d,{future:m}=C.useContext(lr),{matches:c}=C.useContext(Er),{pathname:p}=Pr(),f=JSON.stringify(xu(c,m.v7_relativeSplatPath));return C.useMemo(()=>vu(s,JSON.parse(f),p,l==="path"),[s,f,p,l])}function S0(s,d){return w0(s,d)}function w0(s,d,l,m){Jo()||Le(!1);let{navigator:c}=C.useContext(lr),{matches:p}=C.useContext(Er),f=p[p.length-1],g=f?f.params:{};f&&f.pathname;let v=f?f.pathnameBase:"/";f&&f.route;let y=Pr(),k;if(d){var j;let L=typeof d=="string"?kr(d):d;v==="/"||(j=L.pathname)!=null&&j.startsWith(v)||Le(!1),k=L}else k=y;let E=k.pathname||"/",_=E;if(v!=="/"){let L=v.replace(/^\//,"").split("/");_="/"+E.replace(/^\//,"").split("/").slice(L.length).join("/")}let F=Zp(s,{pathname:_}),z=L0(F&&F.map(L=>Object.assign({},L,{params:Object.assign({},g,L.params),pathname:ir([v,c.encodeLocation?c.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?v:ir([v,c.encodeLocation?c.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),p,l,m);return d&&z?C.createElement(bn.Provider,{value:{location:Qo({pathname:"/",search:"",hash:"",state:null,key:"default"},k),navigationType:sr.Pop}},z):z}function N0(){let s=M0(),d=y0(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),l=s instanceof Error?s.stack:null,c={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},d),l?C.createElement("pre",{style:c},l):null,null)}const k0=C.createElement(N0,null);class E0 extends C.Component{constructor(d){super(d),this.state={location:d.location,revalidation:d.revalidation,error:d.error}}static getDerivedStateFromError(d){return{error:d}}static getDerivedStateFromProps(d,l){return l.location!==d.location||l.revalidation!=="idle"&&d.revalidation==="idle"?{error:d.error,location:d.location,revalidation:d.revalidation}:{error:d.error!==void 0?d.error:l.error,location:l.location,revalidation:d.revalidation||l.revalidation}}componentDidCatch(d,l){console.error("React Router caught the following error during render",d,l)}render(){return this.state.error!==void 0?C.createElement(Er.Provider,{value:this.props.routeContext},C.createElement(ju.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function P0(s){let{routeContext:d,match:l,children:m}=s,c=C.useContext(yn);return c&&c.static&&c.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=l.route.id),C.createElement(Er.Provider,{value:d},m)}function L0(s,d,l,m){var c;if(d===void 0&&(d=[]),l===void 0&&(l=null),m===void 0&&(m=null),s==null){var p;if(!l)return null;if(l.errors)s=l.matches;else if((p=m)!=null&&p.v7_partialHydration&&d.length===0&&!l.initialized&&l.matches.length>0)s=l.matches;else return null}let f=s,g=(c=l)==null?void 0:c.errors;if(g!=null){let k=f.findIndex(j=>j.route.id&&(g==null?void 0:g[j.route.id])!==void 0);k>=0||Le(!1),f=f.slice(0,Math.min(f.length,k+1))}let v=!1,y=-1;if(l&&m&&m.v7_partialHydration)for(let k=0;k<f.length;k++){let j=f[k];if((j.route.HydrateFallback||j.route.hydrateFallbackElement)&&(y=k),j.route.id){let{loaderData:E,errors:_}=l,F=j.route.loader&&E[j.route.id]===void 0&&(!_||_[j.route.id]===void 0);if(j.route.lazy||F){v=!0,y>=0?f=f.slice(0,y+1):f=[f[0]];break}}}return f.reduceRight((k,j,E)=>{let _,F=!1,z=null,L=null;l&&(_=g&&j.route.id?g[j.route.id]:void 0,z=j.route.errorElement||k0,v&&(y<0&&E===0?(I0("route-fallback"),F=!0,L=null):y===E&&(F=!0,L=j.route.hydrateFallbackElement||null)));let O=d.concat(f.slice(0,E+1)),q=()=>{let D;return _?D=z:F?D=L:j.route.Component?D=C.createElement(j.route.Component,null):j.route.element?D=j.route.element:D=k,C.createElement(P0,{match:j,routeContext:{outlet:k,matches:O,isDataRoute:l!=null},children:D})};return l&&(j.route.ErrorBoundary||j.route.errorElement||E===0)?C.createElement(E0,{location:l.location,revalidation:l.revalidation,component:z,error:_,children:q(),routeContext:{outlet:null,matches:O,isDataRoute:!0}}):q()},null)}var Su=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(Su||{}),wu=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(wu||{});function A0(s){let d=C.useContext(yn);return d||Le(!1),d}function R0(s){let d=C.useContext(bu);return d||Le(!1),d}function z0(s){let d=C.useContext(Er);return d||Le(!1),d}function Nu(s){let d=z0(),l=d.matches[d.matches.length-1];return l.route.id||Le(!1),l.route.id}function M0(){var s;let d=C.useContext(ju),l=R0(),m=Nu();return d!==void 0?d:(s=l.errors)==null?void 0:s[m]}function D0(){let{router:s}=A0(Su.UseNavigateStable),d=Nu(wu.UseNavigateStable),l=C.useRef(!1);return Cu(()=>{l.current=!0}),C.useCallback(function(c,p){p===void 0&&(p={}),l.current&&(typeof c=="number"?s.navigate(c):s.navigate(c,Qo({fromRouteId:d},p)))},[s,d])}const Qc={};function I0(s,d,l){Qc[s]||(Qc[s]=!0)}function _0(s,d){s==null||s.v7_startTransition,s==null||s.v7_relativeSplatPath}function tr(s){Le(!1)}function F0(s){let{basename:d="/",children:l=null,location:m,navigationType:c=sr.Pop,navigator:p,static:f=!1,future:g}=s;Jo()&&Le(!1);let v=d.replace(/^\/*/,"/"),y=C.useMemo(()=>({basename:v,navigator:p,static:f,future:Qo({v7_relativeSplatPath:!1},g)}),[v,g,p,f]);typeof m=="string"&&(m=kr(m));let{pathname:k="/",search:j="",hash:E="",state:_=null,key:F="default"}=m,z=C.useMemo(()=>{let L=to(k,v);return L==null?null:{location:{pathname:L,search:j,hash:E,state:_,key:F},navigationType:c}},[v,k,j,E,_,F,c]);return z==null?null:C.createElement(lr.Provider,{value:y},C.createElement(bn.Provider,{children:l,value:z}))}function Jc(s){let{children:d,location:l}=s;return S0(zi(d),l)}new Promise(()=>{});function zi(s,d){d===void 0&&(d=[]);let l=[];return C.Children.forEach(s,(m,c)=>{if(!C.isValidElement(m))return;let p=[...d,c];if(m.type===C.Fragment){l.push.apply(l,zi(m.props.children,p));return}m.type!==tr&&Le(!1),!m.props.index||!m.props.children||Le(!1);let f={id:m.props.id||p.join("-"),caseSensitive:m.props.caseSensitive,element:m.props.element,Component:m.props.Component,index:m.props.index,path:m.props.path,loader:m.props.loader,action:m.props.action,errorElement:m.props.errorElement,ErrorBoundary:m.props.ErrorBoundary,hasErrorBoundary:m.props.ErrorBoundary!=null||m.props.errorElement!=null,shouldRevalidate:m.props.shouldRevalidate,handle:m.props.handle,lazy:m.props.lazy};m.props.children&&(f.children=zi(m.props.children,p)),l.push(f)}),l}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hn(){return hn=Object.assign?Object.assign.bind():function(s){for(var d=1;d<arguments.length;d++){var l=arguments[d];for(var m in l)Object.prototype.hasOwnProperty.call(l,m)&&(s[m]=l[m])}return s},hn.apply(this,arguments)}function ku(s,d){if(s==null)return{};var l={},m=Object.keys(s),c,p;for(p=0;p<m.length;p++)c=m[p],!(d.indexOf(c)>=0)&&(l[c]=s[c]);return l}function T0(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function O0(s,d){return s.button===0&&(!d||d==="_self")&&!T0(s)}function Mi(s){return s===void 0&&(s=""),new URLSearchParams(typeof s=="string"||Array.isArray(s)||s instanceof URLSearchParams?s:Object.keys(s).reduce((d,l)=>{let m=s[l];return d.concat(Array.isArray(m)?m.map(c=>[l,c]):[[l,m]])},[]))}function $0(s,d){let l=Mi(s);return d&&d.forEach((m,c)=>{l.has(c)||d.getAll(c).forEach(p=>{l.append(c,p)})}),l}const B0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],V0=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],q0="6";try{window.__reactRouterVersion=q0}catch{}const U0=C.createContext({isTransitioning:!1}),W0="startTransition",Kc=Vp[W0];function G0(s){let{basename:d,children:l,future:m,window:c}=s,p=C.useRef();p.current==null&&(p.current=Jp({window:c,v5Compat:!0}));let f=p.current,[g,v]=C.useState({action:f.action,location:f.location}),{v7_startTransition:y}=m||{},k=C.useCallback(j=>{y&&Kc?Kc(()=>v(j)):v(j)},[v,y]);return C.useLayoutEffect(()=>f.listen(k),[f,k]),C.useEffect(()=>_0(m),[m]),C.createElement(F0,{basename:d,children:l,location:g.location,navigationType:g.action,navigator:f,future:m})}const H0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Q0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oo=C.forwardRef(function(d,l){let{onClick:m,relative:c,reloadDocument:p,replace:f,state:g,target:v,to:y,preventScrollReset:k,viewTransition:j}=d,E=ku(d,B0),{basename:_}=C.useContext(lr),F,z=!1;if(typeof y=="string"&&Q0.test(y)&&(F=y,H0))try{let D=new URL(window.location.href),$=y.startsWith("//")?new URL(D.protocol+y):new URL(y),X=to($.pathname,_);$.origin===D.origin&&X!=null?y=X+$.search+$.hash:z=!0}catch{}let L=j0(y,{relative:c}),O=K0(y,{replace:f,state:g,target:v,preventScrollReset:k,relative:c,viewTransition:j});function q(D){m&&m(D),D.defaultPrevented||O(D)}return C.createElement("a",hn({},E,{href:F||L,onClick:z||p?m:q,ref:l,target:v}))}),wi=C.forwardRef(function(d,l){let{"aria-current":m="page",caseSensitive:c=!1,className:p="",end:f=!1,style:g,to:v,viewTransition:y,children:k}=d,j=ku(d,V0),E=Cn(v,{relative:j.relative}),_=Pr(),F=C.useContext(bu),{navigator:z,basename:L}=C.useContext(lr),O=F!=null&&Z0(E)&&y===!0,q=z.encodeLocation?z.encodeLocation(E).pathname:E.pathname,D=_.pathname,$=F&&F.navigation&&F.navigation.location?F.navigation.location.pathname:null;c||(D=D.toLowerCase(),$=$?$.toLowerCase():null,q=q.toLowerCase()),$&&L&&($=to($,L)||$);const X=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let J=D===q||!f&&D.startsWith(q)&&D.charAt(X)==="/",H=$!=null&&($===q||!f&&$.startsWith(q)&&$.charAt(q.length)==="/"),ie={isActive:J,isPending:H,isTransitioning:O},ue=J?m:void 0,ge;typeof p=="function"?ge=p(ie):ge=[p,J?"active":null,H?"pending":null,O?"transitioning":null].filter(Boolean).join(" ");let $e=typeof g=="function"?g(ie):g;return C.createElement(oo,hn({},j,{"aria-current":ue,className:ge,ref:l,style:$e,to:v,viewTransition:y}),typeof k=="function"?k(ie):k)});var Di;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(Di||(Di={}));var Yc;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(Yc||(Yc={}));function J0(s){let d=C.useContext(yn);return d||Le(!1),d}function K0(s,d){let{target:l,replace:m,state:c,preventScrollReset:p,relative:f,viewTransition:g}=d===void 0?{}:d,v=jn(),y=Pr(),k=Cn(s,{relative:f});return C.useCallback(j=>{if(O0(j,l)){j.preventDefault();let E=m!==void 0?m:gn(y)===gn(k);v(s,{replace:E,state:c,preventScrollReset:p,relative:f,viewTransition:g})}},[y,v,k,m,c,l,s,p,f,g])}function Y0(s){let d=C.useRef(Mi(s)),l=C.useRef(!1),m=Pr(),c=C.useMemo(()=>$0(m.search,l.current?null:d.current),[m.search]),p=jn(),f=C.useCallback((g,v)=>{const y=Mi(typeof g=="function"?g(c):g);l.current=!0,p("?"+y,v)},[p,c]);return[c,f]}function Z0(s,d){d===void 0&&(d={});let l=C.useContext(U0);l==null&&Le(!1);let{basename:m}=J0(Di.useViewTransitionState),c=Cn(s,{relative:d.relative});if(!l.isTransitioning)return!1;let p=to(l.currentLocation.pathname,m)||l.currentLocation.pathname,f=to(l.nextLocation.pathname,m)||l.nextLocation.pathname;return Ri(c.pathname,f)!=null||Ri(c.pathname,p)!=null}let X0={data:""},ef=s=>{if(typeof window=="object"){let d=(s?s.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return d.nonce=window.__nonce__,d.parentNode||(s||document.head).appendChild(d),d.firstChild}return s||X0},af=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,rf=/\/\*[^]*?\*\/|  +/g,Zc=/\n+/g,nr=(s,d)=>{let l="",m="",c="";for(let p in s){let f=s[p];p[0]=="@"?p[1]=="i"?l=p+" "+f+";":m+=p[1]=="f"?nr(f,p):p+"{"+nr(f,p[1]=="k"?"":d)+"}":typeof f=="object"?m+=nr(f,d?d.replace(/([^,])+/g,g=>p.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,v=>/&/.test(v)?v.replace(/&/g,g):g?g+" "+v:v)):p):f!=null&&(p=/^--/.test(p)?p:p.replace(/[A-Z]/g,"-$&").toLowerCase(),c+=nr.p?nr.p(p,f):p+":"+f+";")}return l+(d&&c?d+"{"+c+"}":c)+m},Fa={},Eu=s=>{if(typeof s=="object"){let d="";for(let l in s)d+=l+Eu(s[l]);return d}return s},of=(s,d,l,m,c)=>{let p=Eu(s),f=Fa[p]||(Fa[p]=(v=>{let y=0,k=11;for(;y<v.length;)k=101*k+v.charCodeAt(y++)>>>0;return"go"+k})(p));if(!Fa[f]){let v=p!==s?s:(y=>{let k,j,E=[{}];for(;k=af.exec(y.replace(rf,""));)k[4]?E.shift():k[3]?(j=k[3].replace(Zc," ").trim(),E.unshift(E[0][j]=E[0][j]||{})):E[0][k[1]]=k[2].replace(Zc," ").trim();return E[0]})(s);Fa[f]=nr(c?{["@keyframes "+f]:v}:v,l?"":"."+f)}let g=l&&Fa.g?Fa.g:null;return l&&(Fa.g=Fa[f]),((v,y,k,j)=>{j?y.data=y.data.replace(j,v):y.data.indexOf(v)===-1&&(y.data=k?v+y.data:y.data+v)})(Fa[f],d,m,g),f},tf=(s,d,l)=>s.reduce((m,c,p)=>{let f=d[p];if(f&&f.call){let g=f(l),v=g&&g.props&&g.props.className||/^go/.test(g)&&g;f=v?"."+v:g&&typeof g=="object"?g.props?"":nr(g,""):g===!1?"":g}return m+c+(f??"")},"");function Sn(s){let d=this||{},l=s.call?s(d.p):s;return of(l.unshift?l.raw?tf(l,[].slice.call(arguments,1),d.p):l.reduce((m,c)=>Object.assign(m,c&&c.call?c(d.p):c),{}):l,ef(d.target),d.g,d.o,d.k)}let Pu,Ii,_i;Sn.bind({g:1});let Ta=Sn.bind({k:1});function nf(s,d,l,m){nr.p=d,Pu=s,Ii=l,_i=m}function dr(s,d){let l=this||{};return function(){let m=arguments;function c(p,f){let g=Object.assign({},p),v=g.className||c.className;l.p=Object.assign({theme:Ii&&Ii()},g),l.o=/ *go\d+/.test(v),g.className=Sn.apply(l,m)+(v?" "+v:"");let y=s;return s[0]&&(y=g.as||s,delete g.as),_i&&y[0]&&_i(g),Pu(y,g)}return c}}var sf=s=>typeof s=="function",xn=(s,d)=>sf(s)?s(d):s,lf=(()=>{let s=0;return()=>(++s).toString()})(),Lu=(()=>{let s;return()=>{if(s===void 0&&typeof window<"u"){let d=matchMedia("(prefers-reduced-motion: reduce)");s=!d||d.matches}return s}})(),df=20,Ti="default",Au=(s,d)=>{let{toastLimit:l}=s.settings;switch(d.type){case 0:return{...s,toasts:[d.toast,...s.toasts].slice(0,l)};case 1:return{...s,toasts:s.toasts.map(f=>f.id===d.toast.id?{...f,...d.toast}:f)};case 2:let{toast:m}=d;return Au(s,{type:s.toasts.find(f=>f.id===m.id)?1:0,toast:m});case 3:let{toastId:c}=d;return{...s,toasts:s.toasts.map(f=>f.id===c||c===void 0?{...f,dismissed:!0,visible:!1}:f)};case 4:return d.toastId===void 0?{...s,toasts:[]}:{...s,toasts:s.toasts.filter(f=>f.id!==d.toastId)};case 5:return{...s,pausedAt:d.time};case 6:let p=d.time-(s.pausedAt||0);return{...s,pausedAt:void 0,toasts:s.toasts.map(f=>({...f,pauseDuration:f.pauseDuration+p}))}}},fn=[],Ru={toasts:[],pausedAt:void 0,settings:{toastLimit:df}},Pa={},zu=(s,d=Ti)=>{Pa[d]=Au(Pa[d]||Ru,s),fn.forEach(([l,m])=>{l===d&&m(Pa[d])})},Mu=s=>Object.keys(Pa).forEach(d=>zu(s,d)),cf=s=>Object.keys(Pa).find(d=>Pa[d].toasts.some(l=>l.id===s)),wn=(s=Ti)=>d=>{zu(d,s)},uf={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},mf=(s={},d=Ti)=>{let[l,m]=C.useState(Pa[d]||Ru),c=C.useRef(Pa[d]);C.useEffect(()=>(c.current!==Pa[d]&&m(Pa[d]),fn.push([d,m]),()=>{let f=fn.findIndex(([g])=>g===d);f>-1&&fn.splice(f,1)}),[d]);let p=l.toasts.map(f=>{var g,v,y;return{...s,...s[f.type],...f,removeDelay:f.removeDelay||((g=s[f.type])==null?void 0:g.removeDelay)||(s==null?void 0:s.removeDelay),duration:f.duration||((v=s[f.type])==null?void 0:v.duration)||(s==null?void 0:s.duration)||uf[f.type],style:{...s.style,...(y=s[f.type])==null?void 0:y.style,...f.style}}});return{...l,toasts:p}},pf=(s,d="blank",l)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:d,ariaProps:{role:"status","aria-live":"polite"},message:s,pauseDuration:0,...l,id:(l==null?void 0:l.id)||lf()}),Ko=s=>(d,l)=>{let m=pf(d,s,l);return wn(m.toasterId||cf(m.id))({type:2,toast:m}),m.id},Ie=(s,d)=>Ko("blank")(s,d);Ie.error=Ko("error");Ie.success=Ko("success");Ie.loading=Ko("loading");Ie.custom=Ko("custom");Ie.dismiss=(s,d)=>{let l={type:3,toastId:s};d?wn(d)(l):Mu(l)};Ie.dismissAll=s=>Ie.dismiss(void 0,s);Ie.remove=(s,d)=>{let l={type:4,toastId:s};d?wn(d)(l):Mu(l)};Ie.removeAll=s=>Ie.remove(void 0,s);Ie.promise=(s,d,l)=>{let m=Ie.loading(d.loading,{...l,...l==null?void 0:l.loading});return typeof s=="function"&&(s=s()),s.then(c=>{let p=d.success?xn(d.success,c):void 0;return p?Ie.success(p,{id:m,...l,...l==null?void 0:l.success}):Ie.dismiss(m),c}).catch(c=>{let p=d.error?xn(d.error,c):void 0;p?Ie.error(p,{id:m,...l,...l==null?void 0:l.error}):Ie.dismiss(m)}),s};var ff=1e3,gf=(s,d="default")=>{let{toasts:l,pausedAt:m}=mf(s,d),c=C.useRef(new Map).current,p=C.useCallback((j,E=ff)=>{if(c.has(j))return;let _=setTimeout(()=>{c.delete(j),f({type:4,toastId:j})},E);c.set(j,_)},[]);C.useEffect(()=>{if(m)return;let j=Date.now(),E=l.map(_=>{if(_.duration===1/0)return;let F=(_.duration||0)+_.pauseDuration-(j-_.createdAt);if(F<0){_.visible&&Ie.dismiss(_.id);return}return setTimeout(()=>Ie.dismiss(_.id,d),F)});return()=>{E.forEach(_=>_&&clearTimeout(_))}},[l,m,d]);let f=C.useCallback(wn(d),[d]),g=C.useCallback(()=>{f({type:5,time:Date.now()})},[f]),v=C.useCallback((j,E)=>{f({type:1,toast:{id:j,height:E}})},[f]),y=C.useCallback(()=>{m&&f({type:6,time:Date.now()})},[m,f]),k=C.useCallback((j,E)=>{let{reverseOrder:_=!1,gutter:F=8,defaultPosition:z}=E||{},L=l.filter(D=>(D.position||z)===(j.position||z)&&D.height),O=L.findIndex(D=>D.id===j.id),q=L.filter((D,$)=>$<O&&D.visible).length;return L.filter(D=>D.visible).slice(..._?[q+1]:[0,q]).reduce((D,$)=>D+($.height||0)+F,0)},[l]);return C.useEffect(()=>{l.forEach(j=>{if(j.dismissed)p(j.id,j.removeDelay);else{let E=c.get(j.id);E&&(clearTimeout(E),c.delete(j.id))}})},[l,p]),{toasts:l,handlers:{updateHeight:v,startPause:g,endPause:y,calculateOffset:k}}},hf=Ta`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,xf=Ta`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,vf=Ta`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,yf=dr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${s=>s.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${hf} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${xf} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${s=>s.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${vf} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,bf=Ta`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,jf=dr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${s=>s.secondary||"#e0e0e0"};
  border-right-color: ${s=>s.primary||"#616161"};
  animation: ${bf} 1s linear infinite;
`,Cf=Ta`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Sf=Ta`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,wf=dr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${s=>s.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Cf} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Sf} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${s=>s.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Nf=dr("div")`
  position: absolute;
`,kf=dr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Ef=Ta`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Pf=dr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Ef} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Lf=({toast:s})=>{let{icon:d,type:l,iconTheme:m}=s;return d!==void 0?typeof d=="string"?C.createElement(Pf,null,d):d:l==="blank"?null:C.createElement(kf,null,C.createElement(jf,{...m}),l!=="loading"&&C.createElement(Nf,null,l==="error"?C.createElement(yf,{...m}):C.createElement(wf,{...m})))},Af=s=>`
0% {transform: translate3d(0,${s*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Rf=s=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${s*-150}%,-1px) scale(.6); opacity:0;}
`,zf="0%{opacity:0;} 100%{opacity:1;}",Mf="0%{opacity:1;} 100%{opacity:0;}",Df=dr("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,If=dr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,_f=(s,d)=>{let l=s.includes("top")?1:-1,[m,c]=Lu()?[zf,Mf]:[Af(l),Rf(l)];return{animation:d?`${Ta(m)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Ta(c)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ff=C.memo(({toast:s,position:d,style:l,children:m})=>{let c=s.height?_f(s.position||d||"top-center",s.visible):{opacity:0},p=C.createElement(Lf,{toast:s}),f=C.createElement(If,{...s.ariaProps},xn(s.message,s));return C.createElement(Df,{className:s.className,style:{...c,...l,...s.style}},typeof m=="function"?m({icon:p,message:f}):C.createElement(C.Fragment,null,p,f))});nf(C.createElement);var Tf=({id:s,className:d,style:l,onHeightUpdate:m,children:c})=>{let p=C.useCallback(f=>{if(f){let g=()=>{let v=f.getBoundingClientRect().height;m(s,v)};g(),new MutationObserver(g).observe(f,{subtree:!0,childList:!0,characterData:!0})}},[s,m]);return C.createElement("div",{ref:p,className:d,style:l},c)},Of=(s,d)=>{let l=s.includes("top"),m=l?{top:0}:{bottom:0},c=s.includes("center")?{justifyContent:"center"}:s.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Lu()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${d*(l?1:-1)}px)`,...m,...c}},$f=Sn`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,dn=16,Bf=({reverseOrder:s,position:d="top-center",toastOptions:l,gutter:m,children:c,toasterId:p,containerStyle:f,containerClassName:g})=>{let{toasts:v,handlers:y}=gf(l,p);return C.createElement("div",{"data-rht-toaster":p||"",style:{position:"fixed",zIndex:9999,top:dn,left:dn,right:dn,bottom:dn,pointerEvents:"none",...f},className:g,onMouseEnter:y.startPause,onMouseLeave:y.endPause},v.map(k=>{let j=k.position||d,E=y.calculateOffset(k,{reverseOrder:s,gutter:m,defaultPosition:d}),_=Of(j,E);return C.createElement(Tf,{id:k.id,key:k.id,onHeightUpdate:y.updateHeight,className:k.visible?$f:"",style:_},k.type==="custom"?xn(k.message,k):c?c(k):C.createElement(Ff,{toast:k,position:j}))}))},ke=Ie;const Du="";async function Nr(s,d={}){const l=`${Du}${s}`;let m;try{m=await fetch(l,d)}catch{throw new Error("Servidor indisponível. Verifique sua conexão ou tente mais tarde.")}if(!(m.headers.get("content-type")||"").includes("application/json"))throw m.ok?new Error("Resposta inesperada do servidor."):new Error(`Servidor indisponível (${m.status}). O backend não está acessível neste link.`);return await m.json()}const Vf=Object.freeze(Object.defineProperty({__proto__:null,API_BASE:Du,apiFetch:Nr},Symbol.toStringTag,{value:"Module"})),Iu=C.createContext(null),Ni="sentinel_auth",ki="sentinel_users",Sr="sentinel_prospects";function qf({children:s}){const[d,l]=C.useState(()=>{const F=localStorage.getItem(Ni);return F?JSON.parse(F):null}),[m,c]=C.useState(()=>d?localStorage.getItem(`sentinel_nda_${d.email}`)==="true":!1);C.useEffect(()=>{if(d){localStorage.setItem(Ni,JSON.stringify(d));const F=localStorage.getItem(`sentinel_nda_${d.email}`);c(F==="true")}else localStorage.removeItem(Ni),c(!1)},[d]);function p(F){const z=JSON.parse(localStorage.getItem(ki)||"[]");if(z.find(q=>q.email===F.email))return{success:!1,message:"E-mail já cadastrado"};const O={...F,id:Date.now().toString(36)+Math.random().toString(36).slice(2,7),createdAt:new Date().toISOString(),verified:!1};return z.push(O),localStorage.setItem(ki,JSON.stringify(z)),k(O,"cadastro"),{success:!0,user:O}}const f=C.useCallback(async(F,z,L,O)=>{const q=await Nr("/api/auth/send-code",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:F,nome:z,empresa:L,telefone:O})});if(!q.sucesso)throw new Error(q.mensagem);return{devMode:q.dev_mode||!1,devCode:q.dev_code||null,devPreview:q.dev_preview||null}},[]),g=C.useCallback(async(F,z)=>{const L=await Nr("/api/auth/verify-code",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:F,code:z})});if(!L.sucesso)return{success:!1};const O={id:Date.now().toString(),nome:L.data.nome,email:L.data.email,telefone:L.data.telefone,empresa:L.data.empresa,createdAt:new Date().toISOString(),verified:!0};l(O),localStorage.setItem("sentinel_user",JSON.stringify(O));const q=JSON.parse(localStorage.getItem(Sr)||"[]"),D=q.findIndex(X=>X.email===O.email),$={id:O.id,nome:O.nome,email:O.email,telefone:O.telefone,empresa:O.empresa,fase:"verificado",faseLabel:"Verificado",createdAt:O.createdAt,updatedAt:new Date().toISOString()};return D>=0?q[D]={...q[D],...$}:q.push($),localStorage.setItem(Sr,JSON.stringify(q)),{success:!0}},[]);function v(){d&&(localStorage.setItem(`sentinel_nda_${d.email}`,"true"),c(!0),k(d,"nda_aceito"))}function y(){l(null),c(!1)}function k(F,z){const L=JSON.parse(localStorage.getItem(Sr)||"[]"),O=L.findIndex(D=>D.email===F.email),q={id:F.id,nome:F.nome,email:F.email,telefone:F.telefone,empresa:F.empresa,fase:z,faseLabel:Xc[z]||z,createdAt:F.createdAt||new Date().toISOString(),updatedAt:new Date().toISOString()};O>=0?L[O]={...L[O],...q}:L.push(q),localStorage.setItem(Sr,JSON.stringify(L))}function j(F,z){const L=JSON.parse(localStorage.getItem(Sr)||"[]"),O=L.findIndex(q=>q.email===F);O>=0&&(L[O].fase=z,L[O].faseLabel=Xc[z]||z,L[O].updatedAt=new Date().toISOString(),localStorage.setItem(Sr,JSON.stringify(L)))}function E(){return JSON.parse(localStorage.getItem(Sr)||"[]")}function _(){return JSON.parse(localStorage.getItem(ki)||"[]")}return r.jsx(Iu.Provider,{value:{user:d,ndaAccepted:m,register:p,verifyCode:g,generateCode:f,acceptNda:v,logout:y,trackProspect:k,updateProspectPhase:j,getProspects:E,getAllUsers:_},children:s})}function Lr(){const s=C.useContext(Iu);if(!s)throw new Error("useAuth must be inside AuthProvider");return s}const Xc={cadastro:"Cadastro",verificado:"Verificado",nda_aceito:"NDA Aceito",preenchendo_interno:"Preenchendo (Interno)",preenchendo_externo:"Preenchendo (Externo)",enviado_interno:"Enviado (Interno)",enviado_externo:"Enviado (Externo)"},wr="/sentinel-fairfield/";function Uf({end:s,suffix:d="",prefix:l=""}){const[m,c]=C.useState(0),p=C.useRef(null);return C.useEffect(()=>{const f=new IntersectionObserver(([g])=>{if(g.isIntersecting){const y=Date.now(),k=()=>{const j=Math.min((Date.now()-y)/2e3,1);c(Math.floor(j*s)),j<1&&requestAnimationFrame(k)};k(),f.disconnect()}},{threshold:.3});return p.current&&f.observe(p.current),()=>f.disconnect()},[s]),r.jsxs("span",{ref:p,children:[l,m.toLocaleString("pt-BR"),d]})}function Wf(){const s=["Analisando perfil da empresa...","Consultando Coface...","Consultando Atradius...","Consultando AVLA...","Consultando Allianz Trade...","Comparando coberturas...","Melhor oferta identificada!"],[d,l]=C.useState(0);return C.useEffect(()=>{const m=setInterval(()=>l(c=>(c+1)%s.length),2e3);return()=>clearInterval(m)},[]),s[d]}function Gf({items:s}){const[d,l]=C.useState([]);return C.useEffect(()=>{const m=s.length*800,c=s.map((g,v)=>setTimeout(()=>l(y=>[...y,v]),(v+1)*800)),p=setTimeout(()=>l([]),m+2e3),f=setInterval(()=>{l([]),s.forEach((g,v)=>setTimeout(()=>l(y=>[...y,v]),(v+1)*800))},m+2500);return()=>{c.forEach(clearTimeout),clearTimeout(p),clearInterval(f)}},[s.length]),r.jsx("div",{className:"space-y-1.5 text-left max-w-[220px] mx-auto",children:s.map((m,c)=>r.jsxs("div",{className:`flex items-center gap-2 px-2.5 py-1.5 rounded-lg border transition-all duration-500 ${d.includes(c)?"bg-accent-emerald/[0.06] border-accent-emerald/20":"bg-white/[0.04] border-white/[0.06]"}`,children:[r.jsx("div",{className:`h-3 w-3 rounded-sm flex items-center justify-center flex-shrink-0 transition-all duration-300 ${d.includes(c)?"bg-accent-emerald/20 border border-accent-emerald/40":"border border-white/10"}`,children:d.includes(c)&&r.jsx("svg",{className:"h-2 w-2 text-accent-emerald animate-fadeIn",fill:"currentColor",viewBox:"0 0 20 20",children:r.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),r.jsx("span",{className:`text-[10px] transition-colors duration-500 ${d.includes(c)?"text-white/60":"text-white/30"}`,children:m})]},m))})}function no({size:s=32}){return r.jsxs("svg",{width:s,height:s,viewBox:"0 0 80 80",fill:"none",children:[r.jsx("path",{d:"M40 12 L62 24 L62 42 C62 56 52 66 40 70 C28 66 18 56 18 42 L18 24 Z",fill:"rgba(125,211,252,0.08)",stroke:"#7DD3FC",strokeWidth:"1.5",children:r.jsx("animate",{attributeName:"stroke-opacity",values:"0.5;1;0.5",dur:"2.5s",repeatCount:"indefinite"})}),r.jsx("path",{d:"M40 20 L56 28 L56 42 C56 52 49 60 40 63 C31 60 24 52 24 42 L24 28 Z",fill:"rgba(125,211,252,0.05)",stroke:"#7DD3FC",strokeWidth:"0.8",opacity:"0.4"}),r.jsxs("text",{x:"40",y:"48",textAnchor:"middle",fill:"#7DD3FC",fontSize:"22",fontWeight:"bold",fontFamily:"Inter, sans-serif",children:["$",r.jsx("animate",{attributeName:"opacity",values:"0.6;1;0.6",dur:"2s",repeatCount:"indefinite"})]}),r.jsxs("line",{x1:"22",y1:"40",x2:"58",y2:"40",stroke:"#7DD3FC",strokeWidth:"0.5",opacity:"0.3",children:[r.jsx("animate",{attributeName:"y1",values:"25;55;25",dur:"3s",repeatCount:"indefinite"}),r.jsx("animate",{attributeName:"y2",values:"25;55;25",dur:"3s",repeatCount:"indefinite"}),r.jsx("animate",{attributeName:"opacity",values:"0;0.4;0",dur:"3s",repeatCount:"indefinite"})]}),r.jsx("defs",{children:r.jsxs("linearGradient",{id:"miniGrad",x1:"0",y1:"0",x2:"80",y2:"80",children:[r.jsx("stop",{offset:"0%",stopColor:"#7DD3FC"}),r.jsx("stop",{offset:"100%",stopColor:"#34D399"})]})})]})}function Hf(){const s=`M114,10 L112,16 L117,22 L118,28 L122,30 L126,31 L129,34 L129,38
    L136,40 L142,42 L149,43 L155,44 L161,45 L166,44 L170,44 L174,46
    L177,49 L182,50 L187,52 L190,54 L192,56 L193,59 L195,63 L195,65
    L195,68 L195,70 L193,74 L191,78 L188,81 L184,84 L181,88 L179,91
    L177,94 L176,99 L175,103 L174,108 L174,111 L173,117 L171,123
    L168,130 L164,136 L160,140 L157,142 L154,143 L148,146 L143,148
    L139,148 L134,151 L129,155 L129,160 L129,165 L126,170 L123,174
    L120,176 L116,177 L114,182 L112,187 L108,192 L105,195
    L100,193 L95,189 L90,184 L87,176 L90,170 L93,165 L96,160
    L99,155 L100,151 L101,148 L98,143 L94,140 L90,135 L87,130
    L84,123 L84,117 L84,109 L80,106 L73,104 L66,98 L58,92
    L52,87 L47,83 L40,84 L35,82 L31,84 L24,78 L18,72
    L11,68 L5,67 L8,62 L12,57 L17,53 L21,52 L25,51
    L30,44 L33,38 L36,33 L39,31 L40,28 L40,25 L44,20
    L50,17 L56,14 L62,11 L68,8 L70,6 L72,5
    L71,8 L71,12 L74,14 L78,17 L84,19 L92,21
    L98,20 L102,20 L108,14 Z`,d=["M106,31 L106,52 L114,72 L130,81","M130,38 L130,55 L130,81","M130,81 L145,82 L160,90 L177,94","M73,104 L84,109 L92,107 L108,107 L132,108","M108,107 L132,108 L151,118 L168,130","M129,148 L139,148 L148,146","M132,108 L132,130 L139,148","M105,165 L129,165","M84,123 L99,130 L101,148","M161,45 L156,55 L168,70 L177,49","M132,108 L151,118 L174,111"],l=[[70,17,2],[73,46,3],[117,31,2],[129,38,3],[149,43,2],[156,55,2],[177,49,3],[193,59,2],[194,70,3],[191,78,2],[184,84,2],[177,94,3],[35,80,2],[54,74,2],[130,81,2],[92,107,2],[132,108,3],[125,112,2],[151,128,2],[154,142,3],[138,145,3],[125,155,2],[129,165,2],[116,177,3],[99,130,2]],m=[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[1,13],[13,12],[13,14],[14,16],[16,17],[17,15],[15,14],[16,18],[18,19],[19,20],[20,21],[21,22],[22,23],[1,14],[3,6],[6,11],[11,18],[16,20],[17,20],[5,11],[4,14],[0,13],[12,1],[15,24],[24,20],[8,11],[14,17],[13,15],[1,3],[3,14],[20,18],[11,16],[5,8],[15,24],[24,21]];return r.jsx("div",{className:"relative w-20 h-20 sm:w-24 sm:h-24",children:r.jsxs("svg",{viewBox:"0 0 200 200",fill:"none",className:"w-full h-full",children:[r.jsxs("defs",{children:[r.jsxs("radialGradient",{id:"brGlow",cx:"55%",cy:"50%",r:"50%",children:[r.jsx("stop",{offset:"0%",stopColor:"#7DD3FC",stopOpacity:"0.08"}),r.jsx("stop",{offset:"100%",stopColor:"#7DD3FC",stopOpacity:"0"})]}),r.jsxs("filter",{id:"nodeGlow",children:[r.jsx("feGaussianBlur",{stdDeviation:"3",result:"b"}),r.jsxs("feMerge",{children:[r.jsx("feMergeNode",{in:"b"}),r.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),r.jsxs("filter",{id:"borderGlow",children:[r.jsx("feGaussianBlur",{stdDeviation:"1.5",result:"b"}),r.jsxs("feMerge",{children:[r.jsx("feMergeNode",{in:"b"}),r.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),r.jsx("ellipse",{cx:"110",cy:"100",rx:"90",ry:"95",fill:"url(#brGlow)"}),r.jsx("path",{d:s,fill:"rgba(125,211,252,0.04)",stroke:"#7DD3FC",strokeWidth:"1.4",strokeLinejoin:"round",filter:"url(#borderGlow)",children:r.jsx("animate",{attributeName:"stroke-opacity",values:"0.4;0.7;0.4",dur:"4s",repeatCount:"indefinite"})}),d.map((c,p)=>r.jsx("path",{d:c,stroke:"#7DD3FC",strokeWidth:"0.4",fill:"none",opacity:"0.08",strokeLinejoin:"round",children:r.jsx("animate",{attributeName:"opacity",values:"0.04;0.12;0.04",dur:`${3+p*.5}s`,repeatCount:"indefinite"})},`sb${p}`)),m.map(([c,p],f)=>r.jsx("line",{x1:l[c][0],y1:l[c][1],x2:l[p][0],y2:l[p][1],stroke:"#7DD3FC",strokeWidth:"0.5",opacity:"0.12",children:r.jsx("animate",{attributeName:"opacity",values:"0.06;0.22;0.06",dur:`${2+f%5*.4}s`,begin:`${f%7*.3}s`,repeatCount:"indefinite"})},`c${f}`)),l.map(([c,p,f],g)=>r.jsxs("g",{children:[r.jsx("circle",{cx:c,cy:p,r:f*3,fill:"#7DD3FC",opacity:"0.06",filter:"url(#nodeGlow)"}),r.jsxs("circle",{cx:c,cy:p,r:f*.9,fill:"#7DD3FC",children:[r.jsx("animate",{attributeName:"opacity",values:"0.5;1;0.5",dur:`${1.5+g*.12}s`,repeatCount:"indefinite"}),r.jsx("animate",{attributeName:"r",values:`${f*.6};${f*1.1};${f*.6}`,dur:`${1.8+g*.15}s`,repeatCount:"indefinite"})]})]},`n${g}`)),r.jsxs("circle",{r:"2",fill:"#7DD3FC",filter:"url(#nodeGlow)",children:[r.jsx("animateMotion",{dur:"4.5s",repeatCount:"indefinite",path:"M73,46 L129,38 L177,49 L193,59 L194,70 L177,94 L151,128 L154,142 L138,145 L125,155 L116,177"}),r.jsx("animate",{attributeName:"opacity",values:"0;1;1;1;0",dur:"4.5s",repeatCount:"indefinite"})]}),r.jsxs("circle",{r:"1.5",fill:"#34D399",children:[r.jsx("animateMotion",{dur:"3.5s",repeatCount:"indefinite",begin:"1.2s",path:"M35,80 L54,74 L92,107 L132,108 L138,145 L129,165 L116,177"}),r.jsx("animate",{attributeName:"opacity",values:"0;0.9;0.9;0",dur:"3.5s",begin:"1.2s",repeatCount:"indefinite"})]}),r.jsxs("circle",{r:"1.2",fill:"#FCD34D",children:[r.jsx("animateMotion",{dur:"3.8s",repeatCount:"indefinite",begin:"2.5s",path:"M149,43 L130,81 L132,108 L151,128 L154,142"}),r.jsx("animate",{attributeName:"opacity",values:"0;0.8;0.8;0",dur:"3.8s",begin:"2.5s",repeatCount:"indefinite"})]})]})})}function Qf(){const s=[[24,20],[20,28],[18,35],[22,42],[26,48],[30,54],[32,62],[30,70],[28,76],[52,18],[56,22],[60,20],[64,24],[58,28],[56,36],[60,42],[64,50],[62,58],[58,64],[54,56],[68,20],[72,26],[76,32],[80,28],[84,24],[78,38],[74,44],[82,54],[80,60],[36,30],[42,24]],d=[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[9,10],[10,11],[11,12],[12,13],[13,9],[14,15],[15,16],[16,17],[17,18],[18,19],[19,14],[20,21],[21,22],[22,23],[23,24],[24,20],[22,25],[25,26],[27,28],[0,29],[29,30],[30,9],[9,20],[13,14],[14,19],[19,15],[16,25],[25,27],[1,29],[2,30],[11,20],[12,21],[22,24],[23,27],[26,28],[17,27],[3,30],[10,13],[15,19],[21,25],[5,19],[6,18],[10,14],[24,22]];return r.jsx("div",{className:"relative w-20 h-20 sm:w-24 sm:h-24",children:r.jsxs("svg",{viewBox:"0 0 100 100",fill:"none",className:"w-full h-full",children:[r.jsxs("defs",{children:[r.jsxs("radialGradient",{id:"gGlow",cx:"40%",cy:"35%",r:"50%",children:[r.jsx("stop",{offset:"0%",stopColor:"#7DD3FC",stopOpacity:"0.1"}),r.jsx("stop",{offset:"100%",stopColor:"#7DD3FC",stopOpacity:"0"})]}),r.jsx("clipPath",{id:"gClip",children:r.jsx("circle",{cx:"50",cy:"50",r:"42"})}),r.jsxs("filter",{id:"gnGlow",children:[r.jsx("feGaussianBlur",{stdDeviation:"1.5",result:"b"}),r.jsxs("feMerge",{children:[r.jsx("feMergeNode",{in:"b"}),r.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),r.jsx("circle",{cx:"50",cy:"50",r:"42",fill:"url(#gGlow)"}),r.jsx("circle",{cx:"50",cy:"50",r:"42",stroke:"#7DD3FC",strokeWidth:"1",fill:"none",children:r.jsx("animate",{attributeName:"stroke-opacity",values:"0.25;0.55;0.25",dur:"4s",repeatCount:"indefinite"})}),r.jsxs("g",{clipPath:"url(#gClip)",opacity:"0.15",children:[r.jsx("path",{d:`M12,18 L14,14 L18,12 L22,10 L26,11 L30,10 L34,12 L36,10 L38,12
            L37,15 L35,18 L33,16 L30,18 L28,16 L26,18 L28,20 L30,22
            L28,24 L26,22 L24,24 L22,26 L20,24 L18,26 L16,28
            L18,30 L20,32 L22,34 L20,36 L18,34 L16,32 L14,30
            L12,28 L10,24 L10,20 Z`,fill:"#7DD3FC"}),r.jsx("path",{d:"M22,34 L24,36 L26,38 L24,40 L22,38 L20,36 Z",fill:"#7DD3FC"}),r.jsx("path",{d:"M14,30 L16,32 L14,34 L16,36 L18,38 L20,40 L22,42 L20,44 L18,42 L16,40 L14,38 L12,36 L10,34 L10,32 Z",fill:"#7DD3FC"}),r.jsx("path",{d:`M22,46 L26,44 L30,44 L34,46 L36,44 L38,46 L36,48
            L38,50 L36,52 L38,54 L40,56 L42,60 L42,64
            L40,68 L38,72 L36,76 L34,78 L32,80 L30,82
            L28,80 L26,76 L24,72 L22,68 L20,62
            L18,56 L18,52 L20,48 Z`,fill:"#7DD3FC"}),r.jsx("path",{d:"M48,14 L50,12 L52,14 L50,16 L48,16 Z",fill:"#7DD3FC"}),r.jsx("path",{d:`M52,10 L54,8 L56,10 L58,8 L60,10 L62,10 L64,12
            L66,14 L68,12 L70,14 L72,16 L74,14 L76,16
            L74,18 L72,20 L70,18 L68,20 L66,22 L64,20
            L62,22 L60,24 L58,22 L56,24 L54,22 L52,20
            L50,18 L52,16 L54,14 Z`,fill:"#7DD3FC"}),r.jsx("path",{d:"M50,22 L52,20 L54,22 L56,24 L54,26 L52,28 L50,26 L48,24 Z",fill:"#7DD3FC"}),r.jsx("path",{d:"M58,24 L60,26 L62,28 L60,30 L58,28 L56,26 Z",fill:"#7DD3FC"}),r.jsx("path",{d:`M50,30 L52,28 L54,30 L58,30 L62,32 L66,34
            L70,36 L72,38 L74,40 L76,44 L74,48
            L72,52 L70,56 L68,60 L66,64 L64,68
            L62,70 L60,68 L58,64 L56,60
            L54,56 L52,52 L50,48 L48,44
            L48,40 L48,36 L50,34 Z`,fill:"#7DD3FC"}),r.jsx("path",{d:"M72,58 L74,56 L76,58 L74,62 L72,60 Z",fill:"#7DD3FC"}),r.jsx("path",{d:"M70,28 L74,26 L76,28 L78,30 L80,32 L78,34 L76,36 L74,34 L72,32 L70,30 Z",fill:"#7DD3FC"}),r.jsx("path",{d:`M78,22 L80,20 L82,18 L84,20 L86,22 L88,26
            L90,30 L88,32 L86,30 L84,28 L82,26 L80,24 Z`,fill:"#7DD3FC"}),r.jsx("path",{d:"M80,34 L82,32 L84,34 L86,36 L84,40 L82,44 L80,42 L78,38 L78,36 Z",fill:"#7DD3FC"}),r.jsx("path",{d:"M86,34 L88,32 L90,34 L88,38 L86,40 L84,38 Z",fill:"#7DD3FC"}),r.jsx("path",{d:"M82,52 L86,50 L90,52 L92,56 L90,60 L86,62 L82,60 L80,56 Z",fill:"#7DD3FC"})]}),r.jsx("ellipse",{cx:"50",cy:"50",rx:"42",ry:"12",stroke:"#7DD3FC",strokeWidth:"0.3",opacity:"0.08"}),r.jsx("ellipse",{cx:"50",cy:"50",rx:"42",ry:"24",stroke:"#7DD3FC",strokeWidth:"0.3",opacity:"0.07"}),r.jsx("ellipse",{cx:"50",cy:"50",rx:"42",ry:"36",stroke:"#7DD3FC",strokeWidth:"0.3",opacity:"0.06"}),r.jsx("ellipse",{cx:"50",cy:"50",rx:"14",ry:"42",stroke:"#7DD3FC",strokeWidth:"0.3",opacity:"0.08"}),r.jsx("ellipse",{cx:"50",cy:"50",rx:"28",ry:"42",stroke:"#7DD3FC",strokeWidth:"0.3",opacity:"0.07"}),r.jsx("line",{x1:"8",y1:"50",x2:"92",y2:"50",stroke:"#7DD3FC",strokeWidth:"0.3",opacity:"0.08"}),r.jsx("line",{x1:"50",y1:"8",x2:"50",y2:"92",stroke:"#7DD3FC",strokeWidth:"0.3",opacity:"0.06"}),d.map(([l,m],c)=>r.jsx("line",{x1:s[l][0],y1:s[l][1],x2:s[m][0],y2:s[m][1],stroke:"#7DD3FC",strokeWidth:"0.35",opacity:"0.1",children:r.jsx("animate",{attributeName:"opacity",values:"0.05;0.18;0.05",dur:`${2+c%6*.3}s`,begin:`${c%8*.2}s`,repeatCount:"indefinite"})},`gm${c}`)),s.map(([l,m],c)=>r.jsxs("g",{children:[r.jsx("circle",{cx:l,cy:m,r:"2",fill:"#7DD3FC",opacity:"0.04",filter:"url(#gnGlow)"}),r.jsx("circle",{cx:l,cy:m,r:c%3===0?1.2:.7,fill:"#7DD3FC",children:r.jsx("animate",{attributeName:"opacity",values:"0.4;0.9;0.4",dur:`${1.5+c%5*.2}s`,repeatCount:"indefinite"})})]},`gn${c}`)),r.jsxs("circle",{r:"1.2",fill:"#7DD3FC",filter:"url(#gnGlow)",children:[r.jsx("animateMotion",{dur:"5s",repeatCount:"indefinite",path:"M24,20 L30,54 L32,62 L28,76 L50,88 L64,50 L76,32 L84,24 L82,54"}),r.jsx("animate",{attributeName:"opacity",values:"0;1;1;1;0",dur:"5s",repeatCount:"indefinite"})]}),r.jsxs("circle",{r:"1",fill:"#34D399",children:[r.jsx("animateMotion",{dur:"4s",repeatCount:"indefinite",begin:"1.5s",path:"M52,18 L60,20 L72,26 L80,28 L78,38 L62,58 L56,36 L30,54 L22,42"}),r.jsx("animate",{attributeName:"opacity",values:"0;0.9;0.9;0",dur:"4s",begin:"1.5s",repeatCount:"indefinite"})]}),r.jsx("circle",{cx:"50",cy:"50",r:"46",stroke:"#7DD3FC",strokeWidth:"0.4",strokeDasharray:"3 5",opacity:"0.08",children:r.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"25s",repeatCount:"indefinite"})})]})})}function Jf(){const s=[{id:1,angle:0,delay:"0s",label:"Chubb"},{id:2,angle:51,delay:"0.7s",label:"Coface"},{id:3,angle:102,delay:"1.4s",label:"Atradius"},{id:4,angle:153,delay:"2.1s",label:"AVLA"},{id:5,angle:204,delay:"2.8s",label:"AIG"},{id:6,angle:255,delay:"3.5s",label:"Allianz"},{id:7,angle:306,delay:"4.2s",label:"CESCE"}];return r.jsxs("div",{className:"relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] flex items-center justify-center select-none",children:[r.jsx("div",{className:"absolute inset-0 rounded-full",style:{background:"radial-gradient(circle, rgba(125,211,252,0.06) 0%, transparent 70%)"}}),r.jsx("div",{className:"absolute inset-4 rounded-full border border-sentinel/10 animate-spin",style:{animationDuration:"18s"}}),r.jsx("div",{className:"absolute inset-8 rounded-full border border-dashed border-sentinel/8 animate-spin",style:{animationDuration:"28s",animationDirection:"reverse"}}),r.jsx("div",{className:"absolute inset-14 rounded-full border border-sentinel/12 animate-spin",style:{animationDuration:"12s"}}),s.map(d=>{const l=d.angle*Math.PI/180,m=120,c=Math.cos(l)*m,p=Math.sin(l)*m;return r.jsxs("div",{className:"absolute flex flex-col items-center gap-0.5",style:{transform:`translate(${c}px, ${p}px)`,animation:"orbit-pulse 3s ease-in-out infinite",animationDelay:d.delay},children:[r.jsx("div",{className:"w-2 h-2 rounded-full bg-sentinel shadow-lg",style:{boxShadow:"0 0 8px rgba(125,211,252,0.8)"}}),r.jsx("span",{className:"text-[7px] text-sentinel/60 font-mono font-bold whitespace-nowrap",children:d.label})]},d.id)}),r.jsx("div",{className:"absolute inset-14 rounded-full overflow-hidden",children:r.jsx("div",{className:"absolute inset-0 rounded-full animate-spin",style:{animationDuration:"3s",background:"conic-gradient(from 0deg, transparent 0deg, rgba(125,211,252,0.15) 60deg, transparent 90deg)"}})}),r.jsxs("div",{className:"relative z-10 flex items-center justify-center",children:[r.jsx("div",{className:"absolute w-32 h-32 rounded-full animate-pulse",style:{background:"radial-gradient(circle, rgba(125,211,252,0.12) 0%, transparent 70%)",animationDuration:"2.5s"}}),r.jsxs("svg",{viewBox:"0 0 120 136",className:"w-24 h-24 sm:w-28 sm:h-28 drop-shadow-xl",fill:"none",children:[r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:"sg",x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:"#1E3A5F"}),r.jsx("stop",{offset:"100%",stopColor:"#0A1628"})]}),r.jsxs("linearGradient",{id:"sb",x1:"0",y1:"0",x2:"1",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:"#7DD3FC"}),r.jsx("stop",{offset:"100%",stopColor:"#38BDF8"})]}),r.jsxs("filter",{id:"glow-s",children:[r.jsx("feGaussianBlur",{stdDeviation:"2.5",result:"blur"}),r.jsxs("feMerge",{children:[r.jsx("feMergeNode",{in:"blur"}),r.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),r.jsx("path",{d:"M60 4 L112 26 L112 72 Q112 112 60 132 Q8 112 8 72 L8 26 Z",fill:"url(#sg)"}),r.jsx("path",{d:"M60 4 L112 26 L112 72 Q112 112 60 132 Q8 112 8 72 L8 26 Z",fill:"none",stroke:"url(#sb)",strokeWidth:"1.5",opacity:"0.6",filter:"url(#glow-s)"}),r.jsx("path",{d:"M60 14 L102 32 L102 72 Q102 104 60 122 Q18 104 18 72 L18 32 Z",fill:"none",stroke:"rgba(125,211,252,0.15)",strokeWidth:"1"}),r.jsx("text",{x:"60",y:"84",fontFamily:"Arial,Helvetica,sans-serif",fontWeight:"900",fontSize:"44",fill:"url(#sb)",textAnchor:"middle",filter:"url(#glow-s)",opacity:"0.7",children:"$"}),r.jsxs("g",{stroke:"rgba(125,211,252,0.3)",strokeWidth:"1",fill:"none",children:[r.jsx("polyline",{points:"20,35 14,35 14,28"}),r.jsx("polyline",{points:"100,35 106,35 106,28"}),r.jsx("polyline",{points:"20,100 14,100 14,107"}),r.jsx("polyline",{points:"100,100 106,100 106,107"})]}),r.jsx("line",{x1:"18",y1:"75",x2:"102",y2:"75",stroke:"rgba(125,211,252,0.25)",strokeWidth:"1",style:{animation:"scan-line 2.5s ease-in-out infinite"}})]})]}),r.jsx("style",{children:`
        @keyframes orbit-pulse {
          0%, 100% { opacity: 0.4; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) scale(1); }
          50% { opacity: 1; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) scale(1.3); }
        }
        @keyframes scan-line {
          0% { transform: translateY(-28px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(28px); opacity: 0; }
        }
      `})]})}function Kf(){const[s,d]=C.useState(!1),l=Wf();C.useEffect(()=>{function c(){d(!0),window.scrollTo({top:0,behavior:"smooth"})}return window.addEventListener("sentinel-iniciar",c),()=>window.removeEventListener("sentinel-iniciar",c)},[]),C.useEffect(()=>{window.dispatchEvent(new CustomEvent(s?"sentinel-started":"sentinel-reset"))},[s]);const m=[{src:`${wr}logos/coface.png`,alt:"Coface",invert:!0,size:"h-7 sm:h-9",mini:"h-5"},{src:`${wr}logos/atradius.svg`,alt:"Atradius",size:"h-7 sm:h-9",mini:"h-5"},{src:`${wr}logos/allianz-trade.png`,alt:"Allianz Trade",invert:!0,size:"h-9 sm:h-12",mini:"h-7"},{src:`${wr}logos/avla.svg`,alt:"AVLA",size:"h-6 sm:h-8",mini:"h-4"},{src:`${wr}logos/aig.png`,alt:"AIG",size:"h-7 sm:h-9",mini:"h-5"},{src:`${wr}logos/cesce.svg`,alt:"CESCE",size:"h-7 sm:h-9",mini:"h-5"},{src:`${wr}logos/chubb.svg`,alt:"CHUBB",size:"h-7 sm:h-9",mini:"h-5"}];return r.jsxs("div",{className:"max-w-6xl mx-auto px-3 sm:px-4 py-6 sm:py-10",children:[!s&&r.jsxs("div",{className:"animate-fadeIn",children:[r.jsxs("section",{className:"relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-navy via-navy-light to-navy p-8 sm:p-12 pb-10 mb-8",children:[r.jsx("div",{className:"absolute top-0 right-0 w-[500px] h-[500px] bg-sentinel/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-[120px]"}),r.jsx("div",{className:"absolute bottom-0 left-0 w-[300px] h-[300px] bg-cobre/5 rounded-full translate-y-1/2 -translate-x-1/4 blur-[100px]"}),r.jsx("div",{className:"absolute inset-0 bg-grid opacity-30"}),r.jsxs("div",{className:"relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-6",children:[r.jsxs("div",{className:"flex-1 min-w-0",children:[r.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-[1.05] tracking-tight text-white",children:r.jsx("span",{className:"bg-gradient-to-r from-sentinel to-sentinel-light bg-clip-text text-transparent",children:"SENTINEL"})}),r.jsxs("p",{className:"text-lg sm:text-xl font-medium text-white/50 mb-6 leading-relaxed max-w-lg",children:["Nossa plataforma analisa o perfil da sua empresa e consulta simultaneamente todas as seguradoras do mercado, garantindo a ",r.jsx("strong",{className:"text-cobre",children:"melhor opcao em seguro de credito"})," para o seu negocio."]}),r.jsxs("button",{onClick:()=>{d(!0),window.scrollTo({top:0,behavior:"smooth"})},className:"group relative inline-flex items-center gap-3 bg-gradient-to-r from-sentinel-dark to-sentinel text-navy-dark px-8 sm:px-10 py-4 rounded-2xl font-bold text-base sm:text-lg shadow-xl shadow-sentinel/15 hover:shadow-2xl hover:shadow-sentinel/25 hover:scale-[1.02] transition-all duration-300",children:[r.jsx("svg",{className:"w-5 h-5 group-hover:translate-x-1 transition-transform",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),"Iniciar Cotacao",r.jsx("span",{className:"absolute -top-2 -right-2 bg-accent-emerald text-navy-dark text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse",children:"Gratis"})]}),r.jsx("p",{className:"text-white/20 text-xs mt-4",children:"Sem compromisso · Resultado em ate 5 dias uteis"})]}),r.jsx("div",{className:"flex-shrink-0 flex items-center justify-center w-full lg:w-auto",children:r.jsx(Jf,{})})]})]}),r.jsxs("section",{className:"card-glass mb-8 relative overflow-hidden",children:[r.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[r.jsx("div",{className:"absolute -top-20 -right-20 w-[300px] h-[300px] bg-sentinel/5 rounded-full blur-[100px]"}),r.jsx("div",{className:"absolute -bottom-20 -left-20 w-[250px] h-[250px] bg-cobre/5 rounded-full blur-[100px]"}),r.jsx("div",{className:"absolute inset-0 bg-grid opacity-20"})]}),r.jsxs("div",{className:"relative z-10",children:[r.jsxs("div",{className:"text-center mb-10",children:[r.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sentinel/10 border border-sentinel/20 text-sentinel text-[10px] font-bold uppercase tracking-widest mb-3",children:[r.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-sentinel animate-pulse"}),"Resultados Comprovados"]}),r.jsx("h2",{className:"text-2xl sm:text-3xl font-black text-white",children:"Por que escolher o SENTINEL"}),r.jsx("p",{className:"text-white/30 text-sm mt-2",children:"Numeros que falam por si — tecnologia que transforma."})]}),r.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-10",children:[{val:7,suffix:"",label:"Seguradoras conectadas",icon:r.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"})}),gradient:"from-sentinel to-sentinel-light",iconClass:"bg-sentinel/10 border border-sentinel/20 text-sentinel shadow-lg shadow-sentinel/5"},{val:500,suffix:"+",label:"Empresas atendidas",icon:r.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"})}),gradient:"from-cobre to-cobre-light",iconClass:"bg-cobre/10 border border-cobre/20 text-cobre shadow-lg shadow-cobre/5"},{val:98,suffix:"%",label:"Satisfacao dos clientes",icon:r.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"})}),gradient:"from-accent-emerald to-emerald-300",iconClass:"bg-accent-emerald/10 border border-accent-emerald/20 text-accent-emerald shadow-lg shadow-accent-emerald/5"},{val:5,suffix:" dias",label:"Prazo de entrega",icon:r.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),gradient:"from-accent-violet to-violet-300",iconClass:"bg-accent-violet/10 border border-accent-violet/20 text-accent-violet shadow-lg shadow-accent-violet/5"}].map(c=>r.jsxs("div",{className:"text-center group",children:[r.jsx("div",{className:`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 ${c.iconClass}`,children:c.icon}),r.jsx("p",{className:"text-3xl sm:text-4xl font-black text-white",children:r.jsx(Uf,{end:c.val,suffix:c.suffix})}),r.jsx("p",{className:"text-xs sm:text-sm text-white/40 mt-2 font-medium",children:c.label})]},c.label))}),r.jsx("div",{className:"h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-10"}),r.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[{icon:r.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),title:"100% Gratuito",text:"O estudo de mercado SENTINEL e totalmente gratuito. Atuamos como suporte adicional a sua area de credito.",color:"emerald",borderColor:"border-l-accent-emerald/50",iconBg:"bg-accent-emerald/10 text-accent-emerald border-accent-emerald/20"},{icon:r.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),title:"Decisao Estrategica",text:"Seus dados geram um estudo de mercado completo — determinante para a estrategia de credito da sua empresa.",color:"sentinel",borderColor:"border-l-sentinel/50",iconBg:"bg-sentinel/10 text-sentinel border-sentinel/20"},{icon:r.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),title:"IA + Inteligencia de Mercado",text:"O SENTINEL processa seu perfil com IA e cruza dados de 7 seguradoras para recomendar a melhor solucao.",color:"cobre",borderColor:"border-l-cobre/50",iconBg:"bg-cobre/10 text-cobre border-cobre/20"}].map(c=>r.jsxs("div",{className:`rounded-xl bg-white/[0.03] border border-white/[0.06] border-l-[3px] ${c.borderColor} p-5 hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300 group`,children:[r.jsx("div",{className:`h-11 w-11 rounded-xl border flex items-center justify-center mb-4 ${c.iconBg} group-hover:scale-110 transition-transform duration-300`,children:c.icon}),r.jsx("h4",{className:"text-base font-bold text-white mb-2",children:c.title}),r.jsx("p",{className:"text-sm text-white/35 leading-relaxed",children:c.text})]},c.title))})]})]}),r.jsxs("section",{className:"card-glass mb-8 relative overflow-hidden",children:[r.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:r.jsx("div",{className:"absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sentinel/20 to-transparent",style:{animation:"flow-scan 4s ease-in-out infinite"}})}),r.jsxs("div",{className:"text-center mb-8",children:[r.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sentinel/10 border border-sentinel/20 text-sentinel text-[10px] font-bold uppercase tracking-widest mb-3",children:[r.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-sentinel animate-pulse"}),"Smart Credit Engine"]}),r.jsx("h2",{className:"text-2xl sm:text-3xl font-black text-white",children:"Como funciona o SENTINEL"}),r.jsx("p",{className:"text-white/30 text-sm mt-2",children:"Tres etapas. Uma plataforma. A melhor solucao de credito."})]}),r.jsxs("div",{className:"relative",children:[r.jsx("div",{className:"hidden md:block absolute z-0 overflow-visible",style:{top:"35px",left:"calc(16.667% - 0.833rem + 36px)",width:"calc(33.333% + 0.833rem - 72px)",height:"2px"},children:r.jsxs("div",{className:"w-full h-full bg-sentinel/15 relative overflow-visible",children:[r.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-sky-300/40 to-sky-400/40",style:{animation:"linePulse 2s ease-in-out infinite"}}),r.jsx("div",{className:"absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-sky-300 shadow-[0_0_8px_#7DD3FC]",style:{animation:"travelDot 2.5s linear infinite"}})]})}),r.jsx("div",{className:"hidden md:block absolute z-0 overflow-visible",style:{top:"35px",left:"calc(50% + 36px)",width:"calc(33.333% + 0.833rem - 72px)",height:"2px"},children:r.jsxs("div",{className:"w-full h-full bg-sentinel/15 relative overflow-visible",children:[r.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-sky-400/40 to-emerald-400/40",style:{animation:"linePulse 2s ease-in-out infinite",animationDelay:"1s"}}),r.jsx("div",{className:"absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]",style:{animation:"travelDot 2.5s linear infinite",animationDelay:"0.8s"}})]})}),r.jsxs("div",{className:"relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10",children:[r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"w-[72px] h-[72px] rounded-2xl bg-sentinel/10 border border-sentinel/20 flex items-center justify-center mx-auto mb-4",children:r.jsx("svg",{className:"h-7 w-7 text-sentinel",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),r.jsx("h3",{className:"text-sm font-bold text-white mb-1",children:"Seus Dados"}),r.jsx("p",{className:"text-[11px] text-white/30 mb-3",children:"Preencha as informacoes da empresa"}),r.jsx(Gf,{items:["CNPJ / Razao Social","Faturamento e Carteira","Historico de Perdas","Amostra de Compradores"]})]}),r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"w-[72px] h-[72px] rounded-2xl bg-sentinel/15 border border-sentinel/25 flex items-center justify-center mx-auto mb-4 relative overflow-hidden",children:r.jsxs("svg",{className:"h-12 w-12",viewBox:"0 0 48 48",fill:"none",children:[r.jsx("line",{x1:"0",y1:"14",x2:"14",y2:"14",stroke:"#7DD3FC",strokeWidth:"1",opacity:"0.3",children:r.jsx("animate",{attributeName:"opacity",values:"0.1;0.6;0.1",dur:"1.5s",repeatCount:"indefinite"})}),r.jsx("line",{x1:"34",y1:"14",x2:"48",y2:"14",stroke:"#7DD3FC",strokeWidth:"1",opacity:"0.3",children:r.jsx("animate",{attributeName:"opacity",values:"0.1;0.6;0.1",dur:"1.5s",begin:"0.3s",repeatCount:"indefinite"})}),r.jsx("line",{x1:"0",y1:"24",x2:"14",y2:"24",stroke:"#7DD3FC",strokeWidth:"1",opacity:"0.3",children:r.jsx("animate",{attributeName:"opacity",values:"0.1;0.6;0.1",dur:"1.8s",begin:"0.5s",repeatCount:"indefinite"})}),r.jsx("line",{x1:"34",y1:"24",x2:"48",y2:"24",stroke:"#7DD3FC",strokeWidth:"1",opacity:"0.3",children:r.jsx("animate",{attributeName:"opacity",values:"0.1;0.6;0.1",dur:"1.8s",begin:"0.8s",repeatCount:"indefinite"})}),r.jsx("line",{x1:"0",y1:"34",x2:"14",y2:"34",stroke:"#7DD3FC",strokeWidth:"1",opacity:"0.3",children:r.jsx("animate",{attributeName:"opacity",values:"0.1;0.6;0.1",dur:"1.6s",begin:"1s",repeatCount:"indefinite"})}),r.jsx("line",{x1:"34",y1:"34",x2:"48",y2:"34",stroke:"#7DD3FC",strokeWidth:"1",opacity:"0.3",children:r.jsx("animate",{attributeName:"opacity",values:"0.1;0.6;0.1",dur:"1.6s",begin:"0.2s",repeatCount:"indefinite"})}),r.jsx("line",{x1:"14",y1:"0",x2:"14",y2:"14",stroke:"#7DD3FC",strokeWidth:"1",opacity:"0.3",children:r.jsx("animate",{attributeName:"opacity",values:"0.1;0.6;0.1",dur:"2s",begin:"0.4s",repeatCount:"indefinite"})}),r.jsx("line",{x1:"34",y1:"0",x2:"34",y2:"14",stroke:"#7DD3FC",strokeWidth:"1",opacity:"0.3",children:r.jsx("animate",{attributeName:"opacity",values:"0.1;0.6;0.1",dur:"2s",begin:"0.7s",repeatCount:"indefinite"})}),r.jsx("line",{x1:"14",y1:"34",x2:"14",y2:"48",stroke:"#7DD3FC",strokeWidth:"1",opacity:"0.3",children:r.jsx("animate",{attributeName:"opacity",values:"0.1;0.6;0.1",dur:"1.4s",begin:"0.6s",repeatCount:"indefinite"})}),r.jsx("line",{x1:"34",y1:"34",x2:"34",y2:"48",stroke:"#7DD3FC",strokeWidth:"1",opacity:"0.3",children:r.jsx("animate",{attributeName:"opacity",values:"0.1;0.6;0.1",dur:"1.4s",begin:"0.9s",repeatCount:"indefinite"})}),r.jsxs("circle",{r:"1.5",fill:"#7DD3FC",children:[r.jsx("animateMotion",{dur:"1.2s",repeatCount:"indefinite",path:"M0,14 L14,14"}),r.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"1.2s",repeatCount:"indefinite"})]}),r.jsxs("circle",{r:"1.5",fill:"#34D399",children:[r.jsx("animateMotion",{dur:"1s",repeatCount:"indefinite",path:"M48,24 L34,24",begin:"0.4s"}),r.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"1s",begin:"0.4s",repeatCount:"indefinite"})]}),r.jsxs("circle",{r:"1.5",fill:"#7DD3FC",children:[r.jsx("animateMotion",{dur:"1.1s",repeatCount:"indefinite",path:"M14,48 L14,34",begin:"0.7s"}),r.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"1.1s",begin:"0.7s",repeatCount:"indefinite"})]}),r.jsxs("circle",{r:"1.5",fill:"#34D399",children:[r.jsx("animateMotion",{dur:"0.9s",repeatCount:"indefinite",path:"M34,0 L34,14",begin:"0.2s"}),r.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"0.9s",begin:"0.2s",repeatCount:"indefinite"})]}),r.jsx("rect",{x:"14",y:"14",width:"20",height:"20",rx:"3",stroke:"#7DD3FC",strokeWidth:"1.5",fill:"rgba(125,211,252,0.08)",children:r.jsx("animate",{attributeName:"stroke-opacity",values:"0.4;0.9;0.4",dur:"2s",repeatCount:"indefinite"})}),r.jsx("rect",{x:"19",y:"19",width:"10",height:"10",rx:"1.5",fill:"rgba(125,211,252,0.15)",stroke:"#7DD3FC",strokeWidth:"0.8",children:r.jsx("animate",{attributeName:"fill-opacity",values:"0.1;0.4;0.1",dur:"1.5s",repeatCount:"indefinite"})}),[14,24,34].map(c=>[14,34].map(p=>r.jsx("circle",{cx:p,cy:c,r:"1",fill:"#7DD3FC",opacity:"0.5",children:r.jsx("animate",{attributeName:"opacity",values:"0.3;1;0.3",dur:`${1+Math.random()}s`,repeatCount:"indefinite"})},`${p}-${c}`)))]})}),r.jsx("h3",{className:"text-sm font-bold text-white mb-1",children:"SENTINEL Analisa"}),r.jsx("p",{className:"text-[11px] text-white/30 mb-3",children:"IA consulta simultaneamente"}),r.jsxs("div",{className:"rounded-lg bg-navy-dark/60 border border-white/[0.06] p-2.5 mb-3 max-w-[260px] mx-auto",children:[r.jsxs("div",{className:"flex items-center gap-1 mb-1.5",children:[r.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-rose-400/60"}),r.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-amber-400/60"}),r.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-accent-emerald/60"}),r.jsx("span",{className:"text-[8px] text-white/15 ml-1.5 font-mono",children:"sentinel-engine v1.0"})]}),r.jsx("p",{className:"text-[10px] text-sentinel font-mono min-h-[14px]",children:l}),r.jsx("div",{className:"mt-1.5 h-1 rounded-full bg-white/[0.06] overflow-hidden",children:r.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-sentinel to-accent-emerald animate-progress-loop"})})]}),r.jsxs("div",{className:"space-y-3 max-w-[300px] mx-auto",children:[r.jsx("div",{className:"flex justify-center items-center gap-4",children:m.slice(0,4).map(c=>r.jsx("img",{src:c.src,alt:c.alt,title:c.alt,className:`${c.mini||"h-5"} w-auto object-contain brightness-0 invert opacity-40 hover:opacity-80 transition-opacity`},c.alt))}),r.jsx("div",{className:"flex justify-center items-center gap-4",children:m.slice(4).map(c=>r.jsx("img",{src:c.src,alt:c.alt,title:c.alt,className:`${c.mini||"h-5"} w-auto object-contain brightness-0 invert opacity-40 hover:opacity-80 transition-opacity`},c.alt))})]})]}),r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"w-[72px] h-[72px] rounded-2xl bg-accent-emerald/10 border border-accent-emerald/20 flex items-center justify-center mx-auto mb-4",children:r.jsx("svg",{className:"h-7 w-7 text-accent-emerald",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"})})}),r.jsx("h3",{className:"text-sm font-bold text-white mb-1",children:"Melhor Oferta"}),r.jsx("p",{className:"text-[11px] text-white/30 mb-3",children:"Resultado otimizado para voce"}),r.jsxs("div",{className:"space-y-2 max-w-[220px] mx-auto",children:[r.jsxs("div",{className:"p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-left",children:[r.jsx("span",{className:"text-[9px] text-white/25 block",children:"Comparativo"}),r.jsx("span",{className:"text-xs font-bold text-accent-emerald",children:"7 seguradoras analisadas"})]}),r.jsxs("div",{className:"flex gap-1.5",children:[r.jsxs("div",{className:"flex-1 p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] text-left",children:[r.jsx("span",{className:"text-[8px] text-white/25 block",children:"Prazo"}),r.jsx("span",{className:"text-[11px] font-bold text-white",children:"5 dias"})]}),r.jsxs("div",{className:"flex-1 p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] text-left",children:[r.jsx("span",{className:"text-[8px] text-white/25 block",children:"Economia"}),r.jsx("span",{className:"text-[11px] font-bold text-accent-emerald",children:"-30%"})]})]})]})]})]})]}),r.jsx("style",{children:`
              @keyframes flow-scan {
                0% { transform: translateY(0); opacity: 0; }
                20% { opacity: 1; }
                80% { opacity: 1; }
                100% { transform: translateY(100%); opacity: 0; }
              }
              @keyframes travelDot {
                0% { left: -4px; opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { left: calc(100% - 4px); opacity: 0; }
              }
              @keyframes linePulse {
                0%, 100% { opacity: 0.1; }
                50% { opacity: 0.6; }
              }
            `})]}),r.jsxs("section",{className:"card-glass mb-8",children:[r.jsxs("div",{className:"flex items-center gap-3 mb-5",children:[r.jsx("div",{className:"h-10 w-10 rounded-xl bg-cobre/15 border border-cobre/25 flex items-center justify-center flex-shrink-0",children:r.jsx("svg",{className:"w-5 h-5 text-cobre",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"})})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-cobre text-[10px] font-bold uppercase tracking-widest",children:"Fairfield — Consultora Independente"}),r.jsx("h2",{className:"text-xl sm:text-2xl font-black text-white",children:"Nosso compromisso"})]})]}),r.jsxs("p",{className:"text-white/40 text-base sm:text-lg leading-relaxed mb-6",children:["A Fairfield atua como ",r.jsx("strong",{className:"text-white/70",children:"consultoria em Seguro de Credito 100% independente"})," — nao representamos nenhuma seguradora. O ",r.jsx("strong",{className:"text-sentinel",children:"SENTINEL"})," e nossa plataforma proprietaria que combina ",r.jsx("strong",{className:"text-white/70",children:"inteligencia artificial"})," com decadas de experiencia no mercado segurador, garantindo a ",r.jsx("strong",{className:"text-cobre",children:"melhor condicao do mercado"})," para a sua empresa ",r.jsx("strong",{className:"text-white/70",children:"sem que voce tenha que pagar a mais por isso"}),"."]}),r.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[r.jsx(Ei,{title:"Imparcialidade Total",text:"Analisamos todas as propostas sem conflito de interesse.",color:"sentinel"}),r.jsx(Ei,{title:"Analise Tecnica Profunda",text:"Comparamos cobertura, premio, franquias e servicos agregados.",color:"cobre"}),r.jsx(Ei,{title:"Melhor Custo-Beneficio",text:"Garantimos acesso as melhores condicoes do mercado.",color:"emerald"})]})]}),r.jsxs("section",{className:"mb-8",children:[r.jsx("p",{className:"text-center text-[10px] text-white/30 uppercase tracking-widest font-bold mb-6",children:"Seguradoras parceiras conectadas"}),r.jsxs("div",{className:"card-glass px-6 py-8",children:[r.jsx("div",{className:"flex flex-wrap justify-center items-center gap-8 sm:gap-12",children:m.map(c=>r.jsx("div",{className:`flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 ${c.size||"h-10 sm:h-12"}`,children:r.jsx("img",{src:c.src,alt:c.alt,className:`h-full w-auto object-contain ${c.invert?"brightness-0 invert":""}`})},c.alt))}),r.jsx("div",{className:"section-divider mt-7"}),r.jsxs("p",{className:"text-center text-sm text-white/40 mt-5",children:["O ",r.jsx("span",{className:"text-sentinel font-bold",children:"SENTINEL"})," consulta todas simultaneamente e identifica a ",r.jsx("span",{className:"text-cobre font-bold",children:"melhor solucao"}),"."]})]})]}),r.jsxs("section",{className:"text-center mb-6",children:[r.jsxs("button",{onClick:()=>{d(!0),window.scrollTo({top:0,behavior:"smooth"})},className:"group relative inline-flex items-center gap-3 bg-gradient-to-r from-sentinel-dark to-sentinel text-navy-dark px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-sentinel/15 hover:shadow-2xl hover:shadow-sentinel/25 hover:scale-[1.02] transition-all duration-300",children:[r.jsx("svg",{className:"w-5 h-5 group-hover:translate-x-1 transition-transform",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),"Iniciar Cotacao Gratuita"]}),r.jsx("p",{className:"text-white/15 text-xs mt-3",children:"Sem compromisso · Leva menos de 10 minutos"})]})]}),s&&r.jsxs("div",{className:"animate-fadeIn",children:[r.jsxs("div",{className:"flex items-center justify-between mb-6 sm:mb-8",children:[r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx(no,{size:48}),r.jsxs("div",{children:[r.jsx("h2",{className:"text-2xl sm:text-3xl font-black text-white",children:"Escolha o tipo de operacao"}),r.jsx("p",{className:"text-white/35 text-sm",children:"Selecione o formulario adequado ao seu perfil"})]})]}),r.jsxs("button",{onClick:()=>d(!1),className:"text-xs text-white/30 hover:text-sentinel transition-colors flex items-center gap-1",children:[r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),"Voltar"]})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6",children:[r.jsxs(oo,{to:"/cotacao/interno",className:"group card-glass hover:border-sentinel/30 transition-all duration-300 flex flex-col",children:[r.jsx("div",{className:"rounded-xl bg-gradient-to-br from-sentinel/10 to-transparent p-5 mb-5 flex items-center justify-center",children:r.jsx(Hf,{})}),r.jsx("h3",{className:"text-2xl sm:text-3xl font-black text-white mb-2 group-hover:text-sentinel transition-colors",children:"Credito Interno"}),r.jsx("p",{className:"text-base text-cobre font-semibold mb-3",children:"Operacoes Nacionais (Brasil)"}),r.jsx("p",{className:"text-white/40 text-base flex-1 leading-relaxed",children:"Protecao para vendas a prazo no mercado brasileiro. Cobertura contra inadimplencia de compradores nacionais."}),r.jsx("div",{className:"mt-5 pt-4 border-t border-white/[0.06]",children:r.jsxs("ul",{className:"text-sm text-white/30 space-y-1.5",children:[r.jsx("li",{children:"• Valores em Reais (R$)"}),r.jsx("li",{children:"• Ate 20 compradores na amostra"}),r.jsx("li",{children:"• Detalhamento de perdas por faixa"})]})}),r.jsx("div",{className:"mt-5 btn-primary text-center text-base",children:"Iniciar Estudo de Mercado"})]}),r.jsxs(oo,{to:"/cotacao/externo",className:"group card-glass hover:border-cobre/30 transition-all duration-300 flex flex-col",children:[r.jsx("div",{className:"rounded-xl bg-gradient-to-br from-cobre/10 to-transparent p-5 mb-5 flex items-center justify-center",children:r.jsx(Qf,{})}),r.jsx("h3",{className:"text-2xl sm:text-3xl font-black text-white mb-2 group-hover:text-cobre transition-colors",children:"Credito Externo"}),r.jsx("p",{className:"text-base text-cobre font-semibold mb-3",children:"Operacoes de Exportacao"}),r.jsx("p",{className:"text-white/40 text-base flex-1 leading-relaxed",children:"Protecao para vendas internacionais. Cobertura contra inadimplencia de importadores estrangeiros."}),r.jsx("div",{className:"mt-5 pt-4 border-t border-white/[0.06]",children:r.jsxs("ul",{className:"text-sm text-white/30 space-y-1.5",children:[r.jsx("li",{children:"• Valores em Dolares (US$)"}),r.jsx("li",{children:"• Distribuicao por continente/pais"}),r.jsx("li",{children:"• Ate 10 compradores na amostra"})]})}),r.jsx("div",{className:"mt-5 btn-accent text-center text-base",children:"Iniciar Estudo de Mercado"})]})]}),r.jsx("div",{className:"mt-6 text-center",children:r.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-emerald/10 border border-accent-emerald/20",children:[r.jsx("svg",{className:"w-3.5 h-3.5 text-accent-emerald",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),r.jsx("span",{className:"text-sm text-accent-emerald font-medium",children:"100% gratuito e sem compromisso — seus dados sao protegidos pela LGPD"})]})}),r.jsxs("div",{className:"mt-6 card-glass",children:[r.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[r.jsx("div",{className:"h-10 w-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center flex-shrink-0",children:r.jsx("svg",{className:"w-5 h-5 text-white/40",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-cobre text-xs font-bold uppercase tracking-widest",children:"Sigilo Garantido"}),r.jsx("h4",{className:"text-xl font-bold text-white",children:"Compromisso de Confidencialidade"})]})]}),r.jsx("p",{className:"text-white/35 text-base leading-relaxed mb-4",children:"Todas as informacoes sao estritamente confidenciais e protegidas por contrato de sigilo. Seus dados nunca serao compartilhados alem do necessario para a cotacao."}),r.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:["Dados utilizados exclusivamente para estudo de mercado","Sigilo absoluto sobre dados financeiros e comerciais","Nenhuma informacao compartilhada sem autorizacao","Dados pessoais protegidos nos termos da LGPD"].map(c=>r.jsxs("div",{className:"flex items-start gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]",children:[r.jsx("svg",{className:"w-3.5 h-3.5 text-accent-emerald flex-shrink-0 mt-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),r.jsx("p",{className:"text-sm text-white/40 leading-relaxed",children:c})]},c))}),r.jsxs("div",{className:"flex items-center gap-2 text-white/15 text-[10px] mt-4 pt-3 border-t border-white/[0.04]",children:[r.jsx("svg",{className:"w-3 h-3 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Vigencia da proposta: 90 dias · SUSEP 20.2036457.1"]})]})]}),r.jsxs(oo,{to:"/icover",className:"fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-2xl shadow-2xl shadow-sentinel/20 hover:shadow-sentinel/40 hover:scale-105 transition-all duration-300 group",style:{background:"linear-gradient(135deg, #0c4a6e 0%, #0284c7 50%, #0ea5e9 100%)"},children:[r.jsx("svg",{className:"w-5 h-5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})}),r.jsx("span",{className:"text-white text-sm font-semibold hidden sm:inline",children:"iCover"}),r.jsx("span",{className:"absolute -top-1 -right-1 h-3 w-3 rounded-full bg-emerald-400 border-2 border-navy animate-pulse"})]})]})}function Ei({title:s,text:d,color:l}){const m={sentinel:"border-sentinel/15 hover:border-sentinel/30",cobre:"border-cobre/15 hover:border-cobre/30",emerald:"border-accent-emerald/15 hover:border-accent-emerald/30"};return r.jsxs("div",{className:`rounded-xl border bg-white/[0.02] p-5 transition-all ${m[l]}`,children:[r.jsx("h4",{className:"text-base font-bold text-white mb-2",children:s}),r.jsx("p",{className:"text-sm text-white/35 leading-relaxed",children:d})]})}function Yf(s){const d=s.replace(/\D/g,"").slice(0,14);return d.length<=2?d:d.length<=5?`${d.slice(0,2)}.${d.slice(2)}`:d.length<=8?`${d.slice(0,2)}.${d.slice(2,5)}.${d.slice(5)}`:d.length<=12?`${d.slice(0,2)}.${d.slice(2,5)}.${d.slice(5,8)}/${d.slice(8)}`:`${d.slice(0,2)}.${d.slice(2,5)}.${d.slice(5,8)}/${d.slice(8,12)}-${d.slice(12)}`}function Zf(s){const d=s.replace(/\D/g,"");if(d.length!==14||/^(\d)\1{13}$/.test(d))return!1;let l=12,m=d.substring(0,l).split("").map(Number),c=0,p=l-7;for(let g=l;g>=1;g--)c+=m[l-g]*p--,p<2&&(p=9);let f=c%11<2?0:11-c%11;if(f!==parseInt(d.charAt(l)))return!1;l=13,m=d.substring(0,l).split("").map(Number),c=0,p=l-7;for(let g=l;g>=1;g--)c+=m[l-g]*p--,p<2&&(p=9);return f=c%11<2?0:11-c%11,f===parseInt(d.charAt(l))}function pe({label:s,value:d,onChange:l,placeholder:m,required:c,error:p,type:f="text",readOnly:g,className:v="",hint:y}){return r.jsxs("div",{children:[r.jsxs("label",{className:"label-field",children:[s,c&&" *"]}),y&&r.jsx("p",{className:"text-xs text-gray-400 mb-1",children:y}),r.jsx("input",{type:f,className:`input-field ${v}`,value:d,onChange:k=>l(k.target.value),placeholder:m,readOnly:g}),p&&r.jsx("p",{className:"error-msg",children:p})]})}function Xf({label:s,value:d,onChange:l,options:m,required:c,error:p,placeholder:f="Selecione...",hint:g}){return r.jsxs("div",{children:[r.jsxs("label",{className:"label-field",children:[s,c&&" *"]}),g&&r.jsx("p",{className:"text-xs text-gray-400 mb-1",children:g}),r.jsxs("select",{className:"select-field",value:d,onChange:v=>l(v.target.value),children:[r.jsx("option",{value:"",children:f}),m.map(v=>typeof v=="string"?r.jsx("option",{value:v,children:v},v):r.jsx("option",{value:v.value,children:v.label},v.value))]}),p&&r.jsx("p",{className:"error-msg",children:p})]})}function la({columns:s,rows:d,onChange:l,onAdd:m,onRemove:c,maxRows:p,addLabel:f="Adicionar linha",errors:g={}}){const[v,y]=C.useState({});async function k(j,E,_){if(E.type==="cnpj"){const F=Yf(_);l(j,E.key,F);const z=F.replace(/\D/g,"");if(z.length<14){y(L=>{const O={...L};return delete O[`${j}_${E.key}`],O});return}if(!Zf(F)){y(L=>({...L,[`${j}_${E.key}`]:"invalid"}));return}if(!E.cnpjLookupTarget){y(L=>({...L,[`${j}_${E.key}`]:"valid"}));return}y(L=>({...L,[`${j}_${E.key}`]:"loading"}));try{const L=await Nr(`/api/cnpj/${z}`);L.sucesso?(l(j,E.cnpjLookupTarget,L.data.razao_social),y(O=>({...O,[`${j}_${E.key}`]:"found"}))):L.status===404?y(O=>({...O,[`${j}_${E.key}`]:"not_found"})):y(O=>({...O,[`${j}_${E.key}`]:"error"}))}catch{y(L=>({...L,[`${j}_${E.key}`]:"error"}))}}else l(j,E.key,_)}return r.jsxs("div",{className:"overflow-x-auto",children:[r.jsxs("table",{className:"w-full text-sm border border-gray-200 rounded-lg overflow-hidden",children:[r.jsx("thead",{children:r.jsxs("tr",{className:"bg-navy text-white",children:[s.map((j,E)=>r.jsxs("th",{className:"px-3 py-2 text-left text-xs font-semibold whitespace-nowrap",children:[j.label,j.type==="cnpj"&&j.cnpjLookupTarget&&r.jsx("span",{className:"ml-1 text-[9px] text-cobre/80 font-normal normal-case",children:"auto-preenche"})]},E)),r.jsx("th",{className:"px-2 py-2 w-10"})]})}),r.jsx("tbody",{children:d.map((j,E)=>r.jsxs("tr",{className:"border-t border-gray-100 hover:bg-gray-50",children:[s.map((_,F)=>{const z=`${E}_${_.key}`,L=v[z];return r.jsx("td",{className:"px-2 py-1",children:_.readOnly?r.jsx("span",{className:`text-xs px-2 py-1.5 block rounded ${j[_.key]?"bg-navy/5 text-navy font-semibold":"text-gray-400"}`,children:j[_.key]?`${j[_.key]}${_.placeholder==="Auto"?"%":""}`:_.placeholder||"—"}):_.type==="cnpj"?r.jsxs("div",{className:"relative",children:[r.jsx("input",{className:`w-full px-2 py-1.5 text-xs border rounded focus:ring-1 focus:ring-cobre focus:border-cobre outline-none pr-6 ${L==="found"?"border-green-400 bg-green-50":L==="invalid"||L==="not_found"||L==="error"||_.required&&g[`comprador_cnpj_${E}`]?"border-red-400 bg-red-50":"border-gray-200"}`,value:j[_.key]||"",onChange:O=>k(E,_,O.target.value),placeholder:_.placeholder||"00.000.000/0000-00",maxLength:18}),r.jsxs("div",{className:"absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none",children:[L==="loading"&&r.jsxs("svg",{className:"animate-spin h-3.5 w-3.5 text-cobre",viewBox:"0 0 24 24",children:[r.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"}),r.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]}),(L==="found"||L==="valid")&&r.jsx("svg",{className:"h-3.5 w-3.5 text-green-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M5 13l4 4L19 7"})}),(L==="invalid"||L==="not_found"||L==="error")&&r.jsx("svg",{className:"h-3.5 w-3.5 text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})]})]}):r.jsx("input",{className:`w-full px-2 py-1.5 text-xs border rounded focus:ring-1 focus:ring-cobre focus:border-cobre outline-none ${_.required&&g[`comprador_cnpj_${E}`]?"border-red-400 bg-red-50":"border-gray-200"}`,value:j[_.key]||"",onChange:O=>k(E,_,O.target.value),placeholder:_.placeholder||""})},F)}),r.jsx("td",{className:"px-2 py-1",children:c&&d.length>1&&r.jsx("button",{onClick:()=>c(E),className:"text-red-300 hover:text-red-500 text-xl leading-none transition-colors",title:"Remover",children:"×"})})]},E))})]}),m&&(!p||d.length<p)&&r.jsxs("button",{onClick:m,className:"mt-2 text-cobre text-xs font-semibold hover:underline flex items-center gap-1",children:[r.jsx("span",{className:"text-base leading-none",children:"+"})," ",f]})]})}function _u({step:s,totalSteps:d,stepNames:l,onPrev:m,onNext:c,onSubmit:p,loading:f,isReview:g}){return r.jsxs("div",{className:"flex justify-between mt-8 pt-4 border-t border-gray-100",children:[s>0?r.jsx("button",{onClick:m,className:"btn-secondary",children:"Voltar"}):r.jsx("div",{}),s<d-1&&!g&&r.jsx("button",{onClick:c,className:"btn-primary",children:"Próximo"}),s===d-1&&!g&&r.jsx("button",{onClick:()=>p("review"),className:"btn-primary",children:"Revisar Dados"}),g&&r.jsxs("button",{onClick:()=>p("send"),disabled:f,className:"btn-primary flex items-center gap-2",children:[f&&r.jsxs("svg",{className:"animate-spin h-5 w-5",viewBox:"0 0 24 24",children:[r.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"}),r.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]}),f?"Enviando...":"Enviar Solicitação de Cotação"]})]})}function Fu({step:s,steps:d}){const l=Math.round((s+1)/d.length*100);return r.jsxs("div",{className:"mb-6",children:[r.jsxs("div",{className:"flex items-center justify-between mb-4 bg-gradient-to-r from-cobre/10 to-cobre/5 border border-cobre/20 rounded-xl px-4 py-2.5",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("svg",{className:"w-4 h-4 text-cobre flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),r.jsxs("span",{className:"text-xs text-gray-700",children:["Dados completos geram propostas até ",r.jsx("strong",{className:"text-cobre",children:"30% mais competitivas"})]})]}),r.jsxs("span",{className:"text-xs font-bold text-cobre flex-shrink-0 ml-3",children:[l,"% concluído"]})]}),r.jsxs("div",{className:"relative flex items-start justify-between",children:[r.jsx("div",{className:"absolute top-4 left-0 right-0 h-0.5 bg-gray-200 z-0",style:{marginLeft:`${100/d.length/2}%`,marginRight:`${100/d.length/2}%`},children:r.jsx("div",{className:"h-full bg-gradient-to-r from-cobre to-navy transition-all duration-700 ease-out",style:{width:`${s===0?0:s/(d.length-1)*100}%`}})}),d.map((m,c)=>{const p=c<s,f=c===s;return r.jsxs("div",{className:"relative z-10 flex flex-col items-center",style:{width:`${100/d.length}%`},children:[r.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${p?"bg-cobre border-cobre":f?"bg-navy border-navy ring-4 ring-navy/20":"bg-white border-gray-300"}`,children:p?r.jsx("svg",{className:"w-4 h-4 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M5 13l4 4L19 7"})}):r.jsx("span",{className:`text-xs font-bold ${f?"text-white":"text-gray-400"}`,children:c+1})}),r.jsx("span",{className:`mt-1.5 text-[10px] font-semibold text-center leading-tight hidden sm:block ${p?"text-cobre":f?"text-navy":"text-gray-400"}`,children:m})]},c)})]}),r.jsxs("p",{className:"sm:hidden text-center text-xs font-semibold text-navy mt-3",children:["Etapa ",s+1," de ",d.length," — ",r.jsx("span",{className:"text-cobre",children:d[s]})]})]})}function eg(){const s=["#B87333","#7DD3FC","#4ade80","#f59e0b","#ffffff","#fbbf24","#a78bfa"],d=Array.from({length:90},(l,m)=>{const c=m*360/90*Math.PI/180,p=22+m%7*6,f=Math.cos(c)*p,g=Math.sin(c)*p;return{id:m,color:s[m%s.length],delay:`${m%6*.04}s`,duration:`${5.5+m%5*.5}s`,size:`${7+m%4*2}px`,round:m%4===0,rect:m%5===1,tx:`${f.toFixed(1)}vw`,ty:`${g.toFixed(1)}vh`,tx2:`${(f*.7).toFixed(1)}vw`,ty2:`${(g*.4+55).toFixed(1)}vh`}});return r.jsxs("div",{style:{position:"fixed",inset:0,pointerEvents:"none",overflow:"hidden",zIndex:9999},children:[r.jsx("style",{children:`
        @keyframes confettiBurst {
          0%   { transform: translate(0,0) rotate(0deg) scale(0); opacity: 1; }
          10%  { transform: translate(var(--tx), var(--ty)) rotate(220deg) scale(1); opacity: 1; }
          75%  { opacity: 1; }
          100% { transform: translate(var(--tx2), var(--ty2)) rotate(900deg) scale(0.15); opacity: 0; }
        }
      `}),d.map(l=>r.jsx("div",{style:{position:"absolute",left:"50%",top:"38%",width:l.size,height:l.rect?`${parseInt(l.size)*2}px`:l.size,backgroundColor:l.color,borderRadius:l.round?"50%":"3px","--tx":l.tx,"--ty":l.ty,"--tx2":l.tx2,"--ty2":l.ty2,animation:`confettiBurst ${l.duration} ${l.delay} cubic-bezier(0.22, 0.61, 0.36, 1) forwards`}},l.id))]})}function Tu({result:s,onReset:d,tipo:l}){const[m,c]=C.useState(!0);C.useEffect(()=>{const f=setTimeout(()=>c(!1),8e3);return()=>clearTimeout(f)},[]);const p=[{icon:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"}),label:"Análise simultânea",text:"7 seguradoras recebendo seus dados agora — Coface, Atradius, AVLA, Allianz Trade, AIG, CESCE e CHUBB"},{icon:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}),label:"Negociação técnica",text:"Nossa equipe negocia as melhores condições de cobertura, prêmio e serviço para o seu perfil"},{icon:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"}),label:"Comparativo exclusivo",text:"Você recebe o estudo completo com recomendação técnica da Fairfield para a melhor escolha"}];return r.jsxs("div",{className:"max-w-2xl mx-auto px-4 py-10 relative",children:[r.jsx("style",{children:`
        @keyframes successEntry {
          0%   { opacity: 0; transform: scale(0.88) translateY(24px); }
          60%  { transform: scale(1.02) translateY(-4px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes checkPop {
          0%   { transform: scale(0) rotate(-15deg); }
          60%  { transform: scale(1.15) rotate(5deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        @keyframes ringPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50%       { transform: scale(1.18); opacity: 0.2; }
        }
      `}),m&&r.jsx(eg,{}),r.jsxs("div",{className:"rounded-2xl overflow-hidden shadow-2xl border border-cobre/20",style:{animation:"successEntry 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards"},children:[r.jsxs("div",{className:"bg-gradient-to-br from-navy via-[#0d1f3c] to-[#0A1628] px-6 pt-10 pb-8 text-center relative overflow-hidden",children:[r.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-white/5"}),r.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-40 h-40 rounded-full border border-cobre/10"}),r.jsx("div",{className:"relative inline-flex mb-5",children:r.jsx("div",{className:"w-24 h-24 rounded-full bg-green-400/10 flex items-center justify-center",style:{animation:"ringPulse 2s ease-in-out infinite"},children:r.jsx("div",{className:"w-16 h-16 rounded-full bg-green-400/20 flex items-center justify-center",style:{animation:"checkPop 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.2s both"},children:r.jsx("svg",{className:"w-9 h-9 text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M5 13l4 4L19 7"})})})})}),r.jsx("p",{className:"text-[10px] font-bold text-cobre uppercase tracking-widest mb-2",children:"Solicitação Enviada com Sucesso"}),r.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight",children:"Seu estudo está em análise!"}),r.jsxs("p",{className:"text-white/50 text-sm mb-6",children:["Crédito ",l==="externo"?"Exportação — Valores em US$":"Interno — Operações Nacionais"]}),r.jsxs("div",{className:"inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-xl px-5 py-2.5",children:[r.jsx("svg",{className:"w-5 h-5 text-cobre flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5"})}),r.jsxs("span",{className:"text-sm text-white",children:[r.jsxs("strong",{className:"text-cobre",children:[(s==null?void 0:s.cotacoesGeradas)||7," seguradoras"]})," recebendo seus dados agora"]})]})]}),r.jsxs("div",{className:"bg-white px-6 py-6 space-y-4",children:[r.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:p.map((f,g)=>r.jsxs("div",{className:"bg-gray-50 border border-gray-100 rounded-xl p-3 flex flex-col gap-2",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("svg",{className:"w-5 h-5 text-cobre flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.icon}),r.jsx("span",{className:"text-xs font-bold text-navy",children:f.label})]}),r.jsx("p",{className:"text-xs text-gray-500 leading-relaxed",children:f.text})]},g))}),r.jsxs("div",{className:"flex items-center gap-3 bg-cobre/5 border border-cobre/15 rounded-xl px-4 py-3",children:[r.jsx("div",{className:"w-9 h-9 bg-cobre/10 rounded-lg flex items-center justify-center flex-shrink-0",children:r.jsx("svg",{className:"w-5 h-5 text-cobre",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-xs font-bold text-navy",children:"Prazo de resposta"}),r.jsxs("p",{className:"text-sm text-gray-600",children:["Você receberá o comparativo completo em até ",r.jsx("strong",{className:"text-cobre",children:"5 dias úteis"})]})]})]}),r.jsxs("div",{className:"flex items-start gap-2 bg-green-50 border border-green-200 rounded-xl px-4 py-3",children:[r.jsx("svg",{className:"w-4 h-4 text-green-600 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),r.jsxs("p",{className:"text-sm text-green-700",children:[r.jsx("strong",{children:"Estudo totalmente gratuito."})," Um e-mail de confirmação foi enviado para você."]})]}),r.jsx("button",{onClick:d,className:"btn-primary w-full mt-2",children:"Nova Cotação"})]})]})]})}function Ou({value:s,onChange:d,onResult:l,error:m,label:c="CNPJ"}){const[p,f]=C.useState(!1),[g,v]=C.useState(null),[y,k]=C.useState(null);function j(F){const z=F.replace(/\D/g,"").slice(0,14);return z.length<=2?z:z.length<=5?`${z.slice(0,2)}.${z.slice(2)}`:z.length<=8?`${z.slice(0,2)}.${z.slice(2,5)}.${z.slice(5)}`:z.length<=12?`${z.slice(0,2)}.${z.slice(2,5)}.${z.slice(5,8)}/${z.slice(8)}`:`${z.slice(0,2)}.${z.slice(2,5)}.${z.slice(5,8)}/${z.slice(8,12)}-${z.slice(12)}`}function E(F){const z=F.replace(/\D/g,"");if(z.length!==14||/^(\d)\1{13}$/.test(z))return!1;let L=12,O=z.substring(0,L).split("").map(Number),q=0,D=L-7;for(let X=L;X>=1;X--)q+=O[L-X]*D--,D<2&&(D=9);let $=q%11<2?0:11-q%11;if($!==parseInt(z.charAt(L)))return!1;L=13,O=z.substring(0,L).split("").map(Number),q=0,D=L-7;for(let X=L;X>=1;X--)q+=O[L-X]*D--,D<2&&(D=9);return $=q%11<2?0:11-q%11,$===parseInt(z.charAt(L))}async function _(F){const z=j(F);d(z),v(null),k(null);const L=z.replace(/\D/g,"");if(L.length===14){if(!E(z)){v("invalid");return}f(!0);try{const O=await Nr(`/api/cnpj/${L}`);O.sucesso?(v("found"),l&&l(O.data)):O.status===429?(v("error"),k("⚠ Muitas consultas. Aguarde alguns segundos e tente novamente.")):O.status===404?(v("not_found"),k("CNPJ não encontrado na Receita Federal")):(v("error"),k("⚠ Não foi possível consultar agora. Continue preenchendo manualmente."))}catch{v("error"),k("⚠ Servidor indisponível. Continue preenchendo manualmente.")}finally{f(!1)}}}return r.jsxs("div",{children:[r.jsxs("label",{className:"label-field",children:[c," *"]}),r.jsxs("div",{className:"relative",children:[r.jsx("input",{className:`input-field pr-12 ${g==="found"?"border-green-500 ring-2 ring-green-200":g==="invalid"||g==="not_found"||g==="error"?"border-red-500 ring-2 ring-red-200":""}`,value:s,onChange:F=>_(F.target.value),placeholder:"00.000.000/0000-00",maxLength:18}),r.jsxs("div",{className:"absolute right-3 top-1/2 -translate-y-1/2",children:[p&&r.jsxs("svg",{className:"animate-spin h-5 w-5 text-cobre",viewBox:"0 0 24 24",children:[r.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"}),r.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]}),g==="found"&&r.jsx("svg",{className:"h-5 w-5 text-green-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),(g==="not_found"||g==="invalid"||g==="error")&&r.jsx("svg",{className:"h-5 w-5 text-red-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})]})]}),p&&r.jsx("p",{className:"text-xs text-cobre mt-1",children:"Consultando Receita Federal..."}),g==="found"&&r.jsx("p",{className:"text-xs text-green-600 mt-1",children:"✓ Empresa verificada na Receita Federal"}),g==="invalid"&&r.jsx("p",{className:"text-xs text-red-500 mt-1",children:"CNPJ inválido — verifique os números"}),(g==="not_found"||g==="error")&&y&&r.jsx("p",{className:`text-xs mt-1 ${g==="error"?"text-amber-600":"text-red-500"}`,children:y}),m&&r.jsx("p",{className:"error-msg",children:m})]})}function Oi(s){const d=s.replace(/\D/g,"").slice(0,11);return d.length<=2?`(${d}`:d.length<=7?`(${d.slice(0,2)}) ${d.slice(2)}`:`(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}`}function ag({onComplete:s}){const{generateCode:d,verifyCode:l}=Lr(),[m,c]=C.useState("form"),[p,f]=C.useState(!1),[g,v]=C.useState(!1),[y,k]=C.useState({nome:"",telefone:"",email:"",empresa:""}),[j,E]=C.useState(""),[_,F]=C.useState({}),[z,L]=C.useState(null);function O(J,H){k(ie=>({...ie,[J]:H})),F(ie=>{const ue={...ie};return delete ue[J],ue})}function q(){const J={};return y.nome.trim()||(J.nome="Informe seu nome"),y.empresa.trim()||(J.empresa="Informe a empresa"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(y.email)||(J.email="E-mail invalido"),y.telefone.replace(/\D/g,"").length<10&&(J.telefone="Telefone invalido"),F(J),Object.keys(J).length===0}async function D(J){if(J.preventDefault(),!!q()){f(!0);try{const H=await d(y.email,y.nome,y.empresa,y.telefone);H.devMode?(L({code:H.devCode,preview:H.devPreview}),ke.success("Modo dev — codigo visivel abaixo")):(L(null),ke.success("Codigo enviado! Verifique seu e-mail.")),c("verify")}catch(H){ke.error(H.message||"Erro ao enviar codigo.")}finally{f(!1)}}}async function $(J){if(J.preventDefault(),j.length!==6){ke.error("Digite o codigo de 6 digitos");return}f(!0);try{(await l(y.email,j)).success?(ke.success("Verificado com sucesso!"),s&&s()):ke.error("Codigo invalido ou expirado.")}catch{ke.error("Erro ao verificar codigo.")}finally{f(!1)}}async function X(){v(!0);try{const J=await d(y.email,y.nome,y.empresa,y.telefone);J.devMode&&L({code:J.devCode,preview:J.devPreview}),ke.success("Novo codigo enviado!")}catch(J){ke.error(J.message||"Erro ao reenviar codigo.")}finally{v(!1)}}return r.jsxs("div",{className:"max-w-lg mx-auto px-4 py-10 sm:py-16 animate-fadeIn",children:[r.jsxs("div",{className:"text-center mb-8 flex flex-col items-center",children:[r.jsx("div",{className:"mb-4",children:r.jsx(no,{size:72})}),r.jsx("h1",{className:"text-2xl sm:text-3xl font-black text-sentinel tracking-tight",children:"SENTINEL"}),r.jsx("p",{className:"text-navy/40 text-sm mt-2",children:"Preencha seus dados para iniciar a cotação de Seguro de Crédito"})]}),r.jsx("div",{className:"card-glass",children:m==="form"?r.jsxs("form",{onSubmit:D,className:"space-y-4",children:[r.jsxs("h3",{className:"text-base font-bold text-white border-b border-white/[0.06] pb-3 flex items-center gap-2",children:[r.jsx("svg",{className:"w-4 h-4 text-sentinel",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),"Identificacao"]}),r.jsxs("div",{children:[r.jsx("label",{className:"label-field",children:"Nome Completo *"}),r.jsx("input",{className:`input-field ${_.nome?"border-rose-400/50 ring-2 ring-rose-400/20":""}`,value:y.nome,onChange:J=>O("nome",J.target.value),placeholder:"Seu nome completo"}),_.nome&&r.jsx("p",{className:"error-msg",children:_.nome})]}),r.jsxs("div",{children:[r.jsx("label",{className:"label-field",children:"Nome da Empresa *"}),r.jsx("input",{className:`input-field ${_.empresa?"border-rose-400/50 ring-2 ring-rose-400/20":""}`,value:y.empresa,onChange:J=>O("empresa",J.target.value),placeholder:"Razao social ou nome fantasia"}),_.empresa&&r.jsx("p",{className:"error-msg",children:_.empresa})]}),r.jsxs("div",{children:[r.jsx("label",{className:"label-field",children:"E-mail Corporativo *"}),r.jsx("input",{type:"email",className:`input-field ${_.email?"border-rose-400/50 ring-2 ring-rose-400/20":""}`,value:y.email,onChange:J=>O("email",J.target.value),placeholder:"seu@empresa.com.br"}),_.email&&r.jsx("p",{className:"error-msg",children:_.email})]}),r.jsxs("div",{children:[r.jsx("label",{className:"label-field",children:"Telefone *"}),r.jsx("input",{className:`input-field ${_.telefone?"border-rose-400/50 ring-2 ring-rose-400/20":""}`,value:y.telefone,onChange:J=>O("telefone",Oi(J.target.value)),placeholder:"(00) 00000-0000",maxLength:15}),_.telefone&&r.jsx("p",{className:"error-msg",children:_.telefone})]}),r.jsxs("button",{type:"submit",disabled:p,className:"btn-primary w-full flex items-center justify-center gap-2",children:[p&&r.jsxs("svg",{className:"animate-spin h-5 w-5",viewBox:"0 0 24 24",children:[r.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"}),r.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]}),p?"Enviando codigo...":"Receber Codigo de Acesso"]}),r.jsx("p",{className:"text-[10px] text-white/20 text-center mt-3",children:"Enviaremos um codigo de verificacao para o e-mail informado. Seus dados sao protegidos pela LGPD."})]}):r.jsxs("form",{onSubmit:$,className:"space-y-5",children:[r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"w-14 h-14 rounded-2xl bg-sentinel/10 border border-sentinel/20 flex items-center justify-center mx-auto mb-4",children:r.jsx("svg",{className:"w-7 h-7 text-sentinel",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),r.jsx("h3",{className:"text-lg font-bold text-white",children:"Verifique seu E-mail"}),r.jsxs("p",{className:"text-sm text-white/35 mt-1",children:["Enviamos um codigo de 6 digitos para ",r.jsx("strong",{className:"text-sentinel",children:y.email})]})]}),z?r.jsxs("div",{className:"rounded-xl overflow-hidden border border-amber-500/30",children:[r.jsx("div",{className:"bg-amber-500/15 px-4 py-2 flex items-center gap-2",children:r.jsx("span",{className:"text-amber-400 font-bold text-xs",children:"⚠ MODO DESENVOLVIMENTO"})}),r.jsxs("div",{className:"bg-amber-500/5 px-4 py-3",children:[r.jsx("p",{className:"text-xs text-amber-300/60 mb-2",children:"SMTP nao configurado — codigo de teste:"}),r.jsx("div",{className:"bg-navy-dark border border-amber-500/20 rounded-lg p-3 text-center",children:r.jsx("p",{className:"text-3xl font-mono font-bold text-amber-400 tracking-[0.4em]",children:z.code})}),z.preview&&r.jsx("a",{href:z.preview,target:"_blank",rel:"noopener noreferrer",className:"block text-center text-xs text-sentinel underline mt-2",children:"Ver email no Ethereal"})]})]}):r.jsxs("div",{className:"rounded-xl bg-accent-emerald/10 border border-accent-emerald/20 px-4 py-3",children:[r.jsxs("p",{className:"text-sm text-accent-emerald font-semibold",children:["✓ Codigo enviado para ",r.jsx("strong",{children:y.email})]}),r.jsx("p",{className:"text-xs text-white/25 mt-1",children:"Verifique sua caixa de entrada. Valido por 15 minutos."})]}),r.jsxs("div",{children:[r.jsx("label",{className:"label-field text-center block",children:"Codigo de Verificacao"}),r.jsx("input",{className:"input-field text-center text-2xl tracking-[0.5em] font-mono font-bold",value:j,onChange:J=>E(J.target.value.replace(/\D/g,"").slice(0,6)),placeholder:"000000",maxLength:6,autoFocus:!0})]}),r.jsxs("button",{type:"submit",disabled:p,className:"btn-primary w-full flex items-center justify-center gap-2",children:[p&&r.jsxs("svg",{className:"animate-spin h-5 w-5",viewBox:"0 0 24 24",children:[r.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"}),r.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]}),p?"Verificando...":"Verificar e Acessar"]}),r.jsxs("div",{className:"flex items-center justify-between text-xs",children:[r.jsx("button",{type:"button",onClick:X,disabled:g,className:"text-sentinel hover:underline font-medium disabled:opacity-50",children:g?"Reenviando...":"Reenviar codigo"}),r.jsx("button",{type:"button",onClick:()=>{c("form"),E("")},className:"text-white/25 hover:text-white/50",children:"Voltar"})]})]})}),r.jsx("div",{className:"mt-6 text-center",children:r.jsxs("div",{className:"inline-flex items-center gap-2 text-xs text-white/20",children:[r.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),"Ambiente seguro — Fairfield SUSEP 20.2036457.1"]})})]})}const rg=[{title:"TERMO DE CONFIDENCIALIDADE E ACEITE EXPRESSO",content:`A FAIRFIELD PROTECAO E INTELIGENCIA FINANCEIRA LTDA, inscrita no CNPJ sob o n. 13.381.310/0001-45, com sede na cidade de Blumenau/SC, devidamente registrada na SUSEP sob o n. 20.2036457.1, doravante denominada "Fairfield", apresenta ao solicitante, doravante denominado "Cliente", o presente Termo de Confidencialidade como condicao para o inicio do processo de estudo de mercado e cotacao de Seguro de Credito por meio da plataforma SENTINEL.

Ao rolar este documento ate o final e clicar em "De Acordo", o Cliente declara expressamente que leu, compreendeu e concorda com todos os termos e condicoes aqui estabelecidos, conferindo plena validade a este aceite eletronico nos termos do Art. 10 da MP n. 2.200-2/2001 e do Marco Civil da Internet (Lei n. 12.965/2014).`},{title:"1. Finalidade e Escopo",content:`1.1 O presente Termo tem por finalidade estabelecer as obrigacoes da Fairfield quanto ao sigilo, protecao e uso restrito das informacoes fornecidas pelo Cliente no contexto do estudo de mercado para contratacao de Apolice de Seguro de Credito.

1.2 As informacoes coletadas destinam-se exclusivamente a:
(i) Realizacao do estudo de mercado de Seguro de Credito solicitado pelo Cliente;
(ii) Subsidiar a analise tecnica de risco junto as seguradoras parceiras para fins de cotacao;
(iii) Elaborar a comparacao de propostas e a recomendacao tecnica da Fairfield;
(iv) Cumprir eventuais exigencias regulatorias e de subscricao impostas pelas seguradoras.

1.3 Nenhuma informacao fornecida sera utilizada para qualquer finalidade distinta das previstas neste Termo sem o consentimento expresso e previo do Cliente.`},{title:"2. Informacoes Confidenciais",content:`2.1 Sao consideradas "Informacoes Confidenciais" todos os dados e documentos fornecidos pelo Cliente a Fairfield por meio da plataforma SENTINEL ou por qualquer outro meio, incluindo, sem limitacao:
(i) Dados financeiros: faturamento, receita, resultado, estrutura de custos, inadimplencia, perdas e vencidos;
(ii) Dados comerciais: carteira de clientes, lista de compradores, condicoes de venda, prazos e volumes;
(iii) Dados operacionais: processos internos, fornecedores, contratos, estrutura de distribuicao;
(iv) Dados societarios: composicao acionaria, historico e estrutura organizacional;
(v) Dados pessoais: nome, CPF, cargo, e-mail, telefone e quaisquer outros dados de identificacao dos representantes.

2.2 Todas as informacoes transmitidas pelo Cliente, independentemente do formato — escrito, verbal, eletronico ou qualquer outro meio — sao tratadas como confidenciais pela Fairfield.`},{title:"3. Compromissos da Fairfield",content:`3.1 A Fairfield compromete-se a:
(i) Manter em estrito e absoluto sigilo todas as Informacoes Confidenciais recebidas do Cliente;
(ii) Utilizar as informacoes exclusivamente para a finalidade descrita na Clausula 1 deste Termo;
(iii) Nao divulgar, ceder, vender, alugar ou compartilhar as informacoes com terceiros, salvo nas hipoteses expressamente previstas neste Termo;
(iv) Adotar medidas tecnicas e organizacionais adequadas para proteger as informacoes contra acesso nao autorizado, perda, destruicao ou vazamento;
(v) Notificar o Cliente em caso de incidente de seguranca que possa comprometer a confidencialidade de suas informacoes.

3.2 O acesso as Informacoes Confidenciais sera restrito aos profissionais da Fairfield diretamente envolvidos no processo de cotacao e analise tecnica, os quais estao sujeitos a obrigacoes de sigilo equivalentes as deste Termo.

3.3 As seguradoras parceiras receberao apenas as informacoes estritamente necessarias para a elaboracao de propostas de Seguro de Credito, sendo expressamente vedado o compartilhamento de dados para qualquer outro fim.`},{title:"4. Protecao de Dados Pessoais — LGPD",content:`4.1 O tratamento dos dados pessoais do Cliente e de seus representantes e realizado em conformidade com a Lei Geral de Protecao de Dados Pessoais (Lei n. 13.709/2018 — LGPD).

4.2 A base legal para o tratamento e a execucao do contrato de prestacao de servicos de consultoria em seguros, conforme Art. 7o, inciso V da LGPD, e o legitimo interesse da Fairfield na realizacao do estudo de mercado solicitado.

4.3 O Cliente, na qualidade de titular dos dados pessoais, tem assegurados os seguintes direitos:
(i) Confirmacao e acesso aos dados tratados;
(ii) Correcao de dados incompletos, inexatos ou desatualizados;
(iii) Anonimizacao, bloqueio ou eliminacao de dados desnecessarios ou excessivos;
(iv) Portabilidade dos dados a outro prestador de servicos;
(v) Eliminacao dos dados pessoais tratados com consentimento;
(vi) Revogacao do consentimento a qualquer momento.

4.4 Para exercer seus direitos ou obter informacoes adicionais sobre o tratamento de seus dados, o Cliente pode entrar em contato pelo e-mail: privacidade@fairfield.com.br.`},{title:"5. Compartilhamento com Seguradoras",content:`5.1 Para a realizacao do estudo de mercado, a Fairfield encaminhara as Informacoes Confidenciais pertinentes as seguintes seguradoras parceiras, exclusivamente para fins de subscricao e elaboracao de proposta de Seguro de Credito: Coface, Atradius, AVLA, Allianz Trade, AIG, CESCE e Chubb.

5.2 Cada seguradora recebera apenas as informacoes necessarias para a analise de risco e formulacao de proposta, estando sujeitas as suas proprias politicas de privacidade e sigilo profissional regulamentadas pela SUSEP.

5.3 O Cliente, ao aceitar este Termo, autoriza expressamente a Fairfield a compartilhar suas informacoes com as seguradoras listadas, exclusivamente para a finalidade descrita nesta clausula.

5.4 E vedado as seguradoras utilizar as informacoes recebidas para qualquer finalidade que nao seja a cotacao solicitada pela Fairfield.`},{title:"6. Prazo de Vigencia e Retencao",content:`6.1 As obrigacoes de confidencialidade estabelecidas neste Termo entram em vigor na data do aceite expresso pelo Cliente e permanecerao validas por 2 (dois) anos apos o encerramento do processo de cotacao, ou ate que um contrato formal seja celebrado entre as Partes, prevalecendo o que ocorrer por ultimo.

6.2 O estudo de mercado elaborado pela Fairfield com base nas informacoes fornecidas tera validade de 90 (noventa) dias a contar da data de entrega.

6.3 Apos o encerramento do relacionamento comercial, a Fairfield reterá as informacoes pelo prazo minimo exigido pela legislacao aplicavel e, findo esse prazo, procederá a eliminacao segura dos dados, salvo disposicao legal em contrario.`},{title:"7. Independencia e Imparcialidade",content:`7.1 A Fairfield atua exclusivamente como consultora independente de seguros, sem vinculo de exclusividade com qualquer seguradora.

7.2 A remuneracao da Fairfield e integralmente suportada pela seguradora escolhida pelo Cliente ao final do processo, nao gerando qualquer custo ao Cliente pela realizacao do estudo de mercado.

7.3 A recomendacao tecnica da Fairfield sera fundamentada exclusivamente na analise comparativa das propostas recebidas, priorizando o melhor custo-beneficio para o Cliente, sem influencia de qualquer incentivo comercial por parte das seguradoras.

7.4 A aceitacao deste Termo nao implica obrigacao de contratacao de qualquer produto de seguro pelo Cliente.`},{title:"8. Disposicoes Gerais",content:`8.1 Este Termo constitui o instrumento integral que rege as obrigacoes de confidencialidade entre a Fairfield e o Cliente no ambito do estudo de mercado de Seguro de Credito.

8.2 O aceite eletronico registrado na plataforma SENTINEL tem plena validade juridica, sendo equiparado a assinatura eletronica nos termos da legislacao vigente.

8.3 A invalidade ou ineficacia de qualquer clausula nao afetara as demais disposicoes deste Termo.

8.4 A tolerancia da Fairfield quanto a eventuais descumprimentos nao constituira renuncia aos direitos aqui estabelecidos.

8.5 Este Termo e regido pelas leis da Republica Federativa do Brasil.

8.6 Para dirimir quaisquer controversias decorrentes deste Termo, fica eleito o foro da Comarca de Blumenau/SC, com renancia a qualquer outro, por mais privilegiado que seja.`}];function og(){var v;const{user:s,acceptNda:d}=Lr(),[l,m]=C.useState(!1),c=C.useRef(null),[p,f]=C.useState(!1);C.useEffect(()=>{const y=c.current;if(!y)return;function k(){const{scrollTop:j,scrollHeight:E,clientHeight:_}=y;j+_>=E-30&&m(!0)}return y.addEventListener("scroll",k),()=>y.removeEventListener("scroll",k)},[]);function g(){f(!0),setTimeout(()=>{d()},800)}return r.jsxs("div",{className:"max-w-3xl mx-auto px-3 sm:px-4 py-6 sm:py-10 animate-fadeIn",children:[r.jsxs("div",{className:"text-center mb-6",children:[r.jsxs("div",{className:"flex items-center justify-center gap-3 mb-3",children:[r.jsx(no,{size:48}),r.jsxs("div",{className:"text-left",children:[r.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-navy",children:"Termo de Confidencialidade"}),r.jsx("p",{className:"text-xs text-navy/40",children:"SENTINEL by Fairfield"})]})]}),r.jsx("p",{className:"text-sm text-navy/50 max-w-xl mx-auto",children:"Antes de prosseguir, leia integralmente o Termo de Confidencialidade abaixo. Ao finalizar a leitura, o botao de aceite sera habilitado."})]}),r.jsx("div",{className:"flex items-center justify-center mb-4",children:r.jsxs("div",{className:"inline-flex items-center gap-2 bg-navy/[0.04] border border-navy/[0.1] rounded-full px-4 py-2 text-xs",children:[r.jsx("div",{className:"h-5 w-5 rounded-full bg-sentinel/15 border border-sentinel/25 flex items-center justify-center",children:r.jsx("span",{className:"text-[9px] font-bold text-sentinel",children:(v=s==null?void 0:s.nome)==null?void 0:v.charAt(0)})}),r.jsx("span",{className:"text-navy/70 font-medium",children:s==null?void 0:s.nome}),r.jsx("span",{className:"text-navy/15",children:"|"}),r.jsx("span",{className:"text-navy/40",children:s==null?void 0:s.empresa})]})}),r.jsxs("div",{className:"rounded-2xl border border-navy/[0.08] bg-white shadow-lg shadow-navy/5 p-0 overflow-hidden",children:[r.jsxs("div",{className:"bg-navy/[0.03] px-4 sm:px-6 py-3 flex items-center justify-between border-b border-navy/[0.08]",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("svg",{className:"w-4 h-4 text-sentinel",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),r.jsx("span",{className:"text-navy/50 text-xs font-medium",children:"Termo de Confidencialidade — Fairfield"})]}),l?r.jsxs("span",{className:"text-accent-emerald text-[10px] font-bold flex items-center gap-1",children:[r.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),"Leitura completa"]}):r.jsxs("span",{className:"text-cobre text-[10px] font-bold flex items-center gap-1 animate-pulse",children:[r.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})}),"Role ate o final"]})]}),r.jsx("div",{className:"h-[2px] bg-navy/[0.04]",children:r.jsx(tg,{scrollRef:c})}),r.jsxs("div",{ref:c,className:"max-h-[55vh] sm:max-h-[60vh] overflow-y-auto px-4 sm:px-8 py-5 sm:py-6 space-y-5 text-sm leading-relaxed text-navy/60 scroll-smooth",children:[rg.map((y,k)=>r.jsxs("div",{children:[r.jsx("h3",{className:`font-bold ${k===0?"text-lg text-navy text-center mb-4":"text-sentinel-dark text-sm mb-2"}`,children:y.title}),y.content.split(`
`).map((j,E)=>r.jsx("p",{className:`${j.startsWith("(")?"ml-4":""} mb-2 text-[13px] sm:text-sm text-navy/50`,children:j},E))]},k)),r.jsxs("div",{className:"border-t border-navy/[0.08] pt-4 mt-6",children:[r.jsxs("p",{className:"text-[11px] text-navy/30 text-center",children:[r.jsx("strong",{className:"text-navy/50",children:"Responsavel:"})," Fairfield Protecao e Inteligencia Financeira Ltda — CNPJ 13.381.310/0001-45"]}),r.jsxs("p",{className:"text-[11px] text-navy/30 text-center mt-1",children:[r.jsx("strong",{className:"text-navy/50",children:"Vigencia:"})," 90 dias · ",r.jsx("strong",{className:"text-navy/50",children:"Sigilo:"})," 2 anos · SUSEP 20.2036457.1"]})]}),r.jsx("div",{className:"text-center py-4",children:r.jsxs("div",{className:"inline-flex items-center gap-2 bg-accent-emerald/10 border border-accent-emerald/20 rounded-full px-4 py-2",children:[r.jsx("svg",{className:"w-3.5 h-3.5 text-accent-emerald",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),r.jsx("span",{className:"text-[11px] text-accent-emerald font-medium",children:"Fim do documento"})]})})]})]}),r.jsx("div",{className:"mt-5 sm:mt-6",children:l?r.jsxs("div",{className:"animate-fadeIn",children:[r.jsx("div",{className:"rounded-xl bg-accent-emerald/10 border border-accent-emerald/20 p-4 mb-4",children:r.jsxs("div",{className:"flex items-start gap-3",children:[r.jsx("svg",{className:"w-5 h-5 text-accent-emerald flex-shrink-0 mt-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-sm text-accent-emerald font-medium",children:'Ao clicar em "De Acordo", voce declara que leu e compreendeu este Termo e autoriza a Fairfield a utilizar suas informacoes para o estudo de mercado.'}),r.jsx("p",{className:"text-[11px] text-navy/30 mt-1",children:"Aceite eletronico registrado com data, hora e identificacao."})]})]})}),r.jsx("button",{onClick:g,disabled:p,className:"w-full bg-gradient-to-r from-accent-emerald to-emerald-500 text-navy-dark px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-accent-emerald/15 hover:shadow-xl hover:shadow-accent-emerald/25 hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50",children:p?r.jsxs(r.Fragment,{children:[r.jsxs("svg",{className:"animate-spin h-6 w-6",viewBox:"0 0 24 24",children:[r.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"}),r.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]}),"Registrando aceitacao..."]}):r.jsxs(r.Fragment,{children:[r.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),"De Acordo — Aceito os Termos"]})})]}):r.jsxs("div",{className:"text-center",children:[r.jsx("button",{disabled:!0,className:"w-full bg-navy/[0.04] text-navy/25 px-8 py-4 rounded-xl font-bold text-lg cursor-not-allowed border border-navy/[0.08]",children:r.jsxs("span",{className:"flex items-center justify-center gap-2",children:[r.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),"Leia o documento completo para continuar"]})}),r.jsx("p",{className:"text-[11px] text-navy/30 mt-2",children:"Role até o final do documento para habilitar o aceite"})]})})]})}function tg({scrollRef:s}){const[d,l]=C.useState(0);return C.useEffect(()=>{const m=s.current;if(!m)return;function c(){const{scrollTop:p,scrollHeight:f,clientHeight:g}=m;l(Math.min(100,p/(f-g)*100))}return m.addEventListener("scroll",c),()=>m.removeEventListener("scroll",c)},[s]),r.jsx("div",{className:"h-full bg-gradient-to-r from-sentinel to-accent-emerald transition-all duration-150",style:{width:`${d}%`}})}const ng={0:{icon:r.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"})}),title:"Dados da empresa: a base de tudo",text:"As seguradoras constroem o perfil de risco a partir dos dados cadastrais da sua empresa. Quanto mais precisas e completas as informações, mais confiante a seguradora fica para oferecer condições competitivas.",insight:"Empresas que preenchem todos os campos recebem cotações até 30% mais competitivas do que perfis incompletos.",funFact:"O Seguro de Crédito protege contra inadimplência — se seu comprador não pagar, a seguradora cobre até 90% do valor da perda.",importance:"Setor de atividade e UF da empresa influenciam diretamente o apetite de risco de cada seguradora."},1:{icon:r.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),title:"Histórico de faturamento: a história que convence",text:"Seu histórico de vendas e perdas revela como sua empresa gerencia riscos comerciais. Uma trajetória de crescimento com sinistralidade controlada é o perfil ideal para obter prêmios mais baixos e franquias menores.",insight:"O faturamento desejado para o seguro define a base de cálculo do prêmio — informe o mais próximo da realidade para evitar sub ou super cobertura.",funFact:"Empresas com sinistralidade abaixo de 3% do faturamento costumam ter descontos progressivos na renovação da apólice.",importance:"Preencher os 3 anos de histórico é fundamental — seguradoras que analisam séries históricas oferecem condições 20% melhores."},2:{icon:r.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})}),title:"Carteira de recebíveis: o raio-X do seu risco",text:"A distribuição da carteira por faixa de valor revela a concentração de risco. Uma carteira pulverizada — muitos clientes em faixas menores — é vista pelas seguradoras como mais segura e resulta em prêmios mais baixos.",insight:"Preencha todas as faixas com valores reais, mesmo que pequenos. Dados incompletos levam a sub-cotação ou propostas mais conservadoras.",funFact:"Recebíveis são o 2º maior ativo da maioria das empresas brasileiras, depois de imóveis — e o menos protegido.",importance:"A concentração em poucos grandes clientes pode aumentar o prêmio em até 40%. Mostrar diversificação é estratégico."},3:{icon:r.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),title:"Transparência nas perdas: um ativo, não um passivo",text:"Declarar perdas passadas não prejudica sua cotação — ao contrário. Omitir informações pode gerar problemas graves na hora do sinistro, inclusive recusa de pagamento. A seguradora avalia o padrão de comportamento, não eventos isolados.",insight:'Mesmo sem perdas nos últimos 3 anos, preencha a seção — "zero perdas" é uma informação extremamente valiosa que melhora seu perfil.',funFact:"No Brasil, 60% das empresas já tiveram pelo menos uma perda significativa por inadimplência nos últimos 5 anos.",importance:"Seguradoras que identificam omissões na fase de subscrição podem invalidar a cobertura no momento do sinistro."},4:{icon:r.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),title:"Atrasos: transparência gera confiança",text:"Atrasos curtos e pontuais são absolutamente normais no mercado. O que preocupa seguradoras são atrasos longos e recorrentes. Detalhar os vencidos acima de 180 dias demonstra maturidade na gestão e profissionalismo.",insight:"Títulos vencidos acima de 180 dias podem ser excluídos da cobertura desde o início — declarar agora evita surpresas na apólice.",funFact:"O prazo médio de pagamento no Brasil é de 45 dias, um dos mais longos da América Latina — tornando o seguro ainda mais relevante.",importance:"Detalhamento preciso dos atrasos permite que a seguradora construa uma cobertura sob medida, sem exclusões desnecessárias."},5:{icon:r.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"})}),title:"Último passo — seus compradores definem o custo final",text:"Cada seguradora possui bases globais de análise de crédito para verificar a saúde financeira dos seus compradores. Uma amostra diversificada — grandes, médios e pequenos clientes — permite limites mais generosos e prêmios mais precisos.",insight:"Informe pelo menos 10 compradores para análise representativa. Quanto mais completo, mais competitiva será a cotação.",funFact:"Após o envio, o SENTINEL consulta simultaneamente Coface, Atradius, AVLA, Allianz Trade, AIG, CESCE e CHUBB — sem custo para você.",importance:"O CNPJ de cada comprador é obrigatório — ele permite a análise de crédito e define o limite aprovado para cada cliente."}},sg={0:{icon:r.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),title:"Exportar com segurança: dados que abrem mercados",text:"O seguro de crédito à exportação protege contra riscos políticos e comerciais nos países de destino. Os dados da sua empresa são a base para uma cotação precisa e para ampliar seu acesso a mercados internacionais com segurança.",insight:"O número de anos exportando e os mercados atendidos são fatores decisivos para as seguradoras internacionais.",funFact:"Mais de 80% dos exportadores europeus utilizam seguro de crédito. No Brasil, apenas 15% — uma oportunidade enorme.",importance:"Perfis exportadores bem documentados recebem propostas com cobertura de até 95% do valor da exportação."},1:{icon:r.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),title:"Faturamento em dólar: a régua das seguradoras globais",text:"O histórico de faturamento em US$ permite que as seguradoras internacionais avaliem seu porte exportador e consistência. Volume estável ou crescente resulta em condições mais favoráveis e prêmios menores.",insight:"O prazo de venda impacta diretamente o prêmio — prazos mais longos significam mais risco, mas também podem ser negociados com cobertura específica.",funFact:"Exportadores com seguro conseguem negociar prazos maiores com importadores, aumentando o volume de vendas em até 20%.",importance:"Informe o faturamento dos últimos 3 anos em US$ — séries históricas completas aumentam a confiança da seguradora no perfil."},2:{icon:r.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"})}),title:"Destinos exportados: cada mercado tem seu risco",text:"Cada região do mundo tem um perfil de risco diferente avaliado pelas seguradoras. Europa e América do Norte são mercados estáveis, enquanto África e América Central podem ter prêmios maiores ou coberturas específicas.",insight:"Distribuir percentuais precisos por região permite uma cobertura customizada — regiões em branco são tratadas como risco desconhecido.",funFact:"Risco político — guerras, embargos, moratórias — é coberto exclusivamente pelo seguro de crédito à exportação.",importance:"Concentração em 1 ou 2 países pode gerar sublimites de cobertura. Diversificação geográfica melhora os termos."},3:{icon:r.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})}),title:"Carteira internacional: diversificação é proteção",text:"Uma carteira bem distribuída entre vários importadores e países reduz o risco de concentração, tornando sua apólice mais acessível. As seguradoras valorizam muito essa diversificação geográfica e por cliente.",insight:"Preencha os valores em US$ em todas as faixas disponíveis — a seguradora precisa ver o tamanho real de cada exposição.",funFact:"Empresas com mais de 20 importadores ativos em 3 ou mais países costumam obter os melhores termos de apólice disponíveis no mercado.",importance:"Deixar faixas em branco faz a seguradora assumir o pior caso — preencher completo garante uma avaliação justa."},4:{icon:r.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),title:"Perdas internacionais: recuperar no exterior é caro",text:"Recuperar valores no exterior é complexo, caro e demorado. As seguradoras analisam seu histórico para entender o nível de exposição real. Declarar perdas passadas é sinal de maturidade e transparência.",insight:"Informe o país de cada perda — perdas em mercados desenvolvidos preocupam muito menos do que em mercados emergentes.",funFact:"O custo médio de cobrança internacional pode chegar a 40% do valor da dívida — o seguro elimina completamente esse risco.",importance:"Omitir perdas internacionais pode resultar em exclusão de cobertura para países ou clientes específicos."},5:{icon:r.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),title:"Vencidos acima de 180 dias: transparência total",text:"No comércio exterior, dívidas acima de 180 dias são consideradas de difícil recuperação. Declarar esses valores demonstra transparência e profissionalismo — e permite que a apólice seja estruturada sem exclusões surpresa.",insight:"Mesmo sem vencidos, preencha com zero — a informação confirma uma carteira saudável e acelera a aprovação.",funFact:"A média mundial de inadimplência no comércio exterior é de 2% a 3% do faturamento exportado — proteger-se é mais barato do que recuperar.",importance:"Vencidos não declarados descobertos na sinistro podem inviabilizar o pagamento da indenização."},6:{icon:r.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"})}),title:"Último passo — seus importadores definem o custo",text:"As seguradoras possuem bases de dados globais para verificar a saúde financeira dos seus importadores. O endereço completo e o código fiscal (Tax ID) são essenciais para identificação correta e aprovação de limites.",insight:"Inclua o Tax ID (código fiscal) e o endereço completo — isso acelera a análise e melhora significativamente as condições oferecidas.",funFact:"Após o envio, o SENTINEL consulta simultaneamente Coface, Atradius, AVLA, Allianz Trade, AIG, CESCE e CHUBB — sem custo para você.",importance:"Uma amostra diversificada (grandes, médios e pequenos importadores) resulta em limites mais generosos e prêmios mais precisos."}};function $u({tip:s,stepIndex:d,totalSteps:l}){return r.jsxs("div",{className:"mb-5 rounded-xl border border-cobre/20 overflow-hidden shadow-sm",children:[r.jsxs("div",{className:"bg-gradient-to-r from-navy to-[#0d1f3c] px-4 sm:px-5 py-3 flex items-center gap-3",children:[r.jsx("div",{className:"text-cobre bg-cobre/20 rounded-lg p-1.5 flex-shrink-0",children:s.icon}),r.jsxs("div",{className:"flex-1 min-w-0",children:[r.jsx("p",{className:"text-[10px] font-bold text-cobre uppercase tracking-widest",children:"SENTINEL — Guia de Preenchimento"}),r.jsx("h4",{className:"text-sm sm:text-base font-bold text-white leading-tight",children:s.title})]})]}),r.jsxs("div",{className:"bg-gradient-to-br from-gray-50 to-white px-4 sm:px-5 py-4 space-y-3",children:[r.jsx("p",{className:"text-sm text-gray-700 leading-relaxed",children:s.text}),r.jsxs("div",{className:"flex items-start gap-2.5 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2.5",children:[r.jsx("svg",{className:"w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-[10px] font-bold text-amber-700 uppercase tracking-wide mb-0.5",children:"Impacto na proposta"}),r.jsx("p",{className:"text-xs text-amber-800",children:s.importance})]})]}),r.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:[r.jsxs("div",{className:"flex items-start gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2.5",children:[r.jsx("svg",{className:"w-4 h-4 text-green-600 flex-shrink-0 mt-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-[10px] font-bold text-green-700 uppercase tracking-wide mb-0.5",children:"Dica prática"}),r.jsx("p",{className:"text-xs text-green-800",children:s.insight})]})]}),r.jsxs("div",{className:"flex items-start gap-2 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2.5",children:[r.jsx("svg",{className:"w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-[10px] font-bold text-blue-700 uppercase tracking-wide mb-0.5",children:"Sabia que?"}),r.jsx("p",{className:"text-xs text-blue-800",children:s.funFact})]})]})]})]})]})}function ig({step:s}){const d=ng[s];return d?r.jsx($u,{tip:d,stepIndex:s,totalSteps:6}):null}function lg({step:s}){const d=sg[s];return d?r.jsx($u,{tip:d,stepIndex:s,totalSteps:7}):null}const dg="modulepreload",cg=function(s){return"/sentinel-fairfield/"+s},eu={},ug=function(d,l,m){let c=Promise.resolve();if(l&&l.length>0){let f=function(y){return Promise.all(y.map(k=>Promise.resolve(k).then(j=>({status:"fulfilled",value:j}),j=>({status:"rejected",reason:j}))))};document.getElementsByTagName("link");const g=document.querySelector("meta[property=csp-nonce]"),v=(g==null?void 0:g.nonce)||(g==null?void 0:g.getAttribute("nonce"));c=f(l.map(y=>{if(y=cg(y),y in eu)return;eu[y]=!0;const k=y.endsWith(".css"),j=k?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${j}`))return;const E=document.createElement("link");if(E.rel=k?"stylesheet":dg,k||(E.as="script"),E.crossOrigin="",E.href=y,v&&E.setAttribute("nonce",v),document.head.appendChild(E),k)return new Promise((_,F)=>{E.addEventListener("load",_),E.addEventListener("error",()=>F(new Error(`Unable to preload CSS for ${y}`)))})}))}function p(f){const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=f,window.dispatchEvent(g),!g.defaultPrevented)throw f}return c.then(f=>{for(const g of f||[])g.status==="rejected"&&p(g.reason);return d().catch(p)})};function au({onComplete:s}){const[d,l]=C.useState(0),[m,c]=C.useState(0),p=[{label:"Analisando perfil da empresa...",icon:"🏢"},{label:"Avaliando histórico de crédito...",icon:"📊"},{label:"Calculando taxa base do setor...",icon:"🔢"},{label:"Processando fatores de ajuste...",icon:"⚙️"},{label:"Aplicando bonus/malus...",icon:"📈"},{label:"Definindo estrutura de cobertura...",icon:"🛡️"},{label:"Ranking de seguradoras...",icon:"🏆"},{label:"Gerando relatório iCover...",icon:"✨"}];return C.useEffect(()=>{const g=12e3/p.length,v=80;let y=0;const k=setInterval(()=>{y+=v;const E=y/12e3,_=E<.5?4*E*E*E:1-Math.pow(-2*E+2,3)/2,F=Math.min(_*100,100);c(F),F>=100&&(clearInterval(k),setTimeout(s,600))},v),j=setInterval(()=>{l(E=>E<p.length-1?E+1:E)},g);return()=>{clearInterval(k),clearInterval(j)}},[]),r.jsxs("div",{className:"flex flex-col items-center justify-center py-16 px-4 animate-fadeIn",children:[r.jsxs("div",{className:"relative mb-8",children:[r.jsx("div",{className:"w-24 h-24 rounded-full bg-gradient-to-br from-navy/10 to-sentinel/10 flex items-center justify-center",children:r.jsxs("svg",{width:56,height:56,viewBox:"0 0 80 80",fill:"none",children:[r.jsx("path",{d:"M40 12 L62 24 L62 42 C62 56 52 66 40 70 C28 66 18 56 18 42 L18 24 Z",fill:"rgba(17,24,51,0.06)",stroke:"#0c4a6e",strokeWidth:"1.8",children:r.jsx("animate",{attributeName:"stroke-opacity",values:"0.5;1;0.5",dur:"2.5s",repeatCount:"indefinite"})}),r.jsx("path",{d:"M40 20 L56 28 L56 42 C56 52 49 60 40 63 C31 60 24 52 24 42 L24 28 Z",fill:"rgba(12,74,110,0.06)",stroke:"#0c4a6e",strokeWidth:"0.8",opacity:"0.5"}),r.jsxs("text",{x:"40",y:"48",textAnchor:"middle",fill:"#0c4a6e",fontSize:"22",fontWeight:"bold",fontFamily:"Inter, sans-serif",children:["$",r.jsx("animate",{attributeName:"opacity",values:"0.5;1;0.5",dur:"2s",repeatCount:"indefinite"})]}),r.jsxs("line",{x1:"22",y1:"40",x2:"58",y2:"40",stroke:"#0c4a6e",strokeWidth:"0.5",opacity:"0.2",children:[r.jsx("animate",{attributeName:"y1",values:"25;55;25",dur:"3s",repeatCount:"indefinite"}),r.jsx("animate",{attributeName:"y2",values:"25;55;25",dur:"3s",repeatCount:"indefinite"}),r.jsx("animate",{attributeName:"opacity",values:"0;0.35;0",dur:"3s",repeatCount:"indefinite"})]})]})}),r.jsx("div",{className:"absolute -inset-4 rounded-full border-2 border-dashed border-navy/10 animate-spin",style:{animationDuration:"10s"}})]}),r.jsx("h2",{className:"text-2xl font-black text-navy mb-2",children:"iCover Analisando"}),r.jsx("p",{className:"text-navy/40 text-sm mb-8",children:"Motor de subscrição inteligente SENTINEL"}),r.jsxs("div",{className:"w-full max-w-md mb-6",children:[r.jsx("div",{className:"h-2 bg-navy/[0.06] rounded-full overflow-hidden",children:r.jsx("div",{className:"h-full bg-gradient-to-r from-sentinel to-cobre rounded-full transition-all duration-200",style:{width:`${m}%`}})}),r.jsxs("div",{className:"flex justify-between mt-1.5",children:[r.jsxs("span",{className:"text-[10px] text-navy/30 font-mono",children:[Math.round(m),"%"]}),r.jsx("span",{className:"text-[10px] text-navy/30 font-mono",children:"iCover Engine v1.0"})]})]}),r.jsx("div",{className:"space-y-2 w-full max-w-md",children:p.map((f,g)=>r.jsxs("div",{className:`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${g<d?"opacity-40":g===d?"bg-sentinel/[0.06] border border-sentinel/20":"opacity-20"}`,children:[r.jsx("span",{className:"text-base",children:f.icon}),r.jsx("span",{className:`text-sm ${g===d?"text-navy font-semibold":"text-navy/50"}`,children:f.label}),g<d&&r.jsx("span",{className:"ml-auto text-emerald-500 text-xs",children:"✓"}),g===d&&r.jsx("span",{className:"ml-auto w-3 h-3 rounded-full bg-sentinel animate-pulse"})]},g))})]})}function mg({score:s,maxScore:d=100,riskLabel:l,riskColor:m}){const[c,p]=C.useState(0),f=c/d,g=2*Math.PI*45,v=g*(1-f);return C.useEffect(()=>{let y;const j=Date.now();function E(){const _=Date.now()-j,F=Math.min(_/1500,1),z=1-Math.pow(1-F,3);p(Math.round(s*z)),F<1&&(y=requestAnimationFrame(E))}return y=requestAnimationFrame(E),()=>cancelAnimationFrame(y)},[s]),r.jsxs("div",{className:"flex flex-col items-center",children:[r.jsxs("div",{className:"relative w-36 h-36",children:[r.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full -rotate-90",children:[r.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#e5e7eb",strokeWidth:"6",opacity:"0.3"}),r.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:m,strokeWidth:"6",strokeLinecap:"round",strokeDasharray:g,strokeDashoffset:v,className:"transition-all duration-1000"})]}),r.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center",children:[r.jsx("span",{className:"text-3xl font-black text-navy",children:c}),r.jsxs("span",{className:"text-[10px] text-navy/40 font-medium",children:["/ ",d]})]})]}),r.jsx("div",{className:"mt-2 px-3 py-1 rounded-full text-xs font-bold",style:{backgroundColor:m+"20",color:m},children:l})]})}function pg({label:s,value:d,max:l,delay:m=0}){const[c,p]=C.useState(0);C.useEffect(()=>{const g=setTimeout(()=>p(d/l*100),200+m);return()=>clearTimeout(g)},[d,l,m]);const f=c>=70?"#34D399":c>=40?"#FCD34D":"#FB923C";return r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("span",{className:"text-xs text-navy/50 w-40 text-right flex-shrink-0",children:s}),r.jsx("div",{className:"flex-1 h-2 bg-navy/[0.06] rounded-full overflow-hidden",children:r.jsx("div",{className:"h-full rounded-full transition-all duration-1000 ease-out",style:{width:`${c}%`,backgroundColor:f}})}),r.jsxs("span",{className:"text-xs font-bold text-navy/70 w-10",children:[d,"/",l]})]})}function fg({insurer:s,rank:d}){return r.jsxs("div",{className:`flex items-center gap-3 p-3 rounded-xl border transition-all ${d===0?"bg-sentinel/[0.04] border-sentinel/20":"bg-white border-gray-100"}`,children:[r.jsx("div",{className:`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black ${d===0?"bg-sentinel/15 text-sentinel":d===1?"bg-cobre/10 text-cobre":"bg-gray-100 text-navy/40"}`,children:d+1}),r.jsxs("div",{className:"flex-1 min-w-0",children:[r.jsx("p",{className:"text-sm font-bold text-navy truncate",children:s.name}),r.jsx("p",{className:"text-[10px] text-navy/40 truncate",children:s.strengths[0]})]}),r.jsxs("div",{className:"text-right flex-shrink-0",children:[r.jsxs("span",{className:"text-xs font-bold text-navy/60",children:[s.score,"%"]}),r.jsx("p",{className:"text-[10px] text-navy/30",children:"aderência"})]})]})}function gg({analysis:s,onAccept:d,onDecline:l,tipo:m}){const[c,p]=C.useState(!1);return s.metrics.symbol,r.jsxs("div",{className:"animate-fadeIn",children:[r.jsxs("div",{className:"text-center mb-8",children:[r.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sentinel/[0.08] border border-sentinel/20 mb-3",children:[r.jsx(no,{size:16}),r.jsx("span",{className:"text-[10px] font-bold text-sentinel uppercase tracking-wider",children:"iCover — Análise de Subscrição"})]}),r.jsx("h2",{className:"text-2xl font-black text-navy",children:s.empresa}),r.jsxs("p",{className:"text-sm text-navy/40",children:[s.setor," · CNPJ ",s.cnpj]})]}),r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8",children:[r.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col items-center",children:[r.jsx("h3",{className:"text-xs font-bold text-navy/40 uppercase tracking-wider mb-4",children:"Score de Risco"}),r.jsx(mg,{score:s.score,maxScore:s.scoreMax,riskLabel:s.riskLabel,riskColor:s.riskColor})]}),r.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-6 shadow-sm",children:[r.jsx("h3",{className:"text-xs font-bold text-navy/40 uppercase tracking-wider mb-4",children:"Prêmio Estimado Anual"}),r.jsxs("div",{className:"text-center mb-4",children:[r.jsx("p",{className:"text-3xl font-black text-navy",children:s.premium.estimatedFormatted}),r.jsxs("p",{className:"text-xs text-navy/40 mt-1",children:["≈ ",s.premium.monthlyFormatted,"/mês"]})]}),r.jsxs("div",{className:"space-y-2 text-xs",children:[r.jsxs("div",{className:"flex justify-between text-navy/50",children:[r.jsx("span",{children:"Prêmio mínimo"}),r.jsx("span",{className:"font-semibold text-navy/70",children:s.premium.minimumFormatted})]}),r.jsxs("div",{className:"flex justify-between text-navy/50",children:[r.jsx("span",{children:"Prêmio máximo"}),r.jsx("span",{className:"font-semibold text-navy/70",children:s.premium.maximumFormatted})]}),r.jsxs("div",{className:"flex justify-between text-navy/50",children:[r.jsx("span",{children:"Taxa aplicada"}),r.jsx("span",{className:"font-semibold text-navy/70",children:s.pricing.adjustedRatePct})]}),s.bonusMalus.type!=="neutro"&&r.jsxs("div",{className:`flex justify-between ${s.bonusMalus.type==="bonus"?"text-emerald-600":"text-orange-500"}`,children:[r.jsx("span",{children:s.bonusMalus.type==="bonus"?"Bônus":"Malus"}),r.jsxs("span",{className:"font-bold",children:[s.bonusMalus.pct>0?"+":"",s.bonusMalus.pct,"%"]})]})]})]}),r.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-6 shadow-sm",children:[r.jsx("h3",{className:"text-xs font-bold text-navy/40 uppercase tracking-wider mb-4",children:"Cobertura Recomendada"}),r.jsxs("div",{className:"space-y-3",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-sm font-bold text-sentinel",children:s.coverage.structureLabel}),r.jsx("p",{className:"text-[10px] text-navy/40 mt-0.5 leading-relaxed",children:s.coverage.structureReason})]}),r.jsx("div",{className:"h-px bg-gray-100"}),r.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-navy/40",children:"PMI"}),r.jsx("p",{className:"font-bold text-navy",children:s.coverage.pmiPct})]}),r.jsxs("div",{children:[r.jsx("p",{className:"text-navy/40",children:"POS"}),r.jsx("p",{className:"font-bold text-navy",children:s.coverage.posPct})]}),r.jsxs("div",{children:[r.jsx("p",{className:"text-navy/40",children:"Prazo máx. crédito"}),r.jsxs("p",{className:"font-bold text-navy",children:[s.coverage.maxCreditPeriod," dias"]})]}),r.jsxs("div",{children:[r.jsx("p",{className:"text-navy/40",children:"Mora prolongada"}),r.jsxs("p",{className:"font-bold text-navy",children:[s.coverage.waitingPeriod," dias"]})]}),r.jsxs("div",{children:[r.jsx("p",{className:"text-navy/40",children:"Limite discricionário"}),r.jsx("p",{className:"font-bold text-navy",children:s.coverage.discretionaryLimitFormatted})]}),r.jsxs("div",{children:[r.jsx("p",{className:"text-navy/40",children:"Limite agregado"}),r.jsx("p",{className:"font-bold text-navy",children:s.coverage.aggregateLimitFormatted})]})]}),s.coverage.aad>0&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"h-px bg-gray-100"}),r.jsx("p",{className:"text-[10px] text-navy/40",children:s.coverage.aadLabel})]})]})]})]}),r.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-6",children:[r.jsxs("button",{onClick:()=>p(!c),className:"flex items-center justify-between w-full text-left",children:[r.jsx("h3",{className:"text-xs font-bold text-navy/40 uppercase tracking-wider",children:"Análise Detalhada por Dimensão"}),r.jsx("svg",{className:`w-4 h-4 text-navy/30 transition-transform ${c?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),c&&r.jsxs("div",{className:"mt-4 space-y-3",children:[Object.entries(s.scores).map(([f,g],v)=>r.jsx(pg,{label:g.label,value:g.value,max:g.max,delay:v*100},f)),r.jsx("div",{className:"h-px bg-gray-100 my-3"}),r.jsx("h4",{className:"text-xs font-bold text-navy/40 uppercase tracking-wider",children:"Fatores de Ajuste da Taxa"}),r.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2",children:Object.entries(s.pricing.factors).map(([f,g])=>r.jsxs("div",{className:"flex items-center justify-between text-xs p-2 rounded-lg bg-gray-50",children:[r.jsx("span",{className:"text-navy/50",children:g.label}),r.jsxs("span",{className:`font-bold ${g.value<1?"text-emerald-600":g.value>1?"text-orange-500":"text-navy/60"}`,children:[g.value<1?"↓":g.value>1?"↑":"="," ",g.value.toFixed(2),"x"]})]},f))})]})]}),r.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-8",children:[r.jsx("h3",{className:"text-xs font-bold text-navy/40 uppercase tracking-wider mb-4",children:"Ranking de Seguradoras por Aderência ao Perfil"}),r.jsx("div",{className:"space-y-2",children:s.insurers.slice(0,5).map((f,g)=>r.jsx(fg,{insurer:f,rank:g},f.name))})]}),r.jsx("div",{className:"bg-navy/[0.03] rounded-xl p-4 mb-6 border border-navy/[0.06]",children:r.jsxs("p",{className:"text-[10px] text-navy/40 leading-relaxed",children:[r.jsx("strong",{className:"text-navy/60",children:"Importante:"})," Esta análise é uma estimativa gerada pelo motor de subscrição iCover com base nos dados informados. Os valores e condições apresentados são indicativos e podem variar na cotação real junto às seguradoras. A Fairfield atua como consultoria 100% independente — não representamos nenhuma seguradora. Os prêmios e condições definitivos serão definidos pelas seguradoras após análise formal da proposta."]})}),r.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 justify-center",children:[r.jsx("button",{onClick:d,className:"px-8 py-4 bg-gradient-to-r from-sentinel-dark to-sentinel text-navy-dark rounded-2xl font-bold text-base shadow-lg shadow-sentinel/15 hover:shadow-xl hover:shadow-sentinel/25 hover:scale-[1.02] transition-all",children:"✓ Aceitar e Prosseguir com Cotação"}),r.jsx("button",{onClick:l,className:"px-8 py-4 border border-navy/10 text-navy/50 rounded-2xl font-semibold text-sm hover:bg-navy/[0.03] transition-all",children:"Analisar meu Score de Crédito →"})]}),r.jsxs("p",{className:"text-center text-[10px] text-navy/25 mt-4",children:["Powered by ",r.jsx("span",{className:"font-bold text-sentinel/50",children:"SENTINEL"})," iCover Engine v1.0 · Fairfield Corretora de Seguros · SUSEP 20.2036457.1"]})]})}function Bu({formData:s,tipo:d,onComplete:l,onDecline:m}){const[c,p]=C.useState("analyzing"),[f,g]=C.useState(null),v=C.useRef(null),y=C.useRef(!1);C.useEffect(()=>{async function _(){try{const F={tipo:d,...s,seguradoras:[]};try{const{apiFetch:z}=await ug(async()=>{const{apiFetch:O}=await Promise.resolve().then(()=>Vf);return{apiFetch:O}},void 0),L=await z("/api/underwriting/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(F)});v.current=L,g(L)}catch{console.warn("API indisponível, usando análise client-side");const z=hg(F);v.current=z,g(z)}}catch(F){console.error("Erro na análise iCover:",F)}y.current&&p("results")}_()},[]);function k(){y.current=!0,v.current&&p("results")}function j(){l(f)}function E(){m?m():window.open("https://www.4score.com.br","_blank")}return c==="analyzing"?r.jsx(au,{onComplete:k}):f?r.jsx(gg,{analysis:f,onAccept:j,onDecline:E,tipo:d}):r.jsx(au,{onComplete:k})}function hg(s){var J,H,ie;const d=s.tipo||"interno",l=d==="externo"?"US$":"R$",m=s.historicoFaturamento||[],c=m.map(ue=>parseFloat(String(ue.faturamento||"0").replace(/[^\d.,]/g,"").replace(",","."))||0),p=m.map(ue=>parseFloat(String(ue.perdas||"0").replace(/[^\d.,]/g,"").replace(",","."))||0),f=c.length>0?c[c.length-1]:0,g=d==="interno"?1e3:1,v=f*g,y=c.reduce((ue,ge)=>ue+ge,0),k=p.reduce((ue,ge)=>ue+ge,0),j=y>0?k/y:0,E=s.condicoesVenda||{},_=parseFloat(E.pct_prazo||"80")/100,F=parseInt(E.prazo_medio_dias||"60")||60,z=parseFloat(String(E.faturamento_desejado_seguro||"0").replace(/[^\d.,]/g,"").replace(",","."))||0,L=z>0?z*g:v*_,O=.002,q=O*(j===0?.85:j<.05?.95:j<.15?1.1:1.4),D=Math.max(L*q,15e3),$=j===0?78:j<.05?70:j<.15?55:40,X=ue=>`${l} ${Math.round(ue).toLocaleString("pt-BR")}`;return{tipo:d,empresa:((J=s.proponente)==null?void 0:J.razao_social)||"Empresa",cnpj:((H=s.proponente)==null?void 0:H.cnpj)||"",setor:((ie=s.proponente)==null?void 0:ie.setor)||"Não identificado",setorRisco:"medium",score:$,scoreMax:100,riskClass:$>=65?"standard":"substandard",riskLabel:$>=65?"Risco Padrão":"Risco Subpadrão",riskColor:$>=65?"#7DD3FC":"#FCD34D",scores:{revenue:{value:9,max:15,label:"Porte da Empresa"},lossRatio:{value:j===0?25:15,max:25,label:"Histórico de Perdas"},concentration:{value:12,max:20,label:"Concentração de Compradores"},paymentTerms:{value:9,max:15,label:"Prazo Médio de Crédito"},sector:{value:7,max:10,label:"Risco do Setor"},geography:{value:3,max:5,label:"Diversificação Geográfica"},portfolio:{value:7,max:10,label:"Qualidade da Carteira"}},metrics:{faturamentoAnual:v,faturamentoSeguravel:L,pctPrazo:_,prazoMedio:F,prazoMaximo:90,avgLossRatio:j,topBuyerPct:.15,top5Pct:.45,numBuyers:10,atrasosRatio:0,currency:d==="externo"?"USD":"BRL",symbol:l},pricing:{baseRate:O,adjustedRate:q,baseRatePct:(O*100).toFixed(3)+"%",adjustedRatePct:(q*100).toFixed(3)+"%",factors:{setor:{value:1,label:"Setor"},sinistralidade:{value:j===0?.85:1,label:"Sinistralidade"}}},premium:{estimated:Math.round(D),minimum:Math.round(D*.7),maximum:Math.round(D*1.3),monthly:Math.round(D/12),estimatedFormatted:X(D),minimumFormatted:X(D*.7),maximumFormatted:X(D*1.3),monthlyFormatted:X(D/12)},bonusMalus:{factor:1,type:j===0?"bonus":"neutro",label:j===0?"Bônus (sem sinistro)":"Neutro",pct:j===0?-15:0},coverage:{structure:"whole_turnover",structureLabel:"Apólice Global (Whole Turnover)",structureReason:"Estrutura recomendada com base no perfil.",pmi:.85,pmiPct:"85%",pos:.15,posPct:"15%",aad:0,aadLabel:"Sem franquia agregada",discretionaryLimit:5e4,discretionaryLimitFormatted:X(5e4),maxCreditPeriod:Math.min(parseInt(E.prazo_maximo_dias||"90")||90,120),aggregateLimit:Math.round(D*14),aggregateLimitFormatted:X(D*14),waitingPeriod:d==="externo"?180:150},insurers:[{name:"Allianz Trade",score:90,strengths:["Líder global em seguro de crédito"]},{name:"Coface",score:85,strengths:["Rating DRA proprietário"]},{name:"Atradius",score:80,strengths:["Cobrança integrada"]},{name:"AVLA",score:78,strengths:["Agilidade e foco em LATAM"]},{name:"CESCE",score:72,strengths:["Expertise ibero-americana"]}],analyzedAt:new Date().toISOString()}}const Pi="fairfield_intake_interno",xg=["AC","AL","AM","AP","BA","CE","DF","ES","GO","MA","MG","MS","MT","PA","PB","PE","PI","PR","RJ","RN","RO","RR","RS","SC","SE","SP","TO"],cn=["Proponente","Faturamento","Carteira","Perdas","Atrasos","Compradores"],vg=["Até 5.000","De 5.001 a 10.000","De 10.001 a 50.000","De 50.001 a 100.000","De 100.001 a 500.000","De 500.001 a 1.000.000","De 1.000.001 a 5.000.000","Acima de 5.000.001"],yg=["Até 30 dias","Entre 31 e 120 dias","Entre 121 e 180 dias","Acima de 181 dias"];function ru(){return{proponente:{razao_social:"",cnpj:"",setor:"",faturamento_pct:"",uf:""},contato:{nome:"",email:"",telefone:""},coSeguradas:[{empresa:"",cnpj:"",setor:"",faturamento_pct:""}],historicoFaturamento:[{ano:"2023",faturamento:"",perdas:""},{ano:"2024",faturamento:"",perdas:""},{ano:"2025",faturamento:"",perdas:""},{ano:"Próximos 12 meses",faturamento:"",perdas:""}],condicoesVenda:{pct_vista:"",pct_prazo:"",prazo_medio_dias:"",prazo_maximo_dias:"",faturamento_desejado_seguro:""},carteiraRecebiveis:vg.map(s=>({faixa:s,faturamento_total:"",pct_faturamento:"",num_clientes:"",pct_clientes:""})),perdasPorFaixa:[],maioresPerdas:[{razao_social:"",cnpj:"",exercicio:"",valor:"",motivo:""}],atrasos:yg.map(s=>({faixa_dias:s,valor_atraso:"",pct_valor:"",qtd_clientes:"",pct_clientes:""})),atrasosDetalhados:[{razao_social:"",cnpj:"",data_emissao:"",data_vencimento:"",valor:""}],amostraCompradores:[{cnpj_codigo_fiscal:"",razao_social:"",faturamento_anual:"",limite_credito:""}]}}function bg(){jn();const{user:s,updateProspectPhase:d}=Lr(),[l,m]=C.useState(0),[c,p]=C.useState(()=>{const h=localStorage.getItem(Pi);return h?JSON.parse(h):ru()}),[f,g]=C.useState({}),[v,y]=C.useState(!1),[k,j]=C.useState(!1),[E,_]=C.useState(!1),[F,z]=C.useState(null),[L,O]=C.useState(null),[q,D]=C.useState(!1);C.useEffect(()=>{localStorage.setItem(Pi,JSON.stringify(c))},[c]),C.useEffect(()=>{s&&d(s.email,"preenchendo_interno")},[]);function $(h,I,w){p(M=>({...M,[h]:{...M[h],[I]:w}})),g(M=>{const Q={...M};return delete Q[`${h}.${I}`],Q})}function X(h,I,w,M){p(Q=>{const W=[...Q[h]];if(W[I]={...W[I],[w]:M},h==="carteiraRecebiveis"&&(w==="faturamento_total"||w==="num_clientes")){const N=W.reduce((ae,oe)=>ae+(parseFloat(String(oe.faturamento_total).replace(/\./g,"").replace(",","."))||0),0),T=W.reduce((ae,oe)=>ae+(parseInt(String(oe.num_clientes).replace(/\D/g,""))||0),0);W.forEach((ae,oe)=>{const le=parseFloat(String(ae.faturamento_total).replace(/\./g,"").replace(",","."))||0,de=parseInt(String(ae.num_clientes).replace(/\D/g,""))||0;W[oe]={...W[oe],pct_faturamento:N>0?(le/N*100).toFixed(1):"",pct_clientes:T>0?(de/T*100).toFixed(1):""}})}if(h==="atrasos"&&(w==="valor_atraso"||w==="qtd_clientes")){const N=W.reduce((ae,oe)=>ae+(parseFloat(String(oe.valor_atraso).replace(/\./g,"").replace(",","."))||0),0),T=W.reduce((ae,oe)=>ae+(parseInt(String(oe.qtd_clientes).replace(/\D/g,""))||0),0);W.forEach((ae,oe)=>{const le=parseFloat(String(ae.valor_atraso).replace(/\./g,"").replace(",","."))||0,de=parseInt(String(ae.qtd_clientes).replace(/\D/g,""))||0;W[oe]={...W[oe],pct_valor:N>0?(le/N*100).toFixed(1):"",pct_clientes:T>0?(de/T*100).toFixed(1):""}})}return{...Q,[h]:W}})}function J(h,I){p(w=>({...w,[h]:[...w[h],{...I}]}))}function H(h,I){p(w=>({...w,[h]:w[h].filter((M,Q)=>Q!==I)}))}function ie(h){const I={};if(h===0)c.proponente.razao_social.trim()||(I["proponente.razao_social"]="Obrigatório"),c.proponente.cnpj.replace(/\D/g,"").length!==14&&(I["proponente.cnpj"]="CNPJ inválido"),c.proponente.setor.trim()||(I["proponente.setor"]="Obrigatório"),c.contato.nome.trim()||(I["contato.nome"]="Obrigatório"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.contato.email)||(I["contato.email"]="E-mail inválido");else if(h===1)c.condicoesVenda.faturamento_desejado_seguro||(I["cv.fds"]="Informe o faturamento desejado");else if(h===5){const w=c.amostraCompradores.filter(M=>M.razao_social||M.faturamento_anual||M.limite_credito);w.length===0?I.compradores="Informe pelo menos 1 comprador":w.forEach((M,Q)=>{(!M.cnpj_codigo_fiscal||M.cnpj_codigo_fiscal.replace(/\D/g,"").length<11)&&(I[`comprador_cnpj_${Q}`]=`CNPJ obrigatório para o comprador ${Q+1}`)})}return g(I),Object.keys(I).length>0&&h===5&&ke.error("Preencha o CNPJ de todos os compradores informados"),Object.keys(I).length===0}function ue(){ie(l)&&m(h=>Math.min(h+1,cn.length-1))}function ge(){D(!1),m(h=>Math.max(h-1,0))}async function $e(h){h==="review"?ie(l)&&D(!0):(_(!0),window.scrollTo({top:0,behavior:"smooth"}))}async function _e(h){z(h),y(!0);try{const I={tipo:"interno",...c,seguradoras:[],icoverAnalysis:h},w=await Nr("/api/leads",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(I)});if(!w.sucesso)throw new Error(w.mensagem);O(w.data),j(!0),_(!1),localStorage.removeItem(Pi),s&&d(s.email,"enviado_interno"),ke.success("Solicitação enviada com sucesso!")}catch(I){ke.error(I.message||"Erro ao enviar")}finally{y(!1)}}function Ee(){window.open("https://www.4score.com.br","_blank")}function Be(h){p(I=>({...I,proponente:{...I.proponente,razao_social:h.razao_social,uf:h.uf||I.proponente.uf}})),ke.success(`Empresa: ${h.razao_social}`)}return k?r.jsx(Tu,{result:L,tipo:"interno",onReset:()=>{j(!1),_(!1),z(null),m(0),p(ru()),O(null),D(!1)}}):E?r.jsx("div",{className:"max-w-5xl mx-auto px-4 py-8",children:r.jsx(Bu,{formData:c,tipo:"interno",onComplete:_e,onDecline:Ee})}):r.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[r.jsxs("div",{className:"text-center mb-6",children:[r.jsx("h2",{className:"text-3xl font-bold text-navy",children:"Crédito Interno"}),r.jsx("p",{className:"text-cobre text-sm font-semibold",children:"Operações Nacionais — Valores em R$"})]}),!q&&r.jsx(Fu,{step:l,steps:cn}),!q&&r.jsx(ig,{step:l}),r.jsxs("div",{className:"card",children:[q?r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"bg-gradient-to-r from-navy to-[#0d1f3c] rounded-xl px-5 py-4 flex items-center gap-4",children:[r.jsx("div",{className:"w-12 h-12 bg-green-400/20 rounded-xl flex items-center justify-center flex-shrink-0",children:r.jsx("svg",{className:"w-7 h-7 text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-[10px] font-bold text-green-400 uppercase tracking-widest mb-0.5",children:"Quase lá!"}),r.jsx("h3",{className:"text-base sm:text-lg font-bold text-white leading-tight",children:"Revisão Final dos Dados"}),r.jsx("p",{className:"text-xs text-white/60",children:"Confirme as informações antes de enviar para as 7 seguradoras"})]})]}),r.jsxs(un,{accent:"navy",title:"Proponente",icon:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"}),children:[r.jsx(Ca,{label:"Empresa",value:c.proponente.razao_social,highlight:!0}),r.jsx(Ca,{label:"CNPJ",value:c.proponente.cnpj}),r.jsx(Ca,{label:"Setor",value:c.proponente.setor}),r.jsx(Ca,{label:"UF",value:c.proponente.uf}),r.jsx(Ca,{label:"Contato",value:c.contato.nome?`${c.contato.nome} · ${c.contato.email}`:""}),c.coSeguradas.filter(h=>h.empresa).length>0&&r.jsx(Ca,{label:"Co-seguradas",value:c.coSeguradas.filter(h=>h.empresa).map(h=>h.empresa).join(" · ")})]}),r.jsxs(un,{accent:"cobre",title:"Faturamento e Condições de Venda",icon:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}),children:[c.historicoFaturamento.map(h=>r.jsx(Ca,{label:h.ano,value:h.faturamento?`R$ ${h.faturamento} mil · Perdas: ${h.perdas||"0"}`:""},h.ano)),r.jsx(Ca,{label:"Faturamento seguro",value:c.condicoesVenda.faturamento_desejado_seguro?`R$ ${c.condicoesVenda.faturamento_desejado_seguro}`:"",highlight:!0}),r.jsx(Ca,{label:"Condições",value:[c.condicoesVenda.pct_vista&&`Vista ${c.condicoesVenda.pct_vista}%`,c.condicoesVenda.pct_prazo&&`Prazo ${c.condicoesVenda.pct_prazo}%`,c.condicoesVenda.prazo_medio_dias&&`Médio ${c.condicoesVenda.prazo_medio_dias}d`,c.condicoesVenda.prazo_maximo_dias&&`Máx ${c.condicoesVenda.prazo_maximo_dias}d`].filter(Boolean).join(" · ")})]}),c.carteiraRecebiveis.filter(h=>h.faturamento_total).length>0&&r.jsx(un,{accent:"navy",title:"Carteira de Recebíveis",icon:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"}),children:c.carteiraRecebiveis.filter(h=>h.faturamento_total).map(h=>r.jsx(Ca,{label:h.faixa,value:`R$ ${h.faturamento_total} (${h.pct_faturamento}%) · ${h.num_clientes} clientes`},h.faixa))}),c.amostraCompradores.filter(h=>h.razao_social).length>0&&r.jsx(un,{accent:"cobre",title:"Amostra de Compradores",icon:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"}),children:c.amostraCompradores.filter(h=>h.razao_social).map((h,I)=>r.jsx(Ca,{label:h.razao_social,value:[h.cnpj_codigo_fiscal&&`CNPJ ${h.cnpj_codigo_fiscal}`,h.limite_credito&&`Lim: R$ ${h.limite_credito}`].filter(Boolean).join(" · ")},I))}),r.jsx(ou,{})]}):r.jsxs(r.Fragment,{children:[l===0&&r.jsxs("div",{className:"space-y-4",children:[r.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"1. Dados do Proponente"}),r.jsx(Ou,{value:c.proponente.cnpj,onChange:h=>$("proponente","cnpj",h),onResult:Be,error:f["proponente.cnpj"]}),r.jsx(pe,{label:"Razão Social",value:c.proponente.razao_social,onChange:h=>$("proponente","razao_social",h),required:!0,error:f["proponente.razao_social"]}),r.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[r.jsx(pe,{label:"Setor de Atividade",value:c.proponente.setor,onChange:h=>$("proponente","setor",h),required:!0,error:f["proponente.setor"],placeholder:"Atividade e produtos"}),r.jsx(pe,{label:"Faturamento Empresa (%)",value:c.proponente.faturamento_pct,onChange:h=>$("proponente","faturamento_pct",h),placeholder:"100%"}),r.jsx(Xf,{label:"UF",value:c.proponente.uf,onChange:h=>$("proponente","uf",h),options:xg})]}),r.jsx("div",{className:"border-t pt-4 mt-4",children:r.jsx("h4",{className:"text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide",children:"Contato Responsável"})}),r.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[r.jsx(pe,{label:"Nome",value:c.contato.nome,onChange:h=>$("contato","nome",h),required:!0,error:f["contato.nome"]}),r.jsx(pe,{label:"E-mail",value:c.contato.email,onChange:h=>$("contato","email",h),type:"email",required:!0,error:f["contato.email"]}),r.jsx(pe,{label:"Telefone",value:c.contato.telefone,onChange:h=>$("contato","telefone",Oi(h)),placeholder:"(00) 00000-0000"})]}),r.jsx("div",{className:"border-t pt-4 mt-4",children:r.jsx("h4",{className:"text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide",children:"Co-Seguradas (opcional)"})}),r.jsx(la,{columns:[{key:"cnpj",label:"CNPJ",placeholder:"00.000.000/0000-00",type:"cnpj",cnpjLookupTarget:"empresa"},{key:"empresa",label:"Empresa",placeholder:"Preenchido automaticamente"},{key:"setor",label:"Setor",placeholder:"Atividade"},{key:"faturamento_pct",label:"Fat. %",placeholder:"%"}],rows:c.coSeguradas,onChange:(h,I,w)=>X("coSeguradas",h,I,w),onAdd:()=>J("coSeguradas",{empresa:"",cnpj:"",setor:"",faturamento_pct:""}),onRemove:h=>H("coSeguradas",h),maxRows:3,addLabel:"Adicionar co-segurada"})]}),l===1&&r.jsxs("div",{className:"space-y-4",children:[r.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"2. Histórico de Faturamento e PDD"}),r.jsx("p",{className:"text-xs text-gray-400",children:"Em Milhares de Reais. Excluindo vendas para coligadas, pessoas físicas, empresas públicas, à vista ou antecipadas."}),r.jsx(la,{columns:[{key:"ano",label:"Período",readOnly:!0},{key:"faturamento",label:"Faturamento (R$ mil)",placeholder:"Ex: 5.000"},{key:"perdas",label:"Perdas (R$ mil)",placeholder:"Ex: 100 (ou 0)"}],rows:c.historicoFaturamento,onChange:(h,I,w)=>X("historicoFaturamento",h,I,w)}),c.historicoFaturamento.some(h=>h.faturamento)&&r.jsx("div",{className:"flex flex-wrap gap-2 mt-1",children:c.historicoFaturamento.filter(h=>h.faturamento).map(h=>{const I=parseFloat(String(h.faturamento).replace(/\./g,"").replace(",","."))||0,w=parseFloat(String(h.perdas).replace(/\./g,"").replace(",","."))||0,M=I>0?w/I*100:null,Q=M===null?"bg-gray-100 text-gray-500":M<2?"bg-green-100 text-green-700":M<5?"bg-amber-100 text-amber-700":"bg-red-100 text-red-700";return r.jsxs("span",{className:`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${Q}`,children:[h.ano,": ",M!==null?`${M.toFixed(2)}% sinistralidade`:"informe as perdas"]},h.ano)})}),r.jsx("div",{className:"border-t pt-4 mt-4",children:r.jsx("h4",{className:"text-sm font-bold text-navy mb-3",children:"2.1 Distribuição das Condições de Venda"})}),r.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[r.jsx(pe,{label:"À Vista (%)",value:c.condicoesVenda.pct_vista,onChange:h=>{$("condicoesVenda","pct_vista",h);const I=parseFloat(h);!isNaN(I)&&I>=0&&I<=100&&!c.condicoesVenda.pct_prazo&&$("condicoesVenda","pct_prazo",String(100-I))},placeholder:"Ex: 30"}),r.jsx(pe,{label:"À Prazo (%)",value:c.condicoesVenda.pct_prazo,onChange:h=>$("condicoesVenda","pct_prazo",h),placeholder:"Ex: 70",hint:(()=>{const h=parseFloat(c.condicoesVenda.pct_vista)||0,I=parseFloat(c.condicoesVenda.pct_prazo)||0,w=h+I;return h&&I&&w!==100?`⚠️ Soma atual: ${w}% (deve ser 100%)`:h&&I&&w===100?"✓ Soma correta: 100%":null})()}),r.jsx(pe,{label:"Prazo Médio (dias)",value:c.condicoesVenda.prazo_medio_dias,onChange:h=>$("condicoesVenda","prazo_medio_dias",h),placeholder:"Ex: 60"}),r.jsx(pe,{label:"Prazo Máximo (dias)",value:c.condicoesVenda.prazo_maximo_dias,onChange:h=>$("condicoesVenda","prazo_maximo_dias",h),placeholder:"Ex: 120"})]}),r.jsxs("div",{className:"border-t pt-4 mt-4",children:[r.jsx("h4",{className:"text-sm font-bold text-navy mb-3",children:"2.2 Faturamento Anual Desejado para o Seguro"}),r.jsx("p",{className:"text-xs text-gray-400 mb-2",children:"Considerar o faturamento total anual somado de todos os clientes que a empresa deseja ter coberto dentro da apólice."})]}),r.jsx(pe,{label:"Valor (R$)",value:c.condicoesVenda.faturamento_desejado_seguro,onChange:h=>$("condicoesVenda","faturamento_desejado_seguro",h),required:!0,error:f["cv.fds"],placeholder:"Ex: 10.000.000",hint:"Sobre este faturamento estimado incide o custo da apólice."})]}),l===2&&r.jsxs("div",{className:"space-y-4",children:[r.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"3. Distribuição da Carteira de Recebíveis"}),r.jsx("p",{className:"text-xs text-gray-400",children:"Excluindo vendas para coligadas, PF, empresas públicas, à vista ou antecipadas. Somar todas as vendas de um mesmo cliente para enquadrar na faixa correta."}),r.jsx(la,{columns:[{key:"faixa",label:"Faixa de Valor (R$)",readOnly:!0},{key:"faturamento_total",label:"Fat. Total (R$)",placeholder:"Valor"},{key:"pct_faturamento",label:"% Fat.",readOnly:!0,placeholder:"Auto"},{key:"num_clientes",label:"Nº Clientes",placeholder:"Qtd"},{key:"pct_clientes",label:"% Clientes",readOnly:!0,placeholder:"Auto"}],rows:c.carteiraRecebiveis,onChange:(h,I,w)=>X("carteiraRecebiveis",h,I,w)})]}),l===3&&r.jsxs("div",{className:"space-y-4",children:[r.jsx("div",{className:"flex items-center justify-between",children:r.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3 flex-1",children:"4. Detalhamento das Perdas Efetivas"})}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("p",{className:"text-xs text-gray-400",children:"Indique as 5 maiores perdas nos últimos 3 anos. Motivo: Mora, Falência, ações judiciais ou extrajudiciais."}),r.jsxs("button",{onClick:()=>{p(h=>({...h,maioresPerdas:[{razao_social:"Sem perdas no período",cnpj:"",exercicio:"",valor:"0",motivo:"Não houve perdas"}]}))},className:"ml-4 flex-shrink-0 text-xs text-gray-500 hover:text-green-600 border border-gray-200 hover:border-green-400 rounded-lg px-3 py-1.5 transition-colors flex items-center gap-1.5",children:[r.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),"Sem perdas neste período"]})]}),r.jsx("h4",{className:"text-sm font-bold text-navy",children:"4.1 Maiores Perdas"}),r.jsx(la,{columns:[{key:"cnpj",label:"CNPJ",placeholder:"00.000.000/0000-00",type:"cnpj",cnpjLookupTarget:"razao_social"},{key:"razao_social",label:"Razão Social",placeholder:"Preenchido automaticamente"},{key:"exercicio",label:"Exercício",placeholder:"2024"},{key:"valor",label:"Valor (R$)",placeholder:"Valor"},{key:"motivo",label:"Motivo",placeholder:"Mora, Falência..."}],rows:c.maioresPerdas,onChange:(h,I,w)=>X("maioresPerdas",h,I,w),onAdd:()=>J("maioresPerdas",{razao_social:"",cnpj:"",exercicio:"",valor:"",motivo:""}),onRemove:h=>H("maioresPerdas",h),maxRows:5})]}),l===4&&r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"flex items-center justify-between border-b pb-3",children:[r.jsx("h3",{className:"text-lg font-bold text-navy",children:"5. Distribuição de Atrasos"}),r.jsxs("button",{onClick:()=>p(h=>({...h,atrasos:h.atrasos.map(I=>({...I,valor_atraso:"0",pct_valor:"0",qtd_clientes:"0",pct_clientes:"0"}))})),className:"flex-shrink-0 text-xs text-gray-500 hover:text-green-600 border border-gray-200 hover:border-green-400 rounded-lg px-3 py-1.5 transition-colors flex items-center gap-1.5",children:[r.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),"Sem atrasos no período"]})]}),r.jsx(la,{columns:[{key:"faixa_dias",label:"Dias de Atraso",readOnly:!0},{key:"valor_atraso",label:"Valor em Atraso (R$)",placeholder:"0"},{key:"pct_valor",label:"% Valor",readOnly:!0,placeholder:"Auto"},{key:"qtd_clientes",label:"Qtd Clientes",placeholder:"0"},{key:"pct_clientes",label:"% Clientes",readOnly:!0,placeholder:"Auto"}],rows:c.atrasos,onChange:(h,I,w)=>X("atrasos",h,I,w)}),r.jsxs("div",{className:"border-t pt-4 mt-4",children:[r.jsx("h4",{className:"text-sm font-bold text-navy mb-2",children:"5.1 Abertura de Vencidos Acima de 180 Dias"}),r.jsx("p",{className:"text-xs text-gray-400 mb-2",children:"Detalhe os títulos vencidos há mais de 180 dias."})]}),r.jsx(la,{columns:[{key:"cnpj",label:"CNPJ",placeholder:"00.000.000/0000-00",type:"cnpj",cnpjLookupTarget:"razao_social"},{key:"razao_social",label:"Razão Social",placeholder:"Preenchido automaticamente"},{key:"data_emissao",label:"Emissão",placeholder:"dd/mm/aaaa"},{key:"data_vencimento",label:"Vencimento",placeholder:"dd/mm/aaaa"},{key:"valor",label:"Valor (R$)",placeholder:"Valor"}],rows:c.atrasosDetalhados,onChange:(h,I,w)=>X("atrasosDetalhados",h,I,w),onAdd:()=>J("atrasosDetalhados",{razao_social:"",cnpj:"",data_emissao:"",data_vencimento:"",valor:""}),onRemove:h=>H("atrasosDetalhados",h),addLabel:"Adicionar título vencido"})]}),l===5&&r.jsxs("div",{className:"space-y-4",children:[r.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"6. Amostra de Compradores"}),r.jsx("p",{className:"text-xs text-gray-400",children:"Informar até 20 compradores — maiores, médios e menores. Valores em R$."}),r.jsx(la,{columns:[{key:"cnpj_codigo_fiscal",label:"CNPJ *",placeholder:"00.000.000/0000-00",type:"cnpj",cnpjLookupTarget:"razao_social",required:!0},{key:"razao_social",label:"Razão Social",placeholder:"Preenchido automaticamente"},{key:"faturamento_anual",label:"Fat. Anual (R$)",placeholder:"Valor"},{key:"limite_credito",label:"Limite Crédito (R$)",placeholder:"Valor"}],rows:c.amostraCompradores,onChange:(h,I,w)=>X("amostraCompradores",h,I,w),onAdd:()=>J("amostraCompradores",{cnpj_codigo_fiscal:"",razao_social:"",faturamento_anual:"",limite_credito:""}),onRemove:h=>H("amostraCompradores",h),errors:f,maxRows:20,addLabel:"Adicionar comprador"}),r.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"* Faturamento anual: valor faturado para cada comprador. ** Limite de crédito rotativo: maior valor acumulado de créditos a receber no ano."}),r.jsx(ou,{})]})]}),r.jsx(_u,{step:l,totalSteps:cn.length,stepNames:cn,onPrev:ge,onNext:ue,onSubmit:$e,loading:v,isReview:q})]})]})}function ou(){const s=[{num:"1",label:"Análise simultânea",text:"7 seguradoras consultadas ao mesmo tempo — Coface, Atradius, AVLA, Allianz Trade, AIG, CESCE e CHUBB",icon:r.jsx(r.Fragment,{children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})},{num:"2",label:"Comparativo técnico",text:"Nossa equipe negocia as melhores condições de cobertura, prêmio e serviço para o seu perfil",icon:r.jsx(r.Fragment,{children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})})},{num:"3",label:"Decisão estratégica",text:"Você recebe um comparativo exclusivo com recomendação técnica da Fairfield para a melhor escolha",icon:r.jsx(r.Fragment,{children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})})}];return r.jsxs("div",{className:"mt-6 rounded-2xl overflow-hidden border border-cobre/20 shadow-sm",children:[r.jsxs("div",{className:"bg-gradient-to-r from-navy to-[#0d1f3c] px-5 py-4 flex items-center gap-4",children:[r.jsx("div",{className:"w-14 h-14 bg-cobre/20 rounded-xl flex items-center justify-center flex-shrink-0",children:r.jsx("svg",{className:"w-8 h-8 text-cobre",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-[10px] font-bold text-cobre uppercase tracking-widest mb-0.5",children:"O que acontece depois?"}),r.jsx("h4",{className:"text-base sm:text-lg font-bold text-white leading-tight",children:"O SENTINEL destrava oportunidades para você vender mais com segurança"})]})]}),r.jsx("div",{className:"bg-white px-5 py-4 grid grid-cols-1 sm:grid-cols-3 gap-3",children:s.map(d=>r.jsxs("div",{className:"flex flex-col gap-2 bg-gray-50 rounded-xl p-3 border border-gray-100",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("svg",{className:"w-5 h-5 text-cobre flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.icon}),r.jsx("span",{className:"text-xs font-bold text-navy",children:d.label})]}),r.jsx("p",{className:"text-xs text-gray-600 leading-relaxed",children:d.text})]},d.num))}),r.jsxs("div",{className:"bg-green-50 border-t border-green-200 px-5 py-3 flex items-start gap-2",children:[r.jsx("svg",{className:"w-4 h-4 text-green-600 flex-shrink-0 mt-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),r.jsxs("p",{className:"text-sm text-green-700",children:[r.jsx("strong",{children:"Estudo totalmente gratuito."})," O SENTINEL atua como suporte adicional à sua área de análise de crédito — mitigando riscos e destravando oportunidades para você vender mais com segurança."]})]})]})}function un({icon:s,title:d,accent:l,children:m}){const c=l==="cobre"?"text-cobre bg-cobre/8":l==="green"?"text-green-600 bg-green-50":"text-navy bg-navy/5",p=l==="cobre"?"text-cobre":l==="green"?"text-green-700":"text-navy";return r.jsxs("div",{className:"rounded-xl border border-gray-100 overflow-hidden shadow-sm",children:[r.jsxs("div",{className:`px-4 py-2.5 flex items-center gap-2 ${c}`,children:[r.jsx("svg",{className:"w-4 h-4 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s}),r.jsx("h4",{className:`text-xs font-bold uppercase tracking-wide ${p}`,children:d})]}),r.jsx("div",{className:"bg-white divide-y divide-gray-50 px-4",children:m})]})}function Ca({label:s,value:d,highlight:l}){return!d||d==="—"||d==="undefined"||d.toString().trim()===""?null:r.jsxs("div",{className:"py-2 flex flex-wrap items-baseline gap-x-3 gap-y-0.5 min-h-[2rem]",children:[r.jsx("span",{className:"text-xs text-gray-400 font-medium w-28 flex-shrink-0",children:s}),r.jsx("span",{className:`text-sm flex-1 ${l?"font-bold text-navy":"text-gray-700"}`,children:d})]})}const Li="fairfield_intake_externo",mn=["Proponente","Faturamento","Destinos","Carteira","Perdas","Vencidos","Compradores"],jg=["Até 10.000","De 10.001 a 50.000","De 50.001 a 200.000","De 200.001 a 500.000","De 500.001 a 1.000.000","Acima de 1.000.001"];function tu(){return{proponente:{razao_social:"",cnpj:"",setor:"",faturamento_pct:"",uf:""},contato:{nome:"",email:"",telefone:""},coSeguradas:[{empresa:"",cnpj:"",setor:"",faturamento_pct:""}],historicoFaturamento:[{ano:"2022",faturamento:"",perdas:""},{ano:"2023",faturamento:"",perdas:""},{ano:"2024",faturamento:"",perdas:""},{ano:"Próximos 12 meses",faturamento:"",perdas:""}],condicoesVenda:{pct_vista:"",pct_prazo:"",prazo_medio_dias:"",prazo_maximo_dias:"",faturamento_desejado_seguro:""},destinosExportacao:{anos_exportando:"",asia_pct:"",europa_pct:"",america_sul_pct:"",america_norte_pct:"",america_central_pct:"",africa_oceania_pct:"",menor_limite:"",maior_limite:"",num_importadores:"",principais_paises:""},carteiraRecebiveis:jg.map(s=>({faixa:s,faturamento_total:"",pct_faturamento:"",num_clientes:"",pct_clientes:""})),maioresPerdas:[{importador:"",pais:"",exercicio:"",valor:"",motivo:""}],atrasos:[{faixa_dias:"Acima de 180 dias",valor_atraso:"",pct_valor:"",qtd_clientes:"",pct_clientes:""}],amostraCompradores:[{pais:"",razao_social:"",cnpj_codigo_fiscal:"",limite_credito:"",endereco:""}]}}function Cg(){const{user:s,updateProspectPhase:d}=Lr(),[l,m]=C.useState(0),[c,p]=C.useState(()=>{const h=localStorage.getItem(Li);return h?JSON.parse(h):tu()}),[f,g]=C.useState({}),[v,y]=C.useState(!1),[k,j]=C.useState(!1),[E,_]=C.useState(!1),[F,z]=C.useState(null),[L,O]=C.useState(null),[q,D]=C.useState(!1);C.useEffect(()=>{localStorage.setItem(Li,JSON.stringify(c))},[c]),C.useEffect(()=>{s&&d(s.email,"preenchendo_externo")},[]);function $(h,I,w){p(M=>({...M,[h]:{...M[h],[I]:w}})),g(M=>{const Q={...M};return delete Q[`${h}.${I}`],Q})}function X(h,I,w,M){p(Q=>{const W=[...Q[h]];if(W[I]={...W[I],[w]:M},h==="carteiraRecebiveis"&&(w==="faturamento_total"||w==="num_clientes")){const N=W.reduce((ae,oe)=>ae+(parseFloat(String(oe.faturamento_total).replace(/\./g,"").replace(",","."))||0),0),T=W.reduce((ae,oe)=>ae+(parseInt(String(oe.num_clientes).replace(/\D/g,""))||0),0);W.forEach((ae,oe)=>{const le=parseFloat(String(ae.faturamento_total).replace(/\./g,"").replace(",","."))||0,de=parseInt(String(ae.num_clientes).replace(/\D/g,""))||0;W[oe]={...W[oe],pct_faturamento:N>0?(le/N*100).toFixed(1):"",pct_clientes:T>0?(de/T*100).toFixed(1):""}})}return{...Q,[h]:W}})}function J(h,I){p(w=>({...w,[h]:[...w[h],{...I}]}))}function H(h,I){p(w=>({...w,[h]:w[h].filter((M,Q)=>Q!==I)}))}function ie(h){const I={};if(h===0&&(c.proponente.razao_social.trim()||(I["proponente.razao_social"]="Obrigatório"),c.proponente.cnpj.replace(/\D/g,"").length!==14&&(I["proponente.cnpj"]="CNPJ inválido"),c.proponente.setor.trim()||(I["proponente.setor"]="Obrigatório"),c.contato.nome.trim()||(I["contato.nome"]="Obrigatório"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.contato.email)||(I["contato.email"]="E-mail inválido")),h===6){const w=c.amostraCompradores.filter(M=>M.razao_social||M.limite_credito||M.pais);w.length===0?I.compradores="Informe pelo menos 1 importador":w.forEach((M,Q)=>{(!M.cnpj_codigo_fiscal||M.cnpj_codigo_fiscal.trim().length<3)&&(I[`comprador_cnpj_${Q}`]=`Código fiscal obrigatório para o importador ${Q+1}`)})}return g(I),Object.keys(I).length>0&&h===6&&ke.error("Preencha o código fiscal de todos os importadores informados"),Object.keys(I).length===0}function ue(){ie(l)&&m(h=>Math.min(h+1,mn.length-1))}function ge(){D(!1),m(h=>Math.max(h-1,0))}async function $e(h){h==="review"?ie(l)&&D(!0):(_(!0),window.scrollTo({top:0,behavior:"smooth"}))}async function _e(h){z(h),y(!0);try{const I={tipo:"externo",...c,seguradoras:[],icoverAnalysis:h},w=await Nr("/api/leads",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(I)});if(!w.sucesso)throw new Error(w.mensagem);O(w.data),j(!0),_(!1),localStorage.removeItem(Li),s&&d(s.email,"enviado_externo"),ke.success("Solicitação enviada com sucesso!")}catch(I){ke.error(I.message||"Erro ao enviar")}finally{y(!1)}}function Ee(){window.open("https://www.4score.com.br","_blank")}function Be(h){p(I=>({...I,proponente:{...I.proponente,razao_social:h.razao_social,uf:h.uf||I.proponente.uf}})),ke.success(`Empresa: ${h.razao_social}`)}return k?r.jsx(Tu,{result:L,tipo:"externo",onReset:()=>{j(!1),_(!1),z(null),m(0),p(tu()),O(null),D(!1)}}):E?r.jsx("div",{className:"max-w-5xl mx-auto px-4 py-8",children:r.jsx(Bu,{formData:c,tipo:"externo",onComplete:_e,onDecline:Ee})}):r.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[r.jsxs("div",{className:"text-center mb-6",children:[r.jsx("h2",{className:"text-3xl font-bold text-navy",children:"Crédito Externo"}),r.jsx("p",{className:"text-cobre text-sm font-semibold",children:"Operações de Exportação — Valores em US$"})]}),!q&&r.jsx(Fu,{step:l,steps:mn}),!q&&r.jsx(lg,{step:l}),r.jsxs("div",{className:"card",children:[q?r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"bg-gradient-to-r from-navy to-[#0d1f3c] rounded-xl px-5 py-4 flex items-center gap-4",children:[r.jsx("div",{className:"w-12 h-12 bg-green-400/20 rounded-xl flex items-center justify-center flex-shrink-0",children:r.jsx("svg",{className:"w-7 h-7 text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-[10px] font-bold text-green-400 uppercase tracking-widest mb-0.5",children:"Quase lá!"}),r.jsx("h3",{className:"text-base sm:text-lg font-bold text-white leading-tight",children:"Revisão Final dos Dados"}),r.jsx("p",{className:"text-xs text-white/60",children:"Confirme as informações antes de enviar para as 7 seguradoras"})]})]}),r.jsxs(pn,{accent:"navy",title:"Proponente",icon:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"}),children:[r.jsx(ia,{label:"Empresa",value:c.proponente.razao_social,highlight:!0}),r.jsx(ia,{label:"CNPJ",value:c.proponente.cnpj}),r.jsx(ia,{label:"Atividade",value:c.proponente.setor}),r.jsx(ia,{label:"Anos exportando",value:c.destinosExportacao.anos_exportando}),r.jsx(ia,{label:"Contato",value:c.contato.nome?`${c.contato.nome} · ${c.contato.email}`:""}),c.coSeguradas.filter(h=>h.empresa).length>0&&r.jsx(ia,{label:"Co-seguradas",value:c.coSeguradas.filter(h=>h.empresa).map(h=>h.empresa).join(" · ")})]}),r.jsxs(pn,{accent:"cobre",title:"Faturamento e Condições (US$)",icon:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}),children:[c.historicoFaturamento.map(h=>r.jsx(ia,{label:h.ano,value:h.faturamento?`US$ ${h.faturamento} · Perdas: ${h.perdas||"0"}`:""},h.ano)),r.jsx(ia,{label:"Fat. desejado seguro",value:c.condicoesVenda.faturamento_desejado_seguro?`US$ ${c.condicoesVenda.faturamento_desejado_seguro}`:"",highlight:!0}),r.jsx(ia,{label:"Condições",value:[c.condicoesVenda.pct_vista&&`Vista ${c.condicoesVenda.pct_vista}%`,c.condicoesVenda.pct_prazo&&`Prazo ${c.condicoesVenda.pct_prazo}%`,c.condicoesVenda.prazo_medio_dias&&`Médio ${c.condicoesVenda.prazo_medio_dias}d`].filter(Boolean).join(" · ")})]}),(c.destinosExportacao.asia_pct||c.destinosExportacao.europa_pct||c.destinosExportacao.america_sul_pct||c.destinosExportacao.principais_paises)&&r.jsxs(pn,{accent:"navy",title:"Destinos de Exportação",icon:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}),children:[r.jsx(ia,{label:"Regiões",value:[c.destinosExportacao.asia_pct&&`Ásia ${c.destinosExportacao.asia_pct}%`,c.destinosExportacao.europa_pct&&`Europa ${c.destinosExportacao.europa_pct}%`,c.destinosExportacao.america_sul_pct&&`Am. Sul ${c.destinosExportacao.america_sul_pct}%`,c.destinosExportacao.america_norte_pct&&`Am. Norte ${c.destinosExportacao.america_norte_pct}%`,c.destinosExportacao.africa_oceania_pct&&`África/Oceania ${c.destinosExportacao.africa_oceania_pct}%`].filter(Boolean).join(" · ")}),r.jsx(ia,{label:"Principais países",value:c.destinosExportacao.principais_paises}),r.jsx(ia,{label:"Nº importadores",value:c.destinosExportacao.num_importadores})]}),c.amostraCompradores.filter(h=>h.razao_social).length>0&&r.jsx(pn,{accent:"cobre",title:"Amostra de Compradores",icon:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"}),children:c.amostraCompradores.filter(h=>h.razao_social).map((h,I)=>r.jsx(ia,{label:h.razao_social,value:[h.pais,h.cnpj_codigo_fiscal&&`Tax ID: ${h.cnpj_codigo_fiscal}`,h.limite_credito&&`Lim: US$ ${h.limite_credito}`].filter(Boolean).join(" · ")},I))}),r.jsx(nu,{})]}):r.jsxs(r.Fragment,{children:[l===0&&r.jsxs("div",{className:"space-y-4",children:[r.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"1. Dados do Proponente"}),r.jsx(Ou,{value:c.proponente.cnpj,onChange:h=>$("proponente","cnpj",h),onResult:Be,error:f["proponente.cnpj"]}),r.jsx(pe,{label:"Razão Social",value:c.proponente.razao_social,onChange:h=>$("proponente","razao_social",h),required:!0,error:f["proponente.razao_social"]}),r.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[r.jsx(pe,{label:"Atividade da Empresa",value:c.proponente.setor,onChange:h=>$("proponente","setor",h),required:!0,error:f["proponente.setor"]}),r.jsx(pe,{label:"Faturamento Empresa (%)",value:c.proponente.faturamento_pct,onChange:h=>$("proponente","faturamento_pct",h),placeholder:"100%"})]}),r.jsx(pe,{label:"Há Quantos Anos Exporta",value:c.destinosExportacao.anos_exportando,onChange:h=>$("destinosExportacao","anos_exportando",h),placeholder:"Ex: 5"}),r.jsx("div",{className:"border-t pt-4 mt-4",children:r.jsx("h4",{className:"text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide",children:"Contato Responsável"})}),r.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[r.jsx(pe,{label:"Nome",value:c.contato.nome,onChange:h=>$("contato","nome",h),required:!0,error:f["contato.nome"]}),r.jsx(pe,{label:"E-mail",value:c.contato.email,onChange:h=>$("contato","email",h),type:"email",required:!0,error:f["contato.email"]}),r.jsx(pe,{label:"Telefone",value:c.contato.telefone,onChange:h=>$("contato","telefone",Oi(h)),placeholder:"(00) 00000-0000"})]}),r.jsx("div",{className:"border-t pt-4 mt-4",children:r.jsx("h4",{className:"text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide",children:"Co-Seguradas (opcional)"})}),r.jsx(la,{columns:[{key:"cnpj",label:"CNPJ",type:"cnpj",cnpjLookupTarget:"empresa",placeholder:"00.000.000/0000-00"},{key:"empresa",label:"Empresa",placeholder:"Razão Social"},{key:"setor",label:"Setor"},{key:"faturamento_pct",label:"Fat. %",placeholder:"%"}],rows:c.coSeguradas,onChange:(h,I,w)=>X("coSeguradas",h,I,w),onAdd:()=>J("coSeguradas",{empresa:"",cnpj:"",setor:"",faturamento_pct:""}),onRemove:h=>H("coSeguradas",h),maxRows:3})]}),l===1&&r.jsxs("div",{className:"space-y-4",children:[r.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"2. Histórico de Faturamento e Perdas"}),r.jsx("p",{className:"text-xs text-gray-400",children:"Valores em US$ (dólares americanos)."}),r.jsx(la,{columns:[{key:"ano",label:"Período",readOnly:!0},{key:"faturamento",label:"Faturamento (US$)",placeholder:"Ex: 2,000,000"},{key:"perdas",label:"Perdas (US$)",placeholder:"Ex: 50,000"}],rows:c.historicoFaturamento,onChange:(h,I,w)=>X("historicoFaturamento",h,I,w)}),(()=>{const h=c.historicoFaturamento.filter(N=>N.ano!=="Próximos 12 meses"),I=h.reduce((N,T)=>N+(parseFloat(String(T.faturamento).replace(/[^0-9.]/g,""))||0),0),w=h.reduce((N,T)=>N+(parseFloat(String(T.perdas).replace(/[^0-9.]/g,""))||0),0),M=I>0?w/I*100:null;if(M===null)return null;const Q=M<2?"text-green-700 bg-green-50 border-green-200":M<5?"text-amber-700 bg-amber-50 border-amber-200":"text-red-700 bg-red-50 border-red-200",W=M<2?"Ótima sinistralidade":M<5?"Sinistralidade moderada":"Atenção: sinistralidade elevada";return r.jsxs("div",{className:`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-semibold ${Q}`,children:[r.jsx("svg",{className:"w-4 h-4 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),"Sinistralidade histórica: ",r.jsxs("strong",{children:[M.toFixed(2),"%"]})," — ",W]})})(),r.jsx("div",{className:"border-t pt-4 mt-4",children:r.jsx("h4",{className:"text-sm font-bold text-navy mb-3",children:"2.1 Faturamento Anual Desejado para o Seguro"})}),r.jsx(pe,{label:"Valor (US$)",value:c.condicoesVenda.faturamento_desejado_seguro,onChange:h=>$("condicoesVenda","faturamento_desejado_seguro",h),placeholder:"Ex: 5,000,000",hint:"Sobre este faturamento estimado incide o custo da apólice."}),r.jsx("div",{className:"border-t pt-4 mt-4",children:r.jsx("h4",{className:"text-sm font-bold text-navy mb-3",children:"3. Distribuição dos Prazos de Venda"})}),r.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[r.jsx(pe,{label:"À Vista (%)",value:c.condicoesVenda.pct_vista,onChange:h=>{$("condicoesVenda","pct_vista",h);const I=parseFloat(h)||0;I>0&&I<=100&&!c.condicoesVenda.pct_prazo&&$("condicoesVenda","pct_prazo",String(100-I))},placeholder:"%",hint:"Incluindo vendas com Carta de Crédito"}),r.jsx(pe,{label:"À Prazo (%)",value:c.condicoesVenda.pct_prazo,onChange:h=>$("condicoesVenda","pct_prazo",h),placeholder:"%",hint:(()=>{const h=parseFloat(c.condicoesVenda.pct_vista)||0,I=parseFloat(c.condicoesVenda.pct_prazo)||0,w=h+I;return h>0&&I>0&&Math.abs(w-100)>.1?`⚠ Vista + Prazo = ${w.toFixed(0)}% (esperado 100%)`:null})()}),r.jsx(pe,{label:"Prazo Médio Crédito (dias)",value:c.condicoesVenda.prazo_medio_dias,onChange:h=>$("condicoesVenda","prazo_medio_dias",h),placeholder:"Ex: 90"}),r.jsx(pe,{label:"Prazo Máximo Crédito (dias)",value:c.condicoesVenda.prazo_maximo_dias,onChange:h=>$("condicoesVenda","prazo_maximo_dias",h),placeholder:"Ex: 180"})]})]}),l===2&&r.jsxs("div",{className:"space-y-4",children:[r.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"4. Principais Destinos de Exportação"}),r.jsx("p",{className:"text-xs text-gray-400 mb-2",children:"Distribua o percentual de faturamento por região."}),r.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:[r.jsx(pe,{label:"Ásia (%)",value:c.destinosExportacao.asia_pct,onChange:h=>$("destinosExportacao","asia_pct",h),placeholder:"%"}),r.jsx(pe,{label:"Europa (%)",value:c.destinosExportacao.europa_pct,onChange:h=>$("destinosExportacao","europa_pct",h),placeholder:"%"}),r.jsx(pe,{label:"América do Sul (%)",value:c.destinosExportacao.america_sul_pct,onChange:h=>$("destinosExportacao","america_sul_pct",h),placeholder:"%"}),r.jsx(pe,{label:"América do Norte (%)",value:c.destinosExportacao.america_norte_pct,onChange:h=>$("destinosExportacao","america_norte_pct",h),placeholder:"%"}),r.jsx(pe,{label:"América Central (%)",value:c.destinosExportacao.america_central_pct,onChange:h=>$("destinosExportacao","america_central_pct",h),placeholder:"%"}),r.jsx(pe,{label:"África / Oceania (%)",value:c.destinosExportacao.africa_oceania_pct,onChange:h=>$("destinosExportacao","africa_oceania_pct",h),placeholder:"%"})]}),r.jsx(pe,{label:"Principais Países Importadores",value:c.destinosExportacao.principais_paises,onChange:h=>$("destinosExportacao","principais_paises",h),placeholder:"Ex: EUA, Argentina, China, Alemanha"}),r.jsx("div",{className:"border-t pt-4 mt-4",children:r.jsx("h4",{className:"text-sm font-bold text-navy mb-3",children:"4.1 Informações Adicionais"})}),r.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[r.jsx(pe,{label:"Menor Limite de Crédito Individual (US$)",value:c.destinosExportacao.menor_limite,onChange:h=>$("destinosExportacao","menor_limite",h),placeholder:"Ex: 10,000"}),r.jsx(pe,{label:"Maior Limite de Crédito Individual (US$)",value:c.destinosExportacao.maior_limite,onChange:h=>$("destinosExportacao","maior_limite",h),placeholder:"Ex: 500,000"}),r.jsx(pe,{label:"Número Total de Importadores",value:c.destinosExportacao.num_importadores,onChange:h=>$("destinosExportacao","num_importadores",h),placeholder:"Ex: 25"})]})]}),l===3&&r.jsxs("div",{className:"space-y-4",children:[r.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"4.2 Distribuição da Carteira de Recebíveis"}),r.jsx("p",{className:"text-xs text-gray-400",children:"Excluindo vendas para coligadas, PF, empresas públicas, à vista ou antecipadas."}),r.jsx(la,{columns:[{key:"faixa",label:"Faixa de Valor (US$)",readOnly:!0},{key:"faturamento_total",label:"Fat. Total (US$)",placeholder:"Valor"},{key:"pct_faturamento",label:"% Fat.",readOnly:!0,placeholder:"Auto"},{key:"num_clientes",label:"Nº Clientes",placeholder:"Qtd"},{key:"pct_clientes",label:"% Clientes",readOnly:!0,placeholder:"Auto"}],rows:c.carteiraRecebiveis,onChange:(h,I,w)=>X("carteiraRecebiveis",h,I,w)})]}),l===4&&r.jsxs("div",{className:"space-y-4",children:[r.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"5. Maiores Perdas"}),r.jsx("p",{className:"text-xs text-gray-400",children:"Indicar as 5 maiores nos últimos 3 anos. Motivo: Mora, Falência, ações judiciais/extrajudiciais."}),r.jsx("div",{className:"flex justify-end",children:r.jsxs("button",{type:"button",onClick:()=>p(h=>({...h,maioresPerdas:[{importador:"Sem perdas neste período",pais:"—",exercicio:"—",valor:"0",motivo:"—"}]})),className:"text-xs px-3 py-1.5 rounded-lg bg-green-50 text-green-700 border border-green-200 font-semibold hover:bg-green-100 transition-colors flex items-center gap-1.5",children:[r.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),"Sem perdas neste período"]})}),r.jsx(la,{columns:[{key:"importador",label:"Importador",placeholder:"Nome da empresa"},{key:"pais",label:"País",placeholder:"País"},{key:"exercicio",label:"Exercício",placeholder:"2024"},{key:"valor",label:"Montante (US$)",placeholder:"Valor"},{key:"motivo",label:"Motivo",placeholder:"Mora, Falência..."}],rows:c.maioresPerdas,onChange:(h,I,w)=>X("maioresPerdas",h,I,w),onAdd:()=>J("maioresPerdas",{importador:"",pais:"",exercicio:"",valor:"",motivo:""}),onRemove:h=>H("maioresPerdas",h),maxRows:5})]}),l===5&&r.jsxs("div",{className:"space-y-4",children:[r.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"6. Dívidas Vencidas Acima de 180 Dias"}),r.jsx("p",{className:"text-xs text-gray-400",children:"Excluindo vendas para coligadas, PF, empresas públicas, à vista ou antecipadas."}),r.jsx("div",{className:"flex justify-end",children:r.jsxs("button",{type:"button",onClick:()=>p(h=>({...h,atrasos:[{faixa_dias:"Acima de 180 dias",valor_atraso:"0",qtd_clientes:"0"}]})),className:"text-xs px-3 py-1.5 rounded-lg bg-green-50 text-green-700 border border-green-200 font-semibold hover:bg-green-100 transition-colors flex items-center gap-1.5",children:[r.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),"Sem atrasos no período"]})}),r.jsx(la,{columns:[{key:"faixa_dias",label:"Período",readOnly:!0},{key:"valor_atraso",label:"Valor em Atraso (US$)",placeholder:"Valor"},{key:"qtd_clientes",label:"Qtd Clientes em Atraso",placeholder:"Qtd"}],rows:c.atrasos,onChange:(h,I,w)=>X("atrasos",h,I,w)})]}),l===6&&r.jsxs("div",{className:"space-y-4",children:[r.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"7. Amostra de Compradores"}),r.jsx("p",{className:"text-xs text-gray-400",children:"Informar até 10 compradores — maiores, médios e menores. Valores em US$."}),r.jsx(la,{columns:[{key:"pais",label:"País",placeholder:"País"},{key:"razao_social",label:"Razão Social",placeholder:"Nome"},{key:"cnpj_codigo_fiscal",label:"Código Fiscal *",placeholder:"Tax ID",required:!0},{key:"limite_credito",label:"Limite Crédito (US$)",placeholder:"Valor"},{key:"endereco",label:"Endereço Completo",placeholder:"Rua, cidade, país"}],rows:c.amostraCompradores,onChange:(h,I,w)=>X("amostraCompradores",h,I,w),onAdd:()=>J("amostraCompradores",{pais:"",razao_social:"",cnpj_codigo_fiscal:"",limite_credito:"",endereco:""}),onRemove:h=>H("amostraCompradores",h),maxRows:10,addLabel:"Adicionar importador",errors:f}),r.jsx(nu,{})]})]}),r.jsx(_u,{step:l,totalSteps:mn.length,stepNames:mn,onPrev:ge,onNext:ue,onSubmit:$e,loading:v,isReview:q})]})]})}function nu(){const s=[{num:"1",label:"Análise simultânea",text:"7 seguradoras consultadas ao mesmo tempo — Coface, Atradius, AVLA, Allianz Trade, AIG, CESCE e CHUBB",icon:r.jsx(r.Fragment,{children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})},{num:"2",label:"Comparativo técnico",text:"Nossa equipe negocia as melhores condições de cobertura, prêmio e serviço para o seu perfil de exportação",icon:r.jsx(r.Fragment,{children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})})},{num:"3",label:"Decisão estratégica",text:"Você recebe um comparativo exclusivo com recomendação técnica da Fairfield para a melhor escolha",icon:r.jsx(r.Fragment,{children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})})}];return r.jsxs("div",{className:"mt-2 rounded-2xl overflow-hidden border border-cobre/20 shadow-sm",children:[r.jsxs("div",{className:"bg-gradient-to-r from-navy to-[#0d1f3c] px-5 py-4 flex items-center gap-4",children:[r.jsx("div",{className:"w-14 h-14 bg-cobre/20 rounded-xl flex items-center justify-center flex-shrink-0",children:r.jsx("svg",{className:"w-8 h-8 text-cobre",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-[10px] font-bold text-cobre uppercase tracking-widest mb-0.5",children:"O que acontece depois?"}),r.jsx("h4",{className:"text-base sm:text-lg font-bold text-white leading-tight",children:"O SENTINEL destrava oportunidades para você exportar mais com segurança"})]})]}),r.jsx("div",{className:"bg-white px-5 py-4 grid grid-cols-1 sm:grid-cols-3 gap-3",children:s.map(d=>r.jsxs("div",{className:"flex flex-col gap-2 bg-gray-50 rounded-xl p-3 border border-gray-100",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("svg",{className:"w-5 h-5 text-cobre flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.icon}),r.jsx("span",{className:"text-xs font-bold text-navy",children:d.label})]}),r.jsx("p",{className:"text-xs text-gray-600 leading-relaxed",children:d.text})]},d.num))}),r.jsxs("div",{className:"bg-green-50 border-t border-green-200 px-5 py-3 flex items-start gap-2",children:[r.jsx("svg",{className:"w-4 h-4 text-green-600 flex-shrink-0 mt-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),r.jsxs("p",{className:"text-sm text-green-700",children:[r.jsx("strong",{children:"Estudo totalmente gratuito."})," O SENTINEL atua como suporte adicional à sua área de análise de crédito — mitigando riscos e destravando oportunidades para você vender mais com segurança."]})]})]})}function pn({icon:s,title:d,accent:l,children:m}){const c=l==="cobre"?"text-cobre bg-cobre/8":"text-navy bg-navy/5",p=l==="cobre"?"text-cobre":"text-navy";return r.jsxs("div",{className:"rounded-xl border border-gray-100 overflow-hidden shadow-sm",children:[r.jsxs("div",{className:`px-4 py-2.5 flex items-center gap-2 ${c}`,children:[r.jsx("svg",{className:"w-4 h-4 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s}),r.jsx("h4",{className:`text-xs font-bold uppercase tracking-wide ${p}`,children:d})]}),r.jsx("div",{className:"bg-white divide-y divide-gray-50 px-4",children:m})]})}function ia({label:s,value:d,highlight:l}){return!d||d.toString().trim()===""?null:r.jsxs("div",{className:"py-2 flex flex-wrap items-baseline gap-x-3 gap-y-0.5 min-h-[2rem]",children:[r.jsx("span",{className:"text-xs text-gray-400 font-medium w-28 flex-shrink-0",children:s}),r.jsx("span",{className:`text-sm flex-1 ${l?"font-bold text-navy":"text-gray-700"}`,children:d})]})}const Sg="/sentinel-fairfield/",wg={cadastro:"bg-gray-100 text-gray-700",verificado:"bg-blue-100 text-blue-700",nda_aceito:"bg-purple-100 text-purple-700",preenchendo_interno:"bg-amber-100 text-amber-700",preenchendo_externo:"bg-amber-100 text-amber-700",enviado_interno:"bg-green-100 text-green-700",enviado_externo:"bg-green-100 text-green-700"},su={cadastro:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",verificado:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",nda_aceito:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",preenchendo_interno:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",preenchendo_externo:"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",enviado_interno:"M5 13l4 4L19 7",enviado_externo:"M5 13l4 4L19 7"};function Ng(){const{getProspects:s,getAllUsers:d}=Lr(),[l,m]=C.useState([]),[c,p]=C.useState("todos"),[f,g]=C.useState(""),[v,y]=C.useState("pipeline"),[k,j]=C.useState("prospects"),[E,_]=C.useState([]),[F,z]=C.useState({nome:"",email:""}),[L,O]=C.useState(!1);C.useEffect(()=>{const w=s();m(w.sort((M,Q)=>new Date(Q.updatedAt)-new Date(M.updatedAt))),q()},[]);async function q(){try{const M=await(await fetch("/api/admin/comerciais")).json();M.sucesso&&_(M.data)}catch{}}async function D(w){if(w.preventDefault(),!(!F.nome||!F.email)){O(!0);try{const Q=await(await fetch("/api/admin/comerciais",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(F)})).json();Q.sucesso?(ke.success("Comercial adicionado!"),z({nome:"",email:""}),q()):ke.error(Q.mensagem||"Erro ao adicionar")}catch{ke.error("Erro de conexão")}finally{O(!1)}}}async function $(w){try{await fetch(`/api/admin/comerciais/${w}`,{method:"PUT"}),q()}catch{ke.error("Erro ao atualizar")}}async function X(w){try{await fetch(`/api/admin/comerciais/${w}`,{method:"DELETE"}),ke.success("Removido"),q()}catch{ke.error("Erro ao remover")}}const J=l.length,H=l.filter(w=>w.fase!=="cadastro").length,ie=l.filter(w=>!["cadastro","verificado"].includes(w.fase)).length,ue=l.filter(w=>w.fase.startsWith("preenchendo")).length,ge=l.filter(w=>w.fase.startsWith("enviado")).length,$e=J>0?(ge/J*100).toFixed(1):"0",_e=[{value:"todos",label:"Todos"},{value:"cadastro",label:"Cadastro"},{value:"verificado",label:"Verificado"},{value:"nda_aceito",label:"NDA Aceito"},{value:"preenchendo",label:"Preenchendo"},{value:"enviado",label:"Enviado"}],Ee=l.filter(w=>{var M,Q,W;if(c!=="todos"&&(c==="preenchendo"&&!w.fase.startsWith("preenchendo")||c==="enviado"&&!w.fase.startsWith("enviado")||!["preenchendo","enviado","todos"].includes(c)&&w.fase!==c))return!1;if(f){const N=f.toLowerCase();return((M=w.nome)==null?void 0:M.toLowerCase().includes(N))||((Q=w.empresa)==null?void 0:Q.toLowerCase().includes(N))||((W=w.email)==null?void 0:W.toLowerCase().includes(N))}return!0}),Be=[{key:"cadastro",title:"Cadastro",color:"border-gray-300",items:l.filter(w=>w.fase==="cadastro")},{key:"verificado",title:"Verificado",color:"border-blue-400",items:l.filter(w=>w.fase==="verificado")},{key:"nda_aceito",title:"NDA Aceito",color:"border-purple-400",items:l.filter(w=>w.fase==="nda_aceito")},{key:"preenchendo",title:"Preenchendo",color:"border-amber-400",items:l.filter(w=>w.fase.startsWith("preenchendo"))},{key:"enviado",title:"Enviado",color:"border-green-400",items:l.filter(w=>w.fase.startsWith("enviado"))}];function h(w){return w?new Date(w).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"—"}function I(w){return w?Math.floor((Date.now()-new Date(w).getTime())/(1e3*60*60*24)):0}return r.jsxs("div",{className:"max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8 space-y-6",children:[r.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-3",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("img",{src:`${Sg}logos/sentinel.png`,alt:"",className:"h-10 w-10 object-contain"}),r.jsxs("div",{children:[r.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-navy",children:"Dashboard Admin"}),r.jsx("p",{className:"text-xs text-gray-400",children:"Painel de acompanhamento de prospects"})]})]}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("button",{onClick:()=>j("prospects"),className:`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${k==="prospects"?"bg-navy text-white border-navy":"border-gray-300 text-gray-600 hover:border-navy"}`,children:"Prospects"}),r.jsxs("button",{onClick:()=>j("comerciais"),className:`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${k==="comerciais"?"bg-cobre text-white border-cobre":"border-gray-300 text-gray-600 hover:border-cobre"}`,children:["Comerciais ",E.length>0&&r.jsx("span",{className:"ml-1 bg-white/30 rounded-full px-1",children:E.length})]}),k==="prospects"&&r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>y("pipeline"),className:`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${v==="pipeline"?"bg-navy text-white border-navy":"border-gray-300 text-gray-600 hover:border-navy"}`,children:"Pipeline"}),r.jsx("button",{onClick:()=>y("kanban"),className:`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${v==="kanban"?"bg-navy text-white border-navy":"border-gray-300 text-gray-600 hover:border-navy"}`,children:"Kanban"}),r.jsx("button",{onClick:()=>m(s().sort((w,M)=>new Date(M.updatedAt)-new Date(w.updatedAt))),className:"px-3 py-1.5 rounded-lg text-xs font-semibold border border-gray-300 text-gray-600 hover:border-navy transition-all",children:"Atualizar"})]})]})]}),k==="comerciais"&&r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"card p-5",children:[r.jsx("h3",{className:"text-sm font-bold text-navy mb-1",children:"Comerciais Responsáveis"}),r.jsx("p",{className:"text-xs text-gray-400 mb-4",children:"Estes contatos recebem cópia (CC) de cada nova cotação submetida no SENTINEL."}),r.jsxs("form",{onSubmit:D,className:"flex gap-2 mb-4 flex-wrap",children:[r.jsx("input",{className:"input-field flex-1 min-w-[160px]",placeholder:"Nome",value:F.nome,onChange:w=>z(M=>({...M,nome:w.target.value}))}),r.jsx("input",{className:"input-field flex-1 min-w-[200px]",placeholder:"E-mail",type:"email",value:F.email,onChange:w=>z(M=>({...M,email:w.target.value}))}),r.jsx("button",{type:"submit",disabled:L,className:"btn-primary px-4 py-2 text-sm whitespace-nowrap",children:L?"...":"+ Adicionar"})]}),E.length===0?r.jsx("p",{className:"text-xs text-gray-400 text-center py-6",children:"Nenhum comercial cadastrado. Adicione acima."}):r.jsxs("table",{className:"w-full text-sm",children:[r.jsx("thead",{children:r.jsxs("tr",{className:"bg-navy text-white text-xs",children:[r.jsx("th",{className:"px-3 py-2 text-left rounded-tl-lg",children:"Nome"}),r.jsx("th",{className:"px-3 py-2 text-left",children:"E-mail"}),r.jsx("th",{className:"px-3 py-2 text-center",children:"Status"}),r.jsx("th",{className:"px-3 py-2 rounded-tr-lg"})]})}),r.jsx("tbody",{children:E.map(w=>r.jsxs("tr",{className:"border-t border-gray-100 hover:bg-gray-50",children:[r.jsx("td",{className:"px-3 py-2.5 font-medium text-navy",children:w.nome}),r.jsx("td",{className:"px-3 py-2.5 text-gray-600",children:w.email}),r.jsx("td",{className:"px-3 py-2.5 text-center",children:r.jsx("button",{onClick:()=>$(w.id),className:`text-xs px-2 py-0.5 rounded-full font-semibold ${w.ativo?"bg-green-100 text-green-700":"bg-gray-100 text-gray-500"}`,children:w.ativo?"Ativo":"Inativo"})}),r.jsx("td",{className:"px-3 py-2.5 text-right",children:r.jsx("button",{onClick:()=>X(w.id),className:"text-red-400 hover:text-red-600 text-xs",children:"Remover"})})]},w.id))})]})]}),r.jsx("div",{className:"card p-4 border border-cobre/20 bg-cobre/5",children:r.jsxs("p",{className:"text-xs text-gray-600",children:[r.jsx("strong",{className:"text-cobre",children:"Como funciona:"})," A cada nova cotação enviada pelo SENTINEL, o email principal (broering.gomes@gmail.com) recebe o relatório completo em PDF + planilhas Excel. Os comerciais cadastrados aqui recebem cópia automática (CC)."]})})]}),k==="prospects"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3",children:[r.jsx(ao,{label:"Total Prospects",value:J,icon:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",color:"text-navy",bg:"bg-navy/5"}),r.jsx(ao,{label:"Verificados",value:H,icon:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",color:"text-blue-600",bg:"bg-blue-50"}),r.jsx(ao,{label:"NDA Aceito",value:ie,icon:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",color:"text-purple-600",bg:"bg-purple-50"}),r.jsx(ao,{label:"Preenchendo",value:ue,icon:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",color:"text-amber-600",bg:"bg-amber-50"}),r.jsx(ao,{label:"Enviados",value:ge,icon:"M5 13l4 4L19 7",color:"text-green-600",bg:"bg-green-50"}),r.jsx(ao,{label:"Conversao",value:`${$e}%`,icon:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",color:"text-cobre",bg:"bg-cobre/5"})]}),r.jsxs("div",{className:"card",children:[r.jsx("h3",{className:"text-sm font-bold text-navy mb-4",children:"Funil de Conversao"}),r.jsx("div",{className:"space-y-2",children:[{label:"Cadastro",count:J,color:"bg-gray-400"},{label:"Verificado",count:H,color:"bg-blue-500"},{label:"NDA Aceito",count:ie,color:"bg-purple-500"},{label:"Preenchendo",count:ue,color:"bg-amber-500"},{label:"Enviado",count:ge,color:"bg-green-500"}].map(w=>r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("span",{className:"text-xs text-gray-500 w-24 text-right",children:w.label}),r.jsx("div",{className:"flex-1 h-7 bg-gray-100 rounded-full overflow-hidden",children:r.jsx("div",{className:`h-full ${w.color} rounded-full transition-all duration-700 flex items-center justify-end pr-2`,style:{width:`${J>0?Math.max(3,w.count/J*100):0}%`},children:w.count>0&&r.jsx("span",{className:"text-white text-[10px] font-bold",children:w.count})})}),r.jsxs("span",{className:"text-xs font-bold text-navy w-12 text-right",children:[J>0?(w.count/J*100).toFixed(0):0,"%"]})]},w.label))})]}),r.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[r.jsxs("div",{className:"relative flex-1 max-w-xs",children:[r.jsx("svg",{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),r.jsx("input",{className:"input-field pl-9 py-2 text-sm",placeholder:"Buscar por nome, empresa ou e-mail...",value:f,onChange:w=>g(w.target.value)})]}),r.jsx("div",{className:"flex gap-1.5 flex-wrap",children:_e.map(w=>r.jsx("button",{onClick:()=>p(w.value),className:`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${c===w.value?"bg-navy text-white border-navy":"border-gray-200 text-gray-500 hover:border-navy"}`,children:w.label},w.value))})]}),v==="kanban"?r.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-5 gap-3",children:Be.map(w=>r.jsxs("div",{className:`bg-gray-50 rounded-xl p-3 border-t-4 ${w.color}`,children:[r.jsxs("div",{className:"flex items-center justify-between mb-3",children:[r.jsx("h4",{className:"text-xs font-bold text-navy",children:w.title}),r.jsx("span",{className:"text-xs font-bold bg-white rounded-full w-6 h-6 flex items-center justify-center text-navy shadow-sm",children:w.items.length})]}),r.jsxs("div",{className:"space-y-2 max-h-96 overflow-y-auto",children:[w.items.map(M=>r.jsxs("div",{className:"bg-white rounded-lg p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow",children:[r.jsx("p",{className:"text-xs font-bold text-navy truncate",children:M.empresa}),r.jsx("p",{className:"text-[10px] text-gray-500 truncate",children:M.nome}),r.jsx("p",{className:"text-[10px] text-gray-400 mt-1",children:h(M.updatedAt)})]},M.id)),w.items.length===0&&r.jsx("p",{className:"text-[10px] text-gray-400 text-center py-4",children:"Nenhum prospect"})]})]},w.key))}):r.jsx("div",{className:"overflow-x-auto",children:Ee.length===0?r.jsxs("div",{className:"card text-center py-12",children:[r.jsx("svg",{className:"w-12 h-12 text-gray-300 mx-auto mb-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"})}),r.jsx("p",{className:"text-gray-400 text-sm",children:"Nenhum prospect encontrado"}),r.jsx("p",{className:"text-gray-300 text-xs mt-1",children:"Os prospects aparecerão aqui conforme acessarem o sistema"})]}):r.jsxs("table",{className:"w-full bg-white rounded-xl shadow-sm border border-gray-100",children:[r.jsx("thead",{children:r.jsxs("tr",{className:"bg-navy text-white text-left text-xs",children:[r.jsx("th",{className:"px-4 py-3 rounded-tl-xl",children:"Empresa"}),r.jsx("th",{className:"px-4 py-3",children:"Contato"}),r.jsx("th",{className:"px-4 py-3",children:"E-mail"}),r.jsx("th",{className:"px-4 py-3",children:"Telefone"}),r.jsx("th",{className:"px-4 py-3",children:"Fase"}),r.jsx("th",{className:"px-4 py-3",children:"Cadastro"}),r.jsx("th",{className:"px-4 py-3",children:"Atualizado"}),r.jsx("th",{className:"px-4 py-3 rounded-tr-xl",children:"Dias"})]})}),r.jsx("tbody",{children:Ee.map(w=>r.jsxs("tr",{className:"border-t border-gray-50 hover:bg-gray-50 transition-colors",children:[r.jsx("td",{className:"px-4 py-3",children:r.jsx("span",{className:"font-semibold text-navy text-sm",children:w.empresa||"—"})}),r.jsx("td",{className:"px-4 py-3 text-sm",children:w.nome}),r.jsx("td",{className:"px-4 py-3 text-xs text-gray-500",children:w.email}),r.jsx("td",{className:"px-4 py-3 text-xs text-gray-500",children:w.telefone}),r.jsx("td",{className:"px-4 py-3",children:r.jsxs("span",{className:`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${wg[w.fase]||"bg-gray-100 text-gray-700"}`,children:[r.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:su[w.fase]||su.cadastro})}),w.faseLabel||w.fase]})}),r.jsx("td",{className:"px-4 py-3 text-xs text-gray-500",children:h(w.createdAt)}),r.jsx("td",{className:"px-4 py-3 text-xs text-gray-500",children:h(w.updatedAt)}),r.jsx("td",{className:"px-4 py-3",children:r.jsxs("span",{className:`text-xs font-bold ${I(w.createdAt)>7?"text-red-600":I(w.createdAt)>3?"text-amber-600":"text-green-600"}`,children:[I(w.createdAt),"d"]})})]},w.id))})]})})]})]})}function ao({label:s,value:d,icon:l,color:m,bg:c}){return r.jsxs("div",{className:"card text-center p-3 sm:p-4",children:[r.jsx("div",{className:`w-10 h-10 ${c} rounded-full flex items-center justify-center mx-auto mb-2`,children:r.jsx("svg",{className:`w-5 h-5 ${m}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:l})})}),r.jsx("p",{className:`text-2xl sm:text-3xl font-bold ${m}`,children:d}),r.jsx("p",{className:"text-[10px] sm:text-xs text-gray-500 mt-1",children:s})]})}const kg="/sentinel-fairfield/",Eg=["AIG","Atradius","Coface","Allianz Trade","AVLA","CESCE"];function Pg(){const{getProspects:s}=Lr(),[d,l]=C.useState([]),[m,c]=C.useState("30");C.useEffect(()=>{l(s())},[]);const p=Date.now(),f=p-parseInt(m)*24*60*60*1e3,g=d.filter(D=>new Date(D.createdAt).getTime()>=f),v=g.length,y=g.filter(D=>D.fase.startsWith("enviado")).length,k=g.filter(D=>(p-new Date(D.updatedAt).getTime())/864e5>7&&!D.fase.startsWith("enviado")).length,j=v-y-k,E=y>0?"2.3":"—",_=v>0?(y/v*100).toFixed(1):"0",F=v>0?(k/v*100).toFixed(1):"0",z=[{phase:"Cadastro > Verificacao",target:"5 min",actual:"3 min",status:"ok"},{phase:"Verificacao > NDA",target:"10 min",actual:"6 min",status:"ok"},{phase:"NDA > Inicio Preenchimento",target:"1 dia",actual:"0.5 dia",status:"ok"},{phase:"Preenchimento Completo",target:"3 dias",actual:"2.3 dias",status:"ok"},{phase:"Envio > Resposta Seguradora",target:"10 dias",actual:"7 dias",status:"warning"}],L=Eg.map(D=>({name:D,sent:Math.floor(Math.random()*10)+y,pending:Math.floor(Math.random()*5),avgDays:(Math.random()*8+3).toFixed(1),maxDays:Math.floor(Math.random()*12)+3,responseRate:(70+Math.random()*30).toFixed(0)})),O=Array.from({length:7},(D,$)=>{const X=new Date(p-(6-$)*24*60*60*1e3);return{day:X.toLocaleDateString("pt-BR",{weekday:"short",day:"2-digit"}),cadastros:g.filter(J=>new Date(J.createdAt).toDateString()===X.toDateString()).length}}),q=Math.max(...O.map(D=>D.cadastros),1);return r.jsxs("div",{className:"max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8 space-y-6",children:[r.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-3",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("img",{src:`${kg}logos/sentinel.png`,alt:"",className:"h-10 w-10 object-contain"}),r.jsxs("div",{children:[r.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-navy",children:"Painel de SLA"}),r.jsx("p",{className:"text-xs text-gray-400",children:"Metricas de desempenho e acompanhamento"})]})]}),r.jsx("div",{className:"flex gap-2",children:[{v:"7",l:"7 dias"},{v:"30",l:"30 dias"},{v:"90",l:"90 dias"}].map(D=>r.jsx("button",{onClick:()=>c(D.v),className:`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${m===D.v?"bg-navy text-white border-navy":"border-gray-300 text-gray-600 hover:border-navy"}`,children:D.l},D.v))})]}),r.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3",children:[r.jsx(ro,{label:"Total Prospects",value:v,color:"text-navy",bg:"bg-navy/5",trend:"+12%"}),r.jsx(ro,{label:"Concluidos",value:y,color:"text-green-600",bg:"bg-green-50",trend:`${_}%`}),r.jsx(ro,{label:"Em Andamento",value:j,color:"text-blue-600",bg:"bg-blue-50"}),r.jsx(ro,{label:"Abandonados",value:k,color:"text-red-600",bg:"bg-red-50",trend:`${F}%`}),r.jsx(ro,{label:"Tempo Medio",value:E,suffix:"dias",color:"text-purple-600",bg:"bg-purple-50"}),r.jsx(ro,{label:"Taxa Conversao",value:`${_}%`,color:"text-cobre",bg:"bg-cobre/5"})]}),r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[r.jsxs("div",{className:"card",children:[r.jsxs("h3",{className:"text-sm font-bold text-navy mb-4 flex items-center gap-2",children:[r.jsx("svg",{className:"w-4 h-4 text-cobre",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),"SLA por Fase"]}),r.jsx("div",{className:"space-y-3",children:z.map(D=>r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsxs("div",{className:"flex-1",children:[r.jsx("p",{className:"text-xs font-medium text-navy",children:D.phase}),r.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[r.jsxs("span",{className:"text-[10px] text-gray-400",children:["Meta: ",D.target]}),r.jsx("span",{className:"text-[10px] text-gray-300",children:"|"}),r.jsxs("span",{className:`text-[10px] font-semibold ${D.status==="ok"?"text-green-600":"text-amber-600"}`,children:["Atual: ",D.actual]})]})]}),r.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center ${D.status==="ok"?"bg-green-100":"bg-amber-100"}`,children:D.status==="ok"?r.jsx("svg",{className:"w-4 h-4 text-green-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}):r.jsx("svg",{className:"w-4 h-4 text-amber-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"})})})]},D.phase))})]}),r.jsxs("div",{className:"card",children:[r.jsxs("h3",{className:"text-sm font-bold text-navy mb-4 flex items-center gap-2",children:[r.jsx("svg",{className:"w-4 h-4 text-cobre",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),"Atividade Diaria (Ultimos 7 dias)"]}),r.jsx("div",{className:"flex items-end justify-between gap-2 h-40 px-2",children:O.map(D=>r.jsxs("div",{className:"flex flex-col items-center gap-1 flex-1",children:[r.jsx("span",{className:"text-[10px] font-bold text-navy",children:D.cadastros}),r.jsx("div",{className:"w-full rounded-t-lg bg-gradient-to-t from-cobre to-[#D4944A] transition-all duration-500",style:{height:`${Math.max(8,D.cadastros/q*100)}%`}}),r.jsx("span",{className:"text-[9px] text-gray-400",children:D.day})]},D.day))})]})]}),r.jsxs("div",{children:[r.jsxs("h3",{className:"text-sm font-bold text-navy mb-4 flex items-center gap-2",children:[r.jsx("svg",{className:"w-4 h-4 text-cobre",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"})}),"SLA por Seguradora"]}),r.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:L.map(D=>r.jsxs("div",{className:"card hover:shadow-md transition-shadow",children:[r.jsxs("div",{className:"flex items-center justify-between mb-3",children:[r.jsx("h4",{className:"font-bold text-navy text-sm",children:D.name}),r.jsx(Lg,{dias:D.maxDays})]}),r.jsxs("div",{className:"space-y-2 text-sm",children:[r.jsxs("div",{className:"flex justify-between",children:[r.jsx("span",{className:"text-gray-500 text-xs",children:"Enviadas"}),r.jsx("span",{className:"font-semibold text-xs",children:D.sent})]}),r.jsxs("div",{className:"flex justify-between",children:[r.jsx("span",{className:"text-gray-500 text-xs",children:"Pendentes"}),r.jsx("span",{className:"font-semibold text-xs text-amber-600",children:D.pending})]}),r.jsxs("div",{className:"flex justify-between",children:[r.jsx("span",{className:"text-gray-500 text-xs",children:"Prazo Medio"}),r.jsxs("span",{className:"font-semibold text-xs",children:[D.avgDays,"d"]})]}),r.jsxs("div",{className:"flex justify-between",children:[r.jsx("span",{className:"text-gray-500 text-xs",children:"Max. Aberto"}),r.jsxs("span",{className:`font-bold text-xs ${D.maxDays>10?"text-red-600":D.maxDays>5?"text-amber-600":"text-green-600"}`,children:[D.maxDays,"d"]})]}),r.jsxs("div",{className:"flex justify-between",children:[r.jsx("span",{className:"text-gray-500 text-xs",children:"Taxa Resposta"}),r.jsxs("span",{className:"font-semibold text-xs text-green-600",children:[D.responseRate,"%"]})]})]}),D.sent>0&&r.jsx("div",{className:"mt-3 h-2 bg-gray-100 rounded-full overflow-hidden",children:r.jsx("div",{className:`h-full rounded-full transition-all duration-500 ${D.maxDays>10?"bg-red-500":D.maxDays>5?"bg-amber-500":"bg-green-500"}`,style:{width:`${Math.min(100,D.pending/Math.max(D.sent,1)*100)}%`}})})]},D.name))})]})]})}function ro({label:s,value:d,color:l,bg:m,trend:c,suffix:p}){return r.jsxs("div",{className:"card text-center p-3 sm:p-4",children:[r.jsxs("p",{className:`text-2xl sm:text-3xl font-bold ${l}`,children:[d,p&&r.jsx("span",{className:"text-sm font-normal ml-1",children:p})]}),r.jsx("p",{className:"text-[10px] sm:text-xs text-gray-500 mt-1",children:s}),c&&r.jsx("p",{className:`text-[10px] font-semibold mt-1 ${l}`,children:c})]})}function Lg({dias:s}){return s<=0?r.jsx("span",{className:"inline-block w-3 h-3 rounded-full bg-gray-300"}):s<5?r.jsx("span",{className:"inline-block w-3 h-3 rounded-full bg-green-500"}):s<=10?r.jsx("span",{className:"inline-block w-3 h-3 rounded-full bg-amber-500 animate-pulse"}):r.jsx("span",{className:"inline-block w-3 h-3 rounded-full bg-red-500 animate-pulse"})}const Ag=`
@keyframes typingDot {
  0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
  40% { opacity: 1; transform: scale(1); }
}
@keyframes pulseGreen {
  0%, 100% { box-shadow: 0 0 0 0 rgba(52,211,153,0.5); }
  50% { box-shadow: 0 0 0 6px rgba(52,211,153,0); }
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes headphonePulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(52,211,153,0.4); }
  50% { box-shadow: 0 0 0 8px rgba(52,211,153,0); }
}
.msg-enter {
  animation: slideUp 0.3s ease-out forwards;
}
.typing-dot {
  animation: typingDot 1.4s ease-in-out infinite;
}
.typing-dot:nth-child(2) { animation-delay: 0.2s; }
.typing-dot:nth-child(3) { animation-delay: 0.4s; }
.pulse-green {
  animation: pulseGreen 2s infinite;
}
.headphone-pulse {
  animation: headphonePulse 2s infinite;
}
.fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}
`;function Rg(){return r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M19 12H5"}),r.jsx("path",{d:"M12 19l-7-7 7-7"})]})}function iu(){return r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M22 2L11 13"}),r.jsx("path",{d:"M22 2l-7 20-4-9-9-4 20-7z"})]})}function lu({size:s=20}){return r.jsxs("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M3 18v-6a9 9 0 0 1 18 0v6"}),r.jsx("path",{d:"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"})]})}function zg(){return r.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M18 6L6 18"}),r.jsx("path",{d:"M6 6l12 12"})]})}function Mg(){return r.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 40 40",fill:"none",children:[r.jsx("circle",{cx:"20",cy:"12",r:"6",fill:"#7DD3FC",opacity:"0.9"}),r.jsx("path",{d:"M8 36 C8 26 14 22 20 22 C26 22 32 26 32 36",fill:"#7DD3FC",opacity:"0.7"}),r.jsx("path",{d:"M20 22 L18 28 L20 32 L22 28 Z",fill:"#0a0f1e",opacity:"0.8"}),r.jsx("path",{d:"M15 22 L20 25 L25 22",stroke:"#0a0f1e",strokeWidth:"1",fill:"none",opacity:"0.6"})]})}function du(){return r.jsx("div",{className:"w-8 h-8 rounded-full bg-sentinel/20 border border-sentinel/30 flex items-center justify-center flex-shrink-0",children:r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 40 40",fill:"none",children:[r.jsx("circle",{cx:"20",cy:"11",r:"5",fill:"#7DD3FC",opacity:"0.8"}),r.jsx("path",{d:"M10 34 C10 26 14 22 20 22 C26 22 30 26 30 34",fill:"#7DD3FC",opacity:"0.6"}),r.jsx("path",{d:"M20 22 L18.5 27 L20 30 L21.5 27 Z",fill:"#0a0f1e",opacity:"0.7"})]})})}const Dg=[{keywords:["oi","ola","hey","eai","e ai","fala"],category:"saudacao",answer:`Olá! 👋 Sou o **iCover**, especialista em **Seguro de Crédito**.

Posso te ajudar com informações sobre coberturas, seguradoras, legislação, cálculos de prêmio e muito mais.

Sobre o que gostaria de saber?`},{keywords:["bom dia","bom-dia"],category:"saudacao",answer:`Bom dia! ☀️ Sou o **iCover**, sua IA especialista em **Seguro de Crédito**.

Como posso te ajudar hoje?`},{keywords:["boa tarde","boa-tarde"],category:"saudacao",answer:`Boa tarde! Sou o **iCover**, pronto para te ajudar com qualquer dúvida sobre **Seguro de Crédito**.

O que gostaria de saber?`},{keywords:["boa noite","boa-noite"],category:"saudacao",answer:`Boa noite! 🌙 Sou o **iCover**, especialista em **Seguro de Crédito**.

Estou à disposição para tirar suas dúvidas. Como posso ajudar?`},{keywords:["obrigado","obrigada","valeu","vlw","thanks","agradeco"],category:"agradecimento",answer:`De nada! Fico feliz em ajudar. 😊

Se tiver mais alguma dúvida sobre **Seguro de Crédito**, é só perguntar.

Você também pode **fazer uma cotação** clicando no botão "Fazer Cotação" acima.`},{keywords:["tchau","ate mais","ate logo","flw","falou","bye"],category:"despedida",answer:`Até logo! Foi um prazer ajudar. 🤝

Quando precisar de informações sobre **Seguro de Crédito**, estarei aqui.

**Dica:** Você pode iniciar uma cotação a qualquer momento pelo botão acima!`},{keywords:["quem e voce","quem voce e","o que voce e","o que e icover","icover"],category:"identidade",answer:`Eu sou o **iCover** — a inteligência artificial mais completa do mercado brasileiro de **Seguro de Crédito**.

Fui desenvolvido pela **Fairfield** e faço parte da plataforma **SENTINEL**, especializada em seguros de crédito e garantia.

**Minhas capacidades:**
• Explicar todos os tipos de cobertura de crédito
• Comparar seguradoras (Allianz Trade, Coface, Atradius, etc.)
• Orientar sobre legislação (SUSEP, Decreto-Lei 73/1966)
• Calcular estimativas de prêmio e PMI
• Guiar no processo de contratação e sinistro

Posso te ajudar com qualquer aspecto do Seguro de Crédito!`},{keywords:["sentinel","plataforma","sistema"],category:"identidade",answer:`O **SENTINEL** é a plataforma de inteligência em seguros da **Fairfield**.

**Funcionalidades:**
• Motor de subscrição inteligente para Seguro de Crédito
• Cotação automatizada com múltiplas seguradoras
• Análise de risco de compradores/devedores
• Dashboard de gestão de apólices
• IA especialista (eu, o iCover!) para orientação

A plataforma conecta corretores, seguradoras e segurados em um ecossistema digital completo.`},{keywords:["fairfield","empresa","corretora"],category:"identidade",answer:`A **Fairfield** é uma corretora de seguros especializada em **Seguro de Crédito** e **Seguro Garantia**.

**Diferenciais:**
• Equipe com expertise em análise de crédito
• Plataforma SENTINEL com IA integrada
• Relacionamento com as principais seguradoras do mercado
• Atendimento personalizado para cada perfil de empresa
• Suporte completo: da cotação ao sinistro

Conheça mais entrando em contato com nossos especialistas!`},{keywords:["o que e seguro de credito","seguro de credito","seguro credito","credit insurance"],category:"conceito",answer:`O **Seguro de Crédito** é uma modalidade que protege empresas contra o risco de **inadimplência** de seus compradores (devedores).

**Como funciona:**
1. A empresa (segurada) vende a prazo para seus clientes
2. A seguradora analisa e aprova **limites de crédito** para cada comprador
3. Se o comprador não pagar, a seguradora **indeniza** a empresa

**Estrutura da apólice:**
| Parte | Papel |
|-------|-------|
| **Segurado** | Empresa que vende a prazo (credor) |
| **Seguradora** | Assume o risco de inadimplência |
| **Devedor** | Comprador que pode não pagar |

**Coberturas principais:**
• **Insolvência** do devedor (falência, recuperação judicial)
• **Mora prolongada** (atraso superior a 150-180 dias)
• **Risco político** (em operações de exportação)

O seguro de crédito é regulamentado pela **SUSEP** nos ramos **0171** (interno) e **0172** (exportação).`},{keywords:["diferenca seguro garantia","garantia vs credito","seguro garantia","diferenca garantia"],category:"conceito",answer:`**Seguro de Crédito vs Seguro Garantia** — são produtos bem diferentes:

| Aspecto | Seguro de Crédito | Seguro Garantia |
|---------|-------------------|------------------|
| **Protege** | O vendedor (credor) | O contratante/beneficiário |
| **Risco** | Inadimplência do comprador | Descumprimento contratual |
| **Tomador** | Quem vende a prazo | Quem tem obrigação contratual |
| **Apólice** | Global (múltiplos compradores) | Individual (por contrato) |
| **Ramo SUSEP** | 0171 / 0172 | 0775 |
| **Indenização** | % do valor da venda | Valor da garantia |

**Seguro de Crédito:** Protege seu faturamento contra calotes.
**Seguro Garantia:** Garante o cumprimento de um contrato.

Ambos são importantes ferramentas de gestão de risco, mas atendem necessidades distintas.`},{keywords:["diferenca factoring","factoring","antecipacao","desconto duplicata","diferenca antecipacao"],category:"conceito",answer:`**Seguro de Crédito vs Factoring/Antecipação** — são instrumentos diferentes:

| Aspecto | Seguro de Crédito | Factoring/Antecipação |
|---------|-------------------|-----------------------|
| **Natureza** | Proteção (seguro) | Financiamento |
| **Objetivo** | Proteger contra inadimplência | Antecipar recebíveis |
| **Custo** | Prêmio de seguro (0,1% a 0,5%) | Deságio (1% a 5% ao mês) |
| **Propriedade** | Crédito continua com a empresa | Crédito é cedido ao fator |
| **Regulação** | SUSEP | Banco Central |
| **Cobrança** | Seguradora cobra o devedor | Fator cobra o devedor |

**Vantagem do Seguro de Crédito:**
• Custo muito menor que factoring
• Mantém o relacionamento com o cliente
• Inclui análise de crédito dos compradores
• Serviço de cobrança especializada

Muitas empresas usam **ambos**: seguro de crédito para proteção + factoring para liquidez.`},{keywords:["estrutura apolice","partes","segurado","devedor","credor"],category:"conceito",answer:`**Estrutura da Apólice de Seguro de Crédito:**

**3 partes envolvidas:**

1. **Segurado (Credor)**
   • Empresa que vende a prazo
   • Contrata e paga o seguro
   • Recebe a indenização em caso de sinistro

2. **Seguradora**
   • Analisa o risco dos compradores
   • Define limites de crédito
   • Paga a indenização
   • Faz cobrança ao devedor inadimplente

3. **Devedor (Comprador)**
   • Cliente do segurado
   • Não participa do contrato de seguro
   • É analisado pela seguradora

**Elementos da apólice:**
• Limite de crédito por devedor
• PMI (Percentual Máximo de Indenização)
• POS (Participação Obrigatória do Segurado)
• Franquia / AAD
• Prazo máximo de pagamento coberto
• Setores e geografias cobertas`},{keywords:["quem pode contratar","quem contrata","perfil","para quem","minha empresa"],category:"conceito",answer:`**Quem pode contratar Seguro de Crédito?**

Qualquer empresa que **vende a prazo** para outras empresas (B2B).

**Perfil ideal:**
• Empresas com faturamento a partir de **R$ 5 milhões/ano**
• Vendem para **múltiplos compradores**
• Prazo de pagamento de **30 a 180 dias**
• Setores: indústria, comércio atacadista, serviços B2B

**Setores que mais contratam:**
• Químico e petroquímico
• Alimentos e bebidas
• Têxtil e confecções
• Metalúrgico e siderúrgico
• Papel e celulose
• Eletrônicos e tecnologia
• Agronegócio

**Não se aplica a:**
• Vendas para pessoa física (B2C)
• Vendas à vista
• Vendas para o governo (nesse caso, Seguro Garantia)

**Prêmio mínimo** geralmente a partir de **R$ 15.000 a R$ 30.000/ano**.`},{keywords:["credito interno","ramo 0171","domestico","mercado interno"],category:"cobertura",answer:`**Seguro de Crédito Interno (Ramo SUSEP 0171)**

Protege vendas a prazo realizadas **dentro do Brasil**.

**Características:**
• Cobre vendas B2B no mercado doméstico
• Compradores devem ser **pessoas jurídicas brasileiras**
• PMI: geralmente **85% a 90%**
• Prazo máximo de pagamento: até **180 dias**
• IOF: **0%** (seguro de crédito é isento)

**Coberturas:**
• Insolvência (falência, recuperação judicial/extrajudicial)
• Mora prolongada (atraso > 150-180 dias)

**Documentação necessária:**
• Balanço dos últimos 3 anos
• Relação de compradores com limites desejados
• Histórico de inadimplência
• Projeção de vendas a prazo

**Taxa média:** 0,15% a 0,40% do faturamento segurado.`},{keywords:["credito exportacao","exportacao","ramo 0172","export credit"],category:"cobertura",answer:`**Seguro de Crédito à Exportação (Ramo SUSEP 0172)**

Protege vendas a prazo para **compradores no exterior**.

**Características:**
• Cobre vendas internacionais
• Compradores em qualquer país (análise de risco-país)
• PMI: geralmente **90%** (maior que interno)
• IOF: **0%** (exportação é isenta)

**Coberturas adicionais:**
• **Risco Comercial:** Insolvência e mora do comprador estrangeiro
• **Risco Político:** Moratória, restrição cambial, guerra, embargo
• **Risco de fabricação:** Cancelamento antes do embarque

**Seguradoras especializadas em exportação:**
• Allianz Trade (maior do mundo)
• Coface (forte em mercados emergentes)
• Atradius (Europa e Américas)
• CESCE (foco ibero-americano)

**Vantagens extras:**
• Acesso a informações de compradores internacionais
• Cobrança internacional especializada
• Melhora condições de financiamento à exportação (BNDES Exim, ACC/ACE)`},{keywords:["risco politico","political risk","risco pais","moratoria"],category:"cobertura",answer:`**Risco Político no Seguro de Crédito**

Cobertura específica para **exportações**, protegendo contra eventos causados por governos estrangeiros.

**Eventos cobertos:**
• **Moratória:** País decreta suspensão de pagamentos
• **Restrição cambial:** Impossibilidade de converter moeda
• **Expropriação:** Governo confisca bens do comprador
• **Guerra e revolução:** Conflito armado que impeça pagamento
• **Embargo comercial:** Sanções que bloqueiem a operação
• **Inconvertibilidade:** Moeda local não pode ser convertida

**Como funciona:**
• A seguradora avalia o **rating do país** destino
• Países de alto risco podem ter coberturas limitadas
• PMI para risco político: geralmente **90% a 95%**
• Prazo de espera: **180 dias** após o evento

**Seguradoras com expertise em risco político:**
• AIG (líder em political risk)
• Allianz Trade
• Coface (classificação DRA por país)
• Atradius

**Importante:** Risco político é **adicional** ao risco comercial na apólice de exportação.`},{keywords:["single risk","single buyer","risco unico","um comprador"],category:"cobertura",answer:`**Single Risk / Single Buyer**

Cobertura para uma **única transação** ou um **único comprador**.

**Quando usar:**
• Venda pontual de alto valor
• Concentração de risco em um comprador
• Operação específica de exportação
• Licitação ou contrato grande

**Características:**
• Apólice individual (não global)
• Período: duração da operação
• Análise focada no devedor específico
• PMI: pode chegar a **90-95%**
• Prêmio: % sobre o valor da operação

**Vantagens:**
• Flexibilidade — contrata só quando precisa
• Sem prêmio mínimo anual
• Ideal para operações esporádicas

**Desvantagens:**
• Custo unitário mais alto que apólice global
• Sem benefício de diversificação
• Cada operação requer nova análise

**Taxa:** 0,3% a 1,5% do valor da operação, dependendo do risco.`},{keywords:["whole turnover","apolice global","carteira inteira","turnover"],category:"cobertura",answer:`**Whole Turnover (Apólice Global)**

Cobre **toda a carteira** de vendas a prazo da empresa.

**Como funciona:**
• A empresa segura **100% do faturamento** a prazo
• Todos os compradores são incluídos
• Limite de crédito é solicitado para cada devedor
• Existe um **limite discricionário** para compradores pequenos

**Características:**
| Item | Detalhe |
|------|--------|
| Cobertura | Toda a carteira B2B |
| PMI | 85% a 90% |
| POS | 10% a 15% |
| Franquia/AAD | Sim, geralmente |
| Bonus/Malus | Sim |
| Prêmio | % sobre faturamento real |

**Vantagens:**
• **Menor custo** por real segurado
• Análise de crédito de todos os compradores
• Gestão integrada do risco de crédito
• Histórico gera **bônus** nos anos seguintes

**Ideal para:**
• Empresas com carteira diversificada
• Faturamento acima de R$ 20 milhões/ano
• Muitos compradores diferentes

É a modalidade **mais contratada** no mercado brasileiro.`},{keywords:["key buyer","compradores nomeados","nomeados","named buyer"],category:"cobertura",answer:`**Key Buyer (Compradores Nomeados)**

Cobre apenas **compradores específicos** selecionados pela empresa.

**Como funciona:**
• A empresa escolhe quais compradores quer segurar
• Geralmente os **maiores** ou **mais arriscados**
• Cada comprador nomeado tem limite de crédito individual

**Diferença para Whole Turnover:**
| Aspecto | Key Buyer | Whole Turnover |
|---------|-----------|----------------|
| Cobertura | Compradores selecionados | Toda a carteira |
| Flexibilidade | Escolhe quem segurar | Cobre todos |
| Custo | Maior por comprador | Menor (diluição) |
| Anti-seleção | Risco maior | Menor risco |
| AAD/Franquia | Raramente | Comum |

**Vantagens:**
• Protege os maiores riscos
• Custo total menor (segura menos compradores)
• Mais simples de gerenciar

**Desvantagens:**
• Taxa unitária mais alta
• Seguradora pode recusar compradores de alto risco
• Sem benefício de diversificação

**Ideal para:** Empresas com **poucos grandes compradores** que representam parte significativa do faturamento.`},{keywords:["excess of loss","excesso de danos","xl","excess loss"],category:"cobertura",answer:`**Excess of Loss (Excesso de Danos)**

A empresa assume as **primeiras perdas** e a seguradora cobre o que exceder.

**Como funciona:**
• Define-se um **AAD (Annual Aggregate Deductible)** — franquia anual
• Perdas até o AAD: empresa assume sozinha
• Perdas acima do AAD: seguradora indeniza

**Exemplo:**
• AAD: R$ 500.000
• Perda total no ano: R$ 2.000.000
• Empresa paga: R$ 500.000
• Seguradora paga: R$ 1.500.000

**Características:**
• Prêmio **significativamente menor** que Whole Turnover
• Ideal para empresas com boa gestão de crédito interna
• A empresa retém as perdas "normais"
• Seguradora cobre as perdas "catastróficas"

**Vantagens:**
• Menor custo de prêmio
• Empresa mantém disciplina de crédito
• Proteção contra perdas inesperadas

**Ideal para:** Empresas grandes com departamento de crédito estruturado e histórico de baixa sinistralidade.`},{keywords:["top up","top-up","cover complementar","complementar"],category:"cobertura",answer:`**Top-Up Cover (Cobertura Complementar)**

Cobertura **adicional** acima do limite aprovado pela seguradora principal.

**Quando usar:**
• A seguradora principal aprovou R$ 1 milhão para um comprador
• Você precisa de R$ 2 milhões de cobertura
• O Top-Up cobre os R$ 1 milhão excedentes

**Como funciona:**
• Complementa a apólice principal
• Entra em vigor quando o limite principal é excedido
• Geralmente contratado com **outra seguradora**

**Características:**
• Prêmio maior que a cobertura principal
• PMI pode ser menor (70% a 80%)
• Requer aprovação de ambas as seguradoras
• Não é ofertado por todas as seguradoras

**Seguradoras que oferecem Top-Up:**
• Allianz Trade
• Coface
• Atradius

**Ideal para:** Situações onde o limite de crédito aprovado é insuficiente para a exposição real ao comprador.`},{keywords:["domestico internacional","interno exportacao","diferenca interno exportacao"],category:"cobertura",answer:`**Crédito Doméstico vs Internacional**

| Aspecto | Doméstico (0171) | Internacional (0172) |
|---------|------------------|---------------------|
| **Compradores** | Brasileiros | Estrangeiros |
| **Moeda** | BRL | USD, EUR, etc. |
| **PMI** | 85-90% | 90-95% |
| **IOF** | 0% | 0% |
| **Risco Político** | Não | Sim (adicional) |
| **Mora** | 150-180 dias | 150-180 dias |
| **Cobrança** | Nacional | Internacional |
| **Taxa média** | 0,15-0,40% | 0,20-0,60% |
| **Informações** | Serasa/SPC | Bases internacionais |

**Pode combinar ambos na mesma apólice?**
Sim! A maioria das seguradoras oferece apólice **mista** cobrindo vendas domésticas e de exportação.

**Dica:** Para exportadoras, o seguro de crédito facilita o acesso a linhas de financiamento como **BNDES Exim**, **ACC** e **ACE**.`},{keywords:["pmi","percentual maximo","maximo indenizacao"],category:"tecnico",answer:`**PMI — Percentual Máximo de Indenização**

É o **percentual máximo** que a seguradora paga sobre o valor do sinistro.

**Faixas comuns:**
| Tipo | PMI |
|------|-----|
| Crédito Interno | 85% a 90% |
| Crédito Exportação | 90% a 95% |
| Risco Político | 90% a 95% |
| Single Risk | 85% a 95% |

**Exemplo:**
• Venda não paga: R$ 1.000.000
• PMI: 85%
• Indenização: **R$ 850.000**
• Empresa absorve: R$ 150.000

**Por que não é 100%?**
• Evita **risco moral** (empresa relaxar na análise de crédito)
• A empresa mantém "skin in the game"
• Quanto maior o PMI, maior o prêmio

**Negociação:**
• PMI é negociável na contratação
• Histórico de sinistralidade baixo = PMI mais alto
• Carteira diversificada = PMI mais favorável`},{keywords:["pos","participacao obrigatoria","retencao segurado"],category:"tecnico",answer:`**POS — Participação Obrigatória do Segurado**

É o **percentual que o segurado deve reter** de cada sinistro. É o complemento do PMI.

**Faixas comuns:**
• Crédito Interno: **10% a 15%**
• Crédito Exportação: **5% a 10%**
• Excess of Loss: **0% acima do AAD**

**Relação PMI x POS:**
• PMI 85% → POS 15%
• PMI 90% → POS 10%
• PMI 95% → POS 5%

**Objetivo:**
• Alinhar interesses: segurado mantém prudência
• Prevenir risco moral
• Incentivar boa gestão de crédito

**Diferente de franquia:**
• POS: percentual de **cada** sinistro
• Franquia/AAD: valor **agregado** no ano

A POS pode ser combinada com a franquia/AAD, dependendo da estrutura da apólice.`},{keywords:["franquia","aad","annual aggregate","deductible","dedutivel"],category:"tecnico",answer:`**Franquia / AAD (Annual Aggregate Deductible)**

Valor **acumulado de perdas** que o segurado absorve no ano antes de acionar o seguro.

**Como funciona:**
• AAD = R$ 200.000
• Perdas acumuladas no ano: R$ 500.000
• Segurado paga: R$ 200.000 (AAD)
• Seguradora paga: R$ 300.000 × PMI

**Tipos:**
| Tipo | Descrição |
|------|----------|
| **AAD** | Franquia anual agregada |
| **Franquia por sinistro** | Valor mínimo por evento |
| **First Loss** | Primeiras perdas até X% |

**Impacto no prêmio:**
• AAD **maior** → prêmio **menor**
• AAD zero → prêmio **maior**
• É uma forma de "self-insurance"

**Dica de negociação:**
Empresa com boa sinistralidade pode aceitar AAD mais alto em troca de prêmio menor. É a lógica do **Excess of Loss**.`},{keywords:["limite credito","credit limit","limite aprovado","limite comprador"],category:"tecnico",answer:`**Limite de Crédito (Credit Limit)**

Valor máximo de **exposição coberta** por comprador/devedor.

**Como funciona:**
1. Segurado solicita limite para cada comprador
2. Seguradora analisa o devedor (balanço, comportamento, setor)
3. Seguradora aprova, reduz ou recusa o limite

**Tipos de limite:**
• **Limite nomeado:** Aprovado individualmente pela seguradora
• **Limite discricionário:** Valor automático sem análise individual

**Exemplo:**
• Limite aprovado para Comprador A: R$ 500.000
• Exposição atual: R$ 400.000
• Margem disponível: R$ 100.000

**Limite discricionário:**
• Geralmente R$ 20.000 a R$ 100.000
• Não precisa de aprovação prévia
• Condição: devedor sem registro negativo
• Coberto pelo seguro normalmente

**Importante:**
• Vendas **acima do limite** não são cobertas
• Limites podem ser **reduzidos ou cancelados** pela seguradora
• Segurado recebe aviso e pode solicitar reconsideração`},{keywords:["limite discricionario","discretionary","automatico","sem aprovacao"],category:"tecnico",answer:`**Limite Discricionário (Discretionary Limit)**

Limite de crédito **automático** que o segurado pode usar sem aprovação prévia da seguradora.

**Características:**
• Valor fixo (ex: R$ 30.000 a R$ 100.000 por comprador)
• Não requer solicitação à seguradora
• Válido para qualquer devedor que atenda aos critérios

**Critérios para usar:**
• Devedor sem registros negativos (Serasa/SPC)
• Dentro do prazo máximo de pagamento
• Devedor ativo há mais de X meses
• Sem histórico de atraso

**Vantagens:**
• Agilidade para vender a novos clientes
• Reduz burocracia de análise
• Cobre compradores pequenos automaticamente

**Atenção:**
• Se o devedor tiver restrição, o limite discricionário **não se aplica**
• O segurado é responsável por verificar a situação do devedor
• Não substitui a análise para grandes compradores

**Faixa comum:** R$ 20.000 a R$ 100.000 por devedor.`},{keywords:["mora prolongada","protracted default","atraso","inadimplencia","mora"],category:"tecnico",answer:`**Mora Prolongada (Protracted Default)**

Quando o devedor **atrasa o pagamento** além de um prazo definido na apólice, sem declarar insolvência.

**Prazos típicos:**
• **150 dias** de atraso → mora prolongada (mais comum)
• **180 dias** de atraso → em algumas apólices
• Contados a partir do **vencimento original** da fatura

**Processo:**
1. Fatura vence e devedor não paga
2. Segurado notifica a seguradora (prazo: 30-60 dias do vencimento)
3. Seguradora pode iniciar cobrança
4. Após 150-180 dias: caracteriza-se a **mora prolongada**
5. Indenização é calculada e paga

**Diferente de insolvência:**
| Mora Prolongada | Insolvência |
|-----------------|-------------|
| Devedor apenas não paga | Devedor quebra (falência/RJ) |
| Pode voltar a pagar | Processo judicial |
| 150-180 dias de atraso | Decreto judicial |
| Mais frequente | Mais grave |

**Importante:** O segurado deve **notificar** o atraso dentro do prazo da apólice, senão pode perder o direito à indenização.`},{keywords:["insolvencia","falencia","recuperacao judicial","bankruptcy"],category:"tecnico",answer:`**Insolvência no Seguro de Crédito**

Cobertura acionada quando o devedor entra em **processo formal de insolvência**.

**Eventos de insolvência:**
• **Falência** decretada judicialmente
• **Recuperação Judicial** deferida (Lei 11.101/2005)
• **Recuperação Extrajudicial** homologada
• **Liquidação extrajudicial** (se aplicável)

**Processo de sinistro:**
1. Devedor entra em recuperação judicial ou falência
2. Segurado notifica a seguradora imediatamente
3. Seguradora verifica os créditos no processo
4. Indenização é paga em **30 a 60 dias** após confirmação
5. Seguradora se sub-roga nos direitos do segurado

**Sub-rogação:**
• A seguradora assume o direito de cobrar o devedor
• Participa do processo de RJ/falência
• Valores recuperados são divididos pro-rata

**Importante:**
• Créditos devem estar **habilitados** no processo
• Documentação comprobatória é essencial (NFs, duplicatas)
• Prazo de notificação é rigoroso`},{keywords:["waiting period","periodo espera","carencia"],category:"tecnico",answer:`**Período de Espera (Waiting Period)**

Prazo entre a **comunicação do sinistro** e o **pagamento da indenização**.

**Prazos típicos:**
| Tipo de Sinistro | Período de Espera |
|-----------------|-------------------|
| Mora Prolongada | 30 a 60 dias após 150/180 dias |
| Insolvência | 30 dias após confirmação |
| Risco Político | 180 dias após o evento |

**Finalidade:**
• Permitir tentativas de cobrança
• Verificar documentação
• Confirmar que a perda é definitiva

**Não confundir com:**
• **Prazo de mora:** 150-180 dias de atraso
• **Prazo de notificação:** Quando o segurado deve avisar
• **Carência da apólice:** Período inicial sem cobertura (raro)

Algumas seguradoras oferecem **pagamento antecipado** mediante solicitação, descontando um percentual.`},{keywords:["nml","non qualifying","perda nao qualificada","nao coberto"],category:"tecnico",answer:`**NQL / NML — Non-Qualifying Loss (Perda Não Qualificada)**

Sinistro que **não atende aos critérios** de cobertura da apólice.

**Motivos comuns de NQL:**
• Venda acima do **limite de crédito** aprovado
• Falta de **notificação** dentro do prazo
• Devedor com limite **cancelado** antes da venda
• Operação fora do **escopo** da apólice
• Documentação insuficiente (sem NF, contrato, etc.)
• Disputa comercial (devedor alega defeito no produto)
• Venda para **parte relacionada** (empresa do grupo)

**Como evitar NQL:**
• Respeitar os limites de crédito aprovados
• Notificar atrasos dentro do prazo (30-60 dias)
• Manter documentação organizada
• Monitorar avisos de cancelamento de limite
• Verificar cobertura antes de vendas atípicas

**Importante:** A disputa comercial é a principal causa de NQL. Se o devedor contesta a dívida, a seguradora pode não indenizar até que a disputa seja resolvida.`},{keywords:["mcl","maximum credit","limite maximo"],category:"tecnico",answer:`**MCL — Maximum Credit Limit**

O **maior limite de crédito** que a seguradora aceita para um único devedor.

**Fatores que determinam o MCL:**
• Porte da seguradora
• Rating do devedor
• Setor de atuação
• País (para exportação)
• Garantias oferecidas

**Valores de referência:**
• Pequenos devedores: até R$ 500 mil
• Médios: R$ 500 mil a R$ 5 milhões
• Grandes: R$ 5 milhões a R$ 50 milhões
• Corporativos: acima de R$ 50 milhões

Quando o MCL de uma seguradora é insuficiente, pode-se usar **Top-Up Cover** com outra seguradora para complementar.`},{keywords:["allianz trade","allianz","euler hermes","eolis"],category:"seguradora",answer:`**Allianz Trade** (antiga Euler Hermes)

🏢 **Líder global** em Seguro de Crédito.

**Números:**
• Presente em **52 países**
• Mais de **83.000 clientes** no mundo
• Base de dados com **80+ milhões de empresas**
• Rating: **AA** (S&P)

**Plataforma:** EOLIS
• Consulta de limites de crédito online
• Monitoramento de compradores em tempo real
• Solicitação e aprovação digital de limites

**Diferenciais no Brasil:**
• Maior base de dados de empresas brasileiras
• Aprovação de limites em **24-48 horas**
• Cobrança especializada nacional e internacional
• Apólice para PMEs e grandes empresas

**Produtos:**
• Whole Turnover
• Key Buyer
• Single Risk
• Top-Up
• Excess of Loss

**Ideal para:** Empresas de todos os portes, especialmente exportadoras com compradores em múltiplos países.`},{keywords:["coface","dra","cofanet"],category:"seguradora",answer:`**Coface**

🏢 Seguradora francesa, **top 3 global** em Seguro de Crédito.

**Números:**
• Presente em **100 países** (escritórios em 57)
• Base de dados: **200+ milhões de empresas**
• Rating: **AA-** (Fitch)

**Diferencial — Rating DRA:**
• **DRA (Debtor Risk Assessment):** Classificação proprietária de risco
• Escala de **1 (baixo risco)** a **10 (alto risco)**
• Atualizado continuamente
• Disponível via plataforma CofaNet

**Plataforma:** CofaNet
• Gestão online da apólice
• Consulta de ratings DRA
• Solicitação de limites
• Notificação de sinistros

**Produtos no Brasil:**
• TradeLiner (Whole Turnover)
• EasyLiner (PMEs)
• Single Risk
• Top-Up

**Ideal para:** Empresas que valorizam informação de crédito e análise de risco detalhada.`},{keywords:["atradius","collections","modula"],category:"seguradora",answer:`**Atradius**

🏢 Seguradora holandesa, **top 3 global** em Seguro de Crédito.

**Números:**
• Presente em **50+ países**
• Faturamento: €2+ bilhões
• Rating: **A** (A.M. Best)

**Diferencial — Atradius Collections:**
• Serviço de **cobrança internacional** líder
• Presente em **96 países**
• Cobrança amigável e judicial
• Pode ser contratado separadamente do seguro

**Plataforma:** Modula (Atradius Modula)
• Apólice modular — escolha os módulos que precisa
• Gestão online completa
• Integração com ERPs

**Produtos no Brasil:**
• Modula (modular, flexível)
• Whole Turnover
• Key Buyer
• Single Risk
• Collections (cobrança)

**Ideal para:** Empresas que precisam de cobrança internacional robusta e flexibilidade na apólice.`},{keywords:["cesce","ibero","pme","pequena empresa"],category:"seguradora",answer:`**CESCE**

🏢 Seguradora espanhola com foco **ibero-americano**.

**Números:**
• Presente em **10 países** (foco Ibéria e LATAM)
• Capital misto (público-privado na Espanha)
• Forte em **PMEs**

**Diferenciais:**
• Foco em empresas de **pequeno e médio porte**
• Processo simplificado de contratação
• Atendimento em português e espanhol
• Boa presença na América Latina

**Produtos:**
• Master Oro (Whole Turnover)
• Master PME (simplificado para pequenas empresas)
• Single Risk
• Crédito à Exportação

**Prêmio mínimo:** A partir de R$ 15.000/ano para PMEs

**Ideal para:** PMEs brasileiras que buscam seguro de crédito com processo simples e custo acessível.`},{keywords:["aig","grandes riscos","risk political aig"],category:"seguradora",answer:`**AIG (American International Group)**

🏢 Gigante americana de seguros com expertise em **grandes riscos**.

**Números:**
• Presente em **80+ países**
• Rating: **A+** (S&P)
• Capacidade para riscos muito grandes

**Diferenciais:**
• Especialista em **risco político**
• Apetite para **grandes exposições**
• Soluções bespoke/tailor-made
• Forte em setores: energia, commodities, infraestrutura

**Produtos de Crédito:**
• Whole Turnover
• Single Risk (grandes valores)
• Risco Político standalone
• Seguro de Crédito para commodities

**Quando escolher AIG:**
• Operações de **grande porte** (USD 10M+)
• Risco político em países **difíceis**
• Setores especializados (oil & gas, mining)
• Necessidade de **capacidade alta**

**Ideal para:** Grandes corporações e exportadoras com operações em mercados de alto risco.`},{keywords:["avla","digital","latam","startup"],category:"seguradora",answer:`**AVLA**

🏢 Seguradora **digital-first** com foco na **América Latina**.

**Números:**
• Fundada em 2016 (Chile)
• Presente no Brasil, Chile, Colômbia, Peru
• Foco em tecnologia e agilidade

**Diferenciais:**
• Processo **100% digital**
• Aprovação rápida de limites
• Interface moderna e intuitiva
• Foco em **PMEs e mid-market**
• Prêmios competitivos

**Produtos:**
• Seguro de Crédito Digital
• Whole Turnover simplificado
• Key Buyer
• Integração via API

**Vantagens:**
• Menos burocracia que seguradoras tradicionais
• Onboarding em dias (não semanas)
• Portal de gestão moderno
• Suporte ágil

**Ideal para:** PMEs e empresas de tecnologia que buscam agilidade e processo digital.`},{keywords:["chubb","bespoke","tailor"],category:"seguradora",answer:`**Chubb**

🏢 Maior seguradora de capital aberto do mundo.

**Números:**
• Presente em **54 países**
• Rating: **AA** (S&P)
• Prêmios: USD 40+ bilhões/ano

**Diferenciais em Crédito:**
• Soluções **bespoke** (sob medida)
• Capacidade muito alta para grandes riscos
• Subscrição conservadora e sólida
• Forte em segmentos específicos

**Produtos:**
• Whole Turnover customizado
• Single Risk / Single Buyer
• Excess of Loss
• Soluções estruturadas

**Quando escolher Chubb:**
• Necessidade de solução **sob medida**
• Valoriza **rating elevado** (AA)
• Grandes corporações
• Programas globais

**Ideal para:** Empresas que precisam de soluções customizadas com uma seguradora de rating máximo.`},{keywords:["seguradoras","quais seguradoras","opcoes","mercado","comparar seguradoras","comparativo"],category:"seguradora",answer:`**Seguradoras de Crédito no Brasil — Comparativo**

| Seguradora | Rating | Foco | Diferencial |
|------------|--------|------|-------------|
| **Allianz Trade** | AA | Líder global | EOLIS, 80M+ empresas |
| **Coface** | AA- | Top 3 global | DRA rating, CofaNet |
| **Atradius** | A | Top 3 global | Collections, Modula |
| **CESCE** | A | Ibero-LATAM | PMEs, processo simples |
| **AIG** | A+ | Grandes riscos | Risco político |
| **AVLA** | — | Digital LATAM | 100% digital, ágil |
| **Chubb** | AA | Bespoke | Sob medida, capacidade |

**Market share global:**
• Allianz Trade: ~34%
• Coface: ~16%
• Atradius: ~14%
• Outras: ~36%

**Dica:** A escolha depende do **perfil da empresa**:
• PME → CESCE, AVLA
• Exportadora → Allianz Trade, Coface
• Grande corporação → Chubb, AIG
• Digital-first → AVLA
• Cobrança internacional → Atradius

Posso detalhar qualquer seguradora específica!`},{keywords:["como contratar","contratar","processo contratacao","etapas"],category:"processo",answer:`**Como Contratar Seguro de Crédito**

**Etapas do processo:**

**1. Diagnóstico Inicial**
• Análise do perfil da empresa
• Volume de vendas a prazo
• Número de compradores
• Histórico de inadimplência

**2. Coleta de Documentação**
• Balanço patrimonial (3 últimos anos)
• DRE (Demonstrativo de Resultados)
• Lista de compradores com limites desejados
• Aging de recebíveis
• Histórico de perdas (últimos 3-5 anos)

**3. Cotação (5-10 dias)**
• Envio do risco para seguradoras
• Análise dos compradores
• Proposta com condições e prêmio

**4. Negociação**
• Ajuste de PMI, POS, AAD
• Definição de limites
• Escolha de coberturas

**5. Emissão da Apólice (3-5 dias)**
• Aceite da proposta
• Emissão e pagamento do prêmio
• Ativação dos limites de crédito

**Prazo total:** 15 a 30 dias

💡 Pelo **SENTINEL**, o processo é mais rápido: cotação em **minutos** com comparação automática de seguradoras.`},{keywords:["documentos","documentacao","papeis","o que precisa"],category:"processo",answer:`**Documentação Necessária para Seguro de Crédito**

**Documentos obrigatórios:**

1. **Da empresa (segurado):**
   • CNPJ e Contrato Social
   • Balanço Patrimonial (últimos 3 anos)
   • DRE (Demonstrativo de Resultados)
   • Faturamento mensal dos últimos 12 meses
   • Projeção de vendas a prazo (12 meses)

2. **Dos compradores (devedores):**
   • Lista com CNPJ e razão social
   • Limite de crédito desejado por comprador
   • Volume atual de vendas por comprador
   • Prazo de pagamento praticado
   • Histórico de pagamento

3. **Informações adicionais:**
   • Aging de recebíveis (30/60/90/120/180 dias)
   • Histórico de inadimplência (últimos 5 anos)
   • Setor de atuação dos compradores
   • Garantias existentes (aval, hipoteca, etc.)
   • Seguro de crédito anterior (se houver)

**Para exportação (adicional):**
   • Países de destino
   • Incoterms utilizados
   • Moeda das operações
   • Instrumentos de pagamento (carta de crédito, open account, etc.)`},{keywords:["prazo analise","quanto tempo","demora","tempo aprovacao"],category:"processo",answer:`**Prazos no Seguro de Crédito**

| Etapa | Prazo |
|-------|-------|
| Cotação | 5 a 10 dias úteis |
| Análise de compradores | 2 a 5 dias por lote |
| Emissão da apólice | 3 a 5 dias úteis |
| Aprovação de novo limite | 24 a 72 horas |
| Notificação de sinistro | Até 30 dias do vencimento |
| Pagamento de indenização | 30 a 60 dias após mora |

**Pelo SENTINEL:**
• Cotação comparativa: **minutos**
• Proposta preliminar: **24 horas**
• Emissão: **2-3 dias**

**Dica:** Quanto mais completa a documentação, mais rápido o processo.`},{keywords:["renovacao","renovar","vencimento apolice"],category:"processo",answer:`**Renovação da Apólice de Seguro de Crédito**

**Prazo:** Apólice anual, renovação **60-90 dias** antes do vencimento.

**Processo de renovação:**

1. **Seguradora envia proposta** (60-90 dias antes)
   • Novas condições baseadas no histórico
   • Ajuste de prêmio (bonus/malus)
   • Revisão de limites

2. **Análise do segurado**
   • Comparar com condições atuais
   • Avaliar sinistralidade do período
   • Negociar condições

3. **Negociação**
   • PMI e POS
   • Franquia/AAD
   • Prêmio
   • Inclusão/exclusão de compradores

4. **Aceite e emissão**
   • Assinatura do endosso de renovação
   • Continuidade da cobertura

**Bonus/Malus:**
• Sem sinistros: **desconto de 5% a 15%** no prêmio
• Com sinistros: **aumento de 10% a 30%**
• Sinistralidade alta: seguradora pode recusar renovação

**Dica:** Use o período de renovação para **cotar com outras seguradoras** e garantir as melhores condições.`},{keywords:["sinistro","acionar","como acionar","indenizacao processo","comunicar sinistro"],category:"processo",answer:`**Como Acionar o Seguro de Crédito (Sinistro)**

**Passo a passo:**

**1. Notificação de Atraso (obrigatória)**
• Prazo: **30 a 60 dias** após o vencimento da fatura
• Canal: Portal da seguradora ou e-mail
• Informar: Devedor, valor, vencimento, NF

**2. Período de Cobrança**
• Seguradora pode iniciar cobrança amigável
• Segurado deve colaborar com documentação
• Prazo: até completar 150-180 dias de atraso

**3. Caracterização do Sinistro**
• **Mora prolongada:** Após 150-180 dias de atraso
• **Insolvência:** Decreto de falência ou RJ deferida

**4. Regulação do Sinistro**
• Seguradora analisa documentação
• Verifica cobertura e limites
• Calcula indenização (valor × PMI)

**5. Pagamento da Indenização**
• Prazo: **30 a 60 dias** após regulação
• Pagamento direto ao segurado
• Seguradora se sub-roga nos direitos

**Documentos para o sinistro:**
• Notas fiscais
• Duplicatas/boletos
• Contratos de venda
• Comprovantes de entrega
• Correspondência de cobrança
• Certidão de RJ/falência (se aplicável)

⚠️ **ATENÇÃO:** Não notificar no prazo pode resultar em **perda do direito** à indenização.`},{keywords:["prazo indenizacao","quando recebo","tempo indenizacao","pagar indenizacao"],category:"processo",answer:`**Prazo de Indenização no Seguro de Crédito**

**Prazos por tipo de sinistro:**

| Tipo | Prazo de Mora | Waiting Period | Pagamento |
|------|---------------|----------------|----------|
| Mora prolongada | 150-180 dias | 30-60 dias | **Total: 6-8 meses** |
| Insolvência | N/A | 30 dias | **1-2 meses após decreto** |
| Risco Político | N/A | 180 dias | **6-9 meses após evento** |

**Cálculo da indenização:**
• Valor da dívida: R$ 1.000.000
• (-) AAD já atingido: sem desconto
• (×) PMI 85%: R$ 850.000
• (=) **Indenização: R$ 850.000**

**Fatores que aceleram:**
• Documentação completa e organizada
• Notificação feita dentro do prazo
• Colaboração com a cobrança da seguradora

**Fatores que atrasam:**
• Disputa comercial com o devedor
• Documentação incompleta
• Limite excedido (parcela não coberta)

Algumas seguradoras oferecem **antecipação parcial** da indenização.`},{keywords:["quanto custa","preco","valor","taxa","custo","premio"],category:"preco",answer:`**Quanto Custa o Seguro de Crédito?**

**Taxa média por setor:**

| Setor | Taxa (% faturamento) |
|-------|---------------------|
| Alimentos/Bebidas | 0,10% a 0,25% |
| Químico | 0,15% a 0,30% |
| Metalúrgico | 0,15% a 0,35% |
| Têxtil | 0,20% a 0,40% |
| Distribuição | 0,15% a 0,30% |
| Tecnologia | 0,10% a 0,25% |
| Construção Civil | 0,25% a 0,50% |
| Agronegócio | 0,15% a 0,35% |

**Prêmio mínimo:**
• R$ 15.000 a R$ 30.000/ano (dependendo da seguradora)

**Exemplo prático:**
• Faturamento a prazo: R$ 50 milhões/ano
• Taxa: 0,20%
• **Prêmio anual: R$ 100.000**
• Prêmio mensal: ~R$ 8.333

**Para cada R$ 1 de prêmio, você protege ~R$ 500 de faturamento.**

**Fatores que influenciam a taxa:**
• Setor de atuação
• Diversificação de compradores
• Histórico de sinistralidade
• PMI e POS escolhidos
• Franquia/AAD
• Prazo de pagamento

Quer uma cotação personalizada? Clique em **Fazer Cotação** acima!`},{keywords:["premio minimo","minimo","empresa pequena","faturamento minimo"],category:"preco",answer:`**Prêmio Mínimo de Seguro de Crédito**

**Por seguradora (referência):**

| Seguradora | Prêmio Mínimo Anual |
|------------|--------------------|
| Allianz Trade | R$ 25.000 - R$ 30.000 |
| Coface | R$ 20.000 - R$ 25.000 |
| Atradius | R$ 20.000 - R$ 30.000 |
| CESCE | R$ 15.000 - R$ 20.000 |
| AVLA | R$ 15.000 - R$ 20.000 |
| AIG | R$ 50.000+ |
| Chubb | R$ 50.000+ |

**Faturamento mínimo recomendado:** R$ 5 milhões/ano a prazo

**Para empresas menores:**
• CESCE e AVLA têm soluções para **PMEs**
• Apólices simplificadas com limites menores
• Processo de contratação mais ágil

**Dica:** Se o faturamento for menor que R$ 5 milhões, avalie se o custo do seguro compensa em relação ao risco real de inadimplência.`},{keywords:["fator influencia","o que afeta","como calcula","calculo premio","precificacao"],category:"preco",answer:`**Fatores que Influenciam o Prêmio do Seguro de Crédito**

**1. Perfil da Empresa (Segurado)**
• Setor de atuação
• Faturamento total e a prazo
• Diversificação de compradores
• Histórico de inadimplência
• Experiência anterior com seguro de crédito

**2. Perfil dos Compradores (Devedores)**
• Rating de crédito médio
• Concentração (top 10 = % do total)
• Setores dos compradores
• Localização geográfica
• Prazo de pagamento

**3. Estrutura da Apólice**
• PMI (maior PMI = maior prêmio)
• POS (maior POS = menor prêmio)
• AAD/Franquia (maior AAD = menor prêmio)
• Tipo: Whole Turnover vs Key Buyer
• Cobertura: doméstico, exportação ou misto

**4. Sinistralidade Histórica**
• Sem sinistros: bônus de 5% a 15%
• Sinistros frequentes: malus de 10% a 30%
• Loss ratio: prêmio pago vs indenizações recebidas

**5. Condições de Mercado**
• Economia: recessão → taxas mais altas
• Concorrência entre seguradoras
• Capacidade disponível`},{keywords:["bonus malus","bonus","malus","desconto renovacao","sinistralidade"],category:"preco",answer:`**Sistema Bonus/Malus no Seguro de Crédito**

Ajuste do prêmio na renovação baseado no **histórico de sinistralidade**.

**Bonus (desconto):**
• Sem sinistros no ano: **-5% a -15%** no prêmio
• 2 anos sem sinistros: **-10% a -20%**
• 3+ anos sem sinistros: **-15% a -25%**

**Malus (aumento):**
• Sinistralidade 50-70%: **+10% a +20%**
• Sinistralidade 70-100%: **+20% a +40%**
• Sinistralidade >100%: **renegociação total** ou não renovação

**Sinistralidade = Indenizações / Prêmio Pago × 100**

**Exemplo:**
• Prêmio: R$ 100.000
• Indenizações: R$ 30.000
• Sinistralidade: 30%
• Resultado: Bônus na renovação!

**Dica:** Mesmo utilizando o seguro (recebendo indenizações), se a sinistralidade for controlada, a empresa mantém condições favoráveis.`},{keywords:["iof","imposto","tributo","fiscal"],category:"preco",answer:`**IOF no Seguro de Crédito**

**Alíquota de IOF:**
• **Seguro de Crédito Interno (0171):** 0% (isento)
• **Seguro de Crédito à Exportação (0172):** 0% (isento)

✅ **O Seguro de Crédito é ISENTO de IOF**, diferentemente de outros seguros.

**Base legal:** Decreto 6.306/2007, Art. 32, que isenta operações de seguro de crédito à exportação e operações de seguro de crédito interno.

**Comparação com outros seguros:**
| Seguro | IOF |
|--------|-----|
| Seguro de Crédito | **0%** |
| Seguro Garantia | 0% |
| Seguro Empresarial | 7,38% |
| Seguro Auto | 7,38% |
| Seguro Vida | 0,38% |

**Outros tributos sobre o prêmio:**
• PIS: 0,65%
• COFINS: 4%
• ISS: varia por município

(Esses tributos já estão incluídos na taxa cotada pela seguradora.)`},{keywords:["susep","regulamentacao","regulacao","orgao regulador"],category:"legislacao",answer:`**SUSEP — Superintendência de Seguros Privados**

Órgão regulador do mercado de seguros no Brasil.

**Regulamentação do Seguro de Crédito:**

**Ramos SUSEP:**
• **0171** — Crédito Interno
• **0172** — Crédito à Exportação

**Principais normas:**
• **Circular SUSEP 553/2017** — Provisões técnicas
• **Resolução CNSP 432/2021** — Seguro de crédito
• **Circular SUSEP 621/2020** — Condições contratuais

**Exigências regulatórias:**
• Seguradoras devem ter **autorização SUSEP**
• Provisões técnicas adequadas
• Capital mínimo de solvência
• Limites de retenção por risco
• Reportes periódicos

**Proteção ao segurado:**
• Condições gerais padronizadas
• Prazos de pagamento de sinistros
• Canal de reclamações (SUSEP)
• Fundo garantidor (limitado)

**Dica:** Sempre verifique se a seguradora é **autorizada pela SUSEP** antes de contratar.`},{keywords:["decreto lei 73","decreto 73","lei basica","marco regulatorio"],category:"legislacao",answer:`**Decreto-Lei 73/1966 — Marco Regulatório dos Seguros**

Lei que criou o **Sistema Nacional de Seguros Privados**.

**Estrutura criada:**
• **CNSP** (Conselho Nacional de Seguros Privados) — normas
• **SUSEP** (Superintendência de Seguros Privados) — fiscalização
• **IRB** (Instituto de Resseguros do Brasil) — resseguro
• Seguradoras autorizadas
• Corretores habilitados

**Pontos relevantes para Seguro de Crédito:**
• Art. 5º — Classifica ramos de seguro
• Art. 8º — Competências do CNSP
• Art. 36 — Autorização para operar
• Art. 73 — Provisões técnicas
• Art. 108 — Obrigações dos corretores

**Importância:**
• Base de toda a regulamentação de seguros no Brasil
• Define a estrutura institucional
• Estabelece princípios de proteção ao segurado
• Regulamenta a atividade de corretagem

Embora de 1966, o Decreto-Lei 73 continua sendo a **base legal** do setor, complementado por normas da SUSEP e CNSP.`},{keywords:["lei 6704","6704","seguro credito exportacao lei"],category:"legislacao",answer:`**Lei 6.704/1979 — Seguro de Crédito à Exportação**

Lei específica que regula o Seguro de Crédito à Exportação no Brasil.

**Pontos principais:**

• **Art. 1º:** Define o seguro de crédito à exportação
• **Art. 2º:** Riscos cobertos (comercial e político)
• **Art. 3º:** Fundo de Garantia à Exportação (FGE)
• **Art. 4º:** Cobertura do Tesouro Nacional para risco político
• **Art. 5º:** Condições de apólice

**FGE (Fundo de Garantia à Exportação):**
• Fundo público vinculado ao Ministério da Fazenda
• Garante operações de **longo prazo** (acima de 2 anos)
• Cobre **risco político** em operações de grande porte
• Operado pela **ABGF** (Agência Brasileira Gestora de Fundos)

**Relevância prática:**
• Exportações de bens de capital de longo prazo
• Financiamentos BNDES Exim com cobertura FGE
• Operações com países de risco elevado

Para **exportações de curto prazo** (até 2 anos), o seguro de crédito é contratado diretamente com seguradoras privadas (Allianz Trade, Coface, etc.).`},{keywords:["codigo civil","art 757","contrato seguro","lei civil"],category:"legislacao",answer:`**Código Civil — Artigos 757 a 802 (Contrato de Seguro)**

Base legal para **todos os contratos de seguro** no Brasil.

**Artigos relevantes para Seguro de Crédito:**

• **Art. 757:** Define contrato de seguro
• **Art. 762:** Proíbe seguro para atos dolosos
• **Art. 763:** Perda de direito por informação falsa
• **Art. 766:** Dever de boa-fé (segurado deve informar riscos)
• **Art. 769:** Agravamento do risco (notificar seguradora)
• **Art. 771:** Obrigação de comunicar sinistro
• **Art. 776:** Sub-rogação da seguradora
• **Art. 778:** Limite da indenização

**Princípios aplicáveis:**
• **Boa-fé:** Segurado deve declarar informações verdadeiras
• **Interesse segurável:** Segurado deve ter interesse legítimo
• **Indenização:** Seguro não pode gerar lucro
• **Sub-rogação:** Seguradora assume direitos do segurado

**Na prática do Seguro de Crédito:**
• O segurado deve informar mudanças nos devedores
• Não pode ocultar informações de inadimplência
• Deve colaborar com a cobrança
• Documentação deve ser verdadeira`},{keywords:["lei 11101","11101","falencia","recuperacao","lei falencias"],category:"legislacao",answer:`**Lei 11.101/2005 — Lei de Falências e Recuperação Judicial**

Fundamental para o Seguro de Crédito pois define os eventos de **insolvência**.

**Eventos que geram sinistro:**

1. **Recuperação Judicial (Art. 47-72)**
   • Devedor pede RJ ao juízo
   • Juiz defere o processamento
   • Plano de pagamento aprovado pelos credores
   • **Sinistro:** deferimento da RJ

2. **Recuperação Extrajudicial (Art. 161-167)**
   • Acordo direto com credores
   • Homologação judicial
   • Menos frequente

3. **Falência (Art. 73-160)**
   • Liquidação dos ativos
   • Ordem de pagamento dos credores
   • **Sinistro:** decretação da falência

**Impacto no Seguro de Crédito:**
• Créditos devem ser **habilitados** no processo
• Seguradora se sub-roga nos direitos
• Ordem de preferência: trabalhista > tributário > quirografário
• Crédito segurado é geralmente **quirografário**

**Reforma de 2020 (Lei 14.112/2020):**
• Modernizou procedimentos
• Criou mecanismos de financiamento DIP
• Ampliou prazos de RJ
• Impacta análise de risco das seguradoras`},{keywords:["vantagens","beneficios","por que contratar","vale a pena"],category:"vantagens",answer:`**Vantagens do Seguro de Crédito**

**1. Proteção contra Inadimplência**
• Indenização de **85% a 95%** do valor da venda
• Cobertura contra falência e mora prolongada
• Proteção contra risco político (exportação)

**2. Inteligência de Crédito**
• Acesso a bases de dados da seguradora
• Rating e análise de cada comprador
• Monitoramento contínuo dos devedores
• Alertas de deterioração de crédito

**3. Melhoria Financeira**
• **Melhor rating** da empresa segurada
• Acesso a **financiamento mais barato**
• Recebíveis segurados valem mais como garantia
• Redução de necessidade de provisão para devedores duvidosos

**4. Cobrança Especializada**
• Seguradora realiza cobrança profissional
• Rede internacional de cobrança
• Maior taxa de recuperação

**5. Crescimento Seguro**
• Vender a prazo com confiança
• Entrar em novos mercados
• Ampliar prazo de pagamento
• Aceitar novos clientes

**6. Substituição de Garantias**
• Não precisa exigir aval/fiança do comprador
• Relação comercial mais fluida
• Processo de venda mais rápido

**ROI típico:** Para cada R$ 1 investido em prêmio, a empresa protege R$ 400 a R$ 700 em faturamento.`},{keywords:["protecao inadimplencia","calote","nao pagar","devedor nao paga"],category:"vantagens",answer:`**Proteção contra Inadimplência**

O Seguro de Crédito é a principal ferramenta para proteger seu faturamento.

**Cenário SEM seguro:**
• Venda de R$ 500.000 a prazo
• Comprador não paga
• Perda total: **R$ 500.000**
• Para compensar: precisa vender R$ 5M extras (margem 10%)

**Cenário COM seguro:**
• Venda de R$ 500.000 a prazo
• Comprador não paga
• Seguro indeniza 85%: **R$ 425.000**
• Perda real: R$ 75.000
• Prêmio anual do seguro: ~R$ 20.000

**Resultado:** O seguro transformou uma perda de R$ 500.000 em R$ 95.000 (prêmio + POS).

**Dados do mercado brasileiro:**
• Taxa de inadimplência B2B: **3% a 7%** do faturamento
• Empresas que fecham por inadimplência: **25%** das falências
• Tempo médio de recuperação sem seguro: **18 meses**
• Tempo com seguro: **6-8 meses** (e com indenização)

O seguro de crédito é **investimento**, não custo.`},{keywords:["rating credito","melhoria rating","credit rating","nota credito"],category:"vantagens",answer:`**Melhoria do Rating de Crédito com Seguro de Crédito**

**Como o seguro melhora seu rating:**

1. **Recebíveis mais seguros**
   • Bancos consideram recebíveis segurados como de menor risco
   • Melhor classificação na análise de crédito

2. **Redução de PDD**
   • Provisão para Devedores Duvidosos diminui
   • Balanço mais saudável
   • Resultado líquido maior

3. **Acesso a crédito**
   • Linhas de financiamento com juros menores
   • Limite de crédito ampliado
   • Operações de cessão de recebíveis facilitadas

4. **BNDES e agências de fomento**
   • BNDES Exim exige ou recomenda seguro de crédito
   • Facilita ACC/ACE com bancos
   • Melhora condições de financiamento à exportação

**Impacto estimado:**
• Redução de custo de crédito: **0,5% a 2% ao ano**
• Em financiamento de R$ 10M: economia de R$ 50.000 a R$ 200.000/ano
• Muitas vezes **o seguro se paga** pela redução do custo financeiro`},{keywords:["cobranca","recuperacao","cobranca especializada"],category:"vantagens",answer:`**Cobrança Especializada no Seguro de Crédito**

As seguradoras de crédito possuem **redes de cobrança** altamente eficientes.

**Serviços incluídos:**
• Cobrança amigável (cartas, telefonemas, negociação)
• Cobrança judicial (quando necessário)
• Mediação e arbitragem
• Cobrança internacional (exportação)

**Seguradoras e suas redes:**
| Seguradora | Rede de Cobrança |
|------------|------------------|
| Allianz Trade | Própria em 52 países |
| Coface | Própria em 100 países |
| Atradius | Atradius Collections - 96 países |
| CESCE | Parceiros locais |

**Taxas de recuperação:**
• Sem seguro: **30% a 40%** (média brasileira)
• Com seguradora: **60% a 75%** (cobrança especializada)

**Processo:**
1. Segurado notifica atraso
2. Seguradora inicia cobrança (incluída no seguro)
3. Se recuperar: crédito volta ao segurado
4. Se não recuperar: sinistro → indenização

**Atradius Collections** pode ser contratado separadamente para empresas que não têm seguro de crédito.`},{keywords:["substituicao garantia","sem aval","sem fianca","garantia real"],category:"vantagens",answer:`**Substituição de Garantias Reais**

O seguro de crédito **elimina a necessidade** de exigir garantias dos compradores.

**SEM seguro — garantias necessárias:**
• Aval de sócios
• Fiança bancária
• Hipoteca
• Penhor de estoque
• Alienação fiduciária

**COM seguro — nenhuma garantia necessária:**
• A seguradora assume o risco
• Comprador compra sem amarras
• Relação comercial mais fluida
• Processo de venda mais rápido

**Benefícios comerciais:**
• Clientes preferem fornecedores que **não exigem garantias**
• Você **ganha competitividade** no mercado
• Pode oferecer **prazos maiores** com segurança
• Novos clientes compram com mais facilidade

**Exemplo:**
• Seu concorrente exige aval e fiança
• Você oferece 90 dias sem garantia (com seguro)
• O cliente **escolhe você**

O custo do seguro é amplamente compensado pelo **ganho comercial**.`},{keywords:["como funciona indenizacao","indenizacao","receber indenizacao","processo indenizacao"],category:"indenizacao",answer:`**Como Funciona a Indenização no Seguro de Crédito**

**Cálculo da indenização:**

| Componente | Valor |
|-----------|-------|
| Dívida do comprador | R$ 1.000.000 |
| (-) Pagamentos parciais | R$ 100.000 |
| (=) Saldo devedor | R$ 900.000 |
| (×) PMI (85%) | R$ 765.000 |
| (-) Franquia/AAD | Depende da apólice |
| (=) **Indenização** | **R$ 765.000** |

**Etapas:**
1. **Notificação** do atraso (dentro do prazo)
2. **Período de mora** (150-180 dias) ou declaração de insolvência
3. **Regulação** pela seguradora (análise documental)
4. **Pagamento** da indenização (30-60 dias)
5. **Sub-rogação** — seguradora assume o direito de cobrança

**Após a indenização:**
• Se a seguradora recuperar valores do devedor, divide com o segurado proporcionalmente à POS
• Se o segurado receber pagamento direto do devedor após a indenização, deve repassar à seguradora

**Importante:** A indenização **nunca excede** a perda real. O seguro é indenizatório, não pode gerar lucro para o segurado.`},{keywords:["pmi pos","pmi e pos","o que e pmi","o que e pos","pmi pos diferenca"],category:"tecnico",answer:`**PMI e POS — Os Dois Lados da Moeda**

**PMI (Percentual Máximo de Indenização):**
• É o que a **seguradora paga** do sinistro
• Varia de **75% a 95%**
• Quanto maior, mais caro o prêmio

**POS (Participação Obrigatória do Segurado):**
• É o que o **segurado absorve** do sinistro
• POS = 100% - PMI
• Quanto maior, mais barato o prêmio

**Exemplos:**
| PMI | POS | Perda R$ 1M | Seguradora paga | Você absorve |
|-----|-----|-------------|-----------------|-------------|
| 75% | 25% | R$ 1.000.000 | R$ 750.000 | R$ 250.000 |
| 85% | 15% | R$ 1.000.000 | R$ 850.000 | R$ 150.000 |
| 90% | 10% | R$ 1.000.000 | R$ 900.000 | R$ 100.000 |
| 95% | 5% | R$ 1.000.000 | R$ 950.000 | R$ 50.000 |

**Como escolher:**
• **Mais proteção** → PMI alto (90-95%) → Prêmio maior
• **Menor custo** → PMI menor (75-85%) → Prêmio menor
• **Equilíbrio** → PMI 85% é o mais comum no mercado

A POS existe para que o segurado mantenha **interesse em prevenir perdas**.`},{keywords:["whole turnover key buyer","diferenca whole key","global nomeado","qual modalidade"],category:"cobertura",answer:`**Whole Turnover vs Key Buyer — Qual Escolher?**

| Critério | Whole Turnover | Key Buyer |
|----------|---------------|-----------|
| **Cobertura** | Toda a carteira | Compradores selecionados |
| **Custo total** | Maior (cobre tudo) | Menor (cobre menos) |
| **Custo unitário** | Menor por comprador | Maior por comprador |
| **Diversificação** | Sim (menor risco) | Não |
| **Gestão** | Mais complexa | Mais simples |
| **AAD/Franquia** | Comum | Raro |
| **Anti-seleção** | Sem risco | Risco maior |
| **Ideal para** | Carteira diversificada | Poucos grandes compradores |

**Escolha Whole Turnover se:**
• Tem muitos compradores (50+)
• Quer proteção total
• Aceita franquia/AAD
• Faturamento alto e diversificado

**Escolha Key Buyer se:**
• Tem poucos grandes compradores (5-20)
• Quer proteger apenas os maiores riscos
• Orçamento limitado para seguro
• Concentração em poucos clientes

**Na dúvida?** Peça cotação de ambas as modalidades para comparar!`},{keywords:["setor","industria","segmento","quais setores","area atuacao"],category:"setor",answer:`**Setores que mais utilizam Seguro de Crédito no Brasil**

| Setor | Taxa Média | Risco |
|-------|-----------|-------|
| Alimentos/Bebidas | 0,10% - 0,25% | Baixo-Médio |
| Químico/Petroquímico | 0,15% - 0,30% | Médio |
| Metalúrgico/Siderúrgico | 0,15% - 0,35% | Médio |
| Têxtil/Confecções | 0,20% - 0,40% | Médio-Alto |
| Papel/Celulose | 0,12% - 0,25% | Baixo-Médio |
| Eletrônicos/Tecnologia | 0,10% - 0,25% | Baixo-Médio |
| Construção Civil | 0,25% - 0,50% | Alto |
| Agronegócio | 0,15% - 0,35% | Médio |
| Farmacêutico | 0,10% - 0,20% | Baixo |
| Automotivo (autopeças) | 0,15% - 0,30% | Médio |

**Setores com maior sinistralidade:**
• Construção civil (ciclo econômico)
• Varejo (margens apertadas)
• Têxtil (concorrência importados)

**Setores com menor sinistralidade:**
• Farmacêutico (demanda estável)
• Alimentos essenciais
• Utilities e energia

A taxa varia conforme o **perfil específico** da empresa e seus compradores.`},{keywords:["agronegocio","agro","rural","safra","commodities"],category:"setor",answer:`**Seguro de Crédito para o Agronegócio**

Setor com características específicas no seguro de crédito.

**Particularidades:**
• Sazonalidade das vendas (safra/entressafra)
• Compradores de diferentes portes (tradings a cooperativas)
• Operações em USD para exportação
• Prazos de pagamento mais longos em algumas cadeias

**Coberturas relevantes:**
• **Crédito Interno:** Vendas de insumos, fertilizantes, defensivos
• **Crédito à Exportação:** Commodities (soja, café, açúcar, carne)
• **Risco Político:** Exportação para mercados emergentes

**Seguradoras com expertise em agro:**
• Allianz Trade (cobertura global de commodities)
• Coface (análise setorial detalhada)
• Chubb (grandes operações)

**Atenção:**
• Trading companies são analisadas como compradores
• Cooperativas podem ter análise de crédito diferenciada
• Operações com prazo > 180 dias podem ter tratamento especial

**Taxa média:** 0,15% a 0,35% do faturamento a prazo.`},{keywords:["mercado brasileiro","tamanho mercado","estatisticas","numeros","dados mercado"],category:"mercado",answer:`**Mercado de Seguro de Crédito no Brasil**

**Números do mercado (referência):**
• Prêmios anuais: **R$ 800 milhões a R$ 1 bilhão**
• Crescimento anual: **8% a 12%**
• Penetração: **menos de 5%** das empresas elegíveis
• Potencial de crescimento: **muito alto**

**Comparação internacional:**
| País/Região | Penetração |
|-------------|------------|
| Europa Ocidental | 15% - 25% |
| Ásia | 5% - 10% |
| **Brasil** | **3% - 5%** |
| EUA | 5% - 8% |

**Por que a penetração é baixa no Brasil?**
• Desconhecimento do produto
• Cultura de "auto-segurar" o risco
• Departamentos de crédito internos
• Custo percebido (mas é baixo!)

**Tendências:**
• Digitalização (plataformas como SENTINEL)
• Crescimento pós-pandemia (empresas viram a necessidade)
• Mais seguradoras entrando no mercado
• Produtos para PMEs se tornando viáveis

O mercado tem **enorme potencial** de crescimento nos próximos anos.`},{keywords:["pandemia","covid","crise","recessao","cenario economico"],category:"mercado",answer:`**Seguro de Crédito em Cenários de Crise**

**Lições da pandemia (COVID-19):**
• Aumento de inadimplência B2B: **40% a 60%**
• Seguradoras reduziram limites de crédito
• Empresas com seguro receberam indenizações
• Empresas sem seguro tiveram perdas totais

**O que acontece em recessão?**
• **Sem seguro:** Perdas aumentam, caixa é afetado, empresa pode quebrar
• **Com seguro:** Perdas são indenizadas, caixa protegido, empresa sobrevive

**Comportamento das seguradoras em crise:**
• Revisão de limites de crédito (para baixo)
• Aumento de taxas na renovação
• Monitoramento mais intensivo
• Restrição de novas apólices em setores afetados

**Estratégia recomendada:**
• Contratar seguro **antes** da crise (quando é mais barato)
• Manter apólice ativa mesmo em anos bons (bônus)
• Diversificar carteira de compradores
• Usar informações da seguradora para gestão de risco

**Seguro de Crédito é como guarda-chuva:** Compre quando está sol, use quando chover.`},{keywords:["gestao risco","risk management","gerenciamento","analise risco"],category:"gestao",answer:`**Gestão de Risco com Seguro de Crédito**

O seguro de crédito é uma **ferramenta de gestão**, não apenas uma apólice.

**Pilares da gestão de risco de crédito:**

**1. Prevenção**
• Análise de crédito dos compradores (feita pela seguradora)
• Monitoramento contínuo
• Alertas de deterioração
• Definição de limites adequados

**2. Mitigação**
• Diversificação de carteira
• Limites de exposição por comprador
• Prazos de pagamento adequados
• Garantias complementares quando necessário

**3. Transferência**
• Seguro de crédito (transfere o risco para a seguradora)
• PMI define o nível de transferência
• AAD/Franquia define a retenção

**4. Monitoramento**
• Acompanhamento de aging
• Alertas de atraso
• Indicadores de sinistralidade
• Relatórios da seguradora

**Benefício integrado:**
A seguradora não é apenas uma "pagadora de sinistros" — ela é uma **parceira de gestão de risco**, fornecendo informação e inteligência de crédito.

Plataformas como o **SENTINEL** integram todos esses pilares em uma única solução.`},{keywords:["concentracao","risco concentracao","dependencia","cliente grande"],category:"gestao",answer:`**Risco de Concentração no Seguro de Crédito**

Quando poucos compradores representam grande parte do faturamento.

**Cenário de risco:**
• Top 5 compradores = 60%+ do faturamento
• Se um não pagar, impacto é enorme
• Diversificação insuficiente

**Como o seguro ajuda:**
• Protege contra calote dos maiores clientes
• Seguradora analisa o risco de cada grande comprador
• Alertas se o comprador deteriorar
• Indenização protege o caixa

**Modalidades indicadas:**
• **Key Buyer:** Segurar especificamente os grandes compradores
• **Single Risk:** Para operações pontuais de alto valor
• **Whole Turnover:** Se quiser proteger toda a carteira

**Limite de concentração:**
• Seguradoras podem limitar a exposição máxima a um único devedor
• Geralmente não mais que **15-20% da carteira** por comprador
• Acima disso: prêmio adicional ou Top-Up necessário

**Dica:** Se um cliente representa mais de 20% do seu faturamento, seguro de crédito é **essencial**.`},{keywords:["resseguro","reinsurance","capacidade","retrocessao"],category:"resseguro",answer:`**Resseguro no Seguro de Crédito**

As seguradoras transferem parte do risco para **resseguradoras**.

**Como funciona:**
• Seguradora retém parte do risco
• Excedente é transferido ao ressegurador
• Permite aceitar riscos maiores

**Principais resseguradores:**
• **Munich Re** (líder global)
• **Swiss Re**
• **Hannover Re**
• **SCOR**
• **IRB Re** (Brasil)

**Impacto para o segurado:**
• Maior capacidade de limites (a seguradora pode aprovar mais)
• Estabilidade das condições
• Segurança adicional (dupla garantia)

**Tipos de resseguro:**
• **Proporcional:** Ressegurador assume % de cada risco
• **Não-proporcional (XL):** Ressegurador paga acima de um patamar
• **Facultativo:** Caso a caso para grandes riscos

**Na prática:**
O segurado não interage com o ressegurador, mas a capacidade de resseguro influencia diretamente os **limites de crédito** que a seguradora pode aprovar.`},{keywords:["tecnologia","digital","plataforma digital","api","integracao"],category:"tecnologia",answer:`**Tecnologia e Digitalização no Seguro de Crédito**

O setor está em plena **transformação digital**.

**Plataformas das seguradoras:**
| Seguradora | Plataforma | Funcionalidades |
|------------|-----------|------------------|
| Allianz Trade | EOLIS | Limites, monitoramento, sinistros |
| Coface | CofaNet | DRA rating, gestão de apólice |
| Atradius | Atradius Insights | Analytics, scoring |
| AVLA | Portal AVLA | 100% digital, API |

**SENTINEL by Fairfield:**
• Motor de subscrição inteligente (IA)
• Cotação comparativa automática
• Dashboard de gestão
• Integração via API com ERPs
• Chatbot especialista (iCover — sou eu!)

**Tendências tecnológicas:**
• **IA/Machine Learning:** Análise preditiva de inadimplência
• **Big Data:** Cruzamento de bases para melhor scoring
• **APIs:** Integração direta com sistemas do segurado
• **Blockchain:** Rastreabilidade de transações (futuro)
• **Open Insurance:** Compartilhamento de dados (regulamentação SUSEP)

**Benefícios da digitalização:**
• Cotação em minutos (antes: semanas)
• Aprovação de limites em horas
• Monitoramento em tempo real
• Sinistro digital (menos burocracia)`},{keywords:["erp","sistema gestao","integracao sistema","sap","totvs"],category:"tecnologia",answer:`**Integração com ERPs e Sistemas de Gestão**

O seguro de crédito pode ser integrado diretamente ao sistema da empresa.

**ERPs compatíveis:**
• **SAP:** Módulo de crédito com integração a seguradoras
• **TOTVS/Protheus:** Customização para gestão de limites
• **Oracle:** Módulo de risk management
• **Outros:** Via API ou arquivo de troca

**O que pode ser integrado:**
• Consulta automática de limite antes de aprovar venda
• Bloqueio de pedido se limite excedido
• Notificação automática de atrasos à seguradora
• Importação de limites aprovados
• Exportação de dados de faturamento

**Benefícios da integração:**
• Elimina controles manuais (planilhas)
• Reduz risco de vender acima do limite
• Agiliza notificação de sinistros
• Automatiza report à seguradora

**SENTINEL oferece:**
• API RESTful para integração
• Webhooks para notificações
• Dashboard independente do ERP
• Suporte a múltiplos formatos de dados`},{keywords:["exemplo","caso pratico","caso real","simulacao","cenario"],category:"exemplo",answer:`**Caso Prático — Seguro de Crédito em Ação**

**Empresa:** Distribuidora de Químicos (faturamento R$ 80M/ano a prazo)

**Situação antes do seguro:**
• 150 compradores ativos
• Top 10 = 45% do faturamento
• Inadimplência média: 3,5% (R$ 2,8M/ano)
• Departamento de crédito com 4 pessoas

**Contratação do seguro:**
• Modalidade: Whole Turnover
• PMI: 85%
• AAD: R$ 300.000
• Prêmio anual: R$ 176.000 (0,22%)

**Ano 1 — Resultados:**
• 3 sinistros (R$ 1.200.000 em perdas)
• AAD absorvido: R$ 300.000
• Indenização recebida: R$ 765.000 (R$ 900.000 × 85%)
• POS absorvido: R$ 135.000
• **Perda líquida: R$ 435.000** (antes seria R$ 1.200.000)
• **Economia: R$ 765.000 - R$ 176.000 (prêmio) = R$ 589.000**

**Benefícios extras:**
• Reduziu equipe de crédito para 2 pessoas
• Obteve financiamento 1% mais barato
• Expandiu vendas para novos clientes com confiança

**ROI do seguro: 435%** no primeiro ano.`},{keywords:["exportacao exemplo","caso exportacao","exemplo internacional"],category:"exemplo",answer:`**Caso Prático — Seguro de Crédito à Exportação**

**Empresa:** Fabricante de autopeças exportando para LATAM e Europa

**Perfil:**
• Faturamento exportação: USD 15M/ano
• 40 compradores em 12 países
• Prazo médio: 90 dias
• Moeda: USD

**Contratação:**
• Cobertura: Risco Comercial + Risco Político
• PMI: 90%
• Prêmio: 0,28% = USD 42.000/ano

**Evento:**
• Comprador na Argentina (USD 800.000 de exposição)
• Governo argentino impõe restrição cambial
• Comprador não consegue enviar pagamento

**Sinistro por Risco Político:**
• Valor: USD 800.000
• PMI 90%: USD 720.000
• Indenização recebida: **USD 720.000**
• Prêmio pago: USD 42.000
• **Retorno: 17x o investimento**

**Sem o seguro:**
• Perda total de USD 800.000
• Impacto devastador no caixa
• Possível inviabilidade das operações na Argentina

Para **exportadoras**, o seguro de crédito é praticamente **obrigatório**.`},{keywords:["melhor seguradora","qual seguradora","comparar","escolher seguradora"],category:"comparativo",answer:`**Como Escolher a Melhor Seguradora de Crédito**

**Depende do perfil da sua empresa:**

**Para PMEs (faturamento até R$ 30M):**
• 1ª opção: **CESCE** (foco em PMEs, prêmio acessível)
• 2ª opção: **AVLA** (processo digital, ágil)
• 3ª opção: **Coface** (EasyLiner para PMEs)

**Para Médias (R$ 30M a R$ 200M):**
• 1ª opção: **Allianz Trade** (maior base de dados)
• 2ª opção: **Coface** (DRA rating excelente)
• 3ª opção: **Atradius** (Modula flexível)

**Para Grandes (acima R$ 200M):**
• 1ª opção: **Allianz Trade** (capacidade global)
• 2ª opção: **Chubb** (soluções bespoke)
• 3ª opção: **AIG** (grandes riscos)

**Para Exportadoras:**
• 1ª opção: **Allianz Trade** (52 países)
• 2ª opção: **Coface** (100 países de informação)
• 3ª opção: **Atradius** (cobrança em 96 países)

**Critérios de escolha:**
• Capacidade de limites
• Velocidade de aprovação
• Qualidade do atendimento
• Prêmio e condições
• Plataforma tecnológica

**Dica:** Sempre cote com **pelo menos 3 seguradoras**. O SENTINEL faz isso automaticamente!`},{keywords:["fidc","fundo","securitizacao","cessao recebiveis","recebiveis"],category:"financeiro",answer:`**Seguro de Crédito e Cessão de Recebíveis (FIDC)**

O seguro de crédito **potencializa** operações de cessão de recebíveis.

**Como funciona com FIDC:**
• Empresa cede recebíveis para um FIDC
• Recebíveis **segurados** têm rating melhor
• FIDC aceita com **deságio menor**
• Empresa obtém **capital mais barato**

**Benefícios do seguro para FIDC:**
| Aspecto | Sem Seguro | Com Seguro |
|---------|-----------|----------|
| Rating dos recebíveis | Menor | Maior |
| Deságio | 2% - 5% ao mês | 1% - 2,5% ao mês |
| Volume aceito | Limitado | Ampliado |
| Subordinação | 20% - 30% | 10% - 15% |

**Economia potencial:**
• Carteira de R$ 50M
• Economia de 1% ao mês no deságio
• = R$ 500.000/mês = **R$ 6M/ano**
• Prêmio do seguro: R$ 100.000/ano
• **ROI: 60x**

**Estruturas comuns:**
• FIDC exclusivo com seguro de crédito
• Factoring com cobertura de seguro
• Forfaiting com seguro (exportação)

Muitos gestores de FIDC **exigem** seguro de crédito como pré-condição.`},{keywords:["compliance","auditoria","governanca","controle interno"],category:"governanca",answer:`**Seguro de Crédito e Governança Corporativa**

O seguro de crédito é um **instrumento de governança** reconhecido.

**Benefícios de compliance:**
• Demonstra gestão profissional de riscos
• Atende exigências de conselhos e comitês
• Reduz provisão para devedores duvidosos (PDD)
• Melhora relatórios de gestão de risco

**Para empresas listadas:**
• Atende requisitos de disclosure de riscos (CVM)
• Demonstra mitigação ativa de risco de crédito
• Melhora avaliação por agências de rating

**Para auditoria:**
• Recebíveis segurados têm tratamento contábil diferenciado
• Redução de PDD impacta positivamente o resultado
• Documentação organizada facilita auditoria

**Para financiadores/investidores:**
• Demonstra gestão responsável
• Melhora credit score da empresa
• Facilita captação de recursos

**Normas relevantes:**
• CPC 48 (IFRS 9) — Instrumentos financeiros
• CPC 25 — Provisões e contingências
• ISO 31000 — Gestão de riscos

Empresas com **boa governança** contratam seguro de crédito como parte da estratégia de gestão de riscos.`},{keywords:["cotacao","fazer cotacao","solicitar","orcamento","proposta"],category:"cotacao",answer:`**Como Fazer uma Cotação de Seguro de Crédito**

**Pelo SENTINEL (mais rápido):**
1. Clique em **"Fazer Cotação"** no topo desta página
2. Preencha os dados da empresa
3. Informe o faturamento a prazo
4. Liste os principais compradores
5. Receba cotações comparativas em **minutos**

**Informações necessárias para cotação:**
• CNPJ da empresa
• Faturamento total e a prazo (últimos 12 meses)
• Número de compradores ativos
• Prazo médio de pagamento
• Setores dos compradores
• Histórico de inadimplência
• Se exporta: países e volumes

**O que você recebe:**
• Comparativo de seguradoras
• Condições: PMI, POS, AAD
• Prêmio anual e forma de pagamento
• Limite discricionário disponível
• Prazo de vigência

**Prazo da cotação:**
• Pelo SENTINEL: **proposta preliminar em minutos**
• Proposta definitiva: 5 a 10 dias úteis

**Sem compromisso** — a cotação é gratuita!

👉 Clique em **"Fazer Cotação"** acima para começar agora.`},{keywords:["clausula","condicoes gerais","contrato","termos","endosso"],category:"contrato",answer:`**Termos Contratuais do Seguro de Crédito**

**Estrutura do contrato:**

1. **Condições Gerais**
   • Definições
   • Coberturas e exclusões
   • Obrigações do segurado
   • Processo de sinistro
   • Disposições gerais

2. **Condições Especiais**
   • PMI e POS
   • AAD/Franquia
   • Limites por tipo
   • Prazos de notificação

3. **Condições Particulares**
   • Dados do segurado
   • Vigência
   • Prêmio
   • Lista de compradores
   • Limites aprovados

**Cláusulas importantes:**
• **Notificação de atraso:** Prazo para avisar a seguradora (30-60 dias)
• **Declaração de faturamento:** Mensal ou trimestral
• **Exclusões:** Partes relacionadas, disputas comerciais, multas
• **Sub-rogação:** Seguradora assume direitos de cobrança
• **Cancelamento de limite:** Seguradora pode reduzir/cancelar

**Endossos comuns:**
• Inclusão/exclusão de compradores
• Alteração de PMI ou AAD
• Extensão de cobertura geográfica
• Ajuste de prêmio (provisório → definitivo)`},{keywords:["exclusao","nao coberto","o que nao cobre","excecao","restricao"],category:"contrato",answer:`**Exclusões do Seguro de Crédito — O que NÃO é coberto**

**Exclusões comuns:**

1. **Partes relacionadas**
   • Vendas para empresas do mesmo grupo
   • Sócios, diretores ou seus familiares

2. **Disputas comerciais**
   • Devedor contesta qualidade do produto
   • Divergência sobre quantidade ou preço
   • Produto devolvido

3. **Venda acima do limite**
   • Exposição excede o limite aprovado
   • Venda após cancelamento do limite

4. **Descumprimento de obrigações**
   • Não notificar atraso no prazo
   • Não declarar faturamento
   • Informações falsas

5. **Eventos específicos:**
   • Flutuação cambial (só o crédito é coberto)
   • Juros e multas contratuais
   • Danos morais
   • Penalidades contratuais
   • Créditos prescritos

6. **Risco nuclear, guerra (em crédito interno)**
   • Atos de guerra no Brasil
   • Contaminação nuclear

**Dica:** Leia atentamente as **Condições Gerais** da apólice. Em caso de dúvida, consulte seu corretor antes de assumir que algo está coberto.`},{keywords:["sub-rogacao","subrogacao","direito cobrar","seguradora cobra"],category:"tecnico",answer:`**Sub-rogação no Seguro de Crédito**

Após pagar a indenização, a seguradora assume o **direito de cobrar** o devedor.

**Como funciona:**
1. Segurado notifica o sinistro
2. Seguradora analisa e paga a indenização
3. Seguradora se **sub-roga** nos direitos do segurado
4. Seguradora cobra o devedor (judicial ou extrajudicial)

**Base legal:** Código Civil, Art. 786

**Valores recuperados:**
• Se a seguradora recuperar valores do devedor:
   - Primeiro reembolsa a **indenização paga**
   - Excedente vai para o segurado (referente à POS)
• Divisão é **proporcional** à participação de cada um

**Exemplo:**
• Perda: R$ 1.000.000
• PMI 85%: Seguradora pagou R$ 850.000
• POS 15%: Segurado absorveu R$ 150.000
• Recuperação: R$ 600.000
• Seguradora recebe: R$ 510.000 (85%)
• Segurado recebe: R$ 90.000 (15%)

**Importante:**
• O segurado deve colaborar com a cobrança
• Não pode negociar separadamente com o devedor
• Documentação deve ser mantida organizada`},{keywords:["declaracao faturamento","report","informar vendas","reporte"],category:"processo",answer:`**Declaração de Faturamento no Seguro de Crédito**

O segurado deve informar periodicamente o faturamento à seguradora.

**Frequência:** Mensal ou trimestral (definido na apólice)

**O que declarar:**
• Faturamento total a prazo no período
• Por comprador (se solicitado)
• Exposição atual por devedor
• Atrasos superiores a 30 dias

**Por que é importante:**
• O prêmio definitivo é calculado sobre o **faturamento real**
• Prêmio provisório é estimado na contratação
• No final do período, faz-se o **ajuste** (mais ou menos a pagar)

**Mecanismo de prêmio:**
• **Prêmio Mínimo:** Valor fixo, pago independente do faturamento
• **Prêmio Provisório:** Estimativa inicial
• **Prêmio Definitivo:** Calculado sobre faturamento real declarado
• **Ajuste:** Diferença entre provisório e definitivo

**Não declarar pode:**
• Prejudicar cobertura em sinistro
• Gerar multa contratual
• Causar cancelamento da apólice

**Dica:** Automatize a declaração integrando o ERP com a plataforma da seguradora.`},{keywords:["prazo pagamento","dias","30 60 90","vencimento","payment terms"],category:"tecnico",answer:`**Prazos de Pagamento Cobertos pelo Seguro de Crédito**

**Prazos mais comuns:**
| Prazo | Frequência | Observação |
|-------|-----------|------------|
| 30 dias | Alta | Muito comum no Brasil |
| 60 dias | Alta | Padrão para indústria |
| 90 dias | Média | Comum em exportação |
| 120 dias | Baixa | Setores específicos |
| 180 dias | Baixa | Máximo padrão |
| 360 dias | Rara | Bens de capital |

**Impacto no prêmio:**
• Prazo maior = **risco maior** = prêmio mais alto
• Prazo de 30 dias: taxa base
• Prazo de 90 dias: +10% a +20% sobre taxa base
• Prazo de 180 dias: +30% a +50% sobre taxa base

**Prazos acima de 180 dias:**
• Requerem análise especial
• Podem ter PMI diferenciado
• Geralmente para exportação ou bens de capital

**Dica:** Informe o prazo correto ao contratar. Vendas com prazo superior ao declarado na apólice podem **não estar cobertas**.`},{keywords:["como funciona mesmo","explica melhor","detalhe","aprofundar","mais informacao"],category:"aprofundamento",answer:`**Seguro de Crédito em Detalhes — Fluxo Completo**

**Fase 1: Contratação**
\`\`\`
Empresa → Corretor → Seguradora
   ↓          ↓          ↓
Dados    Cotação    Análise
   ↓          ↓          ↓
         Proposta ← Aceite
              ↓
         APÓLICE EMITIDA
\`\`\`

**Fase 2: Operação Diária**
\`\`\`
Venda a prazo → Verifica limite → OK → Vende
                                  ↓
                             SEM limite → Solicita à seguradora
                                  ↓
                        Aprovado → Vende
                        Negado → Decide sem cobertura
\`\`\`

**Fase 3: Sinistro**
\`\`\`
Comprador não paga → Notifica (30-60 dias)
       ↓
Mora prolongada (150-180 dias) OU Insolvência
       ↓
Regulação pela seguradora
       ↓
Indenização (30-60 dias)
       ↓
Sub-rogação (seguradora cobra o devedor)
\`\`\`

**Fase 4: Renovação**
\`\`\`
12 meses → Avaliação sinistralidade
    ↓
Bônus (sem sinistros) ou Malus (com sinistros)
    ↓
Novas condições negociadas
    ↓
RENOVAÇÃO
\`\`\`

Esse ciclo se repete anualmente. Com o tempo, o histórico acumulado gera **condições cada vez melhores** para a empresa.`},{keywords:["reembolso","devolver premio","estorno","cancelamento antecipado"],category:"processo",answer:`**Reembolso e Estorno de Prêmio**

**Cancelamento antecipado pelo segurado:**
• Direito a devolução **proporcional** do prêmio
• Cálculo: prêmio total × (dias restantes / 365)
• Desconto de despesas administrativas (5-10%)

**Exemplo:**
• Prêmio anual: R$ 120.000
• Cancelamento após 6 meses
• Reembolso: R$ 60.000 - despesas = ~R$ 54.000

**Ajuste de prêmio (mais comum):**
• Se faturamento real < estimado → crédito
• Se faturamento real > estimado → complemento
• Ajuste feito no final do período (anual ou trimestral)

**Prêmio Mínimo:**
• Se o faturamento for muito baixo, o prêmio mínimo se aplica
• Não há reembolso abaixo do mínimo

**Sinistro e prêmio:**
• Receber indenização NÃO gera aumento imediato
• Impacto é na **renovação** (malus)
• Não existe "estorno" da indenização

**Dica:** Antes de cancelar, verifique o período de run-off (cauda) e se vale manter a apólice até o vencimento natural.`},{keywords:["benchmark","indicador","kpi","metrica","desempenho"],category:"gestao",answer:`**KPIs e Benchmarks em Seguro de Crédito**

**Indicadores para monitorar:**

| KPI | Fórmula | Benchmark |
|-----|---------|----------|
| **Sinistralidade** | Indenizações / Prêmio | < 60% (bom) |
| **Loss Ratio** | Perdas / Faturamento segurado | < 1% (bom) |
| **Cobertura** | Faturamento segurado / Total | > 80% |
| **Utilização** | Exposição / Limites aprovados | 60-80% |
| **NQL Rate** | NQLs / Total sinistros | < 10% |
| **Tempo de aprovação** | Dias para aprovação de limite | < 5 dias |
| **Notificação** | % atrasos notificados no prazo | 100% |

**Relatórios recomendados:**

• **Mensal:**
   - Faturamento declarado
   - Atrasos > 30 dias
   - Limites utilizados vs aprovados

• **Trimestral:**
   - Sinistralidade acumulada
   - Novos limites solicitados/aprovados
   - Exposição por comprador/setor

• **Anual:**
   - Análise de sinistralidade completa
   - ROI do seguro
   - Benchmarking com mercado

**Dica:** O SENTINEL gera esses relatórios automaticamente no dashboard.`},{keywords:["warranty","garantia produto","defeito","qualidade","recall"],category:"avancado",answer:`**Seguro de Crédito e Garantia de Produto — Diferença Importante**

**O que o Seguro de Crédito NÃO cobre:**
• Defeitos no produto vendido
• Recall (recolhimento)
• Garantia de performance/qualidade
• Responsabilidade civil pelo produto

**Cenário de risco:**
• Empresa vende produto para comprador
• Comprador alega defeito e se recusa a pagar
• Isso é **disputa comercial** — NÃO é coberto pelo seguro de crédito

**Para cada risco, o seguro adequado:**
| Risco | Seguro Adequado |
|-------|----------------|
| Comprador não paga | **Seguro de Crédito** |
| Produto causa dano a terceiro | Seguro de Responsabilidade Civil |
| Produto precisa de recall | Seguro de Recall |
| Produto é danificado no transporte | Seguro de Transporte |

**Como evitar que defeito vire NQL:**
• Tenha **controles de qualidade** documentados
• Obtenha **aceite formal** do comprador na entrega
• Resolva reclamações rapidamente
• Separe a questão comercial da financeira

**Na prática:** Se o produto foi aceito e o comprador simplesmente não paga, **é coberto**. Se o comprador contesta a qualidade, **não é coberto** até resolução.`},{keywords:["joint venture","consorcio","parceria","operacao conjunta"],category:"avancado",answer:`**Seguro de Crédito em Operações Conjuntas**

**Joint Ventures e Consórcios:**

**Quem contrata?**
• Cada empresa do consórcio pode ter sua própria apólice
• Ou: apólice conjunta em nome do consórcio/SPE

**Particularidades:**
• Vendas **entre** os parceiros: geralmente excluídas (partes relacionadas)
• Vendas do consórcio para terceiros: cobertas normalmente
• Responsabilidade solidária pode complicar a análise

**SPE (Sociedade de Propósito Específico):**
• Pode contratar seguro de crédito em seu nome
• Seguradora analisa a SPE e seus controladores
• Garantia dos controladores pode ampliar limites

**Operações trilaterais (triangulares):**
• A vende para B, mas B pede entrega para C
• Seguro cobre A→B (relação contratual)
• Cuidado: documentação deve ser clara sobre quem é o devedor

**Dica:** Em operações complexas com múltiplas partes, consulte a seguradora **antes** de estruturar a operação para garantir a cobertura.`},{keywords:["limite negado","recusado","nao aprovado","seguradora negou","recusa"],category:"pratico",answer:`**O que Fazer Quando a Seguradora Nega um Limite de Crédito**

**Por que negam:**
• Devedor com **restrições cadastrais** (SPC, Serasa)
• Balanço com **prejuízo** ou alto endividamento
• Setor de **alto risco** (ex: construção civil em crise)
• Devedor **sem informações** financeiras disponíveis
• Exposição já elevada na carteira da seguradora

**O que fazer:**

1. **Solicitar reconsideração**
   • Apresente informações adicionais do devedor
   • Balanço atualizado, referências comerciais
   • Histórico de pagamento com sua empresa

2. **Solicitar limite menor**
   • Se pediu R$ 500k, peça R$ 200k
   • Limite parcial é melhor que zero

3. **Usar limite discricionário**
   • Se o devedor se enquadra nos critérios
   • Geralmente R$ 20k a R$ 100k

4. **Buscar outra seguradora**
   • Cada seguradora tem apetite diferente
   • Allianz pode negar, Coface pode aprovar

5. **Vender com garantias adicionais**
   • Carta de crédito, aval, penhor
   • Para esse comprador específico

**Importante:** Limite negado é um **sinal de alerta**. Considere reduzir a exposição ao comprador mesmo sem seguro.`},{keywords:["limite reduzido","limite cortado","reducao","aviso reducao"],category:"pratico",answer:`**Limite de Crédito Reduzido pela Seguradora**

**Por que a seguradora reduz limites:**
• Deterioração financeira do devedor
• Protestos ou ações judiciais contra o devedor
• Setor entrando em crise
• Sinais de dificuldade de pagamento no mercado
• Reclassificação de rating

**O que a apólice diz:**
• Seguradora pode reduzir ou cancelar limites **a qualquer momento**
• Deve notificar o segurado (geralmente 30 dias de antecedência)
• Vendas realizadas **antes** da redução: cobertas pelo limite anterior
• Vendas **após** a redução: cobertas apenas até o novo limite

**Ação imediata:**

1. **Verifique sua exposição atual** ao devedor
2. **Suspenda novas vendas** que excedam o novo limite
3. **Intensifique a cobrança** de faturas em aberto
4. **Solicite informações** à seguradora sobre o motivo
5. **Avalie garantias adicionais** para o excedente

**Dica:** Reduções de limite são **alertas precoces**. Historicamente, 30-40% dos devedores com limite reduzido apresentam problemas de pagamento nos meses seguintes.

Use essa informação a seu favor — é um dos maiores valores do seguro de crédito.`},{keywords:["vender sem limite","sem cobertura","exceder limite","acima limite"],category:"pratico",answer:`**Vendas Acima ou Sem Limite de Crédito**

**Situação:** Você quer vender R$ 500k mas o limite é R$ 300k.

**O que está coberto:**
• Apenas os **primeiros R$ 300k** (até o limite)
• O excedente de R$ 200k **não tem cobertura**

**Opções:**

1. **Solicitar aumento de limite**
   • Peça à seguradora que reavalie
   • Apresente justificativa e dados do devedor
   • Prazo: 24-72 horas

2. **Top-Up Cover**
   • Contrate cobertura complementar
   • Com outra seguradora se necessário

3. **Dividir a venda**
   • Venda R$ 300k agora (coberto)
   • Novo pedido após pagamento

4. **Garantias adicionais**
   • Peça aval ou carta de crédito para o excedente

5. **Aceitar o risco**
   • Decisão comercial: vender sem cobertura total
   • Documente a decisão internamente

**Atenção:**
• Não "ajuste" notas fiscais para ficar dentro do limite
• A seguradora verifica a exposição real no sinistro
• Fraude anula toda a cobertura

**Regra:** Sempre respeite os limites. Se precisar de mais, **peça aumento antes** de vender.`},{keywords:["recebimento parcial","pagamento parcial","devedor pagou parte","acordo"],category:"pratico",answer:`**Recebimento Parcial e Acordo com Devedor**

**Se o devedor pagar parte da dívida:**

1. **Notifique a seguradora** imediatamente
2. Informe o valor recebido e o saldo em aberto
3. A indenização será calculada sobre o **saldo remanescente**

**Exemplo:**
• Dívida total: R$ 1.000.000
• Pagamento parcial: R$ 400.000
• Saldo em aberto: R$ 600.000
• PMI 85%: Indenização = R$ 510.000

**Acordo com devedor (negociação):**

⚠️ **Cuidado:** Você **deve** informar a seguradora antes de fechar qualquer acordo.

**Regras:**
• Não conceda **desconto** sem aprovação da seguradora
• Não estenda **prazo** sem autorização
• Não aceite **dação em pagamento** sem consulta

**Por quê?**
• A seguradora tem interesse no crédito (sub-rogação)
• Acordos unilaterais podem comprometer a cobertura
• A seguradora pode ter estratégia de cobrança diferente

**Boa prática:** Sempre consulte a seguradora antes de negociar com devedor inadimplente. Frequentemente, a **cobrança da seguradora** obtém melhores resultados do que a negociação direta.`},{keywords:["glossario","termos","vocabulario","definicoes","significado"],category:"glossario",answer:`**Glossário Rápido — Seguro de Crédito**

| Termo | Significado |
|-------|------------|
| **PMI** | Percentual Máximo de Indenização |
| **POS** | Participação Obrigatória do Segurado |
| **AAD** | Annual Aggregate Deductible (franquia anual) |
| **MCL** | Maximum Credit Limit |
| **NQL** | Non-Qualifying Loss (perda não coberta) |
| **DRA** | Debtor Risk Assessment (Coface) |
| **Whole Turnover** | Apólice que cobre toda a carteira |
| **Key Buyer** | Cobertura de compradores selecionados |
| **Single Risk** | Cobertura de operação única |
| **Top-Up** | Cobertura complementar |
| **Excess of Loss** | Excesso de danos (sobre franquia) |
| **Mora Prolongada** | Atraso > 150/180 dias |
| **Insolvência** | Falência ou Recuperação Judicial |
| **Sub-rogação** | Seguradora assume direito de cobrança |
| **Limite Discricionário** | Limite automático sem aprovação |
| **Endosso** | Alteração na apólice |
| **Prêmio** | Valor pago pelo seguro |
| **Sinistro** | Evento que gera indenização |
| **Run-off** | Período de cauda após cancelamento |
| **Bonus/Malus** | Ajuste por sinistralidade |

Precisa de mais detalhes sobre algum termo? É só perguntar!`},{keywords:["planejamento","orcamento","budget","planejar","previsao"],category:"financeiro",answer:`**Planejamento Financeiro com Seguro de Crédito**

**Incluindo o seguro no orçamento:**

**Custo anual estimado:**
• Faturamento a prazo × taxa (0,15% a 0,40%)
• Exemplo: R$ 80M × 0,22% = **R$ 176.000/ano**
• Mensal: ~R$ 14.700

**Onde lançar no orçamento:**
• Despesa Operacional → Seguros
• OU: Despesa Comercial → Proteção de Crédito
• Não é despesa financeira

**Impacto no DRE:**

| Linha | Sem Seguro | Com Seguro |
|-------|-----------|----------|
| Receita Bruta | R$ 80M | R$ 80M |
| (-) Deduções | R$ 12M | R$ 12M |
| Receita Líquida | R$ 68M | R$ 68M |
| (-) CMV | R$ 48M | R$ 48M |
| Lucro Bruto | R$ 20M | R$ 20M |
| (-) Despesas Operacionais | R$ 12M | R$ 12,18M (+seguro) |
| (-) PDD | R$ 1,5M | R$ 0,3M (-seguro protege) |
| (-) Perdas com inadimplência | R$ 1,5M | R$ 0,23M (POS) |
| **Lucro Operacional** | **R$ 5,0M** | **R$ 7,29M** |

**Resultado:** O seguro **aumenta** o lucro operacional ao reduzir PDD e perdas.

**Para CFOs e Controllers:**
• Seguro de crédito é **investimento com retorno mensurável**
• Melhora previsibilidade do fluxo de caixa
• Reduz volatilidade do resultado
• Facilita planejamento de longo prazo

Inclua o seguro de crédito no **budget anual** como parte da estratégia de gestão de risco.`},{keywords:["esg","sustentabilidade","ambiental","social","governanca esg"],category:"avancado",answer:`**ESG e Seguro de Crédito**

A agenda ESG está impactando o seguro de crédito.

**Environmental (Ambiental):**
• Seguradoras avaliam **risco ambiental** dos devedores
• Setores poluentes podem ter restrições de cobertura
• Compliance ambiental influencia o scoring
• Tendência: prêmio diferenciado para carteiras "verdes"

**Social:**
• Práticas trabalhistas dos devedores são avaliadas
• Trabalho escravo/infantil: pode levar a cancelamento de limite
• Diversidade e inclusão: fator de avaliação
• Impacto social positivo melhora o perfil de risco

**Governance (Governança):**
• Governança corporativa forte = menor risco de crédito
• Empresas familiares vs profissionalizadas
• Transparência financeira
• Compliance anticorrupção

**Tendências ESG no seguro de crédito:**
• **Green Premium:** Desconto para carteiras sustentáveis
• **ESG Scoring:** Incluir fatores ESG na análise de crédito
• **Reporting ESG:** Relatórios de impacto integrados
• **Exclusion Lists:** Setores controversos (carvão, tabaco, armas)

**Na prática brasileira:**
• SUSEP está incorporando ESG na regulamentação
• Grandes seguradoras já têm políticas ESG
• Impacto ainda é limitado, mas crescendo rapidamente

Empresas com **boas práticas ESG** terão vantagens crescentes no seguro de crédito.`},{keywords:["supply chain","cadeia suprimentos","fornecedor","cadeia","upstream downstream"],category:"avancado",answer:`**Seguro de Crédito na Cadeia de Suprimentos**

**Proteção em toda a cadeia:**

\`\`\`
Fornecedor de matéria-prima
       ↓ (vende a prazo)
   Fabricante ← SEGURADO (protege vendas a prazo)
       ↓ (vende a prazo)
   Distribuidor ← DEVEDOR (coberto pelo seguro)
       ↓ (vende a prazo)
    Varejista
       ↓
  Consumidor Final
\`\`\`

**Quem pode segurar:**
• Qualquer empresa que venda **a prazo** para outra empresa
• Fabricante → Distribuidor: sim
• Distribuidor → Varejista: sim
• Fornecedor → Fabricante: sim

**Risco de cadeia:**
• Se o varejista não paga o distribuidor...
• O distribuidor pode não pagar o fabricante...
• Efeito cascata de inadimplência

**Como o seguro mitiga:**
• Protege cada elo da cadeia individualmente
• Seguradora monitora a saúde de toda a cadeia
• Alertas precoces de deterioração
• Indenização previne o efeito cascata

**Tendência:** Seguradoras estão desenvolvendo soluções de **supply chain finance** integradas ao seguro de crédito, oferecendo proteção e financiamento em uma única solução.`},{keywords:["natural disaster","desastre","forca maior","force majeure","pandemia seguro"],category:"avancado",answer:`**Seguro de Crédito e Eventos de Força Maior**

**Força maior (Force Majeure):**
• Eventos imprevisíveis e inevitáveis
• Terremotos, enchentes, pandemias
• Podem impedir o devedor de pagar

**O seguro cobre inadimplência por força maior?**

**Crédito Interno (doméstico):**
• Se o devedor não paga por qualquer motivo → **coberto**
• A causa da inadimplência não importa
• O que importa: mora prolongada (150+ dias) ou insolvência
• Eventos climáticos que levam à inadimplência: **cobertos**

**Crédito à Exportação:**
• Risco comercial (devedor não paga): **coberto**
• Risco político (governo impede pagamento): **coberto**
• Evento natural no país destino: pode se enquadrar como risco político

**Exclusões possíveis:**
• Guerra nuclear (exclusão padrão)
• Sanções internacionais aplicáveis
• Embargo comercial

**Lição da COVID-19:**
• Seguradoras pagaram bilhões em sinistros globalmente
• Algumas reduziram limites preventivamente
• Empresas com seguro sobreviveram melhor
• Prêmios aumentaram na renovação

**Resumo:** Na maioria dos casos, se o devedor não paga — independente do motivo — e as condições da apólice são cumpridas, o seguro **paga a indenização**.`},{keywords:["crise economica","inflacao","selic","juros altos","dolar alto"],category:"mercado",answer:`**Seguro de Crédito no Cenário Econômico Atual**

**Impacto de juros altos:**
• Custo do crédito sobe → empresas têm mais dificuldade
• Inadimplência **aumenta** em cenários de juros altos
• Seguro de crédito se torna **mais importante**

**Impacto do dólar alto:**
• Importadores sofrem mais → risco de inadimplência
• Exportadores se beneficiam → melhor caixa
• Apólice de exportação em USD se torna mais valiosa

**Impacto da inflação:**
• Margem das empresas é comprimida
• Menor capacidade de absorver calotes
• Seguro protege margem já apertada

**Dados históricos:**
| Cenário | Inadimplência B2B |
|---------|-------------------|
| Economia estável | 2% - 3% |
| Desaceleração | 3% - 5% |
| Recessão | 5% - 8% |
| Crise severa | 8% - 15% |

**Estratégia recomendada:**
• **Antes da crise:** Contrate e construa histórico
• **Durante a crise:** Mantenha a apólice, use as informações
• **Pós-crise:** Negocie bônus pela fidelidade

O seguro de crédito é **contracíclico** — seu valor aumenta quando a economia piora.`},{keywords:["novo cliente","primeiro pedido","cliente novo","prospect","aprovar cliente"],category:"pratico",answer:`**Como Aprovar um Novo Cliente com Seguro de Crédito**

**Passo a passo:**

1. **Receba o pedido** do novo cliente
2. **Consulte o limite discricionário:**
   • Se o valor do pedido está dentro do limite discricionário (ex: até R$ 50k)
   • E o cliente não tem restrições (Serasa limpa)
   • → Pode vender com cobertura imediata

3. **Se precisar de limite nomeado:**
   • Solicite limite à seguradora (via portal ou SENTINEL)
   • Informe: CNPJ, razão social, valor desejado
   • Prazo de aprovação: **24 a 72 horas**

4. **Seguradora analisa e responde:**
   • ✅ **Aprovado:** Venda com cobertura
   • ⚠️ **Aprovado parcial:** Limite menor que o solicitado
   • ❌ **Negado:** Venda sem cobertura (decisão sua)

**Dica para novos clientes:**
• Comece com pedidos menores (dentro do discricionário)
• Se o cliente pagar bem, solicite limite nomeado
• Use o histórico de pagamento como argumento

**O seguro de crédito como ferramenta de vendas:**
• Novo cliente com limite aprovado = **sinal verde da seguradora**
• Dá confiança ao time comercial para vender
• Informação valiosa sobre a saúde financeira do prospect

No **SENTINEL**, a consulta de limite pode ser integrada ao processo de aprovação de pedidos.`},{keywords:["roi","retorno","investimento","vale investimento","custo beneficio"],category:"financeiro",answer:`**ROI do Seguro de Crédito — Retorno sobre Investimento**

**Cálculo simplificado do ROI:**

**Cenário conservador:**
• Faturamento a prazo: R$ 50M/ano
• Taxa de inadimplência média: 2%
• Perda anual sem seguro: R$ 1.000.000
• Prêmio do seguro (0,20%): R$ 100.000
• Indenização recebida (85%): R$ 850.000
• Perda com seguro: R$ 100.000 (prêmio) + R$ 150.000 (POS) = R$ 250.000
• **Economia: R$ 750.000/ano**
• **ROI: 750%**

**Cenário com benefícios financeiros:**
• Economia acima: R$ 750.000
• Redução no custo de crédito bancário (-1%): R$ 200.000
• Redução de PDD: R$ 100.000
• Menor necessidade de equipe de crédito: R$ 150.000
• **Benefício total: R$ 1.200.000**
• **ROI total: 1.200%**

**Mesmo SEM sinistros, o seguro vale a pena:**
• Informação de crédito dos compradores
• Melhores condições bancárias
• Confiança para crescer
• Tranquilidade empresarial

**Analogia:** Você paga seguro do carro todo ano. Mesmo sem usar, o valor está na **proteção**. Com seguro de crédito, o valor está na proteção E na **inteligência**.`},{keywords:["quando contratar","momento certo","hora certa","melhor momento"],category:"estrategico",answer:`**Quando é o Melhor Momento para Contratar Seguro de Crédito?**

**A resposta curta:** AGORA.

**Por quê?**

**1. Em tempos bons:**
• Prêmio é **mais barato** (menos risco percebido)
• Seguradoras aprovam **mais limites**
• Começa a construir **histórico de bônus**
• Tem escolha de seguradoras

**2. Em tempos ruins (crise):**
• Prêmio é **mais caro** (mais risco)
• Seguradoras são **mais restritivas**
• Pode não conseguir cobertura para certos compradores
• Demanda alta → menos negociação

**Sinais de que precisa contratar URGENTE:**
• Um cliente grande está mostrando sinais de dificuldade
• Sua inadimplência está aumentando
• O setor está entrando em crise
• Está expandindo para novos mercados
• Vai fechar um contrato grande com cliente novo

**O erro mais comum:** Esperar ter um problema para buscar seguro. Quando o problema acontece, é **tarde demais** — o seguro não cobre riscos pré-existentes.

**Regra de ouro:** Contrate quando **não precisa**, para estar protegido quando **precisar**.

**A Fairfield pode fazer uma cotação em minutos pelo SENTINEL.** Clique em "Fazer Cotação" para começar!`},{keywords:["apolice mista","mista","interno e exportacao junto","combinar"],category:"cobertura",answer:`**Apólice Mista — Crédito Interno + Exportação**

É possível ter uma **única apólice** que cubra vendas domésticas e internacionais.

**Como funciona:**
• Ramo 0171 (interno) + Ramo 0172 (exportação) na mesma apólice
• Condições podem ser diferentes para cada ramo
• Prêmio unificado ou separado por ramo

**Vantagens:**
• Gestão simplificada (uma apólice, um corretor)
• Prêmio total pode ser menor (diversificação)
• Um único ponto de contato na seguradora
• Relatórios consolidados

**Condições típicas:**
| Aspecto | Interno | Exportação |
|---------|---------|------------|
| PMI | 85% | 90% |
| POS | 15% | 10% |
| IOF | 0% | 0% |
| Risco Político | Não | Sim |
| Moeda | BRL | USD/EUR |
| Mora | 150 dias | 180 dias |

**Seguradoras que oferecem apólice mista:**
• Allianz Trade
• Coface
• Atradius
• CESCE (com foco ibero-americano)

**Ideal para:** Empresas que vendem tanto no mercado doméstico quanto exportam. A maioria dos exportadores brasileiros tem apólice mista.`},{keywords:["provisao tecnica","ibnr","reserva","capital seguradora"],category:"legislacao",answer:`**Provisões Técnicas no Seguro de Crédito**

**O que são:**
Reservas que a seguradora deve manter para honrar seus compromissos futuros.

**Tipos de provisões:**

| Provisão | Significado |
|----------|------------|
| **PPNG** | Prêmios Não Ganhos (prêmio futuro) |
| **PSL** | Sinistros a Liquidar (sinistros avisados) |
| **IBNR** | Incurred But Not Reported (sinistros ocorridos mas não avisados) |
| **IBNER** | Incurred But Not Enough Reported (sinistros subestimados) |
| **PCC** | Provisão Complementar de Cobertura |

**Por que importa para o segurado:**
• Provisões adequadas = **segurança** de que a seguradora pagará
• SUSEP fiscaliza as provisões regularmente
• Insuficiência de provisões pode levar à intervenção da SUSEP

**Capital de solvência:**
• Além das provisões, a seguradora deve ter **capital próprio** suficiente
• Calculado com base no risco assumido
• Regulamentado pela SUSEP (Resolução CNSP 321/2015)

**Resseguro e provisões:**
• Parte das provisões é cedida ao ressegurador
• Reduz a exposição líquida da seguradora
• Maior capacidade para aceitar riscos

**Dica:** Seguradoras com **rating alto** (AA, A+) demonstram solidez em provisões e capital. Prefira estas para maior segurança.`},{keywords:["claim management","gestao sinistro","administrar sinistro","acompanhar sinistro"],category:"processo",answer:`**Gestão de Sinistros — Melhores Práticas**

**Antes do sinistro (prevenção):**
• Monitore o aging de recebíveis semanalmente
• Configure alertas para atrasos > 15 dias
• Mantenha documentação organizada (NFs, contratos, comprovantes)
• Atualize dados dos compradores periodicamente

**Ao detectar um atraso:**
1. **Dia 1-15:** Cobrança interna (telefone, e-mail)
2. **Dia 15-25:** Reforce a cobrança, documente tudo
3. **Dia 25-30:** **NOTIFIQUE A SEGURADORA** (não espere!)
4. **Dia 30-60:** Seguradora pode iniciar cobrança
5. **Dia 60-150:** Acompanhe junto com a seguradora
6. **Dia 150-180:** Mora prolongada → sinistro configurado

**Documentos a preparar:**
• Cópia das notas fiscais
• Duplicatas/boletos
• Contrato de venda
• Comprovante de entrega (assinado)
• Histórico de cobrança (e-mails, cartas)
• Correspondência com o devedor
• Certidão de protesto (se houver)

**Erros a evitar:**
• Não notificar no prazo (**erro fatal**)
• Negociar com o devedor sem autorização da seguradora
• Documentação incompleta ou desorganizada
• Não colaborar com a cobrança da seguradora

**Dica:** Crie um **checklist de sinistro** e mantenha atualizado. O SENTINEL automatiza grande parte desse fluxo.`},{keywords:["diferenca credit insurance surety","credit vs surety","credito garantia internacional"],category:"conceito",answer:`**Credit Insurance vs Surety — Diferença Internacional**

No mercado internacional, os termos são frequentemente confundidos.

**Trade Credit Insurance (Seguro de Crédito):**
• Protege o **vendedor** contra inadimplência do comprador
• Apólice geralmente anual e global
• Indenização ao segurado (vendedor/credor)
• Regulação: SUSEP ramos 0171 e 0172

**Surety (Seguro Garantia):**
• Garante o cumprimento de uma **obrigação contratual**
• Três partes: tomador, segurado/beneficiário, seguradora
• Apólice individual por contrato
• Regulação: SUSEP ramo 0775

**Comparação prática:**

| Situação | Produto |
|----------|--------|
| Vendo a prazo e quero proteção contra calote | **Credit Insurance** |
| Preciso garantir um contrato de obra | **Surety** |
| Exporto e quero proteção contra inadimplência | **Credit Insurance** |
| Participo de licitação pública | **Surety (Bid Bond)** |
| Quero proteger meu faturamento | **Credit Insurance** |
| Preciso garantir obrigações trabalhistas | **Surety (Judicial)** |

**A Fairfield e o SENTINEL** atendem ambos os produtos. Se estiver em dúvida sobre qual se aplica ao seu caso, pergunte!`},{keywords:["ingles","english","termos ingles","trade credit","traducao"],category:"glossario",answer:`**Termos em Inglês — Glossário Bilíngue**

Termos que você vai encontrar em apólices e documentos:

| Português | Inglês |
|-----------|--------|
| Seguro de Crédito | Trade Credit Insurance |
| Apólice | Policy |
| Segurado | Policyholder / Insured |
| Seguradora | Insurer / Underwriter |
| Devedor | Debtor / Buyer |
| Prêmio | Premium |
| Sinistro | Claim |
| Indenização | Indemnity |
| Limite de Crédito | Credit Limit |
| Mora Prolongada | Protracted Default |
| Insolvência | Insolvency |
| Franquia | Deductible / AAD |
| Corretora | Broker |
| Endosso | Endorsement |
| Sub-rogação | Subrogation |
| Risco Político | Political Risk |
| Apólice Global | Whole Turnover |
| Compradores Nomeados | Named Buyers / Key Buyers |
| Limite Discricionário | Discretionary Limit |
| Participação do Segurado | Co-insurance / POS |
| Período de Espera | Waiting Period |
| Declaração de Faturamento | Turnover Declaration |
| Perda Não Qualificada | Non-Qualifying Loss (NQL) |
| Recuperação Judicial | Judicial Recovery |
| Falência | Bankruptcy |

Útil para **exportadores** que recebem documentos em inglês ou para comunicação com seguradoras internacionais.`},{keywords:["certificacao","curso","estudar","aprender","formacao"],category:"educacional",answer:`**Onde Aprender Mais sobre Seguro de Crédito**

**Cursos e certificações:**

1. **ENS (Escola Nacional de Seguros)**
   • Curso de Seguro de Crédito
   • Certificação profissional
   • Presencial e online
   • www.ens.edu.br

2. **IBSS (Instituto Brasileiro de Seguro Social)**
   • Workshops sobre crédito
   • Eventos do setor

3. **Seguradoras (treinamentos):**
   • Allianz Trade Academy
   • Coface University
   • Treinamentos para corretores parceiros

4. **Publicações:**
   • Revista Cobertura
   • Sonho Seguro
   • Insurance Market
   • Global Trade Review

5. **Eventos:**
   • CQCS (Congresso de Qualidade e Competitividade do Seguro)
   • ENIS (Encontro Nacional da Indústria de Seguros)
   • Berne Union Annual Meeting

6. **Online:**
   • SENTINEL Blog (em breve)
   • LinkedIn — perfis das seguradoras
   • ICC (International Chamber of Commerce)

**Dica:** Para profissionais de crédito, a certificação da ENS é o **padrão do mercado** brasileiro.`},{keywords:["contato","telefone","email","whatsapp","falar humano","atendimento"],category:"contato",answer:`**Fale com a Equipe Fairfield**

Para contato direto com nossos especialistas:

**Canais de atendimento:**
• Clique no botão **"Fale com um especialista"** abaixo
• Acesse nosso portal: **SENTINEL**
• Solicite uma **cotação gratuita** pelo formulário

**O que podemos fazer por você:**
• Cotação comparativa com múltiplas seguradoras
• Análise personalizada do seu perfil de risco
• Orientação sobre a melhor modalidade
• Suporte no processo de contratação
• Acompanhamento de sinistros

**Horário de atendimento:**
• Segunda a sexta: 9h às 18h
• Respostas em até 2 horas úteis

**Para urgências (sinistros):**
• Canal prioritário via portal SENTINEL
• Atendimento em até 4 horas

Clique no botão verde abaixo para falar com um especialista agora! 👇`},{keywords:["posso confiar","confiavel","seguro mesmo","funciona mesmo","compensa"],category:"confianca",answer:`**Posso Confiar no Seguro de Crédito?**

Sim! E aqui estão os fatos:

**Dados globais:**
• Mercado existe há **mais de 100 anos**
• EUR 10+ bilhões em prêmios anuais no mundo
• Mais de **95% dos sinistros corretamente notificados são pagos**
• As seguradoras são reguladas por órgãos governamentais

**No Brasil:**
• Regulado pela **SUSEP** (órgão federal)
• Seguradoras devem ter capital e provisões adequados
• Condições contratuais aprovadas pela SUSEP
• Canal de reclamação disponível

**Seguradoras são sólidas:**
• Allianz Trade: Rating AA (maior seguradora do mundo em crédito)
• Coface: Rating AA- (presente em 100 países)
• Chubb: Rating AA (maior seguradora de capital aberto)

**Quando NÃO funciona:**
• Segurado não notifica atraso no prazo
• Venda acima do limite aprovado
• Disputa comercial não resolvida
• Documentação falsa ou incompleta

**Ou seja:** O seguro funciona quando o segurado **cumpre suas obrigações**. É um contrato bilateral — ambas as partes têm deveres.

**Dica:** Leia as condições gerais com seu corretor e entenda seus **deveres** como segurado.`},{keywords:["concorrente","meu concorrente","competidor","mercado competitivo"],category:"estrategico",answer:`**Seguro de Crédito como Vantagem Competitiva**

**Como o seguro te coloca à frente:**

**1. Ofereça melhores prazos**
• Com seguro, você pode dar **90 dias** com segurança
• Seu concorrente sem seguro oferece apenas 30 dias
• O cliente **escolhe você**

**2. Não exija garantias**
• Seu concorrente pede aval, fiança, garantias reais
• Você vende com **open account** (sem garantia)
• Processo de venda mais rápido e simples

**3. Aceite novos clientes**
• Sem seguro: medo de vender para desconhecidos
• Com seguro: seguradora analisa o novo cliente
• Aprovação de limite = **sinal verde** para vender

**4. Entre em novos mercados**
• Exportação: risco do comprador estrangeiro é coberto
• Novas regiões: seguradora tem dados locais
• Expansão com controle de risco

**5. Precificação mais agressiva**
• Sem medo de calote = pode trabalhar com margem menor
• Custo do seguro (0,2%) vs custo do calote (100%)

**6. Inteligência de mercado**
• Dados sobre compradores = informação sobre o mercado
• Se a seguradora nega limite do comprador do concorrente, é informação valiosa

**Resultado:** Empresas com seguro de crédito **crescem mais rápido** e com mais segurança.`},{keywords:["indicacao","indicar","referencia","alguem precisa"],category:"indicacao",answer:`**Indique o Seguro de Crédito para sua rede!**

**Quem pode se beneficiar:**

• **Fornecedores** que vendem a prazo para você
• **Clientes** que vendem a prazo para outros
• **Parceiros** de negócios com carteira B2B
• **Associações** comerciais e industriais

**Perfil ideal para indicação:**
• Faturamento a prazo > R$ 5M/ano
• Vende para múltiplos compradores
• Já teve problemas com inadimplência
• Está crescendo e precisa proteger o caixa
• Exporta ou planeja exportar

**Como indicar:**
• Compartilhe o link da plataforma SENTINEL
• Conecte com a equipe Fairfield
• Sugira uma cotação gratuita e sem compromisso

**Para a Fairfield:**
• Equipe de especialistas disponível
• Cotação comparativa com múltiplas seguradoras
• Suporte completo: da cotação ao sinistro

💡 Clique em **"Fale com um especialista"** abaixo para conectar alguém da sua rede com nossa equipe!`},{keywords:["commodities","commodity","mineracao","petroleo","energia"],category:"setor",answer:`**Seguro de Crédito para Commodities**

Operações de commodities têm características únicas.

**Setores cobertos:**
• Minérios (ferro, bauxita, manganês)
• Petróleo e derivados
• Grãos (soja, milho, trigo)
• Açúcar e etanol
• Café
• Algodão
• Metais (cobre, alumínio)

**Características das operações:**
• Alto valor por transação
• Volatilidade de preços
• Moeda: USD (geralmente)
• Compradores são tradings e processadores
• Incoterms: FOB, CIF, CFR

**Seguradoras especializadas:**
• **AIG** — líder em commodities e energia
• **Allianz Trade** — cobertura global
• **Chubb** — grandes valores

**Pontos de atenção:**
• Limite de crédito deve acompanhar a **volatilidade de preço**
• Exposição pode mudar rapidamente com variação de preço
• Risco político é relevante em muitos mercados
• Concentração em poucos compradores (tradings)

**Cobertura típica:**
• Single Risk para operações pontuais
• Whole Turnover para exportadores regulares
• Risco Político incluído
• PMI: 90% a 95%

Para operações acima de **USD 10 milhões** por transação, o seguro de crédito é praticamente indispensável.`},{keywords:["financiamento","credito bancario","banco","emprestimo","linha credito"],category:"financeiro",answer:`**Seguro de Crédito e Financiamento Bancário**

**Como o seguro facilita acesso a crédito:**

**1. Linhas de financiamento:**
• Bancos veem recebíveis segurados como **garantia de melhor qualidade**
• Deságio menor em operações de desconto
• Limite de crédito ampliado

**2. Operações específicas:**
| Operação | Como o Seguro Ajuda |
|----------|--------------------|
| **ACC/ACE** | Exportador com seguro obtém taxa melhor |
| **BNDES Exim** | Seguro pode ser exigido ou recomendado |
| **Capital de Giro** | Recebíveis segurados como garantia |
| **FIDC** | Reduz subordinação e deságio |
| **Forfaiting** | Viabiliza operações sem recurso |

**3. Economia estimada:**
• Redução na taxa de juros: **0,5% a 2% ao ano**
• Em financiamento de R$ 20M: economia de R$ 100k a R$ 400k/ano
• Muitas vezes **o seguro se paga** pela economia financeira

**4. Bancos que reconhecem seguro de crédito:**
• Itaú BBA
• Bradesco
• Santander
• Banco do Brasil
• BNDES
• Bancos internacionais (Citi, JP Morgan, etc.)

**Dica:** Ao negociar com o banco, apresente a apólice de seguro de crédito como **mitigante de risco**. Muitos gerentes não conhecem o produto — explique o benefício.`},{keywords:["governo","setor publico","licitacao","orgao publico","autarquia"],category:"duvidas",answer:`**Seguro de Crédito e Vendas para o Governo**

**Vendas para governo NÃO são cobertas** pelo seguro de crédito tradicional.

**Por quê?**
• O governo é considerado **risco soberano**
• Não está sujeito a falência ou RJ
• Inadimplência do governo: questão política/orçamentária
• Seguro de crédito cobre risco **comercial** (B2B privado)

**Exceções e alternativas:**

**1. Empresas estatais mistas:**
• Petrobras, Eletrobras, etc.
• Algumas seguradoras cobrem como **risco comercial**
• Análise caso a caso

**2. Economia mista com controle privado:**
• Pode ser coberta dependendo da seguradora

**3. Para garantir contratos com governo:**
• Use **Seguro Garantia** (não Seguro de Crédito)
• Ramo SUSEP 0775
• Garante cumprimento da obrigação contratual

**4. Risco Político (exportação):**
• Inadimplência de **governos estrangeiros** é coberta
• Classificada como risco político
• Via apólice de exportação (ramo 0172)

**Resumo:**
• Vendas B2B privado → **Seguro de Crédito**
• Contratos com governo → **Seguro Garantia**
• Vendas para governos estrangeiros → **Risco Político (exportação)**`},{keywords:["e-commerce","marketplace","online","digital venda","plataforma venda"],category:"duvidas",answer:`**Seguro de Crédito para E-commerce e Marketplaces (B2B)**

**Aplicabilidade:**
• Seguro de crédito cobre vendas **B2B a prazo**
• E-commerce B2C (pessoa física): **não coberto**
• Marketplace B2B com venda a prazo: pode ser coberto

**Cenários cobertos:**
• Distribuidor vende online para varejistas a prazo
• Fabricante vende via marketplace B2B com boleto 30/60/90 dias
• Atacadista digital com crédito para lojistas

**Cenários NÃO cobertos:**
• Vendas para pessoa física (CPF)
• Vendas com pagamento à vista (cartão, Pix)
• Vendas com antecipação de recebíveis (risco é do adquirente)

**Integração digital:**
• APIs permitem consultar limite antes de aprovar venda
• Bloqueio automático se limite excedido
• Notificação automática de atrasos
• AVLA é a seguradora mais preparada para operações digitais

**Dica:** Se você opera um marketplace B2B e oferece crédito (buy now, pay later B2B), o seguro de crédito pode ser uma **peça fundamental** do modelo de negócio, garantindo o funding dos recebíveis.`},{keywords:["mito","verdade","mitos","verdades","e verdade que"],category:"mitos",answer:`**Mitos e Verdades sobre Seguro de Crédito**

**MITO: "Seguro de crédito é muito caro."**
✅ **Verdade:** Custa apenas 0,15% a 0,40% do faturamento. Uma inadimplência de R$ 500k custa 50x mais que o prêmio anual.

**MITO: "A seguradora nunca paga o sinistro."**
✅ **Verdade:** A taxa de pagamento é superior a 95% dos sinistros corretamente notificados. Os NQLs ocorrem por falha do segurado (notificação fora do prazo, venda acima do limite).

**MITO: "Só serve para grandes empresas."**
✅ **Verdade:** CESCE e AVLA oferecem produtos para empresas a partir de R$ 5M de faturamento a prazo.

**MITO: "Meu departamento de crédito já faz esse trabalho."**
✅ **Verdade:** O seguro COMPLEMENTA o departamento de crédito. A seguradora tem acesso a bases de dados que nenhuma empresa individual possui.

**MITO: "Se eu contratar, vou relaxar na análise de crédito."**
✅ **Verdade:** A POS (10-15%) garante que o segurado mantenha interesse em prevenir perdas. E o bônus/malus incentiva boa gestão.

**MITO: "A seguradora vai interferir nos meus negócios."**
✅ **Verdade:** A seguradora aprova limites e monitora, mas a decisão de vender é sempre do segurado.

**MITO: "IOF torna o seguro mais caro."**
✅ **Verdade:** Seguro de crédito é ISENTO de IOF (0%). Diferente de outros seguros.`},{keywords:["depoimento","case","sucesso","testemunho","resultado cliente"],category:"caso",answer:`**Casos de Sucesso — Seguro de Crédito na Prática**

**Caso 1: Indústria Química**
• Faturamento a prazo: R$ 120M/ano
• Prêmio anual: R$ 264.000 (0,22%)
• Sinistro no ano 2: Comprador entrou em RJ
• Exposição: R$ 2,8M
• Indenização (85%): R$ 2,38M
• **ROI: 9x** o prêmio pago em 2 anos

**Caso 2: Exportadora de Alimentos**
• Exportação para 15 países
• Prêmio: USD 35.000/ano
• Evento: Moratória cambial no país destino
• Exposição: USD 600.000
• Indenização (90%): USD 540.000
• **Sem o seguro, a empresa teria problemas de caixa sérios**

**Caso 3: Distribuidora de Eletrônicos**
• 200+ compradores, faturamento R$ 80M
• 3 anos sem sinistro → bônus acumulado de 25%
• No ano 4: 2 sinistros (R$ 800k total)
• Indenização: R$ 680k
• Mesmo com malus, o histórico de bônus compensou

**Resultado comum:**
• Empresas com seguro de crédito têm **taxa de sobrevivência 40% maior** em crises
• **90% dos clientes** renovam a apólice
• ROI médio em 5 anos: **3x a 5x** o prêmio total pago

Quer proteger sua empresa também? Clique em **Fazer Cotação**!`},{keywords:["garantir minhas vendas","garantir vendas","proteger vendas","proteger meu faturamento","proteger recebiveis","como garanto","como protejo","calote","nao pagar","nao pagou","medo de inadimplencia","evitar inadimplencia","garantir recebimento"],category:"comercial",answer:`**Como garantir suas vendas com o Seguro de Crédito**

O Seguro de Crédito é a forma mais eficiente de **proteger o faturamento a prazo** da sua empresa contra a inadimplência dos compradores.

**Como funciona na prática:**

1. **Você vende a prazo** normalmente para seus clientes
2. **A seguradora analisa** cada comprador e aprova um limite de crédito
3. **Se o comprador não pagar**, a seguradora indeniza sua empresa

**O que fica protegido:**
• Vendas com boleto, duplicata ou outro instrumento de crédito
• Operações no mercado interno e exportação
• Coberturas contra falência, recuperação judicial e mora prolongada

**Benefícios imediatos:**
• 💰 **Proteção do fluxo de caixa** — receba mesmo se o cliente não pagar
• 📊 **Análise de crédito profissional** — a seguradora monitora seus compradores 24/7
• 🏦 **Acesso facilitado a crédito bancário** — bancos aceitam a apólice como garantia
• 📈 **Venda mais com segurança** — expanda sua carteira sem medo de inadimplência

**Quanto custa:**
• Apenas **0,15% a 0,40%** do faturamento a prazo
• Isento de IOF (0%)
• ROI médio de 3x a 5x em 5 anos

**Exemplo prático:**
Faturamento a prazo de R$ 50M → prêmio de ~R$ 125.000/ano → proteção contra perdas que podem superar R$ 1M.

🛡️ Quer proteger suas vendas? Clique em **Iniciar Cotação** no menu principal!`},{keywords:["construcao","obra","construtora","incorporadora","imobiliario"],category:"setor",answer:`**Seguro de Crédito para Construção Civil**

Setor de **alto risco** com características específicas.

**Desafios do setor:**
• Ciclos econômicos longos
• Margens apertadas
• Alta taxa de insolvência
• Projetos de longo prazo
• Dependência de financiamento

**Taxas para construção civil:**
• 0,25% a 0,50% do faturamento a prazo
• Pode ser até **2x** a taxa de setores estáveis

**Coberturas relevantes:**
• Fornecedores de materiais de construção
• Vendas de insumos para construtoras
• Locação de equipamentos

**Seguradoras com apetite:**
• Allianz Trade (seletiva, grandes players)
• Coface (análise setorial robusta)
• Atradius (flexível com garantias adicionais)

**Dificuldades:**
• Limites geralmente **menores** para construtoras
• Seguradora exige balanço recente (menos de 6 meses)
• Empresas em recuperação judicial: limite negado

**Dica:** Se você fornece para construção civil, o seguro de crédito é **ainda mais importante** devido ao alto risco setorial. Comece a cotar antes que um grande cliente tenha problemas.`},{keywords:["textil","moda","confeccao","varejo","roupa"],category:"setor",answer:`**Seguro de Crédito para Têxtil e Moda**

Setor com **sazonalidade** e riscos específicos.

**Características do setor:**
• Alta competição com importados (China, Ásia)
• Margens apertadas
• Sazonalidade (coleções)
• Muitos compradores pequenos e médios
• Alto volume de trocas e devoluções

**Taxas para têxtil:**
• 0,20% a 0,40% do faturamento a prazo

**Desafios:**
• Disputas comerciais frequentes (qualidade, entrega)
• Compradores com saúde financeira frágil
• Devoluções que complicam a apuração do sinistro

**Dicas para o setor:**
• Documentar **aceitação** da mercadoria pelo comprador
• Ter contratos claros sobre trocas e devoluções
• Usar limite discricionário para compradores pequenos
• Focar limites nomeados nos grandes varejistas

**Modalidade recomendada:**
• **Whole Turnover** para carteira diversificada
• **Key Buyer** se vende para grandes redes varejistas

O seguro de crédito é particularmente valioso neste setor pela **informação de crédito** dos compradores.`},{keywords:["farmaceutico","saude","hospital","medicamento","healthcare"],category:"setor",answer:`**Seguro de Crédito para Setor Farmacêutico/Saúde**

Setor de **baixo risco** com boa aceitação pelas seguradoras.

**Características:**
• Demanda estável (produtos essenciais)
• Margens razoáveis
• Compradores diversificados (farmácias, distribuidores, hospitais)
• Regulamentação forte (ANVISA)

**Taxas para farma/saúde:**
• 0,10% a 0,20% do faturamento a prazo
• Das **menores** taxas do mercado

**Compradores típicos:**
• Redes de farmácias (Raia/Drogasil, Pague Menos)
• Distribuidores (Profarma, Santa Cruz)
• Hospitais e clínicas
• Governo (compras públicas — geralmente não seguráveis)

**Vantagens do setor:**
• Seguradoras aprovam limites mais facilmente
• PMI pode ser negociado mais alto (90%)
• Sinistralidade historicamente baixa
• Prêmio competitivo

**Atenção:**
• Hospitais públicos: vendas para governo **não são cobertas**
• Operadoras de saúde: analisar individualmente
• Distribuidores pequenos: usar limite discricionário

**Ideal para:** Laboratórios e distribuidores farmacêuticos que vendem a prazo para o setor privado.`},{keywords:["alimento","bebida","food","frigorifico","perecivel"],category:"setor",answer:`**Seguro de Crédito para Alimentos e Bebidas**

Um dos setores com **maior penetração** de seguro de crédito.

**Características:**
• Alto volume de vendas a prazo
• Margens relativamente baixas
• Produtos perecíveis (logística importante)
• Muitos compradores (varejo, food service, distribuidores)
• Exportação significativa (carnes, café, soja, açúcar)

**Taxas:**
• Mercado interno: 0,10% a 0,25%
• Exportação: 0,15% a 0,30%

**Subsetores:**
| Subsetor | Risco | Taxa |
|----------|-------|------|
| Carnes e frigoríficos | Médio | 0,15% - 0,30% |
| Bebidas | Baixo | 0,10% - 0,20% |
| Laticínios | Baixo-Médio | 0,12% - 0,25% |
| Commodities | Baixo | 0,10% - 0,20% |

**Atenção especial:**
• Disputas por qualidade/validade são comuns
• Documentação de entrega/aceite é crucial
• Exportação: Incoterms e seguro de transporte importantes
• Sazonalidade de vendas pode impactar limites

**Para exportadores de alimentos:**
• Seguro de crédito facilita ACC/ACE
• Acesso a BNDES Exim melhorado
• Cobertura de risco político incluída

Setor com **boa sinistralidade** — prêmios tendem a ser competitivos.`},{keywords:["tecnologia","software","saas","ti","tech empresa"],category:"setor",answer:`**Seguro de Crédito para Empresas de Tecnologia**

**Perfil das operações:**
• Vendas de hardware, software, licenças, SaaS
• Serviços de TI e integração
• Contratos recorrentes e pontuais
• Clientes B2B de diversos portes

**Taxas para TI:**
• 0,10% a 0,25% do faturamento a prazo

**Particularidades:**
• Vendas de **hardware**: seguro convencional
• Vendas de **software/SaaS**: verificar se a apólice cobre
• **Serviços**: geralmente cobertos se faturados a prazo
• Contratos **recorrentes**: exposição cumulativa no ano

**Seguradoras com expertise em tech:**
• AVLA (digital-first, entende o setor)
• Allianz Trade (grande base de dados tech)
• Chubb (soluções customizadas)

**Vantagens para empresas tech:**
• Ajuda a vender para empresas maiores (credibilidade)
• Protege contra calote de grandes projetos
• Inteligência sobre a saúde financeira dos clientes

**Atenção:**
• Serviços não entregues: disputa comercial (não coberto)
• Contratos com SLA: verificar se penalidades são cobertas
• Propriedade intelectual: não está no escopo do seguro

Empresas de TI que vendem hardware + serviços para outras empresas são **candidatas ideais** ao seguro de crédito.`},{keywords:["resolucao cnsp","cnsp","normativa","circular susep","regulamento"],category:"legislacao",answer:`**Regulamentação Detalhada — SUSEP e CNSP**

**Principais normas vigentes:**

**Resoluções CNSP:**
• **CNSP 432/2021** — Condições gerais de seguro de crédito
• **CNSP 407/2021** — Provisões técnicas
• **CNSP 321/2015** — Capital mínimo
• **CNSP 388/2020** — Resseguro

**Circulares SUSEP:**
• **Circular 553/2017** — Provisões técnicas (detalhamento)
• **Circular 621/2020** — Condições contratuais
• **Circular 637/2021** — Open Insurance
• **Circular 648/2022** — Sandbox regulatório

**Ramos regulamentados:**
• **0171** — Crédito Interno
• **0172** — Crédito à Exportação

**Exigências para seguradoras:**
• Autorização prévia da SUSEP
• Capital mínimo de solvência
• Provisões técnicas adequadas (IBNR, IBNER)
• Limite de retenção por risco
• Relatórios trimestrais (FIP)

**Para o segurado:**
• Direito de reclamar à SUSEP
• Prazos de pagamento de sinistro regulamentados
• Condições gerais devem ser aprovadas pela SUSEP
• Portabilidade (em discussão)

**Dica:** Verifique se a seguradora tem **registro ativo** na SUSEP antes de contratar (consulta no site da SUSEP).`},{keywords:["solvencia","solidez","seguranca seguradora","rating seguradora","garantia pagamento"],category:"seguradora",answer:`**Solvência e Segurança das Seguradoras de Crédito**

**Como saber se a seguradora é sólida:**

**1. Rating de agências:**
| Seguradora | S&P | Fitch | A.M. Best |
|------------|-----|-------|-----------|
| Allianz Trade | AA | — | — |
| Coface | — | AA- | — |
| Atradius | — | — | A |
| AIG | A+ | — | A |
| Chubb | AA | — | A++ |

**2. Registro SUSEP:**
• Toda seguradora deve ter autorização
• Consulta: site da SUSEP (www.susep.gov.br)
• Verificar se está ativa e regular

**3. Capital e provisões:**
• Seguradoras de crédito devem manter provisões técnicas
• Capital de solvência adequado
• Resseguro para riscos acima da capacidade

**4. Grupo econômico:**
• Allianz Trade → Grupo Allianz
• Coface → Natixis
• Atradius → Grupo Catalana Occidente
• Garantia do grupo controlador

**E se a seguradora quebrar?**
• Cenário muito improvável para as grandes
• Apólice é crédito quirografário contra a seguradora
• FGS (Fundo Garantidor de Seguros) em discussão

**Recomendação:** Prefira seguradoras com **rating A ou superior** e longo histórico no mercado.`},{keywords:["seguro empresarial","seguro patrimonial","outros seguros","diferenca outros"],category:"comparativo",answer:`**Seguro de Crédito vs Outros Seguros Empresariais**

| Seguro | O que Protege | Risco |
|--------|-------------|-------|
| **Seguro de Crédito** | Faturamento (recebíveis) | Inadimplência |
| Seguro Garantia | Cumprimento contratual | Descumprimento |
| Seguro Patrimonial | Bens físicos | Incêndio, roubo |
| Seguro de Responsabilidade | Terceiros | Danos causados |
| Seguro de Lucros Cessantes | Receita | Interrupção |
| Seguro de Transporte | Mercadoria em trânsito | Avaria, perda |
| D&O | Diretores | Ações pessoais |

**Por que o Seguro de Crédito é único:**
• Protege o **ativo mais importante**: as contas a receber
• Inclui **inteligência de crédito** (não apenas proteção)
• Impacta diretamente o **resultado financeiro**
• Facilita acesso a **financiamento**

**Hierarquia de prioridade para uma empresa que vende a prazo:**
1. 🥇 Seguro de Crédito (protege o faturamento)
2. 🥈 Seguro Patrimonial (protege os ativos)
3. 🥉 Seguro de Responsabilidade (protege contra terceiros)

**O recebível é o sangue da empresa.** Se o sangue para de circular (inadimplência), a empresa pode morrer.`},{keywords:["credit scoring","score","pontuacao","rating comprador","nota comprador"],category:"avancado",answer:`**Credit Scoring no Seguro de Crédito**

As seguradoras usam **modelos proprietários** de scoring para avaliar compradores.

**Fontes de dados:**
• Balanço patrimonial e DRE do devedor
• Histórico de pagamentos (Serasa, SPC, SCPC)
• Informações setoriais
• Bases internacionais (Dun & Bradstreet, etc.)
• Experiência da carteira da seguradora
• Dados comportamentais

**Scores por seguradora:**
| Seguradora | Score | Escala |
|------------|-------|--------|
| Allianz Trade | Global Score | 1-10 |
| Coface | DRA Rating | 1-10 (1=melhor) |
| Atradius | Buyer Rating | AAA a D |

**Fatores que impactam o score:**
• **Positivos:** Lucro consistente, baixo endividamento, histórico limpo
• **Negativos:** Prejuízo, dívidas elevadas, protestos, ações judiciais

**Como melhorar o score dos seus compradores:**
• Incentivar que mantenham balanços publicados
• Orientar sobre regularização cadastral
• Fornecer referências comerciais à seguradora

**Importante:** Score baixo não significa limite negado. A seguradora pode aprovar um **limite reduzido** ou com condições especiais.`},{keywords:["disputa comercial","disputa","contestacao","reclamacao comprador"],category:"avancado",answer:`**Disputa Comercial no Seguro de Crédito**

Uma das principais causas de **exclusão de cobertura**.

**O que é disputa comercial:**
• O comprador **contesta** a dívida
• Alega defeito no produto/serviço
• Discorda da quantidade entregue
• Questiona o preço cobrado
• Afirma que não recebeu a mercadoria

**Impacto no seguro:**
• Enquanto houver disputa: **sem indenização**
• Seguradora não arbitra disputas comerciais
• O segurado deve resolver a disputa diretamente
• Após resolução: se restou saldo devedor, pode acionar o seguro

**Como prevenir:**
1. **Documentação impecável:** NF, contrato, ordem de compra, comprovante de entrega
2. **Aceite formal:** Confirmação de recebimento assinada
3. **Condições claras:** Contrato com termos explícitos
4. **Comunicação:** Resolver reclamações rapidamente

**Se a disputa ocorrer:**
• Notifique a seguradora mesmo assim
• Documente tudo
• Resolva o mais rápido possível
• Se restar saldo após acordo: acione o seguro

**Dica:** Muitos devedores "criam" disputas para evitar pagar. Documentação robusta dificulta essa tática.`},{keywords:["monitoramento","acompanhamento","vigiar","alertas","monitoring"],category:"gestao",answer:`**Monitoramento de Compradores no Seguro de Crédito**

Um dos maiores **benefícios** do seguro é o monitoramento contínuo.

**O que a seguradora monitora:**
• Situação financeira do devedor
• Protestos e ações judiciais
• Pedidos de recuperação judicial
• Mudanças societárias
• Comportamento de pagamento no mercado
• Rating de crédito

**Alertas que você recebe:**
• ⚠️ Redução de limite (deterioração do comprador)
• ❌ Cancelamento de limite (risco elevado)
• 📉 Downgrade de rating
• 🔔 Evento negativo (protesto, RJ)

**Plataformas de monitoramento:**
| Seguradora | Plataforma | Frequência |
|------------|-----------|------------|
| Allianz Trade | EOLIS | Tempo real |
| Coface | CofaNet | Diário |
| Atradius | Insights | Tempo real |
| AVLA | Portal | Diário |

**Ação recomendada ao receber alerta:**
1. Revise a exposição ao comprador
2. Suspenda novas vendas se necessário
3. Reforce cobrança de faturas em aberto
4. Solicite informações adicionais à seguradora

**Dica:** Configure alertas por e-mail/SMS para agir rapidamente. No SENTINEL, os alertas são integrados ao dashboard.`},{keywords:["prazo notificacao","notificar atraso","avisar seguradora","overdue notification"],category:"processo",answer:`**Prazos de Notificação — O Item Mais Importante da Apólice**

**Prazo para notificar atraso:**
• **30 dias** após vencimento: prazo comum (mais exigente)
• **60 dias** após vencimento: prazo estendido (algumas apólices)
• **Contados a partir do vencimento** da fatura, não da data de emissão

**O que notificar:**
• CNPJ e razão social do devedor
• Número e valor das faturas em atraso
• Data de vencimento original
• Ações de cobrança já tomadas

**Consequência de NÃO notificar no prazo:**
• Perda total do direito à indenização para aquele sinistro
• É a causa mais comum de **NQL (Non-Qualifying Loss)**
• Sem exceção — prazo é rigoroso

**Como se proteger:**
• Configure alerta no sistema para D+25 do vencimento
• Automatize a notificação via portal da seguradora
• Revise semanalmente o aging de recebíveis
• Designe um responsável específico

**Também notificar:**
• Mudança na situação do devedor (RJ, falência)
• Negociação de pagamento com o devedor
• Recebimento parcial
• Disputa comercial

**Regra:** Na dúvida, **notifique**. É melhor notificar desnecessariamente do que perder o prazo.`},{keywords:["fluxo caixa","caixa","capital giro","liquidez","financeiro"],category:"financeiro",answer:`**Impacto do Seguro de Crédito no Fluxo de Caixa**

**Sem seguro de crédito:**
• Inadimplência = rombo no caixa
• Empresa precisa de reservas para absorver perdas
• Capital de giro comprometido
• Pode gerar efeito cascata (não pagar fornecedores)

**Com seguro de crédito:**
• Inadimplência = indenização em 30-60 dias
• Caixa protegido (85-95% recuperado)
• Capital de giro preservado
• Previsibilidade financeira

**Cálculo do impacto:**

| Cenário | Sem Seguro | Com Seguro |
|---------|-----------|----------|
| Faturamento a prazo | R$ 50M | R$ 50M |
| Inadimplência (3%) | R$ 1.500.000 | R$ 1.500.000 |
| Indenização (85%) | R$ 0 | R$ 1.275.000 |
| Perda líquida | R$ 1.500.000 | R$ 225.000 |
| Prêmio (0,20%) | R$ 0 | R$ 100.000 |
| **Impacto no caixa** | **-R$ 1.500.000** | **-R$ 325.000** |

**Economia:** R$ 1.175.000 protegidos

**Efeitos secundários positivos:**
• Melhor planejamento financeiro
• Possibilidade de investir (em vez de provisionar)
• Menor necessidade de linhas de crédito emergenciais
• Melhor relação com bancos e fornecedores`},{keywords:["multinacional","programa internacional","global program","multi pais"],category:"avancado",answer:`**Programas Internacionais de Seguro de Crédito**

Para empresas que operam em **múltiplos países**.

**Estrutura Master-Local:**

• **Master Policy (Apólice Master)**
   - Contratada na sede/matriz
   - Define condições globais
   - PMI, AAD e termos harmonizados
   - Prêmio consolidado (mais barato)

• **Local Policies (Apólices Locais)**
   - Emitidas em cada país de operação
   - Atendem legislação local
   - Limites locais sob framework global

**Benefícios:**
• Condições negociadas globalmente (mais vantajosas)
• Gestão centralizada com execução local
• Reportes consolidados
• Um único interlocutor na seguradora
• Economia de escala no prêmio

**Seguradoras com capacidade:**
| Seguradora | Países | Plataforma Global |
|------------|--------|-------------------|
| Allianz Trade | 52 | EOLIS Global |
| Coface | 57 | CofaNet Global |
| Atradius | 50+ | Atradius Global |
| Chubb | 54 | Customizado |

**Requisito:** Faturamento internacional relevante (geralmente USD 50M+ entre todas as subsidiárias).

A **Fairfield** tem parcerias com corretores internacionais para estruturar programas globais.`},{keywords:["conta escrow","escrow","garantia adicional","colateral","security deposit"],category:"financeiro",answer:`**Garantias Adicionais e Alternativas ao Seguro de Crédito**

**Instrumentos complementares:**

| Instrumento | Custo | Proteção | Complexidade |
|-------------|-------|----------|-------------|
| Seguro de Crédito | 0,2-0,5% | 85-95% | Média |
| Carta de Crédito | 1-3% | 100% | Alta |
| Aval Bancário | 1-2% aa | 100% | Média |
| Conta Escrow | Custo bancário | Total (retido) | Média |
| Penhor/Hipoteca | Cartório | Bem específico | Alta |
| Fiança Pessoal | Gratuita | Patrimônio pessoal | Baixa |
| Reserva de Domínio | Gratuita | Mercadoria | Baixa |

**Seguro de Crédito vs Garantias Reais:**

**Vantagens do seguro:**
• Não onera o comprador
• Cobre múltiplos compradores
• Inclui análise e monitoramento
• Serviço de cobrança
• Processo simples

**Quando combinar com garantias:**
• Operações muito grandes (acima do MCL)
• Compradores de altíssimo risco
• Setores com ativos penhoráveis (imóveis, equipamentos)

**Na prática:** O seguro de crédito **substitui** a maioria das garantias tradicionais e é preferido pela maioria das empresas modernas.`},{keywords:["historia","origem","quando surgiu","historico","criacao"],category:"educacional",answer:`**História do Seguro de Crédito**

**Origens:**
• **1820s:** Primeiras formas na **Inglaterra** (trade credit)
• **1885:** Primeira seguradora de crédito na Alemanha
• **1927:** Fundação da **Hermes** (hoje Allianz Trade) na Alemanha
• **1946:** Fundação da **Coface** na França
• **1925:** Fundação da **NCM** (precursora da Atradius)

**No Brasil:**
• **1966:** Decreto-Lei 73 cria o sistema de seguros
• **1979:** Lei 6.704 regulamenta o seguro de crédito à exportação
• **1990s:** Entrada das seguradoras internacionais
• **2000s:** Crescimento acelerado do mercado
• **2010s:** Digitalização e novos players (AVLA)
• **2020s:** IA e plataformas digitais (SENTINEL)

**Marcos globais:**
• Pós-Guerra (1945-1960): Expansão para reconstrução
• Crise do petróleo (1970s): Importância do risco político
• Globalização (1990s): Cobertura multinacional
• Crise de 2008: Teste de estresse do setor
• COVID-19 (2020): Maior sinistralidade da história

Hoje, o mercado global de seguro de crédito movimenta **EUR 10+ bilhões/ano** em prêmios.`},{keywords:["berna union","associacao","icisa","entidade","organizacao"],category:"educacional",answer:`**Organizações do Setor de Seguro de Crédito**

**Berne Union:**
• Associação internacional de seguradoras de crédito à exportação
• Fundada em **1934** em Berna, Suíça
• 85 membros (ECAs e seguradoras privadas)
• Cobre USD **2,8 trilhões** em comércio
• Brasil: **ABGF** é membro

**ICISA (International Credit Insurance & Surety Association):**
• Associação de seguradoras privadas
• Membros: Allianz Trade, Coface, Atradius, etc.
• Foco em standards e melhores práticas

**No Brasil:**
• **SUSEP:** Regulador
• **CNSeg:** Confederação Nacional das Seguradoras
• **ABGF:** Agência Brasileira Gestora de Fundos (FGE)
• **Fenacor:** Federação Nacional dos Corretores
• **Sincor:** Sindicato dos Corretores

**ECAs (Export Credit Agencies) relevantes:**
| País | ECA |
|------|-----|
| Brasil | ABGF/SBCE |
| EUA | Ex-Im Bank |
| Alemanha | Euler Hermes (pública) |
| França | BPI France |
| Japão | NEXI |
| China | Sinosure |

Essas organizações promovem o desenvolvimento e a padronização do seguro de crédito globalmente.`},{keywords:["dica","conselho","recomendacao","sugestao","melhores praticas"],category:"dicas",answer:`**Dicas para Aproveitar ao Máximo o Seguro de Crédito**

**Antes de contratar:**
1. Organize seu **histórico de inadimplência** (últimos 5 anos)
2. Tenha o **aging de recebíveis** atualizado
3. Liste seus **top 20 compradores** com volumes
4. Cote com **pelo menos 3 seguradoras**

**Na contratação:**
5. Negocie o **AAD** — aceitar franquia maior reduz o prêmio
6. Não peça PMI 95% se não precisa — 85% é suficiente para a maioria
7. Garanta **limite discricionário** adequado
8. Entenda o prazo de **notificação** (crucial!)

**Durante a vigência:**
9. **Declare faturamento** em dia
10. **Notifique atrasos** dentro do prazo (não espere!)
11. Monitore limites aprovados antes de cada venda
12. Use as **informações de crédito** da seguradora
13. Mantenha documentação organizada (NFs, contratos)

**Na renovação:**
14. Comece a negociar **60 dias antes**
15. Use o histórico bom para pedir **bônus**
16. Compare com outras seguradoras
17. Renegocie AAD e PMI conforme necessidade

**Regra de ouro:** O seguro de crédito funciona melhor quando **integrado à gestão de crédito** da empresa, não como produto isolado.`},{keywords:["negociar","negociacao","melhor preco","baratear","reduzir custo"],category:"dicas",answer:`**Como Negociar Melhores Condições no Seguro de Crédito**

**Alavancas de negociação:**

**1. AAD/Franquia (maior impacto)**
• Aceitar AAD mais alto = prêmio menor
• AAD R$ 100k → R$ 300k pode reduzir prêmio em **15-25%**

**2. PMI (impacto moderado)**
• PMI 90% → 85% pode reduzir prêmio em **5-10%**
• Avalie se a redução compensa

**3. Volume (economia de escala)**
• Faturamento maior = taxa menor
• Apresente projeção de crescimento

**4. Diversificação**
• Carteira diversificada = menor risco = melhor taxa
• Compradores em setores diferentes

**5. Sinistralidade**
• Sem sinistros: peça bônus de **10-20%**
• Apresente histórico documentado

**6. Concorrência**
• Cote com múltiplas seguradoras
• Use proposta de uma para negociar com outra
• O SENTINEL facilita isso automaticamente

**7. Multi-year**
• Contrato de 2-3 anos pode ter condições melhores
• Garante estabilidade de preço

**8. Timing**
• Final do ano fiscal da seguradora: mais flexibilidade
• Renovação antecipada: margem de negociação

**Economia típica com boa negociação: 15-30%** sobre a primeira proposta.`},{keywords:["erro comum","erro","cuidado","atencao","armadilha","evitar"],category:"dicas",answer:`**Erros Comuns no Seguro de Crédito — E Como Evitá-los**

**1. Não notificar atraso no prazo**
• Prazo: 30-60 dias após vencimento
• Consequência: **perda do direito à indenização**
• Solução: Configurar alertas automáticos

**2. Vender acima do limite aprovado**
• O excedente NÃO é coberto
• Solução: Consultar limite antes de cada venda

**3. Não declarar faturamento**
• Pode invalidar a apólice
• Solução: Automatizar a declaração

**4. Ignorar cancelamento de limite**
• Seguradora cancela limite de comprador
• Empresa continua vendendo sem cobertura
• Solução: Monitorar alertas da seguradora

**5. Não ler as condições gerais**
• Surpresas na hora do sinistro
• Solução: Revisão com corretor antes de assinar

**6. Contratar e esquecer**
• Seguro de crédito requer gestão ativa
• Solução: Reuniões trimestrais com corretor

**7. Escolher apenas pelo preço**
• Seguradora barata pode ter limites baixos
• Solução: Avaliar capacidade + serviço + preço

**8. Não usar as informações da seguradora**
• Seguradora tem dados valiosos dos compradores
• Solução: Integrar dados na decisão de crédito

**O erro mais caro:** Não ter seguro de crédito quando um grande cliente dá calote.`},{keywords:["nordeste","norte","sul","sudeste","regiao","estado"],category:"regional",answer:`**Seguro de Crédito por Região do Brasil**

**Perfil de risco regional:**

| Região | Inadimplência Relativa | Observação |
|--------|----------------------|------------|
| **Sudeste** | Média | Maior volume de operações |
| **Sul** | Baixa-Média | Boa cultura de pagamento |
| **Nordeste** | Média-Alta | Crescimento rápido |
| **Centro-Oeste** | Baixa-Média | Forte no agro |
| **Norte** | Alta | Menor penetração |

**Seguro de crédito é mais contratado em:**
• **São Paulo** (50%+ do mercado)
• **Rio de Janeiro**
• **Minas Gerais**
• **Rio Grande do Sul**
• **Paraná / Santa Catarina**

**Oportunidades de crescimento:**
• Nordeste: expansão industrial e comercial
• Centro-Oeste: agronegócio em crescimento
• Norte: operações com Zona Franca de Manaus

**Dica:** A localização do **comprador** importa mais que a do segurado. Se você vende para todo o Brasil, sua carteira é diversificada regionalmente — o que é positivo para a seguradora.`},{keywords:["contabil","contabilidade","pdd","provisao","lancamento"],category:"contabil",answer:`**Tratamento Contábil do Seguro de Crédito**

**Lançamentos principais:**

**1. Pagamento do prêmio:**
• D — Seguros a Apropriar (Ativo Circulante)
• C — Caixa/Banco
• Apropriação mensal: D — Despesa com Seguros / C — Seguros a Apropriar

**2. Recebimento de indenização:**
• D — Caixa/Banco
• C — Outras Receitas Operacionais
• Ou: C — Reversão de PDD (se já provisionado)

**3. Impacto na PDD:**
• Recebíveis **segurados**: PDD menor ou zero
• Parte não coberta (POS): mantém PDD proporcional
• Resultado: melhora o **resultado líquido**

**Normas contábeis:**
• **CPC 48 (IFRS 9):** Classificação de instrumentos financeiros
• **CPC 11 (IFRS 4):** Contratos de seguro
• **CPC 25:** Provisões e contingências

**Impacto tributário:**
• Prêmio de seguro: **dedutível** como despesa operacional
• Indenização: tributada como receita
• IOF: 0% (isento para seguro de crédito)
• Prêmio já inclui PIS/COFINS da seguradora

**Para o balanço:**
• Melhora índices de liquidez (recebíveis mais seguros)
• Reduz contingências passivas
• Demonstra gestão de risco ativa`},{keywords:["forma pagamento","parcelamento","como pagar","parcela premio"],category:"preco",answer:`**Formas de Pagamento do Prêmio de Seguro de Crédito**

**Opções comuns:**

| Forma | Frequência | Desconto |
|-------|-----------|----------|
| À vista | Anual | 3% a 5% |
| Trimestral | 4x/ano | Padrão |
| Mensal | 12x/ano | Pode ter acréscimo |
| Prêmio Ajustável | Mensal/trimestral | Sobre faturamento real |

**Prêmio Ajustável (mais comum):**
• **Prêmio Mínimo:** Pago no início (geralmente 60-70% do estimado)
• **Declarações periódicas:** Faturamento real a prazo
• **Ajuste final:** Diferença entre mínimo e prêmio sobre faturamento real

**Exemplo:**
• Prêmio estimado: R$ 120.000/ano
• Prêmio mínimo (70%): R$ 84.000
• Faturamento real menor que estimado → sem ajuste adicional
• Faturamento real maior → paga diferença

**Importante:**
• Atraso no pagamento do prêmio pode **suspender** a cobertura
• Seguradoras geralmente dão prazo de carência (30 dias)
• Boleto bancário é a forma mais comum

**Dica:** Opte por prêmio ajustável se seu faturamento varia significativamente ao longo do ano.`},{keywords:["corretor","corretora","intermediario","broker","papel corretor"],category:"corretagem",answer:`**O Papel do Corretor no Seguro de Crédito**

O corretor é o **intermediário obrigatório** entre o segurado e a seguradora.

**Funções do corretor:**

1. **Consultoria**
   • Análise do perfil de risco da empresa
   • Recomendação de coberturas
   • Escolha da melhor seguradora

2. **Cotação**
   • Cotação com múltiplas seguradoras
   • Negociação de condições
   • Comparativo de propostas

3. **Gestão da apólice**
   • Endossos e alterações
   • Renovações
   • Acompanhamento de limites

4. **Sinistro**
   • Orientação no processo
   • Intermediação com seguradora
   • Acompanhamento até o pagamento

**Remuneração:**
• Comissão de corretagem: **10% a 15%** do prêmio
• Paga **pela seguradora** (não pelo segurado)
• O segurado **não paga** a mais por usar corretor

**Por que usar a Fairfield?**
• Especialistas em seguro de crédito
• Plataforma SENTINEL com IA
• Acesso a todas as seguradoras do mercado
• Suporte dedicado no sinistro

O corretor é seu **advogado** no mercado de seguros.`},{keywords:["incoterms","incoterm","fob","cif","termos comercio"],category:"internacional",answer:`**Incoterms e Seguro de Crédito à Exportação**

Os Incoterms influenciam a cobertura do seguro de crédito.

**Incoterms mais relevantes:**

| Incoterm | Risco do Exportador | Impacto no Seguro |
|----------|--------------------|-----------------|
| **EXW** | Baixo (comprador busca) | Cobertura menor |
| **FOB** | Até embarque | Padrão |
| **CFR/CIF** | Até destino (frete) | Padrão |
| **DDP** | Total (até entrega) | Cobertura maior |

**Na prática:**
• O seguro de crédito cobre o **risco de pagamento**, não o transporte
• Incoterm define quando a **propriedade** passa ao comprador
• Seguro de crédito complementa o seguro de transporte

**Dica:**
• Em vendas **FOB/CFR**: seguro de crédito protege após o embarque
• Em vendas **DDP**: risco é maior, taxa pode ser mais alta
• Sempre combine seguro de crédito + seguro de transporte

**Moeda da apólice:**
• Exportação: geralmente em **USD ou EUR**
• Doméstico: em **BRL**
• Apólice mista: pode ter ambas as moedas`},{keywords:["carta credito","letter of credit","lc","cobranca documentaria"],category:"internacional",answer:`**Seguro de Crédito vs Carta de Crédito (L/C)**

**Comparação:**

| Aspecto | Seguro de Crédito | Carta de Crédito |
|---------|-------------------|------------------|
| **Custo** | 0,2% - 0,6% | 1% - 3% |
| **Emissão** | Imediata (limite aprovado) | Por operação |
| **Burocracia** | Baixa | Alta (documentos) |
| **Cobertura** | Múltiplos compradores | Uma operação |
| **Risco político** | Coberto | Parcialmente |
| **Relação com comprador** | Não afeta | Pode dificultar |

**Quando usar cada um:**

**Seguro de Crédito:**
• Vendas recorrentes
• Compradores conhecidos
• Mercados estáveis
• Margens apertadas (custo menor)

**Carta de Crédito:**
• Primeira venda para comprador desconhecido
• Países de altíssimo risco
• Operações pontuais de alto valor
• Comprador aceita abrir L/C

**Ideal:** Usar **seguro de crédito** como padrão e L/C apenas para situações excepcionais. Muitos compradores rejeitam L/C por ser caro e burocrático para eles.`},{keywords:["preciso mesmo","necessario","obrigatorio","vale pena","devo contratar"],category:"duvidas",answer:`**Eu Preciso Mesmo de Seguro de Crédito?**

**Pergunte-se:**

1. Você vende a prazo? **→ Se sim, há risco de inadimplência.**
2. Quanto representaria perder seu maior cliente? **→ Se for significativo, precisa de proteção.**
3. Você conhece a saúde financeira de todos os seus compradores? **→ Se não, a seguradora pode ajudar.**
4. Você tem reservas para absorver um calote grande? **→ Se não, o seguro é essencial.**

**Sinais de que PRECISA de seguro:**
• Faturamento a prazo > R$ 5 milhões/ano
• Dependência de poucos grandes clientes
• Expansão para novos mercados/clientes
• Histórico de inadimplência
• Setor com risco elevado
• Exportação para mercados instáveis

**Sinais de que talvez NÃO precise:**
• Vendas 100% à vista
• Vendas apenas para governo
• Faturamento muito baixo (< R$ 2M)
• Todos os clientes pagam adiantado

**Custo x Benefício:**
• Prêmio: 0,15% a 0,40% do faturamento
• Uma única inadimplência pode custar **centenas de vezes** mais que o prêmio anual

**O seguro de crédito é um investimento com retorno garantido em tranquilidade e proteção.**`},{keywords:["pequena empresa","mei","micro","simples nacional","startup empresa"],category:"duvidas",answer:`**Seguro de Crédito para Pequenas Empresas**

**É viável?** Depende do faturamento a prazo.

**Faixas de viabilidade:**
| Faturamento a Prazo | Viabilidade |
|---------------------|-------------|
| < R$ 2 milhões | Provavelmente não compensa |
| R$ 2M - R$ 5M | Avaliar caso a caso |
| R$ 5M - R$ 20M | Viável (CESCE, AVLA) |
| > R$ 20M | Altamente recomendável |

**Soluções para PMEs:**

**CESCE Master PME:**
• Prêmio a partir de R$ 15.000/ano
• Processo simplificado
• Limite discricionário generoso

**AVLA Digital:**
• 100% online
• Aprovação em dias
• Prêmio competitivo

**Coface EasyLiner:**
• Produto específico para PMEs
• Condições padronizadas (mais barato)

**Alternativas para empresas muito pequenas:**
• Consultar cadastro (Serasa, Boa Vista)
• Seguro de crédito para operações pontuais (Single Risk)
• Factoring com análise de crédito

**Dica:** Se o faturamento a prazo está crescendo, contrate o seguro **agora** — o histórico bom gera bônus no futuro.`},{keywords:["cancelar","cancelamento","desistir","rescindir","sair do seguro"],category:"processo",answer:`**Cancelamento do Seguro de Crédito**

**Quem pode cancelar:**

**Segurado:**
• Pode cancelar com aviso prévio (30-60 dias)
• Recebe devolução proporcional do prêmio não utilizado
• Sinistros em andamento continuam sendo processados

**Seguradora:**
• Pode não renovar no vencimento
• Em casos graves: cancelamento durante a vigência (raro)
• Deve avisar com antecedência (90 dias)

**Consequências do cancelamento:**
• Cobertura encerra na data do cancelamento
• Sinistros anteriores ao cancelamento: **continuam cobertos**
• Novos sinistros após cancelamento: **não cobertos**
• Limites de crédito são cancelados

**Período de run-off (cauda):**
• Vendas realizadas ANTES do cancelamento
• Com vencimento APÓS o cancelamento
• Geralmente **cobertas** por 90-180 dias

**Dica:** Pense muito antes de cancelar. Ao recontratar:
• Perde todo o **bônus** acumulado
• Novo período de análise
• Pode ter condições piores

**Se está insatisfeito:** Considere **trocar de seguradora** na renovação, mantendo a apólice ativa.`},{keywords:["fraude","golpe","falsificacao","prevencao fraude"],category:"gestao",answer:`**Prevenção de Fraude no Seguro de Crédito**

**Tipos de fraude que o seguro ajuda a detectar:**

1. **Empresas fantasma (devedor)**
   • Seguradora analisa CNPJ e histórico
   • Empresas sem atividade real: limite **negado**
   • Base de dados identifica padrões suspeitos

2. **Golpe do pedido grande**
   • Novo cliente faz pedido muito acima do normal
   • Seguradora pode alertar sobre risco
   • Limite de crédito limita a exposição

3. **Empresa em pré-insolvência**
   • Comprador comprando de múltiplos fornecedores sem intenção de pagar
   • Seguradora monitora sinais de deterioração
   • Cancelamento preventivo de limite

**Ferramentas anti-fraude das seguradoras:**
• Bases de dados com milhões de empresas
• Cruzamento de informações internacionais
• Alertas de comportamento atípico
• Rede de informantes no mercado

**Atenção — Fraude DO segurado:**
• Seguro NÃO cobre vendas fictícias
• Conluio com devedor é crime
• Falsificação de documentos anula a apólice
• Seguradora investiga todos os sinistros

**O seguro de crédito é uma das melhores ferramentas anti-fraude** porque a seguradora analisa cada comprador antes de aprovar o limite.`},{keywords:["grupo economico","holding","matriz filial","multinacional","programa global"],category:"avancado",answer:`**Seguro de Crédito para Grupos Econômicos**

**Programa Global (Multinacionais):**

Empresas com operações em vários países podem contratar um **programa global**.

**Como funciona:**
• **Master Policy:** Apólice principal (matriz)
• **Local Policies:** Apólices locais em cada país
• Condições harmonizadas globalmente
• Gestão centralizada

**Seguradoras com capacidade global:**
• Allianz Trade (52 países)
• Coface (57 escritórios)
• Atradius (50+ países)

**Vantagens:**
• Condições globais negociadas (prêmio melhor)
• Visão consolidada do risco
• Gestão centralizada com execução local
• Reportes unificados

**Para grupos nacionais (holding):**
• Apólice pode cobrir todas as empresas do grupo
• Devedores do grupo são **excluídos** (partes relacionadas)
• Limite consolidado pode ser maior
• Prêmio baseado no faturamento consolidado

**Atenção:**
• Vendas **intragrupo** (entre empresas do mesmo grupo) não são cobertas
• Cada CNPJ pode ter apólice separada ou consolidada
• Análise do grupo como um todo pela seguradora`},{keywords:["open insurance","compartilhamento dados","futuro seguro","tendencia"],category:"tecnologia",answer:`**Futuro do Seguro de Crédito — Tendências**

**1. Open Insurance (SUSEP)**
• Compartilhamento de dados entre seguradoras
• Portabilidade de apólices
• Maior concorrência e melhores preços
• Implementação prevista até 2025-2026

**2. Inteligência Artificial**
• Análise preditiva de inadimplência
• Scoring automático de compradores
• Detecção de padrões de fraude
• Chatbots especializados (como eu, o iCover!)

**3. Embedded Insurance**
• Seguro integrado diretamente no ERP
• Cotação automática a cada venda
• Sem necessidade de portal separado
• Frictionless (sem atrito)

**4. Parametric Credit Insurance**
• Indenização automática baseada em gatilhos
• Ex: devedor entra em RJ → pagamento imediato
• Sem regulação manual de sinistro

**5. ESG e Sustentabilidade**
• Análise ESG dos devedores
• Prêmio diferenciado para carteiras sustentáveis
• Relatórios de impacto

**6. Blockchain**
• Contratos inteligentes para sinistros
• Rastreabilidade de transações comerciais
• Redução de fraude

O **SENTINEL** está na vanguarda dessas tendências, integrando IA e automação para o mercado brasileiro.`},{keywords:["ajuda","help","menu","opcoes","o que voce sabe","o que faz"],category:"ajuda",answer:`Posso te ajudar com diversos assuntos sobre **Seguro de Crédito**:

**Conceitos:**
• O que é Seguro de Crédito
• Diferenças para Seguro Garantia e Factoring
• Estrutura da apólice

**Coberturas:**
• Crédito Interno e Exportação
• Whole Turnover, Key Buyer, Single Risk
• Excess of Loss, Top-Up
• Risco Político

**Termos técnicos:**
• PMI, POS, AAD, Limite de Crédito
• Mora prolongada, Insolvência
• NQL, MCL, Limite discricionário

**Seguradoras:**
• Allianz Trade, Coface, Atradius
• CESCE, AIG, AVLA, Chubb

**Processo:**
• Como contratar, documentação, prazos
• Renovação, sinistro, indenização

**Preços:**
• Taxas, prêmio mínimo, fatores
• Bonus/Malus, IOF

**Legislação:**
• SUSEP, Decreto-Lei 73/1966
• Lei 6.704/1979, Código Civil

Sobre qual tema posso te orientar?`}];function cu(s){return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\w\s]/g,"").trim()}function Ig(s,d=[]){const l=cu(s),m=l.split(/\s+/).filter(g=>g.length>1);let c=0,p=null;const f=d.filter(g=>g.category).slice(-5).map(g=>g.category);for(const g of Dg){let v=0;for(const y of g.keywords){const k=cu(y),j=k.split(/\s+/);l.includes(k)&&(v+=j.length*3);for(const E of j)for(const _ of m)(_.startsWith(E)||E.startsWith(_))&&(v+=1)}v>0&&f.includes(g.category)&&(v+=.5),v>c&&(c=v,p=g)}return c>=1&&p?{answer:p.answer,category:p.category}:{answer:`Desculpe, não encontrei informações específicas sobre isso na minha base de conhecimento.

Posso te ajudar com:
• **Conceitos** de Seguro de Crédito
• **Coberturas** (Whole Turnover, Key Buyer, etc.)
• **Seguradoras** (Allianz Trade, Coface, Atradius, etc.)
• **Preços e taxas**
• **Legislação** (SUSEP, leis)
• **Processo** de contratação e sinistro

Tente reformular sua pergunta ou escolha um dos temas acima!

Ou, se preferir, clique em **"Fale com um especialista"** para conversar com nossa equipe.`,category:"fallback"}}function _g(s){const d=s.split(`
`),l=[];let m=[],c=0;function p(g){const v=[],y=/\*\*(.+?)\*\*/g;let k=0,j;for(;(j=y.exec(g))!==null;)j.index>k&&v.push(g.slice(k,j.index)),v.push(r.jsx("strong",{className:"font-semibold text-white",children:j[1]},`b-${j.index}`)),k=y.lastIndex;return k<g.length&&v.push(g.slice(k)),v.length>0?v:[g]}function f(){if(m.length===0)return;const g=m[0].split("|").filter(y=>y.trim()),v=m.slice(2);l.push(r.jsx("div",{className:"overflow-x-auto my-2",children:r.jsxs("table",{className:"w-full text-xs border-collapse",children:[r.jsx("thead",{children:r.jsx("tr",{children:g.map((y,k)=>r.jsx("th",{className:"border border-white/10 px-2 py-1 text-left text-white/80 bg-white/[0.04]",children:p(y.trim())},k))})}),r.jsx("tbody",{children:v.map((y,k)=>{const j=y.split("|").filter(E=>E.trim());return r.jsx("tr",{children:j.map((E,_)=>r.jsx("td",{className:"border border-white/10 px-2 py-1 text-white/60",children:p(E.trim())},_))},k)})})]})},`table-${c++}`)),m=[]}for(let g=0;g<d.length;g++){const v=d[g];if(v.includes("|")&&v.trim().startsWith("|")){m.push(v),(g===d.length-1||!d[g+1].includes("|")||!d[g+1].trim().startsWith("|"))&&f();continue}else m.length>0&&f();if(v.trim()===""){l.push(r.jsx("div",{className:"h-2"},`br-${g}`));continue}if(v.trim().startsWith("• ")||v.trim().startsWith("- ")){const k=v.trim().replace(/^[•\-]\s*/,"");l.push(r.jsxs("div",{className:"flex gap-2 ml-2 my-0.5",children:[r.jsx("span",{className:"text-sentinel mt-0.5",children:"•"}),r.jsx("span",{children:p(k)})]},`li-${g}`));continue}const y=v.trim().match(/^(\d+)\.\s+(.*)/);if(y){l.push(r.jsxs("div",{className:"flex gap-2 ml-2 my-0.5",children:[r.jsxs("span",{className:"text-sentinel/70 font-mono text-xs mt-0.5",children:[y[1],"."]}),r.jsx("span",{children:p(y[2])})]},`ol-${g}`));continue}if(v.trim().match(/^\*\*.*\*\*$/)){l.push(r.jsx("div",{className:"mt-2 mb-1",children:p(v.trim())},`h-${g}`));continue}l.push(r.jsx("div",{className:"my-0.5",children:p(v)},`p-${g}`))}return m.length>0&&f(),l}const Fg=`Olá! Eu sou o **iCover** — a **IA mais inteligente em Seguros Financeiros** do mercado brasileiro.

Tenho conhecimento profundo sobre:
• **Seguro de Crédito** — interno, exportação, riscos políticos
• Legislação atualizada (SUSEP, Decreto-Lei 73/1966, Lei 6.704/1979)
• Cálculos de prêmio, PMI, franquias e limites
• Seguradoras especializadas: Allianz Trade, Coface, Atradius, CESCE, AIG, AVLA, Chubb
• Documentação necessária por modalidade

Como posso te ajudar hoje?`,Tg=["O que é Seguro de Crédito?","Quanto custa um Seguro de Crédito?","Quais seguradoras operam no Brasil?","Como funciona a indenização?","O que é PMI e POS?","Como posso garantir minhas vendas com o Seguro de Crédito?"];function uu(){jn();const[s,d]=C.useState([{id:1,sender:"bot",text:Fg,category:"saudacao"}]),[l,m]=C.useState(""),[c,p]=C.useState(!1),[f,g]=C.useState(!0),[v,y]=C.useState(!1),[k,j]=C.useState([{id:1,sender:"bot",text:"Olá! Sou da equipe de especialistas da Fairfield. Como posso te ajudar?"}]),[E,_]=C.useState(""),F=C.useRef(null),z=C.useRef(null),L=C.useRef(null),O=C.useRef(null);C.useEffect(()=>{var H;(H=F.current)==null||H.scrollIntoView({behavior:"smooth"})},[s,c]),C.useEffect(()=>{var H;(H=O.current)==null||H.scrollIntoView({behavior:"smooth"})},[k]);const q=C.useCallback(H=>{const ie=(H||l).trim();if(!ie)return;const ue={id:Date.now(),sender:"user",text:ie};d(ge=>[...ge,ue]),m(""),g(!1),p(!0),setTimeout(()=>{const{answer:ge,category:$e}=Ig(ie,s),_e={id:Date.now()+1,sender:"bot",text:ge,category:$e};d(Ee=>[...Ee,_e]),p(!1)},800+Math.random()*600)},[l,s]),D=H=>{H.key==="Enter"&&!H.shiftKey&&(H.preventDefault(),q())},$=H=>{q(H)},X=()=>{const H=E.trim();if(!H)return;const ie={id:Date.now(),sender:"user",text:H};j(ue=>[...ue,ie]),_(""),setTimeout(()=>{const ue={id:Date.now()+1,sender:"bot",text:"Obrigado pela mensagem! Um de nossos especialistas vai te responder em instantes."};j(ge=>[...ge,ue])},1200)},J=H=>{H.key==="Enter"&&!H.shiftKey&&(H.preventDefault(),X())};return r.jsxs("div",{className:"min-h-screen bg-navy flex flex-col",children:[r.jsx("style",{children:Ag}),r.jsx("header",{className:"bg-navy-surface border-b border-white/[0.06] px-4 py-3",children:r.jsxs("div",{className:"max-w-3xl mx-auto flex items-center gap-3",children:[r.jsx(oo,{to:"/",className:"text-white/40 hover:text-white/70 transition-colors",children:r.jsx(Rg,{})}),r.jsxs("div",{className:"flex items-center gap-1.5",children:[r.jsx(no,{size:22}),r.jsx("span",{className:"text-[10px] font-mono text-sentinel/60 tracking-widest uppercase",children:"SENTINEL"})]}),r.jsx("div",{className:"w-px h-6 bg-white/10 mx-1"}),r.jsx("div",{className:"w-9 h-9 rounded-full bg-gradient-to-br from-sentinel/20 to-sentinel/5 border border-sentinel/30 flex items-center justify-center",children:r.jsx(Mg,{})}),r.jsxs("div",{className:"flex-1 min-w-0",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("h1",{className:"text-sm font-semibold text-white",children:"iCover"}),r.jsxs("span",{className:"flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20",children:[r.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-green"}),r.jsx("span",{className:"text-[9px] text-emerald-400 font-medium",children:"Online"})]})]}),r.jsx("p",{className:"text-[11px] text-white/40 truncate",children:"IA Especialista em Seguro de Crédito"})]}),r.jsxs(oo,{to:"/cotacao/interno",className:"hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sentinel/10 border border-sentinel/20 text-sentinel text-xs font-medium hover:bg-sentinel/20 transition-colors",children:[r.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),r.jsx("polyline",{points:"14 2 14 8 20 8"}),r.jsx("line",{x1:"12",y1:"18",x2:"12",y2:"12"}),r.jsx("line",{x1:"9",y1:"15",x2:"15",y2:"15"})]}),"Fazer Cotação"]})]})}),r.jsx("main",{className:"flex-1 overflow-y-auto px-4 py-6",children:r.jsxs("div",{className:"max-w-3xl mx-auto space-y-4",children:[s.map(H=>r.jsxs("div",{className:`flex gap-2.5 msg-enter ${H.sender==="user"?"justify-end":"justify-start"}`,children:[H.sender==="bot"&&r.jsx(du,{}),r.jsx("div",{className:`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${H.sender==="bot"?"bg-white/[0.03] border border-white/[0.06] text-white/70 rounded-tl-md":"bg-sentinel/15 border border-sentinel/20 text-white rounded-tr-md"}`,children:H.sender==="bot"?_g(H.text):H.text})]},H.id)),f&&s.length===1&&r.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 fade-in",children:Tg.map((H,ie)=>r.jsx("button",{onClick:()=>$(H),className:"text-left px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-white/50 text-sm hover:bg-white/[0.05] hover:text-white/70 hover:border-white/[0.12] transition-all duration-200",children:H},ie))}),c&&r.jsxs("div",{className:"flex gap-2.5 justify-start msg-enter",children:[r.jsx(du,{}),r.jsxs("div",{className:"bg-white/[0.03] border border-white/[0.06] rounded-2xl rounded-tl-md px-4 py-3 flex items-center gap-1.5",children:[r.jsx("span",{className:"typing-dot w-2 h-2 rounded-full bg-sentinel/60 inline-block"}),r.jsx("span",{className:"typing-dot w-2 h-2 rounded-full bg-sentinel/60 inline-block"}),r.jsx("span",{className:"typing-dot w-2 h-2 rounded-full bg-sentinel/60 inline-block"})]})]}),r.jsx("div",{ref:F})]})}),r.jsx("footer",{className:"border-t border-white/[0.06] bg-navy-surface px-4 py-3",children:r.jsxs("div",{className:"max-w-3xl mx-auto",children:[r.jsxs("div",{className:"flex gap-2 items-end",children:[r.jsx("textarea",{ref:z,value:l,onChange:H=>m(H.target.value),onKeyDown:D,placeholder:"Pergunte qualquer coisa sobre Seguro de Crédito...",rows:1,className:"flex-1 bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 resize-none focus:outline-none focus:border-sentinel/30 focus:ring-1 focus:ring-sentinel/10 transition-colors",style:{minHeight:"42px",maxHeight:"120px"},onInput:H=>{H.target.style.height="42px",H.target.style.height=Math.min(H.target.scrollHeight,120)+"px"}}),r.jsx("button",{onClick:()=>q(),disabled:!l.trim()||c,className:"w-10 h-10 rounded-xl bg-sentinel/20 border border-sentinel/30 text-sentinel flex items-center justify-center hover:bg-sentinel/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0",children:r.jsx(iu,{})})]}),r.jsxs("button",{onClick:()=>y(!0),className:"mt-3 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium hover:bg-emerald-500/20 transition-colors headphone-pulse",children:[r.jsx(lu,{size:16}),"Fale com um de nossos especialistas"]}),r.jsx("p",{className:"text-center text-[10px] text-white/20 mt-3 font-mono",children:"Powered by SENTINEL | Fairfield"})]})}),v&&r.jsx("div",{className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 fade-in",children:r.jsxs("div",{className:"w-full sm:w-[420px] max-h-[80vh] bg-navy-surface border border-white/[0.08] rounded-t-2xl sm:rounded-2xl flex flex-col overflow-hidden shadow-2xl",children:[r.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-emerald-500/5",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"w-9 h-9 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400",children:r.jsx(lu,{size:18})}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-sm font-semibold text-white",children:"Suporte Fairfield"}),r.jsxs("div",{className:"flex items-center gap-1.5",children:[r.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-green"}),r.jsx("span",{className:"text-[10px] text-emerald-400/70",children:"Especialistas online"})]})]})]}),r.jsx("button",{onClick:()=>y(!1),className:"w-8 h-8 rounded-lg flex items-center justify-center text-white/30 hover:text-white/60 hover:bg-white/5 transition-colors",children:r.jsx(zg,{})})]}),r.jsxs("div",{className:"flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-[200px] max-h-[50vh]",children:[k.map(H=>r.jsx("div",{className:`flex msg-enter ${H.sender==="user"?"justify-end":"justify-start"}`,children:r.jsx("div",{className:`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm ${H.sender==="bot"?"bg-emerald-500/10 border border-emerald-500/15 text-white/70 rounded-tl-md":"bg-white/[0.06] border border-white/[0.08] text-white rounded-tr-md"}`,children:H.text})},H.id)),r.jsx("div",{ref:O})]}),r.jsxs("div",{className:"border-t border-white/[0.06] px-4 py-3 flex gap-2",children:[r.jsx("input",{ref:L,type:"text",value:E,onChange:H=>_(H.target.value),onKeyDown:J,placeholder:"Digite sua mensagem...",className:"flex-1 bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/30 transition-colors"}),r.jsx("button",{onClick:X,disabled:!E.trim(),className:"w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center hover:bg-emerald-500/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0",children:r.jsx(iu,{})})]})]})})]})}function Og(){const[s]=Y0(),d=Pr(),{user:l,ndaAccepted:m,logout:c}=Lr(),p=s.get("admin")==="1",f=d.pathname==="/",g=d.pathname.startsWith("/cotacao"),v=d.pathname==="/icover",[y,k]=C.useState(!1);C.useEffect(()=>{function F(){k(!0)}function z(){k(!1)}return window.addEventListener("sentinel-started",F),window.addEventListener("sentinel-reset",z),()=>{window.removeEventListener("sentinel-started",F),window.removeEventListener("sentinel-reset",z)}},[]),C.useEffect(()=>{f||k(!1)},[f]);const j=g&&!l,E=g&&l&&!m,_=g||E;return v?r.jsx(Jc,{children:r.jsx(tr,{path:"/icover",element:r.jsx(uu,{})})}):r.jsxs("div",{className:"min-h-screen flex flex-col bg-navy",children:[r.jsx("header",{className:"sticky top-0 z-50 border-b border-white/[0.06] bg-navy/80 backdrop-blur-xl",children:r.jsx("div",{className:"max-w-7xl mx-auto px-3 sm:px-6 lg:px-8",children:r.jsxs("div",{className:"flex items-center justify-between h-14 sm:h-16",children:[r.jsxs(wi,{to:"/",className:"flex items-center gap-2 sm:gap-3 min-w-0 group",children:[r.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2 flex-shrink-0",children:[r.jsx("span",{className:"hidden sm:block text-[10px] text-white/30 font-medium tracking-wide uppercase",children:"Fairfield"}),r.jsx("span",{className:"hidden sm:block text-white/10 mx-1",children:"|"}),r.jsxs("div",{className:"relative",children:[r.jsx(no,{size:32}),r.jsx("div",{className:"absolute inset-0 bg-sentinel/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"})]}),r.jsx("h1",{className:"text-lg sm:text-xl font-bold tracking-tight",children:r.jsx("span",{className:"text-sentinel",children:"SENTINEL"})})]}),r.jsx("span",{className:"hidden lg:block text-[10px] text-white/25 border-l border-white/10 pl-3 leading-tight uppercase tracking-wider",children:"Seguro de Credito"})]}),r.jsxs("nav",{className:"flex items-center gap-1 sm:gap-2",children:[f&&!y&&r.jsx("a",{href:"#iniciar",onClick:F=>{F.preventDefault(),window.dispatchEvent(new CustomEvent("sentinel-iniciar"))},className:"px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all bg-gradient-to-r from-sentinel-dark to-sentinel text-navy-dark hover:shadow-lg hover:shadow-sentinel/20 hover:scale-[1.02] cursor-pointer",children:"Iniciar Cotacao"}),l&&!p&&r.jsxs("div",{className:"hidden sm:flex items-center gap-2 text-xs text-white/40 border-l border-white/10 pl-3 ml-1",children:[r.jsx("div",{className:"h-6 w-6 rounded-full bg-sentinel/15 border border-sentinel/25 flex items-center justify-center",children:r.jsx("span",{className:"text-[10px] font-bold text-sentinel",children:l.nome.charAt(0)})}),r.jsx("span",{className:"text-white/60 font-medium",children:l.nome.split(" ")[0]}),r.jsx("button",{onClick:c,className:"text-white/25 hover:text-rose-400 transition-colors",title:"Sair",children:r.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})})]}),p&&r.jsxs(r.Fragment,{children:[r.jsx(wi,{to:"/dashboard?admin=1",className:({isActive:F})=>`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${F?"bg-sentinel/15 text-sentinel border border-sentinel/25":"text-white/40 hover:text-white hover:bg-white/5"}`,children:"Dashboard"}),r.jsx(wi,{to:"/sla?admin=1",className:({isActive:F})=>`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${F?"bg-sentinel/15 text-sentinel border border-sentinel/25":"text-white/40 hover:text-white hover:bg-white/5"}`,children:"SLA"})]})]})]})})}),r.jsx("main",{className:`flex-1 ${_?"bg-white light-theme":"bg-grid"}`,children:j?r.jsx(ag,{}):E?r.jsx(og,{}):r.jsxs(Jc,{children:[r.jsx(tr,{path:"/",element:r.jsx(Kf,{})}),r.jsx(tr,{path:"/icover",element:r.jsx(uu,{})}),r.jsx(tr,{path:"/cotacao/interno",element:r.jsx(bg,{})}),r.jsx(tr,{path:"/cotacao/externo",element:r.jsx(Cg,{})}),r.jsx(tr,{path:"/dashboard",element:r.jsx(Ng,{})}),r.jsx(tr,{path:"/sla",element:r.jsx(Pg,{})})]})}),r.jsx("footer",{className:"py-8 border-t border-white/[0.06]",children:r.jsx("div",{className:"max-w-7xl mx-auto px-4",children:r.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[r.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[r.jsx("a",{href:"https://www.fairfield.com.br",target:"_blank",rel:"noopener noreferrer",className:"font-semibold text-white/60 hover:text-sentinel transition-colors text-sm",children:"Fairfield"}),r.jsx("span",{className:"text-white/10",children:"|"}),r.jsx("span",{className:"font-bold text-sentinel tracking-tight text-sm",children:"SENTINEL"}),r.jsx("span",{className:"text-white/25 text-xs",children:"Seguro de Credito"}),r.jsx("span",{className:"text-white/10",children:"·"}),r.jsx("span",{className:"font-bold text-white/60 tracking-tight text-sm",children:"COVENANT"}),r.jsx("span",{className:"text-white/25 text-xs",children:"Seguro Garantia"})]}),r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("span",{className:"text-[10px] text-white/20",children:"SUSEP 20.2036457.1"}),r.jsx("span",{className:"text-white/10",children:"|"}),r.jsxs("p",{className:"text-xs text-white/20",children:["© ",new Date().getFullYear()," Fairfield. Todos os direitos reservados."]})]})]})})})]})}function $g(){return r.jsx(G0,{children:r.jsxs(qf,{children:[r.jsx(Bf,{position:"top-right",toastOptions:{duration:4e3,style:{borderRadius:"12px",background:"#111833",color:"#e2e8f0",fontSize:"13px",border:"1px solid rgba(255,255,255,0.06)"}}}),r.jsx(Og,{})]})})}Qp.createRoot(document.getElementById("root")).render(r.jsx(pu.StrictMode,{children:r.jsx($g,{})}));

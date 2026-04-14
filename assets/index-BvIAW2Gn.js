function Tp(i,d){for(var l=0;l<d.length;l++){const m=d[l];if(typeof m!="string"&&!Array.isArray(m)){for(const c in m)if(c!=="default"&&!(c in i)){const p=Object.getOwnPropertyDescriptor(m,c);p&&Object.defineProperty(i,c,p.get?p:{enumerable:!0,get:()=>m[c]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))m(c);new MutationObserver(c=>{for(const p of c)if(p.type==="childList")for(const f of p.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&m(f)}).observe(document,{childList:!0,subtree:!0});function l(c){const p={};return c.integrity&&(p.integrity=c.integrity),c.referrerPolicy&&(p.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?p.credentials="include":c.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function m(c){if(c.ep)return;c.ep=!0;const p=l(c);fetch(c.href,p)}})();function mu(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var vn={exports:{}},Gr={},yn={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dc;function Op(){if(Dc)return ce;Dc=1;var i=Symbol.for("react.element"),d=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),C=Symbol.iterator;function P(N){return N===null||typeof N!="object"?null:(N=C&&N[C]||N["@@iterator"],typeof N=="function"?N:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,z={};function A(N,T,ae){this.props=N,this.context=T,this.refs=z,this.updater=ae||F}A.prototype.isReactComponent={},A.prototype.setState=function(N,T){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,T,"setState")},A.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function O(){}O.prototype=A.prototype;function V(N,T,ae){this.props=N,this.context=T,this.refs=z,this.updater=ae||F}var D=V.prototype=new O;D.constructor=V,_(D,A.prototype),D.isPureReactComponent=!0;var $=Array.isArray,Z=Object.prototype.hasOwnProperty,J={current:null},H={key:!0,ref:!0,__self:!0,__source:!0};function ne(N,T,ae){var re,le={},de=null,ve=null;if(T!=null)for(re in T.ref!==void 0&&(ve=T.ref),T.key!==void 0&&(de=""+T.key),T)Z.call(T,re)&&!H.hasOwnProperty(re)&&(le[re]=T[re]);var he=arguments.length-2;if(he===1)le.children=ae;else if(1<he){for(var Se=Array(he),oa=0;oa<he;oa++)Se[oa]=arguments[oa+2];le.children=Se}if(N&&N.defaultProps)for(re in he=N.defaultProps,he)le[re]===void 0&&(le[re]=he[re]);return{$$typeof:i,type:N,key:de,ref:ve,props:le,_owner:J.current}}function ue(N,T){return{$$typeof:i,type:N.type,key:T,ref:N.ref,props:N.props,_owner:N._owner}}function ge(N){return typeof N=="object"&&N!==null&&N.$$typeof===i}function $e(N){var T={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ae){return T[ae]})}var Fe=/\/+/g;function Pe(N,T){return typeof N=="object"&&N!==null&&N.key!=null?$e(""+N.key):T.toString(36)}function Be(N,T,ae,re,le){var de=typeof N;(de==="undefined"||de==="boolean")&&(N=null);var ve=!1;if(N===null)ve=!0;else switch(de){case"string":case"number":ve=!0;break;case"object":switch(N.$$typeof){case i:case d:ve=!0}}if(ve)return ve=N,le=le(ve),N=re===""?"."+Pe(ve,0):re,$(le)?(ae="",N!=null&&(ae=N.replace(Fe,"$&/")+"/"),Be(le,T,ae,"",function(oa){return oa})):le!=null&&(ge(le)&&(le=ue(le,ae+(!le.key||ve&&ve.key===le.key?"":(""+le.key).replace(Fe,"$&/")+"/")+N)),T.push(le)),1;if(ve=0,re=re===""?".":re+":",$(N))for(var he=0;he<N.length;he++){de=N[he];var Se=re+Pe(de,he);ve+=Be(de,T,ae,Se,le)}else if(Se=P(N),typeof Se=="function")for(N=Se.call(N),he=0;!(de=N.next()).done;)de=de.value,Se=re+Pe(de,he++),ve+=Be(de,T,ae,Se,le);else if(de==="object")throw T=String(N),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.");return ve}function h(N,T,ae){if(N==null)return N;var re=[],le=0;return Be(N,re,"","",function(de){return T.call(ae,de,le++)}),re}function I(N){if(N._status===-1){var T=N._result;T=T(),T.then(function(ae){(N._status===0||N._status===-1)&&(N._status=1,N._result=ae)},function(ae){(N._status===0||N._status===-1)&&(N._status=2,N._result=ae)}),N._status===-1&&(N._status=0,N._result=T)}if(N._status===1)return N._result.default;throw N._result}var w={current:null},M={transition:null},Q={ReactCurrentDispatcher:w,ReactCurrentBatchConfig:M,ReactCurrentOwner:J};function W(){throw Error("act(...) is not supported in production builds of React.")}return ce.Children={map:h,forEach:function(N,T,ae){h(N,function(){T.apply(this,arguments)},ae)},count:function(N){var T=0;return h(N,function(){T++}),T},toArray:function(N){return h(N,function(T){return T})||[]},only:function(N){if(!ge(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ce.Component=A,ce.Fragment=l,ce.Profiler=c,ce.PureComponent=V,ce.StrictMode=m,ce.Suspense=v,ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,ce.act=W,ce.cloneElement=function(N,T,ae){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var re=_({},N.props),le=N.key,de=N.ref,ve=N._owner;if(T!=null){if(T.ref!==void 0&&(de=T.ref,ve=J.current),T.key!==void 0&&(le=""+T.key),N.type&&N.type.defaultProps)var he=N.type.defaultProps;for(Se in T)Z.call(T,Se)&&!H.hasOwnProperty(Se)&&(re[Se]=T[Se]===void 0&&he!==void 0?he[Se]:T[Se])}var Se=arguments.length-2;if(Se===1)re.children=ae;else if(1<Se){he=Array(Se);for(var oa=0;oa<Se;oa++)he[oa]=arguments[oa+2];re.children=he}return{$$typeof:i,type:N.type,key:le,ref:de,props:re,_owner:ve}},ce.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:p,_context:N},N.Consumer=N},ce.createElement=ne,ce.createFactory=function(N){var T=ne.bind(null,N);return T.type=N,T},ce.createRef=function(){return{current:null}},ce.forwardRef=function(N){return{$$typeof:g,render:N}},ce.isValidElement=ge,ce.lazy=function(N){return{$$typeof:k,_payload:{_status:-1,_result:N},_init:I}},ce.memo=function(N,T){return{$$typeof:y,type:N,compare:T===void 0?null:T}},ce.startTransition=function(N){var T=M.transition;M.transition={};try{N()}finally{M.transition=T}},ce.unstable_act=W,ce.useCallback=function(N,T){return w.current.useCallback(N,T)},ce.useContext=function(N){return w.current.useContext(N)},ce.useDebugValue=function(){},ce.useDeferredValue=function(N){return w.current.useDeferredValue(N)},ce.useEffect=function(N,T){return w.current.useEffect(N,T)},ce.useId=function(){return w.current.useId()},ce.useImperativeHandle=function(N,T,ae){return w.current.useImperativeHandle(N,T,ae)},ce.useInsertionEffect=function(N,T){return w.current.useInsertionEffect(N,T)},ce.useLayoutEffect=function(N,T){return w.current.useLayoutEffect(N,T)},ce.useMemo=function(N,T){return w.current.useMemo(N,T)},ce.useReducer=function(N,T,ae){return w.current.useReducer(N,T,ae)},ce.useRef=function(N){return w.current.useRef(N)},ce.useState=function(N){return w.current.useState(N)},ce.useSyncExternalStore=function(N,T,ae){return w.current.useSyncExternalStore(N,T,ae)},ce.useTransition=function(){return w.current.useTransition()},ce.version="18.3.1",ce}var Ic;function _n(){return Ic||(Ic=1,yn.exports=Op()),yn.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fc;function $p(){if(Fc)return Gr;Fc=1;var i=_n(),d=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function f(g,v,y){var k,C={},P=null,F=null;y!==void 0&&(P=""+y),v.key!==void 0&&(P=""+v.key),v.ref!==void 0&&(F=v.ref);for(k in v)m.call(v,k)&&!p.hasOwnProperty(k)&&(C[k]=v[k]);if(g&&g.defaultProps)for(k in v=g.defaultProps,v)C[k]===void 0&&(C[k]=v[k]);return{$$typeof:d,type:g,key:P,ref:F,props:C,_owner:c.current}}return Gr.Fragment=l,Gr.jsx=f,Gr.jsxs=f,Gr}var _c;function Bp(){return _c||(_c=1,vn.exports=$p()),vn.exports}var o=Bp(),S=_n();const pu=mu(S),qp=Tp({__proto__:null,default:pu},[S]);var ns={},bn={exports:{}},aa={},Cn={exports:{}},Sn={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tc;function Vp(){return Tc||(Tc=1,(function(i){function d(M,Q){var W=M.length;M.push(Q);e:for(;0<W;){var N=W-1>>>1,T=M[N];if(0<c(T,Q))M[N]=Q,M[W]=T,W=N;else break e}}function l(M){return M.length===0?null:M[0]}function m(M){if(M.length===0)return null;var Q=M[0],W=M.pop();if(W!==Q){M[0]=W;e:for(var N=0,T=M.length,ae=T>>>1;N<ae;){var re=2*(N+1)-1,le=M[re],de=re+1,ve=M[de];if(0>c(le,W))de<T&&0>c(ve,le)?(M[N]=ve,M[de]=W,N=de):(M[N]=le,M[re]=W,N=re);else if(de<T&&0>c(ve,W))M[N]=ve,M[de]=W,N=de;else break e}}return Q}function c(M,Q){var W=M.sortIndex-Q.sortIndex;return W!==0?W:M.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;i.unstable_now=function(){return p.now()}}else{var f=Date,g=f.now();i.unstable_now=function(){return f.now()-g}}var v=[],y=[],k=1,C=null,P=3,F=!1,_=!1,z=!1,A=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(M){for(var Q=l(y);Q!==null;){if(Q.callback===null)m(y);else if(Q.startTime<=M)m(y),Q.sortIndex=Q.expirationTime,d(v,Q);else break;Q=l(y)}}function $(M){if(z=!1,D(M),!_)if(l(v)!==null)_=!0,I(Z);else{var Q=l(y);Q!==null&&w($,Q.startTime-M)}}function Z(M,Q){_=!1,z&&(z=!1,O(ne),ne=-1),F=!0;var W=P;try{for(D(Q),C=l(v);C!==null&&(!(C.expirationTime>Q)||M&&!$e());){var N=C.callback;if(typeof N=="function"){C.callback=null,P=C.priorityLevel;var T=N(C.expirationTime<=Q);Q=i.unstable_now(),typeof T=="function"?C.callback=T:C===l(v)&&m(v),D(Q)}else m(v);C=l(v)}if(C!==null)var ae=!0;else{var re=l(y);re!==null&&w($,re.startTime-Q),ae=!1}return ae}finally{C=null,P=W,F=!1}}var J=!1,H=null,ne=-1,ue=5,ge=-1;function $e(){return!(i.unstable_now()-ge<ue)}function Fe(){if(H!==null){var M=i.unstable_now();ge=M;var Q=!0;try{Q=H(!0,M)}finally{Q?Pe():(J=!1,H=null)}}else J=!1}var Pe;if(typeof V=="function")Pe=function(){V(Fe)};else if(typeof MessageChannel<"u"){var Be=new MessageChannel,h=Be.port2;Be.port1.onmessage=Fe,Pe=function(){h.postMessage(null)}}else Pe=function(){A(Fe,0)};function I(M){H=M,J||(J=!0,Pe())}function w(M,Q){ne=A(function(){M(i.unstable_now())},Q)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(M){M.callback=null},i.unstable_continueExecution=function(){_||F||(_=!0,I(Z))},i.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ue=0<M?Math.floor(1e3/M):5},i.unstable_getCurrentPriorityLevel=function(){return P},i.unstable_getFirstCallbackNode=function(){return l(v)},i.unstable_next=function(M){switch(P){case 1:case 2:case 3:var Q=3;break;default:Q=P}var W=P;P=Q;try{return M()}finally{P=W}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(M,Q){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var W=P;P=M;try{return Q()}finally{P=W}},i.unstable_scheduleCallback=function(M,Q,W){var N=i.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?N+W:N):W=N,M){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=W+T,M={id:k++,callback:Q,priorityLevel:M,startTime:W,expirationTime:T,sortIndex:-1},W>N?(M.sortIndex=W,d(y,M),l(v)===null&&M===l(y)&&(z?(O(ne),ne=-1):z=!0,w($,W-N))):(M.sortIndex=T,d(v,M),_||F||(_=!0,I(Z))),M},i.unstable_shouldYield=$e,i.unstable_wrapCallback=function(M){var Q=P;return function(){var W=P;P=Q;try{return M.apply(this,arguments)}finally{P=W}}}})(Sn)),Sn}var Oc;function Up(){return Oc||(Oc=1,Cn.exports=Vp()),Cn.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $c;function Wp(){if($c)return aa;$c=1;var i=_n(),d=Up();function l(e){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m=new Set,c={};function p(e,a){f(e,a),f(e+"Capture",a)}function f(e,a){for(c[e]=a,e=0;e<a.length;e++)m.add(a[e])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),v=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,k={},C={};function P(e){return v.call(C,e)?!0:v.call(k,e)?!1:y.test(e)?C[e]=!0:(k[e]=!0,!1)}function F(e,a,r,t){if(r!==null&&r.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return t?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _(e,a,r,t){if(a===null||typeof a>"u"||F(e,a,r,t))return!0;if(t)return!1;if(r!==null)switch(r.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function z(e,a,r,t,s,n,u){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=t,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=e,this.type=a,this.sanitizeURL=n,this.removeEmptyString=u}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){A[e]=new z(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var a=e[0];A[a]=new z(a,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){A[e]=new z(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){A[e]=new z(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){A[e]=new z(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){A[e]=new z(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){A[e]=new z(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){A[e]=new z(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){A[e]=new z(e,5,!1,e.toLowerCase(),null,!1,!1)});var O=/[\-:]([a-z])/g;function V(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var a=e.replace(O,V);A[a]=new z(a,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var a=e.replace(O,V);A[a]=new z(a,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var a=e.replace(O,V);A[a]=new z(a,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){A[e]=new z(e,1,!1,e.toLowerCase(),null,!1,!1)}),A.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){A[e]=new z(e,1,!1,e.toLowerCase(),null,!0,!0)});function D(e,a,r,t){var s=A.hasOwnProperty(a)?A[a]:null;(s!==null?s.type!==0:t||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(_(a,r,s,t)&&(r=null),t||s===null?P(a)&&(r===null?e.removeAttribute(a):e.setAttribute(a,""+r)):s.mustUseProperty?e[s.propertyName]=r===null?s.type===3?!1:"":r:(a=s.attributeName,t=s.attributeNamespace,r===null?e.removeAttribute(a):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,t?e.setAttributeNS(t,a,r):e.setAttribute(a,r))))}var $=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Z=Symbol.for("react.element"),J=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),ne=Symbol.for("react.strict_mode"),ue=Symbol.for("react.profiler"),ge=Symbol.for("react.provider"),$e=Symbol.for("react.context"),Fe=Symbol.for("react.forward_ref"),Pe=Symbol.for("react.suspense"),Be=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),w=Symbol.for("react.offscreen"),M=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,N;function T(e){if(N===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);N=a&&a[1]||""}return`
`+N+e}var ae=!1;function re(e,a){if(!e||ae)return"";ae=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(R){var t=R}Reflect.construct(e,[],a)}else{try{a.call()}catch(R){t=R}e.call(a.prototype)}else{try{throw Error()}catch(R){t=R}e()}}catch(R){if(R&&t&&typeof R.stack=="string"){for(var s=R.stack.split(`
`),n=t.stack.split(`
`),u=s.length-1,x=n.length-1;1<=u&&0<=x&&s[u]!==n[x];)x--;for(;1<=u&&0<=x;u--,x--)if(s[u]!==n[x]){if(u!==1||x!==1)do if(u--,x--,0>x||s[u]!==n[x]){var b=`
`+s[u].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=u&&0<=x);break}}}finally{ae=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?T(e):""}function le(e){switch(e.tag){case 5:return T(e.type);case 16:return T("Lazy");case 13:return T("Suspense");case 19:return T("SuspenseList");case 0:case 2:case 15:return e=re(e.type,!1),e;case 11:return e=re(e.type.render,!1),e;case 1:return e=re(e.type,!0),e;default:return""}}function de(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case J:return"Portal";case ue:return"Profiler";case ne:return"StrictMode";case Pe:return"Suspense";case Be:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $e:return(e.displayName||"Context")+".Consumer";case ge:return(e._context.displayName||"Context")+".Provider";case Fe:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case h:return a=e.displayName||null,a!==null?a:de(e.type)||"Memo";case I:a=e._payload,e=e._init;try{return de(e(a))}catch{}}return null}function ve(e){var a=e.type;switch(e.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=a.render,e=e.displayName||e.name||"",a.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(a);case 8:return a===ne?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function he(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Se(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function oa(e){var a=Se(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,a),t=""+e[a];if(!e.hasOwnProperty(a)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,n=r.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return s.call(this)},set:function(u){t=""+u,n.call(this,u)}}),Object.defineProperty(e,a,{enumerable:r.enumerable}),{getValue:function(){return t},setValue:function(u){t=""+u},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Xr(e){e._valueTracker||(e._valueTracker=oa(e))}function $n(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var r=a.getValue(),t="";return e&&(t=Se(e)?e.checked?"true":"false":e.value),e=t,e!==r?(a.setValue(e),!0):!1}function Yr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ws(e,a){var r=a.checked;return W({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Bn(e,a){var r=a.defaultValue==null?"":a.defaultValue,t=a.checked!=null?a.checked:a.defaultChecked;r=he(a.value!=null?a.value:r),e._wrapperState={initialChecked:t,initialValue:r,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function qn(e,a){a=a.checked,a!=null&&D(e,"checked",a,!1)}function Ns(e,a){qn(e,a);var r=he(a.value),t=a.type;if(r!=null)t==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(t==="submit"||t==="reset"){e.removeAttribute("value");return}a.hasOwnProperty("value")?ks(e,a.type,r):a.hasOwnProperty("defaultValue")&&ks(e,a.type,he(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(e.defaultChecked=!!a.defaultChecked)}function Vn(e,a,r){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var t=a.type;if(!(t!=="submit"&&t!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+e._wrapperState.initialValue,r||a===e.value||(e.value=a),e.defaultValue=a}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function ks(e,a,r){(a!=="number"||Yr(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var nr=Array.isArray;function Ro(e,a,r,t){if(e=e.options,a){a={};for(var s=0;s<r.length;s++)a["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=a.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&t&&(e[r].defaultSelected=!0)}else{for(r=""+he(r),a=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,t&&(e[s].defaultSelected=!0);return}a!==null||e[s].disabled||(a=e[s])}a!==null&&(a.selected=!0)}}function Ps(e,a){if(a.dangerouslySetInnerHTML!=null)throw Error(l(91));return W({},a,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Un(e,a){var r=a.value;if(r==null){if(r=a.children,a=a.defaultValue,r!=null){if(a!=null)throw Error(l(92));if(nr(r)){if(1<r.length)throw Error(l(93));r=r[0]}a=r}a==null&&(a=""),r=a}e._wrapperState={initialValue:he(r)}}function Wn(e,a){var r=he(a.value),t=he(a.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),a.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),t!=null&&(e.defaultValue=""+t)}function Gn(e){var a=e.textContent;a===e._wrapperState.initialValue&&a!==""&&a!==null&&(e.value=a)}function Hn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Es(e,a){return e==null||e==="http://www.w3.org/1999/xhtml"?Hn(a):e==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zr,Qn=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,r,t,s){MSApp.execUnsafeLocalFunction(function(){return e(a,r,t,s)})}:e})(function(e,a){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=a;else{for(Zr=Zr||document.createElement("div"),Zr.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=Zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;a.firstChild;)e.appendChild(a.firstChild)}});function lr(e,a){if(a){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=a;return}}e.textContent=a}var dr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qu=["Webkit","ms","Moz","O"];Object.keys(dr).forEach(function(e){qu.forEach(function(a){a=a+e.charAt(0).toUpperCase()+e.substring(1),dr[a]=dr[e]})});function Jn(e,a,r){return a==null||typeof a=="boolean"||a===""?"":r||typeof a!="number"||a===0||dr.hasOwnProperty(e)&&dr[e]?(""+a).trim():a+"px"}function Kn(e,a){e=e.style;for(var r in a)if(a.hasOwnProperty(r)){var t=r.indexOf("--")===0,s=Jn(r,a[r],t);r==="float"&&(r="cssFloat"),t?e.setProperty(r,s):e[r]=s}}var Vu=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function As(e,a){if(a){if(Vu[e]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(l(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(l(61))}if(a.style!=null&&typeof a.style!="object")throw Error(l(62))}}function Ls(e,a){if(e.indexOf("-")===-1)return typeof a.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rs=null;function zs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ms=null,zo=null,Mo=null;function Xn(e){if(e=Rr(e)){if(typeof Ms!="function")throw Error(l(280));var a=e.stateNode;a&&(a=St(a),Ms(e.stateNode,e.type,a))}}function Yn(e){zo?Mo?Mo.push(e):Mo=[e]:zo=e}function Zn(){if(zo){var e=zo,a=Mo;if(Mo=zo=null,Xn(e),a)for(e=0;e<a.length;e++)Xn(a[e])}}function el(e,a){return e(a)}function al(){}var Ds=!1;function ol(e,a,r){if(Ds)return e(a,r);Ds=!0;try{return el(e,a,r)}finally{Ds=!1,(zo!==null||Mo!==null)&&(al(),Zn())}}function cr(e,a){var r=e.stateNode;if(r===null)return null;var t=St(r);if(t===null)return null;r=t[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(l(231,a,typeof r));return r}var Is=!1;if(g)try{var ur={};Object.defineProperty(ur,"passive",{get:function(){Is=!0}}),window.addEventListener("test",ur,ur),window.removeEventListener("test",ur,ur)}catch{Is=!1}function Uu(e,a,r,t,s,n,u,x,b){var R=Array.prototype.slice.call(arguments,3);try{a.apply(r,R)}catch(q){this.onError(q)}}var mr=!1,et=null,at=!1,Fs=null,Wu={onError:function(e){mr=!0,et=e}};function Gu(e,a,r,t,s,n,u,x,b){mr=!1,et=null,Uu.apply(Wu,arguments)}function Hu(e,a,r,t,s,n,u,x,b){if(Gu.apply(this,arguments),mr){if(mr){var R=et;mr=!1,et=null}else throw Error(l(198));at||(at=!0,Fs=R)}}function uo(e){var a=e,r=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(r=a.return),e=a.return;while(e)}return a.tag===3?r:null}function rl(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function tl(e){if(uo(e)!==e)throw Error(l(188))}function Qu(e){var a=e.alternate;if(!a){if(a=uo(e),a===null)throw Error(l(188));return a!==e?null:e}for(var r=e,t=a;;){var s=r.return;if(s===null)break;var n=s.alternate;if(n===null){if(t=s.return,t!==null){r=t;continue}break}if(s.child===n.child){for(n=s.child;n;){if(n===r)return tl(s),e;if(n===t)return tl(s),a;n=n.sibling}throw Error(l(188))}if(r.return!==t.return)r=s,t=n;else{for(var u=!1,x=s.child;x;){if(x===r){u=!0,r=s,t=n;break}if(x===t){u=!0,t=s,r=n;break}x=x.sibling}if(!u){for(x=n.child;x;){if(x===r){u=!0,r=n,t=s;break}if(x===t){u=!0,t=n,r=s;break}x=x.sibling}if(!u)throw Error(l(189))}}if(r.alternate!==t)throw Error(l(190))}if(r.tag!==3)throw Error(l(188));return r.stateNode.current===r?e:a}function sl(e){return e=Qu(e),e!==null?il(e):null}function il(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var a=il(e);if(a!==null)return a;e=e.sibling}return null}var nl=d.unstable_scheduleCallback,ll=d.unstable_cancelCallback,Ju=d.unstable_shouldYield,Ku=d.unstable_requestPaint,Le=d.unstable_now,Xu=d.unstable_getCurrentPriorityLevel,_s=d.unstable_ImmediatePriority,dl=d.unstable_UserBlockingPriority,ot=d.unstable_NormalPriority,Yu=d.unstable_LowPriority,cl=d.unstable_IdlePriority,rt=null,ja=null;function Zu(e){if(ja&&typeof ja.onCommitFiberRoot=="function")try{ja.onCommitFiberRoot(rt,e,void 0,(e.current.flags&128)===128)}catch{}}var ga=Math.clz32?Math.clz32:om,em=Math.log,am=Math.LN2;function om(e){return e>>>=0,e===0?32:31-(em(e)/am|0)|0}var tt=64,st=4194304;function pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function it(e,a){var r=e.pendingLanes;if(r===0)return 0;var t=0,s=e.suspendedLanes,n=e.pingedLanes,u=r&268435455;if(u!==0){var x=u&~s;x!==0?t=pr(x):(n&=u,n!==0&&(t=pr(n)))}else u=r&~s,u!==0?t=pr(u):n!==0&&(t=pr(n));if(t===0)return 0;if(a!==0&&a!==t&&(a&s)===0&&(s=t&-t,n=a&-a,s>=n||s===16&&(n&4194240)!==0))return a;if((t&4)!==0&&(t|=r&16),a=e.entangledLanes,a!==0)for(e=e.entanglements,a&=t;0<a;)r=31-ga(a),s=1<<r,t|=e[r],a&=~s;return t}function rm(e,a){switch(e){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tm(e,a){for(var r=e.suspendedLanes,t=e.pingedLanes,s=e.expirationTimes,n=e.pendingLanes;0<n;){var u=31-ga(n),x=1<<u,b=s[u];b===-1?((x&r)===0||(x&t)!==0)&&(s[u]=rm(x,a)):b<=a&&(e.expiredLanes|=x),n&=~x}}function Ts(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ul(){var e=tt;return tt<<=1,(tt&4194240)===0&&(tt=64),e}function Os(e){for(var a=[],r=0;31>r;r++)a.push(e);return a}function fr(e,a,r){e.pendingLanes|=a,a!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,a=31-ga(a),e[a]=r}function sm(e,a){var r=e.pendingLanes&~a;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=a,e.mutableReadLanes&=a,e.entangledLanes&=a,a=e.entanglements;var t=e.eventTimes;for(e=e.expirationTimes;0<r;){var s=31-ga(r),n=1<<s;a[s]=0,t[s]=-1,e[s]=-1,r&=~n}}function $s(e,a){var r=e.entangledLanes|=a;for(e=e.entanglements;r;){var t=31-ga(r),s=1<<t;s&a|e[t]&a&&(e[t]|=a),r&=~s}}var xe=0;function ml(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var pl,Bs,fl,gl,hl,qs=!1,nt=[],Oa=null,$a=null,Ba=null,gr=new Map,hr=new Map,qa=[],im="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xl(e,a){switch(e){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":gr.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":hr.delete(a.pointerId)}}function xr(e,a,r,t,s,n){return e===null||e.nativeEvent!==n?(e={blockedOn:a,domEventName:r,eventSystemFlags:t,nativeEvent:n,targetContainers:[s]},a!==null&&(a=Rr(a),a!==null&&Bs(a)),e):(e.eventSystemFlags|=t,a=e.targetContainers,s!==null&&a.indexOf(s)===-1&&a.push(s),e)}function nm(e,a,r,t,s){switch(a){case"focusin":return Oa=xr(Oa,e,a,r,t,s),!0;case"dragenter":return $a=xr($a,e,a,r,t,s),!0;case"mouseover":return Ba=xr(Ba,e,a,r,t,s),!0;case"pointerover":var n=s.pointerId;return gr.set(n,xr(gr.get(n)||null,e,a,r,t,s)),!0;case"gotpointercapture":return n=s.pointerId,hr.set(n,xr(hr.get(n)||null,e,a,r,t,s)),!0}return!1}function vl(e){var a=mo(e.target);if(a!==null){var r=uo(a);if(r!==null){if(a=r.tag,a===13){if(a=rl(r),a!==null){e.blockedOn=a,hl(e.priority,function(){fl(r)});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lt(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var r=Us(e.domEventName,e.eventSystemFlags,a[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var t=new r.constructor(r.type,r);Rs=t,r.target.dispatchEvent(t),Rs=null}else return a=Rr(r),a!==null&&Bs(a),e.blockedOn=r,!1;a.shift()}return!0}function yl(e,a,r){lt(e)&&r.delete(a)}function lm(){qs=!1,Oa!==null&&lt(Oa)&&(Oa=null),$a!==null&&lt($a)&&($a=null),Ba!==null&&lt(Ba)&&(Ba=null),gr.forEach(yl),hr.forEach(yl)}function vr(e,a){e.blockedOn===a&&(e.blockedOn=null,qs||(qs=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,lm)))}function yr(e){function a(s){return vr(s,e)}if(0<nt.length){vr(nt[0],e);for(var r=1;r<nt.length;r++){var t=nt[r];t.blockedOn===e&&(t.blockedOn=null)}}for(Oa!==null&&vr(Oa,e),$a!==null&&vr($a,e),Ba!==null&&vr(Ba,e),gr.forEach(a),hr.forEach(a),r=0;r<qa.length;r++)t=qa[r],t.blockedOn===e&&(t.blockedOn=null);for(;0<qa.length&&(r=qa[0],r.blockedOn===null);)vl(r),r.blockedOn===null&&qa.shift()}var Do=$.ReactCurrentBatchConfig,dt=!0;function dm(e,a,r,t){var s=xe,n=Do.transition;Do.transition=null;try{xe=1,Vs(e,a,r,t)}finally{xe=s,Do.transition=n}}function cm(e,a,r,t){var s=xe,n=Do.transition;Do.transition=null;try{xe=4,Vs(e,a,r,t)}finally{xe=s,Do.transition=n}}function Vs(e,a,r,t){if(dt){var s=Us(e,a,r,t);if(s===null)ni(e,a,t,ct,r),xl(e,t);else if(nm(s,e,a,r,t))t.stopPropagation();else if(xl(e,t),a&4&&-1<im.indexOf(e)){for(;s!==null;){var n=Rr(s);if(n!==null&&pl(n),n=Us(e,a,r,t),n===null&&ni(e,a,t,ct,r),n===s)break;s=n}s!==null&&t.stopPropagation()}else ni(e,a,t,null,r)}}var ct=null;function Us(e,a,r,t){if(ct=null,e=zs(t),e=mo(e),e!==null)if(a=uo(e),a===null)e=null;else if(r=a.tag,r===13){if(e=rl(a),e!==null)return e;e=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null);return ct=e,null}function bl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xu()){case _s:return 1;case dl:return 4;case ot:case Yu:return 16;case cl:return 536870912;default:return 16}default:return 16}}var Va=null,Ws=null,ut=null;function Cl(){if(ut)return ut;var e,a=Ws,r=a.length,t,s="value"in Va?Va.value:Va.textContent,n=s.length;for(e=0;e<r&&a[e]===s[e];e++);var u=r-e;for(t=1;t<=u&&a[r-t]===s[n-t];t++);return ut=s.slice(e,1<t?1-t:void 0)}function mt(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function pt(){return!0}function Sl(){return!1}function ra(e){function a(r,t,s,n,u){this._reactName=r,this._targetInst=s,this.type=t,this.nativeEvent=n,this.target=u,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(r=e[x],this[x]=r?r(n):n[x]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?pt:Sl,this.isPropagationStopped=Sl,this}return W(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=pt)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=pt)},persist:function(){},isPersistent:pt}),a}var Io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gs=ra(Io),br=W({},Io,{view:0,detail:0}),um=ra(br),Hs,Qs,Cr,ft=W({},br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ks,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Cr&&(Cr&&e.type==="mousemove"?(Hs=e.screenX-Cr.screenX,Qs=e.screenY-Cr.screenY):Qs=Hs=0,Cr=e),Hs)},movementY:function(e){return"movementY"in e?e.movementY:Qs}}),jl=ra(ft),mm=W({},ft,{dataTransfer:0}),pm=ra(mm),fm=W({},br,{relatedTarget:0}),Js=ra(fm),gm=W({},Io,{animationName:0,elapsedTime:0,pseudoElement:0}),hm=ra(gm),xm=W({},Io,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vm=ra(xm),ym=W({},Io,{data:0}),wl=ra(ym),bm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jm(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Sm[e])?!!a[e]:!1}function Ks(){return jm}var wm=W({},br,{key:function(e){if(e.key){var a=bm[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=mt(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ks,charCode:function(e){return e.type==="keypress"?mt(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mt(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nm=ra(wm),km=W({},ft,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nl=ra(km),Pm=W({},br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ks}),Em=ra(Pm),Am=W({},Io,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lm=ra(Am),Rm=W({},ft,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zm=ra(Rm),Mm=[9,13,27,32],Xs=g&&"CompositionEvent"in window,Sr=null;g&&"documentMode"in document&&(Sr=document.documentMode);var Dm=g&&"TextEvent"in window&&!Sr,kl=g&&(!Xs||Sr&&8<Sr&&11>=Sr),Pl=" ",El=!1;function Al(e,a){switch(e){case"keyup":return Mm.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ll(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fo=!1;function Im(e,a){switch(e){case"compositionend":return Ll(a);case"keypress":return a.which!==32?null:(El=!0,Pl);case"textInput":return e=a.data,e===Pl&&El?null:e;default:return null}}function Fm(e,a){if(Fo)return e==="compositionend"||!Xs&&Al(e,a)?(e=Cl(),ut=Ws=Va=null,Fo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return kl&&a.locale!=="ko"?null:a.data;default:return null}}var _m={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rl(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!_m[e.type]:a==="textarea"}function zl(e,a,r,t){Yn(t),a=yt(a,"onChange"),0<a.length&&(r=new Gs("onChange","change",null,r,t),e.push({event:r,listeners:a}))}var jr=null,wr=null;function Tm(e){Kl(e,0)}function gt(e){var a=Bo(e);if($n(a))return e}function Om(e,a){if(e==="change")return a}var Ml=!1;if(g){var Ys;if(g){var Zs="oninput"in document;if(!Zs){var Dl=document.createElement("div");Dl.setAttribute("oninput","return;"),Zs=typeof Dl.oninput=="function"}Ys=Zs}else Ys=!1;Ml=Ys&&(!document.documentMode||9<document.documentMode)}function Il(){jr&&(jr.detachEvent("onpropertychange",Fl),wr=jr=null)}function Fl(e){if(e.propertyName==="value"&&gt(wr)){var a=[];zl(a,wr,e,zs(e)),ol(Tm,a)}}function $m(e,a,r){e==="focusin"?(Il(),jr=a,wr=r,jr.attachEvent("onpropertychange",Fl)):e==="focusout"&&Il()}function Bm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gt(wr)}function qm(e,a){if(e==="click")return gt(a)}function Vm(e,a){if(e==="input"||e==="change")return gt(a)}function Um(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ha=typeof Object.is=="function"?Object.is:Um;function Nr(e,a){if(ha(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var r=Object.keys(e),t=Object.keys(a);if(r.length!==t.length)return!1;for(t=0;t<r.length;t++){var s=r[t];if(!v.call(a,s)||!ha(e[s],a[s]))return!1}return!0}function _l(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tl(e,a){var r=_l(e);e=0;for(var t;r;){if(r.nodeType===3){if(t=e+r.textContent.length,e<=a&&t>=a)return{node:r,offset:a-e};e=t}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=_l(r)}}function Ol(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Ol(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function $l(){for(var e=window,a=Yr();a instanceof e.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)e=a.contentWindow;else break;a=Yr(e.document)}return a}function ei(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}function Wm(e){var a=$l(),r=e.focusedElem,t=e.selectionRange;if(a!==r&&r&&r.ownerDocument&&Ol(r.ownerDocument.documentElement,r)){if(t!==null&&ei(r)){if(a=t.start,e=t.end,e===void 0&&(e=a),"selectionStart"in r)r.selectionStart=a,r.selectionEnd=Math.min(e,r.value.length);else if(e=(a=r.ownerDocument||document)&&a.defaultView||window,e.getSelection){e=e.getSelection();var s=r.textContent.length,n=Math.min(t.start,s);t=t.end===void 0?n:Math.min(t.end,s),!e.extend&&n>t&&(s=t,t=n,n=s),s=Tl(r,n);var u=Tl(r,t);s&&u&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(a=a.createRange(),a.setStart(s.node,s.offset),e.removeAllRanges(),n>t?(e.addRange(a),e.extend(u.node,u.offset)):(a.setEnd(u.node,u.offset),e.addRange(a)))}}for(a=[],e=r;e=e.parentNode;)e.nodeType===1&&a.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<a.length;r++)e=a[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gm=g&&"documentMode"in document&&11>=document.documentMode,_o=null,ai=null,kr=null,oi=!1;function Bl(e,a,r){var t=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;oi||_o==null||_o!==Yr(t)||(t=_o,"selectionStart"in t&&ei(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),kr&&Nr(kr,t)||(kr=t,t=yt(ai,"onSelect"),0<t.length&&(a=new Gs("onSelect","select",null,a,r),e.push({event:a,listeners:t}),a.target=_o)))}function ht(e,a){var r={};return r[e.toLowerCase()]=a.toLowerCase(),r["Webkit"+e]="webkit"+a,r["Moz"+e]="moz"+a,r}var To={animationend:ht("Animation","AnimationEnd"),animationiteration:ht("Animation","AnimationIteration"),animationstart:ht("Animation","AnimationStart"),transitionend:ht("Transition","TransitionEnd")},ri={},ql={};g&&(ql=document.createElement("div").style,"AnimationEvent"in window||(delete To.animationend.animation,delete To.animationiteration.animation,delete To.animationstart.animation),"TransitionEvent"in window||delete To.transitionend.transition);function xt(e){if(ri[e])return ri[e];if(!To[e])return e;var a=To[e],r;for(r in a)if(a.hasOwnProperty(r)&&r in ql)return ri[e]=a[r];return e}var Vl=xt("animationend"),Ul=xt("animationiteration"),Wl=xt("animationstart"),Gl=xt("transitionend"),Hl=new Map,Ql="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ua(e,a){Hl.set(e,a),p(a,[e])}for(var ti=0;ti<Ql.length;ti++){var si=Ql[ti],Hm=si.toLowerCase(),Qm=si[0].toUpperCase()+si.slice(1);Ua(Hm,"on"+Qm)}Ua(Vl,"onAnimationEnd"),Ua(Ul,"onAnimationIteration"),Ua(Wl,"onAnimationStart"),Ua("dblclick","onDoubleClick"),Ua("focusin","onFocus"),Ua("focusout","onBlur"),Ua(Gl,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pr));function Jl(e,a,r){var t=e.type||"unknown-event";e.currentTarget=r,Hu(t,a,void 0,e),e.currentTarget=null}function Kl(e,a){a=(a&4)!==0;for(var r=0;r<e.length;r++){var t=e[r],s=t.event;t=t.listeners;e:{var n=void 0;if(a)for(var u=t.length-1;0<=u;u--){var x=t[u],b=x.instance,R=x.currentTarget;if(x=x.listener,b!==n&&s.isPropagationStopped())break e;Jl(s,x,R),n=b}else for(u=0;u<t.length;u++){if(x=t[u],b=x.instance,R=x.currentTarget,x=x.listener,b!==n&&s.isPropagationStopped())break e;Jl(s,x,R),n=b}}}if(at)throw e=Fs,at=!1,Fs=null,e}function be(e,a){var r=a[pi];r===void 0&&(r=a[pi]=new Set);var t=e+"__bubble";r.has(t)||(Xl(a,e,2,!1),r.add(t))}function ii(e,a,r){var t=0;a&&(t|=4),Xl(r,e,t,a)}var vt="_reactListening"+Math.random().toString(36).slice(2);function Er(e){if(!e[vt]){e[vt]=!0,m.forEach(function(r){r!=="selectionchange"&&(Jm.has(r)||ii(r,!1,e),ii(r,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[vt]||(a[vt]=!0,ii("selectionchange",!1,a))}}function Xl(e,a,r,t){switch(bl(a)){case 1:var s=dm;break;case 4:s=cm;break;default:s=Vs}r=s.bind(null,a,r,e),s=void 0,!Is||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(s=!0),t?s!==void 0?e.addEventListener(a,r,{capture:!0,passive:s}):e.addEventListener(a,r,!0):s!==void 0?e.addEventListener(a,r,{passive:s}):e.addEventListener(a,r,!1)}function ni(e,a,r,t,s){var n=t;if((a&1)===0&&(a&2)===0&&t!==null)e:for(;;){if(t===null)return;var u=t.tag;if(u===3||u===4){var x=t.stateNode.containerInfo;if(x===s||x.nodeType===8&&x.parentNode===s)break;if(u===4)for(u=t.return;u!==null;){var b=u.tag;if((b===3||b===4)&&(b=u.stateNode.containerInfo,b===s||b.nodeType===8&&b.parentNode===s))return;u=u.return}for(;x!==null;){if(u=mo(x),u===null)return;if(b=u.tag,b===5||b===6){t=n=u;continue e}x=x.parentNode}}t=t.return}ol(function(){var R=n,q=zs(r),U=[];e:{var B=Hl.get(e);if(B!==void 0){var K=Gs,Y=e;switch(e){case"keypress":if(mt(r)===0)break e;case"keydown":case"keyup":K=Nm;break;case"focusin":Y="focus",K=Js;break;case"focusout":Y="blur",K=Js;break;case"beforeblur":case"afterblur":K=Js;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=jl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=pm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=Em;break;case Vl:case Ul:case Wl:K=hm;break;case Gl:K=Lm;break;case"scroll":K=um;break;case"wheel":K=zm;break;case"copy":case"cut":case"paste":K=vm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=Nl}var ee=(a&4)!==0,Re=!ee&&e==="scroll",E=ee?B!==null?B+"Capture":null:B;ee=[];for(var j=R,L;j!==null;){L=j;var G=L.stateNode;if(L.tag===5&&G!==null&&(L=G,E!==null&&(G=cr(j,E),G!=null&&ee.push(Ar(j,G,L)))),Re)break;j=j.return}0<ee.length&&(B=new K(B,Y,null,r,q),U.push({event:B,listeners:ee}))}}if((a&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",K=e==="mouseout"||e==="pointerout",B&&r!==Rs&&(Y=r.relatedTarget||r.fromElement)&&(mo(Y)||Y[Aa]))break e;if((K||B)&&(B=q.window===q?q:(B=q.ownerDocument)?B.defaultView||B.parentWindow:window,K?(Y=r.relatedTarget||r.toElement,K=R,Y=Y?mo(Y):null,Y!==null&&(Re=uo(Y),Y!==Re||Y.tag!==5&&Y.tag!==6)&&(Y=null)):(K=null,Y=R),K!==Y)){if(ee=jl,G="onMouseLeave",E="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Nl,G="onPointerLeave",E="onPointerEnter",j="pointer"),Re=K==null?B:Bo(K),L=Y==null?B:Bo(Y),B=new ee(G,j+"leave",K,r,q),B.target=Re,B.relatedTarget=L,G=null,mo(q)===R&&(ee=new ee(E,j+"enter",Y,r,q),ee.target=L,ee.relatedTarget=Re,G=ee),Re=G,K&&Y)a:{for(ee=K,E=Y,j=0,L=ee;L;L=Oo(L))j++;for(L=0,G=E;G;G=Oo(G))L++;for(;0<j-L;)ee=Oo(ee),j--;for(;0<L-j;)E=Oo(E),L--;for(;j--;){if(ee===E||E!==null&&ee===E.alternate)break a;ee=Oo(ee),E=Oo(E)}ee=null}else ee=null;K!==null&&Yl(U,B,K,ee,!1),Y!==null&&Re!==null&&Yl(U,Re,Y,ee,!0)}}e:{if(B=R?Bo(R):window,K=B.nodeName&&B.nodeName.toLowerCase(),K==="select"||K==="input"&&B.type==="file")var oe=Om;else if(Rl(B))if(Ml)oe=Vm;else{oe=Bm;var te=$m}else(K=B.nodeName)&&K.toLowerCase()==="input"&&(B.type==="checkbox"||B.type==="radio")&&(oe=qm);if(oe&&(oe=oe(e,R))){zl(U,oe,r,q);break e}te&&te(e,B,R),e==="focusout"&&(te=B._wrapperState)&&te.controlled&&B.type==="number"&&ks(B,"number",B.value)}switch(te=R?Bo(R):window,e){case"focusin":(Rl(te)||te.contentEditable==="true")&&(_o=te,ai=R,kr=null);break;case"focusout":kr=ai=_o=null;break;case"mousedown":oi=!0;break;case"contextmenu":case"mouseup":case"dragend":oi=!1,Bl(U,r,q);break;case"selectionchange":if(Gm)break;case"keydown":case"keyup":Bl(U,r,q)}var se;if(Xs)e:{switch(e){case"compositionstart":var ie="onCompositionStart";break e;case"compositionend":ie="onCompositionEnd";break e;case"compositionupdate":ie="onCompositionUpdate";break e}ie=void 0}else Fo?Al(e,r)&&(ie="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ie="onCompositionStart");ie&&(kl&&r.locale!=="ko"&&(Fo||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&Fo&&(se=Cl()):(Va=q,Ws="value"in Va?Va.value:Va.textContent,Fo=!0)),te=yt(R,ie),0<te.length&&(ie=new wl(ie,e,null,r,q),U.push({event:ie,listeners:te}),se?ie.data=se:(se=Ll(r),se!==null&&(ie.data=se)))),(se=Dm?Im(e,r):Fm(e,r))&&(R=yt(R,"onBeforeInput"),0<R.length&&(q=new wl("onBeforeInput","beforeinput",null,r,q),U.push({event:q,listeners:R}),q.data=se))}Kl(U,a)})}function Ar(e,a,r){return{instance:e,listener:a,currentTarget:r}}function yt(e,a){for(var r=a+"Capture",t=[];e!==null;){var s=e,n=s.stateNode;s.tag===5&&n!==null&&(s=n,n=cr(e,r),n!=null&&t.unshift(Ar(e,n,s)),n=cr(e,a),n!=null&&t.push(Ar(e,n,s))),e=e.return}return t}function Oo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yl(e,a,r,t,s){for(var n=a._reactName,u=[];r!==null&&r!==t;){var x=r,b=x.alternate,R=x.stateNode;if(b!==null&&b===t)break;x.tag===5&&R!==null&&(x=R,s?(b=cr(r,n),b!=null&&u.unshift(Ar(r,b,x))):s||(b=cr(r,n),b!=null&&u.push(Ar(r,b,x)))),r=r.return}u.length!==0&&e.push({event:a,listeners:u})}var Km=/\r\n?/g,Xm=/\u0000|\uFFFD/g;function Zl(e){return(typeof e=="string"?e:""+e).replace(Km,`
`).replace(Xm,"")}function bt(e,a,r){if(a=Zl(a),Zl(e)!==a&&r)throw Error(l(425))}function Ct(){}var li=null,di=null;function ci(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var ui=typeof setTimeout=="function"?setTimeout:void 0,Ym=typeof clearTimeout=="function"?clearTimeout:void 0,ed=typeof Promise=="function"?Promise:void 0,Zm=typeof queueMicrotask=="function"?queueMicrotask:typeof ed<"u"?function(e){return ed.resolve(null).then(e).catch(ep)}:ui;function ep(e){setTimeout(function(){throw e})}function mi(e,a){var r=a,t=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(t===0){e.removeChild(s),yr(a);return}t--}else r!=="$"&&r!=="$?"&&r!=="$!"||t++;r=s}while(r);yr(a)}function Wa(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return e}function ad(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(a===0)return e;a--}else r==="/$"&&a++}e=e.previousSibling}return null}var $o=Math.random().toString(36).slice(2),wa="__reactFiber$"+$o,Lr="__reactProps$"+$o,Aa="__reactContainer$"+$o,pi="__reactEvents$"+$o,ap="__reactListeners$"+$o,op="__reactHandles$"+$o;function mo(e){var a=e[wa];if(a)return a;for(var r=e.parentNode;r;){if(a=r[Aa]||r[wa]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(e=ad(e);e!==null;){if(r=e[wa])return r;e=ad(e)}return a}e=r,r=e.parentNode}return null}function Rr(e){return e=e[wa]||e[Aa],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function St(e){return e[Lr]||null}var fi=[],qo=-1;function Ga(e){return{current:e}}function Ce(e){0>qo||(e.current=fi[qo],fi[qo]=null,qo--)}function ye(e,a){qo++,fi[qo]=e.current,e.current=a}var Ha={},Ue=Ga(Ha),Ke=Ga(!1),po=Ha;function Vo(e,a){var r=e.type.contextTypes;if(!r)return Ha;var t=e.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===a)return t.__reactInternalMemoizedMaskedChildContext;var s={},n;for(n in r)s[n]=a[n];return t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=s),s}function Xe(e){return e=e.childContextTypes,e!=null}function jt(){Ce(Ke),Ce(Ue)}function od(e,a,r){if(Ue.current!==Ha)throw Error(l(168));ye(Ue,a),ye(Ke,r)}function rd(e,a,r){var t=e.stateNode;if(a=a.childContextTypes,typeof t.getChildContext!="function")return r;t=t.getChildContext();for(var s in t)if(!(s in a))throw Error(l(108,ve(e)||"Unknown",s));return W({},r,t)}function wt(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ha,po=Ue.current,ye(Ue,e),ye(Ke,Ke.current),!0}function td(e,a,r){var t=e.stateNode;if(!t)throw Error(l(169));r?(e=rd(e,a,po),t.__reactInternalMemoizedMergedChildContext=e,Ce(Ke),Ce(Ue),ye(Ue,e)):Ce(Ke),ye(Ke,r)}var La=null,Nt=!1,gi=!1;function sd(e){La===null?La=[e]:La.push(e)}function rp(e){Nt=!0,sd(e)}function Qa(){if(!gi&&La!==null){gi=!0;var e=0,a=xe;try{var r=La;for(xe=1;e<r.length;e++){var t=r[e];do t=t(!0);while(t!==null)}La=null,Nt=!1}catch(s){throw La!==null&&(La=La.slice(e+1)),nl(_s,Qa),s}finally{xe=a,gi=!1}}return null}var Uo=[],Wo=0,kt=null,Pt=0,da=[],ca=0,fo=null,Ra=1,za="";function go(e,a){Uo[Wo++]=Pt,Uo[Wo++]=kt,kt=e,Pt=a}function id(e,a,r){da[ca++]=Ra,da[ca++]=za,da[ca++]=fo,fo=e;var t=Ra;e=za;var s=32-ga(t)-1;t&=~(1<<s),r+=1;var n=32-ga(a)+s;if(30<n){var u=s-s%5;n=(t&(1<<u)-1).toString(32),t>>=u,s-=u,Ra=1<<32-ga(a)+s|r<<s|t,za=n+e}else Ra=1<<n|r<<s|t,za=e}function hi(e){e.return!==null&&(go(e,1),id(e,1,0))}function xi(e){for(;e===kt;)kt=Uo[--Wo],Uo[Wo]=null,Pt=Uo[--Wo],Uo[Wo]=null;for(;e===fo;)fo=da[--ca],da[ca]=null,za=da[--ca],da[ca]=null,Ra=da[--ca],da[ca]=null}var ta=null,sa=null,je=!1,xa=null;function nd(e,a){var r=fa(5,null,null,0);r.elementType="DELETED",r.stateNode=a,r.return=e,a=e.deletions,a===null?(e.deletions=[r],e.flags|=16):a.push(r)}function ld(e,a){switch(e.tag){case 5:var r=e.type;return a=a.nodeType!==1||r.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(e.stateNode=a,ta=e,sa=Wa(a.firstChild),!0):!1;case 6:return a=e.pendingProps===""||a.nodeType!==3?null:a,a!==null?(e.stateNode=a,ta=e,sa=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(r=fo!==null?{id:Ra,overflow:za}:null,e.memoizedState={dehydrated:a,treeContext:r,retryLane:1073741824},r=fa(18,null,null,0),r.stateNode=a,r.return=e,e.child=r,ta=e,sa=null,!0):!1;default:return!1}}function vi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function yi(e){if(je){var a=sa;if(a){var r=a;if(!ld(e,a)){if(vi(e))throw Error(l(418));a=Wa(r.nextSibling);var t=ta;a&&ld(e,a)?nd(t,r):(e.flags=e.flags&-4097|2,je=!1,ta=e)}}else{if(vi(e))throw Error(l(418));e.flags=e.flags&-4097|2,je=!1,ta=e}}}function dd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ta=e}function Et(e){if(e!==ta)return!1;if(!je)return dd(e),je=!0,!1;var a;if((a=e.tag!==3)&&!(a=e.tag!==5)&&(a=e.type,a=a!=="head"&&a!=="body"&&!ci(e.type,e.memoizedProps)),a&&(a=sa)){if(vi(e))throw cd(),Error(l(418));for(;a;)nd(e,a),a=Wa(a.nextSibling)}if(dd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,a=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(a===0){sa=Wa(e.nextSibling);break e}a--}else r!=="$"&&r!=="$!"&&r!=="$?"||a++}e=e.nextSibling}sa=null}}else sa=ta?Wa(e.stateNode.nextSibling):null;return!0}function cd(){for(var e=sa;e;)e=Wa(e.nextSibling)}function Go(){sa=ta=null,je=!1}function bi(e){xa===null?xa=[e]:xa.push(e)}var tp=$.ReactCurrentBatchConfig;function zr(e,a,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(l(309));var t=r.stateNode}if(!t)throw Error(l(147,e));var s=t,n=""+e;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===n?a.ref:(a=function(u){var x=s.refs;u===null?delete x[n]:x[n]=u},a._stringRef=n,a)}if(typeof e!="string")throw Error(l(284));if(!r._owner)throw Error(l(290,e))}return e}function At(e,a){throw e=Object.prototype.toString.call(a),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e))}function ud(e){var a=e._init;return a(e._payload)}function md(e){function a(E,j){if(e){var L=E.deletions;L===null?(E.deletions=[j],E.flags|=16):L.push(j)}}function r(E,j){if(!e)return null;for(;j!==null;)a(E,j),j=j.sibling;return null}function t(E,j){for(E=new Map;j!==null;)j.key!==null?E.set(j.key,j):E.set(j.index,j),j=j.sibling;return E}function s(E,j){return E=oo(E,j),E.index=0,E.sibling=null,E}function n(E,j,L){return E.index=L,e?(L=E.alternate,L!==null?(L=L.index,L<j?(E.flags|=2,j):L):(E.flags|=2,j)):(E.flags|=1048576,j)}function u(E){return e&&E.alternate===null&&(E.flags|=2),E}function x(E,j,L,G){return j===null||j.tag!==6?(j=mn(L,E.mode,G),j.return=E,j):(j=s(j,L),j.return=E,j)}function b(E,j,L,G){var oe=L.type;return oe===H?q(E,j,L.props.children,G,L.key):j!==null&&(j.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===I&&ud(oe)===j.type)?(G=s(j,L.props),G.ref=zr(E,j,L),G.return=E,G):(G=Zt(L.type,L.key,L.props,null,E.mode,G),G.ref=zr(E,j,L),G.return=E,G)}function R(E,j,L,G){return j===null||j.tag!==4||j.stateNode.containerInfo!==L.containerInfo||j.stateNode.implementation!==L.implementation?(j=pn(L,E.mode,G),j.return=E,j):(j=s(j,L.children||[]),j.return=E,j)}function q(E,j,L,G,oe){return j===null||j.tag!==7?(j=jo(L,E.mode,G,oe),j.return=E,j):(j=s(j,L),j.return=E,j)}function U(E,j,L){if(typeof j=="string"&&j!==""||typeof j=="number")return j=mn(""+j,E.mode,L),j.return=E,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Z:return L=Zt(j.type,j.key,j.props,null,E.mode,L),L.ref=zr(E,null,j),L.return=E,L;case J:return j=pn(j,E.mode,L),j.return=E,j;case I:var G=j._init;return U(E,G(j._payload),L)}if(nr(j)||Q(j))return j=jo(j,E.mode,L,null),j.return=E,j;At(E,j)}return null}function B(E,j,L,G){var oe=j!==null?j.key:null;if(typeof L=="string"&&L!==""||typeof L=="number")return oe!==null?null:x(E,j,""+L,G);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Z:return L.key===oe?b(E,j,L,G):null;case J:return L.key===oe?R(E,j,L,G):null;case I:return oe=L._init,B(E,j,oe(L._payload),G)}if(nr(L)||Q(L))return oe!==null?null:q(E,j,L,G,null);At(E,L)}return null}function K(E,j,L,G,oe){if(typeof G=="string"&&G!==""||typeof G=="number")return E=E.get(L)||null,x(j,E,""+G,oe);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case Z:return E=E.get(G.key===null?L:G.key)||null,b(j,E,G,oe);case J:return E=E.get(G.key===null?L:G.key)||null,R(j,E,G,oe);case I:var te=G._init;return K(E,j,L,te(G._payload),oe)}if(nr(G)||Q(G))return E=E.get(L)||null,q(j,E,G,oe,null);At(j,G)}return null}function Y(E,j,L,G){for(var oe=null,te=null,se=j,ie=j=0,Oe=null;se!==null&&ie<L.length;ie++){se.index>ie?(Oe=se,se=null):Oe=se.sibling;var fe=B(E,se,L[ie],G);if(fe===null){se===null&&(se=Oe);break}e&&se&&fe.alternate===null&&a(E,se),j=n(fe,j,ie),te===null?oe=fe:te.sibling=fe,te=fe,se=Oe}if(ie===L.length)return r(E,se),je&&go(E,ie),oe;if(se===null){for(;ie<L.length;ie++)se=U(E,L[ie],G),se!==null&&(j=n(se,j,ie),te===null?oe=se:te.sibling=se,te=se);return je&&go(E,ie),oe}for(se=t(E,se);ie<L.length;ie++)Oe=K(se,E,ie,L[ie],G),Oe!==null&&(e&&Oe.alternate!==null&&se.delete(Oe.key===null?ie:Oe.key),j=n(Oe,j,ie),te===null?oe=Oe:te.sibling=Oe,te=Oe);return e&&se.forEach(function(ro){return a(E,ro)}),je&&go(E,ie),oe}function ee(E,j,L,G){var oe=Q(L);if(typeof oe!="function")throw Error(l(150));if(L=oe.call(L),L==null)throw Error(l(151));for(var te=oe=null,se=j,ie=j=0,Oe=null,fe=L.next();se!==null&&!fe.done;ie++,fe=L.next()){se.index>ie?(Oe=se,se=null):Oe=se.sibling;var ro=B(E,se,fe.value,G);if(ro===null){se===null&&(se=Oe);break}e&&se&&ro.alternate===null&&a(E,se),j=n(ro,j,ie),te===null?oe=ro:te.sibling=ro,te=ro,se=Oe}if(fe.done)return r(E,se),je&&go(E,ie),oe;if(se===null){for(;!fe.done;ie++,fe=L.next())fe=U(E,fe.value,G),fe!==null&&(j=n(fe,j,ie),te===null?oe=fe:te.sibling=fe,te=fe);return je&&go(E,ie),oe}for(se=t(E,se);!fe.done;ie++,fe=L.next())fe=K(se,E,ie,fe.value,G),fe!==null&&(e&&fe.alternate!==null&&se.delete(fe.key===null?ie:fe.key),j=n(fe,j,ie),te===null?oe=fe:te.sibling=fe,te=fe);return e&&se.forEach(function(_p){return a(E,_p)}),je&&go(E,ie),oe}function Re(E,j,L,G){if(typeof L=="object"&&L!==null&&L.type===H&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case Z:e:{for(var oe=L.key,te=j;te!==null;){if(te.key===oe){if(oe=L.type,oe===H){if(te.tag===7){r(E,te.sibling),j=s(te,L.props.children),j.return=E,E=j;break e}}else if(te.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===I&&ud(oe)===te.type){r(E,te.sibling),j=s(te,L.props),j.ref=zr(E,te,L),j.return=E,E=j;break e}r(E,te);break}else a(E,te);te=te.sibling}L.type===H?(j=jo(L.props.children,E.mode,G,L.key),j.return=E,E=j):(G=Zt(L.type,L.key,L.props,null,E.mode,G),G.ref=zr(E,j,L),G.return=E,E=G)}return u(E);case J:e:{for(te=L.key;j!==null;){if(j.key===te)if(j.tag===4&&j.stateNode.containerInfo===L.containerInfo&&j.stateNode.implementation===L.implementation){r(E,j.sibling),j=s(j,L.children||[]),j.return=E,E=j;break e}else{r(E,j);break}else a(E,j);j=j.sibling}j=pn(L,E.mode,G),j.return=E,E=j}return u(E);case I:return te=L._init,Re(E,j,te(L._payload),G)}if(nr(L))return Y(E,j,L,G);if(Q(L))return ee(E,j,L,G);At(E,L)}return typeof L=="string"&&L!==""||typeof L=="number"?(L=""+L,j!==null&&j.tag===6?(r(E,j.sibling),j=s(j,L),j.return=E,E=j):(r(E,j),j=mn(L,E.mode,G),j.return=E,E=j),u(E)):r(E,j)}return Re}var Ho=md(!0),pd=md(!1),Lt=Ga(null),Rt=null,Qo=null,Ci=null;function Si(){Ci=Qo=Rt=null}function ji(e){var a=Lt.current;Ce(Lt),e._currentValue=a}function wi(e,a,r){for(;e!==null;){var t=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,t!==null&&(t.childLanes|=a)):t!==null&&(t.childLanes&a)!==a&&(t.childLanes|=a),e===r)break;e=e.return}}function Jo(e,a){Rt=e,Ci=Qo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&a)!==0&&(Ye=!0),e.firstContext=null)}function ua(e){var a=e._currentValue;if(Ci!==e)if(e={context:e,memoizedValue:a,next:null},Qo===null){if(Rt===null)throw Error(l(308));Qo=e,Rt.dependencies={lanes:0,firstContext:e}}else Qo=Qo.next=e;return a}var ho=null;function Ni(e){ho===null?ho=[e]:ho.push(e)}function fd(e,a,r,t){var s=a.interleaved;return s===null?(r.next=r,Ni(a)):(r.next=s.next,s.next=r),a.interleaved=r,Ma(e,t)}function Ma(e,a){e.lanes|=a;var r=e.alternate;for(r!==null&&(r.lanes|=a),r=e,e=e.return;e!==null;)e.childLanes|=a,r=e.alternate,r!==null&&(r.childLanes|=a),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Ja=!1;function ki(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gd(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Da(e,a){return{eventTime:e,lane:a,tag:0,payload:null,callback:null,next:null}}function Ka(e,a,r){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,(me&2)!==0){var s=t.pending;return s===null?a.next=a:(a.next=s.next,s.next=a),t.pending=a,Ma(e,r)}return s=t.interleaved,s===null?(a.next=a,Ni(t)):(a.next=s.next,s.next=a),t.interleaved=a,Ma(e,r)}function zt(e,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194240)!==0)){var t=a.lanes;t&=e.pendingLanes,r|=t,a.lanes=r,$s(e,r)}}function hd(e,a){var r=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,r===t)){var s=null,n=null;if(r=r.firstBaseUpdate,r!==null){do{var u={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};n===null?s=n=u:n=n.next=u,r=r.next}while(r!==null);n===null?s=n=a:n=n.next=a}else s=n=a;r={baseState:t.baseState,firstBaseUpdate:s,lastBaseUpdate:n,shared:t.shared,effects:t.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=a:e.next=a,r.lastBaseUpdate=a}function Mt(e,a,r,t){var s=e.updateQueue;Ja=!1;var n=s.firstBaseUpdate,u=s.lastBaseUpdate,x=s.shared.pending;if(x!==null){s.shared.pending=null;var b=x,R=b.next;b.next=null,u===null?n=R:u.next=R,u=b;var q=e.alternate;q!==null&&(q=q.updateQueue,x=q.lastBaseUpdate,x!==u&&(x===null?q.firstBaseUpdate=R:x.next=R,q.lastBaseUpdate=b))}if(n!==null){var U=s.baseState;u=0,q=R=b=null,x=n;do{var B=x.lane,K=x.eventTime;if((t&B)===B){q!==null&&(q=q.next={eventTime:K,lane:0,tag:x.tag,payload:x.payload,callback:x.callback,next:null});e:{var Y=e,ee=x;switch(B=a,K=r,ee.tag){case 1:if(Y=ee.payload,typeof Y=="function"){U=Y.call(K,U,B);break e}U=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=ee.payload,B=typeof Y=="function"?Y.call(K,U,B):Y,B==null)break e;U=W({},U,B);break e;case 2:Ja=!0}}x.callback!==null&&x.lane!==0&&(e.flags|=64,B=s.effects,B===null?s.effects=[x]:B.push(x))}else K={eventTime:K,lane:B,tag:x.tag,payload:x.payload,callback:x.callback,next:null},q===null?(R=q=K,b=U):q=q.next=K,u|=B;if(x=x.next,x===null){if(x=s.shared.pending,x===null)break;B=x,x=B.next,B.next=null,s.lastBaseUpdate=B,s.shared.pending=null}}while(!0);if(q===null&&(b=U),s.baseState=b,s.firstBaseUpdate=R,s.lastBaseUpdate=q,a=s.shared.interleaved,a!==null){s=a;do u|=s.lane,s=s.next;while(s!==a)}else n===null&&(s.shared.lanes=0);yo|=u,e.lanes=u,e.memoizedState=U}}function xd(e,a,r){if(e=a.effects,a.effects=null,e!==null)for(a=0;a<e.length;a++){var t=e[a],s=t.callback;if(s!==null){if(t.callback=null,t=r,typeof s!="function")throw Error(l(191,s));s.call(t)}}}var Mr={},Na=Ga(Mr),Dr=Ga(Mr),Ir=Ga(Mr);function xo(e){if(e===Mr)throw Error(l(174));return e}function Pi(e,a){switch(ye(Ir,a),ye(Dr,e),ye(Na,Mr),e=a.nodeType,e){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:Es(null,"");break;default:e=e===8?a.parentNode:a,a=e.namespaceURI||null,e=e.tagName,a=Es(a,e)}Ce(Na),ye(Na,a)}function Ko(){Ce(Na),Ce(Dr),Ce(Ir)}function vd(e){xo(Ir.current);var a=xo(Na.current),r=Es(a,e.type);a!==r&&(ye(Dr,e),ye(Na,r))}function Ei(e){Dr.current===e&&(Ce(Na),Ce(Dr))}var we=Ga(0);function Dt(e){for(var a=e;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Ai=[];function Li(){for(var e=0;e<Ai.length;e++)Ai[e]._workInProgressVersionPrimary=null;Ai.length=0}var It=$.ReactCurrentDispatcher,Ri=$.ReactCurrentBatchConfig,vo=0,Ne=null,Me=null,_e=null,Ft=!1,Fr=!1,_r=0,sp=0;function We(){throw Error(l(321))}function zi(e,a){if(a===null)return!1;for(var r=0;r<a.length&&r<e.length;r++)if(!ha(e[r],a[r]))return!1;return!0}function Mi(e,a,r,t,s,n){if(vo=n,Ne=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,It.current=e===null||e.memoizedState===null?dp:cp,e=r(t,s),Fr){n=0;do{if(Fr=!1,_r=0,25<=n)throw Error(l(301));n+=1,_e=Me=null,a.updateQueue=null,It.current=up,e=r(t,s)}while(Fr)}if(It.current=Ot,a=Me!==null&&Me.next!==null,vo=0,_e=Me=Ne=null,Ft=!1,a)throw Error(l(300));return e}function Di(){var e=_r!==0;return _r=0,e}function ka(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?Ne.memoizedState=_e=e:_e=_e.next=e,_e}function ma(){if(Me===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var a=_e===null?Ne.memoizedState:_e.next;if(a!==null)_e=a,Me=e;else{if(e===null)throw Error(l(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},_e===null?Ne.memoizedState=_e=e:_e=_e.next=e}return _e}function Tr(e,a){return typeof a=="function"?a(e):a}function Ii(e){var a=ma(),r=a.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var t=Me,s=t.baseQueue,n=r.pending;if(n!==null){if(s!==null){var u=s.next;s.next=n.next,n.next=u}t.baseQueue=s=n,r.pending=null}if(s!==null){n=s.next,t=t.baseState;var x=u=null,b=null,R=n;do{var q=R.lane;if((vo&q)===q)b!==null&&(b=b.next={lane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),t=R.hasEagerState?R.eagerState:e(t,R.action);else{var U={lane:q,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null};b===null?(x=b=U,u=t):b=b.next=U,Ne.lanes|=q,yo|=q}R=R.next}while(R!==null&&R!==n);b===null?u=t:b.next=x,ha(t,a.memoizedState)||(Ye=!0),a.memoizedState=t,a.baseState=u,a.baseQueue=b,r.lastRenderedState=t}if(e=r.interleaved,e!==null){s=e;do n=s.lane,Ne.lanes|=n,yo|=n,s=s.next;while(s!==e)}else s===null&&(r.lanes=0);return[a.memoizedState,r.dispatch]}function Fi(e){var a=ma(),r=a.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var t=r.dispatch,s=r.pending,n=a.memoizedState;if(s!==null){r.pending=null;var u=s=s.next;do n=e(n,u.action),u=u.next;while(u!==s);ha(n,a.memoizedState)||(Ye=!0),a.memoizedState=n,a.baseQueue===null&&(a.baseState=n),r.lastRenderedState=n}return[n,t]}function yd(){}function bd(e,a){var r=Ne,t=ma(),s=a(),n=!ha(t.memoizedState,s);if(n&&(t.memoizedState=s,Ye=!0),t=t.queue,_i(jd.bind(null,r,t,e),[e]),t.getSnapshot!==a||n||_e!==null&&_e.memoizedState.tag&1){if(r.flags|=2048,Or(9,Sd.bind(null,r,t,s,a),void 0,null),Te===null)throw Error(l(349));(vo&30)!==0||Cd(r,a,s)}return s}function Cd(e,a,r){e.flags|=16384,e={getSnapshot:a,value:r},a=Ne.updateQueue,a===null?(a={lastEffect:null,stores:null},Ne.updateQueue=a,a.stores=[e]):(r=a.stores,r===null?a.stores=[e]:r.push(e))}function Sd(e,a,r,t){a.value=r,a.getSnapshot=t,wd(a)&&Nd(e)}function jd(e,a,r){return r(function(){wd(a)&&Nd(e)})}function wd(e){var a=e.getSnapshot;e=e.value;try{var r=a();return!ha(e,r)}catch{return!0}}function Nd(e){var a=Ma(e,1);a!==null&&Ca(a,e,1,-1)}function kd(e){var a=ka();return typeof e=="function"&&(e=e()),a.memoizedState=a.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Tr,lastRenderedState:e},a.queue=e,e=e.dispatch=lp.bind(null,Ne,e),[a.memoizedState,e]}function Or(e,a,r,t){return e={tag:e,create:a,destroy:r,deps:t,next:null},a=Ne.updateQueue,a===null?(a={lastEffect:null,stores:null},Ne.updateQueue=a,a.lastEffect=e.next=e):(r=a.lastEffect,r===null?a.lastEffect=e.next=e:(t=r.next,r.next=e,e.next=t,a.lastEffect=e)),e}function Pd(){return ma().memoizedState}function _t(e,a,r,t){var s=ka();Ne.flags|=e,s.memoizedState=Or(1|a,r,void 0,t===void 0?null:t)}function Tt(e,a,r,t){var s=ma();t=t===void 0?null:t;var n=void 0;if(Me!==null){var u=Me.memoizedState;if(n=u.destroy,t!==null&&zi(t,u.deps)){s.memoizedState=Or(a,r,n,t);return}}Ne.flags|=e,s.memoizedState=Or(1|a,r,n,t)}function Ed(e,a){return _t(8390656,8,e,a)}function _i(e,a){return Tt(2048,8,e,a)}function Ad(e,a){return Tt(4,2,e,a)}function Ld(e,a){return Tt(4,4,e,a)}function Rd(e,a){if(typeof a=="function")return e=e(),a(e),function(){a(null)};if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function zd(e,a,r){return r=r!=null?r.concat([e]):null,Tt(4,4,Rd.bind(null,a,e),r)}function Ti(){}function Md(e,a){var r=ma();a=a===void 0?null:a;var t=r.memoizedState;return t!==null&&a!==null&&zi(a,t[1])?t[0]:(r.memoizedState=[e,a],e)}function Dd(e,a){var r=ma();a=a===void 0?null:a;var t=r.memoizedState;return t!==null&&a!==null&&zi(a,t[1])?t[0]:(e=e(),r.memoizedState=[e,a],e)}function Id(e,a,r){return(vo&21)===0?(e.baseState&&(e.baseState=!1,Ye=!0),e.memoizedState=r):(ha(r,a)||(r=ul(),Ne.lanes|=r,yo|=r,e.baseState=!0),a)}function ip(e,a){var r=xe;xe=r!==0&&4>r?r:4,e(!0);var t=Ri.transition;Ri.transition={};try{e(!1),a()}finally{xe=r,Ri.transition=t}}function Fd(){return ma().memoizedState}function np(e,a,r){var t=eo(e);if(r={lane:t,action:r,hasEagerState:!1,eagerState:null,next:null},_d(e))Td(a,r);else if(r=fd(e,a,r,t),r!==null){var s=Je();Ca(r,e,t,s),Od(r,a,t)}}function lp(e,a,r){var t=eo(e),s={lane:t,action:r,hasEagerState:!1,eagerState:null,next:null};if(_d(e))Td(a,s);else{var n=e.alternate;if(e.lanes===0&&(n===null||n.lanes===0)&&(n=a.lastRenderedReducer,n!==null))try{var u=a.lastRenderedState,x=n(u,r);if(s.hasEagerState=!0,s.eagerState=x,ha(x,u)){var b=a.interleaved;b===null?(s.next=s,Ni(a)):(s.next=b.next,b.next=s),a.interleaved=s;return}}catch{}finally{}r=fd(e,a,s,t),r!==null&&(s=Je(),Ca(r,e,t,s),Od(r,a,t))}}function _d(e){var a=e.alternate;return e===Ne||a!==null&&a===Ne}function Td(e,a){Fr=Ft=!0;var r=e.pending;r===null?a.next=a:(a.next=r.next,r.next=a),e.pending=a}function Od(e,a,r){if((r&4194240)!==0){var t=a.lanes;t&=e.pendingLanes,r|=t,a.lanes=r,$s(e,r)}}var Ot={readContext:ua,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},dp={readContext:ua,useCallback:function(e,a){return ka().memoizedState=[e,a===void 0?null:a],e},useContext:ua,useEffect:Ed,useImperativeHandle:function(e,a,r){return r=r!=null?r.concat([e]):null,_t(4194308,4,Rd.bind(null,a,e),r)},useLayoutEffect:function(e,a){return _t(4194308,4,e,a)},useInsertionEffect:function(e,a){return _t(4,2,e,a)},useMemo:function(e,a){var r=ka();return a=a===void 0?null:a,e=e(),r.memoizedState=[e,a],e},useReducer:function(e,a,r){var t=ka();return a=r!==void 0?r(a):a,t.memoizedState=t.baseState=a,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},t.queue=e,e=e.dispatch=np.bind(null,Ne,e),[t.memoizedState,e]},useRef:function(e){var a=ka();return e={current:e},a.memoizedState=e},useState:kd,useDebugValue:Ti,useDeferredValue:function(e){return ka().memoizedState=e},useTransition:function(){var e=kd(!1),a=e[0];return e=ip.bind(null,e[1]),ka().memoizedState=e,[a,e]},useMutableSource:function(){},useSyncExternalStore:function(e,a,r){var t=Ne,s=ka();if(je){if(r===void 0)throw Error(l(407));r=r()}else{if(r=a(),Te===null)throw Error(l(349));(vo&30)!==0||Cd(t,a,r)}s.memoizedState=r;var n={value:r,getSnapshot:a};return s.queue=n,Ed(jd.bind(null,t,n,e),[e]),t.flags|=2048,Or(9,Sd.bind(null,t,n,r,a),void 0,null),r},useId:function(){var e=ka(),a=Te.identifierPrefix;if(je){var r=za,t=Ra;r=(t&~(1<<32-ga(t)-1)).toString(32)+r,a=":"+a+"R"+r,r=_r++,0<r&&(a+="H"+r.toString(32)),a+=":"}else r=sp++,a=":"+a+"r"+r.toString(32)+":";return e.memoizedState=a},unstable_isNewReconciler:!1},cp={readContext:ua,useCallback:Md,useContext:ua,useEffect:_i,useImperativeHandle:zd,useInsertionEffect:Ad,useLayoutEffect:Ld,useMemo:Dd,useReducer:Ii,useRef:Pd,useState:function(){return Ii(Tr)},useDebugValue:Ti,useDeferredValue:function(e){var a=ma();return Id(a,Me.memoizedState,e)},useTransition:function(){var e=Ii(Tr)[0],a=ma().memoizedState;return[e,a]},useMutableSource:yd,useSyncExternalStore:bd,useId:Fd,unstable_isNewReconciler:!1},up={readContext:ua,useCallback:Md,useContext:ua,useEffect:_i,useImperativeHandle:zd,useInsertionEffect:Ad,useLayoutEffect:Ld,useMemo:Dd,useReducer:Fi,useRef:Pd,useState:function(){return Fi(Tr)},useDebugValue:Ti,useDeferredValue:function(e){var a=ma();return Me===null?a.memoizedState=e:Id(a,Me.memoizedState,e)},useTransition:function(){var e=Fi(Tr)[0],a=ma().memoizedState;return[e,a]},useMutableSource:yd,useSyncExternalStore:bd,useId:Fd,unstable_isNewReconciler:!1};function va(e,a){if(e&&e.defaultProps){a=W({},a),e=e.defaultProps;for(var r in e)a[r]===void 0&&(a[r]=e[r]);return a}return a}function Oi(e,a,r,t){a=e.memoizedState,r=r(t,a),r=r==null?a:W({},a,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var $t={isMounted:function(e){return(e=e._reactInternals)?uo(e)===e:!1},enqueueSetState:function(e,a,r){e=e._reactInternals;var t=Je(),s=eo(e),n=Da(t,s);n.payload=a,r!=null&&(n.callback=r),a=Ka(e,n,s),a!==null&&(Ca(a,e,s,t),zt(a,e,s))},enqueueReplaceState:function(e,a,r){e=e._reactInternals;var t=Je(),s=eo(e),n=Da(t,s);n.tag=1,n.payload=a,r!=null&&(n.callback=r),a=Ka(e,n,s),a!==null&&(Ca(a,e,s,t),zt(a,e,s))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var r=Je(),t=eo(e),s=Da(r,t);s.tag=2,a!=null&&(s.callback=a),a=Ka(e,s,t),a!==null&&(Ca(a,e,t,r),zt(a,e,t))}};function $d(e,a,r,t,s,n,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,n,u):a.prototype&&a.prototype.isPureReactComponent?!Nr(r,t)||!Nr(s,n):!0}function Bd(e,a,r){var t=!1,s=Ha,n=a.contextType;return typeof n=="object"&&n!==null?n=ua(n):(s=Xe(a)?po:Ue.current,t=a.contextTypes,n=(t=t!=null)?Vo(e,s):Ha),a=new a(r,n),e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=$t,e.stateNode=a,a._reactInternals=e,t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=n),a}function qd(e,a,r,t){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,t),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,t),a.state!==e&&$t.enqueueReplaceState(a,a.state,null)}function $i(e,a,r,t){var s=e.stateNode;s.props=r,s.state=e.memoizedState,s.refs={},ki(e);var n=a.contextType;typeof n=="object"&&n!==null?s.context=ua(n):(n=Xe(a)?po:Ue.current,s.context=Vo(e,n)),s.state=e.memoizedState,n=a.getDerivedStateFromProps,typeof n=="function"&&(Oi(e,a,n,r),s.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(a=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),a!==s.state&&$t.enqueueReplaceState(s,s.state,null),Mt(e,r,s,t),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Xo(e,a){try{var r="",t=a;do r+=le(t),t=t.return;while(t);var s=r}catch(n){s=`
Error generating stack: `+n.message+`
`+n.stack}return{value:e,source:a,stack:s,digest:null}}function Bi(e,a,r){return{value:e,source:null,stack:r??null,digest:a??null}}function qi(e,a){try{console.error(a.value)}catch(r){setTimeout(function(){throw r})}}var mp=typeof WeakMap=="function"?WeakMap:Map;function Vd(e,a,r){r=Da(-1,r),r.tag=3,r.payload={element:null};var t=a.value;return r.callback=function(){Ht||(Ht=!0,rn=t),qi(e,a)},r}function Ud(e,a,r){r=Da(-1,r),r.tag=3;var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var s=a.value;r.payload=function(){return t(s)},r.callback=function(){qi(e,a)}}var n=e.stateNode;return n!==null&&typeof n.componentDidCatch=="function"&&(r.callback=function(){qi(e,a),typeof t!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var u=a.stack;this.componentDidCatch(a.value,{componentStack:u!==null?u:""})}),r}function Wd(e,a,r){var t=e.pingCache;if(t===null){t=e.pingCache=new mp;var s=new Set;t.set(a,s)}else s=t.get(a),s===void 0&&(s=new Set,t.set(a,s));s.has(r)||(s.add(r),e=kp.bind(null,e,a,r),a.then(e,e))}function Gd(e){do{var a;if((a=e.tag===13)&&(a=e.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return e;e=e.return}while(e!==null);return null}function Hd(e,a,r,t,s){return(e.mode&1)===0?(e===a?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(a=Da(-1,1),a.tag=2,Ka(r,a,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var pp=$.ReactCurrentOwner,Ye=!1;function Qe(e,a,r,t){a.child=e===null?pd(a,null,r,t):Ho(a,e.child,r,t)}function Qd(e,a,r,t,s){r=r.render;var n=a.ref;return Jo(a,s),t=Mi(e,a,r,t,n,s),r=Di(),e!==null&&!Ye?(a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~s,Ia(e,a,s)):(je&&r&&hi(a),a.flags|=1,Qe(e,a,t,s),a.child)}function Jd(e,a,r,t,s){if(e===null){var n=r.type;return typeof n=="function"&&!un(n)&&n.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(a.tag=15,a.type=n,Kd(e,a,n,t,s)):(e=Zt(r.type,null,t,a,a.mode,s),e.ref=a.ref,e.return=a,a.child=e)}if(n=e.child,(e.lanes&s)===0){var u=n.memoizedProps;if(r=r.compare,r=r!==null?r:Nr,r(u,t)&&e.ref===a.ref)return Ia(e,a,s)}return a.flags|=1,e=oo(n,t),e.ref=a.ref,e.return=a,a.child=e}function Kd(e,a,r,t,s){if(e!==null){var n=e.memoizedProps;if(Nr(n,t)&&e.ref===a.ref)if(Ye=!1,a.pendingProps=t=n,(e.lanes&s)!==0)(e.flags&131072)!==0&&(Ye=!0);else return a.lanes=e.lanes,Ia(e,a,s)}return Vi(e,a,r,t,s)}function Xd(e,a,r){var t=a.pendingProps,s=t.children,n=e!==null?e.memoizedState:null;if(t.mode==="hidden")if((a.mode&1)===0)a.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Zo,ia),ia|=r;else{if((r&1073741824)===0)return e=n!==null?n.baseLanes|r:r,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:e,cachePool:null,transitions:null},a.updateQueue=null,ye(Zo,ia),ia|=e,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=n!==null?n.baseLanes:r,ye(Zo,ia),ia|=t}else n!==null?(t=n.baseLanes|r,a.memoizedState=null):t=r,ye(Zo,ia),ia|=t;return Qe(e,a,s,r),a.child}function Yd(e,a){var r=a.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(a.flags|=512,a.flags|=2097152)}function Vi(e,a,r,t,s){var n=Xe(r)?po:Ue.current;return n=Vo(a,n),Jo(a,s),r=Mi(e,a,r,t,n,s),t=Di(),e!==null&&!Ye?(a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~s,Ia(e,a,s)):(je&&t&&hi(a),a.flags|=1,Qe(e,a,r,s),a.child)}function Zd(e,a,r,t,s){if(Xe(r)){var n=!0;wt(a)}else n=!1;if(Jo(a,s),a.stateNode===null)qt(e,a),Bd(a,r,t),$i(a,r,t,s),t=!0;else if(e===null){var u=a.stateNode,x=a.memoizedProps;u.props=x;var b=u.context,R=r.contextType;typeof R=="object"&&R!==null?R=ua(R):(R=Xe(r)?po:Ue.current,R=Vo(a,R));var q=r.getDerivedStateFromProps,U=typeof q=="function"||typeof u.getSnapshotBeforeUpdate=="function";U||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(x!==t||b!==R)&&qd(a,u,t,R),Ja=!1;var B=a.memoizedState;u.state=B,Mt(a,t,u,s),b=a.memoizedState,x!==t||B!==b||Ke.current||Ja?(typeof q=="function"&&(Oi(a,r,q,t),b=a.memoizedState),(x=Ja||$d(a,r,x,t,B,b,R))?(U||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(a.flags|=4194308)):(typeof u.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=t,a.memoizedState=b),u.props=t,u.state=b,u.context=R,t=x):(typeof u.componentDidMount=="function"&&(a.flags|=4194308),t=!1)}else{u=a.stateNode,gd(e,a),x=a.memoizedProps,R=a.type===a.elementType?x:va(a.type,x),u.props=R,U=a.pendingProps,B=u.context,b=r.contextType,typeof b=="object"&&b!==null?b=ua(b):(b=Xe(r)?po:Ue.current,b=Vo(a,b));var K=r.getDerivedStateFromProps;(q=typeof K=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(x!==U||B!==b)&&qd(a,u,t,b),Ja=!1,B=a.memoizedState,u.state=B,Mt(a,t,u,s);var Y=a.memoizedState;x!==U||B!==Y||Ke.current||Ja?(typeof K=="function"&&(Oi(a,r,K,t),Y=a.memoizedState),(R=Ja||$d(a,r,R,t,B,Y,b)||!1)?(q||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(t,Y,b),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(t,Y,b)),typeof u.componentDidUpdate=="function"&&(a.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof u.componentDidUpdate!="function"||x===e.memoizedProps&&B===e.memoizedState||(a.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&B===e.memoizedState||(a.flags|=1024),a.memoizedProps=t,a.memoizedState=Y),u.props=t,u.state=Y,u.context=b,t=R):(typeof u.componentDidUpdate!="function"||x===e.memoizedProps&&B===e.memoizedState||(a.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&B===e.memoizedState||(a.flags|=1024),t=!1)}return Ui(e,a,r,t,n,s)}function Ui(e,a,r,t,s,n){Yd(e,a);var u=(a.flags&128)!==0;if(!t&&!u)return s&&td(a,r,!1),Ia(e,a,n);t=a.stateNode,pp.current=a;var x=u&&typeof r.getDerivedStateFromError!="function"?null:t.render();return a.flags|=1,e!==null&&u?(a.child=Ho(a,e.child,null,n),a.child=Ho(a,null,x,n)):Qe(e,a,x,n),a.memoizedState=t.state,s&&td(a,r,!0),a.child}function ec(e){var a=e.stateNode;a.pendingContext?od(e,a.pendingContext,a.pendingContext!==a.context):a.context&&od(e,a.context,!1),Pi(e,a.containerInfo)}function ac(e,a,r,t,s){return Go(),bi(s),a.flags|=256,Qe(e,a,r,t),a.child}var Wi={dehydrated:null,treeContext:null,retryLane:0};function Gi(e){return{baseLanes:e,cachePool:null,transitions:null}}function oc(e,a,r){var t=a.pendingProps,s=we.current,n=!1,u=(a.flags&128)!==0,x;if((x=u)||(x=e!==null&&e.memoizedState===null?!1:(s&2)!==0),x?(n=!0,a.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),ye(we,s&1),e===null)return yi(a),e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((a.mode&1)===0?a.lanes=1:e.data==="$!"?a.lanes=8:a.lanes=1073741824,null):(u=t.children,e=t.fallback,n?(t=a.mode,n=a.child,u={mode:"hidden",children:u},(t&1)===0&&n!==null?(n.childLanes=0,n.pendingProps=u):n=es(u,t,0,null),e=jo(e,t,r,null),n.return=a,e.return=a,n.sibling=e,a.child=n,a.child.memoizedState=Gi(r),a.memoizedState=Wi,e):Hi(a,u));if(s=e.memoizedState,s!==null&&(x=s.dehydrated,x!==null))return fp(e,a,u,t,x,s,r);if(n){n=t.fallback,u=a.mode,s=e.child,x=s.sibling;var b={mode:"hidden",children:t.children};return(u&1)===0&&a.child!==s?(t=a.child,t.childLanes=0,t.pendingProps=b,a.deletions=null):(t=oo(s,b),t.subtreeFlags=s.subtreeFlags&14680064),x!==null?n=oo(x,n):(n=jo(n,u,r,null),n.flags|=2),n.return=a,t.return=a,t.sibling=n,a.child=t,t=n,n=a.child,u=e.child.memoizedState,u=u===null?Gi(r):{baseLanes:u.baseLanes|r,cachePool:null,transitions:u.transitions},n.memoizedState=u,n.childLanes=e.childLanes&~r,a.memoizedState=Wi,t}return n=e.child,e=n.sibling,t=oo(n,{mode:"visible",children:t.children}),(a.mode&1)===0&&(t.lanes=r),t.return=a,t.sibling=null,e!==null&&(r=a.deletions,r===null?(a.deletions=[e],a.flags|=16):r.push(e)),a.child=t,a.memoizedState=null,t}function Hi(e,a){return a=es({mode:"visible",children:a},e.mode,0,null),a.return=e,e.child=a}function Bt(e,a,r,t){return t!==null&&bi(t),Ho(a,e.child,null,r),e=Hi(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function fp(e,a,r,t,s,n,u){if(r)return a.flags&256?(a.flags&=-257,t=Bi(Error(l(422))),Bt(e,a,u,t)):a.memoizedState!==null?(a.child=e.child,a.flags|=128,null):(n=t.fallback,s=a.mode,t=es({mode:"visible",children:t.children},s,0,null),n=jo(n,s,u,null),n.flags|=2,t.return=a,n.return=a,t.sibling=n,a.child=t,(a.mode&1)!==0&&Ho(a,e.child,null,u),a.child.memoizedState=Gi(u),a.memoizedState=Wi,n);if((a.mode&1)===0)return Bt(e,a,u,null);if(s.data==="$!"){if(t=s.nextSibling&&s.nextSibling.dataset,t)var x=t.dgst;return t=x,n=Error(l(419)),t=Bi(n,t,void 0),Bt(e,a,u,t)}if(x=(u&e.childLanes)!==0,Ye||x){if(t=Te,t!==null){switch(u&-u){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(t.suspendedLanes|u))!==0?0:s,s!==0&&s!==n.retryLane&&(n.retryLane=s,Ma(e,s),Ca(t,e,s,-1))}return cn(),t=Bi(Error(l(421))),Bt(e,a,u,t)}return s.data==="$?"?(a.flags|=128,a.child=e.child,a=Pp.bind(null,e),s._reactRetry=a,null):(e=n.treeContext,sa=Wa(s.nextSibling),ta=a,je=!0,xa=null,e!==null&&(da[ca++]=Ra,da[ca++]=za,da[ca++]=fo,Ra=e.id,za=e.overflow,fo=a),a=Hi(a,t.children),a.flags|=4096,a)}function rc(e,a,r){e.lanes|=a;var t=e.alternate;t!==null&&(t.lanes|=a),wi(e.return,a,r)}function Qi(e,a,r,t,s){var n=e.memoizedState;n===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:t,tail:r,tailMode:s}:(n.isBackwards=a,n.rendering=null,n.renderingStartTime=0,n.last=t,n.tail=r,n.tailMode=s)}function tc(e,a,r){var t=a.pendingProps,s=t.revealOrder,n=t.tail;if(Qe(e,a,t.children,r),t=we.current,(t&2)!==0)t=t&1|2,a.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rc(e,r,a);else if(e.tag===19)rc(e,r,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}if(ye(we,t),(a.mode&1)===0)a.memoizedState=null;else switch(s){case"forwards":for(r=a.child,s=null;r!==null;)e=r.alternate,e!==null&&Dt(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=a.child,a.child=null):(s=r.sibling,r.sibling=null),Qi(a,!1,s,r,n);break;case"backwards":for(r=null,s=a.child,a.child=null;s!==null;){if(e=s.alternate,e!==null&&Dt(e)===null){a.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}Qi(a,!0,r,null,n);break;case"together":Qi(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function qt(e,a){(a.mode&1)===0&&e!==null&&(e.alternate=null,a.alternate=null,a.flags|=2)}function Ia(e,a,r){if(e!==null&&(a.dependencies=e.dependencies),yo|=a.lanes,(r&a.childLanes)===0)return null;if(e!==null&&a.child!==e.child)throw Error(l(153));if(a.child!==null){for(e=a.child,r=oo(e,e.pendingProps),a.child=r,r.return=a;e.sibling!==null;)e=e.sibling,r=r.sibling=oo(e,e.pendingProps),r.return=a;r.sibling=null}return a.child}function gp(e,a,r){switch(a.tag){case 3:ec(a),Go();break;case 5:vd(a);break;case 1:Xe(a.type)&&wt(a);break;case 4:Pi(a,a.stateNode.containerInfo);break;case 10:var t=a.type._context,s=a.memoizedProps.value;ye(Lt,t._currentValue),t._currentValue=s;break;case 13:if(t=a.memoizedState,t!==null)return t.dehydrated!==null?(ye(we,we.current&1),a.flags|=128,null):(r&a.child.childLanes)!==0?oc(e,a,r):(ye(we,we.current&1),e=Ia(e,a,r),e!==null?e.sibling:null);ye(we,we.current&1);break;case 19:if(t=(r&a.childLanes)!==0,(e.flags&128)!==0){if(t)return tc(e,a,r);a.flags|=128}if(s=a.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ye(we,we.current),t)break;return null;case 22:case 23:return a.lanes=0,Xd(e,a,r)}return Ia(e,a,r)}var sc,Ji,ic,nc;sc=function(e,a){for(var r=a.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===a)break;for(;r.sibling===null;){if(r.return===null||r.return===a)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Ji=function(){},ic=function(e,a,r,t){var s=e.memoizedProps;if(s!==t){e=a.stateNode,xo(Na.current);var n=null;switch(r){case"input":s=ws(e,s),t=ws(e,t),n=[];break;case"select":s=W({},s,{value:void 0}),t=W({},t,{value:void 0}),n=[];break;case"textarea":s=Ps(e,s),t=Ps(e,t),n=[];break;default:typeof s.onClick!="function"&&typeof t.onClick=="function"&&(e.onclick=Ct)}As(r,t);var u;r=null;for(R in s)if(!t.hasOwnProperty(R)&&s.hasOwnProperty(R)&&s[R]!=null)if(R==="style"){var x=s[R];for(u in x)x.hasOwnProperty(u)&&(r||(r={}),r[u]="")}else R!=="dangerouslySetInnerHTML"&&R!=="children"&&R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&R!=="autoFocus"&&(c.hasOwnProperty(R)?n||(n=[]):(n=n||[]).push(R,null));for(R in t){var b=t[R];if(x=s!=null?s[R]:void 0,t.hasOwnProperty(R)&&b!==x&&(b!=null||x!=null))if(R==="style")if(x){for(u in x)!x.hasOwnProperty(u)||b&&b.hasOwnProperty(u)||(r||(r={}),r[u]="");for(u in b)b.hasOwnProperty(u)&&x[u]!==b[u]&&(r||(r={}),r[u]=b[u])}else r||(n||(n=[]),n.push(R,r)),r=b;else R==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,x=x?x.__html:void 0,b!=null&&x!==b&&(n=n||[]).push(R,b)):R==="children"?typeof b!="string"&&typeof b!="number"||(n=n||[]).push(R,""+b):R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&(c.hasOwnProperty(R)?(b!=null&&R==="onScroll"&&be("scroll",e),n||x===b||(n=[])):(n=n||[]).push(R,b))}r&&(n=n||[]).push("style",r);var R=n;(a.updateQueue=R)&&(a.flags|=4)}},nc=function(e,a,r,t){r!==t&&(a.flags|=4)};function $r(e,a){if(!je)switch(e.tailMode){case"hidden":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function Ge(e){var a=e.alternate!==null&&e.alternate.child===e.child,r=0,t=0;if(a)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,t|=s.subtreeFlags&14680064,t|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,t|=s.subtreeFlags,t|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=t,e.childLanes=r,a}function hp(e,a,r){var t=a.pendingProps;switch(xi(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(a),null;case 1:return Xe(a.type)&&jt(),Ge(a),null;case 3:return t=a.stateNode,Ko(),Ce(Ke),Ce(Ue),Li(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Et(a)?a.flags|=4:e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,xa!==null&&(nn(xa),xa=null))),Ji(e,a),Ge(a),null;case 5:Ei(a);var s=xo(Ir.current);if(r=a.type,e!==null&&a.stateNode!=null)ic(e,a,r,t,s),e.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!t){if(a.stateNode===null)throw Error(l(166));return Ge(a),null}if(e=xo(Na.current),Et(a)){t=a.stateNode,r=a.type;var n=a.memoizedProps;switch(t[wa]=a,t[Lr]=n,e=(a.mode&1)!==0,r){case"dialog":be("cancel",t),be("close",t);break;case"iframe":case"object":case"embed":be("load",t);break;case"video":case"audio":for(s=0;s<Pr.length;s++)be(Pr[s],t);break;case"source":be("error",t);break;case"img":case"image":case"link":be("error",t),be("load",t);break;case"details":be("toggle",t);break;case"input":Bn(t,n),be("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!n.multiple},be("invalid",t);break;case"textarea":Un(t,n),be("invalid",t)}As(r,n),s=null;for(var u in n)if(n.hasOwnProperty(u)){var x=n[u];u==="children"?typeof x=="string"?t.textContent!==x&&(n.suppressHydrationWarning!==!0&&bt(t.textContent,x,e),s=["children",x]):typeof x=="number"&&t.textContent!==""+x&&(n.suppressHydrationWarning!==!0&&bt(t.textContent,x,e),s=["children",""+x]):c.hasOwnProperty(u)&&x!=null&&u==="onScroll"&&be("scroll",t)}switch(r){case"input":Xr(t),Vn(t,n,!0);break;case"textarea":Xr(t),Gn(t);break;case"select":case"option":break;default:typeof n.onClick=="function"&&(t.onclick=Ct)}t=s,a.updateQueue=t,t!==null&&(a.flags|=4)}else{u=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hn(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof t.is=="string"?e=u.createElement(r,{is:t.is}):(e=u.createElement(r),r==="select"&&(u=e,t.multiple?u.multiple=!0:t.size&&(u.size=t.size))):e=u.createElementNS(e,r),e[wa]=a,e[Lr]=t,sc(e,a,!1,!1),a.stateNode=e;e:{switch(u=Ls(r,t),r){case"dialog":be("cancel",e),be("close",e),s=t;break;case"iframe":case"object":case"embed":be("load",e),s=t;break;case"video":case"audio":for(s=0;s<Pr.length;s++)be(Pr[s],e);s=t;break;case"source":be("error",e),s=t;break;case"img":case"image":case"link":be("error",e),be("load",e),s=t;break;case"details":be("toggle",e),s=t;break;case"input":Bn(e,t),s=ws(e,t),be("invalid",e);break;case"option":s=t;break;case"select":e._wrapperState={wasMultiple:!!t.multiple},s=W({},t,{value:void 0}),be("invalid",e);break;case"textarea":Un(e,t),s=Ps(e,t),be("invalid",e);break;default:s=t}As(r,s),x=s;for(n in x)if(x.hasOwnProperty(n)){var b=x[n];n==="style"?Kn(e,b):n==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,b!=null&&Qn(e,b)):n==="children"?typeof b=="string"?(r!=="textarea"||b!=="")&&lr(e,b):typeof b=="number"&&lr(e,""+b):n!=="suppressContentEditableWarning"&&n!=="suppressHydrationWarning"&&n!=="autoFocus"&&(c.hasOwnProperty(n)?b!=null&&n==="onScroll"&&be("scroll",e):b!=null&&D(e,n,b,u))}switch(r){case"input":Xr(e),Vn(e,t,!1);break;case"textarea":Xr(e),Gn(e);break;case"option":t.value!=null&&e.setAttribute("value",""+he(t.value));break;case"select":e.multiple=!!t.multiple,n=t.value,n!=null?Ro(e,!!t.multiple,n,!1):t.defaultValue!=null&&Ro(e,!!t.multiple,t.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Ct)}switch(r){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}}t&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return Ge(a),null;case 6:if(e&&a.stateNode!=null)nc(e,a,e.memoizedProps,t);else{if(typeof t!="string"&&a.stateNode===null)throw Error(l(166));if(r=xo(Ir.current),xo(Na.current),Et(a)){if(t=a.stateNode,r=a.memoizedProps,t[wa]=a,(n=t.nodeValue!==r)&&(e=ta,e!==null))switch(e.tag){case 3:bt(t.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&bt(t.nodeValue,r,(e.mode&1)!==0)}n&&(a.flags|=4)}else t=(r.nodeType===9?r:r.ownerDocument).createTextNode(t),t[wa]=a,a.stateNode=t}return Ge(a),null;case 13:if(Ce(we),t=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&sa!==null&&(a.mode&1)!==0&&(a.flags&128)===0)cd(),Go(),a.flags|=98560,n=!1;else if(n=Et(a),t!==null&&t.dehydrated!==null){if(e===null){if(!n)throw Error(l(318));if(n=a.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(l(317));n[wa]=a}else Go(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ge(a),n=!1}else xa!==null&&(nn(xa),xa=null),n=!0;if(!n)return a.flags&65536?a:null}return(a.flags&128)!==0?(a.lanes=r,a):(t=t!==null,t!==(e!==null&&e.memoizedState!==null)&&t&&(a.child.flags|=8192,(a.mode&1)!==0&&(e===null||(we.current&1)!==0?De===0&&(De=3):cn())),a.updateQueue!==null&&(a.flags|=4),Ge(a),null);case 4:return Ko(),Ji(e,a),e===null&&Er(a.stateNode.containerInfo),Ge(a),null;case 10:return ji(a.type._context),Ge(a),null;case 17:return Xe(a.type)&&jt(),Ge(a),null;case 19:if(Ce(we),n=a.memoizedState,n===null)return Ge(a),null;if(t=(a.flags&128)!==0,u=n.rendering,u===null)if(t)$r(n,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(u=Dt(e),u!==null){for(a.flags|=128,$r(n,!1),t=u.updateQueue,t!==null&&(a.updateQueue=t,a.flags|=4),a.subtreeFlags=0,t=r,r=a.child;r!==null;)n=r,e=t,n.flags&=14680066,u=n.alternate,u===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=u.childLanes,n.lanes=u.lanes,n.child=u.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=u.memoizedProps,n.memoizedState=u.memoizedState,n.updateQueue=u.updateQueue,n.type=u.type,e=u.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ye(we,we.current&1|2),a.child}e=e.sibling}n.tail!==null&&Le()>er&&(a.flags|=128,t=!0,$r(n,!1),a.lanes=4194304)}else{if(!t)if(e=Dt(u),e!==null){if(a.flags|=128,t=!0,r=e.updateQueue,r!==null&&(a.updateQueue=r,a.flags|=4),$r(n,!0),n.tail===null&&n.tailMode==="hidden"&&!u.alternate&&!je)return Ge(a),null}else 2*Le()-n.renderingStartTime>er&&r!==1073741824&&(a.flags|=128,t=!0,$r(n,!1),a.lanes=4194304);n.isBackwards?(u.sibling=a.child,a.child=u):(r=n.last,r!==null?r.sibling=u:a.child=u,n.last=u)}return n.tail!==null?(a=n.tail,n.rendering=a,n.tail=a.sibling,n.renderingStartTime=Le(),a.sibling=null,r=we.current,ye(we,t?r&1|2:r&1),a):(Ge(a),null);case 22:case 23:return dn(),t=a.memoizedState!==null,e!==null&&e.memoizedState!==null!==t&&(a.flags|=8192),t&&(a.mode&1)!==0?(ia&1073741824)!==0&&(Ge(a),a.subtreeFlags&6&&(a.flags|=8192)):Ge(a),null;case 24:return null;case 25:return null}throw Error(l(156,a.tag))}function xp(e,a){switch(xi(a),a.tag){case 1:return Xe(a.type)&&jt(),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Ko(),Ce(Ke),Ce(Ue),Li(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 5:return Ei(a),null;case 13:if(Ce(we),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(l(340));Go()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return Ce(we),null;case 4:return Ko(),null;case 10:return ji(a.type._context),null;case 22:case 23:return dn(),null;case 24:return null;default:return null}}var Vt=!1,He=!1,vp=typeof WeakSet=="function"?WeakSet:Set,X=null;function Yo(e,a){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(t){Ee(e,a,t)}else r.current=null}function Ki(e,a,r){try{r()}catch(t){Ee(e,a,t)}}var lc=!1;function yp(e,a){if(li=dt,e=$l(),ei(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var t=r.getSelection&&r.getSelection();if(t&&t.rangeCount!==0){r=t.anchorNode;var s=t.anchorOffset,n=t.focusNode;t=t.focusOffset;try{r.nodeType,n.nodeType}catch{r=null;break e}var u=0,x=-1,b=-1,R=0,q=0,U=e,B=null;a:for(;;){for(var K;U!==r||s!==0&&U.nodeType!==3||(x=u+s),U!==n||t!==0&&U.nodeType!==3||(b=u+t),U.nodeType===3&&(u+=U.nodeValue.length),(K=U.firstChild)!==null;)B=U,U=K;for(;;){if(U===e)break a;if(B===r&&++R===s&&(x=u),B===n&&++q===t&&(b=u),(K=U.nextSibling)!==null)break;U=B,B=U.parentNode}U=K}r=x===-1||b===-1?null:{start:x,end:b}}else r=null}r=r||{start:0,end:0}}else r=null;for(di={focusedElem:e,selectionRange:r},dt=!1,X=a;X!==null;)if(a=X,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,X=e;else for(;X!==null;){a=X;try{var Y=a.alternate;if((a.flags&1024)!==0)switch(a.tag){case 0:case 11:case 15:break;case 1:if(Y!==null){var ee=Y.memoizedProps,Re=Y.memoizedState,E=a.stateNode,j=E.getSnapshotBeforeUpdate(a.elementType===a.type?ee:va(a.type,ee),Re);E.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var L=a.stateNode.containerInfo;L.nodeType===1?L.textContent="":L.nodeType===9&&L.documentElement&&L.removeChild(L.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(G){Ee(a,a.return,G)}if(e=a.sibling,e!==null){e.return=a.return,X=e;break}X=a.return}return Y=lc,lc=!1,Y}function Br(e,a,r){var t=a.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var s=t=t.next;do{if((s.tag&e)===e){var n=s.destroy;s.destroy=void 0,n!==void 0&&Ki(a,r,n)}s=s.next}while(s!==t)}}function Ut(e,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var r=a=a.next;do{if((r.tag&e)===e){var t=r.create;r.destroy=t()}r=r.next}while(r!==a)}}function Xi(e){var a=e.ref;if(a!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof a=="function"?a(e):a.current=e}}function dc(e){var a=e.alternate;a!==null&&(e.alternate=null,dc(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&(delete a[wa],delete a[Lr],delete a[pi],delete a[ap],delete a[op])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cc(e){return e.tag===5||e.tag===3||e.tag===4}function uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yi(e,a,r){var t=e.tag;if(t===5||t===6)e=e.stateNode,a?r.nodeType===8?r.parentNode.insertBefore(e,a):r.insertBefore(e,a):(r.nodeType===8?(a=r.parentNode,a.insertBefore(e,r)):(a=r,a.appendChild(e)),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=Ct));else if(t!==4&&(e=e.child,e!==null))for(Yi(e,a,r),e=e.sibling;e!==null;)Yi(e,a,r),e=e.sibling}function Zi(e,a,r){var t=e.tag;if(t===5||t===6)e=e.stateNode,a?r.insertBefore(e,a):r.appendChild(e);else if(t!==4&&(e=e.child,e!==null))for(Zi(e,a,r),e=e.sibling;e!==null;)Zi(e,a,r),e=e.sibling}var qe=null,ya=!1;function Xa(e,a,r){for(r=r.child;r!==null;)mc(e,a,r),r=r.sibling}function mc(e,a,r){if(ja&&typeof ja.onCommitFiberUnmount=="function")try{ja.onCommitFiberUnmount(rt,r)}catch{}switch(r.tag){case 5:He||Yo(r,a);case 6:var t=qe,s=ya;qe=null,Xa(e,a,r),qe=t,ya=s,qe!==null&&(ya?(e=qe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):qe.removeChild(r.stateNode));break;case 18:qe!==null&&(ya?(e=qe,r=r.stateNode,e.nodeType===8?mi(e.parentNode,r):e.nodeType===1&&mi(e,r),yr(e)):mi(qe,r.stateNode));break;case 4:t=qe,s=ya,qe=r.stateNode.containerInfo,ya=!0,Xa(e,a,r),qe=t,ya=s;break;case 0:case 11:case 14:case 15:if(!He&&(t=r.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){s=t=t.next;do{var n=s,u=n.destroy;n=n.tag,u!==void 0&&((n&2)!==0||(n&4)!==0)&&Ki(r,a,u),s=s.next}while(s!==t)}Xa(e,a,r);break;case 1:if(!He&&(Yo(r,a),t=r.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=r.memoizedProps,t.state=r.memoizedState,t.componentWillUnmount()}catch(x){Ee(r,a,x)}Xa(e,a,r);break;case 21:Xa(e,a,r);break;case 22:r.mode&1?(He=(t=He)||r.memoizedState!==null,Xa(e,a,r),He=t):Xa(e,a,r);break;default:Xa(e,a,r)}}function pc(e){var a=e.updateQueue;if(a!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new vp),a.forEach(function(t){var s=Ep.bind(null,e,t);r.has(t)||(r.add(t),t.then(s,s))})}}function ba(e,a){var r=a.deletions;if(r!==null)for(var t=0;t<r.length;t++){var s=r[t];try{var n=e,u=a,x=u;e:for(;x!==null;){switch(x.tag){case 5:qe=x.stateNode,ya=!1;break e;case 3:qe=x.stateNode.containerInfo,ya=!0;break e;case 4:qe=x.stateNode.containerInfo,ya=!0;break e}x=x.return}if(qe===null)throw Error(l(160));mc(n,u,s),qe=null,ya=!1;var b=s.alternate;b!==null&&(b.return=null),s.return=null}catch(R){Ee(s,a,R)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)fc(a,e),a=a.sibling}function fc(e,a){var r=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ba(a,e),Pa(e),t&4){try{Br(3,e,e.return),Ut(3,e)}catch(ee){Ee(e,e.return,ee)}try{Br(5,e,e.return)}catch(ee){Ee(e,e.return,ee)}}break;case 1:ba(a,e),Pa(e),t&512&&r!==null&&Yo(r,r.return);break;case 5:if(ba(a,e),Pa(e),t&512&&r!==null&&Yo(r,r.return),e.flags&32){var s=e.stateNode;try{lr(s,"")}catch(ee){Ee(e,e.return,ee)}}if(t&4&&(s=e.stateNode,s!=null)){var n=e.memoizedProps,u=r!==null?r.memoizedProps:n,x=e.type,b=e.updateQueue;if(e.updateQueue=null,b!==null)try{x==="input"&&n.type==="radio"&&n.name!=null&&qn(s,n),Ls(x,u);var R=Ls(x,n);for(u=0;u<b.length;u+=2){var q=b[u],U=b[u+1];q==="style"?Kn(s,U):q==="dangerouslySetInnerHTML"?Qn(s,U):q==="children"?lr(s,U):D(s,q,U,R)}switch(x){case"input":Ns(s,n);break;case"textarea":Wn(s,n);break;case"select":var B=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!n.multiple;var K=n.value;K!=null?Ro(s,!!n.multiple,K,!1):B!==!!n.multiple&&(n.defaultValue!=null?Ro(s,!!n.multiple,n.defaultValue,!0):Ro(s,!!n.multiple,n.multiple?[]:"",!1))}s[Lr]=n}catch(ee){Ee(e,e.return,ee)}}break;case 6:if(ba(a,e),Pa(e),t&4){if(e.stateNode===null)throw Error(l(162));s=e.stateNode,n=e.memoizedProps;try{s.nodeValue=n}catch(ee){Ee(e,e.return,ee)}}break;case 3:if(ba(a,e),Pa(e),t&4&&r!==null&&r.memoizedState.isDehydrated)try{yr(a.containerInfo)}catch(ee){Ee(e,e.return,ee)}break;case 4:ba(a,e),Pa(e);break;case 13:ba(a,e),Pa(e),s=e.child,s.flags&8192&&(n=s.memoizedState!==null,s.stateNode.isHidden=n,!n||s.alternate!==null&&s.alternate.memoizedState!==null||(on=Le())),t&4&&pc(e);break;case 22:if(q=r!==null&&r.memoizedState!==null,e.mode&1?(He=(R=He)||q,ba(a,e),He=R):ba(a,e),Pa(e),t&8192){if(R=e.memoizedState!==null,(e.stateNode.isHidden=R)&&!q&&(e.mode&1)!==0)for(X=e,q=e.child;q!==null;){for(U=X=q;X!==null;){switch(B=X,K=B.child,B.tag){case 0:case 11:case 14:case 15:Br(4,B,B.return);break;case 1:Yo(B,B.return);var Y=B.stateNode;if(typeof Y.componentWillUnmount=="function"){t=B,r=B.return;try{a=t,Y.props=a.memoizedProps,Y.state=a.memoizedState,Y.componentWillUnmount()}catch(ee){Ee(t,r,ee)}}break;case 5:Yo(B,B.return);break;case 22:if(B.memoizedState!==null){xc(U);continue}}K!==null?(K.return=B,X=K):xc(U)}q=q.sibling}e:for(q=null,U=e;;){if(U.tag===5){if(q===null){q=U;try{s=U.stateNode,R?(n=s.style,typeof n.setProperty=="function"?n.setProperty("display","none","important"):n.display="none"):(x=U.stateNode,b=U.memoizedProps.style,u=b!=null&&b.hasOwnProperty("display")?b.display:null,x.style.display=Jn("display",u))}catch(ee){Ee(e,e.return,ee)}}}else if(U.tag===6){if(q===null)try{U.stateNode.nodeValue=R?"":U.memoizedProps}catch(ee){Ee(e,e.return,ee)}}else if((U.tag!==22&&U.tag!==23||U.memoizedState===null||U===e)&&U.child!==null){U.child.return=U,U=U.child;continue}if(U===e)break e;for(;U.sibling===null;){if(U.return===null||U.return===e)break e;q===U&&(q=null),U=U.return}q===U&&(q=null),U.sibling.return=U.return,U=U.sibling}}break;case 19:ba(a,e),Pa(e),t&4&&pc(e);break;case 21:break;default:ba(a,e),Pa(e)}}function Pa(e){var a=e.flags;if(a&2){try{e:{for(var r=e.return;r!==null;){if(cc(r)){var t=r;break e}r=r.return}throw Error(l(160))}switch(t.tag){case 5:var s=t.stateNode;t.flags&32&&(lr(s,""),t.flags&=-33);var n=uc(e);Zi(e,n,s);break;case 3:case 4:var u=t.stateNode.containerInfo,x=uc(e);Yi(e,x,u);break;default:throw Error(l(161))}}catch(b){Ee(e,e.return,b)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function bp(e,a,r){X=e,gc(e)}function gc(e,a,r){for(var t=(e.mode&1)!==0;X!==null;){var s=X,n=s.child;if(s.tag===22&&t){var u=s.memoizedState!==null||Vt;if(!u){var x=s.alternate,b=x!==null&&x.memoizedState!==null||He;x=Vt;var R=He;if(Vt=u,(He=b)&&!R)for(X=s;X!==null;)u=X,b=u.child,u.tag===22&&u.memoizedState!==null?vc(s):b!==null?(b.return=u,X=b):vc(s);for(;n!==null;)X=n,gc(n),n=n.sibling;X=s,Vt=x,He=R}hc(e)}else(s.subtreeFlags&8772)!==0&&n!==null?(n.return=s,X=n):hc(e)}}function hc(e){for(;X!==null;){var a=X;if((a.flags&8772)!==0){var r=a.alternate;try{if((a.flags&8772)!==0)switch(a.tag){case 0:case 11:case 15:He||Ut(5,a);break;case 1:var t=a.stateNode;if(a.flags&4&&!He)if(r===null)t.componentDidMount();else{var s=a.elementType===a.type?r.memoizedProps:va(a.type,r.memoizedProps);t.componentDidUpdate(s,r.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var n=a.updateQueue;n!==null&&xd(a,n,t);break;case 3:var u=a.updateQueue;if(u!==null){if(r=null,a.child!==null)switch(a.child.tag){case 5:r=a.child.stateNode;break;case 1:r=a.child.stateNode}xd(a,u,r)}break;case 5:var x=a.stateNode;if(r===null&&a.flags&4){r=x;var b=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":b.autoFocus&&r.focus();break;case"img":b.src&&(r.src=b.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var R=a.alternate;if(R!==null){var q=R.memoizedState;if(q!==null){var U=q.dehydrated;U!==null&&yr(U)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}He||a.flags&512&&Xi(a)}catch(B){Ee(a,a.return,B)}}if(a===e){X=null;break}if(r=a.sibling,r!==null){r.return=a.return,X=r;break}X=a.return}}function xc(e){for(;X!==null;){var a=X;if(a===e){X=null;break}var r=a.sibling;if(r!==null){r.return=a.return,X=r;break}X=a.return}}function vc(e){for(;X!==null;){var a=X;try{switch(a.tag){case 0:case 11:case 15:var r=a.return;try{Ut(4,a)}catch(b){Ee(a,r,b)}break;case 1:var t=a.stateNode;if(typeof t.componentDidMount=="function"){var s=a.return;try{t.componentDidMount()}catch(b){Ee(a,s,b)}}var n=a.return;try{Xi(a)}catch(b){Ee(a,n,b)}break;case 5:var u=a.return;try{Xi(a)}catch(b){Ee(a,u,b)}}}catch(b){Ee(a,a.return,b)}if(a===e){X=null;break}var x=a.sibling;if(x!==null){x.return=a.return,X=x;break}X=a.return}}var Cp=Math.ceil,Wt=$.ReactCurrentDispatcher,en=$.ReactCurrentOwner,pa=$.ReactCurrentBatchConfig,me=0,Te=null,ze=null,Ve=0,ia=0,Zo=Ga(0),De=0,qr=null,yo=0,Gt=0,an=0,Vr=null,Ze=null,on=0,er=1/0,Fa=null,Ht=!1,rn=null,Ya=null,Qt=!1,Za=null,Jt=0,Ur=0,tn=null,Kt=-1,Xt=0;function Je(){return(me&6)!==0?Le():Kt!==-1?Kt:Kt=Le()}function eo(e){return(e.mode&1)===0?1:(me&2)!==0&&Ve!==0?Ve&-Ve:tp.transition!==null?(Xt===0&&(Xt=ul()),Xt):(e=xe,e!==0||(e=window.event,e=e===void 0?16:bl(e.type)),e)}function Ca(e,a,r,t){if(50<Ur)throw Ur=0,tn=null,Error(l(185));fr(e,r,t),((me&2)===0||e!==Te)&&(e===Te&&((me&2)===0&&(Gt|=r),De===4&&ao(e,Ve)),ea(e,t),r===1&&me===0&&(a.mode&1)===0&&(er=Le()+500,Nt&&Qa()))}function ea(e,a){var r=e.callbackNode;tm(e,a);var t=it(e,e===Te?Ve:0);if(t===0)r!==null&&ll(r),e.callbackNode=null,e.callbackPriority=0;else if(a=t&-t,e.callbackPriority!==a){if(r!=null&&ll(r),a===1)e.tag===0?rp(bc.bind(null,e)):sd(bc.bind(null,e)),Zm(function(){(me&6)===0&&Qa()}),r=null;else{switch(ml(t)){case 1:r=_s;break;case 4:r=dl;break;case 16:r=ot;break;case 536870912:r=cl;break;default:r=ot}r=Ec(r,yc.bind(null,e))}e.callbackPriority=a,e.callbackNode=r}}function yc(e,a){if(Kt=-1,Xt=0,(me&6)!==0)throw Error(l(327));var r=e.callbackNode;if(ar()&&e.callbackNode!==r)return null;var t=it(e,e===Te?Ve:0);if(t===0)return null;if((t&30)!==0||(t&e.expiredLanes)!==0||a)a=Yt(e,t);else{a=t;var s=me;me|=2;var n=Sc();(Te!==e||Ve!==a)&&(Fa=null,er=Le()+500,Co(e,a));do try{wp();break}catch(x){Cc(e,x)}while(!0);Si(),Wt.current=n,me=s,ze!==null?a=0:(Te=null,Ve=0,a=De)}if(a!==0){if(a===2&&(s=Ts(e),s!==0&&(t=s,a=sn(e,s))),a===1)throw r=qr,Co(e,0),ao(e,t),ea(e,Le()),r;if(a===6)ao(e,t);else{if(s=e.current.alternate,(t&30)===0&&!Sp(s)&&(a=Yt(e,t),a===2&&(n=Ts(e),n!==0&&(t=n,a=sn(e,n))),a===1))throw r=qr,Co(e,0),ao(e,t),ea(e,Le()),r;switch(e.finishedWork=s,e.finishedLanes=t,a){case 0:case 1:throw Error(l(345));case 2:So(e,Ze,Fa);break;case 3:if(ao(e,t),(t&130023424)===t&&(a=on+500-Le(),10<a)){if(it(e,0)!==0)break;if(s=e.suspendedLanes,(s&t)!==t){Je(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=ui(So.bind(null,e,Ze,Fa),a);break}So(e,Ze,Fa);break;case 4:if(ao(e,t),(t&4194240)===t)break;for(a=e.eventTimes,s=-1;0<t;){var u=31-ga(t);n=1<<u,u=a[u],u>s&&(s=u),t&=~n}if(t=s,t=Le()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*Cp(t/1960))-t,10<t){e.timeoutHandle=ui(So.bind(null,e,Ze,Fa),t);break}So(e,Ze,Fa);break;case 5:So(e,Ze,Fa);break;default:throw Error(l(329))}}}return ea(e,Le()),e.callbackNode===r?yc.bind(null,e):null}function sn(e,a){var r=Vr;return e.current.memoizedState.isDehydrated&&(Co(e,a).flags|=256),e=Yt(e,a),e!==2&&(a=Ze,Ze=r,a!==null&&nn(a)),e}function nn(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function Sp(e){for(var a=e;;){if(a.flags&16384){var r=a.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var t=0;t<r.length;t++){var s=r[t],n=s.getSnapshot;s=s.value;try{if(!ha(n(),s))return!1}catch{return!1}}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function ao(e,a){for(a&=~an,a&=~Gt,e.suspendedLanes|=a,e.pingedLanes&=~a,e=e.expirationTimes;0<a;){var r=31-ga(a),t=1<<r;e[r]=-1,a&=~t}}function bc(e){if((me&6)!==0)throw Error(l(327));ar();var a=it(e,0);if((a&1)===0)return ea(e,Le()),null;var r=Yt(e,a);if(e.tag!==0&&r===2){var t=Ts(e);t!==0&&(a=t,r=sn(e,t))}if(r===1)throw r=qr,Co(e,0),ao(e,a),ea(e,Le()),r;if(r===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=a,So(e,Ze,Fa),ea(e,Le()),null}function ln(e,a){var r=me;me|=1;try{return e(a)}finally{me=r,me===0&&(er=Le()+500,Nt&&Qa())}}function bo(e){Za!==null&&Za.tag===0&&(me&6)===0&&ar();var a=me;me|=1;var r=pa.transition,t=xe;try{if(pa.transition=null,xe=1,e)return e()}finally{xe=t,pa.transition=r,me=a,(me&6)===0&&Qa()}}function dn(){ia=Zo.current,Ce(Zo)}function Co(e,a){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Ym(r)),ze!==null)for(r=ze.return;r!==null;){var t=r;switch(xi(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&jt();break;case 3:Ko(),Ce(Ke),Ce(Ue),Li();break;case 5:Ei(t);break;case 4:Ko();break;case 13:Ce(we);break;case 19:Ce(we);break;case 10:ji(t.type._context);break;case 22:case 23:dn()}r=r.return}if(Te=e,ze=e=oo(e.current,null),Ve=ia=a,De=0,qr=null,an=Gt=yo=0,Ze=Vr=null,ho!==null){for(a=0;a<ho.length;a++)if(r=ho[a],t=r.interleaved,t!==null){r.interleaved=null;var s=t.next,n=r.pending;if(n!==null){var u=n.next;n.next=s,t.next=u}r.pending=t}ho=null}return e}function Cc(e,a){do{var r=ze;try{if(Si(),It.current=Ot,Ft){for(var t=Ne.memoizedState;t!==null;){var s=t.queue;s!==null&&(s.pending=null),t=t.next}Ft=!1}if(vo=0,_e=Me=Ne=null,Fr=!1,_r=0,en.current=null,r===null||r.return===null){De=1,qr=a,ze=null;break}e:{var n=e,u=r.return,x=r,b=a;if(a=Ve,x.flags|=32768,b!==null&&typeof b=="object"&&typeof b.then=="function"){var R=b,q=x,U=q.tag;if((q.mode&1)===0&&(U===0||U===11||U===15)){var B=q.alternate;B?(q.updateQueue=B.updateQueue,q.memoizedState=B.memoizedState,q.lanes=B.lanes):(q.updateQueue=null,q.memoizedState=null)}var K=Gd(u);if(K!==null){K.flags&=-257,Hd(K,u,x,n,a),K.mode&1&&Wd(n,R,a),a=K,b=R;var Y=a.updateQueue;if(Y===null){var ee=new Set;ee.add(b),a.updateQueue=ee}else Y.add(b);break e}else{if((a&1)===0){Wd(n,R,a),cn();break e}b=Error(l(426))}}else if(je&&x.mode&1){var Re=Gd(u);if(Re!==null){(Re.flags&65536)===0&&(Re.flags|=256),Hd(Re,u,x,n,a),bi(Xo(b,x));break e}}n=b=Xo(b,x),De!==4&&(De=2),Vr===null?Vr=[n]:Vr.push(n),n=u;do{switch(n.tag){case 3:n.flags|=65536,a&=-a,n.lanes|=a;var E=Vd(n,b,a);hd(n,E);break e;case 1:x=b;var j=n.type,L=n.stateNode;if((n.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(Ya===null||!Ya.has(L)))){n.flags|=65536,a&=-a,n.lanes|=a;var G=Ud(n,x,a);hd(n,G);break e}}n=n.return}while(n!==null)}wc(r)}catch(oe){a=oe,ze===r&&r!==null&&(ze=r=r.return);continue}break}while(!0)}function Sc(){var e=Wt.current;return Wt.current=Ot,e===null?Ot:e}function cn(){(De===0||De===3||De===2)&&(De=4),Te===null||(yo&268435455)===0&&(Gt&268435455)===0||ao(Te,Ve)}function Yt(e,a){var r=me;me|=2;var t=Sc();(Te!==e||Ve!==a)&&(Fa=null,Co(e,a));do try{jp();break}catch(s){Cc(e,s)}while(!0);if(Si(),me=r,Wt.current=t,ze!==null)throw Error(l(261));return Te=null,Ve=0,De}function jp(){for(;ze!==null;)jc(ze)}function wp(){for(;ze!==null&&!Ju();)jc(ze)}function jc(e){var a=Pc(e.alternate,e,ia);e.memoizedProps=e.pendingProps,a===null?wc(e):ze=a,en.current=null}function wc(e){var a=e;do{var r=a.alternate;if(e=a.return,(a.flags&32768)===0){if(r=hp(r,a,ia),r!==null){ze=r;return}}else{if(r=xp(r,a),r!==null){r.flags&=32767,ze=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{De=6,ze=null;return}}if(a=a.sibling,a!==null){ze=a;return}ze=a=e}while(a!==null);De===0&&(De=5)}function So(e,a,r){var t=xe,s=pa.transition;try{pa.transition=null,xe=1,Np(e,a,r,t)}finally{pa.transition=s,xe=t}return null}function Np(e,a,r,t){do ar();while(Za!==null);if((me&6)!==0)throw Error(l(327));r=e.finishedWork;var s=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var n=r.lanes|r.childLanes;if(sm(e,n),e===Te&&(ze=Te=null,Ve=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Qt||(Qt=!0,Ec(ot,function(){return ar(),null})),n=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||n){n=pa.transition,pa.transition=null;var u=xe;xe=1;var x=me;me|=4,en.current=null,yp(e,r),fc(r,e),Wm(di),dt=!!li,di=li=null,e.current=r,bp(r),Ku(),me=x,xe=u,pa.transition=n}else e.current=r;if(Qt&&(Qt=!1,Za=e,Jt=s),n=e.pendingLanes,n===0&&(Ya=null),Zu(r.stateNode),ea(e,Le()),a!==null)for(t=e.onRecoverableError,r=0;r<a.length;r++)s=a[r],t(s.value,{componentStack:s.stack,digest:s.digest});if(Ht)throw Ht=!1,e=rn,rn=null,e;return(Jt&1)!==0&&e.tag!==0&&ar(),n=e.pendingLanes,(n&1)!==0?e===tn?Ur++:(Ur=0,tn=e):Ur=0,Qa(),null}function ar(){if(Za!==null){var e=ml(Jt),a=pa.transition,r=xe;try{if(pa.transition=null,xe=16>e?16:e,Za===null)var t=!1;else{if(e=Za,Za=null,Jt=0,(me&6)!==0)throw Error(l(331));var s=me;for(me|=4,X=e.current;X!==null;){var n=X,u=n.child;if((X.flags&16)!==0){var x=n.deletions;if(x!==null){for(var b=0;b<x.length;b++){var R=x[b];for(X=R;X!==null;){var q=X;switch(q.tag){case 0:case 11:case 15:Br(8,q,n)}var U=q.child;if(U!==null)U.return=q,X=U;else for(;X!==null;){q=X;var B=q.sibling,K=q.return;if(dc(q),q===R){X=null;break}if(B!==null){B.return=K,X=B;break}X=K}}}var Y=n.alternate;if(Y!==null){var ee=Y.child;if(ee!==null){Y.child=null;do{var Re=ee.sibling;ee.sibling=null,ee=Re}while(ee!==null)}}X=n}}if((n.subtreeFlags&2064)!==0&&u!==null)u.return=n,X=u;else e:for(;X!==null;){if(n=X,(n.flags&2048)!==0)switch(n.tag){case 0:case 11:case 15:Br(9,n,n.return)}var E=n.sibling;if(E!==null){E.return=n.return,X=E;break e}X=n.return}}var j=e.current;for(X=j;X!==null;){u=X;var L=u.child;if((u.subtreeFlags&2064)!==0&&L!==null)L.return=u,X=L;else e:for(u=j;X!==null;){if(x=X,(x.flags&2048)!==0)try{switch(x.tag){case 0:case 11:case 15:Ut(9,x)}}catch(oe){Ee(x,x.return,oe)}if(x===u){X=null;break e}var G=x.sibling;if(G!==null){G.return=x.return,X=G;break e}X=x.return}}if(me=s,Qa(),ja&&typeof ja.onPostCommitFiberRoot=="function")try{ja.onPostCommitFiberRoot(rt,e)}catch{}t=!0}return t}finally{xe=r,pa.transition=a}}return!1}function Nc(e,a,r){a=Xo(r,a),a=Vd(e,a,1),e=Ka(e,a,1),a=Je(),e!==null&&(fr(e,1,a),ea(e,a))}function Ee(e,a,r){if(e.tag===3)Nc(e,e,r);else for(;a!==null;){if(a.tag===3){Nc(a,e,r);break}else if(a.tag===1){var t=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(Ya===null||!Ya.has(t))){e=Xo(r,e),e=Ud(a,e,1),a=Ka(a,e,1),e=Je(),a!==null&&(fr(a,1,e),ea(a,e));break}}a=a.return}}function kp(e,a,r){var t=e.pingCache;t!==null&&t.delete(a),a=Je(),e.pingedLanes|=e.suspendedLanes&r,Te===e&&(Ve&r)===r&&(De===4||De===3&&(Ve&130023424)===Ve&&500>Le()-on?Co(e,0):an|=r),ea(e,a)}function kc(e,a){a===0&&((e.mode&1)===0?a=1:(a=st,st<<=1,(st&130023424)===0&&(st=4194304)));var r=Je();e=Ma(e,a),e!==null&&(fr(e,a,r),ea(e,r))}function Pp(e){var a=e.memoizedState,r=0;a!==null&&(r=a.retryLane),kc(e,r)}function Ep(e,a){var r=0;switch(e.tag){case 13:var t=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:t=e.stateNode;break;default:throw Error(l(314))}t!==null&&t.delete(a),kc(e,r)}var Pc;Pc=function(e,a,r){if(e!==null)if(e.memoizedProps!==a.pendingProps||Ke.current)Ye=!0;else{if((e.lanes&r)===0&&(a.flags&128)===0)return Ye=!1,gp(e,a,r);Ye=(e.flags&131072)!==0}else Ye=!1,je&&(a.flags&1048576)!==0&&id(a,Pt,a.index);switch(a.lanes=0,a.tag){case 2:var t=a.type;qt(e,a),e=a.pendingProps;var s=Vo(a,Ue.current);Jo(a,r),s=Mi(null,a,t,e,s,r);var n=Di();return a.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,Xe(t)?(n=!0,wt(a)):n=!1,a.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,ki(a),s.updater=$t,a.stateNode=s,s._reactInternals=a,$i(a,t,e,r),a=Ui(null,a,t,!0,n,r)):(a.tag=0,je&&n&&hi(a),Qe(null,a,s,r),a=a.child),a;case 16:t=a.elementType;e:{switch(qt(e,a),e=a.pendingProps,s=t._init,t=s(t._payload),a.type=t,s=a.tag=Lp(t),e=va(t,e),s){case 0:a=Vi(null,a,t,e,r);break e;case 1:a=Zd(null,a,t,e,r);break e;case 11:a=Qd(null,a,t,e,r);break e;case 14:a=Jd(null,a,t,va(t.type,e),r);break e}throw Error(l(306,t,""))}return a;case 0:return t=a.type,s=a.pendingProps,s=a.elementType===t?s:va(t,s),Vi(e,a,t,s,r);case 1:return t=a.type,s=a.pendingProps,s=a.elementType===t?s:va(t,s),Zd(e,a,t,s,r);case 3:e:{if(ec(a),e===null)throw Error(l(387));t=a.pendingProps,n=a.memoizedState,s=n.element,gd(e,a),Mt(a,t,null,r);var u=a.memoizedState;if(t=u.element,n.isDehydrated)if(n={element:t,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},a.updateQueue.baseState=n,a.memoizedState=n,a.flags&256){s=Xo(Error(l(423)),a),a=ac(e,a,t,r,s);break e}else if(t!==s){s=Xo(Error(l(424)),a),a=ac(e,a,t,r,s);break e}else for(sa=Wa(a.stateNode.containerInfo.firstChild),ta=a,je=!0,xa=null,r=pd(a,null,t,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Go(),t===s){a=Ia(e,a,r);break e}Qe(e,a,t,r)}a=a.child}return a;case 5:return vd(a),e===null&&yi(a),t=a.type,s=a.pendingProps,n=e!==null?e.memoizedProps:null,u=s.children,ci(t,s)?u=null:n!==null&&ci(t,n)&&(a.flags|=32),Yd(e,a),Qe(e,a,u,r),a.child;case 6:return e===null&&yi(a),null;case 13:return oc(e,a,r);case 4:return Pi(a,a.stateNode.containerInfo),t=a.pendingProps,e===null?a.child=Ho(a,null,t,r):Qe(e,a,t,r),a.child;case 11:return t=a.type,s=a.pendingProps,s=a.elementType===t?s:va(t,s),Qd(e,a,t,s,r);case 7:return Qe(e,a,a.pendingProps,r),a.child;case 8:return Qe(e,a,a.pendingProps.children,r),a.child;case 12:return Qe(e,a,a.pendingProps.children,r),a.child;case 10:e:{if(t=a.type._context,s=a.pendingProps,n=a.memoizedProps,u=s.value,ye(Lt,t._currentValue),t._currentValue=u,n!==null)if(ha(n.value,u)){if(n.children===s.children&&!Ke.current){a=Ia(e,a,r);break e}}else for(n=a.child,n!==null&&(n.return=a);n!==null;){var x=n.dependencies;if(x!==null){u=n.child;for(var b=x.firstContext;b!==null;){if(b.context===t){if(n.tag===1){b=Da(-1,r&-r),b.tag=2;var R=n.updateQueue;if(R!==null){R=R.shared;var q=R.pending;q===null?b.next=b:(b.next=q.next,q.next=b),R.pending=b}}n.lanes|=r,b=n.alternate,b!==null&&(b.lanes|=r),wi(n.return,r,a),x.lanes|=r;break}b=b.next}}else if(n.tag===10)u=n.type===a.type?null:n.child;else if(n.tag===18){if(u=n.return,u===null)throw Error(l(341));u.lanes|=r,x=u.alternate,x!==null&&(x.lanes|=r),wi(u,r,a),u=n.sibling}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===a){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}Qe(e,a,s.children,r),a=a.child}return a;case 9:return s=a.type,t=a.pendingProps.children,Jo(a,r),s=ua(s),t=t(s),a.flags|=1,Qe(e,a,t,r),a.child;case 14:return t=a.type,s=va(t,a.pendingProps),s=va(t.type,s),Jd(e,a,t,s,r);case 15:return Kd(e,a,a.type,a.pendingProps,r);case 17:return t=a.type,s=a.pendingProps,s=a.elementType===t?s:va(t,s),qt(e,a),a.tag=1,Xe(t)?(e=!0,wt(a)):e=!1,Jo(a,r),Bd(a,t,s),$i(a,t,s,r),Ui(null,a,t,!0,e,r);case 19:return tc(e,a,r);case 22:return Xd(e,a,r)}throw Error(l(156,a.tag))};function Ec(e,a){return nl(e,a)}function Ap(e,a,r,t){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fa(e,a,r,t){return new Ap(e,a,r,t)}function un(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lp(e){if(typeof e=="function")return un(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Fe)return 11;if(e===h)return 14}return 2}function oo(e,a){var r=e.alternate;return r===null?(r=fa(e.tag,a,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=a,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,a=e.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Zt(e,a,r,t,s,n){var u=2;if(t=e,typeof e=="function")un(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case H:return jo(r.children,s,n,a);case ne:u=8,s|=8;break;case ue:return e=fa(12,r,a,s|2),e.elementType=ue,e.lanes=n,e;case Pe:return e=fa(13,r,a,s),e.elementType=Pe,e.lanes=n,e;case Be:return e=fa(19,r,a,s),e.elementType=Be,e.lanes=n,e;case w:return es(r,s,n,a);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ge:u=10;break e;case $e:u=9;break e;case Fe:u=11;break e;case h:u=14;break e;case I:u=16,t=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return a=fa(u,r,a,s),a.elementType=e,a.type=t,a.lanes=n,a}function jo(e,a,r,t){return e=fa(7,e,t,a),e.lanes=r,e}function es(e,a,r,t){return e=fa(22,e,t,a),e.elementType=w,e.lanes=r,e.stateNode={isHidden:!1},e}function mn(e,a,r){return e=fa(6,e,null,a),e.lanes=r,e}function pn(e,a,r){return a=fa(4,e.children!==null?e.children:[],e.key,a),a.lanes=r,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}function Rp(e,a,r,t,s){this.tag=a,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Os(0),this.expirationTimes=Os(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Os(0),this.identifierPrefix=t,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function fn(e,a,r,t,s,n,u,x,b){return e=new Rp(e,a,r,x,b),a===1?(a=1,n===!0&&(a|=8)):a=0,n=fa(3,null,null,a),e.current=n,n.stateNode=e,n.memoizedState={element:t,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ki(n),e}function zp(e,a,r){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:J,key:t==null?null:""+t,children:e,containerInfo:a,implementation:r}}function Ac(e){if(!e)return Ha;e=e._reactInternals;e:{if(uo(e)!==e||e.tag!==1)throw Error(l(170));var a=e;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(Xe(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(l(171))}if(e.tag===1){var r=e.type;if(Xe(r))return rd(e,r,a)}return a}function Lc(e,a,r,t,s,n,u,x,b){return e=fn(r,t,!0,e,s,n,u,x,b),e.context=Ac(null),r=e.current,t=Je(),s=eo(r),n=Da(t,s),n.callback=a??null,Ka(r,n,s),e.current.lanes=s,fr(e,s,t),ea(e,t),e}function as(e,a,r,t){var s=a.current,n=Je(),u=eo(s);return r=Ac(r),a.context===null?a.context=r:a.pendingContext=r,a=Da(n,u),a.payload={element:e},t=t===void 0?null:t,t!==null&&(a.callback=t),e=Ka(s,a,u),e!==null&&(Ca(e,s,u,n),zt(e,s,u)),u}function os(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rc(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<a?r:a}}function gn(e,a){Rc(e,a),(e=e.alternate)&&Rc(e,a)}function Mp(){return null}var zc=typeof reportError=="function"?reportError:function(e){console.error(e)};function hn(e){this._internalRoot=e}rs.prototype.render=hn.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(l(409));as(e,a,null,null)},rs.prototype.unmount=hn.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;bo(function(){as(null,e,null,null)}),a[Aa]=null}};function rs(e){this._internalRoot=e}rs.prototype.unstable_scheduleHydration=function(e){if(e){var a=gl();e={blockedOn:null,target:e,priority:a};for(var r=0;r<qa.length&&a!==0&&a<qa[r].priority;r++);qa.splice(r,0,e),r===0&&vl(e)}};function xn(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ts(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Mc(){}function Dp(e,a,r,t,s){if(s){if(typeof t=="function"){var n=t;t=function(){var R=os(u);n.call(R)}}var u=Lc(a,t,e,0,null,!1,!1,"",Mc);return e._reactRootContainer=u,e[Aa]=u.current,Er(e.nodeType===8?e.parentNode:e),bo(),u}for(;s=e.lastChild;)e.removeChild(s);if(typeof t=="function"){var x=t;t=function(){var R=os(b);x.call(R)}}var b=fn(e,0,!1,null,null,!1,!1,"",Mc);return e._reactRootContainer=b,e[Aa]=b.current,Er(e.nodeType===8?e.parentNode:e),bo(function(){as(a,b,r,t)}),b}function ss(e,a,r,t,s){var n=r._reactRootContainer;if(n){var u=n;if(typeof s=="function"){var x=s;s=function(){var b=os(u);x.call(b)}}as(a,u,e,s)}else u=Dp(r,a,e,s,t);return os(u)}pl=function(e){switch(e.tag){case 3:var a=e.stateNode;if(a.current.memoizedState.isDehydrated){var r=pr(a.pendingLanes);r!==0&&($s(a,r|1),ea(a,Le()),(me&6)===0&&(er=Le()+500,Qa()))}break;case 13:bo(function(){var t=Ma(e,1);if(t!==null){var s=Je();Ca(t,e,1,s)}}),gn(e,1)}},Bs=function(e){if(e.tag===13){var a=Ma(e,134217728);if(a!==null){var r=Je();Ca(a,e,134217728,r)}gn(e,134217728)}},fl=function(e){if(e.tag===13){var a=eo(e),r=Ma(e,a);if(r!==null){var t=Je();Ca(r,e,a,t)}gn(e,a)}},gl=function(){return xe},hl=function(e,a){var r=xe;try{return xe=e,a()}finally{xe=r}},Ms=function(e,a,r){switch(a){case"input":if(Ns(e,r),a=r.name,r.type==="radio"&&a!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<r.length;a++){var t=r[a];if(t!==e&&t.form===e.form){var s=St(t);if(!s)throw Error(l(90));$n(t),Ns(t,s)}}}break;case"textarea":Wn(e,r);break;case"select":a=r.value,a!=null&&Ro(e,!!r.multiple,a,!1)}},el=ln,al=bo;var Ip={usingClientEntryPoint:!1,Events:[Rr,Bo,St,Yn,Zn,ln]},Wr={findFiberByHostInstance:mo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fp={bundleType:Wr.bundleType,version:Wr.version,rendererPackageName:Wr.rendererPackageName,rendererConfig:Wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sl(e),e===null?null:e.stateNode},findFiberByHostInstance:Wr.findFiberByHostInstance||Mp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var is=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!is.isDisabled&&is.supportsFiber)try{rt=is.inject(Fp),ja=is}catch{}}return aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ip,aa.createPortal=function(e,a){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xn(a))throw Error(l(200));return zp(e,a,null,r)},aa.createRoot=function(e,a){if(!xn(e))throw Error(l(299));var r=!1,t="",s=zc;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(t=a.identifierPrefix),a.onRecoverableError!==void 0&&(s=a.onRecoverableError)),a=fn(e,1,!1,null,null,r,!1,t,s),e[Aa]=a.current,Er(e.nodeType===8?e.parentNode:e),new hn(a)},aa.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=sl(a),e=e===null?null:e.stateNode,e},aa.flushSync=function(e){return bo(e)},aa.hydrate=function(e,a,r){if(!ts(a))throw Error(l(200));return ss(null,e,a,!0,r)},aa.hydrateRoot=function(e,a,r){if(!xn(e))throw Error(l(405));var t=r!=null&&r.hydratedSources||null,s=!1,n="",u=zc;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(n=r.identifierPrefix),r.onRecoverableError!==void 0&&(u=r.onRecoverableError)),a=Lc(a,null,e,1,r??null,s,!1,n,u),e[Aa]=a.current,Er(e),t)for(e=0;e<t.length;e++)r=t[e],s=r._getVersion,s=s(r._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[r,s]:a.mutableSourceEagerHydrationData.push(r,s);return new rs(a)},aa.render=function(e,a,r){if(!ts(a))throw Error(l(200));return ss(null,e,a,!1,r)},aa.unmountComponentAtNode=function(e){if(!ts(e))throw Error(l(40));return e._reactRootContainer?(bo(function(){ss(null,null,e,!1,function(){e._reactRootContainer=null,e[Aa]=null})}),!0):!1},aa.unstable_batchedUpdates=ln,aa.unstable_renderSubtreeIntoContainer=function(e,a,r,t){if(!ts(r))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return ss(e,a,r,!1,t)},aa.version="18.3.1-next-f1338f8080-20240426",aa}var Bc;function fu(){if(Bc)return bn.exports;Bc=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(d){console.error(d)}}return i(),bn.exports=Wp(),bn.exports}var qc;function Gp(){if(qc)return ns;qc=1;var i=fu();return ns.createRoot=i.createRoot,ns.hydrateRoot=i.hydrateRoot,ns}var Hp=Gp();const Qp=mu(Hp);fu();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hr(){return Hr=Object.assign?Object.assign.bind():function(i){for(var d=1;d<arguments.length;d++){var l=arguments[d];for(var m in l)Object.prototype.hasOwnProperty.call(l,m)&&(i[m]=l[m])}return i},Hr.apply(this,arguments)}var io;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})(io||(io={}));const Vc="popstate";function Jp(i){i===void 0&&(i={});function d(c,p){let{pathname:f="/",search:g="",hash:v=""}=Po(c.location.hash.substr(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Ln("",{pathname:f,search:g,hash:v},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function l(c,p){let f=c.document.querySelector("base"),g="";if(f&&f.getAttribute("href")){let v=c.location.href,y=v.indexOf("#");g=y===-1?v:v.slice(0,y)}return g+"#"+(typeof p=="string"?p:fs(p))}function m(c,p){xs(c.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(p)+")")}return Xp(d,l,m,i)}function Ae(i,d){if(i===!1||i===null||typeof i>"u")throw new Error(d)}function xs(i,d){if(!i){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function Kp(){return Math.random().toString(36).substr(2,8)}function Uc(i,d){return{usr:i.state,key:i.key,idx:d}}function Ln(i,d,l,m){return l===void 0&&(l=null),Hr({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof d=="string"?Po(d):d,{state:l,key:d&&d.key||m||Kp()})}function fs(i){let{pathname:d="/",search:l="",hash:m=""}=i;return l&&l!=="?"&&(d+=l.charAt(0)==="?"?l:"?"+l),m&&m!=="#"&&(d+=m.charAt(0)==="#"?m:"#"+m),d}function Po(i){let d={};if(i){let l=i.indexOf("#");l>=0&&(d.hash=i.substr(l),i=i.substr(0,l));let m=i.indexOf("?");m>=0&&(d.search=i.substr(m),i=i.substr(0,m)),i&&(d.pathname=i)}return d}function Xp(i,d,l,m){m===void 0&&(m={});let{window:c=document.defaultView,v5Compat:p=!1}=m,f=c.history,g=io.Pop,v=null,y=k();y==null&&(y=0,f.replaceState(Hr({},f.state,{idx:y}),""));function k(){return(f.state||{idx:null}).idx}function C(){g=io.Pop;let A=k(),O=A==null?null:A-y;y=A,v&&v({action:g,location:z.location,delta:O})}function P(A,O){g=io.Push;let V=Ln(z.location,A,O);l&&l(V,A),y=k()+1;let D=Uc(V,y),$=z.createHref(V);try{f.pushState(D,"",$)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;c.location.assign($)}p&&v&&v({action:g,location:z.location,delta:1})}function F(A,O){g=io.Replace;let V=Ln(z.location,A,O);l&&l(V,A),y=k();let D=Uc(V,y),$=z.createHref(V);f.replaceState(D,"",$),p&&v&&v({action:g,location:z.location,delta:0})}function _(A){let O=c.location.origin!=="null"?c.location.origin:c.location.href,V=typeof A=="string"?A:fs(A);return V=V.replace(/ $/,"%20"),Ae(O,"No window.location.(origin|href) available to create URL for href: "+V),new URL(V,O)}let z={get action(){return g},get location(){return i(c,f)},listen(A){if(v)throw new Error("A history only accepts one active listener");return c.addEventListener(Vc,C),v=A,()=>{c.removeEventListener(Vc,C),v=null}},createHref(A){return d(c,A)},createURL:_,encodeLocation(A){let O=_(A);return{pathname:O.pathname,search:O.search,hash:O.hash}},push:P,replace:F,go(A){return f.go(A)}};return z}var Wc;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(Wc||(Wc={}));function Yp(i,d,l){return l===void 0&&(l="/"),Zp(i,d,l)}function Zp(i,d,l,m){let c=typeof d=="string"?Po(d):d,p=sr(c.pathname||"/",l);if(p==null)return null;let f=gu(i);e0(f);let g=null;for(let v=0;g==null&&v<f.length;++v){let y=u0(p);g=d0(f[v],y)}return g}function gu(i,d,l,m){d===void 0&&(d=[]),l===void 0&&(l=[]),m===void 0&&(m="");let c=(p,f,g)=>{let v={relativePath:g===void 0?p.path||"":g,caseSensitive:p.caseSensitive===!0,childrenIndex:f,route:p};v.relativePath.startsWith("/")&&(Ae(v.relativePath.startsWith(m),'Absolute route path "'+v.relativePath+'" nested under path '+('"'+m+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),v.relativePath=v.relativePath.slice(m.length));let y=no([m,v.relativePath]),k=l.concat(v);p.children&&p.children.length>0&&(Ae(p.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),gu(p.children,d,k,y)),!(p.path==null&&!p.index)&&d.push({path:y,score:n0(y,p.index),routesMeta:k})};return i.forEach((p,f)=>{var g;if(p.path===""||!((g=p.path)!=null&&g.includes("?")))c(p,f);else for(let v of hu(p.path))c(p,f,v)}),d}function hu(i){let d=i.split("/");if(d.length===0)return[];let[l,...m]=d,c=l.endsWith("?"),p=l.replace(/\?$/,"");if(m.length===0)return c?[p,""]:[p];let f=hu(m.join("/")),g=[];return g.push(...f.map(v=>v===""?p:[p,v].join("/"))),c&&g.push(...f),g.map(v=>i.startsWith("/")&&v===""?"/":v)}function e0(i){i.sort((d,l)=>d.score!==l.score?l.score-d.score:l0(d.routesMeta.map(m=>m.childrenIndex),l.routesMeta.map(m=>m.childrenIndex)))}const a0=/^:[\w-]+$/,o0=3,r0=2,t0=1,s0=10,i0=-2,Gc=i=>i==="*";function n0(i,d){let l=i.split("/"),m=l.length;return l.some(Gc)&&(m+=i0),d&&(m+=r0),l.filter(c=>!Gc(c)).reduce((c,p)=>c+(a0.test(p)?o0:p===""?t0:s0),m)}function l0(i,d){return i.length===d.length&&i.slice(0,-1).every((m,c)=>m===d[c])?i[i.length-1]-d[d.length-1]:0}function d0(i,d,l){let{routesMeta:m}=i,c={},p="/",f=[];for(let g=0;g<m.length;++g){let v=m[g],y=g===m.length-1,k=p==="/"?d:d.slice(p.length)||"/",C=Rn({path:v.relativePath,caseSensitive:v.caseSensitive,end:y},k),P=v.route;if(!C)return null;Object.assign(c,C.params),f.push({params:c,pathname:no([p,C.pathname]),pathnameBase:h0(no([p,C.pathnameBase])),route:P}),C.pathnameBase!=="/"&&(p=no([p,C.pathnameBase]))}return f}function Rn(i,d){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[l,m]=c0(i.path,i.caseSensitive,i.end),c=d.match(l);if(!c)return null;let p=c[0],f=p.replace(/(.)\/+$/,"$1"),g=c.slice(1);return{params:m.reduce((y,k,C)=>{let{paramName:P,isOptional:F}=k;if(P==="*"){let z=g[C]||"";f=p.slice(0,p.length-z.length).replace(/(.)\/+$/,"$1")}const _=g[C];return F&&!_?y[P]=void 0:y[P]=(_||"").replace(/%2F/g,"/"),y},{}),pathname:p,pathnameBase:f,pattern:i}}function c0(i,d,l){d===void 0&&(d=!1),l===void 0&&(l=!0),xs(i==="*"||!i.endsWith("*")||i.endsWith("/*"),'Route path "'+i+'" will be treated as if it were '+('"'+i.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+i.replace(/\*$/,"/*")+'".'));let m=[],c="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,g,v)=>(m.push({paramName:g,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(m.push({paramName:"*"}),c+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?c+="\\/*$":i!==""&&i!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,d?void 0:"i"),m]}function u0(i){try{return i.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return xs(!1,'The URL path "'+i+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+d+").")),i}}function sr(i,d){if(d==="/")return i;if(!i.toLowerCase().startsWith(d.toLowerCase()))return null;let l=d.endsWith("/")?d.length-1:d.length,m=i.charAt(l);return m&&m!=="/"?null:i.slice(l)||"/"}const m0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,p0=i=>m0.test(i);function f0(i,d){d===void 0&&(d="/");let{pathname:l,search:m="",hash:c=""}=typeof i=="string"?Po(i):i,p;if(l)if(p0(l))p=l;else{if(l.includes("//")){let f=l;l=l.replace(/\/\/+/g,"/"),xs(!1,"Pathnames cannot have embedded double slashes - normalizing "+(f+" -> "+l))}l.startsWith("/")?p=Hc(l.substring(1),"/"):p=Hc(l,d)}else p=d;return{pathname:p,search:x0(m),hash:v0(c)}}function Hc(i,d){let l=d.replace(/\/+$/,"").split("/");return i.split("/").forEach(c=>{c===".."?l.length>1&&l.pop():c!=="."&&l.push(c)}),l.length>1?l.join("/"):"/"}function jn(i,d,l,m){return"Cannot include a '"+i+"' character in a manually specified "+("`to."+d+"` field ["+JSON.stringify(m)+"].  Please separate it out to the ")+("`to."+l+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function g0(i){return i.filter((d,l)=>l===0||d.route.path&&d.route.path.length>0)}function xu(i,d){let l=g0(i);return d?l.map((m,c)=>c===l.length-1?m.pathname:m.pathnameBase):l.map(m=>m.pathnameBase)}function vu(i,d,l,m){m===void 0&&(m=!1);let c;typeof i=="string"?c=Po(i):(c=Hr({},i),Ae(!c.pathname||!c.pathname.includes("?"),jn("?","pathname","search",c)),Ae(!c.pathname||!c.pathname.includes("#"),jn("#","pathname","hash",c)),Ae(!c.search||!c.search.includes("#"),jn("#","search","hash",c)));let p=i===""||c.pathname==="",f=p?"/":c.pathname,g;if(f==null)g=l;else{let C=d.length-1;if(!m&&f.startsWith("..")){let P=f.split("/");for(;P[0]==="..";)P.shift(),C-=1;c.pathname=P.join("/")}g=C>=0?d[C]:"/"}let v=f0(c,g),y=f&&f!=="/"&&f.endsWith("/"),k=(p||f===".")&&l.endsWith("/");return!v.pathname.endsWith("/")&&(y||k)&&(v.pathname+="/"),v}const no=i=>i.join("/").replace(/\/\/+/g,"/"),h0=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),x0=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,v0=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function y0(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}const yu=["post","put","patch","delete"];new Set(yu);const b0=["get",...yu];new Set(b0);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qr(){return Qr=Object.assign?Object.assign.bind():function(i){for(var d=1;d<arguments.length;d++){var l=arguments[d];for(var m in l)Object.prototype.hasOwnProperty.call(l,m)&&(i[m]=l[m])}return i},Qr.apply(this,arguments)}const vs=S.createContext(null),bu=S.createContext(null),lo=S.createContext(null),ys=S.createContext(null),Eo=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Cu=S.createContext(null);function C0(i,d){let{relative:l}=d===void 0?{}:d;Jr()||Ae(!1);let{basename:m,navigator:c}=S.useContext(lo),{hash:p,pathname:f,search:g}=Cs(i,{relative:l}),v=f;return m!=="/"&&(v=f==="/"?m:no([m,f])),c.createHref({pathname:v,search:g,hash:p})}function Jr(){return S.useContext(ys)!=null}function Ao(){return Jr()||Ae(!1),S.useContext(ys).location}function Su(i){S.useContext(lo).static||S.useLayoutEffect(i)}function bs(){let{isDataRoute:i}=S.useContext(Eo);return i?D0():S0()}function S0(){Jr()||Ae(!1);let i=S.useContext(vs),{basename:d,future:l,navigator:m}=S.useContext(lo),{matches:c}=S.useContext(Eo),{pathname:p}=Ao(),f=JSON.stringify(xu(c,l.v7_relativeSplatPath)),g=S.useRef(!1);return Su(()=>{g.current=!0}),S.useCallback(function(y,k){if(k===void 0&&(k={}),!g.current)return;if(typeof y=="number"){m.go(y);return}let C=vu(y,JSON.parse(f),p,k.relative==="path");i==null&&d!=="/"&&(C.pathname=C.pathname==="/"?d:no([d,C.pathname])),(k.replace?m.replace:m.push)(C,k.state,k)},[d,m,f,p,i])}function Cs(i,d){let{relative:l}=d===void 0?{}:d,{future:m}=S.useContext(lo),{matches:c}=S.useContext(Eo),{pathname:p}=Ao(),f=JSON.stringify(xu(c,m.v7_relativeSplatPath));return S.useMemo(()=>vu(i,JSON.parse(f),p,l==="path"),[i,f,p,l])}function j0(i,d){return w0(i,d)}function w0(i,d,l,m){Jr()||Ae(!1);let{navigator:c}=S.useContext(lo),{matches:p}=S.useContext(Eo),f=p[p.length-1],g=f?f.params:{};f&&f.pathname;let v=f?f.pathnameBase:"/";f&&f.route;let y=Ao(),k;if(d){var C;let A=typeof d=="string"?Po(d):d;v==="/"||(C=A.pathname)!=null&&C.startsWith(v)||Ae(!1),k=A}else k=y;let P=k.pathname||"/",F=P;if(v!=="/"){let A=v.replace(/^\//,"").split("/");F="/"+P.replace(/^\//,"").split("/").slice(A.length).join("/")}let _=Yp(i,{pathname:F}),z=A0(_&&_.map(A=>Object.assign({},A,{params:Object.assign({},g,A.params),pathname:no([v,c.encodeLocation?c.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?v:no([v,c.encodeLocation?c.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),p,l,m);return d&&z?S.createElement(ys.Provider,{value:{location:Qr({pathname:"/",search:"",hash:"",state:null,key:"default"},k),navigationType:io.Pop}},z):z}function N0(){let i=M0(),d=y0(i)?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),l=i instanceof Error?i.stack:null,c={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},d),l?S.createElement("pre",{style:c},l):null,null)}const k0=S.createElement(N0,null);class P0 extends S.Component{constructor(d){super(d),this.state={location:d.location,revalidation:d.revalidation,error:d.error}}static getDerivedStateFromError(d){return{error:d}}static getDerivedStateFromProps(d,l){return l.location!==d.location||l.revalidation!=="idle"&&d.revalidation==="idle"?{error:d.error,location:d.location,revalidation:d.revalidation}:{error:d.error!==void 0?d.error:l.error,location:l.location,revalidation:d.revalidation||l.revalidation}}componentDidCatch(d,l){console.error("React Router caught the following error during render",d,l)}render(){return this.state.error!==void 0?S.createElement(Eo.Provider,{value:this.props.routeContext},S.createElement(Cu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function E0(i){let{routeContext:d,match:l,children:m}=i,c=S.useContext(vs);return c&&c.static&&c.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=l.route.id),S.createElement(Eo.Provider,{value:d},m)}function A0(i,d,l,m){var c;if(d===void 0&&(d=[]),l===void 0&&(l=null),m===void 0&&(m=null),i==null){var p;if(!l)return null;if(l.errors)i=l.matches;else if((p=m)!=null&&p.v7_partialHydration&&d.length===0&&!l.initialized&&l.matches.length>0)i=l.matches;else return null}let f=i,g=(c=l)==null?void 0:c.errors;if(g!=null){let k=f.findIndex(C=>C.route.id&&(g==null?void 0:g[C.route.id])!==void 0);k>=0||Ae(!1),f=f.slice(0,Math.min(f.length,k+1))}let v=!1,y=-1;if(l&&m&&m.v7_partialHydration)for(let k=0;k<f.length;k++){let C=f[k];if((C.route.HydrateFallback||C.route.hydrateFallbackElement)&&(y=k),C.route.id){let{loaderData:P,errors:F}=l,_=C.route.loader&&P[C.route.id]===void 0&&(!F||F[C.route.id]===void 0);if(C.route.lazy||_){v=!0,y>=0?f=f.slice(0,y+1):f=[f[0]];break}}}return f.reduceRight((k,C,P)=>{let F,_=!1,z=null,A=null;l&&(F=g&&C.route.id?g[C.route.id]:void 0,z=C.route.errorElement||k0,v&&(y<0&&P===0?(I0("route-fallback"),_=!0,A=null):y===P&&(_=!0,A=C.route.hydrateFallbackElement||null)));let O=d.concat(f.slice(0,P+1)),V=()=>{let D;return F?D=z:_?D=A:C.route.Component?D=S.createElement(C.route.Component,null):C.route.element?D=C.route.element:D=k,S.createElement(E0,{match:C,routeContext:{outlet:k,matches:O,isDataRoute:l!=null},children:D})};return l&&(C.route.ErrorBoundary||C.route.errorElement||P===0)?S.createElement(P0,{location:l.location,revalidation:l.revalidation,component:z,error:F,children:V(),routeContext:{outlet:null,matches:O,isDataRoute:!0}}):V()},null)}var ju=(function(i){return i.UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i})(ju||{}),wu=(function(i){return i.UseBlocker="useBlocker",i.UseLoaderData="useLoaderData",i.UseActionData="useActionData",i.UseRouteError="useRouteError",i.UseNavigation="useNavigation",i.UseRouteLoaderData="useRouteLoaderData",i.UseMatches="useMatches",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i.UseRouteId="useRouteId",i})(wu||{});function L0(i){let d=S.useContext(vs);return d||Ae(!1),d}function R0(i){let d=S.useContext(bu);return d||Ae(!1),d}function z0(i){let d=S.useContext(Eo);return d||Ae(!1),d}function Nu(i){let d=z0(),l=d.matches[d.matches.length-1];return l.route.id||Ae(!1),l.route.id}function M0(){var i;let d=S.useContext(Cu),l=R0(),m=Nu();return d!==void 0?d:(i=l.errors)==null?void 0:i[m]}function D0(){let{router:i}=L0(ju.UseNavigateStable),d=Nu(wu.UseNavigateStable),l=S.useRef(!1);return Su(()=>{l.current=!0}),S.useCallback(function(c,p){p===void 0&&(p={}),l.current&&(typeof c=="number"?i.navigate(c):i.navigate(c,Qr({fromRouteId:d},p)))},[i,d])}const Qc={};function I0(i,d,l){Qc[i]||(Qc[i]=!0)}function F0(i,d){i==null||i.v7_startTransition,i==null||i.v7_relativeSplatPath}function to(i){Ae(!1)}function _0(i){let{basename:d="/",children:l=null,location:m,navigationType:c=io.Pop,navigator:p,static:f=!1,future:g}=i;Jr()&&Ae(!1);let v=d.replace(/^\/*/,"/"),y=S.useMemo(()=>({basename:v,navigator:p,static:f,future:Qr({v7_relativeSplatPath:!1},g)}),[v,g,p,f]);typeof m=="string"&&(m=Po(m));let{pathname:k="/",search:C="",hash:P="",state:F=null,key:_="default"}=m,z=S.useMemo(()=>{let A=sr(k,v);return A==null?null:{location:{pathname:A,search:C,hash:P,state:F,key:_},navigationType:c}},[v,k,C,P,F,_,c]);return z==null?null:S.createElement(lo.Provider,{value:y},S.createElement(ys.Provider,{children:l,value:z}))}function Jc(i){let{children:d,location:l}=i;return j0(zn(d),l)}new Promise(()=>{});function zn(i,d){d===void 0&&(d=[]);let l=[];return S.Children.forEach(i,(m,c)=>{if(!S.isValidElement(m))return;let p=[...d,c];if(m.type===S.Fragment){l.push.apply(l,zn(m.props.children,p));return}m.type!==to&&Ae(!1),!m.props.index||!m.props.children||Ae(!1);let f={id:m.props.id||p.join("-"),caseSensitive:m.props.caseSensitive,element:m.props.element,Component:m.props.Component,index:m.props.index,path:m.props.path,loader:m.props.loader,action:m.props.action,errorElement:m.props.errorElement,ErrorBoundary:m.props.ErrorBoundary,hasErrorBoundary:m.props.ErrorBoundary!=null||m.props.errorElement!=null,shouldRevalidate:m.props.shouldRevalidate,handle:m.props.handle,lazy:m.props.lazy};m.props.children&&(f.children=zn(m.props.children,p)),l.push(f)}),l}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gs(){return gs=Object.assign?Object.assign.bind():function(i){for(var d=1;d<arguments.length;d++){var l=arguments[d];for(var m in l)Object.prototype.hasOwnProperty.call(l,m)&&(i[m]=l[m])}return i},gs.apply(this,arguments)}function ku(i,d){if(i==null)return{};var l={},m=Object.keys(i),c,p;for(p=0;p<m.length;p++)c=m[p],!(d.indexOf(c)>=0)&&(l[c]=i[c]);return l}function T0(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function O0(i,d){return i.button===0&&(!d||d==="_self")&&!T0(i)}function Mn(i){return i===void 0&&(i=""),new URLSearchParams(typeof i=="string"||Array.isArray(i)||i instanceof URLSearchParams?i:Object.keys(i).reduce((d,l)=>{let m=i[l];return d.concat(Array.isArray(m)?m.map(c=>[l,c]):[[l,m]])},[]))}function $0(i,d){let l=Mn(i);return d&&d.forEach((m,c)=>{l.has(c)||d.getAll(c).forEach(p=>{l.append(c,p)})}),l}const B0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],q0=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],V0="6";try{window.__reactRouterVersion=V0}catch{}const U0=S.createContext({isTransitioning:!1}),W0="startTransition",Kc=qp[W0];function G0(i){let{basename:d,children:l,future:m,window:c}=i,p=S.useRef();p.current==null&&(p.current=Jp({window:c,v5Compat:!0}));let f=p.current,[g,v]=S.useState({action:f.action,location:f.location}),{v7_startTransition:y}=m||{},k=S.useCallback(C=>{y&&Kc?Kc(()=>v(C)):v(C)},[v,y]);return S.useLayoutEffect(()=>f.listen(k),[f,k]),S.useEffect(()=>F0(m),[m]),S.createElement(_0,{basename:d,children:l,location:g.location,navigationType:g.action,navigator:f,future:m})}const H0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Q0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tr=S.forwardRef(function(d,l){let{onClick:m,relative:c,reloadDocument:p,replace:f,state:g,target:v,to:y,preventScrollReset:k,viewTransition:C}=d,P=ku(d,B0),{basename:F}=S.useContext(lo),_,z=!1;if(typeof y=="string"&&Q0.test(y)&&(_=y,H0))try{let D=new URL(window.location.href),$=y.startsWith("//")?new URL(D.protocol+y):new URL(y),Z=sr($.pathname,F);$.origin===D.origin&&Z!=null?y=Z+$.search+$.hash:z=!0}catch{}let A=C0(y,{relative:c}),O=K0(y,{replace:f,state:g,target:v,preventScrollReset:k,relative:c,viewTransition:C});function V(D){m&&m(D),D.defaultPrevented||O(D)}return S.createElement("a",gs({},P,{href:_||A,onClick:z||p?m:V,ref:l,target:v}))}),wn=S.forwardRef(function(d,l){let{"aria-current":m="page",caseSensitive:c=!1,className:p="",end:f=!1,style:g,to:v,viewTransition:y,children:k}=d,C=ku(d,q0),P=Cs(v,{relative:C.relative}),F=Ao(),_=S.useContext(bu),{navigator:z,basename:A}=S.useContext(lo),O=_!=null&&Y0(P)&&y===!0,V=z.encodeLocation?z.encodeLocation(P).pathname:P.pathname,D=F.pathname,$=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;c||(D=D.toLowerCase(),$=$?$.toLowerCase():null,V=V.toLowerCase()),$&&A&&($=sr($,A)||$);const Z=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let J=D===V||!f&&D.startsWith(V)&&D.charAt(Z)==="/",H=$!=null&&($===V||!f&&$.startsWith(V)&&$.charAt(V.length)==="/"),ne={isActive:J,isPending:H,isTransitioning:O},ue=J?m:void 0,ge;typeof p=="function"?ge=p(ne):ge=[p,J?"active":null,H?"pending":null,O?"transitioning":null].filter(Boolean).join(" ");let $e=typeof g=="function"?g(ne):g;return S.createElement(tr,gs({},C,{"aria-current":ue,className:ge,ref:l,style:$e,to:v,viewTransition:y}),typeof k=="function"?k(ne):k)});var Dn;(function(i){i.UseScrollRestoration="useScrollRestoration",i.UseSubmit="useSubmit",i.UseSubmitFetcher="useSubmitFetcher",i.UseFetcher="useFetcher",i.useViewTransitionState="useViewTransitionState"})(Dn||(Dn={}));var Xc;(function(i){i.UseFetcher="useFetcher",i.UseFetchers="useFetchers",i.UseScrollRestoration="useScrollRestoration"})(Xc||(Xc={}));function J0(i){let d=S.useContext(vs);return d||Ae(!1),d}function K0(i,d){let{target:l,replace:m,state:c,preventScrollReset:p,relative:f,viewTransition:g}=d===void 0?{}:d,v=bs(),y=Ao(),k=Cs(i,{relative:f});return S.useCallback(C=>{if(O0(C,l)){C.preventDefault();let P=m!==void 0?m:fs(y)===fs(k);v(i,{replace:P,state:c,preventScrollReset:p,relative:f,viewTransition:g})}},[y,v,k,m,c,l,i,p,f,g])}function X0(i){let d=S.useRef(Mn(i)),l=S.useRef(!1),m=Ao(),c=S.useMemo(()=>$0(m.search,l.current?null:d.current),[m.search]),p=bs(),f=S.useCallback((g,v)=>{const y=Mn(typeof g=="function"?g(c):g);l.current=!0,p("?"+y,v)},[p,c]);return[c,f]}function Y0(i,d){d===void 0&&(d={});let l=S.useContext(U0);l==null&&Ae(!1);let{basename:m}=J0(Dn.useViewTransitionState),c=Cs(i,{relative:d.relative});if(!l.isTransitioning)return!1;let p=sr(l.currentLocation.pathname,m)||l.currentLocation.pathname,f=sr(l.nextLocation.pathname,m)||l.nextLocation.pathname;return Rn(c.pathname,f)!=null||Rn(c.pathname,p)!=null}let Z0={data:""},ef=i=>{if(typeof window=="object"){let d=(i?i.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return d.nonce=window.__nonce__,d.parentNode||(i||document.head).appendChild(d),d.firstChild}return i||Z0},af=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,of=/\/\*[^]*?\*\/|  +/g,Yc=/\n+/g,so=(i,d)=>{let l="",m="",c="";for(let p in i){let f=i[p];p[0]=="@"?p[1]=="i"?l=p+" "+f+";":m+=p[1]=="f"?so(f,p):p+"{"+so(f,p[1]=="k"?"":d)+"}":typeof f=="object"?m+=so(f,d?d.replace(/([^,])+/g,g=>p.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,v=>/&/.test(v)?v.replace(/&/g,g):g?g+" "+v:v)):p):f!=null&&(p=/^--/.test(p)?p:p.replace(/[A-Z]/g,"-$&").toLowerCase(),c+=so.p?so.p(p,f):p+":"+f+";")}return l+(d&&c?d+"{"+c+"}":c)+m},_a={},Pu=i=>{if(typeof i=="object"){let d="";for(let l in i)d+=l+Pu(i[l]);return d}return i},rf=(i,d,l,m,c)=>{let p=Pu(i),f=_a[p]||(_a[p]=(v=>{let y=0,k=11;for(;y<v.length;)k=101*k+v.charCodeAt(y++)>>>0;return"go"+k})(p));if(!_a[f]){let v=p!==i?i:(y=>{let k,C,P=[{}];for(;k=af.exec(y.replace(of,""));)k[4]?P.shift():k[3]?(C=k[3].replace(Yc," ").trim(),P.unshift(P[0][C]=P[0][C]||{})):P[0][k[1]]=k[2].replace(Yc," ").trim();return P[0]})(i);_a[f]=so(c?{["@keyframes "+f]:v}:v,l?"":"."+f)}let g=l&&_a.g?_a.g:null;return l&&(_a.g=_a[f]),((v,y,k,C)=>{C?y.data=y.data.replace(C,v):y.data.indexOf(v)===-1&&(y.data=k?v+y.data:y.data+v)})(_a[f],d,m,g),f},tf=(i,d,l)=>i.reduce((m,c,p)=>{let f=d[p];if(f&&f.call){let g=f(l),v=g&&g.props&&g.props.className||/^go/.test(g)&&g;f=v?"."+v:g&&typeof g=="object"?g.props?"":so(g,""):g===!1?"":g}return m+c+(f??"")},"");function Ss(i){let d=this||{},l=i.call?i(d.p):i;return rf(l.unshift?l.raw?tf(l,[].slice.call(arguments,1),d.p):l.reduce((m,c)=>Object.assign(m,c&&c.call?c(d.p):c),{}):l,ef(d.target),d.g,d.o,d.k)}let Eu,In,Fn;Ss.bind({g:1});let Ta=Ss.bind({k:1});function sf(i,d,l,m){so.p=d,Eu=i,In=l,Fn=m}function co(i,d){let l=this||{};return function(){let m=arguments;function c(p,f){let g=Object.assign({},p),v=g.className||c.className;l.p=Object.assign({theme:In&&In()},g),l.o=/ *go\d+/.test(v),g.className=Ss.apply(l,m)+(v?" "+v:"");let y=i;return i[0]&&(y=g.as||i,delete g.as),Fn&&y[0]&&Fn(g),Eu(y,g)}return c}}var nf=i=>typeof i=="function",hs=(i,d)=>nf(i)?i(d):i,lf=(()=>{let i=0;return()=>(++i).toString()})(),Au=(()=>{let i;return()=>{if(i===void 0&&typeof window<"u"){let d=matchMedia("(prefers-reduced-motion: reduce)");i=!d||d.matches}return i}})(),df=20,Tn="default",Lu=(i,d)=>{let{toastLimit:l}=i.settings;switch(d.type){case 0:return{...i,toasts:[d.toast,...i.toasts].slice(0,l)};case 1:return{...i,toasts:i.toasts.map(f=>f.id===d.toast.id?{...f,...d.toast}:f)};case 2:let{toast:m}=d;return Lu(i,{type:i.toasts.find(f=>f.id===m.id)?1:0,toast:m});case 3:let{toastId:c}=d;return{...i,toasts:i.toasts.map(f=>f.id===c||c===void 0?{...f,dismissed:!0,visible:!1}:f)};case 4:return d.toastId===void 0?{...i,toasts:[]}:{...i,toasts:i.toasts.filter(f=>f.id!==d.toastId)};case 5:return{...i,pausedAt:d.time};case 6:let p=d.time-(i.pausedAt||0);return{...i,pausedAt:void 0,toasts:i.toasts.map(f=>({...f,pauseDuration:f.pauseDuration+p}))}}},ps=[],Ru={toasts:[],pausedAt:void 0,settings:{toastLimit:df}},Ea={},zu=(i,d=Tn)=>{Ea[d]=Lu(Ea[d]||Ru,i),ps.forEach(([l,m])=>{l===d&&m(Ea[d])})},Mu=i=>Object.keys(Ea).forEach(d=>zu(i,d)),cf=i=>Object.keys(Ea).find(d=>Ea[d].toasts.some(l=>l.id===i)),js=(i=Tn)=>d=>{zu(d,i)},uf={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},mf=(i={},d=Tn)=>{let[l,m]=S.useState(Ea[d]||Ru),c=S.useRef(Ea[d]);S.useEffect(()=>(c.current!==Ea[d]&&m(Ea[d]),ps.push([d,m]),()=>{let f=ps.findIndex(([g])=>g===d);f>-1&&ps.splice(f,1)}),[d]);let p=l.toasts.map(f=>{var g,v,y;return{...i,...i[f.type],...f,removeDelay:f.removeDelay||((g=i[f.type])==null?void 0:g.removeDelay)||(i==null?void 0:i.removeDelay),duration:f.duration||((v=i[f.type])==null?void 0:v.duration)||(i==null?void 0:i.duration)||uf[f.type],style:{...i.style,...(y=i[f.type])==null?void 0:y.style,...f.style}}});return{...l,toasts:p}},pf=(i,d="blank",l)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:d,ariaProps:{role:"status","aria-live":"polite"},message:i,pauseDuration:0,...l,id:(l==null?void 0:l.id)||lf()}),Kr=i=>(d,l)=>{let m=pf(d,i,l);return js(m.toasterId||cf(m.id))({type:2,toast:m}),m.id},Ie=(i,d)=>Kr("blank")(i,d);Ie.error=Kr("error");Ie.success=Kr("success");Ie.loading=Kr("loading");Ie.custom=Kr("custom");Ie.dismiss=(i,d)=>{let l={type:3,toastId:i};d?js(d)(l):Mu(l)};Ie.dismissAll=i=>Ie.dismiss(void 0,i);Ie.remove=(i,d)=>{let l={type:4,toastId:i};d?js(d)(l):Mu(l)};Ie.removeAll=i=>Ie.remove(void 0,i);Ie.promise=(i,d,l)=>{let m=Ie.loading(d.loading,{...l,...l==null?void 0:l.loading});return typeof i=="function"&&(i=i()),i.then(c=>{let p=d.success?hs(d.success,c):void 0;return p?Ie.success(p,{id:m,...l,...l==null?void 0:l.success}):Ie.dismiss(m),c}).catch(c=>{let p=d.error?hs(d.error,c):void 0;p?Ie.error(p,{id:m,...l,...l==null?void 0:l.error}):Ie.dismiss(m)}),i};var ff=1e3,gf=(i,d="default")=>{let{toasts:l,pausedAt:m}=mf(i,d),c=S.useRef(new Map).current,p=S.useCallback((C,P=ff)=>{if(c.has(C))return;let F=setTimeout(()=>{c.delete(C),f({type:4,toastId:C})},P);c.set(C,F)},[]);S.useEffect(()=>{if(m)return;let C=Date.now(),P=l.map(F=>{if(F.duration===1/0)return;let _=(F.duration||0)+F.pauseDuration-(C-F.createdAt);if(_<0){F.visible&&Ie.dismiss(F.id);return}return setTimeout(()=>Ie.dismiss(F.id,d),_)});return()=>{P.forEach(F=>F&&clearTimeout(F))}},[l,m,d]);let f=S.useCallback(js(d),[d]),g=S.useCallback(()=>{f({type:5,time:Date.now()})},[f]),v=S.useCallback((C,P)=>{f({type:1,toast:{id:C,height:P}})},[f]),y=S.useCallback(()=>{m&&f({type:6,time:Date.now()})},[m,f]),k=S.useCallback((C,P)=>{let{reverseOrder:F=!1,gutter:_=8,defaultPosition:z}=P||{},A=l.filter(D=>(D.position||z)===(C.position||z)&&D.height),O=A.findIndex(D=>D.id===C.id),V=A.filter((D,$)=>$<O&&D.visible).length;return A.filter(D=>D.visible).slice(...F?[V+1]:[0,V]).reduce((D,$)=>D+($.height||0)+_,0)},[l]);return S.useEffect(()=>{l.forEach(C=>{if(C.dismissed)p(C.id,C.removeDelay);else{let P=c.get(C.id);P&&(clearTimeout(P),c.delete(C.id))}})},[l,p]),{toasts:l,handlers:{updateHeight:v,startPause:g,endPause:y,calculateOffset:k}}},hf=Ta`
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
}`,yf=co("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${i=>i.primary||"#ff4b4b"};
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
    background: ${i=>i.secondary||"#fff"};
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
`,Cf=co("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${i=>i.secondary||"#e0e0e0"};
  border-right-color: ${i=>i.primary||"#616161"};
  animation: ${bf} 1s linear infinite;
`,Sf=Ta`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,jf=Ta`
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
}`,wf=co("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${i=>i.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Sf} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${jf} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${i=>i.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Nf=co("div")`
  position: absolute;
`,kf=co("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Pf=Ta`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ef=co("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Pf} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Af=({toast:i})=>{let{icon:d,type:l,iconTheme:m}=i;return d!==void 0?typeof d=="string"?S.createElement(Ef,null,d):d:l==="blank"?null:S.createElement(kf,null,S.createElement(Cf,{...m}),l!=="loading"&&S.createElement(Nf,null,l==="error"?S.createElement(yf,{...m}):S.createElement(wf,{...m})))},Lf=i=>`
0% {transform: translate3d(0,${i*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Rf=i=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${i*-150}%,-1px) scale(.6); opacity:0;}
`,zf="0%{opacity:0;} 100%{opacity:1;}",Mf="0%{opacity:1;} 100%{opacity:0;}",Df=co("div")`
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
`,If=co("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ff=(i,d)=>{let l=i.includes("top")?1:-1,[m,c]=Au()?[zf,Mf]:[Lf(l),Rf(l)];return{animation:d?`${Ta(m)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Ta(c)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},_f=S.memo(({toast:i,position:d,style:l,children:m})=>{let c=i.height?Ff(i.position||d||"top-center",i.visible):{opacity:0},p=S.createElement(Af,{toast:i}),f=S.createElement(If,{...i.ariaProps},hs(i.message,i));return S.createElement(Df,{className:i.className,style:{...c,...l,...i.style}},typeof m=="function"?m({icon:p,message:f}):S.createElement(S.Fragment,null,p,f))});sf(S.createElement);var Tf=({id:i,className:d,style:l,onHeightUpdate:m,children:c})=>{let p=S.useCallback(f=>{if(f){let g=()=>{let v=f.getBoundingClientRect().height;m(i,v)};g(),new MutationObserver(g).observe(f,{subtree:!0,childList:!0,characterData:!0})}},[i,m]);return S.createElement("div",{ref:p,className:d,style:l},c)},Of=(i,d)=>{let l=i.includes("top"),m=l?{top:0}:{bottom:0},c=i.includes("center")?{justifyContent:"center"}:i.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Au()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${d*(l?1:-1)}px)`,...m,...c}},$f=Ss`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ls=16,Bf=({reverseOrder:i,position:d="top-center",toastOptions:l,gutter:m,children:c,toasterId:p,containerStyle:f,containerClassName:g})=>{let{toasts:v,handlers:y}=gf(l,p);return S.createElement("div",{"data-rht-toaster":p||"",style:{position:"fixed",zIndex:9999,top:ls,left:ls,right:ls,bottom:ls,pointerEvents:"none",...f},className:g,onMouseEnter:y.startPause,onMouseLeave:y.endPause},v.map(k=>{let C=k.position||d,P=y.calculateOffset(k,{reverseOrder:i,gutter:m,defaultPosition:d}),F=Of(C,P);return S.createElement(Tf,{id:k.id,key:k.id,onHeightUpdate:y.updateHeight,className:k.visible?$f:"",style:F},k.type==="custom"?hs(k.message,k):c?c(k):S.createElement(_f,{toast:k,position:C}))}))},ke=Ie;const Du="";async function ko(i,d={}){const l=`${Du}${i}`;let m;try{m=await fetch(l,d)}catch{throw new Error("Servidor indisponível. Verifique sua conexão ou tente mais tarde.")}if(!(m.headers.get("content-type")||"").includes("application/json"))throw m.ok?new Error("Resposta inesperada do servidor."):new Error(`Servidor indisponível (${m.status}). O backend não está acessível neste link.`);return await m.json()}const qf=Object.freeze(Object.defineProperty({__proto__:null,API_BASE:Du,apiFetch:ko},Symbol.toStringTag,{value:"Module"})),Iu=S.createContext(null),Nn="sentinel_auth",kn="sentinel_users",wo="sentinel_prospects";function Vf({children:i}){const[d,l]=S.useState(()=>{const _=localStorage.getItem(Nn);return _?JSON.parse(_):null}),[m,c]=S.useState(()=>d?localStorage.getItem(`sentinel_nda_${d.email}`)==="true":!1);S.useEffect(()=>{if(d){localStorage.setItem(Nn,JSON.stringify(d));const _=localStorage.getItem(`sentinel_nda_${d.email}`);c(_==="true")}else localStorage.removeItem(Nn),c(!1)},[d]);function p(_){const z=JSON.parse(localStorage.getItem(kn)||"[]");if(z.find(V=>V.email===_.email))return{success:!1,message:"E-mail já cadastrado"};const O={..._,id:Date.now().toString(36)+Math.random().toString(36).slice(2,7),createdAt:new Date().toISOString(),verified:!1};return z.push(O),localStorage.setItem(kn,JSON.stringify(z)),k(O,"cadastro"),{success:!0,user:O}}const f=S.useCallback(async(_,z,A,O)=>{const V=await ko("/api/auth/send-code",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:_,nome:z,empresa:A,telefone:O})});if(!V.sucesso)throw new Error(V.mensagem);return{devMode:V.dev_mode||!1,devCode:V.dev_code||null,devPreview:V.dev_preview||null}},[]),g=S.useCallback(async(_,z)=>{const A=await ko("/api/auth/verify-code",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:_,code:z})});if(!A.sucesso)return{success:!1};const O={id:Date.now().toString(),nome:A.data.nome,email:A.data.email,telefone:A.data.telefone,empresa:A.data.empresa,createdAt:new Date().toISOString(),verified:!0};l(O),localStorage.setItem("sentinel_user",JSON.stringify(O));const V=JSON.parse(localStorage.getItem(wo)||"[]"),D=V.findIndex(Z=>Z.email===O.email),$={id:O.id,nome:O.nome,email:O.email,telefone:O.telefone,empresa:O.empresa,fase:"verificado",faseLabel:"Verificado",createdAt:O.createdAt,updatedAt:new Date().toISOString()};return D>=0?V[D]={...V[D],...$}:V.push($),localStorage.setItem(wo,JSON.stringify(V)),{success:!0}},[]);function v(){d&&(localStorage.setItem(`sentinel_nda_${d.email}`,"true"),c(!0),k(d,"nda_aceito"))}function y(){l(null),c(!1)}function k(_,z){const A=JSON.parse(localStorage.getItem(wo)||"[]"),O=A.findIndex(D=>D.email===_.email),V={id:_.id,nome:_.nome,email:_.email,telefone:_.telefone,empresa:_.empresa,fase:z,faseLabel:Zc[z]||z,createdAt:_.createdAt||new Date().toISOString(),updatedAt:new Date().toISOString()};O>=0?A[O]={...A[O],...V}:A.push(V),localStorage.setItem(wo,JSON.stringify(A))}function C(_,z){const A=JSON.parse(localStorage.getItem(wo)||"[]"),O=A.findIndex(V=>V.email===_);O>=0&&(A[O].fase=z,A[O].faseLabel=Zc[z]||z,A[O].updatedAt=new Date().toISOString(),localStorage.setItem(wo,JSON.stringify(A)))}function P(){return JSON.parse(localStorage.getItem(wo)||"[]")}function F(){return JSON.parse(localStorage.getItem(kn)||"[]")}return o.jsx(Iu.Provider,{value:{user:d,ndaAccepted:m,register:p,verifyCode:g,generateCode:f,acceptNda:v,logout:y,trackProspect:k,updateProspectPhase:C,getProspects:P,getAllUsers:F},children:i})}function Lo(){const i=S.useContext(Iu);if(!i)throw new Error("useAuth must be inside AuthProvider");return i}const Zc={cadastro:"Cadastro",verificado:"Verificado",nda_aceito:"NDA Aceito",preenchendo_interno:"Preenchendo (Interno)",preenchendo_externo:"Preenchendo (Externo)",enviado_interno:"Enviado (Interno)",enviado_externo:"Enviado (Externo)"},No="/sentinel-fairfield/";function Uf({end:i,suffix:d="",prefix:l=""}){const[m,c]=S.useState(0),p=S.useRef(null);return S.useEffect(()=>{const f=new IntersectionObserver(([g])=>{if(g.isIntersecting){const y=Date.now(),k=()=>{const C=Math.min((Date.now()-y)/2e3,1);c(Math.floor(C*i)),C<1&&requestAnimationFrame(k)};k(),f.disconnect()}},{threshold:.3});return p.current&&f.observe(p.current),()=>f.disconnect()},[i]),o.jsxs("span",{ref:p,children:[l,m.toLocaleString("pt-BR"),d]})}function Wf(){const i=["Analisando perfil da empresa...","Consultando Coface...","Consultando Atradius...","Consultando AVLA...","Consultando Allianz Trade...","Comparando coberturas...","Melhor oferta identificada!"],[d,l]=S.useState(0);return S.useEffect(()=>{const m=setInterval(()=>l(c=>(c+1)%i.length),2e3);return()=>clearInterval(m)},[]),i[d]}function Gf({items:i}){const[d,l]=S.useState([]);return S.useEffect(()=>{const m=i.length*800,c=i.map((g,v)=>setTimeout(()=>l(y=>[...y,v]),(v+1)*800)),p=setTimeout(()=>l([]),m+2e3),f=setInterval(()=>{l([]),i.forEach((g,v)=>setTimeout(()=>l(y=>[...y,v]),(v+1)*800))},m+2500);return()=>{c.forEach(clearTimeout),clearTimeout(p),clearInterval(f)}},[i.length]),o.jsx("div",{className:"space-y-1.5 text-left max-w-[220px] mx-auto",children:i.map((m,c)=>o.jsxs("div",{className:`flex items-center gap-2 px-2.5 py-1.5 rounded-lg border transition-all duration-500 ${d.includes(c)?"bg-accent-emerald/[0.06] border-accent-emerald/20":"bg-white/[0.04] border-white/[0.06]"}`,children:[o.jsx("div",{className:`h-3 w-3 rounded-sm flex items-center justify-center flex-shrink-0 transition-all duration-300 ${d.includes(c)?"bg-accent-emerald/20 border border-accent-emerald/40":"border border-white/10"}`,children:d.includes(c)&&o.jsx("svg",{className:"h-2 w-2 text-accent-emerald animate-fadeIn",fill:"currentColor",viewBox:"0 0 20 20",children:o.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),o.jsx("span",{className:`text-[10px] transition-colors duration-500 ${d.includes(c)?"text-white/60":"text-white/30"}`,children:m})]},m))})}function ir({size:i=32}){return o.jsxs("svg",{width:i,height:i,viewBox:"0 0 80 80",fill:"none",children:[o.jsx("path",{d:"M40 12 L62 24 L62 42 C62 56 52 66 40 70 C28 66 18 56 18 42 L18 24 Z",fill:"rgba(125,211,252,0.08)",stroke:"#7DD3FC",strokeWidth:"1.5",children:o.jsx("animate",{attributeName:"stroke-opacity",values:"0.5;1;0.5",dur:"2.5s",repeatCount:"indefinite"})}),o.jsx("path",{d:"M40 20 L56 28 L56 42 C56 52 49 60 40 63 C31 60 24 52 24 42 L24 28 Z",fill:"rgba(125,211,252,0.05)",stroke:"#7DD3FC",strokeWidth:"0.8",opacity:"0.4"}),o.jsxs("text",{x:"40",y:"48",textAnchor:"middle",fill:"#7DD3FC",fontSize:"22",fontWeight:"bold",fontFamily:"Inter, sans-serif",children:["$",o.jsx("animate",{attributeName:"opacity",values:"0.6;1;0.6",dur:"2s",repeatCount:"indefinite"})]}),o.jsxs("line",{x1:"22",y1:"40",x2:"58",y2:"40",stroke:"#7DD3FC",strokeWidth:"0.5",opacity:"0.3",children:[o.jsx("animate",{attributeName:"y1",values:"25;55;25",dur:"3s",repeatCount:"indefinite"}),o.jsx("animate",{attributeName:"y2",values:"25;55;25",dur:"3s",repeatCount:"indefinite"}),o.jsx("animate",{attributeName:"opacity",values:"0;0.4;0",dur:"3s",repeatCount:"indefinite"})]}),o.jsx("defs",{children:o.jsxs("linearGradient",{id:"miniGrad",x1:"0",y1:"0",x2:"80",y2:"80",children:[o.jsx("stop",{offset:"0%",stopColor:"#7DD3FC"}),o.jsx("stop",{offset:"100%",stopColor:"#34D399"})]})})]})}function Hf(){const i=`M114,10 L112,16 L117,22 L118,28 L122,30 L126,31 L129,34 L129,38
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
    L98,20 L102,20 L108,14 Z`,d=["M106,31 L106,52 L114,72 L130,81","M130,38 L130,55 L130,81","M130,81 L145,82 L160,90 L177,94","M73,104 L84,109 L92,107 L108,107 L132,108","M108,107 L132,108 L151,118 L168,130","M129,148 L139,148 L148,146","M132,108 L132,130 L139,148","M105,165 L129,165","M84,123 L99,130 L101,148","M161,45 L156,55 L168,70 L177,49","M132,108 L151,118 L174,111"],l=[[70,17,2],[73,46,3],[117,31,2],[129,38,3],[149,43,2],[156,55,2],[177,49,3],[193,59,2],[194,70,3],[191,78,2],[184,84,2],[177,94,3],[35,80,2],[54,74,2],[130,81,2],[92,107,2],[132,108,3],[125,112,2],[151,128,2],[154,142,3],[138,145,3],[125,155,2],[129,165,2],[116,177,3],[99,130,2]],m=[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[1,13],[13,12],[13,14],[14,16],[16,17],[17,15],[15,14],[16,18],[18,19],[19,20],[20,21],[21,22],[22,23],[1,14],[3,6],[6,11],[11,18],[16,20],[17,20],[5,11],[4,14],[0,13],[12,1],[15,24],[24,20],[8,11],[14,17],[13,15],[1,3],[3,14],[20,18],[11,16],[5,8],[15,24],[24,21]];return o.jsx("div",{className:"relative w-20 h-20 sm:w-24 sm:h-24",children:o.jsxs("svg",{viewBox:"0 0 200 200",fill:"none",className:"w-full h-full",children:[o.jsxs("defs",{children:[o.jsxs("radialGradient",{id:"brGlow",cx:"55%",cy:"50%",r:"50%",children:[o.jsx("stop",{offset:"0%",stopColor:"#7DD3FC",stopOpacity:"0.08"}),o.jsx("stop",{offset:"100%",stopColor:"#7DD3FC",stopOpacity:"0"})]}),o.jsxs("filter",{id:"nodeGlow",children:[o.jsx("feGaussianBlur",{stdDeviation:"3",result:"b"}),o.jsxs("feMerge",{children:[o.jsx("feMergeNode",{in:"b"}),o.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),o.jsxs("filter",{id:"borderGlow",children:[o.jsx("feGaussianBlur",{stdDeviation:"1.5",result:"b"}),o.jsxs("feMerge",{children:[o.jsx("feMergeNode",{in:"b"}),o.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),o.jsx("ellipse",{cx:"110",cy:"100",rx:"90",ry:"95",fill:"url(#brGlow)"}),o.jsx("path",{d:i,fill:"rgba(125,211,252,0.04)",stroke:"#7DD3FC",strokeWidth:"1.4",strokeLinejoin:"round",filter:"url(#borderGlow)",children:o.jsx("animate",{attributeName:"stroke-opacity",values:"0.4;0.7;0.4",dur:"4s",repeatCount:"indefinite"})}),d.map((c,p)=>o.jsx("path",{d:c,stroke:"#7DD3FC",strokeWidth:"0.4",fill:"none",opacity:"0.08",strokeLinejoin:"round",children:o.jsx("animate",{attributeName:"opacity",values:"0.04;0.12;0.04",dur:`${3+p*.5}s`,repeatCount:"indefinite"})},`sb${p}`)),m.map(([c,p],f)=>o.jsx("line",{x1:l[c][0],y1:l[c][1],x2:l[p][0],y2:l[p][1],stroke:"#7DD3FC",strokeWidth:"0.5",opacity:"0.12",children:o.jsx("animate",{attributeName:"opacity",values:"0.06;0.22;0.06",dur:`${2+f%5*.4}s`,begin:`${f%7*.3}s`,repeatCount:"indefinite"})},`c${f}`)),l.map(([c,p,f],g)=>o.jsxs("g",{children:[o.jsx("circle",{cx:c,cy:p,r:f*3,fill:"#7DD3FC",opacity:"0.06",filter:"url(#nodeGlow)"}),o.jsxs("circle",{cx:c,cy:p,r:f*.9,fill:"#7DD3FC",children:[o.jsx("animate",{attributeName:"opacity",values:"0.5;1;0.5",dur:`${1.5+g*.12}s`,repeatCount:"indefinite"}),o.jsx("animate",{attributeName:"r",values:`${f*.6};${f*1.1};${f*.6}`,dur:`${1.8+g*.15}s`,repeatCount:"indefinite"})]})]},`n${g}`)),o.jsxs("circle",{r:"2",fill:"#7DD3FC",filter:"url(#nodeGlow)",children:[o.jsx("animateMotion",{dur:"4.5s",repeatCount:"indefinite",path:"M73,46 L129,38 L177,49 L193,59 L194,70 L177,94 L151,128 L154,142 L138,145 L125,155 L116,177"}),o.jsx("animate",{attributeName:"opacity",values:"0;1;1;1;0",dur:"4.5s",repeatCount:"indefinite"})]}),o.jsxs("circle",{r:"1.5",fill:"#34D399",children:[o.jsx("animateMotion",{dur:"3.5s",repeatCount:"indefinite",begin:"1.2s",path:"M35,80 L54,74 L92,107 L132,108 L138,145 L129,165 L116,177"}),o.jsx("animate",{attributeName:"opacity",values:"0;0.9;0.9;0",dur:"3.5s",begin:"1.2s",repeatCount:"indefinite"})]}),o.jsxs("circle",{r:"1.2",fill:"#FCD34D",children:[o.jsx("animateMotion",{dur:"3.8s",repeatCount:"indefinite",begin:"2.5s",path:"M149,43 L130,81 L132,108 L151,128 L154,142"}),o.jsx("animate",{attributeName:"opacity",values:"0;0.8;0.8;0",dur:"3.8s",begin:"2.5s",repeatCount:"indefinite"})]})]})})}function Qf(){const i=[[24,20],[20,28],[18,35],[22,42],[26,48],[30,54],[32,62],[30,70],[28,76],[52,18],[56,22],[60,20],[64,24],[58,28],[56,36],[60,42],[64,50],[62,58],[58,64],[54,56],[68,20],[72,26],[76,32],[80,28],[84,24],[78,38],[74,44],[82,54],[80,60],[36,30],[42,24]],d=[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[9,10],[10,11],[11,12],[12,13],[13,9],[14,15],[15,16],[16,17],[17,18],[18,19],[19,14],[20,21],[21,22],[22,23],[23,24],[24,20],[22,25],[25,26],[27,28],[0,29],[29,30],[30,9],[9,20],[13,14],[14,19],[19,15],[16,25],[25,27],[1,29],[2,30],[11,20],[12,21],[22,24],[23,27],[26,28],[17,27],[3,30],[10,13],[15,19],[21,25],[5,19],[6,18],[10,14],[24,22]];return o.jsx("div",{className:"relative w-20 h-20 sm:w-24 sm:h-24",children:o.jsxs("svg",{viewBox:"0 0 100 100",fill:"none",className:"w-full h-full",children:[o.jsxs("defs",{children:[o.jsxs("radialGradient",{id:"gGlow",cx:"40%",cy:"35%",r:"50%",children:[o.jsx("stop",{offset:"0%",stopColor:"#7DD3FC",stopOpacity:"0.1"}),o.jsx("stop",{offset:"100%",stopColor:"#7DD3FC",stopOpacity:"0"})]}),o.jsx("clipPath",{id:"gClip",children:o.jsx("circle",{cx:"50",cy:"50",r:"42"})}),o.jsxs("filter",{id:"gnGlow",children:[o.jsx("feGaussianBlur",{stdDeviation:"1.5",result:"b"}),o.jsxs("feMerge",{children:[o.jsx("feMergeNode",{in:"b"}),o.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),o.jsx("circle",{cx:"50",cy:"50",r:"42",fill:"url(#gGlow)"}),o.jsx("circle",{cx:"50",cy:"50",r:"42",stroke:"#7DD3FC",strokeWidth:"1",fill:"none",children:o.jsx("animate",{attributeName:"stroke-opacity",values:"0.25;0.55;0.25",dur:"4s",repeatCount:"indefinite"})}),o.jsxs("g",{clipPath:"url(#gClip)",opacity:"0.15",children:[o.jsx("path",{d:`M12,18 L14,14 L18,12 L22,10 L26,11 L30,10 L34,12 L36,10 L38,12
            L37,15 L35,18 L33,16 L30,18 L28,16 L26,18 L28,20 L30,22
            L28,24 L26,22 L24,24 L22,26 L20,24 L18,26 L16,28
            L18,30 L20,32 L22,34 L20,36 L18,34 L16,32 L14,30
            L12,28 L10,24 L10,20 Z`,fill:"#7DD3FC"}),o.jsx("path",{d:"M22,34 L24,36 L26,38 L24,40 L22,38 L20,36 Z",fill:"#7DD3FC"}),o.jsx("path",{d:"M14,30 L16,32 L14,34 L16,36 L18,38 L20,40 L22,42 L20,44 L18,42 L16,40 L14,38 L12,36 L10,34 L10,32 Z",fill:"#7DD3FC"}),o.jsx("path",{d:`M22,46 L26,44 L30,44 L34,46 L36,44 L38,46 L36,48
            L38,50 L36,52 L38,54 L40,56 L42,60 L42,64
            L40,68 L38,72 L36,76 L34,78 L32,80 L30,82
            L28,80 L26,76 L24,72 L22,68 L20,62
            L18,56 L18,52 L20,48 Z`,fill:"#7DD3FC"}),o.jsx("path",{d:"M48,14 L50,12 L52,14 L50,16 L48,16 Z",fill:"#7DD3FC"}),o.jsx("path",{d:`M52,10 L54,8 L56,10 L58,8 L60,10 L62,10 L64,12
            L66,14 L68,12 L70,14 L72,16 L74,14 L76,16
            L74,18 L72,20 L70,18 L68,20 L66,22 L64,20
            L62,22 L60,24 L58,22 L56,24 L54,22 L52,20
            L50,18 L52,16 L54,14 Z`,fill:"#7DD3FC"}),o.jsx("path",{d:"M50,22 L52,20 L54,22 L56,24 L54,26 L52,28 L50,26 L48,24 Z",fill:"#7DD3FC"}),o.jsx("path",{d:"M58,24 L60,26 L62,28 L60,30 L58,28 L56,26 Z",fill:"#7DD3FC"}),o.jsx("path",{d:`M50,30 L52,28 L54,30 L58,30 L62,32 L66,34
            L70,36 L72,38 L74,40 L76,44 L74,48
            L72,52 L70,56 L68,60 L66,64 L64,68
            L62,70 L60,68 L58,64 L56,60
            L54,56 L52,52 L50,48 L48,44
            L48,40 L48,36 L50,34 Z`,fill:"#7DD3FC"}),o.jsx("path",{d:"M72,58 L74,56 L76,58 L74,62 L72,60 Z",fill:"#7DD3FC"}),o.jsx("path",{d:"M70,28 L74,26 L76,28 L78,30 L80,32 L78,34 L76,36 L74,34 L72,32 L70,30 Z",fill:"#7DD3FC"}),o.jsx("path",{d:`M78,22 L80,20 L82,18 L84,20 L86,22 L88,26
            L90,30 L88,32 L86,30 L84,28 L82,26 L80,24 Z`,fill:"#7DD3FC"}),o.jsx("path",{d:"M80,34 L82,32 L84,34 L86,36 L84,40 L82,44 L80,42 L78,38 L78,36 Z",fill:"#7DD3FC"}),o.jsx("path",{d:"M86,34 L88,32 L90,34 L88,38 L86,40 L84,38 Z",fill:"#7DD3FC"}),o.jsx("path",{d:"M82,52 L86,50 L90,52 L92,56 L90,60 L86,62 L82,60 L80,56 Z",fill:"#7DD3FC"})]}),o.jsx("ellipse",{cx:"50",cy:"50",rx:"42",ry:"12",stroke:"#7DD3FC",strokeWidth:"0.3",opacity:"0.08"}),o.jsx("ellipse",{cx:"50",cy:"50",rx:"42",ry:"24",stroke:"#7DD3FC",strokeWidth:"0.3",opacity:"0.07"}),o.jsx("ellipse",{cx:"50",cy:"50",rx:"42",ry:"36",stroke:"#7DD3FC",strokeWidth:"0.3",opacity:"0.06"}),o.jsx("ellipse",{cx:"50",cy:"50",rx:"14",ry:"42",stroke:"#7DD3FC",strokeWidth:"0.3",opacity:"0.08"}),o.jsx("ellipse",{cx:"50",cy:"50",rx:"28",ry:"42",stroke:"#7DD3FC",strokeWidth:"0.3",opacity:"0.07"}),o.jsx("line",{x1:"8",y1:"50",x2:"92",y2:"50",stroke:"#7DD3FC",strokeWidth:"0.3",opacity:"0.08"}),o.jsx("line",{x1:"50",y1:"8",x2:"50",y2:"92",stroke:"#7DD3FC",strokeWidth:"0.3",opacity:"0.06"}),d.map(([l,m],c)=>o.jsx("line",{x1:i[l][0],y1:i[l][1],x2:i[m][0],y2:i[m][1],stroke:"#7DD3FC",strokeWidth:"0.35",opacity:"0.1",children:o.jsx("animate",{attributeName:"opacity",values:"0.05;0.18;0.05",dur:`${2+c%6*.3}s`,begin:`${c%8*.2}s`,repeatCount:"indefinite"})},`gm${c}`)),i.map(([l,m],c)=>o.jsxs("g",{children:[o.jsx("circle",{cx:l,cy:m,r:"2",fill:"#7DD3FC",opacity:"0.04",filter:"url(#gnGlow)"}),o.jsx("circle",{cx:l,cy:m,r:c%3===0?1.2:.7,fill:"#7DD3FC",children:o.jsx("animate",{attributeName:"opacity",values:"0.4;0.9;0.4",dur:`${1.5+c%5*.2}s`,repeatCount:"indefinite"})})]},`gn${c}`)),o.jsxs("circle",{r:"1.2",fill:"#7DD3FC",filter:"url(#gnGlow)",children:[o.jsx("animateMotion",{dur:"5s",repeatCount:"indefinite",path:"M24,20 L30,54 L32,62 L28,76 L50,88 L64,50 L76,32 L84,24 L82,54"}),o.jsx("animate",{attributeName:"opacity",values:"0;1;1;1;0",dur:"5s",repeatCount:"indefinite"})]}),o.jsxs("circle",{r:"1",fill:"#34D399",children:[o.jsx("animateMotion",{dur:"4s",repeatCount:"indefinite",begin:"1.5s",path:"M52,18 L60,20 L72,26 L80,28 L78,38 L62,58 L56,36 L30,54 L22,42"}),o.jsx("animate",{attributeName:"opacity",values:"0;0.9;0.9;0",dur:"4s",begin:"1.5s",repeatCount:"indefinite"})]}),o.jsx("circle",{cx:"50",cy:"50",r:"46",stroke:"#7DD3FC",strokeWidth:"0.4",strokeDasharray:"3 5",opacity:"0.08",children:o.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"25s",repeatCount:"indefinite"})})]})})}function Jf(){const i=[{id:1,angle:0,delay:"0s",label:"Chubb"},{id:2,angle:51,delay:"0.7s",label:"Coface"},{id:3,angle:102,delay:"1.4s",label:"Atradius"},{id:4,angle:153,delay:"2.1s",label:"AVLA"},{id:5,angle:204,delay:"2.8s",label:"AIG"},{id:6,angle:255,delay:"3.5s",label:"Allianz"},{id:7,angle:306,delay:"4.2s",label:"CESCE"}];return o.jsxs("div",{className:"relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] flex items-center justify-center select-none",children:[o.jsx("div",{className:"absolute inset-0 rounded-full",style:{background:"radial-gradient(circle, rgba(125,211,252,0.06) 0%, transparent 70%)"}}),o.jsx("div",{className:"absolute inset-4 rounded-full border border-sentinel/10 animate-spin",style:{animationDuration:"18s"}}),o.jsx("div",{className:"absolute inset-8 rounded-full border border-dashed border-sentinel/8 animate-spin",style:{animationDuration:"28s",animationDirection:"reverse"}}),o.jsx("div",{className:"absolute inset-14 rounded-full border border-sentinel/12 animate-spin",style:{animationDuration:"12s"}}),i.map(d=>{const l=d.angle*Math.PI/180,m=120,c=Math.cos(l)*m,p=Math.sin(l)*m;return o.jsxs("div",{className:"absolute flex flex-col items-center gap-0.5",style:{transform:`translate(${c}px, ${p}px)`,animation:"orbit-pulse 3s ease-in-out infinite",animationDelay:d.delay},children:[o.jsx("div",{className:"w-2 h-2 rounded-full bg-sentinel shadow-lg",style:{boxShadow:"0 0 8px rgba(125,211,252,0.8)"}}),o.jsx("span",{className:"text-[7px] text-sentinel/60 font-mono font-bold whitespace-nowrap",children:d.label})]},d.id)}),o.jsx("div",{className:"absolute inset-14 rounded-full overflow-hidden",children:o.jsx("div",{className:"absolute inset-0 rounded-full animate-spin",style:{animationDuration:"3s",background:"conic-gradient(from 0deg, transparent 0deg, rgba(125,211,252,0.15) 60deg, transparent 90deg)"}})}),o.jsxs("div",{className:"relative z-10 flex items-center justify-center",children:[o.jsx("div",{className:"absolute w-32 h-32 rounded-full animate-pulse",style:{background:"radial-gradient(circle, rgba(125,211,252,0.12) 0%, transparent 70%)",animationDuration:"2.5s"}}),o.jsxs("svg",{viewBox:"0 0 120 136",className:"w-24 h-24 sm:w-28 sm:h-28 drop-shadow-xl",fill:"none",children:[o.jsxs("defs",{children:[o.jsxs("linearGradient",{id:"sg",x1:"0",y1:"0",x2:"0",y2:"1",children:[o.jsx("stop",{offset:"0%",stopColor:"#1E3A5F"}),o.jsx("stop",{offset:"100%",stopColor:"#0A1628"})]}),o.jsxs("linearGradient",{id:"sb",x1:"0",y1:"0",x2:"1",y2:"1",children:[o.jsx("stop",{offset:"0%",stopColor:"#7DD3FC"}),o.jsx("stop",{offset:"100%",stopColor:"#38BDF8"})]}),o.jsxs("filter",{id:"glow-s",children:[o.jsx("feGaussianBlur",{stdDeviation:"2.5",result:"blur"}),o.jsxs("feMerge",{children:[o.jsx("feMergeNode",{in:"blur"}),o.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),o.jsx("path",{d:"M60 4 L112 26 L112 72 Q112 112 60 132 Q8 112 8 72 L8 26 Z",fill:"url(#sg)"}),o.jsx("path",{d:"M60 4 L112 26 L112 72 Q112 112 60 132 Q8 112 8 72 L8 26 Z",fill:"none",stroke:"url(#sb)",strokeWidth:"1.5",opacity:"0.6",filter:"url(#glow-s)"}),o.jsx("path",{d:"M60 14 L102 32 L102 72 Q102 104 60 122 Q18 104 18 72 L18 32 Z",fill:"none",stroke:"rgba(125,211,252,0.15)",strokeWidth:"1"}),o.jsx("text",{x:"60",y:"84",fontFamily:"Arial,Helvetica,sans-serif",fontWeight:"900",fontSize:"44",fill:"url(#sb)",textAnchor:"middle",filter:"url(#glow-s)",opacity:"0.7",children:"$"}),o.jsxs("g",{stroke:"rgba(125,211,252,0.3)",strokeWidth:"1",fill:"none",children:[o.jsx("polyline",{points:"20,35 14,35 14,28"}),o.jsx("polyline",{points:"100,35 106,35 106,28"}),o.jsx("polyline",{points:"20,100 14,100 14,107"}),o.jsx("polyline",{points:"100,100 106,100 106,107"})]}),o.jsx("line",{x1:"18",y1:"75",x2:"102",y2:"75",stroke:"rgba(125,211,252,0.25)",strokeWidth:"1",style:{animation:"scan-line 2.5s ease-in-out infinite"}})]})]}),o.jsx("style",{children:`
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
      `})]})}function Kf(){const[i,d]=S.useState(!1),l=Wf();S.useEffect(()=>{function c(){d(!0),window.scrollTo({top:0,behavior:"smooth"})}return window.addEventListener("sentinel-iniciar",c),()=>window.removeEventListener("sentinel-iniciar",c)},[]),S.useEffect(()=>{window.dispatchEvent(new CustomEvent(i?"sentinel-started":"sentinel-reset"))},[i]);const m=[{src:`${No}logos/coface.png`,alt:"Coface",invert:!0,size:"h-7 sm:h-9",mini:"h-5"},{src:`${No}logos/atradius.svg`,alt:"Atradius",size:"h-7 sm:h-9",mini:"h-5"},{src:`${No}logos/allianz-trade.png`,alt:"Allianz Trade",invert:!0,size:"h-9 sm:h-12",mini:"h-7"},{src:`${No}logos/avla.svg`,alt:"AVLA",size:"h-6 sm:h-8",mini:"h-4"},{src:`${No}logos/aig.png`,alt:"AIG",size:"h-7 sm:h-9",mini:"h-5"},{src:`${No}logos/cesce.svg`,alt:"CESCE",size:"h-7 sm:h-9",mini:"h-5"},{src:`${No}logos/chubb.svg`,alt:"CHUBB",size:"h-7 sm:h-9",mini:"h-5"}];return o.jsxs("div",{className:"max-w-6xl mx-auto px-3 sm:px-4 py-6 sm:py-10",children:[!i&&o.jsxs("div",{className:"animate-fadeIn",children:[o.jsxs("section",{className:"relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-navy via-navy-light to-navy p-8 sm:p-12 pb-10 mb-8",children:[o.jsx("div",{className:"absolute top-0 right-0 w-[500px] h-[500px] bg-sentinel/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-[120px]"}),o.jsx("div",{className:"absolute bottom-0 left-0 w-[300px] h-[300px] bg-cobre/5 rounded-full translate-y-1/2 -translate-x-1/4 blur-[100px]"}),o.jsx("div",{className:"absolute inset-0 bg-grid opacity-30"}),o.jsxs("div",{className:"relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-6",children:[o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-[1.05] tracking-tight text-white",children:o.jsx("span",{className:"bg-gradient-to-r from-sentinel to-sentinel-light bg-clip-text text-transparent",children:"SENTINEL"})}),o.jsxs("p",{className:"text-lg sm:text-xl font-medium text-white/50 mb-6 leading-relaxed max-w-lg",children:["Nossa plataforma analisa o perfil da sua empresa e consulta simultaneamente todas as seguradoras do mercado, garantindo a ",o.jsx("strong",{className:"text-cobre",children:"melhor opcao em seguro de credito"})," para o seu negocio."]}),o.jsxs("button",{onClick:()=>{d(!0),window.scrollTo({top:0,behavior:"smooth"})},className:"group relative inline-flex items-center gap-3 bg-gradient-to-r from-sentinel-dark to-sentinel text-navy-dark px-8 sm:px-10 py-4 rounded-2xl font-bold text-base sm:text-lg shadow-xl shadow-sentinel/15 hover:shadow-2xl hover:shadow-sentinel/25 hover:scale-[1.02] transition-all duration-300",children:[o.jsx("svg",{className:"w-5 h-5 group-hover:translate-x-1 transition-transform",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),"Iniciar Cotacao",o.jsx("span",{className:"absolute -top-2 -right-2 bg-accent-emerald text-navy-dark text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse",children:"Gratis"})]}),o.jsx("p",{className:"text-white/20 text-xs mt-4",children:"Sem compromisso · Resultado em ate 5 dias uteis"})]}),o.jsx("div",{className:"flex-shrink-0 flex items-center justify-center w-full lg:w-auto",children:o.jsx(Jf,{})})]})]}),o.jsxs("section",{className:"card-glass mb-8 relative overflow-hidden",children:[o.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[o.jsx("div",{className:"absolute -top-20 -right-20 w-[300px] h-[300px] bg-sentinel/5 rounded-full blur-[100px]"}),o.jsx("div",{className:"absolute -bottom-20 -left-20 w-[250px] h-[250px] bg-cobre/5 rounded-full blur-[100px]"}),o.jsx("div",{className:"absolute inset-0 bg-grid opacity-20"})]}),o.jsxs("div",{className:"relative z-10",children:[o.jsxs("div",{className:"text-center mb-10",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sentinel/10 border border-sentinel/20 text-sentinel text-[10px] font-bold uppercase tracking-widest mb-3",children:[o.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-sentinel animate-pulse"}),"Resultados Comprovados"]}),o.jsx("h2",{className:"text-2xl sm:text-3xl font-black text-white",children:"Por que escolher o SENTINEL"}),o.jsx("p",{className:"text-white/30 text-sm mt-2",children:"Numeros que falam por si — tecnologia que transforma."})]}),o.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-10",children:[{val:7,suffix:"",label:"Seguradoras conectadas",icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"})}),gradient:"from-sentinel to-sentinel-light",iconClass:"bg-sentinel/10 border border-sentinel/20 text-sentinel shadow-lg shadow-sentinel/5"},{val:500,suffix:"+",label:"Empresas atendidas",icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"})}),gradient:"from-cobre to-cobre-light",iconClass:"bg-cobre/10 border border-cobre/20 text-cobre shadow-lg shadow-cobre/5"},{val:98,suffix:"%",label:"Satisfacao dos clientes",icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"})}),gradient:"from-accent-emerald to-emerald-300",iconClass:"bg-accent-emerald/10 border border-accent-emerald/20 text-accent-emerald shadow-lg shadow-accent-emerald/5"},{val:5,suffix:" dias",label:"Prazo de entrega",icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),gradient:"from-accent-violet to-violet-300",iconClass:"bg-accent-violet/10 border border-accent-violet/20 text-accent-violet shadow-lg shadow-accent-violet/5"}].map(c=>o.jsxs("div",{className:"text-center group",children:[o.jsx("div",{className:`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 ${c.iconClass}`,children:c.icon}),o.jsx("p",{className:"text-3xl sm:text-4xl font-black text-white",children:o.jsx(Uf,{end:c.val,suffix:c.suffix})}),o.jsx("p",{className:"text-xs sm:text-sm text-white/40 mt-2 font-medium",children:c.label})]},c.label))}),o.jsx("div",{className:"h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-10"}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),title:"100% Gratuito",text:"O estudo de mercado SENTINEL e totalmente gratuito. Atuamos como suporte adicional a sua area de credito.",color:"emerald",borderColor:"border-l-accent-emerald/50",iconBg:"bg-accent-emerald/10 text-accent-emerald border-accent-emerald/20"},{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),title:"Decisao Estrategica",text:"Seus dados geram um estudo de mercado completo — determinante para a estrategia de credito da sua empresa.",color:"sentinel",borderColor:"border-l-sentinel/50",iconBg:"bg-sentinel/10 text-sentinel border-sentinel/20"},{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),title:"IA + Inteligencia de Mercado",text:"O SENTINEL processa seu perfil com IA e cruza dados de 7 seguradoras para recomendar a melhor solucao.",color:"cobre",borderColor:"border-l-cobre/50",iconBg:"bg-cobre/10 text-cobre border-cobre/20"}].map(c=>o.jsxs("div",{className:`rounded-xl bg-white/[0.03] border border-white/[0.06] border-l-[3px] ${c.borderColor} p-5 hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300 group`,children:[o.jsx("div",{className:`h-11 w-11 rounded-xl border flex items-center justify-center mb-4 ${c.iconBg} group-hover:scale-110 transition-transform duration-300`,children:c.icon}),o.jsx("h4",{className:"text-base font-bold text-white mb-2",children:c.title}),o.jsx("p",{className:"text-sm text-white/35 leading-relaxed",children:c.text})]},c.title))})]})]}),o.jsxs("section",{className:"card-glass mb-8 relative overflow-hidden",children:[o.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:o.jsx("div",{className:"absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sentinel/20 to-transparent",style:{animation:"flow-scan 4s ease-in-out infinite"}})}),o.jsxs("div",{className:"text-center mb-8",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sentinel/10 border border-sentinel/20 text-sentinel text-[10px] font-bold uppercase tracking-widest mb-3",children:[o.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-sentinel animate-pulse"}),"Smart Credit Engine"]}),o.jsx("h2",{className:"text-2xl sm:text-3xl font-black text-white",children:"Como funciona o SENTINEL"}),o.jsx("p",{className:"text-white/30 text-sm mt-2",children:"Tres etapas. Uma plataforma. A melhor solucao de credito."})]}),o.jsxs("div",{className:"relative",children:[o.jsx("div",{className:"hidden md:block absolute z-0 overflow-visible",style:{top:"35px",left:"calc(16.667% - 0.833rem + 36px)",width:"calc(33.333% + 0.833rem - 72px)",height:"2px"},children:o.jsxs("div",{className:"w-full h-full bg-sentinel/15 relative overflow-visible",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-sky-300/40 to-sky-400/40",style:{animation:"linePulse 2s ease-in-out infinite"}}),o.jsx("div",{className:"absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-sky-300 shadow-[0_0_8px_#7DD3FC]",style:{animation:"travelDot 2.5s linear infinite"}})]})}),o.jsx("div",{className:"hidden md:block absolute z-0 overflow-visible",style:{top:"35px",left:"calc(50% + 36px)",width:"calc(33.333% + 0.833rem - 72px)",height:"2px"},children:o.jsxs("div",{className:"w-full h-full bg-sentinel/15 relative overflow-visible",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-sky-400/40 to-emerald-400/40",style:{animation:"linePulse 2s ease-in-out infinite",animationDelay:"1s"}}),o.jsx("div",{className:"absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]",style:{animation:"travelDot 2.5s linear infinite",animationDelay:"0.8s"}})]})}),o.jsxs("div",{className:"relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10",children:[o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"w-[72px] h-[72px] rounded-2xl bg-sentinel/10 border border-sentinel/20 flex items-center justify-center mx-auto mb-4",children:o.jsx("svg",{className:"h-7 w-7 text-sentinel",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),o.jsx("h3",{className:"text-sm font-bold text-white mb-1",children:"Seus Dados"}),o.jsx("p",{className:"text-[11px] text-white/30 mb-3",children:"Preencha as informacoes da empresa"}),o.jsx(Gf,{items:["CNPJ / Razao Social","Faturamento e Carteira","Historico de Perdas","Amostra de Compradores"]})]}),o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"w-[72px] h-[72px] rounded-2xl bg-sentinel/15 border border-sentinel/25 flex items-center justify-center mx-auto mb-4 relative overflow-hidden",children:o.jsxs("svg",{className:"h-12 w-12",viewBox:"0 0 48 48",fill:"none",children:[o.jsx("line",{x1:"0",y1:"14",x2:"14",y2:"14",stroke:"#7DD3FC",strokeWidth:"1",opacity:"0.3",children:o.jsx("animate",{attributeName:"opacity",values:"0.1;0.6;0.1",dur:"1.5s",repeatCount:"indefinite"})}),o.jsx("line",{x1:"34",y1:"14",x2:"48",y2:"14",stroke:"#7DD3FC",strokeWidth:"1",opacity:"0.3",children:o.jsx("animate",{attributeName:"opacity",values:"0.1;0.6;0.1",dur:"1.5s",begin:"0.3s",repeatCount:"indefinite"})}),o.jsx("line",{x1:"0",y1:"24",x2:"14",y2:"24",stroke:"#7DD3FC",strokeWidth:"1",opacity:"0.3",children:o.jsx("animate",{attributeName:"opacity",values:"0.1;0.6;0.1",dur:"1.8s",begin:"0.5s",repeatCount:"indefinite"})}),o.jsx("line",{x1:"34",y1:"24",x2:"48",y2:"24",stroke:"#7DD3FC",strokeWidth:"1",opacity:"0.3",children:o.jsx("animate",{attributeName:"opacity",values:"0.1;0.6;0.1",dur:"1.8s",begin:"0.8s",repeatCount:"indefinite"})}),o.jsx("line",{x1:"0",y1:"34",x2:"14",y2:"34",stroke:"#7DD3FC",strokeWidth:"1",opacity:"0.3",children:o.jsx("animate",{attributeName:"opacity",values:"0.1;0.6;0.1",dur:"1.6s",begin:"1s",repeatCount:"indefinite"})}),o.jsx("line",{x1:"34",y1:"34",x2:"48",y2:"34",stroke:"#7DD3FC",strokeWidth:"1",opacity:"0.3",children:o.jsx("animate",{attributeName:"opacity",values:"0.1;0.6;0.1",dur:"1.6s",begin:"0.2s",repeatCount:"indefinite"})}),o.jsx("line",{x1:"14",y1:"0",x2:"14",y2:"14",stroke:"#7DD3FC",strokeWidth:"1",opacity:"0.3",children:o.jsx("animate",{attributeName:"opacity",values:"0.1;0.6;0.1",dur:"2s",begin:"0.4s",repeatCount:"indefinite"})}),o.jsx("line",{x1:"34",y1:"0",x2:"34",y2:"14",stroke:"#7DD3FC",strokeWidth:"1",opacity:"0.3",children:o.jsx("animate",{attributeName:"opacity",values:"0.1;0.6;0.1",dur:"2s",begin:"0.7s",repeatCount:"indefinite"})}),o.jsx("line",{x1:"14",y1:"34",x2:"14",y2:"48",stroke:"#7DD3FC",strokeWidth:"1",opacity:"0.3",children:o.jsx("animate",{attributeName:"opacity",values:"0.1;0.6;0.1",dur:"1.4s",begin:"0.6s",repeatCount:"indefinite"})}),o.jsx("line",{x1:"34",y1:"34",x2:"34",y2:"48",stroke:"#7DD3FC",strokeWidth:"1",opacity:"0.3",children:o.jsx("animate",{attributeName:"opacity",values:"0.1;0.6;0.1",dur:"1.4s",begin:"0.9s",repeatCount:"indefinite"})}),o.jsxs("circle",{r:"1.5",fill:"#7DD3FC",children:[o.jsx("animateMotion",{dur:"1.2s",repeatCount:"indefinite",path:"M0,14 L14,14"}),o.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"1.2s",repeatCount:"indefinite"})]}),o.jsxs("circle",{r:"1.5",fill:"#34D399",children:[o.jsx("animateMotion",{dur:"1s",repeatCount:"indefinite",path:"M48,24 L34,24",begin:"0.4s"}),o.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"1s",begin:"0.4s",repeatCount:"indefinite"})]}),o.jsxs("circle",{r:"1.5",fill:"#7DD3FC",children:[o.jsx("animateMotion",{dur:"1.1s",repeatCount:"indefinite",path:"M14,48 L14,34",begin:"0.7s"}),o.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"1.1s",begin:"0.7s",repeatCount:"indefinite"})]}),o.jsxs("circle",{r:"1.5",fill:"#34D399",children:[o.jsx("animateMotion",{dur:"0.9s",repeatCount:"indefinite",path:"M34,0 L34,14",begin:"0.2s"}),o.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"0.9s",begin:"0.2s",repeatCount:"indefinite"})]}),o.jsx("rect",{x:"14",y:"14",width:"20",height:"20",rx:"3",stroke:"#7DD3FC",strokeWidth:"1.5",fill:"rgba(125,211,252,0.08)",children:o.jsx("animate",{attributeName:"stroke-opacity",values:"0.4;0.9;0.4",dur:"2s",repeatCount:"indefinite"})}),o.jsx("rect",{x:"19",y:"19",width:"10",height:"10",rx:"1.5",fill:"rgba(125,211,252,0.15)",stroke:"#7DD3FC",strokeWidth:"0.8",children:o.jsx("animate",{attributeName:"fill-opacity",values:"0.1;0.4;0.1",dur:"1.5s",repeatCount:"indefinite"})}),[14,24,34].map(c=>[14,34].map(p=>o.jsx("circle",{cx:p,cy:c,r:"1",fill:"#7DD3FC",opacity:"0.5",children:o.jsx("animate",{attributeName:"opacity",values:"0.3;1;0.3",dur:`${1+Math.random()}s`,repeatCount:"indefinite"})},`${p}-${c}`)))]})}),o.jsx("h3",{className:"text-sm font-bold text-white mb-1",children:"SENTINEL Analisa"}),o.jsx("p",{className:"text-[11px] text-white/30 mb-3",children:"IA consulta simultaneamente"}),o.jsxs("div",{className:"rounded-lg bg-navy-dark/60 border border-white/[0.06] p-2.5 mb-3 max-w-[260px] mx-auto",children:[o.jsxs("div",{className:"flex items-center gap-1 mb-1.5",children:[o.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-rose-400/60"}),o.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-amber-400/60"}),o.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-accent-emerald/60"}),o.jsx("span",{className:"text-[8px] text-white/15 ml-1.5 font-mono",children:"sentinel-engine v1.0"})]}),o.jsx("p",{className:"text-[10px] text-sentinel font-mono min-h-[14px]",children:l}),o.jsx("div",{className:"mt-1.5 h-1 rounded-full bg-white/[0.06] overflow-hidden",children:o.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-sentinel to-accent-emerald animate-progress-loop"})})]}),o.jsxs("div",{className:"space-y-3 max-w-[300px] mx-auto",children:[o.jsx("div",{className:"flex justify-center items-center gap-4",children:m.slice(0,4).map(c=>o.jsx("img",{src:c.src,alt:c.alt,title:c.alt,className:`${c.mini||"h-5"} w-auto object-contain brightness-0 invert opacity-40 hover:opacity-80 transition-opacity`},c.alt))}),o.jsx("div",{className:"flex justify-center items-center gap-4",children:m.slice(4).map(c=>o.jsx("img",{src:c.src,alt:c.alt,title:c.alt,className:`${c.mini||"h-5"} w-auto object-contain brightness-0 invert opacity-40 hover:opacity-80 transition-opacity`},c.alt))})]})]}),o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"w-[72px] h-[72px] rounded-2xl bg-accent-emerald/10 border border-accent-emerald/20 flex items-center justify-center mx-auto mb-4",children:o.jsx("svg",{className:"h-7 w-7 text-accent-emerald",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"})})}),o.jsx("h3",{className:"text-sm font-bold text-white mb-1",children:"Melhor Oferta"}),o.jsx("p",{className:"text-[11px] text-white/30 mb-3",children:"Resultado otimizado para voce"}),o.jsxs("div",{className:"space-y-2 max-w-[220px] mx-auto",children:[o.jsxs("div",{className:"p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-left",children:[o.jsx("span",{className:"text-[9px] text-white/25 block",children:"Comparativo"}),o.jsx("span",{className:"text-xs font-bold text-accent-emerald",children:"7 seguradoras analisadas"})]}),o.jsxs("div",{className:"flex gap-1.5",children:[o.jsxs("div",{className:"flex-1 p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] text-left",children:[o.jsx("span",{className:"text-[8px] text-white/25 block",children:"Prazo"}),o.jsx("span",{className:"text-[11px] font-bold text-white",children:"5 dias"})]}),o.jsxs("div",{className:"flex-1 p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] text-left",children:[o.jsx("span",{className:"text-[8px] text-white/25 block",children:"Economia"}),o.jsx("span",{className:"text-[11px] font-bold text-accent-emerald",children:"-30%"})]})]})]})]})]})]}),o.jsx("style",{children:`
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
            `})]}),o.jsxs("section",{className:"card-glass mb-8",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-5",children:[o.jsx("div",{className:"h-10 w-10 rounded-xl bg-cobre/15 border border-cobre/25 flex items-center justify-center flex-shrink-0",children:o.jsx("svg",{className:"w-5 h-5 text-cobre",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"})})}),o.jsxs("div",{children:[o.jsx("p",{className:"text-cobre text-[10px] font-bold uppercase tracking-widest",children:"Fairfield — Consultora Independente"}),o.jsx("h2",{className:"text-xl sm:text-2xl font-black text-white",children:"Nosso compromisso"})]})]}),o.jsxs("p",{className:"text-white/40 text-base sm:text-lg leading-relaxed mb-6",children:["A Fairfield atua como ",o.jsx("strong",{className:"text-white/70",children:"consultoria em Seguro de Credito 100% independente"})," — nao representamos nenhuma seguradora. O ",o.jsx("strong",{className:"text-sentinel",children:"SENTINEL"})," e nossa plataforma proprietaria que combina ",o.jsx("strong",{className:"text-white/70",children:"inteligencia artificial"})," com decadas de experiencia no mercado segurador, garantindo a ",o.jsx("strong",{className:"text-cobre",children:"melhor condicao do mercado"})," para a sua empresa ",o.jsx("strong",{className:"text-white/70",children:"sem que voce tenha que pagar a mais por isso"}),"."]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[o.jsx(Pn,{title:"Imparcialidade Total",text:"Analisamos todas as propostas sem conflito de interesse.",color:"sentinel"}),o.jsx(Pn,{title:"Analise Tecnica Profunda",text:"Comparamos cobertura, premio, franquias e servicos agregados.",color:"cobre"}),o.jsx(Pn,{title:"Melhor Custo-Beneficio",text:"Garantimos acesso as melhores condicoes do mercado.",color:"emerald"})]})]}),o.jsxs("section",{className:"mb-8",children:[o.jsx("p",{className:"text-center text-[10px] text-white/30 uppercase tracking-widest font-bold mb-6",children:"Seguradoras parceiras conectadas"}),o.jsxs("div",{className:"card-glass px-6 py-8",children:[o.jsx("div",{className:"flex flex-wrap justify-center items-center gap-8 sm:gap-12",children:m.map(c=>o.jsx("div",{className:`flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 ${c.size||"h-10 sm:h-12"}`,children:o.jsx("img",{src:c.src,alt:c.alt,className:`h-full w-auto object-contain ${c.invert?"brightness-0 invert":""}`})},c.alt))}),o.jsx("div",{className:"section-divider mt-7"}),o.jsxs("p",{className:"text-center text-sm text-white/40 mt-5",children:["O ",o.jsx("span",{className:"text-sentinel font-bold",children:"SENTINEL"})," consulta todas simultaneamente e identifica a ",o.jsx("span",{className:"text-cobre font-bold",children:"melhor solucao"}),"."]})]})]}),o.jsxs("section",{className:"text-center mb-6",children:[o.jsxs("button",{onClick:()=>{d(!0),window.scrollTo({top:0,behavior:"smooth"})},className:"group relative inline-flex items-center gap-3 bg-gradient-to-r from-sentinel-dark to-sentinel text-navy-dark px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-sentinel/15 hover:shadow-2xl hover:shadow-sentinel/25 hover:scale-[1.02] transition-all duration-300",children:[o.jsx("svg",{className:"w-5 h-5 group-hover:translate-x-1 transition-transform",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),"Iniciar Cotacao Gratuita"]}),o.jsx("p",{className:"text-white/15 text-xs mt-3",children:"Sem compromisso · Leva menos de 10 minutos"})]})]}),i&&o.jsxs("div",{className:"animate-fadeIn",children:[o.jsxs("div",{className:"flex items-center justify-between mb-6 sm:mb-8",children:[o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx(ir,{size:48}),o.jsxs("div",{children:[o.jsx("h2",{className:"text-2xl sm:text-3xl font-black text-white",children:"Escolha o tipo de operacao"}),o.jsx("p",{className:"text-white/35 text-sm",children:"Selecione o formulario adequado ao seu perfil"})]})]}),o.jsxs("button",{onClick:()=>d(!1),className:"text-xs text-white/30 hover:text-sentinel transition-colors flex items-center gap-1",children:[o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),"Voltar"]})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6",children:[o.jsxs(tr,{to:"/cotacao/interno",className:"group card-glass hover:border-sentinel/30 transition-all duration-300 flex flex-col",children:[o.jsx("div",{className:"rounded-xl bg-gradient-to-br from-sentinel/10 to-transparent p-5 mb-5 flex items-center justify-center",children:o.jsx(Hf,{})}),o.jsx("h3",{className:"text-2xl sm:text-3xl font-black text-white mb-2 group-hover:text-sentinel transition-colors",children:"Credito Interno"}),o.jsx("p",{className:"text-base text-cobre font-semibold mb-3",children:"Operacoes Nacionais (Brasil)"}),o.jsx("p",{className:"text-white/40 text-base flex-1 leading-relaxed",children:"Protecao para vendas a prazo no mercado brasileiro. Cobertura contra inadimplencia de compradores nacionais."}),o.jsx("div",{className:"mt-5 pt-4 border-t border-white/[0.06]",children:o.jsxs("ul",{className:"text-sm text-white/30 space-y-1.5",children:[o.jsx("li",{children:"• Valores em Reais (R$)"}),o.jsx("li",{children:"• Ate 20 compradores na amostra"}),o.jsx("li",{children:"• Detalhamento de perdas por faixa"})]})}),o.jsx("div",{className:"mt-5 btn-primary text-center text-base",children:"Iniciar Estudo de Mercado"})]}),o.jsxs(tr,{to:"/cotacao/externo",className:"group card-glass hover:border-cobre/30 transition-all duration-300 flex flex-col",children:[o.jsx("div",{className:"rounded-xl bg-gradient-to-br from-cobre/10 to-transparent p-5 mb-5 flex items-center justify-center",children:o.jsx(Qf,{})}),o.jsx("h3",{className:"text-2xl sm:text-3xl font-black text-white mb-2 group-hover:text-cobre transition-colors",children:"Credito Externo"}),o.jsx("p",{className:"text-base text-cobre font-semibold mb-3",children:"Operacoes de Exportacao"}),o.jsx("p",{className:"text-white/40 text-base flex-1 leading-relaxed",children:"Protecao para vendas internacionais. Cobertura contra inadimplencia de importadores estrangeiros."}),o.jsx("div",{className:"mt-5 pt-4 border-t border-white/[0.06]",children:o.jsxs("ul",{className:"text-sm text-white/30 space-y-1.5",children:[o.jsx("li",{children:"• Valores em Dolares (US$)"}),o.jsx("li",{children:"• Distribuicao por continente/pais"}),o.jsx("li",{children:"• Ate 10 compradores na amostra"})]})}),o.jsx("div",{className:"mt-5 btn-accent text-center text-base",children:"Iniciar Estudo de Mercado"})]})]}),o.jsx("div",{className:"mt-6 text-center",children:o.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-emerald/10 border border-accent-emerald/20",children:[o.jsx("svg",{className:"w-3.5 h-3.5 text-accent-emerald",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),o.jsx("span",{className:"text-sm text-accent-emerald font-medium",children:"100% gratuito e sem compromisso — seus dados sao protegidos pela LGPD"})]})}),o.jsxs("div",{className:"mt-6 card-glass",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[o.jsx("div",{className:"h-10 w-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center flex-shrink-0",children:o.jsx("svg",{className:"w-5 h-5 text-white/40",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})})}),o.jsxs("div",{children:[o.jsx("p",{className:"text-cobre text-xs font-bold uppercase tracking-widest",children:"Sigilo Garantido"}),o.jsx("h4",{className:"text-xl font-bold text-white",children:"Compromisso de Confidencialidade"})]})]}),o.jsx("p",{className:"text-white/35 text-base leading-relaxed mb-4",children:"Todas as informacoes sao estritamente confidenciais e protegidas por contrato de sigilo. Seus dados nunca serao compartilhados alem do necessario para a cotacao."}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:["Dados utilizados exclusivamente para estudo de mercado","Sigilo absoluto sobre dados financeiros e comerciais","Nenhuma informacao compartilhada sem autorizacao","Dados pessoais protegidos nos termos da LGPD"].map(c=>o.jsxs("div",{className:"flex items-start gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]",children:[o.jsx("svg",{className:"w-3.5 h-3.5 text-accent-emerald flex-shrink-0 mt-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),o.jsx("p",{className:"text-sm text-white/40 leading-relaxed",children:c})]},c))}),o.jsxs("div",{className:"flex items-center gap-2 text-white/15 text-[10px] mt-4 pt-3 border-t border-white/[0.04]",children:[o.jsx("svg",{className:"w-3 h-3 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Vigencia da proposta: 90 dias · SUSEP 20.2036457.1"]})]})]}),o.jsxs(tr,{to:"/icover",className:"fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-2xl shadow-2xl shadow-sentinel/20 hover:shadow-sentinel/40 hover:scale-105 transition-all duration-300 group",style:{background:"linear-gradient(135deg, #0c4a6e 0%, #0284c7 50%, #0ea5e9 100%)"},children:[o.jsx("svg",{className:"w-5 h-5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})}),o.jsx("span",{className:"text-white text-sm font-semibold hidden sm:inline",children:"iCover"}),o.jsx("span",{className:"absolute -top-1 -right-1 h-3 w-3 rounded-full bg-emerald-400 border-2 border-navy animate-pulse"})]})]})}function Pn({title:i,text:d,color:l}){const m={sentinel:"border-sentinel/15 hover:border-sentinel/30",cobre:"border-cobre/15 hover:border-cobre/30",emerald:"border-accent-emerald/15 hover:border-accent-emerald/30"};return o.jsxs("div",{className:`rounded-xl border bg-white/[0.02] p-5 transition-all ${m[l]}`,children:[o.jsx("h4",{className:"text-base font-bold text-white mb-2",children:i}),o.jsx("p",{className:"text-sm text-white/35 leading-relaxed",children:d})]})}function Xf(i){const d=i.replace(/\D/g,"").slice(0,14);return d.length<=2?d:d.length<=5?`${d.slice(0,2)}.${d.slice(2)}`:d.length<=8?`${d.slice(0,2)}.${d.slice(2,5)}.${d.slice(5)}`:d.length<=12?`${d.slice(0,2)}.${d.slice(2,5)}.${d.slice(5,8)}/${d.slice(8)}`:`${d.slice(0,2)}.${d.slice(2,5)}.${d.slice(5,8)}/${d.slice(8,12)}-${d.slice(12)}`}function Yf(i){const d=i.replace(/\D/g,"");if(d.length!==14||/^(\d)\1{13}$/.test(d))return!1;let l=12,m=d.substring(0,l).split("").map(Number),c=0,p=l-7;for(let g=l;g>=1;g--)c+=m[l-g]*p--,p<2&&(p=9);let f=c%11<2?0:11-c%11;if(f!==parseInt(d.charAt(l)))return!1;l=13,m=d.substring(0,l).split("").map(Number),c=0,p=l-7;for(let g=l;g>=1;g--)c+=m[l-g]*p--,p<2&&(p=9);return f=c%11<2?0:11-c%11,f===parseInt(d.charAt(l))}function pe({label:i,value:d,onChange:l,placeholder:m,required:c,error:p,type:f="text",readOnly:g,className:v="",hint:y}){return o.jsxs("div",{children:[o.jsxs("label",{className:"label-field",children:[i,c&&" *"]}),y&&o.jsx("p",{className:"text-xs text-gray-400 mb-1",children:y}),o.jsx("input",{type:f,className:`input-field ${v}`,value:d,onChange:k=>l(k.target.value),placeholder:m,readOnly:g}),p&&o.jsx("p",{className:"error-msg",children:p})]})}function Zf({label:i,value:d,onChange:l,options:m,required:c,error:p,placeholder:f="Selecione...",hint:g}){return o.jsxs("div",{children:[o.jsxs("label",{className:"label-field",children:[i,c&&" *"]}),g&&o.jsx("p",{className:"text-xs text-gray-400 mb-1",children:g}),o.jsxs("select",{className:"select-field",value:d,onChange:v=>l(v.target.value),children:[o.jsx("option",{value:"",children:f}),m.map(v=>typeof v=="string"?o.jsx("option",{value:v,children:v},v):o.jsx("option",{value:v.value,children:v.label},v.value))]}),p&&o.jsx("p",{className:"error-msg",children:p})]})}function la({columns:i,rows:d,onChange:l,onAdd:m,onRemove:c,maxRows:p,addLabel:f="Adicionar linha",errors:g={}}){const[v,y]=S.useState({});async function k(C,P,F){if(P.type==="cnpj"){const _=Xf(F);l(C,P.key,_);const z=_.replace(/\D/g,"");if(z.length<14){y(A=>{const O={...A};return delete O[`${C}_${P.key}`],O});return}if(!Yf(_)){y(A=>({...A,[`${C}_${P.key}`]:"invalid"}));return}if(!P.cnpjLookupTarget){y(A=>({...A,[`${C}_${P.key}`]:"valid"}));return}y(A=>({...A,[`${C}_${P.key}`]:"loading"}));try{const A=await ko(`/api/cnpj/${z}`);A.sucesso?(l(C,P.cnpjLookupTarget,A.data.razao_social),y(O=>({...O,[`${C}_${P.key}`]:"found"}))):A.status===404?y(O=>({...O,[`${C}_${P.key}`]:"not_found"})):y(O=>({...O,[`${C}_${P.key}`]:"error"}))}catch{y(A=>({...A,[`${C}_${P.key}`]:"error"}))}}else l(C,P.key,F)}return o.jsxs("div",{className:"overflow-x-auto",children:[o.jsxs("table",{className:"w-full text-sm border border-gray-200 rounded-lg overflow-hidden",children:[o.jsx("thead",{children:o.jsxs("tr",{className:"bg-navy text-white",children:[i.map((C,P)=>o.jsxs("th",{className:"px-3 py-2 text-left text-xs font-semibold whitespace-nowrap",children:[C.label,C.type==="cnpj"&&C.cnpjLookupTarget&&o.jsx("span",{className:"ml-1 text-[9px] text-cobre/80 font-normal normal-case",children:"auto-preenche"})]},P)),o.jsx("th",{className:"px-2 py-2 w-10"})]})}),o.jsx("tbody",{children:d.map((C,P)=>o.jsxs("tr",{className:"border-t border-gray-100 hover:bg-gray-50",children:[i.map((F,_)=>{const z=`${P}_${F.key}`,A=v[z];return o.jsx("td",{className:"px-2 py-1",children:F.readOnly?o.jsx("span",{className:`text-xs px-2 py-1.5 block rounded ${C[F.key]?"bg-navy/5 text-navy font-semibold":"text-gray-400"}`,children:C[F.key]?`${C[F.key]}${F.placeholder==="Auto"?"%":""}`:F.placeholder||"—"}):F.type==="cnpj"?o.jsxs("div",{className:"relative",children:[o.jsx("input",{className:`w-full px-2 py-1.5 text-xs border rounded focus:ring-1 focus:ring-cobre focus:border-cobre outline-none pr-6 ${A==="found"?"border-green-400 bg-green-50":A==="invalid"||A==="not_found"||A==="error"||F.required&&g[`comprador_cnpj_${P}`]?"border-red-400 bg-red-50":"border-gray-200"}`,value:C[F.key]||"",onChange:O=>k(P,F,O.target.value),placeholder:F.placeholder||"00.000.000/0000-00",maxLength:18}),o.jsxs("div",{className:"absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none",children:[A==="loading"&&o.jsxs("svg",{className:"animate-spin h-3.5 w-3.5 text-cobre",viewBox:"0 0 24 24",children:[o.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"}),o.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]}),(A==="found"||A==="valid")&&o.jsx("svg",{className:"h-3.5 w-3.5 text-green-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M5 13l4 4L19 7"})}),(A==="invalid"||A==="not_found"||A==="error")&&o.jsx("svg",{className:"h-3.5 w-3.5 text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})]})]}):o.jsx("input",{className:`w-full px-2 py-1.5 text-xs border rounded focus:ring-1 focus:ring-cobre focus:border-cobre outline-none ${F.required&&g[`comprador_cnpj_${P}`]?"border-red-400 bg-red-50":"border-gray-200"}`,value:C[F.key]||"",onChange:O=>k(P,F,O.target.value),placeholder:F.placeholder||""})},_)}),o.jsx("td",{className:"px-2 py-1",children:c&&d.length>1&&o.jsx("button",{onClick:()=>c(P),className:"text-red-300 hover:text-red-500 text-xl leading-none transition-colors",title:"Remover",children:"×"})})]},P))})]}),m&&(!p||d.length<p)&&o.jsxs("button",{onClick:m,className:"mt-2 text-cobre text-xs font-semibold hover:underline flex items-center gap-1",children:[o.jsx("span",{className:"text-base leading-none",children:"+"})," ",f]})]})}function Fu({step:i,totalSteps:d,stepNames:l,onPrev:m,onNext:c,onSubmit:p,loading:f,isReview:g}){return o.jsxs("div",{className:"flex justify-between mt-8 pt-4 border-t border-gray-100",children:[i>0?o.jsx("button",{onClick:m,className:"btn-secondary",children:"Voltar"}):o.jsx("div",{}),i<d-1&&!g&&o.jsx("button",{onClick:c,className:"btn-primary",children:"Próximo"}),i===d-1&&!g&&o.jsx("button",{onClick:()=>p("review"),className:"btn-primary",children:"Revisar Dados"}),g&&o.jsxs("button",{onClick:()=>p("send"),disabled:f,className:"btn-primary flex items-center gap-2",children:[f&&o.jsxs("svg",{className:"animate-spin h-5 w-5",viewBox:"0 0 24 24",children:[o.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"}),o.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]}),f?"Enviando...":"Enviar Solicitação de Cotação"]})]})}function _u({step:i,steps:d}){const l=Math.round((i+1)/d.length*100);return o.jsxs("div",{className:"mb-6",children:[o.jsxs("div",{className:"flex items-center justify-between mb-4 bg-gradient-to-r from-cobre/10 to-cobre/5 border border-cobre/20 rounded-xl px-4 py-2.5",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4 text-cobre flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),o.jsxs("span",{className:"text-xs text-gray-700",children:["Dados completos geram propostas até ",o.jsx("strong",{className:"text-cobre",children:"30% mais competitivas"})]})]}),o.jsxs("span",{className:"text-xs font-bold text-cobre flex-shrink-0 ml-3",children:[l,"% concluído"]})]}),o.jsxs("div",{className:"relative flex items-start justify-between",children:[o.jsx("div",{className:"absolute top-4 left-0 right-0 h-0.5 bg-gray-200 z-0",style:{marginLeft:`${100/d.length/2}%`,marginRight:`${100/d.length/2}%`},children:o.jsx("div",{className:"h-full bg-gradient-to-r from-cobre to-navy transition-all duration-700 ease-out",style:{width:`${i===0?0:i/(d.length-1)*100}%`}})}),d.map((m,c)=>{const p=c<i,f=c===i;return o.jsxs("div",{className:"relative z-10 flex flex-col items-center",style:{width:`${100/d.length}%`},children:[o.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${p?"bg-cobre border-cobre":f?"bg-navy border-navy ring-4 ring-navy/20":"bg-white border-gray-300"}`,children:p?o.jsx("svg",{className:"w-4 h-4 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M5 13l4 4L19 7"})}):o.jsx("span",{className:`text-xs font-bold ${f?"text-white":"text-gray-400"}`,children:c+1})}),o.jsx("span",{className:`mt-1.5 text-[10px] font-semibold text-center leading-tight hidden sm:block ${p?"text-cobre":f?"text-navy":"text-gray-400"}`,children:m})]},c)})]}),o.jsxs("p",{className:"sm:hidden text-center text-xs font-semibold text-navy mt-3",children:["Etapa ",i+1," de ",d.length," — ",o.jsx("span",{className:"text-cobre",children:d[i]})]})]})}function eg(){const i=["#B87333","#7DD3FC","#4ade80","#f59e0b","#ffffff","#fbbf24","#a78bfa"],d=Array.from({length:90},(l,m)=>{const c=m*360/90*Math.PI/180,p=22+m%7*6,f=Math.cos(c)*p,g=Math.sin(c)*p;return{id:m,color:i[m%i.length],delay:`${m%6*.04}s`,duration:`${5.5+m%5*.5}s`,size:`${7+m%4*2}px`,round:m%4===0,rect:m%5===1,tx:`${f.toFixed(1)}vw`,ty:`${g.toFixed(1)}vh`,tx2:`${(f*.7).toFixed(1)}vw`,ty2:`${(g*.4+55).toFixed(1)}vh`}});return o.jsxs("div",{style:{position:"fixed",inset:0,pointerEvents:"none",overflow:"hidden",zIndex:9999},children:[o.jsx("style",{children:`
        @keyframes confettiBurst {
          0%   { transform: translate(0,0) rotate(0deg) scale(0); opacity: 1; }
          10%  { transform: translate(var(--tx), var(--ty)) rotate(220deg) scale(1); opacity: 1; }
          75%  { opacity: 1; }
          100% { transform: translate(var(--tx2), var(--ty2)) rotate(900deg) scale(0.15); opacity: 0; }
        }
      `}),d.map(l=>o.jsx("div",{style:{position:"absolute",left:"50%",top:"38%",width:l.size,height:l.rect?`${parseInt(l.size)*2}px`:l.size,backgroundColor:l.color,borderRadius:l.round?"50%":"3px","--tx":l.tx,"--ty":l.ty,"--tx2":l.tx2,"--ty2":l.ty2,animation:`confettiBurst ${l.duration} ${l.delay} cubic-bezier(0.22, 0.61, 0.36, 1) forwards`}},l.id))]})}function Tu({result:i,onReset:d,tipo:l}){const[m,c]=S.useState(!0);S.useEffect(()=>{const f=setTimeout(()=>c(!1),8e3);return()=>clearTimeout(f)},[]);const p=[{icon:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"}),label:"Análise simultânea",text:"7 seguradoras recebendo seus dados agora — Coface, Atradius, AVLA, Allianz Trade, AIG, CESCE e CHUBB"},{icon:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}),label:"Negociação técnica",text:"Nossa equipe negocia as melhores condições de cobertura, prêmio e serviço para o seu perfil"},{icon:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"}),label:"Comparativo exclusivo",text:"Você recebe o estudo completo com recomendação técnica da Fairfield para a melhor escolha"}];return o.jsxs("div",{className:"max-w-2xl mx-auto px-4 py-10 relative",children:[o.jsx("style",{children:`
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
      `}),m&&o.jsx(eg,{}),o.jsxs("div",{className:"rounded-2xl overflow-hidden shadow-2xl border border-cobre/20",style:{animation:"successEntry 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards"},children:[o.jsxs("div",{className:"bg-gradient-to-br from-navy via-[#0d1f3c] to-[#0A1628] px-6 pt-10 pb-8 text-center relative overflow-hidden",children:[o.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-white/5"}),o.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-40 h-40 rounded-full border border-cobre/10"}),o.jsx("div",{className:"relative inline-flex mb-5",children:o.jsx("div",{className:"w-24 h-24 rounded-full bg-green-400/10 flex items-center justify-center",style:{animation:"ringPulse 2s ease-in-out infinite"},children:o.jsx("div",{className:"w-16 h-16 rounded-full bg-green-400/20 flex items-center justify-center",style:{animation:"checkPop 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.2s both"},children:o.jsx("svg",{className:"w-9 h-9 text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M5 13l4 4L19 7"})})})})}),o.jsx("p",{className:"text-[10px] font-bold text-cobre uppercase tracking-widest mb-2",children:"Solicitação Enviada com Sucesso"}),o.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight",children:"Seu estudo está em análise!"}),o.jsxs("p",{className:"text-white/50 text-sm mb-6",children:["Crédito ",l==="externo"?"Exportação — Valores em US$":"Interno — Operações Nacionais"]}),o.jsxs("div",{className:"inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-xl px-5 py-2.5",children:[o.jsx("svg",{className:"w-5 h-5 text-cobre flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5"})}),o.jsxs("span",{className:"text-sm text-white",children:[o.jsxs("strong",{className:"text-cobre",children:[(i==null?void 0:i.cotacoesGeradas)||7," seguradoras"]})," recebendo seus dados agora"]})]})]}),o.jsxs("div",{className:"bg-white px-6 py-6 space-y-4",children:[o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:p.map((f,g)=>o.jsxs("div",{className:"bg-gray-50 border border-gray-100 rounded-xl p-3 flex flex-col gap-2",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("svg",{className:"w-5 h-5 text-cobre flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.icon}),o.jsx("span",{className:"text-xs font-bold text-navy",children:f.label})]}),o.jsx("p",{className:"text-xs text-gray-500 leading-relaxed",children:f.text})]},g))}),o.jsxs("div",{className:"flex items-center gap-3 bg-cobre/5 border border-cobre/15 rounded-xl px-4 py-3",children:[o.jsx("div",{className:"w-9 h-9 bg-cobre/10 rounded-lg flex items-center justify-center flex-shrink-0",children:o.jsx("svg",{className:"w-5 h-5 text-cobre",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})})}),o.jsxs("div",{children:[o.jsx("p",{className:"text-xs font-bold text-navy",children:"Prazo de resposta"}),o.jsxs("p",{className:"text-sm text-gray-600",children:["Você receberá o comparativo completo em até ",o.jsx("strong",{className:"text-cobre",children:"5 dias úteis"})]})]})]}),o.jsxs("div",{className:"flex items-start gap-2 bg-green-50 border border-green-200 rounded-xl px-4 py-3",children:[o.jsx("svg",{className:"w-4 h-4 text-green-600 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),o.jsxs("p",{className:"text-sm text-green-700",children:[o.jsx("strong",{children:"Estudo totalmente gratuito."})," Um e-mail de confirmação foi enviado para você."]})]}),o.jsx("button",{onClick:d,className:"btn-primary w-full mt-2",children:"Nova Cotação"})]})]})]})}function Ou({value:i,onChange:d,onResult:l,error:m,label:c="CNPJ"}){const[p,f]=S.useState(!1),[g,v]=S.useState(null),[y,k]=S.useState(null);function C(_){const z=_.replace(/\D/g,"").slice(0,14);return z.length<=2?z:z.length<=5?`${z.slice(0,2)}.${z.slice(2)}`:z.length<=8?`${z.slice(0,2)}.${z.slice(2,5)}.${z.slice(5)}`:z.length<=12?`${z.slice(0,2)}.${z.slice(2,5)}.${z.slice(5,8)}/${z.slice(8)}`:`${z.slice(0,2)}.${z.slice(2,5)}.${z.slice(5,8)}/${z.slice(8,12)}-${z.slice(12)}`}function P(_){const z=_.replace(/\D/g,"");if(z.length!==14||/^(\d)\1{13}$/.test(z))return!1;let A=12,O=z.substring(0,A).split("").map(Number),V=0,D=A-7;for(let Z=A;Z>=1;Z--)V+=O[A-Z]*D--,D<2&&(D=9);let $=V%11<2?0:11-V%11;if($!==parseInt(z.charAt(A)))return!1;A=13,O=z.substring(0,A).split("").map(Number),V=0,D=A-7;for(let Z=A;Z>=1;Z--)V+=O[A-Z]*D--,D<2&&(D=9);return $=V%11<2?0:11-V%11,$===parseInt(z.charAt(A))}async function F(_){const z=C(_);d(z),v(null),k(null);const A=z.replace(/\D/g,"");if(A.length===14){if(!P(z)){v("invalid");return}f(!0);try{const O=await ko(`/api/cnpj/${A}`);O.sucesso?(v("found"),l&&l(O.data)):O.status===429?(v("error"),k("⚠ Muitas consultas. Aguarde alguns segundos e tente novamente.")):O.status===404?(v("not_found"),k("CNPJ não encontrado na Receita Federal")):(v("error"),k("⚠ Não foi possível consultar agora. Continue preenchendo manualmente."))}catch{v("error"),k("⚠ Servidor indisponível. Continue preenchendo manualmente.")}finally{f(!1)}}}return o.jsxs("div",{children:[o.jsxs("label",{className:"label-field",children:[c," *"]}),o.jsxs("div",{className:"relative",children:[o.jsx("input",{className:`input-field pr-12 ${g==="found"?"border-green-500 ring-2 ring-green-200":g==="invalid"||g==="not_found"||g==="error"?"border-red-500 ring-2 ring-red-200":""}`,value:i,onChange:_=>F(_.target.value),placeholder:"00.000.000/0000-00",maxLength:18}),o.jsxs("div",{className:"absolute right-3 top-1/2 -translate-y-1/2",children:[p&&o.jsxs("svg",{className:"animate-spin h-5 w-5 text-cobre",viewBox:"0 0 24 24",children:[o.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"}),o.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]}),g==="found"&&o.jsx("svg",{className:"h-5 w-5 text-green-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),(g==="not_found"||g==="invalid"||g==="error")&&o.jsx("svg",{className:"h-5 w-5 text-red-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})]})]}),p&&o.jsx("p",{className:"text-xs text-cobre mt-1",children:"Consultando Receita Federal..."}),g==="found"&&o.jsx("p",{className:"text-xs text-green-600 mt-1",children:"✓ Empresa verificada na Receita Federal"}),g==="invalid"&&o.jsx("p",{className:"text-xs text-red-500 mt-1",children:"CNPJ inválido — verifique os números"}),(g==="not_found"||g==="error")&&y&&o.jsx("p",{className:`text-xs mt-1 ${g==="error"?"text-amber-600":"text-red-500"}`,children:y}),m&&o.jsx("p",{className:"error-msg",children:m})]})}function On(i){const d=i.replace(/\D/g,"").slice(0,11);return d.length<=2?`(${d}`:d.length<=7?`(${d.slice(0,2)}) ${d.slice(2)}`:`(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}`}function ag({onComplete:i}){const{generateCode:d,verifyCode:l}=Lo(),[m,c]=S.useState("form"),[p,f]=S.useState(!1),[g,v]=S.useState(!1),[y,k]=S.useState({nome:"",telefone:"",email:"",empresa:""}),[C,P]=S.useState(""),[F,_]=S.useState({}),[z,A]=S.useState(null);function O(J,H){k(ne=>({...ne,[J]:H})),_(ne=>{const ue={...ne};return delete ue[J],ue})}function V(){const J={};return y.nome.trim()||(J.nome="Informe seu nome"),y.empresa.trim()||(J.empresa="Informe a empresa"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(y.email)||(J.email="E-mail invalido"),y.telefone.replace(/\D/g,"").length<10&&(J.telefone="Telefone invalido"),_(J),Object.keys(J).length===0}async function D(J){if(J.preventDefault(),!!V()){f(!0);try{const H=await d(y.email,y.nome,y.empresa,y.telefone);H.devMode?(A({code:H.devCode,preview:H.devPreview}),ke.success("Modo dev — codigo visivel abaixo")):(A(null),ke.success("Codigo enviado! Verifique seu e-mail.")),c("verify")}catch(H){ke.error(H.message||"Erro ao enviar codigo.")}finally{f(!1)}}}async function $(J){if(J.preventDefault(),C.length!==6){ke.error("Digite o codigo de 6 digitos");return}f(!0);try{(await l(y.email,C)).success?(ke.success("Verificado com sucesso!"),i&&i()):ke.error("Codigo invalido ou expirado.")}catch{ke.error("Erro ao verificar codigo.")}finally{f(!1)}}async function Z(){v(!0);try{const J=await d(y.email,y.nome,y.empresa,y.telefone);J.devMode&&A({code:J.devCode,preview:J.devPreview}),ke.success("Novo codigo enviado!")}catch(J){ke.error(J.message||"Erro ao reenviar codigo.")}finally{v(!1)}}return o.jsxs("div",{className:"max-w-lg mx-auto px-4 py-10 sm:py-16 animate-fadeIn",children:[o.jsxs("div",{className:"text-center mb-8 flex flex-col items-center",children:[o.jsx("div",{className:"mb-4",children:o.jsx(ir,{size:72})}),o.jsx("h1",{className:"text-2xl sm:text-3xl font-black text-sentinel tracking-tight",children:"SENTINEL"}),o.jsx("p",{className:"text-navy/40 text-sm mt-2",children:"Preencha seus dados para iniciar a cotação de Seguro de Crédito"})]}),o.jsx("div",{className:"card-glass",children:m==="form"?o.jsxs("form",{onSubmit:D,className:"space-y-4",children:[o.jsxs("h3",{className:"text-base font-bold text-white border-b border-white/[0.06] pb-3 flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4 text-sentinel",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),"Identificacao"]}),o.jsxs("div",{children:[o.jsx("label",{className:"label-field",children:"Nome Completo *"}),o.jsx("input",{className:`input-field ${F.nome?"border-rose-400/50 ring-2 ring-rose-400/20":""}`,value:y.nome,onChange:J=>O("nome",J.target.value),placeholder:"Seu nome completo"}),F.nome&&o.jsx("p",{className:"error-msg",children:F.nome})]}),o.jsxs("div",{children:[o.jsx("label",{className:"label-field",children:"Nome da Empresa *"}),o.jsx("input",{className:`input-field ${F.empresa?"border-rose-400/50 ring-2 ring-rose-400/20":""}`,value:y.empresa,onChange:J=>O("empresa",J.target.value),placeholder:"Razao social ou nome fantasia"}),F.empresa&&o.jsx("p",{className:"error-msg",children:F.empresa})]}),o.jsxs("div",{children:[o.jsx("label",{className:"label-field",children:"E-mail Corporativo *"}),o.jsx("input",{type:"email",className:`input-field ${F.email?"border-rose-400/50 ring-2 ring-rose-400/20":""}`,value:y.email,onChange:J=>O("email",J.target.value),placeholder:"seu@empresa.com.br"}),F.email&&o.jsx("p",{className:"error-msg",children:F.email})]}),o.jsxs("div",{children:[o.jsx("label",{className:"label-field",children:"Telefone *"}),o.jsx("input",{className:`input-field ${F.telefone?"border-rose-400/50 ring-2 ring-rose-400/20":""}`,value:y.telefone,onChange:J=>O("telefone",On(J.target.value)),placeholder:"(00) 00000-0000",maxLength:15}),F.telefone&&o.jsx("p",{className:"error-msg",children:F.telefone})]}),o.jsxs("button",{type:"submit",disabled:p,className:"btn-primary w-full flex items-center justify-center gap-2",children:[p&&o.jsxs("svg",{className:"animate-spin h-5 w-5",viewBox:"0 0 24 24",children:[o.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"}),o.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]}),p?"Enviando codigo...":"Receber Codigo de Acesso"]}),o.jsx("p",{className:"text-[10px] text-white/20 text-center mt-3",children:"Enviaremos um codigo de verificacao para o e-mail informado. Seus dados sao protegidos pela LGPD."})]}):o.jsxs("form",{onSubmit:$,className:"space-y-5",children:[o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"w-14 h-14 rounded-2xl bg-sentinel/10 border border-sentinel/20 flex items-center justify-center mx-auto mb-4",children:o.jsx("svg",{className:"w-7 h-7 text-sentinel",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),o.jsx("h3",{className:"text-lg font-bold text-white",children:"Verifique seu E-mail"}),o.jsxs("p",{className:"text-sm text-white/35 mt-1",children:["Enviamos um codigo de 6 digitos para ",o.jsx("strong",{className:"text-sentinel",children:y.email})]})]}),z?o.jsxs("div",{className:"rounded-xl overflow-hidden border border-amber-500/30",children:[o.jsx("div",{className:"bg-amber-500/15 px-4 py-2 flex items-center gap-2",children:o.jsx("span",{className:"text-amber-400 font-bold text-xs",children:"⚠ MODO DESENVOLVIMENTO"})}),o.jsxs("div",{className:"bg-amber-500/5 px-4 py-3",children:[o.jsx("p",{className:"text-xs text-amber-300/60 mb-2",children:"SMTP nao configurado — codigo de teste:"}),o.jsx("div",{className:"bg-navy-dark border border-amber-500/20 rounded-lg p-3 text-center",children:o.jsx("p",{className:"text-3xl font-mono font-bold text-amber-400 tracking-[0.4em]",children:z.code})}),z.preview&&o.jsx("a",{href:z.preview,target:"_blank",rel:"noopener noreferrer",className:"block text-center text-xs text-sentinel underline mt-2",children:"Ver email no Ethereal"})]})]}):o.jsxs("div",{className:"rounded-xl bg-accent-emerald/10 border border-accent-emerald/20 px-4 py-3",children:[o.jsxs("p",{className:"text-sm text-accent-emerald font-semibold",children:["✓ Codigo enviado para ",o.jsx("strong",{children:y.email})]}),o.jsx("p",{className:"text-xs text-white/25 mt-1",children:"Verifique sua caixa de entrada. Valido por 15 minutos."})]}),o.jsxs("div",{children:[o.jsx("label",{className:"label-field text-center block",children:"Codigo de Verificacao"}),o.jsx("input",{className:"input-field text-center text-2xl tracking-[0.5em] font-mono font-bold",value:C,onChange:J=>P(J.target.value.replace(/\D/g,"").slice(0,6)),placeholder:"000000",maxLength:6,autoFocus:!0})]}),o.jsxs("button",{type:"submit",disabled:p,className:"btn-primary w-full flex items-center justify-center gap-2",children:[p&&o.jsxs("svg",{className:"animate-spin h-5 w-5",viewBox:"0 0 24 24",children:[o.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"}),o.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]}),p?"Verificando...":"Verificar e Acessar"]}),o.jsxs("div",{className:"flex items-center justify-between text-xs",children:[o.jsx("button",{type:"button",onClick:Z,disabled:g,className:"text-sentinel hover:underline font-medium disabled:opacity-50",children:g?"Reenviando...":"Reenviar codigo"}),o.jsx("button",{type:"button",onClick:()=>{c("form"),P("")},className:"text-white/25 hover:text-white/50",children:"Voltar"})]})]})}),o.jsx("div",{className:"mt-6 text-center",children:o.jsxs("div",{className:"inline-flex items-center gap-2 text-xs text-white/20",children:[o.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),"Ambiente seguro — Fairfield SUSEP 20.2036457.1"]})})]})}const og=[{title:"TERMO DE CONFIDENCIALIDADE E ACEITE EXPRESSO",content:`A FAIRFIELD PROTECAO E INTELIGENCIA FINANCEIRA LTDA, inscrita no CNPJ sob o n. 13.381.310/0001-45, com sede na cidade de Blumenau/SC, devidamente registrada na SUSEP sob o n. 20.2036457.1, doravante denominada "Fairfield", apresenta ao solicitante, doravante denominado "Cliente", o presente Termo de Confidencialidade como condicao para o inicio do processo de estudo de mercado e cotacao de Seguro de Credito por meio da plataforma SENTINEL.

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

8.6 Para dirimir quaisquer controversias decorrentes deste Termo, fica eleito o foro da Comarca de Blumenau/SC, com renancia a qualquer outro, por mais privilegiado que seja.`}];function rg(){var v;const{user:i,acceptNda:d}=Lo(),[l,m]=S.useState(!1),c=S.useRef(null),[p,f]=S.useState(!1);S.useEffect(()=>{const y=c.current;if(!y)return;function k(){const{scrollTop:C,scrollHeight:P,clientHeight:F}=y;C+F>=P-30&&m(!0)}return y.addEventListener("scroll",k),()=>y.removeEventListener("scroll",k)},[]);function g(){f(!0),setTimeout(()=>{d()},800)}return o.jsxs("div",{className:"max-w-3xl mx-auto px-3 sm:px-4 py-6 sm:py-10 animate-fadeIn",children:[o.jsxs("div",{className:"text-center mb-6",children:[o.jsxs("div",{className:"flex items-center justify-center gap-3 mb-3",children:[o.jsx(ir,{size:48}),o.jsxs("div",{className:"text-left",children:[o.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-navy",children:"Termo de Confidencialidade"}),o.jsx("p",{className:"text-xs text-navy/40",children:"SENTINEL by Fairfield"})]})]}),o.jsx("p",{className:"text-sm text-navy/50 max-w-xl mx-auto",children:"Antes de prosseguir, leia integralmente o Termo de Confidencialidade abaixo. Ao finalizar a leitura, o botao de aceite sera habilitado."})]}),o.jsx("div",{className:"flex items-center justify-center mb-4",children:o.jsxs("div",{className:"inline-flex items-center gap-2 bg-navy/[0.04] border border-navy/[0.1] rounded-full px-4 py-2 text-xs",children:[o.jsx("div",{className:"h-5 w-5 rounded-full bg-sentinel/15 border border-sentinel/25 flex items-center justify-center",children:o.jsx("span",{className:"text-[9px] font-bold text-sentinel",children:(v=i==null?void 0:i.nome)==null?void 0:v.charAt(0)})}),o.jsx("span",{className:"text-navy/70 font-medium",children:i==null?void 0:i.nome}),o.jsx("span",{className:"text-navy/15",children:"|"}),o.jsx("span",{className:"text-navy/40",children:i==null?void 0:i.empresa})]})}),o.jsxs("div",{className:"rounded-2xl border border-navy/[0.08] bg-white shadow-lg shadow-navy/5 p-0 overflow-hidden",children:[o.jsxs("div",{className:"bg-navy/[0.03] px-4 sm:px-6 py-3 flex items-center justify-between border-b border-navy/[0.08]",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4 text-sentinel",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),o.jsx("span",{className:"text-navy/50 text-xs font-medium",children:"Termo de Confidencialidade — Fairfield"})]}),l?o.jsxs("span",{className:"text-accent-emerald text-[10px] font-bold flex items-center gap-1",children:[o.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),"Leitura completa"]}):o.jsxs("span",{className:"text-cobre text-[10px] font-bold flex items-center gap-1 animate-pulse",children:[o.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})}),"Role ate o final"]})]}),o.jsx("div",{className:"h-[2px] bg-navy/[0.04]",children:o.jsx(tg,{scrollRef:c})}),o.jsxs("div",{ref:c,className:"max-h-[55vh] sm:max-h-[60vh] overflow-y-auto px-4 sm:px-8 py-5 sm:py-6 space-y-5 text-sm leading-relaxed text-navy/60 scroll-smooth",children:[og.map((y,k)=>o.jsxs("div",{children:[o.jsx("h3",{className:`font-bold ${k===0?"text-lg text-navy text-center mb-4":"text-sentinel-dark text-sm mb-2"}`,children:y.title}),y.content.split(`
`).map((C,P)=>o.jsx("p",{className:`${C.startsWith("(")?"ml-4":""} mb-2 text-[13px] sm:text-sm text-navy/50`,children:C},P))]},k)),o.jsxs("div",{className:"border-t border-navy/[0.08] pt-4 mt-6",children:[o.jsxs("p",{className:"text-[11px] text-navy/30 text-center",children:[o.jsx("strong",{className:"text-navy/50",children:"Responsavel:"})," Fairfield Protecao e Inteligencia Financeira Ltda — CNPJ 13.381.310/0001-45"]}),o.jsxs("p",{className:"text-[11px] text-navy/30 text-center mt-1",children:[o.jsx("strong",{className:"text-navy/50",children:"Vigencia:"})," 90 dias · ",o.jsx("strong",{className:"text-navy/50",children:"Sigilo:"})," 2 anos · SUSEP 20.2036457.1"]})]}),o.jsx("div",{className:"text-center py-4",children:o.jsxs("div",{className:"inline-flex items-center gap-2 bg-accent-emerald/10 border border-accent-emerald/20 rounded-full px-4 py-2",children:[o.jsx("svg",{className:"w-3.5 h-3.5 text-accent-emerald",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),o.jsx("span",{className:"text-[11px] text-accent-emerald font-medium",children:"Fim do documento"})]})})]})]}),o.jsx("div",{className:"mt-5 sm:mt-6",children:l?o.jsxs("div",{className:"animate-fadeIn",children:[o.jsx("div",{className:"rounded-xl bg-accent-emerald/10 border border-accent-emerald/20 p-4 mb-4",children:o.jsxs("div",{className:"flex items-start gap-3",children:[o.jsx("svg",{className:"w-5 h-5 text-accent-emerald flex-shrink-0 mt-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),o.jsxs("div",{children:[o.jsx("p",{className:"text-sm text-accent-emerald font-medium",children:'Ao clicar em "De Acordo", voce declara que leu e compreendeu este Termo e autoriza a Fairfield a utilizar suas informacoes para o estudo de mercado.'}),o.jsx("p",{className:"text-[11px] text-navy/30 mt-1",children:"Aceite eletronico registrado com data, hora e identificacao."})]})]})}),o.jsx("button",{onClick:g,disabled:p,className:"w-full bg-gradient-to-r from-accent-emerald to-emerald-500 text-navy-dark px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-accent-emerald/15 hover:shadow-xl hover:shadow-accent-emerald/25 hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50",children:p?o.jsxs(o.Fragment,{children:[o.jsxs("svg",{className:"animate-spin h-6 w-6",viewBox:"0 0 24 24",children:[o.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"}),o.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]}),"Registrando aceitacao..."]}):o.jsxs(o.Fragment,{children:[o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),"De Acordo — Aceito os Termos"]})})]}):o.jsxs("div",{className:"text-center",children:[o.jsx("button",{disabled:!0,className:"w-full bg-navy/[0.04] text-navy/25 px-8 py-4 rounded-xl font-bold text-lg cursor-not-allowed border border-navy/[0.08]",children:o.jsxs("span",{className:"flex items-center justify-center gap-2",children:[o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),"Leia o documento completo para continuar"]})}),o.jsx("p",{className:"text-[11px] text-navy/30 mt-2",children:"Role até o final do documento para habilitar o aceite"})]})})]})}function tg({scrollRef:i}){const[d,l]=S.useState(0);return S.useEffect(()=>{const m=i.current;if(!m)return;function c(){const{scrollTop:p,scrollHeight:f,clientHeight:g}=m;l(Math.min(100,p/(f-g)*100))}return m.addEventListener("scroll",c),()=>m.removeEventListener("scroll",c)},[i]),o.jsx("div",{className:"h-full bg-gradient-to-r from-sentinel to-accent-emerald transition-all duration-150",style:{width:`${d}%`}})}const sg={0:{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"})}),title:"Dados da empresa: a base de tudo",text:"As seguradoras constroem o perfil de risco a partir dos dados cadastrais da sua empresa. Quanto mais precisas e completas as informações, mais confiante a seguradora fica para oferecer condições competitivas.",insight:"Empresas que preenchem todos os campos recebem cotações até 30% mais competitivas do que perfis incompletos.",funFact:"O Seguro de Crédito protege contra inadimplência — se seu comprador não pagar, a seguradora cobre até 90% do valor da perda.",importance:"Setor de atividade e UF da empresa influenciam diretamente o apetite de risco de cada seguradora."},1:{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),title:"Histórico de faturamento: a história que convence",text:"Seu histórico de vendas e perdas revela como sua empresa gerencia riscos comerciais. Uma trajetória de crescimento com sinistralidade controlada é o perfil ideal para obter prêmios mais baixos e franquias menores.",insight:"O faturamento desejado para o seguro define a base de cálculo do prêmio — informe o mais próximo da realidade para evitar sub ou super cobertura.",funFact:"Empresas com sinistralidade abaixo de 3% do faturamento costumam ter descontos progressivos na renovação da apólice.",importance:"Preencher os 3 anos de histórico é fundamental — seguradoras que analisam séries históricas oferecem condições 20% melhores."},2:{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})}),title:"Carteira de recebíveis: o raio-X do seu risco",text:"A distribuição da carteira por faixa de valor revela a concentração de risco. Uma carteira pulverizada — muitos clientes em faixas menores — é vista pelas seguradoras como mais segura e resulta em prêmios mais baixos.",insight:"Preencha todas as faixas com valores reais, mesmo que pequenos. Dados incompletos levam a sub-cotação ou propostas mais conservadoras.",funFact:"Recebíveis são o 2º maior ativo da maioria das empresas brasileiras, depois de imóveis — e o menos protegido.",importance:"A concentração em poucos grandes clientes pode aumentar o prêmio em até 40%. Mostrar diversificação é estratégico."},3:{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),title:"Transparência nas perdas: um ativo, não um passivo",text:"Declarar perdas passadas não prejudica sua cotação — ao contrário. Omitir informações pode gerar problemas graves na hora do sinistro, inclusive recusa de pagamento. A seguradora avalia o padrão de comportamento, não eventos isolados.",insight:'Mesmo sem perdas nos últimos 3 anos, preencha a seção — "zero perdas" é uma informação extremamente valiosa que melhora seu perfil.',funFact:"No Brasil, 60% das empresas já tiveram pelo menos uma perda significativa por inadimplência nos últimos 5 anos.",importance:"Seguradoras que identificam omissões na fase de subscrição podem invalidar a cobertura no momento do sinistro."},4:{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),title:"Atrasos: transparência gera confiança",text:"Atrasos curtos e pontuais são absolutamente normais no mercado. O que preocupa seguradoras são atrasos longos e recorrentes. Detalhar os vencidos acima de 180 dias demonstra maturidade na gestão e profissionalismo.",insight:"Títulos vencidos acima de 180 dias podem ser excluídos da cobertura desde o início — declarar agora evita surpresas na apólice.",funFact:"O prazo médio de pagamento no Brasil é de 45 dias, um dos mais longos da América Latina — tornando o seguro ainda mais relevante.",importance:"Detalhamento preciso dos atrasos permite que a seguradora construa uma cobertura sob medida, sem exclusões desnecessárias."},5:{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"})}),title:"Último passo — seus compradores definem o custo final",text:"Cada seguradora possui bases globais de análise de crédito para verificar a saúde financeira dos seus compradores. Uma amostra diversificada — grandes, médios e pequenos clientes — permite limites mais generosos e prêmios mais precisos.",insight:"Informe pelo menos 10 compradores para análise representativa. Quanto mais completo, mais competitiva será a cotação.",funFact:"Após o envio, o SENTINEL consulta simultaneamente Coface, Atradius, AVLA, Allianz Trade, AIG, CESCE e CHUBB — sem custo para você.",importance:"O CNPJ de cada comprador é obrigatório — ele permite a análise de crédito e define o limite aprovado para cada cliente."}},ig={0:{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),title:"Exportar com segurança: dados que abrem mercados",text:"O seguro de crédito à exportação protege contra riscos políticos e comerciais nos países de destino. Os dados da sua empresa são a base para uma cotação precisa e para ampliar seu acesso a mercados internacionais com segurança.",insight:"O número de anos exportando e os mercados atendidos são fatores decisivos para as seguradoras internacionais.",funFact:"Mais de 80% dos exportadores europeus utilizam seguro de crédito. No Brasil, apenas 15% — uma oportunidade enorme.",importance:"Perfis exportadores bem documentados recebem propostas com cobertura de até 95% do valor da exportação."},1:{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),title:"Faturamento em dólar: a régua das seguradoras globais",text:"O histórico de faturamento em US$ permite que as seguradoras internacionais avaliem seu porte exportador e consistência. Volume estável ou crescente resulta em condições mais favoráveis e prêmios menores.",insight:"O prazo de venda impacta diretamente o prêmio — prazos mais longos significam mais risco, mas também podem ser negociados com cobertura específica.",funFact:"Exportadores com seguro conseguem negociar prazos maiores com importadores, aumentando o volume de vendas em até 20%.",importance:"Informe o faturamento dos últimos 3 anos em US$ — séries históricas completas aumentam a confiança da seguradora no perfil."},2:{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"})}),title:"Destinos exportados: cada mercado tem seu risco",text:"Cada região do mundo tem um perfil de risco diferente avaliado pelas seguradoras. Europa e América do Norte são mercados estáveis, enquanto África e América Central podem ter prêmios maiores ou coberturas específicas.",insight:"Distribuir percentuais precisos por região permite uma cobertura customizada — regiões em branco são tratadas como risco desconhecido.",funFact:"Risco político — guerras, embargos, moratórias — é coberto exclusivamente pelo seguro de crédito à exportação.",importance:"Concentração em 1 ou 2 países pode gerar sublimites de cobertura. Diversificação geográfica melhora os termos."},3:{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})}),title:"Carteira internacional: diversificação é proteção",text:"Uma carteira bem distribuída entre vários importadores e países reduz o risco de concentração, tornando sua apólice mais acessível. As seguradoras valorizam muito essa diversificação geográfica e por cliente.",insight:"Preencha os valores em US$ em todas as faixas disponíveis — a seguradora precisa ver o tamanho real de cada exposição.",funFact:"Empresas com mais de 20 importadores ativos em 3 ou mais países costumam obter os melhores termos de apólice disponíveis no mercado.",importance:"Deixar faixas em branco faz a seguradora assumir o pior caso — preencher completo garante uma avaliação justa."},4:{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),title:"Perdas internacionais: recuperar no exterior é caro",text:"Recuperar valores no exterior é complexo, caro e demorado. As seguradoras analisam seu histórico para entender o nível de exposição real. Declarar perdas passadas é sinal de maturidade e transparência.",insight:"Informe o país de cada perda — perdas em mercados desenvolvidos preocupam muito menos do que em mercados emergentes.",funFact:"O custo médio de cobrança internacional pode chegar a 40% do valor da dívida — o seguro elimina completamente esse risco.",importance:"Omitir perdas internacionais pode resultar em exclusão de cobertura para países ou clientes específicos."},5:{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),title:"Vencidos acima de 180 dias: transparência total",text:"No comércio exterior, dívidas acima de 180 dias são consideradas de difícil recuperação. Declarar esses valores demonstra transparência e profissionalismo — e permite que a apólice seja estruturada sem exclusões surpresa.",insight:"Mesmo sem vencidos, preencha com zero — a informação confirma uma carteira saudável e acelera a aprovação.",funFact:"A média mundial de inadimplência no comércio exterior é de 2% a 3% do faturamento exportado — proteger-se é mais barato do que recuperar.",importance:"Vencidos não declarados descobertos na sinistro podem inviabilizar o pagamento da indenização."},6:{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"})}),title:"Último passo — seus importadores definem o custo",text:"As seguradoras possuem bases de dados globais para verificar a saúde financeira dos seus importadores. O endereço completo e o código fiscal (Tax ID) são essenciais para identificação correta e aprovação de limites.",insight:"Inclua o Tax ID (código fiscal) e o endereço completo — isso acelera a análise e melhora significativamente as condições oferecidas.",funFact:"Após o envio, o SENTINEL consulta simultaneamente Coface, Atradius, AVLA, Allianz Trade, AIG, CESCE e CHUBB — sem custo para você.",importance:"Uma amostra diversificada (grandes, médios e pequenos importadores) resulta em limites mais generosos e prêmios mais precisos."}};function $u({tip:i,stepIndex:d,totalSteps:l}){return o.jsxs("div",{className:"mb-5 rounded-xl border border-cobre/20 overflow-hidden shadow-sm",children:[o.jsxs("div",{className:"bg-gradient-to-r from-navy to-[#0d1f3c] px-4 sm:px-5 py-3 flex items-center gap-3",children:[o.jsx("div",{className:"text-cobre bg-cobre/20 rounded-lg p-1.5 flex-shrink-0",children:i.icon}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsx("p",{className:"text-[10px] font-bold text-cobre uppercase tracking-widest",children:"SENTINEL — Guia de Preenchimento"}),o.jsx("h4",{className:"text-sm sm:text-base font-bold text-white leading-tight",children:i.title})]})]}),o.jsxs("div",{className:"bg-gradient-to-br from-gray-50 to-white px-4 sm:px-5 py-4 space-y-3",children:[o.jsx("p",{className:"text-sm text-gray-700 leading-relaxed",children:i.text}),o.jsxs("div",{className:"flex items-start gap-2.5 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2.5",children:[o.jsx("svg",{className:"w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),o.jsxs("div",{children:[o.jsx("p",{className:"text-[10px] font-bold text-amber-700 uppercase tracking-wide mb-0.5",children:"Impacto na proposta"}),o.jsx("p",{className:"text-xs text-amber-800",children:i.importance})]})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:[o.jsxs("div",{className:"flex items-start gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2.5",children:[o.jsx("svg",{className:"w-4 h-4 text-green-600 flex-shrink-0 mt-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),o.jsxs("div",{children:[o.jsx("p",{className:"text-[10px] font-bold text-green-700 uppercase tracking-wide mb-0.5",children:"Dica prática"}),o.jsx("p",{className:"text-xs text-green-800",children:i.insight})]})]}),o.jsxs("div",{className:"flex items-start gap-2 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2.5",children:[o.jsx("svg",{className:"w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),o.jsxs("div",{children:[o.jsx("p",{className:"text-[10px] font-bold text-blue-700 uppercase tracking-wide mb-0.5",children:"Sabia que?"}),o.jsx("p",{className:"text-xs text-blue-800",children:i.funFact})]})]})]})]})]})}function ng({step:i}){const d=sg[i];return d?o.jsx($u,{tip:d,stepIndex:i,totalSteps:6}):null}function lg({step:i}){const d=ig[i];return d?o.jsx($u,{tip:d,stepIndex:i,totalSteps:7}):null}const dg="modulepreload",cg=function(i){return"/sentinel-fairfield/"+i},eu={},ug=function(d,l,m){let c=Promise.resolve();if(l&&l.length>0){let f=function(y){return Promise.all(y.map(k=>Promise.resolve(k).then(C=>({status:"fulfilled",value:C}),C=>({status:"rejected",reason:C}))))};document.getElementsByTagName("link");const g=document.querySelector("meta[property=csp-nonce]"),v=(g==null?void 0:g.nonce)||(g==null?void 0:g.getAttribute("nonce"));c=f(l.map(y=>{if(y=cg(y),y in eu)return;eu[y]=!0;const k=y.endsWith(".css"),C=k?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${C}`))return;const P=document.createElement("link");if(P.rel=k?"stylesheet":dg,k||(P.as="script"),P.crossOrigin="",P.href=y,v&&P.setAttribute("nonce",v),document.head.appendChild(P),k)return new Promise((F,_)=>{P.addEventListener("load",F),P.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${y}`)))})}))}function p(f){const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=f,window.dispatchEvent(g),!g.defaultPrevented)throw f}return c.then(f=>{for(const g of f||[])g.status==="rejected"&&p(g.reason);return d().catch(p)})};function au({onComplete:i}){const[d,l]=S.useState(0),[m,c]=S.useState(0),p=[{label:"Analisando perfil da empresa...",icon:"🏢"},{label:"Avaliando histórico de crédito...",icon:"📊"},{label:"Calculando taxa base do setor...",icon:"🔢"},{label:"Processando fatores de ajuste...",icon:"⚙️"},{label:"Aplicando bonus/malus...",icon:"📈"},{label:"Definindo estrutura de cobertura...",icon:"🛡️"},{label:"Ranking de seguradoras...",icon:"🏆"},{label:"Gerando relatório iCover...",icon:"✨"}];return S.useEffect(()=>{const g=12e3/p.length,v=80;let y=0;const k=setInterval(()=>{y+=v;const P=y/12e3,F=P<.5?4*P*P*P:1-Math.pow(-2*P+2,3)/2,_=Math.min(F*100,100);c(_),_>=100&&(clearInterval(k),setTimeout(i,600))},v),C=setInterval(()=>{l(P=>P<p.length-1?P+1:P)},g);return()=>{clearInterval(k),clearInterval(C)}},[]),o.jsxs("div",{className:"flex flex-col items-center justify-center py-16 px-4 animate-fadeIn",children:[o.jsxs("div",{className:"relative mb-8",children:[o.jsx("div",{className:"w-24 h-24 rounded-full bg-gradient-to-br from-navy/10 to-sentinel/10 flex items-center justify-center",children:o.jsxs("svg",{width:56,height:56,viewBox:"0 0 80 80",fill:"none",children:[o.jsx("path",{d:"M40 12 L62 24 L62 42 C62 56 52 66 40 70 C28 66 18 56 18 42 L18 24 Z",fill:"rgba(17,24,51,0.06)",stroke:"#0c4a6e",strokeWidth:"1.8",children:o.jsx("animate",{attributeName:"stroke-opacity",values:"0.5;1;0.5",dur:"2.5s",repeatCount:"indefinite"})}),o.jsx("path",{d:"M40 20 L56 28 L56 42 C56 52 49 60 40 63 C31 60 24 52 24 42 L24 28 Z",fill:"rgba(12,74,110,0.06)",stroke:"#0c4a6e",strokeWidth:"0.8",opacity:"0.5"}),o.jsxs("text",{x:"40",y:"48",textAnchor:"middle",fill:"#0c4a6e",fontSize:"22",fontWeight:"bold",fontFamily:"Inter, sans-serif",children:["$",o.jsx("animate",{attributeName:"opacity",values:"0.5;1;0.5",dur:"2s",repeatCount:"indefinite"})]}),o.jsxs("line",{x1:"22",y1:"40",x2:"58",y2:"40",stroke:"#0c4a6e",strokeWidth:"0.5",opacity:"0.2",children:[o.jsx("animate",{attributeName:"y1",values:"25;55;25",dur:"3s",repeatCount:"indefinite"}),o.jsx("animate",{attributeName:"y2",values:"25;55;25",dur:"3s",repeatCount:"indefinite"}),o.jsx("animate",{attributeName:"opacity",values:"0;0.35;0",dur:"3s",repeatCount:"indefinite"})]})]})}),o.jsx("div",{className:"absolute -inset-4 rounded-full border-2 border-dashed border-navy/10 animate-spin",style:{animationDuration:"10s"}})]}),o.jsx("h2",{className:"text-2xl font-black text-navy mb-2",children:"iCover Analisando"}),o.jsx("p",{className:"text-navy/40 text-sm mb-8",children:"Motor de subscrição inteligente SENTINEL"}),o.jsxs("div",{className:"w-full max-w-md mb-6",children:[o.jsx("div",{className:"h-2 bg-navy/[0.06] rounded-full overflow-hidden",children:o.jsx("div",{className:"h-full bg-gradient-to-r from-sentinel to-cobre rounded-full transition-all duration-200",style:{width:`${m}%`}})}),o.jsxs("div",{className:"flex justify-between mt-1.5",children:[o.jsxs("span",{className:"text-[10px] text-navy/30 font-mono",children:[Math.round(m),"%"]}),o.jsx("span",{className:"text-[10px] text-navy/30 font-mono",children:"iCover Engine v1.0"})]})]}),o.jsx("div",{className:"space-y-2 w-full max-w-md",children:p.map((f,g)=>o.jsxs("div",{className:`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${g<d?"opacity-40":g===d?"bg-sentinel/[0.06] border border-sentinel/20":"opacity-20"}`,children:[o.jsx("span",{className:"text-base",children:f.icon}),o.jsx("span",{className:`text-sm ${g===d?"text-navy font-semibold":"text-navy/50"}`,children:f.label}),g<d&&o.jsx("span",{className:"ml-auto text-emerald-500 text-xs",children:"✓"}),g===d&&o.jsx("span",{className:"ml-auto w-3 h-3 rounded-full bg-sentinel animate-pulse"})]},g))})]})}function mg({score:i,maxScore:d=100,riskLabel:l,riskColor:m}){const[c,p]=S.useState(0),f=c/d,g=2*Math.PI*45,v=g*(1-f);return S.useEffect(()=>{let y;const C=Date.now();function P(){const F=Date.now()-C,_=Math.min(F/1500,1),z=1-Math.pow(1-_,3);p(Math.round(i*z)),_<1&&(y=requestAnimationFrame(P))}return y=requestAnimationFrame(P),()=>cancelAnimationFrame(y)},[i]),o.jsxs("div",{className:"flex flex-col items-center",children:[o.jsxs("div",{className:"relative w-36 h-36",children:[o.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full -rotate-90",children:[o.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#e5e7eb",strokeWidth:"6",opacity:"0.3"}),o.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:m,strokeWidth:"6",strokeLinecap:"round",strokeDasharray:g,strokeDashoffset:v,className:"transition-all duration-1000"})]}),o.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center",children:[o.jsx("span",{className:"text-3xl font-black text-navy",children:c}),o.jsxs("span",{className:"text-[10px] text-navy/40 font-medium",children:["/ ",d]})]})]}),o.jsx("div",{className:"mt-2 px-3 py-1 rounded-full text-xs font-bold",style:{backgroundColor:m+"20",color:m},children:l})]})}function pg({label:i,value:d,max:l,delay:m=0}){const[c,p]=S.useState(0);S.useEffect(()=>{const g=setTimeout(()=>p(d/l*100),200+m);return()=>clearTimeout(g)},[d,l,m]);const f=c>=70?"#34D399":c>=40?"#FCD34D":"#FB923C";return o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"text-xs text-navy/50 w-40 text-right flex-shrink-0",children:i}),o.jsx("div",{className:"flex-1 h-2 bg-navy/[0.06] rounded-full overflow-hidden",children:o.jsx("div",{className:"h-full rounded-full transition-all duration-1000 ease-out",style:{width:`${c}%`,backgroundColor:f}})}),o.jsxs("span",{className:"text-xs font-bold text-navy/70 w-10",children:[d,"/",l]})]})}function fg({insurer:i,rank:d}){return o.jsxs("div",{className:`flex items-center gap-3 p-3 rounded-xl border transition-all ${d===0?"bg-sentinel/[0.04] border-sentinel/20":"bg-white border-gray-100"}`,children:[o.jsx("div",{className:`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black ${d===0?"bg-sentinel/15 text-sentinel":d===1?"bg-cobre/10 text-cobre":"bg-gray-100 text-navy/40"}`,children:d+1}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsx("p",{className:"text-sm font-bold text-navy truncate",children:i.name}),o.jsx("p",{className:"text-[10px] text-navy/40 truncate",children:i.strengths[0]})]}),o.jsxs("div",{className:"text-right flex-shrink-0",children:[o.jsxs("span",{className:"text-xs font-bold text-navy/60",children:[i.score,"%"]}),o.jsx("p",{className:"text-[10px] text-navy/30",children:"aderência"})]})]})}function gg({analysis:i,onAccept:d,onDecline:l,tipo:m}){const[c,p]=S.useState(!1);return i.metrics.symbol,o.jsxs("div",{className:"animate-fadeIn",children:[o.jsxs("div",{className:"text-center mb-8",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sentinel/[0.08] border border-sentinel/20 mb-3",children:[o.jsx(ir,{size:16}),o.jsx("span",{className:"text-[10px] font-bold text-sentinel uppercase tracking-wider",children:"iCover — Análise de Subscrição"})]}),o.jsx("h2",{className:"text-2xl font-black text-navy",children:i.empresa}),o.jsxs("p",{className:"text-sm text-navy/40",children:[i.setor," · CNPJ ",i.cnpj]})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8",children:[o.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col items-center",children:[o.jsx("h3",{className:"text-xs font-bold text-navy/40 uppercase tracking-wider mb-4",children:"Score de Risco"}),o.jsx(mg,{score:i.score,maxScore:i.scoreMax,riskLabel:i.riskLabel,riskColor:i.riskColor})]}),o.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-6 shadow-sm",children:[o.jsx("h3",{className:"text-xs font-bold text-navy/40 uppercase tracking-wider mb-4",children:"Prêmio Estimado Anual"}),o.jsxs("div",{className:"text-center mb-4",children:[o.jsx("p",{className:"text-3xl font-black text-navy",children:i.premium.estimatedFormatted}),o.jsxs("p",{className:"text-xs text-navy/40 mt-1",children:["≈ ",i.premium.monthlyFormatted,"/mês"]})]}),o.jsxs("div",{className:"space-y-2 text-xs",children:[o.jsxs("div",{className:"flex justify-between text-navy/50",children:[o.jsx("span",{children:"Prêmio mínimo"}),o.jsx("span",{className:"font-semibold text-navy/70",children:i.premium.minimumFormatted})]}),o.jsxs("div",{className:"flex justify-between text-navy/50",children:[o.jsx("span",{children:"Prêmio máximo"}),o.jsx("span",{className:"font-semibold text-navy/70",children:i.premium.maximumFormatted})]}),o.jsxs("div",{className:"flex justify-between text-navy/50",children:[o.jsx("span",{children:"Taxa aplicada"}),o.jsx("span",{className:"font-semibold text-navy/70",children:i.pricing.adjustedRatePct})]}),i.bonusMalus.type!=="neutro"&&o.jsxs("div",{className:`flex justify-between ${i.bonusMalus.type==="bonus"?"text-emerald-600":"text-orange-500"}`,children:[o.jsx("span",{children:i.bonusMalus.type==="bonus"?"Bônus":"Malus"}),o.jsxs("span",{className:"font-bold",children:[i.bonusMalus.pct>0?"+":"",i.bonusMalus.pct,"%"]})]})]})]}),o.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-6 shadow-sm",children:[o.jsx("h3",{className:"text-xs font-bold text-navy/40 uppercase tracking-wider mb-4",children:"Cobertura Recomendada"}),o.jsxs("div",{className:"space-y-3",children:[o.jsxs("div",{children:[o.jsx("p",{className:"text-sm font-bold text-sentinel",children:i.coverage.structureLabel}),o.jsx("p",{className:"text-[10px] text-navy/40 mt-0.5 leading-relaxed",children:i.coverage.structureReason})]}),o.jsx("div",{className:"h-px bg-gray-100"}),o.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[o.jsxs("div",{children:[o.jsx("p",{className:"text-navy/40",children:"PMI"}),o.jsx("p",{className:"font-bold text-navy",children:i.coverage.pmiPct})]}),o.jsxs("div",{children:[o.jsx("p",{className:"text-navy/40",children:"POS"}),o.jsx("p",{className:"font-bold text-navy",children:i.coverage.posPct})]}),o.jsxs("div",{children:[o.jsx("p",{className:"text-navy/40",children:"Prazo máx. crédito"}),o.jsxs("p",{className:"font-bold text-navy",children:[i.coverage.maxCreditPeriod," dias"]})]}),o.jsxs("div",{children:[o.jsx("p",{className:"text-navy/40",children:"Mora prolongada"}),o.jsxs("p",{className:"font-bold text-navy",children:[i.coverage.waitingPeriod," dias"]})]}),o.jsxs("div",{children:[o.jsx("p",{className:"text-navy/40",children:"Limite discricionário"}),o.jsx("p",{className:"font-bold text-navy",children:i.coverage.discretionaryLimitFormatted})]}),o.jsxs("div",{children:[o.jsx("p",{className:"text-navy/40",children:"Limite agregado"}),o.jsx("p",{className:"font-bold text-navy",children:i.coverage.aggregateLimitFormatted})]})]}),i.coverage.aad>0&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"h-px bg-gray-100"}),o.jsx("p",{className:"text-[10px] text-navy/40",children:i.coverage.aadLabel})]})]})]})]}),o.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-6",children:[o.jsxs("button",{onClick:()=>p(!c),className:"flex items-center justify-between w-full text-left",children:[o.jsx("h3",{className:"text-xs font-bold text-navy/40 uppercase tracking-wider",children:"Análise Detalhada por Dimensão"}),o.jsx("svg",{className:`w-4 h-4 text-navy/30 transition-transform ${c?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),c&&o.jsxs("div",{className:"mt-4 space-y-3",children:[Object.entries(i.scores).map(([f,g],v)=>o.jsx(pg,{label:g.label,value:g.value,max:g.max,delay:v*100},f)),o.jsx("div",{className:"h-px bg-gray-100 my-3"}),o.jsx("h4",{className:"text-xs font-bold text-navy/40 uppercase tracking-wider",children:"Fatores de Ajuste da Taxa"}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2",children:Object.entries(i.pricing.factors).map(([f,g])=>o.jsxs("div",{className:"flex items-center justify-between text-xs p-2 rounded-lg bg-gray-50",children:[o.jsx("span",{className:"text-navy/50",children:g.label}),o.jsxs("span",{className:`font-bold ${g.value<1?"text-emerald-600":g.value>1?"text-orange-500":"text-navy/60"}`,children:[g.value<1?"↓":g.value>1?"↑":"="," ",g.value.toFixed(2),"x"]})]},f))})]})]}),o.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-8",children:[o.jsx("h3",{className:"text-xs font-bold text-navy/40 uppercase tracking-wider mb-4",children:"Ranking de Seguradoras por Aderência ao Perfil"}),o.jsx("div",{className:"space-y-2",children:i.insurers.slice(0,5).map((f,g)=>o.jsx(fg,{insurer:f,rank:g},f.name))})]}),o.jsx("div",{className:"bg-navy/[0.03] rounded-xl p-4 mb-6 border border-navy/[0.06]",children:o.jsxs("p",{className:"text-[10px] text-navy/40 leading-relaxed",children:[o.jsx("strong",{className:"text-navy/60",children:"Importante:"})," Esta análise é uma estimativa gerada pelo motor de subscrição iCover com base nos dados informados. Os valores e condições apresentados são indicativos e podem variar na cotação real junto às seguradoras. A Fairfield atua como consultoria 100% independente — não representamos nenhuma seguradora. Os prêmios e condições definitivos serão definidos pelas seguradoras após análise formal da proposta."]})}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 justify-center",children:[o.jsx("button",{onClick:d,className:"px-8 py-4 bg-gradient-to-r from-sentinel-dark to-sentinel text-navy-dark rounded-2xl font-bold text-base shadow-lg shadow-sentinel/15 hover:shadow-xl hover:shadow-sentinel/25 hover:scale-[1.02] transition-all",children:"✓ Aceitar e Prosseguir com Cotação"}),o.jsx("button",{onClick:l,className:"px-8 py-4 border border-navy/10 text-navy/50 rounded-2xl font-semibold text-sm hover:bg-navy/[0.03] transition-all",children:"Analisar meu Score de Crédito →"})]}),o.jsxs("p",{className:"text-center text-[10px] text-navy/25 mt-4",children:["Powered by ",o.jsx("span",{className:"font-bold text-sentinel/50",children:"SENTINEL"})," iCover Engine v1.0 · Fairfield Corretora de Seguros · SUSEP 20.2036457.1"]})]})}function Bu({formData:i,tipo:d,onComplete:l,onDecline:m}){const[c,p]=S.useState("analyzing"),[f,g]=S.useState(null),v=S.useRef(null),y=S.useRef(!1);S.useEffect(()=>{async function F(){try{const _={tipo:d,...i,seguradoras:[]};try{const{apiFetch:z}=await ug(async()=>{const{apiFetch:O}=await Promise.resolve().then(()=>qf);return{apiFetch:O}},void 0),A=await z("/api/underwriting/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});v.current=A,g(A)}catch{console.warn("API indisponível, usando análise client-side");const z=hg(_);v.current=z,g(z)}}catch(_){console.error("Erro na análise iCover:",_)}y.current&&p("results")}F()},[]);function k(){y.current=!0,v.current&&p("results")}function C(){l(f)}function P(){m?m():window.open("https://www.4score.com.br","_blank")}return c==="analyzing"?o.jsx(au,{onComplete:k}):f?o.jsx(gg,{analysis:f,onAccept:C,onDecline:P,tipo:d}):o.jsx(au,{onComplete:k})}function hg(i){var J,H,ne;const d=i.tipo||"interno",l=d==="externo"?"US$":"R$",m=i.historicoFaturamento||[],c=m.map(ue=>parseFloat(String(ue.faturamento||"0").replace(/[^\d.,]/g,"").replace(",","."))||0),p=m.map(ue=>parseFloat(String(ue.perdas||"0").replace(/[^\d.,]/g,"").replace(",","."))||0),f=c.length>0?c[c.length-1]:0,g=d==="interno"?1e3:1,v=f*g,y=c.reduce((ue,ge)=>ue+ge,0),k=p.reduce((ue,ge)=>ue+ge,0),C=y>0?k/y:0,P=i.condicoesVenda||{},F=parseFloat(P.pct_prazo||"80")/100,_=parseInt(P.prazo_medio_dias||"60")||60,z=parseFloat(String(P.faturamento_desejado_seguro||"0").replace(/[^\d.,]/g,"").replace(",","."))||0,A=z>0?z*g:v*F,O=.002,V=O*(C===0?.85:C<.05?.95:C<.15?1.1:1.4),D=Math.max(A*V,15e3),$=C===0?78:C<.05?70:C<.15?55:40,Z=ue=>`${l} ${Math.round(ue).toLocaleString("pt-BR")}`;return{tipo:d,empresa:((J=i.proponente)==null?void 0:J.razao_social)||"Empresa",cnpj:((H=i.proponente)==null?void 0:H.cnpj)||"",setor:((ne=i.proponente)==null?void 0:ne.setor)||"Não identificado",setorRisco:"medium",score:$,scoreMax:100,riskClass:$>=65?"standard":"substandard",riskLabel:$>=65?"Risco Padrão":"Risco Subpadrão",riskColor:$>=65?"#7DD3FC":"#FCD34D",scores:{revenue:{value:9,max:15,label:"Porte da Empresa"},lossRatio:{value:C===0?25:15,max:25,label:"Histórico de Perdas"},concentration:{value:12,max:20,label:"Concentração de Compradores"},paymentTerms:{value:9,max:15,label:"Prazo Médio de Crédito"},sector:{value:7,max:10,label:"Risco do Setor"},geography:{value:3,max:5,label:"Diversificação Geográfica"},portfolio:{value:7,max:10,label:"Qualidade da Carteira"}},metrics:{faturamentoAnual:v,faturamentoSeguravel:A,pctPrazo:F,prazoMedio:_,prazoMaximo:90,avgLossRatio:C,topBuyerPct:.15,top5Pct:.45,numBuyers:10,atrasosRatio:0,currency:d==="externo"?"USD":"BRL",symbol:l},pricing:{baseRate:O,adjustedRate:V,baseRatePct:(O*100).toFixed(3)+"%",adjustedRatePct:(V*100).toFixed(3)+"%",factors:{setor:{value:1,label:"Setor"},sinistralidade:{value:C===0?.85:1,label:"Sinistralidade"}}},premium:{estimated:Math.round(D),minimum:Math.round(D*.7),maximum:Math.round(D*1.3),monthly:Math.round(D/12),estimatedFormatted:Z(D),minimumFormatted:Z(D*.7),maximumFormatted:Z(D*1.3),monthlyFormatted:Z(D/12)},bonusMalus:{factor:1,type:C===0?"bonus":"neutro",label:C===0?"Bônus (sem sinistro)":"Neutro",pct:C===0?-15:0},coverage:{structure:"whole_turnover",structureLabel:"Apólice Global (Whole Turnover)",structureReason:"Estrutura recomendada com base no perfil.",pmi:.85,pmiPct:"85%",pos:.15,posPct:"15%",aad:0,aadLabel:"Sem franquia agregada",discretionaryLimit:5e4,discretionaryLimitFormatted:Z(5e4),maxCreditPeriod:Math.min(parseInt(P.prazo_maximo_dias||"90")||90,120),aggregateLimit:Math.round(D*14),aggregateLimitFormatted:Z(D*14),waitingPeriod:d==="externo"?180:150},insurers:[{name:"Allianz Trade",score:90,strengths:["Líder global em seguro de crédito"]},{name:"Coface",score:85,strengths:["Rating DRA proprietário"]},{name:"Atradius",score:80,strengths:["Cobrança integrada"]},{name:"AVLA",score:78,strengths:["Agilidade e foco em LATAM"]},{name:"CESCE",score:72,strengths:["Expertise ibero-americana"]}],analyzedAt:new Date().toISOString()}}const En="fairfield_intake_interno",xg=["AC","AL","AM","AP","BA","CE","DF","ES","GO","MA","MG","MS","MT","PA","PB","PE","PI","PR","RJ","RN","RO","RR","RS","SC","SE","SP","TO"],ds=["Proponente","Faturamento","Carteira","Perdas","Atrasos","Compradores"],vg=["Até 5.000","De 5.001 a 10.000","De 10.001 a 50.000","De 50.001 a 100.000","De 100.001 a 500.000","De 500.001 a 1.000.000","De 1.000.001 a 5.000.000","Acima de 5.000.001"],yg=["Até 30 dias","Entre 31 e 120 dias","Entre 121 e 180 dias","Acima de 181 dias"];function ou(){return{proponente:{razao_social:"",cnpj:"",setor:"",faturamento_pct:"",uf:""},contato:{nome:"",email:"",telefone:""},coSeguradas:[{empresa:"",cnpj:"",setor:"",faturamento_pct:""}],historicoFaturamento:[{ano:"2023",faturamento:"",perdas:""},{ano:"2024",faturamento:"",perdas:""},{ano:"2025",faturamento:"",perdas:""},{ano:"Próximos 12 meses",faturamento:"",perdas:""}],condicoesVenda:{pct_vista:"",pct_prazo:"",prazo_medio_dias:"",prazo_maximo_dias:"",faturamento_desejado_seguro:""},carteiraRecebiveis:vg.map(i=>({faixa:i,faturamento_total:"",pct_faturamento:"",num_clientes:"",pct_clientes:""})),perdasPorFaixa:[],maioresPerdas:[{razao_social:"",cnpj:"",exercicio:"",valor:"",motivo:""}],atrasos:yg.map(i=>({faixa_dias:i,valor_atraso:"",pct_valor:"",qtd_clientes:"",pct_clientes:""})),atrasosDetalhados:[{razao_social:"",cnpj:"",data_emissao:"",data_vencimento:"",valor:""}],amostraCompradores:[{cnpj_codigo_fiscal:"",razao_social:"",faturamento_anual:"",limite_credito:""}]}}function bg(){bs();const{user:i,updateProspectPhase:d}=Lo(),[l,m]=S.useState(0),[c,p]=S.useState(()=>{const h=localStorage.getItem(En);return h?JSON.parse(h):ou()}),[f,g]=S.useState({}),[v,y]=S.useState(!1),[k,C]=S.useState(!1),[P,F]=S.useState(!1),[_,z]=S.useState(null),[A,O]=S.useState(null),[V,D]=S.useState(!1);S.useEffect(()=>{localStorage.setItem(En,JSON.stringify(c))},[c]),S.useEffect(()=>{i&&d(i.email,"preenchendo_interno")},[]);function $(h,I,w){p(M=>({...M,[h]:{...M[h],[I]:w}})),g(M=>{const Q={...M};return delete Q[`${h}.${I}`],Q})}function Z(h,I,w,M){p(Q=>{const W=[...Q[h]];if(W[I]={...W[I],[w]:M},h==="carteiraRecebiveis"&&(w==="faturamento_total"||w==="num_clientes")){const N=W.reduce((ae,re)=>ae+(parseFloat(String(re.faturamento_total).replace(/\./g,"").replace(",","."))||0),0),T=W.reduce((ae,re)=>ae+(parseInt(String(re.num_clientes).replace(/\D/g,""))||0),0);W.forEach((ae,re)=>{const le=parseFloat(String(ae.faturamento_total).replace(/\./g,"").replace(",","."))||0,de=parseInt(String(ae.num_clientes).replace(/\D/g,""))||0;W[re]={...W[re],pct_faturamento:N>0?(le/N*100).toFixed(1):"",pct_clientes:T>0?(de/T*100).toFixed(1):""}})}if(h==="atrasos"&&(w==="valor_atraso"||w==="qtd_clientes")){const N=W.reduce((ae,re)=>ae+(parseFloat(String(re.valor_atraso).replace(/\./g,"").replace(",","."))||0),0),T=W.reduce((ae,re)=>ae+(parseInt(String(re.qtd_clientes).replace(/\D/g,""))||0),0);W.forEach((ae,re)=>{const le=parseFloat(String(ae.valor_atraso).replace(/\./g,"").replace(",","."))||0,de=parseInt(String(ae.qtd_clientes).replace(/\D/g,""))||0;W[re]={...W[re],pct_valor:N>0?(le/N*100).toFixed(1):"",pct_clientes:T>0?(de/T*100).toFixed(1):""}})}return{...Q,[h]:W}})}function J(h,I){p(w=>({...w,[h]:[...w[h],{...I}]}))}function H(h,I){p(w=>({...w,[h]:w[h].filter((M,Q)=>Q!==I)}))}function ne(h){const I={};if(h===0)c.proponente.razao_social.trim()||(I["proponente.razao_social"]="Obrigatório"),c.proponente.cnpj.replace(/\D/g,"").length!==14&&(I["proponente.cnpj"]="CNPJ inválido"),c.proponente.setor.trim()||(I["proponente.setor"]="Obrigatório"),c.contato.nome.trim()||(I["contato.nome"]="Obrigatório"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.contato.email)||(I["contato.email"]="E-mail inválido");else if(h===1)c.condicoesVenda.faturamento_desejado_seguro||(I["cv.fds"]="Informe o faturamento desejado");else if(h===5){const w=c.amostraCompradores.filter(M=>M.razao_social||M.faturamento_anual||M.limite_credito);w.length===0?I.compradores="Informe pelo menos 1 comprador":w.forEach((M,Q)=>{(!M.cnpj_codigo_fiscal||M.cnpj_codigo_fiscal.replace(/\D/g,"").length<11)&&(I[`comprador_cnpj_${Q}`]=`CNPJ obrigatório para o comprador ${Q+1}`)})}return g(I),Object.keys(I).length>0&&h===5&&ke.error("Preencha o CNPJ de todos os compradores informados"),Object.keys(I).length===0}function ue(){ne(l)&&m(h=>Math.min(h+1,ds.length-1))}function ge(){D(!1),m(h=>Math.max(h-1,0))}async function $e(h){h==="review"?ne(l)&&D(!0):(F(!0),window.scrollTo({top:0,behavior:"smooth"}))}async function Fe(h){z(h),y(!0);try{const I={tipo:"interno",...c,seguradoras:[],icoverAnalysis:h},w=await ko("/api/leads",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(I)});if(!w.sucesso)throw new Error(w.mensagem);O(w.data),C(!0),F(!1),localStorage.removeItem(En),i&&d(i.email,"enviado_interno"),ke.success("Solicitação enviada com sucesso!")}catch(I){ke.error(I.message||"Erro ao enviar")}finally{y(!1)}}function Pe(){window.open("https://www.4score.com.br","_blank")}function Be(h){p(I=>({...I,proponente:{...I.proponente,razao_social:h.razao_social,uf:h.uf||I.proponente.uf}})),ke.success(`Empresa: ${h.razao_social}`)}return k?o.jsx(Tu,{result:A,tipo:"interno",onReset:()=>{C(!1),F(!1),z(null),m(0),p(ou()),O(null),D(!1)}}):P?o.jsx("div",{className:"max-w-5xl mx-auto px-4 py-8",children:o.jsx(Bu,{formData:c,tipo:"interno",onComplete:Fe,onDecline:Pe})}):o.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[o.jsxs("div",{className:"text-center mb-6",children:[o.jsx("h2",{className:"text-3xl font-bold text-navy",children:"Crédito Interno"}),o.jsx("p",{className:"text-cobre text-sm font-semibold",children:"Operações Nacionais — Valores em R$"})]}),!V&&o.jsx(_u,{step:l,steps:ds}),!V&&o.jsx(ng,{step:l}),o.jsxs("div",{className:"card",children:[V?o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"bg-gradient-to-r from-navy to-[#0d1f3c] rounded-xl px-5 py-4 flex items-center gap-4",children:[o.jsx("div",{className:"w-12 h-12 bg-green-400/20 rounded-xl flex items-center justify-center flex-shrink-0",children:o.jsx("svg",{className:"w-7 h-7 text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),o.jsxs("div",{children:[o.jsx("p",{className:"text-[10px] font-bold text-green-400 uppercase tracking-widest mb-0.5",children:"Quase lá!"}),o.jsx("h3",{className:"text-base sm:text-lg font-bold text-white leading-tight",children:"Revisão Final dos Dados"}),o.jsx("p",{className:"text-xs text-white/60",children:"Confirme as informações antes de enviar para as 7 seguradoras"})]})]}),o.jsxs(cs,{accent:"navy",title:"Proponente",icon:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"}),children:[o.jsx(Sa,{label:"Empresa",value:c.proponente.razao_social,highlight:!0}),o.jsx(Sa,{label:"CNPJ",value:c.proponente.cnpj}),o.jsx(Sa,{label:"Setor",value:c.proponente.setor}),o.jsx(Sa,{label:"UF",value:c.proponente.uf}),o.jsx(Sa,{label:"Contato",value:c.contato.nome?`${c.contato.nome} · ${c.contato.email}`:""}),c.coSeguradas.filter(h=>h.empresa).length>0&&o.jsx(Sa,{label:"Co-seguradas",value:c.coSeguradas.filter(h=>h.empresa).map(h=>h.empresa).join(" · ")})]}),o.jsxs(cs,{accent:"cobre",title:"Faturamento e Condições de Venda",icon:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}),children:[c.historicoFaturamento.map(h=>o.jsx(Sa,{label:h.ano,value:h.faturamento?`R$ ${h.faturamento} mil · Perdas: ${h.perdas||"0"}`:""},h.ano)),o.jsx(Sa,{label:"Faturamento seguro",value:c.condicoesVenda.faturamento_desejado_seguro?`R$ ${c.condicoesVenda.faturamento_desejado_seguro}`:"",highlight:!0}),o.jsx(Sa,{label:"Condições",value:[c.condicoesVenda.pct_vista&&`Vista ${c.condicoesVenda.pct_vista}%`,c.condicoesVenda.pct_prazo&&`Prazo ${c.condicoesVenda.pct_prazo}%`,c.condicoesVenda.prazo_medio_dias&&`Médio ${c.condicoesVenda.prazo_medio_dias}d`,c.condicoesVenda.prazo_maximo_dias&&`Máx ${c.condicoesVenda.prazo_maximo_dias}d`].filter(Boolean).join(" · ")})]}),c.carteiraRecebiveis.filter(h=>h.faturamento_total).length>0&&o.jsx(cs,{accent:"navy",title:"Carteira de Recebíveis",icon:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"}),children:c.carteiraRecebiveis.filter(h=>h.faturamento_total).map(h=>o.jsx(Sa,{label:h.faixa,value:`R$ ${h.faturamento_total} (${h.pct_faturamento}%) · ${h.num_clientes} clientes`},h.faixa))}),c.amostraCompradores.filter(h=>h.razao_social).length>0&&o.jsx(cs,{accent:"cobre",title:"Amostra de Compradores",icon:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"}),children:c.amostraCompradores.filter(h=>h.razao_social).map((h,I)=>o.jsx(Sa,{label:h.razao_social,value:[h.cnpj_codigo_fiscal&&`CNPJ ${h.cnpj_codigo_fiscal}`,h.limite_credito&&`Lim: R$ ${h.limite_credito}`].filter(Boolean).join(" · ")},I))}),o.jsx(ru,{})]}):o.jsxs(o.Fragment,{children:[l===0&&o.jsxs("div",{className:"space-y-4",children:[o.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"1. Dados do Proponente"}),o.jsx(Ou,{value:c.proponente.cnpj,onChange:h=>$("proponente","cnpj",h),onResult:Be,error:f["proponente.cnpj"]}),o.jsx(pe,{label:"Razão Social",value:c.proponente.razao_social,onChange:h=>$("proponente","razao_social",h),required:!0,error:f["proponente.razao_social"]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[o.jsx(pe,{label:"Setor de Atividade",value:c.proponente.setor,onChange:h=>$("proponente","setor",h),required:!0,error:f["proponente.setor"],placeholder:"Atividade e produtos"}),o.jsx(pe,{label:"Faturamento Empresa (%)",value:c.proponente.faturamento_pct,onChange:h=>$("proponente","faturamento_pct",h),placeholder:"100%"}),o.jsx(Zf,{label:"UF",value:c.proponente.uf,onChange:h=>$("proponente","uf",h),options:xg})]}),o.jsx("div",{className:"border-t pt-4 mt-4",children:o.jsx("h4",{className:"text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide",children:"Contato Responsável"})}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[o.jsx(pe,{label:"Nome",value:c.contato.nome,onChange:h=>$("contato","nome",h),required:!0,error:f["contato.nome"]}),o.jsx(pe,{label:"E-mail",value:c.contato.email,onChange:h=>$("contato","email",h),type:"email",required:!0,error:f["contato.email"]}),o.jsx(pe,{label:"Telefone",value:c.contato.telefone,onChange:h=>$("contato","telefone",On(h)),placeholder:"(00) 00000-0000"})]}),o.jsx("div",{className:"border-t pt-4 mt-4",children:o.jsx("h4",{className:"text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide",children:"Co-Seguradas (opcional)"})}),o.jsx(la,{columns:[{key:"cnpj",label:"CNPJ",placeholder:"00.000.000/0000-00",type:"cnpj",cnpjLookupTarget:"empresa"},{key:"empresa",label:"Empresa",placeholder:"Preenchido automaticamente"},{key:"setor",label:"Setor",placeholder:"Atividade"},{key:"faturamento_pct",label:"Fat. %",placeholder:"%"}],rows:c.coSeguradas,onChange:(h,I,w)=>Z("coSeguradas",h,I,w),onAdd:()=>J("coSeguradas",{empresa:"",cnpj:"",setor:"",faturamento_pct:""}),onRemove:h=>H("coSeguradas",h),maxRows:3,addLabel:"Adicionar co-segurada"})]}),l===1&&o.jsxs("div",{className:"space-y-4",children:[o.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"2. Histórico de Faturamento e PDD"}),o.jsx("p",{className:"text-xs text-gray-400",children:"Em Milhares de Reais. Excluindo vendas para coligadas, pessoas físicas, empresas públicas, à vista ou antecipadas."}),o.jsx(la,{columns:[{key:"ano",label:"Período",readOnly:!0},{key:"faturamento",label:"Faturamento (R$ mil)",placeholder:"Ex: 5.000"},{key:"perdas",label:"Perdas (R$ mil)",placeholder:"Ex: 100 (ou 0)"}],rows:c.historicoFaturamento,onChange:(h,I,w)=>Z("historicoFaturamento",h,I,w)}),c.historicoFaturamento.some(h=>h.faturamento)&&o.jsx("div",{className:"flex flex-wrap gap-2 mt-1",children:c.historicoFaturamento.filter(h=>h.faturamento).map(h=>{const I=parseFloat(String(h.faturamento).replace(/\./g,"").replace(",","."))||0,w=parseFloat(String(h.perdas).replace(/\./g,"").replace(",","."))||0,M=I>0?w/I*100:null,Q=M===null?"bg-gray-100 text-gray-500":M<2?"bg-green-100 text-green-700":M<5?"bg-amber-100 text-amber-700":"bg-red-100 text-red-700";return o.jsxs("span",{className:`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${Q}`,children:[h.ano,": ",M!==null?`${M.toFixed(2)}% sinistralidade`:"informe as perdas"]},h.ano)})}),o.jsx("div",{className:"border-t pt-4 mt-4",children:o.jsx("h4",{className:"text-sm font-bold text-navy mb-3",children:"2.1 Distribuição das Condições de Venda"})}),o.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[o.jsx(pe,{label:"À Vista (%)",value:c.condicoesVenda.pct_vista,onChange:h=>{$("condicoesVenda","pct_vista",h);const I=parseFloat(h);!isNaN(I)&&I>=0&&I<=100&&!c.condicoesVenda.pct_prazo&&$("condicoesVenda","pct_prazo",String(100-I))},placeholder:"Ex: 30"}),o.jsx(pe,{label:"À Prazo (%)",value:c.condicoesVenda.pct_prazo,onChange:h=>$("condicoesVenda","pct_prazo",h),placeholder:"Ex: 70",hint:(()=>{const h=parseFloat(c.condicoesVenda.pct_vista)||0,I=parseFloat(c.condicoesVenda.pct_prazo)||0,w=h+I;return h&&I&&w!==100?`⚠️ Soma atual: ${w}% (deve ser 100%)`:h&&I&&w===100?"✓ Soma correta: 100%":null})()}),o.jsx(pe,{label:"Prazo Médio (dias)",value:c.condicoesVenda.prazo_medio_dias,onChange:h=>$("condicoesVenda","prazo_medio_dias",h),placeholder:"Ex: 60"}),o.jsx(pe,{label:"Prazo Máximo (dias)",value:c.condicoesVenda.prazo_maximo_dias,onChange:h=>$("condicoesVenda","prazo_maximo_dias",h),placeholder:"Ex: 120"})]}),o.jsxs("div",{className:"border-t pt-4 mt-4",children:[o.jsx("h4",{className:"text-sm font-bold text-navy mb-3",children:"2.2 Faturamento Anual Desejado para o Seguro"}),o.jsx("p",{className:"text-xs text-gray-400 mb-2",children:"Considerar o faturamento total anual somado de todos os clientes que a empresa deseja ter coberto dentro da apólice."})]}),o.jsx(pe,{label:"Valor (R$)",value:c.condicoesVenda.faturamento_desejado_seguro,onChange:h=>$("condicoesVenda","faturamento_desejado_seguro",h),required:!0,error:f["cv.fds"],placeholder:"Ex: 10.000.000",hint:"Sobre este faturamento estimado incide o custo da apólice."})]}),l===2&&o.jsxs("div",{className:"space-y-4",children:[o.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"3. Distribuição da Carteira de Recebíveis"}),o.jsx("p",{className:"text-xs text-gray-400",children:"Excluindo vendas para coligadas, PF, empresas públicas, à vista ou antecipadas. Somar todas as vendas de um mesmo cliente para enquadrar na faixa correta."}),o.jsx(la,{columns:[{key:"faixa",label:"Faixa de Valor (R$)",readOnly:!0},{key:"faturamento_total",label:"Fat. Total (R$)",placeholder:"Valor"},{key:"pct_faturamento",label:"% Fat.",readOnly:!0,placeholder:"Auto"},{key:"num_clientes",label:"Nº Clientes",placeholder:"Qtd"},{key:"pct_clientes",label:"% Clientes",readOnly:!0,placeholder:"Auto"}],rows:c.carteiraRecebiveis,onChange:(h,I,w)=>Z("carteiraRecebiveis",h,I,w)})]}),l===3&&o.jsxs("div",{className:"space-y-4",children:[o.jsx("div",{className:"flex items-center justify-between",children:o.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3 flex-1",children:"4. Detalhamento das Perdas Efetivas"})}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("p",{className:"text-xs text-gray-400",children:"Indique as 5 maiores perdas nos últimos 3 anos. Motivo: Mora, Falência, ações judiciais ou extrajudiciais."}),o.jsxs("button",{onClick:()=>{p(h=>({...h,maioresPerdas:[{razao_social:"Sem perdas no período",cnpj:"",exercicio:"",valor:"0",motivo:"Não houve perdas"}]}))},className:"ml-4 flex-shrink-0 text-xs text-gray-500 hover:text-green-600 border border-gray-200 hover:border-green-400 rounded-lg px-3 py-1.5 transition-colors flex items-center gap-1.5",children:[o.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),"Sem perdas neste período"]})]}),o.jsx("h4",{className:"text-sm font-bold text-navy",children:"4.1 Maiores Perdas"}),o.jsx(la,{columns:[{key:"cnpj",label:"CNPJ",placeholder:"00.000.000/0000-00",type:"cnpj",cnpjLookupTarget:"razao_social"},{key:"razao_social",label:"Razão Social",placeholder:"Preenchido automaticamente"},{key:"exercicio",label:"Exercício",placeholder:"2024"},{key:"valor",label:"Valor (R$)",placeholder:"Valor"},{key:"motivo",label:"Motivo",placeholder:"Mora, Falência..."}],rows:c.maioresPerdas,onChange:(h,I,w)=>Z("maioresPerdas",h,I,w),onAdd:()=>J("maioresPerdas",{razao_social:"",cnpj:"",exercicio:"",valor:"",motivo:""}),onRemove:h=>H("maioresPerdas",h),maxRows:5})]}),l===4&&o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"flex items-center justify-between border-b pb-3",children:[o.jsx("h3",{className:"text-lg font-bold text-navy",children:"5. Distribuição de Atrasos"}),o.jsxs("button",{onClick:()=>p(h=>({...h,atrasos:h.atrasos.map(I=>({...I,valor_atraso:"0",pct_valor:"0",qtd_clientes:"0",pct_clientes:"0"}))})),className:"flex-shrink-0 text-xs text-gray-500 hover:text-green-600 border border-gray-200 hover:border-green-400 rounded-lg px-3 py-1.5 transition-colors flex items-center gap-1.5",children:[o.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),"Sem atrasos no período"]})]}),o.jsx(la,{columns:[{key:"faixa_dias",label:"Dias de Atraso",readOnly:!0},{key:"valor_atraso",label:"Valor em Atraso (R$)",placeholder:"0"},{key:"pct_valor",label:"% Valor",readOnly:!0,placeholder:"Auto"},{key:"qtd_clientes",label:"Qtd Clientes",placeholder:"0"},{key:"pct_clientes",label:"% Clientes",readOnly:!0,placeholder:"Auto"}],rows:c.atrasos,onChange:(h,I,w)=>Z("atrasos",h,I,w)}),o.jsxs("div",{className:"border-t pt-4 mt-4",children:[o.jsx("h4",{className:"text-sm font-bold text-navy mb-2",children:"5.1 Abertura de Vencidos Acima de 180 Dias"}),o.jsx("p",{className:"text-xs text-gray-400 mb-2",children:"Detalhe os títulos vencidos há mais de 180 dias."})]}),o.jsx(la,{columns:[{key:"cnpj",label:"CNPJ",placeholder:"00.000.000/0000-00",type:"cnpj",cnpjLookupTarget:"razao_social"},{key:"razao_social",label:"Razão Social",placeholder:"Preenchido automaticamente"},{key:"data_emissao",label:"Emissão",placeholder:"dd/mm/aaaa"},{key:"data_vencimento",label:"Vencimento",placeholder:"dd/mm/aaaa"},{key:"valor",label:"Valor (R$)",placeholder:"Valor"}],rows:c.atrasosDetalhados,onChange:(h,I,w)=>Z("atrasosDetalhados",h,I,w),onAdd:()=>J("atrasosDetalhados",{razao_social:"",cnpj:"",data_emissao:"",data_vencimento:"",valor:""}),onRemove:h=>H("atrasosDetalhados",h),addLabel:"Adicionar título vencido"})]}),l===5&&o.jsxs("div",{className:"space-y-4",children:[o.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"6. Amostra de Compradores"}),o.jsx("p",{className:"text-xs text-gray-400",children:"Informar até 20 compradores — maiores, médios e menores. Valores em R$."}),o.jsx(la,{columns:[{key:"cnpj_codigo_fiscal",label:"CNPJ *",placeholder:"00.000.000/0000-00",type:"cnpj",cnpjLookupTarget:"razao_social",required:!0},{key:"razao_social",label:"Razão Social",placeholder:"Preenchido automaticamente"},{key:"faturamento_anual",label:"Fat. Anual (R$)",placeholder:"Valor"},{key:"limite_credito",label:"Limite Crédito (R$)",placeholder:"Valor"}],rows:c.amostraCompradores,onChange:(h,I,w)=>Z("amostraCompradores",h,I,w),onAdd:()=>J("amostraCompradores",{cnpj_codigo_fiscal:"",razao_social:"",faturamento_anual:"",limite_credito:""}),onRemove:h=>H("amostraCompradores",h),errors:f,maxRows:20,addLabel:"Adicionar comprador"}),o.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"* Faturamento anual: valor faturado para cada comprador. ** Limite de crédito rotativo: maior valor acumulado de créditos a receber no ano."}),o.jsx(ru,{})]})]}),o.jsx(Fu,{step:l,totalSteps:ds.length,stepNames:ds,onPrev:ge,onNext:ue,onSubmit:$e,loading:v,isReview:V})]})]})}function ru(){const i=[{num:"1",label:"Análise simultânea",text:"7 seguradoras consultadas ao mesmo tempo — Coface, Atradius, AVLA, Allianz Trade, AIG, CESCE e CHUBB",icon:o.jsx(o.Fragment,{children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})},{num:"2",label:"Comparativo técnico",text:"Nossa equipe negocia as melhores condições de cobertura, prêmio e serviço para o seu perfil",icon:o.jsx(o.Fragment,{children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})})},{num:"3",label:"Decisão estratégica",text:"Você recebe um comparativo exclusivo com recomendação técnica da Fairfield para a melhor escolha",icon:o.jsx(o.Fragment,{children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})})}];return o.jsxs("div",{className:"mt-6 rounded-2xl overflow-hidden border border-cobre/20 shadow-sm",children:[o.jsxs("div",{className:"bg-gradient-to-r from-navy to-[#0d1f3c] px-5 py-4 flex items-center gap-4",children:[o.jsx("div",{className:"w-14 h-14 bg-cobre/20 rounded-xl flex items-center justify-center flex-shrink-0",children:o.jsx("svg",{className:"w-8 h-8 text-cobre",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),o.jsxs("div",{children:[o.jsx("p",{className:"text-[10px] font-bold text-cobre uppercase tracking-widest mb-0.5",children:"O que acontece depois?"}),o.jsx("h4",{className:"text-base sm:text-lg font-bold text-white leading-tight",children:"O SENTINEL destrava oportunidades para você vender mais com segurança"})]})]}),o.jsx("div",{className:"bg-white px-5 py-4 grid grid-cols-1 sm:grid-cols-3 gap-3",children:i.map(d=>o.jsxs("div",{className:"flex flex-col gap-2 bg-gray-50 rounded-xl p-3 border border-gray-100",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("svg",{className:"w-5 h-5 text-cobre flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.icon}),o.jsx("span",{className:"text-xs font-bold text-navy",children:d.label})]}),o.jsx("p",{className:"text-xs text-gray-600 leading-relaxed",children:d.text})]},d.num))}),o.jsxs("div",{className:"bg-green-50 border-t border-green-200 px-5 py-3 flex items-start gap-2",children:[o.jsx("svg",{className:"w-4 h-4 text-green-600 flex-shrink-0 mt-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),o.jsxs("p",{className:"text-sm text-green-700",children:[o.jsx("strong",{children:"Estudo totalmente gratuito."})," O SENTINEL atua como suporte adicional à sua área de análise de crédito — mitigando riscos e destravando oportunidades para você vender mais com segurança."]})]})]})}function cs({icon:i,title:d,accent:l,children:m}){const c=l==="cobre"?"text-cobre bg-cobre/8":l==="green"?"text-green-600 bg-green-50":"text-navy bg-navy/5",p=l==="cobre"?"text-cobre":l==="green"?"text-green-700":"text-navy";return o.jsxs("div",{className:"rounded-xl border border-gray-100 overflow-hidden shadow-sm",children:[o.jsxs("div",{className:`px-4 py-2.5 flex items-center gap-2 ${c}`,children:[o.jsx("svg",{className:"w-4 h-4 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i}),o.jsx("h4",{className:`text-xs font-bold uppercase tracking-wide ${p}`,children:d})]}),o.jsx("div",{className:"bg-white divide-y divide-gray-50 px-4",children:m})]})}function Sa({label:i,value:d,highlight:l}){return!d||d==="—"||d==="undefined"||d.toString().trim()===""?null:o.jsxs("div",{className:"py-2 flex flex-wrap items-baseline gap-x-3 gap-y-0.5 min-h-[2rem]",children:[o.jsx("span",{className:"text-xs text-gray-400 font-medium w-28 flex-shrink-0",children:i}),o.jsx("span",{className:`text-sm flex-1 ${l?"font-bold text-navy":"text-gray-700"}`,children:d})]})}const An="fairfield_intake_externo",us=["Proponente","Faturamento","Destinos","Carteira","Perdas","Vencidos","Compradores"],Cg=["Até 10.000","De 10.001 a 50.000","De 50.001 a 200.000","De 200.001 a 500.000","De 500.001 a 1.000.000","Acima de 1.000.001"];function tu(){return{proponente:{razao_social:"",cnpj:"",setor:"",faturamento_pct:"",uf:""},contato:{nome:"",email:"",telefone:""},coSeguradas:[{empresa:"",cnpj:"",setor:"",faturamento_pct:""}],historicoFaturamento:[{ano:"2022",faturamento:"",perdas:""},{ano:"2023",faturamento:"",perdas:""},{ano:"2024",faturamento:"",perdas:""},{ano:"Próximos 12 meses",faturamento:"",perdas:""}],condicoesVenda:{pct_vista:"",pct_prazo:"",prazo_medio_dias:"",prazo_maximo_dias:"",faturamento_desejado_seguro:""},destinosExportacao:{anos_exportando:"",asia_pct:"",europa_pct:"",america_sul_pct:"",america_norte_pct:"",america_central_pct:"",africa_oceania_pct:"",menor_limite:"",maior_limite:"",num_importadores:"",principais_paises:""},carteiraRecebiveis:Cg.map(i=>({faixa:i,faturamento_total:"",pct_faturamento:"",num_clientes:"",pct_clientes:""})),maioresPerdas:[{importador:"",pais:"",exercicio:"",valor:"",motivo:""}],atrasos:[{faixa_dias:"Acima de 180 dias",valor_atraso:"",pct_valor:"",qtd_clientes:"",pct_clientes:""}],amostraCompradores:[{pais:"",razao_social:"",cnpj_codigo_fiscal:"",limite_credito:"",endereco:""}]}}function Sg(){const{user:i,updateProspectPhase:d}=Lo(),[l,m]=S.useState(0),[c,p]=S.useState(()=>{const h=localStorage.getItem(An);return h?JSON.parse(h):tu()}),[f,g]=S.useState({}),[v,y]=S.useState(!1),[k,C]=S.useState(!1),[P,F]=S.useState(!1),[_,z]=S.useState(null),[A,O]=S.useState(null),[V,D]=S.useState(!1);S.useEffect(()=>{localStorage.setItem(An,JSON.stringify(c))},[c]),S.useEffect(()=>{i&&d(i.email,"preenchendo_externo")},[]);function $(h,I,w){p(M=>({...M,[h]:{...M[h],[I]:w}})),g(M=>{const Q={...M};return delete Q[`${h}.${I}`],Q})}function Z(h,I,w,M){p(Q=>{const W=[...Q[h]];if(W[I]={...W[I],[w]:M},h==="carteiraRecebiveis"&&(w==="faturamento_total"||w==="num_clientes")){const N=W.reduce((ae,re)=>ae+(parseFloat(String(re.faturamento_total).replace(/\./g,"").replace(",","."))||0),0),T=W.reduce((ae,re)=>ae+(parseInt(String(re.num_clientes).replace(/\D/g,""))||0),0);W.forEach((ae,re)=>{const le=parseFloat(String(ae.faturamento_total).replace(/\./g,"").replace(",","."))||0,de=parseInt(String(ae.num_clientes).replace(/\D/g,""))||0;W[re]={...W[re],pct_faturamento:N>0?(le/N*100).toFixed(1):"",pct_clientes:T>0?(de/T*100).toFixed(1):""}})}return{...Q,[h]:W}})}function J(h,I){p(w=>({...w,[h]:[...w[h],{...I}]}))}function H(h,I){p(w=>({...w,[h]:w[h].filter((M,Q)=>Q!==I)}))}function ne(h){const I={};if(h===0&&(c.proponente.razao_social.trim()||(I["proponente.razao_social"]="Obrigatório"),c.proponente.cnpj.replace(/\D/g,"").length!==14&&(I["proponente.cnpj"]="CNPJ inválido"),c.proponente.setor.trim()||(I["proponente.setor"]="Obrigatório"),c.contato.nome.trim()||(I["contato.nome"]="Obrigatório"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.contato.email)||(I["contato.email"]="E-mail inválido")),h===6){const w=c.amostraCompradores.filter(M=>M.razao_social||M.limite_credito||M.pais);w.length===0?I.compradores="Informe pelo menos 1 importador":w.forEach((M,Q)=>{(!M.cnpj_codigo_fiscal||M.cnpj_codigo_fiscal.trim().length<3)&&(I[`comprador_cnpj_${Q}`]=`Código fiscal obrigatório para o importador ${Q+1}`)})}return g(I),Object.keys(I).length>0&&h===6&&ke.error("Preencha o código fiscal de todos os importadores informados"),Object.keys(I).length===0}function ue(){ne(l)&&m(h=>Math.min(h+1,us.length-1))}function ge(){D(!1),m(h=>Math.max(h-1,0))}async function $e(h){h==="review"?ne(l)&&D(!0):(F(!0),window.scrollTo({top:0,behavior:"smooth"}))}async function Fe(h){z(h),y(!0);try{const I={tipo:"externo",...c,seguradoras:[],icoverAnalysis:h},w=await ko("/api/leads",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(I)});if(!w.sucesso)throw new Error(w.mensagem);O(w.data),C(!0),F(!1),localStorage.removeItem(An),i&&d(i.email,"enviado_externo"),ke.success("Solicitação enviada com sucesso!")}catch(I){ke.error(I.message||"Erro ao enviar")}finally{y(!1)}}function Pe(){window.open("https://www.4score.com.br","_blank")}function Be(h){p(I=>({...I,proponente:{...I.proponente,razao_social:h.razao_social,uf:h.uf||I.proponente.uf}})),ke.success(`Empresa: ${h.razao_social}`)}return k?o.jsx(Tu,{result:A,tipo:"externo",onReset:()=>{C(!1),F(!1),z(null),m(0),p(tu()),O(null),D(!1)}}):P?o.jsx("div",{className:"max-w-5xl mx-auto px-4 py-8",children:o.jsx(Bu,{formData:c,tipo:"externo",onComplete:Fe,onDecline:Pe})}):o.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[o.jsxs("div",{className:"text-center mb-6",children:[o.jsx("h2",{className:"text-3xl font-bold text-navy",children:"Crédito Externo"}),o.jsx("p",{className:"text-cobre text-sm font-semibold",children:"Operações de Exportação — Valores em US$"})]}),!V&&o.jsx(_u,{step:l,steps:us}),!V&&o.jsx(lg,{step:l}),o.jsxs("div",{className:"card",children:[V?o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"bg-gradient-to-r from-navy to-[#0d1f3c] rounded-xl px-5 py-4 flex items-center gap-4",children:[o.jsx("div",{className:"w-12 h-12 bg-green-400/20 rounded-xl flex items-center justify-center flex-shrink-0",children:o.jsx("svg",{className:"w-7 h-7 text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),o.jsxs("div",{children:[o.jsx("p",{className:"text-[10px] font-bold text-green-400 uppercase tracking-widest mb-0.5",children:"Quase lá!"}),o.jsx("h3",{className:"text-base sm:text-lg font-bold text-white leading-tight",children:"Revisão Final dos Dados"}),o.jsx("p",{className:"text-xs text-white/60",children:"Confirme as informações antes de enviar para as 7 seguradoras"})]})]}),o.jsxs(ms,{accent:"navy",title:"Proponente",icon:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"}),children:[o.jsx(na,{label:"Empresa",value:c.proponente.razao_social,highlight:!0}),o.jsx(na,{label:"CNPJ",value:c.proponente.cnpj}),o.jsx(na,{label:"Atividade",value:c.proponente.setor}),o.jsx(na,{label:"Anos exportando",value:c.destinosExportacao.anos_exportando}),o.jsx(na,{label:"Contato",value:c.contato.nome?`${c.contato.nome} · ${c.contato.email}`:""}),c.coSeguradas.filter(h=>h.empresa).length>0&&o.jsx(na,{label:"Co-seguradas",value:c.coSeguradas.filter(h=>h.empresa).map(h=>h.empresa).join(" · ")})]}),o.jsxs(ms,{accent:"cobre",title:"Faturamento e Condições (US$)",icon:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}),children:[c.historicoFaturamento.map(h=>o.jsx(na,{label:h.ano,value:h.faturamento?`US$ ${h.faturamento} · Perdas: ${h.perdas||"0"}`:""},h.ano)),o.jsx(na,{label:"Fat. desejado seguro",value:c.condicoesVenda.faturamento_desejado_seguro?`US$ ${c.condicoesVenda.faturamento_desejado_seguro}`:"",highlight:!0}),o.jsx(na,{label:"Condições",value:[c.condicoesVenda.pct_vista&&`Vista ${c.condicoesVenda.pct_vista}%`,c.condicoesVenda.pct_prazo&&`Prazo ${c.condicoesVenda.pct_prazo}%`,c.condicoesVenda.prazo_medio_dias&&`Médio ${c.condicoesVenda.prazo_medio_dias}d`].filter(Boolean).join(" · ")})]}),(c.destinosExportacao.asia_pct||c.destinosExportacao.europa_pct||c.destinosExportacao.america_sul_pct||c.destinosExportacao.principais_paises)&&o.jsxs(ms,{accent:"navy",title:"Destinos de Exportação",icon:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}),children:[o.jsx(na,{label:"Regiões",value:[c.destinosExportacao.asia_pct&&`Ásia ${c.destinosExportacao.asia_pct}%`,c.destinosExportacao.europa_pct&&`Europa ${c.destinosExportacao.europa_pct}%`,c.destinosExportacao.america_sul_pct&&`Am. Sul ${c.destinosExportacao.america_sul_pct}%`,c.destinosExportacao.america_norte_pct&&`Am. Norte ${c.destinosExportacao.america_norte_pct}%`,c.destinosExportacao.africa_oceania_pct&&`África/Oceania ${c.destinosExportacao.africa_oceania_pct}%`].filter(Boolean).join(" · ")}),o.jsx(na,{label:"Principais países",value:c.destinosExportacao.principais_paises}),o.jsx(na,{label:"Nº importadores",value:c.destinosExportacao.num_importadores})]}),c.amostraCompradores.filter(h=>h.razao_social).length>0&&o.jsx(ms,{accent:"cobre",title:"Amostra de Compradores",icon:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"}),children:c.amostraCompradores.filter(h=>h.razao_social).map((h,I)=>o.jsx(na,{label:h.razao_social,value:[h.pais,h.cnpj_codigo_fiscal&&`Tax ID: ${h.cnpj_codigo_fiscal}`,h.limite_credito&&`Lim: US$ ${h.limite_credito}`].filter(Boolean).join(" · ")},I))}),o.jsx(su,{})]}):o.jsxs(o.Fragment,{children:[l===0&&o.jsxs("div",{className:"space-y-4",children:[o.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"1. Dados do Proponente"}),o.jsx(Ou,{value:c.proponente.cnpj,onChange:h=>$("proponente","cnpj",h),onResult:Be,error:f["proponente.cnpj"]}),o.jsx(pe,{label:"Razão Social",value:c.proponente.razao_social,onChange:h=>$("proponente","razao_social",h),required:!0,error:f["proponente.razao_social"]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[o.jsx(pe,{label:"Atividade da Empresa",value:c.proponente.setor,onChange:h=>$("proponente","setor",h),required:!0,error:f["proponente.setor"]}),o.jsx(pe,{label:"Faturamento Empresa (%)",value:c.proponente.faturamento_pct,onChange:h=>$("proponente","faturamento_pct",h),placeholder:"100%"})]}),o.jsx(pe,{label:"Há Quantos Anos Exporta",value:c.destinosExportacao.anos_exportando,onChange:h=>$("destinosExportacao","anos_exportando",h),placeholder:"Ex: 5"}),o.jsx("div",{className:"border-t pt-4 mt-4",children:o.jsx("h4",{className:"text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide",children:"Contato Responsável"})}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[o.jsx(pe,{label:"Nome",value:c.contato.nome,onChange:h=>$("contato","nome",h),required:!0,error:f["contato.nome"]}),o.jsx(pe,{label:"E-mail",value:c.contato.email,onChange:h=>$("contato","email",h),type:"email",required:!0,error:f["contato.email"]}),o.jsx(pe,{label:"Telefone",value:c.contato.telefone,onChange:h=>$("contato","telefone",On(h)),placeholder:"(00) 00000-0000"})]}),o.jsx("div",{className:"border-t pt-4 mt-4",children:o.jsx("h4",{className:"text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide",children:"Co-Seguradas (opcional)"})}),o.jsx(la,{columns:[{key:"cnpj",label:"CNPJ",type:"cnpj",cnpjLookupTarget:"empresa",placeholder:"00.000.000/0000-00"},{key:"empresa",label:"Empresa",placeholder:"Razão Social"},{key:"setor",label:"Setor"},{key:"faturamento_pct",label:"Fat. %",placeholder:"%"}],rows:c.coSeguradas,onChange:(h,I,w)=>Z("coSeguradas",h,I,w),onAdd:()=>J("coSeguradas",{empresa:"",cnpj:"",setor:"",faturamento_pct:""}),onRemove:h=>H("coSeguradas",h),maxRows:3})]}),l===1&&o.jsxs("div",{className:"space-y-4",children:[o.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"2. Histórico de Faturamento e Perdas"}),o.jsx("p",{className:"text-xs text-gray-400",children:"Valores em US$ (dólares americanos)."}),o.jsx(la,{columns:[{key:"ano",label:"Período",readOnly:!0},{key:"faturamento",label:"Faturamento (US$)",placeholder:"Ex: 2,000,000"},{key:"perdas",label:"Perdas (US$)",placeholder:"Ex: 50,000"}],rows:c.historicoFaturamento,onChange:(h,I,w)=>Z("historicoFaturamento",h,I,w)}),(()=>{const h=c.historicoFaturamento.filter(N=>N.ano!=="Próximos 12 meses"),I=h.reduce((N,T)=>N+(parseFloat(String(T.faturamento).replace(/[^0-9.]/g,""))||0),0),w=h.reduce((N,T)=>N+(parseFloat(String(T.perdas).replace(/[^0-9.]/g,""))||0),0),M=I>0?w/I*100:null;if(M===null)return null;const Q=M<2?"text-green-700 bg-green-50 border-green-200":M<5?"text-amber-700 bg-amber-50 border-amber-200":"text-red-700 bg-red-50 border-red-200",W=M<2?"Ótima sinistralidade":M<5?"Sinistralidade moderada":"Atenção: sinistralidade elevada";return o.jsxs("div",{className:`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-semibold ${Q}`,children:[o.jsx("svg",{className:"w-4 h-4 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),"Sinistralidade histórica: ",o.jsxs("strong",{children:[M.toFixed(2),"%"]})," — ",W]})})(),o.jsx("div",{className:"border-t pt-4 mt-4",children:o.jsx("h4",{className:"text-sm font-bold text-navy mb-3",children:"2.1 Faturamento Anual Desejado para o Seguro"})}),o.jsx(pe,{label:"Valor (US$)",value:c.condicoesVenda.faturamento_desejado_seguro,onChange:h=>$("condicoesVenda","faturamento_desejado_seguro",h),placeholder:"Ex: 5,000,000",hint:"Sobre este faturamento estimado incide o custo da apólice."}),o.jsx("div",{className:"border-t pt-4 mt-4",children:o.jsx("h4",{className:"text-sm font-bold text-navy mb-3",children:"3. Distribuição dos Prazos de Venda"})}),o.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[o.jsx(pe,{label:"À Vista (%)",value:c.condicoesVenda.pct_vista,onChange:h=>{$("condicoesVenda","pct_vista",h);const I=parseFloat(h)||0;I>0&&I<=100&&!c.condicoesVenda.pct_prazo&&$("condicoesVenda","pct_prazo",String(100-I))},placeholder:"%",hint:"Incluindo vendas com Carta de Crédito"}),o.jsx(pe,{label:"À Prazo (%)",value:c.condicoesVenda.pct_prazo,onChange:h=>$("condicoesVenda","pct_prazo",h),placeholder:"%",hint:(()=>{const h=parseFloat(c.condicoesVenda.pct_vista)||0,I=parseFloat(c.condicoesVenda.pct_prazo)||0,w=h+I;return h>0&&I>0&&Math.abs(w-100)>.1?`⚠ Vista + Prazo = ${w.toFixed(0)}% (esperado 100%)`:null})()}),o.jsx(pe,{label:"Prazo Médio Crédito (dias)",value:c.condicoesVenda.prazo_medio_dias,onChange:h=>$("condicoesVenda","prazo_medio_dias",h),placeholder:"Ex: 90"}),o.jsx(pe,{label:"Prazo Máximo Crédito (dias)",value:c.condicoesVenda.prazo_maximo_dias,onChange:h=>$("condicoesVenda","prazo_maximo_dias",h),placeholder:"Ex: 180"})]})]}),l===2&&o.jsxs("div",{className:"space-y-4",children:[o.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"4. Principais Destinos de Exportação"}),o.jsx("p",{className:"text-xs text-gray-400 mb-2",children:"Distribua o percentual de faturamento por região."}),o.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:[o.jsx(pe,{label:"Ásia (%)",value:c.destinosExportacao.asia_pct,onChange:h=>$("destinosExportacao","asia_pct",h),placeholder:"%"}),o.jsx(pe,{label:"Europa (%)",value:c.destinosExportacao.europa_pct,onChange:h=>$("destinosExportacao","europa_pct",h),placeholder:"%"}),o.jsx(pe,{label:"América do Sul (%)",value:c.destinosExportacao.america_sul_pct,onChange:h=>$("destinosExportacao","america_sul_pct",h),placeholder:"%"}),o.jsx(pe,{label:"América do Norte (%)",value:c.destinosExportacao.america_norte_pct,onChange:h=>$("destinosExportacao","america_norte_pct",h),placeholder:"%"}),o.jsx(pe,{label:"América Central (%)",value:c.destinosExportacao.america_central_pct,onChange:h=>$("destinosExportacao","america_central_pct",h),placeholder:"%"}),o.jsx(pe,{label:"África / Oceania (%)",value:c.destinosExportacao.africa_oceania_pct,onChange:h=>$("destinosExportacao","africa_oceania_pct",h),placeholder:"%"})]}),o.jsx(pe,{label:"Principais Países Importadores",value:c.destinosExportacao.principais_paises,onChange:h=>$("destinosExportacao","principais_paises",h),placeholder:"Ex: EUA, Argentina, China, Alemanha"}),o.jsx("div",{className:"border-t pt-4 mt-4",children:o.jsx("h4",{className:"text-sm font-bold text-navy mb-3",children:"4.1 Informações Adicionais"})}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[o.jsx(pe,{label:"Menor Limite de Crédito Individual (US$)",value:c.destinosExportacao.menor_limite,onChange:h=>$("destinosExportacao","menor_limite",h),placeholder:"Ex: 10,000"}),o.jsx(pe,{label:"Maior Limite de Crédito Individual (US$)",value:c.destinosExportacao.maior_limite,onChange:h=>$("destinosExportacao","maior_limite",h),placeholder:"Ex: 500,000"}),o.jsx(pe,{label:"Número Total de Importadores",value:c.destinosExportacao.num_importadores,onChange:h=>$("destinosExportacao","num_importadores",h),placeholder:"Ex: 25"})]})]}),l===3&&o.jsxs("div",{className:"space-y-4",children:[o.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"4.2 Distribuição da Carteira de Recebíveis"}),o.jsx("p",{className:"text-xs text-gray-400",children:"Excluindo vendas para coligadas, PF, empresas públicas, à vista ou antecipadas."}),o.jsx(la,{columns:[{key:"faixa",label:"Faixa de Valor (US$)",readOnly:!0},{key:"faturamento_total",label:"Fat. Total (US$)",placeholder:"Valor"},{key:"pct_faturamento",label:"% Fat.",readOnly:!0,placeholder:"Auto"},{key:"num_clientes",label:"Nº Clientes",placeholder:"Qtd"},{key:"pct_clientes",label:"% Clientes",readOnly:!0,placeholder:"Auto"}],rows:c.carteiraRecebiveis,onChange:(h,I,w)=>Z("carteiraRecebiveis",h,I,w)})]}),l===4&&o.jsxs("div",{className:"space-y-4",children:[o.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"5. Maiores Perdas"}),o.jsx("p",{className:"text-xs text-gray-400",children:"Indicar as 5 maiores nos últimos 3 anos. Motivo: Mora, Falência, ações judiciais/extrajudiciais."}),o.jsx("div",{className:"flex justify-end",children:o.jsxs("button",{type:"button",onClick:()=>p(h=>({...h,maioresPerdas:[{importador:"Sem perdas neste período",pais:"—",exercicio:"—",valor:"0",motivo:"—"}]})),className:"text-xs px-3 py-1.5 rounded-lg bg-green-50 text-green-700 border border-green-200 font-semibold hover:bg-green-100 transition-colors flex items-center gap-1.5",children:[o.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),"Sem perdas neste período"]})}),o.jsx(la,{columns:[{key:"importador",label:"Importador",placeholder:"Nome da empresa"},{key:"pais",label:"País",placeholder:"País"},{key:"exercicio",label:"Exercício",placeholder:"2024"},{key:"valor",label:"Montante (US$)",placeholder:"Valor"},{key:"motivo",label:"Motivo",placeholder:"Mora, Falência..."}],rows:c.maioresPerdas,onChange:(h,I,w)=>Z("maioresPerdas",h,I,w),onAdd:()=>J("maioresPerdas",{importador:"",pais:"",exercicio:"",valor:"",motivo:""}),onRemove:h=>H("maioresPerdas",h),maxRows:5})]}),l===5&&o.jsxs("div",{className:"space-y-4",children:[o.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"6. Dívidas Vencidas Acima de 180 Dias"}),o.jsx("p",{className:"text-xs text-gray-400",children:"Excluindo vendas para coligadas, PF, empresas públicas, à vista ou antecipadas."}),o.jsx("div",{className:"flex justify-end",children:o.jsxs("button",{type:"button",onClick:()=>p(h=>({...h,atrasos:[{faixa_dias:"Acima de 180 dias",valor_atraso:"0",qtd_clientes:"0"}]})),className:"text-xs px-3 py-1.5 rounded-lg bg-green-50 text-green-700 border border-green-200 font-semibold hover:bg-green-100 transition-colors flex items-center gap-1.5",children:[o.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),"Sem atrasos no período"]})}),o.jsx(la,{columns:[{key:"faixa_dias",label:"Período",readOnly:!0},{key:"valor_atraso",label:"Valor em Atraso (US$)",placeholder:"Valor"},{key:"qtd_clientes",label:"Qtd Clientes em Atraso",placeholder:"Qtd"}],rows:c.atrasos,onChange:(h,I,w)=>Z("atrasos",h,I,w)})]}),l===6&&o.jsxs("div",{className:"space-y-4",children:[o.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"7. Amostra de Compradores"}),o.jsx("p",{className:"text-xs text-gray-400",children:"Informar até 10 compradores — maiores, médios e menores. Valores em US$."}),o.jsx(la,{columns:[{key:"pais",label:"País",placeholder:"País"},{key:"razao_social",label:"Razão Social",placeholder:"Nome"},{key:"cnpj_codigo_fiscal",label:"Código Fiscal *",placeholder:"Tax ID",required:!0},{key:"limite_credito",label:"Limite Crédito (US$)",placeholder:"Valor"},{key:"endereco",label:"Endereço Completo",placeholder:"Rua, cidade, país"}],rows:c.amostraCompradores,onChange:(h,I,w)=>Z("amostraCompradores",h,I,w),onAdd:()=>J("amostraCompradores",{pais:"",razao_social:"",cnpj_codigo_fiscal:"",limite_credito:"",endereco:""}),onRemove:h=>H("amostraCompradores",h),maxRows:10,addLabel:"Adicionar importador",errors:f}),o.jsx(su,{})]})]}),o.jsx(Fu,{step:l,totalSteps:us.length,stepNames:us,onPrev:ge,onNext:ue,onSubmit:$e,loading:v,isReview:V})]})]})}function su(){const i=[{num:"1",label:"Análise simultânea",text:"7 seguradoras consultadas ao mesmo tempo — Coface, Atradius, AVLA, Allianz Trade, AIG, CESCE e CHUBB",icon:o.jsx(o.Fragment,{children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})},{num:"2",label:"Comparativo técnico",text:"Nossa equipe negocia as melhores condições de cobertura, prêmio e serviço para o seu perfil de exportação",icon:o.jsx(o.Fragment,{children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})})},{num:"3",label:"Decisão estratégica",text:"Você recebe um comparativo exclusivo com recomendação técnica da Fairfield para a melhor escolha",icon:o.jsx(o.Fragment,{children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})})}];return o.jsxs("div",{className:"mt-2 rounded-2xl overflow-hidden border border-cobre/20 shadow-sm",children:[o.jsxs("div",{className:"bg-gradient-to-r from-navy to-[#0d1f3c] px-5 py-4 flex items-center gap-4",children:[o.jsx("div",{className:"w-14 h-14 bg-cobre/20 rounded-xl flex items-center justify-center flex-shrink-0",children:o.jsx("svg",{className:"w-8 h-8 text-cobre",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),o.jsxs("div",{children:[o.jsx("p",{className:"text-[10px] font-bold text-cobre uppercase tracking-widest mb-0.5",children:"O que acontece depois?"}),o.jsx("h4",{className:"text-base sm:text-lg font-bold text-white leading-tight",children:"O SENTINEL destrava oportunidades para você exportar mais com segurança"})]})]}),o.jsx("div",{className:"bg-white px-5 py-4 grid grid-cols-1 sm:grid-cols-3 gap-3",children:i.map(d=>o.jsxs("div",{className:"flex flex-col gap-2 bg-gray-50 rounded-xl p-3 border border-gray-100",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("svg",{className:"w-5 h-5 text-cobre flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.icon}),o.jsx("span",{className:"text-xs font-bold text-navy",children:d.label})]}),o.jsx("p",{className:"text-xs text-gray-600 leading-relaxed",children:d.text})]},d.num))}),o.jsxs("div",{className:"bg-green-50 border-t border-green-200 px-5 py-3 flex items-start gap-2",children:[o.jsx("svg",{className:"w-4 h-4 text-green-600 flex-shrink-0 mt-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),o.jsxs("p",{className:"text-sm text-green-700",children:[o.jsx("strong",{children:"Estudo totalmente gratuito."})," O SENTINEL atua como suporte adicional à sua área de análise de crédito — mitigando riscos e destravando oportunidades para você vender mais com segurança."]})]})]})}function ms({icon:i,title:d,accent:l,children:m}){const c=l==="cobre"?"text-cobre bg-cobre/8":"text-navy bg-navy/5",p=l==="cobre"?"text-cobre":"text-navy";return o.jsxs("div",{className:"rounded-xl border border-gray-100 overflow-hidden shadow-sm",children:[o.jsxs("div",{className:`px-4 py-2.5 flex items-center gap-2 ${c}`,children:[o.jsx("svg",{className:"w-4 h-4 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i}),o.jsx("h4",{className:`text-xs font-bold uppercase tracking-wide ${p}`,children:d})]}),o.jsx("div",{className:"bg-white divide-y divide-gray-50 px-4",children:m})]})}function na({label:i,value:d,highlight:l}){return!d||d.toString().trim()===""?null:o.jsxs("div",{className:"py-2 flex flex-wrap items-baseline gap-x-3 gap-y-0.5 min-h-[2rem]",children:[o.jsx("span",{className:"text-xs text-gray-400 font-medium w-28 flex-shrink-0",children:i}),o.jsx("span",{className:`text-sm flex-1 ${l?"font-bold text-navy":"text-gray-700"}`,children:d})]})}const jg="/sentinel-fairfield/",wg={cadastro:"bg-gray-100 text-gray-700",verificado:"bg-blue-100 text-blue-700",nda_aceito:"bg-purple-100 text-purple-700",preenchendo_interno:"bg-amber-100 text-amber-700",preenchendo_externo:"bg-amber-100 text-amber-700",enviado_interno:"bg-green-100 text-green-700",enviado_externo:"bg-green-100 text-green-700"},iu={cadastro:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",verificado:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",nda_aceito:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",preenchendo_interno:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",preenchendo_externo:"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",enviado_interno:"M5 13l4 4L19 7",enviado_externo:"M5 13l4 4L19 7"};function Ng(){const{getProspects:i,getAllUsers:d}=Lo(),[l,m]=S.useState([]),[c,p]=S.useState("todos"),[f,g]=S.useState(""),[v,y]=S.useState("pipeline"),[k,C]=S.useState("prospects"),[P,F]=S.useState([]),[_,z]=S.useState({nome:"",email:""}),[A,O]=S.useState(!1);S.useEffect(()=>{const w=i();m(w.sort((M,Q)=>new Date(Q.updatedAt)-new Date(M.updatedAt))),V()},[]);async function V(){try{const M=await(await fetch("/api/admin/comerciais")).json();M.sucesso&&F(M.data)}catch{}}async function D(w){if(w.preventDefault(),!(!_.nome||!_.email)){O(!0);try{const Q=await(await fetch("/api/admin/comerciais",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)})).json();Q.sucesso?(ke.success("Comercial adicionado!"),z({nome:"",email:""}),V()):ke.error(Q.mensagem||"Erro ao adicionar")}catch{ke.error("Erro de conexão")}finally{O(!1)}}}async function $(w){try{await fetch(`/api/admin/comerciais/${w}`,{method:"PUT"}),V()}catch{ke.error("Erro ao atualizar")}}async function Z(w){try{await fetch(`/api/admin/comerciais/${w}`,{method:"DELETE"}),ke.success("Removido"),V()}catch{ke.error("Erro ao remover")}}const J=l.length,H=l.filter(w=>w.fase!=="cadastro").length,ne=l.filter(w=>!["cadastro","verificado"].includes(w.fase)).length,ue=l.filter(w=>w.fase.startsWith("preenchendo")).length,ge=l.filter(w=>w.fase.startsWith("enviado")).length,$e=J>0?(ge/J*100).toFixed(1):"0",Fe=[{value:"todos",label:"Todos"},{value:"cadastro",label:"Cadastro"},{value:"verificado",label:"Verificado"},{value:"nda_aceito",label:"NDA Aceito"},{value:"preenchendo",label:"Preenchendo"},{value:"enviado",label:"Enviado"}],Pe=l.filter(w=>{var M,Q,W;if(c!=="todos"&&(c==="preenchendo"&&!w.fase.startsWith("preenchendo")||c==="enviado"&&!w.fase.startsWith("enviado")||!["preenchendo","enviado","todos"].includes(c)&&w.fase!==c))return!1;if(f){const N=f.toLowerCase();return((M=w.nome)==null?void 0:M.toLowerCase().includes(N))||((Q=w.empresa)==null?void 0:Q.toLowerCase().includes(N))||((W=w.email)==null?void 0:W.toLowerCase().includes(N))}return!0}),Be=[{key:"cadastro",title:"Cadastro",color:"border-gray-300",items:l.filter(w=>w.fase==="cadastro")},{key:"verificado",title:"Verificado",color:"border-blue-400",items:l.filter(w=>w.fase==="verificado")},{key:"nda_aceito",title:"NDA Aceito",color:"border-purple-400",items:l.filter(w=>w.fase==="nda_aceito")},{key:"preenchendo",title:"Preenchendo",color:"border-amber-400",items:l.filter(w=>w.fase.startsWith("preenchendo"))},{key:"enviado",title:"Enviado",color:"border-green-400",items:l.filter(w=>w.fase.startsWith("enviado"))}];function h(w){return w?new Date(w).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"—"}function I(w){return w?Math.floor((Date.now()-new Date(w).getTime())/(1e3*60*60*24)):0}return o.jsxs("div",{className:"max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8 space-y-6",children:[o.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-3",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("img",{src:`${jg}logos/sentinel.png`,alt:"",className:"h-10 w-10 object-contain"}),o.jsxs("div",{children:[o.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-navy",children:"Dashboard Admin"}),o.jsx("p",{className:"text-xs text-gray-400",children:"Painel de acompanhamento de prospects"})]})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("button",{onClick:()=>C("prospects"),className:`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${k==="prospects"?"bg-navy text-white border-navy":"border-gray-300 text-gray-600 hover:border-navy"}`,children:"Prospects"}),o.jsxs("button",{onClick:()=>C("comerciais"),className:`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${k==="comerciais"?"bg-cobre text-white border-cobre":"border-gray-300 text-gray-600 hover:border-cobre"}`,children:["Comerciais ",P.length>0&&o.jsx("span",{className:"ml-1 bg-white/30 rounded-full px-1",children:P.length})]}),k==="prospects"&&o.jsxs(o.Fragment,{children:[o.jsx("button",{onClick:()=>y("pipeline"),className:`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${v==="pipeline"?"bg-navy text-white border-navy":"border-gray-300 text-gray-600 hover:border-navy"}`,children:"Pipeline"}),o.jsx("button",{onClick:()=>y("kanban"),className:`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${v==="kanban"?"bg-navy text-white border-navy":"border-gray-300 text-gray-600 hover:border-navy"}`,children:"Kanban"}),o.jsx("button",{onClick:()=>m(i().sort((w,M)=>new Date(M.updatedAt)-new Date(w.updatedAt))),className:"px-3 py-1.5 rounded-lg text-xs font-semibold border border-gray-300 text-gray-600 hover:border-navy transition-all",children:"Atualizar"})]})]})]}),k==="comerciais"&&o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"card p-5",children:[o.jsx("h3",{className:"text-sm font-bold text-navy mb-1",children:"Comerciais Responsáveis"}),o.jsx("p",{className:"text-xs text-gray-400 mb-4",children:"Estes contatos recebem cópia (CC) de cada nova cotação submetida no SENTINEL."}),o.jsxs("form",{onSubmit:D,className:"flex gap-2 mb-4 flex-wrap",children:[o.jsx("input",{className:"input-field flex-1 min-w-[160px]",placeholder:"Nome",value:_.nome,onChange:w=>z(M=>({...M,nome:w.target.value}))}),o.jsx("input",{className:"input-field flex-1 min-w-[200px]",placeholder:"E-mail",type:"email",value:_.email,onChange:w=>z(M=>({...M,email:w.target.value}))}),o.jsx("button",{type:"submit",disabled:A,className:"btn-primary px-4 py-2 text-sm whitespace-nowrap",children:A?"...":"+ Adicionar"})]}),P.length===0?o.jsx("p",{className:"text-xs text-gray-400 text-center py-6",children:"Nenhum comercial cadastrado. Adicione acima."}):o.jsxs("table",{className:"w-full text-sm",children:[o.jsx("thead",{children:o.jsxs("tr",{className:"bg-navy text-white text-xs",children:[o.jsx("th",{className:"px-3 py-2 text-left rounded-tl-lg",children:"Nome"}),o.jsx("th",{className:"px-3 py-2 text-left",children:"E-mail"}),o.jsx("th",{className:"px-3 py-2 text-center",children:"Status"}),o.jsx("th",{className:"px-3 py-2 rounded-tr-lg"})]})}),o.jsx("tbody",{children:P.map(w=>o.jsxs("tr",{className:"border-t border-gray-100 hover:bg-gray-50",children:[o.jsx("td",{className:"px-3 py-2.5 font-medium text-navy",children:w.nome}),o.jsx("td",{className:"px-3 py-2.5 text-gray-600",children:w.email}),o.jsx("td",{className:"px-3 py-2.5 text-center",children:o.jsx("button",{onClick:()=>$(w.id),className:`text-xs px-2 py-0.5 rounded-full font-semibold ${w.ativo?"bg-green-100 text-green-700":"bg-gray-100 text-gray-500"}`,children:w.ativo?"Ativo":"Inativo"})}),o.jsx("td",{className:"px-3 py-2.5 text-right",children:o.jsx("button",{onClick:()=>Z(w.id),className:"text-red-400 hover:text-red-600 text-xs",children:"Remover"})})]},w.id))})]})]}),o.jsx("div",{className:"card p-4 border border-cobre/20 bg-cobre/5",children:o.jsxs("p",{className:"text-xs text-gray-600",children:[o.jsx("strong",{className:"text-cobre",children:"Como funciona:"})," A cada nova cotação enviada pelo SENTINEL, o email principal (broering.gomes@gmail.com) recebe o relatório completo em PDF + planilhas Excel. Os comerciais cadastrados aqui recebem cópia automática (CC)."]})})]}),k==="prospects"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3",children:[o.jsx(or,{label:"Total Prospects",value:J,icon:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",color:"text-navy",bg:"bg-navy/5"}),o.jsx(or,{label:"Verificados",value:H,icon:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",color:"text-blue-600",bg:"bg-blue-50"}),o.jsx(or,{label:"NDA Aceito",value:ne,icon:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",color:"text-purple-600",bg:"bg-purple-50"}),o.jsx(or,{label:"Preenchendo",value:ue,icon:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",color:"text-amber-600",bg:"bg-amber-50"}),o.jsx(or,{label:"Enviados",value:ge,icon:"M5 13l4 4L19 7",color:"text-green-600",bg:"bg-green-50"}),o.jsx(or,{label:"Conversao",value:`${$e}%`,icon:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",color:"text-cobre",bg:"bg-cobre/5"})]}),o.jsxs("div",{className:"card",children:[o.jsx("h3",{className:"text-sm font-bold text-navy mb-4",children:"Funil de Conversao"}),o.jsx("div",{className:"space-y-2",children:[{label:"Cadastro",count:J,color:"bg-gray-400"},{label:"Verificado",count:H,color:"bg-blue-500"},{label:"NDA Aceito",count:ne,color:"bg-purple-500"},{label:"Preenchendo",count:ue,color:"bg-amber-500"},{label:"Enviado",count:ge,color:"bg-green-500"}].map(w=>o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"text-xs text-gray-500 w-24 text-right",children:w.label}),o.jsx("div",{className:"flex-1 h-7 bg-gray-100 rounded-full overflow-hidden",children:o.jsx("div",{className:`h-full ${w.color} rounded-full transition-all duration-700 flex items-center justify-end pr-2`,style:{width:`${J>0?Math.max(3,w.count/J*100):0}%`},children:w.count>0&&o.jsx("span",{className:"text-white text-[10px] font-bold",children:w.count})})}),o.jsxs("span",{className:"text-xs font-bold text-navy w-12 text-right",children:[J>0?(w.count/J*100).toFixed(0):0,"%"]})]},w.label))})]}),o.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[o.jsxs("div",{className:"relative flex-1 max-w-xs",children:[o.jsx("svg",{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),o.jsx("input",{className:"input-field pl-9 py-2 text-sm",placeholder:"Buscar por nome, empresa ou e-mail...",value:f,onChange:w=>g(w.target.value)})]}),o.jsx("div",{className:"flex gap-1.5 flex-wrap",children:Fe.map(w=>o.jsx("button",{onClick:()=>p(w.value),className:`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${c===w.value?"bg-navy text-white border-navy":"border-gray-200 text-gray-500 hover:border-navy"}`,children:w.label},w.value))})]}),v==="kanban"?o.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-5 gap-3",children:Be.map(w=>o.jsxs("div",{className:`bg-gray-50 rounded-xl p-3 border-t-4 ${w.color}`,children:[o.jsxs("div",{className:"flex items-center justify-between mb-3",children:[o.jsx("h4",{className:"text-xs font-bold text-navy",children:w.title}),o.jsx("span",{className:"text-xs font-bold bg-white rounded-full w-6 h-6 flex items-center justify-center text-navy shadow-sm",children:w.items.length})]}),o.jsxs("div",{className:"space-y-2 max-h-96 overflow-y-auto",children:[w.items.map(M=>o.jsxs("div",{className:"bg-white rounded-lg p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow",children:[o.jsx("p",{className:"text-xs font-bold text-navy truncate",children:M.empresa}),o.jsx("p",{className:"text-[10px] text-gray-500 truncate",children:M.nome}),o.jsx("p",{className:"text-[10px] text-gray-400 mt-1",children:h(M.updatedAt)})]},M.id)),w.items.length===0&&o.jsx("p",{className:"text-[10px] text-gray-400 text-center py-4",children:"Nenhum prospect"})]})]},w.key))}):o.jsx("div",{className:"overflow-x-auto",children:Pe.length===0?o.jsxs("div",{className:"card text-center py-12",children:[o.jsx("svg",{className:"w-12 h-12 text-gray-300 mx-auto mb-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"})}),o.jsx("p",{className:"text-gray-400 text-sm",children:"Nenhum prospect encontrado"}),o.jsx("p",{className:"text-gray-300 text-xs mt-1",children:"Os prospects aparecerão aqui conforme acessarem o sistema"})]}):o.jsxs("table",{className:"w-full bg-white rounded-xl shadow-sm border border-gray-100",children:[o.jsx("thead",{children:o.jsxs("tr",{className:"bg-navy text-white text-left text-xs",children:[o.jsx("th",{className:"px-4 py-3 rounded-tl-xl",children:"Empresa"}),o.jsx("th",{className:"px-4 py-3",children:"Contato"}),o.jsx("th",{className:"px-4 py-3",children:"E-mail"}),o.jsx("th",{className:"px-4 py-3",children:"Telefone"}),o.jsx("th",{className:"px-4 py-3",children:"Fase"}),o.jsx("th",{className:"px-4 py-3",children:"Cadastro"}),o.jsx("th",{className:"px-4 py-3",children:"Atualizado"}),o.jsx("th",{className:"px-4 py-3 rounded-tr-xl",children:"Dias"})]})}),o.jsx("tbody",{children:Pe.map(w=>o.jsxs("tr",{className:"border-t border-gray-50 hover:bg-gray-50 transition-colors",children:[o.jsx("td",{className:"px-4 py-3",children:o.jsx("span",{className:"font-semibold text-navy text-sm",children:w.empresa||"—"})}),o.jsx("td",{className:"px-4 py-3 text-sm",children:w.nome}),o.jsx("td",{className:"px-4 py-3 text-xs text-gray-500",children:w.email}),o.jsx("td",{className:"px-4 py-3 text-xs text-gray-500",children:w.telefone}),o.jsx("td",{className:"px-4 py-3",children:o.jsxs("span",{className:`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${wg[w.fase]||"bg-gray-100 text-gray-700"}`,children:[o.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:iu[w.fase]||iu.cadastro})}),w.faseLabel||w.fase]})}),o.jsx("td",{className:"px-4 py-3 text-xs text-gray-500",children:h(w.createdAt)}),o.jsx("td",{className:"px-4 py-3 text-xs text-gray-500",children:h(w.updatedAt)}),o.jsx("td",{className:"px-4 py-3",children:o.jsxs("span",{className:`text-xs font-bold ${I(w.createdAt)>7?"text-red-600":I(w.createdAt)>3?"text-amber-600":"text-green-600"}`,children:[I(w.createdAt),"d"]})})]},w.id))})]})})]})]})}function or({label:i,value:d,icon:l,color:m,bg:c}){return o.jsxs("div",{className:"card text-center p-3 sm:p-4",children:[o.jsx("div",{className:`w-10 h-10 ${c} rounded-full flex items-center justify-center mx-auto mb-2`,children:o.jsx("svg",{className:`w-5 h-5 ${m}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:l})})}),o.jsx("p",{className:`text-2xl sm:text-3xl font-bold ${m}`,children:d}),o.jsx("p",{className:"text-[10px] sm:text-xs text-gray-500 mt-1",children:i})]})}const kg="/sentinel-fairfield/",Pg=["AIG","Atradius","Coface","Allianz Trade","AVLA","CESCE"];function Eg(){const{getProspects:i}=Lo(),[d,l]=S.useState([]),[m,c]=S.useState("30");S.useEffect(()=>{l(i())},[]);const p=Date.now(),f=p-parseInt(m)*24*60*60*1e3,g=d.filter(D=>new Date(D.createdAt).getTime()>=f),v=g.length,y=g.filter(D=>D.fase.startsWith("enviado")).length,k=g.filter(D=>(p-new Date(D.updatedAt).getTime())/864e5>7&&!D.fase.startsWith("enviado")).length,C=v-y-k,P=y>0?"2.3":"—",F=v>0?(y/v*100).toFixed(1):"0",_=v>0?(k/v*100).toFixed(1):"0",z=[{phase:"Cadastro > Verificacao",target:"5 min",actual:"3 min",status:"ok"},{phase:"Verificacao > NDA",target:"10 min",actual:"6 min",status:"ok"},{phase:"NDA > Inicio Preenchimento",target:"1 dia",actual:"0.5 dia",status:"ok"},{phase:"Preenchimento Completo",target:"3 dias",actual:"2.3 dias",status:"ok"},{phase:"Envio > Resposta Seguradora",target:"10 dias",actual:"7 dias",status:"warning"}],A=Pg.map(D=>({name:D,sent:Math.floor(Math.random()*10)+y,pending:Math.floor(Math.random()*5),avgDays:(Math.random()*8+3).toFixed(1),maxDays:Math.floor(Math.random()*12)+3,responseRate:(70+Math.random()*30).toFixed(0)})),O=Array.from({length:7},(D,$)=>{const Z=new Date(p-(6-$)*24*60*60*1e3);return{day:Z.toLocaleDateString("pt-BR",{weekday:"short",day:"2-digit"}),cadastros:g.filter(J=>new Date(J.createdAt).toDateString()===Z.toDateString()).length}}),V=Math.max(...O.map(D=>D.cadastros),1);return o.jsxs("div",{className:"max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8 space-y-6",children:[o.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-3",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("img",{src:`${kg}logos/sentinel.png`,alt:"",className:"h-10 w-10 object-contain"}),o.jsxs("div",{children:[o.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-navy",children:"Painel de SLA"}),o.jsx("p",{className:"text-xs text-gray-400",children:"Metricas de desempenho e acompanhamento"})]})]}),o.jsx("div",{className:"flex gap-2",children:[{v:"7",l:"7 dias"},{v:"30",l:"30 dias"},{v:"90",l:"90 dias"}].map(D=>o.jsx("button",{onClick:()=>c(D.v),className:`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${m===D.v?"bg-navy text-white border-navy":"border-gray-300 text-gray-600 hover:border-navy"}`,children:D.l},D.v))})]}),o.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3",children:[o.jsx(rr,{label:"Total Prospects",value:v,color:"text-navy",bg:"bg-navy/5",trend:"+12%"}),o.jsx(rr,{label:"Concluidos",value:y,color:"text-green-600",bg:"bg-green-50",trend:`${F}%`}),o.jsx(rr,{label:"Em Andamento",value:C,color:"text-blue-600",bg:"bg-blue-50"}),o.jsx(rr,{label:"Abandonados",value:k,color:"text-red-600",bg:"bg-red-50",trend:`${_}%`}),o.jsx(rr,{label:"Tempo Medio",value:P,suffix:"dias",color:"text-purple-600",bg:"bg-purple-50"}),o.jsx(rr,{label:"Taxa Conversao",value:`${F}%`,color:"text-cobre",bg:"bg-cobre/5"})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[o.jsxs("div",{className:"card",children:[o.jsxs("h3",{className:"text-sm font-bold text-navy mb-4 flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4 text-cobre",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),"SLA por Fase"]}),o.jsx("div",{className:"space-y-3",children:z.map(D=>o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsxs("div",{className:"flex-1",children:[o.jsx("p",{className:"text-xs font-medium text-navy",children:D.phase}),o.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[o.jsxs("span",{className:"text-[10px] text-gray-400",children:["Meta: ",D.target]}),o.jsx("span",{className:"text-[10px] text-gray-300",children:"|"}),o.jsxs("span",{className:`text-[10px] font-semibold ${D.status==="ok"?"text-green-600":"text-amber-600"}`,children:["Atual: ",D.actual]})]})]}),o.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center ${D.status==="ok"?"bg-green-100":"bg-amber-100"}`,children:D.status==="ok"?o.jsx("svg",{className:"w-4 h-4 text-green-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}):o.jsx("svg",{className:"w-4 h-4 text-amber-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"})})})]},D.phase))})]}),o.jsxs("div",{className:"card",children:[o.jsxs("h3",{className:"text-sm font-bold text-navy mb-4 flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4 text-cobre",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),"Atividade Diaria (Ultimos 7 dias)"]}),o.jsx("div",{className:"flex items-end justify-between gap-2 h-40 px-2",children:O.map(D=>o.jsxs("div",{className:"flex flex-col items-center gap-1 flex-1",children:[o.jsx("span",{className:"text-[10px] font-bold text-navy",children:D.cadastros}),o.jsx("div",{className:"w-full rounded-t-lg bg-gradient-to-t from-cobre to-[#D4944A] transition-all duration-500",style:{height:`${Math.max(8,D.cadastros/V*100)}%`}}),o.jsx("span",{className:"text-[9px] text-gray-400",children:D.day})]},D.day))})]})]}),o.jsxs("div",{children:[o.jsxs("h3",{className:"text-sm font-bold text-navy mb-4 flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4 text-cobre",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"})}),"SLA por Seguradora"]}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:A.map(D=>o.jsxs("div",{className:"card hover:shadow-md transition-shadow",children:[o.jsxs("div",{className:"flex items-center justify-between mb-3",children:[o.jsx("h4",{className:"font-bold text-navy text-sm",children:D.name}),o.jsx(Ag,{dias:D.maxDays})]}),o.jsxs("div",{className:"space-y-2 text-sm",children:[o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{className:"text-gray-500 text-xs",children:"Enviadas"}),o.jsx("span",{className:"font-semibold text-xs",children:D.sent})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{className:"text-gray-500 text-xs",children:"Pendentes"}),o.jsx("span",{className:"font-semibold text-xs text-amber-600",children:D.pending})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{className:"text-gray-500 text-xs",children:"Prazo Medio"}),o.jsxs("span",{className:"font-semibold text-xs",children:[D.avgDays,"d"]})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{className:"text-gray-500 text-xs",children:"Max. Aberto"}),o.jsxs("span",{className:`font-bold text-xs ${D.maxDays>10?"text-red-600":D.maxDays>5?"text-amber-600":"text-green-600"}`,children:[D.maxDays,"d"]})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{className:"text-gray-500 text-xs",children:"Taxa Resposta"}),o.jsxs("span",{className:"font-semibold text-xs text-green-600",children:[D.responseRate,"%"]})]})]}),D.sent>0&&o.jsx("div",{className:"mt-3 h-2 bg-gray-100 rounded-full overflow-hidden",children:o.jsx("div",{className:`h-full rounded-full transition-all duration-500 ${D.maxDays>10?"bg-red-500":D.maxDays>5?"bg-amber-500":"bg-green-500"}`,style:{width:`${Math.min(100,D.pending/Math.max(D.sent,1)*100)}%`}})})]},D.name))})]})]})}function rr({label:i,value:d,color:l,bg:m,trend:c,suffix:p}){return o.jsxs("div",{className:"card text-center p-3 sm:p-4",children:[o.jsxs("p",{className:`text-2xl sm:text-3xl font-bold ${l}`,children:[d,p&&o.jsx("span",{className:"text-sm font-normal ml-1",children:p})]}),o.jsx("p",{className:"text-[10px] sm:text-xs text-gray-500 mt-1",children:i}),c&&o.jsx("p",{className:`text-[10px] font-semibold mt-1 ${l}`,children:c})]})}function Ag({dias:i}){return i<=0?o.jsx("span",{className:"inline-block w-3 h-3 rounded-full bg-gray-300"}):i<5?o.jsx("span",{className:"inline-block w-3 h-3 rounded-full bg-green-500"}):i<=10?o.jsx("span",{className:"inline-block w-3 h-3 rounded-full bg-amber-500 animate-pulse"}):o.jsx("span",{className:"inline-block w-3 h-3 rounded-full bg-red-500 animate-pulse"})}const Lg=`
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
`;function Rg(){return o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M19 12H5"}),o.jsx("path",{d:"M12 19l-7-7 7-7"})]})}function nu(){return o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M22 2L11 13"}),o.jsx("path",{d:"M22 2l-7 20-4-9-9-4 20-7z"})]})}function lu({size:i=20}){return o.jsxs("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M3 18v-6a9 9 0 0 1 18 0v6"}),o.jsx("path",{d:"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"})]})}function zg(){return o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M18 6L6 18"}),o.jsx("path",{d:"M6 6l12 12"})]})}function Mg(){return o.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 40 40",fill:"none",children:[o.jsx("circle",{cx:"20",cy:"12",r:"6",fill:"#7DD3FC",opacity:"0.9"}),o.jsx("path",{d:"M8 36 C8 26 14 22 20 22 C26 22 32 26 32 36",fill:"#7DD3FC",opacity:"0.7"}),o.jsx("path",{d:"M20 22 L18 28 L20 32 L22 28 Z",fill:"#0a0f1e",opacity:"0.8"}),o.jsx("path",{d:"M15 22 L20 25 L25 22",stroke:"#0a0f1e",strokeWidth:"1",fill:"none",opacity:"0.6"})]})}function du(){return o.jsx("div",{className:"w-8 h-8 rounded-full bg-sentinel/20 border border-sentinel/30 flex items-center justify-center flex-shrink-0",children:o.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 40 40",fill:"none",children:[o.jsx("circle",{cx:"20",cy:"11",r:"5",fill:"#7DD3FC",opacity:"0.8"}),o.jsx("path",{d:"M10 34 C10 26 14 22 20 22 C26 22 30 26 30 34",fill:"#7DD3FC",opacity:"0.6"}),o.jsx("path",{d:"M20 22 L18.5 27 L20 30 L21.5 27 Z",fill:"#0a0f1e",opacity:"0.7"})]})})}const Dg=[{keywords:["oi","ola","hey","eai","e ai","fala"],category:"saudacao",answer:`Olá! 👋 Sou o **iCover**, especialista em **Seguro de Crédito**.

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

O **SENTINEL** está na vanguarda dessas tendências, integrando IA e automação para o mercado brasileiro.`},{keywords:["fidc","fundo investimento direitos creditorios","fundo de recebíveis","securitizacao fidc"],category:"fidc",answer:`**FIDC e Seguro de Crédito — O Que É e Como Funciona**

**FIDC (Fundo de Investimento em Direitos Creditórios)** é um veículo de securitização regulado pela CVM que transforma recebíveis comerciais em cotas negociáveis.

**Estrutura de cotas:**
• **Cota Sênior** — prioridade no recebimento, menor risco, menor retorno
• **Cota Mezanino** — posição intermediária (nem sempre presente)
• **Cota Subordinada** — absorve perdas primeiro (skin in the game do cedente)

**Papel do Seguro de Crédito no FIDC:**
• Protege a cota sênior contra inadimplência dos sacados
• Substitui parcialmente a subordinação mínima exigida
• Melhora o rating do fundo (AA → AAA)
• Reduz o custo de captação para o cedente

**Fluxo operacional:**
1. Cedente vende recebíveis ao FIDC
2. FIDC emite cotas sênior para investidores
3. Seguradora garante os sacados aprovados
4. Em caso de inadimplência, seguradora indeniza o FIDC

**A Fairfield estrutura coberturas específicas para FIDCs** — consulte nossos especialistas.`},{keywords:["fidc multicedente multisacado","fidc exclusivo","cedente unico","pool cedentes"],category:"fidc",answer:`**FIDC Multicedente/Multisacado vs FIDC Exclusivo**

**FIDC Exclusivo (Mono-cedente):**
• Um único cedente transfere seus recebíveis
• Risco concentrado em um portfólio
• Seguro de crédito customizado para os sacados do cedente
• Usado por grandes empresas (varejo, indústria)
• Exemplo: FIDC de uma rede varejista para financiar sua cadeia de fornecedores

**FIDC Multicedente/Multisacado:**
• Múltiplos cedentes (factorings, fintechs, PMEs)
• Carteira diversificada de sacados
• Seguro de crédito mais complexo (cobertura de pool)
• Gestora especializada como fiduciária
• Menor ticket mínimo por cedente

**Implicações para o seguro de crédito:**

| Aspecto | Exclusivo | Multi-cedente |
|---|---|---|
| Apólice | Única, personalizada | Pool/blanket |
| Limites | Por sacado | Agregado por fundo |
| Prêmio | Negociado (volume) | Por classe de risco |
| Gestão | Centralizada | Descentralizada |

**Regulamentação:** Resolução CVM 175/2022 (FIDC) e Instrução CVM 356 (histórica).`},{keywords:["resolucao cvm 175","cvm 356","regulacao fidc","instrucao cvm fidc"],category:"fidc",answer:`**Regulamentação CVM para FIDCs — Resolução CVM 175/2022**

**Resolução CVM 175/2022** (vigente desde outubro/2023) substituiu a Instrução CVM 356/2001 e modernizou as regras dos FIDCs.

**Principais mudanças relevantes para seguro de crédito:**

**1. Subordinação mínima flexível:**
• Antes: 20% obrigatório em cotas subordinadas
• Agora: Pode ser reduzido com **credit enhancement** (seguro de crédito)
• Seguradora precisa ser aprovada como mitigante de risco

**2. Novos tipos de cotas:**
• Cotas de classes múltiplas permitidas
• Mezanino com características híbridas
• Seguro pode cobrir classes específicas

**3. Gestão de risco aprimorada:**
• Stress testing obrigatório
• Relatórios de performance com seguro como variável
• Disclosure de cobertura de seguro nos documentos do fundo

**4. FIDCs Abertos:**
• Agora permitidos (antes só fechados)
• Seguro de crédito com renovação automática necessário

**Atenção:** A SUSEP e CVM trabalham em conjunto para regulamentar o uso de seguro de crédito como **credit enhancement** em FIDCs.`},{keywords:["credit enhancement fidc","melhoria rating fidc","rating cota senior","upgrade rating"],category:"fidc",answer:`**Credit Enhancement — Como o Seguro de Crédito Melhora o Rating de FIDCs**

**O que é credit enhancement?**
Mecanismo que reduz o risco das cotas sênior, melhorando seu rating e reduzindo o custo de captação.

**Tipos de credit enhancement:**

1. **Subordinação** — cotas subordinadas absorvem perdas (tradicional)
2. **Reserva de liquidez** — caixa reservado para cobrir inadimplência
3. **Seguro de Crédito** — seguradora garante os sacados
4. **Garantia bancária** — banco fiador (caro)
5. **Excesso de spread** — rendimento extra do portfólio

**Impacto do seguro de crédito no rating:**

| Sem seguro | Com seguro de crédito |
|---|---|
| Rating A ou AA | Rating AA+ ou AAA |
| Subordinação: 20-25% | Subordinação: 8-12% |
| Custo de captação maior | Custo de captação menor |
| Menos investidores elegíveis | Acesso a fundos conservadores |

**Como as agências avaliam:**
• Moody's, Fitch, S&P e Austin Rating avaliam a solidez da seguradora
• Financial Strength Rating da seguradora é incorporado
• Coberturas com seguradora AA+ permitem AAA na cota sênior

**Resultado prático:** Redução de 40-80bps no custo de captação, que supera o custo do prêmio do seguro.`},{keywords:["fidc consignado","fidc cartao credito","fidc automovel","fidc financiamento","fidc consumo"],category:"fidc",answer:`**FIDCs por Segmento — Crédito Consignado, Cartão e Automotivo**

**FIDC Consignado:**
• Recebíveis de crédito consignado (desconto em folha)
• Risco de crédito muito baixo (pagamento garantido em folha)
• Seguro de crédito usado principalmente para risco sistêmico
• Risco do convênio (INSS, servidores) coberto por seguro
• Cotas sênior com rating AAA usual

**FIDC de Cartão de Crédito:**
• Recebíveis de carteiras de cartão
• Seguro cobre inadimplência acima da perda esperada (XL)
• Granularidade alta (milhões de devedores) — risco estatístico
• Seguro paramétrico possível (índice de inadimplência do setor)

**FIDC Automotivo:**
• Financiamentos de veículos securitizados
• Garantia real (veículo) reduz necessidade de seguro
• Seguro complementa para risco de insolvência da financeira
• Cobertura de GAP (diferença entre dívida e valor do veículo)

**FIDC Agro (crescimento acelerado):**
• CRA e CPR dentro de FIDCs
• Seguro de crédito para produtores rurais
• Complementa seguro rural (produção + crédito)
• Alta demanda por estruturadores em 2024-2026

**A Fairfield tem expertise em todas essas estruturas.**`},{keywords:["gestora custodiante administradora fidc","partes fidc","agentes fidc","estrutura partes"],category:"fidc",answer:`**Partes Envolvidas em um FIDC com Seguro de Crédito**

**Estrutura completa de partes:**

**1. Cedente**
• Empresa que origina e vende os recebíveis
• Pode ser o próprio cotista subordinado
• Responsável pela qualidade dos créditos cedidos

**2. Sacado**
• Devedor dos recebíveis (quem deve pagar)
• É quem a seguradora analisa e aprova o limite

**3. Administradora**
• Responsável legal pelo fundo (CVM 175)
• Assina contratos em nome do fundo
• Exemplos: Oliveira Trust, Vórtx, BRL Trust

**4. Gestora**
• Define política de crédito e compra de recebíveis
• Gerencia o relacionamento com a seguradora
• Monitora a performance do portfólio

**5. Custodiante**
• Verifica e guarda os documentos dos recebíveis
• Confirma a existência e validade dos créditos
• Banco ou instituição autorizada pela CVM

**6. Seguradora**
• Emite a apólice de seguro de crédito em favor do FIDC
• Analisa e aprova limites de crédito dos sacados
• Paga indenização diretamente ao fundo

**7. Agência de Rating**
• Avalia a estrutura com e sem seguro
• Determina o rating das cotas sênior

**A Fairfield atua como estruturadora e corretora** nessas operações.`},{keywords:["casos praticos fidc seguro","exemplos fidc brasil","fidc que usam seguro","referencias fidc"],category:"fidc",answer:`**Casos Práticos — FIDCs com Seguro de Crédito no Brasil**

**Contexto do mercado:**
O mercado brasileiro de FIDCs superou R$ 500 bilhões em patrimônio líquido em 2024, com crescente uso de seguro de crédito como credit enhancement.

**Segmentos com maior uso:**

**Varejo e Distribuição:**
• Redes varejistas securitizam recebíveis de fornecedores (supply chain)
• Seguro garante os fornecedores que recebem antecipado
• Estrutura "confirming" (reverse factoring) com FIDC + seguro

**Agronegócio:**
• Cooperativas estruturam FIDCs para financiar produtores
• Seguro de crédito agrícola + seguro de crédito comercial combinados
• Cedente: cooperativa. Sacados: produtores rurais

**Infraestrutura e Energia:**
• FIDCs de recebíveis de concessionárias
• Seguro de crédito político para riscos regulatórios
• Energia renovável (projetos solares, eólicos)

**Fintechs e Factorings:**
• Plataformas de antecipação de recebíveis (marketplace lending)
• Seguro para carteiras de PMEs
• Gestão automatizada via API da seguradora

**Tendência 2025-2026:**
• FIDCs com seguro paramétrico (gatilho automático)
• Integração de IA para subscrição em tempo real
• Estruturas tokenizadas (RWA — Real World Assets)

**Fale com a Fairfield** para estruturar seu FIDC com cobertura de seguro de crédito.`},{keywords:["supply chain finance fidc","reverse factoring fidc","confirming seguro","cadeia fornecedores fidc"],category:"fidc",answer:`**Supply Chain Finance com FIDC e Seguro de Crédito**

**Conceito:**
O supply chain finance (SCF) permite que fornecedores antecipem recebíveis aprovados pelo comprador (âncora), usando um FIDC como veículo de funding.

**Estrutura típica:**

1. **Comprador âncora** aprova fatura do fornecedor no sistema
2. **Fornecedor** solicita antecipação via plataforma
3. **FIDC** compra o recebível com deságio
4. **Seguradora** garante o risco de crédito do comprador âncora
5. **No vencimento**, comprador paga diretamente ao FIDC

**Por que o seguro é essencial:**
• Investidores das cotas sênior exigem garantia
• Reduz o custo de captação do FIDC (melhor taxa para fornecedor)
• Seguradora já conhece o risco do âncora (due diligence prévia)

**Vantagens para cada parte:**

| Parte | Benefício |
|---|---|
| Fornecedor | Antecipação com taxa baixa |
| Comprador | Prazo estendido sem impacto no balanço |
| FIDC | Risco mitigado pelo seguro |
| Seguradora | Prêmio sobre volume expressivo |

**Plataformas no Brasil:** Pymento, Yuno, TOTVS Financial Services, SAP Ariba

**A Fairfield** estrutura coberturas para programas de SCF de R$ 50M a R$ 2 bilhões.`},{keywords:["mpl probable maximum loss","pml maximum possible loss","perda maxima possivel","perda maxima provavel"],category:"clausulado",answer:`**MPL e PML — Conceitos Fundamentais de Subscrição**

**MPL (Maximum Possible Loss):**
A **perda máxima possível** assume o pior cenário absoluto — todos os limites de crédito são acionados simultaneamente.

• Usado para calcular a capacidade máxima da apólice
• Determina o limite máximo de indenização agregado
• Sempre maior que o PML
• Exemplo: Faturamento R$ 100M, limites aprovados R$ 80M → MPL = R$ 80M

**PML (Probable Maximum Loss):**
A **perda máxima provável** considera cenários realistas de sinistros simultâneos, baseada em:

• Histórico de inadimplência do setor
• Correlação entre devedores
• Concentração geográfica/setorial
• Análise de stress por seguradora

**Uso prático na apólice:**

| Métrica | Uso |
|---|---|
| MPL | Limite máximo global da apólice |
| PML | Base para cálculo do prêmio |
| PML/MPL ratio | Indica diversificação da carteira |

**Para o segurado:**
• MPL alto = apólice mais cara (ou exige mais resseguro)
• Diversificar a carteira de devedores reduz PML
• Concentração em um único devedor aumenta drasticamente o PML

**Dica:** A Fairfield analisa seu portfólio para otimizar MPL/PML antes da subscrição.`},{keywords:["aggregate limit","per occurrence limit","limite agregado","limite por ocorrencia","limite sinistro"],category:"clausulado",answer:`**Aggregate Limit vs Per Occurrence Limit**

**Per Occurrence Limit (por ocorrência):**
Limite máximo de indenização por **evento de sinistro** (insolvência de um devedor).

• Protege contra sinistros individuais grandes
• Exemplo: Limite por ocorrência = R$ 5M → mesmo que devedor deva R$ 10M, indenização máxima = R$ 5M
• Importante para concentrações de risco

**Aggregate Limit (agregado anual):**
Limite máximo de indenização **total no período da apólice** (geralmente 12 meses).

• Protege a seguradora contra acúmulo de sinistros
• Exemplo: Aggregate = R$ 20M → após R$ 20M em sinistros, apólice encerra cobertura
• Pode ser: Aggregate First Loss (AAD deduzido do aggregate)

**Combinações comuns:**

| Estrutura | Uso Típico |
|---|---|
| Só per occurrence | Carteiras com poucos grandes devedores |
| Só aggregate | Carteiras granulares (muitos pequenos) |
| Per occurrence + aggregate | Estruturas mistas (FIDC, XL) |
| Unlimited aggregate | Whole Turnover premium (taxa sobre faturamento) |

**Negociação:** Em apólices XL (Excess of Loss), o aggregate limit é crucial — define quantas vezes o priority pode ser acionado.

**Atenção:** Verifique sempre se sua apólice tem aggregate limit — pode ser surpresa no momento do sinistro.`},{keywords:["non cancellable limits","ncc limits","limites nao cancelaveis","limite irrevogavel","limite garantido"],category:"clausulado",answer:`**NCC — Non-Cancellable Credit Limits**

**O que são limites não canceláveis (NCC)?**
Uma cláusula especial onde a seguradora se compromete a **não cancelar nem reduzir** o limite de crédito de um determinado devedor durante a vigência da apólice, independentemente de deterioração do risco.

**Quando é utilizado:**
• Devedores estratégicos do segurado
• Grandes compradores com contratos de longo prazo
• Operações de FIDC (segurança para os investidores)
• Exportações com contratos plurianuais

**Diferença entre limit types:**

| Tipo de Limite | Características |
|---|---|
| Limite Discricionário | Seguradora pode cancelar a qualquer tempo |
| Limite Aprovado | Pode ser revisado com aviso prévio |
| **NCC (Non-Cancellable)** | **Garantido pelo período contratado** |
| Enhanced NCC | NCC + cobertura ampliada de período de cauda |

**Custo:** NCC tem prêmio adicional de 15-40% sobre o limite normal, dependendo do risco do devedor.

**Aplicação em exportação:**
Especialmente relevante quando o comprador é âncora de uma cadeia de fornecedores — cancelamento do limite quebraria toda a estrutura de financiamento.

**Importante:** Nem todas as seguradoras oferecem NCC. Allianz Trade e Coface têm produtos específicos — consulte a Fairfield para comparação.`},{keywords:["pre credit period","periodo pre credito","manufacturing period","periodo fabricacao seguro"],category:"clausulado",answer:`**Pre-Credit Period — Período Pré-Crédito**

**Definição:**
O período pré-crédito (também chamado de "manufacturing period") é o intervalo entre o **início da produção/serviço** e a **entrega/emissão da fatura**.

**Por que importa para o seguro?**
Na maioria das apólices padrão, a cobertura inicia na **data da fatura** (quando o crédito comercial nasce). Mas o fornecedor já incorreu em custos antes disso.

**Exemplo prático:**
• Janeiro: Empresa recebe pedido de R$ 2M e inicia produção
• Março: Entrega do equipamento e emissão da fatura
• Julho: Vencimento do pagamento
• Se o comprador falir em **fevereiro** (antes da fatura), a apólice padrão **não cobre**

**Cobertura pré-crédito:**
• Estende a proteção ao período de fabricação
• Cobre custos já incorridos (materiais, mão de obra)
• Mais comum em exportação e projetos de longa duração
• Prêmio adicional de 10-25%

**Setores que mais usam:**
• Bens de capital (máquinas, equipamentos)
• Construção e engenharia
• Projetos customizados
• Exportação de commodities processadas

**Cláusula Contract Frustration** é a versão mais ampla, cobrindo também riscos políticos no pré-crédito.`},{keywords:["run off period","periodo cauda","cauda apolice","vigencia estendida","tail period"],category:"clausulado",answer:`**Run-Off Period — Período de Cauda da Apólice**

**O que é o período de cauda (run-off)?**
Após o cancelamento ou não renovação da apólice, o período durante o qual **sinistros ainda podem ser registrados** para vendas realizadas antes do término da cobertura.

**Por que existe?**
As vendas têm prazo de pagamento (30, 60, 90, 180 dias). Uma venda feita em novembro com vencimento em fevereiro ainda tem direito a cobertura, mesmo que a apólice tenha terminado em dezembro.

**Duração típica do run-off:**
• Crédito doméstico: **90 a 180 dias** após o vencimento da apólice
• Exportação: **180 a 360 dias** (prazos mais longos)
• Projetos/construção: até **24 meses**

**Condições para cobertura no run-off:**
✓ Venda realizada DURANTE a vigência da apólice
✓ Devedor tinha limite de crédito aprovado
✓ Sinistro (inadimplência) ocorre APÓS o término
✓ Notificação dentro do prazo do run-off

**O que NÃO é coberto no run-off:**
✗ Vendas realizadas APÓS o cancelamento
✗ Novos devedores (limite aprovado após cancelamento)
✗ Aumentos de limite após cancelamento

**Dica crítica:** Ao trocar de seguradora, verifique se a nova apólice cobre o "período de transição" — pode haver um gap de cobertura.`},{keywords:["contract frustration","frustracao contratual","cobertura frustracao","rescisao contrato importador"],category:"clausulado",answer:`**Contract Frustration Coverage**

**Definição:**
Cobertura que protege o exportador quando um **contrato é frustrado** por razões além do controle das partes — principalmente por ação governamental ou evento político no país do comprador.

**Diferença entre contract frustration e risco de crédito:**

| Risco de Crédito | Contract Frustration |
|---|---|
| Comprador não paga (insolvência) | Contrato não pode ser executado |
| Devedor não tem recursos | País não permite importação |
| Má vontade do devedor | Guerra, embargo, confisco |

**Situações cobertas:**
• Cancelamento de licença de importação
• Embargo comercial (sanções)
• Confisco de mercadoria em trânsito
• Decreto governamental proibindo pagamento
• Escassez de divisas (impossibilidade de remessa)
• Guerra, revolução, insurreição

**Período pré-crédito + Contract Frustration:**
A combinação é essencial para exportadores de bens de capital — cobre tanto o risco durante a fabricação quanto após a entrega.

**Quem oferece no Brasil:**
• SBCE (Seguradora Brasileira de Crédito à Exportação) — foco em risco político
• Allianz Trade — cláusula específica em apólice de exportação
• Coface — módulo de risco político separado

**Prêmio:** 0,05% a 0,30% sobre o valor exportado, dependendo do país.`},{keywords:["risco politico violencia politica","political violence","diferenca risco politico","guerra terrorismo seguro"],category:"clausulado",answer:`**Risco Político vs Violência Política — Diferenças no Clausulado**

**Risco Político (Political Risk):**
Ações do **governo** que prejudicam operações comerciais ou financeiras.

**Coberturas típicas:**
• Confisco, expropriação, nacionalização (CEN)
• Inconvertibilidade de moeda / restrição de transferência
• Cancelamento de licenças e concessões
• Quebra de contrato pelo governo (sovereign breach)
• Embargo e sanções

**Violência Política (Political Violence):**
Atos de **violência com motivação política** que causam danos físicos ou interrompem operações.

**Coberturas típicas:**
• Guerra e guerra civil
• Terrorismo (incluindo SRCC — strikes, riots, civil commotion)
• Sabotagem
• Insurreição e revolução

**Diferença prática para o seguro de crédito:**

| Aspecto | Risco Político | Violência Política |
|---|---|---|
| Causa | Ação governamental | Ato violento |
| Dano principal | Financeiro/legal | Físico/operacional |
| Produto | Trade Credit + Political Risk | Property + BI + SRCC |
| Seguradora | Allianz, Coface, SBCE | Chubb, AIG, Lloyd's |

**Produto combinado:**
Algumas apólices de exportação combinam ambos em uma única cobertura "Comprehensive Political Risk" — mais eficiente e econômico.`},{keywords:["endorsement top up","excess layer","camada excedente","endosso especial","cobertura complementar"],category:"clausulado",answer:`**Endorsements Especiais — Top-Up e Excess Layer**

**Top-Up (Complementação de Limite):**
Quando a seguradora primária aprova um limite **menor** que o necessário, o Top-Up permite contratar uma segunda seguradora para cobrir o excedente.

**Como funciona:**
• Seguradora A aprova R$ 3M para o devedor XYZ
• Segurado precisa de R$ 5M
• Seguradora B faz o Top-Up do excedente R$ 2M
• Ambas cobrem proporcionalmente em caso de sinistro

**Excess Layer (Camada Excedente):**
Estrutura onde a segunda seguradora só é acionada **após a primeira esgotar sua capacidade**.

**Diferença Top-Up vs Excess Layer:**

| Aspecto | Top-Up | Excess Layer |
|---|---|---|
| Ativação | Simultaneamente | Após esgotar camada 1 |
| Risco da 2ª seguradora | Proporcional | Concentrado em grandes sinistros |
| Custo | Menor | Maior (risco catastrophic) |
| Uso típico | Limites acima do capacity | Proteção catastrófica |

**Endorsed Conditions comuns:**
• **Ampliação de prazo de mora** (de 90 para 180 dias)
• **Extensão geográfica** (inclusão de países)
• **Waiver of premium** em caso de sinistro total
• **Retroactive cover** (cobertura retroativa)

**A Fairfield opera no mercado Lloyd's** para estruturar Top-Up e Excess Layers para grandes exposições.`},{keywords:["supply chain finance seguro","scf seguro credito","financiamento cadeia","antecipacao recebiveis seguro"],category:"inovacao",answer:`**Seguro de Crédito para Supply Chain Finance (SCF)**

**Supply Chain Finance** é o conjunto de soluções que otimiza o capital de giro de compradores e fornecedores usando o crédito do comprador âncora.

**Modalidades de SCF com seguro de crédito:**

**1. Confirming / Reverse Factoring:**
• Comprador âncora instrui banco/FIDC a pagar fornecedores antecipado
• Seguro garante o risco do âncora para o financiador
• Taxa de antecipação reflete o risco do âncora (não do fornecedor)

**2. Dynamic Discounting:**
• Comprador usa caixa próprio para pagar antecipado com desconto
• Seguro protege o comprador se fornecedor não entregar após pagamento

**3. Inventory Finance:**
• Financiamento de estoques em trânsito
• Seguro de crédito + seguro de transporte combinados

**4. Distributor Finance:**
• Fabricante financia rede de distribuidores
• Seguro garante o risco dos distribuidores para o fabricante

**Benefícios do seguro no SCF:**
• Permite 100% de adiantamento (sem retenção)
• Reduz o custo de funding para toda a cadeia
• Escala o programa sem aumentar o risco do financiador

**Mercado:** Programas de SCF no Brasil movimentam +R$ 800 bilhões/ano. A Fairfield atua nos maiores programas do país.`},{keywords:["securitizacao recebiveis seguro","cri cra seguro","ativo lastrado seguro","receivables securitization"],category:"inovacao",answer:`**Securitização de Recebíveis Lastreada em Seguro de Crédito**

**Conceito:**
O seguro de crédito atua como **credit wrapper** em operações de securitização, elevando o rating dos ativos emitidos.

**Veículos de securitização no Brasil:**
• **FIDC** — Fundo de Investimento em Direitos Creditórios
• **CRI** — Certificado de Recebíveis Imobiliários
• **CRA** — Certificado de Recebíveis do Agronegócio
• **CDCA** — Certificado de Direitos Creditórios do Agronegócio
• **Debentures** — com recebíveis como lastro

**Como o seguro melhora a estrutura:**

1. **Sem seguro:** CRA rating BBB+, taxa CDI + 3,5%
2. **Com seguro de crédito (AA seguradora):** CRA rating AA, taxa CDI + 1,8%
3. **Economia no custo:** 1,7% ao ano sobre o principal

**Para uma emissão de R$ 200M:** Economia de R$ 3,4M/ano em custo de captação vs. prêmio de seguro de R$ 0,8M/ano → **saving líquido de R$ 2,6M/ano**

**Estruturadores que usam esse approach:**
• Gestoras de FIDC
• Securitizadoras (True Securitizadora, Opea, Virgo)
• Bancos de investimento (BTG, Itaú BBA, XP)

**A Fairfield** assessora tanto emissores quanto investidores nessas estruturas.`},{keywords:["seguro credito parametrico","parametric insurance","gatilho automatico","trigger based insurance"],category:"inovacao",answer:`**Seguro de Crédito Paramétrico — Inovação no Mercado**

**O que é seguro paramétrico?**
Ao invés de regular cada sinistro individualmente, o pagamento é **automático** quando um índice ou gatilho predefinido é atingido.

**Gatilhos usados em crédito:**
• Índice de inadimplência do setor supera X%
• Devedor tem pedido de recuperação judicial deferido (registro no DJE)
• Rating do devedor cai abaixo de BB- (agência específica)
• Índice de spread de crédito (CDS) supera determinado nível
• Nota de crédito interna da seguradora cai abaixo de threshold

**Vantagens:**
• Pagamento em 24-72 horas (vs. 30-180 dias na regulação tradicional)
• Sem contestação da prova de perda
• Fluxo de caixa previsível
• Ideal para FIDCs (cotistas precisam de liquidez rápida)

**Desafios:**
• Basis risk: evento ocorre mas gatilho não é ativado
• Regulação SUSEP ainda em desenvolvimento
• Precificação complexa (depende de dados históricos)

**Onde já existe no mundo:**
• Lloyd's of London (crédito parametric para trade finance)
• WTW e Aon estruturam produtos para bancos
• Mercado africano e asiático (micro-seguro de crédito)

**No Brasil:** Sandbox da SUSEP (Resolução SUSEP 381/2020) permite testes — a Fairfield acompanha de perto.`},{keywords:["api seguro credito","embedded insurance erp","integracao erp seguro","api first insurance","marketplace seguro"],category:"inovacao",answer:`**API-First Credit Insurance — Seguro Embutido em ERPs e Marketplaces**

**O que é Embedded Credit Insurance?**
Integração do seguro de crédito diretamente nos fluxos de trabalho do cliente, sem necessidade de acessar portais separados da seguradora.

**Casos de uso:**

**ERP Integration (SAP, TOTVS, Oracle):**
• Ao cadastrar um novo cliente no ERP, sistema consulta automaticamente a seguradora
• Limite de crédito aprovado aparece direto no cadastro do cliente
• Ao emitir uma NF, sistema verifica se o limite está disponível
• Alertas automáticos de cancelamento de limite no ERP

**Marketplace B2B:**
• Vendedor define preço; sistema calcula prêmio do seguro em tempo real
• Comprador escolhe prazo de pagamento (30/60/90 dias) e vê custo do seguro
• Contratação em 1 clique
• Ideal para plataformas como Mercado B2B, Supplyshelf, GEP

**E-commerce B2B:**
• Score de crédito do comprador calculado em milissegundos
• Limite de crédito definido no checkout
• Pagamento no prazo garantido pela seguradora

**Seguradoras com API robusta:**
• Allianz Trade (Trade Allianz API)
• Coface (Cofanet API)
• Euler Hermes / Atradius Connect

**O SENTINEL** (plataforma Fairfield) tem integração nativa com essas APIs. Consulte nosso time de tecnologia.`},{keywords:["pay per transaction","usage based insurance","seguro por transacao","seguro sob demanda credito"],category:"inovacao",answer:`**Usage-Based Credit Insurance — Seguro por Transação**

**Modelo tradicional:** Prêmio fixo anual sobre faturamento projetado, independente do volume real.

**Modelo usage-based:** Prêmio cobrado **por transação** ou **por fatura emitida**, de forma dinâmica.

**Como funciona:**
1. Empresa integra API da seguradora ao seu sistema de faturamento
2. Ao emitir cada NF a prazo, o sistema solicita cobertura
3. Seguradora responde em segundos: aprovado/negado + prêmio
4. Prêmio debitado automaticamente (PIX, cartão, conta)
5. Cobertura ativa apenas para aquela transação específica

**Vantagens para PMEs:**
• Sem prêmio mínimo alto (barreira de entrada)
• Paga apenas o que usa
• Controle total do custo por venda
• Ideal para sazonalidade (vendas concentradas em dezembro/março)

**Desvantagens:**
• Geralmente mais caro por transação vs. apólice anual
• Sem benefícios de carteira (bônus por baixa sinistralidade)
• Seguradora tem menos dados de contexto

**Fintechs que operam modelo similar no Brasil:**
• Guaranty (seguro de crédito para pequenos negócios)
• Creditas (crédito com garantia — modelo adjacent)
• Open Co (buy now pay later B2B)

**Tendência:** À medida que o Open Insurance avança, o modelo usage-based deve crescer significativamente até 2027.`},{keywords:["seguro credito fintech","credito digital seguro","plataforma digital seguro","insurtech credito"],category:"inovacao",answer:`**Seguro de Crédito para Fintechs e Plataformas Digitais de Trade**

**Por que fintechs precisam de seguro de crédito?**
Fintechs de crédito B2B enfrentam o mesmo risco que empresas tradicionais: inadimplência. O seguro permite que escalem sem aumentar capital próprio em risco.

**Modalidades utilizadas por fintechs:**

**1. Fintech de Antecipação de Recebíveis:**
• Compra recebíveis de PMEs e assume o risco dos sacados
• Seguro de crédito garante os sacados aprovados
• Permite capital regulatório menor (Basileia III)

**2. BNPL B2B (Buy Now, Pay Later):**
• Fintech paga fornecedor imediatamente; comprador paga em 30/60/90 dias
• Seguro cobre o risco do comprador
• Modelo: Moneta, Trezo, Cellcoin

**3. Marketplace de Crédito:**
• Plataforma conecta empresas a investidores
• Seguro aumenta o apetite dos investidores
• CCB (Cédula de Crédito Bancário) garantida por seguro

**4. Plataformas de Trade Finance:**
• Desconto de LC (Letter of Credit) e duplicatas de exportação
• Seguro de crédito à exportação integrado

**Requisitos especiais para fintechs:**
• API de decisão em tempo real (<500ms)
• Cobertura granular (tickets de R$ 5K a R$ 5M)
• Dados alternativos de crédito aceitos pela seguradora
• Modelo white-label possível

**A Fairfield** tem parcerias com as principais insurtechs para estruturar esses modelos.`},{keywords:["grandes riscos acima 50 milhoes","syndicated cover","sindicato seguro","exposicao acima 50m","grande risco credito"],category:"grandes_riscos",answer:`**Seguro de Crédito para Grandes Exposições — Acima de USD 50M**

**Desafio dos grandes riscos:**
Nenhuma seguradora sozinha tem capacidade ou apetite para garantir exposições muito grandes em um único devedor ou carteira concentrada.

**Solução: Syndicated Cover (Cobertura Sindicada)**

**Como funciona:**
1. **Líder do sindicato** — seguradora principal que lidera a negociação (ex.: Allianz Trade)
2. **Seguidores** — outras seguradoras que participam proporcionalmente
3. **Corretor de resseguro** — coordena a colocação (Lloyd's, Guy Carpenter, Gallagher Re)
4. **Apólice única** — segurado tem uma única apólice com múltiplos subscritores

**Estrutura típica para USD 100M de exposição:**
• Allianz Trade: 40% (USD 40M)
• Atradius: 25% (USD 25M)
• Coface: 20% (USD 20M)
• Lloyd's syndicates: 15% (USD 15M)

**Requisitos para sindicalização:**
• Devedor bem conhecido e com rating disponível
• Due diligence financeira detalhada
• Apresentação formal para cada subscritor
• Prazo de negociação: 4-12 semanas

**Custo:**
• Prêmio negociado individualmente com cada subscritor
• Taxa de corretagem mais alta (operação complexa)
• Honorários de due diligence possíveis

**A Fairfield** tem acesso direto ao mercado Lloyd's e às principais resseguradoras para essas estruturas.`},{keywords:["resseguro facultativo","facultative reinsurance","colocacao resseguro","resseguro grandes riscos"],category:"grandes_riscos",answer:`**Resseguro Facultativo para Grandes Riscos de Crédito**

**O que é resseguro facultativo?**
Ao contrário do resseguro proporcional automático (treaty), o facultativo é negociado **caso a caso**, para riscos específicos que excedem a capacidade da seguradora.

**Quando a seguradora usa facultativo:**
• Risco individual acima do limite do treaty automático
• Risco em país com treaty excluído (risco político elevado)
• Devedor com setor excluído do treaty
• Necessidade de capacidade adicional temporária

**Processo de colocação facultativa:**

1. **Corretora de resseguro** prepara slip com detalhes do risco
2. **Resseguradoras** cotam capacidade e taxa
3. **Líder** (geralmente Munich Re, Swiss Re, Gen Re) subscreve a maior parte
4. **Seguidores** completam a capacidade necessária
5. **Apólice** emitida com back-to-back com o resseguro

**Principais resseguradoras de crédito:**
• **Munich Re** (ERGO Credit) — líder global
• **Swiss Re** — forte em estruturados
• **Gen Re** — Berkshire Hathaway
• **Hannover Re** — forte em emerging markets
• **SCOR** — especializado em crédito/surety

**Prazo e custo:**
• 2-6 semanas para colocação
• Taxa de resseguro embutida no prêmio final
• Segurado não paga separadamente pelo resseguro

**A Fairfield** tem acesso direto ao mercado de resseguro para estruturar coberturas complexas.`},{keywords:["project finance seguro credito","infraestrutura seguro","spe seguro","ppp seguro credito"],category:"grandes_riscos",answer:`**Seguro de Crédito para Project Finance e Infraestrutura**

**Project Finance** é a estrutura de financiamento baseada no fluxo de caixa futuro de um projeto (SPE — Sociedade de Propósito Específico), com recursos limitados às garantias do próprio projeto.

**Onde o seguro de crédito atua:**

**1. Risco de Performance do Pagador (Offtaker Risk):**
• Concessionária tem contrato de venda de energia/serviço com governo ou empresa
• Seguro garante que o comprador do serviço pagará conforme contrato
• Comum em PPPs, concessões e PPA de energia renovável

**2. Risco de Crédito dos Fornecedores (EPC Contractors):**
• Construtores recebem pagamento antecipado
• Seguro garante que entregarão conforme especificado
• Mais próximo de Seguro Garantia (performance bond)

**3. Risco Político na Concessão:**
• Governo pode renegociar tarifas ou cancelar concessão
• Seguro de risco político garante o fluxo de receita
• Crucial para financiadores internacionais (IFC, BID, BNDES)

**Seguradoras especializadas:**
• MIGA (Multilateral Investment Guarantee Agency — Banco Mundial)
• SACE (Itália), COFACE (França) — agências de crédito à exportação
• AIG, Chubb, Zurich — mercado privado
• SBCE (Brasil) — projetos com componente exportador

**Estrutura típica:** Senior lender exige seguro como condição de financiamento — cobertura de 100% do principal ou das parcelas.`},{keywords:["garantia soberana seguro","sovereign guarantee","risco governo","cobertura governo soberano"],category:"grandes_riscos",answer:`**Garantia Soberana + Seguro de Crédito — Estruturas Combinadas**

**O que é garantia soberana?**
Garantia emitida por um governo (ou entidade por ele respaldada) assegurando o cumprimento de obrigações financeiras de um devedor privado ou público.

**Por que combinar garantia soberana + seguro?**

**Cenário 1 — Sovereign garantindo empresa privada:**
• Empresa estatal deve ao exportador brasileiro
• Governo do país garante a dívida
• Porém: mesmo com garantia soberana, transferência de divisas pode ser bloqueada
• Seguro de crédito cobre o risco de **inconvertibilidade** e **transferência**

**Cenário 2 — Estrutura de dupla proteção:**
• ECA (agência de crédito à exportação) garante até 85% do contrato
• Seguradora privada cobre os 15% restantes
• Ou: ECA garante risco político + seguradora cobre risco comercial

**Agências de crédito à exportação (ECAs) brasileiras:**
• **FGE** (Fundo de Garantia à Exportação) — Banco do Brasil/MDIC
• **SBCE** (Seguradora Brasileira de Crédito à Exportação) — IRB
• **PROEX** — Banco do Brasil (equalização de taxas)

**ECAs internacionais parceiras:**
• US EXIM Bank (EUA)
• UKEF (Reino Unido)
• Bpifrance (França)
• KfW IPEX (Alemanha)

**A Fairfield** estrutura coberturas combinando SBCE + mercado privado para maximizar a cobertura de exportações brasileiras.`},{keywords:["commodities trader seguro","trading house seguro","comercializadora seguro","trader grao energia"],category:"grandes_riscos",answer:`**Seguro de Crédito para Commodities Traders e Trading Houses**

**Perfil de risco dos traders:**
Traders de commodities têm risco de crédito único: operam com margens apertadas, volumes gigantes, em múltiplos países e com contraparte de qualidade variável.

**Principais riscos cobertos:**

**1. Risco da Contraparte (Buyer Default):**
• Comprador de grãos, energia ou metais não paga
• Trader já entregou a mercadoria
• Seguro cobre o risco de crédito do comprador

**2. Risco de Pré-Pagamento:**
• Trader paga antecipado a fornecedor (produtor)
• Fornecedor não entrega por falência ou problema operacional
• Seguro cobre o risco do fornecedor (seller risk)

**3. Risco de Documento (Documentary Risk):**
• Falsificação de Warrant (armazém) ou Bill of Lading
• Mercadoria não existe ou foi vendida duas vezes
• Seguro de fraude de trade finance

**Estruturas especializadas para traders:**
• **Revolving credit insurance:** Limite renovável conforme entregas
• **Approved buyer limit:** Lista de compradores pré-aprovados globalmente
• **Commodity-specific terms:** Prazo curto (7-30 dias vs. 60-180 dias padrão)

**Grandes traders no Brasil:**
• ADM, Cargill, Louis Dreyfus, Bunge (grãos)
• Vitol, Trafigura, Glencore (energia/metais)
• SLC Agrícola, Amaggi (trading próprio)

**Lloyd's e Zurich** são referência nesse segmento globalmente — a Fairfield tem acesso a esses mercados especializados.`},{keywords:["excess of loss multibuyer","xol corporativo","grandes corporacoes xol","carteira excedente perda"],category:"grandes_riscos",answer:`**Multi-Buyer Excess of Loss para Grandes Corporações**

**O que é o XL Multi-Buyer Corporativo?**
Modelo de seguro de crédito onde a empresa assume uma franquia (prioridade) alta e o seguro cobre apenas as perdas excedentes — mas em toda a carteira de compradores simultaneamente.

**Estrutura típica para grande corporação:**

• Faturamento a prazo: R$ 2 bilhões/ano
• Perda histórica média: 0,15% = R$ 3M
• Prioridade (franchise): R$ 15M (5x a perda esperada)
• Limite de indenização: R$ 100M acima da prioridade

**Componentes do XL Corporativo:**

| Camada | Responsável | Valor |
|---|---|---|
| Perdas normais (0-R$15M) | Própria empresa | R$ 15M |
| Perdas anormais (R$15M-R$115M) | Seguradora | R$ 100M |
| Perdas catastróficas (>R$115M) | Resseguro | Ilimitado |

**Vantagens do XL Corporativo:**
• Prêmio muito menor que whole turnover (só cobre excesso)
• Empresa mantém gestão direta da carteira
• Sem interferência da seguradora nos limites de crédito rotineiros
• Cobertura concentrada onde realmente importa

**Quem usa:**
• Grandes indústrias (químico, siderúrgico, alimentício)
• Distribuidoras atacadistas
• Grupos econômicos com múltiplas filiais

**Mínimo de apólice:** Geralmente acima de R$ 500M de faturamento segurado — estrutura sob medida pela Fairfield.`},{keywords:["resolucao cnsp 432","cnsp 432 2021","condicoes gerais obrigatorias","regulacao credito interno"],category:"legislacao",answer:`**Resolução CNSP 432/2021 — Condições Gerais Obrigatórias**

**O que é a Resolução CNSP 432/2021?**
O principal normativo que regula o **seguro de crédito interno** no Brasil, estabelecendo as condições gerais mínimas obrigatórias para todas as apólices.

**Principais disposições:**

**1. Definições obrigatórias:**
• Devedor, segurado, limite de crédito, crédito segurado
• Mora prolongada (definição mínima: 120 dias)
• Insolvência presumida e declarada

**2. Coberturas mínimas obrigatórias:**
• Insolvência do devedor (falência decretada)
• Mora prolongada acima do prazo regulamentado
• Insolvência presumida (em casos definidos)

**3. Exclusões obrigatórias:**
• Partes relacionadas (grupo econômico do segurado)
• Dívidas anteriores à apólice
• Litígio comercial entre as partes
• Risco político (cobertura separada)

**4. Prazo de comunicação de sinistro:**
• Até **30 dias** após conhecimento do evento
• Mora: a contar do vencimento da fatura não paga

**5. Prazo de indenização:**
• Seguradora tem **30 dias** para analisar após documentação completa
• Mora da seguradora: SELIC + multa de 2%

**6. Documentação mínima do sinistro:**
• Notas fiscais, duplicatas ou contratos
• Prova de entrega (aviso de recebimento)
• Demonstração da dívida (extrato)

**Complemento:** A Resolução CNSP 432 foi atualizada em 2023 para incluir disposições sobre seguros digitais e APIs.`},{keywords:["open insurance susep","compartilhamento dados seguro","fases open insurance","portabilidade apolice"],category:"legislacao",answer:`**Open Insurance Brasil — Fases de Implementação e Impacto no Crédito**

**O que é Open Insurance?**
Iniciativa da SUSEP para criar um ecossistema aberto de dados no setor de seguros, similar ao Open Banking do Banco Central.

**Fases de implementação:**

**Fase 1 — Dados Públicos (concluída 2022):**
• Seguradoras compartilham dados de produtos e canais
• Comparação de apólices facilitada
• APIs abertas para fintechs e corretoras

**Fase 2 — Dados de Clientes (em implementação 2023-2025):**
• Segurado autoriza compartilhamento do seu histórico
• Histórico de sinistralidade portável entre seguradoras
• Bônus/Malus acompanha o segurado na troca

**Fase 3 — Serviços Financeiros (prevista 2025-2026):**
• Contratação de seguros via APIs de terceiros
• Integração com plataformas de crédito
• Precificação personalizada em tempo real

**Impacto específico no Seguro de Crédito:**

• **Portabilidade de histórico:** Bônus acumulado segue o segurado
• **Cotação automatizada:** ERPs cotam e contratam sem intervenção humana
• **Dados compartilhados:** Histórico de devedores mais rico para subscrição
• **Concorrência:** Novos entrantes (insurtechs) com produtos inovadores

**Oportunidade:** A Fairfield está estruturando integrações Open Insurance para facilitar a contratação digital de seguro de crédito.`},{keywords:["sandbox susep","sandbox regulatorio","insurtech regulacao","resolucao susep 381"],category:"legislacao",answer:`**Sandbox Regulatório da SUSEP — Oportunidades para Insurtechs de Crédito**

**O que é o Sandbox da SUSEP?**
Ambiente controlado criado pela Resolução SUSEP 381/2020 (atualizada 2022) que permite testar **produtos e serviços inovadores** com regras regulatórias flexibilizadas por prazo determinado.

**Como funciona:**
• Empresa submete proposta de inovação
• SUSEP avalia e pode autorizar testes por 12-24 meses
• Volume máximo de prêmios e segurados limitado
• Ao final, SUSEP decide se regulamenta permanentemente

**Produtos de crédito que passaram pelo sandbox:**

1. **Seguro de crédito paramétrico** (gatilho em índice de inadimplência)
2. **Microcrédito segurado** (vendedores ambulantes, MEIs)
3. **BNPL B2B com seguro embutido** (buy now, pay later empresarial)
4. **Seguro de crédito por assinatura mensal** (PMEs)
5. **Token de seguro de crédito** (fracionamento em blockchain)

**Requisitos para participar:**
• Proposta genuinamente inovadora
• Plano de negócios com proteção ao consumidor
• Capital mínimo reduzido (sandbox)
• Relatórios periódicos à SUSEP

**Status atual (2024-2025):**
• 3ª rodada do sandbox em andamento
• Foco em ESG e crédito sustentável
• Integração Open Insurance como tema prioritário

**A Fairfield** acompanha ativamente o sandbox para identificar inovações relevantes para seus clientes.`},{keywords:["marco legal garantias","lei 14711 2023","nova lei garantias","impacto garantias seguro"],category:"legislacao",answer:`**Marco Legal das Garantias (Lei 14.711/2023) e Seguro de Crédito**

**O que é a Lei 14.711/2023?**
O Marco Legal das Garantias modernizou a legislação sobre garantias reais no Brasil, com impacto direto no uso de seguro de crédito como instrumento complementar.

**Principais mudanças:**

**1. Alienação Fiduciária Ampliada:**
• Mais ativos podem ser dados em garantia fiduciária
• Execução extrajudicial mais rápida
• Impacto: reduz necessidade de seguro como única proteção

**2. Garantia de Recebíveis:**
• Recebíveis podem ser cedidos como garantia sem cessão definitiva
• FIDC pode usar recebíveis garantidos
• Seguro de crédito sobre recebíveis garantidos tem subscrição diferente

**3. Portabilidade de Garantias:**
• Garantias podem migrar entre credores sem novo registro
• Impacta operações de SCF e FIDC

**4. Seguro de Crédito como Garantia Complementar:**
• A lei reconhece instrumentos de mitigação de risco
• Seguro de crédito pode substituir parte das garantias reais exigidas
• Especialmente relevante para PMEs sem patrimônio suficiente

**Impacto prático:**

| Antes da Lei | Após Lei 14.711 |
|---|---|
| Garantia real obrigatória | Seguro pode complementar |
| Execução judicial lenta | Execução extrajudicial |
| Recebíveis como lastro complexo | Recebíveis como garantia simplificada |

**Oportunidade:** Mais empresas elegíveis para crédito usando seguro como mitigante — mercado potencial expandido para a Fairfield.`},{keywords:["basileia iii seguro credito","capital regulatorio seguro","mitigante risco basileia","rwas seguro credito"],category:"legislacao",answer:`**Basileia III e Seguro de Crédito como Mitigante de Risco**

**Basileia III** é o conjunto de regras internacionais de capital para bancos, implementadas no Brasil pelo Banco Central (Resolução BCB 200/2022).

**Como bancos usam seguro de crédito para reduzir capital:**

**Conceito de Risk Weighted Assets (RWA):**
• Bancos precisam manter capital mínimo proporcional ao risco dos ativos
• RWA = Valor do ativo × Fator de ponderação de risco
• PME sem garantia: ponderação 100-150%
• PME com seguro de crédito (seguradora AA): ponderação reduzida

**Redução de capital com seguro de crédito:**

| Devedor | Sem Seguro | Com Seguro (AA Seguradora) |
|---|---|---|
| PME sem rating | RWA 100% | RWA 20-50% |
| Empresa B-rated | RWA 100% | RWA 20% |
| Exportação (risco país) | RWA 100-150% | RWA 20% (risco seguradora) |

**Benefício para o banco:**
• Menor capital imobilizado = maior alavancagem
• Pode emprestar mais com mesmo capital
• Ou: reduzir capital regulatório mantendo o portfólio

**Requisitos para elegibilidade como mitigante:**
• Seguradora com rating mínimo AA- (S&P/Moody's)
• Cobertura irrevogável e incondicional
• Prazo da apólice ≥ prazo do crédito
• Apólice em favor do banco (credor)

**Impacto no mercado:** Bancos que usam seguro de crédito sistematicamente têm vantagem competitiva no custo de capital — tendência crescente no Brasil.`},{keywords:["seguro credito energia renovavel","solar eolica seguro","ppa seguro credito","energia limpa seguro"],category:"setores",answer:`**Seguro de Crédito para Energia Renovável**

**O setor de energia renovável** tem crescido exponencialmente no Brasil — líder mundial em energia eólica terrestre e top 5 em solar. O seguro de crédito é ferramenta essencial para estruturar projetos e contratos de venda de energia.

**Principais aplicações:**

**1. Risco do Comprador de Energia (Offtaker Risk):**
• Empresa que compra energia via PPA (Power Purchase Agreement)
• Se empresa falir, o projeto não recebe pela energia gerada
• Seguro garante o fluxo de receita do PPA por 15-20 anos
• Fundamental para financiadores (BNDES, bancos, debêntures)

**2. Risco de Fornecedores (EPC + O&M):**
• Construtor do parque pode falir durante a obra
• Seguro garante a conclusão (performance bond)
• Complementar ao seguro de crédito de fornecimento de equipamentos

**3. Risco de Crédito nas Vendas no Mercado Livre (ACL):**
• Geradores vendem energia a distribuidores e grandes consumidores
• Prazo de pagamento 30-60 dias
• Seguro de crédito padrão aplicado aqui

**4. Risco de Projetos de GD (Geração Distribuída):**
• Instaladores de solar vendem sistemas financiados
• Seguro garante inadimplência dos clientes
• Modelo de carteira: muitos pequenos riscos

**Seguradoras ativas no setor:**
• Allianz Trade (PPA e projetos de grande porte)
• AIG (political risk para projetos internacionais)
• SBCE (exportação de equipamentos solares brasileiros)

**A Fairfield** já estruturou coberturas para parques eólicos e plantas solares no Nordeste brasileiro.`},{keywords:["trade finance seguro","forfaiting seguro","confirming exportacao","lc letter of credit seguro"],category:"setores",answer:`**Seguro de Crédito para Trade Finance — Forfaiting e Confirming**

**Trade Finance** é o conjunto de instrumentos financeiros que facilitam o comércio internacional, reduzindo riscos entre exportador e importador.

**Forfaiting com Seguro de Crédito:**
O forfaiting é a compra definitiva de recebíveis de exportação pelo banco, sem direito de regresso contra o exportador.

• Exportador vende sua fatura ao banco forfaiter
• Banco assume 100% do risco do importador
• **Seguro de crédito** garante o banco forfaiter contra inadimplência
• Exportador recebe à vista (sem risco de crédito)
• Ideal para exportações de médio prazo (1-7 anos)

**Confirming Internacional (Supplier Finance):**
• Comprador âncora multinacional instrui banco a pagar fornecedores locais
• Banco paga e espera reembolso do âncora
• Seguro garante o risco do âncora multinacional
• Taxa competitiva baseada no risco da multinacional

**Letter of Credit (LC) e Seguro:**
• LC confirmada por banco brasileiro: seguro garante risco do banco emissor estrangeiro
• LC stand-by: funciona como garantia bancária + seguro como second layer

**Instrumentos de trade finance e seguros:**

| Instrumento | Risco Coberto | Seguradora |
|---|---|---|
| LC confirmada | Risco banco emissor | Allianz, Coface |
| Forfaiting | Risco importador | Lloyd's, AIG |
| Confirming | Risco âncora | Allianz, Atradius |
| Garantia bancária | Risco banco garantidor | SBCE |

**A Fairfield** tem estruturas de trade finance para exportadores brasileiros de todos os portes.`},{keywords:["agribusiness exportacao seguro","cafe soja acucar seguro","proteina animal exportacao","commodities agricolas seguro"],category:"setores",answer:`**Seguro de Crédito para Agribusiness Export**

**Brasil é o maior exportador mundial** de soja, açúcar, café, carne bovina, frango e suco de laranja. O risco de crédito nas exportações agro é significativo e com características únicas.

**Particularidades do risco agro export:**

• **Concentração:** Poucos compradores grandes (traders globais, redes de supermercados)
• **Sazonalidade:** Contratos concentrados em safra (jan-jul para soja; out-jan para café)
• **Preço variável:** Risco de crédito ligado ao preço da commodity
• **Risco país:** Principais mercados: China, EUA, UE, Oriente Médio
• **Prazo curto:** 30-90 dias para commodities in natura; 90-180 dias para processados

**Coberturas específicas por produto:**

| Commodity | Principal Risco | Cobertura Recomendada |
|---|---|---|
| Soja/Milho | Concentração China | XL com limite China |
| Açúcar | Mercado Oriente Médio | Whole Turnover Exportação |
| Café | Importadores europeus | Key Buyer (top 5) |
| Carne/Frango | Risco regulatório-sanitário | Risco Político + Crédito |
| OJ/Suco | USA-based buyers | Single Risk |

**SBCE no agro:**
A SBCE tem linha específica para exportadores rurais com acesso ao FGE (Fundo de Garantia à Exportação) do governo brasileiro.

**Dica:** Cooperativas agropecuárias têm estruturas especiais com volume de membros consolidado — prêmio melhor que individual.`},{keywords:["setor automotivo seguro credito","oem autopeças seguro","dealer seguro credito","financiamento automotivo seguro"],category:"setores",answer:`**Seguro de Crédito para o Setor Automotivo**

**Cadeia automotiva** é uma das mais complexas da economia: OEMs → Tier 1 → Tier 2 → Tier 3 → Concessionários → Consumidor final.

**Aplicações do seguro de crédito:**

**1. OEM (Montadora) → Rede de Concessionários:**
• Montadora vende veículos a prazo para concessionários
• Risco de inadimplência da concessionária (floor plan)
• Seguro de crédito protege o fluxo de receita da montadora
• Volume: R$ 1-5 bilhões por montadora

**2. Tier 1 → OEM (fornecedor de sistemas):**
• Autopeças de alto valor (motor, câmbio, bancos)
• Prazo 45-90 dias, risco concentrado na montadora
• Geralmente risco baixo, mas volume enorme
• Seguro XL protege contra insolvência súbita da OEM

**3. Tier 2/3 → Tier 1 (fornecedores de componentes):**
• PMEs com risco maior (Tier 1 pode cancelar contratos)
• Whole Turnover ou Key Buyer cobrindo Tier 1
• Risco de single customer concentration (1 cliente = 60%+ do faturamento)

**4. Distribuidoras de Autopeças → Oficinas:**
• Risco granular (muitos pequenos compradores)
• Whole Turnover com PMI moderado
• Gestão de limites via portal integrado ao ERP

**Crise automotiva e seguro:**
A semiconductor crisis (2021-2023) criou defaults em Tier 2/3 — empresas que tinham seguro recuperaram valores; as que não tinham tiveram perdas significativas.

**A Fairfield** tem expertise na cadeia automotiva e atua com Allianz Trade e Coface nesse segmento.`},{keywords:["seguro credito financeiras","fintech factoring seguro","securitizadora seguro","carteira credito seguro"],category:"setores",answer:`**Seguro de Crédito para Serviços Financeiros — Fintechs, Factorings e Securitizadoras**

**Serviços financeiros** são os maiores usuários de seguro de crédito no mundo — protegem carteiras de crédito, operações de desconto e estruturas de securitização.

**Factoring:**
• Fator compra recebíveis de empresas (NFs, duplicatas)
• Assume o risco de crédito do sacado (devedor)
• Seguro de crédito protege a carteira do fator
• **Cobertura:** Whole Turnover com lista de sacados aprovados
• **Desafio:** Carteira pulverizada (muitos sacados pequenos) — prêmio por carteira

**Securitizadoras (CRA, CRI, FIDC):**
• Emitem títulos lastreados em recebíveis
• Seguro eleva rating dos títulos emitidos
• Cobertura em favor dos investidores/debenturistas
• Requisito cada vez mais comum em CRAs high yield

**Fintechs de Crédito B2B:**
• BNPL, antecipação de recebíveis, capital de giro
• Seguro como credit enhancement para captar funding
• API de decisão de crédito integrada à seguradora
• Permite escalar sem capital próprio proporcional

**Banco de Desenvolvimento (BNDES, BRB, Bancos Estaduais):**
• Carteiras de PME com risco alto
• Seguro de crédito como proteção de portfólio
• Redução de provisão para devedores duvidosos (PDD)

**Seguradoras com expertise em serviços financeiros:**
• Allianz Trade (maior base de dados de sacados)
• Coface (forte em carteiras de factoring)
• AIG (estruturas complexas e FIDC)

**A Fairfield** tem modelos específicos para cada tipo de instituição financeira.`},{keywords:["machine learning credito","ia scoring credito","modelos preditivos credito","inteligencia artificial credito"],category:"analytics",answer:`**Machine Learning e IA em Análise de Crédito para Seguros**

**Evolução dos modelos de scoring:**

**Geração 1 — Score Estatístico (logit/probit):**
• Dados históricos + regressão logística
• Variáveis: idade empresa, setor, porte, histórico de pagamento
• Precisão: ~70-75% em prever default

**Geração 2 — Gradient Boosting (XGBoost, LightGBM):**
• Mais variáveis (100+), dados alternativos
• Precisão: ~80-85%
• Usado pela maioria das seguradoras hoje

**Geração 3 — Redes Neurais e Deep Learning:**
• Padrões complexos em dados não estruturados
• Análise de texto (notícias, SCR, processos judiciais)
• Análise de imagem (satélite para agro, obra parada)
• Precisão: ~88-93% em alguns segmentos

**Dados utilizados pelas seguradoras:**

| Fonte | Dados |
|---|---|
| Bureaus (Serasa, SPC) | Score, histórico, protestos |
| Receita Federal | Faturamento (PGDAS), simples nacional |
| Judiciário | Processos, execuções, recuperação judicial |
| Redes sociais/web | Reputação, notícias, avaliações |
| Dados alternativos | Consumo de energia, frota, contratações |

**Impacto no seguro de crédito:**
• Aprovação de limites em segundos (vs. dias)
• Atualização dinâmica de limites (não anual)
• Detecção precoce de deterioração
• Precificação granular (taxa por empresa vs. taxa por setor)

**O SENTINEL** da Fairfield usa modelos de ML para análise de portfólio e otimização de cobertura.`},{keywords:["early warning sinais deterioracao","alertas credito antecipados","sinais alerta devedor","monitoramento credito"],category:"analytics",answer:`**Early Warning Signs — Sinais Antecipados de Deterioração de Crédito**

**Por que monitoramento proativo é crucial?**
O seguro de crédito cobre a **insolvência**, mas a melhor estratégia é identificar a deterioração antes que o sinistro ocorra — permitindo reduzir exposição a tempo.

**Sinais de alerta por categoria:**

**Sinais Financeiros (dados públicos):**
• Atraso em pagamentos de fornecedores (aparece nos bureaus)
• Protestos de títulos (cartório)
• Execuções fiscais (PGE, Receita Federal)
• Dívidas com FGTS/INSS em aberto (CADIN)
• Queda do score Serasa acima de 50 pontos em 90 dias

**Sinais Operacionais:**
• Rotatividade alta de diretores (CVM, Junta Comercial)
• Cancelamento de registros e alvarás
• Demissões em massa (eSocial, CAGED)
• Paralização parcial de operações
• Mudança frequente de endereço fiscal

**Sinais de Mercado:**
• Notícias negativas (Google Alerts, Cision)
• Deterioração de contratos (licitações canceladas)
• Saída de clientes âncora
• Cancelamento de seguros (SUSEP Open Insurance)

**Sinais Comportamentais:**
• Solicitar prorrogação de prazo repetidamente
• Pagar parcialmente (mais do que o habitual)
• Reduzir pedidos sem explicação
• Solicitar crédito em múltiplos fornecedores simultaneamente

**Ação recomendada por nível de alerta:**
• **Alerta amarelo:** Monitorar mais frequente, reduzir prazo
• **Alerta laranja:** Solicitar garantias adicionais, reduzir limite
• **Alerta vermelho:** Suspender vendas a prazo, comunicar seguradora`},{keywords:["analise demonstracoes financeiras subscricao","balanco analise credito","dre analise seguradora","indices financeiros seguro"],category:"analytics",answer:`**Análise de Demonstrações Financeiras para Subscrição**

**O que as seguradoras analisam nos balanços?**

**1. Liquidez:**
• **Liquidez corrente** (AC/PC): > 1,2 (saudável)
• **Liquidez seca** ((AC - Estoques)/PC): > 0,8
• **Caixa e equivalentes:** 30-60 dias de receita é benchmark

**2. Endividamento:**
• **Dívida Líquida/EBITDA:** < 3,0x (confortável); > 4,5x (stress)
• **Dívida Bruta/PL:** < 1,5x
• **Cobertura de juros** (EBITDA/Despesas Financeiras): > 3,0x

**3. Rentabilidade:**
• **Margem EBITDA:** Varia por setor (varejo: 8%; indústria: 15%; SaaS: 30%)
• **Margem líquida:** Sinaliza capacidade de geração de caixa
• **ROE e ROIC:** Eficiência do capital

**4. Ciclo Operacional:**
• **PMR** (Prazo Médio de Recebimento): alto PMR = maior risco de crédito aos clientes
• **PMP** (Prazo Médio de Pagamento): baixo PMP = pressão nos fornecedores
• **PME** (Prazo Médio de Estoques): alto = capital imobilizado

**5. Red Flags que a seguradora identifica:**
• Parecer com ressalva/negativo do auditor
• Variação inexplicável no patrimônio líquido
• Crescimento de receita sem crescimento de caixa
• Goodwill excessivo (risco de impairment)
• Partes relacionadas com valores relevantes

**Quando os dados são de baixa qualidade:**
• Empresas sem auditoria: seguradora usa dados de bureaus + setoriais
• Simples Nacional: usa PGDAS + guias de ISS/ICMS
• Startups: métricas alternativas (GMV, ARR, unit economics)`},{keywords:["country risk assessment","risco pais metodologia","coface dra","allianz agcs risco pais","avaliacao risco pais"],category:"analytics",answer:`**Country Risk Assessment — Metodologia de Avaliação de Risco País**

**O que é avaliação de risco país?**
Processo de análise sistemática dos fatores macroeconômicos, políticos e institucionais que afetam a capacidade de um país honrar obrigações internacionais.

**Principais metodologias:**

**Coface Country Risk Assessment:**
• Escala: A1, A2, A3, A4, B, C, D, E (A1 = melhor)
• Dimensões: Ambiente de negócios + risco de crédito do país
• Atualização: Trimestral
• Brasil (2024): B (risco moderado)

**Allianz Trade Country Risk:**
• Escala: AA, A, BB, B, C, D, E
• Combina risco macroeconômico + ambiente de negócios
• Alertas em tempo real (mudanças geopolíticas)

**Atradius Country Risk:**
• Escala de 1 (muito baixo) a 10 (muito alto)
• Análise setorial por país (não só nacional)

**OCDE Country Risk Classification:**
• Escala 0-7 (0 = melhor)
• Usada por ECAs para precificar prêmio mínimo de exportação
• Brasil: Categoria 3

**Fatores avaliados:**

| Dimensão | Indicadores |
|---|---|
| Macro | PIB, inflação, câmbio, dívida pública |
| Externo | Reservas, balança comercial, dívida externa |
| Político | Estabilidade, qualidade institucional, corrupção |
| Negócios | Ease of doing business, proteção a contratos |
| Bancário | Solidez do sistema financeiro, NPL |

**Impacto no prêmio:**
• País A1 (Alemanha): taxa 0,05-0,15%
• País B (Brasil): taxa 0,20-0,60%
• País D (Angola): taxa 1,5-4,0%
• País E (Venezuela): cobertura negada`},{keywords:["portfolio analytics credito","concentracao risco credito","gestao portfolio seguro","analise carteira seguro"],category:"analytics",answer:`**Portfolio Analytics e Gestão de Concentração de Risco**

**Por que analisar o portfólio, não apenas cada devedor?**
Os riscos individuais se combinam de formas não lineares — uma carteira "boa" pode ter risco sistêmico alto por concentração.

**Métricas de concentração:**

**1. Índice de Herfindahl-Hirschman (HHI):**
• Soma dos quadrados das participações de cada devedor
• HHI < 0,1: Carteira diversificada (bom)
• HHI 0,1-0,25: Concentração moderada
• HHI > 0,25: Alta concentração (risco sistêmico)

**2. Regra 10/80:**
• Se top 10 devedores representam > 80% da exposição: carteira concentrada
• Seguradora pode exigir sublimite por devedor

**3. Concentração Setorial:**
• Exposição em um setor > 30%: risco de crise setorial (pandemia, seca, regulação)
• Recomendado: < 20% por setor

**4. Concentração Geográfica:**
• Devedores na mesma região: risco de eventos climáticos ou políticos regionais

**Ferramentas de análise que a Fairfield usa:**

• **Mapa de calor de exposição:** Visualização por devedor, setor, região
• **Stress testing:** Simulação de default simultâneo (setor, região)
• **Correlation matrix:** Devedores no mesmo grupo econômico ou com mesma supply chain
• **PML dinâmico:** Atualizado com dados em tempo real dos bureaus

**O SENTINEL** oferece dashboard de portfolio analytics integrado — relatório de concentração automático para renovação.

**Dica:** Carteiras mais diversificadas têm prêmio menor — a Fairfield ajuda a estruturar a cobertura para maximizar esse benefício.`},{keywords:["ajuda","help","menu","opcoes","o que voce sabe","o que faz"],category:"ajuda",answer:`Posso te ajudar com uma ampla gama de assuntos sobre **Seguro de Crédito** — sou o oráculo mais completo do mercado brasileiro nessa especialidade.

**Conceitos e Estrutura:**
• O que é Seguro de Crédito e como funciona
• Whole Turnover, Key Buyer, Single Risk, XL
• PMI, POS, AAD, Limites de Crédito, NCC

**Coberturas Avançadas:**
• Clausulados: MPL, PML, Aggregate Limit, Run-off Period
• Contract Frustration, Pre-Credit Period
• Top-Up, Excess Layer, Endorsements

**FIDCs e Operações Estruturadas:**
• Estrutura de FIDC com seguro de crédito
• Credit Enhancement e melhoria de rating
• Supply Chain Finance, Securitização

**Grandes Riscos:**
• Syndicated Cover (acima de USD 50M)
• Resseguro Facultativo
• Project Finance, Infraestrutura
• Commodities Traders, XL Multi-Buyer

**Setores Especializados:**
• Energia Renovável, Agribusiness, Automotivo
• Fintechs, Factorings, Securitizadoras
• Trade Finance, Forfaiting

**Legislação:**
• CNSP 432/2021, Open Insurance, Sandbox SUSEP
• Marco Legal das Garantias (Lei 14.711/2023)
• Basileia III e capital regulatório

**Análise e Inteligência:**
• Machine Learning e scoring avançado
• Early Warning Signs
• Country Risk Assessment, Portfolio Analytics

**Seguradoras:**
• Allianz Trade, Coface, Atradius
• CESCE, AIG, AVLA, Chubb, SBCE

Sobre qual tema posso te orientar?`}];function cu(i){return i.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\w\s]/g,"").trim()}function Ig(i,d=[]){const l=cu(i),m=l.split(/\s+/).filter(g=>g.length>1);let c=0,p=null;const f=d.filter(g=>g.category).slice(-5).map(g=>g.category);for(const g of Dg){let v=0;for(const y of g.keywords){const k=cu(y),C=k.split(/\s+/);l.includes(k)&&(v+=C.length*3);for(const P of C)for(const F of m)(F.startsWith(P)||P.startsWith(F))&&(v+=1)}v>0&&f.includes(g.category)&&(v+=.5),v>c&&(c=v,p=g)}return c>=1&&p?{answer:p.answer,category:p.category}:{answer:`Desculpe, não encontrei informações específicas sobre isso na minha base de conhecimento.

Posso te ajudar com:
• **Conceitos** de Seguro de Crédito
• **Coberturas** (Whole Turnover, Key Buyer, etc.)
• **Seguradoras** (Allianz Trade, Coface, Atradius, etc.)
• **Preços e taxas**
• **Legislação** (SUSEP, leis)
• **Processo** de contratação e sinistro

Tente reformular sua pergunta ou escolha um dos temas acima!

Ou, se preferir, clique em **"Fale com um especialista"** para conversar com nossa equipe.`,category:"fallback"}}function Fg(i){const d=i.split(`
`),l=[];let m=[],c=0;function p(g){const v=[],y=/\*\*(.+?)\*\*/g;let k=0,C;for(;(C=y.exec(g))!==null;)C.index>k&&v.push(g.slice(k,C.index)),v.push(o.jsx("strong",{className:"font-semibold text-white",children:C[1]},`b-${C.index}`)),k=y.lastIndex;return k<g.length&&v.push(g.slice(k)),v.length>0?v:[g]}function f(){if(m.length===0)return;const g=m[0].split("|").filter(y=>y.trim()),v=m.slice(2);l.push(o.jsx("div",{className:"overflow-x-auto my-2",children:o.jsxs("table",{className:"w-full text-xs border-collapse",children:[o.jsx("thead",{children:o.jsx("tr",{children:g.map((y,k)=>o.jsx("th",{className:"border border-white/10 px-2 py-1 text-left text-white/80 bg-white/[0.04]",children:p(y.trim())},k))})}),o.jsx("tbody",{children:v.map((y,k)=>{const C=y.split("|").filter(P=>P.trim());return o.jsx("tr",{children:C.map((P,F)=>o.jsx("td",{className:"border border-white/10 px-2 py-1 text-white/60",children:p(P.trim())},F))},k)})})]})},`table-${c++}`)),m=[]}for(let g=0;g<d.length;g++){const v=d[g];if(v.includes("|")&&v.trim().startsWith("|")){m.push(v),(g===d.length-1||!d[g+1].includes("|")||!d[g+1].trim().startsWith("|"))&&f();continue}else m.length>0&&f();if(v.trim()===""){l.push(o.jsx("div",{className:"h-2"},`br-${g}`));continue}if(v.trim().startsWith("• ")||v.trim().startsWith("- ")){const k=v.trim().replace(/^[•\-]\s*/,"");l.push(o.jsxs("div",{className:"flex gap-2 ml-2 my-0.5",children:[o.jsx("span",{className:"text-sentinel mt-0.5",children:"•"}),o.jsx("span",{children:p(k)})]},`li-${g}`));continue}const y=v.trim().match(/^(\d+)\.\s+(.*)/);if(y){l.push(o.jsxs("div",{className:"flex gap-2 ml-2 my-0.5",children:[o.jsxs("span",{className:"text-sentinel/70 font-mono text-xs mt-0.5",children:[y[1],"."]}),o.jsx("span",{children:p(y[2])})]},`ol-${g}`));continue}if(v.trim().match(/^\*\*.*\*\*$/)){l.push(o.jsx("div",{className:"mt-2 mb-1",children:p(v.trim())},`h-${g}`));continue}l.push(o.jsx("div",{className:"my-0.5",children:p(v)},`p-${g}`))}return m.length>0&&f(),l}const _g=`Olá! Eu sou o **iCover** — o **Oráculo de Inteligência em Seguro de Crédito** mais completo do mercado brasileiro. 🛡️

Fui desenvolvido pela **Fairfield** com o conhecimento mais profundo e abrangente sobre seguros financeiros do Brasil.

**Minha expertise abrange:**
• Clausulados completos de todas as seguradoras
• Estruturação para **FIDCs** e operações estruturadas
• Estratégias inovadoras e soluções sob medida
• Legislação e regulamentação (SUSEP, CVM, CNSP)
• Análise de grandes riscos e operações complexas
• 7 seguradoras comparadas em detalhes

Pergunte-me qualquer coisa sobre **Seguro de Crédito** — eu tenho a resposta. 🎯`,Tg=["Como posso garantir minhas vendas com o Seguro de Crédito?","Quanto custa um Seguro de Crédito?","Como funciona seguro de crédito para FIDCs?","Quais as cláusulas mais importantes da apólice?","Como funciona para grandes riscos acima de R$ 50M?","Quais seguradoras operam no Brasil?"];function uu(){bs();const[i,d]=S.useState([{id:1,sender:"bot",text:_g,category:"saudacao"}]),[l,m]=S.useState(""),[c,p]=S.useState(!1),[f,g]=S.useState(!0),[v,y]=S.useState(!1),[k,C]=S.useState([{id:1,sender:"bot",text:"Olá! Sou da equipe de especialistas da Fairfield. Como posso te ajudar?"}]),[P,F]=S.useState(""),_=S.useRef(null),z=S.useRef(null),A=S.useRef(null),O=S.useRef(null);S.useEffect(()=>{var H;(H=_.current)==null||H.scrollIntoView({behavior:"smooth"})},[i,c]),S.useEffect(()=>{var H;(H=O.current)==null||H.scrollIntoView({behavior:"smooth"})},[k]);const V=S.useCallback(H=>{const ne=(H||l).trim();if(!ne)return;const ue={id:Date.now(),sender:"user",text:ne};d(ge=>[...ge,ue]),m(""),g(!1),p(!0),setTimeout(()=>{const{answer:ge,category:$e}=Ig(ne,i),Fe={id:Date.now()+1,sender:"bot",text:ge,category:$e};d(Pe=>[...Pe,Fe]),p(!1)},800+Math.random()*600)},[l,i]),D=H=>{H.key==="Enter"&&!H.shiftKey&&(H.preventDefault(),V())},$=H=>{V(H)},Z=()=>{const H=P.trim();if(!H)return;const ne={id:Date.now(),sender:"user",text:H};C(ue=>[...ue,ne]),F(""),setTimeout(()=>{const ue={id:Date.now()+1,sender:"bot",text:"Obrigado pela mensagem! Um de nossos especialistas vai te responder em instantes."};C(ge=>[...ge,ue])},1200)},J=H=>{H.key==="Enter"&&!H.shiftKey&&(H.preventDefault(),Z())};return o.jsxs("div",{className:"min-h-screen bg-navy flex flex-col",children:[o.jsx("style",{children:Lg}),o.jsx("header",{className:"bg-navy-surface border-b border-white/[0.06] px-4 py-3",children:o.jsxs("div",{className:"max-w-3xl mx-auto flex items-center gap-3",children:[o.jsx(tr,{to:"/",className:"text-white/40 hover:text-white/70 transition-colors",children:o.jsx(Rg,{})}),o.jsxs("div",{className:"flex items-center gap-1.5",children:[o.jsx(ir,{size:22}),o.jsx("span",{className:"text-[10px] font-mono text-sentinel/60 tracking-widest uppercase",children:"SENTINEL"})]}),o.jsx("div",{className:"w-px h-6 bg-white/10 mx-1"}),o.jsx("div",{className:"w-9 h-9 rounded-full bg-gradient-to-br from-sentinel/20 to-sentinel/5 border border-sentinel/30 flex items-center justify-center",children:o.jsx(Mg,{})}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("h1",{className:"text-sm font-semibold text-white",children:"iCover"}),o.jsxs("span",{className:"flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20",children:[o.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-green"}),o.jsx("span",{className:"text-[9px] text-emerald-400 font-medium",children:"Online"})]})]}),o.jsx("p",{className:"text-[11px] text-white/40 truncate",children:"IA Especialista em Seguro de Crédito"})]}),o.jsxs(tr,{to:"/cotacao/interno",className:"hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sentinel/10 border border-sentinel/20 text-sentinel text-xs font-medium hover:bg-sentinel/20 transition-colors",children:[o.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),o.jsx("polyline",{points:"14 2 14 8 20 8"}),o.jsx("line",{x1:"12",y1:"18",x2:"12",y2:"12"}),o.jsx("line",{x1:"9",y1:"15",x2:"15",y2:"15"})]}),"Fazer Cotação"]})]})}),o.jsx("main",{className:"flex-1 overflow-y-auto px-4 py-6",children:o.jsxs("div",{className:"max-w-3xl mx-auto space-y-4",children:[i.map(H=>o.jsxs("div",{className:`flex gap-2.5 msg-enter ${H.sender==="user"?"justify-end":"justify-start"}`,children:[H.sender==="bot"&&o.jsx(du,{}),o.jsx("div",{className:`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${H.sender==="bot"?"bg-white/[0.03] border border-white/[0.06] text-white/70 rounded-tl-md":"bg-sentinel/15 border border-sentinel/20 text-white rounded-tr-md"}`,children:H.sender==="bot"?Fg(H.text):H.text})]},H.id)),f&&i.length===1&&o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 fade-in",children:Tg.map((H,ne)=>o.jsx("button",{onClick:()=>$(H),className:"text-left px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-white/50 text-sm hover:bg-white/[0.05] hover:text-white/70 hover:border-white/[0.12] transition-all duration-200",children:H},ne))}),c&&o.jsxs("div",{className:"flex gap-2.5 justify-start msg-enter",children:[o.jsx(du,{}),o.jsxs("div",{className:"bg-white/[0.03] border border-white/[0.06] rounded-2xl rounded-tl-md px-4 py-3 flex items-center gap-1.5",children:[o.jsx("span",{className:"typing-dot w-2 h-2 rounded-full bg-sentinel/60 inline-block"}),o.jsx("span",{className:"typing-dot w-2 h-2 rounded-full bg-sentinel/60 inline-block"}),o.jsx("span",{className:"typing-dot w-2 h-2 rounded-full bg-sentinel/60 inline-block"})]})]}),o.jsx("div",{ref:_})]})}),o.jsx("footer",{className:"border-t border-white/[0.06] bg-navy-surface px-4 py-3",children:o.jsxs("div",{className:"max-w-3xl mx-auto",children:[o.jsxs("div",{className:"flex gap-2 items-end",children:[o.jsx("textarea",{ref:z,value:l,onChange:H=>m(H.target.value),onKeyDown:D,placeholder:"Pergunte qualquer coisa sobre Seguro de Crédito...",rows:1,className:"flex-1 bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 resize-none focus:outline-none focus:border-sentinel/30 focus:ring-1 focus:ring-sentinel/10 transition-colors",style:{minHeight:"42px",maxHeight:"120px"},onInput:H=>{H.target.style.height="42px",H.target.style.height=Math.min(H.target.scrollHeight,120)+"px"}}),o.jsx("button",{onClick:()=>V(),disabled:!l.trim()||c,className:"w-10 h-10 rounded-xl bg-sentinel/20 border border-sentinel/30 text-sentinel flex items-center justify-center hover:bg-sentinel/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0",children:o.jsx(nu,{})})]}),o.jsxs("button",{onClick:()=>y(!0),className:"mt-3 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium hover:bg-emerald-500/20 transition-colors headphone-pulse",children:[o.jsx(lu,{size:16}),"Fale com um de nossos especialistas"]}),o.jsx("p",{className:"text-center text-[10px] text-white/20 mt-3 font-mono",children:"Powered by SENTINEL | Fairfield"})]})}),v&&o.jsx("div",{className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 fade-in",children:o.jsxs("div",{className:"w-full sm:w-[420px] max-h-[80vh] bg-navy-surface border border-white/[0.08] rounded-t-2xl sm:rounded-2xl flex flex-col overflow-hidden shadow-2xl",children:[o.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-emerald-500/5",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"w-9 h-9 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400",children:o.jsx(lu,{size:18})}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-sm font-semibold text-white",children:"Suporte Fairfield"}),o.jsxs("div",{className:"flex items-center gap-1.5",children:[o.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-green"}),o.jsx("span",{className:"text-[10px] text-emerald-400/70",children:"Especialistas online"})]})]})]}),o.jsx("button",{onClick:()=>y(!1),className:"w-8 h-8 rounded-lg flex items-center justify-center text-white/30 hover:text-white/60 hover:bg-white/5 transition-colors",children:o.jsx(zg,{})})]}),o.jsxs("div",{className:"flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-[200px] max-h-[50vh]",children:[k.map(H=>o.jsx("div",{className:`flex msg-enter ${H.sender==="user"?"justify-end":"justify-start"}`,children:o.jsx("div",{className:`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm ${H.sender==="bot"?"bg-emerald-500/10 border border-emerald-500/15 text-white/70 rounded-tl-md":"bg-white/[0.06] border border-white/[0.08] text-white rounded-tr-md"}`,children:H.text})},H.id)),o.jsx("div",{ref:O})]}),o.jsxs("div",{className:"border-t border-white/[0.06] px-4 py-3 flex gap-2",children:[o.jsx("input",{ref:A,type:"text",value:P,onChange:H=>F(H.target.value),onKeyDown:J,placeholder:"Digite sua mensagem...",className:"flex-1 bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/30 transition-colors"}),o.jsx("button",{onClick:Z,disabled:!P.trim(),className:"w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center hover:bg-emerald-500/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0",children:o.jsx(nu,{})})]})]})})]})}function Og(){const[i]=X0(),d=Ao(),{user:l,ndaAccepted:m,logout:c}=Lo(),p=i.get("admin")==="1",f=d.pathname==="/",g=d.pathname.startsWith("/cotacao"),v=d.pathname==="/icover",[y,k]=S.useState(!1);S.useEffect(()=>{function _(){k(!0)}function z(){k(!1)}return window.addEventListener("sentinel-started",_),window.addEventListener("sentinel-reset",z),()=>{window.removeEventListener("sentinel-started",_),window.removeEventListener("sentinel-reset",z)}},[]),S.useEffect(()=>{f||k(!1)},[f]);const C=g&&!l,P=g&&l&&!m,F=g||P;return v?o.jsx(Jc,{children:o.jsx(to,{path:"/icover",element:o.jsx(uu,{})})}):o.jsxs("div",{className:"min-h-screen flex flex-col bg-navy",children:[o.jsx("header",{className:"sticky top-0 z-50 border-b border-white/[0.06] bg-navy/80 backdrop-blur-xl",children:o.jsx("div",{className:"max-w-7xl mx-auto px-3 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"flex items-center justify-between h-14 sm:h-16",children:[o.jsxs(wn,{to:"/",className:"flex items-center gap-2 sm:gap-3 min-w-0 group",children:[o.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2 flex-shrink-0",children:[o.jsx("span",{className:"hidden sm:block text-[10px] text-white/30 font-medium tracking-wide uppercase",children:"Fairfield"}),o.jsx("span",{className:"hidden sm:block text-white/10 mx-1",children:"|"}),o.jsxs("div",{className:"relative",children:[o.jsx(ir,{size:32}),o.jsx("div",{className:"absolute inset-0 bg-sentinel/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"})]}),o.jsx("h1",{className:"text-lg sm:text-xl font-bold tracking-tight",children:o.jsx("span",{className:"text-sentinel",children:"SENTINEL"})})]}),o.jsx("span",{className:"hidden lg:block text-[10px] text-white/25 border-l border-white/10 pl-3 leading-tight uppercase tracking-wider",children:"Seguro de Credito"})]}),o.jsxs("nav",{className:"flex items-center gap-1 sm:gap-2",children:[f&&!y&&o.jsx("a",{href:"#iniciar",onClick:_=>{_.preventDefault(),window.dispatchEvent(new CustomEvent("sentinel-iniciar"))},className:"px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all bg-gradient-to-r from-sentinel-dark to-sentinel text-navy-dark hover:shadow-lg hover:shadow-sentinel/20 hover:scale-[1.02] cursor-pointer",children:"Iniciar Cotacao"}),l&&!p&&o.jsxs("div",{className:"hidden sm:flex items-center gap-2 text-xs text-white/40 border-l border-white/10 pl-3 ml-1",children:[o.jsx("div",{className:"h-6 w-6 rounded-full bg-sentinel/15 border border-sentinel/25 flex items-center justify-center",children:o.jsx("span",{className:"text-[10px] font-bold text-sentinel",children:l.nome.charAt(0)})}),o.jsx("span",{className:"text-white/60 font-medium",children:l.nome.split(" ")[0]}),o.jsx("button",{onClick:c,className:"text-white/25 hover:text-rose-400 transition-colors",title:"Sair",children:o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})})]}),p&&o.jsxs(o.Fragment,{children:[o.jsx(wn,{to:"/dashboard?admin=1",className:({isActive:_})=>`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${_?"bg-sentinel/15 text-sentinel border border-sentinel/25":"text-white/40 hover:text-white hover:bg-white/5"}`,children:"Dashboard"}),o.jsx(wn,{to:"/sla?admin=1",className:({isActive:_})=>`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${_?"bg-sentinel/15 text-sentinel border border-sentinel/25":"text-white/40 hover:text-white hover:bg-white/5"}`,children:"SLA"})]})]})]})})}),o.jsx("main",{className:`flex-1 ${F?"bg-white light-theme":"bg-grid"}`,children:C?o.jsx(ag,{}):P?o.jsx(rg,{}):o.jsxs(Jc,{children:[o.jsx(to,{path:"/",element:o.jsx(Kf,{})}),o.jsx(to,{path:"/icover",element:o.jsx(uu,{})}),o.jsx(to,{path:"/cotacao/interno",element:o.jsx(bg,{})}),o.jsx(to,{path:"/cotacao/externo",element:o.jsx(Sg,{})}),o.jsx(to,{path:"/dashboard",element:o.jsx(Ng,{})}),o.jsx(to,{path:"/sla",element:o.jsx(Eg,{})})]})}),o.jsx("footer",{className:"py-8 border-t border-white/[0.06]",children:o.jsx("div",{className:"max-w-7xl mx-auto px-4",children:o.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[o.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[o.jsx("a",{href:"https://www.fairfield.com.br",target:"_blank",rel:"noopener noreferrer",className:"font-semibold text-white/60 hover:text-sentinel transition-colors text-sm",children:"Fairfield"}),o.jsx("span",{className:"text-white/10",children:"|"}),o.jsx("span",{className:"font-bold text-sentinel tracking-tight text-sm",children:"SENTINEL"}),o.jsx("span",{className:"text-white/25 text-xs",children:"Seguro de Credito"}),o.jsx("span",{className:"text-white/10",children:"·"}),o.jsx("span",{className:"font-bold text-white/60 tracking-tight text-sm",children:"COVENANT"}),o.jsx("span",{className:"text-white/25 text-xs",children:"Seguro Garantia"})]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"text-[10px] text-white/20",children:"SUSEP 20.2036457.1"}),o.jsx("span",{className:"text-white/10",children:"|"}),o.jsxs("p",{className:"text-xs text-white/20",children:["© ",new Date().getFullYear()," Fairfield. Todos os direitos reservados."]})]})]})})})]})}function $g(){return o.jsx(G0,{children:o.jsxs(Vf,{children:[o.jsx(Bf,{position:"top-right",toastOptions:{duration:4e3,style:{borderRadius:"12px",background:"#111833",color:"#e2e8f0",fontSize:"13px",border:"1px solid rgba(255,255,255,0.06)"}}}),o.jsx(Og,{})]})})}Qp.createRoot(document.getElementById("root")).render(o.jsx(pu.StrictMode,{children:o.jsx($g,{})}));

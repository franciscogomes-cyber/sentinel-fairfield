function Vp(s,n){for(var l=0;l<n.length;l++){const u=n[l];if(typeof u!="string"&&!Array.isArray(u)){for(const m in u)if(m!=="default"&&!(m in s)){const c=Object.getOwnPropertyDescriptor(u,m);c&&Object.defineProperty(s,m,c.get?c:{enumerable:!0,get:()=>u[m]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))u(m);new MutationObserver(m=>{for(const c of m)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&u(f)}).observe(document,{childList:!0,subtree:!0});function l(m){const c={};return m.integrity&&(c.integrity=m.integrity),m.referrerPolicy&&(c.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?c.credentials="include":m.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function u(m){if(m.ep)return;m.ep=!0;const c=l(m);fetch(m.href,c)}})();function vu(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Sn={exports:{}},Qr={},wn={exports:{}},ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tc;function Up(){if(Tc)return ve;Tc=1;var s=Symbol.for("react.element"),n=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),j=Symbol.iterator;function P(N){return N===null||typeof N!="object"?null:(N=j&&N[j]||N["@@iterator"],typeof N=="function"?N:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,D={};function L(N,_,re){this.props=N,this.context=_,this.refs=D,this.updater=re||M}L.prototype.isReactComponent={},L.prototype.setState=function(N,_){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,_,"setState")},L.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function B(){}B.prototype=L.prototype;function O(N,_,re){this.props=N,this.context=_,this.refs=D,this.updater=re||M}var z=O.prototype=new B;z.constructor=O,F(z,L.prototype),z.isPureReactComponent=!0;var Y=Array.isArray,Q=Object.prototype.hasOwnProperty,ne={current:null},$={key:!0,ref:!0,__self:!0,__source:!0};function me(N,_,re){var W,Z={},de=null,le=null;if(_!=null)for(W in _.ref!==void 0&&(le=_.ref),_.key!==void 0&&(de=""+_.key),_)Q.call(_,W)&&!$.hasOwnProperty(W)&&(Z[W]=_[W]);var he=arguments.length-2;if(he===1)Z.children=re;else if(1<he){for(var Pe=Array(he),ta=0;ta<he;ta++)Pe[ta]=arguments[ta+2];Z.children=Pe}if(N&&N.defaultProps)for(W in he=N.defaultProps,he)Z[W]===void 0&&(Z[W]=he[W]);return{$$typeof:s,type:N,key:de,ref:le,props:Z,_owner:ne.current}}function xe(N,_){return{$$typeof:s,type:N.type,key:_,ref:N.ref,props:N.props,_owner:N._owner}}function pe(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function H(N){var _={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(re){return _[re]})}var X=/\/+/g;function K(N,_){return typeof N=="object"&&N!==null&&N.key!=null?H(""+N.key):_.toString(36)}function se(N,_,re,W,Z){var de=typeof N;(de==="undefined"||de==="boolean")&&(N=null);var le=!1;if(N===null)le=!0;else switch(de){case"string":case"number":le=!0;break;case"object":switch(N.$$typeof){case s:case n:le=!0}}if(le)return le=N,Z=Z(le),N=W===""?"."+K(le,0):W,Y(Z)?(re="",N!=null&&(re=N.replace(X,"$&/")+"/"),se(Z,_,re,"",function(ta){return ta})):Z!=null&&(pe(Z)&&(Z=xe(Z,re+(!Z.key||le&&le.key===Z.key?"":(""+Z.key).replace(X,"$&/")+"/")+N)),_.push(Z)),1;if(le=0,W=W===""?".":W+":",Y(N))for(var he=0;he<N.length;he++){de=N[he];var Pe=W+K(de,he);le+=se(de,_,re,Pe,Z)}else if(Pe=P(N),typeof Pe=="function")for(N=Pe.call(N),he=0;!(de=N.next()).done;)de=de.value,Pe=W+K(de,he++),le+=se(de,_,re,Pe,Z);else if(de==="object")throw _=String(N),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.");return le}function ge(N,_,re){if(N==null)return N;var W=[],Z=0;return se(N,W,"","",function(de){return _.call(re,de,Z++)}),W}function h(N){if(N._status===-1){var _=N._result;_=_(),_.then(function(re){(N._status===0||N._status===-1)&&(N._status=1,N._result=re)},function(re){(N._status===0||N._status===-1)&&(N._status=2,N._result=re)}),N._status===-1&&(N._status=0,N._result=_)}if(N._status===1)return N._result.default;throw N._result}var C={current:null},E={transition:null},T={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:E,ReactCurrentOwner:ne};function U(){throw Error("act(...) is not supported in production builds of React.")}return ve.Children={map:ge,forEach:function(N,_,re){ge(N,function(){_.apply(this,arguments)},re)},count:function(N){var _=0;return ge(N,function(){_++}),_},toArray:function(N){return ge(N,function(_){return _})||[]},only:function(N){if(!pe(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ve.Component=L,ve.Fragment=l,ve.Profiler=m,ve.PureComponent=O,ve.StrictMode=u,ve.Suspense=x,ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,ve.act=U,ve.cloneElement=function(N,_,re){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var W=F({},N.props),Z=N.key,de=N.ref,le=N._owner;if(_!=null){if(_.ref!==void 0&&(de=_.ref,le=ne.current),_.key!==void 0&&(Z=""+_.key),N.type&&N.type.defaultProps)var he=N.type.defaultProps;for(Pe in _)Q.call(_,Pe)&&!$.hasOwnProperty(Pe)&&(W[Pe]=_[Pe]===void 0&&he!==void 0?he[Pe]:_[Pe])}var Pe=arguments.length-2;if(Pe===1)W.children=re;else if(1<Pe){he=Array(Pe);for(var ta=0;ta<Pe;ta++)he[ta]=arguments[ta+2];W.children=he}return{$$typeof:s,type:N.type,key:Z,ref:de,props:W,_owner:le}},ve.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:c,_context:N},N.Consumer=N},ve.createElement=me,ve.createFactory=function(N){var _=me.bind(null,N);return _.type=N,_},ve.createRef=function(){return{current:null}},ve.forwardRef=function(N){return{$$typeof:g,render:N}},ve.isValidElement=pe,ve.lazy=function(N){return{$$typeof:S,_payload:{_status:-1,_result:N},_init:h}},ve.memo=function(N,_){return{$$typeof:b,type:N,compare:_===void 0?null:_}},ve.startTransition=function(N){var _=E.transition;E.transition={};try{N()}finally{E.transition=_}},ve.unstable_act=U,ve.useCallback=function(N,_){return C.current.useCallback(N,_)},ve.useContext=function(N){return C.current.useContext(N)},ve.useDebugValue=function(){},ve.useDeferredValue=function(N){return C.current.useDeferredValue(N)},ve.useEffect=function(N,_){return C.current.useEffect(N,_)},ve.useId=function(){return C.current.useId()},ve.useImperativeHandle=function(N,_,re){return C.current.useImperativeHandle(N,_,re)},ve.useInsertionEffect=function(N,_){return C.current.useInsertionEffect(N,_)},ve.useLayoutEffect=function(N,_){return C.current.useLayoutEffect(N,_)},ve.useMemo=function(N,_){return C.current.useMemo(N,_)},ve.useReducer=function(N,_,re){return C.current.useReducer(N,_,re)},ve.useRef=function(N){return C.current.useRef(N)},ve.useState=function(N){return C.current.useState(N)},ve.useSyncExternalStore=function(N,_,re){return C.current.useSyncExternalStore(N,_,re)},ve.useTransition=function(){return C.current.useTransition()},ve.version="18.3.1",ve}var $c;function $n(){return $c||($c=1,wn.exports=Up()),wn.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bc;function Wp(){if(Bc)return Qr;Bc=1;var s=$n(),n=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,m=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function f(g,x,b){var S,j={},P=null,M=null;b!==void 0&&(P=""+b),x.key!==void 0&&(P=""+x.key),x.ref!==void 0&&(M=x.ref);for(S in x)u.call(x,S)&&!c.hasOwnProperty(S)&&(j[S]=x[S]);if(g&&g.defaultProps)for(S in x=g.defaultProps,x)j[S]===void 0&&(j[S]=x[S]);return{$$typeof:n,type:g,key:P,ref:M,props:j,_owner:m.current}}return Qr.Fragment=l,Qr.jsx=f,Qr.jsxs=f,Qr}var qc;function Gp(){return qc||(qc=1,Sn.exports=Wp()),Sn.exports}var o=Gp(),v=$n();const bu=vu(v),Hp=Vp({__proto__:null,default:bu},[v]);var us={},Nn={exports:{}},ra={},kn={exports:{}},Pn={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vc;function Qp(){return Vc||(Vc=1,(function(s){function n(E,T){var U=E.length;E.push(T);e:for(;0<U;){var N=U-1>>>1,_=E[N];if(0<m(_,T))E[N]=T,E[U]=_,U=N;else break e}}function l(E){return E.length===0?null:E[0]}function u(E){if(E.length===0)return null;var T=E[0],U=E.pop();if(U!==T){E[0]=U;e:for(var N=0,_=E.length,re=_>>>1;N<re;){var W=2*(N+1)-1,Z=E[W],de=W+1,le=E[de];if(0>m(Z,U))de<_&&0>m(le,Z)?(E[N]=le,E[de]=U,N=de):(E[N]=Z,E[W]=U,N=W);else if(de<_&&0>m(le,U))E[N]=le,E[de]=U,N=de;else break e}}return T}function m(E,T){var U=E.sortIndex-T.sortIndex;return U!==0?U:E.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,g=f.now();s.unstable_now=function(){return f.now()-g}}var x=[],b=[],S=1,j=null,P=3,M=!1,F=!1,D=!1,L=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function z(E){for(var T=l(b);T!==null;){if(T.callback===null)u(b);else if(T.startTime<=E)u(b),T.sortIndex=T.expirationTime,n(x,T);else break;T=l(b)}}function Y(E){if(D=!1,z(E),!F)if(l(x)!==null)F=!0,h(Q);else{var T=l(b);T!==null&&C(Y,T.startTime-E)}}function Q(E,T){F=!1,D&&(D=!1,B(me),me=-1),M=!0;var U=P;try{for(z(T),j=l(x);j!==null&&(!(j.expirationTime>T)||E&&!H());){var N=j.callback;if(typeof N=="function"){j.callback=null,P=j.priorityLevel;var _=N(j.expirationTime<=T);T=s.unstable_now(),typeof _=="function"?j.callback=_:j===l(x)&&u(x),z(T)}else u(x);j=l(x)}if(j!==null)var re=!0;else{var W=l(b);W!==null&&C(Y,W.startTime-T),re=!1}return re}finally{j=null,P=U,M=!1}}var ne=!1,$=null,me=-1,xe=5,pe=-1;function H(){return!(s.unstable_now()-pe<xe)}function X(){if($!==null){var E=s.unstable_now();pe=E;var T=!0;try{T=$(!0,E)}finally{T?K():(ne=!1,$=null)}}else ne=!1}var K;if(typeof O=="function")K=function(){O(X)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,ge=se.port2;se.port1.onmessage=X,K=function(){ge.postMessage(null)}}else K=function(){L(X,0)};function h(E){$=E,ne||(ne=!0,K())}function C(E,T){me=L(function(){E(s.unstable_now())},T)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(E){E.callback=null},s.unstable_continueExecution=function(){F||M||(F=!0,h(Q))},s.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xe=0<E?Math.floor(1e3/E):5},s.unstable_getCurrentPriorityLevel=function(){return P},s.unstable_getFirstCallbackNode=function(){return l(x)},s.unstable_next=function(E){switch(P){case 1:case 2:case 3:var T=3;break;default:T=P}var U=P;P=T;try{return E()}finally{P=U}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(E,T){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var U=P;P=E;try{return T()}finally{P=U}},s.unstable_scheduleCallback=function(E,T,U){var N=s.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?N+U:N):U=N,E){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=U+_,E={id:S++,callback:T,priorityLevel:E,startTime:U,expirationTime:_,sortIndex:-1},U>N?(E.sortIndex=U,n(b,E),l(x)===null&&E===l(b)&&(D?(B(me),me=-1):D=!0,C(Y,U-N))):(E.sortIndex=_,n(x,E),F||M||(F=!0,h(Q))),E},s.unstable_shouldYield=H,s.unstable_wrapCallback=function(E){var T=P;return function(){var U=P;P=T;try{return E.apply(this,arguments)}finally{P=U}}}})(Pn)),Pn}var Uc;function Jp(){return Uc||(Uc=1,kn.exports=Qp()),kn.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wc;function Kp(){if(Wc)return ra;Wc=1;var s=$n(),n=Jp();function l(e){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,m={};function c(e,a){f(e,a),f(e+"Capture",a)}function f(e,a){for(m[e]=a,e=0;e<a.length;e++)u.add(a[e])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),x=Object.prototype.hasOwnProperty,b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,S={},j={};function P(e){return x.call(j,e)?!0:x.call(S,e)?!1:b.test(e)?j[e]=!0:(S[e]=!0,!1)}function M(e,a,r,t){if(r!==null&&r.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return t?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function F(e,a,r,t){if(a===null||typeof a>"u"||M(e,a,r,t))return!0;if(t)return!1;if(r!==null)switch(r.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function D(e,a,r,t,i,d,p){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=t,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=a,this.sanitizeURL=d,this.removeEmptyString=p}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){L[e]=new D(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var a=e[0];L[a]=new D(a,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){L[e]=new D(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){L[e]=new D(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){L[e]=new D(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){L[e]=new D(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){L[e]=new D(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){L[e]=new D(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){L[e]=new D(e,5,!1,e.toLowerCase(),null,!1,!1)});var B=/[\-:]([a-z])/g;function O(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var a=e.replace(B,O);L[a]=new D(a,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var a=e.replace(B,O);L[a]=new D(a,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var a=e.replace(B,O);L[a]=new D(a,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){L[e]=new D(e,1,!1,e.toLowerCase(),null,!1,!1)}),L.xlinkHref=new D("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){L[e]=new D(e,1,!1,e.toLowerCase(),null,!0,!0)});function z(e,a,r,t){var i=L.hasOwnProperty(a)?L[a]:null;(i!==null?i.type!==0:t||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(F(a,r,i,t)&&(r=null),t||i===null?P(a)&&(r===null?e.removeAttribute(a):e.setAttribute(a,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(a=i.attributeName,t=i.attributeNamespace,r===null?e.removeAttribute(a):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,t?e.setAttributeNS(t,a,r):e.setAttribute(a,r))))}var Y=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Q=Symbol.for("react.element"),ne=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),me=Symbol.for("react.strict_mode"),xe=Symbol.for("react.profiler"),pe=Symbol.for("react.provider"),H=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),ge=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),C=Symbol.for("react.offscreen"),E=Symbol.iterator;function T(e){return e===null||typeof e!="object"?null:(e=E&&e[E]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,N;function _(e){if(N===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);N=a&&a[1]||""}return`
`+N+e}var re=!1;function W(e,a){if(!e||re)return"";re=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(I){var t=I}Reflect.construct(e,[],a)}else{try{a.call()}catch(I){t=I}e.call(a.prototype)}else{try{throw Error()}catch(I){t=I}e()}}catch(I){if(I&&t&&typeof I.stack=="string"){for(var i=I.stack.split(`
`),d=t.stack.split(`
`),p=i.length-1,y=d.length-1;1<=p&&0<=y&&i[p]!==d[y];)y--;for(;1<=p&&0<=y;p--,y--)if(i[p]!==d[y]){if(p!==1||y!==1)do if(p--,y--,0>y||i[p]!==d[y]){var w=`
`+i[p].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),w}while(1<=p&&0<=y);break}}}finally{re=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?_(e):""}function Z(e){switch(e.tag){case 5:return _(e.type);case 16:return _("Lazy");case 13:return _("Suspense");case 19:return _("SuspenseList");case 0:case 2:case 15:return e=W(e.type,!1),e;case 11:return e=W(e.type.render,!1),e;case 1:return e=W(e.type,!0),e;default:return""}}function de(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $:return"Fragment";case ne:return"Portal";case xe:return"Profiler";case me:return"StrictMode";case K:return"Suspense";case se:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case H:return(e.displayName||"Context")+".Consumer";case pe:return(e._context.displayName||"Context")+".Provider";case X:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ge:return a=e.displayName||null,a!==null?a:de(e.type)||"Memo";case h:a=e._payload,e=e._init;try{return de(e(a))}catch{}}return null}function le(e){var a=e.type;switch(e.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=a.render,e=e.displayName||e.name||"",a.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(a);case 8:return a===me?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function he(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pe(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function ta(e){var a=Pe(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,a),t=""+e[a];if(!e.hasOwnProperty(a)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,d=r.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return i.call(this)},set:function(p){t=""+p,d.call(this,p)}}),Object.defineProperty(e,a,{enumerable:r.enumerable}),{getValue:function(){return t},setValue:function(p){t=""+p},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function at(e){e._valueTracker||(e._valueTracker=ta(e))}function Wn(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var r=a.getValue(),t="";return e&&(t=Pe(e)?e.checked?"true":"false":e.value),e=t,e!==r?(a.setValue(e),!0):!1}function ot(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ls(e,a){var r=a.checked;return U({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Gn(e,a){var r=a.defaultValue==null?"":a.defaultValue,t=a.checked!=null?a.checked:a.defaultChecked;r=he(a.value!=null?a.value:r),e._wrapperState={initialChecked:t,initialValue:r,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function Hn(e,a){a=a.checked,a!=null&&z(e,"checked",a,!1)}function As(e,a){Hn(e,a);var r=he(a.value),t=a.type;if(r!=null)t==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(t==="submit"||t==="reset"){e.removeAttribute("value");return}a.hasOwnProperty("value")?Rs(e,a.type,r):a.hasOwnProperty("defaultValue")&&Rs(e,a.type,he(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(e.defaultChecked=!!a.defaultChecked)}function Qn(e,a,r){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var t=a.type;if(!(t!=="submit"&&t!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+e._wrapperState.initialValue,r||a===e.value||(e.value=a),e.defaultValue=a}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Rs(e,a,r){(a!=="number"||ot(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var dr=Array.isArray;function Do(e,a,r,t){if(e=e.options,a){a={};for(var i=0;i<r.length;i++)a["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=a.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&t&&(e[r].defaultSelected=!0)}else{for(r=""+he(r),a=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,t&&(e[i].defaultSelected=!0);return}a!==null||e[i].disabled||(a=e[i])}a!==null&&(a.selected=!0)}}function Ms(e,a){if(a.dangerouslySetInnerHTML!=null)throw Error(l(91));return U({},a,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Jn(e,a){var r=a.value;if(r==null){if(r=a.children,a=a.defaultValue,r!=null){if(a!=null)throw Error(l(92));if(dr(r)){if(1<r.length)throw Error(l(93));r=r[0]}a=r}a==null&&(a=""),r=a}e._wrapperState={initialValue:he(r)}}function Kn(e,a){var r=he(a.value),t=he(a.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),a.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),t!=null&&(e.defaultValue=""+t)}function Xn(e){var a=e.textContent;a===e._wrapperState.initialValue&&a!==""&&a!==null&&(e.value=a)}function Yn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zs(e,a){return e==null||e==="http://www.w3.org/1999/xhtml"?Yn(a):e==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var rt,Zn=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,r,t,i){MSApp.execUnsafeLocalFunction(function(){return e(a,r,t,i)})}:e})(function(e,a){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=a;else{for(rt=rt||document.createElement("div"),rt.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=rt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;a.firstChild;)e.appendChild(a.firstChild)}});function cr(e,a){if(a){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=a;return}}e.textContent=a}var ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hu=["Webkit","ms","Moz","O"];Object.keys(ur).forEach(function(e){Hu.forEach(function(a){a=a+e.charAt(0).toUpperCase()+e.substring(1),ur[a]=ur[e]})});function el(e,a,r){return a==null||typeof a=="boolean"||a===""?"":r||typeof a!="number"||a===0||ur.hasOwnProperty(e)&&ur[e]?(""+a).trim():a+"px"}function al(e,a){e=e.style;for(var r in a)if(a.hasOwnProperty(r)){var t=r.indexOf("--")===0,i=el(r,a[r],t);r==="float"&&(r="cssFloat"),t?e.setProperty(r,i):e[r]=i}}var Qu=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ds(e,a){if(a){if(Qu[e]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(l(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(l(61))}if(a.style!=null&&typeof a.style!="object")throw Error(l(62))}}function Is(e,a){if(e.indexOf("-")===-1)return typeof a.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fs=null;function _s(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Os=null,Io=null,Fo=null;function ol(e){if(e=zr(e)){if(typeof Os!="function")throw Error(l(280));var a=e.stateNode;a&&(a=kt(a),Os(e.stateNode,e.type,a))}}function rl(e){Io?Fo?Fo.push(e):Fo=[e]:Io=e}function tl(){if(Io){var e=Io,a=Fo;if(Fo=Io=null,ol(e),a)for(e=0;e<a.length;e++)ol(a[e])}}function sl(e,a){return e(a)}function il(){}var Ts=!1;function nl(e,a,r){if(Ts)return e(a,r);Ts=!0;try{return sl(e,a,r)}finally{Ts=!1,(Io!==null||Fo!==null)&&(il(),tl())}}function mr(e,a){var r=e.stateNode;if(r===null)return null;var t=kt(r);if(t===null)return null;r=t[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(l(231,a,typeof r));return r}var $s=!1;if(g)try{var pr={};Object.defineProperty(pr,"passive",{get:function(){$s=!0}}),window.addEventListener("test",pr,pr),window.removeEventListener("test",pr,pr)}catch{$s=!1}function Ju(e,a,r,t,i,d,p,y,w){var I=Array.prototype.slice.call(arguments,3);try{a.apply(r,I)}catch(V){this.onError(V)}}var fr=!1,tt=null,st=!1,Bs=null,Ku={onError:function(e){fr=!0,tt=e}};function Xu(e,a,r,t,i,d,p,y,w){fr=!1,tt=null,Ju.apply(Ku,arguments)}function Yu(e,a,r,t,i,d,p,y,w){if(Xu.apply(this,arguments),fr){if(fr){var I=tt;fr=!1,tt=null}else throw Error(l(198));st||(st=!0,Bs=I)}}function vo(e){var a=e,r=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(r=a.return),e=a.return;while(e)}return a.tag===3?r:null}function ll(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function dl(e){if(vo(e)!==e)throw Error(l(188))}function Zu(e){var a=e.alternate;if(!a){if(a=vo(e),a===null)throw Error(l(188));return a!==e?null:e}for(var r=e,t=a;;){var i=r.return;if(i===null)break;var d=i.alternate;if(d===null){if(t=i.return,t!==null){r=t;continue}break}if(i.child===d.child){for(d=i.child;d;){if(d===r)return dl(i),e;if(d===t)return dl(i),a;d=d.sibling}throw Error(l(188))}if(r.return!==t.return)r=i,t=d;else{for(var p=!1,y=i.child;y;){if(y===r){p=!0,r=i,t=d;break}if(y===t){p=!0,t=i,r=d;break}y=y.sibling}if(!p){for(y=d.child;y;){if(y===r){p=!0,r=d,t=i;break}if(y===t){p=!0,t=d,r=i;break}y=y.sibling}if(!p)throw Error(l(189))}}if(r.alternate!==t)throw Error(l(190))}if(r.tag!==3)throw Error(l(188));return r.stateNode.current===r?e:a}function cl(e){return e=Zu(e),e!==null?ul(e):null}function ul(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var a=ul(e);if(a!==null)return a;e=e.sibling}return null}var ml=n.unstable_scheduleCallback,pl=n.unstable_cancelCallback,em=n.unstable_shouldYield,am=n.unstable_requestPaint,ze=n.unstable_now,om=n.unstable_getCurrentPriorityLevel,qs=n.unstable_ImmediatePriority,fl=n.unstable_UserBlockingPriority,it=n.unstable_NormalPriority,rm=n.unstable_LowPriority,gl=n.unstable_IdlePriority,nt=null,Pa=null;function tm(e){if(Pa&&typeof Pa.onCommitFiberRoot=="function")try{Pa.onCommitFiberRoot(nt,e,void 0,(e.current.flags&128)===128)}catch{}}var ba=Math.clz32?Math.clz32:nm,sm=Math.log,im=Math.LN2;function nm(e){return e>>>=0,e===0?32:31-(sm(e)/im|0)|0}var lt=64,dt=4194304;function gr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ct(e,a){var r=e.pendingLanes;if(r===0)return 0;var t=0,i=e.suspendedLanes,d=e.pingedLanes,p=r&268435455;if(p!==0){var y=p&~i;y!==0?t=gr(y):(d&=p,d!==0&&(t=gr(d)))}else p=r&~i,p!==0?t=gr(p):d!==0&&(t=gr(d));if(t===0)return 0;if(a!==0&&a!==t&&(a&i)===0&&(i=t&-t,d=a&-a,i>=d||i===16&&(d&4194240)!==0))return a;if((t&4)!==0&&(t|=r&16),a=e.entangledLanes,a!==0)for(e=e.entanglements,a&=t;0<a;)r=31-ba(a),i=1<<r,t|=e[r],a&=~i;return t}function lm(e,a){switch(e){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dm(e,a){for(var r=e.suspendedLanes,t=e.pingedLanes,i=e.expirationTimes,d=e.pendingLanes;0<d;){var p=31-ba(d),y=1<<p,w=i[p];w===-1?((y&r)===0||(y&t)!==0)&&(i[p]=lm(y,a)):w<=a&&(e.expiredLanes|=y),d&=~y}}function Vs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hl(){var e=lt;return lt<<=1,(lt&4194240)===0&&(lt=64),e}function Us(e){for(var a=[],r=0;31>r;r++)a.push(e);return a}function hr(e,a,r){e.pendingLanes|=a,a!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,a=31-ba(a),e[a]=r}function cm(e,a){var r=e.pendingLanes&~a;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=a,e.mutableReadLanes&=a,e.entangledLanes&=a,a=e.entanglements;var t=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-ba(r),d=1<<i;a[i]=0,t[i]=-1,e[i]=-1,r&=~d}}function Ws(e,a){var r=e.entangledLanes|=a;for(e=e.entanglements;r;){var t=31-ba(r),i=1<<t;i&a|e[t]&a&&(e[t]|=a),r&=~i}}var Se=0;function xl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var vl,Gs,bl,yl,Cl,Hs=!1,ut=[],Ga=null,Ha=null,Qa=null,xr=new Map,vr=new Map,Ja=[],um="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jl(e,a){switch(e){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":Ha=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":xr.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":vr.delete(a.pointerId)}}function br(e,a,r,t,i,d){return e===null||e.nativeEvent!==d?(e={blockedOn:a,domEventName:r,eventSystemFlags:t,nativeEvent:d,targetContainers:[i]},a!==null&&(a=zr(a),a!==null&&Gs(a)),e):(e.eventSystemFlags|=t,a=e.targetContainers,i!==null&&a.indexOf(i)===-1&&a.push(i),e)}function mm(e,a,r,t,i){switch(a){case"focusin":return Ga=br(Ga,e,a,r,t,i),!0;case"dragenter":return Ha=br(Ha,e,a,r,t,i),!0;case"mouseover":return Qa=br(Qa,e,a,r,t,i),!0;case"pointerover":var d=i.pointerId;return xr.set(d,br(xr.get(d)||null,e,a,r,t,i)),!0;case"gotpointercapture":return d=i.pointerId,vr.set(d,br(vr.get(d)||null,e,a,r,t,i)),!0}return!1}function Sl(e){var a=bo(e.target);if(a!==null){var r=vo(a);if(r!==null){if(a=r.tag,a===13){if(a=ll(r),a!==null){e.blockedOn=a,Cl(e.priority,function(){bl(r)});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mt(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var r=Js(e.domEventName,e.eventSystemFlags,a[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var t=new r.constructor(r.type,r);Fs=t,r.target.dispatchEvent(t),Fs=null}else return a=zr(r),a!==null&&Gs(a),e.blockedOn=r,!1;a.shift()}return!0}function wl(e,a,r){mt(e)&&r.delete(a)}function pm(){Hs=!1,Ga!==null&&mt(Ga)&&(Ga=null),Ha!==null&&mt(Ha)&&(Ha=null),Qa!==null&&mt(Qa)&&(Qa=null),xr.forEach(wl),vr.forEach(wl)}function yr(e,a){e.blockedOn===a&&(e.blockedOn=null,Hs||(Hs=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,pm)))}function Cr(e){function a(i){return yr(i,e)}if(0<ut.length){yr(ut[0],e);for(var r=1;r<ut.length;r++){var t=ut[r];t.blockedOn===e&&(t.blockedOn=null)}}for(Ga!==null&&yr(Ga,e),Ha!==null&&yr(Ha,e),Qa!==null&&yr(Qa,e),xr.forEach(a),vr.forEach(a),r=0;r<Ja.length;r++)t=Ja[r],t.blockedOn===e&&(t.blockedOn=null);for(;0<Ja.length&&(r=Ja[0],r.blockedOn===null);)Sl(r),r.blockedOn===null&&Ja.shift()}var _o=Y.ReactCurrentBatchConfig,pt=!0;function fm(e,a,r,t){var i=Se,d=_o.transition;_o.transition=null;try{Se=1,Qs(e,a,r,t)}finally{Se=i,_o.transition=d}}function gm(e,a,r,t){var i=Se,d=_o.transition;_o.transition=null;try{Se=4,Qs(e,a,r,t)}finally{Se=i,_o.transition=d}}function Qs(e,a,r,t){if(pt){var i=Js(e,a,r,t);if(i===null)mi(e,a,t,ft,r),jl(e,t);else if(mm(i,e,a,r,t))t.stopPropagation();else if(jl(e,t),a&4&&-1<um.indexOf(e)){for(;i!==null;){var d=zr(i);if(d!==null&&vl(d),d=Js(e,a,r,t),d===null&&mi(e,a,t,ft,r),d===i)break;i=d}i!==null&&t.stopPropagation()}else mi(e,a,t,null,r)}}var ft=null;function Js(e,a,r,t){if(ft=null,e=_s(t),e=bo(e),e!==null)if(a=vo(e),a===null)e=null;else if(r=a.tag,r===13){if(e=ll(a),e!==null)return e;e=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null);return ft=e,null}function Nl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(om()){case qs:return 1;case fl:return 4;case it:case rm:return 16;case gl:return 536870912;default:return 16}default:return 16}}var Ka=null,Ks=null,gt=null;function kl(){if(gt)return gt;var e,a=Ks,r=a.length,t,i="value"in Ka?Ka.value:Ka.textContent,d=i.length;for(e=0;e<r&&a[e]===i[e];e++);var p=r-e;for(t=1;t<=p&&a[r-t]===i[d-t];t++);return gt=i.slice(e,1<t?1-t:void 0)}function ht(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function xt(){return!0}function Pl(){return!1}function sa(e){function a(r,t,i,d,p){this._reactName=r,this._targetInst=i,this.type=t,this.nativeEvent=d,this.target=p,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(r=e[y],this[y]=r?r(d):d[y]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?xt:Pl,this.isPropagationStopped=Pl,this}return U(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=xt)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=xt)},persist:function(){},isPersistent:xt}),a}var Oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xs=sa(Oo),jr=U({},Oo,{view:0,detail:0}),hm=sa(jr),Ys,Zs,Sr,vt=U({},jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ai,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sr&&(Sr&&e.type==="mousemove"?(Ys=e.screenX-Sr.screenX,Zs=e.screenY-Sr.screenY):Zs=Ys=0,Sr=e),Ys)},movementY:function(e){return"movementY"in e?e.movementY:Zs}}),El=sa(vt),xm=U({},vt,{dataTransfer:0}),vm=sa(xm),bm=U({},jr,{relatedTarget:0}),ei=sa(bm),ym=U({},Oo,{animationName:0,elapsedTime:0,pseudoElement:0}),Cm=sa(ym),jm=U({},Oo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sm=sa(jm),wm=U({},Oo,{data:0}),Ll=sa(wm),Nm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},km={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Em(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Pm[e])?!!a[e]:!1}function ai(){return Em}var Lm=U({},jr,{key:function(e){if(e.key){var a=Nm[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=ht(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?km[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ai,charCode:function(e){return e.type==="keypress"?ht(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ht(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Am=sa(Lm),Rm=U({},vt,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Al=sa(Rm),Mm=U({},jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ai}),zm=sa(Mm),Dm=U({},Oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Im=sa(Dm),Fm=U({},vt,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_m=sa(Fm),Om=[9,13,27,32],oi=g&&"CompositionEvent"in window,wr=null;g&&"documentMode"in document&&(wr=document.documentMode);var Tm=g&&"TextEvent"in window&&!wr,Rl=g&&(!oi||wr&&8<wr&&11>=wr),Ml=" ",zl=!1;function Dl(e,a){switch(e){case"keyup":return Om.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Il(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var To=!1;function $m(e,a){switch(e){case"compositionend":return Il(a);case"keypress":return a.which!==32?null:(zl=!0,Ml);case"textInput":return e=a.data,e===Ml&&zl?null:e;default:return null}}function Bm(e,a){if(To)return e==="compositionend"||!oi&&Dl(e,a)?(e=kl(),gt=Ks=Ka=null,To=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Rl&&a.locale!=="ko"?null:a.data;default:return null}}var qm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fl(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!qm[e.type]:a==="textarea"}function _l(e,a,r,t){rl(t),a=St(a,"onChange"),0<a.length&&(r=new Xs("onChange","change",null,r,t),e.push({event:r,listeners:a}))}var Nr=null,kr=null;function Vm(e){ad(e,0)}function bt(e){var a=Uo(e);if(Wn(a))return e}function Um(e,a){if(e==="change")return a}var Ol=!1;if(g){var ri;if(g){var ti="oninput"in document;if(!ti){var Tl=document.createElement("div");Tl.setAttribute("oninput","return;"),ti=typeof Tl.oninput=="function"}ri=ti}else ri=!1;Ol=ri&&(!document.documentMode||9<document.documentMode)}function $l(){Nr&&(Nr.detachEvent("onpropertychange",Bl),kr=Nr=null)}function Bl(e){if(e.propertyName==="value"&&bt(kr)){var a=[];_l(a,kr,e,_s(e)),nl(Vm,a)}}function Wm(e,a,r){e==="focusin"?($l(),Nr=a,kr=r,Nr.attachEvent("onpropertychange",Bl)):e==="focusout"&&$l()}function Gm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bt(kr)}function Hm(e,a){if(e==="click")return bt(a)}function Qm(e,a){if(e==="input"||e==="change")return bt(a)}function Jm(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ya=typeof Object.is=="function"?Object.is:Jm;function Pr(e,a){if(ya(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var r=Object.keys(e),t=Object.keys(a);if(r.length!==t.length)return!1;for(t=0;t<r.length;t++){var i=r[t];if(!x.call(a,i)||!ya(e[i],a[i]))return!1}return!0}function ql(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vl(e,a){var r=ql(e);e=0;for(var t;r;){if(r.nodeType===3){if(t=e+r.textContent.length,e<=a&&t>=a)return{node:r,offset:a-e};e=t}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ql(r)}}function Ul(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Ul(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Wl(){for(var e=window,a=ot();a instanceof e.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)e=a.contentWindow;else break;a=ot(e.document)}return a}function si(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}function Km(e){var a=Wl(),r=e.focusedElem,t=e.selectionRange;if(a!==r&&r&&r.ownerDocument&&Ul(r.ownerDocument.documentElement,r)){if(t!==null&&si(r)){if(a=t.start,e=t.end,e===void 0&&(e=a),"selectionStart"in r)r.selectionStart=a,r.selectionEnd=Math.min(e,r.value.length);else if(e=(a=r.ownerDocument||document)&&a.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,d=Math.min(t.start,i);t=t.end===void 0?d:Math.min(t.end,i),!e.extend&&d>t&&(i=t,t=d,d=i),i=Vl(r,d);var p=Vl(r,t);i&&p&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==p.node||e.focusOffset!==p.offset)&&(a=a.createRange(),a.setStart(i.node,i.offset),e.removeAllRanges(),d>t?(e.addRange(a),e.extend(p.node,p.offset)):(a.setEnd(p.node,p.offset),e.addRange(a)))}}for(a=[],e=r;e=e.parentNode;)e.nodeType===1&&a.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<a.length;r++)e=a[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xm=g&&"documentMode"in document&&11>=document.documentMode,$o=null,ii=null,Er=null,ni=!1;function Gl(e,a,r){var t=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ni||$o==null||$o!==ot(t)||(t=$o,"selectionStart"in t&&si(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),Er&&Pr(Er,t)||(Er=t,t=St(ii,"onSelect"),0<t.length&&(a=new Xs("onSelect","select",null,a,r),e.push({event:a,listeners:t}),a.target=$o)))}function yt(e,a){var r={};return r[e.toLowerCase()]=a.toLowerCase(),r["Webkit"+e]="webkit"+a,r["Moz"+e]="moz"+a,r}var Bo={animationend:yt("Animation","AnimationEnd"),animationiteration:yt("Animation","AnimationIteration"),animationstart:yt("Animation","AnimationStart"),transitionend:yt("Transition","TransitionEnd")},li={},Hl={};g&&(Hl=document.createElement("div").style,"AnimationEvent"in window||(delete Bo.animationend.animation,delete Bo.animationiteration.animation,delete Bo.animationstart.animation),"TransitionEvent"in window||delete Bo.transitionend.transition);function Ct(e){if(li[e])return li[e];if(!Bo[e])return e;var a=Bo[e],r;for(r in a)if(a.hasOwnProperty(r)&&r in Hl)return li[e]=a[r];return e}var Ql=Ct("animationend"),Jl=Ct("animationiteration"),Kl=Ct("animationstart"),Xl=Ct("transitionend"),Yl=new Map,Zl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xa(e,a){Yl.set(e,a),c(a,[e])}for(var di=0;di<Zl.length;di++){var ci=Zl[di],Ym=ci.toLowerCase(),Zm=ci[0].toUpperCase()+ci.slice(1);Xa(Ym,"on"+Zm)}Xa(Ql,"onAnimationEnd"),Xa(Jl,"onAnimationIteration"),Xa(Kl,"onAnimationStart"),Xa("dblclick","onDoubleClick"),Xa("focusin","onFocus"),Xa("focusout","onBlur"),Xa(Xl,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ep=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function ed(e,a,r){var t=e.type||"unknown-event";e.currentTarget=r,Yu(t,a,void 0,e),e.currentTarget=null}function ad(e,a){a=(a&4)!==0;for(var r=0;r<e.length;r++){var t=e[r],i=t.event;t=t.listeners;e:{var d=void 0;if(a)for(var p=t.length-1;0<=p;p--){var y=t[p],w=y.instance,I=y.currentTarget;if(y=y.listener,w!==d&&i.isPropagationStopped())break e;ed(i,y,I),d=w}else for(p=0;p<t.length;p++){if(y=t[p],w=y.instance,I=y.currentTarget,y=y.listener,w!==d&&i.isPropagationStopped())break e;ed(i,y,I),d=w}}}if(st)throw e=Bs,st=!1,Bs=null,e}function Ne(e,a){var r=a[vi];r===void 0&&(r=a[vi]=new Set);var t=e+"__bubble";r.has(t)||(od(a,e,2,!1),r.add(t))}function ui(e,a,r){var t=0;a&&(t|=4),od(r,e,t,a)}var jt="_reactListening"+Math.random().toString(36).slice(2);function Ar(e){if(!e[jt]){e[jt]=!0,u.forEach(function(r){r!=="selectionchange"&&(ep.has(r)||ui(r,!1,e),ui(r,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[jt]||(a[jt]=!0,ui("selectionchange",!1,a))}}function od(e,a,r,t){switch(Nl(a)){case 1:var i=fm;break;case 4:i=gm;break;default:i=Qs}r=i.bind(null,a,r,e),i=void 0,!$s||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(i=!0),t?i!==void 0?e.addEventListener(a,r,{capture:!0,passive:i}):e.addEventListener(a,r,!0):i!==void 0?e.addEventListener(a,r,{passive:i}):e.addEventListener(a,r,!1)}function mi(e,a,r,t,i){var d=t;if((a&1)===0&&(a&2)===0&&t!==null)e:for(;;){if(t===null)return;var p=t.tag;if(p===3||p===4){var y=t.stateNode.containerInfo;if(y===i||y.nodeType===8&&y.parentNode===i)break;if(p===4)for(p=t.return;p!==null;){var w=p.tag;if((w===3||w===4)&&(w=p.stateNode.containerInfo,w===i||w.nodeType===8&&w.parentNode===i))return;p=p.return}for(;y!==null;){if(p=bo(y),p===null)return;if(w=p.tag,w===5||w===6){t=d=p;continue e}y=y.parentNode}}t=t.return}nl(function(){var I=d,V=_s(r),G=[];e:{var q=Yl.get(e);if(q!==void 0){var ee=Xs,oe=e;switch(e){case"keypress":if(ht(r)===0)break e;case"keydown":case"keyup":ee=Am;break;case"focusin":oe="focus",ee=ei;break;case"focusout":oe="blur",ee=ei;break;case"beforeblur":case"afterblur":ee=ei;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=El;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=vm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=zm;break;case Ql:case Jl:case Kl:ee=Cm;break;case Xl:ee=Im;break;case"scroll":ee=hm;break;case"wheel":ee=_m;break;case"copy":case"cut":case"paste":ee=Sm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=Al}var te=(a&4)!==0,De=!te&&e==="scroll",A=te?q!==null?q+"Capture":null:q;te=[];for(var k=I,R;k!==null;){R=k;var J=R.stateNode;if(R.tag===5&&J!==null&&(R=J,A!==null&&(J=mr(k,A),J!=null&&te.push(Rr(k,J,R)))),De)break;k=k.return}0<te.length&&(q=new ee(q,oe,null,r,V),G.push({event:q,listeners:te}))}}if((a&7)===0){e:{if(q=e==="mouseover"||e==="pointerover",ee=e==="mouseout"||e==="pointerout",q&&r!==Fs&&(oe=r.relatedTarget||r.fromElement)&&(bo(oe)||oe[za]))break e;if((ee||q)&&(q=V.window===V?V:(q=V.ownerDocument)?q.defaultView||q.parentWindow:window,ee?(oe=r.relatedTarget||r.toElement,ee=I,oe=oe?bo(oe):null,oe!==null&&(De=vo(oe),oe!==De||oe.tag!==5&&oe.tag!==6)&&(oe=null)):(ee=null,oe=I),ee!==oe)){if(te=El,J="onMouseLeave",A="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(te=Al,J="onPointerLeave",A="onPointerEnter",k="pointer"),De=ee==null?q:Uo(ee),R=oe==null?q:Uo(oe),q=new te(J,k+"leave",ee,r,V),q.target=De,q.relatedTarget=R,J=null,bo(V)===I&&(te=new te(A,k+"enter",oe,r,V),te.target=R,te.relatedTarget=De,J=te),De=J,ee&&oe)a:{for(te=ee,A=oe,k=0,R=te;R;R=qo(R))k++;for(R=0,J=A;J;J=qo(J))R++;for(;0<k-R;)te=qo(te),k--;for(;0<R-k;)A=qo(A),R--;for(;k--;){if(te===A||A!==null&&te===A.alternate)break a;te=qo(te),A=qo(A)}te=null}else te=null;ee!==null&&rd(G,q,ee,te,!1),oe!==null&&De!==null&&rd(G,De,oe,te,!0)}}e:{if(q=I?Uo(I):window,ee=q.nodeName&&q.nodeName.toLowerCase(),ee==="select"||ee==="input"&&q.type==="file")var ie=Um;else if(Fl(q))if(Ol)ie=Qm;else{ie=Gm;var ce=Wm}else(ee=q.nodeName)&&ee.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(ie=Hm);if(ie&&(ie=ie(e,I))){_l(G,ie,r,V);break e}ce&&ce(e,q,I),e==="focusout"&&(ce=q._wrapperState)&&ce.controlled&&q.type==="number"&&Rs(q,"number",q.value)}switch(ce=I?Uo(I):window,e){case"focusin":(Fl(ce)||ce.contentEditable==="true")&&($o=ce,ii=I,Er=null);break;case"focusout":Er=ii=$o=null;break;case"mousedown":ni=!0;break;case"contextmenu":case"mouseup":case"dragend":ni=!1,Gl(G,r,V);break;case"selectionchange":if(Xm)break;case"keydown":case"keyup":Gl(G,r,V)}var ue;if(oi)e:{switch(e){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else To?Dl(e,r)&&(fe="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(fe="onCompositionStart");fe&&(Rl&&r.locale!=="ko"&&(To||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&To&&(ue=kl()):(Ka=V,Ks="value"in Ka?Ka.value:Ka.textContent,To=!0)),ce=St(I,fe),0<ce.length&&(fe=new Ll(fe,e,null,r,V),G.push({event:fe,listeners:ce}),ue?fe.data=ue:(ue=Il(r),ue!==null&&(fe.data=ue)))),(ue=Tm?$m(e,r):Bm(e,r))&&(I=St(I,"onBeforeInput"),0<I.length&&(V=new Ll("onBeforeInput","beforeinput",null,r,V),G.push({event:V,listeners:I}),V.data=ue))}ad(G,a)})}function Rr(e,a,r){return{instance:e,listener:a,currentTarget:r}}function St(e,a){for(var r=a+"Capture",t=[];e!==null;){var i=e,d=i.stateNode;i.tag===5&&d!==null&&(i=d,d=mr(e,r),d!=null&&t.unshift(Rr(e,d,i)),d=mr(e,a),d!=null&&t.push(Rr(e,d,i))),e=e.return}return t}function qo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function rd(e,a,r,t,i){for(var d=a._reactName,p=[];r!==null&&r!==t;){var y=r,w=y.alternate,I=y.stateNode;if(w!==null&&w===t)break;y.tag===5&&I!==null&&(y=I,i?(w=mr(r,d),w!=null&&p.unshift(Rr(r,w,y))):i||(w=mr(r,d),w!=null&&p.push(Rr(r,w,y)))),r=r.return}p.length!==0&&e.push({event:a,listeners:p})}var ap=/\r\n?/g,op=/\u0000|\uFFFD/g;function td(e){return(typeof e=="string"?e:""+e).replace(ap,`
`).replace(op,"")}function wt(e,a,r){if(a=td(a),td(e)!==a&&r)throw Error(l(425))}function Nt(){}var pi=null,fi=null;function gi(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var hi=typeof setTimeout=="function"?setTimeout:void 0,rp=typeof clearTimeout=="function"?clearTimeout:void 0,sd=typeof Promise=="function"?Promise:void 0,tp=typeof queueMicrotask=="function"?queueMicrotask:typeof sd<"u"?function(e){return sd.resolve(null).then(e).catch(sp)}:hi;function sp(e){setTimeout(function(){throw e})}function xi(e,a){var r=a,t=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(t===0){e.removeChild(i),Cr(a);return}t--}else r!=="$"&&r!=="$?"&&r!=="$!"||t++;r=i}while(r);Cr(a)}function Ya(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return e}function id(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(a===0)return e;a--}else r==="/$"&&a++}e=e.previousSibling}return null}var Vo=Math.random().toString(36).slice(2),Ea="__reactFiber$"+Vo,Mr="__reactProps$"+Vo,za="__reactContainer$"+Vo,vi="__reactEvents$"+Vo,ip="__reactListeners$"+Vo,np="__reactHandles$"+Vo;function bo(e){var a=e[Ea];if(a)return a;for(var r=e.parentNode;r;){if(a=r[za]||r[Ea]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(e=id(e);e!==null;){if(r=e[Ea])return r;e=id(e)}return a}e=r,r=e.parentNode}return null}function zr(e){return e=e[Ea]||e[za],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Uo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function kt(e){return e[Mr]||null}var bi=[],Wo=-1;function Za(e){return{current:e}}function ke(e){0>Wo||(e.current=bi[Wo],bi[Wo]=null,Wo--)}function we(e,a){Wo++,bi[Wo]=e.current,e.current=a}var eo={},Ue=Za(eo),Ye=Za(!1),yo=eo;function Go(e,a){var r=e.type.contextTypes;if(!r)return eo;var t=e.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===a)return t.__reactInternalMemoizedMaskedChildContext;var i={},d;for(d in r)i[d]=a[d];return t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ze(e){return e=e.childContextTypes,e!=null}function Pt(){ke(Ye),ke(Ue)}function nd(e,a,r){if(Ue.current!==eo)throw Error(l(168));we(Ue,a),we(Ye,r)}function ld(e,a,r){var t=e.stateNode;if(a=a.childContextTypes,typeof t.getChildContext!="function")return r;t=t.getChildContext();for(var i in t)if(!(i in a))throw Error(l(108,le(e)||"Unknown",i));return U({},r,t)}function Et(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||eo,yo=Ue.current,we(Ue,e),we(Ye,Ye.current),!0}function dd(e,a,r){var t=e.stateNode;if(!t)throw Error(l(169));r?(e=ld(e,a,yo),t.__reactInternalMemoizedMergedChildContext=e,ke(Ye),ke(Ue),we(Ue,e)):ke(Ye),we(Ye,r)}var Da=null,Lt=!1,yi=!1;function cd(e){Da===null?Da=[e]:Da.push(e)}function lp(e){Lt=!0,cd(e)}function ao(){if(!yi&&Da!==null){yi=!0;var e=0,a=Se;try{var r=Da;for(Se=1;e<r.length;e++){var t=r[e];do t=t(!0);while(t!==null)}Da=null,Lt=!1}catch(i){throw Da!==null&&(Da=Da.slice(e+1)),ml(qs,ao),i}finally{Se=a,yi=!1}}return null}var Ho=[],Qo=0,At=null,Rt=0,pa=[],fa=0,Co=null,Ia=1,Fa="";function jo(e,a){Ho[Qo++]=Rt,Ho[Qo++]=At,At=e,Rt=a}function ud(e,a,r){pa[fa++]=Ia,pa[fa++]=Fa,pa[fa++]=Co,Co=e;var t=Ia;e=Fa;var i=32-ba(t)-1;t&=~(1<<i),r+=1;var d=32-ba(a)+i;if(30<d){var p=i-i%5;d=(t&(1<<p)-1).toString(32),t>>=p,i-=p,Ia=1<<32-ba(a)+i|r<<i|t,Fa=d+e}else Ia=1<<d|r<<i|t,Fa=e}function Ci(e){e.return!==null&&(jo(e,1),ud(e,1,0))}function ji(e){for(;e===At;)At=Ho[--Qo],Ho[Qo]=null,Rt=Ho[--Qo],Ho[Qo]=null;for(;e===Co;)Co=pa[--fa],pa[fa]=null,Fa=pa[--fa],pa[fa]=null,Ia=pa[--fa],pa[fa]=null}var ia=null,na=null,Ee=!1,Ca=null;function md(e,a){var r=va(5,null,null,0);r.elementType="DELETED",r.stateNode=a,r.return=e,a=e.deletions,a===null?(e.deletions=[r],e.flags|=16):a.push(r)}function pd(e,a){switch(e.tag){case 5:var r=e.type;return a=a.nodeType!==1||r.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(e.stateNode=a,ia=e,na=Ya(a.firstChild),!0):!1;case 6:return a=e.pendingProps===""||a.nodeType!==3?null:a,a!==null?(e.stateNode=a,ia=e,na=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(r=Co!==null?{id:Ia,overflow:Fa}:null,e.memoizedState={dehydrated:a,treeContext:r,retryLane:1073741824},r=va(18,null,null,0),r.stateNode=a,r.return=e,e.child=r,ia=e,na=null,!0):!1;default:return!1}}function Si(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wi(e){if(Ee){var a=na;if(a){var r=a;if(!pd(e,a)){if(Si(e))throw Error(l(418));a=Ya(r.nextSibling);var t=ia;a&&pd(e,a)?md(t,r):(e.flags=e.flags&-4097|2,Ee=!1,ia=e)}}else{if(Si(e))throw Error(l(418));e.flags=e.flags&-4097|2,Ee=!1,ia=e}}}function fd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ia=e}function Mt(e){if(e!==ia)return!1;if(!Ee)return fd(e),Ee=!0,!1;var a;if((a=e.tag!==3)&&!(a=e.tag!==5)&&(a=e.type,a=a!=="head"&&a!=="body"&&!gi(e.type,e.memoizedProps)),a&&(a=na)){if(Si(e))throw gd(),Error(l(418));for(;a;)md(e,a),a=Ya(a.nextSibling)}if(fd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,a=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(a===0){na=Ya(e.nextSibling);break e}a--}else r!=="$"&&r!=="$!"&&r!=="$?"||a++}e=e.nextSibling}na=null}}else na=ia?Ya(e.stateNode.nextSibling):null;return!0}function gd(){for(var e=na;e;)e=Ya(e.nextSibling)}function Jo(){na=ia=null,Ee=!1}function Ni(e){Ca===null?Ca=[e]:Ca.push(e)}var dp=Y.ReactCurrentBatchConfig;function Dr(e,a,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(l(309));var t=r.stateNode}if(!t)throw Error(l(147,e));var i=t,d=""+e;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===d?a.ref:(a=function(p){var y=i.refs;p===null?delete y[d]:y[d]=p},a._stringRef=d,a)}if(typeof e!="string")throw Error(l(284));if(!r._owner)throw Error(l(290,e))}return e}function zt(e,a){throw e=Object.prototype.toString.call(a),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e))}function hd(e){var a=e._init;return a(e._payload)}function xd(e){function a(A,k){if(e){var R=A.deletions;R===null?(A.deletions=[k],A.flags|=16):R.push(k)}}function r(A,k){if(!e)return null;for(;k!==null;)a(A,k),k=k.sibling;return null}function t(A,k){for(A=new Map;k!==null;)k.key!==null?A.set(k.key,k):A.set(k.index,k),k=k.sibling;return A}function i(A,k){return A=co(A,k),A.index=0,A.sibling=null,A}function d(A,k,R){return A.index=R,e?(R=A.alternate,R!==null?(R=R.index,R<k?(A.flags|=2,k):R):(A.flags|=2,k)):(A.flags|=1048576,k)}function p(A){return e&&A.alternate===null&&(A.flags|=2),A}function y(A,k,R,J){return k===null||k.tag!==6?(k=xn(R,A.mode,J),k.return=A,k):(k=i(k,R),k.return=A,k)}function w(A,k,R,J){var ie=R.type;return ie===$?V(A,k,R.props.children,J,R.key):k!==null&&(k.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===h&&hd(ie)===k.type)?(J=i(k,R.props),J.ref=Dr(A,k,R),J.return=A,J):(J=rs(R.type,R.key,R.props,null,A.mode,J),J.ref=Dr(A,k,R),J.return=A,J)}function I(A,k,R,J){return k===null||k.tag!==4||k.stateNode.containerInfo!==R.containerInfo||k.stateNode.implementation!==R.implementation?(k=vn(R,A.mode,J),k.return=A,k):(k=i(k,R.children||[]),k.return=A,k)}function V(A,k,R,J,ie){return k===null||k.tag!==7?(k=Ao(R,A.mode,J,ie),k.return=A,k):(k=i(k,R),k.return=A,k)}function G(A,k,R){if(typeof k=="string"&&k!==""||typeof k=="number")return k=xn(""+k,A.mode,R),k.return=A,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Q:return R=rs(k.type,k.key,k.props,null,A.mode,R),R.ref=Dr(A,null,k),R.return=A,R;case ne:return k=vn(k,A.mode,R),k.return=A,k;case h:var J=k._init;return G(A,J(k._payload),R)}if(dr(k)||T(k))return k=Ao(k,A.mode,R,null),k.return=A,k;zt(A,k)}return null}function q(A,k,R,J){var ie=k!==null?k.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return ie!==null?null:y(A,k,""+R,J);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Q:return R.key===ie?w(A,k,R,J):null;case ne:return R.key===ie?I(A,k,R,J):null;case h:return ie=R._init,q(A,k,ie(R._payload),J)}if(dr(R)||T(R))return ie!==null?null:V(A,k,R,J,null);zt(A,R)}return null}function ee(A,k,R,J,ie){if(typeof J=="string"&&J!==""||typeof J=="number")return A=A.get(R)||null,y(k,A,""+J,ie);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case Q:return A=A.get(J.key===null?R:J.key)||null,w(k,A,J,ie);case ne:return A=A.get(J.key===null?R:J.key)||null,I(k,A,J,ie);case h:var ce=J._init;return ee(A,k,R,ce(J._payload),ie)}if(dr(J)||T(J))return A=A.get(R)||null,V(k,A,J,ie,null);zt(k,J)}return null}function oe(A,k,R,J){for(var ie=null,ce=null,ue=k,fe=k=0,Be=null;ue!==null&&fe<R.length;fe++){ue.index>fe?(Be=ue,ue=null):Be=ue.sibling;var Ce=q(A,ue,R[fe],J);if(Ce===null){ue===null&&(ue=Be);break}e&&ue&&Ce.alternate===null&&a(A,ue),k=d(Ce,k,fe),ce===null?ie=Ce:ce.sibling=Ce,ce=Ce,ue=Be}if(fe===R.length)return r(A,ue),Ee&&jo(A,fe),ie;if(ue===null){for(;fe<R.length;fe++)ue=G(A,R[fe],J),ue!==null&&(k=d(ue,k,fe),ce===null?ie=ue:ce.sibling=ue,ce=ue);return Ee&&jo(A,fe),ie}for(ue=t(A,ue);fe<R.length;fe++)Be=ee(ue,A,fe,R[fe],J),Be!==null&&(e&&Be.alternate!==null&&ue.delete(Be.key===null?fe:Be.key),k=d(Be,k,fe),ce===null?ie=Be:ce.sibling=Be,ce=Be);return e&&ue.forEach(function(uo){return a(A,uo)}),Ee&&jo(A,fe),ie}function te(A,k,R,J){var ie=T(R);if(typeof ie!="function")throw Error(l(150));if(R=ie.call(R),R==null)throw Error(l(151));for(var ce=ie=null,ue=k,fe=k=0,Be=null,Ce=R.next();ue!==null&&!Ce.done;fe++,Ce=R.next()){ue.index>fe?(Be=ue,ue=null):Be=ue.sibling;var uo=q(A,ue,Ce.value,J);if(uo===null){ue===null&&(ue=Be);break}e&&ue&&uo.alternate===null&&a(A,ue),k=d(uo,k,fe),ce===null?ie=uo:ce.sibling=uo,ce=uo,ue=Be}if(Ce.done)return r(A,ue),Ee&&jo(A,fe),ie;if(ue===null){for(;!Ce.done;fe++,Ce=R.next())Ce=G(A,Ce.value,J),Ce!==null&&(k=d(Ce,k,fe),ce===null?ie=Ce:ce.sibling=Ce,ce=Ce);return Ee&&jo(A,fe),ie}for(ue=t(A,ue);!Ce.done;fe++,Ce=R.next())Ce=ee(ue,A,fe,Ce.value,J),Ce!==null&&(e&&Ce.alternate!==null&&ue.delete(Ce.key===null?fe:Ce.key),k=d(Ce,k,fe),ce===null?ie=Ce:ce.sibling=Ce,ce=Ce);return e&&ue.forEach(function(qp){return a(A,qp)}),Ee&&jo(A,fe),ie}function De(A,k,R,J){if(typeof R=="object"&&R!==null&&R.type===$&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case Q:e:{for(var ie=R.key,ce=k;ce!==null;){if(ce.key===ie){if(ie=R.type,ie===$){if(ce.tag===7){r(A,ce.sibling),k=i(ce,R.props.children),k.return=A,A=k;break e}}else if(ce.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===h&&hd(ie)===ce.type){r(A,ce.sibling),k=i(ce,R.props),k.ref=Dr(A,ce,R),k.return=A,A=k;break e}r(A,ce);break}else a(A,ce);ce=ce.sibling}R.type===$?(k=Ao(R.props.children,A.mode,J,R.key),k.return=A,A=k):(J=rs(R.type,R.key,R.props,null,A.mode,J),J.ref=Dr(A,k,R),J.return=A,A=J)}return p(A);case ne:e:{for(ce=R.key;k!==null;){if(k.key===ce)if(k.tag===4&&k.stateNode.containerInfo===R.containerInfo&&k.stateNode.implementation===R.implementation){r(A,k.sibling),k=i(k,R.children||[]),k.return=A,A=k;break e}else{r(A,k);break}else a(A,k);k=k.sibling}k=vn(R,A.mode,J),k.return=A,A=k}return p(A);case h:return ce=R._init,De(A,k,ce(R._payload),J)}if(dr(R))return oe(A,k,R,J);if(T(R))return te(A,k,R,J);zt(A,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,k!==null&&k.tag===6?(r(A,k.sibling),k=i(k,R),k.return=A,A=k):(r(A,k),k=xn(R,A.mode,J),k.return=A,A=k),p(A)):r(A,k)}return De}var Ko=xd(!0),vd=xd(!1),Dt=Za(null),It=null,Xo=null,ki=null;function Pi(){ki=Xo=It=null}function Ei(e){var a=Dt.current;ke(Dt),e._currentValue=a}function Li(e,a,r){for(;e!==null;){var t=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,t!==null&&(t.childLanes|=a)):t!==null&&(t.childLanes&a)!==a&&(t.childLanes|=a),e===r)break;e=e.return}}function Yo(e,a){It=e,ki=Xo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&a)!==0&&(ea=!0),e.firstContext=null)}function ga(e){var a=e._currentValue;if(ki!==e)if(e={context:e,memoizedValue:a,next:null},Xo===null){if(It===null)throw Error(l(308));Xo=e,It.dependencies={lanes:0,firstContext:e}}else Xo=Xo.next=e;return a}var So=null;function Ai(e){So===null?So=[e]:So.push(e)}function bd(e,a,r,t){var i=a.interleaved;return i===null?(r.next=r,Ai(a)):(r.next=i.next,i.next=r),a.interleaved=r,_a(e,t)}function _a(e,a){e.lanes|=a;var r=e.alternate;for(r!==null&&(r.lanes|=a),r=e,e=e.return;e!==null;)e.childLanes|=a,r=e.alternate,r!==null&&(r.childLanes|=a),r=e,e=e.return;return r.tag===3?r.stateNode:null}var oo=!1;function Ri(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yd(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Oa(e,a){return{eventTime:e,lane:a,tag:0,payload:null,callback:null,next:null}}function ro(e,a,r){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,(be&2)!==0){var i=t.pending;return i===null?a.next=a:(a.next=i.next,i.next=a),t.pending=a,_a(e,r)}return i=t.interleaved,i===null?(a.next=a,Ai(t)):(a.next=i.next,i.next=a),t.interleaved=a,_a(e,r)}function Ft(e,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194240)!==0)){var t=a.lanes;t&=e.pendingLanes,r|=t,a.lanes=r,Ws(e,r)}}function Cd(e,a){var r=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,r===t)){var i=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var p={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};d===null?i=d=p:d=d.next=p,r=r.next}while(r!==null);d===null?i=d=a:d=d.next=a}else i=d=a;r={baseState:t.baseState,firstBaseUpdate:i,lastBaseUpdate:d,shared:t.shared,effects:t.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=a:e.next=a,r.lastBaseUpdate=a}function _t(e,a,r,t){var i=e.updateQueue;oo=!1;var d=i.firstBaseUpdate,p=i.lastBaseUpdate,y=i.shared.pending;if(y!==null){i.shared.pending=null;var w=y,I=w.next;w.next=null,p===null?d=I:p.next=I,p=w;var V=e.alternate;V!==null&&(V=V.updateQueue,y=V.lastBaseUpdate,y!==p&&(y===null?V.firstBaseUpdate=I:y.next=I,V.lastBaseUpdate=w))}if(d!==null){var G=i.baseState;p=0,V=I=w=null,y=d;do{var q=y.lane,ee=y.eventTime;if((t&q)===q){V!==null&&(V=V.next={eventTime:ee,lane:0,tag:y.tag,payload:y.payload,callback:y.callback,next:null});e:{var oe=e,te=y;switch(q=a,ee=r,te.tag){case 1:if(oe=te.payload,typeof oe=="function"){G=oe.call(ee,G,q);break e}G=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=te.payload,q=typeof oe=="function"?oe.call(ee,G,q):oe,q==null)break e;G=U({},G,q);break e;case 2:oo=!0}}y.callback!==null&&y.lane!==0&&(e.flags|=64,q=i.effects,q===null?i.effects=[y]:q.push(y))}else ee={eventTime:ee,lane:q,tag:y.tag,payload:y.payload,callback:y.callback,next:null},V===null?(I=V=ee,w=G):V=V.next=ee,p|=q;if(y=y.next,y===null){if(y=i.shared.pending,y===null)break;q=y,y=q.next,q.next=null,i.lastBaseUpdate=q,i.shared.pending=null}}while(!0);if(V===null&&(w=G),i.baseState=w,i.firstBaseUpdate=I,i.lastBaseUpdate=V,a=i.shared.interleaved,a!==null){i=a;do p|=i.lane,i=i.next;while(i!==a)}else d===null&&(i.shared.lanes=0);ko|=p,e.lanes=p,e.memoizedState=G}}function jd(e,a,r){if(e=a.effects,a.effects=null,e!==null)for(a=0;a<e.length;a++){var t=e[a],i=t.callback;if(i!==null){if(t.callback=null,t=r,typeof i!="function")throw Error(l(191,i));i.call(t)}}}var Ir={},La=Za(Ir),Fr=Za(Ir),_r=Za(Ir);function wo(e){if(e===Ir)throw Error(l(174));return e}function Mi(e,a){switch(we(_r,a),we(Fr,e),we(La,Ir),e=a.nodeType,e){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:zs(null,"");break;default:e=e===8?a.parentNode:a,a=e.namespaceURI||null,e=e.tagName,a=zs(a,e)}ke(La),we(La,a)}function Zo(){ke(La),ke(Fr),ke(_r)}function Sd(e){wo(_r.current);var a=wo(La.current),r=zs(a,e.type);a!==r&&(we(Fr,e),we(La,r))}function zi(e){Fr.current===e&&(ke(La),ke(Fr))}var Le=Za(0);function Ot(e){for(var a=e;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Di=[];function Ii(){for(var e=0;e<Di.length;e++)Di[e]._workInProgressVersionPrimary=null;Di.length=0}var Tt=Y.ReactCurrentDispatcher,Fi=Y.ReactCurrentBatchConfig,No=0,Ae=null,Fe=null,Te=null,$t=!1,Or=!1,Tr=0,cp=0;function We(){throw Error(l(321))}function _i(e,a){if(a===null)return!1;for(var r=0;r<a.length&&r<e.length;r++)if(!ya(e[r],a[r]))return!1;return!0}function Oi(e,a,r,t,i,d){if(No=d,Ae=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,Tt.current=e===null||e.memoizedState===null?fp:gp,e=r(t,i),Or){d=0;do{if(Or=!1,Tr=0,25<=d)throw Error(l(301));d+=1,Te=Fe=null,a.updateQueue=null,Tt.current=hp,e=r(t,i)}while(Or)}if(Tt.current=Vt,a=Fe!==null&&Fe.next!==null,No=0,Te=Fe=Ae=null,$t=!1,a)throw Error(l(300));return e}function Ti(){var e=Tr!==0;return Tr=0,e}function Aa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?Ae.memoizedState=Te=e:Te=Te.next=e,Te}function ha(){if(Fe===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var a=Te===null?Ae.memoizedState:Te.next;if(a!==null)Te=a,Fe=e;else{if(e===null)throw Error(l(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},Te===null?Ae.memoizedState=Te=e:Te=Te.next=e}return Te}function $r(e,a){return typeof a=="function"?a(e):a}function $i(e){var a=ha(),r=a.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var t=Fe,i=t.baseQueue,d=r.pending;if(d!==null){if(i!==null){var p=i.next;i.next=d.next,d.next=p}t.baseQueue=i=d,r.pending=null}if(i!==null){d=i.next,t=t.baseState;var y=p=null,w=null,I=d;do{var V=I.lane;if((No&V)===V)w!==null&&(w=w.next={lane:0,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null}),t=I.hasEagerState?I.eagerState:e(t,I.action);else{var G={lane:V,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null};w===null?(y=w=G,p=t):w=w.next=G,Ae.lanes|=V,ko|=V}I=I.next}while(I!==null&&I!==d);w===null?p=t:w.next=y,ya(t,a.memoizedState)||(ea=!0),a.memoizedState=t,a.baseState=p,a.baseQueue=w,r.lastRenderedState=t}if(e=r.interleaved,e!==null){i=e;do d=i.lane,Ae.lanes|=d,ko|=d,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[a.memoizedState,r.dispatch]}function Bi(e){var a=ha(),r=a.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var t=r.dispatch,i=r.pending,d=a.memoizedState;if(i!==null){r.pending=null;var p=i=i.next;do d=e(d,p.action),p=p.next;while(p!==i);ya(d,a.memoizedState)||(ea=!0),a.memoizedState=d,a.baseQueue===null&&(a.baseState=d),r.lastRenderedState=d}return[d,t]}function wd(){}function Nd(e,a){var r=Ae,t=ha(),i=a(),d=!ya(t.memoizedState,i);if(d&&(t.memoizedState=i,ea=!0),t=t.queue,qi(Ed.bind(null,r,t,e),[e]),t.getSnapshot!==a||d||Te!==null&&Te.memoizedState.tag&1){if(r.flags|=2048,Br(9,Pd.bind(null,r,t,i,a),void 0,null),$e===null)throw Error(l(349));(No&30)!==0||kd(r,a,i)}return i}function kd(e,a,r){e.flags|=16384,e={getSnapshot:a,value:r},a=Ae.updateQueue,a===null?(a={lastEffect:null,stores:null},Ae.updateQueue=a,a.stores=[e]):(r=a.stores,r===null?a.stores=[e]:r.push(e))}function Pd(e,a,r,t){a.value=r,a.getSnapshot=t,Ld(a)&&Ad(e)}function Ed(e,a,r){return r(function(){Ld(a)&&Ad(e)})}function Ld(e){var a=e.getSnapshot;e=e.value;try{var r=a();return!ya(e,r)}catch{return!0}}function Ad(e){var a=_a(e,1);a!==null&&Na(a,e,1,-1)}function Rd(e){var a=Aa();return typeof e=="function"&&(e=e()),a.memoizedState=a.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$r,lastRenderedState:e},a.queue=e,e=e.dispatch=pp.bind(null,Ae,e),[a.memoizedState,e]}function Br(e,a,r,t){return e={tag:e,create:a,destroy:r,deps:t,next:null},a=Ae.updateQueue,a===null?(a={lastEffect:null,stores:null},Ae.updateQueue=a,a.lastEffect=e.next=e):(r=a.lastEffect,r===null?a.lastEffect=e.next=e:(t=r.next,r.next=e,e.next=t,a.lastEffect=e)),e}function Md(){return ha().memoizedState}function Bt(e,a,r,t){var i=Aa();Ae.flags|=e,i.memoizedState=Br(1|a,r,void 0,t===void 0?null:t)}function qt(e,a,r,t){var i=ha();t=t===void 0?null:t;var d=void 0;if(Fe!==null){var p=Fe.memoizedState;if(d=p.destroy,t!==null&&_i(t,p.deps)){i.memoizedState=Br(a,r,d,t);return}}Ae.flags|=e,i.memoizedState=Br(1|a,r,d,t)}function zd(e,a){return Bt(8390656,8,e,a)}function qi(e,a){return qt(2048,8,e,a)}function Dd(e,a){return qt(4,2,e,a)}function Id(e,a){return qt(4,4,e,a)}function Fd(e,a){if(typeof a=="function")return e=e(),a(e),function(){a(null)};if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function _d(e,a,r){return r=r!=null?r.concat([e]):null,qt(4,4,Fd.bind(null,a,e),r)}function Vi(){}function Od(e,a){var r=ha();a=a===void 0?null:a;var t=r.memoizedState;return t!==null&&a!==null&&_i(a,t[1])?t[0]:(r.memoizedState=[e,a],e)}function Td(e,a){var r=ha();a=a===void 0?null:a;var t=r.memoizedState;return t!==null&&a!==null&&_i(a,t[1])?t[0]:(e=e(),r.memoizedState=[e,a],e)}function $d(e,a,r){return(No&21)===0?(e.baseState&&(e.baseState=!1,ea=!0),e.memoizedState=r):(ya(r,a)||(r=hl(),Ae.lanes|=r,ko|=r,e.baseState=!0),a)}function up(e,a){var r=Se;Se=r!==0&&4>r?r:4,e(!0);var t=Fi.transition;Fi.transition={};try{e(!1),a()}finally{Se=r,Fi.transition=t}}function Bd(){return ha().memoizedState}function mp(e,a,r){var t=no(e);if(r={lane:t,action:r,hasEagerState:!1,eagerState:null,next:null},qd(e))Vd(a,r);else if(r=bd(e,a,r,t),r!==null){var i=Je();Na(r,e,t,i),Ud(r,a,t)}}function pp(e,a,r){var t=no(e),i={lane:t,action:r,hasEagerState:!1,eagerState:null,next:null};if(qd(e))Vd(a,i);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=a.lastRenderedReducer,d!==null))try{var p=a.lastRenderedState,y=d(p,r);if(i.hasEagerState=!0,i.eagerState=y,ya(y,p)){var w=a.interleaved;w===null?(i.next=i,Ai(a)):(i.next=w.next,w.next=i),a.interleaved=i;return}}catch{}finally{}r=bd(e,a,i,t),r!==null&&(i=Je(),Na(r,e,t,i),Ud(r,a,t))}}function qd(e){var a=e.alternate;return e===Ae||a!==null&&a===Ae}function Vd(e,a){Or=$t=!0;var r=e.pending;r===null?a.next=a:(a.next=r.next,r.next=a),e.pending=a}function Ud(e,a,r){if((r&4194240)!==0){var t=a.lanes;t&=e.pendingLanes,r|=t,a.lanes=r,Ws(e,r)}}var Vt={readContext:ga,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},fp={readContext:ga,useCallback:function(e,a){return Aa().memoizedState=[e,a===void 0?null:a],e},useContext:ga,useEffect:zd,useImperativeHandle:function(e,a,r){return r=r!=null?r.concat([e]):null,Bt(4194308,4,Fd.bind(null,a,e),r)},useLayoutEffect:function(e,a){return Bt(4194308,4,e,a)},useInsertionEffect:function(e,a){return Bt(4,2,e,a)},useMemo:function(e,a){var r=Aa();return a=a===void 0?null:a,e=e(),r.memoizedState=[e,a],e},useReducer:function(e,a,r){var t=Aa();return a=r!==void 0?r(a):a,t.memoizedState=t.baseState=a,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},t.queue=e,e=e.dispatch=mp.bind(null,Ae,e),[t.memoizedState,e]},useRef:function(e){var a=Aa();return e={current:e},a.memoizedState=e},useState:Rd,useDebugValue:Vi,useDeferredValue:function(e){return Aa().memoizedState=e},useTransition:function(){var e=Rd(!1),a=e[0];return e=up.bind(null,e[1]),Aa().memoizedState=e,[a,e]},useMutableSource:function(){},useSyncExternalStore:function(e,a,r){var t=Ae,i=Aa();if(Ee){if(r===void 0)throw Error(l(407));r=r()}else{if(r=a(),$e===null)throw Error(l(349));(No&30)!==0||kd(t,a,r)}i.memoizedState=r;var d={value:r,getSnapshot:a};return i.queue=d,zd(Ed.bind(null,t,d,e),[e]),t.flags|=2048,Br(9,Pd.bind(null,t,d,r,a),void 0,null),r},useId:function(){var e=Aa(),a=$e.identifierPrefix;if(Ee){var r=Fa,t=Ia;r=(t&~(1<<32-ba(t)-1)).toString(32)+r,a=":"+a+"R"+r,r=Tr++,0<r&&(a+="H"+r.toString(32)),a+=":"}else r=cp++,a=":"+a+"r"+r.toString(32)+":";return e.memoizedState=a},unstable_isNewReconciler:!1},gp={readContext:ga,useCallback:Od,useContext:ga,useEffect:qi,useImperativeHandle:_d,useInsertionEffect:Dd,useLayoutEffect:Id,useMemo:Td,useReducer:$i,useRef:Md,useState:function(){return $i($r)},useDebugValue:Vi,useDeferredValue:function(e){var a=ha();return $d(a,Fe.memoizedState,e)},useTransition:function(){var e=$i($r)[0],a=ha().memoizedState;return[e,a]},useMutableSource:wd,useSyncExternalStore:Nd,useId:Bd,unstable_isNewReconciler:!1},hp={readContext:ga,useCallback:Od,useContext:ga,useEffect:qi,useImperativeHandle:_d,useInsertionEffect:Dd,useLayoutEffect:Id,useMemo:Td,useReducer:Bi,useRef:Md,useState:function(){return Bi($r)},useDebugValue:Vi,useDeferredValue:function(e){var a=ha();return Fe===null?a.memoizedState=e:$d(a,Fe.memoizedState,e)},useTransition:function(){var e=Bi($r)[0],a=ha().memoizedState;return[e,a]},useMutableSource:wd,useSyncExternalStore:Nd,useId:Bd,unstable_isNewReconciler:!1};function ja(e,a){if(e&&e.defaultProps){a=U({},a),e=e.defaultProps;for(var r in e)a[r]===void 0&&(a[r]=e[r]);return a}return a}function Ui(e,a,r,t){a=e.memoizedState,r=r(t,a),r=r==null?a:U({},a,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ut={isMounted:function(e){return(e=e._reactInternals)?vo(e)===e:!1},enqueueSetState:function(e,a,r){e=e._reactInternals;var t=Je(),i=no(e),d=Oa(t,i);d.payload=a,r!=null&&(d.callback=r),a=ro(e,d,i),a!==null&&(Na(a,e,i,t),Ft(a,e,i))},enqueueReplaceState:function(e,a,r){e=e._reactInternals;var t=Je(),i=no(e),d=Oa(t,i);d.tag=1,d.payload=a,r!=null&&(d.callback=r),a=ro(e,d,i),a!==null&&(Na(a,e,i,t),Ft(a,e,i))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var r=Je(),t=no(e),i=Oa(r,t);i.tag=2,a!=null&&(i.callback=a),a=ro(e,i,t),a!==null&&(Na(a,e,t,r),Ft(a,e,t))}};function Wd(e,a,r,t,i,d,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,d,p):a.prototype&&a.prototype.isPureReactComponent?!Pr(r,t)||!Pr(i,d):!0}function Gd(e,a,r){var t=!1,i=eo,d=a.contextType;return typeof d=="object"&&d!==null?d=ga(d):(i=Ze(a)?yo:Ue.current,t=a.contextTypes,d=(t=t!=null)?Go(e,i):eo),a=new a(r,d),e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ut,e.stateNode=a,a._reactInternals=e,t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=d),a}function Hd(e,a,r,t){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,t),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,t),a.state!==e&&Ut.enqueueReplaceState(a,a.state,null)}function Wi(e,a,r,t){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Ri(e);var d=a.contextType;typeof d=="object"&&d!==null?i.context=ga(d):(d=Ze(a)?yo:Ue.current,i.context=Go(e,d)),i.state=e.memoizedState,d=a.getDerivedStateFromProps,typeof d=="function"&&(Ui(e,a,d,r),i.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(a=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),a!==i.state&&Ut.enqueueReplaceState(i,i.state,null),_t(e,r,i,t),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function er(e,a){try{var r="",t=a;do r+=Z(t),t=t.return;while(t);var i=r}catch(d){i=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:a,stack:i,digest:null}}function Gi(e,a,r){return{value:e,source:null,stack:r??null,digest:a??null}}function Hi(e,a){try{console.error(a.value)}catch(r){setTimeout(function(){throw r})}}var xp=typeof WeakMap=="function"?WeakMap:Map;function Qd(e,a,r){r=Oa(-1,r),r.tag=3,r.payload={element:null};var t=a.value;return r.callback=function(){Xt||(Xt=!0,dn=t),Hi(e,a)},r}function Jd(e,a,r){r=Oa(-1,r),r.tag=3;var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var i=a.value;r.payload=function(){return t(i)},r.callback=function(){Hi(e,a)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(r.callback=function(){Hi(e,a),typeof t!="function"&&(so===null?so=new Set([this]):so.add(this));var p=a.stack;this.componentDidCatch(a.value,{componentStack:p!==null?p:""})}),r}function Kd(e,a,r){var t=e.pingCache;if(t===null){t=e.pingCache=new xp;var i=new Set;t.set(a,i)}else i=t.get(a),i===void 0&&(i=new Set,t.set(a,i));i.has(r)||(i.add(r),e=Rp.bind(null,e,a,r),a.then(e,e))}function Xd(e){do{var a;if((a=e.tag===13)&&(a=e.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return e;e=e.return}while(e!==null);return null}function Yd(e,a,r,t,i){return(e.mode&1)===0?(e===a?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(a=Oa(-1,1),a.tag=2,ro(r,a,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var vp=Y.ReactCurrentOwner,ea=!1;function Qe(e,a,r,t){a.child=e===null?vd(a,null,r,t):Ko(a,e.child,r,t)}function Zd(e,a,r,t,i){r=r.render;var d=a.ref;return Yo(a,i),t=Oi(e,a,r,t,d,i),r=Ti(),e!==null&&!ea?(a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~i,Ta(e,a,i)):(Ee&&r&&Ci(a),a.flags|=1,Qe(e,a,t,i),a.child)}function ec(e,a,r,t,i){if(e===null){var d=r.type;return typeof d=="function"&&!hn(d)&&d.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(a.tag=15,a.type=d,ac(e,a,d,t,i)):(e=rs(r.type,null,t,a,a.mode,i),e.ref=a.ref,e.return=a,a.child=e)}if(d=e.child,(e.lanes&i)===0){var p=d.memoizedProps;if(r=r.compare,r=r!==null?r:Pr,r(p,t)&&e.ref===a.ref)return Ta(e,a,i)}return a.flags|=1,e=co(d,t),e.ref=a.ref,e.return=a,a.child=e}function ac(e,a,r,t,i){if(e!==null){var d=e.memoizedProps;if(Pr(d,t)&&e.ref===a.ref)if(ea=!1,a.pendingProps=t=d,(e.lanes&i)!==0)(e.flags&131072)!==0&&(ea=!0);else return a.lanes=e.lanes,Ta(e,a,i)}return Qi(e,a,r,t,i)}function oc(e,a,r){var t=a.pendingProps,i=t.children,d=e!==null?e.memoizedState:null;if(t.mode==="hidden")if((a.mode&1)===0)a.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(or,la),la|=r;else{if((r&1073741824)===0)return e=d!==null?d.baseLanes|r:r,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:e,cachePool:null,transitions:null},a.updateQueue=null,we(or,la),la|=e,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=d!==null?d.baseLanes:r,we(or,la),la|=t}else d!==null?(t=d.baseLanes|r,a.memoizedState=null):t=r,we(or,la),la|=t;return Qe(e,a,i,r),a.child}function rc(e,a){var r=a.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(a.flags|=512,a.flags|=2097152)}function Qi(e,a,r,t,i){var d=Ze(r)?yo:Ue.current;return d=Go(a,d),Yo(a,i),r=Oi(e,a,r,t,d,i),t=Ti(),e!==null&&!ea?(a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~i,Ta(e,a,i)):(Ee&&t&&Ci(a),a.flags|=1,Qe(e,a,r,i),a.child)}function tc(e,a,r,t,i){if(Ze(r)){var d=!0;Et(a)}else d=!1;if(Yo(a,i),a.stateNode===null)Gt(e,a),Gd(a,r,t),Wi(a,r,t,i),t=!0;else if(e===null){var p=a.stateNode,y=a.memoizedProps;p.props=y;var w=p.context,I=r.contextType;typeof I=="object"&&I!==null?I=ga(I):(I=Ze(r)?yo:Ue.current,I=Go(a,I));var V=r.getDerivedStateFromProps,G=typeof V=="function"||typeof p.getSnapshotBeforeUpdate=="function";G||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(y!==t||w!==I)&&Hd(a,p,t,I),oo=!1;var q=a.memoizedState;p.state=q,_t(a,t,p,i),w=a.memoizedState,y!==t||q!==w||Ye.current||oo?(typeof V=="function"&&(Ui(a,r,V,t),w=a.memoizedState),(y=oo||Wd(a,r,y,t,q,w,I))?(G||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(a.flags|=4194308)):(typeof p.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=t,a.memoizedState=w),p.props=t,p.state=w,p.context=I,t=y):(typeof p.componentDidMount=="function"&&(a.flags|=4194308),t=!1)}else{p=a.stateNode,yd(e,a),y=a.memoizedProps,I=a.type===a.elementType?y:ja(a.type,y),p.props=I,G=a.pendingProps,q=p.context,w=r.contextType,typeof w=="object"&&w!==null?w=ga(w):(w=Ze(r)?yo:Ue.current,w=Go(a,w));var ee=r.getDerivedStateFromProps;(V=typeof ee=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(y!==G||q!==w)&&Hd(a,p,t,w),oo=!1,q=a.memoizedState,p.state=q,_t(a,t,p,i);var oe=a.memoizedState;y!==G||q!==oe||Ye.current||oo?(typeof ee=="function"&&(Ui(a,r,ee,t),oe=a.memoizedState),(I=oo||Wd(a,r,I,t,q,oe,w)||!1)?(V||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(t,oe,w),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(t,oe,w)),typeof p.componentDidUpdate=="function"&&(a.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof p.componentDidUpdate!="function"||y===e.memoizedProps&&q===e.memoizedState||(a.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&q===e.memoizedState||(a.flags|=1024),a.memoizedProps=t,a.memoizedState=oe),p.props=t,p.state=oe,p.context=w,t=I):(typeof p.componentDidUpdate!="function"||y===e.memoizedProps&&q===e.memoizedState||(a.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&q===e.memoizedState||(a.flags|=1024),t=!1)}return Ji(e,a,r,t,d,i)}function Ji(e,a,r,t,i,d){rc(e,a);var p=(a.flags&128)!==0;if(!t&&!p)return i&&dd(a,r,!1),Ta(e,a,d);t=a.stateNode,vp.current=a;var y=p&&typeof r.getDerivedStateFromError!="function"?null:t.render();return a.flags|=1,e!==null&&p?(a.child=Ko(a,e.child,null,d),a.child=Ko(a,null,y,d)):Qe(e,a,y,d),a.memoizedState=t.state,i&&dd(a,r,!0),a.child}function sc(e){var a=e.stateNode;a.pendingContext?nd(e,a.pendingContext,a.pendingContext!==a.context):a.context&&nd(e,a.context,!1),Mi(e,a.containerInfo)}function ic(e,a,r,t,i){return Jo(),Ni(i),a.flags|=256,Qe(e,a,r,t),a.child}var Ki={dehydrated:null,treeContext:null,retryLane:0};function Xi(e){return{baseLanes:e,cachePool:null,transitions:null}}function nc(e,a,r){var t=a.pendingProps,i=Le.current,d=!1,p=(a.flags&128)!==0,y;if((y=p)||(y=e!==null&&e.memoizedState===null?!1:(i&2)!==0),y?(d=!0,a.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),we(Le,i&1),e===null)return wi(a),e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((a.mode&1)===0?a.lanes=1:e.data==="$!"?a.lanes=8:a.lanes=1073741824,null):(p=t.children,e=t.fallback,d?(t=a.mode,d=a.child,p={mode:"hidden",children:p},(t&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=p):d=ts(p,t,0,null),e=Ao(e,t,r,null),d.return=a,e.return=a,d.sibling=e,a.child=d,a.child.memoizedState=Xi(r),a.memoizedState=Ki,e):Yi(a,p));if(i=e.memoizedState,i!==null&&(y=i.dehydrated,y!==null))return bp(e,a,p,t,y,i,r);if(d){d=t.fallback,p=a.mode,i=e.child,y=i.sibling;var w={mode:"hidden",children:t.children};return(p&1)===0&&a.child!==i?(t=a.child,t.childLanes=0,t.pendingProps=w,a.deletions=null):(t=co(i,w),t.subtreeFlags=i.subtreeFlags&14680064),y!==null?d=co(y,d):(d=Ao(d,p,r,null),d.flags|=2),d.return=a,t.return=a,t.sibling=d,a.child=t,t=d,d=a.child,p=e.child.memoizedState,p=p===null?Xi(r):{baseLanes:p.baseLanes|r,cachePool:null,transitions:p.transitions},d.memoizedState=p,d.childLanes=e.childLanes&~r,a.memoizedState=Ki,t}return d=e.child,e=d.sibling,t=co(d,{mode:"visible",children:t.children}),(a.mode&1)===0&&(t.lanes=r),t.return=a,t.sibling=null,e!==null&&(r=a.deletions,r===null?(a.deletions=[e],a.flags|=16):r.push(e)),a.child=t,a.memoizedState=null,t}function Yi(e,a){return a=ts({mode:"visible",children:a},e.mode,0,null),a.return=e,e.child=a}function Wt(e,a,r,t){return t!==null&&Ni(t),Ko(a,e.child,null,r),e=Yi(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function bp(e,a,r,t,i,d,p){if(r)return a.flags&256?(a.flags&=-257,t=Gi(Error(l(422))),Wt(e,a,p,t)):a.memoizedState!==null?(a.child=e.child,a.flags|=128,null):(d=t.fallback,i=a.mode,t=ts({mode:"visible",children:t.children},i,0,null),d=Ao(d,i,p,null),d.flags|=2,t.return=a,d.return=a,t.sibling=d,a.child=t,(a.mode&1)!==0&&Ko(a,e.child,null,p),a.child.memoizedState=Xi(p),a.memoizedState=Ki,d);if((a.mode&1)===0)return Wt(e,a,p,null);if(i.data==="$!"){if(t=i.nextSibling&&i.nextSibling.dataset,t)var y=t.dgst;return t=y,d=Error(l(419)),t=Gi(d,t,void 0),Wt(e,a,p,t)}if(y=(p&e.childLanes)!==0,ea||y){if(t=$e,t!==null){switch(p&-p){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(t.suspendedLanes|p))!==0?0:i,i!==0&&i!==d.retryLane&&(d.retryLane=i,_a(e,i),Na(t,e,i,-1))}return gn(),t=Gi(Error(l(421))),Wt(e,a,p,t)}return i.data==="$?"?(a.flags|=128,a.child=e.child,a=Mp.bind(null,e),i._reactRetry=a,null):(e=d.treeContext,na=Ya(i.nextSibling),ia=a,Ee=!0,Ca=null,e!==null&&(pa[fa++]=Ia,pa[fa++]=Fa,pa[fa++]=Co,Ia=e.id,Fa=e.overflow,Co=a),a=Yi(a,t.children),a.flags|=4096,a)}function lc(e,a,r){e.lanes|=a;var t=e.alternate;t!==null&&(t.lanes|=a),Li(e.return,a,r)}function Zi(e,a,r,t,i){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:t,tail:r,tailMode:i}:(d.isBackwards=a,d.rendering=null,d.renderingStartTime=0,d.last=t,d.tail=r,d.tailMode=i)}function dc(e,a,r){var t=a.pendingProps,i=t.revealOrder,d=t.tail;if(Qe(e,a,t.children,r),t=Le.current,(t&2)!==0)t=t&1|2,a.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lc(e,r,a);else if(e.tag===19)lc(e,r,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}if(we(Le,t),(a.mode&1)===0)a.memoizedState=null;else switch(i){case"forwards":for(r=a.child,i=null;r!==null;)e=r.alternate,e!==null&&Ot(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=a.child,a.child=null):(i=r.sibling,r.sibling=null),Zi(a,!1,i,r,d);break;case"backwards":for(r=null,i=a.child,a.child=null;i!==null;){if(e=i.alternate,e!==null&&Ot(e)===null){a.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Zi(a,!0,r,null,d);break;case"together":Zi(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Gt(e,a){(a.mode&1)===0&&e!==null&&(e.alternate=null,a.alternate=null,a.flags|=2)}function Ta(e,a,r){if(e!==null&&(a.dependencies=e.dependencies),ko|=a.lanes,(r&a.childLanes)===0)return null;if(e!==null&&a.child!==e.child)throw Error(l(153));if(a.child!==null){for(e=a.child,r=co(e,e.pendingProps),a.child=r,r.return=a;e.sibling!==null;)e=e.sibling,r=r.sibling=co(e,e.pendingProps),r.return=a;r.sibling=null}return a.child}function yp(e,a,r){switch(a.tag){case 3:sc(a),Jo();break;case 5:Sd(a);break;case 1:Ze(a.type)&&Et(a);break;case 4:Mi(a,a.stateNode.containerInfo);break;case 10:var t=a.type._context,i=a.memoizedProps.value;we(Dt,t._currentValue),t._currentValue=i;break;case 13:if(t=a.memoizedState,t!==null)return t.dehydrated!==null?(we(Le,Le.current&1),a.flags|=128,null):(r&a.child.childLanes)!==0?nc(e,a,r):(we(Le,Le.current&1),e=Ta(e,a,r),e!==null?e.sibling:null);we(Le,Le.current&1);break;case 19:if(t=(r&a.childLanes)!==0,(e.flags&128)!==0){if(t)return dc(e,a,r);a.flags|=128}if(i=a.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(Le,Le.current),t)break;return null;case 22:case 23:return a.lanes=0,oc(e,a,r)}return Ta(e,a,r)}var cc,en,uc,mc;cc=function(e,a){for(var r=a.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===a)break;for(;r.sibling===null;){if(r.return===null||r.return===a)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},en=function(){},uc=function(e,a,r,t){var i=e.memoizedProps;if(i!==t){e=a.stateNode,wo(La.current);var d=null;switch(r){case"input":i=Ls(e,i),t=Ls(e,t),d=[];break;case"select":i=U({},i,{value:void 0}),t=U({},t,{value:void 0}),d=[];break;case"textarea":i=Ms(e,i),t=Ms(e,t),d=[];break;default:typeof i.onClick!="function"&&typeof t.onClick=="function"&&(e.onclick=Nt)}Ds(r,t);var p;r=null;for(I in i)if(!t.hasOwnProperty(I)&&i.hasOwnProperty(I)&&i[I]!=null)if(I==="style"){var y=i[I];for(p in y)y.hasOwnProperty(p)&&(r||(r={}),r[p]="")}else I!=="dangerouslySetInnerHTML"&&I!=="children"&&I!=="suppressContentEditableWarning"&&I!=="suppressHydrationWarning"&&I!=="autoFocus"&&(m.hasOwnProperty(I)?d||(d=[]):(d=d||[]).push(I,null));for(I in t){var w=t[I];if(y=i!=null?i[I]:void 0,t.hasOwnProperty(I)&&w!==y&&(w!=null||y!=null))if(I==="style")if(y){for(p in y)!y.hasOwnProperty(p)||w&&w.hasOwnProperty(p)||(r||(r={}),r[p]="");for(p in w)w.hasOwnProperty(p)&&y[p]!==w[p]&&(r||(r={}),r[p]=w[p])}else r||(d||(d=[]),d.push(I,r)),r=w;else I==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,y=y?y.__html:void 0,w!=null&&y!==w&&(d=d||[]).push(I,w)):I==="children"?typeof w!="string"&&typeof w!="number"||(d=d||[]).push(I,""+w):I!=="suppressContentEditableWarning"&&I!=="suppressHydrationWarning"&&(m.hasOwnProperty(I)?(w!=null&&I==="onScroll"&&Ne("scroll",e),d||y===w||(d=[])):(d=d||[]).push(I,w))}r&&(d=d||[]).push("style",r);var I=d;(a.updateQueue=I)&&(a.flags|=4)}},mc=function(e,a,r,t){r!==t&&(a.flags|=4)};function qr(e,a){if(!Ee)switch(e.tailMode){case"hidden":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function Ge(e){var a=e.alternate!==null&&e.alternate.child===e.child,r=0,t=0;if(a)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,t|=i.subtreeFlags&14680064,t|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,t|=i.subtreeFlags,t|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=t,e.childLanes=r,a}function Cp(e,a,r){var t=a.pendingProps;switch(ji(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(a),null;case 1:return Ze(a.type)&&Pt(),Ge(a),null;case 3:return t=a.stateNode,Zo(),ke(Ye),ke(Ue),Ii(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Mt(a)?a.flags|=4:e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Ca!==null&&(mn(Ca),Ca=null))),en(e,a),Ge(a),null;case 5:zi(a);var i=wo(_r.current);if(r=a.type,e!==null&&a.stateNode!=null)uc(e,a,r,t,i),e.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!t){if(a.stateNode===null)throw Error(l(166));return Ge(a),null}if(e=wo(La.current),Mt(a)){t=a.stateNode,r=a.type;var d=a.memoizedProps;switch(t[Ea]=a,t[Mr]=d,e=(a.mode&1)!==0,r){case"dialog":Ne("cancel",t),Ne("close",t);break;case"iframe":case"object":case"embed":Ne("load",t);break;case"video":case"audio":for(i=0;i<Lr.length;i++)Ne(Lr[i],t);break;case"source":Ne("error",t);break;case"img":case"image":case"link":Ne("error",t),Ne("load",t);break;case"details":Ne("toggle",t);break;case"input":Gn(t,d),Ne("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!d.multiple},Ne("invalid",t);break;case"textarea":Jn(t,d),Ne("invalid",t)}Ds(r,d),i=null;for(var p in d)if(d.hasOwnProperty(p)){var y=d[p];p==="children"?typeof y=="string"?t.textContent!==y&&(d.suppressHydrationWarning!==!0&&wt(t.textContent,y,e),i=["children",y]):typeof y=="number"&&t.textContent!==""+y&&(d.suppressHydrationWarning!==!0&&wt(t.textContent,y,e),i=["children",""+y]):m.hasOwnProperty(p)&&y!=null&&p==="onScroll"&&Ne("scroll",t)}switch(r){case"input":at(t),Qn(t,d,!0);break;case"textarea":at(t),Xn(t);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(t.onclick=Nt)}t=i,a.updateQueue=t,t!==null&&(a.flags|=4)}else{p=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Yn(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=p.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof t.is=="string"?e=p.createElement(r,{is:t.is}):(e=p.createElement(r),r==="select"&&(p=e,t.multiple?p.multiple=!0:t.size&&(p.size=t.size))):e=p.createElementNS(e,r),e[Ea]=a,e[Mr]=t,cc(e,a,!1,!1),a.stateNode=e;e:{switch(p=Is(r,t),r){case"dialog":Ne("cancel",e),Ne("close",e),i=t;break;case"iframe":case"object":case"embed":Ne("load",e),i=t;break;case"video":case"audio":for(i=0;i<Lr.length;i++)Ne(Lr[i],e);i=t;break;case"source":Ne("error",e),i=t;break;case"img":case"image":case"link":Ne("error",e),Ne("load",e),i=t;break;case"details":Ne("toggle",e),i=t;break;case"input":Gn(e,t),i=Ls(e,t),Ne("invalid",e);break;case"option":i=t;break;case"select":e._wrapperState={wasMultiple:!!t.multiple},i=U({},t,{value:void 0}),Ne("invalid",e);break;case"textarea":Jn(e,t),i=Ms(e,t),Ne("invalid",e);break;default:i=t}Ds(r,i),y=i;for(d in y)if(y.hasOwnProperty(d)){var w=y[d];d==="style"?al(e,w):d==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,w!=null&&Zn(e,w)):d==="children"?typeof w=="string"?(r!=="textarea"||w!=="")&&cr(e,w):typeof w=="number"&&cr(e,""+w):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(m.hasOwnProperty(d)?w!=null&&d==="onScroll"&&Ne("scroll",e):w!=null&&z(e,d,w,p))}switch(r){case"input":at(e),Qn(e,t,!1);break;case"textarea":at(e),Xn(e);break;case"option":t.value!=null&&e.setAttribute("value",""+he(t.value));break;case"select":e.multiple=!!t.multiple,d=t.value,d!=null?Do(e,!!t.multiple,d,!1):t.defaultValue!=null&&Do(e,!!t.multiple,t.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Nt)}switch(r){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}}t&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return Ge(a),null;case 6:if(e&&a.stateNode!=null)mc(e,a,e.memoizedProps,t);else{if(typeof t!="string"&&a.stateNode===null)throw Error(l(166));if(r=wo(_r.current),wo(La.current),Mt(a)){if(t=a.stateNode,r=a.memoizedProps,t[Ea]=a,(d=t.nodeValue!==r)&&(e=ia,e!==null))switch(e.tag){case 3:wt(t.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wt(t.nodeValue,r,(e.mode&1)!==0)}d&&(a.flags|=4)}else t=(r.nodeType===9?r:r.ownerDocument).createTextNode(t),t[Ea]=a,a.stateNode=t}return Ge(a),null;case 13:if(ke(Le),t=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&na!==null&&(a.mode&1)!==0&&(a.flags&128)===0)gd(),Jo(),a.flags|=98560,d=!1;else if(d=Mt(a),t!==null&&t.dehydrated!==null){if(e===null){if(!d)throw Error(l(318));if(d=a.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(l(317));d[Ea]=a}else Jo(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ge(a),d=!1}else Ca!==null&&(mn(Ca),Ca=null),d=!0;if(!d)return a.flags&65536?a:null}return(a.flags&128)!==0?(a.lanes=r,a):(t=t!==null,t!==(e!==null&&e.memoizedState!==null)&&t&&(a.child.flags|=8192,(a.mode&1)!==0&&(e===null||(Le.current&1)!==0?_e===0&&(_e=3):gn())),a.updateQueue!==null&&(a.flags|=4),Ge(a),null);case 4:return Zo(),en(e,a),e===null&&Ar(a.stateNode.containerInfo),Ge(a),null;case 10:return Ei(a.type._context),Ge(a),null;case 17:return Ze(a.type)&&Pt(),Ge(a),null;case 19:if(ke(Le),d=a.memoizedState,d===null)return Ge(a),null;if(t=(a.flags&128)!==0,p=d.rendering,p===null)if(t)qr(d,!1);else{if(_e!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(p=Ot(e),p!==null){for(a.flags|=128,qr(d,!1),t=p.updateQueue,t!==null&&(a.updateQueue=t,a.flags|=4),a.subtreeFlags=0,t=r,r=a.child;r!==null;)d=r,e=t,d.flags&=14680066,p=d.alternate,p===null?(d.childLanes=0,d.lanes=e,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=p.childLanes,d.lanes=p.lanes,d.child=p.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=p.memoizedProps,d.memoizedState=p.memoizedState,d.updateQueue=p.updateQueue,d.type=p.type,e=p.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return we(Le,Le.current&1|2),a.child}e=e.sibling}d.tail!==null&&ze()>rr&&(a.flags|=128,t=!0,qr(d,!1),a.lanes=4194304)}else{if(!t)if(e=Ot(p),e!==null){if(a.flags|=128,t=!0,r=e.updateQueue,r!==null&&(a.updateQueue=r,a.flags|=4),qr(d,!0),d.tail===null&&d.tailMode==="hidden"&&!p.alternate&&!Ee)return Ge(a),null}else 2*ze()-d.renderingStartTime>rr&&r!==1073741824&&(a.flags|=128,t=!0,qr(d,!1),a.lanes=4194304);d.isBackwards?(p.sibling=a.child,a.child=p):(r=d.last,r!==null?r.sibling=p:a.child=p,d.last=p)}return d.tail!==null?(a=d.tail,d.rendering=a,d.tail=a.sibling,d.renderingStartTime=ze(),a.sibling=null,r=Le.current,we(Le,t?r&1|2:r&1),a):(Ge(a),null);case 22:case 23:return fn(),t=a.memoizedState!==null,e!==null&&e.memoizedState!==null!==t&&(a.flags|=8192),t&&(a.mode&1)!==0?(la&1073741824)!==0&&(Ge(a),a.subtreeFlags&6&&(a.flags|=8192)):Ge(a),null;case 24:return null;case 25:return null}throw Error(l(156,a.tag))}function jp(e,a){switch(ji(a),a.tag){case 1:return Ze(a.type)&&Pt(),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Zo(),ke(Ye),ke(Ue),Ii(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 5:return zi(a),null;case 13:if(ke(Le),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(l(340));Jo()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return ke(Le),null;case 4:return Zo(),null;case 10:return Ei(a.type._context),null;case 22:case 23:return fn(),null;case 24:return null;default:return null}}var Ht=!1,He=!1,Sp=typeof WeakSet=="function"?WeakSet:Set,ae=null;function ar(e,a){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(t){Me(e,a,t)}else r.current=null}function an(e,a,r){try{r()}catch(t){Me(e,a,t)}}var pc=!1;function wp(e,a){if(pi=pt,e=Wl(),si(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var t=r.getSelection&&r.getSelection();if(t&&t.rangeCount!==0){r=t.anchorNode;var i=t.anchorOffset,d=t.focusNode;t=t.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break e}var p=0,y=-1,w=-1,I=0,V=0,G=e,q=null;a:for(;;){for(var ee;G!==r||i!==0&&G.nodeType!==3||(y=p+i),G!==d||t!==0&&G.nodeType!==3||(w=p+t),G.nodeType===3&&(p+=G.nodeValue.length),(ee=G.firstChild)!==null;)q=G,G=ee;for(;;){if(G===e)break a;if(q===r&&++I===i&&(y=p),q===d&&++V===t&&(w=p),(ee=G.nextSibling)!==null)break;G=q,q=G.parentNode}G=ee}r=y===-1||w===-1?null:{start:y,end:w}}else r=null}r=r||{start:0,end:0}}else r=null;for(fi={focusedElem:e,selectionRange:r},pt=!1,ae=a;ae!==null;)if(a=ae,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,ae=e;else for(;ae!==null;){a=ae;try{var oe=a.alternate;if((a.flags&1024)!==0)switch(a.tag){case 0:case 11:case 15:break;case 1:if(oe!==null){var te=oe.memoizedProps,De=oe.memoizedState,A=a.stateNode,k=A.getSnapshotBeforeUpdate(a.elementType===a.type?te:ja(a.type,te),De);A.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var R=a.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(J){Me(a,a.return,J)}if(e=a.sibling,e!==null){e.return=a.return,ae=e;break}ae=a.return}return oe=pc,pc=!1,oe}function Vr(e,a,r){var t=a.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var d=i.destroy;i.destroy=void 0,d!==void 0&&an(a,r,d)}i=i.next}while(i!==t)}}function Qt(e,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var r=a=a.next;do{if((r.tag&e)===e){var t=r.create;r.destroy=t()}r=r.next}while(r!==a)}}function on(e){var a=e.ref;if(a!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof a=="function"?a(e):a.current=e}}function fc(e){var a=e.alternate;a!==null&&(e.alternate=null,fc(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&(delete a[Ea],delete a[Mr],delete a[vi],delete a[ip],delete a[np])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gc(e){return e.tag===5||e.tag===3||e.tag===4}function hc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rn(e,a,r){var t=e.tag;if(t===5||t===6)e=e.stateNode,a?r.nodeType===8?r.parentNode.insertBefore(e,a):r.insertBefore(e,a):(r.nodeType===8?(a=r.parentNode,a.insertBefore(e,r)):(a=r,a.appendChild(e)),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=Nt));else if(t!==4&&(e=e.child,e!==null))for(rn(e,a,r),e=e.sibling;e!==null;)rn(e,a,r),e=e.sibling}function tn(e,a,r){var t=e.tag;if(t===5||t===6)e=e.stateNode,a?r.insertBefore(e,a):r.appendChild(e);else if(t!==4&&(e=e.child,e!==null))for(tn(e,a,r),e=e.sibling;e!==null;)tn(e,a,r),e=e.sibling}var qe=null,Sa=!1;function to(e,a,r){for(r=r.child;r!==null;)xc(e,a,r),r=r.sibling}function xc(e,a,r){if(Pa&&typeof Pa.onCommitFiberUnmount=="function")try{Pa.onCommitFiberUnmount(nt,r)}catch{}switch(r.tag){case 5:He||ar(r,a);case 6:var t=qe,i=Sa;qe=null,to(e,a,r),qe=t,Sa=i,qe!==null&&(Sa?(e=qe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):qe.removeChild(r.stateNode));break;case 18:qe!==null&&(Sa?(e=qe,r=r.stateNode,e.nodeType===8?xi(e.parentNode,r):e.nodeType===1&&xi(e,r),Cr(e)):xi(qe,r.stateNode));break;case 4:t=qe,i=Sa,qe=r.stateNode.containerInfo,Sa=!0,to(e,a,r),qe=t,Sa=i;break;case 0:case 11:case 14:case 15:if(!He&&(t=r.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){i=t=t.next;do{var d=i,p=d.destroy;d=d.tag,p!==void 0&&((d&2)!==0||(d&4)!==0)&&an(r,a,p),i=i.next}while(i!==t)}to(e,a,r);break;case 1:if(!He&&(ar(r,a),t=r.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=r.memoizedProps,t.state=r.memoizedState,t.componentWillUnmount()}catch(y){Me(r,a,y)}to(e,a,r);break;case 21:to(e,a,r);break;case 22:r.mode&1?(He=(t=He)||r.memoizedState!==null,to(e,a,r),He=t):to(e,a,r);break;default:to(e,a,r)}}function vc(e){var a=e.updateQueue;if(a!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Sp),a.forEach(function(t){var i=zp.bind(null,e,t);r.has(t)||(r.add(t),t.then(i,i))})}}function wa(e,a){var r=a.deletions;if(r!==null)for(var t=0;t<r.length;t++){var i=r[t];try{var d=e,p=a,y=p;e:for(;y!==null;){switch(y.tag){case 5:qe=y.stateNode,Sa=!1;break e;case 3:qe=y.stateNode.containerInfo,Sa=!0;break e;case 4:qe=y.stateNode.containerInfo,Sa=!0;break e}y=y.return}if(qe===null)throw Error(l(160));xc(d,p,i),qe=null,Sa=!1;var w=i.alternate;w!==null&&(w.return=null),i.return=null}catch(I){Me(i,a,I)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)bc(a,e),a=a.sibling}function bc(e,a){var r=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(wa(a,e),Ra(e),t&4){try{Vr(3,e,e.return),Qt(3,e)}catch(te){Me(e,e.return,te)}try{Vr(5,e,e.return)}catch(te){Me(e,e.return,te)}}break;case 1:wa(a,e),Ra(e),t&512&&r!==null&&ar(r,r.return);break;case 5:if(wa(a,e),Ra(e),t&512&&r!==null&&ar(r,r.return),e.flags&32){var i=e.stateNode;try{cr(i,"")}catch(te){Me(e,e.return,te)}}if(t&4&&(i=e.stateNode,i!=null)){var d=e.memoizedProps,p=r!==null?r.memoizedProps:d,y=e.type,w=e.updateQueue;if(e.updateQueue=null,w!==null)try{y==="input"&&d.type==="radio"&&d.name!=null&&Hn(i,d),Is(y,p);var I=Is(y,d);for(p=0;p<w.length;p+=2){var V=w[p],G=w[p+1];V==="style"?al(i,G):V==="dangerouslySetInnerHTML"?Zn(i,G):V==="children"?cr(i,G):z(i,V,G,I)}switch(y){case"input":As(i,d);break;case"textarea":Kn(i,d);break;case"select":var q=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!d.multiple;var ee=d.value;ee!=null?Do(i,!!d.multiple,ee,!1):q!==!!d.multiple&&(d.defaultValue!=null?Do(i,!!d.multiple,d.defaultValue,!0):Do(i,!!d.multiple,d.multiple?[]:"",!1))}i[Mr]=d}catch(te){Me(e,e.return,te)}}break;case 6:if(wa(a,e),Ra(e),t&4){if(e.stateNode===null)throw Error(l(162));i=e.stateNode,d=e.memoizedProps;try{i.nodeValue=d}catch(te){Me(e,e.return,te)}}break;case 3:if(wa(a,e),Ra(e),t&4&&r!==null&&r.memoizedState.isDehydrated)try{Cr(a.containerInfo)}catch(te){Me(e,e.return,te)}break;case 4:wa(a,e),Ra(e);break;case 13:wa(a,e),Ra(e),i=e.child,i.flags&8192&&(d=i.memoizedState!==null,i.stateNode.isHidden=d,!d||i.alternate!==null&&i.alternate.memoizedState!==null||(ln=ze())),t&4&&vc(e);break;case 22:if(V=r!==null&&r.memoizedState!==null,e.mode&1?(He=(I=He)||V,wa(a,e),He=I):wa(a,e),Ra(e),t&8192){if(I=e.memoizedState!==null,(e.stateNode.isHidden=I)&&!V&&(e.mode&1)!==0)for(ae=e,V=e.child;V!==null;){for(G=ae=V;ae!==null;){switch(q=ae,ee=q.child,q.tag){case 0:case 11:case 14:case 15:Vr(4,q,q.return);break;case 1:ar(q,q.return);var oe=q.stateNode;if(typeof oe.componentWillUnmount=="function"){t=q,r=q.return;try{a=t,oe.props=a.memoizedProps,oe.state=a.memoizedState,oe.componentWillUnmount()}catch(te){Me(t,r,te)}}break;case 5:ar(q,q.return);break;case 22:if(q.memoizedState!==null){jc(G);continue}}ee!==null?(ee.return=q,ae=ee):jc(G)}V=V.sibling}e:for(V=null,G=e;;){if(G.tag===5){if(V===null){V=G;try{i=G.stateNode,I?(d=i.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(y=G.stateNode,w=G.memoizedProps.style,p=w!=null&&w.hasOwnProperty("display")?w.display:null,y.style.display=el("display",p))}catch(te){Me(e,e.return,te)}}}else if(G.tag===6){if(V===null)try{G.stateNode.nodeValue=I?"":G.memoizedProps}catch(te){Me(e,e.return,te)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===e)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===e)break e;for(;G.sibling===null;){if(G.return===null||G.return===e)break e;V===G&&(V=null),G=G.return}V===G&&(V=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:wa(a,e),Ra(e),t&4&&vc(e);break;case 21:break;default:wa(a,e),Ra(e)}}function Ra(e){var a=e.flags;if(a&2){try{e:{for(var r=e.return;r!==null;){if(gc(r)){var t=r;break e}r=r.return}throw Error(l(160))}switch(t.tag){case 5:var i=t.stateNode;t.flags&32&&(cr(i,""),t.flags&=-33);var d=hc(e);tn(e,d,i);break;case 3:case 4:var p=t.stateNode.containerInfo,y=hc(e);rn(e,y,p);break;default:throw Error(l(161))}}catch(w){Me(e,e.return,w)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Np(e,a,r){ae=e,yc(e)}function yc(e,a,r){for(var t=(e.mode&1)!==0;ae!==null;){var i=ae,d=i.child;if(i.tag===22&&t){var p=i.memoizedState!==null||Ht;if(!p){var y=i.alternate,w=y!==null&&y.memoizedState!==null||He;y=Ht;var I=He;if(Ht=p,(He=w)&&!I)for(ae=i;ae!==null;)p=ae,w=p.child,p.tag===22&&p.memoizedState!==null?Sc(i):w!==null?(w.return=p,ae=w):Sc(i);for(;d!==null;)ae=d,yc(d),d=d.sibling;ae=i,Ht=y,He=I}Cc(e)}else(i.subtreeFlags&8772)!==0&&d!==null?(d.return=i,ae=d):Cc(e)}}function Cc(e){for(;ae!==null;){var a=ae;if((a.flags&8772)!==0){var r=a.alternate;try{if((a.flags&8772)!==0)switch(a.tag){case 0:case 11:case 15:He||Qt(5,a);break;case 1:var t=a.stateNode;if(a.flags&4&&!He)if(r===null)t.componentDidMount();else{var i=a.elementType===a.type?r.memoizedProps:ja(a.type,r.memoizedProps);t.componentDidUpdate(i,r.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var d=a.updateQueue;d!==null&&jd(a,d,t);break;case 3:var p=a.updateQueue;if(p!==null){if(r=null,a.child!==null)switch(a.child.tag){case 5:r=a.child.stateNode;break;case 1:r=a.child.stateNode}jd(a,p,r)}break;case 5:var y=a.stateNode;if(r===null&&a.flags&4){r=y;var w=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":w.autoFocus&&r.focus();break;case"img":w.src&&(r.src=w.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var I=a.alternate;if(I!==null){var V=I.memoizedState;if(V!==null){var G=V.dehydrated;G!==null&&Cr(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}He||a.flags&512&&on(a)}catch(q){Me(a,a.return,q)}}if(a===e){ae=null;break}if(r=a.sibling,r!==null){r.return=a.return,ae=r;break}ae=a.return}}function jc(e){for(;ae!==null;){var a=ae;if(a===e){ae=null;break}var r=a.sibling;if(r!==null){r.return=a.return,ae=r;break}ae=a.return}}function Sc(e){for(;ae!==null;){var a=ae;try{switch(a.tag){case 0:case 11:case 15:var r=a.return;try{Qt(4,a)}catch(w){Me(a,r,w)}break;case 1:var t=a.stateNode;if(typeof t.componentDidMount=="function"){var i=a.return;try{t.componentDidMount()}catch(w){Me(a,i,w)}}var d=a.return;try{on(a)}catch(w){Me(a,d,w)}break;case 5:var p=a.return;try{on(a)}catch(w){Me(a,p,w)}}}catch(w){Me(a,a.return,w)}if(a===e){ae=null;break}var y=a.sibling;if(y!==null){y.return=a.return,ae=y;break}ae=a.return}}var kp=Math.ceil,Jt=Y.ReactCurrentDispatcher,sn=Y.ReactCurrentOwner,xa=Y.ReactCurrentBatchConfig,be=0,$e=null,Ie=null,Ve=0,la=0,or=Za(0),_e=0,Ur=null,ko=0,Kt=0,nn=0,Wr=null,aa=null,ln=0,rr=1/0,$a=null,Xt=!1,dn=null,so=null,Yt=!1,io=null,Zt=0,Gr=0,cn=null,es=-1,as=0;function Je(){return(be&6)!==0?ze():es!==-1?es:es=ze()}function no(e){return(e.mode&1)===0?1:(be&2)!==0&&Ve!==0?Ve&-Ve:dp.transition!==null?(as===0&&(as=hl()),as):(e=Se,e!==0||(e=window.event,e=e===void 0?16:Nl(e.type)),e)}function Na(e,a,r,t){if(50<Gr)throw Gr=0,cn=null,Error(l(185));hr(e,r,t),((be&2)===0||e!==$e)&&(e===$e&&((be&2)===0&&(Kt|=r),_e===4&&lo(e,Ve)),oa(e,t),r===1&&be===0&&(a.mode&1)===0&&(rr=ze()+500,Lt&&ao()))}function oa(e,a){var r=e.callbackNode;dm(e,a);var t=ct(e,e===$e?Ve:0);if(t===0)r!==null&&pl(r),e.callbackNode=null,e.callbackPriority=0;else if(a=t&-t,e.callbackPriority!==a){if(r!=null&&pl(r),a===1)e.tag===0?lp(Nc.bind(null,e)):cd(Nc.bind(null,e)),tp(function(){(be&6)===0&&ao()}),r=null;else{switch(xl(t)){case 1:r=qs;break;case 4:r=fl;break;case 16:r=it;break;case 536870912:r=gl;break;default:r=it}r=zc(r,wc.bind(null,e))}e.callbackPriority=a,e.callbackNode=r}}function wc(e,a){if(es=-1,as=0,(be&6)!==0)throw Error(l(327));var r=e.callbackNode;if(tr()&&e.callbackNode!==r)return null;var t=ct(e,e===$e?Ve:0);if(t===0)return null;if((t&30)!==0||(t&e.expiredLanes)!==0||a)a=os(e,t);else{a=t;var i=be;be|=2;var d=Pc();($e!==e||Ve!==a)&&($a=null,rr=ze()+500,Eo(e,a));do try{Lp();break}catch(y){kc(e,y)}while(!0);Pi(),Jt.current=d,be=i,Ie!==null?a=0:($e=null,Ve=0,a=_e)}if(a!==0){if(a===2&&(i=Vs(e),i!==0&&(t=i,a=un(e,i))),a===1)throw r=Ur,Eo(e,0),lo(e,t),oa(e,ze()),r;if(a===6)lo(e,t);else{if(i=e.current.alternate,(t&30)===0&&!Pp(i)&&(a=os(e,t),a===2&&(d=Vs(e),d!==0&&(t=d,a=un(e,d))),a===1))throw r=Ur,Eo(e,0),lo(e,t),oa(e,ze()),r;switch(e.finishedWork=i,e.finishedLanes=t,a){case 0:case 1:throw Error(l(345));case 2:Lo(e,aa,$a);break;case 3:if(lo(e,t),(t&130023424)===t&&(a=ln+500-ze(),10<a)){if(ct(e,0)!==0)break;if(i=e.suspendedLanes,(i&t)!==t){Je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=hi(Lo.bind(null,e,aa,$a),a);break}Lo(e,aa,$a);break;case 4:if(lo(e,t),(t&4194240)===t)break;for(a=e.eventTimes,i=-1;0<t;){var p=31-ba(t);d=1<<p,p=a[p],p>i&&(i=p),t&=~d}if(t=i,t=ze()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*kp(t/1960))-t,10<t){e.timeoutHandle=hi(Lo.bind(null,e,aa,$a),t);break}Lo(e,aa,$a);break;case 5:Lo(e,aa,$a);break;default:throw Error(l(329))}}}return oa(e,ze()),e.callbackNode===r?wc.bind(null,e):null}function un(e,a){var r=Wr;return e.current.memoizedState.isDehydrated&&(Eo(e,a).flags|=256),e=os(e,a),e!==2&&(a=aa,aa=r,a!==null&&mn(a)),e}function mn(e){aa===null?aa=e:aa.push.apply(aa,e)}function Pp(e){for(var a=e;;){if(a.flags&16384){var r=a.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var t=0;t<r.length;t++){var i=r[t],d=i.getSnapshot;i=i.value;try{if(!ya(d(),i))return!1}catch{return!1}}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function lo(e,a){for(a&=~nn,a&=~Kt,e.suspendedLanes|=a,e.pingedLanes&=~a,e=e.expirationTimes;0<a;){var r=31-ba(a),t=1<<r;e[r]=-1,a&=~t}}function Nc(e){if((be&6)!==0)throw Error(l(327));tr();var a=ct(e,0);if((a&1)===0)return oa(e,ze()),null;var r=os(e,a);if(e.tag!==0&&r===2){var t=Vs(e);t!==0&&(a=t,r=un(e,t))}if(r===1)throw r=Ur,Eo(e,0),lo(e,a),oa(e,ze()),r;if(r===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=a,Lo(e,aa,$a),oa(e,ze()),null}function pn(e,a){var r=be;be|=1;try{return e(a)}finally{be=r,be===0&&(rr=ze()+500,Lt&&ao())}}function Po(e){io!==null&&io.tag===0&&(be&6)===0&&tr();var a=be;be|=1;var r=xa.transition,t=Se;try{if(xa.transition=null,Se=1,e)return e()}finally{Se=t,xa.transition=r,be=a,(be&6)===0&&ao()}}function fn(){la=or.current,ke(or)}function Eo(e,a){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,rp(r)),Ie!==null)for(r=Ie.return;r!==null;){var t=r;switch(ji(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&Pt();break;case 3:Zo(),ke(Ye),ke(Ue),Ii();break;case 5:zi(t);break;case 4:Zo();break;case 13:ke(Le);break;case 19:ke(Le);break;case 10:Ei(t.type._context);break;case 22:case 23:fn()}r=r.return}if($e=e,Ie=e=co(e.current,null),Ve=la=a,_e=0,Ur=null,nn=Kt=ko=0,aa=Wr=null,So!==null){for(a=0;a<So.length;a++)if(r=So[a],t=r.interleaved,t!==null){r.interleaved=null;var i=t.next,d=r.pending;if(d!==null){var p=d.next;d.next=i,t.next=p}r.pending=t}So=null}return e}function kc(e,a){do{var r=Ie;try{if(Pi(),Tt.current=Vt,$t){for(var t=Ae.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}$t=!1}if(No=0,Te=Fe=Ae=null,Or=!1,Tr=0,sn.current=null,r===null||r.return===null){_e=1,Ur=a,Ie=null;break}e:{var d=e,p=r.return,y=r,w=a;if(a=Ve,y.flags|=32768,w!==null&&typeof w=="object"&&typeof w.then=="function"){var I=w,V=y,G=V.tag;if((V.mode&1)===0&&(G===0||G===11||G===15)){var q=V.alternate;q?(V.updateQueue=q.updateQueue,V.memoizedState=q.memoizedState,V.lanes=q.lanes):(V.updateQueue=null,V.memoizedState=null)}var ee=Xd(p);if(ee!==null){ee.flags&=-257,Yd(ee,p,y,d,a),ee.mode&1&&Kd(d,I,a),a=ee,w=I;var oe=a.updateQueue;if(oe===null){var te=new Set;te.add(w),a.updateQueue=te}else oe.add(w);break e}else{if((a&1)===0){Kd(d,I,a),gn();break e}w=Error(l(426))}}else if(Ee&&y.mode&1){var De=Xd(p);if(De!==null){(De.flags&65536)===0&&(De.flags|=256),Yd(De,p,y,d,a),Ni(er(w,y));break e}}d=w=er(w,y),_e!==4&&(_e=2),Wr===null?Wr=[d]:Wr.push(d),d=p;do{switch(d.tag){case 3:d.flags|=65536,a&=-a,d.lanes|=a;var A=Qd(d,w,a);Cd(d,A);break e;case 1:y=w;var k=d.type,R=d.stateNode;if((d.flags&128)===0&&(typeof k.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(so===null||!so.has(R)))){d.flags|=65536,a&=-a,d.lanes|=a;var J=Jd(d,y,a);Cd(d,J);break e}}d=d.return}while(d!==null)}Lc(r)}catch(ie){a=ie,Ie===r&&r!==null&&(Ie=r=r.return);continue}break}while(!0)}function Pc(){var e=Jt.current;return Jt.current=Vt,e===null?Vt:e}function gn(){(_e===0||_e===3||_e===2)&&(_e=4),$e===null||(ko&268435455)===0&&(Kt&268435455)===0||lo($e,Ve)}function os(e,a){var r=be;be|=2;var t=Pc();($e!==e||Ve!==a)&&($a=null,Eo(e,a));do try{Ep();break}catch(i){kc(e,i)}while(!0);if(Pi(),be=r,Jt.current=t,Ie!==null)throw Error(l(261));return $e=null,Ve=0,_e}function Ep(){for(;Ie!==null;)Ec(Ie)}function Lp(){for(;Ie!==null&&!em();)Ec(Ie)}function Ec(e){var a=Mc(e.alternate,e,la);e.memoizedProps=e.pendingProps,a===null?Lc(e):Ie=a,sn.current=null}function Lc(e){var a=e;do{var r=a.alternate;if(e=a.return,(a.flags&32768)===0){if(r=Cp(r,a,la),r!==null){Ie=r;return}}else{if(r=jp(r,a),r!==null){r.flags&=32767,Ie=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,Ie=null;return}}if(a=a.sibling,a!==null){Ie=a;return}Ie=a=e}while(a!==null);_e===0&&(_e=5)}function Lo(e,a,r){var t=Se,i=xa.transition;try{xa.transition=null,Se=1,Ap(e,a,r,t)}finally{xa.transition=i,Se=t}return null}function Ap(e,a,r,t){do tr();while(io!==null);if((be&6)!==0)throw Error(l(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var d=r.lanes|r.childLanes;if(cm(e,d),e===$e&&(Ie=$e=null,Ve=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Yt||(Yt=!0,zc(it,function(){return tr(),null})),d=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||d){d=xa.transition,xa.transition=null;var p=Se;Se=1;var y=be;be|=4,sn.current=null,wp(e,r),bc(r,e),Km(fi),pt=!!pi,fi=pi=null,e.current=r,Np(r),am(),be=y,Se=p,xa.transition=d}else e.current=r;if(Yt&&(Yt=!1,io=e,Zt=i),d=e.pendingLanes,d===0&&(so=null),tm(r.stateNode),oa(e,ze()),a!==null)for(t=e.onRecoverableError,r=0;r<a.length;r++)i=a[r],t(i.value,{componentStack:i.stack,digest:i.digest});if(Xt)throw Xt=!1,e=dn,dn=null,e;return(Zt&1)!==0&&e.tag!==0&&tr(),d=e.pendingLanes,(d&1)!==0?e===cn?Gr++:(Gr=0,cn=e):Gr=0,ao(),null}function tr(){if(io!==null){var e=xl(Zt),a=xa.transition,r=Se;try{if(xa.transition=null,Se=16>e?16:e,io===null)var t=!1;else{if(e=io,io=null,Zt=0,(be&6)!==0)throw Error(l(331));var i=be;for(be|=4,ae=e.current;ae!==null;){var d=ae,p=d.child;if((ae.flags&16)!==0){var y=d.deletions;if(y!==null){for(var w=0;w<y.length;w++){var I=y[w];for(ae=I;ae!==null;){var V=ae;switch(V.tag){case 0:case 11:case 15:Vr(8,V,d)}var G=V.child;if(G!==null)G.return=V,ae=G;else for(;ae!==null;){V=ae;var q=V.sibling,ee=V.return;if(fc(V),V===I){ae=null;break}if(q!==null){q.return=ee,ae=q;break}ae=ee}}}var oe=d.alternate;if(oe!==null){var te=oe.child;if(te!==null){oe.child=null;do{var De=te.sibling;te.sibling=null,te=De}while(te!==null)}}ae=d}}if((d.subtreeFlags&2064)!==0&&p!==null)p.return=d,ae=p;else e:for(;ae!==null;){if(d=ae,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:Vr(9,d,d.return)}var A=d.sibling;if(A!==null){A.return=d.return,ae=A;break e}ae=d.return}}var k=e.current;for(ae=k;ae!==null;){p=ae;var R=p.child;if((p.subtreeFlags&2064)!==0&&R!==null)R.return=p,ae=R;else e:for(p=k;ae!==null;){if(y=ae,(y.flags&2048)!==0)try{switch(y.tag){case 0:case 11:case 15:Qt(9,y)}}catch(ie){Me(y,y.return,ie)}if(y===p){ae=null;break e}var J=y.sibling;if(J!==null){J.return=y.return,ae=J;break e}ae=y.return}}if(be=i,ao(),Pa&&typeof Pa.onPostCommitFiberRoot=="function")try{Pa.onPostCommitFiberRoot(nt,e)}catch{}t=!0}return t}finally{Se=r,xa.transition=a}}return!1}function Ac(e,a,r){a=er(r,a),a=Qd(e,a,1),e=ro(e,a,1),a=Je(),e!==null&&(hr(e,1,a),oa(e,a))}function Me(e,a,r){if(e.tag===3)Ac(e,e,r);else for(;a!==null;){if(a.tag===3){Ac(a,e,r);break}else if(a.tag===1){var t=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(so===null||!so.has(t))){e=er(r,e),e=Jd(a,e,1),a=ro(a,e,1),e=Je(),a!==null&&(hr(a,1,e),oa(a,e));break}}a=a.return}}function Rp(e,a,r){var t=e.pingCache;t!==null&&t.delete(a),a=Je(),e.pingedLanes|=e.suspendedLanes&r,$e===e&&(Ve&r)===r&&(_e===4||_e===3&&(Ve&130023424)===Ve&&500>ze()-ln?Eo(e,0):nn|=r),oa(e,a)}function Rc(e,a){a===0&&((e.mode&1)===0?a=1:(a=dt,dt<<=1,(dt&130023424)===0&&(dt=4194304)));var r=Je();e=_a(e,a),e!==null&&(hr(e,a,r),oa(e,r))}function Mp(e){var a=e.memoizedState,r=0;a!==null&&(r=a.retryLane),Rc(e,r)}function zp(e,a){var r=0;switch(e.tag){case 13:var t=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:t=e.stateNode;break;default:throw Error(l(314))}t!==null&&t.delete(a),Rc(e,r)}var Mc;Mc=function(e,a,r){if(e!==null)if(e.memoizedProps!==a.pendingProps||Ye.current)ea=!0;else{if((e.lanes&r)===0&&(a.flags&128)===0)return ea=!1,yp(e,a,r);ea=(e.flags&131072)!==0}else ea=!1,Ee&&(a.flags&1048576)!==0&&ud(a,Rt,a.index);switch(a.lanes=0,a.tag){case 2:var t=a.type;Gt(e,a),e=a.pendingProps;var i=Go(a,Ue.current);Yo(a,r),i=Oi(null,a,t,e,i,r);var d=Ti();return a.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,Ze(t)?(d=!0,Et(a)):d=!1,a.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ri(a),i.updater=Ut,a.stateNode=i,i._reactInternals=a,Wi(a,t,e,r),a=Ji(null,a,t,!0,d,r)):(a.tag=0,Ee&&d&&Ci(a),Qe(null,a,i,r),a=a.child),a;case 16:t=a.elementType;e:{switch(Gt(e,a),e=a.pendingProps,i=t._init,t=i(t._payload),a.type=t,i=a.tag=Ip(t),e=ja(t,e),i){case 0:a=Qi(null,a,t,e,r);break e;case 1:a=tc(null,a,t,e,r);break e;case 11:a=Zd(null,a,t,e,r);break e;case 14:a=ec(null,a,t,ja(t.type,e),r);break e}throw Error(l(306,t,""))}return a;case 0:return t=a.type,i=a.pendingProps,i=a.elementType===t?i:ja(t,i),Qi(e,a,t,i,r);case 1:return t=a.type,i=a.pendingProps,i=a.elementType===t?i:ja(t,i),tc(e,a,t,i,r);case 3:e:{if(sc(a),e===null)throw Error(l(387));t=a.pendingProps,d=a.memoizedState,i=d.element,yd(e,a),_t(a,t,null,r);var p=a.memoizedState;if(t=p.element,d.isDehydrated)if(d={element:t,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},a.updateQueue.baseState=d,a.memoizedState=d,a.flags&256){i=er(Error(l(423)),a),a=ic(e,a,t,r,i);break e}else if(t!==i){i=er(Error(l(424)),a),a=ic(e,a,t,r,i);break e}else for(na=Ya(a.stateNode.containerInfo.firstChild),ia=a,Ee=!0,Ca=null,r=vd(a,null,t,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Jo(),t===i){a=Ta(e,a,r);break e}Qe(e,a,t,r)}a=a.child}return a;case 5:return Sd(a),e===null&&wi(a),t=a.type,i=a.pendingProps,d=e!==null?e.memoizedProps:null,p=i.children,gi(t,i)?p=null:d!==null&&gi(t,d)&&(a.flags|=32),rc(e,a),Qe(e,a,p,r),a.child;case 6:return e===null&&wi(a),null;case 13:return nc(e,a,r);case 4:return Mi(a,a.stateNode.containerInfo),t=a.pendingProps,e===null?a.child=Ko(a,null,t,r):Qe(e,a,t,r),a.child;case 11:return t=a.type,i=a.pendingProps,i=a.elementType===t?i:ja(t,i),Zd(e,a,t,i,r);case 7:return Qe(e,a,a.pendingProps,r),a.child;case 8:return Qe(e,a,a.pendingProps.children,r),a.child;case 12:return Qe(e,a,a.pendingProps.children,r),a.child;case 10:e:{if(t=a.type._context,i=a.pendingProps,d=a.memoizedProps,p=i.value,we(Dt,t._currentValue),t._currentValue=p,d!==null)if(ya(d.value,p)){if(d.children===i.children&&!Ye.current){a=Ta(e,a,r);break e}}else for(d=a.child,d!==null&&(d.return=a);d!==null;){var y=d.dependencies;if(y!==null){p=d.child;for(var w=y.firstContext;w!==null;){if(w.context===t){if(d.tag===1){w=Oa(-1,r&-r),w.tag=2;var I=d.updateQueue;if(I!==null){I=I.shared;var V=I.pending;V===null?w.next=w:(w.next=V.next,V.next=w),I.pending=w}}d.lanes|=r,w=d.alternate,w!==null&&(w.lanes|=r),Li(d.return,r,a),y.lanes|=r;break}w=w.next}}else if(d.tag===10)p=d.type===a.type?null:d.child;else if(d.tag===18){if(p=d.return,p===null)throw Error(l(341));p.lanes|=r,y=p.alternate,y!==null&&(y.lanes|=r),Li(p,r,a),p=d.sibling}else p=d.child;if(p!==null)p.return=d;else for(p=d;p!==null;){if(p===a){p=null;break}if(d=p.sibling,d!==null){d.return=p.return,p=d;break}p=p.return}d=p}Qe(e,a,i.children,r),a=a.child}return a;case 9:return i=a.type,t=a.pendingProps.children,Yo(a,r),i=ga(i),t=t(i),a.flags|=1,Qe(e,a,t,r),a.child;case 14:return t=a.type,i=ja(t,a.pendingProps),i=ja(t.type,i),ec(e,a,t,i,r);case 15:return ac(e,a,a.type,a.pendingProps,r);case 17:return t=a.type,i=a.pendingProps,i=a.elementType===t?i:ja(t,i),Gt(e,a),a.tag=1,Ze(t)?(e=!0,Et(a)):e=!1,Yo(a,r),Gd(a,t,i),Wi(a,t,i,r),Ji(null,a,t,!0,e,r);case 19:return dc(e,a,r);case 22:return oc(e,a,r)}throw Error(l(156,a.tag))};function zc(e,a){return ml(e,a)}function Dp(e,a,r,t){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function va(e,a,r,t){return new Dp(e,a,r,t)}function hn(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ip(e){if(typeof e=="function")return hn(e)?1:0;if(e!=null){if(e=e.$$typeof,e===X)return 11;if(e===ge)return 14}return 2}function co(e,a){var r=e.alternate;return r===null?(r=va(e.tag,a,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=a,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,a=e.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function rs(e,a,r,t,i,d){var p=2;if(t=e,typeof e=="function")hn(e)&&(p=1);else if(typeof e=="string")p=5;else e:switch(e){case $:return Ao(r.children,i,d,a);case me:p=8,i|=8;break;case xe:return e=va(12,r,a,i|2),e.elementType=xe,e.lanes=d,e;case K:return e=va(13,r,a,i),e.elementType=K,e.lanes=d,e;case se:return e=va(19,r,a,i),e.elementType=se,e.lanes=d,e;case C:return ts(r,i,d,a);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pe:p=10;break e;case H:p=9;break e;case X:p=11;break e;case ge:p=14;break e;case h:p=16,t=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return a=va(p,r,a,i),a.elementType=e,a.type=t,a.lanes=d,a}function Ao(e,a,r,t){return e=va(7,e,t,a),e.lanes=r,e}function ts(e,a,r,t){return e=va(22,e,t,a),e.elementType=C,e.lanes=r,e.stateNode={isHidden:!1},e}function xn(e,a,r){return e=va(6,e,null,a),e.lanes=r,e}function vn(e,a,r){return a=va(4,e.children!==null?e.children:[],e.key,a),a.lanes=r,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}function Fp(e,a,r,t,i){this.tag=a,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Us(0),this.expirationTimes=Us(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Us(0),this.identifierPrefix=t,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bn(e,a,r,t,i,d,p,y,w){return e=new Fp(e,a,r,y,w),a===1?(a=1,d===!0&&(a|=8)):a=0,d=va(3,null,null,a),e.current=d,d.stateNode=e,d.memoizedState={element:t,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ri(d),e}function _p(e,a,r){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ne,key:t==null?null:""+t,children:e,containerInfo:a,implementation:r}}function Dc(e){if(!e)return eo;e=e._reactInternals;e:{if(vo(e)!==e||e.tag!==1)throw Error(l(170));var a=e;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(Ze(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(l(171))}if(e.tag===1){var r=e.type;if(Ze(r))return ld(e,r,a)}return a}function Ic(e,a,r,t,i,d,p,y,w){return e=bn(r,t,!0,e,i,d,p,y,w),e.context=Dc(null),r=e.current,t=Je(),i=no(r),d=Oa(t,i),d.callback=a??null,ro(r,d,i),e.current.lanes=i,hr(e,i,t),oa(e,t),e}function ss(e,a,r,t){var i=a.current,d=Je(),p=no(i);return r=Dc(r),a.context===null?a.context=r:a.pendingContext=r,a=Oa(d,p),a.payload={element:e},t=t===void 0?null:t,t!==null&&(a.callback=t),e=ro(i,a,p),e!==null&&(Na(e,i,p,d),Ft(e,i,p)),p}function is(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fc(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<a?r:a}}function yn(e,a){Fc(e,a),(e=e.alternate)&&Fc(e,a)}function Op(){return null}var _c=typeof reportError=="function"?reportError:function(e){console.error(e)};function Cn(e){this._internalRoot=e}ns.prototype.render=Cn.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(l(409));ss(e,a,null,null)},ns.prototype.unmount=Cn.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Po(function(){ss(null,e,null,null)}),a[za]=null}};function ns(e){this._internalRoot=e}ns.prototype.unstable_scheduleHydration=function(e){if(e){var a=yl();e={blockedOn:null,target:e,priority:a};for(var r=0;r<Ja.length&&a!==0&&a<Ja[r].priority;r++);Ja.splice(r,0,e),r===0&&Sl(e)}};function jn(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ls(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Oc(){}function Tp(e,a,r,t,i){if(i){if(typeof t=="function"){var d=t;t=function(){var I=is(p);d.call(I)}}var p=Ic(a,t,e,0,null,!1,!1,"",Oc);return e._reactRootContainer=p,e[za]=p.current,Ar(e.nodeType===8?e.parentNode:e),Po(),p}for(;i=e.lastChild;)e.removeChild(i);if(typeof t=="function"){var y=t;t=function(){var I=is(w);y.call(I)}}var w=bn(e,0,!1,null,null,!1,!1,"",Oc);return e._reactRootContainer=w,e[za]=w.current,Ar(e.nodeType===8?e.parentNode:e),Po(function(){ss(a,w,r,t)}),w}function ds(e,a,r,t,i){var d=r._reactRootContainer;if(d){var p=d;if(typeof i=="function"){var y=i;i=function(){var w=is(p);y.call(w)}}ss(a,p,e,i)}else p=Tp(r,a,e,i,t);return is(p)}vl=function(e){switch(e.tag){case 3:var a=e.stateNode;if(a.current.memoizedState.isDehydrated){var r=gr(a.pendingLanes);r!==0&&(Ws(a,r|1),oa(a,ze()),(be&6)===0&&(rr=ze()+500,ao()))}break;case 13:Po(function(){var t=_a(e,1);if(t!==null){var i=Je();Na(t,e,1,i)}}),yn(e,1)}},Gs=function(e){if(e.tag===13){var a=_a(e,134217728);if(a!==null){var r=Je();Na(a,e,134217728,r)}yn(e,134217728)}},bl=function(e){if(e.tag===13){var a=no(e),r=_a(e,a);if(r!==null){var t=Je();Na(r,e,a,t)}yn(e,a)}},yl=function(){return Se},Cl=function(e,a){var r=Se;try{return Se=e,a()}finally{Se=r}},Os=function(e,a,r){switch(a){case"input":if(As(e,r),a=r.name,r.type==="radio"&&a!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<r.length;a++){var t=r[a];if(t!==e&&t.form===e.form){var i=kt(t);if(!i)throw Error(l(90));Wn(t),As(t,i)}}}break;case"textarea":Kn(e,r);break;case"select":a=r.value,a!=null&&Do(e,!!r.multiple,a,!1)}},sl=pn,il=Po;var $p={usingClientEntryPoint:!1,Events:[zr,Uo,kt,rl,tl,pn]},Hr={findFiberByHostInstance:bo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bp={bundleType:Hr.bundleType,version:Hr.version,rendererPackageName:Hr.rendererPackageName,rendererConfig:Hr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Y.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cl(e),e===null?null:e.stateNode},findFiberByHostInstance:Hr.findFiberByHostInstance||Op,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cs.isDisabled&&cs.supportsFiber)try{nt=cs.inject(Bp),Pa=cs}catch{}}return ra.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$p,ra.createPortal=function(e,a){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jn(a))throw Error(l(200));return _p(e,a,null,r)},ra.createRoot=function(e,a){if(!jn(e))throw Error(l(299));var r=!1,t="",i=_c;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(t=a.identifierPrefix),a.onRecoverableError!==void 0&&(i=a.onRecoverableError)),a=bn(e,1,!1,null,null,r,!1,t,i),e[za]=a.current,Ar(e.nodeType===8?e.parentNode:e),new Cn(a)},ra.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=cl(a),e=e===null?null:e.stateNode,e},ra.flushSync=function(e){return Po(e)},ra.hydrate=function(e,a,r){if(!ls(a))throw Error(l(200));return ds(null,e,a,!0,r)},ra.hydrateRoot=function(e,a,r){if(!jn(e))throw Error(l(405));var t=r!=null&&r.hydratedSources||null,i=!1,d="",p=_c;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),a=Ic(a,null,e,1,r??null,i,!1,d,p),e[za]=a.current,Ar(e),t)for(e=0;e<t.length;e++)r=t[e],i=r._getVersion,i=i(r._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[r,i]:a.mutableSourceEagerHydrationData.push(r,i);return new ns(a)},ra.render=function(e,a,r){if(!ls(a))throw Error(l(200));return ds(null,e,a,!1,r)},ra.unmountComponentAtNode=function(e){if(!ls(e))throw Error(l(40));return e._reactRootContainer?(Po(function(){ds(null,null,e,!1,function(){e._reactRootContainer=null,e[za]=null})}),!0):!1},ra.unstable_batchedUpdates=pn,ra.unstable_renderSubtreeIntoContainer=function(e,a,r,t){if(!ls(r))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return ds(e,a,r,!1,t)},ra.version="18.3.1-next-f1338f8080-20240426",ra}var Gc;function yu(){if(Gc)return Nn.exports;Gc=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(n){console.error(n)}}return s(),Nn.exports=Kp(),Nn.exports}var Hc;function Xp(){if(Hc)return us;Hc=1;var s=yu();return us.createRoot=s.createRoot,us.hydrateRoot=s.hydrateRoot,us}var Yp=Xp();const Zp=vu(Yp);yu();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yr(){return Yr=Object.assign?Object.assign.bind():function(s){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(s[u]=l[u])}return s},Yr.apply(this,arguments)}var po;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(po||(po={}));const Qc="popstate";function e0(s){s===void 0&&(s={});function n(m,c){let{pathname:f="/",search:g="",hash:x=""}=zo(m.location.hash.substr(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),zn("",{pathname:f,search:g,hash:x},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function l(m,c){let f=m.document.querySelector("base"),g="";if(f&&f.getAttribute("href")){let x=m.location.href,b=x.indexOf("#");g=b===-1?x:x.slice(0,b)}return g+"#"+(typeof c=="string"?c:bs(c))}function u(m,c){Ss(m.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(c)+")")}return o0(n,l,u,s)}function Re(s,n){if(s===!1||s===null||typeof s>"u")throw new Error(n)}function Ss(s,n){if(!s){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function a0(){return Math.random().toString(36).substr(2,8)}function Jc(s,n){return{usr:s.state,key:s.key,idx:n}}function zn(s,n,l,u){return l===void 0&&(l=null),Yr({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof n=="string"?zo(n):n,{state:l,key:n&&n.key||u||a0()})}function bs(s){let{pathname:n="/",search:l="",hash:u=""}=s;return l&&l!=="?"&&(n+=l.charAt(0)==="?"?l:"?"+l),u&&u!=="#"&&(n+=u.charAt(0)==="#"?u:"#"+u),n}function zo(s){let n={};if(s){let l=s.indexOf("#");l>=0&&(n.hash=s.substr(l),s=s.substr(0,l));let u=s.indexOf("?");u>=0&&(n.search=s.substr(u),s=s.substr(0,u)),s&&(n.pathname=s)}return n}function o0(s,n,l,u){u===void 0&&(u={});let{window:m=document.defaultView,v5Compat:c=!1}=u,f=m.history,g=po.Pop,x=null,b=S();b==null&&(b=0,f.replaceState(Yr({},f.state,{idx:b}),""));function S(){return(f.state||{idx:null}).idx}function j(){g=po.Pop;let L=S(),B=L==null?null:L-b;b=L,x&&x({action:g,location:D.location,delta:B})}function P(L,B){g=po.Push;let O=zn(D.location,L,B);l&&l(O,L),b=S()+1;let z=Jc(O,b),Y=D.createHref(O);try{f.pushState(z,"",Y)}catch(Q){if(Q instanceof DOMException&&Q.name==="DataCloneError")throw Q;m.location.assign(Y)}c&&x&&x({action:g,location:D.location,delta:1})}function M(L,B){g=po.Replace;let O=zn(D.location,L,B);l&&l(O,L),b=S();let z=Jc(O,b),Y=D.createHref(O);f.replaceState(z,"",Y),c&&x&&x({action:g,location:D.location,delta:0})}function F(L){let B=m.location.origin!=="null"?m.location.origin:m.location.href,O=typeof L=="string"?L:bs(L);return O=O.replace(/ $/,"%20"),Re(B,"No window.location.(origin|href) available to create URL for href: "+O),new URL(O,B)}let D={get action(){return g},get location(){return s(m,f)},listen(L){if(x)throw new Error("A history only accepts one active listener");return m.addEventListener(Qc,j),x=L,()=>{m.removeEventListener(Qc,j),x=null}},createHref(L){return n(m,L)},createURL:F,encodeLocation(L){let B=F(L);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:P,replace:M,go(L){return f.go(L)}};return D}var Kc;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(Kc||(Kc={}));function r0(s,n,l){return l===void 0&&(l="/"),t0(s,n,l)}function t0(s,n,l,u){let m=typeof n=="string"?zo(n):n,c=nr(m.pathname||"/",l);if(c==null)return null;let f=Cu(s);s0(f);let g=null;for(let x=0;g==null&&x<f.length;++x){let b=h0(c);g=f0(f[x],b)}return g}function Cu(s,n,l,u){n===void 0&&(n=[]),l===void 0&&(l=[]),u===void 0&&(u="");let m=(c,f,g)=>{let x={relativePath:g===void 0?c.path||"":g,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};x.relativePath.startsWith("/")&&(Re(x.relativePath.startsWith(u),'Absolute route path "'+x.relativePath+'" nested under path '+('"'+u+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),x.relativePath=x.relativePath.slice(u.length));let b=fo([u,x.relativePath]),S=l.concat(x);c.children&&c.children.length>0&&(Re(c.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+b+'".')),Cu(c.children,n,S,b)),!(c.path==null&&!c.index)&&n.push({path:b,score:m0(b,c.index),routesMeta:S})};return s.forEach((c,f)=>{var g;if(c.path===""||!((g=c.path)!=null&&g.includes("?")))m(c,f);else for(let x of ju(c.path))m(c,f,x)}),n}function ju(s){let n=s.split("/");if(n.length===0)return[];let[l,...u]=n,m=l.endsWith("?"),c=l.replace(/\?$/,"");if(u.length===0)return m?[c,""]:[c];let f=ju(u.join("/")),g=[];return g.push(...f.map(x=>x===""?c:[c,x].join("/"))),m&&g.push(...f),g.map(x=>s.startsWith("/")&&x===""?"/":x)}function s0(s){s.sort((n,l)=>n.score!==l.score?l.score-n.score:p0(n.routesMeta.map(u=>u.childrenIndex),l.routesMeta.map(u=>u.childrenIndex)))}const i0=/^:[\w-]+$/,n0=3,l0=2,d0=1,c0=10,u0=-2,Xc=s=>s==="*";function m0(s,n){let l=s.split("/"),u=l.length;return l.some(Xc)&&(u+=u0),n&&(u+=l0),l.filter(m=>!Xc(m)).reduce((m,c)=>m+(i0.test(c)?n0:c===""?d0:c0),u)}function p0(s,n){return s.length===n.length&&s.slice(0,-1).every((u,m)=>u===n[m])?s[s.length-1]-n[n.length-1]:0}function f0(s,n,l){let{routesMeta:u}=s,m={},c="/",f=[];for(let g=0;g<u.length;++g){let x=u[g],b=g===u.length-1,S=c==="/"?n:n.slice(c.length)||"/",j=Dn({path:x.relativePath,caseSensitive:x.caseSensitive,end:b},S),P=x.route;if(!j)return null;Object.assign(m,j.params),f.push({params:m,pathname:fo([c,j.pathname]),pathnameBase:C0(fo([c,j.pathnameBase])),route:P}),j.pathnameBase!=="/"&&(c=fo([c,j.pathnameBase]))}return f}function Dn(s,n){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[l,u]=g0(s.path,s.caseSensitive,s.end),m=n.match(l);if(!m)return null;let c=m[0],f=c.replace(/(.)\/+$/,"$1"),g=m.slice(1);return{params:u.reduce((b,S,j)=>{let{paramName:P,isOptional:M}=S;if(P==="*"){let D=g[j]||"";f=c.slice(0,c.length-D.length).replace(/(.)\/+$/,"$1")}const F=g[j];return M&&!F?b[P]=void 0:b[P]=(F||"").replace(/%2F/g,"/"),b},{}),pathname:c,pathnameBase:f,pattern:s}}function g0(s,n,l){n===void 0&&(n=!1),l===void 0&&(l=!0),Ss(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let u=[],m="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,g,x)=>(u.push({paramName:g,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(u.push({paramName:"*"}),m+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?m+="\\/*$":s!==""&&s!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,n?void 0:"i"),u]}function h0(s){try{return s.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Ss(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),s}}function nr(s,n){if(n==="/")return s;if(!s.toLowerCase().startsWith(n.toLowerCase()))return null;let l=n.endsWith("/")?n.length-1:n.length,u=s.charAt(l);return u&&u!=="/"?null:s.slice(l)||"/"}const x0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,v0=s=>x0.test(s);function b0(s,n){n===void 0&&(n="/");let{pathname:l,search:u="",hash:m=""}=typeof s=="string"?zo(s):s,c;if(l)if(v0(l))c=l;else{if(l.includes("//")){let f=l;l=l.replace(/\/\/+/g,"/"),Ss(!1,"Pathnames cannot have embedded double slashes - normalizing "+(f+" -> "+l))}l.startsWith("/")?c=Yc(l.substring(1),"/"):c=Yc(l,n)}else c=n;return{pathname:c,search:j0(u),hash:S0(m)}}function Yc(s,n){let l=n.replace(/\/+$/,"").split("/");return s.split("/").forEach(m=>{m===".."?l.length>1&&l.pop():m!=="."&&l.push(m)}),l.length>1?l.join("/"):"/"}function En(s,n,l,u){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(u)+"].  Please separate it out to the ")+("`to."+l+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function y0(s){return s.filter((n,l)=>l===0||n.route.path&&n.route.path.length>0)}function Bn(s,n){let l=y0(s);return n?l.map((u,m)=>m===l.length-1?u.pathname:u.pathnameBase):l.map(u=>u.pathnameBase)}function qn(s,n,l,u){u===void 0&&(u=!1);let m;typeof s=="string"?m=zo(s):(m=Yr({},s),Re(!m.pathname||!m.pathname.includes("?"),En("?","pathname","search",m)),Re(!m.pathname||!m.pathname.includes("#"),En("#","pathname","hash",m)),Re(!m.search||!m.search.includes("#"),En("#","search","hash",m)));let c=s===""||m.pathname==="",f=c?"/":m.pathname,g;if(f==null)g=l;else{let j=n.length-1;if(!u&&f.startsWith("..")){let P=f.split("/");for(;P[0]==="..";)P.shift(),j-=1;m.pathname=P.join("/")}g=j>=0?n[j]:"/"}let x=b0(m,g),b=f&&f!=="/"&&f.endsWith("/"),S=(c||f===".")&&l.endsWith("/");return!x.pathname.endsWith("/")&&(b||S)&&(x.pathname+="/"),x}const fo=s=>s.join("/").replace(/\/\/+/g,"/"),C0=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),j0=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,S0=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function w0(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const Su=["post","put","patch","delete"];new Set(Su);const N0=["get",...Su];new Set(N0);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zr(){return Zr=Object.assign?Object.assign.bind():function(s){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(s[u]=l[u])}return s},Zr.apply(this,arguments)}const ws=v.createContext(null),wu=v.createContext(null),Va=v.createContext(null),Ns=v.createContext(null),Ua=v.createContext({outlet:null,matches:[],isDataRoute:!1}),Nu=v.createContext(null);function k0(s,n){let{relative:l}=n===void 0?{}:n;lr()||Re(!1);let{basename:u,navigator:m}=v.useContext(Va),{hash:c,pathname:f,search:g}=ks(s,{relative:l}),x=f;return u!=="/"&&(x=f==="/"?u:fo([u,f])),m.createHref({pathname:x,search:g,hash:c})}function lr(){return v.useContext(Ns)!=null}function go(){return lr()||Re(!1),v.useContext(Ns).location}function ku(s){v.useContext(Va).static||v.useLayoutEffect(s)}function Wa(){let{isDataRoute:s}=v.useContext(Ua);return s?$0():P0()}function P0(){lr()||Re(!1);let s=v.useContext(ws),{basename:n,future:l,navigator:u}=v.useContext(Va),{matches:m}=v.useContext(Ua),{pathname:c}=go(),f=JSON.stringify(Bn(m,l.v7_relativeSplatPath)),g=v.useRef(!1);return ku(()=>{g.current=!0}),v.useCallback(function(b,S){if(S===void 0&&(S={}),!g.current)return;if(typeof b=="number"){u.go(b);return}let j=qn(b,JSON.parse(f),c,S.relative==="path");s==null&&n!=="/"&&(j.pathname=j.pathname==="/"?n:fo([n,j.pathname])),(S.replace?u.replace:u.push)(j,S.state,S)},[n,u,f,c,s])}function E0(){let{matches:s}=v.useContext(Ua),n=s[s.length-1];return n?n.params:{}}function ks(s,n){let{relative:l}=n===void 0?{}:n,{future:u}=v.useContext(Va),{matches:m}=v.useContext(Ua),{pathname:c}=go(),f=JSON.stringify(Bn(m,u.v7_relativeSplatPath));return v.useMemo(()=>qn(s,JSON.parse(f),c,l==="path"),[s,f,c,l])}function L0(s,n){return A0(s,n)}function A0(s,n,l,u){lr()||Re(!1);let{navigator:m}=v.useContext(Va),{matches:c}=v.useContext(Ua),f=c[c.length-1],g=f?f.params:{};f&&f.pathname;let x=f?f.pathnameBase:"/";f&&f.route;let b=go(),S;if(n){var j;let L=typeof n=="string"?zo(n):n;x==="/"||(j=L.pathname)!=null&&j.startsWith(x)||Re(!1),S=L}else S=b;let P=S.pathname||"/",M=P;if(x!=="/"){let L=x.replace(/^\//,"").split("/");M="/"+P.replace(/^\//,"").split("/").slice(L.length).join("/")}let F=r0(s,{pathname:M}),D=I0(F&&F.map(L=>Object.assign({},L,{params:Object.assign({},g,L.params),pathname:fo([x,m.encodeLocation?m.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?x:fo([x,m.encodeLocation?m.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),c,l,u);return n&&D?v.createElement(Ns.Provider,{value:{location:Zr({pathname:"/",search:"",hash:"",state:null,key:"default"},S),navigationType:po.Pop}},D):D}function R0(){let s=T0(),n=w0(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),l=s instanceof Error?s.stack:null,m={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},n),l?v.createElement("pre",{style:m},l):null,null)}const M0=v.createElement(R0,null);class z0 extends v.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,l){return l.location!==n.location||l.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:l.error,location:l.location,revalidation:n.revalidation||l.revalidation}}componentDidCatch(n,l){console.error("React Router caught the following error during render",n,l)}render(){return this.state.error!==void 0?v.createElement(Ua.Provider,{value:this.props.routeContext},v.createElement(Nu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function D0(s){let{routeContext:n,match:l,children:u}=s,m=v.useContext(ws);return m&&m.static&&m.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(m.staticContext._deepestRenderedBoundaryId=l.route.id),v.createElement(Ua.Provider,{value:n},u)}function I0(s,n,l,u){var m;if(n===void 0&&(n=[]),l===void 0&&(l=null),u===void 0&&(u=null),s==null){var c;if(!l)return null;if(l.errors)s=l.matches;else if((c=u)!=null&&c.v7_partialHydration&&n.length===0&&!l.initialized&&l.matches.length>0)s=l.matches;else return null}let f=s,g=(m=l)==null?void 0:m.errors;if(g!=null){let S=f.findIndex(j=>j.route.id&&(g==null?void 0:g[j.route.id])!==void 0);S>=0||Re(!1),f=f.slice(0,Math.min(f.length,S+1))}let x=!1,b=-1;if(l&&u&&u.v7_partialHydration)for(let S=0;S<f.length;S++){let j=f[S];if((j.route.HydrateFallback||j.route.hydrateFallbackElement)&&(b=S),j.route.id){let{loaderData:P,errors:M}=l,F=j.route.loader&&P[j.route.id]===void 0&&(!M||M[j.route.id]===void 0);if(j.route.lazy||F){x=!0,b>=0?f=f.slice(0,b+1):f=[f[0]];break}}}return f.reduceRight((S,j,P)=>{let M,F=!1,D=null,L=null;l&&(M=g&&j.route.id?g[j.route.id]:void 0,D=j.route.errorElement||M0,x&&(b<0&&P===0?(B0("route-fallback"),F=!0,L=null):b===P&&(F=!0,L=j.route.hydrateFallbackElement||null)));let B=n.concat(f.slice(0,P+1)),O=()=>{let z;return M?z=D:F?z=L:j.route.Component?z=v.createElement(j.route.Component,null):j.route.element?z=j.route.element:z=S,v.createElement(D0,{match:j,routeContext:{outlet:S,matches:B,isDataRoute:l!=null},children:z})};return l&&(j.route.ErrorBoundary||j.route.errorElement||P===0)?v.createElement(z0,{location:l.location,revalidation:l.revalidation,component:D,error:M,children:O(),routeContext:{outlet:null,matches:B,isDataRoute:!0}}):O()},null)}var Pu=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(Pu||{}),Eu=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(Eu||{});function F0(s){let n=v.useContext(ws);return n||Re(!1),n}function _0(s){let n=v.useContext(wu);return n||Re(!1),n}function O0(s){let n=v.useContext(Ua);return n||Re(!1),n}function Lu(s){let n=O0(),l=n.matches[n.matches.length-1];return l.route.id||Re(!1),l.route.id}function T0(){var s;let n=v.useContext(Nu),l=_0(),u=Lu();return n!==void 0?n:(s=l.errors)==null?void 0:s[u]}function $0(){let{router:s}=F0(Pu.UseNavigateStable),n=Lu(Eu.UseNavigateStable),l=v.useRef(!1);return ku(()=>{l.current=!0}),v.useCallback(function(m,c){c===void 0&&(c={}),l.current&&(typeof m=="number"?s.navigate(m):s.navigate(m,Zr({fromRouteId:n},c)))},[s,n])}const Zc={};function B0(s,n,l){Zc[s]||(Zc[s]=!0)}function q0(s,n){s==null||s.v7_startTransition,s==null||s.v7_relativeSplatPath}function V0(s){let{to:n,replace:l,state:u,relative:m}=s;lr()||Re(!1);let{future:c,static:f}=v.useContext(Va),{matches:g}=v.useContext(Ua),{pathname:x}=go(),b=Wa(),S=qn(n,Bn(g,c.v7_relativeSplatPath),x,m==="path"),j=JSON.stringify(S);return v.useEffect(()=>b(JSON.parse(j),{replace:l,state:u,relative:m}),[b,j,m,l,u]),null}function ca(s){Re(!1)}function U0(s){let{basename:n="/",children:l=null,location:u,navigationType:m=po.Pop,navigator:c,static:f=!1,future:g}=s;lr()&&Re(!1);let x=n.replace(/^\/*/,"/"),b=v.useMemo(()=>({basename:x,navigator:c,static:f,future:Zr({v7_relativeSplatPath:!1},g)}),[x,g,c,f]);typeof u=="string"&&(u=zo(u));let{pathname:S="/",search:j="",hash:P="",state:M=null,key:F="default"}=u,D=v.useMemo(()=>{let L=nr(S,x);return L==null?null:{location:{pathname:L,search:j,hash:P,state:M,key:F},navigationType:m}},[x,S,j,P,M,F,m]);return D==null?null:v.createElement(Va.Provider,{value:b},v.createElement(Ns.Provider,{children:l,value:D}))}function eu(s){let{children:n,location:l}=s;return L0(In(n),l)}new Promise(()=>{});function In(s,n){n===void 0&&(n=[]);let l=[];return v.Children.forEach(s,(u,m)=>{if(!v.isValidElement(u))return;let c=[...n,m];if(u.type===v.Fragment){l.push.apply(l,In(u.props.children,c));return}u.type!==ca&&Re(!1),!u.props.index||!u.props.children||Re(!1);let f={id:u.props.id||c.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(f.children=In(u.props.children,c)),l.push(f)}),l}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ys(){return ys=Object.assign?Object.assign.bind():function(s){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(s[u]=l[u])}return s},ys.apply(this,arguments)}function Au(s,n){if(s==null)return{};var l={},u=Object.keys(s),m,c;for(c=0;c<u.length;c++)m=u[c],!(n.indexOf(m)>=0)&&(l[m]=s[m]);return l}function W0(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function G0(s,n){return s.button===0&&(!n||n==="_self")&&!W0(s)}function Fn(s){return s===void 0&&(s=""),new URLSearchParams(typeof s=="string"||Array.isArray(s)||s instanceof URLSearchParams?s:Object.keys(s).reduce((n,l)=>{let u=s[l];return n.concat(Array.isArray(u)?u.map(m=>[l,m]):[[l,u]])},[]))}function H0(s,n){let l=Fn(s);return n&&n.forEach((u,m)=>{l.has(m)||n.getAll(m).forEach(c=>{l.append(m,c)})}),l}const Q0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],J0=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],K0="6";try{window.__reactRouterVersion=K0}catch{}const X0=v.createContext({isTransitioning:!1}),Y0="startTransition",au=Hp[Y0];function Z0(s){let{basename:n,children:l,future:u,window:m}=s,c=v.useRef();c.current==null&&(c.current=e0({window:m,v5Compat:!0}));let f=c.current,[g,x]=v.useState({action:f.action,location:f.location}),{v7_startTransition:b}=u||{},S=v.useCallback(j=>{b&&au?au(()=>x(j)):x(j)},[x,b]);return v.useLayoutEffect(()=>f.listen(S),[f,S]),v.useEffect(()=>q0(u),[u]),v.createElement(U0,{basename:n,children:l,location:g.location,navigationType:g.action,navigator:f,future:u})}const ef=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",af=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xe=v.forwardRef(function(n,l){let{onClick:u,relative:m,reloadDocument:c,replace:f,state:g,target:x,to:b,preventScrollReset:S,viewTransition:j}=n,P=Au(n,Q0),{basename:M}=v.useContext(Va),F,D=!1;if(typeof b=="string"&&af.test(b)&&(F=b,ef))try{let z=new URL(window.location.href),Y=b.startsWith("//")?new URL(z.protocol+b):new URL(b),Q=nr(Y.pathname,M);Y.origin===z.origin&&Q!=null?b=Q+Y.search+Y.hash:D=!0}catch{}let L=k0(b,{relative:m}),B=rf(b,{replace:f,state:g,target:x,preventScrollReset:S,relative:m,viewTransition:j});function O(z){u&&u(z),z.defaultPrevented||B(z)}return v.createElement("a",ys({},P,{href:F||L,onClick:D||c?u:O,ref:l,target:x}))}),Jr=v.forwardRef(function(n,l){let{"aria-current":u="page",caseSensitive:m=!1,className:c="",end:f=!1,style:g,to:x,viewTransition:b,children:S}=n,j=Au(n,J0),P=ks(x,{relative:j.relative}),M=go(),F=v.useContext(wu),{navigator:D,basename:L}=v.useContext(Va),B=F!=null&&sf(P)&&b===!0,O=D.encodeLocation?D.encodeLocation(P).pathname:P.pathname,z=M.pathname,Y=F&&F.navigation&&F.navigation.location?F.navigation.location.pathname:null;m||(z=z.toLowerCase(),Y=Y?Y.toLowerCase():null,O=O.toLowerCase()),Y&&L&&(Y=nr(Y,L)||Y);const Q=O!=="/"&&O.endsWith("/")?O.length-1:O.length;let ne=z===O||!f&&z.startsWith(O)&&z.charAt(Q)==="/",$=Y!=null&&(Y===O||!f&&Y.startsWith(O)&&Y.charAt(O.length)==="/"),me={isActive:ne,isPending:$,isTransitioning:B},xe=ne?u:void 0,pe;typeof c=="function"?pe=c(me):pe=[c,ne?"active":null,$?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let H=typeof g=="function"?g(me):g;return v.createElement(Xe,ys({},j,{"aria-current":xe,className:pe,ref:l,style:H,to:x,viewTransition:b}),typeof S=="function"?S(me):S)});var _n;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(_n||(_n={}));var ou;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(ou||(ou={}));function of(s){let n=v.useContext(ws);return n||Re(!1),n}function rf(s,n){let{target:l,replace:u,state:m,preventScrollReset:c,relative:f,viewTransition:g}=n===void 0?{}:n,x=Wa(),b=go(),S=ks(s,{relative:f});return v.useCallback(j=>{if(G0(j,l)){j.preventDefault();let P=u!==void 0?u:bs(b)===bs(S);x(s,{replace:P,state:m,preventScrollReset:c,relative:f,viewTransition:g})}},[b,x,S,u,m,l,s,c,f,g])}function tf(s){let n=v.useRef(Fn(s)),l=v.useRef(!1),u=go(),m=v.useMemo(()=>H0(u.search,l.current?null:n.current),[u.search]),c=Wa(),f=v.useCallback((g,x)=>{const b=Fn(typeof g=="function"?g(m):g);l.current=!0,c("?"+b,x)},[c,m]);return[m,f]}function sf(s,n){n===void 0&&(n={});let l=v.useContext(X0);l==null&&Re(!1);let{basename:u}=of(_n.useViewTransitionState),m=ks(s,{relative:n.relative});if(!l.isTransitioning)return!1;let c=nr(l.currentLocation.pathname,u)||l.currentLocation.pathname,f=nr(l.nextLocation.pathname,u)||l.nextLocation.pathname;return Dn(m.pathname,f)!=null||Dn(m.pathname,c)!=null}let nf={data:""},lf=s=>{if(typeof window=="object"){let n=(s?s.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return n.nonce=window.__nonce__,n.parentNode||(s||document.head).appendChild(n),n.firstChild}return s||nf},df=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,cf=/\/\*[^]*?\*\/|  +/g,ru=/\n+/g,mo=(s,n)=>{let l="",u="",m="";for(let c in s){let f=s[c];c[0]=="@"?c[1]=="i"?l=c+" "+f+";":u+=c[1]=="f"?mo(f,c):c+"{"+mo(f,c[1]=="k"?"":n)+"}":typeof f=="object"?u+=mo(f,n?n.replace(/([^,])+/g,g=>c.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,x=>/&/.test(x)?x.replace(/&/g,g):g?g+" "+x:x)):c):f!=null&&(c=/^--/.test(c)?c:c.replace(/[A-Z]/g,"-$&").toLowerCase(),m+=mo.p?mo.p(c,f):c+":"+f+";")}return l+(n&&m?n+"{"+m+"}":m)+u},Ba={},Ru=s=>{if(typeof s=="object"){let n="";for(let l in s)n+=l+Ru(s[l]);return n}return s},uf=(s,n,l,u,m)=>{let c=Ru(s),f=Ba[c]||(Ba[c]=(x=>{let b=0,S=11;for(;b<x.length;)S=101*S+x.charCodeAt(b++)>>>0;return"go"+S})(c));if(!Ba[f]){let x=c!==s?s:(b=>{let S,j,P=[{}];for(;S=df.exec(b.replace(cf,""));)S[4]?P.shift():S[3]?(j=S[3].replace(ru," ").trim(),P.unshift(P[0][j]=P[0][j]||{})):P[0][S[1]]=S[2].replace(ru," ").trim();return P[0]})(s);Ba[f]=mo(m?{["@keyframes "+f]:x}:x,l?"":"."+f)}let g=l&&Ba.g?Ba.g:null;return l&&(Ba.g=Ba[f]),((x,b,S,j)=>{j?b.data=b.data.replace(j,x):b.data.indexOf(x)===-1&&(b.data=S?x+b.data:b.data+x)})(Ba[f],n,u,g),f},mf=(s,n,l)=>s.reduce((u,m,c)=>{let f=n[c];if(f&&f.call){let g=f(l),x=g&&g.props&&g.props.className||/^go/.test(g)&&g;f=x?"."+x:g&&typeof g=="object"?g.props?"":mo(g,""):g===!1?"":g}return u+m+(f??"")},"");function Ps(s){let n=this||{},l=s.call?s(n.p):s;return uf(l.unshift?l.raw?mf(l,[].slice.call(arguments,1),n.p):l.reduce((u,m)=>Object.assign(u,m&&m.call?m(n.p):m),{}):l,lf(n.target),n.g,n.o,n.k)}let Mu,On,Tn;Ps.bind({g:1});let qa=Ps.bind({k:1});function pf(s,n,l,u){mo.p=n,Mu=s,On=l,Tn=u}function ho(s,n){let l=this||{};return function(){let u=arguments;function m(c,f){let g=Object.assign({},c),x=g.className||m.className;l.p=Object.assign({theme:On&&On()},g),l.o=/ *go\d+/.test(x),g.className=Ps.apply(l,u)+(x?" "+x:"");let b=s;return s[0]&&(b=g.as||s,delete g.as),Tn&&b[0]&&Tn(g),Mu(b,g)}return m}}var ff=s=>typeof s=="function",Cs=(s,n)=>ff(s)?s(n):s,gf=(()=>{let s=0;return()=>(++s).toString()})(),zu=(()=>{let s;return()=>{if(s===void 0&&typeof window<"u"){let n=matchMedia("(prefers-reduced-motion: reduce)");s=!n||n.matches}return s}})(),hf=20,Vn="default",Du=(s,n)=>{let{toastLimit:l}=s.settings;switch(n.type){case 0:return{...s,toasts:[n.toast,...s.toasts].slice(0,l)};case 1:return{...s,toasts:s.toasts.map(f=>f.id===n.toast.id?{...f,...n.toast}:f)};case 2:let{toast:u}=n;return Du(s,{type:s.toasts.find(f=>f.id===u.id)?1:0,toast:u});case 3:let{toastId:m}=n;return{...s,toasts:s.toasts.map(f=>f.id===m||m===void 0?{...f,dismissed:!0,visible:!1}:f)};case 4:return n.toastId===void 0?{...s,toasts:[]}:{...s,toasts:s.toasts.filter(f=>f.id!==n.toastId)};case 5:return{...s,pausedAt:n.time};case 6:let c=n.time-(s.pausedAt||0);return{...s,pausedAt:void 0,toasts:s.toasts.map(f=>({...f,pauseDuration:f.pauseDuration+c}))}}},vs=[],Iu={toasts:[],pausedAt:void 0,settings:{toastLimit:hf}},Ma={},Fu=(s,n=Vn)=>{Ma[n]=Du(Ma[n]||Iu,s),vs.forEach(([l,u])=>{l===n&&u(Ma[n])})},_u=s=>Object.keys(Ma).forEach(n=>Fu(s,n)),xf=s=>Object.keys(Ma).find(n=>Ma[n].toasts.some(l=>l.id===s)),Es=(s=Vn)=>n=>{Fu(n,s)},vf={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},bf=(s={},n=Vn)=>{let[l,u]=v.useState(Ma[n]||Iu),m=v.useRef(Ma[n]);v.useEffect(()=>(m.current!==Ma[n]&&u(Ma[n]),vs.push([n,u]),()=>{let f=vs.findIndex(([g])=>g===n);f>-1&&vs.splice(f,1)}),[n]);let c=l.toasts.map(f=>{var g,x,b;return{...s,...s[f.type],...f,removeDelay:f.removeDelay||((g=s[f.type])==null?void 0:g.removeDelay)||(s==null?void 0:s.removeDelay),duration:f.duration||((x=s[f.type])==null?void 0:x.duration)||(s==null?void 0:s.duration)||vf[f.type],style:{...s.style,...(b=s[f.type])==null?void 0:b.style,...f.style}}});return{...l,toasts:c}},yf=(s,n="blank",l)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:n,ariaProps:{role:"status","aria-live":"polite"},message:s,pauseDuration:0,...l,id:(l==null?void 0:l.id)||gf()}),et=s=>(n,l)=>{let u=yf(n,s,l);return Es(u.toasterId||xf(u.id))({type:2,toast:u}),u.id},Oe=(s,n)=>et("blank")(s,n);Oe.error=et("error");Oe.success=et("success");Oe.loading=et("loading");Oe.custom=et("custom");Oe.dismiss=(s,n)=>{let l={type:3,toastId:s};n?Es(n)(l):_u(l)};Oe.dismissAll=s=>Oe.dismiss(void 0,s);Oe.remove=(s,n)=>{let l={type:4,toastId:s};n?Es(n)(l):_u(l)};Oe.removeAll=s=>Oe.remove(void 0,s);Oe.promise=(s,n,l)=>{let u=Oe.loading(n.loading,{...l,...l==null?void 0:l.loading});return typeof s=="function"&&(s=s()),s.then(m=>{let c=n.success?Cs(n.success,m):void 0;return c?Oe.success(c,{id:u,...l,...l==null?void 0:l.success}):Oe.dismiss(u),m}).catch(m=>{let c=n.error?Cs(n.error,m):void 0;c?Oe.error(c,{id:u,...l,...l==null?void 0:l.error}):Oe.dismiss(u)}),s};var Cf=1e3,jf=(s,n="default")=>{let{toasts:l,pausedAt:u}=bf(s,n),m=v.useRef(new Map).current,c=v.useCallback((j,P=Cf)=>{if(m.has(j))return;let M=setTimeout(()=>{m.delete(j),f({type:4,toastId:j})},P);m.set(j,M)},[]);v.useEffect(()=>{if(u)return;let j=Date.now(),P=l.map(M=>{if(M.duration===1/0)return;let F=(M.duration||0)+M.pauseDuration-(j-M.createdAt);if(F<0){M.visible&&Oe.dismiss(M.id);return}return setTimeout(()=>Oe.dismiss(M.id,n),F)});return()=>{P.forEach(M=>M&&clearTimeout(M))}},[l,u,n]);let f=v.useCallback(Es(n),[n]),g=v.useCallback(()=>{f({type:5,time:Date.now()})},[f]),x=v.useCallback((j,P)=>{f({type:1,toast:{id:j,height:P}})},[f]),b=v.useCallback(()=>{u&&f({type:6,time:Date.now()})},[u,f]),S=v.useCallback((j,P)=>{let{reverseOrder:M=!1,gutter:F=8,defaultPosition:D}=P||{},L=l.filter(z=>(z.position||D)===(j.position||D)&&z.height),B=L.findIndex(z=>z.id===j.id),O=L.filter((z,Y)=>Y<B&&z.visible).length;return L.filter(z=>z.visible).slice(...M?[O+1]:[0,O]).reduce((z,Y)=>z+(Y.height||0)+F,0)},[l]);return v.useEffect(()=>{l.forEach(j=>{if(j.dismissed)c(j.id,j.removeDelay);else{let P=m.get(j.id);P&&(clearTimeout(P),m.delete(j.id))}})},[l,c]),{toasts:l,handlers:{updateHeight:x,startPause:g,endPause:b,calculateOffset:S}}},Sf=qa`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,wf=qa`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Nf=qa`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,kf=ho("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${s=>s.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Sf} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${wf} 0.15s ease-out forwards;
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
    animation: ${Nf} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Pf=qa`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Ef=ho("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${s=>s.secondary||"#e0e0e0"};
  border-right-color: ${s=>s.primary||"#616161"};
  animation: ${Pf} 1s linear infinite;
`,Lf=qa`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Af=qa`
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
}`,Rf=ho("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${s=>s.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Lf} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Af} 0.2s ease-out forwards;
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
`,Mf=ho("div")`
  position: absolute;
`,zf=ho("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Df=qa`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,If=ho("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Df} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ff=({toast:s})=>{let{icon:n,type:l,iconTheme:u}=s;return n!==void 0?typeof n=="string"?v.createElement(If,null,n):n:l==="blank"?null:v.createElement(zf,null,v.createElement(Ef,{...u}),l!=="loading"&&v.createElement(Mf,null,l==="error"?v.createElement(kf,{...u}):v.createElement(Rf,{...u})))},_f=s=>`
0% {transform: translate3d(0,${s*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Of=s=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${s*-150}%,-1px) scale(.6); opacity:0;}
`,Tf="0%{opacity:0;} 100%{opacity:1;}",$f="0%{opacity:1;} 100%{opacity:0;}",Bf=ho("div")`
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
`,qf=ho("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Vf=(s,n)=>{let l=s.includes("top")?1:-1,[u,m]=zu()?[Tf,$f]:[_f(l),Of(l)];return{animation:n?`${qa(u)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${qa(m)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Uf=v.memo(({toast:s,position:n,style:l,children:u})=>{let m=s.height?Vf(s.position||n||"top-center",s.visible):{opacity:0},c=v.createElement(Ff,{toast:s}),f=v.createElement(qf,{...s.ariaProps},Cs(s.message,s));return v.createElement(Bf,{className:s.className,style:{...m,...l,...s.style}},typeof u=="function"?u({icon:c,message:f}):v.createElement(v.Fragment,null,c,f))});pf(v.createElement);var Wf=({id:s,className:n,style:l,onHeightUpdate:u,children:m})=>{let c=v.useCallback(f=>{if(f){let g=()=>{let x=f.getBoundingClientRect().height;u(s,x)};g(),new MutationObserver(g).observe(f,{subtree:!0,childList:!0,characterData:!0})}},[s,u]);return v.createElement("div",{ref:c,className:n,style:l},m)},Gf=(s,n)=>{let l=s.includes("top"),u=l?{top:0}:{bottom:0},m=s.includes("center")?{justifyContent:"center"}:s.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:zu()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${n*(l?1:-1)}px)`,...u,...m}},Hf=Ps`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ms=16,Qf=({reverseOrder:s,position:n="top-center",toastOptions:l,gutter:u,children:m,toasterId:c,containerStyle:f,containerClassName:g})=>{let{toasts:x,handlers:b}=jf(l,c);return v.createElement("div",{"data-rht-toaster":c||"",style:{position:"fixed",zIndex:9999,top:ms,left:ms,right:ms,bottom:ms,pointerEvents:"none",...f},className:g,onMouseEnter:b.startPause,onMouseLeave:b.endPause},x.map(S=>{let j=S.position||n,P=b.calculateOffset(S,{reverseOrder:s,gutter:u,defaultPosition:n}),M=Gf(j,P);return v.createElement(Wf,{id:S.id,key:S.id,onHeightUpdate:b.updateHeight,className:S.visible?Hf:"",style:M},S.type==="custom"?Cs(S.message,S):m?m(S):v.createElement(Uf,{toast:S,position:j}))}))},je=Oe;const Ou="";async function Ke(s,n={}){const l=`${Ou}${s}`;let u;try{u=await fetch(l,n)}catch{throw new Error("Servidor indisponível. Verifique sua conexão ou tente mais tarde.")}if(!(u.headers.get("content-type")||"").includes("application/json"))throw u.ok?new Error("Resposta inesperada do servidor."):new Error(`Servidor indisponível (${u.status}). O backend não está acessível neste link.`);return await u.json()}const Jf=Object.freeze(Object.defineProperty({__proto__:null,API_BASE:Ou,apiFetch:Ke},Symbol.toStringTag,{value:"Module"})),Tu=v.createContext(null),Kr="sentinel_refresh_token",Ro="sentinel_prospects";function Kf({children:s}){const[n,l]=v.useState(null),[u,m]=v.useState(null),[c,f]=v.useState(!0),g=v.useRef(null),[x,b]=v.useState(!1);v.useEffect(()=>{if(n){const H=localStorage.getItem(`sentinel_nda_${n.email}`);b(H==="true")}else b(!1)},[n]);const S=v.useCallback(H=>{H.access_token&&m(H.access_token),H.refresh_token&&localStorage.setItem(Kr,H.refresh_token),H.user&&(l(H.user),localStorage.setItem("sentinel_user",JSON.stringify(H.user)),localStorage.setItem("sentinel_auth",JSON.stringify(H.user)))},[]),j=v.useCallback(()=>{l(null),m(null),localStorage.removeItem(Kr),localStorage.removeItem("sentinel_user"),localStorage.removeItem("sentinel_auth"),g.current&&(clearTimeout(g.current),g.current=null)},[]),P=v.useCallback(async()=>{const H=localStorage.getItem(Kr);if(!H)return!1;try{const X=await Ke("/api/auth/refresh",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refresh_token:H})});return X.access_token?(S(X),!0):!1}catch{return!1}},[S]);v.useEffect(()=>{async function H(){if(!await P()){const K=localStorage.getItem("sentinel_auth");if(K)try{const se=JSON.parse(K);se&&se.email&&l(se)}catch{}}f(!1)}H()},[P]);const M=v.useCallback(async(H,X)=>{const K=await Ke("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:H,password:X})});if(!K.sucesso&&!K.access_token)throw new Error(K.mensagem||K.message||"Erro ao fazer login");return S(K),K},[S]),F=v.useCallback(async H=>{var K;const X=await Ke("/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(H)});if(!X.sucesso&&!X.access_token)throw new Error(X.mensagem||X.message||"Erro ao criar conta");return S(X),ne({...H,id:(K=X.user)==null?void 0:K.id},"cadastro"),X},[S]),D=v.useCallback(async()=>{const H=localStorage.getItem(Kr);try{H&&await Ke("/api/auth/logout",{method:"POST",headers:{"Content-Type":"application/json",...u?{Authorization:`Bearer ${u}`}:{}},body:JSON.stringify({refresh_token:H})}).catch(()=>{})}catch{}j()},[u,j]),L=v.useCallback(async H=>{const X=await Ke("/api/auth/profile",{method:"PUT",headers:{"Content-Type":"application/json",...u?{Authorization:`Bearer ${u}`}:{}},body:JSON.stringify(H)});return X.user&&(l(X.user),localStorage.setItem("sentinel_user",JSON.stringify(X.user)),localStorage.setItem("sentinel_auth",JSON.stringify(X.user))),X},[u]),B=v.useCallback(async(H,X)=>await Ke("/api/auth/change-password",{method:"POST",headers:{"Content-Type":"application/json",...u?{Authorization:`Bearer ${u}`}:{}},body:JSON.stringify({current_password:H,new_password:X})}),[u]),O=v.useCallback(async(H,X={})=>{const K={...X.headers,...u?{Authorization:`Bearer ${u}`}:{}};try{return await Ke(H,{...X,headers:K})}catch(se){if(se.message&&(se.message.includes("401")||se.message.includes("Unauthorized"))&&await P()){const h={...X.headers,Authorization:`Bearer ${u}`};return Ke(H,{...X,headers:h})}throw se}},[u,P]),z=v.useCallback(async(H,X,K,se)=>{const ge=await Ke("/api/auth/send-code",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:H,nome:X,empresa:K,telefone:se})});if(!ge.sucesso)throw new Error(ge.mensagem);return{devMode:ge.dev_mode||!1,devCode:ge.dev_code||null,devPreview:ge.dev_preview||null}},[]),Y=v.useCallback(async(H,X)=>{const K=await Ke("/api/auth/verify-code",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:H,code:X})});if(!K.sucesso)return{success:!1};const se={id:Date.now().toString(),nome:K.data.nome,email:K.data.email,telefone:K.data.telefone,empresa:K.data.empresa,createdAt:new Date().toISOString(),verified:!0};l(se),localStorage.setItem("sentinel_user",JSON.stringify(se)),localStorage.setItem("sentinel_auth",JSON.stringify(se)),K.access_token&&m(K.access_token),K.refresh_token&&localStorage.setItem(Kr,K.refresh_token);const ge=JSON.parse(localStorage.getItem(Ro)||"[]"),h=ge.findIndex(E=>E.email===se.email),C={id:se.id,nome:se.nome,email:se.email,telefone:se.telefone,empresa:se.empresa,fase:"verificado",faseLabel:"Verificado",createdAt:se.createdAt,updatedAt:new Date().toISOString()};return h>=0?ge[h]={...ge[h],...C}:ge.push(C),localStorage.setItem(Ro,JSON.stringify(ge)),{success:!0}},[]);function Q(){n&&(localStorage.setItem(`sentinel_nda_${n.email}`,"true"),b(!0),ne(n,"nda_aceito"))}function ne(H,X){const K=JSON.parse(localStorage.getItem(Ro)||"[]"),se=K.findIndex(h=>h.email===H.email),ge={id:H.id,nome:H.nome,email:H.email,telefone:H.telefone,empresa:H.empresa,fase:X,faseLabel:tu[X]||X,createdAt:H.createdAt||new Date().toISOString(),updatedAt:new Date().toISOString()};se>=0?K[se]={...K[se],...ge}:K.push(ge),localStorage.setItem(Ro,JSON.stringify(K))}function $(H,X){const K=JSON.parse(localStorage.getItem(Ro)||"[]"),se=K.findIndex(ge=>ge.email===H);se>=0&&(K[se].fase=X,K[se].faseLabel=tu[X]||X,K[se].updatedAt=new Date().toISOString(),localStorage.setItem(Ro,JSON.stringify(K)))}function me(){return JSON.parse(localStorage.getItem(Ro)||"[]")}function xe(){return JSON.parse(localStorage.getItem("sentinel_users")||"[]")}const pe=!!n;return o.jsx(Tu.Provider,{value:{user:n,isAuthenticated:pe,isLoading:c,accessToken:u,ndaAccepted:x,login:M,register:F,logout:D,updateProfile:L,changePassword:B,authFetch:O,refreshToken:P,generateCode:z,verifyCode:Y,acceptNda:Q,trackProspect:ne,updateProspectPhase:$,getProspects:me,getAllUsers:xe},children:s})}function ma(){const s=v.useContext(Tu);if(!s)throw new Error("useAuth must be inside AuthProvider");return s}const tu={cadastro:"Cadastro",verificado:"Verificado",nda_aceito:"NDA Aceito",preenchendo_interno:"Preenchendo (Interno)",preenchendo_externo:"Preenchendo (Externo)",enviado_interno:"Enviado (Interno)",enviado_externo:"Enviado (Externo)"};function Xf(){return o.jsx("div",{className:"min-h-screen flex items-center justify-center bg-navy",children:o.jsxs("div",{className:"flex flex-col items-center gap-4 animate-fadeIn",children:[o.jsxs("div",{className:"relative",children:[o.jsx("div",{className:"w-16 h-16 rounded-full border-2 border-sentinel/20 border-t-sentinel animate-spin"}),o.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:o.jsxs("svg",{width:24,height:24,viewBox:"0 0 80 80",fill:"none",children:[o.jsx("path",{d:"M40 12 L62 24 L62 42 C62 56 52 66 40 70 C28 66 18 56 18 42 L18 24 Z",fill:"none",stroke:"#7DD3FC",strokeWidth:"2"}),o.jsx("text",{x:"40",y:"48",textAnchor:"middle",fill:"#7DD3FC",fontSize:"22",fontWeight:"bold",fontFamily:"Inter, sans-serif",children:"$"})]})})]}),o.jsx("p",{className:"text-sm text-white/40 font-medium",children:"Carregando..."})]})})}function Ln({children:s}){const{isAuthenticated:n,isLoading:l}=ma();return l?o.jsx(Xf,{}):n?s:o.jsx(V0,{to:"/login",replace:!0})}const Mo="/sentinel-fairfield/";function Yf({end:s,suffix:n="",prefix:l=""}){const[u,m]=v.useState(0),c=v.useRef(null);return v.useEffect(()=>{const f=new IntersectionObserver(([g])=>{if(g.isIntersecting){const b=Date.now(),S=()=>{const j=Math.min((Date.now()-b)/2e3,1);m(Math.floor(j*s)),j<1&&requestAnimationFrame(S)};S(),f.disconnect()}},{threshold:.3});return c.current&&f.observe(c.current),()=>f.disconnect()},[s]),o.jsxs("span",{ref:c,children:[l,u.toLocaleString("pt-BR"),n]})}function Zf(){const s=["Analisando perfil da empresa...","Consultando Coface...","Consultando Atradius...","Consultando AVLA...","Consultando Allianz Trade...","Comparando coberturas...","Melhor oferta identificada!"],[n,l]=v.useState(0);return v.useEffect(()=>{const u=setInterval(()=>l(m=>(m+1)%s.length),2e3);return()=>clearInterval(u)},[]),s[n]}function eg({items:s}){const[n,l]=v.useState([]);return v.useEffect(()=>{const u=s.length*800,m=s.map((g,x)=>setTimeout(()=>l(b=>[...b,x]),(x+1)*800)),c=setTimeout(()=>l([]),u+2e3),f=setInterval(()=>{l([]),s.forEach((g,x)=>setTimeout(()=>l(b=>[...b,x]),(x+1)*800))},u+2500);return()=>{m.forEach(clearTimeout),clearTimeout(c),clearInterval(f)}},[s.length]),o.jsx("div",{className:"space-y-1.5 text-left max-w-[220px] mx-auto",children:s.map((u,m)=>o.jsxs("div",{className:`flex items-center gap-2 px-2.5 py-1.5 rounded-lg border transition-all duration-500 ${n.includes(m)?"bg-accent-emerald/[0.06] border-accent-emerald/20":"bg-white/[0.04] border-white/[0.06]"}`,children:[o.jsx("div",{className:`h-3 w-3 rounded-sm flex items-center justify-center flex-shrink-0 transition-all duration-300 ${n.includes(m)?"bg-accent-emerald/20 border border-accent-emerald/40":"border border-white/10"}`,children:n.includes(m)&&o.jsx("svg",{className:"h-2 w-2 text-accent-emerald animate-fadeIn",fill:"currentColor",viewBox:"0 0 20 20",children:o.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),o.jsx("span",{className:`text-[10px] transition-colors duration-500 ${n.includes(m)?"text-white/60":"text-white/30"}`,children:u})]},u))})}function xo({size:s=32}){return o.jsxs("svg",{width:s,height:s,viewBox:"0 0 80 80",fill:"none",children:[o.jsx("path",{d:"M40 12 L62 24 L62 42 C62 56 52 66 40 70 C28 66 18 56 18 42 L18 24 Z",fill:"rgba(125,211,252,0.08)",stroke:"#7DD3FC",strokeWidth:"1.5",children:o.jsx("animate",{attributeName:"stroke-opacity",values:"0.5;1;0.5",dur:"2.5s",repeatCount:"indefinite"})}),o.jsx("path",{d:"M40 20 L56 28 L56 42 C56 52 49 60 40 63 C31 60 24 52 24 42 L24 28 Z",fill:"rgba(125,211,252,0.05)",stroke:"#7DD3FC",strokeWidth:"0.8",opacity:"0.4"}),o.jsxs("text",{x:"40",y:"48",textAnchor:"middle",fill:"#7DD3FC",fontSize:"22",fontWeight:"bold",fontFamily:"Inter, sans-serif",children:["$",o.jsx("animate",{attributeName:"opacity",values:"0.6;1;0.6",dur:"2s",repeatCount:"indefinite"})]}),o.jsxs("line",{x1:"22",y1:"40",x2:"58",y2:"40",stroke:"#7DD3FC",strokeWidth:"0.5",opacity:"0.3",children:[o.jsx("animate",{attributeName:"y1",values:"25;55;25",dur:"3s",repeatCount:"indefinite"}),o.jsx("animate",{attributeName:"y2",values:"25;55;25",dur:"3s",repeatCount:"indefinite"}),o.jsx("animate",{attributeName:"opacity",values:"0;0.4;0",dur:"3s",repeatCount:"indefinite"})]}),o.jsx("defs",{children:o.jsxs("linearGradient",{id:"miniGrad",x1:"0",y1:"0",x2:"80",y2:"80",children:[o.jsx("stop",{offset:"0%",stopColor:"#7DD3FC"}),o.jsx("stop",{offset:"100%",stopColor:"#34D399"})]})})]})}function ag(){const s=`M114,10 L112,16 L117,22 L118,28 L122,30 L126,31 L129,34 L129,38
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
    L98,20 L102,20 L108,14 Z`,n=["M106,31 L106,52 L114,72 L130,81","M130,38 L130,55 L130,81","M130,81 L145,82 L160,90 L177,94","M73,104 L84,109 L92,107 L108,107 L132,108","M108,107 L132,108 L151,118 L168,130","M129,148 L139,148 L148,146","M132,108 L132,130 L139,148","M105,165 L129,165","M84,123 L99,130 L101,148","M161,45 L156,55 L168,70 L177,49","M132,108 L151,118 L174,111"],l=[[70,17,2],[73,46,3],[117,31,2],[129,38,3],[149,43,2],[156,55,2],[177,49,3],[193,59,2],[194,70,3],[191,78,2],[184,84,2],[177,94,3],[35,80,2],[54,74,2],[130,81,2],[92,107,2],[132,108,3],[125,112,2],[151,128,2],[154,142,3],[138,145,3],[125,155,2],[129,165,2],[116,177,3],[99,130,2]],u=[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[1,13],[13,12],[13,14],[14,16],[16,17],[17,15],[15,14],[16,18],[18,19],[19,20],[20,21],[21,22],[22,23],[1,14],[3,6],[6,11],[11,18],[16,20],[17,20],[5,11],[4,14],[0,13],[12,1],[15,24],[24,20],[8,11],[14,17],[13,15],[1,3],[3,14],[20,18],[11,16],[5,8],[15,24],[24,21]];return o.jsx("div",{className:"relative w-20 h-20 sm:w-24 sm:h-24",children:o.jsxs("svg",{viewBox:"0 0 200 200",fill:"none",className:"w-full h-full",children:[o.jsxs("defs",{children:[o.jsxs("radialGradient",{id:"brGlow",cx:"55%",cy:"50%",r:"50%",children:[o.jsx("stop",{offset:"0%",stopColor:"#7DD3FC",stopOpacity:"0.08"}),o.jsx("stop",{offset:"100%",stopColor:"#7DD3FC",stopOpacity:"0"})]}),o.jsxs("filter",{id:"nodeGlow",children:[o.jsx("feGaussianBlur",{stdDeviation:"3",result:"b"}),o.jsxs("feMerge",{children:[o.jsx("feMergeNode",{in:"b"}),o.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),o.jsxs("filter",{id:"borderGlow",children:[o.jsx("feGaussianBlur",{stdDeviation:"1.5",result:"b"}),o.jsxs("feMerge",{children:[o.jsx("feMergeNode",{in:"b"}),o.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),o.jsx("ellipse",{cx:"110",cy:"100",rx:"90",ry:"95",fill:"url(#brGlow)"}),o.jsx("path",{d:s,fill:"rgba(125,211,252,0.04)",stroke:"#7DD3FC",strokeWidth:"1.4",strokeLinejoin:"round",filter:"url(#borderGlow)",children:o.jsx("animate",{attributeName:"stroke-opacity",values:"0.4;0.7;0.4",dur:"4s",repeatCount:"indefinite"})}),n.map((m,c)=>o.jsx("path",{d:m,stroke:"#7DD3FC",strokeWidth:"0.4",fill:"none",opacity:"0.08",strokeLinejoin:"round",children:o.jsx("animate",{attributeName:"opacity",values:"0.04;0.12;0.04",dur:`${3+c*.5}s`,repeatCount:"indefinite"})},`sb${c}`)),u.map(([m,c],f)=>o.jsx("line",{x1:l[m][0],y1:l[m][1],x2:l[c][0],y2:l[c][1],stroke:"#7DD3FC",strokeWidth:"0.5",opacity:"0.12",children:o.jsx("animate",{attributeName:"opacity",values:"0.06;0.22;0.06",dur:`${2+f%5*.4}s`,begin:`${f%7*.3}s`,repeatCount:"indefinite"})},`c${f}`)),l.map(([m,c,f],g)=>o.jsxs("g",{children:[o.jsx("circle",{cx:m,cy:c,r:f*3,fill:"#7DD3FC",opacity:"0.06",filter:"url(#nodeGlow)"}),o.jsxs("circle",{cx:m,cy:c,r:f*.9,fill:"#7DD3FC",children:[o.jsx("animate",{attributeName:"opacity",values:"0.5;1;0.5",dur:`${1.5+g*.12}s`,repeatCount:"indefinite"}),o.jsx("animate",{attributeName:"r",values:`${f*.6};${f*1.1};${f*.6}`,dur:`${1.8+g*.15}s`,repeatCount:"indefinite"})]})]},`n${g}`)),o.jsxs("circle",{r:"2",fill:"#7DD3FC",filter:"url(#nodeGlow)",children:[o.jsx("animateMotion",{dur:"4.5s",repeatCount:"indefinite",path:"M73,46 L129,38 L177,49 L193,59 L194,70 L177,94 L151,128 L154,142 L138,145 L125,155 L116,177"}),o.jsx("animate",{attributeName:"opacity",values:"0;1;1;1;0",dur:"4.5s",repeatCount:"indefinite"})]}),o.jsxs("circle",{r:"1.5",fill:"#34D399",children:[o.jsx("animateMotion",{dur:"3.5s",repeatCount:"indefinite",begin:"1.2s",path:"M35,80 L54,74 L92,107 L132,108 L138,145 L129,165 L116,177"}),o.jsx("animate",{attributeName:"opacity",values:"0;0.9;0.9;0",dur:"3.5s",begin:"1.2s",repeatCount:"indefinite"})]}),o.jsxs("circle",{r:"1.2",fill:"#FCD34D",children:[o.jsx("animateMotion",{dur:"3.8s",repeatCount:"indefinite",begin:"2.5s",path:"M149,43 L130,81 L132,108 L151,128 L154,142"}),o.jsx("animate",{attributeName:"opacity",values:"0;0.8;0.8;0",dur:"3.8s",begin:"2.5s",repeatCount:"indefinite"})]})]})})}function og(){const s=[[24,20],[20,28],[18,35],[22,42],[26,48],[30,54],[32,62],[30,70],[28,76],[52,18],[56,22],[60,20],[64,24],[58,28],[56,36],[60,42],[64,50],[62,58],[58,64],[54,56],[68,20],[72,26],[76,32],[80,28],[84,24],[78,38],[74,44],[82,54],[80,60],[36,30],[42,24]],n=[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[9,10],[10,11],[11,12],[12,13],[13,9],[14,15],[15,16],[16,17],[17,18],[18,19],[19,14],[20,21],[21,22],[22,23],[23,24],[24,20],[22,25],[25,26],[27,28],[0,29],[29,30],[30,9],[9,20],[13,14],[14,19],[19,15],[16,25],[25,27],[1,29],[2,30],[11,20],[12,21],[22,24],[23,27],[26,28],[17,27],[3,30],[10,13],[15,19],[21,25],[5,19],[6,18],[10,14],[24,22]];return o.jsx("div",{className:"relative w-20 h-20 sm:w-24 sm:h-24",children:o.jsxs("svg",{viewBox:"0 0 100 100",fill:"none",className:"w-full h-full",children:[o.jsxs("defs",{children:[o.jsxs("radialGradient",{id:"gGlow",cx:"40%",cy:"35%",r:"50%",children:[o.jsx("stop",{offset:"0%",stopColor:"#7DD3FC",stopOpacity:"0.1"}),o.jsx("stop",{offset:"100%",stopColor:"#7DD3FC",stopOpacity:"0"})]}),o.jsx("clipPath",{id:"gClip",children:o.jsx("circle",{cx:"50",cy:"50",r:"42"})}),o.jsxs("filter",{id:"gnGlow",children:[o.jsx("feGaussianBlur",{stdDeviation:"1.5",result:"b"}),o.jsxs("feMerge",{children:[o.jsx("feMergeNode",{in:"b"}),o.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),o.jsx("circle",{cx:"50",cy:"50",r:"42",fill:"url(#gGlow)"}),o.jsx("circle",{cx:"50",cy:"50",r:"42",stroke:"#7DD3FC",strokeWidth:"1",fill:"none",children:o.jsx("animate",{attributeName:"stroke-opacity",values:"0.25;0.55;0.25",dur:"4s",repeatCount:"indefinite"})}),o.jsxs("g",{clipPath:"url(#gClip)",opacity:"0.15",children:[o.jsx("path",{d:`M12,18 L14,14 L18,12 L22,10 L26,11 L30,10 L34,12 L36,10 L38,12
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
            L90,30 L88,32 L86,30 L84,28 L82,26 L80,24 Z`,fill:"#7DD3FC"}),o.jsx("path",{d:"M80,34 L82,32 L84,34 L86,36 L84,40 L82,44 L80,42 L78,38 L78,36 Z",fill:"#7DD3FC"}),o.jsx("path",{d:"M86,34 L88,32 L90,34 L88,38 L86,40 L84,38 Z",fill:"#7DD3FC"}),o.jsx("path",{d:"M82,52 L86,50 L90,52 L92,56 L90,60 L86,62 L82,60 L80,56 Z",fill:"#7DD3FC"})]}),o.jsx("ellipse",{cx:"50",cy:"50",rx:"42",ry:"12",stroke:"#7DD3FC",strokeWidth:"0.3",opacity:"0.08"}),o.jsx("ellipse",{cx:"50",cy:"50",rx:"42",ry:"24",stroke:"#7DD3FC",strokeWidth:"0.3",opacity:"0.07"}),o.jsx("ellipse",{cx:"50",cy:"50",rx:"42",ry:"36",stroke:"#7DD3FC",strokeWidth:"0.3",opacity:"0.06"}),o.jsx("ellipse",{cx:"50",cy:"50",rx:"14",ry:"42",stroke:"#7DD3FC",strokeWidth:"0.3",opacity:"0.08"}),o.jsx("ellipse",{cx:"50",cy:"50",rx:"28",ry:"42",stroke:"#7DD3FC",strokeWidth:"0.3",opacity:"0.07"}),o.jsx("line",{x1:"8",y1:"50",x2:"92",y2:"50",stroke:"#7DD3FC",strokeWidth:"0.3",opacity:"0.08"}),o.jsx("line",{x1:"50",y1:"8",x2:"50",y2:"92",stroke:"#7DD3FC",strokeWidth:"0.3",opacity:"0.06"}),n.map(([l,u],m)=>o.jsx("line",{x1:s[l][0],y1:s[l][1],x2:s[u][0],y2:s[u][1],stroke:"#7DD3FC",strokeWidth:"0.35",opacity:"0.1",children:o.jsx("animate",{attributeName:"opacity",values:"0.05;0.18;0.05",dur:`${2+m%6*.3}s`,begin:`${m%8*.2}s`,repeatCount:"indefinite"})},`gm${m}`)),s.map(([l,u],m)=>o.jsxs("g",{children:[o.jsx("circle",{cx:l,cy:u,r:"2",fill:"#7DD3FC",opacity:"0.04",filter:"url(#gnGlow)"}),o.jsx("circle",{cx:l,cy:u,r:m%3===0?1.2:.7,fill:"#7DD3FC",children:o.jsx("animate",{attributeName:"opacity",values:"0.4;0.9;0.4",dur:`${1.5+m%5*.2}s`,repeatCount:"indefinite"})})]},`gn${m}`)),o.jsxs("circle",{r:"1.2",fill:"#7DD3FC",filter:"url(#gnGlow)",children:[o.jsx("animateMotion",{dur:"5s",repeatCount:"indefinite",path:"M24,20 L30,54 L32,62 L28,76 L50,88 L64,50 L76,32 L84,24 L82,54"}),o.jsx("animate",{attributeName:"opacity",values:"0;1;1;1;0",dur:"5s",repeatCount:"indefinite"})]}),o.jsxs("circle",{r:"1",fill:"#34D399",children:[o.jsx("animateMotion",{dur:"4s",repeatCount:"indefinite",begin:"1.5s",path:"M52,18 L60,20 L72,26 L80,28 L78,38 L62,58 L56,36 L30,54 L22,42"}),o.jsx("animate",{attributeName:"opacity",values:"0;0.9;0.9;0",dur:"4s",begin:"1.5s",repeatCount:"indefinite"})]}),o.jsx("circle",{cx:"50",cy:"50",r:"46",stroke:"#7DD3FC",strokeWidth:"0.4",strokeDasharray:"3 5",opacity:"0.08",children:o.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"25s",repeatCount:"indefinite"})})]})})}function rg(){const s=[{id:1,angle:0,delay:"0s",label:"Chubb"},{id:2,angle:51,delay:"0.7s",label:"Coface"},{id:3,angle:102,delay:"1.4s",label:"Atradius"},{id:4,angle:153,delay:"2.1s",label:"AVLA"},{id:5,angle:204,delay:"2.8s",label:"AIG"},{id:6,angle:255,delay:"3.5s",label:"Allianz"},{id:7,angle:306,delay:"4.2s",label:"CESCE"}];return o.jsxs("div",{className:"relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] flex items-center justify-center select-none",children:[o.jsx("div",{className:"absolute inset-0 rounded-full",style:{background:"radial-gradient(circle, rgba(125,211,252,0.06) 0%, transparent 70%)"}}),o.jsx("div",{className:"absolute inset-4 rounded-full border border-sentinel/10 animate-spin",style:{animationDuration:"18s"}}),o.jsx("div",{className:"absolute inset-8 rounded-full border border-dashed border-sentinel/8 animate-spin",style:{animationDuration:"28s",animationDirection:"reverse"}}),o.jsx("div",{className:"absolute inset-14 rounded-full border border-sentinel/12 animate-spin",style:{animationDuration:"12s"}}),s.map(n=>{const l=n.angle*Math.PI/180,u=120,m=Math.cos(l)*u,c=Math.sin(l)*u;return o.jsxs("div",{className:"absolute flex flex-col items-center gap-0.5",style:{transform:`translate(${m}px, ${c}px)`,animation:"orbit-pulse 3s ease-in-out infinite",animationDelay:n.delay},children:[o.jsx("div",{className:"w-2 h-2 rounded-full bg-sentinel shadow-lg",style:{boxShadow:"0 0 8px rgba(125,211,252,0.8)"}}),o.jsx("span",{className:"text-[7px] text-sentinel/60 font-mono font-bold whitespace-nowrap",children:n.label})]},n.id)}),o.jsx("div",{className:"absolute inset-14 rounded-full overflow-hidden",children:o.jsx("div",{className:"absolute inset-0 rounded-full animate-spin",style:{animationDuration:"3s",background:"conic-gradient(from 0deg, transparent 0deg, rgba(125,211,252,0.15) 60deg, transparent 90deg)"}})}),o.jsxs("div",{className:"relative z-10 flex items-center justify-center",children:[o.jsx("div",{className:"absolute w-32 h-32 rounded-full animate-pulse",style:{background:"radial-gradient(circle, rgba(125,211,252,0.12) 0%, transparent 70%)",animationDuration:"2.5s"}}),o.jsxs("svg",{viewBox:"0 0 120 136",className:"w-24 h-24 sm:w-28 sm:h-28 drop-shadow-xl",fill:"none",children:[o.jsxs("defs",{children:[o.jsxs("linearGradient",{id:"sg",x1:"0",y1:"0",x2:"0",y2:"1",children:[o.jsx("stop",{offset:"0%",stopColor:"#1E3A5F"}),o.jsx("stop",{offset:"100%",stopColor:"#0A1628"})]}),o.jsxs("linearGradient",{id:"sb",x1:"0",y1:"0",x2:"1",y2:"1",children:[o.jsx("stop",{offset:"0%",stopColor:"#7DD3FC"}),o.jsx("stop",{offset:"100%",stopColor:"#38BDF8"})]}),o.jsxs("filter",{id:"glow-s",children:[o.jsx("feGaussianBlur",{stdDeviation:"2.5",result:"blur"}),o.jsxs("feMerge",{children:[o.jsx("feMergeNode",{in:"blur"}),o.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),o.jsx("path",{d:"M60 4 L112 26 L112 72 Q112 112 60 132 Q8 112 8 72 L8 26 Z",fill:"url(#sg)"}),o.jsx("path",{d:"M60 4 L112 26 L112 72 Q112 112 60 132 Q8 112 8 72 L8 26 Z",fill:"none",stroke:"url(#sb)",strokeWidth:"1.5",opacity:"0.6",filter:"url(#glow-s)"}),o.jsx("path",{d:"M60 14 L102 32 L102 72 Q102 104 60 122 Q18 104 18 72 L18 32 Z",fill:"none",stroke:"rgba(125,211,252,0.15)",strokeWidth:"1"}),o.jsx("text",{x:"60",y:"84",fontFamily:"Arial,Helvetica,sans-serif",fontWeight:"900",fontSize:"44",fill:"url(#sb)",textAnchor:"middle",filter:"url(#glow-s)",opacity:"0.7",children:"$"}),o.jsxs("g",{stroke:"rgba(125,211,252,0.3)",strokeWidth:"1",fill:"none",children:[o.jsx("polyline",{points:"20,35 14,35 14,28"}),o.jsx("polyline",{points:"100,35 106,35 106,28"}),o.jsx("polyline",{points:"20,100 14,100 14,107"}),o.jsx("polyline",{points:"100,100 106,100 106,107"})]}),o.jsx("line",{x1:"18",y1:"75",x2:"102",y2:"75",stroke:"rgba(125,211,252,0.25)",strokeWidth:"1",style:{animation:"scan-line 2.5s ease-in-out infinite"}})]})]}),o.jsx("style",{children:`
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
      `})]})}function tg(){const[s,n]=v.useState(!1),l=Zf();v.useEffect(()=>{function m(){n(!0),window.scrollTo({top:0,behavior:"smooth"})}return window.addEventListener("sentinel-iniciar",m),()=>window.removeEventListener("sentinel-iniciar",m)},[]),v.useEffect(()=>{window.dispatchEvent(new CustomEvent(s?"sentinel-started":"sentinel-reset"))},[s]);const u=[{src:`${Mo}logos/coface.png`,alt:"Coface",invert:!0,size:"h-7 sm:h-9",mini:"h-5"},{src:`${Mo}logos/atradius.svg`,alt:"Atradius",size:"h-7 sm:h-9",mini:"h-5"},{src:`${Mo}logos/allianz-trade.png`,alt:"Allianz Trade",invert:!0,size:"h-9 sm:h-12",mini:"h-7"},{src:`${Mo}logos/avla.svg`,alt:"AVLA",size:"h-6 sm:h-8",mini:"h-4"},{src:`${Mo}logos/aig.png`,alt:"AIG",size:"h-7 sm:h-9",mini:"h-5"},{src:`${Mo}logos/cesce.svg`,alt:"CESCE",size:"h-7 sm:h-9",mini:"h-5"},{src:`${Mo}logos/chubb.svg`,alt:"CHUBB",size:"h-7 sm:h-9",mini:"h-5"}];return o.jsxs("div",{className:"max-w-6xl mx-auto px-3 sm:px-4 py-6 sm:py-10",children:[!s&&o.jsxs("div",{className:"animate-fadeIn",children:[o.jsxs("section",{className:"relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-navy via-navy-light to-navy p-8 sm:p-12 pb-10 mb-8",children:[o.jsx("div",{className:"absolute top-0 right-0 w-[500px] h-[500px] bg-sentinel/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-[120px]"}),o.jsx("div",{className:"absolute bottom-0 left-0 w-[300px] h-[300px] bg-cobre/5 rounded-full translate-y-1/2 -translate-x-1/4 blur-[100px]"}),o.jsx("div",{className:"absolute inset-0 bg-grid opacity-30"}),o.jsxs("div",{className:"relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-6",children:[o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-[1.05] tracking-tight text-white",children:o.jsx("span",{className:"bg-gradient-to-r from-sentinel to-sentinel-light bg-clip-text text-transparent",children:"SENTINEL"})}),o.jsxs("p",{className:"text-lg sm:text-xl font-medium text-white/50 mb-6 leading-relaxed max-w-lg",children:["Nossa plataforma analisa o perfil da sua empresa e consulta simultaneamente todas as seguradoras do mercado, garantindo a ",o.jsx("strong",{className:"text-cobre",children:"melhor opcao em seguro de credito"})," para o seu negocio."]}),o.jsxs("button",{onClick:()=>{n(!0),window.scrollTo({top:0,behavior:"smooth"})},className:"group relative inline-flex items-center gap-3 bg-gradient-to-r from-sentinel-dark to-sentinel text-navy-dark px-8 sm:px-10 py-4 rounded-2xl font-bold text-base sm:text-lg shadow-xl shadow-sentinel/15 hover:shadow-2xl hover:shadow-sentinel/25 hover:scale-[1.02] transition-all duration-300",children:[o.jsx("svg",{className:"w-5 h-5 group-hover:translate-x-1 transition-transform",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),"Iniciar Cotacao",o.jsx("span",{className:"absolute -top-2 -right-2 bg-accent-emerald text-navy-dark text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse",children:"Gratis"})]}),o.jsx("p",{className:"text-white/20 text-xs mt-4",children:"Sem compromisso · Resultado em ate 5 dias uteis"})]}),o.jsx("div",{className:"flex-shrink-0 flex items-center justify-center w-full lg:w-auto",children:o.jsx(rg,{})})]})]}),o.jsxs("section",{className:"card-glass mb-8 relative overflow-hidden",children:[o.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[o.jsx("div",{className:"absolute -top-20 -right-20 w-[300px] h-[300px] bg-sentinel/5 rounded-full blur-[100px]"}),o.jsx("div",{className:"absolute -bottom-20 -left-20 w-[250px] h-[250px] bg-cobre/5 rounded-full blur-[100px]"}),o.jsx("div",{className:"absolute inset-0 bg-grid opacity-20"})]}),o.jsxs("div",{className:"relative z-10",children:[o.jsxs("div",{className:"text-center mb-10",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sentinel/10 border border-sentinel/20 text-sentinel text-[10px] font-bold uppercase tracking-widest mb-3",children:[o.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-sentinel animate-pulse"}),"Resultados Comprovados"]}),o.jsx("h2",{className:"text-2xl sm:text-3xl font-black text-white",children:"Por que escolher o SENTINEL"}),o.jsx("p",{className:"text-white/30 text-sm mt-2",children:"Numeros que falam por si — tecnologia que transforma."})]}),o.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-10",children:[{val:7,suffix:"",label:"Seguradoras conectadas",icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"})}),gradient:"from-sentinel to-sentinel-light",iconClass:"bg-sentinel/10 border border-sentinel/20 text-sentinel shadow-lg shadow-sentinel/5"},{val:500,suffix:"+",label:"Empresas atendidas",icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"})}),gradient:"from-cobre to-cobre-light",iconClass:"bg-cobre/10 border border-cobre/20 text-cobre shadow-lg shadow-cobre/5"},{val:98,suffix:"%",label:"Satisfacao dos clientes",icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"})}),gradient:"from-accent-emerald to-emerald-300",iconClass:"bg-accent-emerald/10 border border-accent-emerald/20 text-accent-emerald shadow-lg shadow-accent-emerald/5"},{val:5,suffix:" dias",label:"Prazo de entrega",icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),gradient:"from-accent-violet to-violet-300",iconClass:"bg-accent-violet/10 border border-accent-violet/20 text-accent-violet shadow-lg shadow-accent-violet/5"}].map(m=>o.jsxs("div",{className:"text-center group",children:[o.jsx("div",{className:`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 ${m.iconClass}`,children:m.icon}),o.jsx("p",{className:"text-3xl sm:text-4xl font-black text-white",children:o.jsx(Yf,{end:m.val,suffix:m.suffix})}),o.jsx("p",{className:"text-xs sm:text-sm text-white/40 mt-2 font-medium",children:m.label})]},m.label))}),o.jsx("div",{className:"h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-10"}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),title:"100% Gratuito",text:"O estudo de mercado SENTINEL e totalmente gratuito. Atuamos como suporte adicional a sua area de credito.",color:"emerald",borderColor:"border-l-accent-emerald/50",iconBg:"bg-accent-emerald/10 text-accent-emerald border-accent-emerald/20"},{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),title:"Decisao Estrategica",text:"Seus dados geram um estudo de mercado completo — determinante para a estrategia de credito da sua empresa.",color:"sentinel",borderColor:"border-l-sentinel/50",iconBg:"bg-sentinel/10 text-sentinel border-sentinel/20"},{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),title:"IA + Inteligencia de Mercado",text:"O SENTINEL processa seu perfil com IA e cruza dados de 7 seguradoras para recomendar a melhor solucao.",color:"cobre",borderColor:"border-l-cobre/50",iconBg:"bg-cobre/10 text-cobre border-cobre/20"}].map(m=>o.jsxs("div",{className:`rounded-xl bg-white/[0.03] border border-white/[0.06] border-l-[3px] ${m.borderColor} p-5 hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300 group`,children:[o.jsx("div",{className:`h-11 w-11 rounded-xl border flex items-center justify-center mb-4 ${m.iconBg} group-hover:scale-110 transition-transform duration-300`,children:m.icon}),o.jsx("h4",{className:"text-base font-bold text-white mb-2",children:m.title}),o.jsx("p",{className:"text-sm text-white/35 leading-relaxed",children:m.text})]},m.title))})]})]}),o.jsxs("section",{className:"card-glass mb-8 relative overflow-hidden",children:[o.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:o.jsx("div",{className:"absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sentinel/20 to-transparent",style:{animation:"flow-scan 4s ease-in-out infinite"}})}),o.jsxs("div",{className:"text-center mb-8",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sentinel/10 border border-sentinel/20 text-sentinel text-[10px] font-bold uppercase tracking-widest mb-3",children:[o.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-sentinel animate-pulse"}),"Smart Credit Engine"]}),o.jsx("h2",{className:"text-2xl sm:text-3xl font-black text-white",children:"Como funciona o SENTINEL"}),o.jsx("p",{className:"text-white/30 text-sm mt-2",children:"Tres etapas. Uma plataforma. A melhor solucao de credito."})]}),o.jsxs("div",{className:"relative",children:[o.jsx("div",{className:"hidden md:block absolute z-0 overflow-visible",style:{top:"35px",left:"calc(16.667% - 0.833rem + 36px)",width:"calc(33.333% + 0.833rem - 72px)",height:"2px"},children:o.jsxs("div",{className:"w-full h-full bg-sentinel/15 relative overflow-visible",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-sky-300/40 to-sky-400/40",style:{animation:"linePulse 2s ease-in-out infinite"}}),o.jsx("div",{className:"absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-sky-300 shadow-[0_0_8px_#7DD3FC]",style:{animation:"travelDot 2.5s linear infinite"}})]})}),o.jsx("div",{className:"hidden md:block absolute z-0 overflow-visible",style:{top:"35px",left:"calc(50% + 36px)",width:"calc(33.333% + 0.833rem - 72px)",height:"2px"},children:o.jsxs("div",{className:"w-full h-full bg-sentinel/15 relative overflow-visible",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-sky-400/40 to-emerald-400/40",style:{animation:"linePulse 2s ease-in-out infinite",animationDelay:"1s"}}),o.jsx("div",{className:"absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]",style:{animation:"travelDot 2.5s linear infinite",animationDelay:"0.8s"}})]})}),o.jsxs("div",{className:"relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10",children:[o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"w-[72px] h-[72px] rounded-2xl bg-sentinel/10 border border-sentinel/20 flex items-center justify-center mx-auto mb-4",children:o.jsx("svg",{className:"h-7 w-7 text-sentinel",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),o.jsx("h3",{className:"text-sm font-bold text-white mb-1",children:"Seus Dados"}),o.jsx("p",{className:"text-[11px] text-white/30 mb-3",children:"Preencha as informacoes da empresa"}),o.jsx(eg,{items:["CNPJ / Razao Social","Faturamento e Carteira","Historico de Perdas","Amostra de Compradores"]})]}),o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"w-[72px] h-[72px] rounded-2xl bg-sentinel/15 border border-sentinel/25 flex items-center justify-center mx-auto mb-4 relative overflow-hidden",children:o.jsxs("svg",{className:"h-12 w-12",viewBox:"0 0 48 48",fill:"none",children:[o.jsx("line",{x1:"0",y1:"14",x2:"14",y2:"14",stroke:"#7DD3FC",strokeWidth:"1",opacity:"0.3",children:o.jsx("animate",{attributeName:"opacity",values:"0.1;0.6;0.1",dur:"1.5s",repeatCount:"indefinite"})}),o.jsx("line",{x1:"34",y1:"14",x2:"48",y2:"14",stroke:"#7DD3FC",strokeWidth:"1",opacity:"0.3",children:o.jsx("animate",{attributeName:"opacity",values:"0.1;0.6;0.1",dur:"1.5s",begin:"0.3s",repeatCount:"indefinite"})}),o.jsx("line",{x1:"0",y1:"24",x2:"14",y2:"24",stroke:"#7DD3FC",strokeWidth:"1",opacity:"0.3",children:o.jsx("animate",{attributeName:"opacity",values:"0.1;0.6;0.1",dur:"1.8s",begin:"0.5s",repeatCount:"indefinite"})}),o.jsx("line",{x1:"34",y1:"24",x2:"48",y2:"24",stroke:"#7DD3FC",strokeWidth:"1",opacity:"0.3",children:o.jsx("animate",{attributeName:"opacity",values:"0.1;0.6;0.1",dur:"1.8s",begin:"0.8s",repeatCount:"indefinite"})}),o.jsx("line",{x1:"0",y1:"34",x2:"14",y2:"34",stroke:"#7DD3FC",strokeWidth:"1",opacity:"0.3",children:o.jsx("animate",{attributeName:"opacity",values:"0.1;0.6;0.1",dur:"1.6s",begin:"1s",repeatCount:"indefinite"})}),o.jsx("line",{x1:"34",y1:"34",x2:"48",y2:"34",stroke:"#7DD3FC",strokeWidth:"1",opacity:"0.3",children:o.jsx("animate",{attributeName:"opacity",values:"0.1;0.6;0.1",dur:"1.6s",begin:"0.2s",repeatCount:"indefinite"})}),o.jsx("line",{x1:"14",y1:"0",x2:"14",y2:"14",stroke:"#7DD3FC",strokeWidth:"1",opacity:"0.3",children:o.jsx("animate",{attributeName:"opacity",values:"0.1;0.6;0.1",dur:"2s",begin:"0.4s",repeatCount:"indefinite"})}),o.jsx("line",{x1:"34",y1:"0",x2:"34",y2:"14",stroke:"#7DD3FC",strokeWidth:"1",opacity:"0.3",children:o.jsx("animate",{attributeName:"opacity",values:"0.1;0.6;0.1",dur:"2s",begin:"0.7s",repeatCount:"indefinite"})}),o.jsx("line",{x1:"14",y1:"34",x2:"14",y2:"48",stroke:"#7DD3FC",strokeWidth:"1",opacity:"0.3",children:o.jsx("animate",{attributeName:"opacity",values:"0.1;0.6;0.1",dur:"1.4s",begin:"0.6s",repeatCount:"indefinite"})}),o.jsx("line",{x1:"34",y1:"34",x2:"34",y2:"48",stroke:"#7DD3FC",strokeWidth:"1",opacity:"0.3",children:o.jsx("animate",{attributeName:"opacity",values:"0.1;0.6;0.1",dur:"1.4s",begin:"0.9s",repeatCount:"indefinite"})}),o.jsxs("circle",{r:"1.5",fill:"#7DD3FC",children:[o.jsx("animateMotion",{dur:"1.2s",repeatCount:"indefinite",path:"M0,14 L14,14"}),o.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"1.2s",repeatCount:"indefinite"})]}),o.jsxs("circle",{r:"1.5",fill:"#34D399",children:[o.jsx("animateMotion",{dur:"1s",repeatCount:"indefinite",path:"M48,24 L34,24",begin:"0.4s"}),o.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"1s",begin:"0.4s",repeatCount:"indefinite"})]}),o.jsxs("circle",{r:"1.5",fill:"#7DD3FC",children:[o.jsx("animateMotion",{dur:"1.1s",repeatCount:"indefinite",path:"M14,48 L14,34",begin:"0.7s"}),o.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"1.1s",begin:"0.7s",repeatCount:"indefinite"})]}),o.jsxs("circle",{r:"1.5",fill:"#34D399",children:[o.jsx("animateMotion",{dur:"0.9s",repeatCount:"indefinite",path:"M34,0 L34,14",begin:"0.2s"}),o.jsx("animate",{attributeName:"opacity",values:"0;1;0",dur:"0.9s",begin:"0.2s",repeatCount:"indefinite"})]}),o.jsx("rect",{x:"14",y:"14",width:"20",height:"20",rx:"3",stroke:"#7DD3FC",strokeWidth:"1.5",fill:"rgba(125,211,252,0.08)",children:o.jsx("animate",{attributeName:"stroke-opacity",values:"0.4;0.9;0.4",dur:"2s",repeatCount:"indefinite"})}),o.jsx("rect",{x:"19",y:"19",width:"10",height:"10",rx:"1.5",fill:"rgba(125,211,252,0.15)",stroke:"#7DD3FC",strokeWidth:"0.8",children:o.jsx("animate",{attributeName:"fill-opacity",values:"0.1;0.4;0.1",dur:"1.5s",repeatCount:"indefinite"})}),[14,24,34].map(m=>[14,34].map(c=>o.jsx("circle",{cx:c,cy:m,r:"1",fill:"#7DD3FC",opacity:"0.5",children:o.jsx("animate",{attributeName:"opacity",values:"0.3;1;0.3",dur:`${1+Math.random()}s`,repeatCount:"indefinite"})},`${c}-${m}`)))]})}),o.jsx("h3",{className:"text-sm font-bold text-white mb-1",children:"SENTINEL Analisa"}),o.jsx("p",{className:"text-[11px] text-white/30 mb-3",children:"IA consulta simultaneamente"}),o.jsxs("div",{className:"rounded-lg bg-navy-dark/60 border border-white/[0.06] p-2.5 mb-3 max-w-[260px] mx-auto",children:[o.jsxs("div",{className:"flex items-center gap-1 mb-1.5",children:[o.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-rose-400/60"}),o.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-amber-400/60"}),o.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-accent-emerald/60"}),o.jsx("span",{className:"text-[8px] text-white/15 ml-1.5 font-mono",children:"sentinel-engine v1.0"})]}),o.jsx("p",{className:"text-[10px] text-sentinel font-mono min-h-[14px]",children:l}),o.jsx("div",{className:"mt-1.5 h-1 rounded-full bg-white/[0.06] overflow-hidden",children:o.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-sentinel to-accent-emerald animate-progress-loop"})})]}),o.jsxs("div",{className:"space-y-3 max-w-[300px] mx-auto",children:[o.jsx("div",{className:"flex justify-center items-center gap-4",children:u.slice(0,4).map(m=>o.jsx("img",{src:m.src,alt:m.alt,title:m.alt,className:`${m.mini||"h-5"} w-auto object-contain brightness-0 invert opacity-40 hover:opacity-80 transition-opacity`},m.alt))}),o.jsx("div",{className:"flex justify-center items-center gap-4",children:u.slice(4).map(m=>o.jsx("img",{src:m.src,alt:m.alt,title:m.alt,className:`${m.mini||"h-5"} w-auto object-contain brightness-0 invert opacity-40 hover:opacity-80 transition-opacity`},m.alt))})]})]}),o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"w-[72px] h-[72px] rounded-2xl bg-accent-emerald/10 border border-accent-emerald/20 flex items-center justify-center mx-auto mb-4",children:o.jsx("svg",{className:"h-7 w-7 text-accent-emerald",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"})})}),o.jsx("h3",{className:"text-sm font-bold text-white mb-1",children:"Melhor Oferta"}),o.jsx("p",{className:"text-[11px] text-white/30 mb-3",children:"Resultado otimizado para voce"}),o.jsxs("div",{className:"space-y-2 max-w-[220px] mx-auto",children:[o.jsxs("div",{className:"p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-left",children:[o.jsx("span",{className:"text-[9px] text-white/25 block",children:"Comparativo"}),o.jsx("span",{className:"text-xs font-bold text-accent-emerald",children:"7 seguradoras analisadas"})]}),o.jsxs("div",{className:"flex gap-1.5",children:[o.jsxs("div",{className:"flex-1 p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] text-left",children:[o.jsx("span",{className:"text-[8px] text-white/25 block",children:"Prazo"}),o.jsx("span",{className:"text-[11px] font-bold text-white",children:"5 dias"})]}),o.jsxs("div",{className:"flex-1 p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] text-left",children:[o.jsx("span",{className:"text-[8px] text-white/25 block",children:"Economia"}),o.jsx("span",{className:"text-[11px] font-bold text-accent-emerald",children:"-30%"})]})]})]})]})]})]}),o.jsx("style",{children:`
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
            `})]}),o.jsxs("section",{className:"card-glass mb-8",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-5",children:[o.jsx("div",{className:"h-10 w-10 rounded-xl bg-cobre/15 border border-cobre/25 flex items-center justify-center flex-shrink-0",children:o.jsx("svg",{className:"w-5 h-5 text-cobre",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"})})}),o.jsxs("div",{children:[o.jsx("p",{className:"text-cobre text-[10px] font-bold uppercase tracking-widest",children:"Fairfield — Consultora Independente"}),o.jsx("h2",{className:"text-xl sm:text-2xl font-black text-white",children:"Nosso compromisso"})]})]}),o.jsxs("p",{className:"text-white/40 text-base sm:text-lg leading-relaxed mb-6",children:["A Fairfield atua como ",o.jsx("strong",{className:"text-white/70",children:"consultoria em Seguro de Credito 100% independente"})," — nao representamos nenhuma seguradora. O ",o.jsx("strong",{className:"text-sentinel",children:"SENTINEL"})," e nossa plataforma proprietaria que combina ",o.jsx("strong",{className:"text-white/70",children:"inteligencia artificial"})," com decadas de experiencia no mercado segurador, garantindo a ",o.jsx("strong",{className:"text-cobre",children:"melhor condicao do mercado"})," para a sua empresa ",o.jsx("strong",{className:"text-white/70",children:"sem que voce tenha que pagar a mais por isso"}),"."]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[o.jsx(An,{title:"Imparcialidade Total",text:"Analisamos todas as propostas sem conflito de interesse.",color:"sentinel"}),o.jsx(An,{title:"Analise Tecnica Profunda",text:"Comparamos cobertura, premio, franquias e servicos agregados.",color:"cobre"}),o.jsx(An,{title:"Melhor Custo-Beneficio",text:"Garantimos acesso as melhores condicoes do mercado.",color:"emerald"})]})]}),o.jsxs("section",{className:"mb-8",children:[o.jsx("p",{className:"text-center text-[10px] text-white/30 uppercase tracking-widest font-bold mb-6",children:"Seguradoras parceiras conectadas"}),o.jsxs("div",{className:"card-glass px-6 py-8",children:[o.jsx("div",{className:"flex flex-wrap justify-center items-center gap-8 sm:gap-12",children:u.map(m=>o.jsx("div",{className:`flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 ${m.size||"h-10 sm:h-12"}`,children:o.jsx("img",{src:m.src,alt:m.alt,className:`h-full w-auto object-contain ${m.invert?"brightness-0 invert":""}`})},m.alt))}),o.jsx("div",{className:"section-divider mt-7"}),o.jsxs("p",{className:"text-center text-sm text-white/40 mt-5",children:["O ",o.jsx("span",{className:"text-sentinel font-bold",children:"SENTINEL"})," consulta todas simultaneamente e identifica a ",o.jsx("span",{className:"text-cobre font-bold",children:"melhor solucao"}),"."]})]})]}),o.jsxs("section",{className:"text-center mb-6",children:[o.jsxs("button",{onClick:()=>{n(!0),window.scrollTo({top:0,behavior:"smooth"})},className:"group relative inline-flex items-center gap-3 bg-gradient-to-r from-sentinel-dark to-sentinel text-navy-dark px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-sentinel/15 hover:shadow-2xl hover:shadow-sentinel/25 hover:scale-[1.02] transition-all duration-300",children:[o.jsx("svg",{className:"w-5 h-5 group-hover:translate-x-1 transition-transform",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),"Iniciar Cotacao Gratuita"]}),o.jsx("p",{className:"text-white/15 text-xs mt-3",children:"Sem compromisso · Leva menos de 10 minutos"})]})]}),s&&o.jsxs("div",{className:"animate-fadeIn",children:[o.jsxs("div",{className:"flex items-center justify-between mb-6 sm:mb-8",children:[o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx(xo,{size:48}),o.jsxs("div",{children:[o.jsx("h2",{className:"text-2xl sm:text-3xl font-black text-white",children:"Escolha o tipo de operacao"}),o.jsx("p",{className:"text-white/35 text-sm",children:"Selecione o formulario adequado ao seu perfil"})]})]}),o.jsxs("button",{onClick:()=>n(!1),className:"text-xs text-white/30 hover:text-sentinel transition-colors flex items-center gap-1",children:[o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),"Voltar"]})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6",children:[o.jsxs(Xe,{to:"/cotacao/interno",className:"group card-glass hover:border-sentinel/30 transition-all duration-300 flex flex-col",children:[o.jsx("div",{className:"rounded-xl bg-gradient-to-br from-sentinel/10 to-transparent p-5 mb-5 flex items-center justify-center",children:o.jsx(ag,{})}),o.jsx("h3",{className:"text-2xl sm:text-3xl font-black text-white mb-2 group-hover:text-sentinel transition-colors",children:"Credito Interno"}),o.jsx("p",{className:"text-base text-cobre font-semibold mb-3",children:"Operacoes Nacionais (Brasil)"}),o.jsx("p",{className:"text-white/40 text-base flex-1 leading-relaxed",children:"Protecao para vendas a prazo no mercado brasileiro. Cobertura contra inadimplencia de compradores nacionais."}),o.jsx("div",{className:"mt-5 pt-4 border-t border-white/[0.06]",children:o.jsxs("ul",{className:"text-sm text-white/30 space-y-1.5",children:[o.jsx("li",{children:"• Valores em Reais (R$)"}),o.jsx("li",{children:"• Ate 20 compradores na amostra"}),o.jsx("li",{children:"• Detalhamento de perdas por faixa"})]})}),o.jsx("div",{className:"mt-5 btn-primary text-center text-base",children:"Iniciar Estudo de Mercado"})]}),o.jsxs(Xe,{to:"/cotacao/externo",className:"group card-glass hover:border-cobre/30 transition-all duration-300 flex flex-col",children:[o.jsx("div",{className:"rounded-xl bg-gradient-to-br from-cobre/10 to-transparent p-5 mb-5 flex items-center justify-center",children:o.jsx(og,{})}),o.jsx("h3",{className:"text-2xl sm:text-3xl font-black text-white mb-2 group-hover:text-cobre transition-colors",children:"Credito Externo"}),o.jsx("p",{className:"text-base text-cobre font-semibold mb-3",children:"Operacoes de Exportacao"}),o.jsx("p",{className:"text-white/40 text-base flex-1 leading-relaxed",children:"Protecao para vendas internacionais. Cobertura contra inadimplencia de importadores estrangeiros."}),o.jsx("div",{className:"mt-5 pt-4 border-t border-white/[0.06]",children:o.jsxs("ul",{className:"text-sm text-white/30 space-y-1.5",children:[o.jsx("li",{children:"• Valores em Dolares (US$)"}),o.jsx("li",{children:"• Distribuicao por continente/pais"}),o.jsx("li",{children:"• Ate 10 compradores na amostra"})]})}),o.jsx("div",{className:"mt-5 btn-accent text-center text-base",children:"Iniciar Estudo de Mercado"})]})]}),o.jsx("div",{className:"mt-6 text-center",children:o.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-emerald/10 border border-accent-emerald/20",children:[o.jsx("svg",{className:"w-3.5 h-3.5 text-accent-emerald",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),o.jsx("span",{className:"text-sm text-accent-emerald font-medium",children:"100% gratuito e sem compromisso — seus dados sao protegidos pela LGPD"})]})}),o.jsxs("div",{className:"mt-6 card-glass",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[o.jsx("div",{className:"h-10 w-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center flex-shrink-0",children:o.jsx("svg",{className:"w-5 h-5 text-white/40",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})})}),o.jsxs("div",{children:[o.jsx("p",{className:"text-cobre text-xs font-bold uppercase tracking-widest",children:"Sigilo Garantido"}),o.jsx("h4",{className:"text-xl font-bold text-white",children:"Compromisso de Confidencialidade"})]})]}),o.jsx("p",{className:"text-white/35 text-base leading-relaxed mb-4",children:"Todas as informacoes sao estritamente confidenciais e protegidas por contrato de sigilo. Seus dados nunca serao compartilhados alem do necessario para a cotacao."}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:["Dados utilizados exclusivamente para estudo de mercado","Sigilo absoluto sobre dados financeiros e comerciais","Nenhuma informacao compartilhada sem autorizacao","Dados pessoais protegidos nos termos da LGPD"].map(m=>o.jsxs("div",{className:"flex items-start gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]",children:[o.jsx("svg",{className:"w-3.5 h-3.5 text-accent-emerald flex-shrink-0 mt-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),o.jsx("p",{className:"text-sm text-white/40 leading-relaxed",children:m})]},m))}),o.jsxs("div",{className:"flex items-center gap-2 text-white/15 text-[10px] mt-4 pt-3 border-t border-white/[0.04]",children:[o.jsx("svg",{className:"w-3 h-3 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Vigencia da proposta: 90 dias · SUSEP 20.2036457.1"]})]})]}),o.jsxs(Xe,{to:"/icover",className:"fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-2xl shadow-2xl shadow-sentinel/20 hover:shadow-sentinel/40 hover:scale-105 transition-all duration-300 group",style:{background:"linear-gradient(135deg, #0c4a6e 0%, #0284c7 50%, #0ea5e9 100%)"},children:[o.jsx("svg",{className:"w-5 h-5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})}),o.jsx("span",{className:"text-white text-sm font-semibold hidden sm:inline",children:"iCover"}),o.jsx("span",{className:"absolute -top-1 -right-1 h-3 w-3 rounded-full bg-emerald-400 border-2 border-navy animate-pulse"})]})]})}function An({title:s,text:n,color:l}){const u={sentinel:"border-sentinel/15 hover:border-sentinel/30",cobre:"border-cobre/15 hover:border-cobre/30",emerald:"border-accent-emerald/15 hover:border-accent-emerald/30"};return o.jsxs("div",{className:`rounded-xl border bg-white/[0.02] p-5 transition-all ${u[l]}`,children:[o.jsx("h4",{className:"text-base font-bold text-white mb-2",children:s}),o.jsx("p",{className:"text-sm text-white/35 leading-relaxed",children:n})]})}function js(s){const n=s.replace(/\D/g,"").slice(0,14);return n.length<=2?n:n.length<=5?`${n.slice(0,2)}.${n.slice(2)}`:n.length<=8?`${n.slice(0,2)}.${n.slice(2,5)}.${n.slice(5)}`:n.length<=12?`${n.slice(0,2)}.${n.slice(2,5)}.${n.slice(5,8)}/${n.slice(8)}`:`${n.slice(0,2)}.${n.slice(2,5)}.${n.slice(5,8)}/${n.slice(8,12)}-${n.slice(12)}`}function sg(s){const n=s.replace(/\D/g,"");if(n.length!==14||/^(\d)\1{13}$/.test(n))return!1;let l=12,u=n.substring(0,l).split("").map(Number),m=0,c=l-7;for(let g=l;g>=1;g--)m+=u[l-g]*c--,c<2&&(c=9);let f=m%11<2?0:11-m%11;if(f!==parseInt(n.charAt(l)))return!1;l=13,u=n.substring(0,l).split("").map(Number),m=0,c=l-7;for(let g=l;g>=1;g--)m+=u[l-g]*c--,c<2&&(c=9);return f=m%11<2?0:11-m%11,f===parseInt(n.charAt(l))}function ye({label:s,value:n,onChange:l,placeholder:u,required:m,error:c,type:f="text",readOnly:g,className:x="",hint:b}){return o.jsxs("div",{children:[o.jsxs("label",{className:"label-field",children:[s,m&&" *"]}),b&&o.jsx("p",{className:"text-xs text-gray-400 mb-1",children:b}),o.jsx("input",{type:f,className:`input-field ${x}`,value:n,onChange:S=>l(S.target.value),placeholder:u,readOnly:g}),c&&o.jsx("p",{className:"error-msg",children:c})]})}function ig({label:s,value:n,onChange:l,options:u,required:m,error:c,placeholder:f="Selecione...",hint:g}){return o.jsxs("div",{children:[o.jsxs("label",{className:"label-field",children:[s,m&&" *"]}),g&&o.jsx("p",{className:"text-xs text-gray-400 mb-1",children:g}),o.jsxs("select",{className:"select-field",value:n,onChange:x=>l(x.target.value),children:[o.jsx("option",{value:"",children:f}),u.map(x=>typeof x=="string"?o.jsx("option",{value:x,children:x},x):o.jsx("option",{value:x.value,children:x.label},x.value))]}),c&&o.jsx("p",{className:"error-msg",children:c})]})}function ua({columns:s,rows:n,onChange:l,onAdd:u,onRemove:m,maxRows:c,addLabel:f="Adicionar linha",errors:g={}}){const[x,b]=v.useState({});async function S(j,P,M){if(P.type==="cnpj"){const F=js(M);l(j,P.key,F);const D=F.replace(/\D/g,"");if(D.length<14){b(L=>{const B={...L};return delete B[`${j}_${P.key}`],B});return}if(!sg(F)){b(L=>({...L,[`${j}_${P.key}`]:"invalid"}));return}if(!P.cnpjLookupTarget){b(L=>({...L,[`${j}_${P.key}`]:"valid"}));return}b(L=>({...L,[`${j}_${P.key}`]:"loading"}));try{const L=await Ke(`/api/cnpj/${D}`);L.sucesso?(l(j,P.cnpjLookupTarget,L.data.razao_social),b(B=>({...B,[`${j}_${P.key}`]:"found"}))):L.status===404?b(B=>({...B,[`${j}_${P.key}`]:"not_found"})):b(B=>({...B,[`${j}_${P.key}`]:"error"}))}catch{b(L=>({...L,[`${j}_${P.key}`]:"error"}))}}else l(j,P.key,M)}return o.jsxs("div",{className:"overflow-x-auto",children:[o.jsxs("table",{className:"w-full text-sm border border-gray-200 rounded-lg overflow-hidden",children:[o.jsx("thead",{children:o.jsxs("tr",{className:"bg-navy text-white",children:[s.map((j,P)=>o.jsxs("th",{className:"px-3 py-2 text-left text-xs font-semibold whitespace-nowrap",children:[j.label,j.type==="cnpj"&&j.cnpjLookupTarget&&o.jsx("span",{className:"ml-1 text-[9px] text-cobre/80 font-normal normal-case",children:"auto-preenche"})]},P)),o.jsx("th",{className:"px-2 py-2 w-10"})]})}),o.jsx("tbody",{children:n.map((j,P)=>o.jsxs("tr",{className:"border-t border-gray-100 hover:bg-gray-50",children:[s.map((M,F)=>{const D=`${P}_${M.key}`,L=x[D];return o.jsx("td",{className:"px-2 py-1",children:M.readOnly?o.jsx("span",{className:`text-xs px-2 py-1.5 block rounded ${j[M.key]?"bg-navy/5 text-navy font-semibold":"text-gray-400"}`,children:j[M.key]?`${j[M.key]}${M.placeholder==="Auto"?"%":""}`:M.placeholder||"—"}):M.type==="cnpj"?o.jsxs("div",{className:"relative",children:[o.jsx("input",{className:`w-full px-2 py-1.5 text-xs border rounded focus:ring-1 focus:ring-cobre focus:border-cobre outline-none pr-6 ${L==="found"?"border-green-400 bg-green-50":L==="invalid"||L==="not_found"||L==="error"||M.required&&g[`comprador_cnpj_${P}`]?"border-red-400 bg-red-50":"border-gray-200"}`,value:j[M.key]||"",onChange:B=>S(P,M,B.target.value),placeholder:M.placeholder||"00.000.000/0000-00",maxLength:18}),o.jsxs("div",{className:"absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none",children:[L==="loading"&&o.jsxs("svg",{className:"animate-spin h-3.5 w-3.5 text-cobre",viewBox:"0 0 24 24",children:[o.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"}),o.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]}),(L==="found"||L==="valid")&&o.jsx("svg",{className:"h-3.5 w-3.5 text-green-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M5 13l4 4L19 7"})}),(L==="invalid"||L==="not_found"||L==="error")&&o.jsx("svg",{className:"h-3.5 w-3.5 text-red-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})]})]}):o.jsx("input",{className:`w-full px-2 py-1.5 text-xs border rounded focus:ring-1 focus:ring-cobre focus:border-cobre outline-none ${M.required&&g[`comprador_cnpj_${P}`]?"border-red-400 bg-red-50":"border-gray-200"}`,value:j[M.key]||"",onChange:B=>S(P,M,B.target.value),placeholder:M.placeholder||""})},F)}),o.jsx("td",{className:"px-2 py-1",children:m&&n.length>1&&o.jsx("button",{onClick:()=>m(P),className:"text-red-300 hover:text-red-500 text-xl leading-none transition-colors",title:"Remover",children:"×"})})]},P))})]}),u&&(!c||n.length<c)&&o.jsxs("button",{onClick:u,className:"mt-2 text-cobre text-xs font-semibold hover:underline flex items-center gap-1",children:[o.jsx("span",{className:"text-base leading-none",children:"+"})," ",f]})]})}function $u({step:s,totalSteps:n,stepNames:l,onPrev:u,onNext:m,onSubmit:c,loading:f,isReview:g}){return o.jsxs("div",{className:"flex justify-between mt-8 pt-4 border-t border-gray-100",children:[s>0?o.jsx("button",{onClick:u,className:"btn-secondary",children:"Voltar"}):o.jsx("div",{}),s<n-1&&!g&&o.jsx("button",{onClick:m,className:"btn-primary",children:"Próximo"}),s===n-1&&!g&&o.jsx("button",{onClick:()=>c("review"),className:"btn-primary",children:"Revisar Dados"}),g&&o.jsxs("button",{onClick:()=>c("send"),disabled:f,className:"btn-primary flex items-center gap-2",children:[f&&o.jsxs("svg",{className:"animate-spin h-5 w-5",viewBox:"0 0 24 24",children:[o.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"}),o.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]}),f?"Enviando...":"Enviar Solicitação de Cotação"]})]})}function Bu({step:s,steps:n}){const l=Math.round((s+1)/n.length*100);return o.jsxs("div",{className:"mb-6",children:[o.jsxs("div",{className:"flex items-center justify-between mb-4 bg-gradient-to-r from-cobre/10 to-cobre/5 border border-cobre/20 rounded-xl px-4 py-2.5",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4 text-cobre flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),o.jsxs("span",{className:"text-xs text-gray-700",children:["Dados completos geram propostas até ",o.jsx("strong",{className:"text-cobre",children:"30% mais competitivas"})]})]}),o.jsxs("span",{className:"text-xs font-bold text-cobre flex-shrink-0 ml-3",children:[l,"% concluído"]})]}),o.jsxs("div",{className:"relative flex items-start justify-between",children:[o.jsx("div",{className:"absolute top-4 left-0 right-0 h-0.5 bg-gray-200 z-0",style:{marginLeft:`${100/n.length/2}%`,marginRight:`${100/n.length/2}%`},children:o.jsx("div",{className:"h-full bg-gradient-to-r from-cobre to-navy transition-all duration-700 ease-out",style:{width:`${s===0?0:s/(n.length-1)*100}%`}})}),n.map((u,m)=>{const c=m<s,f=m===s;return o.jsxs("div",{className:"relative z-10 flex flex-col items-center",style:{width:`${100/n.length}%`},children:[o.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${c?"bg-cobre border-cobre":f?"bg-navy border-navy ring-4 ring-navy/20":"bg-white border-gray-300"}`,children:c?o.jsx("svg",{className:"w-4 h-4 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M5 13l4 4L19 7"})}):o.jsx("span",{className:`text-xs font-bold ${f?"text-white":"text-gray-400"}`,children:m+1})}),o.jsx("span",{className:`mt-1.5 text-[10px] font-semibold text-center leading-tight hidden sm:block ${c?"text-cobre":f?"text-navy":"text-gray-400"}`,children:u})]},m)})]}),o.jsxs("p",{className:"sm:hidden text-center text-xs font-semibold text-navy mt-3",children:["Etapa ",s+1," de ",n.length," — ",o.jsx("span",{className:"text-cobre",children:n[s]})]})]})}function ng(){const s=["#B87333","#7DD3FC","#4ade80","#f59e0b","#ffffff","#fbbf24","#a78bfa"],n=Array.from({length:90},(l,u)=>{const m=u*360/90*Math.PI/180,c=22+u%7*6,f=Math.cos(m)*c,g=Math.sin(m)*c;return{id:u,color:s[u%s.length],delay:`${u%6*.04}s`,duration:`${5.5+u%5*.5}s`,size:`${7+u%4*2}px`,round:u%4===0,rect:u%5===1,tx:`${f.toFixed(1)}vw`,ty:`${g.toFixed(1)}vh`,tx2:`${(f*.7).toFixed(1)}vw`,ty2:`${(g*.4+55).toFixed(1)}vh`}});return o.jsxs("div",{style:{position:"fixed",inset:0,pointerEvents:"none",overflow:"hidden",zIndex:9999},children:[o.jsx("style",{children:`
        @keyframes confettiBurst {
          0%   { transform: translate(0,0) rotate(0deg) scale(0); opacity: 1; }
          10%  { transform: translate(var(--tx), var(--ty)) rotate(220deg) scale(1); opacity: 1; }
          75%  { opacity: 1; }
          100% { transform: translate(var(--tx2), var(--ty2)) rotate(900deg) scale(0.15); opacity: 0; }
        }
      `}),n.map(l=>o.jsx("div",{style:{position:"absolute",left:"50%",top:"38%",width:l.size,height:l.rect?`${parseInt(l.size)*2}px`:l.size,backgroundColor:l.color,borderRadius:l.round?"50%":"3px","--tx":l.tx,"--ty":l.ty,"--tx2":l.tx2,"--ty2":l.ty2,animation:`confettiBurst ${l.duration} ${l.delay} cubic-bezier(0.22, 0.61, 0.36, 1) forwards`}},l.id))]})}function qu({result:s,onReset:n,tipo:l}){const[u,m]=v.useState(!0);v.useEffect(()=>{const f=setTimeout(()=>m(!1),8e3);return()=>clearTimeout(f)},[]);const c=[{icon:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"}),label:"Análise simultânea",text:"7 seguradoras recebendo seus dados agora — Coface, Atradius, AVLA, Allianz Trade, AIG, CESCE e CHUBB"},{icon:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}),label:"Negociação técnica",text:"Nossa equipe negocia as melhores condições de cobertura, prêmio e serviço para o seu perfil"},{icon:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"}),label:"Comparativo exclusivo",text:"Você recebe o estudo completo com recomendação técnica da Fairfield para a melhor escolha"}];return o.jsxs("div",{className:"max-w-2xl mx-auto px-4 py-10 relative",children:[o.jsx("style",{children:`
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
      `}),u&&o.jsx(ng,{}),o.jsxs("div",{className:"rounded-2xl overflow-hidden shadow-2xl border border-cobre/20",style:{animation:"successEntry 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards"},children:[o.jsxs("div",{className:"bg-gradient-to-br from-navy via-[#0d1f3c] to-[#0A1628] px-6 pt-10 pb-8 text-center relative overflow-hidden",children:[o.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-white/5"}),o.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-40 h-40 rounded-full border border-cobre/10"}),o.jsx("div",{className:"relative inline-flex mb-5",children:o.jsx("div",{className:"w-24 h-24 rounded-full bg-green-400/10 flex items-center justify-center",style:{animation:"ringPulse 2s ease-in-out infinite"},children:o.jsx("div",{className:"w-16 h-16 rounded-full bg-green-400/20 flex items-center justify-center",style:{animation:"checkPop 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.2s both"},children:o.jsx("svg",{className:"w-9 h-9 text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M5 13l4 4L19 7"})})})})}),o.jsx("p",{className:"text-[10px] font-bold text-cobre uppercase tracking-widest mb-2",children:"Solicitação Enviada com Sucesso"}),o.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight",children:"Seu estudo está em análise!"}),o.jsxs("p",{className:"text-white/50 text-sm mb-6",children:["Crédito ",l==="externo"?"Exportação — Valores em US$":"Interno — Operações Nacionais"]}),o.jsxs("div",{className:"inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-xl px-5 py-2.5",children:[o.jsx("svg",{className:"w-5 h-5 text-cobre flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5"})}),o.jsxs("span",{className:"text-sm text-white",children:[o.jsxs("strong",{className:"text-cobre",children:[(s==null?void 0:s.cotacoesGeradas)||7," seguradoras"]})," recebendo seus dados agora"]})]})]}),o.jsxs("div",{className:"bg-white px-6 py-6 space-y-4",children:[o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:c.map((f,g)=>o.jsxs("div",{className:"bg-gray-50 border border-gray-100 rounded-xl p-3 flex flex-col gap-2",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("svg",{className:"w-5 h-5 text-cobre flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.icon}),o.jsx("span",{className:"text-xs font-bold text-navy",children:f.label})]}),o.jsx("p",{className:"text-xs text-gray-500 leading-relaxed",children:f.text})]},g))}),o.jsxs("div",{className:"flex items-center gap-3 bg-cobre/5 border border-cobre/15 rounded-xl px-4 py-3",children:[o.jsx("div",{className:"w-9 h-9 bg-cobre/10 rounded-lg flex items-center justify-center flex-shrink-0",children:o.jsx("svg",{className:"w-5 h-5 text-cobre",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})})}),o.jsxs("div",{children:[o.jsx("p",{className:"text-xs font-bold text-navy",children:"Prazo de resposta"}),o.jsxs("p",{className:"text-sm text-gray-600",children:["Você receberá o comparativo completo em até ",o.jsx("strong",{className:"text-cobre",children:"5 dias úteis"})]})]})]}),o.jsxs("div",{className:"flex items-start gap-2 bg-green-50 border border-green-200 rounded-xl px-4 py-3",children:[o.jsx("svg",{className:"w-4 h-4 text-green-600 mt-0.5 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),o.jsxs("p",{className:"text-sm text-green-700",children:[o.jsx("strong",{children:"Estudo totalmente gratuito."})," Um e-mail de confirmação foi enviado para você."]})]}),o.jsx("button",{onClick:n,className:"btn-primary w-full mt-2",children:"Nova Cotação"})]})]})]})}function Vu({value:s,onChange:n,onResult:l,error:u,label:m="CNPJ"}){const[c,f]=v.useState(!1),[g,x]=v.useState(null),[b,S]=v.useState(null);function j(F){const D=F.replace(/\D/g,"").slice(0,14);return D.length<=2?D:D.length<=5?`${D.slice(0,2)}.${D.slice(2)}`:D.length<=8?`${D.slice(0,2)}.${D.slice(2,5)}.${D.slice(5)}`:D.length<=12?`${D.slice(0,2)}.${D.slice(2,5)}.${D.slice(5,8)}/${D.slice(8)}`:`${D.slice(0,2)}.${D.slice(2,5)}.${D.slice(5,8)}/${D.slice(8,12)}-${D.slice(12)}`}function P(F){const D=F.replace(/\D/g,"");if(D.length!==14||/^(\d)\1{13}$/.test(D))return!1;let L=12,B=D.substring(0,L).split("").map(Number),O=0,z=L-7;for(let Q=L;Q>=1;Q--)O+=B[L-Q]*z--,z<2&&(z=9);let Y=O%11<2?0:11-O%11;if(Y!==parseInt(D.charAt(L)))return!1;L=13,B=D.substring(0,L).split("").map(Number),O=0,z=L-7;for(let Q=L;Q>=1;Q--)O+=B[L-Q]*z--,z<2&&(z=9);return Y=O%11<2?0:11-O%11,Y===parseInt(D.charAt(L))}async function M(F){const D=j(F);n(D),x(null),S(null);const L=D.replace(/\D/g,"");if(L.length===14){if(!P(D)){x("invalid");return}f(!0);try{const B=await Ke(`/api/cnpj/${L}`);B.sucesso?(x("found"),l&&l(B.data)):B.status===429?(x("error"),S("⚠ Muitas consultas. Aguarde alguns segundos e tente novamente.")):B.status===404?(x("not_found"),S("CNPJ não encontrado na Receita Federal")):(x("error"),S("⚠ Não foi possível consultar agora. Continue preenchendo manualmente."))}catch{x("error"),S("⚠ Servidor indisponível. Continue preenchendo manualmente.")}finally{f(!1)}}}return o.jsxs("div",{children:[o.jsxs("label",{className:"label-field",children:[m," *"]}),o.jsxs("div",{className:"relative",children:[o.jsx("input",{className:`input-field pr-12 ${g==="found"?"border-green-500 ring-2 ring-green-200":g==="invalid"||g==="not_found"||g==="error"?"border-red-500 ring-2 ring-red-200":""}`,value:s,onChange:F=>M(F.target.value),placeholder:"00.000.000/0000-00",maxLength:18}),o.jsxs("div",{className:"absolute right-3 top-1/2 -translate-y-1/2",children:[c&&o.jsxs("svg",{className:"animate-spin h-5 w-5 text-cobre",viewBox:"0 0 24 24",children:[o.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"}),o.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]}),g==="found"&&o.jsx("svg",{className:"h-5 w-5 text-green-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),(g==="not_found"||g==="invalid"||g==="error")&&o.jsx("svg",{className:"h-5 w-5 text-red-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})]})]}),c&&o.jsx("p",{className:"text-xs text-cobre mt-1",children:"Consultando Receita Federal..."}),g==="found"&&o.jsx("p",{className:"text-xs text-green-600 mt-1",children:"✓ Empresa verificada na Receita Federal"}),g==="invalid"&&o.jsx("p",{className:"text-xs text-red-500 mt-1",children:"CNPJ inválido — verifique os números"}),(g==="not_found"||g==="error")&&b&&o.jsx("p",{className:`text-xs mt-1 ${g==="error"?"text-amber-600":"text-red-500"}`,children:b}),u&&o.jsx("p",{className:"error-msg",children:u})]})}function Un(s){const n=s.replace(/\D/g,"").slice(0,11);return n.length<=2?`(${n}`:n.length<=7?`(${n.slice(0,2)}) ${n.slice(2)}`:`(${n.slice(0,2)}) ${n.slice(2,7)}-${n.slice(7)}`}function su({onComplete:s}){const{login:n,generateCode:l,verifyCode:u}=ma(),m=Wa(),[c,f]=v.useState("password"),[g,x]=v.useState("form"),[b,S]=v.useState(!1),[j,P]=v.useState(!1),[M,F]=v.useState(!1),[D,L]=v.useState(""),[B,O]=v.useState(""),[z,Y]=v.useState({nome:"",telefone:"",email:"",empresa:""}),[Q,ne]=v.useState(""),[$,me]=v.useState({}),[xe,pe]=v.useState(null);function H(W,Z){Y(de=>({...de,[W]:Z})),me(de=>{const le={...de};return delete le[W],le})}function X(){const W={};return z.nome.trim()||(W.nome="Informe seu nome"),z.empresa.trim()||(W.empresa="Informe a empresa"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(z.email)||(W.email="E-mail invalido"),z.telefone.replace(/\D/g,"").length<10&&(W.telefone="Telefone invalido"),me(W),Object.keys(W).length===0}async function K(W){W.preventDefault();const Z={};if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(D)||(Z.email="E-mail invalido"),B||(Z.password="Informe a senha"),me(Z),!(Object.keys(Z).length>0)){S(!0);try{await n(D,B),je.success("Login realizado com sucesso!"),s?s():m("/meu-painel")}catch(de){je.error(de.message||"Erro ao fazer login")}finally{S(!1)}}}async function se(W){if(W.preventDefault(),!!X()){S(!0);try{const Z=await l(z.email,z.nome,z.empresa,z.telefone);Z.devMode?(pe({code:Z.devCode,preview:Z.devPreview}),je.success("Modo dev — codigo visivel abaixo")):(pe(null),je.success("Codigo enviado! Verifique seu e-mail.")),x("verify")}catch(Z){je.error(Z.message||"Erro ao enviar codigo.")}finally{S(!1)}}}async function ge(W){if(W.preventDefault(),Q.length!==6){je.error("Digite o codigo de 6 digitos");return}S(!0);try{(await u(z.email,Q)).success?(je.success("Verificado com sucesso!"),s?s():m("/meu-painel")):je.error("Codigo invalido ou expirado.")}catch{je.error("Erro ao verificar codigo.")}finally{S(!1)}}async function h(){P(!0);try{const W=await l(z.email,z.nome,z.empresa,z.telefone);W.devMode&&pe({code:W.devCode,preview:W.devPreview}),je.success("Novo codigo enviado!")}catch(W){je.error(W.message||"Erro ao reenviar codigo.")}finally{P(!1)}}const C="border-rose-400/50 ring-2 ring-rose-400/20",E=o.jsxs("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}),T=o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"})});function U(){return o.jsxs("form",{onSubmit:K,className:"space-y-4",children:[o.jsxs("h3",{className:"text-base font-bold text-white border-b border-white/[0.06] pb-3 flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4 text-sentinel",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),"Entrar na sua conta"]}),o.jsxs("div",{children:[o.jsx("label",{className:"label-field",children:"Email *"}),o.jsx("input",{type:"email",className:`input-field ${$.email?C:""}`,value:D,onChange:W=>{L(W.target.value),me(Z=>{const de={...Z};return delete de.email,de})},placeholder:"seu@empresa.com.br"}),$.email&&o.jsx("p",{className:"error-msg",children:$.email})]}),o.jsxs("div",{children:[o.jsx("label",{className:"label-field",children:"Senha *"}),o.jsxs("div",{className:"relative",children:[o.jsx("input",{type:M?"text":"password",className:`input-field pr-12 ${$.password?C:""}`,value:B,onChange:W=>{O(W.target.value),me(Z=>{const de={...Z};return delete de.password,de})},placeholder:"Sua senha"}),o.jsx("button",{type:"button",onClick:()=>F(!M),className:"absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors",children:M?T:E})]}),$.password&&o.jsx("p",{className:"error-msg",children:$.password})]}),o.jsxs("button",{type:"submit",disabled:b,className:"btn-primary w-full flex items-center justify-center gap-2",children:[b&&o.jsxs("svg",{className:"animate-spin h-5 w-5",viewBox:"0 0 24 24",children:[o.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"}),o.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]}),b?"Entrando...":"Entrar"]}),o.jsxs("div",{className:"flex flex-col items-center gap-2 pt-2",children:[o.jsx("button",{type:"button",onClick:()=>{f("otp"),me({})},className:"text-sm text-sentinel/70 hover:text-sentinel hover:underline transition-colors",children:"Entrar com codigo de verificacao"}),o.jsxs(Xe,{to:"/register",className:"text-sm text-white/40 hover:text-white/60 transition-colors",children:["Nao tem conta? ",o.jsx("span",{className:"text-sentinel font-semibold",children:"Cadastre-se"})]})]})]})}function N(){return o.jsxs("form",{onSubmit:se,className:"space-y-4",children:[o.jsxs("h3",{className:"text-base font-bold text-white border-b border-white/[0.06] pb-3 flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4 text-sentinel",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),"Identificacao"]}),o.jsxs("div",{children:[o.jsx("label",{className:"label-field",children:"Nome Completo *"}),o.jsx("input",{className:`input-field ${$.nome?C:""}`,value:z.nome,onChange:W=>H("nome",W.target.value),placeholder:"Seu nome completo"}),$.nome&&o.jsx("p",{className:"error-msg",children:$.nome})]}),o.jsxs("div",{children:[o.jsx("label",{className:"label-field",children:"Nome da Empresa *"}),o.jsx("input",{className:`input-field ${$.empresa?C:""}`,value:z.empresa,onChange:W=>H("empresa",W.target.value),placeholder:"Razao social ou nome fantasia"}),$.empresa&&o.jsx("p",{className:"error-msg",children:$.empresa})]}),o.jsxs("div",{children:[o.jsx("label",{className:"label-field",children:"E-mail Corporativo *"}),o.jsx("input",{type:"email",className:`input-field ${$.email?C:""}`,value:z.email,onChange:W=>H("email",W.target.value),placeholder:"seu@empresa.com.br"}),$.email&&o.jsx("p",{className:"error-msg",children:$.email})]}),o.jsxs("div",{children:[o.jsx("label",{className:"label-field",children:"Telefone *"}),o.jsx("input",{className:`input-field ${$.telefone?C:""}`,value:z.telefone,onChange:W=>H("telefone",Un(W.target.value)),placeholder:"(00) 00000-0000",maxLength:15}),$.telefone&&o.jsx("p",{className:"error-msg",children:$.telefone})]}),o.jsxs("button",{type:"submit",disabled:b,className:"btn-primary w-full flex items-center justify-center gap-2",children:[b&&o.jsxs("svg",{className:"animate-spin h-5 w-5",viewBox:"0 0 24 24",children:[o.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"}),o.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]}),b?"Enviando codigo...":"Receber Codigo de Acesso"]}),o.jsxs("div",{className:"flex flex-col items-center gap-2 pt-2",children:[o.jsx("button",{type:"button",onClick:()=>{f("password"),me({})},className:"text-sm text-sentinel/70 hover:text-sentinel hover:underline transition-colors",children:"Entrar com email e senha"}),o.jsxs(Xe,{to:"/register",className:"text-sm text-white/40 hover:text-white/60 transition-colors",children:["Nao tem conta? ",o.jsx("span",{className:"text-sentinel font-semibold",children:"Cadastre-se"})]})]}),o.jsx("p",{className:"text-[10px] text-white/20 text-center mt-3",children:"Enviaremos um codigo de verificacao para o e-mail informado. Seus dados sao protegidos pela LGPD."})]})}function _(){return o.jsxs("form",{onSubmit:ge,className:"space-y-5",children:[o.jsxs("div",{className:"text-center",children:[o.jsx("div",{className:"w-14 h-14 rounded-2xl bg-sentinel/10 border border-sentinel/20 flex items-center justify-center mx-auto mb-4",children:o.jsx("svg",{className:"w-7 h-7 text-sentinel",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),o.jsx("h3",{className:"text-lg font-bold text-white",children:"Verifique seu E-mail"}),o.jsxs("p",{className:"text-sm text-white/35 mt-1",children:["Enviamos um codigo de 6 digitos para ",o.jsx("strong",{className:"text-sentinel",children:z.email})]})]}),xe?o.jsxs("div",{className:"rounded-xl overflow-hidden border border-amber-500/30",children:[o.jsx("div",{className:"bg-amber-500/15 px-4 py-2 flex items-center gap-2",children:o.jsx("span",{className:"text-amber-400 font-bold text-xs",children:"MODO DESENVOLVIMENTO"})}),o.jsxs("div",{className:"bg-amber-500/5 px-4 py-3",children:[o.jsx("p",{className:"text-xs text-amber-300/60 mb-2",children:"SMTP nao configurado — codigo de teste:"}),o.jsx("div",{className:"bg-navy-dark border border-amber-500/20 rounded-lg p-3 text-center",children:o.jsx("p",{className:"text-3xl font-mono font-bold text-amber-400 tracking-[0.4em]",children:xe.code})}),xe.preview&&o.jsx("a",{href:xe.preview,target:"_blank",rel:"noopener noreferrer",className:"block text-center text-xs text-sentinel underline mt-2",children:"Ver email no Ethereal"})]})]}):o.jsxs("div",{className:"rounded-xl bg-accent-emerald/10 border border-accent-emerald/20 px-4 py-3",children:[o.jsxs("p",{className:"text-sm text-accent-emerald font-semibold",children:["Codigo enviado para ",o.jsx("strong",{children:z.email})]}),o.jsx("p",{className:"text-xs text-white/25 mt-1",children:"Verifique sua caixa de entrada. Valido por 15 minutos."})]}),o.jsxs("div",{children:[o.jsx("label",{className:"label-field text-center block",children:"Codigo de Verificacao"}),o.jsx("input",{className:"input-field text-center text-2xl tracking-[0.5em] font-mono font-bold",value:Q,onChange:W=>ne(W.target.value.replace(/\D/g,"").slice(0,6)),placeholder:"000000",maxLength:6,autoFocus:!0})]}),o.jsxs("button",{type:"submit",disabled:b,className:"btn-primary w-full flex items-center justify-center gap-2",children:[b&&o.jsxs("svg",{className:"animate-spin h-5 w-5",viewBox:"0 0 24 24",children:[o.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"}),o.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]}),b?"Verificando...":"Verificar e Acessar"]}),o.jsxs("div",{className:"flex items-center justify-between text-xs",children:[o.jsx("button",{type:"button",onClick:h,disabled:j,className:"text-sentinel hover:underline font-medium disabled:opacity-50",children:j?"Reenviando...":"Reenviar codigo"}),o.jsx("button",{type:"button",onClick:()=>{x("form"),ne("")},className:"text-white/25 hover:text-white/50",children:"Voltar"})]})]})}function re(){return c==="password"?U():g==="verify"?_():N()}return o.jsxs("div",{className:"max-w-lg mx-auto px-4 py-10 sm:py-16 animate-fadeIn",children:[o.jsxs("div",{className:"text-center mb-8 flex flex-col items-center",children:[o.jsx("div",{className:"mb-4",children:o.jsx(xo,{size:72})}),o.jsx("h1",{className:"text-2xl sm:text-3xl font-black text-sentinel tracking-tight",children:"SENTINEL"}),o.jsx("p",{className:"text-white/40 text-sm mt-2",children:c==="password"?"Acesse sua conta de Seguro de Credito":"Preencha seus dados para iniciar a cotacao de Seguro de Credito"})]}),o.jsx("div",{className:"card-glass",children:re()}),o.jsx("div",{className:"mt-6 text-center",children:o.jsxs("div",{className:"inline-flex items-center gap-2 text-xs text-white/20",children:[o.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),"Ambiente seguro — Fairfield SUSEP 20.2036457.1"]})})]})}function lg(s){const n=s.replace(/\D/g,"").slice(0,11);return n.length<=2?n.length?`(${n}`:"":n.length<=6?`(${n.slice(0,2)}) ${n.slice(2)}`:n.length<=10?`(${n.slice(0,2)}) ${n.slice(2,6)}-${n.slice(6)}`:`(${n.slice(0,2)}) ${n.slice(2,7)}-${n.slice(7)}`}function dg(){const{register:s}=ma(),n=Wa(),[l,u]=v.useState(!1),[m,c]=v.useState(!1),[f,g]=v.useState(!1),[x,b]=v.useState({nome:"",email:"",empresa:"",cnpj:"",telefone:"",senha:"",confirmarSenha:"",termos:!1}),[S,j]=v.useState({});function P(O,z){b(Y=>({...Y,[O]:z})),j(Y=>{const Q={...Y};return delete Q[O],Q})}function M(){const O={};return x.nome.trim()||(O.nome="Informe seu nome completo"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x.email)||(O.email="E-mail invalido"),x.empresa.trim()||(O.empresa="Informe a empresa"),x.cnpj.replace(/\D/g,"").length!==14&&(O.cnpj="CNPJ invalido"),x.telefone.replace(/\D/g,"").length<10&&(O.telefone="Telefone invalido"),x.senha.length<6&&(O.senha="Minimo 6 caracteres"),x.senha!==x.confirmarSenha&&(O.confirmarSenha="Senhas nao conferem"),x.termos||(O.termos="Aceite os termos para continuar"),j(O),Object.keys(O).length===0}async function F(O){if(O.preventDefault(),!!M()){u(!0);try{await s({nome:x.nome.trim(),email:x.email.trim().toLowerCase(),empresa:x.empresa.trim(),cnpj:x.cnpj.replace(/\D/g,""),telefone:x.telefone,password:x.senha}),je.success("Conta criada com sucesso!"),n("/meu-painel")}catch(z){je.error(z.message||"Erro ao criar conta")}finally{u(!1)}}}const D=o.jsxs("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}),L=o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"})}),B="border-rose-400/50 ring-2 ring-rose-400/20";return o.jsxs("div",{className:"max-w-lg mx-auto px-4 py-10 sm:py-14 animate-fadeIn",children:[o.jsxs("div",{className:"text-center mb-8 flex flex-col items-center",children:[o.jsx("div",{className:"mb-4",children:o.jsx(xo,{size:72})}),o.jsx("h1",{className:"text-2xl sm:text-3xl font-black text-sentinel tracking-tight",children:"SENTINEL"}),o.jsx("p",{className:"text-white/40 text-sm mt-2",children:"Crie sua conta para acessar a plataforma de Seguro de Credito"})]}),o.jsx("div",{className:"card-glass",children:o.jsxs("form",{onSubmit:F,className:"space-y-4",children:[o.jsxs("h3",{className:"text-base font-bold text-white border-b border-white/[0.06] pb-3 flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4 text-sentinel",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"})}),"Criar Conta"]}),o.jsxs("div",{children:[o.jsx("label",{className:"label-field",children:"Nome Completo *"}),o.jsx("input",{className:`input-field ${S.nome?B:""}`,value:x.nome,onChange:O=>P("nome",O.target.value),placeholder:"Seu nome completo"}),S.nome&&o.jsx("p",{className:"error-msg",children:S.nome})]}),o.jsxs("div",{children:[o.jsx("label",{className:"label-field",children:"Email Corporativo *"}),o.jsx("input",{type:"email",className:`input-field ${S.email?B:""}`,value:x.email,onChange:O=>P("email",O.target.value),placeholder:"seu@empresa.com.br"}),S.email&&o.jsx("p",{className:"error-msg",children:S.email})]}),o.jsxs("div",{children:[o.jsx("label",{className:"label-field",children:"Empresa / Razao Social *"}),o.jsx("input",{className:`input-field ${S.empresa?B:""}`,value:x.empresa,onChange:O=>P("empresa",O.target.value),placeholder:"Razao social ou nome fantasia"}),S.empresa&&o.jsx("p",{className:"error-msg",children:S.empresa})]}),o.jsxs("div",{children:[o.jsx("label",{className:"label-field",children:"CNPJ *"}),o.jsx("input",{className:`input-field ${S.cnpj?B:""}`,value:x.cnpj,onChange:O=>P("cnpj",js(O.target.value)),placeholder:"00.000.000/0000-00",maxLength:18}),S.cnpj&&o.jsx("p",{className:"error-msg",children:S.cnpj})]}),o.jsxs("div",{children:[o.jsx("label",{className:"label-field",children:"Telefone *"}),o.jsx("input",{className:`input-field ${S.telefone?B:""}`,value:x.telefone,onChange:O=>P("telefone",lg(O.target.value)),placeholder:"(00) 00000-0000",maxLength:15}),S.telefone&&o.jsx("p",{className:"error-msg",children:S.telefone})]}),o.jsxs("div",{children:[o.jsx("label",{className:"label-field",children:"Senha *"}),o.jsxs("div",{className:"relative",children:[o.jsx("input",{type:m?"text":"password",className:`input-field pr-12 ${S.senha?B:""}`,value:x.senha,onChange:O=>P("senha",O.target.value),placeholder:"Minimo 6 caracteres"}),o.jsx("button",{type:"button",onClick:()=>c(!m),className:"absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors",children:m?L:D})]}),S.senha&&o.jsx("p",{className:"error-msg",children:S.senha})]}),o.jsxs("div",{children:[o.jsx("label",{className:"label-field",children:"Confirmar Senha *"}),o.jsxs("div",{className:"relative",children:[o.jsx("input",{type:f?"text":"password",className:`input-field pr-12 ${S.confirmarSenha?B:""}`,value:x.confirmarSenha,onChange:O=>P("confirmarSenha",O.target.value),placeholder:"Repita a senha"}),o.jsx("button",{type:"button",onClick:()=>g(!f),className:"absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors",children:f?L:D})]}),S.confirmarSenha&&o.jsx("p",{className:"error-msg",children:S.confirmarSenha})]}),o.jsxs("div",{children:[o.jsxs("label",{className:`flex items-start gap-3 cursor-pointer group ${S.termos,""}`,children:[o.jsx("input",{type:"checkbox",checked:x.termos,onChange:O=>P("termos",O.target.checked),className:"mt-0.5 w-4 h-4 rounded border-white/20 bg-white/5 text-sentinel focus:ring-sentinel/40 accent-sentinel"}),o.jsxs("span",{className:"text-sm text-white/50 group-hover:text-white/70 transition-colors",children:["Li e aceito os ",o.jsx("span",{className:"text-sentinel underline",children:"termos de uso"})," e a ",o.jsx("span",{className:"text-sentinel underline",children:"politica de privacidade"})]})]}),S.termos&&o.jsx("p",{className:"error-msg",children:S.termos})]}),o.jsxs("button",{type:"submit",disabled:l,className:"btn-primary w-full flex items-center justify-center gap-2",children:[l&&o.jsxs("svg",{className:"animate-spin h-5 w-5",viewBox:"0 0 24 24",children:[o.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"}),o.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]}),l?"Criando conta...":"Criar Conta"]}),o.jsxs("p",{className:"text-center text-sm text-white/40 mt-4",children:["Ja tem conta?"," ",o.jsx(Xe,{to:"/login",className:"text-sentinel font-semibold hover:underline",children:"Faca login"})]})]})}),o.jsx("div",{className:"mt-6 text-center",children:o.jsxs("div",{className:"inline-flex items-center gap-2 text-xs text-white/20",children:[o.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),"Ambiente seguro — Fairfield SUSEP 20.2036457.1"]})})]})}const cg=[{title:"TERMO DE CONFIDENCIALIDADE E ACEITE EXPRESSO",content:`A FAIRFIELD PROTECAO E INTELIGENCIA FINANCEIRA LTDA, inscrita no CNPJ sob o n. 13.381.310/0001-45, com sede na cidade de Blumenau/SC, devidamente registrada na SUSEP sob o n. 20.2036457.1, doravante denominada "Fairfield", apresenta ao solicitante, doravante denominado "Cliente", o presente Termo de Confidencialidade como condicao para o inicio do processo de estudo de mercado e cotacao de Seguro de Credito por meio da plataforma SENTINEL.

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

8.6 Para dirimir quaisquer controversias decorrentes deste Termo, fica eleito o foro da Comarca de Blumenau/SC, com renancia a qualquer outro, por mais privilegiado que seja.`}];function ug(){var x;const{user:s,acceptNda:n}=ma(),[l,u]=v.useState(!1),m=v.useRef(null),[c,f]=v.useState(!1);v.useEffect(()=>{const b=m.current;if(!b)return;function S(){const{scrollTop:j,scrollHeight:P,clientHeight:M}=b;j+M>=P-30&&u(!0)}return b.addEventListener("scroll",S),()=>b.removeEventListener("scroll",S)},[]);function g(){f(!0),setTimeout(()=>{n()},800)}return o.jsxs("div",{className:"max-w-3xl mx-auto px-3 sm:px-4 py-6 sm:py-10 animate-fadeIn",children:[o.jsxs("div",{className:"text-center mb-6",children:[o.jsxs("div",{className:"flex items-center justify-center gap-3 mb-3",children:[o.jsx(xo,{size:48}),o.jsxs("div",{className:"text-left",children:[o.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-navy",children:"Termo de Confidencialidade"}),o.jsx("p",{className:"text-xs text-navy/40",children:"SENTINEL by Fairfield"})]})]}),o.jsx("p",{className:"text-sm text-navy/50 max-w-xl mx-auto",children:"Antes de prosseguir, leia integralmente o Termo de Confidencialidade abaixo. Ao finalizar a leitura, o botao de aceite sera habilitado."})]}),o.jsx("div",{className:"flex items-center justify-center mb-4",children:o.jsxs("div",{className:"inline-flex items-center gap-2 bg-navy/[0.04] border border-navy/[0.1] rounded-full px-4 py-2 text-xs",children:[o.jsx("div",{className:"h-5 w-5 rounded-full bg-sentinel/15 border border-sentinel/25 flex items-center justify-center",children:o.jsx("span",{className:"text-[9px] font-bold text-sentinel",children:(x=s==null?void 0:s.nome)==null?void 0:x.charAt(0)})}),o.jsx("span",{className:"text-navy/70 font-medium",children:s==null?void 0:s.nome}),o.jsx("span",{className:"text-navy/15",children:"|"}),o.jsx("span",{className:"text-navy/40",children:s==null?void 0:s.empresa})]})}),o.jsxs("div",{className:"rounded-2xl border border-navy/[0.08] bg-white shadow-lg shadow-navy/5 p-0 overflow-hidden",children:[o.jsxs("div",{className:"bg-navy/[0.03] px-4 sm:px-6 py-3 flex items-center justify-between border-b border-navy/[0.08]",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4 text-sentinel",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),o.jsx("span",{className:"text-navy/50 text-xs font-medium",children:"Termo de Confidencialidade — Fairfield"})]}),l?o.jsxs("span",{className:"text-accent-emerald text-[10px] font-bold flex items-center gap-1",children:[o.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),"Leitura completa"]}):o.jsxs("span",{className:"text-cobre text-[10px] font-bold flex items-center gap-1 animate-pulse",children:[o.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})}),"Role ate o final"]})]}),o.jsx("div",{className:"h-[2px] bg-navy/[0.04]",children:o.jsx(mg,{scrollRef:m})}),o.jsxs("div",{ref:m,className:"max-h-[55vh] sm:max-h-[60vh] overflow-y-auto px-4 sm:px-8 py-5 sm:py-6 space-y-5 text-sm leading-relaxed text-navy/60 scroll-smooth",children:[cg.map((b,S)=>o.jsxs("div",{children:[o.jsx("h3",{className:`font-bold ${S===0?"text-lg text-navy text-center mb-4":"text-sentinel-dark text-sm mb-2"}`,children:b.title}),b.content.split(`
`).map((j,P)=>o.jsx("p",{className:`${j.startsWith("(")?"ml-4":""} mb-2 text-[13px] sm:text-sm text-navy/50`,children:j},P))]},S)),o.jsxs("div",{className:"border-t border-navy/[0.08] pt-4 mt-6",children:[o.jsxs("p",{className:"text-[11px] text-navy/30 text-center",children:[o.jsx("strong",{className:"text-navy/50",children:"Responsavel:"})," Fairfield Protecao e Inteligencia Financeira Ltda — CNPJ 13.381.310/0001-45"]}),o.jsxs("p",{className:"text-[11px] text-navy/30 text-center mt-1",children:[o.jsx("strong",{className:"text-navy/50",children:"Vigencia:"})," 90 dias · ",o.jsx("strong",{className:"text-navy/50",children:"Sigilo:"})," 2 anos · SUSEP 20.2036457.1"]})]}),o.jsx("div",{className:"text-center py-4",children:o.jsxs("div",{className:"inline-flex items-center gap-2 bg-accent-emerald/10 border border-accent-emerald/20 rounded-full px-4 py-2",children:[o.jsx("svg",{className:"w-3.5 h-3.5 text-accent-emerald",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),o.jsx("span",{className:"text-[11px] text-accent-emerald font-medium",children:"Fim do documento"})]})})]})]}),o.jsx("div",{className:"mt-5 sm:mt-6",children:l?o.jsxs("div",{className:"animate-fadeIn",children:[o.jsx("div",{className:"rounded-xl bg-accent-emerald/10 border border-accent-emerald/20 p-4 mb-4",children:o.jsxs("div",{className:"flex items-start gap-3",children:[o.jsx("svg",{className:"w-5 h-5 text-accent-emerald flex-shrink-0 mt-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),o.jsxs("div",{children:[o.jsx("p",{className:"text-sm text-accent-emerald font-medium",children:'Ao clicar em "De Acordo", voce declara que leu e compreendeu este Termo e autoriza a Fairfield a utilizar suas informacoes para o estudo de mercado.'}),o.jsx("p",{className:"text-[11px] text-navy/30 mt-1",children:"Aceite eletronico registrado com data, hora e identificacao."})]})]})}),o.jsx("button",{onClick:g,disabled:c,className:"w-full bg-gradient-to-r from-accent-emerald to-emerald-500 text-navy-dark px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-accent-emerald/15 hover:shadow-xl hover:shadow-accent-emerald/25 hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50",children:c?o.jsxs(o.Fragment,{children:[o.jsxs("svg",{className:"animate-spin h-6 w-6",viewBox:"0 0 24 24",children:[o.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"}),o.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]}),"Registrando aceitacao..."]}):o.jsxs(o.Fragment,{children:[o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),"De Acordo — Aceito os Termos"]})})]}):o.jsxs("div",{className:"text-center",children:[o.jsx("button",{disabled:!0,className:"w-full bg-navy/[0.04] text-navy/25 px-8 py-4 rounded-xl font-bold text-lg cursor-not-allowed border border-navy/[0.08]",children:o.jsxs("span",{className:"flex items-center justify-center gap-2",children:[o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),"Leia o documento completo para continuar"]})}),o.jsx("p",{className:"text-[11px] text-navy/30 mt-2",children:"Role até o final do documento para habilitar o aceite"})]})})]})}function mg({scrollRef:s}){const[n,l]=v.useState(0);return v.useEffect(()=>{const u=s.current;if(!u)return;function m(){const{scrollTop:c,scrollHeight:f,clientHeight:g}=u;l(Math.min(100,c/(f-g)*100))}return u.addEventListener("scroll",m),()=>u.removeEventListener("scroll",m)},[s]),o.jsx("div",{className:"h-full bg-gradient-to-r from-sentinel to-accent-emerald transition-all duration-150",style:{width:`${n}%`}})}const pg={0:{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"})}),title:"Dados da empresa: a base de tudo",text:"As seguradoras constroem o perfil de risco a partir dos dados cadastrais da sua empresa. Quanto mais precisas e completas as informações, mais confiante a seguradora fica para oferecer condições competitivas.",insight:"Empresas que preenchem todos os campos recebem cotações até 30% mais competitivas do que perfis incompletos.",funFact:"O Seguro de Crédito protege contra inadimplência — se seu comprador não pagar, a seguradora cobre até 90% do valor da perda.",importance:"Setor de atividade e UF da empresa influenciam diretamente o apetite de risco de cada seguradora."},1:{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),title:"Histórico de faturamento: a história que convence",text:"Seu histórico de vendas e perdas revela como sua empresa gerencia riscos comerciais. Uma trajetória de crescimento com sinistralidade controlada é o perfil ideal para obter prêmios mais baixos e franquias menores.",insight:"O faturamento desejado para o seguro define a base de cálculo do prêmio — informe o mais próximo da realidade para evitar sub ou super cobertura.",funFact:"Empresas com sinistralidade abaixo de 3% do faturamento costumam ter descontos progressivos na renovação da apólice.",importance:"Preencher os 3 anos de histórico é fundamental — seguradoras que analisam séries históricas oferecem condições 20% melhores."},2:{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})}),title:"Carteira de recebíveis: o raio-X do seu risco",text:"A distribuição da carteira por faixa de valor revela a concentração de risco. Uma carteira pulverizada — muitos clientes em faixas menores — é vista pelas seguradoras como mais segura e resulta em prêmios mais baixos.",insight:"Preencha todas as faixas com valores reais, mesmo que pequenos. Dados incompletos levam a sub-cotação ou propostas mais conservadoras.",funFact:"Recebíveis são o 2º maior ativo da maioria das empresas brasileiras, depois de imóveis — e o menos protegido.",importance:"A concentração em poucos grandes clientes pode aumentar o prêmio em até 40%. Mostrar diversificação é estratégico."},3:{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),title:"Transparência nas perdas: um ativo, não um passivo",text:"Declarar perdas passadas não prejudica sua cotação — ao contrário. Omitir informações pode gerar problemas graves na hora do sinistro, inclusive recusa de pagamento. A seguradora avalia o padrão de comportamento, não eventos isolados.",insight:'Mesmo sem perdas nos últimos 3 anos, preencha a seção — "zero perdas" é uma informação extremamente valiosa que melhora seu perfil.',funFact:"No Brasil, 60% das empresas já tiveram pelo menos uma perda significativa por inadimplência nos últimos 5 anos.",importance:"Seguradoras que identificam omissões na fase de subscrição podem invalidar a cobertura no momento do sinistro."},4:{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),title:"Atrasos: transparência gera confiança",text:"Atrasos curtos e pontuais são absolutamente normais no mercado. O que preocupa seguradoras são atrasos longos e recorrentes. Detalhar os vencidos acima de 180 dias demonstra maturidade na gestão e profissionalismo.",insight:"Títulos vencidos acima de 180 dias podem ser excluídos da cobertura desde o início — declarar agora evita surpresas na apólice.",funFact:"O prazo médio de pagamento no Brasil é de 45 dias, um dos mais longos da América Latina — tornando o seguro ainda mais relevante.",importance:"Detalhamento preciso dos atrasos permite que a seguradora construa uma cobertura sob medida, sem exclusões desnecessárias."},5:{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"})}),title:"Último passo — seus compradores definem o custo final",text:"Cada seguradora possui bases globais de análise de crédito para verificar a saúde financeira dos seus compradores. Uma amostra diversificada — grandes, médios e pequenos clientes — permite limites mais generosos e prêmios mais precisos.",insight:"Informe pelo menos 10 compradores para análise representativa. Quanto mais completo, mais competitiva será a cotação.",funFact:"Após o envio, o SENTINEL consulta simultaneamente Coface, Atradius, AVLA, Allianz Trade, AIG, CESCE e CHUBB — sem custo para você.",importance:"O CNPJ de cada comprador é obrigatório — ele permite a análise de crédito e define o limite aprovado para cada cliente."}},fg={0:{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),title:"Exportar com segurança: dados que abrem mercados",text:"O seguro de crédito à exportação protege contra riscos políticos e comerciais nos países de destino. Os dados da sua empresa são a base para uma cotação precisa e para ampliar seu acesso a mercados internacionais com segurança.",insight:"O número de anos exportando e os mercados atendidos são fatores decisivos para as seguradoras internacionais.",funFact:"Mais de 80% dos exportadores europeus utilizam seguro de crédito. No Brasil, apenas 15% — uma oportunidade enorme.",importance:"Perfis exportadores bem documentados recebem propostas com cobertura de até 95% do valor da exportação."},1:{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),title:"Faturamento em dólar: a régua das seguradoras globais",text:"O histórico de faturamento em US$ permite que as seguradoras internacionais avaliem seu porte exportador e consistência. Volume estável ou crescente resulta em condições mais favoráveis e prêmios menores.",insight:"O prazo de venda impacta diretamente o prêmio — prazos mais longos significam mais risco, mas também podem ser negociados com cobertura específica.",funFact:"Exportadores com seguro conseguem negociar prazos maiores com importadores, aumentando o volume de vendas em até 20%.",importance:"Informe o faturamento dos últimos 3 anos em US$ — séries históricas completas aumentam a confiança da seguradora no perfil."},2:{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"})}),title:"Destinos exportados: cada mercado tem seu risco",text:"Cada região do mundo tem um perfil de risco diferente avaliado pelas seguradoras. Europa e América do Norte são mercados estáveis, enquanto África e América Central podem ter prêmios maiores ou coberturas específicas.",insight:"Distribuir percentuais precisos por região permite uma cobertura customizada — regiões em branco são tratadas como risco desconhecido.",funFact:"Risco político — guerras, embargos, moratórias — é coberto exclusivamente pelo seguro de crédito à exportação.",importance:"Concentração em 1 ou 2 países pode gerar sublimites de cobertura. Diversificação geográfica melhora os termos."},3:{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})}),title:"Carteira internacional: diversificação é proteção",text:"Uma carteira bem distribuída entre vários importadores e países reduz o risco de concentração, tornando sua apólice mais acessível. As seguradoras valorizam muito essa diversificação geográfica e por cliente.",insight:"Preencha os valores em US$ em todas as faixas disponíveis — a seguradora precisa ver o tamanho real de cada exposição.",funFact:"Empresas com mais de 20 importadores ativos em 3 ou mais países costumam obter os melhores termos de apólice disponíveis no mercado.",importance:"Deixar faixas em branco faz a seguradora assumir o pior caso — preencher completo garante uma avaliação justa."},4:{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),title:"Perdas internacionais: recuperar no exterior é caro",text:"Recuperar valores no exterior é complexo, caro e demorado. As seguradoras analisam seu histórico para entender o nível de exposição real. Declarar perdas passadas é sinal de maturidade e transparência.",insight:"Informe o país de cada perda — perdas em mercados desenvolvidos preocupam muito menos do que em mercados emergentes.",funFact:"O custo médio de cobrança internacional pode chegar a 40% do valor da dívida — o seguro elimina completamente esse risco.",importance:"Omitir perdas internacionais pode resultar em exclusão de cobertura para países ou clientes específicos."},5:{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),title:"Vencidos acima de 180 dias: transparência total",text:"No comércio exterior, dívidas acima de 180 dias são consideradas de difícil recuperação. Declarar esses valores demonstra transparência e profissionalismo — e permite que a apólice seja estruturada sem exclusões surpresa.",insight:"Mesmo sem vencidos, preencha com zero — a informação confirma uma carteira saudável e acelera a aprovação.",funFact:"A média mundial de inadimplência no comércio exterior é de 2% a 3% do faturamento exportado — proteger-se é mais barato do que recuperar.",importance:"Vencidos não declarados descobertos na sinistro podem inviabilizar o pagamento da indenização."},6:{icon:o.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"})}),title:"Último passo — seus importadores definem o custo",text:"As seguradoras possuem bases de dados globais para verificar a saúde financeira dos seus importadores. O endereço completo e o código fiscal (Tax ID) são essenciais para identificação correta e aprovação de limites.",insight:"Inclua o Tax ID (código fiscal) e o endereço completo — isso acelera a análise e melhora significativamente as condições oferecidas.",funFact:"Após o envio, o SENTINEL consulta simultaneamente Coface, Atradius, AVLA, Allianz Trade, AIG, CESCE e CHUBB — sem custo para você.",importance:"Uma amostra diversificada (grandes, médios e pequenos importadores) resulta em limites mais generosos e prêmios mais precisos."}};function Uu({tip:s,stepIndex:n,totalSteps:l}){return o.jsxs("div",{className:"mb-5 rounded-xl border border-cobre/20 overflow-hidden shadow-sm",children:[o.jsxs("div",{className:"bg-gradient-to-r from-navy to-[#0d1f3c] px-4 sm:px-5 py-3 flex items-center gap-3",children:[o.jsx("div",{className:"text-cobre bg-cobre/20 rounded-lg p-1.5 flex-shrink-0",children:s.icon}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsx("p",{className:"text-[10px] font-bold text-cobre uppercase tracking-widest",children:"SENTINEL — Guia de Preenchimento"}),o.jsx("h4",{className:"text-sm sm:text-base font-bold text-white leading-tight",children:s.title})]})]}),o.jsxs("div",{className:"bg-gradient-to-br from-gray-50 to-white px-4 sm:px-5 py-4 space-y-3",children:[o.jsx("p",{className:"text-sm text-gray-700 leading-relaxed",children:s.text}),o.jsxs("div",{className:"flex items-start gap-2.5 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2.5",children:[o.jsx("svg",{className:"w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),o.jsxs("div",{children:[o.jsx("p",{className:"text-[10px] font-bold text-amber-700 uppercase tracking-wide mb-0.5",children:"Impacto na proposta"}),o.jsx("p",{className:"text-xs text-amber-800",children:s.importance})]})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:[o.jsxs("div",{className:"flex items-start gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2.5",children:[o.jsx("svg",{className:"w-4 h-4 text-green-600 flex-shrink-0 mt-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),o.jsxs("div",{children:[o.jsx("p",{className:"text-[10px] font-bold text-green-700 uppercase tracking-wide mb-0.5",children:"Dica prática"}),o.jsx("p",{className:"text-xs text-green-800",children:s.insight})]})]}),o.jsxs("div",{className:"flex items-start gap-2 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2.5",children:[o.jsx("svg",{className:"w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),o.jsxs("div",{children:[o.jsx("p",{className:"text-[10px] font-bold text-blue-700 uppercase tracking-wide mb-0.5",children:"Sabia que?"}),o.jsx("p",{className:"text-xs text-blue-800",children:s.funFact})]})]})]})]})]})}function gg({step:s}){const n=pg[s];return n?o.jsx(Uu,{tip:n,stepIndex:s,totalSteps:6}):null}function hg({step:s}){const n=fg[s];return n?o.jsx(Uu,{tip:n,stepIndex:s,totalSteps:7}):null}const xg="modulepreload",vg=function(s){return"/sentinel-fairfield/"+s},iu={},bg=function(n,l,u){let m=Promise.resolve();if(l&&l.length>0){let f=function(b){return Promise.all(b.map(S=>Promise.resolve(S).then(j=>({status:"fulfilled",value:j}),j=>({status:"rejected",reason:j}))))};document.getElementsByTagName("link");const g=document.querySelector("meta[property=csp-nonce]"),x=(g==null?void 0:g.nonce)||(g==null?void 0:g.getAttribute("nonce"));m=f(l.map(b=>{if(b=vg(b),b in iu)return;iu[b]=!0;const S=b.endsWith(".css"),j=S?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${b}"]${j}`))return;const P=document.createElement("link");if(P.rel=S?"stylesheet":xg,S||(P.as="script"),P.crossOrigin="",P.href=b,x&&P.setAttribute("nonce",x),document.head.appendChild(P),S)return new Promise((M,F)=>{P.addEventListener("load",M),P.addEventListener("error",()=>F(new Error(`Unable to preload CSS for ${b}`)))})}))}function c(f){const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=f,window.dispatchEvent(g),!g.defaultPrevented)throw f}return m.then(f=>{for(const g of f||[])g.status==="rejected"&&c(g.reason);return n().catch(c)})};function nu({onComplete:s}){const[n,l]=v.useState(0),[u,m]=v.useState(0),c=[{label:"Analisando perfil da empresa...",icon:"🏢"},{label:"Avaliando histórico de crédito...",icon:"📊"},{label:"Calculando taxa base do setor...",icon:"🔢"},{label:"Processando fatores de ajuste...",icon:"⚙️"},{label:"Aplicando bonus/malus...",icon:"📈"},{label:"Definindo estrutura de cobertura...",icon:"🛡️"},{label:"Ranking de seguradoras...",icon:"🏆"},{label:"Gerando relatório iCover...",icon:"✨"}];return v.useEffect(()=>{const g=12e3/c.length,x=80;let b=0;const S=setInterval(()=>{b+=x;const P=b/12e3,M=P<.5?4*P*P*P:1-Math.pow(-2*P+2,3)/2,F=Math.min(M*100,100);m(F),F>=100&&(clearInterval(S),setTimeout(s,600))},x),j=setInterval(()=>{l(P=>P<c.length-1?P+1:P)},g);return()=>{clearInterval(S),clearInterval(j)}},[]),o.jsxs("div",{className:"flex flex-col items-center justify-center py-16 px-4 animate-fadeIn",children:[o.jsxs("div",{className:"relative mb-8",children:[o.jsx("div",{className:"w-24 h-24 rounded-full bg-gradient-to-br from-navy/10 to-sentinel/10 flex items-center justify-center",children:o.jsxs("svg",{width:56,height:56,viewBox:"0 0 80 80",fill:"none",children:[o.jsx("path",{d:"M40 12 L62 24 L62 42 C62 56 52 66 40 70 C28 66 18 56 18 42 L18 24 Z",fill:"rgba(17,24,51,0.06)",stroke:"#0c4a6e",strokeWidth:"1.8",children:o.jsx("animate",{attributeName:"stroke-opacity",values:"0.5;1;0.5",dur:"2.5s",repeatCount:"indefinite"})}),o.jsx("path",{d:"M40 20 L56 28 L56 42 C56 52 49 60 40 63 C31 60 24 52 24 42 L24 28 Z",fill:"rgba(12,74,110,0.06)",stroke:"#0c4a6e",strokeWidth:"0.8",opacity:"0.5"}),o.jsxs("text",{x:"40",y:"48",textAnchor:"middle",fill:"#0c4a6e",fontSize:"22",fontWeight:"bold",fontFamily:"Inter, sans-serif",children:["$",o.jsx("animate",{attributeName:"opacity",values:"0.5;1;0.5",dur:"2s",repeatCount:"indefinite"})]}),o.jsxs("line",{x1:"22",y1:"40",x2:"58",y2:"40",stroke:"#0c4a6e",strokeWidth:"0.5",opacity:"0.2",children:[o.jsx("animate",{attributeName:"y1",values:"25;55;25",dur:"3s",repeatCount:"indefinite"}),o.jsx("animate",{attributeName:"y2",values:"25;55;25",dur:"3s",repeatCount:"indefinite"}),o.jsx("animate",{attributeName:"opacity",values:"0;0.35;0",dur:"3s",repeatCount:"indefinite"})]})]})}),o.jsx("div",{className:"absolute -inset-4 rounded-full border-2 border-dashed border-navy/10 animate-spin",style:{animationDuration:"10s"}})]}),o.jsx("h2",{className:"text-2xl font-black text-navy mb-2",children:"iCover Analisando"}),o.jsx("p",{className:"text-navy/40 text-sm mb-8",children:"Motor de subscrição inteligente SENTINEL"}),o.jsxs("div",{className:"w-full max-w-md mb-6",children:[o.jsx("div",{className:"h-2 bg-navy/[0.06] rounded-full overflow-hidden",children:o.jsx("div",{className:"h-full bg-gradient-to-r from-sentinel to-cobre rounded-full transition-all duration-200",style:{width:`${u}%`}})}),o.jsxs("div",{className:"flex justify-between mt-1.5",children:[o.jsxs("span",{className:"text-[10px] text-navy/30 font-mono",children:[Math.round(u),"%"]}),o.jsx("span",{className:"text-[10px] text-navy/30 font-mono",children:"iCover Engine v1.0"})]})]}),o.jsx("div",{className:"space-y-2 w-full max-w-md",children:c.map((f,g)=>o.jsxs("div",{className:`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${g<n?"opacity-40":g===n?"bg-sentinel/[0.06] border border-sentinel/20":"opacity-20"}`,children:[o.jsx("span",{className:"text-base",children:f.icon}),o.jsx("span",{className:`text-sm ${g===n?"text-navy font-semibold":"text-navy/50"}`,children:f.label}),g<n&&o.jsx("span",{className:"ml-auto text-emerald-500 text-xs",children:"✓"}),g===n&&o.jsx("span",{className:"ml-auto w-3 h-3 rounded-full bg-sentinel animate-pulse"})]},g))})]})}function yg({score:s,maxScore:n=100,riskLabel:l,riskColor:u}){const[m,c]=v.useState(0),f=m/n,g=2*Math.PI*45,x=g*(1-f);return v.useEffect(()=>{let b;const j=Date.now();function P(){const M=Date.now()-j,F=Math.min(M/1500,1),D=1-Math.pow(1-F,3);c(Math.round(s*D)),F<1&&(b=requestAnimationFrame(P))}return b=requestAnimationFrame(P),()=>cancelAnimationFrame(b)},[s]),o.jsxs("div",{className:"flex flex-col items-center",children:[o.jsxs("div",{className:"relative w-36 h-36",children:[o.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full -rotate-90",children:[o.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#e5e7eb",strokeWidth:"6",opacity:"0.3"}),o.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:u,strokeWidth:"6",strokeLinecap:"round",strokeDasharray:g,strokeDashoffset:x,className:"transition-all duration-1000"})]}),o.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center",children:[o.jsx("span",{className:"text-3xl font-black text-navy",children:m}),o.jsxs("span",{className:"text-[10px] text-navy/40 font-medium",children:["/ ",n]})]})]}),o.jsx("div",{className:"mt-2 px-3 py-1 rounded-full text-xs font-bold",style:{backgroundColor:u+"20",color:u},children:l})]})}function Cg({label:s,value:n,max:l,delay:u=0}){const[m,c]=v.useState(0);v.useEffect(()=>{const g=setTimeout(()=>c(n/l*100),200+u);return()=>clearTimeout(g)},[n,l,u]);const f=m>=70?"#34D399":m>=40?"#FCD34D":"#FB923C";return o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"text-xs text-navy/50 w-40 text-right flex-shrink-0",children:s}),o.jsx("div",{className:"flex-1 h-2 bg-navy/[0.06] rounded-full overflow-hidden",children:o.jsx("div",{className:"h-full rounded-full transition-all duration-1000 ease-out",style:{width:`${m}%`,backgroundColor:f}})}),o.jsxs("span",{className:"text-xs font-bold text-navy/70 w-10",children:[n,"/",l]})]})}function jg({insurer:s,rank:n}){return o.jsxs("div",{className:`flex items-center gap-3 p-3 rounded-xl border transition-all ${n===0?"bg-sentinel/[0.04] border-sentinel/20":"bg-white border-gray-100"}`,children:[o.jsx("div",{className:`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black ${n===0?"bg-sentinel/15 text-sentinel":n===1?"bg-cobre/10 text-cobre":"bg-gray-100 text-navy/40"}`,children:n+1}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsx("p",{className:"text-sm font-bold text-navy truncate",children:s.name}),o.jsx("p",{className:"text-[10px] text-navy/40 truncate",children:s.strengths[0]})]}),o.jsxs("div",{className:"text-right flex-shrink-0",children:[o.jsxs("span",{className:"text-xs font-bold text-navy/60",children:[s.score,"%"]}),o.jsx("p",{className:"text-[10px] text-navy/30",children:"aderência"})]})]})}function Sg({analysis:s,onAccept:n,onDecline:l,tipo:u}){const[m,c]=v.useState(!1);return s.metrics.symbol,o.jsxs("div",{className:"animate-fadeIn",children:[o.jsxs("div",{className:"text-center mb-8",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sentinel/[0.08] border border-sentinel/20 mb-3",children:[o.jsx(xo,{size:16}),o.jsx("span",{className:"text-[10px] font-bold text-sentinel uppercase tracking-wider",children:"iCover — Análise de Subscrição"})]}),o.jsx("h2",{className:"text-2xl font-black text-navy",children:s.empresa}),o.jsxs("p",{className:"text-sm text-navy/40",children:[s.setor," · CNPJ ",s.cnpj]})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8",children:[o.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col items-center",children:[o.jsx("h3",{className:"text-xs font-bold text-navy/40 uppercase tracking-wider mb-4",children:"Score de Risco"}),o.jsx(yg,{score:s.score,maxScore:s.scoreMax,riskLabel:s.riskLabel,riskColor:s.riskColor})]}),o.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-6 shadow-sm",children:[o.jsx("h3",{className:"text-xs font-bold text-navy/40 uppercase tracking-wider mb-4",children:"Prêmio Estimado Anual"}),o.jsxs("div",{className:"text-center mb-4",children:[o.jsx("p",{className:"text-3xl font-black text-navy",children:s.premium.estimatedFormatted}),o.jsxs("p",{className:"text-xs text-navy/40 mt-1",children:["≈ ",s.premium.monthlyFormatted,"/mês"]})]}),o.jsxs("div",{className:"space-y-2 text-xs",children:[o.jsxs("div",{className:"flex justify-between text-navy/50",children:[o.jsx("span",{children:"Prêmio mínimo"}),o.jsx("span",{className:"font-semibold text-navy/70",children:s.premium.minimumFormatted})]}),o.jsxs("div",{className:"flex justify-between text-navy/50",children:[o.jsx("span",{children:"Prêmio máximo"}),o.jsx("span",{className:"font-semibold text-navy/70",children:s.premium.maximumFormatted})]}),o.jsxs("div",{className:"flex justify-between text-navy/50",children:[o.jsx("span",{children:"Taxa aplicada"}),o.jsx("span",{className:"font-semibold text-navy/70",children:s.pricing.adjustedRatePct})]}),s.bonusMalus.type!=="neutro"&&o.jsxs("div",{className:`flex justify-between ${s.bonusMalus.type==="bonus"?"text-emerald-600":"text-orange-500"}`,children:[o.jsx("span",{children:s.bonusMalus.type==="bonus"?"Bônus":"Malus"}),o.jsxs("span",{className:"font-bold",children:[s.bonusMalus.pct>0?"+":"",s.bonusMalus.pct,"%"]})]})]})]}),o.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-6 shadow-sm",children:[o.jsx("h3",{className:"text-xs font-bold text-navy/40 uppercase tracking-wider mb-4",children:"Cobertura Recomendada"}),o.jsxs("div",{className:"space-y-3",children:[o.jsxs("div",{children:[o.jsx("p",{className:"text-sm font-bold text-sentinel",children:s.coverage.structureLabel}),o.jsx("p",{className:"text-[10px] text-navy/40 mt-0.5 leading-relaxed",children:s.coverage.structureReason})]}),o.jsx("div",{className:"h-px bg-gray-100"}),o.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[o.jsxs("div",{children:[o.jsx("p",{className:"text-navy/40",children:"PMI"}),o.jsx("p",{className:"font-bold text-navy",children:s.coverage.pmiPct})]}),o.jsxs("div",{children:[o.jsx("p",{className:"text-navy/40",children:"POS"}),o.jsx("p",{className:"font-bold text-navy",children:s.coverage.posPct})]}),o.jsxs("div",{children:[o.jsx("p",{className:"text-navy/40",children:"Prazo máx. crédito"}),o.jsxs("p",{className:"font-bold text-navy",children:[s.coverage.maxCreditPeriod," dias"]})]}),o.jsxs("div",{children:[o.jsx("p",{className:"text-navy/40",children:"Mora prolongada"}),o.jsxs("p",{className:"font-bold text-navy",children:[s.coverage.waitingPeriod," dias"]})]}),o.jsxs("div",{children:[o.jsx("p",{className:"text-navy/40",children:"Limite discricionário"}),o.jsx("p",{className:"font-bold text-navy",children:s.coverage.discretionaryLimitFormatted})]}),o.jsxs("div",{children:[o.jsx("p",{className:"text-navy/40",children:"Limite agregado"}),o.jsx("p",{className:"font-bold text-navy",children:s.coverage.aggregateLimitFormatted})]})]}),s.coverage.aad>0&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"h-px bg-gray-100"}),o.jsx("p",{className:"text-[10px] text-navy/40",children:s.coverage.aadLabel})]})]})]})]}),o.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-6",children:[o.jsxs("button",{onClick:()=>c(!m),className:"flex items-center justify-between w-full text-left",children:[o.jsx("h3",{className:"text-xs font-bold text-navy/40 uppercase tracking-wider",children:"Análise Detalhada por Dimensão"}),o.jsx("svg",{className:`w-4 h-4 text-navy/30 transition-transform ${m?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),m&&o.jsxs("div",{className:"mt-4 space-y-3",children:[Object.entries(s.scores).map(([f,g],x)=>o.jsx(Cg,{label:g.label,value:g.value,max:g.max,delay:x*100},f)),o.jsx("div",{className:"h-px bg-gray-100 my-3"}),o.jsx("h4",{className:"text-xs font-bold text-navy/40 uppercase tracking-wider",children:"Fatores de Ajuste da Taxa"}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2",children:Object.entries(s.pricing.factors).map(([f,g])=>o.jsxs("div",{className:"flex items-center justify-between text-xs p-2 rounded-lg bg-gray-50",children:[o.jsx("span",{className:"text-navy/50",children:g.label}),o.jsxs("span",{className:`font-bold ${g.value<1?"text-emerald-600":g.value>1?"text-orange-500":"text-navy/60"}`,children:[g.value<1?"↓":g.value>1?"↑":"="," ",g.value.toFixed(2),"x"]})]},f))})]})]}),o.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-8",children:[o.jsx("h3",{className:"text-xs font-bold text-navy/40 uppercase tracking-wider mb-4",children:"Ranking de Seguradoras por Aderência ao Perfil"}),o.jsx("div",{className:"space-y-2",children:s.insurers.slice(0,5).map((f,g)=>o.jsx(jg,{insurer:f,rank:g},f.name))})]}),s.insights&&s.insights.length>0&&o.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-6",children:[o.jsx("h3",{className:"text-xs font-bold text-navy/40 uppercase tracking-wider mb-4",children:"🎯 Insights Estratégicos iCover"}),o.jsx("div",{className:"space-y-3",children:s.insights.map((f,g)=>o.jsxs("div",{className:"flex gap-3 p-3 rounded-xl bg-gradient-to-r from-sentinel/[0.03] to-transparent border border-sentinel/[0.08]",children:[o.jsx("span",{className:"text-lg flex-shrink-0 mt-0.5",children:f.icon}),o.jsxs("div",{children:[o.jsx("p",{className:"text-xs font-bold text-navy mb-0.5",children:f.title}),o.jsx("p",{className:"text-[11px] text-navy/50 leading-relaxed",children:f.text})]})]},g))})]}),o.jsx("div",{className:"bg-navy/[0.03] rounded-xl p-4 mb-6 border border-navy/[0.06]",children:o.jsxs("p",{className:"text-[10px] text-navy/40 leading-relaxed",children:[o.jsx("strong",{className:"text-navy/60",children:"Importante:"})," Esta análise é uma estimativa gerada pelo motor de subscrição iCover v2.0 com base nos dados informados. Os valores e condições apresentados são indicativos e podem variar na cotação real junto às seguradoras. A Fairfield atua como consultoria 100% independente — não representamos nenhuma seguradora. Os prêmios e condições definitivos serão definidos pelas seguradoras após análise formal da proposta."]})}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 justify-center",children:[o.jsx("button",{onClick:n,className:"px-8 py-4 bg-gradient-to-r from-sentinel-dark to-sentinel text-navy-dark rounded-2xl font-bold text-base shadow-lg shadow-sentinel/15 hover:shadow-xl hover:shadow-sentinel/25 hover:scale-[1.02] transition-all",children:"✓ Aceitar e Prosseguir com Cotação"}),o.jsx("button",{onClick:l,className:"px-8 py-4 border border-navy/10 text-navy/50 rounded-2xl font-semibold text-sm hover:bg-navy/[0.03] transition-all",children:"Analisar meu Score de Crédito →"})]}),o.jsxs("p",{className:"text-center text-[10px] text-navy/25 mt-4",children:["Powered by ",o.jsx("span",{className:"font-bold text-sentinel/50",children:"SENTINEL"})," iCover Engine v2.0 · Oráculo de Inteligência em Seguro de Crédito · Fairfield"]})]})}function Wu({formData:s,tipo:n,onComplete:l,onDecline:u}){const[m,c]=v.useState("analyzing"),[f,g]=v.useState(null),x=v.useRef(null),b=v.useRef(!1);v.useEffect(()=>{async function M(){try{const F={tipo:n,...s,seguradoras:[]};try{const{apiFetch:D}=await bg(async()=>{const{apiFetch:B}=await Promise.resolve().then(()=>Jf);return{apiFetch:B}},void 0),L=await D("/api/underwriting/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(F)});x.current=L,g(L)}catch{console.warn("API indisponível, usando análise client-side");const D=Pg(F);x.current=D,g(D)}}catch(F){console.error("Erro na análise iCover:",F)}b.current&&c("results")}M()},[]);function S(){b.current=!0,x.current&&c("results")}function j(){l(f)}function P(){u?u():window.open("https://www.4score.com.br","_blank")}return m==="analyzing"?o.jsx(nu,{onComplete:S}):f?o.jsx(Sg,{analysis:f,onAccept:j,onDecline:P,tipo:n}):o.jsx(nu,{onComplete:S})}function wg(s){const n=(s||"").toLowerCase(),l={quimico:{risk:"medium",rate:.0022,label:"Químico/Petroquímico",sectorScore:7},petroquimico:{risk:"medium",rate:.0022,label:"Petroquímico",sectorScore:7},alimento:{risk:"low",rate:.0015,label:"Alimentos/Bebidas",sectorScore:9},bebida:{risk:"low",rate:.0015,label:"Alimentos/Bebidas",sectorScore:9},metalur:{risk:"medium",rate:.0025,label:"Metalúrgico/Siderúrgico",sectorScore:6},sider:{risk:"medium",rate:.0025,label:"Siderúrgico",sectorScore:6},textil:{risk:"medium_high",rate:.003,label:"Têxtil/Confecções",sectorScore:5},confec:{risk:"medium_high",rate:.003,label:"Confecções",sectorScore:5},constru:{risk:"high",rate:.004,label:"Construção Civil",sectorScore:3},imobil:{risk:"high",rate:.004,label:"Imobiliário",sectorScore:3},farma:{risk:"low",rate:.0012,label:"Farmacêutico/Saúde",sectorScore:9},saude:{risk:"low",rate:.0014,label:"Saúde",sectorScore:9},tecnolog:{risk:"low",rate:.0015,label:"Tecnologia",sectorScore:8},software:{risk:"low",rate:.0015,label:"Software/TI",sectorScore:8},agro:{risk:"medium",rate:.0022,label:"Agronegócio",sectorScore:7},energia:{risk:"medium",rate:.002,label:"Energia",sectorScore:7},renov:{risk:"low",rate:.0018,label:"Energia Renovável",sectorScore:8},papel:{risk:"low",rate:.0016,label:"Papel/Celulose",sectorScore:8},eletron:{risk:"low",rate:.0017,label:"Eletrônicos",sectorScore:8},auto:{risk:"medium",rate:.0022,label:"Automotivo",sectorScore:7},varejo:{risk:"medium_high",rate:.0032,label:"Varejo",sectorScore:5},commod:{risk:"medium",rate:.002,label:"Commodities",sectorScore:7},fintech:{risk:"medium",rate:.0025,label:"Serviços Financeiros",sectorScore:6},financ:{risk:"medium",rate:.0025,label:"Serviços Financeiros",sectorScore:6}};for(const[u,m]of Object.entries(l))if(n.includes(u))return m;return{risk:"medium",rate:.002,label:"Geral",sectorScore:7}}function Ng(s,n,l,u,m){return s>5e8&&l<.03?{structure:"excess_of_loss",structureLabel:"Excess of Loss (XL Corporativo)",structureReason:"Com faturamento acima de R$ 500M e sinistralidade controlada, a estrutura XL permite reter perdas normais e transferir apenas riscos catastróficos, com prêmio significativamente menor.",pmi:.9,pmiPct:"90%",pos:.1,posPct:"10%",aadMult:.005}:n<=15?{structure:"key_buyer",structureLabel:"Key Buyer (Compradores Nomeados)",structureReason:"Perfil com número reduzido de compradores. Proteção focada nos maiores riscos com custo otimizado. Avalie também Top-Up para limites insuficientes.",pmi:.85,pmiPct:"85%",pos:.15,posPct:"15%",aadMult:0}:n<=5&&s<5e6?{structure:"single_risk",structureLabel:"Single Risk / Single Buyer",structureReason:"Para operações com poucos compradores e exposição concentrada, a apólice Single Risk oferece cobertura específica por transação sem prêmio mínimo anual.",pmi:.9,pmiPct:"90%",pos:.1,posPct:"10%",aadMult:0}:m==="externo"?{structure:"mixed_wt",structureLabel:"Apólice Mista (Interno + Exportação)",structureReason:"Apólice combinando ramos SUSEP 0171 (interno) e 0172 (exportação) com cobertura de risco político. Inclui proteção contra moratória, inconvertibilidade cambial e embargo.",pmi:.9,pmiPct:"90%",pos:.1,posPct:"10%",aadMult:.001}:{structure:"whole_turnover",structureLabel:"Apólice Global (Whole Turnover)",structureReason:"Estrutura mais eficiente para carteira diversificada. Cobre 100% do faturamento a prazo com limite de crédito por comprador. Inclui limite discricionário para compradores menores.",pmi:.85,pmiPct:"85%",pos:.15,posPct:"15%",aadMult:.002}}function kg(s,n,l,u,m,c,f){const g=[];return s>2e7&&g.push({icon:"🏦",title:"Oportunidade FIDC",text:`Com faturamento segurado acima de R$ ${Math.round(s/1e6)}M, recebíveis com apólice de seguro de crédito podem ser cedidos a um FIDC com rating superior (AA→AAA), reduzindo o custo de capital em até 50%.`}),s>1e8&&g.push({icon:"🌐",title:"Cobertura Sindicada Recomendada",text:"Para exposições acima de R$ 100M, recomenda-se cobertura sindicada com múltiplas seguradoras (Allianz Trade + Coface + Lloyd's) para maximizar capacidade e diversificar o risco de contraparte."}),(n===0||n<.02)&&g.push({icon:"⭐",title:"Histórico Excelente — Negocie Bônus",text:`Sinistralidade de ${(n*100).toFixed(1)}% está muito abaixo da média do mercado (3-5%). Recomendamos negociar bônus de 15-25% no prêmio e PMI de 90% na contratação.`}),n>.1&&g.push({icon:"⚠️",title:"Sinistralidade Elevada — Ação Recomendada",text:`Loss ratio de ${(n*100).toFixed(1)}% requer atenção. Seguradoras poderão solicitar AAD mais alto ou PMI menor. Considere implementar gestão de crédito interna com apoio das ferramentas de monitoramento da seguradora.`}),m==="externo"&&g.push({icon:"🛫",title:"Estratégia de Exportação",text:"A apólice de exportação inclui cobertura de risco político (moratória, inconvertibilidade, embargo). Recebíveis segurados facilitam ACC/ACE e BNDES Exim com taxas até 2% menores."}),u>90&&g.push({icon:"📅",title:"Otimização de Prazo",text:`Prazo médio de ${u} dias acima do padrão do mercado (60 dias). Isso impacta a taxa em +15-30%. Considere supply chain finance integrado ao seguro para oferecer prazo estendido com custo controlado.`}),l<20&&g.push({icon:"📊",title:"Risco de Concentração",text:`Carteira com ${l} compradores apresenta concentração elevada. Recomendamos monitoramento contínuo via plataforma SENTINEL e limites de crédito nomeados para os top 10 compradores.`}),g.push({icon:"📋",title:"Enquadramento Regulatório",text:`Ramo SUSEP ${m==="externo"?"0172 (Exportação)":"0171 (Interno)"}. IOF: 0% (isento). Conformidade com CNSP 432/2021. ${s>5e7?"Para operações acima de R$ 50M, subscrição com resseguro facultativo pode ampliar capacidade.":""}`}),g}function Pg(s){var W,Z,de;const n=s.tipo||"interno",l=n==="externo"?"US$":"R$",u=s.historicoFaturamento||[],m=u.map(le=>parseFloat(String(le.faturamento||"0").replace(/[^\d.,]/g,"").replace(",","."))||0),c=u.map(le=>parseFloat(String(le.perdas||"0").replace(/[^\d.,]/g,"").replace(",","."))||0),f=m.length>0?m[m.length-1]:0,g=n==="interno"?1e3:1,x=f*g,b=m.reduce((le,he)=>le+he,0),S=c.reduce((le,he)=>le+he,0),j=b>0?S/b:0,P=s.condicoesVenda||{},M=parseFloat(P.pct_prazo||"80")/100,F=parseInt(P.prazo_medio_dias||"60")||60,D=parseFloat(String(P.faturamento_desejado_seguro||"0").replace(/[^\d.,]/g,"").replace(",","."))||0,L=D>0?D*g:x*M,B=parseInt(P.num_compradores||"10")||10,O=wg((W=s.proponente)==null?void 0:W.setor),z=O.rate,Y=j===0?.85:j<.02?.9:j<.05?.95:j<.1?1.1:j<.15?1.25:1.5,Q=F<=30?.9:F<=60?1:F<=90?1.1:F<=120?1.2:1.35,ne=L>2e8?.8:L>5e7?.85:L>2e7?.9:L>5e6?1:1.15,$=B>100?.88:B>50?.92:B>20?.96:B>10?1:1.1,me=n==="externo"?1.15:1,xe=z*Y*Q*ne*$*me,pe=Math.max(L*xe,n==="externo"?25e3:15e3),H=L>2e8?15:L>5e7?13:L>2e7?11:L>5e6?9:6,X=j===0?25:j<.02?22:j<.05?18:j<.1?14:j<.15?10:5,K=B>100?20:B>50?17:B>20?14:B>10?12:8,se=F<=30?15:F<=60?13:F<=90?10:F<=120?7:5,ge=n==="externo"?4:3,h=j<.05&&B>20?10:j<.1?7:5,C=H+X+K+se+O.sectorScore+ge+h,E=Ng(L,B,j,F,n),T=E.aadMult>0?Math.round(L*E.aadMult):0,U=kg(L,j,B,F,n,O.label),_=[{name:"Allianz Trade",baseScore:88,strengths:["Líder global","EOLIS platform","80M+ empresas na base"],best:["export","large","diversified"]},{name:"Coface",baseScore:85,strengths:["Rating DRA proprietário","Presente em 100 países","TradeLiner para WT"],best:["export","medium","info"]},{name:"Atradius",baseScore:82,strengths:["Collections em 96 países","Modula flexível","Forte em cobrança"],best:["export","collections","modular"]},{name:"Chubb",baseScore:80,strengths:["Rating AA (S&P)","Soluções sob medida","Capacidade muito alta"],best:["large","bespoke","highcap"]},{name:"AIG",baseScore:78,strengths:["Risco político líder","Grandes exposições USD 10M+","Oil & gas/mining"],best:["political","large","commodities"]},{name:"AVLA",baseScore:76,strengths:["100% digital","Onboarding ágil","Foco em PMEs LATAM"],best:["digital","pme","fast"]},{name:"CESCE",baseScore:74,strengths:["PMEs desde R$ 15k/ano","Ibero-americano","Processo simplificado"],best:["pme","latam","simple"]}].map(le=>{let he=0;return n==="externo"&&le.best.includes("export")&&(he+=5),L>1e8&&le.best.includes("large")&&(he+=5),L<2e7&&le.best.includes("pme")&&(he+=5),B>50&&le.best.includes("diversified")&&(he+=3),{name:le.name,score:le.baseScore+he,strengths:le.strengths}}).sort((le,he)=>he.score-le.score),re=le=>`${l} ${Math.round(le).toLocaleString("pt-BR")}`;return{tipo:n,empresa:((Z=s.proponente)==null?void 0:Z.razao_social)||"Empresa",cnpj:((de=s.proponente)==null?void 0:de.cnpj)||"",setor:O.label,setorRisco:O.risk,score:C,scoreMax:100,riskClass:C>=70?"preferred":C>=55?"standard":"substandard",riskLabel:C>=70?"Risco Preferencial":C>=55?"Risco Padrão":"Risco Subpadrão",riskColor:C>=70?"#34D399":C>=55?"#7DD3FC":"#FCD34D",scores:{revenue:{value:H,max:15,label:"Porte da Empresa"},lossRatio:{value:X,max:25,label:"Histórico de Perdas"},concentration:{value:K,max:20,label:"Diversificação de Compradores"},paymentTerms:{value:se,max:15,label:"Prazo Médio de Crédito"},sector:{value:O.sectorScore,max:10,label:`Risco do Setor (${O.label})`},geography:{value:ge,max:5,label:n==="externo"?"Diversificação Internacional":"Diversificação Geográfica"},portfolio:{value:h,max:10,label:"Qualidade da Carteira"}},metrics:{faturamentoAnual:x,faturamentoSeguravel:L,pctPrazo:M,prazoMedio:F,prazoMaximo:90,avgLossRatio:j,topBuyerPct:.15,top5Pct:.45,numBuyers:B,atrasosRatio:0,currency:n==="externo"?"USD":"BRL",symbol:l},pricing:{baseRate:z,adjustedRate:xe,baseRatePct:(z*100).toFixed(3)+"%",adjustedRatePct:(xe*100).toFixed(3)+"%",factors:{setor:{value:parseFloat((O.rate/.002).toFixed(2)),label:`Setor (${O.label})`},sinistralidade:{value:parseFloat(Y.toFixed(2)),label:"Sinistralidade Histórica"},prazo:{value:parseFloat(Q.toFixed(2)),label:`Prazo de Crédito (${F}d)`},porte:{value:parseFloat(ne.toFixed(2)),label:"Porte / Volume Segurado"},diversificacao:{value:parseFloat($.toFixed(2)),label:`Diversificação (${B} compradores)`},...n==="externo"?{exportacao:{value:1.15,label:"Fator Exportação (risco-país)"}}:{}}},premium:{estimated:Math.round(pe),minimum:Math.round(pe*.7),maximum:Math.round(pe*1.3),monthly:Math.round(pe/12),estimatedFormatted:re(pe),minimumFormatted:re(pe*.7),maximumFormatted:re(pe*1.3),monthlyFormatted:re(pe/12)},bonusMalus:{factor:1,type:j===0?"bonus":j>.1?"malus":"neutro",label:j===0?"Bônus (sem sinistro)":j>.1?"Malus (sinistralidade alta)":"Neutro",pct:j===0?-15:j>.1?20:0},coverage:{...E,aad:T,aadLabel:T>0?`Franquia agregada anual (AAD): ${re(T)} — perdas abaixo deste valor são absorvidas pela empresa`:"Sem franquia agregada",discretionaryLimit:L>5e7?1e5:5e4,discretionaryLimitFormatted:re(L>5e7?1e5:5e4),maxCreditPeriod:Math.min(parseInt(P.prazo_maximo_dias||"90")||90,n==="externo"?180:120),aggregateLimit:Math.round(pe*14),aggregateLimitFormatted:re(pe*14),waitingPeriod:n==="externo"?180:150},insurers:_,insights:U,analyzedAt:new Date().toISOString()}}const Rn="fairfield_intake_interno",Eg=["AC","AL","AM","AP","BA","CE","DF","ES","GO","MA","MG","MS","MT","PA","PB","PE","PI","PR","RJ","RN","RO","RR","RS","SC","SE","SP","TO"],ps=["Proponente","Faturamento","Carteira","Perdas","Atrasos","Compradores"],Lg=["Até 5.000","De 5.001 a 10.000","De 10.001 a 50.000","De 50.001 a 100.000","De 100.001 a 500.000","De 500.001 a 1.000.000","De 1.000.001 a 5.000.000","Acima de 5.000.001"],Ag=["Até 30 dias","Entre 31 e 120 dias","Entre 121 e 180 dias","Acima de 181 dias"];function lu(){return{proponente:{razao_social:"",cnpj:"",setor:"",faturamento_pct:"",uf:""},contato:{nome:"",email:"",telefone:""},coSeguradas:[{empresa:"",cnpj:"",setor:"",faturamento_pct:""}],historicoFaturamento:[{ano:"2023",faturamento:"",perdas:""},{ano:"2024",faturamento:"",perdas:""},{ano:"2025",faturamento:"",perdas:""},{ano:"Próximos 12 meses",faturamento:"",perdas:""}],condicoesVenda:{pct_vista:"",pct_prazo:"",prazo_medio_dias:"",prazo_maximo_dias:"",faturamento_desejado_seguro:""},carteiraRecebiveis:Lg.map(s=>({faixa:s,faturamento_total:"",pct_faturamento:"",num_clientes:"",pct_clientes:""})),perdasPorFaixa:[],maioresPerdas:[{razao_social:"",cnpj:"",exercicio:"",valor:"",motivo:""}],atrasos:Ag.map(s=>({faixa_dias:s,valor_atraso:"",pct_valor:"",qtd_clientes:"",pct_clientes:""})),atrasosDetalhados:[{razao_social:"",cnpj:"",data_emissao:"",data_vencimento:"",valor:""}],amostraCompradores:[{cnpj_codigo_fiscal:"",razao_social:"",faturamento_anual:"",limite_credito:""}]}}function Rg(){Wa();const{user:s,updateProspectPhase:n,authFetch:l}=ma(),[u,m]=v.useState(0),[c,f]=v.useState(()=>{const h=localStorage.getItem(Rn);return h?JSON.parse(h):lu()}),[g,x]=v.useState({}),[b,S]=v.useState(!1),[j,P]=v.useState(!1),[M,F]=v.useState(!1),[D,L]=v.useState(null),[B,O]=v.useState(null),[z,Y]=v.useState(!1);v.useEffect(()=>{localStorage.setItem(Rn,JSON.stringify(c))},[c]),v.useEffect(()=>{s&&n(s.email,"preenchendo_interno")},[]);function Q(h,C,E){f(T=>({...T,[h]:{...T[h],[C]:E}})),x(T=>{const U={...T};return delete U[`${h}.${C}`],U})}function ne(h,C,E,T){f(U=>{const N=[...U[h]];if(N[C]={...N[C],[E]:T},h==="carteiraRecebiveis"&&(E==="faturamento_total"||E==="num_clientes")){const _=N.reduce((W,Z)=>W+(parseFloat(String(Z.faturamento_total).replace(/\./g,"").replace(",","."))||0),0),re=N.reduce((W,Z)=>W+(parseInt(String(Z.num_clientes).replace(/\D/g,""))||0),0);N.forEach((W,Z)=>{const de=parseFloat(String(W.faturamento_total).replace(/\./g,"").replace(",","."))||0,le=parseInt(String(W.num_clientes).replace(/\D/g,""))||0;N[Z]={...N[Z],pct_faturamento:_>0?(de/_*100).toFixed(1):"",pct_clientes:re>0?(le/re*100).toFixed(1):""}})}if(h==="atrasos"&&(E==="valor_atraso"||E==="qtd_clientes")){const _=N.reduce((W,Z)=>W+(parseFloat(String(Z.valor_atraso).replace(/\./g,"").replace(",","."))||0),0),re=N.reduce((W,Z)=>W+(parseInt(String(Z.qtd_clientes).replace(/\D/g,""))||0),0);N.forEach((W,Z)=>{const de=parseFloat(String(W.valor_atraso).replace(/\./g,"").replace(",","."))||0,le=parseInt(String(W.qtd_clientes).replace(/\D/g,""))||0;N[Z]={...N[Z],pct_valor:_>0?(de/_*100).toFixed(1):"",pct_clientes:re>0?(le/re*100).toFixed(1):""}})}return{...U,[h]:N}})}function $(h,C){f(E=>({...E,[h]:[...E[h],{...C}]}))}function me(h,C){f(E=>({...E,[h]:E[h].filter((T,U)=>U!==C)}))}function xe(h){const C={};if(h===0)c.proponente.razao_social.trim()||(C["proponente.razao_social"]="Obrigatório"),c.proponente.cnpj.replace(/\D/g,"").length!==14&&(C["proponente.cnpj"]="CNPJ inválido"),c.proponente.setor.trim()||(C["proponente.setor"]="Obrigatório"),c.contato.nome.trim()||(C["contato.nome"]="Obrigatório"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.contato.email)||(C["contato.email"]="E-mail inválido");else if(h===1)c.condicoesVenda.faturamento_desejado_seguro||(C["cv.fds"]="Informe o faturamento desejado");else if(h===5){const E=c.amostraCompradores.filter(T=>T.razao_social||T.faturamento_anual||T.limite_credito);E.length===0?C.compradores="Informe pelo menos 1 comprador":E.forEach((T,U)=>{(!T.cnpj_codigo_fiscal||T.cnpj_codigo_fiscal.replace(/\D/g,"").length<11)&&(C[`comprador_cnpj_${U}`]=`CNPJ obrigatório para o comprador ${U+1}`)})}return x(C),Object.keys(C).length>0&&h===5&&je.error("Preencha o CNPJ de todos os compradores informados"),Object.keys(C).length===0}function pe(){xe(u)&&m(h=>Math.min(h+1,ps.length-1))}function H(){Y(!1),m(h=>Math.max(h-1,0))}async function X(h){h==="review"?xe(u)&&Y(!0):(F(!0),window.scrollTo({top:0,behavior:"smooth"}))}async function K(h){L(h),S(!0);try{const C={tipo:"interno",...c,seguradoras:[],icoverAnalysis:h},T=await(s?l:Ke)("/api/leads",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(C)});if(!T.sucesso)throw new Error(T.mensagem);O(T.data),P(!0),F(!1),localStorage.removeItem(Rn),s&&n(s.email,"enviado_interno"),je.success("Solicitação enviada com sucesso!")}catch(C){je.error(C.message||"Erro ao enviar")}finally{S(!1)}}function se(){window.open("https://www.4score.com.br","_blank")}function ge(h){f(C=>({...C,proponente:{...C.proponente,razao_social:h.razao_social,uf:h.uf||C.proponente.uf}})),je.success(`Empresa: ${h.razao_social}`)}return j?o.jsx(qu,{result:B,tipo:"interno",onReset:()=>{P(!1),F(!1),L(null),m(0),f(lu()),O(null),Y(!1)}}):M?o.jsx("div",{className:"max-w-5xl mx-auto px-4 py-8",children:o.jsx(Wu,{formData:c,tipo:"interno",onComplete:K,onDecline:se})}):o.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[o.jsxs("div",{className:"text-center mb-6",children:[o.jsx("h2",{className:"text-3xl font-bold text-navy",children:"Crédito Interno"}),o.jsx("p",{className:"text-cobre text-sm font-semibold",children:"Operações Nacionais — Valores em R$"})]}),!z&&o.jsx(Bu,{step:u,steps:ps}),!z&&o.jsx(gg,{step:u}),o.jsxs("div",{className:"card",children:[z?o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"bg-gradient-to-r from-navy to-[#0d1f3c] rounded-xl px-5 py-4 flex items-center gap-4",children:[o.jsx("div",{className:"w-12 h-12 bg-green-400/20 rounded-xl flex items-center justify-center flex-shrink-0",children:o.jsx("svg",{className:"w-7 h-7 text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),o.jsxs("div",{children:[o.jsx("p",{className:"text-[10px] font-bold text-green-400 uppercase tracking-widest mb-0.5",children:"Quase lá!"}),o.jsx("h3",{className:"text-base sm:text-lg font-bold text-white leading-tight",children:"Revisão Final dos Dados"}),o.jsx("p",{className:"text-xs text-white/60",children:"Confirme as informações antes de enviar para as 7 seguradoras"})]})]}),o.jsxs(fs,{accent:"navy",title:"Proponente",icon:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"}),children:[o.jsx(ka,{label:"Empresa",value:c.proponente.razao_social,highlight:!0}),o.jsx(ka,{label:"CNPJ",value:c.proponente.cnpj}),o.jsx(ka,{label:"Setor",value:c.proponente.setor}),o.jsx(ka,{label:"UF",value:c.proponente.uf}),o.jsx(ka,{label:"Contato",value:c.contato.nome?`${c.contato.nome} · ${c.contato.email}`:""}),c.coSeguradas.filter(h=>h.empresa).length>0&&o.jsx(ka,{label:"Co-seguradas",value:c.coSeguradas.filter(h=>h.empresa).map(h=>h.empresa).join(" · ")})]}),o.jsxs(fs,{accent:"cobre",title:"Faturamento e Condições de Venda",icon:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}),children:[c.historicoFaturamento.map(h=>o.jsx(ka,{label:h.ano,value:h.faturamento?`R$ ${h.faturamento} mil · Perdas: ${h.perdas||"0"}`:""},h.ano)),o.jsx(ka,{label:"Faturamento seguro",value:c.condicoesVenda.faturamento_desejado_seguro?`R$ ${c.condicoesVenda.faturamento_desejado_seguro}`:"",highlight:!0}),o.jsx(ka,{label:"Condições",value:[c.condicoesVenda.pct_vista&&`Vista ${c.condicoesVenda.pct_vista}%`,c.condicoesVenda.pct_prazo&&`Prazo ${c.condicoesVenda.pct_prazo}%`,c.condicoesVenda.prazo_medio_dias&&`Médio ${c.condicoesVenda.prazo_medio_dias}d`,c.condicoesVenda.prazo_maximo_dias&&`Máx ${c.condicoesVenda.prazo_maximo_dias}d`].filter(Boolean).join(" · ")})]}),c.carteiraRecebiveis.filter(h=>h.faturamento_total).length>0&&o.jsx(fs,{accent:"navy",title:"Carteira de Recebíveis",icon:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"}),children:c.carteiraRecebiveis.filter(h=>h.faturamento_total).map(h=>o.jsx(ka,{label:h.faixa,value:`R$ ${h.faturamento_total} (${h.pct_faturamento}%) · ${h.num_clientes} clientes`},h.faixa))}),c.amostraCompradores.filter(h=>h.razao_social).length>0&&o.jsx(fs,{accent:"cobre",title:"Amostra de Compradores",icon:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"}),children:c.amostraCompradores.filter(h=>h.razao_social).map((h,C)=>o.jsx(ka,{label:h.razao_social,value:[h.cnpj_codigo_fiscal&&`CNPJ ${h.cnpj_codigo_fiscal}`,h.limite_credito&&`Lim: R$ ${h.limite_credito}`].filter(Boolean).join(" · ")},C))}),o.jsx(du,{})]}):o.jsxs(o.Fragment,{children:[u===0&&o.jsxs("div",{className:"space-y-4",children:[o.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"1. Dados do Proponente"}),o.jsx(Vu,{value:c.proponente.cnpj,onChange:h=>Q("proponente","cnpj",h),onResult:ge,error:g["proponente.cnpj"]}),o.jsx(ye,{label:"Razão Social",value:c.proponente.razao_social,onChange:h=>Q("proponente","razao_social",h),required:!0,error:g["proponente.razao_social"]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[o.jsx(ye,{label:"Setor de Atividade",value:c.proponente.setor,onChange:h=>Q("proponente","setor",h),required:!0,error:g["proponente.setor"],placeholder:"Atividade e produtos"}),o.jsx(ye,{label:"Faturamento Empresa (%)",value:c.proponente.faturamento_pct,onChange:h=>Q("proponente","faturamento_pct",h),placeholder:"100%"}),o.jsx(ig,{label:"UF",value:c.proponente.uf,onChange:h=>Q("proponente","uf",h),options:Eg})]}),o.jsx("div",{className:"border-t pt-4 mt-4",children:o.jsx("h4",{className:"text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide",children:"Contato Responsável"})}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[o.jsx(ye,{label:"Nome",value:c.contato.nome,onChange:h=>Q("contato","nome",h),required:!0,error:g["contato.nome"]}),o.jsx(ye,{label:"E-mail",value:c.contato.email,onChange:h=>Q("contato","email",h),type:"email",required:!0,error:g["contato.email"]}),o.jsx(ye,{label:"Telefone",value:c.contato.telefone,onChange:h=>Q("contato","telefone",Un(h)),placeholder:"(00) 00000-0000"})]}),o.jsx("div",{className:"border-t pt-4 mt-4",children:o.jsx("h4",{className:"text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide",children:"Co-Seguradas (opcional)"})}),o.jsx(ua,{columns:[{key:"cnpj",label:"CNPJ",placeholder:"00.000.000/0000-00",type:"cnpj",cnpjLookupTarget:"empresa"},{key:"empresa",label:"Empresa",placeholder:"Preenchido automaticamente"},{key:"setor",label:"Setor",placeholder:"Atividade"},{key:"faturamento_pct",label:"Fat. %",placeholder:"%"}],rows:c.coSeguradas,onChange:(h,C,E)=>ne("coSeguradas",h,C,E),onAdd:()=>$("coSeguradas",{empresa:"",cnpj:"",setor:"",faturamento_pct:""}),onRemove:h=>me("coSeguradas",h),maxRows:3,addLabel:"Adicionar co-segurada"})]}),u===1&&o.jsxs("div",{className:"space-y-4",children:[o.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"2. Histórico de Faturamento e PDD"}),o.jsx("p",{className:"text-xs text-gray-400",children:"Em Milhares de Reais. Excluindo vendas para coligadas, pessoas físicas, empresas públicas, à vista ou antecipadas."}),o.jsx(ua,{columns:[{key:"ano",label:"Período",readOnly:!0},{key:"faturamento",label:"Faturamento (R$ mil)",placeholder:"Ex: 5.000"},{key:"perdas",label:"Perdas (R$ mil)",placeholder:"Ex: 100 (ou 0)"}],rows:c.historicoFaturamento,onChange:(h,C,E)=>ne("historicoFaturamento",h,C,E)}),c.historicoFaturamento.some(h=>h.faturamento)&&o.jsx("div",{className:"flex flex-wrap gap-2 mt-1",children:c.historicoFaturamento.filter(h=>h.faturamento).map(h=>{const C=parseFloat(String(h.faturamento).replace(/\./g,"").replace(",","."))||0,E=parseFloat(String(h.perdas).replace(/\./g,"").replace(",","."))||0,T=C>0?E/C*100:null,U=T===null?"bg-gray-100 text-gray-500":T<2?"bg-green-100 text-green-700":T<5?"bg-amber-100 text-amber-700":"bg-red-100 text-red-700";return o.jsxs("span",{className:`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${U}`,children:[h.ano,": ",T!==null?`${T.toFixed(2)}% sinistralidade`:"informe as perdas"]},h.ano)})}),o.jsx("div",{className:"border-t pt-4 mt-4",children:o.jsx("h4",{className:"text-sm font-bold text-navy mb-3",children:"2.1 Distribuição das Condições de Venda"})}),o.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[o.jsx(ye,{label:"À Vista (%)",value:c.condicoesVenda.pct_vista,onChange:h=>{Q("condicoesVenda","pct_vista",h);const C=parseFloat(h);!isNaN(C)&&C>=0&&C<=100&&!c.condicoesVenda.pct_prazo&&Q("condicoesVenda","pct_prazo",String(100-C))},placeholder:"Ex: 30"}),o.jsx(ye,{label:"À Prazo (%)",value:c.condicoesVenda.pct_prazo,onChange:h=>Q("condicoesVenda","pct_prazo",h),placeholder:"Ex: 70",hint:(()=>{const h=parseFloat(c.condicoesVenda.pct_vista)||0,C=parseFloat(c.condicoesVenda.pct_prazo)||0,E=h+C;return h&&C&&E!==100?`⚠️ Soma atual: ${E}% (deve ser 100%)`:h&&C&&E===100?"✓ Soma correta: 100%":null})()}),o.jsx(ye,{label:"Prazo Médio (dias)",value:c.condicoesVenda.prazo_medio_dias,onChange:h=>Q("condicoesVenda","prazo_medio_dias",h),placeholder:"Ex: 60"}),o.jsx(ye,{label:"Prazo Máximo (dias)",value:c.condicoesVenda.prazo_maximo_dias,onChange:h=>Q("condicoesVenda","prazo_maximo_dias",h),placeholder:"Ex: 120"})]}),o.jsxs("div",{className:"border-t pt-4 mt-4",children:[o.jsx("h4",{className:"text-sm font-bold text-navy mb-3",children:"2.2 Faturamento Anual Desejado para o Seguro"}),o.jsx("p",{className:"text-xs text-gray-400 mb-2",children:"Considerar o faturamento total anual somado de todos os clientes que a empresa deseja ter coberto dentro da apólice."})]}),o.jsx(ye,{label:"Valor (R$)",value:c.condicoesVenda.faturamento_desejado_seguro,onChange:h=>Q("condicoesVenda","faturamento_desejado_seguro",h),required:!0,error:g["cv.fds"],placeholder:"Ex: 10.000.000",hint:"Sobre este faturamento estimado incide o custo da apólice."})]}),u===2&&o.jsxs("div",{className:"space-y-4",children:[o.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"3. Distribuição da Carteira de Recebíveis"}),o.jsx("p",{className:"text-xs text-gray-400",children:"Excluindo vendas para coligadas, PF, empresas públicas, à vista ou antecipadas. Somar todas as vendas de um mesmo cliente para enquadrar na faixa correta."}),o.jsx(ua,{columns:[{key:"faixa",label:"Faixa de Valor (R$)",readOnly:!0},{key:"faturamento_total",label:"Fat. Total (R$)",placeholder:"Valor"},{key:"pct_faturamento",label:"% Fat.",readOnly:!0,placeholder:"Auto"},{key:"num_clientes",label:"Nº Clientes",placeholder:"Qtd"},{key:"pct_clientes",label:"% Clientes",readOnly:!0,placeholder:"Auto"}],rows:c.carteiraRecebiveis,onChange:(h,C,E)=>ne("carteiraRecebiveis",h,C,E)})]}),u===3&&o.jsxs("div",{className:"space-y-4",children:[o.jsx("div",{className:"flex items-center justify-between",children:o.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3 flex-1",children:"4. Detalhamento das Perdas Efetivas"})}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("p",{className:"text-xs text-gray-400",children:"Indique as 5 maiores perdas nos últimos 3 anos. Motivo: Mora, Falência, ações judiciais ou extrajudiciais."}),o.jsxs("button",{onClick:()=>{f(h=>({...h,maioresPerdas:[{razao_social:"Sem perdas no período",cnpj:"",exercicio:"",valor:"0",motivo:"Não houve perdas"}]}))},className:"ml-4 flex-shrink-0 text-xs text-gray-500 hover:text-green-600 border border-gray-200 hover:border-green-400 rounded-lg px-3 py-1.5 transition-colors flex items-center gap-1.5",children:[o.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),"Sem perdas neste período"]})]}),o.jsx("h4",{className:"text-sm font-bold text-navy",children:"4.1 Maiores Perdas"}),o.jsx(ua,{columns:[{key:"cnpj",label:"CNPJ",placeholder:"00.000.000/0000-00",type:"cnpj",cnpjLookupTarget:"razao_social"},{key:"razao_social",label:"Razão Social",placeholder:"Preenchido automaticamente"},{key:"exercicio",label:"Exercício",placeholder:"2024"},{key:"valor",label:"Valor (R$)",placeholder:"Valor"},{key:"motivo",label:"Motivo",placeholder:"Mora, Falência..."}],rows:c.maioresPerdas,onChange:(h,C,E)=>ne("maioresPerdas",h,C,E),onAdd:()=>$("maioresPerdas",{razao_social:"",cnpj:"",exercicio:"",valor:"",motivo:""}),onRemove:h=>me("maioresPerdas",h),maxRows:5})]}),u===4&&o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"flex items-center justify-between border-b pb-3",children:[o.jsx("h3",{className:"text-lg font-bold text-navy",children:"5. Distribuição de Atrasos"}),o.jsxs("button",{onClick:()=>f(h=>({...h,atrasos:h.atrasos.map(C=>({...C,valor_atraso:"0",pct_valor:"0",qtd_clientes:"0",pct_clientes:"0"}))})),className:"flex-shrink-0 text-xs text-gray-500 hover:text-green-600 border border-gray-200 hover:border-green-400 rounded-lg px-3 py-1.5 transition-colors flex items-center gap-1.5",children:[o.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),"Sem atrasos no período"]})]}),o.jsx(ua,{columns:[{key:"faixa_dias",label:"Dias de Atraso",readOnly:!0},{key:"valor_atraso",label:"Valor em Atraso (R$)",placeholder:"0"},{key:"pct_valor",label:"% Valor",readOnly:!0,placeholder:"Auto"},{key:"qtd_clientes",label:"Qtd Clientes",placeholder:"0"},{key:"pct_clientes",label:"% Clientes",readOnly:!0,placeholder:"Auto"}],rows:c.atrasos,onChange:(h,C,E)=>ne("atrasos",h,C,E)}),o.jsxs("div",{className:"border-t pt-4 mt-4",children:[o.jsx("h4",{className:"text-sm font-bold text-navy mb-2",children:"5.1 Abertura de Vencidos Acima de 180 Dias"}),o.jsx("p",{className:"text-xs text-gray-400 mb-2",children:"Detalhe os títulos vencidos há mais de 180 dias."})]}),o.jsx(ua,{columns:[{key:"cnpj",label:"CNPJ",placeholder:"00.000.000/0000-00",type:"cnpj",cnpjLookupTarget:"razao_social"},{key:"razao_social",label:"Razão Social",placeholder:"Preenchido automaticamente"},{key:"data_emissao",label:"Emissão",placeholder:"dd/mm/aaaa"},{key:"data_vencimento",label:"Vencimento",placeholder:"dd/mm/aaaa"},{key:"valor",label:"Valor (R$)",placeholder:"Valor"}],rows:c.atrasosDetalhados,onChange:(h,C,E)=>ne("atrasosDetalhados",h,C,E),onAdd:()=>$("atrasosDetalhados",{razao_social:"",cnpj:"",data_emissao:"",data_vencimento:"",valor:""}),onRemove:h=>me("atrasosDetalhados",h),addLabel:"Adicionar título vencido"})]}),u===5&&o.jsxs("div",{className:"space-y-4",children:[o.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"6. Amostra de Compradores"}),o.jsx("p",{className:"text-xs text-gray-400",children:"Informar até 20 compradores — maiores, médios e menores. Valores em R$."}),o.jsx(ua,{columns:[{key:"cnpj_codigo_fiscal",label:"CNPJ *",placeholder:"00.000.000/0000-00",type:"cnpj",cnpjLookupTarget:"razao_social",required:!0},{key:"razao_social",label:"Razão Social",placeholder:"Preenchido automaticamente"},{key:"faturamento_anual",label:"Fat. Anual (R$)",placeholder:"Valor"},{key:"limite_credito",label:"Limite Crédito (R$)",placeholder:"Valor"}],rows:c.amostraCompradores,onChange:(h,C,E)=>ne("amostraCompradores",h,C,E),onAdd:()=>$("amostraCompradores",{cnpj_codigo_fiscal:"",razao_social:"",faturamento_anual:"",limite_credito:""}),onRemove:h=>me("amostraCompradores",h),errors:g,maxRows:20,addLabel:"Adicionar comprador"}),o.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"* Faturamento anual: valor faturado para cada comprador. ** Limite de crédito rotativo: maior valor acumulado de créditos a receber no ano."}),o.jsx(du,{})]})]}),o.jsx($u,{step:u,totalSteps:ps.length,stepNames:ps,onPrev:H,onNext:pe,onSubmit:X,loading:b,isReview:z})]})]})}function du(){const s=[{num:"1",label:"Análise simultânea",text:"7 seguradoras consultadas ao mesmo tempo — Coface, Atradius, AVLA, Allianz Trade, AIG, CESCE e CHUBB",icon:o.jsx(o.Fragment,{children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})},{num:"2",label:"Comparativo técnico",text:"Nossa equipe negocia as melhores condições de cobertura, prêmio e serviço para o seu perfil",icon:o.jsx(o.Fragment,{children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})})},{num:"3",label:"Decisão estratégica",text:"Você recebe um comparativo exclusivo com recomendação técnica da Fairfield para a melhor escolha",icon:o.jsx(o.Fragment,{children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})})}];return o.jsxs("div",{className:"mt-6 rounded-2xl overflow-hidden border border-cobre/20 shadow-sm",children:[o.jsxs("div",{className:"bg-gradient-to-r from-navy to-[#0d1f3c] px-5 py-4 flex items-center gap-4",children:[o.jsx("div",{className:"w-14 h-14 bg-cobre/20 rounded-xl flex items-center justify-center flex-shrink-0",children:o.jsx("svg",{className:"w-8 h-8 text-cobre",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),o.jsxs("div",{children:[o.jsx("p",{className:"text-[10px] font-bold text-cobre uppercase tracking-widest mb-0.5",children:"O que acontece depois?"}),o.jsx("h4",{className:"text-base sm:text-lg font-bold text-white leading-tight",children:"O SENTINEL destrava oportunidades para você vender mais com segurança"})]})]}),o.jsx("div",{className:"bg-white px-5 py-4 grid grid-cols-1 sm:grid-cols-3 gap-3",children:s.map(n=>o.jsxs("div",{className:"flex flex-col gap-2 bg-gray-50 rounded-xl p-3 border border-gray-100",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("svg",{className:"w-5 h-5 text-cobre flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.icon}),o.jsx("span",{className:"text-xs font-bold text-navy",children:n.label})]}),o.jsx("p",{className:"text-xs text-gray-600 leading-relaxed",children:n.text})]},n.num))}),o.jsxs("div",{className:"bg-green-50 border-t border-green-200 px-5 py-3 flex items-start gap-2",children:[o.jsx("svg",{className:"w-4 h-4 text-green-600 flex-shrink-0 mt-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),o.jsxs("p",{className:"text-sm text-green-700",children:[o.jsx("strong",{children:"Estudo totalmente gratuito."})," O SENTINEL atua como suporte adicional à sua área de análise de crédito — mitigando riscos e destravando oportunidades para você vender mais com segurança."]})]})]})}function fs({icon:s,title:n,accent:l,children:u}){const m=l==="cobre"?"text-cobre bg-cobre/8":l==="green"?"text-green-600 bg-green-50":"text-navy bg-navy/5",c=l==="cobre"?"text-cobre":l==="green"?"text-green-700":"text-navy";return o.jsxs("div",{className:"rounded-xl border border-gray-100 overflow-hidden shadow-sm",children:[o.jsxs("div",{className:`px-4 py-2.5 flex items-center gap-2 ${m}`,children:[o.jsx("svg",{className:"w-4 h-4 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s}),o.jsx("h4",{className:`text-xs font-bold uppercase tracking-wide ${c}`,children:n})]}),o.jsx("div",{className:"bg-white divide-y divide-gray-50 px-4",children:u})]})}function ka({label:s,value:n,highlight:l}){return!n||n==="—"||n==="undefined"||n.toString().trim()===""?null:o.jsxs("div",{className:"py-2 flex flex-wrap items-baseline gap-x-3 gap-y-0.5 min-h-[2rem]",children:[o.jsx("span",{className:"text-xs text-gray-400 font-medium w-28 flex-shrink-0",children:s}),o.jsx("span",{className:`text-sm flex-1 ${l?"font-bold text-navy":"text-gray-700"}`,children:n})]})}const Mn="fairfield_intake_externo",gs=["Proponente","Faturamento","Destinos","Carteira","Perdas","Vencidos","Compradores"],Mg=["Até 10.000","De 10.001 a 50.000","De 50.001 a 200.000","De 200.001 a 500.000","De 500.001 a 1.000.000","Acima de 1.000.001"];function cu(){return{proponente:{razao_social:"",cnpj:"",setor:"",faturamento_pct:"",uf:""},contato:{nome:"",email:"",telefone:""},coSeguradas:[{empresa:"",cnpj:"",setor:"",faturamento_pct:""}],historicoFaturamento:[{ano:"2022",faturamento:"",perdas:""},{ano:"2023",faturamento:"",perdas:""},{ano:"2024",faturamento:"",perdas:""},{ano:"Próximos 12 meses",faturamento:"",perdas:""}],condicoesVenda:{pct_vista:"",pct_prazo:"",prazo_medio_dias:"",prazo_maximo_dias:"",faturamento_desejado_seguro:""},destinosExportacao:{anos_exportando:"",asia_pct:"",europa_pct:"",america_sul_pct:"",america_norte_pct:"",america_central_pct:"",africa_oceania_pct:"",menor_limite:"",maior_limite:"",num_importadores:"",principais_paises:""},carteiraRecebiveis:Mg.map(s=>({faixa:s,faturamento_total:"",pct_faturamento:"",num_clientes:"",pct_clientes:""})),maioresPerdas:[{importador:"",pais:"",exercicio:"",valor:"",motivo:""}],atrasos:[{faixa_dias:"Acima de 180 dias",valor_atraso:"",pct_valor:"",qtd_clientes:"",pct_clientes:""}],amostraCompradores:[{pais:"",razao_social:"",cnpj_codigo_fiscal:"",limite_credito:"",endereco:""}]}}function zg(){const{user:s,updateProspectPhase:n,authFetch:l}=ma(),[u,m]=v.useState(0),[c,f]=v.useState(()=>{const h=localStorage.getItem(Mn);return h?JSON.parse(h):cu()}),[g,x]=v.useState({}),[b,S]=v.useState(!1),[j,P]=v.useState(!1),[M,F]=v.useState(!1),[D,L]=v.useState(null),[B,O]=v.useState(null),[z,Y]=v.useState(!1);v.useEffect(()=>{localStorage.setItem(Mn,JSON.stringify(c))},[c]),v.useEffect(()=>{s&&n(s.email,"preenchendo_externo")},[]);function Q(h,C,E){f(T=>({...T,[h]:{...T[h],[C]:E}})),x(T=>{const U={...T};return delete U[`${h}.${C}`],U})}function ne(h,C,E,T){f(U=>{const N=[...U[h]];if(N[C]={...N[C],[E]:T},h==="carteiraRecebiveis"&&(E==="faturamento_total"||E==="num_clientes")){const _=N.reduce((W,Z)=>W+(parseFloat(String(Z.faturamento_total).replace(/\./g,"").replace(",","."))||0),0),re=N.reduce((W,Z)=>W+(parseInt(String(Z.num_clientes).replace(/\D/g,""))||0),0);N.forEach((W,Z)=>{const de=parseFloat(String(W.faturamento_total).replace(/\./g,"").replace(",","."))||0,le=parseInt(String(W.num_clientes).replace(/\D/g,""))||0;N[Z]={...N[Z],pct_faturamento:_>0?(de/_*100).toFixed(1):"",pct_clientes:re>0?(le/re*100).toFixed(1):""}})}return{...U,[h]:N}})}function $(h,C){f(E=>({...E,[h]:[...E[h],{...C}]}))}function me(h,C){f(E=>({...E,[h]:E[h].filter((T,U)=>U!==C)}))}function xe(h){const C={};if(h===0&&(c.proponente.razao_social.trim()||(C["proponente.razao_social"]="Obrigatório"),c.proponente.cnpj.replace(/\D/g,"").length!==14&&(C["proponente.cnpj"]="CNPJ inválido"),c.proponente.setor.trim()||(C["proponente.setor"]="Obrigatório"),c.contato.nome.trim()||(C["contato.nome"]="Obrigatório"),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.contato.email)||(C["contato.email"]="E-mail inválido")),h===6){const E=c.amostraCompradores.filter(T=>T.razao_social||T.limite_credito||T.pais);E.length===0?C.compradores="Informe pelo menos 1 importador":E.forEach((T,U)=>{(!T.cnpj_codigo_fiscal||T.cnpj_codigo_fiscal.trim().length<3)&&(C[`comprador_cnpj_${U}`]=`Código fiscal obrigatório para o importador ${U+1}`)})}return x(C),Object.keys(C).length>0&&h===6&&je.error("Preencha o código fiscal de todos os importadores informados"),Object.keys(C).length===0}function pe(){xe(u)&&m(h=>Math.min(h+1,gs.length-1))}function H(){Y(!1),m(h=>Math.max(h-1,0))}async function X(h){h==="review"?xe(u)&&Y(!0):(F(!0),window.scrollTo({top:0,behavior:"smooth"}))}async function K(h){L(h),S(!0);try{const C={tipo:"externo",...c,seguradoras:[],icoverAnalysis:h},T=await(s?l:Ke)("/api/leads",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(C)});if(!T.sucesso)throw new Error(T.mensagem);O(T.data),P(!0),F(!1),localStorage.removeItem(Mn),s&&n(s.email,"enviado_externo"),je.success("Solicitação enviada com sucesso!")}catch(C){je.error(C.message||"Erro ao enviar")}finally{S(!1)}}function se(){window.open("https://www.4score.com.br","_blank")}function ge(h){f(C=>({...C,proponente:{...C.proponente,razao_social:h.razao_social,uf:h.uf||C.proponente.uf}})),je.success(`Empresa: ${h.razao_social}`)}return j?o.jsx(qu,{result:B,tipo:"externo",onReset:()=>{P(!1),F(!1),L(null),m(0),f(cu()),O(null),Y(!1)}}):M?o.jsx("div",{className:"max-w-5xl mx-auto px-4 py-8",children:o.jsx(Wu,{formData:c,tipo:"externo",onComplete:K,onDecline:se})}):o.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[o.jsxs("div",{className:"text-center mb-6",children:[o.jsx("h2",{className:"text-3xl font-bold text-navy",children:"Crédito Externo"}),o.jsx("p",{className:"text-cobre text-sm font-semibold",children:"Operações de Exportação — Valores em US$"})]}),!z&&o.jsx(Bu,{step:u,steps:gs}),!z&&o.jsx(hg,{step:u}),o.jsxs("div",{className:"card",children:[z?o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"bg-gradient-to-r from-navy to-[#0d1f3c] rounded-xl px-5 py-4 flex items-center gap-4",children:[o.jsx("div",{className:"w-12 h-12 bg-green-400/20 rounded-xl flex items-center justify-center flex-shrink-0",children:o.jsx("svg",{className:"w-7 h-7 text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),o.jsxs("div",{children:[o.jsx("p",{className:"text-[10px] font-bold text-green-400 uppercase tracking-widest mb-0.5",children:"Quase lá!"}),o.jsx("h3",{className:"text-base sm:text-lg font-bold text-white leading-tight",children:"Revisão Final dos Dados"}),o.jsx("p",{className:"text-xs text-white/60",children:"Confirme as informações antes de enviar para as 7 seguradoras"})]})]}),o.jsxs(hs,{accent:"navy",title:"Proponente",icon:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"}),children:[o.jsx(da,{label:"Empresa",value:c.proponente.razao_social,highlight:!0}),o.jsx(da,{label:"CNPJ",value:c.proponente.cnpj}),o.jsx(da,{label:"Atividade",value:c.proponente.setor}),o.jsx(da,{label:"Anos exportando",value:c.destinosExportacao.anos_exportando}),o.jsx(da,{label:"Contato",value:c.contato.nome?`${c.contato.nome} · ${c.contato.email}`:""}),c.coSeguradas.filter(h=>h.empresa).length>0&&o.jsx(da,{label:"Co-seguradas",value:c.coSeguradas.filter(h=>h.empresa).map(h=>h.empresa).join(" · ")})]}),o.jsxs(hs,{accent:"cobre",title:"Faturamento e Condições (US$)",icon:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}),children:[c.historicoFaturamento.map(h=>o.jsx(da,{label:h.ano,value:h.faturamento?`US$ ${h.faturamento} · Perdas: ${h.perdas||"0"}`:""},h.ano)),o.jsx(da,{label:"Fat. desejado seguro",value:c.condicoesVenda.faturamento_desejado_seguro?`US$ ${c.condicoesVenda.faturamento_desejado_seguro}`:"",highlight:!0}),o.jsx(da,{label:"Condições",value:[c.condicoesVenda.pct_vista&&`Vista ${c.condicoesVenda.pct_vista}%`,c.condicoesVenda.pct_prazo&&`Prazo ${c.condicoesVenda.pct_prazo}%`,c.condicoesVenda.prazo_medio_dias&&`Médio ${c.condicoesVenda.prazo_medio_dias}d`].filter(Boolean).join(" · ")})]}),(c.destinosExportacao.asia_pct||c.destinosExportacao.europa_pct||c.destinosExportacao.america_sul_pct||c.destinosExportacao.principais_paises)&&o.jsxs(hs,{accent:"navy",title:"Destinos de Exportação",icon:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}),children:[o.jsx(da,{label:"Regiões",value:[c.destinosExportacao.asia_pct&&`Ásia ${c.destinosExportacao.asia_pct}%`,c.destinosExportacao.europa_pct&&`Europa ${c.destinosExportacao.europa_pct}%`,c.destinosExportacao.america_sul_pct&&`Am. Sul ${c.destinosExportacao.america_sul_pct}%`,c.destinosExportacao.america_norte_pct&&`Am. Norte ${c.destinosExportacao.america_norte_pct}%`,c.destinosExportacao.africa_oceania_pct&&`África/Oceania ${c.destinosExportacao.africa_oceania_pct}%`].filter(Boolean).join(" · ")}),o.jsx(da,{label:"Principais países",value:c.destinosExportacao.principais_paises}),o.jsx(da,{label:"Nº importadores",value:c.destinosExportacao.num_importadores})]}),c.amostraCompradores.filter(h=>h.razao_social).length>0&&o.jsx(hs,{accent:"cobre",title:"Amostra de Compradores",icon:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"}),children:c.amostraCompradores.filter(h=>h.razao_social).map((h,C)=>o.jsx(da,{label:h.razao_social,value:[h.pais,h.cnpj_codigo_fiscal&&`Tax ID: ${h.cnpj_codigo_fiscal}`,h.limite_credito&&`Lim: US$ ${h.limite_credito}`].filter(Boolean).join(" · ")},C))}),o.jsx(uu,{})]}):o.jsxs(o.Fragment,{children:[u===0&&o.jsxs("div",{className:"space-y-4",children:[o.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"1. Dados do Proponente"}),o.jsx(Vu,{value:c.proponente.cnpj,onChange:h=>Q("proponente","cnpj",h),onResult:ge,error:g["proponente.cnpj"]}),o.jsx(ye,{label:"Razão Social",value:c.proponente.razao_social,onChange:h=>Q("proponente","razao_social",h),required:!0,error:g["proponente.razao_social"]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[o.jsx(ye,{label:"Atividade da Empresa",value:c.proponente.setor,onChange:h=>Q("proponente","setor",h),required:!0,error:g["proponente.setor"]}),o.jsx(ye,{label:"Faturamento Empresa (%)",value:c.proponente.faturamento_pct,onChange:h=>Q("proponente","faturamento_pct",h),placeholder:"100%"})]}),o.jsx(ye,{label:"Há Quantos Anos Exporta",value:c.destinosExportacao.anos_exportando,onChange:h=>Q("destinosExportacao","anos_exportando",h),placeholder:"Ex: 5"}),o.jsx("div",{className:"border-t pt-4 mt-4",children:o.jsx("h4",{className:"text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide",children:"Contato Responsável"})}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[o.jsx(ye,{label:"Nome",value:c.contato.nome,onChange:h=>Q("contato","nome",h),required:!0,error:g["contato.nome"]}),o.jsx(ye,{label:"E-mail",value:c.contato.email,onChange:h=>Q("contato","email",h),type:"email",required:!0,error:g["contato.email"]}),o.jsx(ye,{label:"Telefone",value:c.contato.telefone,onChange:h=>Q("contato","telefone",Un(h)),placeholder:"(00) 00000-0000"})]}),o.jsx("div",{className:"border-t pt-4 mt-4",children:o.jsx("h4",{className:"text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide",children:"Co-Seguradas (opcional)"})}),o.jsx(ua,{columns:[{key:"cnpj",label:"CNPJ",type:"cnpj",cnpjLookupTarget:"empresa",placeholder:"00.000.000/0000-00"},{key:"empresa",label:"Empresa",placeholder:"Razão Social"},{key:"setor",label:"Setor"},{key:"faturamento_pct",label:"Fat. %",placeholder:"%"}],rows:c.coSeguradas,onChange:(h,C,E)=>ne("coSeguradas",h,C,E),onAdd:()=>$("coSeguradas",{empresa:"",cnpj:"",setor:"",faturamento_pct:""}),onRemove:h=>me("coSeguradas",h),maxRows:3})]}),u===1&&o.jsxs("div",{className:"space-y-4",children:[o.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"2. Histórico de Faturamento e Perdas"}),o.jsx("p",{className:"text-xs text-gray-400",children:"Valores em US$ (dólares americanos)."}),o.jsx(ua,{columns:[{key:"ano",label:"Período",readOnly:!0},{key:"faturamento",label:"Faturamento (US$)",placeholder:"Ex: 2,000,000"},{key:"perdas",label:"Perdas (US$)",placeholder:"Ex: 50,000"}],rows:c.historicoFaturamento,onChange:(h,C,E)=>ne("historicoFaturamento",h,C,E)}),(()=>{const h=c.historicoFaturamento.filter(_=>_.ano!=="Próximos 12 meses"),C=h.reduce((_,re)=>_+(parseFloat(String(re.faturamento).replace(/[^0-9.]/g,""))||0),0),E=h.reduce((_,re)=>_+(parseFloat(String(re.perdas).replace(/[^0-9.]/g,""))||0),0),T=C>0?E/C*100:null;if(T===null)return null;const U=T<2?"text-green-700 bg-green-50 border-green-200":T<5?"text-amber-700 bg-amber-50 border-amber-200":"text-red-700 bg-red-50 border-red-200",N=T<2?"Ótima sinistralidade":T<5?"Sinistralidade moderada":"Atenção: sinistralidade elevada";return o.jsxs("div",{className:`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-semibold ${U}`,children:[o.jsx("svg",{className:"w-4 h-4 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),"Sinistralidade histórica: ",o.jsxs("strong",{children:[T.toFixed(2),"%"]})," — ",N]})})(),o.jsx("div",{className:"border-t pt-4 mt-4",children:o.jsx("h4",{className:"text-sm font-bold text-navy mb-3",children:"2.1 Faturamento Anual Desejado para o Seguro"})}),o.jsx(ye,{label:"Valor (US$)",value:c.condicoesVenda.faturamento_desejado_seguro,onChange:h=>Q("condicoesVenda","faturamento_desejado_seguro",h),placeholder:"Ex: 5,000,000",hint:"Sobre este faturamento estimado incide o custo da apólice."}),o.jsx("div",{className:"border-t pt-4 mt-4",children:o.jsx("h4",{className:"text-sm font-bold text-navy mb-3",children:"3. Distribuição dos Prazos de Venda"})}),o.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[o.jsx(ye,{label:"À Vista (%)",value:c.condicoesVenda.pct_vista,onChange:h=>{Q("condicoesVenda","pct_vista",h);const C=parseFloat(h)||0;C>0&&C<=100&&!c.condicoesVenda.pct_prazo&&Q("condicoesVenda","pct_prazo",String(100-C))},placeholder:"%",hint:"Incluindo vendas com Carta de Crédito"}),o.jsx(ye,{label:"À Prazo (%)",value:c.condicoesVenda.pct_prazo,onChange:h=>Q("condicoesVenda","pct_prazo",h),placeholder:"%",hint:(()=>{const h=parseFloat(c.condicoesVenda.pct_vista)||0,C=parseFloat(c.condicoesVenda.pct_prazo)||0,E=h+C;return h>0&&C>0&&Math.abs(E-100)>.1?`⚠ Vista + Prazo = ${E.toFixed(0)}% (esperado 100%)`:null})()}),o.jsx(ye,{label:"Prazo Médio Crédito (dias)",value:c.condicoesVenda.prazo_medio_dias,onChange:h=>Q("condicoesVenda","prazo_medio_dias",h),placeholder:"Ex: 90"}),o.jsx(ye,{label:"Prazo Máximo Crédito (dias)",value:c.condicoesVenda.prazo_maximo_dias,onChange:h=>Q("condicoesVenda","prazo_maximo_dias",h),placeholder:"Ex: 180"})]})]}),u===2&&o.jsxs("div",{className:"space-y-4",children:[o.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"4. Principais Destinos de Exportação"}),o.jsx("p",{className:"text-xs text-gray-400 mb-2",children:"Distribua o percentual de faturamento por região."}),o.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:[o.jsx(ye,{label:"Ásia (%)",value:c.destinosExportacao.asia_pct,onChange:h=>Q("destinosExportacao","asia_pct",h),placeholder:"%"}),o.jsx(ye,{label:"Europa (%)",value:c.destinosExportacao.europa_pct,onChange:h=>Q("destinosExportacao","europa_pct",h),placeholder:"%"}),o.jsx(ye,{label:"América do Sul (%)",value:c.destinosExportacao.america_sul_pct,onChange:h=>Q("destinosExportacao","america_sul_pct",h),placeholder:"%"}),o.jsx(ye,{label:"América do Norte (%)",value:c.destinosExportacao.america_norte_pct,onChange:h=>Q("destinosExportacao","america_norte_pct",h),placeholder:"%"}),o.jsx(ye,{label:"América Central (%)",value:c.destinosExportacao.america_central_pct,onChange:h=>Q("destinosExportacao","america_central_pct",h),placeholder:"%"}),o.jsx(ye,{label:"África / Oceania (%)",value:c.destinosExportacao.africa_oceania_pct,onChange:h=>Q("destinosExportacao","africa_oceania_pct",h),placeholder:"%"})]}),o.jsx(ye,{label:"Principais Países Importadores",value:c.destinosExportacao.principais_paises,onChange:h=>Q("destinosExportacao","principais_paises",h),placeholder:"Ex: EUA, Argentina, China, Alemanha"}),o.jsx("div",{className:"border-t pt-4 mt-4",children:o.jsx("h4",{className:"text-sm font-bold text-navy mb-3",children:"4.1 Informações Adicionais"})}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[o.jsx(ye,{label:"Menor Limite de Crédito Individual (US$)",value:c.destinosExportacao.menor_limite,onChange:h=>Q("destinosExportacao","menor_limite",h),placeholder:"Ex: 10,000"}),o.jsx(ye,{label:"Maior Limite de Crédito Individual (US$)",value:c.destinosExportacao.maior_limite,onChange:h=>Q("destinosExportacao","maior_limite",h),placeholder:"Ex: 500,000"}),o.jsx(ye,{label:"Número Total de Importadores",value:c.destinosExportacao.num_importadores,onChange:h=>Q("destinosExportacao","num_importadores",h),placeholder:"Ex: 25"})]})]}),u===3&&o.jsxs("div",{className:"space-y-4",children:[o.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"4.2 Distribuição da Carteira de Recebíveis"}),o.jsx("p",{className:"text-xs text-gray-400",children:"Excluindo vendas para coligadas, PF, empresas públicas, à vista ou antecipadas."}),o.jsx(ua,{columns:[{key:"faixa",label:"Faixa de Valor (US$)",readOnly:!0},{key:"faturamento_total",label:"Fat. Total (US$)",placeholder:"Valor"},{key:"pct_faturamento",label:"% Fat.",readOnly:!0,placeholder:"Auto"},{key:"num_clientes",label:"Nº Clientes",placeholder:"Qtd"},{key:"pct_clientes",label:"% Clientes",readOnly:!0,placeholder:"Auto"}],rows:c.carteiraRecebiveis,onChange:(h,C,E)=>ne("carteiraRecebiveis",h,C,E)})]}),u===4&&o.jsxs("div",{className:"space-y-4",children:[o.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"5. Maiores Perdas"}),o.jsx("p",{className:"text-xs text-gray-400",children:"Indicar as 5 maiores nos últimos 3 anos. Motivo: Mora, Falência, ações judiciais/extrajudiciais."}),o.jsx("div",{className:"flex justify-end",children:o.jsxs("button",{type:"button",onClick:()=>f(h=>({...h,maioresPerdas:[{importador:"Sem perdas neste período",pais:"—",exercicio:"—",valor:"0",motivo:"—"}]})),className:"text-xs px-3 py-1.5 rounded-lg bg-green-50 text-green-700 border border-green-200 font-semibold hover:bg-green-100 transition-colors flex items-center gap-1.5",children:[o.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),"Sem perdas neste período"]})}),o.jsx(ua,{columns:[{key:"importador",label:"Importador",placeholder:"Nome da empresa"},{key:"pais",label:"País",placeholder:"País"},{key:"exercicio",label:"Exercício",placeholder:"2024"},{key:"valor",label:"Montante (US$)",placeholder:"Valor"},{key:"motivo",label:"Motivo",placeholder:"Mora, Falência..."}],rows:c.maioresPerdas,onChange:(h,C,E)=>ne("maioresPerdas",h,C,E),onAdd:()=>$("maioresPerdas",{importador:"",pais:"",exercicio:"",valor:"",motivo:""}),onRemove:h=>me("maioresPerdas",h),maxRows:5})]}),u===5&&o.jsxs("div",{className:"space-y-4",children:[o.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"6. Dívidas Vencidas Acima de 180 Dias"}),o.jsx("p",{className:"text-xs text-gray-400",children:"Excluindo vendas para coligadas, PF, empresas públicas, à vista ou antecipadas."}),o.jsx("div",{className:"flex justify-end",children:o.jsxs("button",{type:"button",onClick:()=>f(h=>({...h,atrasos:[{faixa_dias:"Acima de 180 dias",valor_atraso:"0",qtd_clientes:"0"}]})),className:"text-xs px-3 py-1.5 rounded-lg bg-green-50 text-green-700 border border-green-200 font-semibold hover:bg-green-100 transition-colors flex items-center gap-1.5",children:[o.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),"Sem atrasos no período"]})}),o.jsx(ua,{columns:[{key:"faixa_dias",label:"Período",readOnly:!0},{key:"valor_atraso",label:"Valor em Atraso (US$)",placeholder:"Valor"},{key:"qtd_clientes",label:"Qtd Clientes em Atraso",placeholder:"Qtd"}],rows:c.atrasos,onChange:(h,C,E)=>ne("atrasos",h,C,E)})]}),u===6&&o.jsxs("div",{className:"space-y-4",children:[o.jsx("h3",{className:"text-lg font-bold text-navy border-b pb-3",children:"7. Amostra de Compradores"}),o.jsx("p",{className:"text-xs text-gray-400",children:"Informar até 10 compradores — maiores, médios e menores. Valores em US$."}),o.jsx(ua,{columns:[{key:"pais",label:"País",placeholder:"País"},{key:"razao_social",label:"Razão Social",placeholder:"Nome"},{key:"cnpj_codigo_fiscal",label:"Código Fiscal *",placeholder:"Tax ID",required:!0},{key:"limite_credito",label:"Limite Crédito (US$)",placeholder:"Valor"},{key:"endereco",label:"Endereço Completo",placeholder:"Rua, cidade, país"}],rows:c.amostraCompradores,onChange:(h,C,E)=>ne("amostraCompradores",h,C,E),onAdd:()=>$("amostraCompradores",{pais:"",razao_social:"",cnpj_codigo_fiscal:"",limite_credito:"",endereco:""}),onRemove:h=>me("amostraCompradores",h),maxRows:10,addLabel:"Adicionar importador",errors:g}),o.jsx(uu,{})]})]}),o.jsx($u,{step:u,totalSteps:gs.length,stepNames:gs,onPrev:H,onNext:pe,onSubmit:X,loading:b,isReview:z})]})]})}function uu(){const s=[{num:"1",label:"Análise simultânea",text:"7 seguradoras consultadas ao mesmo tempo — Coface, Atradius, AVLA, Allianz Trade, AIG, CESCE e CHUBB",icon:o.jsx(o.Fragment,{children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})},{num:"2",label:"Comparativo técnico",text:"Nossa equipe negocia as melhores condições de cobertura, prêmio e serviço para o seu perfil de exportação",icon:o.jsx(o.Fragment,{children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})})},{num:"3",label:"Decisão estratégica",text:"Você recebe um comparativo exclusivo com recomendação técnica da Fairfield para a melhor escolha",icon:o.jsx(o.Fragment,{children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})})}];return o.jsxs("div",{className:"mt-2 rounded-2xl overflow-hidden border border-cobre/20 shadow-sm",children:[o.jsxs("div",{className:"bg-gradient-to-r from-navy to-[#0d1f3c] px-5 py-4 flex items-center gap-4",children:[o.jsx("div",{className:"w-14 h-14 bg-cobre/20 rounded-xl flex items-center justify-center flex-shrink-0",children:o.jsx("svg",{className:"w-8 h-8 text-cobre",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),o.jsxs("div",{children:[o.jsx("p",{className:"text-[10px] font-bold text-cobre uppercase tracking-widest mb-0.5",children:"O que acontece depois?"}),o.jsx("h4",{className:"text-base sm:text-lg font-bold text-white leading-tight",children:"O SENTINEL destrava oportunidades para você exportar mais com segurança"})]})]}),o.jsx("div",{className:"bg-white px-5 py-4 grid grid-cols-1 sm:grid-cols-3 gap-3",children:s.map(n=>o.jsxs("div",{className:"flex flex-col gap-2 bg-gray-50 rounded-xl p-3 border border-gray-100",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("svg",{className:"w-5 h-5 text-cobre flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:n.icon}),o.jsx("span",{className:"text-xs font-bold text-navy",children:n.label})]}),o.jsx("p",{className:"text-xs text-gray-600 leading-relaxed",children:n.text})]},n.num))}),o.jsxs("div",{className:"bg-green-50 border-t border-green-200 px-5 py-3 flex items-start gap-2",children:[o.jsx("svg",{className:"w-4 h-4 text-green-600 flex-shrink-0 mt-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}),o.jsxs("p",{className:"text-sm text-green-700",children:[o.jsx("strong",{children:"Estudo totalmente gratuito."})," O SENTINEL atua como suporte adicional à sua área de análise de crédito — mitigando riscos e destravando oportunidades para você vender mais com segurança."]})]})]})}function hs({icon:s,title:n,accent:l,children:u}){const m=l==="cobre"?"text-cobre bg-cobre/8":"text-navy bg-navy/5",c=l==="cobre"?"text-cobre":"text-navy";return o.jsxs("div",{className:"rounded-xl border border-gray-100 overflow-hidden shadow-sm",children:[o.jsxs("div",{className:`px-4 py-2.5 flex items-center gap-2 ${m}`,children:[o.jsx("svg",{className:"w-4 h-4 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:s}),o.jsx("h4",{className:`text-xs font-bold uppercase tracking-wide ${c}`,children:n})]}),o.jsx("div",{className:"bg-white divide-y divide-gray-50 px-4",children:u})]})}function da({label:s,value:n,highlight:l}){return!n||n.toString().trim()===""?null:o.jsxs("div",{className:"py-2 flex flex-wrap items-baseline gap-x-3 gap-y-0.5 min-h-[2rem]",children:[o.jsx("span",{className:"text-xs text-gray-400 font-medium w-28 flex-shrink-0",children:s}),o.jsx("span",{className:`text-sm flex-1 ${l?"font-bold text-navy":"text-gray-700"}`,children:n})]})}const Dg="/sentinel-fairfield/",Ig={cadastro:"bg-gray-100 text-gray-700",verificado:"bg-blue-100 text-blue-700",nda_aceito:"bg-purple-100 text-purple-700",preenchendo_interno:"bg-amber-100 text-amber-700",preenchendo_externo:"bg-amber-100 text-amber-700",enviado_interno:"bg-green-100 text-green-700",enviado_externo:"bg-green-100 text-green-700"},mu={cadastro:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",verificado:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",nda_aceito:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",preenchendo_interno:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",preenchendo_externo:"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",enviado_interno:"M5 13l4 4L19 7",enviado_externo:"M5 13l4 4L19 7"};function Fg(){const{getProspects:s,getAllUsers:n}=ma(),[l,u]=v.useState([]),[m,c]=v.useState("todos"),[f,g]=v.useState(""),[x,b]=v.useState("pipeline"),[S,j]=v.useState("prospects"),[P,M]=v.useState([]),[F,D]=v.useState({nome:"",email:""}),[L,B]=v.useState(!1);v.useEffect(()=>{const C=s();u(C.sort((E,T)=>new Date(T.updatedAt)-new Date(E.updatedAt))),O()},[]);async function O(){try{const E=await(await fetch("/api/admin/comerciais")).json();E.sucesso&&M(E.data)}catch{}}async function z(C){if(C.preventDefault(),!(!F.nome||!F.email)){B(!0);try{const T=await(await fetch("/api/admin/comerciais",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(F)})).json();T.sucesso?(je.success("Comercial adicionado!"),D({nome:"",email:""}),O()):je.error(T.mensagem||"Erro ao adicionar")}catch{je.error("Erro de conexão")}finally{B(!1)}}}async function Y(C){try{await fetch(`/api/admin/comerciais/${C}`,{method:"PUT"}),O()}catch{je.error("Erro ao atualizar")}}async function Q(C){try{await fetch(`/api/admin/comerciais/${C}`,{method:"DELETE"}),je.success("Removido"),O()}catch{je.error("Erro ao remover")}}const ne=l.length,$=l.filter(C=>C.fase!=="cadastro").length,me=l.filter(C=>!["cadastro","verificado"].includes(C.fase)).length,xe=l.filter(C=>C.fase.startsWith("preenchendo")).length,pe=l.filter(C=>C.fase.startsWith("enviado")).length,H=ne>0?(pe/ne*100).toFixed(1):"0",X=[{value:"todos",label:"Todos"},{value:"cadastro",label:"Cadastro"},{value:"verificado",label:"Verificado"},{value:"nda_aceito",label:"NDA Aceito"},{value:"preenchendo",label:"Preenchendo"},{value:"enviado",label:"Enviado"}],K=l.filter(C=>{var E,T,U;if(m!=="todos"&&(m==="preenchendo"&&!C.fase.startsWith("preenchendo")||m==="enviado"&&!C.fase.startsWith("enviado")||!["preenchendo","enviado","todos"].includes(m)&&C.fase!==m))return!1;if(f){const N=f.toLowerCase();return((E=C.nome)==null?void 0:E.toLowerCase().includes(N))||((T=C.empresa)==null?void 0:T.toLowerCase().includes(N))||((U=C.email)==null?void 0:U.toLowerCase().includes(N))}return!0}),se=[{key:"cadastro",title:"Cadastro",color:"border-gray-300",items:l.filter(C=>C.fase==="cadastro")},{key:"verificado",title:"Verificado",color:"border-blue-400",items:l.filter(C=>C.fase==="verificado")},{key:"nda_aceito",title:"NDA Aceito",color:"border-purple-400",items:l.filter(C=>C.fase==="nda_aceito")},{key:"preenchendo",title:"Preenchendo",color:"border-amber-400",items:l.filter(C=>C.fase.startsWith("preenchendo"))},{key:"enviado",title:"Enviado",color:"border-green-400",items:l.filter(C=>C.fase.startsWith("enviado"))}];function ge(C){return C?new Date(C).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"}):"—"}function h(C){return C?Math.floor((Date.now()-new Date(C).getTime())/(1e3*60*60*24)):0}return o.jsxs("div",{className:"max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8 space-y-6",children:[o.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-3",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("img",{src:`${Dg}logos/sentinel.png`,alt:"",className:"h-10 w-10 object-contain"}),o.jsxs("div",{children:[o.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-navy",children:"Dashboard Admin"}),o.jsx("p",{className:"text-xs text-gray-400",children:"Painel de acompanhamento de prospects"})]})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("button",{onClick:()=>j("prospects"),className:`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${S==="prospects"?"bg-navy text-white border-navy":"border-gray-300 text-gray-600 hover:border-navy"}`,children:"Prospects"}),o.jsxs("button",{onClick:()=>j("comerciais"),className:`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${S==="comerciais"?"bg-cobre text-white border-cobre":"border-gray-300 text-gray-600 hover:border-cobre"}`,children:["Comerciais ",P.length>0&&o.jsx("span",{className:"ml-1 bg-white/30 rounded-full px-1",children:P.length})]}),S==="prospects"&&o.jsxs(o.Fragment,{children:[o.jsx("button",{onClick:()=>b("pipeline"),className:`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${x==="pipeline"?"bg-navy text-white border-navy":"border-gray-300 text-gray-600 hover:border-navy"}`,children:"Pipeline"}),o.jsx("button",{onClick:()=>b("kanban"),className:`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${x==="kanban"?"bg-navy text-white border-navy":"border-gray-300 text-gray-600 hover:border-navy"}`,children:"Kanban"}),o.jsx("button",{onClick:()=>u(s().sort((C,E)=>new Date(E.updatedAt)-new Date(C.updatedAt))),className:"px-3 py-1.5 rounded-lg text-xs font-semibold border border-gray-300 text-gray-600 hover:border-navy transition-all",children:"Atualizar"})]})]})]}),S==="comerciais"&&o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"card p-5",children:[o.jsx("h3",{className:"text-sm font-bold text-navy mb-1",children:"Comerciais Responsáveis"}),o.jsx("p",{className:"text-xs text-gray-400 mb-4",children:"Estes contatos recebem cópia (CC) de cada nova cotação submetida no SENTINEL."}),o.jsxs("form",{onSubmit:z,className:"flex gap-2 mb-4 flex-wrap",children:[o.jsx("input",{className:"input-field flex-1 min-w-[160px]",placeholder:"Nome",value:F.nome,onChange:C=>D(E=>({...E,nome:C.target.value}))}),o.jsx("input",{className:"input-field flex-1 min-w-[200px]",placeholder:"E-mail",type:"email",value:F.email,onChange:C=>D(E=>({...E,email:C.target.value}))}),o.jsx("button",{type:"submit",disabled:L,className:"btn-primary px-4 py-2 text-sm whitespace-nowrap",children:L?"...":"+ Adicionar"})]}),P.length===0?o.jsx("p",{className:"text-xs text-gray-400 text-center py-6",children:"Nenhum comercial cadastrado. Adicione acima."}):o.jsxs("table",{className:"w-full text-sm",children:[o.jsx("thead",{children:o.jsxs("tr",{className:"bg-navy text-white text-xs",children:[o.jsx("th",{className:"px-3 py-2 text-left rounded-tl-lg",children:"Nome"}),o.jsx("th",{className:"px-3 py-2 text-left",children:"E-mail"}),o.jsx("th",{className:"px-3 py-2 text-center",children:"Status"}),o.jsx("th",{className:"px-3 py-2 rounded-tr-lg"})]})}),o.jsx("tbody",{children:P.map(C=>o.jsxs("tr",{className:"border-t border-gray-100 hover:bg-gray-50",children:[o.jsx("td",{className:"px-3 py-2.5 font-medium text-navy",children:C.nome}),o.jsx("td",{className:"px-3 py-2.5 text-gray-600",children:C.email}),o.jsx("td",{className:"px-3 py-2.5 text-center",children:o.jsx("button",{onClick:()=>Y(C.id),className:`text-xs px-2 py-0.5 rounded-full font-semibold ${C.ativo?"bg-green-100 text-green-700":"bg-gray-100 text-gray-500"}`,children:C.ativo?"Ativo":"Inativo"})}),o.jsx("td",{className:"px-3 py-2.5 text-right",children:o.jsx("button",{onClick:()=>Q(C.id),className:"text-red-400 hover:text-red-600 text-xs",children:"Remover"})})]},C.id))})]})]}),o.jsx("div",{className:"card p-4 border border-cobre/20 bg-cobre/5",children:o.jsxs("p",{className:"text-xs text-gray-600",children:[o.jsx("strong",{className:"text-cobre",children:"Como funciona:"})," A cada nova cotação enviada pelo SENTINEL, o email principal (broering.gomes@gmail.com) recebe o relatório completo em PDF + planilhas Excel. Os comerciais cadastrados aqui recebem cópia automática (CC)."]})})]}),S==="prospects"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3",children:[o.jsx(sr,{label:"Total Prospects",value:ne,icon:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",color:"text-navy",bg:"bg-navy/5"}),o.jsx(sr,{label:"Verificados",value:$,icon:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",color:"text-blue-600",bg:"bg-blue-50"}),o.jsx(sr,{label:"NDA Aceito",value:me,icon:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",color:"text-purple-600",bg:"bg-purple-50"}),o.jsx(sr,{label:"Preenchendo",value:xe,icon:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",color:"text-amber-600",bg:"bg-amber-50"}),o.jsx(sr,{label:"Enviados",value:pe,icon:"M5 13l4 4L19 7",color:"text-green-600",bg:"bg-green-50"}),o.jsx(sr,{label:"Conversao",value:`${H}%`,icon:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",color:"text-cobre",bg:"bg-cobre/5"})]}),o.jsxs("div",{className:"card",children:[o.jsx("h3",{className:"text-sm font-bold text-navy mb-4",children:"Funil de Conversao"}),o.jsx("div",{className:"space-y-2",children:[{label:"Cadastro",count:ne,color:"bg-gray-400"},{label:"Verificado",count:$,color:"bg-blue-500"},{label:"NDA Aceito",count:me,color:"bg-purple-500"},{label:"Preenchendo",count:xe,color:"bg-amber-500"},{label:"Enviado",count:pe,color:"bg-green-500"}].map(C=>o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"text-xs text-gray-500 w-24 text-right",children:C.label}),o.jsx("div",{className:"flex-1 h-7 bg-gray-100 rounded-full overflow-hidden",children:o.jsx("div",{className:`h-full ${C.color} rounded-full transition-all duration-700 flex items-center justify-end pr-2`,style:{width:`${ne>0?Math.max(3,C.count/ne*100):0}%`},children:C.count>0&&o.jsx("span",{className:"text-white text-[10px] font-bold",children:C.count})})}),o.jsxs("span",{className:"text-xs font-bold text-navy w-12 text-right",children:[ne>0?(C.count/ne*100).toFixed(0):0,"%"]})]},C.label))})]}),o.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[o.jsxs("div",{className:"relative flex-1 max-w-xs",children:[o.jsx("svg",{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),o.jsx("input",{className:"input-field pl-9 py-2 text-sm",placeholder:"Buscar por nome, empresa ou e-mail...",value:f,onChange:C=>g(C.target.value)})]}),o.jsx("div",{className:"flex gap-1.5 flex-wrap",children:X.map(C=>o.jsx("button",{onClick:()=>c(C.value),className:`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${m===C.value?"bg-navy text-white border-navy":"border-gray-200 text-gray-500 hover:border-navy"}`,children:C.label},C.value))})]}),x==="kanban"?o.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-5 gap-3",children:se.map(C=>o.jsxs("div",{className:`bg-gray-50 rounded-xl p-3 border-t-4 ${C.color}`,children:[o.jsxs("div",{className:"flex items-center justify-between mb-3",children:[o.jsx("h4",{className:"text-xs font-bold text-navy",children:C.title}),o.jsx("span",{className:"text-xs font-bold bg-white rounded-full w-6 h-6 flex items-center justify-center text-navy shadow-sm",children:C.items.length})]}),o.jsxs("div",{className:"space-y-2 max-h-96 overflow-y-auto",children:[C.items.map(E=>o.jsxs("div",{className:"bg-white rounded-lg p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow",children:[o.jsx("p",{className:"text-xs font-bold text-navy truncate",children:E.empresa}),o.jsx("p",{className:"text-[10px] text-gray-500 truncate",children:E.nome}),o.jsx("p",{className:"text-[10px] text-gray-400 mt-1",children:ge(E.updatedAt)})]},E.id)),C.items.length===0&&o.jsx("p",{className:"text-[10px] text-gray-400 text-center py-4",children:"Nenhum prospect"})]})]},C.key))}):o.jsx("div",{className:"overflow-x-auto",children:K.length===0?o.jsxs("div",{className:"card text-center py-12",children:[o.jsx("svg",{className:"w-12 h-12 text-gray-300 mx-auto mb-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"})}),o.jsx("p",{className:"text-gray-400 text-sm",children:"Nenhum prospect encontrado"}),o.jsx("p",{className:"text-gray-300 text-xs mt-1",children:"Os prospects aparecerão aqui conforme acessarem o sistema"})]}):o.jsxs("table",{className:"w-full bg-white rounded-xl shadow-sm border border-gray-100",children:[o.jsx("thead",{children:o.jsxs("tr",{className:"bg-navy text-white text-left text-xs",children:[o.jsx("th",{className:"px-4 py-3 rounded-tl-xl",children:"Empresa"}),o.jsx("th",{className:"px-4 py-3",children:"Contato"}),o.jsx("th",{className:"px-4 py-3",children:"E-mail"}),o.jsx("th",{className:"px-4 py-3",children:"Telefone"}),o.jsx("th",{className:"px-4 py-3",children:"Fase"}),o.jsx("th",{className:"px-4 py-3",children:"Cadastro"}),o.jsx("th",{className:"px-4 py-3",children:"Atualizado"}),o.jsx("th",{className:"px-4 py-3 rounded-tr-xl",children:"Dias"})]})}),o.jsx("tbody",{children:K.map(C=>o.jsxs("tr",{className:"border-t border-gray-50 hover:bg-gray-50 transition-colors",children:[o.jsx("td",{className:"px-4 py-3",children:o.jsx("span",{className:"font-semibold text-navy text-sm",children:C.empresa||"—"})}),o.jsx("td",{className:"px-4 py-3 text-sm",children:C.nome}),o.jsx("td",{className:"px-4 py-3 text-xs text-gray-500",children:C.email}),o.jsx("td",{className:"px-4 py-3 text-xs text-gray-500",children:C.telefone}),o.jsx("td",{className:"px-4 py-3",children:o.jsxs("span",{className:`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${Ig[C.fase]||"bg-gray-100 text-gray-700"}`,children:[o.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:mu[C.fase]||mu.cadastro})}),C.faseLabel||C.fase]})}),o.jsx("td",{className:"px-4 py-3 text-xs text-gray-500",children:ge(C.createdAt)}),o.jsx("td",{className:"px-4 py-3 text-xs text-gray-500",children:ge(C.updatedAt)}),o.jsx("td",{className:"px-4 py-3",children:o.jsxs("span",{className:`text-xs font-bold ${h(C.createdAt)>7?"text-red-600":h(C.createdAt)>3?"text-amber-600":"text-green-600"}`,children:[h(C.createdAt),"d"]})})]},C.id))})]})})]})]})}function sr({label:s,value:n,icon:l,color:u,bg:m}){return o.jsxs("div",{className:"card text-center p-3 sm:p-4",children:[o.jsx("div",{className:`w-10 h-10 ${m} rounded-full flex items-center justify-center mx-auto mb-2`,children:o.jsx("svg",{className:`w-5 h-5 ${u}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:l})})}),o.jsx("p",{className:`text-2xl sm:text-3xl font-bold ${u}`,children:n}),o.jsx("p",{className:"text-[10px] sm:text-xs text-gray-500 mt-1",children:s})]})}const _g="/sentinel-fairfield/",Og=["AIG","Atradius","Coface","Allianz Trade","AVLA","CESCE"];function Tg(){const{getProspects:s}=ma(),[n,l]=v.useState([]),[u,m]=v.useState("30");v.useEffect(()=>{l(s())},[]);const c=Date.now(),f=c-parseInt(u)*24*60*60*1e3,g=n.filter(z=>new Date(z.createdAt).getTime()>=f),x=g.length,b=g.filter(z=>z.fase.startsWith("enviado")).length,S=g.filter(z=>(c-new Date(z.updatedAt).getTime())/864e5>7&&!z.fase.startsWith("enviado")).length,j=x-b-S,P=b>0?"2.3":"—",M=x>0?(b/x*100).toFixed(1):"0",F=x>0?(S/x*100).toFixed(1):"0",D=[{phase:"Cadastro > Verificacao",target:"5 min",actual:"3 min",status:"ok"},{phase:"Verificacao > NDA",target:"10 min",actual:"6 min",status:"ok"},{phase:"NDA > Inicio Preenchimento",target:"1 dia",actual:"0.5 dia",status:"ok"},{phase:"Preenchimento Completo",target:"3 dias",actual:"2.3 dias",status:"ok"},{phase:"Envio > Resposta Seguradora",target:"10 dias",actual:"7 dias",status:"warning"}],L=Og.map(z=>({name:z,sent:Math.floor(Math.random()*10)+b,pending:Math.floor(Math.random()*5),avgDays:(Math.random()*8+3).toFixed(1),maxDays:Math.floor(Math.random()*12)+3,responseRate:(70+Math.random()*30).toFixed(0)})),B=Array.from({length:7},(z,Y)=>{const Q=new Date(c-(6-Y)*24*60*60*1e3);return{day:Q.toLocaleDateString("pt-BR",{weekday:"short",day:"2-digit"}),cadastros:g.filter(ne=>new Date(ne.createdAt).toDateString()===Q.toDateString()).length}}),O=Math.max(...B.map(z=>z.cadastros),1);return o.jsxs("div",{className:"max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8 space-y-6",children:[o.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-3",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("img",{src:`${_g}logos/sentinel.png`,alt:"",className:"h-10 w-10 object-contain"}),o.jsxs("div",{children:[o.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-navy",children:"Painel de SLA"}),o.jsx("p",{className:"text-xs text-gray-400",children:"Metricas de desempenho e acompanhamento"})]})]}),o.jsx("div",{className:"flex gap-2",children:[{v:"7",l:"7 dias"},{v:"30",l:"30 dias"},{v:"90",l:"90 dias"}].map(z=>o.jsx("button",{onClick:()=>m(z.v),className:`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${u===z.v?"bg-navy text-white border-navy":"border-gray-300 text-gray-600 hover:border-navy"}`,children:z.l},z.v))})]}),o.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3",children:[o.jsx(ir,{label:"Total Prospects",value:x,color:"text-navy",bg:"bg-navy/5",trend:"+12%"}),o.jsx(ir,{label:"Concluidos",value:b,color:"text-green-600",bg:"bg-green-50",trend:`${M}%`}),o.jsx(ir,{label:"Em Andamento",value:j,color:"text-blue-600",bg:"bg-blue-50"}),o.jsx(ir,{label:"Abandonados",value:S,color:"text-red-600",bg:"bg-red-50",trend:`${F}%`}),o.jsx(ir,{label:"Tempo Medio",value:P,suffix:"dias",color:"text-purple-600",bg:"bg-purple-50"}),o.jsx(ir,{label:"Taxa Conversao",value:`${M}%`,color:"text-cobre",bg:"bg-cobre/5"})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[o.jsxs("div",{className:"card",children:[o.jsxs("h3",{className:"text-sm font-bold text-navy mb-4 flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4 text-cobre",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),"SLA por Fase"]}),o.jsx("div",{className:"space-y-3",children:D.map(z=>o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsxs("div",{className:"flex-1",children:[o.jsx("p",{className:"text-xs font-medium text-navy",children:z.phase}),o.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[o.jsxs("span",{className:"text-[10px] text-gray-400",children:["Meta: ",z.target]}),o.jsx("span",{className:"text-[10px] text-gray-300",children:"|"}),o.jsxs("span",{className:`text-[10px] font-semibold ${z.status==="ok"?"text-green-600":"text-amber-600"}`,children:["Atual: ",z.actual]})]})]}),o.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center ${z.status==="ok"?"bg-green-100":"bg-amber-100"}`,children:z.status==="ok"?o.jsx("svg",{className:"w-4 h-4 text-green-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})}):o.jsx("svg",{className:"w-4 h-4 text-amber-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"})})})]},z.phase))})]}),o.jsxs("div",{className:"card",children:[o.jsxs("h3",{className:"text-sm font-bold text-navy mb-4 flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4 text-cobre",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),"Atividade Diaria (Ultimos 7 dias)"]}),o.jsx("div",{className:"flex items-end justify-between gap-2 h-40 px-2",children:B.map(z=>o.jsxs("div",{className:"flex flex-col items-center gap-1 flex-1",children:[o.jsx("span",{className:"text-[10px] font-bold text-navy",children:z.cadastros}),o.jsx("div",{className:"w-full rounded-t-lg bg-gradient-to-t from-cobre to-[#D4944A] transition-all duration-500",style:{height:`${Math.max(8,z.cadastros/O*100)}%`}}),o.jsx("span",{className:"text-[9px] text-gray-400",children:z.day})]},z.day))})]})]}),o.jsxs("div",{children:[o.jsxs("h3",{className:"text-sm font-bold text-navy mb-4 flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4 text-cobre",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"})}),"SLA por Seguradora"]}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:L.map(z=>o.jsxs("div",{className:"card hover:shadow-md transition-shadow",children:[o.jsxs("div",{className:"flex items-center justify-between mb-3",children:[o.jsx("h4",{className:"font-bold text-navy text-sm",children:z.name}),o.jsx($g,{dias:z.maxDays})]}),o.jsxs("div",{className:"space-y-2 text-sm",children:[o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{className:"text-gray-500 text-xs",children:"Enviadas"}),o.jsx("span",{className:"font-semibold text-xs",children:z.sent})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{className:"text-gray-500 text-xs",children:"Pendentes"}),o.jsx("span",{className:"font-semibold text-xs text-amber-600",children:z.pending})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{className:"text-gray-500 text-xs",children:"Prazo Medio"}),o.jsxs("span",{className:"font-semibold text-xs",children:[z.avgDays,"d"]})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{className:"text-gray-500 text-xs",children:"Max. Aberto"}),o.jsxs("span",{className:`font-bold text-xs ${z.maxDays>10?"text-red-600":z.maxDays>5?"text-amber-600":"text-green-600"}`,children:[z.maxDays,"d"]})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{className:"text-gray-500 text-xs",children:"Taxa Resposta"}),o.jsxs("span",{className:"font-semibold text-xs text-green-600",children:[z.responseRate,"%"]})]})]}),z.sent>0&&o.jsx("div",{className:"mt-3 h-2 bg-gray-100 rounded-full overflow-hidden",children:o.jsx("div",{className:`h-full rounded-full transition-all duration-500 ${z.maxDays>10?"bg-red-500":z.maxDays>5?"bg-amber-500":"bg-green-500"}`,style:{width:`${Math.min(100,z.pending/Math.max(z.sent,1)*100)}%`}})})]},z.name))})]})]})}function ir({label:s,value:n,color:l,bg:u,trend:m,suffix:c}){return o.jsxs("div",{className:"card text-center p-3 sm:p-4",children:[o.jsxs("p",{className:`text-2xl sm:text-3xl font-bold ${l}`,children:[n,c&&o.jsx("span",{className:"text-sm font-normal ml-1",children:c})]}),o.jsx("p",{className:"text-[10px] sm:text-xs text-gray-500 mt-1",children:s}),m&&o.jsx("p",{className:`text-[10px] font-semibold mt-1 ${l}`,children:m})]})}function $g({dias:s}){return s<=0?o.jsx("span",{className:"inline-block w-3 h-3 rounded-full bg-gray-300"}):s<5?o.jsx("span",{className:"inline-block w-3 h-3 rounded-full bg-green-500"}):s<=10?o.jsx("span",{className:"inline-block w-3 h-3 rounded-full bg-amber-500 animate-pulse"}):o.jsx("span",{className:"inline-block w-3 h-3 rounded-full bg-red-500 animate-pulse"})}const Bg=`
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
`;function qg(){return o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M19 12H5"}),o.jsx("path",{d:"M12 19l-7-7 7-7"})]})}function pu(){return o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M22 2L11 13"}),o.jsx("path",{d:"M22 2l-7 20-4-9-9-4 20-7z"})]})}function fu({size:s=20}){return o.jsxs("svg",{width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M3 18v-6a9 9 0 0 1 18 0v6"}),o.jsx("path",{d:"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"})]})}function Vg(){return o.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M18 6L6 18"}),o.jsx("path",{d:"M6 6l12 12"})]})}function Ug(){return o.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 40 40",fill:"none",children:[o.jsx("circle",{cx:"20",cy:"12",r:"6",fill:"#7DD3FC",opacity:"0.9"}),o.jsx("path",{d:"M8 36 C8 26 14 22 20 22 C26 22 32 26 32 36",fill:"#7DD3FC",opacity:"0.7"}),o.jsx("path",{d:"M20 22 L18 28 L20 32 L22 28 Z",fill:"#0a0f1e",opacity:"0.8"}),o.jsx("path",{d:"M15 22 L20 25 L25 22",stroke:"#0a0f1e",strokeWidth:"1",fill:"none",opacity:"0.6"})]})}function gu(){return o.jsx("div",{className:"w-8 h-8 rounded-full bg-sentinel/20 border border-sentinel/30 flex items-center justify-center flex-shrink-0",children:o.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 40 40",fill:"none",children:[o.jsx("circle",{cx:"20",cy:"11",r:"5",fill:"#7DD3FC",opacity:"0.8"}),o.jsx("path",{d:"M10 34 C10 26 14 22 20 22 C26 22 30 26 30 34",fill:"#7DD3FC",opacity:"0.6"}),o.jsx("path",{d:"M20 22 L18.5 27 L20 30 L21.5 27 Z",fill:"#0a0f1e",opacity:"0.7"})]})})}const Wg=[{keywords:["oi","ola","hey","eai","e ai","fala"],category:"saudacao",answer:`Olá! 👋 Sou o **iCover**, especialista em **Seguro de Crédito**.

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

Sobre qual tema posso te orientar?`}];function hu(s){return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\w\s]/g,"").trim()}function Gg(s,n=[]){const l=hu(s),u=l.split(/\s+/).filter(g=>g.length>1);let m=0,c=null;const f=n.filter(g=>g.category).slice(-5).map(g=>g.category);for(const g of Wg){let x=0;for(const b of g.keywords){const S=hu(b),j=S.split(/\s+/);l.includes(S)&&(x+=j.length*3);for(const P of j)for(const M of u)(M.startsWith(P)||P.startsWith(M))&&(x+=1)}x>0&&f.includes(g.category)&&(x+=.5),x>m&&(m=x,c=g)}return m>=1&&c?{answer:c.answer,category:c.category}:{answer:`Desculpe, não encontrei informações específicas sobre isso na minha base de conhecimento.

Posso te ajudar com:
• **Conceitos** de Seguro de Crédito
• **Coberturas** (Whole Turnover, Key Buyer, etc.)
• **Seguradoras** (Allianz Trade, Coface, Atradius, etc.)
• **Preços e taxas**
• **Legislação** (SUSEP, leis)
• **Processo** de contratação e sinistro

Tente reformular sua pergunta ou escolha um dos temas acima!

Ou, se preferir, clique em **"Fale com um especialista"** para conversar com nossa equipe.`,category:"fallback"}}function Hg(s){const n=s.split(`
`),l=[];let u=[],m=0;function c(g){const x=[],b=/\*\*(.+?)\*\*/g;let S=0,j;for(;(j=b.exec(g))!==null;)j.index>S&&x.push(g.slice(S,j.index)),x.push(o.jsx("strong",{className:"font-semibold text-white",children:j[1]},`b-${j.index}`)),S=b.lastIndex;return S<g.length&&x.push(g.slice(S)),x.length>0?x:[g]}function f(){if(u.length===0)return;const g=u[0].split("|").filter(b=>b.trim()),x=u.slice(2);l.push(o.jsx("div",{className:"overflow-x-auto my-2",children:o.jsxs("table",{className:"w-full text-xs border-collapse",children:[o.jsx("thead",{children:o.jsx("tr",{children:g.map((b,S)=>o.jsx("th",{className:"border border-white/10 px-2 py-1 text-left text-white/80 bg-white/[0.04]",children:c(b.trim())},S))})}),o.jsx("tbody",{children:x.map((b,S)=>{const j=b.split("|").filter(P=>P.trim());return o.jsx("tr",{children:j.map((P,M)=>o.jsx("td",{className:"border border-white/10 px-2 py-1 text-white/60",children:c(P.trim())},M))},S)})})]})},`table-${m++}`)),u=[]}for(let g=0;g<n.length;g++){const x=n[g];if(x.includes("|")&&x.trim().startsWith("|")){u.push(x),(g===n.length-1||!n[g+1].includes("|")||!n[g+1].trim().startsWith("|"))&&f();continue}else u.length>0&&f();if(x.trim()===""){l.push(o.jsx("div",{className:"h-2"},`br-${g}`));continue}if(x.trim().startsWith("• ")||x.trim().startsWith("- ")){const S=x.trim().replace(/^[•\-]\s*/,"");l.push(o.jsxs("div",{className:"flex gap-2 ml-2 my-0.5",children:[o.jsx("span",{className:"text-sentinel mt-0.5",children:"•"}),o.jsx("span",{children:c(S)})]},`li-${g}`));continue}const b=x.trim().match(/^(\d+)\.\s+(.*)/);if(b){l.push(o.jsxs("div",{className:"flex gap-2 ml-2 my-0.5",children:[o.jsxs("span",{className:"text-sentinel/70 font-mono text-xs mt-0.5",children:[b[1],"."]}),o.jsx("span",{children:c(b[2])})]},`ol-${g}`));continue}if(x.trim().match(/^\*\*.*\*\*$/)){l.push(o.jsx("div",{className:"mt-2 mb-1",children:c(x.trim())},`h-${g}`));continue}l.push(o.jsx("div",{className:"my-0.5",children:c(x)},`p-${g}`))}return u.length>0&&f(),l}const Qg=`Olá! Eu sou o **iCover** — o **Oráculo de Inteligência em Seguro de Crédito** mais completo do mercado brasileiro. 🛡️

Fui desenvolvido pela **Fairfield** com o conhecimento mais profundo e abrangente sobre seguros financeiros do Brasil.

**Minha expertise abrange:**
• Clausulados completos de todas as seguradoras
• Estruturação para **FIDCs** e operações estruturadas
• Estratégias inovadoras e soluções sob medida
• Legislação e regulamentação (SUSEP, CVM, CNSP)
• Análise de grandes riscos e operações complexas
• 7 seguradoras comparadas em detalhes

Pergunte-me qualquer coisa sobre **Seguro de Crédito** — eu tenho a resposta. 🎯`,Jg=["Como posso garantir minhas vendas com o Seguro de Crédito?","Quanto custa um Seguro de Crédito?","Como funciona seguro de crédito para FIDCs?","Quais as cláusulas mais importantes da apólice?","Como funciona para grandes riscos acima de R$ 50M?","Quais seguradoras operam no Brasil?"];function xu(){Wa();const[s,n]=v.useState([{id:1,sender:"bot",text:Qg,category:"saudacao"}]),[l,u]=v.useState(""),[m,c]=v.useState(!1),[f,g]=v.useState(!0),[x,b]=v.useState(!1),[S,j]=v.useState([{id:1,sender:"bot",text:"Olá! Sou da equipe de especialistas da Fairfield. Como posso te ajudar?"}]),[P,M]=v.useState(""),F=v.useRef(null),D=v.useRef(null),L=v.useRef(null),B=v.useRef(null);v.useEffect(()=>{var $;($=F.current)==null||$.scrollIntoView({behavior:"smooth"})},[s,m]),v.useEffect(()=>{var $;($=B.current)==null||$.scrollIntoView({behavior:"smooth"})},[S]);const O=v.useCallback($=>{const me=($||l).trim();if(!me)return;const xe={id:Date.now(),sender:"user",text:me};n(pe=>[...pe,xe]),u(""),g(!1),c(!0),setTimeout(()=>{const{answer:pe,category:H}=Gg(me,s),X={id:Date.now()+1,sender:"bot",text:pe,category:H};n(K=>[...K,X]),c(!1)},800+Math.random()*600)},[l,s]),z=$=>{$.key==="Enter"&&!$.shiftKey&&($.preventDefault(),O())},Y=$=>{O($)},Q=()=>{const $=P.trim();if(!$)return;const me={id:Date.now(),sender:"user",text:$};j(xe=>[...xe,me]),M(""),setTimeout(()=>{const xe={id:Date.now()+1,sender:"bot",text:"Obrigado pela mensagem! Um de nossos especialistas vai te responder em instantes."};j(pe=>[...pe,xe])},1200)},ne=$=>{$.key==="Enter"&&!$.shiftKey&&($.preventDefault(),Q())};return o.jsxs("div",{className:"min-h-screen bg-navy flex flex-col",children:[o.jsx("style",{children:Bg}),o.jsx("header",{className:"bg-navy-surface border-b border-white/[0.06] px-4 py-3",children:o.jsxs("div",{className:"max-w-3xl mx-auto flex items-center gap-3",children:[o.jsx(Xe,{to:"/",className:"text-white/40 hover:text-white/70 transition-colors",children:o.jsx(qg,{})}),o.jsxs("div",{className:"flex items-center gap-1.5",children:[o.jsx(xo,{size:22}),o.jsx("span",{className:"text-[10px] font-mono text-sentinel/60 tracking-widest uppercase",children:"SENTINEL"})]}),o.jsx("div",{className:"w-px h-6 bg-white/10 mx-1"}),o.jsx("div",{className:"w-9 h-9 rounded-full bg-gradient-to-br from-sentinel/20 to-sentinel/5 border border-sentinel/30 flex items-center justify-center",children:o.jsx(Ug,{})}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("h1",{className:"text-sm font-semibold text-white",children:"iCover"}),o.jsxs("span",{className:"flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20",children:[o.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-green"}),o.jsx("span",{className:"text-[9px] text-emerald-400 font-medium",children:"Online"})]})]}),o.jsx("p",{className:"text-[11px] text-white/40 truncate",children:"IA Especialista em Seguro de Crédito"})]}),o.jsxs(Xe,{to:"/cotacao/interno",className:"hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sentinel/10 border border-sentinel/20 text-sentinel text-xs font-medium hover:bg-sentinel/20 transition-colors",children:[o.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),o.jsx("polyline",{points:"14 2 14 8 20 8"}),o.jsx("line",{x1:"12",y1:"18",x2:"12",y2:"12"}),o.jsx("line",{x1:"9",y1:"15",x2:"15",y2:"15"})]}),"Fazer Cotação"]})]})}),o.jsx("main",{className:"flex-1 overflow-y-auto px-4 py-6",children:o.jsxs("div",{className:"max-w-3xl mx-auto space-y-4",children:[s.map($=>o.jsxs("div",{className:`flex gap-2.5 msg-enter ${$.sender==="user"?"justify-end":"justify-start"}`,children:[$.sender==="bot"&&o.jsx(gu,{}),o.jsx("div",{className:`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${$.sender==="bot"?"bg-white/[0.03] border border-white/[0.06] text-white/70 rounded-tl-md":"bg-sentinel/15 border border-sentinel/20 text-white rounded-tr-md"}`,children:$.sender==="bot"?Hg($.text):$.text})]},$.id)),f&&s.length===1&&o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 fade-in",children:Jg.map(($,me)=>o.jsx("button",{onClick:()=>Y($),className:"text-left px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-white/50 text-sm hover:bg-white/[0.05] hover:text-white/70 hover:border-white/[0.12] transition-all duration-200",children:$},me))}),m&&o.jsxs("div",{className:"flex gap-2.5 justify-start msg-enter",children:[o.jsx(gu,{}),o.jsxs("div",{className:"bg-white/[0.03] border border-white/[0.06] rounded-2xl rounded-tl-md px-4 py-3 flex items-center gap-1.5",children:[o.jsx("span",{className:"typing-dot w-2 h-2 rounded-full bg-sentinel/60 inline-block"}),o.jsx("span",{className:"typing-dot w-2 h-2 rounded-full bg-sentinel/60 inline-block"}),o.jsx("span",{className:"typing-dot w-2 h-2 rounded-full bg-sentinel/60 inline-block"})]})]}),o.jsx("div",{ref:F})]})}),o.jsx("footer",{className:"border-t border-white/[0.06] bg-navy-surface px-4 py-3",children:o.jsxs("div",{className:"max-w-3xl mx-auto",children:[o.jsxs("div",{className:"flex gap-2 items-end",children:[o.jsx("textarea",{ref:D,value:l,onChange:$=>u($.target.value),onKeyDown:z,placeholder:"Pergunte qualquer coisa sobre Seguro de Crédito...",rows:1,className:"flex-1 bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 resize-none focus:outline-none focus:border-sentinel/30 focus:ring-1 focus:ring-sentinel/10 transition-colors",style:{minHeight:"42px",maxHeight:"120px"},onInput:$=>{$.target.style.height="42px",$.target.style.height=Math.min($.target.scrollHeight,120)+"px"}}),o.jsx("button",{onClick:()=>O(),disabled:!l.trim()||m,className:"w-10 h-10 rounded-xl bg-sentinel/20 border border-sentinel/30 text-sentinel flex items-center justify-center hover:bg-sentinel/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0",children:o.jsx(pu,{})})]}),o.jsxs("button",{onClick:()=>b(!0),className:"mt-3 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium hover:bg-emerald-500/20 transition-colors headphone-pulse",children:[o.jsx(fu,{size:16}),"Fale com um de nossos especialistas"]}),o.jsx("p",{className:"text-center text-[10px] text-white/20 mt-3 font-mono",children:"Powered by SENTINEL | Fairfield"})]})}),x&&o.jsx("div",{className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 fade-in",children:o.jsxs("div",{className:"w-full sm:w-[420px] max-h-[80vh] bg-navy-surface border border-white/[0.08] rounded-t-2xl sm:rounded-2xl flex flex-col overflow-hidden shadow-2xl",children:[o.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-emerald-500/5",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"w-9 h-9 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400",children:o.jsx(fu,{size:18})}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-sm font-semibold text-white",children:"Suporte Fairfield"}),o.jsxs("div",{className:"flex items-center gap-1.5",children:[o.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-green"}),o.jsx("span",{className:"text-[10px] text-emerald-400/70",children:"Especialistas online"})]})]})]}),o.jsx("button",{onClick:()=>b(!1),className:"w-8 h-8 rounded-lg flex items-center justify-center text-white/30 hover:text-white/60 hover:bg-white/5 transition-colors",children:o.jsx(Vg,{})})]}),o.jsxs("div",{className:"flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-[200px] max-h-[50vh]",children:[S.map($=>o.jsx("div",{className:`flex msg-enter ${$.sender==="user"?"justify-end":"justify-start"}`,children:o.jsx("div",{className:`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm ${$.sender==="bot"?"bg-emerald-500/10 border border-emerald-500/15 text-white/70 rounded-tl-md":"bg-white/[0.06] border border-white/[0.08] text-white rounded-tr-md"}`,children:$.text})},$.id)),o.jsx("div",{ref:B})]}),o.jsxs("div",{className:"border-t border-white/[0.06] px-4 py-3 flex gap-2",children:[o.jsx("input",{ref:L,type:"text",value:P,onChange:$=>M($.target.value),onKeyDown:ne,placeholder:"Digite sua mensagem...",className:"flex-1 bg-white/[0.03] border border-white/[0.08] rounded-xl px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-emerald-500/30 transition-colors"}),o.jsx("button",{onClick:Q,disabled:!P.trim(),className:"w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center hover:bg-emerald-500/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0",children:o.jsx(pu,{})})]})]})})]})}const Xr=[{key:"formulario_enviado",label:"Formulario Enviado",color:"bg-blue-500",textColor:"text-blue-400",borderColor:"border-blue-500/30",bgLight:"bg-blue-500/10"},{key:"analise_previa",label:"Analise Previa iCover",color:"bg-cyan-500",textColor:"text-cyan-400",borderColor:"border-cyan-500/30",bgLight:"bg-cyan-500/10"},{key:"enviado_seguradoras",label:"Enviado as Seguradoras",color:"bg-purple-500",textColor:"text-purple-400",borderColor:"border-purple-500/30",bgLight:"bg-purple-500/10"},{key:"aguardando_propostas",label:"Aguardando Propostas",color:"bg-yellow-500",textColor:"text-yellow-400",borderColor:"border-yellow-500/30",bgLight:"bg-yellow-500/10"},{key:"propostas_recebidas",label:"Propostas Recebidas",color:"bg-orange-500",textColor:"text-orange-400",borderColor:"border-orange-500/30",bgLight:"bg-orange-500/10"},{key:"em_negociacao",label:"Em Negociacao",color:"bg-pink-500",textColor:"text-pink-400",borderColor:"border-pink-500/30",bgLight:"bg-pink-500/10"},{key:"apolice_emitida",label:"Apolice Emitida",color:"bg-emerald-500",textColor:"text-emerald-400",borderColor:"border-emerald-500/30",bgLight:"bg-emerald-500/10"}];function Kg(s){return Xr.find(n=>n.key===s)||Xr[0]}function Gu({stageKey:s}){const n=Kg(s);return o.jsxs("span",{className:`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${n.bgLight} ${n.textColor} border ${n.borderColor}`,children:[o.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${n.color}`}),n.label]})}function Xg({score:s}){const n=Math.min(Math.max(s,0),100),l=n>=75?"#34d399":n>=50?"#fbbf24":"#fb7185",u=2*Math.PI*28,m=u-n/100*u;return o.jsxs("div",{className:"relative w-14 h-14 flex-shrink-0",children:[o.jsxs("svg",{width:56,height:56,viewBox:"0 0 64 64",className:"-rotate-90",children:[o.jsx("circle",{cx:"32",cy:"32",r:"28",fill:"none",stroke:"rgba(255,255,255,0.06)",strokeWidth:"4"}),o.jsx("circle",{cx:"32",cy:"32",r:"28",fill:"none",stroke:l,strokeWidth:"4",strokeDasharray:u,strokeDashoffset:m,strokeLinecap:"round",className:"transition-all duration-700"})]}),o.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:o.jsx("span",{className:"text-xs font-bold",style:{color:l},children:n})})]})}function xs({icon:s,label:n,value:l,accent:u=!1}){return o.jsx("div",{className:`rounded-2xl border p-4 sm:p-5 ${u?"bg-sentinel/5 border-sentinel/20":"bg-white/[0.03] border-white/[0.06]"}`,children:o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center ${u?"bg-sentinel/15":"bg-white/[0.06]"}`,children:s}),o.jsxs("div",{children:[o.jsx("p",{className:"text-2xl font-black text-white",children:l}),o.jsx("p",{className:"text-xs text-white/40 font-medium",children:n})]})]})})}function Yg(){var x;const{user:s,authFetch:n}=ma();Wa();const[l,u]=v.useState([]),[m,c]=v.useState(!0);v.useEffect(()=>{async function b(){try{const S=await n("/api/client/quotations");u(S.quotations||[])}catch{u([])}finally{c(!1)}}b()},[n]);const f={total:l.length,emAndamento:l.filter(b=>!["apolice_emitida"].includes(b.status)).length,concluidas:l.filter(b=>b.status==="apolice_emitida").length,scoreMedio:l.length?Math.round(l.reduce((b,S)=>b+(S.icover_score||0),0)/l.length):0},g=((x=s==null?void 0:s.nome)==null?void 0:x.split(" ")[0])||"Usuario";return o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 animate-fadeIn",children:[o.jsx("div",{className:"mb-8",children:o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",children:[o.jsxs("div",{children:[o.jsxs("h1",{className:"text-2xl sm:text-3xl font-black text-white",children:["Ola, ",o.jsx("span",{className:"text-sentinel",children:g})]}),o.jsx("p",{className:"text-sm text-white/40 mt-1",children:"Acompanhe suas cotacoes de Seguro de Credito"})]}),o.jsxs(Xe,{to:"/cotacao/interno",className:"btn-primary inline-flex items-center gap-2 text-sm self-start sm:self-auto",children:[o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v16m8-8H4"})}),"Nova Cotacao"]})]})}),o.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8",children:[o.jsx(xs,{icon:o.jsx("svg",{className:"w-5 h-5 text-sentinel",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),label:"Total Cotacoes",value:f.total,accent:!0}),o.jsx(xs,{icon:o.jsx("svg",{className:"w-5 h-5 text-yellow-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),label:"Em Andamento",value:f.emAndamento}),o.jsx(xs,{icon:o.jsx("svg",{className:"w-5 h-5 text-emerald-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),label:"Concluidas",value:f.concluidas}),o.jsx(xs,{icon:o.jsx("svg",{className:"w-5 h-5 text-cyan-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),label:"Score Medio iCover",value:f.scoreMedio||"—"})]}),m?o.jsx("div",{className:"flex items-center justify-center py-20",children:o.jsx("div",{className:"w-10 h-10 rounded-full border-2 border-sentinel/20 border-t-sentinel animate-spin"})}):l.length===0?o.jsxs("div",{className:"text-center py-16 sm:py-24",children:[o.jsx("div",{className:"w-20 h-20 rounded-full bg-sentinel/5 border border-sentinel/15 flex items-center justify-center mx-auto mb-6",children:o.jsx(xo,{size:40})}),o.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"Nenhuma cotacao ainda"}),o.jsx("p",{className:"text-white/40 text-sm mb-8 max-w-md mx-auto",children:"Voce ainda nao tem cotacoes. Inicie sua primeira cotacao de Seguro de Credito e receba uma analise iCover em segundos."}),o.jsxs(Xe,{to:"/cotacao/interno",className:"btn-primary inline-flex items-center gap-2",children:[o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v16m8-8H4"})}),"Iniciar Primeira Cotacao"]})]}):o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5",children:l.map(b=>o.jsxs("div",{className:"bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 hover:border-sentinel/20 hover:bg-white/[0.05] transition-all duration-300 group",children:[o.jsxs("div",{className:"flex items-start justify-between mb-3",children:[o.jsxs("div",{className:"min-w-0 flex-1",children:[o.jsx("h3",{className:"text-white font-bold truncate group-hover:text-sentinel transition-colors",children:b.company_name||b.razao_social||"Empresa"}),o.jsx("p",{className:"text-xs text-white/30 font-mono mt-0.5",children:b.cnpj?b.cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,"$1.$2.$3/$4-$5"):"—"})]}),o.jsx("span",{className:`flex-shrink-0 ml-2 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${b.type==="externo"||b.tipo==="exportacao"?"bg-purple-500/15 text-purple-400 border border-purple-500/25":"bg-sentinel/10 text-sentinel border border-sentinel/25"}`,children:b.type==="externo"||b.tipo==="exportacao"?"Exportacao":"Interno"})]}),o.jsxs("div",{className:"flex items-center justify-between mb-4",children:[o.jsx("p",{className:"text-xs text-white/30",children:b.created_at?new Date(b.created_at).toLocaleDateString("pt-BR"):"—"}),b.icover_score!=null&&o.jsx(Xg,{score:b.icover_score})]}),o.jsx("div",{className:"mb-4",children:o.jsx(Gu,{stageKey:b.status||"formulario_enviado"})}),o.jsxs(Xe,{to:`/meu-painel/${b.id}`,className:"w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-sentinel border border-sentinel/20 hover:bg-sentinel/10 transition-all",children:["Ver detalhes",o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]})]},b.id))})]})}function Zg({currentStage:s}){const n=Xr.findIndex(l=>l.key===s);return o.jsx("div",{className:"w-full overflow-x-auto pb-2",children:o.jsx("div",{className:"flex items-center min-w-[600px] gap-0",children:Xr.map((l,u)=>{const m=u<n,c=u===n;return o.jsxs("div",{className:"flex items-center flex-1",children:[o.jsxs("div",{className:"flex flex-col items-center flex-1",children:[o.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all ${m?`${l.color} border-transparent text-white`:c?`${l.bgLight} ${l.borderColor} ${l.textColor}`:"bg-white/[0.03] border-white/10 text-white/20"}`,children:m?o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M5 13l4 4L19 7"})}):u+1}),o.jsx("p",{className:`text-[10px] mt-1.5 text-center leading-tight max-w-[80px] ${c?l.textColor+" font-semibold":m?"text-white/50":"text-white/20"}`,children:l.label})]}),u<Xr.length-1&&o.jsx("div",{className:`h-0.5 w-full flex-shrink min-w-[20px] -mt-5 ${m?l.color:"bg-white/10"}`})]},l.key)})})})}function eh({score:s}){const n=Math.min(Math.max(s,0),100),l=n>=75?"#34d399":n>=50?"#fbbf24":"#fb7185",u=n>=75?"Excelente":n>=50?"Moderado":"Atencion",m=2*Math.PI*50,c=m-n/100*m;return o.jsxs("div",{className:"flex flex-col items-center",children:[o.jsxs("div",{className:"relative w-32 h-32",children:[o.jsxs("svg",{width:128,height:128,viewBox:"0 0 120 120",className:"-rotate-90",children:[o.jsx("circle",{cx:"60",cy:"60",r:"50",fill:"none",stroke:"rgba(255,255,255,0.06)",strokeWidth:"8"}),o.jsx("circle",{cx:"60",cy:"60",r:"50",fill:"none",stroke:l,strokeWidth:"8",strokeDasharray:m,strokeDashoffset:c,strokeLinecap:"round",className:"transition-all duration-1000"})]}),o.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center",children:[o.jsx("span",{className:"text-3xl font-black",style:{color:l},children:n}),o.jsx("span",{className:"text-[10px] text-white/40 uppercase tracking-wider font-medium",children:"score"})]})]}),o.jsx("span",{className:"text-sm font-semibold mt-2",style:{color:l},children:u})]})}function ah({event:s,isLast:n}){const u={formulario_enviado:{icon:"1",color:"bg-blue-500"},analise_previa:{icon:"2",color:"bg-cyan-500"},enviado_seguradoras:{icon:"3",color:"bg-purple-500"},aguardando_propostas:{icon:"4",color:"bg-yellow-500"},propostas_recebidas:{icon:"5",color:"bg-orange-500"},em_negociacao:{icon:"6",color:"bg-pink-500"},apolice_emitida:{icon:"7",color:"bg-emerald-500"},mensagem:{icon:"M",color:"bg-sentinel"},documento:{icon:"D",color:"bg-accent-violet"}}[s.type]||{icon:"?",color:"bg-white/20"};return o.jsxs("div",{className:"flex gap-4",children:[o.jsxs("div",{className:"flex flex-col items-center",children:[o.jsx("div",{className:`w-8 h-8 rounded-full ${u.color} flex items-center justify-center text-xs font-bold text-white flex-shrink-0`,children:u.icon}),!n&&o.jsx("div",{className:"w-px flex-1 bg-white/10 my-1"})]}),o.jsxs("div",{className:"pb-6 ",children:[o.jsx("p",{className:"text-sm font-semibold text-white",children:s.title}),s.description&&o.jsx("p",{className:"text-xs text-white/40 mt-0.5",children:s.description}),o.jsx("p",{className:"text-[10px] text-white/25 mt-1",children:s.date?new Date(s.date).toLocaleString("pt-BR"):""})]})]})}function oh({doc:s}){return o.jsxs("div",{className:"flex items-center justify-between py-3 border-b border-white/[0.06] last:border-0",children:[o.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[o.jsx("div",{className:"w-9 h-9 rounded-lg bg-accent-violet/10 border border-accent-violet/20 flex items-center justify-center flex-shrink-0",children:o.jsx("svg",{className:"w-4 h-4 text-accent-violet",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"})})}),o.jsxs("div",{className:"min-w-0",children:[o.jsx("p",{className:"text-sm font-medium text-white truncate",children:s.name}),o.jsxs("p",{className:"text-[10px] text-white/30",children:[s.size||""," ",s.date?"- "+new Date(s.date).toLocaleDateString("pt-BR"):""]})]})]}),s.url&&o.jsx("a",{href:s.url,download:!0,className:"flex-shrink-0 ml-3 p-2 rounded-lg hover:bg-white/5 text-sentinel transition-colors",children:o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})})})]})}function rh({messages:s=[],onSend:n}){const[l,u]=v.useState(""),m=v.useRef(null);v.useEffect(()=>{var f;(f=m.current)==null||f.scrollIntoView({behavior:"smooth"})},[s]);function c(f){f.preventDefault(),l.trim()&&(n(l.trim()),u(""))}return o.jsxs("div",{className:"flex flex-col",children:[o.jsxs("div",{className:"max-h-80 overflow-y-auto space-y-3 mb-4 pr-1",children:[s.length===0&&o.jsx("p",{className:"text-sm text-white/25 text-center py-8",children:"Nenhuma mensagem ainda. Envie uma mensagem para a equipe Fairfield."}),s.map((f,g)=>o.jsx("div",{className:`flex ${f.from==="client"?"justify-end":"justify-start"}`,children:o.jsxs("div",{className:`max-w-[80%] rounded-2xl px-4 py-2.5 ${f.from==="client"?"bg-sentinel/15 border border-sentinel/20 text-white":"bg-white/[0.06] border border-white/[0.08] text-white/80"}`,children:[o.jsx("p",{className:"text-sm",children:f.text}),o.jsxs("p",{className:"text-[10px] mt-1 opacity-40",children:[f.date?new Date(f.date).toLocaleString("pt-BR"):"",f.from!=="client"&&f.author?` - ${f.author}`:""]})]})},g)),o.jsx("div",{ref:m})]}),o.jsxs("form",{onSubmit:c,className:"flex gap-2",children:[o.jsx("input",{className:"input-field flex-1",value:l,onChange:f=>u(f.target.value),placeholder:"Escreva sua mensagem..."}),o.jsx("button",{type:"submit",disabled:!l.trim(),className:"btn-primary px-4 py-3 flex-shrink-0 disabled:opacity-30",children:o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 19l9 2-9-18-9 18 9-2zm0 0v-8"})})})]})]})}function th(){const{id:s}=E0(),{authFetch:n}=ma(),[l,u]=v.useState(null),[m,c]=v.useState([]),[f,g]=v.useState([]),[x,b]=v.useState([]),[S,j]=v.useState(!0);v.useEffect(()=>{async function F(){try{const D=await n(`/api/client/quotations/${s}`);u(D.quotation||null),c(D.timeline||[]),g(D.documents||[]),b(D.messages||[])}catch{u(null)}finally{j(!1)}}F()},[s,n]);async function P(F){const D={text:F,from:"client",date:new Date().toISOString()};b(L=>[...L,D]);try{await n(`/api/client/quotations/${s}/messages`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:F})})}catch{}}if(S)return o.jsx("div",{className:"flex items-center justify-center py-32",children:o.jsx("div",{className:"w-10 h-10 rounded-full border-2 border-sentinel/20 border-t-sentinel animate-spin"})});if(!l)return o.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-16 text-center animate-fadeIn",children:[o.jsx("div",{className:"w-16 h-16 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center mx-auto mb-4",children:o.jsx("svg",{className:"w-8 h-8 text-white/20",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),o.jsx("h2",{className:"text-xl font-bold text-white mb-2",children:"Cotacao nao encontrada"}),o.jsx("p",{className:"text-white/40 text-sm mb-6",children:"A cotacao solicitada nao foi encontrada ou voce nao tem permissao para acessa-la."}),o.jsxs(Xe,{to:"/meu-painel",className:"btn-primary inline-flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),"Voltar ao Painel"]})]});const M=l;return o.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 animate-fadeIn",children:[o.jsxs(Xe,{to:"/meu-painel",className:"inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-sentinel transition-colors mb-6",children:[o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),"Voltar ao Painel"]}),o.jsxs("div",{className:"bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 sm:p-6 mb-6",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6",children:[o.jsxs("div",{children:[o.jsx("h1",{className:"text-xl sm:text-2xl font-black text-white",children:M.company_name||M.razao_social||"Empresa"}),o.jsxs("div",{className:"flex items-center gap-3 mt-1.5 flex-wrap",children:[o.jsx("span",{className:"text-xs text-white/30 font-mono",children:M.cnpj?M.cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,"$1.$2.$3/$4-$5"):"—"}),o.jsx("span",{className:"text-white/10",children:"|"}),o.jsx("span",{className:"text-xs text-white/30",children:M.created_at?new Date(M.created_at).toLocaleDateString("pt-BR"):"—"}),o.jsx("span",{className:`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${M.type==="externo"||M.tipo==="exportacao"?"bg-purple-500/15 text-purple-400 border border-purple-500/25":"bg-sentinel/10 text-sentinel border border-sentinel/25"}`,children:M.type==="externo"||M.tipo==="exportacao"?"Exportacao":"Interno"})]})]}),o.jsx(Gu,{stageKey:M.status||"formulario_enviado"})]}),o.jsx(Zg,{currentStage:M.status||"formulario_enviado"})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[o.jsxs("div",{className:"lg:col-span-2 space-y-6",children:[M.icover_score!=null&&o.jsxs("div",{className:"bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 sm:p-6",children:[o.jsxs("h2",{className:"text-base font-bold text-white mb-5 flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4 text-sentinel",viewBox:"0 0 80 80",fill:"none",children:o.jsx("path",{d:"M40 12 L62 24 L62 42 C62 56 52 66 40 70 C28 66 18 56 18 42 L18 24 Z",fill:"none",stroke:"currentColor",strokeWidth:"3"})}),"Resumo iCover"]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-6",children:[o.jsx("div",{className:"flex justify-center",children:o.jsx(eh,{score:M.icover_score})}),o.jsxs("div",{className:"sm:col-span-2 space-y-3",children:[M.premium_estimate&&o.jsxs("div",{className:"flex items-center justify-between py-2 border-b border-white/[0.06]",children:[o.jsx("span",{className:"text-sm text-white/50",children:"Premio Estimado"}),o.jsx("span",{className:"text-sm font-bold text-white",children:typeof M.premium_estimate=="number"?`R$ ${M.premium_estimate.toLocaleString("pt-BR")}`:M.premium_estimate})]}),M.recommended_structure&&o.jsxs("div",{className:"flex items-center justify-between py-2 border-b border-white/[0.06]",children:[o.jsx("span",{className:"text-sm text-white/50",children:"Estrutura Recomendada"}),o.jsx("span",{className:"text-sm font-semibold text-sentinel",children:M.recommended_structure})]}),M.sector&&o.jsxs("div",{className:"flex items-center justify-between py-2 border-b border-white/[0.06]",children:[o.jsx("span",{className:"text-sm text-white/50",children:"Setor"}),o.jsx("span",{className:"text-sm text-white/80",children:M.sector})]}),M.coverage_limit&&o.jsxs("div",{className:"flex items-center justify-between py-2",children:[o.jsx("span",{className:"text-sm text-white/50",children:"Limite de Cobertura"}),o.jsx("span",{className:"text-sm font-semibold text-white",children:typeof M.coverage_limit=="number"?`R$ ${M.coverage_limit.toLocaleString("pt-BR")}`:M.coverage_limit})]})]})]})]}),o.jsxs("div",{className:"bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 sm:p-6",children:[o.jsxs("h2",{className:"text-base font-bold text-white mb-5 flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4 text-sentinel",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Timeline"]}),m.length===0?o.jsx("p",{className:"text-sm text-white/25 text-center py-6",children:"Nenhum evento registrado ainda."}):o.jsx("div",{children:m.map((F,D)=>o.jsx(ah,{event:F,isLast:D===m.length-1},D))})]})]}),o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5",children:[o.jsxs("h2",{className:"text-base font-bold text-white mb-4 flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4 text-accent-violet",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"})}),"Documentos"]}),f.length===0?o.jsx("p",{className:"text-sm text-white/25 text-center py-4",children:"Nenhum documento disponivel."}):o.jsx("div",{children:f.map((F,D)=>o.jsx(oh,{doc:F},D))})]}),o.jsxs("div",{className:"bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5",children:[o.jsxs("h2",{className:"text-base font-bold text-white mb-4 flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4 text-sentinel",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})}),"Mensagens"]}),o.jsx(rh,{messages:x,onSend:P})]})]})]})]})}function sh(s){const n=s.replace(/\D/g,"").slice(0,11);return n.length<=2?n.length?`(${n}`:"":n.length<=6?`(${n.slice(0,2)}) ${n.slice(2)}`:n.length<=10?`(${n.slice(0,2)}) ${n.slice(2,6)}-${n.slice(6)}`:`(${n.slice(0,2)}) ${n.slice(2,7)}-${n.slice(7)}`}function ih(){var pe;const{user:s,updateProfile:n,changePassword:l}=ma(),[u,m]=v.useState({nome:(s==null?void 0:s.nome)||"",empresa:(s==null?void 0:s.empresa)||"",cnpj:s!=null&&s.cnpj?js(s.cnpj):"",telefone:(s==null?void 0:s.telefone)||""}),[c,f]=v.useState(!1),[g,x]=v.useState({}),[b,S]=v.useState({current:"",nova:"",confirmar:""}),[j,P]=v.useState(!1),[M,F]=v.useState({}),[D,L]=v.useState(!1),[B,O]=v.useState(!1);function z(H,X){m(K=>({...K,[H]:X})),x(K=>{const se={...K};return delete se[H],se})}function Y(H,X){S(K=>({...K,[H]:X})),F(K=>{const se={...K};return delete se[H],se})}async function Q(H){H.preventDefault();const X={};if(u.nome.trim()||(X.nome="Informe seu nome"),u.empresa.trim()||(X.empresa="Informe a empresa"),x(X),!(Object.keys(X).length>0)){f(!0);try{await n({nome:u.nome.trim(),empresa:u.empresa.trim(),cnpj:u.cnpj.replace(/\D/g,""),telefone:u.telefone}),je.success("Perfil atualizado com sucesso!")}catch(K){je.error(K.message||"Erro ao atualizar perfil")}finally{f(!1)}}}async function ne(H){H.preventDefault();const X={};if(b.current||(X.current="Informe a senha atual"),b.nova.length<6&&(X.nova="Minimo 6 caracteres"),b.nova!==b.confirmar&&(X.confirmar="Senhas nao conferem"),F(X),!(Object.keys(X).length>0)){P(!0);try{await l(b.current,b.nova),je.success("Senha alterada com sucesso!"),S({current:"",nova:"",confirmar:""})}catch(K){je.error(K.message||"Erro ao alterar senha")}finally{P(!1)}}}const $="border-rose-400/50 ring-2 ring-rose-400/20",me=o.jsxs("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}),xe=o.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"})});return o.jsxs("div",{className:"max-w-2xl mx-auto px-4 py-8 sm:py-12 animate-fadeIn",children:[o.jsxs(Xe,{to:"/meu-painel",className:"inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-sentinel transition-colors mb-6",children:[o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),"Voltar ao Painel"]}),o.jsxs("div",{className:"text-center mb-8",children:[o.jsx("div",{className:"w-16 h-16 rounded-full bg-sentinel/10 border-2 border-sentinel/25 flex items-center justify-center mx-auto mb-3",children:o.jsx("span",{className:"text-2xl font-black text-sentinel",children:((pe=s==null?void 0:s.nome)==null?void 0:pe.charAt(0))||"U"})}),o.jsx("h1",{className:"text-2xl font-black text-white",children:"Meu Perfil"}),o.jsx("p",{className:"text-sm text-white/40 mt-1",children:(s==null?void 0:s.email)||""})]}),o.jsxs("div",{className:"bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 sm:p-6 mb-6",children:[o.jsxs("h2",{className:"text-base font-bold text-white border-b border-white/[0.06] pb-3 mb-4 flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4 text-sentinel",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),"Dados Pessoais"]}),o.jsxs("form",{onSubmit:Q,className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"label-field",children:"Email"}),o.jsx("input",{className:"input-field opacity-50 cursor-not-allowed",value:(s==null?void 0:s.email)||"",readOnly:!0}),o.jsx("p",{className:"text-[10px] text-white/20 mt-1",children:"O email nao pode ser alterado"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"label-field",children:"Nome Completo *"}),o.jsx("input",{className:`input-field ${g.nome?$:""}`,value:u.nome,onChange:H=>z("nome",H.target.value)}),g.nome&&o.jsx("p",{className:"error-msg",children:g.nome})]}),o.jsxs("div",{children:[o.jsx("label",{className:"label-field",children:"Empresa *"}),o.jsx("input",{className:`input-field ${g.empresa?$:""}`,value:u.empresa,onChange:H=>z("empresa",H.target.value)}),g.empresa&&o.jsx("p",{className:"error-msg",children:g.empresa})]}),o.jsxs("div",{children:[o.jsx("label",{className:"label-field",children:"CNPJ"}),o.jsx("input",{className:"input-field",value:u.cnpj,onChange:H=>z("cnpj",js(H.target.value)),placeholder:"00.000.000/0000-00",maxLength:18})]}),o.jsxs("div",{children:[o.jsx("label",{className:"label-field",children:"Telefone"}),o.jsx("input",{className:"input-field",value:u.telefone,onChange:H=>z("telefone",sh(H.target.value)),placeholder:"(00) 00000-0000",maxLength:15})]}),o.jsxs("button",{type:"submit",disabled:c,className:"btn-primary w-full flex items-center justify-center gap-2",children:[c&&o.jsxs("svg",{className:"animate-spin h-5 w-5",viewBox:"0 0 24 24",children:[o.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"}),o.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]}),c?"Salvando...":"Salvar Alteracoes"]})]})]}),o.jsxs("div",{className:"bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 sm:p-6",children:[o.jsxs("h2",{className:"text-base font-bold text-white border-b border-white/[0.06] pb-3 mb-4 flex items-center gap-2",children:[o.jsx("svg",{className:"w-4 h-4 text-sentinel",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),"Alterar Senha"]}),o.jsxs("form",{onSubmit:ne,className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"label-field",children:"Senha Atual *"}),o.jsxs("div",{className:"relative",children:[o.jsx("input",{type:D?"text":"password",className:`input-field pr-12 ${M.current?$:""}`,value:b.current,onChange:H=>Y("current",H.target.value)}),o.jsx("button",{type:"button",onClick:()=>L(!D),className:"absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors",children:D?xe:me})]}),M.current&&o.jsx("p",{className:"error-msg",children:M.current})]}),o.jsxs("div",{children:[o.jsx("label",{className:"label-field",children:"Nova Senha *"}),o.jsxs("div",{className:"relative",children:[o.jsx("input",{type:B?"text":"password",className:`input-field pr-12 ${M.nova?$:""}`,value:b.nova,onChange:H=>Y("nova",H.target.value),placeholder:"Minimo 6 caracteres"}),o.jsx("button",{type:"button",onClick:()=>O(!B),className:"absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors",children:B?xe:me})]}),M.nova&&o.jsx("p",{className:"error-msg",children:M.nova})]}),o.jsxs("div",{children:[o.jsx("label",{className:"label-field",children:"Confirmar Nova Senha *"}),o.jsx("input",{type:"password",className:`input-field ${M.confirmar?$:""}`,value:b.confirmar,onChange:H=>Y("confirmar",H.target.value)}),M.confirmar&&o.jsx("p",{className:"error-msg",children:M.confirmar})]}),o.jsxs("button",{type:"submit",disabled:j,className:"btn-primary w-full flex items-center justify-center gap-2",children:[j&&o.jsxs("svg",{className:"animate-spin h-5 w-5",viewBox:"0 0 24 24",children:[o.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"}),o.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]}),j?"Alterando...":"Alterar Senha"]})]})]})]})}function nh(){var f,g;const{user:s,logout:n}=ma(),[l,u]=v.useState(!1),m=v.useRef(null),c=Wa();return v.useEffect(()=>{function x(b){m.current&&!m.current.contains(b.target)&&u(!1)}return document.addEventListener("mousedown",x),()=>document.removeEventListener("mousedown",x)},[]),s?o.jsxs("div",{className:"relative",ref:m,children:[o.jsxs("button",{onClick:()=>u(!l),className:"flex items-center gap-2 text-xs text-white/40 hover:text-white/60 transition-colors pl-3 ml-1 border-l border-white/10",children:[o.jsx("div",{className:"h-7 w-7 rounded-full bg-sentinel/15 border border-sentinel/25 flex items-center justify-center",children:o.jsx("span",{className:"text-[11px] font-bold text-sentinel",children:((f=s.nome)==null?void 0:f.charAt(0))||"U"})}),o.jsx("span",{className:"hidden sm:block text-white/60 font-medium max-w-[100px] truncate",children:(g=s.nome)==null?void 0:g.split(" ")[0]}),o.jsx("svg",{className:`w-3 h-3 text-white/30 transition-transform ${l?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),l&&o.jsxs("div",{className:"absolute right-0 top-full mt-2 w-48 bg-navy-light border border-white/[0.08] rounded-xl shadow-xl overflow-hidden z-50 animate-fadeIn",children:[o.jsxs("div",{className:"px-4 py-3 border-b border-white/[0.06]",children:[o.jsx("p",{className:"text-sm font-semibold text-white truncate",children:s.nome}),o.jsx("p",{className:"text-[10px] text-white/30 truncate",children:s.email})]}),o.jsxs("div",{className:"py-1",children:[o.jsxs("button",{onClick:()=>{u(!1),c("/meu-painel")},className:"w-full text-left px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/[0.04] transition-colors flex items-center gap-2.5",children:[o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})}),"Meu Painel"]}),o.jsxs("button",{onClick:()=>{u(!1),c("/perfil")},className:"w-full text-left px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/[0.04] transition-colors flex items-center gap-2.5",children:[o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),"Meu Perfil"]}),o.jsx("div",{className:"border-t border-white/[0.06] my-1"}),o.jsxs("button",{onClick:()=>{u(!1),n()},className:"w-full text-left px-4 py-2.5 text-sm text-rose-400/70 hover:text-rose-400 hover:bg-rose-400/5 transition-colors flex items-center gap-2.5",children:[o.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})}),"Sair"]})]})]})]}):null}function lh(){const[s]=tf(),n=go(),{user:l,isAuthenticated:u,ndaAccepted:m,logout:c}=ma(),f=s.get("admin")==="1",g=n.pathname==="/",x=n.pathname.startsWith("/cotacao"),b=n.pathname==="/icover",[S,j]=v.useState(!1);v.useEffect(()=>{function D(){j(!0)}function L(){j(!1)}return window.addEventListener("sentinel-started",D),window.addEventListener("sentinel-reset",L),()=>{window.removeEventListener("sentinel-started",D),window.removeEventListener("sentinel-reset",L)}},[]),v.useEffect(()=>{g||j(!1)},[g]);const P=x&&!l,M=x&&l&&!m,F=x||M;return b?o.jsx(eu,{children:o.jsx(ca,{path:"/icover",element:o.jsx(xu,{})})}):o.jsxs("div",{className:"min-h-screen flex flex-col bg-navy",children:[o.jsx("header",{className:"sticky top-0 z-50 border-b border-white/[0.06] bg-navy/80 backdrop-blur-xl",children:o.jsx("div",{className:"max-w-7xl mx-auto px-3 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"flex items-center justify-between h-14 sm:h-16",children:[o.jsxs(Jr,{to:"/",className:"flex items-center gap-2 sm:gap-3 min-w-0 group",children:[o.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2 flex-shrink-0",children:[o.jsx("span",{className:"hidden sm:block text-[10px] text-white/30 font-medium tracking-wide uppercase",children:"Fairfield"}),o.jsx("span",{className:"hidden sm:block text-white/10 mx-1",children:"|"}),o.jsxs("div",{className:"relative",children:[o.jsx(xo,{size:32}),o.jsx("div",{className:"absolute inset-0 bg-sentinel/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"})]}),o.jsx("h1",{className:"text-lg sm:text-xl font-bold tracking-tight",children:o.jsx("span",{className:"text-sentinel",children:"SENTINEL"})})]}),o.jsx("span",{className:"hidden lg:block text-[10px] text-white/25 border-l border-white/10 pl-3 leading-tight uppercase tracking-wider",children:"Seguro de Credito"})]}),o.jsxs("nav",{className:"flex items-center gap-1 sm:gap-2",children:[g&&!S&&o.jsx("a",{href:"#iniciar",onClick:D=>{D.preventDefault(),window.dispatchEvent(new CustomEvent("sentinel-iniciar"))},className:"px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all bg-gradient-to-r from-sentinel-dark to-sentinel text-navy-dark hover:shadow-lg hover:shadow-sentinel/20 hover:scale-[1.02] cursor-pointer",children:"Iniciar Cotacao"}),u&&!f&&o.jsx(Jr,{to:"/meu-painel",className:({isActive:D})=>`hidden sm:inline-flex px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${D?"bg-sentinel/15 text-sentinel border border-sentinel/25":"text-white/40 hover:text-white hover:bg-white/5"}`,children:"Meu Painel"}),f&&o.jsxs(o.Fragment,{children:[o.jsx(Jr,{to:"/dashboard?admin=1",className:({isActive:D})=>`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${D?"bg-sentinel/15 text-sentinel border border-sentinel/25":"text-white/40 hover:text-white hover:bg-white/5"}`,children:"Dashboard"}),o.jsx(Jr,{to:"/sla?admin=1",className:({isActive:D})=>`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${D?"bg-sentinel/15 text-sentinel border border-sentinel/25":"text-white/40 hover:text-white hover:bg-white/5"}`,children:"SLA"})]}),u&&!f&&o.jsx(nh,{}),!u&&!f&&o.jsx(Jr,{to:"/login",className:({isActive:D})=>`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${D?"bg-sentinel/15 text-sentinel border border-sentinel/25":"text-white/40 hover:text-white hover:bg-white/5"}`,children:"Entrar"})]})]})})}),o.jsx("main",{className:`flex-1 ${F?"bg-white light-theme":"bg-grid"}`,children:P?o.jsx(su,{}):M?o.jsx(ug,{}):o.jsxs(eu,{children:[o.jsx(ca,{path:"/",element:o.jsx(tg,{})}),o.jsx(ca,{path:"/login",element:o.jsx(su,{})}),o.jsx(ca,{path:"/register",element:o.jsx(dg,{})}),o.jsx(ca,{path:"/icover",element:o.jsx(xu,{})}),o.jsx(ca,{path:"/cotacao/interno",element:o.jsx(Rg,{})}),o.jsx(ca,{path:"/cotacao/externo",element:o.jsx(zg,{})}),o.jsx(ca,{path:"/dashboard",element:o.jsx(Fg,{})}),o.jsx(ca,{path:"/sla",element:o.jsx(Tg,{})}),o.jsx(ca,{path:"/meu-painel",element:o.jsx(Ln,{children:o.jsx(Yg,{})})}),o.jsx(ca,{path:"/meu-painel/:id",element:o.jsx(Ln,{children:o.jsx(th,{})})}),o.jsx(ca,{path:"/perfil",element:o.jsx(Ln,{children:o.jsx(ih,{})})})]})}),o.jsx("footer",{className:"py-8 border-t border-white/[0.06]",children:o.jsx("div",{className:"max-w-7xl mx-auto px-4",children:o.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[o.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[o.jsx("a",{href:"https://www.fairfield.com.br",target:"_blank",rel:"noopener noreferrer",className:"font-semibold text-white/60 hover:text-sentinel transition-colors text-sm",children:"Fairfield"}),o.jsx("span",{className:"text-white/10",children:"|"}),o.jsx("span",{className:"font-bold text-sentinel tracking-tight text-sm",children:"SENTINEL"}),o.jsx("span",{className:"text-white/25 text-xs",children:"Seguro de Credito"}),o.jsx("span",{className:"text-white/10",children:"·"}),o.jsx("span",{className:"font-bold text-white/60 tracking-tight text-sm",children:"COVENANT"}),o.jsx("span",{className:"text-white/25 text-xs",children:"Seguro Garantia"})]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"text-[10px] text-white/20",children:"SUSEP 20.2036457.1"}),o.jsx("span",{className:"text-white/10",children:"|"}),o.jsxs("p",{className:"text-xs text-white/20",children:["© ",new Date().getFullYear()," Fairfield. Todos os direitos reservados."]})]})]})})})]})}function dh(){return o.jsx(Z0,{children:o.jsxs(Kf,{children:[o.jsx(Qf,{position:"top-right",toastOptions:{duration:4e3,style:{borderRadius:"12px",background:"#111833",color:"#e2e8f0",fontSize:"13px",border:"1px solid rgba(255,255,255,0.06)"}}}),o.jsx(lh,{})]})})}Zp.createRoot(document.getElementById("root")).render(o.jsx(bu.StrictMode,{children:o.jsx(dh,{})}));

(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var Xa={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Cd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],a=n[t++],l=n[t++],u=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},yl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,l=a?n[i+1]:0,u=i+2<n.length,d=u?n[i+2]:0,p=o>>2,y=(o&3)<<4|l>>4;let I=(l&15)<<2|d>>6,b=d&63;u||(b=64,a||(I=64)),r.push(t[p],t[y],t[I],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(_l(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Cd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const y=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||l==null||d==null||y==null)throw new kd;const I=o<<2|l>>4;if(r.push(I),d!==64){const b=l<<4&240|d>>2;if(r.push(b),y!==64){const k=d<<6&192|y;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class kd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dd=function(n){const e=_l(n);return yl.encodeByteArray(e,!0)},ri=function(n){return Dd(n).replace(/\./g,"")},vl=function(n){try{return yl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd=()=>Vd().__FIREBASE_DEFAULTS__,xd=()=>{if(typeof process>"u"||typeof Xa>"u")return;const n=Xa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Od=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&vl(n[1]);return e&&JSON.parse(e)},Ei=()=>{try{return Nd()||xd()||Od()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Il=n=>{var e,t;return(t=(e=Ei())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Md=n=>{const e=Il(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},El=()=>{var n;return(n=Ei())===null||n===void 0?void 0:n.config},Tl=n=>{var e;return(e=Ei())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ri(JSON.stringify(t)),ri(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ud(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function Bd(){var n;const e=(n=Ei())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function $d(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zd(){const n=ke();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Hd(){return!Bd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Wd(){try{return typeof indexedDB=="object"}catch{return!1}}function Gd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="FirebaseError";class dt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Kd,Object.setPrototypeOf(this,dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cr.prototype.create)}}class cr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?Qd(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new dt(i,l,r)}}function Qd(n,e){return n.replace(Xd,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Xd=/\{\$([^}]+)}/g;function Yd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ii(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],a=e[i];if(Ya(o)&&Ya(a)){if(!ii(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Ya(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Jd(n,e){const t=new Zd(n,e);return t.subscribe.bind(t)}class Zd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");ef(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=ls),i.error===void 0&&(i.error=ls),i.complete===void 0&&(i.complete=ls);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ef(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ls(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(n){return n&&n._delegate?n._delegate:n}class zt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ld;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rf(e))try{this.getOrInitializeService({instanceIdentifier:Mt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Mt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mt){return this.instances.has(e)}getOptions(e=Mt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nf(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mt){return this.component?this.component.multipleInstances?e:Mt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nf(n){return n===Mt?void 0:n}function rf(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new tf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const of={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},af=K.INFO,cf={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},lf=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=cf[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ys{constructor(e){this.name=e,this._logLevel=af,this._logHandler=lf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?of[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const uf=(n,e)=>e.some(t=>n instanceof t);let Ja,Za;function hf(){return Ja||(Ja=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function df(){return Za||(Za=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wl=new WeakMap,Ts=new WeakMap,Al=new WeakMap,us=new WeakMap,Js=new WeakMap;function ff(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(wt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&wl.set(t,n)}).catch(()=>{}),Js.set(e,n),e}function pf(n){if(Ts.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Ts.set(n,e)}let ws={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ts.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Al.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return wt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function mf(n){ws=n(ws)}function gf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(hs(this),e,...t);return Al.set(r,e.sort?e.sort():[e]),wt(r)}:df().includes(n)?function(...e){return n.apply(hs(this),e),wt(wl.get(this))}:function(...e){return wt(n.apply(hs(this),e))}}function _f(n){return typeof n=="function"?gf(n):(n instanceof IDBTransaction&&pf(n),uf(n,hf())?new Proxy(n,ws):n)}function wt(n){if(n instanceof IDBRequest)return ff(n);if(us.has(n))return us.get(n);const e=_f(n);return e!==n&&(us.set(n,e),Js.set(e,n)),e}const hs=n=>Js.get(n);function yf(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,e),l=wt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(wt(a.result),u.oldVersion,u.newVersion,wt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const vf=["get","getKey","getAll","getAllKeys","count"],If=["put","add","delete","clear"],ds=new Map;function ec(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ds.get(e))return ds.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=If.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||vf.includes(t)))return;const o=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),i&&u.done]))[0]};return ds.set(e,o),o}mf(n=>({...n,get:(e,t,r)=>ec(e,t)||n.get(e,t,r),has:(e,t)=>!!ec(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Tf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Tf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const As="@firebase/app",tc="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=new Ys("@firebase/app"),wf="@firebase/app-compat",Af="@firebase/analytics-compat",Rf="@firebase/analytics",bf="@firebase/app-check-compat",Pf="@firebase/app-check",Sf="@firebase/auth",Cf="@firebase/auth-compat",kf="@firebase/database",Df="@firebase/data-connect",Vf="@firebase/database-compat",Nf="@firebase/functions",xf="@firebase/functions-compat",Of="@firebase/installations",Mf="@firebase/installations-compat",Lf="@firebase/messaging",Ff="@firebase/messaging-compat",Uf="@firebase/performance",Bf="@firebase/performance-compat",qf="@firebase/remote-config",jf="@firebase/remote-config-compat",$f="@firebase/storage",zf="@firebase/storage-compat",Hf="@firebase/firestore",Wf="@firebase/vertexai-preview",Gf="@firebase/firestore-compat",Kf="firebase",Qf="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs="[DEFAULT]",Xf={[As]:"fire-core",[wf]:"fire-core-compat",[Rf]:"fire-analytics",[Af]:"fire-analytics-compat",[Pf]:"fire-app-check",[bf]:"fire-app-check-compat",[Sf]:"fire-auth",[Cf]:"fire-auth-compat",[kf]:"fire-rtdb",[Df]:"fire-data-connect",[Vf]:"fire-rtdb-compat",[Nf]:"fire-fn",[xf]:"fire-fn-compat",[Of]:"fire-iid",[Mf]:"fire-iid-compat",[Lf]:"fire-fcm",[Ff]:"fire-fcm-compat",[Uf]:"fire-perf",[Bf]:"fire-perf-compat",[qf]:"fire-rc",[jf]:"fire-rc-compat",[$f]:"fire-gcs",[zf]:"fire-gcs-compat",[Hf]:"fire-fst",[Gf]:"fire-fst-compat",[Wf]:"fire-vertex","fire-js":"fire-js",[Kf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=new Map,Yf=new Map,bs=new Map;function nc(n,e){try{n.container.addComponent(e)}catch(t){at.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function un(n){const e=n.name;if(bs.has(e))return at.debug(`There were multiple attempts to register component ${e}.`),!1;bs.set(e,n);for(const t of si.values())nc(t,n);for(const t of Yf.values())nc(t,n);return!0}function Zs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function nt(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},At=new cr("app","Firebase",Jf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=Qf;function Rl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Rs,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw At.create("bad-app-name",{appName:String(i)});if(t||(t=El()),!t)throw At.create("no-options");const o=si.get(i);if(o){if(ii(t,o.options)&&ii(r,o.config))return o;throw At.create("duplicate-app",{appName:i})}const a=new sf(i);for(const u of bs.values())a.addComponent(u);const l=new Zf(t,r,a);return si.set(i,l),l}function bl(n=Rs){const e=si.get(n);if(!e&&n===Rs&&El())return Rl();if(!e)throw At.create("no-app",{appName:n});return e}function Rt(n,e,t){var r;let i=(r=Xf[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const l=[`Unable to register library "${i}" with version "${e}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),at.warn(l.join(" "));return}un(new zt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep="firebase-heartbeat-database",tp=1,Xn="firebase-heartbeat-store";let fs=null;function Pl(){return fs||(fs=yf(ep,tp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Xn)}catch(t){console.warn(t)}}}}).catch(n=>{throw At.create("idb-open",{originalErrorMessage:n.message})})),fs}async function np(n){try{const t=(await Pl()).transaction(Xn),r=await t.objectStore(Xn).get(Sl(n));return await t.done,r}catch(e){if(e instanceof dt)at.warn(e.message);else{const t=At.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});at.warn(t.message)}}}async function rc(n,e){try{const r=(await Pl()).transaction(Xn,"readwrite");await r.objectStore(Xn).put(e,Sl(n)),await r.done}catch(t){if(t instanceof dt)at.warn(t.message);else{const r=At.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});at.warn(r.message)}}}function Sl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=1024,ip=30*24*60*60*1e3;class sp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ap(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ic();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=ip}),this._storage.overwrite(this._heartbeatsCache))}catch(r){at.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ic(),{heartbeatsToSend:r,unsentEntries:i}=op(this._heartbeatsCache.heartbeats),o=ri(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return at.warn(t),""}}}function ic(){return new Date().toISOString().substring(0,10)}function op(n,e=rp){const t=[];let r=n.slice();for(const i of n){const o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),sc(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),sc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class ap{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wd()?Gd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await np(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return rc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return rc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sc(n){return ri(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(n){un(new zt("platform-logger",e=>new Ef(e),"PRIVATE")),un(new zt("heartbeat",e=>new sp(e),"PRIVATE")),Rt(As,tc,n),Rt(As,tc,"esm2017"),Rt("fire-js","")}cp("");function eo(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Cl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lp=Cl,kl=new cr("auth","Firebase",Cl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=new Ys("@firebase/auth");function up(n,...e){oi.logLevel<=K.WARN&&oi.warn(`Auth (${vn}): ${n}`,...e)}function Kr(n,...e){oi.logLevel<=K.ERROR&&oi.error(`Auth (${vn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(n,...e){throw no(n,...e)}function Ue(n,...e){return no(n,...e)}function to(n,e,t){const r=Object.assign(Object.assign({},lp()),{[e]:t});return new cr("auth","Firebase",r).create(e,{appName:n.name})}function Bt(n){return to(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hp(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ge(n,"argument-error"),to(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function no(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return kl.create(n,...e)}function q(n,e,...t){if(!n)throw no(e,...t)}function rt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Kr(e),new Error(e)}function ct(n,e){n||rt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function dp(){return oc()==="http:"||oc()==="https:"}function oc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dp()||jd()||"connection"in navigator)?navigator.onLine:!0}function pp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,t){this.shortDelay=e,this.longDelay=t,ct(t>e,"Short delay should be less than long delay!"),this.isMobile=Ud()||$d()}get(){return fp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(n,e){ct(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp=new ur(3e4,6e4);function io(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function In(n,e,t,r,i={}){return Vl(n,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const l=lr(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:u},o);return qd()||(d.referrerPolicy="no-referrer"),Dl.fetch()(Nl(n,n.config.apiHost,t,l),d)})}async function Vl(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},mp),e);try{const i=new yp(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw jr(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw jr(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw jr(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw jr(n,"user-disabled",a);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw to(n,p,d);Ge(n,p)}}catch(i){if(i instanceof dt)throw i;Ge(n,"network-request-failed",{message:String(i)})}}async function _p(n,e,t,r,i={}){const o=await In(n,e,t,r,i);return"mfaPendingCredential"in o&&Ge(n,"multi-factor-auth-required",{_serverResponse:o}),o}function Nl(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?ro(n.config,i):`${n.config.apiScheme}://${i}`}class yp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ue(this.auth,"network-request-failed")),gp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function jr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Ue(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vp(n,e){return In(n,"POST","/v1/accounts:delete",e)}async function xl(n,e){return In(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ip(n,e=!1){const t=Ee(n),r=await t.getIdToken(e),i=so(r);q(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Hn(ps(i.auth_time)),issuedAtTime:Hn(ps(i.iat)),expirationTime:Hn(ps(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function ps(n){return Number(n)*1e3}function so(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Kr("JWT malformed, contained fewer than 3 sections"),null;try{const i=vl(t);return i?JSON.parse(i):(Kr("Failed to decode base64 JWT payload"),null)}catch(i){return Kr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ac(n){const e=so(n);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof dt&&Ep(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Ep({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hn(this.lastLoginAt),this.creationTime=Hn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ai(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Yn(n,xl(t,{idToken:r}));q(i==null?void 0:i.users.length,t,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Ol(o.providerUserInfo):[],l=Ap(n.providerData,a),u=n.isAnonymous,d=!(n.email&&o.passwordHash)&&!(l!=null&&l.length),p=u?d:!1,y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Ss(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(n,y)}async function wp(n){const e=Ee(n);await ai(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ap(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ol(n){return n.map(e=>{var{providerId:t}=e,r=eo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rp(n,e){const t=await Vl(n,{},async()=>{const r=lr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=Nl(n,i,"/v1/token",`key=${o}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Dl.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function bp(n,e){return In(n,"POST","/v2/accounts:revokeToken",io(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ac(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){q(e.length!==0,"internal-error");const t=ac(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await Rp(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,a=new on;return r&&(q(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(q(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new on,this.toJSON())}_performRefresh(){return rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(n,e){q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class it{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=eo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Tp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ss(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Yn(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ip(this,e)}reload(){return wp(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new it(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ai(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nt(this.auth.app))return Promise.reject(Bt(this.auth));const e=await this.getIdToken();return await Yn(this,vp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,a,l,u,d,p;const y=(r=t.displayName)!==null&&r!==void 0?r:void 0,I=(i=t.email)!==null&&i!==void 0?i:void 0,b=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,k=(a=t.photoURL)!==null&&a!==void 0?a:void 0,V=(l=t.tenantId)!==null&&l!==void 0?l:void 0,C=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,L=(d=t.createdAt)!==null&&d!==void 0?d:void 0,H=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:W,emailVerified:Z,isAnonymous:we,providerData:ne,stsTokenManager:T}=t;q(W&&T,e,"internal-error");const g=on.fromJSON(this.name,T);q(typeof W=="string",e,"internal-error"),gt(y,e.name),gt(I,e.name),q(typeof Z=="boolean",e,"internal-error"),q(typeof we=="boolean",e,"internal-error"),gt(b,e.name),gt(k,e.name),gt(V,e.name),gt(C,e.name),gt(L,e.name),gt(H,e.name);const v=new it({uid:W,auth:e,email:I,emailVerified:Z,displayName:y,isAnonymous:we,photoURL:k,phoneNumber:b,tenantId:V,stsTokenManager:g,createdAt:L,lastLoginAt:H});return ne&&Array.isArray(ne)&&(v.providerData=ne.map(E=>Object.assign({},E))),C&&(v._redirectEventId=C),v}static async _fromIdTokenResponse(e,t,r=!1){const i=new on;i.updateFromServerResponse(t);const o=new it({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ai(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];q(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Ol(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new on;l.updateFromIdToken(r);const u=new it({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ss(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=new Map;function st(n){ct(n instanceof Function,"Expected a class definition");let e=cc.get(n);return e?(ct(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,cc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ml.type="NONE";const lc=Ml;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(n,e,t){return`firebase:${n}:${e}:${t}`}class an{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Qr(this.userKey,i.apiKey,o),this.fullPersistenceKey=Qr("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?it._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new an(st(lc),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||st(lc);const a=Qr(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const p=await d._get(a);if(p){const y=it._fromJSON(e,p);d!==o&&(l=y),o=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new an(o,e,r):(o=u[0],l&&await o._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new an(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ll(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jl(e))return"Blackberry";if($l(e))return"Webos";if(Fl(e))return"Safari";if((e.includes("chrome/")||Ul(e))&&!e.includes("edge/"))return"Chrome";if(ql(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ll(n=ke()){return/firefox\//i.test(n)}function Fl(n=ke()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ul(n=ke()){return/crios\//i.test(n)}function Bl(n=ke()){return/iemobile/i.test(n)}function ql(n=ke()){return/android/i.test(n)}function jl(n=ke()){return/blackberry/i.test(n)}function $l(n=ke()){return/webos/i.test(n)}function oo(n=ke()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Pp(n=ke()){var e;return oo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Sp(){return zd()&&document.documentMode===10}function zl(n=ke()){return oo(n)||ql(n)||$l(n)||jl(n)||/windows phone/i.test(n)||Bl(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(n,e=[]){let t;switch(n){case"Browser":t=uc(ke());break;case"Worker":t=`${uc(ke())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${vn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,l)=>{try{const u=e(o);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kp(n,e={}){return In(n,"GET","/v2/passwordPolicy",io(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp=6;class Vp{constructor(e){var t,r,i,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Dp,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,o,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hc(this),this.idTokenSubscription=new hc(this),this.beforeStateQueue=new Cp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=st(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await an.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await xl(this,{idToken:e}),r=await it._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(nt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ai(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nt(this.app))return Promise.reject(Bt(this));const t=e?Ee(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nt(this.app)?Promise.reject(Bt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nt(this.app)?Promise.reject(Bt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(st(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kp(this),t=new Vp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new cr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await bp(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&st(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await an.create(this,[st(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&up(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ti(n){return Ee(n)}class hc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jd(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ao={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xp(n){ao=n}function Op(n){return ao.loadJS(n)}function Mp(){return ao.gapiScript}function Lp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(n,e){const t=Zs(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(ii(o,e??{}))return i;Ge(i,"already-initialized")}return t.initialize({options:e})}function Up(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(st);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Bp(n,e,t){const r=Ti(n);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=Wl(e),{host:a,port:l}=qp(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${o}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),jp()}function Wl(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function qp(n){const e=Wl(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:dc(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:dc(a)}}}function dc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function jp(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return rt("not implemented")}_getIdTokenResponse(e){return rt("not implemented")}_linkToIdToken(e,t){return rt("not implemented")}_getReauthenticationResolver(e){return rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cn(n,e){return _p(n,"POST","/v1/accounts:signInWithIdp",io(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p="http://localhost";class Ht extends Gl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ht(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ge("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=eo(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Ht(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return cn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,cn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,cn(e,t)}buildRequest(){const e={requestUri:$p,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=lr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends co{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends hr{constructor(){super("facebook.com")}static credential(e){return Ht._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.FACEBOOK_SIGN_IN_METHOD="facebook.com";_t.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et extends hr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ht._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return et.credential(t,r)}catch{return null}}}et.GOOGLE_SIGN_IN_METHOD="google.com";et.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends hr{constructor(){super("github.com")}static credential(e){return Ht._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.GITHUB_SIGN_IN_METHOD="github.com";yt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends hr{constructor(){super("twitter.com")}static credential(e,t){return Ht._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return vt.credential(t,r)}catch{return null}}}vt.TWITTER_SIGN_IN_METHOD="twitter.com";vt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await it._fromIdTokenResponse(e,r,i),a=fc(r);return new hn({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=fc(r);return new hn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function fc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends dt{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ci.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new ci(e,t,r,i)}}function Kl(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ci._fromErrorAndOperation(n,o,e,r):o})}async function zp(n,e,t=!1){const r=await Yn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return hn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hp(n,e,t=!1){const{auth:r}=n;if(nt(r.app))return Promise.reject(Bt(r));const i="reauthenticate";try{const o=await Yn(n,Kl(r,i,e,n),t);q(o.idToken,r,"internal-error");const a=so(o.idToken);q(a,r,"internal-error");const{sub:l}=a;return q(n.uid===l,r,"user-mismatch"),hn._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ge(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wp(n,e,t=!1){if(nt(n.app))return Promise.reject(Bt(n));const r="signIn",i=await Kl(n,r,e),o=await hn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}function Gp(n,e,t,r){return Ee(n).onIdTokenChanged(e,t,r)}function Kp(n,e,t){return Ee(n).beforeAuthStateChanged(e,t)}function Qp(n,e,t,r){return Ee(n).onAuthStateChanged(e,t,r)}function Xp(n){return Ee(n).signOut()}const li="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(li,"1"),this.storage.removeItem(li),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp=1e3,Jp=10;class Xl extends Ql{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);Sp()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Jp):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Yp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xl.type="LOCAL";const Zp=Xl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl extends Ql{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Yl.type="SESSION";const Jl=Yl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new wi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async d=>d(t.origin,o)),u=await em(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((l,u)=>{const d=lo("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(y){const I=y;if(I.data.eventId===d)switch(I.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(I.data.response);break;default:clearTimeout(p),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(){return window}function nm(n){$e().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(){return typeof $e().WorkerGlobalScope<"u"&&typeof $e().importScripts=="function"}async function rm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function im(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function sm(){return Zl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu="firebaseLocalStorageDb",om=1,ui="firebaseLocalStorage",tu="fbase_key";class dr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ai(n,e){return n.transaction([ui],e?"readwrite":"readonly").objectStore(ui)}function am(){const n=indexedDB.deleteDatabase(eu);return new dr(n).toPromise()}function Cs(){const n=indexedDB.open(eu,om);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ui,{keyPath:tu})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ui)?e(r):(r.close(),await am(),e(await Cs()))})})}async function pc(n,e,t){const r=Ai(n,!0).put({[tu]:e,value:t});return new dr(r).toPromise()}async function cm(n,e){const t=Ai(n,!1).get(e),r=await new dr(t).toPromise();return r===void 0?null:r.value}function mc(n,e){const t=Ai(n,!0).delete(e);return new dr(t).toPromise()}const lm=800,um=3;class nu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cs(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>um)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wi._getInstance(sm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await rm(),!this.activeServiceWorker)return;this.sender=new tm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||im()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cs();return await pc(e,li,"1"),await mc(e,li),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>pc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>cm(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>mc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Ai(i,!1).getAll();return new dr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nu.type="LOCAL";const hm=nu;new ur(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(n,e){return e?st(e):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo extends Gl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return cn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return cn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function dm(n){return Wp(n.auth,new uo(n),n.bypassAuthState)}function fm(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),Hp(t,new uo(n),n.bypassAuthState)}async function pm(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),zp(t,new uo(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dm;case"linkViaPopup":case"linkViaRedirect":return pm;case"reauthViaPopup":case"reauthViaRedirect":return fm;default:Ge(this.auth,"internal-error")}}resolve(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=new ur(2e3,1e4);async function gm(n,e,t){if(nt(n.app))return Promise.reject(Ue(n,"operation-not-supported-in-this-environment"));const r=Ti(n);hp(n,e,co);const i=ru(r,t);return new Lt(r,"signInViaPopup",e,i).executeNotNull()}class Lt extends iu{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Lt.currentPopupAction&&Lt.currentPopupAction.cancel(),Lt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){ct(this.filter.length===1,"Popup operations only handle one event");const e=lo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ue(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ue(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ue(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mm.get())};e()}}Lt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m="pendingRedirect",Xr=new Map;class ym extends iu{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Xr.get(this.auth._key());if(!e){try{const r=await vm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Xr.set(this.auth._key(),e)}return this.bypassAuthState||Xr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vm(n,e){const t=Tm(e),r=Em(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Im(n,e){Xr.set(n._key(),e)}function Em(n){return st(n._redirectPersistence)}function Tm(n){return Qr(_m,n.config.apiKey,n.name)}async function wm(n,e,t=!1){if(nt(n.app))return Promise.reject(Bt(n));const r=Ti(n),i=ru(r,e),a=await new ym(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am=10*60*1e3;class Rm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!su(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ue(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Am&&this.cachedEventUids.clear(),this.cachedEventUids.has(gc(e))}saveEventToCache(e){this.cachedEventUids.add(gc(e)),this.lastProcessedEventTime=Date.now()}}function gc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function su({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return su(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pm(n,e={}){return In(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Cm=/^https?/;async function km(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Pm(n);for(const t of e)try{if(Dm(t))return}catch{}Ge(n,"unauthorized-domain")}function Dm(n){const e=Ps(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Cm.test(t))return!1;if(Sm.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm=new ur(3e4,6e4);function _c(){const n=$e().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Nm(n){return new Promise((e,t)=>{var r,i,o;function a(){_c(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_c(),t(Ue(n,"network-request-failed"))},timeout:Vm.get()})}if(!((i=(r=$e().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=$e().gapi)===null||o===void 0)&&o.load)a();else{const l=Lp("iframefcb");return $e()[l]=()=>{gapi.load?a():t(Ue(n,"network-request-failed"))},Op(`${Mp()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Yr=null,e})}let Yr=null;function xm(n){return Yr=Yr||Nm(n),Yr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om=new ur(5e3,15e3),Mm="__/auth/iframe",Lm="emulator/auth/iframe",Fm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Um=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Bm(n){const e=n.config;q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ro(e,Lm):`https://${n.config.authDomain}/${Mm}`,r={apiKey:e.apiKey,appName:n.name,v:vn},i=Um.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${lr(r).slice(1)}`}async function qm(n){const e=await xm(n),t=$e().gapi;return q(t,n,"internal-error"),e.open({where:document.body,url:Bm(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fm,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=Ue(n,"network-request-failed"),l=$e().setTimeout(()=>{o(a)},Om.get());function u(){$e().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$m=500,zm=600,Hm="_blank",Wm="http://localhost";class yc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Gm(n,e,t,r=$m,i=zm){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},jm),{width:r.toString(),height:i.toString(),top:o,left:a}),d=ke().toLowerCase();t&&(l=Ul(d)?Hm:t),Ll(d)&&(e=e||Wm,u.scrollbars="yes");const p=Object.entries(u).reduce((I,[b,k])=>`${I}${b}=${k},`,"");if(Pp(d)&&l!=="_self")return Km(e||"",l),new yc(null);const y=window.open(e||"",l,p);q(y,n,"popup-blocked");try{y.focus()}catch{}return new yc(y)}function Km(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm="__/auth/handler",Xm="emulator/auth/handler",Ym=encodeURIComponent("fac");async function vc(n,e,t,r,i,o){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:vn,eventId:i};if(e instanceof co){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Yd(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,y]of Object.entries({}))a[p]=y}if(e instanceof hr){const p=e.getScopes().filter(y=>y!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await n._getAppCheckToken(),d=u?`#${Ym}=${encodeURIComponent(u)}`:"";return`${Jm(n)}?${lr(l).slice(1)}${d}`}function Jm({config:n}){return n.emulator?ro(n,Xm):`https://${n.authDomain}/${Qm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="webStorageSupport";class Zm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jl,this._completeRedirectFn=wm,this._overrideRedirectResult=Im}async _openPopup(e,t,r,i){var o;ct((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await vc(e,t,r,Ps(),i);return Gm(e,a,lo())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await vc(e,t,r,Ps(),i);return nm(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(ct(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await qm(e),r=new Rm(e);return t.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ms,{type:ms},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[ms];a!==void 0&&t(!!a),Ge(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=km(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return zl()||Fl()||oo()}}const eg=Zm;var Ic="@firebase/auth",Ec="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rg(n){un(new zt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;q(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hl(n)},d=new Np(r,i,o,u);return Up(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),un(new zt("auth-internal",e=>{const t=Ti(e.getProvider("auth").getImmediate());return(r=>new tg(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rt(Ic,Ec,ng(n)),Rt(Ic,Ec,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=5*60,sg=Tl("authIdTokenMaxAge")||ig;let Tc=null;const og=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>sg)return;const i=t==null?void 0:t.token;Tc!==i&&(Tc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ag(n=bl()){const e=Zs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Fp(n,{popupRedirectResolver:eg,persistence:[hm,Zp,Jl]}),r=Tl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=og(o.toString());Kp(t,a,()=>a(t.currentUser)),Gp(t,l=>a(l))}}const i=Il("auth");return i&&Bp(t,`http://${i}`),t}function cg(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}xp({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=Ue("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",cg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rg("Browser");var lg="firebase",ug="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rt(lg,ug,"app");var wc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qt,ou;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,g){function v(){}v.prototype=g.prototype,T.D=g.prototype,T.prototype=new v,T.prototype.constructor=T,T.C=function(E,w,R){for(var _=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)_[fe-2]=arguments[fe];return g.prototype[w].apply(E,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,g,v){v||(v=0);var E=Array(16);if(typeof g=="string")for(var w=0;16>w;++w)E[w]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(w=0;16>w;++w)E[w]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=T.g[0],v=T.g[1],w=T.g[2];var R=T.g[3],_=g+(R^v&(w^R))+E[0]+3614090360&4294967295;g=v+(_<<7&4294967295|_>>>25),_=R+(w^g&(v^w))+E[1]+3905402710&4294967295,R=g+(_<<12&4294967295|_>>>20),_=w+(v^R&(g^v))+E[2]+606105819&4294967295,w=R+(_<<17&4294967295|_>>>15),_=v+(g^w&(R^g))+E[3]+3250441966&4294967295,v=w+(_<<22&4294967295|_>>>10),_=g+(R^v&(w^R))+E[4]+4118548399&4294967295,g=v+(_<<7&4294967295|_>>>25),_=R+(w^g&(v^w))+E[5]+1200080426&4294967295,R=g+(_<<12&4294967295|_>>>20),_=w+(v^R&(g^v))+E[6]+2821735955&4294967295,w=R+(_<<17&4294967295|_>>>15),_=v+(g^w&(R^g))+E[7]+4249261313&4294967295,v=w+(_<<22&4294967295|_>>>10),_=g+(R^v&(w^R))+E[8]+1770035416&4294967295,g=v+(_<<7&4294967295|_>>>25),_=R+(w^g&(v^w))+E[9]+2336552879&4294967295,R=g+(_<<12&4294967295|_>>>20),_=w+(v^R&(g^v))+E[10]+4294925233&4294967295,w=R+(_<<17&4294967295|_>>>15),_=v+(g^w&(R^g))+E[11]+2304563134&4294967295,v=w+(_<<22&4294967295|_>>>10),_=g+(R^v&(w^R))+E[12]+1804603682&4294967295,g=v+(_<<7&4294967295|_>>>25),_=R+(w^g&(v^w))+E[13]+4254626195&4294967295,R=g+(_<<12&4294967295|_>>>20),_=w+(v^R&(g^v))+E[14]+2792965006&4294967295,w=R+(_<<17&4294967295|_>>>15),_=v+(g^w&(R^g))+E[15]+1236535329&4294967295,v=w+(_<<22&4294967295|_>>>10),_=g+(w^R&(v^w))+E[1]+4129170786&4294967295,g=v+(_<<5&4294967295|_>>>27),_=R+(v^w&(g^v))+E[6]+3225465664&4294967295,R=g+(_<<9&4294967295|_>>>23),_=w+(g^v&(R^g))+E[11]+643717713&4294967295,w=R+(_<<14&4294967295|_>>>18),_=v+(R^g&(w^R))+E[0]+3921069994&4294967295,v=w+(_<<20&4294967295|_>>>12),_=g+(w^R&(v^w))+E[5]+3593408605&4294967295,g=v+(_<<5&4294967295|_>>>27),_=R+(v^w&(g^v))+E[10]+38016083&4294967295,R=g+(_<<9&4294967295|_>>>23),_=w+(g^v&(R^g))+E[15]+3634488961&4294967295,w=R+(_<<14&4294967295|_>>>18),_=v+(R^g&(w^R))+E[4]+3889429448&4294967295,v=w+(_<<20&4294967295|_>>>12),_=g+(w^R&(v^w))+E[9]+568446438&4294967295,g=v+(_<<5&4294967295|_>>>27),_=R+(v^w&(g^v))+E[14]+3275163606&4294967295,R=g+(_<<9&4294967295|_>>>23),_=w+(g^v&(R^g))+E[3]+4107603335&4294967295,w=R+(_<<14&4294967295|_>>>18),_=v+(R^g&(w^R))+E[8]+1163531501&4294967295,v=w+(_<<20&4294967295|_>>>12),_=g+(w^R&(v^w))+E[13]+2850285829&4294967295,g=v+(_<<5&4294967295|_>>>27),_=R+(v^w&(g^v))+E[2]+4243563512&4294967295,R=g+(_<<9&4294967295|_>>>23),_=w+(g^v&(R^g))+E[7]+1735328473&4294967295,w=R+(_<<14&4294967295|_>>>18),_=v+(R^g&(w^R))+E[12]+2368359562&4294967295,v=w+(_<<20&4294967295|_>>>12),_=g+(v^w^R)+E[5]+4294588738&4294967295,g=v+(_<<4&4294967295|_>>>28),_=R+(g^v^w)+E[8]+2272392833&4294967295,R=g+(_<<11&4294967295|_>>>21),_=w+(R^g^v)+E[11]+1839030562&4294967295,w=R+(_<<16&4294967295|_>>>16),_=v+(w^R^g)+E[14]+4259657740&4294967295,v=w+(_<<23&4294967295|_>>>9),_=g+(v^w^R)+E[1]+2763975236&4294967295,g=v+(_<<4&4294967295|_>>>28),_=R+(g^v^w)+E[4]+1272893353&4294967295,R=g+(_<<11&4294967295|_>>>21),_=w+(R^g^v)+E[7]+4139469664&4294967295,w=R+(_<<16&4294967295|_>>>16),_=v+(w^R^g)+E[10]+3200236656&4294967295,v=w+(_<<23&4294967295|_>>>9),_=g+(v^w^R)+E[13]+681279174&4294967295,g=v+(_<<4&4294967295|_>>>28),_=R+(g^v^w)+E[0]+3936430074&4294967295,R=g+(_<<11&4294967295|_>>>21),_=w+(R^g^v)+E[3]+3572445317&4294967295,w=R+(_<<16&4294967295|_>>>16),_=v+(w^R^g)+E[6]+76029189&4294967295,v=w+(_<<23&4294967295|_>>>9),_=g+(v^w^R)+E[9]+3654602809&4294967295,g=v+(_<<4&4294967295|_>>>28),_=R+(g^v^w)+E[12]+3873151461&4294967295,R=g+(_<<11&4294967295|_>>>21),_=w+(R^g^v)+E[15]+530742520&4294967295,w=R+(_<<16&4294967295|_>>>16),_=v+(w^R^g)+E[2]+3299628645&4294967295,v=w+(_<<23&4294967295|_>>>9),_=g+(w^(v|~R))+E[0]+4096336452&4294967295,g=v+(_<<6&4294967295|_>>>26),_=R+(v^(g|~w))+E[7]+1126891415&4294967295,R=g+(_<<10&4294967295|_>>>22),_=w+(g^(R|~v))+E[14]+2878612391&4294967295,w=R+(_<<15&4294967295|_>>>17),_=v+(R^(w|~g))+E[5]+4237533241&4294967295,v=w+(_<<21&4294967295|_>>>11),_=g+(w^(v|~R))+E[12]+1700485571&4294967295,g=v+(_<<6&4294967295|_>>>26),_=R+(v^(g|~w))+E[3]+2399980690&4294967295,R=g+(_<<10&4294967295|_>>>22),_=w+(g^(R|~v))+E[10]+4293915773&4294967295,w=R+(_<<15&4294967295|_>>>17),_=v+(R^(w|~g))+E[1]+2240044497&4294967295,v=w+(_<<21&4294967295|_>>>11),_=g+(w^(v|~R))+E[8]+1873313359&4294967295,g=v+(_<<6&4294967295|_>>>26),_=R+(v^(g|~w))+E[15]+4264355552&4294967295,R=g+(_<<10&4294967295|_>>>22),_=w+(g^(R|~v))+E[6]+2734768916&4294967295,w=R+(_<<15&4294967295|_>>>17),_=v+(R^(w|~g))+E[13]+1309151649&4294967295,v=w+(_<<21&4294967295|_>>>11),_=g+(w^(v|~R))+E[4]+4149444226&4294967295,g=v+(_<<6&4294967295|_>>>26),_=R+(v^(g|~w))+E[11]+3174756917&4294967295,R=g+(_<<10&4294967295|_>>>22),_=w+(g^(R|~v))+E[2]+718787259&4294967295,w=R+(_<<15&4294967295|_>>>17),_=v+(R^(w|~g))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+g&4294967295,T.g[1]=T.g[1]+(w+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+w&4294967295,T.g[3]=T.g[3]+R&4294967295}r.prototype.u=function(T,g){g===void 0&&(g=T.length);for(var v=g-this.blockSize,E=this.B,w=this.h,R=0;R<g;){if(w==0)for(;R<=v;)i(this,T,R),R+=this.blockSize;if(typeof T=="string"){for(;R<g;)if(E[w++]=T.charCodeAt(R++),w==this.blockSize){i(this,E),w=0;break}}else for(;R<g;)if(E[w++]=T[R++],w==this.blockSize){i(this,E),w=0;break}}this.h=w,this.o+=g},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var g=1;g<T.length-8;++g)T[g]=0;var v=8*this.o;for(g=T.length-8;g<T.length;++g)T[g]=v&255,v/=256;for(this.u(T),T=Array(16),g=v=0;4>g;++g)for(var E=0;32>E;E+=8)T[v++]=this.g[g]>>>E&255;return T};function o(T,g){var v=l;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=g(T)}function a(T,g){this.h=g;for(var v=[],E=!0,w=T.length-1;0<=w;w--){var R=T[w]|0;E&&R==g||(v[w]=R,E=!1)}this.g=v}var l={};function u(T){return-128<=T&&128>T?o(T,function(g){return new a([g|0],0>g?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return y;if(0>T)return C(d(-T));for(var g=[],v=1,E=0;T>=v;E++)g[E]=T/v|0,v*=4294967296;return new a(g,0)}function p(T,g){if(T.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(T.charAt(0)=="-")return C(p(T.substring(1),g));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(g,8)),E=y,w=0;w<T.length;w+=8){var R=Math.min(8,T.length-w),_=parseInt(T.substring(w,w+R),g);8>R?(R=d(Math.pow(g,R)),E=E.j(R).add(d(_))):(E=E.j(v),E=E.add(d(_)))}return E}var y=u(0),I=u(1),b=u(16777216);n=a.prototype,n.m=function(){if(V(this))return-C(this).m();for(var T=0,g=1,v=0;v<this.g.length;v++){var E=this.i(v);T+=(0<=E?E:4294967296+E)*g,g*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(k(this))return"0";if(V(this))return"-"+C(this).toString(T);for(var g=d(Math.pow(T,6)),v=this,E="";;){var w=Z(v,g).g;v=L(v,w.j(g));var R=((0<v.g.length?v.g[0]:v.h)>>>0).toString(T);if(v=w,k(v))return R+E;for(;6>R.length;)R="0"+R;E=R+E}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function k(T){if(T.h!=0)return!1;for(var g=0;g<T.g.length;g++)if(T.g[g]!=0)return!1;return!0}function V(T){return T.h==-1}n.l=function(T){return T=L(this,T),V(T)?-1:k(T)?0:1};function C(T){for(var g=T.g.length,v=[],E=0;E<g;E++)v[E]=~T.g[E];return new a(v,~T.h).add(I)}n.abs=function(){return V(this)?C(this):this},n.add=function(T){for(var g=Math.max(this.g.length,T.g.length),v=[],E=0,w=0;w<=g;w++){var R=E+(this.i(w)&65535)+(T.i(w)&65535),_=(R>>>16)+(this.i(w)>>>16)+(T.i(w)>>>16);E=_>>>16,R&=65535,_&=65535,v[w]=_<<16|R}return new a(v,v[v.length-1]&-2147483648?-1:0)};function L(T,g){return T.add(C(g))}n.j=function(T){if(k(this)||k(T))return y;if(V(this))return V(T)?C(this).j(C(T)):C(C(this).j(T));if(V(T))return C(this.j(C(T)));if(0>this.l(b)&&0>T.l(b))return d(this.m()*T.m());for(var g=this.g.length+T.g.length,v=[],E=0;E<2*g;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var w=0;w<T.g.length;w++){var R=this.i(E)>>>16,_=this.i(E)&65535,fe=T.i(w)>>>16,me=T.i(w)&65535;v[2*E+2*w]+=_*me,H(v,2*E+2*w),v[2*E+2*w+1]+=R*me,H(v,2*E+2*w+1),v[2*E+2*w+1]+=_*fe,H(v,2*E+2*w+1),v[2*E+2*w+2]+=R*fe,H(v,2*E+2*w+2)}for(E=0;E<g;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=g;E<2*g;E++)v[E]=0;return new a(v,0)};function H(T,g){for(;(T[g]&65535)!=T[g];)T[g+1]+=T[g]>>>16,T[g]&=65535,g++}function W(T,g){this.g=T,this.h=g}function Z(T,g){if(k(g))throw Error("division by zero");if(k(T))return new W(y,y);if(V(T))return g=Z(C(T),g),new W(C(g.g),C(g.h));if(V(g))return g=Z(T,C(g)),new W(C(g.g),g.h);if(30<T.g.length){if(V(T)||V(g))throw Error("slowDivide_ only works with positive integers.");for(var v=I,E=g;0>=E.l(T);)v=we(v),E=we(E);var w=ne(v,1),R=ne(E,1);for(E=ne(E,2),v=ne(v,2);!k(E);){var _=R.add(E);0>=_.l(T)&&(w=w.add(v),R=_),E=ne(E,1),v=ne(v,1)}return g=L(T,w.j(g)),new W(w,g)}for(w=y;0<=T.l(g);){for(v=Math.max(1,Math.floor(T.m()/g.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),R=d(v),_=R.j(g);V(_)||0<_.l(T);)v-=E,R=d(v),_=R.j(g);k(R)&&(R=I),w=w.add(R),T=L(T,_)}return new W(w,T)}n.A=function(T){return Z(this,T).h},n.and=function(T){for(var g=Math.max(this.g.length,T.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)&T.i(E);return new a(v,this.h&T.h)},n.or=function(T){for(var g=Math.max(this.g.length,T.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)|T.i(E);return new a(v,this.h|T.h)},n.xor=function(T){for(var g=Math.max(this.g.length,T.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)^T.i(E);return new a(v,this.h^T.h)};function we(T){for(var g=T.g.length+1,v=[],E=0;E<g;E++)v[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(v,T.h)}function ne(T,g){var v=g>>5;g%=32;for(var E=T.g.length-v,w=[],R=0;R<E;R++)w[R]=0<g?T.i(R+v)>>>g|T.i(R+v+1)<<32-g:T.i(R+v);return new a(w,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ou=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,qt=a}).apply(typeof wc<"u"?wc:typeof self<"u"?self:typeof window<"u"?window:{});var $r=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var au,qn,cu,Jr,ks,lu,uu,hu;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,h){return s==Array.prototype||s==Object.prototype||(s[c]=h.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof $r=="object"&&$r];for(var c=0;c<s.length;++c){var h=s[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(s,c){if(c)e:{var h=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var A=s[f];if(!(A in h))break e;h=h[A]}s=s[s.length-1],f=h[s],c=c(f),c!=f&&c!=null&&e(h,s,{configurable:!0,writable:!0,value:c})}}function o(s,c){s instanceof String&&(s+="");var h=0,f=!1,A={next:function(){if(!f&&h<s.length){var P=h++;return{value:c(P,s[P]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(s){return s||function(){return o(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(s){var c=typeof s;return c=c!="object"?c:s?Array.isArray(s)?"array":c:"null",c=="array"||c=="object"&&typeof s.length=="number"}function d(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function p(s,c,h){return s.call.apply(s.bind,arguments)}function y(s,c,h){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),s.apply(c,A)}}return function(){return s.apply(c,arguments)}}function I(s,c,h){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:y,I.apply(null,arguments)}function b(s,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function k(s,c){function h(){}h.prototype=c.prototype,s.aa=c.prototype,s.prototype=new h,s.prototype.constructor=s,s.Qb=function(f,A,P){for(var N=Array(arguments.length-2),te=2;te<arguments.length;te++)N[te-2]=arguments[te];return c.prototype[A].apply(f,N)}}function V(s){const c=s.length;if(0<c){const h=Array(c);for(let f=0;f<c;f++)h[f]=s[f];return h}return[]}function C(s,c){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(u(f)){const A=s.length||0,P=f.length||0;s.length=A+P;for(let N=0;N<P;N++)s[A+N]=f[N]}else s.push(f)}}class L{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function H(s){return/^[\s\xa0]*$/.test(s)}function W(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function Z(s){return Z[" "](s),s}Z[" "]=function(){};var we=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function ne(s,c,h){for(const f in s)c.call(h,s[f],f,s)}function T(s,c){for(const h in s)c.call(void 0,s[h],h,s)}function g(s){const c={};for(const h in s)c[h]=s[h];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(s,c){let h,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(h in f)s[h]=f[h];for(let P=0;P<v.length;P++)h=v[P],Object.prototype.hasOwnProperty.call(f,h)&&(s[h]=f[h])}}function w(s){var c=1;s=s.split(":");const h=[];for(;0<c&&s.length;)h.push(s.shift()),c--;return s.length&&h.push(s.join(":")),h}function R(s){l.setTimeout(()=>{throw s},0)}function _(){var s=Tr;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class fe{constructor(){this.h=this.g=null}add(c,h){const f=me.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var me=new L(()=>new qe,s=>s.reset());class qe{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Qe,Dt=!1,Tr=new fe,An=()=>{const s=l.Promise.resolve(void 0);Qe=()=>{s.then(Rn)}};var Rn=()=>{for(var s;s=_();){try{s.h.call(s.g)}catch(h){R(h)}var c=me;c.j(s),100>c.h&&(c.h++,s.next=c.g,c.g=s)}Dt=!1};function Xe(){this.s=this.s,this.C=this.C}Xe.prototype.s=!1,Xe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Xe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function re(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}re.prototype.h=function(){this.defaultPrevented=!0};var Xh=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return s}();function bn(s,c){if(re.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var h=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget){if(we){e:{try{Z(c.nodeName);var A=!0;break e}catch{}A=!1}A||(c=null)}}else h=="mouseover"?c=s.fromElement:h=="mouseout"&&(c=s.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Yh[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&bn.aa.h.call(this)}}k(bn,re);var Yh={2:"touch",3:"pen",4:"mouse"};bn.prototype.h=function(){bn.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var wr="closure_listenable_"+(1e6*Math.random()|0),Jh=0;function Zh(s,c,h,f,A){this.listener=s,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=A,this.key=++Jh,this.da=this.fa=!1}function Ar(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Rr(s){this.src=s,this.g={},this.h=0}Rr.prototype.add=function(s,c,h,f,A){var P=s.toString();s=this.g[P],s||(s=this.g[P]=[],this.h++);var N=qi(s,c,f,A);return-1<N?(c=s[N],h||(c.fa=!1)):(c=new Zh(c,this.src,P,!!f,A),c.fa=h,s.push(c)),c};function Bi(s,c){var h=c.type;if(h in s.g){var f=s.g[h],A=Array.prototype.indexOf.call(f,c,void 0),P;(P=0<=A)&&Array.prototype.splice.call(f,A,1),P&&(Ar(c),s.g[h].length==0&&(delete s.g[h],s.h--))}}function qi(s,c,h,f){for(var A=0;A<s.length;++A){var P=s[A];if(!P.da&&P.listener==c&&P.capture==!!h&&P.ha==f)return A}return-1}var ji="closure_lm_"+(1e6*Math.random()|0),$i={};function Yo(s,c,h,f,A){if(Array.isArray(c)){for(var P=0;P<c.length;P++)Yo(s,c[P],h,f,A);return null}return h=ea(h),s&&s[wr]?s.K(c,h,d(f)?!!f.capture:!1,A):ed(s,c,h,!1,f,A)}function ed(s,c,h,f,A,P){if(!c)throw Error("Invalid event type");var N=d(A)?!!A.capture:!!A,te=Hi(s);if(te||(s[ji]=te=new Rr(s)),h=te.add(c,h,f,N,P),h.proxy)return h;if(f=td(),h.proxy=f,f.src=s,f.listener=h,s.addEventListener)Xh||(A=N),A===void 0&&(A=!1),s.addEventListener(c.toString(),f,A);else if(s.attachEvent)s.attachEvent(Zo(c.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function td(){function s(h){return c.call(s.src,s.listener,h)}const c=nd;return s}function Jo(s,c,h,f,A){if(Array.isArray(c))for(var P=0;P<c.length;P++)Jo(s,c[P],h,f,A);else f=d(f)?!!f.capture:!!f,h=ea(h),s&&s[wr]?(s=s.i,c=String(c).toString(),c in s.g&&(P=s.g[c],h=qi(P,h,f,A),-1<h&&(Ar(P[h]),Array.prototype.splice.call(P,h,1),P.length==0&&(delete s.g[c],s.h--)))):s&&(s=Hi(s))&&(c=s.g[c.toString()],s=-1,c&&(s=qi(c,h,f,A)),(h=-1<s?c[s]:null)&&zi(h))}function zi(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[wr])Bi(c.i,s);else{var h=s.type,f=s.proxy;c.removeEventListener?c.removeEventListener(h,f,s.capture):c.detachEvent?c.detachEvent(Zo(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=Hi(c))?(Bi(h,s),h.h==0&&(h.src=null,c[ji]=null)):Ar(s)}}}function Zo(s){return s in $i?$i[s]:$i[s]="on"+s}function nd(s,c){if(s.da)s=!0;else{c=new bn(c,this);var h=s.listener,f=s.ha||s.src;s.fa&&zi(s),s=h.call(f,c)}return s}function Hi(s){return s=s[ji],s instanceof Rr?s:null}var Wi="__closure_events_fn_"+(1e9*Math.random()>>>0);function ea(s){return typeof s=="function"?s:(s[Wi]||(s[Wi]=function(c){return s.handleEvent(c)}),s[Wi])}function Ae(){Xe.call(this),this.i=new Rr(this),this.M=this,this.F=null}k(Ae,Xe),Ae.prototype[wr]=!0,Ae.prototype.removeEventListener=function(s,c,h,f){Jo(this,s,c,h,f)};function De(s,c){var h,f=s.F;if(f)for(h=[];f;f=f.F)h.push(f);if(s=s.M,f=c.type||c,typeof c=="string")c=new re(c,s);else if(c instanceof re)c.target=c.target||s;else{var A=c;c=new re(f,s),E(c,A)}if(A=!0,h)for(var P=h.length-1;0<=P;P--){var N=c.g=h[P];A=br(N,f,!0,c)&&A}if(N=c.g=s,A=br(N,f,!0,c)&&A,A=br(N,f,!1,c)&&A,h)for(P=0;P<h.length;P++)N=c.g=h[P],A=br(N,f,!1,c)&&A}Ae.prototype.N=function(){if(Ae.aa.N.call(this),this.i){var s=this.i,c;for(c in s.g){for(var h=s.g[c],f=0;f<h.length;f++)Ar(h[f]);delete s.g[c],s.h--}}this.F=null},Ae.prototype.K=function(s,c,h,f){return this.i.add(String(s),c,!1,h,f)},Ae.prototype.L=function(s,c,h,f){return this.i.add(String(s),c,!0,h,f)};function br(s,c,h,f){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();for(var A=!0,P=0;P<c.length;++P){var N=c[P];if(N&&!N.da&&N.capture==h){var te=N.listener,ge=N.ha||N.src;N.fa&&Bi(s.i,N),A=te.call(ge,f)!==!1&&A}}return A&&!f.defaultPrevented}function ta(s,c,h){if(typeof s=="function")h&&(s=I(s,h));else if(s&&typeof s.handleEvent=="function")s=I(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(s,c||0)}function na(s){s.g=ta(()=>{s.g=null,s.i&&(s.i=!1,na(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class rd extends Xe{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:na(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pn(s){Xe.call(this),this.h=s,this.g={}}k(Pn,Xe);var ra=[];function ia(s){ne(s.g,function(c,h){this.g.hasOwnProperty(h)&&zi(c)},s),s.g={}}Pn.prototype.N=function(){Pn.aa.N.call(this),ia(this)},Pn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gi=l.JSON.stringify,id=l.JSON.parse,sd=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function Ki(){}Ki.prototype.h=null;function sa(s){return s.h||(s.h=s.i())}function oa(){}var Sn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qi(){re.call(this,"d")}k(Qi,re);function Xi(){re.call(this,"c")}k(Xi,re);var Vt={},aa=null;function Pr(){return aa=aa||new Ae}Vt.La="serverreachability";function ca(s){re.call(this,Vt.La,s)}k(ca,re);function Cn(s){const c=Pr();De(c,new ca(c))}Vt.STAT_EVENT="statevent";function la(s,c){re.call(this,Vt.STAT_EVENT,s),this.stat=c}k(la,re);function Ve(s){const c=Pr();De(c,new la(c,s))}Vt.Ma="timingevent";function ua(s,c){re.call(this,Vt.Ma,s),this.size=c}k(ua,re);function kn(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},c)}function Dn(){this.g=!0}Dn.prototype.xa=function(){this.g=!1};function od(s,c,h,f,A,P){s.info(function(){if(s.g)if(P)for(var N="",te=P.split("&"),ge=0;ge<te.length;ge++){var X=te[ge].split("=");if(1<X.length){var Re=X[0];X=X[1];var be=Re.split("_");N=2<=be.length&&be[1]=="type"?N+(Re+"="+X+"&"):N+(Re+"=redacted&")}}else N=null;else N=P;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+c+`
`+h+`
`+N})}function ad(s,c,h,f,A,P,N){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+c+`
`+h+`
`+P+" "+N})}function Jt(s,c,h,f){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+ld(s,h)+(f?" "+f:"")})}function cd(s,c){s.info(function(){return"TIMEOUT: "+c})}Dn.prototype.info=function(){};function ld(s,c){if(!s.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(s=0;s<h.length;s++)if(Array.isArray(h[s])){var f=h[s];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var P=A[0];if(P!="noop"&&P!="stop"&&P!="close")for(var N=1;N<A.length;N++)A[N]=""}}}}return Gi(h)}catch{return c}}var Sr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ha={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Yi;function Cr(){}k(Cr,Ki),Cr.prototype.g=function(){return new XMLHttpRequest},Cr.prototype.i=function(){return{}},Yi=new Cr;function ft(s,c,h,f){this.j=s,this.i=c,this.l=h,this.R=f||1,this.U=new Pn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new da}function da(){this.i=null,this.g="",this.h=!1}var fa={},Ji={};function Zi(s,c,h){s.L=1,s.v=Nr(Ye(c)),s.m=h,s.P=!0,pa(s,null)}function pa(s,c){s.F=Date.now(),kr(s),s.A=Ye(s.v);var h=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),Sa(h.i,"t",f),s.C=0,h=s.j.J,s.h=new da,s.g=Wa(s.j,h?c:null,!s.m),0<s.O&&(s.M=new rd(I(s.Y,s,s.g),s.O)),c=s.U,h=s.g,f=s.ca;var A="readystatechange";Array.isArray(A)||(A&&(ra[0]=A.toString()),A=ra);for(var P=0;P<A.length;P++){var N=Yo(h,A[P],f||c.handleEvent,!1,c.h||c);if(!N)break;c.g[N.key]=N}c=s.H?g(s.H):{},s.m?(s.u||(s.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,c)):(s.u="GET",s.g.ea(s.A,s.u,null,c)),Cn(),od(s.i,s.u,s.A,s.l,s.R,s.m)}ft.prototype.ca=function(s){s=s.target;const c=this.M;c&&Je(s)==3?c.j():this.Y(s)},ft.prototype.Y=function(s){try{if(s==this.g)e:{const be=Je(this.g);var c=this.g.Ba();const tn=this.g.Z();if(!(3>be)&&(be!=3||this.g&&(this.h.h||this.g.oa()||Oa(this.g)))){this.J||be!=4||c==7||(c==8||0>=tn?Cn(3):Cn(2)),es(this);var h=this.g.Z();this.X=h;t:if(ma(this)){var f=Oa(this.g);s="";var A=f.length,P=Je(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nt(this),Vn(this);var N="";break t}this.h.i=new l.TextDecoder}for(c=0;c<A;c++)this.h.h=!0,s+=this.h.i.decode(f[c],{stream:!(P&&c==A-1)});f.length=0,this.h.g+=s,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=h==200,ad(this.i,this.u,this.A,this.l,this.R,be,h),this.o){if(this.T&&!this.K){t:{if(this.g){var te,ge=this.g;if((te=ge.g?ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(te)){var X=te;break t}}X=null}if(h=X)Jt(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ts(this,h);else{this.o=!1,this.s=3,Ve(12),Nt(this),Vn(this);break e}}if(this.P){h=!0;let Fe;for(;!this.J&&this.C<N.length;)if(Fe=ud(this,N),Fe==Ji){be==4&&(this.s=4,Ve(14),h=!1),Jt(this.i,this.l,null,"[Incomplete Response]");break}else if(Fe==fa){this.s=4,Ve(15),Jt(this.i,this.l,N,"[Invalid Chunk]"),h=!1;break}else Jt(this.i,this.l,Fe,null),ts(this,Fe);if(ma(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),be!=4||N.length!=0||this.h.h||(this.s=1,Ve(16),h=!1),this.o=this.o&&h,!h)Jt(this.i,this.l,N,"[Invalid Chunked Response]"),Nt(this),Vn(this);else if(0<N.length&&!this.W){this.W=!0;var Re=this.j;Re.g==this&&Re.ba&&!Re.M&&(Re.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),as(Re),Re.M=!0,Ve(11))}}else Jt(this.i,this.l,N,null),ts(this,N);be==4&&Nt(this),this.o&&!this.J&&(be==4?ja(this.j,this):(this.o=!1,kr(this)))}else Pd(this.g),h==400&&0<N.indexOf("Unknown SID")?(this.s=3,Ve(12)):(this.s=0,Ve(13)),Nt(this),Vn(this)}}}catch{}finally{}};function ma(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function ud(s,c){var h=s.C,f=c.indexOf(`
`,h);return f==-1?Ji:(h=Number(c.substring(h,f)),isNaN(h)?fa:(f+=1,f+h>c.length?Ji:(c=c.slice(f,f+h),s.C=f+h,c)))}ft.prototype.cancel=function(){this.J=!0,Nt(this)};function kr(s){s.S=Date.now()+s.I,ga(s,s.I)}function ga(s,c){if(s.B!=null)throw Error("WatchDog timer not null");s.B=kn(I(s.ba,s),c)}function es(s){s.B&&(l.clearTimeout(s.B),s.B=null)}ft.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(cd(this.i,this.A),this.L!=2&&(Cn(),Ve(17)),Nt(this),this.s=2,Vn(this)):ga(this,this.S-s)};function Vn(s){s.j.G==0||s.J||ja(s.j,s)}function Nt(s){es(s);var c=s.M;c&&typeof c.ma=="function"&&c.ma(),s.M=null,ia(s.U),s.g&&(c=s.g,s.g=null,c.abort(),c.ma())}function ts(s,c){try{var h=s.j;if(h.G!=0&&(h.g==s||ns(h.h,s))){if(!s.K&&ns(h.h,s)&&h.G==3){try{var f=h.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<s.F)Ur(h),Lr(h);else break e;os(h),Ve(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=kn(I(h.Za,h),6e3));if(1>=va(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Ot(h,11)}else if((s.K||h.g==s)&&Ur(h),!H(c))for(A=h.Da.g.parse(c),c=0;c<A.length;c++){let X=A[c];if(h.T=X[0],X=X[1],h.G==2)if(X[0]=="c"){h.K=X[1],h.ia=X[2];const Re=X[3];Re!=null&&(h.la=Re,h.j.info("VER="+h.la));const be=X[4];be!=null&&(h.Aa=be,h.j.info("SVER="+h.Aa));const tn=X[5];tn!=null&&typeof tn=="number"&&0<tn&&(f=1.5*tn,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Fe=s.g;if(Fe){const qr=Fe.g?Fe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qr){var P=f.h;P.g||qr.indexOf("spdy")==-1&&qr.indexOf("quic")==-1&&qr.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(rs(P,P.h),P.h=null))}if(f.D){const cs=Fe.g?Fe.g.getResponseHeader("X-HTTP-Session-Id"):null;cs&&(f.ya=cs,ie(f.I,f.D,cs))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-s.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var N=s;if(f.qa=Ha(f,f.J?f.ia:null,f.W),N.K){Ia(f.h,N);var te=N,ge=f.L;ge&&(te.I=ge),te.B&&(es(te),kr(te)),f.g=N}else Ba(f);0<h.i.length&&Fr(h)}else X[0]!="stop"&&X[0]!="close"||Ot(h,7);else h.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?Ot(h,7):ss(h):X[0]!="noop"&&h.l&&h.l.ta(X),h.v=0)}}Cn(4)}catch{}}var hd=class{constructor(s,c){this.g=s,this.map=c}};function _a(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ya(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function va(s){return s.h?1:s.g?s.g.size:0}function ns(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function rs(s,c){s.g?s.g.add(c):s.h=c}function Ia(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}_a.prototype.cancel=function(){if(this.i=Ea(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Ea(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const h of s.g.values())c=c.concat(h.D);return c}return V(s.i)}function dd(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(u(s)){for(var c=[],h=s.length,f=0;f<h;f++)c.push(s[f]);return c}c=[],h=0;for(f in s)c[h++]=s[f];return c}function fd(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(u(s)||typeof s=="string"){var c=[];s=s.length;for(var h=0;h<s;h++)c.push(h);return c}c=[],h=0;for(const f in s)c[h++]=f;return c}}}function Ta(s,c){if(s.forEach&&typeof s.forEach=="function")s.forEach(c,void 0);else if(u(s)||typeof s=="string")Array.prototype.forEach.call(s,c,void 0);else for(var h=fd(s),f=dd(s),A=f.length,P=0;P<A;P++)c.call(void 0,f[P],h&&h[P],s)}var wa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pd(s,c){if(s){s=s.split("&");for(var h=0;h<s.length;h++){var f=s[h].indexOf("="),A=null;if(0<=f){var P=s[h].substring(0,f);A=s[h].substring(f+1)}else P=s[h];c(P,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function xt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof xt){this.h=s.h,Dr(this,s.j),this.o=s.o,this.g=s.g,Vr(this,s.s),this.l=s.l;var c=s.i,h=new On;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Aa(this,h),this.m=s.m}else s&&(c=String(s).match(wa))?(this.h=!1,Dr(this,c[1]||"",!0),this.o=Nn(c[2]||""),this.g=Nn(c[3]||"",!0),Vr(this,c[4]),this.l=Nn(c[5]||"",!0),Aa(this,c[6]||"",!0),this.m=Nn(c[7]||"")):(this.h=!1,this.i=new On(null,this.h))}xt.prototype.toString=function(){var s=[],c=this.j;c&&s.push(xn(c,Ra,!0),":");var h=this.g;return(h||c=="file")&&(s.push("//"),(c=this.o)&&s.push(xn(c,Ra,!0),"@"),s.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&s.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&s.push("/"),s.push(xn(h,h.charAt(0)=="/"?_d:gd,!0))),(h=this.i.toString())&&s.push("?",h),(h=this.m)&&s.push("#",xn(h,vd)),s.join("")};function Ye(s){return new xt(s)}function Dr(s,c,h){s.j=h?Nn(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function Vr(s,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);s.s=c}else s.s=null}function Aa(s,c,h){c instanceof On?(s.i=c,Id(s.i,s.h)):(h||(c=xn(c,yd)),s.i=new On(c,s.h))}function ie(s,c,h){s.i.set(c,h)}function Nr(s){return ie(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Nn(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function xn(s,c,h){return typeof s=="string"?(s=encodeURI(s).replace(c,md),h&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function md(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Ra=/[#\/\?@]/g,gd=/[#\?:]/g,_d=/[#\?]/g,yd=/[#\?@]/g,vd=/#/g;function On(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function pt(s){s.g||(s.g=new Map,s.h=0,s.i&&pd(s.i,function(c,h){s.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=On.prototype,n.add=function(s,c){pt(this),this.i=null,s=Zt(this,s);var h=this.g.get(s);return h||this.g.set(s,h=[]),h.push(c),this.h+=1,this};function ba(s,c){pt(s),c=Zt(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function Pa(s,c){return pt(s),c=Zt(s,c),s.g.has(c)}n.forEach=function(s,c){pt(this),this.g.forEach(function(h,f){h.forEach(function(A){s.call(c,A,f,this)},this)},this)},n.na=function(){pt(this);const s=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let f=0;f<c.length;f++){const A=s[f];for(let P=0;P<A.length;P++)h.push(c[f])}return h},n.V=function(s){pt(this);let c=[];if(typeof s=="string")Pa(this,s)&&(c=c.concat(this.g.get(Zt(this,s))));else{s=Array.from(this.g.values());for(let h=0;h<s.length;h++)c=c.concat(s[h])}return c},n.set=function(s,c){return pt(this),this.i=null,s=Zt(this,s),Pa(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=this.V(s),0<s.length?String(s[0]):c):c};function Sa(s,c,h){ba(s,c),0<h.length&&(s.i=null,s.g.set(Zt(s,c),V(h)),s.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var f=c[h];const P=encodeURIComponent(String(f)),N=this.V(f);for(f=0;f<N.length;f++){var A=P;N[f]!==""&&(A+="="+encodeURIComponent(String(N[f]))),s.push(A)}}return this.i=s.join("&")};function Zt(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function Id(s,c){c&&!s.j&&(pt(s),s.i=null,s.g.forEach(function(h,f){var A=f.toLowerCase();f!=A&&(ba(this,f),Sa(this,A,h))},s)),s.j=c}function Ed(s,c){const h=new Dn;if(l.Image){const f=new Image;f.onload=b(mt,h,"TestLoadImage: loaded",!0,c,f),f.onerror=b(mt,h,"TestLoadImage: error",!1,c,f),f.onabort=b(mt,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=b(mt,h,"TestLoadImage: timeout",!1,c,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else c(!1)}function Td(s,c){const h=new Dn,f=new AbortController,A=setTimeout(()=>{f.abort(),mt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:f.signal}).then(P=>{clearTimeout(A),P.ok?mt(h,"TestPingServer: ok",!0,c):mt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),mt(h,"TestPingServer: error",!1,c)})}function mt(s,c,h,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(h)}catch{}}function wd(){this.g=new sd}function Ad(s,c,h){const f=h||"";try{Ta(s,function(A,P){let N=A;d(A)&&(N=Gi(A)),c.push(f+P+"="+encodeURIComponent(N))})}catch(A){throw c.push(f+"type="+encodeURIComponent("_badmap")),A}}function xr(s){this.l=s.Ub||null,this.j=s.eb||!1}k(xr,Ki),xr.prototype.g=function(){return new Or(this.l,this.j)},xr.prototype.i=function(s){return function(){return s}}({});function Or(s,c){Ae.call(this),this.D=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Or,Ae),n=Or.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=c,this.readyState=1,Ln(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(c.body=s),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mn(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Ln(this)),this.g&&(this.readyState=3,Ln(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ca(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ca(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?Mn(this):Ln(this),this.readyState==3&&Ca(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Mn(this))},n.Qa=function(s){this.g&&(this.response=s,Mn(this))},n.ga=function(){this.g&&Mn(this)};function Mn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Ln(s)}n.setRequestHeader=function(s,c){this.u.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,s.push(h[0]+": "+h[1]),h=c.next();return s.join(`\r
`)};function Ln(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Or.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function ka(s){let c="";return ne(s,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function is(s,c,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=ka(h),typeof s=="string"?h!=null&&encodeURIComponent(String(h)):ie(s,c,h))}function ae(s){Ae.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(ae,Ae);var Rd=/^https?$/i,bd=["POST","PUT"];n=ae.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Yi.g(),this.v=this.o?sa(this.o):sa(Yi),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(P){Da(this,P);return}if(s=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)h.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const P of f.keys())h.set(P,f.get(P));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),A=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(bd,c,void 0))||f||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,N]of h)this.g.setRequestHeader(P,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{xa(this),this.u=!0,this.g.send(s),this.u=!1}catch(P){Da(this,P)}};function Da(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.m=5,Va(s),Mr(s)}function Va(s){s.A||(s.A=!0,De(s,"complete"),De(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,De(this,"complete"),De(this,"abort"),Mr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Mr(this,!0)),ae.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Na(this):this.bb())},n.bb=function(){Na(this)};function Na(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Je(s)!=4||s.Z()!=2)){if(s.u&&Je(s)==4)ta(s.Ea,0,s);else if(De(s,"readystatechange"),Je(s)==4){s.h=!1;try{const N=s.Z();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var f;if(f=N===0){var A=String(s.D).match(wa)[1]||null;!A&&l.self&&l.self.location&&(A=l.self.location.protocol.slice(0,-1)),f=!Rd.test(A?A.toLowerCase():"")}h=f}if(h)De(s,"complete"),De(s,"success");else{s.m=6;try{var P=2<Je(s)?s.g.statusText:""}catch{P=""}s.l=P+" ["+s.Z()+"]",Va(s)}}finally{Mr(s)}}}}function Mr(s,c){if(s.g){xa(s);const h=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,c||De(s,"ready");try{h.onreadystatechange=f}catch{}}}function xa(s){s.I&&(l.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Je(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Je(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),id(c)}};function Oa(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Pd(s){const c={};s=(s.g&&2<=Je(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(H(s[f]))continue;var h=w(s[f]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=c[A]||[];c[A]=P,P.push(h)}T(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fn(s,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[s]||c}function Ma(s){this.Aa=0,this.i=[],this.j=new Dn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fn("baseRetryDelayMs",5e3,s),this.cb=Fn("retryDelaySeedMs",1e4,s),this.Wa=Fn("forwardChannelMaxRetries",2,s),this.wa=Fn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new _a(s&&s.concurrentRequestLimit),this.Da=new wd,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ma.prototype,n.la=8,n.G=1,n.connect=function(s,c,h,f){Ve(0),this.W=s,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=Ha(this,null,this.W),Fr(this)};function ss(s){if(La(s),s.G==3){var c=s.U++,h=Ye(s.I);if(ie(h,"SID",s.K),ie(h,"RID",c),ie(h,"TYPE","terminate"),Un(s,h),c=new ft(s,s.j,c),c.L=2,c.v=Nr(Ye(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=Wa(c.j,null),c.g.ea(c.v)),c.F=Date.now(),kr(c)}za(s)}function Lr(s){s.g&&(as(s),s.g.cancel(),s.g=null)}function La(s){Lr(s),s.u&&(l.clearTimeout(s.u),s.u=null),Ur(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function Fr(s){if(!ya(s.h)&&!s.s){s.s=!0;var c=s.Ga;Qe||An(),Dt||(Qe(),Dt=!0),Tr.add(c,s),s.B=0}}function Sd(s,c){return va(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=c.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=kn(I(s.Ga,s,c),$a(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const A=new ft(this,this.j,s);let P=this.o;if(this.S&&(P?(P=g(P),E(P,this.S)):P=this.S),this.m!==null||this.O||(A.H=P,P=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Ua(this,A,c),h=Ye(this.I),ie(h,"RID",s),ie(h,"CVER",22),this.D&&ie(h,"X-HTTP-Session-Id",this.D),Un(this,h),P&&(this.O?c="headers="+encodeURIComponent(String(ka(P)))+"&"+c:this.m&&is(h,this.m,P)),rs(this.h,A),this.Ua&&ie(h,"TYPE","init"),this.P?(ie(h,"$req",c),ie(h,"SID","null"),A.T=!0,Zi(A,h,null)):Zi(A,h,c),this.G=2}}else this.G==3&&(s?Fa(this,s):this.i.length==0||ya(this.h)||Fa(this))};function Fa(s,c){var h;c?h=c.l:h=s.U++;const f=Ye(s.I);ie(f,"SID",s.K),ie(f,"RID",h),ie(f,"AID",s.T),Un(s,f),s.m&&s.o&&is(f,s.m,s.o),h=new ft(s,s.j,h,s.B+1),s.m===null&&(h.H=s.o),c&&(s.i=c.D.concat(s.i)),c=Ua(s,h,1e3),h.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),rs(s.h,h),Zi(h,f,c)}function Un(s,c){s.H&&ne(s.H,function(h,f){ie(c,f,h)}),s.l&&Ta({},function(h,f){ie(c,f,h)})}function Ua(s,c,h){h=Math.min(s.i.length,h);var f=s.l?I(s.l.Na,s.l,s):null;e:{var A=s.i;let P=-1;for(;;){const N=["count="+h];P==-1?0<h?(P=A[0].g,N.push("ofs="+P)):P=0:N.push("ofs="+P);let te=!0;for(let ge=0;ge<h;ge++){let X=A[ge].g;const Re=A[ge].map;if(X-=P,0>X)P=Math.max(0,A[ge].g-100),te=!1;else try{Ad(Re,N,"req"+X+"_")}catch{f&&f(Re)}}if(te){f=N.join("&");break e}}}return s=s.i.splice(0,h),c.D=s,f}function Ba(s){if(!s.g&&!s.u){s.Y=1;var c=s.Fa;Qe||An(),Dt||(Qe(),Dt=!0),Tr.add(c,s),s.v=0}}function os(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=kn(I(s.Fa,s),$a(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,qa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=kn(I(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ve(10),Lr(this),qa(this))};function as(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function qa(s){s.g=new ft(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var c=Ye(s.qa);ie(c,"RID","rpc"),ie(c,"SID",s.K),ie(c,"AID",s.T),ie(c,"CI",s.F?"0":"1"),!s.F&&s.ja&&ie(c,"TO",s.ja),ie(c,"TYPE","xmlhttp"),Un(s,c),s.m&&s.o&&is(c,s.m,s.o),s.L&&(s.g.I=s.L);var h=s.g;s=s.ia,h.L=1,h.v=Nr(Ye(c)),h.m=null,h.P=!0,pa(h,s)}n.Za=function(){this.C!=null&&(this.C=null,Lr(this),os(this),Ve(19))};function Ur(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function ja(s,c){var h=null;if(s.g==c){Ur(s),as(s),s.g=null;var f=2}else if(ns(s.h,c))h=c.D,Ia(s.h,c),f=1;else return;if(s.G!=0){if(c.o)if(f==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var A=s.B;f=Pr(),De(f,new ua(f,h)),Fr(s)}else Ba(s);else if(A=c.s,A==3||A==0&&0<c.X||!(f==1&&Sd(s,c)||f==2&&os(s)))switch(h&&0<h.length&&(c=s.h,c.i=c.i.concat(h)),A){case 1:Ot(s,5);break;case 4:Ot(s,10);break;case 3:Ot(s,6);break;default:Ot(s,2)}}}function $a(s,c){let h=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(h*=2),h*c}function Ot(s,c){if(s.j.info("Error code "+c),c==2){var h=I(s.fb,s),f=s.Xa;const A=!f;f=new xt(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Dr(f,"https"),Nr(f),A?Ed(f.toString(),h):Td(f.toString(),h)}else Ve(2);s.G=0,s.l&&s.l.sa(c),za(s),La(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Ve(2)):(this.j.info("Failed to ping google.com"),Ve(1))};function za(s){if(s.G=0,s.ka=[],s.l){const c=Ea(s.h);(c.length!=0||s.i.length!=0)&&(C(s.ka,c),C(s.ka,s.i),s.h.i.length=0,V(s.i),s.i.length=0),s.l.ra()}}function Ha(s,c,h){var f=h instanceof xt?Ye(h):new xt(h);if(f.g!="")c&&(f.g=c+"."+f.g),Vr(f,f.s);else{var A=l.location;f=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;var P=new xt(null);f&&Dr(P,f),c&&(P.g=c),A&&Vr(P,A),h&&(P.l=h),f=P}return h=s.D,c=s.ya,h&&c&&ie(f,h,c),ie(f,"VER",s.la),Un(s,f),f}function Wa(s,c,h){if(c&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Ca&&!s.pa?new ae(new xr({eb:h})):new ae(s.pa),c.Ha(s.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ga(){}n=Ga.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Br(){}Br.prototype.g=function(s,c){return new Me(s,c)};function Me(s,c){Ae.call(this),this.g=new Ma(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(s?s["X-WebChannel-Client-Profile"]=c.va:s={"X-WebChannel-Client-Profile":c.va}),this.g.S=s,(s=c&&c.Sb)&&!H(s)&&(this.g.m=s),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!H(c)&&(this.g.D=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new en(this)}k(Me,Ae),Me.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Me.prototype.close=function(){ss(this.g)},Me.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var h={};h.__data__=s,s=h}else this.u&&(h={},h.__data__=Gi(s),s=h);c.i.push(new hd(c.Ya++,s)),c.G==3&&Fr(c)},Me.prototype.N=function(){this.g.l=null,delete this.j,ss(this.g),delete this.g,Me.aa.N.call(this)};function Ka(s){Qi.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){e:{for(const h in c){s=h;break e}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}k(Ka,Qi);function Qa(){Xi.call(this),this.status=1}k(Qa,Xi);function en(s){this.g=s}k(en,Ga),en.prototype.ua=function(){De(this.g,"a")},en.prototype.ta=function(s){De(this.g,new Ka(s))},en.prototype.sa=function(s){De(this.g,new Qa)},en.prototype.ra=function(){De(this.g,"b")},Br.prototype.createWebChannel=Br.prototype.g,Me.prototype.send=Me.prototype.o,Me.prototype.open=Me.prototype.m,Me.prototype.close=Me.prototype.close,hu=function(){return new Br},uu=function(){return Pr()},lu=Vt,ks={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Sr.NO_ERROR=0,Sr.TIMEOUT=8,Sr.HTTP_ERROR=6,Jr=Sr,ha.COMPLETE="complete",cu=ha,oa.EventType=Sn,Sn.OPEN="a",Sn.CLOSE="b",Sn.ERROR="c",Sn.MESSAGE="d",Ae.prototype.listen=Ae.prototype.K,qn=oa,ae.prototype.listenOnce=ae.prototype.L,ae.prototype.getLastError=ae.prototype.Ka,ae.prototype.getLastErrorCode=ae.prototype.Ba,ae.prototype.getStatus=ae.prototype.Z,ae.prototype.getResponseJson=ae.prototype.Oa,ae.prototype.getResponseText=ae.prototype.oa,ae.prototype.send=ae.prototype.ea,ae.prototype.setWithCredentials=ae.prototype.Ha,au=ae}).apply(typeof $r<"u"?$r:typeof self<"u"?self:typeof window<"u"?window:{});const Ac="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Se.UNAUTHENTICATED=new Se(null),Se.GOOGLE_CREDENTIALS=new Se("google-credentials-uid"),Se.FIRST_PARTY=new Se("first-party-uid"),Se.MOCK_USER=new Se("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let En="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new Ys("@firebase/firestore");function Bn(){return Wt.logLevel}function M(n,...e){if(Wt.logLevel<=K.DEBUG){const t=e.map(ho);Wt.debug(`Firestore (${En}): ${n}`,...t)}}function lt(n,...e){if(Wt.logLevel<=K.ERROR){const t=e.map(ho);Wt.error(`Firestore (${En}): ${n}`,...t)}}function dn(n,...e){if(Wt.logLevel<=K.WARN){const t=e.map(ho);Wt.warn(`Firestore (${En}): ${n}`,...t)}}function ho(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(n="Unexpected state"){const e=`FIRESTORE (${En}) INTERNAL ASSERTION FAILED: `+n;throw lt(e),new Error(e)}function ee(n,e){n||j()}function z(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends dt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Se.UNAUTHENTICATED))}shutdown(){}}class dg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class fg{constructor(e){this.t=e,this.currentUser=Se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ee(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let o=new ot;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ot,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ot)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ee(typeof r.accessToken=="string"),new du(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ee(e===null||typeof e=="string"),new Se(e)}}class pg{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Se.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class mg{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new pg(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Se.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _g{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){ee(this.o===void 0);const r=o=>{o.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ee(typeof t.token=="string"),this.R=t.token,new gg(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=yg(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%e.length))}return r}}function J(n,e){return n<e?-1:n>e?1:0}function fn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new de(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.timestamp=e}static fromTimestamp(e){return new $(e)}static min(){return new $(new de(0,0))}static max(){return new $(new de(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,t,r){t===void 0?t=0:t>e.length&&j(),r===void 0?r=e.length-t:r>e.length-t&&j(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Jn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Jn?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=e.get(i),a=t.get(i);if(o<a)return-1;if(o>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class se extends Jn{construct(e,t,r){return new se(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new se(t)}static emptyPath(){return new se([])}}const vg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ve extends Jn{construct(e,t,r){return new ve(e,t,r)}static isValidIdentifier(e){return vg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ve(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new O(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new O(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new O(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(o(),i++)}if(o(),a)throw new O(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ve(t)}static emptyPath(){return new ve([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(se.fromString(e))}static fromName(e){return new U(se.fromString(e).popFirst(5))}static empty(){return new U(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new se(e.slice()))}}function Ig(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=$.fromTimestamp(r===1e9?new de(t+1,0):new de(t,r));return new Pt(i,U.empty(),e)}function Eg(n){return new Pt(n.readTime,n.key,-1)}class Pt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Pt($.min(),U.empty(),-1)}static max(){return new Pt($.max(),U.empty(),-1)}}function Tg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(n.documentKey,e.documentKey),t!==0?t:J(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ag{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==wg)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):D.reject(t)}static resolve(e){return new D((t,r)=>{t(e)})}static reject(e){return new D((t,r)=>{r(e)})}static waitFor(e){return new D((t,r)=>{let i=0,o=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++o,a&&o===i&&t()},u=>r(u))}),a=!0,o===i&&t()})}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next(i=>i?D.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new D((r,i)=>{const o=e.length,a=new Array(o);let l=0;for(let u=0;u<o;u++){const d=u;t(e[d]).next(p=>{a[d]=p,++l,l===o&&r(a)},p=>i(p))}})}static doWhile(e,t){return new D((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}function Rg(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function pr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}fo.oe=-1;function Ri(n){return n==null}function hi(n){return n===0&&1/n==-1/0}function bg(n){return typeof n=="number"&&Number.isInteger(n)&&!hi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Qt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function pu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,t){this.comparator=e,this.root=t||ye.EMPTY}insert(e,t){return new oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ye.BLACK,null,null))}remove(e){return new oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ye.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zr(this.root,e,this.comparator,!1)}getReverseIterator(){return new zr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zr(this.root,e,this.comparator,!0)}}class zr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ye{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??ye.RED,this.left=i??ye.EMPTY,this.right=o??ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new ye(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ye.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const e=this.left.check();if(e!==this.right.check())throw j();return e+(this.isRed()?0:1)}}ye.EMPTY=null,ye.RED=!0,ye.BLACK=!1;ye.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(e,t,r,i,o){return this}insert(e,t,r){return new ye(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.comparator=e,this.data=new oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new bc(this.data.getIterator())}getIteratorFrom(e){return new bc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ie)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ie(this.comparator);return t.data=e,t}}class bc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.fields=e,e.sort(ve.comparator)}static empty(){return new Le([])}unionWith(e){let t=new Ie(ve.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Le(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return fn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new mu("Invalid base64 string: "+o):o}}(e);return new Te(t)}static fromUint8Array(e){const t=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new Te(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Te.EMPTY_BYTE_STRING=new Te("");const Pg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function St(n){if(ee(!!n),typeof n=="string"){let e=0;const t=Pg.exec(n);if(ee(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:le(n.seconds),nanos:le(n.nanos)}}function le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Gt(n){return typeof n=="string"?Te.fromBase64String(n):Te.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function mo(n){const e=n.mapValue.fields.__previous_value__;return po(e)?mo(e):e}function Zn(n){const e=St(n.mapValue.fields.__local_write_time__.timestampValue);return new de(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e,t,r,i,o,a,l,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class er{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new er("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof er&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr={mapValue:{}};function Kt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?po(n)?4:kg(n)?9007199254740991:Cg(n)?10:11:j()}function Ke(n,e){if(n===e)return!0;const t=Kt(n);if(t!==Kt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Zn(n).isEqual(Zn(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=St(i.timestampValue),l=St(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return Gt(i.bytesValue).isEqual(Gt(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return le(i.geoPointValue.latitude)===le(o.geoPointValue.latitude)&&le(i.geoPointValue.longitude)===le(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return le(i.integerValue)===le(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=le(i.doubleValue),l=le(o.doubleValue);return a===l?hi(a)===hi(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return fn(n.arrayValue.values||[],e.arrayValue.values||[],Ke);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},l=o.mapValue.fields||{};if(Rc(a)!==Rc(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Ke(a[u],l[u])))return!1;return!0}(n,e);default:return j()}}function tr(n,e){return(n.values||[]).find(t=>Ke(t,e))!==void 0}function pn(n,e){if(n===e)return 0;const t=Kt(n),r=Kt(e);if(t!==r)return J(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return J(n.booleanValue,e.booleanValue);case 2:return function(o,a){const l=le(o.integerValue||o.doubleValue),u=le(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Pc(n.timestampValue,e.timestampValue);case 4:return Pc(Zn(n),Zn(e));case 5:return J(n.stringValue,e.stringValue);case 6:return function(o,a){const l=Gt(o),u=Gt(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const l=o.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const p=J(l[d],u[d]);if(p!==0)return p}return J(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const l=J(le(o.latitude),le(a.latitude));return l!==0?l:J(le(o.longitude),le(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Sc(n.arrayValue,e.arrayValue);case 10:return function(o,a){var l,u,d,p;const y=o.fields||{},I=a.fields||{},b=(l=y.value)===null||l===void 0?void 0:l.arrayValue,k=(u=I.value)===null||u===void 0?void 0:u.arrayValue,V=J(((d=b==null?void 0:b.values)===null||d===void 0?void 0:d.length)||0,((p=k==null?void 0:k.values)===null||p===void 0?void 0:p.length)||0);return V!==0?V:Sc(b,k)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===Hr.mapValue&&a===Hr.mapValue)return 0;if(o===Hr.mapValue)return 1;if(a===Hr.mapValue)return-1;const l=o.fields||{},u=Object.keys(l),d=a.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let y=0;y<u.length&&y<p.length;++y){const I=J(u[y],p[y]);if(I!==0)return I;const b=pn(l[u[y]],d[p[y]]);if(b!==0)return b}return J(u.length,p.length)}(n.mapValue,e.mapValue);default:throw j()}}function Pc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return J(n,e);const t=St(n),r=St(e),i=J(t.seconds,r.seconds);return i!==0?i:J(t.nanos,r.nanos)}function Sc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=pn(t[i],r[i]);if(o)return o}return J(t.length,r.length)}function mn(n){return Ds(n)}function Ds(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=St(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Gt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return U.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=Ds(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ds(t.fields[a])}`;return i+"}"}(n.mapValue):j()}function Cc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Vs(n){return!!n&&"integerValue"in n}function go(n){return!!n&&"arrayValue"in n}function kc(n){return!!n&&"nullValue"in n}function Dc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Zr(n){return!!n&&"mapValue"in n}function Cg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Wn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Qt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Wn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Wn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function kg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.value=e}static empty(){return new Oe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Zr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wn(t)}setAll(e){let t=ve.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=Wn(a):i.push(l.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());Zr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ke(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Zr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Qt(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Oe(Wn(this.value))}}function gu(n){const e=[];return Qt(n.fields,(t,r)=>{const i=new ve([t]);if(Zr(r)){const o=gu(r.mapValue).fields;if(o.length===0)e.push(i);else for(const a of o)e.push(i.child(a))}else e.push(i)}),new Le(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t,r,i,o,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Ce(e,0,$.min(),$.min(),$.min(),Oe.empty(),0)}static newFoundDocument(e,t,r,i){return new Ce(e,1,t,$.min(),r,i,0)}static newNoDocument(e,t){return new Ce(e,2,t,$.min(),$.min(),Oe.empty(),0)}static newUnknownDocument(e,t){return new Ce(e,3,t,$.min(),$.min(),Oe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Oe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Oe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,t){this.position=e,this.inclusive=t}}function Vc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],a=n.position[i];if(o.field.isKeyField()?r=U.comparator(U.fromName(a.referenceValue),t.key):r=pn(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Nc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ke(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t="asc"){this.field=e,this.dir=t}}function Dg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{}class he extends _u{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Ng(e,t,r):t==="array-contains"?new Mg(e,r):t==="in"?new Lg(e,r):t==="not-in"?new Fg(e,r):t==="array-contains-any"?new Ug(e,r):new he(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new xg(e,r):new Og(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(pn(t,this.value)):t!==null&&Kt(this.value)===Kt(t)&&this.matchesComparison(pn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Be extends _u{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Be(e,t)}matches(e){return yu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function yu(n){return n.op==="and"}function vu(n){return Vg(n)&&yu(n)}function Vg(n){for(const e of n.filters)if(e instanceof Be)return!1;return!0}function Ns(n){if(n instanceof he)return n.field.canonicalString()+n.op.toString()+mn(n.value);if(vu(n))return n.filters.map(e=>Ns(e)).join(",");{const e=n.filters.map(t=>Ns(t)).join(",");return`${n.op}(${e})`}}function Iu(n,e){return n instanceof he?function(r,i){return i instanceof he&&r.op===i.op&&r.field.isEqual(i.field)&&Ke(r.value,i.value)}(n,e):n instanceof Be?function(r,i){return i instanceof Be&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,l)=>o&&Iu(a,i.filters[l]),!0):!1}(n,e):void j()}function Eu(n){return n instanceof he?function(t){return`${t.field.canonicalString()} ${t.op} ${mn(t.value)}`}(n):n instanceof Be?function(t){return t.op.toString()+" {"+t.getFilters().map(Eu).join(" ,")+"}"}(n):"Filter"}class Ng extends he{constructor(e,t,r){super(e,t,r),this.key=U.fromName(r.referenceValue)}matches(e){const t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class xg extends he{constructor(e,t){super(e,"in",t),this.keys=Tu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Og extends he{constructor(e,t){super(e,"not-in",t),this.keys=Tu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Tu(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>U.fromName(r.referenceValue))}class Mg extends he{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return go(t)&&tr(t.arrayValue,this.value)}}class Lg extends he{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&tr(this.value.arrayValue,t)}}class Fg extends he{constructor(e,t){super(e,"not-in",t)}matches(e){if(tr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!tr(this.value.arrayValue,t)}}class Ug extends he{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!go(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>tr(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e,t=null,r=[],i=[],o=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=l,this.ue=null}}function xc(n,e=null,t=[],r=[],i=null,o=null,a=null){return new Bg(n,e,t,r,i,o,a)}function _o(n){const e=z(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ns(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Ri(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>mn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>mn(r)).join(",")),e.ue=t}return e.ue}function yo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Dg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Iu(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Nc(n.startAt,e.startAt)&&Nc(n.endAt,e.endAt)}function xs(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,t=null,r=[],i=[],o=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function qg(n,e,t,r,i,o,a,l){return new mr(n,e,t,r,i,o,a,l)}function vo(n){return new mr(n)}function Oc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function wu(n){return n.collectionGroup!==null}function Gn(n){const e=z(n);if(e.ce===null){e.ce=[];const t=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ie(ve.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new fi(o,r))}),t.has(ve.keyField().canonicalString())||e.ce.push(new fi(ve.keyField(),r))}return e.ce}function ze(n){const e=z(n);return e.le||(e.le=jg(e,Gn(n))),e.le}function jg(n,e){if(n.limitType==="F")return xc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new fi(i.field,o)});const t=n.endAt?new di(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new di(n.startAt.position,n.startAt.inclusive):null;return xc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Os(n,e){const t=n.filters.concat([e]);return new mr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function pi(n,e,t){return new mr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function bi(n,e){return yo(ze(n),ze(e))&&n.limitType===e.limitType}function Au(n){return`${_o(ze(n))}|lt:${n.limitType}`}function nn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Eu(i)).join(", ")}]`),Ri(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>mn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>mn(i)).join(",")),`Target(${r})`}(ze(n))}; limitType=${n.limitType})`}function Pi(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):U.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of Gn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,l,u){const d=Vc(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,Gn(r),i)||r.endAt&&!function(a,l,u){const d=Vc(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,Gn(r),i))}(n,e)}function $g(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ru(n){return(e,t)=>{let r=!1;for(const i of Gn(n)){const o=zg(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function zg(n,e,t){const r=n.field.isKeyField()?U.comparator(e.key,t.key):function(o,a,l){const u=a.data.field(o),d=l.data.field(o);return u!==null&&d!==null?pn(u,d):j()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return j()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Qt(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return pu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=new oe(U.comparator);function ut(){return Hg}const bu=new oe(U.comparator);function jn(...n){let e=bu;for(const t of n)e=e.insert(t.key,t);return e}function Pu(n){let e=bu;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Ft(){return Kn()}function Su(){return Kn()}function Kn(){return new Tn(n=>n.toString(),(n,e)=>n.isEqual(e))}const Wg=new oe(U.comparator),Gg=new Ie(U.comparator);function G(...n){let e=Gg;for(const t of n)e=e.add(t);return e}const Kg=new Ie(J);function Qg(){return Kg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hi(e)?"-0":e}}function Cu(n){return{integerValue:""+n}}function ku(n,e){return bg(e)?Cu(e):Io(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(){this._=void 0}}function Xg(n,e,t){return n instanceof mi?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&po(o)&&(o=mo(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(t,e):n instanceof nr?Vu(n,e):n instanceof rr?Nu(n,e):function(i,o){const a=Du(i,o),l=Mc(a)+Mc(i.Pe);return Vs(a)&&Vs(i.Pe)?Cu(l):Io(i.serializer,l)}(n,e)}function Yg(n,e,t){return n instanceof nr?Vu(n,e):n instanceof rr?Nu(n,e):t}function Du(n,e){return n instanceof ir?function(r){return Vs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class mi extends Si{}class nr extends Si{constructor(e){super(),this.elements=e}}function Vu(n,e){const t=xu(e);for(const r of n.elements)t.some(i=>Ke(i,r))||t.push(r);return{arrayValue:{values:t}}}class rr extends Si{constructor(e){super(),this.elements=e}}function Nu(n,e){let t=xu(e);for(const r of n.elements)t=t.filter(i=>!Ke(i,r));return{arrayValue:{values:t}}}class ir extends Si{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Mc(n){return le(n.integerValue||n.doubleValue)}function xu(n){return go(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,t){this.field=e,this.transform=t}}function Zg(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof nr&&i instanceof nr||r instanceof rr&&i instanceof rr?fn(r.elements,i.elements,Ke):r instanceof ir&&i instanceof ir?Ke(r.Pe,i.Pe):r instanceof mi&&i instanceof mi}(n.transform,e.transform)}class e_{constructor(e,t){this.version=e,this.transformResults=t}}class He{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new He}static exists(e){return new He(void 0,e)}static updateTime(e){return new He(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ei(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ci{}function Ou(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Lu(n.key,He.none()):new gr(n.key,n.data,He.none());{const t=n.data,r=Oe.empty();let i=new Ie(ve.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new kt(n.key,r,new Le(i.toArray()),He.none())}}function t_(n,e,t){n instanceof gr?function(i,o,a){const l=i.value.clone(),u=Fc(i.fieldTransforms,o,a.transformResults);l.setAll(u),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof kt?function(i,o,a){if(!ei(i.precondition,o))return void o.convertToUnknownDocument(a.version);const l=Fc(i.fieldTransforms,o,a.transformResults),u=o.data;u.setAll(Mu(i)),u.setAll(l),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Qn(n,e,t,r){return n instanceof gr?function(o,a,l,u){if(!ei(o.precondition,a))return l;const d=o.value.clone(),p=Uc(o.fieldTransforms,u,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof kt?function(o,a,l,u){if(!ei(o.precondition,a))return l;const d=Uc(o.fieldTransforms,u,a),p=a.data;return p.setAll(Mu(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(y=>y.field))}(n,e,t,r):function(o,a,l){return ei(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function n_(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),o=Du(r.transform,i||null);o!=null&&(t===null&&(t=Oe.empty()),t.set(r.field,o))}return t||null}function Lc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&fn(r,i,(o,a)=>Zg(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class gr extends Ci{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class kt extends Ci{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Mu(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Fc(n,e,t){const r=new Map;ee(n.length===t.length);for(let i=0;i<t.length;i++){const o=n[i],a=o.transform,l=e.data.field(o.field);r.set(o.field,Yg(a,l,t[i]))}return r}function Uc(n,e,t){const r=new Map;for(const i of n){const o=i.transform,a=t.data.field(i.field);r.set(i.field,Xg(o,a,e))}return r}class Lu extends Ci{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class r_ extends Ci{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&t_(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Qn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Qn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Su();return this.mutations.forEach(i=>{const o=e.get(i.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=t.has(i.key)?null:l;const u=Ou(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument($.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),G())}isEqual(e){return this.batchId===e.batchId&&fn(this.mutations,e.mutations,(t,r)=>Lc(t,r))&&fn(this.baseMutations,e.baseMutations,(t,r)=>Lc(t,r))}}class Eo{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ee(e.mutations.length===r.length);let i=function(){return Wg}();const o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new Eo(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue,Q;function a_(n){switch(n){default:return j();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Fu(n){if(n===void 0)return lt("GRPC error has no .code"),S.UNKNOWN;switch(n){case ue.OK:return S.OK;case ue.CANCELLED:return S.CANCELLED;case ue.UNKNOWN:return S.UNKNOWN;case ue.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case ue.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case ue.INTERNAL:return S.INTERNAL;case ue.UNAVAILABLE:return S.UNAVAILABLE;case ue.UNAUTHENTICATED:return S.UNAUTHENTICATED;case ue.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case ue.NOT_FOUND:return S.NOT_FOUND;case ue.ALREADY_EXISTS:return S.ALREADY_EXISTS;case ue.PERMISSION_DENIED:return S.PERMISSION_DENIED;case ue.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case ue.ABORTED:return S.ABORTED;case ue.OUT_OF_RANGE:return S.OUT_OF_RANGE;case ue.UNIMPLEMENTED:return S.UNIMPLEMENTED;case ue.DATA_LOSS:return S.DATA_LOSS;default:return j()}}(Q=ue||(ue={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_=new qt([4294967295,4294967295],0);function Bc(n){const e=c_().encode(n),t=new ou;return t.update(e),new Uint8Array(t.digest())}function qc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new qt([t,r],0),new qt([i,o],0)]}class To{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new $n(`Invalid padding: ${t}`);if(r<0)throw new $n(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new $n(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new $n(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=qt.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(qt.fromNumber(r)));return i.compare(l_)===1&&(i=new qt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Bc(e),[r,i]=qc(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new To(o,i,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=Bc(e),[r,i]=qc(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class $n extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,_r.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ki($.min(),i,new oe(J),ut(),G())}}class _r{constructor(e,t,r,i,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new _r(r,t,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class Uu{constructor(e,t){this.targetId=e,this.me=t}}class Bu{constructor(e,t,r=Te.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class jc{constructor(){this.fe=0,this.ge=zc(),this.pe=Te.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=G(),t=G(),r=G();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:j()}}),new _r(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=zc()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ee(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class u_{constructor(e){this.Le=e,this.Be=new Map,this.ke=ut(),this.qe=$c(),this.Qe=new oe(J)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:j()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const o=i.target;if(xs(o))if(r===0){const a=new U(o.path);this.Ue(t,a,Ce.newNoDocument(a,$.min()))}else ee(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),u=l?this.Xe(l,e,a):1;if(u!==0){this.je(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=t;let a,l;try{a=Gt(r).toUint8Array()}catch(u){if(u instanceof mu)return dn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new To(a,i,o)}catch(u){return dn(u instanceof $n?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(o=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,o,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((o,a)=>{const l=this.Je(a);if(l){if(o.current&&xs(l.target)){const u=new U(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Ce.newNoDocument(u,e))}o.be&&(t.set(a,o.ve()),o.Ce())}});let r=G();this.qe.forEach((o,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(e));const i=new ki(e,t,this.Qe,this.ke,r);return this.ke=ut(),this.qe=$c(),this.Qe=new oe(J),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new jc,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ie(J),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new jc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function $c(){return new oe(U.comparator)}function zc(){return new oe(U.comparator)}const h_={asc:"ASCENDING",desc:"DESCENDING"},d_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},f_={and:"AND",or:"OR"};class p_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ms(n,e){return n.useProto3Json||Ri(e)?e:{value:e}}function gi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qu(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function m_(n,e){return gi(n,e.toTimestamp())}function We(n){return ee(!!n),$.fromTimestamp(function(t){const r=St(t);return new de(r.seconds,r.nanos)}(n))}function wo(n,e){return Ls(n,e).canonicalString()}function Ls(n,e){const t=function(i){return new se(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function ju(n){const e=se.fromString(n);return ee(Gu(e)),e}function Fs(n,e){return wo(n.databaseId,e.path)}function gs(n,e){const t=ju(e);if(t.get(1)!==n.databaseId.projectId)throw new O(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new U(zu(t))}function $u(n,e){return wo(n.databaseId,e)}function g_(n){const e=ju(n);return e.length===4?se.emptyPath():zu(e)}function Us(n){return new se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function zu(n){return ee(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Hc(n,e,t){return{name:Fs(n,e),fields:t.value.mapValue.fields}}function __(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:j()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(ee(p===void 0||typeof p=="string"),Te.fromBase64String(p||"")):(ee(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Te.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const p=d.code===void 0?S.UNKNOWN:Fu(d.code);return new O(p,d.message||"")}(a);t=new Bu(r,i,o,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=gs(n,r.document.name),o=We(r.document.updateTime),a=r.document.createTime?We(r.document.createTime):$.min(),l=new Oe({mapValue:{fields:r.document.fields}}),u=Ce.newFoundDocument(i,o,a,l),d=r.targetIds||[],p=r.removedTargetIds||[];t=new ti(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=gs(n,r.document),o=r.readTime?We(r.readTime):$.min(),a=Ce.newNoDocument(i,o),l=r.removedTargetIds||[];t=new ti([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=gs(n,r.document),o=r.removedTargetIds||[];t=new ti([],o,i,null)}else{if(!("filter"in e))return j();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new o_(i,o),l=r.targetId;t=new Uu(l,a)}}return t}function y_(n,e){let t;if(e instanceof gr)t={update:Hc(n,e.key,e.value)};else if(e instanceof Lu)t={delete:Fs(n,e.key)};else if(e instanceof kt)t={update:Hc(n,e.key,e.data),updateMask:P_(e.fieldMask)};else{if(!(e instanceof r_))return j();t={verify:Fs(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof mi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof nr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof rr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ir)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw j()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:m_(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:j()}(n,e.precondition)),t}function v_(n,e){return n&&n.length>0?(ee(e!==void 0),n.map(t=>function(i,o){let a=i.updateTime?We(i.updateTime):We(o);return a.isEqual($.min())&&(a=We(o)),new e_(a,i.transformResults||[])}(t,e))):[]}function I_(n,e){return{documents:[$u(n,e.path)]}}function E_(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=$u(n,i);const o=function(d){if(d.length!==0)return Wu(Be.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(I){return{field:rn(I.field),direction:A_(I.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Ms(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:i}}function T_(n){let e=g_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ee(r===1);const p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=function(y){const I=Hu(y);return I instanceof Be&&vu(I)?I.getFilters():[I]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(I=>function(k){return new fi(sn(k.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(I))}(t.orderBy));let l=null;t.limit&&(l=function(y){let I;return I=typeof y=="object"?y.value:y,Ri(I)?null:I}(t.limit));let u=null;t.startAt&&(u=function(y){const I=!!y.before,b=y.values||[];return new di(b,I)}(t.startAt));let d=null;return t.endAt&&(d=function(y){const I=!y.before,b=y.values||[];return new di(b,I)}(t.endAt)),qg(e,i,a,o,l,"F",u,d)}function w_(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Hu(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=sn(t.unaryFilter.field);return he.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=sn(t.unaryFilter.field);return he.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=sn(t.unaryFilter.field);return he.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=sn(t.unaryFilter.field);return he.create(a,"!=",{nullValue:"NULL_VALUE"});default:return j()}}(n):n.fieldFilter!==void 0?function(t){return he.create(sn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Be.create(t.compositeFilter.filters.map(r=>Hu(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return j()}}(t.compositeFilter.op))}(n):j()}function A_(n){return h_[n]}function R_(n){return d_[n]}function b_(n){return f_[n]}function rn(n){return{fieldPath:n.canonicalString()}}function sn(n){return ve.fromServerFormat(n.fieldPath)}function Wu(n){return n instanceof he?function(t){if(t.op==="=="){if(Dc(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NAN"}};if(kc(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Dc(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NOT_NAN"}};if(kc(t.value))return{unaryFilter:{field:rn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rn(t.field),op:R_(t.op),value:t.value}}}(n):n instanceof Be?function(t){const r=t.getFilters().map(i=>Wu(i));return r.length===1?r[0]:{compositeFilter:{op:b_(t.op),filters:r}}}(n):j()}function P_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Gu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,t,r,i,o=$.min(),a=$.min(),l=Te.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Tt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Tt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Tt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Tt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e){this.ct=e}}function C_(n){const e=T_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?pi(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(){this.un=new D_}addToCollectionParentIndex(e,t){return this.un.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(Pt.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(Pt.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class D_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ie(se.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ie(se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new gn(0)}static kn(){return new gn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(){this.changes=new Tn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ce.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Qn(r.mutation,i,Le.empty(),de.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,G()).next(()=>r))}getLocalViewOfDocuments(e,t,r=G()){const i=Ft();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let a=jn();return o.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Ft();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,G()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,i){let o=ut();const a=Kn(),l=function(){return Kn()}();return t.forEach((u,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof kt)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Qn(p.mutation,d,p.mutation.getFieldMask(),de.now())):a.set(d.key,Le.empty())}),this.recalculateAndSaveOverlays(e,o).next(u=>(u.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var y;return l.set(d,new N_(p,(y=a.get(d))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Kn();let i=new oe((a,l)=>a-l),o=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let p=r.get(u)||Le.empty();p=l.applyToLocalView(d,p),r.set(u,p);const y=(i.get(l.batchId)||G()).add(u);i=i.insert(l.batchId,y)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,p=u.value,y=Su();p.forEach(I=>{if(!o.has(I)){const b=Ou(t.get(I),r.get(I));b!==null&&y.set(I,b),o=o.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return D.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return U.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):wu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):D.resolve(Ft());let l=-1,u=o;return a.next(d=>D.forEach(d,(p,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),o.get(p)?D.resolve():this.remoteDocumentCache.getEntry(e,p).next(I=>{u=u.insert(p,I)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,u,d,G())).next(p=>({batchId:l,changes:Pu(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next(r=>{let i=jn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let a=jn();return this.indexManager.getCollectionParents(e,o).next(l=>D.forEach(l,u=>{const d=function(y,I){return new mr(I,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,u.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((y,I)=>{a=a.insert(y,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(a=>{o.forEach((u,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Ce.newInvalidDocument(p)))});let l=jn();return a.forEach((u,d)=>{const p=o.get(u);p!==void 0&&Qn(p.mutation,d,Le.empty(),de.now()),Pi(t,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return D.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:We(i.createTime)}}(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:C_(i.bundledQuery),readTime:We(i.readTime)}}(t)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(){this.overlays=new oe(U.comparator),this.Ir=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Ft();return D.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.ht(e,t,o)}),D.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const i=Ft(),o=t.length+1,a=new U(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&u.largestBatchId>r&&i.set(u.getKey(),u)}return D.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new oe((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=Ft(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=Ft(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=i)););return D.resolve(l)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new s_(t,r));let o=this.Ir.get(t);o===void 0&&(o=G(),this.Ir.set(t,o)),this.Ir.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(){this.sessionToken=Te.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this.Tr=new Ie(pe.Er),this.dr=new Ie(pe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new pe(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new pe(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new U(new se([])),r=new pe(t,e),i=new pe(t,e+1),o=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new U(new se([])),r=new pe(t,e),i=new pe(t,e+1);let o=G();return this.dr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new pe(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class pe{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return U.comparator(e.key,t.key)||J(e.wr,t.wr)}static Ar(e,t){return J(e.wr,t.wr)||U.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ie(pe.Er)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new i_(o,t,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new pe(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return D.resolve(a)}lookupMutationBatch(e,t){return D.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),o=i<0?0:i;return D.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new pe(t,0),i=new pe(t,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);o.push(l)}),D.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ie(J);return t.forEach(i=>{const o=new pe(i,0),a=new pe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],l=>{r=r.add(l.wr)})}),D.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;U.isDocumentKey(o)||(o=o.child(""));const a=new pe(new U(o),0);let l=new Ie(J);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.wr)),!0)},a),D.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ee(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return D.forEach(t.mutations,i=>{const o=new pe(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new pe(t,0),i=this.br.firstAfterOrEqual(r);return D.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e){this.Mr=e,this.docs=function(){return new oe(U.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():Ce.newInvalidDocument(t))}getEntries(e,t){let r=ut();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Ce.newInvalidDocument(i))}),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=ut();const a=t.path,l=new U(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Tg(Eg(p),r)<=0||(i.has(p.key)||Pi(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return D.resolve(o)}getAllFromCollectionGroup(e,t,r,i){j()}Or(e,t){return D.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new B_(this)}getSize(e){return D.resolve(this.size)}}class B_ extends V_{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),D.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e){this.persistence=e,this.Nr=new Tn(t=>_o(t),yo),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ao,this.targetCount=0,this.kr=gn.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),D.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new gn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.Kn(t),D.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),D.waitFor(o).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),D.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,t){this.qr={},this.overlays={},this.Qr=new fo(0),this.Kr=!1,this.Kr=!0,this.$r=new L_,this.referenceDelegate=e(this),this.Ur=new q_(this),this.indexManager=new k_,this.remoteDocumentCache=function(i){return new U_(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new S_(t),this.Gr=new O_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new M_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new F_(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){M("MemoryPersistence","Starting transaction:",e);const i=new $_(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,t){return D.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class $_ extends Ag{constructor(e){super(),this.currentSequenceNumber=e}}class Ro{constructor(e){this.persistence=e,this.Jr=new Ao,this.Yr=null}static Zr(e){return new Ro(e)}get Xr(){if(this.Yr)return this.Yr;throw j()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),D.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Xr,r=>{const i=U.fromPath(r);return this.ei(e,i).next(o=>{o||t.removeEntry(i,$.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return D.or([()=>D.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=G(),i=G();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new bo(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Hd()?8:Rg(ke())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.Yi(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(e,t,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new z_;return this.Xi(e,t,a).next(l=>{if(o.result=l,this.zi)return this.es(e,t,a,l.size)})}).next(()=>o.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(Bn()<=K.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",nn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),D.resolve()):(Bn()<=K.DEBUG&&M("QueryEngine","Query:",nn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Bn()<=K.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",nn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ze(t))):D.resolve())}Yi(e,t){if(Oc(t))return D.resolve(null);let r=ze(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=pi(t,null,"F"),r=ze(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=G(...o);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(t,l);return this.ns(t,d,a,u.readTime)?this.Yi(e,pi(t,null,"F")):this.rs(e,d,t,u)}))})))}Zi(e,t,r,i){return Oc(t)||i.isEqual($.min())?D.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const a=this.ts(t,o);return this.ns(t,a,r,i)?D.resolve(null):(Bn()<=K.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),nn(t)),this.rs(e,a,t,Ig(i,-1)).next(l=>l))})}ts(e,t){let r=new Ie(Ru(e));return t.forEach((i,o)=>{Pi(e,o)&&(r=r.add(o))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,t,r){return Bn()<=K.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",nn(t)),this.Ji.getDocumentsMatchingQuery(e,t,Pt.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new oe(J),this._s=new Tn(o=>_o(o),yo),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new x_(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function G_(n,e,t,r){return new W_(n,e,t,r)}async function Ku(n,e){const t=z(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let u=G();for(const d of i){a.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of o){l.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:l}))})})}function K_(n,e){const t=z(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,p){const y=d.batch,I=y.keys();let b=D.resolve();return I.forEach(k=>{b=b.next(()=>p.getEntry(u,k)).next(V=>{const C=d.docVersions.get(k);ee(C!==null),V.version.compareTo(C)<0&&(y.applyToRemoteDocument(V,d),V.isValidDocument()&&(V.setReadTime(d.commitVersion),p.addEntry(V)))})}),b.next(()=>l.mutationQueue.removeMutationBatch(u,y))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=G();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Qu(n){const e=z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Q_(n,e){const t=z(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const l=[];e.targetChanges.forEach((p,y)=>{const I=i.get(y);if(!I)return;l.push(t.Ur.removeMatchingKeys(o,p.removedDocuments,y).next(()=>t.Ur.addMatchingKeys(o,p.addedDocuments,y)));let b=I.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(y)!==null?b=b.withResumeToken(Te.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):p.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(p.resumeToken,r)),i=i.insert(y,b),function(V,C,L){return V.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(I,b,p)&&l.push(t.Ur.updateTargetData(o,b))});let u=ut(),d=G();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))}),l.push(X_(o,a,e.documentUpdates).next(p=>{u=p.Ps,d=p.Is})),!r.isEqual($.min())){const p=t.Ur.getLastRemoteSnapshotVersion(o).next(y=>t.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(p)}return D.waitFor(l).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,u,d)).next(()=>u)}).then(o=>(t.os=i,o))}function X_(n,e,t){let r=G(),i=G();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=ut();return t.forEach((l,u)=>{const d=o.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual($.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):M("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ps:a,Is:i}})}function Y_(n,e){const t=z(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function J_(n,e){const t=z(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(o=>o?(i=o,D.resolve(i)):t.Ur.allocateTargetId(r).next(a=>(i=new Tt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Bs(n,e,t){const r=z(n),i=r.os.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!pr(a))throw a;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Wc(n,e,t){const r=z(n);let i=$.min(),o=G();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,p){const y=z(u),I=y._s.get(p);return I!==void 0?D.resolve(y.os.get(I)):y.Ur.getTargetData(d,p)}(r,a,ze(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(u=>{o=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?i:$.min(),t?o:G())).next(l=>(Z_(r,$g(e),l),{documents:l,Ts:o})))}function Z_(n,e,t){let r=n.us.get(e)||$.min();t.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(e,r)}class Gc{constructor(){this.activeTargetIds=Qg()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ey{constructor(){this.so=new Gc,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Gc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wr=null;function _s(){return Wr===null?Wr=function(){return 268435456+Math.round(2147483648*Math.random())}():Wr++,"0x"+Wr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe="WebChannelConnection";class iy extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(t,r,i,o,a){const l=_s(),u=this.xo(t,r.toUriEncodedString());M("RestConnection",`Sending RPC '${t}' ${l}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(t,u,d,i).then(p=>(M("RestConnection",`Received RPC '${t}' ${l}: `,p),p),p=>{throw dn("RestConnection",`RPC '${t}' ${l} failed with error: `,p,"url: ",u,"request:",i),p})}Lo(t,r,i,o,a,l){return this.Mo(t,r,i,o,a)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+En}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>t[a]=o),i&&i.headers.forEach((o,a)=>t[a]=o)}xo(t,r){const i=ny[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const o=_s();return new Promise((a,l)=>{const u=new au;u.setWithCredentials(!0),u.listenOnce(cu.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Jr.NO_ERROR:const p=u.getResponseJson();M(Pe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),a(p);break;case Jr.TIMEOUT:M(Pe,`RPC '${e}' ${o} timed out`),l(new O(S.DEADLINE_EXCEEDED,"Request time out"));break;case Jr.HTTP_ERROR:const y=u.getStatus();if(M(Pe,`RPC '${e}' ${o} failed with status:`,y,"response text:",u.getResponseText()),y>0){let I=u.getResponseJson();Array.isArray(I)&&(I=I[0]);const b=I==null?void 0:I.error;if(b&&b.status&&b.message){const k=function(C){const L=C.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(L)>=0?L:S.UNKNOWN}(b.status);l(new O(k,b.message))}else l(new O(S.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new O(S.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{M(Pe,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);M(Pe,`RPC '${e}' ${o} sending request:`,i),u.send(t,"POST",d,r,15)})}Bo(e,t,r){const i=_s(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=hu(),l=uu(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const p=o.join("");M(Pe,`Creating RPC '${e}' stream ${i}: ${p}`,u);const y=a.createWebChannel(p,u);let I=!1,b=!1;const k=new ry({Io:C=>{b?M(Pe,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(I||(M(Pe,`Opening RPC '${e}' stream ${i} transport.`),y.open(),I=!0),M(Pe,`RPC '${e}' stream ${i} sending:`,C),y.send(C))},To:()=>y.close()}),V=(C,L,H)=>{C.listen(L,W=>{try{H(W)}catch(Z){setTimeout(()=>{throw Z},0)}})};return V(y,qn.EventType.OPEN,()=>{b||(M(Pe,`RPC '${e}' stream ${i} transport opened.`),k.yo())}),V(y,qn.EventType.CLOSE,()=>{b||(b=!0,M(Pe,`RPC '${e}' stream ${i} transport closed`),k.So())}),V(y,qn.EventType.ERROR,C=>{b||(b=!0,dn(Pe,`RPC '${e}' stream ${i} transport errored:`,C),k.So(new O(S.UNAVAILABLE,"The operation could not be completed")))}),V(y,qn.EventType.MESSAGE,C=>{var L;if(!b){const H=C.data[0];ee(!!H);const W=H,Z=W.error||((L=W[0])===null||L===void 0?void 0:L.error);if(Z){M(Pe,`RPC '${e}' stream ${i} received error:`,Z);const we=Z.status;let ne=function(v){const E=ue[v];if(E!==void 0)return Fu(E)}(we),T=Z.message;ne===void 0&&(ne=S.INTERNAL,T="Unknown error status: "+we+" with message "+Z.message),b=!0,k.So(new O(ne,T)),y.close()}else M(Pe,`RPC '${e}' stream ${i} received:`,H),k.bo(H)}}),V(l,lu.STAT_EVENT,C=>{C.stat===ks.PROXY?M(Pe,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===ks.NOPROXY&&M(Pe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function ys(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(n){return new p_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,t,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,t,r,i,o,a,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Xu(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(lt(t.toString()),lt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new O(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sy extends Yu{constructor(e,t,r,i,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=__(this.serializer,e),r=function(o){if(!("targetChange"in o))return $.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?$.min():a.readTime?We(a.readTime):$.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Us(this.serializer),t.addTarget=function(o,a){let l;const u=a.target;if(l=xs(u)?{documents:I_(o,u)}:{query:E_(o,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=qu(o,a.resumeToken);const d=Ms(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo($.min())>0){l.readTime=gi(o,a.snapshotVersion.toTimestamp());const d=Ms(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=w_(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Us(this.serializer),t.removeTarget=e,this.a_(t)}}class oy extends Yu{constructor(e,t,r,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return ee(!!e.streamToken),this.lastStreamToken=e.streamToken,ee(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=v_(e.writeResults,e.commitTime),r=We(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Us(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>y_(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,Ls(t,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(S.UNKNOWN,o.toString())})}Lo(e,t,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,Ls(t,r),i,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(S.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class cy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(lt(t),this.D_=!1):M("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{Xt(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=z(u);d.L_.add(4),await yr(d),d.q_.set("Unknown"),d.L_.delete(4),await Vi(d)}(this))})}),this.q_=new cy(r,i)}}async function Vi(n){if(Xt(n))for(const e of n.B_)await e(!0)}async function yr(n){for(const e of n.B_)await e(!1)}function Ju(n,e){const t=z(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),ko(t)?Co(t):wn(t).r_()&&So(t,e))}function Po(n,e){const t=z(n),r=wn(t);t.N_.delete(e),r.r_()&&Zu(t,e),t.N_.size===0&&(r.r_()?r.o_():Xt(t)&&t.q_.set("Unknown"))}function So(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo($.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}wn(n).A_(e)}function Zu(n,e){n.Q_.xe(e),wn(n).R_(e)}function Co(n){n.Q_=new u_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),wn(n).start(),n.q_.v_()}function ko(n){return Xt(n)&&!wn(n).n_()&&n.N_.size>0}function Xt(n){return z(n).L_.size===0}function eh(n){n.Q_=void 0}async function uy(n){n.q_.set("Online")}async function hy(n){n.N_.forEach((e,t)=>{So(n,e)})}async function dy(n,e){eh(n),ko(n)?(n.q_.M_(e),Co(n)):n.q_.set("Unknown")}async function fy(n,e,t){if(n.q_.set("Online"),e instanceof Bu&&e.state===2&&e.cause)try{await async function(i,o){const a=o.cause;for(const l of o.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.N_.delete(l),i.Q_.removeTarget(l))}(n,e)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _i(n,r)}else if(e instanceof ti?n.Q_.Ke(e):e instanceof Uu?n.Q_.He(e):n.Q_.We(e),!t.isEqual($.min()))try{const r=await Qu(n.localStore);t.compareTo(r)>=0&&await function(o,a){const l=o.Q_.rt(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=o.N_.get(d);p&&o.N_.set(d,p.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const p=o.N_.get(u);if(!p)return;o.N_.set(u,p.withResumeToken(Te.EMPTY_BYTE_STRING,p.snapshotVersion)),Zu(o,u);const y=new Tt(p.target,u,d,p.sequenceNumber);So(o,y)}),o.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await _i(n,r)}}async function _i(n,e,t){if(!pr(e))throw e;n.L_.add(1),await yr(n),n.q_.set("Offline"),t||(t=()=>Qu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Vi(n)})}function th(n,e){return e().catch(t=>_i(n,t,e))}async function Ni(n){const e=z(n),t=Ct(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;py(e);)try{const i=await Y_(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,my(e,i)}catch(i){await _i(e,i)}nh(e)&&rh(e)}function py(n){return Xt(n)&&n.O_.length<10}function my(n,e){n.O_.push(e);const t=Ct(n);t.r_()&&t.V_&&t.m_(e.mutations)}function nh(n){return Xt(n)&&!Ct(n).n_()&&n.O_.length>0}function rh(n){Ct(n).start()}async function gy(n){Ct(n).p_()}async function _y(n){const e=Ct(n);for(const t of n.O_)e.m_(t.mutations)}async function yy(n,e,t){const r=n.O_.shift(),i=Eo.from(r,e,t);await th(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ni(n)}async function vy(n,e){e&&Ct(n).V_&&await async function(r,i){if(function(a){return a_(a)&&a!==S.ABORTED}(i.code)){const o=r.O_.shift();Ct(r).s_(),await th(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Ni(r)}}(n,e),nh(n)&&rh(n)}async function Qc(n,e){const t=z(n);t.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=Xt(t);t.L_.add(3),await yr(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Vi(t)}async function Iy(n,e){const t=z(n);e?(t.L_.delete(2),await Vi(t)):e||(t.L_.add(2),await yr(t),t.q_.set("Unknown"))}function wn(n){return n.K_||(n.K_=function(t,r,i){const o=z(t);return o.w_(),new sy(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:uy.bind(null,n),Ro:hy.bind(null,n),mo:dy.bind(null,n),d_:fy.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),ko(n)?Co(n):n.q_.set("Unknown")):(await n.K_.stop(),eh(n))})),n.K_}function Ct(n){return n.U_||(n.U_=function(t,r,i){const o=z(t);return o.w_(),new oy(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:gy.bind(null,n),mo:vy.bind(null,n),f_:_y.bind(null,n),g_:yy.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Ni(n)):(await n.U_.stop(),n.O_.length>0&&(M("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new ot,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const a=Date.now()+r,l=new Do(e,t,a,i,o);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vo(n,e){if(lt("AsyncQueue",`${e}: ${n}`),pr(n))return new O(S.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.comparator=e?(t,r)=>e(t,r)||U.comparator(t.key,r.key):(t,r)=>U.comparator(t.key,r.key),this.keyedMap=jn(),this.sortedSet=new oe(this.comparator)}static emptySet(e){return new ln(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ln)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new ln;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(){this.W_=new oe(U.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):j():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class _n{constructor(e,t,r,i,o,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,o){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new _n(e,t,ln.emptySet(t),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Ty{constructor(){this.queries=Yc(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=z(t),o=i.queries;i.queries=Yc(),o.forEach((a,l)=>{for(const u of l.j_)u.onError(r)})})(this,new O(S.ABORTED,"Firestore shutting down"))}}function Yc(){return new Tn(n=>Au(n),bi)}async function ih(n,e){const t=z(n);let r=3;const i=e.query;let o=t.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new Ey,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await t.onListen(i,!0);break;case 1:o.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=Vo(a,`Initialization of query '${nn(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,o),o.j_.push(e),e.Z_(t.onlineState),o.z_&&e.X_(o.z_)&&No(t)}async function sh(n,e){const t=z(n),r=e.query;let i=3;const o=t.queries.get(r);if(o){const a=o.j_.indexOf(e);a>=0&&(o.j_.splice(a,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function wy(n,e){const t=z(n);let r=!1;for(const i of e){const o=i.query,a=t.queries.get(o);if(a){for(const l of a.j_)l.X_(i)&&(r=!0);a.z_=i}}r&&No(t)}function Ay(n,e,t){const r=z(n),i=r.queries.get(e);if(i)for(const o of i.j_)o.onError(t);r.queries.delete(e)}function No(n){n.Y_.forEach(e=>{e.next()})}var qs,Jc;(Jc=qs||(qs={})).ea="default",Jc.Cache="cache";class oh{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new _n(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=_n.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==qs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e){this.key=e}}class ch{constructor(e){this.key=e}}class Ry{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=G(),this.mutatedKeys=G(),this.Aa=Ru(e),this.Ra=new ln(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Xc,i=t?t.Ra:this.Ra;let o=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,y)=>{const I=i.get(p),b=Pi(this.query,y)?y:null,k=!!I&&this.mutatedKeys.has(I.key),V=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let C=!1;I&&b?I.data.isEqual(b.data)?k!==V&&(r.track({type:3,doc:b}),C=!0):this.ga(I,b)||(r.track({type:2,doc:b}),C=!0,(u&&this.Aa(b,u)>0||d&&this.Aa(b,d)<0)&&(l=!0)):!I&&b?(r.track({type:0,doc:b}),C=!0):I&&!b&&(r.track({type:1,doc:I}),C=!0,(u||d)&&(l=!0)),C&&(b?(a=a.add(b),o=V?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Ra:a,fa:r,ns:l,mutatedKeys:o}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((p,y)=>function(b,k){const V=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return V(b)-V(k)}(p.type,y.type)||this.Aa(p.doc,y.doc)),this.pa(r),i=i!=null&&i;const l=t&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,a.length!==0||d?{snapshot:new _n(this.query,e.Ra,o,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Xc,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=G(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new ch(r))}),this.da.forEach(r=>{e.has(r)||t.push(new ah(r))}),t}ba(e){this.Ta=e.Ts,this.da=G();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return _n.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class by{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Py{constructor(e){this.key=e,this.va=!1}}class Sy{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Tn(l=>Au(l),bi),this.Ma=new Map,this.xa=new Set,this.Oa=new oe(U.comparator),this.Na=new Map,this.La=new Ao,this.Ba={},this.ka=new Map,this.qa=gn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Cy(n,e,t=!0){const r=ph(n);let i;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await lh(r,e,t,!0),i}async function ky(n,e){const t=ph(n);await lh(t,e,!0,!1)}async function lh(n,e,t,r){const i=await J_(n.localStore,ze(e)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let l;return r&&(l=await Dy(n,e,o,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Ju(n.remoteStore,i),l}async function Dy(n,e,t,r,i){n.Ka=(y,I,b)=>async function(V,C,L,H){let W=C.view.ma(L);W.ns&&(W=await Wc(V.localStore,C.query,!1).then(({documents:T})=>C.view.ma(T,W)));const Z=H&&H.targetChanges.get(C.targetId),we=H&&H.targetMismatches.get(C.targetId)!=null,ne=C.view.applyChanges(W,V.isPrimaryClient,Z,we);return el(V,C.targetId,ne.wa),ne.snapshot}(n,y,I,b);const o=await Wc(n.localStore,e,!0),a=new Ry(e,o.Ts),l=a.ma(o.documents),u=_r.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(l,n.isPrimaryClient,u);el(n,t,d.wa);const p=new by(e,t,a);return n.Fa.set(e,p),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function Vy(n,e,t){const r=z(n),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(a=>!bi(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Bs(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Po(r.remoteStore,i.targetId),js(r,i.targetId)}).catch(fr)):(js(r,i.targetId),await Bs(r.localStore,i.targetId,!0))}async function Ny(n,e){const t=z(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Po(t.remoteStore,r.targetId))}async function xy(n,e,t){const r=qy(n);try{const i=await function(a,l){const u=z(a),d=de.now(),p=l.reduce((b,k)=>b.add(k.key),G());let y,I;return u.persistence.runTransaction("Locally write mutations","readwrite",b=>{let k=ut(),V=G();return u.cs.getEntries(b,p).next(C=>{k=C,k.forEach((L,H)=>{H.isValidDocument()||(V=V.add(L))})}).next(()=>u.localDocuments.getOverlayedDocuments(b,k)).next(C=>{y=C;const L=[];for(const H of l){const W=n_(H,y.get(H.key).overlayedDocument);W!=null&&L.push(new kt(H.key,W,gu(W.value.mapValue),He.exists(!0)))}return u.mutationQueue.addMutationBatch(b,d,L,l)}).next(C=>{I=C;const L=C.applyToLocalDocumentSet(y,V);return u.documentOverlayCache.saveOverlays(b,C.batchId,L)})}).then(()=>({batchId:I.batchId,changes:Pu(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,u){let d=a.Ba[a.currentUser.toKey()];d||(d=new oe(J)),d=d.insert(l,u),a.Ba[a.currentUser.toKey()]=d}(r,i.batchId,t),await vr(r,i.changes),await Ni(r.remoteStore)}catch(i){const o=Vo(i,"Failed to persist write");t.reject(o)}}async function uh(n,e){const t=z(n);try{const r=await Q_(t.localStore,e);e.targetChanges.forEach((i,o)=>{const a=t.Na.get(o);a&&(ee(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?ee(a.va):i.removedDocuments.size>0&&(ee(a.va),a.va=!1))}),await vr(t,r,e)}catch(r){await fr(r)}}function Zc(n,e,t){const r=z(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((o,a)=>{const l=a.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=z(a);u.onlineState=l;let d=!1;u.queries.forEach((p,y)=>{for(const I of y.j_)I.Z_(l)&&(d=!0)}),d&&No(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Oy(n,e,t){const r=z(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),o=i&&i.key;if(o){let a=new oe(U.comparator);a=a.insert(o,Ce.newNoDocument(o,$.min()));const l=G().add(o),u=new ki($.min(),new Map,new oe(J),a,l);await uh(r,u),r.Oa=r.Oa.remove(o),r.Na.delete(e),xo(r)}else await Bs(r.localStore,e,!1).then(()=>js(r,e,t)).catch(fr)}async function My(n,e){const t=z(n),r=e.batch.batchId;try{const i=await K_(t.localStore,e);dh(t,r,null),hh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await vr(t,i)}catch(i){await fr(i)}}async function Ly(n,e,t){const r=z(n);try{const i=await function(a,l){const u=z(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,l).next(y=>(ee(y!==null),p=y.keys(),u.mutationQueue.removeMutationBatch(d,y))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,e);dh(r,e,t),hh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await vr(r,i)}catch(i){await fr(i)}}function hh(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function dh(n,e,t){const r=z(n);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function js(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||fh(n,r)})}function fh(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Po(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),xo(n))}function el(n,e,t){for(const r of t)r instanceof ah?(n.La.addReference(r.key,e),Fy(n,r)):r instanceof ch?(M("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||fh(n,r.key)):j()}function Fy(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(M("SyncEngine","New document in limbo: "+t),n.xa.add(r),xo(n))}function xo(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new U(se.fromString(e)),r=n.qa.next();n.Na.set(r,new Py(t)),n.Oa=n.Oa.insert(t,r),Ju(n.remoteStore,new Tt(ze(vo(t.path)),r,"TargetPurposeLimboResolution",fo.oe))}}async function vr(n,e,t){const r=z(n),i=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{a.push(r.Ka(u,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const y=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(d){i.push(d);const y=bo.Wi(u.targetId,d);o.push(y)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(u,d){const p=z(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>D.forEach(d,I=>D.forEach(I.$i,b=>p.persistence.referenceDelegate.addReference(y,I.targetId,b)).next(()=>D.forEach(I.Ui,b=>p.persistence.referenceDelegate.removeReference(y,I.targetId,b)))))}catch(y){if(!pr(y))throw y;M("LocalStore","Failed to update sequence numbers: "+y)}for(const y of d){const I=y.targetId;if(!y.fromCache){const b=p.os.get(I),k=b.snapshotVersion,V=b.withLastLimboFreeSnapshotVersion(k);p.os=p.os.insert(I,V)}}}(r.localStore,o))}async function Uy(n,e){const t=z(n);if(!t.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const r=await Ku(t.localStore,e);t.currentUser=e,function(o,a){o.ka.forEach(l=>{l.forEach(u=>{u.reject(new O(S.CANCELLED,a))})}),o.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await vr(t,r.hs)}}function By(n,e){const t=z(n),r=t.Na.get(e);if(r&&r.va)return G().add(r.key);{let i=G();const o=t.Ma.get(e);if(!o)return i;for(const a of o){const l=t.Fa.get(a);i=i.unionWith(l.view.Va)}return i}}function ph(n){const e=z(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=uh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=By.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Oy.bind(null,e),e.Ca.d_=wy.bind(null,e.eventManager),e.Ca.$a=Ay.bind(null,e.eventManager),e}function qy(n){const e=z(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=My.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ly.bind(null,e),e}class yi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Di(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return G_(this.persistence,new H_,e.initialUser,this.serializer)}Ga(e){return new j_(Ro.Zr,this.serializer)}Wa(e){return new ey}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yi.provider={build:()=>new yi};class $s{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Uy.bind(null,this.syncEngine),await Iy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ty}()}createDatastore(e){const t=Di(e.databaseInfo.databaseId),r=function(o){return new iy(o)}(e.databaseInfo);return function(o,a,l,u){return new ay(o,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,a,l){return new ly(r,i,o,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Zc(this.syncEngine,t,0),function(){return Kc.D()?new Kc:new ty}())}createSyncEngine(e,t){return function(i,o,a,l,u,d,p){const y=new Sy(i,o,a,l,u,d);return p&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=z(i);M("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await yr(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}$s.provider={build:()=>new $s};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):lt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Se.UNAUTHENTICATED,this.clientId=fu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{M("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(M("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ot;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Vo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vs(n,e){n.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Ku(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function tl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await $y(n);M("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Qc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Qc(e.remoteStore,i)),n._onlineComponents=e}async function $y(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await vs(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;dn("Error using user provided cache. Falling back to memory cache: "+t),await vs(n,new yi)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await vs(n,new yi);return n._offlineComponents}async function gh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await tl(n,n._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await tl(n,new $s))),n._onlineComponents}function zy(n){return gh(n).then(e=>e.syncEngine)}async function _h(n){const e=await gh(n),t=e.eventManager;return t.onListen=Cy.bind(null,e.syncEngine),t.onUnlisten=Vy.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ky.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Ny.bind(null,e.syncEngine),t}function Hy(n,e,t={}){const r=new ot;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,u,d){const p=new mh({next:I=>{p.Za(),a.enqueueAndForget(()=>sh(o,y));const b=I.docs.has(l);!b&&I.fromCache?d.reject(new O(S.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&I.fromCache&&u&&u.source==="server"?d.reject(new O(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(I)},error:I=>d.reject(I)}),y=new oh(vo(l.path),p,{includeMetadataChanges:!0,_a:!0});return ih(o,y)}(await _h(n),n.asyncQueue,e,t,r)),r.promise}function Wy(n,e,t={}){const r=new ot;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,u,d){const p=new mh({next:I=>{p.Za(),a.enqueueAndForget(()=>sh(o,y)),I.fromCache&&u.source==="server"?d.reject(new O(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(I)},error:I=>d.reject(I)}),y=new oh(l,p,{includeMetadataChanges:!0,_a:!0});return ih(o,y)}(await _h(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(n,e,t){if(!t)throw new O(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Gy(n,e,t,r){if(e===!0&&r===!0)throw new O(S.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function rl(n){if(!U.isDocumentKey(n))throw new O(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function il(n){if(U.isDocumentKey(n))throw new O(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function xi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":j()}function ht(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=xi(n);throw new O(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Gy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Oi{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sl({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sl(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new hg;switch(r.type){case"firstParty":return new mg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=nl.get(t);r&&(M("ComponentProvider","Removing Datastore"),nl.delete(t),r.terminate())}(this),Promise.resolve()}}function Ky(n,e,t,r={}){var i;const o=(n=ht(n,Oi))._getSettings(),a=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&dn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Se.MOCK_USER;else{l=Fd(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new O(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Se(d)}n._authCredentials=new dg(new du(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Yt(this.firestore,e,this._query)}}class xe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xe(this.firestore,e,this._key)}}class bt extends Yt{constructor(e,t,r){super(e,t,vo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xe(this.firestore,null,new U(e))}withConverter(e){return new bt(this.firestore,e,this._path)}}function Qy(n,e,...t){if(n=Ee(n),vh("collection","path",e),n instanceof Oi){const r=se.fromString(e,...t);return il(r),new bt(n,null,r)}{if(!(n instanceof xe||n instanceof bt))throw new O(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(se.fromString(e,...t));return il(r),new bt(n.firestore,null,r)}}function Ih(n,e,...t){if(n=Ee(n),arguments.length===1&&(e=fu.newId()),vh("doc","path",e),n instanceof Oi){const r=se.fromString(e,...t);return rl(r),new xe(n,null,new U(r))}{if(!(n instanceof xe||n instanceof bt))throw new O(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(se.fromString(e,...t));return rl(r),new xe(n.firestore,n instanceof bt?n.converter:null,new U(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Xu(this,"async_queue_retry"),this.Vu=()=>{const r=ys();r&&M("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=ys();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=ys();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new ot;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!pr(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw lt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=Do.createAndSchedule(this,e,t,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&j()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Ir extends Oi{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new ol,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ol(e),this._firestoreClient=void 0,await e}}}function Xy(n,e){const t=typeof n=="object"?n:bl(),r=typeof n=="string"?n:"(default)",i=Zs(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Md("firestore");o&&Ky(i,...o)}return i}function Oo(n){if(n._terminated)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Yy(n),n._firestoreClient}function Yy(n){var e,t,r;const i=n._freezeSettings(),o=function(l,u,d,p){return new Sg(l,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,yh(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new jy(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yn(Te.fromBase64String(e))}catch(t){throw new O(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new yn(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy=/^__.*__$/;class Zy{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new kt(e,this.data,this.fieldMask,t,this.fieldTransforms):new gr(e,this.data,t,this.fieldTransforms)}}class Eh{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new kt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Th(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class Fo{constructor(e,t,r,i,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Fo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return vi(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Th(this.Cu)&&Jy.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class ev{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Di(e)}Qu(e,t,r,i=!1){return new Fo({Cu:e,methodName:t,qu:r,path:ve.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Uo(n){const e=n._freezeSettings(),t=Di(n._databaseId);return new ev(n._databaseId,!!e.ignoreUndefinedProperties,t)}function tv(n,e,t,r,i,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,e,t,i);qo("Data must be an object, but it was:",a,r);const l=wh(r,a);let u,d;if(o.merge)u=new Le(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const y of o.mergeFields){const I=zs(e,y,t);if(!a.contains(I))throw new O(S.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);Rh(p,I)||p.push(I)}u=new Le(p),d=a.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,d=a.fieldTransforms;return new Zy(new Oe(l),u,d)}class Fi extends Li{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Fi}}class Bo extends Li{constructor(e,t){super(e),this.$u=t}_toFieldTransform(e){const t=new ir(e.serializer,ku(e.serializer,this.$u));return new Jg(e.path,t)}isEqual(e){return e instanceof Bo&&this.$u===e.$u}}function nv(n,e,t,r){const i=n.Qu(1,e,t);qo("Data must be an object, but it was:",i,r);const o=[],a=Oe.empty();Qt(r,(u,d)=>{const p=jo(e,u,t);d=Ee(d);const y=i.Nu(p);if(d instanceof Fi)o.push(p);else{const I=Er(d,y);I!=null&&(o.push(p),a.set(p,I))}});const l=new Le(o);return new Eh(a,l,i.fieldTransforms)}function rv(n,e,t,r,i,o){const a=n.Qu(1,e,t),l=[zs(e,r,t)],u=[i];if(o.length%2!=0)throw new O(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<o.length;I+=2)l.push(zs(e,o[I])),u.push(o[I+1]);const d=[],p=Oe.empty();for(let I=l.length-1;I>=0;--I)if(!Rh(d,l[I])){const b=l[I];let k=u[I];k=Ee(k);const V=a.Nu(b);if(k instanceof Fi)d.push(b);else{const C=Er(k,V);C!=null&&(d.push(b),p.set(b,C))}}const y=new Le(d);return new Eh(p,y,a.fieldTransforms)}function iv(n,e,t,r=!1){return Er(t,n.Qu(r?4:3,e))}function Er(n,e){if(Ah(n=Ee(n)))return qo("Unsupported field value:",e,n),wh(n,e);if(n instanceof Li)return function(r,i){if(!Th(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const l of r){let u=Er(l,i.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=Ee(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ku(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=de.fromDate(r);return{timestampValue:gi(i.serializer,o)}}if(r instanceof de){const o=new de(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gi(i.serializer,o)}}if(r instanceof Mo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof yn)return{bytesValue:qu(i.serializer,r._byteString)};if(r instanceof xe){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:wo(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Lo)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Io(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${xi(r)}`)}(n,e)}function wh(n,e){const t={};return pu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qt(n,(r,i)=>{const o=Er(i,e.Mu(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function Ah(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof de||n instanceof Mo||n instanceof yn||n instanceof xe||n instanceof Li||n instanceof Lo)}function qo(n,e,t){if(!Ah(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=xi(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function zs(n,e,t){if((e=Ee(e))instanceof Mi)return e._internalPath;if(typeof e=="string")return jo(n,e);throw vi("Field path arguments must be of type string or ",n,!1,void 0,t)}const sv=new RegExp("[~\\*/\\[\\]]");function jo(n,e,t){if(e.search(sv)>=0)throw vi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Mi(...e.split("."))._internalPath}catch{throw vi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function vi(n,e,t,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(o||a)&&(u+=" (found",o&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new O(S.INVALID_ARGUMENT,l+n+u)}function Rh(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ov(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ph("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ov extends bh{data(){return super.data()}}function Ph(n,e){return typeof e=="string"?jo(n,e):e instanceof Mi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $o{}class Sh extends $o{}function cv(n,e,...t){let r=[];e instanceof $o&&r.push(e),r=r.concat(t),function(o){const a=o.filter(u=>u instanceof Ho).length,l=o.filter(u=>u instanceof zo).length;if(a>1||a>0&&l>0)throw new O(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class zo extends Sh{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new zo(e,t,r)}_apply(e){const t=this._parse(e);return Ch(e._query,t),new Yt(e.firestore,e.converter,Os(e._query,t))}_parse(e){const t=Uo(e.firestore);return function(o,a,l,u,d,p,y){let I;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new O(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){cl(y,p);const b=[];for(const k of y)b.push(al(u,o,k));I={arrayValue:{values:b}}}else I=al(u,o,y)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||cl(y,p),I=iv(l,a,y,p==="in"||p==="not-in");return he.create(d,p,I)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Ho extends $o{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ho(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Be.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,o){let a=i;const l=o.getFlattenedFilters();for(const u of l)Ch(a,u),a=Os(a,u)}(e._query,t),new Yt(e.firestore,e.converter,Os(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Wo extends Sh{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Wo(e,t,r)}_apply(e){return new Yt(e.firestore,e.converter,pi(e._query,this._limit,this._limitType))}}function lv(n){return Wo._create("limit",n,"F")}function al(n,e,t){if(typeof(t=Ee(t))=="string"){if(t==="")throw new O(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wu(e)&&t.indexOf("/")!==-1)throw new O(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(se.fromString(t));if(!U.isDocumentKey(r))throw new O(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Cc(n,new U(r))}if(t instanceof xe)return Cc(n,t._key);throw new O(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xi(t)}.`)}function cl(n,e){if(!Array.isArray(n)||n.length===0)throw new O(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ch(n,e){const t=function(i,o){for(const a of i)for(const l of a.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new O(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class uv{convertValue(e,t="none"){switch(Kt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Gt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw j()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Qt(e,(i,o)=>{r[i]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,i;const o=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>le(a.doubleValue));return new Lo(o)}convertGeoPoint(e){return new Mo(le(e.latitude),le(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=mo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Zn(e));default:return null}}convertTimestamp(e){const t=St(e);return new de(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=se.fromString(e);ee(Gu(r));const i=new er(r.get(1),r.get(3)),o=new U(r.popFirst(5));return i.isEqual(t)||lt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kh extends bh{constructor(e,t,r,i,o,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ni(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ph("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class ni extends kh{data(e={}){return super.data(e)}}class dv{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new zn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ni(this._firestore,this._userDataWriter,r.key,r,new zn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new ni(i._firestore,i._userDataWriter,l.doc.key,l.doc,new zn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const u=new ni(i._firestore,i._userDataWriter,l.doc.key,l.doc,new zn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,p=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:fv(l.type),doc:u,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function fv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(n){n=ht(n,xe);const e=ht(n.firestore,Ir);return Hy(Oo(e),n._key).then(t=>gv(e,n,t))}class Vh extends uv{constructor(e){super(),this.firestore=e}convertBytes(e){return new yn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new xe(this.firestore,null,t)}}function pv(n){n=ht(n,Yt);const e=ht(n.firestore,Ir),t=Oo(e),r=new Vh(e);return av(n._query),Wy(t,n._query).then(i=>new dv(e,r,n,i))}function mv(n,e,t){n=ht(n,xe);const r=ht(n.firestore,Ir),i=hv(n.converter,e);return Nh(r,[tv(Uo(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,He.none())])}function Ii(n,e,t,...r){n=ht(n,xe);const i=ht(n.firestore,Ir),o=Uo(i);let a;return a=typeof(e=Ee(e))=="string"||e instanceof Mi?rv(o,"updateDoc",n._key,e,t,r):nv(o,"updateDoc",n._key,e),Nh(i,[a.toMutation(n._key,He.exists(!0))])}function Nh(n,e){return function(r,i){const o=new ot;return r.asyncQueue.enqueueAndForget(async()=>xy(await zy(r),i,o)),o.promise}(Oo(n),e)}function gv(n,e,t){const r=t.docs.get(e._key),i=new Vh(n);return new kh(n,i,e._key,r,new zn(t.hasPendingWrites,t.fromCache),e.converter)}function _v(n){return new Bo("increment",n)}(function(e,t=!0){(function(i){En=i})(vn),un(new zt("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new Ir(new fg(r.getProvider("auth-internal")),new _g(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new er(d.options.projectId,p)}(a,i),a);return o=Object.assign({useFetchStreams:t},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),Rt(Ac,"4.7.3",e),Rt(Ac,"4.7.3","esm2017")})();const yv={apiKey:"AIzaSyCW9a8-8NKER9WF6vQSfnSjjj20qx0Hk6I",authDomain:"testtest-1d247.firebaseapp.com",databaseURL:"https://testtest-1d247-default-rtdb.firebaseio.com",projectId:"testtest-1d247",storageBucket:"testtest-1d247.firebasestorage.app",messagingSenderId:"1012771607669",appId:"1:1012771607669:web:e901345d4d7398c55c943c"},xh=Rl(yv),Ui=ag(xh),Go=Xy(xh),vv=new et;async function Oh(){try{const e=(await gm(Ui,vv)).user;return console.log("User signed in:",e.displayName),await Lh(e),e}catch(n){throw console.error("Error signing in:",n),n}}async function Iv(){try{await Xp(Ui),console.log("User signed out")}catch(n){console.error("Error signing out:",n)}}function Mh(n){return Qp(Ui,e=>{n(e)})}async function Lh(n){try{const e=Ih(Go,"user",n.uid),t=await Dh(e);if(!t.exists())await mv(e,{username:n.email?n.email.split("@")[0]:"Anon",displayName:n.displayName,email:n.email,photoURL:n.photoURL,highScore:0,totalAttempts:0,gamesPlayed:0,leaderboardScore:-99999,uid:n.uid});else{const r=t.data();r.highScore===void 0?await Ii(e,{highScore:0,leaderboardScore:-99999}):r.leaderboardScore===void 0&&await Ii(e,{leaderboardScore:-99999})}}catch(e){console.error("Error initializing user:",e)}}let Fh=!1;function Ev(){return Fh=!0,console.log("Logged in as Guest"),{uid:"guest-"+Date.now(),displayName:"Guest Player",photoURL:null,isAnonymous:!0}}async function Uh(n){if(Fh){console.log("Guest score saved locally (no DB write):",n);return}const e=Ui.currentUser;if(!e)return;let t=0,r=9999;if(typeof n=="object")t=n.correct,r=parseFloat(n.time);else return;const i=Ih(Go,"user",e.uid),o=t*1e4-r;await Ii(i,{gamesPlayed:_v(1)});const a=await Dh(i);if(a.exists()){const l=a.data().leaderboardScore||-99999;o>l&&await Ii(i,{leaderboardScore:o,quickScore:t,quickTime:r})}}async function Tv(){try{const n=Qy(Go,"user"),e=cv(n,lv(50)),t=await pv(e),r=[];return t.forEach(i=>{r.push(i.data())}),r.sort((i,o)=>{const a=i.leaderboardScore!==void 0?i.leaderboardScore:-99999;return(o.leaderboardScore!==void 0?o.leaderboardScore:-99999)-a}),r.slice(0,3)}catch(n){return console.error("Error fetching leaderboard:",n),[]}}function wv(){document.addEventListener("contextmenu",n=>(n.preventDefault(),!1)),document.addEventListener("keydown",n=>{if(n.keyCode===123||n.ctrlKey&&n.shiftKey&&n.keyCode===73||n.ctrlKey&&n.shiftKey&&n.keyCode===74||n.ctrlKey&&n.keyCode===85)return n.preventDefault(),!1}),console.log("%c🛑 STOP!","color: red; font-size: 50px; font-weight: bold;"),console.log("%cThis is a browser feature intended for developers. If someone told you to copy-paste something here to enable a feature or hack someone's account, it is a scam and will give them access to your account.","font-size: 20px;")}let tt=null;const Ne=24,Y=16,Bh=360/Ne,Ko=4,qh=0;let m={gearAngle:0,ringAngle:0,gearTick:0,ringTick:0,gearIndex:0,ringIndex:0,roundStarted:!1,canSubmit:!1,score:0,attempts:0,selectedInnerIdx:null,targetGearAngle:0,targetRingAngle:0,zoom:1.5,targetZoom:1.5,ringOpacity:0,targetRingOpacity:0,tutorialShown:!1,tutorialPhase:1,gameMode:"normal",startTime:0,elapsed:0,quickPlayQuestions:[],qpSelectionPhase:!1,qpCurrentIndex:0,correctCount:0,wrongCount:0,questionHistory:[]},Hs={},jh={},jt=[],It=[];class Av{constructor(e,t,r){this.emoji=e,this.reset(t,r,!0)}reset(e,t,r=!1){this.x=Math.random()*e,this.y=r?Math.random()*t:-50,this.size=Math.random()*20+20,this.speed=Math.random()*.5+.2,this.rotation=Math.random()*360,this.rotSpeed=(Math.random()-.5)*4,this.wobble=Math.random()*Math.PI*2,this.wobbleSpeed=Math.random()*.1,this.opacity=Math.random()*.5+.3}update(e){this.y+=this.speed,this.rotation+=this.rotSpeed,this.wobble+=this.wobbleSpeed,this.x+=Math.sin(this.wobble)*1,this.y>e+50&&this.reset(window.innerWidth,e)}draw(e){e.save(),e.translate(this.x,this.y),e.rotate(this.rotation*Math.PI/180),e.globalAlpha=this.opacity,e.font=`${this.size}px serif`,e.fillStyle="#FFFFFF",e.textAlign="center",e.textBaseline="middle",e.fillText(this.emoji,0,0),e.restore()}}const Rv=[{name:"Christmas",month:11,day:25,emojis:["❄️","🎅","🦌","🎄","🎁","⛄"]},{name:"New Year",month:0,day:1,emojis:["🎉","🥂","🎆","🌟","❄️"]},{name:"Republic Day",month:0,day:26,emojis:["🇮🇳","🏵️","🪁","🕊️"]},{name:"Holi",month:2,day:14,emojis:["🔴","🟡","🟢","🔫","💧","🟣"]},{name:"Independence Day",month:7,day:15,emojis:["🇮🇳","🎆","🪁","🐯"]},{name:"Gandhi Jayanti",month:9,day:2,emojis:["🕊️","👓","🧶"]},{name:"Diwali",month:9,day:20,emojis:["🪔","✨","🧨","🎇","🍬"]}];function bv(){const n=new Date;for(let e of Rv){let t=new Date(n.getFullYear(),e.month,e.day);const r=new Date(t);r.setDate(t.getDate()-4);const i=new Date(t);if(i.setDate(t.getDate()+3),n>=r&&n<=i)return e.emojis}return null}let sr=[],Gr=null;function Pv(){if(Gr=bv(),!Gr)return;const e=window.innerWidth<500?10:25;for(let t=0;t<e;t++){const r=Gr[Math.floor(Math.random()*Gr.length)];sr.push(new Av(r,window.innerWidth,window.innerHeight))}}const Ut=document.getElementById("gameCanvas"),x=Ut.getContext("2d");let je,Et,B,Ws,Gs,F={ringOuterR:0,ringRootR:0,ringTipR:0,gearRootR:0,gearTipR:0,gearCenter:{x:0,y:0},ringCenter:{x:0,y:0}},or=document.createElement("canvas"),_e=or.getContext("2d"),ar=document.createElement("canvas"),ce=ar.getContext("2d");function Sv(){const n=F.ringOuterR*2+10;ar.width=n,ar.height=n;const e=n/2,t=n/2;ce.clearRect(0,0,n,n),ce.translate(e,t),ce.beginPath(),ce.arc(0,0,F.ringOuterR,0,Math.PI*2),ce.arc(0,0,F.ringRootR,0,Math.PI*2,!0);const r=ce.createLinearGradient(-F.ringOuterR,-F.ringOuterR,F.ringOuterR,F.ringOuterR);r.addColorStop(0,"#2E65B8"),r.addColorStop(.5,"#8AC7FF"),r.addColorStop(1,"#1E56A8"),ce.fillStyle=r,ce.fill();const i=2*Math.PI/Ne;ce.fillStyle="#1565C0";for(let p=0;p<Ne;p++){const y=p*i;ce.save(),ce.rotate(y),Cv(ce,0,0,F.ringRootR,F.ringTipR),ce.fillStyle="#1565C0",ce.fill(),ce.strokeStyle="rgba(255, 255, 255, 0.2)",ce.lineWidth=B*.002,ce.stroke(),ce.restore()}ce.fillStyle="#B0C9DC";for(let p=0;p<12;p++){const y=p*30*(Math.PI/180),I=(F.ringOuterR+F.ringRootR)/2;ce.beginPath(),ce.arc(I*Math.cos(y),I*Math.sin(y),B*.005,0,Math.PI*2),ce.fill()}const o=F.gearTipR*2+10;or.width=o,or.height=o;const a=o/2,l=o/2;_e.clearRect(0,0,o,o),_e.translate(a,l),_e.save(),_e.translate(B*.005,B*.005),hl(_e,0,0,F.gearRootR,F.gearTipR,Y),_e.fillStyle="rgba(0,0,0,0.3)",_e.fill(),_e.restore(),hl(_e,0,0,F.gearRootR,F.gearTipR,Y);const u=_e.createRadialGradient(0,0,F.gearRootR*.5,0,0,F.gearTipR);u.addColorStop(0,"#FFCA28"),u.addColorStop(1,"#FF8F00"),_e.fillStyle=u,_e.fill(),_e.strokeStyle="rgba(255,255,255,0.45)",_e.lineWidth=B*.003,_e.stroke();const d=F.gearRootR*.55;_e.beginPath(),_e.arc(0,0,d,0,Math.PI*2)}m.offsetX=0;m.targetOffsetX=0;function $h(){je=window.innerWidth,Et=window.innerHeight;const n=Math.min(window.devicePixelRatio||1,1.5);Ut.width=je*n,Ut.height=Et*n,Ut.style.width=je+"px",Ut.style.height=Et+"px",x.scale(n,n),x.imageSmoothingEnabled=!0,B=Math.min(je,Et),je<500&&(B*=1),Ws=je/2,Gs=Et/2,F.ringOuterR=B*.42;const e=B*.07;F.ringRootR=F.ringOuterR-e;const t=B*.06;F.ringTipR=F.ringRootR-t-B*.0075;const i=(F.ringRootR-t/2)*(2/3);F.gearRootR=i-t/2,F.gearTipR=i+t/2+B*.0075,zh(),Sv(),Wh(),Gh()}window.addEventListener("resize",$h);function zh(){const n=B*.06,e=F.ringRootR-n/2,t=e*(2/3),r=e-t;F.centerOffset=r;const i=0;let o=je/2+(m.offsetX||0);je<500&&(o-=je*.12);const a=Et/2;F.gearCenter={x:o,y:a},F.ringCenter={x:o-r*Math.cos(i),y:a-r*Math.sin(i)}}let ll=0;function Hh(n){try{const e=(n-ll)/1e3;if(ll=n,m.gearAngle+=(m.targetGearAngle-m.gearAngle)*.1,m.ringAngle+=(m.targetRingAngle-m.ringAngle)*.1,m.zoom+=(m.targetZoom-m.zoom)*.05,m.zoom+=(m.targetZoom-m.zoom)*.05,m.ringOpacity=m.targetRingOpacity,Math.abs(m.targetOffsetX-m.offsetX)>.5&&(m.offsetX+=(m.targetOffsetX-m.offsetX)*.05,zh()),sr.length>0&&sr.forEach(t=>t.update(Et)),Wh(),dl(),dl(),Gh(),m.gameMode==="quick-fire"&&m.roundStarted){const t=Date.now();m.elapsed=t-m.startTime;const r=Math.floor(m.elapsed/1e3),i=Math.floor(r/60),o=r%60,a=i.toString().padStart(2,"0"),l=o.toString().padStart(2,"0");document.getElementById("stopwatch").innerText=`${a}:${l} `}requestAnimationFrame(Hh)}catch(e){console.error(e),document.getElementById("q-text")&&kv("ERROR: "+e.message,"Game Error")}}function ul(n,e){return{x:n*Math.cos(e),y:n*Math.sin(e)}}function hl(n,e,t,r,i,o){const a=Math.PI*2/o,l=a/2;n.beginPath();for(let u=0;u<o;u++){const d=u*a-l;n.arc(e,t,r,d-l/2+.05,d+l/2-.05);const p=ul(i,d+l/2+.05),y=ul(r,d+a-l/2+.05);n.lineTo(p.x,p.y),n.arc(e,t,i,d+l/2+.05,d+a-l/2-.05),n.lineTo(y.x,y.y)}n.closePath()}function Cv(n,e,t,r,i,o){const a=r-i,l=B*.035,u=B*.018,d=a*.12;n.beginPath(),n.moveTo(r,-l),n.quadraticCurveTo(r-a*.3,-l*.7,i+d,-u),n.lineTo(i+d,u),n.quadraticCurveTo(r-a*.3,l*.7,r,l),n.closePath()}function Wh(){if(!tt)return;if(x.clearRect(0,0,je,Et),x.save(),x.save(),x.translate(Ws+m.offsetX,Gs),x.scale(m.zoom,m.zoom),x.translate(-Ws-m.offsetX,-Gs),sr.length>0&&sr.forEach(l=>l.draw(x)),m.ringOpacity>.01){x.globalAlpha=m.ringOpacity,x.save(),x.translate(F.ringCenter.x,F.ringCenter.y);const l=(m.ringAngle+Bh/2)*(Math.PI/180);x.rotate(l);const u=ar.width/2;x.drawImage(ar,-u,-u),x.restore(),x.globalAlpha=1}x.save(),x.translate(F.gearCenter.x,F.gearCenter.y),x.rotate(m.gearAngle*(Math.PI/180));const n=or.width/2;x.drawImage(or,-n,-n);const e=F.gearRootR*.55,t=B<500;if(!m.roundStarted&&m.zoom>1.2)x.fillStyle="rgba(255,255,255,0.9)",x.strokeStyle="#E65100",x.lineWidth=B*.006,x.font=`bold ${B*(t?.035:.04)}px Inter`,x.textAlign="center",x.textBaseline="middle",x.strokeText("",0,-B*.01),x.fillText("",0,-B*.01),x.font=`bold ${B*(t?.016:.02)}px Inter`,x.strokeText("",0,B*.025),x.fillText("",0,B*.025);else if(m.roundStarted)x.strokeStyle="#BF360C",x.lineWidth=B*.004,x.fillStyle="rgba(255,255,255,0.95)",x.font=`bold ${B*(t?.018:.022)}px Inter`,x.textAlign="center",x.textBaseline="middle",x.strokeText("",0,-B*.018),x.fillText("",0,-B*.018),x.font=`bold ${B*(t?.015:.018)}px Inter`,x.fillStyle="rgba(255,200,200,0.9)",x.strokeText("",0,B*.015),x.fillText("",0,B*.015);else{x.fillStyle="#263238";for(let l=0;l<6;l++){const u=l*60*(Math.PI/180),d=e*.7*Math.cos(u),p=e*.7*Math.sin(u);x.beginPath(),x.arc(d,p,B*.006,0,Math.PI*2),x.fill()}}x.textAlign="center",x.textBaseline="middle";const r=B<500,i=Math.max(r?5:7,B*.02),o=F.gearRootR*(r?.78:.82),a=2*Math.PI/Y;jt.forEach((l,u)=>{let d=1;if(m.roundStarted&&m.selectedInnerIdx!==null&&m.selectedInnerIdx!==u&&(d=Math.max(0,1-m.ringOpacity*2)),d<.01)return;const p=u*a+qh*Math.PI/180,y=o*Math.cos(p),I=o*Math.sin(p);m.quickPlayQuestions.includes(u)&&(x.save(),x.translate(y,I),x.fillStyle="rgba(255, 235, 59, 0.5)",x.beginPath(),x.arc(0,0,B*.04,0,Math.PI*2),x.fill(),x.restore()),x.font=`bold ${i}px Inter`,x.save(),x.globalAlpha=d,x.translate(y,I),x.rotate(p);const b=(m.gearAngle+u*360/Y+a*180/Math.PI/2)%360;let k=b<0?b+360:b;k>90&&k<270&&x.rotate(Math.PI),x.fillStyle="#003366",x.fillText(l,0,0),x.restore()}),x.restore(),x.restore()}function Gh(){if(!B)return;const n=document.getElementById("flags-container");n&&(n.style.opacity=m.ringOpacity);const e=2*Math.PI/Ne,t=(m.ringAngle+Bh/2+Ko)*(Math.PI/180);Qs.forEach((r,i)=>{if(m.ringOpacity<.1){r.style.opacity="0";return}if(m.gameMode==="quick-fire"){let _=0;if(m.roundStarted)if(m.quickPlayQuestions.length>0&&m.qpCurrentIndex<m.quickPlayQuestions.length)_=m.quickPlayQuestions[m.qpCurrentIndex];else{const qe=360/Y;_=Math.round((0-m.gearAngle)/qe)%Y,_<0&&(_+=Y)}else{const qe=360/Y,Qe=(0-m.gearAngle)/qe;_=Math.round(Qe)%Y,_<0&&(_+=Y)}const fe=_%2,me=i%2;if(fe===me){r.style.opacity="0";return}}r.style.opacity=m.ringOpacity;const o=i*e+t;let l=o*180/Math.PI%360;l>180&&(l-=360),l<-180&&(l+=360);const u=isNaN(l)?180:Math.abs(l),p=Math.PI*2/Ne*(180/Math.PI)*2.5;let y=0;u<p&&(y=1-u/p);const I=B<500,b=I?1.6:1.5,k=1,V=m.zoom,C=k+(b-k)*y,L=y>.1?20:10,H=F.ringOuterR-5,W=B*.01+1,Z=H+W*y,we=Z*Math.cos(o),ne=Z*Math.sin(o),T=F.ringCenter.x+we*m.zoom,g=F.ringCenter.y+ne*m.zoom;r.style.left=T+"px",r.style.top=g+"px";const v=y,E=-50+Math.cos(o)*50*v,w=-50+Math.sin(o)*50*v;r.style.transform=`translate(${E} %, ${w} %) scale(${V*C})`,r.style.zIndex=L,C>1.2?(r.style.boxShadow="0 6px 12px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.2)",r.style.borderWidth=I?"2px":"4px"):(r.style.boxShadow="0 4px 6px rgba(0, 0, 0, 0.2)",r.style.borderWidth=I?"2px":"3px");const R=r.querySelector("img");if(R){let me=11;u<p&&(me=11+9*(1-u/p)),R.style.setProperty("width",me+"px","important")}})}function dl(){const e=360/Y,t=(0-m.gearAngle)/e;let r=Math.round(t)%Y;r<0&&(r+=Y);const i=jt[r];if(m.activeInnerLabel=i,m.activeInnerIdx=r,!m.roundStarted)document.getElementById("q-text").innerText=Hs[i]||i;else if(m.gameMode==="quick-fire"){const T=m.quickPlayQuestions[m.qpCurrentIndex];if(T!==void 0){const g=jt[T];document.getElementById("q-text").innerText=Hs[g]||g}}const o=document.getElementById("selection-box"),a=Math.abs(t-Math.round(t));let l=0,u=null;if(!m.roundStarted)u=m.activeInnerIdx,l=0;else if(u=m.selectedInnerIdx,u!==null){const T=Math.PI*2/Y;l=m.gearAngle*Math.PI/180+u*T}const d=B<500,p=F.gearRootR*(d?.78:.82),y=qh*(Math.PI/180),I=l+y;F.gearCenter.x+p*Math.cos(I),F.gearCenter.y+p*Math.sin(I);const b=F.gearCenter.x,k=F.gearCenter.y,V=b+p*Math.cos(I)*m.zoom,C=k+p*Math.sin(I)*m.zoom;o.style.display="block";let L,H;const W=B*.04*m.zoom;let Z=l%(Math.PI*2);Z>Math.PI&&(Z-=Math.PI*2),Z<-Math.PI&&(Z+=Math.PI*2);const we=Math.abs(Z)<.05;if(m.roundStarted&&we&&a<.05){let T=0;if(typeof x<"u"){const re=d?Math.max(5,B*.012):Math.max(7,B*.014);x.font=`bold ${re}px Inter`,x.font=`bold ${re}px Arial`,T=x.measureText(i).width}else{const re=B*.012*m.zoom;T=i.length*re}const g=T+W*1.5,v=V-g/2,E=2*Math.PI/Ne,w=360/Ne,_=(0-(m.ringAngle+w/2+Ko)*(Math.PI/180))/E;let fe=Math.round(_)%Ne;fe<0&&(fe+=Ne);const me=It[fe]||"";let qe=0;if(typeof x<"u"){const re=d?5:6;x.font=`bold ${re}px Inter`,qe=x.measureText(me).width*m.zoom}else{const re=B*.005*m.zoom;qe=me.length*re}const Qe=qe+W*1,Dt=F.ringOuterR-5+(B*.01+1),An=b+Dt*m.zoom+Qe,Rn=An-v;o.style.left=v+"px",o.style.top=C-B*.08*m.zoom/2+"px",o.style.width=Rn+"px",H=(v+An)/2-Rn/2,o.style.left=H+"px",o.style.width=Rn+"px",o.style.transform=`rotate(${I}rad)`}else{const T=m.activeInnerLabel||"";let g=0;if(typeof x<"u"){const me=d?Math.max(5,B*.012):Math.max(7,B*.014);x.font=`bold ${me}px Arial`,g=x.measureText(T).width*m.zoom}else{const me=B*.012*m.zoom;g=T.length*me}L=g+B*.12*m.zoom;const v=B*.04*m.zoom;L<v&&(L=v*1.5);const w=I+-.05,R=b+p*Math.cos(w)*m.zoom,_=k+p*Math.sin(w)*m.zoom,fe=R-L/2-10;o.style.left=fe+"px",o.style.top=_-B*.08*m.zoom/2+"px",o.style.width=L+"px",o.style.transform=`rotate(${w}rad)`}const ne=B*.08*m.zoom;o.style.height=ne+"px"}function Ks(n){const e=360/Y;let t=-n*e,r=m.gearAngle,i=t-r;i=i%360,i>180&&(i-=360),i<-180&&(i+=360),m.targetGearAngle=r+i,m.targetRingAngle=m.ringAngle+i*(2/3)}function Ze(){document.getElementById("score-panel");const n=document.getElementById("cw-counters"),e=document.getElementById("qf-score");n.classList.remove("hidden"),e.classList.add("hidden"),document.getElementById("correct-count").innerText=m.correctCount,document.getElementById("wrong-count").innerText=m.wrongCount}function $t(){const n=document.getElementById("history-list");if(!n)return;n.innerHTML="",m.questionHistory.forEach(t=>{const r=document.createElement("div"),i=t.status==="correct",o=i?"bg-green-600":"bg-red-600",a=i?"border-green-800":"border-red-800",l=i?"✅":"❌";r.className=`${o} border-2 ${a} text-white rounded-lg px-2 py-0.5 text-[12px] font-bold shadow-md flex items-center justify-between gap-1 min-w-[100px] animate-fade-in-up`,r.innerHTML=`
        <span>${t.name}</span>
        <span>${l}</span>
`,n.appendChild(r)});const e=document.getElementById("mobile-history-grid");if(e){if(!m.roundStarted){e.innerHTML="",e.classList.add("hidden");return}if(e.classList.remove("hidden"),jt.length>0){e.innerHTML="",m.gameMode==="quick-fire"?(e.className="fixed bottom-4 left-0 right-0 z-20 flex justify-center gap-2 pointer-events-none transition-all duration-300 px-4 md:hidden",e.style.gridTemplateColumns="none"):(e.className="fixed bottom-4 left-0 right-0 z-20 grid gap-1 justify-center pointer-events-none transition-all duration-300 px-4 max-w-sm mx-auto md:hidden",e.style.gridTemplateColumns="repeat(4, 1fr)");let t=jt;m.gameMode==="quick-fire"&&m.quickPlayQuestions&&m.quickPlayQuestions.length>0&&(t=m.quickPlayQuestions.map(r=>jt[r]).filter(Boolean)),t.forEach(r=>{const i=m.questionHistory.find(u=>u.name===r),o=document.createElement("div");let a="h-8 w-full rounded-lg shadow-sm flex flex-col items-center justify-center text-[9px] leading-tight font-bold transition-all duration-300 px-1 text-center ",l="";i?i.status==="correct"?(a+="bg-green-500 text-white scale-100 shadow-md",l=`<span>${r}</span>`):(a+="bg-red-500 text-white scale-100 shadow-md",l=`<span>${r}</span>`):(a+="bg-white/10 text-white/60 border border-white/10",l=`<span>${r}</span>`),o.className=a,o.innerHTML=l,e.appendChild(o)})}}}function kv(n,e="Info"){let t=document.getElementById("custom-popup");t||(t=document.createElement("div"),t.id="custom-popup",t.className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in",t.innerHTML=`
    < div class="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full mx-4 transform transition-all scale-100" >
                <div class="text-xl font-bold text-gray-800 mb-2" id="popup-title"></div>
                <div class="text-gray-600 mb-6" id="popup-msg"></div>
                <button id="popup-btn" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors">
                    OK
                </button>
            </div >
    `,document.body.appendChild(t),document.getElementById("popup-btn").onclick=()=>{t.classList.add("hidden")}),document.getElementById("popup-title").innerText=e,document.getElementById("popup-msg").innerText=n,t.classList.remove("hidden")}function fl(n,e,t){const r=document.getElementById("overlay-container"),i=document.getElementById("overlay-emoji"),o=document.getElementById("overlay-msg"),a=document.getElementById("overlay-details"),l=document.getElementById("overlay-q"),u=document.getElementById("overlay-a");if(i.innerText=n?"👏":"😥",o.innerText=n?"CORRECT":"TRY AGAIN",o.style.color=n?"#4CAF50":"#FF5252",e||t){a.classList.remove("hidden"),l.innerText=e||"";const d=typeof Xs=="function"?Xs(t):null;d?u.innerHTML=`<img src="https://flagcdn.com/w80/${d}.png" style="height: 1.5em; vertical-align: middle; border-radius: 4px; display: inline-block;">`:u.innerText=t||"",u.style.color=n?"#2E7D32":"#B71C1C"}else a.classList.add("hidden");r.classList.add("slide-in"),setTimeout(()=>{r.classList.remove("slide-in")},1500)}function pl(){if(!m.roundStarted)return;const n=360/Y,t=(0-m.gearAngle)/n;if(Math.abs(t-Math.round(t))>.05)return;let i=Math.round(t)%Y;i<0&&(i+=Y);const o=m.activeInnerLabel;if(m.gameMode==="quick-fire"){const b=m.quickPlayQuestions[m.qpCurrentIndex];if(b!==void 0&&b!==i)return}else if(m.selectedInnerIdx!==null&&m.selectedInnerIdx!==i)return;const a=jh[o],l=360/Ne,d=-(m.ringAngle+360/Ne/2+Ko)/l;let p=Math.round(d)%Ne;p<0&&(p+=Ne);const y=It[p],I=a===y;if(m.attempts++,I?(m.score++,m.correctCount++):(m.wrongCount++,m.currentRoundWrongCount++),Ze(),Uh(m.score),fl(I,o,y),m.gameMode!=="quick-fire"&&(I||m.currentRoundWrongCount>=2)){const b=I?"correct":"wrong";m.questionHistory.push({name:o,status:b}),$t(),setTimeout(()=>{m.roundStarted=!1,m.targetZoom=1.5,m.targetRingOpacity=0,m.targetOffsetX=0,m.selectedInnerIdx=null,document.getElementById("hint-box").style.opacity="1"},1500)}if(m.gameMode==="quick-fire")if(I){const b=m.questionHistory.find(k=>k.name===o);b&&(b.status="correct"),$t(),ml(),gl()}else if(m.qpQuestionAttempts=(m.qpQuestionAttempts||0)+1,m.qpQuestionAttempts>=2){const b=m.questionHistory.find(k=>k.name===o);b&&(b.status="wrong"),$t(),ml(),gl()}else fl(!1,o,y)}function ml(){m.correctCount=m.questionHistory.filter(n=>n.status==="correct").length,m.wrongCount=m.questionHistory.filter(n=>n.status==="wrong").length,m.score=m.correctCount,Ze()}function gl(){m.qpCurrentIndex++,m.qpQuestionAttempts=0,setTimeout(async()=>{if(m.qpCurrentIndex<m.quickPlayQuestions.length){const n=m.quickPlayQuestions[m.qpCurrentIndex];Ks(n),m.selectedInnerIdx=n}else{const n=((Date.now()-m.startTime)/1e3).toFixed(1);await Uh({correct:m.correctCount,wrong:m.wrongCount,time:n,mode:"quick-fire"}),await Qo(),alert(`Quick Fire Completed!
Correct: ${m.correctCount}
Wrong: ${m.wrongCount}
Time: ${n}s`),document.getElementById("stopwatch").classList.add("hidden"),document.getElementById("home-screen").classList.remove("hidden-home"),document.getElementById("mode-selection").classList.remove("hidden"),document.getElementById("auth-container").classList.remove("hidden"),m.roundStarted=!1,m.targetZoom=1.5,m.targetRingOpacity=0,m.gameMode="normal",m.quickPlayQuestions=[],m.questionHistory=[],m.qpSelectionPhase=!1,m.qpCurrentIndex=0,m.qpQuestionAttempts=0,m.selectedInnerIdx=null,m.score=0,m.correctCount=0,m.wrongCount=0,document.getElementById("selection-hint").classList.add("hidden"),document.getElementById("score-panel").classList.add("hidden");const e=document.getElementById("mobile-history-grid");e&&(e.innerHTML="");const t=document.getElementById("history-list");t&&(t.innerHTML=""),Ze()}},1200)}let Qs=[];function Xs(n){if(!n||n.length<2)return null;const t=[...n].map(r=>r.codePointAt(0)).filter(r=>r>=127462&&r<=127487).map(r=>String.fromCharCode(r-127462+65));return t.length===2?t.join("").toLowerCase():null}function Dv(){const n=document.getElementById("flags-container");n.innerHTML="",Qs=[],It.forEach((e,t)=>{const r=document.createElement("div");r.className="flag-pill";const i=Xs(e);i?r.innerHTML=`<img src="https://flagcdn.com/w40/${i}.png" alt="${e}" style="width: 32px; height: auto; border-radius: 3px;">`:r.innerHTML=`<span class="flag-emoji">${e}</span>`,n.appendChild(r),Qs.push(r)})}function Vv(){let n=!1,e=0,t=0,r=0,i=0,o=0,a=!1;const l=(y,I)=>{n=!0,e=y,t=I,i=y,o=I,a=!1,r=Date.now()},u=(y,I)=>{if(!n)return;Math.hypot(y-i,I-o)>10&&(a=!0);const b=y-F.gearCenter.x,k=I-F.gearCenter.y,V=Math.atan2(k,b),C=Math.atan2(t-F.gearCenter.y,e-F.gearCenter.x);let L=V-C;L>Math.PI&&(L-=Math.PI*2),L<-Math.PI&&(L+=Math.PI*2),m.targetGearAngle+=L*(180/Math.PI),m.targetRingAngle+=L*(180/Math.PI)*(2/3),e=y,t=I},d=y=>{if(!n)return;const I=Date.now()-r;if(!a&&I>400){if(m.gameMode==="quick-fire"&&m.roundStarted){n=!1;return}m.roundStarted=!1,m.targetZoom=1.5,m.targetRingOpacity=0,m.targetOffsetX=0,m.score=0,m.attempts=0,m.correctCount=0,m.wrongCount=0,m.selectedInnerIdx=null,Ze(),m.gameMode="normal",m.quickPlayQuestions=[],m.questionHistory=[],m.qpSelectionPhase=!1,m.qpCurrentIndex=0,m.qpQuestionAttempts=0,document.getElementById("home-screen").classList.remove("hidden-home"),document.getElementById("mode-selection").classList.remove("hidden"),document.getElementById("score-panel").classList.add("hidden"),document.getElementById("hint-box").style.opacity="1";const L=document.getElementById("auth-container");L&&L.classList.remove("hidden"),document.getElementById("selection-hint").classList.add("hidden"),document.getElementById("stopwatch").classList.add("hidden");const H=document.getElementById("mobile-history-grid");H&&(H.innerHTML="");const W=document.getElementById("history-list");W&&(W.innerHTML=""),Qo(),n=!1;return}n=!1;const b=360/Y,k=m.targetGearAngle,V=Math.round(k/b)*b,C=V-k;m.targetGearAngle=V,m.targetRingAngle+=C*(2/3)};Ut.addEventListener("mousedown",y=>l(y.clientX,y.clientY)),window.addEventListener("mousemove",y=>u(y.clientX,y.clientY)),window.addEventListener("mouseup",d),Ut.addEventListener("touchstart",y=>{if(y.preventDefault(),y.touches.length>1)return;const I=y.touches[0];l(I.clientX,I.clientY)},{passive:!1}),window.addEventListener("touchmove",y=>{if(!n)return;y.preventDefault();const I=y.touches[0];u(I.clientX,I.clientY)},{passive:!1}),window.addEventListener("touchend",d);const p=document.getElementById("selection-box");p.style.pointerEvents="auto",p.onclick=y=>{if(y.preventDefault(),y.stopPropagation(),m.gameMode==="quick-fire"&&m.qpSelectionPhase){const I=360/Y;let k=Math.round((0-m.gearAngle)/I)%Y;k<0&&(k+=Y);const V=m.quickPlayQuestions.indexOf(k);if(V>-1?m.quickPlayQuestions.splice(V,1):m.quickPlayQuestions.length<3&&m.quickPlayQuestions.push(k),m.quickPlayQuestions.length===3){m.qpSelectionPhase=!1,m.roundStarted=!0,m.qpCurrentIndex=0,document.getElementById("selection-hint").classList.add("hidden"),document.getElementById("stopwatch").classList.remove("hidden"),m.startTime=Date.now(),m.targetZoom=1,m.targetRingOpacity=1,m.targetOffsetX=F.centerOffset,m.score=0,m.attempts=0,m.correctCount=0,m.wrongCount=0,m.qpQuestionAttempts=0,m.questionHistory=m.quickPlayQuestions.map(L=>({name:tt.innerOrder[L],status:"pending"})),$t(),m.selectedInnerIdx=null;const C=m.quickPlayQuestions[0];Ks(C),m.selectedInnerIdx=C,Ze(),document.getElementById("hint-box").style.opacity="0",document.getElementById("score-panel").classList.remove("hidden")}return}if(m.roundStarted)pl();else{m.roundStarted=!0,m.targetZoom=1,m.targetRingOpacity=1,m.targetOffsetX=F.centerOffset,m.currentRoundWrongCount=0;const I=360/Y,k=(0-m.gearAngle)/I;let V=Math.round(k)%Y;V<0&&(V+=Y),m.selectedInnerIdx=V,Ze(),document.getElementById("hint-box").style.opacity="0",document.getElementById("score-panel").classList.remove("hidden")}},window.addEventListener("keydown",y=>{const I=360/Y;if((y.key==="ArrowRight"||y.key==="ArrowDown")&&(m.targetGearAngle+=I,m.targetRingAngle+=I*.666),(y.key==="ArrowLeft"||y.key==="ArrowUp")&&(m.targetGearAngle-=I,m.targetRingAngle-=I*.666),y.key==="Enter"){if(m.gameMode==="quick-fire"&&m.qpSelectionPhase){const b=360/Y;let V=Math.round((0-m.gearAngle)/b)%Y;V<0&&(V+=Y);const C=m.quickPlayQuestions.indexOf(V);if(C>-1?m.quickPlayQuestions.splice(C,1):m.quickPlayQuestions.length<3&&m.quickPlayQuestions.push(V),m.quickPlayQuestions.length===3){m.qpSelectionPhase=!1,m.roundStarted=!0,m.qpCurrentIndex=0,document.getElementById("selection-hint").classList.add("hidden"),document.getElementById("stopwatch").classList.remove("hidden"),m.startTime=Date.now(),m.targetZoom=1,m.targetRingOpacity=1,m.targetOffsetX=F.centerOffset;const L=m.quickPlayQuestions[0];Ks(L),m.selectedInnerIdx=L,Ze(),document.getElementById("hint-box").style.opacity="0",document.getElementById("score-panel").classList.remove("hidden")}return}if(m.roundStarted)pl();else{m.roundStarted=!0,m.targetZoom=1,m.targetRingOpacity=1,m.targetOffsetX=F.centerOffset,m.currentRoundWrongCount=0;const b=360/Y,V=(0-m.gearAngle)/b;let C=Math.round(V)%Y;C<0&&(C+=Y),m.selectedInnerIdx=C,Ze(),document.getElementById("hint-box").style.opacity="0",document.getElementById("score-panel").classList.remove("hidden")}}if(y.key==="Escape"){if(m.gameMode==="quick-fire"&&m.roundStarted)return;m.roundStarted=!1,m.targetZoom=1.5,m.targetRingOpacity=0,m.targetOffsetX=0,m.score=0,m.attempts=0,m.correctCount=0,m.wrongCount=0,m.qpQuestionAttempts=0,m.questionHistory=m.quickPlayQuestions.map(k=>({name:tt.innerOrder[k],status:"pending"})),$t(),m.selectedInnerIdx=null,Ze(),document.getElementById("home-screen").classList.remove("hidden-home"),document.getElementById("mode-selection").classList.remove("hidden"),document.getElementById("score-panel").classList.add("hidden"),document.getElementById("hint-box").style.opacity="1";const b=document.getElementById("auth-container");b&&b.classList.remove("hidden")}})}async function Nv(){Ov(),Vv(),xv(),Pv();try{for(tt=await(await fetch("flags.json")).json(),Hs=Object.fromEntries(tt.qas.map(e=>[e.key,e.question])),jh=Object.fromEntries(tt.qas.map(e=>[e.key,e.answer])),jt=tt.innerOrder,It=[...tt.outerFlags];It.length<Ne;)It.push("");It=It.slice(0,Ne),Dv(),$t(),$h(),requestAnimationFrame(Hh),setTimeout(()=>{showInitialTutorial()},1e3)}catch(n){console.error("Failed to load game configuration:",n),document.getElementById("q-text").innerText="Error loading game data."}}function xv(){const n=document.getElementById("background-decor");if(!n)return;[{emoji:"📚",angle:350,radius:.57,size:70,c1:"#7B61FF",c2:"#4D8AFF",rot:-6},{emoji:"✏️",angle:20,radius:.55,size:60,c1:"#FFA24C",c2:"#FFC35B",rot:8},{emoji:"🧪",angle:65,radius:.58,size:65,c1:"#33D1B1",c2:"#1CB5E0",rot:-4},{emoji:"🪪",angle:110,radius:.56,size:66,c1:"#58C9F3",c2:"#2D9CDB",rot:5},{emoji:"🌎",angle:155,radius:.6,size:75,c1:"#6EE7F9",c2:"#22D3EE",rot:0}].forEach(r=>{const i=document.createElement("div");i.style.cssText=`
                    position: absolute;
                    width: ${r.size}px;
                    height: ${r.size}px;
                    background: linear-gradient(135deg, ${r.c1}, ${r.c2});
                    border-radius: 16px;
                    border: 3px solid rgba(255, 255, 255, 0.55);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: ${r.size*.45}px;
                    transform: rotate(${r.rot}deg);
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1);
                    pointer-events: none;
                `,i.innerText=r.emoji,i.dataset.angle=r.angle,i.dataset.radius=r.radius,n.appendChild(i)});function t(){const r=window.innerWidth,i=window.innerHeight,o=Math.min(r,i),a=r/2,l=i/2;n.querySelectorAll("div").forEach(u=>{const d=parseFloat(u.dataset.angle)*(Math.PI/180),p=parseFloat(u.dataset.radius)*o,y=a+p*Math.cos(d),I=l+p*Math.sin(d);u.style.left=y-u.offsetWidth/2+"px",u.style.top=I-u.offsetHeight/2+"px"})}t(),window.addEventListener("resize",t)}function Ov(){const n=document.getElementById("login-btn"),e=document.getElementById("logout-btn"),t=document.getElementById("user-profile"),r=document.getElementById("user-name"),i=document.getElementById("user-avatar"),o=document.getElementById("home-screen"),a=document.getElementById("mode-selection"),l=document.getElementById("login-btn").parentElement,u=document.getElementById("quick-play-btn"),d=document.getElementById("quick-fire-btn");let p=!1;const y=()=>{p||(p=!0,setTimeout(()=>{p=!1},500),V("normal"))};u.addEventListener("click",y),u.addEventListener("touchend",C=>{C.preventDefault(),y()},{passive:!1});let I=!1;const b=()=>{I||(I=!0,setTimeout(()=>{I=!1},500),k())};d.addEventListener("click",b),d.addEventListener("touchend",C=>{C.preventDefault(),b()},{passive:!1});function k(){console.log("Starting Quick Fire Selection Phase"),m.gameMode="quick-fire",m.quickPlayQuestions=[],m.qpSelectionPhase=!0,m.roundStarted=!1,o.classList.add("hidden-home"),document.getElementById("auth-container").classList.add("hidden"),document.getElementById("selection-hint").classList.remove("hidden"),document.getElementById("stopwatch").classList.add("hidden"),m.score=0,m.correctCount=0,m.wrongCount=0,m.qpQuestionAttempts=0,m.questionHistory=m.quickPlayQuestions.map(C=>({name:tt.innerOrder[C],status:"pending"})),$t()}function V(C){console.log("Starting game mode:",C),m.gameMode=C,o.classList.add("hidden-home"),document.getElementById("auth-container").classList.add("hidden")}n.onclick=Oh,e.onclick=Iv,Mh(async C=>{C?(await Lh(C),t.classList.remove("hidden"),r.innerText=C.displayName,i.src=C.photoURL,l.classList.add("hidden"),a.classList.remove("hidden"),Qo()):(o.classList.remove("hidden-home"),l.classList.remove("hidden"),a.classList.add("hidden"),document.getElementById("leaderboard-section").classList.add("hidden"),t.classList.add("hidden"))})}async function Qo(){const n=document.getElementById("leaderboard-section"),e=document.getElementById("leaderboard-podium");n.classList.remove("hidden");const t=await Tv();if(!t||t.length===0){e.innerHTML="";return}e.innerHTML="",Is(t[1]||null,2,e),Is(t[0]||null,1,e),Is(t[2]||null,3,e)}function Is(n,e,t){const r=e===1,i=e===2;let o="h-24",a="bg-gradient-to-t from-gray-400 to-gray-200 border-gray-300",l="🥈",u="scale-90",d="z-10";if(r?(o="h-32",a="bg-gradient-to-t from-yellow-500 to-yellow-200 border-yellow-300 shadow-[0_0_15px_rgba(255,215,0,0.5)]",l="🥇",u="scale-110",d="z-20"):i||(o="h-20",a="bg-gradient-to-t from-orange-700 to-orange-300 border-orange-400",l="🥉",u="scale-90",d="z-0"),!n){const b=document.createElement("div");b.className=`flex flex-col items-center ${u} ${d}`,b.innerHTML=`
            <div class="w-10 h-10 mb-[-10px] invisible"></div> <!-- Spacer -->
            <div class="${o} w-16 md:w-20 rounded-t-lg bg-white/10 border-t-2 border-white/20 border-l border-r border-transparent flex flex-col items-center justify-end pb-2">
                <div class="text-[9px] font-bold text-white/30 uppercase tracking-wider mb-1 opacity-50">Empty</div>
            </div>
        `,t.appendChild(b);return}const p=n.displayName?n.displayName.split(" ")[0]:"Anon",y=n.photoURL||`https://api.dicebear.com/7.x/avataaars/svg?seed=${p}`,I=document.createElement("div");I.className=`flex flex-col items-center ${u} ${d} transition-all duration-500 hover:scale-110 origin-bottom`,I.innerHTML=`
        <!-- Avatar -->
        <div class="relative mb-[-10px] z-10">
            <img src="${y}" class="w-10 h-10 rounded-full border-2 border-white shadow-md bg-white block object-cover" alt="${p}">
            <div class="absolute -top-2 -right-2 text-lg drop-shadow-md filter">${l}</div>
        </div>
        
        <!-- Bar -->
        <div class="${o} w-16 md:w-20 rounded-t-lg ${a} border-t-4 border-l border-r shadow-lg flex flex-col items-center justify-end pb-2 relative overflow-hidden group">
            <div class="absolute inset-0 bg-white/20 skew-y-12 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
            
            <div class="text-[9px] font-bold text-blue-900/60 uppercase tracking-wider mt-1 mb-1 truncate max-w-[90%] px-1">${p}</div>
        </div>
    `,t.appendChild(I)}function Xo(n){if(!n){console.error("No user provided to launchGame");return}Nv(),wv()}document.getElementById("login-btn").onclick=()=>{Oh().then(n=>{n&&Xo(n)}).catch(n=>console.error(n))};let Es=!1;const Kh=()=>{if(Es)return;Es=!0,console.log("[Guest] Login triggered");const n=Ev();Xo(n),document.getElementById("home-screen").classList.remove("hidden-home"),document.getElementById("login-btn").parentElement.classList.add("hidden"),document.getElementById("mode-selection").classList.remove("hidden"),document.getElementById("user-profile").classList.remove("hidden"),document.getElementById("user-name").innerText="Guest",document.getElementById("user-avatar").src="https://api.dicebear.com/7.x/avataaars/svg?seed=Guest",setTimeout(()=>{Es=!1},1e3)},Qh=document.getElementById("guest-btn");Qh.addEventListener("touchend",n=>{n.preventDefault(),Kh()},{passive:!1});Qh.addEventListener("click",n=>{Kh()});Mh(n=>{n&&Xo(n)});

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const T=globalThis,z=T.ShadowRoot&&(T.ShadyCSS===void 0||T.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,L=Symbol(),B=new WeakMap;let Q=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==L)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(z&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=B.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&B.set(e,t))}return t}toString(){return this.cssText}};const nt=o=>new Q(typeof o=="string"?o:o+"",void 0,L),tt=(o,...t)=>{const e=o.length===1?o[0]:t.reduce(((i,s,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[r+1]),o[0]);return new Q(e,o,L)},at=(o,t)=>{if(z)o.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const i=document.createElement("style"),s=T.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)}},W=z?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return nt(e)})(o):o;const{is:lt,defineProperty:ht,getOwnPropertyDescriptor:dt,getOwnPropertyNames:ct,getOwnPropertySymbols:ut,getPrototypeOf:pt}=Object,P=globalThis,V=P.trustedTypes,ft=V?V.emptyScript:"",mt=P.reactiveElementPolyfillSupport,w=(o,t)=>o,I={toAttribute(o,t){switch(t){case Boolean:o=o?ft:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},et=(o,t)=>!lt(o,t),q={attribute:!0,type:String,converter:I,reflect:!1,useDefault:!1,hasChanged:et};Symbol.metadata??=Symbol("metadata"),P.litPropertyMetadata??=new WeakMap;let _=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=q){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&ht(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=dt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){const d=s?.call(this);r?.call(this,n),this.requestUpdate(t,d,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??q}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const t=pt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const e=this.properties,i=[...ct(e),...ut(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(W(s))}else t!==void 0&&e.push(W(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return at(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const r=(i.converter?.toAttribute!==void 0?i.converter:I).toAttribute(e,i.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const r=i.getPropertyOptions(s),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:I;this._$Em=s;const d=n.fromAttribute(e,r.type);this[s]=d??this._$Ej?.get(s)??d,this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){const s=this.constructor,r=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??et)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),r!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,r]of i){const{wrapped:n}=r,d=this[s];n!==!0||this._$AL.has(s)||d===void 0||this.C(s,void 0,r,d)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((i=>i.hostUpdate?.())),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[w("elementProperties")]=new Map,_[w("finalized")]=new Map,mt?.({ReactiveElement:_}),(P.reactiveElementVersions??=[]).push("2.1.1");const D=globalThis,N=D.trustedTypes,G=N?N.createPolicy("lit-html",{createHTML:o=>o}):void 0,it="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,st="?"+m,gt=`<${st}>`,$=document,S=()=>$.createComment(""),x=o=>o===null||typeof o!="object"&&typeof o!="function",j=Array.isArray,bt=o=>j(o)||typeof o?.[Symbol.iterator]=="function",U=`[ 	
\f\r]`,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Y=/-->/g,K=/>/g,g=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),J=/'/g,Z=/"/g,ot=/^(?:script|style|textarea|title)$/i,$t=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),yt=$t(1),y=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),X=new WeakMap,b=$.createTreeWalker($,129);function rt(o,t){if(!j(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return G!==void 0?G.createHTML(t):t}const _t=(o,t)=>{const e=o.length-1,i=[];let s,r=t===2?"<svg>":t===3?"<math>":"",n=A;for(let d=0;d<e;d++){const a=o[d];let c,u,l=-1,p=0;for(;p<a.length&&(n.lastIndex=p,u=n.exec(a),u!==null);)p=n.lastIndex,n===A?u[1]==="!--"?n=Y:u[1]!==void 0?n=K:u[2]!==void 0?(ot.test(u[2])&&(s=RegExp("</"+u[2],"g")),n=g):u[3]!==void 0&&(n=g):n===g?u[0]===">"?(n=s??A,l=-1):u[1]===void 0?l=-2:(l=n.lastIndex-u[2].length,c=u[1],n=u[3]===void 0?g:u[3]==='"'?Z:J):n===Z||n===J?n=g:n===Y||n===K?n=A:(n=g,s=void 0);const f=n===g&&o[d+1].startsWith("/>")?" ":"";r+=n===A?a+gt:l>=0?(i.push(c),a.slice(0,l)+it+a.slice(l)+m+f):a+m+(l===-2?d:f)}return[rt(o,r+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class C{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const d=t.length-1,a=this.parts,[c,u]=_t(t,e);if(this.el=C.createElement(c,i),b.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=b.nextNode())!==null&&a.length<d;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(it)){const p=u[n++],f=s.getAttribute(l).split(m),R=/([.?@])?(.*)/.exec(p);a.push({type:1,index:r,name:R[2],strings:f,ctor:R[1]==="."?At:R[1]==="?"?wt:R[1]==="@"?Et:k}),s.removeAttribute(l)}else l.startsWith(m)&&(a.push({type:6,index:r}),s.removeAttribute(l));if(ot.test(s.tagName)){const l=s.textContent.split(m),p=l.length-1;if(p>0){s.textContent=N?N.emptyScript:"";for(let f=0;f<p;f++)s.append(l[f],S()),b.nextNode(),a.push({type:2,index:++r});s.append(l[p],S())}}}else if(s.nodeType===8)if(s.data===st)a.push({type:2,index:r});else{let l=-1;for(;(l=s.data.indexOf(m,l+1))!==-1;)a.push({type:7,index:r}),l+=m.length-1}r++}}static createElement(t,e){const i=$.createElement("template");return i.innerHTML=t,i}}function v(o,t,e=o,i){if(t===y)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl;const r=x(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(o),s._$AT(o,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=v(o,s._$AS(o,t.values),s,i)),t}class vt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??$).importNode(e,!0);b.currentNode=s;let r=b.nextNode(),n=0,d=0,a=i[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new O(r,r.nextSibling,this,t):a.type===1?c=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(c=new St(r,this,t)),this._$AV.push(c),a=i[++d]}n!==a?.index&&(r=b.nextNode(),n++)}return b.currentNode=$,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class O{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=v(this,t,e),x(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==y&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):bt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&x(this._$AH)?this._$AA.nextSibling.data=t:this.T($.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=C.createElement(rt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const r=new vt(s,this),n=r.u(this.options);r.p(e),this.T(n),this._$AH=r}}_$AC(t){let e=X.get(t.strings);return e===void 0&&X.set(t.strings,e=new C(t)),e}k(t){j(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new O(this.O(S()),this.O(S()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=h}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(r===void 0)t=v(this,t,e,0),n=!x(t)||t!==this._$AH&&t!==y,n&&(this._$AH=t);else{const d=t;let a,c;for(t=r[0],a=0;a<r.length-1;a++)c=v(this,d[i+a],e,a),c===y&&(c=this._$AH[a]),n||=!x(c)||c!==this._$AH[a],c===h?t=h:t!==h&&(t+=(c??"")+r[a+1]),this._$AH[a]=c}n&&!s&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class At extends k{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}}class wt extends k{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}}class Et extends k{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=v(this,t,e,0)??h)===y)return;const i=this._$AH,s=t===h&&i!==h||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==h&&(i===h||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class St{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){v(this,t)}}const xt=D.litHtmlPolyfillSupport;xt?.(C,O),(D.litHtmlVersions??=[]).push("3.3.1");const Ct=(o,t,e)=>{const i=e?.renderBefore??t;let s=i._$litPart$;if(s===void 0){const r=e?.renderBefore??null;i._$litPart$=s=new O(t.insertBefore(S(),r),r,void 0,e??{})}return s._$AI(o),s};const F=globalThis;let E=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ct(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return y}};E._$litElement$=!0,E.finalized=!0,F.litElementHydrateSupport?.({LitElement:E});const Ot=F.litElementPolyfillSupport;Ot?.({LitElement:E});(F.litElementVersions??=[]).push("4.2.1");const Rt=o=>(t,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(o,t)})):customElements.define(o,t)};const Tt={CHILD:2},Nt=o=>(...t)=>({_$litDirective$:o,values:t});class Pt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}class H extends Pt{constructor(t){if(super(t),this.it=h,t.type!==Tt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===h||t==null)return this._t=void 0,this.it=t;if(t===y)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}H.directiveName="unsafeHTML",H.resultType=1;const kt=Nt(H),Ut=tt`
  /*
https://github.com/tailwindlabs/tailwindcss/blob/a1f533a0e04ab7f94a31ced50843e638dc99ecac/packages/tailwindcss/preflight.css

MIT License

Copyright (c) Tailwind Labs, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

  /*
  1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
  2. Remove default margins and padding
  3. Reset all borders.
*/

  *,
  ::after,
  ::before,
  ::backdrop,
  ::file-selector-button {
    box-sizing: border-box; /* 1 */
    margin: 0; /* 2 */
    padding: 0; /* 2 */
    border: 0 solid; /* 3 */
  }

  /*
  1. Use a consistent sensible line-height in all browsers.
  2. Prevent adjustments of font size after orientation changes in iOS.
  3. Use a more readable tab size.
  4. Use the user's configured \`sans\` font-family by default.
  5. Use the user's configured \`sans\` font-feature-settings by default.
  6. Use the user's configured \`sans\` font-variation-settings by default.
  7. Disable tap highlights on iOS.
*/

  html,
  :host {
    line-height: 1.5; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    tab-size: 4; /* 3 */
    font-family: --theme(
      --default-font-family,
      ui-sans-serif,
      system-ui,
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji"
    ); /* 4 */
    font-feature-settings: --theme(
      --default-font-feature-settings,
      normal
    ); /* 5 */
    font-variation-settings: --theme(
      --default-font-variation-settings,
      normal
    ); /* 6 */
    -webkit-tap-highlight-color: transparent; /* 7 */
  }

  /*
  1. Add the correct height in Firefox.
  2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
  3. Reset the default border style to a 1px solid border.
*/

  hr {
    height: 0; /* 1 */
    color: inherit; /* 2 */
    border-top-width: 1px; /* 3 */
  }

  /*
  Add the correct text decoration in Chrome, Edge, and Safari.
*/

  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }

  /*
  Remove the default font size and weight for headings.
*/

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  /*
  Reset links to optimize for opt-in styling instead of opt-out.
*/

  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }

  /*
  Add the correct font weight in Edge and Safari.
*/

  b,
  strong {
    font-weight: bolder;
  }

  /*
  1. Use the user's configured \`mono\` font-family by default.
  2. Use the user's configured \`mono\` font-feature-settings by default.
  3. Use the user's configured \`mono\` font-variation-settings by default.
  4. Correct the odd \`em\` font sizing in all browsers.
*/

  code,
  kbd,
  samp,
  pre {
    font-family: --theme(
      --default-mono-font-family,
      ui-monospace,
      SFMono-Regular,
      Menlo,
      Monaco,
      Consolas,
      "Liberation Mono",
      "Courier New",
      monospace
    ); /* 1 */
    font-feature-settings: --theme(
      --default-mono-font-feature-settings,
      normal
    ); /* 2 */
    font-variation-settings: --theme(
      --default-mono-font-variation-settings,
      normal
    ); /* 3 */
    font-size: 1em; /* 4 */
  }

  /*
  Add the correct font size in all browsers.
*/

  small {
    font-size: 80%;
  }

  /*
  Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /*
  1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
  2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
  3. Remove gaps between table borders by default.
*/

  table {
    text-indent: 0; /* 1 */
    border-color: inherit; /* 2 */
    border-collapse: collapse; /* 3 */
  }

  /*
  Use the modern Firefox focus style for all focusable elements.
*/

  :-moz-focusring {
    outline: auto;
  }

  /*
  Add the correct vertical alignment in Chrome and Firefox.
*/

  progress {
    vertical-align: baseline;
  }

  /*
  Add the correct display in Chrome and Safari.
*/

  summary {
    display: list-item;
  }

  /*
  Make lists unstyled by default.
*/

  ol,
  ul,
  menu {
    list-style: none;
  }

  /*
  1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
  2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
      This can trigger a poorly considered lint error in some tools but is included by design.
*/

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block; /* 1 */
    vertical-align: middle; /* 2 */
  }

  /*
  Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

  img,
  video {
    max-width: 100%;
    height: auto;
  }

  /*
  1. Inherit font styles in all browsers.
  2. Remove border radius in all browsers.
  3. Remove background color in all browsers.
  4. Ensure consistent opacity for disabled states in all browsers.
*/

  button,
  input,
  select,
  optgroup,
  textarea,
  ::file-selector-button {
    font: inherit; /* 1 */
    font-feature-settings: inherit; /* 1 */
    font-variation-settings: inherit; /* 1 */
    letter-spacing: inherit; /* 1 */
    color: inherit; /* 1 */
    border-radius: 0; /* 2 */
    background-color: transparent; /* 3 */
    opacity: 1; /* 4 */
  }

  /*
  Restore default font weight.
*/

  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }

  /*
  Restore indentation.
*/

  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }

  /*
  Restore space after button.
*/

  ::file-selector-button {
    margin-inline-end: 4px;
  }

  /*
  Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
*/

  ::placeholder {
    opacity: 1;
  }

  /*
  Set the default placeholder color to a semi-transparent version of the current text color in browsers that do not
  crash when using \`color-mix(…)\` with \`currentcolor\`. (https://github.com/tailwindlabs/tailwindcss/issues/17194)
*/

  @supports (not (-webkit-appearance: -apple-pay-button)) /* Not Safari */ or
    (contain-intrinsic-size: 1px) /* Safari 17+ */ {
    ::placeholder {
      color: color-mix(in oklab, currentcolor 50%, transparent);
    }
  }

  /*
  Prevent resizing textareas horizontally by default.
*/

  textarea {
    resize: vertical;
  }

  /*
  Remove the inner padding in Chrome and Safari on macOS.
*/

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /*
  1. Ensure date/time inputs have the same height when empty in iOS Safari.
  2. Ensure text alignment can be changed on date/time inputs in iOS Safari.
*/

  ::-webkit-date-and-time-value {
    min-height: 1lh; /* 1 */
    text-align: inherit; /* 2 */
  }

  /*
  Prevent height from changing on date/time inputs in macOS Safari when the input is set to \`display: block\`.
*/

  ::-webkit-datetime-edit {
    display: inline-flex;
  }

  /*
  Remove excess padding from pseudo-elements in date/time inputs to ensure consistent height across browsers.
*/

  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }

  ::-webkit-datetime-edit,
  ::-webkit-datetime-edit-year-field,
  ::-webkit-datetime-edit-month-field,
  ::-webkit-datetime-edit-day-field,
  ::-webkit-datetime-edit-hour-field,
  ::-webkit-datetime-edit-minute-field,
  ::-webkit-datetime-edit-second-field,
  ::-webkit-datetime-edit-millisecond-field,
  ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }

  /*
  Center dropdown marker shown on inputs with paired \`<datalist>\`s in Chrome. (https://github.com/tailwindlabs/tailwindcss/issues/18499)
*/

  ::-webkit-calendar-picker-indicator {
    line-height: 1;
  }

  /*
  Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

  :-moz-ui-invalid {
    box-shadow: none;
  }

  /*
  Correct the inability to style the border radius in iOS Safari.
*/

  button,
  input:where([type="button"], [type="reset"], [type="submit"]),
  ::file-selector-button {
    appearance: button;
  }

  /*
  Correct the cursor style of increment and decrement buttons in Safari.
*/

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  /*
  Make elements with the HTML hidden attribute stay hidden by default.
*/

  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
`,It="/logo-black.svg",Ht="/logo-white.svg",Mt="/logo.svg",zt=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
  width="175.98865"
  height="256"
  viewBox="0 0 164.98936 240.00001"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:cc="http://creativecommons.org/ns#"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
>
  <metadata>
    <rdf:RDF>
      <cc:Work rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g transform="translate(-317.40707,-420.21956)">
    <g transform="matrix(0.89526548,0,0,0.89526548,-11.212902,63.476514)">
      <path
        id="stalk"
        d="m 520.62695,590.04102 c 0.0953,-6.07416 0.70828,-18.58321 0.5918,-31.9629 -0.11369,-13.05772 -0.94675,-26.94319 -1.58984,-36.48437 -0.38151,-5.66028 -1.57307,-6.04267 -4.39649,-6.03516 -2.82342,0.008 -4.66066,1.25838 -4.68945,6.17188 -0.0504,8.60421 0.89605,21.43369 0.74805,34.5625 -0.13089,11.61039 -1.32712,23.33898 -1.48047,34.28125 -0.21838,15.58279 -11.47455,20.36575 -17.24219,20.73024 -10.04624,0.63487 -20.0913,-12.53202 -21.05664,-34.07399 -1.10596,-24.67974 -3.85922,-55.26933 -7.84375,-77.93164 -0.24039,-1.36722 -3.29551,-32.43398 -1.33203,-42.79688 0.64336,-3.39556 3.36845,-9.00219 -3.78906,-9.59961 -6.5191,-0.54414 -4.36743,7.41117 -5.32422,11.5293 -2.20573,9.49367 0.0775,33.05609 1.52539,47.75391 2.09454,21.26158 8.28525,44.39928 5.61328,80.52929 -1.43137,19.3548 -8.95104,24.74208 -22.67144,24.94655 -10.76892,0.16048 -20.97804,-5.92655 -26.67377,-21.48316 -1.93578,-5.28716 -0.94595,-17.18737 -5.03174,-38.58448 -3.47796,-18.21397 -4.47557,-41.26337 -4.09376,-48.46094 0.22371,-4.21726 -0.14667,-6.09224 -4.18164,-5.88867 -4.03497,0.20358 -4.20852,0.62542 -4.21679,5.3418 -0.0185,10.52527 1.78815,31.06074 4.30273,49.74414 2.57288,19.11649 1.14337,36.49684 0.35891,37.74219 -3.78843,6.01421 -18.01528,10.84255 -25.178,19.91468 -9.99006,12.65318 -6.50591,29.8061 5.24506,40.61459 3.5424,2.87674 12.02408,9.74058 22.36724,8.74308 9.87888,-0.95273 21.45587,-9.74176 32.04932,-8.33619 14.08082,1.86828 22.58994,16.03079 36.11801,15.47117 16.07163,-0.66483 30.61051,-10.79421 37.05584,-10.34788 25.76735,4.56347 44.66475,-10.64623 45.41428,-24.2109 1.64417,-29.7555 -25.69561,-22.11809 -30.59863,-41.8798 z m -117.0957,18.24023 c 5.1278,-0.29706 6.56217,7.10509 8.25391,12.65234 4.12408,13.52295 0.46732,14.9713 -8.21289,13.57227 -11.24829,-1.81294 -17.35537,-5.1681 -16.11329,-11.95898 1.26269,-6.90356 5.52562,-8.22448 10.8086,-11.9961 2.10139,-1.50022 3.82789,-2.18635 5.26367,-2.26953 z m 114.68359,3.72461 c 4.92594,-0.22589 14.62313,5.31318 14.64258,11.42773 0.0115,3.60503 -0.12924,6.95497 -11.42969,11.07227 -4.63317,1.68809 -13.92773,1.82748 -13.92773,-4.28711 0,-6.11458 2.92658,-17.85576 10.71484,-18.21289 z m -47.61328,5.0918 c 6.4484,0.38679 11.8835,12.13573 13.6836,17.4082 3.30013,9.66608 -6.2352,14.28516 -13.92774,14.28516 -7.69254,0 -16.78515,-2.26045 -16.78515,-8.57227 -10e-6,-6.31183 7.30745,-20.35741 15,-22.85742 0.68586,-0.2229 1.36222,-0.30369 2.02929,-0.26367 z"
      />
      <g id="caps">
        <path
          d="m 425.52675,498.54606 c 0.84637,5.4724 -7.01336,6.06091 -20.70812,6.06091 -0.48563,0 -3.73186,-1.06843 1.75423,-1.59317 3.51626,-0.33633 14.51824,-1.34096 14.59237,-2.71118 0.14789,-2.73369 -21.23411,-5.12155 -22.65996,-5.16004 -4.0146,-0.10838 -16.48086,-0.0665 -16.39507,3.28729 0.0437,1.70839 5.03248,3.33269 8.15007,4.38687 3.1176,1.05419 1.66148,1.84278 1.42364,1.81032 -7.4534,-1.01731 -11.45875,-4.29192 -12.62417,-7.34369 -5.27669,-13.81756 8.27891,-40.48529 21.46574,-40.15357 13.69304,0.34445 22.22805,23.48532 25.00127,41.41626 z"
        />
        <path
          d="m 496.57469,455.5282 c -0.39638,6.78103 -4.68667,4.34013 -24.19376,4.34013 -5.74251,0 -10.11397,-3.54219 -0.0266,-3.78457 5.03003,-0.12086 17.64961,1.37291 17.7552,-1.33648 0.15186,-3.89666 -30.24629,-9.56808 -32.2773,-9.62291 -5.71847,-0.15438 -35.34495,-2.87262 -35.22275,1.90456 0.0623,2.43347 18.28003,6.76746 22.72079,8.26906 4.44077,1.50161 2.36665,2.62489 2.02786,2.57866 -10.61677,-1.44908 -29.45387,-3.3351 -29.8291,-12.31801 -0.13897,-3.32684 11.33018,-21.33152 22.85821,-36.45096 5.72227,-7.50499 14.69089,-10.71405 21.08023,-10.55333 6.69795,0.16849 15.6453,6.40023 20.48814,14.55822 5.04761,8.50294 14.99949,35.90812 14.6191,42.41563 z"
        />
        <path
          d="m 548.26371,518.84668 c 0.13739,4.19673 -13.76959,4.51867 -22.13522,5.05438 -0.61834,0.0396 -6.72567,-2.07746 0.27388,-2.74696 4.4863,-0.42911 17.09486,-0.10375 17.01087,-2.74484 -0.11102,-3.49117 -20.48488,-4.74873 -28.55409,-4.97641 -5.12194,-0.14453 -30.49176,0.27234 -30.3823,3.47988 0.0744,2.17913 15.88508,3.00209 19.86273,4.34709 3.97766,1.34501 3.90556,3.42258 0.56638,3.02403 -9.53011,-1.13749 -25.47105,-3.59576 -25.57111,-7.76248 -0.15199,-6.32924 12.3886,-35.47992 19.38145,-42.94839 4.50982,-4.81655 11.21654,-7.76839 15.86324,-7.74675 6.08165,0.0283 16.46627,6.33051 21.03239,16.31168 6.88311,15.04589 12.49491,31.91748 12.65178,36.70877 z"
        />
      </g>
    </g>
  </g>
</svg>
`;var Lt=Object.getOwnPropertyDescriptor,Dt=(o,t,e,i)=>{for(var s=i>1?void 0:i?Lt(t,e):t,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=n(s)||s);return s};let M=class extends E{render(){return yt`
      <h1>ditup</h1>
      <p class="subtitle">do it together</p>
      <p class="tagline">turn ideas into collaborative action</p>
      <div class="logo">${kt(zt)}</div>
      <!-- <picture>
        <source srcset=${Ht} media="(prefers-color-scheme: dark)" />
        <source
          srcset=${It}
          media="(prefers-color-scheme: light)"
        />
        <img src=${Mt} height=${200} class="logo" />
      </picture> -->
      <a class="button primary" href="https://docs.ditup.org">learn more</a>
    `}};M.styles=[Ut,tt`
      :host {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
      }

      h1,
      .subtitle,
      .tagline {
        text-align: center;
      }

      h1 {
        font-size: 2rem;
        color: var(--color-primary);
      }

      .subtitle,
      .tagline {
        font-size: 1.25rem;
      }

      .logo svg {
        height: 150px;
        fill: var(--color-text);
      }

      .logo svg #caps {
        fill: var(--color-primary);
      }

      .button {
        padding: 0.5rem 1rem;
        background-color: var(--color-surface);
        border-radius: var(--border-radius);
      }

      .button:hover {
        filter: brightness(0.9);
      }

      .button.primary {
        background-color: var(--color-primary);
        font-size: 1.25rem;
      }
    `];M=Dt([Rt("dtp-landing")],M);

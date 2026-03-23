(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();const Zn=globalThis,Ba=Zn.ShadowRoot&&(Zn.ShadyCSS===void 0||Zn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ha=Symbol(),Zo=new WeakMap;let ql=class{constructor(t,n,s){if(this._$cssResult$=!0,s!==Ha)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Ba&&t===void 0){const s=n!==void 0&&n.length===1;s&&(t=Zo.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Zo.set(n,t))}return t}toString(){return this.cssText}};const Xc=e=>new ql(typeof e=="string"?e:e+"",void 0,Ha),ed=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((s,a,o)=>s+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[o+1],e[0]);return new ql(n,e,Ha)},td=(e,t)=>{if(Ba)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const s=document.createElement("style"),a=Zn.litNonce;a!==void 0&&s.setAttribute("nonce",a),s.textContent=n.cssText,e.appendChild(s)}},Xo=Ba?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const s of t.cssRules)n+=s.cssText;return Xc(n)})(e):e;const{is:nd,defineProperty:sd,getOwnPropertyDescriptor:ad,getOwnPropertyNames:od,getOwnPropertySymbols:id,getPrototypeOf:ld}=Object,gs=globalThis,ei=gs.trustedTypes,rd=ei?ei.emptyScript:"",cd=gs.reactiveElementPolyfillSupport,fn=(e,t)=>e,ns={toAttribute(e,t){switch(t){case Boolean:e=e?rd:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},za=(e,t)=>!nd(e,t),ti={attribute:!0,type:String,converter:ns,reflect:!1,useDefault:!1,hasChanged:za};Symbol.metadata??=Symbol("metadata"),gs.litPropertyMetadata??=new WeakMap;let Ft=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=ti){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const s=Symbol(),a=this.getPropertyDescriptor(t,s,n);a!==void 0&&sd(this.prototype,t,a)}}static getPropertyDescriptor(t,n,s){const{get:a,set:o}=ad(this.prototype,t)??{get(){return this[n]},set(l){this[n]=l}};return{get:a,set(l){const c=a?.call(this);o?.call(this,l),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ti}static _$Ei(){if(this.hasOwnProperty(fn("elementProperties")))return;const t=ld(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(fn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(fn("properties"))){const n=this.properties,s=[...od(n),...id(n)];for(const a of s)this.createProperty(a,n[a])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[s,a]of n)this.elementProperties.set(s,a)}this._$Eh=new Map;for(const[n,s]of this.elementProperties){const a=this._$Eu(n,s);a!==void 0&&this._$Eh.set(a,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const a of s)n.unshift(Xo(a))}else t!==void 0&&n.push(Xo(t));return n}static _$Eu(t,n){const s=n.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const s of n.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return td(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,s){this._$AK(t,s)}_$ET(t,n){const s=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,s);if(a!==void 0&&s.reflect===!0){const o=(s.converter?.toAttribute!==void 0?s.converter:ns).toAttribute(n,s.type);this._$Em=t,o==null?this.removeAttribute(a):this.setAttribute(a,o),this._$Em=null}}_$AK(t,n){const s=this.constructor,a=s._$Eh.get(t);if(a!==void 0&&this._$Em!==a){const o=s.getPropertyOptions(a),l=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:ns;this._$Em=a;const c=l.fromAttribute(n,o.type);this[a]=c??this._$Ej?.get(a)??c,this._$Em=null}}requestUpdate(t,n,s,a=!1,o){if(t!==void 0){const l=this.constructor;if(a===!1&&(o=this[t]),s??=l.getPropertyOptions(t),!((s.hasChanged??za)(o,n)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(l._$Eu(t,s))))return;this.C(t,n,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:s,reflect:a,wrapped:o},l){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,l??n??this[t]),o!==!0||l!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(n=void 0),this._$AL.set(t,n)),a===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[a,o]of this._$Ep)this[a]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[a,o]of s){const{wrapped:l}=o,c=this[a];l!==!0||this._$AL.has(a)||c===void 0||this.C(a,void 0,o,c)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(n)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(t){}firstUpdated(t){}};Ft.elementStyles=[],Ft.shadowRootOptions={mode:"open"},Ft[fn("elementProperties")]=new Map,Ft[fn("finalized")]=new Map,cd?.({ReactiveElement:Ft}),(gs.reactiveElementVersions??=[]).push("2.1.2");const Wa=globalThis,ni=e=>e,ss=Wa.trustedTypes,si=ss?ss.createPolicy("lit-html",{createHTML:e=>e}):void 0,jl="$lit$",tt=`lit$${Math.random().toFixed(9).slice(2)}$`,Ql="?"+tt,dd=`<${Ql}>`,St=document,$n=()=>St.createComment(""),kn=e=>e===null||typeof e!="object"&&typeof e!="function",Ka=Array.isArray,ud=e=>Ka(e)||typeof e?.[Symbol.iterator]=="function",Os=`[ 	
\f\r]`,Zt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ai=/-->/g,oi=/>/g,dt=RegExp(`>|${Os}(?:([^\\s"'>=/]+)(${Os}*=${Os}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ii=/'/g,li=/"/g,Vl=/^(?:script|style|textarea|title)$/i,Gl=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),r=Gl(1),zn=Gl(2),st=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),ri=new WeakMap,$t=St.createTreeWalker(St,129);function Jl(e,t){if(!Ka(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return si!==void 0?si.createHTML(t):t}const pd=(e,t)=>{const n=e.length-1,s=[];let a,o=t===2?"<svg>":t===3?"<math>":"",l=Zt;for(let c=0;c<n;c++){const u=e[c];let f,p,g=-1,$=0;for(;$<u.length&&(l.lastIndex=$,p=l.exec(u),p!==null);)$=l.lastIndex,l===Zt?p[1]==="!--"?l=ai:p[1]!==void 0?l=oi:p[2]!==void 0?(Vl.test(p[2])&&(a=RegExp("</"+p[2],"g")),l=dt):p[3]!==void 0&&(l=dt):l===dt?p[0]===">"?(l=a??Zt,g=-1):p[1]===void 0?g=-2:(g=l.lastIndex-p[2].length,f=p[1],l=p[3]===void 0?dt:p[3]==='"'?li:ii):l===li||l===ii?l=dt:l===ai||l===oi?l=Zt:(l=dt,a=void 0);const k=l===dt&&e[c+1].startsWith("/>")?" ":"";o+=l===Zt?u+dd:g>=0?(s.push(f),u.slice(0,g)+jl+u.slice(g)+tt+k):u+tt+(g===-2?c:k)}return[Jl(e,o+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};let ma=class Yl{constructor({strings:t,_$litType$:n},s){let a;this.parts=[];let o=0,l=0;const c=t.length-1,u=this.parts,[f,p]=pd(t,n);if(this.el=Yl.createElement(f,s),$t.currentNode=this.el.content,n===2||n===3){const g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(a=$t.nextNode())!==null&&u.length<c;){if(a.nodeType===1){if(a.hasAttributes())for(const g of a.getAttributeNames())if(g.endsWith(jl)){const $=p[l++],k=a.getAttribute(g).split(tt),S=/([.?@])?(.*)/.exec($);u.push({type:1,index:o,name:S[2],strings:k,ctor:S[1]==="."?md:S[1]==="?"?fd:S[1]==="@"?hd:fs}),a.removeAttribute(g)}else g.startsWith(tt)&&(u.push({type:6,index:o}),a.removeAttribute(g));if(Vl.test(a.tagName)){const g=a.textContent.split(tt),$=g.length-1;if($>0){a.textContent=ss?ss.emptyScript:"";for(let k=0;k<$;k++)a.append(g[k],$n()),$t.nextNode(),u.push({type:2,index:++o});a.append(g[$],$n())}}}else if(a.nodeType===8)if(a.data===Ql)u.push({type:2,index:o});else{let g=-1;for(;(g=a.data.indexOf(tt,g+1))!==-1;)u.push({type:7,index:o}),g+=tt.length-1}o++}}static createElement(t,n){const s=St.createElement("template");return s.innerHTML=t,s}};function Wt(e,t,n=e,s){if(t===st)return t;let a=s!==void 0?n._$Co?.[s]:n._$Cl;const o=kn(t)?void 0:t._$litDirective$;return a?.constructor!==o&&(a?._$AO?.(!1),o===void 0?a=void 0:(a=new o(e),a._$AT(e,n,s)),s!==void 0?(n._$Co??=[])[s]=a:n._$Cl=a),a!==void 0&&(t=Wt(e,a._$AS(e,t.values),a,s)),t}class gd{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:s}=this._$AD,a=(t?.creationScope??St).importNode(n,!0);$t.currentNode=a;let o=$t.nextNode(),l=0,c=0,u=s[0];for(;u!==void 0;){if(l===u.index){let f;u.type===2?f=new ms(o,o.nextSibling,this,t):u.type===1?f=new u.ctor(o,u.name,u.strings,this,t):u.type===6&&(f=new vd(o,this,t)),this._$AV.push(f),u=s[++c]}l!==u?.index&&(o=$t.nextNode(),l++)}return $t.currentNode=St,a}p(t){let n=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,n),n+=s.strings.length-2):s._$AI(t[n])),n++}}let ms=class Zl{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,s,a){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=s,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Wt(this,t,n),kn(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==st&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ud(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==y&&kn(this._$AH)?this._$AA.nextSibling.data=t:this.T(St.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:s}=t,a=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=ma.createElement(Jl(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===a)this._$AH.p(n);else{const o=new gd(a,this),l=o.u(this.options);o.p(n),this.T(l),this._$AH=o}}_$AC(t){let n=ri.get(t.strings);return n===void 0&&ri.set(t.strings,n=new ma(t)),n}k(t){Ka(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let s,a=0;for(const o of t)a===n.length?n.push(s=new Zl(this.O($n()),this.O($n()),this,this.options)):s=n[a],s._$AI(o),a++;a<n.length&&(this._$AR(s&&s._$AB.nextSibling,a),n.length=a)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const s=ni(t).nextSibling;ni(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}};class fs{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,s,a,o){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=n,this._$AM=a,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=y}_$AI(t,n=this,s,a){const o=this.strings;let l=!1;if(o===void 0)t=Wt(this,t,n,0),l=!kn(t)||t!==this._$AH&&t!==st,l&&(this._$AH=t);else{const c=t;let u,f;for(t=o[0],u=0;u<o.length-1;u++)f=Wt(this,c[s+u],n,u),f===st&&(f=this._$AH[u]),l||=!kn(f)||f!==this._$AH[u],f===y?t=y:t!==y&&(t+=(f??"")+o[u+1]),this._$AH[u]=f}l&&!a&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}let md=class extends fs{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}},fd=class extends fs{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==y)}},hd=class extends fs{constructor(t,n,s,a,o){super(t,n,s,a,o),this.type=5}_$AI(t,n=this){if((t=Wt(this,t,n,0)??y)===st)return;const s=this._$AH,a=t===y&&s!==y||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==y&&(s===y||a);a&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},vd=class{constructor(t,n,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Wt(this,t)}};const yd={I:ms},bd=Wa.litHtmlPolyfillSupport;bd?.(ma,ms),(Wa.litHtmlVersions??=[]).push("3.3.2");const wd=(e,t,n)=>{const s=n?.renderBefore??t;let a=s._$litPart$;if(a===void 0){const o=n?.renderBefore??null;s._$litPart$=a=new ms(t.insertBefore($n(),o),o,void 0,n??{})}return a._$AI(e),a};const qa=globalThis;let zt=class extends Ft{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=wd(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return st}};zt._$litElement$=!0,zt.finalized=!0,qa.litElementHydrateSupport?.({LitElement:zt});const xd=qa.litElementPolyfillSupport;xd?.({LitElement:zt});(qa.litElementVersions??=[]).push("4.2.2");const Xl=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};const $d={attribute:!0,type:String,converter:ns,reflect:!1,hasChanged:za},kd=(e=$d,t,n)=>{const{kind:s,metadata:a}=n;let o=globalThis.litPropertyMetadata.get(a);if(o===void 0&&globalThis.litPropertyMetadata.set(a,o=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(n.name,e),s==="accessor"){const{name:l}=n;return{set(c){const u=t.get.call(this);t.set.call(this,c),this.requestUpdate(l,u,e,!0,c)},init(c){return c!==void 0&&this.C(l,void 0,e,c),c}}}if(s==="setter"){const{name:l}=n;return function(c){const u=this[l];t.call(this,c),this.requestUpdate(l,u,e,!0,c)}}throw Error("Unsupported decorator location: "+s)};function hs(e){return(t,n)=>typeof n=="object"?kd(e,t,n):((s,a,o)=>{const l=a.hasOwnProperty(o);return a.constructor.createProperty(o,s),l?Object.getOwnPropertyDescriptor(a,o):void 0})(e,t,n)}function x(e){return hs({...e,state:!0,attribute:!1})}async function Ce(e,t){if(!(!e.client||!e.connected)&&!e.channelsLoading){e.channelsLoading=!0,e.channelsError=null;try{const n=await e.client.request("channels.status",{probe:t,timeoutMs:8e3});e.channelsSnapshot=n,e.channelsLastSuccess=Date.now()}catch(n){e.channelsError=String(n)}finally{e.channelsLoading=!1}}}async function Sd(e,t){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{const n=await e.client.request("web.login.start",{force:t,timeoutMs:3e4});e.whatsappLoginMessage=n.message??null,e.whatsappLoginQrDataUrl=n.qrDataUrl??null,e.whatsappLoginConnected=null}catch(n){e.whatsappLoginMessage=String(n),e.whatsappLoginQrDataUrl=null,e.whatsappLoginConnected=null}finally{e.whatsappBusy=!1}}}async function Cd(e){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{const t=await e.client.request("web.login.wait",{timeoutMs:12e4});e.whatsappLoginMessage=t.message??null,e.whatsappLoginConnected=t.connected??null,t.connected&&(e.whatsappLoginQrDataUrl=null)}catch(t){e.whatsappLoginMessage=String(t),e.whatsappLoginConnected=null}finally{e.whatsappBusy=!1}}}async function Ad(e){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{await e.client.request("channels.logout",{channel:"whatsapp"}),e.whatsappLoginMessage="Logged out.",e.whatsappLoginQrDataUrl=null,e.whatsappLoginConnected=null}catch(t){e.whatsappLoginMessage=String(t)}finally{e.whatsappBusy=!1}}}function Z(e){return typeof structuredClone=="function"?structuredClone(e):JSON.parse(JSON.stringify(e))}function Kt(e){return`${JSON.stringify(e,null,2).trimEnd()}
`}function vs(e,t,n){if(t.length===0)return;let s=e;for(let o=0;o<t.length-1;o+=1){const l=t[o],c=t[o+1];if(typeof l=="number"){if(!Array.isArray(s))return;s[l]==null&&(s[l]=typeof c=="number"?[]:{}),s=s[l]}else{if(typeof s!="object"||s==null)return;const u=s;u[l]==null&&(u[l]=typeof c=="number"?[]:{}),s=u[l]}}const a=t[t.length-1];if(typeof a=="number"){Array.isArray(s)&&(s[a]=n);return}typeof s=="object"&&s!=null&&(s[a]=n)}function er(e,t){if(t.length===0)return;let n=e;for(let a=0;a<t.length-1;a+=1){const o=t[a];if(typeof o=="number"){if(!Array.isArray(n))return;n=n[o]}else{if(typeof n!="object"||n==null)return;n=n[o]}if(n==null)return}const s=t[t.length-1];if(typeof s=="number"){Array.isArray(n)&&n.splice(s,1);return}typeof n=="object"&&n!=null&&delete n[s]}async function J(e){if(!(!e.client||!e.connected)){e.configLoading=!0,e.lastError=null;try{const t=await e.client.request("config.get",{});Ed(e,t)}catch(t){e.lastError=String(t)}finally{e.configLoading=!1}}}async function ja(e){if(!(!e.client||!e.connected)&&!e.configSchemaLoading){e.configSchemaLoading=!0;try{const t=await e.client.request("config.schema",{});Md(e,t)}catch(t){e.lastError=String(t)}finally{e.configSchemaLoading=!1}}}function Md(e,t){e.configSchema=t.schema??null,e.configUiHints=t.uiHints??{},e.configSchemaVersion=t.version??null}function Ed(e,t){e.configSnapshot=t;const n=typeof t.raw=="string"?t.raw:t.config&&typeof t.config=="object"?Kt(t.config):e.configRaw;!e.configFormDirty||e.configFormMode==="raw"?e.configRaw=n:e.configForm?e.configRaw=Kt(e.configForm):e.configRaw=n,e.configValid=typeof t.valid=="boolean"?t.valid:null,e.configIssues=Array.isArray(t.issues)?t.issues:[],e.configFormDirty||(e.configForm=Z(t.config??{}),e.configFormOriginal=Z(t.config??{}),e.configRawOriginal=n)}async function Ae(e,t){if(!(!e.client||!e.connected)){e.configSaving=!0,e.lastError=null;try{const n=JSON.stringify(t);let s=e.configSnapshot?.hash;if(s||(await J(e),s=e.configSnapshot?.hash),!s){e.lastError="Config hash missing; reload and retry.";return}await e.client.request("config.patch",{raw:n,baseHash:s}),e.configFormDirty=!1,await J(e)}catch(n){e.lastError=String(n)}finally{e.configSaving=!1}}}async function fa(e){if(!(!e.client||!e.connected)){e.configSaving=!0,e.lastError=null;try{const t=e.configFormMode==="form"&&e.configForm?Kt(e.configForm):e.configRaw;let n=e.configSnapshot?.hash;if(n||(await J(e),n=e.configSnapshot?.hash),!n){e.lastError="Config hash missing; reload and retry.";return}await e.client.request("config.set",{raw:t,baseHash:n}),e.configFormDirty=!1,await J(e)}catch(t){e.lastError=String(t)}finally{e.configSaving=!1}}}async function Td(e){if(!(!e.client||!e.connected)){e.configApplying=!0,e.lastError=null;try{const t=e.configFormMode==="form"&&e.configForm?Kt(e.configForm):e.configRaw;let n=e.configSnapshot?.hash;if(n||(await J(e),n=e.configSnapshot?.hash),!n){e.lastError="Config hash missing; reload and retry.";return}await e.client.request("config.apply",{raw:t,baseHash:n,sessionKey:e.applySessionKey}),e.configFormDirty=!1,await J(e)}catch(t){e.lastError=String(t)}finally{e.configApplying=!1}}}async function Pd(e){if(!(!e.client||!e.connected)){e.updateRunning=!0,e.lastError=null;try{await e.client.request("update.run",{sessionKey:e.applySessionKey})}catch(t){e.lastError=String(t)}finally{e.updateRunning=!1}}}function Ve(e,t,n){const s=Z(e.configForm??e.configSnapshot?.config??{});vs(s,t,n),e.configForm=s,e.configFormDirty=!0,e.configFormMode==="form"&&(e.configRaw=Kt(s))}function ci(e,t){const n=Z(e.configForm??e.configSnapshot?.config??{});er(n,t),e.configForm=n,e.configFormDirty=!0,e.configFormMode==="form"&&(e.configRaw=Kt(n))}function Qa(){return typeof document>"u"?"en":(document.documentElement?.lang?.toLowerCase()??"").startsWith("zh")?"zh":"en"}const _d={tabGroupChat:"Chat",tabGroupControl:"Control",tabGroupAgent:"Agent",tabGroupSettings:"Settings",subtitleAgents:"Manage agent workspaces, tools, and identities.",subtitleOverview:"Gateway status, entry points, and a fast health read.",subtitleChannels:"Manage channels and settings.",subtitleInstances:"Presence beacons from connected clients and nodes.",subtitleSessions:"Inspect active sessions and adjust per-session defaults.",subtitleUsage:"",subtitleCron:"Schedule wakeups and recurring agent runs.",subtitleSkills:"Manage skill availability and API key injection.",subtitleMcp:"Configure MCP servers and tools.",subtitleNodes:"Paired devices, capabilities, and command exposure.",subtitleChat:"Direct gateway chat session for quick interventions.",subtitleDigitalEmployee:"Start templated conversations with domain-specific digital employees.",subtitleAgentSwarm:"Multi-agent swarm collaboration for ops and SRE.",subtitleConfig:"Edit ~/.openclaw/openclaw.json safely.",subtitleEnvVars:"Key-value env vars saved to config.env.vars in ~/.openocta/openocta.json.",subtitleModels:"Configure model providers and API keys.",subtitleDebug:"Gateway snapshots, events, and manual RPC calls.",subtitleLogs:"Live tail of the gateway file logs.",subtitleLlmTrace:"View LLM trace details for sessions.",subtitleSandbox:"Sandbox, command validation, and approval queue.",subtitleApprovals:"Command approval queue; approve or deny by session.",navTitleAgents:"Agents",navTitleOverview:"Overview",navTitleChannels:"Channels",navTitleInstances:"Instances",navTitleSessions:"Sessions",navTitleUsage:"Usage",navTitleCron:"Cron Jobs",navTitleSkills:"Skills",navTitleMcp:"MCP",navTitleNodes:"Nodes",navTitleChat:"Chat",navTitleDigitalEmployee:"Digital Employee",navTitleAgentSwarm:"Agent Swarm",agentSwarmDevBadge:"In Development",navTitleConfig:"Config",navTitleEnvVars:"Env Vars",navTitleModels:"Models",navTitleDebug:"Debug",navTitleLogs:"Logs",navTitleLlmTrace:"LLM Trace",navTitleSandbox:"Security Policy",navTitleApprovals:"Approvals",navTitleControl:"Control",overviewGatewayAccess:"Gateway Access",overviewGatewayAccessSub:"Where the dashboard connects and how it authenticates.",overviewWebSocketUrl:"WebSocket URL",overviewGatewayHost:"Backend Address (IP:Port)",overviewGatewayToken:"Gateway Token",overviewPassword:"Password (not stored)",overviewDefaultSessionKey:"Default Session Key",overviewConnect:"Connect",overviewRefresh:"Refresh",overviewConnectHint:"Click Connect to apply connection changes.",overviewSnapshot:"Snapshot",overviewSnapshotSub:"Latest gateway handshake information.",overviewStatus:"Status",overviewConnected:"Connected",overviewDisconnected:"Disconnected",overviewUptime:"Uptime",overviewTickInterval:"Tick Interval",overviewLastChannelsRefresh:"Last Channels Refresh",overviewChannelsHint:"Use Channels to link WhatsApp, Telegram, Discord, Signal, or iMessage.",overviewInstances:"Instances",overviewInstancesSub:"Presence beacons in the last 5 minutes.",overviewSessions:"Sessions",overviewSessionsSub:"Recent session keys tracked by the gateway.",overviewCron:"Cron",overviewCronNext:"Next wake",overviewCronEnabled:"Enabled",overviewCronDisabled:"Disabled",overviewNotes:"Notes",overviewNotesSub:"Quick reminders for remote control setups.",overviewNoteTailscale:"Tailscale serve",overviewNoteTailscaleSub:"Prefer serve mode to keep the gateway on loopback with tailnet auth.",overviewNoteSessionHygiene:"Session hygiene",overviewNoteSessionHygieneSub:"Use /new or sessions.patch to reset context.",overviewNoteCron:"Cron reminders",overviewNoteCronSub:"Use isolated sessions for recurring runs.",commonLoading:"Loading…",commonRefresh:"Refresh",commonRefreshing:"Refreshing…",commonSaving:"Saving…",commonDelete:"Delete",commonFilter:"Filter",commonOptional:"(optional)",commonInherit:"inherit",commonOffExplicit:"off (explicit)",commonNA:"n/a",commonYes:"Yes",commonNo:"No",channelsConfigure:"Configure",mcpAddServer:"Add MCP Server",mcpServerName:"Server name",mcpNoServers:"No MCP servers configured.",mcpEnabled:"Enabled",mcpDisabled:"Disabled",mcpFormMode:"Form",mcpRawMode:"Raw JSON",mcpCommand:"Command",mcpArgs:"Args",mcpUrl:"URL",mcpService:"Service",mcpServiceUrl:"Service URL",mcpToolPrefix:"Tool Prefix",mcpRawJson:"Raw JSON",mcpDeleteConfirm:"Delete this MCP server?",mcpConnectionTypeStdio:"Command (stdio)",mcpConnectionTypeUrl:"URL",mcpConnectionTypeService:"Service",mcpEnv:"Environment variables",mcpEnvPlaceholder:"KEY=value or $ENV_VAR, one per line",mcpViewList:"List view",mcpViewCard:"Card view",mcpTableName:"Name",mcpTableType:"Type",mcpTableStatus:"Status",mcpTableActions:"Actions",llmTraceSearch:"Search",llmTraceSearchPlaceholder:"Filter by session key…",llmTraceEnabled:"Enabled",llmTraceDisabled:"Disabled",llmTraceActionEnable:"Enable",llmTraceActionDisable:"Disable",llmTraceToggleTooltip:"When enabled, new sessions will record model call Trace details (may impact performance). When disabled, new Trace details will not be recorded.",llmTraceModeActive:"Active",llmTraceModeAll:"All",llmTraceSessionKey:"Session Key",llmTraceSessionId:"Session ID",llmTraceUpdatedAt:"Updated",llmTraceFile:"File",llmTraceFileSize:"Size",llmTraceView:"View",llmTraceBack:"Back",llmTraceDownload:"Download",llmTraceNoEntries:"No trace entries.",sandboxEnabled:"Enabled",sandboxDisabled:"Disabled",sandboxActionEnable:"Enable",sandboxActionDisable:"Disable",sandboxAllowedPaths:"Allowed paths",sandboxNetworkAllow:"Network allowlist",sandboxHooks:"Security hooks",sandboxHookBeforeAgent:"BeforeAgent",sandboxHookBeforeModel:"BeforeModel",sandboxHookAfterModel:"AfterModel",sandboxHookBeforeTool:"BeforeTool",sandboxHookAfterTool:"AfterTool",sandboxHookAfterAgent:"AfterAgent",sandboxHookDescBeforeAgent:"Request validation: session abuse (DoS), long prompts, malicious IPs",sandboxHookDescBeforeModel:"Prompt safety: prompt injection, sensitive data leakage, control chars",sandboxHookDescAfterModel:"Output review: dangerous commands, secret leakage, malicious URLs",sandboxHookDescBeforeTool:"Permission check: tool permission, param validation, path validation",sandboxHookDescAfterTool:"Result review: secret leakage, error sanitization, output truncation",sandboxHookDescAfterAgent:"Audit logging, compliance checks",sandboxValidator:"Command validator",sandboxResourceLimit:"Resource limits",sandboxMaxCPUPercent:"Max CPU %",sandboxMaxMemoryBytes:"Max memory",sandboxMaxDiskBytes:"Max disk",sandboxSecretPatterns:"Secret leakage patterns (regex)",sandboxSecretPatternsHint:"One regex per line. Built-in patterns (API keys, tokens, etc.) are also applied.",sandboxBanCommands:"Ban commands",sandboxBanArguments:"Ban arguments",sandboxBanFragments:"Keyword fuse",sandboxSectionConfig:"Sandbox config",sandboxSectionApprovals:"Approval queue",securitySectionSandbox:"Environment boundary",securitySectionValidator:"命令校验",securitySectionApprovalQueue:"Approval Queue",securitySectionSandboxDesc:"Filesystem + network allowlist and optional resource limits.",securitySectionValidatorDesc:"Command validation rules (ban commands/args/fragments, length limits).",securitySectionApprovalQueueDesc:"Human-in-the-loop approvals for sensitive tool calls; supports session whitelist TTL.",securityApprovalQueueEnabled:"Enable approval queue",securityApprovalTimeoutSeconds:"Approval timeout (seconds)",securityApprovalTimeoutSecondsHint:"Pending approvals become expired after this time (best-effort; used by UI and gateway).",securityApprovalAllow:"Auto-allow commands",securityApprovalAllowHint:"Commands that bypass approval (one per line). Supports glob patterns like 'ls', 'pwd', 'echo *'.",securityApprovalAsk:"Require approval for",securityApprovalAskHint:"Commands that require approval (one per line). Supports glob patterns like 'rm', 'mv *', 'cp *'.",securityApprovalDeny:"Denied commands",securityApprovalDenyHint:"Commands that are always denied (one per line). Supports glob patterns like 'sudo', 'dd', 'mkfs *'.",securityApprovalBlockOnApproval:"Block on approval",securityApprovalBlockOnApprovalHint:"When enabled, the conversation will be blocked until the command is approved. When disabled, an error is returned immediately and the conversation ends.",approvalsList:"Approval queue",approvalsId:"ID",approvalsSessionKey:"Session Key",approvalsSessionId:"Session ID",approvalsCommand:"Command",approvalsTimeout:"Timeout",approvalsTTL:"TTL",approvalsStatus:"Status",approvalsApprove:"Approve",approvalsApproveOnce:"Approve once",approvalsWhitelist:"Whitelist",approvalsWhitelistSession:"Whitelist session",approvalsDeny:"Deny",approvalsExpired:"Expired",approvalsPending:"Pending",approvalsNoEntries:"No approval requests.",approvalsProcessed:"Processed",securityOverviewTitle:"Current status",securityOverviewPreset:"Preset",securityOverviewSandbox:"Environment",securityOverviewCommandPolicy:"Command policy",securityOverviewPendingApprovals:"Pending approvals",securityPresetsTitle:"Quick presets",securityPresetsHint:"One-click apply, overrides current config. See table for scenarios.",securityPresetOff:"All off",securityPresetLoose:"Loose",securityPresetStandard:"Standard",securityPresetStrict:"Strict",securityPresetOffDesc:"Disable all security: sandbox, command policy, and approval queue. Use for quick local testing only.",securityPresetLooseDesc:"Sandbox on, wide paths/network. Only blocks extreme danger (sudo, rm -rf, dd, mkfs). Default: allow. No approval. Best for: local dev, debugging.",securityPresetStandardDesc:"Sandbox on, moderate paths/network. Deny + some require approval (rm, mv, cp). Default: ask. Approval on. Best for: daily use, staging.",securityPresetStrictDesc:"Sandbox on, tight paths/network. Deny + many require approval. Default: deny. Approval on, blocking. Best for: production, compliance.",securitySectionCommandPolicy:"Command policy",securitySectionCommandPolicyDesc:"Unified rules: deny → ask → allow. Unmatched commands use default policy.",securityDefaultPolicy:"Default policy (when no rule matches)",securityDefaultDeny:"Deny",securityDefaultAsk:"Ask",securityDefaultAllow:"Allow",securityRulesList:"Rules",securityRuleAction:"Action",securityRulePattern:"Pattern",securityRuleType:"Type",securityActionDeny:"Deny",securityActionAsk:"Ask",securityActionAllow:"Allow",securityAddRule:"Add rule",securityAdvancedOptions:"Advanced: ban arguments, max length, secret patterns",securityMaxLength:"Max command length",securityResourceCustom:"Custom",securityRulesHint:"One pattern per line. For deny: single word = command (e.g. sudo), with space = fragment (e.g. rm -rf).",securityRulesDenyHint:"Commands/fragments to always deny. Single word = command, multi-word = fragment.",securityRulesAskHint:"Commands that require approval before execution.",securityRulesAllowHint:"Commands that bypass approval (auto-approved).",approvalsViewSession:"View session",approvalsSectionApproved:"Approved",approvalsSectionDenied:"Denied",approvalsSectionWhitelisted:"Session whitelisted",approvalsExpiresIn:"Expires in",approvalsExpiresAt:"Expires at",approvalsTtlPermanent:"Permanent",approvalsReason:"Reason",modelsViewList:"List view",modelsViewCard:"Card view",modelsTableName:"Name",modelsTableModel:"Default Model",modelsTableBaseUrl:"Base URL",modelsTableActions:"Actions",modelsAddProvider:"Add Provider",modelsAddCustomProvider:"Add Custom Provider",modelsProviderId:"Provider ID",modelsProviderIdPlaceholder:"e.g. openai, google, anthropic",modelsProviderIdHint:"Lowercase letters, digits, hyphens, underscores. Cannot be changed later.",modelsDisplayName:"Display Name",modelsDisplayNamePlaceholder:"e.g. OpenAI, Google Gemini",modelsDefaultBaseUrl:"Default Base URL",modelsDefaultBaseUrlPlaceholder:"e.g. https://api.openai.com/v1",modelsApiKeyPrefix:"API Key Prefix (optional)",modelsApiKeyPrefixPlaceholder:"e.g. sk-",modelsApiType:"API Type",modelsApiTypeTooltip:"OpenAI: Compatible with OpenAI Chat Completions API. Anthropic: Compatible with Anthropic Messages API.",modelsApiTypeOpenAI:"OpenAI (openai-completions)",modelsApiTypeAnthropic:"Anthropic (anthropic-messages)",modelsEnvVars:"Environment Variables",modelsAddModel:"Add Model",modelsModelId:"Model ID",modelsModelName:"Model Name",modelsModelManagement:"Model Management",modelsNoModels:"No models yet. Click Add Model to add one.",modelsEnvVarConflict:"Environment variable conflict",modelsNoProviders:"No model providers configured.",modelsModels:"models",modelsBaseUrl:"Base URL",modelsApiKey:"API Key",modelsUseAsDefault:"Use",modelsCancelUse:"Cancel use",modelsSelectModelToUse:"Select model to use",modelsCurrentDefault:"Current default",channelsHealth:"Channel health",channelsHealthSub:"Channel status snapshots from the gateway.",channelsNoSnapshot:"No snapshot yet.",channelsSchemaUnavailable:"Schema unavailable. Use Raw.",channelsConfigSchemaUnavailable:"Channel config schema unavailable.",channelsConfigSaveConfirm:"Saving channel config will interrupt and recreate long-lived connections. Continue?",channelsLoadingConfigSchema:"Loading config schema…",commonSave:"Save",commonCreate:"Create",commonReload:"Reload",commonCancel:"Cancel",channelConfigured:"Configured",channelRunning:"Running",channelLastStart:"Last start",channelLastProbe:"Last probe",channelProbe:"Probe",channelProbeOk:"ok",channelProbeFailed:"failed",channelLinked:"Linked",channelConnected:"Connected",channelLastConnect:"Last connect",channelLastMessage:"Last message",channelAuthAge:"Auth age",channelBaseUrl:"Base URL",channelCredential:"Credential",channelAudience:"Audience",channelMode:"Mode",channelPublicKey:"Public Key",channelLastInbound:"Last inbound",channelActive:"Active",channelGenericSub:"Channel status and configuration.",channelAccounts:"Accounts",channelWhatsApp:"WhatsApp",channelWhatsAppSub:"Link WhatsApp Web and monitor connection health.",channelTelegram:"Telegram",channelTelegramSub:"Bot status and channel configuration.",channelDiscord:"Discord",channelDiscordSub:"Bot status and channel configuration.",channelGoogleChat:"Google Chat",channelGoogleChatSub:"Chat API webhook status and channel configuration.",channelIMessage:"iMessage",channelIMessageSub:"macOS bridge status and channel configuration.",channelSignal:"Signal",channelSignalSub:"signal-cli status and channel configuration.",channelSlack:"Slack",channelSlackSub:"Socket mode status and channel configuration.",channelNostr:"Nostr",channelNostrSub:"Decentralized DMs via Nostr relays (NIP-04).",channelWhatsAppWorking:"Working…",channelShowQr:"Show QR",channelRelink:"Relink",channelWaitForScan:"Wait for scan",channelLogout:"Logout",channelWeWork:"WeCom Bot",channelWeWorkSub:"Enterprise WeChat intelligent bot via WebSocket (aibot). Scan to create a bot or paste Bot ID and Secret.",channelWeWorkTransport:"Transport",channelWeWorkBotId:"Bot ID (masked)",channelWeWorkQrStart:"Scan to create bot",channelWeWorkQrWorking:"Working…",channelWeWorkQrStartFailed:"Could not start QR session (missing scode).",channelWeWorkOpenGenPage:"Open scan page",channelWeWorkQrModalTitle:"WeCom bot — scan to create",channelWeWorkQrReplaceWarn:"This gateway already has WeCom bot credentials. Creating again will replace Bot ID and Secret in the form (save to apply).",channelWeWorkQrPreparing:"Preparing QR session…",channelWeWorkQrWaiting:"Waiting for you to finish in WeCom…",channelWeWorkQrSuccessClosing:"Credentials saved. The gateway is reconnecting WebSocket. This dialog will close shortly.",channelWeWorkQrSaveMissingForm:"Could not read channels.wework from the form after scan.",channelWeWorkQrModalCancel:"Cancel",nostrEditProfile:"Edit Profile",nostrAccount:"Account",nostrUsername:"Username",nostrDisplayName:"Display Name",nostrBio:"Bio",nostrAvatarUrl:"Avatar URL",nostrBannerUrl:"Banner URL",nostrWebsite:"Website",nostrNip05:"NIP-05 Identifier",nostrLud16:"Lightning Address",nostrSavePublish:"Save & Publish",nostrImportRelays:"Import from Relays",nostrHideAdvanced:"Hide Advanced",nostrShowAdvanced:"Show Advanced",nostrUnsavedChanges:"You have unsaved changes",nostrProfilePreview:"Profile picture preview",nostrAdvanced:"Advanced",nostrImporting:"Importing…",nostrNoProfileSet:'No profile set. Click "Edit Profile" to add your name, bio, and avatar.',nostrProfile:"Profile",nostrAbout:"About",nostrName:"Name",instancesTitle:"Connected Instances",instancesSub:"Presence beacons from the gateway and clients.",instancesNoReported:"No instances reported yet.",instancesUnknownHost:"unknown host",instancesLastInput:"Last input",instancesReason:"Reason",instancesScopes:"scopes",sessionsTitle:"Sessions",sessionsSub:"Active session keys and per-session overrides.",sessionsActiveWithin:"Active within (minutes)",sessionsLimit:"Limit",sessionsIncludeGlobal:"Include global",sessionsIncludeUnknown:"Include unknown",sessionsStore:"Store",sessionsKey:"Key",sessionsLabel:"Label",sessionsKind:"Kind",sessionsUpdated:"Updated",sessionsTokens:"Tokens",sessionsThinking:"Thinking",sessionsVerbose:"Verbose",sessionsReasoning:"Reasoning",sessionsActions:"Actions",sessionsNoFound:"No sessions found.",usageNoTimeline:"No timeline data yet.",usageNoData:"No data",usageHours:"Hours",usageMidnight:"Midnight",usage4am:"4am",usage8am:"8am",usageNoon:"Noon",usage4pm:"4pm",usage8pm:"8pm",usageDailyToken:"Daily Token Usage",usageDailyCost:"Daily Cost Usage",usageOutput:"Output",usageInput:"Input",usageCacheWrite:"Cache Write",usageCacheRead:"Cache Read",usageClearFilters:"Clear filters",usageRemoveFilter:"Remove filter",usageDays:"Days",usageHoursLabel:"Hours",usageSession:"Session",usageFiltered:"filtered",usageVisible:"visible",usageExport:"Export",usageActivityByTime:"Activity by Time",usageMosaicSubNoData:"Estimates require session timestamps.",usageTokensUnit:"tokens",usageTimeZoneLocal:"Local",usageTimeZoneUtc:"UTC",usageDayOfWeek:"Day of Week",usageDailyUsage:"Daily Usage",usageTotal:"Total",usageByType:"By Type",usageTokensByType:"Tokens by Type",usageCostByType:"Cost by Type",usageTotalLabel:"Total",usageOverview:"Usage Overview",usageMessages:"Messages",usageToolCalls:"Tool Calls",usageErrors:"Errors",usageAvgTokensMsg:"Avg Tokens / Msg",usageAvgCostMsg:"Avg Cost / Msg",usageSessionsCard:"Sessions",usageThroughput:"Throughput",usageErrorRate:"Error Rate",usageCacheHitRate:"Cache Hit Rate",usageMessagesHint:"Total user + assistant messages in range.",usageToolCallsHint:"Total tool call count across sessions.",usageErrorsHint:"Total message/tool errors in range.",usageAvgTokensMsgHint:"Average tokens per message in this range.",usageSessionsHint:"Distinct sessions in the range.",usageThroughputHint:"Throughput shows tokens per minute over active time. Higher is better.",usageErrorRateHint:"Error rate = errors / total messages. Lower is better.",usageCacheHitRateHint:"Cache hit rate = cache read / (input + cache read). Higher is better.",usageTopModels:"Top Models",usageTopProviders:"Top Providers",usageTopTools:"Top Tools",usageTopAgents:"Top Agents",usageTopChannels:"Top Channels",usagePeakErrorDays:"Peak Error Days",usagePeakErrorHours:"Peak Error Hours",usageNoModelData:"No model data",usageNoProviderData:"No provider data",usageNoToolCalls:"No tool calls",usageNoAgentData:"No agent data",usageNoChannelData:"No channel data",usageNoErrorData:"No error data",usageShown:"shown",usageTotalSessions:"total",usageAvg:"avg",usageAll:"All",usageRecentlyViewed:"Recently viewed",usageSort:"Sort",usageCost:"Cost",usageErrorsCol:"Errors",usageMessagesCol:"Messages",usageRecent:"Recent",usageTokensCol:"Tokens",usageDescending:"Descending",usageAscending:"Ascending",usageClearSelection:"Clear Selection",usageNoRecentSessions:"No recent sessions",usageNoSessionsInRange:"No sessions in range",usageCopy:"Copy",usageCopySessionName:"Copy session name",usageSelectedCount:"Selected",usageMoreSessions:"more",usageUserAssistant:"user · assistant",usageToolsUsed:"tools used",usageToolResults:"tool results",usageAcrossMessages:"Across messages",usageInRange:"in range",usageCached:"cached",usagePrompt:"prompt",usageCacheHint:"Cache hit rate = cache read / (input + cache read). Higher is better.",usageErrorHint:"Error rate = errors / total messages. Lower is better.",usageTokensHint:"Average tokens per message in this range.",usageCostHint:"Average cost per message when providers report costs.",usageCostHintMissing:"Average cost per message when providers report costs. Cost data is missing for some or all sessions in this range.",usageModelMix:"Model Mix",usageDuration:"Duration",usageCloseSessionDetails:"Close session details",usageLoading:"Loading…",usageNoTimelineData:"No timeline data",usageNoDataInRange:"No data in range",usageUsageOverTime:"Usage Over Time",usagePerTurn:"Per Turn",usageCumulative:"Cumulative",usageNoContextData:"No context data",usageSystemPromptBreakdown:"System Prompt Breakdown",usageExpandAll:"Expand all",usageCollapseAll:"Collapse All",usageBaseContextPerMessage:"Base context per message",usageSys:"Sys",usageSkills:"Skills",usageToolsLabel:"Tools",usageFiles:"Files",usageConversation:"Conversation",usageNoMessages:"No messages",usageSearchConversation:"Search conversation",usageClear:"Clear",usageHasTools:"Has tools",usageUser:"User",usageAssistant:"Assistant",usageTool:"Tool",usageToolResult:"Tool result",usageMessagesCount:"messages",usageNoMessagesMatchFilters:"No messages match the filters.",usageTokenUsage:"Token Usage",usageToday:"Today",usage7d:"7d",usage30d:"30d",usageExportSessionsCsv:"Sessions (CSV)",usageExportDailyCsv:"Daily (CSV)",usageSessionsCount:"sessions",usageQueryHintMatch:"{count} of {total} sessions match",usageQueryHintInRange:"{total} sessions in range",usagePageSubtitle:"See where tokens go, when sessions spike, and what drives cost.",usageCalls:"calls",cronScheduler:"Scheduler",cronSchedulerSub:"Gateway-owned cron scheduler status.",cronEnabled:"Enabled",cronJobs:"Jobs",cronNewJob:"New Job",cronNewJobSub:"Create a scheduled wakeup or agent run.",cronName:"Name",cronDescription:"Description",cronAgentId:"Agent ID",cronSchedule:"Schedule",cronEvery:"Every",cronAt:"At",cronCron:"Cron",cronSession:"Session",cronMain:"Main",cronIsolated:"Isolated",cronWakeMode:"Wake mode",cronNextHeartbeat:"Next heartbeat",cronNow:"Now",cronPayload:"Payload",cronSystemEvent:"System event",cronAgentTurn:"Agent turn",cronSystemText:"System text",cronAgentMessage:"Agent message",cronDelivery:"Delivery",cronAnnounceSummary:"Announce summary (default)",cronNoneInternal:"None (internal)",cronChannel:"Channel",cronTo:"To",cronAddJob:"Add job",cronJobsTitle:"Jobs",cronJobsSub:"All scheduled jobs stored in the gateway.",cronNoJobsYet:"No jobs yet.",cronRunHistory:"Run history",cronRunHistorySub:"Latest runs for",cronSelectJob:"(select a job)",cronNoRunsYet:"No runs yet.",cronSelectJobToInspect:"Select a job to inspect run history.",cronRunAt:"Run at",cronUnit:"Unit",cronMinutes:"Minutes",cronHours:"Hours",cronDays:"Days",cronExpression:"Expression",cronTimeoutSeconds:"Timeout (seconds)",cronLast:"last",agentsFiles:"Files",agentsRuntime:"Runtime",agentsWeb:"Web",agentsMemory:"Memory",agentsSessions:"Sessions",agentsUi:"UI",agentsMessaging:"Messaging",agentsAutomation:"Automation",agentsReadFile:"Read file contents",agentsWriteFile:"Create or overwrite files",agentsEdit:"Make precise edits",agentsApplyPatch:"Patch files (OpenAI)",agentsExec:"Run shell commands",agentsProcess:"Manage background processes",agentsWebSearch:"Search the web",agentsWebFetch:"Fetch web content",agentsMemorySearch:"Semantic search",agentsMemoryGet:"Read memory files",agentsSessionsList:"List sessions",agentsSessionsHistory:"Session history",agentsSessionsSend:"Send to session",agentsSessionsSpawn:"Spawn sub-agent",agentsSessionStatus:"Session status",agentsBrowser:"Control web browser",agentsCanvas:"Control canvases",agentsMessage:"Send messages",agentsScheduleTasks:"Schedule tasks",agentsGatewayControl:"Gateway control",agentsNodesDevices:"Nodes + devices",agentsListAgents:"List agents",agentsImageUnderstanding:"Image understanding",agentsNodes:"Nodes",agentsAgents:"Agents",agentsMedia:"Media",agentsTitle:"Agents",agentsConfigured:"configured.",agentsNoFound:"No agents found.",agentsSelectAgent:"Select an agent",agentsSelectAgentSub:"Pick an agent to inspect its workspace and tools.",agentsWorkspaceRouting:"Agent workspace and routing.",agentsProfileMinimal:"Minimal",agentsProfileCoding:"Coding",agentsProfileMessaging:"Messaging",agentsProfileFull:"Full",agentsDefault:"default",agentsSelected:"selected",agentsAllSkills:"all skills",agentsCurrentModel:"Current",agentsInheritDefault:"Inherit default",agentsOverview:"Overview",agentsOverviewSub:"Workspace paths and identity metadata.",agentsWorkspace:"Workspace",agentsPrimaryModel:"Primary Model",agentsIdentityName:"Identity Name",agentsDefaultLabel:"Default",agentsIdentityEmoji:"Identity Emoji",agentsSkillsFilter:"Skills Filter",agentsModelSelection:"Model Selection",agentsPrimaryModelLabel:"Primary model",agentsPrimaryModelDefault:"(default)",agentsFallbacksLabel:"Fallbacks (comma-separated)",agentsReloadConfig:"Reload Config",agentsAgentContext:"Agent Context",agentsContextWorkspaceIdentity:"Workspace, identity, and model configuration.",agentsContextWorkspaceScheduling:"Workspace and scheduling targets.",agentsChannels:"Channels",agentsChannelsSub:"Gateway-wide channel status snapshot.",agentsLoadChannels:"Load channels to see live status.",agentsNoChannels:"No channels found.",agentsConnected:"connected",agentsConfiguredLabel:"configured",agentsEnabled:"enabled",agentsDisabled:"disabled",agentsNoAccounts:"no accounts",agentsNotConfigured:"not configured",agentsScheduler:"Scheduler",agentsSchedulerSub:"Gateway cron status.",agentsNextWake:"Next wake",agentsCronJobs:"Agent Cron Jobs",agentsCronJobsSub:"Scheduled jobs targeting this agent.",agentsNoJobsAssigned:"No jobs assigned.",agentsCoreFiles:"Core Files",agentsCoreFilesSub:"Bootstrap persona, identity, and tool guidance.",agentsLoadWorkspaceFiles:"Load the agent workspace files to edit core instructions.",agentsNoFilesFound:"No files found.",agentsSelectFileToEdit:"Select a file to edit.",agentsReset:"Reset",agentsFileMissingCreate:"This file is missing. Saving will create it in the agent workspace.",agentsUnavailable:"Unavailable",agentsTabOverview:"Overview",agentsTabFiles:"Files",agentsTabTools:"Tools",agentsTabSkills:"Skills",agentsTabChannels:"Channels",agentsTabCron:"Cron Jobs",agentsFallback:"fallback",agentsNever:"never",agentsLastRefresh:"Last refresh",agentsSkillsPanelSub:"Per-agent skill allowlist and workspace skills.",agentsUseAll:"Use All",agentsDisableAll:"Disable All",agentsLoadConfigForSkills:"Load the gateway config to set per-agent skills.",agentsCustomAllowlist:"This agent uses a custom skill allowlist.",agentsAllSkillsEnabled:"All skills are enabled. Disabling any skill will create a per-agent allowlist.",agentsLoadSkillsForAgent:"Load skills for this agent to view workspace-specific entries.",agentsFilter:"Filter",agentsNoSkillsFound:"No skills found.",agentsToolsGlobalAllow:"Global tools.allow is set. Agent overrides cannot enable tools that are globally blocked.",agentsProfile:"Profile",agentsSource:"Source",agentsStatus:"Status",agentsUnsaved:"unsaved",agentsQuickPresets:"Quick Presets",agentsInherit:"Inherit",agentsToolsTitle:"Tools",agentsToolsSub:"Per-agent tool profile and overrides.",agentsToolAccess:"Tool Access",agentsToolsSubText:"Profile + per-tool overrides for this agent.",agentsLoadConfigForTools:"Load the gateway config to adjust tool profiles.",agentsExplicitAllowlist:"This agent is using an explicit allowlist in config. Tool overrides are managed in the Config tab.",agentsEnableAll:"Enable All",agentsEnabledCount:"enabled.",skillsTitle:"Skills",skillsSub:"Bundled, managed, and workspace skills.",skillsSearchPlaceholder:"Search skills",skillsShown:"shown",skillsWorkspace:"Workspace Skills",skillsBuiltIn:"Built-in Skills",skillsInstalled:"Installed Skills",skillsExtra:"Extra Skills",skillsOther:"Other Skills",skillsAdd:"Add",skillsAddSkill:"Add Skill",skillsUploadName:"Skill name (English)",skillsUploadNamePlaceholder:"e.g. my-skill",skillsUploadFile:"File",skillsUploadFileHint:"SKILL.md or .zip containing SKILL.md",skillsUploadSingleHint:"Single file must be SKILL.md",skillsUploadZipHint:"Zip must contain SKILL.md",skillsUploadSubmit:"Upload",skillsUploadSuccess:"Skill uploaded successfully",skillsDelete:"Delete",skillsDeleteConfirm:"Delete this skill?",skillsSource:"Source",skillsPath:"Path",skillsNoDoc:"No documentation available.",skillsEligible:"Eligible",skillsDisabled:"Disabled",skillsRequiresBins:"Requires bins",skillsRequiresEnv:"Requires env",skillsRequiresConfig:"Requires config",skillsMissing:"Missing",nodesTitle:"Nodes",nodesSub:"Paired devices and live links.",nodesNoFound:"No nodes found.",nodesDevices:"Devices",nodesDevicesSub:"Pairing requests + role tokens.",nodesPending:"Pending",nodesPaired:"Paired",nodesNoPairedDevices:"No paired devices.",nodesRoleLabel:"role: ",nodesRoleNone:"role: -",nodesRepairSuffix:" · repair",nodesRequested:"requested ",nodesApprove:"Approve",nodesReject:"Reject",nodesRolesLabel:"roles: ",nodesScopesLabel:"scopes: ",nodesTokensNone:"Tokens: none",nodesTokens:"Tokens",nodesTokenRevoked:"revoked",nodesTokenActive:"active",nodesRotate:"Rotate",nodesRevoke:"Revoke",nodesBindingTitle:"Exec node binding",nodesBindingSub:"Pin agents to a specific node when using ",nodesBindingFormModeHint:"Switch the Config tab to Form mode to edit bindings here.",nodesLoadConfigHint:"Load config to edit bindings.",nodesLoadConfig:"Load config",nodesDefaultBinding:"Default binding",nodesDefaultBindingSub:"Used when agents do not override a node binding.",nodesNodeLabel:"Node",nodesAnyNode:"Any node",nodesNoNodesSystemRun:"No nodes with system.run available.",nodesNoAgentsFound:"No agents found.",nodesExecApprovalsTitle:"Exec approvals",nodesExecApprovalsSub:"Allowlist and approval policy for exec host=gateway/node.",nodesLoadExecApprovalsHint:"Load exec approvals to edit allowlists.",nodesLoadApprovals:"Load approvals",nodesTarget:"Target",nodesTargetSub:"Gateway edits local approvals; node edits the selected node.",nodesHost:"Host",nodesHostGateway:"Gateway",nodesHostNode:"Node",nodesSelectNode:"Select node",nodesNoNodesExecApprovals:"No nodes advertise exec approvals yet.",nodesScope:"Scope",nodesDefaults:"Defaults",nodesSecurity:"Security",nodesSecurityDefaultSub:"Default security mode.",nodesSecurityAgentSubPrefix:"Default: ",nodesMode:"Mode",nodesUseDefaultPrefix:"Use default (",nodesUseDefaultButton:"Use default",nodesSecurityDeny:"Deny",nodesSecurityAllowlist:"Allowlist",nodesSecurityFull:"Full",nodesAsk:"Ask",nodesAskDefaultSub:"Default prompt policy.",nodesAskAgentSubPrefix:"Default: ",nodesAskOff:"Off",nodesAskOnMiss:"On miss",nodesAskAlways:"Always",nodesAskFallback:"Ask fallback",nodesAskFallbackDefaultSub:"Applied when the UI prompt is unavailable.",nodesAskFallbackAgentSubPrefix:"Default: ",nodesFallback:"Fallback",nodesAutoAllowSkills:"Auto-allow skill CLIs",nodesAutoAllowSkillsDefaultSub:"Allow skill executables listed by the Gateway.",nodesAutoAllowSkillsUsingDefault:"Using default (",nodesAutoAllowSkillsOverride:"Override (",nodesEnabled:"Enabled",nodesAllowlist:"Allowlist",nodesAllowlistSub:"Case-insensitive glob patterns.",nodesAddPattern:"Add pattern",nodesNoAllowlistEntries:"No allowlist entries yet.",nodesNewPattern:"New pattern",nodesLastUsedPrefix:"Last used: ",nodesPattern:"Pattern",nodesRemove:"Remove",nodesDefaultAgent:"default agent",nodesAgent:"agent",nodesUsesDefault:"uses default (",nodesOverride:"override: ",nodesBinding:"Binding",nodesChipPaired:"paired",nodesChipUnpaired:"unpaired",nodesConnected:"connected",nodesOffline:"offline",nodesNever:"never",configEnv:"Environment",configUpdate:"Updates",configAgents:"Agents",configAuth:"Authentication",configChannels:"Channels",configMessages:"Messages",configCommands:"Commands",configHooks:"Hooks",configSkills:"Skills",configTools:"Tools",configGateway:"Gateway",configWizard:"Setup Wizard",configMeta:"Metadata",configLogging:"Logging",configBrowser:"Browser",configUi:"UI",configModels:"Models",configBindings:"Bindings",configBroadcast:"Broadcast",configAudio:"Audio",configSession:"Session",configCron:"Cron",configWeb:"Web",configDiscovery:"Discovery",configCanvasHost:"Canvas Host",configTalk:"Talk",configPlugins:"Plugins",configEnvVars:"Environment Variables",configEnvVarsDesc:"Environment variables passed to the gateway process",configUpdatesDesc:"Auto-update settings and release channel",configAgentsDesc:"Agent configurations, models, and identities",configAuthDesc:"API keys and authentication profiles",configChannelsDesc:"Messaging channels (Telegram, Discord, Slack, etc.)",configMessagesDesc:"Message handling and routing settings",configCommandsDesc:"Custom slash commands",configHooksDesc:"Webhooks and event hooks",configSkillsDesc:"Skill packs and capabilities",configToolsDesc:"Tool configurations (browser, search, etc.)",configGatewayDesc:"Gateway server settings (port, auth, binding)",configWizardDesc:"Setup wizard state and history",configMetaDesc:"Gateway metadata and version information",configLoggingDesc:"Log levels and output configuration",configBrowserDesc:"Browser automation settings",configUiDesc:"User interface preferences",configModelsDesc:"AI model configurations and providers",configBindingsDesc:"Key bindings and shortcuts",configBroadcastDesc:"Broadcast and notification settings",configAudioDesc:"Audio input/output settings",configSessionDesc:"Session management and persistence",configCronDesc:"Scheduled tasks and automation",configWebDesc:"Web server and API settings",configDiscoveryDesc:"Service discovery and networking",configCanvasHostDesc:"Canvas rendering and display",configTalkDesc:"Voice and speech settings",configPluginsDesc:"Plugin management and extensions",configSettingsTitle:"Settings",configSearchPlaceholder:"Search settings…",configAllSettings:"All Settings",configForm:"Form",configRaw:"Raw",configUnsavedChanges:"Unsaved changes",configUnsavedChangesLabel:"unsaved changes",configOneUnsavedChange:"1 unsaved change",configNoChanges:"No changes",configApplying:"Applying…",configApply:"Apply",configUpdating:"Updating…",configUpdateButton:"Update",configViewPrefix:"View ",configPendingChange:"pending change",configPendingChanges:"pending changes",configLoadingSchema:"Loading schema…",configFormUnsafeWarning:"Form view can't safely edit some fields. Use Raw to avoid losing config entries.",configRawJson5:"Raw JSON5",configValidityValid:"valid",configValidityInvalid:"invalid",configValidityUnknown:"unknown",configSchemaUnavailable:"Schema unavailable.",configUnsupportedSchema:"Unsupported schema. Use Raw.",configNoSettingsMatchPrefix:'No settings match "',configNoSettingsMatchSuffix:'"',configNoSettingsInSection:"No settings in this section",configUnsupportedSchemaNode:"Unsupported schema node. Use Raw mode.",configSubnavAll:"All",envVarsSection:"Vars (env.vars)",envModelEnvSection:"Model Env (env.modelEnv)",envShellEnvSection:"Shell Env (env.shellEnv)",envVarsKey:"Key",envVarsValue:"Value",envVarsAdd:"Add",envVarsDelete:"Delete",envVarsSave:"Save",envVarsEmpty:"No environment variables. Click Add to create one.",envVarsKeyPlaceholder:"e.g. API_KEY",envVarsValuePlaceholder:"e.g. your-secret-value",debugSnapshots:"Snapshots",debugSnapshotsSub:"Status, health, and heartbeat data.",debugStatus:"Status",debugHealth:"Health",debugLastHeartbeat:"Last heartbeat",debugSecurityAudit:"Security audit",debugManualRpc:"Manual RPC",debugManualRpcSub:"Send a raw gateway method with JSON params.",debugMethod:"Method",debugParams:"Params",debugCall:"Call",debugCritical:"critical",debugWarnings:"warnings",debugNoCritical:"No critical issues",debugInfo:"info",debugSecurityAuditDetails:"Run openclaw security audit --deep for details.",debugModels:"Models",debugModelsSub:"Catalog from models.list.",debugEventLog:"Event Log",debugEventLogSub:"Latest gateway events.",debugNoEvents:"No events yet.",logsTitle:"Logs",logsSub:"Gateway file logs (JSONL).",logsExportFiltered:"Export filtered",logsExportVisible:"Export visible"},Ld={tabGroupChat:"聊天",tabGroupControl:"控制",tabGroupAgent:"Agent",tabGroupSettings:"设置",subtitleAgents:"管理代理工作区、工具与身份。",subtitleOverview:"网关状态、入口与健康概览。",subtitleChannels:"管理通道与设置。",subtitleInstances:"已连接客户端与节点的在线状态。",subtitleSessions:"查看活跃会话并调整每会话默认值。",subtitleUsage:"",subtitleCron:"安排唤醒与定时代理任务。",subtitleSkills:"管理技能可用性与 API 密钥注入。",subtitleMcp:"配置 MCP 服务器与工具。",subtitleNodes:"已配对设备、能力与命令。",subtitleChat:"直接与网关聊天进行快速操作。",subtitleDigitalEmployee:"按业务场景切换数字员工模版，一键开启新会话。",subtitleAgentSwarm:"多Agent集群协作，面向运维与 SRE。",subtitleConfig:"安全编辑 ~/.openocta/openocta.json。",subtitleEnvVars:"Key-Value 环境变量，保存至 ~/.openocta/openocta.json 的 env.vars。",subtitleModels:"配置模型厂商与 API 密钥。",subtitleDebug:"网关快照、事件与手动 RPC 调用。",subtitleLogs:"网关日志实时查看。",subtitleLlmTrace:"查看会话的 LLM trace 详情。",subtitleSandbox:"Sandbox、命令校验与审批队列。",subtitleApprovals:"命令审批队列；按会话批准或拒绝。",navTitleAgents:"代理",navTitleOverview:"概览",navTitleChannels:"通道",navTitleInstances:"实例",navTitleSessions:"会话",navTitleUsage:"用量",navTitleCron:"定时任务",navTitleSkills:"技能",navTitleMcp:"MCP",navTitleNodes:"节点",navTitleChat:"聊天",navTitleDigitalEmployee:"数字员工",navTitleAgentSwarm:"Agent Swarm",agentSwarmDevBadge:"开发中",navTitleConfig:"配置",navTitleEnvVars:"环境变量",navTitleModels:"模型",navTitleDebug:"测试",navTitleLogs:"日志",navTitleLlmTrace:"LLM Trace",navTitleSandbox:"安全策略",navTitleApprovals:"审批队列",navTitleControl:"控制",overviewGatewayAccess:"网关访问",overviewGatewayAccessSub:"控制台连接地址与认证方式。",overviewWebSocketUrl:"WebSocket 地址",overviewGatewayHost:"后端地址 (IP:端口)",overviewGatewayToken:"网关令牌",overviewPassword:"密码（不保存）",overviewDefaultSessionKey:"默认会话 Key",overviewConnect:"连接",overviewRefresh:"刷新",overviewConnectHint:"点击连接以应用连接变更。",overviewSnapshot:"快照",overviewSnapshotSub:"最近一次网关握手信息。",overviewStatus:"状态",overviewConnected:"已连接",overviewDisconnected:"未连接",overviewUptime:"运行时长",overviewTickInterval:"心跳间隔",overviewLastChannelsRefresh:"最近通道刷新",overviewChannelsHint:"在通道中关联 WhatsApp、Telegram、Discord、Signal 或 iMessage。",overviewInstances:"实例",overviewInstancesSub:"过去 5 分钟内的在线实例数。",overviewSessions:"会话",overviewSessionsSub:"网关跟踪的最近会话 Key。",overviewCron:"定时任务",overviewCronNext:"下次执行",overviewCronEnabled:"已启用",overviewCronDisabled:"已禁用",overviewNotes:"说明",overviewNotesSub:"远程控制相关简要提示。",overviewNoteTailscale:"Tailscale serve",overviewNoteTailscaleSub:"建议使用 serve 模式，使网关仅监听本机并由 tailnet 认证。",overviewNoteSessionHygiene:"会话清理",overviewNoteSessionHygieneSub:"使用 /new 或 sessions.patch 重置上下文。",overviewNoteCron:"定时提醒",overviewNoteCronSub:"定时任务请使用独立会话。",commonLoading:"加载中…",commonRefresh:"刷新",commonRefreshing:"刷新中…",commonSaving:"保存中…",commonDelete:"删除",commonFilter:"筛选",commonOptional:"（可选）",commonInherit:"继承",commonOffExplicit:"关闭（显式）",commonNA:"无",commonYes:"是",commonNo:"否",channelsConfigure:"配置",mcpAddServer:"新增",mcpServerName:"服务器名称",mcpNoServers:"暂无 MCP 服务器配置。",mcpEnabled:"已启用",mcpDisabled:"已禁用",mcpFormMode:"表单",mcpRawMode:"原始 JSON",mcpCommand:"命令",mcpArgs:"参数",mcpUrl:"URL",mcpService:"服务",mcpServiceUrl:"服务 URL",mcpToolPrefix:"工具前缀",mcpRawJson:"原始 JSON",mcpDeleteConfirm:"确定删除此 MCP 服务器？",mcpConnectionTypeStdio:"命令行 (stdio)",mcpConnectionTypeUrl:"URL",mcpConnectionTypeService:"服务",mcpEnv:"环境变量",mcpEnvPlaceholder:"KEY=value 或 $ENV_VAR，每行一个",mcpViewList:"列表",mcpViewCard:"卡片",mcpTableName:"名称",mcpTableType:"连接类型",mcpTableStatus:"状态",mcpTableActions:"操作",llmTraceSearch:"搜索",llmTraceSearchPlaceholder:"按 session key 筛选…",llmTraceEnabled:"已开启",llmTraceDisabled:"已关闭",llmTraceActionEnable:"开启",llmTraceActionDisable:"关闭",llmTraceToggleTooltip:"开启后，再进行会话会记录模型调用Trace详情，可能会有性能影响。关闭后，不再记录新的模型会话Trace详情。",llmTraceModeActive:"活跃",llmTraceModeAll:"全部",llmTraceSessionKey:"Session Key",llmTraceSessionId:"Session ID",llmTraceUpdatedAt:"更新时间",llmTraceFile:"文件",llmTraceFileSize:"大小",llmTraceView:"查看",llmTraceBack:"返回",llmTraceDownload:"下载",llmTraceNoEntries:"暂无 trace 记录。",sandboxEnabled:"已开启",sandboxDisabled:"已关闭",sandboxActionEnable:"开启",sandboxActionDisable:"关闭",sandboxAllowedPaths:"允许路径",sandboxNetworkAllow:"网络白名单",sandboxHooks:"安全钩子",sandboxHookBeforeAgent:"BeforeAgent",sandboxHookBeforeModel:"BeforeModel",sandboxHookAfterModel:"AfterModel",sandboxHookBeforeTool:"BeforeTool",sandboxHookAfterTool:"AfterTool",sandboxHookAfterAgent:"AfterAgent",sandboxHookDescBeforeAgent:"请求验证：拦截会话滥用（DoS）、过长提示、恶意 IP",sandboxHookDescBeforeModel:"Prompt安全：提示注入、敏感数据泄露、控制字符",sandboxHookDescAfterModel:"输出评测：危险命令、秘密泄露、恶意网址",sandboxHookDescBeforeTool:"权限校验：工具权限、参数校验、路径校验",sandboxHookDescAfterTool:"结果审查：秘密泄露、错误脱敏、输出截断",sandboxHookDescAfterAgent:"审计日志、合规检查",sandboxValidator:"命令校验",sandboxResourceLimit:"资源限制",sandboxMaxCPUPercent:"最大 CPU 利用率 (%)",sandboxMaxMemoryBytes:"最大内存 (Bytes)",sandboxMaxDiskBytes:"最大磁盘 (Bytes)",sandboxSecretPatterns:"脱敏正则检测",sandboxSecretPatternsHint:"每行一个正则。系统内置模式（API Key、令牌等）会一并生效。",sandboxBanCommands:"禁止命令",sandboxBanArguments:"禁止参数",sandboxBanFragments:"关键词熔断",sandboxSectionConfig:"沙箱配置",sandboxSectionApprovals:"审批队列",securitySectionSandbox:"环境边界",securitySectionValidator:"命令校验",securitySectionApprovalQueue:"审批队列",securitySectionSandboxDesc:"自定义约束文件系统/网络访问边界，并可配置资源限制。为安全，即使关闭也会提供一个默认的 sandbox，指定默认目录和危险命令校验。",securitySectionValidatorDesc:"对命令进行校验：禁止命令/参数/片段与长度限制。",securitySectionApprovalQueueDesc:"对敏感工具调用进行人工审批，支持按会话 TTL 免审白名单。",securityApprovalQueueEnabled:"启用审批队列",securityApprovalTimeoutSeconds:"许可过期时间（秒）",securityApprovalTimeoutSecondsHint:"待审批请求超过该时长视为过期。",securityApprovalAllow:"自动允许命令",securityApprovalAllowHint:"无需审批直接执行的命令（每行一个）。支持 glob 模式，如 'ls'、'pwd'、'echo *'。",securityApprovalAsk:"需要审批的命令",securityApprovalAskHint:"需要人工审批的命令（每行一个）。支持 glob 模式，如 'rm'、'mv *'、'cp *'。",securityApprovalDeny:"禁止执行的命令",securityApprovalDenyHint:"始终禁止执行的命令（每行一个）。支持 glob 模式，如 'sudo'、'dd'、'mkfs *'。",securityApprovalBlockOnApproval:"阻塞等待审批",securityApprovalBlockOnApprovalHint:"开启后，页面对话会被阻塞，只有审批通过后才能继续对话。关闭后，直接报错结束对话，Agent 可提示用户有命令需要审批。",approvalsList:"审批队列",approvalsId:"ID",approvalsSessionKey:"Session Key",approvalsSessionId:"Session ID",approvalsCommand:"命令",approvalsTimeout:"超时",approvalsTTL:"TTL",approvalsStatus:"状态",approvalsApprove:"批准",approvalsApproveOnce:"本次放行",approvalsWhitelist:"全部放行",approvalsWhitelistSession:"会话免审",approvalsDeny:"拒绝",approvalsExpired:"已过期",approvalsPending:"待审批",approvalsNoEntries:"暂无审批请求。",approvalsProcessed:"已处理",securityOverviewTitle:"当前状态",securityOverviewPreset:"预设",securityOverviewSandbox:"环境边界",securityOverviewCommandPolicy:"命令策略",securityOverviewPendingApprovals:"待审批",securityPresetsTitle:"快速预设",securityPresetsHint:"一键应用，覆盖当前配置。适用场景见下表。",securityPresetOff:"全部关闭",securityPresetLoose:"宽松",securityPresetStandard:"标准",securityPresetStrict:"严格",securityPresetOffDesc:"关闭所有安全策略：沙箱、命令策略、审批队列。仅适用于快速本地测试。",securityPresetLooseDesc:"沙箱开，路径/网络较宽。仅禁止极端危险命令（sudo、rm -rf、dd、mkfs）。默认放行，无审批。适用：本地开发、调试。",securityPresetStandardDesc:"沙箱开，路径/网络适中。禁止 + 部分需审批（rm、mv、cp）。默认需审批，审批开。适用：日常使用、预发。",securityPresetStrictDesc:"沙箱开，路径/网络收紧。禁止 + 大量需审批。默认拒绝，审批开且阻塞。适用：生产、合规。",securitySectionCommandPolicy:"命令策略",securitySectionCommandPolicyDesc:"统一规则：禁止 → 需审批 → 放行。未命中规则时按默认策略处理。",securityDefaultPolicy:"默认策略（未命中任何规则时）",securityDefaultDeny:"拒绝",securityDefaultAsk:"需审批",securityDefaultAllow:"放行",securityRulesList:"规则列表",securityRuleAction:"动作",securityRulePattern:"模式",securityRuleType:"类型",securityActionDeny:"禁止",securityActionAsk:"需审批",securityActionAllow:"放行",securityAddRule:"添加规则",securityAdvancedOptions:"高级：禁止参数、最大长度、敏感词",securityMaxLength:"最大命令长度",securityResourceCustom:"自定义",securityRulesHint:"每行一个模式。禁止规则：单词为命令（如 sudo），含空格为片段（如 rm -rf）。",securityRulesDenyHint:"始终禁止的命令/片段。单词=命令，多词=片段。",securityRulesAskHint:"需审批后才能执行的命令。",securityRulesAllowHint:"免审批直接放行的命令。",approvalsViewSession:"查看会话",approvalsSectionApproved:"已审批",approvalsSectionDenied:"已拒绝",approvalsSectionWhitelisted:"会话免审",approvalsExpiresIn:"剩余",approvalsExpiresAt:"过期时间",approvalsTtlPermanent:"永久",approvalsReason:"拒绝原因",modelsViewList:"列表",modelsViewCard:"卡片",modelsTableName:"名称",modelsTableModel:"默认模型",modelsTableBaseUrl:"Base URL",modelsTableActions:"操作",modelsAddProvider:"添加厂商",modelsAddCustomProvider:"添加自定义厂商",modelsProviderId:"厂商 ID",modelsProviderIdPlaceholder:"如 openai, google, anthropic",modelsProviderIdHint:"小写字母、数字、连字符、下划线。创建后不可修改。",modelsDisplayName:"展示名称",modelsDisplayNamePlaceholder:"如 OpenAI, Google Gemini",modelsDefaultBaseUrl:"默认 Base URL",modelsDefaultBaseUrlPlaceholder:"如 https://api.openai.com/v1",modelsApiKeyPrefix:"API Key 前缀（可选）",modelsApiKeyPrefixPlaceholder:"如 sk-",modelsApiType:"API 类型",modelsApiTypeTooltip:`OpenAI：兼容 OpenAI Chat Completions 的端点。默认会请求/v1/chat/completions。
Anthropic：兼容 Anthropic Messages API 的端点，会进行直接请求。`,modelsApiTypeOpenAI:"OpenAI (openai-completions)",modelsApiTypeAnthropic:"Anthropic (anthropic-messages)",modelsEnvVars:"环境变量",modelsAddModel:"添加模型",modelsModelId:"模型 ID",modelsModelName:"模型名称",modelsModelManagement:"模型管理",modelsNoModels:"暂无模型，点击添加模型。",modelsEnvVarConflict:"环境变量冲突",modelsNoProviders:"暂无模型厂商配置。",modelsModels:"模型",modelsBaseUrl:"Base URL",modelsApiKey:"API Key",modelsUseAsDefault:"使用",modelsCancelUse:"取消使用",modelsSelectModelToUse:"选择要使用的模型",modelsCurrentDefault:"当前默认",channelsHealth:"通道健康",channelsHealthSub:"网关返回的通道状态快照。",channelsNoSnapshot:"暂无快照。",channelsSchemaUnavailable:"Schema 不可用，请使用 Raw。",channelsConfigSchemaUnavailable:"通道配置 Schema 不可用。",channelsConfigSaveConfirm:"修改/新增渠道配置会导致长连接中断并重新创建，是否继续？",channelsLoadingConfigSchema:"正在加载配置 Schema…",commonSave:"保存",commonCreate:"创建",commonReload:"重新加载",commonCancel:"取消",channelConfigured:"已配置",channelRunning:"运行中",channelLastStart:"最近启动",channelLastProbe:"最近探测",channelProbe:"探测",channelProbeOk:"正常",channelProbeFailed:"失败",channelLinked:"已链接",channelConnected:"已连接",channelLastConnect:"最近连接",channelLastMessage:"最近消息",channelAuthAge:"认证时长",channelBaseUrl:"Base URL",channelCredential:"凭证",channelAudience:"受众",channelMode:"模式",channelPublicKey:"公钥",channelLastInbound:"最近入站",channelActive:"活跃",channelGenericSub:"通道状态与配置。",channelAccounts:"账号",channelWhatsApp:"WhatsApp",channelWhatsAppSub:"链接 WhatsApp Web 并监控连接状态。",channelTelegram:"Telegram",channelTelegramSub:"机器人状态与通道配置。",channelDiscord:"Discord",channelDiscordSub:"机器人状态与通道配置。",channelGoogleChat:"Google Chat",channelGoogleChatSub:"Chat API Webhook 状态与通道配置。",channelIMessage:"iMessage",channelIMessageSub:"macOS 桥接状态与通道配置。",channelSignal:"Signal",channelSignalSub:"signal-cli 状态与通道配置。",channelSlack:"Slack",channelSlackSub:"Socket 模式状态与通道配置。",channelNostr:"Nostr",channelNostrSub:"通过 Nostr 中继的分布式私信（NIP-04）。",channelWhatsAppWorking:"处理中…",channelShowQr:"显示二维码",channelRelink:"重新链接",channelWaitForScan:"等待扫码",channelLogout:"登出",channelWeWork:"企业微信智能机器人",channelWeWorkSub:"通过官方智能机器人 WebSocket 长连接（aibot）收发消息。支持扫码创建或手动填写 Bot ID / Secret。",channelWeWorkTransport:"链路",channelWeWorkBotId:"Bot ID（脱敏）",channelWeWorkQrStart:"扫码快速创建",channelWeWorkQrWorking:"处理中…",channelWeWorkQrStartFailed:"无法开始扫码会话（缺少 scode）。",channelWeWorkOpenGenPage:"打开扫码页",channelWeWorkQrModalTitle:"企业微信智能机器人 — 扫码创建",channelWeWorkQrReplaceWarn:"当前已配置过企业微信智能机器人凭据。再次扫码创建将覆盖表单中的 Bot ID 与 Secret（保存后生效）。",channelWeWorkQrPreparing:"正在获取扫码会话…",channelWeWorkQrWaiting:"等待你在企业微信中完成创建…",channelWeWorkQrSuccessClosing:"凭据已保存，网关正在按新配置重建企业微信 WebSocket 连接。弹框即将自动关闭。",channelWeWorkQrSaveMissingForm:"扫码成功后无法从表单读取 channels.wework，请重试或手动保存配置。",channelWeWorkQrModalCancel:"取消",nostrEditProfile:"编辑资料",nostrAccount:"账号",nostrUsername:"用户名",nostrDisplayName:"显示名称",nostrBio:"简介",nostrAvatarUrl:"头像 URL",nostrBannerUrl:"横幅 URL",nostrWebsite:"网站",nostrNip05:"NIP-05 标识",nostrLud16:"Lightning 地址",nostrSavePublish:"保存并发布",nostrImportRelays:"从中继导入",nostrHideAdvanced:"隐藏高级",nostrShowAdvanced:"显示高级",nostrUnsavedChanges:"您有未保存的更改",nostrProfilePreview:"头像预览",nostrAdvanced:"高级",nostrImporting:"导入中…",nostrNoProfileSet:"未设置资料。点击「编辑资料」添加姓名、简介与头像。",nostrProfile:"资料",nostrAbout:"关于",nostrName:"名称",instancesTitle:"已连接实例",instancesSub:"网关与客户端的在线状态。",instancesNoReported:"暂无实例上报。",instancesUnknownHost:"未知主机",instancesLastInput:"最近输入",instancesReason:"原因",instancesScopes:"范围",sessionsTitle:"会话",sessionsSub:"活跃会话 Key 及每会话覆盖项。",sessionsActiveWithin:"活跃时间（分钟）",sessionsLimit:"数量上限",sessionsIncludeGlobal:"包含全局",sessionsIncludeUnknown:"包含未知",sessionsStore:"存储",sessionsKey:"Key",sessionsLabel:"标签",sessionsKind:"类型",sessionsUpdated:"更新时间",sessionsTokens:"Token",sessionsThinking:"思考",sessionsVerbose:"详细",sessionsReasoning:"推理",sessionsActions:"操作",sessionsNoFound:"未找到会话。",usageNoTimeline:"暂无时间线数据。",usageNoData:"暂无数据",usageHours:"小时",usageMidnight:"0 点",usage4am:"4 点",usage8am:"8 点",usageNoon:"12 点",usage4pm:"16 点",usage8pm:"20 点",usageDailyToken:"每日 Token 用量",usageDailyCost:"每日费用",usageOutput:"输出",usageInput:"输入",usageCacheWrite:"缓存写入",usageCacheRead:"缓存读取",usageClearFilters:"清除筛选",usageRemoveFilter:"移除筛选",usageDays:"天",usageHoursLabel:"小时",usageSession:"会话",usageFiltered:"已筛选",usageVisible:"当前可见",usageExport:"导出",usageActivityByTime:"按时间活动",usageMosaicSubNoData:"估算需要会话时间戳。",usageTokensUnit:"tokens",usageTimeZoneLocal:"本地",usageTimeZoneUtc:"UTC",usageDayOfWeek:"星期",usageDailyUsage:"每日用量",usageTotal:"合计",usageByType:"按类型",usageTokensByType:"按类型 Token",usageCostByType:"按类型费用",usageTotalLabel:"合计",usageOverview:"用量概览",usageMessages:"消息数",usageToolCalls:"工具调用",usageErrors:"错误数",usageAvgTokensMsg:"平均 Token/条",usageAvgCostMsg:"平均费用/条",usageSessionsCard:"会话",usageThroughput:"吞吐",usageErrorRate:"错误率",usageCacheHitRate:"缓存命中率",usageMessagesHint:"范围内用户+助手消息总数。",usageToolCallsHint:"会话中工具调用总次数。",usageErrorsHint:"范围内消息/工具错误总数。",usageAvgTokensMsgHint:"该范围内每条消息平均 token 数。",usageSessionsHint:"范围内的不同会话数。",usageThroughputHint:"吞吐为活跃时间内每分钟 token 数，越高越好。",usageErrorRateHint:"错误率 = 错误数/总消息数，越低越好。",usageCacheHitRateHint:"缓存命中率 = 缓存读取/(输入+缓存读取)，越高越好。",usageTopModels:"Top 模型",usageTopProviders:"Top 提供商",usageTopTools:"Top 工具",usageTopAgents:"Top 代理",usageTopChannels:"Top 渠道",usagePeakErrorDays:"错误高峰日",usagePeakErrorHours:"错误高峰时",usageNoModelData:"无模型数据",usageNoProviderData:"无提供商数据",usageNoToolCalls:"无工具调用",usageNoAgentData:"无代理数据",usageNoChannelData:"无渠道数据",usageNoErrorData:"无错误数据",usageShown:"显示",usageTotalSessions:"总计",usageAvg:"平均",usageAll:"全部",usageRecentlyViewed:"最近查看",usageSort:"排序",usageCost:"费用",usageErrorsCol:"错误",usageMessagesCol:"消息",usageRecent:"最近",usageTokensCol:"Token",usageDescending:"降序",usageAscending:"升序",usageClearSelection:"清除选择",usageNoRecentSessions:"无最近会话",usageNoSessionsInRange:"范围内无会话",usageCopy:"复制",usageCopySessionName:"复制会话名",usageSelectedCount:"已选",usageMoreSessions:"更多",usageUserAssistant:"用户 · 助手",usageToolsUsed:"使用工具数",usageToolResults:"工具结果",usageAcrossMessages:"跨消息",usageInRange:"范围内",usageCached:"缓存",usagePrompt:"提示",usageCacheHint:"缓存命中率 = 缓存读取/(输入+缓存读取)，越高越好。",usageErrorHint:"错误率 = 错误数/总消息数，越低越好。",usageTokensHint:"该范围内每条消息平均 token 数。",usageCostHint:"提供商上报费用时每条消息平均费用。",usageCostHintMissing:"提供商上报费用时每条消息平均费用。部分或全部会话缺少费用数据。",usageModelMix:"模型组合",usageDuration:"时长",usageCloseSessionDetails:"关闭会话详情",usageLoading:"加载中…",usageNoTimelineData:"无时间线数据",usageNoDataInRange:"范围内无数据",usageUsageOverTime:"用量随时间",usagePerTurn:"每轮",usageCumulative:"累计",usageNoContextData:"无上下文数据",usageSystemPromptBreakdown:"系统提示分解",usageExpandAll:"全部展开",usageCollapseAll:"全部折叠",usageBaseContextPerMessage:"每条消息的基础上下文",usageSys:"系统",usageSkills:"技能",usageToolsLabel:"工具",usageFiles:"文件",usageConversation:"对话",usageNoMessages:"无消息",usageSearchConversation:"搜索对话",usageClear:"清除",usageHasTools:"含工具",usageUser:"用户",usageAssistant:"助手",usageTool:"工具",usageToolResult:"工具结果",usageMessagesCount:"条消息",usageNoMessagesMatchFilters:"没有消息符合筛选条件。",usageTokenUsage:"Token 用量",usageToday:"今天",usage7d:"7 天",usage30d:"30 天",usageExportSessionsCsv:"会话 (CSV)",usageExportDailyCsv:"每日 (CSV)",usageSessionsCount:"会话",usageQueryHintMatch:"{count} / {total} 个会话匹配",usageQueryHintInRange:"{total} 个会话在范围内",usagePageSubtitle:"查看 token 消耗、会话高峰与费用驱动因素。",usageCalls:"次",cronScheduler:"调度器",cronSchedulerSub:"网关内置定时调度状态。",cronEnabled:"已启用",cronJobs:"任务数",cronNewJob:"新建任务",cronNewJobSub:"创建定时唤醒或代理运行任务。",cronName:"名称",cronDescription:"描述",cronAgentId:"Agent ID",cronSchedule:"调度",cronEvery:"每",cronAt:"在",cronCron:"Cron",cronSession:"会话",cronMain:"主会话",cronIsolated:"独立会话",cronWakeMode:"唤醒方式",cronNextHeartbeat:"下次心跳",cronNow:"立即",cronPayload:"负载",cronSystemEvent:"系统事件",cronAgentTurn:"代理轮次",cronSystemText:"系统文本",cronAgentMessage:"Agent 消息",cronDelivery:"投递",cronAnnounceSummary:"公布摘要（默认）",cronNoneInternal:"无（内部）",cronChannel:"通道",cronTo:"发送至",cronAddJob:"添加任务",cronJobsTitle:"任务列表",cronJobsSub:"网关中所有已调度任务。",cronNoJobsYet:"暂无任务。",cronRunHistory:"运行历史",cronRunHistorySub:"最近运行：",cronSelectJob:"（选择任务）",cronNoRunsYet:"暂无运行记录。",cronSelectJobToInspect:"选择任务以查看运行历史。",cronRunAt:"运行时间",cronUnit:"单位",cronMinutes:"分钟",cronHours:"小时",cronDays:"天",cronExpression:"表达式",cronTimeoutSeconds:"超时（秒）",cronLast:"上次",agentsFiles:"文件",agentsRuntime:"运行时",agentsWeb:"网页",agentsMemory:"记忆",agentsSessions:"会话",agentsUi:"界面",agentsMessaging:"消息",agentsAutomation:"自动化",agentsReadFile:"读取文件内容",agentsWriteFile:"创建或覆盖文件",agentsEdit:"精确编辑",agentsApplyPatch:"应用补丁（OpenAI）",agentsExec:"执行 shell 命令",agentsProcess:"管理后台进程",agentsWebSearch:"网页搜索",agentsWebFetch:"抓取网页内容",agentsMemorySearch:"语义搜索",agentsMemoryGet:"读取记忆文件",agentsSessionsList:"列出会话",agentsSessionsHistory:"会话历史",agentsSessionsSend:"发送到会话",agentsSessionsSpawn:"派生子代理",agentsSessionStatus:"会话状态",agentsBrowser:"控制浏览器",agentsCanvas:"控制画布",agentsMessage:"发送消息",agentsScheduleTasks:"安排任务",agentsGatewayControl:"网关控制",agentsNodesDevices:"节点与设备",agentsListAgents:"列出代理",agentsImageUnderstanding:"图像理解",agentsNodes:"节点",agentsAgents:"代理",agentsMedia:"媒体",agentsTitle:"代理",agentsConfigured:"已配置。",agentsNoFound:"未找到代理。",agentsSelectAgent:"选择代理",agentsSelectAgentSub:"选择一个代理以查看其工作区与工具。",agentsWorkspaceRouting:"代理工作区与路由。",agentsProfileMinimal:"最小",agentsProfileCoding:"编程",agentsProfileMessaging:"消息",agentsProfileFull:"完整",agentsDefault:"默认",agentsSelected:"已选",agentsAllSkills:"全部技能",agentsCurrentModel:"当前",agentsInheritDefault:"继承默认",agentsOverview:"概览",agentsOverviewSub:"工作区路径与身份元数据。",agentsWorkspace:"工作区",agentsPrimaryModel:"主模型",agentsIdentityName:"身份名称",agentsDefaultLabel:"默认",agentsIdentityEmoji:"身份表情",agentsSkillsFilter:"技能筛选",agentsModelSelection:"模型选择",agentsPrimaryModelLabel:"主模型",agentsPrimaryModelDefault:"（默认）",agentsFallbacksLabel:"备选（逗号分隔）",agentsReloadConfig:"重新加载配置",agentsAgentContext:"代理上下文",agentsContextWorkspaceIdentity:"工作区、身份与模型配置。",agentsContextWorkspaceScheduling:"工作区与调度目标。",agentsChannels:"渠道",agentsChannelsSub:"网关渠道状态快照。",agentsLoadChannels:"加载渠道以查看实时状态。",agentsNoChannels:"未找到渠道。",agentsConnected:"已连接",agentsConfiguredLabel:"已配置",agentsEnabled:"已启用",agentsDisabled:"已禁用",agentsNoAccounts:"无账号",agentsNotConfigured:"未配置",agentsScheduler:"调度器",agentsSchedulerSub:"网关定时状态。",agentsNextWake:"下次唤醒",agentsCronJobs:"代理定时任务",agentsCronJobsSub:"针对此代理的定时任务。",agentsNoJobsAssigned:"未分配任务。",agentsCoreFiles:"核心文件",agentsCoreFilesSub:"引导人设、身份与工具指引。",agentsLoadWorkspaceFiles:"加载代理工作区文件以编辑核心说明。",agentsNoFilesFound:"未找到文件。",agentsSelectFileToEdit:"选择要编辑的文件。",agentsReset:"重置",agentsFileMissingCreate:"该文件不存在。保存将在代理工作区中创建。",agentsUnavailable:"不可用",agentsTabOverview:"概览",agentsTabFiles:"文件",agentsTabTools:"工具",agentsTabSkills:"技能",agentsTabChannels:"渠道",agentsTabCron:"定时任务",agentsFallback:"备选",agentsNever:"从未",agentsLastRefresh:"上次刷新",agentsSkillsPanelSub:"每代理技能允许列表与工作区技能。",agentsUseAll:"全部启用",agentsDisableAll:"全部禁用",agentsLoadConfigForSkills:"加载网关配置以设置每代理技能。",agentsCustomAllowlist:"此代理使用自定义技能允许列表。",agentsAllSkillsEnabled:"所有技能已启用。禁用任意技能将创建每代理允许列表。",agentsLoadSkillsForAgent:"加载此代理的技能以查看工作区相关条目。",agentsFilter:"筛选",agentsNoSkillsFound:"未找到技能。",agentsToolsGlobalAllow:"已设置全局 tools.allow。代理覆盖无法启用被全局禁止的工具。",agentsProfile:"配置集",agentsSource:"来源",agentsStatus:"状态",agentsUnsaved:"未保存",agentsQuickPresets:"快捷预设",agentsInherit:"继承",agentsToolsTitle:"工具",agentsToolsSub:"每代理工具配置集与覆盖。",agentsToolAccess:"工具访问",agentsToolsSubText:"此代理的配置集与每工具覆盖。",agentsLoadConfigForTools:"加载网关配置以调整工具配置集。",agentsExplicitAllowlist:"此代理在配置中使用显式允许列表。工具覆盖在配置页管理。",agentsEnableAll:"全部启用",agentsEnabledCount:"已启用。",skillsTitle:"技能",skillsSub:"内置、托管与工作区技能。",skillsSearchPlaceholder:"搜索技能",skillsShown:"条显示",skillsWorkspace:"工作区技能",skillsBuiltIn:"内置技能",skillsInstalled:"已安装技能",skillsExtra:"额外技能",skillsOther:"其他技能",skillsAdd:"新增",skillsAddSkill:"添加技能",skillsUploadName:"技能名称（英文）",skillsUploadNamePlaceholder:"如 my-skill",skillsUploadFile:"文件",skillsUploadFileHint:"SKILL.md 或包含 SKILL.md 的 .zip",skillsUploadSingleHint:"单文件必须为 SKILL.md",skillsUploadZipHint:"压缩包必须包含 SKILL.md",skillsUploadSubmit:"上传",skillsUploadSuccess:"技能上传成功",skillsDelete:"删除",skillsDeleteConfirm:"确定删除此技能？",skillsSource:"来源",skillsPath:"路径",skillsNoDoc:"暂无文档。",skillsEligible:"可用",skillsDisabled:"已禁用",skillsRequiresBins:"需要命令",skillsRequiresEnv:"需要环境变量",skillsRequiresConfig:"需要配置",skillsMissing:"缺失",nodesTitle:"节点",nodesSub:"已配对设备与在线连接。",nodesNoFound:"未找到节点。",nodesDevices:"设备",nodesDevicesSub:"配对请求与角色令牌。",nodesPending:"待处理",nodesPaired:"已配对",nodesNoPairedDevices:"暂无已配对设备。",nodesRoleLabel:"角色：",nodesRoleNone:"角色：-",nodesRepairSuffix:" · 修复",nodesRequested:"请求于 ",nodesApprove:"批准",nodesReject:"拒绝",nodesRolesLabel:"角色：",nodesScopesLabel:"范围：",nodesTokensNone:"令牌：无",nodesTokens:"令牌",nodesTokenRevoked:"已撤销",nodesTokenActive:"有效",nodesRotate:"轮换",nodesRevoke:"撤销",nodesBindingTitle:"Exec 节点绑定",nodesBindingSub:"在使用 ",nodesBindingFormModeHint:"请在 Config 选项卡中切换到表单模式以在此编辑绑定。",nodesLoadConfigHint:"加载配置以编辑绑定。",nodesLoadConfig:"加载配置",nodesDefaultBinding:"默认绑定",nodesDefaultBindingSub:"当代理未覆盖节点绑定时使用。",nodesNodeLabel:"节点",nodesAnyNode:"任意节点",nodesNoNodesSystemRun:"没有支持 system.run 的节点。",nodesNoAgentsFound:"未找到代理。",nodesExecApprovalsTitle:"Exec 审批",nodesExecApprovalsSub:"exec host=gateway/node 的允许列表与审批策略。",nodesLoadExecApprovalsHint:"加载 exec 审批以编辑允许列表。",nodesLoadApprovals:"加载审批",nodesTarget:"目标",nodesTargetSub:"网关编辑本地审批；节点编辑所选节点。",nodesHost:"主机",nodesHostGateway:"网关",nodesHostNode:"节点",nodesSelectNode:"选择节点",nodesNoNodesExecApprovals:"尚无节点提供 exec 审批。",nodesScope:"范围",nodesDefaults:"默认",nodesSecurity:"安全",nodesSecurityDefaultSub:"默认安全模式。",nodesSecurityAgentSubPrefix:"默认：",nodesMode:"模式",nodesUseDefaultPrefix:"使用默认（",nodesUseDefaultButton:"使用默认",nodesSecurityDeny:"拒绝",nodesSecurityAllowlist:"允许列表",nodesSecurityFull:"完全",nodesAsk:"询问",nodesAskDefaultSub:"默认提示策略。",nodesAskAgentSubPrefix:"默认：",nodesAskOff:"关",nodesAskOnMiss:"缺失时",nodesAskAlways:"始终",nodesAskFallback:"询问回退",nodesAskFallbackDefaultSub:"当 UI 提示不可用时应用。",nodesAskFallbackAgentSubPrefix:"默认：",nodesFallback:"回退",nodesAutoAllowSkills:"自动允许技能 CLI",nodesAutoAllowSkillsDefaultSub:"允许网关列出的技能可执行文件。",nodesAutoAllowSkillsUsingDefault:"使用默认（",nodesAutoAllowSkillsOverride:"覆盖（",nodesEnabled:"启用",nodesAllowlist:"允许列表",nodesAllowlistSub:"不区分大小写的 glob 模式。",nodesAddPattern:"添加模式",nodesNoAllowlistEntries:"尚无允许列表条目。",nodesNewPattern:"新模式",nodesLastUsedPrefix:"上次使用：",nodesPattern:"模式",nodesRemove:"移除",nodesDefaultAgent:"默认代理",nodesAgent:"代理",nodesUsesDefault:"使用默认（",nodesOverride:"覆盖：",nodesBinding:"绑定",nodesChipPaired:"已配对",nodesChipUnpaired:"未配对",nodesConnected:"已连接",nodesOffline:"离线",nodesNever:"从未",configEnv:"环境",configUpdate:"更新",configAgents:"代理",configAuth:"认证",configChannels:"通道",configMessages:"消息",configCommands:"命令",configHooks:"钩子",configSkills:"技能",configTools:"工具",configGateway:"网关",configWizard:"设置向导",configMeta:"元数据",configLogging:"日志",configBrowser:"浏览器",configUi:"界面",configModels:"模型",configBindings:"绑定",configBroadcast:"广播",configAudio:"音频",configSession:"会话",configCron:"定时",configWeb:"Web",configDiscovery:"发现",configCanvasHost:"画布主机",configTalk:"语音",configPlugins:"插件",configEnvVars:"环境变量",configEnvVarsDesc:"传入网关进程的环境变量",configUpdatesDesc:"自动更新与发布渠道",configAgentsDesc:"代理配置、模型与身份",configAuthDesc:"API 密钥与认证配置",configChannelsDesc:"消息通道（Telegram、Discord、Slack 等）",configMessagesDesc:"消息处理与路由",configCommandsDesc:"自定义斜杠命令",configHooksDesc:"Webhook 与事件钩子",configSkillsDesc:"技能包与能力",configToolsDesc:"工具配置（浏览器、搜索等）",configGatewayDesc:"网关服务（端口、认证、绑定）",configWizardDesc:"设置向导状态与历史",configMetaDesc:"网关元数据与版本",configLoggingDesc:"日志级别与输出",configBrowserDesc:"浏览器自动化",configUiDesc:"界面偏好",configModelsDesc:"AI 模型与提供商",configBindingsDesc:"快捷键绑定",configBroadcastDesc:"广播与通知",configAudioDesc:"音频输入/输出",configSessionDesc:"会话管理与持久化",configCronDesc:"定时任务与自动化",configWebDesc:"Web 服务与 API",configDiscoveryDesc:"服务发现与网络",configCanvasHostDesc:"画布渲染与显示",configTalkDesc:"语音与朗读",configPluginsDesc:"插件管理",configSettingsTitle:"设置",configSearchPlaceholder:"搜索设置…",configAllSettings:"全部设置",configForm:"表单",configRaw:"原始",configUnsavedChanges:"未保存的更改",configUnsavedChangesLabel:"未保存的更改",configOneUnsavedChange:"1 项未保存的更改",configNoChanges:"无更改",configApplying:"应用中…",configApply:"应用",configUpdating:"更新中…",configUpdateButton:"更新",configViewPrefix:"查看 ",configPendingChange:"项待处理更改",configPendingChanges:"项待处理更改",configLoadingSchema:"正在加载架构…",configFormUnsafeWarning:"表单视图无法安全编辑部分字段，请使用原始模式以免丢失配置项。",configRawJson5:"原始 JSON5",configValidityValid:"有效",configValidityInvalid:"无效",configValidityUnknown:"未知",configSchemaUnavailable:"架构不可用。",configUnsupportedSchema:"不支持的架构，请使用原始模式。",configNoSettingsMatchPrefix:"没有匹配「",configNoSettingsMatchSuffix:"」的设置",configNoSettingsInSection:"本部分暂无设置",configUnsupportedSchemaNode:"不支持的架构节点，请使用原始模式。",configSubnavAll:"全部",envVarsSection:"Vars (env.vars)",envModelEnvSection:"模型环境变量 (env.modelEnv)",envShellEnvSection:"Shell 环境 (env.shellEnv)",envVarsKey:"Key",envVarsValue:"Value",envVarsAdd:"新增",envVarsDelete:"删除",envVarsSave:"保存",envVarsEmpty:"暂无环境变量，点击添加创建。",envVarsKeyPlaceholder:"如 API_KEY",envVarsValuePlaceholder:"如 your-secret-value",debugSnapshots:"快照",debugSnapshotsSub:"状态、健康与心跳数据。",debugStatus:"状态",debugHealth:"健康",debugLastHeartbeat:"最近心跳",debugSecurityAudit:"安全审计",debugManualRpc:"手动 RPC",debugManualRpcSub:"使用 JSON 参数发送原始网关方法。",debugMethod:"方法",debugParams:"参数",debugCall:"调用",debugCritical:"严重",debugWarnings:"警告",debugNoCritical:"无严重问题",debugInfo:"信息",debugSecurityAuditDetails:"运行 openclaw security audit --deep 查看详细信息。",debugModels:"模型",debugModelsSub:"来自 models.list 的目录。",debugEventLog:"事件日志",debugEventLogSub:"最新的网关事件。",debugNoEvents:"暂无事件。",logsTitle:"日志",logsSub:"网关文件日志（JSONL）。",logsExportFiltered:"导出已筛选",logsExportVisible:"导出可见"},Id={en:_d,zh:Ld};function i(e){return Id[Qa()][e]}const Dd={env:{label:"configEnvVars",desc:"configEnvVarsDesc"},update:{label:"configUpdate",desc:"configUpdatesDesc"},agents:{label:"configAgents",desc:"configAgentsDesc"},auth:{label:"configAuth",desc:"configAuthDesc"},channels:{label:"configChannels",desc:"configChannelsDesc"},messages:{label:"configMessages",desc:"configMessagesDesc"},commands:{label:"configCommands",desc:"configCommandsDesc"},hooks:{label:"configHooks",desc:"configHooksDesc"},skills:{label:"configSkills",desc:"configSkillsDesc"},tools:{label:"configTools",desc:"configToolsDesc"},gateway:{label:"configGateway",desc:"configGatewayDesc"},wizard:{label:"configWizard",desc:"configWizardDesc"},meta:{label:"configMeta",desc:"configMetaDesc"},logging:{label:"configLogging",desc:"configLoggingDesc"},browser:{label:"configBrowser",desc:"configBrowserDesc"},ui:{label:"configUi",desc:"configUiDesc"},models:{label:"configModels",desc:"configModelsDesc"},bindings:{label:"configBindings",desc:"configBindingsDesc"},broadcast:{label:"configBroadcast",desc:"configBroadcastDesc"},audio:{label:"configAudio",desc:"configAudioDesc"},session:{label:"configSession",desc:"configSessionDesc"},cron:{label:"configCron",desc:"configCronDesc"},web:{label:"configWeb",desc:"configWebDesc"},discovery:{label:"configDiscovery",desc:"configDiscoveryDesc"},canvasHost:{label:"configCanvasHost",desc:"configCanvasHostDesc"},talk:{label:"configTalk",desc:"configTalkDesc"},plugins:{label:"configPlugins",desc:"configPluginsDesc"}};function Va(e){const t=Dd[e];return t?{label:i(t.label),description:i(t.desc)}:{label:e,description:""}}function Rd(e){const{values:t,original:n}=e;return t.name!==n.name||t.displayName!==n.displayName||t.about!==n.about||t.picture!==n.picture||t.banner!==n.banner||t.website!==n.website||t.nip05!==n.nip05||t.lud16!==n.lud16}function Nd(e){const{state:t,callbacks:n,accountId:s}=e,a=Rd(t),o=(c,u,f={})=>{const{type:p="text",placeholder:g,maxLength:$,help:k}=f,S=t.values[c]??"",d=t.fieldErrors[c],m=`nostr-profile-${c}`;return p==="textarea"?r`
        <div class="form-field" style="margin-bottom: 12px;">
          <label for="${m}" style="display: block; margin-bottom: 4px; font-weight: 500;">
            ${u}
          </label>
          <textarea
            id="${m}"
            .value=${S}
            placeholder=${g??""}
            maxlength=${$??2e3}
            rows="3"
            style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: 4px; resize: vertical; font-family: inherit;"
            @input=${h=>{const v=h.target;n.onFieldChange(c,v.value)}}
            ?disabled=${t.saving}
          ></textarea>
          ${k?r`<div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">${k}</div>`:y}
          ${d?r`<div style="font-size: 12px; color: var(--danger-color); margin-top: 2px;">${d}</div>`:y}
        </div>
      `:r`
      <div class="form-field" style="margin-bottom: 12px;">
        <label for="${m}" style="display: block; margin-bottom: 4px; font-weight: 500;">
          ${u}
        </label>
        <input
          id="${m}"
          type=${p}
          .value=${S}
          placeholder=${g??""}
          maxlength=${$??256}
          style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: 4px;"
          @input=${h=>{const v=h.target;n.onFieldChange(c,v.value)}}
          ?disabled=${t.saving}
        />
        ${k?r`<div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">${k}</div>`:y}
        ${d?r`<div style="font-size: 12px; color: var(--danger-color); margin-top: 2px;">${d}</div>`:y}
      </div>
    `},l=()=>{const c=t.values.picture;return c?r`
      <div style="margin-bottom: 12px;">
        <img
          src=${c}
          alt=${i("nostrProfilePreview")}
          style="max-width: 80px; max-height: 80px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border-color);"
          @error=${u=>{const f=u.target;f.style.display="none"}}
          @load=${u=>{const f=u.target;f.style.display="block"}}
        />
      </div>
    `:y};return r`
    <div class="nostr-profile-form" style="padding: 16px; background: var(--bg-secondary); border-radius: 8px; margin-top: 12px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <div style="font-weight: 600; font-size: 16px;">${i("nostrEditProfile")}</div>
        <div style="font-size: 12px; color: var(--text-muted);">${i("nostrAccount")}: ${s}</div>
      </div>

      ${t.error?r`<div class="callout danger" style="margin-bottom: 12px;">${t.error}</div>`:y}

      ${t.success?r`<div class="callout success" style="margin-bottom: 12px;">${t.success}</div>`:y}

      ${l()}

      ${o("name",i("nostrUsername"),{placeholder:"satoshi",maxLength:256,help:"Short username (e.g., satoshi)"})}

      ${o("displayName",i("nostrDisplayName"),{placeholder:"Satoshi Nakamoto",maxLength:256,help:"Your full display name"})}

      ${o("about",i("nostrBio"),{type:"textarea",placeholder:"Tell people about yourself...",maxLength:2e3,help:"A brief bio or description"})}

      ${o("picture",i("nostrAvatarUrl"),{type:"url",placeholder:"https://example.com/avatar.jpg",help:"HTTPS URL to your profile picture"})}

      ${t.showAdvanced?r`
            <div style="border-top: 1px solid var(--border-color); padding-top: 12px; margin-top: 12px;">
              <div style="font-weight: 500; margin-bottom: 12px; color: var(--text-muted);">${i("nostrAdvanced")}</div>

              ${o("banner",i("nostrBannerUrl"),{type:"url",placeholder:"https://example.com/banner.jpg",help:"HTTPS URL to a banner image"})}

              ${o("website",i("nostrWebsite"),{type:"url",placeholder:"https://example.com",help:"Your personal website"})}

              ${o("nip05",i("nostrNip05"),{placeholder:"you@example.com",help:"Verifiable identifier (e.g., you@domain.com)"})}

              ${o("lud16",i("nostrLud16"),{placeholder:"you@getalby.com",help:"Lightning address for tips (LUD-16)"})}
            </div>
          `:y}

      <div style="display: flex; gap: 8px; margin-top: 16px; flex-wrap: wrap;">
        <button
          class="btn primary"
          @click=${n.onSave}
          ?disabled=${t.saving||!a}
        >
          ${t.saving?i("commonSaving"):i("nostrSavePublish")}
        </button>

        <button
          class="btn"
          @click=${n.onImport}
          ?disabled=${t.importing||t.saving}
        >
          ${t.importing?i("nostrImporting"):i("nostrImportRelays")}
        </button>

        <button
          class="btn"
          @click=${n.onToggleAdvanced}
        >
          ${t.showAdvanced?i("nostrHideAdvanced"):i("nostrShowAdvanced")}
        </button>

        <button
          class="btn"
          @click=${n.onCancel}
          ?disabled=${t.saving}
        >
          ${i("commonCancel")}
        </button>
      </div>

      ${a?r`
              <div style="font-size: 12px; color: var(--warning-color); margin-top: 8px">
                ${i("nostrUnsavedChanges")}
              </div>
            `:y}
    </div>
  `}function Ud(e){const t={name:e?.name??"",displayName:e?.displayName??"",about:e?.about??"",picture:e?.picture??"",banner:e?.banner??"",website:e?.website??"",nip05:e?.nip05??"",lud16:e?.lud16??""};return{values:t,original:{...t},saving:!1,importing:!1,error:null,success:null,fieldErrors:{},showAdvanced:!!(e?.banner||e?.website||e?.nip05||e?.lud16)}}function hn(e){const t=e.weworkQrPollTimer;t!=null&&(window.clearInterval(t),e.weworkQrPollTimer=null)}function Ga(e){const t=e.weworkQrSuccessCloseTimer;t!=null&&(window.clearTimeout(t),e.weworkQrSuccessCloseTimer=null)}function Od(e){const s=e.configForm?.channels?.wework?.credentials,a=typeof s?.botId=="string"?s.botId.trim():"",o=typeof s?.botSecret=="string"?s.botSecret.trim():"";return!!(a!==""&&o!==""||e.channelsSnapshot?.channels?.wework?.configured||e.channelsSnapshot?.channelAccounts?.wework?.[0]?.configured)}function tr(e){hn(e),Ga(e),e.weworkQrModalOpen=!1,e.weworkQrModalLoading=!1,e.weworkQrModalPolling=!1,e.weworkQrModalSuccess=!1,e.weworkQrModalError=null,e.weworkQrModalReplaceWarn=!1,e.weworkQrModalAuthUrl=null,e.weworkQrModalGenPageUrl=null}async function Fd(e,t){if(!e.client||!e.connected){hn(e),e.weworkQrModalPolling=!1;return}try{const n=await e.client.request("channels.wework.qr.poll",{scode:t,timeoutMs:35e3});if((n.status??"").trim()==="success"&&n.botId&&n.botSecret){hn(e),Ve(e,["channels","wework","credentials","botId"],n.botId),Ve(e,["channels","wework","credentials","botSecret"],n.botSecret),Ve(e,["channels","wework","enabled"],!0);const o=e.configForm?.channels?.wework;if(!o||typeof o!="object"){e.weworkQrModalError=i("channelWeWorkQrSaveMissingForm"),e.weworkQrModalPolling=!1;return}if(e.lastError=null,await Ae(e,{channels:{wework:Z(o)}}),e.lastError){e.weworkQrModalError=e.lastError,e.weworkQrModalPolling=!1;return}e.weworkQrModalPolling=!1,e.weworkQrModalSuccess=!0,e.weworkQrModalAuthUrl=null,e.weworkQrModalGenPageUrl=null,Ga(e),e.weworkQrSuccessCloseTimer=window.setTimeout(()=>{e.weworkQrSuccessCloseTimer=null,tr(e),Ce(e,!0)},1600)}}catch(n){e.weworkQrModalError=String(n),hn(e),e.weworkQrModalPolling=!1}}async function Bd(e){if(!(!e.client||!e.connected)){hn(e),Ga(e),e.weworkQrModalOpen=!0,e.weworkQrModalReplaceWarn=Od(e),e.weworkQrModalError=null,e.weworkQrModalSuccess=!1,e.weworkQrModalLoading=!0,e.weworkQrModalPolling=!1,e.weworkQrModalAuthUrl=null,e.weworkQrModalGenPageUrl=null;try{await J(e);const t=await e.client.request("channels.wework.qr.start",{timeoutMs:6e4}),n=t.scode?.trim()??"";if(!n){e.weworkQrModalLoading=!1,e.weworkQrModalError=i("channelWeWorkQrStartFailed");return}e.weworkQrModalLoading=!1,e.weworkQrModalAuthUrl=t.authUrl??null,e.weworkQrModalGenPageUrl=t.genPageUrl??null,e.weworkQrModalPolling=!0,e.weworkQrPollTimer=window.setInterval(()=>{Fd(e,n)},2800)}catch(t){e.weworkQrModalLoading=!1,e.weworkQrModalPolling=!1,e.weworkQrModalError=String(t)}}}function Hd(e){tr(e)}async function zd(e,t){await Sd(e,t),await Ce(e,!0)}async function Wd(e){await Cd(e),await Ce(e,!0)}async function Kd(e){await Ad(e),await Ce(e,!0)}async function qd(e){const t=e.configForm?.channels,n=t!=null&&typeof t=="object";n&&!window.confirm(i("channelsConfigSaveConfirm"))||(n?await Ae(e,{channels:t}):await fa(e),await J(e),await Ce(e,!0))}async function jd(e){await J(e),await Ce(e,!0)}function Qd(e){if(!Array.isArray(e))return{};const t={};for(const n of e){if(typeof n!="string")continue;const[s,...a]=n.split(":");if(!s||a.length===0)continue;const o=s.trim(),l=a.join(":").trim();o&&l&&(t[o]=l)}return t}function nr(e){return(e.channelsSnapshot?.channelAccounts?.nostr??[])[0]?.accountId??e.nostrProfileAccountId??"default"}function sr(e,t=""){return`/api/channels/nostr/${encodeURIComponent(e)}/profile${t}`}function Vd(e,t,n){e.nostrProfileAccountId=t,e.nostrProfileFormState=Ud(n??void 0)}function Gd(e){e.nostrProfileFormState=null,e.nostrProfileAccountId=null}function Jd(e,t,n){const s=e.nostrProfileFormState;s&&(e.nostrProfileFormState={...s,values:{...s.values,[t]:n},fieldErrors:{...s.fieldErrors,[t]:""}})}function Yd(e){const t=e.nostrProfileFormState;t&&(e.nostrProfileFormState={...t,showAdvanced:!t.showAdvanced})}async function Zd(e){const t=e.nostrProfileFormState;if(!t||t.saving)return;const n=nr(e);e.nostrProfileFormState={...t,saving:!0,error:null,success:null,fieldErrors:{}};try{const s=await fetch(sr(n),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.values)}),a=await s.json().catch(()=>null);if(!s.ok||a?.ok===!1||!a){const o=a?.error??`Profile update failed (${s.status})`;e.nostrProfileFormState={...t,saving:!1,error:o,success:null,fieldErrors:Qd(a?.details)};return}if(!a.persisted){e.nostrProfileFormState={...t,saving:!1,error:"Profile publish failed on all relays.",success:null};return}e.nostrProfileFormState={...t,saving:!1,error:null,success:"Profile published to relays.",fieldErrors:{},original:{...t.values}},await Ce(e,!0)}catch(s){e.nostrProfileFormState={...t,saving:!1,error:`Profile update failed: ${String(s)}`,success:null}}}async function Xd(e){const t=e.nostrProfileFormState;if(!t||t.importing)return;const n=nr(e);e.nostrProfileFormState={...t,importing:!0,error:null,success:null};try{const s=await fetch(sr(n,"/import"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({autoMerge:!0})}),a=await s.json().catch(()=>null);if(!s.ok||a?.ok===!1||!a){const u=a?.error??`Profile import failed (${s.status})`;e.nostrProfileFormState={...t,importing:!1,error:u,success:null};return}const o=a.merged??a.imported??null,l=o?{...t.values,...o}:t.values,c=!!(l.banner||l.website||l.nip05||l.lud16);e.nostrProfileFormState={...t,importing:!1,values:l,error:null,success:a.saved?"Profile imported from relays. Review and publish.":"Profile imported. Review and publish.",showAdvanced:c},a.saved&&await Ce(e,!0)}catch(s){e.nostrProfileFormState={...t,importing:!1,error:`Profile import failed: ${String(s)}`,success:null}}}function ar(e){const t=(e??"").trim();if(!t)return null;const n=t.split(":").filter(Boolean);if(n.length<3||n[0]!=="agent")return null;const s=n[1]?.trim(),a=n.slice(2).join(":");return!s||!a?null:{agentId:s,rest:a}}const ha=450;function Tn(e,t=!1){e.chatScrollFrame&&cancelAnimationFrame(e.chatScrollFrame),e.chatScrollTimeout!=null&&(clearTimeout(e.chatScrollTimeout),e.chatScrollTimeout=null);const n=()=>{const s=e.querySelector(".chat-thread");if(s){const a=getComputedStyle(s).overflowY;if(a==="auto"||a==="scroll"||s.scrollHeight-s.clientHeight>1)return s}return document.scrollingElement??document.documentElement};e.updateComplete.then(()=>{e.chatScrollFrame=requestAnimationFrame(()=>{e.chatScrollFrame=null;const s=n();if(!s)return;const a=s.scrollHeight-s.scrollTop-s.clientHeight,o=t&&!e.chatHasAutoScrolled;if(!(o||e.chatUserNearBottom||a<ha)){e.chatNewMessagesBelow=!0;return}o&&(e.chatHasAutoScrolled=!0),s.scrollTop=s.scrollHeight,e.chatUserNearBottom=!0,e.chatNewMessagesBelow=!1;const c=o?150:120;e.chatScrollTimeout=window.setTimeout(()=>{e.chatScrollTimeout=null;const u=n();if(!u)return;const f=u.scrollHeight-u.scrollTop-u.clientHeight;(o||e.chatUserNearBottom||f<ha)&&(u.scrollTop=u.scrollHeight,e.chatUserNearBottom=!0)},c)})})}function or(e,t=!1){e.logsScrollFrame&&cancelAnimationFrame(e.logsScrollFrame),e.updateComplete.then(()=>{e.logsScrollFrame=requestAnimationFrame(()=>{e.logsScrollFrame=null;const n=e.querySelector(".log-stream");if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;(t||s<80)&&(n.scrollTop=n.scrollHeight)})})}function eu(e,t){const n=t.currentTarget;if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;e.chatUserNearBottom=s<ha,e.chatUserNearBottom&&(e.chatNewMessagesBelow=!1)}function tu(e,t){const n=t.currentTarget;if(!n)return;const s=n.scrollHeight-n.scrollTop-n.clientHeight;e.logsAtBottom=s<80}function di(e){e.chatHasAutoScrolled=!1,e.chatUserNearBottom=!0,e.chatNewMessagesBelow=!1}function nu(e,t){if(e.length===0)return;const n=new Blob([`${e.join(`
`)}
`],{type:"text/plain"}),s=URL.createObjectURL(n),a=document.createElement("a"),o=new Date().toISOString().slice(0,19).replace(/[:T]/g,"-");a.href=s,a.download=`openclaw-logs-${t}-${o}.log`,a.click(),URL.revokeObjectURL(s)}function su(e){if(typeof ResizeObserver>"u")return;const t=e.querySelector(".topbar");if(!t)return;const n=()=>{const{height:s}=t.getBoundingClientRect();e.style.setProperty("--topbar-height",`${s}px`)};n(),e.topbarObserver=new ResizeObserver(()=>n()),e.topbarObserver.observe(t)}function ys(e){const t=(e??"").trim();if(!t)return"";const n=t.match(/^(?:wss?:\/\/)?([^/]+?)(?:\/|$)/);return n?n[1]:t}function au(e){const t=ys(e);return t?`${typeof location<"u"&&location.protocol==="https:"?"wss":"ws"}://${t}`:""}function Vt(e){const t=ys(e);return t?`${typeof location<"u"&&location.protocol==="https:"?"https":"http"}://${t}`:""}async function bs(e){if(!(!e.client||!e.connected)&&!e.debugLoading){e.debugLoading=!0;try{const[t,n,s,a]=await Promise.all([e.client.request("status",{}),e.client.request("health",{}),e.client.request("models.list",{}),e.client.request("last-heartbeat",{})]);e.debugStatus=t,e.debugHealth=n;const o=s;e.debugModels=Array.isArray(o?.models)?o?.models:[],e.debugHeartbeat=a}catch(t){e.debugCallError=String(t)}finally{e.debugLoading=!1}}}async function ou(e){if(!(!e.client||!e.connected)){e.debugCallError=null,e.debugCallResult=null;try{const t=e.debugCallParams.trim()?JSON.parse(e.debugCallParams):{},n=await e.client.request(e.debugCallMethod.trim(),t);e.debugCallResult=JSON.stringify(n,null,2)}catch(t){e.debugCallError=String(t)}}}const iu=2e3,lu=new Set(["trace","debug","info","warn","error","fatal"]);function ru(e){if(typeof e!="string")return null;const t=e.trim();if(!t.startsWith("{")||!t.endsWith("}"))return null;try{const n=JSON.parse(t);return!n||typeof n!="object"?null:n}catch{return null}}function cu(e){if(typeof e!="string")return null;const t=e.toLowerCase();return lu.has(t)?t:null}function du(e){if(!e.trim())return{raw:e,message:e};try{const t=JSON.parse(e),n=t&&typeof t._meta=="object"&&t._meta!==null?t._meta:null,s=typeof t.time=="string"?t.time:typeof n?.date=="string"?n?.date:null,a=cu(n?.logLevelName??n?.level),o=typeof t[0]=="string"?t[0]:typeof n?.name=="string"?n?.name:null,l=ru(o);let c=null;l&&(typeof l.subsystem=="string"?c=l.subsystem:typeof l.module=="string"&&(c=l.module)),!c&&o&&o.length<120&&(c=o);let u=null;return typeof t[1]=="string"?u=t[1]:!l&&typeof t[0]=="string"?u=t[0]:typeof t.message=="string"&&(u=t.message),{raw:e,time:s,level:a,subsystem:c,message:u??e,meta:n??void 0}}catch{return{raw:e,message:e}}}async function Ja(e,t){if(!(!e.client||!e.connected)&&!(e.logsLoading&&!t?.quiet)){t?.quiet||(e.logsLoading=!0),e.logsError=null;try{const s=await e.client.request("logs.tail",{cursor:t?.reset?void 0:e.logsCursor??void 0,limit:e.logsLimit,maxBytes:e.logsMaxBytes}),o=(Array.isArray(s.lines)?s.lines.filter(c=>typeof c=="string"):[]).map(du),l=!!(t?.reset||s.reset||e.logsCursor==null);e.logsEntries=l?o:[...e.logsEntries,...o].slice(-iu),typeof s.cursor=="number"&&(e.logsCursor=s.cursor),typeof s.file=="string"&&(e.logsFile=s.file),e.logsTruncated=!!s.truncated,e.logsLastFetchAt=Date.now()}catch(n){e.logsError=String(n)}finally{t?.quiet||(e.logsLoading=!1)}}}async function ws(e,t){if(!(!e.client||!e.connected)&&!e.nodesLoading){e.nodesLoading=!0,t?.quiet||(e.lastError=null);try{const n=await e.client.request("node.list",{});e.nodes=Array.isArray(n.nodes)?n.nodes:[]}catch(n){t?.quiet||(e.lastError=String(n))}finally{e.nodesLoading=!1}}}function uu(e){e.nodesPollInterval==null&&(e.nodesPollInterval=window.setInterval(()=>{ws(e,{quiet:!0})},5e3))}function pu(e){e.nodesPollInterval!=null&&(clearInterval(e.nodesPollInterval),e.nodesPollInterval=null)}function Ya(e){e.logsPollInterval==null&&(e.logsPollInterval=window.setInterval(()=>{e.tab==="logs"&&Ja(e,{quiet:!0})},2e3))}function Za(e){e.logsPollInterval!=null&&(clearInterval(e.logsPollInterval),e.logsPollInterval=null)}function Xa(e){e.debugPollInterval==null&&(e.debugPollInterval=window.setInterval(()=>{e.tab==="debug"&&bs(e)},3e3))}function eo(e){e.debugPollInterval!=null&&(clearInterval(e.debugPollInterval),e.debugPollInterval=null)}async function gu(e,t){if(!(!e.client||!e.connected||e.agentIdentityLoading)&&!e.agentIdentityById[t]){e.agentIdentityLoading=!0,e.agentIdentityError=null;try{const n=await e.client.request("agent.identity.get",{agentId:t});n&&(e.agentIdentityById={...e.agentIdentityById,[t]:n})}catch(n){e.agentIdentityError=String(n)}finally{e.agentIdentityLoading=!1}}}async function mu(e,t){if(!e.client||!e.connected||e.agentIdentityLoading)return;const n=t.filter(s=>!e.agentIdentityById[s]);if(n.length!==0){e.agentIdentityLoading=!0,e.agentIdentityError=null;try{for(const s of n){const a=await e.client.request("agent.identity.get",{agentId:s});a&&(e.agentIdentityById={...e.agentIdentityById,[s]:a})}}catch(s){e.agentIdentityError=String(s)}finally{e.agentIdentityLoading=!1}}}async function fu(e,t){if(!(!e.client||!e.connected)&&!e.agentSkillsLoading){e.agentSkillsLoading=!0,e.agentSkillsError=null;try{const n=await e.client.request("skills.status",{agentId:t});n&&(e.agentSkillsReport=n,e.agentSkillsAgentId=t)}catch(n){e.agentSkillsError=String(n)}finally{e.agentSkillsLoading=!1}}}async function ir(e){if(!(!e.client||!e.connected)&&!e.agentsLoading){e.agentsLoading=!0,e.agentsError=null;try{const t=await e.client.request("agents.list",{});if(t){e.agentsList=t;const n=e.agentsSelectedId,s=t.agents.some(a=>a.id===n);(!n||!s)&&(e.agentsSelectedId=t.defaultId??t.agents[0]?.id??null)}}catch(t){e.agentsError=String(t)}finally{e.agentsLoading=!1}}}const hu=/<\s*\/?\s*(?:think(?:ing)?|thought|antthinking|final)\b/i,Wn=/<\s*\/?\s*final\b[^<>]*>/gi,ui=/<\s*(\/?)\s*(?:think(?:ing)?|thought|antthinking)\b[^<>]*>/gi;function pi(e){const t=[],n=/(^|\n)(```|~~~)[^\n]*\n[\s\S]*?(?:\n\2(?:\n|$)|$)/g;for(const a of e.matchAll(n)){const o=(a.index??0)+a[1].length;t.push({start:o,end:o+a[0].length-a[1].length})}const s=/`+[^`]+`+/g;for(const a of e.matchAll(s)){const o=a.index??0,l=o+a[0].length;t.some(u=>o>=u.start&&l<=u.end)||t.push({start:o,end:l})}return t.sort((a,o)=>a.start-o.start),t}function gi(e,t){return t.some(n=>e>=n.start&&e<n.end)}function vu(e,t){return e.trimStart()}function yu(e,t){if(!e||!hu.test(e))return e;let n=e;if(Wn.test(n)){Wn.lastIndex=0;const c=[],u=pi(n);for(const f of n.matchAll(Wn)){const p=f.index??0;c.push({start:p,length:f[0].length,inCode:gi(p,u)})}for(let f=c.length-1;f>=0;f--){const p=c[f];p.inCode||(n=n.slice(0,p.start)+n.slice(p.start+p.length))}}else Wn.lastIndex=0;const s=pi(n);ui.lastIndex=0;let a="",o=0,l=!1;for(const c of n.matchAll(ui)){const u=c.index??0,f=c[1]==="/";gi(u,s)||(l?f&&(l=!1):(a+=n.slice(o,u),f||(l=!0)),o=u+c[0].length)}return a+=n.slice(o),vu(a)}function Sn(e){return!e&&e!==0?"n/a":new Date(e).toLocaleString()}function X(e){if(!e&&e!==0)return"n/a";const t=Date.now()-e,n=Math.abs(t),s=t<0?"from now":"ago",a=Math.round(n/1e3);if(a<60)return t<0?"in <1m":`${a}s ago`;const o=Math.round(a/60);if(o<60)return`${o}m ${s}`;const l=Math.round(o/60);return l<48?`${l}h ${s}`:`${Math.round(l/24)}d ${s}`}function lr(e){if(!e&&e!==0)return"n/a";if(e<1e3)return`${e}ms`;const t=Math.round(e/1e3);if(t<60)return`${t}s`;const n=Math.round(t/60);if(n<60)return`${n}m`;const s=Math.round(n/60);return s<48?`${s}h`:`${Math.round(s/24)}d`}function va(e){return!e||e.length===0?"none":e.filter(t=>!!(t&&t.trim())).join(", ")}function mi(e,t=120){return e.length<=t?e:`${e.slice(0,Math.max(0,t-1))}…`}function rr(e,t){return e.length<=t?{text:e,truncated:!1,total:e.length}:{text:e.slice(0,Math.max(0,t)),truncated:!0,total:e.length}}function as(e,t){const n=Number(e);return Number.isFinite(n)?n:t}function Fs(e){return yu(e)}async function Pn(e){if(!(!e.client||!e.connected))try{const t=await e.client.request("cron.status",{});e.cronStatus=t}catch(t){e.cronError=String(t)}}async function xs(e){if(!(!e.client||!e.connected)&&!e.cronLoading){e.cronLoading=!0,e.cronError=null;try{const t=await e.client.request("cron.list",{includeDisabled:!0});e.cronJobs=Array.isArray(t.jobs)?t.jobs:[]}catch(t){e.cronError=String(t)}finally{e.cronLoading=!1}}}function bu(e){if(e.scheduleKind==="at"){const n=Date.parse(e.scheduleAt);if(!Number.isFinite(n))throw new Error("Invalid run time.");return{kind:"at",at:new Date(n).toISOString()}}if(e.scheduleKind==="every"){const n=as(e.everyAmount,0);if(n<=0)throw new Error("Invalid interval amount.");const s=e.everyUnit;return{kind:"every",everyMs:n*(s==="minutes"?6e4:s==="hours"?36e5:864e5)}}const t=e.cronExpr.trim();if(!t)throw new Error("Cron expression required.");return{kind:"cron",expr:t,tz:e.cronTz.trim()||void 0}}function wu(e){if(e.payloadKind==="systemEvent"){const a=e.payloadText.trim();if(!a)throw new Error("System event text required.");return{kind:"systemEvent",text:a}}const t=e.payloadText.trim();if(!t)throw new Error("Agent message required.");const n={kind:"agentTurn",message:t},s=as(e.timeoutSeconds,0);return s>0&&(n.timeoutSeconds=s),n}async function fi(e){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{const t=bu(e.cronForm),n=wu(e.cronForm),s=e.cronForm.sessionTarget==="isolated"&&e.cronForm.payloadKind==="agentTurn"&&e.cronForm.deliveryMode?{mode:e.cronForm.deliveryMode==="announce"?"announce":"none",channel:e.cronForm.deliveryChannel.trim()||"last",to:e.cronForm.deliveryTo.trim()||void 0}:void 0,a=e.cronForm.agentId.trim(),o={name:e.cronForm.name.trim(),description:e.cronForm.description.trim()||void 0,agentId:a||void 0,enabled:e.cronForm.enabled,schedule:t,sessionTarget:e.cronForm.sessionTarget,wakeMode:e.cronForm.wakeMode,payload:n,delivery:s};if(!o.name)throw new Error("Name required.");await e.client.request("cron.add",o),e.cronForm={...e.cronForm,name:"",description:"",payloadText:""},await xs(e),await Pn(e)}catch(t){e.cronError=String(t)}finally{e.cronBusy=!1}}}async function hi(e,t,n){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.update",{id:t.id,patch:{enabled:n}}),await xs(e),await Pn(e)}catch(s){e.cronError=String(s)}finally{e.cronBusy=!1}}}async function vi(e,t){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.run",{id:t.id,mode:"force"}),await un(e,t.id)}catch(n){e.cronError=String(n)}finally{e.cronBusy=!1}}}async function yi(e,t){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request("cron.remove",{id:t.id}),e.cronRunsJobId===t.id&&(e.cronRunsJobId=null,e.cronRuns=[]),await xs(e),await Pn(e)}catch(n){e.cronError=String(n)}finally{e.cronBusy=!1}}}async function un(e,t){if(!(!e.client||!e.connected))try{const n=await e.client.request("cron.runs",{id:t,limit:50});e.cronRunsJobId=t,e.cronRuns=Array.isArray(n.entries)?n.entries:[]}catch(n){e.cronError=String(n)}}const cr="openclaw.device.auth.v1";function to(e){return e.trim()}function xu(e){if(!Array.isArray(e))return[];const t=new Set;for(const n of e){const s=n.trim();s&&t.add(s)}return[...t].toSorted()}function no(){try{const e=window.localStorage.getItem(cr);if(!e)return null;const t=JSON.parse(e);return!t||t.version!==1||!t.deviceId||typeof t.deviceId!="string"||!t.tokens||typeof t.tokens!="object"?null:t}catch{return null}}function dr(e){try{window.localStorage.setItem(cr,JSON.stringify(e))}catch{}}function $u(e){const t=no();if(!t||t.deviceId!==e.deviceId)return null;const n=to(e.role),s=t.tokens[n];return!s||typeof s.token!="string"?null:s}function ur(e){const t=to(e.role),n={version:1,deviceId:e.deviceId,tokens:{}},s=no();s&&s.deviceId===e.deviceId&&(n.tokens={...s.tokens});const a={token:e.token,role:t,scopes:xu(e.scopes),updatedAtMs:Date.now()};return n.tokens[t]=a,dr(n),a}function pr(e){const t=no();if(!t||t.deviceId!==e.deviceId)return;const n=to(e.role);if(!t.tokens[n])return;const s={...t,tokens:{...t.tokens}};delete s.tokens[n],dr(s)}const gr={p:0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffedn,n:0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3edn,h:8n,a:0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecn,d:0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3n,Gx:0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an,Gy:0x6666666666666666666666666666666666666666666666666666666666666658n},{p:ge,n:Xn,Gx:bi,Gy:wi,a:Bs,d:Hs,h:ku}=gr,Ct=32,so=64,Su=(...e)=>{"captureStackTrace"in Error&&typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(...e)},de=(e="")=>{const t=new Error(e);throw Su(t,de),t},Cu=e=>typeof e=="bigint",Au=e=>typeof e=="string",Mu=e=>e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array",ot=(e,t,n="")=>{const s=Mu(e),a=e?.length,o=t!==void 0;if(!s||o&&a!==t){const l=n&&`"${n}" `,c=o?` of length ${t}`:"",u=s?`length=${a}`:`type=${typeof e}`;de(l+"expected Uint8Array"+c+", got "+u)}return e},$s=e=>new Uint8Array(e),mr=e=>Uint8Array.from(e),fr=(e,t)=>e.toString(16).padStart(t,"0"),hr=e=>Array.from(ot(e)).map(t=>fr(t,2)).join(""),je={_0:48,_9:57,A:65,F:70,a:97,f:102},xi=e=>{if(e>=je._0&&e<=je._9)return e-je._0;if(e>=je.A&&e<=je.F)return e-(je.A-10);if(e>=je.a&&e<=je.f)return e-(je.a-10)},vr=e=>{const t="hex invalid";if(!Au(e))return de(t);const n=e.length,s=n/2;if(n%2)return de(t);const a=$s(s);for(let o=0,l=0;o<s;o++,l+=2){const c=xi(e.charCodeAt(l)),u=xi(e.charCodeAt(l+1));if(c===void 0||u===void 0)return de(t);a[o]=c*16+u}return a},yr=()=>globalThis?.crypto,Eu=()=>yr()?.subtle??de("crypto.subtle must be defined, consider polyfill"),Cn=(...e)=>{const t=$s(e.reduce((s,a)=>s+ot(a).length,0));let n=0;return e.forEach(s=>{t.set(s,n),n+=s.length}),t},Tu=(e=Ct)=>yr().getRandomValues($s(e)),os=BigInt,ht=(e,t,n,s="bad number: out of range")=>Cu(e)&&t<=e&&e<n?e:de(s),B=(e,t=ge)=>{const n=e%t;return n>=0n?n:t+n},br=e=>B(e,Xn),Pu=(e,t)=>{(e===0n||t<=0n)&&de("no inverse n="+e+" mod="+t);let n=B(e,t),s=t,a=0n,o=1n;for(;n!==0n;){const l=s/n,c=s%n,u=a-o*l;s=n,n=c,a=o,o=u}return s===1n?B(a,t):de("no inverse")},_u=e=>{const t=kr[e];return typeof t!="function"&&de("hashes."+e+" not set"),t},zs=e=>e instanceof Te?e:de("Point expected"),ya=2n**256n;class Te{static BASE;static ZERO;X;Y;Z;T;constructor(t,n,s,a){const o=ya;this.X=ht(t,0n,o),this.Y=ht(n,0n,o),this.Z=ht(s,1n,o),this.T=ht(a,0n,o),Object.freeze(this)}static CURVE(){return gr}static fromAffine(t){return new Te(t.x,t.y,1n,B(t.x*t.y))}static fromBytes(t,n=!1){const s=Hs,a=mr(ot(t,Ct)),o=t[31];a[31]=o&-129;const l=xr(a);ht(l,0n,n?ya:ge);const u=B(l*l),f=B(u-1n),p=B(s*u+1n);let{isValid:g,value:$}=Iu(f,p);g||de("bad point: y not sqrt");const k=($&1n)===1n,S=(o&128)!==0;return!n&&$===0n&&S&&de("bad point: x==0, isLastByteOdd"),S!==k&&($=B(-$)),new Te($,l,1n,B($*l))}static fromHex(t,n){return Te.fromBytes(vr(t),n)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}assertValidity(){const t=Bs,n=Hs,s=this;if(s.is0())return de("bad point: ZERO");const{X:a,Y:o,Z:l,T:c}=s,u=B(a*a),f=B(o*o),p=B(l*l),g=B(p*p),$=B(u*t),k=B(p*B($+f)),S=B(g+B(n*B(u*f)));if(k!==S)return de("bad point: equation left != right (1)");const d=B(a*o),m=B(l*c);return d!==m?de("bad point: equation left != right (2)"):this}equals(t){const{X:n,Y:s,Z:a}=this,{X:o,Y:l,Z:c}=zs(t),u=B(n*c),f=B(o*a),p=B(s*c),g=B(l*a);return u===f&&p===g}is0(){return this.equals(Bt)}negate(){return new Te(B(-this.X),this.Y,this.Z,B(-this.T))}double(){const{X:t,Y:n,Z:s}=this,a=Bs,o=B(t*t),l=B(n*n),c=B(2n*B(s*s)),u=B(a*o),f=t+n,p=B(B(f*f)-o-l),g=u+l,$=g-c,k=u-l,S=B(p*$),d=B(g*k),m=B(p*k),h=B($*g);return new Te(S,d,h,m)}add(t){const{X:n,Y:s,Z:a,T:o}=this,{X:l,Y:c,Z:u,T:f}=zs(t),p=Bs,g=Hs,$=B(n*l),k=B(s*c),S=B(o*g*f),d=B(a*u),m=B((n+s)*(l+c)-$-k),h=B(d-S),v=B(d+S),C=B(k-p*$),A=B(m*h),E=B(v*C),T=B(m*C),P=B(h*v);return new Te(A,E,P,T)}subtract(t){return this.add(zs(t).negate())}multiply(t,n=!0){if(!n&&(t===0n||this.is0()))return Bt;if(ht(t,1n,Xn),t===1n)return this;if(this.equals(At))return Ku(t).p;let s=Bt,a=At;for(let o=this;t>0n;o=o.double(),t>>=1n)t&1n?s=s.add(o):n&&(a=a.add(o));return s}multiplyUnsafe(t){return this.multiply(t,!1)}toAffine(){const{X:t,Y:n,Z:s}=this;if(this.equals(Bt))return{x:0n,y:1n};const a=Pu(s,ge);B(s*a)!==1n&&de("invalid inverse");const o=B(t*a),l=B(n*a);return{x:o,y:l}}toBytes(){const{x:t,y:n}=this.assertValidity().toAffine(),s=wr(n);return s[31]|=t&1n?128:0,s}toHex(){return hr(this.toBytes())}clearCofactor(){return this.multiply(os(ku),!1)}isSmallOrder(){return this.clearCofactor().is0()}isTorsionFree(){let t=this.multiply(Xn/2n,!1).double();return Xn%2n&&(t=t.add(this)),t.is0()}}const At=new Te(bi,wi,1n,B(bi*wi)),Bt=new Te(0n,1n,1n,0n);Te.BASE=At;Te.ZERO=Bt;const wr=e=>vr(fr(ht(e,0n,ya),so)).reverse(),xr=e=>os("0x"+hr(mr(ot(e)).reverse())),Oe=(e,t)=>{let n=e;for(;t-- >0n;)n*=n,n%=ge;return n},Lu=e=>{const n=e*e%ge*e%ge,s=Oe(n,2n)*n%ge,a=Oe(s,1n)*e%ge,o=Oe(a,5n)*a%ge,l=Oe(o,10n)*o%ge,c=Oe(l,20n)*l%ge,u=Oe(c,40n)*c%ge,f=Oe(u,80n)*u%ge,p=Oe(f,80n)*u%ge,g=Oe(p,10n)*o%ge;return{pow_p_5_8:Oe(g,2n)*e%ge,b2:n}},$i=0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0n,Iu=(e,t)=>{const n=B(t*t*t),s=B(n*n*t),a=Lu(e*s).pow_p_5_8;let o=B(e*n*a);const l=B(t*o*o),c=o,u=B(o*$i),f=l===e,p=l===B(-e),g=l===B(-e*$i);return f&&(o=c),(p||g)&&(o=u),(B(o)&1n)===1n&&(o=B(-o)),{isValid:f||p,value:o}},ba=e=>br(xr(e)),ao=(...e)=>kr.sha512Async(Cn(...e)),Du=(...e)=>_u("sha512")(Cn(...e)),$r=e=>{const t=e.slice(0,Ct);t[0]&=248,t[31]&=127,t[31]|=64;const n=e.slice(Ct,so),s=ba(t),a=At.multiply(s),o=a.toBytes();return{head:t,prefix:n,scalar:s,point:a,pointBytes:o}},oo=e=>ao(ot(e,Ct)).then($r),Ru=e=>$r(Du(ot(e,Ct))),Nu=e=>oo(e).then(t=>t.pointBytes),Uu=e=>ao(e.hashable).then(e.finish),Ou=(e,t,n)=>{const{pointBytes:s,scalar:a}=e,o=ba(t),l=At.multiply(o).toBytes();return{hashable:Cn(l,s,n),finish:f=>{const p=br(o+ba(f)*a);return ot(Cn(l,wr(p)),so)}}},Fu=async(e,t)=>{const n=ot(e),s=await oo(t),a=await ao(s.prefix,n);return Uu(Ou(s,a,n))},kr={sha512Async:async e=>{const t=Eu(),n=Cn(e);return $s(await t.digest("SHA-512",n.buffer))},sha512:void 0},Bu=(e=Tu(Ct))=>e,Hu={getExtendedPublicKeyAsync:oo,getExtendedPublicKey:Ru,randomSecretKey:Bu},is=8,zu=256,Sr=Math.ceil(zu/is)+1,wa=2**(is-1),Wu=()=>{const e=[];let t=At,n=t;for(let s=0;s<Sr;s++){n=t,e.push(n);for(let a=1;a<wa;a++)n=n.add(t),e.push(n);t=n.double()}return e};let ki;const Si=(e,t)=>{const n=t.negate();return e?n:t},Ku=e=>{const t=ki||(ki=Wu());let n=Bt,s=At;const a=2**is,o=a,l=os(a-1),c=os(is);for(let u=0;u<Sr;u++){let f=Number(e&l);e>>=c,f>wa&&(f-=o,e+=1n);const p=u*wa,g=p,$=p+Math.abs(f)-1,k=u%2!==0,S=f<0;f===0?s=s.add(Si(k,t[g])):n=n.add(Si(S,t[$]))}return e!==0n&&de("invalid wnaf"),{p:n,f:s}},Ws="openclaw-device-identity-v1";function xa(e){let t="";for(const n of e)t+=String.fromCharCode(n);return btoa(t).replaceAll("+","-").replaceAll("/","_").replace(/=+$/g,"")}function Cr(e){const t=e.replaceAll("-","+").replaceAll("_","/"),n=t+"=".repeat((4-t.length%4)%4),s=atob(n),a=new Uint8Array(s.length);for(let o=0;o<s.length;o+=1)a[o]=s.charCodeAt(o);return a}function qu(e){return Array.from(e).map(t=>t.toString(16).padStart(2,"0")).join("")}async function Ar(e){const t=await crypto.subtle.digest("SHA-256",e.slice().buffer);return qu(new Uint8Array(t))}async function ju(){const e=Hu.randomSecretKey(),t=await Nu(e);return{deviceId:await Ar(t),publicKey:xa(t),privateKey:xa(e)}}async function io(){try{const n=localStorage.getItem(Ws);if(n){const s=JSON.parse(n);if(s?.version===1&&typeof s.deviceId=="string"&&typeof s.publicKey=="string"&&typeof s.privateKey=="string"){const a=await Ar(Cr(s.publicKey));if(a!==s.deviceId){const o={...s,deviceId:a};return localStorage.setItem(Ws,JSON.stringify(o)),{deviceId:a,publicKey:s.publicKey,privateKey:s.privateKey}}return{deviceId:s.deviceId,publicKey:s.publicKey,privateKey:s.privateKey}}}}catch{}const e=await ju(),t={version:1,deviceId:e.deviceId,publicKey:e.publicKey,privateKey:e.privateKey,createdAtMs:Date.now()};return localStorage.setItem(Ws,JSON.stringify(t)),e}async function Qu(e,t){const n=Cr(e),s=new TextEncoder().encode(t),a=await Fu(s,n);return xa(a)}async function it(e,t){if(!(!e.client||!e.connected)&&!e.devicesLoading){e.devicesLoading=!0,t?.quiet||(e.devicesError=null);try{const n=await e.client.request("device.pair.list",{});e.devicesList={pending:Array.isArray(n?.pending)?n.pending:[],paired:Array.isArray(n?.paired)?n.paired:[]}}catch(n){t?.quiet||(e.devicesError=String(n))}finally{e.devicesLoading=!1}}}async function Vu(e,t){if(!(!e.client||!e.connected))try{await e.client.request("device.pair.approve",{requestId:t}),await it(e)}catch(n){e.devicesError=String(n)}}async function Gu(e,t){if(!(!e.client||!e.connected||!window.confirm("Reject this device pairing request?")))try{await e.client.request("device.pair.reject",{requestId:t}),await it(e)}catch(s){e.devicesError=String(s)}}async function Ju(e,t){if(!(!e.client||!e.connected))try{const n=await e.client.request("device.token.rotate",t);if(n?.token){const s=await io(),a=n.role??t.role;(n.deviceId===s.deviceId||t.deviceId===s.deviceId)&&ur({deviceId:s.deviceId,role:a,token:n.token,scopes:n.scopes??t.scopes??[]}),window.prompt("New device token (copy and store securely):",n.token)}await it(e)}catch(n){e.devicesError=String(n)}}async function Yu(e,t){if(!(!e.client||!e.connected||!window.confirm(`Revoke token for ${t.deviceId} (${t.role})?`)))try{await e.client.request("device.token.revoke",t);const s=await io();t.deviceId===s.deviceId&&pr({deviceId:s.deviceId,role:t.role}),await it(e)}catch(s){e.devicesError=String(s)}}function Zu(e){if(!e||e.kind==="gateway")return{method:"exec.approvals.get",params:{}};const t=e.nodeId.trim();return t?{method:"exec.approvals.node.get",params:{nodeId:t}}:null}function Xu(e,t){if(!e||e.kind==="gateway")return{method:"exec.approvals.set",params:t};const n=e.nodeId.trim();return n?{method:"exec.approvals.node.set",params:{...t,nodeId:n}}:null}async function lo(e,t){if(!(!e.client||!e.connected)&&!e.execApprovalsLoading){e.execApprovalsLoading=!0,e.lastError=null;try{const n=Zu(t);if(!n){e.lastError="Select a node before loading exec approvals.";return}const s=await e.client.request(n.method,n.params);ep(e,s)}catch(n){e.lastError=String(n)}finally{e.execApprovalsLoading=!1}}}function ep(e,t){e.execApprovalsSnapshot=t,e.execApprovalsDirty||(e.execApprovalsForm=Z(t.file??{}))}async function tp(e,t){if(!(!e.client||!e.connected)){e.execApprovalsSaving=!0,e.lastError=null;try{const n=e.execApprovalsSnapshot?.hash;if(!n){e.lastError="Exec approvals hash missing; reload and retry.";return}const s=e.execApprovalsForm??e.execApprovalsSnapshot?.file??{},a=Xu(t,{file:s,baseHash:n});if(!a){e.lastError="Select a node before saving exec approvals.";return}await e.client.request(a.method,a.params),e.execApprovalsDirty=!1,await lo(e,t)}catch(n){e.lastError=String(n)}finally{e.execApprovalsSaving=!1}}}function np(e,t,n){const s=Z(e.execApprovalsForm??e.execApprovalsSnapshot?.file??{});vs(s,t,n),e.execApprovalsForm=s,e.execApprovalsDirty=!0}function sp(e,t){const n=Z(e.execApprovalsForm??e.execApprovalsSnapshot?.file??{});er(n,t),e.execApprovalsForm=n,e.execApprovalsDirty=!0}async function Mr(e){if(!(!e.client||!e.connected)&&!e.presenceLoading){e.presenceLoading=!0,e.presenceError=null,e.presenceStatus=null;try{const t=await e.client.request("system-presence",{});Array.isArray(t)?(e.presenceEntries=t,e.presenceStatus=t.length===0?"No instances yet.":null):(e.presenceEntries=[],e.presenceStatus="No presence payload.")}catch(t){e.presenceError=String(t)}finally{e.presenceLoading=!1}}}async function ap(e,t){if(!e.client||!e.connected)return null;try{const n={};t?.label?.trim();const s=await e.client.request("sessions.create",n);return s?.ok&&s.key?(await Re(e),s):null}catch{return null}}async function Re(e,t){if(!(!e.client||!e.connected)&&!e.sessionsLoading){e.sessionsLoading=!0,e.sessionsError=null;try{const n=t?.includeGlobal??e.sessionsIncludeGlobal,s=t?.includeUnknown??e.sessionsIncludeUnknown,a=t?.activeMinutes??as(e.sessionsFilterActive,0),o=t?.limit??as(e.sessionsFilterLimit,0),l={includeGlobal:n,includeUnknown:s};a>0&&(l.activeMinutes=a),o>0&&(l.limit=o),t?.includeLastMessage&&(l.includeLastMessage=!0);const c=await e.client.request("sessions.list",l);c&&(e.sessionsResult=c)}catch(n){e.sessionsError=String(n)}finally{e.sessionsLoading=!1}}}async function Ci(e,t,n){if(!e.client||!e.connected)return;const s={key:t};"label"in n&&(s.label=n.label),"thinkingLevel"in n&&(s.thinkingLevel=n.thinkingLevel),"verboseLevel"in n&&(s.verboseLevel=n.verboseLevel),"reasoningLevel"in n&&(s.reasoningLevel=n.reasoningLevel);try{await e.client.request("sessions.patch",s),await Re(e,{includeLastMessage:!0})}catch(a){e.sessionsError=String(a)}}async function op(e,t){if(!(!e.client||!e.connected||e.sessionsLoading||!window.confirm(`Delete session "${t}"?

Deletes the session entry and archives its transcript.`))){e.sessionsLoading=!0,e.sessionsError=null;try{await e.client.request("sessions.delete",{key:t,deleteTranscript:!0}),e.sessionsLoading=!1,await Re(e)}catch(s){e.sessionsError=String(s)}finally{e.sessionsLoading=!1}}}async function ip(e,t){if(!e.client||!e.connected||e.sessionsLoading)return;const n=Array.from(new Set(t.filter(o=>o&&o!=="agent.main.main")));if(n.length===0)return;const s=n.length===1?`Delete session "${n[0]}"?`:`Delete ${n.length} sessions?

First: "${n[0]}"`;if(window.confirm(`${s}

Deletes the session entries and archives their transcripts.`)){e.sessionsLoading=!0,e.sessionsError=null;try{for(const o of n)await e.client.request("sessions.delete",{key:o,deleteTranscript:!0});e.sessionsLoading=!1,await Re(e)}catch(o){e.sessionsError=String(o)}finally{e.sessionsLoading=!1}}}async function Ge(e){if(!(!e.client||!e.connected)){e.digitalEmployeesLoading=!0,e.digitalEmployeesError=null;try{const t=await e.client.request("employees.list",{});e.digitalEmployees=t?.employees??[]}catch(t){e.digitalEmployeesError=String(t)}finally{e.digitalEmployeesLoading=!1}}}function Er(e){let t=e.trim();if(!t)return"";const n=[/\.zip$/i,/\.tar\.gz$/i,/\.tgz$/i,/\.md$/i];for(const s of n)t=t.replace(s,"");return t.trim()||""}async function Ai(e){if(!e.client||!e.connected)return;const t=e.digitalEmployeeCreateName?.trim();if(!t){e.digitalEmployeeCreateError="名称不能为空";return}e.digitalEmployeeCreateBusy=!0,e.digitalEmployeeCreateError=null,e.digitalEmployeeSkillUploadError=null;let n;const s=e.digitalEmployeeCreateMcpJson?.trim();if(s)try{const a=JSON.parse(s);a&&typeof a=="object"&&Object.keys(a).length>0&&(n=a)}catch{e.digitalEmployeeCreateError="MCP 配置 JSON 格式无效",e.digitalEmployeeCreateBusy=!1;return}try{const a={name:t,description:e.digitalEmployeeCreateDescription??"",prompt:e.digitalEmployeeCreatePrompt??"",enabled:!0};n&&(a.mcpServers=n);const l=(await e.client.request("employees.create",a))?.id??lp(t),c=e.digitalEmployeeSkillUploadFiles??[],u=e.digitalEmployeeSkillUploadName?.trim();for(let f=0;f<c.length;f++){const p=c[f],g=u&&c.length===1?u:Er(p.name),$=await Tr(e,l,g,p);if(!$.ok){e.digitalEmployeeCreateError=$.error??"技能文件上传失败";return}}e.digitalEmployeeCreateName="",e.digitalEmployeeCreateDescription="",e.digitalEmployeeCreatePrompt="",e.digitalEmployeeCreateMcpJson="",e.digitalEmployeeSkillUploadName="",e.digitalEmployeeSkillUploadFiles=[],e.digitalEmployeeSkillUploadError=null,await Ge(e)}catch(a){e.digitalEmployeeCreateError=String(a)}finally{e.digitalEmployeeCreateBusy=!1}}function lp(e){const t=e.trim().toLowerCase();if(!t)return"employee";let n="";for(const s of t)s>="a"&&s<="z"||s>="0"&&s<="9"?n+=s:(s==="-"||s==="_"||s===" ")&&(n+="-");return n=n.replace(/-+/g,"-").replace(/^-+/,"").replace(/-+$/,""),n||"employee"}async function rp(e,t,n){if(!(!e.client||!e.connected))try{await e.client.request("employees.create",{id:t,enabled:n}),await Ge(e)}catch(s){e.digitalEmployeesError=String(s)}}async function Mi(e,t){if(!(!e.client||!e.connected))try{await e.client.request("employees.delete",{id:t}),await Ge(e)}catch(n){e.digitalEmployeesError=String(n)}}async function $a(e,t){if(!e.client||!e.connected)return null;try{return await e.client.request("employees.get",{id:t})??null}catch{return null}}function Ks(e){return e.trim().toLowerCase()}function cp(e,t){const n=e.trim()||"employee",s=new Set(t.map(Ks)),a=`${n} copy`;if(!s.has(Ks(a)))return a;for(let o=2;o<=99;o++){const l=`${n} copy ${o}`;if(!s.has(Ks(l)))return l}return`${n} copy ${Date.now()}`}async function dp(e,t){if(!(!e.client||!e.connected)){e.digitalEmployeesError=null,e.digitalEmployeesLoading=!0;try{const n=await $a(e,t);if(!n){e.digitalEmployeesError="无法加载员工详情";return}const s=(n.name||n.id||t).trim(),o={name:cp(s||"employee",(e.digitalEmployees??[]).map(l=>l.name||"")),description:n.description??"",prompt:n.prompt??"",enabled:n.enabled!==!1};n.mcpServers&&(o.mcpServers=n.mcpServers),Array.isArray(n.skillIds)&&n.skillIds.length>0&&(o.skillIds=n.skillIds),await e.client.request("employees.create",o),await Ge(e)}catch(n){e.digitalEmployeesError=String(n)}finally{e.digitalEmployeesLoading=!1}}}async function Ei(e){if(!e.client||!e.connected)return;const t=e.digitalEmployeeEditId?.trim();if(!t){e.digitalEmployeeEditError="员工 ID 不能为空";return}e.digitalEmployeeEditBusy=!0,e.digitalEmployeeEditError=null;let n;const s=e.digitalEmployeeEditMcpJson?.trim();try{if(s){const a=JSON.parse(s);a&&typeof a=="object"&&(n=a)}else n={}}catch{e.digitalEmployeeEditError="MCP 配置 JSON 格式无效",e.digitalEmployeeEditBusy=!1;return}try{const a={id:t,description:e.digitalEmployeeEditDescription??"",prompt:e.digitalEmployeeEditPrompt??"",enabled:e.digitalEmployeeEditEnabled!==!1,mcpServers:n??{}};await e.client.request("employees.create",a);for(const l of e.digitalEmployeeEditSkillsToDelete??[])if(!await up(e,t,l)){e.digitalEmployeeEditError=`删除技能 ${l} 失败`;return}const o=e.digitalEmployeeEditSkillFilesToUpload??[];for(let l=0;l<o.length;l++){const c=o[l],u=Er(c.name),f=await Tr(e,t,u,c);if(!f.ok){e.digitalEmployeeEditError=f.error??"技能文件上传失败";return}}e.digitalEmployeeEditModalOpen=!1,e.digitalEmployeeEditId="",e.digitalEmployeeEditName="",e.digitalEmployeeEditDescription="",e.digitalEmployeeEditPrompt="",e.digitalEmployeeEditMcpJson="",e.digitalEmployeeEditSkillNames=[],e.digitalEmployeeEditSkillFilesToUpload=[],e.digitalEmployeeEditSkillsToDelete=[],await Ge(e)}catch(a){e.digitalEmployeeEditError=String(a)}finally{e.digitalEmployeeEditBusy=!1}}async function up(e,t,n){const s=e.settings.gatewayUrl?.trim();if(!s)return!1;const a=Vt(s);if(!a)return!1;const o={},l=e.settings?.token?.trim();l&&(o.Authorization=`Bearer ${l}`);try{const c=new URL(`${a.replace(/\/$/,"")}/api/employee-skills/delete`);c.searchParams.set("employeeId",t.trim()),c.searchParams.set("name",n.trim());const u=await fetch(c.toString(),{method:"DELETE",headers:o});if(u.status===401)throw new Error("认证失败：网关令牌无效或未提供，请在 Overview 中配置正确的 Gateway Token");const f=await u.json();return u.ok&&f.ok===!0}catch(c){throw(c instanceof Error?c.message:String(c))==="Failed to fetch"?new Error("网络请求失败，请检查网络连接"):c}}async function Tr(e,t,n,s){const a=e.settings.gatewayUrl?.trim();if(!a)return{ok:!1,error:"Gateway URL 未配置"};const o=Vt(a);if(!o)return{ok:!1,error:"Gateway URL 无效"};const l=new FormData;l.append("employeeId",t.trim()),n.trim()&&l.append("name",n.trim()),l.append("file",s);const c={},u=e.settings?.token?.trim();u&&(c.Authorization=`Bearer ${u}`);try{const f=await fetch(`${o.replace(/\/$/,"")}/api/employee-skills/upload`,{method:"POST",headers:c,body:l}),p=await f.json();return!f.ok||p.ok===!1?{ok:!1,error:f.status===401?"认证失败：网关令牌无效或未提供，请在 Overview 中配置正确的 Gateway Token":p.error??`上传失败 (${f.status})`,template:p.template}:{ok:!0}}catch(f){const p=f instanceof Error?f.message:String(f);return{ok:!1,error:p==="Failed to fetch"?"网络请求失败，请检查网络连接":p}}}async function ro(e,t){if(!(!e.client||!e.connected)&&!e.llmTraceLoading){e.llmTraceLoading=!0,e.llmTraceError=null;try{const n=t?.mode??e.llmTraceMode,s=await e.client.request("trace.list",{mode:n});s&&(e.llmTraceResult=s)}catch(n){e.llmTraceError=String(n)}finally{e.llmTraceLoading=!1}}}async function Pr(e,t){if(!e.client||!e.connected)return null;try{return(await e.client.request("trace.content",{sessionId:t}))?.content??null}catch{return null}}function vt(e){const t=e.configForm??e.configSnapshot?.config;if(t&&typeof t=="object"){const n=t.gateway;if(n&&typeof n=="object"){const s=n.llmTrace;e.llmTraceEnabled=!!(s&&typeof s=="object"&&s.enabled===!0);return}}e.llmTraceEnabled=!1}function pp(e){ro(e)}function gp(e,t){e.llmTraceMode=t,ro(e,{mode:t})}function mp(e,t){e.llmTraceSearch=t}function fp(e){if(!e.client||!e.connected)return;const t=Z(e.configForm??e.configSnapshot?.config??{});t.gateway||(t.gateway={});const n=t.gateway;n.llmTrace||(n.llmTrace={});const s=n.llmTrace,a=s.enabled!==!0;s.enabled=a,e.llmTraceSaving=!0,e.lastError=null,Ae(e,{gateway:t.gateway}).then(()=>J(e)).then(()=>{vt(e)}).catch(o=>{e.lastError=String(o)}).finally(()=>{e.llmTraceSaving=!1})}async function hp(e,t){e.llmTraceViewingSessionId=t,e.llmTraceViewContent=null,e.llmTraceViewLoading=!0,e.llmTraceError=null;try{const n=await Pr(e,t);n?e.llmTraceViewContent=n:(e.llmTraceError="Failed to load trace content.",e.llmTraceViewingSessionId=null)}catch(n){e.llmTraceError=String(n),e.llmTraceViewingSessionId=null}finally{e.llmTraceViewLoading=!1}}function vp(e){e.llmTraceViewContent=null,e.llmTraceViewingSessionId=null}async function yp(e,t){try{const n=await Pr(e,t);if(n){const s=new Blob([n],{type:"text/html"}),a=URL.createObjectURL(s),o=document.createElement("a");o.href=a,o.download=`${t}.html`,o.click(),URL.revokeObjectURL(a)}else e.llmTraceError="Failed to load trace content."}catch(n){e.llmTraceError=String(n)}}const bp={off:{preset:"off",sandbox:{enabled:!1},commandPolicy:{enabled:!1},approvalQueue:{enabled:!1}},loose:{preset:"loose",sandbox:{enabled:!0,allowedPaths:["/tmp","./workspace","/var/lib/agent/data"],networkAllow:["localhost","127.0.0.1","*"],resourceLimit:{maxCpuPercent:60,maxMemoryBytes:1024**3,maxDiskBytes:1024**3}},commandPolicy:{enabled:!0,defaultPolicy:"allow",deny:["sudo","rm -rf","dd","mkfs"],ask:[],allow:[],banArguments:["--no-preserve-root","/dev/"],maxLength:4096},approvalQueue:{enabled:!1,timeoutSeconds:300,blockOnApproval:!1}},standard:{preset:"standard",sandbox:{enabled:!0,allowedPaths:["/tmp","./workspace","/var/lib/agent/data"],networkAllow:["localhost","127.0.0.1","*.anthropic.com","*.openai.com"],resourceLimit:{maxCpuPercent:60,maxMemoryBytes:1024**3,maxDiskBytes:1024**3}},commandPolicy:{enabled:!0,defaultPolicy:"ask",deny:["sudo","dd","mkfs","rm -rf"],ask:["rm","mv","cp"],allow:["ls","pwd","echo"],banArguments:["--no-preserve-root","/dev/"],maxLength:4096},approvalQueue:{enabled:!0,timeoutSeconds:300,blockOnApproval:!0}},strict:{preset:"strict",sandbox:{enabled:!0,allowedPaths:["./workspace","/tmp"],networkAllow:["localhost","127.0.0.1"],resourceLimit:{maxCpuPercent:60,maxMemoryBytes:512*1024*1024,maxDiskBytes:1024**3}},commandPolicy:{enabled:!0,defaultPolicy:"deny",deny:["sudo","dd","mkfs","rm -rf","rm -r"],ask:["rm","mv","cp","curl","wget"],allow:["ls","pwd","echo","cat"],banArguments:["--no-preserve-root","/dev/","../"],maxLength:4096},approvalQueue:{enabled:!0,timeoutSeconds:300,blockOnApproval:!0}}};function ka(e){const t=e.configForm??e.configSnapshot?.config;if(!t||typeof t!="object")return null;const n=t.security??{};if(!n||typeof n!="object")return null;const s=n.sandbox??{},a=n.commandPolicy??{},o=n.approvalQueue??{},l=n.validator??{},c=n.preset;let u=a;return!((a?.deny?.length??0)>0||(a?.ask?.length??0)>0||(a?.allow?.length??0)>0)&&(l||o)&&(u=xp(l,o)),{preset:c,sandbox:s??{},commandPolicy:u??{},approvalQueue:o??{},validator:l??{}}}function qs(e){return Array.isArray(e)?e:[]}function wp(e){return{enabled:e?.enabled,defaultPolicy:e?.defaultPolicy??"ask",deny:qs(e?.deny).filter(Boolean),ask:qs(e?.ask).filter(Boolean),allow:qs(e?.allow).filter(Boolean),rules:null,banArguments:e?.banArguments??[],maxLength:e?.maxLength??4096,secretPatterns:e?.secretPatterns??[]}}function xp(e,t){const n=[],s=[],a=[];if(e?.banCommands)for(const o of e.banCommands)o&&n.push(o);if(e?.banFragments)for(const o of e.banFragments)o&&n.push(o);if(t?.deny)for(const o of t.deny)o&&n.push(o);if(t?.allow)for(const o of t.allow)o&&a.push(o);if(t?.ask)for(const o of t.ask)o&&s.push(o);return{enabled:e?.enabled!==!1,defaultPolicy:"ask",deny:n,ask:s,allow:a,banArguments:e?.banArguments,maxLength:e?.maxLength??4096,secretPatterns:e?.secretPatterns}}async function $p(e,t){if(!(!e.client||!e.connected)){e.configSaving=!0,e.lastError=null;try{const n=t.sandbox??{},s=t.commandPolicy??{},a=t.approvalQueue??{},o={preset:t.preset,sandbox:{enabled:n.enabled,allowedPaths:n.allowedPaths,networkAllow:n.networkAllow,root:n.root,resourceLimit:n.resourceLimit,approvalStore:n.approvalStore},commandPolicy:wp(s),approvalQueue:{enabled:a.enabled,timeoutSeconds:a.timeoutSeconds??300,blockOnApproval:a.blockOnApproval??!0}};await Ae(e,{security:o}),await J(e)}finally{e.configSaving=!1}}}function co(e){const t=ka(e);return t==null?null:Z(t)}function kp(e,t){if(!e.client||!e.connected)return;const n=bp[t],s=Z(e.configForm??e.configSnapshot?.config??{});(!s.security||typeof s.security!="object")&&(s.security={});const a=s.security;Object.assign(a,n);const o=a.commandPolicy;o&&typeof o=="object"&&(o.rules=null),e.securityForm=Z(n),e.configSaving=!0,e.lastError=null,Ae(e,{security:a}).then(()=>J(e)).finally(()=>{e.configSaving=!1})}function Sp(e,t,n,s){vs(t,n,s),e.securityForm=Z(t)}async function Cp(e,t){const s=Z(t??{}),a=s.sandbox?.resourceLimit??{};let o=null;if(typeof a.maxMemoryBytes=="string"){const l=Ti(a.maxMemoryBytes);l==null&&a.maxMemoryBytes.trim()!==""?o="Invalid max memory format, use e.g. 1G, 512M, 1024":a.maxMemoryBytes=l??void 0}if(!o&&typeof a.maxDiskBytes=="string"){const l=Ti(a.maxDiskBytes);l==null&&a.maxDiskBytes.trim()!==""?o="Invalid max disk format, use e.g. 10G, 100G, 10240":a.maxDiskBytes=l??void 0}if(o){e.lastError=o;return}(!a.maxCpuPercent||a.maxCpuPercent<=0)&&(a.maxCpuPercent=60),(typeof a.maxMemoryBytes!="number"||a.maxMemoryBytes<=0)&&(a.maxMemoryBytes=1024**3),(typeof a.maxDiskBytes!="number"||a.maxDiskBytes<=0)&&(a.maxDiskBytes=1024**3),s.sandbox||(s.sandbox={}),s.sandbox.resourceLimit=a,await $p(e,s),e.securityForm=co(e)}function Ti(e){const t=e.trim();if(!t)return null;const n=t.match(/^(\d+(?:\.\d+)?)(\s*)([kKmMgGtT]?[bB]?)?$/);if(!n)return null;const s=Number.parseFloat(n[1]);if(!Number.isFinite(s))return null;const a=(n[3]??"").toUpperCase();let o=1;switch(a){case"K":case"KB":o=1024;break;case"M":case"MB":o=1024**2;break;case"G":case"GB":o=1024**3;break;case"T":case"TB":o=1024**4;break;default:o=1;break}return Math.round(s*o)}async function _n(e){if(!(!e.client||!e.connected)){e.approvalsLoading=!0,e.approvalsError=null;try{const n=await e.client.request("approvals.list",{})??{storePath:"",entries:[]},s=n.entries??[];e.approvalsResult={storePath:n.storePath,entries:s,approved:n.approved??s.filter(a=>a.status==="approved"),pending:n.pending??s.filter(a=>a.status==="pending"||a.status==="expired"),denied:n.denied??s.filter(a=>a.status==="denied"),whitelisted:n.whitelisted??[]}}catch(t){e.approvalsError=String(t),e.approvalsResult=null}finally{e.approvalsLoading=!1}}}async function Ap(e,t,n){!e.client||!e.connected||(await e.client.request("approvals.approve",{requestId:t,approverId:n}),await _n(e))}async function Mp(e,t,n,s){!e.client||!e.connected||(await e.client.request("approvals.deny",{requestId:t,approverId:n,reason:s??""}),await _n(e))}async function Ep(e,t,n){!e.client||!e.connected||(await e.client.request("approvals.whitelistSession",{requestId:t,approverId:n}),await _n(e))}function Pi(e,t,n){if(!t.trim())return;const s={...e.skillMessages};n?s[t]=n:delete s[t],e.skillMessages=s}function uo(e){return e instanceof Error?e.message:String(e)}async function An(e,t){if(t?.clearMessages&&Object.keys(e.skillMessages).length>0&&(e.skillMessages={}),!(!e.client||!e.connected)&&!e.skillsLoading){e.skillsLoading=!0,e.skillsError=null;try{const n=await e.client.request("skills.status",{});n&&(e.skillsReport=n)}catch(n){e.skillsError=uo(n)}finally{e.skillsLoading=!1}}}async function Tp(e,t,n){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{await e.client.request("skills.update",{skillKey:t,enabled:n}),await An(e),Pi(e,t,{kind:"success",message:n?"Skill enabled":"Skill disabled"})}catch(s){const a=uo(s);e.skillsError=a,Pi(e,t,{kind:"error",message:a})}finally{e.skillsBusyKey=null}}}async function Pp(e,t,n){const s=e.gatewayUrl?Vt(e.gatewayUrl):"";if(!s)return{ok:!1,error:"Gateway URL not configured"};const a=new FormData;a.append("name",t.trim()),a.append("file",n);const o={};e.token?.trim()&&(o.Authorization=`Bearer ${e.token.trim()}`);try{const l=await fetch(`${s.replace(/\/$/,"")}/api/skills/upload`,{method:"POST",headers:o,body:a}),c=await l.json();return l.ok?{ok:!0}:{ok:!1,error:l.status===401?"认证失败：网关令牌无效或未提供，请在 Overview 中配置正确的 Gateway Token":c.error??`Upload failed (${l.status})`,template:c.template}}catch(l){const c=l instanceof Error?l.message:String(l);return{ok:!1,error:c==="Failed to fetch"?"网络请求失败，请检查网络连接":c}}}async function _p(e,t){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{await e.client.request("skills.delete",{skillKey:t}),await An(e,{clearMessages:!0})}catch(n){e.skillsError=uo(n)}finally{e.skillsBusyKey=null}}}const _r={message:"/message",scheduledTasks:"/scheduled-tasks",cronHistory:"/cron-history",employeeMarket:"/employee-market",skillLibrary:"/skill-library",toolLibrary:"/tool-library",tutorials:"/tutorials",aboutUs:"/about-us",community:"/community",agents:"/agents",overview:"/overview",channels:"/channels",instances:"/instances",sessions:"/sessions",usage:"/usage",cron:"/cron",skills:"/skills",mcp:"/mcp",nodes:"/nodes",chat:"/chat",digitalEmployee:"/digital-employee",config:"/config",envVars:"/env-vars",models:"/models",debug:"/debug",logs:"/logs",llmTrace:"/llm-trace",sandbox:"/sandbox"},Lr=new Map(Object.entries(_r).map(([e,t])=>[t,e]));function Ln(e){if(!e)return"";let t=e.trim();return t.startsWith("/")||(t=`/${t}`),t==="/"?"":(t.endsWith("/")&&(t=t.slice(0,-1)),t)}function Mn(e){if(!e)return"/";let t=e.trim();return t.startsWith("/")||(t=`/${t}`),t.length>1&&t.endsWith("/")&&(t=t.slice(0,-1)),t}function In(e,t=""){const n=Ln(t),s=_r[e];return n?`${n}${s}`:s}function Ir(e,t=""){const n=Ln(t);let s=e||"/";n&&(s===n?s="/":s.startsWith(`${n}/`)&&(s=s.slice(n.length)));let a=Mn(s).toLowerCase();return a.endsWith("/index.html")&&(a="/"),a==="/"?"message":Lr.get(a)??null}function Lp(e){let t=Mn(e);if(t.endsWith("/index.html")&&(t=Mn(t.slice(0,-11))),t==="/")return"";const n=t.split("/").filter(Boolean);if(n.length===0)return"";for(let s=0;s<n.length;s++){const a=`/${n.slice(s).join("/")}`.toLowerCase();if(Lr.has(a)){const o=n.slice(0,s);return o.length?`/${o.join("/")}`:""}}return`/${n.join("/")}`}function Dr(e){switch(e){case"message":return"messageSquare";case"scheduledTasks":return"alarmClock";case"cronHistory":return"scrollText";case"employeeMarket":return"users";case"skillLibrary":return"zap";case"toolLibrary":return"wrench";case"tutorials":return"book";case"aboutUs":return"info";case"community":return"globe";case"agents":return"folder";case"chat":return"messageSquare";case"digitalEmployee":return"users";case"overview":return"barChart";case"channels":return"link";case"instances":return"radio";case"sessions":return"fileText";case"usage":return"barChart";case"cron":return"loader";case"skills":return"zap";case"mcp":return"folder";case"llmTrace":return"scrollText";case"sandbox":return"sandbox";case"nodes":return"monitor";case"config":return"settings";case"envVars":return"settings";case"models":return"folder";case"debug":return"bug";case"logs":return"scrollText";default:return"folder"}}function Sa(e){switch(e){case"message":return"消息";case"scheduledTasks":return"定时任务";case"cronHistory":return"运行历史";case"employeeMarket":return"员工市场";case"skillLibrary":return"技能库";case"toolLibrary":return"工具库";case"tutorials":return"教程";case"aboutUs":return"关于我们";case"community":return"社区";case"agents":return i("navTitleAgents");case"overview":return i("navTitleOverview");case"channels":return i("navTitleChannels");case"instances":return i("navTitleInstances");case"sessions":return i("navTitleSessions");case"usage":return i("navTitleUsage");case"cron":return i("navTitleCron");case"skills":return i("navTitleSkills");case"mcp":return i("navTitleMcp");case"llmTrace":return i("navTitleLlmTrace");case"sandbox":return i("navTitleSandbox");case"nodes":return i("navTitleNodes");case"chat":return i("navTitleChat");case"digitalEmployee":return i("navTitleDigitalEmployee");case"config":return i("navTitleConfig");case"envVars":return i("navTitleEnvVars");case"models":return i("navTitleModels");case"debug":return i("navTitleDebug");case"logs":return i("navTitleLogs");default:return i("navTitleControl")}}const Rr="openclaw.control.settings.v1",Ip="edc146993b5ae0b1544c3137cc888f94436cf11e1952cff6";function Dp(){const t={gatewayUrl:typeof location<"u"&&location.port==="5173"?"127.0.0.1:18900":typeof location<"u"?location.host:"127.0.0.1:18900",token:Ip,sessionKey:"main",lastActiveSessionKey:"main",theme:"light",chatFocusMode:!1,chatShowThinking:!0,splitRatio:.6,navCollapsed:!1,navGroupsCollapsed:{}};try{const n=localStorage.getItem(Rr);if(!n)return t;const s=JSON.parse(n);return{gatewayUrl:typeof s.gatewayUrl=="string"&&s.gatewayUrl.trim()?ys(s.gatewayUrl.trim()):t.gatewayUrl,token:typeof s.token=="string"&&s.token.trim()?s.token.trim():t.token,sessionKey:typeof s.sessionKey=="string"&&s.sessionKey.trim()?s.sessionKey.trim():t.sessionKey,lastActiveSessionKey:typeof s.lastActiveSessionKey=="string"&&s.lastActiveSessionKey.trim()?s.lastActiveSessionKey.trim():typeof s.sessionKey=="string"&&s.sessionKey.trim()||t.lastActiveSessionKey,theme:s.theme==="light"||s.theme==="dark"||s.theme==="system"?s.theme:t.theme,chatFocusMode:typeof s.chatFocusMode=="boolean"?s.chatFocusMode:t.chatFocusMode,chatShowThinking:typeof s.chatShowThinking=="boolean"?s.chatShowThinking:t.chatShowThinking,splitRatio:typeof s.splitRatio=="number"&&s.splitRatio>=.4&&s.splitRatio<=.7?s.splitRatio:t.splitRatio,navCollapsed:typeof s.navCollapsed=="boolean"?s.navCollapsed:t.navCollapsed,navGroupsCollapsed:typeof s.navGroupsCollapsed=="object"&&s.navGroupsCollapsed!==null?s.navGroupsCollapsed:t.navGroupsCollapsed}}catch{return t}}function Rp(e){localStorage.setItem(Rr,JSON.stringify(e))}const Kn=e=>Number.isNaN(e)?.5:e<=0?0:e>=1?1:e,Np=()=>typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches??!1,qn=e=>{e.classList.remove("theme-transition"),e.style.removeProperty("--theme-switch-x"),e.style.removeProperty("--theme-switch-y")},Up=({nextTheme:e,applyTheme:t,context:n,currentTheme:s})=>{if(s===e)return;const a=globalThis.document??null;if(!a){t();return}const o=a.documentElement,l=a,c=Np();if(!!l.startViewTransition&&!c){let f=.5,p=.5;if(n?.pointerClientX!==void 0&&n?.pointerClientY!==void 0&&typeof window<"u")f=Kn(n.pointerClientX/window.innerWidth),p=Kn(n.pointerClientY/window.innerHeight);else if(n?.element){const g=n.element.getBoundingClientRect();g.width>0&&g.height>0&&typeof window<"u"&&(f=Kn((g.left+g.width/2)/window.innerWidth),p=Kn((g.top+g.height/2)/window.innerHeight))}o.style.setProperty("--theme-switch-x",`${f*100}%`),o.style.setProperty("--theme-switch-y",`${p*100}%`),o.classList.add("theme-transition");try{const g=l.startViewTransition?.(()=>{t()});g?.finished?g.finished.finally(()=>qn(o)):qn(o)}catch{qn(o),t()}return}t(),qn(o)};function Op(){return typeof window>"u"||typeof window.matchMedia!="function"||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function po(e){return e==="system"?Op():e}function Mt(e,t){const n={...t,lastActiveSessionKey:t.lastActiveSessionKey?.trim()||t.sessionKey.trim()||"main"};e.settings=n,Rp(n),t.theme!==e.theme&&(e.theme=t.theme,ks(e,po(t.theme))),e.applySessionKey=e.settings.lastActiveSessionKey}function Nr(e,t){const n=t.trim();n&&e.settings.lastActiveSessionKey!==n&&Mt(e,{...e.settings,lastActiveSessionKey:n})}function Fp(e){if(!window.location.search)return;const t=new URLSearchParams(window.location.search),n=t.get("token"),s=t.get("password"),a=t.get("session"),o=t.get("gatewayUrl");let l=!1;if(n!=null&&(t.delete("token"),l=!0),s!=null){const u=s.trim();u&&(e.password=u),t.delete("password"),l=!0}if(a!=null){const u=a.trim();u&&(e.sessionKey=u,Mt(e,{...e.settings,sessionKey:u,lastActiveSessionKey:u}))}if(o!=null){const u=o.trim(),f=u?ys(u):"";f&&f!==e.settings.gatewayUrl&&(e.pendingGatewayUrl=f),t.delete("gatewayUrl"),l=!0}if(!l)return;const c=new URL(window.location.href);c.search=t.toString(),window.history.replaceState({},"",c.toString())}function Bp(e,t){e.tab!==t&&(e.tab=t),t==="chat"&&(e.chatHasAutoScrolled=!1),t==="logs"?Ya(e):Za(e),t==="debug"?Xa(e):eo(e),go(e),Or(e,t,!1)}function Hp(e,t,n){Up({nextTheme:t,applyTheme:()=>{e.theme=t,Mt(e,{...e.settings,theme:t}),ks(e,po(t))},context:n,currentTheme:e.theme})}async function go(e){if(e.tab==="overview"&&await Fr(e),e.tab==="channels"&&await Vp(e),e.tab==="instances"&&await Mr(e),e.tab==="sessions"&&await Re(e),e.tab==="cron"&&await Ht(e),e.tab==="scheduledTasks"&&await Ht(e),e.tab==="cronHistory"&&await Ht(e),e.tab==="skills"&&await An(e),e.tab==="mcp"&&(await J(e),vt(e)),e.tab==="llmTrace"&&(await J(e),vt(e),await ro(e)),e.tab==="sandbox"&&(await J(e),e.securityForm=co(e),await _n(e)),e.tab==="digitalEmployee"&&await Ge(e),e.tab==="agents"){await ir(e),await J(e),vt(e);const t=e.agentsList?.agents?.map(s=>s.id)??[];t.length>0&&mu(e,t);const n=e.agentsSelectedId??e.agentsList?.defaultId??e.agentsList?.agents?.[0]?.id;n&&(gu(e,n),e.agentsPanel==="skills"&&fu(e,n),e.agentsPanel==="channels"&&Ce(e,!1),e.agentsPanel==="cron"&&Ht(e))}e.tab==="nodes"&&(await ws(e),await it(e),await J(e),vt(e),await lo(e)),(e.tab==="chat"||e.tab==="message")&&(await J(e),await jr(e),Ge(e),Tn(e,!e.chatHasAutoScrolled)),e.tab==="config"&&(await ja(e),await J(e),vt(e)),(e.tab==="envVars"||e.tab==="models")&&(await J(e),vt(e)),e.tab==="debug"&&(await bs(e),e.eventLog=e.eventLogBuffer),e.tab==="logs"&&(e.logsAtBottom=!0,await Ja(e,{reset:!0}),or(e,!0))}function zp(){if(typeof window>"u")return"";const e=window.__OPENCLAW_CONTROL_UI_BASE_PATH__;return typeof e=="string"&&e.trim()?Ln(e):Lp(window.location.pathname)}function Wp(e){e.theme=e.settings.theme??"light",ks(e,po(e.theme))}function ks(e,t){if(e.themeResolved=t,typeof document>"u")return;const n=document.documentElement;n.dataset.theme=t,n.style.colorScheme=t}function Kp(e){if(typeof window>"u"||typeof window.matchMedia!="function")return;if(e.themeMedia=window.matchMedia("(prefers-color-scheme: dark)"),e.themeMediaHandler=n=>{e.theme==="system"&&ks(e,n.matches?"dark":"light")},typeof e.themeMedia.addEventListener=="function"){e.themeMedia.addEventListener("change",e.themeMediaHandler);return}e.themeMedia.addListener(e.themeMediaHandler)}function qp(e){if(!e.themeMedia||!e.themeMediaHandler)return;if(typeof e.themeMedia.removeEventListener=="function"){e.themeMedia.removeEventListener("change",e.themeMediaHandler);return}e.themeMedia.removeListener(e.themeMediaHandler),e.themeMedia=null,e.themeMediaHandler=null}function jp(e,t){if(typeof window>"u")return;let n=Ir(window.location.pathname,e.basePath)??"chat";n==="config"&&(n="overview"),Ur(e,n),Or(e,n,t)}function Qp(e){if(typeof window>"u")return;let t=Ir(window.location.pathname,e.basePath);if(!t)return;t==="config"&&(t="overview");const s=new URL(window.location.href).searchParams.get("session")?.trim();s&&(e.sessionKey=s,Mt(e,{...e.settings,sessionKey:s,lastActiveSessionKey:s})),Ur(e,t)}function Ur(e,t){e.tab!==t&&(e.tab=t),t==="chat"&&(e.chatHasAutoScrolled=!1),t==="logs"?Ya(e):Za(e),t==="debug"?Xa(e):eo(e),e.connected&&go(e)}function Or(e,t,n){if(typeof window>"u")return;const s=Mn(In(t,e.basePath)),a=Mn(window.location.pathname),o=new URL(window.location.href);t==="chat"&&e.sessionKey?o.searchParams.set("session",e.sessionKey):o.searchParams.delete("session"),a!==s&&(o.pathname=s),n?window.history.replaceState({},"",o.toString()):window.history.pushState({},"",o.toString())}async function Fr(e){await Promise.all([Ce(e,!1),Mr(e),Re(e),Pn(e),bs(e)])}async function Vp(e){await Promise.all([Ce(e,!0),ja(e),J(e)])}async function Ht(e){await Promise.all([Ce(e,!1),Pn(e),xs(e)])}const _i=50,Gp=80,Jp=12e4;function Yp(e){if(!e||typeof e!="object")return null;const t=e;if(typeof t.text=="string")return t.text;const n=t.content;if(!Array.isArray(n))return null;const s=n.map(a=>{if(!a||typeof a!="object")return null;const o=a;return o.type==="text"&&typeof o.text=="string"?o.text:null}).filter(a=>!!a);return s.length===0?null:s.join(`
`)}function Li(e){if(e==null)return null;if(typeof e=="number"||typeof e=="boolean")return String(e);const t=Yp(e);let n;if(typeof e=="string")n=e;else if(t)n=t;else try{n=JSON.stringify(e,null,2)}catch{n=String(e)}const s=rr(n,Jp);return s.truncated?`${s.text}

… truncated (${s.total} chars, showing first ${s.text.length}).`:s.text}function Zp(e){const t=[];return t.push({type:"toolcall",name:e.name,arguments:e.args??{}}),e.output&&t.push({type:"toolresult",name:e.name,text:e.output}),{role:"assistant",toolCallId:e.toolCallId,runId:e.runId,content:t,timestamp:e.startedAt}}function Xp(e){if(e.toolStreamOrder.length<=_i)return;const t=e.toolStreamOrder.length-_i,n=e.toolStreamOrder.splice(0,t);for(const s of n)e.toolStreamById.delete(s)}function eg(e){e.chatToolMessages=e.toolStreamOrder.map(t=>e.toolStreamById.get(t)?.message).filter(t=>!!t)}function Ca(e){e.toolStreamSyncTimer!=null&&(clearTimeout(e.toolStreamSyncTimer),e.toolStreamSyncTimer=null),eg(e)}function tg(e,t=!1){if(t){Ca(e);return}e.toolStreamSyncTimer==null&&(e.toolStreamSyncTimer=window.setTimeout(()=>Ca(e),Gp))}function Ss(e){e.toolStreamById.clear(),e.toolStreamOrder=[],e.chatToolMessages=[],Ca(e)}const ng=5e3;function sg(e,t){const n=t.data??{},s=typeof n.phase=="string"?n.phase:"";e.compactionClearTimer!=null&&(window.clearTimeout(e.compactionClearTimer),e.compactionClearTimer=null),s==="start"?e.compactionStatus={active:!0,startedAt:Date.now(),completedAt:null}:s==="end"&&(e.compactionStatus={active:!1,startedAt:e.compactionStatus?.startedAt??null,completedAt:Date.now()},e.compactionClearTimer=window.setTimeout(()=>{e.compactionStatus=null,e.compactionClearTimer=null},ng))}function ag(e,t){if(!t)return;if(t.stream==="compaction"){sg(e,t);return}if(t.stream!=="tool")return;const n=typeof t.sessionKey=="string"?t.sessionKey:void 0;if(n&&n!==e.sessionKey||!n&&e.chatRunId&&t.runId!==e.chatRunId||e.chatRunId&&t.runId!==e.chatRunId||!e.chatRunId)return;const s=t.data??{},a=typeof s.toolCallId=="string"?s.toolCallId:"";if(!a)return;const o=typeof s.name=="string"?s.name:"tool",l=typeof s.phase=="string"?s.phase:"",c=l==="start"?s.args:void 0,u=l==="update"?Li(s.partialResult):l==="result"?Li(s.result):void 0,f=Date.now();let p=e.toolStreamById.get(a);p?(p.name=o,c!==void 0&&(p.args=c),u!==void 0&&(p.output=u||void 0),p.updatedAt=f):(p={toolCallId:a,runId:t.runId,sessionKey:n,name:o,args:c,output:u||void 0,startedAt:typeof t.ts=="number"?t.ts:f,updatedAt:f,message:{}},e.toolStreamById.set(a,p),e.toolStreamOrder.push(a)),p.message=Zp(p),Xp(e),tg(e,l==="result")}const og=/^\[([^\]]+)\]\s*/,ig=["WebChat","WhatsApp","Telegram","Signal","Slack","Discord","iMessage","Teams","Matrix","Zalo","Zalo Personal","BlueBubbles"],js=new WeakMap,Qs=new WeakMap;function lg(e){return/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}Z\b/.test(e)||/\d{4}-\d{2}-\d{2} \d{2}:\d{2}\b/.test(e)?!0:ig.some(t=>e.startsWith(`${t} `))}function Vs(e){const t=e.match(og);if(!t)return e;const n=t[1]??"";return lg(n)?e.slice(t[0].length):e}function Aa(e){const t=e,n=typeof t.role=="string"?t.role:"",s=t.content;if(typeof s=="string")return n==="assistant"?Fs(s):Vs(s);if(Array.isArray(s)){const a=s.map(o=>{const l=o;return l.type==="text"&&typeof l.text=="string"?l.text:null}).filter(o=>typeof o=="string");if(a.length>0){const o=a.join(`
`);return n==="assistant"?Fs(o):Vs(o)}}return typeof t.text=="string"?n==="assistant"?Fs(t.text):Vs(t.text):null}function Br(e){if(!e||typeof e!="object")return Aa(e);const t=e;if(js.has(t))return js.get(t)??null;const n=Aa(e);return js.set(t,n),n}function Ii(e){const n=e.content,s=[];if(Array.isArray(n))for(const c of n){const u=c;if(u.type==="thinking"&&typeof u.thinking=="string"){const f=u.thinking.trim();f&&s.push(f)}}if(s.length>0)return s.join(`
`);const a=cg(e);if(!a)return null;const l=[...a.matchAll(/<\s*think(?:ing)?\s*>([\s\S]*?)<\s*\/\s*think(?:ing)?\s*>/gi)].map(c=>(c[1]??"").trim()).filter(Boolean);return l.length>0?l.join(`
`):null}function rg(e){if(!e||typeof e!="object")return Ii(e);const t=e;if(Qs.has(t))return Qs.get(t)??null;const n=Ii(e);return Qs.set(t,n),n}function cg(e){const t=e,n=t.content;if(typeof n=="string")return n;if(Array.isArray(n)){const s=n.map(a=>{const o=a;return o.type==="text"&&typeof o.text=="string"?o.text:null}).filter(a=>typeof a=="string");if(s.length>0)return s.join(`
`)}return typeof t.text=="string"?t.text:null}function dg(e){const t=e.trim();if(!t)return"";const n=t.split(/\r?\n/).map(s=>s.trim()).filter(Boolean).map(s=>`_${s}_`);return n.length?["_Reasoning:_",...n].join(`
`):""}let Di=!1;function Ri(e){e[6]=e[6]&15|64,e[8]=e[8]&63|128;let t="";for(let n=0;n<e.length;n++)t+=e[n].toString(16).padStart(2,"0");return`${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`}function ug(){const e=new Uint8Array(16),t=Date.now();for(let n=0;n<e.length;n++)e[n]=Math.floor(Math.random()*256);return e[0]^=t&255,e[1]^=t>>>8&255,e[2]^=t>>>16&255,e[3]^=t>>>24&255,e}function pg(){Di||(Di=!0,console.warn("[uuid] crypto API missing; falling back to weak randomness"))}function Le(e=globalThis.crypto){if(e&&typeof e.randomUUID=="function")return e.randomUUID();if(e&&typeof e.getRandomValues=="function"){const t=new Uint8Array(16);return e.getRandomValues(t),Ri(t)}return pg(),Ri(ug())}async function et(e){if(!(!e.client||!e.connected)){e.chatLoading=!0,e.lastError=null;try{const t=await e.client.request("chat.history",{sessionKey:e.sessionKey,limit:200});e.chatMessages=Array.isArray(t.messages)?t.messages:[],e.chatThinkingLevel=t.thinkingLevel??null}catch(t){e.lastError=String(t)}finally{e.chatLoading=!1}}}function gg(e){const t=/^data:([^;]+);base64,(.+)$/.exec(e);return t?{mimeType:t[1],content:t[2]}:null}async function mg(e,t,n,s){if(!e.client||!e.connected)return null;const a=t.trim(),o=n&&n.length>0;if(!a&&!o)return null;const l=Date.now(),c=[];if(a&&c.push({type:"text",text:a}),o)for(const p of n)(p.kind??(p.mimeType?.startsWith("image/")?"image":"file"))==="image"?c.push({type:"image",source:{type:"base64",media_type:p.mimeType,data:p.dataUrl}}):c.push({type:"text",text:`[附件] ${p.filename||"file"} (${p.mimeType||"application/octet-stream"})`});e.chatMessages=[...e.chatMessages,{role:"user",content:c,timestamp:l}],e.chatSending=!0,e.lastError=null;const u=Le();e.chatRunId=u,e.chatStream="",e.chatStreamStartedAt=l;const f=o?n.map(p=>{const g=gg(p.dataUrl);return g?{type:p.kind??(p.mimeType?.startsWith("image/")?"image":"file"),mimeType:g.mimeType,content:g.content,filename:p.filename,sizeBytes:p.sizeBytes}:null}).filter(p=>p!==null):void 0;try{return await e.client.request("chat.send",{sessionKey:e.sessionKey,message:a,deliver:!1,idempotencyKey:u,attachments:f,modelRef:s??void 0}),u}catch(p){const g=String(p);return e.chatRunId=null,e.chatStream=null,e.chatStreamStartedAt=null,e.lastError=g,e.chatMessages=[...e.chatMessages,{role:"assistant",content:[{type:"text",text:"Error: "+g}],timestamp:Date.now()}],null}finally{e.chatSending=!1}}async function fg(e){if(!e.client||!e.connected)return!1;const t=e.chatRunId;try{return await e.client.request("chat.abort",t?{sessionKey:e.sessionKey,runId:t}:{sessionKey:e.sessionKey}),!0}catch(n){return e.lastError=String(n),!1}}function hg(e,t){if(!t||t.sessionKey!==e.sessionKey)return null;if(t.runId&&e.chatRunId&&t.runId!==e.chatRunId)return t.state==="final"?"final":null;if(t.state==="delta"){const n=Aa(t.message);if(typeof n=="string"){const s=e.chatStream??"";(!s||n.length>=s.length)&&(e.chatStream=n)}}else t.state==="final"||t.state==="aborted"?(e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null):t.state==="error"&&(e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null,e.lastError=t.errorMessage??"chat error");return t.state}const Hr=0;function zr(e){return e.chatSending||!!e.chatRunId}function vg(e){const t=e.trim();if(!t)return!1;const n=t.toLowerCase();return n==="/stop"?!0:n==="stop"||n==="esc"||n==="abort"||n==="wait"||n==="exit"}function yg(e){const t=e.trim();if(!t)return!1;const n=t.toLowerCase();return n==="/new"||n==="/reset"?!0:n.startsWith("/new ")||n.startsWith("/reset ")}async function Wr(e){e.connected&&(e.chatMessage="",await fg(e))}function bg(e,t,n,s){const a=t.trim(),o=!!(n&&n.length>0);!a&&!o||(e.chatQueue=[...e.chatQueue,{id:Le(),text:a,createdAt:Date.now(),attachments:o?n?.map(l=>({...l})):void 0,refreshSessions:s}])}async function Kr(e,t,n){Ss(e);const s=await mg(e,t,n?.attachments,e.chatModelRef??null),a=!!s;return!a&&n?.previousDraft!=null&&(e.chatMessage=n.previousDraft),!a&&n?.previousAttachments&&(e.chatAttachments=n.previousAttachments),a&&Nr(e,e.sessionKey),a&&n?.restoreDraft&&n.previousDraft?.trim()&&(e.chatMessage=n.previousDraft),a&&n?.restoreAttachments&&n.previousAttachments?.length&&(e.chatAttachments=n.previousAttachments),Tn(e),a&&!e.chatRunId&&qr(e),a&&n?.refreshSessions&&s&&e.refreshSessionsAfterChat.add(s),a}async function qr(e){if(!e.connected||zr(e))return;const[t,...n]=e.chatQueue;if(!t)return;e.chatQueue=n,await Kr(e,t.text,{attachments:t.attachments,refreshSessions:t.refreshSessions})||(e.chatQueue=[t,...e.chatQueue])}function wg(e,t){e.chatQueue=e.chatQueue.filter(n=>n.id!==t)}async function xg(e,t,n){if(!e.connected)return;const s=e.chatMessage,a=(t??e.chatMessage).trim(),o=e.chatAttachments??[],l=t==null?o:[],c=l.length>0;if(!a&&!c)return;if(vg(a)){await Wr(e);return}const u=n?.refreshSessions??yg(a);if(t==null&&(e.chatMessage="",e.chatAttachments=[]),zr(e)){bg(e,a,l,u);return}await Kr(e,a,{previousDraft:t==null?s:void 0,restoreDraft:!!(t&&n?.restoreDraft),attachments:c?l:void 0,previousAttachments:t==null?o:void 0,restoreAttachments:!!(t&&n?.restoreDraft),refreshSessions:u})}async function jr(e){await Promise.all([et(e),Re(e,{activeMinutes:Hr,includeLastMessage:!0}),yt(e)]),Tn(e)}const $g=qr;function kg(e){const t=ar(e.sessionKey);return t?.agentId?t.agentId:e.hello?.snapshot?.sessionDefaults?.defaultAgentId?.trim()||"main"}function Sg(e,t){const n=Ln(e),s=encodeURIComponent(t);return n?`${n}/avatar/${s}?meta=1`:`/avatar/${s}?meta=1`}async function yt(e){if(!e.connected){e.chatAvatarUrl=null;return}const t=kg(e);if(!t){e.chatAvatarUrl=null;return}e.chatAvatarUrl=null;const n=Sg(e.basePath,t);try{const s=await fetch(n,{method:"GET"});if(!s.ok){e.chatAvatarUrl=null;return}const a=await s.json(),o=typeof a.avatarUrl=="string"?a.avatarUrl.trim():"";e.chatAvatarUrl=o||null}catch{e.chatAvatarUrl=null}}const Cg={trace:!0,debug:!0,info:!0,warn:!0,error:!0,fatal:!0},Ag={name:"",description:"",agentId:"",enabled:!0,scheduleKind:"every",scheduleAt:"",everyAmount:"30",everyUnit:"minutes",cronExpr:"0 7 * * *",cronTz:"",sessionTarget:"isolated",wakeMode:"now",payloadKind:"agentTurn",payloadText:"",deliveryMode:"announce",deliveryChannel:"last",deliveryTo:"",timeoutSeconds:""},Mg=50,Eg=200,Tg="Assistant";function Ni(e,t){if(typeof e!="string")return;const n=e.trim();if(n)return n.length<=t?n:n.slice(0,t)}function Ma(e){const t=Ni(e?.name,Mg)??Tg,n=Ni(e?.avatar??void 0,Eg)??null;return{agentId:typeof e?.agentId=="string"&&e.agentId.trim()?e.agentId.trim():null,name:t,avatar:n}}function Pg(){return Ma(typeof window>"u"?{}:{name:window.__OPENCLAW_ASSISTANT_NAME__,avatar:window.__OPENCLAW_ASSISTANT_AVATAR__})}async function Qr(e,t){if(!e.client||!e.connected)return;const n=e.sessionKey.trim(),s=n?{sessionKey:n}:{};try{const a=await e.client.request("agent.identity.get",s);if(!a)return;const o=Ma(a);e.assistantName=o.name,e.assistantAvatar=o.avatar,e.assistantAgentId=o.agentId??null}catch{}}function Ea(e){return typeof e=="object"&&e!==null}function _g(e){if(!Ea(e))return null;const t=typeof e.id=="string"?e.id.trim():"",n=e.request;if(!t||!Ea(n))return null;const s=typeof n.command=="string"?n.command.trim():"";if(!s)return null;const a=typeof e.createdAtMs=="number"?e.createdAtMs:0,o=typeof e.expiresAtMs=="number"?e.expiresAtMs:0;return!a||!o?null:{id:t,request:{command:s,cwd:typeof n.cwd=="string"?n.cwd:null,host:typeof n.host=="string"?n.host:null,security:typeof n.security=="string"?n.security:null,ask:typeof n.ask=="string"?n.ask:null,agentId:typeof n.agentId=="string"?n.agentId:null,resolvedPath:typeof n.resolvedPath=="string"?n.resolvedPath:null,sessionKey:typeof n.sessionKey=="string"?n.sessionKey:null},createdAtMs:a,expiresAtMs:o}}function Lg(e){if(!Ea(e))return null;const t=typeof e.id=="string"?e.id.trim():"";return t?{id:t,decision:typeof e.decision=="string"?e.decision:null,resolvedBy:typeof e.resolvedBy=="string"?e.resolvedBy:null,ts:typeof e.ts=="number"?e.ts:null}:null}function Vr(e){const t=Date.now();return e.filter(n=>n.expiresAtMs>t)}function Ig(e,t){const n=Vr(e).filter(s=>s.id!==t.id);return n.push(t),n}function Ui(e,t){return Vr(e).filter(n=>n.id!==t)}function Dg(e){const t=e.version??(e.nonce?"v2":"v1"),n=e.scopes.join(","),s=e.token??"",a=[t,e.deviceId,e.clientId,e.clientMode,e.role,n,String(e.signedAtMs),s];return t==="v2"&&a.push(e.nonce??""),a.join("|")}const Gr={WEBCHAT_UI:"webchat-ui",CONTROL_UI:"openclaw-control-ui",WEBCHAT:"webchat",CLI:"cli",GATEWAY_CLIENT:"gateway-client",MACOS_APP:"openclaw-macos",IOS_APP:"openclaw-ios",ANDROID_APP:"openclaw-android",NODE_HOST:"node-host",TEST:"test",FINGERPRINT:"fingerprint",PROBE:"openclaw-probe"},Oi=Gr,Ta={WEBCHAT:"webchat",CLI:"cli",UI:"ui",BACKEND:"backend",NODE:"node",PROBE:"probe",TEST:"test"};new Set(Object.values(Gr));new Set(Object.values(Ta));const Rg=4008;class Ng{constructor(t){this.opts=t,this.ws=null,this.pending=new Map,this.closed=!1,this.lastSeq=null,this.connectNonce=null,this.connectSent=!1,this.connectTimer=null,this.backoffMs=800}start(){this.closed=!1,this.connect()}stop(){this.closed=!0,this.ws?.close(),this.ws=null,this.flushPending(new Error("gateway client stopped"))}get connected(){return this.ws?.readyState===WebSocket.OPEN}connect(){this.closed||(this.ws=new WebSocket(this.opts.url),this.ws.addEventListener("open",()=>this.queueConnect()),this.ws.addEventListener("message",t=>{this.handleWsMessage(t.data)}),this.ws.addEventListener("close",t=>{const n=String(t.reason??"");this.ws=null,this.flushPending(new Error(`gateway closed (${t.code}): ${n}`)),this.opts.onClose?.({code:t.code,reason:n}),this.scheduleReconnect()}),this.ws.addEventListener("error",()=>{}))}async handleWsMessage(t){try{if(typeof t=="string"){this.handleMessage(t);return}if(typeof Blob<"u"&&t instanceof Blob){this.handleMessage(await t.text());return}if(t instanceof ArrayBuffer){this.handleMessage(new TextDecoder().decode(t));return}if(ArrayBuffer.isView(t)){const n=t;this.handleMessage(new TextDecoder().decode(n.buffer.slice(0)));return}this.handleMessage(String(t??""))}catch{}}scheduleReconnect(){if(this.closed)return;const t=this.backoffMs;this.backoffMs=Math.min(this.backoffMs*1.7,15e3),window.setTimeout(()=>this.connect(),t)}flushPending(t){for(const[,n]of this.pending)n.reject(t);this.pending.clear()}async sendConnect(){if(this.connectSent)return;this.connectSent=!0,this.connectTimer!==null&&(window.clearTimeout(this.connectTimer),this.connectTimer=null);const t=typeof crypto<"u"&&!!crypto.subtle,n=["operator.admin","operator.approvals","operator.pairing"],s="operator";let a=null,o=!1,l=this.opts.token;if(t){a=await io();const p=$u({deviceId:a.deviceId,role:s})?.token;l=p??this.opts.token,o=!!(p&&this.opts.token)}const c=l||this.opts.password?{token:l,password:this.opts.password}:void 0;let u;if(t&&a){const p=Date.now(),g=this.connectNonce??void 0,$=Dg({deviceId:a.deviceId,clientId:this.opts.clientName??Oi.CONTROL_UI,clientMode:this.opts.mode??Ta.WEBCHAT,role:s,scopes:n,signedAtMs:p,token:l??null,nonce:g}),k=await Qu(a.privateKey,$);u={id:a.deviceId,publicKey:a.publicKey,signature:k,signedAt:p,nonce:g}}const f={minProtocol:3,maxProtocol:3,client:{id:this.opts.clientName??Oi.CONTROL_UI,version:this.opts.clientVersion??"dev",platform:this.opts.platform??navigator.platform??"web",mode:this.opts.mode??Ta.WEBCHAT,instanceId:this.opts.instanceId},role:s,scopes:n,device:u,caps:[],auth:c,userAgent:navigator.userAgent,locale:navigator.language};this.request("connect",f).then(p=>{p?.auth?.deviceToken&&a&&ur({deviceId:a.deviceId,role:p.auth.role??s,token:p.auth.deviceToken,scopes:p.auth.scopes??[]}),this.backoffMs=800,this.opts.onHello?.(p)}).catch(p=>{o&&a&&pr({deviceId:a.deviceId,role:s});const g=p instanceof Error?p.message:String(p);this.ws?.close(Rg,g||"connect failed")})}handleMessage(t){let n;try{n=JSON.parse(t)}catch{return}const s=n;if(s.type==="event"){const a=n;if(a.event==="connect.challenge"){const l=a.payload,c=l&&typeof l.nonce=="string"?l.nonce:null;c&&(this.connectNonce=c,this.sendConnect());return}const o=typeof a.seq=="number"?a.seq:null;o!==null&&(this.lastSeq!==null&&o>this.lastSeq+1&&this.opts.onGap?.({expected:this.lastSeq+1,received:o}),this.lastSeq=o);try{this.opts.onEvent?.(a)}catch(l){console.error("[gateway] event handler error:",l)}return}if(s.type==="res"){const a=n,o=this.pending.get(a.id);if(!o)return;this.pending.delete(a.id),a.ok?o.resolve(a.payload):o.reject(new Error(a.error?.message??"request failed"));return}}request(t,n){if(!this.ws||this.ws.readyState!==WebSocket.OPEN)return Promise.reject(new Error("gateway not connected"));const s=Le(),a={type:"req",id:s,method:t,params:n},o=new Promise((l,c)=>{this.pending.set(s,{resolve:u=>l(u),reject:c})});return this.ws.send(JSON.stringify(a)),o}queueConnect(){this.connectNonce=null,this.connectSent=!1,this.connectTimer!==null&&window.clearTimeout(this.connectTimer),this.connectTimer=window.setTimeout(()=>{this.sendConnect()},750)}}function Gs(e,t){const n=(e??"").trim(),s=t.mainSessionKey?.trim();if(!s)return n;if(!n)return s;const a=t.mainKey?.trim()||"main",o=t.defaultAgentId?.trim();return n==="main"||n===a||o&&(n===`agent:${o}:main`||n===`agent:${o}:${a}`)?s:n}function Ug(e,t){if(!t?.mainSessionKey)return;const n=Gs(e.sessionKey,t),s=Gs(e.settings.sessionKey,t),a=Gs(e.settings.lastActiveSessionKey,t),o=n||s||e.sessionKey,l={...e.settings,sessionKey:s||o,lastActiveSessionKey:a||o},c=l.sessionKey!==e.settings.sessionKey||l.lastActiveSessionKey!==e.settings.lastActiveSessionKey;o!==e.sessionKey&&(e.sessionKey=o),c&&Mt(e,l)}function Jr(e){e.lastError=null,e.hello=null,e.connected=!1,e.execApprovalQueue=[],e.execApprovalError=null,e.client?.stop(),e.client=new Ng({url:au(e.settings.gatewayUrl),token:e.settings.token.trim()?e.settings.token:void 0,password:e.password.trim()?e.password:void 0,clientName:"openclaw-control-ui",mode:"webchat",onHello:t=>{e.connected=!0,e.lastError=null,e.hello=t,Bg(e,t),e.chatRunId=null,e.chatStream=null,e.chatStreamStartedAt=null,Ss(e),ja(e),Qr(e),ir(e),ws(e,{quiet:!0}),it(e,{quiet:!0}),go(e)},onClose:({code:t,reason:n})=>{if(e.connected=!1,t!==1012){const s=(n??"").trim();s?e.lastError=s:t===1006?e.lastError="连接失败，请检查后端地址和网络连接":e.lastError=`连接断开 (${t})`}},onEvent:t=>Og(e,t),onGap:({expected:t,received:n})=>{e.lastError=`event gap detected (expected seq ${t}, got ${n}); refresh recommended`}}),e.client.start()}function Og(e,t){try{Fg(e,t)}catch(n){console.error("[gateway] handleGatewayEvent error:",t.event,n)}}function Fg(e,t){if(e.eventLogBuffer=[{ts:Date.now(),event:t.event,payload:t.payload},...e.eventLogBuffer].slice(0,250),e.tab==="debug"&&(e.eventLog=e.eventLogBuffer),t.event==="agent"){if(e.onboarding)return;ag(e,t.payload);return}if(t.event==="chat"){const n=t.payload;n?.sessionKey&&Nr(e,n.sessionKey);const s=hg(e,n);if(s==="final"||s==="error"||s==="aborted"){Ss(e),$g(e);const a=n?.runId;a&&e.refreshSessionsAfterChat.has(a)&&(e.refreshSessionsAfterChat.delete(a),s==="final"&&Re(e,{activeMinutes:Hr,includeLastMessage:!0}))}s==="final"&&et(e);return}if(t.event==="presence"){const n=t.payload;n?.presence&&Array.isArray(n.presence)&&(e.presenceEntries=n.presence,e.presenceError=null,e.presenceStatus=null);return}if(t.event==="cron"&&e.tab==="cron"&&Ht(e),(t.event==="device.pair.requested"||t.event==="device.pair.resolved")&&it(e,{quiet:!0}),t.event==="exec.approval.requested"){const n=_g(t.payload);if(n){e.execApprovalQueue=Ig(e.execApprovalQueue,n),e.execApprovalError=null;const s=Math.max(0,n.expiresAtMs-Date.now()+500);window.setTimeout(()=>{e.execApprovalQueue=Ui(e.execApprovalQueue,n.id)},s)}return}if(t.event==="exec.approval.resolved"){const n=Lg(t.payload);n&&(e.execApprovalQueue=Ui(e.execApprovalQueue,n.id))}}function Bg(e,t){const n=t.snapshot;n?.presence&&Array.isArray(n.presence)&&(e.presenceEntries=n.presence),n?.health&&(e.debugHealth=n.health),n?.sessionDefaults&&Ug(e,n.sessionDefaults)}function Hg(e){e.basePath=zp(),Fp(e),jp(e,!0),Wp(e),Kp(e),window.addEventListener("popstate",e.popStateHandler),Jr(e),uu(e),e.tab==="logs"&&Ya(e),e.tab==="debug"&&Xa(e)}function zg(e){su(e)}function Wg(e){window.removeEventListener("popstate",e.popStateHandler),pu(e),Za(e),eo(e),qp(e),e.topbarObserver?.disconnect(),e.topbarObserver=null}function Kg(e,t){if(e.tab==="chat"&&(t.has("chatMessages")||t.has("chatToolMessages")||t.has("chatStream")||t.has("chatLoading")||t.has("tab"))){const n=t.has("tab"),s=t.has("chatLoading")&&t.get("chatLoading")===!0&&!e.chatLoading;Tn(e,n||s||!e.chatHasAutoScrolled)}e.tab==="logs"&&(t.has("logsEntries")||t.has("logsAutoFollow")||t.has("tab"))&&e.logsAutoFollow&&e.logsAtBottom&&or(e,t.has("tab")||t.has("logsAutoFollow"))}const ne={messageSquare:r`
    <svg viewBox="0 0 24 24">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  `,barChart:r`
    <svg viewBox="0 0 24 24">
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  `,link:r`
    <svg viewBox="0 0 24 24">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  `,radio:r`
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="2" />
      <path
        d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
      />
    </svg>
  `,fileText:r`
    <svg viewBox="0 0 24 24">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  `,zap:r`
    <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
  `,monitor:r`
    <svg viewBox="0 0 24 24">
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  `,settings:r`
    <svg viewBox="0 0 24 24">
      <path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
      />
      <circle cx="12" cy="12" r="3" />
    </svg>
  `,bug:r`
    <svg viewBox="0 0 24 24">
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9" />
      <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
      <path d="M6 13H2" />
      <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
      <path d="M22 13h-4" />
      <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
    </svg>
  `,scrollText:r`
    <svg viewBox="0 0 24 24">
      <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" />
      <path d="M19 17V5a2 2 0 0 0-2-2H4" />
      <path d="M15 8h-5" />
      <path d="M15 12h-5" />
    </svg>
  `,folder:r`
    <svg viewBox="0 0 24 24">
      <path
        d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      />
    </svg>
  `,sandbox:r`
    <svg viewBox="0 0 24 24">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  `,approvals:r`
    <svg viewBox="0 0 24 24">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  `,users:r`
    <svg viewBox="0 0 24 24">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="3" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  `,menu:r`
    <svg viewBox="0 0 24 24">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  `,x:r`
    <svg viewBox="0 0 24 24">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  `,check:r`
    <svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg>
  `,arrowDown:r`
    <svg viewBox="0 0 24 24">
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  `,copy:r`
    <svg viewBox="0 0 24 24">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  `,search:r`
    <svg viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  `,brain:r`
    <svg viewBox="0 0 24 24">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  `,book:r`
    <svg viewBox="0 0 24 24">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  `,loader:r`
    <svg viewBox="0 0 24 24">
      <path d="M12 2v4" />
      <path d="m16.2 7.8 2.9-2.9" />
      <path d="M18 12h4" />
      <path d="m16.2 16.2 2.9 2.9" />
      <path d="M12 18v4" />
      <path d="m4.9 19.1 2.9-2.9" />
      <path d="M2 12h4" />
      <path d="m4.9 4.9 2.9 2.9" />
    </svg>
  `,alarmClock:r`
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2 2" />
      <path d="M5 3 2 6" />
      <path d="M22 6l-3-3" />
      <path d="M6 19l-3 3" />
      <path d="M18 19l3 3" />
    </svg>
  `,wrench:r`
    <svg viewBox="0 0 24 24">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      />
    </svg>
  `,fileCode:r`
    <svg viewBox="0 0 24 24">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m10 13-2 2 2 2" />
      <path d="m14 17 2-2-2-2" />
    </svg>
  `,edit:r`
    <svg viewBox="0 0 24 24">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  `,penLine:r`
    <svg viewBox="0 0 24 24">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  `,paperclip:r`
    <svg viewBox="0 0 24 24">
      <path
        d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
      />
    </svg>
  `,globe:r`
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  `,github:r`
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  `,image:r`
    <svg viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  `,smartphone:r`
    <svg viewBox="0 0 24 24">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  `,plug:r`
    <svg viewBox="0 0 24 24">
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </svg>
  `,circle:r`
    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
  `,plus:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  `,puzzle:r`
    <svg viewBox="0 0 24 24">
      <path
        d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.076.874.54 1.02 1.02a2.5 2.5 0 1 0 3.237-3.237c-.48-.146-.944-.505-1.02-1.02a.98.98 0 0 1 .303-.917l1.526-1.526A2.402 2.402 0 0 1 11.998 2c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.236 3.236c-.464.18-.894.527-.967 1.02Z"
      />
    </svg>
  `,download:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  `,trash:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="3 6 5 6 21 6"/>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
      <line x1="10" y1="11" x2="10" y2="17"/>
      <line x1="14" y1="11" x2="14" y2="17"/>
    </svg>
  `,power:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M18.36 6.64a9 9 0 1 1-12.73 0"/>
      <line x1="12" y1="2" x2="12" y2="12"/>
    </svg>
  `,powerOff:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M18.36 6.64A9 9 0 0 1 20.77 15"/>
      <path d="M14.12 14.12A3 3 0 0 1 9 12a3 3 0 0 1 1.12-2.12"/>
      <path d="M6.64 6.64a9 9 0 0 0 12.73 12.73"/>
      <line x1="2" y1="2" x2="22" y2="22"/>
    </svg>
  `,loader2:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin">
      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
    </svg>
  `,send:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="m22 2-7 20-4-9-9-4L22 2z" />
      <path d="M22 2 11 13" />
    </svg>
  `,info:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  `};function ke(e,t){const n=In(t,e.basePath),s=t==="sandbox";return r`
    <a
      href=${n}
      class="nav-item ${e.tab===t?"active":""}"
      @click=${a=>{a.defaultPrevented||a.button!==0||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||(a.preventDefault(),e.setTab(t))}}
      title=${Sa(t)}
    >
      <span class="nav-item__icon" aria-hidden="true">${ne[Dr(t)]}</span>
      <span class="nav-item__text">
        ${Sa(t)}
        ${s?r`<span class="nav-badge nav-badge--beta" title="Beta">BETA</span>`:""}
      </span>
    </a>
  `}function qg(e){e.onboarding;const t=e.onboarding;e.onboarding||e.settings.chatShowThinking;const n=e.onboarding?!0:e.settings.chatFocusMode,s=r`
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
      <path d="M21 3v5h-5"></path>
    </svg>
  `,a=r`
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M4 7V4h3"></path>
      <path d="M20 7V4h-3"></path>
      <path d="M4 17v3h3"></path>
      <path d="M20 17v3h-3"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  `;return r`
    <div class="chat-controls">
      <button
        class="btn btn--sm btn--icon"
        ?disabled=${e.chatLoading||!e.connected}
        @click=${()=>{e.resetToolStream(),jr(e)}}
        title="Refresh chat data"
      >
        ${s}
      </button>
      <span class="chat-controls__separator">|</span>
      <button
        class="btn btn--sm btn--icon ${n?"active":""}"
        ?disabled=${t}
        @click=${()=>{t||e.applySettings({...e.settings,chatFocusMode:!e.settings.chatFocusMode})}}
        aria-pressed=${n}
        title=${t?"Disabled during onboarding":"Toggle focus mode (hide sidebar + page header)"}
      >
        ${a}
      </button>
    </div>
  `}async function Yr(e,t){if(!(!e.client||!e.connected)&&!e.usageLoading){e.usageLoading=!0,e.usageError=null;try{const n=t?.startDate??e.usageStartDate,s=t?.endDate??e.usageEndDate,[a,o]=await Promise.all([e.client.request("sessions.usage",{startDate:n,endDate:s,limit:1e3,includeContextWeight:!0}),e.client.request("usage.cost",{startDate:n,endDate:s})]);a&&(e.usageResult=a),o&&(e.usageCostSummary=o)}catch(n){e.usageError=String(n)}finally{e.usageLoading=!1}}}async function jg(e,t){if(!(!e.client||!e.connected)&&!e.usageTimeSeriesLoading){e.usageTimeSeriesLoading=!0,e.usageTimeSeries=null;try{const n=await e.client.request("sessions.usage.timeseries",{key:t});n&&(e.usageTimeSeries=n)}catch{e.usageTimeSeries=null}finally{e.usageTimeSeriesLoading=!1}}}async function Qg(e,t){if(!(!e.client||!e.connected)&&!e.usageSessionLogsLoading){e.usageSessionLogsLoading=!0,e.usageSessionLogs=null;try{const n=await e.client.request("sessions.usage.logs",{key:t,limit:500});n&&Array.isArray(n.logs)&&(e.usageSessionLogs=n.logs)}catch{e.usageSessionLogs=null}finally{e.usageSessionLogsLoading=!1}}}function Vg(e){return e.editModalOpen?r`
    <div class="modal-overlay" @click=${e.onEditClose}>
      <div class="modal card" @click=${t=>t.stopPropagation()}>
        <div class="card-title">修改数字员工</div>
        <div class="field" style="margin-top: 12px;">
          <span>名称</span>
          <input type="text" .value=${e.editName} disabled />
          <div class="list-sub muted" style="font-size: 11px; margin-top: 4px;">名称不可修改</div>
        </div>
        <div class="field" style="margin-top: 12px;">
          <span>描述</span>
          <textarea
            rows="2"
            .value=${e.editDescription}
            @input=${t=>e.onEditDescriptionChange(t.target.value)}
          ></textarea>
        </div>
        <div class="field" style="margin-top: 12px;">
          <span>Prompt（可选）</span>
          <textarea
            rows="4"
            .value=${e.editPrompt}
            @input=${t=>e.onEditPromptChange(t.target.value)}
            placeholder="为该数字员工编写系统提示/人设说明。"
          ></textarea>
        </div>
        <div class="field" style="margin-top: 12px;">
          <span>MCP 配置（可选）</span>
          <div class="row" style="margin-top: 6px; gap: 8px; flex-wrap: wrap;">
            <button
              class="btn ${e.editMcpMode==="builder"?"primary":""}"
              type="button"
              @click=${()=>e.onEditMcpModeChange("builder")}
            >
              点选配置
            </button>
            <button
              class="btn ${e.editMcpMode==="raw"?"primary":""}"
              type="button"
              @click=${()=>e.onEditMcpModeChange("raw")}
            >
              原生 JSON
            </button>
          </div>
          ${e.editMcpMode==="raw"?r`
                  <textarea
                    rows="4"
                    style="margin-top: 8px;"
                    .value=${e.editMcpJson}
                    @input=${t=>e.onEditMcpJsonChange(t.target.value)}
                    placeholder='{"prometheus":{"service":"prometheus","serviceUrl":"http://localhost:9090"}}'
                  ></textarea>
                  <div class="list-sub muted" style="font-size: 11px; margin-top: 4px;">
                    与主配置 mcp.servers 结构一致，会话时合并（同 key 时员工覆盖）
                  </div>
                `:r`
                  <div class="row" style="margin-top: 8px; justify-content: space-between; align-items: center;">
                    <div class="muted" style="font-size: 12px;">
                      可添加多个 MCP；配置完成后可折叠，避免页面过长。
                    </div>
                    <button class="btn btn--sm" type="button" @click=${e.onEditMcpAddItem}>
                      + 添加 MCP
                    </button>
                  </div>
                  <div style="margin-top: 8px; display: grid; gap: 10px;">
                    ${e.editMcpItems.map(t=>mo(t,{onRemoveItem:e.onEditMcpRemoveItem,onCollapsedChange:e.onEditMcpCollapsedChange,onKeyChange:e.onEditMcpKeyChange,onEditModeChange:e.onEditMcpEditModeChange,onConnectionTypeChange:e.onEditMcpConnectionTypeChange,onFormPatch:e.onEditMcpFormPatch,onRawChange:e.onEditMcpRawChange}))}
                  </div>
                `}
        </div>
        <div class="field" style="margin-top: 12px;">
          <span>已有技能</span>
          ${e.editSkillNames.length===0?r`<div class="muted" style="font-size: 12px;">暂无技能</div>`:r`
                  <div class="row" style="flex-wrap: wrap; gap: 8px; margin-top: 8px;">
                    ${e.editSkillNames.map(t=>r`
                          <span
                            class="chip"
                            style="display: inline-flex; align-items: center; gap: 4px;"
                          >
                            ${t}
                            ${e.editSkillsToDelete.includes(t)?r`
                                  <span class="muted" style="font-size: 11px;"
                                    >已标记删除</span
                                  >
                                  <button
                                    type="button"
                                    class="btn btn--sm"
                                    style="padding: 2px 6px; font-size: 11px;"
                                    @click=${()=>e.onEditSkillUndoDelete(t)}
                                  >
                                    撤销
                                  </button>
                                `:r`
                                  <button
                                    type="button"
                                    class="btn btn--sm"
                                    style="padding: 2px 6px; font-size: 11px;"
                                    @click=${()=>e.onEditSkillDelete(t)}
                                  >
                                    删除
                                  </button>
                                `}
                          </span>
                        `)}
                  </div>
                `}
        </div>
        <div class="field" style="margin-top: 12px;">
          <span>新上传技能文件（可多选）</span>
          <input
            type="file"
            accept=".md,.MD,.zip"
            multiple
            @change=${t=>{const n=t.target,s=n.files?Array.from(n.files):[];e.onEditSkillFilesChange(s)}}
          />
          ${e.editSkillFilesToUpload.length>0?r`
                  <div class="row" style="flex-wrap: wrap; gap: 4px; margin-top: 8px;">
                    ${e.editSkillFilesToUpload.map(t=>r`<span class="chip" style="font-size: 12px;"
                          >${t.name}</span
                        >`)}
                  </div>
                `:y}
        </div>
        ${e.editError?r`
                <div class="callout danger" style="margin-top: 12px;">
                  ${e.editError}
                </div>
              `:y}
        <div class="row" style="margin-top: 16px; justify-content: flex-end; gap: 8px;">
          <button class="btn" ?disabled=${e.editBusy} @click=${e.onEditClose}>
            ${i("commonCancel")}
          </button>
          <button
            class="btn primary"
            ?disabled=${e.editBusy}
            @click=${e.onEditSubmit}
          >
            ${e.editBusy?i("commonLoading"):"保存"}
          </button>
        </div>
      </div>
    </div>
  `:y}function Gg(e){if(!e.createModalOpen)return y;const t=Xr(e.createName?.trim()??"");return r`
    <div class="modal-overlay" @click=${e.onCreateClose}>
      <div class="modal card" @click=${n=>n.stopPropagation()}>
        <div class="card-title">新增数字员工</div>
        <div class="field" style="margin-top: 12px;">
          <span>名称</span>
          <input
            type="text"
            .value=${e.createName}
            @input=${n=>e.onCreateNameChange(n.target.value)}
            placeholder="如 SRE 运维专家"
          />
          <div class="list-sub muted" style="font-size: 11px; margin-top: 4px;">名称唯一</div>
        </div>
        <div class="field" style="margin-top: 12px;">
          <span>描述</span>
          <textarea
            rows="2"
            .value=${e.createDescription}
            @input=${n=>e.onCreateDescriptionChange(n.target.value)}
          ></textarea>
        </div>
        <div class="field" style="margin-top: 12px;">
          <span>Prompt（可选）</span>
          <textarea
            rows="4"
            .value=${e.createPrompt}
            @input=${n=>e.onCreatePromptChange(n.target.value)}
            placeholder="为该数字员工编写系统提示/人设说明。"
          ></textarea>
        </div>
        <div class="field" style="margin-top: 12px;">
          <button class="btn secondary" type="button" @click=${e.onToggleAdvanced}>
            ${e.advancedOpen?"收起高级配置":"展开高级配置"}
          </button>
        </div>
        ${e.advancedOpen?r`
              <div class="card" style="margin-top: 12px;">
                <div class="card-title" style="font-size: 13px; margin-bottom: 8px;">高级配置</div>
                <div class="list-sub muted" style="font-size: 12px; margin-bottom: 8px;">
                  预估 ID：<code>${t}</code>（基于名称生成，用于专属技能目录
                  ~/.openocta/employee_skills/${t}/...）
                </div>
                <div class="field" style="margin-top: 8px;">
                  <span>MCP 配置（可选）</span>
                  <div class="row" style="margin-top: 6px; gap: 8px; flex-wrap: wrap;">
                    <button
                      class="btn ${e.createMcpMode==="builder"?"primary":""}"
                      type="button"
                      @click=${()=>e.onMcpModeChange("builder")}
                    >
                      点选配置
                    </button>
                    <button
                      class="btn ${e.createMcpMode==="raw"?"primary":""}"
                      type="button"
                      @click=${()=>e.onMcpModeChange("raw")}
                    >
                      原生 JSON
                    </button>
                  </div>
                  ${e.createMcpMode==="raw"?r`
                        <textarea
                          rows="4"
                          style="margin-top: 8px;"
                          .value=${e.mcpJson}
                          @input=${n=>e.onMcpJsonChange(n.target.value)}
                          placeholder='{"prometheus":{"service":"prometheus","serviceUrl":"http://localhost:9090"}}'
                        ></textarea>
                        <div class="list-sub muted" style="font-size: 11px; margin-top: 4px;">
                          与主配置 mcp.servers 结构一致，会话时合并（同 key 时员工覆盖）
                        </div>
                      `:r`
                        <div class="row" style="margin-top: 8px; justify-content: space-between; align-items: center;">
                          <div class="muted" style="font-size: 12px;">
                            可添加多个 MCP；配置完成后可折叠，避免页面过长。
                          </div>
                          <button class="btn btn--sm" type="button" @click=${e.onMcpAddItem}>
                            + 添加 MCP
                          </button>
                        </div>
                        <div style="margin-top: 8px; display: grid; gap: 10px;">
                          ${e.mcpItems.map(n=>mo(n,{onRemoveItem:e.onMcpRemoveItem,onCollapsedChange:e.onMcpCollapsedChange,onKeyChange:e.onMcpKeyChange,onEditModeChange:e.onMcpEditModeChange,onConnectionTypeChange:e.onMcpConnectionTypeChange,onFormPatch:e.onMcpFormPatch,onRawChange:e.onMcpRawChange}))}
                        </div>
                      `}
                </div>
                <div class="field" style="margin-top: 8px;">
                  <span>技能名称（可选）</span>
                  <input
                    type="text"
                    .value=${e.skillUploadName}
                    @input=${n=>e.onSkillUploadNameChange(n.target.value)}
                    placeholder="不填则从文件名推导，如 prometheus-1.0.0.zip → prometheus-1.0.0"
                  />
                </div>
                <div class="field" style="margin-top: 8px;">
                  <span>技能文件（SKILL.md 或 zip，可多选，提交时一并上传）</span>
                  <input
                    type="file"
                    accept=".md,.MD,.zip"
                    multiple
                    @change=${n=>{const s=n.target,a=s.files?Array.from(s.files):[];e.onSkillUploadFilesChange(a)}}
                  />
                </div>
                ${e.skillUploadError?r`
                      <div class="callout danger" style="margin-top: 8px;">
                        ${e.skillUploadError}
                      </div>
                    `:y}
              </div>
            `:y}
        ${e.createError?r`
              <div class="callout danger" style="margin-top: 12px;">
                ${e.createError}
              </div>
            `:y}
        <div class="row" style="margin-top: 16px; justify-content: flex-end; gap: 8px;">
          <button class="btn" ?disabled=${e.createBusy} @click=${e.onCreateClose}>
            ${i("commonCancel")}
          </button>
          <button
            class="btn primary"
            ?disabled=${e.createBusy||!e.createName.trim()}
            @click=${e.onCreateSubmit}
          >
            ${e.createBusy?i("commonLoading"):i("skillsUploadSubmit")}
          </button>
        </div>
      </div>
    </div>
  `}function Jg(e){const t=e.employees??[],n=e.filter.trim().toLowerCase(),s=n?t.filter(l=>[l.name,l.id,l.description].join(" ").toLowerCase().includes(n)):t,a=e.createName?.trim()??"",o=Xr(a);return r`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">${i("navTitleDigitalEmployee")}</div>
          <div class="card-sub">
            提供不同垂直场景的对话模版，点击任一数字员工即可开启新的会话。
          </div>
        </div>
        <div class="row" style="gap: 8px; align-items: center;">
          <div class="row" style="gap: 4px;" title=${i("mcpViewList")}>
            <button
              type="button"
              class="btn ${e.viewMode==="list"?"primary":""}"
              style="padding: 6px 10px;"
              @click=${()=>e.onViewModeChange("list")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="8" y1="6" x2="21" y2="6"/>
                <line x1="8" y1="12" x2="21" y2="12"/>
                <line x1="8" y1="18" x2="21" y2="18"/>
                <line x1="3" y1="6" x2="3.01" y2="6"/>
                <line x1="3" y1="12" x2="3.01" y2="12"/>
                <line x1="3" y1="18" x2="3.01" y2="18"/>
              </svg>
            </button>
            <button
              type="button"
              class="btn ${e.viewMode==="card"?"primary":""}"
              style="padding: 6px 10px;"
              @click=${()=>e.onViewModeChange("card")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
              </svg>
            </button>
          </div>
          <button class="btn primary" ?disabled=${e.loading} @click=${e.onCreateOpen}>
            ${i("skillsAdd")}
          </button>
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?i("commonLoading"):i("commonRefresh")}
          </button>
        </div>
      </div>

      ${e.error?r`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:y}

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="flex: 1;">
          <span>${i("commonFilter")}</span>
          <input
            .value=${e.filter}
            @input=${l=>e.onFilterChange(l.target.value)}
            placeholder="搜索名称/ID/描述"
          />
        </label>
        <div class="muted">${s.length} 个</div>
      </div>

      ${!e.loading&&s.length===0?r`<div class="muted" style="margin-top: 16px;">暂无匹配的数字员工。</div>`:r`
              ${e.viewMode==="list"?r`
                      <div class="list" style="margin-top: 16px;">
                        ${s.map(l=>Yg(l,e))}
                      </div>
                    `:r`
                      <div
                        class="employees-card-grid"
                        style="
                          display: grid;
                          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                          gap: 12px;
                          margin-top: 16px;
                        "
                      >
                        ${s.map(l=>Zg(l,e))}
                      </div>
                    `}
            `}

      ${e.createModalOpen?r`
              <div class="modal-overlay" @click=${e.onCreateClose}>
                <div class="modal card" @click=${l=>l.stopPropagation()}>
                  <div class="card-title">新增数字员工</div>
                  <div class="field" style="margin-top: 12px;">
                    <span>名称</span>
                    <input
                      type="text"
                      .value=${e.createName}
                      @input=${l=>e.onCreateNameChange(l.target.value)}
                      placeholder="如 SRE 运维专家"
                    />
                    <div class="list-sub muted" style="font-size: 11px; margin-top: 4px;">名称唯一</div>
                  </div>
                  <div class="field" style="margin-top: 12px;">
                    <span>描述</span>
                    <textarea
                      rows="2"
                      .value=${e.createDescription}
                      @input=${l=>e.onCreateDescriptionChange(l.target.value)}
                    ></textarea>
                  </div>
                  <div class="field" style="margin-top: 12px;">
                    <span>Prompt（可选）</span>
                    <textarea
                      rows="4"
                      .value=${e.createPrompt}
                      @input=${l=>e.onCreatePromptChange(l.target.value)}
                      placeholder="为该数字员工编写系统提示/人设说明。"
                    ></textarea>
                  </div>
                  <div class="field" style="margin-top: 12px;">
                    <button class="btn secondary" type="button" @click=${e.onToggleAdvanced}>
                      ${e.advancedOpen?"收起高级配置":"展开高级配置"}
                    </button>
                  </div>
                  ${e.advancedOpen?r`
                          <div class="card" style="margin-top: 12px;">
                            <div class="card-title" style="font-size: 13px; margin-bottom: 8px;">
                              高级配置
                            </div>
                            <div class="list-sub muted" style="font-size: 12px; margin-bottom: 8px;">
                              预估 ID：<code>${o}</code>（基于名称生成，用于专属技能目录
                              ~/.openocta/employee_skills/${o}/...）
                            </div>
                            <div class="field" style="margin-top: 8px;">
                              <span>MCP 配置（可选）</span>
                              <div class="row" style="margin-top: 6px; gap: 8px; flex-wrap: wrap;">
                                <button
                                  class="btn ${e.createMcpMode==="builder"?"primary":""}"
                                  type="button"
                                  @click=${()=>e.onMcpModeChange("builder")}
                                >
                                  点选配置
                                </button>
                                <button
                                  class="btn ${e.createMcpMode==="raw"?"primary":""}"
                                  type="button"
                                  @click=${()=>e.onMcpModeChange("raw")}
                                >
                                  原生 JSON
                                </button>
                              </div>
                              ${e.createMcpMode==="raw"?r`
                                      <textarea
                                        rows="4"
                                        style="margin-top: 8px;"
                                        .value=${e.mcpJson}
                                        @input=${l=>e.onMcpJsonChange(l.target.value)}
                                        placeholder='{"prometheus":{"service":"prometheus","serviceUrl":"http://localhost:9090"}}'
                                      ></textarea>
                                      <div class="list-sub muted" style="font-size: 11px; margin-top: 4px;">
                                        与主配置 mcp.servers 结构一致，会话时合并（同 key 时员工覆盖）
                                      </div>
                                    `:r`
                                      <div class="row" style="margin-top: 8px; justify-content: space-between; align-items: center;">
                                        <div class="muted" style="font-size: 12px;">
                                          可添加多个 MCP；配置完成后可折叠，避免页面过长。
                                        </div>
                                        <button class="btn btn--sm" type="button" @click=${e.onMcpAddItem}>
                                          + 添加 MCP
                                        </button>
                                      </div>
                                      <div style="margin-top: 8px; display: grid; gap: 10px;">
                                        ${e.mcpItems.map(l=>mo(l,{onRemoveItem:e.onMcpRemoveItem,onCollapsedChange:e.onMcpCollapsedChange,onKeyChange:e.onMcpKeyChange,onEditModeChange:e.onMcpEditModeChange,onConnectionTypeChange:e.onMcpConnectionTypeChange,onFormPatch:e.onMcpFormPatch,onRawChange:e.onMcpRawChange}))}
                                      </div>
                                    `}
                            </div>
                            <div class="field" style="margin-top: 8px;">
                              <span>技能名称（可选）</span>
                              <input
                                type="text"
                                .value=${e.skillUploadName}
                                @input=${l=>e.onSkillUploadNameChange(l.target.value)}
                                placeholder="不填则从文件名推导，如 prometheus-1.0.0.zip → prometheus-1.0.0"
                              />
                            </div>
                            <div class="field" style="margin-top: 8px;">
                              <span>技能文件（SKILL.md 或 zip，可多选，提交时一并上传）</span>
                              <input
                                type="file"
                                accept=".md,.MD,.zip"
                                multiple
                                @change=${l=>{const c=l.target,u=c.files?Array.from(c.files):[];e.onSkillUploadFilesChange(u)}}
                              />
                            </div>
                            ${e.skillUploadError?r`
                                    <div class="callout danger" style="margin-top: 8px;">
                                      ${e.skillUploadError}
                                    </div>
                                  `:y}
                          </div>
                        `:y}
                  ${e.createError?r`
                          <div class="callout danger" style="margin-top: 12px;">
                            ${e.createError}
                          </div>
                        `:y}
                  <div class="row" style="margin-top: 16px; justify-content: flex-end; gap: 8px;">
                    <button class="btn" ?disabled=${e.createBusy} @click=${e.onCreateClose}>
                      ${i("commonCancel")}
                    </button>
                    <button
                      class="btn primary"
                      ?disabled=${e.createBusy||!e.createName.trim()}
                      @click=${e.onCreateSubmit}
                    >
                      ${e.createBusy?i("commonLoading"):i("skillsUploadSubmit")}
                    </button>
                  </div>
                </div>
              </div>
            `:y}

      ${y}
    </section>
  `}function Yg(e,t){const n=e.name||e.id,s=e.description||(e.builtin?"内置数字员工":"自定义数字员工"),a=typeof e.createdAt=="number"&&e.createdAt>0?new Date(e.createdAt).toLocaleString():e.builtin?"内置":"",o=e.enabled!==!1;return r`
    <div class="list-item list-item--row" style="width: 100%; text-align: left;">
      <div class="list-main">
        <div class="list-title">
          ${n}
          ${e.builtin?r`<span class="chip" style="margin-left: 8px;">内置</span>`:y}
        </div>
        <div class="list-sub">${s}</div>
        <div class="list-sub muted" style="margin-top: 4px;">
          ${a?r`<span>创建时间：${a}</span>`:y}
          <span style="margin-left: 12px;">状态：${o?"启用":"禁用"}</span>
          ${Zr(e)}
        </div>
      </div>
      <div class="row" style="gap: 8px; align-items: center; justify-content: flex-end;">
        <button class="btn btn--sm primary" @click=${()=>t.onOpenEmployee(e.id)}>会话</button>
        <button class="btn btn--sm" @click=${()=>t.onCopy(e.id)}>复制</button>
        <button class="btn btn--sm" @click=${()=>t.onEdit(e.id)}>
          修改
        </button>
        <button class="btn btn--sm danger" @click=${()=>t.onDelete(e.id)}>
          ${i("skillsDelete")}
        </button>
      </div>
    </div>
  `}function Zg(e,t){const n=e.name||e.id,s=e.description||(e.builtin?"内置数字员工":"自定义数字员工"),a=typeof e.createdAt=="number"&&e.createdAt>0?new Date(e.createdAt).toLocaleString():e.builtin?"内置":"",o=e.enabled!==!1;return r`
    <div class="skills-server-card" style="cursor: pointer;" @click=${()=>t.onOpenEmployee(e.id)}>
      <div class="skills-server-card__header">
        <div class="skills-server-card__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </div>
        <div class="skills-server-card__title-row" style="min-width: 0;">
          <span class="skills-server-card__name">${n}</span>
          ${e.builtin?r`<span class="chip" style="font-size: 11px;">内置</span>`:y}
          <span class="chip ${o?"chip-ok":"chip-warn"}" style="font-size: 11px;">
            ${o?"启用":"禁用"}
          </span>
        </div>
      </div>
      <div class="skills-server-card__sub muted" style="font-size: 12px;">
        <div>${s}</div>
        ${a?r`<div style="margin-top: 6px;">创建时间：${a}</div>`:y}
        ${Zr(e)}
      </div>
      <div class="skills-server-card__footer" @click=${l=>l.stopPropagation()}>
        <button class="btn btn--sm primary" @click=${()=>t.onOpenEmployee(e.id)}>会话</button>
        <button class="btn btn--sm" @click=${()=>t.onCopy(e.id)}>复制</button>
        <button class="btn btn--sm" @click=${()=>t.onEdit(e.id)}>
          修改
        </button>
        <button class="btn btn--sm danger" @click=${()=>t.onDelete(e.id)}>
          ${i("skillsDelete")}
        </button>
      </div>
    </div>
  `}function Zr(e){const t=e.skillNames??e.skillIds??[],n=e.mcpServerKeys??[];if(t.length===0&&n.length===0)return r``;const s=3,a=t.length<=s?t.join(", "):`${t.slice(0,s).join(", ")}....`,o=n.length<=s?n.join(", "):`${n.slice(0,s).join(", ")}....`,l=t.join(", "),c=n.join(", "),u=l&&c?`技能：${l}
MCP：${c}`:l?`技能：${l}`:`MCP：${c}`,f=[];return a&&f.push(`技能：${a}`),o&&f.push(`MCP：${o}`),r`<span
    style="margin-left: 12px; cursor: help; text-decoration: underline dotted;"
    title=${u}
  >
    ${f.join(" | ")}
  </span>`}function Xr(e){const t=e.trim().toLowerCase();if(!t)return"employee";let n="";for(const s of t){if(s>="a"&&s<="z"||s>="0"&&s<="9"){n+=s;continue}(s==="-"||s==="_"||s===" ")&&(n+="-")}return n=n.replace(/-+/g,"-").replace(/^-+/,"").replace(/-+$/,""),n||(n="employee"),n.length>64&&(n=n.slice(0,64)),n}function mo(e,t){const n=e.key?.trim()?e.key.trim():"未命名 MCP",s=e.editMode==="raw"?"JSON":e.connectionType,a=!!e.rawError,o=!!e.collapsed;return r`
    <details
      class="card"
      style="padding: 10px;"
      ?open=${!o}
      @toggle=${l=>{const c=l.target;t.onCollapsedChange(e.id,!c.open)}}
    >
      <summary class="row" style="cursor: pointer; list-style: none; align-items: center; gap: 8px;">
        <button
          class="btn btn--sm"
          type="button"
          title=${o?"展开":"折叠"}
          @click=${l=>{l.preventDefault(),l.stopPropagation(),t.onCollapsedChange(e.id,!o)}}
        >
          ${o?"▸ 展开":"▾ 折叠"}
        </button>
        <span style="font-weight: 600; flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
          ${n}
        </span>
        <span class="chip" style="font-size: 11px;">${s}</span>
        ${a?r`<span class="chip chip-warn" style="font-size: 11px;">有错误</span>`:y}
        <button
          class="btn btn--sm"
          type="button"
          style="margin-left: 6px;"
          @click=${l=>{l.preventDefault(),l.stopPropagation(),t.onRemoveItem(e.id)}}
        >
          删除
        </button>
      </summary>

      <div style="margin-top: 10px;">
        <div class="field">
          <span>Key（唯一）*</span>
          <input
            type="text"
            .value=${e.key}
            placeholder="如 prometheus, filesystem"
            @input=${l=>t.onKeyChange(e.id,l.target.value)}
          />
        </div>

        <div class="row" style="margin-top: 10px; gap: 8px;">
          <button
            class="btn ${e.editMode==="form"?"primary":""}"
            type="button"
            @click=${()=>t.onEditModeChange(e.id,"form")}
          >
            点选配置
          </button>
          <button
            class="btn ${e.editMode==="raw"?"primary":""}"
            type="button"
            @click=${()=>t.onEditModeChange(e.id,"raw")}
          >
            原生 JSON
          </button>
        </div>

        ${e.editMode==="raw"?r`
                <div class="field" style="margin-top: 10px;">
                  <span>JSON</span>
                  <textarea
                    rows="6"
                    style="font-family: var(--mono); font-size: 12px;"
                    .value=${e.rawJson}
                    @input=${l=>t.onRawChange(e.id,l.target.value)}
                  ></textarea>
                  ${e.rawError?r`<div class="callout danger" style="margin-top: 8px;">${e.rawError}</div>`:y}
                </div>
              `:r`
                <div
                  class="row"
                  style="
                    display: flex;
                    gap: 4px;
                    margin-top: 12px;
                    border-bottom: 1px solid var(--input, #333);
                    padding-bottom: 4px;
                  "
                >
                  <button
                    class="btn ${e.connectionType==="stdio"?"primary":""}"
                    type="button"
                    style="flex: 1; min-width: 0;"
                    @click=${()=>t.onConnectionTypeChange(e.id,"stdio")}
                  >
                    stdio
                  </button>
                  <button
                    class="btn ${e.connectionType==="url"?"primary":""}"
                    type="button"
                    style="flex: 1; min-width: 0;"
                    @click=${()=>t.onConnectionTypeChange(e.id,"url")}
                  >
                    url
                  </button>
                  <button
                    class="btn ${e.connectionType==="service"?"primary":""}"
                    type="button"
                    style="flex: 1; min-width: 0;"
                    @click=${()=>t.onConnectionTypeChange(e.id,"service")}
                  >
                    service
                  </button>
                </div>
                <div style="margin-top: 10px;">
                  ${tm(e,l=>t.onFormPatch(e.id,l))}
                </div>
              `}
      </div>
    </details>
  `}function Xg(e){return!e||typeof e!="object"?"":Object.entries(e).map(([t,n])=>`${t}=${n}`).join(`
`)}function em(e){const t={};for(const n of e.split(/\n/)){const s=n.trim();if(!s)continue;const a=s.indexOf("=");if(a>0){const o=s.slice(0,a).trim(),l=s.slice(a+1).trim();o&&(t[o]=l)}}return t}function tm(e,t){const n=["npx","docker","uv"];if(e.connectionType==="stdio"){let s=(e.draft?.command??"").trim();if(!s&&e.editMode==="raw"&&e.rawJson?.trim())try{const l=JSON.parse(e.rawJson);l&&typeof l.command=="string"&&l.command.trim()&&(s=l.command.trim())}catch{}s=s||"npx";const a=n,o=a.includes(s)?a:[s,...a];return r`
      <div class="field">
        <span>command *</span>
        <select
          @change=${l=>t({command:l.target.value})}
        >
          ${o.map(l=>r`
            <option 
              value=${l} 
              ?selected=${l===s} 
            >
              ${l}
            </option>
          `)}
        </select>
      </div>
      <div class="field" style="margin-top: 8px;">
        <span>args</span>
        <input
          type="text"
          .value=${(e.draft?.args??[]).join(" ")}
          placeholder="-y prometheus-mcp-server"
          @input=${l=>{const c=l.target.value;t({args:c.trim()?c.trim().split(/\s+/):[]})}}
        />
      </div>
      <div class="field" style="margin-top: 8px;">
        <span>env</span>
        <textarea
          style="min-height: 80px; font-family: var(--mono); font-size: 12px;"
          placeholder="KEY=value"
          .value=${Xg(e.draft?.env)}
          @input=${l=>{const c=l.target.value;t({env:em(c)})}}
        ></textarea>
      </div>
    `}return e.connectionType==="url"?r`
      <div class="field">
        <span>url *</span>
        <input
          type="text"
          .value=${e.draft?.url??""}
          placeholder="https://mcp.example.com/sse"
          @input=${s=>t({url:s.target.value})}
        />
      </div>
    `:r`
    <div class="field">
      <span>service *</span>
      <input
        type="text"
        .value=${e.draft?.service??""}
        placeholder="prometheus"
        @input=${s=>t({service:s.target.value})}
      />
    </div>
    <div class="field" style="margin-top: 8px;">
      <span>serviceUrl *</span>
      <input
        type="text"
        .value=${e.draft?.serviceUrl??""}
        placeholder="http://localhost:9090"
        @input=${s=>t({serviceUrl:s.target.value})}
      />
    </div>
  `}const nm={feishu:{fields:[{path:["credentials","appId"],label:"App ID",required:!0,type:"string",placeholder:"cli_xxx"},{path:["credentials","appSecret"],label:"App Secret",required:!0,type:"string",placeholder:"xxx"},{path:["credentials","domain"],label:"Domain",required:!1,type:"string",placeholder:"open.feishu.cn"},{path:["credentials","encryptKey"],label:"Encrypt Key",required:!1,type:"string"},{path:["credentials","verificationToken"],label:"Verification Token",required:!1,type:"string"},{path:["enabled"],label:"Enabled",required:!1,type:"boolean"},{path:["allowedIds"],label:"Allowed IDs",required:!1,type:"string[]",placeholder:"user-id-1, user-id-2"}]},dingtalk:{fields:[{path:["credentials","clientId"],label:"Client ID",required:!0,type:"string",placeholder:"your-client-id"},{path:["credentials","clientSecret"],label:"Client Secret",required:!0,type:"string",placeholder:"your-client-secret"},{path:["enabled"],label:"Enabled",required:!1,type:"boolean"},{path:["allowedIds"],label:"Allowed IDs",required:!1,type:"string[]",placeholder:"user-id-1, user-id-2"}]},wework:{fields:[{path:["credentials","botId"],label:"Bot ID",required:!0,type:"string",placeholder:"智能机器人 BotId",help:"企业微信后台或扫码创建后获得，对应长连接 BotID。"},{path:["credentials","botSecret"],label:"Bot Secret",required:!0,type:"string",placeholder:"机器人 Secret",help:"与 Bot ID 配对，请妥善保管。"},{path:["credentials","wsUrl"],label:"WebSocket URL",required:!1,type:"string",placeholder:"wss://openws.work.weixin.qq.com",help:"一般留空使用官方默认地址。"},{path:["enabled"],label:"Enabled",required:!1,type:"boolean"},{path:["allowedIds"],label:"Allowed user IDs",required:!1,type:"string[]",placeholder:"userid-1, userid-2",help:"空表示不限制；仅允许列表内用户发消息进入系统。"}]},telegram:{fields:[{path:["enabled"],label:"Enabled",required:!1,type:"boolean"},{path:["accountId"],label:"Account ID",required:!1,type:"string",placeholder:"default"},{path:["name"],label:"Name",required:!1,type:"string",placeholder:"Telegram"},{path:["allowedIds"],label:"Allowed IDs",required:!1,type:"string[]",placeholder:"user-id-1"}]},slack:{fields:[{path:["enabled"],label:"Enabled",required:!1,type:"boolean"},{path:["accountId"],label:"Account ID",required:!1,type:"string",placeholder:"default"},{path:["name"],label:"Name",required:!1,type:"string",placeholder:"Slack"},{path:["allowedIds"],label:"Allowed IDs",required:!1,type:"string[]",placeholder:"user-id-1"}]},discord:{fields:[{path:["enabled"],label:"Enabled",required:!1,type:"boolean"},{path:["accountId"],label:"Account ID",required:!1,type:"string",placeholder:"default"},{path:["name"],label:"Name",required:!1,type:"string",placeholder:"Discord"},{path:["allowedIds"],label:"Allowed IDs",required:!1,type:"string[]",placeholder:"user-id-1"}]},whatsapp:{fields:[{path:["enabled"],label:"Enabled",required:!1,type:"boolean"},{path:["accountId"],label:"Account ID",required:!1,type:"string",placeholder:"default"},{path:["name"],label:"Name",required:!1,type:"string",placeholder:"WhatsApp"},{path:["allowedIds"],label:"Allowed IDs",required:!1,type:"string[]",placeholder:"user-id-1"}]},qq:{fields:[{path:["credentials","appId"],label:"App ID",required:!0,type:"string",placeholder:"your-app-id"},{path:["credentials","appSecret"],label:"App Secret",required:!0,type:"string",placeholder:"your-app-secret"},{path:["enabled"],label:"Enabled",required:!1,type:"boolean"},{path:["allowedIds"],label:"Allowed IDs",required:!1,type:"string[]",placeholder:"user-openid-1"}]}};function sm(e){const t=e.toLowerCase();return nm[t]??null}function am(e,t){let n=e;for(const s of t){if(n==null||typeof n!="object")return;n=n[s]}return n}function om(e,t){const s=(e.channels??{})[t],a=e[t];return(s&&typeof s=="object"?s:null)??(a&&typeof a=="object"?a:null)??{}}function im(e,t){return e==null?"":t.type==="boolean"?e?"true":"false":t.type==="string[]"?Array.isArray(e)?e.join(", "):typeof e=="string"?e:"":String(e)}function lm(e,t){if(t.type==="boolean")return e==="true"||e==="1"||e.toLowerCase()==="yes";if(t.type==="number"){const n=parseInt(e,10);return isNaN(n)?void 0:n}return t.type==="string[]"?e.trim()?e.split(/,\s*/).map(n=>n.trim()).filter(Boolean):[]:e}function rm(e){const t=sm(e.channelId),n=e.configValue??{},s=om(n,e.channelId);return t?r`
    <div class="config-form">
      ${t.fields.map(a=>{const o=am(s,a.path),l=im(o,a),c=["channels",e.channelId,...a.path];return r`
          <div class="field">
            <span>
              ${a.label}
              ${a.required?r`<span style="color: var(--danger-color);">*</span>`:""}
            </span>
            ${a.type==="boolean"?r`
                  <div class="row" style="align-items: center; gap: 8px;">
                    <input
                      type="checkbox"
                      ?checked=${o===!0}
                      ?disabled=${e.disabled}
                      @change=${u=>e.onPatch(c,u.target.checked)}
                    />
                  </div>
                `:r`
                  <input
                    type="${a.type==="number"?"number":"text"}"
                    .value=${l}
                    placeholder=${a.placeholder??""}
                    ?disabled=${e.disabled}
                    @input=${u=>{const f=u.target.value;e.onPatch(c,lm(f,a))}}
                  />
                `}
            ${a.help?r`<div class="muted" style="font-size: 12px; margin-top: 4px; line-height: 1.35;">
                  ${a.help}
                </div>`:y}
          </div>
        `})}
    </div>
  `:r`
      <div class="callout danger">${i("channelsConfigSchemaUnavailable")}</div>
    `}function cm(e){const{channelId:t,props:n}=e,s=n.configSaving;return r`
    <div style="margin-top: 16px;">
      ${rm({channelId:t,configValue:n.configForm,schema:n.configSchema,uiHints:n.configUiHints,disabled:s,onPatch:n.onConfigPatch})}
      <div class="row" style="margin-top: 12px;">
        <button
          class="btn primary"
          ?disabled=${s||!n.configFormDirty}
          @click=${()=>n.onConfigSave()}
        >
          ${n.configSaving?i("commonSaving"):i("commonSave")}
        </button>
        <button
          class="btn"
          ?disabled=${s}
          @click=${()=>n.onConfigReload()}
        >
          ${i("commonReload")}
        </button>
      </div>
    </div>
  `}const dm={whatsapp:"WhatsApp",telegram:"Telegram",discord:"Discord",googlechat:"Google Chat",slack:"Slack",signal:"Signal",imessage:"iMessage",nostr:"Nostr",dingtalk:"DingTalk",feishu:"Feishu",wework:"WeWork",qq:"QQ"};function um(e){const t=e.selectedChannelId;if(!t)return y;const n=dm[t.toLowerCase()]??t.charAt(0).toUpperCase()+t.slice(1);return r`
    <div
      class="channel-panel-overlay"
      @click=${s=>{s.target.classList.contains("channel-panel-overlay")&&e.onChannelSelect(null)}}
    >
      <div class="channel-panel card" @click=${s=>s.stopPropagation()}>
        <div class="channel-panel-header row" style="justify-content: space-between; align-items: center;">
          <div class="card-title">${n} ${i("configSettingsTitle")}</div>
          <button class="btn" @click=${()=>e.onChannelSelect(null)}>×</button>
        </div>
        <div class="channel-panel-content">
          ${cm({channelId:t,props:e})}
        </div>
      </div>
    </div>
  `}function pm(e){const{props:t,discord:n,accountCountLabel:s}=e;return r`
    <div class="card">
      <div class="card-title">${i("channelDiscord")}</div>
      <div class="card-sub">${i("channelDiscordSub")}</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${i("channelConfigured")}</span>
          <span>${n?.configured?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelRunning")}</span>
          <span>${n?.running?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelLastStart")}</span>
          <span>${n?.lastStartAt?X(n.lastStartAt):i("commonNA")}</span>
        </div>
        <div>
          <span class="label">${i("channelLastProbe")}</span>
          <span>${n?.lastProbeAt?X(n.lastProbeAt):i("commonNA")}</span>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:y}

      ${n?.probe?r`<div class="callout" style="margin-top: 12px;">
            ${i("channelProbe")} ${n.probe.ok?i("channelProbeOk"):i("channelProbeFailed")} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:y}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${i("channelProbe")}
        </button>
        <button class="btn primary" @click=${()=>t.onChannelSelect("discord")}>
          ${i("channelsConfigure")}
        </button>
      </div>
    </div>
  `}function gm(e){const{props:t,googleChat:n,accountCountLabel:s}=e;return r`
    <div class="card">
      <div class="card-title">${i("channelGoogleChat")}</div>
      <div class="card-sub">${i("channelGoogleChatSub")}</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${i("channelConfigured")}</span>
          <span>${n?n.configured?i("commonYes"):i("commonNo"):i("commonNA")}</span>
        </div>
        <div>
          <span class="label">${i("channelRunning")}</span>
          <span>${n?n.running?i("commonYes"):i("commonNo"):i("commonNA")}</span>
        </div>
        <div>
          <span class="label">${i("channelCredential")}</span>
          <span>${n?.credentialSource??i("commonNA")}</span>
        </div>
        <div>
          <span class="label">${i("channelAudience")}</span>
          <span>
            ${n?.audienceType?`${n.audienceType}${n.audience?` · ${n.audience}`:""}`:i("commonNA")}
          </span>
        </div>
        <div>
          <span class="label">${i("channelLastStart")}</span>
          <span>${n?.lastStartAt?X(n.lastStartAt):i("commonNA")}</span>
        </div>
        <div>
          <span class="label">${i("channelLastProbe")}</span>
          <span>${n?.lastProbeAt?X(n.lastProbeAt):i("commonNA")}</span>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:y}

      ${n?.probe?r`<div class="callout" style="margin-top: 12px;">
            ${i("channelProbe")} ${n.probe.ok?i("channelProbeOk"):i("channelProbeFailed")} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:y}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${i("channelProbe")}
        </button>
        <button class="btn primary" @click=${()=>t.onChannelSelect("googlechat")}>
          ${i("channelsConfigure")}
        </button>
      </div>
    </div>
  `}function mm(e){const{props:t,imessage:n,accountCountLabel:s}=e;return r`
    <div class="card">
      <div class="card-title">${i("channelIMessage")}</div>
      <div class="card-sub">${i("channelIMessageSub")}</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${i("channelConfigured")}</span>
          <span>${n?.configured?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelRunning")}</span>
          <span>${n?.running?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelLastStart")}</span>
          <span>${n?.lastStartAt?X(n.lastStartAt):i("commonNA")}</span>
        </div>
        <div>
          <span class="label">${i("channelLastProbe")}</span>
          <span>${n?.lastProbeAt?X(n.lastProbeAt):i("commonNA")}</span>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:y}

      ${n?.probe?r`<div class="callout" style="margin-top: 12px;">
            ${i("channelProbe")} ${n.probe.ok?i("channelProbeOk"):i("channelProbeFailed")} ·
            ${n.probe.error??""}
          </div>`:y}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${i("channelProbe")}
        </button>
        <button class="btn primary" @click=${()=>t.onChannelSelect("imessage")}>
          ${i("channelsConfigure")}
        </button>
      </div>
    </div>
  `}function Fi(e){return e?e.length<=20?e:`${e.slice(0,8)}...${e.slice(-8)}`:i("commonNA")}function fm(e){const{props:t,nostr:n,nostrAccounts:s,accountCountLabel:a,profileFormState:o,profileFormCallbacks:l,onEditProfile:c}=e,u=s[0],f=n?.configured??u?.configured??!1,p=n?.running??u?.running??!1,g=n?.publicKey??u?.publicKey,$=n?.lastStartAt??u?.lastStartAt??null,k=n?.lastError??u?.lastError??null,S=s.length>1,d=o!=null,m=v=>{const C=v.publicKey,A=v.profile,E=A?.displayName??A?.name??v.name??v.accountId;return r`
      <div class="account-card">
        <div class="account-card-header">
          <div class="account-card-title">${E}</div>
          <div class="account-card-id">${v.accountId}</div>
        </div>
        <div class="status-list account-card-status">
          <div>
            <span class="label">${i("channelRunning")}</span>
            <span>${v.running?i("commonYes"):i("commonNo")}</span>
          </div>
          <div>
            <span class="label">${i("channelConfigured")}</span>
            <span>${v.configured?i("commonYes"):i("commonNo")}</span>
          </div>
          <div>
            <span class="label">${i("channelPublicKey")}</span>
            <span class="monospace" title="${C??""}">${Fi(C)}</span>
          </div>
          <div>
            <span class="label">${i("channelLastInbound")}</span>
            <span>${v.lastInboundAt?X(v.lastInboundAt):i("commonNA")}</span>
          </div>
          ${v.lastError?r`
                <div class="account-card-error">${v.lastError}</div>
              `:y}
        </div>
      </div>
    `},h=()=>{if(d&&l)return Nd({state:o,callbacks:l,accountId:s[0]?.accountId??"default"});const v=u?.profile??n?.profile,{name:C,displayName:A,about:E,picture:T,nip05:P}=v??{},_=C||A||E||T||P;return r`
      <div style="margin-top: 16px; padding: 12px; background: var(--bg-secondary); border-radius: 8px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <div style="font-weight: 500;">${i("nostrProfile")}</div>
          ${f?r`
                <button
                  class="btn btn-sm"
                  @click=${c}
                  style="font-size: 12px; padding: 4px 8px;"
                >
                  ${i("nostrEditProfile")}
                </button>
              `:y}
        </div>
        ${_?r`
              <div class="status-list">
                ${T?r`
                      <div style="margin-bottom: 8px;">
                        <img
                          src=${T}
                          alt=${i("nostrProfilePreview")}
                          style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border-color);"
                          @error=${U=>{U.target.style.display="none"}}
                        />
                      </div>
                    `:y}
                ${C?r`<div><span class="label">${i("nostrName")}</span><span>${C}</span></div>`:y}
                ${A?r`<div><span class="label">${i("nostrDisplayName")}</span><span>${A}</span></div>`:y}
                ${E?r`<div><span class="label">${i("nostrAbout")}</span><span style="max-width: 300px; overflow: hidden; text-overflow: ellipsis;">${E}</span></div>`:y}
                ${P?r`<div><span class="label">${i("nostrNip05")}</span><span>${P}</span></div>`:y}
              </div>
            `:r`
                <div style="color: var(--text-muted); font-size: 13px">
                  ${i("nostrNoProfileSet")}
                </div>
              `}
      </div>
    `};return r`
    <div class="card">
      <div class="card-title">${i("channelNostr")}</div>
      <div class="card-sub">${i("channelNostrSub")}</div>
      ${a}

      ${S?r`
            <div class="account-card-list">
              ${s.map(v=>m(v))}
            </div>
          `:r`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">${i("channelConfigured")}</span>
                <span>${i(f?"commonYes":"commonNo")}</span>
              </div>
              <div>
                <span class="label">${i("channelRunning")}</span>
                <span>${i(p?"commonYes":"commonNo")}</span>
              </div>
              <div>
                <span class="label">${i("channelPublicKey")}</span>
                <span class="monospace" title="${g??""}"
                  >${Fi(g)}</span
                >
              </div>
              <div>
                <span class="label">${i("channelLastStart")}</span>
                <span>${$?X($):i("commonNA")}</span>
              </div>
            </div>
          `}

      ${k?r`<div class="callout danger" style="margin-top: 12px;">${k}</div>`:y}

      ${h()}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!1)}>${i("commonRefresh")}</button>
        <button class="btn primary" @click=${()=>t.onChannelSelect("nostr")}>
          ${i("channelsConfigure")}
        </button>
      </div>
    </div>
  `}function hm(e){if(!e&&e!==0)return i("commonNA");const t=Math.round(e/1e3);if(t<60)return`${t}s`;const n=Math.round(t/60);return n<60?`${n}m`:`${Math.round(n/60)}h`}function vm(e,t){const n=t.snapshot,s=n?.channels;if(!n||!s)return!1;const a=s[e],o=typeof a?.configured=="boolean"&&a.configured,l=typeof a?.running=="boolean"&&a.running,c=typeof a?.connected=="boolean"&&a.connected,f=(n.channelAccounts?.[e]??[]).some(p=>p.configured||p.running||p.connected);return o||l||c||f}function ym(e,t){return t?.[e]?.length??0}function ec(e,t){const n=ym(e,t);return n<2?y:r`<div class="account-count">${i("channelAccounts")} (${n})</div>`}function bm(e){const{props:t,signal:n,accountCountLabel:s}=e;return r`
    <div class="card">
      <div class="card-title">${i("channelSignal")}</div>
      <div class="card-sub">${i("channelSignalSub")}</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${i("channelConfigured")}</span>
          <span>${n?.configured?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelRunning")}</span>
          <span>${n?.running?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelBaseUrl")}</span>
          <span>${n?.baseUrl??i("commonNA")}</span>
        </div>
        <div>
          <span class="label">${i("channelLastStart")}</span>
          <span>${n?.lastStartAt?X(n.lastStartAt):i("commonNA")}</span>
        </div>
        <div>
          <span class="label">${i("channelLastProbe")}</span>
          <span>${n?.lastProbeAt?X(n.lastProbeAt):i("commonNA")}</span>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:y}

      ${n?.probe?r`<div class="callout" style="margin-top: 12px;">
            ${i("channelProbe")} ${n.probe.ok?i("channelProbeOk"):i("channelProbeFailed")} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:y}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${i("channelProbe")}
        </button>
        <button class="btn primary" @click=${()=>t.onChannelSelect("signal")}>
          ${i("channelsConfigure")}
        </button>
      </div>
    </div>
  `}function wm(e){const{props:t,slack:n,accountCountLabel:s}=e;return r`
    <div class="card">
      <div class="card-title">${i("channelSlack")}</div>
      <div class="card-sub">${i("channelSlackSub")}</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${i("channelConfigured")}</span>
          <span>${n?.configured?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelRunning")}</span>
          <span>${n?.running?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelLastStart")}</span>
          <span>${n?.lastStartAt?X(n.lastStartAt):i("commonNA")}</span>
        </div>
        <div>
          <span class="label">${i("channelLastProbe")}</span>
          <span>${n?.lastProbeAt?X(n.lastProbeAt):i("commonNA")}</span>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:y}

      ${n?.probe?r`<div class="callout" style="margin-top: 12px;">
            ${i("channelProbe")} ${n.probe.ok?i("channelProbeOk"):i("channelProbeFailed")} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:y}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${i("channelProbe")}
        </button>
        <button class="btn primary" @click=${()=>t.onChannelSelect("slack")}>
          ${i("channelsConfigure")}
        </button>
      </div>
    </div>
  `}function xm(e){const{props:t,telegram:n,telegramAccounts:s,accountCountLabel:a}=e,o=s.length>1,l=c=>{const f=c.probe?.bot?.username,p=c.name||c.accountId;return r`
      <div class="account-card">
        <div class="account-card-header">
          <div class="account-card-title">
            ${f?`@${f}`:p}
          </div>
          <div class="account-card-id">${c.accountId}</div>
        </div>
        <div class="status-list account-card-status">
          <div>
            <span class="label">${i("channelRunning")}</span>
            <span>${c.running?i("commonYes"):i("commonNo")}</span>
          </div>
          <div>
            <span class="label">${i("channelConfigured")}</span>
            <span>${c.configured?i("commonYes"):i("commonNo")}</span>
          </div>
          <div>
            <span class="label">${i("channelLastInbound")}</span>
            <span>${c.lastInboundAt?X(c.lastInboundAt):i("commonNA")}</span>
          </div>
          ${c.lastError?r`
                <div class="account-card-error">
                  ${c.lastError}
                </div>
              `:y}
        </div>
      </div>
    `};return r`
    <div class="card">
      <div class="card-title">${i("channelTelegram")}</div>
      <div class="card-sub">${i("channelTelegramSub")}</div>
      ${a}

      ${o?r`
            <div class="account-card-list">
              ${s.map(c=>l(c))}
            </div>
          `:r`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">${i("channelConfigured")}</span>
                <span>${n?.configured?i("commonYes"):i("commonNo")}</span>
              </div>
              <div>
                <span class="label">${i("channelRunning")}</span>
                <span>${n?.running?i("commonYes"):i("commonNo")}</span>
              </div>
              <div>
                <span class="label">${i("channelMode")}</span>
                <span>${n?.mode??i("commonNA")}</span>
              </div>
              <div>
                <span class="label">${i("channelLastStart")}</span>
                <span>${n?.lastStartAt?X(n.lastStartAt):i("commonNA")}</span>
              </div>
              <div>
                <span class="label">${i("channelLastProbe")}</span>
                <span>${n?.lastProbeAt?X(n.lastProbeAt):i("commonNA")}</span>
              </div>
            </div>
          `}

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:y}

      ${n?.probe?r`<div class="callout" style="margin-top: 12px;">
            ${i("channelProbe")} ${n.probe.ok?i("channelProbeOk"):i("channelProbeFailed")} ·
            ${n.probe.status??""} ${n.probe.error??""}
          </div>`:y}

      <div class="row" style="margin-top: 12px;">
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${i("channelProbe")}
        </button>
        <button class="btn primary" @click=${()=>t.onChannelSelect("telegram")}>
          ${i("channelsConfigure")}
        </button>
      </div>
    </div>
  `}function $m(e){return`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(e)}`}function km(e){if(!e.weworkQrModalOpen)return y;const t=e.weworkQrModalAuthUrl&&!e.weworkQrModalLoading&&!e.weworkQrModalSuccess&&!e.weworkQrModalError,n=(e.weworkQrModalLoading||e.weworkQrModalPolling)&&!e.weworkQrModalSuccess&&!e.weworkQrModalError;return r`
    <div
      class="channel-panel-overlay"
      style="z-index: 1200;"
      @click=${s=>{s.target.classList.contains("channel-panel-overlay")&&e.onWeWorkQrModalClose()}}
    >
      <div class="card channel-panel" style="max-width: 400px; width: 92%;" @click=${s=>s.stopPropagation()}>
        <div class="row" style="justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <div class="card-title" style="margin: 0;">${i("channelWeWorkQrModalTitle")}</div>
          <button type="button" class="btn" @click=${()=>e.onWeWorkQrModalClose()}>×</button>
        </div>

        ${e.weworkQrModalReplaceWarn?r`<div class="callout danger" style="margin-bottom: 12px;">
                ${i("channelWeWorkQrReplaceWarn")}
              </div>`:y}

        ${e.weworkQrModalError?r`<div class="callout danger" style="margin-bottom: 12px;">
                ${e.weworkQrModalError}
              </div>`:y}

        ${e.weworkQrModalSuccess?r`<div class="callout" style="margin-bottom: 12px;">
                ${i("channelWeWorkQrSuccessClosing")}
              </div>`:y}

        ${t?r`
                <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
                  <img
                    src=${$m(e.weworkQrModalAuthUrl)}
                    alt="WeCom QR"
                    referrerpolicy="no-referrer"
                  />
                  ${e.weworkQrModalGenPageUrl?r`
                          <a
                            class="btn primary"
                            href=${e.weworkQrModalGenPageUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            ${i("channelWeWorkOpenGenPage")}
                          </a>
                        `:y}
                </div>
              `:y}

        ${n?r`
                <div
                  style="display: flex; flex-direction: column; align-items: center; gap: 10px; margin-top: ${t?"16px":"8px"};"
                >
                  <div
                    class="config-loading__spinner"
                    role="status"
                    aria-label=${e.weworkQrModalLoading?i("channelWeWorkQrPreparing"):i("channelWeWorkQrWaiting")}
                  ></div>
                  <div class="muted" style="font-size: 13px; text-align: center;">
                    ${e.weworkQrModalLoading?i("channelWeWorkQrPreparing"):i("channelWeWorkQrWaiting")}
                  </div>
                </div>
              `:y}

        <div class="row" style="margin-top: 18px; justify-content: flex-end;">
          <button type="button" class="btn" @click=${()=>e.onWeWorkQrModalClose()}>
            ${i("channelWeWorkQrModalCancel")}
          </button>
        </div>
      </div>
    </div>
  `}function Sm(e){const{props:t,wework:n,accountCountLabel:s}=e,a=t.snapshot?.channelAccounts?.wework?.[0],o=a?.probe,l=t.weworkQrModalOpen&&(t.weworkQrModalLoading||t.weworkQrModalPolling)&&!t.weworkQrModalSuccess;return r`
    ${km(t)}
    <div class="card">
      <div class="card-title">${i("channelWeWork")}</div>
      <div class="card-sub">${i("channelWeWorkSub")}</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${i("channelConfigured")}</span>
          <span>${n?.configured?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelWeWorkTransport")}</span>
          <span>${o?.transport??"wecom_aibot_ws"}</span>
        </div>
        <div>
          <span class="label">${i("channelWeWorkBotId")}</span>
          <span>${a?.appId?a.appId:i("commonNA")}</span>
        </div>
        <div>
          <span class="label">${i("channelRunning")}</span>
          <span>${n?.running?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelConnected")}</span>
          <span
            >${(()=>{const c=n?.connected??a?.connected;return i(c===!0?"commonYes":c===!1?"commonNo":"commonNA")})()}</span
          >
        </div>
        <div>
          <span class="label">${i("channelLastInbound")}</span>
          <span>${a?.lastInboundAt?X(a.lastInboundAt):i("commonNA")}</span>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:y}

      <div class="row" style="margin-top: 14px; flex-wrap: wrap;">
        <button
          class="btn danger"
          style="background: var(--danger); color: #fff; border-color: transparent;"
          ?disabled=${l}
          @click=${()=>t.onWeWorkQrStart()}
        >
          ${i(l?"channelWeWorkQrWorking":"channelWeWorkQrStart")}
        </button>
        <button
          class="btn danger"
          style="background: var(--danger); color: #fff; border-color: transparent;"
          @click=${()=>t.onChannelSelect("wework")}
        >
          ${i("channelsConfigure")}
        </button>
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${i("commonRefresh")}
        </button>
      </div>
    </div>
  `}function Cm(e){const{props:t,whatsapp:n,accountCountLabel:s}=e;return r`
    <div class="card">
      <div class="card-title">${i("channelWhatsApp")}</div>
      <div class="card-sub">${i("channelWhatsAppSub")}</div>
      ${s}

      <div class="status-list" style="margin-top: 16px;">
        <div>
          <span class="label">${i("channelConfigured")}</span>
          <span>${n?.configured?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelLinked")}</span>
          <span>${n?.linked?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelRunning")}</span>
          <span>${n?.running?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelConnected")}</span>
          <span>${n?.connected?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelLastConnect")}</span>
          <span>
            ${n?.lastConnectedAt?X(n.lastConnectedAt):i("commonNA")}
          </span>
        </div>
        <div>
          <span class="label">${i("channelLastMessage")}</span>
          <span>
            ${n?.lastMessageAt?X(n.lastMessageAt):i("commonNA")}
          </span>
        </div>
        <div>
          <span class="label">${i("channelAuthAge")}</span>
          <span>
            ${n?.authAgeMs!=null?hm(n.authAgeMs):i("commonNA")}
          </span>
        </div>
      </div>

      ${n?.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${n.lastError}
          </div>`:y}

      ${t.whatsappMessage?r`<div class="callout" style="margin-top: 12px;">
            ${t.whatsappMessage}
          </div>`:y}

      ${t.whatsappQrDataUrl?r`<div class="qr-wrap">
            <img src=${t.whatsappQrDataUrl} alt="WhatsApp QR" />
          </div>`:y}

      <div class="row" style="margin-top: 14px; flex-wrap: wrap;">
        <button
          class="btn primary"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppStart(!1)}
        >
          ${t.whatsappBusy?i("channelWhatsAppWorking"):i("channelShowQr")}
        </button>
        <button
          class="btn"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppStart(!0)}
        >
          ${i("channelRelink")}
        </button>
        <button
          class="btn"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppWait()}
        >
          ${i("channelWaitForScan")}
        </button>
        <button
          class="btn danger"
          ?disabled=${t.whatsappBusy}
          @click=${()=>t.onWhatsAppLogout()}
        >
          ${i("channelLogout")}
        </button>
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${i("commonRefresh")}
        </button>
        <button class="btn primary" @click=${()=>t.onChannelSelect("whatsapp")}>
          ${i("channelsConfigure")}
        </button>
      </div>
    </div>
  `}function Am(e){const t=e.snapshot?.channels,n=t?.whatsapp??void 0,s=t?.telegram??void 0,a=t?.discord??null,o=t?.googlechat??null,l=t?.slack??null,c=t?.signal??null,u=t?.imessage??null,f=t?.nostr??null,p=t?.wework??void 0,$=Mm(e.snapshot).map((k,S)=>({key:k,enabled:vm(k,e),order:S})).toSorted((k,S)=>k.enabled!==S.enabled?k.enabled?-1:1:k.order-S.order);return r`
    <section class="grid grid-cols-2">
      ${$.map(k=>Em(k.key,e,{whatsapp:n,telegram:s,discord:a,googlechat:o,slack:l,signal:c,imessage:u,nostr:f,wework:p,channelAccounts:e.snapshot?.channelAccounts??null}))}
    </section>

    ${um(e)}

    <section class="card" style="margin-top: 18px;">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">${i("channelsHealth")}</div>
          <div class="card-sub">${i("channelsHealthSub")}</div>
        </div>
        <div class="muted">${e.lastSuccessAt?X(e.lastSuccessAt):i("commonNA")}</div>
      </div>
      ${e.lastError?r`<div class="callout danger" style="margin-top: 12px;">
            ${e.lastError}
          </div>`:y}
      <pre class="code-block" style="margin-top: 12px;">
${e.snapshot?JSON.stringify(e.snapshot,null,2):i("channelsNoSnapshot")}
      </pre>
    </section>
  `}function Mm(e){return e?.channelMeta?.length?e.channelMeta.map(t=>t.id):e?.channelOrder?.length?e.channelOrder:["whatsapp","telegram","discord","googlechat","slack","signal","imessage","nostr","wework"]}function Em(e,t,n){const s=ec(e,n.channelAccounts);switch(e){case"whatsapp":return Cm({props:t,whatsapp:n.whatsapp,accountCountLabel:s});case"telegram":return xm({props:t,telegram:n.telegram,telegramAccounts:n.channelAccounts?.telegram??[],accountCountLabel:s});case"discord":return pm({props:t,discord:n.discord,accountCountLabel:s});case"googlechat":return gm({props:t,googleChat:n.googlechat,accountCountLabel:s});case"slack":return wm({props:t,slack:n.slack,accountCountLabel:s});case"signal":return bm({props:t,signal:n.signal,accountCountLabel:s});case"imessage":return mm({props:t,imessage:n.imessage,accountCountLabel:s});case"wework":return Sm({props:t,wework:n.wework,accountCountLabel:s});case"nostr":{const a=n.channelAccounts?.nostr??[],o=a[0],l=o?.accountId??"default",c=o?.profile??null,u=t.nostrProfileAccountId===l?t.nostrProfileFormState:null,f=u?{onFieldChange:t.onNostrProfileFieldChange,onSave:t.onNostrProfileSave,onImport:t.onNostrProfileImport,onCancel:t.onNostrProfileCancel,onToggleAdvanced:t.onNostrProfileToggleAdvanced}:null;return fm({props:t,nostr:n.nostr,nostrAccounts:a,accountCountLabel:s,profileFormState:u,profileFormCallbacks:f,onEditProfile:()=>t.onNostrProfileEdit(l,c)})}default:return Tm(e,t,n.channelAccounts??{})}}function Tm(e,t,n){const s=_m(t.snapshot,e),a=t.snapshot?.channels?.[e],o=typeof a?.configured=="boolean"?a.configured:void 0,l=typeof a?.running=="boolean"?a.running:void 0,c=typeof a?.connected=="boolean"?a.connected:void 0,u=typeof a?.lastError=="string"?a.lastError:void 0,f=n[e]??[],p=ec(e,n);return r`
    <div class="card">
      <div class="card-title">${s}</div>
      <div class="card-sub">${i("channelGenericSub")}</div>
      ${p}

      ${f.length>0?r`
            <div class="account-card-list">
              ${f.map(g=>Rm(g))}
            </div>
          `:r`
            <div class="status-list" style="margin-top: 16px;">
              <div>
                <span class="label">${i("channelConfigured")}</span>
                <span>${o==null?i("commonNA"):i(o?"commonYes":"commonNo")}</span>
              </div>
              <div>
                <span class="label">${i("channelRunning")}</span>
                <span>${l==null?i("commonNA"):i(l?"commonYes":"commonNo")}</span>
              </div>
              <div>
                <span class="label">${i("channelConnected")}</span>
                <span>${c==null?i("commonNA"):i(c?"commonYes":"commonNo")}</span>
              </div>
            </div>
          `}

      ${u?r`<div class="callout danger" style="margin-top: 12px;">
            ${u}
          </div>`:y}

      <div class="row" style="margin-top: 12px;">
        <button class="btn primary" @click=${()=>t.onChannelSelect(e)}>
          ${i("channelsConfigure")}
        </button>
        <button class="btn" @click=${()=>t.onRefresh(!0)}>
          ${i("commonRefresh")}
        </button>
      </div>
    </div>
  `}function Pm(e){return e?.channelMeta?.length?Object.fromEntries(e.channelMeta.map(t=>[t.id,t])):{}}function _m(e,t){return Pm(e)[t]?.label??e?.channelLabels?.[t]??t}const Lm=600*1e3;function tc(e){return e.lastInboundAt?Date.now()-e.lastInboundAt<Lm:!1}function Im(e){return e.running?"commonYes":tc(e)?"channelActive":"commonNo"}function Dm(e){return e.connected===!0?"commonYes":e.connected===!1?"commonNo":tc(e)?"channelActive":"commonNA"}function Rm(e){const t=Im(e),n=Dm(e);return r`
    <div class="account-card">
      <div class="account-card-header">
        <div class="account-card-title">${e.name||e.accountId}</div>
        <div class="account-card-id">${e.accountId}</div>
      </div>
      <div class="status-list account-card-status">
        <div>
          <span class="label">${i("channelRunning")}</span>
          <span>${i(t)}</span>
        </div>
        <div>
          <span class="label">${i("channelConfigured")}</span>
          <span>${e.configured?i("commonYes"):i("commonNo")}</span>
        </div>
        <div>
          <span class="label">${i("channelConnected")}</span>
          <span>${i(n)}</span>
        </div>
        <div>
          <span class="label">${i("channelLastInbound")}</span>
          <span>${e.lastInboundAt?X(e.lastInboundAt):i("commonNA")}</span>
        </div>
        ${e.lastError?r`
              <div class="account-card-error">
                ${e.lastError}
              </div>
            `:y}
      </div>
    </div>
  `}const{I:Nm}=yd,Bi=e=>e,Um=e=>e.strings===void 0,Hi=()=>document.createComment(""),Xt=(e,t,n)=>{const s=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(n===void 0){const o=s.insertBefore(Hi(),a),l=s.insertBefore(Hi(),a);n=new Nm(o,l,e,e.options)}else{const o=n._$AB.nextSibling,l=n._$AM,c=l!==e;if(c){let u;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(u=e._$AU)!==l._$AU&&n._$AP(u)}if(o!==a||c){let u=n._$AA;for(;u!==o;){const f=Bi(u).nextSibling;Bi(s).insertBefore(u,a),u=f}}}return n},ut=(e,t,n=e)=>(e._$AI(t,n),e),Om={},Fm=(e,t=Om)=>e._$AH=t,Bm=e=>e._$AH,Js=e=>{e._$AR(),e._$AA.remove()};const fo={CHILD:2},ho=e=>(...t)=>({_$litDirective$:e,values:t});class vo{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,s){this._$Ct=t,this._$AM=n,this._$Ci=s}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}const vn=(e,t)=>{const n=e._$AN;if(n===void 0)return!1;for(const s of n)s._$AO?.(t,!1),vn(s,t);return!0},ls=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},nc=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Wm(t)}};function Hm(e){this._$AN!==void 0?(ls(this),this._$AM=e,nc(this)):this._$AM=e}function zm(e,t=!1,n=0){const s=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(t)if(Array.isArray(s))for(let o=n;o<s.length;o++)vn(s[o],!1),ls(s[o]);else s!=null&&(vn(s,!1),ls(s));else vn(this,e)}const Wm=e=>{e.type==fo.CHILD&&(e._$AP??=zm,e._$AQ??=Hm)};class Km extends vo{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,s){super._$AT(t,n,s),nc(this),this.isConnected=t._$AU}_$AO(t,n=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),n&&(vn(this,t),ls(this))}setValue(t){if(Um(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const Ys=new WeakMap,qm=ho(class extends Km{render(e){return y}update(e,[t]){const n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),y}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let n=Ys.get(t);n===void 0&&(n=new WeakMap,Ys.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Ys.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});const zi=(e,t,n)=>{const s=new Map;for(let a=t;a<=n;a++)s.set(e[a],a);return s},jm=ho(class extends vo{constructor(e){if(super(e),e.type!==fo.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let s;n===void 0?n=t:t!==void 0&&(s=t);const a=[],o=[];let l=0;for(const c of e)a[l]=s?s(c,l):l,o[l]=n(c,l),l++;return{values:o,keys:a}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,s]){const a=Bm(e),{values:o,keys:l}=this.dt(t,n,s);if(!Array.isArray(a))return this.ut=l,o;const c=this.ut??=[],u=[];let f,p,g=0,$=a.length-1,k=0,S=o.length-1;for(;g<=$&&k<=S;)if(a[g]===null)g++;else if(a[$]===null)$--;else if(c[g]===l[k])u[k]=ut(a[g],o[k]),g++,k++;else if(c[$]===l[S])u[S]=ut(a[$],o[S]),$--,S--;else if(c[g]===l[S])u[S]=ut(a[g],o[S]),Xt(e,u[S+1],a[g]),g++,S--;else if(c[$]===l[k])u[k]=ut(a[$],o[k]),Xt(e,a[g],a[$]),$--,k++;else if(f===void 0&&(f=zi(l,k,S),p=zi(c,g,$)),f.has(c[g]))if(f.has(c[$])){const d=p.get(l[k]),m=d!==void 0?a[d]:null;if(m===null){const h=Xt(e,a[g]);ut(h,o[k]),u[k]=h}else u[k]=ut(m,o[k]),Xt(e,a[g],m),a[d]=null;k++}else Js(a[$]),$--;else Js(a[g]),g++;for(;k<=S;){const d=Xt(e,u[S+1]);ut(d,o[k]),u[k++]=d}for(;g<=$;){const d=a[g++];d!==null&&Js(d)}return this.ut=l,Fm(e,u),st}});class Pa extends vo{constructor(t){if(super(t),this.it=y,t.type!==fo.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===y||t==null)return this._t=void 0,this.it=t;if(t===st)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}Pa.directiveName="unsafeHTML",Pa.resultType=1;const qt=ho(Pa);const{entries:sc,setPrototypeOf:Wi,isFrozen:Qm,getPrototypeOf:Vm,getOwnPropertyDescriptor:Gm}=Object;let{freeze:be,seal:Pe,create:_a}=Object,{apply:La,construct:Ia}=typeof Reflect<"u"&&Reflect;be||(be=function(t){return t});Pe||(Pe=function(t){return t});La||(La=function(t,n){for(var s=arguments.length,a=new Array(s>2?s-2:0),o=2;o<s;o++)a[o-2]=arguments[o];return t.apply(n,a)});Ia||(Ia=function(t){for(var n=arguments.length,s=new Array(n>1?n-1:0),a=1;a<n;a++)s[a-1]=arguments[a];return new t(...s)});const jn=we(Array.prototype.forEach),Jm=we(Array.prototype.lastIndexOf),Ki=we(Array.prototype.pop),en=we(Array.prototype.push),Ym=we(Array.prototype.splice),es=we(String.prototype.toLowerCase),Zs=we(String.prototype.toString),Xs=we(String.prototype.match),tn=we(String.prototype.replace),Zm=we(String.prototype.indexOf),Xm=we(String.prototype.trim),_e=we(Object.prototype.hasOwnProperty),ve=we(RegExp.prototype.test),nn=ef(TypeError);function we(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,s=new Array(n>1?n-1:0),a=1;a<n;a++)s[a-1]=arguments[a];return La(e,t,s)}}function ef(e){return function(){for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return Ia(e,n)}}function Q(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:es;Wi&&Wi(e,null);let s=t.length;for(;s--;){let a=t[s];if(typeof a=="string"){const o=n(a);o!==a&&(Qm(t)||(t[s]=o),a=o)}e[a]=!0}return e}function tf(e){for(let t=0;t<e.length;t++)_e(e,t)||(e[t]=null);return e}function Fe(e){const t=_a(null);for(const[n,s]of sc(e))_e(e,n)&&(Array.isArray(s)?t[n]=tf(s):s&&typeof s=="object"&&s.constructor===Object?t[n]=Fe(s):t[n]=s);return t}function sn(e,t){for(;e!==null;){const s=Gm(e,t);if(s){if(s.get)return we(s.get);if(typeof s.value=="function")return we(s.value)}e=Vm(e)}function n(){return null}return n}const qi=be(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),ea=be(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ta=be(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),nf=be(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),na=be(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),sf=be(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ji=be(["#text"]),Qi=be(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),sa=be(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Vi=be(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Qn=be(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),af=Pe(/\{\{[\w\W]*|[\w\W]*\}\}/gm),of=Pe(/<%[\w\W]*|[\w\W]*%>/gm),lf=Pe(/\$\{[\w\W]*/gm),rf=Pe(/^data-[\-\w.\u00B7-\uFFFF]+$/),cf=Pe(/^aria-[\-\w]+$/),ac=Pe(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),df=Pe(/^(?:\w+script|data):/i),uf=Pe(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),oc=Pe(/^html$/i),pf=Pe(/^[a-z][.\w]*(-[.\w]+)+$/i);var Gi=Object.freeze({__proto__:null,ARIA_ATTR:cf,ATTR_WHITESPACE:uf,CUSTOM_ELEMENT:pf,DATA_ATTR:rf,DOCTYPE_NAME:oc,ERB_EXPR:of,IS_ALLOWED_URI:ac,IS_SCRIPT_OR_DATA:df,MUSTACHE_EXPR:af,TMPLIT_EXPR:lf});const an={element:1,text:3,progressingInstruction:7,comment:8,document:9},gf=function(){return typeof window>"u"?null:window},mf=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let s=null;const a="data-tt-policy-suffix";n&&n.hasAttribute(a)&&(s=n.getAttribute(a));const o="dompurify"+(s?"#"+s:"");try{return t.createPolicy(o,{createHTML(l){return l},createScriptURL(l){return l}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}},Ji=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function ic(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:gf();const t=K=>ic(K);if(t.version="3.3.1",t.removed=[],!e||!e.document||e.document.nodeType!==an.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e;const s=n,a=s.currentScript,{DocumentFragment:o,HTMLTemplateElement:l,Node:c,Element:u,NodeFilter:f,NamedNodeMap:p=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:g,DOMParser:$,trustedTypes:k}=e,S=u.prototype,d=sn(S,"cloneNode"),m=sn(S,"remove"),h=sn(S,"nextSibling"),v=sn(S,"childNodes"),C=sn(S,"parentNode");if(typeof l=="function"){const K=n.createElement("template");K.content&&K.content.ownerDocument&&(n=K.content.ownerDocument)}let A,E="";const{implementation:T,createNodeIterator:P,createDocumentFragment:_,getElementsByTagName:U}=n,{importNode:W}=s;let R=Ji();t.isSupported=typeof sc=="function"&&typeof C=="function"&&T&&T.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:L,ERB_EXPR:fe,TMPLIT_EXPR:D,DATA_ATTR:q,ARIA_ATTR:re,IS_SCRIPT_OR_DATA:ce,ATTR_WHITESPACE:se,CUSTOM_ELEMENT:ie}=Gi;let{IS_ALLOWED_URI:N}=Gi,O=null;const F=Q({},[...qi,...ea,...ta,...na,...ji]);let j=null;const $e=Q({},[...Qi,...sa,...Vi,...Qn]);let ee=Object.seal(_a(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Me=null,ae=null;const he=Object.seal(_a(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let He=!0,ze=!0,lt=!1,Do=!0,_t=!1,Rn=!0,rt=!1,Es=!1,Ts=!1,Lt=!1,Nn=!1,Un=!1,Ro=!0,No=!1;const qc="user-content-";let Ps=!0,Jt=!1,It={},Ne=null;const _s=Q({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Uo=null;const Oo=Q({},["audio","video","img","source","image","track"]);let Ls=null;const Fo=Q({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),On="http://www.w3.org/1998/Math/MathML",Fn="http://www.w3.org/2000/svg",We="http://www.w3.org/1999/xhtml";let Dt=We,Is=!1,Ds=null;const jc=Q({},[On,Fn,We],Zs);let Bn=Q({},["mi","mo","mn","ms","mtext"]),Hn=Q({},["annotation-xml"]);const Qc=Q({},["title","style","font","a","script"]);let Yt=null;const Vc=["application/xhtml+xml","text/html"],Gc="text/html";let le=null,Rt=null;const Jc=n.createElement("form"),Bo=function(M){return M instanceof RegExp||M instanceof Function},Rs=function(){let M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Rt&&Rt===M)){if((!M||typeof M!="object")&&(M={}),M=Fe(M),Yt=Vc.indexOf(M.PARSER_MEDIA_TYPE)===-1?Gc:M.PARSER_MEDIA_TYPE,le=Yt==="application/xhtml+xml"?Zs:es,O=_e(M,"ALLOWED_TAGS")?Q({},M.ALLOWED_TAGS,le):F,j=_e(M,"ALLOWED_ATTR")?Q({},M.ALLOWED_ATTR,le):$e,Ds=_e(M,"ALLOWED_NAMESPACES")?Q({},M.ALLOWED_NAMESPACES,Zs):jc,Ls=_e(M,"ADD_URI_SAFE_ATTR")?Q(Fe(Fo),M.ADD_URI_SAFE_ATTR,le):Fo,Uo=_e(M,"ADD_DATA_URI_TAGS")?Q(Fe(Oo),M.ADD_DATA_URI_TAGS,le):Oo,Ne=_e(M,"FORBID_CONTENTS")?Q({},M.FORBID_CONTENTS,le):_s,Me=_e(M,"FORBID_TAGS")?Q({},M.FORBID_TAGS,le):Fe({}),ae=_e(M,"FORBID_ATTR")?Q({},M.FORBID_ATTR,le):Fe({}),It=_e(M,"USE_PROFILES")?M.USE_PROFILES:!1,He=M.ALLOW_ARIA_ATTR!==!1,ze=M.ALLOW_DATA_ATTR!==!1,lt=M.ALLOW_UNKNOWN_PROTOCOLS||!1,Do=M.ALLOW_SELF_CLOSE_IN_ATTR!==!1,_t=M.SAFE_FOR_TEMPLATES||!1,Rn=M.SAFE_FOR_XML!==!1,rt=M.WHOLE_DOCUMENT||!1,Lt=M.RETURN_DOM||!1,Nn=M.RETURN_DOM_FRAGMENT||!1,Un=M.RETURN_TRUSTED_TYPE||!1,Ts=M.FORCE_BODY||!1,Ro=M.SANITIZE_DOM!==!1,No=M.SANITIZE_NAMED_PROPS||!1,Ps=M.KEEP_CONTENT!==!1,Jt=M.IN_PLACE||!1,N=M.ALLOWED_URI_REGEXP||ac,Dt=M.NAMESPACE||We,Bn=M.MATHML_TEXT_INTEGRATION_POINTS||Bn,Hn=M.HTML_INTEGRATION_POINTS||Hn,ee=M.CUSTOM_ELEMENT_HANDLING||{},M.CUSTOM_ELEMENT_HANDLING&&Bo(M.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(ee.tagNameCheck=M.CUSTOM_ELEMENT_HANDLING.tagNameCheck),M.CUSTOM_ELEMENT_HANDLING&&Bo(M.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(ee.attributeNameCheck=M.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),M.CUSTOM_ELEMENT_HANDLING&&typeof M.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(ee.allowCustomizedBuiltInElements=M.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),_t&&(ze=!1),Nn&&(Lt=!0),It&&(O=Q({},ji),j=[],It.html===!0&&(Q(O,qi),Q(j,Qi)),It.svg===!0&&(Q(O,ea),Q(j,sa),Q(j,Qn)),It.svgFilters===!0&&(Q(O,ta),Q(j,sa),Q(j,Qn)),It.mathMl===!0&&(Q(O,na),Q(j,Vi),Q(j,Qn))),M.ADD_TAGS&&(typeof M.ADD_TAGS=="function"?he.tagCheck=M.ADD_TAGS:(O===F&&(O=Fe(O)),Q(O,M.ADD_TAGS,le))),M.ADD_ATTR&&(typeof M.ADD_ATTR=="function"?he.attributeCheck=M.ADD_ATTR:(j===$e&&(j=Fe(j)),Q(j,M.ADD_ATTR,le))),M.ADD_URI_SAFE_ATTR&&Q(Ls,M.ADD_URI_SAFE_ATTR,le),M.FORBID_CONTENTS&&(Ne===_s&&(Ne=Fe(Ne)),Q(Ne,M.FORBID_CONTENTS,le)),M.ADD_FORBID_CONTENTS&&(Ne===_s&&(Ne=Fe(Ne)),Q(Ne,M.ADD_FORBID_CONTENTS,le)),Ps&&(O["#text"]=!0),rt&&Q(O,["html","head","body"]),O.table&&(Q(O,["tbody"]),delete Me.tbody),M.TRUSTED_TYPES_POLICY){if(typeof M.TRUSTED_TYPES_POLICY.createHTML!="function")throw nn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof M.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw nn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');A=M.TRUSTED_TYPES_POLICY,E=A.createHTML("")}else A===void 0&&(A=mf(k,a)),A!==null&&typeof E=="string"&&(E=A.createHTML(""));be&&be(M),Rt=M}},Ho=Q({},[...ea,...ta,...nf]),zo=Q({},[...na,...sf]),Yc=function(M){let I=C(M);(!I||!I.tagName)&&(I={namespaceURI:Dt,tagName:"template"});const H=es(M.tagName),te=es(I.tagName);return Ds[M.namespaceURI]?M.namespaceURI===Fn?I.namespaceURI===We?H==="svg":I.namespaceURI===On?H==="svg"&&(te==="annotation-xml"||Bn[te]):!!Ho[H]:M.namespaceURI===On?I.namespaceURI===We?H==="math":I.namespaceURI===Fn?H==="math"&&Hn[te]:!!zo[H]:M.namespaceURI===We?I.namespaceURI===Fn&&!Hn[te]||I.namespaceURI===On&&!Bn[te]?!1:!zo[H]&&(Qc[H]||!Ho[H]):!!(Yt==="application/xhtml+xml"&&Ds[M.namespaceURI]):!1},Ue=function(M){en(t.removed,{element:M});try{C(M).removeChild(M)}catch{m(M)}},ct=function(M,I){try{en(t.removed,{attribute:I.getAttributeNode(M),from:I})}catch{en(t.removed,{attribute:null,from:I})}if(I.removeAttribute(M),M==="is")if(Lt||Nn)try{Ue(I)}catch{}else try{I.setAttribute(M,"")}catch{}},Wo=function(M){let I=null,H=null;if(Ts)M="<remove></remove>"+M;else{const oe=Xs(M,/^[\r\n\t ]+/);H=oe&&oe[0]}Yt==="application/xhtml+xml"&&Dt===We&&(M='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+M+"</body></html>");const te=A?A.createHTML(M):M;if(Dt===We)try{I=new $().parseFromString(te,Yt)}catch{}if(!I||!I.documentElement){I=T.createDocument(Dt,"template",null);try{I.documentElement.innerHTML=Is?E:te}catch{}}const pe=I.body||I.documentElement;return M&&H&&pe.insertBefore(n.createTextNode(H),pe.childNodes[0]||null),Dt===We?U.call(I,rt?"html":"body")[0]:rt?I.documentElement:pe},Ko=function(M){return P.call(M.ownerDocument||M,M,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT|f.SHOW_PROCESSING_INSTRUCTION|f.SHOW_CDATA_SECTION,null)},Ns=function(M){return M instanceof g&&(typeof M.nodeName!="string"||typeof M.textContent!="string"||typeof M.removeChild!="function"||!(M.attributes instanceof p)||typeof M.removeAttribute!="function"||typeof M.setAttribute!="function"||typeof M.namespaceURI!="string"||typeof M.insertBefore!="function"||typeof M.hasChildNodes!="function")},qo=function(M){return typeof c=="function"&&M instanceof c};function Ke(K,M,I){jn(K,H=>{H.call(t,M,I,Rt)})}const jo=function(M){let I=null;if(Ke(R.beforeSanitizeElements,M,null),Ns(M))return Ue(M),!0;const H=le(M.nodeName);if(Ke(R.uponSanitizeElement,M,{tagName:H,allowedTags:O}),Rn&&M.hasChildNodes()&&!qo(M.firstElementChild)&&ve(/<[/\w!]/g,M.innerHTML)&&ve(/<[/\w!]/g,M.textContent)||M.nodeType===an.progressingInstruction||Rn&&M.nodeType===an.comment&&ve(/<[/\w]/g,M.data))return Ue(M),!0;if(!(he.tagCheck instanceof Function&&he.tagCheck(H))&&(!O[H]||Me[H])){if(!Me[H]&&Vo(H)&&(ee.tagNameCheck instanceof RegExp&&ve(ee.tagNameCheck,H)||ee.tagNameCheck instanceof Function&&ee.tagNameCheck(H)))return!1;if(Ps&&!Ne[H]){const te=C(M)||M.parentNode,pe=v(M)||M.childNodes;if(pe&&te){const oe=pe.length;for(let xe=oe-1;xe>=0;--xe){const qe=d(pe[xe],!0);qe.__removalCount=(M.__removalCount||0)+1,te.insertBefore(qe,h(M))}}}return Ue(M),!0}return M instanceof u&&!Yc(M)||(H==="noscript"||H==="noembed"||H==="noframes")&&ve(/<\/no(script|embed|frames)/i,M.innerHTML)?(Ue(M),!0):(_t&&M.nodeType===an.text&&(I=M.textContent,jn([L,fe,D],te=>{I=tn(I,te," ")}),M.textContent!==I&&(en(t.removed,{element:M.cloneNode()}),M.textContent=I)),Ke(R.afterSanitizeElements,M,null),!1)},Qo=function(M,I,H){if(Ro&&(I==="id"||I==="name")&&(H in n||H in Jc))return!1;if(!(ze&&!ae[I]&&ve(q,I))){if(!(He&&ve(re,I))){if(!(he.attributeCheck instanceof Function&&he.attributeCheck(I,M))){if(!j[I]||ae[I]){if(!(Vo(M)&&(ee.tagNameCheck instanceof RegExp&&ve(ee.tagNameCheck,M)||ee.tagNameCheck instanceof Function&&ee.tagNameCheck(M))&&(ee.attributeNameCheck instanceof RegExp&&ve(ee.attributeNameCheck,I)||ee.attributeNameCheck instanceof Function&&ee.attributeNameCheck(I,M))||I==="is"&&ee.allowCustomizedBuiltInElements&&(ee.tagNameCheck instanceof RegExp&&ve(ee.tagNameCheck,H)||ee.tagNameCheck instanceof Function&&ee.tagNameCheck(H))))return!1}else if(!Ls[I]){if(!ve(N,tn(H,se,""))){if(!((I==="src"||I==="xlink:href"||I==="href")&&M!=="script"&&Zm(H,"data:")===0&&Uo[M])){if(!(lt&&!ve(ce,tn(H,se,"")))){if(H)return!1}}}}}}}return!0},Vo=function(M){return M!=="annotation-xml"&&Xs(M,ie)},Go=function(M){Ke(R.beforeSanitizeAttributes,M,null);const{attributes:I}=M;if(!I||Ns(M))return;const H={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:j,forceKeepAttr:void 0};let te=I.length;for(;te--;){const pe=I[te],{name:oe,namespaceURI:xe,value:qe}=pe,Nt=le(oe),Us=qe;let ue=oe==="value"?Us:Xm(Us);if(H.attrName=Nt,H.attrValue=ue,H.keepAttr=!0,H.forceKeepAttr=void 0,Ke(R.uponSanitizeAttribute,M,H),ue=H.attrValue,No&&(Nt==="id"||Nt==="name")&&(ct(oe,M),ue=qc+ue),Rn&&ve(/((--!?|])>)|<\/(style|title|textarea)/i,ue)){ct(oe,M);continue}if(Nt==="attributename"&&Xs(ue,"href")){ct(oe,M);continue}if(H.forceKeepAttr)continue;if(!H.keepAttr){ct(oe,M);continue}if(!Do&&ve(/\/>/i,ue)){ct(oe,M);continue}_t&&jn([L,fe,D],Yo=>{ue=tn(ue,Yo," ")});const Jo=le(M.nodeName);if(!Qo(Jo,Nt,ue)){ct(oe,M);continue}if(A&&typeof k=="object"&&typeof k.getAttributeType=="function"&&!xe)switch(k.getAttributeType(Jo,Nt)){case"TrustedHTML":{ue=A.createHTML(ue);break}case"TrustedScriptURL":{ue=A.createScriptURL(ue);break}}if(ue!==Us)try{xe?M.setAttributeNS(xe,oe,ue):M.setAttribute(oe,ue),Ns(M)?Ue(M):Ki(t.removed)}catch{ct(oe,M)}}Ke(R.afterSanitizeAttributes,M,null)},Zc=function K(M){let I=null;const H=Ko(M);for(Ke(R.beforeSanitizeShadowDOM,M,null);I=H.nextNode();)Ke(R.uponSanitizeShadowNode,I,null),jo(I),Go(I),I.content instanceof o&&K(I.content);Ke(R.afterSanitizeShadowDOM,M,null)};return t.sanitize=function(K){let M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},I=null,H=null,te=null,pe=null;if(Is=!K,Is&&(K="<!-->"),typeof K!="string"&&!qo(K))if(typeof K.toString=="function"){if(K=K.toString(),typeof K!="string")throw nn("dirty is not a string, aborting")}else throw nn("toString is not a function");if(!t.isSupported)return K;if(Es||Rs(M),t.removed=[],typeof K=="string"&&(Jt=!1),Jt){if(K.nodeName){const qe=le(K.nodeName);if(!O[qe]||Me[qe])throw nn("root node is forbidden and cannot be sanitized in-place")}}else if(K instanceof c)I=Wo("<!---->"),H=I.ownerDocument.importNode(K,!0),H.nodeType===an.element&&H.nodeName==="BODY"||H.nodeName==="HTML"?I=H:I.appendChild(H);else{if(!Lt&&!_t&&!rt&&K.indexOf("<")===-1)return A&&Un?A.createHTML(K):K;if(I=Wo(K),!I)return Lt?null:Un?E:""}I&&Ts&&Ue(I.firstChild);const oe=Ko(Jt?K:I);for(;te=oe.nextNode();)jo(te),Go(te),te.content instanceof o&&Zc(te.content);if(Jt)return K;if(Lt){if(Nn)for(pe=_.call(I.ownerDocument);I.firstChild;)pe.appendChild(I.firstChild);else pe=I;return(j.shadowroot||j.shadowrootmode)&&(pe=W.call(s,pe,!0)),pe}let xe=rt?I.outerHTML:I.innerHTML;return rt&&O["!doctype"]&&I.ownerDocument&&I.ownerDocument.doctype&&I.ownerDocument.doctype.name&&ve(oc,I.ownerDocument.doctype.name)&&(xe="<!DOCTYPE "+I.ownerDocument.doctype.name+`>
`+xe),_t&&jn([L,fe,D],qe=>{xe=tn(xe,qe," ")}),A&&Un?A.createHTML(xe):xe},t.setConfig=function(){let K=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Rs(K),Es=!0},t.clearConfig=function(){Rt=null,Es=!1},t.isValidAttribute=function(K,M,I){Rt||Rs({});const H=le(K),te=le(M);return Qo(H,te,I)},t.addHook=function(K,M){typeof M=="function"&&en(R[K],M)},t.removeHook=function(K,M){if(M!==void 0){const I=Jm(R[K],M);return I===-1?void 0:Ym(R[K],I,1)[0]}return Ki(R[K])},t.removeHooks=function(K){R[K]=[]},t.removeAllHooks=function(){R=Ji()},t}var Da=ic();function yo(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Tt=yo();function lc(e){Tt=e}var yn={exec:()=>null};function V(e,t=""){let n=typeof e=="string"?e:e.source,s={replace:(a,o)=>{let l=typeof o=="string"?o:o.source;return l=l.replace(ye.caret,"$1"),n=n.replace(a,l),s},getRegex:()=>new RegExp(n,t)};return s}var ff=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),ye={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},hf=/^(?:[ \t]*(?:\n|$))+/,vf=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,yf=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Dn=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,bf=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,bo=/(?:[*+-]|\d{1,9}[.)])/,rc=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,cc=V(rc).replace(/bull/g,bo).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),wf=V(rc).replace(/bull/g,bo).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),wo=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,xf=/^[^\n]+/,xo=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,$f=V(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",xo).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),kf=V(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,bo).getRegex(),Cs="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",$o=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Sf=V("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",$o).replace("tag",Cs).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),dc=V(wo).replace("hr",Dn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Cs).getRegex(),Cf=V(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",dc).getRegex(),ko={blockquote:Cf,code:vf,def:$f,fences:yf,heading:bf,hr:Dn,html:Sf,lheading:cc,list:kf,newline:hf,paragraph:dc,table:yn,text:xf},Yi=V("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Dn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Cs).getRegex(),Af={...ko,lheading:wf,table:Yi,paragraph:V(wo).replace("hr",Dn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Yi).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Cs).getRegex()},Mf={...ko,html:V(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",$o).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:yn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:V(wo).replace("hr",Dn).replace("heading",` *#{1,6} *[^
]`).replace("lheading",cc).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Ef=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Tf=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,uc=/^( {2,}|\\)\n(?!\s*$)/,Pf=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,As=/[\p{P}\p{S}]/u,So=/[\s\p{P}\p{S}]/u,pc=/[^\s\p{P}\p{S}]/u,_f=V(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,So).getRegex(),gc=/(?!~)[\p{P}\p{S}]/u,Lf=/(?!~)[\s\p{P}\p{S}]/u,If=/(?:[^\s\p{P}\p{S}]|~)/u,Df=V(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",ff?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),mc=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Rf=V(mc,"u").replace(/punct/g,As).getRegex(),Nf=V(mc,"u").replace(/punct/g,gc).getRegex(),fc="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Uf=V(fc,"gu").replace(/notPunctSpace/g,pc).replace(/punctSpace/g,So).replace(/punct/g,As).getRegex(),Of=V(fc,"gu").replace(/notPunctSpace/g,If).replace(/punctSpace/g,Lf).replace(/punct/g,gc).getRegex(),Ff=V("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,pc).replace(/punctSpace/g,So).replace(/punct/g,As).getRegex(),Bf=V(/\\(punct)/,"gu").replace(/punct/g,As).getRegex(),Hf=V(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),zf=V($o).replace("(?:-->|$)","-->").getRegex(),Wf=V("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",zf).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),rs=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Kf=V(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",rs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),hc=V(/^!?\[(label)\]\[(ref)\]/).replace("label",rs).replace("ref",xo).getRegex(),vc=V(/^!?\[(ref)\](?:\[\])?/).replace("ref",xo).getRegex(),qf=V("reflink|nolink(?!\\()","g").replace("reflink",hc).replace("nolink",vc).getRegex(),Zi=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Co={_backpedal:yn,anyPunctuation:Bf,autolink:Hf,blockSkip:Df,br:uc,code:Tf,del:yn,emStrongLDelim:Rf,emStrongRDelimAst:Uf,emStrongRDelimUnd:Ff,escape:Ef,link:Kf,nolink:vc,punctuation:_f,reflink:hc,reflinkSearch:qf,tag:Wf,text:Pf,url:yn},jf={...Co,link:V(/^!?\[(label)\]\((.*?)\)/).replace("label",rs).getRegex(),reflink:V(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",rs).getRegex()},Ra={...Co,emStrongRDelimAst:Of,emStrongLDelim:Nf,url:V(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Zi).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:V(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Zi).getRegex()},Qf={...Ra,br:V(uc).replace("{2,}","*").getRegex(),text:V(Ra.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Vn={normal:ko,gfm:Af,pedantic:Mf},on={normal:Co,gfm:Ra,breaks:Qf,pedantic:jf},Vf={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Xi=e=>Vf[e];function Qe(e,t){if(t){if(ye.escapeTest.test(e))return e.replace(ye.escapeReplace,Xi)}else if(ye.escapeTestNoEncode.test(e))return e.replace(ye.escapeReplaceNoEncode,Xi);return e}function el(e){try{e=encodeURI(e).replace(ye.percentDecode,"%")}catch{return null}return e}function tl(e,t){let n=e.replace(ye.findPipe,(o,l,c)=>{let u=!1,f=l;for(;--f>=0&&c[f]==="\\";)u=!u;return u?"|":" |"}),s=n.split(ye.splitPipe),a=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),t)if(s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;a<s.length;a++)s[a]=s[a].trim().replace(ye.slashPipe,"|");return s}function ln(e,t,n){let s=e.length;if(s===0)return"";let a=0;for(;a<s&&e.charAt(s-a-1)===t;)a++;return e.slice(0,s-a)}function Gf(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let s=0;s<e.length;s++)if(e[s]==="\\")s++;else if(e[s]===t[0])n++;else if(e[s]===t[1]&&(n--,n<0))return s;return n>0?-2:-1}function nl(e,t,n,s,a){let o=t.href,l=t.title||null,c=e[1].replace(a.other.outputLinkReplace,"$1");s.state.inLink=!0;let u={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:o,title:l,text:c,tokens:s.inlineTokens(c)};return s.state.inLink=!1,u}function Jf(e,t,n){let s=e.match(n.other.indentCodeCompensation);if(s===null)return t;let a=s[1];return t.split(`
`).map(o=>{let l=o.match(n.other.beginningSpace);if(l===null)return o;let[c]=l;return c.length>=a.length?o.slice(a.length):o}).join(`
`)}var cs=class{options;rules;lexer;constructor(e){this.options=e||Tt}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:ln(n,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let n=t[0],s=Jf(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){let s=ln(n,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:ln(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let n=ln(t[0],`
`).split(`
`),s="",a="",o=[];for(;n.length>0;){let l=!1,c=[],u;for(u=0;u<n.length;u++)if(this.rules.other.blockquoteStart.test(n[u]))c.push(n[u]),l=!0;else if(!l)c.push(n[u]);else break;n=n.slice(u);let f=c.join(`
`),p=f.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${f}`:f,a=a?`${a}
${p}`:p;let g=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(p,o,!0),this.lexer.state.top=g,n.length===0)break;let $=o.at(-1);if($?.type==="code")break;if($?.type==="blockquote"){let k=$,S=k.raw+`
`+n.join(`
`),d=this.blockquote(S);o[o.length-1]=d,s=s.substring(0,s.length-k.raw.length)+d.raw,a=a.substring(0,a.length-k.text.length)+d.text;break}else if($?.type==="list"){let k=$,S=k.raw+`
`+n.join(`
`),d=this.list(S);o[o.length-1]=d,s=s.substring(0,s.length-$.raw.length)+d.raw,a=a.substring(0,a.length-k.raw.length)+d.raw,n=S.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:o,text:a}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),s=n.length>1,a={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");let o=this.rules.other.listItemRegex(n),l=!1;for(;e;){let u=!1,f="",p="";if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;f=t[0],e=e.substring(f.length);let g=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,d=>" ".repeat(3*d.length)),$=e.split(`
`,1)[0],k=!g.trim(),S=0;if(this.options.pedantic?(S=2,p=g.trimStart()):k?S=t[1].length+1:(S=t[2].search(this.rules.other.nonSpaceChar),S=S>4?1:S,p=g.slice(S),S+=t[1].length),k&&this.rules.other.blankLine.test($)&&(f+=$+`
`,e=e.substring($.length+1),u=!0),!u){let d=this.rules.other.nextBulletRegex(S),m=this.rules.other.hrRegex(S),h=this.rules.other.fencesBeginRegex(S),v=this.rules.other.headingBeginRegex(S),C=this.rules.other.htmlBeginRegex(S);for(;e;){let A=e.split(`
`,1)[0],E;if($=A,this.options.pedantic?($=$.replace(this.rules.other.listReplaceNesting,"  "),E=$):E=$.replace(this.rules.other.tabCharGlobal,"    "),h.test($)||v.test($)||C.test($)||d.test($)||m.test($))break;if(E.search(this.rules.other.nonSpaceChar)>=S||!$.trim())p+=`
`+E.slice(S);else{if(k||g.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||h.test(g)||v.test(g)||m.test(g))break;p+=`
`+$}!k&&!$.trim()&&(k=!0),f+=A+`
`,e=e.substring(A.length+1),g=E.slice(S)}}a.loose||(l?a.loose=!0:this.rules.other.doubleBlankLine.test(f)&&(l=!0)),a.items.push({type:"list_item",raw:f,task:!!this.options.gfm&&this.rules.other.listIsTask.test(p),loose:!1,text:p,tokens:[]}),a.raw+=f}let c=a.items.at(-1);if(c)c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd();else return;a.raw=a.raw.trimEnd();for(let u of a.items){if(this.lexer.state.top=!1,u.tokens=this.lexer.blockTokens(u.text,[]),u.task){if(u.text=u.text.replace(this.rules.other.listReplaceTask,""),u.tokens[0]?.type==="text"||u.tokens[0]?.type==="paragraph"){u.tokens[0].raw=u.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),u.tokens[0].text=u.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let p=this.lexer.inlineQueue.length-1;p>=0;p--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[p].src)){this.lexer.inlineQueue[p].src=this.lexer.inlineQueue[p].src.replace(this.rules.other.listReplaceTask,"");break}}let f=this.rules.other.listTaskCheckbox.exec(u.raw);if(f){let p={type:"checkbox",raw:f[0]+" ",checked:f[0]!=="[ ]"};u.checked=p.checked,a.loose?u.tokens[0]&&["paragraph","text"].includes(u.tokens[0].type)&&"tokens"in u.tokens[0]&&u.tokens[0].tokens?(u.tokens[0].raw=p.raw+u.tokens[0].raw,u.tokens[0].text=p.raw+u.tokens[0].text,u.tokens[0].tokens.unshift(p)):u.tokens.unshift({type:"paragraph",raw:p.raw,text:p.raw,tokens:[p]}):u.tokens.unshift(p)}}if(!a.loose){let f=u.tokens.filter(g=>g.type==="space"),p=f.length>0&&f.some(g=>this.rules.other.anyLine.test(g.raw));a.loose=p}}if(a.loose)for(let u of a.items){u.loose=!0;for(let f of u.tokens)f.type==="text"&&(f.type="paragraph")}return a}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:a}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=tl(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),a=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(let l of s)this.rules.other.tableAlignRight.test(l)?o.align.push("right"):this.rules.other.tableAlignCenter.test(l)?o.align.push("center"):this.rules.other.tableAlignLeft.test(l)?o.align.push("left"):o.align.push(null);for(let l=0;l<n.length;l++)o.header.push({text:n[l],tokens:this.lexer.inline(n[l]),header:!0,align:o.align[l]});for(let l of a)o.rows.push(tl(l,o.header.length).map((c,u)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:o.align[u]})));return o}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let o=ln(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{let o=Gf(t[2],"()");if(o===-2)return;if(o>-1){let l=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let s=t[2],a="";if(this.options.pedantic){let o=this.rules.other.pedanticHrefTitle.exec(s);o&&(s=o[1],a=o[3])}else a=t[3]?t[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?s=s.slice(1):s=s.slice(1,-1)),nl(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let s=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),a=t[s.toLowerCase()];if(!a){let o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return nl(n,a,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!(!s||s[3]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(s[1]||s[2])||!n||this.rules.inline.punctuation.exec(n))){let a=[...s[0]].length-1,o,l,c=a,u=0,f=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(f.lastIndex=0,t=t.slice(-1*e.length+a);(s=f.exec(t))!=null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o)continue;if(l=[...o].length,s[3]||s[4]){c+=l;continue}else if((s[5]||s[6])&&a%3&&!((a+l)%3)){u+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c+u);let p=[...s[0]][0].length,g=e.slice(0,a+s.index+p+l);if(Math.min(a,l)%2){let k=g.slice(1,-1);return{type:"em",raw:g,text:k,tokens:this.lexer.inlineTokens(k)}}let $=g.slice(2,-2);return{type:"strong",raw:g,text:$,tokens:this.lexer.inlineTokens($)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(n),a=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return s&&a&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=t[1],s="mailto:"+n):(n=t[1],s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let n,s;if(t[2]==="@")n=t[0],s="mailto:"+n;else{let a;do a=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(a!==t[0]);n=t[0],t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},Ie=class Na{tokens;options;state;inlineQueue;tokenizer;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Tt,this.options.tokenizer=this.options.tokenizer||new cs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={other:ye,block:Vn.normal,inline:on.normal};this.options.pedantic?(n.block=Vn.pedantic,n.inline=on.pedantic):this.options.gfm&&(n.block=Vn.gfm,this.options.breaks?n.inline=on.breaks:n.inline=on.gfm),this.tokenizer.rules=n}static get rules(){return{block:Vn,inline:on}}static lex(t,n){return new Na(n).lex(t)}static lexInline(t,n){return new Na(n).inlineTokens(t)}lex(t){t=t.replace(ye.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let s=this.inlineQueue[n];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],s=!1){for(this.options.pedantic&&(t=t.replace(ye.tabCharGlobal,"    ").replace(ye.spaceLine,""));t;){let a;if(this.options.extensions?.block?.some(l=>(a=l.call({lexer:this},t,n))?(t=t.substring(a.raw.length),n.push(a),!0):!1))continue;if(a=this.tokenizer.space(t)){t=t.substring(a.raw.length);let l=n.at(-1);a.raw.length===1&&l!==void 0?l.raw+=`
`:n.push(a);continue}if(a=this.tokenizer.code(t)){t=t.substring(a.raw.length);let l=n.at(-1);l?.type==="paragraph"||l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+a.raw,l.text+=`
`+a.text,this.inlineQueue.at(-1).src=l.text):n.push(a);continue}if(a=this.tokenizer.fences(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.heading(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.hr(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.blockquote(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.list(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.html(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.def(t)){t=t.substring(a.raw.length);let l=n.at(-1);l?.type==="paragraph"||l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+a.raw,l.text+=`
`+a.raw,this.inlineQueue.at(-1).src=l.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title},n.push(a));continue}if(a=this.tokenizer.table(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.lheading(t)){t=t.substring(a.raw.length),n.push(a);continue}let o=t;if(this.options.extensions?.startBlock){let l=1/0,c=t.slice(1),u;this.options.extensions.startBlock.forEach(f=>{u=f.call({lexer:this},c),typeof u=="number"&&u>=0&&(l=Math.min(l,u))}),l<1/0&&l>=0&&(o=t.substring(0,l+1))}if(this.state.top&&(a=this.tokenizer.paragraph(o))){let l=n.at(-1);s&&l?.type==="paragraph"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+a.raw,l.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):n.push(a),s=o.length!==t.length,t=t.substring(a.raw.length);continue}if(a=this.tokenizer.text(t)){t=t.substring(a.raw.length);let l=n.at(-1);l?.type==="text"?(l.raw+=(l.raw.endsWith(`
`)?"":`
`)+a.raw,l.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=l.text):n.push(a);continue}if(t){let l="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){let s=t,a=null;if(this.tokens.links){let u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,a.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let o;for(;(a=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)o=a[2]?a[2].length:0,s=s.slice(0,a.index+o)+"["+"a".repeat(a[0].length-o-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);s=this.options.hooks?.emStrongMask?.call({lexer:this},s)??s;let l=!1,c="";for(;t;){l||(c=""),l=!1;let u;if(this.options.extensions?.inline?.some(p=>(u=p.call({lexer:this},t,n))?(t=t.substring(u.raw.length),n.push(u),!0):!1))continue;if(u=this.tokenizer.escape(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.tag(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.link(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(u.raw.length);let p=n.at(-1);u.type==="text"&&p?.type==="text"?(p.raw+=u.raw,p.text+=u.text):n.push(u);continue}if(u=this.tokenizer.emStrong(t,s,c)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.codespan(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.br(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.del(t)){t=t.substring(u.raw.length),n.push(u);continue}if(u=this.tokenizer.autolink(t)){t=t.substring(u.raw.length),n.push(u);continue}if(!this.state.inLink&&(u=this.tokenizer.url(t))){t=t.substring(u.raw.length),n.push(u);continue}let f=t;if(this.options.extensions?.startInline){let p=1/0,g=t.slice(1),$;this.options.extensions.startInline.forEach(k=>{$=k.call({lexer:this},g),typeof $=="number"&&$>=0&&(p=Math.min(p,$))}),p<1/0&&p>=0&&(f=t.substring(0,p+1))}if(u=this.tokenizer.inlineText(f)){t=t.substring(u.raw.length),u.raw.slice(-1)!=="_"&&(c=u.raw.slice(-1)),l=!0;let p=n.at(-1);p?.type==="text"?(p.raw+=u.raw,p.text+=u.text):n.push(u);continue}if(t){let p="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return n}},ds=class{options;parser;constructor(e){this.options=e||Tt}space(e){return""}code({text:e,lang:t,escaped:n}){let s=(t||"").match(ye.notSpaceStart)?.[0],a=e.replace(ye.endingNewline,"")+`
`;return s?'<pre><code class="language-'+Qe(s)+'">'+(n?a:Qe(a,!0))+`</code></pre>
`:"<pre><code>"+(n?a:Qe(a,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,s="";for(let l=0;l<e.items.length;l++){let c=e.items[l];s+=this.listitem(c)}let a=t?"ol":"ul",o=t&&n!==1?' start="'+n+'"':"";return"<"+a+o+`>
`+s+"</"+a+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let a=0;a<e.header.length;a++)n+=this.tablecell(e.header[a]);t+=this.tablerow({text:n});let s="";for(let a=0;a<e.rows.length;a++){let o=e.rows[a];n="";for(let l=0;l<o.length;l++)n+=this.tablecell(o[l]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Qe(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let s=this.parser.parseInline(n),a=el(e);if(a===null)return s;e=a;let o='<a href="'+e+'"';return t&&(o+=' title="'+Qe(t)+'"'),o+=">"+s+"</a>",o}image({href:e,title:t,text:n,tokens:s}){s&&(n=this.parser.parseInline(s,this.parser.textRenderer));let a=el(e);if(a===null)return Qe(n);e=a;let o=`<img src="${e}" alt="${n}"`;return t&&(o+=` title="${Qe(t)}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:Qe(e.text)}},Ao=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},De=class Ua{options;renderer;textRenderer;constructor(t){this.options=t||Tt,this.options.renderer=this.options.renderer||new ds,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ao}static parse(t,n){return new Ua(n).parse(t)}static parseInline(t,n){return new Ua(n).parseInline(t)}parse(t){let n="";for(let s=0;s<t.length;s++){let a=t[s];if(this.options.extensions?.renderers?.[a.type]){let l=a,c=this.options.extensions.renderers[l.type].call({parser:this},l);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(l.type)){n+=c||"";continue}}let o=a;switch(o.type){case"space":{n+=this.renderer.space(o);break}case"hr":{n+=this.renderer.hr(o);break}case"heading":{n+=this.renderer.heading(o);break}case"code":{n+=this.renderer.code(o);break}case"table":{n+=this.renderer.table(o);break}case"blockquote":{n+=this.renderer.blockquote(o);break}case"list":{n+=this.renderer.list(o);break}case"checkbox":{n+=this.renderer.checkbox(o);break}case"html":{n+=this.renderer.html(o);break}case"def":{n+=this.renderer.def(o);break}case"paragraph":{n+=this.renderer.paragraph(o);break}case"text":{n+=this.renderer.text(o);break}default:{let l='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return n}parseInline(t,n=this.renderer){let s="";for(let a=0;a<t.length;a++){let o=t[a];if(this.options.extensions?.renderers?.[o.type]){let c=this.options.extensions.renderers[o.type].call({parser:this},o);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){s+=c||"";continue}}let l=o;switch(l.type){case"escape":{s+=n.text(l);break}case"html":{s+=n.html(l);break}case"link":{s+=n.link(l);break}case"image":{s+=n.image(l);break}case"checkbox":{s+=n.checkbox(l);break}case"strong":{s+=n.strong(l);break}case"em":{s+=n.em(l);break}case"codespan":{s+=n.codespan(l);break}case"br":{s+=n.br(l);break}case"del":{s+=n.del(l);break}case"text":{s+=n.text(l);break}default:{let c='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return s}},pn=class{options;block;constructor(e){this.options=e||Tt}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?Ie.lex:Ie.lexInline}provideParser(){return this.block?De.parse:De.parseInline}},Yf=class{defaults=yo();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=De;Renderer=ds;TextRenderer=Ao;Lexer=Ie;Tokenizer=cs;Hooks=pn;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let s of e)switch(n=n.concat(t.call(this,s)),s.type){case"table":{let a=s;for(let o of a.header)n=n.concat(this.walkTokens(o.tokens,t));for(let o of a.rows)for(let l of o)n=n.concat(this.walkTokens(l.tokens,t));break}case"list":{let a=s;n=n.concat(this.walkTokens(a.items,t));break}default:{let a=s;this.defaults.extensions?.childTokens?.[a.type]?this.defaults.extensions.childTokens[a.type].forEach(o=>{let l=a[o].flat(1/0);n=n.concat(this.walkTokens(l,t))}):a.tokens&&(n=n.concat(this.walkTokens(a.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{let s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){let o=t.renderers[a.name];o?t.renderers[a.name]=function(...l){let c=a.renderer.apply(this,l);return c===!1&&(c=o.apply(this,l)),c}:t.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=t[a.level];o?o.unshift(a.tokenizer):t[a.level]=[a.tokenizer],a.start&&(a.level==="block"?t.startBlock?t.startBlock.push(a.start):t.startBlock=[a.start]:a.level==="inline"&&(t.startInline?t.startInline.push(a.start):t.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(t.childTokens[a.name]=a.childTokens)}),s.extensions=t),n.renderer){let a=this.defaults.renderer||new ds(this.defaults);for(let o in n.renderer){if(!(o in a))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let l=o,c=n.renderer[l],u=a[l];a[l]=(...f)=>{let p=c.apply(a,f);return p===!1&&(p=u.apply(a,f)),p||""}}s.renderer=a}if(n.tokenizer){let a=this.defaults.tokenizer||new cs(this.defaults);for(let o in n.tokenizer){if(!(o in a))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let l=o,c=n.tokenizer[l],u=a[l];a[l]=(...f)=>{let p=c.apply(a,f);return p===!1&&(p=u.apply(a,f)),p}}s.tokenizer=a}if(n.hooks){let a=this.defaults.hooks||new pn;for(let o in n.hooks){if(!(o in a))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let l=o,c=n.hooks[l],u=a[l];pn.passThroughHooks.has(o)?a[l]=f=>{if(this.defaults.async&&pn.passThroughHooksRespectAsync.has(o))return(async()=>{let g=await c.call(a,f);return u.call(a,g)})();let p=c.call(a,f);return u.call(a,p)}:a[l]=(...f)=>{if(this.defaults.async)return(async()=>{let g=await c.apply(a,f);return g===!1&&(g=await u.apply(a,f)),g})();let p=c.apply(a,f);return p===!1&&(p=u.apply(a,f)),p}}s.hooks=a}if(n.walkTokens){let a=this.defaults.walkTokens,o=n.walkTokens;s.walkTokens=function(l){let c=[];return c.push(o.call(this,l)),a&&(c=c.concat(a.call(this,l))),c}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Ie.lex(e,t??this.defaults)}parser(e,t){return De.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let s={...n},a={...this.defaults,...s},o=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&s.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(a.hooks&&(a.hooks.options=a,a.hooks.block=e),a.async)return(async()=>{let l=a.hooks?await a.hooks.preprocess(t):t,c=await(a.hooks?await a.hooks.provideLexer():e?Ie.lex:Ie.lexInline)(l,a),u=a.hooks?await a.hooks.processAllTokens(c):c;a.walkTokens&&await Promise.all(this.walkTokens(u,a.walkTokens));let f=await(a.hooks?await a.hooks.provideParser():e?De.parse:De.parseInline)(u,a);return a.hooks?await a.hooks.postprocess(f):f})().catch(o);try{a.hooks&&(t=a.hooks.preprocess(t));let l=(a.hooks?a.hooks.provideLexer():e?Ie.lex:Ie.lexInline)(t,a);a.hooks&&(l=a.hooks.processAllTokens(l)),a.walkTokens&&this.walkTokens(l,a.walkTokens);let c=(a.hooks?a.hooks.provideParser():e?De.parse:De.parseInline)(l,a);return a.hooks&&(c=a.hooks.postprocess(c)),c}catch(l){return o(l)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let s="<p>An error occurred:</p><pre>"+Qe(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}}},Et=new Yf;function Y(e,t){return Et.parse(e,t)}Y.options=Y.setOptions=function(e){return Et.setOptions(e),Y.defaults=Et.defaults,lc(Y.defaults),Y};Y.getDefaults=yo;Y.defaults=Tt;Y.use=function(...e){return Et.use(...e),Y.defaults=Et.defaults,lc(Y.defaults),Y};Y.walkTokens=function(e,t){return Et.walkTokens(e,t)};Y.parseInline=Et.parseInline;Y.Parser=De;Y.parser=De.parse;Y.Renderer=ds;Y.TextRenderer=Ao;Y.Lexer=Ie;Y.lexer=Ie.lex;Y.Tokenizer=cs;Y.Hooks=pn;Y.parse=Y;Y.options;Y.setOptions;Y.use;Y.walkTokens;Y.parseInline;De.parse;Ie.lex;Y.setOptions({gfm:!0,breaks:!0});const sl=["a","b","blockquote","br","code","del","em","h1","h2","h3","h4","hr","i","li","ol","p","pre","strong","table","tbody","td","th","thead","tr","ul"],al=["class","href","rel","target","title","start"];let ol=!1;const Zf=14e4,Xf=4e4,eh=200,aa=5e4,kt=new Map;function th(e){const t=kt.get(e);return t===void 0?null:(kt.delete(e),kt.set(e,t),t)}function il(e,t){if(kt.set(e,t),kt.size<=eh)return;const n=kt.keys().next().value;n&&kt.delete(n)}function nh(){ol||(ol=!0,Da.addHook("afterSanitizeAttributes",e=>{!(e instanceof HTMLAnchorElement)||!e.getAttribute("href")||(e.setAttribute("rel","noreferrer noopener"),e.setAttribute("target","_blank"))}))}function jt(e){const t=e.trim();if(!t)return"";if(nh(),t.length<=aa){const l=th(t);if(l!==null)return l}const n=rr(t,Zf),s=n.truncated?`

… truncated (${n.total} chars, showing first ${n.text.length}).`:"";if(n.text.length>Xf){const c=`<pre class="code-block">${sh(`${n.text}${s}`)}</pre>`,u=Da.sanitize(c,{ALLOWED_TAGS:sl,ALLOWED_ATTR:al});return t.length<=aa&&il(t,u),u}const a=Y.parse(`${n.text}${s}`),o=Da.sanitize(a,{ALLOWED_TAGS:sl,ALLOWED_ATTR:al});return t.length<=aa&&il(t,o),o}function sh(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const ah=1500,oh=2e3,yc="Copy as markdown",ih="Copied",lh="Copy failed";async function rh(e){if(!e)return!1;try{if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(e),!0}catch{}const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-9999px",t.style.top="0",t.setAttribute("readonly",""),document.body.appendChild(t);try{return t.select(),t.setSelectionRange(0,e.length),document.execCommand("copy")}finally{document.body.removeChild(t)}}function Gn(e,t){e.title=t,e.setAttribute("aria-label",t)}function ch(e){const t=e.label??yc;return r`
    <button
      class="chat-copy-btn"
      type="button"
      title=${t}
      aria-label=${t}
      @click=${async n=>{const s=n.currentTarget;if(!s||s.dataset.copying==="1")return;s.dataset.copying="1",s.setAttribute("aria-busy","true"),s.disabled=!0;const a=await rh(e.text());if(s.isConnected){if(delete s.dataset.copying,s.removeAttribute("aria-busy"),s.disabled=!1,!a){s.dataset.error="1",Gn(s,lh),window.setTimeout(()=>{s.isConnected&&(delete s.dataset.error,Gn(s,t))},oh);return}s.dataset.copied="1",Gn(s,ih),window.setTimeout(()=>{s.isConnected&&(delete s.dataset.copied,Gn(s,t))},ah)}}}
    >
      <span class="chat-copy-btn__icon" aria-hidden="true">
        <span class="chat-copy-btn__icon-copy">${ne.copy}</span>
        <span class="chat-copy-btn__icon-check">${ne.check}</span>
      </span>
    </button>
  `}function dh(e){return ch({text:()=>e,label:yc})}function bc(e){const t=e;let n=typeof t.role=="string"?t.role:"unknown";const s=typeof t.toolCallId=="string"||typeof t.tool_call_id=="string",a=t.content,o=Array.isArray(a)?a:null,l=Array.isArray(o)&&o.some(g=>{const $=g,k=(typeof $.type=="string"?$.type:"").toLowerCase();return k==="toolresult"||k==="tool_result"}),c=typeof t.toolName=="string"||typeof t.tool_name=="string";(s||l||c)&&(n="toolResult");let u=[];typeof t.content=="string"?u=[{type:"text",text:t.content}]:Array.isArray(t.content)?u=t.content.map(g=>({type:g.type||"text",text:g.text,name:g.name,args:g.args||g.arguments})):typeof t.text=="string"&&(u=[{type:"text",text:t.text}]);const f=typeof t.timestamp=="number"?t.timestamp:Date.now(),p=typeof t.id=="string"?t.id:void 0;return{role:n,content:u,timestamp:f,id:p}}function Mo(e){const t=e.toLowerCase();return e==="user"||e==="User"?e:e==="assistant"?"assistant":e==="system"?"system":t==="toolresult"||t==="tool_result"||t==="tool"||t==="function"?"tool":e}function wc(e){const t=e,n=typeof t.role=="string"?t.role.toLowerCase():"";return n==="toolresult"||n==="tool_result"}const uh={icon:"puzzle",detailKeys:["command","path","url","targetUrl","targetId","ref","element","node","nodeId","id","requestId","to","channelId","guildId","userId","name","query","pattern","messageId"]},ph={bash:{icon:"wrench",title:"Bash",detailKeys:["command"]},process:{icon:"wrench",title:"Process",detailKeys:["sessionId"]},read:{icon:"fileText",title:"Read",detailKeys:["path"]},write:{icon:"edit",title:"Write",detailKeys:["path"]},edit:{icon:"penLine",title:"Edit",detailKeys:["path"]},attach:{icon:"paperclip",title:"Attach",detailKeys:["path","url","fileName"]},browser:{icon:"globe",title:"Browser",actions:{status:{label:"status"},start:{label:"start"},stop:{label:"stop"},tabs:{label:"tabs"},open:{label:"open",detailKeys:["targetUrl"]},focus:{label:"focus",detailKeys:["targetId"]},close:{label:"close",detailKeys:["targetId"]},snapshot:{label:"snapshot",detailKeys:["targetUrl","targetId","ref","element","format"]},screenshot:{label:"screenshot",detailKeys:["targetUrl","targetId","ref","element"]},navigate:{label:"navigate",detailKeys:["targetUrl","targetId"]},console:{label:"console",detailKeys:["level","targetId"]},pdf:{label:"pdf",detailKeys:["targetId"]},upload:{label:"upload",detailKeys:["paths","ref","inputRef","element","targetId"]},dialog:{label:"dialog",detailKeys:["accept","promptText","targetId"]},act:{label:"act",detailKeys:["request.kind","request.ref","request.selector","request.text","request.value"]}}},canvas:{icon:"image",title:"Canvas",actions:{present:{label:"present",detailKeys:["target","node","nodeId"]},hide:{label:"hide",detailKeys:["node","nodeId"]},navigate:{label:"navigate",detailKeys:["url","node","nodeId"]},eval:{label:"eval",detailKeys:["javaScript","node","nodeId"]},snapshot:{label:"snapshot",detailKeys:["format","node","nodeId"]},a2ui_push:{label:"A2UI push",detailKeys:["jsonlPath","node","nodeId"]},a2ui_reset:{label:"A2UI reset",detailKeys:["node","nodeId"]}}},nodes:{icon:"smartphone",title:"Nodes",actions:{status:{label:"status"},describe:{label:"describe",detailKeys:["node","nodeId"]},pending:{label:"pending"},approve:{label:"approve",detailKeys:["requestId"]},reject:{label:"reject",detailKeys:["requestId"]},notify:{label:"notify",detailKeys:["node","nodeId","title","body"]},camera_snap:{label:"camera snap",detailKeys:["node","nodeId","facing","deviceId"]},camera_list:{label:"camera list",detailKeys:["node","nodeId"]},camera_clip:{label:"camera clip",detailKeys:["node","nodeId","facing","duration","durationMs"]},screen_record:{label:"screen record",detailKeys:["node","nodeId","duration","durationMs","fps","screenIndex"]}}},cron:{icon:"loader",title:"Cron",actions:{status:{label:"status"},list:{label:"list"},add:{label:"add",detailKeys:["job.name","job.id","job.schedule","job.cron"]},update:{label:"update",detailKeys:["id"]},remove:{label:"remove",detailKeys:["id"]},run:{label:"run",detailKeys:["id"]},runs:{label:"runs",detailKeys:["id"]},wake:{label:"wake",detailKeys:["text","mode"]}}},gateway:{icon:"plug",title:"Gateway",actions:{restart:{label:"restart",detailKeys:["reason","delayMs"]},"config.get":{label:"config get"},"config.schema":{label:"config schema"},"config.apply":{label:"config apply",detailKeys:["restartDelayMs"]},"update.run":{label:"update run",detailKeys:["restartDelayMs"]}}},whatsapp_login:{icon:"circle",title:"WhatsApp Login",actions:{start:{label:"start"},wait:{label:"wait"}}},discord:{icon:"messageSquare",title:"Discord",actions:{react:{label:"react",detailKeys:["channelId","messageId","emoji"]},reactions:{label:"reactions",detailKeys:["channelId","messageId"]},sticker:{label:"sticker",detailKeys:["to","stickerIds"]},poll:{label:"poll",detailKeys:["question","to"]},permissions:{label:"permissions",detailKeys:["channelId"]},readMessages:{label:"read messages",detailKeys:["channelId","limit"]},sendMessage:{label:"send",detailKeys:["to","content"]},editMessage:{label:"edit",detailKeys:["channelId","messageId"]},deleteMessage:{label:"delete",detailKeys:["channelId","messageId"]},threadCreate:{label:"thread create",detailKeys:["channelId","name"]},threadList:{label:"thread list",detailKeys:["guildId","channelId"]},threadReply:{label:"thread reply",detailKeys:["channelId","content"]},pinMessage:{label:"pin",detailKeys:["channelId","messageId"]},unpinMessage:{label:"unpin",detailKeys:["channelId","messageId"]},listPins:{label:"list pins",detailKeys:["channelId"]},searchMessages:{label:"search",detailKeys:["guildId","content"]},memberInfo:{label:"member",detailKeys:["guildId","userId"]},roleInfo:{label:"roles",detailKeys:["guildId"]},emojiList:{label:"emoji list",detailKeys:["guildId"]},roleAdd:{label:"role add",detailKeys:["guildId","userId","roleId"]},roleRemove:{label:"role remove",detailKeys:["guildId","userId","roleId"]},channelInfo:{label:"channel",detailKeys:["channelId"]},channelList:{label:"channels",detailKeys:["guildId"]},voiceStatus:{label:"voice",detailKeys:["guildId","userId"]},eventList:{label:"events",detailKeys:["guildId"]},eventCreate:{label:"event create",detailKeys:["guildId","name"]},timeout:{label:"timeout",detailKeys:["guildId","userId"]},kick:{label:"kick",detailKeys:["guildId","userId"]},ban:{label:"ban",detailKeys:["guildId","userId"]}}},slack:{icon:"messageSquare",title:"Slack",actions:{react:{label:"react",detailKeys:["channelId","messageId","emoji"]},reactions:{label:"reactions",detailKeys:["channelId","messageId"]},sendMessage:{label:"send",detailKeys:["to","content"]},editMessage:{label:"edit",detailKeys:["channelId","messageId"]},deleteMessage:{label:"delete",detailKeys:["channelId","messageId"]},readMessages:{label:"read messages",detailKeys:["channelId","limit"]},pinMessage:{label:"pin",detailKeys:["channelId","messageId"]},unpinMessage:{label:"unpin",detailKeys:["channelId","messageId"]},listPins:{label:"list pins",detailKeys:["channelId"]},memberInfo:{label:"member",detailKeys:["userId"]},emojiList:{label:"emoji list"}}}},gh={fallback:uh,tools:ph},xc=gh,ll=xc.fallback??{icon:"puzzle"},mh=xc.tools??{};function fh(e){return(e??"tool").trim()}function hh(e){const t=e.replace(/_/g," ").trim();return t?t.split(/\s+/).map(n=>n.length<=2&&n.toUpperCase()===n?n:`${n.at(0)?.toUpperCase()??""}${n.slice(1)}`).join(" "):"Tool"}function vh(e){const t=e?.trim();if(t)return t.replace(/_/g," ")}function $c(e){if(e!=null){if(typeof e=="string"){const t=e.trim();if(!t)return;const n=t.split(/\r?\n/)[0]?.trim()??"";return n?n.length>160?`${n.slice(0,157)}…`:n:void 0}if(typeof e=="number"||typeof e=="boolean")return String(e);if(Array.isArray(e)){const t=e.map(s=>$c(s)).filter(s=>!!s);if(t.length===0)return;const n=t.slice(0,3).join(", ");return t.length>3?`${n}…`:n}}}function yh(e,t){if(!e||typeof e!="object")return;let n=e;for(const s of t.split(".")){if(!s||!n||typeof n!="object")return;n=n[s]}return n}function bh(e,t){for(const n of t){const s=yh(e,n),a=$c(s);if(a)return a}}function wh(e){if(!e||typeof e!="object")return;const t=e,n=typeof t.path=="string"?t.path:void 0;if(!n)return;const s=typeof t.offset=="number"?t.offset:void 0,a=typeof t.limit=="number"?t.limit:void 0;return s!==void 0&&a!==void 0?`${n}:${s}-${s+a}`:n}function xh(e){if(!e||typeof e!="object")return;const t=e;return typeof t.path=="string"?t.path:void 0}function $h(e,t){if(!(!e||!t))return e.actions?.[t]??void 0}function kh(e){const t=fh(e.name),n=t.toLowerCase(),s=mh[n],a=s?.icon??ll.icon??"puzzle",o=s?.title??hh(t),l=s?.label??t,c=e.args&&typeof e.args=="object"?e.args.action:void 0,u=typeof c=="string"?c.trim():void 0,f=$h(s,u),p=vh(f?.label??u);let g;n==="read"&&(g=wh(e.args)),!g&&(n==="write"||n==="edit"||n==="attach")&&(g=xh(e.args));const $=f?.detailKeys??s?.detailKeys??ll.detailKeys??[];return!g&&$.length>0&&(g=bh(e.args,$)),!g&&e.meta&&(g=e.meta),g&&(g=Ch(g)),{name:t,icon:a,title:o,label:l,verb:p,detail:g}}function Sh(e){const t=[];if(e.verb&&t.push(e.verb),e.detail&&t.push(e.detail),t.length!==0)return t.join(" · ")}function Ch(e){return e&&e.replace(/\/Users\/[^/]+/g,"~").replace(/\/home\/[^/]+/g,"~")}const Ah=80,Mh=2,rl=100;function Eh(e){const t=e.trim();if(t.startsWith("{")||t.startsWith("["))try{const n=JSON.parse(t);return"```json\n"+JSON.stringify(n,null,2)+"\n```"}catch{}return e}function Th(e){const t=e.split(`
`),n=t.slice(0,Mh),s=n.join(`
`);return s.length>rl?s.slice(0,rl)+"…":n.length<t.length?s+"…":s}function Ph(e){const t=e,n=_h(t.content),s=[];for(const a of n){const o=(typeof a.type=="string"?a.type:"").toLowerCase();(["toolcall","tool_call","tooluse","tool_use"].includes(o)||typeof a.name=="string"&&a.arguments!=null)&&s.push({kind:"call",name:a.name??"tool",args:Lh(a.arguments??a.args)})}for(const a of n){const o=(typeof a.type=="string"?a.type:"").toLowerCase();if(o!=="toolresult"&&o!=="tool_result")continue;const l=Ih(a),c=typeof a.name=="string"?a.name:"tool";s.push({kind:"result",name:c,text:l})}if(wc(e)&&!s.some(a=>a.kind==="result")){const a=typeof t.toolName=="string"&&t.toolName||typeof t.tool_name=="string"&&t.tool_name||"tool",o=Br(e)??void 0;s.push({kind:"result",name:a,text:o})}return s}function cl(e,t){const n=kh({name:e.name,args:e.args}),s=Sh(n),a=!!e.text?.trim(),o=!!t,l=o?()=>{if(a){t(Eh(e.text));return}const g=`## ${n.label}

${s?`**Command:** \`${s}\`

`:""}*No output — tool completed successfully.*`;t(g)}:void 0,c=a&&(e.text?.length??0)<=Ah,u=a&&!c,f=a&&c,p=!a;return r`
    <div
      class="chat-tool-card ${o?"chat-tool-card--clickable":""}"
      @click=${l}
      role=${o?"button":y}
      tabindex=${o?"0":y}
      @keydown=${o?g=>{g.key!=="Enter"&&g.key!==" "||(g.preventDefault(),l?.())}:y}
    >
      <div class="chat-tool-card__header">
        <div class="chat-tool-card__title">
          <span class="chat-tool-card__icon">${ne[n.icon]}</span>
          <span>${n.label}</span>
        </div>
        ${o?r`<span class="chat-tool-card__action">${a?"View":""} ${ne.check}</span>`:y}
        ${p&&!o?r`<span class="chat-tool-card__status">${ne.check}</span>`:y}
      </div>
      ${s?r`<div class="chat-tool-card__detail">${s}</div>`:y}
      ${p?r`
              <div class="chat-tool-card__status-text muted">Completed</div>
            `:y}
      ${u?r`<div class="chat-tool-card__preview mono">${Th(e.text)}</div>`:y}
      ${f?r`<div class="chat-tool-card__inline mono">${e.text}</div>`:y}
    </div>
  `}function _h(e){return Array.isArray(e)?e.filter(Boolean):[]}function Lh(e){if(typeof e!="string")return e;const t=e.trim();if(!t||!t.startsWith("{")&&!t.startsWith("["))return e;try{return JSON.parse(t)}catch{return e}}function Ih(e){if(typeof e.text=="string")return e.text;if(typeof e.content=="string")return e.content}function kc(e){const t=e,n=[t.durationMs,t.elapsedMs,t.latencyMs,t.thinkingMs,t.metrics?.durationMs];for(const s of n){if(typeof s=="number"&&Number.isFinite(s)&&s>0)return s;if(typeof s=="string"){const a=Number(s);if(Number.isFinite(a)&&a>0)return a}}return null}function Sc(e){if(!Number.isFinite(e)||e<=0)return"";if(e<1e3)return`${Math.round(e)}ms`;if(e<6e4)return`${(e/1e3).toFixed(e<1e4?1:0)}s`;const t=Math.floor(e/6e4),n=Math.round(e%6e4/1e3);return`${t}m${n.toString().padStart(2,"0")}s`}function Dh(e){const n=e.content,s=[];if(Array.isArray(n))for(const a of n){if(typeof a!="object"||a===null)continue;const o=a;if(o.type==="image"){const l=o.source;if(l?.type==="base64"&&typeof l.data=="string"){const c=l.data,u=l.media_type||"image/png",f=c.startsWith("data:")?c:`data:${u};base64,${c}`;s.push({url:f})}else typeof o.url=="string"&&s.push({url:o.url})}else if(o.type==="image_url"){const l=o.image_url;typeof l?.url=="string"&&s.push({url:l.url})}}return s}function Rh(e){return r`
    <div class="chat-group assistant">
      ${Eo("assistant",e)}
      <div class="chat-group-messages">
        <div class="chat-bubble chat-reading-indicator" aria-hidden="true">
          <span class="chat-reading-indicator__dots">
            <span></span><span></span><span></span>
          </span>
        </div>
      </div>
    </div>
  `}function Nh(e,t,n,s){const a=new Date(t).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),o=s?.name??"Assistant";return r`
    <div class="chat-group assistant">
      ${Eo("assistant",s)}
      <div class="chat-group-messages">
        ${Cc({role:"assistant",content:[{type:"text",text:e}],timestamp:t},{isStreaming:!0,showReasoning:!1},n)}
        <div class="chat-group-footer">
          <span class="chat-sender-name">${o}</span>
          <span class="chat-group-timestamp">${a}</span>
        </div>
      </div>
    </div>
  `}function Uh(e,t){const n=Mo(e.role),s=t.assistantName??"Assistant",a=n==="user"?"You":n==="assistant"?s:n,o=n==="user"?"user":n==="assistant"?"assistant":"other",l=new Date(e.timestamp).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}),c=n==="assistant"?kc(e.messages[e.messages.length-1]?.message):null,u=c?Sc(c):"";return r`
    <div class="chat-group ${o}">
      ${Eo(e.role,{name:s,avatar:t.assistantAvatar??null})}
      <div class="chat-group-messages">
        ${e.messages.map((f,p)=>Cc(f.message,{isStreaming:e.isStreaming&&p===e.messages.length-1,showReasoning:t.showReasoning},t.onOpenSidebar))}
        <div class="chat-group-footer">
          <span class="chat-sender-name">${a}</span>
          <span class="chat-group-timestamp">${l}</span>
          ${u?r`<span class="chat-group-duration muted">思考 ${u}</span>`:y}
        </div>
      </div>
    </div>
  `}function Eo(e,t){const n=Mo(e),s=t?.name?.trim()||"Assistant",a=t?.avatar?.trim()||"",o=n==="user"?"U":n==="assistant"?s.charAt(0).toUpperCase()||"A":n==="tool"?"⚙":"?",l=n==="user"?"user":n==="assistant"?"assistant":n==="tool"?"tool":"other";return a&&n==="assistant"?Oh(a)?r`<img
        class="chat-avatar ${l}"
        src="${a}"
        alt="${s}"
      />`:r`<div class="chat-avatar ${l}">${a}</div>`:r`<div class="chat-avatar ${l}">${o}</div>`}function Oh(e){return/^https?:\/\//i.test(e)||/^data:image\//i.test(e)||e.startsWith("/")}function Fh(e){return e.length===0?y:r`
    <div class="chat-message-images">
      ${e.map(t=>r`
          <img
            src=${t.url}
            alt=${t.alt??"Attached image"}
            class="chat-message-image"
            @click=${()=>window.open(t.url,"_blank")}
          />
        `)}
    </div>
  `}function Cc(e,t,n){const s=e,a=typeof s.role=="string"?s.role:"unknown",o=wc(e)||a.toLowerCase()==="toolresult"||a.toLowerCase()==="tool_result"||typeof s.toolCallId=="string"||typeof s.tool_call_id=="string",l=Ph(e),c=l.length>0,u=Dh(e),f=u.length>0,p=Br(e),g=t.showReasoning&&a==="assistant"?rg(e):null,$=p?.trim()?p:null,k=g?dg(g):null,S=a==="assistant"?kc(e):null,d=S?Sc(S):"",m=$,h=a==="assistant"&&!!m?.trim(),v=["chat-bubble",h?"has-copy":"",t.isStreaming?"streaming":"","fade-in"].filter(Boolean).join(" ");return!m&&c&&o?r`${l.map(C=>cl(C,n))}`:!m&&!c&&!f?y:r`
    <div class="${v}">
      ${h?dh(m):y}
      ${Fh(u)}
      ${k?r`
              <details class="chat-thinking">
                <summary class="chat-thinking__summary">
                  思考过程${d?r`<span class="muted"> · ${d}</span>`:y}
                </summary>
                <div class="chat-thinking__content">
                  ${qt(jt(k))}
                </div>
              </details>
            `:y}
      ${m?r`<div class="chat-text">${qt(jt(m))}</div>`:y}
      ${l.map(C=>cl(C,n))}
    </div>
  `}function Bh(e){return r`
    <div class="sidebar-panel">
      <div class="sidebar-header">
        <div class="sidebar-title">Tool Output</div>
        <button @click=${e.onClose} class="btn" title="Close sidebar">
          ${ne.x}
        </button>
      </div>
      <div class="sidebar-content">
        ${e.error?r`
              <div class="callout danger">${e.error}</div>
              <button @click=${e.onViewRawText} class="btn" style="margin-top: 12px;">
                View Raw Text
              </button>
            `:e.content?r`<div class="sidebar-markdown">${qt(jt(e.content))}</div>`:r`
                  <div class="muted">No content available</div>
                `}
      </div>
    </div>
  `}var Hh=Object.defineProperty,zh=Object.getOwnPropertyDescriptor,Ms=(e,t,n,s)=>{for(var a=s>1?void 0:s?zh(t,n):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(a=(s?l(t,n,a):l(a))||a);return s&&a&&Hh(t,n,a),a};let Qt=class extends zt{constructor(){super(...arguments),this.splitRatio=.6,this.minRatio=.4,this.maxRatio=.7,this.isDragging=!1,this.startX=0,this.startRatio=0,this.handleMouseDown=e=>{this.isDragging=!0,this.startX=e.clientX,this.startRatio=this.splitRatio,this.classList.add("dragging"),document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp),e.preventDefault()},this.handleMouseMove=e=>{if(!this.isDragging)return;const t=this.parentElement;if(!t)return;const n=t.getBoundingClientRect().width,a=(e.clientX-this.startX)/n;let o=this.startRatio+a;o=Math.max(this.minRatio,Math.min(this.maxRatio,o)),this.dispatchEvent(new CustomEvent("resize",{detail:{splitRatio:o},bubbles:!0,composed:!0}))},this.handleMouseUp=()=>{this.isDragging=!1,this.classList.remove("dragging"),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp)}}render(){return y}connectedCallback(){super.connectedCallback(),this.addEventListener("mousedown",this.handleMouseDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mousedown",this.handleMouseDown),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp)}};Qt.styles=ed`
    :host {
      width: 4px;
      cursor: col-resize;
      background: var(--border, #333);
      transition: background 150ms ease-out;
      flex-shrink: 0;
      position: relative;
    }
    :host::before {
      content: "";
      position: absolute;
      top: 0;
      left: -4px;
      right: -4px;
      bottom: 0;
    }
    :host(:hover) {
      background: var(--accent, #007bff);
    }
    :host(.dragging) {
      background: var(--accent, #007bff);
    }
  `;Ms([hs({type:Number})],Qt.prototype,"splitRatio",2);Ms([hs({type:Number})],Qt.prototype,"minRatio",2);Ms([hs({type:Number})],Qt.prototype,"maxRatio",2);Qt=Ms([Xl("resizable-divider")],Qt);const Wh=5e3;function Kh(e){if(e==null||!Number.isFinite(e))return"-";if(e<1024)return`${e} B`;const t=["KB","MB","GB","TB"];let n=e/1024,s=0;for(;n>=1024&&s<t.length-1;)n/=1024,s+=1;return`${n.toFixed(n<10?1:0)} ${t[s]}`}function dl(e){e.style.height="auto",e.style.height=`${e.scrollHeight}px`}function qh(e){return e?e.active?r`
      <div class="callout info compaction-indicator compaction-indicator--active">
        ${ne.loader} Compacting context...
      </div>
    `:e.completedAt&&Date.now()-e.completedAt<Wh?r`
        <div class="callout success compaction-indicator compaction-indicator--complete">
          ${ne.check} Context compacted
        </div>
      `:y:y}function Ac(){return`att-${Date.now()}-${Math.random().toString(36).slice(2,9)}`}function Mc(e){return e.startsWith("image/")?"image":"file"}function jh(e,t){const n=e.target,s=n?.files?Array.from(n.files):[];if(!s.length||!t.onAttachmentsChange)return;const a=t.attachments??[],o=l=>new Promise(c=>{const u=new FileReader;u.addEventListener("load",()=>{const f=u.result;c({id:Ac(),dataUrl:f,mimeType:l.type||"application/octet-stream",filename:l.name,sizeBytes:l.size,kind:Mc(l.type||"")})}),u.readAsDataURL(l)});Promise.all(s.map(o)).then(l=>{t.onAttachmentsChange?.([...a,...l])}),n&&(n.value="")}function Qh(e,t){const n=e.clipboardData?.items;if(!n||!t.onAttachmentsChange)return;const s=[];for(let a=0;a<n.length;a++){const o=n[a];o.type.startsWith("image/")&&s.push(o)}if(s.length!==0){e.preventDefault();for(const a of s){const o=a.getAsFile();if(!o)continue;const l=new FileReader;l.addEventListener("load",()=>{const c=l.result,u={id:Ac(),dataUrl:c,mimeType:o.type,filename:o.name,sizeBytes:o.size,kind:"image"},f=t.attachments??[];t.onAttachmentsChange?.([...f,u])}),l.readAsDataURL(o)}}}function Vh(e){const t=e.attachments??[];return t.length===0?y:r`
    <div class="chat-attachments">
      ${t.map(n=>r`
          <div class="chat-attachment">
            ${(n.kind??Mc(n.mimeType))==="image"?r`
                    <img
                      src=${n.dataUrl}
                      alt=${n.filename||"Attachment preview"}
                      class="chat-attachment__img"
                    />
                  `:r`
                    <div class="chat-attachment__file">
                      <div class="mono">${n.filename||"file"}</div>
                      <div class="muted" style="font-size: 12px;">
                        ${n.mimeType}${n.sizeBytes?` · ${Kh(n.sizeBytes)}`:""}
                      </div>
                    </div>
                  `}
            <button
              class="chat-attachment__remove"
              type="button"
              aria-label="Remove attachment"
              @click=${()=>{const s=(e.attachments??[]).filter(a=>a.id!==n.id);e.onAttachmentsChange?.(s)}}
            >
              ${ne.x}
            </button>
          </div>
        `)}
    </div>
  `}function Gh(e){const t=e.connected,n=e.sending||e.stream!==null,s=!!(e.canAbort&&e.onAbort),o=e.sessions?.sessions?.find(d=>d.key===e.sessionKey)?.reasoningLevel??"off",l=e.showThinking&&o!=="off",c={name:e.assistantName,avatar:e.assistantAvatar??e.assistantAvatarUrl??null},u=(e.attachments?.length??0)>0,f=e.connected?u?"添加消息（也可继续粘贴图片）…":"输入消息（回车发送，Shift+回车换行，可粘贴图片）":"Connect to the gateway to start chatting…",p=e.splitRatio??.6,g=!!(e.sidebarOpen&&e.onCloseSidebar),$=!e.loading&&(Array.isArray(e.messages)?e.messages.length===0:!0)&&!e.stream,k=["你能告诉我你有哪些技能吗？","帮我生成一份最近 15 分钟 MySQL 告警分析报告","帮我梳理一个排查思路，并给出优先级"],S=r`
    <div
      class="chat-thread"
      role="log"
      aria-live="polite"
      @scroll=${e.onChatScroll}
    >
      ${e.loading?r`
              <div class="muted">Loading chat…</div>
            `:y}
      ${jm(Yh(e),d=>d.key,d=>d.kind==="reading-indicator"?Rh(c):d.kind==="stream"?Nh(d.text,d.startedAt,e.onOpenSidebar,c):d.kind==="group"?Uh(d,{onOpenSidebar:e.onOpenSidebar,showReasoning:l,assistantName:e.assistantName,assistantAvatar:c.avatar}):y)}
      ${$?r`
              <div class="chat-empty">
                <div class="chat-empty__title">您好，有什么可以帮助您？</div>
                <div class="chat-empty__sub muted">从下面选一个快速开始，或直接输入你的问题。</div>
                <div class="chat-empty__prompts">
                  ${k.map(d=>r`
                      <button
                        class="btn chat-empty__prompt"
                        type="button"
                        ?disabled=${!e.connected}
                        @click=${()=>{e.onDraftChange(d),e.onSend()}}
                      >
                        ${ne.zap} ${d}
                      </button>
                    `)}
                </div>
              </div>
            `:y}
    </div>
  `;return r`
    <section class="card chat">
      ${e.disabledReason?r`<div class="callout">${e.disabledReason}</div>`:y}

      ${e.error?r`<div class="callout danger">${e.error}</div>`:y}

      ${qh(e.compactionStatus)}

      ${e.focusMode?r`
            <button
              class="chat-focus-exit"
              type="button"
              @click=${e.onToggleFocusMode}
              aria-label="Exit focus mode"
              title="Exit focus mode"
            >
              ${ne.x}
            </button>
          `:y}

      <div
        class="chat-split-container ${g?"chat-split-container--open":""}"
      >
        <div
          class="chat-main"
          style="flex: ${g?`0 0 ${p*100}%`:"1 1 100%"}"
        >
          ${S}
        </div>

        ${g?r`
              <resizable-divider
                .splitRatio=${p}
                @resize=${d=>e.onSplitRatioChange?.(d.detail.splitRatio)}
              ></resizable-divider>
              <div class="chat-sidebar">
                ${Bh({content:e.sidebarContent??null,error:e.sidebarError??null,onClose:e.onCloseSidebar,onViewRawText:()=>{!e.sidebarContent||!e.onOpenSidebar||e.onOpenSidebar(`\`\`\`
${e.sidebarContent}
\`\`\``)}})}
              </div>
            `:y}
      </div>

      ${e.queue.length?r`
            <div class="chat-queue" role="status" aria-live="polite">
              <div class="chat-queue__title">Queued (${e.queue.length})</div>
              <div class="chat-queue__list">
                ${e.queue.map(d=>r`
                    <div class="chat-queue__item">
                      <div class="chat-queue__text">
                        ${d.text||(d.attachments?.length?`Image (${d.attachments.length})`:"")}
                      </div>
                      <button
                        class="btn chat-queue__remove"
                        type="button"
                        aria-label="Remove queued message"
                        @click=${()=>e.onQueueRemove(d.id)}
                      >
                        ${ne.x}
                      </button>
                    </div>
                  `)}
              </div>
            </div>
          `:y}

      ${e.showNewMessages?r`
            <button
              class="btn chat-new-messages"
              type="button"
              @click=${e.onScrollToBottom}
            >
              New messages ${ne.arrowDown}
            </button>
          `:y}

      <div class="chat-compose">
        ${Vh(e)}
        <div class="chat-compose__inner">
          <label class="field chat-compose__field">
            <span>Message</span>
            <textarea
            ${qm(d=>d&&dl(d))}
            .value=${e.draft}
            ?disabled=${!e.connected}
            @keydown=${d=>{d.key==="Enter"&&(d.isComposing||d.keyCode===229||d.shiftKey||e.connected&&(d.preventDefault(),t&&e.onSend()))}}
            @input=${d=>{const m=d.target;dl(m),e.onDraftChange(m.value)}}
            @paste=${d=>Qh(d,e)}
            placeholder=${f}
          ></textarea>
        </label>
          <div class="chat-compose__row">
          <div class="chat-compose__meta">
            <button
              class="btn btn--icon chat-compose__add-file"
              type="button"
              aria-label="添加文件"
              title="添加文件"
              ?disabled=${!e.connected||!e.onAttachmentsChange}
              @click=${()=>{document.getElementById("chat-file-input")?.click()}}
            >
              ${ne.plus}
            </button>
            <input
              id="chat-file-input"
              type="file"
              multiple
              accept="image/*,*/*"
              style="display:none"
              @change=${d=>jh(d,e)}
            />
            ${e.onModelRefChange?r`
                    <label class="field chat-compose__model-select">
                      <select
                        aria-label="大模型"
                        .value=${e.modelRef??e.defaultModelRef??""}
                        ?disabled=${!e.connected}
                        @change=${d=>{const m=d.target.value.trim(),h=e.defaultModelRef??"";e.onModelRefChange?.(m===""||m===h?null:m)}}
                      >
                        ${(e.modelOptions??[{value:"",label:"默认"}]).map(d=>r`<option value=${d.value}>${d.label}</option>`)}
                      </select>
                    </label>
                  `:y}
          </div>
          <div class="chat-compose__actions">
            <button
              class="btn chat-compose__secondary"
              ?disabled=${!e.connected||!s&&e.sending}
              @click=${s?e.onAbort:e.onNewSession}
            >
              ${s?"停止":"新会话"}
            </button>
            <button
              class="btn chat-compose__send"
              type="button"
              aria-label="发送"
              title="发送 (Enter)"
              ?disabled=${!e.connected}
              @click=${e.onSend}
            >
              ${n?ne.loader2:ne.send}
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  `}const ul=200;function Jh(e){const t=[];let n=null;for(const s of e){if(s.kind!=="message"){n&&(t.push(n),n=null),t.push(s);continue}const a=bc(s.message),o=Mo(a.role),l=a.timestamp||Date.now();!n||n.role!==o?(n&&t.push(n),n={kind:"group",key:`group:${o}:${s.key}`,role:o,messages:[{message:s.message,key:s.key}],timestamp:l,isStreaming:!1}):n.messages.push({message:s.message,key:s.key})}return n&&t.push(n),t}function Yh(e){const t=[],n=Array.isArray(e.messages)?e.messages:[],s=Array.isArray(e.toolMessages)?e.toolMessages:[],a=Math.max(0,n.length-ul);a>0&&t.push({kind:"message",key:"chat:history:notice",message:{role:"system",content:`Showing last ${ul} messages (${a} hidden).`,timestamp:Date.now()}});for(let o=a;o<n.length;o++){const l=n[o],c=bc(l);!e.showThinking&&c.role.toLowerCase()==="toolresult"||t.push({kind:"message",key:pl(l,o),message:l})}if(e.showThinking)for(let o=0;o<s.length;o++)t.push({kind:"message",key:pl(s[o],o+n.length),message:s[o]});if(e.stream!==null){const o=`stream:${e.sessionKey}:${e.streamStartedAt??"live"}`;e.stream.trim().length>0?t.push({kind:"stream",key:o,text:e.stream,startedAt:e.streamStartedAt??Date.now()}):t.push({kind:"reading-indicator",key:o})}return Jh(t)}function pl(e,t){const n=e,s=typeof n.toolCallId=="string"?n.toolCallId:"";if(s)return`tool:${s}`;const a=typeof n.id=="string"?n.id:"";if(a)return`msg:${a}`;const o=typeof n.messageId=="string"?n.messageId:"";if(o)return`msg:${o}`;const l=typeof n.timestamp=="number"?n.timestamp:null,c=typeof n.role=="string"?n.role:"unknown";return l!=null?`msg:${c}:${l}:${t}`:`msg:${c}:${t}`}function Je(e){if(e)return Array.isArray(e.type)?e.type.filter(n=>n!=="null")[0]??e.type[0]:e.type}function Ec(e){if(!e)return"";if(e.default!==void 0)return e.default;switch(Je(e)){case"object":return{};case"array":return[];case"boolean":return!1;case"number":case"integer":return 0;case"string":return"";default:return""}}function Gt(e){return e.filter(t=>typeof t=="string").join(".")}function Se(e,t){const n=Gt(e),s=t[n];if(s)return s;const a=n.split(".");for(const[o,l]of Object.entries(t)){if(!o.includes("*"))continue;const c=o.split(".");if(c.length!==a.length)continue;let u=!0;for(let f=0;f<a.length;f+=1)if(c[f]!=="*"&&c[f]!==a[f]){u=!1;break}if(u)return l}}function Be(e){return e.replace(/_/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/\s+/g," ").replace(/^./,t=>t.toUpperCase())}function Zh(e){const t=Gt(e).toLowerCase();return t.includes("token")||t.includes("password")||t.includes("secret")||t.includes("apikey")||t.endsWith("key")}function Xh(e){const t=Gt(e),n=e.map(a=>typeof a=="number"?"*":a).join("."),s=n.replace(/\.\*/g,"[]");return[t,n,s]}const ev={en:{"meta.lastTouchedVersion":"Auto-set when OpenClaw writes the config.","meta.lastTouchedAt":"ISO timestamp of the last config write (auto-set).","update.channel":'Update channel for git + npm installs ("stable", "beta", or "dev").',"update.checkOnStart":"Check for npm updates when the gateway starts (default: true).","gateway.remote.url":"Remote Gateway WebSocket URL (ws:// or wss://).","gateway.remote.tlsFingerprint":"Expected sha256 TLS fingerprint for the remote gateway (pin to avoid MITM).","gateway.remote.sshTarget":"Remote gateway over SSH (tunnels the gateway port to localhost). Format: user@host or user@host:port.","gateway.remote.sshIdentity":"Optional SSH identity file path (passed to ssh -i).","agents.list.*.skills":"Optional allowlist of skills for this agent (omit = all skills; empty = no skills).","agents.list[].skills":"Optional allowlist of skills for this agent (omit = all skills; empty = no skills).","agents.list[].identity.avatar":"Avatar image path (relative to the agent workspace only) or a remote URL/data URL.","discovery.mdns.mode":'mDNS broadcast mode ("minimal" default, "full" includes cliPath/sshPort, "off" disables mDNS).',"gateway.auth.token":"Required by default for gateway access (unless using Tailscale Serve identity); required for non-loopback binds.","gateway.auth.password":"Required for Tailscale funnel.","gateway.controlUi.basePath":"Optional URL prefix where the Control UI is served (e.g. /openclaw).","gateway.controlUi.root":"Optional filesystem root for Control UI assets (defaults to dist/control-ui).","gateway.controlUi.allowedOrigins":"Allowed browser origins for Control UI/WebChat websocket connections (full origins only, e.g. https://control.example.com).","gateway.controlUi.allowInsecureAuth":"Allow Control UI auth over insecure HTTP (token-only; not recommended).","gateway.controlUi.dangerouslyDisableDeviceAuth":"DANGEROUS. Disable Control UI device identity checks (token/password only).","gateway.http.endpoints.chatCompletions.enabled":"Enable the OpenAI-compatible `POST /v1/chat/completions` endpoint (default: false).","gateway.reload.mode":'Hot reload strategy for config changes ("hybrid" recommended).',"gateway.reload.debounceMs":"Debounce window (ms) before applying config changes.","gateway.nodes.browser.mode":'Node browser routing ("auto" = pick single connected browser node, "manual" = require node param, "off" = disable).',"gateway.nodes.browser.node":"Pin browser routing to a specific node id or name (optional).","gateway.nodes.allowCommands":"Extra node.invoke commands to allow beyond the gateway defaults (array of command strings).","gateway.nodes.denyCommands":"Commands to block even if present in node claims or default allowlist.","nodeHost.browserProxy.enabled":"Expose the local browser control server via node proxy.","nodeHost.browserProxy.allowProfiles":"Optional allowlist of browser profile names exposed via the node proxy.","diagnostics.flags":'Enable targeted diagnostics logs by flag (e.g. ["telegram.http"]). Supports wildcards like "telegram.*" or "*".',"diagnostics.cacheTrace.enabled":"Log cache trace snapshots for embedded agent runs (default: false).","diagnostics.cacheTrace.filePath":"JSONL output path for cache trace logs (default: $OPENCLAW_STATE_DIR/logs/cache-trace.jsonl).","diagnostics.cacheTrace.includeMessages":"Include full message payloads in trace output (default: true).","diagnostics.cacheTrace.includePrompt":"Include prompt text in trace output (default: true).","diagnostics.cacheTrace.includeSystem":"Include system prompt in trace output (default: true).","tools.exec.applyPatch.enabled":"Experimental. Enables apply_patch for OpenAI models when allowed by tool policy.","tools.exec.applyPatch.allowModels":'Optional allowlist of model ids (e.g. "gpt-5.2" or "openai/gpt-5.2").',"tools.exec.notifyOnExit":"When true (default), backgrounded exec sessions enqueue a system event and request a heartbeat on exit.","tools.exec.pathPrepend":"Directories to prepend to PATH for exec runs (gateway/sandbox).","tools.exec.safeBins":"Allow stdin-only safe binaries to run without explicit allowlist entries.","tools.message.allowCrossContextSend":"Legacy override: allow cross-context sends across all providers.","tools.message.crossContext.allowWithinProvider":"Allow sends to other channels within the same provider (default: true).","tools.message.crossContext.allowAcrossProviders":"Allow sends across different providers (default: false).","tools.message.crossContext.marker.enabled":"Add a visible origin marker when sending cross-context (default: true).","tools.message.crossContext.marker.prefix":'Text prefix for cross-context markers (supports "{channel}").',"tools.message.crossContext.marker.suffix":'Text suffix for cross-context markers (supports "{channel}").',"tools.message.broadcast.enabled":"Enable broadcast action (default: true).","tools.web.search.enabled":"Enable the web_search tool (requires a provider API key).","tools.web.search.provider":'Search provider ("brave" or "perplexity").',"tools.web.search.apiKey":"Brave Search API key (fallback: BRAVE_API_KEY env var).","tools.web.search.maxResults":"Default number of results to return (1-10).","tools.web.search.timeoutSeconds":"Timeout in seconds for web_search requests.","tools.web.search.cacheTtlMinutes":"Cache TTL in minutes for web_search results.","tools.web.search.perplexity.apiKey":"Perplexity or OpenRouter API key (fallback: PERPLEXITY_API_KEY or OPENROUTER_API_KEY env var).","tools.web.search.perplexity.baseUrl":"Perplexity base URL override (default: https://openrouter.ai/api/v1 or https://api.perplexity.ai).","tools.web.search.perplexity.model":'Perplexity model override (default: "perplexity/sonar-pro").',"tools.web.fetch.enabled":"Enable the web_fetch tool (lightweight HTTP fetch).","tools.web.fetch.maxChars":"Max characters returned by web_fetch (truncated).","tools.web.fetch.maxCharsCap":"Hard cap for web_fetch maxChars (applies to config and tool calls).","tools.web.fetch.timeoutSeconds":"Timeout in seconds for web_fetch requests.","tools.web.fetch.cacheTtlMinutes":"Cache TTL in minutes for web_fetch results.","tools.web.fetch.maxRedirects":"Maximum redirects allowed for web_fetch (default: 3).","tools.web.fetch.userAgent":"Override User-Agent header for web_fetch requests.","tools.web.fetch.readability":"Use Readability to extract main content from HTML (fallbacks to basic HTML cleanup).","tools.web.fetch.firecrawl.enabled":"Enable Firecrawl fallback for web_fetch (if configured).","tools.web.fetch.firecrawl.apiKey":"Firecrawl API key (fallback: FIRECRAWL_API_KEY env var).","tools.web.fetch.firecrawl.baseUrl":"Firecrawl base URL (e.g. https://api.firecrawl.dev or custom endpoint).","tools.web.fetch.firecrawl.onlyMainContent":"When true, Firecrawl returns only the main content (default: true).","tools.web.fetch.firecrawl.maxAgeMs":"Firecrawl maxAge (ms) for cached results when supported by the API.","tools.web.fetch.firecrawl.timeoutSeconds":"Timeout in seconds for Firecrawl requests.","channels.slack.allowBots":"Allow bot-authored messages to trigger Slack replies (default: false).","channels.slack.thread.historyScope":'Scope for Slack thread history context ("thread" isolates per thread; "channel" reuses channel history).',"channels.slack.thread.inheritParent":"If true, Slack thread sessions inherit the parent channel transcript (default: false).","channels.mattermost.botToken":"Bot token from Mattermost System Console -> Integrations -> Bot Accounts.","channels.mattermost.baseUrl":"Base URL for your Mattermost server (e.g., https://chat.example.com).","channels.mattermost.chatmode":'Reply to channel messages on mention ("oncall"), on trigger chars (">" or "!") ("onchar"), or on every message ("onmessage").',"channels.mattermost.oncharPrefixes":'Trigger prefixes for onchar mode (default: [">", "!"]).',"channels.mattermost.requireMention":"Require @mention in channels before responding (default: true).","auth.profiles":"Named auth profiles (provider + mode + optional email).","auth.order":"Ordered auth profile IDs per provider (used for automatic failover).","auth.cooldowns.billingBackoffHours":"Base backoff (hours) when a profile fails due to billing/insufficient credits (default: 5).","auth.cooldowns.billingBackoffHoursByProvider":"Optional per-provider overrides for billing backoff (hours).","auth.cooldowns.billingMaxHours":"Cap (hours) for billing backoff (default: 24).","auth.cooldowns.failureWindowHours":"Failure window (hours) for backoff counters (default: 24).","agents.defaults.bootstrapMaxChars":"Max characters of each workspace bootstrap file injected into the system prompt before truncation (default: 20000).","agents.defaults.repoRoot":"Optional repository root shown in the system prompt runtime line (overrides auto-detect).","agents.defaults.envelopeTimezone":'Timezone for message envelopes ("utc", "local", "user", or an IANA timezone string).',"agents.defaults.envelopeTimestamp":'Include absolute timestamps in message envelopes ("on" or "off").',"agents.defaults.envelopeElapsed":'Include elapsed time in message envelopes ("on" or "off").',"agents.defaults.models":"Configured model catalog (keys are full provider/model IDs).","agents.defaults.memorySearch":"Vector search over MEMORY.md and memory/*.md (per-agent overrides supported).","agents.defaults.memorySearch.sources":'Sources to index for memory search (default: ["memory"]; add "sessions" to include session transcripts).',"agents.defaults.memorySearch.extraPaths":"Extra paths to include in memory search (directories or .md files; relative paths resolved from workspace).","agents.defaults.memorySearch.experimental.sessionMemory":"Enable experimental session transcript indexing for memory search (default: false).","agents.defaults.memorySearch.provider":'Embedding provider ("openai", "gemini", "voyage", or "local").',"agents.defaults.memorySearch.remote.baseUrl":"Custom base URL for remote embeddings (OpenAI-compatible proxies or Gemini overrides).","agents.defaults.memorySearch.remote.apiKey":"Custom API key for the remote embedding provider.","agents.defaults.memorySearch.remote.headers":"Extra headers for remote embeddings (merged; remote overrides OpenAI headers).","agents.defaults.memorySearch.remote.batch.enabled":"Enable batch API for memory embeddings (OpenAI/Gemini; default: true).","agents.defaults.memorySearch.remote.batch.wait":"Wait for batch completion when indexing (default: true).","agents.defaults.memorySearch.remote.batch.concurrency":"Max concurrent embedding batch jobs for memory indexing (default: 2).","agents.defaults.memorySearch.remote.batch.pollIntervalMs":"Polling interval in ms for batch status (default: 2000).","agents.defaults.memorySearch.remote.batch.timeoutMinutes":"Timeout in minutes for batch indexing (default: 60).","agents.defaults.memorySearch.local.modelPath":"Local GGUF model path or hf: URI (node-llama-cpp).","agents.defaults.memorySearch.fallback":'Fallback provider when embeddings fail ("openai", "gemini", "local", or "none").',"agents.defaults.memorySearch.store.path":"SQLite index path (default: ~/.openclaw/memory/{agentId}.sqlite).","agents.defaults.memorySearch.store.vector.enabled":"Enable sqlite-vec extension for vector search (default: true).","agents.defaults.memorySearch.store.vector.extensionPath":"Optional override path to sqlite-vec extension library (.dylib/.so/.dll).","agents.defaults.memorySearch.query.hybrid.enabled":"Enable hybrid BM25 + vector search for memory (default: true).","agents.defaults.memorySearch.query.hybrid.vectorWeight":"Weight for vector similarity when merging results (0-1).","agents.defaults.memorySearch.query.hybrid.textWeight":"Weight for BM25 text relevance when merging results (0-1).","agents.defaults.memorySearch.query.hybrid.candidateMultiplier":"Multiplier for candidate pool size (default: 4).","agents.defaults.memorySearch.cache.enabled":"Cache chunk embeddings in SQLite to speed up reindexing and frequent updates (default: true).",memory:"Memory backend configuration (global).","memory.backend":'Memory backend ("builtin" for OpenClaw embeddings, "qmd" for QMD sidecar).',"memory.citations":'Default citation behavior ("auto", "on", or "off").',"memory.qmd.command":"Path to the qmd binary (default: resolves from PATH).","memory.qmd.includeDefaultMemory":"Whether to automatically index MEMORY.md + memory/**/*.md (default: true).","memory.qmd.paths":"Additional directories/files to index with QMD (path + optional glob pattern).","memory.qmd.paths.path":"Absolute or ~-relative path to index via QMD.","memory.qmd.paths.pattern":"Glob pattern relative to the path root (default: **/*.md).","memory.qmd.paths.name":"Optional stable name for the QMD collection (default derived from path).","memory.qmd.sessions.enabled":"Enable QMD session transcript indexing (experimental, default: false).","memory.qmd.sessions.exportDir":"Override directory for sanitized session exports before indexing.","memory.qmd.sessions.retentionDays":"Retention window for exported sessions before pruning (default: unlimited).","memory.qmd.update.interval":"How often the QMD sidecar refreshes indexes (duration string, default: 5m).","memory.qmd.update.debounceMs":"Minimum delay between successive QMD refresh runs (default: 15000).","memory.qmd.update.onBoot":"Run QMD update once on gateway startup (default: true).","memory.qmd.update.embedInterval":"How often QMD embeddings are refreshed (duration string, default: 60m). Set to 0 to disable periodic embed.","memory.qmd.limits.maxResults":"Max QMD results returned to the agent loop (default: 6).","memory.qmd.limits.maxSnippetChars":"Max characters per snippet pulled from QMD (default: 700).","memory.qmd.limits.maxInjectedChars":"Max total characters injected from QMD hits per turn.","memory.qmd.limits.timeoutMs":"Per-query timeout for QMD searches (default: 4000).","memory.qmd.scope":"Session/channel scope for QMD recall (same syntax as session.sendPolicy; default: direct-only).","agents.defaults.memorySearch.cache.maxEntries":"Optional cap on cached embeddings (best-effort).","agents.defaults.memorySearch.sync.onSearch":"Lazy sync: schedule a reindex on search after changes.","agents.defaults.memorySearch.sync.watch":"Watch memory files for changes (chokidar).","agents.defaults.memorySearch.sync.sessions.deltaBytes":"Minimum appended bytes before session transcripts trigger reindex (default: 100000).","agents.defaults.memorySearch.sync.sessions.deltaMessages":"Minimum appended JSONL lines before session transcripts trigger reindex (default: 50).","plugins.enabled":"Enable plugin/extension loading (default: true).","plugins.allow":"Optional allowlist of plugin ids; when set, only listed plugins load.","plugins.deny":"Optional denylist of plugin ids; deny wins over allowlist.","plugins.load.paths":"Additional plugin files or directories to load.","plugins.slots":"Select which plugins own exclusive slots (memory, etc.).","plugins.slots.memory":'Select the active memory plugin by id, or "none" to disable memory plugins.',"plugins.entries":"Per-plugin settings keyed by plugin id (enable/disable + config payloads).","plugins.entries.*.enabled":"Overrides plugin enable/disable for this entry (restart required).","plugins.entries.*.config":"Plugin-defined config payload (schema is provided by the plugin).","plugins.installs":"CLI-managed install metadata (used by `openclaw plugins update` to locate install sources).","plugins.installs.*.source":'Install source ("npm", "archive", or "path").',"plugins.installs.*.spec":"Original npm spec used for install (if source is npm).","plugins.installs.*.sourcePath":"Original archive/path used for install (if any).","plugins.installs.*.installPath":"Resolved install directory (usually ~/.openclaw/extensions/<id>).","plugins.installs.*.version":"Version recorded at install time (if available).","plugins.installs.*.installedAt":"ISO timestamp of last install/update.","agents.list.*.identity.avatar":"Agent avatar (workspace-relative path, http(s) URL, or data URI).","agents.defaults.model.primary":"Primary model (provider/model).","agents.defaults.model.fallbacks":"Ordered fallback models (provider/model). Used when the primary model fails.","agents.defaults.imageModel.primary":"Optional image model (provider/model) used when the primary model lacks image input.","agents.defaults.imageModel.fallbacks":"Ordered fallback image models (provider/model).","agents.defaults.cliBackends":"Optional CLI backends for text-only fallback (claude-cli, etc.).","agents.defaults.humanDelay.mode":'Delay style for block replies ("off", "natural", "custom").',"agents.defaults.humanDelay.minMs":"Minimum delay in ms for custom humanDelay (default: 800).","agents.defaults.humanDelay.maxMs":"Maximum delay in ms for custom humanDelay (default: 2500).","commands.native":"Register native commands with channels that support it (Discord/Slack/Telegram).","commands.nativeSkills":"Register native skill commands (user-invocable skills) with channels that support it.","commands.text":"Allow text command parsing (slash commands only).","commands.bash":"Allow bash chat command (`!`; `/bash` alias) to run host shell commands (default: false; requires tools.elevated).","commands.bashForegroundMs":"How long bash waits before backgrounding (default: 2000; 0 backgrounds immediately).","commands.config":"Allow /config chat command to read/write config on disk (default: false).","commands.debug":"Allow /debug chat command for runtime-only overrides (default: false).","commands.restart":"Allow /restart and gateway restart tool actions (default: false).","commands.useAccessGroups":"Enforce access-group allowlists/policies for commands.","commands.ownerAllowFrom":`Explicit owner allowlist for owner-only tools/commands. Use channel-native IDs (optionally prefixed like "whatsapp:+15551234567"). '*' is ignored.`,"session.dmScope":'DM session scoping: "main" keeps continuity; "per-peer", "per-channel-peer", or "per-account-channel-peer" isolates DM history (recommended for shared inboxes/multi-account).',"session.identityLinks":"Map canonical identities to provider-prefixed peer IDs for DM session linking (example: telegram:123456).","channels.telegram.configWrites":"Allow Telegram to write config in response to channel events/commands (default: true).","channels.slack.configWrites":"Allow Slack to write config in response to channel events/commands (default: true).","channels.mattermost.configWrites":"Allow Mattermost to write config in response to channel events/commands (default: true).","channels.discord.configWrites":"Allow Discord to write config in response to channel events/commands (default: true).","channels.whatsapp.configWrites":"Allow WhatsApp to write config in response to channel events/commands (default: true).","channels.signal.configWrites":"Allow Signal to write config in response to channel events/commands (default: true).","channels.imessage.configWrites":"Allow iMessage to write config in response to channel events/commands (default: true).","channels.msteams.configWrites":"Allow Microsoft Teams to write config in response to channel events/commands (default: true).","channels.discord.commands.native":'Override native commands for Discord (bool or "auto").',"channels.discord.commands.nativeSkills":'Override native skill commands for Discord (bool or "auto").',"channels.telegram.commands.native":'Override native commands for Telegram (bool or "auto").',"channels.telegram.commands.nativeSkills":'Override native skill commands for Telegram (bool or "auto").',"channels.slack.commands.native":'Override native commands for Slack (bool or "auto").',"channels.slack.commands.nativeSkills":'Override native skill commands for Slack (bool or "auto").',"session.agentToAgent.maxPingPongTurns":"Max reply-back turns between requester and target (0–5).","channels.telegram.customCommands":"Additional Telegram bot menu commands (merged with native; conflicts ignored).","messages.ackReaction":"Emoji reaction used to acknowledge inbound messages (empty disables).","messages.ackReactionScope":'When to send ack reactions ("group-mentions", "group-all", "direct", "all").',"messages.inbound.debounceMs":"Debounce window (ms) for batching rapid inbound messages from the same sender (0 to disable).","channels.telegram.dmPolicy":'Direct message access control ("pairing" recommended). "open" requires channels.telegram.allowFrom=["*"].',"channels.telegram.streamMode":"Draft streaming mode for Telegram replies (off | partial | block). Separate from block streaming; requires private topics + sendMessageDraft.","channels.telegram.draftChunk.minChars":'Minimum chars before emitting a Telegram draft update when channels.telegram.streamMode="block" (default: 200).',"channels.telegram.draftChunk.maxChars":'Target max size for a Telegram draft update chunk when channels.telegram.streamMode="block" (default: 800; clamped to channels.telegram.textChunkLimit).',"channels.telegram.draftChunk.breakPreference":"Preferred breakpoints for Telegram draft chunks (paragraph | newline | sentence). Default: paragraph.","channels.telegram.retry.attempts":"Max retry attempts for outbound Telegram API calls (default: 3).","channels.telegram.retry.minDelayMs":"Minimum retry delay in ms for Telegram outbound calls.","channels.telegram.retry.maxDelayMs":"Maximum retry delay cap in ms for Telegram outbound calls.","channels.telegram.retry.jitter":"Jitter factor (0-1) applied to Telegram retry delays.","channels.telegram.network.autoSelectFamily":"Override Node autoSelectFamily for Telegram (true=enable, false=disable).","channels.telegram.timeoutSeconds":"Max seconds before Telegram API requests are aborted (default: 500 per grammY).","channels.whatsapp.dmPolicy":'Direct message access control ("pairing" recommended). "open" requires channels.whatsapp.allowFrom=["*"].',"channels.whatsapp.selfChatMode":"Same-phone setup (bot uses your personal WhatsApp number).","channels.whatsapp.debounceMs":"Debounce window (ms) for batching rapid consecutive messages from the same sender (0 to disable).","channels.signal.dmPolicy":'Direct message access control ("pairing" recommended). "open" requires channels.signal.allowFrom=["*"].',"channels.imessage.dmPolicy":'Direct message access control ("pairing" recommended). "open" requires channels.imessage.allowFrom=["*"].',"channels.bluebubbles.dmPolicy":'Direct message access control ("pairing" recommended). "open" requires channels.bluebubbles.allowFrom=["*"].',"channels.discord.dm.policy":'Direct message access control ("pairing" recommended). "open" requires channels.discord.dm.allowFrom=["*"].',"channels.discord.retry.attempts":"Max retry attempts for outbound Discord API calls (default: 3).","channels.discord.retry.minDelayMs":"Minimum retry delay in ms for Discord outbound calls.","channels.discord.retry.maxDelayMs":"Maximum retry delay cap in ms for Discord outbound calls.","channels.discord.retry.jitter":"Jitter factor (0-1) applied to Discord retry delays.","channels.discord.maxLinesPerMessage":"Soft max line count per Discord message (default: 17).","channels.discord.intents.presence":"Enable the Guild Presences privileged intent. Must also be enabled in the Discord Developer Portal. Allows tracking user activities (e.g. Spotify). Default: false.","channels.discord.intents.guildMembers":"Enable the Guild Members privileged intent. Must also be enabled in the Discord Developer Portal. Default: false.","channels.discord.pluralkit.enabled":"Resolve PluralKit proxied messages and treat system members as distinct senders.","channels.discord.pluralkit.token":"Optional PluralKit token for resolving private systems or members.","channels.slack.dm.policy":'Direct message access control ("pairing" recommended). "open" requires channels.slack.dm.allowFrom=["*"].'},zh:{"meta.lastTouchedVersion":"OpenClaw 写入配置时自动设置。","meta.lastTouchedAt":"最后一次配置写入的 ISO 时间戳（自动设置）。","update.channel":'git + npm 安装的更新渠道（"stable"、"beta" 或 "dev"）。',"update.checkOnStart":"网关启动时检查 npm 更新（默认：true）。","gateway.remote.url":"远程网关 WebSocket URL（ws:// 或 wss://）。","gateway.remote.tlsFingerprint":"远程网关的预期 sha256 TLS 指纹（固定以避免中间人攻击）。","gateway.remote.sshTarget":"通过 SSH 的远程网关（将网关端口隧道到 localhost）。格式：user@host 或 user@host:port。","gateway.remote.sshIdentity":"可选的 SSH 身份文件路径（传递给 ssh -i）。","agents.list.*.skills":"此代理的可选技能允许列表（省略 = 所有技能；空 = 无技能）。","agents.list[].skills":"此代理的可选技能允许列表（省略 = 所有技能；空 = 无技能）。","agents.list[].identity.avatar":"头像图片路径（仅相对于代理工作区）或远程 URL/data URL。","discovery.mdns.mode":'mDNS 广播模式（"minimal" 默认，"full" 包含 cliPath/sshPort，"off" 禁用 mDNS）。',"gateway.auth.token":"默认情况下网关访问所需（除非使用 Tailscale Serve 身份）；非回环绑定需要。","gateway.auth.password":"Tailscale funnel 需要。","gateway.controlUi.basePath":"控制台 UI 服务的可选 URL 前缀（例如 /openclaw）。","gateway.controlUi.root":"控制台 UI 资源的可选文件系统根目录（默认为 dist/control-ui）。","gateway.controlUi.allowedOrigins":"控制台 UI/WebChat websocket 连接允许的浏览器来源（仅完整来源，例如 https://control.example.com）。","gateway.controlUi.allowInsecureAuth":"允许通过不安全 HTTP 进行控制台 UI 认证（仅令牌；不推荐）。","gateway.controlUi.dangerouslyDisableDeviceAuth":"危险。禁用控制台 UI 设备身份检查（仅令牌/密码）。","gateway.http.endpoints.chatCompletions.enabled":"启用 OpenAI 兼容的 `POST /v1/chat/completions` 端点（默认：false）。","gateway.reload.mode":'配置更改的热重载策略（推荐 "hybrid"）。',"gateway.reload.debounceMs":"应用配置更改前的防抖窗口（毫秒）。","gateway.nodes.browser.mode":'节点浏览器路由（"auto" = 选择单个连接的浏览器节点，"manual" = 需要节点参数，"off" = 禁用）。',"gateway.nodes.browser.node":"将浏览器路由固定到特定节点 id 或名称（可选）。","gateway.nodes.allowCommands":"允许的额外 node.invoke 命令，超出网关默认值（命令字符串数组）。","gateway.nodes.denyCommands":"即使存在于节点声明或默认允许列表中也要阻止的命令。","nodeHost.browserProxy.enabled":"通过节点代理暴露本地浏览器控制服务器。","nodeHost.browserProxy.allowProfiles":"通过节点代理暴露的浏览器配置集名称的可选允许列表。","diagnostics.flags":'按标志启用目标诊断日志（例如 ["telegram.http"]）。支持通配符，如 "telegram.*" 或 "*"。',"diagnostics.cacheTrace.enabled":"记录嵌入代理运行的缓存跟踪快照（默认：false）。","diagnostics.cacheTrace.filePath":"缓存跟踪日志的 JSONL 输出路径（默认：$OPENCLAW_STATE_DIR/logs/cache-trace.jsonl）。","diagnostics.cacheTrace.includeMessages":"在跟踪输出中包含完整消息负载（默认：true）。","diagnostics.cacheTrace.includePrompt":"在跟踪输出中包含提示文本（默认：true）。","diagnostics.cacheTrace.includeSystem":"在跟踪输出中包含系统提示（默认：true）。","tools.exec.applyPatch.enabled":"实验性。在工具策略允许时，为 OpenAI 模型启用 apply_patch。","tools.exec.applyPatch.allowModels":'模型 id 的可选允许列表（例如 "gpt-5.2" 或 "openai/gpt-5.2"）。',"tools.exec.notifyOnExit":"当为 true（默认）时，后台 exec 会话在退出时排队系统事件并请求心跳。","tools.exec.pathPrepend":"为 exec 运行前置到 PATH 的目录（网关/沙箱）。","tools.exec.safeBins":"允许仅 stdin 的安全二进制文件在没有显式允许列表条目的情况下运行。","tools.message.allowCrossContextSend":"遗留覆盖：允许跨所有提供方的跨上下文发送。","tools.message.crossContext.allowWithinProvider":"允许发送到同一提供方内的其他通道（默认：true）。","tools.message.crossContext.allowAcrossProviders":"允许跨不同提供方发送（默认：false）。","tools.message.crossContext.marker.enabled":"发送跨上下文时添加可见的来源标记（默认：true）。","tools.message.crossContext.marker.prefix":'跨上下文标记的文本前缀（支持 "{channel}"）。',"tools.message.crossContext.marker.suffix":'跨上下文标记的文本后缀（支持 "{channel}"）。',"tools.message.broadcast.enabled":"启用广播操作（默认：true）。","tools.web.search.enabled":"启用 web_search 工具（需要提供方 API 密钥）。","tools.web.search.provider":'搜索提供方（"brave" 或 "perplexity"）。',"tools.web.search.apiKey":"Brave Search API 密钥（回退：BRAVE_API_KEY 环境变量）。","tools.web.search.maxResults":"默认返回的结果数（1-10）。","tools.web.search.timeoutSeconds":"web_search 请求的超时（秒）。","tools.web.search.cacheTtlMinutes":"web_search 结果的缓存 TTL（分钟）。","tools.web.search.perplexity.apiKey":"Perplexity 或 OpenRouter API 密钥（回退：PERPLEXITY_API_KEY 或 OPENROUTER_API_KEY 环境变量）。","tools.web.search.perplexity.baseUrl":"Perplexity base URL 覆盖（默认：https://openrouter.ai/api/v1 或 https://api.perplexity.ai）。","tools.web.search.perplexity.model":'Perplexity 模型覆盖（默认："perplexity/sonar-pro"）。',"tools.web.fetch.enabled":"启用 web_fetch 工具（轻量级 HTTP 获取）。","tools.web.fetch.maxChars":"web_fetch 返回的最大字符数（截断）。","tools.web.fetch.maxCharsCap":"web_fetch maxChars 的硬上限（适用于配置和工具调用）。","tools.web.fetch.timeoutSeconds":"web_fetch 请求的超时（秒）。","tools.web.fetch.cacheTtlMinutes":"web_fetch 结果的缓存 TTL（分钟）。","tools.web.fetch.maxRedirects":"web_fetch 允许的最大重定向数（默认：3）。","tools.web.fetch.userAgent":"覆盖 web_fetch 请求的 User-Agent 头。","tools.web.fetch.readability":"使用 Readability 从 HTML 中提取主要内容（回退到基本 HTML 清理）。","tools.web.fetch.firecrawl.enabled":"启用 Firecrawl 回退用于 web_fetch（如果已配置）。","tools.web.fetch.firecrawl.apiKey":"Firecrawl API 密钥（回退：FIRECRAWL_API_KEY 环境变量）。","tools.web.fetch.firecrawl.baseUrl":"Firecrawl base URL（例如 https://api.firecrawl.dev 或自定义端点）。","tools.web.fetch.firecrawl.onlyMainContent":"当为 true 时，Firecrawl 仅返回主要内容（默认：true）。","tools.web.fetch.firecrawl.maxAgeMs":"Firecrawl maxAge（毫秒），用于 API 支持时的缓存结果。","tools.web.fetch.firecrawl.timeoutSeconds":"Firecrawl 请求的超时（秒）。","channels.slack.allowBots":"允许机器人撰写的消息触发 Slack 回复（默认：false）。","channels.slack.thread.historyScope":'Slack 线程历史上下文的范围（"thread" 隔离每个线程；"channel" 重用通道历史）。',"channels.slack.thread.inheritParent":"如果为 true，Slack 线程会话继承父通道转录（默认：false）。","channels.mattermost.botToken":"来自 Mattermost 系统控制台 -> 集成 -> 机器人账户的机器人令牌。","channels.mattermost.baseUrl":"您的 Mattermost 服务器的 Base URL（例如，https://chat.example.com）。","channels.mattermost.chatmode":'在提及（"oncall"）、触发字符（">" 或 "!"）（"onchar"）或每条消息（"onmessage"）时回复通道消息。',"channels.mattermost.oncharPrefixes":'onchar 模式的触发前缀（默认：[">", "!"]）。',"channels.mattermost.requireMention":"在回复前要求在通道中 @提及（默认：true）。","auth.profiles":"命名的认证配置集（提供方 + 模式 + 可选电子邮件）。","auth.order":"每个提供方的有序认证配置集 ID（用于自动故障转移）。","auth.cooldowns.billingBackoffHours":"当配置集因计费/积分不足而失败时的基本退避（小时）（默认：5）。","auth.cooldowns.billingBackoffHoursByProvider":"每个提供方的计费退避可选覆盖（小时）。","auth.cooldowns.billingMaxHours":"计费退避的上限（小时）（默认：24）。","auth.cooldowns.failureWindowHours":"退避计数器的故障窗口（小时）（默认：24）。","agents.defaults.bootstrapMaxChars":"在截断前注入系统提示的每个工作区引导文件的最大字符数（默认：20000）。","agents.defaults.repoRoot":"在系统提示运行时行中显示的可选仓库根目录（覆盖自动检测）。","agents.defaults.envelopeTimezone":'消息信封的时区（"utc"、"local"、"user" 或 IANA 时区字符串）。',"agents.defaults.envelopeTimestamp":'在消息信封中包含绝对时间戳（"on" 或 "off"）。',"agents.defaults.envelopeElapsed":'在消息信封中包含经过时间（"on" 或 "off"）。',"agents.defaults.models":"配置的模型目录（键是完整的提供方/模型 ID）。","agents.defaults.memorySearch":"对 MEMORY.md 和 memory/*.md 的向量搜索（支持每个代理的覆盖）。","agents.defaults.memorySearch.sources":'记忆搜索的索引来源（默认：["memory"]；添加 "sessions" 以包含会话转录）。',"agents.defaults.memorySearch.extraPaths":"记忆搜索中包含的额外路径（目录或 .md 文件；相对路径从工作区解析）。","agents.defaults.memorySearch.experimental.sessionMemory":"启用实验性会话转录索引用于记忆搜索（默认：false）。","agents.defaults.memorySearch.provider":'嵌入提供方（"openai"、"gemini"、"voyage" 或 "local"）。',"agents.defaults.memorySearch.remote.baseUrl":"远程嵌入的自定义 base URL（OpenAI 兼容代理或 Gemini 覆盖）。","agents.defaults.memorySearch.remote.apiKey":"远程嵌入提供方的自定义 API 密钥。","agents.defaults.memorySearch.remote.headers":"远程嵌入的额外请求头（合并；远程覆盖 OpenAI 请求头）。","agents.defaults.memorySearch.remote.batch.enabled":"启用记忆嵌入的批处理 API（OpenAI/Gemini；默认：true）。","agents.defaults.memorySearch.remote.batch.wait":"索引时等待批处理完成（默认：true）。","agents.defaults.memorySearch.remote.batch.concurrency":"记忆索引的最大并发嵌入批处理作业数（默认：2）。","agents.defaults.memorySearch.remote.batch.pollIntervalMs":"批处理状态轮询间隔（毫秒）（默认：2000）。","agents.defaults.memorySearch.remote.batch.timeoutMinutes":"批处理索引的超时（分钟）（默认：60）。","agents.defaults.memorySearch.local.modelPath":"本地 GGUF 模型路径或 hf: URI（node-llama-cpp）。","agents.defaults.memorySearch.fallback":'嵌入失败时的回退提供方（"openai"、"gemini"、"local" 或 "none"）。',"agents.defaults.memorySearch.store.path":"SQLite 索引路径（默认：~/.openclaw/memory/{agentId}.sqlite）。","agents.defaults.memorySearch.store.vector.enabled":"启用 sqlite-vec 扩展用于向量搜索（默认：true）。","agents.defaults.memorySearch.store.vector.extensionPath":"sqlite-vec 扩展库的可选覆盖路径（.dylib/.so/.dll）。","agents.defaults.memorySearch.query.hybrid.enabled":"启用混合 BM25 + 向量搜索用于记忆（默认：true）。","agents.defaults.memorySearch.query.hybrid.vectorWeight":"合并结果时向量相似度的权重（0-1）。","agents.defaults.memorySearch.query.hybrid.textWeight":"合并结果时 BM25 文本相关性的权重（0-1）。","agents.defaults.memorySearch.query.hybrid.candidateMultiplier":"候选池大小的倍数（默认：4）。","agents.defaults.memorySearch.cache.enabled":"在 SQLite 中缓存块嵌入以加速重新索引和频繁更新（默认：true）。",memory:"记忆后端配置（全局）。","memory.backend":'记忆后端（"builtin" 用于 OpenClaw 嵌入，"qmd" 用于 QMD 侧车）。',"memory.citations":'默认引用行为（"auto"、"on" 或 "off"）。',"memory.qmd.command":"qmd 可执行文件的路径（默认：从 PATH 解析）。","memory.qmd.includeDefaultMemory":"是否自动索引 MEMORY.md + memory/**/*.md（默认：true）。","memory.qmd.paths":"使用 QMD 索引的额外目录/文件（路径 + 可选 glob 模式）。","memory.qmd.paths.path":"通过 QMD 索引的绝对或 ~ 相对路径。","memory.qmd.paths.pattern":"相对于路径根的 Glob 模式（默认：**/*.md）。","memory.qmd.paths.name":"QMD 集合的可选稳定名称（默认从路径派生）。","memory.qmd.sessions.enabled":"启用 QMD 会话转录索引（实验性，默认：false）。","memory.qmd.sessions.exportDir":"索引前清理会话导出的覆盖目录。","memory.qmd.sessions.retentionDays":"修剪前导出会话的保留窗口（默认：无限制）。","memory.qmd.update.interval":"QMD 侧车刷新索引的频率（持续时间字符串，默认：5m）。","memory.qmd.update.debounceMs":"连续 QMD 刷新运行之间的最小延迟（默认：15000）。","memory.qmd.update.onBoot":"在网关启动时运行一次 QMD 更新（默认：true）。","memory.qmd.update.embedInterval":"QMD 嵌入刷新的频率（持续时间字符串，默认：60m）。设置为 0 以禁用定期嵌入。","memory.qmd.limits.maxResults":"返回到代理循环的最大 QMD 结果数（默认：6）。","memory.qmd.limits.maxSnippetChars":"从 QMD 拉取的每个片段的最大字符数（默认：700）。","memory.qmd.limits.maxInjectedChars":"每轮从 QMD 命中注入的最大总字符数。","memory.qmd.limits.timeoutMs":"QMD 搜索的每次查询超时（默认：4000）。","memory.qmd.scope":"QMD 召回会话/通道范围（与 session.sendPolicy 相同的语法；默认：仅直接）。","agents.defaults.memorySearch.cache.maxEntries":"缓存嵌入的可选上限（尽力而为）。","agents.defaults.memorySearch.sync.onSearch":"懒同步：在更改后搜索时安排重新索引。","agents.defaults.memorySearch.sync.watch":"监听记忆文件的更改（chokidar）。","agents.defaults.memorySearch.sync.sessions.deltaBytes":"会话转录触发重新索引前的最小追加字节数（默认：100000）。","agents.defaults.memorySearch.sync.sessions.deltaMessages":"会话转录触发重新索引前的最小追加 JSONL 行数（默认：50）。","plugins.enabled":"启用插件/扩展加载（默认：true）。","plugins.allow":"插件 id 的可选允许列表；设置时，仅加载列出的插件。","plugins.deny":"插件 id 的可选拒绝列表；拒绝优先于允许列表。","plugins.load.paths":"要加载的额外插件文件或目录。","plugins.slots":"选择哪些插件拥有独占槽位（记忆等）。","plugins.slots.memory":'按 id 选择活动记忆插件，或 "none" 以禁用记忆插件。',"plugins.entries":"按插件 id 键控的每个插件设置（启用/禁用 + 配置负载）。","plugins.entries.*.enabled":"覆盖此条目的插件启用/禁用（需要重启）。","plugins.entries.*.config":"插件定义的配置负载（模式由插件提供）。","plugins.installs":"CLI 管理的安装元数据（由 `openclaw plugins update` 用于定位安装来源）。","plugins.installs.*.source":'安装来源（"npm"、"archive" 或 "path"）。',"plugins.installs.*.spec":"用于安装的原始 npm 规格（如果来源是 npm）。","plugins.installs.*.sourcePath":"用于安装的原始存档/路径（如果有）。","plugins.installs.*.installPath":"解析的安装目录（通常是 ~/.openclaw/extensions/<id>）。","plugins.installs.*.version":"安装时记录的版本（如果可用）。","plugins.installs.*.installedAt":"最后一次安装/更新的 ISO 时间戳。","agents.list.*.identity.avatar":"代理头像（工作区相对路径、http(s) URL 或 data URI）。","agents.defaults.model.primary":"主模型（提供方/模型）。","agents.defaults.model.fallbacks":"有序回退模型（提供方/模型）。当主模型失败时使用。","agents.defaults.imageModel.primary":"当主模型缺少图像输入时使用的可选图像模型（提供方/模型）。","agents.defaults.imageModel.fallbacks":"有序回退图像模型（提供方/模型）。","agents.defaults.cliBackends":"用于仅文本回退的可选 CLI 后端（claude-cli 等）。","agents.defaults.humanDelay.mode":'块回复的延迟样式（"off"、"natural"、"custom"）。',"agents.defaults.humanDelay.minMs":"自定义 humanDelay 的最小延迟（毫秒）（默认：800）。","agents.defaults.humanDelay.maxMs":"自定义 humanDelay 的最大延迟（毫秒）（默认：2500）。","commands.native":"向支持它的通道注册原生命令（Discord/Slack/Telegram）。","commands.nativeSkills":"向支持它的通道注册原生技能命令（用户可调用的技能）。","commands.text":"允许文本命令解析（仅斜杠命令）。","commands.bash":"允许 bash 聊天命令（`!`；`/bash` 别名）运行主机 shell 命令（默认：false；需要 tools.elevated）。","commands.bashForegroundMs":"bash 在后台化之前等待的时间（默认：2000；0 立即后台化）。","commands.config":"允许 /config 聊天命令在磁盘上读取/写入配置（默认：false）。","commands.debug":"允许 /debug 聊天命令进行仅运行时覆盖（默认：false）。","commands.restart":"允许 /restart 和网关重启工具操作（默认：false）。","commands.useAccessGroups":"强制执行访问组允许列表/策略用于命令。","commands.ownerAllowFrom":`仅所有者工具/命令的显式所有者允许列表。使用通道原生 ID（可选前缀，如 "whatsapp:+15551234567"）。'*' 被忽略。`,"session.dmScope":'私信会话范围："main" 保持连续性；"per-peer"、"per-channel-peer" 或 "per-account-channel-peer" 隔离私信历史（推荐用于共享收件箱/多账户）。',"session.identityLinks":"将规范身份映射到提供方前缀的对等 ID 用于私信会话链接（示例：telegram:123456）。","channels.telegram.configWrites":"允许 Telegram 响应通道事件/命令写入配置（默认：true）。","channels.slack.configWrites":"允许 Slack 响应通道事件/命令写入配置（默认：true）。","channels.mattermost.configWrites":"允许 Mattermost 响应通道事件/命令写入配置（默认：true）。","channels.discord.configWrites":"允许 Discord 响应通道事件/命令写入配置（默认：true）。","channels.whatsapp.configWrites":"允许 WhatsApp 响应通道事件/命令写入配置（默认：true）。","channels.signal.configWrites":"允许 Signal 响应通道事件/命令写入配置（默认：true）。","channels.imessage.configWrites":"允许 iMessage 响应通道事件/命令写入配置（默认：true）。","channels.msteams.configWrites":"允许 Microsoft Teams 响应通道事件/命令写入配置（默认：true）。","channels.discord.commands.native":'覆盖 Discord 的原生命令（bool 或 "auto"）。',"channels.discord.commands.nativeSkills":'覆盖 Discord 的原生技能命令（bool 或 "auto"）。',"channels.telegram.commands.native":'覆盖 Telegram 的原生命令（bool 或 "auto"）。',"channels.telegram.commands.nativeSkills":'覆盖 Telegram 的原生技能命令（bool 或 "auto"）。',"channels.slack.commands.native":'覆盖 Slack 的原生命令（bool 或 "auto"）。',"channels.slack.commands.nativeSkills":'覆盖 Slack 的原生技能命令（bool 或 "auto"）。',"session.agentToAgent.maxPingPongTurns":"请求者和目标之间的最大回复轮数（0–5）。","channels.telegram.customCommands":"额外的 Telegram 机器人菜单命令（与原生命令合并；冲突被忽略）。","messages.ackReaction":"用于确认入站消息的表情符号反应（空则禁用）。","messages.ackReactionScope":'何时发送确认反应（"group-mentions"、"group-all"、"direct"、"all"）。',"messages.inbound.debounceMs":"批处理来自同一发送者的快速入站消息的防抖窗口（毫秒）（0 以禁用）。","channels.telegram.dmPolicy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.telegram.allowFrom=["*"]。',"channels.telegram.streamMode":"Telegram 回复的草稿流模式（off | partial | block）。与块流分离；需要私有主题 + sendMessageDraft。","channels.telegram.draftChunk.minChars":'当 channels.telegram.streamMode="block" 时，发出 Telegram 草稿更新前的最小字符数（默认：200）。',"channels.telegram.draftChunk.maxChars":'当 channels.telegram.streamMode="block" 时，Telegram 草稿更新块的目标最大大小（默认：800；限制为 channels.telegram.textChunkLimit）。',"channels.telegram.draftChunk.breakPreference":"Telegram 草稿块的首选断点（paragraph | newline | sentence）。默认：paragraph。","channels.telegram.retry.attempts":"出站 Telegram API 调用的最大重试次数（默认：3）。","channels.telegram.retry.minDelayMs":"Telegram 出站调用的最小重试延迟（毫秒）。","channels.telegram.retry.maxDelayMs":"Telegram 出站调用的最大重试延迟上限（毫秒）。","channels.telegram.retry.jitter":"应用于 Telegram 重试延迟的抖动因子（0-1）。","channels.telegram.network.autoSelectFamily":"覆盖 Telegram 的 Node autoSelectFamily（true=启用，false=禁用）。","channels.telegram.timeoutSeconds":"Telegram API 请求中止前的最大秒数（默认：500 per grammY）。","channels.whatsapp.dmPolicy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.whatsapp.allowFrom=["*"]。',"channels.whatsapp.selfChatMode":"同手机设置（机器人使用您的个人 WhatsApp 号码）。","channels.whatsapp.debounceMs":"批处理来自同一发送者的快速连续消息的防抖窗口（毫秒）（0 以禁用）。","channels.signal.dmPolicy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.signal.allowFrom=["*"]。',"channels.imessage.dmPolicy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.imessage.allowFrom=["*"]。',"channels.bluebubbles.dmPolicy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.bluebubbles.allowFrom=["*"]。',"channels.discord.dm.policy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.discord.dm.allowFrom=["*"]。',"channels.discord.retry.attempts":"出站 Discord API 调用的最大重试次数（默认：3）。","channels.discord.retry.minDelayMs":"Discord 出站调用的最小重试延迟（毫秒）。","channels.discord.retry.maxDelayMs":"Discord 出站调用的最大重试延迟上限（毫秒）。","channels.discord.retry.jitter":"应用于 Discord 重试延迟的抖动因子（0-1）。","channels.discord.maxLinesPerMessage":"每个 Discord 消息的软最大行数（默认：17）。","channels.discord.intents.presence":"启用 Guild Presences 特权意图。还必须在 Discord 开发者门户中启用。允许跟踪用户活动（例如 Spotify）。默认：false。","channels.discord.intents.guildMembers":"启用 Guild Members 特权意图。还必须在 Discord 开发者门户中启用。默认：false。","channels.discord.pluralkit.enabled":"解析 PluralKit 代理消息并将系统成员视为不同的发送者。","channels.discord.pluralkit.token":"用于解析私有系统或成员的可选 PluralKit 令牌。","channels.slack.dm.policy":'直接消息访问控制（推荐 "pairing"）。"open" 需要 channels.slack.dm.allowFrom=["*"]。'}};function Ye(e,t){const n=Qa(),s=ev[n];for(const a of Xh(e)){const o=s[a];if(o)return o}return t}function tv(e){const t=Gt(e),n=e.map(a=>typeof a=="number"?"*":a).join("."),s=n.replace(/\.\*/g,"[]");return[t,n,s]}const nv={en:{"meta.lastTouchedVersion":"Config Last Touched Version","meta.lastTouchedAt":"Config Last Touched At","update.channel":"Update Channel","update.checkOnStart":"Update Check on Start","diagnostics.enabled":"Diagnostics Enabled","diagnostics.flags":"Diagnostics Flags","diagnostics.otel.enabled":"OpenTelemetry Enabled","diagnostics.otel.endpoint":"OpenTelemetry Endpoint","diagnostics.otel.protocol":"OpenTelemetry Protocol","diagnostics.otel.headers":"OpenTelemetry Headers","diagnostics.otel.serviceName":"OpenTelemetry Service Name","diagnostics.otel.traces":"OpenTelemetry Traces Enabled","diagnostics.otel.metrics":"OpenTelemetry Metrics Enabled","diagnostics.otel.logs":"OpenTelemetry Logs Enabled","diagnostics.otel.sampleRate":"OpenTelemetry Trace Sample Rate","diagnostics.otel.flushIntervalMs":"OpenTelemetry Flush Interval (ms)","diagnostics.cacheTrace.enabled":"Cache Trace Enabled","diagnostics.cacheTrace.filePath":"Cache Trace File Path","diagnostics.cacheTrace.includeMessages":"Cache Trace Include Messages","diagnostics.cacheTrace.includePrompt":"Cache Trace Include Prompt","diagnostics.cacheTrace.includeSystem":"Cache Trace Include System","agents.list.*.identity.avatar":"Identity Avatar","agents.list.*.skills":"Agent Skill Filter","gateway.remote.url":"Remote Gateway URL","gateway.remote.sshTarget":"Remote Gateway SSH Target","gateway.remote.sshIdentity":"Remote Gateway SSH Identity","gateway.remote.token":"Remote Gateway Token","gateway.remote.password":"Remote Gateway Password","gateway.remote.tlsFingerprint":"Remote Gateway TLS Fingerprint","gateway.auth.token":"Gateway Token","gateway.auth.password":"Gateway Password","tools.media.image.enabled":"Enable Image Understanding","tools.media.image.maxBytes":"Image Understanding Max Bytes","tools.media.image.maxChars":"Image Understanding Max Chars","tools.media.image.prompt":"Image Understanding Prompt","tools.media.image.timeoutSeconds":"Image Understanding Timeout (sec)","tools.media.image.attachments":"Image Understanding Attachment Policy","tools.media.image.models":"Image Understanding Models","tools.media.image.scope":"Image Understanding Scope","tools.media.models":"Media Understanding Shared Models","tools.media.concurrency":"Media Understanding Concurrency","tools.media.audio.enabled":"Enable Audio Understanding","tools.media.audio.maxBytes":"Audio Understanding Max Bytes","tools.media.audio.maxChars":"Audio Understanding Max Chars","tools.media.audio.prompt":"Audio Understanding Prompt","tools.media.audio.timeoutSeconds":"Audio Understanding Timeout (sec)","tools.media.audio.language":"Audio Understanding Language","tools.media.audio.attachments":"Audio Understanding Attachment Policy","tools.media.audio.models":"Audio Understanding Models","tools.media.audio.scope":"Audio Understanding Scope","tools.media.video.enabled":"Enable Video Understanding","tools.media.video.maxBytes":"Video Understanding Max Bytes","tools.media.video.maxChars":"Video Understanding Max Chars","tools.media.video.prompt":"Video Understanding Prompt","tools.media.video.timeoutSeconds":"Video Understanding Timeout (sec)","tools.media.video.attachments":"Video Understanding Attachment Policy","tools.media.video.models":"Video Understanding Models","tools.media.video.scope":"Video Understanding Scope","tools.links.enabled":"Enable Link Understanding","tools.links.maxLinks":"Link Understanding Max Links","tools.links.timeoutSeconds":"Link Understanding Timeout (sec)","tools.links.models":"Link Understanding Models","tools.links.scope":"Link Understanding Scope","tools.profile":"Tool Profile","tools.alsoAllow":"Tool Allowlist Additions","agents.list[].tools.profile":"Agent Tool Profile","agents.list[].tools.alsoAllow":"Agent Tool Allowlist Additions","tools.byProvider":"Tool Policy by Provider","agents.list[].tools.byProvider":"Agent Tool Policy by Provider","tools.exec.applyPatch.enabled":"Enable apply_patch","tools.exec.applyPatch.allowModels":"apply_patch Model Allowlist","tools.exec.notifyOnExit":"Exec Notify On Exit","tools.exec.approvalRunningNoticeMs":"Exec Approval Running Notice (ms)","tools.exec.host":"Exec Host","tools.exec.security":"Exec Security","tools.exec.ask":"Exec Ask","tools.exec.node":"Exec Node Binding","tools.exec.pathPrepend":"Exec PATH Prepend","tools.exec.safeBins":"Exec Safe Bins","tools.message.allowCrossContextSend":"Allow Cross-Context Messaging","tools.message.crossContext.allowWithinProvider":"Allow Cross-Context (Same Provider)","tools.message.crossContext.allowAcrossProviders":"Allow Cross-Context (Across Providers)","tools.message.crossContext.marker.enabled":"Cross-Context Marker","tools.message.crossContext.marker.prefix":"Cross-Context Marker Prefix","tools.message.crossContext.marker.suffix":"Cross-Context Marker Suffix","tools.message.broadcast.enabled":"Enable Message Broadcast","tools.web.search.enabled":"Enable Web Search Tool","tools.web.search.provider":"Web Search Provider","tools.web.search.apiKey":"Brave Search API Key","tools.web.search.maxResults":"Web Search Max Results","tools.web.search.timeoutSeconds":"Web Search Timeout (sec)","tools.web.search.cacheTtlMinutes":"Web Search Cache TTL (min)","tools.web.fetch.enabled":"Enable Web Fetch Tool","tools.web.fetch.maxChars":"Web Fetch Max Chars","tools.web.fetch.timeoutSeconds":"Web Fetch Timeout (sec)","tools.web.fetch.cacheTtlMinutes":"Web Fetch Cache TTL (min)","tools.web.fetch.maxRedirects":"Web Fetch Max Redirects","tools.web.fetch.userAgent":"Web Fetch User-Agent","gateway.controlUi.basePath":"Control UI Base Path","gateway.controlUi.root":"Control UI Assets Root","gateway.controlUi.allowedOrigins":"Control UI Allowed Origins","gateway.controlUi.allowInsecureAuth":"Allow Insecure Control UI Auth","gateway.controlUi.dangerouslyDisableDeviceAuth":"Dangerously Disable Control UI Device Auth","gateway.http.endpoints.chatCompletions.enabled":"OpenAI Chat Completions Endpoint","gateway.reload.mode":"Config Reload Mode","gateway.reload.debounceMs":"Config Reload Debounce (ms)","gateway.nodes.browser.mode":"Gateway Node Browser Mode","gateway.nodes.browser.node":"Gateway Node Browser Pin","gateway.nodes.allowCommands":"Gateway Node Allowlist (Extra Commands)","gateway.nodes.denyCommands":"Gateway Node Denylist","nodeHost.browserProxy.enabled":"Node Browser Proxy Enabled","nodeHost.browserProxy.allowProfiles":"Node Browser Proxy Allowed Profiles","skills.load.watch":"Watch Skills","skills.load.watchDebounceMs":"Skills Watch Debounce (ms)","agents.defaults.workspace":"Workspace","agents.defaults.repoRoot":"Repo Root","agents.defaults.bootstrapMaxChars":"Bootstrap Max Chars","agents.defaults.envelopeTimezone":"Envelope Timezone","agents.defaults.envelopeTimestamp":"Envelope Timestamp","agents.defaults.envelopeElapsed":"Envelope Elapsed","agents.defaults.memorySearch":"Memory Search","agents.defaults.memorySearch.enabled":"Enable Memory Search","agents.defaults.memorySearch.sources":"Memory Search Sources","agents.defaults.memorySearch.extraPaths":"Extra Memory Paths","agents.defaults.memorySearch.experimental.sessionMemory":"Memory Search Session Index (Experimental)","agents.defaults.memorySearch.provider":"Memory Search Provider","agents.defaults.memorySearch.remote.baseUrl":"Remote Embedding Base URL","agents.defaults.memorySearch.remote.apiKey":"Remote Embedding API Key","agents.defaults.memorySearch.remote.headers":"Remote Embedding Headers","agents.defaults.memorySearch.remote.batch.concurrency":"Remote Batch Concurrency","agents.defaults.memorySearch.model":"Memory Search Model","agents.defaults.memorySearch.fallback":"Memory Search Fallback","agents.defaults.memorySearch.local.modelPath":"Local Embedding Model Path","agents.defaults.memorySearch.store.path":"Memory Search Index Path","agents.defaults.memorySearch.store.vector.enabled":"Memory Search Vector Index","agents.defaults.memorySearch.store.vector.extensionPath":"Memory Search Vector Extension Path","agents.defaults.memorySearch.chunking.tokens":"Memory Chunk Tokens","agents.defaults.memorySearch.chunking.overlap":"Memory Chunk Overlap Tokens","agents.defaults.memorySearch.sync.onSessionStart":"Index on Session Start","agents.defaults.memorySearch.sync.onSearch":"Index on Search (Lazy)","agents.defaults.memorySearch.sync.watch":"Watch Memory Files","agents.defaults.memorySearch.sync.watchDebounceMs":"Memory Watch Debounce (ms)","agents.defaults.memorySearch.sync.sessions.deltaBytes":"Session Delta Bytes","agents.defaults.memorySearch.sync.sessions.deltaMessages":"Session Delta Messages","agents.defaults.memorySearch.query.maxResults":"Memory Search Max Results","agents.defaults.memorySearch.query.minScore":"Memory Search Min Score","agents.defaults.memorySearch.query.hybrid.enabled":"Memory Search Hybrid","agents.defaults.memorySearch.query.hybrid.vectorWeight":"Memory Search Vector Weight","agents.defaults.memorySearch.query.hybrid.textWeight":"Memory Search Text Weight","agents.defaults.memorySearch.query.hybrid.candidateMultiplier":"Memory Search Hybrid Candidate Multiplier","agents.defaults.memorySearch.cache.enabled":"Memory Search Embedding Cache","agents.defaults.memorySearch.cache.maxEntries":"Memory Search Embedding Cache Max Entries",memory:"Memory","memory.backend":"Memory Backend","memory.citations":"Memory Citations Mode","memory.qmd.command":"QMD Binary","memory.qmd.includeDefaultMemory":"QMD Include Default Memory","memory.qmd.paths":"QMD Extra Paths","memory.qmd.paths.path":"QMD Path","memory.qmd.paths.pattern":"QMD Path Pattern","memory.qmd.paths.name":"QMD Path Name","memory.qmd.sessions.enabled":"QMD Session Indexing","memory.qmd.sessions.exportDir":"QMD Session Export Directory","memory.qmd.sessions.retentionDays":"QMD Session Retention (days)","memory.qmd.update.interval":"QMD Update Interval","memory.qmd.update.debounceMs":"QMD Update Debounce (ms)","memory.qmd.update.onBoot":"QMD Update on Startup","memory.qmd.update.embedInterval":"QMD Embed Interval","memory.qmd.limits.maxResults":"QMD Max Results","memory.qmd.limits.maxSnippetChars":"QMD Max Snippet Chars","memory.qmd.limits.maxInjectedChars":"QMD Max Injected Chars","memory.qmd.limits.timeoutMs":"QMD Search Timeout (ms)","memory.qmd.scope":"QMD Surface Scope","auth.profiles":"Auth Profiles","auth.order":"Auth Profile Order","auth.cooldowns.billingBackoffHours":"Billing Backoff (hours)","auth.cooldowns.billingBackoffHoursByProvider":"Billing Backoff Overrides","auth.cooldowns.billingMaxHours":"Billing Backoff Cap (hours)","auth.cooldowns.failureWindowHours":"Failover Window (hours)","agents.defaults.models":"Models","agents.defaults.model.primary":"Primary Model","agents.defaults.model.fallbacks":"Model Fallbacks","agents.defaults.imageModel.primary":"Image Model","agents.defaults.imageModel.fallbacks":"Image Model Fallbacks","agents.defaults.humanDelay.mode":"Human Delay Mode","agents.defaults.humanDelay.minMs":"Human Delay Min (ms)","agents.defaults.humanDelay.maxMs":"Human Delay Max (ms)","agents.defaults.cliBackends":"CLI Backends","commands.native":"Native Commands","commands.nativeSkills":"Native Skill Commands","commands.text":"Text Commands","commands.bash":"Allow Bash Chat Command","commands.bashForegroundMs":"Bash Foreground Window (ms)","commands.config":"Allow /config","commands.debug":"Allow /debug","commands.restart":"Allow Restart","commands.useAccessGroups":"Use Access Groups","commands.ownerAllowFrom":"Command Owners","ui.seamColor":"Accent Color","ui.assistant.name":"Assistant Name","ui.assistant.avatar":"Assistant Avatar","browser.evaluateEnabled":"Browser Evaluate Enabled","browser.snapshotDefaults":"Browser Snapshot Defaults","browser.snapshotDefaults.mode":"Browser Snapshot Mode","browser.remoteCdpTimeoutMs":"Remote CDP Timeout (ms)","browser.remoteCdpHandshakeTimeoutMs":"Remote CDP Handshake Timeout (ms)","session.dmScope":"DM Session Scope","session.agentToAgent.maxPingPongTurns":"Agent-to-Agent Ping-Pong Turns","messages.ackReaction":"Ack Reaction Emoji","messages.ackReactionScope":"Ack Reaction Scope","messages.inbound.debounceMs":"Inbound Message Debounce (ms)","talk.apiKey":"Talk API Key","channels.whatsapp":"WhatsApp","channels.telegram":"Telegram","channels.telegram.customCommands":"Telegram Custom Commands","channels.discord":"Discord","channels.slack":"Slack","channels.mattermost":"Mattermost","channels.signal":"Signal","channels.imessage":"iMessage","channels.bluebubbles":"BlueBubbles","channels.msteams":"MS Teams","channels.telegram.botToken":"Telegram Bot Token","channels.telegram.dmPolicy":"Telegram DM Policy","channels.telegram.streamMode":"Telegram Draft Stream Mode","channels.telegram.draftChunk.minChars":"Telegram Draft Chunk Min Chars","channels.telegram.draftChunk.maxChars":"Telegram Draft Chunk Max Chars","channels.telegram.draftChunk.breakPreference":"Telegram Draft Chunk Break Preference","channels.telegram.retry.attempts":"Telegram Retry Attempts","channels.telegram.retry.minDelayMs":"Telegram Retry Min Delay (ms)","channels.telegram.retry.maxDelayMs":"Telegram Retry Max Delay (ms)","channels.telegram.retry.jitter":"Telegram Retry Jitter","channels.telegram.network.autoSelectFamily":"Telegram autoSelectFamily","channels.telegram.timeoutSeconds":"Telegram API Timeout (seconds)","channels.telegram.capabilities.inlineButtons":"Telegram Inline Buttons","channels.whatsapp.dmPolicy":"WhatsApp DM Policy","channels.whatsapp.selfChatMode":"WhatsApp Self-Phone Mode","channels.whatsapp.debounceMs":"WhatsApp Message Debounce (ms)","channels.signal.dmPolicy":"Signal DM Policy","channels.imessage.dmPolicy":"iMessage DM Policy","channels.bluebubbles.dmPolicy":"BlueBubbles DM Policy","channels.discord.dm.policy":"Discord DM Policy","channels.discord.retry.attempts":"Discord Retry Attempts","channels.discord.retry.minDelayMs":"Discord Retry Min Delay (ms)","channels.discord.retry.maxDelayMs":"Discord Retry Max Delay (ms)","channels.discord.retry.jitter":"Discord Retry Jitter","channels.discord.maxLinesPerMessage":"Discord Max Lines Per Message","channels.discord.intents.presence":"Discord Presence Intent","channels.discord.intents.guildMembers":"Discord Guild Members Intent","channels.discord.pluralkit.enabled":"Discord PluralKit Enabled","channels.discord.pluralkit.token":"Discord PluralKit Token","channels.slack.dm.policy":"Slack DM Policy","channels.slack.allowBots":"Slack Allow Bot Messages","channels.discord.token":"Discord Bot Token","channels.slack.botToken":"Slack Bot Token","channels.slack.appToken":"Slack App Token","channels.slack.userToken":"Slack User Token","channels.slack.userTokenReadOnly":"Slack User Token Read Only","channels.slack.thread.historyScope":"Slack Thread History Scope","channels.slack.thread.inheritParent":"Slack Thread Parent Inheritance","channels.mattermost.botToken":"Mattermost Bot Token","channels.mattermost.baseUrl":"Mattermost Base URL","channels.mattermost.chatmode":"Mattermost Chat Mode","channels.mattermost.oncharPrefixes":"Mattermost Onchar Prefixes","channels.mattermost.requireMention":"Mattermost Require Mention","channels.signal.account":"Signal Account","channels.imessage.cliPath":"iMessage CLI Path","agents.list[].skills":"Agent Skill Filter","agents.list[].identity.avatar":"Agent Avatar","discovery.mdns.mode":"mDNS Discovery Mode","plugins.enabled":"Enable Plugins","plugins.allow":"Plugin Allowlist","plugins.deny":"Plugin Denylist","plugins.load.paths":"Plugin Load Paths","plugins.slots":"Plugin Slots","plugins.slots.memory":"Memory Plugin","plugins.entries":"Plugin Entries","plugins.entries.*.enabled":"Plugin Enabled","plugins.entries.*.config":"Plugin Config","plugins.installs":"Plugin Install Records","plugins.installs.*.source":"Plugin Install Source","plugins.installs.*.spec":"Plugin Install Spec","plugins.installs.*.sourcePath":"Plugin Install Source Path","plugins.installs.*.installPath":"Plugin Install Path","plugins.installs.*.version":"Plugin Install Version","plugins.installs.*.installedAt":"Plugin Install Time"},zh:{"meta.lastTouchedVersion":"配置最后触及版本","meta.lastTouchedAt":"配置最后触及时间","update.channel":"更新渠道","update.checkOnStart":"启动时检查更新","diagnostics.enabled":"诊断已启用","diagnostics.flags":"诊断标志","diagnostics.otel.enabled":"OpenTelemetry 已启用","diagnostics.otel.endpoint":"OpenTelemetry 端点","diagnostics.otel.protocol":"OpenTelemetry 协议","diagnostics.otel.headers":"OpenTelemetry 请求头","diagnostics.otel.serviceName":"OpenTelemetry 服务名","diagnostics.otel.traces":"OpenTelemetry 链路已启用","diagnostics.otel.metrics":"OpenTelemetry 指标已启用","diagnostics.otel.logs":"OpenTelemetry 日志已启用","diagnostics.otel.sampleRate":"OpenTelemetry 采样率","diagnostics.otel.flushIntervalMs":"OpenTelemetry 刷新间隔（毫秒）","diagnostics.cacheTrace.enabled":"缓存追踪已启用","diagnostics.cacheTrace.filePath":"缓存追踪文件路径","diagnostics.cacheTrace.includeMessages":"缓存追踪包含消息","diagnostics.cacheTrace.includePrompt":"缓存追踪包含提示","diagnostics.cacheTrace.includeSystem":"缓存追踪包含系统","agents.list.*.identity.avatar":"身份头像","agents.list.*.skills":"代理技能筛选","gateway.remote.url":"远程网关 URL","gateway.remote.sshTarget":"远程网关 SSH 目标","gateway.remote.sshIdentity":"远程网关 SSH 身份","gateway.remote.token":"远程网关令牌","gateway.remote.password":"远程网关密码","gateway.remote.tlsFingerprint":"远程网关 TLS 指纹","gateway.auth.token":"网关令牌","gateway.auth.password":"网关密码","tools.media.image.enabled":"启用图像理解","tools.media.image.maxBytes":"图像理解最大字节","tools.media.image.maxChars":"图像理解最大字符","tools.media.image.prompt":"图像理解提示","tools.media.image.timeoutSeconds":"图像理解超时（秒）","tools.media.image.attachments":"图像理解附件策略","tools.media.image.models":"图像理解模型","tools.media.image.scope":"图像理解范围","tools.media.models":"媒体理解共享模型","tools.media.concurrency":"媒体理解并发数","tools.media.audio.enabled":"启用音频理解","tools.media.audio.maxBytes":"音频理解最大字节","tools.media.audio.maxChars":"音频理解最大字符","tools.media.audio.prompt":"音频理解提示","tools.media.audio.timeoutSeconds":"音频理解超时（秒）","tools.media.audio.language":"音频理解语言","tools.media.audio.attachments":"音频理解附件策略","tools.media.audio.models":"音频理解模型","tools.media.audio.scope":"音频理解范围","tools.media.video.enabled":"启用视频理解","tools.media.video.maxBytes":"视频理解最大字节","tools.media.video.maxChars":"视频理解最大字符","tools.media.video.prompt":"视频理解提示","tools.media.video.timeoutSeconds":"视频理解超时（秒）","tools.media.video.attachments":"视频理解附件策略","tools.media.video.models":"视频理解模型","tools.media.video.scope":"视频理解范围","tools.links.enabled":"启用链接理解","tools.links.maxLinks":"链接理解最大数量","tools.links.timeoutSeconds":"链接理解超时（秒）","tools.links.models":"链接理解模型","tools.links.scope":"链接理解范围","tools.profile":"工具配置集","tools.alsoAllow":"工具允许列表附加","agents.list[].tools.profile":"代理工具配置集","agents.list[].tools.alsoAllow":"代理工具允许列表附加","tools.byProvider":"按提供方的工具策略","agents.list[].tools.byProvider":"代理按提供方的工具策略","tools.exec.applyPatch.enabled":"启用 apply_patch","tools.exec.applyPatch.allowModels":"apply_patch 模型允许列表","tools.exec.notifyOnExit":"Exec 退出时通知","tools.exec.approvalRunningNoticeMs":"Exec 审批运行提示（毫秒）","tools.exec.host":"Exec 主机","tools.exec.security":"Exec 安全","tools.exec.ask":"Exec 询问","tools.exec.node":"Exec 节点绑定","tools.exec.pathPrepend":"Exec PATH 前置","tools.exec.safeBins":"Exec 安全二进制","tools.message.allowCrossContextSend":"允许跨上下文发送","tools.message.crossContext.allowWithinProvider":"允许跨上下文（同提供方）","tools.message.crossContext.allowAcrossProviders":"允许跨上下文（跨提供方）","tools.message.crossContext.marker.enabled":"跨上下文标记","tools.message.crossContext.marker.prefix":"跨上下文标记前缀","tools.message.crossContext.marker.suffix":"跨上下文标记后缀","tools.message.broadcast.enabled":"启用消息广播","tools.web.search.enabled":"启用网页搜索工具","tools.web.search.provider":"网页搜索提供方","tools.web.search.apiKey":"Brave 搜索 API 密钥","tools.web.search.maxResults":"网页搜索最大结果数","tools.web.search.timeoutSeconds":"网页搜索超时（秒）","tools.web.search.cacheTtlMinutes":"网页搜索缓存 TTL（分钟）","tools.web.fetch.enabled":"启用网页抓取工具","tools.web.fetch.maxChars":"网页抓取最大字符","tools.web.fetch.timeoutSeconds":"网页抓取超时（秒）","tools.web.fetch.cacheTtlMinutes":"网页抓取缓存 TTL（分钟）","tools.web.fetch.maxRedirects":"网页抓取最大重定向","tools.web.fetch.userAgent":"网页抓取 User-Agent","gateway.controlUi.basePath":"控制台 UI 基础路径","gateway.controlUi.root":"控制台 UI 资源根目录","gateway.controlUi.allowedOrigins":"控制台 UI 允许来源","gateway.controlUi.allowInsecureAuth":"允许控制台 UI 非安全认证","gateway.controlUi.dangerouslyDisableDeviceAuth":"危险：禁用控制台 UI 设备认证","gateway.http.endpoints.chatCompletions.enabled":"OpenAI 对话补全端点","gateway.reload.mode":"配置重载模式","gateway.reload.debounceMs":"配置重载防抖（毫秒）","gateway.nodes.browser.mode":"网关节点浏览器模式","gateway.nodes.browser.node":"网关节点浏览器固定","gateway.nodes.allowCommands":"网关节点允许列表（额外命令）","gateway.nodes.denyCommands":"网关节点拒绝列表","nodeHost.browserProxy.enabled":"节点浏览器代理已启用","nodeHost.browserProxy.allowProfiles":"节点浏览器代理允许配置集","skills.load.watch":"监听技能","skills.load.watchDebounceMs":"技能监听防抖（毫秒）","agents.defaults.workspace":"工作区","agents.defaults.repoRoot":"仓库根目录","agents.defaults.bootstrapMaxChars":"引导最大字符","agents.defaults.envelopeTimezone":"信封时区","agents.defaults.envelopeTimestamp":"信封时间戳","agents.defaults.envelopeElapsed":"信封耗时","agents.defaults.memorySearch":"记忆搜索","agents.defaults.memorySearch.enabled":"启用记忆搜索","agents.defaults.memorySearch.sources":"记忆搜索来源","agents.defaults.memorySearch.extraPaths":"记忆搜索额外路径","agents.defaults.memorySearch.experimental.sessionMemory":"记忆搜索会话索引（实验）","agents.defaults.memorySearch.provider":"记忆搜索提供方","agents.defaults.memorySearch.remote.baseUrl":"远程嵌入 Base URL","agents.defaults.memorySearch.remote.apiKey":"远程嵌入 API 密钥","agents.defaults.memorySearch.remote.headers":"远程嵌入请求头","agents.defaults.memorySearch.remote.batch.concurrency":"远程批处理并发数","agents.defaults.memorySearch.model":"记忆搜索模型","agents.defaults.memorySearch.fallback":"记忆搜索回退","agents.defaults.memorySearch.local.modelPath":"本地嵌入模型路径","agents.defaults.memorySearch.store.path":"记忆搜索索引路径","agents.defaults.memorySearch.store.vector.enabled":"记忆搜索向量索引","agents.defaults.memorySearch.store.vector.extensionPath":"记忆搜索向量扩展路径","agents.defaults.memorySearch.chunking.tokens":"记忆分块词数","agents.defaults.memorySearch.chunking.overlap":"记忆分块重叠词数","agents.defaults.memorySearch.sync.onSessionStart":"会话开始时建索引","agents.defaults.memorySearch.sync.onSearch":"搜索时建索引（懒加载）","agents.defaults.memorySearch.sync.watch":"监听记忆文件","agents.defaults.memorySearch.sync.watchDebounceMs":"记忆监听防抖（毫秒）","agents.defaults.memorySearch.sync.sessions.deltaBytes":"会话增量字节","agents.defaults.memorySearch.sync.sessions.deltaMessages":"会话增量消息","agents.defaults.memorySearch.query.maxResults":"记忆搜索最大结果数","agents.defaults.memorySearch.query.minScore":"记忆搜索最低分","agents.defaults.memorySearch.query.hybrid.enabled":"记忆搜索混合模式","agents.defaults.memorySearch.query.hybrid.vectorWeight":"记忆搜索向量权重","agents.defaults.memorySearch.query.hybrid.textWeight":"记忆搜索文本权重","agents.defaults.memorySearch.query.hybrid.candidateMultiplier":"记忆搜索混合候选倍数","agents.defaults.memorySearch.cache.enabled":"记忆搜索嵌入缓存","agents.defaults.memorySearch.cache.maxEntries":"记忆搜索嵌入缓存最大条数",memory:"记忆","memory.backend":"记忆后端","memory.citations":"记忆引用模式","memory.qmd.command":"QMD 可执行文件","memory.qmd.includeDefaultMemory":"QMD 包含默认记忆","memory.qmd.paths":"QMD 额外路径","memory.qmd.paths.path":"QMD 路径","memory.qmd.paths.pattern":"QMD 路径模式","memory.qmd.paths.name":"QMD 路径名称","memory.qmd.sessions.enabled":"QMD 会话索引","memory.qmd.sessions.exportDir":"QMD 会话导出目录","memory.qmd.sessions.retentionDays":"QMD 会话保留（天）","memory.qmd.update.interval":"QMD 更新间隔","memory.qmd.update.debounceMs":"QMD 更新防抖（毫秒）","memory.qmd.update.onBoot":"QMD 启动时更新","memory.qmd.update.embedInterval":"QMD 嵌入间隔","memory.qmd.limits.maxResults":"QMD 最大结果数","memory.qmd.limits.maxSnippetChars":"QMD 最大片段字符","memory.qmd.limits.maxInjectedChars":"QMD 最大注入字符","memory.qmd.limits.timeoutMs":"QMD 搜索超时（毫秒）","memory.qmd.scope":"QMD 作用范围","auth.profiles":"认证配置集","auth.order":"认证配置顺序","auth.cooldowns.billingBackoffHours":"计费退避（小时）","auth.cooldowns.billingBackoffHoursByProvider":"计费退避覆盖","auth.cooldowns.billingMaxHours":"计费退避上限（小时）","auth.cooldowns.failureWindowHours":"故障窗口（小时）","agents.defaults.models":"模型","agents.defaults.model.primary":"主模型","agents.defaults.model.fallbacks":"模型回退","agents.defaults.imageModel.primary":"图像模型","agents.defaults.imageModel.fallbacks":"图像模型回退","agents.defaults.humanDelay.mode":"人工延迟模式","agents.defaults.humanDelay.minMs":"人工延迟最小（毫秒）","agents.defaults.humanDelay.maxMs":"人工延迟最大（毫秒）","agents.defaults.cliBackends":"CLI 后端","commands.native":"原生命令","commands.nativeSkills":"原生技能命令","commands.text":"文本命令","commands.bash":"允许 Bash 聊天命令","commands.bashForegroundMs":"Bash 前台窗口（毫秒）","commands.config":"允许 /config","commands.debug":"允许 /debug","commands.restart":"允许重启","commands.useAccessGroups":"使用访问组","commands.ownerAllowFrom":"命令所有者","ui.seamColor":"强调色","ui.assistant.name":"助手名称","ui.assistant.avatar":"助手头像","browser.evaluateEnabled":"浏览器执行已启用","browser.snapshotDefaults":"浏览器快照默认","browser.snapshotDefaults.mode":"浏览器快照模式","browser.remoteCdpTimeoutMs":"远程 CDP 超时（毫秒）","browser.remoteCdpHandshakeTimeoutMs":"远程 CDP 握手超时（毫秒）","session.dmScope":"私信会话范围","session.agentToAgent.maxPingPongTurns":"代理间乒乓轮数","messages.ackReaction":"确认反应表情","messages.ackReactionScope":"确认反应范围","messages.inbound.debounceMs":"入站消息防抖（毫秒）","talk.apiKey":"语音 API 密钥","channels.whatsapp":"WhatsApp","channels.telegram":"Telegram","channels.telegram.customCommands":"Telegram 自定义命令","channels.discord":"Discord","channels.slack":"Slack","channels.mattermost":"Mattermost","channels.signal":"Signal","channels.imessage":"iMessage","channels.bluebubbles":"BlueBubbles","channels.msteams":"MS Teams","channels.telegram.botToken":"Telegram 机器人令牌","channels.telegram.dmPolicy":"Telegram 私信策略","channels.telegram.streamMode":"Telegram 草稿流模式","channels.telegram.draftChunk.minChars":"Telegram 草稿块最小字符","channels.telegram.draftChunk.maxChars":"Telegram 草稿块最大字符","channels.telegram.draftChunk.breakPreference":"Telegram 草稿块断行偏好","channels.telegram.retry.attempts":"Telegram 重试次数","channels.telegram.retry.minDelayMs":"Telegram 重试最小延迟（毫秒）","channels.telegram.retry.maxDelayMs":"Telegram 重试最大延迟（毫秒）","channels.telegram.retry.jitter":"Telegram 重试抖动","channels.telegram.network.autoSelectFamily":"Telegram autoSelectFamily","channels.telegram.timeoutSeconds":"Telegram API 超时（秒）","channels.telegram.capabilities.inlineButtons":"Telegram 内联按钮","channels.whatsapp.dmPolicy":"WhatsApp 私信策略","channels.whatsapp.selfChatMode":"WhatsApp 自聊模式","channels.whatsapp.debounceMs":"WhatsApp 消息防抖（毫秒）","channels.signal.dmPolicy":"Signal 私信策略","channels.imessage.dmPolicy":"iMessage 私信策略","channels.bluebubbles.dmPolicy":"BlueBubbles 私信策略","channels.discord.dm.policy":"Discord 私信策略","channels.discord.retry.attempts":"Discord 重试次数","channels.discord.retry.minDelayMs":"Discord 重试最小延迟（毫秒）","channels.discord.retry.maxDelayMs":"Discord 重试最大延迟（毫秒）","channels.discord.retry.jitter":"Discord 重试抖动","channels.discord.maxLinesPerMessage":"Discord 每消息最大行数","channels.discord.intents.presence":"Discord 在线状态意图","channels.discord.intents.guildMembers":"Discord 频道成员意图","channels.discord.pluralkit.enabled":"Discord PluralKit 已启用","channels.discord.pluralkit.token":"Discord PluralKit 令牌","channels.slack.dm.policy":"Slack 私信策略","channels.slack.allowBots":"Slack 允许机器人消息","channels.discord.token":"Discord 机器人令牌","channels.slack.botToken":"Slack 机器人令牌","channels.slack.appToken":"Slack 应用令牌","channels.slack.userToken":"Slack 用户令牌","channels.slack.userTokenReadOnly":"Slack 用户令牌只读","channels.slack.thread.historyScope":"Slack 线程历史范围","channels.slack.thread.inheritParent":"Slack 线程继承父级","channels.mattermost.botToken":"Mattermost 机器人令牌","channels.mattermost.baseUrl":"Mattermost Base URL","channels.mattermost.chatmode":"Mattermost 聊天模式","channels.mattermost.oncharPrefixes":"Mattermost 触发前缀","channels.mattermost.requireMention":"Mattermost 需要 @ 提及","channels.signal.account":"Signal 账号","channels.imessage.cliPath":"iMessage CLI 路径","agents.list[].skills":"代理技能筛选","agents.list[].identity.avatar":"代理头像","discovery.mdns.mode":"mDNS 发现模式","plugins.enabled":"启用插件","plugins.allow":"插件允许列表","plugins.deny":"插件拒绝列表","plugins.load.paths":"插件加载路径","plugins.slots":"插件槽位","plugins.slots.memory":"记忆插件","plugins.entries":"插件条目","plugins.entries.*.enabled":"插件已启用","plugins.entries.*.config":"插件配置","plugins.installs":"插件安装记录","plugins.installs.*.source":"插件安装来源","plugins.installs.*.spec":"插件安装规格","plugins.installs.*.sourcePath":"插件安装源路径","plugins.installs.*.installPath":"插件安装路径","plugins.installs.*.version":"插件安装版本","plugins.installs.*.installedAt":"插件安装时间"}};function Ze(e,t){const n=Qa(),s=nv[n];for(const a of tv(e)){const o=s[a];if(o)return o}return t}const sv=new Set(["title","description","default","nullable"]);function av(e){return Object.keys(e??{}).filter(n=>!sv.has(n)).length===0}function Oa(e){if(e===void 0)return"";try{return JSON.stringify(e,null,2)??""}catch{return""}}const En={chevronDown:r`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,plus:r`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  `,minus:r`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  `,trash:r`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    </svg>
  `,edit:r`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  `};function at(e){const{schema:t,value:n,path:s,hints:a,unsupported:o,disabled:l,onPatch:c}=e,u=e.showLabel??!0,f=Je(t),p=Se(s,a),g=Ze(s,p?.label??t.title??Be(String(s.at(-1)))),$=Ye(s,p?.help??t.description??""),k=Gt(s);if(o.has(k))return r`<div class="cfg-field cfg-field--error">
      <div class="cfg-field__label">${g}</div>
      <div class="cfg-field__error">${i("configUnsupportedSchemaNode")}</div>
    </div>`;if(t.anyOf||t.oneOf){const d=(t.anyOf??t.oneOf??[]).filter(E=>!(E.type==="null"||Array.isArray(E.type)&&E.type.includes("null")));if(d.length===1)return at({...e,schema:d[0]});const m=E=>{if(E.const!==void 0)return E.const;if(E.enum&&E.enum.length===1)return E.enum[0]},h=d.map(m),v=h.every(E=>E!==void 0);if(v&&h.length>0&&h.length<=5){const E=n??t.default;return r`
        <div class="cfg-field">
          ${u?r`<label class="cfg-field__label">${g}</label>`:y}
          ${$?r`<div class="cfg-field__help">${$}</div>`:y}
          <div class="cfg-segmented">
            ${h.map(T=>r`
              <button
                type="button"
                class="cfg-segmented__btn ${T===E||String(T)===String(E)?"active":""}"
                ?disabled=${l}
                @click=${()=>c(s,T)}
              >
                ${String(T)}
              </button>
            `)}
          </div>
        </div>
      `}if(v&&h.length>5)return ml({...e,options:h,value:n??t.default});const C=new Set(d.map(E=>Je(E)).filter(Boolean)),A=new Set([...C].map(E=>E==="integer"?"number":E));if([...A].every(E=>["string","number","boolean"].includes(E))){const E=A.has("string"),T=A.has("number");if(A.has("boolean")&&A.size===1)return at({...e,schema:{...t,type:"boolean",anyOf:void 0,oneOf:void 0}});if(E||T)return gl({...e,inputType:T&&!E?"number":"text"})}}if(t.enum){const S=t.enum;if(S.length<=5){const d=n??t.default;return r`
        <div class="cfg-field">
          ${u?r`<label class="cfg-field__label">${g}</label>`:y}
          ${$?r`<div class="cfg-field__help">${$}</div>`:y}
          <div class="cfg-segmented">
            ${S.map(m=>r`
              <button
                type="button"
                class="cfg-segmented__btn ${m===d||String(m)===String(d)?"active":""}"
                ?disabled=${l}
                @click=${()=>c(s,m)}
              >
                ${String(m)}
              </button>
            `)}
          </div>
        </div>
      `}return ml({...e,options:S,value:n??t.default})}if(f==="object")return lv(e);if(f==="array")return rv(e);if(f==="boolean"){const S=typeof n=="boolean"?n:typeof t.default=="boolean"?t.default:!1;return r`
      <label class="cfg-toggle-row ${l?"disabled":""}">
        <div class="cfg-toggle-row__content">
          <span class="cfg-toggle-row__label">${g}</span>
          ${$?r`<span class="cfg-toggle-row__help">${$}</span>`:y}
        </div>
        <div class="cfg-toggle">
          <input
            type="checkbox"
            .checked=${S}
            ?disabled=${l}
            @change=${d=>c(s,d.target.checked)}
          />
          <span class="cfg-toggle__track"></span>
        </div>
      </label>
    `}return f==="number"||f==="integer"?iv(e):f==="string"?gl({...e,inputType:"text"}):r`
    <div class="cfg-field cfg-field--error">
      <div class="cfg-field__label">${g}</div>
      <div class="cfg-field__error">Unsupported type: ${f}. Use Raw mode.</div>
    </div>
  `}function gl(e){const{schema:t,value:n,path:s,hints:a,disabled:o,onPatch:l,inputType:c}=e,u=e.showLabel??!0,f=Se(s,a),p=Ze(s,f?.label??t.title??Be(String(s.at(-1)))),g=Ye(s,f?.help??t.description??""),$=f?.sensitive??Zh(s),k=f?.placeholder??($?"••••":t.default!==void 0?`Default: ${String(t.default)}`:""),S=n??"";return r`
    <div class="cfg-field">
      ${u?r`<label class="cfg-field__label">${p}</label>`:y}
      ${g?r`<div class="cfg-field__help">${g}</div>`:y}
      <div class="cfg-input-wrap">
        <input
          type=${$?"password":c}
          class="cfg-input"
          placeholder=${k}
          .value=${S==null?"":String(S)}
          ?disabled=${o}
          @input=${d=>{const m=d.target.value;if(c==="number"){if(m.trim()===""){l(s,void 0);return}const h=Number(m);l(s,Number.isNaN(h)?m:h);return}l(s,m)}}
          @change=${d=>{if(c==="number")return;const m=d.target.value;l(s,m.trim())}}
        />
        ${t.default!==void 0?r`
          <button
            type="button"
            class="cfg-input__reset"
            title="Reset to default"
            ?disabled=${o}
            @click=${()=>l(s,t.default)}
          >↺</button>
        `:y}
      </div>
    </div>
  `}function ov(e){const{schema:t,value:n,path:s,hints:a,disabled:o,onPatch:l}=e,c=e.showLabel??!0,u=Se(s,a),f=Ze(s,u?.label??t.title??Be(String(s.at(-1)))),p=Ye(s,u?.help??t.description??""),g=n??t.default;let $;if(typeof g=="string")try{$=JSON.stringify(JSON.parse(g),null,2)}catch{$=g}else $=Oa(g);return r`
    <div class="cfg-field">
      ${c?r`<label class="cfg-field__label">${f}</label>`:y}
      ${p?r`<div class="cfg-field__help">${p}</div>`:y}
      <div class="cfg-input-wrap cfg-input-wrap--textarea">
        <textarea
          class="cfg-textarea cfg-textarea--json"
          rows="6"
          placeholder="{}"
          .value=${$}
          ?disabled=${o}
          @input=${k=>{const S=k.target.value;if(S.trim()===""){l(s,void 0);return}try{l(s,JSON.parse(S))}catch{}}}
          @change=${k=>{const S=k.target.value.trim();if(!S){l(s,void 0);return}try{l(s,JSON.parse(S))}catch{const d=k.target;d.value=Oa(n??t.default)}}}
        ></textarea>
        ${t.default!==void 0?r`
          <button
            type="button"
            class="cfg-input__reset"
            title="Reset to default"
            ?disabled=${o}
            @click=${()=>l(s,t.default)}
          >↺</button>
        `:y}
      </div>
    </div>
  `}function iv(e){const{schema:t,value:n,path:s,hints:a,disabled:o,onPatch:l}=e,c=e.showLabel??!0,u=Se(s,a),f=Ze(s,u?.label??t.title??Be(String(s.at(-1)))),p=Ye(s,u?.help??t.description??""),g=n??t.default??"",$=typeof g=="number"?g:0;return r`
    <div class="cfg-field">
      ${c?r`<label class="cfg-field__label">${f}</label>`:y}
      ${p?r`<div class="cfg-field__help">${p}</div>`:y}
      <div class="cfg-number">
        <button
          type="button"
          class="cfg-number__btn"
          ?disabled=${o}
          @click=${()=>l(s,$-1)}
        >−</button>
        <input
          type="number"
          class="cfg-number__input"
          .value=${g==null?"":String(g)}
          ?disabled=${o}
          @input=${k=>{const S=k.target.value,d=S===""?void 0:Number(S);l(s,d)}}
        />
        <button
          type="button"
          class="cfg-number__btn"
          ?disabled=${o}
          @click=${()=>l(s,$+1)}
        >+</button>
      </div>
    </div>
  `}function ml(e){const{schema:t,value:n,path:s,hints:a,disabled:o,options:l,onPatch:c}=e,u=e.showLabel??!0,f=Se(s,a),p=Ze(s,f?.label??t.title??Be(String(s.at(-1)))),g=Ye(s,f?.help??t.description??""),$=n??t.default,k=l.findIndex(d=>d===$||String(d)===String($)),S="__unset__";return r`
    <div class="cfg-field">
      ${u?r`<label class="cfg-field__label">${p}</label>`:y}
      ${g?r`<div class="cfg-field__help">${g}</div>`:y}
      <select
        class="cfg-select"
        ?disabled=${o}
        .value=${k>=0?String(k):S}
        @change=${d=>{const m=d.target.value;c(s,m===S?void 0:l[Number(m)])}}
      >
        <option value=${S}>Select...</option>
        ${l.map((d,m)=>r`
          <option value=${String(m)}>${String(d)}</option>
        `)}
      </select>
    </div>
  `}function lv(e){const{schema:t,value:n,path:s,hints:a,unsupported:o,disabled:l,onPatch:c}=e,u=t.properties??{};if(Object.keys(u).length===0&&t.additionalProperties===!0)return ov({schema:{...t,format:"json"},value:n,path:s,hints:a,disabled:l,showLabel:e.showLabel,onPatch:c});const p=Se(s,a),g=Ze(s,p?.label??t.title??Be(String(s.at(-1)))),$=Ye(s,p?.help??t.description??""),k=n??t.default,S=k&&typeof k=="object"&&!Array.isArray(k)?k:{},m=Object.entries(u).toSorted((A,E)=>{const T=Se([...s,A[0]],a)?.order??0,P=Se([...s,E[0]],a)?.order??0;return T!==P?T-P:A[0].localeCompare(E[0])}),h=new Set(Object.keys(u)),v=t.additionalProperties,C=!!v&&typeof v=="object";return s.length===1?r`
      <div class="cfg-fields">
        ${m.map(([A,E])=>at({schema:E,value:S[A],path:[...s,A],hints:a,unsupported:o,disabled:l,onPatch:c}))}
        ${C?fl({schema:v,value:S,path:s,hints:a,unsupported:o,disabled:l,reservedKeys:h,onPatch:c}):y}
      </div>
    `:r`
    <details class="cfg-object" open>
      <summary class="cfg-object__header">
        <span class="cfg-object__title">${g}</span>
        <span class="cfg-object__chevron">${En.chevronDown}</span>
      </summary>
      ${$?r`<div class="cfg-object__help">${$}</div>`:y}
      <div class="cfg-object__content">
        ${m.map(([A,E])=>at({schema:E,value:S[A],path:[...s,A],hints:a,unsupported:o,disabled:l,onPatch:c}))}
        ${C?fl({schema:v,value:S,path:s,hints:a,unsupported:o,disabled:l,reservedKeys:h,onPatch:c}):y}
      </div>
    </details>
  `}function rv(e){const{schema:t,value:n,path:s,hints:a,unsupported:o,disabled:l,onPatch:c}=e,u=e.showLabel??!0,f=Se(s,a),p=Ze(s,f?.label??t.title??Be(String(s.at(-1)))),g=Ye(s,f?.help??t.description??""),$=Array.isArray(t.items)?t.items[0]:t.items;if(!$)return r`
      <div class="cfg-field cfg-field--error">
        <div class="cfg-field__label">${p}</div>
        <div class="cfg-field__error">Unsupported array schema. Use Raw mode.</div>
      </div>
    `;const k=Array.isArray(n)?n:Array.isArray(t.default)?t.default:[];return r`
    <div class="cfg-array">
      <div class="cfg-array__header">
        ${u?r`<span class="cfg-array__label">${p}</span>`:y}
        <span class="cfg-array__count">${k.length} item${k.length!==1?"s":""}</span>
        <button
          type="button"
          class="cfg-array__add"
          ?disabled=${l}
          @click=${()=>{const S=[...k,Ec($)];c(s,S)}}
        >
          <span class="cfg-array__add-icon">${En.plus}</span>
          Add
        </button>
      </div>
      ${g?r`<div class="cfg-array__help">${g}</div>`:y}

      ${k.length===0?r`
              <div class="cfg-array__empty">No items yet. Click "Add" to create one.</div>
            `:r`
        <div class="cfg-array__items">
          ${k.map((S,d)=>r`
            <div class="cfg-array__item">
              <div class="cfg-array__item-header">
                <span class="cfg-array__item-index">#${d+1}</span>
                <button
                  type="button"
                  class="cfg-array__item-remove"
                  title="Remove item"
                  ?disabled=${l}
                  @click=${()=>{const m=[...k];m.splice(d,1),c(s,m)}}
                >
                  ${En.trash}
                </button>
              </div>
              <div class="cfg-array__item-content">
                ${at({schema:$,value:S,path:[...s,d],hints:a,unsupported:o,disabled:l,showLabel:!1,onPatch:c})}
              </div>
            </div>
          `)}
        </div>
      `}
    </div>
  `}function fl(e){const{schema:t,value:n,path:s,hints:a,unsupported:o,disabled:l,reservedKeys:c,onPatch:u}=e,f=av(t),p=Object.entries(n??{}).filter(([g])=>!c.has(g));return r`
    <div class="cfg-map">
      <div class="cfg-map__header">
        <span class="cfg-map__label">Custom entries</span>
        <button
          type="button"
          class="cfg-map__add"
          ?disabled=${l}
          @click=${()=>{const g={...n};let $=1,k=`custom-${$}`;for(;k in g;)$+=1,k=`custom-${$}`;g[k]=f?{}:Ec(t),u(s,g)}}
        >
          <span class="cfg-map__add-icon">${En.plus}</span>
          Add Entry
        </button>
      </div>

      ${p.length===0?r`
              <div class="cfg-map__empty">No custom entries.</div>
            `:r`
        <div class="cfg-map__items">
          ${p.map(([g,$])=>{const k=[...s,g],S=Oa($);return r`
              <div class="cfg-map__item">
                <div class="cfg-map__item-key">
                  <input
                    type="text"
                    class="cfg-input cfg-input--sm"
                    placeholder="Key"
                    .value=${g}
                    ?disabled=${l}
                    @change=${d=>{const m=d.target.value.trim();if(!m||m===g)return;const h={...n};m in h||(h[m]=h[g],delete h[g],u(s,h))}}
                  />
                </div>
                <div class="cfg-map__item-value">
                  ${f?r`
                        <textarea
                          class="cfg-textarea cfg-textarea--sm"
                          placeholder="JSON value"
                          rows="2"
                          .value=${S}
                          ?disabled=${l}
                          @change=${d=>{const m=d.target,h=m.value.trim();if(!h){u(k,void 0);return}try{u(k,JSON.parse(h))}catch{m.value=S}}}
                        ></textarea>
                      `:at({schema:t,value:$,path:k,hints:a,unsupported:o,disabled:l,showLabel:!1,onPatch:u})}
                </div>
                <button
                  type="button"
                  class="cfg-map__item-remove"
                  title="Remove entry"
                  ?disabled=${l}
                  @click=${()=>{const d={...n};delete d[g],u(s,d)}}
                >
                  ${En.trash}
                </button>
              </div>
            `})}
        </div>
      `}
    </div>
  `}const hl={env:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="3"></circle>
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      ></path>
    </svg>
  `,update:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  `,agents:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"
      ></path>
      <circle cx="8" cy="14" r="1"></circle>
      <circle cx="16" cy="14" r="1"></circle>
    </svg>
  `,auth:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  `,channels:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  `,messages:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  `,commands:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  `,hooks:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  `,skills:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      ></polygon>
    </svg>
  `,tools:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    </svg>
  `,gateway:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,wizard:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M15 4V2"></path>
      <path d="M15 16v-2"></path>
      <path d="M8 9h2"></path>
      <path d="M20 9h2"></path>
      <path d="M17.8 11.8 19 13"></path>
      <path d="M15 9h0"></path>
      <path d="M17.8 6.2 19 5"></path>
      <path d="m3 21 9-9"></path>
      <path d="M12.2 6.2 11 5"></path>
    </svg>
  `,meta:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    </svg>
  `,logging:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  `,browser:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="21.17" y1="8" x2="12" y2="8"></line>
      <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
      <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
    </svg>
  `,ui:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  `,models:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      ></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  `,bindings:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  `,broadcast:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
    </svg>
  `,audio:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  `,session:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `,cron:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  `,web:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,discovery:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  `,canvasHost:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  `,talk:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,plugins:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 2v6"></path>
      <path d="m4.93 10.93 4.24 4.24"></path>
      <path d="M2 12h6"></path>
      <path d="m4.93 13.07 4.24-4.24"></path>
      <path d="M12 22v-6"></path>
      <path d="m19.07 13.07-4.24-4.24"></path>
      <path d="M22 12h-6"></path>
      <path d="m19.07 10.93-4.24 4.24"></path>
    </svg>
  `,default:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  `};function vl(e){return hl[e]??hl.default}function cv(e,t,n){if(!n)return!0;const s=n.toLowerCase(),a=Va(e);return e.toLowerCase().includes(s)||a&&(a.label.toLowerCase().includes(s)||a.description.toLowerCase().includes(s))?!0:gn(t,s)}function gn(e,t){if(e.title?.toLowerCase().includes(t)||e.description?.toLowerCase().includes(t)||e.enum?.some(s=>String(s).toLowerCase().includes(t)))return!0;if(e.properties){for(const[s,a]of Object.entries(e.properties))if(s.toLowerCase().includes(t)||gn(a,t))return!0}if(e.items){const s=Array.isArray(e.items)?e.items:[e.items];for(const a of s)if(a&&gn(a,t))return!0}if(e.additionalProperties&&typeof e.additionalProperties=="object"&&gn(e.additionalProperties,t))return!0;const n=e.anyOf??e.oneOf??e.allOf;if(n){for(const s of n)if(s&&gn(s,t))return!0}return!1}function dv(e){if(!e.schema)return r`
      <div class="muted">${i("configSchemaUnavailable")}</div>
    `;const t=e.schema,n=e.value??{};if(Je(t)!=="object"||!t.properties)return r`
      <div class="callout danger">${i("configUnsupportedSchema")}</div>
    `;const s=new Set(e.unsupportedPaths??[]),a=t.properties,o=e.searchQuery??"",l=e.activeSection,c=e.activeSubsection??null,f=Object.entries(a).toSorted((g,$)=>{const k=Se([g[0]],e.uiHints)?.order??50,S=Se([$[0]],e.uiHints)?.order??50;return k!==S?k-S:g[0].localeCompare($[0])}).filter(([g,$])=>!(l&&g!==l||o&&!cv(g,$,o)));let p=null;if(l&&c&&f.length===1){const g=f[0]?.[1];g&&Je(g)==="object"&&g.properties&&g.properties[c]&&(p={sectionKey:l,subsectionKey:c,schema:g.properties[c]})}return f.length===0?r`
      <div class="config-empty">
        <div class="config-empty__icon">${ne.search}</div>
        <div class="config-empty__text">
          ${o?`${i("configNoSettingsMatchPrefix")}${o}${i("configNoSettingsMatchSuffix")}`:i("configNoSettingsInSection")}
        </div>
      </div>
    `:r`
    <div class="config-form config-form--modern">
      ${p?(()=>{const{sectionKey:g,subsectionKey:$,schema:k}=p,S=Se([g,$],e.uiHints),d=Ze([g,$],S?.label??k.title??Be($)),m=Ye([g,$],S?.help??k.description??""),h=n[g],v=h&&typeof h=="object"?h[$]:void 0,C=`config-section-${g}-${$}`;return r`
              <section class="config-section-card" id=${C}>
                <div class="config-section-card__header">
                  <span class="config-section-card__icon">${vl(g)}</span>
                  <div class="config-section-card__titles">
                    <h3 class="config-section-card__title">${d}</h3>
                    ${m?r`<p class="config-section-card__desc">${m}</p>`:y}
                  </div>
                </div>
                <div class="config-section-card__content">
                  ${at({schema:k,value:v,path:[g,$],hints:e.uiHints,unsupported:s,disabled:e.disabled??!1,showLabel:!1,onPatch:e.onPatch})}
                </div>
              </section>
            `})():f.map(([g,$])=>{const k=Va(g),S=k.label||k.description?k:{label:g.charAt(0).toUpperCase()+g.slice(1),description:$.description??""};return r`
              <section class="config-section-card" id="config-section-${g}">
                <div class="config-section-card__header">
                  <span class="config-section-card__icon">${vl(g)}</span>
                  <div class="config-section-card__titles">
                    <h3 class="config-section-card__title">${S.label}</h3>
                    ${S.description?r`<p class="config-section-card__desc">${S.description}</p>`:y}
                  </div>
                </div>
                <div class="config-section-card__content">
                  ${at({schema:$,value:n[g],path:[g],hints:e.uiHints,unsupported:s,disabled:e.disabled??!1,showLabel:!1,onPatch:e.onPatch})}
                </div>
              </section>
            `})}
    </div>
  `}const uv=new Set(["title","description","default","nullable"]);function pv(e){return Object.keys(e??{}).filter(n=>!uv.has(n)).length===0}function Tc(e){const t=e.filter(a=>a!=null),n=t.length!==e.length,s=[];for(const a of t)s.some(o=>Object.is(o,a))||s.push(a);return{enumValues:s,nullable:n}}function gv(e){return!e||typeof e!="object"?{schema:null,unsupportedPaths:["<root>"]}:bn(e,[])}function bn(e,t){const n=new Set,s={...e},a=Gt(t)||"<root>";if(e.anyOf||e.oneOf||e.allOf){const c=mv(e,t);return c||{schema:e,unsupportedPaths:[a]}}const o=Array.isArray(e.type)&&e.type.includes("null"),l=Je(e)??(e.properties||e.additionalProperties?"object":void 0);if(s.type=l??e.type,s.nullable=o||e.nullable,s.enum){const{enumValues:c,nullable:u}=Tc(s.enum);s.enum=c,u&&(s.nullable=!0),c.length===0&&n.add(a)}if(l==="object"){const c=e.properties??{},u={};for(const[p,g]of Object.entries(c)){const $=bn(g,[...t,p]);$.schema&&(u[p]=$.schema);for(const k of $.unsupportedPaths)n.add(k)}s.properties=u;const f=Object.keys(c).length===0;if(e.additionalProperties===!0)f||n.add(a);else if(e.additionalProperties===!1)s.additionalProperties=!1;else if(e.additionalProperties&&typeof e.additionalProperties=="object"&&!pv(e.additionalProperties)){const p=bn(e.additionalProperties,[...t,"*"]);s.additionalProperties=p.schema??e.additionalProperties,p.unsupportedPaths.length>0&&n.add(a)}}else if(l==="array"){const c=Array.isArray(e.items)?e.items[0]:e.items;if(!c)n.add(a);else{const u=bn(c,[...t,"*"]);s.items=u.schema??c,u.unsupportedPaths.length>0&&n.add(a)}}else l!=="string"&&l!=="number"&&l!=="integer"&&l!=="boolean"&&!s.enum&&n.add(a);return{schema:s,unsupportedPaths:Array.from(n)}}function mv(e,t){if(e.allOf)return null;const n=e.anyOf??e.oneOf;if(!n)return null;const s=[],a=[];let o=!1;for(const c of n){if(!c||typeof c!="object")return null;if(Array.isArray(c.enum)){const{enumValues:u,nullable:f}=Tc(c.enum);s.push(...u),f&&(o=!0);continue}if("const"in c){if(c.const==null){o=!0;continue}s.push(c.const);continue}if(Je(c)==="null"){o=!0;continue}a.push(c)}if(s.length>0&&a.length===0){const c=[];for(const u of s)c.some(f=>Object.is(f,u))||c.push(u);return{schema:{...e,enum:c,nullable:o,anyOf:void 0,oneOf:void 0,allOf:void 0},unsupportedPaths:[]}}if(a.length===1){const c=bn(a[0],t);return c.schema&&(c.schema.nullable=o||c.schema.nullable),c}const l=new Set(["string","number","integer","boolean"]);return a.length>0&&s.length===0&&a.every(c=>c.type&&l.has(String(c.type)))?{schema:{...e,nullable:o},unsupportedPaths:[]}:null}const Fa={all:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
  `,env:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="3"></circle>
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      ></path>
    </svg>
  `,update:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  `,agents:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"
      ></path>
      <circle cx="8" cy="14" r="1"></circle>
      <circle cx="16" cy="14" r="1"></circle>
    </svg>
  `,auth:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  `,channels:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  `,messages:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  `,commands:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  `,hooks:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  `,skills:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      ></polygon>
    </svg>
  `,tools:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    </svg>
  `,gateway:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,wizard:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M15 4V2"></path>
      <path d="M15 16v-2"></path>
      <path d="M8 9h2"></path>
      <path d="M20 9h2"></path>
      <path d="M17.8 11.8 19 13"></path>
      <path d="M15 9h0"></path>
      <path d="M17.8 6.2 19 5"></path>
      <path d="m3 21 9-9"></path>
      <path d="M12.2 6.2 11 5"></path>
    </svg>
  `,meta:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    </svg>
  `,logging:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  `,browser:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="21.17" y1="8" x2="12" y2="8"></line>
      <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
      <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
    </svg>
  `,ui:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  `,models:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      ></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  `,bindings:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  `,broadcast:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
    </svg>
  `,audio:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  `,session:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `,cron:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  `,web:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,discovery:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  `,canvasHost:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  `,talk:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,plugins:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2v6"></path>
      <path d="m4.93 10.93 4.24 4.24"></path>
      <path d="M2 12h6"></path>
      <path d="m4.93 13.07 4.24-4.24"></path>
      <path d="M12 22v-6"></path>
      <path d="m19.07 13.07-4.24-4.24"></path>
      <path d="M22 12h-6"></path>
      <path d="m19.07 10.93-4.24 4.24"></path>
    </svg>
  `,default:r`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  `};function yl(){return[{key:"env",label:i("configEnv")},{key:"update",label:i("configUpdate")},{key:"agents",label:i("configAgents")},{key:"auth",label:i("configAuth")},{key:"channels",label:i("configChannels")},{key:"messages",label:i("configMessages")},{key:"commands",label:i("configCommands")},{key:"hooks",label:i("configHooks")},{key:"skills",label:i("configSkills")},{key:"tools",label:i("configTools")},{key:"gateway",label:i("configGateway")},{key:"wizard",label:i("configWizard")},{key:"meta",label:i("configMeta")},{key:"logging",label:i("configLogging")},{key:"browser",label:i("configBrowser")},{key:"ui",label:i("configUi")},{key:"models",label:i("configModels")},{key:"bindings",label:i("configBindings")},{key:"broadcast",label:i("configBroadcast")},{key:"audio",label:i("configAudio")},{key:"session",label:i("configSession")},{key:"cron",label:i("configCron")},{key:"web",label:i("configWeb")},{key:"discovery",label:i("configDiscovery")},{key:"canvasHost",label:i("configCanvasHost")},{key:"talk",label:i("configTalk")},{key:"plugins",label:i("configPlugins")}]}const bl="__all__";function wl(e){return Fa[e]??Fa.default}function fv(e,t){const n=Va(e);return n||{label:t?.title??Be(e),description:t?.description??""}}function hv(e){const{key:t,schema:n,uiHints:s}=e;if(!n||Je(n)!=="object"||!n.properties)return[];const a=Object.entries(n.properties).map(([o,l])=>{const c=Se([t,o],s),u=Ze([t,o],c?.label??l.title??Be(o)),f=Ye([t,o],c?.help??l.description??""),p=c?.order??50;return{key:o,label:u,description:f,order:p}});return a.sort((o,l)=>o.order!==l.order?o.order-l.order:o.key.localeCompare(l.key)),a}function vv(e,t){if(!e||!t)return[];const n=[];function s(a,o,l){if(a===o)return;if(typeof a!=typeof o){n.push({path:l,from:a,to:o});return}if(typeof a!="object"||a===null||o===null){a!==o&&n.push({path:l,from:a,to:o});return}if(Array.isArray(a)&&Array.isArray(o)){JSON.stringify(a)!==JSON.stringify(o)&&n.push({path:l,from:a,to:o});return}const c=a,u=o,f=new Set([...Object.keys(c),...Object.keys(u)]);for(const p of f)s(c[p],u[p],l?`${l}.${p}`:p)}return s(e,t,""),n}function xl(e,t=40){let n;try{n=JSON.stringify(e)??String(e)}catch{n=String(e)}return n.length<=t?n:n.slice(0,t-3)+"..."}function yv(e){const t=e.valid==null?"unknown":e.valid?"valid":"invalid",n=gv(e.schema),s=n.schema?n.unsupportedPaths.length>0:!1,a=n.schema?.properties??{},o=yl().filter(T=>T.key in a),l=new Set(yl().map(T=>T.key)),c=Object.keys(a).filter(T=>!l.has(T)).map(T=>({key:T,label:T.charAt(0).toUpperCase()+T.slice(1)})),u=[...o,...c],f=e.activeSection&&n.schema&&Je(n.schema)==="object"?n.schema.properties?.[e.activeSection]:void 0,p=e.activeSection?fv(e.activeSection,f):null,g=e.activeSection?hv({key:e.activeSection,schema:f,uiHints:e.uiHints}):[],$=e.formMode==="form"&&!!e.activeSection&&g.length>0,k=e.activeSubsection===bl,S=e.searchQuery||k?null:e.activeSubsection??g[0]?.key??null,d=e.formMode==="form"?vv(e.originalValue,e.formValue):[],m=e.formMode==="raw"&&e.raw!==e.originalRaw,h=e.formMode==="form"?d.length>0:m,v=!!e.formValue&&!e.loading&&!!n.schema,C=e.connected&&!e.saving&&h&&(e.formMode==="raw"?!0:v),A=e.connected&&!e.applying&&!e.updating&&h&&(e.formMode==="raw"?!0:v),E=e.connected&&!e.applying&&!e.updating;return r`
    <div class="config-layout">
      <!-- Sidebar -->
      <aside class="config-sidebar">
        <div class="config-sidebar__header">
          <div class="config-sidebar__title">${i("configSettingsTitle")}</div>
          <span
            class="pill pill--sm ${t==="valid"?"pill--ok":t==="invalid"?"pill--danger":""}"
            >${i(t==="valid"?"configValidityValid":t==="invalid"?"configValidityInvalid":"configValidityUnknown")}</span
          >
        </div>

        <!-- Search -->
        <div class="config-search">
          <svg
            class="config-search__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
          </svg>
          <input
            type="text"
            class="config-search__input"
            placeholder=${i("configSearchPlaceholder")}
            .value=${e.searchQuery}
            @input=${T=>e.onSearchChange(T.target.value)}
          />
          ${e.searchQuery?r`
                <button
                  class="config-search__clear"
                  @click=${()=>e.onSearchChange("")}
                >
                  ×
                </button>
              `:y}
        </div>

        <!-- Section nav -->
        <nav class="config-nav">
          <button
            class="config-nav__item ${e.activeSection===null?"active":""}"
            @click=${()=>e.onSectionChange(null)}
          >
            <span class="config-nav__icon">${Fa.all}</span>
            <span class="config-nav__label">${i("configAllSettings")}</span>
          </button>
          ${u.map(T=>r`
              <button
                class="config-nav__item ${e.activeSection===T.key?"active":""}"
                @click=${()=>e.onSectionChange(T.key)}
              >
                <span class="config-nav__icon"
                  >${wl(T.key)}</span
                >
                <span class="config-nav__label">${T.label}</span>
              </button>
            `)}
        </nav>
      </aside>

      <!-- Main content -->
      <main class="config-main">
        <!-- Action bar -->
        <div class="config-actions">
          <div class="config-actions__left">
            ${h?r`
                  <span class="config-changes-badge"
                    >${e.formMode==="raw"?i("configUnsavedChanges"):d.length===1?i("configOneUnsavedChange"):`${d.length} ${i("configUnsavedChangesLabel")}`}</span
                  >
                `:r`
                    <span class="config-status muted">${i("configNoChanges")}</span>
                  `}
          </div>
          <div class="config-actions__right">
            <button
              class="btn btn--sm"
              ?disabled=${e.loading}
              @click=${e.onReload}
            >
              ${e.loading?i("commonLoading"):i("commonReload")}
            </button>
            <button
              class="btn btn--sm primary"
              ?disabled=${!C}
              @click=${e.onSave}
            >
              ${e.saving?i("commonSaving"):i("commonSave")}
            </button>
            <button
              class="btn btn--sm"
              ?disabled=${!A}
              @click=${e.onApply}
            >
              ${e.applying?i("configApplying"):i("configApply")}
            </button>
            <button
              class="btn btn--sm"
              ?disabled=${!E}
              @click=${e.onUpdate}
            >
              ${e.updating?i("configUpdating"):i("configUpdateButton")}
            </button>
          </div>
        </div>

        <!-- Diff panel (form mode only - raw mode doesn't have granular diff) -->
        ${h&&e.formMode==="form"?r`
              <details class="config-diff">
                <summary class="config-diff__summary">
                  <span
                    >${i("configViewPrefix")}${d.length}
                    ${d.length===1?i("configPendingChange"):i("configPendingChanges")}</span
                  >
                  <svg
                    class="config-diff__chevron"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <div class="config-diff__content">
                  ${d.map(T=>r`
                      <div class="config-diff__item">
                        <div class="config-diff__path">${T.path}</div>
                        <div class="config-diff__values">
                          <span class="config-diff__from"
                            >${xl(T.from)}</span
                          >
                          <span class="config-diff__arrow">→</span>
                          <span class="config-diff__to"
                            >${xl(T.to)}</span
                          >
                        </div>
                      </div>
                    `)}
                </div>
              </details>
            `:y}
        ${p&&e.formMode==="form"?r`
              <div class="config-section-hero">
                <div class="config-section-hero__icon">
                  ${wl(e.activeSection??"")}
                </div>
                <div class="config-section-hero__text">
                  <div class="config-section-hero__title">
                    ${p.label}
                  </div>
                  ${p.description?r`<div class="config-section-hero__desc">
                        ${p.description}
                      </div>`:y}
                </div>
              </div>
            `:y}
        ${$?r`
              <div class="config-subnav">
                <button
                  class="config-subnav__item ${S===null?"active":""}"
                  @click=${()=>e.onSubsectionChange(bl)}
                >
                  ${i("configSubnavAll")}
                </button>
                ${g.map(T=>r`
                    <button
                      class="config-subnav__item ${S===T.key?"active":""}"
                      title=${T.description||T.label}
                      @click=${()=>e.onSubsectionChange(T.key)}
                    >
                      ${T.label}
                    </button>
                  `)}
              </div>
            `:y}

        <!-- Form content -->
        <div class="config-content">
          ${e.formMode==="form"?r`
                ${e.schemaLoading?r`
                        <div class="config-loading">
                          <div class="config-loading__spinner"></div>
                          <span>${i("configLoadingSchema")}</span>
                        </div>
                      `:dv({schema:n.schema,uiHints:e.uiHints,value:e.formValue,disabled:e.loading||!e.formValue,unsupportedPaths:n.unsupportedPaths,onPatch:e.onFormPatch,searchQuery:e.searchQuery,activeSection:e.activeSection,activeSubsection:S})}
                ${s?r`
                        <div class="callout danger" style="margin-top: 12px">
                          ${i("configFormUnsafeWarning")}
                        </div>
                      `:y}
              `:r`
                <label class="field config-raw-field">
                  <span>${i("configRawJson5")}</span>
                  <textarea
                    .value=${e.raw}
                    @input=${T=>e.onRawChange(T.target.value)}
                  ></textarea>
                </label>
              `}
        </div>

        ${e.issues.length>0?r`<div class="callout danger" style="margin-top: 12px;">
              <pre class="code-block">
${JSON.stringify(e.issues,null,2)}</pre
              >
            </div>`:y}
      </main>
    </div>
  `}function bv(e,t,n,s){const a=Object.entries(e),o=(u,f)=>{const p=Object.keys(e),g=Object.values(e);p[u]=f;const $={};p.forEach((k,S)=>{$[k]=g[S]??""}),n($)},l=(u,f)=>{const p=Object.keys(e),g=[...Object.values(e)];g[u]=f;const $={};p.forEach((k,S)=>{$[k]=g[S]??""}),n($)},c=u=>{const f=Object.keys(e).filter(($,k)=>k!==u),p=Object.values(e).filter(($,k)=>k!==u),g={};f.forEach(($,k)=>{g[$]=p[k]??""}),n(g)};return r`
    ${a.length===0?r`
          <p class="env-vars__empty">${i("envVarsEmpty")}</p>
          <button class="btn btn--secondary" ?disabled=${!t} @click=${s}>
            ${i("envVarsAdd")}
          </button>
        `:r`
          <table class="env-vars__table">
            <thead>
              <tr>
                <th>${i("envVarsKey")}</th>
                <th>${i("envVarsValue")}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              ${a.map(([u,f],p)=>r`
                  <tr>
                    <td>
                      <input
                        class="env-vars__input"
                        type="text"
                        .value=${u}
                        placeholder=${i("envVarsKeyPlaceholder")}
                        ?disabled=${!t}
                        @input=${g=>{const $=g.target;o(p,$.value)}}
                      />
                    </td>
                    <td>
                      <input
                        class="env-vars__input"
                        type="text"
                        .value=${f}
                        placeholder=${i("envVarsValuePlaceholder")}
                        ?disabled=${!t}
                        @input=${g=>{const $=g.target;l(p,$.value)}}
                      />
                    </td>
                    <td>
                      <button
                        class="btn btn--ghost env-vars__delete"
                        ?disabled=${!t}
                        @click=${()=>c(p)}
                        title=${i("envVarsDelete")}
                      >
                        ${i("envVarsDelete")}
                      </button>
                    </td>
                  </tr>
                `)}
            </tbody>
          </table>
          <button class="btn btn--secondary env-vars__add" ?disabled=${!t} @click=${s}>
            ${i("envVarsAdd")}
          </button>
        `}
  `}function wv(e){const{vars:t,dirty:n,loading:s,saving:a,connected:o,onVarsChange:l,onSave:c,onReload:u}=e,f=o&&n&&!a&&!s,p=()=>{l({...t,"":""})};return r`
    <div class="env-vars">
      <div class="env-vars__toolbar">
        <button
          class="btn btn--secondary"
          ?disabled=${s||!o}
          @click=${u}
          title=${i("overviewRefresh")}
        >
          ${s?"…":i("overviewRefresh")}
        </button>
        <button
          class="btn btn--primary"
          ?disabled=${!f}
          @click=${c}
          title=${i("envVarsSave")}
        >
          ${a?"…":i("envVarsSave")}
        </button>
      </div>
      ${n?r`<p class="env-vars__dirty">${i("configUnsavedChanges")}</p>`:y}

      <div class="env-vars__sections">
        <section class="env-vars__section card" style="margin-bottom: 16px;">
          <h3 class="card-title" style="margin-bottom: 8px;">${i("envVarsSection")}</h3>
          <p class="muted" style="font-size: 12px; margin-bottom: 12px;">${i("configEnvVarsDesc")}</p>
          <div class="env-vars__list">
            ${bv(t,o,l,p)}
          </div>
        </section>
      </div>
    </div>
  `}function Pc(e){return e?`${Sn(e)} (${X(e)})`:"n/a"}function xv(e){if(e.totalTokens==null)return"n/a";const t=e.totalTokens??0,n=e.contextTokens??0;return n?`${t} / ${n}`:String(t)}function $v(e){if(e==null)return"";try{return JSON.stringify(e,null,2)}catch{return String(e)}}function kv(e){const t=e.schedule;if(t.kind==="at"){const n=Date.parse(t.at);return Number.isFinite(n)?`At ${Sn(n)}`:`At ${t.at}`}return t.kind==="every"?`Every ${lr(t.everyMs)}`:`Cron ${t.expr}${t.tz?` (${t.tz})`:""}`}function Sv(e){const t=["last",...e.channels.filter(Boolean)],n=e.form.deliveryChannel?.trim();n&&!t.includes(n)&&t.push(n);const s=new Set;return t.filter(a=>s.has(a)?!1:(s.add(a),!0))}function Cv(e,t){if(t==="last")return i("cronLast");const n=e.channelMeta?.find(s=>s.id===t);return n?.label?n.label:e.channelLabels?.[t]??t}function Av(e){const t=Sv(e);return r`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="card-title">${i("cronScheduler")}</div>
        <div class="card-sub">${i("cronSchedulerSub")}</div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">${i("cronEnabled")}</div>
            <div class="stat-value">
              ${e.status?e.status.enabled?i("commonYes"):i("commonNo"):i("commonNA")}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">${i("cronJobs")}</div>
            <div class="stat-value">${e.status?.jobs??i("commonNA")}</div>
          </div>
          <div class="stat">
            <div class="stat-label">${i("overviewCronNext")}</div>
            <div class="stat-value">${Pc(e.status?.nextWakeAtMs??null)}</div>
          </div>
        </div>
        <div class="row" style="margin-top: 12px;">
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?i("commonRefreshing"):i("commonRefresh")}
          </button>
          ${e.error?r`<span class="muted">${e.error}</span>`:y}
        </div>
      </div>

      <div class="card">
        <div class="card-title">${i("cronNewJob")}</div>
        <div class="card-sub">${i("cronNewJobSub")}</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>${i("cronName")}</span>
            <input
              .value=${e.form.name}
              @input=${n=>e.onFormChange({name:n.target.value})}
            />
          </label>
          <label class="field">
            <span>${i("cronDescription")}</span>
            <input
              .value=${e.form.description}
              @input=${n=>e.onFormChange({description:n.target.value})}
            />
          </label>
          <label class="field">
            <span>${i("cronAgentId")}</span>
            <input
              .value=${e.form.agentId}
              @input=${n=>e.onFormChange({agentId:n.target.value})}
              placeholder="default"
            />
          </label>
          <label class="field checkbox">
            <span>${i("cronEnabled")}</span>
            <input
              type="checkbox"
              .checked=${e.form.enabled}
              @change=${n=>e.onFormChange({enabled:n.target.checked})}
            />
          </label>
          <label class="field">
            <span>${i("cronSchedule")}</span>
            <select
              .value=${e.form.scheduleKind}
              @change=${n=>e.onFormChange({scheduleKind:n.target.value})}
            >
              <option value="every">${i("cronEvery")}</option>
              <option value="at">${i("cronAt")}</option>
              <option value="cron">${i("cronCron")}</option>
            </select>
          </label>
        </div>
        ${Ev(e)}
        <div class="form-grid" style="margin-top: 12px;">
          <label class="field">
            <span>${i("cronSession")}</span>
            <select
              .value=${e.form.sessionTarget}
              @change=${n=>e.onFormChange({sessionTarget:n.target.value})}
            >
              <option value="main">${i("cronMain")}</option>
              <option value="isolated">${i("cronIsolated")}</option>
            </select>
          </label>
          <label class="field">
            <span>${i("cronWakeMode")}</span>
            <select
              .value=${e.form.wakeMode}
              @change=${n=>e.onFormChange({wakeMode:n.target.value})}
            >
              <option value="next-heartbeat">${i("cronNextHeartbeat")}</option>
              <option value="now">${i("cronNow")}</option>
            </select>
          </label>
          <label class="field">
            <span>${i("cronPayload")}</span>
            <select
              .value=${e.form.payloadKind}
              @change=${n=>e.onFormChange({payloadKind:n.target.value})}
            >
              <option value="systemEvent">${i("cronSystemEvent")}</option>
              <option value="agentTurn">${i("cronAgentTurn")}</option>
            </select>
          </label>
        </div>
        <label class="field" style="margin-top: 12px;">
          <span>${e.form.payloadKind==="systemEvent"?i("cronSystemText"):i("cronAgentMessage")}${e.form.payloadKind==="agentTurn"?r`<span style="color: var(--danger-color);"> *</span>`:y}</span>
          <textarea
            .value=${e.form.payloadText}
            @input=${n=>e.onFormChange({payloadText:n.target.value})}
            rows="4"
            ?required=${e.form.payloadKind==="agentTurn"}
          ></textarea>
        </label>
        ${e.form.payloadKind==="agentTurn"?r`
                <div class="form-grid" style="margin-top: 12px;">
                  <label class="field">
                    <span>${i("cronDelivery")}</span>
                    <select
                      .value=${e.form.deliveryMode}
                      @change=${n=>e.onFormChange({deliveryMode:n.target.value})}
                    >
                      <option value="announce">${i("cronAnnounceSummary")}</option>
                      <option value="none">${i("cronNoneInternal")}</option>
                    </select>
                  </label>
                  <label class="field">
                    <span>${i("cronTimeoutSeconds")}</span>
                    <input
                      .value=${e.form.timeoutSeconds}
                      @input=${n=>e.onFormChange({timeoutSeconds:n.target.value})}
                    />
                  </label>
                  ${e.form.deliveryMode==="announce"?r`
                          <label class="field">
                            <span>${i("cronChannel")}</span>
                            <select
                              .value=${e.form.deliveryChannel||"last"}
                              @change=${n=>e.onFormChange({deliveryChannel:n.target.value})}
                            >
                              ${t.map(n=>r`<option value=${n}>
                                    ${Cv(e,n)}
                                  </option>`)}
                            </select>
                          </label>
                          <label class="field">
                            <span>${i("cronTo")}</span>
                            <input
                              .value=${e.form.deliveryTo}
                              @input=${n=>e.onFormChange({deliveryTo:n.target.value})}
                              placeholder="+1555… or chat id"
                            />
                          </label>
                        `:y}
                </div>
              `:y}
        <div class="row" style="margin-top: 14px;">
          <button
            class="btn primary"
            ?disabled=${e.busy||e.form.payloadKind==="agentTurn"&&!e.form.payloadText.trim()}
            @click=${e.onAdd}
          >
            ${e.busy?i("commonSaving"):i("cronAddJob")}
          </button>
        </div>
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">${i("cronJobsTitle")}</div>
      <div class="card-sub">${i("cronJobsSub")}</div>
      ${e.jobs.length===0?r`
              <div class="muted" style="margin-top: 12px">${i("cronNoJobsYet")}</div>
            `:r`
            <div class="list" style="margin-top: 12px;">
              ${e.jobs.map(n=>_c(n,e,{mode:"config"}))}
            </div>
          `}
    </section>
  `}function Mv(e){const t=e.runsJobId==null?void 0:e.jobs.find(s=>s.id===e.runsJobId),n=e.runs.toSorted((s,a)=>a.ts-s.ts);return r`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="card-title">${i("cronJobsTitle")}</div>
        <div class="card-sub">${i("cronJobsSub")}</div>
        ${e.jobs.length===0?r`<div class="muted" style="margin-top: 12px">${i("cronNoJobsYet")}</div>`:r`
                <div class="list" style="margin-top: 12px;">
                  ${e.jobs.map(s=>_c(s,e,{mode:"history"}))}
                </div>
              `}
      </div>

      <div class="card">
        <div class="card-title">${i("cronRunHistory")}</div>
        <div class="card-sub">
          ${i("cronRunHistorySub")} ${t?.name??e.runsJobId??i("cronSelectJob")}.
        </div>
        ${e.runsJobId==null?r`<div class="muted" style="margin-top: 12px">${i("cronSelectJobToInspect")}</div>`:n.length===0?r`<div class="muted" style="margin-top: 12px">${i("cronNoRunsYet")}</div>`:r`
                  <div class="list" style="margin-top: 12px;">
                    ${n.map(s=>_v(s,e.basePath))}
                  </div>
                `}
      </div>
    </section>
  `}function Ev(e){const t=e.form;return t.scheduleKind==="at"?r`
      <label class="field" style="margin-top: 12px;">
        <span>${i("cronRunAt")}</span>
        <input
          type="datetime-local"
          .value=${t.scheduleAt}
          @input=${n=>e.onFormChange({scheduleAt:n.target.value})}
        />
      </label>
    `:t.scheduleKind==="every"?r`
      <div class="form-grid" style="margin-top: 12px;">
        <label class="field">
          <span>${i("cronEvery")}</span>
          <input
            .value=${t.everyAmount}
            @input=${n=>e.onFormChange({everyAmount:n.target.value})}
          />
        </label>
        <label class="field">
          <span>${i("cronUnit")}</span>
          <select
            .value=${t.everyUnit}
            @change=${n=>e.onFormChange({everyUnit:n.target.value})}
          >
            <option value="minutes">${i("cronMinutes")}</option>
            <option value="hours">${i("cronHours")}</option>
            <option value="days">${i("cronDays")}</option>
          </select>
        </label>
      </div>
    `:r`
    <div class="form-grid" style="margin-top: 12px;">
      <label class="field">
        <span>${i("cronExpression")}</span>
        <input
          .value=${t.cronExpr}
          @input=${n=>e.onFormChange({cronExpr:n.target.value})}
        />
      </label>
      <label class="field">
        <span>Timezone (optional)</span>
        <input
          .value=${t.cronTz}
          @input=${n=>e.onFormChange({cronTz:n.target.value})}
        />
      </label>
    </div>
  `}function _c(e,t,n){const a=`list-item list-item-clickable cron-job${t.runsJobId===e.id?" list-item-selected":""}`;return r`
    <div
      class=${a}
      @click=${()=>{if(n.mode==="config"){t.onShowHistory?.(e.id);return}t.onLoadRuns(e.id)}}
    >
      <div class="list-main">
        <div class="list-title">${e.name}</div>
        <div class="list-sub">${kv(e)}</div>
        ${Tv(e)}
        ${e.agentId?r`<div class="muted cron-job-agent">Agent: ${e.agentId}</div>`:y}
      </div>
      <div class="list-meta">
        ${Pv(e)}
      </div>
      <div class="cron-job-footer">
        <div class="chip-row cron-job-chips">
          <span class=${`chip ${e.enabled?"chip-ok":"chip-danger"}`}>
            ${e.enabled?"enabled":"disabled"}
          </span>
          <span class="chip">${e.sessionTarget}</span>
          <span class="chip">${e.wakeMode}</span>
        </div>
        <div class="row cron-job-actions">
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${o=>{o.stopPropagation(),t.onToggle(e,!e.enabled)}}
          >
            ${e.enabled?"Disable":"Enable"}
          </button>
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${o=>{o.stopPropagation(),t.onRun(e)}}
          >
            Run
          </button>
          <button
            class="btn"
            ?disabled=${t.busy}
            @click=${o=>{if(o.stopPropagation(),n.mode==="config"){t.onShowHistory?.(e.id);return}t.onLoadRuns(e.id)}}
          >
            History
          </button>
          <button
            class="btn danger"
            ?disabled=${t.busy}
            @click=${o=>{o.stopPropagation(),t.onRemove(e)}}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  `}function Tv(e){if(e.payload.kind==="systemEvent")return r`<div class="cron-job-detail">
      <span class="cron-job-detail-label">System</span>
      <span class="muted cron-job-detail-value">${e.payload.text}</span>
    </div>`;const t=e.delivery,n=t?.channel||t?.to?` (${t.channel??"last"}${t.to?` -> ${t.to}`:""})`:"";return r`
    <div class="cron-job-detail">
      <span class="cron-job-detail-label">Prompt</span>
      <span class="muted cron-job-detail-value">${e.payload.message}</span>
    </div>
    ${t?r`<div class="cron-job-detail">
            <span class="cron-job-detail-label">Delivery</span>
            <span class="muted cron-job-detail-value">${t.mode}${n}</span>
          </div>`:y}
  `}function $l(e){return typeof e!="number"||!Number.isFinite(e)?"n/a":X(e)}function Pv(e){const t=e.state?.lastStatus??"n/a",n=t==="ok"?"cron-job-status-ok":t==="error"?"cron-job-status-error":t==="skipped"?"cron-job-status-skipped":"cron-job-status-na",s=e.state?.nextRunAtMs,a=e.state?.lastRunAtMs;return r`
    <div class="cron-job-state">
      <div class="cron-job-state-row">
        <span class="cron-job-state-key">Status</span>
        <span class=${`cron-job-status-pill ${n}`}>${t}</span>
      </div>
      <div class="cron-job-state-row">
        <span class="cron-job-state-key">Next</span>
        <span class="cron-job-state-value" title=${Sn(s)}>
          ${$l(s)}
        </span>
      </div>
      <div class="cron-job-state-row">
        <span class="cron-job-state-key">Last</span>
        <span class="cron-job-state-value" title=${Sn(a)}>
          ${$l(a)}
        </span>
      </div>
    </div>
  `}function _v(e,t){const n=typeof e.sessionKey=="string"&&e.sessionKey.trim().length>0?`${In("chat",t)}?session=${encodeURIComponent(e.sessionKey)}`:null;return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${e.status}</div>
        <div class="list-sub">${e.summary??""}</div>
      </div>
      <div class="list-meta">
        <div>${Sn(e.ts)}</div>
        <div class="muted">${e.durationMs??0}ms</div>
        ${n?r`<div><a class="session-link" href=${n}>Open run chat</a></div>`:y}
        ${e.error?r`<div class="muted">${e.error}</div>`:y}
      </div>
    </div>
  `}function Lv(e){const n=(e.status&&typeof e.status=="object"?e.status.securityAudit:null)?.summary??null,s=n?.critical??0,a=n?.warn??0,o=n?.info??0,l=s>0?"danger":a>0?"warn":"success",c=s>0?`${s} ${i("debugCritical")}`:a>0?`${a} ${i("debugWarnings")}`:i("debugNoCritical");return r`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">${i("debugSnapshots")}</div>
            <div class="card-sub">${i("debugSnapshotsSub")}</div>
          </div>
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?i("commonRefreshing"):i("commonRefresh")}
          </button>
        </div>
        <div class="stack" style="margin-top: 12px;">
          <div>
            <div class="muted">${i("debugStatus")}</div>
            ${n?r`<div class="callout ${l}" style="margin-top: 8px;">
                  ${i("debugSecurityAudit")}: ${c}${o>0?` · ${o} ${i("debugInfo")}`:""}. ${i("debugSecurityAuditDetails")}
                </div>`:y}
            <pre class="code-block">${JSON.stringify(e.status??{},null,2)}</pre>
          </div>
          <div>
            <div class="muted">${i("debugHealth")}</div>
            <pre class="code-block">${JSON.stringify(e.health??{},null,2)}</pre>
          </div>
          <div>
            <div class="muted">${i("debugLastHeartbeat")}</div>
            <pre class="code-block">${JSON.stringify(e.heartbeat??{},null,2)}</pre>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">${i("debugManualRpc")}</div>
        <div class="card-sub">${i("debugManualRpcSub")}</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>${i("debugMethod")}</span>
            <input
              .value=${e.callMethod}
              @input=${u=>e.onCallMethodChange(u.target.value)}
              placeholder="system-presence"
            />
          </label>
          <label class="field">
            <span>${i("debugParams")} (JSON)</span>
            <textarea
              .value=${e.callParams}
              @input=${u=>e.onCallParamsChange(u.target.value)}
              rows="6"
            ></textarea>
          </label>
        </div>
        <div class="row" style="margin-top: 12px;">
          <button class="btn primary" @click=${e.onCall}>${i("debugCall")}</button>
        </div>
        ${e.callError?r`<div class="callout danger" style="margin-top: 12px;">
              ${e.callError}
            </div>`:y}
        ${e.callResult?r`<pre class="code-block" style="margin-top: 12px;">${e.callResult}</pre>`:y}
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">${i("debugModels")}</div>
      <div class="card-sub">${i("debugModelsSub")}</div>
      <pre class="code-block" style="margin-top: 12px;">${JSON.stringify(e.models??[],null,2)}</pre>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">${i("debugEventLog")}</div>
      <div class="card-sub">${i("debugEventLogSub")}</div>
      ${e.eventLog.length===0?r`
              <div class="muted" style="margin-top: 12px">${i("debugNoEvents")}</div>
            `:r`
            <div class="list" style="margin-top: 12px;">
              ${e.eventLog.map(u=>r`
                  <div class="list-item">
                    <div class="list-main">
                      <div class="list-title">${u.event}</div>
                      <div class="list-sub">${new Date(u.ts).toLocaleTimeString()}</div>
                    </div>
                    <div class="list-meta">
                      <pre class="code-block">${$v(u.payload)}</pre>
                    </div>
                  </div>
                `)}
            </div>
          `}
    </section>
  `}function To(e){return typeof window>"u"?"":e?.trim()?Vt(e):""}async function Pt(e,t,n){const s=To(t),a=s?`${s}${e.startsWith("/")?"":"/"}${e}`:e,o={Accept:"application/json"};n?.trim()&&(o.Authorization=`Bearer ${n.trim()}`);try{const l=await fetch(a,{headers:o});if(!l.ok){if(l.status===401)throw new Error("认证失败：网关令牌无效或未提供，请在 Overview 中配置正确的 Gateway Token");if((l.headers.get("Content-Type")??"").toLowerCase().includes("application/json")){const f=await l.json(),p=(f?.error??"").trim(),g=(f?.detail??"").trim();throw new Error(p?g?`${p}（${g}）`:p:`Gateway API ${l.status} for ${e}`)}const u=await l.text();throw new Error(`Gateway API ${l.status} for ${e}: ${u}`)}return await l.json()}catch(l){if(l instanceof Error){const c=l.message==="Failed to fetch"?"网络请求失败，请检查网络连接":l.message;throw new Error(c)}throw l}}function wn(e,t){const n=(e??"").trim();if(!n)return;if(n.startsWith("http://")||n.startsWith("https://"))return n;const s=n.startsWith("/uploads/")||n.startsWith("/")?`/api/v1/site${n}`:n,a=To(t);return a?`${a}${s.startsWith("/")?"":"/"}${s}`:s}function Po(e){const t=new URLSearchParams;for(const[s,a]of Object.entries(e)){if(!a)continue;const o=a.trim();o&&t.set(s,o)}const n=t.toString();return n?`?${n}`:""}async function oa(e,t){return await Pt(`/api/v1/employees${Po(e)}`,t?.gatewayHost,t?.token)}async function Iv(e,t){return await Pt(`/api/v1/employees/${encodeURIComponent(String(e))}`,t?.gatewayHost,t?.token)}async function Dv(e,t){return await Pt(`/api/v1/mcps${Po(e)}`,t?.gatewayHost,t?.token)}async function Rv(e,t){return await Pt(`/api/v1/mcps/${e}`,t?.gatewayHost,t?.token)}async function Nv(e,t){return await Pt(`/api/v1/skills${Po(e)}`,t?.gatewayHost,t?.token)}async function Uv(e,t){return await Pt(`/api/v1/skills/${encodeURIComponent(e)}`,t?.gatewayHost,t?.token)}async function Ov(e){return await Pt("/api/v1/edu/categories",e?.gatewayHost,e?.token)}async function ia(e,t){const n=To(t?.gatewayHost),s=n?`${n}/api/v1/install`:"/api/v1/install",a={"Content-Type":"application/json",Accept:"application/json"};t?.token?.trim()&&(a.Authorization=`Bearer ${t.token.trim()}`);try{const o=await fetch(s,{method:"POST",headers:a,body:JSON.stringify(e)}),l=await o.json();if(!o.ok)throw o.status===401?new Error("认证失败：网关令牌无效或未提供，请在 Overview 中配置正确的 Gateway Token"):new Error(l?.error??`安装失败: ${o.status}`);return l}catch(o){const l=o instanceof Error?o.message:String(o),c=l==="Failed to fetch"?"网络请求失败，请检查网络连接":l;throw new Error(c)}}function ts(e){const t=(e??"").trim();return t||"其它"}function Lc(e){return(e??"").trim().toLowerCase()}function Fv(e,t){const n=Lc(t),s=(e??[]).filter(l=>n?`${l.name??""} ${l.description??""}`.toLowerCase().includes(n):!0),a=new Map;a.set("__all__",s.length);for(const l of s){const c=ts(l.category);a.set(c,(a.get(c)??0)+1)}return{orderedCategories:["__all__",...Array.from(a.keys()).filter(l=>l!=="__all__").sort((l,c)=>l.localeCompare(c,"zh-Hans-CN"))],counts:a}}function Ic(e){return e?e.split(",").map(t=>t.trim()).filter(Boolean):[]}const kl=3;function Sl(e){const t=Ic(e);if(t.length===0)return null;const n=t.slice(0,kl),s=t.length>kl;return r`
    <div class="emp-card__tags market-card-meta">
      ${n.map(a=>r`<span class="badge ghost emp-card__tag">${a}</span>`)}
      ${s?r`<span class="emp-card__tags-more">...</span>`:y}
    </div>
  `}function Bv(e){const t=e.trimStart();if(!t.startsWith("---"))return e;const n=t.slice(3),s=n.search(/\r?\n/);if(s===-1)return e;const a=n.slice(s+(n[s]==="\r"?2:1)),o=a.match(/\r?\n\s*---\s*\r?\n?/);return o?a.slice(o.index+o[0].length).trimStart():e}function Hv(e){const t=(e??"").trim().toLowerCase();return t?t==="open"?"开放":t==="paid"?"收费":t==="private"?"私有":e??"":""}function Dc(e,t){const n=String(t.id);return typeof t.id=="string"&&n.startsWith("local:")||(e.installedIds?.has(n)??!1)||(e.installedRemoteIds?.has(n)??!1)}function zv(e,t){const n=String(t.id);return typeof t.id=="string"&&n.startsWith("local:")?n.replace(/^local:/,""):e.remoteToLocalMap?.[n]??""}function Cl(e,t){const n=Dc(e,t),s=String(t.id),a=e.installingId===s;return n?r`<button class="market-card-button market-card-button--installed" type="button" disabled>已获取</button>`:e.onInstall?r`
      <button
        class="market-card-button market-card-button--primary"
        type="button"
        ?disabled=${a}
        @click=${o=>{o.stopPropagation(),e.onInstall(t.id,t.category)}}
      >
        ${a?"获取中":"获取"}
      </button>
    `:r`
    <a
      class="market-card-button market-card-button--primary"
      href=${`/api/v1/employees/${t.id}/download`}
      target="_blank"
      rel="noopener"
      title="下载"
      @click=${o=>o.stopPropagation()}
    >
      获取
    </a>
  `}function Wv(e,t){const n=Dc(e,t),s=zv(e,t);return n?r`
      <div class="market-card-actions">
        ${e.onOpenEmployee&&s?r`<button class="market-card-button market-card-button--ghost" type="button" @click=${()=>e.onOpenEmployee(s)}>会话</button>`:y}
        ${e.onEdit&&s?r`<button class="market-card-button market-card-button--ghost" type="button" @click=${()=>e.onEdit(s)}>编辑</button>`:y}
        ${e.onDelete&&s?r`<button class="market-card-button market-card-button--danger" type="button" @click=${()=>{e.onDelete(s)}}>删除</button>`:y}
      </div>
    `:e.onInstall?r`
      <button
        class="market-card-button market-card-button--primary"
        type="button"
        ?disabled=${e.installingId===String(t.id)}
        @click=${()=>{e.onInstall(t.id,t.category)}}
      >
        ${e.installingId===String(t.id)?"获取中":"获取"}
      </button>
    `:r`
    <a
      class="market-card-button market-card-button--primary"
      href=${`/api/v1/employees/${t.id}/download`}
      target="_blank"
      rel="noopener"
      title="下载"
    >
      获取
    </a>
  `}function Kv(e){const t=(e.category??"").trim()||"__all__",n=Lc(e.query),s=(e.items??[]).filter(c=>n?`${c.name??""} ${c.description??""}`.toLowerCase().includes(n):!0),a=t==="__all__"?s:s.filter(c=>ts(c.category)===t),o=new Map;for(const c of a){const u=ts(c.category),f=o.get(u)??[];f.push(c),o.set(u,f)}const l=t==="__all__"?Array.from(o.entries()).sort((c,u)=>c[0].localeCompare(u[0],"zh-Hans-CN")).map(([c,u])=>({title:c==="其它"?"其它":c,items:u})):[{title:t,items:a}];return r`
    <main class="emp-page">
      <section class="emp-list-wrap">
        <div class="emp-content">
          <div class="emp-main">
            <div class="emp-toolbar">
              <h2 class="emp-toolbar__title">${t==="__all__"?"推荐员工":t}</h2>
              <div class="emp-toolbar__actions">
                <div class="emp-search">
                  <input
                    class="emp-search__input"
                    type="text"
                    placeholder="搜索"
                    .value=${e.query}
                    ?disabled=${e.loading}
                    @input=${c=>e.onQueryChange(c.target.value)}
                  />
                  <span class="emp-search__icon" aria-hidden="true">🔍</span>
                </div>
                <button class="btn" @click=${e.onRefresh} ?disabled=${e.loading}>刷新</button>
                ${e.onAdd?r`<button class="btn primary" @click=${e.onAdd}>新增</button>`:y}
              </div>
            </div>

            ${e.error?r`<div class="callout danger" style="margin-bottom: 16px;">${e.error}</div>`:y}

            ${(()=>{const c=(e.items??[]).filter(u=>{const f=String(u.id);return typeof u.id=="string"&&f.startsWith("local:")||(e.installedIds?.has(f)??!1)||(e.installedRemoteIds?.has(f)??!1)});return c.length===0?y:r`
                <div class="emp-installed-section">
                  <h3 class="emp-section__title">已安装 (${c.length})</h3>
                  <div class="emp-grid emp-installed-grid">
                    ${c.map(u=>{const f=e.selectedId===u.id,p=wn(u.logo_url);return r`
                        <div class="emp-card-wrap ${f?"active":""}">
                          <div class="emp-card emp-card-btn" @click=${()=>e.onSelect(u.id)}>
                            <div class="emp-card__icon ${p?"":"emp-card__icon--default"}">
                              ${p?r`<img src=${p} alt="" />`:r`
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                  <circle cx="12" cy="7" r="4"/>
                                </svg>
                              `}
                            </div>
                            <div class="emp-card__actions">
                              ${Cl(e,u)}
                            </div>
                            <h3 class="emp-card__title">${u.name}</h3>
                            <p class="emp-card__desc">${u.description??"暂无描述"}</p>
                            ${Sl(u.tags)}
                          </div>
                        </div>
                      `})}
                  </div>
                </div>
              `})()}

            ${e.loading?r`<div class="emp-loading">加载中...</div>`:a.length===0?r`<div class="emp-empty">暂无匹配的数字员工</div>`:r`
                    <div class="emp-sections">
                      ${l.map(c=>c.items.length>0?r`
                                <div class="emp-section">
                                  <h3 class="emp-section__title">${c.title}</h3>
                                  <div class="emp-grid">
                                    ${c.items.map(u=>{const f=e.selectedId===u.id,p=wn(u.logo_url);return r`
                                        <div class="emp-card-wrap ${f?"active":""}">
                                          <div class="emp-card emp-card-btn" @click=${()=>e.onSelect(u.id)}>
                                            <div class="emp-card__icon ${p?"":"emp-card__icon--default"}">
                                              ${p?r`<img src=${p} alt="" />`:r`
                                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                                    <circle cx="12" cy="7" r="4"/>
                                                  </svg>
                                                `}
                                            </div>
                                            <div class="emp-card__actions">
                                              ${Cl(e,u)}
                                            </div>
                                            <h3 class="emp-card__title">${u.name}</h3>
                                            <p class="emp-card__desc">${u.description??"暂无描述"}</p>
                                            ${Sl(u.tags)}
                                          </div>
                                        </div>
                                      `})}
                                  </div>
                                </div>
                              `:y)}
                    </div>
                  `}
          </div>
        </div>

        ${e.selectedDetail?r`
              <div class="modal-overlay" @click=${e.onDetailClose} role="dialog" aria-modal="true" aria-labelledby="emp-detail-title">
                <div class="modal card emp-detail-modal emp-detail-modal--large" @click=${c=>c.stopPropagation()}>
                  <div class="emp-detail-modal__header">
                    <div class="emp-detail-header" style="flex: 1; min-width: 0;">
                      <div class="emp-detail-title-wrap">
                        ${(()=>{const c=wn(e.selectedDetail.logo_url);return c?r`<div class="emp-detail-logo"><img src=${c} alt="" /></div>`:r`
                              <div class="emp-detail-logo emp-detail-logo--default">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                  <circle cx="12" cy="7" r="4"/>
                                </svg>
                              </div>
                            `})()}
                        <h1 id="emp-detail-title" class="emp-detail-title">${e.selectedDetail.name}</h1>
                        <span class="emp-detail-status" data-status=${e.selectedDetail.status??""}>${Hv(e.selectedDetail.status)}</span>
                      </div>
                      <article class="emp-detail-summary">${e.selectedDetail.description??""}</article>
                      <div class="emp-detail-meta-row" style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-top: 8px;">
                        ${Wv(e,e.selectedDetail)}
                      </div>
                    </div>
                    <div class="emp-detail-meta-right" style="display: flex; align-items: flex-start; gap: 8px; flex-wrap: wrap; flex-shrink: 0;">
                      ${(e.selectedDetail.category??"").trim()?r`<span class="badge ghost">${ts(e.selectedDetail.category)}</span>`:y}
                      ${(e.selectedDetail.tags??"").trim()?Ic(e.selectedDetail.tags).map(c=>r`<span class="badge ghost">${c}</span>`):y}
                      <button class="btn emp-detail-modal__close" aria-label="关闭" @click=${e.onDetailClose}>×</button>
                    </div>
                  </div>

                  ${e.selectedDetail.readme?r`
                        <section class="emp-detail-readme emp-detail-modal__body">
                          <h2 class="emp-detail-readme-title">说明文档</h2>
                          <div class="emp-detail-markdown emp-detail-content">${qt(jt(Bv(e.selectedDetail.readme)))}</div>
                        </section>
                      `:r`<div class="callout info emp-detail-modal__body">无 README</div>`}
                </div>
              </div>
            `:y}
      </section>
    </main>
  `}function qv(e){const t=Math.max(0,e),n=Math.floor(t/1e3);if(n<60)return`${n}s`;const s=Math.floor(n/60);return s<60?`${s}m`:`${Math.floor(s/60)}h`}function pt(e,t){return t?r`<div class="exec-approval-meta-row"><span>${e}</span><span>${t}</span></div>`:y}function jv(e){const t=e.execApprovalQueue[0];if(!t)return y;const n=t.request,s=t.expiresAtMs-Date.now(),a=s>0?`expires in ${qv(s)}`:"expired",o=e.execApprovalQueue.length;return r`
    <div class="exec-approval-overlay" role="dialog" aria-live="polite">
      <div class="exec-approval-card">
        <div class="exec-approval-header">
          <div>
            <div class="exec-approval-title">Exec approval needed</div>
            <div class="exec-approval-sub">${a}</div>
          </div>
          ${o>1?r`<div class="exec-approval-queue">${o} pending</div>`:y}
        </div>
        <div class="exec-approval-command mono">${n.command}</div>
        <div class="exec-approval-meta">
          ${pt("Host",n.host)}
          ${pt("Agent",n.agentId)}
          ${pt("Session",n.sessionKey)}
          ${pt("CWD",n.cwd)}
          ${pt("Resolved",n.resolvedPath)}
          ${pt("Security",n.security)}
          ${pt("Ask",n.ask)}
        </div>
        ${e.execApprovalError?r`<div class="exec-approval-error">${e.execApprovalError}</div>`:y}
        <div class="exec-approval-actions">
          <button
            class="btn primary"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("allow-once")}
          >
            Allow once
          </button>
          <button
            class="btn"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("allow-always")}
          >
            Always allow
          </button>
          <button
            class="btn danger"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision("deny")}
          >
            Deny
          </button>
        </div>
      </div>
    </div>
  `}function Qv(e){const{pendingGatewayUrl:t}=e;return t?r`
    <div class="exec-approval-overlay" role="dialog" aria-modal="true" aria-live="polite">
      <div class="exec-approval-card">
        <div class="exec-approval-header">
          <div>
            <div class="exec-approval-title">Change Gateway URL</div>
            <div class="exec-approval-sub">This will reconnect to a different gateway server</div>
          </div>
        </div>
        <div class="exec-approval-command mono">${t}</div>
        <div class="callout danger" style="margin-top: 12px;">
          Only confirm if you trust this URL. Malicious URLs can compromise your system.
        </div>
        <div class="exec-approval-actions">
          <button
            class="btn primary"
            @click=${()=>e.handleGatewayUrlConfirm()}
          >
            Confirm
          </button>
          <button
            class="btn"
            @click=${()=>e.handleGatewayUrlCancel()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  `:y}const Al=["trace","debug","info","warn","error","fatal"];function Vv(e){if(!e)return"";const t=new Date(e);return Number.isNaN(t.getTime())?e:t.toLocaleTimeString()}function Gv(e,t){return t?[e.message,e.subsystem,e.raw].filter(Boolean).join(" ").toLowerCase().includes(t):!0}function Jv(e){const t=e.filterText.trim().toLowerCase(),n=Al.some(o=>!e.levelFilters[o]),s=e.entries.filter(o=>o.level&&!e.levelFilters[o.level]?!1:Gv(o,t)),a=t||n?"filtered":"visible";return r`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">${i("logsTitle")}</div>
          <div class="card-sub">${i("logsSub")}</div>
        </div>
        <div class="row" style="gap: 8px;">
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?i("commonLoading"):i("commonRefresh")}
          </button>
          <button
            class="btn"
            ?disabled=${s.length===0}
            @click=${()=>e.onExport(s.map(o=>o.raw),a)}
          >
            ${i(a==="filtered"?"logsExportFiltered":"logsExportVisible")}
          </button>
        </div>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field" style="min-width: 220px;">
          <span>Filter</span>
          <input
            .value=${e.filterText}
            @input=${o=>e.onFilterTextChange(o.target.value)}
            placeholder="Search logs"
          />
        </label>
        <label class="field checkbox">
          <span>Auto-follow</span>
          <input
            type="checkbox"
            .checked=${e.autoFollow}
            @change=${o=>e.onToggleAutoFollow(o.target.checked)}
          />
        </label>
      </div>

      <div class="chip-row" style="margin-top: 12px;">
        ${Al.map(o=>r`
            <label class="chip log-chip ${o}">
              <input
                type="checkbox"
                .checked=${e.levelFilters[o]}
                @change=${l=>e.onLevelToggle(o,l.target.checked)}
              />
              <span>${o}</span>
            </label>
          `)}
      </div>

      ${e.file?r`<div class="muted" style="margin-top: 10px;">File: ${e.file}</div>`:y}
      ${e.truncated?r`
              <div class="callout" style="margin-top: 10px">Log output truncated; showing latest chunk.</div>
            `:y}
      ${e.error?r`<div class="callout danger" style="margin-top: 10px;">${e.error}</div>`:y}

      <div class="log-stream" style="margin-top: 12px;" @scroll=${e.onScroll}>
        ${s.length===0?r`
                <div class="muted" style="padding: 12px">No log entries.</div>
              `:s.map(o=>r`
                <div class="log-row">
                  <div class="log-time mono">${Vv(o.time)}</div>
                  <div class="log-level ${o.level??""}">${o.level??""}</div>
                  <div class="log-subsystem mono">${o.subsystem??""}</div>
                  <div class="log-message mono">${o.message??o.raw}</div>
                </div>
              `)}
      </div>
    </section>
  `}function Yv(e){const t=sy(e),n=cy(e);return r`
    ${uy(n)}
    ${dy(t)}
    ${Zv(e)}
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">${i("nodesTitle")}</div>
          <div class="card-sub">${i("nodesSub")}</div>
        </div>
        <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
          ${e.loading?i("commonLoading"):i("commonRefresh")}
        </button>
      </div>
      <div class="list" style="margin-top: 16px;">
        ${e.nodes.length===0?r`
                <div class="muted">${i("nodesNoFound")}</div>
              `:e.nodes.map(s=>xy(s))}
      </div>
    </section>
  `}function Zv(e){const t=e.devicesList??{pending:[],paired:[]},n=Array.isArray(t.pending)?t.pending:[],s=Array.isArray(t.paired)?t.paired:[];return r`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">${i("nodesDevices")}</div>
          <div class="card-sub">${i("nodesDevicesSub")}</div>
        </div>
        <button class="btn" ?disabled=${e.devicesLoading} @click=${e.onDevicesRefresh}>
          ${e.devicesLoading?i("commonLoading"):i("commonRefresh")}
        </button>
      </div>
      ${e.devicesError?r`<div class="callout danger" style="margin-top: 12px;">${e.devicesError}</div>`:y}
      <div class="list" style="margin-top: 16px;">
        ${n.length>0?r`
              <div class="muted" style="margin-bottom: 8px;">${i("nodesPending")}</div>
              ${n.map(a=>Xv(a,e))}
            `:y}
        ${s.length>0?r`
              <div class="muted" style="margin-top: 12px; margin-bottom: 8px;">${i("nodesPaired")}</div>
              ${s.map(a=>ey(a,e))}
            `:y}
        ${n.length===0&&s.length===0?r`
                <div class="muted">${i("nodesNoPairedDevices")}</div>
              `:y}
      </div>
    </section>
  `}function Xv(e,t){const n=e.displayName?.trim()||e.deviceId,s=typeof e.ts=="number"?X(e.ts):i("commonNA"),a=e.role?.trim()?`${i("nodesRoleLabel")}${e.role}`:i("nodesRoleNone"),o=e.isRepair?i("nodesRepairSuffix"):"",l=e.remoteIp?` · ${e.remoteIp}`:"";return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${n}</div>
        <div class="list-sub">${e.deviceId}${l}</div>
        <div class="muted" style="margin-top: 6px;">
          ${a} · ${i("nodesRequested")}${s}${o}
        </div>
      </div>
      <div class="list-meta">
        <div class="row" style="justify-content: flex-end; gap: 8px; flex-wrap: wrap;">
          <button class="btn btn--sm primary" @click=${()=>t.onDeviceApprove(e.requestId)}>
            ${i("nodesApprove")}
          </button>
          <button class="btn btn--sm" @click=${()=>t.onDeviceReject(e.requestId)}>
            ${i("nodesReject")}
          </button>
        </div>
      </div>
    </div>
  `}function ey(e,t){const n=e.displayName?.trim()||e.deviceId,s=e.remoteIp?` · ${e.remoteIp}`:"",a=`${i("nodesRolesLabel")}${va(e.roles)}`,o=`${i("nodesScopesLabel")}${va(e.scopes)}`,l=Array.isArray(e.tokens)?e.tokens:[];return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${n}</div>
        <div class="list-sub">${e.deviceId}${s}</div>
        <div class="muted" style="margin-top: 6px;">${a} · ${o}</div>
        ${l.length===0?r`
                <div class="muted" style="margin-top: 6px">${i("nodesTokensNone")}</div>
              `:r`
              <div class="muted" style="margin-top: 10px;">${i("nodesTokens")}</div>
              <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 6px;">
                ${l.map(c=>ty(e.deviceId,c,t))}
              </div>
            `}
      </div>
    </div>
  `}function ty(e,t,n){const s=t.revokedAtMs?i("nodesTokenRevoked"):i("nodesTokenActive"),a=`${i("nodesScopesLabel")}${va(t.scopes)}`,o=X(t.rotatedAtMs??t.createdAtMs??t.lastUsedAtMs??null);return r`
    <div class="row" style="justify-content: space-between; gap: 8px;">
      <div class="list-sub">${t.role} · ${s} · ${a} · ${o}</div>
      <div class="row" style="justify-content: flex-end; gap: 6px; flex-wrap: wrap;">
        <button
          class="btn btn--sm"
          @click=${()=>n.onDeviceRotate(e,t.role,t.scopes)}
        >
          ${i("nodesRotate")}
        </button>
        ${t.revokedAtMs?y:r`
              <button
                class="btn btn--sm danger"
                @click=${()=>n.onDeviceRevoke(e,t.role)}
              >
                ${i("nodesRevoke")}
              </button>
            `}
      </div>
    </div>
  `}const nt="__defaults__",Ml=[{value:"deny",labelKey:"nodesSecurityDeny"},{value:"allowlist",labelKey:"nodesSecurityAllowlist"},{value:"full",labelKey:"nodesSecurityFull"}],ny=[{value:"off",labelKey:"nodesAskOff"},{value:"on-miss",labelKey:"nodesAskOnMiss"},{value:"always",labelKey:"nodesAskAlways"}];function sy(e){const t=e.configForm,n=yy(e.nodes),{defaultBinding:s,agents:a}=wy(t),o=!!t,l=e.configSaving||e.configFormMode==="raw";return{ready:o,disabled:l,configDirty:e.configDirty,configLoading:e.configLoading,configSaving:e.configSaving,defaultBinding:s,agents:a,nodes:n,onBindDefault:e.onBindDefault,onBindAgent:e.onBindAgent,onSave:e.onSaveBindings,onLoadConfig:e.onLoadConfig,formMode:e.configFormMode}}function El(e){return e==="allowlist"||e==="full"||e==="deny"?e:"deny"}function ay(e){return e==="always"||e==="off"||e==="on-miss"?e:"on-miss"}function oy(e){const t=e?.defaults??{};return{security:El(t.security),ask:ay(t.ask),askFallback:El(t.askFallback??"deny"),autoAllowSkills:!!(t.autoAllowSkills??!1)}}function iy(e){const t=e?.agents??{},n=Array.isArray(t.list)?t.list:[],s=[];return n.forEach(a=>{if(!a||typeof a!="object")return;const o=a,l=typeof o.id=="string"?o.id.trim():"";if(!l)return;const c=typeof o.name=="string"?o.name.trim():void 0,u=o.default===!0;s.push({id:l,name:c||void 0,isDefault:u})}),s}function ly(e,t){const n=iy(e),s=Object.keys(t?.agents??{}),a=new Map;n.forEach(l=>a.set(l.id,l)),s.forEach(l=>{a.has(l)||a.set(l,{id:l})});const o=Array.from(a.values());return o.length===0&&o.push({id:"main",isDefault:!0}),o.sort((l,c)=>{if(l.isDefault&&!c.isDefault)return-1;if(!l.isDefault&&c.isDefault)return 1;const u=l.name?.trim()?l.name:l.id,f=c.name?.trim()?c.name:c.id;return u.localeCompare(f)}),o}function ry(e,t){return e===nt?nt:e&&t.some(n=>n.id===e)?e:nt}function cy(e){const t=e.execApprovalsForm??e.execApprovalsSnapshot?.file??null,n=!!t,s=oy(t),a=ly(e.configForm,t),o=by(e.nodes),l=e.execApprovalsTarget;let c=l==="node"&&e.execApprovalsTargetNodeId?e.execApprovalsTargetNodeId:null;l==="node"&&c&&!o.some(g=>g.id===c)&&(c=null);const u=ry(e.execApprovalsSelectedAgent,a),f=u!==nt?(t?.agents??{})[u]??null:null,p=Array.isArray(f?.allowlist)?f.allowlist??[]:[];return{ready:n,disabled:e.execApprovalsSaving||e.execApprovalsLoading,dirty:e.execApprovalsDirty,loading:e.execApprovalsLoading,saving:e.execApprovalsSaving,form:t,defaults:s,selectedScope:u,selectedAgent:f,agents:a,allowlist:p,target:l,targetNodeId:c,targetNodes:o,onSelectScope:e.onExecApprovalsSelectAgent,onSelectTarget:e.onExecApprovalsTargetChange,onPatch:e.onExecApprovalsPatch,onRemove:e.onExecApprovalsRemove,onLoad:e.onLoadExecApprovals,onSave:e.onSaveExecApprovals}}function dy(e){const t=e.nodes.length>0,n=e.defaultBinding??"";return r`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">${i("nodesBindingTitle")}</div>
          <div class="card-sub">
            ${i("nodesBindingSub")}<span class="mono">exec host=node</span>.
          </div>
        </div>
        <button
          class="btn"
          ?disabled=${e.disabled||!e.configDirty}
          @click=${e.onSave}
        >
          ${e.configSaving?i("commonSaving"):i("commonSave")}
        </button>
      </div>

      ${e.formMode==="raw"?r`
              <div class="callout warn" style="margin-top: 12px">
                ${i("nodesBindingFormModeHint")}
              </div>
            `:y}

      ${e.ready?r`
            <div class="list" style="margin-top: 16px;">
              <div class="list-item">
                <div class="list-main">
                  <div class="list-title">${i("nodesDefaultBinding")}</div>
                  <div class="list-sub">${i("nodesDefaultBindingSub")}</div>
                </div>
                <div class="list-meta">
                  <label class="field">
                    <span>${i("nodesNodeLabel")}</span>
                    <select
                      ?disabled=${e.disabled||!t}
                      @change=${s=>{const o=s.target.value.trim();e.onBindDefault(o||null)}}
                    >
                      <option value="" ?selected=${n===""}>${i("nodesAnyNode")}</option>
                      ${e.nodes.map(s=>r`<option
                            value=${s.id}
                            ?selected=${n===s.id}
                          >
                            ${s.label}
                          </option>`)}
                    </select>
                  </label>
                  ${t?y:r`
                          <div class="muted">${i("nodesNoNodesSystemRun")}</div>
                        `}
                </div>
              </div>

              ${e.agents.length===0?r`
                      <div class="muted">${i("nodesNoAgentsFound")}</div>
                    `:e.agents.map(s=>vy(s,e))}
            </div>
          `:r`<div class="row" style="margin-top: 12px; gap: 12px;">
            <div class="muted">${i("nodesLoadConfigHint")}</div>
            <button class="btn" ?disabled=${e.configLoading} @click=${e.onLoadConfig}>
              ${e.configLoading?i("commonLoading"):i("nodesLoadConfig")}
            </button>
          </div>`}
    </section>
  `}function uy(e){const t=e.ready,n=e.target!=="node"||!!e.targetNodeId;return r`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">${i("nodesExecApprovalsTitle")}</div>
          <div class="card-sub">
            ${i("nodesExecApprovalsSub")}
          </div>
        </div>
        <button
          class="btn"
          ?disabled=${e.disabled||!e.dirty||!n}
          @click=${e.onSave}
        >
          ${e.saving?i("commonSaving"):i("commonSave")}
        </button>
      </div>

      ${py(e)}

      ${t?r`
            ${gy(e)}
            ${my(e)}
            ${e.selectedScope===nt?y:fy(e)}
          `:r`<div class="row" style="margin-top: 12px; gap: 12px;">
            <div class="muted">${i("nodesLoadExecApprovalsHint")}</div>
            <button class="btn" ?disabled=${e.loading||!n} @click=${e.onLoad}>
              ${e.loading?i("commonLoading"):i("nodesLoadApprovals")}
            </button>
          </div>`}
    </section>
  `}function py(e){const t=e.targetNodes.length>0,n=e.targetNodeId??"";return r`
    <div class="list" style="margin-top: 12px;">
      <div class="list-item">
        <div class="list-main">
          <div class="list-title">${i("nodesTarget")}</div>
          <div class="list-sub">
            ${i("nodesTargetSub")}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>${i("nodesHost")}</span>
            <select
              ?disabled=${e.disabled}
              @change=${s=>{if(s.target.value==="node"){const l=e.targetNodes[0]?.id??null;e.onSelectTarget("node",n||l)}else e.onSelectTarget("gateway",null)}}
            >
              <option value="gateway" ?selected=${e.target==="gateway"}>${i("nodesHostGateway")}</option>
              <option value="node" ?selected=${e.target==="node"}>${i("nodesHostNode")}</option>
            </select>
          </label>
          ${e.target==="node"?r`
                <label class="field">
                  <span>${i("nodesNodeLabel")}</span>
                  <select
                    ?disabled=${e.disabled||!t}
                    @change=${s=>{const o=s.target.value.trim();e.onSelectTarget("node",o||null)}}
                  >
                    <option value="" ?selected=${n===""}>${i("nodesSelectNode")}</option>
                    ${e.targetNodes.map(s=>r`<option
                          value=${s.id}
                          ?selected=${n===s.id}
                        >
                          ${s.label}
                        </option>`)}
                  </select>
                </label>
              `:y}
        </div>
      </div>
      ${e.target==="node"&&!t?r`
              <div class="muted">${i("nodesNoNodesExecApprovals")}</div>
            `:y}
    </div>
  `}function gy(e){return r`
    <div class="row" style="margin-top: 12px; gap: 8px; flex-wrap: wrap;">
      <span class="label">${i("nodesScope")}</span>
      <div class="row" style="gap: 8px; flex-wrap: wrap;">
        <button
          class="btn btn--sm ${e.selectedScope===nt?"active":""}"
          @click=${()=>e.onSelectScope(nt)}
        >
          ${i("nodesDefaults")}
        </button>
        ${e.agents.map(t=>{const n=t.name?.trim()?`${t.name} (${t.id})`:t.id;return r`
            <button
              class="btn btn--sm ${e.selectedScope===t.id?"active":""}"
              @click=${()=>e.onSelectScope(t.id)}
            >
              ${n}
            </button>
          `})}
      </div>
    </div>
  `}function my(e){const t=e.selectedScope===nt,n=e.defaults,s=e.selectedAgent??{},a=t?["defaults"]:["agents",e.selectedScope],o=typeof s.security=="string"?s.security:void 0,l=typeof s.ask=="string"?s.ask:void 0,c=typeof s.askFallback=="string"?s.askFallback:void 0,u=t?n.security:o??"__default__",f=t?n.ask:l??"__default__",p=t?n.askFallback:c??"__default__",g=typeof s.autoAllowSkills=="boolean"?s.autoAllowSkills:void 0,$=g??n.autoAllowSkills,k=g==null;return r`
    <div class="list" style="margin-top: 16px;">
      <div class="list-item">
        <div class="list-main">
          <div class="list-title">${i("nodesSecurity")}</div>
          <div class="list-sub">
            ${t?i("nodesSecurityDefaultSub"):`${i("nodesSecurityAgentSubPrefix")}${n.security}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>${i("nodesMode")}</span>
            <select
              ?disabled=${e.disabled}
              @change=${S=>{const m=S.target.value;!t&&m==="__default__"?e.onRemove([...a,"security"]):e.onPatch([...a,"security"],m)}}
            >
              ${t?y:r`<option value="__default__" ?selected=${u==="__default__"}>
                    ${i("nodesUseDefaultPrefix")}${n.security})
                  </option>`}
              ${Ml.map(S=>r`<option
                    value=${S.value}
                    ?selected=${u===S.value}
                  >
                    ${i(S.labelKey)}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">${i("nodesAsk")}</div>
          <div class="list-sub">
            ${t?i("nodesAskDefaultSub"):`${i("nodesAskAgentSubPrefix")}${n.ask}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>${i("nodesMode")}</span>
            <select
              ?disabled=${e.disabled}
              @change=${S=>{const m=S.target.value;!t&&m==="__default__"?e.onRemove([...a,"ask"]):e.onPatch([...a,"ask"],m)}}
            >
              ${t?y:r`<option value="__default__" ?selected=${f==="__default__"}>
                    ${i("nodesUseDefaultPrefix")}${n.ask})
                  </option>`}
              ${ny.map(S=>r`<option
                    value=${S.value}
                    ?selected=${f===S.value}
                  >
                    ${i(S.labelKey)}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">${i("nodesAskFallback")}</div>
          <div class="list-sub">
            ${t?i("nodesAskFallbackDefaultSub"):`${i("nodesAskFallbackAgentSubPrefix")}${n.askFallback}.`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>${i("nodesFallback")}</span>
            <select
              ?disabled=${e.disabled}
              @change=${S=>{const m=S.target.value;!t&&m==="__default__"?e.onRemove([...a,"askFallback"]):e.onPatch([...a,"askFallback"],m)}}
            >
              ${t?y:r`<option value="__default__" ?selected=${p==="__default__"}>
                    ${i("nodesUseDefaultPrefix")}${n.askFallback})
                  </option>`}
              ${Ml.map(S=>r`<option
                    value=${S.value}
                    ?selected=${p===S.value}
                  >
                    ${i(S.labelKey)}
                  </option>`)}
            </select>
          </label>
        </div>
      </div>

      <div class="list-item">
        <div class="list-main">
          <div class="list-title">${i("nodesAutoAllowSkills")}</div>
          <div class="list-sub">
            ${t?i("nodesAutoAllowSkillsDefaultSub"):k?`${i("nodesAutoAllowSkillsUsingDefault")}${n.autoAllowSkills?"on":"off"}).`:`${i("nodesAutoAllowSkillsOverride")}${$?"on":"off"}).`}
          </div>
        </div>
        <div class="list-meta">
          <label class="field">
            <span>${i("nodesEnabled")}</span>
            <input
              type="checkbox"
              ?disabled=${e.disabled}
              .checked=${$}
              @change=${S=>{const d=S.target;e.onPatch([...a,"autoAllowSkills"],d.checked)}}
            />
          </label>
          ${!t&&!k?r`<button
                class="btn btn--sm"
                ?disabled=${e.disabled}
                @click=${()=>e.onRemove([...a,"autoAllowSkills"])}
              >
                ${i("nodesUseDefaultButton")}
              </button>`:y}
        </div>
      </div>
    </div>
  `}function fy(e){const t=["agents",e.selectedScope,"allowlist"],n=e.allowlist;return r`
    <div class="row" style="margin-top: 18px; justify-content: space-between;">
      <div>
        <div class="card-title">${i("nodesAllowlist")}</div>
        <div class="card-sub">${i("nodesAllowlistSub")}</div>
      </div>
      <button
        class="btn btn--sm"
        ?disabled=${e.disabled}
        @click=${()=>{const s=[...n,{pattern:""}];e.onPatch(t,s)}}
      >
        ${i("nodesAddPattern")}
      </button>
    </div>
    <div class="list" style="margin-top: 12px;">
      ${n.length===0?r`
              <div class="muted">${i("nodesNoAllowlistEntries")}</div>
            `:n.map((s,a)=>hy(e,s,a))}
    </div>
  `}function hy(e,t,n){const s=t.lastUsedAt?X(t.lastUsedAt):i("nodesNever"),a=t.lastUsedCommand?mi(t.lastUsedCommand,120):null,o=t.lastResolvedPath?mi(t.lastResolvedPath,120):null;return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${t.pattern?.trim()?t.pattern:i("nodesNewPattern")}</div>
        <div class="list-sub">${i("nodesLastUsedPrefix")}${s}</div>
        ${a?r`<div class="list-sub mono">${a}</div>`:y}
        ${o?r`<div class="list-sub mono">${o}</div>`:y}
      </div>
      <div class="list-meta">
        <label class="field">
          <span>${i("nodesPattern")}</span>
          <input
            type="text"
            .value=${t.pattern??""}
            ?disabled=${e.disabled}
            @input=${l=>{const c=l.target;e.onPatch(["agents",e.selectedScope,"allowlist",n,"pattern"],c.value)}}
          />
        </label>
        <button
          class="btn btn--sm danger"
          ?disabled=${e.disabled}
          @click=${()=>{if(e.allowlist.length<=1){e.onRemove(["agents",e.selectedScope,"allowlist"]);return}e.onRemove(["agents",e.selectedScope,"allowlist",n])}}
        >
          ${i("nodesRemove")}
        </button>
      </div>
    </div>
  `}function vy(e,t){const n=e.binding??"__default__",s=e.name?.trim()?`${e.name} (${e.id})`:e.id,a=t.nodes.length>0;return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${s}</div>
        <div class="list-sub">
          ${e.isDefault?i("nodesDefaultAgent"):i("nodesAgent")} ·
          ${n==="__default__"?`${i("nodesUsesDefault")}${t.defaultBinding??"any"})`:`${i("nodesOverride")}${e.binding}`}
        </div>
      </div>
      <div class="list-meta">
        <label class="field">
          <span>${i("nodesBinding")}</span>
          <select
            ?disabled=${t.disabled||!a}
            @change=${o=>{const c=o.target.value.trim();t.onBindAgent(e.index,c==="__default__"?null:c)}}
          >
            <option value="__default__" ?selected=${n==="__default__"}>
              ${i("nodesUseDefaultButton")}
            </option>
            ${t.nodes.map(o=>r`<option
                  value=${o.id}
                  ?selected=${n===o.id}
                >
                  ${o.label}
                </option>`)}
          </select>
        </label>
      </div>
    </div>
  `}function yy(e){const t=[];for(const n of e){if(!(Array.isArray(n.commands)?n.commands:[]).some(c=>String(c)==="system.run"))continue;const o=typeof n.nodeId=="string"?n.nodeId.trim():"";if(!o)continue;const l=typeof n.displayName=="string"&&n.displayName.trim()?n.displayName.trim():o;t.push({id:o,label:l===o?o:`${l} · ${o}`})}return t.sort((n,s)=>n.label.localeCompare(s.label)),t}function by(e){const t=[];for(const n of e){if(!(Array.isArray(n.commands)?n.commands:[]).some(c=>String(c)==="system.execApprovals.get"||String(c)==="system.execApprovals.set"))continue;const o=typeof n.nodeId=="string"?n.nodeId.trim():"";if(!o)continue;const l=typeof n.displayName=="string"&&n.displayName.trim()?n.displayName.trim():o;t.push({id:o,label:l===o?o:`${l} · ${o}`})}return t.sort((n,s)=>n.label.localeCompare(s.label)),t}function wy(e){const t={id:"main",name:void 0,index:0,isDefault:!0,binding:null};if(!e||typeof e!="object")return{defaultBinding:null,agents:[t]};const s=(e.tools??{}).exec??{},a=typeof s.node=="string"&&s.node.trim()?s.node.trim():null,o=e.agents??{},l=Array.isArray(o.list)?o.list:[];if(l.length===0)return{defaultBinding:a,agents:[t]};const c=[];return l.forEach((u,f)=>{if(!u||typeof u!="object")return;const p=u,g=typeof p.id=="string"?p.id.trim():"";if(!g)return;const $=typeof p.name=="string"?p.name.trim():void 0,k=p.default===!0,d=(p.tools??{}).exec??{},m=typeof d.node=="string"&&d.node.trim()?d.node.trim():null;c.push({id:g,name:$||void 0,index:f,isDefault:k,binding:m})}),c.length===0&&c.push(t),{defaultBinding:a,agents:c}}function xy(e){const t=!!e.connected,n=!!e.paired,s=typeof e.displayName=="string"&&e.displayName.trim()||(typeof e.nodeId=="string"?e.nodeId:"unknown"),a=Array.isArray(e.caps)?e.caps:[],o=Array.isArray(e.commands)?e.commands:[];return r`
    <div class="list-item">
      <div class="list-main">
        <div class="list-title">${s}</div>
        <div class="list-sub">
          ${typeof e.nodeId=="string"?e.nodeId:""}
          ${typeof e.remoteIp=="string"?` · ${e.remoteIp}`:""}
          ${typeof e.version=="string"?` · ${e.version}`:""}
        </div>
        <div class="chip-row" style="margin-top: 6px;">
          <span class="chip">${i(n?"nodesChipPaired":"nodesChipUnpaired")}</span>
          <span class="chip ${t?"chip-ok":"chip-warn"}">
            ${i(t?"nodesConnected":"nodesOffline")}
          </span>
          ${a.slice(0,12).map(l=>r`<span class="chip">${String(l)}</span>`)}
          ${o.slice(0,8).map(l=>r`<span class="chip">${String(l)}</span>`)}
        </div>
      </div>
    </div>
  `}function $y(e){const t=e.hello?.snapshot,n=t?.uptimeMs?lr(t.uptimeMs):"n/a",s=t?.policy?.tickIntervalMs?`${t.policy.tickIntervalMs}ms`:"n/a",a=(()=>{if(e.connected||!e.lastError)return null;const l=e.lastError.toLowerCase();if(!(l.includes("unauthorized")||l.includes("connect failed")))return null;const u=!!e.settings.token.trim(),f=!!e.password.trim();return!u&&!f?r`
        <div class="muted" style="margin-top: 8px">
          This gateway requires auth. Add a token or password, then click Connect.
          <div style="margin-top: 6px">
            <span class="mono">openclaw dashboard --no-open</span> → open the Control UI<br />
            <span class="mono">openclaw doctor --generate-gateway-token</span> → set token
          </div>
          <div style="margin-top: 6px">
            <a
              class="session-link"
              href="https://docs.openclaw.ai/web/dashboard"
              target="_blank"
              rel="noreferrer"
              title="Control UI auth docs (opens in new tab)"
              >Docs: Control UI auth</a
            >
          </div>
        </div>
      `:r`
      <div class="muted" style="margin-top: 8px">
        Auth failed. Update the token or password in Control UI settings, then click Connect.
        <div style="margin-top: 6px">
          <a
            class="session-link"
            href="https://docs.openclaw.ai/web/dashboard"
            target="_blank"
            rel="noreferrer"
            title="Control UI auth docs (opens in new tab)"
            >Docs: Control UI auth</a
          >
        </div>
      </div>
    `})(),o=(()=>{if(e.connected||!e.lastError||(typeof window<"u"?window.isSecureContext:!0))return null;const c=e.lastError.toLowerCase();return!c.includes("secure context")&&!c.includes("device identity required")?null:r`
      <div class="muted" style="margin-top: 8px">
        This page is HTTP, so the browser blocks device identity. Use HTTPS (Tailscale Serve) or open
        <span class="mono">http://127.0.0.1:18900</span> on the gateway host.
        <div style="margin-top: 6px">
          If you must stay on HTTP, set
          <span class="mono">gateway.controlUi.allowInsecureAuth: true</span> (token-only).
        </div>
        <div style="margin-top: 6px">
          <a
            class="session-link"
            href="https://docs.openclaw.ai/gateway/tailscale"
            target="_blank"
            rel="noreferrer"
            title="Tailscale Serve docs (opens in new tab)"
            >Docs: Tailscale Serve</a
          >
          <span class="muted"> · </span>
          <a
            class="session-link"
            href="https://docs.openclaw.ai/web/control-ui#insecure-http"
            target="_blank"
            rel="noreferrer"
            title="Insecure HTTP docs (opens in new tab)"
            >Docs: Insecure HTTP</a
          >
        </div>
      </div>
    `})();return r`
    <section class="grid grid-cols-2">
      <div class="card">
        <div class="card-title">${i("overviewGatewayAccess")}</div>
        <div class="card-sub">${i("overviewGatewayAccessSub")}</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>${i("overviewGatewayHost")}</span>
            <input
              .value=${e.settings.gatewayUrl}
              @input=${l=>{const c=l.target.value;e.onSettingsChange({...e.settings,gatewayUrl:c})}}
              placeholder="127.0.0.1:18900"
            />
          </label>
          <label class="field">
            <span>${i("overviewGatewayToken")}</span>
            <input
              .value=${e.settings.token}
              @input=${l=>{const c=l.target.value;e.onSettingsChange({...e.settings,token:c})}}
              placeholder="OPENCLAW_GATEWAY_TOKEN"
            />
          </label>
          <label class="field">
            <span>${i("overviewPassword")}</span>
            <input
              type="password"
              .value=${e.password}
              @input=${l=>{const c=l.target.value;e.onPasswordChange(c)}}
              placeholder="system or shared password"
            />
          </label>
          <label class="field">
            <span>${i("overviewDefaultSessionKey")}</span>
            <input
              .value=${e.settings.sessionKey}
              @input=${l=>{const c=l.target.value;e.onSessionKeyChange(c)}}
            />
          </label>
        </div>
        <div class="row" style="margin-top: 14px;">
          <button class="btn" @click=${()=>e.onConnect()}>${i("overviewConnect")}</button>
          <button class="btn" @click=${()=>e.onRefresh()}>${i("overviewRefresh")}</button>
          <span class="muted">${i("overviewConnectHint")}</span>
        </div>
      </div>

      <div class="card">
        <div class="card-title">${i("overviewSnapshot")}</div>
        <div class="card-sub">${i("overviewSnapshotSub")}</div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">${i("overviewStatus")}</div>
            <div class="stat-value ${e.connected?"ok":"warn"}">
              ${e.connected?i("overviewConnected"):i("overviewDisconnected")}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">${i("overviewUptime")}</div>
            <div class="stat-value">${n}</div>
          </div>
          <div class="stat">
            <div class="stat-label">${i("overviewTickInterval")}</div>
            <div class="stat-value">${s}</div>
          </div>
          <div class="stat">
            <div class="stat-label">${i("overviewLastChannelsRefresh")}</div>
            <div class="stat-value">
              ${e.lastChannelsRefresh?X(e.lastChannelsRefresh):"n/a"}
            </div>
          </div>
        </div>
        ${e.lastError?r`<div class="callout danger" style="margin-top: 14px;">
              <div>${e.lastError}</div>
              ${a??""}
              ${o??""}
            </div>`:r`
                <div class="callout" style="margin-top: 14px">
                  ${i("overviewChannelsHint")}
                </div>
              `}
      </div>
    </section>

    <section class="grid grid-cols-3" style="margin-top: 18px;">
      <div class="card stat-card">
        <div class="stat-label">${i("overviewInstances")}</div>
        <div class="stat-value">${e.presenceCount}</div>
        <div class="muted">${i("overviewInstancesSub")}</div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">${i("overviewSessions")}</div>
        <div class="stat-value">${e.sessionsCount??"n/a"}</div>
        <div class="muted">${i("overviewSessionsSub")}</div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">${i("overviewCron")}</div>
        <div class="stat-value">
          ${e.cronEnabled==null?"n/a":e.cronEnabled?i("overviewCronEnabled"):i("overviewCronDisabled")}
        </div>
        <div class="muted">${i("overviewCronNext")} ${Pc(e.cronNext)}</div>
      </div>
    </section>

    <section class="card" style="margin-top: 18px;">
      <div class="card-title">${i("overviewNotes")}</div>
      <div class="card-sub">${i("overviewNotesSub")}</div>
      <div class="note-grid" style="margin-top: 14px;">
        <div>
          <div class="note-title">${i("overviewNoteTailscale")}</div>
          <div class="muted">${i("overviewNoteTailscaleSub")}</div>
        </div>
        <div>
          <div class="note-title">${i("overviewNoteSessionHygiene")}</div>
          <div class="muted">${i("overviewNoteSessionHygieneSub")}</div>
        </div>
        <div>
          <div class="note-title">${i("overviewNoteCron")}</div>
          <div class="muted">${i("overviewNoteCronSub")}</div>
        </div>
      </div>
    </section>
  `}const ky=["","off","minimal","low","medium","high","xhigh"],Sy=["","off","on"];function Cy(){return[{value:"",label:i("commonInherit")},{value:"off",label:i("commonOffExplicit")},{value:"on",label:"on"}]}const Ay=["","off","on","stream"];function My(e){if(!e)return"";const t=e.trim().toLowerCase();return t==="z.ai"||t==="z-ai"?"zai":t}function Rc(e){return My(e)==="zai"}function Ey(e){return Rc(e)?Sy:ky}function Tl(e,t){return t?e.includes(t)?[...e]:[...e,t]:[...e]}function Ty(e,t){return t?e.some(n=>n.value===t)?[...e]:[...e,{value:t,label:`${t} (custom)`}]:[...e]}function Py(e,t){return!t||!e||e==="off"?e:"on"}function _y(e,t){return e?t&&e==="on"?"low":e:null}function Ly(e){const t=e.result?.sessions??[];return r`
    <section class="card">
      <div class="row" style="justify-content: space-between;">
        <div>
          <div class="card-title">${i("sessionsTitle")}</div>
          <div class="card-sub">${i("sessionsSub")}</div>
        </div>
        <div class="row" style="gap: 8px;">
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?i("commonLoading"):i("commonRefresh")}
          </button>
          <button
            class="btn secondary"
            ?disabled=${e.loading||t.length===0}
            @click=${e.onBulkModeToggle}
          >
            ${e.bulkMode?"完成":"批量删除"}
          </button>
        </div>
      </div>

      <div class="filters" style="margin-top: 14px;">
        <label class="field">
          <span>${i("sessionsActiveWithin")}</span>
          <input
            .value=${e.activeMinutes}
            @input=${n=>e.onFiltersChange({activeMinutes:n.target.value,limit:e.limit,includeGlobal:e.includeGlobal,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field">
          <span>${i("sessionsLimit")}</span>
          <input
            .value=${e.limit}
            @input=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:n.target.value,includeGlobal:e.includeGlobal,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field checkbox">
          <span>${i("sessionsIncludeGlobal")}</span>
          <input
            type="checkbox"
            .checked=${e.includeGlobal}
            @change=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:e.limit,includeGlobal:n.target.checked,includeUnknown:e.includeUnknown})}
          />
        </label>
        <label class="field checkbox">
          <span>${i("sessionsIncludeUnknown")}</span>
          <input
            type="checkbox"
            .checked=${e.includeUnknown}
            @change=${n=>e.onFiltersChange({activeMinutes:e.activeMinutes,limit:e.limit,includeGlobal:e.includeGlobal,includeUnknown:n.target.checked})}
          />
        </label>
      </div>

      ${e.bulkMode&&t.length>0?r`
              <div class="row" style="margin-top: 12px; justify-content: space-between;">
                <div class="muted">已选 ${e.selectedKeys.length} 个会话</div>
                <div class="row" style="gap: 8px;">
                  <button
                    class="btn"
                    ?disabled=${e.loading}
                    @click=${()=>e.onSelectAll(t.map(n=>n.key).filter(n=>n&&n!=="agent.main.main"))}
                  >
                    全部选择
                  </button>
                  <button
                    class="btn"
                    ?disabled=${e.loading||e.selectedKeys.length===0}
                    @click=${e.onClearSelection}
                  >
                    全部不选
                  </button>
                  <button
                    class="btn danger"
                    ?disabled=${e.loading||e.selectedKeys.length===0}
                    @click=${()=>e.onBulkDelete(e.selectedKeys)}
                  >
                    删除已选
                  </button>
                </div>
              </div>
            `:y}

      ${e.error?r`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:y}

      <div class="muted" style="margin-top: 12px;">
        ${e.result?`${i("sessionsStore")}: ${e.result.path}`:""}
      </div>

      <div class="table" style="margin-top: 16px;">
        <div class="table-head">
          ${e.bulkMode?r`<div></div>`:y}
          <div>${i("sessionsKey")}</div>
          <div>${i("sessionsLabel")}</div>
          <div>${i("sessionsKind")}</div>
          <div>${i("sessionsUpdated")}</div>
          <div>${i("sessionsTokens")}</div>
          <div>${i("sessionsThinking")}</div>
          <div>${i("sessionsVerbose")}</div>
          <div>${i("sessionsReasoning")}</div>
          <div>${i("sessionsActions")}</div>
        </div>
        ${t.length===0?r`
                <div class="muted">${i("sessionsNoFound")}</div>
              `:t.map(n=>Iy(n,e.basePath,e.onPatch,e.onDelete,e.loading,e.bulkMode,e.selectedKeys,e.onSelectionChange))}
      </div>
    </section>
  `}function Iy(e,t,n,s,a,o,l,c){const u=e.updatedAt?X(e.updatedAt):"n/a",f=e.thinkingLevel??"",p=Rc(e.modelProvider),g=Py(f,p),$=Tl(Ey(e.modelProvider),g),k=e.verboseLevel??"",S=Ty(Cy(),k),d=e.reasoningLevel??"",m=Tl(Ay,d),h=typeof e.displayName=="string"&&e.displayName.trim().length>0?e.displayName.trim():null,v=typeof e.label=="string"?e.label.trim():"",C=!!(h&&h!==e.key&&h!==v),A=e.kind!=="global",E=A?`${In("chat",t)}?session=${encodeURIComponent(e.key)}`:null,T=e.key==="agent.main.main",P=l.includes(e.key);return r`
    <div class="table-row">
      ${o?r`
              <div>
                <input
                  type="checkbox"
                  .checked=${P}
                  ?disabled=${a||T}
                  @change=${_=>c(e.key,_.target.checked)}
                />
              </div>
            `:y}
      <div class="mono session-key-cell">
        ${A?r`<a href=${E} class="session-link">${e.key}</a>`:e.key}
        ${C?r`<span class="muted session-key-display-name">${h}</span>`:y}
      </div>
      <div>
        <input
          .value=${e.label??""}
          ?disabled=${a}
          placeholder=${i("commonOptional")}
          @change=${_=>{const U=_.target.value.trim();n(e.key,{label:U||null})}}
        />
      </div>
      <div>${e.kind}</div>
      <div>${u}</div>
      <div>${xv(e)}</div>
      <div>
        <select
          .value=${g}
          ?disabled=${a}
          @change=${_=>{const U=_.target.value;n(e.key,{thinkingLevel:_y(U,p)})}}
        >
          ${$.map(_=>r`<option value=${_} ?selected=${_===g}>${_||i("commonInherit")}</option>`)}
        </select>
      </div>
      <div>
        <select
          .value=${k}
          ?disabled=${a}
          @change=${_=>{const U=_.target.value;n(e.key,{verboseLevel:U||null})}}
        >
          ${S.map(_=>r`<option value=${_.value} ?selected=${_.value===k}>${_.label}</option>`)}
        </select>
      </div>
      <div>
        <select
          .value=${d}
          ?disabled=${a}
          @change=${_=>{const U=_.target.value;n(e.key,{reasoningLevel:U||null})}}
        >
          ${m.map(_=>r`<option value=${_} ?selected=${_===d}>${_||i("commonInherit")}</option>`)}
        </select>
      </div>
      <div>
        <button class="btn danger" ?disabled=${a} @click=${()=>s(e.key)}>
          ${i("commonDelete")}
        </button>
      </div>
    </div>
  `}const Pl=r`
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
  </svg>
`;function xn(e){const t=(e??"").trim();return t||"其它"}function Dy(e){const t=new Map;for(const n of e){const s=xn(n.categoryCn);t.set(s,(t.get(s)??0)+1)}return[...t.entries()].sort((n,s)=>s[1]-n[1]).map(([n,s])=>({name:n,count:s}))}function Ry(e,t,n){const s=(t??"").trim().toLowerCase(),a=(n??"").trim()||"__all__",o=(e??[]).filter(u=>!(s&&!`${u.name??""} ${u.description??""} ${u.folder??""}`.toLowerCase().includes(s)||a!=="__all__"&&(u.status??"").trim().toLowerCase()!==a)),l=new Map;l.set("__all__",o.length);for(const u of o){const f=xn(u.categoryCn);l.set(f,(l.get(f)??0)+1)}return{orderedCategories:["__all__",...Array.from(l.keys()).filter(u=>u!=="__all__").sort((u,f)=>u.localeCompare(f,"zh-Hans-CN"))],counts:l}}function rn(e){return e?e.split(",").map(t=>t.trim()).filter(Boolean):[]}function Ny(e){const t=e.trimStart();if(!t.startsWith("---"))return e;const n=t.slice(3),s=n.search(/\r?\n/);if(s===-1)return e;const a=n.slice(s+(n[s]==="\r"?2:1)),o=a.match(/\r?\n\s*---\s*\r?\n?/);return o?a.slice(o.index+o[0].length).trimStart():e}function _l(e){const t=(e??"").trim().toLowerCase();return t?t==="open"?"开放":t==="paid"?"付费":t==="private"?"私有":e??"":""}function cn(e,t,n,s,a,o){return n?r`
      <div class="market-card-actions">
        ${e.onDelete?r`<button class="market-card-button market-card-button--danger" type="button" @click=${l=>{l.stopPropagation(),e.onDelete(t)}}>删除</button>`:y}
        ${e.onToggleEnabled?r`<button class="market-card-button market-card-button--ghost" type="button" @click=${l=>{l.stopPropagation(),e.onToggleEnabled(t,!s)}}>${s?"禁用":"启用"}</button>`:y}
      </div>
    `:e.onInstall?r`
      <button
        class="market-card-button market-card-button--primary"
        type="button"
        ?disabled=${a}
        @click=${l=>{l.stopPropagation(),e.onInstall(t,o)}}
      >
        ${a?"安装中":"安装"}
      </button>
    `:r`
    <a
      class="market-card-button market-card-button--primary"
      href=${`/api/v1/skills/${encodeURIComponent(t)}/download`}
      target="_blank"
      rel="noopener"
      title="下载"
      @click=${l=>l.stopPropagation()}
    >
      安装
    </a>
  `}function Ll(e,t,n,s){return r`
    <div class="market-card-meta">
      <span class="market-card-chip market-card-chip--muted">eligible</span>
      <span class="market-card-chip market-card-chip--state">${s?"已启用":"已禁用"}</span>
      ${n?r`<span class="market-card-chip">${n}</span>`:y}
      ${e.slice(0,2).map(a=>r`<span class="market-card-chip">${a}</span>`)}
      ${t.length>0?r`<span class="market-card-chip">OS: ${t.join("/")}</span>`:y}
    </div>
  `}function Uy(e){const t=Dy(e.items),n=e.selectedCategory||"__all__",s=e.selectedStatus||"__all__",a=(e.query??"").trim().toLowerCase(),o=e.items.filter(p=>{if(a&&!`${p.name??""} ${p.description??""} ${p.folder??""}`.toLowerCase().includes(a))return!1;const g=n==="__all__"?!0:xn(p.categoryCn)===n,$=s==="__all__"?!0:(p.status??"").trim().toLowerCase()===s;return g&&$}),l=new Map;for(const p of o){const g=xn(p.categoryCn),$=l.get(g)??[];$.push(p),l.set(g,$)}const c=n==="__all__"?t.map(p=>p.name).filter(p=>l.has(p)).map(p=>({name:p,items:l.get(p)??[]})):[{name:n,items:l.get(n)??[]}],u=!!e.selectedFolder,f=()=>e.onDetailClose?.()??e.onSelect("");return r`
    <main class="emp-page">
      <section class="emp-list-wrap">
        <div class="emp-content">
          <div class="emp-main">
            <div class="emp-toolbar">
              <h2 class="emp-toolbar__title">${n==="__all__"?"技能库":n}</h2>
              <div class="emp-toolbar__actions">
                <div class="row" style="gap: 8px; flex-wrap: wrap; align-items: center;">
                  <div class="emp-search">
                    <input
                      class="emp-search__input"
                      type="text"
                      placeholder="搜索技能"
                      .value=${e.query}
                      ?disabled=${e.loading}
                      @input=${p=>e.onQueryChange(p.target.value)}
                    />
                    <span class="emp-search__icon" aria-hidden="true">🔍</span>
                  </div>
                  <button class="btn" @click=${e.onRefresh} ?disabled=${e.loading}>刷新</button>
                  <button class="btn primary" ?disabled=${e.loading} @click=${e.onAddClick}>${i("skillsAdd")}</button>
                </div>
              </div>
            </div>

            ${e.error?r`<div class="callout danger" style="margin-bottom: 16px;">${e.error}</div>`:y}
            ${e.installSuccess?r`<div class="callout success" style="margin-bottom: 16px;">${e.installSuccess}</div>`:y}

            ${(()=>{const p=(e.items??[]).filter(g=>e.installedKeys?.has(g.folder));return p.length===0?y:r`
                <div class="emp-installed-section">
                  <h3 class="emp-section__title">已安装 (${p.length})</h3>
                  <div class="emp-grid emp-installed-grid">
                    ${p.map(g=>{const $=e.selectedFolder===g.folder,S=!(e.disabledKeys?.has(g.folder)??!1),d=e.installingFolder===g.folder,m=rn(g.tags),h=rn(g.os),v=_l(g.status);return r`
                        <div class="emp-card-wrap ${$?"active":""}">
                          <div class="emp-card emp-card-btn" @click=${()=>e.onSelect(g.folder)}>
                            <div class="emp-card__icon ${g.emoji?"":"emp-card__icon--default"}">
                              ${g.emoji?g.emoji:Pl}
                            </div>
                            <div class="emp-card__actions">
                              ${cn(e,g.folder,!0,S,d,g.categoryCn)}
                            </div>
                            <h3 class="emp-card__title">${g.name}</h3>
                            <p class="emp-card__desc">${g.description??g.folder}</p>
                            ${Ll(m,h,v,S)}
                          </div>
                        </div>
                      `})}
                  </div>
                </div>
              `})()}

            ${e.addModalOpen?r`
                  <div class="modal-overlay" @click=${e.onAddClose}>
                    <div class="modal card" @click=${p=>p.stopPropagation()}>
                      <div class="card-title">${i("skillsAddSkill")}</div>
                      <div class="field" style="margin-top: 12px;">
                        <span>${i("skillsUploadName")}</span>
                        <input
                          type="text"
                          .value=${e.uploadName}
                          @input=${p=>e.onUploadNameChange(p.target.value)}
                          placeholder=${i("skillsUploadNamePlaceholder")}
                          pattern="[a-zA-Z0-9][a-zA-Z0-9_-]{0,63}"
                          ?disabled=${e.uploadFiles.length>1}
                        />
                        ${e.uploadFiles.length>1?r`
                              <div class="muted" style="margin-top: 4px; font-size: 0.9em;">
                                已选择多个压缩包：将自动从每个文件名提取技能名称（此处无需填写）。
                              </div>
                            `:y}
                      </div>
                      <div class="field" style="margin-top: 12px;">
                        <span>${i("skillsUploadFile")}</span>
                        <input
                          type="file"
                          accept=".md,.zip"
                          multiple
                          @change=${p=>{const g=p.target,$=g.files?Array.from(g.files):[];e.onUploadFilesChange($)}}
                        />
                        <div class="muted" style="margin-top: 4px; font-size: 0.9em;">
                          ${i("skillsUploadFileHint")}
                        </div>
                        ${e.uploadFiles.length>0?r`
                              <div class="row" style="flex-wrap: wrap; gap: 4px; margin-top: 8px;">
                                ${e.uploadFiles.map(p=>r`<span class="chip" style="font-size: 12px;">${p.name}</span>`)}
                              </div>
                            `:y}
                      </div>
                      ${e.uploadError?r`
                            <div class="callout danger" style="margin-top: 12px;">
                              ${e.uploadError}
                            </div>
                          `:y}
                      ${e.uploadTemplate?r`
                            <details class="muted" style="margin-top: 12px;">
                              <summary>Template</summary>
                              <pre
                                style="
                                  margin-top: 8px;
                                  padding: 12px;
                                  background: var(--bg-muted, #f5f5f5);
                                  border-radius: 6px;
                                  overflow: auto;
                                  max-height: 200px;
                                  font-size: 0.85em;
                                  white-space: pre-wrap;
                                "
                              >${e.uploadTemplate}</pre>
                            </details>
                          `:y}
                      <div class="row" style="margin-top: 16px; justify-content: flex-end; gap: 8px;">
                        <button class="btn" ?disabled=${e.uploadBusy} @click=${e.onAddClose}>
                          ${i("commonCancel")}
                        </button>
                        <button
                          class="btn primary"
                          ?disabled=${e.uploadBusy||e.uploadFiles.length===0||e.uploadFiles.length===1&&!e.uploadName.trim()}
                          @click=${e.onUploadSubmit}
                        >
                          ${e.uploadBusy?i("commonLoading"):i("skillsUploadSubmit")}
                        </button>
                      </div>
                    </div>
                  </div>
                `:y}

            ${e.loading?r`<div class="emp-loading">加载中...</div>`:c.length===0?r`<div class="emp-empty">暂无匹配的技能</div>`:r`
                    <div class="emp-sections">
                      ${c.map(p=>r`
                          <div class="emp-section">
                            <h3 class="emp-section__title">${p.name}</h3>
                            <div class="emp-grid">
                              ${p.items.map(g=>{const $=e.selectedFolder===g.folder,k=e.installedKeys&&e.installedKeys.size>0?e.installedKeys.has(g.folder):!1,d=!(e.disabledKeys?.has(g.folder)??!1),m=e.installingFolder===g.folder,h=rn(g.tags),v=rn(g.os),C=_l(g.status);return r`
                                  <div class="emp-card-wrap ${$?"active":""}">
                                    <div class="emp-card emp-card-btn" @click=${()=>e.onSelect(g.folder)}>
                                      <div class="emp-card__icon ${g.emoji?"":"emp-card__icon--default"}">
                                        ${g.emoji?g.emoji:Pl}
                                      </div>
                                      <div class="emp-card__actions">
                                        ${cn(e,g.folder,k,d,m,g.categoryCn)}
                                      </div>
                                      <h3 class="emp-card__title">${g.name}</h3>
                                      <p class="emp-card__desc">${g.description??g.folder}</p>
                                      ${Ll(h,v,C,d)}
                                    </div>
                                  </div>
                                `})}
                            </div>
                          </div>
                        `)}
                    </div>
                  `}
          </div>
        </div>

        ${u?r`
              <div class="modal-overlay" @click=${f} role="dialog" aria-modal="true">
                <div class="modal card emp-detail-modal emp-detail-modal--large" @click=${p=>p.stopPropagation()}>
                  <div class="emp-detail-modal__header">
                    <div class="emp-detail-header" style="flex: 1; min-width: 0;">
                      <h1 id="emp-detail-title" class="emp-detail-title" style="margin: 0;">${e.selectedFolder}</h1>
                      <div class="emp-detail-meta-row" style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-top: 8px;">
                        ${(()=>{const p=e.selectedFolder??"",g=e.installedKeys?.has(p)??!1,k=!(e.disabledKeys?.has(p)??!1);return g?cn(e,p,!0,k,!1):e.onInstall?cn(e,p,!1,!1,e.installingFolder===p):cn(e,p,!1,!1,!1)})()}
                      </div>
                    </div>
                    <div class="emp-detail-meta-right" style="display: flex; align-items: flex-start; gap: 8px; flex-wrap: wrap; flex-shrink: 0;">
                      ${(()=>{const p=e.items.find(k=>k.folder===e.selectedFolder);if(!p)return y;const g=xn(p.categoryCn),$=rn(p.tags);return r`
                          ${g?r`<span class="badge ghost">${g}</span>`:y}
                          ${$.map(k=>r`<span class="badge ghost">${k}</span>`)}
                        `})()}
                      <button class="btn emp-detail-modal__close" aria-label="关闭" @click=${f}>×</button>
                    </div>
                  </div>
                  <div class="emp-detail-modal__body">
                    ${e.selectedDetail?.content?r`<div class="emp-detail-markdown emp-detail-content">${qt(jt(Ny(e.selectedDetail.content)))}</div>`:r`<div class="callout info">加载中或无内容</div>`}
                  </div>
                </div>
              </div>
            `:y}
      </section>
    </main>
  `}function Oy(e){return{prometheus:"Prometheus",elasticsearch:"Elasticsearch",filesystem:"Filesystem"}[e.toLowerCase()]??e.charAt(0).toUpperCase()+e.slice(1)}function Nc(e){return!e||typeof e!="object"?"":Object.entries(e).map(([t,n])=>`${t}=${n}`).join(`
`)}function Fy(e,t,n,s){if(n==="raw")return!s;const a=e,o=t??"stdio";return o==="stdio"?!!a?.command?.trim():o==="url"?!!a?.url?.trim():o==="service"?!!a?.service?.trim()&&!!a?.serviceUrl?.trim():!1}function Uc(e){const t={};for(const n of e.split(/\n/)){const s=n.trim();if(!s)continue;const a=s.indexOf("=");if(a>0){const o=s.slice(0,a).trim(),l=s.slice(a+1).trim();o&&(t[o]=l)}}return t}function By(e,t,n){const s=["npx","docker","uv"];if(e==="stdio"){const a=t?.command??"npx",o=s.includes(a)?a:"npx";return r`
      <div class="field">
        <span>${i("mcpCommand")} *</span>
        <select
          .value=${o}
          @change=${l=>n({command:l.target.value})}
        >
          ${s.map(l=>r`<option value=${l}>${l}</option>`)}
        </select>
      <div class="field">
        <span>${i("mcpArgs")}</span>
        <input
          type="text"
          .value={(draft?.args ?? []).join(" ")}
          placeholder="-y prometheus-mcp-server"
          @input=${l=>{const c=l.target.value;n({args:c.trim()?c.trim().split(/\s+/):[]})}}
        />
      </div>
      <div class="field">
        <span>${i("mcpEnv")}</span>
        <textarea
          style="min-height: 80px; font-family: var(--mono); font-size: 12px;"
          placeholder=${i("mcpEnvPlaceholder")}
          .value=${Nc(t?.env)}
          @input=${l=>{const c=l.target.value;n({env:Uc(c)})}}
        ></textarea>
      </div>
    `}return e==="url"?r`
      <div class="field">
        <span>${i("mcpUrl")} *</span>
        <input
          type="text"
          .value=${t?.url??""}
          placeholder="https://mcp.example.com/sse"
          @input=${a=>n({url:a.target.value})}
        />
      </div>
    `:r`
    <div class="field">
      <span>${i("mcpService")} *</span>
      <input
        type="text"
        .value=${t?.service??""}
        placeholder="prometheus"
        @input=${a=>n({service:a.target.value})}
      />
    </div>
    <div class="field">
      <span>${i("mcpServiceUrl")} *</span>
      <input
        type="text"
        .value=${t?.serviceUrl??""}
        placeholder="http://localhost:9090"
        @input=${a=>n({serviceUrl:a.target.value})}
      />
    </div>
  `}function Hy(e,t,n,s){const a=["npx","docker","uv"];if(e==="stdio"){const o=t.command??"npx",l=a.includes(o)?o:"npx";return r`
      <div class="field">
        <span>${i("mcpCommand")} *</span>
        <select
          .value=${l}
          @change=${c=>s(n,{command:c.target.value})}
        >
          ${a.map(c=>r`<option value=${c}>${c}</option>`)}
        </select>
      <div class="field">
        <span>${i("mcpArgs")}</span>
        <input
          type="text"
          .value=${(t.args??[]).join(" ")}
          placeholder="-y prometheus-mcp-server"
          @input=${c=>{const u=c.target.value;s(n,{args:u.trim()?u.trim().split(/\s+/):[]})}}
        />
      </div>
      <div class="field">
        <span>${i("mcpEnv")}</span>
        <textarea
          style="min-height: 80px; font-family: var(--mono); font-size: 12px;"
          placeholder=${i("mcpEnvPlaceholder")}
          .value=${Nc(t.env)}
          @input=${c=>{const u=c.target.value;s(n,{env:Uc(u)})}}
        ></textarea>
      </div>
    `}return e==="url"?r`
      <div class="field">
        <span>${i("mcpUrl")} *</span>
        <input
          type="text"
          .value=${t.url??""}
          placeholder="https://mcp.example.com/sse"
          @input=${o=>s(n,{url:o.target.value})}
        />
      </div>
    `:r`
    <div class="field">
      <span>${i("mcpService")} *</span>
      <input
        type="text"
        .value=${t.service??""}
        placeholder="prometheus"
        @input=${o=>s(n,{service:o.target.value})}
      />
    </div>
    <div class="field">
      <span>${i("mcpServiceUrl")} *</span>
      <input
        type="text"
        .value=${t.serviceUrl??""}
        placeholder="http://localhost:9090"
        @input=${o=>s(n,{serviceUrl:o.target.value})}
      />
    </div>
  `}function zy(e){return Oy(e)}function Wy(e){if(!e.open)return y;const{serverKey:t,entry:n}=e;return r`
    <div class="modal-overlay" @click=${e.onCancel}>
      <div class="modal card" style="max-width: 560px;" @click=${s=>s.stopPropagation()}>
        <div class="card-title">${zy(t)} ${i("configSettingsTitle")}</div>
        <div class="row" style="margin-bottom: 12px; gap: 8px;">
          <button
            class="btn ${e.editMode==="form"?"primary":""}"
            @click=${()=>e.onEditModeChange("form")}
          >
            ${i("mcpFormMode")}
          </button>
          <button
            class="btn ${e.editMode==="raw"?"primary":""}"
            @click=${()=>{e.onEditModeChange("raw"),e.onRawChange(t,JSON.stringify(n,null,2))}}
          >
            ${i("mcpRawMode")}
          </button>
        </div>
        ${e.editMode==="form"?r`
                <div class="config-form">
                  <div class="field">
                    <span>${i("mcpEnabled")}</span>
                    <div class="row" style="align-items: center; gap: 8px;">
                      <input
                        type="checkbox"
                        ?checked=${n.enabled!==!1}
                        @change=${s=>e.onFormPatch(t,{enabled:s.target.checked})}
                      />
                    </div>
                  </div>
                  <div class="mcp-connection-tabs" style="display: flex; gap: 4px; margin-bottom: 16px; border-bottom: 1px solid var(--input, #333); padding-bottom: 4px;">
                    <button
                      type="button"
                      class="btn ${(e.editConnectionType??"stdio")==="stdio"?"primary":""}"
                      style="flex: 1; min-width: 0;"
                      @click=${()=>e.onEditConnectionTypeChange("stdio")}
                    >
                      ${i("mcpConnectionTypeStdio")}
                    </button>
                    <button
                      type="button"
                      class="btn ${(e.editConnectionType??"stdio")==="url"?"primary":""}"
                      style="flex: 1; min-width: 0;"
                      @click=${()=>e.onEditConnectionTypeChange("url")}
                    >
                      ${i("mcpConnectionTypeUrl")}
                    </button>
                    <button
                      type="button"
                      class="btn ${(e.editConnectionType??"stdio")==="service"?"primary":""}"
                      style="flex: 1; min-width: 0;"
                      @click=${()=>e.onEditConnectionTypeChange("service")}
                    >
                      ${i("mcpConnectionTypeService")}
                    </button>
                  </div>
                  <div class="mcp-connection-fields" style="margin-bottom: 12px;">
                    ${Hy(e.editConnectionType==="stdio"||e.editConnectionType==="url"||e.editConnectionType==="service"?e.editConnectionType:"stdio",n,t,e.onFormPatch)}
                  </div>
                  <div class="field">
                    <span>${i("mcpToolPrefix")}</span>
                    <input
                      type="text"
                      .value=${n.toolPrefix??""}
                      placeholder="Optional"
                      @input=${s=>e.onFormPatch(t,{toolPrefix:s.target.value})}
                    />
                  </div>
                </div>
              `:r`
                <div class="field">
                  <span>${i("mcpRawJson")}</span>
                  <textarea
                    style="min-height: 200px; font-family: var(--mono);"
                    .value=${e.rawJson}
                    @input=${s=>e.onRawChange(t,s.target.value)}
                  ></textarea>
                  ${e.rawError?r`<div class="callout danger" style="margin-top: 8px;">${e.rawError}</div>`:y}
                </div>
              `}
        <div class="row" style="margin-top: 16px; gap: 8px;">
          <button
            class="btn primary"
            ?disabled=${e.saving||!e.formDirty&&e.editMode==="form"}
            @click=${e.onSave}
          >
            ${e.saving?i("commonSaving"):i("commonSave")}
          </button>
          <button class="btn" ?disabled=${e.saving} @click=${e.onCancel}>
            ${i("commonCancel")}
          </button>
        </div>
      </div>
    </div>
  `}const Il=r`
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <rect x="4" y="4" width="8" height="8" rx="1"/>
    <rect x="12" y="12" width="8" height="8" rx="1"/>
  </svg>
`;function mn(e){const t=(e??"").trim();return t||"其它"}function Oc(e){return(e??"").trim().toLowerCase()}function Fc(e){const t=(e??"").trim().toLowerCase();return t?t==="open"?"开放":t==="paid"?"收费":t==="private"?"私有":e??"":""}function Bc(e){return e?e.split(",").map(t=>t.trim()).filter(Boolean):[]}function Ky(e,t){const n=Oc(t),s=(e??[]).filter(l=>n?`${l.name??""} ${l.description??""}`.toLowerCase().includes(n):!0),a=new Map;a.set("__all__",s.length);for(const l of s){const c=mn(l.category);a.set(c,(a.get(c)??0)+1)}return{orderedCategories:["__all__",...Array.from(a.keys()).filter(l=>l!=="__all__").sort((l,c)=>l.localeCompare(c,"zh-Hans-CN"))],counts:a}}function qy(e){const t=e.trimStart();if(!t.startsWith("---"))return e;const n=t.slice(3),s=n.search(/\r?\n/);if(s===-1)return e;const a=n.slice(s+(n[s]==="\r"?2:1)),o=a.match(/\r?\n\s*---\s*\r?\n?/);return o?a.slice(o.index+o[0].length).trimStart():e}function la(e,t,n,s,a){return n?r`
      <div class="market-card-actions">
        ${e.onDelete?r`<button class="market-card-button market-card-button--danger" type="button" @click=${o=>{o.stopPropagation(),e.onDelete(n)}}>删除</button>`:y}
        ${e.onToggleEnabled?r`<button class="market-card-button market-card-button--ghost" type="button" @click=${o=>{o.stopPropagation(),e.onToggleEnabled(n,!s)}}>${s?"禁用":"启用"}</button>`:y}
        ${e.onEdit?r`<button class="market-card-button market-card-button--primary" type="button" @click=${o=>{o.stopPropagation(),e.onEdit(n)}}>编辑</button>`:y}
      </div>
    `:e.onInstall?r`
      <button
        class="market-card-button market-card-button--primary"
        type="button"
        ?disabled=${a}
        @click=${o=>{o.stopPropagation(),e.onInstall(t.id,t.category)}}
      >
        ${a?"安装中":"安装"}
      </button>
    `:r`
    <a
      class="market-card-button market-card-button--primary"
      href=${`/api/v1/mcps/${t.id}/download`}
      target="_blank"
      rel="noopener"
      title="下载"
      @click=${o=>o.stopPropagation()}
    >
      安装
    </a>
  `}function Dl(e,t){const n=Bc(e.tags),s=Fc(e.status);return r`
    <div class="market-card-meta">
      <span class="market-card-chip market-card-chip--muted">stdio</span>
      <span class="market-card-chip market-card-chip--state">${t?"已启用":"已禁用"}</span>
      ${s?r`<span class="market-card-chip">${s}</span>`:y}
      ${n.slice(0,2).map(a=>r`<span class="market-card-chip">${a}</span>`)}
    </div>
  `}function jy(e){const t=(e.category??"").trim()||"__all__",n=Oc(e.query),s=(e.items??[]).filter(p=>n?`${p.name??""} ${p.description??""}`.toLowerCase().includes(n):!0),a=new Map;a.set("__all__",s.length);for(const p of s){const g=mn(p.category);a.set(g,(a.get(g)??0)+1)}[...Array.from(a.keys()).filter(p=>p!=="__all__").sort((p,g)=>p.localeCompare(g,"zh-Hans-CN"))];const o=t==="__all__"?s:s.filter(p=>mn(p.category)===t),l=new Map;for(const p of o){const g=mn(p.category),$=l.get(g)??[];$.push(p),l.set(g,$)}const c=t==="__all__"?Array.from(l.entries()).sort((p,g)=>p[0].localeCompare(g[0],"zh-Hans-CN")).map(([p,g])=>({title:p==="其它"?"其它":p,items:g})):[{title:t,items:o}],u=e.selectedDetail!==null,f=()=>e.onDetailClose?.()??e.onSelect(-1);return r`
    <main class="emp-page">
      <section class="emp-list-wrap">
        <div class="emp-content">
          <div class="emp-main">
            <div class="emp-toolbar">
              <h2 class="emp-toolbar__title">${t==="__all__"?"工具库（MCP）":t}</h2>
              <div class="emp-toolbar__actions">
                <div class="row" style="gap: 8px; flex-wrap: wrap; align-items: center;">
                  <div class="emp-search">
                    <input
                      class="emp-search__input"
                      type="text"
                      placeholder="搜索 MCP 名称或描述..."
                      .value=${e.query}
                      ?disabled=${e.loading}
                      @input=${p=>e.onQueryChange(p.target.value)}
                    />
                    <span class="emp-search__icon" aria-hidden="true">🔍</span>
                  </div>
                  ${e.onAddServer?r`
                        <button class="btn primary" ?disabled=${e.loading} @click=${e.onAddServer}>
                          ${i("mcpAddServer")}
                        </button>
                      `:y}
                  <button class="btn" @click=${e.onRefresh} ?disabled=${e.loading}>刷新</button>
                </div>
              </div>
            </div>

            ${e.addModalOpen&&e.onAddClose?r`
                    <div class="modal-overlay" @click=${e.onAddClose}>
                      <div class="modal card" style="max-width: 520px;" @click=${p=>p.stopPropagation()}>
                        <div class="card-title">${i("mcpAddServer")}</div>
                        <div class="field" style="margin-top: 12px;">
                          <span>${i("mcpServerName")} *</span>
                          <input
                            type="text"
                            .value=${e.addName??""}
                            @input=${p=>e.onAddNameChange?.(p.target.value)}
                            placeholder="prometheus, my-mcp"
                          />
                        </div>
                        <div class="row" style="margin: 12px 0; gap: 8px;">
                          <button
                            class="btn ${(e.addEditMode??"form")==="form"?"primary":""}"
                            @click=${()=>e.onAddEditModeChange?.("form")}
                          >
                            ${i("mcpFormMode")}
                          </button>
                          <button
                            class="btn ${(e.addEditMode??"form")==="raw"?"primary":""}"
                            @click=${()=>e.onAddEditModeChange?.("raw")}
                          >
                            ${i("mcpRawMode")}
                          </button>
                        </div>
                        ${(e.addEditMode??"form")==="form"?r`
                                <div class="config-form" id="tool-library-mcp-add-form">
                                  <div class="mcp-connection-tabs" style="display: flex; gap: 4px; margin-bottom: 16px; border-bottom: 1px solid var(--input, #333); padding-bottom: 4px;">
                                    <button
                                      type="button"
                                      class="btn ${(e.addConnectionType??"stdio")==="stdio"?"primary":""}"
                                      style="flex: 1; min-width: 0;"
                                      @click=${()=>e.onAddConnectionTypeChange?.("stdio")}
                                    >
                                      ${i("mcpConnectionTypeStdio")}
                                    </button>
                                    <button
                                      type="button"
                                      class="btn ${(e.addConnectionType??"stdio")==="url"?"primary":""}"
                                      style="flex: 1; min-width: 0;"
                                      @click=${()=>e.onAddConnectionTypeChange?.("url")}
                                    >
                                      ${i("mcpConnectionTypeUrl")}
                                    </button>
                                    <button
                                      type="button"
                                      class="btn ${(e.addConnectionType??"stdio")==="service"?"primary":""}"
                                      style="flex: 1; min-width: 0;"
                                      @click=${()=>e.onAddConnectionTypeChange?.("service")}
                                    >
                                      ${i("mcpConnectionTypeService")}
                                    </button>
                                  </div>
                                  <div class="mcp-connection-fields" style="margin-bottom: 12px;">
                                    ${By(e.addConnectionType==="stdio"||e.addConnectionType==="url"||e.addConnectionType==="service"?e.addConnectionType:"stdio",e.addDraft,p=>e.onAddFormPatch?.(p))}
                                  </div>
                                  <div class="field">
                                    <span>${i("mcpToolPrefix")}</span>
                                    <input
                                      type="text"
                                      .value=${e.addDraft?.toolPrefix??""}
                                      placeholder="Optional"
                                      @input=${p=>e.onAddFormPatch?.({toolPrefix:p.target.value})}
                                    />
                                  </div>
                                </div>
                              `:r`
                                <div class="field">
                                  <span>${i("mcpRawJson")}</span>
                                  <textarea
                                    style="min-height: 180px; font-family: var(--mono);"
                                    .value=${e.addRawJson??"{}"}
                                    @input=${p=>e.onAddRawChange?.(p.target.value)}
                                  ></textarea>
                                  ${e.addRawError?r`<div class="callout danger" style="margin-top: 8px;">${e.addRawError}</div>`:y}
                                </div>
                              `}
                        <div class="row" style="margin-top: 16px; gap: 8px; justify-content: flex-end;">
                          <button class="btn" @click=${e.onAddClose}>${i("commonCancel")}</button>
                          <button
                            class="btn primary"
                            ?disabled=${e.saving||!(e.addName??"").trim()||!Fy(e.addDraft,e.addConnectionType??"stdio",e.addEditMode??"form",e.addRawError??null)}
                            @click=${e.onAddSubmit}
                          >
                            ${e.saving?i("commonSaving"):i("mcpAddServer")}
                          </button>
                        </div>
                      </div>
                    </div>
                  `:y}

            ${e.error?r`<div class="callout danger" style="margin-bottom: 16px;">${e.error}</div>`:y}

            ${(()=>{const p=(e.items??[]).filter(g=>e.installedRemoteIds?.has(String(g.id)));return p.length===0?y:r`
                <div class="emp-installed-section">
                  <h3 class="emp-section__title">已安装 (${p.length})</h3>
                  <div class="emp-grid emp-installed-grid">
                    ${p.map(g=>{const $=e.selectedId===g.id,k=wn(g.logo_url),S=e.installedMcpMap?.get(g.id),m=!(S?e.disabledMcpKeys?.has(S)??!1:!1),h=e.installingId===g.id;return r`
                        <div class="emp-card-wrap ${$?"active":""}">
                          <div class="emp-card emp-card-btn" @click=${()=>e.onSelect(g.id)}>
                            <div class="emp-card__icon ${k?"":"emp-card__icon--default"}">
                              ${k?r`<img src=${k} alt="" />`:Il}
                            </div>
                            <div class="emp-card__actions">
                              ${la(e,g,S,m,h)}
                            </div>
                            <h3 class="emp-card__title">${g.name}</h3>
                            <p class="emp-card__desc">${g.description??"暂无描述"}</p>
                            ${Dl(g,m)}
                          </div>
                        </div>
                      `})}
                  </div>
                </div>
              `})()}

            ${e.loading?r`<div class="emp-loading">加载中...</div>`:o.length===0?r`<div class="emp-empty">暂无匹配的 MCP</div>`:r`
                      <div class="emp-sections">
                        ${c.map(p=>p.items.length>0?r`
                                  <div class="emp-section">
                                    <h3 class="emp-section__title">${p.title}</h3>
                                    <div class="emp-grid">
                                      ${p.items.map(g=>{const $=e.selectedId===g.id,k=wn(g.logo_url),S=e.installedRemoteIds?.has(String(g.id))??!1,d=e.installedMcpMap?.get(g.id),h=!(d?e.disabledMcpKeys?.has(d)??!1:!1),v=e.installingId===g.id;return r`
                                          <div class="emp-card-wrap ${$?"active":""}">
                                            <div class="emp-card emp-card-btn" @click=${()=>e.onSelect(g.id)}>
                                              <div class="emp-card__icon ${k?"":"emp-card__icon--default"}">
                                                ${k?r`<img src=${k} alt="" />`:Il}
                                              </div>
                                              <div class="emp-card__actions">
                                                ${la(e,g,S?d:void 0,h,v)}
                                              </div>
                                              <h3 class="emp-card__title">${g.name}</h3>
                                              <p class="emp-card__desc">${g.description??"暂无描述"}</p>
                                              ${Dl(g,h)}
                                            </div>
                                          </div>
                                        `})}
                                    </div>
                                  </div>
                                `:y)}
                      </div>
                    `}
          </div>
        </div>

        ${u&&e.selectedDetail?r`
              <div class="modal-overlay" @click=${f} role="dialog" aria-modal="true">
                <div class="modal card emp-detail-modal emp-detail-modal--large" @click=${p=>p.stopPropagation()}>
                  <div class="emp-detail-modal__header">
                    <div class="emp-detail-header" style="flex: 1; min-width: 0;">
                      <h1 id="emp-detail-title" class="emp-detail-title" style="margin: 0;">${e.selectedDetail.name??`#${e.selectedDetail.id}`}</h1>
                      <div class="card-sub" style="margin-top: 6px;">${e.selectedDetail.description??""}</div>
                      <div class="emp-detail-meta-row" style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-top: 8px;">
                        ${(()=>{const p=e.selectedDetail?.id??0,g=e.installedRemoteIds?.has(String(p))??!1,$=e.installedMcpMap?.get(p),S=!($?e.disabledMcpKeys?.has($)??!1:!1),d=e.installingId===p;return la(e,e.selectedDetail,g?$:void 0,S,d)})()}
                      </div>
                    </div>
                    <div class="emp-detail-meta-right" style="display: flex; align-items: flex-start; gap: 8px; flex-wrap: wrap; flex-shrink: 0;">
                      ${(e.selectedDetail.category??"").trim()?r`<span class="badge ghost">${mn(e.selectedDetail.category)}</span>`:y}
                      ${(e.selectedDetail.status??"").trim()?r`<span class="badge">${Fc(e.selectedDetail.status)}</span>`:y}
                      ${(e.selectedDetail.tags??"").trim()?Bc(e.selectedDetail.tags).map(p=>r`<span class="badge ghost">${p}</span>`):y}
                      <button class="btn emp-detail-modal__close" aria-label="关闭" @click=${f}>×</button>
                    </div>
                  </div>
                  <div class="emp-detail-modal__body">
                    ${e.selectedDetail.readme?r`<div class="emp-detail-markdown emp-detail-content">${qt(jt(qy(e.selectedDetail.readme)))}</div>`:r`<div class="callout info">无 README</div>`}
                  </div>
                </div>
              </div>
            `:y}
      </section>
    </main>
  `}const Qy={"octa-icon-plane":r`
    <svg t="1773901020130" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7094" width="200" height="200"><path d="M704 864c-6.4 0-12.8 0-19.2-6.4l-153.6-102.4L454.4 832c-6.4 6.4-25.6 12.8-32 6.4-12.8-6.4-19.2-19.2-19.2-32l0-140.8c0-6.4 0-12.8 6.4-19.2L652.8 384c12.8-12.8 32-12.8 44.8 0 12.8 12.8 12.8 32 0 44.8l-236.8 256 0 51.2 44.8-38.4c12.8-12.8 25.6-12.8 38.4-6.4l140.8 89.6 108.8-531.2L256 512l121.6 76.8C390.4 595.2 396.8 620.8 384 633.6c-6.4 12.8-32 19.2-44.8 12.8L172.8 537.6C166.4 531.2 160 524.8 160 512c0-12.8 6.4-19.2 19.2-25.6l640-320c12.8-6.4 25.6-6.4 32 0 12.8 6.4 12.8 19.2 12.8 32l-128 640c0 12.8-6.4 19.2-19.2 25.6C710.4 864 710.4 864 704 864z" p-id="7095"></path></svg>
  `,"octa-icon-grass":r`
    <svg t="1773900984139" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6109" width="200" height="200"><path d="M938.642286 298.642286v106.715428A277.357714 277.357714 0 0 1 661.211429 682.642286H554.642286v213.357714H469.284571V597.357714l0.804572-42.642285a277.357714 277.357714 0 0 1 276.48-256h192.073143zM255.926857 128a298.788571 298.788571 0 0 1 283.428572 204.214857 319.195429 319.195429 0 0 0-112.054858 222.500572H384A298.642286 298.642286 0 0 1 85.284571 256V128h170.642286z" p-id="6110"></path></svg>
  `,"octa-icon-cap":r`
    <svg t="1773901148418" class="icon" viewBox="0 0 1501 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11216" width="200" height="200"><path d="M1403.062529 303.010087L775.870856 23.143025a89.682024 89.682024 0 0 0-73.125688 0L75.553496 303.010087A89.682024 89.682024 0 0 0 22.389508 384.918026c0 32.059699 17.161237 61.251725 44.359332 77.247969 8.244563 9.476766 17.586907 16.802777 25.271377 22.694951 16.982007 12.926937 21.552363 17.766137 21.552363 27.063674 0 9.275133-4.570355 14.114333-21.552363 27.041269-17.900559 13.688663-45.031444 34.389685-45.031443 74.604332 0 40.192244 27.130885 60.893265 45.031443 74.604332 12.299633 9.364748 18.034981 14.495196 20.320159 20.140929a59.638658 59.638658 0 0 0-54.485806 51.797362l-15.794611 123.825268a59.77308 59.77308 0 0 0 59.325006 67.39034h86.007817a59.77308 59.77308 0 0 0 59.325006-67.39034l-15.772207-123.825268a59.728273 59.728273 0 0 0-58.160013-52.133417c-3.114115-35.353044-27.668574-54.553017-44.448948-67.367936-16.9372-12.904533-21.529959-17.743733-21.529958-27.04127 0-9.297537 4.592759-14.114333 21.507555-27.04127 17.96777-13.711066 45.076251-34.412088 45.076251-74.604331 0-0.492881-0.112019-0.896148-0.112019-1.366626l106.238361 47.473447a83.565813 83.565813 0 0 0-0.985763 11.13464v235.14927c0 170.133723 326.332342 188.504759 466.669139 188.504759 140.29199 0 466.646735-18.371037 466.646735-188.504759v-239.719625c0-4.099878-0.403267-8.132544-0.940955-12.120403l192.089352-85.582147a89.682024 89.682024 0 0 0 0.067211-163.883089zM101.384965 891.510564l15.794611-123.825268H171.598171l15.794611 123.825268H101.384965z m1020.735125-186.846885c-15.861822 20.096122-54.754651 43.62001-120.621538 62.461525-11.851559 3.382959-24.576862 6.586689-37.795048 9.566381a29.931348 29.931348 0 0 0 13.106167 58.361647c14.33837-3.20373 28.161455-6.721111 41.110795-10.417722 42.096558-12.030789 77.023932-26.638003 104.199624-43.306359v22.9862c0 54.553017-168.767097 98.777928-376.919904 98.777928-208.197614 0-376.964711-44.22491-376.964711-98.777928v-24.644074c82.131976 51.998995 230.982181 78.838632 378.734604 78.838632 34.479299 0 68.667351-1.433837 101.668005-4.279107a29.908944 29.908944 0 1 0-5.130448-59.593851c-31.27557 2.688444-63.738536 4.05507-96.537557 4.05507-209.833085 0-351.536508-54.060136-378.734604-98.643505v-102.36252l333.479123 149.029434a89.83885 89.83885 0 0 0 73.125688 0.044807l347.279804-154.719974v112.623416z m-383.797841-39.878592L112.116339 384.94043 739.308012 105.073368l627.191673 279.867062-628.177436 279.844657z" p-id="11217"></path></svg>
  `,"octa-icon-combat":r`
    <svg t="1773901241681" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14447" width="200" height="200"><path d="M300.690286 571.977143l150.820571 150.893714-60.269714 60.342857 60.342857 60.342857-60.342857 60.342858-105.545143-105.618286-120.685714 120.685714-60.342857-60.342857 120.685714-120.685714-105.618286-105.545143 60.342857-60.342857 60.342857 60.269714 60.269715-60.342857zM128 128l151.332571 0.146286 504.173715 504.173714 60.342857-60.269714 60.342857 60.342857-105.545143 105.545143 120.685714 120.685714-60.342857 60.342857-120.685714-120.685714-105.618286 105.618286-60.342857-60.342858 60.342857-60.342857L128 278.674286l-0.146286-150.674286z m616.886857 0l151.113143 0.146286 0.073143 150.308571-172.909714 172.909714-150.893715-150.893714 172.617143-172.470857z" p-id="14448"></path></svg>
  `};function Vy(e){const t=(e??"").trim();return t?Qy[t]??null:null}const Rl=[{color:"#f97316",subtle:"rgba(249,115,22,0.2)"},{color:"#3b82f6",subtle:"rgba(59,130,246,0.2)"},{color:"#22c55e",subtle:"rgba(34,197,94,0.2)"},{color:"#8b5cf6",subtle:"rgba(139,92,246,0.2)"},{color:"#ef4444",subtle:"rgba(239,68,68,0.2)"}];function Gy(e,t){const n=(e??"").trim().toLowerCase();if(n==="green"||n==="violet"||n==="orange")return`--accent:${n==="green"?"#22c55e":n==="violet"?"#8b5cf6":"#f97316"};--accent-subtle:${n==="green"?"rgba(34,197,94,0.14)":n==="violet"?"rgba(139,92,246,0.14)":"rgba(249,115,22,0.14)"};`;const s=Rl[(t??0)%Rl.length];return`--accent:${s.color};--accent-subtle:${s.subtle};`}function Jy(e){return(e??"").trim().toLowerCase()}function Jn(e,t){return t?(e??"").toLowerCase().includes(t):!0}function Hc(e){const t=(e??"").trim();if(!t)return null;try{const n=new URL(t),s=n.hostname.toLowerCase();if(!s.includes("bilibili.com")&&!s.includes("b23.tv"))return null;const a=n.pathname,o=a.match(/\/video\/(BV[0-9A-Za-z]+)/i);if(o)return`https://player.bilibili.com/player.html?bvid=${o[1]}&high_quality=1`;const l=a.match(/\/video\/av(\d+)/i);return l?`https://player.bilibili.com/player.html?aid=${l[1]}&high_quality=1`:null}catch{return null}}function Yy(e){const t=[...e.categories??[]].sort((c,u)=>(c.sort_order??0)-(u.sort_order??0)||c.name.localeCompare(u.name,"zh-Hans-CN")),n=e.selectedCategoryId&&t.some(c=>c.id===e.selectedCategoryId)?e.selectedCategoryId:t[0]?.id??null,s=n?t.find(c=>c.id===n)??null:null,a=Jy(e.query),o=(s?.courses??[]).slice().sort((c,u)=>(c.sort_order??0)-(u.sort_order??0)||c.title.localeCompare(u.title,"zh-Hans-CN")).filter(c=>Jn(c.title??"",a)?!0:(c.lessons??[]).some(u=>Jn(u.title??"",a))),l=e.playingLink?Hc(e.playingLink):null;return l?r`
    <main class="emp-page tutorials-page">
      <section class="emp-list-wrap">
        <div class="emp-content">
          <div class="emp-main tutorials-video-context">
            <div class="tutorials-video-header">
              <button class="btn btn--sm" type="button" @click=${e.onPlayingClose}>返回教程</button>
            </div>
            <div class="tutorials-video-wrap">
              <iframe
                src=${l}
                scrolling="no"
                border="0"
                frameborder="no"
                framespacing="0"
                allowfullscreen="true"
                title="B站视频播放"
              ></iframe>
              <a
                class="tutorials-bilibili-link"
                href=${e.playingLink}
                target="_blank"
                rel="noopener noreferrer"
              >在哔哩哔哩打开</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  `:r`
    <main class="emp-page tutorials-page">
      <section class="emp-list-wrap">
        <div class="emp-content">
          <div class="emp-main">
            <div class="emp-toolbar">
              <h2 class="emp-toolbar__title">OpenOcta 教程</h2>
              <div class="emp-toolbar__actions">
                <div class="emp-search">
                  <input
                    class="emp-search__input"
                    type="text"
                    placeholder="搜索课程/课时"
                    .value=${e.query}
                    ?disabled=${e.loading}
                    @input=${c=>e.onQueryChange(c.target.value)}
                  />
                  <span class="emp-search__icon" aria-hidden="true">🔍</span>
                </div>
                <button class="btn" @click=${e.onRefresh} ?disabled=${e.loading}>刷新</button>
              </div>
            </div>

            ${e.error?r`<div class="callout danger" style="margin-bottom: 16px;">${e.error}</div>`:y}

            <div class="tutorials-list" style="margin-top: 14px;">
          ${s?o.length?r`
                  <div class="card tutorials-card">
                    ${o.map((c,u)=>{const f=(c.course_type??"").trim().toLowerCase()==="standalone",p=(c.lessons??[]).slice().sort((S,d)=>(S.sort_order??0)-(d.sort_order??0)||S.title.localeCompare(d.title,"zh-Hans-CN")).filter(S=>Jn(S.title??"",a)||Jn(c.title??"",a)),g=f&&p.length===0?[{id:c.id,title:c.title,duration:c.duration,link:c.link}]:p,$=String(u+1);return r`
                        <details ?open=${!0} class="tutorials-course">
                          <summary class="tutorials-course__summary">
                            <span class="tutorials-course__title-row">
                              <span class="tutorials-course__num">${$}</span>
                              <span class="tutorials-course__title">${c.title}</span>
                              <span class="tutorials-course__meta">${g.length} 课时</span>
                            </span>
                          </summary>

                          <div class="tutorials-lessons">
                            ${g.map((S,d)=>{const m=String(d+1).padStart(2,"0"),h=!!(S.link??"").trim();return r`
                                <div
                                  class="tutorials-lesson ${h?"tutorials-lesson--clickable":"tutorials-lesson--disabled"}"
                                  @click=${()=>{h&&e.onLessonClick(S.link)}}
                                  role=${h?"button":"none"}
                                  tabindex=${h?0:y}
                                  @keydown=${C=>{h&&(C.key==="Enter"||C.key===" ")&&(C.preventDefault(),e.onLessonClick(S.link))}}
                                >
                                  <span class="tutorials-lesson__index">${m}</span>
                                  <span class="tutorials-lesson__title">${S.title}</span>
                                  ${(S.duration??"").trim()?r`<span class="tutorials-lesson__duration">${S.duration}</span>`:y}
                                </div>
                              `})}
                          </div>
                        </details>
                      `})}
                  </div>
                `:r`<div class="emp-empty">没有匹配的课程/课时</div>`:r`<div class="emp-empty">暂无分类数据，请点击"刷新"。</div>`}
            </div>
          </div>
        </div>
      </section>
    </main>
  `}async function Zy(e){const t=Vt(e.gatewayHost.trim());if(!t)return{ok:!1,detail:"未配置网关地址（Gateway URL）"};const n=`${t.replace(/\/$/,"")}/api/desktop/uninstall`,s={"Content-Type":"application/json",Accept:"application/json"},a=(e.token??"").trim();a&&(s.Authorization=`Bearer ${a}`,s["X-Gateway-Token"]=a);let o;try{o=await fetch(n,{method:"POST",headers:s,body:JSON.stringify({mode:e.mode})})}catch(c){return{ok:!1,detail:c instanceof Error?c.message:String(c)}}let l={};try{l=await o.json()}catch{}return o.ok?l.ok===!1?{ok:!1,message:l.message,detail:l.detail,httpStatus:o.status}:{ok:!0,message:l.message,detail:l.detail}:{ok:!1,message:l.message??l.error??(o.status===401?"网关令牌无效或未提供":`请求失败（HTTP ${o.status}）`),detail:l.detail,httpStatus:o.status}}function Xy(e){const t=(e??"").trim();if(!t)return null;try{const n=new URL(t);return n.protocol!=="http:"&&n.protocol!=="https:"?null:n.href}catch{return null}}async function Yn(e,t){const n=Xy(e);if(!n)return;const s=globalThis.runtime;if(typeof s?.BrowserOpenURL=="function")try{s.BrowserOpenURL(n);return}catch{}const a=Vt((t?.gatewayHost??"").trim()),o=(t?.gatewayToken??"").trim();if(a&&o)try{const c=await fetch(`${a.replace(/\/$/,"")}/api/desktop/open-url`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${o}`,"X-Gateway-Token":o},body:JSON.stringify({url:n})});if(c.ok&&(await c.json()).ok===!0)return}catch{}const l=window.open(n,"_blank","noopener,noreferrer");if(l){try{l.opener=null}catch{}return}window.location.assign(n)}function eb(e){const t=e.basePath?`${e.basePath}/wechat.png`:"/wechat.png";return r`
    <div class="about-page emp-page">
      <div class="about-page__inner">
        <section class="about-hero card">
          <h2 class="about-hero__title">OpenOcta 八爪鱼</h2>
          <p class="about-hero__lead">
            <strong>OpenOcta 八爪鱼</strong> —— 开源企业级智能体，专为运维而生
          </p>
        </section>

        <section class="about-section card">
          <h3 class="about-section__title">加入社群</h3>
          <p class="muted">扫描下方二维码加入微信群，获取更新与交流支持。</p>
          <div class="about-qr-wrap">
            <img class="about-qr" src=${t} width="200" height="200" alt="OpenOcta 微信群二维码" loading="lazy" />
          </div>
        </section>

        <section class="about-section card">
          <h3 class="about-section__title">商务合作</h3>
          <p>
            商业授权、合作咨询请联系邮箱：
            <a href="mailto:zhanghp@databuff.com"><strong>zhanghp@databuff.com</strong></a>
          </p>
          <p class="muted small">如需电话沟通，请在邮件中说明需求与联系方式，我们会尽快回复。</p>
        </section>

        <section class="about-section card about-section--legal">
          <h3 class="about-section__title">版权声明</h3>
          <p>本仓库遵循 <strong>GPLv3</strong> 开源限制。</p>
          <p>你可以基于 OpenOcta 的源代码进行二次开发，但是需要遵守以下规定：</p>
          <ul class="about-list">
            <li>不能替换和修改 OpenOcta 的 Logo 和版权信息；</li>
            <li>二次开发后的衍生作品必须遵守 GPLv3 的开源义务。</li>
          </ul>
          <p>如需商业授权，请联系：<strong>zhanghp@databuff.com</strong>。</p>
        </section>

        <section class="about-section card about-section--danger">
          <h3 class="about-section__title">卸载 OpenOcta</h3>
          <p class="muted">
            在桌面应用或本机已连接网关时，可选择仅删除程序或一并清除本地数据目录。操作将安排在数秒后执行；桌面版在确认成功后会自动退出应用，请先保存工作。
          </p>
          <button type="button" class="btn btn--danger-outline" @click=${e.onOpenUninstallModal}>
            <span class="btn__icon" aria-hidden="true">${ne.trash}</span>
            卸载 OpenOcta…
          </button>
        </section>
      </div>

      ${e.uninstallModalOpen?r`
            <div
              class="modal-overlay"
              role="dialog"
              aria-modal="true"
              aria-labelledby="about-uninstall-title"
              @click=${e.onCloseUninstallModal}
            >
              <div class="modal card about-uninstall-modal" @click=${n=>n.stopPropagation()}>
                <h3 id="about-uninstall-title" class="modal__title">卸载 OpenOcta</h3>
                <p class="muted small">
                  请确认已配置正确的 <strong>Gateway URL</strong> 与 <strong>Token</strong>（与 Overview 一致）。卸载任务在进程退出后由系统脚本删除文件。
                </p>

                <fieldset class="about-uninstall-fieldset">
                  <legend class="visually-hidden">卸载方式</legend>

                  <div class="about-uninstall-options">
                    <div
                      class="about-uninstall-card ${e.uninstallMode==="program"?"about-uninstall-card--selected":""}"
                    >
                      <label class="about-uninstall-mode-label">
                        <input
                          type="radio"
                          name="oo-uninstall-mode"
                          value="program"
                          ?checked=${e.uninstallMode==="program"}
                          ?disabled=${e.uninstallLoading}
                          @change=${()=>e.onUninstallModeChange("program")}
                        />
                        <span class="about-uninstall-mode-title">仅卸载程序</span>
                      </label>
                      <p>
                        删除已安装的应用（例如 macOS 下的 <code>OpenOcta.app</code>，Windows 下安装目录中的程序文件）。
                      </p>
                      <p class="about-uninstall-note">
                        <strong>不会删除</strong>本地配置与数据目录（默认 <code>~/.openocta</code>，Windows 为
                        <code>%APPDATA%\\openocta</code> 等）。
                      </p>
                    </div>

                    <div
                      class="about-uninstall-card about-uninstall-card--warn ${e.uninstallMode==="full"?"about-uninstall-card--selected":""}"
                    >
                      <label class="about-uninstall-mode-label">
                        <input
                          type="radio"
                          name="oo-uninstall-mode"
                          value="full"
                          ?checked=${e.uninstallMode==="full"}
                          ?disabled=${e.uninstallLoading}
                          @change=${()=>e.onUninstallModeChange("full")}
                        />
                        <span class="about-uninstall-mode-title">全部卸载</span>
                      </label>
                      <p>删除应用程序<strong>以及</strong>本地状态目录（配置、会话、日志、缓存等）。</p>
                      <p class="about-uninstall-note danger">
                        此操作<strong>不可恢复</strong>，请确认已备份重要数据。
                      </p>
                    </div>
                  </div>
                </fieldset>

                ${e.uninstallError?r`<p class="about-uninstall-api-error" role="alert">${e.uninstallError}</p>`:y}

                <div class="modal__actions">
                  <button
                    type="button"
                    class="btn"
                    ?disabled=${e.uninstallLoading}
                    @click=${e.onCloseUninstallModal}
                  >
                    取消
                  </button>
                  <button
                    type="button"
                    class="btn btn--danger"
                    ?disabled=${e.uninstallLoading}
                    @click=${e.onConfirmUninstall}
                  >
                    ${e.uninstallLoading?r`<span>正在请求…</span>`:r`<span>确认卸载</span>`}
                  </button>
                </div>
              </div>
            </div>
          `:y}
    </div>
  `}function tb(e){return e==null?"—":new Date(e).toLocaleString()}function nb(e){if(e==null||e<0)return"—";if(e===0)return"0 B";const t=["B","KB","MB","GB"];let n=0,s=e;for(;s>=1024&&n<t.length-1;)s/=1024,n++;return`${s.toFixed(n>0?2:0)} ${t[n]}`}function sb(e,t){if(!t.trim())return e;const n=t.trim().toLowerCase();return e.filter(s=>s.sessionKey.toLowerCase().includes(n)||s.sessionId.toLowerCase().includes(n))}function ab(e){const t="<style>html,body{overflow-y:auto!important;overflow-x:auto!important;min-height:100%;}</style>";return e.includes("</head>")?e.replace("</head>",`${t}</head>`):e.includes("<body")?e.replace("<body",`<head>${t}</head><body`):t+e}function ob(e){if(e.viewingSessionId!=null)return r`
      <section class="card llm-trace-detail">
        <div class="row" style="align-items: center; gap: 12px; margin-bottom: 16px;">
          <button type="button" class="btn btn--sm" @click=${e.onBack}>
            ← ${i("llmTraceBack")}
          </button>
          <span class="muted" style="font-size: 14px;">${e.viewingSessionId}</span>
        </div>
        ${e.viewLoading?r`<div class="muted" style="padding: 24px; text-align: center;">${i("commonLoading")}</div>`:e.viewContent?r`
                <div class="llm-trace-iframe-wrap">
                  <iframe
                    class="llm-trace-iframe"
                    srcdoc=${ab(e.viewContent)}
                    sandbox="allow-same-origin allow-scripts"
                    title=${e.viewingSessionId??"Trace"}
                  ></iframe>
                </div>
              `:r`<div class="callout danger">${e.error??i("commonNA")}</div>`}
      </section>
    `;const n=e.result?.entries??[],s=sb(n,e.search);return r`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
        <div>
          <div class="card-title">${i("navTitleLlmTrace")}</div>
          <div class="card-sub">${i("subtitleLlmTrace")}</div>
        </div>
        <div class="row" style="gap: 8px; align-items: center;">
          <div class="row" style="gap: 4px;">
            <button
              type="button"
              class="btn ${e.mode==="active"?"primary":""}"
              style="padding: 6px 12px;"
              @click=${()=>e.onModeChange("active")}
            >
              ${i("llmTraceModeActive")}
            </button>
            <button
              type="button"
              class="btn ${e.mode==="all"?"primary":""}"
              style="padding: 6px 12px;"
              @click=${()=>e.onModeChange("all")}
            >
              ${i("llmTraceModeAll")}
            </button>
          </div>
          <button
            type="button"
            class="btn ${e.enabled?"btn-ok":""}"
            ?disabled=${e.saving}
            @click=${e.onToggleEnabled}
            title=${i("llmTraceToggleTooltip")}
          >
            ${e.enabled?i("llmTraceActionDisable"):i("llmTraceActionEnable")}
          </button>
          <button class="btn primary" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?i("commonLoading"):i("commonRefresh")}
          </button>
        </div>
      </div>

      <div class="row" style="margin-top: 16px; gap: 12px; align-items: center;">
        <div class="field" style="flex: 1; min-width: 200px;">
          <span>${i("llmTraceSearch")}</span>
          <input
            type="text"
            .value=${e.search}
            placeholder=${i("llmTraceSearchPlaceholder")}
            @input=${a=>e.onSearchChange(a.target.value)}
          />
        </div>
      </div>

      ${e.error?r`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:y}

      <div class="llm-trace-table mcp-table table" style="margin-top: 16px;">
        <div class="mcp-table-head table-head">
          <div>${i("llmTraceSessionKey")}</div>
          <div>${i("llmTraceSessionId")}</div>
          <div>${i("llmTraceUpdatedAt")}</div>
          <div>${i("llmTraceFile")}</div>
          <div>${i("llmTraceFileSize")}</div>
          <div class="llm-trace-actions-col">${i("mcpTableActions")}</div>
        </div>
        ${s.length===0?r`
                <div class="muted" style="padding: 24px; text-align: center;">
                  ${e.loading?i("commonLoading"):i("llmTraceNoEntries")}
                </div>
              `:s.map(a=>r`
                  <div class="mcp-table-row table-row">
                    <div class="mcp-table-cell mono" style="font-size: 12px; max-width: 200px; overflow: hidden; text-overflow: ellipsis;" title=${a.sessionKey}>
                      ${a.sessionKey}
                    </div>
                    <div class="mcp-table-cell mono muted" style="font-size: 12px; max-width: 180px; overflow: hidden; text-overflow: ellipsis;" title=${a.sessionId}>
                      ${a.sessionId}
                    </div>
                    <div class="mcp-table-cell muted" style="font-size: 12px;">
                      ${tb(a.updatedAt)}
                    </div>
                    <div class="mcp-table-cell mono muted" style="font-size: 12px;">
                      ${a.file}
                    </div>
                    <div class="mcp-table-cell muted" style="font-size: 12px;">
                      ${nb(a.fileSize)}
                    </div>
                    <div class="mcp-table-cell llm-trace-actions-col row" style="gap: 6px; justify-content: flex-end;">
                      ${a.file!=="-"?r`
                              <button
                                class="btn btn--sm"
                                @click=${()=>e.onView(a.sessionId)}
                              >
                                ${i("llmTraceView")}
                              </button>
                              <button
                                class="btn btn--sm"
                                @click=${()=>e.onDownload(a.sessionId)}
                              >
                                ${i("llmTraceDownload")}
                              </button>
                            `:y}
                    </div>
                  </div>
                `)}
      </div>
    </section>
  `}function Nl(e){return e==null||e===0?"—":new Date(e).toLocaleString()}function Ul(e){return e==null?"—":e<0?i("approvalsTtlPermanent"):e<60?`${e}s`:e<3600?`${Math.floor(e/60)}m`:`${Math.floor(e/3600)}h`}function Ol(e){return{pending:i("approvalsPending"),approved:i("approvalsSectionApproved"),denied:i("approvalsSectionDenied"),expired:i("approvalsExpired"),whitelisted:i("approvalsSectionWhitelisted"),whitelist_expired:i("approvalsExpired")}[e]??e}function ib(e){return[...e].sort((t,n)=>{const s=a=>{const o=a.status==="pending",l=a.status==="expired"||a.expired===!0,c=a.status==="denied";return o&&!l?0:a.status==="approved"&&!l?1:l?2:c?3:1};return s(t)-s(n)})}function lb(e){const t=e.approvalsResult,n=t?.pending??t?.entries?.filter(c=>c.status==="pending"||c.status==="expired")??[],s=t?.approved??t?.entries?.filter(c=>c.status==="approved")??[],a=t?.denied??t?.entries?.filter(c=>c.status==="denied")??[],o=t?.whitelisted??[],l=ib([...n,...s,...a]);return r`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
        <div>
          <div class="card-title">${i("navTitleApprovals")}</div>
          <div class="card-sub">${i("subtitleApprovals")}</div>
        </div>
        <button class="btn primary" ?disabled=${e.approvalsLoading} @click=${e.onApprovalsRefresh}>
          ${e.approvalsLoading?i("commonLoading"):i("commonRefresh")}
        </button>
      </div>

      ${e.approvalsError?r`<div class="callout danger" style="margin-top: 16px;">${e.approvalsError}</div>`:y}

      <!-- 审批队列：已审批 + 待审批 合并，有效期的放最上面 -->
      <div style="margin-top: 20px;">
        <div class="card-sub" style="margin-bottom: 12px; font-size: 14px;">${i("approvalsList")} (${l.length})</div>
        ${l.length===0&&!e.approvalsLoading?r`<div class="muted" style="padding: 24px; text-align: center;">${i("approvalsNoEntries")}</div>`:r`
              <div class="mcp-table table approvals-queue-table">
                <div class="mcp-table-head table-head">
                  <div>${i("approvalsCommand")}</div>
                  <div>${i("approvalsStatus")}</div>
                  <div>${i("approvalsExpiresAt")}</div>
                  <div>${i("approvalsTTL")}</div>
                  <div style="text-align: right;">${i("mcpTableActions")}</div>
                </div>
                ${l.map(c=>{const u=c.sessionKey??c.sessionId,f=u?`${e.pathForTab("sessions")}?key=${encodeURIComponent(u)}`:"",p=c.status==="pending"&&!c.expired,g=c.expiresAt??c.timeoutAt;return r`
                    <div class="mcp-table-row table-row">
                      <div class="mcp-table-cell mono" style="max-width: 240px; overflow: hidden; text-overflow: ellipsis;" title=${c.command}>${c.command}</div>
                      <div class="mcp-table-cell">${Ol(c.status)}${c.approver?` · ${c.approver}`:""}</div>
                      <div class="mcp-table-cell muted" style="font-size: 12px;">${Nl(g)}</div>
                      <div class="mcp-table-cell muted" style="font-size: 12px;">${c.ttlSeconds!=null?Ul(c.ttlSeconds):"—"}</div>
                      <div class="mcp-table-cell approvals-actions-cell">
                        <button class="btn btn--sm btn-ok" ?disabled=${!p} @click=${()=>p&&e.onApprove(c.id)}>${i("approvalsApproveOnce")}</button>
                        <button class="btn btn--sm" ?disabled=${!p} @click=${()=>p&&e.onWhitelistSession(c.id)}>${i("approvalsWhitelistSession")}</button>
                        <button class="btn btn--sm" style="color: var(--danger);" ?disabled=${!p} @click=${()=>p&&e.onDeny(c.id)}>${i("approvalsDeny")}</button>
                        ${f?r`<a class="btn btn--sm" href="${f}">${i("approvalsViewSession")}</a>`:y}
                      </div>
                    </div>
                  `})}
              </div>
            `}
      </div>

      <!-- 会话免审：独立模块 -->
      ${o.length>0?r`
        <div style="margin-top: 24px;">
          <div class="card-sub" style="margin-bottom: 12px; font-size: 14px;">${i("approvalsSectionWhitelisted")} (${o.length})</div>
          <div class="mcp-table table">
            <div class="mcp-table-head table-head">
              <div>${i("approvalsSessionId")}</div>
              <div>${i("approvalsStatus")}</div>
              <div>${i("approvalsExpiresAt")}</div>
              <div>${i("approvalsTTL")}</div>
            </div>
            ${o.map(c=>r`
              <div class="mcp-table-row table-row">
                <div class="mcp-table-cell mono" style="max-width: 200px; overflow: hidden; text-overflow: ellipsis;">${c.sessionId}</div>
                <div class="mcp-table-cell">${Ol(c.status)}</div>
                <div class="mcp-table-cell muted" style="font-size: 12px;">${c.expiresAt?Nl(c.expiresAt):i("approvalsTtlPermanent")}</div>
                <div class="mcp-table-cell muted" style="font-size: 12px;">${c.ttlSeconds!=null?c.ttlSeconds<0?i("approvalsTtlPermanent"):Ul(c.ttlSeconds):"—"}</div>
              </div>
            `)}
          </div>
        </div>
      `:y}
    </section>
  `}function Xe(e){return Array.isArray(e)?e:[]}function gt(e){return Xe(e).filter(Boolean).join(`
`)}function mt(e){return(e||"").split(`
`).map(t=>t.trim()).filter(Boolean)}const rb=[{label:"512M",bytes:512*1024*1024},{label:"1G",bytes:1024*1024*1024},{label:"2G",bytes:2*1024*1024*1024},{label:"4G",bytes:4*1024*1024*1024}];function cb(e){const t=e.security??{},n=t.sandbox??{},s=t.commandPolicy??{},a=t.approvalQueue??{},o=n.enabled!==!1,l=s.enabled!==!1,c=a.enabled===!0,u=gt(Xe(n.allowedPaths)),f=gt(Xe(n.networkAllow)),p=n.resourceLimit??{},g=p.maxCpuPercent??"",$=p.maxMemoryBytes??"",k=p.maxDiskBytes??"",S=s.defaultPolicy??"ask",d=Xe(s.deny),m=Xe(s.ask),h=Xe(s.allow),v=gt(d),C=gt(m),A=gt(h);function E(L,fe,D){e.onPatch(["commandPolicy","deny"],mt(L)),e.onPatch(["commandPolicy","ask"],mt(fe)),e.onPatch(["commandPolicy","allow"],mt(D))}const T=gt(Xe(s.banArguments)),P=s.maxLength??"",_=gt(Xe(s.secretPatterns)),U=a.timeoutSeconds??"",W=a.blockOnApproval!==!1,R=L=>{switch(L){case"off":return i("securityPresetOff");case"loose":return i("securityPresetLoose");case"standard":return i("securityPresetStandard");case"strict":return i("securityPresetStrict");default:return L}};return r`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
        <div>
          <div class="card-title">${i("navTitleSandbox")}</div>
          <div class="card-sub">${i("subtitleSandbox")}</div>
        </div>
      </div>

      <!-- Overview card -->
      <div class="security-overview-card" style="margin-top: 20px; padding: 20px; background: var(--bg-muted, #f8fafc); border-radius: 12px; border: 1px solid var(--border, #e2e8f0);">
        <div class="card-sub" style="margin-bottom: 12px; font-size: 14px;">${i("securityOverviewTitle")}</div>
        <div class="row" style="flex-wrap: wrap; gap: 24px;">
          <div>
            <div class="muted" style="font-size: 12px;">${i("securityOverviewPreset")}</div>
            <div style="font-size: 16px; font-weight: 600;">${R(t.preset??"standard")}</div>
          </div>
          <div>
            <div class="muted" style="font-size: 12px;">${i("securityOverviewSandbox")}</div>
            <div style="font-size: 16px; font-weight: 600; color: ${o?"var(--ok, #16a34a)":"var(--muted)"};">${i(o?"sandboxEnabled":"sandboxDisabled")}</div>
          </div>
          <div>
            <div class="muted" style="font-size: 12px;">${i("securityOverviewCommandPolicy")}</div>
            <div style="font-size: 16px; font-weight: 600; color: ${l?"var(--ok, #16a34a)":"var(--muted)"};">${i(l?"sandboxEnabled":"sandboxDisabled")}</div>
          </div>
          <div>
            <div class="muted" style="font-size: 12px;">${i("securityOverviewPendingApprovals")}</div>
            <div style="font-size: 16px; font-weight: 600; color: ${e.pendingApprovalsCount>0?"var(--danger, #dc2626)":"var(--muted)"};">${e.pendingApprovalsCount}</div>
          </div>
        </div>
      </div>

      <!-- Quick presets -->
      <div style="margin-top: 20px;">
        <div class="card-sub" style="margin-bottom: 8px; font-size: 14px;">${i("securityPresetsTitle")}</div>
        <div class="muted" style="font-size: 13px; margin-bottom: 12px;">${i("securityPresetsHint")}</div>
        <div class="row" style="flex-wrap: wrap; gap: 12px; margin-bottom: 8px;">
          ${["off","loose","standard","strict"].map(L=>r`
              <button
                type="button"
                class="btn ${t.preset===L?"primary":""}"
                ?disabled=${e.saving}
                @click=${()=>e.onPresetApply(L)}
              >
                ${R(L)}
              </button>
            `)}
        </div>
        <div class="muted" style="font-size: 12px; line-height: 1.5;">
          <div style="margin-bottom: 4px;"><strong>${R("off")}</strong>：${i("securityPresetOffDesc")}</div>
          <div style="margin-bottom: 4px;"><strong>${R("loose")}</strong>：${i("securityPresetLooseDesc")}</div>
          <div style="margin-bottom: 4px;"><strong>${R("standard")}</strong>：${i("securityPresetStandardDesc")}</div>
          <div><strong>${R("strict")}</strong>：${i("securityPresetStrictDesc")}</div>
        </div>
      </div>

      <div class="sandbox-sections" style="margin-top: 24px;">
        <!-- Environment boundary (collapsed by default) -->
        <details class="sandbox-details">
          <summary class="sandbox-summary">
            <span>${i("securitySectionSandbox")}</span>
            <span class="security-help" title=${i("securitySectionSandboxDesc")}>❕</span>
          </summary>
          <div class="sandbox-section-body" style="margin-top: 16px;">
            <div class="muted" style="font-size: 13px; margin-bottom: 12px;">${i("securitySectionSandboxDesc")}</div>
            <div class="row" style="align-items: center; gap: 12px; margin-bottom: 16px;">
              <button type="button" class="btn ${o?"btn-ok":""}" ?disabled=${e.saving} @click=${()=>e.onPatch(["sandbox","enabled"],!o)}>
                ${i(o?"sandboxActionDisable":"sandboxActionEnable")}
              </button>
              <span class="muted" style="font-size: 13px;">${i(o?"sandboxEnabled":"sandboxDisabled")}</span>
            </div>
            <div class="sandbox-form-center">
              <div class="field" style="width: 100%; margin-bottom: 16px;">
                <span>${i("sandboxAllowedPaths")}</span>
                <textarea rows="3" .value=${u} placeholder="/tmp&#10;./workspace" @input=${L=>e.onPatch(["sandbox","allowedPaths"],mt(L.target.value))}></textarea>
              </div>
              <div class="field" style="width: 100%; margin-bottom: 16px;">
                <span>${i("sandboxNetworkAllow")}</span>
                <textarea rows="2" .value=${f} placeholder="localhost&#10;127.0.0.1" @input=${L=>e.onPatch(["sandbox","networkAllow"],mt(L.target.value))}></textarea>
              </div>
              <div style="margin: 24px 0;">
                <div class="card-sub" style="margin-bottom: 12px; font-size: 14px;">${i("sandboxResourceLimit")}</div>
                <div class="row" style="flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
                  ${rb.map(L=>r`
                      <button
                        type="button"
                        class="btn btn--sm"
                        @click=${()=>{e.onPatch(["sandbox","resourceLimit","maxMemoryBytes"],L.bytes),e.onPatch(["sandbox","resourceLimit","maxDiskBytes"],L.bytes)}}
                      >
                        ${L.label}
                      </button>
                    `)}
                  <span class="muted" style="font-size: 13px; align-self: center;">${i("securityResourceCustom")}</span>
                </div>
                <div class="row" style="flex-wrap: wrap; gap: 12px;">
                  <div class="field" style="flex: 1 1 120px; min-width: 0;">
                    <span style="font-size: 14px;">${i("sandboxMaxCPUPercent")}</span>
                    <input type="text" .value=${String(g)} placeholder="60" @input=${L=>e.onPatch(["sandbox","resourceLimit","maxCpuPercent"],ra(L.target.value))} />
                  </div>
                  <div class="field" style="flex: 1 1 160px; min-width: 0;">
                    <span style="font-size: 14px;">${i("sandboxMaxMemoryBytes")}</span>
                    <input type="text" .value=${String($)} placeholder="1G" @input=${L=>e.onPatch(["sandbox","resourceLimit","maxMemoryBytes"],L.target.value.trim()||void 0)} />
                  </div>
                  <div class="field" style="flex: 1 1 160px; min-width: 0;">
                    <span style="font-size: 14px;">${i("sandboxMaxDiskBytes")}</span>
                    <input type="text" .value=${String(k)} placeholder="1G" @input=${L=>e.onPatch(["sandbox","resourceLimit","maxDiskBytes"],L.target.value.trim()||void 0)} />
                  </div>
                </div>
              </div>
            </div>
            <div class="row" style="gap: 8px; margin-top: 16px;">
              <button type="button" class="btn primary" ?disabled=${e.saving} @click=${e.onSave}>${e.saving?i("commonLoading"):i("commonSave")}</button>
            </div>
          </div>
        </details>

        <!-- Command policy -->
        <details class="sandbox-details" style="margin-top: 16px;">
          <summary class="sandbox-summary">
            <span>${i("securitySectionCommandPolicy")}</span>
            <span class="security-help" title=${i("securitySectionCommandPolicyDesc")}>❕</span>
          </summary>
          <div class="sandbox-section-body" style="margin-top: 16px;">
            <div class="muted" style="font-size: 13px; margin-bottom: 12px;">${i("securitySectionCommandPolicyDesc")}</div>
            <div class="row" style="align-items: center; gap: 12px; margin-bottom: 16px;">
              <button type="button" class="btn ${l?"btn-ok":""}" ?disabled=${e.saving} @click=${()=>e.onPatch(["commandPolicy","enabled"],!l)}>
                ${i(l?"sandboxActionDisable":"sandboxActionEnable")}
              </button>
              <span class="muted" style="font-size: 13px;">${i(l?"sandboxEnabled":"sandboxDisabled")}</span>
            </div>
            <div class="field" style="margin-bottom: 16px;">
              <span style="font-size: 14px;">${i("securityDefaultPolicy")}</span>
              <div class="row" style="gap: 16px; margin-top: 8px;">
                ${["deny","ask","allow"].map(L=>r`
                    <label class="row" style="align-items: center; gap: 6px; cursor: pointer;">
                      <input type="radio" name="defaultPolicy" .checked=${S===L} @change=${()=>e.onPatch(["commandPolicy","defaultPolicy"],L)} />
                      <span>${i(L==="deny"?"securityDefaultDeny":L==="ask"?"securityDefaultAsk":"securityDefaultAllow")}</span>
                    </label>
                  `)}
              </div>
            </div>
            <div class="card-sub" style="margin-bottom: 8px; font-size: 14px;">${i("securityRulesList")}</div>
            <div class="muted" style="font-size: 12px; margin-bottom: 12px;">${i("securityRulesHint")}</div>
            <div class="field" style="margin-bottom: 16px;">
              <span style="font-size: 14px;">${i("securityActionDeny")}</span>
              <textarea rows="3" .value=${v} placeholder="sudo&#10;dd&#10;mkfs&#10;rm -rf" @input=${L=>E(L.target.value,C,A)}></textarea>
              <div class="muted" style="font-size: 12px; margin-top: 4px;">${i("securityRulesDenyHint")}</div>
            </div>
            <div class="field" style="margin-bottom: 16px;">
              <span style="font-size: 14px;">${i("securityActionAsk")}</span>
              <textarea rows="3" .value=${C} placeholder="rm&#10;mv&#10;cp" @input=${L=>E(v,L.target.value,A)}></textarea>
              <div class="muted" style="font-size: 12px; margin-top: 4px;">${i("securityRulesAskHint")}</div>
            </div>
            <div class="field" style="margin-bottom: 16px;">
              <span style="font-size: 14px;">${i("securityActionAllow")}</span>
              <textarea rows="3" .value=${A} placeholder="ls&#10;pwd&#10;echo" @input=${L=>E(v,C,L.target.value)}></textarea>
              <div class="muted" style="font-size: 12px; margin-top: 4px;">${i("securityRulesAllowHint")}</div>
            </div>
            <details style="margin-top: 16px;">
              <summary class="muted" style="font-size: 13px; cursor: pointer;">${i("securityAdvancedOptions")}</summary>
              <div style="margin-top: 12px;">
                <div class="field" style="margin-bottom: 12px;">
                  <span style="font-size: 14px;">${i("sandboxBanArguments")}</span>
                  <textarea rows="2" .value=${T} placeholder="--no-preserve-root&#10;/dev/" @input=${L=>e.onPatch(["commandPolicy","banArguments"],mt(L.target.value))}></textarea>
                </div>
                <div class="field" style="margin-bottom: 12px;">
                  <span style="font-size: 14px;">${i("securityMaxLength")}</span>
                  <input type="text" .value=${String(P)} placeholder="4096" @input=${L=>e.onPatch(["commandPolicy","maxLength"],ra(L.target.value))} />
                </div>
                <div class="field">
                  <span style="font-size: 14px;">${i("sandboxSecretPatterns")}</span>
                  <textarea rows="2" style="font-family: var(--mono);" .value=${_} placeholder="sk-[a-zA-Z0-9]{48}" @input=${L=>e.onPatch(["commandPolicy","secretPatterns"],mt(L.target.value))}></textarea>
                </div>
              </div>
            </details>
            <div class="row" style="gap: 8px; margin-top: 16px;">
              <button type="button" class="btn primary" ?disabled=${e.saving} @click=${e.onSave}>${e.saving?i("commonLoading"):i("commonSave")}</button>
            </div>
          </div>
        </details>

        <!-- Approval settings -->
        <details class="sandbox-details" style="margin-top: 16px;">
          <summary class="sandbox-summary">
            <span>${i("securitySectionApprovalQueue")}</span>
            <span class="security-help" title=${i("securitySectionApprovalQueueDesc")}>❕</span>
          </summary>
          <div class="sandbox-section-body" style="margin-top: 16px;">
            <div class="muted" style="font-size: 13px; margin-bottom: 12px;">${i("securitySectionApprovalQueueDesc")}</div>
            <div class="row" style="align-items: center; gap: 12px; margin-bottom: 16px;">
              <button type="button" class="btn ${c?"btn-ok":""}" ?disabled=${e.saving} @click=${()=>e.onPatch(["approvalQueue","enabled"],!c)}>
                ${i(c?"sandboxActionDisable":"sandboxActionEnable")}
              </button>
              <span class="muted" style="font-size: 13px;">${i(c?"sandboxEnabled":"sandboxDisabled")}</span>
            </div>
            ${c?r`
                  <div class="row" style="align-items: flex-start; gap: 8px; margin-bottom: 16px;">
                    <input type="checkbox" id="blockOnApproval" .checked=${W} ?disabled=${e.saving} @input=${L=>e.onPatch(["approvalQueue","blockOnApproval"],L.target.checked)} />
                    <label for="blockOnApproval" style="font-size: 14px; cursor: pointer;">${i("securityApprovalBlockOnApproval")} <span class="muted" style="font-size: 12px;">${i("securityApprovalBlockOnApprovalHint")}</span></label>
                  </div>
                  <div class="field" style="margin-bottom: 16px;">
                    <span style="font-size: 14px;">${i("securityApprovalTimeoutSeconds")}</span>
                    <input type="text" .value=${String(U)} placeholder="300" @input=${L=>e.onPatch(["approvalQueue","timeoutSeconds"],ra(L.target.value))} />
                    <div class="muted" style="font-size: 12px; margin-top: 4px;">${i("securityApprovalTimeoutSecondsHint")}</div>
                  </div>
                `:y}
            <div class="row" style="gap: 8px; margin-bottom: 20px;">
              <button type="button" class="btn primary" ?disabled=${e.saving} @click=${e.onSave}>${e.saving?i("commonLoading"):i("commonSave")}</button>
            </div>

            <!-- Approval queue list (full: pending, approved, denied, whitelisted) -->
            ${lb({approvalsLoading:e.approvalsLoading,approvalsResult:e.approvalsResult,approvalsError:e.approvalsError,onApprovalsRefresh:e.onApprovalsRefresh,onApprove:e.onApprove,onDeny:e.onDeny,onWhitelistSession:e.onWhitelistSession,pathForTab:e.pathForTab})}
          </div>
        </details>
      </div>
    </section>
  `}function ra(e){const t=parseInt(e.trim(),10);return Number.isNaN(t)?void 0:t}const Ee=[{id:"anthropic",label:"Anthropic",envKey:"ANTHROPIC_API_KEY",defaultModel:"claude-sonnet-4-5-20250929",baseUrl:"(官方)",defaultApi:"anthropic-messages"},{id:"openai",label:"OpenAI",envKey:"OPENAI_API_KEY",defaultModel:"gpt-4",baseUrl:"(官方)",defaultApi:"openai-completions"},{id:"openrouter",label:"OpenRouter",envKey:"OPENROUTER_API_KEY",defaultModel:"auto",baseUrl:"https://openrouter.ai/api/v1",defaultApi:"openai-completions"},{id:"litellm",label:"LiteLLM",envKey:"LITELLM_API_KEY",defaultModel:"",baseUrl:"http://localhost:4000",defaultApi:"openai-completions"},{id:"moonshot",label:"Moonshot",envKey:"MOONSHOT_API_KEY",defaultModel:"kimi-k2.5",baseUrl:"https://api.moonshot.ai/v1",defaultApi:"openai-completions"},{id:"moonshot-cn",label:"Moonshot-CN",envKey:"MOONSHOT_API_KEY",defaultModel:"kimi-k2.5",baseUrl:"https://api.moonshot.cn/v1",defaultApi:"openai-completions"},{id:"kimi-coding",label:"Kimi Coding",envKey:"KIMI_API_KEY",defaultModel:"k2p5",baseUrl:"https://api.moonshot.ai/anthropic",defaultApi:"anthropic-messages"},{id:"opencode",label:"OpenCode",envKey:"OPENCODE_API_KEY",defaultModel:"claude-opus-4-6",baseUrl:"https://opencode.ai/zen/v1",defaultApi:"openai-completions"},{id:"zai",label:"Z.ai (智谱)",envKey:"ZAI_API_KEY",defaultModel:"glm-5",baseUrl:"https://api.z.ai/api/paas/v4",defaultApi:"openai-completions"},{id:"xai",label:"xAI (Grok)",envKey:"XAI_API_KEY",defaultModel:"grok-3-mini",baseUrl:"https://api.x.ai/v1",defaultApi:"openai-completions"},{id:"together",label:"Together AI",envKey:"TOGETHER_API_KEY",defaultModel:"meta-llama/Llama-3.3-70B-Instruct-Turbo",baseUrl:"https://api.together.xyz/v1",defaultApi:"openai-completions"},{id:"venice",label:"Venice AI",envKey:"VENICE_API_KEY",defaultModel:"falcon-3.1-70b",baseUrl:"https://api.venice.ai/api/v1",defaultApi:"openai-completions"},{id:"synthetic",label:"Synthetic",envKey:"SYNTHETIC_API_KEY",defaultModel:"hf:MiniMaxAI/MiniMax-M2.1",baseUrl:"https://api.synthetic.new/anthropic",defaultApi:"anthropic-messages"},{id:"qianfan",label:"千帆 (百度)",envKey:"QIANFAN_API_KEY",defaultModel:"deepseek-v3-2-251201",baseUrl:"https://qianfan.baidubce.com/v2",defaultApi:"openai-completions"},{id:"huggingface",label:"Hugging Face",envKey:"HUGGINGFACE_HUB_TOKEN",defaultModel:"",baseUrl:"https://router.huggingface.co/v1",defaultApi:"openai-completions"},{id:"xiaomi",label:"小米 Mimo",envKey:"XIAOMI_API_KEY",defaultModel:"mimo-v2-flash",baseUrl:"https://api.xiaomimimo.com/anthropic",defaultApi:"anthropic-messages"},{id:"minimax",label:"MiniMax",envKey:"MINIMAX_API_KEY",defaultModel:"MiniMax-M2.1",baseUrl:"https://api.minimax.io/anthropic",defaultApi:"anthropic-messages"},{id:"mistral",label:"Mistral",envKey:"MISTRAL_API_KEY",defaultModel:"mistral-large-latest",baseUrl:"https://api.mistral.ai/v1",defaultApi:"openai-completions"},{id:"groq",label:"Groq",envKey:"GROQ_API_KEY",defaultModel:"llama-3.3-70b-versatile",baseUrl:"https://api.groq.com/openai/v1",defaultApi:"openai-completions"},{id:"cerebras",label:"Cerebras",envKey:"CEREBRAS_API_KEY",defaultModel:"llama-4-scout-17b-16e-instruct",baseUrl:"https://api.cerebras.ai/v1",defaultApi:"openai-completions"},{id:"ollama",label:"Ollama",envKey:"OLLAMA_API_KEY",defaultModel:"llama3.3",baseUrl:"http://127.0.0.1:11434/v1",defaultApi:"openai-completions"},{id:"vllm",label:"vLLM",envKey:"VLLM_API_KEY",defaultModel:"",baseUrl:"http://127.0.0.1:8000/v1",defaultApi:"openai-completions"},{id:"vercel-ai-gateway",label:"Vercel AI Gateway",envKey:"AI_GATEWAY_API_KEY",defaultModel:"",baseUrl:"https://api.vercel.ai/v1",defaultApi:"openai-completions"},{id:"bailian",label:"百炼 (阿里云)",envKey:"DASHSCOPE_API_KEY",defaultModel:"qwen3.5-flash",baseUrl:"https://dashscope.aliyuncs.com/compatible-mode/v1",defaultApi:"openai-completions"}];function db(e){if(!e||typeof e!="string")return null;const t=e.trim().split("/",2);return t.length===2?{provider:t[0].trim(),modelId:t[1].trim()}:{provider:"anthropic",modelId:e.trim()}}function dn(e,t){const n=Ee.find(s=>s.id===e);return n?n.label:t?.displayName??e}function ub(e,t){const n=Ee.find(a=>a.id===e),s=t?.models??[];return s.length>0?s:n?.defaultModel?[{id:n.defaultModel,name:n.defaultModel}]:[]}function pb(e){const t=db(e.defaultModelRef);return r`
    <section class="card">
      <div class="row" style="justify-content: space-between; align-items: center;">
        <div>
          <div class="card-title">${i("navTitleModels")}</div>
          <div class="card-sub">${i("subtitleModels")}</div>
        </div>
        <div class="row" style="gap: 8px; align-items: center;">
          <div class="row" style="gap: 4px;" title=${i("modelsViewList")}>
            <button
              type="button"
              class="btn ${e.viewMode==="list"?"primary":""}"
              style="padding: 6px 10px;"
              @click=${()=>e.onViewModeChange("list")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="8" y1="6" x2="21" y2="6"/>
                <line x1="8" y1="12" x2="21" y2="12"/>
                <line x1="8" y1="18" x2="21" y2="18"/>
                <line x1="3" y1="6" x2="3.01" y2="6"/>
                <line x1="3" y1="12" x2="3.01" y2="12"/>
                <line x1="3" y1="18" x2="3.01" y2="18"/>
              </svg>
            </button>
            <button
              type="button"
              class="btn ${e.viewMode==="card"?"primary":""}"
              style="padding: 6px 10px;"
              @click=${()=>e.onViewModeChange("card")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
              </svg>
            </button>
          </div>
          <button class="btn primary" ?disabled=${e.loading} @click=${e.onAddProvider}>
            ${i("modelsAddProvider")}
          </button>
          <button class="btn" ?disabled=${e.loading} @click=${e.onRefresh}>
            ${e.loading?i("commonLoading"):i("commonRefresh")}
          </button>
        </div>
      </div>

      ${e.defaultModelRef?r`
            <div class="callout" style="margin-top: 12px;">
              <strong>${i("modelsCurrentDefault")}:</strong> ${e.defaultModelRef}
            </div>
          `:y}

      <div class="models-provider-list" style="margin-top: 16px;">
        ${e.viewMode==="list"?r`
              <div class="models-table table" style="margin-top: 0;">
                <div class="models-table-head table-head">
                  <div>${i("modelsTableName")}</div>
                  <div>${i("modelsTableModel")}</div>
                  <div>${i("modelsTableBaseUrl")}</div>
                  <div>${i("modelsTableActions")}</div>
                </div>
                ${Ee.map(n=>{const s=e.providers?.[n.id],a=!!s,o=a?s?.models?.[0]?.id??n.defaultModel??"(需指定)":null,l=a&&o&&o!=="(需指定)",c=l&&t?.provider===n.id;return r`
                    <div
                      class="models-table-row table-row ${e.selectedProvider===n.id?"list-item-selected":""}"
                      style="cursor: pointer;"
                      @click=${()=>e.onSelect(e.selectedProvider===n.id?null:n.id)}
                    >
                      <div class="models-table-cell" style="font-weight: 500;">
                        ${n.label}
                        ${c?r`<span class="muted" style="font-size: 12px;"> (${i("modelsCurrentDefault")})</span>`:y}
                      </div>
                      <div class="models-table-cell muted" style="font-size: 13px;">${a?o:"-"}</div>
                      <div class="models-table-cell muted" style="font-size: 12px;">${s?.baseUrl??n.baseUrl}</div>
                      <div class="models-table-cell row" style="gap: 6px; justify-content: flex-start;" @click=${u=>u.stopPropagation()}>
                        ${l?r`
                              <button
                                class="btn btn--sm ${c?"btn-ok":"primary"}"
                                ?disabled=${e.saving}
                                @click=${u=>{u.stopPropagation(),e.onUseModelClick(n.id)}}
                              >
                                ${i("modelsUseAsDefault")}
                              </button>
                            `:r`<button class="btn btn--sm" disabled>${i("modelsUseAsDefault")}</button>`}
                        <button
                          class="btn btn--sm"
                          ?disabled=${e.saving}
                          @click=${u=>{u.stopPropagation(),e.onSelect(e.selectedProvider===n.id?null:n.id)}}
                        >
                          ${i("channelsConfigure")}
                        </button>
                        ${a?r`
                              <button
                                class="btn btn--sm ${c?"btn-ok":""}"
                                ?disabled=${e.saving||!c}
                                @click=${u=>{u.stopPropagation(),e.onCancelUse(n.id)}}
                              >
                                ${i("modelsCancelUse")}
                              </button>
                            `:y}
                      </div>
                    </div>
                  `})}
                ${Object.entries(e.providers??{}).filter(([n])=>!Ee.some(s=>s.id===n)).map(([n,s])=>{const a=s.models?.[0]?.id,o=!!a,l=o&&t?.provider===n;return r`
                      <div
                        class="models-table-row table-row ${e.selectedProvider===n?"list-item-selected":""}"
                        style="cursor: pointer;"
                        @click=${()=>e.onSelect(e.selectedProvider===n?null:n)}
                      >
                        <div class="models-table-cell" style="font-weight: 500;">${dn(n,s)}</div>
                        <div class="models-table-cell muted" style="font-size: 13px;">
                          ${o?a:(s.models?.length??0)+" "+i("modelsModels")}
                        </div>
                        <div class="models-table-cell muted" style="font-size: 12px;">${s.baseUrl??i("commonNA")}</div>
                        <div class="models-table-cell row" style="gap: 6px; justify-content: flex-start;" @click=${c=>c.stopPropagation()}>
                          ${o?r`
                                <button
                                  class="btn btn--sm ${l?"btn-ok":"primary"}"
                                  ?disabled=${e.saving}
                                  @click=${c=>{c.stopPropagation(),e.onUseModelClick(n)}}
                                >
                                  ${i("modelsUseAsDefault")}
                                </button>
                              `:r`<button class="btn btn--sm" disabled>${i("modelsUseAsDefault")}</button>`}
                          <button
                            class="btn btn--sm"
                            ?disabled=${e.saving}
                            @click=${c=>{c.stopPropagation(),e.onSelect(e.selectedProvider===n?null:n)}}
                          >
                            ${i("channelsConfigure")}
                          </button>
                          <button
                            class="btn btn--sm ${l?"btn-ok":""}"
                            ?disabled=${e.saving||!l}
                            @click=${c=>{c.stopPropagation(),e.onCancelUse(n)}}
                          >
                            ${i("modelsCancelUse")}
                          </button>
                        </div>
                      </div>
                    `})}
              </div>
            `:r`
              <div class="models-card-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 12px;">
                ${Ee.map(n=>{const s=e.providers?.[n.id],a=!!s,o=a?s?.models?.[0]?.id??n.defaultModel??"(需指定)":null,l=a&&o&&o!=="(需指定)",c=l&&t?.provider===n.id;return r`
                    <div
                      class="models-provider-card ${e.selectedProvider===n.id?"list-item-selected":""}"
                      style="cursor: pointer;"
                      @click=${()=>e.onSelect(e.selectedProvider===n.id?null:n.id)}
                    >
                      <div class="models-provider-card__header">
                        <div class="models-provider-card__icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                            <path d="M2 17l10 5 10-5"/>
                          </svg>
                        </div>
                        <div class="models-provider-card__title-row" style="min-width: 0;">
                          <span class="models-provider-card__name">${n.label}</span>
                          ${a?r`<span class="chip" style="font-size: 11px;">${o}</span>`:y}
                        </div>
                      </div>
                      <div class="models-provider-card__meta muted" style="font-size: 12px;">${s?.baseUrl??n.baseUrl}</div>
                      <div class="models-provider-card__footer" @click=${u=>u.stopPropagation()}>
                        ${l?r`
                              <button
                                class="btn btn--sm ${c?"btn-ok":"primary"}"
                                ?disabled=${e.saving}
                                @click=${u=>{u.stopPropagation(),e.onUseModelClick(n.id)}}
                              >
                                ${i("modelsUseAsDefault")}
                              </button>
                            `:r`<button class="btn btn--sm" disabled>${i("modelsUseAsDefault")}</button>`}
                        <button
                          class="btn btn--sm"
                          ?disabled=${e.saving}
                          @click=${u=>{u.stopPropagation(),e.onSelect(e.selectedProvider===n.id?null:n.id)}}
                        >
                          ${i("channelsConfigure")}
                        </button>
                        ${a?r`
                              <button
                                class="btn btn--sm ${c?"btn-ok":""}"
                                ?disabled=${e.saving||!c}
                                @click=${u=>{u.stopPropagation(),e.onCancelUse(n.id)}}
                              >
                                ${i("modelsCancelUse")}
                              </button>
                            `:y}
                      </div>
                    </div>
                  `})}
                ${Object.entries(e.providers??{}).filter(([n])=>!Ee.some(s=>s.id===n)).map(([n,s])=>{const a=s.models?.[0]?.id,o=!!a,l=o&&t?.provider===n;return r`
                      <div
                        class="models-provider-card ${e.selectedProvider===n?"list-item-selected":""}"
                        style="cursor: pointer;"
                        @click=${()=>e.onSelect(e.selectedProvider===n?null:n)}
                      >
                        <div class="models-provider-card__header">
                          <div class="models-provider-card__icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                              <path d="M2 17l10 5 10-5"/>
                            </svg>
                          </div>
                          <div class="models-provider-card__title-row" style="min-width: 0;">
                            <span class="models-provider-card__name">${dn(n,s)}</span>
                            ${o?r`<span class="chip" style="font-size: 11px;">${a}</span>`:r`<span class="chip" style="font-size: 11px;">${s.models?.length??0} ${i("modelsModels")}</span>`}
                          </div>
                        </div>
                        <div class="models-provider-card__meta muted" style="font-size: 12px;">${s.baseUrl??i("commonNA")}</div>
                        <div class="models-provider-card__footer" @click=${c=>c.stopPropagation()}>
                          ${o?r`
                                <button
                                  class="btn btn--sm ${l?"btn-ok":"primary"}"
                                  ?disabled=${e.saving}
                                  @click=${c=>{c.stopPropagation(),e.onUseModelClick(n)}}
                                >
                                  ${i("modelsUseAsDefault")}
                                </button>
                              `:r`<button class="btn btn--sm" disabled>${i("modelsUseAsDefault")}</button>`}
                          <button
                            class="btn btn--sm"
                            ?disabled=${e.saving}
                            @click=${c=>{c.stopPropagation(),e.onSelect(e.selectedProvider===n?null:n)}}
                          >
                            ${i("channelsConfigure")}
                          </button>
                          <button
                            class="btn btn--sm ${l?"btn-ok":""}"
                            ?disabled=${e.saving||!l}
                            @click=${c=>{c.stopPropagation(),e.onCancelUse(n)}}
                          >
                            ${i("modelsCancelUse")}
                          </button>
                        </div>
                      </div>
                    `})}
              </div>
            `}
    </section>

    ${e.addProviderModalOpen?r`
          <div class="channel-panel-overlay" @click=${e.onAddProviderModalClose}>
            <div class="channel-panel card" style="max-width: 480px;" @click=${n=>n.stopPropagation()}>
              <div class="channel-panel-header row" style="justify-content: space-between; align-items: center;">
                <div class="card-title">${i("modelsAddCustomProvider")}</div>
                <button class="btn" @click=${e.onAddProviderModalClose}>×</button>
              </div>
              <div class="channel-panel-content">
                <div class="config-form">
                  <div class="field">
                    <span>${i("modelsProviderId")} *</span>
                    <input
                      type="text"
                      .value=${e.addProviderForm.providerId}
                      placeholder=${i("modelsProviderIdPlaceholder")}
                      @input=${n=>e.onAddProviderFormChange({providerId:n.target.value.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9_-]/g,"")})}
                    />
                    <small class="muted" style="font-size: 11px;">${i("modelsProviderIdHint")}</small>
                  </div>
                  <div class="field">
                    <span>${i("modelsDisplayName")} *</span>
                    <input
                      type="text"
                      .value=${e.addProviderForm.displayName}
                      placeholder=${i("modelsDisplayNamePlaceholder")}
                      @input=${n=>e.onAddProviderFormChange({displayName:n.target.value})}
                    />
                  </div>
                  <div class="field">
                    <span>${i("modelsDefaultBaseUrl")}</span>
                    <input
                      type="text"
                      .value=${e.addProviderForm.baseUrl}
                      placeholder=${i("modelsDefaultBaseUrlPlaceholder")}
                      @input=${n=>e.onAddProviderFormChange({baseUrl:n.target.value})}
                    />
                  </div>
                  <div class="field">
                    <span>${i("modelsApiKey")}</span>
                    <input
                      type="password"
                      .value=${e.addProviderForm.apiKey}
                      placeholder="sk-... or $ENV_VAR"
                      @input=${n=>e.onAddProviderFormChange({apiKey:n.target.value})}
                    />
                  </div>
                  <div class="field">
                    <span>${i("modelsApiKeyPrefix")}</span>
                    <input
                      type="text"
                      .value=${e.addProviderForm.apiKeyPrefix}
                      placeholder=${i("modelsApiKeyPrefixPlaceholder")}
                      @input=${n=>e.onAddProviderFormChange({apiKeyPrefix:n.target.value})}
                    />
                  </div>
                </div>
                <div class="row" style="margin-top: 16px; gap: 8px;">
                  <button class="btn" @click=${e.onAddProviderModalClose}>${i("commonCancel")}</button>
                  <button
                    class="btn primary"
                    ?disabled=${!e.addProviderForm.providerId.trim()||!e.addProviderForm.displayName.trim()}
                    @click=${e.onAddProviderSubmit}
                  >
                    ${i("commonCreate")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        `:y}

    ${e.useModelModalOpen&&e.useModelModalProvider?r`
          <div class="channel-panel-overlay" style="z-index: 165;" @click=${e.onUseModelModalClose}>
            <div class="channel-panel card" style="max-width: 400px;" @click=${n=>n.stopPropagation()}>
              <div class="channel-panel-header row" style="justify-content: space-between; align-items: center;">
                <div class="card-title">${dn(e.useModelModalProvider,e.providers?.[e.useModelModalProvider])} - ${i("modelsSelectModelToUse")}</div>
                <button class="btn" @click=${e.onUseModelModalClose}>×</button>
              </div>
              <div class="channel-panel-content">
                <ul style="list-style: none; padding: 0; margin: 0;">
                  ${ub(e.useModelModalProvider,e.providers?.[e.useModelModalProvider]).map(n=>{const s=t?.provider===e.useModelModalProvider&&t?.modelId===n.id;return r`
                        <li style="padding: 10px 0; border-bottom: 1px solid var(--border-color, #eee);">
                          <button
                            class="btn ${s?"btn-ok":""}"
                            style="width: 100%; justify-content: flex-start; text-align: left;"
                            ?disabled=${e.saving}
                            @click=${()=>e.onUseModel(e.useModelModalProvider,n.id)}
                          >
                            <code>${n.id}</code> ${n.name?`- ${n.name}`:""}
                          </button>
                        </li>
                      `})}
                </ul>
              </div>
            </div>
          </div>
        `:y}

    ${e.addModelModalOpen&&e.selectedProvider?r`
          <div class="channel-panel-overlay" style="z-index: 160;" @click=${e.onAddModelModalClose}>
            <div class="channel-panel card" style="max-width: 400px;" @click=${n=>n.stopPropagation()}>
              <div class="channel-panel-header row" style="justify-content: space-between; align-items: center;">
                <div class="card-title">${dn(e.selectedProvider,e.providers?.[e.selectedProvider])} - ${i("modelsAddModel")}</div>
                <button class="btn" @click=${e.onAddModelModalClose}>×</button>
              </div>
              <div class="channel-panel-content">
                <div class="config-form">
                  <div class="field">
                    <span>${i("modelsModelId")} *</span>
                    <input
                      type="text"
                      .value=${e.addModelForm.modelId}
                      placeholder="e.g. qwen3-max"
                      @input=${n=>e.onAddModelFormChange({modelId:n.target.value})}
                    />
                  </div>
                  <div class="field">
                    <span>${i("modelsModelName")} *</span>
                    <input
                      type="text"
                      .value=${e.addModelForm.modelName}
                      placeholder="e.g. Qwen3 Max"
                      @input=${n=>e.onAddModelFormChange({modelName:n.target.value})}
                    />
                  </div>
                </div>
                <div class="row" style="margin-top: 16px; gap: 8px;">
                  <button class="btn" @click=${e.onAddModelModalClose}>${i("commonCancel")}</button>
                  <button
                    class="btn primary"
                    ?disabled=${!e.addModelForm.modelId.trim()||!e.addModelForm.modelName.trim()}
                    @click=${()=>e.onAddModelSubmit(e.selectedProvider)}
                  >
                    ${i("modelsAddModel")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        `:y}

    ${e.selectedProvider&&(e.providers?.[e.selectedProvider]??Ee.find(n=>n.id===e.selectedProvider))?r`
            <div class="channel-panel-overlay" @click=${n=>{n.target.classList.contains("channel-panel-overlay")&&e.onCancel()}}>
              <div class="channel-panel card" @click=${n=>n.stopPropagation()}>
                <div class="channel-panel-header row" style="justify-content: space-between; align-items: center;">
                  <div class="card-title">
                    ${dn(e.selectedProvider,e.providers?.[e.selectedProvider])} ${i("configSettingsTitle")}
                  </div>
                  <button class="btn" @click=${e.onCancel}>×</button>
                </div>
                <div class="channel-panel-content">
                  ${e.saveError?r`<div class="callout" style="margin-bottom: 12px; color: var(--color-error, #c00);">${i("modelsEnvVarConflict")}: ${e.saveError}</div>`:y}
                  <div class="config-form">
                    <div class="field">
                      <span>${i("modelsBaseUrl")}</span>
                      <input
                        type="text"
                        .value=${e.providers?.[e.selectedProvider]?.baseUrl??Ee.find(n=>n.id===e.selectedProvider)?.baseUrl??""}
                        placeholder=${Ee.find(n=>n.id===e.selectedProvider)?.baseUrl??""}
                        @input=${n=>e.onPatch(e.selectedProvider,{baseUrl:n.target.value})}
                      />
                    </div>
                    <div class="field">
                      <span>${i("modelsApiKey")}</span>
                      <input
                        type="password"
                        .value=${e.providers?.[e.selectedProvider]?.apiKey??""}
                        placeholder="sk-... or $ENV_VAR"
                        @input=${n=>e.onPatch(e.selectedProvider,{apiKey:n.target.value})}
                      />
                    </div>
                    ${Ee.some(n=>n.id===e.selectedProvider)?y:r`
                          <div class="field">
                            <span>${i("modelsDisplayName")}</span>
                            <input
                              type="text"
                              .value=${e.providers?.[e.selectedProvider]?.displayName??""}
                              placeholder=${e.selectedProvider}
                              @input=${n=>e.onPatch(e.selectedProvider,{displayName:n.target.value})}
                            />
                          </div>
                        `}
                    <div class="field">
                      <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span>${i("modelsApiType")}</span>
                        <span
                          class="muted"
                          style="cursor: help; font-size: 12px;"
                          title=${i("modelsApiTypeTooltip")}
                        >?</span>
                      </div>
                      <select
                        .value=${e.providers?.[e.selectedProvider]?.api??Ee.find(n=>n.id===e.selectedProvider)?.defaultApi??"openai-completions"}
                        @change=${n=>e.onPatch(e.selectedProvider,{api:n.target.value})}
                      >
                        <option value="openai-completions">${i("modelsApiTypeOpenAI")}</option>
                        <option value="anthropic-messages">${i("modelsApiTypeAnthropic")}</option>
                      </select>
                      <p class="muted" style="font-size: 12px; margin-bottom: 0; margin-top: 6px; line-height: 1.5;">
                        ${i("modelsApiTypeTooltip")}
                      </p>
                    </div>
                  </div>

                  <div style="margin-top: 16px;">
                    <div class="row" style="justify-content: space-between; align-items: center; margin-bottom: 8px;">
                      <strong>${i("modelsModelManagement")}</strong>
                      <button
                        class="btn btn--sm primary"
                        ?disabled=${e.saving}
                        @click=${()=>e.onAddModel(e.selectedProvider)}
                      >
                        + ${i("modelsAddModel")}
                      </button>
                    </div>
                    ${(e.providers?.[e.selectedProvider]?.models??[]).length===0?r`<p class="muted" style="font-size: 13px;">${i("modelsNoModels")}</p>`:r`
                          <ul style="list-style: none; padding: 0; margin: 0;">
                            ${(e.providers?.[e.selectedProvider]?.models??[]).map(n=>{const s=`${e.selectedProvider}/${n.id}`,a=e.modelEnv?.[s]??{},o=Object.entries(a);return r`
                                <li style="padding: 8px 0; border-bottom: 1px solid var(--border-color, #eee);">
                                  <div class="row" style="justify-content: space-between; align-items: center;">
                                    <span><code>${n.id}</code> ${n.name?`- ${n.name}`:""}</span>
                                    <button
                                      class="btn btn--sm"
                                      ?disabled=${e.saving}
                                      @click=${()=>e.onRemoveModel(e.selectedProvider,n.id)}
                                    >
                                      ${i("commonDelete")}
                                    </button>
                                  </div>
                                  <div style="margin-top: 6px; font-size: 12px;">
                                    <strong class="muted">${i("modelsEnvVars")}</strong>
                                    ${o.length===0?r`
                                          <button
                                            class="btn btn--sm"
                                            style="font-size: 11px; margin-top: 4px;"
                                            @click=${()=>e.onPatchModelEnv(e.selectedProvider,n.id,{__new__:""})}
                                          >
                                            + ${i("envVarsAdd")}
                                          </button>
                                        `:r`
                                          <div style="margin-top: 4px;">
                                            ${o.map(([l,c])=>r`
                                              <div class="row" style="gap: 6px; align-items: center; margin-top: 4px;">
                                                <input
                                                  type="text"
                                                  style="flex: 1; font-size: 11px; padding: 4px;"
                                                  placeholder=${i("envVarsKeyPlaceholder")}
                                                  .value=${l==="__new__"?"":l}
                                                  @input=${u=>{const f=u.target.value,p={...a};delete p[l],f&&(p[f]=c),e.onPatchModelEnv(e.selectedProvider,n.id,p)}}
                                                />
                                                <input
                                                  type="text"
                                                  style="flex: 1; font-size: 11px; padding: 4px;"
                                                  placeholder=${i("envVarsValuePlaceholder")}
                                                  .value=${c}
                                                  @input=${u=>{const f={...a};f[l]=u.target.value,e.onPatchModelEnv(e.selectedProvider,n.id,f)}}
                                                />
                                                <button class="btn btn--sm" style="font-size: 11px;" @click=${()=>{const u={...a};delete u[l],e.onPatchModelEnv(e.selectedProvider,n.id,u)}}>×</button>
                                              </div>
                                            `)}
                                            <button
                                              class="btn btn--sm"
                                              style="margin-top: 4px; font-size: 11px;"
                                              @click=${()=>{const l={...a,__new__:""};e.onPatchModelEnv(e.selectedProvider,n.id,l)}}
                                            >
                                              + ${i("envVarsAdd")}
                                            </button>
                                          </div>
                                        `}
                                  </div>
                                </li>
                              `})}
                          </ul>
                        `}
                  </div>

                  <div class="row" style="margin-top: 16px; gap: 8px;">
                    <button
                      class="btn primary"
                      ?disabled=${e.saving||!e.formDirty}
                      @click=${e.onSave}
                    >
                      ${e.saving?i("commonSaving"):i("commonSave")}
                    </button>
                    <button class="btn" ?disabled=${e.saving} @click=${e.onCancel}>
                      ×
                    </button>
                  </div>
                </div>
              </div>
            </div>
          `:y}
  `}const gb=new Set(["agent","channel","chat","provider","model","tool","label","key","session","id","has","mintokens","maxtokens","mincost","maxcost","minmessages","maxmessages"]),us=e=>e.trim().toLowerCase(),mb=e=>{const t=e.replace(/[.+^${}()|[\]\\]/g,"\\$&").replace(/\*/g,".*").replace(/\?/g,".");return new RegExp(`^${t}$`,"i")},bt=e=>{let t=e.trim().toLowerCase();if(!t)return null;t.startsWith("$")&&(t=t.slice(1));let n=1;t.endsWith("k")?(n=1e3,t=t.slice(0,-1)):t.endsWith("m")&&(n=1e6,t=t.slice(0,-1));const s=Number(t);return Number.isFinite(s)?s*n:null},_o=e=>(e.match(/"[^"]+"|\S+/g)??[]).map(n=>{const s=n.replace(/^"|"$/g,""),a=s.indexOf(":");if(a>0){const o=s.slice(0,a),l=s.slice(a+1);return{key:o,value:l,raw:s}}return{value:s,raw:s}}),fb=e=>[e.label,e.key,e.sessionId].filter(n=>!!n).map(n=>n.toLowerCase()),Fl=e=>{const t=new Set;e.modelProvider&&t.add(e.modelProvider.toLowerCase()),e.providerOverride&&t.add(e.providerOverride.toLowerCase()),e.origin?.provider&&t.add(e.origin.provider.toLowerCase());for(const n of e.usage?.modelUsage??[])n.provider&&t.add(n.provider.toLowerCase());return Array.from(t)},Bl=e=>{const t=new Set;e.model&&t.add(e.model.toLowerCase());for(const n of e.usage?.modelUsage??[])n.model&&t.add(n.model.toLowerCase());return Array.from(t)},hb=e=>(e.usage?.toolUsage?.tools??[]).map(t=>t.name.toLowerCase()),vb=(e,t)=>{const n=us(t.value??"");if(!n)return!0;if(!t.key)return fb(e).some(a=>a.includes(n));switch(us(t.key)){case"agent":return e.agentId?.toLowerCase().includes(n)??!1;case"channel":return e.channel?.toLowerCase().includes(n)??!1;case"chat":return e.chatType?.toLowerCase().includes(n)??!1;case"provider":return Fl(e).some(a=>a.includes(n));case"model":return Bl(e).some(a=>a.includes(n));case"tool":return hb(e).some(a=>a.includes(n));case"label":return e.label?.toLowerCase().includes(n)??!1;case"key":case"session":case"id":if(n.includes("*")||n.includes("?")){const a=mb(n);return a.test(e.key)||(e.sessionId?a.test(e.sessionId):!1)}return e.key.toLowerCase().includes(n)||(e.sessionId?.toLowerCase().includes(n)??!1);case"has":switch(n){case"tools":return(e.usage?.toolUsage?.totalCalls??0)>0;case"errors":return(e.usage?.messageCounts?.errors??0)>0;case"context":return!!e.contextWeight;case"usage":return!!e.usage;case"model":return Bl(e).length>0;case"provider":return Fl(e).length>0;default:return!0}case"mintokens":{const a=bt(n);return a===null?!0:(e.usage?.totalTokens??0)>=a}case"maxtokens":{const a=bt(n);return a===null?!0:(e.usage?.totalTokens??0)<=a}case"mincost":{const a=bt(n);return a===null?!0:(e.usage?.totalCost??0)>=a}case"maxcost":{const a=bt(n);return a===null?!0:(e.usage?.totalCost??0)<=a}case"minmessages":{const a=bt(n);return a===null?!0:(e.usage?.messageCounts?.total??0)>=a}case"maxmessages":{const a=bt(n);return a===null?!0:(e.usage?.messageCounts?.total??0)<=a}default:return!0}},yb=(e,t)=>{const n=_o(t);if(n.length===0)return{sessions:e,warnings:[]};const s=[];for(const o of n){if(!o.key)continue;const l=us(o.key);if(!gb.has(l)){s.push(`Unknown filter: ${o.key}`);continue}if(o.value===""&&s.push(`Missing value for ${o.key}`),l==="has"){const c=new Set(["tools","errors","context","usage","model","provider"]);o.value&&!c.has(us(o.value))&&s.push(`Unknown has:${o.value}`)}["mintokens","maxtokens","mincost","maxcost","minmessages","maxmessages"].includes(l)&&o.value&&bt(o.value)===null&&s.push(`Invalid number for ${o.key}`)}return{sessions:e.filter(o=>n.every(l=>vb(o,l))),warnings:s}};function bb(e){const t=e.split(`
`),n=new Map,s=[];for(const c of t){const u=/^\[Tool:\s*([^\]]+)\]/.exec(c.trim());if(u){const f=u[1];n.set(f,(n.get(f)??0)+1);continue}c.trim().startsWith("[Tool Result]")||s.push(c)}const a=Array.from(n.entries()).toSorted((c,u)=>u[1]-c[1]),o=a.reduce((c,[,u])=>c+u,0),l=a.length>0?`Tools: ${a.map(([c,u])=>`${c}×${u}`).join(", ")} (${o} calls)`:"";return{tools:a,summary:l,cleanContent:s.join(`
`).trim()}}const wb=`
  .usage-page-header {
    margin: 4px 0 12px;
  }
  .usage-page-title {
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 4px;
  }
  .usage-page-subtitle {
    font-size: 13px;
    color: var(--text-muted);
    margin: 0 0 12px;
  }
  /* ===== FILTERS & HEADER ===== */
  .usage-filters-inline {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  }
  .usage-filters-inline select {
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
  }
  .usage-filters-inline input[type="date"] {
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
  }
  .usage-filters-inline input[type="text"] {
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
    min-width: 180px;
  }
  .usage-filters-inline .btn-sm {
    padding: 6px 12px;
    font-size: 14px;
  }
  .usage-refresh-indicator {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background: rgba(255, 77, 77, 0.1);
    border-radius: 4px;
    font-size: 12px;
    color: #ff4d4d;
  }
  .usage-refresh-indicator::before {
    content: "";
    width: 10px;
    height: 10px;
    border: 2px solid #ff4d4d;
    border-top-color: transparent;
    border-radius: 50%;
    animation: usage-spin 0.6s linear infinite;
  }
  @keyframes usage-spin {
    to { transform: rotate(360deg); }
  }
  .active-filters {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  .filter-chip {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px 4px 12px;
    background: var(--accent-subtle);
    border: 1px solid var(--accent);
    border-radius: 16px;
    font-size: 12px;
  }
  .filter-chip-label {
    color: var(--accent);
    font-weight: 500;
  }
  .filter-chip-remove {
    background: none;
    border: none;
    color: var(--accent);
    cursor: pointer;
    padding: 2px 4px;
    font-size: 14px;
    line-height: 1;
    opacity: 0.7;
    transition: opacity 0.15s;
  }
  .filter-chip-remove:hover {
    opacity: 1;
  }
  .filter-clear-btn {
    padding: 4px 10px !important;
    font-size: 12px !important;
    line-height: 1 !important;
    margin-left: 8px;
  }
  .usage-query-bar {
    display: grid;
    grid-template-columns: minmax(220px, 1fr) auto;
    gap: 10px;
    align-items: center;
    /* Keep the dropdown filter row from visually touching the query row. */
    margin-bottom: 10px;
  }
  .usage-query-actions {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: nowrap;
    justify-self: end;
  }
  .usage-query-actions .btn {
    height: 34px;
    padding: 0 14px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 13px;
    line-height: 1;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    color: var(--text);
    box-shadow: none;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }
  .usage-query-actions .btn:hover {
    background: var(--bg);
    border-color: var(--border-strong);
  }
  .usage-action-btn {
    height: 34px;
    padding: 0 14px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 13px;
    line-height: 1;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    color: var(--text);
    box-shadow: none;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }
  .usage-action-btn:hover {
    background: var(--bg);
    border-color: var(--border-strong);
  }
  .usage-primary-btn {
    background: #ff4d4d;
    color: #fff;
    border-color: #ff4d4d;
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.12);
  }
  .btn.usage-primary-btn {
    background: #ff4d4d !important;
    border-color: #ff4d4d !important;
    color: #fff !important;
  }
  .usage-primary-btn:hover {
    background: #e64545;
    border-color: #e64545;
  }
  .btn.usage-primary-btn:hover {
    background: #e64545 !important;
    border-color: #e64545 !important;
  }
  .usage-primary-btn:disabled {
    background: rgba(255, 77, 77, 0.18);
    border-color: rgba(255, 77, 77, 0.3);
    color: #ff4d4d;
    box-shadow: none;
    cursor: default;
    opacity: 1;
  }
  .usage-primary-btn[disabled] {
    background: rgba(255, 77, 77, 0.18) !important;
    border-color: rgba(255, 77, 77, 0.3) !important;
    color: #ff4d4d !important;
    opacity: 1 !important;
  }
  .usage-secondary-btn {
    background: var(--bg-secondary);
    color: var(--text);
    border-color: var(--border);
  }
  .usage-query-input {
    width: 100%;
    min-width: 220px;
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 13px;
  }
  .usage-query-suggestions {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 6px;
  }
  .usage-query-suggestion {
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
    color: var(--text);
    cursor: pointer;
    transition: background 0.15s;
  }
  .usage-query-suggestion:hover {
    background: var(--bg-hover);
  }
  .usage-filter-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    margin-top: 14px;
  }
  details.usage-filter-select {
    position: relative;
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 6px 10px;
    background: var(--bg);
    font-size: 12px;
    min-width: 140px;
  }
  details.usage-filter-select summary {
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    font-weight: 500;
  }
  details.usage-filter-select summary::-webkit-details-marker {
    display: none;
  }
  .usage-filter-badge {
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-filter-popover {
    position: absolute;
    left: 0;
    top: calc(100% + 6px);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    min-width: 220px;
    z-index: 20;
  }
  .usage-filter-actions {
    display: flex;
    gap: 6px;
    margin-bottom: 8px;
  }
  .usage-filter-actions button {
    border-radius: 999px;
    padding: 4px 10px;
    font-size: 11px;
  }
  .usage-filter-options {
    display: flex;
    flex-direction: column;
    gap: 6px;
    max-height: 200px;
    overflow: auto;
  }
  .usage-filter-option {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
  }
  .usage-query-hint {
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-query-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 6px;
  }
  .usage-query-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
  }
  .usage-query-chip button {
    background: none;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    padding: 0;
    line-height: 1;
  }
  .usage-header {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: var(--bg);
  }
  .usage-header.pinned {
    position: sticky;
    top: 12px;
    z-index: 6;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  }
  .usage-pin-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
    color: var(--text);
    cursor: pointer;
  }
  .usage-pin-btn.active {
    background: var(--accent-subtle);
    border-color: var(--accent);
    color: var(--accent);
  }
  .usage-header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
  }
  .usage-header-title {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .usage-header-metrics {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }
  .usage-metric-badge {
    display: inline-flex;
    align-items: baseline;
    gap: 6px;
    padding: 2px 8px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: transparent;
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-metric-badge strong {
    font-size: 12px;
    color: var(--text);
  }
  .usage-controls {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }
  .usage-controls .active-filters {
    flex: 1 1 100%;
  }
  .usage-controls input[type="date"] {
    min-width: 140px;
  }
  .usage-presets {
    display: inline-flex;
    gap: 6px;
    flex-wrap: wrap;
  }
  .usage-presets .btn {
    padding: 4px 8px;
    font-size: 11px;
  }
  .usage-quick-filters {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  }
  .usage-select {
    min-width: 120px;
    padding: 6px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--bg);
    color: var(--text);
    font-size: 12px;
  }
  .usage-export-menu summary {
    cursor: pointer;
    font-weight: 500;
    color: var(--text);
    list-style: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .usage-export-menu summary::-webkit-details-marker {
    display: none;
  }
  .usage-export-menu {
    position: relative;
  }
  .usage-export-button {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--bg);
    font-size: 12px;
  }
  .usage-export-popover {
    position: absolute;
    right: 0;
    top: calc(100% + 6px);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 8px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    min-width: 160px;
    z-index: 10;
  }
  .usage-export-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .usage-export-item {
    text-align: left;
    padding: 6px 10px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 12px;
  }
  .usage-summary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px;
    margin-top: 12px;
  }
  .usage-summary-card {
    padding: 12px;
    border-radius: 8px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
  }
  .usage-mosaic {
    margin-top: 16px;
    padding: 16px;
  }
  .usage-mosaic-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 12px;
  }
  .usage-mosaic-title {
    font-weight: 600;
  }
  .usage-mosaic-sub {
    font-size: 12px;
    color: var(--text-muted);
  }
  .usage-mosaic-grid {
    display: grid;
    grid-template-columns: minmax(200px, 1fr) minmax(260px, 2fr);
    gap: 16px;
    align-items: start;
  }
  .usage-mosaic-section {
    background: var(--bg-subtle);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 12px;
  }
  .usage-mosaic-section-title {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .usage-mosaic-total {
    font-size: 20px;
    font-weight: 700;
  }
  .usage-daypart-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    gap: 8px;
  }
  .usage-daypart-cell {
    border-radius: 8px;
    padding: 10px;
    color: var(--text);
    background: rgba(255, 77, 77, 0.08);
    border: 1px solid rgba(255, 77, 77, 0.2);
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .usage-daypart-label {
    font-size: 12px;
    font-weight: 600;
  }
  .usage-daypart-value {
    font-size: 14px;
  }
  .usage-hour-grid {
    display: grid;
    grid-template-columns: repeat(24, minmax(6px, 1fr));
    gap: 4px;
  }
  .usage-hour-cell {
    height: 28px;
    border-radius: 6px;
    background: rgba(255, 77, 77, 0.1);
    border: 1px solid rgba(255, 77, 77, 0.2);
    cursor: pointer;
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  .usage-hour-cell.selected {
    border-color: rgba(255, 77, 77, 0.8);
    box-shadow: 0 0 0 2px rgba(255, 77, 77, 0.2);
  }
  .usage-hour-labels {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 6px;
    margin-top: 8px;
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-hour-legend {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-top: 10px;
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-hour-legend span {
    display: inline-block;
    width: 14px;
    height: 10px;
    border-radius: 4px;
    background: rgba(255, 77, 77, 0.15);
    border: 1px solid rgba(255, 77, 77, 0.2);
  }
  .usage-calendar-labels {
    display: grid;
    grid-template-columns: repeat(7, minmax(10px, 1fr));
    gap: 6px;
    font-size: 10px;
    color: var(--text-muted);
    margin-bottom: 6px;
  }
  .usage-calendar {
    display: grid;
    grid-template-columns: repeat(7, minmax(10px, 1fr));
    gap: 6px;
  }
  .usage-calendar-cell {
    height: 18px;
    border-radius: 4px;
    border: 1px solid rgba(255, 77, 77, 0.2);
    background: rgba(255, 77, 77, 0.08);
  }
  .usage-calendar-cell.empty {
    background: transparent;
    border-color: transparent;
  }
  .usage-summary-title {
    font-size: 11px;
    color: var(--text-muted);
    margin-bottom: 6px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .usage-info {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    margin-left: 6px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg);
    font-size: 10px;
    color: var(--text-muted);
    cursor: help;
  }
  .usage-summary-value {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-strong);
  }
  .usage-summary-value.good {
    color: #1f8f4e;
  }
  .usage-summary-value.warn {
    color: #c57a00;
  }
  .usage-summary-value.bad {
    color: #c9372c;
  }
  .usage-summary-hint {
    font-size: 10px;
    color: var(--text-muted);
    cursor: help;
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 0 6px;
    line-height: 16px;
    height: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .usage-summary-sub {
    font-size: 11px;
    color: var(--text-muted);
    margin-top: 4px;
  }
  .usage-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .usage-list-item {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    font-size: 12px;
    color: var(--text);
    align-items: flex-start;
  }
  .usage-list-value {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
    text-align: right;
  }
  .usage-list-sub {
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-list-item.button {
    border: none;
    background: transparent;
    padding: 0;
    text-align: left;
    cursor: pointer;
  }
  .usage-list-item.button:hover {
    color: var(--text-strong);
  }
  .usage-list-item .muted {
    font-size: 11px;
  }
  .usage-error-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .usage-error-row {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 8px;
    align-items: center;
    font-size: 12px;
  }
  .usage-error-date {
    font-weight: 600;
  }
  .usage-error-rate {
    font-variant-numeric: tabular-nums;
  }
  .usage-error-sub {
    grid-column: 1 / -1;
    font-size: 11px;
    color: var(--text-muted);
  }
  .usage-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 8px;
  }
  .usage-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 2px 8px;
    border: 1px solid var(--border);
    border-radius: 999px;
    font-size: 11px;
    background: var(--bg);
    color: var(--text);
  }
  .usage-meta-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
  }
  .usage-meta-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 12px;
  }
  .usage-meta-item span {
    color: var(--text-muted);
    font-size: 11px;
  }
  .usage-insights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin-top: 12px;
  }
  .usage-insight-card {
    padding: 14px;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
  }
  .usage-insight-title {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .usage-insight-subtitle {
    font-size: 11px;
    color: var(--text-muted);
    margin-top: 6px;
  }
  /* ===== CHART TOGGLE ===== */
  .chart-toggle {
    display: flex;
    background: var(--bg);
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid var(--border);
  }
  .chart-toggle .toggle-btn {
    padding: 6px 14px;
    font-size: 13px;
    background: transparent;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    transition: all 0.15s;
  }
  .chart-toggle .toggle-btn:hover {
    color: var(--text);
  }
  .chart-toggle .toggle-btn.active {
    background: #ff4d4d;
    color: white;
  }
  .chart-toggle.small .toggle-btn {
    padding: 4px 8px;
    font-size: 11px;
  }
  .sessions-toggle {
    border-radius: 4px;
  }
  .sessions-toggle .toggle-btn {
    border-radius: 4px;
  }
  .daily-chart-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    margin-bottom: 6px;
  }

  /* ===== DAILY BAR CHART ===== */
  .daily-chart {
    margin-top: 12px;
  }
  .daily-chart-bars {
    display: flex;
    align-items: flex-end;
    height: 200px;
    gap: 4px;
    padding: 8px 4px 36px;
  }
  .daily-bar-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: flex-end;
    cursor: pointer;
    position: relative;
    border-radius: 4px 4px 0 0;
    transition: background 0.15s;
    min-width: 0;
  }
  .daily-bar-wrapper:hover {
    background: var(--bg-hover);
  }
  .daily-bar-wrapper.selected {
    background: var(--accent-subtle);
  }
  .daily-bar-wrapper.selected .daily-bar {
    background: var(--accent);
  }
  .daily-bar {
    width: 100%;
    max-width: var(--bar-max-width, 32px);
    background: #ff4d4d;
    border-radius: 3px 3px 0 0;
    min-height: 2px;
    transition: all 0.15s;
    overflow: hidden;
  }
  .daily-bar-wrapper:hover .daily-bar {
    background: #cc3d3d;
  }
  .daily-bar-label {
    position: absolute;
    bottom: -28px;
    font-size: 10px;
    color: var(--text-muted);
    white-space: nowrap;
    text-align: center;
    transform: rotate(-35deg);
    transform-origin: top center;
  }
  .daily-bar-total {
    position: absolute;
    top: -16px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 10px;
    color: var(--text-muted);
    white-space: nowrap;
  }
  .daily-bar-tooltip {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 8px 12px;
    font-size: 12px;
    white-space: nowrap;
    z-index: 100;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.15s;
  }
  .daily-bar-wrapper:hover .daily-bar-tooltip {
    opacity: 1;
  }

  /* ===== COST/TOKEN BREAKDOWN BAR ===== */
  .cost-breakdown {
    margin-top: 18px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
  }
  .cost-breakdown-header {
    font-weight: 600;
    font-size: 15px;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
    color: var(--text-strong);
  }
  .cost-breakdown-bar {
    height: 28px;
    background: var(--bg);
    border-radius: 6px;
    overflow: hidden;
    display: flex;
  }
  .cost-segment {
    height: 100%;
    transition: width 0.3s ease;
    position: relative;
  }
  .cost-segment.output {
    background: #ef4444;
  }
  .cost-segment.input {
    background: #f59e0b;
  }
  .cost-segment.cache-write {
    background: #10b981;
  }
  .cost-segment.cache-read {
    background: #06b6d4;
  }
  .cost-breakdown-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 12px;
  }
  .cost-breakdown-total {
    margin-top: 10px;
    font-size: 12px;
    color: var(--text-muted);
  }
  .legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--text);
    cursor: help;
  }
  .legend-dot {
    width: 10px;
    height: 10px;
    border-radius: 2px;
    flex-shrink: 0;
  }
  .legend-dot.output {
    background: #ef4444;
  }
  .legend-dot.input {
    background: #f59e0b;
  }
  .legend-dot.cache-write {
    background: #10b981;
  }
  .legend-dot.cache-read {
    background: #06b6d4;
  }
  .legend-dot.system {
    background: #ff4d4d;
  }
  .legend-dot.skills {
    background: #8b5cf6;
  }
  .legend-dot.tools {
    background: #ec4899;
  }
  .legend-dot.files {
    background: #f59e0b;
  }
  .cost-breakdown-note {
    margin-top: 10px;
    font-size: 11px;
    color: var(--text-muted);
    line-height: 1.4;
  }

  /* ===== SESSION BARS (scrollable list) ===== */
  .session-bars {
    margin-top: 16px;
    max-height: 400px;
    overflow-y: auto;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--bg);
  }
  .session-bar-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 14px;
    border-bottom: 1px solid var(--border);
    cursor: pointer;
    transition: background 0.15s;
  }
  .session-bar-row:last-child {
    border-bottom: none;
  }
  .session-bar-row:hover {
    background: var(--bg-hover);
  }
  .session-bar-row.selected {
    background: var(--accent-subtle);
  }
  .session-bar-label {
    flex: 1 1 auto;
    min-width: 0;
    font-size: 13px;
    color: var(--text);
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .session-bar-title {
    /* Prefer showing the full name; wrap instead of truncating. */
    white-space: normal;
    overflow-wrap: anywhere;
    word-break: break-word;
  }
  .session-bar-meta {
    font-size: 10px;
    color: var(--text-muted);
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .session-bar-track {
    flex: 0 0 90px;
    height: 6px;
    background: var(--bg-secondary);
    border-radius: 4px;
    overflow: hidden;
    opacity: 0.6;
  }
  .session-bar-fill {
    height: 100%;
    background: rgba(255, 77, 77, 0.7);
    border-radius: 4px;
    transition: width 0.3s ease;
  }
  .session-bar-value {
    flex: 0 0 70px;
    text-align: right;
    font-size: 12px;
    font-family: var(--font-mono);
    color: var(--text-muted);
  }
  .session-bar-actions {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    flex: 0 0 auto;
  }
  .session-copy-btn {
    height: 26px;
    padding: 0 10px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    font-size: 11px;
    font-weight: 600;
    color: var(--text-muted);
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }
  .session-copy-btn:hover {
    background: var(--bg);
    border-color: var(--border-strong);
    color: var(--text);
  }

  /* ===== TIME SERIES CHART ===== */
  .session-timeseries {
    margin-top: 24px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
  }
  .timeseries-header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }
  .timeseries-controls {
    display: flex;
    gap: 6px;
    align-items: center;
  }
  .timeseries-header {
    font-weight: 600;
    color: var(--text);
  }
  .timeseries-chart {
    width: 100%;
    overflow: hidden;
  }
  .timeseries-svg {
    width: 100%;
    height: auto;
    display: block;
  }
  .timeseries-svg .axis-label {
    font-size: 10px;
    fill: var(--text-muted);
  }
  .timeseries-svg .ts-area {
    fill: #ff4d4d;
    fill-opacity: 0.1;
  }
  .timeseries-svg .ts-line {
    fill: none;
    stroke: #ff4d4d;
    stroke-width: 2;
  }
  .timeseries-svg .ts-dot {
    fill: #ff4d4d;
    transition: r 0.15s, fill 0.15s;
  }
  .timeseries-svg .ts-dot:hover {
    r: 5;
  }
  .timeseries-svg .ts-bar {
    fill: #ff4d4d;
    transition: fill 0.15s;
  }
  .timeseries-svg .ts-bar:hover {
    fill: #cc3d3d;
  }
  .timeseries-svg .ts-bar.output { fill: #ef4444; }
  .timeseries-svg .ts-bar.input { fill: #f59e0b; }
  .timeseries-svg .ts-bar.cache-write { fill: #10b981; }
  .timeseries-svg .ts-bar.cache-read { fill: #06b6d4; }
  .timeseries-summary {
    margin-top: 12px;
    font-size: 13px;
    color: var(--text-muted);
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .timeseries-loading {
    padding: 24px;
    text-align: center;
    color: var(--text-muted);
  }

  /* ===== SESSION LOGS ===== */
  .session-logs {
    margin-top: 24px;
    background: var(--bg-secondary);
    border-radius: 8px;
    overflow: hidden;
  }
  .session-logs-header {
    padding: 10px 14px;
    font-weight: 600;
    border-bottom: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    background: var(--bg-secondary);
  }
  .session-logs-loading {
    padding: 24px;
    text-align: center;
    color: var(--text-muted);
  }
  .session-logs-list {
    max-height: 400px;
    overflow-y: auto;
  }
  .session-log-entry {
    padding: 10px 14px;
    border-bottom: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    gap: 6px;
    background: var(--bg);
  }
  .session-log-entry:last-child {
    border-bottom: none;
  }
  .session-log-entry.user {
    border-left: 3px solid var(--accent);
  }
  .session-log-entry.assistant {
    border-left: 3px solid var(--border-strong);
  }
  .session-log-meta {
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 11px;
    color: var(--text-muted);
    flex-wrap: wrap;
  }
  .session-log-role {
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 999px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
  }
  .session-log-entry.user .session-log-role {
    color: var(--accent);
  }
  .session-log-entry.assistant .session-log-role {
    color: var(--text-muted);
  }
  .session-log-content {
    font-size: 13px;
    line-height: 1.5;
    color: var(--text);
    white-space: pre-wrap;
    word-break: break-word;
    background: var(--bg-secondary);
    border-radius: 8px;
    padding: 8px 10px;
    border: 1px solid var(--border);
    max-height: 220px;
    overflow-y: auto;
  }

  /* ===== CONTEXT WEIGHT BREAKDOWN ===== */
  .context-weight-breakdown {
    margin-top: 24px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
  }
  .context-weight-breakdown .context-weight-header {
    font-weight: 600;
    font-size: 13px;
    margin-bottom: 4px;
    color: var(--text);
  }
  .context-weight-desc {
    font-size: 12px;
    color: var(--text-muted);
    margin: 0 0 12px 0;
  }
  .context-stacked-bar {
    height: 24px;
    background: var(--bg);
    border-radius: 6px;
    overflow: hidden;
    display: flex;
  }
  .context-segment {
    height: 100%;
    transition: width 0.3s ease;
  }
  .context-segment.system {
    background: #ff4d4d;
  }
  .context-segment.skills {
    background: #8b5cf6;
  }
  .context-segment.tools {
    background: #ec4899;
  }
  .context-segment.files {
    background: #f59e0b;
  }
  .context-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 12px;
  }
  .context-total {
    margin-top: 10px;
    font-size: 12px;
    font-weight: 600;
    color: var(--text-muted);
  }
  .context-details {
    margin-top: 12px;
    border: 1px solid var(--border);
    border-radius: 6px;
    overflow: hidden;
  }
  .context-details summary {
    padding: 10px 14px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
  }
  .context-details[open] summary {
    border-bottom: 1px solid var(--border);
  }
  .context-list {
    max-height: 200px;
    overflow-y: auto;
  }
  .context-list-header {
    display: flex;
    justify-content: space-between;
    padding: 8px 14px;
    font-size: 11px;
    text-transform: uppercase;
    color: var(--text-muted);
    background: var(--bg-secondary);
    border-bottom: 1px solid var(--border);
  }
  .context-list-item {
    display: flex;
    justify-content: space-between;
    padding: 8px 14px;
    font-size: 12px;
    border-bottom: 1px solid var(--border);
  }
  .context-list-item:last-child {
    border-bottom: none;
  }
  .context-list-item .mono {
    font-family: var(--font-mono);
    color: var(--text);
  }
  .context-list-item .muted {
    color: var(--text-muted);
    font-family: var(--font-mono);
  }

  /* ===== NO CONTEXT NOTE ===== */
  .no-context-note {
    margin-top: 24px;
    padding: 16px;
    background: var(--bg-secondary);
    border-radius: 8px;
    font-size: 13px;
    color: var(--text-muted);
    line-height: 1.5;
  }

  /* ===== TWO COLUMN LAYOUT ===== */
  .usage-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
    margin-top: 18px;
    align-items: stretch;
  }
  .usage-grid-left {
    display: flex;
    flex-direction: column;
  }
  .usage-grid-right {
    display: flex;
    flex-direction: column;
  }
  
  /* ===== LEFT CARD (Daily + Breakdown) ===== */
  .usage-left-card {
    /* inherits background, border, shadow from .card */
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .usage-left-card .daily-chart-bars {
    flex: 1;
    min-height: 200px;
  }
  .usage-left-card .sessions-panel-title {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 12px;
  }
  
  /* ===== COMPACT DAILY CHART ===== */
  .daily-chart-compact {
    margin-bottom: 16px;
  }
  .daily-chart-compact .sessions-panel-title {
    margin-bottom: 8px;
  }
  .daily-chart-compact .daily-chart-bars {
    height: 100px;
    padding-bottom: 20px;
  }
  
  /* ===== COMPACT COST BREAKDOWN ===== */
  .cost-breakdown-compact {
    padding: 0;
    margin: 0;
    background: transparent;
    border-top: 1px solid var(--border);
    padding-top: 12px;
  }
  .cost-breakdown-compact .cost-breakdown-header {
    margin-bottom: 8px;
  }
  .cost-breakdown-compact .cost-breakdown-legend {
    gap: 12px;
  }
  .cost-breakdown-compact .cost-breakdown-note {
    display: none;
  }
  
  /* ===== SESSIONS CARD ===== */
  .sessions-card {
    /* inherits background, border, shadow from .card */
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .sessions-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .sessions-card-title {
    font-weight: 600;
    font-size: 14px;
  }
  .sessions-card-count {
    font-size: 12px;
    color: var(--text-muted);
  }
  .sessions-card-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin: 8px 0 10px;
    font-size: 12px;
    color: var(--text-muted);
  }
  .sessions-card-stats {
    display: inline-flex;
    gap: 12px;
  }
  .sessions-sort {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--text-muted);
  }
  .sessions-sort select {
    padding: 4px 8px;
    border-radius: 6px;
    border: 1px solid var(--border);
    background: var(--bg);
    color: var(--text);
    font-size: 12px;
  }
  .sessions-action-btn {
    height: 28px;
    padding: 0 10px;
    border-radius: 8px;
    font-size: 12px;
    line-height: 1;
  }
  .sessions-action-btn.icon {
    width: 32px;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .sessions-card-hint {
    font-size: 11px;
    color: var(--text-muted);
    margin-bottom: 8px;
  }
  .sessions-card .session-bars {
    max-height: 280px;
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    margin: 0;
    overflow-y: auto;
    padding: 8px;
  }
  .sessions-card .session-bar-row {
    padding: 6px 8px;
    border-radius: 6px;
    margin-bottom: 3px;
    border: 1px solid transparent;
    transition: all 0.15s;
  }
  .sessions-card .session-bar-row:hover {
    border-color: var(--border);
    background: var(--bg-hover);
  }
  .sessions-card .session-bar-row.selected {
    border-color: var(--accent);
    background: var(--accent-subtle);
    box-shadow: inset 0 0 0 1px rgba(255, 77, 77, 0.15);
  }
  .sessions-card .session-bar-label {
    flex: 1 1 auto;
    min-width: 140px;
    font-size: 12px;
  }
  .sessions-card .session-bar-value {
    flex: 0 0 60px;
    font-size: 11px;
    font-weight: 600;
  }
  .sessions-card .session-bar-track {
    flex: 0 0 70px;
    height: 5px;
    opacity: 0.5;
  }
  .sessions-card .session-bar-fill {
    background: rgba(255, 77, 77, 0.55);
  }
  .sessions-clear-btn {
    margin-left: auto;
  }
  
  /* ===== EMPTY DETAIL STATE ===== */
  .session-detail-empty {
    margin-top: 18px;
    background: var(--bg-secondary);
    border-radius: 8px;
    border: 2px dashed var(--border);
    padding: 32px;
    text-align: center;
  }
  .session-detail-empty-title {
    font-size: 15px;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 8px;
  }
  .session-detail-empty-desc {
    font-size: 13px;
    color: var(--text-muted);
    margin-bottom: 16px;
    line-height: 1.5;
  }
  .session-detail-empty-features {
    display: flex;
    justify-content: center;
    gap: 24px;
    flex-wrap: wrap;
  }
  .session-detail-empty-feature {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--text-muted);
  }
  .session-detail-empty-feature .icon {
    font-size: 16px;
  }
  
  /* ===== SESSION DETAIL PANEL ===== */
  .session-detail-panel {
    margin-top: 12px;
    /* inherits background, border-radius, shadow from .card */
    border: 2px solid var(--accent) !important;
  }
  .session-detail-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    border-bottom: 1px solid var(--border);
    cursor: pointer;
  }
  .session-detail-header:hover {
    background: var(--bg-hover);
  }
  .session-detail-title {
    font-weight: 600;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .session-detail-header-left {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .session-close-btn {
    background: var(--bg);
    border: 1px solid var(--border);
    color: var(--text);
    cursor: pointer;
    padding: 2px 8px;
    font-size: 16px;
    line-height: 1;
    border-radius: 4px;
    transition: background 0.15s, color 0.15s;
  }
  .session-close-btn:hover {
    background: var(--bg-hover);
    color: var(--text);
    border-color: var(--accent);
  }
  .session-detail-stats {
    display: flex;
    gap: 10px;
    font-size: 12px;
    color: var(--text-muted);
  }
  .session-detail-stats strong {
    color: var(--text);
    font-family: var(--font-mono);
  }
  .session-detail-content {
    padding: 12px;
  }
  .session-summary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 8px;
    margin-bottom: 12px;
  }
  .session-summary-card {
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 8px;
    background: var(--bg-secondary);
  }
  .session-summary-title {
    font-size: 11px;
    color: var(--text-muted);
    margin-bottom: 4px;
  }
  .session-summary-value {
    font-size: 14px;
    font-weight: 600;
  }
  .session-summary-meta {
    font-size: 11px;
    color: var(--text-muted);
    margin-top: 4px;
  }
  .session-detail-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    /* Separate "Usage Over Time" from the summary + Top Tools/Model Mix cards above. */
    margin-top: 12px;
    margin-bottom: 10px;
  }
  .session-detail-bottom {
    display: grid;
    grid-template-columns: minmax(0, 1.8fr) minmax(0, 1fr);
    gap: 10px;
    align-items: stretch;
  }
  .session-detail-bottom .session-logs-compact {
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .session-detail-bottom .session-logs-compact .session-logs-list {
    flex: 1 1 auto;
    max-height: none;
  }
  .context-details-panel {
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    padding: 12px;
  }
  .context-breakdown-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 10px;
    margin-top: 8px;
  }
  .context-breakdown-card {
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 8px;
    background: var(--bg-secondary);
  }
  .context-breakdown-title {
    font-size: 11px;
    font-weight: 600;
    margin-bottom: 6px;
  }
  .context-breakdown-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 11px;
  }
  .context-breakdown-item {
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }
  .context-breakdown-more {
    font-size: 10px;
    color: var(--text-muted);
    margin-top: 4px;
  }
  .context-breakdown-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  .context-expand-btn {
    border: 1px solid var(--border);
    background: var(--bg-secondary);
    color: var(--text-muted);
    font-size: 11px;
    padding: 4px 8px;
    border-radius: 999px;
    cursor: pointer;
    transition: all 0.15s;
  }
  .context-expand-btn:hover {
    color: var(--text);
    border-color: var(--border-strong);
    background: var(--bg);
  }
  
  /* ===== COMPACT TIMESERIES ===== */
  .session-timeseries-compact {
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    padding: 12px;
    margin: 0;
  }
  .session-timeseries-compact .timeseries-header-row {
    margin-bottom: 8px;
  }
  .session-timeseries-compact .timeseries-header {
    font-size: 12px;
  }
  .session-timeseries-compact .timeseries-summary {
    font-size: 11px;
    margin-top: 8px;
  }
  
  /* ===== COMPACT CONTEXT ===== */
  .context-weight-compact {
    background: var(--bg);
    border-radius: 6px;
    border: 1px solid var(--border);
    padding: 12px;
    margin: 0;
  }
  .context-weight-compact .context-weight-header {
    font-size: 12px;
    margin-bottom: 4px;
  }
  .context-weight-compact .context-weight-desc {
    font-size: 11px;
    margin-bottom: 8px;
  }
  .context-weight-compact .context-stacked-bar {
    height: 16px;
  }
  .context-weight-compact .context-legend {
    font-size: 11px;
    gap: 10px;
    margin-top: 8px;
  }
  .context-weight-compact .context-total {
    font-size: 11px;
    margin-top: 6px;
  }
  .context-weight-compact .context-details {
    margin-top: 8px;
  }
  .context-weight-compact .context-details summary {
    font-size: 12px;
    padding: 6px 10px;
  }
  
  /* ===== COMPACT LOGS ===== */
  .session-logs-compact {
    background: var(--bg);
    border-radius: 10px;
    border: 1px solid var(--border);
    overflow: hidden;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .session-logs-compact .session-logs-header {
    padding: 10px 12px;
    font-size: 12px;
  }
  .session-logs-compact .session-logs-list {
    max-height: none;
    flex: 1 1 auto;
    overflow: auto;
  }
  .session-logs-compact .session-log-entry {
    padding: 8px 12px;
  }
  .session-logs-compact .session-log-content {
    font-size: 12px;
    max-height: 160px;
  }
  .session-log-tools {
    margin-top: 6px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--bg-secondary);
    padding: 6px 8px;
    font-size: 11px;
    color: var(--text);
  }
  .session-log-tools summary {
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
  }
  .session-log-tools summary::-webkit-details-marker {
    display: none;
  }
  .session-log-tools-list {
    margin-top: 6px;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .session-log-tools-pill {
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 2px 8px;
    font-size: 10px;
    background: var(--bg);
    color: var(--text);
  }

  /* ===== RESPONSIVE ===== */
  @media (max-width: 900px) {
    .usage-grid {
      grid-template-columns: 1fr;
    }
    .session-detail-row {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 600px) {
    .session-bar-label {
      flex: 0 0 100px;
    }
    .cost-breakdown-legend {
      gap: 10px;
    }
    .legend-item {
      font-size: 11px;
    }
    .daily-chart-bars {
      height: 170px;
      gap: 6px;
      padding-bottom: 40px;
    }
    .daily-bar-label {
      font-size: 8px;
      bottom: -30px;
      transform: rotate(-45deg);
    }
    .usage-mosaic-grid {
      grid-template-columns: 1fr;
    }
    .usage-hour-grid {
      grid-template-columns: repeat(12, minmax(10px, 1fr));
    }
    .usage-hour-cell {
      height: 22px;
    }
  }
`,xb=4;function ft(e){return Math.round(e/xb)}function z(e){return e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:String(e)}function $b(e){const t=new Date;return t.setHours(e,0,0,0),t.toLocaleTimeString(void 0,{hour:"numeric"})}function kb(e,t){const n=Array.from({length:24},()=>0),s=Array.from({length:24},()=>0);for(const a of e){const o=a.usage;if(!o?.messageCounts||o.messageCounts.total===0)continue;const l=o.firstActivity??a.updatedAt,c=o.lastActivity??a.updatedAt;if(!l||!c)continue;const u=Math.min(l,c),f=Math.max(l,c),g=Math.max(f-u,1)/6e4;let $=u;for(;$<f;){const k=new Date($),S=Lo(k,t),d=Io(k,t),m=Math.min(d.getTime(),f),v=Math.max((m-$)/6e4,0)/g;n[S]+=o.messageCounts.errors*v,s[S]+=o.messageCounts.total*v,$=m+1}}return s.map((a,o)=>{const l=n[o],c=a>0?l/a:0;return{hour:o,rate:c,errors:l,msgs:a}}).filter(a=>a.msgs>0&&a.errors>0).toSorted((a,o)=>o.rate-a.rate).slice(0,5).map(a=>({label:$b(a.hour),value:`${(a.rate*100).toFixed(2)}%`,sub:`${Math.round(a.errors)} ${i("usageErrors").toLowerCase()} · ${Math.round(a.msgs)} ${i("usageMessagesCount")}`}))}const Sb=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function Lo(e,t){return t==="utc"?e.getUTCHours():e.getHours()}function Cb(e,t){return t==="utc"?e.getUTCDay():e.getDay()}function Io(e,t){const n=new Date(e);return t==="utc"?n.setUTCMinutes(59,59,999):n.setMinutes(59,59,999),n}function Ab(e,t){const n=Array.from({length:24},()=>0),s=Array.from({length:7},()=>0);let a=0,o=!1;for(const c of e){const u=c.usage;if(!u||!u.totalTokens||u.totalTokens<=0)continue;a+=u.totalTokens;const f=u.firstActivity??c.updatedAt,p=u.lastActivity??c.updatedAt;if(!f||!p)continue;o=!0;const g=Math.min(f,p),$=Math.max(f,p),S=Math.max($-g,1)/6e4;let d=g;for(;d<$;){const m=new Date(d),h=Lo(m,t),v=Cb(m,t),C=Io(m,t),A=Math.min(C.getTime(),$),T=Math.max((A-d)/6e4,0)/S;n[h]+=u.totalTokens*T,s[v]+=u.totalTokens*T,d=A+1}}const l=Sb.map((c,u)=>({label:c,tokens:s[u]}));return{hasData:o,totalTokens:a,hourTotals:n,weekdayTotals:l}}function Mb(e,t,n,s){const a=Ab(e,t);if(!a.hasData)return r`
      <div class="card usage-mosaic">
        <div class="usage-mosaic-header">
          <div>
            <div class="usage-mosaic-title">${i("usageActivityByTime")}</div>
            <div class="usage-mosaic-sub">${i("usageMosaicSubNoData")}</div>
          </div>
          <div class="usage-mosaic-total">${z(0)} ${i("usageTokensUnit")}</div>
        </div>
        <div class="muted" style="padding: 12px; text-align: center;">${i("usageNoTimeline")}</div>
      </div>
    `;const o=Math.max(...a.hourTotals,1),l=Math.max(...a.weekdayTotals.map(c=>c.tokens),1);return r`
    <div class="card usage-mosaic">
      <div class="usage-mosaic-header">
        <div>
          <div class="usage-mosaic-title">${i("usageActivityByTime")}</div>
          <div class="usage-mosaic-sub">
            Estimated from session spans (first/last activity). Time zone: ${i(t==="utc"?"usageTimeZoneUtc":"usageTimeZoneLocal")}.
          </div>
        </div>
        <div class="usage-mosaic-total">${z(a.totalTokens)} ${i("usageTokensUnit")}</div>
      </div>
      <div class="usage-mosaic-grid">
        <div class="usage-mosaic-section">
          <div class="usage-mosaic-section-title">${i("usageDayOfWeek")}</div>
          <div class="usage-daypart-grid">
            ${a.weekdayTotals.map(c=>{const u=Math.min(c.tokens/l,1),f=c.tokens>0?`rgba(255, 77, 77, ${.12+u*.6})`:"transparent";return r`
                <div class="usage-daypart-cell" style="background: ${f};">
                  <div class="usage-daypart-label">${c.label}</div>
                  <div class="usage-daypart-value">${z(c.tokens)}</div>
                </div>
              `})}
          </div>
        </div>
        <div class="usage-mosaic-section">
          <div class="usage-mosaic-section-title">
            <span>${i("usageHours")}</span>
            <span class="usage-mosaic-sub">0 → 23</span>
          </div>
          <div class="usage-hour-grid">
            ${a.hourTotals.map((c,u)=>{const f=Math.min(c/o,1),p=c>0?`rgba(255, 77, 77, ${.08+f*.7})`:"transparent",g=`${u}:00 · ${z(c)} ${i("usageTokensUnit")}`,$=f>.7?"rgba(255, 77, 77, 0.6)":"rgba(255, 77, 77, 0.2)",k=n.includes(u);return r`
                <div
                  class="usage-hour-cell ${k?"selected":""}"
                  style="background: ${p}; border-color: ${$};"
                  title="${g}"
                  @click=${S=>s(u,S.shiftKey)}
                ></div>
              `})}
          </div>
          <div class="usage-hour-labels">
            <span>${i("usageMidnight")}</span>
            <span>${i("usage4am")}</span>
            <span>${i("usage8am")}</span>
            <span>${i("usageNoon")}</span>
            <span>${i("usage4pm")}</span>
            <span>${i("usage8pm")}</span>
          </div>
          <div class="usage-hour-legend">
            <span></span>
            Low → High token density
          </div>
        </div>
      </div>
    </div>
  `}function G(e,t=2){return`$${e.toFixed(t)}`}function ca(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function Eb(e){return!e||e<=0?"0s":e>=6e4?`${Math.round(e/6e4)}m`:e>=1e3?`${Math.round(e/1e3)}s`:`${Math.round(e)}ms`}function zc(e){const t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(!t)return null;const[,n,s,a]=t,o=new Date(Date.UTC(Number(n),Number(s)-1,Number(a)));return Number.isNaN(o.valueOf())?null:o}function Wc(e){const t=zc(e);return t?t.toLocaleDateString(void 0,{month:"short",day:"numeric"}):e}function Tb(e){const t=zc(e);return t?t.toLocaleDateString(void 0,{month:"long",day:"numeric",year:"numeric"}):e}function Kc(e){if(!e||e<=0)return"—";const t=Math.round(e/1e3),n=t%60,s=Math.floor(t/60)%60,a=Math.floor(t/3600);return a>0?`${a}h ${s}m`:s>0?`${s}m ${n}s`:`${n}s`}function da(e,t,n="text/plain"){const s=new Blob([t],{type:n}),a=URL.createObjectURL(s),o=document.createElement("a");o.href=a,o.download=e,o.click(),URL.revokeObjectURL(a)}function Pb(e){return e.includes('"')||e.includes(",")||e.includes(`
`)?`"${e.replace(/"/g,'""')}"`:e}function ps(e){return e.map(t=>t==null?"":Pb(String(t))).join(",")}const Ut=()=>({input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0}),Ot=(e,t)=>{e.input+=t.input??0,e.output+=t.output??0,e.cacheRead+=t.cacheRead??0,e.cacheWrite+=t.cacheWrite??0,e.totalTokens+=t.totalTokens??0,e.totalCost+=t.totalCost??0,e.inputCost+=t.inputCost??0,e.outputCost+=t.outputCost??0,e.cacheReadCost+=t.cacheReadCost??0,e.cacheWriteCost+=t.cacheWriteCost??0,e.missingCostEntries+=t.missingCostEntries??0},_b=(e,t)=>{if(e.length===0)return t??{messages:{total:0,user:0,assistant:0,toolCalls:0,toolResults:0,errors:0},tools:{totalCalls:0,uniqueTools:0,tools:[]},byModel:[],byProvider:[],byAgent:[],byChannel:[],daily:[]};const n={total:0,user:0,assistant:0,toolCalls:0,toolResults:0,errors:0},s=new Map,a=new Map,o=new Map,l=new Map,c=new Map,u=new Map,f=new Map,p=new Map,g={count:0,sum:0,min:Number.POSITIVE_INFINITY,max:0,p95Max:0};for(const $ of e){const k=$.usage;if(k){if(k.messageCounts&&(n.total+=k.messageCounts.total,n.user+=k.messageCounts.user,n.assistant+=k.messageCounts.assistant,n.toolCalls+=k.messageCounts.toolCalls,n.toolResults+=k.messageCounts.toolResults,n.errors+=k.messageCounts.errors),k.toolUsage)for(const S of k.toolUsage.tools)s.set(S.name,(s.get(S.name)??0)+S.count);if(k.modelUsage&&k.modelUsage.length>0){let S=!1;for(const d of k.modelUsage){const m=d.provider&&d.provider!=="unknown"?d.provider:$.modelProvider??$.providerOverride??"unknown",h=d.model&&d.model!=="unknown"?d.model:$.model??$.modelOverride??"unknown",v=d.totals.totalTokens===0&&k.totalTokens>0&&!S?{input:k.input,output:k.output,cacheRead:k.cacheRead,cacheWrite:k.cacheWrite,totalTokens:k.totalTokens,totalCost:k.totalCost,inputCost:k.inputCost??0,outputCost:k.outputCost??0,cacheReadCost:k.cacheReadCost??0,cacheWriteCost:k.cacheWriteCost??0,missingCostEntries:k.missingCostEntries??0}:d.totals;d.totals.totalTokens===0&&k.totalTokens>0&&(S=!0);const C=`${m}::${h}`,A=a.get(C)??{provider:m,model:h,count:0,totals:Ut()};A.count+=d.count,Ot(A.totals,v),a.set(C,A);const E=o.get(m)??{provider:m,model:void 0,count:0,totals:Ut()};E.count+=d.count,Ot(E.totals,v),o.set(m,E)}}else if(k.totalTokens>0){const S=$.modelProvider??$.providerOverride??"unknown",d=$.model??$.modelOverride??"unknown",m=`${S}::${d}`,h=a.get(m)??{provider:S,model:d,count:0,totals:Ut()};h.count+=1,Ot(h.totals,k),a.set(m,h);const v=o.get(S)??{provider:S,model:void 0,count:0,totals:Ut()};v.count+=1,Ot(v.totals,k),o.set(S,v)}if(k.latency){const{count:S,avgMs:d,minMs:m,maxMs:h,p95Ms:v}=k.latency;S>0&&(g.count+=S,g.sum+=d*S,g.min=Math.min(g.min,m),g.max=Math.max(g.max,h),g.p95Max=Math.max(g.p95Max,v))}if($.agentId){const S=l.get($.agentId)??Ut();Ot(S,k),l.set($.agentId,S)}if($.channel){const S=c.get($.channel)??Ut();Ot(S,k),c.set($.channel,S)}for(const S of k.dailyBreakdown??[]){const d=u.get(S.date)??{date:S.date,tokens:0,cost:0,messages:0,toolCalls:0,errors:0};d.tokens+=S.tokens,d.cost+=S.cost,u.set(S.date,d)}for(const S of k.dailyMessageCounts??[]){const d=u.get(S.date)??{date:S.date,tokens:0,cost:0,messages:0,toolCalls:0,errors:0};d.messages+=S.total,d.toolCalls+=S.toolCalls,d.errors+=S.errors,u.set(S.date,d)}for(const S of k.dailyLatency??[]){const d=f.get(S.date)??{date:S.date,count:0,sum:0,min:Number.POSITIVE_INFINITY,max:0,p95Max:0};d.count+=S.count,d.sum+=S.avgMs*S.count,d.min=Math.min(d.min,S.minMs),d.max=Math.max(d.max,S.maxMs),d.p95Max=Math.max(d.p95Max,S.p95Ms),f.set(S.date,d)}for(const S of k.dailyModelUsage??[]){const d=S.provider&&S.provider!=="unknown"?S.provider:$.modelProvider??$.providerOverride??"unknown",m=S.model&&S.model!=="unknown"?S.model:$.model??$.modelOverride??"unknown",h=`${S.date}::${d}::${m}`,v=p.get(h)??{date:S.date,provider:d,model:m,tokens:0,cost:0,count:0};v.tokens+=S.tokens,v.cost+=S.cost,v.count+=S.count,p.set(h,v)}}}return{messages:n,tools:{totalCalls:Array.from(s.values()).reduce(($,k)=>$+k,0),uniqueTools:s.size,tools:Array.from(s.entries()).map(([$,k])=>({name:$,count:k})).toSorted(($,k)=>k.count-$.count)},byModel:Array.from(a.values()).toSorted(($,k)=>k.totals.totalCost-$.totals.totalCost),byProvider:Array.from(o.values()).toSorted(($,k)=>k.totals.totalCost-$.totals.totalCost),byAgent:Array.from(l.entries()).map(([$,k])=>({agentId:$,totals:k})).toSorted(($,k)=>k.totals.totalCost-$.totals.totalCost),byChannel:Array.from(c.entries()).map(([$,k])=>({channel:$,totals:k})).toSorted(($,k)=>k.totals.totalCost-$.totals.totalCost),latency:g.count>0?{count:g.count,avgMs:g.sum/g.count,minMs:g.min===Number.POSITIVE_INFINITY?0:g.min,maxMs:g.max,p95Ms:g.p95Max}:void 0,dailyLatency:Array.from(f.values()).map($=>({date:$.date,count:$.count,avgMs:$.count?$.sum/$.count:0,minMs:$.min===Number.POSITIVE_INFINITY?0:$.min,maxMs:$.max,p95Ms:$.p95Max})).toSorted(($,k)=>$.date.localeCompare(k.date)),modelDaily:Array.from(p.values()).toSorted(($,k)=>$.date.localeCompare(k.date)||k.cost-$.cost),daily:Array.from(u.values()).toSorted(($,k)=>$.date.localeCompare(k.date))}},Lb=(e,t,n)=>{let s=0,a=0;for(const p of e){const g=p.usage?.durationMs??0;g>0&&(s+=g,a+=1)}const o=a?s/a:0,l=t&&s>0?t.totalTokens/(s/6e4):void 0,c=t&&s>0?t.totalCost/(s/6e4):void 0,u=n.messages.total?n.messages.errors/n.messages.total:0,f=n.daily.filter(p=>p.messages>0&&p.errors>0).map(p=>({date:p.date,errors:p.errors,messages:p.messages,rate:p.errors/p.messages})).toSorted((p,g)=>g.rate-p.rate||g.errors-p.errors)[0];return{durationSumMs:s,durationCount:a,avgDurationMs:o,throughputTokensPerMin:l,throughputCostPerMin:c,errorRate:u,peakErrorDay:f}},Ib=e=>{const t=[ps(["key","label","agentId","channel","provider","model","updatedAt","durationMs","messages","errors","toolCalls","inputTokens","outputTokens","cacheReadTokens","cacheWriteTokens","totalTokens","totalCost"])];for(const n of e){const s=n.usage;t.push(ps([n.key,n.label??"",n.agentId??"",n.channel??"",n.modelProvider??n.providerOverride??"",n.model??n.modelOverride??"",n.updatedAt?new Date(n.updatedAt).toISOString():"",s?.durationMs??"",s?.messageCounts?.total??"",s?.messageCounts?.errors??"",s?.messageCounts?.toolCalls??"",s?.input??"",s?.output??"",s?.cacheRead??"",s?.cacheWrite??"",s?.totalTokens??"",s?.totalCost??""]))}return t.join(`
`)},Db=e=>{const t=[ps(["date","inputTokens","outputTokens","cacheReadTokens","cacheWriteTokens","totalTokens","inputCost","outputCost","cacheReadCost","cacheWriteCost","totalCost"])];for(const n of e)t.push(ps([n.date,n.input,n.output,n.cacheRead,n.cacheWrite,n.totalTokens,n.inputCost??"",n.outputCost??"",n.cacheReadCost??"",n.cacheWriteCost??"",n.totalCost]));return t.join(`
`)},Rb=(e,t,n)=>{const s=e.trim();if(!s)return[];const a=s.length?s.split(/\s+/):[],o=a.length?a[a.length-1]:"",[l,c]=o.includes(":")?[o.slice(0,o.indexOf(":")),o.slice(o.indexOf(":")+1)]:["",""],u=l.toLowerCase(),f=c.toLowerCase(),p=v=>{const C=new Set;for(const A of v)A&&C.add(A);return Array.from(C)},g=p(t.map(v=>v.agentId)).slice(0,6),$=p(t.map(v=>v.channel)).slice(0,6),k=p([...t.map(v=>v.modelProvider),...t.map(v=>v.providerOverride),...n?.byProvider.map(v=>v.provider)??[]]).slice(0,6),S=p([...t.map(v=>v.model),...n?.byModel.map(v=>v.model)??[]]).slice(0,6),d=p(n?.tools.tools.map(v=>v.name)??[]).slice(0,6);if(!u)return[{label:"agent:",value:"agent:"},{label:"channel:",value:"channel:"},{label:"provider:",value:"provider:"},{label:"model:",value:"model:"},{label:"tool:",value:"tool:"},{label:"has:errors",value:"has:errors"},{label:"has:tools",value:"has:tools"},{label:"minTokens:",value:"minTokens:"},{label:"maxCost:",value:"maxCost:"}];const m=[],h=(v,C)=>{for(const A of C)(!f||A.toLowerCase().includes(f))&&m.push({label:`${v}:${A}`,value:`${v}:${A}`})};switch(u){case"agent":h("agent",g);break;case"channel":h("channel",$);break;case"provider":h("provider",k);break;case"model":h("model",S);break;case"tool":h("tool",d);break;case"has":["errors","tools","context","usage","model","provider"].forEach(v=>{(!f||v.includes(f))&&m.push({label:`has:${v}`,value:`has:${v}`})});break}return m},Nb=(e,t)=>{const n=e.trim();if(!n)return`${t} `;const s=n.split(/\s+/);return s[s.length-1]=t,`${s.join(" ")} `},wt=e=>e.trim().toLowerCase(),Ub=(e,t)=>{const n=e.trim();if(!n)return`${t} `;const s=n.split(/\s+/),a=s[s.length-1]??"",o=t.includes(":")?t.split(":")[0]:null,l=a.includes(":")?a.split(":")[0]:null;return a.endsWith(":")&&o&&l===o?(s[s.length-1]=t,`${s.join(" ")} `):s.includes(t)?`${s.join(" ")} `:`${s.join(" ")} ${t} `},Hl=(e,t)=>{const s=e.trim().split(/\s+/).filter(Boolean).filter(a=>a!==t);return s.length?`${s.join(" ")} `:""},zl=(e,t,n)=>{const s=wt(t),o=[..._o(e).filter(l=>wt(l.key??"")!==s).map(l=>l.raw),...n.map(l=>`${t}:${l}`)];return o.length?`${o.join(" ")} `:""};function me(e,t){return t===0?0:e/t*100}function Ob(e){const t=e.totalCost||0;return{input:{tokens:e.input,cost:e.inputCost||0,pct:me(e.inputCost||0,t)},output:{tokens:e.output,cost:e.outputCost||0,pct:me(e.outputCost||0,t)},cacheRead:{tokens:e.cacheRead,cost:e.cacheReadCost||0,pct:me(e.cacheReadCost||0,t)},cacheWrite:{tokens:e.cacheWrite,cost:e.cacheWriteCost||0,pct:me(e.cacheWriteCost||0,t)},totalCost:t}}function Fb(e,t,n,s,a,o,l,c){if(!(e.length>0||t.length>0||n.length>0))return y;const f=n.length===1?s.find(S=>S.key===n[0]):null,p=f?(f.label||f.key).slice(0,20)+((f.label||f.key).length>20?"…":""):n.length===1?n[0].slice(0,8)+"…":`${n.length} ${i("usageSessionsCount")}`,g=f?f.label||f.key:n.length===1?n[0]:n.join(", "),$=e.length===1?e[0]:`${e.length} days`,k=t.length===1?`${t[0]}:00`:`${t.length} hours`;return r`
    <div class="active-filters">
      ${e.length>0?r`
            <div class="filter-chip">
              <span class="filter-chip-label">${i("usageDays")}: ${$}</span>
              <button class="filter-chip-remove" @click=${a} title=${i("usageRemoveFilter")}>×</button>
            </div>
          `:y}
      ${t.length>0?r`
            <div class="filter-chip">
              <span class="filter-chip-label">${i("usageHoursLabel")}: ${k}</span>
              <button class="filter-chip-remove" @click=${o} title=${i("usageRemoveFilter")}>×</button>
            </div>
          `:y}
      ${n.length>0?r`
            <div class="filter-chip" title="${g}">
              <span class="filter-chip-label">${i("usageSession")}: ${p}</span>
              <button class="filter-chip-remove" @click=${l} title=${i("usageRemoveFilter")}>×</button>
            </div>
          `:y}
      ${(e.length>0||t.length>0)&&n.length>0?r`
            <button class="btn btn-sm filter-clear-btn" @click=${c}>
              ${i("usageClearFilters")}
            </button>
          `:y}
    </div>
  `}function Bb(e,t,n,s,a,o){if(!e.length)return r`
      <div class="daily-chart-compact">
        <div class="sessions-panel-title">${i("usageDailyUsage")}</div>
        <div class="muted" style="padding: 20px; text-align: center">${i("usageNoData")}</div>
      </div>
    `;const l=n==="tokens",c=e.map(g=>l?g.totalTokens:g.totalCost),u=Math.max(...c,l?1:1e-4),f=e.length>30?12:e.length>20?18:e.length>14?24:32,p=e.length<=14;return r`
    <div class="daily-chart-compact">
      <div class="daily-chart-header">
        <div class="chart-toggle small sessions-toggle">
          <button
            class="toggle-btn ${s==="total"?"active":""}"
            @click=${()=>a("total")}
          >
            ${i("usageTotal")}
          </button>
          <button
            class="toggle-btn ${s==="by-type"?"active":""}"
            @click=${()=>a("by-type")}
          >
            ${i("usageByType")}
          </button>
        </div>
        <div class="card-title">${i(l?"usageDailyToken":"usageDailyCost")}</div>
      </div>
      <div class="daily-chart">
        <div class="daily-chart-bars" style="--bar-max-width: ${f}px">
          ${e.map((g,$)=>{const S=c[$]/u*100,d=t.includes(g.date),m=Wc(g.date),h=e.length>20?String(parseInt(g.date.slice(8),10)):m,v=e.length>20?"font-size: 8px":"",C=s==="by-type"?l?[{value:g.output,class:"output"},{value:g.input,class:"input"},{value:g.cacheWrite,class:"cache-write"},{value:g.cacheRead,class:"cache-read"}]:[{value:g.outputCost??0,class:"output"},{value:g.inputCost??0,class:"input"},{value:g.cacheWriteCost??0,class:"cache-write"},{value:g.cacheReadCost??0,class:"cache-read"}]:[],A=s==="by-type"?l?[`Output ${z(g.output)}`,`Input ${z(g.input)}`,`Cache write ${z(g.cacheWrite)}`,`Cache read ${z(g.cacheRead)}`]:[`Output ${G(g.outputCost??0)}`,`Input ${G(g.inputCost??0)}`,`Cache write ${G(g.cacheWriteCost??0)}`,`Cache read ${G(g.cacheReadCost??0)}`]:[],E=l?z(g.totalTokens):G(g.totalCost);return r`
              <div
                class="daily-bar-wrapper ${d?"selected":""}"
                @click=${T=>o(g.date,T.shiftKey)}
              >
                ${s==="by-type"?r`
                        <div
                          class="daily-bar"
                          style="height: ${S.toFixed(1)}%; display: flex; flex-direction: column;"
                        >
                          ${(()=>{const T=C.reduce((P,_)=>P+_.value,0)||1;return C.map(P=>r`
                                <div
                                  class="cost-segment ${P.class}"
                                  style="height: ${P.value/T*100}%"
                                ></div>
                              `)})()}
                        </div>
                      `:r`
                        <div class="daily-bar" style="height: ${S.toFixed(1)}%"></div>
                      `}
                ${p?r`<div class="daily-bar-total">${E}</div>`:y}
                <div class="daily-bar-label" style="${v}">${h}</div>
                <div class="daily-bar-tooltip">
                  <strong>${Tb(g.date)}</strong><br />
                  ${z(g.totalTokens)} ${i("usageTokensUnit")}<br />
                  ${G(g.totalCost)}
                  ${A.length?r`${A.map(T=>r`<div>${T}</div>`)}`:y}
                </div>
              </div>
            `})}
        </div>
      </div>
    </div>
  `}function Hb(e,t){const n=Ob(e),s=t==="tokens",a=e.totalTokens||1,o={output:me(e.output,a),input:me(e.input,a),cacheWrite:me(e.cacheWrite,a),cacheRead:me(e.cacheRead,a)};return r`
    <div class="cost-breakdown cost-breakdown-compact">
      <div class="cost-breakdown-header">${i(s?"usageTokensByType":"usageCostByType")}</div>
      <div class="cost-breakdown-bar">
        <div class="cost-segment output" style="width: ${(s?o.output:n.output.pct).toFixed(1)}%"
          title="Output: ${s?z(e.output):G(n.output.cost)}"></div>
        <div class="cost-segment input" style="width: ${(s?o.input:n.input.pct).toFixed(1)}%"
          title="Input: ${s?z(e.input):G(n.input.cost)}"></div>
        <div class="cost-segment cache-write" style="width: ${(s?o.cacheWrite:n.cacheWrite.pct).toFixed(1)}%"
          title="Cache Write: ${s?z(e.cacheWrite):G(n.cacheWrite.cost)}"></div>
        <div class="cost-segment cache-read" style="width: ${(s?o.cacheRead:n.cacheRead.pct).toFixed(1)}%"
          title="Cache Read: ${s?z(e.cacheRead):G(n.cacheRead.cost)}"></div>
      </div>
      <div class="cost-breakdown-legend">
        <span class="legend-item"><span class="legend-dot output"></span>${i("usageOutput")} ${s?z(e.output):G(n.output.cost)}</span>
        <span class="legend-item"><span class="legend-dot input"></span>${i("usageInput")} ${s?z(e.input):G(n.input.cost)}</span>
        <span class="legend-item"><span class="legend-dot cache-write"></span>${i("usageCacheWrite")} ${s?z(e.cacheWrite):G(n.cacheWrite.cost)}</span>
        <span class="legend-item"><span class="legend-dot cache-read"></span>${i("usageCacheRead")} ${s?z(e.cacheRead):G(n.cacheRead.cost)}</span>
      </div>
      <div class="cost-breakdown-total">
        ${i("usageTotalLabel")}: ${s?z(e.totalTokens):G(e.totalCost)}
      </div>
    </div>
  `}function xt(e,t,n){return r`
    <div class="usage-insight-card">
      <div class="usage-insight-title">${e}</div>
      ${t.length===0?r`<div class="muted">${n}</div>`:r`
              <div class="usage-list">
                ${t.map(s=>r`
                    <div class="usage-list-item">
                      <span>${s.label}</span>
                      <span class="usage-list-value">
                        <span>${s.value}</span>
                        ${s.sub?r`<span class="usage-list-sub">${s.sub}</span>`:y}
                      </span>
                    </div>
                  `)}
              </div>
            `}
    </div>
  `}function Wl(e,t,n){return r`
    <div class="usage-insight-card">
      <div class="usage-insight-title">${e}</div>
      ${t.length===0?r`<div class="muted">${n}</div>`:r`
              <div class="usage-error-list">
                ${t.map(s=>r`
                    <div class="usage-error-row">
                      <div class="usage-error-date">${s.label}</div>
                      <div class="usage-error-rate">${s.value}</div>
                      ${s.sub?r`<div class="usage-error-sub">${s.sub}</div>`:y}
                    </div>
                  `)}
              </div>
            `}
    </div>
  `}function zb(e,t,n,s,a,o,l){if(!e)return y;const c=t.messages.total?Math.round(e.totalTokens/t.messages.total):0,u=t.messages.total?e.totalCost/t.messages.total:0,f=e.input+e.cacheRead,p=f>0?e.cacheRead/f:0,g=f>0?`${(p*100).toFixed(1)}%`:"—",$=n.errorRate*100,k=n.throughputTokensPerMin!==void 0?`${z(Math.round(n.throughputTokensPerMin))} tok/min`:"—",S=n.throughputCostPerMin!==void 0?`${G(n.throughputCostPerMin,4)} / min`:"—",d=n.durationCount>0?Eb(n.avgDurationMs):"—",m=i("usageCacheHitRateHint"),h=i("usageErrorRateHint"),v=i("usageThroughputHint"),C=i("usageTokensHint"),A=i(s?"usageCostHintMissing":"usageCostHint"),E=t.daily.filter(R=>R.messages>0&&R.errors>0).map(R=>{const L=R.errors/R.messages;return{label:Wc(R.date),value:`${(L*100).toFixed(2)}%`,sub:`${R.errors} ${i("usageErrors").toLowerCase()} · ${R.messages} ${i("usageMessagesCount")} · ${z(R.tokens)}`,rate:L}}).toSorted((R,L)=>L.rate-R.rate).slice(0,5).map(({rate:R,...L})=>L),T=t.byModel.filter(R=>(R.count??0)>0||(R.totals?.totalTokens??0)>0).slice(0,5).map(R=>({label:R.model??"unknown",value:G(R.totals.totalCost),sub:`${z(R.totals.totalTokens)} · ${R.count} ${i("usageMessagesCount")}`})),P=t.byProvider.filter(R=>(R.count??0)>0||(R.totals?.totalTokens??0)>0).slice(0,5).map(R=>({label:R.provider??"unknown",value:G(R.totals.totalCost),sub:`${z(R.totals.totalTokens)} · ${R.count} ${i("usageMessagesCount")}`})),_=t.tools.tools.slice(0,6).map(R=>({label:R.name,value:`${R.count}`,sub:i("usageCalls")})),U=t.byAgent.slice(0,5).map(R=>({label:R.agentId,value:G(R.totals.totalCost),sub:z(R.totals.totalTokens)})),W=t.byChannel.slice(0,5).map(R=>({label:R.channel,value:G(R.totals.totalCost),sub:z(R.totals.totalTokens)}));return r`
    <section class="card" style="margin-top: 16px;">
      <div class="card-title">${i("usageOverview")}</div>
      <div class="usage-summary-grid">
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${i("usageMessages")}
            <span class="usage-summary-hint" title=${i("usageMessagesHint")}>?</span>
          </div>
          <div class="usage-summary-value">${t.messages.total}</div>
          <div class="usage-summary-sub">
            ${t.messages.user} ${i("usageUser").toLowerCase()} · ${t.messages.assistant} ${i("usageAssistant").toLowerCase()}
          </div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${i("usageToolCalls")}
            <span class="usage-summary-hint" title=${i("usageToolCallsHint")}>?</span>
          </div>
          <div class="usage-summary-value">${t.tools.totalCalls}</div>
          <div class="usage-summary-sub">${t.tools.uniqueTools} ${i("usageToolsUsed")}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${i("usageErrors")}
            <span class="usage-summary-hint" title=${i("usageErrorsHint")}>?</span>
          </div>
          <div class="usage-summary-value">${t.messages.errors}</div>
          <div class="usage-summary-sub">${t.messages.toolResults} ${i("usageToolResults")}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${i("usageAvgTokensMsg")}
            <span class="usage-summary-hint" title=${C}>?</span>
          </div>
          <div class="usage-summary-value">${z(c)}</div>
          <div class="usage-summary-sub">${i("usageAcrossMessages")} ${t.messages.total||0} ${i("usageMessagesCount")}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${i("usageAvgCostMsg")}
            <span class="usage-summary-hint" title=${A}>?</span>
          </div>
          <div class="usage-summary-value">${G(u,4)}</div>
          <div class="usage-summary-sub">${G(e.totalCost)} ${i("usageTotalLabel").toLowerCase()}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${i("usageSessionsCard")}
            <span class="usage-summary-hint" title=${i("usageSessionsHint")}>?</span>
          </div>
          <div class="usage-summary-value">${o}</div>
          <div class="usage-summary-sub">${i("usageInRange")} ${l}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${i("usageThroughput")}
            <span class="usage-summary-hint" title=${v}>?</span>
          </div>
          <div class="usage-summary-value">${k}</div>
          <div class="usage-summary-sub">${S}</div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${i("usageErrorRate")}
            <span class="usage-summary-hint" title=${h}>?</span>
          </div>
          <div class="usage-summary-value ${$>5?"bad":$>1?"warn":"good"}">${$.toFixed(2)}%</div>
          <div class="usage-summary-sub">
            ${t.messages.errors} ${i("usageErrors").toLowerCase()} · ${d} ${i("usageAvg")} ${i("usageSession").toLowerCase()}
          </div>
        </div>
        <div class="usage-summary-card">
          <div class="usage-summary-title">
            ${i("usageCacheHitRate")}
            <span class="usage-summary-hint" title=${m}>?</span>
          </div>
          <div class="usage-summary-value ${p>.6?"good":p>.3?"warn":"bad"}">${g}</div>
          <div class="usage-summary-sub">
            ${z(e.cacheRead)} ${i("usageCached")} · ${z(f)} ${i("usagePrompt")}
          </div>
        </div>
      </div>
      <div class="usage-insights-grid">
        ${xt(i("usageTopModels"),T,i("usageNoModelData"))}
        ${xt(i("usageTopProviders"),P,i("usageNoProviderData"))}
        ${xt(i("usageTopTools"),_,i("usageNoToolCalls"))}
        ${xt(i("usageTopAgents"),U,i("usageNoAgentData"))}
        ${xt(i("usageTopChannels"),W,i("usageNoChannelData"))}
        ${Wl(i("usagePeakErrorDays"),E,i("usageNoErrorData"))}
        ${Wl(i("usagePeakErrorHours"),a,i("usageNoErrorData"))}
      </div>
    </section>
  `}function Wb(e,t,n,s,a,o,l,c,u,f,p,g,$,k,S){const d=D=>$.includes(D),m=D=>{const q=D.label||D.key;return q.startsWith("agent:")&&q.includes("?token=")?q.slice(0,q.indexOf("?token=")):q},h=async D=>{const q=m(D);try{await navigator.clipboard.writeText(q)}catch{}},v=D=>{const q=[];return d("channel")&&D.channel&&q.push(`channel:${D.channel}`),d("agent")&&D.agentId&&q.push(`agent:${D.agentId}`),d("provider")&&(D.modelProvider||D.providerOverride)&&q.push(`provider:${D.modelProvider??D.providerOverride}`),d("model")&&D.model&&q.push(`model:${D.model}`),d("messages")&&D.usage?.messageCounts&&q.push(`msgs:${D.usage.messageCounts.total}`),d("tools")&&D.usage?.toolUsage&&q.push(`tools:${D.usage.toolUsage.totalCalls}`),d("errors")&&D.usage?.messageCounts&&q.push(`errors:${D.usage.messageCounts.errors}`),d("duration")&&D.usage?.durationMs&&q.push(`dur:${Kc(D.usage.durationMs)}`),q},C=D=>{const q=D.usage;if(!q)return 0;if(n.length>0&&q.dailyBreakdown&&q.dailyBreakdown.length>0){const re=q.dailyBreakdown.filter(ce=>n.includes(ce.date));return s?re.reduce((ce,se)=>ce+se.tokens,0):re.reduce((ce,se)=>ce+se.cost,0)}return s?q.totalTokens??0:q.totalCost??0},A=[...e].toSorted((D,q)=>{switch(a){case"recent":return(q.updatedAt??0)-(D.updatedAt??0);case"messages":return(q.usage?.messageCounts?.total??0)-(D.usage?.messageCounts?.total??0);case"errors":return(q.usage?.messageCounts?.errors??0)-(D.usage?.messageCounts?.errors??0);case"cost":return C(q)-C(D);default:return C(q)-C(D)}}),E=o==="asc"?A.toReversed():A,T=E.reduce((D,q)=>D+C(q),0),P=E.length?T/E.length:0,_=E.reduce((D,q)=>D+(q.usage?.messageCounts?.errors??0),0),U=new Set(t),W=E.filter(D=>U.has(D.key)),R=W.length,L=new Map(E.map(D=>[D.key,D])),fe=l.map(D=>L.get(D)).filter(D=>!!D);return r`
    <div class="card sessions-card">
      <div class="sessions-card-header">
        <div class="card-title">${i("usageSessionsCard")}</div>
        <div class="sessions-card-count">
          ${e.length} ${i("usageShown")}${k!==e.length?` · ${k} ${i("usageTotalSessions")}`:""}
        </div>
      </div>
      <div class="sessions-card-meta">
        <div class="sessions-card-stats">
          <span>${s?z(P):G(P)} ${i("usageAvg")}</span>
          <span>${_} ${i("usageErrors").toLowerCase()}</span>
        </div>
        <div class="chart-toggle small">
          <button
            class="toggle-btn ${c==="all"?"active":""}"
            @click=${()=>g("all")}
          >
            ${i("usageAll")}
          </button>
          <button
            class="toggle-btn ${c==="recent"?"active":""}"
            @click=${()=>g("recent")}
          >
            ${i("usageRecentlyViewed")}
          </button>
        </div>
        <label class="sessions-sort">
          <span>${i("usageSort")}</span>
          <select
            @change=${D=>f(D.target.value)}
          >
            <option value="cost" ?selected=${a==="cost"}>${i("usageCost")}</option>
            <option value="errors" ?selected=${a==="errors"}>${i("usageErrorsCol")}</option>
            <option value="messages" ?selected=${a==="messages"}>${i("usageMessagesCol")}</option>
            <option value="recent" ?selected=${a==="recent"}>${i("usageRecent")}</option>
            <option value="tokens" ?selected=${a==="tokens"}>${i("usageTokensCol")}</option>
          </select>
        </label>
        <button
          class="btn btn-sm sessions-action-btn icon"
          @click=${()=>p(o==="desc"?"asc":"desc")}
          title=${i(o==="desc"?"usageDescending":"usageAscending")}
        >
          ${o==="desc"?"↓":"↑"}
        </button>
        ${R>0?r`
                <button class="btn btn-sm sessions-action-btn sessions-clear-btn" @click=${S}>
                  ${i("usageClearSelection")}
                </button>
              `:y}
      </div>
      ${c==="recent"?fe.length===0?r`
                <div class="muted" style="padding: 20px; text-align: center">${i("usageNoRecentSessions")}</div>
              `:r`
                <div class="session-bars" style="max-height: 220px; margin-top: 6px;">
                  ${fe.map(D=>{const q=C(D),re=U.has(D.key),ce=m(D),se=v(D);return r`
                      <div
                        class="session-bar-row ${re?"selected":""}"
                        @click=${ie=>u(D.key,ie.shiftKey)}
                        title="${D.key}"
                      >
                        <div class="session-bar-label">
                          <div class="session-bar-title">${ce}</div>
                          ${se.length>0?r`<div class="session-bar-meta">${se.join(" · ")}</div>`:y}
                        </div>
                        <div class="session-bar-track" style="display: none;"></div>
                        <div class="session-bar-actions">
                          <button
                            class="session-copy-btn"
                            title=${i("usageCopySessionName")}
                            @click=${ie=>{ie.stopPropagation(),h(D)}}
                          >
                            ${i("usageCopy")}
                          </button>
                          <div class="session-bar-value">${s?z(q):G(q)}</div>
                        </div>
                      </div>
                    `})}
                </div>
              `:e.length===0?r`
                <div class="muted" style="padding: 20px; text-align: center">${i("usageNoSessionsInRange")}</div>
              `:r`
                <div class="session-bars">
                  ${E.slice(0,50).map(D=>{const q=C(D),re=t.includes(D.key),ce=m(D),se=v(D);return r`
                      <div
                        class="session-bar-row ${re?"selected":""}"
                        @click=${ie=>u(D.key,ie.shiftKey)}
                        title="${D.key}"
                      >
                        <div class="session-bar-label">
                          <div class="session-bar-title">${ce}</div>
                          ${se.length>0?r`<div class="session-bar-meta">${se.join(" · ")}</div>`:y}
                        </div>
                        <div class="session-bar-track" style="display: none;"></div>
                        <div class="session-bar-actions">
                          <button
                            class="session-copy-btn"
                            title=${i("usageCopySessionName")}
                            @click=${ie=>{ie.stopPropagation(),h(D)}}
                          >
                            ${i("usageCopy")}
                          </button>
                          <div class="session-bar-value">${s?z(q):G(q)}</div>
                        </div>
                      </div>
                    `})}
                  ${e.length>50?r`<div class="muted" style="padding: 8px; text-align: center; font-size: 11px;">+${e.length-50} ${i("usageMoreSessions")}</div>`:y}
                </div>
              `}
      ${R>1?r`
              <div style="margin-top: 10px;">
                <div class="sessions-card-count">${i("usageSelectedCount")} (${R})</div>
                <div class="session-bars" style="max-height: 160px; margin-top: 6px;">
                  ${W.map(D=>{const q=C(D),re=m(D),ce=v(D);return r`
                      <div
                        class="session-bar-row selected"
                        @click=${se=>u(D.key,se.shiftKey)}
                        title="${D.key}"
                      >
                        <div class="session-bar-label">
                          <div class="session-bar-title">${re}</div>
                          ${ce.length>0?r`<div class="session-bar-meta">${ce.join(" · ")}</div>`:y}
                        </div>
                  <div class="session-bar-track" style="display: none;"></div>
                        <div class="session-bar-actions">
                          <button
                            class="session-copy-btn"
                            title=${i("usageCopySessionName")}
                            @click=${se=>{se.stopPropagation(),h(D)}}
                          >
                            ${i("usageCopy")}
                          </button>
                          <div class="session-bar-value">${s?z(q):G(q)}</div>
                        </div>
                      </div>
                    `})}
                </div>
              </div>
            `:y}
    </div>
  `}function Kb(){return y}function qb(e){const t=e.usage;if(!t)return r`
      <div class="muted">No usage data for this session.</div>
    `;const n=l=>l?new Date(l).toLocaleString():"—",s=[];e.channel&&s.push(`channel:${e.channel}`),e.agentId&&s.push(`agent:${e.agentId}`),(e.modelProvider||e.providerOverride)&&s.push(`provider:${e.modelProvider??e.providerOverride}`),e.model&&s.push(`model:${e.model}`);const a=t.toolUsage?.tools.slice(0,6).map(l=>({label:l.name,value:`${l.count}`,sub:i("usageCalls")}))??[],o=t.modelUsage?.slice(0,6).map(l=>({label:l.model??"unknown",value:G(l.totals.totalCost),sub:z(l.totals.totalTokens)}))??[];return r`
    ${s.length>0?r`<div class="usage-badges">${s.map(l=>r`<span class="usage-badge">${l}</span>`)}</div>`:y}
    <div class="session-summary-grid">
      <div class="session-summary-card">
        <div class="session-summary-title">${i("usageMessages")}</div>
        <div class="session-summary-value">${t.messageCounts?.total??0}</div>
        <div class="session-summary-meta">${t.messageCounts?.user??0} ${i("usageUser").toLowerCase()} · ${t.messageCounts?.assistant??0} ${i("usageAssistant").toLowerCase()}</div>
      </div>
      <div class="session-summary-card">
        <div class="session-summary-title">${i("usageToolCalls")}</div>
        <div class="session-summary-value">${t.toolUsage?.totalCalls??0}</div>
        <div class="session-summary-meta">${t.toolUsage?.uniqueTools??0} ${i("usageToolsLabel").toLowerCase()}</div>
      </div>
      <div class="session-summary-card">
        <div class="session-summary-title">${i("usageErrors")}</div>
        <div class="session-summary-value">${t.messageCounts?.errors??0}</div>
        <div class="session-summary-meta">${t.messageCounts?.toolResults??0} ${i("usageToolResults")}</div>
      </div>
      <div class="session-summary-card">
        <div class="session-summary-title">${i("usageDuration")}</div>
        <div class="session-summary-value">${Kc(t.durationMs)}</div>
        <div class="session-summary-meta">${n(t.firstActivity)} → ${n(t.lastActivity)}</div>
      </div>
    </div>
    <div class="usage-insights-grid" style="margin-top: 12px;">
      ${xt(i("usageTopTools"),a,i("usageNoToolCalls"))}
      ${xt(i("usageModelMix"),o,i("usageNoModelData"))}
    </div>
  `}function jb(e,t,n,s,a,o,l,c,u,f,p,g,$,k,S,d,m,h,v,C,A,E,T){const P=e.label||e.key,_=P.length>50?P.slice(0,50)+"…":P,U=e.usage;return r`
    <div class="card session-detail-panel">
      <div class="session-detail-header">
        <div class="session-detail-header-left">
          <div class="session-detail-title">${_}</div>
        </div>
        <div class="session-detail-stats">
          ${U?r`
            <span><strong>${z(U.totalTokens)}</strong> ${i("usageTokensUnit")}</span>
            <span><strong>${G(U.totalCost)}</strong></span>
          `:y}
        </div>
        <button class="session-close-btn" @click=${T} title=${i("usageCloseSessionDetails")}>×</button>
      </div>
      <div class="session-detail-content">
        ${qb(e)}
        <div class="session-detail-row">
          ${Qb(t,n,s,a,o,l,c,u,f)}
        </div>
        <div class="session-detail-bottom">
          ${Gb(p,g,$,k,S,d,m,h,v,C)}
          ${Vb(e.contextWeight,U,A,E)}
        </div>
      </div>
    </div>
  `}function Qb(e,t,n,s,a,o,l,c,u){if(t)return r`
      <div class="session-timeseries-compact">
        <div class="muted" style="padding: 20px; text-align: center">${i("usageLoading")}</div>
      </div>
    `;if(!e||e.points.length<2)return r`
      <div class="session-timeseries-compact">
        <div class="muted" style="padding: 20px; text-align: center">${i("usageNoTimelineData")}</div>
      </div>
    `;let f=e.points;if(l||c||u&&u.length>0){const L=l?new Date(l+"T00:00:00").getTime():0,fe=c?new Date(c+"T23:59:59").getTime():1/0;f=e.points.filter(D=>{if(D.timestamp<L||D.timestamp>fe)return!1;if(u&&u.length>0){const q=new Date(D.timestamp),re=`${q.getFullYear()}-${String(q.getMonth()+1).padStart(2,"0")}-${String(q.getDate()).padStart(2,"0")}`;return u.includes(re)}return!0})}if(f.length<2)return r`
      <div class="session-timeseries-compact">
        <div class="muted" style="padding: 20px; text-align: center">${i("usageNoDataInRange")}</div>
      </div>
    `;let p=0,g=0,$=0,k=0,S=0,d=0;f=f.map(L=>(p+=L.totalTokens,g+=L.cost,$+=L.output,k+=L.input,S+=L.cacheRead,d+=L.cacheWrite,{...L,cumulativeTokens:p,cumulativeCost:g}));const m=400,h=80,v={top:16,right:10,bottom:20,left:40},C=m-v.left-v.right,A=h-v.top-v.bottom,E=n==="cumulative",T=n==="per-turn"&&a==="by-type",P=$+k+S+d,_=f.map(L=>E?L.cumulativeTokens:T?L.input+L.output+L.cacheRead+L.cacheWrite:L.totalTokens),U=Math.max(..._,1),W=Math.max(2,Math.min(8,C/f.length*.7)),R=Math.max(1,(C-W*f.length)/(f.length-1||1));return r`
    <div class="session-timeseries-compact">
      <div class="timeseries-header-row">
        <div class="card-title" style="font-size: 13px;">${i("usageUsageOverTime")}</div>
        <div class="timeseries-controls">
          <div class="chart-toggle small">
            <button
              class="toggle-btn ${E?"":"active"}"
              @click=${()=>s("per-turn")}
            >
              ${i("usagePerTurn")}
            </button>
            <button
              class="toggle-btn ${E?"active":""}"
              @click=${()=>s("cumulative")}
            >
              ${i("usageCumulative")}
            </button>
          </div>
          ${E?y:r`
                  <div class="chart-toggle small">
                    <button
                      class="toggle-btn ${a==="total"?"active":""}"
                      @click=${()=>o("total")}
                    >
                      ${i("usageTotal")}
                    </button>
                    <button
                      class="toggle-btn ${a==="by-type"?"active":""}"
                      @click=${()=>o("by-type")}
                    >
                      ${i("usageByType")}
                    </button>
                  </div>
                `}
        </div>
      </div>
      <svg viewBox="0 0 ${m} ${h+15}" class="timeseries-svg" style="width: 100%; height: auto;">
        <!-- Y axis -->
        <line x1="${v.left}" y1="${v.top}" x2="${v.left}" y2="${v.top+A}" stroke="var(--border)" />
        <!-- X axis -->
        <line x1="${v.left}" y1="${v.top+A}" x2="${m-v.right}" y2="${v.top+A}" stroke="var(--border)" />
        <!-- Y axis labels -->
        <text x="${v.left-4}" y="${v.top+4}" text-anchor="end" class="axis-label" style="font-size: 9px; fill: var(--text-muted)">${z(U)}</text>
        <text x="${v.left-4}" y="${v.top+A}" text-anchor="end" class="axis-label" style="font-size: 9px; fill: var(--text-muted)">0</text>
        <!-- X axis labels (first and last) -->
        ${f.length>0?zn`
          <text x="${v.left}" y="${v.top+A+12}" text-anchor="start" style="font-size: 8px; fill: var(--text-muted)">${new Date(f[0].timestamp).toLocaleDateString(void 0,{month:"short",day:"numeric"})}</text>
          <text x="${m-v.right}" y="${v.top+A+12}" text-anchor="end" style="font-size: 8px; fill: var(--text-muted)">${new Date(f[f.length-1].timestamp).toLocaleDateString(void 0,{month:"short",day:"numeric"})}</text>
        `:y}
        <!-- Bars -->
        ${f.map((L,fe)=>{const D=_[fe],q=v.left+fe*(W+R),re=D/U*A,ce=v.top+A-re,ie=[new Date(L.timestamp).toLocaleDateString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),`${z(D)} ${i("usageTokensUnit")}`];T&&(ie.push(`Output ${z(L.output)}`),ie.push(`Input ${z(L.input)}`),ie.push(`Cache write ${z(L.cacheWrite)}`),ie.push(`Cache read ${z(L.cacheRead)}`));const N=ie.join(" · ");if(!T)return zn`<rect x="${q}" y="${ce}" width="${W}" height="${re}" class="ts-bar" rx="1" style="cursor: pointer;"><title>${N}</title></rect>`;const O=[{value:L.output,class:"output"},{value:L.input,class:"input"},{value:L.cacheWrite,class:"cache-write"},{value:L.cacheRead,class:"cache-read"}];let F=v.top+A;return zn`
            ${O.map(j=>{if(j.value<=0||D<=0)return y;const $e=re*(j.value/D);return F-=$e,zn`<rect x="${q}" y="${F}" width="${W}" height="${$e}" class="ts-bar ${j.class}" rx="1"><title>${N}</title></rect>`})}
          `})}
      </svg>
      <div class="timeseries-summary">${f.length} ${i("usageMessagesCount")} · ${z(p)} ${i("usageTokensUnit")} · ${G(g)}</div>
      ${T?r`
              <div style="margin-top: 8px;">
                <div class="card-title" style="font-size: 12px; margin-bottom: 6px;">${i("usageTokensByType")}</div>
                <div class="cost-breakdown-bar" style="height: 18px;">
                  <div class="cost-segment output" style="width: ${me($,P).toFixed(1)}%"></div>
                  <div class="cost-segment input" style="width: ${me(k,P).toFixed(1)}%"></div>
                  <div class="cost-segment cache-write" style="width: ${me(d,P).toFixed(1)}%"></div>
                  <div class="cost-segment cache-read" style="width: ${me(S,P).toFixed(1)}%"></div>
                </div>
                <div class="cost-breakdown-legend">
                  <div class="legend-item" title="Assistant output tokens">
                    <span class="legend-dot output"></span>Output ${z($)}
                  </div>
                  <div class="legend-item" title="User + tool input tokens">
                    <span class="legend-dot input"></span>Input ${z(k)}
                  </div>
                  <div class="legend-item" title="Tokens written to cache">
                    <span class="legend-dot cache-write"></span>Cache Write ${z(d)}
                  </div>
                  <div class="legend-item" title="Tokens read from cache">
                    <span class="legend-dot cache-read"></span>Cache Read ${z(S)}
                  </div>
                </div>
                <div class="cost-breakdown-total">${i("usageTotalLabel")}: ${z(P)}</div>
              </div>
            `:y}
    </div>
  `}function Vb(e,t,n,s){if(!e)return r`
      <div class="context-details-panel">
        <div class="muted" style="padding: 20px; text-align: center">${i("usageNoContextData")}</div>
      </div>
    `;const a=ft(e.systemPrompt.chars),o=ft(e.skills.promptChars),l=ft(e.tools.listChars+e.tools.schemaChars),c=ft(e.injectedWorkspaceFiles.reduce((C,A)=>C+A.injectedChars,0)),u=a+o+l+c;let f="";if(t&&t.totalTokens>0){const C=t.input+t.cacheRead;C>0&&(f=`~${Math.min(u/C*100,100).toFixed(0)}% of input`)}const p=e.skills.entries.toSorted((C,A)=>A.blockChars-C.blockChars),g=e.tools.entries.toSorted((C,A)=>A.summaryChars+A.schemaChars-(C.summaryChars+C.schemaChars)),$=e.injectedWorkspaceFiles.toSorted((C,A)=>A.injectedChars-C.injectedChars),k=4,S=n,d=S?p:p.slice(0,k),m=S?g:g.slice(0,k),h=S?$:$.slice(0,k),v=p.length>k||g.length>k||$.length>k;return r`
    <div class="context-details-panel">
      <div class="context-breakdown-header">
        <div class="card-title" style="font-size: 13px;">${i("usageSystemPromptBreakdown")}</div>
        ${v?r`<button class="context-expand-btn" @click=${s}>
                ${i(S?"usageCollapseAll":"usageExpandAll")}
              </button>`:y}
      </div>
      <p class="context-weight-desc">${f||i("usageBaseContextPerMessage")}</p>
      <div class="context-stacked-bar">
        <div class="context-segment system" style="width: ${me(a,u).toFixed(1)}%" title="System: ~${z(a)}"></div>
        <div class="context-segment skills" style="width: ${me(o,u).toFixed(1)}%" title="Skills: ~${z(o)}"></div>
        <div class="context-segment tools" style="width: ${me(l,u).toFixed(1)}%" title="Tools: ~${z(l)}"></div>
        <div class="context-segment files" style="width: ${me(c,u).toFixed(1)}%" title="Files: ~${z(c)}"></div>
      </div>
      <div class="context-legend">
        <span class="legend-item"><span class="legend-dot system"></span>Sys ~${z(a)}</span>
        <span class="legend-item"><span class="legend-dot skills"></span>Skills ~${z(o)}</span>
        <span class="legend-item"><span class="legend-dot tools"></span>Tools ~${z(l)}</span>
        <span class="legend-item"><span class="legend-dot files"></span>Files ~${z(c)}</span>
      </div>
      <div class="context-total">${i("usageTotalLabel")}: ~${z(u)}</div>
      <div class="context-breakdown-grid">
        ${p.length>0?(()=>{const C=p.length-d.length;return r`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">${i("usageSkills")} (${p.length})</div>
                    <div class="context-breakdown-list">
                      ${d.map(A=>r`
                          <div class="context-breakdown-item">
                            <span class="mono">${A.name}</span>
                            <span class="muted">~${z(ft(A.blockChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${C>0?r`<div class="context-breakdown-more">+${C} ${i("usageMoreSessions")}</div>`:y}
                  </div>
                `})():y}
        ${g.length>0?(()=>{const C=g.length-m.length;return r`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">${i("usageToolsLabel")} (${g.length})</div>
                    <div class="context-breakdown-list">
                      ${m.map(A=>r`
                          <div class="context-breakdown-item">
                            <span class="mono">${A.name}</span>
                            <span class="muted">~${z(ft(A.summaryChars+A.schemaChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${C>0?r`<div class="context-breakdown-more">+${C} ${i("usageMoreSessions")}</div>`:y}
                  </div>
                `})():y}
        ${$.length>0?(()=>{const C=$.length-h.length;return r`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">${i("usageFiles")} (${$.length})</div>
                    <div class="context-breakdown-list">
                      ${h.map(A=>r`
                          <div class="context-breakdown-item">
                            <span class="mono">${A.name}</span>
                            <span class="muted">~${z(ft(A.injectedChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${C>0?r`<div class="context-breakdown-more">+${C} ${i("usageMoreSessions")}</div>`:y}
                  </div>
                `})():y}
      </div>
    </div>
  `}function Gb(e,t,n,s,a,o,l,c,u,f){if(t)return r`
      <div class="session-logs-compact">
        <div class="session-logs-header">${i("usageConversation")}</div>
        <div class="muted" style="padding: 20px; text-align: center">${i("usageLoading")}</div>
      </div>
    `;if(!e||e.length===0)return r`
      <div class="session-logs-compact">
        <div class="session-logs-header">${i("usageConversation")}</div>
        <div class="muted" style="padding: 20px; text-align: center">${i("usageNoMessages")}</div>
      </div>
    `;const p=a.query.trim().toLowerCase(),g=e.map(h=>{const v=bb(h.content),C=v.cleanContent||h.content;return{log:h,toolInfo:v,cleanContent:C}}),$=Array.from(new Set(g.flatMap(h=>h.toolInfo.tools.map(([v])=>v)))).toSorted((h,v)=>h.localeCompare(v)),k=g.filter(h=>!(a.roles.length>0&&!a.roles.includes(h.log.role)||a.hasTools&&h.toolInfo.tools.length===0||a.tools.length>0&&!h.toolInfo.tools.some(([C])=>a.tools.includes(C))||p&&!h.cleanContent.toLowerCase().includes(p))),S=a.roles.length>0||a.tools.length>0||a.hasTools||p?`${k.length} of ${e.length}`:`${e.length}`,d=new Set(a.roles),m=new Set(a.tools);return r`
    <div class="session-logs-compact">
      <div class="session-logs-header">
        <span>${i("usageConversation")} <span style="font-weight: normal; color: var(--text-muted);">(${S} ${i("usageMessagesCount")})</span></span>
        <button class="btn btn-sm usage-action-btn usage-secondary-btn" @click=${s}>
          ${i(n?"usageCollapseAll":"usageExpandAll")}
        </button>
      </div>
      <div class="usage-filters-inline" style="margin: 10px 12px;">
        <select
          multiple
          size="4"
          @change=${h=>o(Array.from(h.target.selectedOptions).map(v=>v.value))}
        >
          <option value="user" ?selected=${d.has("user")}>${i("usageUser")}</option>
          <option value="assistant" ?selected=${d.has("assistant")}>${i("usageAssistant")}</option>
          <option value="tool" ?selected=${d.has("tool")}>${i("usageTool")}</option>
          <option value="toolResult" ?selected=${d.has("toolResult")}>${i("usageToolResult")}</option>
        </select>
        <select
          multiple
          size="4"
          @change=${h=>l(Array.from(h.target.selectedOptions).map(v=>v.value))}
        >
          ${$.map(h=>r`<option value=${h} ?selected=${m.has(h)}>${h}</option>`)}
        </select>
        <label class="usage-filters-inline" style="gap: 6px;">
          <input
            type="checkbox"
            .checked=${a.hasTools}
            @change=${h=>c(h.target.checked)}
          />
          ${i("usageHasTools")}
        </label>
        <input
          type="text"
          placeholder=${i("usageSearchConversation")}
          .value=${a.query}
          @input=${h=>u(h.target.value)}
        />
        <button class="btn btn-sm usage-action-btn usage-secondary-btn" @click=${f}>
          ${i("usageClear")}
        </button>
      </div>
      <div class="session-logs-list">
        ${k.map(h=>{const{log:v,toolInfo:C,cleanContent:A}=h,E=v.role==="user"?"user":"assistant",T=v.role==="user"?i("usageUser"):v.role==="assistant"?i("usageAssistant"):i("usageTool");return r`
          <div class="session-log-entry ${E}">
            <div class="session-log-meta">
              <span class="session-log-role">${T}</span>
              <span>${new Date(v.timestamp).toLocaleString()}</span>
              ${v.tokens?r`<span>${z(v.tokens)}</span>`:y}
            </div>
            <div class="session-log-content">${A}</div>
            ${C.tools.length>0?r`
                    <details class="session-log-tools" ?open=${n}>
                      <summary>${C.summary}</summary>
                      <div class="session-log-tools-list">
                        ${C.tools.map(([P,_])=>r`
                            <span class="session-log-tools-pill">${P} × ${_}</span>
                          `)}
                      </div>
                    </details>
                  `:y}
          </div>
        `})}
        ${k.length===0?r`
                <div class="muted" style="padding: 12px">${i("usageNoMessagesMatchFilters")}</div>
              `:y}
      </div>
    </div>
  `}function Jb(e){if(e.loading&&!e.totals)return r`
      <style>
        @keyframes initial-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes initial-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      </style>
      <section class="card">
        <div class="row" style="justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px;">
          <div style="flex: 1; min-width: 250px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 2px;">
              <div class="card-title" style="margin: 0;">${i("usageTokenUsage")}</div>
              <span style="
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 4px 10px;
                background: rgba(255, 77, 77, 0.1);
                border-radius: 4px;
                font-size: 12px;
                color: #ff4d4d;
              ">
                <span style="
                  width: 10px;
                  height: 10px;
                  border: 2px solid #ff4d4d;
                  border-top-color: transparent;
                  border-radius: 50%;
                  animation: initial-spin 0.6s linear infinite;
                "></span>
                ${i("usageLoading")}
              </span>
            </div>
          </div>
          <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 8px;">
            <div style="display: flex; gap: 8px; align-items: center;">
              <input type="date" .value=${e.startDate} disabled style="padding: 6px 10px; border: 1px solid var(--border); border-radius: 6px; background: var(--bg); color: var(--text); font-size: 13px; opacity: 0.6;" />
              <span style="color: var(--text-muted);">to</span>
              <input type="date" .value=${e.endDate} disabled style="padding: 6px 10px; border: 1px solid var(--border); border-radius: 6px; background: var(--bg); color: var(--text); font-size: 13px; opacity: 0.6;" />
            </div>
          </div>
        </div>
      </section>
    `;const t=e.chartMode==="tokens",n=e.query.trim().length>0,s=e.queryDraft.trim().length>0,a=[...e.sessions].toSorted((N,O)=>{const F=t?N.usage?.totalTokens??0:N.usage?.totalCost??0;return(t?O.usage?.totalTokens??0:O.usage?.totalCost??0)-F}),o=e.selectedDays.length>0?a.filter(N=>{if(N.usage?.activityDates?.length)return N.usage.activityDates.some(j=>e.selectedDays.includes(j));if(!N.updatedAt)return!1;const O=new Date(N.updatedAt),F=`${O.getFullYear()}-${String(O.getMonth()+1).padStart(2,"0")}-${String(O.getDate()).padStart(2,"0")}`;return e.selectedDays.includes(F)}):a,l=(N,O)=>{if(O.length===0)return!0;const F=N.usage,j=F?.firstActivity??N.updatedAt,$e=F?.lastActivity??N.updatedAt;if(!j||!$e)return!1;const ee=Math.min(j,$e),Me=Math.max(j,$e);let ae=ee;for(;ae<=Me;){const he=new Date(ae),He=Lo(he,e.timeZone);if(O.includes(He))return!0;const ze=Io(he,e.timeZone);ae=Math.min(ze.getTime(),Me)+1}return!1},c=e.selectedHours.length>0?o.filter(N=>l(N,e.selectedHours)):o,u=yb(c,e.query),f=u.sessions,p=u.warnings,g=Rb(e.queryDraft,a,e.aggregates),$=_o(e.query),k=N=>{const O=wt(N);return $.filter(F=>wt(F.key??"")===O).map(F=>F.value).filter(Boolean)},S=N=>{const O=new Set;for(const F of N)F&&O.add(F);return Array.from(O)},d=S(a.map(N=>N.agentId)).slice(0,12),m=S(a.map(N=>N.channel)).slice(0,12),h=S([...a.map(N=>N.modelProvider),...a.map(N=>N.providerOverride),...e.aggregates?.byProvider.map(N=>N.provider)??[]]).slice(0,12),v=S([...a.map(N=>N.model),...e.aggregates?.byModel.map(N=>N.model)??[]]).slice(0,12),C=S(e.aggregates?.tools.tools.map(N=>N.name)??[]).slice(0,12),A=e.selectedSessions.length===1?e.sessions.find(N=>N.key===e.selectedSessions[0])??f.find(N=>N.key===e.selectedSessions[0]):null,E=N=>N.reduce((O,F)=>(F.usage&&(O.input+=F.usage.input,O.output+=F.usage.output,O.cacheRead+=F.usage.cacheRead,O.cacheWrite+=F.usage.cacheWrite,O.totalTokens+=F.usage.totalTokens,O.totalCost+=F.usage.totalCost,O.inputCost+=F.usage.inputCost??0,O.outputCost+=F.usage.outputCost??0,O.cacheReadCost+=F.usage.cacheReadCost??0,O.cacheWriteCost+=F.usage.cacheWriteCost??0,O.missingCostEntries+=F.usage.missingCostEntries??0),O),{input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0}),T=N=>e.costDaily.filter(F=>N.includes(F.date)).reduce((F,j)=>(F.input+=j.input,F.output+=j.output,F.cacheRead+=j.cacheRead,F.cacheWrite+=j.cacheWrite,F.totalTokens+=j.totalTokens,F.totalCost+=j.totalCost,F.inputCost+=j.inputCost??0,F.outputCost+=j.outputCost??0,F.cacheReadCost+=j.cacheReadCost??0,F.cacheWriteCost+=j.cacheWriteCost??0,F),{input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0});let P,_;const U=a.length;if(e.selectedSessions.length>0){const N=f.filter(O=>e.selectedSessions.includes(O.key));P=E(N),_=N.length}else e.selectedDays.length>0&&e.selectedHours.length===0?(P=T(e.selectedDays),_=f.length):e.selectedHours.length>0||n?(P=E(f),_=f.length):(P=e.totals,_=U);const W=e.selectedSessions.length>0?f.filter(N=>e.selectedSessions.includes(N.key)):n||e.selectedHours.length>0?f:e.selectedDays.length>0?o:a,R=_b(W,e.aggregates),L=e.selectedSessions.length>0?(()=>{const N=f.filter(F=>e.selectedSessions.includes(F.key)),O=new Set;for(const F of N)for(const j of F.usage?.activityDates??[])O.add(j);return O.size>0?e.costDaily.filter(F=>O.has(F.date)):e.costDaily})():e.costDaily,fe=Lb(W,P,R),D=!e.loading&&!e.totals&&e.sessions.length===0,q=(P?.missingCostEntries??0)>0||(P?P.totalTokens>0&&P.totalCost===0&&P.input+P.output+P.cacheRead+P.cacheWrite>0:!1),re=[{label:i("usageToday"),days:1},{label:i("usage7d"),days:7},{label:i("usage30d"),days:30}],ce=N=>{const O=new Date,F=new Date;F.setDate(F.getDate()-(N-1)),e.onStartDateChange(ca(F)),e.onEndDateChange(ca(O))},se=(N,O,F)=>{if(F.length===0)return y;const j=k(N),$e=new Set(j.map(ae=>wt(ae))),ee=F.length>0&&F.every(ae=>$e.has(wt(ae))),Me=j.length;return r`
      <details
        class="usage-filter-select"
        @toggle=${ae=>{const he=ae.currentTarget;if(!he.open)return;const He=ze=>{ze.composedPath().includes(he)||(he.open=!1,window.removeEventListener("click",He,!0))};window.addEventListener("click",He,!0)}}
      >
        <summary>
          <span>${O}</span>
          ${Me>0?r`<span class="usage-filter-badge">${Me}</span>`:r`
                  <span class="usage-filter-badge">All</span>
                `}
        </summary>
        <div class="usage-filter-popover">
          <div class="usage-filter-actions">
            <button
              class="btn btn-sm"
              @click=${ae=>{ae.preventDefault(),ae.stopPropagation(),e.onQueryDraftChange(zl(e.queryDraft,N,F))}}
              ?disabled=${ee}
            >
              Select All
            </button>
            <button
              class="btn btn-sm"
              @click=${ae=>{ae.preventDefault(),ae.stopPropagation(),e.onQueryDraftChange(zl(e.queryDraft,N,[]))}}
              ?disabled=${Me===0}
            >
              Clear
            </button>
          </div>
          <div class="usage-filter-options">
            ${F.map(ae=>{const he=$e.has(wt(ae));return r`
                <label class="usage-filter-option">
                  <input
                    type="checkbox"
                    .checked=${he}
                    @change=${He=>{const ze=He.target,lt=`${N}:${ae}`;e.onQueryDraftChange(ze.checked?Ub(e.queryDraft,lt):Hl(e.queryDraft,lt))}}
                  />
                  <span>${ae}</span>
                </label>
              `})}
          </div>
        </div>
      </details>
    `},ie=ca(new Date);return r`
    <style>${wb}</style>

    <section class="usage-page-header">
      <div class="usage-page-title">Usage</div>
      <div class="usage-page-subtitle">${i("usagePageSubtitle")}</div>
    </section>

    <section class="card usage-header ${e.headerPinned?"pinned":""}">
      <div class="usage-header-row">
        <div class="usage-header-title">
          <div class="card-title" style="margin: 0;">Filters</div>
          ${e.loading?r`
                  <span class="usage-refresh-indicator">Loading</span>
                `:y}
          ${D?r`
                  <span class="usage-query-hint">Select a date range and click Refresh to load usage.</span>
                `:y}
        </div>
        <div class="usage-header-metrics">
          ${P?r`
                <span class="usage-metric-badge">
                  <strong>${z(P.totalTokens)}</strong> ${i("usageTokensUnit")}
                </span>
                <span class="usage-metric-badge">
                  <strong>${G(P.totalCost)}</strong> cost
                </span>
                <span class="usage-metric-badge">
                  <strong>${_}</strong>
                  session${_!==1?"s":""}
                </span>
              `:y}
          <button
            class="usage-pin-btn ${e.headerPinned?"active":""}"
            title=${e.headerPinned?"Unpin filters":"Pin filters"}
            @click=${e.onToggleHeaderPinned}
          >
            ${e.headerPinned?"Pinned":"Pin"}
          </button>
          <details
            class="usage-export-menu"
            @toggle=${N=>{const O=N.currentTarget;if(!O.open)return;const F=j=>{j.composedPath().includes(O)||(O.open=!1,window.removeEventListener("click",F,!0))};window.addEventListener("click",F,!0)}}
          >
            <summary class="usage-export-button">${i("usageExport")} ▾</summary>
            <div class="usage-export-popover">
              <div class="usage-export-list">
                <button
                  class="usage-export-item"
                  @click=${()=>da(`openclaw-usage-sessions-${ie}.csv`,Ib(f),"text/csv")}
                  ?disabled=${f.length===0}
                >
                  ${i("usageExportSessionsCsv")}
                </button>
                <button
                  class="usage-export-item"
                  @click=${()=>da(`openclaw-usage-daily-${ie}.csv`,Db(L),"text/csv")}
                  ?disabled=${L.length===0}
                >
                  ${i("usageExportDailyCsv")}
                </button>
                <button
                  class="usage-export-item"
                  @click=${()=>da(`openclaw-usage-${ie}.json`,JSON.stringify({totals:P,sessions:f,daily:L,aggregates:R},null,2),"application/json")}
                  ?disabled=${f.length===0&&L.length===0}
                >
                  JSON
                </button>
              </div>
            </div>
          </details>
        </div>
      </div>
      <div class="usage-header-row">
        <div class="usage-controls">
          ${Fb(e.selectedDays,e.selectedHours,e.selectedSessions,e.sessions,e.onClearDays,e.onClearHours,e.onClearSessions,e.onClearFilters)}
          <div class="usage-presets">
            ${re.map(N=>r`
                <button class="btn btn-sm" @click=${()=>ce(N.days)}>
                  ${N.label}
                </button>
              `)}
          </div>
          <input
            type="date"
            .value=${e.startDate}
            title="Start Date"
            @change=${N=>e.onStartDateChange(N.target.value)}
          />
          <span style="color: var(--text-muted);">to</span>
          <input
            type="date"
            .value=${e.endDate}
            title="End Date"
            @change=${N=>e.onEndDateChange(N.target.value)}
          />
          <select
            title="Time zone"
            .value=${e.timeZone}
            @change=${N=>e.onTimeZoneChange(N.target.value)}
          >
            <option value="local">Local</option>
            <option value="utc">UTC</option>
          </select>
          <div class="chart-toggle">
            <button
              class="toggle-btn ${t?"active":""}"
              @click=${()=>e.onChartModeChange("tokens")}
            >
              Tokens
            </button>
            <button
              class="toggle-btn ${t?"":"active"}"
              @click=${()=>e.onChartModeChange("cost")}
            >
              Cost
            </button>
          </div>
          <button
            class="btn btn-sm usage-action-btn usage-primary-btn"
            @click=${e.onRefresh}
            ?disabled=${e.loading}
          >
            Refresh
          </button>
        </div>
        
      </div>

      <div style="margin-top: 12px;">
          <div class="usage-query-bar">
          <input
            class="usage-query-input"
            type="text"
            .value=${e.queryDraft}
            placeholder="Filter sessions (e.g. key:agent:main:cron* model:gpt-4o has:errors minTokens:2000)"
            @input=${N=>e.onQueryDraftChange(N.target.value)}
            @keydown=${N=>{N.key==="Enter"&&(N.preventDefault(),e.onApplyQuery())}}
          />
          <div class="usage-query-actions">
            <button
              class="btn btn-sm usage-action-btn usage-secondary-btn"
              @click=${e.onApplyQuery}
              ?disabled=${e.loading||!s&&!n}
            >
              Filter (client-side)
            </button>
            ${s||n?r`<button class="btn btn-sm usage-action-btn usage-secondary-btn" @click=${e.onClearQuery}>${i("usageClear")}</button>`:y}
            <span class="usage-query-hint">
              ${n?i("usageQueryHintMatch").replace("{count}",String(f.length)).replace("{total}",String(U)):i("usageQueryHintInRange").replace("{total}",String(U))}
            </span>
          </div>
        </div>
        <div class="usage-filter-row">
          ${se("agent","Agent",d)}
          ${se("channel","Channel",m)}
          ${se("provider","Provider",h)}
          ${se("model","Model",v)}
          ${se("tool","Tool",C)}
          <span class="usage-query-hint">
            Tip: use filters or click bars to filter days.
          </span>
        </div>
        ${$.length>0?r`
                <div class="usage-query-chips">
                  ${$.map(N=>{const O=N.raw;return r`
                      <span class="usage-query-chip">
                        ${O}
                        <button
                          title="Remove filter"
                          @click=${()=>e.onQueryDraftChange(Hl(e.queryDraft,O))}
                        >
                          ×
                        </button>
                      </span>
                    `})}
                </div>
              `:y}
        ${g.length>0?r`
                <div class="usage-query-suggestions">
                  ${g.map(N=>r`
                      <button
                        class="usage-query-suggestion"
                        @click=${()=>e.onQueryDraftChange(Nb(e.queryDraft,N.value))}
                      >
                        ${N.label}
                      </button>
                    `)}
                </div>
              `:y}
        ${p.length>0?r`
                <div class="callout warning" style="margin-top: 8px;">
                  ${p.join(" · ")}
                </div>
              `:y}
      </div>

      ${e.error?r`<div class="callout danger" style="margin-top: 12px;">${e.error}</div>`:y}

      ${e.sessionsLimitReached?r`
              <div class="callout warning" style="margin-top: 12px">
                Showing first 1,000 sessions. Narrow date range for complete results.
              </div>
            `:y}
    </section>

    ${zb(P,R,fe,q,kb(W,e.timeZone),_,U)}

    ${Mb(W,e.timeZone,e.selectedHours,e.onSelectHour)}

    <!-- Two-column layout: Daily+Breakdown on left, Sessions on right -->
    <div class="usage-grid">
      <div class="usage-grid-left">
        <div class="card usage-left-card">
          ${Bb(L,e.selectedDays,e.chartMode,e.dailyChartMode,e.onDailyChartModeChange,e.onSelectDay)}
          ${P?Hb(P,e.chartMode):y}
        </div>
      </div>
      <div class="usage-grid-right">
        ${Wb(f,e.selectedSessions,e.selectedDays,t,e.sessionSort,e.sessionSortDir,e.recentSessions,e.sessionsTab,e.onSelectSession,e.onSessionSortChange,e.onSessionSortDirChange,e.onSessionsTabChange,e.visibleColumns,U,e.onClearSessions)}
      </div>
    </div>

    <!-- Session Detail Panel (when selected) or Empty State -->
    ${A?jb(A,e.timeSeries,e.timeSeriesLoading,e.timeSeriesMode,e.onTimeSeriesModeChange,e.timeSeriesBreakdownMode,e.onTimeSeriesBreakdownChange,e.startDate,e.endDate,e.selectedDays,e.sessionLogs,e.sessionLogsLoading,e.sessionLogsExpanded,e.onToggleSessionLogsExpanded,{roles:e.logFilterRoles,tools:e.logFilterTools,hasTools:e.logFilterHasTools,query:e.logFilterQuery},e.onLogFilterRolesChange,e.onLogFilterToolsChange,e.onLogFilterHasToolsChange,e.onLogFilterQueryChange,e.onLogFilterClear,e.contextExpanded,e.onToggleContextExpanded,e.onClearSessions):Kb()}
  `}function Yb(e){e.mcpAddModalOpen=!0,e.mcpAddName="",e.mcpAddDraft={enabled:!0,command:"npx"},e.mcpAddConnectionType="stdio",e.mcpAddEditMode="form",e.mcpAddRawJson=JSON.stringify({enabled:!0},null,2),e.mcpAddRawError=null}function Zb(e){e.mcpAddModalOpen=!1,e.mcpAddName="",e.mcpAddRawError=null}function Xb(e,t){e.mcpAddName=t}function ew(e,t){e.mcpAddDraft={...e.mcpAddDraft,...t}}function tw(e,t){e.mcpAddConnectionType=t}function nw(e,t){e.mcpAddRawJson=t;try{const n=JSON.parse(t);e.mcpAddDraft=n,e.mcpAddRawError=null}catch{e.mcpAddRawError="Invalid JSON"}}function sw(e,t){e.mcpAddEditMode=t,t==="raw"&&(e.mcpAddRawJson=JSON.stringify(e.mcpAddDraft,null,2))}async function aw(e){const t=e.mcpAddName?.trim();if(!t)return;const n=t.toLowerCase().replace(/\s+/g,"-");if(e.mcpAddEditMode==="raw")try{e.mcpAddDraft=JSON.parse(e.mcpAddRawJson)}catch{e.mcpAddRawError="Invalid JSON";return}else{const c=e.mcpAddConnectionType,u=e.mcpAddDraft;if(c==="stdio"&&!u.command?.trim()||c==="url"&&!u.url?.trim()||c==="service"&&(!u.service?.trim()||!u.serviceUrl?.trim()))return}!e.configForm&&e.configSnapshot?.config&&(e.configForm=Z(e.configSnapshot.config));const s=Z(e.configForm??e.configSnapshot?.config??{});s.mcp||(s.mcp={servers:{}});const a=s.mcp;a.servers||(a.servers={});const o=e.mcpAddDraft.enabled,l=typeof o=="boolean"?o:!0;a.servers[n]={...e.mcpAddDraft,enabled:l},e.configForm=s,e.configFormDirty=!0,await Ae(e,{mcp:s.mcp}),e.mcpAddModalOpen=!1,e.mcpAddName=""}function ow(e){return!e||e.command?"stdio":e.url?"url":e.service&&e.serviceUrl?"service":"stdio"}function iw(e,t){if(e.mcpSelectedKey=t,e.mcpRawError=null,t){const s=(e.configForm?.mcp?.servers??{})[t];e.mcpRawJson=s?JSON.stringify(s,null,2):"{}",e.mcpEditConnectionType=ow(s)}}function lw(e,t){e.mcpEditConnectionType=t}function rw(e,t,n){const s=Z(e.configForm??e.configSnapshot?.config??{});s.mcp||(s.mcp={servers:{}});const a=s.mcp;a.servers||(a.servers={}),a.servers[t]||(a.servers[t]={}),a.servers[t]={...a.servers[t],enabled:n},e.configForm=s,e.configFormDirty=!0,Ae(e,{mcp:s.mcp})}function cw(e,t,n){const s=Z(e.configForm??e.configSnapshot?.config??{});s.mcp||(s.mcp={servers:{}});const a=s.mcp;a.servers||(a.servers={});const o=a.servers[t]??{};a.servers[t]={...o,...n},e.configForm=s,e.configFormDirty=!0,e.mcpFormDirty=!0}function dw(e,t,n){e.mcpRawJson=n;try{const s=JSON.parse(n),a=Z(e.configForm??e.configSnapshot?.config??{});a.mcp||(a.mcp={servers:{}});const o=a.mcp;o.servers||(o.servers={}),o.servers[t]=s,e.configForm=a,e.configFormDirty=!0,e.mcpRawError=null}catch{e.mcpRawError="Invalid JSON"}}function uw(e){if(!e.mcpSelectedKey)return;if(e.mcpEditMode==="raw")try{JSON.parse(e.mcpRawJson)}catch{e.mcpRawError="Invalid JSON";return}const t={mcp:{servers:e.configForm?.mcp?e.configForm.mcp.servers:{}}};Ae(e,t),e.mcpFormDirty=!1,e.mcpSelectedKey=null}function pw(e){e.mcpSelectedKey=null,e.mcpRawError=null,e.mcpFormDirty&&J(e)}function gw(e,t){const s=(e.configForm??e.configSnapshot?.config)?.mcp;if(s?.servers&&t in s.servers&&(Ae(e,{mcp:{servers:{[t]:null}}}),e.configForm&&e.configForm.mcp&&typeof e.configForm.mcp=="object")){const a=e.configForm.mcp.servers;if(a&&t in a){const o={...a};delete o[t],e.configForm.mcp.servers=o}}e.mcpSelectedKey===t&&(e.mcpSelectedKey=null)}function mw(e){J(e)}function fw(e){e.modelsAddProviderModalOpen=!0,e.modelsAddProviderForm={providerId:"",displayName:"",baseUrl:"",apiKey:"",apiKeyPrefix:""}}function hw(e){e.modelsAddProviderModalOpen=!1}function vw(e,t){e.modelsAddProviderForm={...e.modelsAddProviderForm,...t}}function yw(e){const{providerId:t,displayName:n,baseUrl:s,apiKey:a,apiKeyPrefix:o}=e.modelsAddProviderForm;if(!t.trim()||!n.trim())return;const l=t.trim().toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9_-]/g,"");if(!l)return;!e.configForm&&e.configSnapshot?.config&&(e.configForm=Z(e.configSnapshot.config));const c=Z(e.configForm??e.configSnapshot?.config??{});c.models||(c.models={mode:"merge",providers:{}});const u=c.models;if(u.providers||(u.providers={}),u.providers[l]){e.modelsAddProviderModalOpen=!1,e.modelsSelectedProvider=l;return}u.providers[l]={displayName:n.trim(),baseUrl:s.trim()||void 0,apiKey:a.trim()||void 0,apiKeyPrefix:o.trim()||void 0,api:"openai-completions"},e.configForm=c,e.configFormDirty=!0,e.modelsFormDirty=!0,e.modelsAddProviderModalOpen=!1,e.modelsSelectedProvider=l}function bw(e,t){e.modelsSelectedProvider=t}function ww(e,t,n){const s=Z(e.configForm??e.configSnapshot?.config??{});s.models||(s.models={mode:"merge",providers:{}});const a=s.models;a.providers||(a.providers={});const o=a.providers[t]??{};a.providers[t]={...o,...n},e.configForm=s,e.configFormDirty=!0,e.modelsFormDirty=!0}function xw(e,t){e.modelsAddModelModalOpen=!0,e.modelsAddModelForm={modelId:"",modelName:""}}function $w(e){e.modelsAddModelModalOpen=!1}function kw(e,t){e.modelsAddModelForm={...e.modelsAddModelForm,...t}}function Sw(e,t){const{modelId:n,modelName:s}=e.modelsAddModelForm;if(!n.trim()||!s.trim())return;const a=Z(e.configForm??e.configSnapshot?.config??{});a.models||(a.models={mode:"merge",providers:{}});const o=a.models;o.providers||(o.providers={});const l=o.providers[t]??{},c=l.models??[];if(c.some(u=>u.id===n.trim())){e.modelsAddModelModalOpen=!1;return}o.providers[t]={...l,models:[...c,{id:n.trim(),name:s.trim()}]},e.configForm=a,e.configFormDirty=!0,e.modelsFormDirty=!0,e.modelsAddModelModalOpen=!1}function Cw(e,t,n,s){const a=Z(e.configForm??e.configSnapshot?.config??{});a.env||(a.env={vars:{},modelEnv:{}});const o=a.env;o.modelEnv||(o.modelEnv={});const l=`${t}/${n}`;o.modelEnv[l]={...s},e.configForm=a,e.configFormDirty=!0,e.modelsFormDirty=!0}function Aw(e,t,n){const s=Z(e.configForm??e.configSnapshot?.config??{}),a=s.models?.providers;if(!a)return;const o=a[t];o?.models&&(a[t]={...o,models:o.models.filter(l=>l.id!==n)},e.configForm=s,e.configFormDirty=!0,e.modelsFormDirty=!0)}function Mw(e){const t={};for(const n of Object.values(e)){const s=n.envVars??{};for(const[a,o]of Object.entries(s))if(!(!a||a==="__new__")){if(t[a]!==void 0&&t[a]!==o)return{__conflict:a};t[a]=o}}return t}function Ew(e){const t=e.envVars??{},n={};for(const[s,a]of Object.entries(t))s&&s!=="__new__"&&(n[s]=a);return{...e,envVars:Object.keys(n).length?n:void 0}}function Tw(e){e.modelsSaveError=null;const t=e.configForm?.models?.providers??{},n=Mw(t);if(n.__conflict){e.modelsSaveError=n.__conflict;return}const a={...e.configForm?.env?.vars??{},...n},o={};for(const[g,$]of Object.entries(t)){let k=Ew($);const S=Ee.find(d=>d.id===g);if(S&&((!k.baseUrl||k.baseUrl.trim()==="")&&(k={...k,baseUrl:S.baseUrl}),!k.api||k.api.trim()==="")){const d=S.defaultApi??"openai-completions";k={...k,api:d}}o[g]=k}const c={models:{...e.configForm?.models&&typeof e.configForm.models=="object"&&!Array.isArray(e.configForm.models)?e.configForm.models:{},providers:o}},f=e.configForm?.env?.modelEnv??{},p={};for(const[g,$]of Object.entries(f)){if(!$||typeof $!="object")continue;const k={};for(const[S,d]of Object.entries($))S&&S!=="__new__"&&(k[S]=d);Object.keys(k).length>0?p[g]=k:p[g]=null}c.env={vars:a,modelEnv:p},Ae(e,c),e.modelsFormDirty=!1,e.modelsSelectedProvider=null}function Pw(e){e.modelsSelectedProvider=null,e.modelsSaveError=null,e.modelsFormDirty&&J(e)}function _w(e,t){e.modelsUseModelModalOpen=!0,e.modelsUseModelModalProvider=t}function Lw(e){e.modelsUseModelModalOpen=!1,e.modelsUseModelModalProvider=null}function Iw(e,t,n){const s=`${t}/${n}`,a=Z(e.configForm??e.configSnapshot?.config??{});vs(a,["agents","defaults","model","primary"],s),e.configForm=a,e.configFormDirty=!0,Ae(e,{agents:a.agents}),e.modelsUseModelModalOpen=!1,e.modelsUseModelModalProvider=null}function Dw(e,t){const s=e.configForm?.agents?.defaults?.model,a=s&&typeof s=="object"&&!Array.isArray(s)?s.primary:void 0,o=typeof a=="string"?a:null;if(!o||!o.startsWith(t+"/"))return;const l={agents:{defaults:{model:{primary:null}}}},c=Z(e.configForm??e.configSnapshot?.config??{}),p=c.agents?.defaults?.model;p&&typeof p=="object"&&!Array.isArray(p)&&delete p.primary,e.configForm=c,e.configFormDirty=!0,Ae(e,l)}function Rw(e){const t=(e??"").toLowerCase(),n="agent:main:employee:",s="agent:main:employee-";if(t.startsWith(n)){const a=e.slice(n.length),o=a.indexOf(":");return o>=0?a.slice(0,o):a}return t.startsWith(s)&&e.slice(s.length).split(/[:/-]/)[0]||null}let ua=null;const Kl=e=>{ua&&clearTimeout(ua),ua=window.setTimeout(()=>{Yr(e)},400)},Nw=/^data:/i,Uw=/^https?:\/\//i;function pa(e){if(!e?.agents)return null;const n=e.agents.defaults;if(!n?.model)return null;const s=n.model;if(typeof s=="string"&&s)return s;if(s&&typeof s=="object"&&!Array.isArray(s)){const a=s.primary;return typeof a=="string"&&a?a:null}return null}function Ow(e){const t=e.agentsList?.agents??[],s=ar(e.sessionKey)?.agentId??e.agentsList?.defaultId??"main",o=t.find(c=>c.id===s)?.identity,l=o?.avatarUrl??o?.avatar;if(l)return Nw.test(l)||Uw.test(l)?l:o?.avatarUrl}function Fw(e){const t=e.presenceEntries.length,n=e.sessionsResult?.count??null,s=e.cronStatus?.nextWakeAtMs??null,a=e.connected?null:"Disconnected from gateway.",o=e.tab==="chat"||e.tab==="message",l=o&&(e.settings.chatFocusMode||e.onboarding),c=e.onboarding?!1:e.settings.chatShowThinking,u=Ow(e),f=e.chatAvatarUrl??u??null,p=e.configForm??e.configSnapshot?.config,g=Ln(e.basePath??""),$=e.tab==="scheduledTasks"||e.tab==="cronHistory"||e.tab==="cron",k=e.tab==="employeeMarket"||e.tab==="skillLibrary"||e.tab==="toolLibrary"||e.tab==="tutorials",S=e.tab==="config"||e.tab==="envVars"||e.tab==="debug"||e.tab==="logs"||e.tab==="models"||e.tab==="overview"||e.tab==="channels"||e.tab==="sessions"||e.tab==="usage"||e.tab==="sandbox"||e.tab==="llmTrace"||e.tab==="aboutUs";return r`
    <div class="shell ${o?"shell--chat":""} ${k?"shell--catalog":""} ${l?"shell--chat-focus":""} ${e.settings.navCollapsed?"shell--nav-collapsed":""} ${e.onboarding?"shell--onboarding":""}">
      <header class="topbar">
        <div class="topbar-left">
          <div class="brand">
            <div class="brand-logo">
              <img
                src=${g?`${g}/favicon.svg`:"/favicon.svg"}
                alt="OpenOcta"
              />
            </div>
          </div>
        </div>
        <nav class="top-tabs" aria-label="Primary navigation">
          ${[{tab:"message",label:"消息"},{tab:"scheduledTasks",label:"定时任务"},{tab:"employeeMarket",label:"员工市场"},{tab:"skillLibrary",label:"技能库"},{tab:"toolLibrary",label:"工具库"},{tab:"tutorials",label:"教程"},{tab:"community",label:"社区",href:"https://community.databuff.com/"},{tab:"config",label:"配置"}].map(d=>{const m=d.tab,h=m?Dr(m):"globe",v=r`<span class="nav-item__icon" aria-hidden="true">${ne[h]}</span>`;if(d.href){const A=String(d.href);return r`
                <button
                  type="button"
                  class="top-tab top-tab--link"
                  @click=${()=>{Yn(A,{gatewayHost:e.settings.gatewayUrl,gatewayToken:e.settings.token})}}
                >
                  ${v}
                  ${d.label}
                </button>
              `}const C=m==="scheduledTasks"?$:m==="config"?S:e.tab===m;return r`
              <button
                class="top-tab ${C?"top-tab--active":""}"
                @click=${()=>e.setTab(m==="config"?"overview":m)}
                type="button"
              >
                ${v}
                ${d.label}
              </button>
            `})}
        </nav>
        <div class="topbar-status">
          <div class="pill pill--version">
            <span>Version</span>
            <span class="mono">${e.configSchemaVersion??"---"}</span>
          </div>
          <div class="pill">
            <button
              type="button"
              title="GitHub 仓库（新窗口打开）"
              class="topbar-link"
              @click=${()=>{Yn("https://github.com/openocta/openocta.git",{gatewayHost:e.settings.gatewayUrl,gatewayToken:e.settings.token})}}
            >
              <span class="topbar-link__icon" aria-hidden="true">${ne.github}</span>
              <span>GitHub</span>
            </button>
          </div>
          <div class="pill">
            <button
              type="button"
              title="OpenOcta 官网（新窗口打开）"
              class="topbar-link"
              @click=${()=>{Yn("https://www.openocta.com/",{gatewayHost:e.settings.gatewayUrl,gatewayToken:e.settings.token})}}
            >
              <img
                src=${g?`${g}/favicon.ico`:"/favicon.ico"}
                alt=""
                class="topbar-link__img"
                width="16"
                height="16"
              />
              <span>官网</span>
            </button>
          </div>
          <div class="pill">
            <span class="statusDot ${e.connected?"ok":""}"></span>
            <span>Health</span>
            <span class="mono">${e.connected?"OK":"Offline"}</span>
          </div>
        </div>
      </header>
      <aside class="nav ${k?"nav--catalog":""} ${e.settings.navCollapsed?"nav--collapsed":""}">
        ${e.tab==="message"?r`
                <div class="session-sidebar">
                  <button
                    class="session-new"
                    type="button"
                    @click=${async()=>{const d=await ap(e);d?.key&&(e.sessionKey=d.key,e.chatMessage="",e.chatAttachments=[],e.resetToolStream(),e.applySettings({...e.settings,sessionKey:d.key,lastActiveSessionKey:d.key}),e.loadAssistantIdentity(),await Promise.all([et(e),yt(e)]))}}
                  >
                    <span class="session-new__icon" aria-hidden="true">${ne.plus}</span>
                    <span>新消息</span>
                  </button>

                  <div class="session-list">
                    ${(e.sessionsResult?.sessions??[]).map(d=>{const m=d.key??d.sessionId??"",h=m.toLowerCase().startsWith("custom:"),v=h?null:Rw(m),C=v?e.digitalEmployees?.find(W=>W.id===v):null,A=C?.name||d.origin&&(d.origin.label||d.origin.from||d.origin.to)||d.label||d.displayName||d.sessionId||m||"会话",E=d.lastMessagePreview?.trim()||"",T=m&&e.sessionKey===m,P=h,_=P&&e.sessionEditingKey===m,U=async W=>{if(!m||!W.trim()){e.sessionEditingKey=null;return}await Ci(e,m,{label:W.trim()}),e.sessionEditingKey=null};return r`
                          <div
                            class="session-item ${T?"session-item--active":""} ${P?"session-item--editable":""}"
                            role="button"
                            tabindex="0"
                            @click=${async W=>{const R=W.target;R.closest(".session-item__edit")||R.closest("input")||m&&(e.sessionKey=m,e.chatMessage="",e.resetToolStream(),e.applySettings({...e.settings,sessionKey:m,lastActiveSessionKey:m}),await Promise.all([et(e),yt(e)]))}}
                            @dblclick=${W=>{P&&(W.stopPropagation(),e.sessionEditingKey=m)}}
                            @keydown=${W=>{W.key==="Enter"&&!_&&(W.preventDefault(),W.currentTarget.click())}}
                          >
                            <span class="session-item__icon" aria-hidden="true">
                              ${C?r`<span class="session-item__icon-emp">${C.name?.slice(0,1)||"?"}</span>`:r`<span class="session-item__icon-default">${ne.messageSquare}</span>`}
                            </span>
                            <div class="session-item__body">
                              ${_?r`
                                    <input
                                      class="session-item__input"
                                      type="text"
                                      .value=${A}
                                      @blur=${W=>U(W.target.value)}
                                      @keydown=${W=>{W.key==="Enter"&&(W.preventDefault(),U(W.target.value)),W.key==="Escape"&&(e.sessionEditingKey=null)}}
                                      @click=${W=>W.stopPropagation()}
                                    />
                                  `:r`<span class="session-item__text">${A}</span>`}
                              ${!_&&E?r`<span class="session-item__sub muted">${E}</span>`:y}
                            </div>
                          </div>
                        `})}
                  </div>
                </div>
              `:$?r`
                  <div class="nav-group">
                    <button class="nav-label nav-label--static" type="button">
                      <span class="nav-label__text">定时任务</span>
                    </button>
                    <div class="nav-group__items">
                      ${ke(e,"scheduledTasks")}
                      ${ke(e,"cronHistory")}
                    </div>
                  </div>
                `:S?r`
                    <div class="nav-group">
                      <button class="nav-label nav-label--static" type="button">
                        <span class="nav-label__text">控制</span>
                      </button>
                      <div class="nav-group__items">
                        ${ke(e,"overview")}
                        ${ke(e,"channels")}
                        ${ke(e,"sessions")}
                        ${ke(e,"usage")}
                      </div>
                    </div>
                    <div class="nav-group">
                      <button class="nav-label nav-label--static" type="button">
                        <span class="nav-label__text">Agent</span>
                      </button>
                      <div class="nav-group__items">
                        ${ke(e,"models")}
                        ${ke(e,"sandbox")}
                        ${ke(e,"llmTrace")}
                      </div>
                    </div>
                    <div class="nav-group">
                      <button class="nav-label nav-label--static" type="button">
                        <span class="nav-label__text">配置</span>
                      </button>
                      <div class="nav-group__items">
                        ${ke(e,"config")}
                        ${ke(e,"envVars")}
                        ${ke(e,"logs")}
                      </div>
                    </div>
                    <div class="nav-group">
                      <button class="nav-label nav-label--static" type="button">
                        <span class="nav-label__text">资源</span>
                      </button>
                      <div class="nav-group__items">
                        <button
                          type="button"
                          class="nav-item"
                          title="在线文档（新窗口打开）"
                          @click=${()=>{Yn("https://www.openocta.com/docs",{gatewayHost:e.settings.gatewayUrl,gatewayToken:e.settings.token})}}
                        >
                          <span class="nav-item__icon" aria-hidden="true">${ne.book}</span>
                          <span class="nav-item__text">在线文档</span>
                        </button>
                        ${ke(e,"aboutUs")}
                      </div>
                    </div>
                  `:e.tab==="employeeMarket"?(()=>{const{orderedCategories:d,counts:m}=Fv(e.employeeMarketItems,e.employeeMarketQuery),h=(e.employeeMarketCategory??"").trim()||"__all__";return r`
                      <div class="nav-group">
                        <button class="nav-label nav-label--static" type="button">
                          <span class="nav-label__text">分类</span>
                        </button>
                        <div class="nav-group__items">
                          <div class="emp-categories">
                          ${d.map(v=>{const C=v==="__all__"?"全部":v,A=h===v,E=m.get(v)??0;return r`
                              <button
                                class="emp-cat ${A?"active":""}"
                                type="button"
                                ?disabled=${e.employeeMarketLoading}
                                @click=${()=>e.employeeMarketCategory=v}
                              >
                                <span class="emp-cat__name">${C}</span>
                                <span class="emp-cat__count">${E}</span>
                              </button>
                            `})}
                          </div>
                        </div>
                      </div>
                    `})():e.tab==="skillLibrary"?(()=>{const{orderedCategories:d,counts:m}=Ry(e.skillLibraryItems,e.skillLibraryQuery,e.skillLibraryStatus??""),h=(e.skillLibraryCategory??"").trim()||"__all__";return r`
                        <div class="nav-group">
                          <button class="nav-label nav-label--static" type="button">
                            <span class="nav-label__text">分类</span>
                          </button>
                          <div class="nav-group__items">
                            <div class="emp-categories">
                            ${d.map(v=>{const C=v==="__all__"?"全部":v,A=h===v,E=m.get(v)??0;return r`
                                <button
                                  class="emp-cat ${A?"active":""}"
                                  type="button"
                                  ?disabled=${e.skillLibraryLoading}
                                  @click=${()=>e.skillLibraryCategory=v}
                                >
                                  <span class="emp-cat__name">${C}</span>
                                  <span class="emp-cat__count">${E}</span>
                                </button>
                              `})}
                            </div>
                          </div>
                        </div>
                      `})():e.tab==="toolLibrary"?(()=>{const{orderedCategories:d,counts:m}=Ky(e.toolLibraryItems,e.toolLibraryQuery),h=(e.toolLibraryCategory??"").trim()||"__all__";return r`
                          <div class="nav-group">
                            <button class="nav-label nav-label--static" type="button">
                              <span class="nav-label__text">分类</span>
                            </button>
                            <div class="nav-group__items">
                              <div class="emp-categories">
                              ${d.map(v=>{const C=v==="__all__"?"全部":v,A=h===v,E=m.get(v)??0;return r`
                                  <button
                                    class="emp-cat ${A?"active":""}"
                                    type="button"
                                    ?disabled=${e.toolLibraryLoading}
                                    @click=${()=>e.toolLibraryCategory=v}
                                  >
                                    <span class="emp-cat__name">${C}</span>
                                    <span class="emp-cat__count">${E}</span>
                                  </button>
                                `})}
                              </div>
                            </div>
                          </div>
                        `})():e.tab==="tutorials"?(()=>{const d=[...e.tutorialCategories??[]].sort((h,v)=>(h.sort_order??0)-(v.sort_order??0)||h.name.localeCompare(v.name,"zh-Hans-CN")),m=e.tutorialsSelectedCategoryId;return r`
                            <div class="nav-group">
                              <button class="nav-label nav-label--static" type="button">
                                <span class="nav-label__text">分类</span>
                              </button>
                              <div class="nav-group__items">
                                <div class="emp-categories">
                                ${d.length===0?r`<button class="emp-cat" disabled>
                                      <span class="emp-cat__name">暂无分类</span>
                                      <span class="emp-cat__count">0</span>
                                    </button>`:d.map((h,v)=>{const C=m===h.id,A=h.courses?.length??0,E=Vy(h.icon_class),T=(h.name??"").trim().slice(0,1)||"教";return r`
                                        <button
                                          class="emp-cat emp-cat--tutorial ${C?"active":""}"
                                          type="button"
                                          style=${Gy(h.accent,v)}
                                          ?disabled=${e.tutorialsLoading}
                                          @click=${()=>e.tutorialsSelectedCategoryId=h.id}
                                        >
                                          <span class="emp-cat__name" style="display:flex; align-items:center; gap: 10px; min-width: 0;">
                                            <span
                                              class="emp-cat__icon-wrap"
                                              aria-hidden="true"
                                            >
                                              ${E?r`<span class="emp-cat__icon-svg">${E}</span>`:T}
                                            </span>
                                            <span style="min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${h.name}</span>
                                          </span>
                                          <span class="emp-cat__count">${A}</span>
                                        </button>
                                      `})}
                                </div>
                              </div>
                            </div>
                          `})():r`<div class="nav-empty"></div>`}
      </aside>
      <main class="content ${o?"content--chat":""} ${k?"content--catalog":""} ${e.tab==="llmTrace"&&e.llmTraceViewingSessionId!=null?"content--llm-trace-detail":""}">
        ${k?y:r`
              <section class="content-header">
                <div>
                  ${e.tab==="usage"?y:r`<div class="page-title">${Sa(e.tab)}</div>`}
                </div>
                <div class="page-meta">
                  ${e.lastError?r`<div class="pill danger">${e.lastError}</div>`:y}
                  ${o?qg(e):y}
                </div>
              </section>
            `}

        ${e.tab==="overview"?$y({connected:e.connected,hello:e.hello,settings:e.settings,password:e.password,lastError:e.lastError,presenceCount:t,sessionsCount:n,cronEnabled:e.cronStatus?.enabled??null,cronNext:s,lastChannelsRefresh:e.channelsLastSuccess,onSettingsChange:d=>e.applySettings(d),onPasswordChange:d=>e.password=d,onSessionKeyChange:d=>{e.sessionKey=d,e.chatMessage="",e.resetToolStream(),e.applySettings({...e.settings,sessionKey:d,lastActiveSessionKey:d}),e.loadAssistantIdentity()},onConnect:()=>e.connect(),onRefresh:()=>e.loadOverview()}):y}

        ${e.tab==="channels"?Am({connected:e.connected,loading:e.channelsLoading,snapshot:e.channelsSnapshot,lastError:e.channelsError,lastSuccessAt:e.channelsLastSuccess,whatsappMessage:e.whatsappLoginMessage,whatsappQrDataUrl:e.whatsappLoginQrDataUrl,whatsappConnected:e.whatsappLoginConnected,whatsappBusy:e.whatsappBusy,weworkQrModalOpen:e.weworkQrModalOpen,weworkQrModalLoading:e.weworkQrModalLoading,weworkQrModalPolling:e.weworkQrModalPolling,weworkQrModalSuccess:e.weworkQrModalSuccess,weworkQrModalError:e.weworkQrModalError,weworkQrModalReplaceWarn:e.weworkQrModalReplaceWarn,weworkQrModalAuthUrl:e.weworkQrModalAuthUrl,weworkQrModalGenPageUrl:e.weworkQrModalGenPageUrl,configSchema:e.configSchema,configSchemaLoading:e.configSchemaLoading,configForm:e.configForm,configUiHints:e.configUiHints,configSaving:e.configSaving,configFormDirty:e.configFormDirty,selectedChannelId:e.channelsSelectedChannelId,nostrProfileFormState:e.nostrProfileFormState,nostrProfileAccountId:e.nostrProfileAccountId,onRefresh:d=>Ce(e,d),onChannelSelect:d=>{e.channelsSelectedChannelId=d},onWhatsAppStart:d=>e.handleWhatsAppStart(d),onWhatsAppWait:()=>e.handleWhatsAppWait(),onWhatsAppLogout:()=>e.handleWhatsAppLogout(),onWeWorkQrStart:()=>e.handleWeWorkQrStart(),onWeWorkQrModalClose:()=>e.handleWeWorkQrModalClose(),onConfigPatch:(d,m)=>Ve(e,d,m),onConfigSave:()=>e.handleChannelConfigSave(),onConfigReload:()=>e.handleChannelConfigReload(),onNostrProfileEdit:(d,m)=>e.handleNostrProfileEdit(d,m),onNostrProfileCancel:()=>e.handleNostrProfileCancel(),onNostrProfileFieldChange:(d,m)=>e.handleNostrProfileFieldChange(d,m),onNostrProfileSave:()=>e.handleNostrProfileSave(),onNostrProfileImport:()=>e.handleNostrProfileImport(),onNostrProfileToggleAdvanced:()=>e.handleNostrProfileToggleAdvanced()}):y}

        ${e.tab==="sessions"?Ly({loading:e.sessionsLoading,result:e.sessionsResult,error:e.sessionsError,activeMinutes:e.sessionsFilterActive,limit:e.sessionsFilterLimit,includeGlobal:e.sessionsIncludeGlobal,includeUnknown:e.sessionsIncludeUnknown,basePath:e.basePath,bulkMode:e.sessionsBulkMode,selectedKeys:e.sessionsSelectedKeys,onFiltersChange:d=>{e.sessionsFilterActive=d.activeMinutes,e.sessionsFilterLimit=d.limit,e.sessionsIncludeGlobal=d.includeGlobal,e.sessionsIncludeUnknown=d.includeUnknown},onRefresh:()=>Re(e),onPatch:(d,m)=>Ci(e,d,m),onDelete:d=>op(e,d),onBulkModeToggle:()=>{const d=!e.sessionsBulkMode;e.sessionsBulkMode=d,d||(e.sessionsSelectedKeys=[])},onSelectionChange:(d,m)=>{!d||d==="agent.main.main"||(m?e.sessionsSelectedKeys.includes(d)||(e.sessionsSelectedKeys=[...e.sessionsSelectedKeys,d]):e.sessionsSelectedKeys=e.sessionsSelectedKeys.filter(h=>h!==d))},onSelectAll:d=>{const m=d.filter(h=>h&&h!=="agent.main.main");e.sessionsSelectedKeys=Array.from(new Set(m))},onClearSelection:()=>{e.sessionsSelectedKeys=[]},onBulkDelete:async d=>{const m=d.filter(h=>h&&h!=="agent.main.main");m.length!==0&&(await ip(e,m),e.sessionsSelectedKeys=[],e.sessionsBulkMode=!1)}}):y}

        ${e.tab==="usage"?Jb({loading:e.usageLoading,error:e.usageError,startDate:e.usageStartDate,endDate:e.usageEndDate,sessions:e.usageResult?.sessions??[],sessionsLimitReached:(e.usageResult?.sessions?.length??0)>=1e3,totals:e.usageResult?.totals??null,aggregates:e.usageResult?.aggregates??null,costDaily:e.usageCostSummary?.daily??[],selectedSessions:e.usageSelectedSessions,selectedDays:e.usageSelectedDays,selectedHours:e.usageSelectedHours,chartMode:e.usageChartMode,dailyChartMode:e.usageDailyChartMode,timeSeriesMode:e.usageTimeSeriesMode,timeSeriesBreakdownMode:e.usageTimeSeriesBreakdownMode,timeSeries:e.usageTimeSeries,timeSeriesLoading:e.usageTimeSeriesLoading,sessionLogs:e.usageSessionLogs,sessionLogsLoading:e.usageSessionLogsLoading,sessionLogsExpanded:e.usageSessionLogsExpanded,logFilterRoles:e.usageLogFilterRoles,logFilterTools:e.usageLogFilterTools,logFilterHasTools:e.usageLogFilterHasTools,logFilterQuery:e.usageLogFilterQuery,query:e.usageQuery,queryDraft:e.usageQueryDraft,sessionSort:e.usageSessionSort,sessionSortDir:e.usageSessionSortDir,recentSessions:e.usageRecentSessions,sessionsTab:e.usageSessionsTab,visibleColumns:e.usageVisibleColumns,timeZone:e.usageTimeZone,contextExpanded:e.usageContextExpanded,headerPinned:e.usageHeaderPinned,onStartDateChange:d=>{e.usageStartDate=d,e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],Kl(e)},onEndDateChange:d=>{e.usageEndDate=d,e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],Kl(e)},onRefresh:()=>Yr(e),onTimeZoneChange:d=>{e.usageTimeZone=d},onToggleContextExpanded:()=>{e.usageContextExpanded=!e.usageContextExpanded},onToggleSessionLogsExpanded:()=>{e.usageSessionLogsExpanded=!e.usageSessionLogsExpanded},onLogFilterRolesChange:d=>{e.usageLogFilterRoles=d},onLogFilterToolsChange:d=>{e.usageLogFilterTools=d},onLogFilterHasToolsChange:d=>{e.usageLogFilterHasTools=d},onLogFilterQueryChange:d=>{e.usageLogFilterQuery=d},onLogFilterClear:()=>{e.usageLogFilterRoles=[],e.usageLogFilterTools=[],e.usageLogFilterHasTools=!1,e.usageLogFilterQuery=""},onToggleHeaderPinned:()=>{e.usageHeaderPinned=!e.usageHeaderPinned},onSelectHour:(d,m)=>{if(m&&e.usageSelectedHours.length>0){const h=Array.from({length:24},(E,T)=>T),v=e.usageSelectedHours[e.usageSelectedHours.length-1],C=h.indexOf(v),A=h.indexOf(d);if(C!==-1&&A!==-1){const[E,T]=C<A?[C,A]:[A,C],P=h.slice(E,T+1);e.usageSelectedHours=[...new Set([...e.usageSelectedHours,...P])]}}else e.usageSelectedHours.includes(d)?e.usageSelectedHours=e.usageSelectedHours.filter(h=>h!==d):e.usageSelectedHours=[...e.usageSelectedHours,d]},onQueryDraftChange:d=>{e.usageQueryDraft=d,e.usageQueryDebounceTimer&&window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=window.setTimeout(()=>{e.usageQuery=e.usageQueryDraft,e.usageQueryDebounceTimer=null},250)},onApplyQuery:()=>{e.usageQueryDebounceTimer&&(window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=null),e.usageQuery=e.usageQueryDraft},onClearQuery:()=>{e.usageQueryDebounceTimer&&(window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=null),e.usageQueryDraft="",e.usageQuery=""},onSessionSortChange:d=>{e.usageSessionSort=d},onSessionSortDirChange:d=>{e.usageSessionSortDir=d},onSessionsTabChange:d=>{e.usageSessionsTab=d},onToggleColumn:d=>{e.usageVisibleColumns.includes(d)?e.usageVisibleColumns=e.usageVisibleColumns.filter(m=>m!==d):e.usageVisibleColumns=[...e.usageVisibleColumns,d]},onSelectSession:(d,m)=>{if(e.usageTimeSeries=null,e.usageSessionLogs=null,e.usageRecentSessions=[d,...e.usageRecentSessions.filter(h=>h!==d)].slice(0,8),m&&e.usageSelectedSessions.length>0){const h=e.usageChartMode==="tokens",C=[...e.usageResult?.sessions??[]].toSorted((P,_)=>{const U=h?P.usage?.totalTokens??0:P.usage?.totalCost??0;return(h?_.usage?.totalTokens??0:_.usage?.totalCost??0)-U}).map(P=>P.key),A=e.usageSelectedSessions[e.usageSelectedSessions.length-1],E=C.indexOf(A),T=C.indexOf(d);if(E!==-1&&T!==-1){const[P,_]=E<T?[E,T]:[T,E],U=C.slice(P,_+1),W=[...new Set([...e.usageSelectedSessions,...U])];e.usageSelectedSessions=W}}else e.usageSelectedSessions.length===1&&e.usageSelectedSessions[0]===d?e.usageSelectedSessions=[]:e.usageSelectedSessions=[d];e.usageSelectedSessions.length===1&&(jg(e,e.usageSelectedSessions[0]),Qg(e,e.usageSelectedSessions[0]))},onSelectDay:(d,m)=>{if(m&&e.usageSelectedDays.length>0){const h=(e.usageCostSummary?.daily??[]).map(E=>E.date),v=e.usageSelectedDays[e.usageSelectedDays.length-1],C=h.indexOf(v),A=h.indexOf(d);if(C!==-1&&A!==-1){const[E,T]=C<A?[C,A]:[A,C],P=h.slice(E,T+1),_=[...new Set([...e.usageSelectedDays,...P])];e.usageSelectedDays=_}}else e.usageSelectedDays.includes(d)?e.usageSelectedDays=e.usageSelectedDays.filter(h=>h!==d):e.usageSelectedDays=[d]},onChartModeChange:d=>{e.usageChartMode=d},onDailyChartModeChange:d=>{e.usageDailyChartMode=d},onTimeSeriesModeChange:d=>{e.usageTimeSeriesMode=d},onTimeSeriesBreakdownChange:d=>{e.usageTimeSeriesBreakdownMode=d},onClearDays:()=>{e.usageSelectedDays=[]},onClearHours:()=>{e.usageSelectedHours=[]},onClearSessions:()=>{e.usageSelectedSessions=[],e.usageTimeSeries=null,e.usageSessionLogs=null},onClearFilters:()=>{e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],e.usageTimeSeries=null,e.usageSessionLogs=null}}):y}

        ${e.tab==="cron"||e.tab==="scheduledTasks"?Av({basePath:e.basePath,loading:e.cronLoading,status:e.cronStatus,jobs:e.cronJobs,error:e.cronError,busy:e.cronBusy,form:e.cronForm,channels:e.channelsSnapshot?.channelMeta?.length?e.channelsSnapshot.channelMeta.map(d=>d.id):e.channelsSnapshot?.channelOrder??[],channelLabels:e.channelsSnapshot?.channelLabels??{},channelMeta:e.channelsSnapshot?.channelMeta??[],runsJobId:e.cronRunsJobId,runs:e.cronRuns,onFormChange:d=>e.cronForm={...e.cronForm,...d},onRefresh:()=>e.loadCron(),onAdd:()=>fi(e),onToggle:(d,m)=>hi(e,d,m),onRun:d=>vi(e,d),onRemove:d=>yi(e,d),onLoadRuns:d=>un(e,d),onShowHistory:d=>{e.setTab("cronHistory"),un(e,d)}}):y}

        ${e.tab==="cronHistory"?Mv({basePath:e.basePath,loading:e.cronLoading,status:e.cronStatus,jobs:e.cronJobs,error:e.cronError,busy:e.cronBusy,form:e.cronForm,channels:e.channelsSnapshot?.channelMeta?.length?e.channelsSnapshot.channelMeta.map(d=>d.id):e.channelsSnapshot?.channelOrder??[],channelLabels:e.channelsSnapshot?.channelLabels??{},channelMeta:e.channelsSnapshot?.channelMeta??[],runsJobId:e.cronRunsJobId,runs:e.cronRuns,onFormChange:d=>e.cronForm={...e.cronForm,...d},onRefresh:()=>e.loadCron(),onAdd:()=>fi(e),onToggle:(d,m)=>hi(e,d,m),onRun:d=>vi(e,d),onRemove:d=>yi(e,d),onLoadRuns:d=>un(e,d),onShowHistory:d=>{e.setTab("cronHistory"),un(e,d)}}):y}

        ${e.tab==="employeeMarket"?(()=>{const d=async()=>{e.employeeMarketLoading=!0,e.employeeMarketError=null;try{const m=e.employeeMarketCategory&&e.employeeMarketCategory!=="__all__"?e.employeeMarketCategory:void 0;e.employeeMarketItems=await oa({q:e.employeeMarketQuery,category:m},{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()});const h=e.employeeMarketItems,v=new Set,C={};for(const A of h)if(A.installed&&A.localId){const E=String(A.id);(typeof A.id!="string"||!E.startsWith("local:"))&&(v.add(E),C[E]=A.localId)}e.employeeMarketInstalledRemoteIds=v,e.employeeMarketRemoteToLocal=C}catch(m){e.employeeMarketError=m?.message?String(m.message):String(m)}finally{e.employeeMarketLoading=!1}};return!e.employeeMarketLoadedOnce&&!e.employeeMarketLoading&&(e.employeeMarketLoadedOnce=!0,queueMicrotask(()=>{d()})),Kv({loading:e.employeeMarketLoading,error:e.employeeMarketError,query:e.employeeMarketQuery,category:e.employeeMarketCategory,items:e.employeeMarketItems,selectedId:e.employeeMarketSelectedId,selectedDetail:e.employeeMarketSelectedDetail,onQueryChange:m=>e.employeeMarketQuery=m,onCategoryChange:m=>e.employeeMarketCategory=m,onRefresh:async()=>{await d()},onSelect:async m=>{e.employeeMarketSelectedId=m,e.employeeMarketSelectedDetail=null,e.employeeMarketError=null;try{e.employeeMarketSelectedDetail=await Iv(m,{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()})}catch(h){e.employeeMarketError=h?.message?String(h.message):String(h)}},onDetailClose:()=>{e.employeeMarketSelectedId=null,e.employeeMarketSelectedDetail=null},onAdd:()=>{e.digitalEmployeeCreateModalOpen=!0,e.digitalEmployeeAdvancedOpen=!1,e.digitalEmployeeCreateMcpMode="builder",e.digitalEmployeeCreateMcpJson="",e.digitalEmployeeCreateMcpItems=[],e.digitalEmployeeSkillUploadName="",e.digitalEmployeeSkillUploadFiles=[],e.digitalEmployeeSkillUploadError=null},onInstall:async(m,h)=>{const v=String(m);e.employeeMarketInstallingId=v,e.employeeMarketError=null;try{const C=await ia({kind:"employee",id:v,type:h??void 0,category:h??void 0},{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()});e.employeeMarketInstalledRemoteIds=new Set([...e.employeeMarketInstalledRemoteIds,v]),C?.id&&(e.employeeMarketRemoteToLocal={...e.employeeMarketRemoteToLocal,[v]:C.id}),await d()}catch(C){e.employeeMarketError=C?.message??String(C)}finally{e.employeeMarketInstallingId=null}},onDelete:async m=>{if(e.employeeMarketError=null,e.digitalEmployeesError=null,await Mi(e,m),e.digitalEmployeesError)e.employeeMarketError=e.digitalEmployeesError;else{const h=Object.entries(e.employeeMarketRemoteToLocal).filter(([,C])=>C===m).map(([C])=>C),v={...e.employeeMarketRemoteToLocal};for(const C of h)delete v[C];e.employeeMarketRemoteToLocal=v,e.employeeMarketInstalledRemoteIds=new Set([...e.employeeMarketInstalledRemoteIds].filter(C=>!h.includes(C))),await d(),e.employeeMarketSelectedId=null,e.employeeMarketSelectedDetail=null}},onOpenEmployee:async m=>{const h=m.trim()||"default";await Re(e,{activeMinutes:10080,limit:200,includeLastMessage:!0});const v=e.sessionsResult?.sessions??[],C=[`agent:main:employee:${h}:`,`agent:main:employee-${h}`,`employee:${h}:`,`employee-${h}`],A=v.find(T=>C.some(P=>T.key.includes(P)||T.key===P)),E=A?A.key:`agent:main:employee:${h}:run:${Le()}`;e.sessionKey=E,e.chatMessage="",e.chatAttachments=[],e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.chatQueue=[],e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:E,lastActiveSessionKey:E}),e.loadAssistantIdentity(),et(e),yt(e),e.setTab("message"),A||e.handleSendChat("当前已开启数字员工会话。请以你配置的人设（如有）向用户打招呼，保持你的语气、风格和情绪。用 1～3 句话问候并询问用户想做什么。",{refreshSessions:!0})},onEdit:async m=>{const h=e.digitalEmployees.find(A=>A.id===m),v=await $a(e,m);if(!v){e.employeeMarketError="无法加载员工详情";return}const C=A=>{const E=[];if(!A||typeof A!="object")return E;for(const[T,P]of Object.entries(A)){const _=String(T??"").trim();if(!_)continue;const U=P,W=U&&typeof U=="object"&&!Array.isArray(U),R=W&&typeof U.url=="string"&&U.url.trim()?"url":W&&typeof U.service=="string"&&U.service.trim()?"service":"stdio",L=W&&(R==="stdio"&&typeof U.command=="string"&&U.command.trim()||R==="url"&&typeof U.url=="string"&&U.url.trim()||R==="service"&&typeof U.service=="string"&&U.service.trim()&&typeof U.serviceUrl=="string"&&U.serviceUrl.trim());E.push({id:Le(),key:_,editMode:L?"form":"raw",connectionType:R,draft:L?U:{command:"npx",args:[],env:{}},rawJson:W?JSON.stringify(U,null,2):"{}",rawError:null,collapsed:!0})}return E};e.digitalEmployeeEditModalOpen=!0,e.digitalEmployeeEditId=v.id,e.digitalEmployeeEditName=v.name||v.id,e.digitalEmployeeEditDescription=v.description??"",e.digitalEmployeeEditPrompt=v.prompt??"",e.digitalEmployeeEditMcpJson=v.mcpServers&&Object.keys(v.mcpServers).length>0?JSON.stringify(v.mcpServers,null,2):"",e.digitalEmployeeEditMcpMode="builder",e.digitalEmployeeEditMcpItems=C(v.mcpServers),e.digitalEmployeeEditSkillNames=h?.skillNames??h?.skillIds??v.skillIds??[],e.digitalEmployeeEditSkillFilesToUpload=[],e.digitalEmployeeEditSkillsToDelete=[],e.digitalEmployeeEditEnabled=v.enabled!==!1,e.digitalEmployeeEditError=null},installedIds:new Set(e.employeeMarketItems.filter(m=>typeof m.id=="string"&&String(m.id).startsWith("local:")).map(m=>String(m.id))),installedRemoteIds:e.employeeMarketInstalledRemoteIds,remoteToLocalMap:e.employeeMarketRemoteToLocal,installingId:e.employeeMarketInstallingId})})():y}

        ${e.tab==="employeeMarket"&&e.digitalEmployeeCreateModalOpen?(()=>{const d=async()=>{e.employeeMarketLoading=!0,e.employeeMarketError=null;try{const m=e.employeeMarketCategory&&e.employeeMarketCategory!=="__all__"?e.employeeMarketCategory:void 0;e.employeeMarketItems=await oa({q:e.employeeMarketQuery,category:m},{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()})}catch(m){e.employeeMarketError=m?.message?String(m.message):String(m)}finally{e.employeeMarketLoading=!1}};return Gg({createModalOpen:e.digitalEmployeeCreateModalOpen,createName:e.digitalEmployeeCreateName,createDescription:e.digitalEmployeeCreateDescription,createPrompt:e.digitalEmployeeCreatePrompt,createError:e.digitalEmployeeCreateError,createBusy:e.digitalEmployeeCreateBusy,advancedOpen:e.digitalEmployeeAdvancedOpen,createMcpMode:e.digitalEmployeeCreateMcpMode,mcpJson:e.digitalEmployeeCreateMcpJson,mcpItems:e.digitalEmployeeCreateMcpItems??[],skillUploadName:e.digitalEmployeeSkillUploadName,skillUploadFiles:e.digitalEmployeeSkillUploadFiles??[],skillUploadError:e.digitalEmployeeSkillUploadError,onMcpJsonChange:m=>e.digitalEmployeeCreateMcpJson=m,onMcpModeChange:m=>e.digitalEmployeeCreateMcpMode=m,onMcpAddItem:()=>{const m=e.digitalEmployeeCreateMcpItems??[];e.digitalEmployeeCreateMcpItems=[...m,{id:Le(),key:"",editMode:"form",connectionType:"stdio",draft:{command:"npx",args:[],env:{}},rawJson:"{}",rawError:null,collapsed:!1}]},onMcpRemoveItem:m=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).filter(h=>h.id!==m)},onMcpCollapsedChange:(m,h)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(v=>v.id===m?{...v,collapsed:h}:v)},onMcpKeyChange:(m,h)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(v=>v.id===m?{...v,key:h}:v)},onMcpEditModeChange:(m,h)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(v=>v.id===m?{...v,editMode:h}:v)},onMcpConnectionTypeChange:(m,h)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(v=>v.id===m?{...v,connectionType:h}:v)},onMcpFormPatch:(m,h)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(v=>v.id===m?{...v,draft:{...v.draft??{},...h??{}}}:v)},onMcpRawChange:(m,h)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(v=>v.id===m?{...v,rawJson:h,rawError:null}:v)},onCreateClose:()=>{e.digitalEmployeeCreateBusy||(e.digitalEmployeeCreateModalOpen=!1,e.digitalEmployeeCreateError=null,e.digitalEmployeeAdvancedOpen=!1,e.digitalEmployeeCreateMcpMode="builder",e.digitalEmployeeCreateMcpJson="",e.digitalEmployeeCreateMcpItems=[],e.digitalEmployeeSkillUploadName="",e.digitalEmployeeSkillUploadFiles=[],e.digitalEmployeeSkillUploadError=null)},onCreateNameChange:m=>e.digitalEmployeeCreateName=m,onCreateDescriptionChange:m=>e.digitalEmployeeCreateDescription=m,onCreatePromptChange:m=>e.digitalEmployeeCreatePrompt=m,onToggleAdvanced:()=>e.digitalEmployeeAdvancedOpen=!e.digitalEmployeeAdvancedOpen,onSkillUploadNameChange:m=>e.digitalEmployeeSkillUploadName=m,onSkillUploadFilesChange:m=>e.digitalEmployeeSkillUploadFiles=m??[],onCreateSubmit:async()=>{if(e.digitalEmployeeCreateMcpMode==="builder"){const m=e.digitalEmployeeCreateMcpItems??[],h={},v=new Set;let C=null;const A=m.map(E=>({...E,rawError:null}));for(let E=0;E<A.length;E++){const T=A[E],P=T.key?.trim()??"";if(P){if(v.has(P)){C??=`MCP key 重复：${P}`;continue}if(v.add(P),T.editMode==="raw"){const _=T.rawJson?.trim()??"";if(!_)continue;try{const U=JSON.parse(_);if(!U||typeof U!="object"||Array.isArray(U)){T.rawError="JSON 必须是对象",C??=`MCP ${P} 的 JSON 无效`;continue}h[P]=U}catch{T.rawError="JSON 格式无效",C??=`MCP ${P} 的 JSON 无效`;continue}}else{const _=T.draft??{};if(T.connectionType==="stdio"&&!_.command?.trim()){C??=`MCP ${P} 缺少 command`;continue}if(T.connectionType==="url"&&!_.url?.trim()){C??=`MCP ${P} 缺少 url`;continue}if(T.connectionType==="service"&&(!_.service?.trim()||!_.serviceUrl?.trim())){C??=`MCP ${P} 缺少 service/serviceUrl`;continue}h[P]=_}}}if(e.digitalEmployeeCreateMcpItems=A,e.digitalEmployeeCreateMcpJson=Object.keys(h).length>0?JSON.stringify(h,null,2):"",C){e.digitalEmployeeCreateError=C;return}}await Ai(e),e.digitalEmployeeCreateError||(e.digitalEmployeeCreateModalOpen=!1,e.digitalEmployeeAdvancedOpen=!1,d())}})})():y}

        ${e.tab==="skillLibrary"?(()=>{const d=async()=>{e.skillLibraryLoading=!0,e.skillLibraryError=null;try{const m=e.skillLibraryCategory&&e.skillLibraryCategory!=="__all__"?e.skillLibraryCategory:void 0,h=e.skillLibraryStatus&&e.skillLibraryStatus!=="__all__"?e.skillLibraryStatus:void 0;e.skillLibraryItems=await Nv({q:e.skillLibraryQuery,category:m,status:h},{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()})}catch(m){e.skillLibraryError=m?.message?String(m.message):String(m)}finally{e.skillLibraryLoading=!1}};return!e.skillLibraryLoadedOnce&&!e.skillLibraryLoading&&(e.skillLibraryLoadedOnce=!0,queueMicrotask(()=>{d()})),Uy({loading:e.skillLibraryLoading,error:e.skillLibraryError,installSuccess:e.skillLibraryInstallSuccess,query:e.skillLibraryQuery,selectedCategory:e.skillLibraryCategory,selectedStatus:e.skillLibraryStatus,items:e.skillLibraryItems,selectedFolder:e.skillLibrarySelectedFolder,selectedDetail:e.skillLibrarySelectedDetail,installedKeys:new Set([...(e.skillsReport?.skills??[]).map(m=>m.skillKey),...(e.skillLibraryItems??[]).filter(m=>m.installed).map(m=>m.folder)]),disabledKeys:new Set((e.skillsReport?.skills??[]).filter(m=>m.disabled).map(m=>m.skillKey)),installingFolder:e.skillLibraryInstallingFolder,onInstall:async(m,h)=>{e.skillLibraryInstallingFolder=m,e.skillLibraryError=null,e.skillLibraryInstallSuccess=null;try{const v=await ia({kind:"skill",id:m,type:h,category:h},{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()});await An(e),await d();const C=v?.id??m,A=(v?.type??v?.category??h??"").trim();e.skillLibraryInstallSuccess=A?`安装成功：${C}（${A}）`:`安装成功：${C}`,setTimeout(()=>{e.skillLibraryInstallSuccess=null},5e3)}catch(v){e.skillLibraryError=v?.message??String(v)}finally{e.skillLibraryInstallingFolder=null}},onDelete:async m=>{e.skillLibraryError=null,await _p(e,m),e.skillsError?e.skillLibraryError=e.skillsError:(await d(),e.skillLibrarySelectedFolder=null,e.skillLibrarySelectedDetail=null)},onToggleEnabled:async(m,h)=>{e.skillLibraryError=null,await Tp(e,m,h),e.skillsError?e.skillLibraryError=e.skillsError:await d()},onQueryChange:m=>e.skillLibraryQuery=m,onCategoryChange:m=>e.skillLibraryCategory=m,onStatusChange:m=>e.skillLibraryStatus=m,onRefresh:async()=>{await d()},onSelect:async m=>{if(e.skillLibrarySelectedFolder=m||null,e.skillLibrarySelectedDetail=null,e.skillLibraryError=null,!!m)try{e.skillLibrarySelectedDetail=await Uv(m,{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()})}catch(h){e.skillLibraryError=h?.message?String(h.message):String(h)}},onDetailClose:()=>{e.skillLibrarySelectedFolder=null,e.skillLibrarySelectedDetail=null},addModalOpen:e.skillsAddModalOpen,uploadName:e.skillsUploadName,uploadFiles:e.skillsUploadFiles,uploadError:e.skillsUploadError,uploadTemplate:e.skillsUploadTemplate,uploadBusy:e.skillsUploadBusy,onAddClick:()=>{e.skillsAddModalOpen=!0,e.skillsUploadName="",e.skillsUploadFiles=[],e.skillsUploadError=null,e.skillsUploadTemplate=null},onAddClose:()=>{e.skillsAddModalOpen=!1,e.skillsUploadName="",e.skillsUploadFiles=[],e.skillsUploadError=null,e.skillsUploadTemplate=null},onUploadNameChange:m=>e.skillsUploadName=m,onUploadFilesChange:m=>e.skillsUploadFiles=m??[],onUploadSubmit:async()=>{const m=e.skillsUploadFiles??[],h=e.skillsUploadName?.trim()??"";if(m.length===0)return;e.skillsUploadBusy=!0,e.skillsUploadError=null,e.skillLibraryError=null;const v=e.settings?.gatewayUrl?.trim();if(!v){e.skillsUploadError="Gateway URL 未配置",e.skillsUploadBusy=!1;return}const C={gatewayUrl:v,token:e.settings?.token?.trim()};try{for(let A=0;A<m.length;A++){const E=m[A],T=m.length>1?E.name.replace(/\.(zip|md)$/i,"").replace(/[^a-zA-Z0-9_-]/g,"-"):h||E.name.replace(/\.(zip|md)$/i,"").replace(/[^a-zA-Z0-9_-]/g,"-");if(!T){e.skillsUploadError="技能名称不能为空";break}const P=await Pp(C,T,E);if(!P.ok){e.skillsUploadError=P.error??"上传失败",e.skillsUploadTemplate=P.template??null;break}}e.skillsUploadError||(e.skillsAddModalOpen=!1,e.skillsUploadName="",e.skillsUploadFiles=[],e.skillsUploadTemplate=null,await An(e))}finally{e.skillsUploadBusy=!1}}})})():y}

        ${e.tab==="toolLibrary"?(()=>{const d=async()=>{e.toolLibraryLoading=!0,e.toolLibraryError=null;try{e.toolLibraryItems=await Dv({q:e.toolLibraryQuery},{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()});const v=e.toolLibraryItems,C=new Set,A=new Map;for(const E of v)E.installed&&E.serverKey&&(C.add(String(E.id)),A.set(E.id,E.serverKey));e.toolLibraryInstalledRemoteIds=C,e.toolLibraryInstalledMcpMap=A}catch(v){e.toolLibraryError=v?.message?String(v.message):String(v)}finally{e.toolLibraryLoading=!1}};!e.toolLibraryLoadedOnce&&!e.toolLibraryLoading&&(e.toolLibraryLoadedOnce=!0,queueMicrotask(()=>{d()}));const m=e.configSnapshot?.config?.mcp?.servers??{},h=new Set;for(const[v,C]of Object.entries(m))C?.enabled===!1&&h.add(v);return jy({loading:e.toolLibraryLoading,error:e.toolLibraryError,query:e.toolLibraryQuery,category:e.toolLibraryCategory,onCategoryChange:v=>e.toolLibraryCategory=v,items:e.toolLibraryItems,addModalOpen:e.mcpAddModalOpen,addName:e.mcpAddName,addDraft:e.mcpAddDraft??{},addConnectionType:e.mcpAddConnectionType,addEditMode:e.mcpAddEditMode,addRawJson:e.mcpAddRawJson,addRawError:e.mcpAddRawError,saving:e.configSaving,onAddServer:()=>Yb(e),onAddClose:()=>Zb(e),onAddNameChange:v=>Xb(e,v),onAddFormPatch:v=>ew(e,v),onAddRawChange:v=>nw(e,v),onAddConnectionTypeChange:v=>tw(e,v),onAddEditModeChange:v=>sw(e,v),onAddSubmit:async()=>{await aw(e),await J(e)},selectedId:e.toolLibrarySelectedId,selectedDetail:e.toolLibrarySelectedDetail,installedRemoteIds:e.toolLibraryInstalledRemoteIds,disabledMcpKeys:h,installingId:e.toolLibraryInstallingId,installedMcpMap:e.toolLibraryInstalledMcpMap,onInstall:async(v,C)=>{e.toolLibraryInstallingId=v,e.toolLibraryError=null;try{const A=await ia({kind:"mcp",id:String(v),type:C,category:C},{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()});A?.id&&(e.toolLibraryInstalledRemoteIds=new Set([...e.toolLibraryInstalledRemoteIds,String(v)]),e.toolLibraryInstalledMcpMap=new Map(e.toolLibraryInstalledMcpMap).set(v,A.id)),await J(e),await d()}catch(A){e.toolLibraryError=A?.message??String(A)}finally{e.toolLibraryInstallingId=null}},onDelete:async v=>{e.toolLibraryError=null,gw(e,v);let C=null;for(const[A,E]of e.toolLibraryInstalledMcpMap)if(E===v){C=A;break}if(C!=null){e.toolLibraryInstalledRemoteIds=new Set([...e.toolLibraryInstalledRemoteIds].filter(E=>E!==String(C)));const A=new Map(e.toolLibraryInstalledMcpMap);A.delete(C),e.toolLibraryInstalledMcpMap=A}await d(),e.toolLibrarySelectedId=null,e.toolLibrarySelectedDetail=null},onToggleEnabled:async(v,C)=>{e.toolLibraryError=null,rw(e,v,C),await d()},onEdit:v=>{!e.configForm&&e.configSnapshot?.config&&(e.configForm=Z(e.configSnapshot.config)),iw(e,v),e.toolLibraryMcpEditModalOpen=!0,e.toolLibraryMcpEditServerKey=v},onQueryChange:v=>e.toolLibraryQuery=v,onRefresh:async()=>{await d()},onSelect:async v=>{e.toolLibrarySelectedId=v,e.toolLibrarySelectedDetail=null,e.toolLibraryError=null;try{e.toolLibrarySelectedDetail=await Rv(v,{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()})}catch(C){e.toolLibraryError=C?.message?String(C.message):String(C)}},onDetailClose:()=>{e.toolLibrarySelectedId=null,e.toolLibrarySelectedDetail=null}})})():y}

        ${e.tab==="tutorials"?(()=>{const d=async()=>{e.tutorialsLoading=!0,e.tutorialsError=null;try{e.tutorialCategories=await Ov({gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()}),!e.tutorialsSelectedCategoryId&&e.tutorialCategories.length?e.tutorialsSelectedCategoryId=e.tutorialCategories[0]?.id??null:e.tutorialsSelectedCategoryId&&(e.tutorialCategories.some(h=>h.id===e.tutorialsSelectedCategoryId)||(e.tutorialsSelectedCategoryId=e.tutorialCategories[0]?.id??null))}catch(m){e.tutorialsError=m?.message?String(m.message):String(m)}finally{e.tutorialsLoading=!1}};return!e.tutorialsLoadedOnce&&!e.tutorialsLoading&&(e.tutorialsLoadedOnce=!0,queueMicrotask(()=>{d()})),Yy({loading:e.tutorialsLoading,error:e.tutorialsError,categories:e.tutorialCategories,query:e.tutorialsQuery,selectedCategoryId:e.tutorialsSelectedCategoryId,playingLink:e.tutorialsPlayingLink,onQueryChange:m=>e.tutorialsQuery=m,onSelectCategory:m=>e.tutorialsSelectedCategoryId=m,onLessonClick:m=>{Hc(m)?e.tutorialsPlayingLink=m:window.open(m,"_blank","noopener,noreferrer")},onPlayingClose:()=>e.tutorialsPlayingLink=null,onRefresh:async()=>{await d()}})})():y}

        ${e.tab==="aboutUs"?eb({basePath:g,uninstallModalOpen:e.aboutUninstallModalOpen,uninstallMode:e.aboutUninstallMode,uninstallLoading:e.aboutUninstallLoading,uninstallError:e.aboutUninstallError,onOpenUninstallModal:()=>{e.aboutUninstallModalOpen=!0,e.aboutUninstallError=null,e.aboutUninstallMode="program"},onCloseUninstallModal:()=>{e.aboutUninstallModalOpen=!1,e.aboutUninstallError=null},onUninstallModeChange:d=>{e.aboutUninstallMode=d},onConfirmUninstall:async()=>{const d=e.settings?.gatewayUrl?.trim();if(!d){e.aboutUninstallError="请先在 Overview 中配置 Gateway URL。";return}e.aboutUninstallLoading=!0,e.aboutUninstallError=null;try{const m=e.settings?.token?.trim()??"",h=await Zy({gatewayHost:d,token:m,mode:e.aboutUninstallMode});if(!h.ok){e.aboutUninstallError=[h.message,h.detail].filter(Boolean).join(" — ");return}e.aboutUninstallModalOpen=!1,window.alert(h.message??"已安排卸载，桌面应用将自动退出。");try{window.close()}catch{}}catch(m){e.aboutUninstallError=m instanceof Error?m.message:String(m)}finally{e.aboutUninstallLoading=!1}}}):y}

        ${e.tab==="llmTrace"?ob({loading:e.llmTraceLoading,result:e.llmTraceResult,error:e.llmTraceError,mode:e.llmTraceMode,search:e.llmTraceSearch,enabled:e.llmTraceEnabled,saving:e.llmTraceSaving,viewContent:e.llmTraceViewContent,viewingSessionId:e.llmTraceViewingSessionId,viewLoading:e.llmTraceViewLoading,onRefresh:()=>pp(e),onModeChange:d=>gp(e,d),onSearchChange:d=>mp(e,d),onToggleEnabled:()=>fp(e),onView:d=>hp(e,d),onBack:()=>vp(e),onDownload:d=>yp(e,d)}):y}

        ${e.tab==="sandbox"?cb({security:e.securityForm??ka(e)??{},saving:e.configSaving,pendingApprovalsCount:(e.approvalsResult?.pending??e.approvalsResult?.entries??[]).filter(d=>d.status==="pending"&&!d.expired).length,onPresetApply:d=>kp(e,d),onPatch:(d,m)=>{e.securityForm||(e.securityForm=co(e)??{}),Sp(e,e.securityForm,d,m)},onSave:()=>Cp(e,e.securityForm??ka(e)??{}),pathForTab:d=>In(d,e.basePath),approvalsLoading:e.approvalsLoading,approvalsResult:e.approvalsResult,approvalsError:e.approvalsError,onApprovalsRefresh:()=>_n(e),onApprove:d=>Ap(e,d,"ui"),onDeny:(d,m)=>Mp(e,d,"ui",m),onWhitelistSession:d=>Ep(e,d,"ui")}):y}

        ${e.tab==="nodes"?Yv({loading:e.nodesLoading,nodes:e.nodes,devicesLoading:e.devicesLoading,devicesError:e.devicesError,devicesList:e.devicesList,configForm:e.configForm??e.configSnapshot?.config,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configFormDirty,configFormMode:e.configFormMode,execApprovalsLoading:e.execApprovalsLoading,execApprovalsSaving:e.execApprovalsSaving,execApprovalsDirty:e.execApprovalsDirty,execApprovalsSnapshot:e.execApprovalsSnapshot,execApprovalsForm:e.execApprovalsForm,execApprovalsSelectedAgent:e.execApprovalsSelectedAgent,execApprovalsTarget:e.execApprovalsTarget,execApprovalsTargetNodeId:e.execApprovalsTargetNodeId,onRefresh:()=>ws(e),onDevicesRefresh:()=>it(e),onDeviceApprove:d=>Vu(e,d),onDeviceReject:d=>Gu(e,d),onDeviceRotate:(d,m,h)=>Ju(e,{deviceId:d,role:m,scopes:h}),onDeviceRevoke:(d,m)=>Yu(e,{deviceId:d,role:m}),onLoadConfig:()=>J(e),onLoadExecApprovals:()=>{const d=e.execApprovalsTarget==="node"&&e.execApprovalsTargetNodeId?{kind:"node",nodeId:e.execApprovalsTargetNodeId}:{kind:"gateway"};return lo(e,d)},onBindDefault:d=>{d?Ve(e,["tools","exec","node"],d):ci(e,["tools","exec","node"])},onBindAgent:(d,m)=>{const h=["agents","list",d,"tools","exec","node"];m?Ve(e,h,m):ci(e,h)},onSaveBindings:()=>fa(e),onExecApprovalsTargetChange:(d,m)=>{e.execApprovalsTarget=d,e.execApprovalsTargetNodeId=m,e.execApprovalsSnapshot=null,e.execApprovalsForm=null,e.execApprovalsDirty=!1,e.execApprovalsSelectedAgent=null},onExecApprovalsSelectAgent:d=>{e.execApprovalsSelectedAgent=d},onExecApprovalsPatch:(d,m)=>np(e,d,m),onExecApprovalsRemove:d=>sp(e,d),onSaveExecApprovals:()=>{const d=e.execApprovalsTarget==="node"&&e.execApprovalsTargetNodeId?{kind:"node",nodeId:e.execApprovalsTargetNodeId}:{kind:"gateway"};return tp(e,d)}}):y}

        ${o?Gh({sessionKey:e.sessionKey,onSessionKeyChange:d=>{e.sessionKey=d,e.chatMessage="",e.chatAttachments=[],e.chatModelRef=null,e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.chatQueue=[],e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:d,lastActiveSessionKey:d}),e.loadAssistantIdentity(),et(e),yt(e)},thinkingLevel:e.chatThinkingLevel,showThinking:c,modelRef:e.chatModelRef,defaultModelRef:pa(p),modelOptions:(()=>{const d=p,m=pa(p),h=new Set,v=[],C=d?.agents?.defaults?.models;if(C&&typeof C=="object")for(const[E,T]of Object.entries(C)){const P=E.trim();if(!P||h.has(P))continue;h.add(P);const _=T&&typeof T=="object"&&"alias"in T&&typeof T.alias=="string"?T.alias.trim():"",U=_&&_!==P?`${_} (${P})`:P;v.push({value:P,label:U})}const A=d?.models?.providers;if(A&&typeof A=="object")for(const[E,T]of Object.entries(A)){const P=T&&typeof T=="object"?T.models:void 0;if(Array.isArray(P))for(const _ of P){const U=_?.id?.trim();if(!U)continue;const W=`${E}/${U}`;if(h.has(W))continue;h.add(W);const R=_.name&&_.name!==U?`${_.name} (${W})`:W;v.push({value:W,label:R})}}return m&&!h.has(m)&&v.unshift({value:m,label:m}),v.length===0&&v.push({value:m??"",label:m?`默认 (${m})`:"默认"}),v})(),onModelRefChange:d=>e.chatModelRef=d,loading:e.chatLoading,sending:e.chatSending,compactionStatus:e.compactionStatus,assistantAvatarUrl:f,messages:e.chatMessages,toolMessages:e.chatToolMessages,stream:e.chatStream,streamStartedAt:e.chatStreamStartedAt,draft:e.chatMessage,queue:e.chatQueue,connected:e.connected,canSend:e.connected,disabledReason:a,error:e.lastError,sessions:e.sessionsResult,focusMode:l,onRefresh:()=>(e.resetToolStream(),Promise.all([et(e),yt(e)])),onToggleFocusMode:()=>{e.onboarding||e.applySettings({...e.settings,chatFocusMode:!e.settings.chatFocusMode})},onChatScroll:d=>e.handleChatScroll(d),onDraftChange:d=>e.chatMessage=d,attachments:e.chatAttachments,onAttachmentsChange:d=>e.chatAttachments=d,onSend:()=>e.handleSendChat(),canAbort:!!e.chatRunId,onAbort:()=>{e.handleAbortChat()},onQueueRemove:d=>e.removeQueuedMessage(d),onNewSession:()=>e.handleSendChat("/new",{restoreDraft:!0}),showNewMessages:e.chatNewMessagesBelow,onScrollToBottom:()=>e.scrollToBottom(),sidebarOpen:e.sidebarOpen,sidebarContent:e.sidebarContent,sidebarError:e.sidebarError,splitRatio:e.splitRatio,onOpenSidebar:d=>e.handleOpenSidebar(d),onCloseSidebar:()=>e.handleCloseSidebar(),onSplitRatioChange:d=>e.handleSplitRatioChange(d),assistantName:e.assistantName,assistantAvatar:e.assistantAvatar}):y}

        ${e.tab==="digitalEmployee"?Jg({loading:e.digitalEmployeesLoading,employees:e.digitalEmployees,error:e.digitalEmployeesError,filter:e.digitalEmployeesFilter,viewMode:e.digitalEmployeesViewMode,onRefresh:()=>Ge(e),createModalOpen:e.digitalEmployeeCreateModalOpen,createName:e.digitalEmployeeCreateName,createDescription:e.digitalEmployeeCreateDescription,createPrompt:e.digitalEmployeeCreatePrompt,createError:e.digitalEmployeeCreateError,createBusy:e.digitalEmployeeCreateBusy,advancedOpen:e.digitalEmployeeAdvancedOpen,createMcpMode:e.digitalEmployeeCreateMcpMode,mcpJson:e.digitalEmployeeCreateMcpJson,mcpItems:e.digitalEmployeeCreateMcpItems??[],onFilterChange:d=>{e.digitalEmployeesFilter=d},onViewModeChange:d=>{e.digitalEmployeesViewMode=d},onCopy:async d=>{await dp(e,d)},onMcpJsonChange:d=>{e.digitalEmployeeCreateMcpJson=d},onMcpModeChange:d=>{e.digitalEmployeeCreateMcpMode=d},onMcpAddItem:()=>{const d=e.digitalEmployeeCreateMcpItems??[];e.digitalEmployeeCreateMcpItems=[...d,{id:Le(),key:"",editMode:"form",connectionType:"stdio",draft:{command:"npx",args:[],env:{}},rawJson:"{}",rawError:null,collapsed:!1}]},onMcpRemoveItem:d=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).filter(m=>m.id!==d)},onMcpCollapsedChange:(d,m)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(h=>h.id===d?{...h,collapsed:m}:h)},onMcpKeyChange:(d,m)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(h=>h.id===d?{...h,key:m}:h)},onMcpEditModeChange:(d,m)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(h=>h.id===d?{...h,editMode:m}:h)},onMcpConnectionTypeChange:(d,m)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(h=>h.id===d?{...h,connectionType:m}:h)},onMcpFormPatch:(d,m)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(h=>h.id===d?{...h,draft:{...h.draft??{},...m??{}}}:h)},onMcpRawChange:(d,m)=>{e.digitalEmployeeCreateMcpItems=(e.digitalEmployeeCreateMcpItems??[]).map(h=>h.id===d?{...h,rawJson:m,rawError:null}:h)},skillUploadName:e.digitalEmployeeSkillUploadName,skillUploadFiles:e.digitalEmployeeSkillUploadFiles??[],skillUploadError:e.digitalEmployeeSkillUploadError,onCreateOpen:()=>{e.digitalEmployeeCreateModalOpen=!0,e.digitalEmployeeAdvancedOpen=!1,e.digitalEmployeeCreateMcpMode="builder",e.digitalEmployeeCreateMcpJson="",e.digitalEmployeeCreateMcpItems=[],e.digitalEmployeeSkillUploadName="",e.digitalEmployeeSkillUploadFiles=[],e.digitalEmployeeSkillUploadError=null},onCreateClose:()=>{e.digitalEmployeeCreateBusy||(e.digitalEmployeeCreateModalOpen=!1,e.digitalEmployeeCreateError=null,e.digitalEmployeeAdvancedOpen=!1,e.digitalEmployeeCreateMcpMode="builder",e.digitalEmployeeCreateMcpJson="",e.digitalEmployeeCreateMcpItems=[],e.digitalEmployeeSkillUploadName="",e.digitalEmployeeSkillUploadFiles=[],e.digitalEmployeeSkillUploadError=null)},onCreateNameChange:d=>{e.digitalEmployeeCreateName=d},onCreateDescriptionChange:d=>{e.digitalEmployeeCreateDescription=d},onCreatePromptChange:d=>{e.digitalEmployeeCreatePrompt=d},onCreateSubmit:async()=>{if(e.digitalEmployeeCreateMcpMode==="builder"){const d=e.digitalEmployeeCreateMcpItems??[],m={},h=new Set;let v=null;const C=d.map(A=>({...A,rawError:null}));for(let A=0;A<C.length;A++){const E=C[A],T=E.key?.trim()??"";if(T){if(h.has(T)){v??=`MCP key 重复：${T}`;continue}if(h.add(T),E.editMode==="raw"){const P=E.rawJson?.trim()??"";if(!P)continue;try{const _=JSON.parse(P);if(!_||typeof _!="object"||Array.isArray(_)){E.rawError="JSON 必须是对象",v??=`MCP ${T} 的 JSON 无效`;continue}m[T]=_}catch{E.rawError="JSON 格式无效",v??=`MCP ${T} 的 JSON 无效`;continue}}else{const P=E.draft??{};if(E.connectionType==="stdio"&&!P.command?.trim()){v??=`MCP ${T} 缺少 command`;continue}if(E.connectionType==="url"&&!P.url?.trim()){v??=`MCP ${T} 缺少 url`;continue}if(E.connectionType==="service"&&(!P.service?.trim()||!P.serviceUrl?.trim())){v??=`MCP ${T} 缺少 service/serviceUrl`;continue}m[T]=P}}}if(e.digitalEmployeeCreateMcpItems=C,e.digitalEmployeeCreateMcpJson=Object.keys(m).length>0?JSON.stringify(m,null,2):"",v){e.digitalEmployeeCreateError=v;return}}await Ai(e),e.digitalEmployeeCreateError||(e.digitalEmployeeCreateModalOpen=!1,e.digitalEmployeeAdvancedOpen=!1)},onToggleAdvanced:()=>{e.digitalEmployeeAdvancedOpen=!e.digitalEmployeeAdvancedOpen},onSkillUploadNameChange:d=>{e.digitalEmployeeSkillUploadName=d},onSkillUploadFilesChange:d=>{e.digitalEmployeeSkillUploadFiles=d??[]},onOpenEmployee:async d=>{const m=d.trim()||"default";await Re(e,{activeMinutes:10080,limit:200,includeLastMessage:!0});const h=e.sessionsResult?.sessions??[],v=[`agent:main:employee:${m}:`,`agent:main:employee-${m}`,`employee:${m}:`,`employee-${m}`],C=h.find(E=>v.some(T=>E.key.includes(T)||E.key===T)),A=C?C.key:`agent:main:employee:${m}:run:${Le()}`;e.sessionKey=A,e.chatMessage="",e.chatAttachments=[],e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.chatQueue=[],e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:A,lastActiveSessionKey:A}),e.loadAssistantIdentity(),et(e),yt(e),e.setTab("message"),C||e.handleSendChat("当前已开启数字员工会话。请以你配置的人设（如有）向用户打招呼，保持你的语气、风格和情绪。用 1～3 句话问候并询问用户想做什么。",{refreshSessions:!0})},onToggleEnabled:(d,m)=>rp(e,d,m),onDelete:d=>Mi(e,d),onEdit:async d=>{const m=e.digitalEmployees.find(C=>C.id===d),h=await $a(e,d);if(!h){e.digitalEmployeesError="无法加载员工详情";return}const v=C=>{const A=[];if(!C||typeof C!="object")return A;for(const[E,T]of Object.entries(C)){const P=String(E??"").trim();if(!P)continue;const _=T,U=_&&typeof _=="object"&&!Array.isArray(_),W=U&&typeof _.url=="string"&&_.url.trim()?"url":U&&typeof _.service=="string"&&_.service.trim()?"service":"stdio",R=U&&(W==="stdio"&&typeof _.command=="string"&&_.command.trim()||W==="url"&&typeof _.url=="string"&&_.url.trim()||W==="service"&&typeof _.service=="string"&&_.service.trim()&&typeof _.serviceUrl=="string"&&_.serviceUrl.trim());A.push({id:Le(),key:P,editMode:R?"form":"raw",connectionType:W,draft:R?_:{command:"npx",args:[],env:{}},rawJson:U?JSON.stringify(_,null,2):"{}",rawError:null,collapsed:!0})}return A};e.digitalEmployeeEditModalOpen=!0,e.digitalEmployeeEditId=h.id,e.digitalEmployeeEditName=h.name||h.id,e.digitalEmployeeEditDescription=h.description??"",e.digitalEmployeeEditPrompt=h.prompt??"",e.digitalEmployeeEditMcpJson=h.mcpServers&&Object.keys(h.mcpServers).length>0?JSON.stringify(h.mcpServers,null,2):"",e.digitalEmployeeEditMcpMode="builder",e.digitalEmployeeEditMcpItems=v(h.mcpServers),e.digitalEmployeeEditSkillNames=m?.skillNames??m?.skillIds??h.skillIds??[],e.digitalEmployeeEditSkillFilesToUpload=[],e.digitalEmployeeEditSkillsToDelete=[],e.digitalEmployeeEditEnabled=h.enabled!==!1,e.digitalEmployeeEditError=null},editModalOpen:e.digitalEmployeeEditModalOpen,editId:e.digitalEmployeeEditId,editName:e.digitalEmployeeEditName,editDescription:e.digitalEmployeeEditDescription,editPrompt:e.digitalEmployeeEditPrompt,editMcpJson:e.digitalEmployeeEditMcpJson,editMcpMode:e.digitalEmployeeEditMcpMode,editMcpItems:e.digitalEmployeeEditMcpItems??[],onEditMcpModeChange:d=>{e.digitalEmployeeEditMcpMode=d},onEditMcpAddItem:()=>{const d=e.digitalEmployeeEditMcpItems??[];e.digitalEmployeeEditMcpItems=[...d,{id:Le(),key:"",editMode:"form",connectionType:"stdio",draft:{command:"npx",args:[],env:{}},rawJson:"{}",rawError:null,collapsed:!1}]},onEditMcpRemoveItem:d=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).filter(m=>m.id!==d)},onEditMcpCollapsedChange:(d,m)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(h=>h.id===d?{...h,collapsed:m}:h)},onEditMcpKeyChange:(d,m)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(h=>h.id===d?{...h,key:m}:h)},onEditMcpEditModeChange:(d,m)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(h=>h.id===d?{...h,editMode:m}:h)},onEditMcpConnectionTypeChange:(d,m)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(h=>h.id===d?{...h,connectionType:m}:h)},onEditMcpFormPatch:(d,m)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(h=>h.id===d?{...h,draft:{...h.draft??{},...m??{}}}:h)},onEditMcpRawChange:(d,m)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(h=>h.id===d?{...h,rawJson:m,rawError:null}:h)},editSkillNames:e.digitalEmployeeEditSkillNames??[],editSkillFilesToUpload:e.digitalEmployeeEditSkillFilesToUpload??[],editSkillsToDelete:e.digitalEmployeeEditSkillsToDelete??[],editError:e.digitalEmployeeEditError,editBusy:e.digitalEmployeeEditBusy,onEditClose:()=>{e.digitalEmployeeEditBusy||(e.digitalEmployeeEditModalOpen=!1,e.digitalEmployeeEditError=null,e.digitalEmployeeEditMcpMode="raw",e.digitalEmployeeEditMcpItems=[])},onEditDescriptionChange:d=>{e.digitalEmployeeEditDescription=d},onEditPromptChange:d=>{e.digitalEmployeeEditPrompt=d},onEditMcpJsonChange:d=>{e.digitalEmployeeEditMcpJson=d},onEditSkillFilesChange:d=>{e.digitalEmployeeEditSkillFilesToUpload=d??[]},onEditSkillDelete:d=>{const m=e.digitalEmployeeEditSkillsToDelete??[];m.includes(d)||(e.digitalEmployeeEditSkillsToDelete=[...m,d])},onEditSkillUndoDelete:d=>{e.digitalEmployeeEditSkillsToDelete=(e.digitalEmployeeEditSkillsToDelete??[]).filter(m=>m!==d)},onEditSubmit:async()=>{if(e.digitalEmployeeEditMcpMode==="builder"){const d=e.digitalEmployeeEditMcpItems??[],m={},h=new Set;let v=null;const C=d.map(A=>({...A,rawError:null}));for(let A=0;A<C.length;A++){const E=C[A],T=E.key?.trim()??"";if(T){if(h.has(T)){v??=`MCP key 重复：${T}`;continue}if(h.add(T),E.editMode==="raw"){const P=E.rawJson?.trim()??"";if(!P)continue;try{const _=JSON.parse(P);if(!_||typeof _!="object"||Array.isArray(_)){E.rawError="JSON 必须是对象",v??=`MCP ${T} 的 JSON 无效`;continue}m[T]=_}catch{E.rawError="JSON 格式无效",v??=`MCP ${T} 的 JSON 无效`;continue}}else{const P=E.draft??{};if(E.connectionType==="stdio"&&!P.command?.trim()){v??=`MCP ${T} 缺少 command`;continue}if(E.connectionType==="url"&&!P.url?.trim()){v??=`MCP ${T} 缺少 url`;continue}if(E.connectionType==="service"&&(!P.service?.trim()||!P.serviceUrl?.trim())){v??=`MCP ${T} 缺少 service/serviceUrl`;continue}m[T]=P}}}if(e.digitalEmployeeEditMcpItems=C,e.digitalEmployeeEditMcpJson=Object.keys(m).length>0?JSON.stringify(m,null,2):"",v){e.digitalEmployeeEditError=v;return}}await Ei(e),e.digitalEmployeeEditError||(e.digitalEmployeeEditModalOpen=!1)}}):y}

        ${e.tab==="envVars"?wv({vars:e.configForm?.env?.vars??e.configSnapshot?.config?.env?.vars??{},dirty:e.configFormDirty,loading:e.configLoading,saving:e.configSaving,connected:e.connected,onVarsChange:d=>{Ve(e,["env","vars"],d)},onSave:async()=>{const m=e.configForm?.env?.vars??{},h={};for(const[A,E]of Object.entries(m))A.trim()&&(h[A.trim()]=E);Ve(e,["env","vars"],h);const C={...e.configForm?.env??e.configSnapshot?.config?.env??{},vars:h};await Ae(e,{env:C})},onReload:()=>J(e)}):y}

        ${e.tab==="config"?yv({raw:e.configRaw,originalRaw:e.configRawOriginal,valid:e.configValid,issues:e.configIssues,loading:e.configLoading,saving:e.configSaving,applying:e.configApplying,updating:e.updateRunning,connected:e.connected,schema:e.configSchema,schemaLoading:e.configSchemaLoading,uiHints:e.configUiHints,formMode:e.configFormMode,formValue:e.configForm,originalValue:e.configFormOriginal,searchQuery:e.configSearchQuery,activeSection:e.configActiveSection,activeSubsection:e.configActiveSubsection,onRawChange:d=>{e.configRaw=d},onFormModeChange:d=>e.configFormMode=d,onFormPatch:(d,m)=>Ve(e,d,m),onSearchChange:d=>e.configSearchQuery=d,onSectionChange:d=>{e.configActiveSection=d,e.configActiveSubsection=null},onSubsectionChange:d=>e.configActiveSubsection=d,onReload:()=>J(e),onSave:()=>fa(e),onApply:()=>Td(e),onUpdate:()=>Pd(e)}):y}

        ${e.tab==="models"?pb({providers:e.configForm?.models?.providers??{},modelEnv:e.configForm?.env?.modelEnv??{},defaultModelRef:pa(e.configForm),loading:e.configLoading,saving:e.configSaving,selectedProvider:e.modelsSelectedProvider,viewMode:e.modelsViewMode,formDirty:e.modelsFormDirty,addProviderModalOpen:e.modelsAddProviderModalOpen,addProviderForm:e.modelsAddProviderForm,addModelModalOpen:e.modelsAddModelModalOpen,addModelForm:e.modelsAddModelForm,useModelModalOpen:e.modelsUseModelModalOpen,useModelModalProvider:e.modelsUseModelModalProvider,saveError:e.modelsSaveError,onRefresh:()=>mw(e),onAddProvider:()=>fw(e),onAddProviderModalClose:()=>hw(e),onAddProviderFormChange:d=>vw(e,d),onAddProviderSubmit:()=>yw(e),onSelect:d=>bw(e,d),onViewModeChange:d=>e.modelsViewMode=d,onPatch:(d,m)=>ww(e,d,m),onAddModel:d=>xw(e),onAddModelModalClose:()=>$w(e),onAddModelFormChange:d=>kw(e,d),onAddModelSubmit:d=>Sw(e,d),onRemoveModel:(d,m)=>Aw(e,d,m),onPatchModelEnv:(d,m,h)=>Cw(e,d,m,h),onSave:()=>Tw(e),onCancel:()=>Pw(e),onUseModelClick:d=>_w(e,d),onUseModelModalClose:()=>Lw(e),onUseModel:(d,m)=>Iw(e,d,m),onCancelUse:d=>Dw(e,d)}):y}

        ${e.tab==="debug"?Lv({loading:e.debugLoading,status:e.debugStatus,health:e.debugHealth,models:e.debugModels,heartbeat:e.debugHeartbeat,eventLog:e.eventLog,callMethod:e.debugCallMethod,callParams:e.debugCallParams,callResult:e.debugCallResult,callError:e.debugCallError,onCallMethodChange:d=>e.debugCallMethod=d,onCallParamsChange:d=>e.debugCallParams=d,onRefresh:()=>bs(e),onCall:()=>ou(e)}):y}

        ${e.tab==="logs"?Jv({loading:e.logsLoading,error:e.logsError,file:e.logsFile,entries:e.logsEntries,filterText:e.logsFilterText,levelFilters:e.logsLevelFilters,autoFollow:e.logsAutoFollow,truncated:e.logsTruncated,onFilterTextChange:d=>e.logsFilterText=d,onLevelToggle:(d,m)=>{e.logsLevelFilters={...e.logsLevelFilters,[d]:m}},onToggleAutoFollow:d=>e.logsAutoFollow=d,onRefresh:()=>Ja(e,{reset:!0}),onExport:(d,m)=>e.exportLogs(d,m),onScroll:d=>e.handleLogsScroll(d)}):y}
      </main>
      ${jv(e)}
      ${Qv(e)}
      ${e.toolLibraryMcpEditModalOpen&&e.toolLibraryMcpEditServerKey?(()=>{const d=e.toolLibraryMcpEditServerKey,v=(e.configForm??e.configSnapshot?.config)?.mcp?.servers?.[d]??{};return Wy({open:!0,serverKey:d,entry:v,editMode:e.mcpEditMode,editConnectionType:e.mcpEditConnectionType,formDirty:e.mcpFormDirty,rawJson:e.mcpRawJson,rawError:e.mcpRawError,saving:e.configSaving,onFormPatch:(C,A)=>cw(e,C,A),onRawChange:(C,A)=>dw(e,C,A),onEditModeChange:C=>e.mcpEditMode=C,onEditConnectionTypeChange:C=>lw(e,C),onSave:()=>{uw(e),e.toolLibraryMcpEditModalOpen=!1,e.toolLibraryMcpEditServerKey="",J(e)},onCancel:()=>{pw(e),e.toolLibraryMcpEditModalOpen=!1,e.toolLibraryMcpEditServerKey=""}})})():y}
      ${e.digitalEmployeeEditModalOpen?Vg({editModalOpen:!0,editId:e.digitalEmployeeEditId,editName:e.digitalEmployeeEditName,editDescription:e.digitalEmployeeEditDescription,editPrompt:e.digitalEmployeeEditPrompt,editMcpJson:e.digitalEmployeeEditMcpJson,editMcpMode:e.digitalEmployeeEditMcpMode,editMcpItems:e.digitalEmployeeEditMcpItems??[],onEditMcpModeChange:d=>{e.digitalEmployeeEditMcpMode=d},onEditMcpAddItem:()=>{const d=e.digitalEmployeeEditMcpItems??[];e.digitalEmployeeEditMcpItems=[...d,{id:Le(),key:"",editMode:"form",connectionType:"stdio",draft:{command:"npx",args:[],env:{}},rawJson:"{}",rawError:null,collapsed:!1}]},onEditMcpRemoveItem:d=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).filter(m=>m.id!==d)},onEditMcpCollapsedChange:(d,m)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(h=>h.id===d?{...h,collapsed:m}:h)},onEditMcpKeyChange:(d,m)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(h=>h.id===d?{...h,key:m}:h)},onEditMcpEditModeChange:(d,m)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(h=>h.id===d?{...h,editMode:m}:h)},onEditMcpConnectionTypeChange:(d,m)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(h=>h.id===d?{...h,connectionType:m}:h)},onEditMcpFormPatch:(d,m)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(h=>h.id===d?{...h,draft:{...h.draft??{},...m??{}}}:h)},onEditMcpRawChange:(d,m)=>{e.digitalEmployeeEditMcpItems=(e.digitalEmployeeEditMcpItems??[]).map(h=>h.id===d?{...h,rawJson:m,rawError:null}:h)},editSkillNames:e.digitalEmployeeEditSkillNames??[],editSkillFilesToUpload:e.digitalEmployeeEditSkillFilesToUpload??[],editSkillsToDelete:e.digitalEmployeeEditSkillsToDelete??[],editError:e.digitalEmployeeEditError,editBusy:e.digitalEmployeeEditBusy,onEditClose:()=>{e.digitalEmployeeEditBusy||(e.digitalEmployeeEditModalOpen=!1,e.digitalEmployeeEditError=null,e.digitalEmployeeEditMcpMode="raw",e.digitalEmployeeEditMcpItems=[])},onEditDescriptionChange:d=>{e.digitalEmployeeEditDescription=d},onEditPromptChange:d=>{e.digitalEmployeeEditPrompt=d},onEditMcpJsonChange:d=>{e.digitalEmployeeEditMcpJson=d},onEditSkillFilesChange:d=>{e.digitalEmployeeEditSkillFilesToUpload=d??[]},onEditSkillDelete:d=>{const m=e.digitalEmployeeEditSkillsToDelete??[];m.includes(d)||(e.digitalEmployeeEditSkillsToDelete=[...m,d])},onEditSkillUndoDelete:d=>{e.digitalEmployeeEditSkillsToDelete=(e.digitalEmployeeEditSkillsToDelete??[]).filter(m=>m!==d)},onEditSubmit:async()=>{if(e.digitalEmployeeEditMcpMode==="builder"){const d=e.digitalEmployeeEditMcpItems??[],m={},h=new Set;let v=null;const C=d.map(A=>({...A,rawError:null}));for(let A=0;A<C.length;A++){const E=C[A],T=E.key?.trim()??"";if(T){if(h.has(T)){v??=`MCP key 重复：${T}`;continue}if(h.add(T),E.editMode==="raw"){const P=E.rawJson?.trim()??"";if(!P)continue;try{const _=JSON.parse(P);if(!_||typeof _!="object"||Array.isArray(_)){E.rawError="JSON 必须是对象",v??=`MCP ${T} 的 JSON 无效`;continue}m[T]=_}catch{E.rawError="JSON 格式无效",v??=`MCP ${T} 的 JSON 无效`;continue}}else{const P=E.draft??{};if(E.connectionType==="stdio"&&!P.command?.trim()){v??=`MCP ${T} 缺少 command`;continue}if(E.connectionType==="url"&&!P.url?.trim()){v??=`MCP ${T} 缺少 url`;continue}if(E.connectionType==="service"&&(!P.service?.trim()||!P.serviceUrl?.trim())){v??=`MCP ${T} 缺少 service/serviceUrl`;continue}m[T]=P}}}if(e.digitalEmployeeEditMcpItems=C,e.digitalEmployeeEditMcpJson=Object.keys(m).length>0?JSON.stringify(m,null,2):"",v){e.digitalEmployeeEditError=v;return}}if(await Ei(e),!e.digitalEmployeeEditError&&(e.digitalEmployeeEditModalOpen=!1,Ge(e),e.tab==="employeeMarket")){e.employeeMarketError=null;const d=e.employeeMarketCategory&&e.employeeMarketCategory!=="__all__"?e.employeeMarketCategory:void 0;oa({q:e.employeeMarketQuery,category:d},{gatewayHost:e.settings?.gatewayUrl?.trim(),token:e.settings?.token?.trim()}).then(m=>e.employeeMarketItems=m)}}}):y}
    </div>
  `}var Bw=Object.defineProperty,Hw=Object.getOwnPropertyDescriptor,w=(e,t,n,s)=>{for(var a=s>1?void 0:s?Hw(t,n):t,o=e.length-1,l;o>=0;o--)(l=e[o])&&(a=(s?l(t,n,a):l(a))||a);return s&&a&&Bw(t,n,a),a};const ga=Pg();function zw(){if(!window.location.search)return!1;const t=new URLSearchParams(window.location.search).get("onboarding");if(!t)return!1;const n=t.trim().toLowerCase();return n==="1"||n==="true"||n==="yes"||n==="on"}let b=class extends zt{constructor(){super(...arguments),this.settings=Dp(),this.password="",this.tab="message",this.onboarding=zw(),this.connected=!1,this.theme=this.settings.theme??"light",this.themeResolved="dark",this.hello=null,this.lastError=null,this.eventLog=[],this.eventLogBuffer=[],this.toolStreamSyncTimer=null,this.sidebarCloseTimer=null,this.assistantName=ga.name,this.assistantAvatar=ga.avatar,this.assistantAgentId=ga.agentId??null,this.sessionKey=this.settings.sessionKey,this.chatLoading=!1,this.chatSending=!1,this.chatMessage="",this.chatMessages=[],this.chatToolMessages=[],this.chatStream=null,this.chatStreamStartedAt=null,this.chatRunId=null,this.compactionStatus=null,this.chatAvatarUrl=null,this.chatThinkingLevel=null,this.chatModelRef=null,this.chatQueue=[],this.chatAttachments=[],this.sidebarOpen=!1,this.sidebarContent=null,this.sidebarError=null,this.splitRatio=this.settings.splitRatio,this.nodesLoading=!1,this.nodes=[],this.devicesLoading=!1,this.devicesError=null,this.devicesList=null,this.execApprovalsLoading=!1,this.execApprovalsSaving=!1,this.execApprovalsDirty=!1,this.execApprovalsSnapshot=null,this.execApprovalsForm=null,this.execApprovalsSelectedAgent=null,this.execApprovalsTarget="gateway",this.execApprovalsTargetNodeId=null,this.execApprovalQueue=[],this.execApprovalBusy=!1,this.execApprovalError=null,this.pendingGatewayUrl=null,this.configLoading=!1,this.configRaw=`{
}
`,this.configRawOriginal="",this.configValid=null,this.configIssues=[],this.configSaving=!1,this.configApplying=!1,this.updateRunning=!1,this.applySessionKey=this.settings.lastActiveSessionKey,this.configSnapshot=null,this.configSchema=null,this.configSchemaVersion=null,this.configSchemaLoading=!1,this.configUiHints={},this.configForm=null,this.configFormOriginal=null,this.configFormDirty=!1,this.configFormMode="raw",this.configSearchQuery="",this.configActiveSection=null,this.configActiveSubsection=null,this.channelsLoading=!1,this.channelsSnapshot=null,this.channelsError=null,this.channelsLastSuccess=null,this.whatsappLoginMessage=null,this.whatsappLoginQrDataUrl=null,this.whatsappLoginConnected=null,this.whatsappBusy=!1,this.weworkQrModalOpen=!1,this.weworkQrModalLoading=!1,this.weworkQrModalPolling=!1,this.weworkQrModalSuccess=!1,this.weworkQrModalError=null,this.weworkQrModalReplaceWarn=!1,this.weworkQrModalAuthUrl=null,this.weworkQrModalGenPageUrl=null,this.weworkQrPollTimer=null,this.weworkQrSuccessCloseTimer=null,this.nostrProfileFormState=null,this.nostrProfileAccountId=null,this.channelsSelectedChannelId=null,this.mcpSelectedKey=null,this.mcpViewMode="card",this.mcpEditMode="form",this.mcpEditConnectionType="stdio",this.mcpFormDirty=!1,this.mcpRawJson="",this.mcpRawError=null,this.mcpAddModalOpen=!1,this.mcpAddName="",this.mcpAddDraft={},this.mcpAddConnectionType="stdio",this.mcpAddEditMode="form",this.mcpAddRawJson="{}",this.mcpAddRawError=null,this.llmTraceLoading=!1,this.llmTraceResult=null,this.llmTraceError=null,this.llmTraceMode="active",this.llmTraceSearch="",this.llmTraceEnabled=!1,this.llmTraceSaving=!1,this.llmTraceViewContent=null,this.llmTraceViewingSessionId=null,this.llmTraceViewLoading=!1,this.securityForm=null,this.approvalsLoading=!1,this.approvalsResult=null,this.approvalsError=null,this.modelsSelectedProvider=null,this.modelsViewMode="card",this.modelsFormDirty=!1,this.modelsAddProviderModalOpen=!1,this.modelsAddProviderForm={providerId:"",displayName:"",baseUrl:"",apiKey:"",apiKeyPrefix:""},this.modelsAddModelModalOpen=!1,this.modelsAddModelForm={modelId:"",modelName:""},this.modelsUseModelModalOpen=!1,this.modelsUseModelModalProvider=null,this.modelsSaveError=null,this.skillsSelectedSkillKey=null,this.skillsSkillDocContent=null,this.skillsSkillDocLoading=!1,this.skillsSkillDocError=null,this.skillsViewMode="card",this.presenceLoading=!1,this.presenceEntries=[],this.presenceError=null,this.presenceStatus=null,this.agentsLoading=!1,this.agentsList=null,this.agentsError=null,this.agentsSelectedId=null,this.agentsPanel="overview",this.agentFilesLoading=!1,this.agentFilesError=null,this.agentFilesList=null,this.agentFileContents={},this.agentFileDrafts={},this.agentFileActive=null,this.agentFileSaving=!1,this.agentIdentityLoading=!1,this.agentIdentityError=null,this.agentIdentityById={},this.agentSkillsLoading=!1,this.agentSkillsError=null,this.agentSkillsReport=null,this.agentSkillsAgentId=null,this.sessionsLoading=!1,this.sessionsResult=null,this.sessionEditingKey=null,this.sessionsError=null,this.sessionsFilterActive="",this.sessionsFilterLimit="120",this.sessionsIncludeGlobal=!0,this.sessionsIncludeUnknown=!1,this.sessionsBulkMode=!1,this.sessionsSelectedKeys=[],this.usageLoading=!1,this.usageResult=null,this.usageCostSummary=null,this.usageError=null,this.usageStartDate=(()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`})(),this.usageEndDate=(()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`})(),this.usageSelectedSessions=[],this.usageSelectedDays=[],this.usageSelectedHours=[],this.usageChartMode="tokens",this.usageDailyChartMode="by-type",this.usageTimeSeriesMode="per-turn",this.usageTimeSeriesBreakdownMode="by-type",this.usageTimeSeries=null,this.usageTimeSeriesLoading=!1,this.usageSessionLogs=null,this.usageSessionLogsLoading=!1,this.usageSessionLogsExpanded=!1,this.usageQuery="",this.usageQueryDraft="",this.usageSessionSort="recent",this.usageSessionSortDir="desc",this.usageRecentSessions=[],this.usageTimeZone="local",this.usageContextExpanded=!1,this.usageHeaderPinned=!1,this.usageSessionsTab="all",this.usageVisibleColumns=["channel","agent","provider","model","messages","tools","errors","duration"],this.usageLogFilterRoles=[],this.usageLogFilterTools=[],this.usageLogFilterHasTools=!1,this.usageLogFilterQuery="",this.usageQueryDebounceTimer=null,this.cronLoading=!1,this.cronJobs=[],this.cronStatus=null,this.cronError=null,this.cronForm={...Ag},this.cronRunsJobId=null,this.cronRuns=[],this.cronBusy=!1,this.skillsLoading=!1,this.skillsReport=null,this.skillsError=null,this.skillsFilter="",this.skillEdits={},this.skillsBusyKey=null,this.skillMessages={},this.skillsAddModalOpen=!1,this.skillsUploadName="",this.skillsUploadFiles=[],this.skillsUploadError=null,this.skillsUploadTemplate=null,this.skillsUploadBusy=!1,this.digitalEmployeesLoading=!1,this.digitalEmployeesError=null,this.digitalEmployeesFilter="",this.digitalEmployeesViewMode="list",this.digitalEmployees=[],this.digitalEmployeeCreateModalOpen=!1,this.digitalEmployeeCreateName="",this.digitalEmployeeCreateDescription="",this.digitalEmployeeCreatePrompt="",this.digitalEmployeeCreateError=null,this.digitalEmployeeCreateBusy=!1,this.digitalEmployeeAdvancedOpen=!1,this.digitalEmployeeCreateMcpMode="builder",this.digitalEmployeeCreateMcpJson="",this.digitalEmployeeCreateMcpItems=[],this.digitalEmployeeSkillUploadName="",this.digitalEmployeeSkillUploadFiles=[],this.digitalEmployeeSkillUploadError=null,this.digitalEmployeeSkillUploadBusy=!1,this.digitalEmployeeEditModalOpen=!1,this.digitalEmployeeEditId="",this.digitalEmployeeEditName="",this.digitalEmployeeEditDescription="",this.digitalEmployeeEditPrompt="",this.digitalEmployeeEditMcpJson="",this.digitalEmployeeEditMcpMode="raw",this.digitalEmployeeEditMcpItems=[],this.digitalEmployeeEditSkillNames=[],this.digitalEmployeeEditSkillFilesToUpload=[],this.digitalEmployeeEditSkillsToDelete=[],this.digitalEmployeeEditEnabled=!0,this.digitalEmployeeEditError=null,this.digitalEmployeeEditBusy=!1,this.employeeMarketLoadedOnce=!1,this.employeeMarketLoading=!1,this.employeeMarketError=null,this.employeeMarketQuery="",this.employeeMarketCategory="__all__",this.employeeMarketViewMode="card",this.employeeMarketItems=[],this.employeeMarketSelectedId=null,this.employeeMarketSelectedDetail=null,this.employeeMarketInstalledRemoteIds=new Set,this.employeeMarketRemoteToLocal={},this.employeeMarketInstallingId=null,this.skillLibraryLoadedOnce=!1,this.skillLibraryLoading=!1,this.skillLibraryError=null,this.skillLibraryQuery="",this.skillLibraryCategory="__all__",this.skillLibraryStatus="__all__",this.skillLibraryItems=[],this.skillLibrarySelectedFolder=null,this.skillLibrarySelectedDetail=null,this.skillLibraryInstallingFolder=null,this.skillLibraryInstallSuccess=null,this.toolLibraryLoadedOnce=!1,this.toolLibraryLoading=!1,this.toolLibraryError=null,this.toolLibraryQuery="",this.toolLibraryCategory="__all__",this.toolLibraryItems=[],this.toolLibrarySelectedId=null,this.toolLibrarySelectedDetail=null,this.toolLibraryInstalledRemoteIds=new Set,this.toolLibraryInstalledMcpMap=new Map,this.toolLibraryInstallingId=null,this.toolLibraryMcpEditModalOpen=!1,this.toolLibraryMcpEditServerKey="",this.tutorialsLoadedOnce=!1,this.tutorialsLoading=!1,this.tutorialsError=null,this.tutorialCategories=[],this.tutorialsQuery="",this.tutorialsSelectedCategoryId=null,this.tutorialsPlayingLink=null,this.aboutUninstallModalOpen=!1,this.aboutUninstallMode="program",this.aboutUninstallLoading=!1,this.aboutUninstallError=null,this.debugLoading=!1,this.debugStatus=null,this.debugHealth=null,this.debugModels=[],this.debugHeartbeat=null,this.debugCallMethod="",this.debugCallParams="{}",this.debugCallResult=null,this.debugCallError=null,this.logsLoading=!1,this.logsError=null,this.logsFile=null,this.logsEntries=[],this.logsFilterText="",this.logsLevelFilters={...Cg},this.logsAutoFollow=!0,this.logsTruncated=!1,this.logsCursor=null,this.logsLastFetchAt=null,this.logsLimit=500,this.logsMaxBytes=25e4,this.logsAtBottom=!0,this.client=null,this.chatScrollFrame=null,this.chatScrollTimeout=null,this.chatHasAutoScrolled=!1,this.chatUserNearBottom=!0,this.chatNewMessagesBelow=!1,this.nodesPollInterval=null,this.logsPollInterval=null,this.debugPollInterval=null,this.logsScrollFrame=null,this.toolStreamById=new Map,this.toolStreamOrder=[],this.refreshSessionsAfterChat=new Set,this.basePath="",this.popStateHandler=()=>Qp(this),this.themeMedia=null,this.themeMediaHandler=null,this.topbarObserver=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),Hg(this)}firstUpdated(){zg(this)}disconnectedCallback(){Wg(this),super.disconnectedCallback()}updated(e){Kg(this,e)}connect(){Jr(this)}handleChatScroll(e){eu(this,e)}handleLogsScroll(e){tu(this,e)}exportLogs(e,t){nu(e,t)}resetToolStream(){Ss(this)}resetChatScroll(){di(this)}scrollToBottom(){di(this),Tn(this,!0)}async loadAssistantIdentity(){await Qr(this)}applySettings(e){Mt(this,e)}setTab(e){Bp(this,e)}setTheme(e,t){Hp(this,e,t)}async loadOverview(){await Fr(this)}async loadCron(){await Ht(this)}async handleAbortChat(){await Wr(this)}removeQueuedMessage(e){wg(this,e)}async handleSendChat(e,t){await xg(this,e,t)}async handleWhatsAppStart(e){await zd(this,e)}async handleWhatsAppWait(){await Wd(this)}async handleWhatsAppLogout(){await Kd(this)}async handleWeWorkQrStart(){await Bd(this)}handleWeWorkQrModalClose(){Hd(this)}async handleChannelConfigSave(){await qd(this)}async handleChannelConfigReload(){await jd(this)}handleNostrProfileEdit(e,t){Vd(this,e,t)}handleNostrProfileCancel(){Gd(this)}handleNostrProfileFieldChange(e,t){Jd(this,e,t)}async handleNostrProfileSave(){await Zd(this)}async handleNostrProfileImport(){await Xd(this)}handleNostrProfileToggleAdvanced(){Yd(this)}async handleExecApprovalDecision(e){const t=this.execApprovalQueue[0];if(!(!t||!this.client||this.execApprovalBusy)){this.execApprovalBusy=!0,this.execApprovalError=null;try{await this.client.request("exec.approval.resolve",{id:t.id,decision:e}),this.execApprovalQueue=this.execApprovalQueue.filter(n=>n.id!==t.id)}catch(n){this.execApprovalError=`Exec approval failed: ${String(n)}`}finally{this.execApprovalBusy=!1}}}handleGatewayUrlConfirm(){const e=this.pendingGatewayUrl;e&&(this.pendingGatewayUrl=null,Mt(this,{...this.settings,gatewayUrl:e}),this.connect())}handleGatewayUrlCancel(){this.pendingGatewayUrl=null}handleOpenSidebar(e){this.sidebarCloseTimer!=null&&(window.clearTimeout(this.sidebarCloseTimer),this.sidebarCloseTimer=null),this.sidebarContent=e,this.sidebarError=null,this.sidebarOpen=!0}handleCloseSidebar(){this.sidebarOpen=!1,this.sidebarCloseTimer!=null&&window.clearTimeout(this.sidebarCloseTimer),this.sidebarCloseTimer=window.setTimeout(()=>{this.sidebarOpen||(this.sidebarContent=null,this.sidebarError=null,this.sidebarCloseTimer=null)},200)}handleSplitRatioChange(e){const t=Math.max(.4,Math.min(.7,e));this.splitRatio=t,this.applySettings({...this.settings,splitRatio:t})}render(){return Fw(this)}};w([x()],b.prototype,"settings",2);w([x()],b.prototype,"password",2);w([x()],b.prototype,"tab",2);w([x()],b.prototype,"onboarding",2);w([x()],b.prototype,"connected",2);w([x()],b.prototype,"theme",2);w([x()],b.prototype,"themeResolved",2);w([x()],b.prototype,"hello",2);w([x()],b.prototype,"lastError",2);w([x()],b.prototype,"eventLog",2);w([x()],b.prototype,"assistantName",2);w([x()],b.prototype,"assistantAvatar",2);w([x()],b.prototype,"assistantAgentId",2);w([x()],b.prototype,"sessionKey",2);w([x()],b.prototype,"chatLoading",2);w([x()],b.prototype,"chatSending",2);w([x()],b.prototype,"chatMessage",2);w([x()],b.prototype,"chatMessages",2);w([x()],b.prototype,"chatToolMessages",2);w([x()],b.prototype,"chatStream",2);w([x()],b.prototype,"chatStreamStartedAt",2);w([x()],b.prototype,"chatRunId",2);w([x()],b.prototype,"compactionStatus",2);w([x()],b.prototype,"chatAvatarUrl",2);w([x()],b.prototype,"chatThinkingLevel",2);w([x()],b.prototype,"chatModelRef",2);w([x()],b.prototype,"chatQueue",2);w([x()],b.prototype,"chatAttachments",2);w([x()],b.prototype,"sidebarOpen",2);w([x()],b.prototype,"sidebarContent",2);w([x()],b.prototype,"sidebarError",2);w([x()],b.prototype,"splitRatio",2);w([x()],b.prototype,"nodesLoading",2);w([x()],b.prototype,"nodes",2);w([x()],b.prototype,"devicesLoading",2);w([x()],b.prototype,"devicesError",2);w([x()],b.prototype,"devicesList",2);w([x()],b.prototype,"execApprovalsLoading",2);w([x()],b.prototype,"execApprovalsSaving",2);w([x()],b.prototype,"execApprovalsDirty",2);w([x()],b.prototype,"execApprovalsSnapshot",2);w([x()],b.prototype,"execApprovalsForm",2);w([x()],b.prototype,"execApprovalsSelectedAgent",2);w([x()],b.prototype,"execApprovalsTarget",2);w([x()],b.prototype,"execApprovalsTargetNodeId",2);w([x()],b.prototype,"execApprovalQueue",2);w([x()],b.prototype,"execApprovalBusy",2);w([x()],b.prototype,"execApprovalError",2);w([x()],b.prototype,"pendingGatewayUrl",2);w([x()],b.prototype,"configLoading",2);w([x()],b.prototype,"configRaw",2);w([x()],b.prototype,"configRawOriginal",2);w([x()],b.prototype,"configValid",2);w([x()],b.prototype,"configIssues",2);w([x()],b.prototype,"configSaving",2);w([x()],b.prototype,"configApplying",2);w([x()],b.prototype,"updateRunning",2);w([x()],b.prototype,"applySessionKey",2);w([x()],b.prototype,"configSnapshot",2);w([x()],b.prototype,"configSchema",2);w([x()],b.prototype,"configSchemaVersion",2);w([x()],b.prototype,"configSchemaLoading",2);w([x()],b.prototype,"configUiHints",2);w([x()],b.prototype,"configForm",2);w([x()],b.prototype,"configFormOriginal",2);w([x()],b.prototype,"configFormDirty",2);w([x()],b.prototype,"configFormMode",2);w([x()],b.prototype,"configSearchQuery",2);w([x()],b.prototype,"configActiveSection",2);w([x()],b.prototype,"configActiveSubsection",2);w([x()],b.prototype,"channelsLoading",2);w([x()],b.prototype,"channelsSnapshot",2);w([x()],b.prototype,"channelsError",2);w([x()],b.prototype,"channelsLastSuccess",2);w([x()],b.prototype,"whatsappLoginMessage",2);w([x()],b.prototype,"whatsappLoginQrDataUrl",2);w([x()],b.prototype,"whatsappLoginConnected",2);w([x()],b.prototype,"whatsappBusy",2);w([x()],b.prototype,"weworkQrModalOpen",2);w([x()],b.prototype,"weworkQrModalLoading",2);w([x()],b.prototype,"weworkQrModalPolling",2);w([x()],b.prototype,"weworkQrModalSuccess",2);w([x()],b.prototype,"weworkQrModalError",2);w([x()],b.prototype,"weworkQrModalReplaceWarn",2);w([x()],b.prototype,"weworkQrModalAuthUrl",2);w([x()],b.prototype,"weworkQrModalGenPageUrl",2);w([x()],b.prototype,"nostrProfileFormState",2);w([x()],b.prototype,"nostrProfileAccountId",2);w([x()],b.prototype,"channelsSelectedChannelId",2);w([x()],b.prototype,"mcpSelectedKey",2);w([x()],b.prototype,"mcpViewMode",2);w([x()],b.prototype,"mcpEditMode",2);w([x()],b.prototype,"mcpEditConnectionType",2);w([x()],b.prototype,"mcpFormDirty",2);w([x()],b.prototype,"mcpRawJson",2);w([x()],b.prototype,"mcpRawError",2);w([x()],b.prototype,"mcpAddModalOpen",2);w([x()],b.prototype,"mcpAddName",2);w([x()],b.prototype,"mcpAddDraft",2);w([x()],b.prototype,"mcpAddConnectionType",2);w([x()],b.prototype,"mcpAddEditMode",2);w([x()],b.prototype,"mcpAddRawJson",2);w([x()],b.prototype,"mcpAddRawError",2);w([x()],b.prototype,"llmTraceLoading",2);w([x()],b.prototype,"llmTraceResult",2);w([x()],b.prototype,"llmTraceError",2);w([x()],b.prototype,"llmTraceMode",2);w([x()],b.prototype,"llmTraceSearch",2);w([x()],b.prototype,"llmTraceEnabled",2);w([x()],b.prototype,"llmTraceSaving",2);w([x()],b.prototype,"llmTraceViewContent",2);w([x()],b.prototype,"llmTraceViewingSessionId",2);w([x()],b.prototype,"llmTraceViewLoading",2);w([x()],b.prototype,"securityForm",2);w([x()],b.prototype,"approvalsLoading",2);w([x()],b.prototype,"approvalsResult",2);w([x()],b.prototype,"approvalsError",2);w([x()],b.prototype,"modelsSelectedProvider",2);w([x()],b.prototype,"modelsViewMode",2);w([x()],b.prototype,"modelsFormDirty",2);w([x()],b.prototype,"modelsAddProviderModalOpen",2);w([x()],b.prototype,"modelsAddProviderForm",2);w([x()],b.prototype,"modelsAddModelModalOpen",2);w([x()],b.prototype,"modelsAddModelForm",2);w([x()],b.prototype,"modelsUseModelModalOpen",2);w([x()],b.prototype,"modelsUseModelModalProvider",2);w([x()],b.prototype,"modelsSaveError",2);w([x()],b.prototype,"skillsSelectedSkillKey",2);w([x()],b.prototype,"skillsSkillDocContent",2);w([x()],b.prototype,"skillsSkillDocLoading",2);w([x()],b.prototype,"skillsSkillDocError",2);w([x()],b.prototype,"skillsViewMode",2);w([x()],b.prototype,"presenceLoading",2);w([x()],b.prototype,"presenceEntries",2);w([x()],b.prototype,"presenceError",2);w([x()],b.prototype,"presenceStatus",2);w([x()],b.prototype,"agentsLoading",2);w([x()],b.prototype,"agentsList",2);w([x()],b.prototype,"agentsError",2);w([x()],b.prototype,"agentsSelectedId",2);w([x()],b.prototype,"agentsPanel",2);w([x()],b.prototype,"agentFilesLoading",2);w([x()],b.prototype,"agentFilesError",2);w([x()],b.prototype,"agentFilesList",2);w([x()],b.prototype,"agentFileContents",2);w([x()],b.prototype,"agentFileDrafts",2);w([x()],b.prototype,"agentFileActive",2);w([x()],b.prototype,"agentFileSaving",2);w([x()],b.prototype,"agentIdentityLoading",2);w([x()],b.prototype,"agentIdentityError",2);w([x()],b.prototype,"agentIdentityById",2);w([x()],b.prototype,"agentSkillsLoading",2);w([x()],b.prototype,"agentSkillsError",2);w([x()],b.prototype,"agentSkillsReport",2);w([x()],b.prototype,"agentSkillsAgentId",2);w([x()],b.prototype,"sessionsLoading",2);w([x()],b.prototype,"sessionsResult",2);w([x()],b.prototype,"sessionEditingKey",2);w([x()],b.prototype,"sessionsError",2);w([x()],b.prototype,"sessionsFilterActive",2);w([x()],b.prototype,"sessionsFilterLimit",2);w([x()],b.prototype,"sessionsIncludeGlobal",2);w([x()],b.prototype,"sessionsIncludeUnknown",2);w([x()],b.prototype,"sessionsBulkMode",2);w([x()],b.prototype,"sessionsSelectedKeys",2);w([x()],b.prototype,"usageLoading",2);w([x()],b.prototype,"usageResult",2);w([x()],b.prototype,"usageCostSummary",2);w([x()],b.prototype,"usageError",2);w([x()],b.prototype,"usageStartDate",2);w([x()],b.prototype,"usageEndDate",2);w([x()],b.prototype,"usageSelectedSessions",2);w([x()],b.prototype,"usageSelectedDays",2);w([x()],b.prototype,"usageSelectedHours",2);w([x()],b.prototype,"usageChartMode",2);w([x()],b.prototype,"usageDailyChartMode",2);w([x()],b.prototype,"usageTimeSeriesMode",2);w([x()],b.prototype,"usageTimeSeriesBreakdownMode",2);w([x()],b.prototype,"usageTimeSeries",2);w([x()],b.prototype,"usageTimeSeriesLoading",2);w([x()],b.prototype,"usageSessionLogs",2);w([x()],b.prototype,"usageSessionLogsLoading",2);w([x()],b.prototype,"usageSessionLogsExpanded",2);w([x()],b.prototype,"usageQuery",2);w([x()],b.prototype,"usageQueryDraft",2);w([x()],b.prototype,"usageSessionSort",2);w([x()],b.prototype,"usageSessionSortDir",2);w([x()],b.prototype,"usageRecentSessions",2);w([x()],b.prototype,"usageTimeZone",2);w([x()],b.prototype,"usageContextExpanded",2);w([x()],b.prototype,"usageHeaderPinned",2);w([x()],b.prototype,"usageSessionsTab",2);w([x()],b.prototype,"usageVisibleColumns",2);w([x()],b.prototype,"usageLogFilterRoles",2);w([x()],b.prototype,"usageLogFilterTools",2);w([x()],b.prototype,"usageLogFilterHasTools",2);w([x()],b.prototype,"usageLogFilterQuery",2);w([x()],b.prototype,"cronLoading",2);w([x()],b.prototype,"cronJobs",2);w([x()],b.prototype,"cronStatus",2);w([x()],b.prototype,"cronError",2);w([x()],b.prototype,"cronForm",2);w([x()],b.prototype,"cronRunsJobId",2);w([x()],b.prototype,"cronRuns",2);w([x()],b.prototype,"cronBusy",2);w([x()],b.prototype,"skillsLoading",2);w([x()],b.prototype,"skillsReport",2);w([x()],b.prototype,"skillsError",2);w([x()],b.prototype,"skillsFilter",2);w([x()],b.prototype,"skillEdits",2);w([x()],b.prototype,"skillsBusyKey",2);w([x()],b.prototype,"skillMessages",2);w([x()],b.prototype,"skillsAddModalOpen",2);w([x()],b.prototype,"skillsUploadName",2);w([x()],b.prototype,"skillsUploadFiles",2);w([x()],b.prototype,"skillsUploadError",2);w([x()],b.prototype,"skillsUploadTemplate",2);w([x()],b.prototype,"skillsUploadBusy",2);w([x()],b.prototype,"digitalEmployeesLoading",2);w([x()],b.prototype,"digitalEmployeesError",2);w([x()],b.prototype,"digitalEmployeesFilter",2);w([x()],b.prototype,"digitalEmployeesViewMode",2);w([x()],b.prototype,"digitalEmployees",2);w([x()],b.prototype,"digitalEmployeeCreateModalOpen",2);w([x()],b.prototype,"digitalEmployeeCreateName",2);w([x()],b.prototype,"digitalEmployeeCreateDescription",2);w([x()],b.prototype,"digitalEmployeeCreatePrompt",2);w([x()],b.prototype,"digitalEmployeeCreateError",2);w([x()],b.prototype,"digitalEmployeeCreateBusy",2);w([x()],b.prototype,"digitalEmployeeAdvancedOpen",2);w([x()],b.prototype,"digitalEmployeeCreateMcpMode",2);w([x()],b.prototype,"digitalEmployeeCreateMcpJson",2);w([x()],b.prototype,"digitalEmployeeCreateMcpItems",2);w([x()],b.prototype,"digitalEmployeeSkillUploadName",2);w([x()],b.prototype,"digitalEmployeeSkillUploadFiles",2);w([x()],b.prototype,"digitalEmployeeSkillUploadError",2);w([x()],b.prototype,"digitalEmployeeSkillUploadBusy",2);w([x()],b.prototype,"digitalEmployeeEditModalOpen",2);w([x()],b.prototype,"digitalEmployeeEditId",2);w([x()],b.prototype,"digitalEmployeeEditName",2);w([x()],b.prototype,"digitalEmployeeEditDescription",2);w([x()],b.prototype,"digitalEmployeeEditPrompt",2);w([x()],b.prototype,"digitalEmployeeEditMcpJson",2);w([x()],b.prototype,"digitalEmployeeEditMcpMode",2);w([x()],b.prototype,"digitalEmployeeEditMcpItems",2);w([x()],b.prototype,"digitalEmployeeEditSkillNames",2);w([x()],b.prototype,"digitalEmployeeEditSkillFilesToUpload",2);w([x()],b.prototype,"digitalEmployeeEditSkillsToDelete",2);w([x()],b.prototype,"digitalEmployeeEditEnabled",2);w([x()],b.prototype,"digitalEmployeeEditError",2);w([x()],b.prototype,"digitalEmployeeEditBusy",2);w([x()],b.prototype,"employeeMarketLoadedOnce",2);w([x()],b.prototype,"employeeMarketLoading",2);w([x()],b.prototype,"employeeMarketError",2);w([x()],b.prototype,"employeeMarketQuery",2);w([x()],b.prototype,"employeeMarketCategory",2);w([x()],b.prototype,"employeeMarketViewMode",2);w([x()],b.prototype,"employeeMarketItems",2);w([x()],b.prototype,"employeeMarketSelectedId",2);w([x()],b.prototype,"employeeMarketSelectedDetail",2);w([x()],b.prototype,"employeeMarketInstalledRemoteIds",2);w([x()],b.prototype,"employeeMarketRemoteToLocal",2);w([x()],b.prototype,"employeeMarketInstallingId",2);w([x()],b.prototype,"skillLibraryLoadedOnce",2);w([x()],b.prototype,"skillLibraryLoading",2);w([x()],b.prototype,"skillLibraryError",2);w([x()],b.prototype,"skillLibraryQuery",2);w([x()],b.prototype,"skillLibraryCategory",2);w([x()],b.prototype,"skillLibraryStatus",2);w([x()],b.prototype,"skillLibraryItems",2);w([x()],b.prototype,"skillLibrarySelectedFolder",2);w([x()],b.prototype,"skillLibrarySelectedDetail",2);w([x()],b.prototype,"skillLibraryInstallingFolder",2);w([x()],b.prototype,"skillLibraryInstallSuccess",2);w([x()],b.prototype,"toolLibraryLoadedOnce",2);w([x()],b.prototype,"toolLibraryLoading",2);w([x()],b.prototype,"toolLibraryError",2);w([x()],b.prototype,"toolLibraryQuery",2);w([x()],b.prototype,"toolLibraryCategory",2);w([x()],b.prototype,"toolLibraryItems",2);w([x()],b.prototype,"toolLibrarySelectedId",2);w([x()],b.prototype,"toolLibrarySelectedDetail",2);w([x()],b.prototype,"toolLibraryInstalledRemoteIds",2);w([x()],b.prototype,"toolLibraryInstalledMcpMap",2);w([x()],b.prototype,"toolLibraryInstallingId",2);w([x()],b.prototype,"toolLibraryMcpEditModalOpen",2);w([x()],b.prototype,"toolLibraryMcpEditServerKey",2);w([x()],b.prototype,"tutorialsLoadedOnce",2);w([x()],b.prototype,"tutorialsLoading",2);w([x()],b.prototype,"tutorialsError",2);w([x()],b.prototype,"tutorialCategories",2);w([x()],b.prototype,"tutorialsQuery",2);w([x()],b.prototype,"tutorialsSelectedCategoryId",2);w([x()],b.prototype,"tutorialsPlayingLink",2);w([x()],b.prototype,"aboutUninstallModalOpen",2);w([x()],b.prototype,"aboutUninstallMode",2);w([x()],b.prototype,"aboutUninstallLoading",2);w([x()],b.prototype,"aboutUninstallError",2);w([x()],b.prototype,"debugLoading",2);w([x()],b.prototype,"debugStatus",2);w([x()],b.prototype,"debugHealth",2);w([x()],b.prototype,"debugModels",2);w([x()],b.prototype,"debugHeartbeat",2);w([x()],b.prototype,"debugCallMethod",2);w([x()],b.prototype,"debugCallParams",2);w([x()],b.prototype,"debugCallResult",2);w([x()],b.prototype,"debugCallError",2);w([x()],b.prototype,"logsLoading",2);w([x()],b.prototype,"logsError",2);w([x()],b.prototype,"logsFile",2);w([x()],b.prototype,"logsEntries",2);w([x()],b.prototype,"logsFilterText",2);w([x()],b.prototype,"logsLevelFilters",2);w([x()],b.prototype,"logsAutoFollow",2);w([x()],b.prototype,"logsTruncated",2);w([x()],b.prototype,"logsCursor",2);w([x()],b.prototype,"logsLastFetchAt",2);w([x()],b.prototype,"logsLimit",2);w([x()],b.prototype,"logsMaxBytes",2);w([x()],b.prototype,"logsAtBottom",2);w([x()],b.prototype,"chatNewMessagesBelow",2);b=w([Xl("openclaw-app")],b);
//# sourceMappingURL=index-FJrxkvHg.js.map

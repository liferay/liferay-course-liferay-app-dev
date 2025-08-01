(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".mechanic-card{width:300px;transition:transform .2s ease-in-out;margin:10px}.mechanic-card:hover{transform:scale(1.05);z-index:1}.mechanic-card-img{width:100%;padding-bottom:100%;background-size:cover;background-position:center;position:relative;border-radius:8px;overflow:hidden}.mechanic-card-overlay{position:absolute;bottom:0;width:100%;background:#0009;color:#fff;text-align:center;padding:.5rem}.mechanic-card-name{font-size:1.25rem;font-weight:700}.mechanic-card-description{font-size:1rem}")),document.head.appendChild(e)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
import k,{useState as dt,useEffect as ie,createContext as Bn,useContext as qn,useRef as Ut}from"react";import Vn from"react-dom";import Xn from"@clayui/layout";import Kn from"@clayui/card";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function an(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var At={exports:{}},Q={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xe;function Jn(){if(xe)return Q;xe=1;var t=k,e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,r=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(i,u,f){var d,p={},h=null,y=null;f!==void 0&&(h=""+f),u.key!==void 0&&(h=""+u.key),u.ref!==void 0&&(y=u.ref);for(d in u)a.call(u,d)&&!o.hasOwnProperty(d)&&(p[d]=u[d]);if(i&&i.defaultProps)for(d in u=i.defaultProps,u)p[d]===void 0&&(p[d]=u[d]);return{$$typeof:e,type:i,key:h,ref:y,props:p,_owner:r.current}}return Q.Fragment=n,Q.jsx=s,Q.jsxs=s,Q}var Ae;function Qn(){return Ae||(Ae=1,At.exports=Jn()),At.exports}var c=Qn(),it={},Se;function Zn(){if(Se)return it;Se=1;var t=Vn;return it.createRoot=t.createRoot,it.hydrateRoot=t.hydrateRoot,it}var ta=Zn();const M=an(ta),ea=({id:t="42"})=>c.jsxs("div",{children:["Passed ID: ",t]}),na=({isEditMode:t=!1})=>(console.log("isEditMode",t),console.log("Boolean(isEditMode)",!!t),console.log("typeof isEditMode",typeof t),c.jsx("div",{children:t===!0||t==="true"?"Mode: Edit":"Mode: View"})),T=window.Liferay||{Language:{get:t=>t},OAuth2:{getAuthorizeURL:()=>"",getBuiltInRedirectURL:()=>"",getIntrospectURL:()=>"",getTokenURL:()=>"",getUserAgentApplication:t=>{}},OAuth2Client:{FromParameters:t=>({}),FromUserAgentApplication:t=>({}),fetch:(t,e={})=>{}},ThemeDisplay:{getCompanyGroupId:()=>20119,getPathThemeImages:()=>"",getPortalURL:()=>"http://localhost:8080",getScopeGroupId:()=>20117,getSiteGroupId:()=>20117,isSignedIn:()=>!1},authToken:"",on:(t,e)=>{},fire:(t,e)=>{}},aa=()=>{const[t,e]=dt(0);return ie(()=>{const n=()=>{e(a=>a+1)};return T.on("ACET-Click",n),()=>{T.detach("ACET-Click",n)}},[]),c.jsxs("div",{children:["Current Count: ",t]})},ra=()=>{const t=()=>{T.fire("ACET-Click",{})};return c.jsx("button",{onClick:t,children:"Increment Counter"})},oa=()=>c.jsx("div",{children:c.jsx("slot",{name:"singleSlotName"})}),rn=Bn({name:"",description:"",setName:()=>{},setDescription:()=>{}}),on=()=>qn(rn),sa=({isEditMode:t})=>{const e=Ut(null),n=Ut(null),{setName:a,setDescription:r}=on();return ie(()=>{const o=f=>((f==null?void 0:f.assignedElements({flatten:!0}))||[]).map(p=>p.textContent||"").join(" ").trim(),s=()=>{a(o(e.current)),r(o(n.current))},i=new MutationObserver(s),u=f=>{((f==null?void 0:f.assignedElements({flatten:!0}))||[]).forEach(p=>i.observe(p,{characterData:!0,childList:!0,subtree:!0}))};return s(),u(e.current),u(n.current),()=>i.disconnect()},[a,r]),c.jsx(c.Fragment,{children:t?c.jsxs(c.Fragment,{children:[c.jsx("slot",{name:"nameSlot",ref:e}),c.jsx("br",{}),c.jsx("slot",{name:"descSlot",ref:n})]}):c.jsxs("div",{style:{visibility:"hidden"},children:[c.jsx("slot",{name:"nameSlot",ref:e}),c.jsx("br",{}),c.jsx("slot",{name:"descSlot",ref:n})]})})},ia=()=>{const{name:t,description:e}=on();return c.jsxs("div",{className:"mapping-slots",children:[c.jsx("h1",{children:t}),c.jsx("p",{children:e})]})},la=t=>typeof t=="boolean"?t:typeof t=="string"?t.toLowerCase()==="true":!1,ca=({id:t,isEditMode:e})=>{const[n,a]=dt(""),[r,o]=dt(""),s=la(e);return c.jsx("div",{children:c.jsxs(rn.Provider,{value:{name:n,description:r,setName:a,setDescription:o},children:[c.jsx(sa,{isEditMode:s}),!s&&c.jsx(ia,{})]})},t)};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function fa(t,e,n){return(e=da(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function we(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?we(Object(n),!0).forEach(function(a){fa(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):we(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function ua(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function da(t){var e=ua(t,"string");return typeof e=="symbol"?e:e+""}const Ee=()=>{};let le={},sn={},ln=null,cn={mark:Ee,measure:Ee};try{typeof window<"u"&&(le=window),typeof document<"u"&&(sn=document),typeof MutationObserver<"u"&&(ln=MutationObserver),typeof performance<"u"&&(cn=performance)}catch{}const{userAgent:_e=""}=le.navigator||{},U=le,v=sn,Ce=ln,lt=cn;U.document;const L=!!v.documentElement&&!!v.head&&typeof v.addEventListener=="function"&&typeof v.createElement=="function",fn=~_e.indexOf("MSIE")||~_e.indexOf("Trident/");var ma=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,pa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,un={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},ha={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},dn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],_="classic",gt="duotone",ga="sharp",ya="sharp-duotone",mn=[_,gt,ga,ya],ba={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},va={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},xa=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Aa={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Sa=["fak","fa-kit","fakd","fa-kit-duotone"],ke={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},wa=["kit"],Ea={kit:{"fa-kit":"fak"}},_a=["fak","fakd"],Ca={kit:{fak:"fa-kit"}},Oe={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ct={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ka=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Oa=["fak","fa-kit","fakd","fa-kit-duotone"],Pa={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Ia={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Ta={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Wt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Na=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Yt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...ka,...Na],ja=["solid","regular","light","thin","duotone","brands"],pn=[1,2,3,4,5,6,7,8,9,10],Ma=pn.concat([11,12,13,14,15,16,17,18,19,20]),La=[...Object.keys(Ta),...ja,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ct.GROUP,ct.SWAP_OPACITY,ct.PRIMARY,ct.SECONDARY].concat(pn.map(t=>"".concat(t,"x"))).concat(Ma.map(t=>"w-".concat(t))),Ra={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const N="___FONT_AWESOME___",$t=16,hn="fa",gn="svg-inline--fa",H="data-fa-i2svg",Ht="data-fa-pseudo-element",Fa="data-fa-pseudo-element-pending",ce="data-prefix",fe="data-icon",Pe="fontawesome-i2svg",Da="async",za=["HTML","HEAD","STYLE","SCRIPT"],yn=(()=>{try{return!0}catch{return!1}})();function rt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[_]}})}const bn=l({},un);bn[_]=l(l(l(l({},{"fa-duotone":"duotone"}),un[_]),ke.kit),ke["kit-duotone"]);const Ua=rt(bn),Gt=l({},Aa);Gt[_]=l(l(l(l({},{duotone:"fad"}),Gt[_]),Oe.kit),Oe["kit-duotone"]);const Ie=rt(Gt),Bt=l({},Wt);Bt[_]=l(l({},Bt[_]),Ca.kit);const ue=rt(Bt),qt=l({},Ia);qt[_]=l(l({},qt[_]),Ea.kit);rt(qt);const Wa=ma,vn="fa-layers-text",Ya=pa,$a=l({},ba);rt($a);const Ha=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],St=ha,Ga=[...wa,...La],tt=U.FontAwesomeConfig||{};function Ba(t){var e=v.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function qa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}v&&typeof v.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=qa(Ba(n));r!=null&&(tt[a]=r)});const xn={styleDefault:"solid",familyDefault:_,cssPrefix:hn,replacementClass:gn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};tt.familyPrefix&&(tt.cssPrefix=tt.familyPrefix);const K=l(l({},xn),tt);K.autoReplaceSvg||(K.observeMutations=!1);const m={};Object.keys(xn).forEach(t=>{Object.defineProperty(m,t,{enumerable:!0,set:function(e){K[t]=e,et.forEach(n=>n(m))},get:function(){return K[t]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){K.cssPrefix=t,et.forEach(e=>e(m))},get:function(){return K.cssPrefix}});U.FontAwesomeConfig=m;const et=[];function Va(t){return et.push(t),()=>{et.splice(et.indexOf(t),1)}}const D=$t,P={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Xa(t){if(!t||!L)return;const e=v.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=v.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const o=n[r],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=o)}return v.head.insertBefore(e,a),t}const Ka="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function nt(){let t=12,e="";for(;t-- >0;)e+=Ka[Math.random()*62|0];return e}function J(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function de(t){return t.classList?J(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function An(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ja(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(An(t[n]),'" '),"").trim()}function yt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function me(t){return t.size!==P.size||t.x!==P.x||t.y!==P.y||t.rotate!==P.rotate||t.flipX||t.flipY}function Qa(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),i="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(o," ").concat(s," ").concat(i)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:u,path:f}}function Za(t){let{transform:e,width:n=$t,height:a=$t,startCentered:r=!1}=t,o="";return r&&fn?o+="translate(".concat(e.x/D-n/2,"em, ").concat(e.y/D-a/2,"em) "):r?o+="translate(calc(-50% + ".concat(e.x/D,"em), calc(-50% + ").concat(e.y/D,"em)) "):o+="translate(".concat(e.x/D,"em, ").concat(e.y/D,"em) "),o+="scale(".concat(e.size/D*(e.flipX?-1:1),", ").concat(e.size/D*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var tr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Sn(){const t=hn,e=gn,n=m.cssPrefix,a=m.replacementClass;let r=tr;if(n!==t||a!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),i=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(i,".".concat(a))}return r}let Te=!1;function wt(){m.autoAddCss&&!Te&&(Xa(Sn()),Te=!0)}var er={mixout(){return{dom:{css:Sn,insertCss:wt}}},hooks(){return{beforeDOMElementCreation(){wt()},beforeI2svg(){wt()}}}};const j=U||{};j[N]||(j[N]={});j[N].styles||(j[N].styles={});j[N].hooks||(j[N].hooks={});j[N].shims||(j[N].shims=[]);var I=j[N];const wn=[],En=function(){v.removeEventListener("DOMContentLoaded",En),mt=1,wn.map(t=>t())};let mt=!1;L&&(mt=(v.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(v.readyState),mt||v.addEventListener("DOMContentLoaded",En));function nr(t){L&&(mt?setTimeout(t,0):wn.push(t))}function ot(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?An(t):"<".concat(e," ").concat(Ja(n),">").concat(a.map(ot).join(""),"</").concat(e,">")}function Ne(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Et=function(e,n,a,r){var o=Object.keys(e),s=o.length,i=n,u,f,d;for(a===void 0?(u=1,d=e[o[0]]):(u=0,d=a);u<s;u++)f=o[u],d=i(d,e[f],f,e);return d};function ar(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Vt(t){const e=ar(t);return e.length===1?e[0].toString(16):null}function rr(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function je(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Xt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=je(e);typeof I.hooks.addPack=="function"&&!a?I.hooks.addPack(t,je(e)):I.styles[t]=l(l({},I.styles[t]||{}),r),t==="fas"&&Xt("fa",e)}const{styles:at,shims:or}=I,_n=Object.keys(ue),sr=_n.reduce((t,e)=>(t[e]=Object.keys(ue[e]),t),{});let pe=null,Cn={},kn={},On={},Pn={},In={};function ir(t){return~Ga.indexOf(t)}function lr(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!ir(r)?r:null}const Tn=()=>{const t=a=>Et(at,(r,o,s)=>(r[s]=Et(o,a,{}),r),{});Cn=t((a,r,o)=>(r[3]&&(a[r[3]]=o),r[2]&&r[2].filter(i=>typeof i=="number").forEach(i=>{a[i.toString(16)]=o}),a)),kn=t((a,r,o)=>(a[o]=o,r[2]&&r[2].filter(i=>typeof i=="string").forEach(i=>{a[i]=o}),a)),In=t((a,r,o)=>{const s=r[2];return a[o]=o,s.forEach(i=>{a[i]=o}),a});const e="far"in at||m.autoFetchSvg,n=Et(or,(a,r)=>{const o=r[0];let s=r[1];const i=r[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:i}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:i}),a},{names:{},unicodes:{}});On=n.names,Pn=n.unicodes,pe=bt(m.styleDefault,{family:m.familyDefault})};Va(t=>{pe=bt(t.styleDefault,{family:m.familyDefault})});Tn();function he(t,e){return(Cn[t]||{})[e]}function cr(t,e){return(kn[t]||{})[e]}function $(t,e){return(In[t]||{})[e]}function Nn(t){return On[t]||{prefix:null,iconName:null}}function fr(t){const e=Pn[t],n=he("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function W(){return pe}const jn=()=>({prefix:null,iconName:null,rest:[]});function ur(t){let e=_;const n=_n.reduce((a,r)=>(a[r]="".concat(m.cssPrefix,"-").concat(r),a),{});return mn.forEach(a=>{(t.includes(n[a])||t.some(r=>sr[a].includes(r)))&&(e=a)}),e}function bt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=_}=e,a=Ua[n][t];if(n===gt&&!t)return"fad";const r=Ie[n][t]||Ie[n][a],o=t in I.styles?t:null;return r||o||null}function dr(t){let e=[],n=null;return t.forEach(a=>{const r=lr(m.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function Me(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function vt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=Yt.concat(Oa),o=Me(t.filter(p=>r.includes(p))),s=Me(t.filter(p=>!Yt.includes(p))),i=o.filter(p=>(a=p,!dn.includes(p))),[u=null]=i,f=ur(o),d=l(l({},dr(s)),{},{prefix:bt(u,{family:f})});return l(l(l({},d),gr({values:t,family:f,styles:at,config:m,canonical:d,givenPrefix:a})),mr(n,a,d))}function mr(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const o=e==="fa"?Nn(r):{},s=$(a,r);return r=o.iconName||s||r,a=o.prefix||a,a==="far"&&!at.far&&at.fas&&!m.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const pr=mn.filter(t=>t!==_||t!==gt),hr=Object.keys(Wt).filter(t=>t!==_).map(t=>Object.keys(Wt[t])).flat();function gr(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:o={},config:s={}}=t,i=n===gt,u=e.includes("fa-duotone")||e.includes("fad"),f=s.familyDefault==="duotone",d=a.prefix==="fad"||a.prefix==="fa-duotone";if(!i&&(u||f||d)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&pr.includes(n)&&(Object.keys(o).find(h=>hr.includes(h))||s.autoFetchSvg)){const h=xa.get(n).defaultShortPrefixId;a.prefix=h,a.iconName=$(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=W()||"fas"),a}class yr{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(o=>{this.definitions[o]=l(l({},this.definitions[o]||{}),r[o]),Xt(o,r[o]);const s=ue[_][o];s&&Xt(s,r[o]),Tn()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:o,iconName:s,icon:i}=a[r],u=i[2];e[o]||(e[o]={}),u.length>0&&u.forEach(f=>{typeof f=="string"&&(e[o][f]=i)}),e[o][s]=i}),e}}let Le=[],V={};const X={},br=Object.keys(X);function vr(t,e){let{mixoutsTo:n}=e;return Le=t,V={},Object.keys(X).forEach(a=>{br.indexOf(a)===-1&&delete X[a]}),Le.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(o=>{typeof r[o]=="function"&&(n[o]=r[o]),typeof r[o]=="object"&&Object.keys(r[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){const o=a.hooks();Object.keys(o).forEach(s=>{V[s]||(V[s]=[]),V[s].push(o[s])})}a.provides&&a.provides(X)}),n}function Kt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(V[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function G(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(V[t]||[]).forEach(o=>{o.apply(null,n)})}function Y(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return X[t]?X[t].apply(null,e):void 0}function Jt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||W();if(e)return e=$(n,e)||e,Ne(Mn.definitions,n,e)||Ne(I.styles,n,e)}const Mn=new yr,xr=()=>{m.autoReplaceSvg=!1,m.observeMutations=!1,G("noAuto")},Ar={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return L?(G("beforeI2svg",t),Y("pseudoElements2svg",t),Y("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,nr(()=>{wr({autoReplaceSvgRoot:e}),G("watch",t)})}},Sr={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:$(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=bt(t[0]);return{prefix:n,iconName:$(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(Wa))){const e=vt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||W(),iconName:$(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=W();return{prefix:e,iconName:$(e,t)||t}}}},C={noAuto:xr,config:m,dom:Ar,parse:Sr,library:Mn,findIconDefinition:Jt,toHtml:ot},wr=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=v}=t;(Object.keys(I.styles).length>0||m.autoFetchSvg)&&L&&m.autoReplaceSvg&&C.dom.i2svg({node:e})};function xt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ot(n))}}),Object.defineProperty(t,"node",{get:function(){if(!L)return;const n=v.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Er(t){let{children:e,main:n,mask:a,attributes:r,styles:o,transform:s}=t;if(me(s)&&n.found&&!a.found){const{width:i,height:u}=n,f={x:i/u/2,y:.5};r.style=yt(l(l({},o),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function _r(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:o}=t;const s=o===!0?"".concat(e,"-").concat(m.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:s}),children:a}]}]}function ge(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:o,symbol:s,title:i,maskId:u,titleId:f,extra:d,watchable:p=!1}=t,{width:h,height:y}=n.found?n:e,A=_a.includes(a),S=[m.replacementClass,r?"".concat(m.cssPrefix,"-").concat(r):""].filter(F=>d.classes.indexOf(F)===-1).filter(F=>F!==""||!!F).concat(d.classes).join(" ");let x={children:[],attributes:l(l({},d.attributes),{},{"data-prefix":a,"data-icon":r,class:S,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(y)})};const b=A&&!~d.classes.indexOf("fa-fw")?{width:"".concat(h/y*16*.0625,"em")}:{};p&&(x.attributes[H]=""),i&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(f||nt())},children:[i]}),delete x.attributes.title);const w=l(l({},x),{},{prefix:a,iconName:r,main:e,mask:n,maskId:u,transform:o,symbol:s,styles:l(l({},b),d.styles)}),{children:E,attributes:R}=n.found&&e.found?Y("generateAbstractMask",w)||{children:[],attributes:{}}:Y("generateAbstractIcon",w)||{children:[],attributes:{}};return w.children=E,w.attributes=R,s?_r(w):Er(w)}function Re(t){const{content:e,width:n,height:a,transform:r,title:o,extra:s,watchable:i=!1}=t,u=l(l(l({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});i&&(u[H]="");const f=l({},s.styles);me(r)&&(f.transform=Za({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const d=yt(f);d.length>0&&(u.style=d);const p=[];return p.push({tag:"span",attributes:u,children:[e]}),o&&p.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),p}function Cr(t){const{content:e,title:n,extra:a}=t,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=yt(a.styles);o.length>0&&(r.style=o);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:_t}=I;function Qt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(St.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(St.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(St.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const kr={found:!1,width:512,height:512};function Or(t,e){!yn&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Zt(t,e){let n=e;return e==="fa"&&m.styleDefault!==null&&(e=W()),new Promise((a,r)=>{if(n==="fa"){const o=Nn(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&_t[e]&&_t[e][t]){const o=_t[e][t];return a(Qt(o))}Or(t,e),a(l(l({},kr),{},{icon:m.showMissingIcons&&t?Y("missingIconAbstract")||{}:{}}))})}const Fe=()=>{},te=m.measurePerformance&&lt&&lt.mark&&lt.measure?lt:{mark:Fe,measure:Fe},Z='FA "6.7.2"',Pr=t=>(te.mark("".concat(Z," ").concat(t," begins")),()=>Ln(t)),Ln=t=>{te.mark("".concat(Z," ").concat(t," ends")),te.measure("".concat(Z," ").concat(t),"".concat(Z," ").concat(t," begins"),"".concat(Z," ").concat(t," ends"))};var ye={begin:Pr,end:Ln};const ft=()=>{};function De(t){return typeof(t.getAttribute?t.getAttribute(H):null)=="string"}function Ir(t){const e=t.getAttribute?t.getAttribute(ce):null,n=t.getAttribute?t.getAttribute(fe):null;return e&&n}function Tr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function Nr(){return m.autoReplaceSvg===!0?ut.replace:ut[m.autoReplaceSvg]||ut.replace}function jr(t){return v.createElementNS("http://www.w3.org/2000/svg",t)}function Mr(t){return v.createElement(t)}function Rn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?jr:Mr}=e;if(typeof t=="string")return v.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){a.appendChild(Rn(o,{ceFn:n}))}),a}function Lr(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const ut={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Rn(n),e)}),e.getAttribute(H)===null&&m.keepOriginalSource){let n=v.createComment(Lr(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~de(e).indexOf(m.replacementClass))return ut.replace(t);const a=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,i)=>(i===m.replacementClass||i.match(a)?s.toSvg.push(i):s.toNode.push(i),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const r=n.map(o=>ot(o)).join(`
`);e.setAttribute(H,""),e.innerHTML=r}};function ze(t){t()}function Fn(t,e){const n=typeof e=="function"?e:ft;if(t.length===0)n();else{let a=ze;m.mutateApproach===Da&&(a=U.requestAnimationFrame||ze),a(()=>{const r=Nr(),o=ye.begin("mutate");t.map(r),o(),n()})}}let be=!1;function Dn(){be=!0}function ee(){be=!1}let pt=null;function Ue(t){if(!Ce||!m.observeMutations)return;const{treeCallback:e=ft,nodeCallback:n=ft,pseudoElementsCallback:a=ft,observeMutationsRoot:r=v}=t;pt=new Ce(o=>{if(be)return;const s=W();J(o).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!De(i.addedNodes[0])&&(m.searchPseudoElements&&a(i.target),e(i.target)),i.type==="attributes"&&i.target.parentNode&&m.searchPseudoElements&&a(i.target.parentNode),i.type==="attributes"&&De(i.target)&&~Ha.indexOf(i.attributeName))if(i.attributeName==="class"&&Ir(i.target)){const{prefix:u,iconName:f}=vt(de(i.target));i.target.setAttribute(ce,u||s),f&&i.target.setAttribute(fe,f)}else Tr(i.target)&&n(i.target)})}),L&&pt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Rr(){pt&&pt.disconnect()}function Fr(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const o=r.split(":"),s=o[0],i=o.slice(1);return s&&i.length>0&&(a[s]=i.join(":").trim()),a},{})),n}function Dr(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=vt(de(t));return r.prefix||(r.prefix=W()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=cr(r.prefix,t.innerText)||he(r.prefix,Vt(t.innerText))),!r.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function zr(t){const e=J(t.attributes).reduce((r,o)=>(r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return m.autoA11y&&(n?e["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||nt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ur(){return{iconName:null,title:null,titleId:null,prefix:null,transform:P,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function We(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Dr(t),o=zr(t),s=Kt("parseNodeAttributes",{},t);let i=e.styleParser?Fr(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:P,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:i,attributes:o}},s)}const{styles:Wr}=I;function zn(t){const e=m.autoReplaceSvg==="nest"?We(t,{styleParser:!1}):We(t);return~e.extra.classes.indexOf(vn)?Y("generateLayersText",t,e):Y("generateSvgReplacementMutation",t,e)}function Yr(){return[...Sa,...Yt]}function Ye(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!L)return Promise.resolve();const n=v.documentElement.classList,a=d=>n.add("".concat(Pe,"-").concat(d)),r=d=>n.remove("".concat(Pe,"-").concat(d)),o=m.autoFetchSvg?Yr():dn.concat(Object.keys(Wr));o.includes("fa")||o.push("fa");const s=[".".concat(vn,":not([").concat(H,"])")].concat(o.map(d=>".".concat(d,":not([").concat(H,"])"))).join(", ");if(s.length===0)return Promise.resolve();let i=[];try{i=J(t.querySelectorAll(s))}catch{}if(i.length>0)a("pending"),r("complete");else return Promise.resolve();const u=ye.begin("onTree"),f=i.reduce((d,p)=>{try{const h=zn(p);h&&d.push(h)}catch(h){yn||h.name==="MissingIcon"&&console.error(h)}return d},[]);return new Promise((d,p)=>{Promise.all(f).then(h=>{Fn(h,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),u(),d()})}).catch(h=>{u(),p(h)})})}function $r(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;zn(t).then(n=>{n&&Fn([n],e)})}function Hr(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Jt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Jt(r||{})),t(a,l(l({},n),{},{mask:r}))}}const Gr=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=P,symbol:a=!1,mask:r=null,maskId:o=null,title:s=null,titleId:i=null,classes:u=[],attributes:f={},styles:d={}}=e;if(!t)return;const{prefix:p,iconName:h,icon:y}=t;return xt(l({type:"icon"},t),()=>(G("beforeDOMElementCreation",{iconDefinition:t,params:e}),m.autoA11y&&(s?f["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(i||nt()):(f["aria-hidden"]="true",f.focusable="false")),ge({icons:{main:Qt(y),mask:r?Qt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:h,transform:l(l({},P),n),symbol:a,title:s,maskId:o,titleId:i,extra:{attributes:f,styles:d,classes:u}})))};var Br={mixout(){return{icon:Hr(Gr)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ye,t.nodeCallback=$r,t}}},provides(t){t.i2svg=function(e){const{node:n=v,callback:a=()=>{}}=e;return Ye(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:o,prefix:s,transform:i,symbol:u,mask:f,maskId:d,extra:p}=n;return new Promise((h,y)=>{Promise.all([Zt(a,s),f.iconName?Zt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(A=>{let[S,x]=A;h([e,ge({icons:{main:S,mask:x},prefix:s,iconName:a,transform:i,symbol:u,maskId:d,title:r,titleId:o,extra:p,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:o,styles:s}=e;const i=yt(s);i.length>0&&(a.style=i);let u;return me(o)&&(u=Y("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(u||r.icon),{children:n,attributes:a}}}},qr={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return xt({type:"layer"},()=>{G("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(o=>{a=a.concat(o.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Vr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:o={}}=e;return xt({type:"counter",content:t},()=>(G("beforeDOMElementCreation",{content:t,params:e}),Cr({content:t.toString(),title:n,extra:{attributes:r,styles:o,classes:["".concat(m.cssPrefix,"-layers-counter"),...a]}})))}}}},Xr={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=P,title:a=null,classes:r=[],attributes:o={},styles:s={}}=e;return xt({type:"text",content:t},()=>(G("beforeDOMElementCreation",{content:t,params:e}),Re({content:t,transform:l(l({},P),n),title:a,extra:{attributes:o,styles:s,classes:["".concat(m.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:o}=n;let s=null,i=null;if(fn){const u=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();s=f.width/u,i=f.height/u}return m.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,Re({content:e.innerHTML,width:s,height:i,transform:r,title:a,extra:o,watchable:!0})])}}};const Kr=new RegExp('"',"ug"),$e=[1105920,1112319],He=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),va),Ra),Pa),ne=Object.keys(He).reduce((t,e)=>(t[e.toLowerCase()]=He[e],t),{}),Jr=Object.keys(ne).reduce((t,e)=>{const n=ne[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Qr(t){const e=t.replace(Kr,""),n=rr(e,0),a=n>=$e[0]&&n<=$e[1],r=e.length===2?e[0]===e[1]:!1;return{value:Vt(r?e[0]:e),isSecondary:a||r}}function Zr(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(ne[n]||{})[r]||Jr[n]}function Ge(t,e){const n="".concat(Fa).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const s=J(t.children).filter(h=>h.getAttribute(Ht)===e)[0],i=U.getComputedStyle(t,e),u=i.getPropertyValue("font-family"),f=u.match(Ya),d=i.getPropertyValue("font-weight"),p=i.getPropertyValue("content");if(s&&!f)return t.removeChild(s),a();if(f&&p!=="none"&&p!==""){const h=i.getPropertyValue("content");let y=Zr(u,d);const{value:A,isSecondary:S}=Qr(h),x=f[0].startsWith("FontAwesome");let b=he(y,A),w=b;if(x){const E=fr(A);E.iconName&&E.prefix&&(b=E.iconName,y=E.prefix)}if(b&&!S&&(!s||s.getAttribute(ce)!==y||s.getAttribute(fe)!==w)){t.setAttribute(n,w),s&&t.removeChild(s);const E=Ur(),{extra:R}=E;R.attributes[Ht]=e,Zt(b,y).then(F=>{const st=ge(l(l({},E),{},{icons:{main:F,mask:jn()},prefix:y,iconName:w,extra:R,watchable:!0})),B=v.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(B,t.firstChild):t.appendChild(B),B.outerHTML=st.map(q=>ot(q)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function to(t){return Promise.all([Ge(t,"::before"),Ge(t,"::after")])}function eo(t){return t.parentNode!==document.head&&!~za.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ht)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Be(t){if(L)return new Promise((e,n)=>{const a=J(t.querySelectorAll("*")).filter(eo).map(to),r=ye.begin("searchPseudoElements");Dn(),Promise.all(a).then(()=>{r(),ee(),e()}).catch(()=>{r(),ee(),n()})})}var no={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Be,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=v}=e;m.searchPseudoElements&&Be(n)}}};let qe=!1;var ao={mixout(){return{dom:{unwatch(){Dn(),qe=!0}}}},hooks(){return{bootstrap(){Ue(Kt("mutationObserverCallbacks",{}))},noAuto(){Rr()},watch(t){const{observeMutationsRoot:e}=t;qe?ee():Ue(Kt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Ve=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),o=r[0];let s=r.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var ro={mixout(){return{parse:{transform:t=>Ve(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Ve(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:o}=e;const s={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(i," ").concat(u," ").concat(f)},p={transform:"translate(".concat(o/2*-1," -256)")},h={outer:s,inner:d,path:p};return{tag:"g",attributes:l({},h.outer),children:[{tag:"g",attributes:l({},h.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),h.path)}]}]}}}};const Ct={x:0,y:0,width:"100%",height:"100%"};function Xe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function oo(t){return t.tag==="g"?t.children:[t]}var so={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?vt(n.split(" ").map(r=>r.trim())):jn();return a.prefix||(a.prefix=W()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:o,maskId:s,transform:i}=e;const{width:u,icon:f}=r,{width:d,icon:p}=o,h=Qa({transform:i,containerWidth:d,iconWidth:u}),y={tag:"rect",attributes:l(l({},Ct),{},{fill:"white"})},A=f.children?{children:f.children.map(Xe)}:{},S={tag:"g",attributes:l({},h.inner),children:[Xe(l({tag:f.tag,attributes:l(l({},f.attributes),h.path)},A))]},x={tag:"g",attributes:l({},h.outer),children:[S]},b="mask-".concat(s||nt()),w="clip-".concat(s||nt()),E={tag:"mask",attributes:l(l({},Ct),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,x]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:oo(p)},E]};return n.push(R,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(b,")")},Ct)}),{children:n,attributes:a}}}},io={provides(t){let e=!1;U.matchMedia&&(e=U.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=l(l({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},lo={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},co=[er,Br,qr,Vr,Xr,no,ao,ro,so,io,lo];vr(co,{mixoutsTo:C});C.noAuto;C.config;C.library;C.dom;const ae=C.parse;C.findIconDefinition;C.toHtml;const fo=C.icon;C.layer;C.text;C.counter;var kt={exports:{}},Ot,Ke;function uo(){if(Ke)return Ot;Ke=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Ot=t,Ot}var Pt,Je;function mo(){if(Je)return Pt;Je=1;var t=uo();function e(){}function n(){}return n.resetWarningCache=e,Pt=function(){function a(s,i,u,f,d,p){if(p!==t){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}a.isRequired=a;function r(){return a}var o={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:r,element:a,elementType:a,instanceOf:r,node:a,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:n,resetWarningCache:e};return o.PropTypes=o,o},Pt}var Qe;function po(){return Qe||(Qe=1,kt.exports=mo()()),kt.exports}var ho=po();const g=an(ho);var go={};function re(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=Array(e);n<e;n++)a[n]=t[n];return a}function yo(t){if(Array.isArray(t))return t}function bo(t){if(Array.isArray(t))return re(t)}function z(t,e,n){return(e=Co(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function vo(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function xo(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a,r,o,s,i=[],u=!0,f=!1;try{if(o=(n=n.call(t)).next,e!==0)for(;!(u=(a=o.call(n)).done)&&(i.push(a.value),i.length!==e);u=!0);}catch(d){f=!0,r=d}finally{try{if(!u&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw r}}return i}}function Ao(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function So(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ze(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ze(Object(n),!0).forEach(function(a){z(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ze(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function wo(t,e){if(t==null)return{};var n,a,r=Eo(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function Eo(t,e){if(t==null)return{};var n={};for(var a in t)if({}.hasOwnProperty.call(t,a)){if(e.indexOf(a)!==-1)continue;n[a]=t[a]}return n}function tn(t,e){return yo(t)||xo(t,e)||Un(t,e)||Ao()}function oe(t){return bo(t)||vo(t)||Un(t)||So()}function _o(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Co(t){var e=_o(t,"string");return typeof e=="symbol"?e:e+""}function ht(t){"@babel/helpers - typeof";return ht=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ht(t)}function Un(t,e){if(t){if(typeof t=="string")return re(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?re(t,e):void 0}}var ko="7.0.0-alpha1",se;try{var Oo=require("@fortawesome/fontawesome-svg-core/package.json");se=Oo.version}catch{se=go.FA_VERSION||"7.0.0-alpha8"}function Po(t){var e=t.beat,n=t.fade,a=t.beatFade,r=t.bounce,o=t.shake,s=t.flash,i=t.spin,u=t.spinPulse,f=t.spinReverse,d=t.pulse,p=t.fixedWidth,h=t.inverse,y=t.border,A=t.listItem,S=t.flip,x=t.size,b=t.rotation,w=t.pull,E=t.swapOpacity,R=t.rotateBy,F=t.widthAuto,st=Io(se,ko),B=z(z(z(z(z(z({"fa-beat":e,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":r,"fa-shake":o,"fa-flash":s,"fa-spin":i,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":p,"fa-inverse":h,"fa-border":y,"fa-li":A,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},"fa-".concat(x),typeof x<"u"&&x!==null),"fa-rotate-".concat(b),typeof b<"u"&&b!==null&&b!==0),"fa-pull-".concat(w),typeof w<"u"&&w!==null),"fa-swap-opacity",E),"fa-rotate-by",st&&R),"fa-width-auto",st&&F);return Object.keys(B).map(function(q){return B[q]?q:null}).filter(function(q){return q})}function Io(t,e){for(var n=t.split("-"),a=tn(n,2),r=a[0],o=a[1],s=e.split("-"),i=tn(s,2),u=i[0],f=i[1],d=r.split("."),p=u.split("."),h=0;h<Math.max(d.length,p.length);h++){var y=d[h]||"0",A=p[h]||"0",S=parseInt(y,10),x=parseInt(A,10);if(S!==x)return S>x}for(var b=0;b<Math.max(d.length,p.length);b++){var w=d[b]||"0",E=p[b]||"0";if(w!==E&&w.length!==E.length)return w.length<E.length}return!(o&&!f)}function To(t){return t=t-0,t===t}function Wn(t){return To(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var No=["style"];function jo(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Mo(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=Wn(n.slice(0,a)),o=n.slice(a+1).trim();return r.startsWith("webkit")?e[jo(r)]=o:e[r]=o,e},{})}function Yn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(u){return Yn(t,u)}),r=Object.keys(e.attributes||{}).reduce(function(u,f){var d=e.attributes[f];switch(f){case"class":u.attrs.className=d,delete e.attributes.class;break;case"style":u.attrs.style=Mo(d);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?u.attrs[f.toLowerCase()]=d:u.attrs[Wn(f)]=d}return u},{attrs:{}}),o=n.style,s=o===void 0?{}:o,i=wo(n,No);return r.attrs.style=O(O({},r.attrs.style),s),t.apply(void 0,[e.tag,O(O({},r.attrs),i)].concat(oe(a)))}var $n=!1;try{$n=!0}catch{}function Lo(){if(!$n&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function en(t){if(t&&ht(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ae.icon)return ae.icon(t);if(t===null)return null;if(t&&ht(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function It(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?z({},t,e):{}}var nn={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,rotateBy:!1,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1,widthAuto:!1},ve=k.forwardRef(function(t,e){var n=O(O({},nn),t),a=n.icon,r=n.mask,o=n.symbol,s=n.className,i=n.title,u=n.titleId,f=n.maskId,d=en(a),p=It("classes",[].concat(oe(Po(n)),oe((s||"").split(" ")))),h=It("transform",typeof n.transform=="string"?ae.transform(n.transform):n.transform),y=It("mask",en(r)),A=fo(d,O(O(O(O({},p),h),y),{},{symbol:o,title:i,titleId:u,maskId:f}));if(!A)return Lo("Could not find icon",d),null;var S=A.abstract,x={ref:e};return Object.keys(n).forEach(function(b){nn.hasOwnProperty(b)||(x[b]=n[b])}),Ro(S[0],x)});ve.displayName="FontAwesomeIcon";ve.propTypes={beat:g.bool,border:g.bool,beatFade:g.bool,bounce:g.bool,className:g.string,fade:g.bool,flash:g.bool,mask:g.oneOfType([g.object,g.array,g.string]),maskId:g.string,fixedWidth:g.bool,inverse:g.bool,flip:g.oneOf([!0,!1,"horizontal","vertical","both"]),icon:g.oneOfType([g.object,g.array,g.string]),listItem:g.bool,pull:g.oneOf(["right","left"]),pulse:g.bool,rotation:g.oneOf([0,90,180,270]),rotateBy:g.bool,shake:g.bool,size:g.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:g.bool,spinPulse:g.bool,spinReverse:g.bool,symbol:g.oneOfType([g.bool,g.string]),title:g.string,titleId:g.string,transform:g.oneOfType([g.string,g.object]),swapOpacity:g.bool,widthAuto:g.bool};var Ro=Yn.bind(null,k.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Fo={prefix:"fas",iconName:"compass",icon:[512,512,[129517],"f14e","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},Do={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"]},zo={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},Uo={prefix:"fas",iconName:"earth-americas",icon:[512,512,[127758,"earth","earth-america","globe-americas"],"f57d","M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5l0 39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9l0 39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7l0-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1L257 256c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]},Wo=Uo,Yo={prefix:"fas",iconName:"map",icon:[576,512,[128506,62072],"f279","M384 476.1L192 421.2l0-385.3L384 90.8l0 385.3zm32-1.2l0-386.5L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3l0 334.8c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2l0 386.5L32.9 474.5C17.1 480.8 0 469.2 0 452.2L0 117.4c0-9.8 6-18.6 15.1-22.3z"]},$o=({id:t})=>{const e=[Yo,Do,Fo,zo,Wo],n=e[Math.floor(Math.random()*e.length)];return c.jsx("div",{children:c.jsx("table",{style:{width:"100%",borderCollapse:"collapse"},children:c.jsx("tbody",{children:c.jsxs("tr",{children:[c.jsx("td",{style:{width:"20%",padding:"1rem",verticalAlign:"middle",textAlign:"center"},children:c.jsx(ve,{icon:n,size:"3x"})}),c.jsx("td",{style:{width:"80%",padding:"1rem"},children:c.jsx("table",{style:{width:"100%"},children:c.jsxs("tbody",{children:[c.jsx("tr",{children:c.jsxs("td",{children:[c.jsx("strong",{children:"Name: "}),c.jsx("slot",{name:"mapNameSlot"})]})}),c.jsx("tr",{children:c.jsxs("td",{children:[c.jsx("strong",{children:"Description: "}),c.jsx("slot",{name:"mapDescSlot"})]})})]})})})]})})})},t)},Ho=({id:t,name:e,description:n,imageUrl:a,imageAlt:r})=>c.jsx(Kn,{className:"mechanic-card",children:c.jsx("div",{className:"mechanic-card-img",style:{backgroundImage:`url(${a})`},role:"img","aria-label":r||e,children:c.jsxs("div",{className:"mechanic-card-overlay",children:[c.jsx("div",{className:"mechanic-card-name",children:e}),c.jsx("div",{className:"mechanic-card-description",children:n})]})})},t),Go=({isEditMode:t})=>{const e=typeof t=="string"?t.toLowerCase()==="true":!!t,n=Ut(null),[a,r]=dt([]);return ie(()=>{if(e||!n.current)return;const o=n.current,s=()=>{var p;const f=((p=o.assignedElements({flatten:!0})[0])==null?void 0:p.querySelectorAll(".row"))||[],d=Array.from(f).map(h=>{var S,x,b;const y=h.querySelectorAll('.component-paragraph[data-lfr-editable-type="rich-text"]'),A=h.querySelector('img[data-lfr-editable-type="image"]');return{id:((S=y[0])==null?void 0:S.textContent.trim())||"",name:((x=y[1])==null?void 0:x.textContent.trim())||"",description:((b=y[2])==null?void 0:b.textContent.trim())||"",imageUrl:(A==null?void 0:A.src)||"",imageAlt:(A==null?void 0:A.alt)||""}});r(d)},i=new MutationObserver(s);return i.observe(o,{childList:!0,subtree:!0}),s(),()=>i.disconnect()},[e]),c.jsxs(Xn.ContainerFluid,{children:[c.jsx("slot",{name:"dropZoneSlot",ref:n}),!e&&c.jsx("div",{className:"d-flex flex-wrap justify-content-center gap-3",children:a.length===0?c.jsx("div",{className:"placeholder-text",children:"Featured stores will appear here."}):a.map(o=>c.jsx(Ho,{...o},o.id))})]})};function Hn(t,e=[]){t.host.style.visibility="hidden",e.forEach(a=>{const r=document.createElement("style");r.textContent=a,t.appendChild(r)}),document.querySelectorAll('link[rel="stylesheet"]').forEach(a=>{const r=a.cloneNode(!0);t.appendChild(r)}),requestAnimationFrame(()=>{t.host.style.visibility=""})}const Gn=".mechanic-card{width:300px;transition:transform .2s ease-in-out;margin:10px}.mechanic-card:hover{transform:scale(1.05);z-index:1}.mechanic-card-img{width:100%;padding-bottom:100%;background-size:cover;background-position:center;position:relative;border-radius:8px;overflow:hidden}.mechanic-card-overlay{position:absolute;bottom:0;width:100%;background:#0009;color:#fff;text-align:center;padding:.5rem}.mechanic-card-name{font-size:1.25rem;font-weight:700}.mechanic-card-description{font-size:1rem}";function Bo(){return c.jsx("h1",{children:T.Language.get("welcome")})}function qo(){return c.jsx("p",{children:T.Language.get("description")})}function Vo(){return c.jsx("button",{children:T.Language.get("save")})}function Xo(){return c.jsxs("button",{children:[c.jsx("span",{"aria-hidden":"true",children:"✖️"})," ",T.Language.get("cancel")]})}function Ko(){return c.jsx("div",{style:{background:"#dff0d8",color:"#3c763d",padding:"12px",borderRadius:"4px"},children:T.Language.get("success")})}function Jo(){return c.jsx("div",{style:{background:"#fcf8e3",color:"#8a6d3b",padding:"12px",borderRadius:"4px"},children:T.Language.get("i18ndemo.custom.alert")})}function Qo(){return c.jsx("button",{children:T.Language.get("i18ndemo.magic.button")})}function Zo(){return c.jsxs("div",{style:{padding:24,fontFamily:"sans-serif"},children:[c.jsx(Bo,{}),c.jsx(qo,{}),c.jsxs("div",{style:{margin:"16px 0"},children:[c.jsx(Vo,{})," ",c.jsx(Xo,{})," ",c.jsx(Qo,{})]}),c.jsx(Ko,{}),c.jsx("div",{style:{marginTop:12},children:c.jsx(Jo,{})})]})}class ts extends HTMLElement{constructor(){super(),this._root=null,this._shadow=this.attachShadow({mode:"open"})}connectedCallback(){this._root=M.createRoot(this._shadow),this._root.render(c.jsx(k.StrictMode,{children:c.jsx(ea,{id:this.getAttribute("id")})}))}disconnectedCallback(){this._root&&(this._root.unmount(),this._root=null)}}class es extends HTMLElement{constructor(){super(),this._root=null,this._shadow=this.attachShadow({mode:"open"})}connectedCallback(){this._root=M.createRoot(this._shadow),this._root.render(c.jsx(k.StrictMode,{children:c.jsx(na,{isEditMode:this.getAttribute("isEditMode")})}))}disconnectedCallback(){this._root&&(this._root.unmount(),this._root=null)}}class ns extends HTMLElement{constructor(){super(),this._root=null,this._shadow=this.attachShadow({mode:"open"})}connectedCallback(){this._root=M.createRoot(this._shadow),this._root.render(c.jsx(k.StrictMode,{children:c.jsx(aa,{})}))}disconnectedCallback(){this._root&&(this._root.unmount(),this._root=null)}}class as extends HTMLElement{constructor(){super(),this._root=null,this._shadow=this.attachShadow({mode:"open"})}connectedCallback(){this._root=M.createRoot(this._shadow),this._root.render(c.jsx(k.StrictMode,{children:c.jsx(ra,{})}))}disconnectedCallback(){this._root&&(this._root.unmount(),this._root=null)}}class rs extends HTMLElement{constructor(){super(),this._root=null,this._shadow=this.attachShadow({mode:"open"})}connectedCallback(){this._root=M.createRoot(this._shadow),this._root.render(c.jsx(k.StrictMode,{children:c.jsx(oa,{})}))}disconnectedCallback(){this._root&&(this._root.unmount(),this._root=null)}}class os extends HTMLElement{constructor(){super(),this._root=null,this._shadow=this.attachShadow({mode:"open"})}connectedCallback(){this._root=M.createRoot(this._shadow),this._root.render(c.jsx(k.StrictMode,{children:c.jsx(ca,{isEditMode:this.getAttribute("isEditMode"),id:this.getAttribute("id")},this.getAttribute("id"))}))}disconnectedCallback(){this._root&&(this._root.unmount(),this._root=null)}}class ss extends HTMLElement{constructor(){super(),this._root=null,this._shadow=this.attachShadow({mode:"open"})}connectedCallback(){this._root=M.createRoot(this._shadow),this._root.render(c.jsx(k.StrictMode,{children:c.jsx($o,{id:this.getAttribute("id")})}))}disconnectedCallback(){this._root&&(this._root.unmount(),this._root=null)}}class is extends HTMLElement{constructor(){super(),this._root=null,this._shadow=this.attachShadow({mode:"open"}),Hn(this._shadow,[Gn])}connectedCallback(){this._root=M.createRoot(this._shadow),this._root.render(c.jsx(k.StrictMode,{children:c.jsx(Go,{isEditMode:this.getAttribute("isEditMode")})}))}disconnectedCallback(){this._root&&(this._root.unmount(),this._root=null)}}class ls extends HTMLElement{constructor(){super(),this._root=null,this._shadow=this.attachShadow({mode:"open"}),Hn(this._shadow,[Gn])}connectedCallback(){this._root=M.createRoot(this._shadow),this._root.render(c.jsx(k.StrictMode,{children:c.jsx(Zo,{})}))}disconnectedCallback(){this._root&&(this._root.unmount(),this._root=null)}}const Tt="acet-idprops",Nt="acet-mode-display",jt="acet-liferay-on",Mt="acet-liferay-fire",Lt="acet-single-slot",Rt="acet-mapping-slots",Ft="acet-mapping-display",Dt="acet-featured-stores",zt="acet-i18n-demo";customElements.get(Tt)?console.log(`Skipping registration for <${Tt}> (already registered)`):customElements.define(Tt,ts);customElements.get(Nt)?console.log(`Skipping registration for <${Nt}> (already registered)`):customElements.define(Nt,es);customElements.get(jt)?console.log(`Skipping registration for <${jt}> (already registered)`):customElements.define(jt,ns);customElements.get(Mt)?console.log(`Skipping registration for <${Mt}> (already registered)`):customElements.define(Mt,as);customElements.get(Lt)?console.log(`Skipping registration for <${Lt}> (already registered)`):customElements.define(Lt,rs);customElements.get(Rt)?console.log(`Skipping registration for <${Rt}> (already registered)`):customElements.define(Rt,os);customElements.get(Ft)?console.log(`Skipping registration for <${Ft}> (already registered)`):customElements.define(Ft,ss);customElements.get(Dt)?console.log(`Skipping registration for <${Dt}> (already registered)`):customElements.define(Dt,is);customElements.get(zt)?console.log(`Skipping registration for <${zt}> (already registered)`):customElements.define(zt,ls);

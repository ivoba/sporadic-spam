import"./hoisted.CWPXpkFr.js";var m={allRenderFn:!1,cmpDidLoad:!0,cmpDidUnload:!1,cmpDidUpdate:!0,cmpDidRender:!0,cmpWillLoad:!0,cmpWillUpdate:!0,cmpWillRender:!0,connectedCallback:!0,disconnectedCallback:!0,element:!0,event:!0,hasRenderFn:!0,lifecycle:!0,hostListener:!0,hostListenerTargetWindow:!0,hostListenerTargetDocument:!0,hostListenerTargetBody:!0,hostListenerTargetParent:!1,hostListenerTarget:!0,member:!0,method:!0,mode:!0,observeAttribute:!0,prop:!0,propMutable:!0,reflect:!0,scoped:!0,shadowDom:!0,slot:!0,cssAnnotations:!0,state:!0,style:!0,formAssociated:!1,svg:!0,updatable:!0,vdomAttribute:!0,vdomXlink:!0,vdomClass:!0,vdomFunctional:!0,vdomKey:!0,vdomListener:!0,vdomRef:!0,vdomPropOrAttr:!0,vdomRender:!0,vdomStyle:!0,vdomText:!0,watchCallback:!0,taskQueue:!0,hotModuleReplacement:!1,isDebug:!1,isDev:!1,isTesting:!1,hydrateServerSide:!1,hydrateClientSide:!1,lifecycleDOMEvents:!1,lazyLoad:!1,profile:!1,slotRelocation:!0,appendChildSlotFix:!1,cloneNodeFix:!1,hydratedAttribute:!1,hydratedClass:!0,scriptDataOpts:!1,scopedSlotTextContentFix:!1,shadowDomShim:!1,slotChildNodesFix:!1,invisiblePrehydration:!0,propBoolean:!0,propNumber:!0,propString:!0,constructableCSS:!0,cmpShouldUpdate:!0,devTools:!1,shadowDelegatesFocus:!0,initializeNextTick:!1,asyncLoading:!0,asyncQueue:!1,transformTagName:!1,attachStyles:!0,experimentalSlotFixes:!1},we="app",Ae=Object.defineProperty,Re=(e,t)=>{for(var s in t)Ae(e,s,{get:t[s],enumerable:!0})},fe=new WeakMap,R=e=>fe.get(e),Oe=(e,t)=>{const s={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return s.$onReadyPromise$=new Promise(r=>s.$onReadyResolve$=r),e["s-p"]=[],e["s-rc"]=[],fe.set(e,s)},Y=(e,t)=>t in e,P=(e,t)=>(0,console.error)(e,t),H=new Map,Pe=[],Fe="slot-fb{display:contents}slot-fb[hidden]{display:none}",Z="http://www.w3.org/1999/xlink",F=typeof window<"u"?window:{},S=F.document||{head:{}},je=F.HTMLElement||class{},v={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,s,r)=>e.addEventListener(t,s,r),rel:(e,t,s,r)=>e.removeEventListener(t,s,r),ce:(e,t)=>new CustomEvent(e,t)},He=(()=>{let e=!1;try{S.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=!0}}))}catch{}return e})(),Ue=e=>Promise.resolve(e),de=(()=>{try{return new CSSStyleSheet,typeof new CSSStyleSheet().replaceSync=="function"}catch{}return!1})(),B=!1,V=[],ue=[],Me=(e,t)=>s=>{e.push(s),B||(B=!0,t&&v.$flags$&4?I(W):v.raf(W))},ee=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(s){P(s)}e.length=0},W=()=>{ee(V),ee(ue),(B=V.length>0)&&v.raf(W)},I=e=>Ue().then(e),Ne=Me(ue,!0),te={},Ce="http://www.w3.org/2000/svg",De="http://www.w3.org/1999/xhtml",Be=e=>e!=null,Q=e=>(e=typeof e,e==="object"||e==="function");function We(e){var t,s,r;return(r=(s=(t=e.head)==null?void 0:t.querySelector('meta[name="csp-nonce"]'))==null?void 0:s.getAttribute("content"))!=null?r:void 0}var ze={};Re(ze,{err:()=>he,map:()=>qe,ok:()=>z,unwrap:()=>Ie,unwrapErr:()=>Qe});var z=e=>({isOk:!0,isErr:!1,value:e}),he=e=>({isOk:!1,isErr:!0,value:e});function qe(e,t){if(e.isOk){const s=t(e.value);return s instanceof Promise?s.then(r=>z(r)):z(s)}if(e.isErr){const s=e.value;return he(s)}throw"should never get here"}var Ie=e=>{if(e.isOk)return e.value;throw e.value},Qe=e=>{if(e.isErr)return e.value;throw e.value},L=(e,t="")=>()=>{},U=(e,t,...s)=>{let r=null,n=null,l=null,a=!1,i=!1;const o=[],c=$=>{for(let u=0;u<$.length;u++)r=$[u],Array.isArray(r)?c(r):r!=null&&typeof r!="boolean"&&((a=typeof e!="function"&&!Q(r))&&(r=String(r)),a&&i?o[o.length-1].$text$+=r:o.push(a?M(null,r):r),i=a)};if(c(s),t){t.key&&(n=t.key),t.name&&(l=t.name);{const $=t.className||t.class;$&&(t.class=typeof $!="object"?$:Object.keys($).filter(u=>$[u]).join(" "))}}if(typeof e=="function")return e(t===null?{}:t,o,Ke);const d=M(e,null);return d.$attrs$=t,o.length>0&&(d.$children$=o),d.$key$=n,d.$name$=l,d},M=(e,t)=>{const s={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};return s.$attrs$=null,s.$key$=null,s.$name$=null,s},Xe={},Ge=e=>e&&e.$tag$===Xe,Ke={forEach:(e,t)=>e.map(se).forEach(t),map:(e,t)=>e.map(se).map(t).map(Je)},se=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),Je=e=>{if(typeof e.vtag=="function"){const s={...e.vattrs};return e.vkey&&(s.key=e.vkey),e.vname&&(s.name=e.vname),U(e.vtag,s,...e.vchildren||[])}const t=M(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},Ye=e=>Pe.map(t=>t(e)).find(t=>!!t),Ze=(e,t)=>e!=null&&!Q(e)?t&4?e==="false"?!1:e===""||!!e:t&2?parseFloat(e):t&1?String(e):e:e,Ve=(e,t,s)=>{const r=v.ce(t,s);return e.dispatchEvent(r),r},re=new WeakMap,et=(e,t,s)=>{let r=H.get(e);de&&s?(r=r||new CSSStyleSheet,typeof r=="string"?r=t:r.replaceSync(t)):r=t,H.set(e,r)},tt=(e,t,s)=>{var r;const n=pe(t,s),l=H.get(n);if(e=e.nodeType===11?e:S,l)if(typeof l=="string"){e=e.head||e;let a=re.get(e),i;if(a||re.set(e,a=new Set),!a.has(n)){{i=S.createElement("style"),i.innerHTML=l;const o=(r=v.$nonce$)!=null?r:We(S);if(o!=null&&i.setAttribute("nonce",o),!(t.$flags$&1))if(e.nodeName==="HEAD"){const c=e.querySelectorAll("link[rel=preconnect]"),d=c.length>0?c[c.length-1].nextSibling:e.querySelector("style");e.insertBefore(i,d)}else if("host"in e)if(de){const c=new CSSStyleSheet;c.replaceSync(l),e.adoptedStyleSheets=[c,...e.adoptedStyleSheets]}else{const c=e.querySelector("style");c?c.innerHTML=l+c.innerHTML:e.prepend(i)}else e.append(i);t.$flags$&1&&e.nodeName!=="HEAD"&&e.insertBefore(i,null)}t.$flags$&4&&(i.innerHTML+=Fe),a&&a.add(n)}}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n},st=e=>{const t=e.$cmpMeta$,s=e.$hostElement$,r=t.$flags$,n=L("attachStyles",t.$tagName$),l=tt(s.shadowRoot?s.shadowRoot:s.getRootNode(),t,e.$modeName$);r&10&&r&2&&(s["s-sc"]=l,s.classList.add(l+"-h"),r&2&&s.classList.add(l+"-s")),n()},pe=(e,t)=>"sc-"+(t&&e.$flags$&32?e.$tagName$+"-"+t:e.$tagName$),ne=(e,t,s,r,n,l)=>{if(s!==r){let a=Y(e,t),i=t.toLowerCase();if(t==="class"){const o=e.classList,c=le(s),d=le(r);o.remove(...c.filter($=>$&&!d.includes($))),o.add(...d.filter($=>$&&!c.includes($)))}else if(t==="style"){for(const o in s)(!r||r[o]==null)&&(o.includes("-")?e.style.removeProperty(o):e.style[o]="");for(const o in r)(!s||r[o]!==s[o])&&(o.includes("-")?e.style.setProperty(o,r[o]):e.style[o]=r[o])}else if(t!=="key")if(t==="ref")r&&r(e);else if(!e.__lookupSetter__(t)&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"?t=t.slice(3):Y(F,i)?t=i.slice(2):t=i[2]+t.slice(3),s||r){const o=t.endsWith(ve);t=t.replace(nt,""),s&&v.rel(e,t,s,o),r&&v.ael(e,t,r,o)}}else{const o=Q(r);if((a||o&&r!==null)&&!n)try{if(e.tagName.includes("-"))e[t]=r;else{const d=r??"";t==="list"?a=!1:(s==null||e[t]!=d)&&(typeof e.__lookupSetter__(t)=="function"?e[t]=d:e.setAttribute(t,d))}}catch{}let c=!1;i!==(i=i.replace(/^xlink\:?/,""))&&(t=i,c=!0),r==null||r===!1?(r!==!1||e.getAttribute(t)==="")&&(c?e.removeAttributeNS(Z,t):e.removeAttribute(t)):(!a||l&4||n)&&!o&&(r=r===!0?"":r,c?e.setAttributeNS(Z,t,r):e.setAttribute(t,r))}}},rt=/\s/,le=e=>e?e.split(rt):[],ve="Capture",nt=new RegExp(ve+"$"),ge=(e,t,s)=>{const r=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$,n=e&&e.$attrs$||te,l=t.$attrs$||te;for(const a of oe(Object.keys(n)))a in l||ne(r,a,n[a],void 0,s,t.$flags$);for(const a of oe(Object.keys(l)))ne(r,a,n[a],l[a],s,t.$flags$)};function oe(e){return e.includes("ref")?[...e.filter(t=>t!=="ref"),"ref"]:e}var E,q,A,N=!1,C=!1,X=!1,y=!1,D=(e,t,s,r)=>{var n;const l=t.$children$[s];let a=0,i,o,c;if(N||(X=!0,l.$tag$==="slot"&&(E&&r.classList.add(E+"-s"),l.$flags$|=l.$children$?2:1)),l.$text$!==null)i=l.$elm$=S.createTextNode(l.$text$);else if(l.$flags$&1)i=l.$elm$=S.createTextNode("");else{if(y||(y=l.$tag$==="svg"),i=l.$elm$=S.createElementNS(y?Ce:De,!N&&m.slotRelocation&&l.$flags$&2?"slot-fb":l.$tag$),y&&l.$tag$==="foreignObject"&&(y=!1),ge(null,l,y),!!i.getRootNode().querySelector("body")&&m.scoped&&Be(E)&&i["s-si"]!==E&&i.classList.add(i["s-si"]=E),K(i,r),l.$children$)for(a=0;a<l.$children$.length;++a)o=D(e,l,a,i),o&&i.appendChild(o);l.$tag$==="svg"?y=!1:i.tagName==="foreignObject"&&(y=!0)}return i["s-hn"]=A,l.$flags$&3&&(i["s-sr"]=!0,i["s-cr"]=q,i["s-sn"]=l.$name$||"",i["s-rf"]=(n=l.$attrs$)==null?void 0:n.ref,c=e&&e.$children$&&e.$children$[s],c&&c.$tag$===l.$tag$&&e.$elm$&&O(e.$elm$,!1)),i},O=(e,t)=>{v.$flags$|=1;const s=Array.from(e.childNodes);if(e["s-sr"]&&m.experimentalSlotFixes){let r=e;for(;r=r.nextSibling;)r&&r["s-sn"]===e["s-sn"]&&r["s-sh"]===A&&s.push(r)}for(let r=s.length-1;r>=0;r--){const n=s[r];n["s-hn"]!==A&&n["s-ol"]&&(T(Se(n),n,G(n)),n["s-ol"].remove(),n["s-ol"]=void 0,n["s-sh"]=void 0,X=!0),t&&O(n,t)}v.$flags$&=-2},ye=(e,t,s,r,n,l)=>{let a=e["s-cr"]&&e["s-cr"].parentNode||e,i;for(a.shadowRoot&&a.tagName===A&&(a=a.shadowRoot);n<=l;++n)r[n]&&(i=D(null,s,n,e),i&&(r[n].$elm$=i,T(a,i,G(t))))},me=(e,t,s)=>{for(let r=t;r<=s;++r){const n=e[r];if(n){const l=n.$elm$;Te(n),l&&(C=!0,l["s-ol"]?l["s-ol"].remove():O(l,!0),l.remove())}}},lt=(e,t,s,r,n=!1)=>{let l=0,a=0,i=0,o=0,c=t.length-1,d=t[0],$=t[c],u=r.length-1,f=r[0],h=r[u],k,g;for(;l<=c&&a<=u;)if(d==null)d=t[++l];else if($==null)$=t[--c];else if(f==null)f=r[++a];else if(h==null)h=r[--u];else if(j(d,f,n))_(d,f,n),d=t[++l],f=r[++a];else if(j($,h,n))_($,h,n),$=t[--c],h=r[--u];else if(j(d,h,n))(d.$tag$==="slot"||h.$tag$==="slot")&&O(d.$elm$.parentNode,!1),_(d,h,n),T(e,d.$elm$,$.$elm$.nextSibling),d=t[++l],h=r[--u];else if(j($,f,n))(d.$tag$==="slot"||h.$tag$==="slot")&&O($.$elm$.parentNode,!1),_($,f,n),T(e,$.$elm$,d.$elm$),$=t[--c],f=r[++a];else{for(i=-1,o=l;o<=c;++o)if(t[o]&&t[o].$key$!==null&&t[o].$key$===f.$key$){i=o;break}i>=0?(g=t[i],g.$tag$!==f.$tag$?k=D(t&&t[a],s,i,e):(_(g,f,n),t[i]=void 0,k=g.$elm$),f=r[++a]):(k=D(t&&t[a],s,a,e),f=r[++a]),k&&T(Se(d.$elm$),k,G(d.$elm$))}l>c?ye(e,r[u+1]==null?null:r[u+1].$elm$,s,r,a,u):a>u&&me(t,l,c)},j=(e,t,s=!1)=>e.$tag$===t.$tag$?e.$tag$==="slot"?"$nodeId$"in e&&s&&e.$elm$.nodeType!==8?!1:e.$name$===t.$name$:s?!0:e.$key$===t.$key$:!1,G=e=>e&&e["s-ol"]||e,Se=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,_=(e,t,s=!1)=>{const r=t.$elm$=e.$elm$,n=e.$children$,l=t.$children$,a=t.$tag$,i=t.$text$;let o;i===null?(y=a==="svg"?!0:a==="foreignObject"?!1:y,a==="slot"&&!N||ge(e,t,y),n!==null&&l!==null?lt(r,n,t,l,s):l!==null?(e.$text$!==null&&(r.textContent=""),ye(r,null,t,l,0,l.length-1)):!s&&m.updatable&&n!==null&&me(n,0,n.length-1),y&&a==="svg"&&(y=!1)):(o=r["s-cr"])?o.parentNode.textContent=i:e.$text$!==i&&(r.data=i)},ke=e=>{const t=e.childNodes;for(const s of t)if(s.nodeType===1){if(s["s-sr"]){const r=s["s-sn"];s.hidden=!1;for(const n of t)if(n!==s){if(n["s-hn"]!==s["s-hn"]||r!==""){if(n.nodeType===1&&(r===n.getAttribute("slot")||r===n["s-sn"])||n.nodeType===3&&r===n["s-sn"]){s.hidden=!0;break}}else if(n.nodeType===1||n.nodeType===3&&n.textContent.trim()!==""){s.hidden=!0;break}}}ke(s)}},b=[],be=e=>{let t,s,r;for(const n of e.childNodes){if(n["s-sr"]&&(t=n["s-cr"])&&t.parentNode){s=t.parentNode.childNodes;const l=n["s-sn"];for(r=s.length-1;r>=0;r--)if(t=s[r],!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==n["s-hn"]&&!m.experimentalSlotFixes)if(ie(t,l)){let a=b.find(i=>i.$nodeToRelocate$===t);C=!0,t["s-sn"]=t["s-sn"]||l,a?(a.$nodeToRelocate$["s-sh"]=n["s-hn"],a.$slotRefNode$=n):(t["s-sh"]=n["s-hn"],b.push({$slotRefNode$:n,$nodeToRelocate$:t})),t["s-sr"]&&b.map(i=>{ie(i.$nodeToRelocate$,t["s-sn"])&&(a=b.find(o=>o.$nodeToRelocate$===t),a&&!i.$slotRefNode$&&(i.$slotRefNode$=a.$slotRefNode$))})}else b.some(a=>a.$nodeToRelocate$===t)||b.push({$nodeToRelocate$:t})}n.nodeType===1&&be(n)}},ie=(e,t)=>e.nodeType===1?e.getAttribute("slot")===null&&t===""||e.getAttribute("slot")===t:e["s-sn"]===t?!0:t==="",Te=e=>{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(Te)},T=(e,t,s)=>{const r=e?.insertBefore(t,s);return K(t,e),r},xe=e=>{const t=[];return e&&t.push(...e["s-scs"]||[],e["s-si"],e["s-sc"],...xe(e.parentElement)),t},K=(e,t,s=!1)=>{var r;if(e&&t&&e.nodeType===1){const n=new Set(xe(t).filter(Boolean));if(n.size&&((r=e.classList)==null||r.add(...e["s-scs"]=[...n]),e["s-ol"]||s))for(const l of Array.from(e.childNodes))K(l,e,!0)}},ot=(e,t,s=!1)=>{var r,n,l,a,i;const o=e.$hostElement$,c=e.$cmpMeta$,d=e.$vnode$||M(null,null),$=Ge(t)?t:U(null,null,t);if(A=o.tagName,c.$attrsToReflect$&&($.$attrs$=$.$attrs$||{},c.$attrsToReflect$.map(([u,f])=>$.$attrs$[f]=o[u])),s&&$.$attrs$)for(const u of Object.keys($.$attrs$))o.hasAttribute(u)&&!["key","ref","style","class"].includes(u)&&($.$attrs$[u]=o[u]);$.$tag$=null,$.$flags$|=4,e.$vnode$=$,$.$elm$=d.$elm$=o.shadowRoot||o,E=o["s-sc"],N=(c.$flags$&1)!==0,q=o["s-cr"],C=!1,_(d,$,s);{if(v.$flags$|=1,X){be($.$elm$);for(const u of b){const f=u.$nodeToRelocate$;if(!f["s-ol"]){const h=S.createTextNode("");h["s-nr"]=f,T(f.parentNode,f["s-ol"]=h,f)}}for(const u of b){const f=u.$nodeToRelocate$,h=u.$slotRefNode$;if(h){const k=h.parentNode;let g=h.nextSibling;{let x=(r=f["s-ol"])==null?void 0:r.previousSibling;for(;x;){let p=(n=x["s-nr"])!=null?n:null;if(p&&p["s-sn"]===f["s-sn"]&&k===p.parentNode){for(p=p.nextSibling;p===f||p?.["s-sr"];)p=p?.nextSibling;if(!p||!p["s-nr"]){g=p;break}}x=x.previousSibling}}(!g&&k!==f.parentNode||f.nextSibling!==g)&&f!==g&&(!f["s-hn"]&&f["s-ol"]&&(f["s-hn"]=f["s-ol"].parentNode.nodeName),T(k,f,g),f.nodeType===1&&(f.hidden=(l=f["s-ih"])!=null?l:!1)),f&&typeof h["s-rf"]=="function"&&h["s-rf"](f)}else f.nodeType===1&&(s&&(f["s-ih"]=(a=f.hidden)!=null?a:!1),f.hidden=!0)}}C&&ke($.$elm$),v.$flags$&=-2,b.length=0}if(m.experimentalScopedSlotChanges&&c.$flags$&2)for(const u of $.$elm$.childNodes)u["s-hn"]!==A&&!u["s-sh"]&&(s&&u["s-ih"]==null&&(u["s-ih"]=(i=u.hidden)!=null?i:!1),u.hidden=!0);q=void 0},Le=(e,t)=>{t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise(s=>e.$onRenderResolve$=s))},J=(e,t)=>{if(e.$flags$|=16,e.$flags$&4){e.$flags$|=512;return}return Le(e,e.$ancestorComponent$),Ne(()=>it(e,t))},it=(e,t)=>{const s=e.$hostElement$,r=L("scheduleUpdate",e.$cmpMeta$.$tagName$),n=s;if(!n)throw new Error(`Can't render component <${s.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`);let l;return t?l=w(n,"componentWillLoad"):l=w(n,"componentWillUpdate"),l=ae(l,()=>w(n,"componentWillRender")),r(),ae(l,()=>ct(e,n,t))},ae=(e,t)=>at(e)?e.then(t).catch(s=>{console.error(s),t()}):t(),at=e=>e instanceof Promise||e&&e.then&&typeof e.then=="function",ct=async(e,t,s)=>{var r;const n=e.$hostElement$,l=L("update",e.$cmpMeta$.$tagName$),a=n["s-rc"];s&&st(e);const i=L("render",e.$cmpMeta$.$tagName$);$t(e,t,n,s),a&&(a.map(o=>o()),n["s-rc"]=void 0),i(),l();{const o=(r=n["s-p"])!=null?r:[],c=()=>ft(e);o.length===0?c():(Promise.all(o).then(c),e.$flags$|=4,o.length=0)}},ce=null,$t=(e,t,s,r)=>{try{ce=t,t=t.render&&t.render(),e.$flags$&=-17,e.$flags$|=2,(m.hasRenderFn||m.reflect)&&(m.vdomRender||m.reflect)&&(m.hydrateServerSide||ot(e,t,r))}catch(o){P(o,e.$hostElement$)}return ce=null,null},ft=e=>{const t=e.$cmpMeta$.$tagName$,s=e.$hostElement$,r=L("postUpdate",t),n=s,l=e.$ancestorComponent$;w(n,"componentDidRender"),e.$flags$&64?(w(n,"componentDidUpdate"),r()):(e.$flags$|=64,Ee(s),w(n,"componentDidLoad"),r(),e.$onReadyResolve$(s),l||dt()),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),e.$flags$&512&&I(()=>J(e,!1)),e.$flags$&=-517},dt=e=>{Ee(S.documentElement),I(()=>Ve(F,"appload",{detail:{namespace:we}}))},w=(e,t,s)=>{if(e&&e[t])try{return e[t](s)}catch(r){P(r)}},Ee=e=>{var t;return e.classList.add((t=m.hydratedSelectorName)!=null?t:"hydrated")},ut=(e,t)=>R(e).$instanceValues$.get(t),ht=(e,t,s,r)=>{const n=R(e),l=e,a=n.$instanceValues$.get(t),i=n.$flags$,o=l;s=Ze(s,r.$members$[t][0]);const c=Number.isNaN(a)&&Number.isNaN(s);if(s!==a&&!c){n.$instanceValues$.set(t,s);{if(r.$watchers$&&i&128){const $=r.$watchers$[t];$&&$.map(u=>{try{o[u](s,a,t)}catch(f){P(f,l)}})}if((i&18)===2){if(o.componentShouldUpdate&&o.componentShouldUpdate(s,a,t)===!1)return;J(n,!1)}}}},pt=(e,t,s)=>{var r,n;const l=e.prototype;if(t.$members$||t.$watchers$||e.watchers){e.watchers&&!t.$watchers$&&(t.$watchers$=e.watchers);const a=Object.entries((r=t.$members$)!=null?r:{});a.map(([i,[o]])=>{(o&31||o&32)&&Object.defineProperty(l,i,{get(){return ut(this,i)},set(c){ht(this,i,c,t)},configurable:!0,enumerable:!0})});{const i=new Map;l.attributeChangedCallback=function(o,c,d){v.jmp(()=>{var $;const u=i.get(o);if(this.hasOwnProperty(u))d=this[u],delete this[u];else{if(l.hasOwnProperty(u)&&typeof this[u]=="number"&&this[u]==d)return;if(u==null){const f=R(this),h=f?.$flags$;if(h&&!(h&8)&&h&128&&d!==c){const g=this,x=($=t.$watchers$)==null?void 0:$[o];x?.forEach(p=>{g[p]!=null&&g[p].call(g,d,c,o)})}return}}this[u]=d===null&&typeof this[u]=="boolean"?!1:d})},e.observedAttributes=Array.from(new Set([...Object.keys((n=t.$watchers$)!=null?n:{}),...a.filter(([o,c])=>c[0]&15).map(([o,c])=>{var d;const $=c[1]||o;return i.set($,o),c[0]&512&&((d=t.$attrsToReflect$)==null||d.push([o,$])),$})]))}}return e},vt=async(e,t,s,r)=>{let n;if(!(t.$flags$&32)){t.$flags$|=32,s.$lazyBundleId$;{n=e.constructor;const i=e.localName;customElements.whenDefined(i).then(()=>t.$flags$|=128)}if(n&&n.style){let i;typeof n.style=="string"?i=n.style:typeof n.style!="string"&&(t.$modeName$=Ye(e),t.$modeName$&&(i=n.style[t.$modeName$]));const o=pe(s,t.$modeName$);if(!H.has(o)){const c=L("registerStyles",s.$tagName$);et(o,i,!!(s.$flags$&1)),c()}}}const l=t.$ancestorComponent$,a=()=>J(t,!0);l&&l["s-rc"]?l["s-rc"].push(a):a()},$e=e=>{},gt=e=>{if(!(v.$flags$&1)){const t=R(e),s=t.$cmpMeta$,r=L("connectedCallback",s.$tagName$);if(t.$flags$&1)_e(e,t,s.$listeners$),t?.$lazyInstance$?$e(t.$lazyInstance$):t?.$onReadyPromise$&&t.$onReadyPromise$.then(()=>$e(t.$lazyInstance$));else{t.$flags$|=1,s.$flags$&12&&yt(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){Le(t,t.$ancestorComponent$=n);break}}s.$members$&&Object.entries(s.$members$).map(([n,[l]])=>{if(l&31&&e.hasOwnProperty(n)){const a=e[n];delete e[n],e[n]=a}}),vt(e,t,s)}r()}},yt=e=>{const t=e["s-cr"]=S.createComment("");t["s-cn"]=!0,T(e,t,e.firstChild)},mt=async e=>{if(!(v.$flags$&1)){const t=R(e);t.$rmListeners$&&(t.$rmListeners$.map(s=>s()),t.$rmListeners$=void 0)}},St=(e,t)=>{const s={$flags$:t[0],$tagName$:t[1]};s.$members$=t[2],s.$listeners$=t[3],s.$watchers$=e.$watchers$,s.$attrsToReflect$=[];const r=e.prototype.connectedCallback,n=e.prototype.disconnectedCallback;return Object.assign(e.prototype,{__registerHost(){Oe(this,s)},connectedCallback(){const l=R(this);_e(this,l,s.$listeners$),gt(this),r&&r.call(this)},disconnectedCallback(){mt(this),n&&n.call(this)},__attachShadow(){if(!this.shadowRoot)this.attachShadow({mode:"open",delegatesFocus:!!(s.$flags$&16)});else if(this.shadowRoot.mode!=="open")throw new Error(`Unable to re-use existing shadow root for ${s.$tagName$}! Mode is set to ${this.shadowRoot.mode} but Stencil only supports open shadow roots.`)}}),e.is=s.$tagName$,pt(e,s)},_e=(e,t,s,r)=>{s&&s.map(([n,l,a])=>{const i=bt(e,n),o=kt(t,a),c=Tt(n);v.ael(i,l,o,c),(t.$rmListeners$=t.$rmListeners$||[]).push(()=>v.rel(i,l,o,c))})},kt=(e,t)=>s=>{var r;try{m.lazyLoad||e.$hostElement$[t](s)}catch(n){P(n)}},bt=(e,t)=>t&4?S:t&8?F:t&16?S.body:e,Tt=e=>He?{passive:(e&1)!==0,capture:(e&2)!==0}:(e&2)!==0;const xt=St(class extends je{constructor(){super(),this.__registerHost(),this.email=void 0,this.tel=void 0,this.sms=void 0,this.facetime=void 0,this.href=void 0,this.headers=void 0,this.decoder=t=>window.atob(t),this.human=!1}connectedCallback(){this.innerEl=this.host.innerHTML,this.host.innerHTML=""}handleFocus(){this.human=!0}handleMouseOver(){this.human=!0}handleContextMenu(){this.human=!0}handleClick(){this.human=!0}generateLink(){let t="",s="";const r=n=>Object.keys(n).map(l=>`${l}=${encodeURIComponent(n[l])}`).join("&");return this.email?(s=this.decoder(this.email),t=`mailto:${s}`,this.headers&&(t+=`?${r(this.headers)}`)):this.tel?(s=this.decoder(this.tel),t=`tel:${s}`):this.sms?(s=this.decoder(this.sms),t=`sms:${s}`):this.facetime?(s=this.decoder(this.facetime),t=`facetime:${s}`):this.href&&(s=this.decoder(this.href),t=s),this.innerEl&&(s=this.innerEl),U("a",{href:t},s)}render(){return this.human?this.generateLink():U("span",null,"Not for the bots")}get host(){return this}},[0,"obfuscate-link",{email:[1],tel:[1],sms:[1],facetime:[1],href:[1],headers:[16],decoder:[16],human:[32]},[[8,"focus","handleFocus"],[9,"mouseover","handleMouseOver"],[8,"contextmenu","handleContextMenu"],[0,"click","handleClick"]]]);customElements.define("obfuscate-link",xt);
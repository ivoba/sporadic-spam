(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{203:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return f});var n=a(0),l=a.n(n),r=a(215),c=a(248),i=a(217),o=a(221),s=a.n(o),u=a(214),m=a.n(u),d=a(220);t.default=function(e){var t=e.data;return l.a.createElement(r.a,null,l.a.createElement(i.a,{title:"Aktuell",keywords:["ecotainment","newsletter","aktuell"]}),l.a.createElement(m.a,{fluid:!0},l.a.createElement(d.a,null),l.a.createElement(s.a,{size:3,renderAs:"h2"},"Aktuell"),t.allJsonJson.edges.map(function(e,t){var a=e.node;return l.a.createElement(c.a,{key:t,node:a})})))};var f="2780364966"},211:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(66),c=a.n(r);a.d(t,"a",function(){return c.a});a(212),a(9).default.enqueue,l.a.createContext({})},212:function(e,t,a){var n;e.exports=(n=a(216))&&n.default||n},215:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(214),c=a.n(r),i=a(229),o=a.n(i),s=a(230),u=a.n(s),m=a(231),d=a.n(m),f=a(232),E=a(233),p=a.n(E),g=a(234),h=a.n(g),v=a(235),k=a.n(v),w=a(236),y=a.n(w),b=a(211);t.a=function(e){var t=e.children;e.pageInfo;return l.a.createElement(c.a,{fluid:!0},l.a.createElement(o.a,{size:"fullheight"},l.a.createElement(o.a.Head,{renderAs:"header"},l.a.createElement(u.a,null,l.a.createElement(u.a.Side,{align:"left"},l.a.createElement(b.a,{to:"/aktuell"},l.a.createElement(d.a,{align:"left"},l.a.createElement(f.a,{align:"left",icon:p.a})),"Aktuell")),l.a.createElement(u.a.Side,{align:"right"},l.a.createElement(b.a,{to:"/archiv"},"Archiv",l.a.createElement(d.a,{align:"left"},l.a.createElement(f.a,{align:"left",icon:h.a})))))),l.a.createElement(o.a.Body,null,t),l.a.createElement(o.a.Footer,null,l.a.createElement(u.a,null,l.a.createElement(u.a.Side,{align:"left"},l.a.createElement(b.a,{to:"/datenschutz"},l.a.createElement(d.a,{align:"left"},l.a.createElement(f.a,{align:"left",icon:k.a})),"Datenschutz")),l.a.createElement(u.a.Side,{align:"right"},l.a.createElement(b.a,{to:"/impressum"},"Impressum",l.a.createElement(d.a,{align:"left"},l.a.createElement(f.a,{align:"left",icon:y.a}))))))))}},216:function(e,t,a){"use strict";a.r(t);a(22);var n=a(0),l=a.n(n),r=a(92);t.default=function(e){var t=e.location,a=e.pageResources;return a?l.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null}},217:function(e,t,a){"use strict";var n=a(218),l=a(0),r=a.n(l),c=a(237),i=a.n(c);function o(e){var t=e.description,a=e.lang,l=e.meta,c=e.keywords,o=e.title,s=n.data.site,u=t||s.siteMetadata.description;return r.a.createElement(i.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:u}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(l)})}o.defaultProps={lang:"de",meta:[],keywords:[],description:""},t.a=o},218:function(e){e.exports={data:{site:{siteMetadata:{title:"Ivo's Ecotainment Newsletter",description:"Feinstes Ecotainment.",author:"Ivo"}}}}},219:function(e,t,a){e.exports=a.p+"static/supasalamanda-92c1965167d2948b73bd8929541c256a.svg"},220:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(211),c=a(219),i=a.n(c),o=a(238),s=a.n(o),u=a(222),m=a.n(u),d=a(221),f=a.n(d),E=a(213),p=a.n(E),g=a(239),h=a.n(g),v=(a(22),a(245)),k=a.n(v),w=a(246),y=a.n(w),b=function(e){var t=e.children,a=Object(n.useState)({clicked:!1}),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,!1===r.clicked?l.a.createElement(y.a,{className:"is-size-7"},l.a.createElement(k.a,{color:"success",className:"is-fullwidth",onClick:function(){c(!0)},style:{height:"auto",whiteSpace:"normal",marginBottom:"1rem"}},"Yeah, ich will auch den Newsletter!"),"Das Newsletter Widget lädt Daten von Mailjet, Cloudflare und Google Fonts. Sonst schreib einfach eine Email an ",l.a.createElement("a",{href:"mailto:hello@ivo-bathke.name"},"hello@ivo-bathke.name")," ",l.a.createElement(p.a,{color:"warning"},"DSGVO")):Object.assign({},t))};t.a=function(){return l.a.createElement(m.a,{textAlignment:"centered"},l.a.createElement(r.a,{to:"/"},l.a.createElement(s.a,{src:i.a,alt:"Voll ökig, Diggi!",title:"Voll ökig, Diggi!",className:"logo"})),l.a.createElement(f.a,null,"Ivo's Ecotainment Newsletter"),l.a.createElement(f.a,{subtitle:!0,size:6,renderAs:"h2"},"Einmal im ",l.a.createElement(r.a,{to:"/aktuell"},"Monat"),"! Trag Dich ein!"),l.a.createElement(b,null,l.a.createElement(h.a,{iframeResizerOptions:{},iframeResizerUrl:!1,src:"https://app.mailjet.com/widget/iframe/4iVG/iIS"})),l.a.createElement(p.a.Group,{style:{display:"inline"}},l.a.createElement(p.a,{color:"dark"},"Umwelt"),l.a.createElement(p.a,{color:"dark"},"Wissenschaft"),l.a.createElement(p.a,{color:"dark"},"Aktivisten"),l.a.createElement(p.a,{color:"dark"},"Birding"),l.a.createElement(p.a,{color:"dark"},"Subkultur"),l.a.createElement(p.a,{color:"dark"},"Trivia"),l.a.createElement(p.a,{color:"dark"},"Lulz")))}},248:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(222),c=a.n(r),i=a(249),o=a.n(i),s=a(213),u=a.n(s),m=function(e){return{__html:e}};function d(e){return l.a.createElement(c.a,null,l.a.createElement(o.a,null,l.a.createElement("p",null,l.a.createElement("strong",null,e.node.title)," ",l.a.createElement("small",null,e.node.published)," ",l.a.createElement("br",null),l.a.createElement(u.a.Group,null,e.node.tags.map(function(e,t){return l.a.createElement(u.a,{key:e,color:"dark"},e)})))),l.a.createElement(o.a,null,l.a.createElement("div",{dangerouslySetInnerHTML:m(e.node.newsletter)})))}d.defaultProps={node:{}},t.a=d},249:function(e,t,a){"use strict";a(90),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(250);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return(e=n,e&&e.__esModule?e:{default:e}).default;var e}}),a(190)},250:function(e,t,a){"use strict";a(29),a(22),a(90),Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=s(a(0)),r=s(a(49)),c=s(a(208)),i=s(a(209)),o=s(a(210));function s(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t,a,r,i=e.children,s=e.className,u=e.size,m=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["children","className","size"]);return l.default.createElement(o.default,n({},m,{className:(0,c.default)("content",s,(t={},a="is-"+u,r=u,a in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t))}),i)};u.propTypes=n({},i.default.propTypes,{children:r.default.node,className:r.default.string,style:r.default.shape({}),size:r.default.oneOf(["small","medium","large"]),renderAs:r.default.oneOfType([r.default.string,r.default.func])}),u.defaultProps=n({},i.default.defaultProps,{children:null,className:void 0,style:{},size:null,renderAs:"div"}),t.default=u}}]);
//# sourceMappingURL=component---src-pages-aktuell-js-97bd401d625801acec7f.js.map
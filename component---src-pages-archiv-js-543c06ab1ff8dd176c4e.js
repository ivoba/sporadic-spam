(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{222:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return p});var n=a(0),r=a.n(n),l=a(231),c=a(235),i=a(268),o=a(237),s=a(239),u=a.n(s),d=a(234),m=a.n(d),f=a(244);t.default=function(e){var t=e.data;return r.a.createElement(c.a,null,r.a.createElement(o.a,{title:"Archiv",keywords:["workshops","handmade","kurse"]}),r.a.createElement(m.a,{fluid:!0},r.a.createElement(f.a,null),r.a.createElement(u.a,{size:3,renderAs:"h2"},"Archiv"),t.allJsonJson.edges.map(function(e,t){var a=e.node;return r.a.createElement(l.a,{to:a.slug},r.a.createElement(i.a,{node:a}))})))};var p="2010811468"},231:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(66),c=a.n(l);a.d(t,"a",function(){return c.a});a(232),a(9).default.enqueue,r.a.createContext({})},232:function(e,t,a){var n;e.exports=(n=a(236))&&n.default||n},235:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(234),c=a.n(l),i=a(246),o=a.n(i),s=a(247),u=a.n(s),d=a(240),m=a.n(d),f=a(248),p=a(253),E=a.n(p),g=a(254),h=a.n(g),v=a(255),w=a.n(v),y=a(256),k=a.n(y),b=a(231);t.a=function(e){var t=e.children;e.pageInfo;return r.a.createElement(c.a,{fluid:!0},r.a.createElement(o.a,{size:"fullheight"},r.a.createElement(o.a.Head,{renderAs:"header"},r.a.createElement(u.a,null,r.a.createElement(u.a.Side,{align:"left"},r.a.createElement(b.a,{to:"/aktuell"},r.a.createElement(m.a,{align:"left"},r.a.createElement(f.a,{align:"left",icon:E.a})),"Aktuell")),r.a.createElement(u.a.Side,{align:"right"},r.a.createElement(b.a,{to:"/archiv"},"Archiv",r.a.createElement(m.a,{align:"left"},r.a.createElement(f.a,{align:"left",icon:h.a})))))),r.a.createElement(o.a.Body,null,t),r.a.createElement(o.a.Footer,null,r.a.createElement(u.a,null,r.a.createElement(u.a.Side,{align:"left"},r.a.createElement(b.a,{to:"/datenschutz"},r.a.createElement(m.a,{align:"left"},r.a.createElement(f.a,{align:"left",icon:w.a})),"Datenschutz")),r.a.createElement(u.a.Side,{align:"right"},r.a.createElement(b.a,{to:"/impressum"},"Impressum",r.a.createElement(m.a,{align:"left"},r.a.createElement(f.a,{align:"left",icon:k.a}))))))))}},236:function(e,t,a){"use strict";a.r(t);a(22);var n=a(0),r=a.n(n),l=a(93);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},237:function(e,t,a){"use strict";var n=a(238),r=a(0),l=a.n(r),c=a(258),i=a.n(c);function o(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,o=e.title,s=n.data.site,u=t||s.siteMetadata.description;return l.a.createElement(i.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:u}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})}o.defaultProps={lang:"de",meta:[],keywords:[],description:""},t.a=o},238:function(e){e.exports={data:{site:{siteMetadata:{title:"Ivo's sporadischer Spam - Ecotainment Newsletter",description:"Feinstes Ecotainment.",author:"Ivo"}}}}},244:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(231),c=a(241),i=a.n(c),o=a(239),s=a.n(o),u=a(233),d=a.n(u),m=a(269),f=a.n(m),p=(a(22),a(242)),E=a.n(p),g=a(249),h=a.n(g),v=function(e){var t=e.children,a=Object(n.useState)({clicked:!1}),l=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,!1===l.clicked?r.a.createElement(h.a,{className:"is-size-7"},r.a.createElement(E.a,{color:"success",className:"is-large is-fullwidth",onClick:function(){c(!0)},style:{marginBottom:"1rem"}},"Yeah, ich will auch den Newsletter!"),"Das Newsletter Widget lädt Daten von Mailjet, Cloudflare und Google Fonts. ",r.a.createElement(d.a,{color:"warning"},"DSGVO")):Object.assign({},t))};t.a=function(){return r.a.createElement(i.a,{textAlignment:"centered"},r.a.createElement(l.a,{to:"/"},r.a.createElement(s.a,null,"Ivo's sporadischer Spam")),r.a.createElement(s.a,{subtitle:!0,size:6,renderAs:"h2"},"Feinster Ecotainment Newsletter! Trag Dich ein, Diggi!"),r.a.createElement(v,null,r.a.createElement(f.a,{iframeResizerOptions:{},iframeResizerUrl:!1,src:"https://app.mailjet.com/widget/iframe/4iVG/iIS"})),r.a.createElement(d.a.Group,{style:{display:"inline"}},r.a.createElement(d.a,{color:"dark"},"Umwelt"),r.a.createElement(d.a,{color:"dark"},"Wissenschaft"),r.a.createElement(d.a,{color:"dark"},"Aktivisten"),r.a.createElement(d.a,{color:"dark"},"Birding"),r.a.createElement(d.a,{color:"dark"},"Subkultur"),r.a.createElement(d.a,{color:"dark"},"Trivia"),r.a.createElement(d.a,{color:"dark"},"Lulz")))}},257:function(e,t,a){"use strict";a(90),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(265);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return(e=n,e&&e.__esModule?e:{default:e}).default;var e}}),a(190)},265:function(e,t,a){"use strict";a(29),a(22),a(90),Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=s(a(0)),l=s(a(49)),c=s(a(227)),i=s(a(228)),o=s(a(229));function s(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t,a,l,i=e.children,s=e.className,u=e.size,d=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["children","className","size"]);return r.default.createElement(o.default,n({},d,{className:(0,c.default)("content",s,(t={},a="is-"+u,l=u,a in t?Object.defineProperty(t,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[a]=l,t))}),i)};u.propTypes=n({},i.default.propTypes,{children:l.default.node,className:l.default.string,style:l.default.shape({}),size:l.default.oneOf(["small","medium","large"]),renderAs:l.default.oneOfType([l.default.string,l.default.func])}),u.defaultProps=n({},i.default.defaultProps,{children:null,className:void 0,style:{},size:null,renderAs:"div"}),t.default=u},268:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(241),c=a.n(l),i=a(257),o=a.n(i),s=a(233),u=a.n(s),d=function(e){return{__html:e}};function m(e){return r.a.createElement(c.a,null,r.a.createElement(o.a,null,r.a.createElement("p",null,r.a.createElement("strong",null,e.node.title)," ",r.a.createElement("small",null,e.node.published)," ",r.a.createElement("br",null),r.a.createElement(u.a.Group,null,e.node.tags.map(function(e,t){return r.a.createElement(u.a,{color:"dark"},e)})))),r.a.createElement(o.a,null,r.a.createElement("p",{dangerouslySetInnerHTML:d(e.node.newsletter)})))}m.defaultProps={node:{}},t.a=m}}]);
//# sourceMappingURL=component---src-pages-archiv-js-543c06ab1ff8dd176c4e.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{190:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return u});var n=a(0),r=a.n(n),l=a(205),c=a(207),o=a(223),i=a(208),s=a(203);t.default=function(e){var t=e.data;return console.log(t),r.a.createElement(l.a,null,r.a.createElement(i.a,{title:"Archiv",keywords:["workshops","handmade","kurse"]}),r.a.createElement(s.Container,{Fluid:!0},r.a.createElement(c.a,null),t.allJsonJson.edges.map(function(e,t){var a=e.node;return r.a.createElement(o.a,{node:a})})))};var u="3273501666"},200:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(66),c=a.n(l);a.d(t,"a",function(){return c.a});a(201),a(9).default.enqueue,r.a.createContext({})},201:function(e,t,a){var n;e.exports=(n=a(206))&&n.default||n},205:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(212),c=a.n(l),o=a(213),i=a.n(o),s=a(214),u=a.n(s),m=a(215),d=a.n(m),E=a(204),g=a(216),f=a.n(g),p=a(217),h=a.n(p),v=a(218),k=a.n(v),w=a(219),T=a.n(w),y=a(200);t.a=function(e){var t=e.children;e.pageInfo;return r.a.createElement(c.a,{fluid:!0},r.a.createElement(i.a,{size:"fullheight"},r.a.createElement(i.a.Head,{renderAs:"header"},r.a.createElement(u.a,null,r.a.createElement(u.a.Side,{align:"left"},r.a.createElement(y.a,{to:"/aktuell"},r.a.createElement(d.a,{align:"left"},r.a.createElement(E.a,{align:"left",icon:f.a})),"Aktuell")),r.a.createElement(u.a.Side,{align:"right"},r.a.createElement(y.a,{to:"/archiv"},"Archiv",r.a.createElement(d.a,{align:"left"},r.a.createElement(E.a,{align:"left",icon:h.a})))))),r.a.createElement(i.a.Body,null,t),r.a.createElement(i.a.Footer,null,r.a.createElement(u.a,null,r.a.createElement(u.a.Side,{align:"left"},r.a.createElement(y.a,{to:"/datenschutz"},r.a.createElement(d.a,{align:"left"},r.a.createElement(E.a,{align:"left",icon:k.a})),"Datenschutz")),r.a.createElement(u.a.Side,{align:"right"},r.a.createElement(y.a,{to:"/impressum"},"Impressum",r.a.createElement(d.a,{align:"left"},r.a.createElement(E.a,{align:"left",icon:T.a}))))))))}},206:function(e,t,a){"use strict";a.r(t);a(22);var n=a(0),r=a.n(n),l=a(91);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},207:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(204),c=a(200),o=a(220),i=a.n(o),s=a(203);t.a=function(){return r.a.createElement(s.Box,null,r.a.createElement(c.a,{to:"/"},r.a.createElement(s.Heading,null,"Ivo's sporadischer Spam")),r.a.createElement(s.Heading,{subtitle:!0,size:6},"Feinster Ecotainment Newsletter, Alter..."),r.a.createElement(s.Form.Field,{kind:"addons"},r.a.createElement(s.Form.Control,{iconLeft:!0,fullwidth:!0},r.a.createElement(s.Form.Input,{color:"success",type:"email",placeholder:"Psst, trag Dich ein diggi..."}),r.a.createElement(s.Icon,{align:"left"},r.a.createElement(l.a,{align:"left",icon:i.a}))),r.a.createElement(s.Form.Control,{iconLeft:!0},r.a.createElement(s.Button,{color:"success"},"Trag mich ein"))),r.a.createElement(s.Tag.Group,null,r.a.createElement(s.Tag,{color:"dark"},"Umwelt"),r.a.createElement(s.Tag,{color:"dark"},"Wissenschaft"),r.a.createElement(s.Tag,{color:"dark"},"Aktivisten"),r.a.createElement(s.Tag,{color:"dark"},"Birding"),r.a.createElement(s.Tag,{color:"dark"},"Subkultur"),r.a.createElement(s.Tag,{color:"dark"},"Trivia"),r.a.createElement(s.Tag,{color:"dark"},"Lulz")))}},208:function(e,t,a){"use strict";var n=a(209),r=a(0),l=a.n(r),c=a(221),o=a.n(c);function i(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,i=e.title,s=n.data.site,u=t||s.siteMetadata.description;return l.a.createElement(o.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:i},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:u}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})}i.defaultProps={lang:"en",meta:[],keywords:[],description:""},t.a=i},209:function(e){e.exports={data:{site:{siteMetadata:{title:"Ivo's sporadischer Spam - Ecotainment Newsletter",description:"Feinstes Ecotainment.",author:"Ivo"}}}}},223:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(203),c=function(e){return{__html:e}};function o(e){return r.a.createElement(l.Box,null,r.a.createElement(l.Content,null,r.a.createElement("p",null,r.a.createElement("strong",null,e.node.title)," ",r.a.createElement("small",null,e.node.published)," ",r.a.createElement("br",null),r.a.createElement(l.Tag.Group,null,e.node.tags.map(function(e,t){return r.a.createElement(l.Tag,{color:"dark"},e)})))),r.a.createElement(l.Content,null,r.a.createElement("p",{dangerouslySetInnerHTML:c(e.node.newsletter)})))}o.defaultProps={node:{}},t.a=o}}]);
//# sourceMappingURL=component---src-templates-newsletter-js-515cfed94a118d6889f2.js.map
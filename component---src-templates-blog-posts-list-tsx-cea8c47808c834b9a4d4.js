(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+x2M":function(e,t,r){e.exports=r("xhtX")},"qJo/":function(e,t,r){"use strict";r.r(t),r.d(t,"query",(function(){return u}));var n=r("q1tI"),a=r.n(n),o=r("qhky"),i=r("+x2M"),c=r.n(i),l=r("YwZP"),s=r("KPkD"),d=function(e){var t=e.slug,r=e.title,n=e.description,o=e.date,i=e.tags,c=e.coverImgSrc,d=e.stats,m=e.originalUrl,u="/"===Object(l.useLocation)().pathname?"blog/"+t:t;return a.a.createElement(s.e,null,a.a.createElement("header",null,a.a.createElement(s.h,null,a.a.createElement(s.c,{coverImgSrc:c}),a.a.createElement(s.g,{postLink:u,title:r})),a.a.createElement(s.d,{date:o.toString(),timeToRead:d.text,wordsCount:d.words}),a.a.createElement(s.f,{tags:i})),a.a.createElement(s.b,{description:n,postLink:u,originalUrl:m}))},m=r("1Yd/"),u="1152148273";t.default=function(e){var t=e.data,r=t.allMdx.edges.map((function(e){var t=e.node,r=t.slug,n=t.frontmatter,a=t.body;return{slug:r,stats:c()(a,{wordsPerMinute:360}),date:n.date,description:n.description,originalUrl:n.originalUrl,tags:n.tags,title:n.title,coverImgSrc:n.coverImg.childImageSharp.fluid.src}})),n=t.profileImage.childImageSharp.fixed;return a.a.createElement("div",null,a.a.createElement(o.a,null,a.a.createElement("meta",{name:"google-site-verification",content:"3nW_Loo81kowYXSp_stzMufeF24lMB-m9zQCZAwuTiE"}),a.a.createElement("meta",{name:"yandex-verification",content:"577ed1e1bb427dd9"}),a.a.createElement("meta",{name:"msvalidate.01",content:"FF958DC350391A726E42368F26F6A4B9"})),a.a.createElement(m.a,{title:"Vynohradov Blog",description:"Blog about programing, program architecture, JavaScript, Node.js, TypeScript, Serverless and so on",image:n,pathname:"https://maxvynohradov.github.io/me"}),r.map((function(e,t){return a.a.createElement(d,Object.assign({key:t.toString()},e))})))}},xhtX:function(e,t,r){"use strict";function n(e){return" "===e||"\n"===e||"\r"===e||"\t"===e}e.exports=function(e,t){var r,a,o=0,i=0,c=e.length-1;for((t=t||{}).wordsPerMinute=t.wordsPerMinute||200,r=t.wordBound||n;r(e[i]);)i++;for(;r(e[c]);)c--;for(a=i;a<=c;){for(;a<=c&&!r(e[a]);a++);for(o++;a<=c&&r(e[a]);a++);}var l=o/t.wordsPerMinute,s=60*l*1e3;return{text:Math.ceil(l.toFixed(2))+" min read",minutes:l,time:s,words:o}}}}]);
//# sourceMappingURL=component---src-templates-blog-posts-list-tsx-cea8c47808c834b9a4d4.js.map
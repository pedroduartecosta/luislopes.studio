(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{161:function(e,t,a){"use strict";a.r(t),a.d(t,"photosQuery",function(){return g});a(57);var n=a(8),r=a.n(n),i=a(0),c=a.n(i),l=a(164),o=a.n(l),m=a(168),p=a.n(m),s=a(169),u=a(166),h=a(165),f=a.n(h),y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement(s.a,{location:this.props.location},c.a.createElement("div",{className:"index-container"},c.a.createElement(o.a,{title:f.a.siteTitle+" | Bavaria 2016"}),c.a.createElement(u.a,null),c.a.createElement("div",{className:"section"},c.a.createElement("div",{className:"section__label"},c.a.createElement("p",null,"About"),c.a.createElement("span",null)),c.a.createElement("div",{className:"section__content section__content--centered"},c.a.createElement("p",null,"B, Germany",c.a.createElement("br",null),c.a.createElement("i",null,"September 2016")),c.a.createElement("div",{className:"more-link more-link--inline"},c.a.createElement("a",{href:"/photo"},"Back to albums")))),c.a.createElement("div",{className:"photo-stream"},this.props.data.allFile.edges.map(function(e){var t=e.node.childImageSharp.fluid.aspectRatio>1?"photo-stream__photo":"photo-stream__photo--portrait";return c.a.createElement("div",{className:t},c.a.createElement(p.a,{fluid:e.node.childImageSharp.fluid}))}))))},t}(c.a.Component);t.default=y;var g="3270025540"},166:function(e,t,a){"use strict";var n=a(8),r=a.n(n),i=a(0),c=a.n(i),l=a(164),o=a.n(l),m=a(167),p=a.n(m),s=a(165),u=a.n(s),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,a,n,r=this.props,i=r.postNode,l=r.postPath,m=r.postSEO;if(m){var s=i.frontmatter;e=s.title,t=s.description?s.description:i.excerpt,a=s.cover,n=p()(u.a.siteUrl,u.a.pathPrefix,l)}else e=u.a.siteTitle,t=u.a.siteDescription,a=u.a.siteLogo;a=p()(u.a.siteUrl,u.a.pathPrefix,a);var h=p()(u.a.siteUrl,u.a.pathPrefix),f=[{"@context":"http://schema.org","@type":"WebSite",url:h,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return m&&f.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:h,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:a},description:t}),c.a.createElement(o.a,null,c.a.createElement("meta",{name:"description",content:t}),c.a.createElement("meta",{name:"image",content:a}),c.a.createElement("script",{type:"application/ld+json"},JSON.stringify(f)),c.a.createElement("meta",{property:"og:url",content:m?n:h}),m?c.a.createElement("meta",{property:"og:type",content:"article"}):null,c.a.createElement("meta",{property:"og:title",content:e}),c.a.createElement("meta",{property:"og:description",content:t}),c.a.createElement("meta",{property:"og:image",content:a}),c.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),c.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),c.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),c.a.createElement("meta",{name:"twitter:title",content:e}),c.a.createElement("meta",{name:"twitter:description",content:t}),c.a.createElement("meta",{name:"twitter:image",content:a}))},t}(i.Component);t.a=h},167:function(e,t,a){var n,r,i;i=function(){return function(){return function(e){var t=[];if(e[0].match(/^[^\/:]+:\/*$/)&&e.length>1){var a=e.shift();e[0]=a+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var r=e[n];if("string"!=typeof r)throw new TypeError("Url must be a string. Received "+r);""!==r&&(n>0&&(r=r.replace(/^[\/]+/,"")),r=n<e.length-1?r.replace(/[\/]+$/,""):r.replace(/[\/]+$/,"/"),t.push(r))}var i=t.join("/"),c=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return i=c.shift()+(c.length>0?"?":"")+c.join("&")}("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=i():void 0===(r="function"==typeof(n=i)?n.call(t,a,t,e):n)||(e.exports=r)}}]);
//# sourceMappingURL=component---src-pages-photo-bavaria-jsx-eb5743b294ac489c613a.js.map
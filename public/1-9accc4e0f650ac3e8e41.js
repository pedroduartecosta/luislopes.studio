(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{164:function(e,t,r){t.__esModule=!0,t.Helmet=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=f(r(0)),a=f(r(2)),u=f(r(171)),s=f(r(174)),l=r(177),c=r(170);function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var p,T,E,h=(0,u.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)(function(){return null}),y=(p=h,E=T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,s.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case c.TAG_NAMES.SCRIPT:case c.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case c.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,o=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return n({},o,((t={})[r.type]=[].concat(o[r.type]||[],[n({},i,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,o=e.child,i=e.newProps,a=e.newChildProps,u=e.nestedChildren;switch(o.type){case c.TAG_NAMES.TITLE:return n({},i,((t={})[o.type]=u,t.titleAttributes=n({},a),t));case c.TAG_NAMES.BODY:return n({},i,{bodyAttributes:n({},a)});case c.TAG_NAMES.HTML:return n({},i,{htmlAttributes:n({},a)})}return n({},i,((r={})[o.type]=n({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach(function(t){var o;r=n({},r,((o={})[t]=e[t],o))}),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return i.default.Children.forEach(e,function(e){if(e&&e.props){var o=e.props,i=o.children,a=d(o,["children"]),u=(0,l.convertReactPropstoHtmlAttributes)(a);switch(r.warnOnInvalidChildren(e,i),e.type){case c.TAG_NAMES.LINK:case c.TAG_NAMES.META:case c.TAG_NAMES.NOSCRIPT:case c.TAG_NAMES.SCRIPT:case c.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:u,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=d(e,["children"]),o=n({},r);return t&&(o=this.mapChildrenToProps(t,o)),i.default.createElement(p,o)},o(t,null,[{key:"canUseDOM",set:function(e){p.canUseDOM=e}}]),t}(i.default.Component),T.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},T.defaultProps={defer:!0,encodeSpecialCharacters:!0},T.peek=p.peek,T.rewind=function(){var e=p.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},E);y.renderStatic=y.rewind,t.Helmet=y,t.default=y},168:function(e,t,r){"use strict";var n=r(6);t.__esModule=!0,t.default=void 0;var o,i=n(r(8)),a=n(r(43)),u=n(r(179)),s=n(r(58)),l=n(r(0)),c=n(r(2)),f=function(e){var t=(0,s.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},d={},p=function(e){var t=f(e),r=t.fluid?t.fluid.src:t.fixed.src;return!!d[r]||(d[r]=!0,!1)},T=[];var E=function(e,t){(void 0===o&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=new window.IntersectionObserver(function(e){e.forEach(function(e){T.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),o).observe(e),T.push([e,t])},h=null,y=function(){if(null!==h)return h;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return h=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},A=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.sizes?'sizes="'+e.sizes+'" ':"",o=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',a=e.width?'width="'+e.width+'" ':"",u=e.height?'height="'+e.height+'" ':"",s=e.opacity?e.opacity:"1";return"<img "+a+u+t+r+i+o+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+s+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},b=function(e){var t=e.style,r=e.onLoad,n=(0,u.default)(e,["style","onLoad"]);return l.default.createElement("img",(0,s.default)({},n,{onLoad:r,style:(0,s.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};b.propTypes={style:c.default.object,onLoad:c.default.func};var S=function(e){function t(t){var r;r=e.call(this,t)||this;var n=!0,o=!0,i=!1;return!p(t)&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,o=!1,i=!0),"undefined"==typeof window&&(n=!1,o=!1),r.state={isVisible:n,imgLoaded:o,IOSupported:i},r.handleRef=r.handleRef.bind((0,a.default)((0,a.default)(r))),r}(0,i.default)(t,e);var r=t.prototype;return r.handleRef=function(e){var t=this;this.state.IOSupported&&e&&E(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},r.render=function(){var e,t=this,r=f(this.props),n=r.title,o=r.alt,i=r.className,a=r.outerWrapperClassName,u=r.style,c=void 0===u?{}:u,d=r.imgStyle,p=void 0===d?{}:d,T=r.placeholderStyle,E=void 0===T?{}:T,h=r.fluid,S=r.fixed,m=r.backgroundColor,v=r.Tag;e="boolean"==typeof m?"lightgray":m;var g=(0,s.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},p,E),_=(0,s.default)({opacity:this.state.imgLoaded||!1===this.props.fadeIn?1:0},p);if(h){var O=h;return O.srcWebp&&O.srcSetWebp&&y()&&(O.src=O.srcWebp,O.srcSet=O.srcSetWebp),l.default.createElement(v,{className:(a||"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===c.position?"initial":"relative"}},l.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},c),ref:this.handleRef},l.default.createElement(v,{style:{width:"100%",paddingBottom:100/O.aspectRatio+"%"}}),O.base64&&l.default.createElement(b,{alt:o,title:n,src:O.base64,style:g}),O.tracedSVG&&l.default.createElement(b,{alt:o,title:n,src:O.tracedSVG,style:g}),e&&l.default.createElement(v,{title:n,style:{backgroundColor:e,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&l.default.createElement(b,{alt:o,title:n,srcSet:O.srcSet,src:O.src,sizes:O.sizes,style:_,onLoad:function(){t.state.IOSupported&&t.setState({imgLoaded:!0}),t.props.onLoad&&t.props.onLoad()}}),l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:A((0,s.default)({alt:o,title:n},O))}})))}if(S){var R=S,w=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},c);return"inherit"===c.display&&delete w.display,R.srcWebp&&R.srcSetWebp&&y()&&(R.src=R.srcWebp,R.srcSet=R.srcSetWebp),l.default.createElement(v,{className:(a||"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===c.position?"initial":"relative"}},l.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:w,ref:this.handleRef},R.base64&&l.default.createElement(b,{alt:o,title:n,src:R.base64,style:g}),R.tracedSVG&&l.default.createElement(b,{alt:o,title:n,src:R.tracedSVG,style:g}),e&&l.default.createElement(v,{title:n,style:{backgroundColor:e,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&l.default.createElement(b,{alt:o,title:n,width:R.width,height:R.height,srcSet:R.srcSet,src:R.src,style:_,onLoad:function(){t.setState({imgLoaded:!0}),t.props.onLoad&&t.props.onLoad()}}),l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:A((0,s.default)({alt:o,title:n,width:R.width,height:R.height},R))}})))}return null},t}(l.default.Component);S.defaultProps={fadeIn:!0,alt:"",Tag:"div"};var m=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});S.propTypes={resolutions:m,sizes:v,fixed:m,fluid:v,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),outerWrapperClassName:c.default.oneOfType([c.default.string,c.default.object]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,position:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,Tag:c.default.string};var g=S;t.default=g},170:function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},n=(t.VALID_TAG_NAMES=Object.keys(r).map(function(e){return r[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(n).reduce(function(e,t){return e[n[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},171:function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var o=r(0),i=n(o),a=n(r(172)),u=n(r(173));e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s=[],l=void 0;function c(){l=e(s.map(function(e){return e.props})),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return l},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e},t.prototype.shouldComponentUpdate=function(e){return!u(e,this.props)},t.prototype.componentWillMount=function(){s.push(this),c()},t.prototype.componentDidUpdate=function(){c()},t.prototype.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),c()},t.prototype.render=function(){return i.createElement(n,this.props)},t}(o.Component);return f.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")",f.canUseDOM=a.canUseDOM,f}}},172:function(e,t,r){var n;
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(n=function(){return i}.call(t,r,t,e))||(e.exports=n)}()},173:function(e,t){e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var l=i[s];if(!u(l))return!1;var c=e[l],f=t[l];if(!1===(o=r?r.call(n,c,f,l):void 0)||void 0===o&&c!==f)return!1}return!0}},174:function(e,t,r){var n=Array.prototype.slice,o=r(175),i=r(176),a=e.exports=function(e,t,r){return r||(r={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?r.strict?e===t:e==t:function(e,t,r){var l,c;if(u(e)||u(t))return!1;if(e.prototype!==t.prototype)return!1;if(i(e))return!!i(t)&&(e=n.call(e),t=n.call(t),a(e,t,r));if(s(e)){if(!s(t))return!1;if(e.length!==t.length)return!1;for(l=0;l<e.length;l++)if(e[l]!==t[l])return!1;return!0}try{var f=o(e),d=o(t)}catch(e){return!1}if(f.length!=d.length)return!1;for(f.sort(),d.sort(),l=f.length-1;l>=0;l--)if(f[l]!=d[l])return!1;for(l=f.length-1;l>=0;l--)if(c=f[l],!a(e[c],t[c],r))return!1;return typeof e==typeof t}(e,t,r))};function u(e){return null==e}function s(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}},175:function(e,t){function r(e){var t=[];for(var r in e)t.push(r);return t}(e.exports="function"==typeof Object.keys?Object.keys:r).shim=r},176:function(e,t){var r="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function o(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}(t=e.exports=r?n:o).supported=n,t.unsupported=o},177:function(e,t,r){(function(e){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=s(r(0)),a=s(r(59)),u=r(170);function s(e){return e&&e.__esModule?e:{default:e}}var l,c=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=h(e,u.TAG_NAMES.TITLE),r=h(e,u.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,function(){return t});var n=h(e,u.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},d=function(e){return h(e,u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter(function(t){return void 0!==t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return o({},e,t)},{})},T=function(e,t){return t.filter(function(e){return void 0!==e[u.TAG_NAMES.BASE]}).map(function(e){return e[u.TAG_NAMES.BASE]}).reverse().reduce(function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t},[])},E=function(e,t,r){var o={};return r.filter(function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&m("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,r){var n={};r.filter(function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var s=i[a],l=s.toLowerCase();-1===t.indexOf(l)||r===u.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||l===u.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(s)||s!==u.TAG_PROPERTIES.INNER_HTML&&s!==u.TAG_PROPERTIES.CSS_TEXT&&s!==u.TAG_PROPERTIES.ITEM_PROP||(r=s)}if(!r||!e[r])return!1;var c=e[r].toLowerCase();return o[r]||(o[r]={}),n[r]||(n[r]={}),!o[r][c]&&(n[r][c]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(n),s=0;s<i.length;s++){var l=i[s],c=(0,a.default)({},o[l],n[l]);o[l]=c}return e},[]).reverse()},h=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},y=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout(function(){y(e)},0)}),A=function(e){return clearTimeout(e)},b="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||y:e.requestAnimationFrame||y,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||A:e.cancelAnimationFrame||A,m=function(e){return console&&"function"==typeof console.warn&&void 0},v=null,g=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,f=e.styleTags,d=e.title,p=e.titleAttributes;R(u.TAG_NAMES.BODY,n),R(u.TAG_NAMES.HTML,o),O(d,p);var T={baseTag:w(u.TAG_NAMES.BASE,r),linkTags:w(u.TAG_NAMES.LINK,i),metaTags:w(u.TAG_NAMES.META,a),noscriptTags:w(u.TAG_NAMES.NOSCRIPT,s),scriptTags:w(u.TAG_NAMES.SCRIPT,c),styleTags:w(u.TAG_NAMES.STYLE,f)},E={},h={};Object.keys(T).forEach(function(e){var t=T[e],r=t.newTags,n=t.oldTags;r.length&&(E[e]=r),n.length&&(h[e]=T[e].oldTags)}),t&&t(),l(e,E,h)},_=function(e){return Array.isArray(e)?e.join(""):e},O=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),R(u.TAG_NAMES.TITLE,t)},R=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(u.HELMET_ATTRIBUTE),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),s=0;s<a.length;s++){var l=a[s],c=t[l]||"";r.getAttribute(l)!==c&&r.setAttribute(l,c),-1===o.indexOf(l)&&o.push(l);var f=i.indexOf(l);-1!==f&&i.splice(f,1)}for(var d=i.length-1;d>=0;d--)r.removeAttribute(i[d]);o.length===i.length?r.removeAttribute(u.HELMET_ATTRIBUTE):r.getAttribute(u.HELMET_ATTRIBUTE)!==a.join(",")&&r.setAttribute(u.HELMET_ATTRIBUTE,a.join(","))}},w=function(e,t){var r=document.head||document.querySelector(u.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+u.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===u.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===u.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(u.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,r.isEqualNode(e)})?o.splice(a,1):i.push(r)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return r.appendChild(e)}),{oldTags:o,newTags:i}},P=function(e){return Object.keys(e).reduce(function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n},"")},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,r){return t[u.REACT_TAG_MAP[r]||r]=e[r],t},t)},C=function(e,t,r){switch(e){case u.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[u.HELMET_ATTRIBUTE]=!0,o=M(r,n),[i.default.createElement(u.TAG_NAMES.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=P(r),i=_(t);return o?"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+">"+c(i,n)+"</"+e+">":"<"+e+" "+u.HELMET_ATTRIBUTE+'="true">'+c(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case u.ATTRIBUTE_NAMES.BODY:case u.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(t)},toString:function(){return P(t)}};default:return{toComponent:function(){return function(e,t){return t.map(function(t,r){var n,o=((n={key:r})[u.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach(function(e){var r=u.REACT_TAG_MAP[e]||e;if(r===u.TAG_PROPERTIES.INNER_HTML||r===u.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]}),i.default.createElement(e,o)})}(e,t)},toString:function(){return function(e,t,r){return t.reduce(function(t,n){var o=Object.keys(n).filter(function(e){return!(e===u.TAG_PROPERTIES.INNER_HTML||e===u.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o=void 0===n[t]?t:t+'="'+c(n[t],r)+'"';return e?e+" "+o:o},""),i=n.innerHTML||n.cssText||"",a=-1===u.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,r){return t[u.HTML_TAG_MAP[r]||r]=e[r],t},t)},t.handleClientStateChange=function(e){v&&S(v),e.defer?v=b(function(){g(e,function(){v=null})}):(g(e),v=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,l=e.scriptTags,c=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:C(u.TAG_NAMES.BASE,t,n),bodyAttributes:C(u.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:C(u.ATTRIBUTE_NAMES.HTML,o,n),link:C(u.TAG_NAMES.LINK,i,n),meta:C(u.TAG_NAMES.META,a,n),noscript:C(u.TAG_NAMES.NOSCRIPT,s,n),script:C(u.TAG_NAMES.SCRIPT,l,n),style:C(u.TAG_NAMES.STYLE,c,n),title:C(u.TAG_NAMES.TITLE,{title:d,titleAttributes:p},n)}},t.reducePropsToState=function(e){return{baseTag:T([u.TAG_PROPERTIES.HREF],e),bodyAttributes:p(u.ATTRIBUTE_NAMES.BODY,e),defer:h(e,u.HELMET_PROPS.DEFER),encode:h(e,u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(u.ATTRIBUTE_NAMES.HTML,e),linkTags:E(u.TAG_NAMES.LINK,[u.TAG_PROPERTIES.REL,u.TAG_PROPERTIES.HREF],e),metaTags:E(u.TAG_NAMES.META,[u.TAG_PROPERTIES.NAME,u.TAG_PROPERTIES.CHARSET,u.TAG_PROPERTIES.HTTPEQUIV,u.TAG_PROPERTIES.PROPERTY,u.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(u.TAG_NAMES.NOSCRIPT,[u.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:d(e),scriptTags:E(u.TAG_NAMES.SCRIPT,[u.TAG_PROPERTIES.SRC,u.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(u.TAG_NAMES.STYLE,[u.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:p(u.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=b,t.warn=m}).call(this,r(178))},178:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},179:function(e,t,r){var n=r(86);e.exports=function(e,t){if(null==e)return{};var r,o,i=n(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}}}]);
//# sourceMappingURL=1-9accc4e0f650ac3e8e41.js.map
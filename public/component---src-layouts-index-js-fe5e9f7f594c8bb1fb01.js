webpackJsonp([0x67ef26645b2ab800,0x36dfee11ec260a00],{"./node_modules/json-loader/index.js!./.cache/json/layout-index.json":function(e,t){e.exports={layoutContext:{}}},'./node_modules/babel-loader/lib/index.js?{"plugins":["C:/wamp/www/portfolio/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","C:/wamp/www/portfolio/node_modules/babel-plugin-add-module-exports/lib/index.js","C:/wamp/www/portfolio/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["C:/wamp/www/portfolio/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"C:/wamp/www/portfolio/node_modules/babel-preset-stage-0/lib/index.js","C:/wamp/www/portfolio/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js':function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n("./node_modules/react/react.js"),i=r(a),u=n("./src/layouts/index.js"),l=r(u),s=n("./node_modules/json-loader/index.js!./.cache/json/layout-index.json"),c=r(s);t.default=function(e){return i.default.createElement(l.default,o({},e,c.default))},e.exports=t.default},"./node_modules/deep-equal/index.js":function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function a(e,t,n){var a,c;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(l(e))return!!l(t)&&(e=i.call(e),t=i.call(t),s(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}try{var d=u(e),f=u(t)}catch(e){return!1}if(d.length!=f.length)return!1;for(d.sort(),f.sort(),a=d.length-1;a>=0;a--)if(d[a]!=f[a])return!1;for(a=d.length-1;a>=0;a--)if(c=d[a],!s(e[c],t[c],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,u=n("./node_modules/deep-equal/lib/keys.js"),l=n("./node_modules/deep-equal/lib/is_arguments.js"),s=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:a(e,t,n))}},"./node_modules/deep-equal/lib/is_arguments.js":function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},"./node_modules/deep-equal/lib/keys.js":function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},"./node_modules/exenv/index.js":function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return a}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},"./node_modules/react-helmet/lib/Helmet.js":function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n("./node_modules/react/react.js"),d=r(c),f=n("./node_modules/prop-types/index.js"),p=r(f),T=n("./node_modules/react-side-effect/lib/index.js"),E=r(T),m=n("./node_modules/deep-equal/index.js"),A=r(m),y=n("./node_modules/react-helmet/lib/HelmetUtils.js"),h=n("./node_modules/react-helmet/lib/HelmetConstants.js"),b=function(e){var t,n;return n=t=function(t){function n(){return a(this,n),i(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,A.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case h.TAG_NAMES.SCRIPT:case h.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case h.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return l({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[l({},o,this.mapNestedChildrenToProps(n,a))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case h.TAG_NAMES.TITLE:return l({},o,(t={},t[r.type]=i,t.titleAttributes=l({},a),t));case h.TAG_NAMES.BODY:return l({},o,{bodyAttributes:l({},a)});case h.TAG_NAMES.HTML:return l({},o,{htmlAttributes:l({},a)})}return l({},o,(n={},n[r.type]=l({},a),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=l({},t);return Object.keys(e).forEach(function(t){var r;n=l({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.default.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,i=a.children,u=o(a,["children"]),l=(0,y.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,i),e.type){case h.TAG_NAMES.LINK:case h.TAG_NAMES.META:case h.TAG_NAMES.NOSCRIPT:case h.TAG_NAMES.SCRIPT:case h.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),a=l({},r);return n&&(a=this.mapChildrenToProps(n,a)),d.default.createElement(e,a)},s(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(d.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,y.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},_=function(){return null},S=(0,E.default)(y.reducePropsToState,y.handleClientStateChange,y.mapStateOnServer)(_),v=b(S);v.renderStatic=v.rewind,t.Helmet=v,t.default=v},"./node_modules/react-helmet/lib/HelmetConstants.js":function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},"./node_modules/react-helmet/lib/HelmetUtils.js":function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestIdleCallback=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n("./node_modules/react/react.js"),u=r(i),l=n("./node_modules/object-assign/index.js"),s=r(l),c=n("./node_modules/react-helmet/lib/HelmetConstants.js"),d=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=A(e,c.TAG_NAMES.TITLE),n=A(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=A(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return A(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return a({},e,t)},{})},E=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[c.TAG_NAMES.BASE]}).map(function(e){return e[c.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o],i=a.toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},m=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&_("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var u=a[i],l=u.toLowerCase();t.indexOf(l)===-1||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===c.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),t.indexOf(u)===-1||u!==c.TAG_PROPERTIES.INNER_HTML&&u!==c.TAG_PROPERTIES.CSS_TEXT&&u!==c.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(o),i=0;i<a.length;i++){var u=a[i],l=(0,s.default)({},r[u],o[u]);r[u]=l}return e},[]).reverse()},A=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},y=function(e){return{baseTag:E([c.TAG_PROPERTIES.HREF],e),bodyAttributes:T(c.ATTRIBUTE_NAMES.BODY,e),encode:A(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(c.ATTRIBUTE_NAMES.HTML,e),linkTags:m(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:m(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:m(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:T(c.ATTRIBUTE_NAMES.TITLE,e)}},h=function(){return"undefined"!=typeof window&&"undefined"!=typeof window.requestIdleCallback?window.requestIdleCallback:function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)}}(),b=function(){return"undefined"!=typeof window&&"undefined"!=typeof window.cancelIdleCallback?window.cancelIdleCallback:function(e){return clearTimeout(e)}}(),_=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,v=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.htmlAttributes,o=e.linkTags,a=e.metaTags,i=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,d=e.title,f=e.titleAttributes;S&&b(S),S=h(function(){O(c.TAG_NAMES.BODY,n),O(c.TAG_NAMES.HTML,r),g(d,f);var p={baseTag:w(c.TAG_NAMES.BASE,t),linkTags:w(c.TAG_NAMES.LINK,o),metaTags:w(c.TAG_NAMES.META,a),noscriptTags:w(c.TAG_NAMES.NOSCRIPT,i),scriptTags:w(c.TAG_NAMES.SCRIPT,l),styleTags:w(c.TAG_NAMES.STYLE,s)},T={},E={};Object.keys(p).forEach(function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(T[e]=n),r.length&&(E[e]=p[e].oldTags)}),S=null,u(e,T,E)})},g=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=Array.isArray(e)?e.join(""):e),O(c.TAG_NAMES.TITLE,t)},O=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),u=0;u<i.length;u++){var l=i[u],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),o.indexOf(l)===-1&&o.push(l);var d=a.indexOf(l);d!==-1&&a.splice(d,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},w=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return i=t,n.isEqualNode(e)})?o.splice(i,1):a.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:a}},P=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},R=function(e,t,n,r){var o=P(n);return o?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+d(t,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+d(t,r)+"</"+e+">"},M=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+d(r[t],n)+'"';return e?e+" "+o:o},""),a=r.innerHTML||r.cssText||"",i=c.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+a+"</"+e+">")},"")},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t},t)},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t},t)},I=function(e,t,n){var r,o=(r={key:t},r[c.HELMET_ATTRIBUTE]=!0,r),a=C(n,o);return[u.default.createElement(c.TAG_NAMES.TITLE,a,t)]},N=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},L=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return I(e,t.title,t.titleAttributes,n)},toString:function(){return R(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return C(t)},toString:function(){return P(t)}};default:return{toComponent:function(){return N(e,t)},toString:function(){return M(e,t,n)}}}},G=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,u=e.noscriptTags,l=e.scriptTags,s=e.styleTags,d=e.title,f=void 0===d?"":d,p=e.titleAttributes;return{base:L(c.TAG_NAMES.BASE,t,r),bodyAttributes:L(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:L(c.ATTRIBUTE_NAMES.HTML,o,r),link:L(c.TAG_NAMES.LINK,a,r),meta:L(c.TAG_NAMES.META,i,r),noscript:L(c.TAG_NAMES.NOSCRIPT,u,r),script:L(c.TAG_NAMES.SCRIPT,l,r),style:L(c.TAG_NAMES.STYLE,s,r),title:L(c.TAG_NAMES.TITLE,{title:f,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=j,t.handleClientStateChange=v,t.mapStateOnServer=G,t.reducePropsToState=y,t.requestIdleCallback=h,t.warn=_},"./node_modules/react-side-effect/lib/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n("./node_modules/react/react.js"),l=r(u),s=n("./node_modules/exenv/index.js"),c=r(s),d=n("./node_modules/shallowequal/index.js"),f=r(d);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(s){function d(){T=e(p.map(function(e){return e.props})),E.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof s)throw new Error("Expected WrappedComponent to be a React component.");var p=[],T=void 0,E=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,f.default)(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),d()},t.prototype.componentDidUpdate=function(){d()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),d()},t.prototype.render=function(){return l.default.createElement(s,this.props)},t}(u.Component);return E.displayName="SideEffect("+r(s)+")",E.canUseDOM=c.default.canUseDOM,E}}},"./node_modules/shallowequal/index.js":function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var s=a[l];if(!u(s))return!1;var c=e[s],d=t[s];if(o=n?n.call(r,c,d,s):void 0,o===!1||void 0===o&&c!==d)return!1}return!0}},"./portrait.svg":function(e,t,n){e.exports=n.p+"static/portrait.b1f9af23.svg"},"./src/layouts/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n("./node_modules/react/react.js"),a=r(o),i=n("./node_modules/prop-types/index.js"),u=r(i),l=n("./node_modules/gatsby-link/index.js"),s=r(l),c=n("./node_modules/react-helmet/lib/Helmet.js"),d=r(c),f=n("./portrait.svg"),p=r(f),T=n(!function(){var e=new Error('Cannot find module "../components/mainNav"');throw e.code="MODULE_NOT_FOUND",e}()),E=r(T),m=n("./node_modules/react-grid-system/build/index.js");n("./src/layouts/scss/index.scss");var A=function(){return a.default.createElement("div",{className:"main-header"},a.default.createElement("div",{className:"header-text"},a.default.createElement(s.default,{to:"/"},a.default.createElement("img",{className:"caricature",src:p.default,alt:"just a man"})),a.default.createElement("h1",null,"Silvio Oliveira"),a.default.createElement("p",null,a.default.createElement("strong",null,"Web Developer")),a.default.createElement("p",null,"Vancouver, BC"),a.default.createElement(E.default,null),a.default.createElement("nav",{className:"social-media"},a.default.createElement(s.default,{to:"http://github.com"},"github"),"  /  ",a.default.createElement(s.default,{to:"http://github.com"},"linkedin"),"  /    ",a.default.createElement(s.default,{to:"http://github.com"},"twitter"))))},y=function(){return a.default.createElement("div",{className:"footer"},a.default.createElement("p",null,"© Silvio Oliveira. This site was built with ",a.default.createElement(s.default,{to:"https://www.gatsbyjs.org/"},"GatsbyJS"),". Look at the ",a.default.createElement(s.default,{to:"https://www.github.com/silviojof/porfolio"},"source code")," to see the Javascript and React that actually build the static website."))},h=function(e){var t=e.children;return a.default.createElement("div",{className:"root"},a.default.createElement(d.default,{title:"Gatsby Default Starter",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),a.default.createElement(A,null),a.default.createElement(m.Container,null,a.default.createElement(m.Row,null,a.default.createElement(m.Col,{xs:12},a.default.createElement("div",{className:"language"},"EN/PT")),t())),a.default.createElement(y,null))};h.propTypes={children:u.default.func,route:u.default.object},t.default=h,e.exports=t.default},"./src/layouts/scss/index.scss":function(e,t){}});
//# sourceMappingURL=component---src-layouts-index-js-fe5e9f7f594c8bb1fb01.js.map
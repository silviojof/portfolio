webpackJsonp([0xd2a57dc1d8840000],{"./.cache/api-runner-browser.js":function(e,o,n){"use strict";function t(e,o,n){var t=r.map(function(n){if(n.plugin[e]){var t=n.plugin[e](o,n.options);return t}});return t=t.filter(function(e){return"undefined"!=typeof e}),t.length>0?t:n?[n]:[]}function s(e,o,n){return r.reduce(function(n,t){return t.plugin[e]?n.then(function(){return t.plugin[e](o,t.options)}):n},Promise.resolve())}o.__esModule=!0,o.apiRunner=t,o.apiRunnerAsync=s;var r=[{plugin:n("./node_modules/gatsby-plugin-catch-links/gatsby-browser.js"),options:{plugins:[]}},{plugin:n("./gatsby-browser.js"),options:{plugins:[]}}]},"./.cache/async-requires.js":function(e,o,n){"use strict";var t;o.components={"component---src-templates-work-template-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-templates-work-template-js!./src/templates/work-template.js"),"component---src-pages-404-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-404-js!./src/pages/404.js"),"component---src-pages-contact-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-contact-js!./src/pages/contact.js"),"component---src-pages-index-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-js!./src/pages/index.js"),"component---src-pages-works-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-pages-works-js!./src/pages/works.js")},o.json=(t={"layout-index.json":n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),"works-blue-plate.json":n("./node_modules/gatsby-module-loader/index.js?name=path---works-blue-plate!./.cache/json/works-blue-plate.json")},t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["works-creepee.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---works-creepee!./.cache/json/works-creepee.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["works-make-your-vote-up.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---works-make-your-vote-up!./.cache/json/works-make-your-vote-up.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["works-skate-vibes.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---works-skate-vibes!./.cache/json/works-skate-vibes.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["works-twm.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---works-twm!./.cache/json/works-twm.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["works-yoshi.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---works-yoshi!./.cache/json/works-yoshi.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["404.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["contact.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---contact!./.cache/json/contact.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["works.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---works!./.cache/json/works.json"),t["layout-index.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json"),t["404-html.json"]=n("./node_modules/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json"),t),o.layouts={"component---src-layouts-index-js":n("./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-js!./.cache/layouts/index.js")}},"./.cache/component-renderer.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function s(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function r(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}function a(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}o.__esModule=!0;var l=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},i=n("./node_modules/react/react.js"),u=t(i),d=n("./node_modules/prop-types/index.js"),c=t(d),m=n("./.cache/loader.js"),p=t(m),f=n("./.cache/emitter.js"),j=t(f),h=function(e){var o=e.children;return u.default.createElement("div",null,o())},g=function(e){function o(n){s(this,o);var t=r(this,e.call(this));return t.state={location:n.location,pageResources:p.default.getResourcesForPathname(n.location.pathname)},t}return a(o,e),o.prototype.componentWillReceiveProps=function(e){var o=this;if(this.state.location.pathname!==e.location.pathname){var n=p.default.getResourcesForPathname(e.location.pathname);n?this.setState({location:e.location,pageResources:n}):p.default.getResourcesForPathname(e.location.pathname,function(n){o.setState({location:e.location,pageResources:n})})}},o.prototype.componentDidMount=function(){var e=this;j.default.on("onPostLoadPageResources",function(o){o.page.path===p.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:o.pageResources})})},o.prototype.shouldComponentUpdate=function(e,o){return!(this.state.pageResources&&!o.pageResources)||(this.state.pageResources.component!==o.pageResources.component||(this.state.pageResources.json!==o.pageResources.json||!(this.state.location.key===o.location.key||!o.pageResources.page||!o.pageResources.page.matchPath)))},o.prototype.render=function(){return this.props.page?this.state.pageResources?(0,i.createElement)(this.state.pageResources.component,l({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:h,l({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},o}(u.default.Component);g.propTypes={page:c.default.bool,layout:c.default.bool,location:c.default.object},o.default=g,e.exports=o.default},"./.cache/emitter.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=n("./node_modules/mitt/dist/mitt.js"),r=t(s),a=(0,r.default)();e.exports=a},"./.cache/find-page.js":function(e,o,n){"use strict";var t=n("./node_modules/react-router-dom/index.js"),s={};e.exports=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(n){var r=n.slice(o.length);if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),s[r])return s[r];var a=void 0;return e.some(function(e){if(e.matchPath){if((0,t.matchPath)(r,{path:e.path})||(0,t.matchPath)(r,{path:e.matchPath}))return a=e,s[r]=e,!0}else if((0,t.matchPath)(r,{path:e.path,exact:!0}))return a=e,s[r]=e,!0;return!1}),a}}},"./node_modules/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xa2868bfb69fc9000,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/404-html.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xe70826b53c045000,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/404.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---contact!./.cache/json/contact.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xa7f31e1aeaeab800,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/contact.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x81b8806e42603000,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---!./.cache/json/layout-index.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x36dfee11ec260a00,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/layout-index.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---works-blue-plate!./.cache/json/works-blue-plate.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xa8ad792217bed800,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/works-blue-plate.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---works-creepee!./.cache/json/works-creepee.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xa4b3678e00a96000,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/works-creepee.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---works-make-your-vote-up!./.cache/json/works-make-your-vote-up.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0xbf452dc1efed8800,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/works-make-your-vote-up.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---works-skate-vibes!./.cache/json/works-skate-vibes.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(251243038296956e4,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/works-skate-vibes.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---works-twm!./.cache/json/works-twm.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x20fbca922f051e00,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/works-twm.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---works-yoshi!./.cache/json/works-yoshi.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(646681077118402e4,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/works-yoshi.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=path---works!./.cache/json/works.json":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(898689231657598e4,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n("./node_modules/json-loader/index.js!./.cache/json/works.json")})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-layouts-index-js!./.cache/layouts/index.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x67ef26645b2ab800,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/silviooliveira/portfolio/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/silviooliveira/portfolio/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/silviooliveira/portfolio/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/silviooliveira/portfolio/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/silviooliveira/portfolio/node_modules/babel-preset-stage-0/lib/index.js","/Users/silviooliveira/portfolio/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js')})})}},"./.cache/loader.js":function(e,o,n){(function(o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=n("./node_modules/react/react.js"),r=(t(s),n("./.cache/find-page.js")),a=t(r),l=n("./.cache/emitter.js"),i=t(l),u=void 0,d={},c={},m={},p={},f={},j=[],h=[],g={},b=[],y={},x=function(e){return e&&e.default||e},v=void 0,_=!0;v=n("./.cache/prefetcher.js")({getNextQueuedResources:function(){return b.slice(-1)[0]},createResourceDownload:function(e){R(e,function(){b=b.filter(function(o){return o!==e}),v.onResourcedFinished(e)})}}),i.default.on("onPreLoadPageResources",function(e){v.onPreLoadPageResources(e)}),i.default.on("onPostLoadPageResources",function(e){v.onPostLoadPageResources(e)});var w=function(e,o){return y[e]>y[o]?1:y[e]<y[o]?-1:0},k=function(e,o){return g[e]>g[o]?1:g[e]<g[o]?-1:0},R=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(p[e])o.nextTick(function(){n(null,p[e])});else{var t="component---"===e.slice(0,12)?c.components[e]||c.layouts[e]:c.json[e];t(function(o,t){p[e]=t,n(o,t)})}},N=function(e,n){f[e]?o.nextTick(function(){n(null,f[e])}):R(e,function(o,t){if(o)n(o);else{var s=x(t());f[e]=s,n(o,s)}})},C=1,P={empty:function(){h=[],g={},y={},b=[],j=[]},addPagesArray:function(e){j=e;var o="";u=(0,a.default)(e,o)},addDevRequires:function(e){d=e},addProdRequires:function(e){c=e},dequeue:function(e){return h.pop()},enqueue:function(e){if(!j.some(function(o){return o.path===e}))return!1;var o=1/C;C+=1,g[e]?g[e]+=1:g[e]=1,P.has(e)||h.unshift(e),h.sort(k);var n=u(e);return n.jsonName&&(y[n.jsonName]?y[n.jsonName]+=1+o:y[n.jsonName]=1+o,b.indexOf(n.jsonName)!==-1||p[n.jsonName]||b.unshift(n.jsonName)),n.componentChunkName&&(y[n.componentChunkName]?y[n.componentChunkName]+=1+o:y[n.componentChunkName]=1+o,b.indexOf(n.componentChunkName)!==-1||p[n.jsonName]||b.unshift(n.componentChunkName)),b.sort(w),v.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:b,resourcesCount:y}},getPages:function(){return{pathArray:h,pathCount:g}},getPage:function(e){return u(e)},has:function(e){return h.some(function(o){return o===e})},getResourcesForPathname:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};_&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(u(e)||navigator.serviceWorker.getRegistrations().then(function(e){for(var o=e,n=Array.isArray(o),t=0,o=n?o:o[Symbol.iterator]();;){var s;if(n){if(t>=o.length)break;s=o[t++]}else{if(t=o.next(),t.done)break;s=t.value}var r=s;r.unregister()}window.location.reload()})),_=!1;var t=u(e);if(!t)return void console.log("A page wasn't found for \""+e+'"');if(e=t.path,m[e])return o.nextTick(function(){n(m[e]),i.default.emit("onPostLoadPageResources",{page:t,pageResources:m[e]})}),m[e];i.default.emit("onPreLoadPageResources",{path:e});var s=void 0,r=void 0,a=void 0,l=function(){if(s&&r&&(!t.layoutComponentChunkName||a)){m[e]={component:s,json:r,layout:a};var o={component:s,json:r,layout:a};n(o),i.default.emit("onPostLoadPageResources",{page:t,pageResources:o})}};return N(t.componentChunkName,function(e,o){e&&console.log("Loading the component for "+t.path+" failed"),s=o,l()}),N(t.jsonName,function(e,o){e&&console.log("Loading the JSON for "+t.path+" failed"),r=o,l()}),void(t.layoutComponentChunkName&&N(t.layoutComponentChunkName,function(e,o){e&&console.log("Loading the Layout for "+t.path+" failed"),a=o,l()}))},peek:function(e){return h.slice(-1)[0]},length:function(){return h.length},indexOf:function(e){return h.length-h.indexOf(e)-1}};e.exports=P}).call(o,n("./node_modules/process/browser.js"))},"./.cache/pages.json":function(e,o){e.exports=[{componentChunkName:"component---src-templates-work-template-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"works-blue-plate.json",path:"/works/blue-plate"},{componentChunkName:"component---src-templates-work-template-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"works-creepee.json",path:"/works/creepee"},{componentChunkName:"component---src-templates-work-template-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"works-make-your-vote-up.json",path:"/works/make-your-vote-up"},{componentChunkName:"component---src-templates-work-template-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"works-skate-vibes.json",path:"/works/skate-vibes"},{componentChunkName:"component---src-templates-work-template-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"works-twm.json",path:"/works/twm"},{componentChunkName:"component---src-templates-work-template-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"works-yoshi.json",path:"/works/yoshi"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-contact-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"contact.json",path:"/contact/"},{componentChunkName:"component---src-pages-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-works-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"works.json",path:"/works/"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},"./.cache/prefetcher.js":function(e,o){"use strict";e.exports=function(e){var o=e.getNextQueuedResources,n=e.createResourceDownload,t=[],s=[],r=function(){var e=o();e&&(s.push(e),n(e))},a=function(e){switch(e.type){case"RESOURCE_FINISHED":s=s.filter(function(o){return o!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(o){return o!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===s.length&&0===t.length&&r()},0)};return{onResourcedFinished:function(e){a({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){a({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){a({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){a({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:s}},empty:function(){t=[],s=[]}}}},0:function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},r=n("./.cache/api-runner-browser.js"),a=n("./node_modules/react/react.js"),l=t(a),i=n("./node_modules/react-dom/index.js"),u=t(i),d=n("./node_modules/react-router-dom/index.js"),c=n("./node_modules/react-router-scroll/lib/index.js"),m=n("./node_modules/history/createBrowserHistory.js"),p=t(m),f=n("./node_modules/domready/ready.js"),j=t(f),h=n("./.cache/emitter.js"),g=t(h),b=n("./.cache/pages.json"),y=t(b),x=n("./.cache/component-renderer.js"),v=t(x),_=n("./.cache/async-requires.js"),w=t(_),k=n("./.cache/loader.js"),R=t(k);n("./node_modules/core-js/modules/es6.promise.js"),window.___emitter=g.default,R.default.addPagesArray(y.default),R.default.addProdRequires(w.default),window.asyncRequires=w.default,window.___loader=R.default,window.matchPath=d.matchPath,(0,r.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history||(window.___history=e,e.listen(function(e,o){(0,r.apiRunner)("onRouteUpdate",{location:e,action:o})}))}function o(e,o){var n=o.location.pathname,t=(0,r.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:n});if(t.length>0)return t[0];if(e){var s=e.location.pathname;if(s===n)return!1}return!0}(0,r.apiRunner)("registerServiceWorker").length>0&&n("./.cache/register-service-worker.js");var t=function(e){function o(t){t.page.path===R.default.getPage(e).path&&(g.default.off("onPostLoadPageResources",o),clearTimeout(n),window.___history.push(e))}if(window.location.pathname!==e){var n=setTimeout(function(){g.default.off("onPostLoadPageResources",o),g.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);R.default.getResourcesForPathname(e)?(clearTimeout(n),window.___history.push(e)):g.default.on("onPostLoadPageResources",o)}};window.___navigateTo=t;var i=(0,p.default)();(0,r.apiRunner)("onRouteUpdate",{location:i.location,action:i.action});var m=(0,r.apiRunner)("replaceRouterComponent",{history:i})[0],f=function(e){var o=e.children;return l.default.createElement(d.Router,{history:i},o)};R.default.getResourcesForPathname(window.location.pathname,function(){var n=function(){return(0,a.createElement)(m?m:f,null,(0,a.createElement)(c.ScrollContext,{shouldUpdateScroll:o},(0,a.createElement)((0,d.withRouter)(v.default),{layout:!0,children:function(o){return(0,a.createElement)(d.Route,{render:function(n){e(n.history);var t=o?o:n;return R.default.getPage(t.location.pathname)?(0,a.createElement)(v.default,s({page:!0},t)):(0,a.createElement)(v.default,{location:{page:!0,pathname:"/404.html"}})}})}})))},t=(0,r.apiRunner)("wrapRootComponent",{Root:n},n)[0];(0,j.default)(function(){return u.default.render(l.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,r.apiRunner)("onInitialClientRender")})})})})},"./.cache/register-service-worker.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=n("./.cache/emitter.js"),r=t(s),a="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(a+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var o=e.installing;console.log("installingWorker",o),o.addEventListener("statechange",function(){switch(o.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),r.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},"./gatsby-browser.js":function(e,o){"use strict";o.onRouteUpdate=function(e){e.location}},"./node_modules/domready/ready.js":function(e,o,n){!function(o,n){e.exports=n()}("domready",function(){var e,o=[],n=document,t=n.documentElement.doScroll,s="DOMContentLoaded",r=(t?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return r||n.addEventListener(s,e=function(){for(n.removeEventListener(s,e),r=1;e=o.shift();)e()}),function(e){r?setTimeout(e,0):o.push(e)}})},"./node_modules/gatsby-module-loader/patch.js":function(e,o,n){"use strict";function t(){function e(e){var o=t.lastChild;return"SCRIPT"!==o.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",o)):void(o.onload=o.onerror=function(){o.onload=o.onerror=null,setTimeout(e,0)})}var o,t=document.querySelector("head"),s=n.e,r=n.s;n.e=function(t,a){var l=!1,i=!0,u=function(e){a&&(a(n,e),a=null)};return!r&&o&&o[t]?void u(!0):(s(t,function(){l||(l=!0,i?setTimeout(function(){u()}):u())}),void(l||(i=!1,e(function(){l||(l=!0,r?r[t]=void 0:(o||(o={}),o[t]=!0),u(!0))}))))}}t()},"./node_modules/gatsby-plugin-catch-links/catch-links.js":function(e,o){"use strict";e.exports=function(e,o){e.addEventListener("click",function(e){if(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)return!0;for(var n=null,t=e.target;t.parentNode;t=t.parentNode)if("A"===t.nodeName){n=t;break}if(!n)return!0;if(n.target&&"_self"!==n.target.toLowerCase())return!0;if(n.pathname===window.location.pathname&&""!==n.target.hash)return!0;if(n.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var s=document.createElement("a");s.href=n.href;var r=document.createElement("a");return r.href=window.location.href,s.host!==r.host||(e.preventDefault(),o(n.getAttribute("href")),!1)})}},"./node_modules/gatsby-plugin-catch-links/gatsby-browser.js":function(e,o,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var s=n("./node_modules/gatsby-link/index.js"),r=n("./node_modules/gatsby-plugin-catch-links/catch-links.js"),a=t(r);(0,a.default)(window,function(e){(0,s.navigateTo)(e)})},"./node_modules/mitt/dist/mitt.js":function(e,o){function n(e){return e=e||Object.create(null),{on:function(o,n){(e[o]||(e[o]=[])).push(n)},off:function(o,n){e[o]&&e[o].splice(e[o].indexOf(n)>>>0,1)},emit:function(o,n){(e[o]||[]).map(function(e){e(n)}),(e["*"]||[]).map(function(e){e(o,n)})}}}e.exports=n},"./node_modules/process/browser.js":function(e,o){function n(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function s(e){if(d===setTimeout)return setTimeout(e,0);if((d===n||!d)&&setTimeout)return d=setTimeout,setTimeout(e,0);try{return d(e,0)}catch(o){try{return d.call(null,e,0)}catch(o){return d.call(this,e,0)}}}function r(e){if(c===clearTimeout)return clearTimeout(e);if((c===t||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(e);try{return c(e)}catch(o){try{return c.call(null,e)}catch(o){return c.call(this,e)}}}function a(){j&&p&&(j=!1,p.length?f=p.concat(f):h=-1,f.length&&l())}function l(){if(!j){var e=s(a);j=!0;for(var o=f.length;o;){for(p=f,f=[];++h<o;)p&&p[h].run();h=-1,o=f.length}p=null,j=!1,r(e)}}function i(e,o){this.fun=e,this.array=o}function u(){}var d,c,m=e.exports={};!function(){try{d="function"==typeof setTimeout?setTimeout:n}catch(e){d=n}try{c="function"==typeof clearTimeout?clearTimeout:t}catch(e){c=t}}();var p,f=[],j=!1,h=-1;m.nextTick=function(e){var o=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)o[n-1]=arguments[n];f.push(new i(e,o)),1!==f.length||j||s(l)},i.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=u,m.addListener=u,m.once=u,m.off=u,m.removeListener=u,m.removeAllListeners=u,m.emit=u,m.prependListener=u,m.prependOnceListener=u,m.listeners=function(e){return[]},m.binding=function(e){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(e){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-404-js!./src/pages/404.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x9427c64ab85d7000,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/silviooliveira/portfolio/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/silviooliveira/portfolio/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/silviooliveira/portfolio/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/silviooliveira/portfolio/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/silviooliveira/portfolio/node_modules/babel-preset-stage-0/lib/index.js","/Users/silviooliveira/portfolio/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/404.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-contact-js!./src/pages/contact.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x3fcbe5d4a7883c00,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/silviooliveira/portfolio/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/silviooliveira/portfolio/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/silviooliveira/portfolio/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/silviooliveira/portfolio/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/silviooliveira/portfolio/node_modules/babel-preset-stage-0/lib/index.js","/Users/silviooliveira/portfolio/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/contact.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-index-js!./src/pages/index.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x208b9a1850c78600,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/silviooliveira/portfolio/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/silviooliveira/portfolio/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/silviooliveira/portfolio/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/silviooliveira/portfolio/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/silviooliveira/portfolio/node_modules/babel-preset-stage-0/lib/index.js","/Users/silviooliveira/portfolio/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js')})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-pages-works-js!./src/pages/works.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x20a316ec76573800,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/silviooliveira/portfolio/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/silviooliveira/portfolio/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/silviooliveira/portfolio/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/silviooliveira/portfolio/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/silviooliveira/portfolio/node_modules/babel-preset-stage-0/lib/index.js","/Users/silviooliveira/portfolio/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/works.js');
})})}},"./node_modules/gatsby-module-loader/index.js?name=component---src-templates-work-template-js!./src/templates/work-template.js":function(e,o,n){n("./node_modules/gatsby-module-loader/patch.js"),e.exports=function(e){return n.e(0x9cfa958543657000,function(o,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/silviooliveira/portfolio/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/silviooliveira/portfolio/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/silviooliveira/portfolio/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/silviooliveira/portfolio/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/silviooliveira/portfolio/node_modules/babel-preset-stage-0/lib/index.js","/Users/silviooliveira/portfolio/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/work-template.js')})})}}});
//# sourceMappingURL=app-a506e3222aec88a7b11d.js.map
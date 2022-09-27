"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var n=t(e),r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function o(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function s(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((r=r.apply(e,t||[])).next())}))}function a(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function s(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}var l=function(e,t){return"".concat(e*t,"px")},d=function(e){return e&&"[object Function]"==={}.toString.call(e)},c={childrenKey:"children",classes:{},depthGap:20,displayedName:function(e){return e.data.name},filter:function(){return!0},gapMode:"margin",horizontalLineStyles:{stroke:"black",strokeWidth:1,strokeDasharray:"1 1"},idKey:"id",opened:[],verticalLineOffset:5,verticalLineStyles:{stroke:"black",strokeWidth:1,strokeDasharray:"1 1"},verticalLineTopOffset:0},h=function(e){return Object.keys(e).filter((function(t){return!!e[t]})).reduce((function(e,t){return e?"".concat(e).concat(t?" ".concat(t):""):"".concat(t)}),"")},p=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e[0]&&"string"==typeof e[0]?e.join(" "):h(e[0])};function u(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var f="ht_hyperNodeArrowIcon",y="ht_opened";u(".ht_hyperNodeArrowIcon {\n  transition: transform 0.1s ease;\n  cursor: pointer;\n  margin-right: 4px; }\n  .ht_hyperNodeArrowIcon.ht_opened {\n    transform: rotate(90deg); }\n");var g=function(e){var t,r=e.onClick,i=e.opened;return n.createElement("svg",{className:p((t={},t[f]=!0,t[y]=!!i,t)),xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 24 24",onClick:r},n.createElement("path",{d:"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"}))},v="ht_loadingSpinner";u(".ht_loadingSpinner {\n  animation: ht_ht-loading-spinner 1s linear infinite;\n  margin-right: 4px; }\n\n@keyframes ht_ht-loading-spinner {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg); } }\n");var C=function(){return n.createElement("div",{className:v},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 48 48"},n.createElement("g",{fill:"none"},n.createElement("path",{id:"track",fill:"#C6CCD2",d:"M24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0\r\n        C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 Z M24,44\r\n        C35.045695,44 44,35.045695 44,24 C44,12.954305 35.045695,4 24,4\r\n        C12.954305,4 4,12.954305 4,24 C4,35.045695 12.954305,44 24,44 Z"}),n.createElement("path",{id:"section",fill:"#3F4850",d:"M24,0 C37.254834,0 48,10.745166 48,24 L44,24 C44,12.954305 35.045695,4 24,4 L24,0 Z"}))))},b="ht_hyperNode";u(".ht_hyperNode {\n  display: flex;\n  align-items: center; }\n");var m=function(e){var t=e.displayedName,r=void 0===t?c.displayedName:t,i=e.node,o=e.onSelect,a=e.onToggle;return n.createElement("div",{className:b,onClick:o},(i.hasChildren()||i.options.async)&&!i.isLoading()&&n.createElement(g,{onClick:a,opened:i.isOpened()&&!!i.hasChildren()}),i.isLoading()&&n.createElement(C,null),n.createElement("div",null,d(r)?r(i):i.data[r]))},N="ht_verticalLine",_="ht_verticalSvgLine";u(".ht_verticalLine {\n  position: absolute;\n  top: 0;\n  transition: all 0.2s ease; }\n  .ht_verticalLine .ht_verticalSvgLine {\n    transition: all 0.2s ease; }\n");var D=function(e){var t=e.depth,r=e.depthGap,i=e.count,o=e.nodeHeight,a=e.disableTransitions,s=e.verticalLineOffset,d=void 0===s?c.verticalLineOffset:s,h=e.verticalLineStyles,p=void 0===h?c.verticalLineStyles:h,u=e.verticalLineTopOffset,f=void 0===u?c.verticalLineTopOffset:u;return n.createElement("div",{className:N,style:{left:"".concat(d,"px"),marginLeft:l(t,r),top:"".concat(f,"px")}},n.createElement("svg",{style:{height:"".concat(Math.floor(i*o-(o?o/2:0))-f,"px"),width:"".concat(p.strokeWidth,"px"),position:"absolute",transition:a?"none":"all 0.2s ease"}},n.createElement("line",{x1:"0%",y1:"0%",x2:"0%",y2:"100%",className:_,style:p})))},L="ht_horizontalLine";u(".ht_horizontalLine {\n  position: absolute;\n  top: 0;\n  display: flex;\n  align-items: center;\n  height: 100%; }\n");var O=function(e){var t=e.depth,r=e.depthGap,i=e.verticalLineOffset,o=void 0===i?c.verticalLineOffset:i,a=e.horizontalLineStyles,s=void 0===a?c.horizontalLineStyles:a,l=e.gapMode;return n.createElement("div",{className:L,style:{width:"".concat(r-o,"px"),left:"".concat("padding"===l?o-r+t*r:o-r,"px")}},n.createElement("svg",{style:{height:"".concat(s.strokeWidth,"px"),width:"100%"}},n.createElement("line",{x1:"0%",y1:"0%",x2:"100%",y2:"0%",style:s})))},E="ht_dragZone",S="ht_dragZoneVisible",w="ht_dragZoneItem",K="ht_dragZoneItemSelected";u(".ht_dragZone {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  visibility: hidden;\n  opacity: 0; }\n  .ht_dragZone.ht_dragZoneVisible {\n    visibility: visible;\n    opacity: 1; }\n  .ht_dragZone .ht_dragZoneItem {\n    width: 100%;\n    height: 100%;\n    position: relative; }\n    .ht_dragZone .ht_dragZoneItem::after {\n      content: '';\n      display: flex;\n      width: 100%;\n      height: 4px;\n      background-color: transparent;\n      transition: background-color 0.2s ease;\n      position: absolute;\n      left: 0;\n      right: 0; }\n    .ht_dragZone .ht_dragZoneItem.ht_dragZoneItemSelected::after {\n      background-color: #668fff; }\n    .ht_dragZone .ht_dragZoneItem:nth-of-type(1) {\n      top: 0; }\n    .ht_dragZone .ht_dragZoneItem:nth-of-type(2) {\n      top: 50%;\n      transform: translateX(-50%); }\n    .ht_dragZone .ht_dragZoneItem:nth-of-type(3) {\n      bottom: 0; }\n");var x=function(e){var t,r,i,o,a=e.depth,s=e.depthGap,d=e.isDragging,c=e.node,h=e.onDragEnterAfter,u=e.onDragEnterBefore,f=e.onDragEnterChildren,y=e.onDragLeave;return n.createElement("div",{className:p((t={},t[E]=!0,t[S]=!!d,t)),style:{marginLeft:l(a,s)},onDragLeave:y},n.createElement("div",{className:p((r={},r[w]=!0,r[K]="before"===c.getNodeDropContainer(),r)),onDragEnter:u}),n.createElement("div",{className:p((i={},i[w]=!0,i[K]="children"===c.getNodeDropContainer(),i)),onDragEnter:f}),n.createElement("div",{className:p((o={},o[w]=!0,o[K]="after"===c.getNodeDropContainer(),o)),onDragEnter:h}))},k={hyperTreeView:"ht_hyperTreeView",hyperTreeNodeWrapper:"ht_hyperTreeNodeWrapper",hyperNodeWrapper:"ht_hyperNodeWrapper",child:"ht_child",collapsed:"ht_collapsed",selected:"ht_selected"};u(".ht_hyperTreeView .ht_hyperTreeNodeWrapper {\n  position: relative; }\n  .ht_hyperTreeView .ht_hyperTreeNodeWrapper .ht_hyperNodeWrapper {\n    position: relative;\n    opacity: 1; }\n  .ht_hyperTreeView .ht_hyperTreeNodeWrapper .ht_child {\n    position: relative;\n    transition: all 0.2s ease;\n    transform-origin: top;\n    transform-style: flat;\n    max-height: 99999px;\n    transform: scaleY(1);\n    opacity: 1;\n    visibility: visible; }\n    .ht_hyperTreeView .ht_hyperTreeNodeWrapper .ht_child.ht_collapsed {\n      transition: all 0.2s cubic-bezier(0, 1, 0, 1);\n      transform: scaleY(0);\n      max-height: 0;\n      opacity: 0;\n      visibility: hidden;\n      overflow: hidden; }\n\n.ht_selected {\n  background-color: rgba(255, 0, 0, 0.2); }\n");var T=n.forwardRef((function(e,t){var i,o,a=e.classes,s=void 0===a?c.classes:a,d=e.depth,h=e.depthGap,u=void 0===h?c.depthGap:h,f=e.disableHorizontalLines,y=e.disableLines,g=e.displayedName,v=void 0===g?c.displayedName:g,C=e.draggable,b=e.draggableHandlers,N=e.gapMode,_=void 0===N?c.gapMode:N,D=e.horizontalLineStyles,L=e.isDragging,E=e.node,S=e.renderDragZone,w=e.renderNode,K=e.setOpen,T=e.setSelected,P=e.staticNodeHeight,H=e.verticalLineOffset,A=void 0===H?c.verticalLineOffset:H,I=n.useCallback((function(e){e.stopPropagation(),K&&K(E)}),[E,K]),Z=n.useCallback((function(){T&&T(E,!E.isSelected())}),[E,T]),B={};P&&(B.height="".concat(P,"px"));var j="padding"===_?"paddingLeft":"marginLeft",W=n.useCallback((function(e){return b.handleDragEnter(E,e)}),[b,E]);return n.createElement("div",{draggable:C,onDragStart:C?b.handleDragStart:void 0,onDragEnd:C?b.handleDrop(E,E.getNodeDropContainer()):void 0,className:p((i={},i[k.hyperNodeWrapper]=!0,i[k.selected]=E.isSelected(),i[k.dropContainer]=!!E.getNodeDropContainer(),i[s.nodeWrapper||""]=!!s.nodeWrapper,i[s.selectedNodeWrapper||""]=!(!s.selectedNodeWrapper||!E.isSelected()),i)),style:r((o={},o[j]=l(d,u),o),B),ref:t},C&&S?S({depth:d,depthGap:u,isDragging:L,node:E,onDragEnterAfter:W("after"),onDragEnterBefore:W("before"),onDragEnterChildren:W("children"),onDragLeave:b.handleDragLeave(E)}):C&&n.createElement(x,{depth:d,depthGap:u,isDragging:L,node:E,onDragEnterAfter:W("after"),onDragEnterBefore:W("before"),onDragEnterChildren:W("children"),onDragLeave:b.handleDragLeave(E)}),w?w({depth:d,depthGap:u,displayedName:v,node:E,nodeRef:t,offsetProp:j,onSelect:Z,onToggle:I}):n.createElement(m,{displayedName:v,node:E,onSelect:Z,onToggle:I}),!E.options.root&&!(y||f)&&n.createElement(O,{depth:d,depthGap:u,gapMode:_,horizontalLineStyles:D,verticalLineOffset:A}))})),P=function(e){var t,o=e.classes,a=void 0===o?c.classes:o,s=e.depth,l=e.depthGap,d=void 0===l?c.depthGap:l,h=e.disableLines,u=e.disableTransitions,f=e.disableVerticalLines,y=e.node,g=e.nodeHeight,v=e.verticalLineOffset,C=e.verticalLineStyles,b=e.verticalLineTopOffset,m=i(e,["classes","depth","depthGap","disableLines","disableTransitions","disableVerticalLines","node","nodeHeight","verticalLineOffset","verticalLineStyles","verticalLineTopOffset"]);return y.hasChildren()?!y.isOpened()&&u?null:n.createElement("div",{className:p((t={},t[k.child]=!0,t[k.collapsed]=!y.isOpened(),t[a.children||""]=!!a.children,t[a.collapsedChildren||""]=!(!a.collapsedChildren||y.isOpened()),t))},n.createElement(H,r({classes:a,data:y.getChildren(),depth:s+1,depthGap:d,disableLines:h,disableVerticalLines:f,disableTransitions:u,nodeHeight:g,verticalLineOffset:v,verticalLineStyles:C,verticalLineTopOffset:b},m)),!(h||f)&&n.createElement(D,{count:y.options.currentChilrenCount,depth:s,depthGap:d,nodeHeight:g,disableTransitions:u,verticalLineOffset:v,verticalLineStyles:C,verticalLineTopOffset:b})):null},H=n.forwardRef((function(e,t){var o=e.classes,a=void 0===o?c.classes:o,s=e.data,l=e.depth,d=void 0===l?0:l,h=i(e,["classes","data","depth"]);return n.createElement("div",{className:p(k.hyperTreeView,a.level)},s.map((function(e){return n.createElement("div",{key:e.getReactKey(),className:p(k.hyperTreeNodeWrapper,a.parentChildren)},n.createElement(T,r({classes:a,depth:d,node:e,ref:t},h)),n.createElement(P,r({classes:a,depth:d,node:e},h)))})))})),A=function(e){var t=e.classes,o=void 0===t?c.classes:t,a=e.staticNodeHeight,s=i(e,["classes","staticNodeHeight"]),l=n.useRef(null),d=n.useState(a||0),h=d[0],p=d[1];return n.useLayoutEffect((function(){l.current&&!a&&setTimeout((function(){var e,t=null===(e=l.current)||void 0===e?void 0:e.getBoundingClientRect();t&&p(t.height)}),100)}),[h,a,l.current]),n.createElement("div",{className:o.treeWrapper},n.createElement(H,r({classes:o,depth:0,nodeHeight:h,ref:l,staticNodeHeight:a},s)))};function I(e,t){var n,r;if(0===t.length)return e;for(n=0,r=t.length;n<r;n++)e=(e<<5)-e+t.charCodeAt(n),e|=0;return e<0?-2*e:e}function Z(e,t,n,r){var i,o=I(I(I(e,n),(i=t,Object.prototype.toString.call(i))),typeof t);if(null===t)return I(o,"null");if(void 0===t)return I(o,"undefined");if("object"==typeof t||"function"==typeof t){if(-1!==r.indexOf(t))return I(o,"[Circular]"+n);r.push(t);var a=function(e,t,n){return Object.keys(t).sort().reduce((function(e,r){return Z(e,t[r],r,n)}),e)}(o,t,r);if(!("valueOf"in t)||"function"!=typeof t.valueOf)return a;try{return I(a,String(t.valueOf()))}catch(e){return I(a,"[valueOf exception]"+(e.stack||e.message))}}return I(o,t.toString())}var B=function(e){return function(e,t){for(;e.length<t;)e="0"+e;return e}(Z(0,e,"",[]).toString(16),8)},j=function(){function e(e,t,n){this.data=e,this.asyncNode=!!e.getChildren,this.asyncDataLoaded=!1,this.id=e[t.idKey],this.options=t,this.children=n}return e.prototype.getData=function(){return this.data},e.prototype.setData=function(e){this.data=e},e.prototype.getChildren=function(){return this.children||[]},e.prototype.setNodeChildren=function(e,t,n){return!this.hasChildren()||n?(this.setChildren(this.setNodesParent(e,this)),this.getChildren()):"first"===t?(this.setChildren(this.setNodesParent(s(s([],e,!0),this.children||[],!0),this)),this.getChildren()):(this.setChildren(this.setNodesParent(s(s([],this.children||[],!0),e,!0),this)),this.getChildren())},e.prototype.removeChild=function(e){this.setChildren(this.getChildren().filter((function(t){return t.id!==e.id})))},e.prototype.setChildren=function(e){this.children=this.setNodesParent(e,this)},e.prototype.hasChildren=function(){return this.children&&0!==this.children.length},e.prototype.getParent=function(){return this.options.parent},e.prototype.setParent=function(e){this.options.parent=e},e.prototype.setNodesParent=function(e,t){return e.map((function(e){return e.setParent(t),e}))},e.prototype.setChildrenCount=function(e){this.options.childrenCount=e},e.prototype.getFirstChild=function(){return this.getChildren()[0]||null},e.prototype.getLastChild=function(){return this.children&&0!==this.children.length?this.children[this.children.length-1]:null},e.prototype.setOpened=function(e){this.options.opened=e||!1},e.prototype.isOpened=function(){return this.options.opened},e.prototype.setLoading=function(e){this.options.loading=e||!1},e.prototype.isLoading=function(){return this.options.loading},e.prototype.setSelected=function(e){this.options.selected=e||!1},e.prototype.isSelected=function(){return this.options.selected},e.prototype.setPath=function(e){this.options.path="".concat(e,"/").concat(this.id)},e.prototype.getPath=function(e){return e?this.options.path.split("/").filter((function(e){return!!e})):this.options.path},e.prototype.setNodeDropContainer=function(e){void 0===e&&(e=!1),this.options.dropContainer=e},e.prototype.getNodeDropContainer=function(){return this.options.dropContainer},e.prototype.getReactKey=function(){return this.options.reactKey},e.prototype.setAsyncDataLoaded=function(e){this.asyncDataLoaded=e},e.prototype.isAsyncDataLoaded=function(){return this.asyncDataLoaded},e}(),W=function(){function e(e,t,n){this.id=e,this.data=t,this.options=n,this.enhancedData=[],this.ids=[],n.enhance&&this.enhance()}return e.prototype.on=function(e){e()},e.prototype.sort=function(e){return e.sort(this.options.sort),e},e.prototype.staticEnhance=function(e,t){var n;return t instanceof j?n=t:t&&(n=this.getNodeById(t)),this._staticEnhance(e,n)},e.prototype.enhance=function(e){return this.enhancedData=this._enhance(e||this.data,this.options),this.enhancedData},e.prototype.enhanceNodes=function(e){var t=this;void 0===e&&(e=!1),e&&(this.enhancedData=this._staticShallowEnahance(this.enhancedData)),this.traverse((function(e){t._calculateChildrenCount(e)}),!1)},e.prototype.flat=function(e){var t=e?this.data:this.enhancedData;return this.flatData=this._flat(t),this.ids=this.flatData.map((function(e){return e.id})),this.flatData},e.prototype.selectAll=function(){this.traverse((function(e){e.setSelected(!0)}))},e.prototype.unselectAll=function(){this.traverse((function(e){e.setSelected(!1)}))},e.prototype.getOpenedNodes=function(){var e=[];return this.traverse((function(t){t.isOpened()&&e.push(t)})),e},e.prototype.addChildren=function(e,t,n){void 0===n&&(n="first"),this._addChildren(this.data,e,t,n)},e.prototype.addSibling=function(e,t,n){void 0===n&&(n="after"),this._addSibling(this.data,e,t,n)},e.prototype.remove=function(e,t){this._remove(this.data,null,e,t)},e.prototype.traverseRaw=function(e,t){void 0===t&&(t=!0),t?this._traverseDeep(this.data,e):this._traverseBreadth(this.data,e)},e.prototype.traverse=function(e,t){void 0===t&&(t=!0),t?this._traverseDeep(this.enhancedData,e):this._traverseBreadth(this.enhancedData,e)},e.prototype.getNodeById=function(e){return this._getNodeById(e,this.enhancedData)},e.prototype._addChildren=function(e,t,n,r){for(var i=0;i<e.length;i+=1){if(e[i][this.options.idKey]===t)switch(r){case"first":return void(e[i][this.options.childrenKey]=s(s([],n,!0),e[i][this.options.childrenKey]||[],!0));case"last":return void(e[i][this.options.childrenKey]=s(s([],e[i][this.options.childrenKey]||[],!0),n,!0));default:return}else if(e[i][this.options.childrenKey]&&0!==e[i][this.options.childrenKey].length)return void this._addChildren(e[i][this.options.childrenKey],t,n,r);return}},e.prototype._addSibling=function(e,t,n,r){for(var i=this,o=0;o<e.length;o+=1){if(e[o][this.options.childrenKey]&&0!==e[o][this.options.childrenKey].length){var a=e[o][this.options.childrenKey].findIndex((function(e){return e[i.options.idKey]===t}));if(a>-1)return void e[o][this.options.childrenKey].splice("before"===r?a:a+1,0,n);this._addSibling(e[o][this.options.childrenKey],t,n,r)}return}},e.prototype._flat=function(e){var t=this,n=[];return e.forEach((function(e){var r=e.children,o=i(e,["children"]);n.push(o),r&&0!==r.length&&n.push.apply(n,t._flat(r))})),n},e.prototype._enhance=function(e,t,n){var r=this,i=[];return this.sort(e).forEach((function(e,o){var a,s=e[r.options.childrenKey]&&0!==e[r.options.childrenKey].length?e[r.options.childrenKey]:[],l=!1;"boolean"==typeof t.defaultOpened&&(l=t.defaultOpened),Array.isArray(t.defaultOpened)&&(l=t.defaultOpened.includes(e[t.idKey]));var d=new j(e,{opened:l,selected:!1,root:!n,leaf:!s,hasChildren:0!==s.length,async:!!e.getChildren,parent:n,childrenCount:0,currentChilrenCount:0,loading:!1,idKey:r.options.idKey,childrenKey:r.options.childrenKey,path:"",dropContainer:!1,reactKey:""});d.setPath(n?n.options.path:""),d.options.reactKey="".concat(d[r.options.idKey],"-").concat(d.getPath(),"-").concat(o);var c=[];if(0!==s.length&&(c=r._enhance(r.sort(s),t,d),t.filter&&0!==c.length&&0!==(c=c.filter((function(e){return!!e.getChildren().some((function(e){return e.isOpened()}))||t.filter&&t.filter(e)}))).length))for(var h=0;h<c.length;h+=1)c[h].setOpened(!0),c[h].options.parent&&(null===(a=c[h].options.parent)||void 0===a||a.setOpened(!0));d.options.leaf&&d.setOpened(!0),d.setChildren(c),r._calculateChildrenCount(d),(!t.filter||!d.options.leaf||t.filter&&t.filter(d))&&i.push(d)})),i},e.prototype._staticEnhance=function(e,t){var n=this,r=[];return e.forEach((function(e,i){var o=e[n.options.childrenKey]||[],a=new j(e,{opened:!1,selected:!1,root:!t,leaf:0===o.length,hasChildren:0!==o.length,async:!!e.getChildren,parent:t,childrenCount:0,currentChilrenCount:0,loading:!1,idKey:n.options.idKey,childrenKey:n.options.childrenKey,path:"",dropContainer:!1,reactKey:""});a.setPath(t?t.options.path:""),a.options.reactKey="".concat(a[n.options.idKey],"-").concat(a.getPath(),"-").concat(i);var s=[];0!==o.length&&(s=n._staticEnhance(o,a)),a.setChildren(s),n._calculateChildrenCount(a),r.push(a)})),r},e.prototype._staticShallowEnahance=function(e,t){var n=this,r=[];return e.forEach((function(e){var i=e[n.options.childrenKey]||[];e.options.parent=t,e.setPath(t?t.options.path:"");var o=[];0!==i.length&&(o=n._staticShallowEnahance(i,e)),e.setChildren(o),n._calculateChildrenCount(e),r.push(e)})),r},e.prototype._calculateChildrenCount=function(e){var t=e.getChildren().reduce((function(e,t){return t.isOpened()?e+=t.options.childrenCount:e}),0);e.isOpened()?e.options.childrenCount=e.getChildren().length+t:e.options.childrenCount=e.getChildren().length;var n=e.getLastChild();if(n&&n.isOpened()){var r=e.options.childrenCount;e.options.currentChilrenCount=r-n.options.childrenCount}else e.options.currentChilrenCount=e.options.childrenCount},e.prototype._remove=function(e,t,n,r){for(var i=0;i<e.length;i+=1){if(e[i][this.options.idKey]===n){var o=e[i];return e.splice(i,1),void(t&&o[this.options.childrenKey]&&0!==o[this.options.childrenKey].length&&r&&(t[this.options.childrenKey]="start"===r?s(s([],o[this.options.childrenKey],!0),t[this.options.childrenKey]||[],!0):s(s([],t[this.options.childrenKey]||[],!0),o[this.options.childrenKey],!0)))}e[i][this.options.childrenKey]&&0!==e[i][this.options.childrenKey].length&&this._remove(e[i][this.options.childrenKey],e[i],n,r)}},e.prototype._getNodeById=function(e,t){for(var n=0;n<t.length;n+=1){if("".concat(t[n][this.options.idKey]).toLowerCase()==="".concat(e).toLowerCase())return t[n];if(t[n][this.options.childrenKey]&&0!==t[n][this.options.childrenKey].length){var r=this._getNodeById(e,t[n][this.options.childrenKey]);if(r)return r}}return null},e.prototype._traverseDeep=function(e,t,n){var r=this;void 0===n&&(n=0),e.forEach((function(e,i){t(e,i,n),e.children&&0!==e.children.length&&r._traverseDeep(e.children,t,n+1)}))},e.prototype._traverseBreadth=function(e,t,n){var r=this;void 0===n&&(n=0),e.forEach((function(e,i){e.children&&0!==e.children.length&&r._traverseBreadth(e.children,t,n+1),t(e,i,n)}))},e}(),U=new(function(){function e(){this.trees={}}return e.prototype.getIds=function(){return Object.keys(this.trees)},e.prototype.safeUpdate=function(e,t){return this.trees[e]?(this.trees[e].instance=t,this.trees[e].handlers={}):this.trees[e]={instance:t,handlers:{}},this},e.prototype.remove=function(e){var t=this.trees,n=e;t[n];var r=i(t,["symbol"==typeof n?n:n+""]);return this.trees=r,this},e.prototype.safeUpdateHandler=function(e,t,n){var i;return this.trees[e]&&(this.trees[e].handlers=r(r({},this.trees[e].handlers),((i={})[t]=n,i))),this},e.prototype.removeHandler=function(e,t){if(this.trees[e]){var n=this.trees[e].handlers,r=t;n[r];var o=i(n,["symbol"==typeof r?r:r+""]);this.trees[e].handlers=o}return this},e.prototype.updateLoadedData=function(e,t){this.trees[e]&&(this.trees[e].loadedData=t)},e}()),G={sort:function(){return 0}};exports.Arrow=g,exports.DefaultNode=m,exports.DragZone=x,exports.HorizontalLine=O,exports.Loader=C,exports.Tree=A,exports.VerticalLine=D,exports.default=A,exports.treeHandlers=U,exports.useTreeState=function(t){var n,r=t.id,i=t.data,l=t.filter,h=t.sort,p=t.defaultOpened,u=t.multipleSelect,f=t.refreshAsyncNodes,y=t.idKey,g=void 0===y?c.idKey:y,v=t.childrenKey,C=void 0===v?c.childrenKey:v,b=(n=e.useState(Object.create(null))[1],e.useCallback((function(e){e&&e(),n(Object.create(null))}),[n])),m=e.useState(null),N=m[0],_=m[1],D=e.useState(!1),L=D[0],O=D[1],E=e.useState(!1),S=E[0],w=E[1],K=e.useState([]),x=K[0],k=K[1],T=e.useState(!1),P=T[0],H=T[1];e.useEffect((function(){var e=Array.isArray(i)?i:[i];B(e)!==B(x)&&k(e)}),[i,x]);var A=e.useMemo((function(){return new W(r,x,{idKey:g,childrenKey:C,defaultOpened:!1,filter:l,enhance:!0,sort:h||G.sort})}),[r,x,g,C,l,h]),I=e.useCallback((function(e){return e instanceof j?e:A.getNodeById(e)||null}),[A]),Z=e.useCallback((function(e,t){if(e instanceof j)e.setLoading(t),b();else{var n=A.getNodeById(e);n&&(n.setLoading(t),b())}}),[b,A]),M=e.useCallback((function(e,t){!u&&t&&A.unselectAll();var n=I(e);n&&(n.setSelected(t),b())}),[b,A,u,I]),V=e.useCallback((function(e,t){if(e instanceof j)e.setNodeDropContainer(t),b();else{var n=A.getNodeById(e);n&&(n.setNodeDropContainer(t),b())}}),[b,A]),z=e.useCallback((function(e,t,n,r){if(e instanceof j)e.setNodeChildren(t,n,r),A.enhanceNodes(),b();else{var i=A.getNodeById(e);i&&(i.setNodeChildren(t,n,r),A.enhanceNodes(),b())}}),[A,b]),R=e.useCallback((function(e,t,n){var r,i=I(e);if(i&&i.options.parent){var o,a=s([],i.options.parent.getChildren(),!0);if(-1!==(o=a.findIndex((function(e){return i&&e.id===i.id})))){var l="before"===n?o:o+1;a.splice.apply(a,s([l,0],t,!1)),i.options.parent.setNodeChildren(a,"first",!0),A.enhanceNodes(!0),b()}}if(i&&i.options.root&&-1!==(o=A.enhancedData.findIndex((function(e){return i&&i.id===e.id})))){l="before"===n?o:o+1;var d=t.map((function(e){return e.options.parent=void 0,e.options.root=!0,e.options.leaf=!1,e}));(r=A.enhancedData).splice.apply(r,s([l,0],d,!1)),A.enhanceNodes(!0),b()}}),[A,b,I]),F=e.useCallback((function(e,t,n,r){z(e,A.staticEnhance(t,e),n,r)}),[z,A]),q=e.useCallback((function(e,t){var n=I(e);n&&(n.setData(t),b((function(){A.enhanceNodes()})))}),[b,A,I]),Y=e.useCallback((function(e){var t=I(e);if(t)return t.getData()}),[I]),X=e.useCallback((function(e,t){return void 0===t&&(t=!0),o(void 0,void 0,void 0,(function(){var n,r,i;return a(this,(function(o){switch(o.label){case 0:if(!(n=I(e)))return[2];if(!n.data.getChildren||!d(n.data.getChildren)||n.isOpened()||n.isAsyncDataLoaded())return[3,5];Z(n,!0),o.label=1;case 1:return o.trys.push([1,3,,4]),[4,n.data.getChildren({node:e})];case 2:return r=o.sent(),Z(e,!1),n.setOpened(!0),f||n.setAsyncDataLoaded(!0),F(e,r,"last",!0),[3,4];case 3:return i=o.sent(),console.error("react-hyper-tree: Error on getChildren",i),[3,4];case 4:return[3,6];case 5:n.setOpened(!t||!n.isOpened()),A.enhanceNodes(),o.label=6;case 6:return b((function(){A.enhanceNodes()})),[2]}}))}))}),[I,b,Z,f,F,A]),J=e.useCallback((function(e){return o(void 0,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:return[4,e.split("/").reduce((function(e,t){return o(void 0,void 0,void 0,(function(){return a(this,(function(n){switch(n.label){case 0:return[4,e];case 1:return n.sent(),[4,X(t)];case 2:return n.sent(),[2]}}))}))}),Promise.resolve())];case 1:return t.sent(),[2]}}))}))}),[X]),Q=e.useCallback((function(e,t,n){return void 0===t&&(t=!1),void 0===n&&(n=!1),o(void 0,void 0,void 0,(function(){var r,i,o,s;return a(this,(function(a){switch(a.label){case 0:r=e.split("/"),i=0,a.label=1;case 1:return i<r.length?(o=r[i])&&(s=I(o))?s.isOpened()?[3,3]:[4,X(s)]:[3,4]:[3,5];case 2:a.sent(),a.label=3;case 3:(t||i===r.length-1)&&M(s,!n||!s.isSelected()),a.label=4;case 4:return i+=1,[3,1];case 5:return A.enhanceNodes(),b(),[2]}}))}))}),[b,I,X,M,A]),$=e.useCallback((function(){u&&(A.selectAll(),A.enhanceNodes(),b())}),[A,b,u]),ee=e.useCallback((function(){A.unselectAll(),A.enhanceNodes(),b()}),[A,b]);e.useEffect((function(){var e=function(){return o(void 0,void 0,void 0,(function(){var e,t,n,r;return a(this,(function(i){switch(i.label){case 0:if(H(!0),e=!1,0===(t=A.flat()).length)return[2];n=0,i.label=1;case 1:return n<t.length?(r=t[n],"boolean"!=typeof p?[3,3]:[4,X(r.id,!1)]):[3,7];case 2:return i.sent(),[3,5];case 3:return(null==p?void 0:p.includes(r.id))?[4,X(r.id,!1)]:[3,5];case 4:i.sent(),i.label=5;case 5:r.data.getChildren&&(e=!0),i.label=6;case 6:return n+=1,[3,1];case 7:if(!e)return[3,13];t=A.flat(),n=0,i.label=8;case 8:return n<t.length?(r=t[n],"boolean"!=typeof p?[3,10]:[4,X(r.id,!1)]):[3,13];case 9:return i.sent(),[3,12];case 10:return(null==p?void 0:p.includes(r.id))?[4,X(r.id,!1)]:[3,12];case 11:i.sent(),i.label=12;case 12:return n+=1,[3,8];case 13:return[2]}}))}))};if(!P&&void 0!==p&&0!==A.flat().length){var t="boolean"==typeof p;t&&p&&e(),t||0===p.length||e()}}),[p,P,X,A]);var te=e.useCallback((function(e){e.stopPropagation(),O(!0)}),[]),ne=e.useCallback((function(e,t){return function(n){n.stopPropagation(),n.preventDefault(),V(e,t),_(e.id),w(t)}}),[V]),re=e.useCallback((function(e){return function(t){t.stopPropagation(),t.preventDefault(),V(e,!1)}}),[V]),ie=e.useCallback((function(e,t){var n;return!(null===(n=null==t?void 0:t.options)||void 0===n?void 0:n.parent)||t.options.parent.id!==e.id&&ie(e,I(t.options.parent))}),[I]),oe=e.useCallback((function(e){return function(t){if(t.stopPropagation(),t.preventDefault(),O(!1),N&&V(N,!1),N&&N!==e.id){var n=A.getNodeById(N);if(e){if(!ie(e,n))return;e.options.parent?e.options.parent.removeChild(e):A.enhancedData=A.enhancedData.filter((function(t){return t.id!==e.id})),"children"===S?(e.options.parent=n,e.options.root=!1,e.options.leaf=!0,n.setNodeChildren([e],"last"),A.enhanceNodes(!0),b()):"after"!==S&&"before"!==S||R(n,[e],S),_(null)}}}}),[N,b,A,V,R,S,ie]);U.safeUpdate(r,A).safeUpdateHandler(r,"rerender",b).safeUpdateHandler(r,"setOpen",X).safeUpdateHandler(r,"setOpenByPath",J).safeUpdateHandler(r,"setLoading",Z).safeUpdateHandler(r,"setSelected",M).safeUpdateHandler(r,"setSelectedByPath",Q).safeUpdateHandler(r,"setRawChildren",F).safeUpdateHandler(r,"setChildren",z).safeUpdateHandler(r,"setSiblings",R).safeUpdateHandler(r,"getNode",I).safeUpdateHandler(r,"setNodeData",q).safeUpdateHandler(r,"getNodeData",Y).safeUpdateHandler(r,"selectAll",$).safeUpdateHandler(r,"unselectAll",ee);var ae=e.useMemo((function(){return{setChildren:z,setLoading:Z,setOpen:X,setRawChildren:F,setSelected:M,setSiblings:R,setNodeData:q,getNode:I,getNodeData:Y,selectAll:$,unselectAll:ee,draggableHandlers:{handleDragStart:te,handleDragEnter:ne,handleDragLeave:re,handleDrop:oe}}}),[ne,re,te,oe,z,Z,X,F,M,R,q,I,Y,$,ee]);return{instance:A,handlers:ae,required:{isDragging:L,data:A.enhancedData}}};
//# sourceMappingURL=index.js.map

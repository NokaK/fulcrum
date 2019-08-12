webpackJsonp([4],{1003:function(e,t,n){"use strict";var r=n(8),o=n(41),a=function(e){var t=e.name,n=function(e){if(e.modal.hasOwnProperty(t)){var n=e.modal[t],r=n.isOpen,o=n.modalProps;return Object.assign({isOpen:r},o)}return{isOpen:!1}},a=function(e){return{close:function(){return e(Object(o.d)(t))}}};return function(e){return Object(r.connect)(n,a)(e)}};t.a=a},1005:function(e,t,n){"use strict";n.d(t,"a",function(){return A}),n.d(t,"d",function(){return s}),n.d(t,"c",function(){return d}),n.d(t,"b",function(){return m}),n.d(t,"e",function(){return f});var r=n(134),o=(n.n(r),n(367)),a=function(e){return e.product.products},i=function(e){return e.position.positions},l=function(e){return e.productManifest.manifest},A=Object(r.createSelector)([function(e){return e.product},function(e){return e.position},function(e){return e.productManifest}],function(e,t,n){return e.fetching||t.fetching||n.fetching}),c=Object(r.createSelector)([a,function(e){return e.product.decimalPlaces},i],function(e,t,n){return e.map(function(e){var r=n[e.ProductId];if(!r)return e;var a=t[e.Product],i=Object(o.a)(r,a);return Object.assign({},i,e)})}),s=Object(r.createSelector)([c,l],function(e,t){return e.map(function(e){var n=t[e.Product]||{iconFileName:e.Product+"DEFAULT_ICON"};return Object.assign({},e,n)})}),d=Object(r.createSelector)([s,function(e,t){return t}],function(e,t){return e.find(function(e){return e.ProductId===t})}),m=Object(r.createSelector)(s,function(e){return e.filter(function(e){return"-"!==e.Amount})}),f=Object(r.createSelector)(s,function(e){return e.filter(function(e){return"-"===e.Amount})})},1006:function(e,t,n){"use strict";var r=n(8),o=n(1007),a=function(e,t){return{productManifest:e.productManifest,iconFileName:t.iconFileName,size:t.size||48}};t.a=Object(r.connect)(a)(o.a)},1007:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a),l=n(26),A=n(6),c=n(1008),s=(n.n(c),Object(A.b)("product-icon")),d=function(e){var t=e.productManifest,n=e.iconFileName,r=e.size,a=void 0===r?48:r,i=e.customClass;return t.fetching?null:(null==n&&console.log(n),n&&n.indexOf("DEFAULT_ICON")>0?m(a,n):o.a.createElement("img",{alt:"product icon",height:a+"px",className:i,src:Object(l.a)("/local/product-icons/"+n)}))},m=function(e,t){return o.a.createElement("div",{className:s(null,"default"),style:{width:e,height:e,MozBorderRadius:e/2,WebkitBorderRadius:e/2,borderRadius:e/2,textAlign:"center",fontSize:.5*e,lineHeight:e+"px"}},o.a.createElement("span",null,t.charAt(0)))};d.propTypes={productManifest:i.a.object.isRequired,iconFileName:i.a.string,size:i.a.number},t.a=d},1008:function(e,t,n){var r=n(1009);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(971)(r,o);r.locals&&(e.exports=r.locals)},1009:function(e,t,n){t=e.exports=n(52)(!0),t.push([e.i,".product-icon--default{background:var(--product-icon__default-bg-color);color:var(--product-icon__default-color)}","",{version:3,sources:["/Users/joshuarossi/Code/apex-web/src/components/common/ProductIcon/ProductIcon.css"],names:[],mappings:"AAAA,uBACE,iDAAkD,AAClD,wCAA0C,CAC3C",file:"ProductIcon.css",sourcesContent:[".product-icon--default {\n  background: var(--product-icon__default-bg-color);\n  color: var(--product-icon__default-color);\n}\n"],sourceRoot:""}])},1021:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return function(t){function n(){var e,t,a,i;r(this,n);for(var l=arguments.length,A=Array(l),c=0;c<l;c++)A[c]=arguments[c];return t=a=o(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(A))),a.state={width:window.innerWidth,height:window.innerHeight},a.handleWindowSizeChange=function(){a.setState({width:window.innerWidth,height:window.innerHeight})},i=t,o(a,i)}return a(n,t),d(n,[{key:"componentWillMount",value:function(){window.addEventListener("resize",s()(this.handleWindowSizeChange,100))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",s()(this.handleWindowSizeChange,100))}},{key:"render",value:function(){var t=this.state,n=t.width,r=t.height;return A.a.createElement(e,Object.assign({width:n,height:r},this.props))}}]),n}(A.a.Component)}var l=n(0),A=n.n(l),c=n(1025),s=n.n(c),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.a=i},1025:function(e,t,n){function r(e,t,n){var r=!0,l=!0;if("function"!=typeof e)throw new TypeError(i);return a(n)&&(r="leading"in n?!!n.leading:r,l="trailing"in n?!!n.trailing:l),o(e,t,{leading:r,maxWait:t,trailing:l})}var o=n(1026),a=n(22),i="Expected a function";e.exports=r},1026:function(e,t,n){function r(e,t,n){function r(t){var n=b,r=g;return b=g=void 0,x=t,w=e.apply(r,n)}function s(e){return x=e,v=setTimeout(f,t),y?r(e):w}function d(e){var n=e-h,r=e-x,o=t-n;return E?c(o,_-r):o}function m(e){var n=e-h,r=e-x;return void 0===h||n>=t||n<0||E&&r>=_}function f(){var e=a();if(m(e))return u(e);v=setTimeout(f,d(e))}function u(e){return v=void 0,k&&b?r(e):(b=g=void 0,w)}function p(){void 0!==v&&clearTimeout(v),x=0,b=h=g=v=void 0}function C(){return void 0===v?w:u(a())}function B(){var e=a(),n=m(e);if(b=arguments,g=this,h=e,n){if(void 0===v)return s(h);if(E)return v=setTimeout(f,t),r(h)}return void 0===v&&(v=setTimeout(f,t)),w}var b,g,_,w,v,h,x=0,y=!1,E=!1,k=!0;if("function"!=typeof e)throw new TypeError(l);return t=i(t)||0,o(n)&&(y=!!n.leading,E="maxWait"in n,_=E?A(i(n.maxWait)||0,t):_,k="trailing"in n?!!n.trailing:k),B.cancel=p,B.flush=C,B}var o=n(22),a=n(1027),i=n(215),l="Expected a function",A=Math.max,c=Math.min;e.exports=r},1027:function(e,t,n){var r=n(18),o=function(){return r.Date.now()};e.exports=o},1030:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(1),o=n.n(r),a=o.a.shape({iconFileName:o.a.string,ProductFullName:o.a.string,ProductSymbol:o.a.string,ProductId:o.a.number})},1037:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a),l=n(6),A=n(53),c=n(1073),s=(n.n(c),function(e){var t=e.tooltipText,n=e.iconName,r=e.customClass,a=e.action,i=e.showLabel,c=e.tooltipPosition,s=Object(l.b)("icon-button",r);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{tooltip:t||null,"tooltip-position":c,onClick:a,className:s()},o.a.createElement(A.a,{name:n,customClass:s("icon")}),i&&o.a.createElement("span",{className:s("label")},n)))});s.defaultProps={showLabel:!0,tooltipPosition:"top"},s.protoTypes={iconName:i.a.string.isRequired,parentClass:i.a.string.isRequired,tooltipPosition:i.a.string,tooltipText:i.a.string,action:i.a.func,showLabel:i.a.bool},t.a=s},1038:function(e,t,n){var r=n(1075);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(971)(r,o);r.locals&&(e.exports=r.locals)},1060:function(e,t,n){"use strict";var r=n(8),o=n(1061),a=n(1003),i=n(41),l=function(e){return{referenceCode:e.deposit.depositStatus.requestcode}},A=Object(r.connect)(l,null)(o.a);t.a=Object(a.a)({name:i.b.DEPOSIT_REFERENCE_ID})(A)},1061:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a),l=n(209),A=n(53),c=n(6),s=n(1062),d=(n.n(s),Object(c.b)("deposit-reference-id-modal")),m=function(e,t){return o.a.createElement(l.a,{isOpen:!(!e.referenceCode||!e.isOpen),title:o.a.createElement("div",{className:d("header-content")},o.a.createElement(A.a,{name:"depositWithBorder",size:44,customClass:d("icon")}),o.a.createElement("div",{className:d("header-title")},t.t("Deposit")+" "+e.ProductSymbol)),close:e.close,footer:{buttonText:t.t("OK"),buttonStyle:"additive",onClick:function(){return e.close}},customClass:d()},o.a.createElement("p",{className:d("title")},t.t("Your deposit ticket has been created successfully.")),o.a.createElement("div",{className:d("reference-code-container")},o.a.createElement("p",{className:d("reference-code-title")},t.t("Please note the following deposit ticket ID for your reference:")),o.a.createElement("p",{className:d("reference-code")},e.referenceCode)))};m.propTypes={close:i.a.func.isRequired},m.defaultProps={referenceCode:""},m.contextTypes={t:i.a.func.isRequired},t.a=m},1062:function(e,t,n){var r=n(1063);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(971)(r,o);r.locals&&(e.exports=r.locals)},1063:function(e,t,n){t=e.exports=n(52)(!0),t.push([e.i,".deposit-reference-id-modal{border-radius:1rem}.deposit-reference-id-modal__content{padding:3rem}.deposit-reference-id-modal__header{border-bottom:2px solid var(--tab__border-color--selected);padding:1.6rem}.deposit-reference-id-modal__header-content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.deposit-reference-id-modal__header-title{font-size:2rem;color:var(--font__color-primary)}.deposit-reference-id-modal__footer{padding:2.5rem 3rem;margin:0}.deposit-reference-id-modal__btn{width:100%;-ms-flex-align:center;align-items:center;border-radius:.5rem;background:var(--success__bg-color);font-size:1.4rem;height:5rem;-ms-flex-pack:center;justify-content:center;padding:2.8rem 0}.deposit-reference-id-modal__title{font-size:1.6rem;color:var(--font__color-primary);margin-bottom:2.6rem}.deposit-reference-id-modal__icon{margin-right:1.5rem;width:3.6rem;height:3.6rem}.deposit-reference-id-modal__reference-code-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:11.7rem;width:35.1rem;border-radius:6px;border:1px solid #394154;padding:2.1rem 5rem;margin-bottom:1rem}.deposit-reference-id-modal__reference-code-title{font-size:1.2rem;color:var(--font__color-secondary);text-align:center;margin:0;padding-bottom:2rem}.deposit-reference-id-modal__reference-code{font-size:1.6rem;color:var(--font__color-primary);text-align:center;margin:0}.deposit-reference-id-modal__close-icon{color:var(--font__color-primary);padding:1.4rem 1.1rem}","",{version:3,sources:["/Users/joshuarossi/Code/apex-web/src/components/Retail/RetailSidePanes/RetailFiatDeposit/DepositReferenceIdModal.css"],names:[],mappings:"AAAA,4BACE,kBAAoB,CACrB,AAED,qCACE,YAAc,CACf,AAED,oCACE,2DAA4D,AAC5D,cAAgB,CACjB,AAED,4CACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,kBAAoB,CACzB,AAED,0CACE,eAAgB,AAChB,gCAAkC,CACnC,AAED,oCACE,oBAAqB,AACrB,QAAU,CACX,AAED,iCACE,WAAY,AACZ,sBAAuB,AACnB,mBAAoB,AACxB,oBAAsB,AACtB,oCAAqC,AACrC,iBAAkB,AAClB,YAAa,AACb,qBAAsB,AAClB,uBAAwB,AAC5B,gBAAkB,CACnB,AAED,mCACE,iBAAkB,AAClB,iCAAkC,AAClC,oBAAsB,CACvB,AAED,kCACE,oBAAqB,AACrB,aAAc,AACd,aAAe,CAChB,AAED,sDACE,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,qBAAsB,AAClB,uBAAwB,AAC5B,eAAgB,AAChB,cAAe,AACf,kBAAmB,AACnB,yBAA0B,AAC1B,oBAAqB,AACrB,kBAAoB,CACrB,AAED,kDACE,iBAAkB,AAClB,mCAAoC,AACpC,kBAAmB,AACnB,SAAU,AACV,mBAAqB,CACtB,AAED,4CACE,iBAAkB,AAClB,iCAAkC,AAClC,kBAAmB,AACnB,QAAU,CACX,AAED,wCACE,iCAAkC,AAClC,qBAAuB,CACxB",file:"DepositReferenceIdModal.css",sourcesContent:[".deposit-reference-id-modal {\n  border-radius: 1rem;\n}\n\n.deposit-reference-id-modal__content {\n  padding: 3rem;\n}\n\n.deposit-reference-id-modal__header {\n  border-bottom: 2px solid var(--tab__border-color--selected);\n  padding: 1.6rem;\n}\n\n.deposit-reference-id-modal__header-content {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n}\n\n.deposit-reference-id-modal__header-title {\n  font-size: 2rem;\n  color: var(--font__color-primary);\n}\n\n.deposit-reference-id-modal__footer {\n  padding: 2.5rem 3rem;\n  margin: 0;\n}\n\n.deposit-reference-id-modal__btn {\n  width: 100%;\n  -ms-flex-align: center;\n      align-items: center;\n  border-radius: 0.5rem;\n  background: var(--success__bg-color);\n  font-size: 1.4rem;\n  height: 5rem;\n  -ms-flex-pack: center;\n      justify-content: center;\n  padding: 2.8rem 0;\n}\n\n.deposit-reference-id-modal__title {\n  font-size: 1.6rem;\n  color: var(--font__color-primary);\n  margin-bottom: 2.6rem;\n}\n\n.deposit-reference-id-modal__icon {\n  margin-right: 1.5rem;\n  width: 3.6rem;\n  height: 3.6rem;\n}\n\n.deposit-reference-id-modal__reference-code-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  height: 11.7rem;\n  width: 35.1rem;\n  border-radius: 6px;\n  border: solid 1px #394154;\n  padding: 2.1rem 5rem;\n  margin-bottom: 1rem;\n}\n\n.deposit-reference-id-modal__reference-code-title {\n  font-size: 1.2rem;\n  color: var(--font__color-secondary);\n  text-align: center;\n  margin: 0;\n  padding-bottom: 2rem;\n}\n\n.deposit-reference-id-modal__reference-code {\n  font-size: 1.6rem;\n  color: var(--font__color-primary);\n  text-align: center;\n  margin: 0;\n}\n\n.deposit-reference-id-modal__close-icon {\n  color: var(--font__color-primary);\n  padding: 1.4rem 1.1rem;\n}\n"],sourceRoot:""}])},1071:function(e,t,n){"use strict";var r=n(8),o=n(17),a=n(1072),i=function(e){return{openSendReceiveSidePane:function(t,n){e(Object(o.p)(t,n))}}};t.a=Object(r.connect)(null,i)(a.a)},1072:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),l=n.n(i),A=n(1),c=n.n(A),s=n(1037),d=n(6),m=n(1030),f=n(1038),u=(n.n(f),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),p=Object(d.b)("wallet-nav-item"),C=function(e){function t(){var e,n,a,i;r(this,t);for(var l=arguments.length,A=Array(l),c=0;c<l;c++)A[c]=arguments[c];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(A))),a.onSendClick=function(){a.onBtnClick(!0)},a.onReceiveClick=function(){a.onBtnClick(!1)},a.onBtnClick=function(e){var t=a.props;(0,t.openSendReceiveSidePane)(e,t.product)},i=n,o(a,i)}return a(t,e),u(t,[{key:"render",value:function(){var e=this.props.showIconButtonLabel;return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{iconName:"send",action:this.onSendClick,tooltipText:this.context.t("Send"),customClass:p(),showLabel:e}),l.a.createElement(s.a,{iconName:"receive",action:this.onReceiveClick,tooltipText:this.context.t("Receive"),customClass:p(),showLabel:e}))}}]),t}(l.a.Component);C.defaultProps={showIconButtonLabel:!0},C.propTypes={openSendReceiveSidePane:c.a.func.isRequired,product:m.a,showIconButtonLabel:c.a.bool},C.contextTypes={t:c.a.func.isRequired},t.a=C},1073:function(e,t,n){var r=n(1074);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(971)(r,o);r.locals&&(e.exports=r.locals)},1074:function(e,t,n){t=e.exports=n(52)(!0),t.push([e.i,'.icon-button{min-width:4rem;height:4rem;border-radius:4px;color:var(--font__color-secondary);background:var(--primary__bg-color);border:1px solid var(--border-secondary);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;cursor:pointer}.icon-button:hover,.icon-button:hover .icon-button__icon{color:var(--font__color-primary)}.icon-button__icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-negative:0;flex-shrink:0;width:2rem;height:2rem;color:var(--font__color-secondary);-webkit-transition:var(--transition__settings);-o-transition:var(--transition__settings);transition:var(--transition__settings)}[tooltip]{position:relative}[tooltip]:before{content:"";position:absolute;top:4px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);border-width:4px 6px 0;border-style:solid;border-color:var(--primary__bg-color) transparent transparent;z-index:999;opacity:0}.icon-button [tooltip-position=left]:before{left:0;top:50%;margin-left:-1rem;-webkit-transform:translatey(-50%) rotate(-90deg);-ms-transform:translatey(-50%) rotate(-90deg);transform:translatey(-50%) rotate(-90deg)}[tooltip-position=top]:before{left:50%}[tooltip-position=bottom]:before{top:100%;margin-top:.8rem;-webkit-transform:translateX(-50%) translatey(-100%) rotate(-180deg);-ms-transform:translateX(-50%) translatey(-100%) rotate(-180deg);transform:translateX(-50%) translatey(-100%) rotate(-180deg)}[tooltip-position=right]:before{left:100%;top:50%;margin-left:-3px;-webkit-transform:translatey(-50%) rotate(90deg);-ms-transform:translatey(-50%) rotate(90deg);transform:translatey(-50%) rotate(90deg)}[tooltip]:after{content:attr(tooltip);position:absolute;left:50%;top:4px;-webkit-transform:translateX(-50%) translateY(-100%);-ms-transform:translateX(-50%) translateY(-100%);transform:translateX(-50%) translateY(-100%);background:var(--primary__bg-color);text-align:center;color:var(--font__color-secondary);padding:4px 2px;font-size:1.2rem;min-width:8rem;border-radius:5px;pointer-events:none;padding:4px;z-index:99;opacity:0}[tooltip-position=left]:after{left:0;top:50%;margin-left:-.6rem;-webkit-transform:translateX(-100%) translateY(-50%);-ms-transform:translateX(-100%) translateY(-50%);transform:translateX(-100%) translateY(-50%)}[tooltip-position=top]:after{left:50%}[tooltip-position=bottom]:after{top:100%;margin-top:.8rem;-webkit-transform:translateX(-50%) translateY(0);-ms-transform:translateX(-50%) translateY(0);transform:translateX(-50%) translateY(0)}[tooltip-position=right]:after{left:100%;top:50%;margin-left:.4rem;-webkit-transform:translateX(0) translateY(-50%);-ms-transform:translateX(0) translateY(-50%);transform:translateX(0) translateY(-50%)}[tooltip]:hover:after,[tooltip]:hover:before{opacity:1}',"",{version:3,sources:["/Users/joshuarossi/Code/apex-web/src/components/common/APIconButton/APIconButton.css"],names:[],mappings:"AAAA,aACE,eAAgB,AAChB,YAAa,AACb,kBAAmB,AACnB,mCAAoC,AACpC,oCAAqC,AACrC,yCAA0C,AAC1C,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AAClB,uBAAwB,AAC5B,sBAAuB,AACnB,mBAAoB,AACxB,cAAgB,CACjB,AAMD,yDACE,gCAAkC,CACnC,AAED,mBACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,qBAAsB,AAClB,uBAAwB,AAC5B,oBAAqB,AACjB,cAAe,AACnB,WAAY,AACZ,YAAa,AACb,mCAAoC,AACpC,+CAAgD,AAChD,0CAA2C,AAC3C,sCAAwC,CACzC,AAED,UACE,iBAAkB,CACnB,AAED,iBACI,WAAY,AACZ,kBAAmB,AACnB,QAAQ,AACR,SAAS,AACT,mCAAoC,AAChC,+BAAgC,AAC5B,2BAA4B,AACpC,uBAA4B,AAC5B,mBAAoB,AACpB,8DAA+E,AAC/E,YAAa,AACb,SAAW,CACd,AAED,4CAGE,OAAS,AACT,QAAS,AACT,kBAAmB,AACnB,kDAAmD,AAC/C,8CAA+C,AAC3C,yCAA0C,CACnD,AAED,8BACE,QAAU,CACX,AAED,iCACE,SAAU,AACV,iBAAmB,AACnB,qEAAsE,AAClE,iEAAkE,AAC9D,4DAA6D,CACtE,AAED,gCACE,UAAW,AACX,QAAS,AACT,iBAAkB,AAClB,iDAAkD,AAC9C,6CAA8C,AAC1C,wCAAyC,CAClD,AAED,gBACI,sBAAuB,AACvB,kBAAmB,AACnB,SAAU,AACV,QAAS,AACT,qDAAwD,AACpD,iDAAoD,AAChD,6CAAgD,AACxD,oCAAqC,AACrC,kBAAmB,AACnB,mCAAoC,AACpC,gBAAiB,AACjB,iBAAkB,AAClB,eAAgB,AAChB,kBAAmB,AACnB,oBAAqB,AACrB,YAAiB,AACjB,WAAY,AACZ,SAAW,CACd,AAED,8BACE,OAAS,AACT,QAAS,AACT,mBAAqB,AACrB,qDAAwD,AACpD,iDAAoD,AAChD,4CAAgD,CACzD,AACD,6BACE,QAAU,CACX,AACD,gCACE,SAAU,AACV,iBAAmB,AACnB,iDAAmD,AAC/C,6CAA+C,AAC3C,wCAA2C,CACpD,AACD,+BACE,UAAW,AACX,QAAS,AACT,kBAAoB,AACpB,iDAAqD,AACjD,6CAAiD,AAC7C,wCAA6C,CACtD,AAED,6CACG,SAAS,CACX",file:"APIconButton.css",sourcesContent:[".icon-button {\n  min-width: 4rem;\n  height: 4rem;\n  border-radius: 4px;\n  color: var(--font__color-secondary);\n  background: var(--primary__bg-color);\n  border: 1px solid var(--border-secondary);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  cursor: pointer;\n}\n\n.icon-button:hover {\n  color: var(--font__color-primary);\n}\n\n.icon-button:hover .icon-button__icon {\n  color: var(--font__color-primary);\n}\n\n.icon-button__icon {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  width: 2rem;\n  height: 2rem;\n  color: var(--font__color-secondary);\n  -webkit-transition: var(--transition__settings);\n  -o-transition: var(--transition__settings);\n  transition: var(--transition__settings);\n}\n\n[tooltip]{\n  position:relative;\n}\n\n[tooltip]::before {\n    content: \"\";\n    position: absolute;\n    top:4px;\n    left:50%;\n    -webkit-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n            transform: translateX(-50%);\n    border-width: 4px 6px 0 6px;\n    border-style: solid;\n    border-color: var(--primary__bg-color) transparent transparent     transparent;\n    z-index: 999;\n    opacity: 0;\n}\n\n.icon-button \n\n[tooltip-position='left']::before{\n  left: 0%;\n  top: 50%;\n  margin-left: -1rem;\n  -webkit-transform: translatey(-50%) rotate(-90deg);\n      -ms-transform: translatey(-50%) rotate(-90deg);\n          transform: translatey(-50%) rotate(-90deg) \n}\n\n[tooltip-position='top']::before{\n  left: 50%;\n}\n\n[tooltip-position='bottom']::before{\n  top: 100%;\n  margin-top: 0.8rem;\n  -webkit-transform: translateX(-50%) translatey(-100%) rotate(-180deg);\n      -ms-transform: translateX(-50%) translatey(-100%) rotate(-180deg);\n          transform: translateX(-50%) translatey(-100%) rotate(-180deg)\n}\n\n[tooltip-position='right']::before{\n  left: 100%;\n  top: 50%;\n  margin-left: -3px;\n  -webkit-transform: translatey(-50%) rotate(90deg);\n      -ms-transform: translatey(-50%) rotate(90deg);\n          transform: translatey(-50%) rotate(90deg)\n}\n\n[tooltip]::after {\n    content: attr(tooltip);\n    position: absolute;\n    left: 50%;\n    top: 4px;\n    -webkit-transform: translateX(-50%)   translateY(-100%);\n        -ms-transform: translateX(-50%)   translateY(-100%);\n            transform: translateX(-50%)   translateY(-100%);\n    background: var(--primary__bg-color);\n    text-align: center;\n    color: var(--font__color-secondary);\n    padding: 4px 2px;\n    font-size: 1.2rem;\n    min-width: 8rem;\n    border-radius: 5px;\n    pointer-events: none;\n    padding: 4px 4px;\n    z-index: 99;\n    opacity: 0;\n}\n\n[tooltip-position='left']::after{\n  left: 0%;\n  top: 50%;\n  margin-left: -0.6rem;\n  -webkit-transform: translateX(-100%)   translateY(-50%);\n      -ms-transform: translateX(-100%)   translateY(-50%);\n          transform: translateX(-100%)   translateY(-50%);\n}\n[tooltip-position='top']::after{\n  left: 50%;\n}\n[tooltip-position='bottom']::after{\n  top: 100%;\n  margin-top: 0.8rem;\n  -webkit-transform: translateX(-50%) translateY(0%);\n      -ms-transform: translateX(-50%) translateY(0%);\n          transform: translateX(-50%) translateY(0%);\n}\n[tooltip-position='right']::after{\n  left: 100%;\n  top: 50%;\n  margin-left: 0.4rem;\n  -webkit-transform: translateX(0%)   translateY(-50%);\n      -ms-transform: translateX(0%)   translateY(-50%);\n          transform: translateX(0%)   translateY(-50%);\n}\n\n[tooltip]:hover::after,[tooltip]:hover::before {\n   opacity:1\n}\n\n"],sourceRoot:""}])},1075:function(e,t,n){t=e.exports=n(52)(!0),t.push([e.i,".wallet-nav-item{margin-left:1.2rem;padding:0 1rem;background:var(--wallet-card__button-bg-color);border:1px solid var(--wallet-card__button-border-color)}.wallet-nav-item__label{text-transform:capitalize;padding-left:1rem}","",{version:3,sources:["/Users/joshuarossi/Code/apex-web/src/components/WalletNavItems/WalletNavItems.css"],names:[],mappings:"AAAA,iBACE,mBAAoB,AACpB,eAAgB,AAChB,+CAAgD,AAChD,wDAA0D,CAC3D,AAED,wBACE,0BAA2B,AAC3B,iBAAmB,CACpB",file:"WalletNavItems.css",sourcesContent:[".wallet-nav-item {\n  margin-left: 1.2rem;\n  padding: 0 1rem;\n  background: var(--wallet-card__button-bg-color);\n  border: 1px solid var(--wallet-card__button-border-color);\n}\n\n.wallet-nav-item__label {\n  text-transform: capitalize;\n  padding-left: 1rem;\n}\n\n/* .wallet-nav-item__icon{\n  padding-left: 1rem;\n} */\n"],sourceRoot:""}])},1076:function(e,t,n){"use strict";var r=n(8),o=n(17),a=n(1077),i=function(e){return{openRetailFiatSidePane:function(t,n){e(Object(o.o)(t,n))}}};t.a=Object(r.connect)(null,i)(a.a)},1077:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),l=n.n(i),A=n(1),c=n.n(A),s=n(1037),d=n(6),m=n(1038),f=(n.n(m),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),u=Object(d.b)("wallet-nav-item"),p=function(e){function t(){var e,n,a,i;r(this,t);for(var l=arguments.length,A=Array(l),c=0;c<l;c++)A[c]=arguments[c];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(A))),a.onDepositClick=function(){a.onBtnClick(!0)},a.onWithdrawClick=function(){a.onBtnClick(!1)},a.onBtnClick=function(e){var t=a.props;(0,t.openRetailFiatSidePane)(e,t.product)},i=n,o(a,i)}return a(t,e),f(t,[{key:"render",value:function(){var e=this.props.showIconButtonLabel;return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{iconName:"deposit",action:this.onDepositClick,tooltipText:this.context.t("Deposit"),customClass:u(),showLabel:e}),l.a.createElement(s.a,{iconName:"withdraw",action:this.onWithdrawClick,tooltipText:this.context.t("Withdraw"),customClass:u(),showLabel:e}))}}]),t}(l.a.Component);p.defaultProps={showIconButtonLabel:!0},p.propTypes={openRetailFiatSidePane:c.a.func.isRequired,product:c.a.shape({iconFileName:c.a.string,ProductFullName:c.a.string,ProductSymbol:c.a.string,ProductId:c.a.number}),showIconButtonLabel:c.a.bool},p.contextTypes={t:c.a.func.isRequired},t.a=p},1325:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a),l=n(6),A=n(1326),c=n(1060),s=n(360),d=n(1330),m=(n.n(d),Object(l.b)("wallet-row-list")),f=function(e,t){if(e.fetching)return o.a.createElement(s.a,{customClass:m});var n=e.products.map(function(e){return o.a.createElement(A.a,{key:e.ProductId,productId:e.ProductId})});return o.a.createElement("div",{className:m()},n,o.a.createElement(c.a,null))};f.contextTypes={t:i.a.func.isRequired},t.a=f},1326:function(e,t,n){"use strict";var r=n(8),o=n(1327),a=n(1005),i=n(223),l=n(1021),A=function(e,t){var n=Object(a.c)(e,t.productId);return{iconFileName:n.iconFileName,ProductSymbol:n.ProductSymbol,ProductFullName:n.ProductFullName,isCrypto:"CryptoCurrency"===n.ProductType,ProductId:n.ProductId}},c=function(e,t){return{selectPositionAndSave:function(){e(Object(i.g)(t.productId))}}};t.a=Object(r.connect)(A,c)(Object(l.a)(o.a))},1327:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a),l=n(42),A=n(26),c=n(6),s=n(1006),d=n(1071),m=n(53),f=n(1076),u=n(136),p=n(1328),C=(n.n(p),Object(c.b)("wallet-row")),B=function(e,t){var n=e.iconFileName,r=e.ProductSymbol,a=e.ProductFullName,i=e.isCrypto,c=e.ProductId,p=e.width,B=p<768,b=p>1024?44:28,g=function(){return o.a.createElement("div",{className:C("activity-link")},o.a.createElement(l.a,{className:C("activity-link"),to:Object(A.a)(u.g.path),onClick:e.selectPositionAndSave},t.t("Details")," ",o.a.createElement(m.a,{name:"arrowNext",customClass:C("next-icon")})))};return o.a.createElement("div",{className:C()},o.a.createElement("div",{className:C("icon-label")},o.a.createElement("div",{className:C("product-icon")},o.a.createElement(s.a,{iconFileName:n,size:b})),o.a.createElement("div",{className:C("symbol-label")},r+" "+a,B&&g())),o.a.createElement("div",{className:C("activity-link-columns")},!B&&g(),o.a.createElement("div",{className:C("icon-nav-buttons")},i?o.a.createElement(d.a,{product:{iconFileName:n,ProductSymbol:r,ProductFullName:a,ProductId:c},showIconButtonLabel:!1}):o.a.createElement(f.a,{product:{iconFileName:n,ProductSymbol:r,ProductFullName:a,ProductId:c},showIconButtonLabel:!1}))))};B.contextTypes={t:i.a.func.isRequired},t.a=B},1328:function(e,t,n){var r=n(1329);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(971)(r,o);r.locals&&(e.exports=r.locals)},1329:function(e,t,n){t=e.exports=n(52)(!0),t.push([e.i,".wallet-row{display:-ms-flexbox;display:flex;min-width:100%;width:100%;border-bottom:1px solid var(--table__row-separator-color);background:var(--table__row-bg-color)}.wallet-row:hover{background:var(--wallet-row__bg-color--hover)}.wallet-row__icon-label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex:1 1;flex:1 1;padding:2% 1rem 2% 2%}.wallet-row__symbol-label{margin-left:1.5rem;font-size:1.75rem;color:var(--font__color-primary)}.wallet-row__balance-columns{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:40%;padding:0 2%}.wallet-row__label{margin-bottom:1rem;color:var(--font__color-secondary)}.wallet-row__amount{font-size:1.5rem;color:var(--font__color-primary)}.wallet-row__amount-label{color:var(--font__color-secondary)}.wallet-row__activity-link-columns{display:-ms-flexbox;display:flex;-ms-flex:2.5 1;flex:2.5 1}.wallet-row__activity-link{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:40%;padding:1%;font-size:1.4rem;border-left:1px solid var(--wallet-card__divider-border-color-secondary)}a.wallet-row__activity-link{width:100%;letter-spacing:.05rem;border:none;padding-left:3rem}.wallet-row__next-icon{margin-left:.75rem}.wallet-row__icon-nav-buttons{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;padding-right:2.5rem;width:60%;background:var(--market-data-card-secondary-background)}.wallet-row__icon-nav-buttons>.wallet-nav-item{min-width:4rem}.wallet-row__icon-nav-buttons>:first-child{margin-left:0}@media (min-width:768px) and (max-width:1024px){.wallet-row__activity-link-columns{-ms-flex:1.8 1;flex:1.8 1}}@media (min-width:320px) and (max-width:767px){.wallet-row__activity-link-columns{-ms-flex:1 1;flex:1 1;-ms-flex-pack:end;justify-content:flex-end}.wallet-row__icon-label{-ms-flex:2 1;flex:2 1;padding:2.4rem 1rem 2.4rem 2.4rem}.wallet-row__activity-link{border-left:none}a.wallet-row__activity-link{padding-left:0}.wallet-row__icon-nav-buttons{padding-right:1.2rem}}","",{version:3,sources:["/Users/joshuarossi/Code/apex-web/src/components/WalletRows/WalletRow.css"],names:[],mappings:"AAAA,YACE,oBAAqB,AACrB,aAAc,AACd,eAAgB,AAChB,WAAY,AACZ,0DAA2D,AAC3D,qCAAuC,CACxC,AAED,kBACE,6CAA+C,CAChD,AAED,wBACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,aAAc,AACV,SAAU,AACd,qBAAuB,CACxB,AAED,0BACE,mBAAoB,AACpB,kBAAmB,AACnB,gCAAkC,CACnC,AAED,6BACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,UAAW,AACX,YAAc,CACf,AAED,mBACE,mBAAoB,AACpB,kCAAoC,CACrC,AAED,oBACE,iBAAkB,AAClB,gCAAkC,CACnC,AAED,0BACE,kCAAoC,CACrC,AAED,mCACE,oBAAqB,AACrB,aAAc,AACd,eAAgB,AACZ,UAAW,CAChB,AAED,2BACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,UAAW,AACX,WAAY,AACZ,iBAAkB,AAClB,wEAA0E,CAC3E,AAED,4BACE,WAAY,AACZ,sBAAwB,AACxB,YAAa,AACb,iBAAmB,CACpB,AAED,uBACE,kBAAqB,CACtB,AAED,8BACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,kBAAmB,AACf,yBAA0B,AAC9B,qBAAsB,AACtB,UAAW,AACX,uDAAyD,CAC1D,AAED,+CACE,cAAgB,CACjB,AAED,2CACE,aAAe,CAChB,AAGD,gDACE,mCACE,eAAgB,AACZ,UAAY,CACjB,CACF,AAGD,+CACE,mCACE,aAAc,AACV,SAAU,AACd,kBAAmB,AACf,wBAA0B,CAC/B,AAED,wBACE,aAAc,AACV,SAAU,AACd,iCAAmC,CACpC,AAED,2BACE,gBAAkB,CACnB,AAED,4BACE,cAAgB,CACjB,AAED,8BACE,oBAAsB,CACvB,CACF",file:"WalletRow.css",sourcesContent:[".wallet-row {\n  display: -ms-flexbox;\n  display: flex;\n  min-width: 100%;\n  width: 100%;\n  border-bottom: 1px solid var(--table__row-separator-color);\n  background: var(--table__row-bg-color);\n}\n\n.wallet-row:hover {\n  background: var(--wallet-row__bg-color--hover);\n}\n\n.wallet-row__icon-label {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex: 1 1;\n      flex: 1 1;\n  padding: 2% 1rem 2% 2%;\n}\n\n.wallet-row__symbol-label {\n  margin-left: 1.5rem;\n  font-size: 1.75rem;\n  color: var(--font__color-primary);\n}\n\n.wallet-row__balance-columns {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  width: 40%;\n  padding: 0 2%;\n}\n\n.wallet-row__label {\n  margin-bottom: 1rem;\n  color: var(--font__color-secondary);\n}\n\n.wallet-row__amount {\n  font-size: 1.5rem;\n  color: var(--font__color-primary);\n}\n\n.wallet-row__amount-label {\n  color: var(--font__color-secondary);\n}\n\n.wallet-row__activity-link-columns {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 2.5 1;\n      flex: 2.5 1\n}\n\n.wallet-row__activity-link {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  width: 40%;\n  padding: 1%;\n  font-size: 1.4rem;\n  border-left: 1px solid var(--wallet-card__divider-border-color-secondary);\n}\n\na.wallet-row__activity-link {\n  width: 100%;\n  letter-spacing: 0.05rem;\n  border: none;\n  padding-left: 3rem;\n}\n\n.wallet-row__next-icon {\n  margin-left: 0.75rem;\n}\n\n.wallet-row__icon-nav-buttons {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n  padding-right: 2.5rem;\n  width: 60%;\n  background: var(--market-data-card-secondary-background);\n}\n\n.wallet-row__icon-nav-buttons > .wallet-nav-item {\n  min-width: 4rem;\n}\n\n.wallet-row__icon-nav-buttons > :first-child {\n  margin-left: 0;\n}\n\n/* Tablet */\n@media (min-width: 768px) and (max-width: 1024px) {\n  .wallet-row__activity-link-columns {\n    -ms-flex: 1.8 1;\n        flex: 1.8 1;\n  }\n}\n\n/* Mobile */\n@media (min-width: 320px) and (max-width: 767px) {\n  .wallet-row__activity-link-columns {\n    -ms-flex: 1 1;\n        flex: 1 1;\n    -ms-flex-pack: end;\n        justify-content: flex-end;\n  }\n\n  .wallet-row__icon-label {\n    -ms-flex: 2 1;\n        flex: 2 1;\n    padding: 2.4rem 1rem 2.4rem 2.4rem;\n  }\n\n  .wallet-row__activity-link {\n    border-left: none;\n  }\n\n  a.wallet-row__activity-link {\n    padding-left: 0;\n  }\n\n  .wallet-row__icon-nav-buttons {\n    padding-right: 1.2rem;\n  }\n}\n"],sourceRoot:""}])},1330:function(e,t,n){var r=n(1331);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(971)(r,o);r.locals&&(e.exports=r.locals)},1331:function(e,t,n){t=e.exports=n(52)(!0),t.push([e.i,".wallet-row-list{width:100%;background-color:var(--secondary__bg-color);border-radius:1rem;overflow-x:auto;max-height:50vh}.wallet-row-list::-webkit-scrollbar{width:.5rem}","",{version:3,sources:["/Users/joshuarossi/Code/apex-web/src/components/WalletRows/WalletRowList.css"],names:[],mappings:"AAAA,iBACE,WAAY,AACZ,4CAA6C,AAC7C,mBAAoB,AACpB,gBAAiB,AACjB,eAAiB,CAClB,AAED,oCACE,WAAc,CACf",file:"WalletRowList.css",sourcesContent:[".wallet-row-list {\n  width: 100%;\n  background-color: var(--secondary__bg-color);\n  border-radius: 1rem;\n  overflow-x: auto;\n  max-height: 50vh;\n}\n\n.wallet-row-list::-webkit-scrollbar {\n  width: 0.5rem;\n}\n"],sourceRoot:""}])},150:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),o=n(1005),a=n(1325),i=function(e){return{fetching:Object(o.a)(e),products:Object(o.e)(e)}};t.default=Object(r.connect)(i)(a.a)}});
//# sourceMappingURL=4.13756c2f.chunk.js.map
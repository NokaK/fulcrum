webpackJsonp([14],{1005:function(e,n,r){"use strict";r.d(n,"a",function(){return s}),r.d(n,"d",function(){return A}),r.d(n,"c",function(){return d}),r.d(n,"b",function(){return u}),r.d(n,"e",function(){return m});var t=r(134),a=(r.n(t),r(367)),o=function(e){return e.product.products},c=function(e){return e.position.positions},i=function(e){return e.productManifest.manifest},s=Object(t.createSelector)([function(e){return e.product},function(e){return e.position},function(e){return e.productManifest}],function(e,n,r){return e.fetching||n.fetching||r.fetching}),l=Object(t.createSelector)([o,function(e){return e.product.decimalPlaces},c],function(e,n,r){return e.map(function(e){var t=r[e.ProductId];if(!t)return e;var o=n[e.Product],c=Object(a.a)(t,o);return Object.assign({},c,e)})}),A=Object(t.createSelector)([l,i],function(e,n){return e.map(function(e){var r=n[e.Product]||{iconFileName:e.Product+"DEFAULT_ICON"};return Object.assign({},e,r)})}),d=Object(t.createSelector)([A,function(e,n){return n}],function(e,n){return e.find(function(e){return e.ProductId===n})}),u=Object(t.createSelector)(A,function(e){return e.filter(function(e){return"-"!==e.Amount})}),m=Object(t.createSelector)(A,function(e){return e.filter(function(e){return"-"===e.Amount})})},1006:function(e,n,r){"use strict";var t=r(8),a=r(1007),o=function(e,n){return{productManifest:e.productManifest,iconFileName:n.iconFileName,size:n.size||48}};n.a=Object(t.connect)(o)(a.a)},1007:function(e,n,r){"use strict";var t=r(0),a=r.n(t),o=r(1),c=r.n(o),i=r(26),s=r(6),l=r(1008),A=(r.n(l),Object(s.b)("product-icon")),d=function(e){var n=e.productManifest,r=e.iconFileName,t=e.size,o=void 0===t?48:t,c=e.customClass;return n.fetching?null:(null==r&&console.log(r),r&&r.indexOf("DEFAULT_ICON")>0?u(o,r):a.a.createElement("img",{alt:"product icon",height:o+"px",className:c,src:Object(i.a)("/local/product-icons/"+r)}))},u=function(e,n){return a.a.createElement("div",{className:A(null,"default"),style:{width:e,height:e,MozBorderRadius:e/2,WebkitBorderRadius:e/2,borderRadius:e/2,textAlign:"center",fontSize:.5*e,lineHeight:e+"px"}},a.a.createElement("span",null,n.charAt(0)))};d.propTypes={productManifest:c.a.object.isRequired,iconFileName:c.a.string,size:c.a.number},n.a=d},1008:function(e,n,r){var t=r(1009);"string"===typeof t&&(t=[[e.i,t,""]]);var a={hmr:!1};a.transform=void 0;r(971)(t,a);t.locals&&(e.exports=t.locals)},1009:function(e,n,r){n=e.exports=r(52)(!0),n.push([e.i,".product-icon--default{background:var(--product-icon__default-bg-color);color:var(--product-icon__default-color)}","",{version:3,sources:["/Users/joshuarossi/Code/apex-web/src/components/common/ProductIcon/ProductIcon.css"],names:[],mappings:"AAAA,uBACE,iDAAkD,AAClD,wCAA0C,CAC3C",file:"ProductIcon.css",sourcesContent:[".product-icon--default {\n  background: var(--product-icon__default-bg-color);\n  color: var(--product-icon__default-color);\n}\n"],sourceRoot:""}])},1309:function(e,n,r){"use strict";var t=r(0),a=r.n(t),o=r(1),c=r.n(o),i=r(6),s=r(1310),l=r(360),A=r(1313),d=(r.n(A),Object(i.b)("product-balances")),u=function(e,n){var r=e.balances.map(function(e){return a.a.createElement(s.a,{key:e.ProductId,balance:e})});return a.a.createElement("div",{className:d("list")},a.a.createElement("div",{className:d("header")},n.t("Balances")),e.fetching?a.a.createElement(l.a,null):a.a.createElement("div",{className:d("container")},r))};u.contextTypes={t:c.a.func.isRequired},n.a=u},1310:function(e,n,r){"use strict";var t=r(0),a=r.n(t),o=r(6),c=r(1006),i=r(1311),s=(r.n(i),Object(o.b)("balance-item")),l=function(e){return a.a.createElement("div",{className:s("container")},a.a.createElement("div",{className:s("group")},a.a.createElement("div",{className:s("icon")},a.a.createElement(c.a,{iconFileName:e.balance.iconFileName,size:24})),a.a.createElement("div",{className:s("product")},e.balance.Product+" "+e.balance.ProductFullName)),a.a.createElement("div",{className:s("group")},a.a.createElement("div",{className:s("position")},e.balance.Amount)))};n.a=l},1311:function(e,n,r){var t=r(1312);"string"===typeof t&&(t=[[e.i,t,""]]);var a={hmr:!1};a.transform=void 0;r(971)(t,a);t.locals&&(e.exports=t.locals)},1312:function(e,n,r){n=e.exports=r(52)(!0),n.push([e.i,".balance-item__container{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;padding:2rem 2.5rem;font-size:1.2rem;border-bottom:1px solid var(--component__border-color);color:var(--component__color-primary);background:var(--balance-item__container-bg-color)}.balance-item__container:hover{color:var(--component__color-primary);background:var(--balance-item__bg-color--hover)}.balance-item__group{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.balance-item__icon{margin-right:1.5rem}.balance-item__product{margin-right:1.5rem;font-size:1.2rem}.balance-item__position{margin-right:1.5rem;font-size:1.4rem}.balance-item__percentage{margin-left:1.5rem;font-size:1.4rem}","",{version:3,sources:["/Users/joshuarossi/Code/apex-web/src/components/BalancesList/BalanceItem.css"],names:[],mappings:"AAAA,yBACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,8BAA+B,AACnC,oBAAqB,AACrB,iBAAkB,AAClB,uDAAwD,AACxD,sCAAuC,AACvC,kDAAoD,CACrD,AAED,+BACE,sCAAuC,AACvC,+CAAiD,CAClD,AAED,qBACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,kBAAoB,CACzB,AAED,oBACE,mBAAqB,CACtB,AAED,uBACE,oBAAqB,AACrB,gBAAkB,CACnB,AAED,wBACE,oBAAqB,AACrB,gBAAkB,CACnB,AAED,0BACE,mBAAoB,AACpB,gBAAkB,CACnB",file:"BalanceItem.css",sourcesContent:[".balance-item__container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  padding: 2rem 2.5rem;\n  font-size: 1.2rem;\n  border-bottom: 1px solid var(--component__border-color);\n  color: var(--component__color-primary);\n  background: var(--balance-item__container-bg-color);\n}\n\n.balance-item__container:hover {\n  color: var(--component__color-primary);\n  background: var(--balance-item__bg-color--hover);\n}\n\n.balance-item__group {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n}\n\n.balance-item__icon {\n  margin-right: 1.5rem;\n}\n\n.balance-item__product {\n  margin-right: 1.5rem;\n  font-size: 1.2rem;\n}\n\n.balance-item__position {\n  margin-right: 1.5rem;\n  font-size: 1.4rem;\n}\n\n.balance-item__percentage {\n  margin-left: 1.5rem;\n  font-size: 1.4rem;\n}\n"],sourceRoot:""}])},1313:function(e,n,r){var t=r(1314);"string"===typeof t&&(t=[[e.i,t,""]]);var a={hmr:!1};a.transform=void 0;r(971)(t,a);t.locals&&(e.exports=t.locals)},1314:function(e,n,r){n=e.exports=r(52)(!0),n.push([e.i,'.product-balances__header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:var(--retail-dashboard__card-header-title-padding);height:var(--retail-dashboard__card-header-height);font-size:var(--retail-dashboard__card-header-title-font-size);color:var(--retail-dashboard__card-header-title-font-color);background:var(--component__header-bg-color);position:relative;border-top-left-radius:1rem;border-top-right-radius:1rem}.product-balances__header:after{content:"";width:100%;height:.2rem;background-color:var(--component__border-color--glow);position:absolute;bottom:0;left:0}.product-balances__container{height:calc(60rem - var(--retail-dashboard__card-header-height));overflow:auto}@media only screen and (max-width:76.8rem){.product-balances__container{height:calc(65rem - var(--retail-dashboard__card-header-height));overflow:auto}:root .product-balances__container,_:-ms-fullscreen{height:calc(50rem - var(--retail-dashboard__card-header-height))!important;overflow:auto}}',"",{version:3,sources:["/Users/joshuarossi/Code/apex-web/src/components/BalancesList/BalancesListComponent.css"],names:[],mappings:"AAAA,0BACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,gEAAiE,AACjE,mDAAoD,AACpD,+DAAgE,AAChE,4DAA6D,AAC7D,6CAA8C,AAC9C,kBAAmB,AACnB,4BAA6B,AAC7B,4BAA8B,CAC/B,AAED,gCACE,WAAY,AACZ,WAAY,AACZ,aAAe,AACf,sDAAuD,AACvD,kBAAmB,AACnB,SAAU,AACV,MAAQ,CACT,AAED,6BACE,iEAAkE,AAClE,aAAe,CAChB,AAOD,2CACE,6BACE,iEAAkE,AAClE,aAAe,CAChB,AAKD,oDACE,2EAA6E,AAC7E,aAAe,CAChB,CACF",file:"BalancesListComponent.css",sourcesContent:[".product-balances__header {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  padding-left: var(--retail-dashboard__card-header-title-padding);\n  height: var(--retail-dashboard__card-header-height);\n  font-size: var(--retail-dashboard__card-header-title-font-size);\n  color: var(--retail-dashboard__card-header-title-font-color);\n  background: var(--component__header-bg-color);\n  position: relative;\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n}\n\n.product-balances__header::after {\n  content: '';\n  width: 100%;\n  height: 0.2rem;\n  background-color: var(--component__border-color--glow);\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n\n.product-balances__container {\n  height: calc(60rem - var(--retail-dashboard__card-header-height));\n  overflow: auto;\n}\n\n\n/* MEDIA QUERIES */\n\n/* Small Devices, Tablets */\n@media only screen and (min-width : 76.8rem) {}\n@media only screen and (max-width : 76.8rem) {\n  .product-balances__container {\n    height: calc(65rem - var(--retail-dashboard__card-header-height));\n    overflow: auto;\n  }\n\n  /* BROWSER QUERIES */\n    \n  /* IE11+ specific styles */\n  _:-ms-fullscreen, :root .product-balances__container {\n    height: calc(50rem - var(--retail-dashboard__card-header-height)) !important;\n    overflow: auto;\n  }\n}\n\n"],sourceRoot:""}])},231:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=r(8),a=r(1005),o=r(1309),c=function(e){return{fetching:Object(a.a)(e),balances:Object(a.d)(e)}};n.default=Object(t.connect)(c)(o.a)}});
//# sourceMappingURL=14.7de0428b.chunk.js.map
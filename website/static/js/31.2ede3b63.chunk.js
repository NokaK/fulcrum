webpackJsonp([31],{1095:function(e,n,r){"use strict";function t(e,n){var r={};for(var t in e)n.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var s=r(0),c=r.n(s),l=r(1),A=r.n(l),m=r(7),u=r(53),p=r(210),f=r(6),d=r(1096),g=(r.n(d),function(){function e(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),n}}()),b=function(e){function n(e){o(this,n);var r=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return r.handleClick=function(){r.setState({reveal:!r.state.reveal})},r.renderIcon=function(e){return c.a.createElement("span",{onClick:r.handleClick,className:e("icon",{active:r.state.reveal})},c.a.createElement(u.a,{name:"eye"}))},r.state={value:"",reveal:!1},r}return i(n,e),g(n,[{key:"render",value:function(){var e=this.props,n=e.customClass,r=t(e,["customClass"]),o=Object(f.b)("ap-password-input",n),a=this.renderIcon(o);return c.a.createElement("div",{className:o()},c.a.createElement(p.a,Object.assign({customClass:n},r,{type:this.state.reveal?"text":"password",iconComponent:a})))}}]),n}(c.a.Component),C=function(e){return c.a.createElement(m.a,Object.assign({name:e.name,component:b},e))};C.propTypes={customClass:A.a.string},n.a=C},1096:function(e,n,r){var t=r(1097);"string"===typeof t&&(t=[[e.i,t,""]]);var o={hmr:!1};o.transform=void 0;r(971)(t,o);t.locals&&(e.exports=t.locals)},1097:function(e,n,r){n=e.exports=r(52)(!0),n.push([e.i,".ap-password-input__icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-left:-2.5rem;height:1.5rem;width:1.5rem;cursor:pointer;color:var(--font__color-secondary)}.ap-password-input__icon--active{color:var(--font__color-primary)}","",{version:3,sources:["/Users/joshuarossi/Code/apex-web/src/components/common/APPasswordInput/APPasswordInput.css"],names:[],mappings:"AAAA,yBACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,oBAAqB,AACrB,cAAe,AACf,aAAc,AACd,eAAgB,AAChB,kCAAoC,CACrC,AAED,iCACE,gCAAkC,CACnC",file:"APPasswordInput.css",sourcesContent:[".ap-password-input__icon {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  margin-left: -2.5rem;\n  height: 1.5rem;\n  width: 1.5rem;\n  cursor: pointer;\n  color: var(--font__color-secondary);\n}\n\n.ap-password-input__icon--active {\n  color: var(--font__color-primary);\n}\n"],sourceRoot:""}])},1106:function(e,n,r){"use strict";function t(e){var n=function(n){var r=n.shouldRedirect,t=n.redirectLocation;return n.isAuthenticated?Object(l.a)()?a.a.createElement(e,n):r?a.a.createElement(s.c,{to:{pathname:t.pathname,search:t.search}}):a.a.createElement(s.c,{to:Object(c.a)(A.b.path+"?default=redirect")}):a.a.createElement(e,n)},r=function(e){return{isAuthenticated:e.auth.isAuthenticated,shouldRedirect:e.auth.shouldRedirect,redirectLocation:e.auth.location}};return Object(i.connect)(r,null)(n)}var o=r(0),a=r.n(o),i=r(8),s=r(42),c=r(26),l=r(1178),A=r(136);n.a=t},1178:function(e,n,r){"use strict";r.d(n,"a",function(){return o});var t=r(376),o=function(){return!!Object(t.a)()||(!!Object(t.d)()||void 0)}},1184:function(e,n,r){"use strict";var t=r(0),o=r.n(t),a=r(1),i=r.n(a),s=r(42),c=r(210),l=r(40),A=r(53),m=r(55),u=r(1095),p=r(1106),f=r(26),d=r(5),g=r(6),b=r(1185),C=r(361),_=r(217),h=(r.n(_),r(1188)),B=(r.n(h),Object(g.b)("standalone-form")),v=Object(g.b)("login-form"),y=function(e,n){var r=e.handleSubmit,t=e.errorMsg,a=e.submitting,i=e.doSubmit,p=e.isConnected,g=d.default.LoginForm;return o.a.createElement("div",{className:B("container")+" "+v("container")},o.a.createElement("div",{className:B("header")+" "+v("header")},o.a.createElement("div",{className:B("header-text")+" "+v("header-text")},n.t("Log In to {n}",{n:g&&g.siteName?g.siteName:d.default.global.siteName})),o.a.createElement(s.a,{to:Object(f.a)("/"),className:B("close-icon")},o.a.createElement(A.a,{name:"close",classModifiers:"big"}))),o.a.createElement("form",{onSubmit:r(function(e){return i(e,p)}),className:B("form")+" "+v("form")},t&&o.a.createElement("p",{className:B("error")},t),o.a.createElement(c.b,{type:"text",name:"username",customClass:v(),label:n.t("Username"),validate:[m.p]}),o.a.createElement(u.a,{type:"password",name:"password",customClass:v(),label:n.t("Password"),validate:[m.p]}),Array.isArray(d.default.global.gateway)&&o.a.createElement(b.a,null),o.a.createElement("hr",{className:v("separator")}),o.a.createElement(l.a,{type:"submit",disabled:a,customClass:v(),styleName:C.b.additive},a?n.t("Processing..."):n.t("Log In"))),o.a.createElement("div",{className:B("footer")+" "+v("footer")},d.default.SignupForm.active&&o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{to:Object(f.a)("/signup"),className:v("link"),disabled:!0},n.t("Sign Up")),o.a.createElement("div",{className:B("footer-separator")})),o.a.createElement(s.a,{to:Object(f.a)("/problem-logging-in"),className:v("link"),disabled:!0},n.t("Problem Logging In?"))))};y.defaultProps={handleSubmit:function(){},submitting:!1},y.propTypes={handleSubmit:i.a.func,submitting:i.a.bool,referrer:i.a.string},y.contextTypes={t:i.a.func.isRequired},n.a=Object(p.a)(y)},1185:function(e,n,r){"use strict";function t(e){if(Array.isArray(e)){for(var n=0,r=Array(e.length);n<e.length;n++)r[n]=e[n];return r}return Array.from(e)}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var s=r(0),c=r.n(s),l=r(1),A=r.n(l),m=r(362),u=r(5),p=r(374),f=r(87),d=r(6),g=r(1186),b=(r.n(g),function(){function e(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),n}}()),C=Object(d.b)("trading-server"),_=function(e){function n(){return o(this,n),a(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,e),b(n,[{key:"render",value:function(){var e=Object(p.a)(),n=u.default.global.gateway.filter(function(n){return n!==e}).map(function(e){return{value:e,label:e}});return c.a.createElement(m.a,{name:"tradingServer",label:this.context.t("Select server")+":",onSelect:function(e){return Object(f.d)(e)},options:[{value:e,label:e}].concat(t(n)),showTriangles:!0,customClass:C()})}}]),n}(c.a.Component);_.contextTypes={t:A.a.func.isRequired},n.a=_},1186:function(e,n,r){var t=r(1187);"string"===typeof t&&(t=[[e.i,t,""]]);var o={hmr:!1};o.transform=void 0;r(971)(t,o);t.locals&&(e.exports=t.locals)},1187:function(e,n,r){n=e.exports=r(52)(!0),n.push([e.i,".trading-server__select-wrapper{margin-bottom:3.6rem;position:relative}.trading-server__select-label{font-size:1.4rem;letter-spacing:-.5px;position:relative}.trading-server__select{height:3.6rem;border-radius:5px;border:1px solid var(--border__color);-webkit-appearance:none}.trading-server__triangles-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:absolute;right:1.3rem;bottom:1.25rem;pointer-events:none}@media only screen and (max-width:576px){.trading-server__select{font-size:1.2rem}}","",{version:3,sources:["/Users/joshuarossi/Code/apex-web/src/components/TradingServer/TradingServerComponent.css"],names:[],mappings:"AAIA,gCACI,qBAAsB,AACtB,iBAAmB,CACtB,AAED,8BACI,iBAAkB,AAClB,qBAAuB,AACvB,iBAAmB,CACtB,AAED,wBACI,cAAe,AACf,kBAAmB,AACnB,sCAAuC,AACvC,uBAAwB,CAC3B,AAED,qCACI,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,kBAAmB,AACnB,aAAc,AACd,eAAgB,AAChB,mBAAqB,CACxB,AAKD,yCACI,wBACE,gBAAkB,CACnB,CACF",file:"TradingServerComponent.css",sourcesContent:[".trading-server {\n\n}\n\n.trading-server__select-wrapper {\n    margin-bottom: 3.6rem;\n    position: relative;\n}\n\n.trading-server__select-label {\n    font-size: 1.4rem;\n    letter-spacing: -0.5px;\n    position: relative;\n}\n\n.trading-server__select {\n    height: 3.6rem;\n    border-radius: 5px;\n    border: 1px solid var(--border__color);\n    -webkit-appearance:none;\n}\n\n.trading-server__triangles-container {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    position: absolute;\n    right: 1.3rem;\n    bottom: 1.25rem;\n    pointer-events: none;\n}\n\n/* MEDIA QUERIES */\n\n/* Extra Small Devices, Phones */\n@media only screen and (max-width: 576px) {\n    .trading-server__select {\n      font-size: 1.2rem;\n    }\n  }\n  "],sourceRoot:""}])},1188:function(e,n,r){var t=r(1189);"string"===typeof t&&(t=[[e.i,t,""]]);var o={hmr:!1};o.transform=void 0;r(971)(t,o);t.locals&&(e.exports=t.locals)},1189:function(e,n,r){n=e.exports=r(52)(!0),n.push([e.i,".login-form__form{margin:3rem 2.8rem 2.8rem}.login-form__container{border-radius:10px}.login-form__header{height:6.8rem;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom:2px solid var(--standalone-form__header-border-color)}.login-form__header-text{font-size:2rem}.login-form__footer{padding:0 2.8rem;margin:0}.login-form__label{font-size:1.4rem;letter-spacing:-.5px}.login-form__input{height:3.6rem;border-radius:5px;border:1px solid var(--border__color)}.login-form__input-wrapper{padding-bottom:3.6rem;margin:0}.login-form__btn{height:5rem;border-radius:5px;font-size:1.4rem}.login-form__separator{margin:.9rem -2.8rem 3rem}.login-form__link{font-size:1.2rem}","",{version:3,sources:["/Users/joshuarossi/Code/apex-web/src/components/Login/LoginFormComponent.css"],names:[],mappings:"AAAA,kBACE,yBAA2B,CAC5B,AACD,uBACE,kBAAoB,CACrB,AAED,oBACE,cAAe,AACf,4BAA6B,AAC7B,6BAA8B,AAC9B,mEAAqE,CACtE,AAED,yBACE,cAAgB,CACjB,AAED,oBACE,iBAAkB,AAClB,QAAU,CACX,AAED,mBACE,iBAAkB,AAClB,oBAAuB,CACxB,AAED,mBACE,cAAe,AACf,kBAAmB,AACnB,qCAAuC,CACxC,AAED,2BACE,sBAAuB,AACvB,QAAU,CACX,AAED,iBACE,YAAa,AACb,kBAAmB,AACnB,gBAAkB,CACnB,AAED,uBACE,yBAAoC,CACrC,AAED,kBACE,gBAAkB,CACnB",file:"LoginFormComponent.css",sourcesContent:[".login-form__form {\n  margin: 3rem 2.8rem 2.8rem;\n}\n.login-form__container {\n  border-radius: 10px;\n}\n\n.login-form__header {\n  height: 6.8rem;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom: 2px solid var(--standalone-form__header-border-color);\n}\n\n.login-form__header-text {\n  font-size: 2rem;\n}\n\n.login-form__footer {\n  padding: 0 2.8rem;\n  margin: 0;\n}\n\n.login-form__label {\n  font-size: 1.4rem;\n  letter-spacing: -0.5px;\n}\n\n.login-form__input {\n  height: 3.6rem;\n  border-radius: 5px;\n  border: 1px solid var(--border__color);\n}\n\n.login-form__input-wrapper {\n  padding-bottom: 3.6rem;\n  margin: 0;\n}\n\n.login-form__btn {\n  height: 5rem;\n  border-radius: 5px;\n  font-size: 1.4rem;\n}\n\n.login-form__separator {\n  margin: 0.9rem -2.8rem 3rem -2.8rem;\n}\n\n.login-form__link {\n  font-size: 1.2rem;\n}"],sourceRoot:""}])},978:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=r(8),o=r(7),a=r(1184),i=r(83),s=r(10),c=r(26),l=r(218),A=function(e){return{errorMsg:e.auth.errorMsg,isConnected:e.wsConnection.isConnected}},m=function(e,n){return{doSubmit:function(r,t){return t&&navigator.onLine?e(Object(i.g)(r)).then(function(e){e.type===i.a&&n.history.push(Object(c.a)("/twofactorauth"))}):e(Object(s.f)({id:"loginNotConnectedError",text:"We were unable to login, check your internet connection and try refreshing the page.",type:"warning"}))}}},u=Object(t.connect)(A,m)(a.a),p=Object(o.j)({form:"login",onSubmit:function(){}})(u);n.default=Object(l.withRouter)(p)}});
//# sourceMappingURL=31.2ede3b63.chunk.js.map
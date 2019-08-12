webpackJsonp([35],{1058:function(t,e,r){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=r(0),s=r.n(i),u=r(1),A=r.n(u),c=r(7),m=r(6),l=r(1091),f=(r.n(l),function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}()),p=function(t){function e(t){o(this,e);var r=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.handleChange=function(t,e){var o=t.target,n=o.value,a=r.props.maxLength,i=r.state.values.slice();n.length<=a?(i[e]=n,r.setNewValues(i)):n.length>a&&e<r.props.numberOfInputs-1&&(i[e+1]=n.substr(n.length-1,1),r.setNewValues(i))},r.handleKeyUp=function(t,e){if(8===t.keyCode&&0===t.target.value.length)for(var o=t.target.previousElementSibling;o&&null!==o;){if("input"===o.tagName.toLowerCase()){o.focus();break}o=o.previousElementSibling}else if(t.target.value.length===r.props.maxLength)for(var n=t.target.nextElementSibling;n&&null!==n;){if("input"===n.tagName.toLowerCase()){n.focus();break}n=n.nextElementSibling}},r.state={values:Array(t.numberOfInputs).fill("")},r}return a(e,t),f(e,[{key:"setNewValues",value:function(t){var e=this;this.setState({values:t},function(){e.props.input.onChange(e.state.values.join(""))})}},{key:"render",value:function(){var t=this,e=this.props,r=e.info,o=e.meta,n=e.label,a=e.customClass,i=Object(m.b)("ap-auto-tab-input",a),u=this.state.values.map(function(e,r){return s.a.createElement("input",{key:r,className:i(),onKeyUp:function(e){return t.handleKeyUp(e,r)},onChange:function(e){return t.handleChange(e,r)},value:t.state.values[r]})});return s.a.createElement("div",{className:"form-group"},"hidden"!==this.props.type&&n&&s.a.createElement("label",{className:i("label")},n),u,r&&s.a.createElement("small",{className:"form-text-muted"},r),o.touched&&o.error&&s.a.createElement("span",{className:""+i("error")},o.error))}}]),e}(s.a.Component),d=function(t){return s.a.createElement(c.a,Object.assign({name:t.name,component:p},t))};d.defaultProps={maxLength:1},d.propTypes={name:A.a.string.isRequired,type:A.a.string,customClass:A.a.string,numberOfInputs:A.a.number.isRequired,maxLength:A.a.number},e.a=d},1091:function(t,e,r){var o=r(1092);"string"===typeof o&&(o=[[t.i,o,""]]);var n={hmr:!1};n.transform=void 0;r(971)(o,n);o.locals&&(t.exports=o.locals)},1092:function(t,e,r){e=t.exports=r(52)(!0),e.push([t.i,".ap-auto-tab-input{width:3.2rem;height:3.2rem;margin:.5rem 1rem .5rem 0;border-radius:2px;text-align:center;font-size:1.4rem;color:var(--font__color-primary);background:var(--input__bg-color)}.ap-auto-tab-input__label{display:block;color:var(--font__color-secondary)}.ap-auto-tab-input__error{display:block;color:var(--danger__color);padding-top:.5rem}.ap-auto-tab-input__form-text-muted{display:inline-block;color:var(--font__color-secondary);padding-top:.5rem}","",{version:3,sources:["/Users/joshuarossi/Code/apex-web/src/components/common/APAutoTabInput/APAutoTabInput.css"],names:[],mappings:"AAAA,mBACE,aAAc,AACd,cAAe,AACf,0BAA6B,AAC7B,kBAAmB,AACnB,kBAAmB,AACnB,iBAAkB,AAClB,iCAAkC,AAClC,iCAAmC,CACpC,AAED,0BACE,cAAe,AACf,kCAAoC,CACrC,AAED,0BACE,cAAe,AACf,2BAA4B,AAC5B,iBAAoB,CACrB,AAED,oCACE,qBAAsB,AACtB,mCAAoC,AACpC,iBAAoB,CACrB",file:"APAutoTabInput.css",sourcesContent:[".ap-auto-tab-input {\n  width: 3.2rem;\n  height: 3.2rem;\n  margin: 0.5rem 1rem 0.5rem 0;\n  border-radius: 2px;\n  text-align: center;\n  font-size: 1.4rem;\n  color: var(--font__color-primary);\n  background: var(--input__bg-color);\n}\n\n.ap-auto-tab-input__label {\n  display: block;\n  color: var(--font__color-secondary);\n}\n\n.ap-auto-tab-input__error {\n  display: block;\n  color: var(--danger__color);\n  padding-top: 0.5rem;\n}\n\n.ap-auto-tab-input__form-text-muted {\n  display: inline-block;\n  color: var(--font__color-secondary);\n  padding-top: 0.5rem;\n}\n"],sourceRoot:""}])},1503:function(t,e,r){"use strict";var o=r(0),n=r.n(o),a=r(1),i=r.n(a),s=r(1058),u=r(26),A=r(6),c=r(55),m=r(42),l=r(217),f=(r.n(l),r(1504)),p=(r.n(f),Object(A.b)("standalone-form")),d=Object(A.b)("two-factor-auth-form"),h=function(t,e){var r=t.handleSubmit,o=t.is2FARequired,a=t.error;return o?n.a.createElement("div",{className:p("container")+" "+d("container")},n.a.createElement("div",{className:p("header")+" "+d("header")},n.a.createElement("div",{className:p("header-text")+" "+d("header-text")},e.t("Two-Factor Authentication"))),n.a.createElement("form",{onSubmit:r,className:p("form")+" "+d("form")},n.a.createElement("div",{className:p("information-text")+" "+d("information-text")},e.t("Enter the token from your Authenticator app.")),n.a.createElement("div",{className:p("auto-tab-input")},n.a.createElement(s.a,{name:"code",type:"input",numberOfInputs:6,validate:[c.p],customClass:d("input")}),a&&n.a.createElement("div",{className:p("error")+" "+d("error")},a)))):n.a.createElement(m.c,{to:Object(u.a)("/login")})};h.propTypes={handleSubmit:i.a.func.isRequired,submitting:i.a.bool.isRequired},h.contextTypes={t:i.a.func.isRequired},e.a=h},1504:function(t,e,r){var o=r(1505);"string"===typeof o&&(o=[[t.i,o,""]]);var n={hmr:!1};n.transform=void 0;r(971)(o,n);o.locals&&(t.exports=o.locals)},1505:function(t,e,r){e=t.exports=r(52)(!0),e.push([t.i,".two-factor-auth-form__form{text-align:center;margin:2.8rem}.two-factor-auth-form__container{border-radius:10px;width:41.6rem}.two-factor-auth-form__header{height:6.8rem;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom:2px solid var(--standalone-form__header-border-color)}.two-factor-auth-form__header-text{font-size:2rem}.two-factor-auth-form__information-text{font-size:1.6rem}.two-factor-auth-form__separator{margin:3rem -2.8rem 2.8rem}.two-factor-auth-form__btn{height:5rem;border-radius:5px;font-size:1.4rem}.two-factor-auth-form__input{height:3.6rem;width:4.8rem;border:1px solid var(--border__color);border-radius:5px;margin-top:0}.two-factor-auth-form__input:last-child{margin-right:0}.two-factor-auth-form__error,.two-factor-auth-form__input__error{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;padding-left:1.2rem}@media (max-width:576px){.two-factor-auth-form__container{width:auto}.two-factor-auth-form__form{margin:1rem}.two-factor-auth-form__input{width:4rem}}","",{version:3,sources:["/Users/joshuarossi/Code/apex-web/src/components/TwoFactorAuthForm/TwoFactorAuthFormComponent.css"],names:[],mappings:"AAIA,4BACE,kBAAmB,AACnB,aAAe,CAChB,AAED,iCACE,mBAAoB,AACpB,aAAe,CAChB,AAED,8BACE,cAAe,AACf,4BAA6B,AAC7B,6BAA8B,AAC9B,mEAAqE,CACtE,AAED,mCACE,cAAgB,CACjB,AAED,wCACE,gBAAkB,CACnB,AAED,iCACE,0BAA4B,CAC7B,AAED,2BACE,YAAa,AACb,kBAAmB,AACnB,gBAAkB,CACnB,AAED,6BACE,cAAe,AACf,aAAc,AACd,sCAAuC,AACvC,kBAAmB,AACnB,YAAc,CACf,AAED,wCACE,cAAgB,CACjB,AAED,iEAEE,oBAAqB,AACrB,aAAc,AACd,oBAAqB,AACjB,2BAA4B,AAChC,mBAAqB,CACtB,AAED,yBACE,iCACE,UAAY,CACb,AACD,4BACE,WAAa,CACd,AACD,6BACE,UAAY,CACb,CACF",file:"TwoFactorAuthFormComponent.css",sourcesContent:[".two-factor-auth-form {\n\n}\n\n.two-factor-auth-form__form {\n  text-align: center;\n  margin: 2.8rem;\n}\n\n.two-factor-auth-form__container {\n  border-radius: 10px;\n  width: 41.6rem;\n}\n\n.two-factor-auth-form__header {\n  height: 6.8rem;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom: 2px solid var(--standalone-form__header-border-color);\n}\n\n.two-factor-auth-form__header-text {\n  font-size: 2rem;\n}\n\n.two-factor-auth-form__information-text {\n  font-size: 1.6rem;\n}\n\n.two-factor-auth-form__separator {\n  margin: 3rem -2.8rem 2.8rem;\n}\n\n.two-factor-auth-form__btn {\n  height: 5rem;\n  border-radius: 5px;\n  font-size: 1.4rem;\n}\n\n.two-factor-auth-form__input {\n  height: 3.6rem;\n  width: 4.8rem;\n  border: 1px solid var(--border__color);\n  border-radius: 5px;\n  margin-top: 0;\n}\n\n.two-factor-auth-form__input:last-child {\n  margin-right: 0;\n}\n\n.two-factor-auth-form__input__error,\n.two-factor-auth-form__error {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: start;\n      justify-content: flex-start;\n  padding-left: 1.2rem;\n}\n\n@media (max-width: 576px) {\n  .two-factor-auth-form__container {\n    width: auto;\n  }\n  .two-factor-auth-form__form {\n    margin: 1rem;\n  }\n  .two-factor-auth-form__input {\n    width: 4rem;\n  }\n}\n\n"],sourceRoot:""}])},998:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(7),n=r(8),a=r(1503),i=r(83),s=function(t){return{is2FARequired:t.auth.is2FARequired}},u=Object(n.connect)(s)(a.a),A=Object(o.j)({form:"twoFactorAuth",onSubmit:function(t,e){return e(Object(i.j)(t.code)).then(function(t){if(t.type===i.b)throw new o.c({_error:"Invalid Auth Code. Please try again."});return!0})},onChange:function(t,e,r){t.code&&6===t.code.length&&r.submit()}})(u);e.default=A}});
//# sourceMappingURL=35.0764a105.chunk.js.map
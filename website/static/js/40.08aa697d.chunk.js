webpackJsonp([40],{1e3:function(e,o,r){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=r(8),t=r(7),n=r(1517),s=r(43),i=Object(t.j)({form:"forgotPassword",onSubmit:function(e,o){var r=e.resetPassword,a=e.Email;return o(r?Object(s.p)(a):Object(s.n)({Email:a}))},enableReinitialize:!0})(n.a),l=Object(a.connect)(null,function(e){return{sendResetPasswordEmail:s.p,resendVerificationEmail:s.n}}())(i);o.default=l},1034:function(e,o,r){"use strict";function a(e,o){var r={};for(var a in e)o.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r}var t=r(0),n=r.n(t),s=r(1),i=r.n(s),l=r(7),m=r(6),d=function(e){var o=e.input,r=e.customClass,t=e.meta,s=e.inline,i=e.label,l=e.info,d=e.id,c=a(e,["input","customClass","meta","inline","label","info","id"]),p=Object(m.b)(["ap-radio",r]);return delete c.meta,n.a.createElement("div",{className:p(null,{inline:s})},n.a.createElement("input",Object.assign({className:p("input"),type:"radio"},o,c,{id:d})),n.a.createElement("label",{className:p("label"),htmlFor:d},i,n.a.createElement("span",{className:p("check")}),n.a.createElement("span",{className:p("checked")})),l&&n.a.createElement("small",{className:"form-text-muted "+p("radio-info")},l),t.dirty&&t.error&&n.a.createElement("span",{className:p("radio-error")},t.error))},c=function(e){return n.a.createElement(l.a,Object.assign({name:e.name,component:d,type:"radio"},e))};c.defaultProps={name:"",label:"",autoFocus:!1,required:!1,readOnly:!1,inline:!1,info:""},c.propTypes={name:i.a.string,label:i.a.string,customClass:i.a.string,autoFocus:i.a.bool,required:i.a.bool,readOnly:i.a.bool,inline:i.a.bool,info:i.a.string,id:i.a.string.isRequired},o.a=c},1517:function(e,o,r){"use strict";function a(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function t(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!==typeof o&&"function"!==typeof o?e:o}function n(e,o){if("function"!==typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}var s=r(0),i=r.n(s),l=r(1),m=r.n(l),d=r(7),c=r(42),p=r(26),A=r(210),f=r(53),u=r(40),g=r(6),b=r(1034),_=r(55),C=r(5),E=r(361),h=r(217),w=(r.n(h),r(1518)),B=(r.n(w),function(){function e(e,o){for(var r=0;r<o.length;r++){var a=o[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(o,r,a){return r&&e(o.prototype,r),a&&e(o,a),o}}()),v=Object(g.b)("standalone-form"),y=Object(g.b)("forgot-password-form"),x=function(e){function o(e){a(this,o);var r=t(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e));return r.toggleFormType=function(){return r.setState({resetPassword:!r.state.resetPassword})},r.sendEmail=function(e){var o=r.props,a=o.sendResetPasswordEmail,t=o.resendVerificationEmail;return r.state.resetPassword?a(e.Email):t(e)},r.state={resetPassword:!0},r}return n(o,e),B(o,[{key:"render",value:function(){var e=this.context,o=this.props,r=o.handleSubmit,a=o.submitting,t=o.pristine,n=o.invalid,s=C.default.SignupForm.useEmailAsUsername,l=C.default.ProblemLoggingIn.showOptions,m=[_.p],g=e.t("Username");return!s&&this.state.resetPassword||(m.push(_.d),g=e.t("Email")),i.a.createElement("div",{className:v("container")+" "+y("container")},i.a.createElement("div",{className:v("header")+" "+y("header")},i.a.createElement("div",{className:v("header-text")+" "+y("header-text")},e.t("Problems Logging In?")),i.a.createElement(c.a,{to:Object(p.a)("/"),className:v("close-icon")},i.a.createElement(f.a,{name:"close",classModifiers:"big"}))),i.a.createElement(d.b,{onSubmit:r(this.sendEmail),className:v("form")+" "+y("form")},l?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:v("information-text")+" "+y("information-text")},e.t("Select your issue type and provide us with your {label} below. We will follow up with a solution shortly.",{label:g.toLowerCase()})),i.a.createElement("hr",{className:v("separator")}),i.a.createElement("section",{className:v("radio-list")},i.a.createElement(b.a,{name:"type",checked:this.state.resetPassword,onChange:this.toggleFormType,customClass:y(),label:e.t("I\u2019m an existing user and I forgot my password."),id:"problem-login-radio1"}),i.a.createElement(b.a,{name:"type",checked:!this.state.resetPassword,onChange:this.toggleFormType,customClass:y(),label:e.t("I\u2019m a new user and I haven\u2019t received my verification email."),id:"problem-login-radio2"}))):i.a.createElement("div",{className:v("information-text")+" "+y("information-text")},e.t("Provide us with your {label} below. We will follow up with reset instructions.",{label:g.toLowerCase()})),i.a.createElement(A.b,{type:"text",name:"Email",customClass:y(),label:g,validate:m}),i.a.createElement("hr",{className:y("separator")}),i.a.createElement(u.a,{type:"submit",disabled:a||t||n,customClass:y(),styleName:E.b.additive},a?e.t("Processing..."):e.t("Send Email"))),i.a.createElement("div",{className:v("footer")+" "+y("footer")},i.a.createElement(c.a,{to:Object(p.a)("/login"),className:y("link")},e.t("Log In")),C.default.SignupForm.active&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:v("footer-separator")}),i.a.createElement(c.a,{to:Object(p.a)("/signup"),className:y("link")},e.t("Sign Up")))))}}]),o}(i.a.Component);x.propTypes={handleSubmit:m.a.func.isRequired},x.contextTypes={t:m.a.func.isRequired},o.a=x},1518:function(e,o,r){var a=r(1519);"string"===typeof a&&(a=[[e.i,a,""]]);var t={hmr:!1};t.transform=void 0;r(971)(a,t);a.locals&&(e.exports=a.locals)},1519:function(e,o,r){o=e.exports=r(52)(!0),o.push([e.i,".forgot-password-form{padding-bottom:2.8rem}.forgot-password-form__form{margin:0;padding:2.8rem}.forgot-password-form__container{border-radius:10px;width:41.6rem}.forgot-password-form__header{height:6.8rem;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom:2px solid var(--standalone-form__header-border-color)}.forgot-password-form__header-text{font-size:2rem}.forgot-password-form__information-text{margin-bottom:3rem;font-size:1.6rem}.forgot-password-form__label{font-size:1.4rem;letter-spacing:-.5px}.forgot-password-form__input{height:3.6rem;border-radius:5px;border:1px solid var(--border__color)}.forgot-password-form__input-wrapper{padding-bottom:3rem;margin:0}.forgot-password-form__separator{margin:0 -2.8rem 3rem}.forgot-password-form__btn{height:5rem;border-radius:5px;font-size:1.4rem}.forgot-password-form__footer{margin:0;padding:0 2.8rem}.forgot-password-form__checked{background-color:var(--standalone-form__radio-check-bg-color--selected);top:.5rem}.ap-radio input[type=radio]:checked~label>.forgot-password-form__check{background-color:var(--standalone-form__radio-bg-color--selected);border:3px solid var(--standalone-form__radio-border-color--action)}.forgot-password-form__check:hover{background-color:var(--standalone-form__radio-check-bg-color--selected)!important}.forgot-password-form__check{border:2px solid var(--standalone-form__radio-check-border-color--action)!important;background-color:transparent!important;top:.5rem}.ap-radio__label.forgot-password-form__label{color:var(--font__color-secondary);padding:0;margin:0;padding-left:3rem}.forgot-password-form__link{font-size:1.2rem}@media only screen and (max-width:576px){.forgot-password-form__container{width:auto}}","",{version:3,sources:["/Users/joshuarossi/Code/apex-web/src/components/ForgotPassword/ForgotPasswordFormComponent.css"],names:[],mappings:"AAAA,sBACE,qBAAuB,CACxB,AAED,4BACE,SAAU,AACV,cAAgB,CACjB,AAED,iCACE,mBAAoB,AACpB,aAAe,CAChB,AAED,8BACE,cAAe,AACf,4BAA6B,AAC7B,6BAA8B,AAC9B,mEAAqE,CACtE,AAED,mCACE,cAAgB,CACjB,AAED,wCACE,mBAAoB,AACpB,gBAAkB,CACnB,AAED,6BACE,iBAAkB,AAClB,oBAAuB,CACxB,AAED,6BACE,cAAe,AACf,kBAAmB,AACnB,qCAAuC,CACxC,AAED,qCACE,oBAAqB,AACrB,QAAU,CACX,AAED,iCACE,qBAAuB,CACxB,AAGD,2BACE,YAAa,AACb,kBAAmB,AACnB,gBAAkB,CACnB,AAED,8BACE,SAAU,AACV,gBAAkB,CACnB,AAED,+BACE,wEAAyE,AACzE,SAAY,CACb,AAED,uEACE,kEAAmE,AACnE,mEAAqE,CACtE,AAED,mCACE,iFAAoF,CACrF,AAED,6BACE,oFAAsF,AACtF,uCAAyC,AACzC,SAAY,CACb,AAED,6CACE,mCAAoC,AACpC,UAAW,AACX,SAAU,AACV,iBAAmB,CACpB,AAED,4BACE,gBAAkB,CACnB,AAMD,yCACE,iCACE,UAAY,CACb,CACF",file:"ForgotPasswordFormComponent.css",sourcesContent:[".forgot-password-form {\n  padding-bottom: 2.8rem;\n}\n\n.forgot-password-form__form {\n  margin: 0;\n  padding: 2.8rem;\n}\n\n.forgot-password-form__container {\n  border-radius: 10px;\n  width: 41.6rem;\n}\n\n.forgot-password-form__header {\n  height: 6.8rem;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom: 2px solid var(--standalone-form__header-border-color);\n}\n\n.forgot-password-form__header-text {\n  font-size: 2rem;\n}\n\n.forgot-password-form__information-text {\n  margin-bottom: 3rem;\n  font-size: 1.6rem;\n}\n\n.forgot-password-form__label {\n  font-size: 1.4rem;\n  letter-spacing: -0.5px;\n}\n\n.forgot-password-form__input {\n  height: 3.6rem;\n  border-radius: 5px;\n  border: 1px solid var(--border__color);\n}\n\n.forgot-password-form__input-wrapper {\n  padding-bottom: 3rem;\n  margin: 0;\n}\n\n.forgot-password-form__separator {\n  margin: 0 -2.8rem 3rem;\n}\n\n\n.forgot-password-form__btn {\n  height: 5rem;\n  border-radius: 5px;\n  font-size: 1.4rem;\n}\n\n.forgot-password-form__footer {\n  margin: 0;\n  padding: 0 2.8rem;\n}\n\n.forgot-password-form__checked {\n  background-color: var(--standalone-form__radio-check-bg-color--selected);\n  top: 0.5rem;\n}\n\n.ap-radio input[type='radio']:checked ~ label > .forgot-password-form__check {\n  background-color: var(--standalone-form__radio-bg-color--selected);\n  border: 3px solid var(--standalone-form__radio-border-color--action);\n}\n\n.forgot-password-form__check:hover {\n  background-color: var(--standalone-form__radio-check-bg-color--selected) !important;\n}\n\n.forgot-password-form__check {\n  border: 2px solid var(--standalone-form__radio-check-border-color--action) !important;\n  background-color: transparent !important;\n  top: 0.5rem;\n}\n\n.ap-radio__label.forgot-password-form__label {\n  color: var(--font__color-secondary);\n  padding: 0;\n  margin: 0;\n  padding-left: 3rem;\n}\n\n.forgot-password-form__link {\n  font-size: 1.2rem;\n}\n\n\n/* MEDIA QUERIES */\n\n/* Extra Small Devices, Phones */\n@media only screen and (max-width: 576px) {\n  .forgot-password-form__container {\n    width: auto;\n  }\n}\n\n"],sourceRoot:""}])}});
//# sourceMappingURL=40.08aa697d.chunk.js.map
(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{11:function(e,t,a){e.exports={makerGreen:"#385461",makerLightPink:"#ffeae8",makerWhite:"white",login:"login_login__MaKEf",list:"login_list__1-Q4n",item:"login_item__PrX08",button:"login_button__1UrWD"}},12:function(e,t,a){e.exports={makerLightGrey:"#e8e7e6",makerPink:"pink",makerLightPink:"#ffeae8",container:"image_file_input_container__3Ljd8",input:"image_file_input_input__36QnM",button:"image_file_input_button__2tOqU",grey:"image_file_input_grey__19uQE",pink:"image_file_input_pink__1VVvh",loading:"image_file_input_loading__XInFW",spin:"image_file_input_spin__1IRnN"}},17:function(e,t,a){e.exports={makerGreen:"#385461",makerWhite:"white",makerBlack:"black",header:"header_header__26MtZ",logo:"header_logo__1778d",title:"header_title__2kYTY",logout:"header_logout__2OW7Z"}},20:function(e,t,a){e.exports={makerGreen:"#385461",makerLightGrey:"#e8e7e6",makerWhite:"white",preview:"preview_preview__33iPq",title:"preview_title__1Qs5T",cards:"preview_cards__3OSsG"}},27:function(e,t,a){e.exports={makerGreen:"#385461",makerWhite:"white",footer:"footer_footer__1ivre",title:"footer_title__1D4hk"}},29:function(e,t,a){e.exports={makerGreen:"#385461",makerLightGrey:"#e8e7e6",editor:"editor_editor__1b-Bj",title:"editor_title__3CfmQ"}},30:function(e,t,a){e.exports={makerLightGrey:"#e8e7e6",makerWhite:"white",mediaQuery:"62rem",maker:"maker_maker__2y97u",container:"maker_container__2zS6j"}},36:function(e,t,a){e.exports={makerGrey:"#626262",app:"app_app__qeaQA"}},39:function(e,t,a){e.exports={makerLightGrey:"#e8e7e6",makerWhite:"white",makerGreen:"#385461",button:"button_button__v3oap"}},45:function(e,t,a){},5:function(e,t,a){e.exports={makerShadow:"rgba(217, 217, 217, 1)",makerBlack:"black",makerWhite:"white",makerColorful:"linear-gradient(166deg, rgba(237, 193, 211, 1) 0%,rgba(212, 149, 161, 1) 60%, rgba(162, 63, 63, 1) 100%, rgba(127, 188, 242, 1) 100%)",makerWheat:"wheat",card:"card_card__2J6v7",dark:"card_dark__FuPR6",light:"card_light__3gKqJ",colorful:"card_colorful__3xI3Y",avatar:"card_avatar__1ItRs",info:"card_info__2vFzI",name:"card_name__33uN6",company:"card_company__ce923",title:"card_title__13Inr",email:"card_email__D5Tmr",message:"card_message__2Wxb6"}},57:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(1),c=a.n(r),i=a(35),o=a.n(i),s=(a(45),a(40)),l=a(2),u=a(36),d=a.n(u),m=a(7),j=a.n(m),f=a(13),_=a(27),p=a.n(_),b=a(0),h=Object(r.memo)((function(){return Object(b.jsx)("footer",{className:p.a.footer,children:Object(b.jsx)("p",{className:p.a.title,children:"Code your dream"})})})),O=a(17),x=a.n(O),g=Object(r.memo)((function(e){var t=e.onLogout;return Object(b.jsxs)("header",{className:x.a.header,children:[t&&Object(b.jsx)("button",{className:x.a.logout,onClick:t,children:"Logout"}),Object(b.jsx)("img",{className:x.a.logo,src:"/images/logo.png",alt:"logo"}),Object(b.jsx)("h1",{className:x.a.title,children:"Business Card Maker"})]})})),v=a(11),k=a.n(v),N=function(e){var t=e.authService,a=Object(l.f)(),n=function(e){a.push({pathname:"/maker",state:{id:e}})},c=function(){var e=Object(f.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.login(a.currentTarget.textContent).then((function(e){return n(e.user.uid)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){t.onAuthChange((function(e){e&&n(e.uid)}))})),Object(b.jsxs)("section",{className:k.a.login,children:[Object(b.jsx)(g,{}),Object(b.jsxs)("section",{children:[Object(b.jsx)("h1",{children:"Login"}),Object(b.jsxs)("ul",{className:k.a.list,children:[Object(b.jsx)("li",{className:k.a.item,children:Object(b.jsx)("button",{className:k.a.button,onClick:c,children:"Google"})}),Object(b.jsx)("li",{className:k.a.item,children:Object(b.jsx)("button",{className:k.a.button,onClick:c,children:"Github"})})]})]}),Object(b.jsx)(h,{})]})},y=a(10),C=a(8),w=a.n(C),I=a(39),L=a.n(I),R=Object(r.memo)((function(e){var t=e.name,a=e.onClick;return Object(b.jsx)("button",{type:"button",className:L.a.button,onClick:a,children:t})})),F=Object(r.memo)((function(e){var t=e.FileInput,a=e.onAdd,n=Object(r.useRef)(),c=Object(r.useRef)(),i=Object(r.useRef)(),o=Object(r.useRef)(),s=Object(r.useRef)(),l=Object(r.useRef)(),u=Object(r.useRef)(),d=Object(r.useState)({fileName:null,fileURL:null}),m=Object(y.a)(d,2),j=m[0],f=m[1];return Object(b.jsxs)("form",{ref:n,className:w.a.form,children:[Object(b.jsx)("input",{ref:c,className:w.a.input,type:"text",name:"name",placeholder:"name"}),Object(b.jsx)("input",{ref:i,className:w.a.input,type:"text",name:"company",placeholder:"company"}),Object(b.jsxs)("select",{ref:o,className:w.a.select,name:"theme",placeholder:"theme",children:[Object(b.jsx)("option",{value:"light",children:"light"}),Object(b.jsx)("option",{value:"dark",children:"dark"}),Object(b.jsx)("option",{value:"colorful",children:"colorful"})]}),Object(b.jsx)("input",{ref:s,className:w.a.input,type:"text",name:"title",placeholder:"title"}),Object(b.jsx)("input",{ref:l,className:w.a.input,type:"text",name:"email",placeholder:"email"}),Object(b.jsx)("textarea",{ref:u,className:w.a.textarea,name:"message",placeholder:"message"}),Object(b.jsx)("div",{className:w.a.fileInput,children:Object(b.jsx)(t,{name:j.fileName,onFileChange:function(e){f({fileName:e.name,fileURL:e.url})}})}),Object(b.jsx)(R,{name:"Add",onClick:function(e){e.preventDefault();var t={id:Date.now(),name:c.current.value||"",company:i.current.value||"",theme:o.current.value,title:s.current.value||"",email:l.current.value||"",message:u.current.value||"",fileName:j.fileName||"",fileURL:j.fileURL||""};n.current.reset(),f({fileName:null,fileURL:null}),a(t)}})]})})),G=a(19),S=a(9),W=a.n(S),A=function(e){var t=e.FileInput,a=e.card,r=e.updateCard,c=e.deleteCard,i=a.name,o=a.company,s=a.title,l=a.email,u=a.message,d=a.theme,m=a.fileName,j=function(e){null!==e.currentTarget&&(e.preventDefault(),r(Object(n.a)(Object(n.a)({},a),{},Object(G.a)({},e.currentTarget.name,e.currentTarget.value))))};return Object(b.jsxs)("form",{className:W.a.form,children:[Object(b.jsx)("input",{className:W.a.input,type:"text",name:"name",value:i,onChange:j}),Object(b.jsx)("input",{className:W.a.input,type:"text",name:"company",value:o,onChange:j}),Object(b.jsxs)("select",{className:W.a.select,name:"theme",value:d,onChange:j,children:[Object(b.jsx)("option",{value:"light",children:"light"}),Object(b.jsx)("option",{value:"dark",children:"dark"}),Object(b.jsx)("option",{value:"colorful",children:"colorful"})]}),Object(b.jsx)("input",{className:W.a.input,type:"text",name:"title",value:s,onChange:j}),Object(b.jsx)("input",{className:W.a.input,type:"text",name:"email",value:l,onChange:j}),Object(b.jsx)("textarea",{className:W.a.textarea,value:u,name:"message",onChange:j}),Object(b.jsx)("div",{className:W.a.fileInput,children:Object(b.jsx)(t,{name:m,onFileChange:function(e){r(Object(n.a)(Object(n.a)({},a),{},{fileName:e.name,fileURL:e.url}))}})}),Object(b.jsx)(R,{name:"Delete",onClick:function(){c(a)}})]})},P=a(29),U=a.n(P),D=function(e){var t=e.FileInput,a=e.cards,n=e.addCard,r=e.updateCard,c=e.deleteCard;return Object(b.jsxs)("section",{className:U.a.editor,children:[Object(b.jsx)("h1",{className:U.a.title,children:"Card Maker"}),Object.keys(a).map((function(e){return Object(b.jsx)(A,{FileInput:t,card:a[e],updateCard:r,deleteCard:c},e)})),Object(b.jsx)(F,{FileInput:t,onAdd:n})]})},Q=a(5),T=a.n(Q);function B(e){switch(e){case"dark":return T.a.dark;case"light":return T.a.light;case"colorful":return T.a.colorful;default:throw new Error("unknown theme: ".concat(e))}}var E=Object(r.memo)((function(e){var t=e.card,a=t.name,n=t.company,r=t.title,c=t.email,i=t.message,o=t.theme,s=t.fileURL||"/images/default_logo.png";return Object(b.jsxs)("li",{className:"".concat(T.a.card," ").concat(B(o)),children:[Object(b.jsx)("img",{className:T.a.avatar,src:s,alt:"profile"}),Object(b.jsxs)("div",{className:T.a.info,children:[Object(b.jsx)("h1",{className:T.a.name,children:a}),Object(b.jsx)("p",{className:T.a.company,children:n}),Object(b.jsx)("p",{className:T.a.title,children:r}),Object(b.jsx)("p",{className:T.a.email,children:c}),Object(b.jsx)("p",{className:T.a.message,children:i})]})]})})),M=a(20),J=a.n(M),q=function(e){var t=e.cards;return Object(b.jsxs)("section",{className:J.a.preview,children:[Object(b.jsx)("h1",{className:J.a.title,children:"Card Preview"}),Object(b.jsx)("ul",{className:J.a.cards,children:Object.keys(t).map((function(e){return Object(b.jsx)(E,{card:t[e]},e)}))})]})},z=a(30),V=a.n(z),K=function(e){var t,a=e.FileInput,c=e.authService,i=e.cardRepository,o=Object(l.f)(),s=null===o||void 0===o||null===(t=o.location)||void 0===t?void 0:t.state,u=Object(r.useState)({}),d=Object(y.a)(u,2),m=d[0],j=d[1],f=Object(r.useState)(s&&s.id),_=Object(y.a)(f,2),p=_[0],O=_[1],x=Object(r.useCallback)((function(){c.logout()}),[c]);Object(r.useEffect)((function(){if(p){var e=i.syncCards(p,(function(e){j(e)}));return function(){return e()}}}),[i,p]),Object(r.useEffect)((function(){c.onAuthChange((function(e){e?O(e.uid):o.push("/")}))}),[c,o]);var v=function(e){j((function(t){var a=Object(n.a)({},t);return a[e.id]=e,a})),i.saveCard(p,e)};return Object(b.jsxs)("section",{className:V.a.maker,children:[Object(b.jsx)(g,{onLogout:x}),Object(b.jsxs)("div",{className:V.a.container,children:[Object(b.jsx)(D,{FileInput:a,cards:m,addCard:v,updateCard:v,deleteCard:function(e){j((function(t){var a=Object(n.a)({},t);return delete a[e.id],a})),i.removeCard(p,e)}}),Object(b.jsx)(q,{cards:m})]}),Object(b.jsx)(h,{})]})};var Y=function(e){var t=e.FileInput,a=e.authService,n=e.cardRepository;return Object(b.jsx)("div",{className:d.a.app,children:Object(b.jsx)(s.a,{children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{exact:!0,path:"/",children:Object(b.jsx)(N,{authService:a})}),Object(b.jsx)(l.a,{path:"/maker",children:Object(b.jsx)(K,{FileInput:t,authService:a,cardRepository:n})})]})})})},Z=a(14),H=a(15),X=a(21),$=a.n(X),ee=(a(52),a(54),$.a.initializeApp({apiKey:"AIzaSyD0g4VC9sLoAwbe17tSatlUGAdMITxCxCs",authDomain:"business-card-maker-4a26b.firebaseapp.com",databaseUrl:"https://business-card-maker-4a26b-default-rtdb.firebaseio.com/",projectId:"business-card-maker-4a26b"})),te=ee.auth(),ae=ee.database(),ne=new $.a.auth.GoogleAuthProvider,re=new $.a.auth.GithubAuthProvider,ce=function(){function e(){Object(Z.a)(this,e)}return Object(H.a)(e,[{key:"login",value:function(e){var t=this.getProvider(e);return te.signInWithPopup(t)}},{key:"logout",value:function(){te.signOut()}},{key:"onAuthChange",value:function(e){te.onAuthStateChanged((function(t){e(t)}))}},{key:"getProvider",value:function(e){switch(e){case"Google":return ne;case"Github":return re;default:throw new Error("not supported provider: ".concat(e))}}}]),e}(),ie=function(){function e(){Object(Z.a)(this,e)}return Object(H.a)(e,[{key:"upload",value:function(){var e=Object(f.a)(j.a.mark((function e(t){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("file",t),a.append("upload_preset","ecjyrvwh"),e.next=5,fetch("https://api.cloudinary.com/v1_1/dngt81wxb/image/upload",{method:"POST",body:a});case 5:return n=e.sent,e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),oe=a(12),se=a.n(oe),le=Object(r.memo)((function(e){var t=e.imageUploader,a=e.name,n=e.onFileChange,c=Object(r.useState)(!1),i=Object(y.a)(c,2),o=i[0],s=i[1],l=Object(r.useRef)(),u=function(){var e=Object(f.a)(j.a.mark((function e(a){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,t.upload(a.target.files[0]);case 3:r=e.sent,s(!1),n({name:r.original_filename,url:r.url});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:se.a.container,children:[Object(b.jsx)("input",{ref:l,className:se.a.input,type:"file",accept:"image/*",name:"file",onChange:u}),!o&&Object(b.jsx)("button",{className:"".concat(se.a.button," ").concat(a?se.a.pink:se.a.grey),onClick:function(e){e.preventDefault(),l.current.click()},children:a||"No File"}),o&&Object(b.jsx)("div",{className:se.a.loading})]})})),ue=function(){function e(){Object(Z.a)(this,e)}return Object(H.a)(e,[{key:"syncCards",value:function(e,t){var a=ae.ref("".concat(e,"/cards"));return a.on("value",(function(e){var a=e.val();a&&t(a)})),function(){return a.off()}}},{key:"saveCard",value:function(e,t){ae.ref("".concat(e,"/cards/").concat(t.id)).set(t)}},{key:"removeCard",value:function(e,t){ae.ref("".concat(e,"/cards/").concat(t.id)).remove()}}]),e}(),de=new ce,me=new ue,je=new ie,fe=Object(r.memo)((function(e){return Object(b.jsx)(le,Object(n.a)(Object(n.a)({},e),{},{imageUploader:je}))}));o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(Y,{authService:de,FileInput:fe,cardRepository:me})}),document.getElementById("root"))},8:function(e,t,a){e.exports={makerBlack:"black",makerWhite:"white",form:"card_add_form_form__HL2h1",input:"card_add_form_input__2M7Wu",textarea:"card_add_form_textarea__11Fn_",select:"card_add_form_select__2S0I-",button:"card_add_form_button__2PaFQ",fileInput:"card_add_form_fileInput__18LZi"}},9:function(e,t,a){e.exports={makerBlack:"black",makerWhite:"white",form:"card_edit_form_form__BNJ78",input:"card_edit_form_input__dQ0_H",textarea:"card_edit_form_textarea__2lg9A",select:"card_edit_form_select__3Q38P",button:"card_edit_form_button__2LiV0",fileInput:"card_edit_form_fileInput__1wdQU"}}},[[57,1,2]]]);
//# sourceMappingURL=main.43eceecd.chunk.js.map
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,r){e.exports={superInput:"SuperInputText_superInput__3Tq1A",errorInput:"SuperInputText_errorInput__C_nBB",error:"SuperInputText_error__v6_7M"}},15:function(e,t,r){e.exports={message:"Message_message__SSjGN",textblock:"Message_textblock__1rxvJ",triangle:"Message_triangle__JCILe",name:"Message_name__3B2L9",time:"Message_time__v-3G1"}},23:function(e,t,r){e.exports={button:"Greeting_button__1aIg7",butfocus:"Greeting_butfocus__25P6H"}},24:function(e,t,r){e.exports={blue:"HW4_blue__3-jfr",column:"HW4_column__l2D3m",testSpanError:"HW4_testSpanError__ozv7a"}},25:function(e,t,r){e.exports={default:"SuperButton_default__UcAgq",red:"SuperButton_red__1dgCd"}},26:function(e,t,r){e.exports={checkbox:"SuperCheckbox_checkbox__3uEZ4",spanClassName:"SuperCheckbox_spanClassName__MGpec"}},29:function(e,t,r){e.exports={App:"App_App__1yzzO"}},36:function(e,t,r){},4:function(e,t,r){e.exports={header:"Pages_header__20_33",nonActiveHeader:"Pages_nonActiveHeader__dFuMw",activeHeader:"Pages_activeHeader__3Snfq",defaultLink:"Pages_defaultLink__1klLG",activeLink:"Pages_activeLink__2Q66M",arrow:"Pages_arrow__1kaYA",arrowRotate:"Pages_arrowRotate__GQ_IR",errorPage:"Pages_errorPage__1Yvxy",errorTitle:"Pages_errorTitle__DdfvS",errorImg:"Pages_errorImg__1teVU",errorSign:"Pages_errorSign__2VW49",errorButton:"Pages_errorButton__3ebly"}},43:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),c=r(28),s=r.n(c),i=(r(36),r(29)),o=r.n(i),l=r(10),j=r(6),u=r(4),d=r.n(u),b=r(2),h=r(0);var O=function(){return Object(h.jsxs)("div",{className:d.a.errorPage,children:[Object(h.jsx)("div",{className:d.a.errorTitle,children:Object(h.jsxs)("h1",{children:["4",Object(h.jsx)("span",{className:d.a.errorImg}),"4"]})}),Object(h.jsx)("div",{className:d.a.errorSign,children:"OOPS! PAGE NOT BE FOUND"}),Object(h.jsx)("div",{children:Object(h.jsx)("p",{children:"Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarily unavailable"})}),Object(h.jsx)("div",{children:Object(h.jsx)(l.b,{to:ee.PRE_JUNIOR,className:d.a.errorButton,children:"Back to homepage"})})]})},_=r(15),x=r.n(_),m=function(e){return Object(h.jsxs)("div",{className:x.a.message,children:[Object(h.jsx)("img",{src:e.avatar,alt:""}),Object(h.jsx)("div",{className:x.a.triangle}),Object(h.jsxs)("div",{className:x.a.textblock,children:[Object(h.jsx)("div",{className:x.a.name,children:e.name}),Object(h.jsx)("div",{children:e.message}),Object(h.jsx)("div",{className:x.a.time,children:e.time})]})]})},f="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",p="Wild Cat",v="\u041f\u0440\u0438\u0432\u0435\u0442! \u041a\u0430\u043a \u0442\u0435\u0431\u0435 Typescript?",g="22:00";var N=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),Object(h.jsx)("div",{children:"homeworks 1"}),Object(h.jsx)(m,{avatar:f,name:p,message:v,time:g}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},k=r(5),C=r.n(k);var y=function(e){return Object(h.jsxs)("div",{className:C.a.wrapper,children:[Object(h.jsx)("div",{className:C.a.item,children:e.affair.name}),Object(h.jsxs)("div",{className:"".concat(C.a.item," ").concat(C.a[e.affair.priority]),children:["[",e.affair.priority,"]"]}),Object(h.jsx)("button",{className:C.a.button,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var S=function(e){var t=e.data.map((function(t){return Object(h.jsx)(y,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),r="".concat(C.a.priorityButton," ").concat("all"===e.filter?C.a.buttonActive:""),a="".concat(C.a.priorityButton," ").concat("high"===e.filter?C.a.buttonActive:""),n="".concat(C.a.priorityButton," ").concat("middle"===e.filter?C.a.buttonActive:""),c="".concat(C.a.priorityButton," ").concat("low"===e.filter?C.a.buttonActive:"");return Object(h.jsxs)("div",{children:[t,Object(h.jsx)("button",{className:r,onClick:function(){e.setFilter("all")},children:"All"}),Object(h.jsx)("button",{className:a,onClick:function(){e.setFilter("high")},children:"High"}),Object(h.jsx)("button",{className:n,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(h.jsx)("button",{className:c,onClick:function(){e.setFilter("low")},children:"Low"})]})},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var A=function(){var e=Object(a.useState)(w),t=Object(j.a)(e,2),r=t[0],n=t[1],c=Object(a.useState)("all"),s=Object(j.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):[]}(r,i);return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 2",Object(h.jsx)(S,{data:l,setFilter:o,deleteAffairCallback:function(e){return n(function(e,t){return e.filter((function(e){return e._id!==t}))}(r,e))},filter:i}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},P=r(31),I=r(23),B=r.n(I),U=r(11),R=r.n(U),E=function(e){var t=e.name,r=e.setNameCallback,a=e.addUser,n=e.error,c=e.totalUsers,s=e.pressButton,i=""!==n?R.a.errorInput:R.a.superInput,o=t?B.a.butfocus:B.a.button;return Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{value:t,onChange:r,className:i,onKeyPress:s}),Object(h.jsx)("button",{disabled:!t,onClick:a,className:o,children:"add"}),Object(h.jsx)("span",{children:c}),Object(h.jsx)("div",{className:R.a.error,children:Object(h.jsx)("span",{children:n})})]})},J=function(e){var t=e.users,r=e.addUserCallback,n=Object(a.useState)(""),c=Object(j.a)(n,2),s=c[0],i=c[1],o=Object(a.useState)(""),l=Object(j.a)(o,2),u=l[0],d=l[1],b=t.length;return Object(h.jsx)(E,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),d("")):(d("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f!"),i(""))},addUser:function(){r(s),alert("Hello  ".concat(s,"!")),i("")},error:u,totalUsers:b,pressButton:function(e){"Enter"===e.key&&s&&(r(s),alert("Hello  ".concat(s,"!")),i(""))}})},L=r(45),T=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),r=t[0],n=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 3",Object(h.jsx)(J,{users:r,addUserCallback:function(e){n([].concat(Object(P.a)(r),[{_id:Object(L.a)(),name:e}])),console.log(r)}}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},F=r(13),H=r(14),M=function(e){e.type;var t=e.onChange,r=e.onChangeText,a=e.onKeyPress,n=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(H.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(R.a.error," ").concat(i||""),j="".concat(c?R.a.errorInput:R.a.superInput," ").concat(s);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("input",Object(F.a)({type:"text",onChange:function(e){t&&t(e),r&&r(e.currentTarget.value.trim())},onKeyPress:function(e){a&&a(e),n&&"Enter"===e.key&&n()},className:j},o)),c&&Object(h.jsx)("span",{className:l,children:c})]})},G=r(24),W=r.n(G),q=r(25),K=r.n(q),z=function(e){var t=e.red,r=e.className,a=Object(H.a)(e,["red","className"]),n="".concat(t?K.a.red:K.a.default," ").concat(r);return Object(h.jsx)("button",Object(F.a)({className:n},a))},D=r(26),Y=r.n(D),Q=function(e){e.type;var t=e.onChange,r=e.onChangeChecked,a=e.className,n=(e.spanClassName,e.children),c=Object(H.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Y.a.checkbox," ").concat(a||"");return Object(h.jsxs)("label",{children:[Object(h.jsx)("input",Object(F.a)({type:"checkbox",onChange:function(e){r&&r(e.currentTarget.checked),t&&t(e)},className:s},c)),n&&Object(h.jsx)("span",{className:Y.a.spanClassName,children:n})]})};var V=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),r=t[0],n=t[1],c=r?"":"Error!",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(r)},i=Object(a.useState)(!1),o=Object(j.a)(i,2),l=o[0],u=o[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 4",Object(h.jsxs)("div",{className:W.a.column,children:[Object(h.jsx)(M,{value:r,onChangeText:n,onEnter:s,error:c}),Object(h.jsx)(M,{className:W.a.blue}),Object(h.jsx)(z,{children:"default"}),Object(h.jsx)(z,{red:!0,onClick:s,children:"delete "}),Object(h.jsx)(z,{disabled:!0,children:"disabled"}),Object(h.jsx)(Q,{checked:l,onChangeChecked:u,children:"Check your success "}),Object(h.jsx)(Q,{checked:l,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})};var X=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(N,{}),Object(h.jsx)(A,{}),Object(h.jsx)(T,{}),Object(h.jsx)(V,{})]})},Z=function(){return Object(h.jsx)(h.Fragment,{})},$=function(){return Object(h.jsx)(h.Fragment,{})},ee={PRE_JUNIOR:"/pre-junior",JUNIOR:"/junior",JUNIOR_PLUS:"/junior+"};var te=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.b,{path:"/",exact:!0,render:function(){return Object(h.jsx)(b.a,{to:ee.PRE_JUNIOR})}}),Object(h.jsx)(b.b,{path:ee.PRE_JUNIOR,render:function(){return Object(h.jsx)(X,{})}}),Object(h.jsx)(b.b,{path:ee.JUNIOR,render:function(){return Object(h.jsx)(Z,{})}}),Object(h.jsx)(b.b,{path:ee.JUNIOR_PLUS,render:function(){return Object(h.jsx)($,{})}}),"// add routes",Object(h.jsx)(b.b,{render:function(){return Object(h.jsx)(O,{})}})]})})};var re=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),r=t[0],n=t[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{children:"React homeworks:"}),Object(h.jsx)("div",{className:d.a.header,children:Object(h.jsxs)("ul",{className:r?d.a.activeHeader:d.a.nonActiveHeader,children:[Object(h.jsx)("li",{children:Object(h.jsx)(l.b,{to:ee.PRE_JUNIOR,className:d.a.defaultLink,activeClassName:d.a.activeLink,children:"Pre-junior"})}),Object(h.jsx)("li",{children:Object(h.jsx)(l.b,{to:ee.JUNIOR,className:d.a.defaultLink,activeClassName:d.a.activeLink,children:"Junior"})}),Object(h.jsx)("li",{children:Object(h.jsx)(l.b,{to:ee.JUNIOR_PLUS,className:d.a.defaultLink,activeClassName:d.a.activeLink,children:"Junior+"})}),Object(h.jsx)("div",{onMouseEnter:function(){n(!r)},className:r?d.a.arrow:d.a.arrowRotate})]})})]})};var ae=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(re,{}),Object(h.jsx)(te,{})]})})};var ne=function(){return Object(h.jsx)("div",{className:o.a.App,children:Object(h.jsx)(ae,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(ne,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,r){e.exports={wrapper:"Affairs_wrapper__1_-b9",item:"Affairs_item__1xT0L",button:"Affairs_button__SLFih",priorityButton:"Affairs_priorityButton__ppbSJ",buttonActive:"Affairs_buttonActive__3qTeB",high:"Affairs_high__2DFBK",middle:"Affairs_middle__24izl",low:"Affairs_low__1d_l-"}}},[[43,1,2]]]);
//# sourceMappingURL=main.6c6c0746.chunk.js.map
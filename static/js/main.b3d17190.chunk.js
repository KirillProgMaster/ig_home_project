(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3Tq1A",errorInput:"SuperInputText_errorInput__C_nBB",error:"SuperInputText_error__v6_7M"}},16:function(e,t,n){e.exports={message:"Message_message__SSjGN",textblock:"Message_textblock__1rxvJ",triangle:"Message_triangle__JCILe",name:"Message_name__3B2L9",time:"Message_time__v-3G1"}},19:function(e,t,n){e.exports={default:"SuperButton_default__UcAgq",red:"SuperButton_red__1dgCd",changeButton:"SuperButton_changeButton__1OnQg"}},27:function(e,t,n){e.exports={button:"Greeting_button__1aIg7",butfocus:"Greeting_butfocus__25P6H"}},28:function(e,t,n){e.exports={blue:"HW4_blue__3-jfr",column:"HW4_column__l2D3m",testSpanError:"HW4_testSpanError__ozv7a"}},29:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__3uEZ4",spanClassName:"SuperCheckbox_spanClassName__MGpec"}},30:function(e,t,n){e.exports={text:"HW6_text__1px5u",icon:"HW6_icon__EbFBh",changeButton:"HW6_changeButton__2slK_"}},33:function(e,t,n){e.exports={App:"App_App__1yzzO"}},42:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(32),s=n.n(c),i=(n(42),n(33)),o=n.n(i),j=n(13),l=n(4),u=n(6),b=n.n(u),d=n(2),O=n(0);var h=function(){return Object(O.jsxs)("div",{className:b.a.errorPage,children:[Object(O.jsx)("div",{className:b.a.errorTitle,children:Object(O.jsxs)("h1",{children:["4",Object(O.jsx)("span",{className:b.a.errorImg}),"4"]})}),Object(O.jsx)("div",{className:b.a.errorSign,children:"OOPS! PAGE NOT BE FOUND"}),Object(O.jsx)("div",{children:Object(O.jsx)("p",{children:"Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarily unavailable"})}),Object(O.jsx)("div",{children:Object(O.jsx)(j.b,{to:be.PRE_JUNIOR,className:b.a.errorButton,children:"Back to homepage"})})]})},x=n(16),_=n.n(x),p=function(e){return Object(O.jsxs)("div",{className:_.a.message,children:[Object(O.jsx)("img",{src:e.avatar,alt:""}),Object(O.jsx)("div",{className:_.a.triangle}),Object(O.jsxs)("div",{className:_.a.textblock,children:[Object(O.jsx)("div",{className:_.a.name,children:e.name}),Object(O.jsx)("div",{children:e.message}),Object(O.jsx)("div",{className:_.a.time,children:e.time})]})]})},m="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Wild Cat",v="\u041f\u0440\u0438\u0432\u0435\u0442! \u041a\u0430\u043a \u0442\u0435\u0431\u0435 Typescript?",g="22:00";var N=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),Object(O.jsx)("div",{children:"homeworks 1"}),Object(O.jsx)(p,{avatar:m,name:f,message:v,time:g}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},C=n(7),k=n.n(C);var y=function(e){return Object(O.jsxs)("div",{className:k.a.wrapper,children:[Object(O.jsx)("div",{className:k.a.item,children:e.affair.name}),Object(O.jsxs)("div",{className:"".concat(k.a.item," ").concat(k.a[e.affair.priority]),children:["[",e.affair.priority,"]"]}),Object(O.jsx)("button",{className:k.a.button,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var S=function(e){var t=e.data.map((function(t){return Object(O.jsx)(y,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),n="".concat(k.a.priorityButton," ").concat("all"===e.filter?k.a.buttonActive:""),a="".concat(k.a.priorityButton," ").concat("high"===e.filter?k.a.buttonActive:""),r="".concat(k.a.priorityButton," ").concat("middle"===e.filter?k.a.buttonActive:""),c="".concat(k.a.priorityButton," ").concat("low"===e.filter?k.a.buttonActive:"");return Object(O.jsxs)("div",{children:[t,Object(O.jsx)("button",{className:n,onClick:function(){e.setFilter("all")},children:"All"}),Object(O.jsx)("button",{className:a,onClick:function(){e.setFilter("high")},children:"High"}),Object(O.jsx)("button",{className:r,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(O.jsx)("button",{className:c,onClick:function(){e.setFilter("low")},children:"Low"})]})},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var P=function(){var e=Object(a.useState)(w),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(l.a)(c,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):[]}(n,i);return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 2",Object(O.jsx)(S,{data:j,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:i}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},A=n(37),B=n(27),I=n.n(B),E=n(14),U=n.n(E),R=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,c=e.totalUsers,s=e.pressButton,i=""!==r?U.a.errorInput:U.a.superInput,o=t?I.a.butfocus:I.a.button;return Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{value:t,onChange:n,className:i,onKeyPress:s}),Object(O.jsx)("button",{disabled:!t,onClick:a,className:o,children:"add"}),Object(O.jsx)("span",{children:c}),Object(O.jsx)("div",{className:U.a.error,children:Object(O.jsx)("span",{children:r})})]})},T=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(l.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(""),j=Object(l.a)(o,2),u=j[0],b=j[1],d=t.length;return Object(O.jsx)(R,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),b("")):(b("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f!"),i(""))},addUser:function(){n(s),alert("Hello  ".concat(s,"!")),i("")},error:u,totalUsers:d,pressButton:function(e){"Enter"===e.key&&s&&(n(s),alert("Hello  ".concat(s,"!")),i(""))}})},J=n(55),F=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 3",Object(O.jsx)(T,{users:n,addUserCallback:function(e){r([].concat(Object(A.a)(n),[{_id:Object(J.a)(),name:e}])),console.log(n)}}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},L=n(9),H=n(8),M=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(H.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(U.a.error," ").concat(i||""),l="".concat(c?U.a.errorInput:U.a.superInput," ").concat(s);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",Object(L.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value.trim())},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:l},o)),c&&Object(O.jsx)("span",{className:j,children:c})]})},W=n(28),G=n.n(W),D=n(19),K=n.n(D),q=function(e){var t=e.red,n=e.className,a=Object(H.a)(e,["red","className"]),r="".concat(t?K.a.red:K.a.default," ").concat(n);return Object(O.jsx)("button",Object(L.a)({className:r},a))},z=n(29),Q=n.n(z),Y=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(H.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Q.a.checkbox," ").concat(a||"");return Object(O.jsxs)("label",{children:[Object(O.jsx)("input",Object(L.a)({type:"checkbox",onChange:function(e){n&&n(e.currentTarget.checked),t&&t(e)},className:s},c)),r&&Object(O.jsx)("span",{className:Q.a.spanClassName,children:r})]})};var V=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],c=n?"":"Error!",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(l.a)(i,2),j=o[0],u=o[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 4",Object(O.jsxs)("div",{className:G.a.column,children:[Object(O.jsx)(M,{value:n,onChangeText:r,onEnter:s,error:c}),Object(O.jsx)(M,{className:G.a.blue}),Object(O.jsx)(q,{children:"default"}),Object(O.jsx)(q,{red:!0,onClick:s,children:"delete "}),Object(O.jsx)(q,{disabled:!0,children:"disabled"}),Object(O.jsx)(Y,{checked:j,onChangeChecked:u,children:"Check your success "}),Object(O.jsx)(Y,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},X=n(35),Z=n(36),$=n(30),ee=n.n($),te=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,c=Object(H.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(l.a)(s,2),o=i[0],j=i[1],u=r||{},b=u.children,d=u.onDoubleClick,h=u.className,x=Object(H.a)(u,["children","onDoubleClick","className"]),_="".concat(ee.a.text," ").concat(h);return Object(O.jsx)(O.Fragment,{children:o?Object(O.jsx)(M,Object(L.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},c)):Object(O.jsxs)("span",Object(L.a)(Object(L.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:_},x),{},{children:[Object(O.jsx)(X.a,{icon:Z.a,className:ee.a.icon}),b||c.value]}))})};function ne(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function ae(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}ne("test",{x:"A",y:1});ae("test",{x:"888",y:0});var re=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 6",Object(O.jsx)("div",{children:Object(O.jsx)(te,{value:n,onChangeText:r,spanProps:{children:n?void 0:"enter text..."}})}),Object(O.jsx)(q,{onClick:function(){ne("editable-span-value",n)},children:"save"}),Object(O.jsx)(q,{onClick:function(){r(ae("editable-span-value",n))},className:K.a.changeButton,children:"restore"}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})};var ce=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(N,{}),Object(O.jsx)(P,{}),Object(O.jsx)(F,{}),Object(O.jsx)(V,{}),Object(O.jsx)(re,{})]})},se=function(e){var t=e.options,n=(e.onChange,e.onChangeOption),a=Object(H.a)(e,["options","onChange","onChangeOption"]),r=t?t.map((function(e,t){return Object(O.jsx)("option",{value:e,children:e},t)})):[];return Object(O.jsx)("select",Object(L.a)(Object(L.a)({onChange:function(e){n&&n(e.currentTarget.value)}},a),{},{children:r}))},ie=function(e){e.type;var t=e.name,n=e.options,a=(e.value,e.onChange,e.onChangeOption),r=(Object(H.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){a&&a(e.currentTarget.value)}),c=n?n.map((function(e,n){return Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"radio",onChange:r,value:e,name:t}),e]},t+"-"+n)})):[];return Object(O.jsx)(O.Fragment,{children:c})},oe=["x","y","z"];var je=function(){var e=Object(a.useState)(oe[1]),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 7",Object(O.jsx)("div",{children:Object(O.jsx)(se,{options:oe,value:n,onChangeOption:r})}),Object(O.jsx)("div",{children:Object(O.jsx)(ie,{name:"radio",options:oe,value:n,onChangeOption:r})}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},le=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(je,{})})},ue=function(){return Object(O.jsx)(O.Fragment,{})},be={PRE_JUNIOR:"/pre-junior",JUNIOR:"/junior",JUNIOR_PLUS:"/junior+"};var de=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(d.d,{children:[Object(O.jsx)(d.b,{path:"/",exact:!0,render:function(){return Object(O.jsx)(d.a,{to:be.PRE_JUNIOR})}}),Object(O.jsx)(d.b,{path:be.PRE_JUNIOR,render:function(){return Object(O.jsx)(ce,{})}}),Object(O.jsx)(d.b,{path:be.JUNIOR,render:function(){return Object(O.jsx)(le,{})}}),Object(O.jsx)(d.b,{path:be.JUNIOR_PLUS,render:function(){return Object(O.jsx)(ue,{})}}),"// add routes",Object(O.jsx)(d.b,{render:function(){return Object(O.jsx)(h,{})}})]})})};var Oe=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{children:"React homeworks:"}),Object(O.jsx)("div",{className:b.a.header,children:Object(O.jsxs)("ul",{className:n?b.a.activeHeader:b.a.nonActiveHeader,children:[Object(O.jsx)("li",{children:Object(O.jsx)(j.b,{to:be.PRE_JUNIOR,className:b.a.defaultLink,activeClassName:b.a.activeLink,children:"Pre-junior"})}),Object(O.jsx)("li",{children:Object(O.jsx)(j.b,{to:be.JUNIOR,className:b.a.defaultLink,activeClassName:b.a.activeLink,children:"Junior"})}),Object(O.jsx)("li",{children:Object(O.jsx)(j.b,{to:be.JUNIOR_PLUS,className:b.a.defaultLink,activeClassName:b.a.activeLink,children:"Junior+"})}),Object(O.jsx)("div",{onMouseEnter:function(){r(!n)},className:n?b.a.arrow:b.a.arrowRotate})]})})]})};var he=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(j.a,{children:[Object(O.jsx)(Oe,{}),Object(O.jsx)(de,{})]})})};var xe=function(){return Object(O.jsx)("div",{className:o.a.App,children:Object(O.jsx)(he,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(xe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports={header:"Pages_header__20_33",nonActiveHeader:"Pages_nonActiveHeader__dFuMw",activeHeader:"Pages_activeHeader__3Snfq",defaultLink:"Pages_defaultLink__1klLG",activeLink:"Pages_activeLink__2Q66M",arrow:"Pages_arrow__1kaYA",arrowRotate:"Pages_arrowRotate__GQ_IR",errorPage:"Pages_errorPage__1Yvxy",errorTitle:"Pages_errorTitle__DdfvS",errorImg:"Pages_errorImg__1teVU",errorSign:"Pages_errorSign__2VW49",errorButton:"Pages_errorButton__3ebly"}},7:function(e,t,n){e.exports={wrapper:"Affairs_wrapper__1_-b9",item:"Affairs_item__1xT0L",button:"Affairs_button__SLFih",priorityButton:"Affairs_priorityButton__ppbSJ",buttonActive:"Affairs_buttonActive__3qTeB",high:"Affairs_high__2DFBK",middle:"Affairs_middle__24izl",low:"Affairs_low__1d_l-"}}},[[53,1,2]]]);
//# sourceMappingURL=main.b3d17190.chunk.js.map
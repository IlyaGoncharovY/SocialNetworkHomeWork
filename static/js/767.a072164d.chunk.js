"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[767],{8767:function(s,e,a){a.r(e),a.d(e,{default:function(){return w}});var i=a(4550),n=(a(2791),"Dialogs_dialogs__Hqi+a"),t="Dialogs_dialogsItems__Q-hJm",o="Dialogs_messages__Rxr9C",r="DialogsMessage_message__G9Rv7",d=a(184),g=function(s){return(0,d.jsx)("div",{className:r,children:s.message})},l={dialogs:"DialogsItem_dialogs__yAZnS",dialogsItems:"DialogsItem_dialogsItems__RxJoC",active:"DialogsItem_active__y+idr",messages:"DialogsItem_messages__kZcaA",message:"DialogsItem_message__JZ7Iq"},u=a(2426),m=function(s){var e="/dialogs/"+s.id;return(0,d.jsx)("div",{className:l.dialog+" "+l.active,children:(0,d.jsx)(u.OL,{to:e,children:s.name})})},c=a(6139),_=a(704),h=a(2587),f=a(8779),j=(0,f.D)(50),v=(0,_.Z)({form:"dialogAddMessageForm"})((function(s){return(0,d.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,d.jsx)("div",{children:(0,d.jsx)(c.Z,{component:h.gx,validate:[f.C,j],name:"newMessageBody",placeholder:"Enter your message"})}),(0,d.jsx)("div",{children:(0,d.jsx)("button",{children:"Send"})})]})})),x=function(s){var e=s.dialogsPage,a=e.dialog.map((function(s){return(0,d.jsx)(m,{name:s.name,id:s.id},s.id)})),i=e.message.map((function(s){return(0,d.jsx)(g,{message:s.message},s.id)}));return(0,d.jsxs)("div",{className:n,children:[(0,d.jsx)("div",{className:t,children:a}),(0,d.jsxs)("div",{className:o,children:[(0,d.jsx)("div",{children:i}),(0,d.jsx)(v,{onSubmit:function(e){s.sendMessage(e.newMessageBody)}})]})]})},p=a(2177),D=a(7781),I=a(1413),y=a(5987),A=a(9723),M=["isAuth"],Z=function(s){return{isAuth:s.auth.isAuth}};function b(s){return(0,p.$j)(Z)((function(e){e.isAuth;var a=(0,y.Z)(e,M);return e.isAuth?(0,d.jsx)(s,(0,I.Z)({},a)):(0,d.jsx)(A.l_,{to:"./login"})}))}var C=function(s){return{dialogsPage:s.messagePage,newMessageBody:s.messagePage}},k=function(s){return{sendMessage:function(e){var a=(0,i.d)(e);s(a)}}};(0,D.qC)((0,p.$j)(C,k),b)(x);var w=(0,p.$j)(C,k)(b(x))}}]);
//# sourceMappingURL=767.a072164d.chunk.js.map
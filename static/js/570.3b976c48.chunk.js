"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[570],{3570:function(e,s,a){a.r(s),a.d(s,{default:function(){return O}});var n=a(4550),i=(a(2791),"Dialogs_dialogs__Hqi+a"),t="Dialogs_dialogsItems__Q-hJm",r="Dialogs_messages__Rxr9C",o="DialogsMessage_message__G9Rv7",l=a(184),d=function(e){return(0,l.jsx)("div",{className:o,children:e.message})},g={dialogs:"DialogsItem_dialogs__yAZnS",dialogsItems:"DialogsItem_dialogsItems__RxJoC",active:"DialogsItem_active__y+idr",messages:"DialogsItem_messages__kZcaA",message:"DialogsItem_message__JZ7Iq"},u=a(2426),c=function(e){var s="/dialogs/"+e.id;return(0,l.jsx)("div",{className:g.dialog+" "+g.active,children:(0,l.jsx)(u.OL,{to:s,children:e.name})})},m=a(5705),h=a(132),_=a(9373),f=function(e){var s=e.dialogsPage,a=s.dialog.map((function(e){return(0,l.jsx)(c,{name:e.name,id:e.id},e.id)})),n=s.message.map((function(e){return(0,l.jsx)(d,{message:e.message},e.id)})),o=(0,m.TA)({initialValues:{newMessageBody:""},onSubmit:function(s){!function(s){e.sendMessage(s.newMessageBody)}(s),o.resetForm()},validationSchema:h.Ry({newPostText:h.Z_().max(30,"Must be 30 characters or less")})});return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("form",{onSubmit:o.handleSubmit,children:(0,l.jsxs)("div",{className:i,children:[(0,l.jsx)("div",{className:t,children:a}),(0,l.jsx)("div",{className:r,children:(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:n}),(0,l.jsx)("textarea",{name:"newMessageBody",placeholder:"Enter you message",onChange:o.handleChange,value:o.values.newMessageBody}),o.touched.newMessageBody&&o.errors.newMessageBody&&(0,l.jsx)("div",{style:{color:"red",opacity:"0.8"},children:o.errors.newMessageBody}),(0,l.jsx)("div",{children:(0,l.jsx)(_.Z,{variant:"contained",size:"small",type:"submit",children:"SEND"})})]})})]})})})},v=a(2177),j=a(7781),x=a(1413);function y(e,s){if(null==e)return{};var a,n,i=function(e,s){if(null==e)return{};var a,n,i={},t=Object.keys(e);for(n=0;n<t.length;n++)a=t[n],s.indexOf(a)>=0||(i[a]=e[a]);return i}(e,s);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)a=t[n],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=a(9723),b=["isAuth"],w=function(e){return{isAuth:e.auth.isAuth}};function M(e){return(0,v.$j)(w)((function(s){s.isAuth;var a=y(s,b);return s.isAuth?(0,l.jsx)(e,(0,x.Z)({},a)):(0,l.jsx)(p.l_,{to:"./login"})}))}var D=function(e){return{dialogsPage:e.messagePage,newMessageBody:e.messagePage}},I=function(e){return{sendMessage:function(s){var a=(0,n.d)(s);e(a)}}};(0,j.qC)((0,v.$j)(D,I),M)(f);var O=(0,v.$j)(D,I)(M(f))}}]);
//# sourceMappingURL=570.3b976c48.chunk.js.map
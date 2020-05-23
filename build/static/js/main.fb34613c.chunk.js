(this.webpackJsonpfirst=this.webpackJsonpfirst||[]).push([[0],{112:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),o=n(22),i=n.n(o),l=(n(98),n(12)),u=n(80),s=n(81),m=n(90),b=n(82),_=n(91),f=n(59),p=n(114),d=(n(102),n(51)),v=n(30),E=n.n(v),C=n(69),O=n.n(C),h=function(t){var e=t.title,n=t.disabled?O.a.disabled:O.a.active;return r.a.createElement("button",{type:"submit",className:n},e)},x=n(66),g=n(65),j=g.b().shape({name:g.c().min(2,"Is to small name").max(35,"Is to long").required("Required"),number:g.a().min(555555,"Must be longer than 6 characters").required("Required")}),y=function(t){var e=t.addOneContact;return r.a.createElement(x.b,{initialValues:{name:"",number:0},validationSchema:j,onSubmit:function(t,n){var a=n.resetForm;e(Object(d.a)({},t)),a({})}},(function(t){var e=t.values,n=t.handleChange,a=t.handleSubmit,c=t.isSubmitting;return r.a.createElement("form",{onSubmit:a,className:E.a.form},r.a.createElement("label",{htmlFor:"name",className:E.a.label},"Name",r.a.createElement("input",{type:"text",value:e.name,id:"name",onChange:n,autoComplete:"off",className:E.a.input}),r.a.createElement(x.a,{name:"name"},(function(t){return r.a.createElement("div",{className:E.a.error},t)}))),r.a.createElement("label",{htmlFor:"number",className:E.a.label},"Number",r.a.createElement("input",{type:"text",value:0===e.number?"":e.number,id:"number",name:"number",onChange:n,className:E.a.input,autoComplete:"off"}),r.a.createElement(x.a,{name:"number"},(function(t){return r.a.createElement("div",{className:E.a.error},t)}))),r.a.createElement(h,{title:"Add contact",disabled:c}))}))},N=n(15),k=n(86),F=n.n(k),w=Object(N.b)("get/getContacts"),A=Object(N.b)("remove",(function(t){return{payload:t}})),S=Object(N.b)("create",(function(t){return{payload:Object(d.a)({},t,{id:F.a.generate()})}})),I={addOneContact:S},L=Object(l.b)((function(t){return{contacts:t.contacts}}),I)(y),B=n(64),J=n.n(B),T=function(t){var e=t.name,n=t.number,a=t.id,c=t.deleteContact;return r.a.createElement("div",{className:J.a.container},r.a.createElement("p",{className:J.a.text},e,": ",n),r.a.createElement("button",{type:"button",onClick:function(){return c(a)},className:J.a.btn},"X"))},P={deleteContact:A},V=Object(l.b)((function(t){return{contacts:t.contacts}}),P)(T),q=n(71),D=n.n(q),K=n(113),M=n(87),Y=n.n(M),H=function(t){var e=t.contacts;return r.a.createElement(K.a,{className:D.a.list,component:"ul"},e.map((function(t){return r.a.createElement(p.a,{timeout:250,unmountOnExit:!0,classNames:Y.a,key:t.id},r.a.createElement("li",{className:D.a.items},r.a.createElement(V,t)))})))},R=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))},X=Object(l.b)((function(t){var e=t.contacts,n=t.filter;return{contacts:R(e,n)}}))(H),z=n(72),Q=n.n(z),U=function(t){var e=t.value,n=t.filterContact;return r.a.createElement("label",{className:Q.a.label},"Find contact by name",r.a.createElement("input",{type:"text",className:Q.a.input,value:e,onChange:n}))},Z=Object(N.b)("filtered",(function(t){return{payload:t.target.value}})),G={filterContact:Z},W=Object(l.b)((function(t){return{value:t.filter}}),G)(U),$=n(73),tt=n.n($),et=n(88),nt=n.n(et),at=function(t){function e(){return Object(u.a)(this,e),Object(m.a)(this,Object(b.a)(e).apply(this,arguments))}return Object(_.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=function(t){try{var e=localStorage.getItem(t);return e?JSON.parse(e):null}catch(n){throw new Error}}("contacts");t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t){var e=this.props.contacts;t.contacts!==e&&function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(n){throw new Error}}("contacts",e)}},{key:"render",value:function(){var t=this.props.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:tt.a.logo},"Phonebook"),r.a.createElement(L,null),r.a.createElement(f.a,{position:"top-right",autoClose:3e3,closeOnClick:!0}),r.a.createElement(p.a,{in:t.length>=1,timeout:250,unmountOnExit:!0,classNames:nt.a},r.a.createElement("div",null,r.a.createElement("h2",{className:tt.a.text},"Contacts"),r.a.createElement(W,null),r.a.createElement(X,null))))}}]),e}(c.Component),ct={addOneContact:S,deleteContact:A},rt=Object(l.b)((function(t){return{contacts:t.contacts}}),ct)(at),ot=function(){return r.a.createElement(rt,null)},it=n(10),lt=n(27),ut=n(74),st=function(t,e){return!!function(t,e){return t.find((function(t){return t.name===e.name}))}(t,e)&&(f.b.warn("".concat(e.name," is already in contacts!")),!0)},mt=Object(N.c)([],(a={},Object(lt.a)(a,S,(function(t,e){var n=e.payload;return st(t,n)?t:[].concat(Object(ut.a)(t),[n])})),Object(lt.a)(a,A,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Object(lt.a)(a,w,(function(t,e){var n=e.payload;return[].concat(Object(ut.a)(t),[n])})),a)),bt=Object(N.c)("",Object(lt.a)({},Z,(function(t,e){return e.payload}))),_t=n(89),ft=Object(it.combineReducers)({contacts:mt,filter:bt}),pt=Object(N.a)({reducer:ft},Object(_t.devToolsEnhancer)());i.a.render(r.a.createElement(l.a,{store:pt},r.a.createElement(ot,null)),document.getElementById("root"))},30:function(t,e,n){t.exports={form:"ContactForm_form__3Zocm",label:"ContactForm_label__VunIx",input:"ContactForm_input__3m8Lp",btn:"ContactForm_btn__3Mg4V",error:"ContactForm_error__1J3Fe"}},64:function(t,e,n){t.exports={container:"Contacts_container__3pyIw",text:"Contacts_text__3N0QD",btn:"Contacts_btn__3yM8y"}},69:function(t,e,n){t.exports={button:"Button_button__2YATr",disabled:"Button_disabled__2ec1C Button_button__2YATr",active:"Button_active__HPaBN Button_button__2YATr"}},71:function(t,e,n){t.exports={list:"ContactList_list__1aXbn",items:"ContactList_items__1-7_0"}},72:function(t,e,n){t.exports={label:"ContactFilter_label__Kem4d",input:"ContactFilter_input__1ncKb"}},73:function(t,e,n){t.exports={logo:"Phonebook_logo__33zII","logo-wake":"Phonebook_logo-wake__FHYKJ",text:"Phonebook_text__1keFD"}},87:function(t,e,n){t.exports={enter:"pop_enter__3reIL",enterActive:"pop_enterActive__34ecH",exit:"pop_exit__2guTg",exitActive:"pop_exitActive__1Vw-K"}},88:function(t,e,n){t.exports={enter:"slide_enter__3LT_2",enterActive:"slide_enterActive__LpnA7",exit:"slide_exit__1iVaS"}},93:function(t,e,n){t.exports=n(112)},98:function(t,e,n){}},[[93,1,2]]]);
//# sourceMappingURL=main.fb34613c.chunk.js.map
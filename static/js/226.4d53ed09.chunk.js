"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[226],{7226:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var r,o,a,i,s,d,c,u,l,x,p,m,b=t(9434),h=t(168),f=t(5867),g=f.ZP.div(r||(r=(0,h.Z)(["\n  margin-bottom: 20px;"]))),Z=f.ZP.p(o||(o=(0,h.Z)(["\n  font-size: 20px;\n  font-weight: 400;\n  margin-bottom: 10px;\n"]))),j=f.ZP.input(a||(a=(0,h.Z)(["\n  padding: 6px 6px;\n  border-radius: 8px;\n  border: 2px solid black;\n  background: #F0F8FF;\n"]))),k=t(4808),y=t(6916),v=function(n){return n.contacts.contacts},w=function(n){return n.filter},C=function(n){return n.contacts.isLoading},F=(0,y.P1)([v,w],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),P=t(184),E=function(){var n=(0,b.I0)(),e=(0,b.v9)(w);return(0,P.jsxs)(g,{children:[(0,P.jsx)(Z,{children:"Find contacts by name"}),(0,P.jsx)(j,{name:"filter",type:"text",value:e,onChange:function(e){return n((0,k.x)(e.target.value))}})]})},z=t(5705),_=t(6727),A=(0,f.ZP)(z.l0)(i||(i=(0,h.Z)(["\n  max-width: 400px;\n  border-radius: 10px;\n  border: 2px solid black;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 20px;\n  margin-bottom: 30px;\n  "]))),L=f.ZP.label(s||(s=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 18px;\n  font-weight: 500;\n  "]))),B=(0,f.ZP)(z.gN)(d||(d=(0,h.Z)(["\n  background: #F0F8FF;\n  border-radius: 8px;\n  border: 2px solid black;\n  padding: 4px 4px;\n  width: 300px;\n  margin-bottom: 6px;\n"]))),D=f.ZP.button(c||(c=(0,h.Z)(["\n   background: #ADD8E6;\n   border-radius: 8px;\n   border: 2px solid black;\n   font-size: 15px;\n   font-weight: 400;\n   padding: 7px 7px;\n\n   &:hover {\n    background: #87CEEB;\n   }\n\n   &:focus {\n    background: #87CEEB;\n   }\n   "]))),q=(0,f.ZP)(z.Bc)(u||(u=(0,h.Z)(["\n   color: #DC143C;\n   font-size: 14px;\n   font-weight: 400;\n\n"]))),I=t(3634),N=_.Ry().shape({name:_.Z_().min(2,"Too Short!").max(50,"Too Long!").matches("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$","Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("Required"),number:_.Z_().min(9,"The 9 symbols required!").max(13,"Less than 13 symbols!").matches(/\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Required")}),R=function(){var n=(0,b.I0)(),e=(0,b.v9)(v);return(0,P.jsx)(z.J9,{initialValues:{name:"",number:""},validationSchema:N,onSubmit:function(t,r){e.some((function(n){return n.name.toLowerCase()===t.name.toLowerCase()}))?alert("".concat(t.name," is already in contacts.")):e.some((function(n){return n.number===t.number}))?alert("".concat(t.number," is already in contacts.")):(n((0,I.uK)(t)),r.resetForm())},children:(0,P.jsxs)(A,{children:[(0,P.jsxs)(L,{children:["Name",(0,P.jsx)(B,{type:"text",name:"name",placeholder:"Enter your name"}),(0,P.jsx)(q,{name:"name",component:"div"})]}),(0,P.jsxs)(L,{children:["Number",(0,P.jsx)(B,{type:"tel",name:"number",placeholder:"Enter your phone"}),(0,P.jsx)(q,{name:"number",component:"div"})]}),(0,P.jsx)(D,{type:"submit",children:"Add contact"})]})})},S=f.ZP.li(l||(l=(0,h.Z)(["\n  display: flex;\n  gap: 20px;\n  border: 1px solid black;\n  width: 350px;\n  border-radius: 8px;\n"]))),T=f.ZP.p(x||(x=(0,h.Z)(["\n  font-size: 20px;\n  font-weight: 400;\n  width: 350px;\n"]))),J=f.ZP.button(p||(p=(0,h.Z)(["\n   background: #ADD8E6;\n   border-radius: 8px;\n   border: 2px solid black;\n   font-size: 14px;\n   font-weight: 400;\n   padding: 5px 5px;\n\n   &:hover {\n    background: #87CEEB;\n   }\n\n   &:focus {\n    background: #87CEEB;\n   }\n   "]))),K=function(n){var e=n.contact,t=(0,b.I0)();return(0,P.jsxs)(S,{children:[(0,P.jsxs)(T,{children:[e.name," : ",e.number]}),(0,P.jsx)(J,{onClick:function(){return t((0,I.GK)(e.id))},children:"Delete"})]})},G=f.ZP.ul(m||(m=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),M=function(){var n=(0,b.v9)(F);return(0,P.jsx)(P.Fragment,{children:n.length?(0,P.jsx)(G,{children:n.map((function(n){return(0,P.jsx)(K,{contact:n},n.id)}))}):(0,P.jsx)("p",{children:"Contact list is empty, please add contacts!"})})},V=t(968),$=t(2791);function H(){var n=(0,b.I0)(),e=(0,b.v9)(C);return(0,$.useEffect)((function(){n((0,I.yF)())}),[n]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("title",{children:"Contacts"}),(0,P.jsx)(R,{}),(0,P.jsx)(E,{}),(0,P.jsx)("div",{children:e&&(0,P.jsx)(V.Z,{})}),(0,P.jsx)(M,{})]})}}}]);
//# sourceMappingURL=226.4d53ed09.chunk.js.map
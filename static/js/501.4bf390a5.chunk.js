"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[501],{7501:function(n,e,t){t.r(e),t.d(e,{default:function(){return un}});var r,o,i,a,s,d,c,x,p,l,u,m,h,b,f=t(9434),g=t(168),j=t(5867),Z=j.ZP.p(r||(r=(0,g.Z)(["\n  font-size: 20px;\n  font-weight: 400;\n  margin-bottom: 10px;\n"]))),w=j.ZP.input(o||(o=(0,g.Z)(["\n  padding: 6px 6px;\n  border-radius: 8px;\n  border: 2px solid black;\n  background: #F0F8FF;\n  margin-bottom: 30px;\n"]))),v=t(6916),k=function(n){return n.contacts.contacts},y=function(n){return n.filter},C=function(n){return n.contacts.isLoading},z=(0,v.P1)([k,y],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),P=t(4808),E=t(184),F=function(){var n=(0,f.I0)(),e=(0,f.v9)(y);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Z,{children:"Find contacts by name"}),(0,E.jsx)(w,{name:"filter",type:"text",value:e,onChange:function(e){return n((0,P.x)(e.target.value))}})]})},A=t(5705),_=t(6727),L=j.ZP.div(i||(i=(0,g.Z)(["\nmax-width: 400px;\n  border-radius: 10px;\n  border: 2px solid white;\n  background: white;\n  padding: 15px;\n  box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, inset 14px 14px 15px 11px rgba(255,255,255,0);\n"]))),B=(0,j.ZP)(A.l0)(a||(a=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 20px;\n  margin-bottom: 30px;\ncolor: rgba(0, 0, 0, 0.6);\nfont-weight: 800;\nfont-size: 1rem;\nline-height: 1.4375em;\n  "]))),N=j.ZP.label(s||(s=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 18px;\n  font-weight: 500;\n  "]))),S=(0,j.ZP)(A.gN)(d||(d=(0,g.Z)(["\n  background: #F0F8FF;\n  border-radius: 8px;\n  border: 2px solid black;\n  padding: 4px 4px;\n  width: 300px;\n  margin-bottom: 6px;\n"]))),q=j.ZP.button(c||(c=(0,g.Z)(["\n   background: #ADD8E6;\n   border-radius: 8px;\n   border: 2px solid black;\n   font-size: 15px;\n   font-weight: 400;\n   padding: 7px 7px;\n\n   &:hover {\n    background: #87CEEB;\n   }\n\n   &:focus {\n    background: #87CEEB;\n   }\n   "]))),D=(0,j.ZP)(A.Bc)(x||(x=(0,g.Z)(["\n   color: #DC143C;\n   font-size: 14px;\n   font-weight: 400;\n\n"]))),I=t(3634),R=t(5218),J=_.Ry().shape({name:_.Z_().min(2,"Too Short!").max(50,"Too Long!").matches("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$","Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("Required"),number:_.Z_().min(9,"The 9 symbols required!").max(13,"Less than 13 symbols!").matches(/\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Required")}),K=function(){var n=(0,f.I0)(),e=(0,f.v9)(k);return(0,E.jsxs)(L,{children:[(0,E.jsx)("h2",{children:"Phonebook"}),(0,E.jsx)(A.J9,{initialValues:{name:"",number:""},validationSchema:J,onSubmit:function(t,r){e.some((function(n){return n.name.toLowerCase()===t.name.toLowerCase()}))?R.ZP.error("".concat(t.name," is already in contacts!"),{duration:4e3}):e.some((function(n){return n.number===t.number}))?R.ZP.error("".concat(t.number," is already in contacts!"),{duration:4e3}):(n((0,I.uK)(t)),r.resetForm())},children:(0,E.jsxs)(B,{children:[(0,E.jsxs)(N,{children:["Name",(0,E.jsx)(S,{type:"text",name:"name",placeholder:"Enter name"}),(0,E.jsx)(D,{name:"name",component:"div"})]}),(0,E.jsxs)(N,{children:["Number",(0,E.jsx)(S,{type:"tel",name:"number",placeholder:"Enter phone"}),(0,E.jsx)(D,{name:"number",component:"div"})]}),(0,E.jsx)(q,{type:"submit",children:"Add contact"})]})})]})},O=t(9439),T=j.ZP.li(p||(p=(0,g.Z)(["\n  display: flex;\n  gap: 10px;\n  width: 350px;\n"]))),V=j.ZP.p(l||(l=(0,g.Z)(["\n  font-size: 20px;\n  font-weight: 400;\n  width: 350px;\n"]))),G=j.ZP.button(u||(u=(0,g.Z)(["\n   background: white;\n   border-radius: 8px;\n   border: 1px solid transparent;\n   font-size: 14px;\n   font-weight: 400;\n   padding: 5px 5px;\n\n   &:hover {\n    background-color: #709cb3;\n    box-shadow: 0 0 10px #008296, 0 0 20px #00b2b2, 0 0 40px #008296;\n    color: #e6dc55;\n   }\n   "]))),M=t(8820),Q=t(6355),Y=t(2791),$=t(7948),H=t.n($),U=t(3728),W=j.zo.div(m||(m=(0,g.Z)(["\nwidth: 400px;\nheight: 100%;\npadding: 30px;\nborder: 2px solid black;\nborder-radius: 10px;\n"]))),X=j.zo.button(h||(h=(0,g.Z)(["\n  background: #ADD8E6;\n   border-radius: 8px;\n   border: 2px solid black;\n   font-size: 15px;\n   font-weight: 400;\n   padding: 10px;\n   width: 70px;\n\n   &:hover {\n    background: #87CEEB;\n   }\n\n   &:focus {\n    background: #87CEEB;\n   }\n"]))),nn=j.zo.div(b||(b=(0,g.Z)(["\ndisplay: flex;\njustify-content: center;\ngap: 50px;\n\n"])));H().setAppElement("#root");var en,tn,rn,on={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"0px"}},an=function(n){var e=n.isOpen,t=n.contact,r=n.onClose,o={id:t.id,name:t.name,number:t.number},i=(0,f.I0)();return(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(H(),{isOpen:e,onClose:r,style:on,children:(0,E.jsxs)(W,{children:[(0,E.jsx)("h2",{children:"Edit Contact"}),(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(A.J9,{initialValues:o,validationSchema:J,onSubmit:function(n){i((0,I.mP)(n)),r(),console.log(n)},children:(0,E.jsxs)(B,{children:[(0,E.jsxs)(N,{children:["Name",(0,E.jsx)(S,{type:"text",name:"name",placeholder:"Enter name"}),(0,E.jsx)(D,{name:"name",component:"div"})]}),(0,E.jsxs)(N,{children:["Number",(0,E.jsx)(S,{type:"tel",name:"number",placeholder:"Enter phone"}),(0,E.jsx)(D,{name:"number",component:"div"})]})]})})}),(0,E.jsxs)(nn,{children:[(0,E.jsxs)(X,{type:"submit",children:[(0,E.jsx)(U.pl0,{size:20})," save "]}),(0,E.jsxs)(X,{onClick:r,children:[(0,E.jsx)(U.VuA,{size:20})," cansel"]})]})]})})})},sn=function(n){var e=n.contact,t=e.id,r=e.name,o=e.number,i=(0,f.I0)(),a=(0,Y.useState)(!1),s=(0,O.Z)(a,2),d=s[0],c=s[1],x=function(){c(!d)};return(0,E.jsxs)(T,{children:[(0,E.jsxs)(V,{children:[r,"   :   ",o]}),(0,E.jsx)(G,{onClick:x,children:(0,E.jsx)(Q.fmQ,{size:18,color:"#464f54"})}),d&&(0,E.jsx)(an,{isOpen:d,contact:{id:t,name:r,number:o},onClose:x}),(0,E.jsx)(G,{onClick:function(){return i((0,I.GK)(t))},children:(0,E.jsx)(M.YK6,{size:18,color:"#464f54"})})]})},dn=j.ZP.ul(en||(en=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),cn=function(){var n=(0,f.v9)(z);return(0,E.jsx)(E.Fragment,{children:n.length?(0,E.jsx)(dn,{children:n.map((function(n){return(0,E.jsx)(sn,{contact:n},n.id)}))}):(0,E.jsx)("p",{children:"Contact list is empty, please add contacts!"})})},xn=t(968),pn=j.zo.main(tn||(tn=(0,g.Z)(["\ndisplay: flex;\ngap: 100px;\njustify-content: center;\npadding-top: 60px;\n"]))),ln=j.zo.div(rn||(rn=(0,g.Z)(["\nmax-width: 400px;\n  border-radius: 10px;\n  border: 2px solid white;\n  background: white;\n  padding: 15px;\n  box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, inset 14px 14px 15px 11px rgba(255,255,255,0);\n"])));function un(){var n=(0,f.I0)(),e=(0,f.v9)(C);return(0,Y.useEffect)((function(){n((0,I.yF)())}),[n]),(0,E.jsxs)(pn,{children:[(0,E.jsx)(K,{}),(0,E.jsxs)(ln,{children:[(0,E.jsx)("h2",{children:"Contacts"}),(0,E.jsx)(F,{}),e&&(0,E.jsx)(xn.Z,{}),(0,E.jsx)(cn,{})]})]})}}}]);
//# sourceMappingURL=501.4bf390a5.chunk.js.map
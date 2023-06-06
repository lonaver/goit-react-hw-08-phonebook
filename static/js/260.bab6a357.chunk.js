"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[260],{9026:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var a=t(2791),r=t(9434),s=function(e){return e.contacts.contacts},i=function(e){return e.filters},c=t(3761),o=t(1289),l=t(9439),u=t(4691),d=t(3402),m="ContactForm_form__dhl+T",h=t(3329),p=function(){var e=(0,r.I0)(),n=(0,r.v9)(s),t=n.items,i=n.isLoading,p=(0,a.useState)(""),f=(0,l.Z)(p,2),b=f[0],v=f[1],_=(0,a.useState)(""),x=(0,l.Z)(_,2),j=x[0],w=x[1];(0,a.useEffect)((function(){i&&(v(""),w(""))}),[i,e]);return(0,h.jsxs)("form",{className:m,onSubmit:function(n){n.preventDefault();var a=b.toLowerCase(),r=t.find((function(e){return e.name.toLowerCase()===a}));if(r)d.Am.error("".concat(r.name," is alredy contact with phone ").concat(r.number));else{var s=t.find((function(e){return e.phone===j}));s?d.Am.error("".concat(s.name," is alredy contact with phone ").concat(s.number)):e((0,c.uK)({name:b,number:j}))}},children:[(0,h.jsxs)("label",{htmlFor:"name",className:o.Z.label_input,children:["Name",(0,h.jsx)("input",{className:o.Z.field,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:b,onChange:function(e){return v(e.target.value)}})]}),(0,h.jsxs)("label",{htmlFor:"number",className:o.Z.label_input,children:["Number",(0,h.jsx)("input",{className:o.Z.field,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:j,onChange:function(e){return w(e.target.value)}})]}),(0,h.jsx)("button",{type:"submit",className:o.Z.btn,children:i?(0,h.jsx)(u.no,{visible:!0,height:"20",width:"20",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper"}):"Add"})]})},f="ContactItem_item_contact__McLDe",b="ContactItem_text_contact__9dwcb",v="ContactItem_accent_text__GfMAt",_=function(e){var n=e.name,t=e.phone,a=e.id,s=(0,r.I0)(),i=(0,r.v9)((function(e){var n;return null===(n=e.contacts.contacts[a])||void 0===n?void 0:n.isLoading}));return(0,h.jsxs)("li",{className:f,children:[(0,h.jsxs)("div",{className:b,children:[(0,h.jsxs)("span",{children:[n," "]}),(0,h.jsx)("span",{className:v,children:t})]}),(0,h.jsx)("button",{type:"button",className:o.Z.btn,disabled:!!i,onClick:function(){return e=a,void s((0,c.GK)(e));var e},children:i?(0,h.jsx)(u.no,{visible:!0,height:"20",width:"20",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper"}):"delete"})]})},x="ContactList_listAbonent__Fr2Ku",j=function(){var e=(0,r.I0)(),n=(0,r.v9)(s),t=n.items,o=n.isLoading,u=n.error,d=(0,r.v9)(i).filter,m=(0,a.useState)([]),p=(0,l.Z)(m,2),f=p[0],b=p[1];return(0,a.useEffect)((function(){e((0,c.yF)())}),[e]),(0,a.useEffect)((function(){var e=d.toString().toLowerCase();b(t.filter((function(n){var t=n.name,a=n.number;return t.toLowerCase().includes(e)||a.toLowerCase().includes(e)})))}),[d,t]),(0,h.jsxs)("div",{className:x,children:[o&&(0,h.jsx)("span",{children:"Loading..."}),u?(0,h.jsx)("span",{children:"Something wrong... "}):f.map((function(e,n){var t=e.name,a=e.number,r=e.id;return(0,h.jsx)(_,{name:t,phone:a,id:r},n)}))]})},w=t(1473),g="Filter_filter_wrapper__wbaT1",C=function(){var e=(0,r.I0)();return(0,h.jsx)("div",{className:g,children:(0,h.jsxs)("label",{className:o.Z.label_input,children:["Filter",(0,h.jsx)("input",{className:o.Z.field,type:"text",onChange:function(n){var t=n.currentTarget.value;e((0,w.T)(t))}})]})})};function N(){var e=(0,r.v9)(s).items,n=(0,r.I0)();return(0,a.useEffect)((function(){n((0,c.yF)())}),[n]),(0,h.jsxs)("div",{className:o.Z.contacts,children:[(0,h.jsx)("h1",{children:"Phone book"}),(0,h.jsx)(p,{}),(0,h.jsx)("h2",{children:"Contacts"}),(0,h.jsx)(C,{}),e.length>0&&(0,h.jsx)(j,{})]})}}}]);
//# sourceMappingURL=260.bab6a357.chunk.js.map
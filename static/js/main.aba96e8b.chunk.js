(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{16:function(t,e,n){},25:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(10),o=n.n(r),i=n(9),s=n(7),u=n(2),l=n(4),b=(n(16),n(11)),j=(n(25),n(0)),d=function(t){var e=t.onSubmit,n=Object(c.useState)(""),a=Object(l.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(""),s=Object(l.a)(i,2),u=s[0],d=s[1],f=function(){o(""),d("")};return Object(j.jsx)("div",{children:Object(j.jsx)("form",{onSubmit:function(t){t.preventDefault();var n=Object(b.generate)();e({id:n,name:r,number:u}),f()},children:Object(j.jsxs)("div",{className:"form",children:[Object(j.jsx)("label",{children:"Name"}),Object(j.jsx)("input",{type:"text",name:"name",value:r,onChange:function(t){var e=t.currentTarget.value;o(e)},className:"input",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(j.jsx)("label",{children:"Number"}),Object(j.jsx)("input",{type:"tel",name:"number",value:u,onChange:function(t){var e=t.currentTarget.value;d(e)},className:"input",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(j.jsx)("button",{type:"submit",className:"btn",children:"Add contact"})]})})})},f=(n(27),function(t){var e=t.listContact,n=t.onDelete;return Object(j.jsx)("ul",{className:"contacts",children:e.map((function(t){var e=t.name,c=t.id,a=t.number;return Object(j.jsxs)("li",{children:[e,": ",a,Object(j.jsx)("button",{onClick:function(){return n(c)},type:"button",className:"btn",children:"Delete"})]},c)}))})}),O=(n(28),function(t){var e=t.handleChange,n=t.filter;return Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{className:"label",children:"Find contacts by name"}),Object(j.jsx)("input",{type:"text",name:"filter",value:n,onChange:e,className:"input",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})}),m=function(){var t=Object(c.useState)({contacts:[],filter:""}),e=Object(l.a)(t,2),n=e[0],a=e[1];return Object(c.useEffect)((function(){var t=window.localStorage.getItem("contacts"),e=JSON.parse(t);e&&a((function(t){return Object(u.a)(Object(u.a)({},t),{},{contacts:e})}))}),[]),Object(c.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n.contacts))}),[n.contacts]),Object(j.jsxs)("div",{className:"conteiner",children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(d,{onSubmit:function(t){!0!==n.contacts.some((function(e){return e.name===t.name}))?a((function(e){return Object(u.a)(Object(u.a)({},e),{},{contacts:[].concat(Object(i.a)(e.contacts),[t])})})):alert("Already in book!")}}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(O,{handleChange:function(t){var e=t.currentTarget,n=e.name,c=e.value;a((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(s.a)({},n,c))}))},filter:n.filter}),Object(j.jsx)(f,{listContact:function(){var t=n.filter;return n.contacts.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}(),onDelete:function(t){a((function(e){var n=Object(i.a)(e.contacts).filter((function(e){return e.id!==t}));return Object(u.a)(Object(u.a)({},e),{},{contacts:n})}))}})]})};o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.aba96e8b.chunk.js.map
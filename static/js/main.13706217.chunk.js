(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a,n=c(7),s=c.n(n),l=c(4),r=c(2),i=c(3),o=c.n(i),d=c(1),j=(c(13),c(14),c(5)),u=c.n(j),b=c(0),h=function(e){var t=e.todos,c=e.onModalButtonClick,a=e.isModalButtonClicked,n=Object(d.useState)(null),s=Object(r.a)(n,2),l=s[0],i=s[1],o=function(e){return a&&e===l};return Object(b.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:" "})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){return Object(b.jsxs)("tr",{"data-cy":"todo",className:u()({"has-background-info-light":o(e.id)}),children:[Object(b.jsx)("td",{className:"is-vcentered",children:e.id}),Object(b.jsx)("td",{className:"is-vcentered",children:e.completed?Object(b.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(b.jsx)("i",{className:"fas fa-check"})}):""}),Object(b.jsx)("td",{className:"is-vcentered is-expanded",children:Object(b.jsx)("p",{className:u()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(b.jsx)("td",{className:"has-text-right is-vcentered",children:Object(b.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(e){i(e.id),c(e)}(e)},children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:u()("far",{"fa-eye":!o(e.id),"fa-eye-slash":o(e.id)})})})})})]},e.id)}))})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(a||(a={}));var m=function(e){var t=e.onSelectClick,c=e.onInputChange,n=e.query;return Object(b.jsxs)("form",{className:"field has-addons",children:[Object(b.jsx)("p",{className:"control",children:Object(b.jsx)("span",{className:"select",children:Object(b.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return t(e.target.value)},children:[Object(b.jsx)("option",{value:a.All,children:"All"}),Object(b.jsx)("option",{value:a.Active,children:"Active"}),Object(b.jsx)("option",{value:a.Completed,children:"Completed"})]})})}),Object(b.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(b.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:n,onChange:function(e){return c(e.target.value)}}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-magnifying-glass"})}),n&&Object(b.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(b.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})};function O(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(16);var x=function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(b.jsx)("div",{className:"Loader__content"})})},f=function(e){var t=e.todoModal,c=e.onCloseModalButtonClick,a=Object(d.useState)(null),n=Object(r.a)(a,2),s=n[0],i=n[1];return Object(d.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,null===t){e.next=7;break}return e.t0=i,e.next=5,c=t.userId,O("/users/".concat(c));case 5:e.t1=e.sent,(0,e.t0)(e.t1);case 7:e.next=12;break;case 9:throw e.prev=9,e.t2=e.catch(0),new Error("Error fetching user");case 12:case"end":return e.stop()}var c}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),Object(b.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(b.jsx)("div",{className:"modal-background"}),t&&s?Object(b.jsxs)("div",{className:"modal-card",children:[Object(b.jsxs)("header",{className:"modal-card-head",children:[Object(b.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(b.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c()}})]}),Object(b.jsxs)("div",{className:"modal-card-body",children:[Object(b.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(b.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(b.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(b.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(b.jsx)("a",{href:"mailto:".concat(s.email),children:s.name})]})]})]}):Object(b.jsx)(x,{})]})},p=function(){var e=Object(d.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(d.useState)(a.All),i=Object(r.a)(s,2),j=i[0],u=i[1],p=Object(d.useState)(""),v=Object(r.a)(p,2),N=v[0],y=v[1],k=Object(d.useState)(null),g=Object(r.a)(k,2),C=g[0],w=g[1],S=Object(d.useState)(!1),A=Object(r.a)(S,2),B=A[0],E=A[1];Object(d.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=n,e.next=4,O("/todos");case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:throw e.prev=8,e.t2=e.catch(0),new Error("Error fetching todos");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var M=function(e,t,c){var n=e;switch(t){case a.Active:n=e.filter((function(e){return!e.completed}));break;case a.Completed:n=e.filter((function(e){return e.completed}));case a.All:}if(c){var s=c.toLowerCase().trim();return n.filter((function(e){return e.title.includes(s)}))}return n}(c,j,N);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h1",{className:"title",children:"Todos:"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsx)(m,{onSelectClick:function(e){u(e)},onInputChange:function(e){y(e)},query:N})}),Object(b.jsx)("div",{className:"block",children:c.length>0?Object(b.jsx)(h,{todos:M,onModalButtonClick:function(e){E(!0),w(e)},isModalButtonClicked:B}):Object(b.jsx)(x,{})})]})})}),B&&Object(b.jsx)(f,{todoModal:C,onCloseModalButtonClick:function(){E(!1)}})]})};s.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.13706217.chunk.js.map
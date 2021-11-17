(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var s=n(11),c=n.n(s),r=n(1),a=n.n(r),o=n(3),l=n(4),i=n(10),u=n(5),d=n(6),h=n(8),p=n(7),j=n(2),b=n.n(j),m=(n(18),n(19),n(20),n(12)),f=n.n(m),O=n(0),v=function(e){var t=e.titleToSearch,n=e.completeStatus,s=e.todos,c=e.selectUser,r=e.handleInputChange;return Object(O.jsxs)("div",{className:"TodoList",children:[Object(O.jsxs)("div",{className:"TodosSearch",children:[Object(O.jsxs)("label",{htmlFor:"title",className:"TodosSearch__label",children:["Title:",Object(O.jsx)("input",{type:"text",id:"title",name:"titleToSearch",value:t,onChange:r,placeholder:"Task title"})]}),Object(O.jsxs)("label",{htmlFor:"title",className:"TodosSearch__label",children:["Status:",Object(O.jsxs)("select",{name:"completeStatus",id:"userId",value:n,onChange:r,children:[Object(O.jsx)("option",{value:"",children:"Choose status"}),Object(O.jsx)("option",{value:"not completed",children:"Not completed"}),Object(O.jsx)("option",{value:"completed",children:"Completed"})]})]})]}),Object(O.jsx)("h2",{children:"Todos:"}),Object(O.jsx)("div",{className:"TodoList__list-container",children:Object(O.jsx)("ul",{className:"TodoList__list",children:s.map((function(e){var t=e.title,n=e.completed,s=e.id,r=e.userId;return Object(O.jsxs)("li",{className:f()("TodoList__item",{"TodoList__item--checked":n},{"TodoList__item--unchecked":!n}),children:[Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"checkbox",checked:n,readOnly:!0}),Object(O.jsx)("p",{children:t})]}),Object(O.jsx)("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",onClick:function(){return c(r)},children:"User ".concat(r)})]},s)}))})})]})},x=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://mate.academy/students-api").concat(t));case 3:if((n=e.sent).ok){e.next=6;break}throw new Error("".concat(n.status," - ").concat(n.statusText));case 6:return e.next=8,n.json();case 8:return s=e.sent,e.abrupt("return",s);case 12:throw e.prev=12,e.t0=e.catch(0),new Error("The problem is here ".concat(e.t0));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),_=(n(22),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={user:{}},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.loadUserInfo()}},{key:"componentDidUpdate",value:function(){this.state.user.id!==this.props.userId&&this.loadUserInfo()}},{key:"loadUserInfo",value:function(){var e=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n=this.props.userId,x("/users/".concat(n));case 2:t=e.sent,this.setState({user:t});case 4:case"end":return e.stop()}var n}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.user;return Object(O.jsxs)("div",{className:"CurrentUser",children:[Object(O.jsx)("h2",{className:"CurrentUser__title",children:Object(O.jsx)("span",{className:"CurrentUser__title--span",children:"Selected user: ".concat(e.id)})}),Object(O.jsx)("h3",{className:"CurrentUser__name",children:"".concat(e.name," ").concat(e.username)}),Object(O.jsx)("p",{className:"CurrentUser__email",children:e.email}),Object(O.jsx)("p",{className:"CurrentUser__phone",children:e.phone}),Object(O.jsx)("button",{type:"button",className:"button",onClick:this.props.clearSelection,children:"Clear user"})]})}}]),n}(b.a.Component)),S=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={selectedUserId:0,todos:[],titleToSearch:"",completeStatus:""},e.selectUser=function(t){t!==e.state.selectedUserId&&e.setState({selectedUserId:t})},e.clearSelectedUser=function(){e.setState({selectedUserId:null})},e.handleInputChange=function(t){e.setState((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(l.a)({},t.target.name,t.target.value))}))},e.preparedTodos=function(){var t=e.state,n=t.todos,s=t.titleToSearch,c=t.completeStatus;return n.filter((function(e){return s?e.title.includes(s):"completed"===c?e.completed:"not completed"===c?!1===e.completed:e}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("/todos");case 2:t=e.sent,this.setState({todos:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.selectedUserId,n=e.titleToSearch,s=e.completeStatus;return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("div",{className:"App__sidebar",children:this.preparedTodos().length>0&&Object(O.jsx)(v,{titleToSearch:n,completeStatus:s,todos:this.preparedTodos(),selectUser:this.selectUser,handleInputChange:this.handleInputChange})}),Object(O.jsx)("div",{className:"App__content",children:Object(O.jsx)("div",{className:"App__content-container",children:t?Object(O.jsx)(_,{userId:t,clearSelection:this.clearSelectedUser}):"No user selected"})})]})}}]),n}(b.a.Component),T=S;c.a.render(Object(O.jsx)(T,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.bc5fb868.chunk.js.map
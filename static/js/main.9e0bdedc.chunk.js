(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{18:function(e,t,s){},19:function(e,t,s){},20:function(e,t,s){},22:function(e,t,s){},23:function(e,t,s){"use strict";s.r(t);var n=s(11),r=s.n(n),c=s(1),a=s.n(c),o=s(3),i=s(4),l=s(9),u=s(5),d=s(6),h=s(8),p=s(7),j=s(2),b=s.n(j),m=(s(18),s(19),s(20),s(12)),O=s.n(m),f=s(0),v=function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(u.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={titleToSearch:"",completeStatus:""},e.handleInputChange=function(t){e.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(i.a)({},t.target.name,t.target.value.toLowerCase()))}))},e.preparedTodos=function(){var t=e.state,s=t.titleToSearch,n=t.completeStatus;return e.props.todos.filter((function(e){return s?e.title.toLowerCase().includes(s):e})).filter((function(e){return"completed"===n?e.completed:"not completed"===n?!1===e.completed:e}))},e}return Object(d.a)(s,[{key:"render",value:function(){var e=this,t=this.state,s=t.titleToSearch,n=t.completeStatus;return Object(f.jsxs)("div",{className:"TodoList",children:[Object(f.jsxs)("div",{className:"TodosSearch",children:[Object(f.jsxs)("label",{htmlFor:"title",className:"TodosSearch__label",children:["Title:",Object(f.jsx)("input",{type:"text",id:"title",name:"titleToSearch",value:s,onChange:this.handleInputChange,placeholder:"Task title"})]}),Object(f.jsxs)("label",{htmlFor:"title",className:"TodosSearch__label",children:["Status:",Object(f.jsxs)("select",{name:"completeStatus",id:"userId",value:n,onChange:this.handleInputChange,children:[Object(f.jsx)("option",{value:"",children:"Choose status"}),Object(f.jsx)("option",{value:"not completed",children:"Not completed"}),Object(f.jsx)("option",{value:"completed",children:"Completed"})]})]})]}),Object(f.jsx)("h2",{children:"Todos:"}),this.props.todos.length>0&&Object(f.jsx)("div",{className:"TodoList__list-container",children:Object(f.jsx)("ul",{className:"TodoList__list",children:this.preparedTodos().map((function(t){var s=t.title,n=t.completed,r=t.id,c=t.userId;return Object(f.jsxs)("li",{className:O()("TodoList__item",{"TodoList__item--checked":n},{"TodoList__item--unchecked":!n}),children:[Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{type:"checkbox",checked:n,readOnly:!0}),Object(f.jsx)("p",{children:s})]}),Object(f.jsx)("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",onClick:function(){return e.props.selectUser(c)},children:"User ".concat(c)})]},r)}))})})]})}}]),s}(b.a.Component),x=function(){var e=Object(o.a)(a.a.mark((function e(t){var s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://mate.academy/students-api").concat(t));case 3:if((s=e.sent).ok){e.next=6;break}throw new Error("".concat(s.status," - ").concat(s.statusText));case 6:return e.next=8,s.json();case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(0),new Error("The problem is here ".concat(e.t0));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),_=(s(22),function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(u.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:null,errorMessage:!1},e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.loadUserInfo()}},{key:"componentDidUpdate",value:function(e){e.userId!==this.props.userId&&this.loadUserInfo()}},{key:"loadUserInfo",value:function(){var e=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s=this.props.userId,x("/users/".concat(s));case 3:t=e.sent,this.setState({user:t,errorMessage:!1}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({user:null,errorMessage:!0});case 10:case"end":return e.stop()}var s}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.user,s=e.errorMessage;return Object(f.jsxs)("div",{children:[s&&Object(f.jsx)("h2",{children:"There is no such user"}),t&&Object(f.jsxs)("div",{className:"CurrentUser",children:[Object(f.jsx)("h2",{className:"CurrentUser__title",children:Object(f.jsx)("span",{className:"CurrentUser__title--span",children:"Selected user: ".concat(t.id)})}),Object(f.jsx)("h3",{className:"CurrentUser__name",children:"".concat(t.name," ").concat(t.username)}),Object(f.jsx)("p",{className:"CurrentUser__email",children:t.email}),Object(f.jsx)("p",{className:"CurrentUser__phone",children:t.phone}),Object(f.jsx)("button",{type:"button",className:"button",onClick:this.props.clearSelection,children:"Clear user"})]})]})}}]),s}(b.a.Component)),y=function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(u.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={selectedUserId:0,todos:[]},e.selectUser=function(t){t!==e.state.selectedUserId&&e.setState({selectedUserId:t})},e.clearSelectedUser=function(){e.setState({selectedUserId:null})},e.handleInputChange=function(t){e.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(i.a)({},t.target.name,t.target.value.toLowerCase()))}))},e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("/todos");case 2:t=e.sent,this.setState({todos:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.selectedUserId;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("div",{className:"App__sidebar",children:Object(f.jsx)(v,{todos:this.state.todos,selectUser:this.selectUser})}),Object(f.jsx)("div",{className:"App__content",children:Object(f.jsx)("div",{className:"App__content-container",children:e?Object(f.jsx)(_,{userId:e,clearSelection:this.clearSelectedUser}):"No user selected"})})]})}}]),s}(b.a.Component),S=y;r.a.render(Object(f.jsx)(S,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.9e0bdedc.chunk.js.map
(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(8),c=n.n(i),o=(n(14),n(2)),s=n(3),d=n(5),h=n(4),r=n(1),u=n(6),k=(n(15),n(16),function(e){return l.a.createElement("div",{className:"card"},l.a.createElement("h1",{className:"title"},e.title),l.a.createElement("div",{className:"body"},e.children))}),m=(n(17),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={name:""},n.handleNameChange=n.handleNameChange.bind(Object(r.a)(n)),n.handleAddClick=n.handleAddClick.bind(Object(r.a)(n)),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"handleAddClick",value:function(e){this.props.handleAddClick(this.state.name),this.setState({name:""})}},{key:"render",value:function(){return l.a.createElement("div",{className:"add-todo"},l.a.createElement("input",{type:"text",value:this.state.name,onChange:this.handleNameChange,placeholder:"What are you planning ToDo?",className:"input"}),l.a.createElement("button",{className:"btn",onClick:this.handleAddClick},"Add"))}}]),t}(l.a.Component)),p=(n(18),n(19),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={checked:n.props.isDone},n.handleToggleDoneClick=n.handleToggleDoneClick.bind(Object(r.a)(n)),n.handleDeleteClick=n.handleDeleteClick.bind(Object(r.a)(n)),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleToggleDoneClick",value:function(){this.setState({checked:!this.state.checked}),this.props.handleToggleDoneClick(this.props.id)}},{key:"handleDeleteClick",value:function(){this.props.handleDeleteClick(this.props.id)}},{key:"render",value:function(){return l.a.createElement("div",{className:"todo"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",checked:this.state.checked,onChange:this.handleToggleDoneClick,className:"check"}),l.a.createElement("span",{className:"name"},this.props.isDone?l.a.createElement("strike",null,this.props.name):this.props.name)),l.a.createElement("span",{className:"remove",onClick:this.handleDeleteClick},"X"))}}]),t}(l.a.Component)),C=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleToggleDoneClick=n.handleToggleDoneClick.bind(Object(r.a)(n)),n.handleDeleteClick=n.handleDeleteClick.bind(Object(r.a)(n)),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleToggleDoneClick",value:function(e){this.props.handleToggleDoneClick(e)}},{key:"handleDeleteClick",value:function(e){this.props.handleDeleteClick(e)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"list"},this.props.todos.map((function(t){return l.a.createElement(p,{key:t.id,id:t.id,name:t.name,isDone:t.isDone,handleToggleDoneClick:e.handleToggleDoneClick,handleDeleteClick:e.handleDeleteClick})})))}}]),t}(l.a.Component),b={nextId:3,todos:[{id:1,name:"First Todo",isDone:!1},{id:2,name:"Second Todo",isDone:!0}]},g=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state=b,n.handleAddClick=n.handleAddClick.bind(Object(r.a)(n)),n.handleDeleteClick=n.handleDeleteClick.bind(Object(r.a)(n)),n.handleToggleDoneClick=n.handleToggleDoneClick.bind(Object(r.a)(n)),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleAddClick",value:function(e){if(""!==e){var t=this.state.nextId,n=this.state.todos.slice();n.push({id:t,name:e,isDone:!1}),this.setState({nextId:t+1,todos:n})}}},{key:"handleDeleteClick",value:function(e){var t=this.state.todos.filter((function(t){return t.id!==e}));this.setState({todos:t})}},{key:"handleToggleDoneClick",value:function(e){var t=this.state.todos.map((function(t){return t.id===e&&(t.isDone=!t.isDone),t}));this.setState({todos:t})}},{key:"render",value:function(){return l.a.createElement("div",{className:"app-container"},l.a.createElement(k,{title:"ToDo App"},l.a.createElement(m,{handleAddClick:this.handleAddClick}),l.a.createElement(C,{todos:this.state.todos,handleDeleteClick:this.handleDeleteClick,handleToggleDoneClick:this.handleToggleDoneClick})))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.d93d72c3.chunk.js.map
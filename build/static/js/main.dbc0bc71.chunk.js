(this["webpackJsonpgestao-de-tarefas"]=this["webpackJsonpgestao-de-tarefas"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),c=n.n(i),r=n(7),s=n.n(r),o=(n(13),n(6)),l=n(5);n(14);var d=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(i.useState)(!1),s=Object(l.a)(r,2),d=s[0],f=s[1],j=function(e,t){var a=n.filter((function(n){return n.id==e&&(n.finalizada=t),n}));c(a),window.localStorage.setItem("tarefas",JSON.stringify(a))},u=function(e){var t=n.filter((function(t){if(t.id!=e)return t}));c(t),window.localStorage.setItem("tarefas",JSON.stringify(t))};return Object(i.useEffect)((function(){void 0!==window.localStorage.getItem("tarefas")&&(c(JSON.parse(window.localStorage.getItem("tarefas"))),console.log(window.localStorage.getItem("tarefas")))}),[]),Object(a.jsxs)("div",{className:"App",children:[d?Object(a.jsx)("div",{className:"modal",children:Object(a.jsxs)("div",{className:"modalContent",children:[Object(a.jsx)("h3",{children:"Adicionar sua tarefa"}),Object(a.jsx)("input",{id:"content-tarefa",type:"text"}),Object(a.jsx)("button",{onClick:function(){return function(){var e=document.getElementById("content-tarefa");c([].concat(Object(o.a)(n),[{id:(new Date).getTime(),tarefa:e.value,finalizada:!1}])),window.localStorage.setItem("tarefas",JSON.stringify([].concat(Object(o.a)(n),[{id:(new Date).getTime(),tarefa:e.value,finalizada:!1}]))),f(!1)}()},children:"Salvar!"})]})}):Object(a.jsx)("div",{}),Object(a.jsx)("div",{onClick:function(){f(!d)},className:"addTarefa",children:"+"}),Object(a.jsxs)("div",{className:"boxTarefas",children:[Object(a.jsx)("h2",{children:" Minhas tarefas do dia"}),n.map((function(e){return e.finalizada?Object(a.jsxs)("div",{className:"tarefaSingle",children:[Object(a.jsx)("p",{onClick:function(){return j(e.id,!1)},style:{textDecoration:"line-through"},children:e.tarefa}),Object(a.jsx)("span",{onClick:function(){return u(e.id)},children:"(X)"})]}):Object(a.jsxs)("div",{className:"tarefaSingle",children:[Object(a.jsxs)("p",{onClick:function(){return j(e.id,!0)},children:[e.tarefa," "]}),Object(a.jsx)("span",{onClick:function(){return u(e.id)},children:"(X)"})]})}))]})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(d,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.dbc0bc71.chunk.js.map
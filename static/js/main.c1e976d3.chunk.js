(this["webpackJsonptienda-fruver"]=this["webpackJsonptienda-fruver"]||[]).push([[0],{42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var a=c(2),r=c(14),n=c.n(r),i=c(8),s=c(12);c(44),c(38);s.a.initializeApp({apiKey:"AIzaSyAmtBtZhvkhsETzArWfm5vUZNFSfN4qTSw",authDomain:"fruver-cdd40.firebaseapp.com",projectId:"fruver-cdd40",storageBucket:"fruver-cdd40.appspot.com",messagingSenderId:"489831079002",appId:"1:489831079002:web:829127231cd030aa140c63"});var o=s.a.firestore(),d=(new s.a.auth.GoogleAuthProvider,"[Add] setData"),l="[Filter] setFilter",j="[Change] loaderActive",u="[Add] setCar",b=c(1),h=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"container_loader",children:Object(b.jsx)("div",{className:"loader"})})})},O=c(15),p=c(9),v=c(28),f=c(25),x=c.n(f),m=function(e){var t=e.size,c=void 0===t?1:t,a=e.description,r=e.icon,n=e.title,i=void 0===n?"test":n,s=Object(v.a)(e,["size","description","icon","title"]);return Object(b.jsx)("div",{className:"icon",children:Object(b.jsx)(x.a,Object(p.a)({size:c,path:r,title:i,description:a},s))})},g=c(20),y=function(){var e=Object(a.useState)(!1),t=Object(O.a)(e,2),c=t[0],r=t[1],n=Object(i.c)((function(e){return e.car})).compras;return Object(b.jsxs)("div",{className:"componet_nav",children:[Object(b.jsx)("div",{className:"nav-icon",children:Object(b.jsx)("a",{children:"DF"})}),Object(b.jsx)("div",{className:"container_burguer",children:Object(b.jsx)(m,{onClick:function(e){r(!c)},className:"burguer",icon:g.b,color:"white"})}),Object(b.jsxs)("div",{className:c?"container_nav active-nav":"container_nav",children:[Object(b.jsx)("nav",{className:"nav-anclas",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("a",{href:"#",children:"Frutas"}),Object(b.jsx)("a",{href:"#",children:"Verduras"}),Object(b.jsx)("a",{href:"#",children:"Carne y Pollo"}),Object(b.jsxs)("a",{href:"#",children:[Object(b.jsx)(m,{icon:g.a}),Object(b.jsx)("p",{className:"cantidad",children:n.length>0?n.length:""})]})]})}),Object(b.jsx)("div",{className:"nav-login",children:Object(b.jsxs)("div",{className:"login",children:[Object(b.jsx)("a",{href:"#",children:"Registrarse"}),Object(b.jsx)("a",{href:"#",children:"Iniciar Sesi\xf3n"})]})})]})]})},N=c(21),w=c.n(N),_=c(26),S=function(){var e=Object(i.c)((function(e){return e.productos})).data,t=Object(i.b)(),c=Object(a.useState)(""),r=Object(O.a)(c,2),n=r[0],s=r[1],o=function(){var e=Object(_.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(t.target.value.toLowerCase());case 2:return e.next=4,s(t.target.value);case 4:d();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var c=e.filter((function(e){if(e.nombre.includes(n))return e}));t({type:l,payload:c})};return Object(b.jsxs)("div",{className:"container_search",children:[Object(b.jsx)("form",{className:"form",children:Object(b.jsx)("input",{placeholder:"Buscar producto...",onChange:o,value:n,type:"search",id:"site-search",name:"q","aria-label":"Search through site content"})}),Object(b.jsx)("div",{className:"container_select",children:Object(b.jsxs)("select",{className:"select",onChange:function(c){var a=e.filter((function(e){if(e.categoria===c.target.value)return e}));t({type:l,payload:a}),"vacio"===c.target.value&&t({type:l,payload:e})},children:[Object(b.jsx)("option",{value:"vacio",children:"Filtrar ...."}),Object(b.jsx)("option",{value:"fruta",children:"Fruta"}),Object(b.jsx)("option",{value:"verdura",children:"Verdura"})]})})]})},C=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.filtros})).filtros,c=Object(i.c)((function(e){return e.productos})).loading;Object(a.useEffect)((function(){o.collection("frutas").onSnapshot((function(t){var c=[];t.forEach((function(e){var t={id:e.id,nombre:e.data().Nombre,precentacion:e.data().Venta,precio:1e3*e.data().Precio,urlImg:e.data().Url,categoria:e.data().Categoria};c.push(t)})),e({type:j,payload:!1}),e({type:d,payload:c}),e({type:l,payload:c})}))}),[e]);return Object(b.jsxs)("div",{children:[Object(b.jsx)(y,{}),Object(b.jsx)(S,{}),Object(b.jsx)("div",{children:c?Object(b.jsx)(h,{}):""}),Object(b.jsx)("div",{className:"container-productos",children:t.map((function(t){return Object(b.jsxs)("div",{className:"productos",children:[Object(b.jsx)("figure",{children:Object(b.jsx)("img",{src:t.urlImg,alt:t.nombre})}),Object(b.jsxs)("div",{className:"productos-datos",children:[Object(b.jsxs)("p",{children:["Nombre: ",t.nombre]}),Object(b.jsxs)("p",{children:["Precio: ",t.precio]}),Object(b.jsxs)("p",{children:["Precentaci\xf3n: ",t.precentacion]}),Object(b.jsx)("button",{onClick:function(){e({type:u,payload:[t]})},className:"btn btn-add",children:"Agregar al carrito"})]})]},t.id)}))})]})},A=(c(42),c(10)),E=c(27),I={compras:[]},k={data:[],loading:!0},F={filtros:[]},z="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||A.d,P=Object(A.c)({productos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return{data:t.payload};case j:return Object(p.a)(Object(p.a)({},e),{},{loading:t.payload});default:return e}},filtros:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(p.a)(Object(p.a)({},e),{},{filtros:t.payload});default:return e}},car:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(p.a)(Object(p.a)({},e),{},{compras:t.payload});default:return e}}}),D=Object(A.e)(P,z(Object(A.a)(E.a))),B=function(){return Object(b.jsx)(i.a,{store:D,children:Object(b.jsx)(C,{})})};n.a.render(Object(b.jsx)(B,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.c1e976d3.chunk.js.map
(this["webpackJsonpsolo-pokemon"]=this["webpackJsonpsolo-pokemon"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),a=n(13),i=n.n(a),o=(n(19),n(3)),j=(n(20),n.p+"static/media/pokeball.d9ffa6e8.png"),r=n(0),p=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{className:"startButton",type:"button",onClick:function(){e.setView("search")},children:Object(r.jsx)("img",{src:j,className:"pokeball",alt:"logo"})}),Object(r.jsx)("p",{children:"pokemon name \ud83c\uddfa\ud83c\uddf8 \u2192 \ud83c\uddef\ud83c\uddf5 dictionary"})]})},l=n(14),b=n.n(l),u=function(e){var t,n=function(t){e.setJpName(t)},c=function(){return e.setView("result")};return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"pokedex"}),Object(r.jsx)("p",{children:e.view}),Object(r.jsx)("p",{children:"please write pokemon!"}),Object(r.jsxs)("p",{children:["name:",Object(r.jsx)("input",{type:"text",name:"name",placeholder:"Let's search!",onChange:function(t){var n;n=t.target.value,e.setPoke(n)}})]}),Object(r.jsx)("button",{className:"searchButton",type:"button",onClick:function(){b.a.get("api/pokemon/"+e.poke).then((function(e){t=e.data[0].japanese_name,n(t)})),c()},children:"Search!"})]})},d=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:e.poke}),Object(r.jsx)("p",{children:e.jpName})]})};var h=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),i=Object(o.a)(a,2),j=i[0],l=i[1],b=Object(c.useState)("start"),h=Object(o.a)(b,2),O=h[0],m=h[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("header",{className:"App-header"}),"start"===O&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(p,{view:O,setView:m})}),"search"===O&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(u,{view:O,setView:m,poke:n,setPoke:s,jpName:j,setJpName:l})}),"result"===O&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(d,{view:O,setView:m,poke:n,setPoke:s,jpName:j,setJpName:l})})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root")),O()}},[[40,1,2]]]);
//# sourceMappingURL=main.259cb1c2.chunk.js.map
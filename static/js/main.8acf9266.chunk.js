(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{13:function(n,e,a){},14:function(n,e,a){},16:function(n,e,a){},18:function(n,e,a){"use strict";a.r(e);var t=a(0),c=a.n(t),s=a(8),r=a.n(s),o=(a(13),a(14),a(6)),b=[[{name:"C",class:"btn-danger btn-remove"},{name:"\u2190",class:"btn-danger btn-remove"},{name:"\xb1",class:"btn-danger btn-operation"},{name:"/",class:"btn-danger btn-operation"}],[{name:"7",class:"btn-danger btn-number"},{name:"8",class:"btn-danger btn-number"},{name:"9",class:"btn-danger btn-number"},{name:"*",class:"btn-danger btn-operation"}],[{name:"4",class:"btn-danger btn-number"},{name:"5",class:"btn-danger btn-number"},{name:"6",class:"btn-danger btn-number"},{name:"+",class:"btn-danger btn-operation"}],[{name:"1",class:"btn-danger btn-number"},{name:"2",class:"btn-danger btn-number"},{name:"3",class:"btn-danger btn-number"},{name:"-",class:"btn-danger btn-operation"}],[{name:".",class:"btn-danger btn-number"},{name:"0",class:"btn-danger btn-number"},{name:"=",class:"btn-danger btn-equals"}]],l=a(20),i=a(21),u=(a(15),a(16),a(2)),d=b||[];var m=function(){var n=Object(t.useState)(""),e=Object(o.a)(n,2),a=e[0],c=e[1],s=Object(t.useState)(""),r=Object(o.a)(s,2),b=r[0],m=r[1],j=Object(t.useState)(""),g=Object(o.a)(j,2),p=g[0],f=g[1],h=Object(t.useState)(0),O=Object(o.a)(h,2),v=O[0],x=O[1],F=function(n){c(n&&"="===p?n:""),m(""),f(""),x(0)},N=function(){return 0===v?parseFloat(a):"+"===p?v+parseFloat(a):"-"===p?v-parseFloat(a):"*"===p?v*parseFloat(a):"/"===p?v/parseFloat(a):"="===p?v:void 0},S=function(n){"+"===n||"-"===n||"*"===n||"/"===n?function(n){if(""===a&&"="!==p)"+"!==p&&"-"!==p&&"*"!==p&&"/"!==p||""!==b&&m("".concat(b.slice(0,-3)," ").concat(n," ")),f(n);else{var e=N();x(e),c(""),f(n),m(""===a&&"="===p||""===a&&"!\u2190"===p?"".concat(b," ").concat(n):""===b||"="===p?"".concat(a," ").concat(n," "):"".concat(b," ").concat(a," ").concat(n," "))}}(n):"C"===n?F():"\u2190"===n?"="!==p&&(""!==a?(f("\u2190"),c(a.slice(0,-1))):""===a&&"\u2190"===p&&(m(b.slice(0,-3)),f("!\u2190"))):"\xb1"===n?""!==a&&c((-1*a).toString()):"="===n?function(){if("="!==p){if(m("".concat(b," ").concat(a," ")),""!==a)if("0"===a&&"/"===p)alert("You cannot divide by 0."),m(b.slice(0,-3)),c("");else{var n=N();(n+".").split(".")[1].length>3?c(n.toFixed(3).toString()):c(n.toString()),m(""),x(n)}else c(v.toString()),m("");f("=")}}():alert("The operation ".concat(n," is not currently supported."))},y=function(n){var e=n.target.value;e.match(/^(\d|\.)$/)?function(n){"="===p?F(n):c("."===n?a+".":a+n)}(e):S(e)};return Object(u.jsxs)(l.a,{className:"calculator-area mx-auto pt-3 mt-4",children:[Object(u.jsx)(l.a.Header,{className:"card-header",children:Object(u.jsxs)("div",{className:"screen-area p-1",children:[Object(u.jsx)("div",{className:"output-area h3",children:a||0}),Object(u.jsx)("div",{className:"computation-screen",children:b})]})}),Object(u.jsx)(l.a.Body,{className:"card-body pt-2",children:Object(u.jsx)("div",{className:"keypad-area",children:d.map((function(n,e){return Object(u.jsx)("div",{className:"keypad",children:n.map((function(n){return Object(u.jsx)(i.a,{onClick:function(n){return y(n)},className:n.class,value:n.name,children:n.name},n.name)}))},e)}))})})]})};var j=function(){return Object(u.jsx)("div",{className:"calculator",children:Object(u.jsx)(m,{})},m)},g=function(n){n&&n instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(e){var a=e.getCLS,t=e.getFID,c=e.getFCP,s=e.getLCP,r=e.getTTFB;a(n),t(n),c(n),s(n),r(n)}))};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),g()}},[[18,1,2]]]);
//# sourceMappingURL=main.8acf9266.chunk.js.map
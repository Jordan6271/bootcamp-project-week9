(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{13:function(n,e,t){},14:function(n,e,t){},16:function(n,e,t){},18:function(n,e,t){"use strict";t.r(e);var a=t(0),c=t.n(a),r=t(8),s=t.n(r),i=(t(13),t(14),t(6)),b=[[{name:"C",class:"btn-danger btn-remove"},{name:"\u2190",class:"btn-danger btn-remove"},{name:"\xb1",class:"btn-danger btn-operation"},{name:"/",class:"btn-danger btn-operation"}],[{name:"7",class:"btn-danger btn-number"},{name:"8",class:"btn-danger btn-number"},{name:"9",class:"btn-danger btn-number"},{name:"*",class:"btn-danger btn-operation"}],[{name:"4",class:"btn-danger btn-number"},{name:"5",class:"btn-danger btn-number"},{name:"6",class:"btn-danger btn-number"},{name:"+",class:"btn-danger btn-operation"}],[{name:"1",class:"btn-danger btn-number"},{name:"2",class:"btn-danger btn-number"},{name:"3",class:"btn-danger btn-number"},{name:"-",class:"btn-danger btn-operation"}],[{name:".",class:"btn-danger btn-number"},{name:"0",class:"btn-danger btn-number"},{name:"=",class:"btn-danger btn-equals"}]],l=t(20),o=t(21),u=(t(15),t(16),t(2)),d=b||[];var m=function(){var n=Object(a.useState)(""),e=Object(i.a)(n,2),t=e[0],c=e[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),b=s[0],m=s[1],f=Object(a.useState)(""),j=Object(i.a)(f,2),g=j[0],p=j[1],h=Object(a.useState)(0),v=Object(i.a)(h,2),O=v[0],x=v[1],S=function(n){c(n&&"="===g?n:""),m(""),p(""),x(0)},N=function(){var n=parseFloat(t);if(0===O)return n;if("+"===g)return O+n;if("-"===g)return O-n;if("*"===g)return O*n;if("/"===g)return O/n;if("\u2190"===g||"!\u2190"===g){if("+"===b.slice(-2,-1))return O+n;if("-"===b.slice(-2,-1))return O-n;if("*"===b.slice(-2,-1))return O*n;if("/"===b.slice(-2,-1))return O/n}else if("="===g)return O},y=function(n){"+"===n||"-"===n||"*"===n||"/"===n?function(n){if(""===t&&"="!==g)"+"!==g&&"-"!==g&&"*"!==g&&"/"!==g&&"\u2190"!==g&&"!\u2190"!==g||""!==b&&m("".concat(b.slice(0,-3)," ").concat(n," ")),"\u2190"===g&&"!\u2190"===g||p(n);else{var e=N();x(e),c(""),p(n),m(""===t&&"="===g?"".concat(b," ").concat(n," "):""===b||"="===g?"".concat(t," ").concat(n," "):"".concat(b," ").concat(t," ").concat(n," "))}}(n):"C"===n?S():"\u2190"===n||"!\u2190"===n?"="!==g&&"!\u2190"!==g&&(""!==t?(p("\u2190"),c(t.slice(0,-1).toString())):p("!\u2190")):"\xb1"===n?""!==t&&c((-1*t).toString()):"="===n?function(){if("="!==g){if(m("".concat(b," ").concat(t," ")),""!==t)if("0"===t&&"/"===g)alert("You cannot divide by 0."),m(b.slice(0,-3)),c("");else{var n=N();(n+".").split(".")[1].length>3?c(n.toFixed(3).toString()):c(n.toString()),m(""),x(n)}else c(O.toString()),m("");p("=")}}():alert("The operation ".concat(n," is not currently supported."))},C=function(n){var e=n.target.value;e.match(/^(\d|\.)$/)?function(n){if("="===g)S(n);else{if("\u2190"===g||"!\u2190"===g){var e=b.slice(-2,-1);"+"!==e&&"-"!==e&&"*"!==e&&"/"!==e||p(e)}c("."===n?t+".":t+n)}}(e):y(e)};return Object(u.jsxs)(l.a,{className:"calculator-area mx-auto pt-3 mt-4",children:[Object(u.jsx)(l.a.Header,{className:"card-header",children:Object(u.jsxs)("div",{className:"screen-area p-1",children:[Object(u.jsx)("div",{className:"output-area h3",children:t||0}),Object(u.jsx)("div",{className:"computation-screen",children:b})]})}),Object(u.jsx)(l.a.Body,{className:"card-body pt-2",children:Object(u.jsx)("div",{className:"keypad-area",children:d.map((function(n,e){return Object(u.jsx)("div",{className:"keypad",children:n.map((function(n){return Object(u.jsx)(o.a,{onClick:function(n){return C(n)},className:n.class,value:n.name,children:n.name},n.name)}))},e)}))})})]})};var f=function(){return Object(u.jsx)("div",{className:"calculator",children:Object(u.jsx)(m,{})},m)},j=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(e){var t=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;t(n),a(n),c(n),r(n),s(n)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),j()}},[[18,1,2]]]);
//# sourceMappingURL=main.ab27e4ce.chunk.js.map
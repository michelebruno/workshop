(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{GCOq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var a=n("q1tI"),r=n.n(a);function o(e){var t=e.onNext,n=e.answers,o=(e.position,e.title),l=e.children,c=e.active,i=Object(a.useState)(!1),s=i[0],m=i[1];return r.a.createElement("div",{className:"question row border border-dark border-4 border-bottom-0 align-items-stretch"+(null!=c?c:"d-none")},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,o)),r.a.createElement("div",{className:"col-12 mt-auto"},r.a.createElement("div",{className:"row border-top"},!s&&n.map((function(e){var t=e.label,n=e.isTrue;return r.a.createElement("button",{className:"btn btn-primary border-4 border-start-0 border-end-0 border-top-0 border-dark answer col-12 col-md-6 px-5 py-4",key:t,onClick:function(){return m(n?"right":"wrong")}},t)})))),s&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-12 "},l),r.a.createElement("div",{className:"col-12 mt-auto border-bottom border-4 text-end "},r.a.createElement("button",{className:"btn btn-text",onClick:t},"Next"))))}var l=[{title:"How long does it take on average to read the term of use?",answers:[{label:"40 minutes",isTrue:!0},{label:"10 minutes",isTrue:!1},{label:"10 mi nutes",isTrue:!1},{label:"1 minutes",isTrue:!1}],children:r.a.createElement("span",null,"Ciao")}];function c(){var e=Object(a.useState)(0),t=e[0],n=e[1];function c(){n((function(e){return l.length<=e?0:e+1}))}return r.a.createElement("main",{className:"container d-flex min-vh-100 align-items-center"},l.map((function(e,n){return r.a.createElement(o,Object.assign({key:e.title,active:n===t},e,{onNext:c}))})))}}}]);
//# sourceMappingURL=component---src-pages-quiz-js-9a74b082fbe0b802d14e.js.map
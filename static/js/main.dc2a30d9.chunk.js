(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(4),i=c.n(s),r=(c(10),c(0));function o(){return Object(r.jsx)("nav",{className:"cyan lighten-2",children:Object(r.jsxs)("div",{className:"nav-wrapper",children:[Object(r.jsx)("a",{href:"!#",className:"brand-logo",children:"React Movies"}),Object(r.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://github.com/Anton-Sidko/ReactMovies",children:"Repo"})})})]})})}function j(){return Object(r.jsx)("footer",{className:"page-footer cyan lighten-3",children:Object(r.jsx)("div",{className:"footer-copyright cyan lighten-3",children:Object(r.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(r.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/Anton-Sidko/ReactMovies",children:"Repo"})]})})})}var l=c(2),d=c(5);function h(e){var t=e.Title,c=e.Year,a=e.imdbID,n=e.Type,s=e.Poster;return Object(r.jsxs)("div",{id:a,className:"card movie",children:[Object(r.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:"N/A"!==s?Object(r.jsx)("img",{className:"activator",src:s,alt:""}):Object(r.jsx)("img",{className:"activator",src:"https://via.placeholder.com/300x450?text=".concat(t),alt:""})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:t}),Object(r.jsxs)("p",{children:[c," ",Object(r.jsx)("span",{className:"right",children:n})]})]})]})}function b(e){var t=e.movies,c=void 0===t?[]:t;return Object(r.jsx)("div",{className:"movie-list",children:c.length?c.map((function(e){return Object(r.jsx)(h,Object(d.a)({},e),e.imdbID)})):Object(r.jsx)("h4",{children:"Nothing found"})})}function m(){return Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"indeterminate"})})}var O=function(e){var t=e.searchMovies,c=void 0===t?Function.prototype:t,n=Object(a.useState)(""),s=Object(l.a)(n,2),i=s[0],o=s[1],j=Object(a.useState)("all"),d=Object(l.a)(j,2),h=d[0],b=d[1],m=function(e){""===i&&(o("iron man"),c("iron man",e.target.dataset.type)),b(e.target.dataset.type),c(i,e.target.dataset.type)};return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"row search-row",children:[Object(r.jsx)("div",{className:"input-field",children:Object(r.jsx)("input",{placeholder:"Search",type:"search",value:i,onChange:function(e){return o(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&c(i,h)}})}),Object(r.jsx)("button",{className:"btn right",onClick:function(){return c(i,h)},children:"Search"})]}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"all",onChange:m,checked:"all"===h}),Object(r.jsx)("span",{children:"All"})]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"movie",onChange:m,checked:"movie"===h}),Object(r.jsx)("span",{children:"Movies only"})]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"series",onChange:m,checked:"series"===h}),Object(r.jsx)("span",{children:"Series only"})]})]})]})},u="f02f5fdd";function p(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!0),i=Object(l.a)(s,2),o=i[0],j=i[1];Object(a.useEffect)((function(){fetch("https://www.omdbapi.com/?apikey=".concat(u,"&s=iron man")).then((function(e){return e.json()})).then((function(e){n(e.Search),j(!1)})).catch((function(e){console.error(e),j(!1)}))}),[]);return Object(r.jsxs)("main",{className:"container content",children:[Object(r.jsx)(O,{searchMovies:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";j(!0),fetch("https://www.omdbapi.com/?apikey=".concat(u,"&s=").concat(e).concat("all"!==t?"&type=".concat(t):"")).then((function(e){return e.json()})).then((function(e){n(e.Search),j(!1)}))}}),o?Object(r.jsx)(m,{}):Object(r.jsx)(b,{movies:c})]})}var x=function(){return Object(r.jsxs)(n.a.Fragment,{children:[Object(r.jsx)(o,{}),Object(r.jsx)(p,{}),Object(r.jsx)(j,{})]})};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.dc2a30d9.chunk.js.map
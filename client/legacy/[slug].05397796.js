import{a as t,b as s,c as n,d as a,i as r,s as e,e as i,S as o,g as c,f as u,t as f,m as h,h as l,j as p,k as m,l as d,o as v,q as x,r as j,D as y,n as b}from"./index.98e66264.js";import{_ as g}from"./slicedToArray.f13a096f.js";import{_ as T,a as k}from"./asyncToGenerator.b43cac7a.js";function H(t){var s,n,a,r,e,i,o=t[0].title+"",T=t[0].html+"";return document.title=s=t[0].title,{c:function(){n=c(),a=u("h1"),r=f(o),e=c(),i=u("div"),this.h()},l:function(t){n=h(t),a=l(t,"H1",{});var s=p(a);r=m(s,o),s.forEach(d),e=h(t),i=l(t,"DIV",{class:!0}),p(i).forEach(d),this.h()},h:function(){v(i,"class","content svelte-gnxal1")},m:function(t,s){x(t,n,s),x(t,a,s),j(a,r),x(t,e,s),x(t,i,s),i.innerHTML=T},p:function(t,n){var a=g(n,1)[0];1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&o!==(o=t[0].title+"")&&y(r,o),1&a&&T!==(T=t[0].html+"")&&(i.innerHTML=T)},i:b,o:b,d:function(t){t&&d(n),t&&d(a),t&&d(e),t&&d(i)}}}function q(t){return w.apply(this,arguments)}function w(){return(w=T(k.mark(function t(s){var n,a,r;return k.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.params,s.query,t.next=3,this.fetch("topics/".concat(n.slug,".json"));case 3:return a=t.sent,t.next=6,a.json();case 6:if(r=t.sent,200!==a.status){t.next=11;break}return t.abrupt("return",{post:r});case 11:this.error(a.status,r.message);case 12:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function D(t,s,n){var a=s.post;return t.$set=function(t){"post"in t&&n(0,a=t.post)},[a]}export default(function(c){function u(t){var o;return s(this,u),o=n(this,a(u).call(this)),r(i(o),t,D,H,e,{post:0}),o}return t(u,o),u}());export{q as preload};

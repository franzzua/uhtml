var uhtml=function(t){"use strict";const e=t=>document.createElementNS("http://www.w3.org/1999/xhtml",t),n=(t,e)=>("svg"===e?l:r)(t),r=t=>{const n=e("template");return n.innerHTML=t,n.content},l=t=>{const{content:n}=e("template"),r=e("div");r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+t+"</svg>";const{childNodes:l}=r.firstChild;let{length:o}=l;for(;o--;)n.appendChild(l[0]);return n};var o=document.importNode;const{create:c}=Object,{forEach:s}=[],a=new WeakMap,u=new WeakMap,i={what:null};function h(t){this[t.getAttribute("name")]=t}function m(t){const e=[t[0]];for(let n=1,{length:r}=arguments;n<r;n++)e.push(arguments[n],t[n]);const r=n(e.join(""),""+this);return u.set(t,r),r}return t.html=function(t){return u.get(t)||m.apply("html",arguments)},t.render=(t,e)=>{let n=a.get(t)||i;if(n.what!==e){t.textContent="",t.appendChild(o.call(t.ownerDocument,e,!0));const r=c(null);s.call(t.querySelectorAll("[name]"),h,r),a.set(t,n={what:e,names:r})}return n.names},t.svg=function(t){return u.get(t)||m.apply("svg",arguments)},t}({});

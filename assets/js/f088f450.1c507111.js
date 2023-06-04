"use strict";(self.webpackChunkcodeshift_community=self.webpackChunkcodeshift_community||[]).push([[9882],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,f=u["".concat(c,".").concat(d)]||u[d]||l[d]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var m={};for(var c in t)hasOwnProperty.call(t,c)&&(m[c]=t[c]);m.originalType=e,m[u]="string"==typeof e?e:o,a[1]=m;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5898:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return l},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return s}});var n=r(3117),o=(r(7294),r(3905));const i={id:"memoize-one",title:"memoize-one",slug:"/registry/memoize-one",keywords:["codemods","memoize-one","code evolution","code migration","package updates","automated code updates"],description:"Explore codemods for memoize-one."},a=void 0,m={unversionedId:"registry-generated/memoize-one",id:"registry-generated/memoize-one",title:"memoize-one",description:"Explore codemods for memoize-one.",source:"@site/docs/registry-generated/memoize-one.mdx",sourceDirName:"registry-generated",slug:"/registry/memoize-one",permalink:"/docs/registry/memoize-one",draft:!1,editUrl:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/edit/main/website/docs/registry-generated/memoize-one.mdx",tags:[],version:"current",frontMatter:{id:"memoize-one",title:"memoize-one",slug:"/registry/memoize-one",keywords:["codemods","memoize-one","code evolution","code migration","package updates","automated code updates"],description:"Explore codemods for memoize-one."},sidebar:"registry",previous:{title:"javascript",permalink:"/docs/registry/javascript"},next:{title:"react",permalink:"/docs/registry/react"}},c={},s=[{value:"Transforms",id:"transforms",level:2},{value:"5.0.0",id:"500",level:3}],p={toc:s},u="wrapper";function l(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Target package(s):")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/memoize-one"},"memoize-one"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Maintainers:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/alexreardon"},"alexreardon"))),(0,o.kt)("h2",{id:"transforms"},"Transforms"),(0,o.kt)("h3",{id:"500"},"5.0.0"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/tree/main/community/memoize-one"},"Source")," | ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/issues/new?title=memoize-one@5.0.0"},"Report an issue")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Usage")," ",(0,o.kt)("inlineCode",{parentName:"p"},"$ codeshift --packages memoize-one@5.0.0 path/to/source"))),(0,o.kt)("p",null,"A codemod which facilitates the migration of the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/memoize-one"},"memoize-one")," package to version 5.0.0."))}l.isMDXComponent=!0}}]);
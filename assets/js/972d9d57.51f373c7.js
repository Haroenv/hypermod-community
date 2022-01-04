(self.webpackChunkcodeshift_community=self.webpackChunkcodeshift_community||[]).push([[937],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return p}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=i.createContext({}),c=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return i.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=o,h=m["".concat(d,".").concat(p)]||m[p]||u[p]||r;return n?i.createElement(h,a(a({ref:t},l),{},{components:n})):i.createElement(h,a({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},927:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return d},default:function(){return l}});var i=n(2122),o=n(9756),r=(n(7294),n(3905)),a={id:"introduction",title:"Introduction",slug:"/"},s={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"CodeshiftCommunity is a community-owned global registry and documentation hub for codemods.",source:"@site/docs/introduction.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/edit/main/website/docs/introduction.mdx",version:"current",frontMatter:{id:"introduction",title:"Introduction",slug:"/"},sidebar:"docs",next:{title:"Guiding principles",permalink:"/docs/guiding-principles"}},d=[{value:"Why?",id:"why",children:[{value:"Fragmentation in the ecosystem",id:"fragmentation-in-the-ecosystem",children:[]},{value:"Package adoption &amp; upgrade pain",id:"package-adoption--upgrade-pain",children:[]},{value:"Lack of documentation &amp; familiarity",id:"lack-of-documentation--familiarity",children:[]}]},{value:"How do we solve these problems?",id:"how-do-we-solve-these-problems",children:[{value:"A centralized registry",id:"a-centralized-registry",children:[]},{value:"Rich documentation",id:"rich-documentation",children:[]}]},{value:"Getting started",id:"getting-started",children:[]}],c={toc:d};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"CodeshiftCommunity is a community-owned global registry and documentation hub for codemods.\nThis project provides library users & maintainers with facilities to help ",(0,r.kt)("a",{parentName:"p",href:"authoring"},"write"),", ",(0,r.kt)("a",{parentName:"p",href:"testing"},"test"),", ",(0,r.kt)("a",{parentName:"p",href:"contribution"},"publish")," and ",(0,r.kt)("a",{parentName:"p",href:"consuming"},"consume")," codemods in a structured and familiar way."),(0,r.kt)("h2",{id:"why"},"Why?"),(0,r.kt)("p",null,"Our overarching goal is to build a community around codemods to help normalize both authoring and consuming them, turning it into a standard development practice throughout the JavaScript ecosystem."),(0,r.kt)("p",null,"We believe this can be achieved by making the right support, documentation and tooling available to everyone."),(0,r.kt)("p",null,"To do this CodeshiftCommunity aims to solve three main problems."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Fragmentation of how codemods are written & distributed in the ecosystem"),(0,r.kt)("li",{parentName:"ol"},"Package adoption & upgrade pain"),(0,r.kt)("li",{parentName:"ol"},"Lack of documentation & familiarity")),(0,r.kt)("h3",{id:"fragmentation-in-the-ecosystem"},"Fragmentation in the ecosystem"),(0,r.kt)("p",null,"Popular libraries in the ecosystem such as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/reactjs/react-codemod"},"React"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mui-org/material-ui/tree/master/packages/material-ui-codemod"},"material-ui")," and ",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/advanced-features/codemods"},"next.js"),", all provide their own take on codemods, CLI and distribution services.\nThese services are varied from one another and generally quite hidden from the average user.\nProviding this as an additional service to aid in upgrading their libraries is a great thing, but comes with significant overhead to those projects."),(0,r.kt)("h3",{id:"package-adoption--upgrade-pain"},"Package adoption & upgrade pain"),(0,r.kt)("p",null,"When publishing packages via semver, it is too easy to push the upgrade pain onto users.\nUsers will likely then have to go digging in either your changelog or (worst case) your code to find out how to safely migrate to the latest and greatest.\nOften the solution is just to avoid upgrading entirely or migrate to a new library."),(0,r.kt)("h3",{id:"lack-of-documentation--familiarity"},"Lack of documentation & familiarity"),(0,r.kt)("p",null,"Writing codemods often feels like tribal knowledge, there might be only a handfull of people in your company that have written one or know how to write one. This needs to change!"),(0,r.kt)("h2",{id:"how-do-we-solve-these-problems"},"How do we solve these problems?"),(0,r.kt)("h3",{id:"a-centralized-registry"},"A centralized registry"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/DefinitelyTyped/DefinitelyTyped"},"DefinitelyTyped")," is a great example of how consolidating type definitions under the one roof builds familiarity and consistency for the entire typescript user base."),(0,r.kt)("p",null,"By consolidating codemods in the same way, the ecosystem can benefit from:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A single place to find, use and publish codemods"),(0,r.kt)("li",{parentName:"ol"},"Community support & bug fixes"),(0,r.kt)("li",{parentName:"ol"},"Countless examples")),(0,r.kt)("p",null,"CodeshiftCommunity provides a codemod registry that hosts and automatically publishes codemods for you under the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/tree/main/community"},"/community directory"),".\nThe community directory organizes codemods by package name and version. They are then published to npm as modules that can be retrospectivally patched or improved.\nThis ensures that users running codemods are always getting the latest and greatest version of your codemod."),(0,r.kt)("h3",{id:"rich-documentation"},"Rich documentation"),(0,r.kt)("p",null,'CodeshiftCommunity is a documentation hub first, by provding guides, recipes and reference material we aim demystify codemods, which are often seen as "arcane knowledge".'),(0,r.kt)("p",null,'With the right documentation and guidance in place, it will be significantly easier to normalize codemods and reduce their learning curve.\nWe want to remove the stigma that "codemods are hard" or "they take a long time to write" and get everyone into the healthy practice of writing them.\nMeaning that more people can contribute to writing codemods and ultimately improve the javascript ecosystem\'s adoption problem.'),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/your-first-codemod"},"Your first codemod")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"consuming"},"Consuming codemods")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"authoring"},"Writing codemods")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"testing"},"Testing codemods")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"your-first-codemod"},"Learning resources")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"contribution"},"Publishing & contribution"))))}l.isMDXComponent=!0}}]);
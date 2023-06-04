"use strict";(self.webpackChunkcodeshift_community=self.webpackChunkcodeshift_community||[]).push([[9832],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4093:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var a=n(3117),r=(n(7294),n(3905));const i={id:"external-packages",title:"External Packages",slug:"/external-packages",description:"Learn how to create stand-alone codeshift packages. This page covers the process of packaging your codemods as standalone npm packages, including tips and best practices for creating packages that are easy to use and maintain.",keywords:["codeshift","package","creation","npm","tips","best practices"]},o=void 0,s={unversionedId:"external-packages",id:"external-packages",title:"External Packages",description:"Learn how to create stand-alone codeshift packages. This page covers the process of packaging your codemods as standalone npm packages, including tips and best practices for creating packages that are easy to use and maintain.",source:"@site/docs/external-packages.mdx",sourceDirName:".",slug:"/external-packages",permalink:"/docs/external-packages",draft:!1,editUrl:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/edit/main/website/docs/external-packages.mdx",tags:[],version:"current",frontMatter:{id:"external-packages",title:"External Packages",slug:"/external-packages",description:"Learn how to create stand-alone codeshift packages. This page covers the process of packaging your codemods as standalone npm packages, including tips and best practices for creating packages that are easy to use and maintain.",keywords:["codeshift","package","creation","npm","tips","best practices"]},sidebar:"docs",previous:{title:"Contribution",permalink:"/docs/contribution"},next:{title:"Your first codemod",permalink:"/docs/your-first-codemod"}},c={},l=[{value:"Initializing",id:"initializing",level:2},{value:"File structure",id:"file-structure",level:3},{value:"Testing",id:"testing",level:2},{value:"Publishing",id:"publishing",level:2},{value:"Examples",id:"examples",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page covers creation of stand-alone codeshift packages and is for authors who want:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Control over where and how your codeshift package is hosted"),(0,r.kt)("li",{parentName:"ul"},"Control over tooling, dependencies and techstack"),(0,r.kt)("li",{parentName:"ul"},"The option to create completely generic codemods that don't target specific packages")),(0,r.kt)("p",null,"If you prefer to not to maintain a separate package, please see the ",(0,r.kt)("a",{parentName:"p",href:"authoring"},"Authoring guide")," for other options."),(0,r.kt)("h2",{id:"initializing"},"Initializing"),(0,r.kt)("p",null,"To create a standalone codeshift package automatically, install the install and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"codeshift/cli"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"npm:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install -g @codeshift/cli")," or"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"yarn:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn global add @codeshift/cli"))),(0,r.kt)("p",null,'Then given you want to initialize a new project called "foobar", with a codemod targeting version ',(0,r.kt)("inlineCode",{parentName:"p"},"10.0.0")," you can run the following command:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'$ codeshift init --package-name="foobar" --version="10.0.0" ~/Desktop')),(0,r.kt)("p",null,'This will create a new directory called "foobar" in the ',(0,r.kt)("inlineCode",{parentName:"p"},"~/Desktop")," directory."),(0,r.kt)("p",null,"You can then also initialize subsequent transforms and presets by running the command again:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'$ codeshift init --package-name="foobar" --preset="sort-imports" ~/Desktop')),(0,r.kt)("h3",{id:"file-structure"},"File structure"),(0,r.kt)("p",null,"The file structure of your new codeshift package will look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"react-cool-library/\n  codeshift.config.js // main entrypoint containing configuration and references to your transforms\n  package.json\n  tsconfig.json\n  jest.config.js\n  codemods/\n    10.0.0/ // semver version\n      transform.ts // main logic (should contain a transformer)\n      transform.spec.ts // main tests\n      motions/ // utility directory\n")),(0,r.kt)("h2",{id:"testing"},"Testing"),(0,r.kt)("p",null,"Now to test your transformer, run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn test --watch"),"."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"testing"},"Testing guide")," for help getting started with unit tests."),(0,r.kt)("h2",{id:"publishing"},"Publishing"),(0,r.kt)("p",null,"Since your new codeshift package can simply be treated as an NPM package you can simply run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm version [patch\\minor\\major]")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"npm publish"),"."),(0,r.kt)("p",null,"Your package will now be accessible via the ",(0,r.kt)("inlineCode",{parentName:"p"},"codeshift/cli"),". Refer to the ",(0,r.kt)("a",{parentName:"p",href:"consuming"},"Consuming guide")," for information about how to run your new codemods."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Here are some helpful example of this setup working in the wild:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/atlassian-labs/compiled/tree/master/packages/codemods"},"Compiled codemods")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/webdriverio/codemod"},"Webdriver.io codemods"))))}d.isMDXComponent=!0}}]);
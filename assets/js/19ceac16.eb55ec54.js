"use strict";(self.webpackChunkcodeshift_community=self.webpackChunkcodeshift_community||[]).push([[8334],{3905:function(e,o,t){t.d(o,{Zo:function(){return u},kt:function(){return h}});var n=t(7294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),m=function(e){var o=n.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},u=function(e){var o=m(e.components);return n.createElement(l.Provider,{value:o},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},c=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=m(t),c=r,h=d["".concat(l,".").concat(c)]||d[c]||p[c]||a;return t?n.createElement(h,i(i({ref:o},u),{},{components:t})):n.createElement(h,i({ref:o},u))}));function h(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=c;var s={};for(var l in o)hasOwnProperty.call(o,l)&&(s[l]=o[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var m=2;m<a;m++)i[m]=t[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9615:function(e,o,t){t.r(o),t.d(o,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return m}});var n=t(3117),r=(t(7294),t(3905));const a={id:"when-not-to-codemod",title:"When not to codemod",slug:"/when-not-to-codemod"},i=void 0,s={unversionedId:"guides/when-not-to-codemod",id:"guides/when-not-to-codemod",title:"When not to codemod",description:"Unfortunately Codemods aren't the solution to every problem, so as an author you have to weigh-up whether it's feasible before investing time into writing one.",source:"@site/docs/guides/when-not-to-codemod.mdx",sourceDirName:"guides",slug:"/when-not-to-codemod",permalink:"/docs/when-not-to-codemod",draft:!1,editUrl:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/edit/main/website/docs/guides/when-not-to-codemod.mdx",tags:[],version:"current",frontMatter:{id:"when-not-to-codemod",title:"When not to codemod",slug:"/when-not-to-codemod"},sidebar:"docs",previous:{title:"Understanding ASTs",permalink:"/docs/understanding-asts"},next:{title:"Prompting for human input",permalink:"/docs/prompting-for-human-input"}},l={},m=[{value:"When a codemod doesn&#39;t make sense?",id:"when-a-codemod-doesnt-make-sense",level:2},{value:"API / feature removal",id:"api--feature-removal",level:3},{value:"There&#39;s too much human intervention required.",id:"theres-too-much-human-intervention-required",level:3},{value:"Changes that need an awareness of runtime usage",id:"changes-that-need-an-awareness-of-runtime-usage",level:3},{value:"Indirection",id:"indirection",level:3},{value:"Usage paradigm shifts where the old paradigm does not have a 1:1 in the new paradigm",id:"usage-paradigm-shifts-where-the-old-paradigm-does-not-have-a-11-in-the-new-paradigm",level:3},{value:"Consumers need to provide more information than they did before",id:"consumers-need-to-provide-more-information-than-they-did-before",level:3},{value:"What to do when a codemod isn&#39;t possible?",id:"what-to-do-when-a-codemod-isnt-possible",level:2},{value:"Prompt for user input",id:"prompt-for-user-input",level:3},{value:"Aliasing",id:"aliasing",level:3}],u={toc:m},d="wrapper";function p(e){let{components:o,...t}=e;return(0,r.kt)(d,(0,n.Z)({},u,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Unfortunately Codemods aren't the solution to every problem, so as an author you have to weigh-up whether it's feasible before investing time into writing one."),(0,r.kt)("p",null,"Here is a list of some use-cases that are not possible or extremely hard to codemod and some possible alternatives."),(0,r.kt)("h2",{id:"when-a-codemod-doesnt-make-sense"},"When a codemod doesn't make sense?"),(0,r.kt)("h3",{id:"api--feature-removal"},"API / feature removal"),(0,r.kt)("p",null,"When a part of your API has been removed without an alternative"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { foo, bar, DEPRECATED_BAZ } from 'my-module';\n\nconsole.log(DEPRECATED_BAZ());\n")),(0,r.kt)("p",null,"In this case a codemod to remove ",(0,r.kt)("inlineCode",{parentName:"p"},"DEPRECATED_BAZ")," will lead to the following error"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"-import { foo, bar, DEPRECATED_BAZ} from 'my-module';\n+import { foo, bar } from 'my-module';\n\nconsole.log(DEPRECATED_BAZ()); // \ud83d\udca5 Uncaught ReferenceError: DEPRECATED_BAZ is not defined\n")),(0,r.kt)("h3",{id:"theres-too-much-human-intervention-required"},"There's too much human intervention required."),(0,r.kt)("p",null,"Sometimes a change simply requires too much human intervention. These are usually cases where there might be implicit side-effects to your changes and you cannot write a codemod that will confidently get you from A-B."),(0,r.kt)("p",null,"For example, consider moving from React class components to a hooks based function component. Changes in the React API might have implicit differences that all need to be accounted for. And moving blocks of logic from one to the other might seem possible at first but will completely become over complicated and not worth your time."),(0,r.kt)("h3",{id:"changes-that-need-an-awareness-of-runtime-usage"},"Changes that need an awareness of runtime usage"),(0,r.kt)("p",null,"For example: When you need the full runtime result of a React tree"),(0,r.kt)("h3",{id:"indirection"},"Indirection"),(0,r.kt)("p",null,"Indirection is one of the biggest hurdles codemods have to overcome.\nAnytime we run into indirection, it is harder to statically analyse how a piece of code is being used and have to take different approaches to work around it."),(0,r.kt)("p",null,"Indirection as several forms and can include working across module boundaries, using object spreading, dependency injection and so on. Keep an eye out for these cases."),(0,r.kt)("p",null,"For example, consider removing ",(0,r.kt)("inlineCode",{parentName:"p"},"DEPRECATED_BAZ")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"my-module")," when it's imported and used like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// src/utils/my-module.js\nexport {\n  DEPRECATED_BAZ: 'DEPRECATED_BAZ',\n  foo: () => 'hello',\n};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// src/components/App.js\nimport React from 'react';\nimport * as utils from '../utils/my-module';\n\nconst App = props => {\n  return <div {...props} {...utils} />;\n};\n")),(0,r.kt)("p",null,'In this case, because we\'re using "rest" in our import statement and then "spreading" it onto our component, we\'re not able to guarantee that you\'ll be able to safely remove all usages of the ',(0,r.kt)("inlineCode",{parentName:"p"},"DEPRECATED_BAZ")," function."),(0,r.kt)("h3",{id:"usage-paradigm-shifts-where-the-old-paradigm-does-not-have-a-11-in-the-new-paradigm"},"Usage paradigm shifts where the old paradigm does not have a 1:1 in the new paradigm"),(0,r.kt)("p",null,"Sometimes changes between package versions don't have a clear 1:1 mapping. Say in the previous version of our package you solved a problem with one approach and decided that in the new version of your package an entirely new architecture is required to solve that problem holistically. Resulting in a change so different from the original that there's no clear 1:1 mapping."),(0,r.kt)("h3",{id:"consumers-need-to-provide-more-information-than-they-did-before"},"Consumers need to provide more information than they did before"),(0,r.kt)("p",null,"In some cases, you might need to ask your consumer to provide more information to your API than you were asking for prior."),(0,r.kt)("p",null,"For example when a component now requires a new prop to function properly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport MyComponent from '../utils/my-module';\n\nconst App = props => {\n  return <div {...props} securityToken=\"???\" />;\n};\n")),(0,r.kt)("h2",{id:"what-to-do-when-a-codemod-isnt-possible"},"What to do when a codemod isn't possible?"),(0,r.kt)("h3",{id:"prompt-for-user-input"},"Prompt for user input"),(0,r.kt)("p",null,"In most cases, we recommend that you aim to do as much of the work as possible, right up until you can't reasonably to anymore. Then prompt users for their intervention."),(0,r.kt)("p",null,"Let's use our previous scenario as an example. Say your component now requires an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"securityToken")," prop to function safely, but you need a user to actually to the work to first get the token and then safely add it to your file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport MyComponent from '../utils/my-module';\n\nconst App = props => {\n  return <div {...props} securityToken=\"???\" />;\n};\n")),(0,r.kt)("p",null,"This is a great candidate for prompting for user input. Whenever you come across a scenario like this, we recommend leaving comments like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"import React from 'react';\nimport MyComponent from '../utils/my-module';\n\n+/** TODO (Codemod generated): Please provide a security token here */\nconst App = props => {\n  return <div {...props} securityToken=\"???\" />;\n};\n")),(0,r.kt)("p",null,"For more information on how to write a transform that does this, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/prompting-for-human-input"},"prompting for human input guide"),"."),(0,r.kt)("h3",{id:"aliasing"},"Aliasing"),(0,r.kt)("p",null,'You might come across the case where an "ideal" solution is too complex or too full of edge cases to do reasonably. When this happens, consider looking for a less than ideal but working solution.'),(0,r.kt)("p",null,"Consider the relatively trivial scenario of renaming an import:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"+import { Foo, Baz } from 'my-module';\n-import { Foo, Bar } from 'my-module';\n\n+console.log(Baz);\n-console.log(Bar);\n")),(0,r.kt)("p",null,"At first you might think it's a good idea to simply rename the import and look for all references of that import in your code.\nBut what happens when your import can be used in many different contexts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"+import { Foo, Baz } from 'my-module';\n-import { Foo, Bar } from 'my-module';\n\n+console.log(Baz);\n-console.log(Bar);\n\nconst App = props => {\n+ return <Bar {...props} />;\n- return <Baz {...props} />;\n};\n")),(0,r.kt)("p",null,"You now have to expand your transform to not only look for ",(0,r.kt)("inlineCode",{parentName:"p"},"Identifiers")," with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"Baz")," but also ",(0,r.kt)("inlineCode",{parentName:"p"},"JsxExpressions")," and maybe more?"),(0,r.kt)("p",null,"What if we could side-step that entire part of the transform and simply alias the import instead?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"+import { Foo, Baz as Bar } from 'my-module';\n-import { Foo, Bar } from 'my-module';\n\nconsole.log(Bar);\n\nconst App = props => {\n  return <Bar {...props} />;\n};\n")),(0,r.kt)("p",null,"Although you might see this result as less than ideal, since the logic still refers to the old name. It's still a great solution to the problem because we now have a codemod that is a lot simpler (because we can get rid of half of the find and replace logic) and safer (because it will always work regardless of the usage).\nKeep this in mind, next time you're running into countless edge-cases."))}p.isMDXComponent=!0}}]);
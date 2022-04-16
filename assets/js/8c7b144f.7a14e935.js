"use strict";(self.webpackChunkcodeshift_community=self.webpackChunkcodeshift_community||[]).push([[8317],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),l=p(r),f=o,d=l["".concat(c,".").concat(f)]||l[f]||m[f]||i;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=l;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},2663:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return m}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),s=["components"],a={id:"motions",title:"Motions",slug:"/motions"},c=void 0,p={unversionedId:"motions",id:"motions",title:"Motions",description:"A motion (aka migration) is what we call specific actions performed within a codemod. For example, updateBorderWidth or removeDeprecatedProps.",source:"@site/docs/motions.mdx",sourceDirName:".",slug:"/motions",permalink:"/docs/motions",editUrl:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/edit/main/website/docs/motions.mdx",tags:[],version:"current",frontMatter:{id:"motions",title:"Motions",slug:"/motions"},sidebar:"docs",previous:{title:"Testing",permalink:"/docs/testing"},next:{title:"Contribution",permalink:"/docs/contribution"}},u={},m=[],l={toc:m};function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A motion (aka migration) is what we call specific actions performed within a codemod. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"updateBorderWidth")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"removeDeprecatedProps"),".\nThey can be simply thought of as utility functions that are responsible for a single step within a complex codemod.\nIt is not required to follow this pattern but they are highly recommended as a helpful design pattern to isolate more complicated parts of your codemod into discrete pieces."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"function removeDeprecatedProps(j, source) {\n  // Some logic here\n}\n")),(0,i.kt)("p",null,"Motions can then be applied from the main transform, just like any other function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { hasImportDeclaration } from '@codeshift/utils';\nimport removeDeprecatedProps from './motions/remove-deprecated-props';\nimport restructureImports from './motions/restructure-imports';\n\nexport default function transformer(file, { jscodeshift: j }, options) {\n  const source = j(file.source);\n\n  // Execute individual motions\n  removeDeprecatedProps(j, source);\n  restructureImports(j, source);\n\n  return source.toSource(options.printOptions); // Writes modified AST to file\n}\n")),(0,i.kt)("p",null,"Each motion receives a reference to the AST (",(0,i.kt)("inlineCode",{parentName:"p"},"source"),") which it can then manipulate as required since the source variable is passed by reference."),(0,i.kt)("p",null,"Alternatively, you can use the utility function ",(0,i.kt)("a",{parentName:"p",href:"./utils#applymotionsj-source-motions"},"applyMotions")," to run motions in sequence."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { applyMotions } from '@codeshift/utils';\nimport removeDeprecatedProps from './motions/remove-deprecated-props';\nimport restructureImports from './motions/restructure-imports';\n\nexport default function transformer(file, { jscodeshift: j }, options) {\n  const source = j(file.source);\n\n  // Execute a series of motions in order\n  applyMotions(j, source, [removeDeprecatedProps, restructureImports]);\n\n  return source.toSource(options.printOptions);\n}\n")))}f.isMDXComponent=!0}}]);
(self.webpackChunkcodeshift_community=self.webpackChunkcodeshift_community||[]).push([[196],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9763:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={id:"configuration",title:"Configuration",slug:"/configuration"},s={unversionedId:"configuration",id:"configuration",isDocsHomePage:!1,title:"Configuration",description:"All codeshift packages must be coupled with a codeshift.config.js file.",source:"@site/docs/configuration.mdx",sourceDirName:".",slug:"/configuration",permalink:"/docs/configuration",editUrl:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/edit/main/website/docs/configuration.mdx",version:"current",frontMatter:{id:"configuration",title:"Configuration",slug:"/configuration"},sidebar:"docs",previous:{title:"Consuming",permalink:"/docs/consuming"},next:{title:"Testing",permalink:"/docs/testing"}},c=[{value:"Properties",id:"properties",children:[{value:"<code>maintainers</code>",id:"maintainers",children:[]},{value:"<code>description</code>",id:"description",children:[]},{value:"<code>transforms</code>",id:"transforms",children:[]},{value:"<code>presets</code>",id:"presets",children:[]},{value:"<code>targets</code>",id:"targets",children:[]}]}],l={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"All codeshift packages must be coupled with a ",(0,i.kt)("inlineCode",{parentName:"p"},"codeshift.config.js")," file.\nThis file acts as the entry-point of your codeshift package and is responsible for holding all of the relevant metadata, as well as paths to the transformer functions themselves."),(0,i.kt)("p",null,"They typically look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"module.exports = {\n  maintainers: ['danieldelcore'],\n  description: 'Codemods for the foobar package',\n  targets: ['foobar'],\n  transforms: {\n    '18.0.0': require.resolve('./18.0.0/transform'),\n    '19.0.0': require.resolve('./19.0.0/transform'),\n  },\n  presets: {\n    'sort-imports': require.resolve('./sort-imports/transform'),\n  },\n};\n")),(0,i.kt)("p",null,"These files should always be in the root directory of your package to ensure ",(0,i.kt)("inlineCode",{parentName:"p"},"codeshift-cli")," has access to it.\nIt does so by pulling your package directly from NPM and searching the root directory, which by extension means you should always ensure that the config and the transform files are not ignored by npm."),(0,i.kt)("p",null,"Config files can be written in either JavaScript or TypeScript, depending on your preference."),(0,i.kt)("p",null,"To check if your config is valid, you can use ",(0,i.kt)("a",{parentName:"p",href:"cli#validate"},"the validate command"),"."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"maintainers"},(0,i.kt)("inlineCode",{parentName:"h3"},"maintainers")),(0,i.kt)("p",null,"Github usernames of the people that maintain the package, they will be notified on PRs etc."),(0,i.kt)("h3",{id:"description"},(0,i.kt)("inlineCode",{parentName:"h3"},"description")),(0,i.kt)("p",null,"A description of the package and its intended usage"),(0,i.kt)("h3",{id:"transforms"},(0,i.kt)("inlineCode",{parentName:"h3"},"transforms")),(0,i.kt)("p",null,"A key value pair of transforms organized by semver-compatible versions."),(0,i.kt)("p",null,"For more information see ",(0,i.kt)("a",{parentName:"p",href:"guiding-principles#codemods-should-target-a-version-of-package"},"Guiding Principles"),"."),(0,i.kt)("h3",{id:"presets"},(0,i.kt)("inlineCode",{parentName:"h3"},"presets")),(0,i.kt)("p",null,"A key value pair of presets organized by kebab case identifiers."),(0,i.kt)("p",null,"Presets are intended to act as a way to share generic codemods, that are either completely generic or compliment the target package but are not version specific."),(0,i.kt)("p",null,"Some examples include: ",(0,i.kt)("inlineCode",{parentName:"p"},"sort-imports"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"format-props"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"remove-comments"),", etc."),(0,i.kt)("h3",{id:"targets"},(0,i.kt)("inlineCode",{parentName:"h3"},"targets")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Experimental")),(0,i.kt)("p",null,"Targets list the packages that the codemod package targets.\nThis is useful for codeshift packages that have codemods targeting multiple related packages at the same time, such as packages from a monorepo."),(0,i.kt)("p",null,"For example: ",(0,i.kt)("inlineCode",{parentName:"p"},"targets: ['@foo/bar', '@foo/baz']")))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkcodeshift_community=self.webpackChunkcodeshift_community||[]).push([[353],{3905:function(e,o,n){n.d(o,{Zo:function(){return l},kt:function(){return f}});var t=n(7294);function a(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function i(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?i(Object(n),!0).forEach((function(o){a(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function s(e,o){if(null==e)return{};var n,t,a=function(e,o){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],o.indexOf(n)>=0||(a[n]=e[n]);return a}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),p=function(e){var o=t.useContext(c),n=o;return e&&(n="function"==typeof e?e(o):r(r({},o),e)),n},l=function(e){var o=p(e.components);return t.createElement(c.Provider,{value:o},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},m=t.forwardRef((function(e,o){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?t.createElement(f,r(r({ref:o},l),{},{components:n})):t.createElement(f,r({ref:o},l))}));function f(e,o){var n=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var c in o)hasOwnProperty.call(o,c)&&(s[c]=o[c]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1895:function(e,o,n){n.r(o),n.d(o,{assets:function(){return c},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var t=n(3117),a=(n(7294),n(3905));const i={id:"monorepos",title:"Integrating with monorepos",slug:"/monorepos",description:"Learn about monorepos and how they can be used with codeshift. This page covers the benefits of using a monorepo for your codebase, including improved organization, collaboration, and scalability. We'll also discuss how to use codeshift to automatically refactor code in a monorepo and the best practices for working with monorepos and codemods.",keywords:["monorepos","workspaces","lerna","yarn","scalability","packages"]},r=void 0,s={unversionedId:"guides/monorepos",id:"guides/monorepos",title:"Integrating with monorepos",description:"Learn about monorepos and how they can be used with codeshift. This page covers the benefits of using a monorepo for your codebase, including improved organization, collaboration, and scalability. We'll also discuss how to use codeshift to automatically refactor code in a monorepo and the best practices for working with monorepos and codemods.",source:"@site/docs/guides/monorepos.mdx",sourceDirName:"guides",slug:"/monorepos",permalink:"/docs/monorepos",draft:!1,editUrl:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/edit/main/website/docs/guides/monorepos.mdx",tags:[],version:"current",frontMatter:{id:"monorepos",title:"Integrating with monorepos",slug:"/monorepos",description:"Learn about monorepos and how they can be used with codeshift. This page covers the benefits of using a monorepo for your codebase, including improved organization, collaboration, and scalability. We'll also discuss how to use codeshift to automatically refactor code in a monorepo and the best practices for working with monorepos and codemods.",keywords:["monorepos","workspaces","lerna","yarn","scalability","packages"]},sidebar:"docs",previous:{title:"CSS codemods via PostCSS",permalink:"/docs/css-codemods"},next:{title:"Import manipulation",permalink:"/docs/import-manipulation"}},c={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Initializing",id:"initializing",level:2},{value:"Development",id:"development",level:2},{value:"Publishing",id:"publishing",level:2},{value:"Running",id:"running",level:2},{value:"Examples",id:"examples",level:2}],l={toc:p},d="wrapper";function u(e){let{components:o,...n}=e;return(0,a.kt)(d,(0,t.Z)({},l,n,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Codeshift is specifically designed to play nicely with monorepos (AKA multi-package repositories, multi-project repositories, or monolithic repositories) such as ",(0,a.kt)("a",{parentName:"p",href:"https://turborepo.org/"},"Turborepo"),", ",(0,a.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/lang/en/docs/workspaces/"},"Yarn"),", ",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v7/using-npm/workspaces/"},"npm")," and ",(0,a.kt)("a",{parentName:"p",href:"https://pnpm.io/workspaces"},"pnpm")," workspaces and ",(0,a.kt)("a",{parentName:"p",href:"https://lerna.js.org/"},"Lerna"),"."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Configuring Codeshift in a monorepo can be done in the exact same way as ",(0,a.kt)("a",{parentName:"p",href:"/docs/authoring#2-add-codeshift-to-an-existing-package"},"any existing npm package"),", simply by adding ",(0,a.kt)("inlineCode",{parentName:"p"},"codeshift.config.js")," files and codemods to your packages."),(0,a.kt)("p",null,"Given you are using a workspace-based monorepo, it's recommended to co-locate codemods with your package source files so they can be published as part of the package, for use by both external and internal users."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"packages/\n    button/\n+        codemods/\n+          1.0.0/\n+           transform.ts\n+           transform.spec.ts\n+          2.0.0/\n+          codeshift.config.js\n        src/\n            ...\n        package.json\n        rollup.config.json\n        jest.config.js\n    dialog/\n    modal/\n\npackage.json\n")),(0,a.kt)("p",null,"Codeshift config files can be located in either the root, ",(0,a.kt)("inlineCode",{parentName:"p"},"/src")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"/codemods")," directory of a package."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"packages/\n    button/\n+        codemods/\n+          1.0.0/\n+          2.0.0/\n        src/\n            ...\n        package.json\n        rollup.config.json\n        jest.config.js\n+       codeshift.config.js\n    dialog/\n    modal/\n\npackage.json\n")),(0,a.kt)("p",null,"The structure or use of the ",(0,a.kt)("inlineCode",{parentName:"p"},"/codemods")," directory is entirely up to you. Codemods can be located anywhere in the package as long as the config file correctly\npoints to them."),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/docs/configuration"},"configuration guide")," for help writing config files."),(0,a.kt)("h2",{id:"initializing"},"Initializing"),(0,a.kt)("p",null,"Codeshift provides a CLI to quickly codegen a working codemod package around your existing source files. To do so, run ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--config-only")," flag,\nwhich will output a bare-bones configuration. If you provide a ",(0,a.kt)("inlineCode",{parentName:"p"},"--transform")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"--preset")," it will also generate empty transform files in addition."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ codeshift init --config-only --transform 10.0.0 --preset foobar packages/my-package")),(0,a.kt)("p",null,"(Note: this script assumes you have installed ",(0,a.kt)("inlineCode",{parentName:"p"},"@codeshift/cli")," globally)"),(0,a.kt)("p",null,"The output of this command will give you a filestructure matching the above example."),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("p",null,"When writing codemod(s) it's recommended to use a ",(0,a.kt)("a",{parentName:"p",href:"/docs/testing"},"test-driven development approach")," before attempting to run on any real source code.\nOnce you're confident that your codemod works as expected, you will likely want to manually verify against real code.\nThat's where you can use the following command:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ codeshift path/to/test/code"),"."),(0,a.kt)("p",null,"When used at the root directory of your monorepo, the CLI will leverage your workspaces config located in your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," to determine which codemods in the monorepo it can run."),(0,a.kt)("p",null,"ie:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "monorepo",\n  "version": "1.0.0",\n  "workspaces": ["docs", "apps/*", "packages/*"]\n}\n')),(0,a.kt)("p",null,"And show an interactive list for you to search and can choose from."),(0,a.kt)("h2",{id:"publishing"},"Publishing"),(0,a.kt)("p",null,"The workflow to publishing your codemod enhanced packages should remain completely unchanged.\nHowever, it's important to verify that your ",(0,a.kt)("inlineCode",{parentName:"p"},"codeshift.config.js")," and codemods are not ignored by npm (via ",(0,a.kt)("inlineCode",{parentName:"p"},".npmignore")," or similar) so that they are successfully published to the registry."),(0,a.kt)("p",null,"In some cases you may need to add these to the ",(0,a.kt)("inlineCode",{parentName:"p"},"files")," property of your package's ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "@monorepo/my-package",\n  "version": "0.6.0",\n  "main": "./dist/index.js",\n  "files": ["dist", "src", "codemods", "codeshift.config.js"]\n}\n')),(0,a.kt)("h2",{id:"running"},"Running"),(0,a.kt)("p",null,"Running a codemod as a consumer can now be done via the ",(0,a.kt)("inlineCode",{parentName:"p"},"@codemod/cli"),", assuming your package is named ",(0,a.kt)("inlineCode",{parentName:"p"},"@monorepo/my-package")," and your codemod is ",(0,a.kt)("inlineCode",{parentName:"p"},"1.0.0"),":"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ codeshift --packages @monorepo/my-package@1.0.0 /path/to/source")),(0,a.kt)("p",null,"You can even omit the codemod name to be prompted with all codemods as an interactive list:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ codeshift --packages @monorepo/my-package /path/to/source")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Here are some helpful examples of this setup working in the wild:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/atlassian-labs/compiled/tree/master/packages/codemods"},"Compiled codemods")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/webdriverio/codemod"},"Webdriver.io codemods"))))}u.isMDXComponent=!0}}]);
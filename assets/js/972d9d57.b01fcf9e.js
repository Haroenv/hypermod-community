"use strict";(self.webpackChunkcodeshift_community=self.webpackChunkcodeshift_community||[]).push([[937],{3905:function(e,t,o){o.d(t,{Zo:function(){return l},kt:function(){return p}});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=a.createContext({}),c=function(e){var t=a.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},l=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(o),p=n,h=m["".concat(d,".").concat(p)]||m[p]||u[p]||i;return o?a.createElement(h,r(r({ref:t},l),{},{components:o})):a.createElement(h,r({ref:t},l))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var c=2;c<i;c++)r[c]=o[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9880:function(e,t,o){o.r(t),o.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=o(3117),n=o(102),i=(o(7294),o(3905)),r=["components"],s={id:"introduction",title:"Introduction",slug:"/"},d=void 0,c={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"CodeshiftCommunity is a community-owned global registry and documentation hub for codemods. This project provides users and maintainers of libraries with tools and resources to help them write, test, publish and use codemods in a structured and familiar way. By providing a standardized platform for codemod authoring, publishing, and consumption, CodeshiftCommunity aims to promote the use of codemods as a standard development practice and reduce the learning curve for these tools.",source:"@site/docs/introduction.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/edit/main/website/docs/introduction.mdx",tags:[],version:"current",frontMatter:{id:"introduction",title:"Introduction",slug:"/"},sidebar:"docs",next:{title:"Guiding principles",permalink:"/docs/guiding-principles"}},l={},u=[{value:"Why?",id:"why",level:2},{value:"Objectives",id:"objectives",level:2},{value:"Fragmentation in the ecosystem",id:"fragmentation-in-the-ecosystem",level:3},{value:"Package adoption &amp; upgrade pain",id:"package-adoption--upgrade-pain",level:3},{value:"Lack of documentation &amp; familiarity",id:"lack-of-documentation--familiarity",level:3},{value:"What we offer",id:"what-we-offer",level:2},{value:"A standardized CLI",id:"a-standardized-cli",level:3},{value:"A centralized registry",id:"a-centralized-registry",level:3},{value:"Rich documentation",id:"rich-documentation",level:3},{value:"CodeshiftCommunityBot",id:"codeshiftcommunitybot",level:3},{value:"Getting started",id:"getting-started",level:2}],m={toc:u};function p(e){var t=e.components,o=(0,n.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"CodeshiftCommunity is a community-owned global registry and documentation hub for codemods. This project provides users and maintainers of libraries with tools and resources to help them ",(0,i.kt)("a",{parentName:"p",href:"authoring"},"write"),", ",(0,i.kt)("a",{parentName:"p",href:"testing"},"test"),", ",(0,i.kt)("a",{parentName:"p",href:"contribution"},"publish")," and ",(0,i.kt)("a",{parentName:"p",href:"consuming"},"use")," codemods in a structured and familiar way. By providing a standardized platform for codemod authoring, publishing, and consumption, CodeshiftCommunity aims to promote the use of codemods as a standard development practice and reduce the learning curve for these tools."),(0,i.kt)("h2",{id:"why"},"Why?"),(0,i.kt)("p",null,"Keeping JavaScript dependencies up-to-date is an important part of maintaining a healthy codebase. Outdated dependencies can introduce security vulnerabilities, cause compatibility issues, and make it difficult to use the latest features and improvements."),(0,i.kt)("p",null,"One way to keep your dependencies up-to-date is by using codemods. A codemod is a tool that can automatically refactor code, which can be particularly useful when making large-scale changes to a codebase."),(0,i.kt)("p",null,"For example, let's say you want to update the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"lodash"))," library in your codebase from version 4 to version 5. This would require updating all of the import statements, function calls, and other references to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"lodash"))," in your code. Instead of manually updating each instance, you can use a codemod to do the work for you."),(0,i.kt)("p",null,"To use a codemod for this task, you would provide it with the old and new code for ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"lodash")),", as well as the files or directories that you want to update. The codemod would then scan your code and make the necessary changes. This can save you a significant amount of time and effort."),(0,i.kt)("p",null,"Additionally, using a codemod for this task can help ensure that your code stays consistent and up-to-date. By automatically updating all of the references to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"lodash")),", you can avoid any potential issues that may arise from using a mix of old and new code."),(0,i.kt)("p",null,"Of course, it is important to carefully review the changes made by a codemod to avoid any potential errors. However, in general, codemods can be a powerful tool for keeping your JavaScript dependencies up-to-date. They can save time, ensure consistency, and help keep your codebase healthy."),(0,i.kt)("h2",{id:"objectives"},"Objectives"),(0,i.kt)("p",null,"Our main aim is to create a community centered around codemods in order to promote the use of codemods as a standard development practice across the JavaScript ecosystem."),(0,i.kt)("p",null,"We believe that providing the appropriate support, documentation, and tools can help us achieve this goal."),(0,i.kt)("p",null,"To accomplish this, CodeshiftCommunity aims to address three key challenges:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Fragmentation in how codemods are written and distributed within the ecosystem"),(0,i.kt)("li",{parentName:"ol"},"Difficulty adopting and upgrading packages"),(0,i.kt)("li",{parentName:"ol"},"Lack of documentation and understanding about codemods.")),(0,i.kt)("h3",{id:"fragmentation-in-the-ecosystem"},"Fragmentation in the ecosystem"),(0,i.kt)("p",null,"CodeshiftCommunity offers a platform-agnostic toolchain for creating, publishing, and using codemods, centered around the @codeshift/cli. This CLI provides common infrastructure and eliminates the need for developers to constantly recreate the same tools."),(0,i.kt)("p",null,"Some popular libraries in the ecosystem, such as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reactjs/react-codemod"},"React"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mui-org/material-ui/tree/master/packages/material-ui-codemod"},"material-ui")," and ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/advanced-features/codemods"},"next.js"),", all offer their own solutions for codemods, CLI, and distribution services. These services are inconsistent and often difficult for the average user to access. While providing these services can be helpful for upgrading libraries, it also places a significant burden on the projects that offer them."),(0,i.kt)("p",null,"CodeshiftCommunity aims to address this issue by providing a standardized platform for codemod authoring, publishing, and consumption. This will help to reduce fragmentation and make it easier for developers to access the tools they need."),(0,i.kt)("h3",{id:"package-adoption--upgrade-pain"},"Package adoption & upgrade pain"),(0,i.kt)("p",null,"When publishing API changes, it is easy to shift the burden of upgrading onto your users. This can lead to users having to search through your changelog or even your code to figure out how to migrate to the latest version safely. In many cases, users will simply avoid upgrading or switch to a different library altogether."),(0,i.kt)("p",null,"CodeshiftCommunity offers a standardized versioning scheme that presents codemods in a user-friendly way. By following our guiding principles, your codemods will be idempotent, atomic, and reusable for years to come."),(0,i.kt)("p",null,"Writing a changelog and constantly answering the same questions about how to migrate can be time-consuming and frustrating. By distilling all of the necessary changes into a codemod, you can provide users with a repeatable, updatable solution that can be improved and perfected, with the help of the community. This allows you to focus on more important tasks and avoid the headache of supporting users through the upgrade process."),(0,i.kt)("h3",{id:"lack-of-documentation--familiarity"},"Lack of documentation & familiarity"),(0,i.kt)("p",null,"Writing codemods can often feel like a specialized skill that only a few people in a company know how to do. CodeshiftCommunity aims to change this by providing a hub for documentation and guidance."),(0,i.kt)("p",null,"By offering guides, recipes, and reference materials, we hope to demystify codemods and make them more accessible to everyone. With the right documentation in place, it will be easier to normalize the use of codemods and reduce their learning curve."),(0,i.kt)("p",null,"Our goal is to remove the stigma that codemods are difficult or time-consuming to write, and encourage everyone to adopt the practice of writing them. This will help to increase the number of contributors to codemods and ultimately improve the adoption of new technologies in the JavaScript ecosystem."),(0,i.kt)("h2",{id:"what-we-offer"},"What we offer"),(0,i.kt)("h3",{id:"a-standardized-cli"},"A standardized CLI"),(0,i.kt)("p",null,"Codeshift allows developers to publish codemods as their own NPM packages or as part of an existing NPM package. We provide a ",(0,i.kt)("a",{parentName:"p",href:"cli"},"standardized CLI tool")," that can download and run the latest codemods from any location. This approach has the added benefit of allowing codemods to be published with dependencies, which is not currently possible with most JSCodeshift CLI implementations."),(0,i.kt)("p",null,"By using NPM, we aim to make it easy for developers to adopt codemods. All they need to do is publish an existing package with a codemod.config.js file and they are ready to go. For more information, see our guide on ",(0,i.kt)("a",{parentName:"p",href:"authoring#2-add-codeshift-to-an-existing-package"},"authoring with existing packages"),"."),(0,i.kt)("h3",{id:"a-centralized-registry"},"A centralized registry"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/DefinitelyTyped/DefinitelyTyped"},"DefinitelyTyped")," is a great example of how consolidating type definitions in one place can promote familiarity and consistency for the entire TypeScript user base. By following a similar approach for codemods, the ecosystem can benefit from:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A single location for finding, using, and publishing codemods"),(0,i.kt)("li",{parentName:"ol"},"Community support and bug fixes"),(0,i.kt)("li",{parentName:"ol"},"A wealth of examples to learn from")),(0,i.kt)("p",null,"Our goal is to achieve broad coverage of common JS dependencies, such as React, Jest, and Chalk, by collaborating with the wider JS community to produce high-quality, versioned codemods."),(0,i.kt)("p",null,"CodeshiftCommunity offers a registry that hosts and automatically publishes codemods under the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CodeshiftCommunity/CodeshiftCommunity/tree/main/community"},"/community directory"),". This directory organizes codemods by package name and version, and publishes them to npm as modules that can be updated or improved. This ensures that users who run codemods always have access to the latest version."),(0,i.kt)("h3",{id:"rich-documentation"},"Rich documentation"),(0,i.kt)("p",null,"CodeshiftCommunity is focused on providing documentation, guides, recipes, and reference materials to demystify codemods and make them more accessible. By offering this guidance, we hope to make it easier for developers to use codemods and reduce the learning curve."),(0,i.kt)("p",null,"We want to remove the perception that codemods are difficult or time-consuming to write, and encourage everyone to adopt the practice of using them. By doing so, we aim to increase the number of contributors to codemods and ultimately improve the adoption of new technologies in the JavaScript ecosystem."),(0,i.kt)("h3",{id:"codeshiftcommunitybot"},"CodeshiftCommunityBot"),(0,i.kt)("p",null,"Introducing ",(0,i.kt)("a",{parentName:"p",href:"codeshiftbot"},"CodeShiftCommunityBot"),", a GitHub app that automatically runs CodeShift codemods in your repository, ensuring that your dependencies are always up-to-date! With CodeShiftCommunityBot, you can easily keep your codebase in line with the latest best practices, without worrying about manually updating your dependencies."),(0,i.kt)("p",null,"Stay tuned for more information about CodeshiftCommunityBot and how it can help you maintain your repository. We can't wait to share this new tool with you!"),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/your-first-codemod"},"Your first codemod")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"consuming"},"Consuming codemods")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"authoring"},"Writing codemods")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"testing"},"Testing codemods")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"your-first-codemod"},"Learning resources")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"contribution"},"Publishing & contribution"))))}p.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(1),r=a(9),o=(a(0),a(161)),c={title:"Packages",id:"packages"},i={id:"packages",isDocsHomePage:!1,title:"Packages",description:"Sharing generators cross-projects and cross-teams can be done simply by copying or any custom tooling your teams come up with that perfectly fits your workflow.",source:"@site/docs/packages.md",permalink:"/docs/packages",editUrl:"https://github.com/jondot/hygen/edit/master/website/docs/packages.md",sidebar:"sidebar",previous:{title:"FAQ",permalink:"/docs/faq"},next:{title:"Create",permalink:"/docs/create"}},l=[{value:"Popular Packages",id:"popular-packages",children:[]},{value:"Installing a Package",id:"installing-a-package",children:[]},{value:"Installing from Github",id:"installing-from-github",children:[]},{value:"Name Clashes",id:"name-clashes",children:[]}],p={rightToc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Sharing generators cross-projects and cross-teams can be done simply by copying or any custom tooling your teams come up with that perfectly fits your workflow."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"hygen-add")," tool offers a streamlined way to do this by introducing ",Object(o.b)("em",{parentName:"p"},"Packages"),". Packages are a compiled set of generators which are published as a node module that you can install and share with others."),Object(o.b)("h2",{id:"popular-packages"},"Popular Packages"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/jondot/hygen-CRA"}),"hygen-cra (create-react-app)")," - generate a full set of component, storybook and test for your ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/facebook/create-react-app"}),"Create React App")," project.")),Object(o.b)("h2",{id:"installing-a-package"},"Installing a Package"),Object(o.b)("p",null,"First, you need to install the ",Object(o.b)("inlineCode",{parentName:"p"},"hygen-add")," tool, it's one of the tools in the ",Object(o.b)("inlineCode",{parentName:"p"},"hygen")," toolbelt."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ yarn global add hygen-add\n")),Object(o.b)("p",null,"Now pick ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/search?q=hygen-"}),"a published module")," on ",Object(o.b)("inlineCode",{parentName:"p"},"npm")," and install it. For a module called ",Object(o.b)("inlineCode",{parentName:"p"},"hygen-acme-generators"),", run this, without the prefix ",Object(o.b)("inlineCode",{parentName:"p"},"hygen-"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ hygen-add acme-generators\n")),Object(o.b)("p",null,"This installs the ",Object(o.b)("inlineCode",{parentName:"p"},"acme-generators")," package with the embedded ",Object(o.b)("inlineCode",{parentName:"p"},"yarn")," so it's versioned and locked, and adds the generators to your current project. Technically, it will ",Object(o.b)("em",{parentName:"p"},"copy")," the generators to your local ",Object(o.b)("inlineCode",{parentName:"p"},"_templates")," directory, because copying is more resilient and robust rather than referencing something that can change unexpectedly."),Object(o.b)("p",null,"Once that's done, you can remove ",Object(o.b)("inlineCode",{parentName:"p"},"acme-generators")," using ",Object(o.b)("inlineCode",{parentName:"p"},"yarn"),", or leave it if you'd like to sync your templates once in a while."),Object(o.b)("h2",{id:"installing-from-github"},"Installing from Github"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"hygen-add")," supports installing from Github, in the same way ",Object(o.b)("inlineCode",{parentName:"p"},"yarn")," supports it because it uses ",Object(o.b)("inlineCode",{parentName:"p"},"yarn")," under the hood. It will try to infer the package name from the Github repo URL."),Object(o.b)("p",null,"Running this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ hygen-add https://github.com/acme/acme-generators\n")),Object(o.b)("p",null,"Will install the package ",Object(o.b)("inlineCode",{parentName:"p"},"acme-generators"),". The package name ",Object(o.b)("inlineCode",{parentName:"p"},"acme-generators")," was parsed out of the Github URL."),Object(o.b)("p",null,"If for some reason your Github URL doesn't reveal anything about the package name, you can manually specify the package name (remember: the package name is the ",Object(o.b)("inlineCode",{parentName:"p"},"name")," property in the package project's ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file)."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ hygen-add https://github.com/acme/archive --name acme-generators\n")),Object(o.b)("h2",{id:"name-clashes"},"Name Clashes"),Object(o.b)("p",null,"If you want to install a ",Object(o.b)("inlineCode",{parentName:"p"},"react")," package from both ",Object(o.b)("inlineCode",{parentName:"p"},"acme")," and ",Object(o.b)("inlineCode",{parentName:"p"},"awesome"),", you can prefix one of those, or both, to avoid name clashes:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ hygen-add acme-react\n$ hygen-add awesome-react --prefix awsm\n")))}s.isMDXComponent=!0},161:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(a),m=n,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||o;return a?r.a.createElement(d,i(i({ref:t},p),{},{components:a})):r.a.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);
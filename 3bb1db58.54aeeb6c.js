(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{102:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=p(r),s=n,d=b["".concat(l,".").concat(s)]||b[s]||m[s]||i;return r?a.a.createElement(d,o(o({ref:t},u),{},{components:r})):a.a.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},70:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),i=(r(0),r(102)),l={title:"GitHub Templates",id:"templates",slug:"/templates/",description:"GitHub Templates for Azure Machine Learning.",keywords:["azure machine learning","aml","template","scenario","framework","azure"]},o={unversionedId:"templates/templates",id:"templates/templates",isDocsHomePage:!1,title:"GitHub Templates",description:"GitHub Templates for Azure Machine Learning.",source:"@site/docs/templates/templates.md",slug:"/templates/",permalink:"/azureml-web/docs/templates/",editUrl:"https://github.com/Azure/azureml-web/tree/main/website/docs/templates/templates.md",version:"current",sidebar:"templateSidebar"},c=[{value:"Base template",id:"base-template",children:[]},{value:"Scenario templates",id:"scenario-templates",children:[]},{value:"Framework templates",id:"framework-templates",children:[]},{value:"Contributing (a template)",id:"contributing-a-template",children:[{value:"Principle",id:"principle",children:[]},{value:"Spirit",id:"spirit",children:[]},{value:"General rules",id:"general-rules",children:[]},{value:"Enforced naming",id:"enforced-naming",children:[]},{value:"Additional guidance",id:"additional-guidance",children:[]}]}],u={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"base-template"},"Base template"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/azure/azureml-template"}),"https://github.com/azure/azureml-template"))),Object(i.b)("h2",{id:"scenario-templates"},"Scenario templates"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"None")),Object(i.b)("h2",{id:"framework-templates"},"Framework templates"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"None")),Object(i.b)("h2",{id:"contributing-a-template"},"Contributing (a template)"),Object(i.b)("p",null,"Copy the base template, adapting it for your scenario and following all guidelines below. Make a PR here to add it to the appropriate list."),Object(i.b)("h3",{id:"principle"},"Principle"),Object(i.b)("p",null,"Less but better."),Object(i.b)("h3",{id:"spirit"},"Spirit"),Object(i.b)("p",null,"The spirit of AML templates includes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"frequent and comprehensive testing"),Object(i.b)("li",{parentName:"ul"},"clear separation of cloud code (job definition) and user code"),Object(i.b)("li",{parentName:"ul"},"users can get up and running in 10 minutes with their own data/code")),Object(i.b)("h3",{id:"general-rules"},"General rules"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"minimal prose"),Object(i.b)("li",{parentName:"ul"},"minimalist code"),Object(i.b)("li",{parentName:"ul"},"workflows re-run without failing at least daily")),Object(i.b)("h3",{id:"enforced-naming"},"Enforced naming"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"repo should be published to ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/Azure"}),"https://github.com/Azure")),Object(i.b)("li",{parentName:"ul"},"repo should be named ",Object(i.b)("inlineCode",{parentName:"li"},"azureml-template-*"),", using hyphens to separate words")),Object(i.b)("h3",{id:"additional-guidance"},"Additional guidance"),Object(i.b)("p",null,"It is best to follow the guidance from the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Azure/azureml-examples"}),"example repo")," where applicable."))}p.isMDXComponent=!0}}]);
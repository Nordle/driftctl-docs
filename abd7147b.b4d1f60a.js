(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{145:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(184)),i={id:"version-check",title:"Version Check"},c={unversionedId:"usage/flags/version-check",id:"version-0.17.0/usage/flags/version-check",isDocsHomePage:!1,title:"Version Check",description:"By default, driftctl checks for a new version remotely. The request to the remote server might send the following data about your computer:",source:"@site/versioned_docs/version-0.17.0/usage/flags/version-check.mdx",slug:"/usage/flags/version-check",permalink:"/0.17.0/usage/flags/version-check",editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.17.0/usage/flags/version-check.mdx",version:"0.17.0",sidebar:"version-0.17.0/docs",previous:{title:"Crash Reporting",permalink:"/0.17.0/usage/flags/crash-reporting"},next:{title:"Disable telemetry",permalink:"/0.17.0/usage/flags/disable-telemetry"}},s=[],l={toc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"By default, driftctl checks for a new version remotely. The request to the remote server might send the following data about your computer:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"IP Address")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"OS")," (e.g.: linux, darwin, windows)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Arch")," (e.g.: amd64, i386)")),Object(a.b)("p",null,"To disable this behavior, either use the flag ",Object(a.b)("inlineCode",{parentName:"p"},"--no-version-check")," or define the environment variable ",Object(a.b)("inlineCode",{parentName:"p"},"DCTL_NO_VERSION_CHECK"),"."))}u.isMDXComponent=!0},184:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,d=p["".concat(i,".").concat(b)]||p[b]||f[b]||a;return r?o.a.createElement(d,c(c({ref:t},l),{},{components:r})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);
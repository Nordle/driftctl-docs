(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{184:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return r?a.a.createElement(m,l(l({ref:t},s),{},{components:r})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},99:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(184)),i={id:"disable-telemetry",title:"Disable telemetry"},l={unversionedId:"usage/flags/disable-telemetry",id:"version-0.15.0/usage/flags/disable-telemetry",isDocsHomePage:!1,title:"Disable telemetry",description:"By default, driftctl sends telemetry data to help us improve the product.",source:"@site/versioned_docs/version-0.15.0/usage/flags/disable-telemetry.mdx",slug:"/usage/flags/disable-telemetry",permalink:"/0.15.0/usage/flags/disable-telemetry",editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.15.0/usage/flags/disable-telemetry.mdx",version:"0.15.0",sidebar:"version-0.15.0/docs",previous:{title:"Version Check",permalink:"/0.15.0/usage/flags/version-check"},next:{title:".driftignore",permalink:"/0.15.0/usage/filtering/driftignore"}},c=[],s={toc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"By default, driftctl sends telemetry data to help us improve the product.\nYou can find below a sample of what data are collected by driftctl."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "version": "0.7.1",\n    "os": "linux",\n    "arch": "amd64",\n    "total_resources": 100,\n    "total_managed": 10,\n    "duration": 300 // analysis time in seconds\n}\n')),Object(o.b)("p",null,"To disable this behavior, either use the flag ",Object(o.b)("inlineCode",{parentName:"p"},"--disable-telemetry")," or define the environment variable ",Object(o.b)("inlineCode",{parentName:"p"},"DCTL_DISABLE_TELEMETRY=true"),"."))}u.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{142:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return s})),n.d(r,"default",(function(){return p}));var t=n(3),a=n(7),o=(n(0),n(184)),i={id:"crash-reporting",title:"Crash Reporting"},c={unversionedId:"usage/flags/crash-reporting",id:"version-0.16.0/usage/flags/crash-reporting",isDocsHomePage:!1,title:"Crash Reporting",description:"When a crash occurs in driftctl, we do not send any crash reports.",source:"@site/versioned_docs/version-0.16.0/usage/flags/crash-reporting.mdx",slug:"/usage/flags/crash-reporting",permalink:"/0.16.0/usage/flags/crash-reporting",editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.16.0/usage/flags/crash-reporting.mdx",version:"0.16.0",sidebar:"version-0.16.0/docs",previous:{title:".driftignore generator",permalink:"/0.16.0/usage/cmd/gen-driftignore-usage"},next:{title:"Version Check",permalink:"/0.16.0/usage/flags/version-check"}},s=[{value:"Example",id:"example",children:[]}],l={toc:s};function p(e){var r=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},l,i,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When a crash occurs in driftctl, we do not send any crash reports."),Object(o.b)("p",null,"For debugging purposes, you can add ",Object(o.b)("inlineCode",{parentName:"p"},"--send-crash-report")," when running driftctl and crash data will be sent to us via ",Object(o.b)("a",{parentName:"p",href:"https://sentry.io"},"Sentry"),"."),Object(o.b)("p",null,"Below is a list of data we retrieve when error reporting is enabled."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"date"),": Event date"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"os name"),': Operating System (string, e.g. : "linux | mac | windows")'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"architecture"),': Architecture of your CPU (string, e.g. : "amd64 | i389")'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"num_cpu"),": Number of cores of your CPU (int, e.g. : 8)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"release"),': driftctl version (string, e.g. : "v0.2.2")'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"server_name"),': Your computer hostname (string, e.g. : "yourhostname")'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"runtime version"),': Golang version (string, e.g. : "go1.15.2")'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"runtime infos"),": Variables go_maxprocs, go_numcgocalls, go_numroutines"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"packages"),": Golang used packages and their versions"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"stacktrace"),": The error stack")),Object(o.b)("p",null,"The crash reporting is silent, it will never make your scan fail. You can know whether a report has been sent or not by setting the log level to debug : ",Object(o.b)("inlineCode",{parentName:"p"},"LOG_LEVEL=debug driftctl scan ..."),"."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"Below is a full example of a nil pointer crash report."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Sentry",src:n(262).default})),Object(o.b)("p",null,"The RAW stack for this example is:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-console"},'runtime.errorString: runtime error: invalid memory address or nil pointer dereference\n  File "/go/src/app/pkg/parallel_runner.go", line 93, in (*ParallelRunner).Run.func1.1\n  File "/go/src/app/pkg/remote/aws/s3_bucket_supplier.go", line 71, in readBucketRegion\n  File "/go/src/app/pkg/remote/aws/s3_bucket_inventory_supplier.go", line 42, in (*S3BucketInventorySupplier).Resources\n  File "/go/src/app/pkg/scanner.go", line 28, in (*Scanner).Resources.func1\n  File "/go/src/app/pkg/parallel_runner.go", line 97, in (*ParallelRunner).Run.func1\n')))}p.isMDXComponent=!0},184:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return m}));var t=n(0),a=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var r=a.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=p(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},g=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),g=t,m=u["".concat(i,".").concat(g)]||u[g]||b[g]||o;return n?a.a.createElement(m,c(c({ref:r},l),{},{components:n})):a.a.createElement(m,c({ref:r},l))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=g;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},262:function(e,r,n){"use strict";n.r(r),r.default=n.p+"assets/images/sentry-2fbf7805ce69b6f14c223592c4570f0a.png"}}]);
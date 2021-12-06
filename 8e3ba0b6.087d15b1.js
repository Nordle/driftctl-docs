(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return a})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),l=(n(0),n(184)),i={id:"completion-usage",title:"Completion"},c={unversionedId:"usage/cmd/completion-usage",id:"version-0.17.0/usage/cmd/completion-usage",isDocsHomePage:!1,title:"Completion",description:"driftctl can output completion script (also known as tab completion) for you to use on your shell. Currently bash, zsh, fish and powershell shells are supported.",source:"@site/versioned_docs/version-0.17.0/usage/cmd/completion.mdx",slug:"/usage/cmd/completion-usage",permalink:"/0.17.0/usage/cmd/completion-usage",editUrl:"https://github.com/snyk/driftctl-docs/edit/main/versioned_docs/version-0.17.0/usage/cmd/completion.mdx",version:"0.17.0",sidebar:"version-0.17.0/docs",previous:{title:"Scan",permalink:"/0.17.0/usage/cmd/scan-usage"},next:{title:".driftignore generator",permalink:"/0.17.0/usage/cmd/gen-driftignore-usage"}},a=[{value:"Before you start",id:"before-you-start",children:[]},{value:"Generate the completion file",id:"generate-the-completion-file",children:[]},{value:"Bash",id:"bash",children:[]},{value:"Zsh",id:"zsh",children:[{value:"Oh-My-Zsh",id:"oh-my-zsh",children:[]}]},{value:"Fish",id:"fish",children:[]},{value:"Powershell",id:"powershell",children:[]}],s={toc:a};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"driftctl can output completion script (also known as ",Object(l.b)("em",{parentName:"p"},"tab completion"),") for you to use on your shell. Currently ",Object(l.b)("inlineCode",{parentName:"p"},"bash"),", ",Object(l.b)("inlineCode",{parentName:"p"},"zsh"),", ",Object(l.b)("inlineCode",{parentName:"p"},"fish")," and ",Object(l.b)("inlineCode",{parentName:"p"},"powershell")," shells are supported."),Object(l.b)("h2",{id:"before-you-start"},"Before you start"),Object(l.b)("p",null,"In order to generate the completion script required to make the completion work, you have to install driftctl CLI first."),Object(l.b)("h2",{id:"generate-the-completion-file"},"Generate the completion file"),Object(l.b)("p",null,"To generate the completion script you can use:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"$ driftctl completion [bash|zsh|fish|powershell]\n")),Object(l.b)("p",null,"By default, this command will print on the standard output the content of the completion script. To make the completion work you will need to redirect it to the completion folder of your shell."),Object(l.b)("h2",{id:"bash"},"Bash"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"# Linux:\n$ driftctl completion bash | sudo tee /etc/bash_completion.d/driftctl\n\n# macOS:\n$ driftctl completion bash > /usr/local/etc/bash_completion.d/driftctl\n")),Object(l.b)("p",null,"Remember to open a new shell to test the functionality."),Object(l.b)("h2",{id:"zsh"},"Zsh"),Object(l.b)("p",null,"If shell completion is not already enabled in your environment, you will need to enable it. You can execute the following once:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'$ echo "autoload -U compinit; compinit" >> ~/.zshrc\n')),Object(l.b)("p",null,"At this point you can generate and place the completion script in your completion folder listed in your ",Object(l.b)("inlineCode",{parentName:"p"},"fpath")," if it already exists. Otherwise, you can create a directory, add it to your ",Object(l.b)("inlineCode",{parentName:"p"},"fpath")," and copy the file in it:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"$ driftctl completion zsh > fpath/completion_folder/_driftctl\n")),Object(l.b)("h3",{id:"oh-my-zsh"},"Oh-My-Zsh"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"$ mkdir -p ~/.oh-my-zsh/completions\n$ driftctl completion zsh > ~/.oh-my-zsh/completions/_driftctl\n")),Object(l.b)("p",null,"You will need to start a new shell for this setup to take effect."),Object(l.b)("h2",{id:"fish"},"Fish"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"$ driftctl completion fish > ~/.config/fish/completions/driftctl.fish\n")),Object(l.b)("p",null,"Remember to create the directory if it's not already there ",Object(l.b)("inlineCode",{parentName:"p"},"mkdir -p ~/.config/fish/completions/"),"."),Object(l.b)("p",null,"Remember to open a new shell to test the functionality."),Object(l.b)("h2",{id:"powershell"},"Powershell"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"$ driftctl completion powershell > driftctl.ps1\n")),Object(l.b)("p",null,"You will need to source this file from your powershell profile for this to work as expected."))}p.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=p(n),b=o,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||l;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=b;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<l;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
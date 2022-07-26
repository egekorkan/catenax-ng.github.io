"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[7571],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6854:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"How to use GitguardianShield"},p=void 0,s={unversionedId:"security/GitguardianShield",id:"security/GitguardianShield",title:"How to use GitguardianShield",description:"About GitGuardianShield",source:"@site/docs/security/GitguardianShield.md",sourceDirName:"security",slug:"/security/GitguardianShield",permalink:"/docs/security/GitguardianShield",draft:!1,editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/edit/main/docs/security/GitguardianShield.md",tags:[],version:"current",frontMatter:{title:"How to use GitguardianShield"},sidebar:"tutorialSidebar",previous:{title:"Checkov",permalink:"/docs/security/checkov"},next:{title:"How to integrate Veracode to your JIRA project",permalink:"/docs/security/veracode-jira-plugin"}},c={},u=[{value:"About GitGuardianShield",id:"about-gitguardianshield",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Installation",id:"installation",level:3},{value:"Login",id:"login",level:3},{value:"Local Scanning",id:"local-scanning",level:3},{value:"Integration",id:"integration",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Pre-commit",id:"pre-commit",level:3},{value:"Steps",id:"steps",level:4},{value:"Pre-push",id:"pre-push",level:3},{value:"Steps",id:"steps-1",level:4}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"about-gitguardianshield"},"About GitGuardianShield"),(0,i.kt)("p",null,"GitGuardianShield is a CLI application that runs in your local environment to detect secrets and block them before they\nenter the git repository. Using a hook ",(0,i.kt)("strong",{parentName:"p"},"pre-commit"),"/",(0,i.kt)("strong",{parentName:"p"},"pre-push")," the secret scans can be automated."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Python and Pip"),(0,i.kt)("li",{parentName:"ol"},"GitGuardian account")),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Execute the following CLI:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"pip install ggshield"))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If this doesn't work, try ",(0,i.kt)("inlineCode",{parentName:"p"},"pip3 install ggshield"),"."))),(0,i.kt)("h3",{id:"login"},"Login"),(0,i.kt)("p",null,"To use GitGuardianshield you need to be authentified by the GitGuardian Server. For this, execute ",(0,i.kt)("inlineCode",{parentName:"p"},"ggshield auth login"),".\nThis automatically generates an access token."),(0,i.kt)("h3",{id:"local-scanning"},"Local Scanning"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To scan a file use the ",(0,i.kt)("strong",{parentName:"p"},"CLI"),":",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},'ggshield secret scan path "Name of File"'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To scan a directory use the ",(0,i.kt)("strong",{parentName:"p"},"CLI"),":",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ggshield secret scan path -r ."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To scan every changes that have been staged in a git repo (pre-commit) use the ",(0,i.kt)("strong",{parentName:"p"},"CLI"),":",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ggshield secret scan pre-commit"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To scan all commits in a git repository use the ",(0,i.kt)("strong",{parentName:"p"},"CLI"),":",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ggshield secret scan repo ."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To ignore the last fund secrets use the ",(0,i.kt)("strong",{parentName:"p"},"CLI"),":",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ggshield ignore --last-found"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To ignore a path add to the ",(0,i.kt)("strong",{parentName:"p"},"gitguardian.yaml File"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"paths-ignore:\n'**/folder-path/**'\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To ignore selected files add to the ",(0,i.kt)("strong",{parentName:"p"},"gitguardian.yaml File"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"paths-ignore:\n'**/file-path'\n")))),(0,i.kt)("h2",{id:"integration"},"Integration"),(0,i.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,i.kt)("p",null,"Install pre-commit with the ",(0,i.kt)("strong",{parentName:"p"},"CLI")," ",(0,i.kt)("inlineCode",{parentName:"p"},"pip install pre-commit"),"."),(0,i.kt)("h3",{id:"pre-commit"},"Pre-commit"),(0,i.kt)("p",null,"The pre-commit hook checks the commit for secrets and blocks the commit if there are any. The pre-commit hook is easier\nto work with since it catches the error as you made it. An internet connection will be required for the commits."),(0,i.kt)("h4",{id:"steps"},"Steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a ",(0,i.kt)("em",{parentName:"p"},"pre-commit-config.yaml")," file in your root repo:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"repos:\n  - repo: https://github.com/gitguardian/ggshield\n    rev: v1.10.7 (latest version)\n    hooks:\n      - id: ggshield\n        language_version: python3\n        stage: [ commit ]\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Install a githook based on the yaml file with the CLI:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"pre-commit install")))),(0,i.kt)("h3",{id:"pre-push"},"Pre-push"),(0,i.kt)("p",null,"The pre-push checks a group of commits for secrets, and block the push if there are any. The pre-push hook reduces the\namount of scanning but if a secret is detected, you have to rewrite your history."),(0,i.kt)("h4",{id:"steps-1"},"Steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a ",(0,i.kt)("em",{parentName:"p"},"pre-commit-config.yaml")," file in your root repo:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"repos:\n  - repo: https://github.com/gitguardian/ggshield\n    rev: v1.10.7 (latest version)\n    hooks:\n      - id: ggshield-push\n        language_version: python3\n        stage: [ push ]\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Install a githook based on the yaml file with the ",(0,i.kt)("strong",{parentName:"p"},"CLI"),":",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"pre-commit install --hook-type pre-push")))))}d.isMDXComponent=!0}}]);
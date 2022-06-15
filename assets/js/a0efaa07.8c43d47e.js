"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[4522],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,v=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return a?r.createElement(v,i(i({ref:t},c),{},{components:a})):r.createElement(v,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7134:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],l={title:"How to Access a Private Repo and a Private Package/Image"},p=void 0,u={unversionedId:"guides/how-to-prepare-a-private-repo",id:"guides/how-to-prepare-a-private-repo",title:"How to Access a Private Repo and a Private Package/Image",description:"Accessing a private repo",source:"@site/docs/guides/how-to-prepare-a-private-repo.md",sourceDirName:"guides",slug:"/guides/how-to-prepare-a-private-repo",permalink:"/docs/guides/how-to-prepare-a-private-repo",editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/edit/main/docs/guides/how-to-prepare-a-private-repo.md",tags:[],version:"current",frontMatter:{title:"How to Access a Private Repo and a Private Package/Image"},sidebar:"tutorialSidebar",previous:{title:"How To Monitor CPU And Memory Usage",permalink:"/docs/guides/how-to-monitor"},next:{title:"How to use Two-Factor Authentication (2FA) with GitHub.com",permalink:"/docs/guides/how-to-use-2fa-with-github"}},c={},s=[{value:"Accessing a private repo",id:"accessing-a-private-repo",level:2},{value:"1. Create an ssh-key",id:"1-create-an-ssh-key",level:3},{value:"2. Create a key/value pair in the vault",id:"2-create-a-keyvalue-pair-in-the-vault",level:3},{value:"Accessing a private package/image",id:"accessing-a-private-packageimage",level:2}],m={toc:s};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"accessing-a-private-repo"},"Accessing a private repo"),(0,o.kt)("p",null,"If your GitHub repo is set to private, you have to do following to be able to onboard"),(0,o.kt)("h3",{id:"1-create-an-ssh-key"},"1. Create an ssh-key"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"ssh-keygen -t ed25519")),(0,o.kt)("li",{parentName:"ul"},"Don\xb4t use a passphrase"),(0,o.kt)("li",{parentName:"ul"},"Save key to a safe place"),(0,o.kt)("li",{parentName:"ul"},"Add sshPublicKey to your Github repo under settings - deploy key.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This will only be possible if you have admin role for the repo."),(0,o.kt)("li",{parentName:"ul"},"If you don\xb4t have this role, please ask someone else from your team who has appropriate rights."),(0,o.kt)("li",{parentName:"ul"},"You may also send the public key to DevSecOps to put the key to the repo.")))),(0,o.kt)("h3",{id:"2-create-a-keyvalue-pair-in-the-vault"},"2. Create a key/value pair in the vault"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Navigate to ",(0,o.kt)("a",{parentName:"li",href:"https://vault.demo.catena-x.net"},"https://vault.demo.catena-x.net")),(0,o.kt)("li",{parentName:"ul"},"Click your Secrets Engine"),(0,o.kt)("li",{parentName:"ul"},'Click "',(0,o.kt)("em",{parentName:"li"},"Create secret +"),'"'),(0,o.kt)("li",{parentName:"ul"},'In field "Path for this secret" type "deploy-key"'),(0,o.kt)("li",{parentName:"ul"},'Under "Secret data" name the key "<product-name',">",'-deploy-key"'),(0,o.kt)("li",{parentName:"ul"},"Paste your sshPrivateKey to the value field"),(0,o.kt)("li",{parentName:"ul"},"Save"),(0,o.kt)("li",{parentName:"ul"},"Provide this information to DevSecOps team with your ArgoCD project request")),(0,o.kt)("h2",{id:"accessing-a-private-packageimage"},"Accessing a private package/image"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Pull secret ",(0,o.kt)("inlineCode",{parentName:"p"},"machineuser-pull-secret-ro")," has to be added to the product\xb4s code"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"imagePullSecrets:\n  - name: machineuser-pull-secret-ro\n")))))}d.isMDXComponent=!0}}]);
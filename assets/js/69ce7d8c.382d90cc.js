"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[561],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=o,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var s=2;s<l;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},295:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=a(7462),o=a(3366),l=(a(7294),a(3905)),r=["components"],i={title:"How To Use HashiCorp Vault"},u=void 0,s={unversionedId:"guides/how-to-use-vault",id:"guides/how-to-use-vault",title:"How To Use HashiCorp Vault",description:"This guide is a small howto about storing your secrets using HashiCorp Vault. Following prerequisites have to be",source:"@site/docs/guides/how-to-use-vault.md",sourceDirName:"guides",slug:"/guides/how-to-use-vault",permalink:"/docs/guides/how-to-use-vault",editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/edit/main/docs/guides/how-to-use-vault.md",tags:[],version:"current",frontMatter:{title:"How To Use HashiCorp Vault"},sidebar:"tutorialSidebar",previous:{title:"How to deploy an application on 'Hotel Budapest'",permalink:"/docs/guides/how-to-deploy-an-application"},next:{title:"How To Use Vault Secrets With ArgoCD",permalink:"/docs/guides/howto-use-vault-secrets-with-argocd"}},c={},p=[{value:"Available Vault Login Methods",id:"available-vault-login-methods",level:2},{value:"Create GitHub Token",id:"create-github-token",level:2},{value:"Using The Token To Login",id:"using-the-token-to-login",level:2},{value:"Vault WebUI",id:"vault-webui",level:3},{value:"Vault CLI",id:"vault-cli",level:3},{value:"Create A Secret",id:"create-a-secret",level:2},{value:"Vault WebUI",id:"vault-webui-1",level:3},{value:"Vault Cli",id:"vault-cli-1",level:3},{value:"Read A Secret",id:"read-a-secret",level:2},{value:"Vault WebUI",id:"vault-webui-2",level:3},{value:"Vault CLI",id:"vault-cli-2",level:3},{value:"See Also",id:"see-also",level:2}],d={toc:p};function m(e){var t=e.components,i=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This guide is a small howto about storing your secrets using HashiCorp Vault. Following prerequisites have to be\nmet:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"your product-team must have been onboarded to Catena-X NG GitHub organization")),(0,l.kt)("p",null,"For guidance of how to use secret with an ArgoCD application, please refer to\n",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/howto-use-vault-secrets-with-argocd"},(0,l.kt)("em",{parentName:"a"},"How To Use Vault Secrets With ArgoCD")),"."),(0,l.kt)("p",null,"The Catena-X Vault instance URL is: ",(0,l.kt)("a",{parentName:"p",href:"https://vault.vault.demo.catena-x.net"},"https://vault.vault.demo.catena-x.net")),(0,l.kt)("h2",{id:"available-vault-login-methods"},"Available Vault Login Methods"),(0,l.kt)("p",null,"As of now, you can access Vault with the following authentication methods:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GitHub (Token based)"),(0,l.kt)("li",{parentName:"ul"},"AppRole")),(0,l.kt)("p",null,"GitHub Token is intended for personal login to Vault. The AppRole method is used for machine logins, aka your ArgoCD\napplication will use this method to authenticate against Vault. This guide will cover only the login methods for\npersonal login methods."),(0,l.kt)("p",null,"Planned login/authentication methods:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"OIDC login (using GitHub as SSO, as you know it from ArgoCD UI)")),(0,l.kt)("h2",{id:"create-github-token"},"Create GitHub Token"),(0,l.kt)("p",null,"To be able to use GitHub Token as login method with Vault you have to create a personal token with appropriate\npermissions granted. To create a personalized token:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"login to GitHub and go to ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/settings/tokens"},"Settings / Developer settings / Personal access tokens"),"\n."),(0,l.kt)("li",{parentName:"ul"},"click on the ",(0,l.kt)("em",{parentName:"li"},"Generate new token")," button in the upper right corner"),(0,l.kt)("li",{parentName:"ul"},"add a ",(0,l.kt)("em",{parentName:"li"},"Note")," that fits your needs (this helps you to identify the intent of the token later)"),(0,l.kt)("li",{parentName:"ul"},"select an ",(0,l.kt)("em",{parentName:"li"},"Expiration")," date"),(0,l.kt)("li",{parentName:"ul"},"grant ",(0,l.kt)("a",{parentName:"li",href:"https://www.vaultproject.io/docs/auth/github"},(0,l.kt)("em",{parentName:"a"},"read:org"))," permissions to your token"),(0,l.kt)("li",{parentName:"ul"},"click on ",(0,l.kt)("em",{parentName:"li"},"Generate token")," at the bottom of the form.")),(0,l.kt)("p",null,"After these steps GitHub will show you the token."),(0,l.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"GitHub will show the token ",(0,l.kt)("strong",{parentName:"p"},"only once")," after creation. If you miss to safe the token in any kind you'll have to\ngenerate a new token and revoke the old one for security reasons."),(0,l.kt)("p",{parentName:"div"},"We strongly suggest to use a password manager like ",(0,l.kt)("a",{parentName:"p",href:"https://keepass.info"},"KeePass")," (or any other password manager) to\nstore personal sensitive data."))),(0,l.kt)("h2",{id:"using-the-token-to-login"},"Using The Token To Login"),(0,l.kt)("h3",{id:"vault-webui"},"Vault WebUI"),(0,l.kt)("p",null,"To log in to Vault using your generated GitHub token, go to ",(0,l.kt)("a",{parentName:"p",href:"https://vault.vault.demo.catena-x.net"},"Vault"),", select\n",(0,l.kt)("em",{parentName:"p"},"GitHub")," as Method and enter your token in the field ",(0,l.kt)("em",{parentName:"p"},"GitHub token"),":"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Vault Login Page",src:a(6690).Z,width:"998",height:"722"})),(0,l.kt)("h3",{id:"vault-cli"},"Vault CLI"),(0,l.kt)("p",null,"You can also use the ",(0,l.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/downloads"},"Vault Cli")," to manage your secrets. To login in CLI execute\nthe following steps:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ export GH_TOKEN="YOUR_TOKEN"\n$ export VAULT_ADDR="https://vault.vault.demo.catena-x.net:443"\n$ vault login -method=github token=$GH_TOKEN\nSuccess! You are now authenticated. The token information displayed below\nis already stored in the token helper. You do NOT need to run "vault login"\nagain. Future Vault requests will automatically use this token.\n\nKey                    Value\n---                    -----\ntoken                  s.Bzfdei921xxx\ntoken_accessor         snJKHKjhadsxxx\ntoken_duration         768h\ntoken_renewable        true\ntoken_policies         ["your_team_name"]\nidentity_policies      []\npolicies               ["your_team_name" "default"]\ntoken_meta_username    YourGHName\ntoken_meta_org         catenax-ng\n$\n')),(0,l.kt)("h2",{id:"create-a-secret"},"Create A Secret"),(0,l.kt)("h3",{id:"vault-webui-1"},"Vault WebUI"),(0,l.kt)("p",null,"After login to Vault, you'll have access to the Vault secret engine/store created for your product-team."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Empty secret store",src:a(9790).Z,width:"1195",height:"510"})),(0,l.kt)("p",null,"To create a secret"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"click on ",(0,l.kt)("em",{parentName:"li"},"Create secret +")," in the upper right area"),(0,l.kt)("li",{parentName:"ul"},"enter a ",(0,l.kt)("em",{parentName:"li"},"Path for this secret"),", this will be the secret name"),(0,l.kt)("li",{parentName:"ul"},"add as many ",(0,l.kt)("em",{parentName:"li"},"Secret data")," lines, as you require to store in this secret"),(0,l.kt)("li",{parentName:"ul"},"click on the ",(0,l.kt)("em",{parentName:"li"},"Save")," button to store your first secret")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"create your first secret",src:a(2955).Z,width:"1195",height:"766"}),"\nSecret data values have been made visible for demonstration purpose. By default values aren't visible in plain text."),(0,l.kt)("p",null,"After you have created your first secret in Vault, the path is created inside your secret store and can be browsed\neasily."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Vault secret store folder structure",src:a(6209).Z,width:"1195",height:"459"})),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"We strongly suggest to organize secrets in folders based on its intention. Vault will automatically create folders, if\nyou enter a specific path."))),(0,l.kt)("h3",{id:"vault-cli-1"},"Vault Cli"),(0,l.kt)("p",null,"To create a secret using the CLI execute the command ",(0,l.kt)("inlineCode",{parentName:"p"},"vault kv put path/to/secret key1=value2 [key2=value2]"),", example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ vault kv put product-team-example/hello foo=bar\n========= Secret Path =========\nproduct-team-example/data/hello\n\n======= Metadata =======\nKey                Value\n---                -----\ncreated_time       2022-04-14T13:42:08.41991265Z\ncustom_metadata    <nil>\ndeletion_time      n/a\ndestroyed          false\nversion            1\n")),(0,l.kt)("h2",{id:"read-a-secret"},"Read A Secret"),(0,l.kt)("h3",{id:"vault-webui-2"},"Vault WebUI"),(0,l.kt)("p",null,"Login to Vault and browse to the secret you need, and click on the copy icon."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Copy Secret",src:a(8713).Z,width:"1195",height:"272"})),(0,l.kt)("h3",{id:"vault-cli-2"},"Vault CLI"),(0,l.kt)("p",null,"To read a secret using the CLI execute the command ",(0,l.kt)("inlineCode",{parentName:"p"},"vault kv get path/to/secret"),", example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ vault kv get product-team-example/hello\n========= Secret Path =========\nproduct-team-example/data/hello\n\n======= Metadata =======\nKey                Value\n---                -----\ncreated_time       2022-04-14T13:42:08.41991265Z\ncustom_metadata    <nil>\ndeletion_time      n/a\ndestroyed          false\nversion            1\n\n=== Data ===\nKey    Value\n---    -----\nfoo    bar\n")),(0,l.kt)("h2",{id:"see-also"},"See Also"),(0,l.kt)("p",null,"For further information about Hashicorp Vault please refer to their ",(0,l.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/docs"},"documentation"),"."))}m.isMDXComponent=!0},2955:function(e,t,a){t.Z=a.p+"assets/images/vault-add-first-secret-16685febc7222089fb643567e88b6ad8.png"},8713:function(e,t,a){t.Z=a.p+"assets/images/vault-copy-secret-webui-2d612875a920c8636c90802d968e7b6b.png"},9790:function(e,t,a){t.Z=a.p+"assets/images/vault-empty-store-1625abfa0bf03ef1a97483aabc5064bf.png"},6209:function(e,t,a){t.Z=a.p+"assets/images/vault-folder-structure-e805852b8f9cb79f3aa61fb9fd0f6ae1.png"},6690:function(e,t,a){t.Z=a.p+"assets/images/vault-login-page-905d3e9464a4e277303c93d1a0a48d48.png"}}]);
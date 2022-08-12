"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[4690],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),A=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=A(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=A(a),h=n,d=c["".concat(u,".").concat(h)]||c[h]||l[h]||o;return a?r.createElement(d,i(i({ref:t},p),{},{components:a})):r.createElement(d,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var A=2;A<o;A++)i[A]=a[A];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},804:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>A});var r=a(7462),n=(a(7294),a(3905));const o={title:"How to use Two-Factor Authentication (2FA) with GitHub.com"},i=void 0,s={unversionedId:"guides/how-to-use-2fa-with-github",id:"guides/how-to-use-2fa-with-github",title:"How to use Two-Factor Authentication (2FA) with GitHub.com",description:"Starting Friday, 2022-05-20, the 2 Factor Authentication will be set mandatory for every member in the Catena-X NG organization in Github",source:"@site/docs/guides/how-to-use-2fa-with-github.md",sourceDirName:"guides",slug:"/guides/how-to-use-2fa-with-github",permalink:"/docs/guides/how-to-use-2fa-with-github",draft:!1,editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/edit/main/docs/guides/how-to-use-2fa-with-github.md",tags:[],version:"current",frontMatter:{title:"How to use Two-Factor Authentication (2FA) with GitHub.com"},sidebar:"tutorialSidebar",previous:{title:"How to release a helm chart",permalink:"/docs/guides/how-to-release-a-helm-chart"},next:{title:"How to use persistent storage",permalink:"/docs/guides/how-to-use-persistent-storage"}},u={},A=[{value:"What is 2FA and why do we need this?",id:"what-is-2fa-and-why-do-we-need-this",level:2},{value:"How to activate 2FA in GitHub for your account",id:"how-to-activate-2fa-in-github-for-your-account",level:2},{value:"Tips for using 2FA",id:"tips-for-using-2fa",level:2},{value:"How to use a hardware key (example based on YubiKey)",id:"how-to-use-a-hardware-key-example-based-on-yubikey",level:3}],p={toc:A};function l(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"2FA usage will be mandatory",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Starting Friday, 2022-05-20, the 2 Factor Authentication will be set mandatory for every member in the Catena-X NG organization in Github")),(0,n.kt)("h2",{id:"what-is-2fa-and-why-do-we-need-this"},"What is 2FA and why do we need this?"),(0,n.kt)("p",null,"2FA stands for ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Multi-factor_authentication"},"Two-Factor Authentication")," and means that beside one unique ",(0,n.kt)("em",{parentName:"p"},"thing")," which verifies that you are you, a second one is added:"),(0,n.kt)("p",null,"Typically, the first factor is your password and a second one can be an SMS code, RSA Token (typically used in companies for VPN), Tan Apps (for online banking) or authenticator apps on your phone which show a new 5-7 digit number every minute."),(0,n.kt)("p",null,"Loosing a password is very easy and can be achieved over the internet/remote. When you reuse a password it could be leaked by a data breach from a different service. You might have written it down or shared it by accident. It could also be that you get tricked in entering your password in an unsecured webpage."),(0,n.kt)("p",null,"Whatever the attacker tries to get your password, with 2FA they also now need physical access to you which makes those types of attacks much harder."),(0,n.kt)("p",null,"Especially when we write code, security is a very critical factor as your code will run inside other companies. Therefore we enforce 2FA on Github.com."),(0,n.kt)("h2",{id:"how-to-activate-2fa-in-github-for-your-account"},"How to activate 2FA in GitHub for your account"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"open GitHub, login and go to your personal settings by clicking on the avatar in the upper right corner of GitHub")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Choose "',(0,n.kt)("em",{parentName:"p"},"Settings"),'"')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'click "',(0,n.kt)("em",{parentName:"p"},"Password and authentication"),'" in the menue on the left hand side')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'In section "',(0,n.kt)("em",{parentName:"p"},"Two-factor authentication"),'" click on the green button "',(0,n.kt)("em",{parentName:"p"},"Enable two-factor-authentication"),'"'),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"2fa not enabled yet",src:a(4699).Z,width:"765",height:"372"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Confirm with your GitHub password"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"confirm 2fa",src:a(9351).Z,width:"343",height:"191"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Select the method to use for your second factor ("Set up using an app" is preferred)'),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"select 2fa method",src:a(2948).Z,width:"720",height:"465"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Set up a new account with your Authenticator App as described, or follow the other description depending on the hard-/software or other options you have, e.g. Authenticator App"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"setup with authenticator app",src:a(8339).Z,width:"710",height:"525"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Download and save your recovery codes (if the chosen option shows them)"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"2fa done",src:a(198).Z,width:"764",height:"638"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Done, or setup additional authentication methods"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"2fa done with additional",src:a(1313).Z,width:"700",height:"541"})))),(0,n.kt)("h2",{id:"tips-for-using-2fa"},"Tips for using 2FA"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"This is a personal recommendation from us; Feel free to read this section.")),(0,n.kt)("p",null,"2FA is a relatively easy way of making your own data more secure. Plenty of data leaks happened in the last few years and our email accounts have lots of security relevant information (personal data and recovery emails)."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/FIDO_Alliance"},"FIDO Alliance")," was created 2013 to ",(0,n.kt)("a",{parentName:"p",href:"https://envzone.com/why-big-tech-is-striving-for-the-world-without-password/"},'"help reduce the world\u2019s over-reliance on passwords"'),". Out of this efford came ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/FIDO2_Project"},"FIDO2 Project")," to create strong authentication for the web which is extended by ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Universal_2nd_Factor"},"Universal 2nd Factor"),"."),(0,n.kt)("p",null,"All those initiatives made it possible for normal consumers to use hardware keys through browsers and smartphones by supporting NFC."),(0,n.kt)("p",null,"This also lead to well known companies to support U2F. Cloudproviders, Email services, Source code services etc. all support this now."),(0,n.kt)("h3",{id:"how-to-use-a-hardware-key-example-based-on-yubikey"},"How to use a hardware key (example based on YubiKey)"),(0,n.kt)("p",null,"yubico provides one of the most used and supported hardware keys available: The ",(0,n.kt)("a",{parentName:"p",href:"https://www.yubico.com/products/"},"YubiKey"),". The YubiKey comes in different sizes and standards:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Big one with USB-A and NFC: Perfect for your keychain and older devices which do not support usb-c. NFC can be used when you would like to use your key with your smartphone"),(0,n.kt)("li",{parentName:"ul"},"Big one with USB-C and NFC: For your keychain and your smartphone per NFC"),(0,n.kt)("li",{parentName:"ul"},"Big one with USB-C and lightning: For Apple users"),(0,n.kt)("li",{parentName:"ul"},"Medium size with USB-C: Smaller but without NFC"),(0,n.kt)("li",{parentName:"ul"},"Small size in USB-A or USB-C: For being always plugged in (only keep it plugged into devices which are secure -> which are at home for example)")),(0,n.kt)("p",null,"The easiest approach is to have 3 keys (in case of no additional device at home, only 2 are needed):"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"One big YubiKey for your Keychain to be able to login when you are not at home"),(0,n.kt)("li",{parentName:"ol"},"One YubiKey as a backup for your safe at home"),(0,n.kt)("li",{parentName:"ol"},"One small one to have it always plugged in, in your laptop/desktop PC which you always have at home (in case you have one device always at home)")),(0,n.kt)("p",null,"If you buy your hardware key private, you can use it for your personal security and you don't need to move to another yubikey in case you change the company."))}l.isMDXComponent=!0},4699:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/2fa-1-71abbca8b6f69b34cd01f0b61477eef1.png"},9351:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"},2948:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/2fa-3-267b1c1310f2da20cdcd2404618c3fdd.png"},8339:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/2fa-4-deaf4b55acc3398ac05396262a12c711.png"},198:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/2fa-5-4674904422619243c9deca21a536d72e.png"},1313:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/2fa-6-99e9e68a0a9358255cad75e06452d13e.png"}}]);
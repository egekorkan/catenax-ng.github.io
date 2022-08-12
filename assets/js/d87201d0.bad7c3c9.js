"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[3687],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,f=d["".concat(p,".").concat(h)]||d[h]||c[h]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"How to setup GitHub apps"},i=void 0,s={unversionedId:"internal/how-to-setup-apps",id:"internal/how-to-setup-apps",title:"How to setup GitHub apps",description:"This how-to will guide you through the deployment and configuration of GitHub Apps",source:"@site/docs/internal/how-to-setup-apps.md",sourceDirName:"internal",slug:"/internal/how-to-setup-apps",permalink:"/docs/internal/how-to-setup-apps",draft:!1,editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/edit/main/docs/internal/how-to-setup-apps.md",tags:[],version:"current",frontMatter:{title:"How to setup GitHub apps"},sidebar:"tutorialSidebar",previous:{title:"How to setup and AKS cluster via terraform",permalink:"/docs/internal/how-to-setup-aks-cluster-via-terraform"},next:{title:"How to setup Hashicorp Vault",permalink:"/docs/internal/how-to-setup-hashicorp-vault"}},p={},l=[{value:"Context",id:"context",level:2},{value:"Create GitHub App",id:"create-github-app",level:2},{value:"General",id:"general",level:2},{value:"Permissions &amp; events",id:"permissions--events",level:2},{value:"Install App",id:"install-app",level:2},{value:"Additions for the source repository workflow",id:"additions-for-the-source-repository-workflow",level:2},{value:"Additions for the target repository workflow",id:"additions-for-the-target-repository-workflow",level:2}],u={toc:l};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This how-to will guide you through the deployment and configuration of GitHub Apps"),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"As users don't have admin rights on repositories, they can't trigger actions in other repositories. They could use their PATs, but this is seen as bad practice. But as this got requested more often, we set up GitHub Apps which act like a technical user."),(0,o.kt)("p",null,"In this document the source repository is referring to the repository from which an action is initiated, whereas the target repository will be the one where the actions will be called."),(0,o.kt)("h2",{id:"create-github-app"},"Create GitHub App"),(0,o.kt)("p",null,"To create an app follow the offical guide ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/developers/apps/building-github-apps/creating-a-github-app"},"here")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Callback URL needs to be filled out, we just use the standard catena homepage link"),(0,o.kt)("li",{parentName:"ul"},"As we just use a basic setup, options like the webhook URL and device workflow don't need to be configured.")),(0,o.kt)("p",null,"The app then needs to be configured within the organization menu:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Administration",src:n(1657).Z,width:"1282",height:"1141"})),(0,o.kt)("p",null,"The individual configuration is described below."),(0,o.kt)("h2",{id:"general"},"General"),(0,o.kt)("p",null,"From this menu one needs the app ID:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Administration",src:n(1968).Z,width:"1041",height:"213"})),(0,o.kt)("p",null,"Further below a private key needs to be created (You need to download it):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Administration",src:n(7037).Z,width:"844",height:"312"})),(0,o.kt)("p",null,"These settings (app ID and private key) need to be stored as secrets, as the users will can use them in their actions/workflows:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Administration",src:n(6532).Z,width:"1252",height:"757"})),(0,o.kt)("p",null,"In this example PORTAL is the product name:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ORG_PORTAL_DISPATCH_APPID -> app ID from above"),(0,o.kt)("li",{parentName:"ul"},"ORG_PORTAL_DISPATCH_KEY -> content of private key file")),(0,o.kt)("p",null,"When creating the secret, set the scope (=permissions to the source repository)"),(0,o.kt)("h2",{id:"permissions--events"},"Permissions & events"),(0,o.kt)("p",null,"Here only permission for actions need to be set to read and write"),(0,o.kt)("h2",{id:"install-app"},"Install App"),(0,o.kt)("p",null,"Here you need to choose all source and target repositories"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Administration",src:n(7117).Z,width:"1056",height:"866"})),(0,o.kt)("h2",{id:"additions-for-the-source-repository-workflow"},"Additions for the source repository workflow"),(0,o.kt)("p",null,"The products need to add the following steps to their calling action:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'steps:\n- name: Get Token\n  id: get_workflow_token\n  uses: peter-murray/workflow-application-token-action@v1\n  with:\n    application_id: ${{ secrets.ORG_REPO_DISPATCH_APPID }}\n    application_private_key: ${{ secrets.ORG_REPO_DISPATCH_KEY }}      \n- name: trigger-workflow\n  id: call_action\n  env:\n    TOKEN: ${{ steps.get_workflow_token.outputs.token }}\n  run: |\n    curl -v \\\n      --request POST \\\n      --url https://api.github.com/repos/catenax-ng/playground-target/actions/workflows/example.yaml/dispatches \\\n      --header "authorization: Bearer $TOKEN" \\\n      --header "Accept: application/vnd.github.v3+json" \\\n      --data \'{"ref":"test_branch","inputs":{"any_data":"anything","any_data2":"anything2"}}\' \\\n      --fail\n')),(0,o.kt)("h2",{id:"additions-for-the-target-repository-workflow"},"Additions for the target repository workflow"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'name: Demo\non: \n  workflow_dispatch:\n    inputs:\n    # any parameter used in calling workflow needs to be declared here\n    # setting required to false means it\'s an optional parameter\n      any_data:\n        description: "content here"\n        required: true\n        default: "no content"\n      any_data2:\n        description: "more data"\n        required: false\n        default: "no content"\njobs:\n  show_workspace:\n    runs-on: ubuntu-latest\n    steps:\n      - run: echo "event payload ${{ github.event.inputs.any_data }}"\n')))}c.isMDXComponent=!0},1657:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/app1-35d24b2eb258e66cb5dd75266e525de7.png"},1968:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/app2-b1a6593ec70718775dfdd249e6c8bd4f.png"},7037:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/app3-ba9ff71b0a61229fc7166bd44cd94291.png"},6532:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/app4-731def333a2638e3fe3af9d3f48500cb.png"},7117:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/app5-96b88eeaa310ff6748f88abf6838898c.png"}}]);
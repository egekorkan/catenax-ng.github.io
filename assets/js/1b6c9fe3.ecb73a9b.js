"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[62],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6325:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={slug:"/how-to-onboard-teams-in-hotel-budapest"},s="How to onboard teams in 'Hotel Budapest'",p={unversionedId:"internal/how-to-onboard-teams-in-hotel-budapest",id:"internal/how-to-onboard-teams-in-hotel-budapest",title:"How to onboard teams in 'Hotel Budapest'",description:"These guide is",source:"@site/docs/internal/how-to-onboard-teams-in-hotel-budapest.md",sourceDirName:"internal",slug:"/how-to-onboard-teams-in-hotel-budapest",permalink:"/docs/how-to-onboard-teams-in-hotel-budapest",editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/edit/main/docs/internal/how-to-onboard-teams-in-hotel-budapest.md",tags:[],version:"current",frontMatter:{slug:"/how-to-onboard-teams-in-hotel-budapest"},sidebar:"tutorialSidebar",previous:{title:"Internal Guides",permalink:"/docs/internal"}},c={},m=[{value:"Which channel can/should be used to ask for onboarding",id:"which-channel-canshould-be-used-to-ask-for-onboarding",level:2},{value:"What we need from a team member",id:"what-we-need-from-a-team-member",level:2},{value:"Now the person has been invited and added as member to the organization",id:"now-the-person-has-been-invited-and-added-as-member-to-the-organization",level:3},{value:"Creating a Jira-task",id:"creating-a-jira-task",level:2},{value:"Allow argoCD login for teams that want to deploy",id:"allow-argocd-login-for-teams-that-want-to-deploy",level:2},{value:"Create a new argocd project with yaml-file",id:"create-a-new-argocd-project-with-yaml-file",level:2},{value:"Now argoCD access to all existing projects (read-only) and the &#39;own&#39; project (read/write) is possible",id:"now-argocd-access-to-all-existing-projects-read-only-and-the-own-project-readwrite-is-possible",level:3},{value:"Enable access to a private repository via deploy key",id:"enable-access-to-a-private-repository-via-deploy-key",level:2},{value:"Enable access to a private package (central pull secret)",id:"enable-access-to-a-private-package-central-pull-secret",level:2},{value:"Enable access to a private package (own secret over vault)",id:"enable-access-to-a-private-package-own-secret-over-vault",level:2}],d={toc:m};function u(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-onboard-teams-in-hotel-budapest"},"How to onboard teams in 'Hotel Budapest'"),(0,o.kt)("p",null,"These guide is\n",(0,o.kt)("strong",{parentName:"p"},"only for those who operate the environment")),(0,o.kt)("h2",{id:"which-channel-canshould-be-used-to-ask-for-onboarding"},"Which channel can/should be used to ask for onboarding"),(0,o.kt)("p",null,"Teams-channel ",(0,o.kt)("a",{parentName:"p",href:"https://teams.microsoft.com/l/channel/19%3a9a3c4a05a3514d07b973c13e7b468709%40thread.tacv2/CX%2520-%2520CoP%2520DevSecOps?groupId=17b1a2dc-67fb-4a49-a2ed-dd1344321439&tenantId=1ad22c6d-2f08-4f05-a0ba-e17f6ce88380"},"CX - CoP DevSecOps")),(0,o.kt)("p",null,'If the link doesn\'t work for you try: "Communities of Practices" \u2192 "hidden Channels" \u2192 "CX - CoP DevSecOps" in your Catena-X Teams.'),(0,o.kt)("h2",{id:"what-we-need-from-a-team-member"},"What we need from a team member"),(0,o.kt)("p",null,"who wants to login to GitHub Catena-X and deploy"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"GitHub user"),"  "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"GitHub team")," (initially created by DevSecOps team)",(0,o.kt)("br",{parentName:"li"}),"naming convention: 'product-<product-name",">","' to make sure to separate the core repositories with the product repositories  ")),(0,o.kt)("p",null,"on ",'["https://github.com/orgs/catenax-ng/people"]'," ",">"," 'invite member'"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image1.png",src:a(3505).Z,width:"945",height:"119"}),"  "),(0,o.kt)("p",null,"invited person is in the list of \u2018pending invitations\u2019  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image2.png",src:a(9853).Z,width:"216",height:"268"}),"  "),(0,o.kt)("p",null,"invited person gets an email with invitation \u2013 by accepting the invitation, the person is member of the list \u2018members\u2019  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image3.png",src:a(301).Z,width:"208",height:"260"}),"  "),(0,o.kt)("h3",{id:"now-the-person-has-been-invited-and-added-as-member-to-the-organization"},"Now the person has been invited and added as member to the organization"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Troubleshooting:"),(0,o.kt)("br",{parentName:"p"}),"\n","If the person gets no email: the person should check the github notifications-box or/and email spam folder  "),(0,o.kt)("h2",{id:"creating-a-jira-task"},"Creating a Jira-task"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"who wants which access  "),(0,o.kt)("li",{parentName:"ol"},"use \u2018labels\u2019 for differentiate tasks e.g. 'onboarding', 'maintainer switched'  "),(0,o.kt)("li",{parentName:"ol"},"add to current sprint",(0,o.kt)("br",{parentName:"li"}),(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"example of description in a Jira-task:")),(0,o.kt)("br",{parentName:"li"}),"Contact Person: <name of the person",">","  ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Invite to catenax-ng  "),(0,o.kt)("li",{parentName:"ul"},"Invite to team <name of the team (same as github project name)",">","  "),(0,o.kt)("li",{parentName:"ul"},"Setup RBAC rules for team  "),(0,o.kt)("li",{parentName:"ul"},"Setup kubernetes namespace and ArgoCD Project  ")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Situation a:")),(0,o.kt)("br",{parentName:"p"}),"\n","Add person to an existing team:",(0,o.kt)("br",{parentName:"p"}),"\n","give the information about the \u2018maintainer\u2019 who should add the new member to the existing group  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image4.png",src:a(1074).Z,width:"954",height:"573"}),"  "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Situation b:")),(0,o.kt)("br",{parentName:"p"}),"\n","Add person to a non-existing team:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a new team:  ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image5.png",src:a(1013).Z,width:"945",height:"160"}),"  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Team-name (naming convention: 'product-<github project name",">","')  "),(0,o.kt)("li",{parentName:"ul"},"Description: optional  "),(0,o.kt)("li",{parentName:"ul"},"No parent team  "),(0,o.kt)("li",{parentName:"ul"},"Team visibility: visible  "),(0,o.kt)("li",{parentName:"ul"},"Create team  ")),(0,o.kt)("p",null,"Add new member and change role to maintainer  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image6.png",src:a(2332).Z,width:"605",height:"486"}),"  "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Now argoCD login via GitHub is possible!"),(0,o.kt)("br",{parentName:"p"}),"\n",'["https://argo.demo.catena-x.net/"]',"  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image7.png",src:a(4844).Z,width:"945",height:"154"}),"  "),(0,o.kt)("h2",{id:"allow-argocd-login-for-teams-that-want-to-deploy"},"Allow argoCD login for teams that want to deploy"),(0,o.kt)("p",null,"Take \u2018template\u2019 from environment-documentation/hotel-budapest/projects/ duplicate, rename and customize:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Argo project-name: new name of the argo project (in our case: same as github project name)  "),(0,o.kt)("li",{parentName:"ul"},"K8s namespace: new name of the K8s namespace (in our case is the naming convention: 'product-<github project name",">","')  "),(0,o.kt)("li",{parentName:"ul"},"role-name: name of role (freely definable), but recommended to give always the same\nname, e.g. admin. Currently the access is always the same:\nfor all \u2018read-only\u2019, but only for the \u2018own\u2019 namespace read/write rights  "),(0,o.kt)("li",{parentName:"ul"},"team-name: name of the formerly created team ",'[github: "https://github.com/orgs/catenax-ng/teams"]',"  ")),(0,o.kt)("p",null,"add, commit, push new yaml-file in git repository  "),(0,o.kt)("p",null,"the role of the argoCD-project can be found in argoCD:",(0,o.kt)("br",{parentName:"p"}),"\n","argoCD ",">"," settings ",">"," projects ",">"," \u2018project\u2019 ",">"," roles  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image8.png",src:a(8112).Z,width:"883",height:"405"}),"  "),(0,o.kt)("h2",{id:"create-a-new-argocd-project-with-yaml-file"},"Create a new argocd project with yaml-file"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Start (e.g. with PowerShell) from where the yaml-file is located  "),(0,o.kt)("li",{parentName:"ul"},"Check, if in the right cluster:",(0,o.kt)("br",{parentName:"li"}),"kubectl config current-context  "),(0,o.kt)("li",{parentName:"ul"},"run the yaml-file in namespace 'argocd':",(0,o.kt)("br",{parentName:"li"}),"kubectl apply \u2013f <name of yaml-file",">"," -n argocd  ")),(0,o.kt)("h3",{id:"now-argocd-access-to-all-existing-projects-read-only-and-the-own-project-readwrite-is-possible"},"Now argoCD access to all existing projects (read-only) and the 'own' project (read/write) is possible"),(0,o.kt)("h2",{id:"enable-access-to-a-private-repository-via-deploy-key"},"Enable access to a private repository via deploy key"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Create an ssh-key (SHA2), e.g \u201cssh-keygen \u2013t ed25519" without passphrase and save to a safe location  '),(0,o.kt)("li",{parentName:"ul"},"In Github move to the private repository - settings - deploy key  "),(0,o.kt)("li",{parentName:"ul"},"Add deploy key (paste public key into)  "),(0,o.kt)("li",{parentName:"ul"},"In ArgoCD create a repository (settings, Repositories, connect repo using SSH)  "),(0,o.kt)("li",{parentName:"ul"},"Add name, Repository URL, SSH private key data, check \u201cSkip server data\u201d  "),(0,o.kt)("li",{parentName:"ul"},"Now the ArgoCD App can be created  ")),(0,o.kt)("h2",{id:"enable-access-to-a-private-package-central-pull-secret"},"Enable access to a private package (central pull secret)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a PAT within Github user account (machine user)",(0,o.kt)("br",{parentName:"li"}),"settings - Developer settings - Personal access token.",(0,o.kt)("br",{parentName:"li"}),"Be sure to give just the needed rights (read:package will be sufficient to deploy)  "),(0,o.kt)("li",{parentName:"ul"},"Now do a base64 encoding for the PAT",(0,o.kt)("br",{parentName:"li"}),'$ echo -n "<username',">",":<PAT",">",'" | base64  '),(0,o.kt)("li",{parentName:"ul"},"Create a file \u201c.dockerconfigjson\u201d containing the base-64 encoded PAT")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{  \n    "auths":  \n    {  \n        "ghcr.io":  \n            {  \n                "auth":"<base-64 encoded PAT>"  \n            }  \n    }  \n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Do a base 64 encoding for the auth part",(0,o.kt)("br",{parentName:"li"}),'$ echo -n  \'{"auths":{"ghcr.io":{"auth":"<base-64 encoded PAT',">",'"',"}","}}' | base64",(0,o.kt)("br",{parentName:"li"}),"If the output is divided into 2 lines, just add the second line to the first (without space)  "),(0,o.kt)("li",{parentName:"ul"},"Create a dockerconfigjson.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    kind: Secret  \n    type: kubernetes.io/dockerconfigjson  \n    apiVersion: v1  \n    metadata:  \n        name: <name of the pull secret\\>  \n        labels:  \n            app: app-name  \n    data:  \n        .dockerconfigjson: <base64 encoded auth part, output from second base64 encoding\\>  \n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Then add the secret to the cluster",(0,o.kt)("br",{parentName:"li"}),"kubectl create -f dockerconfigjson.yaml  "),(0,o.kt)("li",{parentName:"ul"},"pull secret has to be added to the product\xb4s code")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"imagePullSecrets:  \n    - name: <name of the pull secret>\n")),(0,o.kt)("h2",{id:"enable-access-to-a-private-package-own-secret-over-vault"},"Enable access to a private package (own secret over vault)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"to be done")))}u.isMDXComponent=!0},3505:function(e,t,a){t.Z=a.p+"assets/images/image1-360db49ed9fd5a6ebf6112a9a241738d.png"},9853:function(e,t,a){t.Z=a.p+"assets/images/image2-06483c0368b6a926c7fd6e0fdaa14f80.png"},301:function(e,t,a){t.Z=a.p+"assets/images/image3-33c3a215f225813f8565bea3d1433db8.png"},1074:function(e,t,a){t.Z=a.p+"assets/images/image4-59bce1fb3f8611126a4a37c225320f81.png"},1013:function(e,t,a){t.Z=a.p+"assets/images/image5-25e28b702b600f79cdbdc17c7c273759.png"},2332:function(e,t,a){t.Z=a.p+"assets/images/image6-c723d86d06e8ce20d1ca4aa52de85fb0.png"},4844:function(e,t,a){t.Z=a.p+"assets/images/image7-99fa76cf78521f33239547b4d80ab91d.png"},8112:function(e,t,a){t.Z=a.p+"assets/images/image8-bc5c32a491dd6652515e4b3514ddf0b1.png"}}]);
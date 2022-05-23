"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[4580],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(a),u=r,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||o;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2242:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return c}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={title:"How To Onboard Product-Teams To Any Environment",slug:"/how-to-onboard-teams-to-any-environment"},p=void 0,m={unversionedId:"internal/how-to-onboard-teams-to-any-environment",id:"internal/how-to-onboard-teams-to-any-environment",title:"How To Onboard Product-Teams To Any Environment",description:"This guide is only for those who operate the environment",source:"@site/docs/internal/how-to-onboard-teams-to-any-environment.md",sourceDirName:"internal",slug:"/how-to-onboard-teams-to-any-environment",permalink:"/docs/how-to-onboard-teams-to-any-environment",editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/edit/main/docs/internal/how-to-onboard-teams-to-any-environment.md",tags:[],version:"current",frontMatter:{title:"How To Onboard Product-Teams To Any Environment",slug:"/how-to-onboard-teams-to-any-environment"},sidebar:"tutorialSidebar",previous:{title:"Internal Guides",permalink:"/docs/internal"},next:{title:"How to onboard teams to sonarcloud",permalink:"/docs/how-to-onboard-teams-to-sonarcloud"}},s={},c=[{value:"Create A Jira Task",id:"create-a-jira-task",level:2},{value:"Team Onboarding",id:"team-onboarding",level:3},{value:"Member Onboarding",id:"member-onboarding",level:3},{value:"GitHub - Prerequisites",id:"github---prerequisites",level:2},{value:"Invite Someone To The GitHub Organization",id:"invite-someone-to-the-github-organization",level:3},{value:"GitHub Team",id:"github-team",level:3},{value:"Add a Member To A GitHub Team",id:"add-a-member-to-a-github-team",level:3},{value:"Vault",id:"vault",level:2},{value:"Enable New Secret Engine",id:"enable-new-secret-engine",level:3},{value:"Create Policies",id:"create-policies",level:3},{value:"Create GitHub Auth Mapping",id:"create-github-auth-mapping",level:3},{value:"AppRole",id:"approle",level:3},{value:"Create AppRole",id:"create-approle",level:4},{value:"The Secret ID",id:"the-secret-id",level:4},{value:"The Role ID",id:"the-role-id",level:4},{value:"Store The Teams role_id And secret_id In Vault",id:"store-the-teams-role_id-and-secret_id-in-vault",level:3},{value:"ArgoCD",id:"argocd",level:2},{value:"Create ArgoCD Project",id:"create-argocd-project",level:3},{value:"Create AVP Secret",id:"create-avp-secret",level:3},{value:"Prepare Deployment Of ArgoCD Project And AVP Secret",id:"prepare-deployment-of-argocd-project-and-avp-secret",level:3},{value:"Create Pull Request",id:"create-pull-request",level:3},{value:"Special Topics",id:"special-topics",level:2},{value:"Enable access to a private repository via deploy key",id:"enable-access-to-a-private-repository-via-deploy-key",level:3},{value:"Enable access to a private package (central pull secret)",id:"enable-access-to-a-private-package-central-pull-secret",level:3}],d={toc:c};function u(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This guide is only for those who operate the environment"))),(0,o.kt)("h2",{id:"create-a-jira-task"},"Create A Jira Task"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This chapter needs to be rewritten/redefined due to unclear statements in former version of this document!"))),(0,o.kt)("h3",{id:"team-onboarding"},"Team Onboarding"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"who wants which access"),(0,o.kt)("li",{parentName:"ol"},"use \u2018labels\u2019 for differentiate tasks e.g. 'onboarding', 'maintainer switched'"),(0,o.kt)("li",{parentName:"ol"},"add to current sprint")),(0,o.kt)("h3",{id:"member-onboarding"},"Member Onboarding"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"who wants which access"),(0,o.kt)("li",{parentName:"ol"},"use \u2018labels\u2019 for differentiate tasks e.g. 'onboarding', 'maintainer switched'"),(0,o.kt)("li",{parentName:"ol"},"add to current sprint")),(0,o.kt)("h2",{id:"github---prerequisites"},"GitHub - Prerequisites"),(0,o.kt)("h3",{id:"invite-someone-to-the-github-organization"},"Invite Someone To The GitHub Organization"),(0,o.kt)("p",null,"Prerequisites:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GitHub username, Full Name or email address of person to onboard"),(0,o.kt)("li",{parentName:"ul"},"GitHub team name to invite someone to (the team must have been created by DevSecOps team)")),(0,o.kt)("p",null,"To invite a person to a specific GitHub team, follow these steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In GitHub organization go to ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/orgs/catenax-ng/people"},"People")),(0,o.kt)("li",{parentName:"ul"},"Click button ",(0,o.kt)("em",{parentName:"li"},"Invite member")," on the right side"),(0,o.kt)("li",{parentName:"ul"},"In the field ",(0,o.kt)("em",{parentName:"li"},"Search by username, full name or email address")," enter one of the suggestions and select user"),(0,o.kt)("li",{parentName:"ul"},"Click on ",(0,o.kt)("em",{parentName:"li"},"Invite")," to finally invite someone to CatenaX-NG GitHub organization")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The person must click/accept the invitation to our GitHub organization before someone can be added to one of our\norganization teams."))),(0,o.kt)("h3",{id:"github-team"},"GitHub Team"),(0,o.kt)("p",null,"If a team requests for initial onboarding to CatenaX-NG GitHub organization, follow these steps to create a team inside\nGitHub organization:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In GitHub organization go to ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/orgs/catenax-ng/teams"},"Teams")," and click button ",(0,o.kt)("em",{parentName:"li"},"New team")," in the\nright\nupper corner"),(0,o.kt)("li",{parentName:"ul"},"Insert ",(0,o.kt)("em",{parentName:"li"},"Team name")," with naming schema ",(0,o.kt)("inlineCode",{parentName:"li"},"product-<productName>")),(0,o.kt)("li",{parentName:"ul"},"Add optional ",(0,o.kt)("em",{parentName:"li"},"Description")),(0,o.kt)("li",{parentName:"ul"},"Apply defaults for ",(0,o.kt)("em",{parentName:"li"},"Parent team")," and ",(0,o.kt)("em",{parentName:"li"},"Team visibility")),(0,o.kt)("li",{parentName:"ul"},"Click button ",(0,o.kt)("em",{parentName:"li"},"Create team")," to finally create the team")),(0,o.kt)("h3",{id:"add-a-member-to-a-github-team"},"Add a Member To A GitHub Team"),(0,o.kt)("p",null,"Prerequisites:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Person must have accepted the invitation to the GitHub organization"),(0,o.kt)("li",{parentName:"ul"},"GitHub username of whom to onboard (person must have been invited ",(0,o.kt)("em",{parentName:"li"},"and")," joined our GitHub organization)"),(0,o.kt)("li",{parentName:"ul"},"GitHub team to invite to (the team must have been created by DevSecOps team)")),(0,o.kt)("p",null,"To add a member to a GitHub team, follow these steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In GitHub organization go to ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/orgs/catenax-ng/teams"},"Teams")),(0,o.kt)("li",{parentName:"ul"},"Click on the team name a member should be added to"),(0,o.kt)("li",{parentName:"ul"},"Click on ",(0,o.kt)("em",{parentName:"li"},"Members")," in the top menu inside the selected GitHub team"),(0,o.kt)("li",{parentName:"ul"},"Click on the green button ",(0,o.kt)("em",{parentName:"li"},"Add a member")," in the upper right"),(0,o.kt)("li",{parentName:"ul"},"Type the GitHub ",(0,o.kt)("em",{parentName:"li"},"username, full name, or email addess")," and click ",(0,o.kt)("em",{parentName:"li"},"Invite"))),(0,o.kt)("p",null,"After the member has been added to the GitHub team, check the checkbox in front of the new member and change role to ",(0,o.kt)("em",{parentName:"p"},"\nMaintainer"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GH Role Maintainer",src:a(6584).Z,width:"725",height:"384"})),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If the person gets no email: the person should check the GitHub notifications-box or/and email spam folder."))),(0,o.kt)("h2",{id:"vault"},"Vault"),(0,o.kt)("p",null,"To provide a product-team access to our Vault instance, following onboarding steps must be performed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"enable (create) a new ",(0,o.kt)("em",{parentName:"li"},"Secrets")," engine"),(0,o.kt)("li",{parentName:"ul"},"create ",(0,o.kt)("em",{parentName:"li"},"Policies")),(0,o.kt)("li",{parentName:"ul"},"create GitHub auth mapping"),(0,o.kt)("li",{parentName:"ul"},"create AppRole"),(0,o.kt)("li",{parentName:"ul"},"store AppRole specifics into DevSecOps Vault secret store")),(0,o.kt)("h3",{id:"enable-new-secret-engine"},"Enable New Secret Engine"),(0,o.kt)("p",null,"To enable/create a new secret engine for a product-team,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"use Vault WebUI"),(0,o.kt)("li",{parentName:"ul"},"in ",(0,o.kt)("em",{parentName:"li"},"Secrets")," section click on ",(0,o.kt)("em",{parentName:"li"},"Enable new engine")),(0,o.kt)("li",{parentName:"ul"},"on Page ",(0,o.kt)("em",{parentName:"li"},"Enable a Secrets Engine")," select ",(0,o.kt)("em",{parentName:"li"},"KV")," in ",(0,o.kt)("em",{parentName:"li"},"Generic")," section and ",(0,o.kt)("em",{parentName:"li"},"Next")," on the bottom"),(0,o.kt)("li",{parentName:"ul"},"replace ",(0,o.kt)("em",{parentName:"li"},"kv")," in ",(0,o.kt)("em",{parentName:"li"},"Path")," field with the product-team name following the naming schema ",(0,o.kt)("inlineCode",{parentName:"li"},"product-productName")," (\ne.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"product-edc"),")"),(0,o.kt)("li",{parentName:"ul"},"use defaults for ",(0,o.kt)("em",{parentName:"li"},"Maximum number of versions, Require Check and Set, Automate secret deletion, Method Options")),(0,o.kt)("li",{parentName:"ul"},"click on ",(0,o.kt)("em",{parentName:"li"},"Enable Engine"))),(0,o.kt)("h3",{id:"create-policies"},"Create Policies"),(0,o.kt)("p",null,"There will be 2 policies created for each team, following this naming schema:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"product-productName")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"product-productName-ro"))),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"product-productName")," policy will be applied to personal auth methods (as of now GitHub Token), the ",(0,o.kt)("em",{parentName:"p"},"\nproduct-productName-ro")," policy will be applied to AppRole auth method."),(0,o.kt)("p",null,"To create the policies, login to Vault and"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"click on ",(0,o.kt)("em",{parentName:"p"},"Policies")," in the top menu")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"click on ",(0,o.kt)("em",{parentName:"p"},"Create ACL policy +"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"enter the policy name in the ",(0,o.kt)("em",{parentName:"p"},"Name")," field")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"enter following to ",(0,o.kt)("em",{parentName:"p"},"Policy")," field:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"for the ",(0,o.kt)("em",{parentName:"li"},"product-productName")," policy")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'path "product-productName/*" {\n  capabilities = ["create", "read", "update", "delete", "list"]\n}\n')),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"for the ",(0,o.kt)("em",{parentName:"li"},"product-productName-ro")," policy")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'path "product-productName/*" {\n  capabilities = ["read"]\n}\n')))),(0,o.kt)("h3",{id:"create-github-auth-mapping"},"Create GitHub Auth Mapping"),(0,o.kt)("p",null,"To enable GitHub Token auth for any product-team a GitHub auth mapping has to be created. To create the mapping Vault\nCLI is required."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"vault write auth/github/map/teams/product-team-name value=product-team-name\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"value=product-team-name")," links to the policy ",(0,o.kt)("em",{parentName:"p"},"product-productName")," created in the step before."),(0,o.kt)("p",{parentName:"div"},"To be able to use the Vault CLI please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/how-to-use-vault#vault-cli"},"How to use Vault docu")))),(0,o.kt)("h3",{id:"approle"},"AppRole"),(0,o.kt)("p",null,"Following steps have to be performed as of now manually. It's planned to create a script bases automation for this in\nPI4."),(0,o.kt)("h4",{id:"create-approle"},"Create AppRole"),(0,o.kt)("p",null,"For each team to onboard an AppRole has to be created using the Vault CLI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vault write auth/approle/role/product-productName \\\n    secret_id_ttl=10m \\\n    token_num_uses=10 \\\n    token_ttl=20m \\\n    token_max_ttl=30m \\\n    secret_id_num_uses=40\n")),(0,o.kt)("p",null,"After the AppRole has been created for the team, ",(0,o.kt)("em",{parentName:"p"},"secret_id")," and ",(0,o.kt)("em",{parentName:"p"},"role_id")," have to be issued/read."),(0,o.kt)("h4",{id:"the-secret-id"},"The Secret ID"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"secret_id")," has to be issued by"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"vault write -f auth/approle/role/product-productName/secret-id\n")),(0,o.kt)("p",null,"The command will output the ",(0,o.kt)("em",{parentName:"p"},"secret_id")," for ",(0,o.kt)("em",{parentName:"p"},"product-productName")," AppRole. Remember the ",(0,o.kt)("em",{parentName:"p"},"secret_id")," for later use."),(0,o.kt)("h4",{id:"the-role-id"},"The Role ID"),(0,o.kt)("p",null,"Despite of the ",(0,o.kt)("em",{parentName:"p"},"secret_id")," the role Id must not be issued but can be read:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"vault read auth/approle/role/product-productName/role-id\n")),(0,o.kt)("p",null,"The command will output the ",(0,o.kt)("em",{parentName:"p"},"role_id")," for ",(0,o.kt)("em",{parentName:"p"},"product-productName")," AppRole. Remember the ",(0,o.kt)("em",{parentName:"p"},"role_id")," for later use."),(0,o.kt)("h3",{id:"store-the-teams-role_id-and-secret_id-in-vault"},"Store The Teams role_id And secret_id In Vault"),(0,o.kt)("p",null,"For later usage of team specific AppRole ",(0,o.kt)("em",{parentName:"p"},"role_id")," and ",(0,o.kt)("em",{parentName:"p"},"secret_id")," we've to store them in our DevSecOps Vault:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"enter ",(0,o.kt)("em",{parentName:"li"},"devsecops")," secret engine"),(0,o.kt)("li",{parentName:"ul"},"browse to ",(0,o.kt)("em",{parentName:"li"},"avp_config")),(0,o.kt)("li",{parentName:"ul"},"click on ",(0,o.kt)("em",{parentName:"li"},"Create secret+")," in the right upper"),(0,o.kt)("li",{parentName:"ul"},"enter ",(0,o.kt)("em",{parentName:"li"},"avp-config/product-productName")," in ",(0,o.kt)("em",{parentName:"li"},"Path for this secret")," and create ",(0,o.kt)("em",{parentName:"li"},"Secret data")," for",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"role_id"),(0,o.kt)("li",{parentName:"ul"},"secret_id\n",(0,o.kt)("img",{alt:"Create Vault secret for product-team specific AppRole",src:a(1229).Z,width:"941",height:"572"}))))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This secret will be used for later creation of ",(0,o.kt)("em",{parentName:"p"},"vault-secret")," to enable the teams to use Vault with ArgoCD."))),(0,o.kt)("h2",{id:"argocd"},"ArgoCD"),(0,o.kt)("p",null,"To provide a product-team access to the Hotel Budapest infrastructure following onboarding steps must be performed (all\nsteps are related to repository ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/catenax-ng/k8s-cluster-stack"},"k8s_cluster_stack"),"):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"create ArgoCD project"),(0,o.kt)("li",{parentName:"ul"},"create AVP secret"),(0,o.kt)("li",{parentName:"ul"},"deploy ArgoCD project and AVP secret")),(0,o.kt)("p",null,"Create a new branch in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/catenax-ng/k8s-cluster-stack"},"k8s_cluster_stack")," repo for onboarding a new\nproduct-team to ArgoCD."),(0,o.kt)("h3",{id:"create-argocd-project"},"Create ArgoCD Project"),(0,o.kt)("p",null,"Create a manifest for the new product-team to create:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"k8s namespace"),(0,o.kt)("li",{parentName:"ul"},"ArgoCD project:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Namespace\nmetadata:\n  name: product-productName\n---\napiVersion: argoproj.io/v1alpha1\nkind: AppProject\nmetadata:\n  name: product-productName\n  namespace: argocd\nspec:\n  description: Project for product-productName\n  sourceRepos:\n    - "*"\n  destinations:\n    - namespace: product-productName\n      server: https://kubernetes.default.svc\n  # Allow all namespaced-scoped resources to be created, except for ResourceQuota, LimitRange, NetworkPolicy\n  namespaceResourceBlacklist:\n    - group: ""\n      kind: ResourceQuota\n    - group: ""\n      kind: LimitRange\n    - group: ""\n      kind: NetworkPolicy\n  roles:\n    - name: team-admin\n      description: All access to applications inside project-bpdm. Read only on project itself\n      policies:\n        - p, proj:product-productName:team-admin, applications, *, product-productName/*, allow\n      groups:\n        - catenax-ng:product-productName\n')),(0,o.kt)("p",null,"Store this manifest in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/catenax-ng/k8s-cluster-stack"},"k8s-cluster-stack")," repo in\npath ",(0,o.kt)("inlineCode",{parentName:"p"},"environments/hotel-budapest/argo-projects/"),"."),(0,o.kt)("h3",{id:"create-avp-secret"},"Create AVP Secret"),(0,o.kt)("p",null,"To enable the product-team to use Vault with ArgoCD create a team specific AVP secret manifest:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Secret\nmetadata:\n  annotations:\n    avp.kubernetes.io/path: "devsecops/data/avp-config/product-productName"\n  name: vault-secret\n  namespace: product-productName\ntype: Opaque\nstringData:\n  VAULT_ADDR: https://vault.demo.catena-x.net/\n  AVP_TYPE: vault\n  AVP_AUTH_TYPE: approle\n  AVP_ROLE_ID: <role_id>\n  AVP_SECRET_ID: <secret_id>\n')),(0,o.kt)("p",null,"Store this manifest in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/catenax-ng/k8s-cluster-stack"},"k8s-cluster-stack")," repo in\npath ",(0,o.kt)("inlineCode",{parentName:"p"},"environments/hotel-budapest/avp-secrets/"),"."),(0,o.kt)("p",null,"The secret will be called ",(0,o.kt)("em",{parentName:"p"},"vault-secret")," and stored in k8s namespace related to product-team."),(0,o.kt)("h3",{id:"prepare-deployment-of-argocd-project-and-avp-secret"},"Prepare Deployment Of ArgoCD Project And AVP Secret"),(0,o.kt)("p",null,"To deploy k8s namespace, ArgoCD Project and the AVP secret to Hotel Budapest you'll have to add the two created manifest\nfiles to ",(0,o.kt)("inlineCode",{parentName:"p"},"environments/hotel-budapest/kustomization.yaml"),"\nin ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/catenax-ng/k8s-cluster-stack"},"k8s-cluster-stack")," repo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\n\n#namespace: argocd\n\nresources:\n  [ ... ]\n  - argo-projects/product-productName.yaml\n  - avp-secrets/productName-vault-secret.yaml\n  [ ... ]\n")),(0,o.kt)("p",null,"Please add the new product-team in alphabetical order to the ",(0,o.kt)("em",{parentName:"p"},"resources")," section of file ",(0,o.kt)("inlineCode",{parentName:"p"},"kustomization.yaml"),"."),(0,o.kt)("h3",{id:"create-pull-request"},"Create Pull Request"),(0,o.kt)("p",null,"After you have created the three files"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"environments/hotel-budapest/argo-projects/product-productName.yaml")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"environments/hotel-budapest/avp-config/productName-team-vault-secret.yaml")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"environments/hotel-budapest/kustomization.yaml"))),(0,o.kt)("p",null,"create a PR for your branch. After the PR has been approved and merged into main branch, the new team will be\nautomatically deployed to Hotel Budapest cluster (via ArgoCD application ",(0,o.kt)("em",{parentName:"p"},"hotel-budapest-config")," at ArgoCD ",(0,o.kt)("em",{parentName:"p"},"CORE"),"\ncluster)."),(0,o.kt)("h2",{id:"special-topics"},"Special Topics"),(0,o.kt)("h3",{id:"enable-access-to-a-private-repository-via-deploy-key"},"Enable access to a private repository via deploy key"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The project/product has to follow the steps which can be found\nhere: ",(0,o.kt)("a",{parentName:"p",href:"guides/how-to-prepare-a-private-repo"},"How to prepare a private repo"),"."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("inlineCode",{parentName:"p"},"catenax-ng\\k8s-cluster-stack\\environments\\hotel-budapest\\argo-repos"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"<productName>-repo.yaml"),", e.g. for ",(0,o.kt)("em",{parentName:"p"},"product-semantics")," (",(0,o.kt)("inlineCode",{parentName:"p"},"product-semantics-repo.yaml"),"):"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Secret\nmetadata:\n  name: product-semantics-repo\n  namespace: argocd\n  annotations:\n    avp.kubernetes.io/path: "semantics/data/deploy-key"\n  labels:\n    argocd.argoproj.io/secret-type: repository\nstringData:\n  type: git\n  url: git@github.com:catenax-ng/product-semantics\n  name: product-semantics-repo\n  project: project-semantics\n  sshPrivateKey: |\n    <semantics-deploy-key>\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add following line to ",(0,o.kt)("inlineCode",{parentName:"p"},"environments/hotel-budapest/kustomization.yaml")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- argo-repos/product-semantics-repo.yaml\n")))),(0,o.kt)("h3",{id:"enable-access-to-a-private-package-central-pull-secret"},"Enable access to a private package (central pull secret)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a PAT within GitHub user account (machine user)\nsettings - Developer settings - Personal access token.\nBe sure to give just the needed rights (read:package will be sufficient to deploy)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Now do a base64 encoding for the PAT\n$ echo -n "<username',">",":<PAT",">",'" | base64')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a file ",(0,o.kt)("inlineCode",{parentName:"p"},".dockerconfigjson")," containing the base-64 encoded PAT"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "auths": {\n    "ghcr.io": {\n      "auth": "<base-64 encoded PAT>"\n    }\n  }\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Do a base 64 encoding for the auth part"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'echo -n\'{"auths":{"ghcr.io":{"auth":"<base-64 encoded PAT>"}}}\' | base64\n')),(0,o.kt)("p",{parentName:"li"},"If the output is divided into 2 lines, just add the second line to the first (without space)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a file ",(0,o.kt)("inlineCode",{parentName:"p"},"dockerconfigjson.yaml"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Secret\ntype: kubernetes.io/dockerconfigjson\napiVersion: v1\nmetadata:\n  name: budapest-machine-user-read-package\n  labels:\n    app: app-name\ndata:\n  .dockerconfigjson: <base64 encoded auth part, output from second base64 encoding>\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Then add the secret to the cluster"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create -f dockerconfigjson.yaml\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Pull secret has to be added to the product\xb4s code"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"imagePullSecrets:\n  - name: <name of the pull secret>\n")))))}u.isMDXComponent=!0},6584:function(e,t,a){t.Z=a.p+"assets/images/gh-add-team-member-role-28233c9cf9e261efb285ad2910e63e24.png"},1229:function(e,t,a){t.Z=a.p+"assets/images/vault-avp-config-fe0e36c24a796ac982a13b046e9182e4.png"}}]);
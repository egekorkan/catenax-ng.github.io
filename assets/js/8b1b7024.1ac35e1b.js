"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[5268],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,h=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4230:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={title:"How to setup and AKS cluster via terraform"},s=void 0,c={unversionedId:"internal/how-to-setup-aks-cluster-via-terraform",id:"internal/how-to-setup-aks-cluster-via-terraform",title:"How to setup and AKS cluster via terraform",description:"This how-to will guide you through the setup of a new AKS cluster via terraform. It is based on the terraform scripts in",source:"@site/docs/internal/how-to-setup-aks-cluster-via-terraform.md",sourceDirName:"internal",slug:"/internal/how-to-setup-aks-cluster-via-terraform",permalink:"/docs/internal/how-to-setup-aks-cluster-via-terraform",editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/edit/main/docs/internal/how-to-setup-aks-cluster-via-terraform.md",tags:[],version:"current",frontMatter:{title:"How to setup and AKS cluster via terraform"},sidebar:"tutorialSidebar",previous:{title:"How to onboard teams to sonarcloud",permalink:"/docs/how-to-onboard-teams-to-sonarcloud"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Terraform state",id:"terraform-state",level:2},{value:"Creating the AKS cluster",id:"creating-the-aks-cluster",level:2},{value:"Removing existing terraform config",id:"removing-existing-terraform-config",level:3},{value:"Initialize terraform",id:"initialize-terraform",level:3},{value:"Creating and applying the terraform plan",id:"creating-and-applying-the-terraform-plan",level:3},{value:"Verifying the AKS resources are created",id:"verifying-the-aks-resources-are-created",level:2}],f={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This how-to will guide you through the setup of a new AKS cluster via terraform. It is based on the terraform scripts in\nour ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/catenax-ng/k8s-cluster-stack"},"k8s-cluster-stack")," repository."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Terraform is run by CLI on your local machine. We are not using any Pipelines for that. Therefor you need to install the\nterraform CLI for your operating system either by package manager for your OS, or by downloadable installer\nfrom ",(0,o.kt)("a",{parentName:"p",href:"https://www.terraform.io/downloads"},"https://www.terraform.io/downloads"),". You can verify your installation by\nrunning a command like ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform --version")," from your terminal."),(0,o.kt)("p",null,"We assign service principals to our AKS clusters, that we can later use as technical user for the connection from our\ncore ArgoCD instance. If you do not already have a service principal, that you want to use, you can create one with the\nfollowing commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Logging in with your personal Azure account\naz login --tenant catenax.onmicrosoft.com\n# Creating a service principal, without assigning it to any resources/roles yet.\naz ad sp create-for-rbac --skip-assignment\n")),(0,o.kt)("p",null,"You'll need the 'client id' and 'secret id' values later on."),(0,o.kt)("h2",{id:"terraform-state"},"Terraform state"),(0,o.kt)("p",null,"Terraform uses ",(0,o.kt)("a",{parentName:"p",href:"https://www.terraform.io/language/state"},"'state'")," to track status and differences of your real world\nresources and your configuration. While being very useful in most situation, we actively decided to NOT manage/save the\nterraform state to track our AKS cluster resources. We think, that sharing and storing the state file is to much of an\neffort."),(0,o.kt)("p",null,"In our case of demonstration environments the impact of recreating the cluster from scratch and deploying all the tools\nand apps is not too high."),(0,o.kt)("h2",{id:"creating-the-aks-cluster"},"Creating the AKS cluster"),(0,o.kt)("p",null,"The following steps show you how to..."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"initialize terraform"),(0,o.kt)("li",{parentName:"ul"},"create a terrform plan"),(0,o.kt)("li",{parentName:"ul"},"apply that plan to your Azure subscription")),(0,o.kt)("p",null,"It is assumed, that before running any terraform commands, you cloned\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/catenax-ng/k8s-cluster-stack"},"k8s-cluster-stack"),"\nrepository. You should then open a terminal session and navigate to the repository path."),(0,o.kt)("p",null,"For the following instructions it is also assumed, that you already navigated to the AKS related terraform directory,\nwhich is at ",(0,o.kt)("inlineCode",{parentName:"p"},"/terraform/01_core_cluster/")," in the repository."),(0,o.kt)("h3",{id:"removing-existing-terraform-config"},"Removing existing terraform config"),(0,o.kt)("p",null,"We always run the AKS cluster creation from a clean working directory. So in case you did run any terraform commands\nbefore, there are some files, that could disturb the clean run. To get rid of these files remove state files, plans and\nthe .terraform directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"rm *.tfstate*\nrm *.tfplan\nrm -rf .terraform\n")),(0,o.kt)("h3",{id:"initialize-terraform"},"Initialize terraform"),(0,o.kt)("p",null,"Before you can create or apply a terraform plan, you have to ",(0,o.kt)("a",{parentName:"p",href:"https://www.terraform.io/cli/commands/init"},"initialize"),"\nthe terraform working directory by running ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform init"),"."),(0,o.kt)("p",null,"This will initialize the necessary modules and download plugins for the used providers."),(0,o.kt)("h3",{id:"creating-and-applying-the-terraform-plan"},"Creating and applying the terraform plan"),(0,o.kt)("p",null,"A terrform ",(0,o.kt)("a",{parentName:"p",href:"https://www.terraform.io/cli/commands/plan"},"plan")," is an execution plan that will give you a preview about\nthe changes to your infrastructure. As input for the plan, you'll need to specify a set of variable values. Most of the\nvariables are already set with sane defaults. A mandatory variable, that you need to specify is ",(0,o.kt)("inlineCode",{parentName:"p"},"environment_name"),". To\nset this variable, create a file named after the environment you want to create with the ending '.tfvars' in the\n'01_core_cluster/environments/' directory. The value is specified as key-value-pair. Another useful variable that you\ncan set is ",(0,o.kt)("inlineCode",{parentName:"p"},"k8s_vm_size"),", which will specify the Azure specific VM type, that is used for the k8s nodes."),(0,o.kt)("p",null,"An example tfvars file could look like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hcl"},'# Example terraform AKS environment variable specification\n# /terraform/01_core_cluster/core.tfvars\nenvironment_name = "core"\nk8s_vm_size      = "Standard_D8s_v4"\n')),(0,o.kt)("p",null,"Beside these variables, that you can safely commit to the repository, you also need to specify the client id and client\nsecret of the service principal, that should be assigned to the cluster. For this kind of variables, terraform provides\na way to set specific environment variables, that have to be of the form\n",(0,o.kt)("inlineCode",{parentName:"p"},"TF_VAR_<variable-name>"),". You can set the service principal config like follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"export TF_VAR_service_principal_client_id=<sp client id>\nexport TF_VAR_service_principal_client_secret=<sp client secret>\n")),(0,o.kt)("p",null,"With the variables specified in your tfvars and the service principal config set via environment variable, you can\ncreate the plan and apply it to Azure with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# replace <environment> with the actual name of the environment you chose\nterraform plan -var-file=environments/<environment>.tfvars -out <environment>.plan\nterraform apply <environment>.plan\n")),(0,o.kt)("h2",{id:"verifying-the-aks-resources-are-created"},"Verifying the AKS resources are created"),(0,o.kt)("p",null,"If you successfully applied the terraform plan, you will find a resource group with the naming pattern ",(0,o.kt)("inlineCode",{parentName:"p"},"cx-<envname>-rg"),"\nin your subscription in the ",(0,o.kt)("a",{parentName:"p",href:"https://portal.azure.com/"},"Azure portal"),". Part of that resource group will be your newly\ncreated AKS cluster."),(0,o.kt)("p",null,"You will also find a public IP with the naming pattern ",(0,o.kt)("inlineCode",{parentName:"p"},"cx-<envname>-public-ip")," in a slightly different resource group,\nthat Azure created automatically for the kubernetes nodes pool."))}m.isMDXComponent=!0}}]);
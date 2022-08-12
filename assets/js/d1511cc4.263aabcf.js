"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[8117],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),y=u(n),m=a,d=y["".concat(c,".").concat(m)]||y[m]||p[m]||i;return n?r.createElement(d,o(o({ref:t},l),{},{components:n})):r.createElement(d,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},4170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:3},o="How to integrate Trivy",s={unversionedId:"security/how-to-integrate-trivy",id:"security/how-to-integrate-trivy",title:"How to integrate Trivy",description:"We scan containers with Trivy.",source:"@site/docs/security/how-to-integrate-trivy.md",sourceDirName:"security",slug:"/security/how-to-integrate-trivy",permalink:"/docs/security/how-to-integrate-trivy",draft:!1,editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/edit/main/docs/security/how-to-integrate-trivy.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"How to integrate Veracode to your JIRA project",permalink:"/docs/security/how-to-integrate-veracode-to-your-jira-project"},next:{title:"How to integrate GitGuardianShield",permalink:"/docs/security/how-to-integrate-gitguardianshield"}},c={},u=[],l={toc:u};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-integrate-trivy"},"How to integrate Trivy"),(0,a.kt)("p",null,"We ",(0,a.kt)("strong",{parentName:"p"},"scan containers")," with Trivy."),(0,a.kt)("p",null,"Add the following GitHub action ",(0,a.kt)("em",{parentName:"p"},"trivy.yml")," to your repository workflows."),(0,a.kt)("p",null,"In order for Trivy to scan the correct GitHub packages, they must be specified in the action."),(0,a.kt)("p",null,"Integration steps per GitHub package:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy job ",(0,a.kt)("inlineCode",{parentName:"p"},"analyze-<REPLACE-ME container name\\>"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Replace the name of the job with the name of the GitHub package - green box.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"image-ref")," with the yellow box of the GitHub package."))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In order to always scan the latest GitHub package, a tag (red box) must be set for the packages and specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},"image-ref"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"github-packages-example.png",src:n(2051).Z,width:"764",height:"445"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# Depending on the location of your Docker container\n# you need to change the path to the specific Docker registry.\n#\nname: "Trivy"\n\non:\n  push:\n    branches: [main]\n  # pull_request:\n  # The branches below must be a subset of the branches above\n  # branches: [ main ]\n  # paths-ignore:\n  #   - "**/*.md"\n  #   - "**/*.txt"\n  schedule:\n    # Once a day\n    - cron: "0 0 * * *"\n  workflow_dispatch:\n  # Trigger manually\n\njobs:\n  analyze-config:\n    runs-on: ubuntu-latest\n    permissions:\n      actions: read\n      contents: read\n      security-events: write\n\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v2\n\n      - name: Run Trivy vulnerability scanner in repo mode\n        uses: aquasecurity/trivy-action@master\n        with:\n          scan-type: "config"\n          # ignore-unfixed: true\n          exit-code: "1"\n          hide-progress: false\n          format: "sarif"\n          output: "trivy-results1.sarif"\n          severity: "CRITICAL,HIGH"\n\n      - name: Upload Trivy scan results to GitHub Security tab\n        uses: github/codeql-action/upload-sarif@v1\n        if: always()\n        with:\n          sarif_file: "trivy-results1.sarif"\n\n  analyze-<REPLACE-ME container name>:\n    runs-on: ubuntu-latest\n    permissions:\n      actions: read\n      contents: read\n      security-events: write\n\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v2\n\n      # It\'s also possible to scan your private registry with Trivy\'s built-in image scan.\n      # All you have to do is set ENV vars.\n      # Docker Hub needs TRIVY_USERNAME and TRIVY_PASSWORD.\n      # You don\'t need to set ENV vars when downloading from a public repository.\n      # For public images, no ENV vars must be set.\n      - name: Run Trivy vulnerability scanner\n        if: always()\n        uses: aquasecurity/trivy-action@master\n        with:\n          # Path to Docker image\n          image-ref: "<REPLACE-ME container name>"\n          format: "sarif"\n          output: "trivy-results2.sarif"\n          exit-code: "1"\n          severity: "CRITICAL,HIGH"\n\n      - name: Upload Trivy scan results to GitHub Security tab\n        if: always()\n        uses: github/codeql-action/upload-sarif@v1\n        with:\n          sarif_file: "trivy-results2.sarif"\n')))}p.isMDXComponent=!0},2051:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/github-packages-example-89e15a834d06c679d782f1e0c01614cb.png"}}]);
"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[4755],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return y}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),y=a,f=m["".concat(c,".").concat(y)]||m[y]||p[y]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2987:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:2},c="Trivy",u={unversionedId:"security/trivy",id:"security/trivy",title:"Trivy",description:"We scan containers with Trivy.",source:"@site/docs/security/trivy.md",sourceDirName:"security",slug:"/security/trivy",permalink:"/docs/security/trivy",editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/edit/main/docs/security/trivy.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Veracode",permalink:"/docs/security/veracode"}},l={},p=[],m={toc:p};function y(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"trivy"},"Trivy"),(0,i.kt)("p",null,"We ",(0,i.kt)("strong",{parentName:"p"},"scan containers")," with Trivy."),(0,i.kt)("p",null,"Add the following GitHub action ",(0,i.kt)("em",{parentName:"p"},"trivy.yml")," to your repository workflows."),(0,i.kt)("p",null,"In order for Trivy to scan the correct GitHub packages, they must be specified in the action."),(0,i.kt)("p",null,"Integration steps per GitHub package:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy job ",(0,i.kt)("em",{parentName:"p"},"analyze-\\<REPLACE-ME container name",">"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Replace the name of the job with the name of the GitHub package - green box.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Replace ",(0,i.kt)("em",{parentName:"p"},"image-ref")," with the yellow box of the GitHub package."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In order to always scan the latest GitHub package, a tag (red box) must be set for the packages and specified in the ",(0,i.kt)("em",{parentName:"p"},"image-ref"),"."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"github-packages-example.png",src:n(2051).Z,width:"764",height:"445"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# Depending on the location of your Docker container\n# you need to change the path to the specific Docker registry.\n#\nname: "Trivy"\n\non:\n  push:\n    branches: [main]\n  # pull_request:\n  # The branches below must be a subset of the branches above\n  # branches: [ main ]\n  # paths-ignore:\n  #   - "**/*.md"\n  #   - "**/*.txt"\n  schedule:\n    # Once a day\n    - cron: "0 0 * * *"\n  workflow_dispatch:\n  # Trigger manually\n\njobs:\n  analyze-config:\n    runs-on: ubuntu-latest\n    permissions:\n      actions: read\n      contents: read\n      security-events: write\n\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v2\n\n      - name: Run Trivy vulnerability scanner in repo mode\n        uses: aquasecurity/trivy-action@master\n        with:\n          scan-type: "config"\n          # ignore-unfixed: true\n          exit-code: "1"\n          hide-progress: false\n          format: "sarif"\n          output: "trivy-results1.sarif"\n          severity: "CRITICAL,HIGH"\n\n      - name: Upload Trivy scan results to GitHub Security tab\n        uses: github/codeql-action/upload-sarif@v1\n        if: always()\n        with:\n          sarif_file: "trivy-results1.sarif"\n\n  analyze-<REPLACE-ME container name>:\n    runs-on: ubuntu-latest\n    permissions:\n      actions: read\n      contents: read\n      security-events: write\n\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v2\n\n      # It\'s also possible to scan your private registry with Trivy\'s built-in image scan.\n      # All you have to do is set ENV vars.\n      # Docker Hub needs TRIVY_USERNAME and TRIVY_PASSWORD.\n      # You don\'t need to set ENV vars when downloading from a public repository.\n      # For public images, no ENV vars must be set.\n      - name: Run Trivy vulnerability scanner\n        if: always()\n        uses: aquasecurity/trivy-action@master\n        with:\n          # Path to Docker image\n          image-ref: "<REPLACE-ME container name>"\n          format: "sarif"\n          output: "trivy-results2.sarif"\n          exit-code: "1"\n          severity: "CRITICAL,HIGH"\n\n      - name: Upload Trivy scan results to GitHub Security tab\n        if: always()\n        uses: github/codeql-action/upload-sarif@v1\n        with:\n          sarif_file: "trivy-results2.sarif"\n')))}y.isMDXComponent=!0},2051:function(e,t,n){t.Z=n.p+"assets/images/github-packages-example-89e15a834d06c679d782f1e0c01614cb.png"}}]);
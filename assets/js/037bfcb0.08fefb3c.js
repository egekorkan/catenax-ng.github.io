"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[394],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:5},o="How to integrate KICS",s={unversionedId:"security/how-to-integrate-kics",id:"security/how-to-integrate-kics",title:"How to integrate KICS",description:"We scan infrastructure-as-code with KICS.",source:"@site/docs/security/how-to-integrate-kics.md",sourceDirName:"security",slug:"/security/how-to-integrate-kics",permalink:"/docs/security/how-to-integrate-kics",draft:!1,editUrl:"https://github.com/catenax-ng/catenax-ng.github.io/edit/main/docs/security/how-to-integrate-kics.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"How to integrate GitGuardianShield",permalink:"/docs/security/how-to-integrate-gitguardianshield"},next:{title:"Internal Guides",permalink:"/docs/internal"}},c={},u=[],l={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-integrate-kics"},"How to integrate KICS"),(0,i.kt)("p",null,"We scan ",(0,i.kt)("strong",{parentName:"p"},"infrastructure-as-code")," with KICS."),(0,i.kt)("p",null,"If your repo does not yet include ",(0,i.kt)("inlineCode",{parentName:"p"},"kics.yml")," or this GitHub action, add this action to your repository workflows."),(0,i.kt)("p",null,"KICS is used as the successor to Checkov."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Findings with severity ",(0,i.kt)("inlineCode",{parentName:"p"},"Error")," are high findings and must be fixed.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'name: "KICS"\n\non:\n  push:\n    branches: [main, master]\n  # pull_request:\n  # The branches below must be a subset of the branches above\n  # branches: [main, master]\n  # paths-ignore:\n  #   - "**/*.md"\n  #   - "**/*.txt"\n  schedule:\n    - cron: "0 0 * * *"\n  workflow_dispatch:\n\njobs:\n  analyze:\n    name: Analyze\n    runs-on: ubuntu-latest\n    permissions:\n      actions: read\n      contents: read\n      security-events: write\n\n    steps:\n      - uses: actions/checkout@v2\n\n      - name: KICS scan\n        uses: checkmarx/kics-github-action@master\n        with:\n          # Scanning directory .\n          path: "."\n          # Exclude paths from scan by providing the paths as comma separated list\n          # exclude_paths: "postgres-init.yaml,templates/sharedidp.yaml"\n          # Exclude queries by providing the query / rule ID as comma separated list\n          # exclude_queries: "b9c83569-459b-4110-8f79-6305aa33cb37"\n          # Fail on HIGH severity results\n          fail_on: high\n          # Disable secrets detection - we use GitGuardian\n          disable_secrets: true\n          # Fail on HIGH severity results\n          fail_on: high\n          # When provided with a directory on output_path\n          # it will generate the specified reports file named \'results.{extension}\'\n          # in this example it will generate:\n          # - results-dir/results.json and results-dir/results.sarif\n          output_path: kicsResults/\n          output_formats: "json,sarif"\n\n      # Upload findings to GitHub Advanced Security Dashboard\n      - name: Upload SARIF file for GitHub Advanced Security Dashboard\n        if: always()\n        uses: github/codeql-action/upload-sarif@v1\n        with:\n          sarif_file: kicsResults/results.sarif\n')))}p.isMDXComponent=!0}}]);
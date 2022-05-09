"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[1477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"Office Hours 2022-04-29","metadata":{"permalink":"/blog/Office Hours 2022-04-29","editUrl":"https://github.com/catenax-ng/catenax-ng.github.io/blog/2022-04-29-OfficeHours.md","source":"@site/blog/2022-04-29-OfficeHours.md","title":"Office Hours 2022-04-29","description":"In our today\'s office hours, we discussed the following topics","date":"2022-04-29T00:00:00.000Z","formattedDate":"April 29, 2022","tags":[{"label":"news","permalink":"/blog/tags/news"},{"label":"officehour","permalink":"/blog/tags/officehour"}],"readingTime":0.405,"truncated":false,"authors":[{"name":"DevSecOps Team","title":"Your DevSecOps enabler","url":"https://github.com/catenax-ng","imageURL":"https://avatars.githubusercontent.com/u/100771185?s=200&v=4","key":"DevSecOps"}],"frontMatter":{"slug":"Office Hours 2022-04-29","title":"Office Hours 2022-04-29","authors":"DevSecOps","tags":["news","officehour"]},"nextItem":{"title":"Office Hours 2022-04-22","permalink":"/blog/Office Hours 2022-04-2"}},"content":"In our today\'s office hours, we discussed the following topics\\n\\n1. News from the DevSecOps Team\\n   1. We changed the DNS setup (the Hotel Budapest means the INT, that is now reflected in the URL), but the old Domain ist redirected\\n   1. The Vault is available (see also [link](docs/guides/how-to-use-vault))\\n   1. The Dev environment is available\\n1. News from the Security Team\\n   1. Some Veracode tips and tricks\\n   1. Container scanning in progress\\n1. Q&A\\n1. Hands-on\\n\\nYou find the\\nrecording [here](https://bcgcatenax.sharepoint.com/:f:/r/sites/CommunitiesofPractises/Shared%20Documents/CX-CoP%20DevSecOps/Office_Hours_Regular_Recordings?csf=1&web=1&e=YezRwb)"},{"id":"Office Hours 2022-04-2","metadata":{"permalink":"/blog/Office Hours 2022-04-2","editUrl":"https://github.com/catenax-ng/catenax-ng.github.io/blog/2022-04-22-OfficeHours.md","source":"@site/blog/2022-04-22-OfficeHours.md","title":"Office Hours 2022-04-22","description":"In our today\'s office hours, we discussed the following topics","date":"2022-04-22T00:00:00.000Z","formattedDate":"April 22, 2022","tags":[{"label":"news","permalink":"/blog/tags/news"},{"label":"officehour","permalink":"/blog/tags/officehour"}],"readingTime":0.995,"truncated":false,"authors":[{"name":"DevSecOps Team","title":"Your DevSecOps enabler","url":"https://github.com/catenax-ng","imageURL":"https://avatars.githubusercontent.com/u/100771185?s=200&v=4","key":"DevSecOps"}],"frontMatter":{"slug":"Office Hours 2022-04-2","title":"Office Hours 2022-04-22","authors":"DevSecOps","tags":["news","officehour"]},"prevItem":{"title":"Office Hours 2022-04-29","permalink":"/blog/Office Hours 2022-04-29"},"nextItem":{"title":"Office Hours 2022-04-08","permalink":"/blog/Office Hours 2022-04-08"}},"content":"In our today\'s office hours, we discussed the following topics\\n\\n1. News from the DevSecOps Team\\n   1. Make sure to use _\\\\*.int.demo.catena-x.net_ when you are on Hotel Budapest. All initially created _\\\\*\\n      .demo.catena-x.net_ need to migrate\\n   1. Please align repository names in catenax-ng to start with product-\\\\* and try to keep lower cases seperated with\\n      - (see all other repositories); Its not critical but helps to align us all.\\n   1. Be aware that we will enforce 2FA very soon. We will soon announce it with proper documentation. If you can\\n      already enable it on your account, pls do.\\n   1.\\n1. News from the Security Team\\n   1. No updates\\n1. Q&A\\n   1. How does a developer access a database for testing? -> Please try to use a temporary ingress. If this doesn\'t\\n      work (we have not verified this yet), pls get in touch with us, so we can provide you with another solution,\\n      potentially switching the ingress ctrl.\\n   1. ArgoCD automatic redeployment doesn\'t work -> You need to enable auto-sync AND self heal. Self heal is relevant\\n      if you don\'t have a clean slate, ArgoCD will not auto sync if its not green.\\n1. Hands-on\\n\\nYou find the\\nrecording [here](https://bcgcatenax.sharepoint.com/:f:/r/sites/CommunitiesofPractises/Shared%20Documents/CX-CoP%20DevSecOps/Office_Hours_Regular_Recordings?csf=1&web=1&e=YezRwb)"},{"id":"Office Hours 2022-04-08","metadata":{"permalink":"/blog/Office Hours 2022-04-08","editUrl":"https://github.com/catenax-ng/catenax-ng.github.io/blog/2022-04-08-OfficeHours.md","source":"@site/blog/2022-04-08-OfficeHours.md","title":"Office Hours 2022-04-08","description":"In our today\'s office hours, we discussed the following topics","date":"2022-04-08T00:00:00.000Z","formattedDate":"April 8, 2022","tags":[{"label":"news","permalink":"/blog/tags/news"},{"label":"officehour","permalink":"/blog/tags/officehour"}],"readingTime":1.415,"truncated":false,"authors":[{"name":"DevSecOps Team","title":"Your DevSecOps enabler","url":"https://github.com/catenax-ng","imageURL":"https://avatars.githubusercontent.com/u/100771185?s=200&v=4","key":"DevSecOps"}],"frontMatter":{"slug":"Office Hours 2022-04-08","title":"Office Hours 2022-04-08","authors":"DevSecOps","tags":["news","officehour"]},"prevItem":{"title":"Office Hours 2022-04-22","permalink":"/blog/Office Hours 2022-04-2"},"nextItem":{"title":"Office Hours 2022-04-01","permalink":"/blog/Office Hours 2022-04-01"}},"content":"In our today\'s office hours, we discussed the following topics\\n\\n1. News from the DevSecOps Team\\n   1. Still working on finishing argocd, dns and vault setup\\n1. News from the Security Team\\n   1. Live VeraCode presentation. Already 7 products are onboarded\\n1. Q&A\\n   1. Question to security team regarding VeraCode and license scan: Is the license scan of VeraCode already aligned with Catena-X requirements -> Question was taken by security team, no answer yet\\n   1. When should the code base moved from tractusx to catenax-ng -> As soon as possible. Supported / Golden path is catenax-ng only\\n   1. Issue with VeraCode Intellij Integration. A collegue was not able to use it. Security collegue figured out that a permission was missing on VeraCode.\\n   1. How are Multi environment deployments done correctly -> Every new environment will provide its own argocd instance. You will define your application per environment on the environment argocd\\n   1. How do you work with Secrets and ArgoCD? -> Currently you send your secrets manually to us and we will apply it in your namespace. The vault integration is very close to finish, then you will be able to reference inside ArgoCD secrets from vault\\n   1. How to work with Helm dependencies? This was asked in context of how to seperate the catena-x specific helm chart and your product helm chart. The motivation for separation is to have not catena-x specific code in your repository -> There is no particular requirement to keep catena-x specifics out of your repository. Best practice might be to have a release process which removes all catena-x specific files (which would then also generate a documentation and other things)\\n1. Hands-on\\n\\nYou find the recording [here](https://bcgcatenax.sharepoint.com/:f:/r/sites/CommunitiesofPractises/Shared%20Documents/CX-CoP%20DevSecOps/Office_Hours_Regular_Recordings?csf=1&web=1&e=YezRwb)"},{"id":"Office Hours 2022-04-01","metadata":{"permalink":"/blog/Office Hours 2022-04-01","editUrl":"https://github.com/catenax-ng/catenax-ng.github.io/blog/2022-04-01-OfficeHours.md","source":"@site/blog/2022-04-01-OfficeHours.md","title":"Office Hours 2022-04-01","description":"In our today\'s office hours, we discussed the following topics","date":"2022-04-01T00:00:00.000Z","formattedDate":"April 1, 2022","tags":[{"label":"news","permalink":"/blog/tags/news"},{"label":"officehour","permalink":"/blog/tags/officehour"}],"readingTime":0.265,"truncated":false,"authors":[{"name":"DevSecOps Team","title":"Your DevSecOps enabler","url":"https://github.com/catenax-ng","imageURL":"https://avatars.githubusercontent.com/u/100771185?s=200&v=4","key":"DevSecOps"}],"frontMatter":{"slug":"Office Hours 2022-04-01","title":"Office Hours 2022-04-01","authors":"DevSecOps","tags":["news","officehour"]},"prevItem":{"title":"Office Hours 2022-04-08","permalink":"/blog/Office Hours 2022-04-08"}},"content":"In our today\'s office hours, we discussed the following topics\\n\\n1. News from the DevSecOps Team\\n   1. Good progress on vault setup\\n2. News from the Security Team\\n   1. Short introduction into VeraCode\\n   1. VeraCode replaces SonarCloud as mandatory quality and security gate for release 1\\n3. Hands-On\\n\\nYou find the recording [here](https://bcgcatenax.sharepoint.com/:f:/r/sites/CommunitiesofPractises/Shared%20Documents/CX-CoP%20DevSecOps/Office_Hours_Regular_Recordings?csf=1&web=1&e=YezRwb)"}]}')}}]);
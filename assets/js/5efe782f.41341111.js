"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[4899],{56768:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>a,toc:()=>p});var s=o(74848),i=o(28453),r=o(11470),l=o(19365),t=o(65171);const d={slug:"/zoom"},c="Zoom",a={id:"sources/companion-plugins/zoom",title:"Zoom",description:"The @uppy/zoom plugin lets users import cloud video recordings from their",source:"@site/docs/sources/companion-plugins/zoom.mdx",sourceDirName:"sources/companion-plugins",slug:"/zoom",permalink:"/docs/zoom",draft:!1,unlisted:!1,editUrl:"https://github.com/transloadit/uppy/blob/main/docs/sources/companion-plugins/zoom.mdx",tags:[],version:"current",frontMatter:{slug:"/zoom"},sidebar:"tutorialSidebar",previous:{title:"Import from URL",permalink:"/docs/url"},next:{title:"File input",permalink:"/docs/file-input"}},h={},p=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Use",id:"use",level:2},{value:"Use in Uppy",id:"use-in-uppy",level:3},{value:"Use in Companion",id:"use-in-companion",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>title</code>",id:"title",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>companionUrl</code>",id:"companionurl",level:4},{value:"<code>companionHeaders</code>",id:"companionheaders",level:4},{value:"<code>companionAllowedHosts</code>",id:"companionallowedhosts",level:4},{value:"<code>companionCookiesRule</code>",id:"companioncookiesrule",level:4},{value:"<code>locale</code>",id:"locale",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"zoom",children:"Zoom"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"@uppy/zoom"})," plugin lets users import cloud video recordings from their\n",(0,s.jsx)(n.a,{href:"https://zoom.com",children:"Zoom"})," account. Note that\n",(0,s.jsx)(n.a,{href:"https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0063923",children:"only licensed"}),"\nZoom accounts can store their recordings in the cloud, so this functionality\nwill only be available to users with a paid Zoom account."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/examples",children:"Try out the live example"})," or take it for a spin in\n",(0,s.jsx)(n.a,{href:"https://stackblitz.com/edit/vitejs-vite-zaqyaf?file=main.js",children:"StackBlitz"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"when-should-i-use-this",children:"When should I use this?"}),"\n",(0,s.jsxs)(n.p,{children:["When you want to let users import cloud video recordings from their\n",(0,s.jsx)(n.a,{href:"https://zoom.com",children:"Zoom"})," account."]}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.a,{href:"/docs/companion",children:"Companion"})," instance is required for the Zoom plugin to work.\nCompanion handles authentication with Zoom, downloads the files, and uploads\nthem to the destination. This saves the user bandwidth, especially helpful if\nthey are on a mobile connection."]}),"\n",(0,s.jsxs)(n.p,{children:["You can self-host Companion or get a hosted version with any\n",(0,s.jsx)(n.a,{href:"https://transloadit.com/pricing/",children:"Transloadit plan"}),"."]}),"\n",(0,s.jsxs)(r.A,{children:[(0,s.jsx)(l.A,{value:"npm",label:"NPM",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"npm install @uppy/zoom\n"})})}),(0,s.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"yarn add @uppy/zoom\n"})})}),(0,s.jsx)(l.A,{value:"cdn",label:"CDN",children:(0,s.jsx)(t.A,{children:'\n        import { Uppy, Zoom } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(Zoom, {\n          // Options\n        })\n      '})})]}),"\n",(0,s.jsx)(n.h2,{id:"use",children:"Use"}),"\n",(0,s.jsx)(n.p,{children:"Using Zoom requires setup in both Uppy and Companion."}),"\n",(0,s.jsx)(n.h3,{id:"use-in-uppy",children:"Use in Uppy"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:"{10-13} showLineNumbers",children:"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport Zoom from '@uppy/zoom';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\n\nnew Uppy()\n\t.use(Dashboard, { inline: true, target: '#dashboard' })\n\t.use(Zoom, { companionUrl: 'https://your-companion.com' });\n"})}),"\n",(0,s.jsx)(n.h3,{id:"use-in-companion",children:"Use in Companion"}),"\n",(0,s.jsx)(n.p,{children:"To sign up for API keys, go through the following steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Sign up on ",(0,s.jsx)(n.a,{href:"https://marketplace.zoom.us",children:"Zoom Marketplace"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to ",(0,s.jsx)(n.a,{href:"https://marketplace.zoom.us",children:"https://marketplace.zoom.us"}),". There will\nbe a dropdown in the header called \u201cDevelop\u201d. From that dropdown, select\n\u201cBuild app\u201d."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In the \u201cBasic Information\u201d tab, Zoom shows your new \u201cClient ID\u201d and \u201cClient\nSecret\u201d - copy them."}),"\n",(0,s.jsx)(n.p,{children:"With the standalone Companion server, specify environment variables:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'export COMPANION_ZOOM_KEY="Zoom API key"\nexport COMPANION_ZOOM_SECRET="Zoom API secret"\n'})}),"\n",(0,s.jsx)(n.p,{children:"When using the Companion Node.js API, configure these options:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"companion.app({\n\tproviderOptions: {\n\t\tzoom: {\n\t\t\tkey: 'Zoom API key',\n\t\t\tsecret: 'Zoom API secret',\n\t\t},\n\t},\n});\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In the \u201cBasic Information\u201d tab, set \u201cOAuth Redirect URL\u201d input field to:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"https://$YOUR_COMPANION_HOST_NAME/zoom/redirect\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you are using Transloadit hosted Companion:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"https://api2.transloadit.com/companion/zoom/redirect\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the \u201cScopes\u201d tab, add \u201ccloud_recording:read",":list_user_recordings","\u201d and\n\u201cuser:read",":user","\u201d scopes. If Zoom asks for further permissions when you\ninteract with your Zoom integration - add those too."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,s.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,s.jsx)(n.h4,{id:"id",children:(0,s.jsx)(n.code,{children:"id"})}),"\n",(0,s.jsxs)(n.p,{children:["A unique identifier for this plugin (",(0,s.jsx)(n.code,{children:"string"}),", default: ",(0,s.jsx)(n.code,{children:"'Zoom'"}),")."]}),"\n",(0,s.jsx)(n.h4,{id:"title",children:(0,s.jsx)(n.code,{children:"title"})}),"\n",(0,s.jsxs)(n.p,{children:["Title / name shown in the UI, such as Dashboard tabs (",(0,s.jsx)(n.code,{children:"string"}),", default:\n",(0,s.jsx)(n.code,{children:"'Zoom'"}),")."]}),"\n",(0,s.jsx)(n.h4,{id:"target",children:(0,s.jsx)(n.code,{children:"target"})}),"\n",(0,s.jsxs)(n.p,{children:["DOM element, CSS selector, or plugin to place the drag and drop area into\n(",(0,s.jsx)(n.code,{children:"string"}),", ",(0,s.jsx)(n.code,{children:"Element"}),", ",(0,s.jsx)(n.code,{children:"Function"}),", or ",(0,s.jsx)(n.code,{children:"UIPlugin"}),", default:\n",(0,s.jsx)(n.a,{href:"/docs/dashboard",children:(0,s.jsx)(n.code,{children:"Dashboard"})}),")."]}),"\n",(0,s.jsx)(n.h4,{id:"companionurl",children:(0,s.jsx)(n.code,{children:"companionUrl"})}),"\n",(0,s.jsxs)(n.p,{children:["URL to a ",(0,s.jsx)(n.a,{href:"/docs/companion",children:"Companion"})," instance (",(0,s.jsx)(n.code,{children:"string"}),", default: ",(0,s.jsx)(n.code,{children:"null"}),")."]}),"\n",(0,s.jsx)(n.h4,{id:"companionheaders",children:(0,s.jsx)(n.code,{children:"companionHeaders"})}),"\n",(0,s.jsxs)(n.p,{children:["Custom headers that should be sent along to ",(0,s.jsx)(n.a,{href:"/docs/companion",children:"Companion"})," on\nevery request (",(0,s.jsx)(n.code,{children:"Object"}),", default: ",(0,s.jsx)(n.code,{children:"{}"}),")."]}),"\n",(0,s.jsx)(n.h4,{id:"companionallowedhosts",children:(0,s.jsx)(n.code,{children:"companionAllowedHosts"})}),"\n",(0,s.jsxs)(n.p,{children:["The valid and authorised URL(s) from which OAuth responses should be accepted\n(",(0,s.jsx)(n.code,{children:"string"})," or ",(0,s.jsx)(n.code,{children:"RegExp"})," or ",(0,s.jsx)(n.code,{children:"Array"}),", default: ",(0,s.jsx)(n.code,{children:"companionUrl"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["This value can be a ",(0,s.jsx)(n.code,{children:"string"}),", a ",(0,s.jsx)(n.code,{children:"RegExp"})," pattern, or an ",(0,s.jsx)(n.code,{children:"Array"})," of both. This is\nuseful when you have your ",(0,s.jsx)(n.a,{href:"/docs/companion",children:"Companion"})," running on several hosts.\nOtherwise, the default value should do fine."]}),"\n",(0,s.jsx)(n.h4,{id:"companioncookiesrule",children:(0,s.jsx)(n.code,{children:"companionCookiesRule"})}),"\n",(0,s.jsxs)(n.p,{children:["This option correlates to the\n",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials",children:"RequestCredentials value"}),"\n(",(0,s.jsx)(n.code,{children:"string"}),", default: ",(0,s.jsx)(n.code,{children:"'same-origin'"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["This tells the plugin whether to send cookies to ",(0,s.jsx)(n.a,{href:"/docs/companion",children:"Companion"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"locale",children:(0,s.jsx)(n.code,{children:"locale"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n\tstrings: {\n\t\tpluginNameZoom: 'Zoom',\n\t},\n};\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},65171:(e,n,o)=>{o.d(n,{A:()=>c});var s=o(96540),i=o(21432),r=o(27293),l=o(4476),t=o(74848);const{version:d}=l;function c(e){let{children:n,uppyCssName:o="uppy.min.css",uppyJsName:l="uppy.min.mjs"}=e,c=[];s.Children.toArray(n).forEach((e=>{c=[...c,...String(e).trim().split("\n").map((e=>e.trim()))]}));const a=c.map((e=>`  ${e}`)).join("\n"),h=`https://releases.transloadit.com/uppy/v${d}/${l}`,p=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${d}/${o}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${a.replace(/{{UPPY_JS_URL}}/g,h)}\n<\/script>\n`;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.A,{type:"caution",children:[(0,t.jsx)("p",{children:"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."}),(0,t.jsx)("p",{children:"It can be useful to speed up your development environment, so don't hesitate to use it to get you started."})]}),(0,t.jsx)(i.A,{language:"html",children:p})]})}}}]);
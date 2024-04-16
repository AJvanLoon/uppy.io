"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[3010],{35563:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var i=n(74848),o=n(28453),r=n(11470),l=n(19365),t=n(65171);const d={sidebar_position:12},a="Compressor",c={id:"compressor",title:"Compressor",description:"The @uppy/compressor plugin optimizes images (JPEG, PNG, and any other format",source:"@site/docs/compressor.mdx",sourceDirName:".",slug:"/compressor",permalink:"/docs/compressor",draft:!1,unlisted:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/compressor.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Golden Retriever",permalink:"/docs/golden-retriever"},next:{title:"Form",permalink:"/docs/form"}},p={},h=[{value:"When should I use it?",id:"when-should-i-use-it",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>quality</code>",id:"quality",level:4},{value:"<code>limit</code>",id:"limit",level:4},{value:"<code>locale</code>",id:"locale",level:4},{value:"Events",id:"events",level:2},{value:"<code>compressor:complete</code>",id:"compressorcomplete",level:4}];function u(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"compressor",children:"Compressor"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"@uppy/compressor"})," plugin optimizes images (JPEG, PNG, and any other format\nsupported by the client\u2019s browser) before upload, saving up to 60% in size\n(roughly 18 MB for 10 images). It uses ",(0,i.jsx)(s.a,{href:"https://github.com/fengyuanchen/compressorjs",children:"Compressor.js"})," library under the hood."]}),"\n",(0,i.jsx)(s.h2,{id:"when-should-i-use-it",children:"When should I use it?"}),"\n",(0,i.jsx)(s.p,{children:"When your users are likely to upload images, potentially on mobile devices, and\nsaving data and faster uploads are important."}),"\n",(0,i.jsx)(s.h2,{id:"install",children:"Install"}),"\n",(0,i.jsxs)(r.A,{children:[(0,i.jsx)(l.A,{value:"npm",label:"NPM",default:!0,children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"npm install @uppy/compressor\n"})})}),(0,i.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"yarn add @uppy/compressor\n"})})}),(0,i.jsx)(l.A,{value:"cdn",label:"CDN",children:(0,i.jsx)(t.A,{children:'\n        import { Uppy, Compressor } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(Compressor, {\n          // Options\n        })\n      '})})]}),"\n",(0,i.jsx)(s.h2,{id:"use",children:"Use"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",metastring:"{7} showLineNumbers",children:"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport Compressor from '@uppy/compressor';\n\nnew Uppy()\n  .use(Dashboard, {inline:true, target: '#dashboard')\n  .use(Compressor);\n"})}),"\n",(0,i.jsxs)(s.p,{children:["No action is needed from the user \u2014 Uppy will automatically optimize images,\nshow an ",(0,i.jsx)(s.a,{href:"/docs/informer",children:"Informer"})," message with saved bytes, and then begin the\nupload as usual."]}),"\n",(0,i.jsx)(s.h2,{id:"api",children:"API"}),"\n",(0,i.jsx)(s.h3,{id:"options",children:"Options"}),"\n",(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsxs)(s.p,{children:["You can also pass any of the ",(0,i.jsx)(s.a,{href:"https://github.com/fengyuanchen/compressorjs#options",children:"Compressor.js options"})," here as well."]})}),"\n",(0,i.jsx)(s.h4,{id:"id",children:(0,i.jsx)(s.code,{children:"id"})}),"\n",(0,i.jsxs)(s.p,{children:["A unique identifier for this plugin (",(0,i.jsx)(s.code,{children:"string"}),", default: ",(0,i.jsx)(s.code,{children:"'Compressor'"}),")."]}),"\n",(0,i.jsx)(s.h4,{id:"quality",children:(0,i.jsx)(s.code,{children:"quality"})}),"\n",(0,i.jsxs)(s.p,{children:["The quality of the output image passed to ",(0,i.jsx)(s.a,{href:"https://github.com/fengyuanchen/compressorjs",children:"Compressor.js"})," (",(0,i.jsx)(s.code,{children:"number"}),", default:\n",(0,i.jsx)(s.code,{children:"0.6"}),")."]}),"\n",(0,i.jsxs)(s.p,{children:["It must be a number between ",(0,i.jsx)(s.code,{children:"0"})," and ",(0,i.jsx)(s.code,{children:"1"}),". Be careful to use ",(0,i.jsx)(s.code,{children:"1"})," as it may make\nthe size of the output image become larger. In most cases, going with the\ndefault value is best."]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["This option is only available for ",(0,i.jsx)(s.code,{children:"image/jpeg"})," and ",(0,i.jsx)(s.code,{children:"image/webp"})," images."]})}),"\n",(0,i.jsx)(s.h4,{id:"limit",children:(0,i.jsx)(s.code,{children:"limit"})}),"\n",(0,i.jsxs)(s.p,{children:["Number of images that will be compressed in parallel (",(0,i.jsx)(s.code,{children:"number"}),", default: ",(0,i.jsx)(s.code,{children:"10"}),")."]}),"\n",(0,i.jsx)(s.p,{children:"You likely don\u2019t need to change this, unless you are experiencing performance\nissues."}),"\n",(0,i.jsx)(s.h4,{id:"locale",children:(0,i.jsx)(s.code,{children:"locale"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"export default {\n\tstrings: {\n\t\t// Shown in the Status Bar\n\t\tcompressingImages: 'Compressing images...',\n\t\tcompressedX: 'Saved %{size} by compressing images',\n\t},\n};\n"})}),"\n",(0,i.jsx)(s.h2,{id:"events",children:"Events"}),"\n",(0,i.jsx)(s.h4,{id:"compressorcomplete",children:(0,i.jsx)(s.code,{children:"compressor:complete"})}),"\n",(0,i.jsx)(s.p,{children:"The event is emitted when all files are compressed. You can use it for side\neffects or custom UI notifications."})]})}function m(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},65171:(e,s,n)=>{n.d(s,{A:()=>a});var i=n(96540),o=n(21432),r=n(27293),l=n(4476),t=n(74848);const{version:d}=l;function a(e){let{children:s,uppyCssName:n="uppy.min.css",uppyJsName:l="uppy.min.mjs"}=e,a=[];i.Children.toArray(s).forEach((e=>{a=[...a,...String(e).trim().split("\n").map((e=>e.trim()))]}));const c=a.map((e=>`  ${e}`)).join("\n"),p=`https://releases.transloadit.com/uppy/v${d}/${l}`,h=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${d}/${n}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${c.replace(/{{UPPY_JS_URL}}/g,p)}\n<\/script>\n`;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.A,{type:"caution",children:[(0,t.jsx)("p",{children:"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."}),(0,t.jsx)("p",{children:"It can be useful to speed up your development environment, so don't hesitate to use it to get you started."})]}),(0,t.jsx)(o.A,{language:"html",children:h})]})}}}]);
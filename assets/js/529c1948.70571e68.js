"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[6508],{79459:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var t=n(74848),o=n(28453),s=n(11470),d=n(19365),r=n(65171);const l={sidebar_position:3,slug:"/audio"},a="Audio",c={id:"sources/audio",title:"Audio",description:"The @uppy/audio plugin lets you record audio using a built-in or external",source:"@site/docs/sources/audio.mdx",sourceDirName:"sources",slug:"/audio",permalink:"/docs/audio",draft:!1,unlisted:!1,editUrl:"https://github.com/transloadit/uppy/blob/main/docs/sources/audio.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/audio"},sidebar:"tutorialSidebar",previous:{title:"Screen capture",permalink:"/docs/screen-capture"},next:{title:"Box",permalink:"/docs/box"}},u={},h=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:3},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>title</code>",id:"title",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>showAudioSourceDropdown</code>",id:"showaudiosourcedropdown",level:4},{value:"<code>locale</code>",id:"locale",level:4}];function p(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"audio",children:"Audio"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"@uppy/audio"})," plugin lets you record audio using a built-in or external\nmicrophone, or any other audio device, on desktop and mobile. The UI shows real\ntime sound wavelength when recording."]}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"/examples",children:"Try out the live example"})," or take it for a spin in\n",(0,t.jsx)(i.a,{href:"https://stackblitz.com/edit/vitejs-vite-zaqyaf?file=main.js",children:"StackBlitz"}),"."]})}),"\n",(0,t.jsx)(i.h2,{id:"when-should-i-use-this",children:"When should I use this?"}),"\n",(0,t.jsx)(i.p,{children:"When you want users to record audio on their computer."}),"\n",(0,t.jsx)(i.h2,{id:"install",children:"Install"}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(d.A,{value:"npm",label:"NPM",default:!0,children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-shell",children:"npm install @uppy/audio\n"})})}),(0,t.jsx)(d.A,{value:"yarn",label:"Yarn",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-shell",children:"yarn add @uppy/audio\n"})})}),(0,t.jsx)(d.A,{value:"cdn",label:"CDN",children:(0,t.jsx)(r.A,{children:"\n        import { Uppy, Dashboard, Audio } from \"{{UPPY_JS_URL}}\"\n        const uppy = new Uppy()\n        uppy.use(Dashboard, { inline: true, target: 'body' })\n        uppy.use(Audio)\n      "})})]}),"\n",(0,t.jsx)(i.h2,{id:"use",children:"Use"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",metastring:"{3,7,11} showLineNumbers",children:"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport Audio from '@uppy/audio';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\nimport '@uppy/audio/dist/style.min.css';\n\nnew Uppy().use(Dashboard, { inline: true, target: 'body' }).use(Audio);\n"})}),"\n",(0,t.jsx)(i.h3,{id:"api",children:"API"}),"\n",(0,t.jsx)(i.h3,{id:"options",children:"Options"}),"\n",(0,t.jsx)(i.h4,{id:"id",children:(0,t.jsx)(i.code,{children:"id"})}),"\n",(0,t.jsxs)(i.p,{children:["A unique identifier for this plugin (",(0,t.jsx)(i.code,{children:"string"}),", default: ",(0,t.jsx)(i.code,{children:"'audio'"}),")."]}),"\n",(0,t.jsx)(i.h4,{id:"title",children:(0,t.jsx)(i.code,{children:"title"})}),"\n",(0,t.jsxs)(i.p,{children:["Configures the title / name shown in the UI, for instance, on Dashboard tabs\n(",(0,t.jsx)(i.code,{children:"string"}),", default: ",(0,t.jsx)(i.code,{children:"'Audio'"}),")."]}),"\n",(0,t.jsx)(i.h4,{id:"target",children:(0,t.jsx)(i.code,{children:"target"})}),"\n",(0,t.jsxs)(i.p,{children:["DOM element, CSS selector, or plugin to place the drag and drop area into\n(",(0,t.jsx)(i.code,{children:"string"}),", ",(0,t.jsx)(i.code,{children:"Element"}),", ",(0,t.jsx)(i.code,{children:"Function"}),", or ",(0,t.jsx)(i.code,{children:"UIPlugin"}),", default:\n",(0,t.jsx)(i.a,{href:"/docs/dashboard",children:(0,t.jsx)(i.code,{children:"Dashboard"})}),")."]}),"\n",(0,t.jsx)(i.h4,{id:"showaudiosourcedropdown",children:(0,t.jsx)(i.code,{children:"showAudioSourceDropdown"})}),"\n",(0,t.jsxs)(i.p,{children:["Configures whether to show a dropdown to select audio device (",(0,t.jsx)(i.code,{children:"boolean"}),",\ndefault: ",(0,t.jsx)(i.code,{children:"false"}),")."]}),"\n",(0,t.jsx)(i.h4,{id:"locale",children:(0,t.jsx)(i.code,{children:"locale"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-js",children:"export default {\n\tstrings: {\n\t\tpluginNameAudio: 'Audio',\n\t\t// Used as the label for the button that starts an audio recording.\n\t\t// This is not visibly rendered but is picked up by screen readers.\n\t\tstartAudioRecording: 'Begin audio recording',\n\t\t// Used as the label for the button that stops an audio recording.\n\t\t// This is not visibly rendered but is picked up by screen readers.\n\t\tstopAudioRecording: 'Stop audio recording',\n\t\t// Title on the \u201callow access\u201d screen\n\t\tallowAudioAccessTitle: 'Please allow access to your microphone',\n\t\t// Description on the \u201callow access\u201d screen\n\t\tallowAudioAccessDescription:\n\t\t\t'In order to record audio, please allow microphone access for this site.',\n\t\t// Title on the \u201cdevice not available\u201d screen\n\t\tnoAudioTitle: 'Microphone Not Available',\n\t\t// Description on the \u201cdevice not available\u201d screen\n\t\tnoAudioDescription:\n\t\t\t'In order to record audio, please connect a microphone or another audio input device',\n\t\t// Message about file size will be shown in an Informer bubble\n\t\trecordingStoppedMaxSize:\n\t\t\t'Recording stopped because the file size is about to exceed the limit',\n\t\t// Used as the label for the counter that shows recording length (`1:25`).\n\t\t// This is not visibly rendered but is picked up by screen readers.\n\t\trecordingLength: 'Recording length %{recording_length}',\n\t\t// Used as the label for the submit checkmark button.\n\t\t// This is not visibly rendered but is picked up by screen readers.\n\t\tsubmitRecordedFile: 'Submit recorded file',\n\t\t// Used as the label for the discard cross button.\n\t\t// This is not visibly rendered but is picked up by screen readers.\n\t\tdiscardRecordedFile: 'Discard recorded file',\n\t},\n};\n"})})]})}function m(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},65171:(e,i,n)=>{n.d(i,{A:()=>a});var t=n(96540),o=n(21432),s=n(27293),d=n(4476),r=n(74848);const{version:l}=d;function a(e){let{children:i,uppyCssName:n="uppy.min.css",uppyJsName:d="uppy.min.mjs"}=e,a=[];t.Children.toArray(i).forEach((e=>{a=[...a,...String(e).trim().split("\n").map((e=>e.trim()))]}));const c=a.map((e=>`  ${e}`)).join("\n"),u=`https://releases.transloadit.com/uppy/v${l}/${d}`,h=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${l}/${n}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${c.replace(/{{UPPY_JS_URL}}/g,u)}\n<\/script>\n`;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.A,{type:"caution",children:[(0,r.jsx)("p",{children:"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."}),(0,r.jsx)("p",{children:"It can be useful to speed up your development environment, so don't hesitate to use it to get you started."})]}),(0,r.jsx)(o.A,{language:"html",children:h})]})}}}]);
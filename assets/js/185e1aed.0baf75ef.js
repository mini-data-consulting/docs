"use strict";(self.webpackChunkperiscope=self.webpackChunkperiscope||[]).push([[3171],{363:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>o,frontMatter:()=>d,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"channels/API/sending-messages","title":"Sending Messages","description":"To send a message through the API channel, make a POST request to the /api-channel endpoint.","source":"@site/docs/channels/API/sending-messages.md","sourceDirName":"channels/API","slug":"/channels/API/sending-messages","permalink":"/docs/channels/API/sending-messages","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"API","permalink":"/docs/channels/API/"},"next":{"title":"API Keys","permalink":"/docs/channels/API/api-keys"}}');var r=n(4848),i=n(8453);const d={sidebar_position:1},c="Sending Messages",a={},h=[{value:"Request Example",id:"request-example",level:3},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Response",id:"response",level:3}];function l(e){const s={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"sending-messages",children:"Sending Messages"})}),"\n",(0,r.jsxs)(s.p,{children:["To send a message through the API channel, make a POST request to the ",(0,r.jsx)(s.code,{children:"/api-channel"})," endpoint."]}),"\n",(0,r.jsx)(s.h3,{id:"request-example",children:"Request Example"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'curl -X POST \'https://dingg.periscopechat.com/api-channel\' \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Authorization: Bearer <your-api-key>\' \\\n  -d \'{\n    "channel_id": "<channel-id>",\n    "user": {\n      "identity": "<user-id>",\n      "name": "<user-name>"\n    },\n    "message": "Hello world!",\n    "metadata": {\n      "business_id": "<business-id>",\n      "customer_id": "<customer-id>"\n    }\n  }\'\n'})}),"\n",(0,r.jsx)(s.h3,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Required"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"channel_id"})}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsx)(s.td,{children:"The identifier for your API channel"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"user"})}),(0,r.jsx)(s.td,{children:"object"}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsx)(s.td,{children:"Object containing user information"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"user.identity"})}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsx)(s.td,{children:"Unique identifier for the user"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"user.name"})}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsx)(s.td,{children:"Display name of the user"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"message"})}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"Yes"}),(0,r.jsx)(s.td,{children:"The message text to be processed by the AI"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"metadata"})}),(0,r.jsx)(s.td,{children:"object"}),(0,r.jsx)(s.td,{children:"No"}),(0,r.jsx)(s.td,{children:"Additional data to include with the request (returned unchanged in webhook response)"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"authentication",children:"Authentication"}),"\n",(0,r.jsxs)(s.p,{children:["Include your API key in the ",(0,r.jsx)(s.code,{children:"Authorization"})," header using the Bearer token format. For more information about obtaining and managing API keys, see ",(0,r.jsx)(s.a,{href:"/docs/channels/API/api-keys",children:"API Keys"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"response",children:"Response"}),"\n",(0,r.jsx)(s.p,{children:"Upon successful submission, the API returns a 200 status code with the following JSON response:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "status": "queued",\n  "message": "Message received and will be processed"\n}\n'})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Field"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"status"})}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:'Current status of the message ("queued")'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"message"})}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"A human-readable description of the request status"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"Note: This is an asynchronous API. A successful response indicates that the message was received and queued for processing, not that it has been fully processed."})]})}function o(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>c});var t=n(6540);const r={},i=t.createContext(r);function d(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);
"use strict";(self.webpackChunkperiscope=self.webpackChunkperiscope||[]).push([[6382],{207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"channels/create-a-page","title":"Web","description":"The Web channel lets you add a web chat widget to your website. This widget is a versatile customizable interface that can be embedded in any UI framework or vanilla HTML page.","source":"@site/docs/channels/create-a-page.md","sourceDirName":"channels","slug":"/channels/create-a-page","permalink":"/docs/docs/channels/create-a-page","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Channels","permalink":"/docs/docs/category/channels"},"next":{"title":"Create a Document","permalink":"/docs/docs/channels/create-a-document"}}');var s=n(4848),d=n(8453);const a={sidebar_position:1},r="Web",o={},h=[{value:"Installation",id:"installation",level:2},{value:"HTML Sites",id:"html-sites",level:3},{value:"1. Load the SDK",id:"1-load-the-sdk",level:4},{value:"2. Embed in your website",id:"2-embed-in-your-website",level:4},{value:"Shopify",id:"shopify",level:3},{value:"1. Add the script tag.",id:"1-add-the-script-tag",level:4},{value:"2. Embed in your shopify website",id:"2-embed-in-your-shopify-website",level:4},{value:"3. Initialize the component",id:"3-initialize-the-component",level:4},{value:"Wordpress",id:"wordpress",level:3},{value:"1. Add the script tag.",id:"1-add-the-script-tag-1",level:4},{value:"2. Embed in your wordpress website",id:"2-embed-in-your-wordpress-website",level:4},{value:"3. Initialize the component",id:"3-initialize-the-component-1",level:4},{value:"Methods",id:"methods",level:2},{value:"<code>init</code>",id:"init",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Example",id:"example",level:4},{value:"Usage Notes",id:"usage-notes",level:4},{value:"<code>identify</code>",id:"identify",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Example",id:"example-1",level:4},{value:"Usage Notes",id:"usage-notes-1",level:4},{value:"<code>addMetadata</code>",id:"addmetadata",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Example",id:"example-2",level:4},{value:"Usage Notes",id:"usage-notes-2",level:4},{value:"<code>show</code>",id:"show",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"<code>hide</code>",id:"hide",level:3},{value:"Parameters",id:"parameters-4",level:4}];function c(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"web",children:"Web"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Web"})," channel lets you add a web chat widget to your website. This widget is a versatile customizable interface that can be embedded in any UI framework or vanilla HTML page."]}),"\n",(0,s.jsx)(t.p,{children:"The Periscope Web SDK provides and easy way to add a chat application into your existing website or web app with minimal coding. It boosts user engagement by offering instant support and interaction. The Web SDK can be integrated into various platforms like Shopify, WordPress, or any custom website."}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(t.p,{children:"The Periscope Web SDK is distributed as a Universal Module Definition (UMD) bundle that makes it compatible with various module systems and allows for easy integration into any web application."}),"\n",(0,s.jsx)(t.h3,{id:"html-sites",children:"HTML Sites"}),"\n",(0,s.jsx)(t.h4,{id:"1-load-the-sdk",children:"1. Load the SDK"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Using the Script Tag"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",metastring:"showLineNumbers",children:'<script\n  async\n  src="https://media.periscopechat.com/sdk/chatbot-sdk.umd.js"\n><\/script>\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Using ES6 Module Import"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"showLineNumbers",children:'import ChatbotComponent from "https://media.periscopechat.com/sdk/chatbot-sdk.umd.js";\n'})}),"\n",(0,s.jsx)(t.h4,{id:"2-embed-in-your-website",children:"2. Embed in your website"}),"\n",(0,s.jsx)(t.p,{children:"Add the following HTML where you want the chatbot to appear:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",metastring:"showLineNumbers",children:'<div id="chatbot-container">\n  <chatbotSDK></chatbotSDK>\n</div>\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"showLineNumbers",children:'<script>\ndocument.addEventListener(\'DOMContentLoaded\', function() {\n    if (window.ChatbotSDK && window.ChatbotSDK.init) {\n        window.ChatbotSDK.init({\n            socketUrl: "https://<your_tenant_name>.periscopechat.com/web",\n            title: "Your Chatbot Title",\n            headerBgColor: "blue",\n            containerId: "chatbot-container"\n            initMessage:"Hey there, how can I help you today?"\n        });\n    }\n});\n<\/script>\n'})}),"\n",(0,s.jsx)(t.h3,{id:"shopify",children:"Shopify"}),"\n",(0,s.jsx)(t.h4,{id:"1-add-the-script-tag",children:"1. Add the script tag."}),"\n",(0,s.jsx)(t.p,{children:"In your Shopify theme editor, add the script tag to your theme's layout file (theme.liquid)"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"showLineNumbers",children:'<script\n  async\n  src="https://media.periscopechat.com/sdk/chatbot-sdk.umd.js"\n><\/script>\n'})}),"\n",(0,s.jsx)(t.h4,{id:"2-embed-in-your-shopify-website",children:"2. Embed in your shopify website"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",metastring:"showLineNumbers",children:'<div id="chatbot-container">\n  <chatbotSDK></chatbotSDK>\n</div>\n'})}),"\n",(0,s.jsx)(t.h4,{id:"3-initialize-the-component",children:"3. Initialize the component"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"showLineNumbers",children:'<script>\ndocument.addEventListener(\'DOMContentLoaded\', function() {\n    if (window.ChatbotSDK && window.ChatbotSDK.init) {\n        window.ChatbotSDK.init({\n            socketUrl: "https://<your_tenant_name>.periscopechat.com/web",\n            title: "Your Chatbot Title",\n            headerBgColor: "blue",\n            containerId: "chatbot-container"\n            initMessage:"Hey there, how can I help you today?"\n        });\n    }\n});\n<\/script>\n'})}),"\n",(0,s.jsx)(t.h3,{id:"wordpress",children:"Wordpress"}),"\n",(0,s.jsx)(t.h4,{id:"1-add-the-script-tag-1",children:"1. Add the script tag."}),"\n",(0,s.jsx)(t.p,{children:"Enqueue the script in your functions.php."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",metastring:"showLineNumbers",children:"function enqueue_chatbot_sdk() {\n    wp_enqueue_script(\n        'chatbot-sdk',\n        'https://media.periscopechat.com/sdk/chatbot-sdk.umd.js',\n        array(),\n        null,\n        true\n    );\n}\nadd_action('wp_enqueue_scripts', 'enqueue_chatbot_sdk');\n"})}),"\n",(0,s.jsx)(t.h4,{id:"2-embed-in-your-wordpress-website",children:"2. Embed in your wordpress website"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",metastring:"showLineNumbers",children:'<div id="chatbot-container">\n  <chatbotSDK></chatbotSDK>\n</div>\n'})}),"\n",(0,s.jsx)(t.h4,{id:"3-initialize-the-component-1",children:"3. Initialize the component"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"showLineNumbers",children:'<script>\ndocument.addEventListener(\'DOMContentLoaded\', function() {\n    if (window.ChatbotSDK && window.ChatbotSDK.init) {\n        window.ChatbotSDK.init({\n            socketUrl: "https://<your_tenant_name>.periscopechat.com/web",\n            title: "Your Chatbot Title",\n            headerBgColor: "blue",\n            containerId: "chatbot-container"\n            initMessage:"Hey there, how can I help you today?"\n        });\n    }\n});\n<\/script>\n'})}),"\n",(0,s.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(t.p,{children:"The Pericope Web SDK provides several methods to interact with the chatbot programmatically."}),"\n",(0,s.jsx)(t.h3,{id:"init",children:(0,s.jsx)(t.code,{children:"init"})}),"\n",(0,s.jsx)(t.p,{children:"Use the init method to initialize and configure the chatbot with custom settings."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"showLineNumbers",children:"window.ChatbotSDK.init(options);\n"})}),"\n",(0,s.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"socketUrl"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"URL for the WebSocket server connection"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"title"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"The title displayed in the chat header"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"headerBgColor"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"Color name or hex code for the header background"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"containerId"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"ID of the container element where the chatbot will be rendered"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"iconUrl"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"URL for a custom chat icon"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"initMessage"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Initial message from the AI agent shown in the chat interface"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"showLineNumbers",children:'window.ChatbotSDK.init({\n  socketUrl: "https://myapp.periscopechat.com/web",\n  title: "Customer Support",\n  headerBgColor: "#4287f5",\n  containerId: "chatbot-container",\n  iconUrl: "https://example.com/chat-icon.png",\n  initMessage: "Hi! How can I assist you today?",\n});\n'})}),"\n",(0,s.jsx)(t.h4,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Must be called before using any other ChatbotSDK methods"}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"socketUrl"})," and ",(0,s.jsx)(t.code,{children:"containerId"})," parameters are required"]}),"\n",(0,s.jsx)(t.li,{children:"All other parameters are optional and will use default values if not specified"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"identify",children:(0,s.jsx)(t.code,{children:"identify"})}),"\n",(0,s.jsx)(t.p,{children:"Use the identify method to set the user's identity within the chatbot. This is useful for personalizing the chatbot experience."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"showLineNumbers",children:"window.ChatbotSDK.identify(name, customer_uuid);\n"})}),"\n",(0,s.jsx)(t.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"name"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"The display name of the user"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"customer_uuid"})}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"A unique identifier for the user"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"showLineNumbers",children:'// Set user identity\nwindow.ChatbotSDK.identify("Maverick Mitchell", "cust_12345");\n'})}),"\n",(0,s.jsx)(t.h4,{id:"usage-notes-1",children:"Usage Notes"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Call this method after the ChatbotSDK has been initialized"}),"\n",(0,s.jsx)(t.li,{children:"This method enables personalized conversations and user history tracking"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"addmetadata",children:(0,s.jsx)(t.code,{children:"addMetadata"})}),"\n",(0,s.jsx)(t.p,{children:"Use the addMetadata method to add custom metadata to the chatbot session. This can be used to pass additional information to the chatbot backend."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"showLineNumbers",children:"window.ChatbotSDK.addMetadata(metadataObject);\n"})}),"\n",(0,s.jsx)(t.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"metadataObject"})}),(0,s.jsx)(t.td,{children:"object"}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"An object containing custom metadata key-value pairs"})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"example-2",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"showLineNumbers",children:'// Add custom metadata\nwindow.ChatbotSDK.addMetadata({\n  business_uuid: "e5c7d567-e206-4cee-ac69-fa313d81cfdf",\n  customer_uuid: "18a052d5-013e-4e90-b7b5-93445d26c019",\n});\n'})}),"\n",(0,s.jsx)(t.h4,{id:"usage-notes-2",children:"Usage Notes"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Call this method after the ChatbotSDK has been initialized"}),"\n",(0,s.jsx)(t.li,{children:"Previously set metadata can be overwritten by calling this method again"}),"\n",(0,s.jsx)(t.li,{children:"Currently, the metadata is not stored. It will be used only if it is required by one of your integrations."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"show",children:(0,s.jsx)(t.code,{children:"show"})}),"\n",(0,s.jsxs)(t.p,{children:["Use the show method to display the chatbot interface programmatically. You may want to open the chat interface by default on the support page. You can achieve this by using the ",(0,s.jsx)(t.code,{children:"show()"})," method."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"showLineNumbers",children:"window.ChatbotSDK.show();\n"})}),"\n",(0,s.jsx)(t.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"None"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"hide",children:(0,s.jsx)(t.code,{children:"hide"})}),"\n",(0,s.jsx)(t.p,{children:"Use the hide method to hide the chatbot interface programmatically."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"showLineNumbers",children:"window.ChatbotSDK.hide();\n"})}),"\n",(0,s.jsx)(t.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"None"}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(6540);const s={},d=i.createContext(s);function a(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);
---
title: Web SDK Overview
sidebar_label: Web SDK
sidebar_position: 1
---

# Web SDK Overview

The **Web** channel lets you add a web chat widget to your website. This widget is a versatile customizable interface that can be embedded in any UI framework or vanilla HTML page.

The Periscope Web SDK provides and easy way to add a chat application into your existing website or web app with minimal coding. It boosts user engagement by offering instant support and interaction. The Web SDK can be integrated into various platforms like Shopify, WordPress, or any custom website.

## Installation

The Periscope Web SDK is distributed as a Universal Module Definition (UMD) bundle that makes it compatible with various module systems and allows for easy integration into any web application.

### HTML Sites

#### 1. Load the SDK

**Using the Script Tag**

```html showLineNumbers
<script
  async
  src="https://media.periscopechat.com/sdk/chatbot-sdk.umd.js"
></script>
```

**Using ES6 Module Import**

```js showLineNumbers
import ChatbotComponent from "https://media.periscopechat.com/sdk/chatbot-sdk.umd.js";
```

#### 2. Embed in your website

Add the following HTML where you want the chatbot to appear:

```html showLineNumbers
<div id="chatbot-container">
  <chatbotSDK></chatbotSDK>
</div>
```

```js showLineNumbers
<script>
document.addEventListener('DOMContentLoaded', function() {
    if (window.ChatbotSDK && window.ChatbotSDK.init) {
        window.ChatbotSDK.init({
            socketUrl: "https://<your_tenant_name>.periscopechat.com/web",
            title: "Your Chatbot Title",
            headerBgColor: "blue",
            containerId: "chatbot-container",
            initMessage:"Hey there, how can I help you today?"
        });
    }
});
</script>
```

### Shopify

#### 1. Add the script tag.

In your Shopify theme editor, add the script tag to your theme's layout file (theme.liquid)

```js showLineNumbers
<script
  async
  src="https://media.periscopechat.com/sdk/chatbot-sdk.umd.js"
></script>
```

#### 2. Embed in your shopify website

```html showLineNumbers
<div id="chatbot-container">
  <chatbotSDK></chatbotSDK>
</div>
```

#### 3. Initialize the component

```js showLineNumbers
<script>
document.addEventListener('DOMContentLoaded', function() {
    if (window.ChatbotSDK && window.ChatbotSDK.init) {
        window.ChatbotSDK.init({
            socketUrl: "https://<your_tenant_name>.periscopechat.com/web",
            title: "Your Chatbot Title",
            headerBgColor: "blue",
            containerId: "chatbot-container",
            initMessage:"Hey there, how can I help you today?"
        });
    }
});
</script>
```

### Wordpress

#### 1. Add the script tag.

Enqueue the script in your functions.php.

```php showLineNumbers
function enqueue_chatbot_sdk() {
    wp_enqueue_script(
        'chatbot-sdk',
        'https://media.periscopechat.com/sdk/chatbot-sdk.umd.js',
        array(),
        null,
        true
    );
}
add_action('wp_enqueue_scripts', 'enqueue_chatbot_sdk');
```

#### 2. Embed in your wordpress website

```html showLineNumbers
<div id="chatbot-container">
  <chatbotSDK></chatbotSDK>
</div>
```

#### 3. Initialize the component

```js showLineNumbers
<script>
document.addEventListener('DOMContentLoaded', function() {
    if (window.ChatbotSDK && window.ChatbotSDK.init) {
        window.ChatbotSDK.init({
            socketUrl: "https://<your_tenant_name>.periscopechat.com/web",
            title: "Your Chatbot Title",
            headerBgColor: "blue",
            containerId: "chatbot-container",
            initMessage:"Hey there, how can I help you today?"
        });
    }
});
</script>
```

### Angular

For detailed instructions on integrating the Periscope Web SDK with Angular applications, please see the dedicated [Angular Integration Guide](./WebAngular.md).

### React

For detailed instructions on integrating the Periscope Web SDK with React applications, please see the dedicated [React Integration Guide](./WebReact.md).

## Methods

The Pericope Web SDK provides several methods to interact with the chatbot programmatically.

### `init`

Use the init method to initialize and configure the chatbot with custom settings.

```js showLineNumbers
window.ChatbotSDK.init(options);
```

#### Parameters

| Parameter         | Type            | Required | Description                                                                   |
| ----------------- | --------------- | -------- | ----------------------------------------------------------------------------- |
| `socketUrl`       | string          | Yes      | URL for the WebSocket server connection                                       |
| `title`           | string          | Yes      | The title displayed in the chat header                                        |
| `headerBgColor`   | string          | Yes      | Color name or hex code for the header background                              |
| `containerId`     | string          | Yes      | ID of the container element where the chatbot will be rendered                |
| `iconUrl`         | string          | No       | URL for a custom chat icon (png). Overrides `iconComponent`.                  |
| `initMessage`     | string          | No       | Initial message from the AI agent shown in the chat interface                 |
| `questionPills`   | `Array<string>` | No       | List of questions to show as question pills. Ideally 2-4 questions work well. |
| `buttonText`      | string          | No       | Text to display on the button that opens the chat widget.                     |
| `buttonBgColor`   | string          | No       | Background color for the button that opens the chat widget.                   |
| `iconComponent`   | `ReactNode`     | No       | Custom React component to use as the chat icon.                               |
| `onChatWithAgent` | `function`      | No       | Callback function to be invoked when the "Chat with agent" button is clicked. |

#### Example

```js showLineNumbers
window.ChatbotSDK.init({
  socketUrl: "https://myapp.periscopechat.com/web",
  title: "Customer Support",
  headerBgColor: "#4287f5",
  containerId: "chatbot-container",
  iconUrl: "https://example.com/chat-icon.png",
  initMessage: "Hi! How can I assist you today?",
  questionPills: ["💰 What is your pricing?", "What products do you offer?"],
  buttonText: "Ask Jaika AI",
  buttonBgColor: "black",
  iconComponent: "<LucideSparkles />",
  onChatWithAgent: () => {
    console.log("Chat with agent button clicked");
  },
});
```

#### Usage Notes

- Must be called before using any other ChatbotSDK methods
- The `socketUrl` and `containerId` parameters are required
- All other parameters are optional and will use default values if not specified

### `identify`

Use the identify method to set the user's identity within the chatbot. This is useful for personalizing the chatbot experience.

```js showLineNumbers
window.ChatbotSDK.identify(name, customer_uuid);
```

#### Parameters

| Parameter       | Type   | Required | Description                      |
| --------------- | ------ | -------- | -------------------------------- |
| `name`          | string | Yes      | The display name of the user     |
| `customer_uuid` | string | Yes      | A unique identifier for the user |

#### Example

```js showLineNumbers
// Set user identity
window.ChatbotSDK.identify("Maverick Mitchell", "cust_12345");
```

#### Usage Notes

- Call this method after the ChatbotSDK has been initialized
- This method enables personalized conversations and user history tracking

### `addMetadata`

Use the addMetadata method to add custom metadata to the chatbot session. This can be used to pass additional information to the chatbot backend.

```js showLineNumbers
window.ChatbotSDK.addMetadata(metadataObject);
```

#### Parameters

| Parameter        | Type   | Required | Description                                          |
| ---------------- | ------ | -------- | ---------------------------------------------------- |
| `metadataObject` | object | Yes      | An object containing custom metadata key-value pairs |

#### Example

```js showLineNumbers
// Add custom metadata
window.ChatbotSDK.addMetadata({
  business_uuid: "e5c7d567-e206-4cee-ac69-fa313d81cfdf",
  customer_uuid: "18a052d5-013e-4e90-b7b5-93445d26c019",
});
```

#### Usage Notes

- Call this method after the ChatbotSDK has been initialized
- Previously set metadata can be overwritten by calling this method again
- Currently, the metadata is not stored. It will be used only if it is required by one of your integrations.

### `show`

Use the show method to display the chatbot interface programmatically. You may want to open the chat interface by default on the support page. You can achieve this by using the `show()` method.

```js showLineNumbers
window.ChatbotSDK.show();
```

#### Parameters

- None

### `hide`

Use the hide method to hide the chatbot interface programmatically.

```js showLineNumbers
window.ChatbotSDK.hide();
```

#### Parameters

- None

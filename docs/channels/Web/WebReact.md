---
title: React Integration
sidebar_label: React
---

# React Integration with Periscope Web SDK

Integrating the Periscope Web SDK into a React application involves loading the SDK, creating a dedicated component for the chatbot, and then using that component within your application.

## 1. Load the SDK in `public/index.html`

Make the SDK globally available by adding the script tag to your `public/index.html` file. Place it preferably at the end of the `<body>` tag:

```html showLineNumbers
<!-- public/index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script
      async
      src="https://media.periscopechat.com/sdk/chatbot-sdk.umd.js"
    ></script>
  </body>
</html>
```

## 2. Create a Dedicated React Component

Encapsulating the chatbot in its own component is a good practice for modularity and reusability.

**a. Create the component file (e.g., `src/Chatbot.js` or `src/Chatbot.tsx`):**

```jsx showLineNumbers
// src/Chatbot.js
import React, { useEffect, useRef } from "react";

// Declare ChatbotSDK to inform TypeScript/JavaScript it's a global variable
// This is crucial because the SDK is loaded via a script tag, not as an ES module.
/* global ChatbotSDK */

const Chatbot = (props) => {
  const {
    socketUrl,
    title = "Chat Support",
    headerBgColor = "#007bff", // Default blue
    containerId = "periscope-chatbot-container", // Unique ID for the chatbot instance
    iconUrl,
    initMessage,
    questionPills,
    buttonText,
    buttonBgColor,
    // iconComponent, // For advanced use with ReactNode
  } = props;

  const chatbotContainerRef = useRef(null);
  const isSdkInitialized = useRef(false);
  const sdkLoadAttempts = useRef(0);
  const maxSdkLoadAttempts = 10; // e.g., 5 seconds if polling every 500ms
  const sdkLoadInterval = useRef(null);

  useEffect(() => {
    const attemptSdkInitialization = () => {
      if (typeof ChatbotSDK !== "undefined" && ChatbotSDK.init) {
        initializeChatbot();
        if (sdkLoadInterval.current) {
          clearInterval(sdkLoadInterval.current);
          sdkLoadInterval.current = null;
        }
      } else {
        sdkLoadAttempts.current++;
        if (sdkLoadAttempts.current <= maxSdkLoadAttempts) {
          if (!sdkLoadInterval.current) {
            // Start interval only if not already running
            sdkLoadInterval.current = setInterval(() => {
              attemptSdkInitialization();
            }, 500);
          }
        } else {
          console.error(
            "ChatbotSDK could not be loaded after multiple attempts."
          );
          if (sdkLoadInterval.current) {
            clearInterval(sdkLoadInterval.current);
            sdkLoadInterval.current = null;
          }
        }
      }
    };

    const initializeChatbot = () => {
      if (!socketUrl) {
        console.error("ChatbotSDK: socketUrl is required for initialization.");
        return;
      }
      if (!containerId) {
        console.error(
          "ChatbotSDK: containerId is required for initialization."
        );
        return;
      }

      ChatbotSDK.init({
        socketUrl,
        title,
        headerBgColor,
        containerId,
        iconUrl,
        initMessage,
        questionPills,
        buttonText,
        buttonBgColor,
        // iconComponent, // Uncomment if using
      });
      isSdkInitialized.current = true;
    };

    attemptSdkInitialization();

    // Cleanup interval on component unmount
    return () => {
      if (sdkLoadInterval.current) {
        clearInterval(sdkLoadInterval.current);
      }
      // Optionally, you might want to call ChatbotSDK.destroy() or similar if the SDK provides it
    };
  }, [
    socketUrl,
    title,
    headerBgColor,
    containerId,
    iconUrl,
    initMessage,
    questionPills,
    buttonText,
    buttonBgColor,
  ]); // Re-run effect if these props change

  // --- Wrapper methods for SDK functionalities (optional) ---
  // These can be exposed via ref or passed down as props if needed from parent

  const identifyUser = (name, customer_uuid) => {
    if (
      isSdkInitialized.current &&
      typeof ChatbotSDK !== "undefined" &&
      ChatbotSDK.identify
    ) {
      ChatbotSDK.identify(name, customer_uuid);
    } else {
      console.warn(
        "ChatbotSDK not ready for identifyUser call or identify method unavailable."
      );
    }
  };

  const addCustomMetadata = (metadata) => {
    if (
      isSdkInitialized.current &&
      typeof ChatbotSDK !== "undefined" &&
      ChatbotSDK.addMetadata
    ) {
      ChatbotSDK.addMetadata(metadata);
    } else {
      console.warn(
        "ChatbotSDK not ready for addCustomMetadata call or addMetadata method unavailable."
      );
    }
  };

  const showChat = () => {
    if (
      isSdkInitialized.current &&
      typeof ChatbotSDK !== "undefined" &&
      ChatbotSDK.show
    ) {
      ChatbotSDK.show();
    } else {
      console.warn(
        "ChatbotSDK not ready for showChat call or show method unavailable."
      );
    }
  };

  const hideChat = () => {
    if (
      isSdkInitialized.current &&
      typeof ChatbotSDK !== "undefined" &&
      ChatbotSDK.hide
    ) {
      ChatbotSDK.hide();
    } else {
      console.warn(
        "ChatbotSDK not ready for hideChat call or hide method unavailable."
      );
    }
  };

  // Expose methods via ref if needed (example)
  // useImperativeHandle(ref, () => ({
  //   identifyUser,
  //   addCustomMetadata,
  //   showChat,
  //   hideChat,
  // }));

  return (
    <div id={containerId} ref={chatbotContainerRef}>
      <chatbotSDK></chatbotSDK>
    </div>
  );
};

export default Chatbot;
```

## 3. Use the Chatbot Component in Your Application

You can now import and use your `Chatbot` component in any other component where you want the chatbot to appear. Pass the necessary configurations as props.

```jsx showLineNumbers
// Example: In your App.js or any other component
import React from "react";
import Chatbot from "./Chatbot"; // Ensure path is correct
import "./App.css";

function App() {
  const tenantName = "<your_tenant_name>"; // Replace with your actual tenant name

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
      </header>
      <Chatbot
        socketUrl={`https://\${tenantName}.periscopechat.com/web`}
        title="Support Assistant"
        headerBgColor="darkblue"
        containerId="react-chatbot"
        initMessage="Hello! How can I help you today with your React app?"
        questionPills={["How to install?", "What are the features?"]}
        buttonText="Chat with AI"
      />
      {/* You can add buttons or other UI elements to interact with the chatbot programmatically */}
      {/* For example, using a ref to call showChat() or hideChat() */}
    </div>
  );
}

export default App;
```

## 4. Styling (Optional)

You might want to add some basic styling for the container or the page.

```css showLineNumbers
/* src/App.css or your main stylesheet */
.App {
  text-align: center;
}

.App-header {
  background-color: #282c34;
  padding: 20px;
  color: white;
  margin-bottom: 20px;
}

/* Ensure the chatbot container doesn't cause layout shifts if it's initially empty */
#react-chatbot chatbotSDK {
  /* The SDK will manage its own internal styling and visibility */
}
```

## Key Considerations:

- **Global SDK:** The `ChatbotSDK` is loaded globally. The `/* global ChatbotSDK */` comment helps linters understand that `ChatbotSDK` is a global variable.
- **SDK Loading:** The `useEffect` hook with the `attemptSdkInitialization` logic ensures that `ChatbotSDK.init` is called only after the SDK script has loaded. It polls a few times before giving up.
- **Props:** The `Chatbot` component accepts props to configure the SDK, making it reusable.
- **Container ID:** Ensure the `containerId` passed to the `Chatbot` component matches the `id` of the `div` in its render method. This is where the SDK will mount the chatbot UI.
- **`chatbotSDK` element**: The `<chatbotSDK></chatbotSDK>` custom element is part of how the Periscope SDK injects its UI. Ensure this is present within the container `div`.
- **Tenant Name:** Remember to replace `<your_tenant_name>` in `socketUrl` with your actual Periscope tenant name.
- **Interacting Programmatically:** To call methods like `identify`, `show`, `hide`, or `addMetadata` from a parent component:
  - You can pass callback props to the `Chatbot` component that then call the SDK methods.
  - Alternatively, use `React.forwardRef` and `useImperativeHandle` in the `Chatbot` component to expose these methods directly to a parent component via a `ref`. The example code includes a commented-out section for `useImperativeHandle`.

This setup provides a robust way to integrate the Periscope Web SDK into your React applications.

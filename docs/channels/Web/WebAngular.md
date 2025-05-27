---
title: Angular Integration
sidebar_label: Angular
---

# Angular Integration with Periscope Web SDK

Integrating the Periscope Web SDK into an Angular application involves loading the SDK, creating a dedicated component for the chatbot, and then using that component within your application.

## 1. Load the SDK in `index.html`

Make the SDK globally available by adding the script tag to your `src/index.html` file. Place it preferably at the end of the `<body>` tag:

```html showLineNumbers
<!-- src/index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>YourAngularApp</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
  </head>
  <body>
    <app-root></app-root>
    <script
      async
      src="https://media.periscopechat.com/sdk/chatbot-sdk.umd.js"
    ></script>
  </body>
</html>
```

## 2. Create a Dedicated Angular Component

Encapsulating the chatbot in its own component is a good practice for modularity and reusability.

**a. Generate the component using Angular CLI:**

Open your terminal and run:

```bash
ng generate component chatbot
```

This command creates the necessary files for your component (e.g., `src/app/chatbot/chatbot.component.ts`, `.html`, `.css`) and declares it in your `app.module.ts` (or the closest module).

**b. Define the component's template (`src/app/chatbot/chatbot.component.html`):**

This HTML file will contain the div where the chatbot widget is rendered.

```html showLineNumbers
<div [id]="containerId">
  <chatbotSDK></chatbotSDK>
</div>
```

Using `[id]="containerId"` allows the ID to be dynamically set via an `@Input` property in your component.

**c. Implement the component's logic (`src/app/chatbot/chatbot.component.ts`):**

```typescript showLineNumbers
import {
  Component,
  AfterViewInit,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";

// Declare ChatbotSDK to inform TypeScript it's a global variable
// This is crucial because the SDK is loaded via a script tag, not as an ES module.
declare var ChatbotSDK: any;

@Component({
  selector: "app-chatbot", // This is how you'll use it in other templates
  templateUrl: "./chatbot.component.html",
  styleUrls: ["./chatbot.component.css"],
})
export class ChatbotComponent implements AfterViewInit, OnChanges {
  // --- Required SDK Configuration ---
  @Input() socketUrl!: string; // Mark as definitely assigned if it's always provided
  @Input() title: string = "Chat Support";
  @Input() headerBgColor: string = "#007bff"; // Default blue
  @Input() containerId: string = "periscope-chatbot-container"; // Unique ID for the chatbot instance

  // --- Optional SDK Configuration (Refer to SDK documentation for all options) ---
  @Input() iconUrl?: string;
  @Input() initMessage?: string;
  @Input() questionPills?: string[];
  @Input() buttonText?: string;
  @Input() buttonBgColor?: string;
  // @Input() iconComponent?: any; // For advanced use with ReactNode, if applicable

  private isSdkInitialized = false;
  private sdkLoadAttempts = 0;
  private readonly maxSdkLoadAttempts = 10; // e.g., 5 seconds if polling every 500ms
  private sdkLoadInterval: any;

  constructor() {}

  ngAfterViewInit(): void {
    this.attemptSdkInitialization();
  }

  private attemptSdkInitialization(): void {
    if (typeof ChatbotSDK !== "undefined" && ChatbotSDK.init) {
      this.initializeChatbot();
      if (this.sdkLoadInterval) {
        clearInterval(this.sdkLoadInterval);
      }
    } else {
      this.sdkLoadAttempts++;
      if (this.sdkLoadAttempts <= this.maxSdkLoadAttempts) {
        if (!this.sdkLoadInterval) {
          // Start interval only if not already running
          this.sdkLoadInterval = setInterval(() => {
            this.attemptSdkInitialization();
          }, 500);
        }
      } else {
        console.error(
          "ChatbotSDK could not be loaded after multiple attempts."
        );
        if (this.sdkLoadInterval) {
          clearInterval(this.sdkLoadInterval);
        }
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // If critical inputs like socketUrl change, and SDK is initialized, consider re-initialization
    // This is a basic example; you might need more sophisticated handling based on which inputs change.
    if (
      this.isSdkInitialized &&
      (changes["socketUrl"] || changes["containerId"])
    ) {
      // console.warn('Chatbot re-initialization due to input changes might be needed.');
      // this.initializeChatbot(); // Be cautious with re-initialization logic
    }
  }

  private initializeChatbot(): void {
    if (!this.socketUrl) {
      console.error("ChatbotSDK: socketUrl is required for initialization.");
      return;
    }
    if (!this.containerId) {
      console.error("ChatbotSDK: containerId is required for initialization.");
      return;
    }

    ChatbotSDK.init({
      socketUrl: this.socketUrl,
      title: this.title,
      headerBgColor: this.headerBgColor,
      containerId: this.containerId,
      iconUrl: this.iconUrl,
      initMessage: this.initMessage,
      questionPills: this.questionPills,
      buttonText: this.buttonText,
      buttonBgColor: this.buttonBgColor,
      // iconComponent: this.iconComponent, // Uncomment if using
    });
    this.isSdkInitialized = true;
  }

  // --- Wrapper methods for SDK functionalities ---
  // These methods provide a clean interface to the SDK from your Angular component

  identifyUser(name: string, customer_uuid: string): void {
    if (this.isSdkInitialized && ChatbotSDK && ChatbotSDK.identify) {
      ChatbotSDK.identify(name, customer_uuid);
    } else {
      console.warn(
        "ChatbotSDK not ready for identifyUser call or identify method unavailable."
      );
    }
  }

  addCustomMetadata(metadata: object): void {
    if (this.isSdkInitialized && ChatbotSDK && ChatbotSDK.addMetadata) {
      ChatbotSDK.addMetadata(metadata);
    } else {
      console.warn(
        "ChatbotSDK not ready for addCustomMetadata call or addMetadata method unavailable."
      );
    }
  }

  showChat(): void {
    if (this.isSdkInitialized && ChatbotSDK && ChatbotSDK.show) {
      ChatbotSDK.show();
    } else {
      console.warn(
        "ChatbotSDK not ready for showChat call or show method unavailable."
      );
    }
  }

  hideChat(): void {
    if (this.isSdkInitialized && ChatbotSDK && ChatbotSDK.hide) {
      ChatbotSDK.hide();
    } else {
      console.warn(
        "ChatbotSDK not ready for hideChat call or hide method unavailable."
      );
    }
  }
}
```

## 3. Add the Component to an Angular Module

Ensure your `ChatbotComponent` is declared in an Angular module. If you used `ng generate component chatbot`, this is typically done automatically in `src/app/app.module.ts` or the nearest parent module.

```typescript showLineNumbers
// src/app/app.module.ts (or your feature module)
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"; // Or CommonModule for feature modules

import { AppComponent } from "./app.component";
import { ChatbotComponent } from "./chatbot/chatbot.component"; // Ensure path is correct

@NgModule({
  declarations: [
    AppComponent,
    ChatbotComponent, // Your ChatbotComponent
  ],
  imports: [
    BrowserModule,
    // ... other Angular modules
  ],
  providers: [],
  bootstrap: [AppComponent], // If this is the main AppModule
  // exports: [ChatbotComponent] // If other modules will import this module to use ChatbotComponent
})
export class AppModule {}
```

## 4. Use the Chatbot Component in Your Application

You can now use your `<app-chatbot>` component selector in any other component's template where you want the chatbot to appear. Pass the necessary configurations using `@Input()` properties.

```html showLineNumbers
<!-- Example: In your app.component.html or any other component template -->
<h1>Welcome to My Angular App</h1>

<app-chatbot
  [socketUrl]="'https://your-tenant-name.periscopechat.com/web'"
  title="Customer Assistance"
  headerBgColor="#123456"
  containerId="my-unique-chatbot"
  initMessage="Hi there! How can I help you today?"
  [questionPills]="['What are your services?', 'How do I reset my password?']"
  buttonText="Chat with us"
></app-chatbot>

<p>Some other content on your page.</p>
```

Remember to replace `'https://your-tenant-name.periscopechat.com/web'` with your actual `socketUrl`.

## Key Angular Considerations:

- **`declare var ChatbotSDK: any;`**: This is vital for TypeScript to recognize the `ChatbotSDK` object loaded globally via the `<script>` tag.
- **`ngAfterViewInit`**: Use this lifecycle hook to ensure the DOM is ready before initializing the SDK. The provided example includes a polling mechanism as the SDK script loads asynchronously.
- **`@Input()` Properties**: These make your `ChatbotComponent` configurable and reusable.
- **`containerId`**: Ensure the `containerId` passed to `ChatbotSDK.init` is unique if you plan to have multiple instances, and it must match the `id` of the `div` in your `chatbot.component.html`.
- **Error Handling**: The example includes basic console error messages. You might want to implement more robust error handling.
- **Styling**: You can add styles to `src/app/chatbot/chatbot.component.css` to customize the appearance of the chatbot container or elements around it.

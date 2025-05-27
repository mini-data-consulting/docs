import { Component, AfterViewInit, Input } from "@angular/core";

declare var ChatbotSDK: any; // Declare ChatbotSDK to inform TypeScript it's a global variable

@Component({
  selector: "app-chatbot",
  templateUrl: "./chatbot.component.html",
  styleUrls: ["./chatbot.component.css"],
})
export class ChatbotComponent implements AfterViewInit {
  @Input() socketUrl: string =
    "https://<your_tenant_name>.periscopechat.com/web";
  @Input() title: string = "Your Chatbot Title";
  @Input() headerBgColor: string = "blue";
  @Input() containerId: string = "chatbot-container"; // Ensure this matches the ID in your template
  @Input() initMessage: string = "Hey there, how can I help you today?";
  // Add other Input properties for customization as needed (iconUrl, questionPills, etc.)

  constructor() {}

  ngAfterViewInit(): void {
    if (ChatbotSDK && ChatbotSDK.init) {
      ChatbotSDK.init({
        socketUrl: this.socketUrl,
        title: this.title,
        headerBgColor: this.headerBgColor,
        containerId: this.containerId,
        initMessage: this.initMessage,
        // Pass other options here
      });
    } else {
      console.error("ChatbotSDK not loaded or init method not available.");
    }
  }

  // You can also wrap other SDK methods here
  identifyUser(name: string, customer_uuid: string): void {
    if (ChatbotSDK && ChatbotSDK.identify) {
      ChatbotSDK.identify(name, customer_uuid);
    }
  }

  addMeta(metadata: object): void {
    if (ChatbotSDK && ChatbotSDK.addMetadata) {
      ChatbotSDK.addMetadata(metadata);
    }
  }

  showChat(): void {
    if (ChatbotSDK && ChatbotSDK.show) {
      ChatbotSDK.show();
    }
  }

  hideChat(): void {
    if (ChatbotSDK && ChatbotSDK.hide) {
      ChatbotSDK.hide();
    }
  }
}

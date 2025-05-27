import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ChatbotComponent } from "./chatbot/chatbot.component";

@NgModule({
  declarations: [AppComponent, ChatbotComponent],
  imports: [
    // Add any necessary imports here
  ],
  providers: [
    // Add any necessary providers here
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

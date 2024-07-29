import { Component } from '@angular/core';
import { GptService } from 'src/app/services/gpt.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {

  userInput: string = '';
  messages: { role: string, content: string, typing?: boolean }[] = [];

  constructor(private apiService:GptService){

  }

  sendMessage(){
    if (this.userInput.trim()) {
      this.messages.push({ role: 'user', content: this.userInput });
      const botMessage:any = { role: 'bot', content: '', typing: true };
      this.messages.push(botMessage);

      this.apiService.sendMessage(this.userInput).subscribe(
        response => {
          this.addDynamicTyping(response.choices[0].message.content, botMessage);
        },
        error => {
          console.error(error);
          botMessage.typing = false;
        }
      );

      this.userInput = '';
    }
    
  }

  addDynamicTyping(content: string, botMessage: { role: string, content: string, typing?: boolean }) {
    let index = 0;
    const interval = setInterval(() => {
      if (index < content.length) {
        botMessage.content = content.slice(0, index + 1);
        index++;
      } else {
        clearInterval(interval);
        botMessage.typing = false;
      }
    }, 50);
  }
}

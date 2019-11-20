import { Component, OnInit } from '@angular/core';
import { ChatService } from './core/services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public messages: any[] = [];
  public message: string;

  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.chat.messages.subscribe(msg => {
      this.messages.push(msg);
      console.log(msg);
    });
  }

  public sendMessage() {
    this.chat.sendMsg(this.message);
    this.message = '';
  }
}

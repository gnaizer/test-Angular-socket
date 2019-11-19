import { SocketService } from './core/services/socket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public message: string;
  public messages: string[] = [];

  constructor(private socketService: SocketService) {}

  public sendMessage() {
    this.socketService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
    this.socketService.getMessages().subscribe((message: string) => {
      this.messages.push(message);
    });
    console.log(this.messages);
  }
}

import { SocketService } from './socket.service';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class ChatService {
    public messages: Subject<any>;

    constructor(private socketService: SocketService) {
        this.messages = socketService
            .connect().pipe(
            map((response: any): any => {
                console.log(response)
                return response;
            })) as Subject<any>;
    }

    public sendMsg(msg: string) {
        this.messages.next(msg);
    }

}

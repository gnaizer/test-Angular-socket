import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class SocketService {
    private socket: any;

    constructor() { }

    public connect(): Subject<MessageEvent> {
        this.socket = io(environment.url);
        const observable = new Observable(observer => {
            this.socket.on('message', (data) => {
                console.log('Received message from Websocket Server');
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        const observer = {
            next: (data: {}) => {
                this.socket.emit('message', JSON.stringify(data));
            },
        };
        return Subject.create(observer, observable);
    }

}

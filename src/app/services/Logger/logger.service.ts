import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  public messages: string[] = [];

  public log(message: string) {
    this.messages.push(message);
  }
  public clear() {
    this.messages = [];
  }
}

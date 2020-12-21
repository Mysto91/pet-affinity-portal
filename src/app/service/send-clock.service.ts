import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendClockService {
  private subject = new Subject();

  constructor() { }

  sendMessage(msg : string | number) {
    this.subject.next(msg);
  }

  accessMessage() {
    return this.subject.asObservable();
  }
}

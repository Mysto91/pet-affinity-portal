import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendArticleListService {

  private subject = new Subject();

  constructor() { }

  sendMessage(msg : any) {
    this.subject.next(msg);
  }

  accessMessage() {
    return this.subject.asObservable();
  }

}

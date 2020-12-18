import { Component, Input, OnInit, Output } from '@angular/core';
import { SendClockService } from '../send-clock.service';

@Component({
  selector: 'app-clock',
  template: '<div>{{sendMessage()}}</div>',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  clock = new Date();

  intervalId: any;

  constructor(private data : SendClockService) { }

  ngOnInit(): void {
    this.intervalId = setInterval(() => (this.clock = new Date()), 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  getTimer() : number {
      return this.clock.getSeconds();
  }

  sendMessage() : void {
    this.data.sendMessage(this.getTimer());
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { SendClockService } from '../send-clock.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css', '../../assets/css/boostrap.css'],
})
export class CarouselComponent implements OnInit {
  slideArray: boolean[] = [true, false, false];

  slideInterval: number = 10;

  currentActiveIndex: number = 0;

  clock: any;

  subscription;

  constructor(private data : SendClockService) {}

  ngOnInit(): void {
    this.subscription = this.data.accessMessage().subscribe(msg => this.clock = msg);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



  ngAfterViewInit() : void {
    
  }

  previousSlider(currentActiveIndex: number) {
    const lastElementIndex = this.slideArray.length - 1;

    this.slideArray[currentActiveIndex] = false;

    this.currentActiveIndex =
      currentActiveIndex == 0 ? lastElementIndex : currentActiveIndex - 1;

    this.slideArray[this.currentActiveIndex] = true;
  }

  nextSlider(currentActiveIndex: number) {
    const lastElementIndex = this.slideArray.length - 1;

    this.slideArray[currentActiveIndex] = false;

    this.currentActiveIndex =
      currentActiveIndex == lastElementIndex ? 0 : currentActiveIndex + 1;

    this.slideArray[this.currentActiveIndex] = true;
  }

  triggerSlider() {
    return Number.isInteger(this.clock / this.slideInterval) ? true : false;
  }
}

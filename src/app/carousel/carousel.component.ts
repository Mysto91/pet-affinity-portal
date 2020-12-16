import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css', '../../assets/css/main.css'],
})
export class CarouselComponent implements OnInit {
  slideArray: boolean[] = [true, false, false];

  slideInterval: number = 10;

  currentActiveIndex: number = 0;

  intervalId: any;

  clock = new Date();

  ngOnInit(): void {
    this.intervalId = setInterval(() => (this.clock = new Date()), 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  constructor() {}

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
    return Number.isInteger(this.clock.getSeconds() / this.slideInterval) ? true : false;
  }
}

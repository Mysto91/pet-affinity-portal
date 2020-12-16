import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css', '../../assets/css/main.css'],
})
export class CarouselComponent implements OnInit {
  slideName: string = 'Test';

  slideArray: boolean[] = [true, false, false];

  constructor() {}

  ngOnInit(): void {}

  previousClick() {

    const currentActiveIndex = this.slideArray.findIndex((element) => true);
    const lastElementIndex = this.slideArray.length - 1;
    let index = 0;

    this.slideArray[currentActiveIndex] = false;

    if (currentActiveIndex == 0) {
      index = lastElementIndex;
    } else {
      index = currentActiveIndex - 1;
    }
console.log(index);
    this.slideArray[index] = true;
  }

  nextClick() {
    alert('next');
  }
}

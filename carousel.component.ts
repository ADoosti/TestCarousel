import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'netkeen-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() sliders:string[];
  @Input() slider:string[];

  constructor() {
  }

  ngOnInit() {
  }

}

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { Slide } from './shared/slide.model';
import { CarouselComponent } from './carousel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselRoutingModule } from './carousel-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    CarouselRoutingModule,
  ],
  declarations: [
    CarouselComponent
  ],
  exports:[
    CarouselComponent
  ],
  providers:[]
})
export class CarouselModule { 
}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Baitap3Component } from "../baitap3/baitap3.component";
import { Baitap3HeaderComponent } from "./baitap3-header/baitap3-header.component";
import { Baitap3CarouselComponent } from "./baitap3-carousel/baitap3-carousel.component";
import { Baitap3SmartphoneComponent } from "./baitap3-smartphone/baitap3-smartphone.component";
import { Baitap3LaptopComponent } from "./baitap3-laptop/baitap3-laptop.component";
import { Baitap3PromotionComponent } from "./baitap3-promotion/baitap3-promotion.component";

@NgModule({
  declarations: [
    Baitap3Component,
    Baitap3HeaderComponent,
    Baitap3CarouselComponent,
    Baitap3SmartphoneComponent,
    Baitap3LaptopComponent,
    Baitap3PromotionComponent
  ],
  exports: [
    Baitap3Component,
    Baitap3HeaderComponent,
    Baitap3CarouselComponent,
    Baitap3SmartphoneComponent,
    Baitap3LaptopComponent,
    Baitap3PromotionComponent
  ],
  imports: [CommonModule]
})
export class Baitap3Module {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DanhSachPhimComponent } from "./danh-sach-phim/danh-sach-phim.component";
import { ItemPhimComponent } from "./item-phim/item-phim.component";
import { InteractionComponent } from "./interaction.component";

@NgModule({
  declarations: [
    DanhSachPhimComponent,
    ItemPhimComponent,
    InteractionComponent
  ],
  imports: [CommonModule],
  exports: [InteractionComponent, DanhSachPhimComponent, ItemPhimComponent]
})
export class InteractionModule {}

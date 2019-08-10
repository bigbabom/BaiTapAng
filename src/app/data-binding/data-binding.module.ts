import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataBindingComponent } from "./data-binding.component";
import { OnewayBindingComponent } from "./oneway-binding/oneway-binding.component";
import { TwowayBindingComponent } from "./twoway-binding/twoway-binding.component";
import { FormsModule } from "@angular/forms";
import { BaitapBindingComponent } from './baitap-binding/baitap-binding.component';

@NgModule({
  declarations: [
    DataBindingComponent,
    OnewayBindingComponent,
    TwowayBindingComponent,
    BaitapBindingComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [DataBindingComponent]
})
export class DataBindingModule {}

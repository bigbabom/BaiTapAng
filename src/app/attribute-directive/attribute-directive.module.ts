import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AttributeDirectiveComponent } from "./attribute-directive.component";
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { HightLightDirective } from './hight-light.directive';

@NgModule({
  declarations: [AttributeDirectiveComponent, NgClassComponent, NgStyleComponent, HightLightDirective],
  imports: [CommonModule],
  exports: [AttributeDirectiveComponent]
})
export class AttributeDirectiveModule {}

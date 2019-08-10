import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[appHightLight]"
})
export class HightLightDirective {
  constructor(private ele: ElementRef, private render2: Renderer2) {
    // this.ele.nativeElement.style.backgroundColor = "red";
    this.render2.setStyle(this.ele.nativeElement, "background-color", "red");
  }

  @HostBinding("style.backgroundColor") bgColor: string = "aqua";

  @HostListener("mouseenter")
  SuKienHover() {
    this.render2.setStyle(this.ele.nativeElement, "background-color", "yellow");
  }

  @HostListener("mouseleave") SuKienLeave() {
    this.render2.setStyle(this.ele.nativeElement, "background-color", "green");
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-item-ghe",
  templateUrl: "./item-ghe.component.html",
  styleUrls: ["./item-ghe.component.scss"]
})
export class ItemGheComponent implements OnInit {
  @Input()
  ghe: any;
  @Output() eventChonGhe = new EventEmitter();

  trangThaiDatGhe: boolean = false;
  trangThaiDaDat: boolean = false;

  constructor() {}

  chonGhe() {
    this.trangThaiDatGhe = !this.trangThaiDatGhe;
    this.eventChonGhe.emit(this.trangThaiDatGhe); //toán tử phủ định
  }

  ngOnInit() {
    if (this.ghe.TrangThai == true) {
      this.trangThaiDaDat = true;
      this.trangThaiDatGhe = false;
    }
  }
}

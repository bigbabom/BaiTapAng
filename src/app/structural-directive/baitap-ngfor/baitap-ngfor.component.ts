import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-baitap-ngfor",
  templateUrl: "./baitap-ngfor.component.html",
  styleUrls: ["./baitap-ngfor.component.scss"]
})
export class BaitapNgforComponent implements OnInit {
  danhSachSanPham: any = [];
  themSanPham(msp, tsp, gsp) {
    this.danhSachSanPham.push({
      maSanPham: msp,
      tenSanPham: tsp,
      giaSanPham: gsp
    });
  }

  constructor() {}

  ngOnInit() {}
}

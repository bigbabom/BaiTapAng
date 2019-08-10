import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-baitap4",
  templateUrl: "./baitap4.component.html",
  styleUrls: ["./baitap4.component.scss"]
})
export class Baitap4Component implements OnInit {
  danhSachSanPham: any = [
    { MaSP: 1, TenSP: "Sony XZ", GiaSP: 1000 },
    { MaSP: 2, TenSP: "Sony XZ2", GiaSP: 1000 },
    { MaSP: 3, TenSP: "HTC U Ultra", GiaSP: 1000 },
    { MaSP: 4, TenSP: "HTC U12 Plus", GiaSP: 1000 },
    { MaSP: 5, TenSP: "Iphone XS MAX", GiaSP: 1000 },
    { MaSP: 6, TenSP: "Iphone XR", GiaSP: 1000 },
    { MaSP: 7, TenSP: "Xiaomi Mi Note 3", GiaSP: 9900 },
    { MaSP: 8, TenSP: "Xiaomi Mi 8", GiaSP: 1000 },
    { MaSP: 9, TenSP: "Galaxy Note 9", GiaSP: 1000 },
    { MaSP: 10, TenSP: "Galaxy S9 Plus", GiaSP: 1000 },
    { MaSP: 11, TenSP: "Nokia X9", GiaSP: 1000 }
  ];
  themSanPham(_maSP, _tenSP, _giaSP) {
    this.danhSachSanPham.push({
      MaSP: _maSP,
      TenSP: _tenSP,
      GiaSP: _giaSP
    });
    this.luuLocalStorage();
  }
  xoaSP = event => {
    let ma_xoa = parseInt(event.target.dataset.masp);
    for (let i = 0; i < this.danhSachSanPham.length; i++) {
      if (ma_xoa == this.danhSachSanPham[i].MaSP) {
        this.danhSachSanPham.splice(i, 1);
        console.log("ok");
        break;
      }
    }
  };
  luuLocalStorage() {
    let jsData = JSON.stringify(this.danhSachSanPham);
    localStorage.setItem("dssp", jsData);
  }

  constructor() {}

  ngOnInit() {}
}

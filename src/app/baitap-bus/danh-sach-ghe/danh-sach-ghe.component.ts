import { ItemGheComponent } from "../item-ghe/item-ghe.component";
import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";

@Component({
  selector: "app-danh-sach-ghe",
  templateUrl: "./danh-sach-ghe.component.html",
  styleUrls: ["./danh-sach-ghe.component.scss"]
})
export class DanhSachGheComponent implements OnInit {
  mangGhe: any[] = [
    { SoGhe: 1, TenGhe: "số 1", Gia: 100, TrangThai: false },
    { SoGhe: 2, TenGhe: "số 2", Gia: 100, TrangThai: false },
    { SoGhe: 3, TenGhe: "số 3", Gia: 100, TrangThai: false },
    { SoGhe: 4, TenGhe: "số 4", Gia: 100, TrangThai: false },
    { SoGhe: 5, TenGhe: "số 5", Gia: 100, TrangThai: false },
    { SoGhe: 6, TenGhe: "số 6", Gia: 100, TrangThai: false },
    { SoGhe: 7, TenGhe: "số 7", Gia: 100, TrangThai: false },
    { SoGhe: 8, TenGhe: "số 7", Gia: 100, TrangThai: false },
    { SoGhe: 9, TenGhe: "số 9", Gia: 100, TrangThai: false },
    { SoGhe: 10, TenGhe: "số 10", Gia: 100, TrangThai: false },
    { SoGhe: 11, TenGhe: "số 11", Gia: 100, TrangThai: false },
    { SoGhe: 12, TenGhe: "số 12", Gia: 100, TrangThai: false },
    { SoGhe: 13, TenGhe: "số 13", Gia: 100, TrangThai: false },
    { SoGhe: 14, TenGhe: "số 14", Gia: 100, TrangThai: false },
    { SoGhe: 15, TenGhe: "số 15", Gia: 100, TrangThai: false },
    { SoGhe: 16, TenGhe: "số 16", Gia: 100, TrangThai: false },
    { SoGhe: 17, TenGhe: "số 17", Gia: 100, TrangThai: false },
    { SoGhe: 18, TenGhe: "số 18", Gia: 100, TrangThai: false },
    { SoGhe: 19, TenGhe: "số 19", Gia: 100, TrangThai: false },
    { SoGhe: 20, TenGhe: "số 20", Gia: 100, TrangThai: false },
    { SoGhe: 21, TenGhe: "số 21", Gia: 100, TrangThai: false },
    { SoGhe: 22, TenGhe: "số 22", Gia: 100, TrangThai: false },
    { SoGhe: 23, TenGhe: "số 23", Gia: 100, TrangThai: false },
    { SoGhe: 24, TenGhe: "số 24", Gia: 100, TrangThai: false },
    { SoGhe: 25, TenGhe: "số 25", Gia: 100, TrangThai: false },
    { SoGhe: 26, TenGhe: "số 26", Gia: 100, TrangThai: false },
    { SoGhe: 27, TenGhe: "số 27", Gia: 100, TrangThai: false },
    { SoGhe: 28, TenGhe: "số 28", Gia: 100, TrangThai: false },
    { SoGhe: 29, TenGhe: "số 29", Gia: 100, TrangThai: false },
    { SoGhe: 30, TenGhe: "số 30", Gia: 100, TrangThai: false },
    { SoGhe: 31, TenGhe: "số 31", Gia: 100, TrangThai: false },
    { SoGhe: 32, TenGhe: "số 32", Gia: 100, TrangThai: false },
    { SoGhe: 33, TenGhe: "số 33", Gia: 100, TrangThai: false },
    { SoGhe: 34, TenGhe: "số 34", Gia: 100, TrangThai: false },
    { SoGhe: 35, TenGhe: "số 35", Gia: 100, TrangThai: false },
    { SoGhe: 36, TenGhe: "số 36", Gia: 100, TrangThai: false }
  ];
  array: any = [];

  @ViewChildren(ItemGheComponent) tagItemGhe: QueryList<ItemGheComponent>;

  soGheDaDat: number = 0;
  gheDangDatArray: any = [];
  tongTien: number = 0;
  datGhe() {
    this.addToLocal();
    this.mangGhe = JSON.parse(localStorage.getItem("dsGhe"));

    this.tagItemGhe.map(item => {
      if (item.ghe.TrangThai) {
        item.trangThaiDatGhe = false;
        item.trangThaiDaDat = true;
      }
    });

    this.gheDangDatArray = [];
    this.tongTien = 0;
    this.soGheDaDat = 0;
  }

  chonGheNgoi(_trangThai, _id) {
    this.mangGhe.map(item => {
      if (item.SoGhe === _id && _trangThai) {
        item.TrangThai = _trangThai;
        this.soGheDaDat++;
        this.tongTien += item.Gia;
        this.gheDangDatArray.push(item);
      } else if (item.SoGhe === _id && !_trangThai) {
        item.TrangThai = _trangThai;
        this.soGheDaDat--;
        this.tongTien -= item.Gia;
        this.gheDangDatArray = this.gheDangDatArray.filter(item => {
          return item.SoGhe != _id;
        });
      }
    });
  }

  huyChonGhe(ghe) {
    this.chonGheNgoi(false, ghe.SoGhe);
    this.tagItemGhe.map(item => {
      if (item.ghe.SoGhe === ghe.SoGhe) {
        item.trangThaiDatGhe = !item.trangThaiDatGhe;
      }
    });
  }

  constructor() {
    if (localStorage.getItem("dsGhe") === null) {
      this.addToLocal();
    }
    this.mangGhe = JSON.parse(localStorage.getItem("dsGhe"));
  }

  addToLocal() {
    localStorage.setItem("dsGhe", JSON.stringify(this.mangGhe));
  }

  ngOnInit() {
    this.mangGhe = JSON.parse(localStorage.getItem("dsGhe"));
  }
}

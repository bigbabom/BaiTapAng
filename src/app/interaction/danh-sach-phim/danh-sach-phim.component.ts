import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { ItemPhimComponent } from "./../item-phim/item-phim.component";
@Component({
  selector: "app-danh-sach-phim",
  templateUrl: "./danh-sach-phim.component.html",
  styleUrls: ["./danh-sach-phim.component.scss"]
})
export class DanhSachPhimComponent implements OnInit {
  @ViewChildren(ItemPhimComponent) tagListItemPhim: QueryList<
    ItemPhimComponent
  >;

  danhSachPhim = [
    {
      maPhim: 1,
      tenPhim: "Minions",
      gia: "85000",
      hinhAnh: "assets/images/minions.jpg"
    },
    {
      maPhim: 2,
      tenPhim: "Home",
      gia: "85000",
      hinhAnh: "assets/images/home.jpg"
    },
    {
      maPhim: 3,
      tenPhim: "Harvie",
      gia: "85000",
      hinhAnh: "assets/images/harvie.jpg"
    },
    {
      maPhim: 4,
      tenPhim: "Insideout",
      gia: "85000",
      hinhAnh: "assets/images/insideout.jpg"
    }
  ];
  danhSachLike = [
    { maPhim: 1, tenPhim: "Minions", soLike: 0 },
    { maPhim: 2, tenPhim: "Home", soLike: 0 },
    { maPhim: 3, tenPhim: "Harvie", soLike: 0 },
    { maPhim: 4, tenPhim: "Insideout", soLike: 0 }
  ];

  constructor() {}

  ngOnInit() {}

  luotLike(phim) {
    console.log(phim);
    // this.danhSachLike.map(item => { //lưu ý vòng lập map
    //   if (item.maPhim === phim.maPhim) {
    //     item.soLike++;
    //   }
    // });

    let movie = this.danhSachLike.find(item => {
      return item.maPhim === phim.maPhim;
    });
    movie.soLike++;
  }

  themPhim(phim) {
    this.danhSachPhim.push(phim);
  }

  viewChildren() {
    this.tagListItemPhim.map(item => {
      if (item.phim.maPhim === 1) {
        item.phim.gia = 200;
      }
    });
  }
}

// ARROW FUNCTION
// function tenHam() {
//   return 10;
// }

// let tenHam2 = () => 10;

// function tenHam() {}

// // let tenHam2 = () => {}

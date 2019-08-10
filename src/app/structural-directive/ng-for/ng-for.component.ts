import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-for",
  templateUrl: "./ng-for.component.html",
  styleUrls: ["./ng-for.component.scss"]
})
export class NgForComponent implements OnInit {
  danhSachNhanVien: any = [
    { ten: "Hoang", tuoi: 18 },
    { ten: "Chau", tuoi: 19 },
    { ten: "Hai", tuoi: 20 },
    { ten: "Yen", tuoi: 21 }
  ];

  constructor() {}

  ngOnInit() {}
}

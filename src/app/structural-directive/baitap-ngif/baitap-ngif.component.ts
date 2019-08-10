import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-baitap-ngif",
  templateUrl: "./baitap-ngif.component.html",
  styleUrls: ["./baitap-ngif.component.scss"]
})
export class BaitapNgifComponent implements OnInit {
  status: boolean = false;
  name: string = "";
  constructor() {}

  ngOnInit() {
    if (localStorage.getItem("user")) {
      this.status = true;
    }
  }
  login(username, password) {
    if (username === "cybersoft" && password === "cybersoft") {
      this.status = true;
      this.name = username;
    }
  }
}

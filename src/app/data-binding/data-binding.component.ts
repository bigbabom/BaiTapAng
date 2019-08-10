import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-data-binding",
  templateUrl: "./data-binding.component.html",
  styleUrls: ["./data-binding.component.scss"]
})
export class DataBindingComponent implements OnInit {
  email: string = "";
  fullName: string = "hoang";

  constructor() {}

  ngOnInit() {}

  eventBinding(value) {
    this.fullName = value;
  }
}

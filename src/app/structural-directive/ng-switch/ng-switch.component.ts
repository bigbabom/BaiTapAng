import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-switch",
  templateUrl: "./ng-switch.component.html",
  styleUrls: ["./ng-switch.component.scss"]
})
export class NgSwitchComponent implements OnInit {
  dkSwitch: string = "red";

  changeColor(value) {
    this.dkSwitch = value;
  }

  constructor() {}

  ngOnInit() {}
}

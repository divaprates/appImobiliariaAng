import { Component, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { House } from "src/app/model/house";

@Component({
  selector: "app-result-house",
  templateUrl: "./result-house.component.html",
  styleUrls: ["./result-house.component.scss"],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class ResultHouseComponent {

  @Input()
  public house!: House;

  constructor() {}
  

}

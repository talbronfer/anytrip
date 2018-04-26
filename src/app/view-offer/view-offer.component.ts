import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";

@Component({
  selector: "app-view-offer",
  templateUrl: "./view-offer.component.html",
  styleUrls: ["./view-offer.component.css"]
})
export class ViewOfferComponent implements OnInit {
  step : number = 0;
  components : any[] = [{name:"Flight"}];

  constructor(private userService: UserService ) {
  }

  

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ngOnInit() {
    this.components = this.userService.getData().components;
  }
}

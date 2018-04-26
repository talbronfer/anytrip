import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-view-offer",
  templateUrl: "./view-offer.component.html",
  styleUrls: ["./view-offer.component.css"]
})
export class ViewOfferComponent implements OnInit {
  step : number = 0;
  components : any[] = [{name:"Flight"}];
  constructor() {
    
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

  ngOnInit() {}
}

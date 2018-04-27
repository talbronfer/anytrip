import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger
} from "@angular/animations";

@Component({
  selector: "app-view-offer",
  templateUrl: "./view-offer.component.html",
  styleUrls: ["./view-offer.component.css"],
  animations: [
    trigger("listAnimation", [
      transition("* => *", [
        // each time the binding value changes
        query(":enter", [
          style({ opacity: 0, transform: "scale(1)" }),
          stagger("0.1s ease-in", [
            animate(
              "0.25s 500ms",
              style({ opacity: 1, transform: "scale(1.015)" })
            )
          ]),
          animate(
            "0.4s",
            style({
              opacity: 1,
              transform: "scale(1)"
            })
          )
        ])
      ])
    ])
  ]
})
export class ViewOfferComponent implements OnInit {
  step: number = 10;
  components: any[] = [];
  totalPrice: number = 0.0;

  constructor(private userService: UserService) {}

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  AddToTotal(value) {
    this.totalPrice += parseInt(value);
  }

  removeFromTotal(value) {
    this.totalPrice -= parseInt(value);
  }

  hello(event,value){
  if(event.checked){
    this.AddToTotal(value);
  }
  else{
    this.removeFromTotal(value);
  }
  }

  finish() {}

  ngOnInit() {
    this.components = [];
    let comps = this.userService.getData().components;
    console.log(comps); 
    comps.forEach(comp => {
      this.components.push(comp);
    });

    setTimeout(()=>{this.step = 0}, 2100);
  }
}

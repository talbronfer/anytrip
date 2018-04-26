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
          style({ opacity: 0, transform: "scale(1)"}),
          stagger('0.1s ease-in', [
            animate("0.25s 500ms", style({ opacity: 1, transform: "scale(1.015)"}))
          ]),
          animate(
            "0.4s",
            style({
              opacity: 1,
              transform: "scale(1)",
            })
          )
        ])
      ])
    ])
  ]
})
export class ViewOfferComponent implements OnInit {
  step: number = 0;
  components: any[] = [{ name: "Flight" }];
  totalPrice: number = 18.0;

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

  ngOnInit() {
    this.components = [];
    let comps = this.userService.getData().components;
    comps.forEach(comp => {
      this.components.push(comp);
    });
  }


}

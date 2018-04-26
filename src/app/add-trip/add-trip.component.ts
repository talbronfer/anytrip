import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {

  public isLoading : boolean = true;

  constructor(private userService : UserService, private router : Router) {
    this.userService.CurrentSession.on('child_changed', (ref, a) => {
      console.log("got change contification from firebase");
      ref.ref.parent.once('value', (result) => {
        this.userService.currentTrip = result.val();
      });
      this.userService.addPoliciesToTrip();
      this.isLoading = false;
      setTimeout(this.navigateToNext(), 1500);
    });
   }

  ngOnInit() {

  }

  navigateToNext() {
    this.router.navigate(['view-offer']);
  }

}

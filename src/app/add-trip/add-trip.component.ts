import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {

  public isLoading : boolean = true;

  constructor(private userService : UserService) {
    this.userService.CurrentSession.on('child_changed', (a, b) => {
      console.log("got change contification from firebase");
      this.isLoading = false;
    });
   }

  ngOnInit() {

  }

}

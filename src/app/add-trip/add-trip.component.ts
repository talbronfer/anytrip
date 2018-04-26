import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {

  public isWaiting : boolean = true;

  constructor(private userService : UserService) {

   }

  ngOnInit() {
    this.userService.CurrentSession.on('child_changed', (a, b) => {
      this.isWaiting = false;
    });
  }

}

import { Component, OnInit } from '@angular/core';
// import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { UserService } from '../user.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // public sessions :  AngularFireList<any>;
  public email : string;

  constructor(
     private userService : UserService,
      private router : Router,
      private activatedRoute: ActivatedRoute)
       { }

  ngOnInit() {
    // this.sessions = this.db.list('/sessions');
    // this.activatedRoute.queryParams.subscribe((params) => {
    //   let demoMode = params.demoMode;
    //   this.userService.demoMode = demoMode;
    // })
    this.userService.demoMode = true;
  }

  start() {
    // this.userService.CurrentSession = this.sessions.push({ email: this.email, status: 'pending' });
    this.router.navigate(['add-trip']);
  }

}

import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { UserService } from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public sessions :  AngularFireList<any>;
  public email : string;

  constructor(private db: AngularFireDatabase, private userService : UserService, private router : Router) { }

  ngOnInit() {
    this.sessions = this.db.list('/sessions');
  }

  start() {
    this.userService.CurrentSession = this.sessions.push({ email: this.email, status: 'pending' });
    this.router.navigate(['add-trip']);
  }

}

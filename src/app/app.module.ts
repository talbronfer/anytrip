import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { AddTripComponent } from './add-trip/add-trip.component';
import { ViewOfferComponent } from './view-offer/view-offer.component';
import { UserService } from './user.service';
import { environment } from './environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddTripComponent,
    ViewOfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase, 'anytrip'),
    FormsModule,
    AngularFireDatabaseModule,
    MatButtonModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./login/login.component";
import { AddTripComponent } from "./add-trip/add-trip.component";
import { ViewOfferComponent } from "./view-offer/view-offer.component";
import { UserService } from "./user.service";
import { CustomMaterialModule } from "./material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from './environments/environment';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddTripComponent,
    ViewOfferComponent,
    LoaderComponent
  ],
  imports: [BrowserModule,
    AppRoutingModule,
    CustomMaterialModule,
    BrowserAnimationsModule,  
    MatFormFieldModule,
    MatInputModule,
    // AngularFireModule.initializeApp(environment.firebase, 'anytrip'),
    FormsModule,
    // AngularFireDatabaseModule,
    MatButtonModule,
    MatCardModule,
  
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}

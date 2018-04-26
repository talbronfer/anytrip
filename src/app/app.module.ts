import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./login/login.component";
import { AddTripComponent } from "./add-trip/add-trip.component";
import { ViewOfferComponent } from "./view-offer/view-offer.component";
import { UserService } from "./user.service";
import { CustomMaterialModule } from "./material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddTripComponent,
    ViewOfferComponent
  ],
  imports: [BrowserModule, AppRoutingModule,CustomMaterialModule,BrowserAnimationsModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}

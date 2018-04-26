import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AddTripComponent } from './add-trip/add-trip.component';
import { ViewOfferComponent } from './view-offer/view-offer.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'add-trip', component: AddTripComponent },
  { path: 'view-offer', component: ViewOfferComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

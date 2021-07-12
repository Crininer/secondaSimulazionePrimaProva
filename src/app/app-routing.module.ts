import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingFormPageComponent } from './booking-form/booking-form-page.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ParkDetailsPageComponent } from './park-details/park-details-page.component';

// Naturalmente le route non sarebbero corrette per un vero sito, ma qua sto forzando che la mia "home" sia la landing page, come da flusso.
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: LandingPageComponent },
  { path: 'park/booking/:id', component: BookingFormPageComponent },
  { path: 'park/:id', component: ParkDetailsPageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormPageComponent } from './form-page/form-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormPageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

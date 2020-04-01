import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarworldhomeComponent } from './carworldhome/carworldhome.component';
import { CarworldorderComponent } from './carworldorder/carworldorder.component';
import { CarworldsummaryComponent } from './carworldsummary/carworldsummary.component';
import { CarworldcheckoutComponent } from './carworldcheckout/carworldcheckout.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: CarworldhomeComponent},
  {path: 'neworder', component: CarworldorderComponent},
  {path: 'summary', component: CarworldsummaryComponent},
  {path: 'checkout', component: CarworldcheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarworldhomeComponent } from './carworldhome/carworldhome.component';
import { CarworldorderComponent } from './carworldorder/carworldorder.component';
import { CarworldsummaryComponent } from './carworldsummary/carworldsummary.component';
import { CarworldcheckoutComponent } from './carworldcheckout/carworldcheckout.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormdataComponent } from './formdata/formdata.component';
import { UserdataService } from './userdata.service';


@NgModule({
  declarations: [
    AppComponent,
    CarworldhomeComponent,
    CarworldorderComponent,
    CarworldsummaryComponent,
    CarworldcheckoutComponent,
    FormdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

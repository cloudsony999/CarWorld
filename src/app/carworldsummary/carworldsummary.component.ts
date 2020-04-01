import { Component, OnInit } from '@angular/core';
import { UserdataService } from './../userdata.service';
import { CarfetchService } from './../../assets/Service/carfetch.service';

@Component({
  selector: 'app-carworldsummary',
  templateUrl: './carworldsummary.component.html',
  styleUrls: ['./carworldsummary.component.css']
})
export class CarworldsummaryComponent implements OnInit {
  carMake: string = null;
  modelMake: string = null;
  firstName: string = null;
  middleName: string = null;
  lastName: string = null;
  dob: string = null;
  gender: string = null;
  inputAddress: string = null;
  inputEmail: string = null;
  phone: string = null;
  private cardata = [];
  public price = [];
  private image: any;
  constructor(private userdataService: UserdataService, private carservice: CarfetchService) { }

  ngOnInit() {
    this.carMake = this.userdataService.getData().carMake;
    this.modelMake = this.userdataService.getData().modelMake;
    this.firstName = this.userdataService.getData().newParty.firstName;
    this.middleName = this.userdataService.getData().newParty.middleName;
    this.lastName = this.userdataService.getData().newParty.lastName;
    this.dob = this.userdataService.getData().newParty.dob;
    this.gender = this.userdataService.getData().newParty.gender;
    this.inputAddress = this.userdataService.getData().newParty.inputAddress;
    this.inputEmail = this.userdataService.getData().newParty.inputEmail;
    this.phone = this.userdataService.getData().newParty.phone;
    this.carservice.getData().subscribe((data) => {
      this.cardata = Array.from(Object.keys(data), k => data[k]);
      for (const car of this.cardata) {
      if (this.carMake === car.name) {
        for (const eachModel of car.model) {
          if (this.modelMake === eachModel.modelId) {
          this.price = eachModel.price;
          this.image = eachModel.Image;
          console.log(this.image);
        }
        }

      }

    }
    });


  }

}

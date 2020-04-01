import { Component, OnInit, ViewChild } from '@angular/core';
import { CarfetchService } from './../../assets/Service/carfetch.service';
import { Router } from '@angular/router';
import { UserdataService } from './../userdata.service';


@Component({
  selector: 'app-carworldorder',
  templateUrl: './carworldorder.component.html',
  styleUrls: ['./carworldorder.component.css']
})
export class CarworldorderComponent implements OnInit {

  @ViewChild('formData', {static: false}) formData;
  public cardata = [];
  modelData = [];


  carMake: string = null;
  modelMake: string = null;
  party: Party;
  newParty: Party = null;
  constructor(private carservice: CarfetchService, private router: Router, public checkService: UserdataService) { }

  ngOnInit() {
    this.carservice.getData().subscribe((data) => {
      this.cardata = Array.from(Object.keys(data), k => data[k]);
      // tslint:disable-next-line: no-use-before-declare
      this.party = new Party();
      // tslint:disable-next-line: variable-name
      const _savedData = this.checkService.getData();
      if (_savedData) {

        this.carMake = _savedData.carMake;
        this.selectModel();

        this.modelMake = _savedData.modelMake;
        this.party.firstName = _savedData.newParty.firstName;
        this.party.middleName = _savedData.newParty.middleName;
        this.party.lastName = _savedData.newParty.lastName;
        this.party.dob = _savedData.newParty.dob;
        this.party.gender = _savedData.newParty.gender;
        this.party.inputAddress = _savedData.newParty.inputAddress;
        this.party.inputEmail = _savedData.newParty.inputEmail;
        this.party.phone = _savedData.newParty.phone;
      }

    });

  }


  selectModel() {

      for (const eachData of this.cardata) {
        if (eachData.name === this.carMake) {
            this.modelData = eachData.model;
        }
      }

  }


  onNext() {

  this.formData.submitForm();


  if (this.formData.customerForm.valid) {
      const savedData = {
          carMake: this.carMake,
          modelMake: this.modelMake,
          newParty: this.party
      };

      this.checkService.saveData(savedData);
      this.router.navigate(['/summary']);
    } else {
      alert('Please check all the details.');
    }
  }
}

export class Party {

  firstName?: string;
  middleName?: string;
  lastName?: string;
  dob?: string;
  gender?: string;
  inputAddress?: string;
  inputEmail?: string;
  phone?: string;

}

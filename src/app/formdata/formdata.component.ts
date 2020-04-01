import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Party } from './../carworldorder/carworldorder.component';
import { UserdataService } from './../userdata.service';


@Component({
  selector: 'app-formdata',
  templateUrl: './formdata.component.html',
  styleUrls: ['./formdata.component.css']
})
export class FormdataComponent implements OnInit {

  @Input() party: Party;
  // @Input() newparty;

  @ViewChild('customerForm', {static: false}) customerForm;

  constructor(private checkService: UserdataService) { }

  ngOnInit() {

  }


  public submitForm() {
    this.customerForm.onSubmit(null);

  }
  onSubmit() {

  }
}

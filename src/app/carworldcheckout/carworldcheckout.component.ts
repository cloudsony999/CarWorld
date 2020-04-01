import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-carworldcheckout',
  templateUrl: './carworldcheckout.component.html',
  styleUrls: ['./carworldcheckout.component.css']
})
export class CarworldcheckoutComponent implements OnInit {
  uuid: string = null;
  constructor() { }

  ngOnInit() {
    this.uuid = UUID.UUID();
  }


}

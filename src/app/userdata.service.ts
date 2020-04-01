import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  public testresult: any;
  public abc = 'abc';

  saveData(value: any) {
    this.testresult = value;
  }

  getData(): any {
    return this.testresult;
  }
}


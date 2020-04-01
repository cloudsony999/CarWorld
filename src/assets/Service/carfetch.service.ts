import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarfetchService {
private finaldata = [];
private url = "./assets/JSON/cardetails.json";
  constructor(private http: HttpClient) { }
  getData()
  {
    return this.http.get(this.url);
  }
}

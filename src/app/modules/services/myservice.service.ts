import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }

path = "https://meanapps.onrender.com/getdata";

myalldata()
{
  return this.http.get(this.path);
}





}

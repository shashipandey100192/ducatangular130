import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }

path = "https://meanapps.onrender.com/getdata";
path1 = "https://meanapps.onrender.com/view";

myalldata()
{
  return this.http.get(this.path);
}

singleuser(id:any)
{

  return this.http.get(this.path1+"/"+id);
}





}

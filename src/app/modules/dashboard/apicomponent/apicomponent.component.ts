import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../services/myservice.service';

@Component({
  selector: 'app-apicomponent',
  templateUrl: './apicomponent.component.html',
  styleUrls: ['./apicomponent.component.scss']
})
export class ApicomponentComponent implements OnInit {
constructor(private service:MyserviceService){}
mydatalist:any;

ngOnInit(): void {
  this.mydata();    
}



mydata()
{
  return this.service.myalldata().subscribe((d)=>{
    console.log(d);
    this.mydatalist = d;
  })
}



}



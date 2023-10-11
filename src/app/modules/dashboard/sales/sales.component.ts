import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit{

ngOnInit(): void {
    this.abc();


}
abc()
{
  // alert("hi");
}


mydata:any[] = [
{
  name:'kumar',
  age:50,
  email:'kumar@gmail.com',
  phone:'54548457',
  course:'mean full stack',
  location:'noida up',
  fees:8745,
  status:'paid'
},
{
  name:'Ramesh',
  age:50,
  email:'kumar@gmail.com',
  phone:'54548457',
  course:'mean full stack',
  location:'noida up',
  fees:9000,
  status:'paid'
},
{
  name:'mohan',
  age:20,
  email:'mohan@gmail.com',
  phone:'54548457',
  course:'php full stack',
  location:'new delhi',
  fees:0,
  status:'paid'
},
];

}

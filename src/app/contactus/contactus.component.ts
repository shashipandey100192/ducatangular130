import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {
a:boolean =true;
b:number = 80;
c:string ="kumar1";
fsize:number=100;

kumar:string="ss";
// mychan()
// {
// if(this.kumar==='abc')
// {
//   return "ppppppp"
// }
// }


myselect:String = "";

mydata:any = [
  {
    name:'kumar',
    age:20,
    phone:'87454845',
    email:'kumar@gmail.com'
  },
  {
    name:'singh',
    age:25,
    phone:'87454845',
    email:'singh@gmail.com'
  },
  {
    name:'mohit',
    age:20,
    phone:'87454845',
    email:'mohit@gmail.com'
  },
  {
    name:'kumar',
    age:20,
    phone:'87454845',
    email:'kumar@gmail.com'
  },
  {
    name:'kumar',
    age:20,
    phone:'87454845',
    email:'kumar@gmail.com'
  }
];

mybinddata = new FormGroup({
  username:new FormControl()
})

myformsubmit()
{
  console.log(this.mybinddata.value);
}

}





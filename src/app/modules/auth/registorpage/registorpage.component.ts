import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-registorpage',
  templateUrl: './registorpage.component.html',
  styleUrls: ['./registorpage.component.scss']
})
export class RegistorpageComponent {
myarray:any[]=[];

  myform = new FormGroup({
    fullname: new FormControl("name",[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
    email:new FormControl("email",[Validators.required]),
    gender:new FormControl("",[Validators.required]),
    phone:new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
    pass:new FormControl("",[Validators.required]),
    remark:new FormControl("",[Validators.required])
  })


mysubmitform()
{
  // console.log(this.myform.value);
  if(this.myform.valid)
  {
    alert("welcome");
    console.log(this.myform.value);
    // localStorage.setItem("mydata",JSON.stringify(this.myform.value));
    this.myarray.push(this.myform.value);
    localStorage.setItem("mydata",JSON.stringify(this.myarray));
    window.location.href="http://localhost:4200/auth/login";
  }
  else
  {
    alert("wrong");
  }
}

}

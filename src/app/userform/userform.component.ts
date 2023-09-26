import { Component } from '@angular/core';;
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent {


  myform = new FormGroup({
    fullname: new FormControl("ooo"),
    email:new FormControl(),
    gender:new FormControl(),
    phone:new FormControl(),
    pass:new FormControl(),
    remark:new FormControl()
  })


mysubmitform()
{
  console.log(this.myform.value);
}

}

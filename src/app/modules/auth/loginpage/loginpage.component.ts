import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent {
  router: any;
  constructor( router:ActivatedRoute){}

  loginform =new FormGroup({
    user: new FormControl(),
    pass:new FormControl()
  });

mylogin()
{
  if(this.loginform.value.user==='kumar' && this.loginform.value.pass==='1234')
  {
    alert("welcome to home page");
    this.goToItems();
    
  }
  else{
  alert("wrong user and password");
  console.log(this.loginform.value);
  }
}


goToItems() {
  // this.router.navigate(['/dashboard'], { relativeTo: this.router });
  window.location.href='/dashboard';
}


}

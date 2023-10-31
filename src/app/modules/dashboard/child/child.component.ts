import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
@Input() xyz:any;
@Input() mysta:boolean | undefined;
@Output() public mydata = new EventEmitter();

myoutputd = [50,80,70,50,60,60,90,80,40];
myobj =[
  {
    name:"kumar",
    age:30,
    phone:'5489715454',
    course:'web'
  },
  {
    name:"ravi",
    age:40,
    phone:'5489715454',
    course:'mern'
  },
  {
    name:"ramu",
    age:32,
    phone:'5489715454',
    course:'php'
  }
]

mydataup()
{
  // this.mydata.emit("this is output datatttttttttttttttttttttttt oooooooooooo");
  // this.mydata.emit(this.myoutputd);
  this.mydata.emit(this.myobj);

}


}

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


mydataup()
{
  this.mydata.emit("this is output data");

}


}

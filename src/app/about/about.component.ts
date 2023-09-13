import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

first:Number = 50;
second:String = "this is text";

abc()
{
  alert("welcome to angular with typescript");
}

}

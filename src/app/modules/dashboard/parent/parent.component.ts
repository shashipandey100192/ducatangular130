import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

first:string="ducat india";
mystatus:boolean = true;

a:number[]=[10,20,30,50,40,60,70,80,50,40,60,20,78];
mydataup: any;


}

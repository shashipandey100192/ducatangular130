import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-mylocal',
  templateUrl: './mylocal.component.html',
  styleUrls: ['./mylocal.component.scss']
})
export class MylocalComponent implements OnInit {
mylocadata:any;
mydata:any;

ngOnInit(): void {
    
this.mylocal();

}

mylocal():void{

  this.mylocadata = localStorage.getItem('mydata');
  this.mydata = JSON.parse(this.mylocadata);
 console.log(this.mydata);

}

}

import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from '../../services/myservice.service';


@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.scss']
})
export class ViewdetailsComponent implements OnInit {
constructor( private myrout:ActivatedRoute, private service:MyserviceService ){}
  id:any;
  single:any;
ngOnInit(): void {
    
  this.id=this.myrout.snapshot.paramMap.get("id");
  console.log(this.id);
  this.mysingle();

}

mysingle()
{
  this.service.singleuser(this.id).subscribe((e)=>{
    console.log(e);
    this.single=e;
  })
}



}

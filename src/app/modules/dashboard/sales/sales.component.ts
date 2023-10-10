import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit{

ngOnInit(): void {
    this.abc();


}
abc()
{
  alert("hi");
}


mydata:any[] = [
{
  cardtitle:'cardname',
  height:'100px',
  bgc:'red'
},
{
  cardtitle:'cardname',
  height:'100px',
  bgc:'red'
},
{
  cardtitle:'cardname',
  height:'100px',
  bgc:'red'
},
{
  cardtitle:'cardname',
  height:'100px',
  bgc:'red'
},
{
  cardtitle:'cardname',
  height:'100px',
  bgc:'red'
},
{
  cardtitle:'cardname',
  height:'100px',
  bgc:'red'
},
{
  cardtitle:'cardname',
  height:'100px',
  bgc:'red'
}
];

}

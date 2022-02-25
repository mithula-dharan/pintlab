import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supermarket',
  templateUrl: './supermarket.component.html',
  styleUrls: ['./supermarket.component.css']
})
export class SupermarketComponent implements OnInit {
  tran: any
  first:any
  supermarkets = [
    { name: 'A', time: '08:00 AM' },
    { name: 'B', time: '10:00 AM' },
    { name: 'C', time: '09:30 AM' },
    { name: 'D', time: '09:00 AM' },
    { name: 'E', time: '02:00 PM' },
    { name: 'F', time: '12:00 PM' },
    { name: 'G', time: '08:15 AM' },
    { name: 'H', time: '10:30 AM' }
  ];

  constructor() { }


  ngOnInit(): void {
  }
  displayData = () => {
    this.first = JSON.stringify(this.supermarkets.map(data => data.time))
    console.log(this.first);

    // if(first.map(data:any=>data[6]=="A")){console.log(first)}

    console.log(JSON.stringify(this.supermarkets.map(data => data).sort((a, b) => (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0))))
   
   
   // Code that console log details.> 10.00AM
    console.log(JSON.stringify(this.supermarkets.map(data => data).sort((a, b) => (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0)).filter(dta => dta.time > "10.00AM")))
    this.tran = this.supermarkets.map(data => data)
  }
}


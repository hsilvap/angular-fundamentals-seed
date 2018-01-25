import { Component } from '@angular/core';
import { NgModuleResolver } from '@angular/compiler/src/ng_module_resolver';

interface Child{
  name:string,
  age:number
}

interface Passenger{
  id: number,
  fullname: string,
  checkedIn : boolean,
  checkInDate: number | null,
  children: Child[] | null
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'], 
  template: `
    <div class="app">
      <h3>Airline passengers 1</h3>
      <ul> 
        <li *ngFor="let passenger of passengers; let i = index;">
          <span 
          class="status"
          [style.backgroundColor]="(passenger.checkedIn ? '#2ecc71' : 'c0392b')">  </span>
           {{i}}: {{ passenger.fullname }}
           <div class="date">
              Check in date: 
              {{ passenger.checkInDate ? (passenger.checkInDate | date:'yMMMMd' | uppercase ) : 'Not checked in'}}
           </div> 
           <div class="children">
              Children: {{passenger.children?.length || 0 }}
           </div>
        </li>
      </ul>
    
    </div>
  `
})
export class AppComponent {
  name: string = '';
  passengers: Passenger[] = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn:true,
    checkInDate: 149074200000,
    children: null
  },
  {
    id: 2,
    fullname: 'Rose',
    checkedIn:false,
    checkInDate: null,
    children: [{name: 'ted', age:12}, {name:'Chloe', age: 8}]
  },
  {
    id: 3,
    fullname: 'James',
    checkedIn:true,
    checkInDate: 149074200000,
    children: null
  },
  {
    id: 4,
    fullname: 'Louise',
    checkedIn:true,
    checkInDate: 149074200000,
    children: [{name: 'Jessica', age:1}]
  },
  {
    id: 5,
    fullname: 'Tina',
    checkedIn:false,
    checkInDate: null,
    children: null
  },
  ]
  handleChange(value: string){
    this.name = value;
  }
}
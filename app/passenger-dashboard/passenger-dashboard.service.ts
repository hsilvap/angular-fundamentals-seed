import { Passenger } from "./models/passenger.interface";

export class PassengerDashboardService{
    constructor(){}

    getPassengers(): Passenger[]{
        return [{
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
          }];
    }
}
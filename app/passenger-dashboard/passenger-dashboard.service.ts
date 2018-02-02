import {Injectable} from '@angular/core';
import { Passenger } from "./models/passenger.interface";

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {Http, Response } from '@angular/http';

const PASSENGER_API: string ='/api/passengers'

@Injectable()
export class PassengerDashboardService{
    constructor(private http: Http){
    }

    getPassenger(id: number): Observable<Passenger>{
        return this.http.get(`${PASSENGER_API}/${id}`) // Obs<HttpResponse>
            .map((response: Response) => response.json())
            .catch((error: any)=> Observable.throw(error.json()));
    }

    getPassengers(): Observable<Passenger[]>{
        return this.http.get(PASSENGER_API) // Obs<HttpResponse>
            .map((response: Response) => response.json())
            .catch((error: any)=> Observable.throw(error.json()));
    }

    updatePassenger(passenger: Passenger): Observable<Passenger>{
        return this.http.put(`${PASSENGER_API}/${passenger.id}`, passenger) // Obs<HttpResponse>
            .map((response: Response) => response.json())
            .catch((error: any)=> Observable.throw(error.json()));
    }

    removePassenger(passenger: Passenger): Observable<Passenger>{
        return this.http.delete(`${PASSENGER_API}/${passenger.id}`) // Obs<HttpResponse>
            .map((response: Response) => response.json())
            .catch((error: any)=> Observable.throw(error.json()));
    }
}
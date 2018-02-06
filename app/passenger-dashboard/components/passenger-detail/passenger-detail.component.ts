import {Component, Input , Output, EventEmitter, OnChanges } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template:`
        <div>
        <span class="status" [style.backgroundColor]="(detail.checkedIn ? '#2ecc71' : 'c0392b')">  </span>
            <div *ngIf="editing"> 
                <input 
                type="text" 
                [value]="detail.fullname"
                (input)="onNameChange(name.value)"
                #name
                > 
            </div>
            <div *ngIf="!editing">
                {{ detail.fullname }}
            </div>
        <div class="date">
            Check in date: 
            {{ detail.checkInDate ? (detail.checkInDate | date:'yMMMMd' | uppercase ) : 'Not checked in'}}
        </div> 
        <button (click)="toggleEdit()">    
            {{ editing ? 'Done': 'Edit'}}
        </button>
        <button (click)="onRemove()">    
            Remove
        </button>
        <button (click)="goToPassenger()">    
            View
        </button>
        </div>
    `
})
export class PassengerDetailComponent implements OnChanges{

    ngOnChanges(changes) {
        if(changes.detail){
            this.detail = Object.assign({}, changes.detail.currentValue);
        }
    }

    @Input()
    detail: Passenger;

    @Output()
    edit: EventEmitter<Passenger> = new EventEmitter();

    @Output()
    remove: EventEmitter<Passenger> = new EventEmitter();

    @Output()
    view: EventEmitter<Passenger> = new EventEmitter();

    editing: boolean = false;

    constructor(){};

    onNameChange(value:string){
        this.detail.fullname = value;
    }

    goToPassenger(){
        this.view.emit(this.detail);
    }

    toggleEdit(){
        if(this.editing){
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }

    onRemove(){
        this.remove.emit(this.detail);
    }

    
}
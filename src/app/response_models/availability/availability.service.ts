import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Availability } from './availabiliy.model';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {

  private availabilities: Availability[] = []
  availabilityChanged = new Subject<Availability[]>;

  constructor() { }


  

  setAvailabilities(availabilities: Availability[]){
    this.availabilities = availabilities;
    this.availabilityChanged.next(this.availabilities.slice());

  }

  getAvailabilities(){
    return this.availabilities.slice();
  }

  getAvailabilitie(index:number){
    return this.availabilities[index];
  }

  addAvailability(availability: Availability){
    this.availabilities.push(availability)
  }


}

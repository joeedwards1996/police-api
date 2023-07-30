import { Injectable } from '@angular/core';
import { StopAndSearchForce } from './stop_and_search_force.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StopAndSearchForceService {

  StopAndSearchForceChanged = new Subject<StopAndSearchForce[]>

  constructor() { }


  private stopAndSearchsForce: StopAndSearchForce[] = [];

  setStopAndSearchsForce(forces: StopAndSearchForce[]){
    this.stopAndSearchsForce = forces;
    this.StopAndSearchForceChanged.next(this.stopAndSearchsForce.slice());

  }

  getStopAndSearchsForce(){
    return this.stopAndSearchsForce.slice();
  }

  getStopAndSearchForce(index:number){
    return this.stopAndSearchsForce[index];
  }


  

}

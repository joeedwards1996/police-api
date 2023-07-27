import { Injectable } from '@angular/core';
import { Force } from './force.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForceService {

  forcesChanged = new Subject<Force[]>

  constructor() { }


  private forces: Force[] = [];

  setForces(forces: Force[]){
    this.forces = forces;
    this.forcesChanged.next(this.forces.slice());

  }

  getForces(){
    return this.forces.slice();
  }

  getForce(index:number){
    return this.forces[index];
  }

}

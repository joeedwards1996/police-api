import { Injectable } from '@angular/core';
import { Neighbourhood } from './neighbourhood.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NeighbourhoodService {


  private hoods: Neighbourhood[] = [];
  hoodChanged = new Subject<Neighbourhood[]>

  constructor() { }


  

  setNeighbourhoods(hoods: Neighbourhood[]){
    this.hoods = hoods;
    this.hoodChanged.next(this.hoods.slice());

  }

  getNeighbourhoods(){
    return this.hoods.slice();
  }

  getNeighbourhood(index:number){
    return this.hoods[index];
  }



}

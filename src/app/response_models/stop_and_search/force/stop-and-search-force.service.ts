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
  private stopAndSearchForceWithPoistions: StopAndSearchForce[] = [];
  private markerPositions: google.maps.LatLngLiteral[] =[];

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

  getStopAndSearchForceWithLocations(){

    this.stopAndSearchForceWithPoistions = [];

    this.stopAndSearchsForce.forEach((item:StopAndSearchForce)=>{
      if(item.location != null){
        this.stopAndSearchForceWithPoistions.push(item);
      }
    });

    return this.stopAndSearchForceWithPoistions;

  }

  getMarkerLocations(){

    this.markerPositions = [];

    this.stopAndSearchsForce.forEach((item:StopAndSearchForce)=>{
      if(item.location != null){
        let position: google.maps.LatLngLiteral = {lat: +item.location.latitude, lng: +item.location.longitude}
        this.markerPositions.push(position);

      }
    });
    return this.markerPositions;

  }


  

}

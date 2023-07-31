import { Injectable } from '@angular/core';
import { StopAndSearchForceService } from '../response_models/stop_and_search/force/stop-and-search-force.service';
import { Subject } from 'rxjs';
import { StopAndSearchForce } from '../response_models/stop_and_search/force/stop_and_search_force.model';

@Injectable({
  providedIn: 'root'
})
export class MappingService {






  markerPositions: google.maps.LatLngLiteral[] = [];
  markerPositionsChanged = new Subject<google.maps.LatLngLiteral[]>

  stopAndSearchForce: StopAndSearchForce[] = [];


  constructor(private stopAndSearchForceService: StopAndSearchForceService) { }





  setMarkers(markerPositions: google.maps.LatLngLiteral[]) {

    this.markerPositions = [];
    this.markerPositions = markerPositions;

    this.markerPositionsChanged.next(this.markerPositions.slice())
    console.log(this.markerPositions)
  }


  getMarkers(){
    return this.markerPositions.slice();
  }

  getStopAndSearchForceWithLoc(){
    return this.stopAndSearchForce.slice();
  }


}

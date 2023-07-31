import { Injectable } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { StreetLevelCrime } from './street_level_crime.model';
import { Subject } from 'rxjs';
import { Location } from "../location.model";

@Injectable({
  providedIn: 'root'
})
export class StreetLevelCrimeService {

  private streetLevelCrimes: StreetLevelCrime[] = [];
  streetLevelCrimeChanged = new Subject<StreetLevelCrime[]>;

  constructor() { }

  setStreetLevelCrimes(streetLevelCrimes: StreetLevelCrime[]){

    this.streetLevelCrimes = streetLevelCrimes;
    this.streetLevelCrimeChanged.next(this.streetLevelCrimes.slice());
    console.log(this.streetLevelCrimes)


  }


  getStreetLevelCrimes(){
    return this.streetLevelCrimes.slice();
  }


  getMarkerLocations(){

    let markerPostions: google.maps.LatLngLiteral[] = [];
    
    this.streetLevelCrimes.forEach((item: StreetLevelCrime)=>{
      if(item.location != null){
        let position: google.maps.LatLngLiteral = {lat: +item.location.latitude, lng: +item.location.longitude}
        markerPostions.push(position);
      }
    });
    return markerPostions;
  }

  getStreetLevelCrimeWithLocations(){

    let crimeWithLocations: StreetLevelCrime[] = [];

    this.streetLevelCrimes.forEach((item: StreetLevelCrime)=>{
      if(item.location != null){
        crimeWithLocations.push(item);
      }
    });

    return crimeWithLocations;

  }

}

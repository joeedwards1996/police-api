import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ForceService } from '../response_models/force.service';
import { Force } from '../response_models/force.model';
import { tap } from 'rxjs';
import { Neighbourhood } from '../response_models/neighbourhood/neighbourhood.model';
import { NeighbourhoodService } from '../response_models/neighbourhood/neighbourhood.service';
import { StopAndSearchForce } from '../response_models/stop_and_search/force/stop_and_search_force.model';
import { StopAndSearchForceService } from '../response_models/stop_and_search/force/stop-and-search-force.service';
import { AvailabilityService } from '../response_models/availability/availability.service';
import { JsonService } from './json.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient, 
              private forceService: ForceService,
              private hoodService: NeighbourhoodService,
              private stopAndSearchForceService: StopAndSearchForceService,
              private availabilitiesService: AvailabilityService,
              private jsonService:JsonService) { }




  //Fetches force fata from police API and stores the values in the force service. 
  getForces(){
    return this.httpClient.get<Force[]>('https://data.police.uk/api/forces').pipe(
      tap(forces =>{
        this.forceService.setForces(forces)
      })
    )
  }

  getAvailabilities(){
    return this.httpClient.get<JSON[]>('https://data.police.uk/api/crimes-street-dates').pipe(
      tap(availabilities=>{
        this.jsonService.convertAvailabilities(availabilities);
      })
    )
  }

  //Fetches neighbourhood data from police API and stores the values in the neighbourhoods service. 
  getHoods(force: string){
    return this.httpClient.get<Neighbourhood[]>(`https://data.police.uk/api/${force}/neighbourhoods`).pipe(
      tap(hoods => {
        this.hoodService.setNeighbourhoods(hoods);
      })
    )
  }

  //returns data about stop and search for a specifc force
  getStopAndSearchForce(force: string, date: string){
    let params = new HttpParams();
 
    params=params.append('force', force);
    params=params.append('date', date);

    return this.httpClient.get<StopAndSearchForce[]>('https://data.police.uk/api/stops-force',{params:params}).pipe(
      tap(
        response=>{
          this.stopAndSearchForceService.setStopAndSearchsForce(response);
        }
      )
    )
 
  }




}

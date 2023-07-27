import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ForceService } from '../response_models/force.service';
import { Force } from '../response_models/force.model';
import { tap } from 'rxjs';
import { Neighbourhood } from '../response_models/neighbourhood/neighbourhood.model';
import { NeighbourhoodService } from '../response_models/neighbourhood/neighbourhood.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient, 
              private forceService: ForceService,
              private hoodService: NeighbourhoodService) { }




  //Fetches force fata from police API and stores the values in the force service. 
  getForces(){
    return this.httpClient.get<Force[]>('https://data.police.uk/api/forces').pipe(
      tap(forces =>{
        this.forceService.setForces(forces)
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




}

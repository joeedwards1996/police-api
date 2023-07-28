import { Injectable } from '@angular/core';
import { StopAndSearchForceService } from '../response_models/stop_and_search/force/stop-and-search-force.service';

@Injectable({
  providedIn: 'root'
})
export class MappingService {

  constructor(private stopAndSearchForceService: StopAndSearchForceService) { }



  setMarkers(){
    
  }


}

import { Injectable } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { StreetLevelCrime } from './street_level_crime.model';
import { Subject } from 'rxjs';

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


  }


  getStreetLevelCrimes(){
    return this.streetLevelCrimes.slice();
  }

}

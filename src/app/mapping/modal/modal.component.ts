import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { MappingService } from '../mapping.service';
import { StopAndSearchForce } from 'src/app/response_models/stop_and_search/force/stop_and_search_force.model';
import { StopAndSearchForceService } from 'src/app/response_models/stop_and_search/force/stop-and-search-force.service';
import { StreetLevelCrime } from 'src/app/response_models/street_level_crime/street_level_crime.model';
import { StreetLevelCrimeService } from 'src/app/response_models/street_level_crime/street-level-crime.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit
 {


  index!: number;
  serviceOption!: number;
  stopAndSearchForce: StopAndSearchForce[] = [];
  stopAndSearchForceItem!: StopAndSearchForce;

  streetLevelCrime: StreetLevelCrime[] = [];
  streetLevelCrimeItem!: StreetLevelCrime;

  constructor(public modalRef: MdbModalRef<ModalComponent>, 
              private mappingService: MappingService,
              private stopAndSearchForceService: StopAndSearchForceService, 
              private streetLevelCrimeService: StreetLevelCrimeService) {}


  



  ngOnInit(): void {

    if (this.serviceOption == 0) {
      this.stopAndSearchForce = this.stopAndSearchForceService.getStopAndSearchForceWithLocations();
      this.stopAndSearchForceItem = this.stopAndSearchForce[this.index]

    }

    if (this.serviceOption == 1) {
      this.streetLevelCrime = this.streetLevelCrimeService.getStreetLevelCrimeWithLocations();
      this.streetLevelCrimeItem = this.streetLevelCrime[this.index];
    }



  }



}

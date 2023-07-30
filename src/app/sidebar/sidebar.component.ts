import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Subscription } from 'rxjs';
import { Force } from '../response_models/force.model';
import { ForceService } from '../response_models/force.service';
import { Neighbourhood } from '../response_models/neighbourhood/neighbourhood.model';
import { NeighbourhoodService } from '../response_models/neighbourhood/neighbourhood.service';
import { StopAndSearchForceService } from '../response_models/stop_and_search/force/stop-and-search-force.service';
import { StopAndSearchForce } from '../response_models/stop_and_search/force/stop_and_search_force.model';
import { MappingService } from '../mapping/mapping.service';
import { AvailabilityService } from '../response_models/availability/availability.service';
import { Availability } from '../response_models/availability/availabiliy.model';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy{

  forces: Force[] = [];
  forceSub!: Subscription;

  availabilities: Availability[] = [];
  availabilitiesSub!: Subscription;

  dates: string[] = [];
  selectedDate: number = 0;
  forceAvailabilities: string[] = [];
  forceAvailabilitySelectedOption: string = "";

  hoods: Neighbourhood[] = [];
  hoodSub!: Subscription;

  stopAndSearchForces: StopAndSearchForce[] = [];

  forceSelectedOption = "";

  serviceOptionSelected: number = 0;

  constructor(private forceService: ForceService,
              private neighbourhoodService: NeighbourhoodService,
              private dataService: DataService,
              private stopAndSearchForceService: StopAndSearchForceService,
              private mappingService: MappingService,
              private availabilitiesService: AvailabilityService,
              private sidebarService: SidebarService){}



  ngOnInit(): void {
    
    this.forceSub = this.forceService.forcesChanged.subscribe(
      (forces: Force[])=>{
        this.forces = forces;
        //console.log(forces)
      }

    );
    this.forces = this.forceService.getForces();



    //getting the availabilities 
    this.availabilitiesSub = this.availabilitiesService.availabilityChanged.subscribe(
      (availabilities: Availability[])=>{

        this.availabilities = availabilities;
        console.log(availabilities);

        this.availabilities.forEach(item=>{
          this.dates.push(item.date)
        })

        this.forceAvailabilities = this.availabilities[this.selectedDate].stop_and_search.slice();

        

        

        


      }
    );
    this.availabilities = this.availabilitiesService.getAvailabilities();
    

  }

  ngOnDestroy(): void {
    this.forceSub.unsubscribe();
  }


  onSubmit(){
    console.log("Form Submitted")
  }

  onServiceOptionSelected(value: string){
    this.serviceOptionSelected = +value; 
    console.log(value)

  }


  forceSelected(value: string){
    console.log(value)
    this.forceSelectedOption = value;

    this.dataService.getHoods(value).subscribe();

    this.hoodSub = this.neighbourhoodService.hoodChanged.subscribe(
      (hoods: Neighbourhood[])=>{
        this.hoods = hoods;
      }
    )
    this.hoods = this.neighbourhoodService.getNeighbourhoods();

  }


  availabilityDateSelected(value: number){
    this.selectedDate = value;
    this.forceAvailabilities = this.availabilities[this.selectedDate].stop_and_search.slice();
    this.sidebarService.setDate(this.dates[value]);
    

  }

  forceAvailabilitySelected(value: string){
    this.forceAvailabilitySelectedOption = value;
    console.log(value)
  }



  onTestClick(){

    console.log(this.forceAvailabilitySelectedOption)
    let date: string = this.dates[this.selectedDate]

    this.dataService.getStopAndSearchForce(this.forceAvailabilitySelectedOption,date).subscribe();


    let stopAndSeachSub: Subscription = this.stopAndSearchForceService.StopAndSearchForceChanged.subscribe(
      (response: StopAndSearchForce[])=>{
        this.stopAndSearchForces = response;
        console.log(response)
        this.mappingService.setMarkers(response);
      }
    )
    this.stopAndSearchForces = this.stopAndSearchForceService.getStopAndSearchsForce();


  }

}

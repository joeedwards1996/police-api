import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Subscription } from 'rxjs';
import { Force } from '../response_models/force.model';
import { ForceService } from '../response_models/force.service';
import { Neighbourhood } from '../response_models/neighbourhood/neighbourhood.model';
import { NeighbourhoodService } from '../response_models/neighbourhood/neighbourhood.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy{

  forces: Force[] = [];
  forceSub!: Subscription;

  hoods: Neighbourhood[] = [];
  hoodSub!: Subscription;

  constructor(private forceService: ForceService,
              private neighbourhoodService: NeighbourhoodService,
              private dataService: DataService){}



  ngOnInit(): void {
    
    this.forceSub = this.forceService.forcesChanged.subscribe(
      (forces: Force[])=>{
        this.forces = forces;
        //console.log(forces)
      }

    );
    this.forces = this.forceService.getForces();
    

  }

  ngOnDestroy(): void {
    this.forceSub.unsubscribe();
  }


  onSubmit(){
    console.log("Form Submitted")
  }


  forceSelected(value: string){
    console.log(value)

    this.dataService.getHoods(value).subscribe();

    this.hoodSub = this.neighbourhoodService.hoodChanged.subscribe(
      (hoods: Neighbourhood[])=>{
        this.hoods = hoods;
      }
    )
    this.hoods = this.neighbourhoodService.getNeighbourhoods();



  }

}

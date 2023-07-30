import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'police-data-app';

  
  forcesSub!: Subscription;

  constructor(private dataService: DataService){}



  ngOnInit(): void {
    
    this.forcesSub = this.dataService.getForces().subscribe();
    this.dataService.getAvailabilities().subscribe();

  }

  ngOnDestroy(): void {
    this.forcesSub.unsubscribe();
  }

  
}

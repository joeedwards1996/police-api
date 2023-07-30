import { Injectable } from '@angular/core';
import { AvailabilityService } from '../response_models/availability/availability.service';
import { Availability } from '../response_models/availability/availabiliy.model';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private availabilityService: AvailabilityService) { }


  availabilities: Availability[] = []


  convertAvailabilities(availabilities: JSON[]){


    availabilities.forEach(item=>{
      
      let obj =  JSON.stringify(item);
      let obj2 = JSON.parse(obj);

      let date = obj2['date'];
      let stop_and_search = obj2['stop-and-search'];

      let availability: Availability = {date: date, stop_and_search: stop_and_search};

      this.availabilities.push(availability);


    })

    this.availabilityService.setAvailabilities(this.availabilities);

  }







}

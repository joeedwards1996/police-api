import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private date: string = "";
  dateChanged = new Subject<string>;

  private serviceOptionSelected: number = 0;
  serviceOptionChanged = new Subject<number>;

  constructor() { }


  setDate(date:string){
    this.date = date;
    this.dateChanged.next(this.date)
    console.log(date);
  }

  getDate(){
    return this.date;
  }


  setServiceOption(value: number){
    this.serviceOptionSelected = value;
    this.serviceOptionChanged.next(value);
  }

  getServiveOption(){
    return this.serviceOptionSelected;
  }
}



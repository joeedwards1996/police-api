import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private date: string = "";
  dateChanged = new Subject<string>;

  constructor() { }


  setDate(date:string){
    this.date = date;
    this.dateChanged.next(this.date)
    console.log(date);
  }

  getDate(){
    return this.date;
  }
}



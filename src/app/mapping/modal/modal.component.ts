import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { MappingService } from '../mapping.service';
import { StopAndSearchForce } from 'src/app/response_models/stop_and_search/force/stop_and_search_force.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit
 {


  index!: number;
  stopAndSearchForce: StopAndSearchForce[] = [];
  stopAndSearchForceItem!: StopAndSearchForce;

  constructor(public modalRef: MdbModalRef<ModalComponent>, private mappingService: MappingService) {}


  



  ngOnInit(): void {
    
    this.stopAndSearchForce = this.mappingService.getStopAndSearchForceWithLoc();
    this.stopAndSearchForceItem = this.stopAndSearchForce[this.index]


  }



}

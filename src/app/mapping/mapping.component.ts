import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MappingService } from './mapping.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from './modal/modal.component';
import { DataService } from '../shared/data.service';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.scss']
})
export class MappingComponent implements OnInit{

  modalRef: MdbModalRef<ModalComponent> | null = null;


  center: google.maps.LatLngLiteral = {lat:53.48095,lng:-2.23743}
  zoom = 6;

  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];

  
  date: string = "";
   

  apiLoaded: Observable<boolean>;

  constructor(httpClient: HttpClient, 
              private mappingService: MappingService, 
              private modalService: MdbModalService,
              private dataService: DataService,
              private sidebarService: SidebarService) {
    // If you're using the `<map-heatmap-layer>` directive, you also have to include the `visualization` library 
    // when loading the Google Maps API. To do so, you can add `&libraries=visualization` to the script URL:
    // https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization

    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyBF7KNEC47G_vAx_aiIyCxo2Y6P8l96-bQ', 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
  }


  ngOnInit(): void {
    
    this.mappingService.markerPositionsChanged.subscribe((response)=>{
      this.markerPositions = response;
    })

    let dateSub: Subscription;
    dateSub = this.sidebarService.dateChanged.subscribe((res:string)=>{
      this.date = res;
    })


  }


  onMapClick(event: google.maps.MapMouseEvent){
    console.log(event.latLng?.toJSON())

    let latLng = event.latLng?.toJSON();

    let lat = latLng?.lat;
    let lng = latLng?.lng;

    if (lat !== undefined && lng !== undefined){
      this.dataService.getStreetLevelCrimes(this.date, lat, lng).subscribe(res=>{
        console.log(res)
      })
    }

    

    

    



  }

  onMarkerClick(value: number){
    this.modalRef = this.modalService.open(ModalComponent, 
      {modalClass: 'modal-dialog-centered modal-xl', data: {index: value}})
    console.log(value)
  }

}

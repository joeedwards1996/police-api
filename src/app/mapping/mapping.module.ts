import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { MappingComponent } from './mapping.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    MappingComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  exports: [
    MappingComponent,
  ],
})
export class MappingModule {}
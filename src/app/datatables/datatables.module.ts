import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatablesComponent } from './datatables/datatables.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DatatablesComponent],
  exports:[DatatablesComponent]
})
export class DatatablesModule { }

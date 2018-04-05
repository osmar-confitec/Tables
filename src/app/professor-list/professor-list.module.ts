import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DatatablesModule } from '../datatables/datatables.module';
import { FormularioProfessorComponent } from './formulario-professor/formulario-professor.component';

@NgModule({
  imports: [
    CommonModule,
    DatatablesModule
  ],
  declarations: [ListComponent, FormularioProfessorComponent]
})
export class ProfessorListModule { }

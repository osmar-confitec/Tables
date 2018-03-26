import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoListComponent } from './aluno-list/aluno-list.component';
import { DatatablesModule } from '../datatables/datatables.module';

@NgModule({
  imports: [
    CommonModule,
    DatatablesModule
  ],
  declarations: [AlunoListComponent],
  exports:[AlunoListComponent]
})
export class AlunoModelModule { }


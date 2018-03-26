import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornecedorEditComponent } from './fornecedor-edit/fornecedor-edit.component';
import { FornecedorNovoComponent } from './fornecedor-novo/fornecedor-novo.component';

import { FornecedorListComponent } from './fornecedor-list/fornecedor-list.component';
import { FornecedorRoutingModule } from './fornecedor-routing/fornecedor-routing.module';
import { DatatablesModule } from '../datatables/datatables.module';

@NgModule({
  imports: [
    CommonModule,
    FornecedorRoutingModule,
    DatatablesModule
  ],
  declarations: [FornecedorEditComponent,
      FornecedorNovoComponent,
      
      FornecedorListComponent]
})
export class FornecedorModelLazyModule { }

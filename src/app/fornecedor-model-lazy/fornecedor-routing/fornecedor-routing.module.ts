import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FornecedorListComponent } from '../fornecedor-list/fornecedor-list.component';
import { FornecedorNovoComponent } from '../fornecedor-novo/fornecedor-novo.component';
import { FornecedorEditComponent } from '../fornecedor-edit/fornecedor-edit.component';
import { RouterModule } from '@angular/router';


const alunosRoutes = [
  {
    path: '', component: FornecedorListComponent,
    children: [
      { path: 'novo', component: FornecedorNovoComponent },
      { path: 'editar:id', component: FornecedorEditComponent }
    ]
  }
]

@NgModule({
  imports:[RouterModule.forChild(alunosRoutes)],
  exports:[RouterModule]
})
export class FornecedorRoutingModule { }

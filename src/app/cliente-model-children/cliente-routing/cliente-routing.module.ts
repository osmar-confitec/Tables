import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClienteListComponent } from '../cliente-list/cliente-list.component';
import { ClienteRouterComponent } from '../cliente-router/cliente-router.component';
import { ClienteInsertComponent } from '../cliente-insert/cliente-insert.component';
import { ClienteEditComponent } from '../cliente-edit/cliente-edit.component';
  const alunosRoutes = [

{path:'cliente' , component:ClienteRouterComponent,
   children:[
   {path:'novo' , component:ClienteInsertComponent},
   {path:':id' , component:ClienteEditComponent},
   {path:'listar' , component:ClienteListComponent}
]}

]


@NgModule({
imports:[RouterModule.forChild(alunosRoutes)],
exports:[RouterModule]
})
export class ClienteRoutingModule { }

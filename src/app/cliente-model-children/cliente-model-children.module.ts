import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { ClienteInsertComponent } from './cliente-insert/cliente-insert.component';

import { ClienteRouterComponent } from './cliente-router/cliente-router.component';
import { ClienteRoutingModule } from './cliente-routing/cliente-routing.module';
import { DatatablesModule } from '../datatables/datatables.module';


@NgModule({
  imports: [
    CommonModule,
    ClienteRoutingModule,
    DatatablesModule
  ],
  declarations: [ClienteListComponent, ClienteEditComponent, ClienteInsertComponent, ClienteRouterComponent],
  exports:[ClienteListComponent]
})
export class ClienteModelChildrenModule { }

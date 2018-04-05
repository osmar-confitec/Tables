import { Routes, RouterModule  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HomeComponent } from './home/home.component';
import { AlunoListComponent } from './aluno-model/aluno-list/aluno-list.component';
import { FormularioProfessorComponent } from './professor-list/formulario-professor/formulario-professor.component';


const APP_ROUTES : Routes = [
    {path:'aluno',component:AlunoListComponent},
    {path:'professor',component:FormularioProfessorComponent},
    
    {path:'fornecedor',loadChildren:'app/fornecedor-model-lazy/fornecedor-model-lazy.module#FornecedorModelLazyModule'},
    {path:''  , component:HomeComponent },
    {path:'**'  , component:PaginaNaoEncontradaComponent }
]; 
export const routing:ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

//, canActivate:[AuthGuardService]
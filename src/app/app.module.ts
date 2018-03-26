import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { routing } from './app.routing';
import { AlunoModelModule } from './aluno-model/aluno-model.module';
import { ClienteModelChildrenModule } from './cliente-model-children/cliente-model-children.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaginaNaoEncontradaComponent
    
  ],
  imports: [
    BrowserModule,
    routing,
    AlunoModelModule,
    ClienteModelChildrenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

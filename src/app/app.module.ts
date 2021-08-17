import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { InicioComponent } from './inicio/inicio.component';
import { CategoriasComponent } from './inicio/categorias/categorias.component';
import { BemAvaliadosComponent } from './inicio/bem-avaliados/bem-avaliados.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { CategoriaComponent } from './inicio/categorias/categoria/categoria.component';
import { CategoriasService } from './inicio/categorias/categorias.service';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    InicioComponent,
    CategoriasComponent,
    BemAvaliadosComponent,
    QuemSomosComponent,
    CategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CategoriasService],
  bootstrap: [AppComponent]
})
export class AppModule { }

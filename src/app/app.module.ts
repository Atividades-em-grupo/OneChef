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

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    InicioComponent,
    CategoriasComponent,
    BemAvaliadosComponent,
    QuemSomosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

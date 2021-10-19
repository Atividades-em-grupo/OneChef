import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { InicioComponent } from './inicio/inicio.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { BemAvaliadosComponent } from './bem-avaliados/bem-avaliados.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { CategoriaComponent } from './categorias/categoria/categoria.component';
import { CategoriasService } from './categorias/categorias.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReceitasComponent } from './receitas/receitas.component';
import { ReceitaComponent } from './receitas/receita/receita.component';
import { ReceitaDetalheComponent } from './receita-detalhe/receita-detalhe.component';
import { MenuDetalheComponent } from './receita-detalhe/menu-detalhe/menu-detalhe.component';
import { ModoPreparoComponent } from './receita-detalhe/modo-preparo/modo-preparo.component';
import { IngredientesComponent } from './receita-detalhe/ingredientes/ingredientes.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    InicioComponent,
    CategoriasComponent,
    BemAvaliadosComponent,
    QuemSomosComponent,
    CategoriaComponent,
    ReceitasComponent,
    ReceitaComponent,
    ReceitaDetalheComponent,
    MenuDetalheComponent,
    ModoPreparoComponent,
    IngredientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [CategoriasService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ReceitaDetalheComponent } from './receita-detalhe/receita-detalhe.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'quem-somos', component: QuemSomosComponent},
  {path: 'categorias/:id_categoria', component: ReceitasComponent},
  {path: 'receitas/:id_receita', component: ReceitaDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { HomeComponent } from './home/home.component';
import { ReceitaDetalheComponent } from './receita-detalhe/receita-detalhe.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'receitas', component: ReceitasComponent },
  { path: 'receitas/:id', component: ReceitaDetalheComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

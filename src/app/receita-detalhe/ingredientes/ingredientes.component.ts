import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Receita } from 'src/app/receitas/receita/receita.model';
import { ReceitasService } from 'src/app/receitas/receitas.service';

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.css']
})
export class IngredientesComponent implements OnInit {

  receitas: Receita;

  constructor(private receitasService: ReceitasService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.receitasService.receitaById(this.route.snapshot.params['id'])
      .subscribe(receitas => {
        this.receitas = receitas;
      })
  }

}

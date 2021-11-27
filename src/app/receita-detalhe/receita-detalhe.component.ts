import { ReceitasService } from './../receitas/receitas.service';
import { Component, OnInit } from '@angular/core';
import { Receita } from '../receitas/receita/receita.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receita-detalhe',
  templateUrl: './receita-detalhe.component.html',
  styleUrls: ['./receita-detalhe.component.css']
})
export class ReceitaDetalheComponent implements OnInit {

  receitas: Receita;

  constructor(private receitasService: ReceitasService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.receitasService.receitaById(this.route.snapshot.params['id'])
      .subscribe(receitas => {
        this.receitas = receitas;
      })
  }

}

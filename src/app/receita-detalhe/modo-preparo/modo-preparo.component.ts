import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Receita } from 'src/app/receitas/receita/receita.model';
import { ReceitasService } from 'src/app/receitas/receitas.service';

@Component({
  selector: 'app-modo-preparo',
  templateUrl: './modo-preparo.component.html',
  styleUrls: ['./modo-preparo.component.css']
})
export class ModoPreparoComponent implements OnInit {

  receitas: Receita;

  constructor(private receitasService: ReceitasService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.receitasService.receitaById(this.route.snapshot.params['id'])
      .subscribe(receitas => {
        this.receitas = receitas;
      })
  }

}

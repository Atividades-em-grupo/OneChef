import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Receita } from 'src/app/receitas/receita/receita.model';
import { ReceitasService } from 'src/app/receitas/receitas.service';

@Component({
  selector: 'app-menu-detalhe',
  templateUrl: './menu-detalhe.component.html',
  styleUrls: ['./menu-detalhe.component.css']
})
export class MenuDetalheComponent implements OnInit {

  receitas: Receita;

  constructor(private receitasService: ReceitasService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.receitasService.receitaById(this.route.snapshot.params['id'])
      .subscribe(receitas => {
        this.receitas = receitas;
      })
  }

}

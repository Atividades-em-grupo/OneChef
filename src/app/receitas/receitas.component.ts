import { ReceitasService } from './receitas.service';
import { Component, OnInit } from '@angular/core';
import { Receita } from './receita/receita.model';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent implements OnInit {

  receitas: Receita[];

  constructor(private receitasService: ReceitasService) { }

  ngOnInit(): void {
    this.receitasService.receitas().subscribe(receitas => {
      this.receitas = receitas;
    });
  }

}

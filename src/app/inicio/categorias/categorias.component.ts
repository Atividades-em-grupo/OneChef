import { Component, OnInit } from '@angular/core';
import { Categoria } from './categoria/categoria.model';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias: Categoria[]

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    // this.categorias = this.categoriasService.categorias();
  }

}

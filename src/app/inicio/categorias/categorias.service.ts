import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  categorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`http://localhost:3000/categorias`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { CHEF_API } from 'src/app/api.app';
import { Categoria } from './categoria/categoria.model';
import { catchError, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  categorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${CHEF_API}/categorias`).pipe(
      map(categorias => categorias),
      catchError(erro => this.exibirErro(erro))
    );
  }

  exibirErro(erro: any): Observable<any> {
    this.exibirMensagem('Erro...', 'Não foi possível conectar-se ao servidor.', 'toast-error');
    return EMPTY;
  }

  exibirMensagem(titulo: string, mensagem: string, tipo: string): void {
    this.toastr.show(mensagem, titulo, { closeButton: true, progressBar: true }, tipo);
  }
}

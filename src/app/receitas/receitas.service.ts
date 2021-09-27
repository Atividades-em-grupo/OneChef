import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Receita } from './receita/receita.model';
import { CHEF_API } from '../api.app';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  receitas(): Observable<Receita[]> {
    return this.http.get<Receita[]>(`${CHEF_API}/receitas`).pipe(
      map(receitas => receitas),
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

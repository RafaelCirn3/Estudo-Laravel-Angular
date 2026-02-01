import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogador } from '../models/jogador.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class JogadorService {
  private api = `${environment.apiUrl}/jogadores`;

  constructor(private http: HttpClient) {}

  listar(): Observable<Jogador[]> {
    return this.http.get<Jogador[]>(this.api);
  }

  buscar(id: number): Observable<Jogador> {
    return this.http.get<Jogador>(`${this.api}/${id}`);
  }

  criar(jogador: Jogador): Observable<Jogador> {
    return this.http.post<Jogador>(this.api, jogador);
  }

  atualizar(id: number, jogador: Jogador): Observable<Jogador> {
    return this.http.put<Jogador>(`${this.api}/${id}`, jogador);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}

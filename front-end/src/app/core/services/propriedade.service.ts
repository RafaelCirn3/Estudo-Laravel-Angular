import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Propriedade } from '../models/propriedade.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PropriedadeService {
  private api = `${environment.apiUrl}/propriedades`;

  constructor(private http: HttpClient) {}

  listar(): Observable<Propriedade[]> {
    return this.http.get<Propriedade[]>(this.api);
  }

  buscar(id: number): Observable<Propriedade> {
    return this.http.get<Propriedade>(`${this.api}/${id}`);
  }

  criar(propriedade: Propriedade): Observable<Propriedade> {
    return this.http.post<Propriedade>(this.api, propriedade);
  }

  atualizar(id: number, propriedade: Propriedade): Observable<Propriedade> {
    return this.http.put<Propriedade>(`${this.api}/${id}`, propriedade);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }

  comprar(propriedadeId: number, jogadorId: number): Observable<any> {
    return this.http.post(`${this.api}/${propriedadeId}/comprar/${jogadorId}`, {});
  }
}

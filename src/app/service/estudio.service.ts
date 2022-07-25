import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from '../models/estudio';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  estudioURL = 'https://apportfolioback.herokuapp.com/api/study/';

  constructor(private httpClient: HttpClient) { }

  public listar(): Observable<Estudio[]> {
    return this.httpClient.get<Estudio[]>(this.estudioURL + 'showAll');
  }

  public buscar(id: number): Observable<Estudio> {
    return this.httpClient.get<Estudio>(this.estudioURL + `detail/${id}`);
  }

  public crear(estudio: Estudio): Observable<any> {
    return this.httpClient.post<any>(this.estudioURL + 'new', estudio);
  }

  public editar(id: number, estudio: Estudio): Observable<any> {
    return this.httpClient.put<any>(this.estudioURL + `edit/${id}`, estudio);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.estudioURL + `delete/${id}`);
  }
}

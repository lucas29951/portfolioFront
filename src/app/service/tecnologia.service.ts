import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tecnologia } from '../models/tecnologia';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {

  tecnoURL = 'https://apportfolioback.herokuapp.com/api/technology/';

  constructor(private httpClient: HttpClient) { }

  public listar(): Observable<Tecnologia[]> {
    return this.httpClient.get<Tecnologia[]>(this.tecnoURL + 'showAll');
  }

  public buscar(id: number): Observable<Tecnologia> {
    return this.httpClient.get<Tecnologia>(this.tecnoURL + `detail/${id}`);
  }

  public crear(tecnologia: Tecnologia): Observable<any> {
    return this.httpClient.post<any>(this.tecnoURL + 'new', tecnologia);
  }

  public editar(id: number, tecnologia: Tecnologia): Observable<any> {
    return this.httpClient.put<any>(this.tecnoURL + `edit/${id}`, tecnologia);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.tecnoURL + `delete/${id}`);
  }
}

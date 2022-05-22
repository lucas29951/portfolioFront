import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  expURL = 'http://localhost:8080/api/experience/';

  constructor(private httpClient: HttpClient) { }

  public listar(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.expURL + 'showAll');
  }

  public buscar(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.expURL + `detail/${id}`);
  }

  public crear(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.expURL + 'new', experiencia);
  }

  public editar(id: number, experiencia: Experiencia): Observable<any> {
    return this.httpClient.put<any>(this.expURL + `edit/${id}`, experiencia);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}

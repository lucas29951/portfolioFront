import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  proyectoURL = 'https://apportfolioback.herokuapp.com/api/project/';
  //proyectoURL = 'http://localhost:8080/api/project/';

  constructor(private httpClient: HttpClient) { }

  public listar(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.proyectoURL + 'showAll');
  }

  public buscar(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.proyectoURL + `detail/${id}`);
  }

  public crear(proyecto: Proyecto): Observable<any> {
    return this.httpClient.post<any>(this.proyectoURL + 'new', proyecto);
  }

  public editar(id: number, proyecto: Proyecto): Observable<any> {
    return this.httpClient.put<any>(this.proyectoURL + `edit/${id}`, proyecto);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.proyectoURL + `delete/${id}`);
  }
}

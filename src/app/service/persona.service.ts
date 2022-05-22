import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personaURL = 'http://localhost:8080/api/person/';

  constructor(private httpClient: HttpClient) { }

  public listar(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.personaURL + 'showAll');
  }

  public buscar(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.personaURL + `detail/${id}`);
  }

  public crear(persona: Persona): Observable<any> {
    return this.httpClient.post<any>(this.personaURL + 'new', persona);
  }

  public editar(id: number, persona: Persona): Observable<any> {
    return this.httpClient.put<any>(this.personaURL + `edit/${id}`, persona);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.personaURL + `delete/${id}`);
  }
  
}

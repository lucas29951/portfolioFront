import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personaURL = 'https://apportfolioback.herokuapp.com/api/person/';
  //personaURL = 'http://localhost:8080/api/person/';

  constructor(
    private httpClient: HttpClient,
    private cookies: CookieService
    ) { }

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
  
  getPerson(id: number): Observable<any> {
    return this.httpClient.get(this.personaURL + '/' + id);
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }

  getToken() {
    return this.cookies.get("token");
  }

  deleteToken(){
    this.cookies.delete("token");
  }

  getPersonStay() {
    const token = this.getToken();
    return token;
  }
}

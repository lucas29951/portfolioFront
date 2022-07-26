import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  contactoURL = 'https://apportfolioback.herokuapp.com/api/contact/';
  //contactoURL = 'http://localhost:8080/api/contact/';

  constructor(private httpClient: HttpClient) { }

  public listar(): Observable<Contacto[]> {
    return this.httpClient.get<Contacto[]>(this.contactoURL + 'showAll');
  }

  public buscar(id: number): Observable<Contacto> {
    return this.httpClient.get<Contacto>(this.contactoURL + `detail/${id}`);
  }

  public crear(contacto: Contacto): Observable<any> {
    return this.httpClient.post<any>(this.contactoURL + 'new', contacto);
  }

  public editar(id: number, contacto: Contacto): Observable<any> {
    return this.httpClient.put<any>(this.contactoURL + `edit/${id}`, contacto);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.contactoURL + `delete/${id}`);
  }

}

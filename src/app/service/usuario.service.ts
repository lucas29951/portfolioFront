import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioURL = 'https://apportfolioback.herokuapp.com/api/user/';
  //usuarioURL = 'http://localhost:8080/api/user/';

  constructor(private httpClient: HttpClient) { }

  public listar(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.usuarioURL + 'showAll');
  }

  public buscar(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(this.usuarioURL + `detail/${id}`);
  }

  public crear(usuario: Usuario): Observable<any> {
    return this.httpClient.post<any>(this.usuarioURL + 'new', usuario);
  }

  public editar(id: number, usuario: Usuario): Observable<any> {
    return this.httpClient.put<any>(this.usuarioURL + `edit/${id}`, usuario);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.usuarioURL + `delete/${id}`);
  }
}

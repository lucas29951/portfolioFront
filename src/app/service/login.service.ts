import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuarioURL = 'https://apportfolioback.herokuapp.com/api/user/';

  constructor(private cookies: CookieService, private httpClient: HttpClient) { }

  login(user: any): Observable<any> {
    return this.httpClient.post(this.usuarioURL + 'login', user);
  }

  getUser(id: number): Observable<any> {
    return this.httpClient.get(this.usuarioURL + '/' + id);
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

  getUserLogged() {
    const token = this.getToken();
    return token;
  }
  
}

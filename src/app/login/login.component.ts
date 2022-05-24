import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  loginError: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService
  ) { }

  login() {
    console.log(this.username);
    console.log(this.password);

    const user = {username: this.username, password: this.password};
    this.loginService.login(user).subscribe(
      data => {
        console.log(data);
        if(data==null) this.loginError = "Error!";

        else {
          this.loginError = "";
          this.loginService.setToken(data.idUsuario);
          this.router.navigate(['/']);
          alert("Se recargo la pagina");
        }
      }
    );
  }

  ngOnInit(): void {
  }

}

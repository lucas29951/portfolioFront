import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.css']
})
export class ExitComponent implements OnInit {

  uLogged: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.uLogged = this.loginService.getUserLogged();
  }

  salir():void {
    this.loginService.deleteToken();
    this.uLogged = '';
    this.router.navigate(['/']);
  }
}

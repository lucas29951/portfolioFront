import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from '../service/persona.service';
import { TokenService } from '../service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  persona: Persona = new Persona(0,'','','','','',[],[],[],[],[]);
  isLogged = false;
  nombreUsuario: string = '';
  roles: string[] = [];
  isAdmin = false;

  constructor(
    private personaService: PersonaService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName()!;

      this.roles = this.tokenService.getAuthorities();
      this.roles.forEach(rol => {
        if(rol === 'ROLE_ADMIN'){
          this.isAdmin = true;
        }
      });
      
      const id = 1;
      this.personaService.buscar(id).subscribe(
        data => {
          this.persona = data;
        },
        err => {
          Swal.fire({
            text: 'Error al cargar datos!',
            icon: 'error',
            iconColor: '#ddd',
            position: 'top',
            background: '#c43725',
            color: '#ddd',
            width: 400,
            showConfirmButton: false,
            timer: 1500
          });
        }
      );
    }else{
      this.isLogged = false;
      this.nombreUsuario = '';
    }
    
  }

}

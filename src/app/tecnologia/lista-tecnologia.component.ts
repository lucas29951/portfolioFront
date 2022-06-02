import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Tecnologia } from '../models/tecnologia';
import { TecnologiaService } from '../service/tecnologia.service';
import { LoginService } from '../service/login.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-lista-tecnologia',
  templateUrl: './lista-tecnologia.component.html',
  styleUrls: ['./lista-tecnologia.component.css']
})
export class ListaTecnologiaComponent implements OnInit {

  @Input() tecnos: Tecnologia[] = [];
  tecnologias: Tecnologia[] = [];
  tecnologia: Tecnologia = new Tecnologia(0,'',0,new Persona(1,'','','','','',[],[],[],[],[]));
  indice: number = 0;
  uLogged: string = '';

  constructor(
    private tecnologiaService: TecnologiaService, 
    private router: Router,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
    this.uLogged = this.loginService.getUserLogged();
    this.indice = 0;
  }

  cargarTecnologias(): void {
    this.tecnologiaService.listar().subscribe(
      data => {
        this.tecnologias = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number, index: number): void {
    this.tecnologiaService.borrar(id).subscribe(
      data => {
        this.tecnos.splice(index,1);
        //alert('Tecnologia eliminada!');
        //this.cargarTecnologias();
        
        /* this.router.navigateByUrl('/exit', { skipLocationChange: true });
        this.router.navigate(['/']); */
      },
      err => {
        alert('Error al eliminar tecnologia. ' + err.message);
      }
    );
  }

  confirmar(id: number,index: number):void {
    this.tecnologiaService.buscar(id).subscribe(
      data => {
        this.tecnologia = data;
        this.indice = index;
        console.log(this.indice);
      },
      err => {
        alert('Error!' + err.message);
      }
    )
}

  salir():void {
    this.loginService.deleteToken();
    this.uLogged = '';
  }

  loggearse():void {
    this.router.navigate(['/login']);
  }

}

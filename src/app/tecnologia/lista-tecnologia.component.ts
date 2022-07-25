import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Tecnologia } from '../models/tecnologia';
import { TecnologiaService } from '../service/tecnologia.service';
import { LoginService } from '../service/login.service';
import { Persona } from '../models/persona';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-tecnologia',
  templateUrl: './lista-tecnologia.component.html',
  styleUrls: ['./lista-tecnologia.component.css']
})
export class ListaTecnologiaComponent implements OnInit {

  @Input() tecnos: Tecnologia[] = [];
  @Input() permis: boolean = false;
  tecnologias: Tecnologia[] = [];
  tecnologia: Tecnologia = new Tecnologia(0,'',0,new Persona(1,'','','','','',[],[],[],[],[]));
  indice: number = 0;
  existTec = false;

  constructor(
    private tecnologiaService: TecnologiaService, 
    private router: Router
    ) { }

  ngOnInit(): void {
    this.indice = 0;
    this.existenTecnologias();
  }

  existenTecnologias(): void {
    this.tecnologiaService.listar().subscribe(
      data => {
        this.tecnologias = data;
        if(this.tecnologias.length != 0){
          this.existTec = true;
        }else{
          this.existTec = false;
        }
      },
      err => {
        console.log(err.message);
      }
    );
  }

  borrar(id: number, index: number): void {
    this.tecnologiaService.borrar(id).subscribe(
      data => {
        Swal.fire({
          text: 'Tecnologia eliminada!',
          icon: 'success',
          position: 'top-end',
          background: '#4a5383',
          color: '#ddd',
          width: 300,
          showConfirmButton: false,
          timer: 1500
        });
        this.tecnos.splice(index,1);
      },
      err => {
        Swal.fire({
          text: 'Error al eliminar tecnologia: ' + err.message,
          icon: 'error',
          iconColor: '#ddd',
          position: 'top-end',
          background: 'c43725',
          color: '#ddd',
          width: 300,
          showConfirmButton: false,
          timer: 1500
        });
      }
    );
  }

  confirmar(id: number,index: number):void {
    this.tecnologiaService.buscar(id).subscribe(
      data => {
        this.tecnologia = data;
        this.indice = index;
      },
      err => {
        console.log('Error!' + err.message);
      }
    )
}

}

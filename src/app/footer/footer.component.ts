import { Component, Input, OnInit } from '@angular/core';
import { Contacto } from '../models/contacto';
import { ContactoService } from '../service/contacto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() conts: Contacto[] = [];
  @Input() permis: boolean = false;

  constructor(
    private contactoService: ContactoService
  ) { }

  ngOnInit(): void {
    this.contactoService.listar().subscribe(
      data => {
        this.conts = data;
      },
      err => {
        Swal.fire({
          text: 'Error al cargar datos: ' + err.message,
          icon: 'error',
          iconColor: '#ddd',
          position: 'top-end',
          background: '#c43725',
          color: '#ddd',
          width: 300,
          showConfirmButton: false,
          timer: 1500
        });
      }
    );
  }

}

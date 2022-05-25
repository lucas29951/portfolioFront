import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';

import { ListaContactoComponent } from './contacto/lista-contacto.component';
import { NuevoContactoComponent } from './contacto/nuevo-contacto.component';
import { EditarContactoComponent } from './contacto/editar-contacto.component';

import { ListaEstudioComponent } from './estudio/lista-estudio.component';
import { NuevoEstudioComponent } from './estudio/nuevo-estudio.component';
import { EditarEstudioComponent } from './estudio/editar-estudio.component';

import { ListaExperienciaComponent } from './experiencia/lista-experiencia.component';
import { NuevaExperienciaComponent } from './experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './experiencia/editar-experiencia.component';

import { ListaPersonaComponent } from './persona/lista-persona.component';
import { NuevaPersonaComponent } from './persona/nueva-persona.component';
import { EditarPersonaComponent } from './persona/editar-persona.component';

import { ListaProyectoComponent } from './proyecto/lista-proyecto.component';
import { NuevoProyectoComponent } from './proyecto/nuevo-proyecto.component';
import { EditarProyectoComponent } from './proyecto/editar-proyecto.component';

import { ListaTecnologiaComponent } from './tecnologia/lista-tecnologia.component';
import { NuevaTecnologiaComponent } from './tecnologia/nueva-tecnologia.component';
import { EditarTecnologiaComponent } from './tecnologia/editar-tecnologia.component';

import { ListaUsuarioComponent } from './usuario/lista-usuario.component';
import { NuevoUsuarioComponent } from './usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario.component';

import { DetalleContactoComponent } from './contacto/detalle-contacto.component';
import { DetalleEstudioComponent } from './estudio/detalle-estudio.component';
import { DetalleExperienciaComponent } from './experiencia/detalle-experiencia.component';
import { DetallePersonaComponent } from './persona/detalle-persona.component';
import { DetalleProyectoComponent } from './proyecto/detalle-proyecto.component';
import { DetalleTecnologiaComponent } from './tecnologia/detalle-tecnologia.component';
import { DetalleUsuarioComponent } from './usuario/detalle-usuario.component';

const routes: Routes = [
  { path: 'usuarios', component: ListaUsuarioComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListaContactoComponent,
    NuevoContactoComponent,
    EditarContactoComponent,
    ListaEstudioComponent,
    NuevoEstudioComponent,
    EditarEstudioComponent,
    ListaExperienciaComponent,
    NuevaExperienciaComponent,
    EditarExperienciaComponent,
    ListaPersonaComponent,
    NuevaPersonaComponent,
    EditarPersonaComponent,
    ListaProyectoComponent,
    NuevoProyectoComponent,
    EditarProyectoComponent,
    ListaTecnologiaComponent,
    NuevaTecnologiaComponent,
    EditarTecnologiaComponent,
    ListaUsuarioComponent,
    NuevoUsuarioComponent,
    EditarUsuarioComponent,
    DetalleContactoComponent,
    DetalleEstudioComponent,
    DetalleExperienciaComponent,
    DetallePersonaComponent,
    DetalleProyectoComponent,
    DetalleTecnologiaComponent,
    DetalleUsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaContactoComponent } from './contacto/lista-contacto.component';
import { NuevoContactoComponent } from './contacto/nuevo-contacto.component';
import { EditarContactoComponent } from './contacto/editar-contacto.component';
import { BorrarContactoComponent } from './contacto/borrar-contacto.component';
import { ListaEstudioComponent } from './estudio/lista-estudio.component';
import { NuevoEstudioComponent } from './estudio/nuevo-estudio.component';
import { EditarEstudioComponent } from './estudio/editar-estudio.component';
import { BorrarEstudioComponent } from './estudio/borrar-estudio.component';
import { ListaExperienciaComponent } from './experiencia/lista-experiencia.component';
import { NuevaExperienciaComponent } from './experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './experiencia/editar-experiencia.component';
import { BorrarExperienciaComponent } from './experiencia/borrar-experiencia.component';
import { ListaPersonaComponent } from './persona/lista-persona.component';
import { NuevaPersonaComponent } from './persona/nueva-persona.component';
import { EditarPersonaComponent } from './persona/editar-persona.component';
import { BorrarPersonaComponent } from './persona/borrar-persona.component';
import { ListaProyectoComponent } from './proyecto/lista-proyecto.component';
import { NuevoProyectoComponent } from './proyecto/nuevo-proyecto.component';
import { EditarProyectoComponent } from './proyecto/editar-proyecto.component';
import { BorrarProyectoComponent } from './proyecto/borrar-proyecto.component';
import { ListaTecnologiaComponent } from './tecnologia/lista-tecnologia.component';
import { NuevaTecnologiaComponent } from './tecnologia/nueva-tecnologia.component';
import { EditarTecnologiaComponent } from './tecnologia/editar-tecnologia.component';
import { BorrarTecnologiaComponent } from './tecnologia/borrar-tecnologia.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaContactoComponent,
    NuevoContactoComponent,
    EditarContactoComponent,
    BorrarContactoComponent,
    ListaEstudioComponent,
    NuevoEstudioComponent,
    EditarEstudioComponent,
    BorrarEstudioComponent,
    ListaExperienciaComponent,
    NuevaExperienciaComponent,
    EditarExperienciaComponent,
    BorrarExperienciaComponent,
    ListaPersonaComponent,
    NuevaPersonaComponent,
    EditarPersonaComponent,
    BorrarPersonaComponent,
    ListaProyectoComponent,
    NuevoProyectoComponent,
    EditarProyectoComponent,
    BorrarProyectoComponent,
    ListaTecnologiaComponent,
    NuevaTecnologiaComponent,
    EditarTecnologiaComponent,
    BorrarTecnologiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

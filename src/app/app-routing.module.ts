import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetalleExperienciaComponent } from './experiencia/detalle-experiencia.component';
import { EditarExperienciaComponent } from './experiencia/editar-experiencia.component';
import { NuevaExperienciaComponent } from './experiencia/nueva-experiencia.component';
import { LoginComponent } from './login/login.component';
import { DetalleProyectoComponent } from './proyecto/detalle-proyecto.component';
import { EditarProyectoComponent } from './proyecto/editar-proyecto.component';
import { NuevoProyectoComponent } from './proyecto/nuevo-proyecto.component';
import { DetalleTecnologiaComponent } from './tecnologia/detalle-tecnologia.component';
import { EditarTecnologiaComponent } from './tecnologia/editar-tecnologia.component';
import { NuevaTecnologiaComponent } from './tecnologia/nueva-tecnologia.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'signin', component: LoginComponent},
  {path: 'add-skill', component: NuevaTecnologiaComponent},
  {path: 'edit-skill/:id', component: EditarTecnologiaComponent},
  {path: 'skill/:id', component: DetalleTecnologiaComponent},
  {path: 'add-exp', component: NuevaExperienciaComponent},
  {path: 'edit-exp/:id', component: EditarExperienciaComponent},
  {path: 'exp/:id', component: DetalleExperienciaComponent},
  {path: 'add-project', component: NuevoProyectoComponent},
  {path: 'edit-project/:id', component: EditarProyectoComponent},
  {path: 'project/:id', component: DetalleProyectoComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

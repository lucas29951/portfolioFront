import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePersonaComponent } from './persona/detalle-persona.component';
import { EditarPersonaComponent } from './persona/editar-persona.component';
import { ListaPersonaComponent } from './persona/lista-persona.component';
import { NuevaPersonaComponent } from './persona/nueva-persona.component';

const routes: Routes = [
 /* {path: '', component: ListaPersonaComponent},
  {path: 'new', component: NuevaPersonaComponent},
  {path: 'edit/:id', component: EditarPersonaComponent},
  {path: 'detail/:id', component: DetallePersonaComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

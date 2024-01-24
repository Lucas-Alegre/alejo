import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './componentes/content/content.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

const routes: Routes = [
  { path: '', redirectTo: 'listado', pathMatch: 'full' },
  { path: 'listado', component:  ContentComponent },
  { path: 'listado/:id', component:  DetallesComponent },
  { path: 'agregar-video', component:  FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

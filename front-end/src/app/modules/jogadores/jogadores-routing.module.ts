import { Routes } from '@angular/router';
import { JogadoresListComponent } from './jogadores-list/jogadores-list.component';
import { JogadoresFormComponent } from './jogadores-form/jogadores-form.component';

export const routes: Routes = [
  { path: 'lista', component: JogadoresListComponent },
  { path: 'criar', component: JogadoresFormComponent },
  { path: 'editar/:id', component: JogadoresFormComponent }
];

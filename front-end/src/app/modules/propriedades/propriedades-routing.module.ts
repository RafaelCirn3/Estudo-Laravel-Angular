import { Routes } from '@angular/router';
import { PropriedadesListComponent } from './propriedades-list/propriedades-list.component';
import { PropriedadesFormComponent } from './propriedades-form/propriedades-form.component';

export const routes: Routes = [
  { path: 'lista', component: PropriedadesListComponent },
  { path: 'criar', component: PropriedadesFormComponent },
  { path: 'editar/:id', component: PropriedadesFormComponent }
];

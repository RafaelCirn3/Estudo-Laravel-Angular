import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'jogadores',
    loadChildren: () =>
      import('./modules/jogadores/jogadores-module')
        .then(m => m.JogadoresModule)
  },
  {
    path: 'propriedades',
    loadChildren: () =>
      import('./modules/propriedades/propriedades-module')
        .then(m => m.PropriedadesModule)
  }
];

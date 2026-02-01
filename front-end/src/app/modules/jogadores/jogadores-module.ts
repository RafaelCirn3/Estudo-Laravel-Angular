import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './jogadores-routing.module';


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class JogadoresModule {}
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './propriedades-routing.module';

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class PropriedadesModule {}

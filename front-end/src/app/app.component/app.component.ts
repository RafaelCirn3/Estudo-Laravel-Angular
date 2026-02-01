import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogadoresListComponent } from '../modules/jogadores/jogadores-list/jogadores-list.component';
import { JogadoresFormComponent } from '../modules/jogadores/jogadores-form/jogadores-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    JogadoresListComponent,
    JogadoresFormComponent
  ],
  template: `
    <h1>Banco Imobiliário</h1>

    <app-jogadores-form></app-jogadores-form>
    <hr />
    <app-jogadores-list></app-jogadores-list>
  `
})
export class AppComponent {}

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  jogadoresMenuOpen = false;
  propriedadesMenuOpen = false;

  toggleJogadoresMenu() {
    this.jogadoresMenuOpen = !this.jogadoresMenuOpen;
    if (this.jogadoresMenuOpen) {
      this.propriedadesMenuOpen = false;
    }
  }

  togglePropriedadesMenu() {
    this.propriedadesMenuOpen = !this.propriedadesMenuOpen;
    if (this.propriedadesMenuOpen) {
      this.jogadoresMenuOpen = false;
    }
  }

  closeMenus() {
    this.jogadoresMenuOpen = false;
    this.propriedadesMenuOpen = false;
  }
}

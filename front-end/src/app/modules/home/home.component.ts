import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  features = [
    {
      icon: '👥',
      title: 'Gerenciar Jogadores',
      description: 'Cadastre, edite e gerencie todos os jogadores da partida.'
    },
    {
      icon: '🏠',
      title: 'Controlar Propriedades',
      description: 'Administre todas as propriedades disponíveis no jogo.'
    },
    {
      icon: '💰',
      title: 'Transações',
      description: 'Realize compras e vendas de propriedades entre jogadores.'
    },
    {
      icon: '📊',
      title: 'Relatórios',
      description: 'Visualize estatísticas e informações detalhadas da partida.'
    }
  ];
}

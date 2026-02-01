import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JogadorService } from '../../../core/services/jogador.service';
import { Jogador } from '../../../core/models/jogador.model';

@Component({
  selector: 'app-jogadores-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './jogadores-list.html',
  styleUrls: ['./jogadores-list.scss']
})
export class JogadoresListComponent implements OnInit {
  jogadores: Jogador[] = [];
  loading = false;
  error = '';

  constructor(private service: JogadorService) {}

  ngOnInit() {
    this.carregar();
  }

  carregar() {
    this.loading = true;
    this.error = '';
    this.service.listar().subscribe({
      next: (res) => {
        this.jogadores = res;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erro ao carregar jogadores';
        this.loading = false;
        console.error(err);
      }
    });
  }

  excluir(id: number, nome: string) {
    if (confirm(`Tem certeza que deseja excluir o jogador ${nome}?`)) {
      this.service.excluir(id).subscribe({
        next: () => this.carregar(),
        error: (err) => {
          alert('Erro ao excluir jogador');
          console.error(err);
        }
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PropriedadeService } from '../../../core/services/propriedade.service';
import { Propriedade } from '../../../core/models/propriedade.model';

@Component({
  selector: 'app-propriedades-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './propriedades-list.component.html',
  styleUrls: ['./propriedades-list.component.scss']
})
export class PropriedadesListComponent implements OnInit {
  propriedades: Propriedade[] = [];
  loading = false;
  error = '';

  constructor(private service: PropriedadeService) {}

  ngOnInit() {
    this.carregar();
  }

  carregar() {
    this.loading = true;
    this.error = '';
    this.service.listar().subscribe({
      next: (res) => {
        this.propriedades = res;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erro ao carregar propriedades';
        this.loading = false;
        console.error(err);
      }
    });
  }

  excluir(id: number, nome: string) {
    if (confirm(`Tem certeza que deseja excluir a propriedade ${nome}?`)) {
      this.service.excluir(id).subscribe({
        next: () => this.carregar(),
        error: (err) => {
          alert('Erro ao excluir propriedade');
          console.error(err);
        }
      });
    }
  }
}

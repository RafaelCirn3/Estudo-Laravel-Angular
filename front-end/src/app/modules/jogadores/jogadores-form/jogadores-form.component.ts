import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { JogadorService } from '../../../core/services/jogador.service';

@Component({
  selector: 'app-jogadores-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './jogadores-form.html',
  styleUrls: ['./jogadores-form.scss']
})
export class JogadoresFormComponent implements OnInit {
  form!: FormGroup;
  id?: number;
  isEditMode = false;
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private service: JogadorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      saldo: [0, [Validators.required, Validators.min(0)]]
    });

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = Number(idParam);
      this.isEditMode = true;
      this.carregarJogador();
    }
  }

  carregarJogador() {
    if (!this.id) return;

    this.loading = true;
    this.service.buscar(this.id).subscribe({
      next: (jogador) => {
        this.form.patchValue(jogador);
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erro ao carregar jogador';
        this.loading = false;
        console.error(err);
      }
    });
  }

  salvar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    const req = this.isEditMode && this.id
      ? this.service.atualizar(this.id, this.form.value)
      : this.service.criar(this.form.value);

    req.subscribe({
      next: () => {
        this.router.navigate(['/jogadores/lista']);
      },
      error: (err) => {
        this.error = 'Erro ao salvar jogador';
        this.loading = false;
        console.error(err);
      }
    });
  }

  cancelar() {
    this.router.navigate(['/jogadores/lista']);
  }

  getErrorMessage(field: string): string {
    const control = this.form.get(field);
    if (!control || !control.touched) return '';

    if (control.hasError('required')) return 'Campo obrigatório';
    if (control.hasError('minlength')) return 'Mínimo de 3 caracteres';
    if (control.hasError('min')) return 'Valor deve ser maior ou igual a 0';

    return '';
  }
}

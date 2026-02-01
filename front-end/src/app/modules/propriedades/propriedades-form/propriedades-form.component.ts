import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PropriedadeService } from '../../../core/services/propriedade.service';
import { JogadorService } from '../../../core/services/jogador.service';
import { Jogador } from '../../../core/models/jogador.model';

@Component({
  selector: 'app-propriedades-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './propriedades-form.component.html',
  styleUrls: ['./propriedades-form.component.scss']
})
export class PropriedadesFormComponent implements OnInit {
  form!: FormGroup;
  id?: number;
  isEditMode = false;
  loading = false;
  error = '';
  jogadores: Jogador[] = [];



  constructor(
    private fb: FormBuilder,
    private service: PropriedadeService,
    private jogadorService: JogadorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      valor: [0, [Validators.required, Validators.min(0)]],
      jogador_id: [null]
    });

    this.carregarJogadores();

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = Number(idParam);
      this.isEditMode = true;
      this.carregarPropriedade();
    }
  }

  carregarJogadores() {
    this.jogadorService.listar().subscribe({
      next: (jogadores) => {
        this.jogadores = jogadores;
      },
      error: (err) => {
        console.error('Erro ao carregar jogadores', err);
      }
    });
  }

  carregarPropriedade() {
    if (!this.id) return;

    this.loading = true;
    this.service.buscar(this.id).subscribe({
      next: (propriedade) => {
        this.form.patchValue(propriedade);
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erro ao carregar propriedade';
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
    const formData = { ...this.form.value };
    if (!formData.jogador_id) {
      formData.jogador_id = null;
    }

    const req = this.isEditMode && this.id
      ? this.service.atualizar(this.id, formData)
      : this.service.criar(formData);

    req.subscribe({
      next: () => {
        this.router.navigate(['/propriedades/lista']);
      },
      error: (err) => {
        this.error = 'Erro ao salvar propriedade';
        this.loading = false;
        console.error(err);
      }
    });
  }

  cancelar() {
    this.router.navigate(['/propriedades/lista']);
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

export interface Propriedade {
  id?: number;
  nome: string;
  valor: number;
  jogador_id?: number;
  jogador?: {
    id: number;
    nome: string;
  };
  created_at?: string;
  updated_at?: string;
}

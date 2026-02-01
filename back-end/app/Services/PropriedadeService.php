<?php

namespace App\Services;

use App\Models\Jogador;
use App\Models\Propriedade;
use Illuminate\Support\Facades\DB;

class PropriedadeService
{
    public function comprar(Jogador $jogador, Propriedade $propriedade)
    {
        if ($propriedade->jogador_id !== null) {
            throw new \Exception('Propriedade já possui dono');
        }

        if ($jogador->saldo < $propriedade->valor) {
            throw new \Exception('Saldo insuficiente');
        }

        DB::transaction(function () use ($jogador, $propriedade) {
            $jogador->decrement('saldo', $propriedade->valor);
            $propriedade->update([
                'jogador_id' => $jogador->id
            ]);
        });
    }

    public function vender(Jogador $jogador, Propriedade $propriedade)
    {
        if ($propriedade->jogador_id !== $jogador->id) {
            throw new \Exception('Jogador não é dono da propriedade');
        }

        DB::transaction(function () use ($jogador, $propriedade) {
            $jogador->increment('saldo', $propriedade->valor);
            $propriedade->update([
                'jogador_id' => null
            ]);
        });
    }

    public function transferir(
        Jogador $vendedor,
        Jogador $comprador,
        Propriedade $propriedade
    ) {
        if ($propriedade->jogador_id !== $vendedor->id) {
            throw new \Exception('Vendedor não é dono da propriedade');
        }

        if ($comprador->saldo < $propriedade->valor) {
            throw new \Exception('Saldo insuficiente');
        }

        DB::transaction(function () use ($vendedor, $comprador, $propriedade) {
            $comprador->decrement('saldo', $propriedade->valor);
            $vendedor->increment('saldo', $propriedade->valor);

            $propriedade->update([
                'jogador_id' => $comprador->id
            ]);
        });
    }
}

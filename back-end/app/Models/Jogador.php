<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Jogador extends Model
{
    protected $table = 'jogadores';
protected $fillable = [
        'nome',
        'saldo'
    ];

    public function propriedades()
    {
        return $this->hasMany(Propriedade::class);
    }
}

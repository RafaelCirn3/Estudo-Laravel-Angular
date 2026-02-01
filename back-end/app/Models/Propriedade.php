<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Propriedade extends Model
{
    protected $fillable = ['nome', 'valor', 'jogador_id'];

    public function jogador()
    {
        return $this->belongsTo(Jogador::class);
    }
}

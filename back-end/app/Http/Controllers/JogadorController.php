<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Jogador  ;
use App\Http\Requests\StoreJogadorRequest;

class JogadorController extends Controller
{
    public function index()
    {
        return Jogador::with('propriedades')->get();
    }

    public function store(StoreJogadorRequest $request)
    {
        return Jogador::create($request->validated());
    }

    public function show(Jogador $jogador)
    {
        return $jogador->load('propriedades');
    }

    public function update(StoreJogadorRequest $request, Jogador $jogador)
    {
        $jogador->update($request->validated());
        return $jogador;
    }

    public function destroy(Jogador $jogador)
    {
        $jogador->delete();
        return response()->noContent();
    }
}

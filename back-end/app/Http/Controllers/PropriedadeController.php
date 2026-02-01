<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\PropriedadeService;
use App\Models\Propriedade;
use App\Models\Jogador;
use App\Http\Requests\StorePropriedadeRequest;

class PropriedadeController extends Controller
{
    public function __construct(
        private PropriedadeService $service
    ) {}

    public function index()
    {
        return Propriedade::with('jogador')->get();
    }

    public function store(StorePropriedadeRequest $request)
    {
        return Propriedade::create($request->validated());
    }

    public function show(Propriedade $propriedade)
    {
        return $propriedade->load('jogador');
    }

    public function update(StorePropriedadeRequest $request, Propriedade $propriedade)
    {
        $propriedade->update($request->validated());
        return $propriedade;
    }

    public function destroy(Propriedade $propriedade)
    {
        $propriedade->delete();
        return response()->noContent();
    }

    public function comprar(Propriedade $propriedade, Jogador $jogador)
    {
        $this->service->comprar($jogador, $propriedade);

        return response()->json([
            'message' => 'Propriedade comprada com sucesso'
        ]);
    }
}

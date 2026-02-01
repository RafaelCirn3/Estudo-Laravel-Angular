<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JogadorController;
use App\Http\Controllers\PropriedadeController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::apiResource('jogadores', JogadorController::class);
Route::apiResource('propriedades', PropriedadeController::class);


Route::post('/propriedades/{propriedade}/comprar/{jogador}', [PropriedadeController::class, 'comprar']);
Route::post('/propriedades/{propriedade}/vender/{jogador}', [PropriedadeController::class, 'vender']);
Route::post('/propriedades/{propriedade}/transferir', [PropriedadeController::class, 'transferir']);

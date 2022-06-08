<?php

use App\Http\Controllers\profileController;
use App\Http\Controllers\rolController;
use App\Http\Controllers\taquillaController;
use App\Http\Controllers\turnoController;
use App\Http\Controllers\userController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('usuario',userController::class);
Route::resource('/rol', rolController::class);
Route::resource('/taquilla', taquillaController::class);
Route::resource('turno', turnoController::class);
Route::resource('perfil', profileController::class);



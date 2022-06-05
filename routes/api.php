<?php

use App\Http\Controllers\rolsController;
use App\Http\Controllers\UsersController;
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

// Ruta de prueba
Route::get('/saludar', function () { #
    return response()->json([
        'message' => 'Welcome to the API',
        'status' => 'success',
    ]);
});

Route::resource('users', UsersController::class);
Route::resource('roles',rolsController::class);


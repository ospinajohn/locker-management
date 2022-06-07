<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\TryCatch;

class userController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(
            ['data' => User::all()], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $data = User::create($request->all());
            return response()->json(['data' => $data], 201);
        } catch (\Exception $e) {
            return response()->json([
                'data' => $e->getMessage(),
                'msg' => 'Error al crear el usuario'
            ], 500);

        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            return response()->json(
                ['data' => User::findOrFail($id)], 200); 
        } catch (\Exception $e) {
            return response()->json([
                'data' => $e->getMessage(),
                'message' => 'Usuario no encontrado'
            ], 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $data = User::findOrFail($id);
            $data->update($request->all());
            return response()->json([
            'data' => $data
            ], 200);
        } catch (\Exception $e) { 
            return response()->json([
            'data' => $e->getMessage(),
            'msg' => 'Error, no se pudo actualizar el usuario'
            ], 500);
        }
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $data = User::findOrFail($id);
            $data->delete();
            return response()->json([
            'data' => $data,
            'msg' => 'Eliminado correctamente'
        ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage(),
                'msg' => 'No se pudo eliminar'
            ], 500);
        }
        
    }
}

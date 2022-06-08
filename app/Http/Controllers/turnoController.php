<?php

namespace App\Http\Controllers;

use App\Models\turno;
use Illuminate\Http\Request;

class turnoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            return response()->json(
            ['data' => turno::all()], 200);
            
        } catch (\Exception $e) {
            return response()->json(
            [
                'error' => $e->getMessage(),
                'msg' => 'Error al mostrar los turnos'
            ], 500);
        }
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
            $data = turno::create($request->all());
            return response()->json(
            ['data' => $data], 201);
            
        } catch (\Exception $e) {
            return response()->json(
            [
                'error' => $e->getMessage(),
                'msg' => 'Error al crear el turno'
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
            ['data' => turno::findOrFail($id)], 200); # findOrFail sirve para buscar un registro en especifico por su id
            
        } catch (\Exception $e) {
            return response()->json(
            [
                'error' => $e->getMessage(),
                'msg' => 'Error al mostrar el turno'
            ], 500);
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
            $data = turno::findOrFail($id);
            $data->update($request->all());
            return response()->json([
                'data' => $data
            ], 200);
            
        } catch (\Exception $e) {
            return response()->json(
            [
                'error' => $e->getMessage(),
                'msg' => 'Error al actualizar el turno'
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
            $data = turno::findOrFail($id);
            $data->delete();
            return response()->json(
            ['data' => $data], 200);
            
        } catch (\Exception $e) {
            return response()->json(
            [
                'error' => $e->getMessage(),
                'msg' => 'Error al eliminar el turno'
            ], 500);
        }
    }
}

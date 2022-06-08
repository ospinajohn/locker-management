<?php

namespace App\Http\Controllers;

use App\Models\profile;
use Illuminate\Http\Request;

class profileController extends Controller
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
            ['data' => profile::all()], 200);
            
        } catch (\Exception $e) {
            return response()->json(
            [
                'error' => $e->getMessage(),
                'msg' => 'Error al mostrar los perfiles'
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
            $data = profile::create($request->all());
            return response()->json(
            ['data' => $data], 201);
            
        } catch (\Exception $e) {
            return response()->json(
            [
                'error' => $e->getMessage(),
                'msg' => 'Error al crear el perfil'
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
                ['data' => profile::findOrFail($id)], 200);
            
        } catch (\Exception $e) {
            return response()->json(
            [
                'error' => $e->getMessage(),
                'msg' => 'Error al mostrar el perfil'
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
            $data = profile::findOrFail($id);
            $data->update($request->all());
            return response()->json(
            ['data' => $data], 200);
            
        } catch (\Exception $e) {
            return response()->json(
            [
                'error' => $e->getMessage(),
                'msg' => 'Error al actualizar el perfil'
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
            $data = profile::findOrFail($id);
            $data->delete();
            return response()->json(
            ['data' => $data], 200);
            
        } catch (\Exception $e) {
            return response()->json(
            [
                'error' => $e->getMessage(),
                'msg' => 'Error al eliminar el perfil'
            ], 500);
        }
    }
}

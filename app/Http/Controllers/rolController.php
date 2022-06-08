<?php

namespace App\Http\Controllers;

use App\Models\rol;
use Illuminate\Http\Request;

class rolController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(
            ['data' => rol::all()], 200);
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
            $data = rol::create($request->all());
            return response()->json(['data' => $data], 201);
        } catch (\Exception $e) {
            return response()->json(
            ['error' => $e->getMessage()], 500);
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
            ['data' => rol::findOrFail($id)], 200); # findOrFail sirve para buscar un registro en especifico por su id
        } catch (\Exception $e) {
            return response()->json(
            ['error' => $e->getMessage()], 500);
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
            $data = rol::findOrFail($id);
            $data->update($request->all());
            return response()->json([
            'data' => $data
            ], 200);
        } catch (\Exception $e) {
            return response()->json(
            ['error' => $e->getMessage()], 500);
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
        //
    }
}

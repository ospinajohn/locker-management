<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class rolsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('rols')->insert([[
            'name' => 'Administrador',
            'status' => 'activo',
        ],[
            'name' => 'Operador',
            'status' => 'activo'
        ],[
            'name' => 'Usuario',
            'status' => 'activo'
        ]
    ]);
    }
}

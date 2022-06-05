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
        # crear registro de la base de datos
        DB::table('rol')->insert([[
            'name' => 'Admin',
            'status' => 'active'
        ],[
            'name' => 'Usuario',
            'status' => 'active'
        ],[
            'name' => 'Funcionario',
            'status' => 'active'
        ]]);
    }
}

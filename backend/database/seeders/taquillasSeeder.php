<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class taquillasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('taquilla')->insert([[
            'name' => 'Cordoba',
            'status' => 'activo',
        ],[
            'name' => 'Bodegas',
            'status' => 'activo'
        ]
    ]);
    }
}

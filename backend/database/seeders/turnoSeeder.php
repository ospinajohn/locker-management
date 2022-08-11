<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class turnoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('turno')->insert([[
            'status' => 'activo',
            'fecha' => '2020-01-01',
            'hinicio' => '09:00:00',
            'hfin' => '18:00:00',
            'profile_id' => 1,
            'id_taquilla' => 1,
        ],
            [
                'status' => 'activo',
                'fecha' => '2020-01-02',
                'hinicio' => '09:00:00',
                'hfin' => '18:00:00',
                'profile_id' => 2,
                'id_taquilla' => 1,
            ]]);
    }
}

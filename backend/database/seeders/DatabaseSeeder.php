<?php

namespace Database\Seeders;

use App\Models\profile;
use App\Models\turno;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\factories\UserFactory;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call([
            rolsSeeder::class,
            taquillasSeeder::class,
            turnoSeeder::class
        ]);
        User::factory()->create();
        turno::factory()->count(10)->create();
        profile::factory()->count(10)->create();
    }
    
}

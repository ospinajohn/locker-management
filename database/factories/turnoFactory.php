<?php

namespace Database\Factories;

use App\Models\turno;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\turno>
 */
class turnoFactory extends Factory
{
    protected $model = turno::class; // protected es para que no se pueda sobreescribir
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'status' => $this->faker->randomElement(['activo','inactivo']),
            'fecha' => $this->faker->dateTimeBetween('-1 years', 'now'),
            'hinicio' => $this->faker->time('H:i:s', 'now'), 
            'hfin' => $this->faker->time('H:i:s', 'now'),
            'profile_id' => $this->faker->numberBetween(1,10),
            'taquilla_id' => $this->faker->numberBetween(1,2),
        ];
    }
}

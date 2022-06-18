<?php

namespace Database\Factories;

use App\Models\profile;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\profile>
 */
class profileFactory extends Factory
{
    protected $model = profile::class; // protected es para que no se pueda sobreescribir
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'status' => $this->faker->randomElement(['activo','inactivo']),
            'user_id' => $this->faker->numberBetween(1,200),
            'rol_id' => $this->faker->numberBetween(1,3)
        ];
    }
}

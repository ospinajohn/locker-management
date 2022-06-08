<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('turnos', function (Blueprint $table) {
            $table->increments("id");
            $table->string('status')->default('activo');
            $table->date('fecha');
            $table->time('hinicio');
            $table->time('hfin');
            $table->integer('profile_id')->unsigned();
            $table->integer('taquilla_id')->unsigned();

            #referencia perfil
            $table->foreign('profile_id')
                ->references('id')
                ->on('profiles');

            #referencia taquilla
            $table->foreign('taquilla_id')
                ->references('id')
                ->on('taquillas');



            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('turno');
    }
};

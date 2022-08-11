<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class profile extends Model
{
    protected $fillable = ['profiles'];

    //Primero se crea un modelo para obetner los datos que estan relacionados con la tabla profile con usaurio y rol
    public function Usuario() {
        return $this->belongsTo(user::class, 'user_id');
    }
    public function Rol() {
        return $this->belongsTo(rol::class, 'rol_id');
    }
}

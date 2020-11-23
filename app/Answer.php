<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    use Notifiable;
    protected $table = "answers";
    protected $primaryKey = "id";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'idUser','preguntaUno','preguntaDos','preguntaTres','preguntaCuatro','preguntaCinco','preguntaSeis','preguntaSiete','preguntaOcho'
    ];

}

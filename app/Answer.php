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
        'idUser','preguntaUno','preguntaDos','preguntaTres','preguntaCuatro','preguntaCinco','preguntaSeis','preguntaSiete','preguntaOcho',
        'timeP1_P2','timeP2_P3','timeP3_P4','timeP4_P5','timeP5_P6','timeP6_P7','timeP7_P8','timeP8_FIN'
    ];

}

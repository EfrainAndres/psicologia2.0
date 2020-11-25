<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Roles extends Model
{
    use Notifiable;
    protected $table = "roles";
    protected $primaryKey = "id";

    function usuarios(){
        return $this->hasMany(User::class,'FK_RolesId','id');
    }
}
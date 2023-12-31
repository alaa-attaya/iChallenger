<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GameMode extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'max_players_per_team'];

    public function game()
    {
        return $this->belongsTo(Game::class);
    }

    public function tournaments()
    {
        return $this->hasMany(Tournament::class);
    }
}

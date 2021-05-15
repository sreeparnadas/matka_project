<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlayDetails extends Model
{
    use HasFactory;

    /**
     * @var mixed
     */
    private $play_master_id;
    /**
     * @var mixed
     */
    private $game_type_id;
    /**
     * @var mixed
     */
    private $number_position_id;
    /**
     * @var mixed
     */
    private $game_value;
}

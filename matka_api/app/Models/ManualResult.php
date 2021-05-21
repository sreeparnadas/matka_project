<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ManualResult extends Model
{
    use HasFactory;

    /**
     * @var mixed
     */
    private $number_combination_id;
    /**
     * @var mixed
     */
    private $draw_master_id;
}

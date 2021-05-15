<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlayMaster extends Model
{
    use HasFactory;

    /**
     * @var mixed
     */
    private $barcode_number;
    /**
     * @var mixed
     */
    private $draw_master_id;
    /**
     * @var mixed
     */
    private $terminal_id;
}

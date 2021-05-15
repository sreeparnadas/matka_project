<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Webpatser\Uuid\Uuid;

class PlayMaster extends Model
{
    use HasFactory;


    private $draw_master_id;
    /**
     * @var mixed
     */
    private $terminal_id;
    protected static function boot()
    {
        parent::boot();
        static::saving(function ($model) {
            $model->barcode_number =  (string)Uuid::generate();
        });
    }
}

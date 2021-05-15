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

    //for your help, https://www.larashout.com/how-to-use-laravel-model-observers
    /**
     * @var mixed
     */
    private $id;

    protected static function boot()
    {
        parent::boot();
        PlayMaster::saving(function ($model) {
            $model->barcode_number = str_replace('-','x', ((string)Uuid::generate()));
        });
    }
}

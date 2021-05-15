<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Webpatser\Uuid\Uuid;
use App\Models\DrawMaster;

class PlayMaster extends Model
{
    use HasFactory;


    private $draw_master_id;
    /**
     * @var mixed
     */

    //for your help, https://www.larashout.com/how-to-use-laravel-model-observers
    /**
     * @var mixed
     */
    private $id;
    /**
     * @var mixed
     */
    private $user_id;

    protected static function boot()
    {
        parent::boot();
        PlayMaster::saving(function ($model) {
            $model->barcode_number = str_replace('-','x', ((string)Uuid::generate()));
        });
    }

    public function terminal(){
        return $this->belongsTo(User::class,'user_id');
    }
    public function draw_time(){
        return $this->belongsTo(DrawMaster::class,'draw_master_id');
    }
}

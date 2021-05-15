<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Webpatser\Uuid\Uuid;
use Illuminate\Support\Str;

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


    public static function boot()
    {
        parent::boot();
//        self::creating(function ($model) {
//            $model->barcode_number = (string) Uuid::generate(4);
//        });

        static::creating(function ($post) {
            $post->{$post->barcode_number} = (string) Str::uuid();
        });
    }
}

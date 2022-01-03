<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDrawMastersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('draw_masters', function (Blueprint $table) {
            $table->id();
            $table->string('draw_name',100)->nullable(true);
            $table->time('start_time');
            $table->time('end_time');
            $table->string('visible_time',20)->nullable(true);
            $table ->foreignId('game_id')->references('id')->on('games')->onDelete('cascade');
            $table->tinyInteger('active')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('draw_masters');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlayDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('play_details', function (Blueprint $table) {
            $table->id();
            $table ->foreignId('play_master_id')->references('id')->on('play_masters')->onDelete('cascade');
            $table ->foreignId('game_type_id')->references('id')->on('game_types')->onDelete('cascade');
            $table ->foreignId('number_combination_id')->references('id')->on('number_combinations')->onDelete('cascade');
            $table->integer('quantity')->nullable(false);
            $table->decimal('mrp',5,4)->default(0);
            $table->decimal('commission',10,2)->default(0);
            $table->decimal('payout',10,2)->default(0);

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
        Schema::dropIfExists('play_details');
    }
}

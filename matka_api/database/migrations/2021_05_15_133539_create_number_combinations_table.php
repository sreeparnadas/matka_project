<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNumberCombinationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('number_combinations', function (Blueprint $table) {
            $table->id();
            $table->integer('single_number')->nullable(false);
            $table->integer('triple_number')->nullable(false)->unique();
            $table->string('visible_triple_number',3)->nullable(false);
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
        Schema::dropIfExists('number_combinations');
    }
}

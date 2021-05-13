<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id('id');
            $table->string('user_name')->nullable(true);
            $table->string('email')->unique();

            $table->string('password');
            $table->rememberToken();
            $table->string('mobile1',15)->nullable(true);

            $table->foreignId('user_type_id')->references('id')->on('user_types')->onDelete('cascade');
            $table->decimal('opening_balance')->default(0);
            $table->decimal('closing_balance')->default(0);
            $table->tinyInteger('inforce')->default(1);
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
        Schema::dropIfExists('users');
    }
}

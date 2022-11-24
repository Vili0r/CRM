<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('deals', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('pipeline')->nullable();
            $table->string('stage');
            $table->string('amount');
            $table->string('probability');
            $table->timestamp('close_date');
            $table->foreignId('account_id')->nullable()->constrained();
            $table->foreignId('user_id')->constrained();
            $table->morphs('convert');
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
        Schema::dropIfExists('deals');
    }
};

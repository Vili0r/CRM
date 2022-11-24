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
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->string('client_full_name');
            $table->string('client_address');
            $table->string('client_city');
            $table->string('client_post_code');
            $table->string('client_phone_number');
            $table->string('invoice_number');
            $table->timestamp('invoice_date');
            $table->longText('notes')->nullable();
            $table->decimal('tax_percent')->default(0);
            $table->foreignId('account_id')->nullable()->constrained();
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
        Schema::dropIfExists('invoices');
    }
};

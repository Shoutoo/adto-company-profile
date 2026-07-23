<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('vendors', function (Blueprint $table) {
            $table->id();
            $table->string('company_name');
            $table->string('business_field');
            $table->string('contact_person');
            $table->string('email');
            $table->string('phone');
            $table->text('address');
            $table->string('npwp')->nullable();
            $table->enum('business_category', ['supplier', 'contractor', 'consultant', 'distributor', 'other']);
            $table->text('description')->nullable();
            $table->enum('status', ['pending', 'reviewing', 'approved', 'rejected'])->default('pending');
            $table->json('documents')->nullable();
            $table->text('notes')->nullable();
            $table->timestamp('reviewed_at')->nullable();
            $table->foreignId('reviewed_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('vendors');
    }
};

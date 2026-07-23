<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('rfqs', function (Blueprint $table) {
            $table->id();
            $table->string('rfq_number')->unique();
            $table->string('full_name');
            $table->string('company_name');
            $table->string('email');
            $table->string('phone');
            $table->string('service_type');
            $table->string('project_location');
            $table->string('estimated_budget')->nullable();
            $table->string('project_timeline')->nullable();
            $table->text('description');
            $table->enum('status', ['new', 'reviewing', 'quoted', 'accepted', 'rejected', 'closed'])->default('new');
            $table->text('notes')->nullable();
            $table->foreignId('assigned_to')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamp('responded_at')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('rfqs');
    }
};

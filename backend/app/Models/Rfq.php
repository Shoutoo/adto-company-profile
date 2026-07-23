<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Rfq extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'rfqs';

    protected $fillable = [
        'rfq_number', 'full_name', 'company_name', 'email', 'phone',
        'service_type', 'project_location', 'estimated_budget',
        'project_timeline', 'description',
        'status', 'notes', 'assigned_to', 'responded_at',
    ];

    protected function casts(): array
    {
        return ['responded_at' => 'datetime'];
    }

    protected static function booted(): void
    {
        static::creating(function (Rfq $rfq) {
            $rfq->rfq_number = 'RFQ-' . date('Y') . '-' . str_pad(
                (static::whereYear('created_at', date('Y'))->count() + 1),
                4, '0', STR_PAD_LEFT
            );
        });
    }

    public function assignee()
    {
        return $this->belongsTo(User::class, 'assigned_to');
    }
}

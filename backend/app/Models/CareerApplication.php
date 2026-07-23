<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CareerApplication extends Model
{
    use HasFactory;

    protected $fillable = [
        'career_id', 'full_name', 'email', 'phone',
        'cover_letter', 'resume_path', 'portfolio_url',
        'status', 'notes', 'reviewed_at', 'reviewed_by',
    ];

    protected function casts(): array
    {
        return ['reviewed_at' => 'datetime'];
    }

    public function career(): BelongsTo
    {
        return $this->belongsTo(Career::class);
    }

    public function reviewer(): BelongsTo
    {
        return $this->belongsTo(User::class, 'reviewed_by');
    }
}

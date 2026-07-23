<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Career extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'title', 'department', 'location', 'employment_type',
        'description', 'requirements', 'benefits', 'salary_range',
        'deadline', 'status', 'is_featured', 'sort_order',
    ];

    protected function casts(): array
    {
        return [
            'requirements' => 'array',
            'benefits' => 'array',
            'deadline' => 'date',
            'is_featured' => 'boolean',
            'sort_order' => 'integer',
        ];
    }

    public function applications(): HasMany
    {
        return $this->hasMany(CareerApplication::class);
    }

    public function scopeActive($query)
    {
        return $query->where('status', 'active')
            ->where(fn($q) => $q->whereNull('deadline')->orWhere('deadline', '>=', now()));
    }
}

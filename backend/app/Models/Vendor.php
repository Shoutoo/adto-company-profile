<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Vendor extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'company_name', 'business_field', 'contact_person',
        'email', 'phone', 'address', 'npwp',
        'business_category', 'description',
        'status', 'documents', 'notes', 'reviewed_at', 'reviewed_by',
    ];

    protected function casts(): array
    {
        return [
            'documents' => 'array',
            'reviewed_at' => 'datetime',
        ];
    }

    public function reviewer()
    {
        return $this->belongsTo(User::class, 'reviewed_by');
    }
}

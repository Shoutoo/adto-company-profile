<?php

namespace App\Repositories;

use App\Models\Vendor;
use Illuminate\Pagination\LengthAwarePaginator;

class VendorRepository extends BaseRepository
{
    public function __construct(Vendor $model)
    {
        parent::__construct($model);
    }

    public function paginateWithFilters(array $filters = [], int $perPage = 15): LengthAwarePaginator
    {
        $query = $this->model
            ->when(isset($filters['search']), fn($q) =>
                $q->where('company_name', 'like', "%{$filters['search']}%")
                  ->orWhere('email', 'like', "%{$filters['search']}%")
            )
            ->when(isset($filters['status']), fn($q) => $q->where('status', $filters['status']))
            ->when(isset($filters['business_category']), fn($q) => $q->where('business_category', $filters['business_category']));

        return $query->orderBy($filters['sort_by'] ?? 'created_at', $filters['sort_order'] ?? 'desc')
            ->paginate($perPage);
    }
}

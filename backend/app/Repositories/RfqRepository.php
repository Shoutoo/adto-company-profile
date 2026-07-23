<?php

namespace App\Repositories;

use App\Models\Rfq;
use Illuminate\Pagination\LengthAwarePaginator;

class RfqRepository extends BaseRepository
{
    public function __construct(Rfq $model)
    {
        parent::__construct($model);
    }

    public function paginateWithFilters(array $filters = [], int $perPage = 15): LengthAwarePaginator
    {
        $query = $this->model->with('assignee:id,name')
            ->when(isset($filters['search']), fn($q) =>
                $q->where('rfq_number', 'like', "%{$filters['search']}%")
                  ->orWhere('company_name', 'like', "%{$filters['search']}%")
                  ->orWhere('full_name', 'like', "%{$filters['search']}%")
            )
            ->when(isset($filters['status']), fn($q) => $q->where('status', $filters['status']))
            ->when(isset($filters['service_type']), fn($q) => $q->where('service_type', $filters['service_type']));

        return $query->orderBy($filters['sort_by'] ?? 'created_at', $filters['sort_order'] ?? 'desc')
            ->paginate($perPage);
    }
}

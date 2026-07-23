<?php

namespace App\Repositories;

use App\Models\Career;
use App\Models\CareerApplication;
use Illuminate\Pagination\LengthAwarePaginator;

class CareerRepository extends BaseRepository
{
    public function __construct(Career $model)
    {
        parent::__construct($model);
    }

    public function paginateWithFilters(array $filters = [], int $perPage = 15): LengthAwarePaginator
    {
        $query = $this->model->withCount('applications')
            ->when(isset($filters['search']), fn($q) =>
                $q->where('title', 'like', "%{$filters['search']}%")
                  ->orWhere('department', 'like', "%{$filters['search']}%")
            )
            ->when(isset($filters['status']), fn($q) => $q->where('status', $filters['status']))
            ->when(isset($filters['department']), fn($q) => $q->where('department', $filters['department']))
            ->when(isset($filters['employment_type']), fn($q) => $q->where('employment_type', $filters['employment_type']));

        return $query->orderBy($filters['sort_by'] ?? 'sort_order', $filters['sort_order'] ?? 'asc')
            ->paginate($perPage);
    }

    public function paginateApplications(int $careerId, array $filters = [], int $perPage = 15): LengthAwarePaginator
    {
        return CareerApplication::with('career:id,title')
            ->where('career_id', $careerId)
            ->when(isset($filters['status']), fn($q) => $q->where('status', $filters['status']))
            ->orderBy('created_at', 'desc')
            ->paginate($perPage);
    }
}

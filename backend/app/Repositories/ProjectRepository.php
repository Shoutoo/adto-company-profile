<?php

namespace App\Repositories;

use App\Models\Project;
use Illuminate\Pagination\LengthAwarePaginator;

class ProjectRepository extends BaseRepository
{
    public function __construct(Project $model)
    {
        parent::__construct($model);
    }

    public function paginateWithFilters(array $filters = [], int $perPage = 15): LengthAwarePaginator
    {
        $query = $this->model->with('industry:id,name,slug')
            ->when(isset($filters['search']), fn($q) =>
                $q->where('title', 'like', "%{$filters['search']}%")
                  ->orWhere('client_name', 'like', "%{$filters['search']}%")
            )
            ->when(isset($filters['status']), fn($q) => $q->where('status', $filters['status']))
            ->when(isset($filters['industry_id']), fn($q) => $q->where('industry_id', $filters['industry_id']))
            ->when(isset($filters['is_featured']), fn($q) => $q->where('is_featured', $filters['is_featured']));

        return $query->orderBy($filters['sort_by'] ?? 'sort_order', $filters['sort_order'] ?? 'asc')
            ->paginate($perPage);
    }

    public function findBySlug(string $slug): ?Project
    {
        return $this->model->with(['industry', 'images'])->where('slug', $slug)->first();
    }
}

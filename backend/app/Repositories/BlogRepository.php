<?php

namespace App\Repositories;

use App\Models\Blog;
use Illuminate\Pagination\LengthAwarePaginator;

class BlogRepository extends BaseRepository
{
    public function __construct(Blog $model)
    {
        parent::__construct($model);
    }

    public function paginateWithFilters(array $filters = [], int $perPage = 15): LengthAwarePaginator
    {
        $query = $this->model->with(['author:id,name,avatar', 'tags:id,name,slug'])
            ->when(isset($filters['search']), fn($q) =>
                $q->where('title', 'like', "%{$filters['search']}%")
            )
            ->when(isset($filters['status']), fn($q) =>
                $q->where('status', $filters['status'])
            )
            ->when(isset($filters['tag']), fn($q) =>
                $q->whereHas('tags', fn($tq) => $tq->where('slug', $filters['tag']))
            );

        return $query->orderBy($filters['sort_by'] ?? 'created_at', $filters['sort_order'] ?? 'desc')
            ->paginate($perPage);
    }

    public function findBySlug(string $slug): ?Blog
    {
        return $this->model->with(['author:id,name,avatar', 'tags'])->where('slug', $slug)->first();
    }
}

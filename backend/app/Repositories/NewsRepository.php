<?php

namespace App\Repositories;

use App\Models\News;
use Illuminate\Pagination\LengthAwarePaginator;

class NewsRepository extends BaseRepository
{
    public function __construct(News $model)
    {
        parent::__construct($model);
    }

    public function paginateWithFilters(array $filters = [], int $perPage = 15): LengthAwarePaginator
    {
        $query = $this->model->with('author:id,name,avatar')
            ->when(isset($filters['search']), fn($q) =>
                $q->where('title', 'like', "%{$filters['search']}%")
                  ->orWhere('excerpt', 'like', "%{$filters['search']}%")
            )
            ->when(isset($filters['status']), fn($q) =>
                $q->where('status', $filters['status'])
            )
            ->when(isset($filters['category']), fn($q) =>
                $q->where('category', $filters['category'])
            )
            ->when(isset($filters['is_featured']), fn($q) =>
                $q->where('is_featured', $filters['is_featured'])
            );

        $sortBy = $filters['sort_by'] ?? 'created_at';
        $sortOrder = $filters['sort_order'] ?? 'desc';

        return $query->orderBy($sortBy, $sortOrder)->paginate($perPage);
    }

    public function findBySlug(string $slug): ?News
    {
        return $this->model->with('author:id,name,avatar')
            ->where('slug', $slug)
            ->first();
    }

    public function getPublished(int $limit = 10): \Illuminate\Database\Eloquent\Collection
    {
        return $this->model->with('author:id,name')
            ->published()
            ->orderBy('published_at', 'desc')
            ->limit($limit)
            ->get();
    }
}

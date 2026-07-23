<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\StoreNewsRequest;
use App\Http\Requests\Api\UpdateNewsRequest;
use App\Http\Resources\NewsResource;
use App\Repositories\NewsRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class NewsController extends Controller
{
    public function __construct(private readonly NewsRepository $repository) {}

    public function index(Request $request): JsonResponse
    {
        $news = $this->repository->paginateWithFilters($request->query());

        return response()->json([
            'success' => true,
            'message' => 'News retrieved.',
            'data' => NewsResource::collection($news)->response()->getData(true)['data'],
            'meta' => [
                'current_page' => $news->currentPage(),
                'last_page' => $news->lastPage(),
                'per_page' => $news->perPage(),
                'total' => $news->total(),
            ],
        ]);
    }

    public function store(StoreNewsRequest $request): JsonResponse
    {
        $data = $request->validated();
        $data['slug'] = $data['slug'] ?? Str::slug($data['title']);
        $data['author_id'] = $request->user()->id;

        if ($data['status'] === 'published' && empty($data['published_at'])) {
            $data['published_at'] = now();
        }

        $news = $this->repository->create($data);

        return response()->json([
            'success' => true,
            'message' => 'News created successfully.',
            'data' => new NewsResource($news),
        ], 201);
    }

    public function show(int $id): JsonResponse
    {
        $news = $this->repository->find($id);

        if (!$news) {
            return response()->json(['success' => false, 'message' => 'News not found.'], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'News retrieved.',
            'data' => new NewsResource($news),
        ]);
    }

    public function update(UpdateNewsRequest $request, int $id): JsonResponse
    {
        $data = $request->validated();

        if (isset($data['title']) && !isset($data['slug'])) {
            $data['slug'] = Str::slug($data['title']);
        }

        if (isset($data['status']) && $data['status'] === 'published') {
            $data['published_at'] = $data['published_at'] ?? now();
        }

        $news = $this->repository->update($id, $data);

        return response()->json([
            'success' => true,
            'message' => 'News updated successfully.',
            'data' => new NewsResource($news),
        ]);
    }

    public function destroy(int $id): JsonResponse
    {
        $this->repository->delete($id);

        return response()->json(['success' => true, 'message' => 'News deleted successfully.']);
    }
}

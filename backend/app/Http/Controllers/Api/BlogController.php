<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\StoreBlogRequest;
use App\Http\Requests\Api\UpdateBlogRequest;
use App\Http\Resources\BlogResource;
use App\Repositories\BlogRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class BlogController extends Controller
{
    public function __construct(private readonly BlogRepository $repository) {}

    public function index(Request $request): JsonResponse
    {
        $blogs = $this->repository->paginateWithFilters($request->query());

        return response()->json([
            'success' => true,
            'message' => 'Blogs retrieved.',
            'data' => BlogResource::collection($blogs)->response()->getData(true)['data'],
            'meta' => [
                'current_page' => $blogs->currentPage(),
                'last_page' => $blogs->lastPage(),
                'per_page' => $blogs->perPage(),
                'total' => $blogs->total(),
            ],
        ]);
    }

    public function store(StoreBlogRequest $request): JsonResponse
    {
        $data = $request->validated();
        $data['slug'] = $data['slug'] ?? Str::slug($data['title']);
        $data['author_id'] = $request->user()->id;
        $tags = $data['tags'] ?? [];
        unset($data['tags']);

        if ($data['status'] === 'published' && empty($data['published_at'])) {
            $data['published_at'] = now();
        }

        $blog = $this->repository->create($data);

        if (!empty($tags)) {
            $blog->tags()->sync($tags);
        }

        return response()->json([
            'success' => true,
            'message' => 'Blog created successfully.',
            'data' => new BlogResource($blog->load(['author', 'tags'])),
        ], 201);
    }

    public function show(int $id): JsonResponse
    {
        $blog = $this->repository->find($id);

        if (!$blog) {
            return response()->json(['success' => false, 'message' => 'Blog not found.'], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'Blog retrieved.',
            'data' => new BlogResource($blog->load(['author', 'tags'])),
        ]);
    }

    public function update(UpdateBlogRequest $request, int $id): JsonResponse
    {
        $data = $request->validated();
        $tags = $data['tags'] ?? null;
        unset($data['tags']);

        $blog = $this->repository->update($id, $data);

        if ($tags !== null) {
            $blog->tags()->sync($tags);
        }

        return response()->json([
            'success' => true,
            'message' => 'Blog updated successfully.',
            'data' => new BlogResource($blog->load(['author', 'tags'])),
        ]);
    }

    public function destroy(int $id): JsonResponse
    {
        $this->repository->delete($id);

        return response()->json(['success' => true, 'message' => 'Blog deleted successfully.']);
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\StoreProjectRequest;
use App\Http\Requests\Api\UpdateProjectRequest;
use App\Http\Resources\ProjectResource;
use App\Repositories\ProjectRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProjectController extends Controller
{
    public function __construct(private readonly ProjectRepository $repository) {}

    public function index(Request $request): JsonResponse
    {
        $projects = $this->repository->paginateWithFilters($request->query());

        return response()->json([
            'success' => true,
            'message' => 'Projects retrieved.',
            'data' => ProjectResource::collection($projects)->response()->getData(true)['data'],
            'meta' => [
                'current_page' => $projects->currentPage(),
                'last_page' => $projects->lastPage(),
                'per_page' => $projects->perPage(),
                'total' => $projects->total(),
            ],
        ]);
    }

    public function store(StoreProjectRequest $request): JsonResponse
    {
        $data = $request->validated();
        $data['slug'] = $data['slug'] ?? Str::slug($data['title']);

        $project = $this->repository->create($data);

        return response()->json([
            'success' => true,
            'message' => 'Project created successfully.',
            'data' => new ProjectResource($project),
        ], 201);
    }

    public function show(int $id): JsonResponse
    {
        $project = $this->repository->findOrFail($id);

        return response()->json([
            'success' => true,
            'message' => 'Project retrieved.',
            'data' => new ProjectResource($project->load(['industry', 'images'])),
        ]);
    }

    public function update(UpdateProjectRequest $request, int $id): JsonResponse
    {
        $data = $request->validated();
        $project = $this->repository->update($id, $data);

        return response()->json([
            'success' => true,
            'message' => 'Project updated successfully.',
            'data' => new ProjectResource($project),
        ]);
    }

    public function destroy(int $id): JsonResponse
    {
        $this->repository->delete($id);

        return response()->json(['success' => true, 'message' => 'Project deleted successfully.']);
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\StoreCareerRequest;
use App\Http\Requests\Api\UpdateCareerRequest;
use App\Http\Resources\CareerResource;
use App\Repositories\CareerRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CareerController extends Controller
{
    public function __construct(private readonly CareerRepository $repository) {}

    public function index(Request $request): JsonResponse
    {
        $careers = $this->repository->paginateWithFilters($request->query());

        return response()->json([
            'success' => true,
            'message' => 'Careers retrieved.',
            'data' => CareerResource::collection($careers)->response()->getData(true)['data'],
            'meta' => [
                'current_page' => $careers->currentPage(),
                'last_page' => $careers->lastPage(),
                'per_page' => $careers->perPage(),
                'total' => $careers->total(),
            ],
        ]);
    }

    public function store(StoreCareerRequest $request): JsonResponse
    {
        $career = $this->repository->create($request->validated());

        return response()->json([
            'success' => true,
            'message' => 'Career posting created.',
            'data' => new CareerResource($career),
        ], 201);
    }

    public function show(int $id): JsonResponse
    {
        $career = $this->repository->findOrFail($id);

        return response()->json([
            'success' => true,
            'message' => 'Career retrieved.',
            'data' => new CareerResource($career),
        ]);
    }

    public function update(UpdateCareerRequest $request, int $id): JsonResponse
    {
        $career = $this->repository->update($id, $request->validated());

        return response()->json([
            'success' => true,
            'message' => 'Career updated.',
            'data' => new CareerResource($career),
        ]);
    }

    public function destroy(int $id): JsonResponse
    {
        $this->repository->delete($id);

        return response()->json(['success' => true, 'message' => 'Career deleted.']);
    }
}

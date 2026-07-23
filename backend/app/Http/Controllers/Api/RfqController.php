<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\UpdateRfqStatusRequest;
use App\Http\Resources\RfqResource;
use App\Repositories\RfqRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class RfqController extends Controller
{
    public function __construct(private readonly RfqRepository $repository) {}

    public function index(Request $request): JsonResponse
    {
        $rfqs = $this->repository->paginateWithFilters($request->query());

        return response()->json([
            'success' => true,
            'message' => 'RFQs retrieved.',
            'data' => RfqResource::collection($rfqs)->response()->getData(true)['data'],
            'meta' => [
                'current_page' => $rfqs->currentPage(),
                'last_page' => $rfqs->lastPage(),
                'per_page' => $rfqs->perPage(),
                'total' => $rfqs->total(),
            ],
        ]);
    }

    public function show(int $id): JsonResponse
    {
        $rfq = $this->repository->findOrFail($id);

        return response()->json([
            'success' => true,
            'message' => 'RFQ retrieved.',
            'data' => new RfqResource($rfq),
        ]);
    }

    public function updateStatus(UpdateRfqStatusRequest $request, int $id): JsonResponse
    {
        $rfq = $this->repository->update($id, [
            'status' => $request->validated('status'),
            'notes' => $request->validated('notes'),
            'assigned_to' => $request->validated('assigned_to'),
            'responded_at' => in_array($request->validated('status'), ['quoted', 'rejected'])
                ? now() : null,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'RFQ status updated.',
            'data' => new RfqResource($rfq),
        ]);
    }

    public function destroy(int $id): JsonResponse
    {
        $this->repository->delete($id);

        return response()->json(['success' => true, 'message' => 'RFQ deleted.']);
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\UpdateVendorStatusRequest;
use App\Http\Resources\VendorResource;
use App\Repositories\VendorRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Jobs\SendVendorStatusEmail;

class VendorController extends Controller
{
    public function __construct(private readonly VendorRepository $repository) {}

    public function index(Request $request): JsonResponse
    {
        $vendors = $this->repository->paginateWithFilters($request->query());

        return response()->json([
            'success' => true,
            'message' => 'Vendors retrieved.',
            'data' => VendorResource::collection($vendors)->response()->getData(true)['data'],
            'meta' => [
                'current_page' => $vendors->currentPage(),
                'last_page' => $vendors->lastPage(),
                'per_page' => $vendors->perPage(),
                'total' => $vendors->total(),
            ],
        ]);
    }

    public function show(int $id): JsonResponse
    {
        $vendor = $this->repository->findOrFail($id);

        return response()->json([
            'success' => true,
            'message' => 'Vendor retrieved.',
            'data' => new VendorResource($vendor),
        ]);
    }

    public function updateStatus(UpdateVendorStatusRequest $request, int $id): JsonResponse
    {
        $vendor = $this->repository->update($id, [
            'status' => $request->validated('status'),
            'notes' => $request->validated('notes'),
            'reviewed_at' => now(),
            'reviewed_by' => $request->user()->id,
        ]);

        SendVendorStatusEmail::dispatch($vendor);

        return response()->json([
            'success' => true,
            'message' => 'Vendor status updated.',
            'data' => new VendorResource($vendor),
        ]);
    }

    public function destroy(int $id): JsonResponse
    {
        $this->repository->delete($id);

        return response()->json(['success' => true, 'message' => 'Vendor deleted successfully.']);
    }
}

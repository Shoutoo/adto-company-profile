<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\UploadMediaRequest;
use App\Http\Resources\MediaResource;
use App\Models\Media;
use App\Services\MediaService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MediaController extends Controller
{
    public function __construct(private readonly MediaService $mediaService) {}

    public function index(Request $request): JsonResponse
    {
        $media = Media::when($request->category, fn($q) => $q->where('category', $request->category))
            ->when($request->search, fn($q) => $q->where('original_name', 'like', "%{$request->search}%"))
            ->orderBy('created_at', 'desc')
            ->paginate($request->integer('per_page', 24));

        return response()->json([
            'success' => true,
            'message' => 'Media retrieved.',
            'data' => MediaResource::collection($media)->response()->getData(true)['data'],
            'meta' => [
                'current_page' => $media->currentPage(),
                'last_page' => $media->lastPage(),
                'per_page' => $media->perPage(),
                'total' => $media->total(),
            ],
        ]);
    }

    public function upload(UploadMediaRequest $request): JsonResponse
    {
        $media = $this->mediaService->upload(
            file: $request->file('file'),
            category: $request->input('category', 'general'),
            uploadedBy: $request->user()->id,
        );

        return response()->json([
            'success' => true,
            'message' => 'File uploaded successfully.',
            'data' => new MediaResource($media),
        ], 201);
    }

    public function destroy(int $id): JsonResponse
    {
        $media = Media::findOrFail($id);
        $this->mediaService->delete($media);

        return response()->json(['success' => true, 'message' => 'Media deleted.']);
    }
}

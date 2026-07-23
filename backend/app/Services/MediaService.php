<?php

namespace App\Services;

use App\Models\Media;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\ImageManager;

class MediaService
{
    private const ALLOWED_MIME_TYPES = [
        'image/jpeg', 'image/png', 'image/webp', 'image/gif',
        'application/pdf',
    ];

    private const MAX_SIZE_BYTES = 10 * 1024 * 1024; // 10MB

    /**
     * Upload a file and create a Media record.
     */
    public function upload(
        UploadedFile $file,
        string $category = 'general',
        string $disk = 'public',
        int $uploadedBy = 0
    ): Media {
        $filename = Str::uuid() . '.' . $file->getClientOriginalExtension();
        $folder = 'uploads/' . $category . '/' . date('Y/m');
        $path = $file->storeAs($folder, $filename, $disk);

        $width = null;
        $height = null;

        if (str_starts_with($file->getMimeType() ?? '', 'image/')) {
            [$width, $height] = getimagesize($file->getRealPath());
        }

        return Media::create([
            'filename' => $filename,
            'original_name' => $file->getClientOriginalName(),
            'mime_type' => $file->getMimeType() ?? 'application/octet-stream',
            'size' => $file->getSize(),
            'path' => $path,
            'disk' => $disk,
            'category' => $category,
            'width' => $width,
            'height' => $height,
            'uploaded_by' => $uploadedBy,
        ]);
    }

    /**
     * Delete a media file and its record.
     */
    public function delete(Media $media): bool
    {
        Storage::disk($media->disk)->delete($media->path);
        return $media->delete();
    }
}

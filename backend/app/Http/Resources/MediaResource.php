<?php
namespace App\Http\Resources;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
class MediaResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'filename' => $this->filename,
            'original_name' => $this->original_name,
            'mime_type' => $this->mime_type,
            'size' => $this->size,
            'size_formatted' => $this->size_formatted,
            'url' => $this->url,
            'path' => $this->path,
            'disk' => $this->disk,
            'category' => $this->category,
            'alt' => $this->alt,
            'caption' => $this->caption,
            'width' => $this->width,
            'height' => $this->height,
            'created_at' => $this->created_at?->toIso8601String(),
        ];
    }
}

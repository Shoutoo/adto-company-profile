<?php
namespace App\Http\Resources;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
class ProjectResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'client_name' => $this->client_name,
            'location' => $this->location,
            'start_date' => $this->start_date?->toDateString(),
            'end_date' => $this->end_date?->toDateString(),
            'budget' => $this->budget,
            'description' => $this->description,
            'challenge' => $this->when($request->routeIs('*.show'), $this->challenge),
            'solution' => $this->when($request->routeIs('*.show'), $this->solution),
            'result' => $this->when($request->routeIs('*.show'), $this->result),
            'cover_image' => $this->cover_image,
            'status' => $this->status,
            'is_featured' => $this->is_featured,
            'sort_order' => $this->sort_order,
            'industry' => $this->whenLoaded('industry', fn() => [
                'id' => $this->industry->id,
                'name' => $this->industry->name,
                'slug' => $this->industry->slug,
            ]),
            'images' => $this->whenLoaded('images', fn() => $this->images->map(fn($i) => [
                'id' => $i->id, 'image_path' => $i->image_path, 'caption' => $i->caption,
            ])),
            'created_at' => $this->created_at?->toIso8601String(),
        ];
    }
}

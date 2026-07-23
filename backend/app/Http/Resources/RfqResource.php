<?php
namespace App\Http\Resources;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
class RfqResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'rfq_number' => $this->rfq_number,
            'full_name' => $this->full_name,
            'company_name' => $this->company_name,
            'email' => $this->email,
            'phone' => $this->phone,
            'service_type' => $this->service_type,
            'project_location' => $this->project_location,
            'estimated_budget' => $this->estimated_budget,
            'project_timeline' => $this->project_timeline,
            'description' => $this->description,
            'status' => $this->status,
            'notes' => $this->notes,
            'assignee' => $this->whenLoaded('assignee', fn() => [
                'id' => $this->assignee->id, 'name' => $this->assignee->name,
            ]),
            'responded_at' => $this->responded_at?->toIso8601String(),
            'created_at' => $this->created_at?->toIso8601String(),
        ];
    }
}

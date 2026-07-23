<?php
namespace App\Http\Requests\Api;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
class UpdateProjectRequest extends FormRequest
{
    public function authorize(): bool { return true; }
    public function rules(): array
    {
        return [
            'title' => ['sometimes', 'string', 'max:255'],
            'slug' => ['nullable', 'string', Rule::unique('projects', 'slug')->ignore($this->route('id'))],
            'client_name' => ['sometimes', 'string', 'max:255'],
            'industry_id' => ['nullable', 'exists:industries,id'],
            'location' => ['sometimes', 'string', 'max:255'],
            'start_date' => ['nullable', 'date'],
            'end_date' => ['nullable', 'date'],
            'budget' => ['nullable', 'string'],
            'description' => ['nullable', 'string'],
            'challenge' => ['nullable', 'string'],
            'solution' => ['nullable', 'string'],
            'result' => ['nullable', 'string'],
            'cover_image' => ['nullable', 'string'],
            'status' => ['sometimes', 'in:draft,published,archived'],
            'is_featured' => ['boolean'],
            'sort_order' => ['integer'],
        ];
    }
}

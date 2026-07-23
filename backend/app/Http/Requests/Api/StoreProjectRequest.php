<?php
namespace App\Http\Requests\Api;
use Illuminate\Foundation\Http\FormRequest;
class StoreProjectRequest extends FormRequest
{
    public function authorize(): bool { return true; }
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['nullable', 'string', 'unique:projects,slug'],
            'client_name' => ['required', 'string', 'max:255'],
            'industry_id' => ['nullable', 'exists:industries,id'],
            'location' => ['required', 'string', 'max:255'],
            'start_date' => ['nullable', 'date'],
            'end_date' => ['nullable', 'date', 'after_or_equal:start_date'],
            'budget' => ['nullable', 'string'],
            'description' => ['nullable', 'string'],
            'challenge' => ['nullable', 'string'],
            'solution' => ['nullable', 'string'],
            'result' => ['nullable', 'string'],
            'cover_image' => ['nullable', 'string'],
            'status' => ['required', 'in:draft,published,archived'],
            'is_featured' => ['boolean'],
            'sort_order' => ['integer'],
            'meta_title' => ['nullable', 'string', 'max:255'],
            'meta_description' => ['nullable', 'string', 'max:500'],
        ];
    }
}

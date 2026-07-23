<?php
namespace App\Http\Requests\Api;
use Illuminate\Foundation\Http\FormRequest;
class UpdateCareerRequest extends FormRequest
{
    public function authorize(): bool { return true; }
    public function rules(): array
    {
        return [
            'title' => ['sometimes', 'string', 'max:255'],
            'department' => ['sometimes', 'string', 'max:100'],
            'location' => ['sometimes', 'string', 'max:255'],
            'employment_type' => ['sometimes', 'in:full-time,part-time,contract,internship'],
            'description' => ['sometimes', 'string'],
            'requirements' => ['nullable', 'array'],
            'requirements.*' => ['string'],
            'benefits' => ['nullable', 'array'],
            'benefits.*' => ['string'],
            'salary_range' => ['nullable', 'string'],
            'deadline' => ['nullable', 'date'],
            'status' => ['sometimes', 'in:active,inactive,closed'],
            'is_featured' => ['boolean'],
        ];
    }
}

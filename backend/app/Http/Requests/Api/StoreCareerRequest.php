<?php
namespace App\Http\Requests\Api;
use Illuminate\Foundation\Http\FormRequest;
class StoreCareerRequest extends FormRequest
{
    public function authorize(): bool { return true; }
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'department' => ['required', 'string', 'max:100'],
            'location' => ['required', 'string', 'max:255'],
            'employment_type' => ['required', 'in:full-time,part-time,contract,internship'],
            'description' => ['required', 'string'],
            'requirements' => ['nullable', 'array'],
            'requirements.*' => ['string'],
            'benefits' => ['nullable', 'array'],
            'benefits.*' => ['string'],
            'salary_range' => ['nullable', 'string'],
            'deadline' => ['nullable', 'date', 'after:today'],
            'status' => ['required', 'in:active,inactive,closed'],
            'is_featured' => ['boolean'],
            'sort_order' => ['integer'],
        ];
    }
}

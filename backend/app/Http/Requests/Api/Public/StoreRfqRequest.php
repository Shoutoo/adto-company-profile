<?php
namespace App\Http\Requests\Api\Public;
use Illuminate\Foundation\Http\FormRequest;
class StoreRfqRequest extends FormRequest
{
    public function authorize(): bool { return true; }
    public function rules(): array
    {
        return [
            'full_name' => ['required', 'string', 'max:255'],
            'company_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['required', 'string', 'max:30'],
            'service_type' => ['required', 'string', 'max:100'],
            'project_location' => ['required', 'string', 'max:255'],
            'estimated_budget' => ['nullable', 'string', 'max:100'],
            'project_timeline' => ['nullable', 'string', 'max:100'],
            'description' => ['required', 'string', 'min:20', 'max:3000'],
        ];
    }
}

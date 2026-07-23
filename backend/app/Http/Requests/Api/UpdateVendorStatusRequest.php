<?php
namespace App\Http\Requests\Api;
use Illuminate\Foundation\Http\FormRequest;
class UpdateVendorStatusRequest extends FormRequest
{
    public function authorize(): bool { return true; }
    public function rules(): array
    {
        return [
            'status' => ['required', 'in:pending,reviewing,approved,rejected'],
            'notes' => ['nullable', 'string', 'max:1000'],
        ];
    }
}

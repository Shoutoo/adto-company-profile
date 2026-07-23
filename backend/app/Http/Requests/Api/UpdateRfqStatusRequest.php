<?php
namespace App\Http\Requests\Api;
use Illuminate\Foundation\Http\FormRequest;
class UpdateRfqStatusRequest extends FormRequest
{
    public function authorize(): bool { return true; }
    public function rules(): array
    {
        return [
            'status' => ['required', 'in:new,reviewing,quoted,accepted,rejected,closed'],
            'notes' => ['nullable', 'string'],
            'assigned_to' => ['nullable', 'exists:users,id'],
        ];
    }
}

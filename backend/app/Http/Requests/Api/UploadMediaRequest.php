<?php
namespace App\Http\Requests\Api;
use Illuminate\Foundation\Http\FormRequest;
class UploadMediaRequest extends FormRequest
{
    public function authorize(): bool { return true; }
    public function rules(): array
    {
        return [
            'file' => ['required', 'file', 'max:10240', 'mimes:jpg,jpeg,png,webp,gif,pdf'],
            'category' => ['nullable', 'string', 'in:general,projects,news,blog,team,gallery'],
            'alt' => ['nullable', 'string', 'max:255'],
            'caption' => ['nullable', 'string', 'max:500'],
        ];
    }
}

<?php
namespace App\Http\Requests\Api\Public;
use Illuminate\Foundation\Http\FormRequest;
class StoreVendorRequest extends FormRequest
{
    public function authorize(): bool { return true; }
    public function rules(): array
    {
        return [
            'company_name' => ['required', 'string', 'max:255'],
            'business_field' => ['required', 'string', 'max:255'],
            'contact_person' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['required', 'string', 'max:30'],
            'address' => ['required', 'string'],
            'npwp' => ['nullable', 'string', 'max:30'],
            'business_category' => ['required', 'in:supplier,contractor,consultant,distributor,other'],
            'description' => ['nullable', 'string', 'max:2000'],
        ];
    }
}

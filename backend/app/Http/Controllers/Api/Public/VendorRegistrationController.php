<?php

namespace App\Http\Controllers\Api\Public;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Public\StoreVendorRequest;
use App\Jobs\SendVendorAcknowledgementEmail;
use App\Models\Vendor;
use Illuminate\Http\JsonResponse;

class VendorRegistrationController extends Controller
{
    public function store(StoreVendorRequest $request): JsonResponse
    {
        $vendor = Vendor::create($request->validated());

        SendVendorAcknowledgementEmail::dispatch($vendor);

        return response()->json([
            'success' => true,
            'message' => 'Thank you! Your vendor registration has been submitted for review.',
        ], 201);
    }
}

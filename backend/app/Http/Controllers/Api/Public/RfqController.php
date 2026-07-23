<?php

namespace App\Http\Controllers\Api\Public;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Public\StoreRfqRequest;
use App\Jobs\SendRfqAcknowledgementEmail;
use App\Jobs\SendRfqNotificationEmail;
use App\Models\Rfq;
use Illuminate\Http\JsonResponse;

class RfqController extends Controller
{
    public function store(StoreRfqRequest $request): JsonResponse
    {
        $rfq = Rfq::create($request->validated());

        SendRfqAcknowledgementEmail::dispatch($rfq);
        SendRfqNotificationEmail::dispatch($rfq);

        return response()->json([
            'success' => true,
            'message' => 'Your quotation request has been submitted. We will respond within 2 business days.',
            'data' => ['rfq_number' => $rfq->rfq_number],
        ], 201);
    }
}

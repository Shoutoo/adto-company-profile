<?php

namespace App\Http\Controllers\Api\Public;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Public\StoreContactRequest;
use App\Jobs\SendContactNotificationEmail;
use App\Models\Contact;
use Illuminate\Http\JsonResponse;

class ContactController extends Controller
{
    public function store(StoreContactRequest $request): JsonResponse
    {
        $contact = Contact::create($request->validated());

        SendContactNotificationEmail::dispatch($contact);

        return response()->json([
            'success' => true,
            'message' => 'Thank you! Your message has been sent. We will get back to you shortly.',
        ], 201);
    }
}

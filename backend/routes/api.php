<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\BlogController;
use App\Http\Controllers\Api\CareerController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\MediaController;
use App\Http\Controllers\Api\NewsController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\RfqController;
use App\Http\Controllers\Api\VendorController;
use App\Http\Controllers\Api\Public\ContactController;
use App\Http\Controllers\Api\Public\RfqController as PublicRfqController;
use App\Http\Controllers\Api\Public\VendorRegistrationController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Public API Routes (no auth required)
|--------------------------------------------------------------------------
*/
Route::prefix('v1')->group(function () {
    // Auth
    Route::post('/auth/login', [AuthController::class, 'login']);

    // Public submissions
    Route::post('/contact', [ContactController::class, 'store']);
    Route::post('/vendor-registration', [VendorRegistrationController::class, 'store']);
    Route::post('/rfq', [PublicRfqController::class, 'store']);

    // Public content reads
    Route::get('/news', [NewsController::class, 'index']);
    Route::get('/news/{id}', [NewsController::class, 'show']);
    Route::get('/blog', [BlogController::class, 'index']);
    Route::get('/blog/{id}', [BlogController::class, 'show']);
    Route::get('/projects', [ProjectController::class, 'index']);
    Route::get('/projects/{id}', [ProjectController::class, 'show']);
    Route::get('/careers', [CareerController::class, 'index']);
    Route::get('/careers/{id}', [CareerController::class, 'show']);

    /*
    |--------------------------------------------------------------------------
    | Authenticated Routes (Sanctum)
    |--------------------------------------------------------------------------
    */
    Route::middleware('auth:sanctum')->group(function () {
        // Auth
        Route::get('/auth/me', [AuthController::class, 'me']);
        Route::post('/auth/logout', [AuthController::class, 'logout']);
        Route::post('/auth/refresh', [AuthController::class, 'refresh']);

        // Dashboard
        Route::get('/dashboard', [DashboardController::class, 'index']);

        // CMS — News
        Route::apiResource('/admin/news', NewsController::class)->except(['index', 'show']);

        // CMS — Blog
        Route::apiResource('/admin/blog', BlogController::class)->except(['index', 'show']);

        // CMS — Projects
        Route::apiResource('/admin/projects', ProjectController::class)->except(['index', 'show']);

        // CMS — Careers
        Route::apiResource('/admin/careers', CareerController::class)->except(['index', 'show']);

        // Vendor Management
        Route::get('/admin/vendors', [VendorController::class, 'index']);
        Route::get('/admin/vendors/{id}', [VendorController::class, 'show']);
        Route::patch('/admin/vendors/{id}/status', [VendorController::class, 'updateStatus']);
        Route::delete('/admin/vendors/{id}', [VendorController::class, 'destroy']);

        // RFQ Management
        Route::get('/admin/rfqs', [RfqController::class, 'index']);
        Route::get('/admin/rfqs/{id}', [RfqController::class, 'show']);
        Route::patch('/admin/rfqs/{id}/status', [RfqController::class, 'updateStatus']);
        Route::delete('/admin/rfqs/{id}', [RfqController::class, 'destroy']);

        // Media
        Route::get('/admin/media', [MediaController::class, 'index']);
        Route::post('/admin/media/upload', [MediaController::class, 'upload']);
        Route::delete('/admin/media/{id}', [MediaController::class, 'destroy']);
    });
});

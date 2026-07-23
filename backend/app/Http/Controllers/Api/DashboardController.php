<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\DashboardService;
use Illuminate\Http\JsonResponse;

class DashboardController extends Controller
{
    public function __construct(private readonly DashboardService $dashboardService) {}

    public function index(): JsonResponse
    {
        return response()->json([
            'success' => true,
            'message' => 'Dashboard statistics retrieved.',
            'data' => [
                'stats' => $this->dashboardService->getStats(),
                'recent_contacts' => $this->dashboardService->getRecentContacts(),
                'recent_rfqs' => $this->dashboardService->getRecentRfqs(),
                'monthly_stats' => $this->dashboardService->getMonthlyStats(),
            ],
        ]);
    }
}

<?php

namespace App\Services;

use App\Models\Blog;
use App\Models\Career;
use App\Models\Contact;
use App\Models\News;
use App\Models\Project;
use App\Models\Rfq;
use App\Models\Service;
use App\Models\Vendor;
use Illuminate\Support\Facades\DB;

class DashboardService
{
    /**
     * Get all dashboard statistics.
     */
    public function getStats(): array
    {
        return [
            'total_services' => Service::count(),
            'total_projects' => Project::count(),
            'total_news' => News::count(),
            'total_blogs' => Blog::count(),
            'total_careers' => Career::active()->count(),
            'total_vendors' => Vendor::count(),
            'total_rfqs' => Rfq::count(),
            'total_contacts' => Contact::count(),
            'unread_contacts' => Contact::where('is_read', false)->count(),
            'new_rfqs' => Rfq::where('status', 'new')->count(),
            'pending_vendors' => Vendor::where('status', 'pending')->count(),
        ];
    }

    /**
     * Get recent contacts.
     */
    public function getRecentContacts(int $limit = 5): \Illuminate\Database\Eloquent\Collection
    {
        return Contact::latest()->limit($limit)->get();
    }

    /**
     * Get recent RFQs.
     */
    public function getRecentRfqs(int $limit = 5): \Illuminate\Database\Eloquent\Collection
    {
        return Rfq::latest()->limit($limit)->get();
    }

    /**
     * Get monthly stats for charting.
     */
    public function getMonthlyStats(): array
    {
        $months = collect(range(1, 12))->map(fn($m) => [
            'month' => date('M', mktime(0, 0, 0, $m, 1)),
            'rfqs' => Rfq::whereYear('created_at', date('Y'))->whereMonth('created_at', $m)->count(),
            'contacts' => Contact::whereYear('created_at', date('Y'))->whereMonth('created_at', $m)->count(),
            'vendors' => Vendor::whereYear('created_at', date('Y'))->whereMonth('created_at', $m)->count(),
        ]);

        return $months->toArray();
    }
}

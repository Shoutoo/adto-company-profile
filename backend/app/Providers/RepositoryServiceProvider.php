<?php

namespace App\Providers;

use App\Repositories\BlogRepository;
use App\Repositories\CareerRepository;
use App\Repositories\NewsRepository;
use App\Repositories\ProjectRepository;
use App\Repositories\RfqRepository;
use App\Repositories\VendorRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(NewsRepository::class, fn($app) => new NewsRepository($app->make(\App\Models\News::class)));
        $this->app->bind(BlogRepository::class, fn($app) => new BlogRepository($app->make(\App\Models\Blog::class)));
        $this->app->bind(ProjectRepository::class, fn($app) => new ProjectRepository($app->make(\App\Models\Project::class)));
        $this->app->bind(CareerRepository::class, fn($app) => new CareerRepository($app->make(\App\Models\Career::class)));
        $this->app->bind(VendorRepository::class, fn($app) => new VendorRepository($app->make(\App\Models\Vendor::class)));
        $this->app->bind(RfqRepository::class, fn($app) => new RfqRepository($app->make(\App\Models\Rfq::class)));
    }
}

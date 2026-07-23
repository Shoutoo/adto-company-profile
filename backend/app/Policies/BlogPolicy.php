<?php

namespace App\Policies;

use App\Models\Blog;
use App\Models\User;

class BlogPolicy
{
    public function viewAny(User $user): bool { return $user->can('manage blog'); }
    public function view(User $user, Blog $blog): bool { return $user->can('manage blog'); }
    public function create(User $user): bool { return $user->can('manage blog'); }
    public function update(User $user, Blog $blog): bool { return $user->can('manage blog'); }
    public function delete(User $user, Blog $blog): bool { return $user->can('manage blog'); }
}

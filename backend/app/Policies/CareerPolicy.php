<?php

namespace App\Policies;

use App\Models\Career;
use App\Models\User;

class CareerPolicy
{
    public function viewAny(User $user): bool { return $user->can('manage careers'); }
    public function view(User $user, Career $career): bool { return $user->can('manage careers'); }
    public function create(User $user): bool { return $user->can('manage careers'); }
    public function update(User $user, Career $career): bool { return $user->can('manage careers'); }
    public function delete(User $user, Career $career): bool { return $user->can('manage careers'); }
}

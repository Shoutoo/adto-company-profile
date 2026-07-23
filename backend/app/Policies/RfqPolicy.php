<?php

namespace App\Policies;

use App\Models\Rfq;
use App\Models\User;

class RfqPolicy
{
    public function viewAny(User $user): bool { return $user->can('manage rfqs'); }
    public function view(User $user, Rfq $rfq): bool { return $user->can('manage rfqs'); }
    public function update(User $user, Rfq $rfq): bool { return $user->can('manage rfqs'); }
    public function delete(User $user, Rfq $rfq): bool { return $user->can('manage rfqs'); }
}

<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class AuthService
{
    /**
     * Attempt login and return token.
     */
    public function login(string $email, string $password, bool $remember = false): array
    {
        if (! Auth::attempt(['email' => $email, 'password' => $password])) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        /** @var User $user */
        $user = Auth::user();

        if (! $user->is_active) {
            Auth::logout();
            throw ValidationException::withMessages([
                'email' => ['Your account has been deactivated.'],
            ]);
        }

        // Revoke old tokens
        $user->tokens()->delete();

        $expiresAt = $remember
            ? now()->addDays(30)
            : now()->addHours(24);

        $token = $user->createToken('api-token', ['*'], $expiresAt);

        return [
            'user' => $user->load('roles', 'permissions'),
            'token' => [
                'access_token' => $token->plainTextToken,
                'token_type' => 'Bearer',
                'expires_at' => $expiresAt->toIso8601String(),
            ],
        ];
    }

    /**
     * Revoke current token (logout).
     */
    public function logout(User $user): void
    {
        $user->currentAccessToken()->delete();
    }

    /**
     * Refresh the current token.
     */
    public function refresh(User $user): array
    {
        $user->currentAccessToken()->delete();
        $expiresAt = now()->addHours(24);
        $token = $user->createToken('api-token', ['*'], $expiresAt);

        return [
            'access_token' => $token->plainTextToken,
            'token_type' => 'Bearer',
            'expires_at' => $expiresAt->toIso8601String(),
        ];
    }
}

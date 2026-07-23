<?php

namespace Tests\Unit\Services;

use App\Models\User;
use App\Services\AuthService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Tests\TestCase;

class AuthServiceTest extends TestCase
{
    use RefreshDatabase;

    private AuthService $authService;

    protected function setUp(): void
    {
        parent::setUp();
        $this->authService = new AuthService();
    }

    public function test_login_returns_user_and_token_on_success(): void
    {
        $user = User::factory()->create([
            'email' => 'test@example.com',
            'password' => Hash::make('password123'),
            'is_active' => true,
        ]);

        $result = $this->authService->login('test@example.com', 'password123');

        $this->assertArrayHasKey('user', $result);
        $this->assertArrayHasKey('token', $result);
        $this->assertArrayHasKey('access_token', $result['token']);
        $this->assertEquals($user->id, $result['user']->id);
    }

    public function test_login_throws_exception_for_invalid_credentials(): void
    {
        User::factory()->create([
            'email' => 'test@example.com',
            'password' => Hash::make('correct'),
        ]);

        $this->expectException(ValidationException::class);

        $this->authService->login('test@example.com', 'wrong');
    }

    public function test_login_throws_exception_for_inactive_user(): void
    {
        User::factory()->create([
            'email' => 'inactive@example.com',
            'password' => Hash::make('password123'),
            'is_active' => false,
        ]);

        $this->expectException(ValidationException::class);

        $this->authService->login('inactive@example.com', 'password123');
    }

    public function test_logout_deletes_current_token(): void
    {
        $user = User::factory()->create(['is_active' => true]);
        $token = $user->createToken('test')->plainTextToken;

        $this->assertCount(1, $user->tokens);

        // Simulate auth
        $this->actingAs($user, 'sanctum');

        $this->authService->logout($user);

        $this->assertCount(0, $user->fresh()->tokens);
    }
}

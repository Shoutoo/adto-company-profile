<?php

namespace Tests\Feature\Api;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Queue;
use Tests\TestCase;
use App\Jobs\SendContactNotificationEmail;

class ContactTest extends TestCase
{
    use RefreshDatabase;

    public function test_can_submit_contact_form(): void
    {
        Queue::fake();

        $response = $this->postJson('/api/v1/contact', [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'phone' => '+62812345678',
            'subject' => 'General Inquiry',
            'message' => 'Hello, I would like to know more about your services.',
        ]);

        $response->assertStatus(201)
            ->assertJson(['success' => true]);

        $this->assertDatabaseHas('contacts', [
            'email' => 'john@example.com',
            'subject' => 'General Inquiry',
        ]);

        Queue::assertPushed(SendContactNotificationEmail::class);
    }

    public function test_contact_form_requires_name_email_subject_message(): void
    {
        $response = $this->postJson('/api/v1/contact', []);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['name', 'email', 'subject', 'message']);
    }

    public function test_contact_form_requires_valid_email(): void
    {
        $response = $this->postJson('/api/v1/contact', [
            'name' => 'John',
            'email' => 'not-valid',
            'subject' => 'Test',
            'message' => 'Test message with enough length',
        ]);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['email']);
    }

    public function test_contact_message_must_be_minimum_10_chars(): void
    {
        $response = $this->postJson('/api/v1/contact', [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'subject' => 'Test',
            'message' => 'Short',
        ]);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['message']);
    }
}

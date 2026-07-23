<?php

namespace Tests\Feature\Api;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Queue;
use Tests\TestCase;
use App\Jobs\SendRfqAcknowledgementEmail;
use App\Jobs\SendRfqNotificationEmail;

class RfqTest extends TestCase
{
    use RefreshDatabase;

    private array $validRfqData = [
        'full_name' => 'Jane Smith',
        'company_name' => 'PT Example Company',
        'email' => 'jane@example.com',
        'phone' => '+62821234567',
        'service_type' => 'General Construction',
        'project_location' => 'Jakarta, Indonesia',
        'estimated_budget' => '1B-5B',
        'project_timeline' => '6-12 Months',
        'description' => 'We need a comprehensive construction service for our new office building project in central Jakarta.',
    ];

    public function test_can_submit_rfq(): void
    {
        Queue::fake();

        $response = $this->postJson('/api/v1/rfq', $this->validRfqData);

        $response->assertStatus(201)
            ->assertJson(['success' => true])
            ->assertJsonStructure(['data' => ['rfq_number']]);

        $this->assertDatabaseHas('rfqs', [
            'email' => 'jane@example.com',
            'company_name' => 'PT Example Company',
            'status' => 'new',
        ]);

        Queue::assertPushed(SendRfqAcknowledgementEmail::class);
        Queue::assertPushed(SendRfqNotificationEmail::class);
    }

    public function test_rfq_has_unique_rfq_number(): void
    {
        Queue::fake();

        $this->postJson('/api/v1/rfq', $this->validRfqData);
        $this->postJson('/api/v1/rfq', array_merge($this->validRfqData, ['email' => 'other@example.com']));

        $rfqNumbers = \App\Models\Rfq::pluck('rfq_number')->toArray();
        $this->assertCount(2, array_unique($rfqNumbers));
    }

    public function test_rfq_requires_all_required_fields(): void
    {
        $response = $this->postJson('/api/v1/rfq', []);

        $response->assertStatus(422)
            ->assertJsonValidationErrors([
                'full_name', 'company_name', 'email', 'phone',
                'service_type', 'project_location', 'description',
            ]);
    }

    public function test_rfq_description_must_be_minimum_20_chars(): void
    {
        $data = array_merge($this->validRfqData, ['description' => 'Too short']);
        $response = $this->postJson('/api/v1/rfq', $data);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['description']);
    }
}

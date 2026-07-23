<?php

namespace Tests\Unit\Models;

use App\Models\Rfq;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RfqTest extends TestCase
{
    use RefreshDatabase;

    public function test_rfq_number_is_auto_generated(): void
    {
        $rfq = Rfq::create([
            'full_name' => 'Test User',
            'company_name' => 'Test Company',
            'email' => 'test@example.com',
            'phone' => '+628123456789',
            'service_type' => 'General Construction',
            'project_location' => 'Jakarta',
            'description' => 'Test description for RFQ submission',
        ]);

        $this->assertNotNull($rfq->rfq_number);
        $this->assertStringStartsWith('RFQ-', $rfq->rfq_number);
        $this->assertStringContainsString(date('Y'), $rfq->rfq_number);
    }

    public function test_rfq_number_is_sequential(): void
    {
        $data = [
            'full_name' => 'Test',
            'company_name' => 'Company',
            'email' => 'test@example.com',
            'phone' => '+628123456789',
            'service_type' => 'Consulting',
            'project_location' => 'Jakarta',
            'description' => 'Description text for the request for quotation',
        ];

        $rfq1 = Rfq::create($data);
        $rfq2 = Rfq::create(array_merge($data, ['email' => 'test2@example.com']));

        $number1 = (int) substr($rfq1->rfq_number, -4);
        $number2 = (int) substr($rfq2->rfq_number, -4);

        $this->assertEquals($number1 + 1, $number2);
    }

    public function test_rfq_default_status_is_new(): void
    {
        $rfq = Rfq::factory()->create();
        $this->assertEquals('new', $rfq->status);
    }
}

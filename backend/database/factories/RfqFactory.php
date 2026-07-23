<?php

namespace Database\Factories;

use App\Models\Rfq;
use Illuminate\Database\Eloquent\Factories\Factory;

class RfqFactory extends Factory
{
    protected $model = Rfq::class;

    public function definition(): array
    {
        return [
            'full_name' => $this->faker->name(),
            'company_name' => $this->faker->company(),
            'email' => $this->faker->safeEmail(),
            'phone' => '+628' . $this->faker->numerify('#########'),
            'service_type' => $this->faker->randomElement([
                'General Construction', 'MEP Engineering',
                'Procurement', 'Project Management', 'Consulting',
            ]),
            'project_location' => $this->faker->city() . ', Indonesia',
            'estimated_budget' => $this->faker->randomElement(['Under 500M', '500M-1B', '1B-5B', '5B-10B']),
            'project_timeline' => $this->faker->randomElement(['1-3 Months', '3-6 Months', '6-12 Months', '12+ Months']),
            'description' => $this->faker->paragraph(3),
            'status' => 'new',
        ];
    }
}

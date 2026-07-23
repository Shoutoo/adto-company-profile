<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create roles
        $adminRole = Role::firstOrCreate(['name' => 'admin', 'guard_name' => 'web']);
        $editorRole = Role::firstOrCreate(['name' => 'editor', 'guard_name' => 'web']);

        // Create permissions
        $permissions = [
            'manage-users',
            'manage-content',
            'manage-media',
            'manage-careers',
            'manage-vendors',
            'manage-rfqs',
            'manage-settings',
            'view-dashboard',
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission, 'guard_name' => 'web']);
        }

        // Assign permissions to roles
        $adminRole->syncPermissions($permissions);
        $editorRole->syncPermissions(['manage-content', 'manage-media', 'view-dashboard']);

        // Create super admin
        $admin = User::factory()->create([
            'name' => 'Super Admin',
            'email' => 'admin@adtociptausahamandiri.co.id',
        ]);
        $admin->assignRole('admin');

        // Create editor
        $editor = User::factory()->create([
            'name' => 'Content Editor',
            'email' => 'editor@adtociptausahamandiri.co.id',
        ]);
        $editor->assignRole('editor');

        $this->command->info('✅ Database seeded successfully.');
    }
}

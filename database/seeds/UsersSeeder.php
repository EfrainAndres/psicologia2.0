<?php

use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => 'Admin Prueba Psicotecnica',
                'email' => 'admin@admin.com',
                'password' => bcrypt('psiadmin2020'),
                'FK_RolesId' => '1'
            ]
        ]);
    }
}

<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\UserType;



class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        //person_types table data
        UserType::create(['user_type_name' => 'Admin']);
        UserType::create(['user_type_name' => 'Developer']);
        UserType::create(['user_type_name' => 'Stockist']);
        UserType::create(['user_type_name' => 'Terminal']);
        $this->command->info('User Type creation Finished');

        User::create(['user_name'=>'Arindam Biswas','email'=>'1001','password'=>"b8c37e33defde51cf91e1e03e51657da",'mobile1'=>'9836444999','user_type_id'=>1]);
        User::create(['user_name'=>'Ananda Sen','email'=>'1002','password'=>"fba9d88164f3e2d9109ee770223212a0",'mobile1'=>'9536485201','user_type_id'=>2]);
        User::create(['user_name'=>'Mahesh Roy','email'=>'1003','password'=>"aa68c75c4a77c87f97fb686b2f068676",'mobile1'=>'8532489030','user_type_id'=>3]);
        User::create(['user_name'=>'Ramesh Ghosh','email'=>'1004','password'=>"fed33392d3a48aa149a87a38b875ba4a",'mobile1'=>'9587412358','user_type_id'=>4]);






        // Product has separate file
        // php artisan db:seed --class=ProductSeeder


        //Transaction types

    }
}

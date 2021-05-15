<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\UserType;
use App\Models\NumberCombination;



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


        NumberCombination::insert([
            ['single_number' =>0, 'triple_number' => 000, 'visible_triple_number' => '000'],// #1
            ['single_number' =>0, 'triple_number' => 127, 'visible_triple_number' => '127'],// #2
            ['single_number' =>0, 'triple_number' => 190, 'visible_triple_number' => '190'],// #3
            ['single_number' =>0, 'triple_number' => 280, 'visible_triple_number' => '280'],// #4
            ['single_number' =>0, 'triple_number' => 370, 'visible_triple_number' => '370'],// #5
            ['single_number' =>0, 'triple_number' => 460, 'visible_triple_number' => '460'],// #6
            ['single_number' =>0, 'triple_number' => 550, 'visible_triple_number' => '550'],// #7
            ['single_number' =>0, 'triple_number' => 235, 'visible_triple_number' => '235'],// #8
            ['single_number' =>0, 'triple_number' => 118, 'visible_triple_number' => '118'],// #9
            ['single_number' =>0, 'triple_number' => 578, 'visible_triple_number' => '578'],// #10
            ['single_number' =>0, 'triple_number' => 145, 'visible_triple_number' => '145'],// #11
            ['single_number' =>0, 'triple_number' => 479, 'visible_triple_number' => '479'],// #12
            ['single_number' =>0, 'triple_number' => 668, 'visible_triple_number' => '668'],// #13
            ['single_number' =>0, 'triple_number' => 299, 'visible_triple_number' => '299'],// #14
            ['single_number' =>0, 'triple_number' => 334, 'visible_triple_number' => '334'],// #15
            ['single_number' =>0, 'triple_number' => 488, 'visible_triple_number' => '488'],// #16
            ['single_number' =>0, 'triple_number' => 389, 'visible_triple_number' => '389'],// #17
            ['single_number' =>0, 'triple_number' => 226, 'visible_triple_number' => '226'],// #18
            ['single_number' =>0, 'triple_number' => 569, 'visible_triple_number' => '569'],// #19
            ['single_number' =>0, 'triple_number' => 677, 'visible_triple_number' => '677'],// #20
            ['single_number' =>0, 'triple_number' => 136, 'visible_triple_number' => '136'],// #21
            ['single_number' =>0, 'triple_number' => 244, 'visible_triple_number' => '244'],// #22

            ['single_number' =>1, 'triple_number' => 100, 'visible_triple_number' => '100'],// #1
            ['single_number' =>1, 'triple_number' => 678, 'visible_triple_number' => '678'],// #2
            ['single_number' =>1, 'triple_number' => 777, 'visible_triple_number' => '777'],// #3
            ['single_number' =>1, 'triple_number' => 560, 'visible_triple_number' => '560'],// #4
            ['single_number' =>1, 'triple_number' => 470, 'visible_triple_number' => '470'],// #5
            ['single_number' =>1, 'triple_number' => 380, 'visible_triple_number' => '380'],// #6
            ['single_number' =>1, 'triple_number' => 290, 'visible_triple_number' => '290'],// #7
            ['single_number' =>1, 'triple_number' => 119, 'visible_triple_number' => '119'],// #8
            ['single_number' =>1, 'triple_number' => 137, 'visible_triple_number' => '137'],// #9
            ['single_number' =>1, 'triple_number' => 236, 'visible_triple_number' => '236'],// #10
            ['single_number' =>1, 'triple_number' => 146, 'visible_triple_number' => '146'],// #11
            ['single_number' =>1, 'triple_number' => 669, 'visible_triple_number' => '669'],// #12
            ['single_number' =>1, 'triple_number' => 579, 'visible_triple_number' => '579'],// #13
            ['single_number' =>1, 'triple_number' => 399, 'visible_triple_number' => '399'],// #14
            ['single_number' =>1, 'triple_number' => 588, 'visible_triple_number' => '588'],// #15
            ['single_number' =>1, 'triple_number' => 489, 'visible_triple_number' => '489'],// #16
            ['single_number' =>1, 'triple_number' => 245, 'visible_triple_number' => '245'],// #17
            ['single_number' =>1, 'triple_number' => 155, 'visible_triple_number' => '155'],// #18
            ['single_number' =>1, 'triple_number' => 227, 'visible_triple_number' => '227'],// #19
            ['single_number' =>1, 'triple_number' => 344, 'visible_triple_number' => '344'],// #20
            ['single_number' =>1, 'triple_number' => 335, 'visible_triple_number' => '335'],// #21
            ['single_number' =>1, 'triple_number' => 128, 'visible_triple_number' => '128'],// #22


            ['single_number' =>2, 'triple_number' => 200, 'visible_triple_number' => '200'],// #1
            ['single_number' =>2, 'triple_number' => 345, 'visible_triple_number' => '345'],// #2
            ['single_number' =>2, 'triple_number' => 444, 'visible_triple_number' => '444'],// #3
            ['single_number' =>2, 'triple_number' => 570, 'visible_triple_number' => '570'],// #4
            ['single_number' =>2, 'triple_number' => 480, 'visible_triple_number' => '480'],// #5
            ['single_number' =>2, 'triple_number' => 390, 'visible_triple_number' => '390'],// #6
            ['single_number' =>2, 'triple_number' => 660, 'visible_triple_number' => '660'],// #7
            ['single_number' =>2, 'triple_number' => 129, 'visible_triple_number' => '129'],// #8
            ['single_number' =>2, 'triple_number' => 237, 'visible_triple_number' => '237'],// #9
            ['single_number' =>2, 'triple_number' => 336, 'visible_triple_number' => '336'],// #10
            ['single_number' =>2, 'triple_number' => 246, 'visible_triple_number' => '246'],// #11
            ['single_number' =>2, 'triple_number' => 679, 'visible_triple_number' => '679'],// #12
            ['single_number' =>2, 'triple_number' => 255, 'visible_triple_number' => '255'],// #13
            ['single_number' =>2, 'triple_number' => 147, 'visible_triple_number' => '147'],// #14
            ['single_number' =>2, 'triple_number' => 228, 'visible_triple_number' => '228'],// #15
            ['single_number' =>2, 'triple_number' => 499, 'visible_triple_number' => '499'],// #16
            ['single_number' =>2, 'triple_number' => 688, 'visible_triple_number' => '688'],// #17
            ['single_number' =>2, 'triple_number' => 778, 'visible_triple_number' => '778'],// #18
            ['single_number' =>2, 'triple_number' => 138, 'visible_triple_number' => '138'],// #19
            ['single_number' =>2, 'triple_number' => 156, 'visible_triple_number' => '156'],// #20
            ['single_number' =>2, 'triple_number' => 110, 'visible_triple_number' => '110'],// #21
            ['single_number' =>2, 'triple_number' => 589, 'visible_triple_number' => '589'],// #22

            ['single_number' =>3, 'triple_number' => 200, 'visible_triple_number' => '200'],// #1
            ['single_number' =>3, 'triple_number' => 345, 'visible_triple_number' => '345'],// #2
            ['single_number' =>3, 'triple_number' => 444, 'visible_triple_number' => '444'],// #3
            ['single_number' =>3, 'triple_number' => 570, 'visible_triple_number' => '570'],// #4
            ['single_number' =>3, 'triple_number' => 480, 'visible_triple_number' => '480'],// #5
            ['single_number' =>3, 'triple_number' => 390, 'visible_triple_number' => '390'],// #6
            ['single_number' =>3, 'triple_number' => 660, 'visible_triple_number' => '660'],// #7
            ['single_number' =>3, 'triple_number' => 129, 'visible_triple_number' => '129'],// #8
            ['single_number' =>3, 'triple_number' => 237, 'visible_triple_number' => '237'],// #9
            ['single_number' =>3, 'triple_number' => 336, 'visible_triple_number' => '336'],// #10
            ['single_number' =>3, 'triple_number' => 246, 'visible_triple_number' => '246'],// #11
            ['single_number' =>3, 'triple_number' => 679, 'visible_triple_number' => '679'],// #12
            ['single_number' =>3, 'triple_number' => 255, 'visible_triple_number' => '255'],// #13
            ['single_number' =>3, 'triple_number' => 147, 'visible_triple_number' => '147'],// #14
            ['single_number' =>3, 'triple_number' => 228, 'visible_triple_number' => '228'],// #15
            ['single_number' =>3, 'triple_number' => 499, 'visible_triple_number' => '499'],// #16
            ['single_number' =>3, 'triple_number' => 688, 'visible_triple_number' => '688'],// #17
            ['single_number' =>3, 'triple_number' => 778, 'visible_triple_number' => '778'],// #18
            ['single_number' =>3, 'triple_number' => 138, 'visible_triple_number' => '138'],// #19
            ['single_number' =>3, 'triple_number' => 156, 'visible_triple_number' => '156'],// #20
            ['single_number' =>3, 'triple_number' => 110, 'visible_triple_number' => '110'],// #21
            ['single_number' =>3, 'triple_number' => 589, 'visible_triple_number' => '589'],// #22

        ]);



        // Product has separate file
        // php artisan db:seed --class=ProductSeeder


        //Transaction types

    }
}

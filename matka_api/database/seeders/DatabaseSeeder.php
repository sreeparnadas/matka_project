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

            ['single_number' =>3, 'triple_number' => 300, 'visible_triple_number' => '300'],// #1
            ['single_number' =>3, 'triple_number' => 120, 'visible_triple_number' => '120'],// #2
            ['single_number' =>3, 'triple_number' => 111, 'visible_triple_number' => '111'],// #3
            ['single_number' =>3, 'triple_number' => 580, 'visible_triple_number' => '580'],// #4
            ['single_number' =>3, 'triple_number' => 490, 'visible_triple_number' => '490'],// #5
            ['single_number' =>3, 'triple_number' => 670, 'visible_triple_number' => '670'],// #6
            ['single_number' =>3, 'triple_number' => 238, 'visible_triple_number' => '238'],// #7
            ['single_number' =>3, 'triple_number' => 139, 'visible_triple_number' => '139'],// #8
            ['single_number' =>3, 'triple_number' => 337, 'visible_triple_number' => '337'],// #9
            ['single_number' =>3, 'triple_number' => 157, 'visible_triple_number' => '157'],// #10
            ['single_number' =>3, 'triple_number' => 346, 'visible_triple_number' => '346'],// #11
            ['single_number' =>3, 'triple_number' => 689, 'visible_triple_number' => '689'],// #12
            ['single_number' =>3, 'triple_number' => 355, 'visible_triple_number' => '355'],// #13
            ['single_number' =>3, 'triple_number' => 247, 'visible_triple_number' => '247'],// #14
            ['single_number' =>3, 'triple_number' => 256, 'visible_triple_number' => '256'],// #15
            ['single_number' =>3, 'triple_number' => 166, 'visible_triple_number' => '166'],// #16
            ['single_number' =>3, 'triple_number' => 599, 'visible_triple_number' => '599'],// #17
            ['single_number' =>3, 'triple_number' => 148, 'visible_triple_number' => '148'],// #18
            ['single_number' =>3, 'triple_number' => 788, 'visible_triple_number' => '788'],// #19
            ['single_number' =>3, 'triple_number' => 445, 'visible_triple_number' => '445'],// #20
            ['single_number' =>3, 'triple_number' => 229, 'visible_triple_number' => '229'],// #21
            ['single_number' =>3, 'triple_number' => 779, 'visible_triple_number' => '779'],// #22

            ['single_number'=>4,'triple_number'=>400,'visible_triple_number'=>'400'],// #1
            ['single_number'=>4,'triple_number'=>789,'visible_triple_number'=>'789'],// #2
            ['single_number'=>4,'triple_number'=>888,'visible_triple_number'=>'888'],// #3
            ['single_number'=>4,'triple_number'=>590,'visible_triple_number'=>'590'],// #4
            ['single_number'=>4,'triple_number'=>130,'visible_triple_number'=>'130'],// #5
            ['single_number'=>4,'triple_number'=>680,'visible_triple_number'=>'680'],// #6
            ['single_number'=>4,'triple_number'=>248,'visible_triple_number'=>'248'],// #7
            ['single_number'=>4,'triple_number'=>149,'visible_triple_number'=>'149'],// #8
            ['single_number'=>4,'triple_number'=>347,'visible_triple_number'=>'347'],// #9
            ['single_number'=>4,'triple_number'=>158,'visible_triple_number'=>'158'],// #10
            ['single_number'=>4,'triple_number'=>446,'visible_triple_number'=>'446'],// #11
            ['single_number'=>4,'triple_number'=>699,'visible_triple_number'=>'699'],// #12
            ['single_number'=>4,'triple_number'=>455,'visible_triple_number'=>'455'],// #13
            ['single_number'=>4,'triple_number'=>266,'visible_triple_number'=>'266'],// #14
            ['single_number'=>4,'triple_number'=>112,'visible_triple_number'=>'112'],// #15
            ['single_number'=>4,'triple_number'=>356,'visible_triple_number'=>'356'],// #16
            ['single_number'=>4,'triple_number'=>239,'visible_triple_number'=>'239'],// #17
            ['single_number'=>4,'triple_number'=>338,'visible_triple_number'=>'338'],// #18
            ['single_number'=>4,'triple_number'=>257,'visible_triple_number'=>'257'],// #19
            ['single_number'=>4,'triple_number'=>220,'visible_triple_number'=>'220'],// #20
            ['single_number'=>4,'triple_number'=>770,'visible_triple_number'=>'770'],// #21
            ['single_number'=>4,'triple_number'=>167,'visible_triple_number'=>'167'],// #22

            ['single_number'=>5,'triple_number'=>500,'visible_triple_number'=>'500'],// #1
            ['single_number'=>5,'triple_number'=>456,'visible_triple_number'=>'456'],// #2
            ['single_number'=>5,'triple_number'=>555,'visible_triple_number'=>'555'],// #3
            ['single_number'=>5,'triple_number'=>140,'visible_triple_number'=>'140'],// #4
            ['single_number'=>5,'triple_number'=>230,'visible_triple_number'=>'230'],// #5
            ['single_number'=>5,'triple_number'=>690,'visible_triple_number'=>'690'],// #6
            ['single_number'=>5,'triple_number'=>258,'visible_triple_number'=>'258'],// #7
            ['single_number'=>5,'triple_number'=>159,'visible_triple_number'=>'159'],// #8
            ['single_number'=>5,'triple_number'=>357,'visible_triple_number'=>'357'],// #9
            ['single_number'=>5,'triple_number'=>799,'visible_triple_number'=>'799'],// #10
            ['single_number'=>5,'triple_number'=>267,'visible_triple_number'=>'267'],// #11
            ['single_number'=>5,'triple_number'=>780,'visible_triple_number'=>'780'],// #12
            ['single_number'=>5,'triple_number'=>447,'visible_triple_number'=>'447'],// #13
            ['single_number'=>5,'triple_number'=>366,'visible_triple_number'=>'366'],// #14
            ['single_number'=>5,'triple_number'=>113,'visible_triple_number'=>'113'],// #15
            ['single_number'=>5,'triple_number'=>122,'visible_triple_number'=>'122'],// #16
            ['single_number'=>5,'triple_number'=>177,'visible_triple_number'=>'177'],// #17
            ['single_number'=>5,'triple_number'=>249,'visible_triple_number'=>'249'],// #18
            ['single_number'=>5,'triple_number'=>339,'visible_triple_number'=>'339'],// #19
            ['single_number'=>5,'triple_number'=>889,'visible_triple_number'=>'889'],// #20
            ['single_number'=>5,'triple_number'=>348,'visible_triple_number'=>'348'],// #21
            ['single_number'=>5,'triple_number'=>168,'visible_triple_number'=>'168'],// #22

            ['single_number'=>6,'triple_number'=>600,'visible_triple_number'=>'600'],// #1
            ['single_number'=>6,'triple_number'=>123,'visible_triple_number'=>'123'],// #2
            ['single_number'=>6,'triple_number'=>222,'visible_triple_number'=>'222'],// #3
            ['single_number'=>6,'triple_number'=>150,'visible_triple_number'=>'150'],// #4
            ['single_number'=>6,'triple_number'=>330,'visible_triple_number'=>'330'],// #5
            ['single_number'=>6,'triple_number'=>240,'visible_triple_number'=>'240'],// #6
            ['single_number'=>6,'triple_number'=>248,'visible_triple_number'=>'268'],// #7
            ['single_number'=>6,'triple_number'=>169,'visible_triple_number'=>'169'],// #8
            ['single_number'=>6,'triple_number'=>367,'visible_triple_number'=>'367'],// #9
            ['single_number'=>6,'triple_number'=>448,'visible_triple_number'=>'448'],// #10
            ['single_number'=>6,'triple_number'=>899,'visible_triple_number'=>'899'],// #11
            ['single_number'=>6,'triple_number'=>178,'visible_triple_number'=>'178'],// #12
            ['single_number'=>6,'triple_number'=>790,'visible_triple_number'=>'790'],// #13
            ['single_number'=>6,'triple_number'=>466,'visible_triple_number'=>'466'],// #14
            ['single_number'=>6,'triple_number'=>358,'visible_triple_number'=>'358'],// #15
            ['single_number'=>6,'triple_number'=>880,'visible_triple_number'=>'880'],// #16
            ['single_number'=>6,'triple_number'=>114,'visible_triple_number'=>'114'],// #17
            ['single_number'=>6,'triple_number'=>556,'visible_triple_number'=>'556'],// #18
            ['single_number'=>6,'triple_number'=>259,'visible_triple_number'=>'259'],// #19
            ['single_number'=>6,'triple_number'=>349,'visible_triple_number'=>'349'],// #20
            ['single_number'=>6,'triple_number'=>457,'visible_triple_number'=>'457'],// #21
            ['single_number'=>6,'triple_number'=>277,'visible_triple_number'=>'277'],// #22

        ]);



        // Product has separate file
        // php artisan db:seed --class=ProductSeeder


        //Transaction types

    }
}

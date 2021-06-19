<?php

namespace Database\Seeders;


use App\Models\DrawMaster;
use App\Models\GameType;
use App\Models\SingleNumber;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\UserType;
use App\Models\NumberCombination;
use App\Models\ResultMaster;

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

        User::create(['user_name'=>'Arindam Biswas','email'=>'1001','password'=>"b8c37e33defde51cf91e1e03e51657da",'mobile1'=>'9836444999','user_type_id'=>1,'closing_balance' => 5000]);
        User::create(['user_name'=>'Ananda Sen','email'=>'1002','password'=>"fba9d88164f3e2d9109ee770223212a0",'mobile1'=>'9536485201','user_type_id'=>2,'closing_balance' => 5000]);
        User::create(['user_name'=>'Mahesh Roy','email'=>'1003','password'=>"aa68c75c4a77c87f97fb686b2f068676",'mobile1'=>'8532489030','user_type_id'=>3,'closing_balance' => 5000]);
        User::create(['user_name'=>'Ramesh Ghosh','email'=>'1004','password'=>"fed33392d3a48aa149a87a38b875ba4a",'mobile1'=>'9587412358','user_type_id'=>4,'closing_balance' => 5000]);

        SingleNumber::insert([
            ['single_number' => 1, 'single_order' => 1],
            ['single_number' => 2, 'single_order' => 2],
            ['single_number' => 3, 'single_order' => 3],
            ['single_number' => 4, 'single_order' => 4],
            ['single_number' => 5, 'single_order' => 5],
            ['single_number' => 6, 'single_order' => 6],
            ['single_number' => 7, 'single_order' => 7],
            ['single_number' => 8, 'single_order' => 8],
            ['single_number' => 9, 'single_order' => 9],
            ['single_number' => 0, 'single_order' => 10]
        ]);

        NumberCombination::insert([


            ['single_number_id' =>1, 'triple_number' => 100, 'visible_triple_number' => '100'],// #1
            ['single_number_id' =>1, 'triple_number' => 678, 'visible_triple_number' => '678'],// #2
            ['single_number_id' =>1, 'triple_number' => 777, 'visible_triple_number' => '777'],// #3
            ['single_number_id' =>1, 'triple_number' => 560, 'visible_triple_number' => '560'],// #4
            ['single_number_id' =>1, 'triple_number' => 470, 'visible_triple_number' => '470'],// #5
            ['single_number_id' =>1, 'triple_number' => 380, 'visible_triple_number' => '380'],// #6
            ['single_number_id' =>1, 'triple_number' => 290, 'visible_triple_number' => '290'],// #7
            ['single_number_id' =>1, 'triple_number' => 119, 'visible_triple_number' => '119'],// #8
            ['single_number_id' =>1, 'triple_number' => 137, 'visible_triple_number' => '137'],// #9
            ['single_number_id' =>1, 'triple_number' => 236, 'visible_triple_number' => '236'],// #10
            ['single_number_id' =>1, 'triple_number' => 146, 'visible_triple_number' => '146'],// #11
            ['single_number_id' =>1, 'triple_number' => 669, 'visible_triple_number' => '669'],// #12
            ['single_number_id' =>1, 'triple_number' => 579, 'visible_triple_number' => '579'],// #13
            ['single_number_id' =>1, 'triple_number' => 399, 'visible_triple_number' => '399'],// #14
            ['single_number_id' =>1, 'triple_number' => 588, 'visible_triple_number' => '588'],// #15
            ['single_number_id' =>1, 'triple_number' => 489, 'visible_triple_number' => '489'],// #16
            ['single_number_id' =>1, 'triple_number' => 245, 'visible_triple_number' => '245'],// #17
            ['single_number_id' =>1, 'triple_number' => 155, 'visible_triple_number' => '155'],// #18
            ['single_number_id' =>1, 'triple_number' => 227, 'visible_triple_number' => '227'],// #19
            ['single_number_id' =>1, 'triple_number' => 344, 'visible_triple_number' => '344'],// #20
            ['single_number_id' =>1, 'triple_number' => 335, 'visible_triple_number' => '335'],// #21
            ['single_number_id' =>1, 'triple_number' => 128, 'visible_triple_number' => '128'],// #22


            ['single_number_id' =>2, 'triple_number' => 200, 'visible_triple_number' => '200'],// #1
            ['single_number_id' =>2, 'triple_number' => 345, 'visible_triple_number' => '345'],// #2
            ['single_number_id' =>2, 'triple_number' => 444, 'visible_triple_number' => '444'],// #3
            ['single_number_id' =>2, 'triple_number' => 570, 'visible_triple_number' => '570'],// #4
            ['single_number_id' =>2, 'triple_number' => 480, 'visible_triple_number' => '480'],// #5
            ['single_number_id' =>2, 'triple_number' => 390, 'visible_triple_number' => '390'],// #6
            ['single_number_id' =>2, 'triple_number' => 660, 'visible_triple_number' => '660'],// #7
            ['single_number_id' =>2, 'triple_number' => 129, 'visible_triple_number' => '129'],// #8
            ['single_number_id' =>2, 'triple_number' => 237, 'visible_triple_number' => '237'],// #9
            ['single_number_id' =>2, 'triple_number' => 336, 'visible_triple_number' => '336'],// #10
            ['single_number_id' =>2, 'triple_number' => 246, 'visible_triple_number' => '246'],// #11
            ['single_number_id' =>2, 'triple_number' => 679, 'visible_triple_number' => '679'],// #12
            ['single_number_id' =>2, 'triple_number' => 255, 'visible_triple_number' => '255'],// #13
            ['single_number_id' =>2, 'triple_number' => 147, 'visible_triple_number' => '147'],// #14
            ['single_number_id' =>2, 'triple_number' => 228, 'visible_triple_number' => '228'],// #15
            ['single_number_id' =>2, 'triple_number' => 499, 'visible_triple_number' => '499'],// #16
            ['single_number_id' =>2, 'triple_number' => 688, 'visible_triple_number' => '688'],// #17
            ['single_number_id' =>2, 'triple_number' => 778, 'visible_triple_number' => '778'],// #18
            ['single_number_id' =>2, 'triple_number' => 138, 'visible_triple_number' => '138'],// #19
            ['single_number_id' =>2, 'triple_number' => 156, 'visible_triple_number' => '156'],// #20
            ['single_number_id' =>2, 'triple_number' => 110, 'visible_triple_number' => '110'],// #21
            ['single_number_id' =>2, 'triple_number' => 589, 'visible_triple_number' => '589'],// #22

            ['single_number_id' =>3, 'triple_number' => 300, 'visible_triple_number' => '300'],// #1
            ['single_number_id' =>3, 'triple_number' => 120, 'visible_triple_number' => '120'],// #2
            ['single_number_id' =>3, 'triple_number' => 111, 'visible_triple_number' => '111'],// #3
            ['single_number_id' =>3, 'triple_number' => 580, 'visible_triple_number' => '580'],// #4
            ['single_number_id' =>3, 'triple_number' => 490, 'visible_triple_number' => '490'],// #5
            ['single_number_id' =>3, 'triple_number' => 670, 'visible_triple_number' => '670'],// #6
            ['single_number_id' =>3, 'triple_number' => 238, 'visible_triple_number' => '238'],// #7
            ['single_number_id' =>3, 'triple_number' => 139, 'visible_triple_number' => '139'],// #8
            ['single_number_id' =>3, 'triple_number' => 337, 'visible_triple_number' => '337'],// #9
            ['single_number_id' =>3, 'triple_number' => 157, 'visible_triple_number' => '157'],// #10
            ['single_number_id' =>3, 'triple_number' => 346, 'visible_triple_number' => '346'],// #11
            ['single_number_id' =>3, 'triple_number' => 689, 'visible_triple_number' => '689'],// #12
            ['single_number_id' =>3, 'triple_number' => 355, 'visible_triple_number' => '355'],// #13
            ['single_number_id' =>3, 'triple_number' => 247, 'visible_triple_number' => '247'],// #14
            ['single_number_id' =>3, 'triple_number' => 256, 'visible_triple_number' => '256'],// #15
            ['single_number_id' =>3, 'triple_number' => 166, 'visible_triple_number' => '166'],// #16
            ['single_number_id' =>3, 'triple_number' => 599, 'visible_triple_number' => '599'],// #17
            ['single_number_id' =>3, 'triple_number' => 148, 'visible_triple_number' => '148'],// #18
            ['single_number_id' =>3, 'triple_number' => 788, 'visible_triple_number' => '788'],// #19
            ['single_number_id' =>3, 'triple_number' => 445, 'visible_triple_number' => '445'],// #20
            ['single_number_id' =>3, 'triple_number' => 229, 'visible_triple_number' => '229'],// #21
            ['single_number_id' =>3, 'triple_number' => 779, 'visible_triple_number' => '779'],// #22

            ['single_number_id' =>4,'triple_number'=>400,'visible_triple_number'=>'400'],// #1
            ['single_number_id' =>4,'triple_number'=>789,'visible_triple_number'=>'789'],// #2
            ['single_number_id' =>4,'triple_number'=>888,'visible_triple_number'=>'888'],// #3
            ['single_number_id' =>4,'triple_number'=>590,'visible_triple_number'=>'590'],// #4
            ['single_number_id' =>4,'triple_number'=>130,'visible_triple_number'=>'130'],// #5
            ['single_number_id' =>4,'triple_number'=>680,'visible_triple_number'=>'680'],// #6
            ['single_number_id' =>4,'triple_number'=>248,'visible_triple_number'=>'248'],// #7
            ['single_number_id' =>4,'triple_number'=>149,'visible_triple_number'=>'149'],// #8
            ['single_number_id' =>4,'triple_number'=>347,'visible_triple_number'=>'347'],// #9
            ['single_number_id' =>4,'triple_number'=>158,'visible_triple_number'=>'158'],// #10
            ['single_number_id' =>4,'triple_number'=>446,'visible_triple_number'=>'446'],// #11
            ['single_number_id' =>4,'triple_number'=>699,'visible_triple_number'=>'699'],// #12
            ['single_number_id' =>4,'triple_number'=>455,'visible_triple_number'=>'455'],// #13
            ['single_number_id' =>4,'triple_number'=>266,'visible_triple_number'=>'266'],// #14
            ['single_number_id' =>4,'triple_number'=>112,'visible_triple_number'=>'112'],// #15
            ['single_number_id' =>4,'triple_number'=>356,'visible_triple_number'=>'356'],// #16
            ['single_number_id' =>4,'triple_number'=>239,'visible_triple_number'=>'239'],// #17
            ['single_number_id' =>4,'triple_number'=>338,'visible_triple_number'=>'338'],// #18
            ['single_number_id' =>4,'triple_number'=>257,'visible_triple_number'=>'257'],// #19
            ['single_number_id' =>4,'triple_number'=>220,'visible_triple_number'=>'220'],// #20
            ['single_number_id' =>4,'triple_number'=>770,'visible_triple_number'=>'770'],// #21
            ['single_number_id' =>4,'triple_number'=>167,'visible_triple_number'=>'167'],// #22

            ['single_number_id' =>5,'triple_number'=>500,'visible_triple_number'=>'500'],// #1
            ['single_number_id' =>5,'triple_number'=>456,'visible_triple_number'=>'456'],// #2
            ['single_number_id' =>5,'triple_number'=>555,'visible_triple_number'=>'555'],// #3
            ['single_number_id' =>5,'triple_number'=>140,'visible_triple_number'=>'140'],// #4
            ['single_number_id' =>5,'triple_number'=>230,'visible_triple_number'=>'230'],// #5
            ['single_number_id' =>5,'triple_number'=>690,'visible_triple_number'=>'690'],// #6
            ['single_number_id' =>5,'triple_number'=>258,'visible_triple_number'=>'258'],// #7
            ['single_number_id' =>5,'triple_number'=>159,'visible_triple_number'=>'159'],// #8
            ['single_number_id' =>5,'triple_number'=>357,'visible_triple_number'=>'357'],// #9
            ['single_number_id' =>5,'triple_number'=>799,'visible_triple_number'=>'799'],// #10
            ['single_number_id' =>5,'triple_number'=>267,'visible_triple_number'=>'267'],// #11
            ['single_number_id' =>5,'triple_number'=>780,'visible_triple_number'=>'780'],// #12
            ['single_number_id' =>5,'triple_number'=>447,'visible_triple_number'=>'447'],// #13
            ['single_number_id' =>5,'triple_number'=>366,'visible_triple_number'=>'366'],// #14
            ['single_number_id' =>5,'triple_number'=>113,'visible_triple_number'=>'113'],// #15
            ['single_number_id' =>5,'triple_number'=>122,'visible_triple_number'=>'122'],// #16
            ['single_number_id' =>5,'triple_number'=>177,'visible_triple_number'=>'177'],// #17
            ['single_number_id' =>5,'triple_number'=>249,'visible_triple_number'=>'249'],// #18
            ['single_number_id' =>5,'triple_number'=>339,'visible_triple_number'=>'339'],// #19
            ['single_number_id' =>5,'triple_number'=>889,'visible_triple_number'=>'889'],// #20
            ['single_number_id' =>5,'triple_number'=>348,'visible_triple_number'=>'348'],// #21
            ['single_number_id' =>5,'triple_number'=>168,'visible_triple_number'=>'168'],// #22

            ['single_number_id' =>6,'triple_number'=>600,'visible_triple_number'=>'600'],// #1
            ['single_number_id' =>6,'triple_number'=>123,'visible_triple_number'=>'123'],// #2
            ['single_number_id' =>6,'triple_number'=>222,'visible_triple_number'=>'222'],// #3
            ['single_number_id' =>6,'triple_number'=>150,'visible_triple_number'=>'150'],// #4
            ['single_number_id' =>6,'triple_number'=>330,'visible_triple_number'=>'330'],// #5
            ['single_number_id' =>6,'triple_number'=>240,'visible_triple_number'=>'240'],// #6
            ['single_number_id' =>6,'triple_number'=>268,'visible_triple_number'=>'268'],// #7
            ['single_number_id' =>6,'triple_number'=>169,'visible_triple_number'=>'169'],// #8
            ['single_number_id' =>6,'triple_number'=>367,'visible_triple_number'=>'367'],// #9
            ['single_number_id' =>6,'triple_number'=>448,'visible_triple_number'=>'448'],// #10
            ['single_number_id' =>6,'triple_number'=>899,'visible_triple_number'=>'899'],// #11
            ['single_number_id' =>6,'triple_number'=>178,'visible_triple_number'=>'178'],// #12
            ['single_number_id' =>6,'triple_number'=>790,'visible_triple_number'=>'790'],// #13
            ['single_number_id' =>6,'triple_number'=>466,'visible_triple_number'=>'466'],// #14
            ['single_number_id' =>6,'triple_number'=>358,'visible_triple_number'=>'358'],// #15
            ['single_number_id' =>6,'triple_number'=>880,'visible_triple_number'=>'880'],// #16
            ['single_number_id' =>6,'triple_number'=>114,'visible_triple_number'=>'114'],// #17
            ['single_number_id' =>6,'triple_number'=>556,'visible_triple_number'=>'556'],// #18
            ['single_number_id' =>6,'triple_number'=>259,'visible_triple_number'=>'259'],// #19
            ['single_number_id' =>6,'triple_number'=>349,'visible_triple_number'=>'349'],// #20
            ['single_number_id' =>6,'triple_number'=>457,'visible_triple_number'=>'457'],// #21
            ['single_number_id' =>6,'triple_number'=>277,'visible_triple_number'=>'277'],// #22

            ['single_number_id' =>7,'triple_number'=>700,'visible_triple_number'=>'700'],// #1
            ['single_number_id' =>7,'triple_number'=>890,'visible_triple_number'=>'890'],// #2
            ['single_number_id' =>7,'triple_number'=>999,'visible_triple_number'=>'999'],// #3
            ['single_number_id' =>7,'triple_number'=>160,'visible_triple_number'=>'160'],// #4
            ['single_number_id' =>7,'triple_number'=>340,'visible_triple_number'=>'340'],// #5
            ['single_number_id' =>7,'triple_number'=>250,'visible_triple_number'=>'250'],// #6
            ['single_number_id' =>7,'triple_number'=>278,'visible_triple_number'=>'278'],// #7
            ['single_number_id' =>7,'triple_number'=>179,'visible_triple_number'=>'179'],// #8
            ['single_number_id' =>7,'triple_number'=>377,'visible_triple_number'=>'377'],// #9
            ['single_number_id' =>7,'triple_number'=>467,'visible_triple_number'=>'467'],// #10
            ['single_number_id' =>7,'triple_number'=>115,'visible_triple_number'=>'115'],// #11
            ['single_number_id' =>7,'triple_number'=>124,'visible_triple_number'=>'124'],// #12
            ['single_number_id' =>7,'triple_number'=>223,'visible_triple_number'=>'223'],// #13
            ['single_number_id' =>7,'triple_number'=>566,'visible_triple_number'=>'566'],// #14
            ['single_number_id' =>7,'triple_number'=>557,'visible_triple_number'=>'557'],// #15
            ['single_number_id' =>7,'triple_number'=>368,'visible_triple_number'=>'368'],// #16
            ['single_number_id' =>7,'triple_number'=>359,'visible_triple_number'=>'359'],// #17
            ['single_number_id' =>7,'triple_number'=>449,'visible_triple_number'=>'449'],// #18
            ['single_number_id' =>7,'triple_number'=>269,'visible_triple_number'=>'269'],// #19
            ['single_number_id' =>7,'triple_number'=>133,'visible_triple_number'=>'133'],// #20
            ['single_number_id' =>7,'triple_number'=>188,'visible_triple_number'=>'188'],// #21
            ['single_number_id' =>7,'triple_number'=>458,'visible_triple_number'=>'458'],// #22

            ['single_number_id' =>8,'triple_number'=>800,'visible_triple_number'=>'800'],// #1
            ['single_number_id' =>8,'triple_number'=>567,'visible_triple_number'=>'567'],// #2
            ['single_number_id' =>8,'triple_number'=>666,'visible_triple_number'=>'666'],// #3
            ['single_number_id' =>8,'triple_number'=>170,'visible_triple_number'=>'170'],// #4
            ['single_number_id' =>8,'triple_number'=>350,'visible_triple_number'=>'350'],// #5
            ['single_number_id' =>8,'triple_number'=>260,'visible_triple_number'=>'260'],// #6
            ['single_number_id' =>8,'triple_number'=>288,'visible_triple_number'=>'288'],// #7
            ['single_number_id' =>8,'triple_number'=>189,'visible_triple_number'=>'189'],// #8
            ['single_number_id' =>8,'triple_number'=>116,'visible_triple_number'=>'116'],// #9
            ['single_number_id' =>8,'triple_number'=>233,'visible_triple_number'=>'233'],// #10
            ['single_number_id' =>8,'triple_number'=>459,'visible_triple_number'=>'459'],// #11
            ['single_number_id' =>8,'triple_number'=>125,'visible_triple_number'=>'125'],// #12
            ['single_number_id' =>8,'triple_number'=>224,'visible_triple_number'=>'224'],// #13
            ['single_number_id' =>8,'triple_number'=>477,'visible_triple_number'=>'447'],// #14
            ['single_number_id' =>8,'triple_number'=>990,'visible_triple_number'=>'990'],// #15
            ['single_number_id' =>8,'triple_number'=>134,'visible_triple_number'=>'134'],// #16
            ['single_number_id' =>8,'triple_number'=>558,'visible_triple_number'=>'558'],// #17
            ['single_number_id' =>8,'triple_number'=>369,'visible_triple_number'=>'369'],// #18
            ['single_number_id' =>8,'triple_number'=>378,'visible_triple_number'=>'378'],// #19
            ['single_number_id' =>8,'triple_number'=>440,'visible_triple_number'=>'440'],// #20
            ['single_number_id' =>8,'triple_number'=>279,'visible_triple_number'=>'279'],// #21
            ['single_number_id' =>8,'triple_number'=>468,'visible_triple_number'=>'468'],// #22

            ['single_number_id' =>9,'triple_number'=>900,'visible_triple_number'=>'900'],// #1
            ['single_number_id' =>9,'triple_number'=>234,'visible_triple_number'=>'234'],// #2
            ['single_number_id' =>9,'triple_number'=>333,'visible_triple_number'=>'333'],// #3
            ['single_number_id' =>9,'triple_number'=>180,'visible_triple_number'=>'180'],// #4
            ['single_number_id' =>9,'triple_number'=>360,'visible_triple_number'=>'360'],// #5
            ['single_number_id' =>9,'triple_number'=>270,'visible_triple_number'=>'270'],// #6
            ['single_number_id' =>9,'triple_number'=>450,'visible_triple_number'=>'450'],// #7
            ['single_number_id' =>9,'triple_number'=>199,'visible_triple_number'=>'199'],// #8
            ['single_number_id' =>9,'triple_number'=>117,'visible_triple_number'=>'117'],// #9
            ['single_number_id' =>9,'triple_number'=>469,'visible_triple_number'=>'469'],// #10
            ['single_number_id' =>9,'triple_number'=>126,'visible_triple_number'=>'126'],// #11
            ['single_number_id' =>9,'triple_number'=>667,'visible_triple_number'=>'667'],// #12
            ['single_number_id' =>9,'triple_number'=>478,'visible_triple_number'=>'478'],// #13
            ['single_number_id' =>9,'triple_number'=>135,'visible_triple_number'=>'135'],// #14
            ['single_number_id' =>9,'triple_number'=>225,'visible_triple_number'=>'225'],// #15
            ['single_number_id' =>9,'triple_number'=>144,'visible_triple_number'=>'144'],// #16
            ['single_number_id' =>9,'triple_number'=>379,'visible_triple_number'=>'379'],// #17
            ['single_number_id' =>9,'triple_number'=>559,'visible_triple_number'=>'559'],// #18
            ['single_number_id' =>9,'triple_number'=>289,'visible_triple_number'=>'289'],// #19
            ['single_number_id' =>9,'triple_number'=>388,'visible_triple_number'=>'388'],// #20
            ['single_number_id' =>9,'triple_number'=>577,'visible_triple_number'=>'577'],// #21
            ['single_number_id' =>9,'triple_number'=>568,'visible_triple_number'=>'568'],// #22

            ['single_number_id' =>10, 'triple_number' => 000, 'visible_triple_number' => 'OOO'],// #1
            ['single_number_id' =>10, 'triple_number' => 127, 'visible_triple_number' => '127'],// #2
            ['single_number_id' =>10, 'triple_number' => 190, 'visible_triple_number' => '190'],// #3
            ['single_number_id' =>10, 'triple_number' => 280, 'visible_triple_number' => '280'],// #4
            ['single_number_id' =>10, 'triple_number' => 370, 'visible_triple_number' => '370'],// #5
            ['single_number_id' =>10, 'triple_number' => 460, 'visible_triple_number' => '460'],// #6
            ['single_number_id' =>10, 'triple_number' => 550, 'visible_triple_number' => '550'],// #7
            ['single_number_id' =>10, 'triple_number' => 235, 'visible_triple_number' => '235'],// #8
            ['single_number_id' =>10, 'triple_number' => 118, 'visible_triple_number' => '118'],// #9
            ['single_number_id' =>10, 'triple_number' => 578, 'visible_triple_number' => '578'],// #10
            ['single_number_id' =>10, 'triple_number' => 145, 'visible_triple_number' => '145'],// #11
            ['single_number_id' =>10, 'triple_number' => 479, 'visible_triple_number' => '479'],// #12
            ['single_number_id' =>10, 'triple_number' => 668, 'visible_triple_number' => '668'],// #13
            ['single_number_id' =>10, 'triple_number' => 299, 'visible_triple_number' => '299'],// #14
            ['single_number_id' =>10, 'triple_number' => 334, 'visible_triple_number' => '334'],// #15
            ['single_number_id' =>10, 'triple_number' => 488, 'visible_triple_number' => '488'],// #16
            ['single_number_id' =>10, 'triple_number' => 389, 'visible_triple_number' => '389'],// #17
            ['single_number_id' =>10, 'triple_number' => 226, 'visible_triple_number' => '226'],// #18
            ['single_number_id' =>10, 'triple_number' => 569, 'visible_triple_number' => '569'],// #19
            ['single_number_id' =>10, 'triple_number' => 677, 'visible_triple_number' => '677'],// #20
            ['single_number_id' =>10, 'triple_number' => 136, 'visible_triple_number' => '136'],// #21
            ['single_number_id' =>10, 'triple_number' => 244, 'visible_triple_number' => '244'],// #22

        ]);

        DrawMaster::insert([

            ['draw_name'=> 'Good morning','start_time'=>'08:30 ','end_time'=>'09:00','visible_time'=>'09:00 am','active'=>0],
            ['draw_name'=> 'Good morning','start_time'=>'09:00','end_time'=>'09:30','visible_time'=>'09:30 am','active'=>1],
            ['draw_name'=> 'Good morning','start_time'=>'09:30','end_time'=>'10:00','visible_time'=>'10:00 am','active'=>1],
            ['draw_name'=> 'Good afternoon','start_time'=>'10:00','end_time'=>'10:30','visible_time'=>'10:30 am','active'=>0],
            ['draw_name'=> 'Good evening','start_time'=>'10:30','end_time'=>'11:00','visible_time'=>'11:00 pm','active'=>0],
            ['draw_name'=> 'Lets play','start_time'=>'11:00','end_time'=>'11:30','visible_time'=>'11:30 pm','active'=>0],
            ['draw_name'=> 'Good night','start_time'=>'11:30','end_time'=>'12:00','visible_time'=>'12:00 pm','active'=>0],
            ['draw_name'=> 'Good morning','start_time'=>'12:00','end_time'=>'12:30','visible_time'=>'12:30 pm','active'=>0],
            ['draw_name'=> 'Good afternoon','start_time'=>'12:30','end_time'=>'13:00','visible_time'=>'01:00 pm','active'=>0],
            ['draw_name'=> 'Good morning','start_time'=>'13:00 ','end_time'=>'13:30','visible_time'=>'01:30 pm','active'=>0],
            ['draw_name'=> 'Good morning','start_time'=>'13:30 ','end_time'=>'14:00','visible_time'=>'02:00 pm','active'=>0],
            ['draw_name'=> 'Good morning','start_time'=>'14:00 ','end_time'=>'14:30','visible_time'=>'02:30 pm','active'=>0],
            ['draw_name'=> 'Good morning','start_time'=>'14:30 ','end_time'=>'15:00','visible_time'=>'03:00 pm','active'=>0],
            ['draw_name'=> 'Good morning','start_time'=>'15:00 ','end_time'=>'15:30','visible_time'=>'03:30 pm','active'=>0],
            ['draw_name'=> 'Good morning','start_time'=>'15:30 ','end_time'=>'16:00','visible_time'=>'04:00 pm','active'=>0],
            ['draw_name'=> 'Good morning','start_time'=>'16:00 ','end_time'=>'16:30','visible_time'=>'04:30 pm','active'=>0],
            ['draw_name'=> 'Good morning','start_time'=>'16:30 ','end_time'=>'17:00','visible_time'=>'05:00 pm','active'=>0],
            ['draw_name'=> 'Good morning','start_time'=>'17:00 ','end_time'=>'17:30','visible_time'=>'05:30 pm','active'=>0],
            ['draw_name'=> 'Good morning','start_time'=>'17:30 ','end_time'=>'18:00','visible_time'=>'06:00 pm','active'=>0],
            ['draw_name'=> 'Good morning','start_time'=>'18:00 ','end_time'=>'18:30','visible_time'=>'06:30 pm','active'=>0],
            ['draw_name'=> 'Good morning','start_time'=>'18:30 ','end_time'=>'19:00','visible_time'=>'07:00 pm','active'=>0],
            ['draw_name'=> 'Good morning','start_time'=>'19:00 ','end_time'=>'19:30','visible_time'=>'07:30 pm','active'=>0],
            ['draw_name'=> 'Good morning','start_time'=>'19:30 ','end_time'=>'20:00','visible_time'=>'08:00 pm','active'=>0],
            ['draw_name'=> 'Good morning','start_time'=>'20:00 ','end_time'=>'20:30','visible_time'=>'08:30 pm','active'=>0],
            ['draw_name'=> 'Good morning','start_time'=>'20:30 ','end_time'=>'21:00','visible_time'=>'09:00 pm','active'=>0],


        ]);

        GameType::insert([
            ['game_type_name'=>'single','game_type_initial' => '' ,'mrp'=> 1.00, 'winning_price'=>9, 'winning_bonus_percent'=>0.2, 'commission'=>5.00, 'payout'=>150,'default_payout'=>150],
            ['game_type_name'=>'triple','game_type_initial' => '' ,'mrp'=> 1.00, 'winning_price'=>100, 'winning_bonus_percent'=>0.2, 'commission'=>5.00, 'payout'=>150,'default_payout'=>150]
        ]);

        // Product has separate file
        // php artisan db:seed --class=ProductSeeder


        //Transaction types


        //resultMaster

        ResultMaster::insert([
            ['draw_master_id'=>1,'number_combination_id'=>54,'game_date'=>'2021-05-24'],
            ['draw_master_id'=>2,'number_combination_id'=>11,'game_date'=>'2021-05-24'],
            ['draw_master_id'=>3,'number_combination_id'=>65,'game_date'=>'2021-05-24'],
            ['draw_master_id'=>4,'number_combination_id'=>55,'game_date'=>'2021-05-24'],
            ['draw_master_id'=>5,'number_combination_id'=>37,'game_date'=>'2021-05-24'],

            ['draw_master_id'=>1,'number_combination_id'=>44,'game_date'=>'2021-05-23'],
            ['draw_master_id'=>2,'number_combination_id'=>11,'game_date'=>'2021-05-23'],
            ['draw_master_id'=>3,'number_combination_id'=>15,'game_date'=>'2021-05-23'],
            ['draw_master_id'=>4,'number_combination_id'=>55,'game_date'=>'2021-05-23'],
            ['draw_master_id'=>5,'number_combination_id'=>17,'game_date'=>'2021-05-23'],
            ['draw_master_id'=>6,'number_combination_id'=>47,'game_date'=>'2021-05-23'],
            ['draw_master_id'=>7,'number_combination_id'=>15,'game_date'=>'2021-05-23'],
            ['draw_master_id'=>8,'number_combination_id'=>86,'game_date'=>'2021-05-23'],

            //1st
            ['draw_master_id'=>1,'number_combination_id'=>200,'game_date'=>'2021-05-22'],
            ['draw_master_id'=>2,'number_combination_id'=>72,'game_date'=>'2021-05-22'],
            ['draw_master_id'=>3,'number_combination_id'=>112,'game_date'=>'2021-05-22'],
            ['draw_master_id'=>4,'number_combination_id'=>119,'game_date'=>'2021-05-22'],
            ['draw_master_id'=>5,'number_combination_id'=>17,'game_date'=>'2021-05-22'],
            ['draw_master_id'=>6,'number_combination_id'=>112,'game_date'=>'2021-05-22'],
            ['draw_master_id'=>7,'number_combination_id'=>100,'game_date'=>'2021-05-22'],
            ['draw_master_id'=>8,'number_combination_id'=>117,'game_date'=>'2021-05-22'],

            ['draw_master_id'=>1,'number_combination_id'=>197,'game_date'=>'2021-05-21'],
            ['draw_master_id'=>2,'number_combination_id'=>161,'game_date'=>'2021-05-21'],
            ['draw_master_id'=>3,'number_combination_id'=>18,'game_date'=>'2021-05-21'],
            ['draw_master_id'=>4,'number_combination_id'=>97,'game_date'=>'2021-05-21'],
            ['draw_master_id'=>5,'number_combination_id'=>150,'game_date'=>'2021-05-21'],
            ['draw_master_id'=>6,'number_combination_id'=>139,'game_date'=>'2021-05-21'],
            ['draw_master_id'=>7,'number_combination_id'=>61,'game_date'=>'2021-05-21'],
            ['draw_master_id'=>8,'number_combination_id'=>181,'game_date'=>'2021-05-21'],

            ['draw_master_id'=>1,'number_combination_id'=>97,'game_date'=>'2021-05-20'],
            ['draw_master_id'=>2,'number_combination_id'=>38,'game_date'=>'2021-05-20'],
            ['draw_master_id'=>3,'number_combination_id'=>118,'game_date'=>'2021-05-20'],
            ['draw_master_id'=>4,'number_combination_id'=>175,'game_date'=>'2021-05-20'],
            ['draw_master_id'=>5,'number_combination_id'=>91,'game_date'=>'2021-05-20'],
            ['draw_master_id'=>6,'number_combination_id'=>112,'game_date'=>'2021-05-20'],
            ['draw_master_id'=>7,'number_combination_id'=>82,'game_date'=>'2021-05-20'],
            ['draw_master_id'=>8,'number_combination_id'=>208,'game_date'=>'2021-05-20'],

            ['draw_master_id'=>1,'number_combination_id'=>125,'game_date'=>'2021-05-19'],
            ['draw_master_id'=>2,'number_combination_id'=>51,'game_date'=>'2021-05-19'],
            ['draw_master_id'=>3,'number_combination_id'=>82,'game_date'=>'2021-05-19'],
            ['draw_master_id'=>4,'number_combination_id'=>201,'game_date'=>'2021-05-19'],
            ['draw_master_id'=>5,'number_combination_id'=>131,'game_date'=>'2021-05-19'],
            ['draw_master_id'=>6,'number_combination_id'=>20,'game_date'=>'2021-05-19'],
            ['draw_master_id'=>7,'number_combination_id'=>186,'game_date'=>'2021-05-19'],
            ['draw_master_id'=>8,'number_combination_id'=>175,'game_date'=>'2021-05-19'],

            ['draw_master_id'=>1,'number_combination_id'=>19,'game_date'=>'2021-05-18'],
            ['draw_master_id'=>2,'number_combination_id'=>200,'game_date'=>'2021-05-18'],
            ['draw_master_id'=>3,'number_combination_id'=>59,'game_date'=>'2021-05-18'],
            ['draw_master_id'=>4,'number_combination_id'=>105,'game_date'=>'2021-05-18'],
            ['draw_master_id'=>5,'number_combination_id'=>102,'game_date'=>'2021-05-18'],
            ['draw_master_id'=>6,'number_combination_id'=>114,'game_date'=>'2021-05-18'],
            ['draw_master_id'=>7,'number_combination_id'=>220,'game_date'=>'2021-05-18'],
            ['draw_master_id'=>8,'number_combination_id'=>133,'game_date'=>'2021-05-18'],

            ['draw_master_id'=>1,'number_combination_id'=>4,'game_date'=>'2021-05-17'],
            ['draw_master_id'=>2,'number_combination_id'=>40,'game_date'=>'2021-05-17'],
            ['draw_master_id'=>3,'number_combination_id'=>185,'game_date'=>'2021-05-17'],
            ['draw_master_id'=>4,'number_combination_id'=>199,'game_date'=>'2021-05-17'],
            ['draw_master_id'=>5,'number_combination_id'=>156,'game_date'=>'2021-05-17'],
            ['draw_master_id'=>6,'number_combination_id'=>85,'game_date'=>'2021-05-17'],
            ['draw_master_id'=>7,'number_combination_id'=>85,'game_date'=>'2021-05-17'],
            ['draw_master_id'=>8,'number_combination_id'=>53,'game_date'=>'2021-05-17'],

            ['draw_master_id'=>1,'number_combination_id'=>203,'game_date'=>'2021-05-16'],
            ['draw_master_id'=>2,'number_combination_id'=>65,'game_date'=>'2021-05-16'],
            ['draw_master_id'=>3,'number_combination_id'=>33,'game_date'=>'2021-05-16'],
            ['draw_master_id'=>4,'number_combination_id'=>194,'game_date'=>'2021-05-16'],
            ['draw_master_id'=>5,'number_combination_id'=>38,'game_date'=>'2021-05-16'],
            ['draw_master_id'=>6,'number_combination_id'=>166,'game_date'=>'2021-05-16'],
            ['draw_master_id'=>7,'number_combination_id'=>61,'game_date'=>'2021-05-16'],
            ['draw_master_id'=>8,'number_combination_id'=>26,'game_date'=>'2021-05-16'],

            ['draw_master_id'=>1,'number_combination_id'=>153,'game_date'=>'2021-05-15'],
            ['draw_master_id'=>2,'number_combination_id'=>81,'game_date'=>'2021-05-15'],
            ['draw_master_id'=>3,'number_combination_id'=>39,'game_date'=>'2021-05-15'],
            ['draw_master_id'=>4,'number_combination_id'=>131,'game_date'=>'2021-05-15'],
            ['draw_master_id'=>5,'number_combination_id'=>121,'game_date'=>'2021-05-15'],
            ['draw_master_id'=>6,'number_combination_id'=>101,'game_date'=>'2021-05-15'],
            ['draw_master_id'=>7,'number_combination_id'=>196,'game_date'=>'2021-05-15'],
            ['draw_master_id'=>8,'number_combination_id'=>92,'game_date'=>'2021-05-15'],

            ['draw_master_id'=>1,'number_combination_id'=>217,'game_date'=>'2021-05-14'],
            ['draw_master_id'=>2,'number_combination_id'=>188,'game_date'=>'2021-05-14'],
            ['draw_master_id'=>3,'number_combination_id'=>5,'game_date'=>'2021-05-14'],
            ['draw_master_id'=>4,'number_combination_id'=>87,'game_date'=>'2021-05-14'],
            ['draw_master_id'=>5,'number_combination_id'=>81,'game_date'=>'2021-05-14'],
            ['draw_master_id'=>6,'number_combination_id'=>103,'game_date'=>'2021-05-14'],
            ['draw_master_id'=>7,'number_combination_id'=>47,'game_date'=>'2021-05-14'],
            ['draw_master_id'=>8,'number_combination_id'=>102,'game_date'=>'2021-05-14'],

            ['draw_master_id'=>1,'number_combination_id'=>118,'game_date'=>'2021-05-13'],
            ['draw_master_id'=>2,'number_combination_id'=>195,'game_date'=>'2021-05-13'],
            ['draw_master_id'=>3,'number_combination_id'=>122,'game_date'=>'2021-05-13'],
            ['draw_master_id'=>4,'number_combination_id'=>196,'game_date'=>'2021-05-13'],
            ['draw_master_id'=>5,'number_combination_id'=>116,'game_date'=>'2021-05-13'],
            ['draw_master_id'=>6,'number_combination_id'=>109,'game_date'=>'2021-05-13'],
            ['draw_master_id'=>7,'number_combination_id'=>59,'game_date'=>'2021-05-13'],
            ['draw_master_id'=>8,'number_combination_id'=>80,'game_date'=>'2021-05-13'],

            ['draw_master_id'=>1,'number_combination_id'=>192,'game_date'=>'2021-05-12'],
            ['draw_master_id'=>2,'number_combination_id'=>144,'game_date'=>'2021-05-12'],
            ['draw_master_id'=>3,'number_combination_id'=>145,'game_date'=>'2021-05-12'],
            ['draw_master_id'=>4,'number_combination_id'=>174,'game_date'=>'2021-05-12'],
            ['draw_master_id'=>5,'number_combination_id'=>29,'game_date'=>'2021-05-12'],
            ['draw_master_id'=>6,'number_combination_id'=>10,'game_date'=>'2021-05-12'],
            ['draw_master_id'=>7,'number_combination_id'=>38,'game_date'=>'2021-05-12'],
            ['draw_master_id'=>8,'number_combination_id'=>79,'game_date'=>'2021-05-12'],

            ['draw_master_id'=>1,'number_combination_id'=>60,'game_date'=>'2021-05-11'],
            ['draw_master_id'=>2,'number_combination_id'=>61,'game_date'=>'2021-05-11'],
            ['draw_master_id'=>3,'number_combination_id'=>90,'game_date'=>'2021-05-11'],
            ['draw_master_id'=>4,'number_combination_id'=>192,'game_date'=>'2021-05-11'],
            ['draw_master_id'=>5,'number_combination_id'=>119,'game_date'=>'2021-05-11'],
            ['draw_master_id'=>6,'number_combination_id'=>112,'game_date'=>'2021-05-11'],
            ['draw_master_id'=>7,'number_combination_id'=>80,'game_date'=>'2021-05-11'],
            ['draw_master_id'=>8,'number_combination_id'=>98,'game_date'=>'2021-05-11'],

            ['draw_master_id'=>1,'number_combination_id'=>199,'game_date'=>'2021-05-10'],
            ['draw_master_id'=>2,'number_combination_id'=>192,'game_date'=>'2021-05-10'],
            ['draw_master_id'=>3,'number_combination_id'=>181,'game_date'=>'2021-05-10'],
            ['draw_master_id'=>4,'number_combination_id'=>219,'game_date'=>'2021-05-10'],
            ['draw_master_id'=>5,'number_combination_id'=>162,'game_date'=>'2021-05-10'],
            ['draw_master_id'=>6,'number_combination_id'=>44,'game_date'=>'2021-05-10'],
            ['draw_master_id'=>7,'number_combination_id'=>172,'game_date'=>'2021-05-10'],
            ['draw_master_id'=>8,'number_combination_id'=>44,'game_date'=>'2021-05-10'],

            ['draw_master_id'=>1,'number_combination_id'=>118,'game_date'=>'2021-05-09'],
            ['draw_master_id'=>2,'number_combination_id'=>163,'game_date'=>'2021-05-09'],
            ['draw_master_id'=>3,'number_combination_id'=>210,'game_date'=>'2021-05-09'],
            ['draw_master_id'=>4,'number_combination_id'=>218,'game_date'=>'2021-05-09'],
            ['draw_master_id'=>5,'number_combination_id'=>102,'game_date'=>'2021-05-09'],
            ['draw_master_id'=>6,'number_combination_id'=>49,'game_date'=>'2021-05-09'],
            ['draw_master_id'=>7,'number_combination_id'=>206,'game_date'=>'2021-05-09'],
            ['draw_master_id'=>8,'number_combination_id'=>189,'game_date'=>'2021-05-09'],

            ['draw_master_id'=>1,'number_combination_id'=>63,'game_date'=>'2021-05-08'],
            ['draw_master_id'=>2,'number_combination_id'=>187,'game_date'=>'2021-05-08'],
            ['draw_master_id'=>3,'number_combination_id'=>103,'game_date'=>'2021-05-08'],
            ['draw_master_id'=>4,'number_combination_id'=>183,'game_date'=>'2021-05-08'],
            ['draw_master_id'=>5,'number_combination_id'=>174,'game_date'=>'2021-05-08'],
            ['draw_master_id'=>6,'number_combination_id'=>153,'game_date'=>'2021-05-08'],
            ['draw_master_id'=>7,'number_combination_id'=>20,'game_date'=>'2021-05-08'],
            ['draw_master_id'=>8,'number_combination_id'=>35,'game_date'=>'2021-05-08'],

            ['draw_master_id'=>1,'number_combination_id'=>44,'game_date'=>'2021-05-07'],
            ['draw_master_id'=>2,'number_combination_id'=>23,'game_date'=>'2021-05-07'],
            ['draw_master_id'=>3,'number_combination_id'=>20,'game_date'=>'2021-05-07'],
            ['draw_master_id'=>4,'number_combination_id'=>105,'game_date'=>'2021-05-07'],
            ['draw_master_id'=>5,'number_combination_id'=>219,'game_date'=>'2021-05-07'],
            ['draw_master_id'=>6,'number_combination_id'=>160,'game_date'=>'2021-05-07'],
            ['draw_master_id'=>7,'number_combination_id'=>14,'game_date'=>'2021-05-07'],
            ['draw_master_id'=>8,'number_combination_id'=>88,'game_date'=>'2021-05-07'],

            ['draw_master_id'=>1,'number_combination_id'=>166,'game_date'=>'2021-05-06'],
            ['draw_master_id'=>2,'number_combination_id'=>7,'game_date'=>'2021-05-06'],
            ['draw_master_id'=>3,'number_combination_id'=>93,'game_date'=>'2021-05-06'],
            ['draw_master_id'=>4,'number_combination_id'=>49,'game_date'=>'2021-05-06'],
            ['draw_master_id'=>5,'number_combination_id'=>209,'game_date'=>'2021-05-06'],
            ['draw_master_id'=>6,'number_combination_id'=>17,'game_date'=>'2021-05-06'],
            ['draw_master_id'=>7,'number_combination_id'=>74,'game_date'=>'2021-05-06'],
            ['draw_master_id'=>8,'number_combination_id'=>177,'game_date'=>'2021-05-06'],
            ['draw_master_id'=>1,'number_combination_id'=>103,'game_date'=>'2021-05-05'],
            ['draw_master_id'=>2,'number_combination_id'=>193,'game_date'=>'2021-05-05'],
            ['draw_master_id'=>3,'number_combination_id'=>19,'game_date'=>'2021-05-05'],
            ['draw_master_id'=>4,'number_combination_id'=>108,'game_date'=>'2021-05-05'],
            ['draw_master_id'=>5,'number_combination_id'=>89,'game_date'=>'2021-05-05'],
            ['draw_master_id'=>6,'number_combination_id'=>100,'game_date'=>'2021-05-05'],
            ['draw_master_id'=>7,'number_combination_id'=>104,'game_date'=>'2021-05-05'],
            ['draw_master_id'=>8,'number_combination_id'=>26,'game_date'=>'2021-05-05'],

            ['draw_master_id'=>1,'number_combination_id'=>55,'game_date'=>'2021-05-04'],
            ['draw_master_id'=>2,'number_combination_id'=>64,'game_date'=>'2021-05-04'],
            ['draw_master_id'=>3,'number_combination_id'=>43,'game_date'=>'2021-05-04'],
            ['draw_master_id'=>4,'number_combination_id'=>85,'game_date'=>'2021-05-04'],
            ['draw_master_id'=>5,'number_combination_id'=>177,'game_date'=>'2021-05-04'],
            ['draw_master_id'=>6,'number_combination_id'=>206,'game_date'=>'2021-05-04'],
            ['draw_master_id'=>7,'number_combination_id'=>3,'game_date'=>'2021-05-04'],
            ['draw_master_id'=>8,'number_combination_id'=>200,'game_date'=>'2021-05-04'],

            ['draw_master_id'=>1,'number_combination_id'=>51,'game_date'=>'2021-05-03'],
            ['draw_master_id'=>2,'number_combination_id'=>1,'game_date'=>'2021-05-03'],
            ['draw_master_id'=>3,'number_combination_id'=>130,'game_date'=>'2021-05-03'],
            ['draw_master_id'=>4,'number_combination_id'=>103,'game_date'=>'2021-05-03'],
            ['draw_master_id'=>5,'number_combination_id'=>140,'game_date'=>'2021-05-03'],
            ['draw_master_id'=>6,'number_combination_id'=>194,'game_date'=>'2021-05-03'],
            ['draw_master_id'=>7,'number_combination_id'=>85,'game_date'=>'2021-05-03'],
            ['draw_master_id'=>8,'number_combination_id'=>66,'game_date'=>'2021-05-03'],

            ['draw_master_id'=>1,'number_combination_id'=>17,'game_date'=>'2021-05-02'],
            ['draw_master_id'=>2,'number_combination_id'=>52,'game_date'=>'2021-05-02'],
            ['draw_master_id'=>3,'number_combination_id'=>77,'game_date'=>'2021-05-02'],
            ['draw_master_id'=>4,'number_combination_id'=>109,'game_date'=>'2021-05-02'],
            ['draw_master_id'=>5,'number_combination_id'=>76,'game_date'=>'2021-05-02'],
            ['draw_master_id'=>6,'number_combination_id'=>61,'game_date'=>'2021-05-02'],
            ['draw_master_id'=>7,'number_combination_id'=>117,'game_date'=>'2021-05-02'],
            ['draw_master_id'=>8,'number_combination_id'=>165,'game_date'=>'2021-05-02'],

            ['draw_master_id'=>1,'number_combination_id'=>37,'game_date'=>'2021-05-01'],
            ['draw_master_id'=>2,'number_combination_id'=>167,'game_date'=>'2021-05-01'],
            ['draw_master_id'=>3,'number_combination_id'=>106,'game_date'=>'2021-05-01'],
            ['draw_master_id'=>4,'number_combination_id'=>46,'game_date'=>'2021-05-01'],
            ['draw_master_id'=>5,'number_combination_id'=>72,'game_date'=>'2021-05-01'],
            ['draw_master_id'=>6,'number_combination_id'=>127,'game_date'=>'2021-05-01'],
            ['draw_master_id'=>7,'number_combination_id'=>44,'game_date'=>'2021-05-01'],
            ['draw_master_id'=>8,'number_combination_id'=>74,'game_date'=>'2021-05-01'],

            ['draw_master_id'=>1,'number_combination_id'=>14,'game_date'=>'2021-04-30'],
            ['draw_master_id'=>2,'number_combination_id'=>181,'game_date'=>'2021-04-30'],
            ['draw_master_id'=>3,'number_combination_id'=>197,'game_date'=>'2021-04-30'],
            ['draw_master_id'=>4,'number_combination_id'=>66,'game_date'=>'2021-04-30'],
            ['draw_master_id'=>5,'number_combination_id'=>134,'game_date'=>'2021-04-30'],
            ['draw_master_id'=>6,'number_combination_id'=>66,'game_date'=>'2021-04-30'],
            ['draw_master_id'=>7,'number_combination_id'=>31,'game_date'=>'2021-04-30'],
            ['draw_master_id'=>8,'number_combination_id'=>132,'game_date'=>'2021-04-30'],

            ['draw_master_id'=>1,'number_combination_id'=>24,'game_date'=>'2021-04-29'],
            ['draw_master_id'=>2,'number_combination_id'=>71,'game_date'=>'2021-04-29'],
            ['draw_master_id'=>3,'number_combination_id'=>213,'game_date'=>'2021-04-29'],
            ['draw_master_id'=>4,'number_combination_id'=>42,'game_date'=>'2021-04-29'],
            ['draw_master_id'=>5,'number_combination_id'=>35,'game_date'=>'2021-04-29'],
            ['draw_master_id'=>6,'number_combination_id'=>217,'game_date'=>'2021-04-29'],
            ['draw_master_id'=>7,'number_combination_id'=>152,'game_date'=>'2021-04-29'],
            ['draw_master_id'=>8,'number_combination_id'=>193,'game_date'=>'2021-04-29'],

            ['draw_master_id'=>1,'number_combination_id'=>52,'game_date'=>'2021-04-28'],
            ['draw_master_id'=>2,'number_combination_id'=>217,'game_date'=>'2021-04-28'],
            ['draw_master_id'=>3,'number_combination_id'=>69,'game_date'=>'2021-04-28'],
            ['draw_master_id'=>4,'number_combination_id'=>54,'game_date'=>'2021-04-28'],
            ['draw_master_id'=>5,'number_combination_id'=>203,'game_date'=>'2021-04-28'],
            ['draw_master_id'=>6,'number_combination_id'=>75,'game_date'=>'2021-04-28'],
            ['draw_master_id'=>7,'number_combination_id'=>104,'game_date'=>'2021-04-28'],
            ['draw_master_id'=>8,'number_combination_id'=>166,'game_date'=>'2021-04-28'],

            ['draw_master_id'=>1,'number_combination_id'=>33,'game_date'=>'2021-04-27'],
            ['draw_master_id'=>2,'number_combination_id'=>107,'game_date'=>'2021-04-27'],
            ['draw_master_id'=>3,'number_combination_id'=>131,'game_date'=>'2021-04-27'],
            ['draw_master_id'=>4,'number_combination_id'=>127,'game_date'=>'2021-04-27'],
            ['draw_master_id'=>5,'number_combination_id'=>27,'game_date'=>'2021-04-27'],
            ['draw_master_id'=>6,'number_combination_id'=>121,'game_date'=>'2021-04-27'],
            ['draw_master_id'=>7,'number_combination_id'=>29,'game_date'=>'2021-04-27'],
            ['draw_master_id'=>8,'number_combination_id'=>200,'game_date'=>'2021-04-27'],

            ['draw_master_id'=>1,'number_combination_id'=>115,'game_date'=>'2021-04-26'],
            ['draw_master_id'=>2,'number_combination_id'=>133,'game_date'=>'2021-04-26'],
            ['draw_master_id'=>3,'number_combination_id'=>123,'game_date'=>'2021-04-26'],
            ['draw_master_id'=>4,'number_combination_id'=>117,'game_date'=>'2021-04-26'],
            ['draw_master_id'=>5,'number_combination_id'=>64,'game_date'=>'2021-04-26'],
            ['draw_master_id'=>6,'number_combination_id'=>57,'game_date'=>'2021-04-26'],
            ['draw_master_id'=>7,'number_combination_id'=>83,'game_date'=>'2021-04-26'],
            ['draw_master_id'=>8,'number_combination_id'=>154,'game_date'=>'2021-04-26'],

            ['draw_master_id'=>1,'number_combination_id'=>218,'game_date'=>'2021-04-25'],
            ['draw_master_id'=>2,'number_combination_id'=>10,'game_date'=>'2021-04-25'],
            ['draw_master_id'=>3,'number_combination_id'=>106,'game_date'=>'2021-04-25'],
            ['draw_master_id'=>4,'number_combination_id'=>108,'game_date'=>'2021-04-25'],
            ['draw_master_id'=>5,'number_combination_id'=>34,'game_date'=>'2021-04-25'],
            ['draw_master_id'=>6,'number_combination_id'=>120,'game_date'=>'2021-04-25'],
            ['draw_master_id'=>7,'number_combination_id'=>182,'game_date'=>'2021-04-25'],
            ['draw_master_id'=>8,'number_combination_id'=>22,'game_date'=>'2021-04-25'],

            ['draw_master_id'=>1,'number_combination_id'=>196,'game_date'=>'2021-04-24'],
            ['draw_master_id'=>2,'number_combination_id'=>87,'game_date'=>'2021-04-24'],
            ['draw_master_id'=>3,'number_combination_id'=>166,'game_date'=>'2021-04-24'],
            ['draw_master_id'=>4,'number_combination_id'=>148,'game_date'=>'2021-04-24'],
            ['draw_master_id'=>5,'number_combination_id'=>84,'game_date'=>'2021-04-24'],
            ['draw_master_id'=>6,'number_combination_id'=>202,'game_date'=>'2021-04-24'],
            ['draw_master_id'=>7,'number_combination_id'=>71,'game_date'=>'2021-04-24'],
            ['draw_master_id'=>8,'number_combination_id'=>186,'game_date'=>'2021-04-24'],

            ['draw_master_id'=>1,'number_combination_id'=>25,'game_date'=>'2021-04-23'],
            ['draw_master_id'=>2,'number_combination_id'=>76,'game_date'=>'2021-04-23'],
            ['draw_master_id'=>3,'number_combination_id'=>96,'game_date'=>'2021-04-23'],
            ['draw_master_id'=>4,'number_combination_id'=>213,'game_date'=>'2021-04-23'],
            ['draw_master_id'=>5,'number_combination_id'=>141,'game_date'=>'2021-04-23'],
            ['draw_master_id'=>6,'number_combination_id'=>60,'game_date'=>'2021-04-23'],
            ['draw_master_id'=>7,'number_combination_id'=>146,'game_date'=>'2021-04-23'],
            ['draw_master_id'=>8,'number_combination_id'=>9,'game_date'=>'2021-04-23'],

            ['draw_master_id'=>1,'number_combination_id'=>124,'game_date'=>'2021-04-22'],
            ['draw_master_id'=>2,'number_combination_id'=>53,'game_date'=>'2021-04-22'],
            ['draw_master_id'=>3,'number_combination_id'=>179,'game_date'=>'2021-04-22'],
            ['draw_master_id'=>4,'number_combination_id'=>7,'game_date'=>'2021-04-22'],
            ['draw_master_id'=>5,'number_combination_id'=>152,'game_date'=>'2021-04-22'],
            ['draw_master_id'=>6,'number_combination_id'=>36,'game_date'=>'2021-04-22'],
            ['draw_master_id'=>7,'number_combination_id'=>25,'game_date'=>'2021-04-22'],
            ['draw_master_id'=>8,'number_combination_id'=>82,'game_date'=>'2021-04-22'],

            ['draw_master_id'=>1,'number_combination_id'=>18,'game_date'=>'2021-04-21'],
            ['draw_master_id'=>2,'number_combination_id'=>105,'game_date'=>'2021-04-21'],
            ['draw_master_id'=>3,'number_combination_id'=>82,'game_date'=>'2021-04-21'],
            ['draw_master_id'=>4,'number_combination_id'=>38,'game_date'=>'2021-04-21'],
            ['draw_master_id'=>5,'number_combination_id'=>69,'game_date'=>'2021-04-21'],
            ['draw_master_id'=>6,'number_combination_id'=>216,'game_date'=>'2021-04-21'],
            ['draw_master_id'=>7,'number_combination_id'=>218,'game_date'=>'2021-04-21'],
            ['draw_master_id'=>8,'number_combination_id'=>185,'game_date'=>'2021-04-21'],

            ['draw_master_id'=>1,'number_combination_id'=>153,'game_date'=>'2021-04-20'],
            ['draw_master_id'=>2,'number_combination_id'=>89,'game_date'=>'2021-04-20'],
            ['draw_master_id'=>3,'number_combination_id'=>163,'game_date'=>'2021-04-20'],
            ['draw_master_id'=>4,'number_combination_id'=>171,'game_date'=>'2021-04-20'],
            ['draw_master_id'=>5,'number_combination_id'=>69,'game_date'=>'2021-04-20'],
            ['draw_master_id'=>6,'number_combination_id'=>184,'game_date'=>'2021-04-20'],
            ['draw_master_id'=>7,'number_combination_id'=>44,'game_date'=>'2021-04-20'],
            ['draw_master_id'=>8,'number_combination_id'=>146,'game_date'=>'2021-04-20'],

            ['draw_master_id'=>1,'number_combination_id'=>159,'game_date'=>'2021-04-19'],
            ['draw_master_id'=>2,'number_combination_id'=>143,'game_date'=>'2021-04-19'],
            ['draw_master_id'=>3,'number_combination_id'=>111,'game_date'=>'2021-04-19'],
            ['draw_master_id'=>4,'number_combination_id'=>62,'game_date'=>'2021-04-19'],
            ['draw_master_id'=>5,'number_combination_id'=>2,'game_date'=>'2021-04-19'],
            ['draw_master_id'=>6,'number_combination_id'=>32,'game_date'=>'2021-04-19'],
            ['draw_master_id'=>7,'number_combination_id'=>120,'game_date'=>'2021-04-19'],
            ['draw_master_id'=>8,'number_combination_id'=>123,'game_date'=>'2021-04-19'],

            ['draw_master_id'=>1,'number_combination_id'=>13,'game_date'=>'2021-04-18'],
            ['draw_master_id'=>2,'number_combination_id'=>33,'game_date'=>'2021-04-18'],
            ['draw_master_id'=>3,'number_combination_id'=>202,'game_date'=>'2021-04-18'],
            ['draw_master_id'=>4,'number_combination_id'=>197,'game_date'=>'2021-04-18'],
            ['draw_master_id'=>5,'number_combination_id'=>176,'game_date'=>'2021-04-18'],
            ['draw_master_id'=>6,'number_combination_id'=>83,'game_date'=>'2021-04-18'],
            ['draw_master_id'=>7,'number_combination_id'=>50,'game_date'=>'2021-04-18'],
            ['draw_master_id'=>8,'number_combination_id'=>189,'game_date'=>'2021-04-18'],

            ['draw_master_id'=>1,'number_combination_id'=>112,'game_date'=>'2021-04-17'],
            ['draw_master_id'=>2,'number_combination_id'=>44,'game_date'=>'2021-04-17'],
            ['draw_master_id'=>3,'number_combination_id'=>204,'game_date'=>'2021-04-17'],
            ['draw_master_id'=>4,'number_combination_id'=>148,'game_date'=>'2021-04-17'],
            ['draw_master_id'=>5,'number_combination_id'=>181,'game_date'=>'2021-04-17'],
            ['draw_master_id'=>6,'number_combination_id'=>91,'game_date'=>'2021-04-17'],
            ['draw_master_id'=>7,'number_combination_id'=>168,'game_date'=>'2021-04-17'],
            ['draw_master_id'=>8,'number_combination_id'=>208,'game_date'=>'2021-04-17'],

            ['draw_master_id'=>1,'number_combination_id'=>57,'game_date'=>'2021-04-16'],
            ['draw_master_id'=>2,'number_combination_id'=>67,'game_date'=>'2021-04-16'],
            ['draw_master_id'=>3,'number_combination_id'=>8,'game_date'=>'2021-04-16'],
            ['draw_master_id'=>4,'number_combination_id'=>132,'game_date'=>'2021-04-16'],
            ['draw_master_id'=>5,'number_combination_id'=>162,'game_date'=>'2021-04-16'],
            ['draw_master_id'=>6,'number_combination_id'=>81,'game_date'=>'2021-04-16'],
            ['draw_master_id'=>7,'number_combination_id'=>65,'game_date'=>'2021-04-16'],
            ['draw_master_id'=>8,'number_combination_id'=>218,'game_date'=>'2021-04-16'],

            ['draw_master_id'=>1,'number_combination_id'=>144,'game_date'=>'2021-04-15'],
            ['draw_master_id'=>2,'number_combination_id'=>171,'game_date'=>'2021-04-15'],
            ['draw_master_id'=>3,'number_combination_id'=>208,'game_date'=>'2021-04-15'],
            ['draw_master_id'=>4,'number_combination_id'=>166,'game_date'=>'2021-04-15'],
            ['draw_master_id'=>5,'number_combination_id'=>36,'game_date'=>'2021-04-15'],
            ['draw_master_id'=>6,'number_combination_id'=>210,'game_date'=>'2021-04-15'],
            ['draw_master_id'=>7,'number_combination_id'=>11,'game_date'=>'2021-04-15'],
            ['draw_master_id'=>8,'number_combination_id'=>22,'game_date'=>'2021-04-15'],

            ['draw_master_id'=>1,'number_combination_id'=>201,'game_date'=>'2021-04-14'],
            ['draw_master_id'=>2,'number_combination_id'=>43,'game_date'=>'2021-04-14'],
            ['draw_master_id'=>3,'number_combination_id'=>219,'game_date'=>'2021-04-14'],
            ['draw_master_id'=>4,'number_combination_id'=>167,'game_date'=>'2021-04-14'],
            ['draw_master_id'=>5,'number_combination_id'=>78,'game_date'=>'2021-04-14'],
            ['draw_master_id'=>6,'number_combination_id'=>155,'game_date'=>'2021-04-14'],
            ['draw_master_id'=>7,'number_combination_id'=>75,'game_date'=>'2021-04-14'],
            ['draw_master_id'=>8,'number_combination_id'=>45,'game_date'=>'2021-04-14'],

            ['draw_master_id'=>1,'number_combination_id'=>118,'game_date'=>'2021-04-13'],
            ['draw_master_id'=>2,'number_combination_id'=>48,'game_date'=>'2021-04-13'],
            ['draw_master_id'=>3,'number_combination_id'=>168,'game_date'=>'2021-04-13'],
            ['draw_master_id'=>4,'number_combination_id'=>14,'game_date'=>'2021-04-13'],
            ['draw_master_id'=>5,'number_combination_id'=>21,'game_date'=>'2021-04-13'],
            ['draw_master_id'=>6,'number_combination_id'=>122,'game_date'=>'2021-04-13'],
            ['draw_master_id'=>7,'number_combination_id'=>102,'game_date'=>'2021-04-13'],
            ['draw_master_id'=>8,'number_combination_id'=>89,'game_date'=>'2021-04-13'],

            ['draw_master_id'=>1,'number_combination_id'=>84,'game_date'=>'2021-04-12'],
            ['draw_master_id'=>2,'number_combination_id'=>110,'game_date'=>'2021-04-12'],
            ['draw_master_id'=>3,'number_combination_id'=>104,'game_date'=>'2021-04-12'],
            ['draw_master_id'=>4,'number_combination_id'=>169,'game_date'=>'2021-04-12'],
            ['draw_master_id'=>5,'number_combination_id'=>183,'game_date'=>'2021-04-12'],
            ['draw_master_id'=>6,'number_combination_id'=>164,'game_date'=>'2021-04-12'],
            ['draw_master_id'=>7,'number_combination_id'=>62,'game_date'=>'2021-04-12'],
            ['draw_master_id'=>8,'number_combination_id'=>128,'game_date'=>'2021-04-12'],

            ['draw_master_id'=>1,'number_combination_id'=>181,'game_date'=>'2021-04-11'],
            ['draw_master_id'=>2,'number_combination_id'=>111,'game_date'=>'2021-04-11'],
            ['draw_master_id'=>3,'number_combination_id'=>214,'game_date'=>'2021-04-11'],
            ['draw_master_id'=>4,'number_combination_id'=>14,'game_date'=>'2021-04-11'],
            ['draw_master_id'=>5,'number_combination_id'=>150,'game_date'=>'2021-04-11'],
            ['draw_master_id'=>6,'number_combination_id'=>208,'game_date'=>'2021-04-11'],
            ['draw_master_id'=>7,'number_combination_id'=>91,'game_date'=>'2021-04-11'],
            ['draw_master_id'=>8,'number_combination_id'=>86,'game_date'=>'2021-04-11'],

            ['draw_master_id'=>1,'number_combination_id'=>93,'game_date'=>'2021-04-10'],
            ['draw_master_id'=>2,'number_combination_id'=>121,'game_date'=>'2021-04-10'],
            ['draw_master_id'=>3,'number_combination_id'=>107,'game_date'=>'2021-04-10'],
            ['draw_master_id'=>4,'number_combination_id'=>94,'game_date'=>'2021-04-10'],
            ['draw_master_id'=>5,'number_combination_id'=>156,'game_date'=>'2021-04-10'],
            ['draw_master_id'=>6,'number_combination_id'=>6,'game_date'=>'2021-04-10'],
            ['draw_master_id'=>7,'number_combination_id'=>70,'game_date'=>'2021-04-10'],
            ['draw_master_id'=>8,'number_combination_id'=>24,'game_date'=>'2021-04-10'],

            ['draw_master_id'=>1,'number_combination_id'=>196,'game_date'=>'2021-04-09'],
            ['draw_master_id'=>2,'number_combination_id'=>100,'game_date'=>'2021-04-09'],
            ['draw_master_id'=>3,'number_combination_id'=>80,'game_date'=>'2021-04-09'],
            ['draw_master_id'=>4,'number_combination_id'=>44,'game_date'=>'2021-04-09'],
            ['draw_master_id'=>5,'number_combination_id'=>139,'game_date'=>'2021-04-09'],
            ['draw_master_id'=>6,'number_combination_id'=>220,'game_date'=>'2021-04-09'],
            ['draw_master_id'=>7,'number_combination_id'=>153,'game_date'=>'2021-04-09'],
            ['draw_master_id'=>8,'number_combination_id'=>189,'game_date'=>'2021-04-09'],

            ['draw_master_id'=>1,'number_combination_id'=>105,'game_date'=>'2021-04-08'],
            ['draw_master_id'=>2,'number_combination_id'=>107,'game_date'=>'2021-04-08'],
            ['draw_master_id'=>3,'number_combination_id'=>121,'game_date'=>'2021-04-08'],
            ['draw_master_id'=>4,'number_combination_id'=>53,'game_date'=>'2021-04-08'],
            ['draw_master_id'=>5,'number_combination_id'=>202,'game_date'=>'2021-04-08'],
            ['draw_master_id'=>6,'number_combination_id'=>215,'game_date'=>'2021-04-08'],
            ['draw_master_id'=>7,'number_combination_id'=>203,'game_date'=>'2021-04-08'],
            ['draw_master_id'=>8,'number_combination_id'=>37,'game_date'=>'2021-04-08'],

            ['draw_master_id'=>1,'number_combination_id'=>209,'game_date'=>'2021-04-07'],
            ['draw_master_id'=>2,'number_combination_id'=>121,'game_date'=>'2021-04-07'],
            ['draw_master_id'=>3,'number_combination_id'=>117,'game_date'=>'2021-04-07'],
            ['draw_master_id'=>4,'number_combination_id'=>139,'game_date'=>'2021-04-07'],
            ['draw_master_id'=>5,'number_combination_id'=>183,'game_date'=>'2021-04-07'],
            ['draw_master_id'=>6,'number_combination_id'=>35,'game_date'=>'2021-04-07'],
            ['draw_master_id'=>7,'number_combination_id'=>124,'game_date'=>'2021-04-07'],
            ['draw_master_id'=>8,'number_combination_id'=>202,'game_date'=>'2021-04-07'],

            ['draw_master_id'=>1,'number_combination_id'=>181,'game_date'=>'2021-04-06'],
            ['draw_master_id'=>2,'number_combination_id'=>187,'game_date'=>'2021-04-06'],
            ['draw_master_id'=>3,'number_combination_id'=>197,'game_date'=>'2021-04-06'],
            ['draw_master_id'=>4,'number_combination_id'=>167,'game_date'=>'2021-04-06'],
            ['draw_master_id'=>5,'number_combination_id'=>212,'game_date'=>'2021-04-06'],
            ['draw_master_id'=>6,'number_combination_id'=>49,'game_date'=>'2021-04-06'],
            ['draw_master_id'=>7,'number_combination_id'=>12,'game_date'=>'2021-04-06'],
            ['draw_master_id'=>8,'number_combination_id'=>37,'game_date'=>'2021-04-06'],

            ['draw_master_id'=>1,'number_combination_id'=>103,'game_date'=>'2021-04-05'],
            ['draw_master_id'=>2,'number_combination_id'=>87,'game_date'=>'2021-04-05'],
            ['draw_master_id'=>3,'number_combination_id'=>187,'game_date'=>'2021-04-05'],
            ['draw_master_id'=>4,'number_combination_id'=>50,'game_date'=>'2021-04-05'],
            ['draw_master_id'=>5,'number_combination_id'=>60,'game_date'=>'2021-04-05'],
            ['draw_master_id'=>6,'number_combination_id'=>144,'game_date'=>'2021-04-05'],
            ['draw_master_id'=>7,'number_combination_id'=>41,'game_date'=>'2021-04-05'],
            ['draw_master_id'=>8,'number_combination_id'=>75,'game_date'=>'2021-04-05'],

            ['draw_master_id'=>1,'number_combination_id'=>72,'game_date'=>'2021-04-04'],
            ['draw_master_id'=>2,'number_combination_id'=>24,'game_date'=>'2021-04-04'],
            ['draw_master_id'=>3,'number_combination_id'=>61,'game_date'=>'2021-04-04'],
            ['draw_master_id'=>4,'number_combination_id'=>73,'game_date'=>'2021-04-04'],
            ['draw_master_id'=>5,'number_combination_id'=>156,'game_date'=>'2021-04-04'],
            ['draw_master_id'=>6,'number_combination_id'=>188,'game_date'=>'2021-04-04'],
            ['draw_master_id'=>7,'number_combination_id'=>217,'game_date'=>'2021-04-04'],
            ['draw_master_id'=>8,'number_combination_id'=>173,'game_date'=>'2021-04-04'],

            ['draw_master_id'=>1,'number_combination_id'=>70,'game_date'=>'2021-04-03'],
            ['draw_master_id'=>2,'number_combination_id'=>88,'game_date'=>'2021-04-03'],
            ['draw_master_id'=>3,'number_combination_id'=>45,'game_date'=>'2021-04-03'],
            ['draw_master_id'=>4,'number_combination_id'=>51,'game_date'=>'2021-04-03'],
            ['draw_master_id'=>5,'number_combination_id'=>189,'game_date'=>'2021-04-03'],
            ['draw_master_id'=>6,'number_combination_id'=>9,'game_date'=>'2021-04-03'],
            ['draw_master_id'=>7,'number_combination_id'=>11,'game_date'=>'2021-04-03'],
            ['draw_master_id'=>8,'number_combination_id'=>168,'game_date'=>'2021-04-03'],

            ['draw_master_id'=>1,'number_combination_id'=>35,'game_date'=>'2021-04-02'],
            ['draw_master_id'=>2,'number_combination_id'=>117,'game_date'=>'2021-04-02'],
            ['draw_master_id'=>3,'number_combination_id'=>171,'game_date'=>'2021-04-02'],
            ['draw_master_id'=>4,'number_combination_id'=>187,'game_date'=>'2021-04-02'],
            ['draw_master_id'=>5,'number_combination_id'=>70,'game_date'=>'2021-04-02'],
            ['draw_master_id'=>6,'number_combination_id'=>70,'game_date'=>'2021-04-02'],
            ['draw_master_id'=>7,'number_combination_id'=>99,'game_date'=>'2021-04-02'],
            ['draw_master_id'=>8,'number_combination_id'=>58,'game_date'=>'2021-04-02'],

            ['draw_master_id'=>1,'number_combination_id'=>44,'game_date'=>'2021-04-01'],
            ['draw_master_id'=>2,'number_combination_id'=>11,'game_date'=>'2021-04-01'],
            ['draw_master_id'=>3,'number_combination_id'=>15,'game_date'=>'2021-04-01'],
            ['draw_master_id'=>4,'number_combination_id'=>52,'game_date'=>'2021-04-01'],
            ['draw_master_id'=>5,'number_combination_id'=>128,'game_date'=>'2021-04-01'],
            ['draw_master_id'=>6,'number_combination_id'=>102,'game_date'=>'2021-04-01'],
            ['draw_master_id'=>7,'number_combination_id'=>184,'game_date'=>'2021-04-01'],
            ['draw_master_id'=>8,'number_combination_id'=>57,'game_date'=>'2021-04-01'],



        ]);

    }
}

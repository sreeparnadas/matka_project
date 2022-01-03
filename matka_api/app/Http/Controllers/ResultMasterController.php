<?php

namespace App\Http\Controllers;

use App\Models\DrawMaster;
use App\Models\Game;
use App\Models\ManualResult;
use App\Models\NextGameDraw;
use App\Models\NumberCombination;
use App\Models\ResultMaster;
use Illuminate\Http\Request;
use Carbon\Carbon;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Query\Builder;


class ResultMasterController extends Controller
{
    public function get_results()
    {
        $result_dates= ResultMaster::distinct()->orderBy('game_date','desc')->pluck('game_date')->take(40);

        $result_array = array();
        foreach($result_dates as $result_date){
            $temp_array['date'] = $result_date;



            $data = DrawMaster::select('result_masters.game_date','draw_masters.end_time','number_combinations.triple_number', 'result_masters.game_id',
                'number_combinations.visible_triple_number','single_numbers.single_number')
                ->leftJoin('result_masters', function ($join) use ($result_date) {
                    $join->on('draw_masters.id','=','result_masters.draw_master_id')
                        ->where('result_masters.game_date','=', $result_date);
                })
                ->leftJoin('number_combinations','result_masters.number_combination_id','number_combinations.id')
                ->leftJoin('single_numbers','number_combinations.single_number_id','single_numbers.id')
                ->leftJoin('games','result_masters.game_id','games.id')
                // ->where('games.id','=',$gameId)
                ->get();

            /*Do Not delete*/
            /* This is another way to use sub query */
//            $result_query =get_sql_with_bindings(ResultMaster::where('game_date',$result_date));
//            $data1 = DrawMaster::leftJoin(DB::raw("($result_query) as result_masters"),'draw_masters.id','=','result_masters.draw_master_id')
//                ->leftJoin('number_combinations','result_masters.number_combination_id','number_combinations.id')
//                ->leftJoin('single_numbers','number_combinations.single_number_id','single_numbers.id')
//                ->select('result_masters.game_date','draw_masters.end_time','number_combinations.triple_number','number_combinations.visible_triple_number','single_numbers.single_number')
//                ->get();
            $temp_array['result'] = $data;
            $result_array[] = $temp_array;

        }

        return response()->json(['success'=>1,'data'=>$result_array], 200,[],JSON_NUMERIC_CHECK);
    }





    public function get_result_sheet_by_current_date_and_game_id()
    {
        $result_dates= Carbon::today();
        $gameId= ResultMaster::distinct()->orderBy('game_id')->pluck('game_id')->take(40);
        // echo "test";
        $result_array = array();
        foreach($result_dates as $result_date){
            $temp_array['date'] = $result_date;



            $data = DrawMaster::select('result_masters.game_date','draw_masters.end_time','number_combinations.triple_number', 'result_masters.game_id',
                'number_combinations.visible_triple_number','single_numbers.single_number')
                ->leftJoin('result_masters', function ($join) use ($result_date) {
                    $join->on('draw_masters.id','=','result_masters.draw_master_id')
                        ->where('result_masters.game_date','=', $result_date);
                })
                ->leftJoin('number_combinations','result_masters.number_combination_id','number_combinations.id')
                ->leftJoin('single_numbers','number_combinations.single_number_id','single_numbers.id')
                ->leftJoin('games','result_masters.game_id','games.id')
                ->where('games.id','=',$gameId)
                ->get();

            /*Do Not delete*/
            /* This is another way to use sub query */
//            $result_query =get_sql_with_bindings(ResultMaster::where('game_date',$result_date));
//            $data1 = DrawMaster::leftJoin(DB::raw("($result_query) as result_masters"),'draw_masters.id','=','result_masters.draw_master_id')
//                ->leftJoin('number_combinations','result_masters.number_combination_id','number_combinations.id')
//                ->leftJoin('single_numbers','number_combinations.single_number_id','single_numbers.id')
//                ->select('result_masters.game_date','draw_masters.end_time','number_combinations.triple_number','number_combinations.visible_triple_number','single_numbers.single_number')
//                ->get();
            $temp_array['result'] = $data;
            $result_array[] = $temp_array;

        }

        return response()->json(['success'=>1,'data'=>$result_array], 200,[],JSON_NUMERIC_CHECK);
    }







    public function get_result($id)
    {
        $result_dates= ResultMaster::distinct()->orderBy('game_date','desc')->pluck('game_date')->take(40);

        $result_array = array();
        foreach($result_dates as $result_date){
            $temp_array['date'] = $result_date;



            $data = DrawMaster::select('result_masters.game_date','draw_masters.end_time','number_combinations.triple_number', 'result_masters.game_id',
                'number_combinations.visible_triple_number','single_numbers.single_number')
                ->leftJoin('result_masters', function ($join) use ($id, $result_date) {
                    $join->on('draw_masters.id','=','result_masters.draw_master_id')
                        ->where('result_masters.game_date','=', $result_date)
                        ->where('result_masters.game_id','=', $id);
                })
                ->leftJoin('number_combinations','result_masters.number_combination_id','number_combinations.id')
                ->leftJoin('single_numbers','number_combinations.single_number_id','single_numbers.id')
//                ->where('result_masters.game_id','=', $id)
                ->get();

            /*Do Not delete*/
            /* This is another way to use sub query */
//            $result_query =get_sql_with_bindings(ResultMaster::where('game_date',$result_date));
//            $data1 = DrawMaster::leftJoin(DB::raw("($result_query) as result_masters"),'draw_masters.id','=','result_masters.draw_master_id')
//                ->leftJoin('number_combinations','result_masters.number_combination_id','number_combinations.id')
//                ->leftJoin('single_numbers','number_combinations.single_number_id','single_numbers.id')
//                ->select('result_masters.game_date','draw_masters.end_time','number_combinations.triple_number','number_combinations.visible_triple_number','single_numbers.single_number')
//                ->get();
            $temp_array['result'] = $data;
            $result_array[] = $temp_array;

        }

        return response()->json(['success'=>1,'data'=>$result_array], 200,[],JSON_NUMERIC_CHECK);
    }

    public function get_results_by_current_date($id){

        $result_date= Carbon::today();

        $result_array = array();
        // $result_array['date'] = Carbon::today();

            $data = DrawMaster::select('result_masters.game_date','draw_masters.end_time','number_combinations.triple_number', 'result_masters.game_id',
                'number_combinations.visible_triple_number','single_numbers.single_number')
                ->leftJoin('result_masters', function ($join) use ($id, $result_date) {
                    $join->on('draw_masters.id','=','result_masters.draw_master_id')
                        ->where('result_masters.game_date','=', $result_date)
                        ->where('result_masters.game_id','=', $id);
                })
                ->leftJoin('number_combinations','result_masters.number_combination_id','number_combinations.id')
                ->leftJoin('single_numbers','number_combinations.single_number_id','single_numbers.id')
               ->where('draw_masters.game_id','=', $id)
                ->get();


            $temp_array[] = $data;
            $result_array['result'] = $temp_array;
            // $result_array['result'] = $data;



        return response()->json(['success'=>1,'data'=>$result_array], 200,[],JSON_NUMERIC_CHECK);




        // $result_array = array();

        // $result_array['date'] = Carbon::today();

        // $result_query =get_sql_with_bindings(ResultMaster::where('game_date', Carbon::today()));
        // $data = DrawMaster::leftJoin(DB::raw("($result_query) as result_masters"),'draw_masters.id','=','result_masters.draw_master_id')
        //     ->leftJoin('number_combinations','result_masters.number_combination_id','number_combinations.id')
        //     ->leftJoin('single_numbers','number_combinations.single_number_id','single_numbers.id')
        //     ->select('result_masters.game_date','draw_masters.end_time','number_combinations.triple_number','number_combinations.visible_triple_number','single_numbers.single_number')
        //     ->get();
        // $result_array['result'] = $data;


        // return response()->json(['success'=>1,'data'=>$result_array], 200,[],JSON_NUMERIC_CHECK);



    }


    public function save_auto_result($draw_id)
    {
//        $games = Game::select()->get();
//        DB::beginTransaction();
//        try{
//            foreach ($games as $game){

        $game_id = (DrawMaster::whereId($draw_id)->first())->game_id;

                $manualResult = ManualResult::where('game_date',Carbon::today())
                    ->where('draw_master_id',$draw_id)
                    ->where('game_id',$game_id)
                    ->first();
                if(!empty($manualResult)){
                    $number_combination_for_result = $manualResult->number_combination_id;
                    $gameId = $manualResult->game_id;
                }else{
                    $selectRandomResult = NumberCombination::all()->random(1)->first();
                    $number_combination_for_result = $selectRandomResult->id;

//                    $selectRandomGame = Game::all()->random(1)->first();
                    $gameId = $game_id;
                }
                $resultMaster = new ResultMaster();
                $resultMaster->draw_master_id = $draw_id;
                $resultMaster->number_combination_id = $number_combination_for_result;
                $resultMaster->game_id = $gameId;
                $resultMaster->game_date = Carbon::today();
                $resultMaster->save();
//            }
//            DB::commit();
//        }catch (\Exception $e){
//            DB::rollBack();
//            return response()->json(['success'=>0,'exception'=>$e->getMessage(),'error_line'=>$e->getLine(),'file_name' => $e->getFile()], 500);
//        }

//        $manualResult = ManualResult::where('game_date',Carbon::today())
//            ->where('draw_master_id',$draw_id)->first();
//        if(!empty($manualResult)){
//            $number_combination_for_result = $manualResult->number_combination_id;
//            $gameId = $manualResult->game_id;
//        }else{
//            $selectRandomResult = NumberCombination::all()->random(1)->first();
//            $number_combination_for_result = $selectRandomResult->id;
//
//            $selectRandomGame = Game::all()->random(1)->first();
//            $gameId = $selectRandomGame->id;
//        }
//        $resultMaster = new ResultMaster();
//        $resultMaster->draw_master_id = $draw_id;
//        $resultMaster->number_combination_id = $number_combination_for_result;
//        $resultMaster->game_id = $gameId;
//        $resultMaster->game_date = Carbon::today();
//        $resultMaster->save();
        if(isset($resultMaster->id)){
            return response()->json(['success'=>1, 'data' => 'added result'], 200);
        }else{
            return response()->json(['success'=>0, 'data' => 'result not added'], 500);
        }
    }

    public function get_last_result(){

        $result_query =get_sql_with_bindings(ResultMaster::where('game_date', Carbon::today()));
        $data = DrawMaster::leftJoin(DB::raw("($result_query) as result_masters"),'draw_masters.id','=','result_masters.draw_master_id')
            ->leftJoin('number_combinations','result_masters.number_combination_id','number_combinations.id')
            ->leftJoin('single_numbers','number_combinations.single_number_id','single_numbers.id')
            ->select('result_masters.game_date','draw_masters.end_time','number_combinations.triple_number','number_combinations.visible_triple_number','single_numbers.single_number')
            ->orderBy('result_masters.draw_master_id','desc')
            ->whereNotNull('single_numbers.single_number')
            ->first();

        return response()->json(['success'=> 1, 'data' => $data], 200);
    }

    public function get_result_by_date(Request $request){

//        $date= $request['date'];
        // return response()->json(['success'=>1,'data'=>$date], 200,[],JSON_NUMERIC_CHECK);

        $result_array['date'] = $request['date'];

        $result_query =get_sql_with_bindings(ResultMaster::where('game_date', $request['date']));
        $data = DrawMaster::leftJoin(DB::raw("($result_query) as result_masters"),'draw_masters.id','=','result_masters.draw_master_id')
            ->leftJoin('number_combinations','result_masters.number_combination_id','number_combinations.id')
            ->leftJoin('single_numbers','number_combinations.single_number_id','single_numbers.id')
            ->select('result_masters.game_date','draw_masters.end_time','number_combinations.triple_number','number_combinations.visible_triple_number','single_numbers.single_number')
            ->get();
        $result_array['result'] = $data;



        return response()->json(['success'=>1,'data'=>$data], 200,[],JSON_NUMERIC_CHECK);

    }


}

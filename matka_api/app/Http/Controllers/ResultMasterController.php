<?php

namespace App\Http\Controllers;

use App\Models\DrawMaster;
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
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function get_results()
    {
        $result_dates= ResultMaster::distinct()->orderBy('game_date','desc')->pluck('game_date')->take(40);

        $result_array = array();
        foreach($result_dates as $result_date){
            $temp_array['date'] = $result_date;



            $data = DrawMaster::select('result_masters.game_date','draw_masters.end_time','number_combinations.triple_number',
                'number_combinations.visible_triple_number','single_numbers.single_number')
                ->leftJoin('result_masters', function ($join) use ($result_date) {
                    $join->on('draw_masters.id','=','result_masters.draw_master_id')
                        ->where('result_masters.game_date','=', $result_date);
                })
                ->leftJoin('number_combinations','result_masters.number_combination_id','number_combinations.id')
                ->leftJoin('single_numbers','number_combinations.single_number_id','single_numbers.id')
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
    public function get_results_by_current_date(){
        $result_array = array();

        $result_array['date'] = Carbon::today();

        $result_query =get_sql_with_bindings(ResultMaster::where('game_date', Carbon::today()));
        $data = DrawMaster::leftJoin(DB::raw("($result_query) as result_masters"),'draw_masters.id','=','result_masters.draw_master_id')
            ->leftJoin('number_combinations','result_masters.number_combination_id','number_combinations.id')
            ->leftJoin('single_numbers','number_combinations.single_number_id','single_numbers.id')
            ->select('result_masters.game_date','draw_masters.end_time','number_combinations.triple_number','number_combinations.visible_triple_number','single_numbers.single_number')
            ->get();
        $result_array['result'] = $data;


        return response()->json(['success'=>1,'data'=>$result_array], 200,[],JSON_NUMERIC_CHECK);

    }


    public function save_auto_result($draw_id)
    {
        $manualResult = ManualResult::where('game_date',Carbon::today())
            ->where('draw_master_id',$draw_id)->first();
        if(!empty($manualResult)){
            $number_combination_for_result = $manualResult->number_combination_id;
        }else{
            $selectRandomResult = NumberCombination::all()->random(1)->first();
            $number_combination_for_result = $selectRandomResult->id;
        }
        $resultMaster = new ResultMaster();
        $resultMaster->draw_master_id = $draw_id;
        $resultMaster->number_combination_id = $number_combination_for_result;
        $resultMaster->game_date = Carbon::today();
        $resultMaster->save();
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

        return $data;
    }
}

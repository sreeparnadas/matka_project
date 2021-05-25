<?php

namespace App\Http\Controllers;

use App\Models\DrawMaster;
use App\Models\ResultMaster;
use Illuminate\Http\Request;
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

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function save_result_masters(Request $request)
    {

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ResultMaster  $resultMaster
     * @return \Illuminate\Http\Response
     */
    public function show(ResultMaster $resultMaster)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ResultMaster  $resultMaster
     * @return \Illuminate\Http\Response
     */
    public function edit(ResultMaster $resultMaster)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ResultMaster  $resultMaster
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ResultMaster $resultMaster)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ResultMaster  $resultMaster
     * @return \Illuminate\Http\Response
     */
    public function destroy(ResultMaster $resultMaster)
    {
        //
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\ResultMaster;
use Illuminate\Http\Request;

class ResultMasterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function get_results()
    {
        $result_dates= ResultMaster::distinct()->pluck('game_date');

        $result_array = array();
        foreach($result_dates as $result_date){
            $data = ResultMaster::select('result_masters.game_date','draw_masters.end_time','number_combinations.triple_number',
                'number_combinations.visible_triple_number','single_numbers.single_number')
                ->join('draw_masters','result_masters.draw_master_id','draw_masters.id')
                ->join('number_combinations','result_masters.number_combination_id','number_combinations.id')
                ->join('single_numbers','number_combinations.single_number_id','single_numbers.id')
                ->where('result_masters.game_date',$result_date)
                ->get();
            $result_array[] = $data;
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

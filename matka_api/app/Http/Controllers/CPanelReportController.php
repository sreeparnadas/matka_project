<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PlayMaster;
use App\Models\PlayDetails;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class CPanelReportController extends Controller
{
    public function barcode_wise_report(){

        $data = PlayMaster::select('play_masters.id as play_master_id', DB::raw('substr(play_masters.barcode_number, 1, 8) as barcode_number'),'draw_masters.visible_time as draw_time',
            'users.email as terminal_pin','play_masters.created_at as ticket_taken_time',DB::raw("SUM(play_details.quantity) as total_quantity"),
            DB::raw("round(SUM(play_details.quantity*play_details.mrp),0) as amount")
            )
            ->join('draw_masters','play_masters.draw_master_id','draw_masters.id')
            ->join('users','users.id','play_masters.user_id')
            ->join('play_details','play_details.play_master_id','play_masters.id')
            ->where('play_masters.is_cancelled',0)
            ->groupBy('play_masters.id','play_masters.barcode_number','draw_masters.visible_time','users.email','play_masters.created_at')
            ->orderBy('play_masters.created_at','desc')
            ->get();
        return response()->json(['success'=> 1, 'data' => $data], 200);
    }

    public function get_barcode_report_particulars($play_master_id){
        $data = array();
        $playMaster = PlayMaster::findOrFail($play_master_id);
        $data['barcode'] = Str::substr($playMaster->barcode_number,0,8);
        $singleGameData = PlayDetails::select(DB::raw('max(single_numbers.single_number) as single_number')
            ,DB::raw('max(play_details.quantity) as quantity'))
            ->join('number_combinations','play_details.number_combination_id','number_combinations.id')
            ->join('single_numbers','number_combinations.single_number_id','single_numbers.id')
            ->where('play_details.play_master_id',$play_master_id)
            ->where('play_details.game_type_id',1)
            ->groupBy('single_numbers.id')
            ->orderBy('single_numbers.single_order')
            ->get();

        $data['single'] = $singleGameData;

        $tripleGameData = PlayDetails::select('number_combinations.visible_triple_number','single_numbers.single_number'
            ,'play_details.quantity')
            ->join('number_combinations','play_details.number_combination_id','number_combinations.id')
            ->join('single_numbers','number_combinations.single_number_id','single_numbers.id')
            ->where('play_details.play_master_id',$play_master_id)
            ->where('play_details.game_type_id',2)
            ->orderBy('single_numbers.single_order')
            ->get();
        $data['triple'] = $tripleGameData;
        return response()->json(['success'=> 1, 'data' => $data], 200);

    }
}

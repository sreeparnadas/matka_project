<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\PlayMaster;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class TerminalReportController extends Controller
{
    public function barcode_wise_report_by_terminal(Request $request){

        $requestedData = (object)$request->json()->all();
        $terminalId = $requestedData->terminalId;
        $data = $requestedData;
        $data = PlayMaster::select('play_masters.id as play_master_id', DB::raw('substr(play_masters.barcode_number, 1, 8) as barcode_number'),'draw_masters.visible_time as draw_time',
            'users.email as terminal_pin','play_masters.created_at as ticket_taken_time',DB::raw("SUM(play_details.quantity) as total_quantity"),
            DB::raw("round(SUM(play_details.quantity*play_details.mrp),0) as amount")
            )
            ->join('draw_masters','play_masters.draw_master_id','draw_masters.id')
            ->join('users','users.id','play_masters.user_id')
            ->join('play_details','play_details.play_master_id','play_masters.id')
            ->where('play_masters.is_cancelled',0)
            ->where('play_masters.user_id',$terminalId)
            ->groupBy('play_masters.id','play_masters.barcode_number','draw_masters.visible_time','users.email','play_masters.created_at')
            ->orderBy('play_masters.created_at','desc')
            ->get();

            $cPanelRepotControllerObj = new CPanelReportController();
        foreach($data as $x){
            $detail = (object)$x;
            $detail->prize_value = $cPanelRepotControllerObj->get_prize_value_by_barcode($detail->play_master_id);
        }
        return response()->json(['success'=> 1, 'data' => $data], 200);
    }
}

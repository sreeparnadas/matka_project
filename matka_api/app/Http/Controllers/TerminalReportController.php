<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\PlayDetails;
use App\Models\PlayMaster;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class TerminalReportController extends Controller
{
    public function barcode_wise_report_by_terminal(Request $request)
    {

        $requestedData = (object)$request->json()->all();
        $terminalId = $requestedData->terminalId;
        $start_date = $requestedData->startDate;
        $end_date = $requestedData->endDate;
        $data = $requestedData;

        $data = PlayMaster::select('play_masters.id as play_master_id', DB::raw('substr(play_masters.barcode_number, 1, 8) as barcode_number')
            ,'draw_masters.visible_time as draw_time','play_masters.is_claimed',
            'users.email as terminal_pin','play_masters.created_at as ticket_taken_time','play_masters.is_cancelled','play_masters.is_cancelable'
        )
            ->join('draw_masters','play_masters.draw_master_id','draw_masters.id')
            ->join('users','users.id','play_masters.user_id')
            ->join('play_details','play_details.play_master_id','play_masters.id')
            ->whereRaw('date(play_masters.created_at) >= ?', [$start_date])
            ->whereRaw('date(play_masters.created_at) <= ?', [$end_date])
//            ->where('play_masters.is_cancelled',0)
            ->where('play_masters.user_id',$terminalId)
            ->groupBy('play_masters.id','play_masters.barcode_number','play_masters.is_claimed','draw_masters.visible_time','users.email','play_masters.created_at','play_masters.is_cancelled','play_masters.is_cancelable')
            ->orderBy('play_masters.created_at','desc')
            ->get();

        $cPanelRepotControllerObj = new CPanelReportController();

        foreach($data as $x){
            $detail = (object)$x;
            $detail->total_quantity = $cPanelRepotControllerObj->get_total_quantity_by_barcode($detail->play_master_id);
            $detail->prize_value = $cPanelRepotControllerObj->get_prize_value_by_barcode($detail->play_master_id);
            $detail->amount = $cPanelRepotControllerObj->get_total_amount_by_barcode($detail->play_master_id);
        }

        return response()->json(['success' => 1, 'data' => $data], 200);
    }

    public function terminal_sale_reports(Request $request){

        $requestedData = (object)$request->json()->all();
        $terminalId = $requestedData->terminalId;
        $start_date = $requestedData->startDate;
        $end_date = $requestedData->endDate;

        $cPanelRepotControllerObj = new CPanelReportController();


        $data = DB::select("select round(table1.commission,2) as commission, table1.total, table1.user_name, users.user_name as stokiest_name, table1.terminal_pin, table1.user_id, table1.stockist_id,
        table1.`date` from (select sum(commission) as commission, sum(total) as total, user_name, terminal_pin, user_id, stockist_id, date(created_at) as date from (select max(play_masters.id) as play_master_id,users.user_name,users.email as terminal_pin,
        round(sum(play_details.quantity * play_details.mrp)) as total,
        sum(play_details.quantity * play_details.mrp)* (max(play_details.commission)/100) as commission,
        play_masters.user_id, stockist_to_terminals.stockist_id,play_masters.created_at
        FROM play_masters
        inner join play_details on play_details.play_master_id = play_masters.id
        inner join game_types ON game_types.id = play_details.game_type_id
        inner join users ON users.id = play_masters.user_id
        left join stockist_to_terminals on play_masters.user_id = stockist_to_terminals.terminal_id
        where play_masters.is_cancelled=0 and date(play_masters.created_at) >= ? and date(play_masters.created_at) <= ? and user_id = ?
        group by stockist_to_terminals.stockist_id, play_masters.user_id,users.user_name,play_details.game_type_id,users.email,play_masters.created_at) as table1
        group by terminal_pin, date(created_at), user_name, terminal_pin, user_id, stockist_id) as table1
        left join users on table1.stockist_id = users.id",[$start_date,$end_date,$terminalId]);

        foreach($data as $x) {
            $newPrize = 0;
            $tempntp = 0;
            $newData = PlayMaster::whereRaw('date(created_at) >= ?', [$x->date])->where('user_id',$terminalId)->get();
            foreach ($newData as $y){
//                $tempData = 0;
                $newPrize += $cPanelRepotControllerObj->get_prize_value_by_barcode($y->id);
                $tempData = (PlayDetails::select(DB::raw("if(game_type_id = 1,(mrp*22)*quantity-(commission/100),mrp*quantity-(commission/100)) as total"))
                    ->where('play_master_id',$y->id)->distinct()->get())[0];
                $tempntp += $tempData->total;
            }
            $detail = (object)$x;
            $detail->prize_value = $newPrize;
            $detail->ntp = $tempntp;
        }


        return response()->json(['success' => 1, 'data' => $data, JSON_NUMERIC_CHECK], 200);
    }

    public function updateCancellation(){
        $data = PlayMaster::select()->where('is_cancelable',1)->get();
        foreach ($data as $x){
            $y = PlayMaster::find($x->id);
            $y->is_cancelable = 0;
            $y->update();
        }
        return response()->json(['success' => 1, 'data' => $data], 200);
    }
}

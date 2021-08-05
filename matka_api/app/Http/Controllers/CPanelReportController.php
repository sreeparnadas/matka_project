<?php

namespace App\Http\Controllers;

use App\Models\ResultMaster;
use Faker\Core\Number;
use Illuminate\Http\Request;
use App\Models\PlayMaster;
use App\Models\PlayDetails;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class CPanelReportController extends Controller
{
    public function barcode_wise_report(){
        $x = $this->get_total_quantity_by_barcode(1);

        $data = PlayMaster::select('play_masters.id as play_master_id', DB::raw('substr(play_masters.barcode_number, 1, 8) as barcode_number')
            ,'draw_masters.visible_time as draw_time',
            'users.email as terminal_pin','play_masters.created_at as ticket_taken_time'
            )
            ->join('draw_masters','play_masters.draw_master_id','draw_masters.id')
            ->join('users','users.id','play_masters.user_id')
            ->join('play_details','play_details.play_master_id','play_masters.id')
            ->where('play_masters.is_cancelled',0)
            ->groupBy('play_masters.id','play_masters.barcode_number','draw_masters.visible_time','users.email','play_masters.created_at')
            ->orderBy('play_masters.created_at','desc')
            ->get();

        foreach($data as $x){
            $detail = (object)$x;
            $detail->total_quantity = $this->get_total_quantity_by_barcode($detail->play_master_id);
            $detail->prize_value = $this->get_prize_value_by_barcode($detail->play_master_id);
            $detail->amount = $this->get_total_amount_by_barcode($detail->play_master_id);
        }
        return response()->json(['success'=> 1, 'data' => $data], 200);
    }

    public function barcode_wise_report_by_date(Request $request){
        $requestedData = (object)$request->json()->all();
        $start_date = $requestedData->startDate;
        $end_date = $requestedData->endDate;


        $x = $this->get_total_quantity_by_barcode(1);

        $data = PlayMaster::select('play_masters.id as play_master_id', DB::raw('substr(play_masters.barcode_number, 1, 8) as barcode_number')
            ,'draw_masters.visible_time as draw_time',
            'users.email as terminal_pin','play_masters.created_at as ticket_taken_time'
        )
            ->join('draw_masters','play_masters.draw_master_id','draw_masters.id')
            ->join('users','users.id','play_masters.user_id')
            ->join('play_details','play_details.play_master_id','play_masters.id')
            ->where('play_masters.is_cancelled',0)
//            ->where('play_masters.created_at','>=',$start_date)
//            ->where('play_masters.created_at','<=',$end_date)
            ->whereRaw('date(play_masters.created_at) >= ?', [$start_date])
            ->whereRaw('date(play_masters.created_at) <= ?', [$end_date])
            ->groupBy('play_masters.id','play_masters.barcode_number','draw_masters.visible_time','users.email','play_masters.created_at')
            ->orderBy('play_masters.created_at','desc')
            ->get();

        foreach($data as $x){
            $detail = (object)$x;
            $detail->total_quantity = $this->get_total_quantity_by_barcode($detail->play_master_id);
            $detail->prize_value = $this->get_prize_value_by_barcode($detail->play_master_id);
            $detail->amount = $this->get_total_amount_by_barcode($detail->play_master_id);
        }
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

    public function get_prize_value_by_barcode($play_master_id){
        $play_master = PlayMaster::findOrFail($play_master_id);
        $play_game_ids = PlayDetails::where('play_master_id',$play_master_id)->distinct()->pluck('game_type_id');

        $play_date = Carbon::parse($play_master->created_at)->format('Y-m-d');
        $result_master = ResultMaster::where('draw_master_id', $play_master->draw_master_id)->where('game_date',$play_date)->first();
        $result_number_combination_id = !empty($result_master) ? $result_master->number_combination_id : null;
        $prize_value = 0;
        foreach ($play_game_ids as $game_id){
            if($game_id == 1){
                $singleGamePrize = PlayMaster::join('play_details','play_masters.id','play_details.play_master_id')
                    ->join('number_combinations','play_details.number_combination_id','number_combinations.id')
                    ->join('game_types','play_details.game_type_id','game_types.id')
                    ->select(DB::raw("max(play_details.quantity)* max(game_types.winning_price) as prize_value") )
                    ->where('play_masters.id',$play_master_id)
                    ->where('play_details.game_type_id',$game_id)
                    ->where('play_details.number_combination_id',$result_number_combination_id)
                    ->groupBy('number_combinations.single_number_id')
                    ->first();
            }
            if($game_id == 2){
                $tripleGamePrize = PlayMaster::join('play_details','play_masters.id','play_details.play_master_id')
                    ->join('number_combinations','play_details.number_combination_id','number_combinations.id')
                    ->join('game_types','play_details.game_type_id','game_types.id')
                    ->select(DB::raw("play_details.quantity * game_types.winning_price as prize_value") )
                    ->where('play_masters.id',$play_master_id)
                    ->where('play_details.game_type_id',$game_id)
                    ->where('play_details.number_combination_id',$result_number_combination_id)
                    ->first();
            }
        }
        return ['single' => $singleGamePrize];

        if(!empty($singleGamePrize)){
            $prize_value+= $singleGamePrize->prize_value;
        }
        if(!empty($tripleGamePrize)){
            $prize_value+= $tripleGamePrize->prize_value;
        }
        return $prize_value;
    }

    public function get_total_quantity_by_barcode($play_master_id){
        $play_master = PlayMaster::findOrFail($play_master_id);
        $play_game_ids = PlayDetails::where('play_master_id',$play_master_id)->distinct()->pluck('game_type_id');
        $total_quantity = 0;
        foreach ($play_game_ids as $game_id){
            if($game_id == 1){
                $singleGameQuantity = DB::select("select sum(quantity) as total_quantity from(select max(quantity) as quantity from play_details
inner join number_combinations ON number_combinations.id = play_details.number_combination_id
where play_details.play_master_id=".$play_master_id." and play_details.game_type_id=1
group by number_combinations.single_number_id) as table1")[0];

            }
            if($game_id == 2){
                $tripleGameQuantity = DB::select("select sum(quantity) as total_quantity from play_details
inner join number_combinations ON number_combinations.id = play_details.number_combination_id
where play_details.play_master_id=".$play_master_id." and play_details.game_type_id= 2
group by play_details.play_master_id")[0];

            }
        }

        if(!empty($singleGameQuantity)){
            $total_quantity+= $singleGameQuantity->total_quantity;
        }
        if(!empty($tripleGameQuantity)){
            $total_quantity+= $tripleGameQuantity->total_quantity;
        }
        return $total_quantity;
    }

    public function get_total_amount_by_barcode($play_master_id){
        $play_game_ids = PlayDetails::where('play_master_id',$play_master_id)->distinct()->pluck('game_type_id');
        $total_amount = 0;
        foreach ($play_game_ids as $game_id){
            if($game_id == 1){
                $singleGameTotalAmount = DB::select("select sum(quantity)*max(mrp) as total_amount from(select max(quantity) as quantity,round(max(mrp)*22) as mrp from play_details
                inner join number_combinations ON number_combinations.id = play_details.number_combination_id
                where play_details.play_master_id= ".$play_master_id." and play_details.game_type_id=1
                group by number_combinations.single_number_id) as table1")[0];
            }
            if($game_id == 2){
                $tripleGameTotalAmount = DB::select("select sum(quantity*mrp) as total_amount from play_details
                inner join number_combinations ON number_combinations.id = play_details.number_combination_id
                where play_details.play_master_id= ".$play_master_id." and play_details.game_type_id= 2
                group by play_details.play_master_id")[0];
            }
        }

        if(!empty($singleGameTotalAmount)){
            $total_amount+= $singleGameTotalAmount->total_amount;
        }
        if(!empty($tripleGameTotalAmount)){
            $total_amount+= $tripleGameTotalAmount->total_amount;
        }
        return $total_amount;
    }

    public function customer_sale_report(){
        $data = DB::select("select table1.play_master_id, table1.terminal_pin, table1.user_name, table1.user_id, table1.stockist_id, table1.total, table1.commission, users.user_name as stokiest_name from (select max(play_master_id) as play_master_id,terminal_pin,user_name,user_id,stockist_id,
        sum(total) as total,round(sum(commission),2) as commission from (
        select max(play_masters.id) as play_master_id,users.user_name,users.email as terminal_pin,
        round(sum(play_details.quantity * play_details.mrp)) as total,
        sum(play_details.quantity * play_details.mrp)* (max(play_details.commission)/100) as commission,
        play_masters.user_id, stockist_to_terminals.stockist_id
        FROM play_masters
        inner join play_details on play_details.play_master_id = play_masters.id
        inner join game_types ON game_types.id = play_details.game_type_id
        inner join users ON users.id = play_masters.user_id
        left join stockist_to_terminals on play_masters.user_id = stockist_to_terminals.terminal_id
        where play_masters.is_cancelled=0
        group by stockist_to_terminals.stockist_id, play_masters.user_id,users.user_name,play_details.game_type_id,users.email) as table1 group by user_name,user_id,terminal_pin,stockist_id) as table1
        left join users on table1.stockist_id = users.id ");

        foreach($data as $x){
            $newPrize = 0;
            $tempntp = 0;
            $newData = PlayMaster::where('user_id',$x->user_id)->get();
            foreach($newData as $y) {
                $tempData = 0;
                $newPrize += $this->get_prize_value_by_barcode($y->id);
                $tempData = (PlayDetails::select(DB::raw("if(game_type_id = 1,(mrp*22)*quantity-(commission/100),mrp*quantity-(commission/100)) as total"))
                    ->where('play_master_id',$y->id)->distinct()->get())[0];
                $tempntp += $tempData->total;
            }
            $detail = (object)$x;
            $detail->prize_value = $newPrize;
            $detail->ntp = $tempntp;
        }
        return response()->json(['success'=> 1, 'data' => $data], 200);
    }

    public function customer_sale_reports(Request $request){
        $requestedData = (object)$request->json()->all();
        $start_date = $requestedData->startDate;
        $end_date = $requestedData->endDate;


        $data = DB::select("select table1.play_master_id, table1.terminal_pin, table1.user_name, table1.user_id, table1.stockist_id, table1.total, table1.commission, users.user_name as stokiest_name from (select max(play_master_id) as play_master_id,terminal_pin,user_name,user_id,stockist_id,
        sum(total) as total,round(sum(commission),2) as commission from (
        select max(play_masters.id) as play_master_id,users.user_name,users.email as terminal_pin,
        round(sum(play_details.quantity * play_details.mrp)) as total,
        sum(play_details.quantity * play_details.mrp)* (max(play_details.commission)/100) as commission,
        play_masters.user_id, stockist_to_terminals.stockist_id
        FROM play_masters
        inner join play_details on play_details.play_master_id = play_masters.id
        inner join game_types ON game_types.id = play_details.game_type_id
        inner join users ON users.id = play_masters.user_id
        left join stockist_to_terminals on play_masters.user_id = stockist_to_terminals.terminal_id
        where play_masters.is_cancelled=0 and date(play_masters.created_at) >= ? and date(play_masters.created_at) <= ?
        group by stockist_to_terminals.stockist_id, play_masters.user_id,users.user_name,play_details.game_type_id,users.email) as table1 group by user_name,user_id,terminal_pin,stockist_id) as table1
        left join users on table1.stockist_id = users.id ",[$start_date,$end_date]);

//        $data = DB::select("select max(play_master_id) as play_master_id,terminal_pin,user_name,user_id,
//        sum(total) as total,round(sum(commission),2) as commission from (
//        select max(play_masters.id) as play_master_id,users.user_name,users.email as terminal_pin,
//        round(sum(play_details.quantity * play_details.mrp)) as total,
//        sum(play_details.quantity * play_details.mrp)* (max(play_details.commission)/100) as commission,
//        play_masters.user_id
//        FROM play_masters
//        inner join play_details on play_details.play_master_id = play_masters.id
//        inner join game_types ON game_types.id = play_details.game_type_id
//        inner join users ON users.id = play_masters.user_id
//        where play_masters.is_cancelled=0 and date(play_masters.created_at) >= ? and date(play_masters.created_at) <= ?
//        group by play_masters.user_id,users.user_name,play_details.game_type_id,users.email) as table1 group by user_name,user_id,terminal_pin",[$start_date,$end_date]);

        foreach($data as $x){
            $newPrize = 0;
            $tempntp = 0;
            $newData = PlayMaster::where('user_id',$x->user_id)->get();
            foreach($newData as $y) {
                $tempData = 0;
                $newPrize += $this->get_prize_value_by_barcode($y->id);
                $tempData = (PlayDetails::select(DB::raw("if(game_type_id = 1,(mrp*22)*quantity-(commission/100),mrp*quantity-(commission/100)) as total"))
                    ->where('play_master_id',$y->id)->distinct()->get())[0];
                $tempntp += $tempData->total;
            }
            $detail = (object)$x;
            $detail->prize_value = $newPrize;
            $detail->ntp = $tempntp;
        }
        return response()->json(['success'=> 1, 'data' => $data], 200);



//        return response()->json(['success'=> 1, 'data' => $start_date, 'fdsf'=>$end_date], 200);
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\PlayGameSave;
use App\Http\Resources\PlayDetailsResource;
use App\Models\PlayDetails;
use App\Models\PlayMaster;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PlayMasterController extends Controller
{

    public function cancelPlay(Request $request)
    {
        $requestedData = (object)$request->json()->all();
        $playMasterId = $requestedData->play_master_id;
        $playMaster = new PlayMaster();
        $playMaster = PlayMaster::find($playMasterId);
        $playMaster->is_cancelled = 1;
        $playMaster->update();

        $data = DB::select("select round(sum(play_details.quantity * play_details.mrp)) as total from play_details where play_master_id = ?",[$playMasterId])[0]->total;
//
        $user = new User();
        $user = User::find($playMaster->user_id);
        $user->closing_balance += $data;
        $user->update();

        return response()->json(['success' => 1, 'data' => $playMaster, 'id'=>$playMaster->id, 'point'=>$user->closing_balance], 200);
    }

    public function claimPrize(Request $request){
        $requestedData = (object)$request->json()->all();
        $playMasterId = $requestedData->play_master_id;

        $cPanelReportControllerObj = new CPanelReportController();
        $data = $cPanelReportControllerObj->get_prize_value_by_barcode($playMasterId);

        if($data){
            $playMaster = new PlayMaster();
            $playMaster = PlayMaster::find($playMasterId);
            $playMaster->is_claimed = 1;
            $playMaster->is_cancelable = 1;
            $playMaster->update();

            if($playMaster){
                $user = new User();
                $user = User::find($playMaster->user_id);
                $user->closing_balance += $data;
                $user->update();
            }
        }
        return response()->json(['success' => 1, 'point'=>$user->closing_balance, 'id' =>$playMaster->id], 200);
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

    public function get_play_details_by_play_master_id($id){
        $play_details= PlayMaster::findOrFail($id)->play_details;
        return response()->json(['success'=>1,'data'=> PlayDetailsResource::collection($play_details)], 200,[],JSON_NUMERIC_CHECK);
    }

}

<?php

namespace App\Http\Controllers;

use App\Models\PlayMaster;
use App\Models\PlayDetails;
use App\Models\User;
use Illuminate\Http\Request;
use Webpatser\Uuid\Uuid;
use App\Http\Resources\PlayMasterResource;
use Illuminate\Support\Facades\DB;

class PlayMasterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
    public function savePlayDetails(Request $request)
    {
        $requestedData = $request->json()->all();
        $inputPlayMaster = (object)$requestedData['playMaster'];
        $inputPlayDetails = $requestedData['playDetails'];
        $ticketCost = $requestedData['ticketCost'];
//        print_r(json_encode(['playMaster'=>$inputPlayMaster,'playDetails'=>$inputPlayDetails]));exit;

        DB::beginTransaction();
        try{

            $playMaster = new PlayMaster();
            $playMaster->draw_master_id = $inputPlayMaster->drawMasterId;
            $playMaster->terminal_id = $inputPlayMaster->terminalId;
            $playMaster->save();

            foreach($inputPlayDetails as $inputPlayDetail){
                $detail = (object)$inputPlayDetail;
                $playDetails = new PlayDetails();
                $playDetails->play_master_id = $playMaster->id;
                $playDetails->game_type_id = $detail->gameTypeId;
                $playDetails->number_position_id = $detail->numberPositionId;
                $playDetails->game_value = $detail->gameValue;
                $playDetails->save();
            }

            $terminal = User::findOrFail($inputPlayMaster->terminalId);
            $terminal->closing_balance-= $ticketCost;
            $terminal->save();
            DB::commit();
        }catch (\Exception $e){
            DB::rollBack();
            return response()->json(['success'=>0,'exception'=>$e->getMessage(),'error_line'=>$e->getLine()], 500);
        }

        return response()->json(['success'=>1,'data'=>new PlayMasterResource($playMaster)], 200,[],JSON_NUMERIC_CHECK);
    }


}

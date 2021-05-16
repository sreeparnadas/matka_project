<?php

namespace App\Http\Controllers;

use App\Http\Resources\PlayDetailsResource;
use App\Http\Resources\TerminalResource;
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

        $output_array = array();

        DB::beginTransaction();
        try{

            $playMaster = new PlayMaster();
            $playMaster->draw_master_id = $inputPlayMaster->drawMasterId;
            $playMaster->user_id = $inputPlayMaster->terminalId;
            $playMaster->save();
            $output_array['play_master'] = new PlayMasterResource($playMaster);

            $output_play_details = array();
            foreach($inputPlayDetails as $inputPlayDetail){
                $detail = (object)$inputPlayDetail;
                //insert value for triple
                if($detail->gameTypeId == 2){
                    $playDetails = new PlayDetails();
                    $playDetails->play_master_id = $playMaster->id;
                    $playDetails->game_type_id = $detail->gameTypeId;
                    $playDetails->number_position_id = $detail->numberPositionId;
                    $playDetails->game_value = $detail->gameValue;
                    $playDetails->mrp = $detail->mrp;
                    $playDetails->save();
                    $output_play_details[] = $playDetails;
                }
                if($detail->gameTypeId == 1){

                }

            }
            $output_array['play_details'] = PlayDetailsResource::collection( $output_play_details);
//            $output_array['play_details'] = $output_play_details;

            $terminal = User::findOrFail($inputPlayMaster->terminalId);
            $terminal->closing_balance-= $ticketCost;
            $terminal->save();

            DB::commit();
        }catch (\Exception $e){
            DB::rollBack();
            return response()->json(['success'=>0,'exception'=>$e->getMessage(),'error_line'=>$e->getLine()], 500);
        }

        return response()->json(['success'=>1,'data'=> $output_array], 200,[],JSON_NUMERIC_CHECK);
    }
    public function get_play_details_by_play_master_id($id){
        $play_details= PlayMaster::findOrFail($id)->play_details;
        return response()->json(['success'=>1,'data'=> PlayDetailsResource::collection($play_details)], 200,[],JSON_NUMERIC_CHECK);
    }

}

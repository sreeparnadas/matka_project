<?php

namespace App\Http\Controllers;

use App\Http\Resources\PlayDetailsResource;
use App\Http\Resources\TerminalResource;
use App\Models\PlayMaster;
use App\Models\PlayDetails;
use App\Models\SingleNumber;
use App\Models\User;
use Illuminate\Http\Request;
use Webpatser\Uuid\Uuid;
use App\Http\Resources\PlayMasterResource;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

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

        //        Validation for PlayMaster
        $rules = array(
            'drawMasterId'=>'required|exists:draw_masters,id',
            'terminalId'=> ['required',
                function($attribute, $value, $fail){
                    $terminal=User::where('id', $value)->where('user_type_id','=',4)->first();
                    if(!$terminal){
                        return $fail($value.' is not a valid terminal id');
                    }
                }],
        );
        $messages = array(
            'drawMasterId.required'=>'Draw time is required',
            'terminalId.required'=>'Terminal Id is required',
        );

        $validator = Validator::make($requestedData['playMaster'],$rules,$messages );

        if ($validator->fails()) {
            return response()->json(['position'=>1,'success'=>0,'data'=>null,'error'=>$validator->messages()], 406,[],JSON_NUMERIC_CHECK);
        }
        //        Validation for PlayMaster complete


        //validation for playDetails
        $rules = array(
            "*.gameTypeId"=>'required|exists:game_types,id'
        );
        $validator = Validator::make($requestedData['playDetails'],$rules,$messages );
        if ($validator->fails()) {
            return response()->json(['position'=>1,'success'=>0,'data'=>null,'error'=>$validator->messages()], 406,[],JSON_NUMERIC_CHECK);
        }
        //end of validation for playDetails

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
                    $playDetails->number_combination_id = $detail->numberCombinationId;
                    $playDetails->quantity = $detail->quantity;
                    $playDetails->mrp = $detail->mrp;
                    $playDetails->save();
                    $output_play_details[] = $playDetails;
                }
                if($detail->gameTypeId == 1){
                    $numberCombinationIds = SingleNumber::find($detail->singleNumberId)->number_combinations->pluck('id');
                    foreach ($numberCombinationIds as $numberCombinationId){
                        $playDetails = new PlayDetails();
                        $playDetails->play_master_id = $playMaster->id;
                        $playDetails->game_type_id = $detail->gameTypeId;
                        $playDetails->number_combination_id = $numberCombinationId;
                        $playDetails->quantity = $detail->quantity;
                        $playDetails->mrp = round($detail->mrp/22,4);
                        $playDetails->save();
                        $output_play_details[] = $playDetails;

                    }
                }

            }
            $output_array['play_details'] = PlayDetailsResource::collection( $output_play_details);

            $amount = $playMaster->play_details->sum(function($t){
                return $t->quantity * $t->mrp;
            });
            $output_array['amount'] = round($amount,0);

            $terminal = User::findOrFail($inputPlayMaster->terminalId);
            $terminal->closing_balance-= $amount;
            $terminal->save();

            DB::commit();
        }catch (\Exception $e){
            DB::rollBack();
            return response()->json(['success'=>0,'exception'=>$e->getMessage(),'error_line'=>$e->getLine(),'file_name' => $e->getFile()], 500);
        }

        return response()->json(['success'=>1,'data'=> $output_array], 200,[],JSON_NUMERIC_CHECK);
    }
    public function get_play_details_by_play_master_id($id){
        $play_details= PlayMaster::findOrFail($id)->play_details;
        return response()->json(['success'=>1,'data'=> PlayDetailsResource::collection($play_details)], 200,[],JSON_NUMERIC_CHECK);
    }

}

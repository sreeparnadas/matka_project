<?php

namespace App\Http\Controllers;

use App\Http\Resources\GameTypeResource;
use App\Models\GameType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GameTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = GameType::get();
//        $result = get_age('1977-05-20');
        return response()->json(['success'=>1,'data'=> GameTypeResource::collection($result)], 200,[],JSON_NUMERIC_CHECK);
    }


    public function update_payout(Request $request){
        $requestedData = $request->json()->all();
        $inputPayoutDetails = $requestedData;

        DB::beginTransaction();
        try{
            $outputPayoutDetails = array();
            foreach($inputPayoutDetails as $inputPayoutDetail){
                $detail = (object)$inputPayoutDetail;
                $gameType = GameType::find($detail->gameTypeId);
                $gameType->payout = $detail->newPayout;
                $gameType->save();
                $outputPayoutDetails[] = $gameType;
            }
            DB::commit();
        }catch(\Exception $e){
            DB::rollBack();
            return response()->json(['success'=>0, 'data' => null, 'error'=>$e->getMessage()], 500);
        }


        return response()->json(['success'=>1,'data'=> GameTypeResource::collection($outputPayoutDetails)], 200,[],JSON_NUMERIC_CHECK);
    }


}

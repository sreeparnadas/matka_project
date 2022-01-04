<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\NumberCombination;
use App\Models\PlayMaster;
use Illuminate\Http\Request;
use App\Models\NextGameDraw;
use App\Models\DrawMaster;
use App\Http\Controllers\ManualResultController;
use App\Http\Controllers\NumberCombinationController;

class CentralController extends Controller
{

    public function createResult($id){

        $nextGameDrawObj = NextGameDraw::whereGameId($id)->first();
        $nextDrawId = $nextGameDrawObj->next_draw_id;
        $lastDrawId = $nextGameDrawObj->last_draw_id;

        if(!empty($nextGameDrawObj)){

            $tempDrawMaster = new DrawMaster();
            $tempDrawMasterLastDraw = DrawMaster::whereId($lastDrawId)->whereGameId($id)->first();
            $tempDrawMasterLastDraw->active = 0;
            $tempDrawMasterLastDraw->update();

            $tempDrawMasterNextDraw = DrawMaster::whereId($nextDrawId)->whereGameId($id)->first();
            $tempDrawMasterNextDraw->active = 1;
            $tempDrawMasterNextDraw->update();

        }


        $resultMasterController = new ResultMasterController();
        $jsonData = $resultMasterController->save_auto_result($lastDrawId);

        $resultCreatedObj = json_decode($jsonData->content(),true);

        if( !empty($resultCreatedObj) && $resultCreatedObj['success']==1){

            $totalDraw = DrawMaster::whereGameId($id)->count();
            $gameCountLastDraw = DrawMaster::whereGameId($id)->where('id', '<=', $lastDrawId)->count();
            $gameCountNextDraw = DrawMaster::whereGameId($id)->where('id', '<=', $nextDrawId)->count();

            if($gameCountNextDraw==$totalDraw){
                $nextDrawId = (DrawMaster::whereGameId($id)->first())->id;
            }
            else {
                $nextDrawId = $nextDrawId + 1;
            }

            if($gameCountLastDraw==$totalDraw){
                $lastDrawId = (DrawMaster::whereGameId($id)->first())->id;
            }
            else{
                $lastDrawId = $lastDrawId + 1;
            }

            $nextGameDrawObj->next_draw_id = $nextDrawId;
            $nextGameDrawObj->last_draw_id = $lastDrawId;
            $nextGameDrawObj->save();

            $tempPlayMaster = PlayMaster::select()->where('is_cancelable',1)->whereGameId($id)->get();
            foreach ($tempPlayMaster as $x){
                $y = PlayMaster::find($x->id);
                $y->is_cancelable = 0;
                $y->update();
            }

            return response()->json(['success'=>1, 'message' => 'Result added'], 200);
        }else{
            return response()->json(['success'=>0, 'message' => 'Result not added'], 401);
        }

    }


//    public function createResult(){
//
//        $nextGameDrawObj = NextGameDraw::first();
//        $nextDrawId = $nextGameDrawObj->next_draw_id;
//        $lastDrawId = $nextGameDrawObj->last_draw_id;
//
//        DrawMaster::query()->update(['active' => 0]);
//        if(!empty($nextGameDrawObj)){
//            DrawMaster::findOrFail($nextDrawId)->update(['active' => 1]);
//        }
//
//
//        $resultMasterController = new ResultMasterController();
//        $jsonData = $resultMasterController->save_auto_result($lastDrawId);
//
//        $resultCreatedObj = json_decode($jsonData->content(),true);
//
//        if( !empty($resultCreatedObj) && $resultCreatedObj['success']==1){
//
//            $totalDraw = DrawMaster::count();
//            if($nextDrawId==$totalDraw){
//                $nextDrawId = 1;
//            }
//            else {
//                $nextDrawId = $nextDrawId + 1;
//            }
//
//            if($lastDrawId==$totalDraw){
//                $lastDrawId = 1;
//            }
//            else{
//                $lastDrawId = $lastDrawId + 1;
//            }
//
//            $nextGameDrawObj->next_draw_id = $nextDrawId;
//            $nextGameDrawObj->last_draw_id = $lastDrawId;
//            $nextGameDrawObj->save();
//
//            return response()->json(['success'=>1, 'message' => 'Result added'], 200);
//        }else{
//            return response()->json(['success'=>0, 'message' => 'Result not added'], 401);
//        }
//
//    }

}

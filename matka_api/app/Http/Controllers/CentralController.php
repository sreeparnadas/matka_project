<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\NextGameDraw;
use App\Models\DrawMaster;
use App\Http\Controllers\ManualResultController;

class CentralController extends Controller
{
    public function createResult(Request $request){

        $nextGameDrawObj = NextGameDraw::first();
        //set all draw inactive
        DrawMaster::query()->update(['active' => 0]);
        if(!empty($nextGameDrawObj)){
            DrawMaster::findOrFail($nextGameDrawObj->next_draw_id)->update(['active' => 1]);
        }

        $request->request->add(
            ['drawMasterId'=> $nextGameDrawObj->last_draw_id, 'numberCombinationId' => $nextGameDrawObj->next_draw_id]
        );

        $manualResultCtrlObj = new ManualResultController();
        $jsonData = $manualResultCtrlObj->save_manual_result($request);
        $resultCreatedObj = json_decode($jsonData->content(),true);

        $actionId = 'score_update';
        $actionData = array('team1_score' => 46);
        event(new ActionEvent($actionId, $actionData));

        if( !empty($resultCreatedObj) && $resultCreatedObj['success']==1){
            return response()->json(['success'=>1, 'message' => 'Result added'], 200);
        }else{
            return response()->json(['success'=>0, 'message' => 'Result not added'], 500);
        }

    }
}

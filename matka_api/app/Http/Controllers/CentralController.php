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

        $request->request->add('drawMasterId', 4);
//        $request->request->add(['numberCombinationId', 16]);

        $manualResultCtrlObj = new ManualResultController();
        $data = $manualResultCtrlObj->save_manual_result($request);

        return response()->json(['success'=>1, 'data' => $data], 500);
    }
}

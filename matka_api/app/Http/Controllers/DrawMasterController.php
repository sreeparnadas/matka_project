<?php

namespace App\Http\Controllers;

use App\Http\Resources\DrawMasterResource;
use App\Models\DrawMaster;
use Illuminate\Http\Request;

class DrawMasterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = DrawMaster::get();
        return response()->json(['success'=>1,'data'=>DrawMasterResource::collection($result)], 200,[],JSON_NUMERIC_CHECK);
    }

    public function get_incomplete_games_by_date($date){
        $result = DrawMaster::whereDoesnthave('result_masters', function($q) use ($date) {
            $q->where('game_date', '=', $date);
        })->get();
        return response()->json(['success'=>1,'data'=>DrawMasterResource::collection($result)], 200,[],JSON_NUMERIC_CHECK);
    }

    public function getActiveDraw()
    {
        $result = DrawMaster::where('active',1)->first();
        if(!empty($result)){
            return response()->json(['success'=>1,'data'=> new DrawMasterResource($result)], 200,[],JSON_NUMERIC_CHECK);
        }else{
            return response()->json(['success'=>1,'data'=> null], 200,[],JSON_NUMERIC_CHECK);
        }

    }

    public function setActiveDraw(){

    }


}

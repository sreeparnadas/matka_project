<?php

namespace App\Http\Controllers;

use App\Http\Requests\PlayGameSave;
use App\Http\Resources\PlayDetailsResource;
use App\Models\PlayMaster;

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

    public function get_play_details_by_play_master_id($id){
        $play_details= PlayMaster::findOrFail($id)->play_details;
        return response()->json(['success'=>1,'data'=> PlayDetailsResource::collection($play_details)], 200,[],JSON_NUMERIC_CHECK);
    }

}

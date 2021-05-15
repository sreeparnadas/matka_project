<?php

namespace App\Http\Controllers;

use App\Models\PlayMaster;
use Illuminate\Http\Request;
use Webpatser\Uuid\Uuid;
use App\Http\Resources\PlayMasterResource;

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
        $playMaster = new PlayMaster();
        $playMaster->barcode_number = (string)Uuid::generate();
        $playMaster->draw_master_id = $request->input('drawMasterId');
        $playMaster->terminal_id = $request->input('terminalId');

        $playMaster->save();
        return response()->json(['success'=>1,'data'=>new PlayMasterResource($playMaster)], 200,[],JSON_NUMERIC_CHECK);
    }


}

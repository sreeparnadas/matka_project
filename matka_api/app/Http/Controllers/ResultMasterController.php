<?php

namespace App\Http\Controllers;

use App\Models\ResultMaster;
use Illuminate\Http\Request;

class ResultMasterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function get_result_masters()
    {
        $request= ResultMaster::get();
        return response()->json(['success'=>1,'data'=>$request], 200,[],JSON_NUMERIC_CHECK);
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
    public function save_result_masters(Request $request)
    {
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ResultMaster  $resultMaster
     * @return \Illuminate\Http\Response
     */
    public function show(ResultMaster $resultMaster)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ResultMaster  $resultMaster
     * @return \Illuminate\Http\Response
     */
    public function edit(ResultMaster $resultMaster)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ResultMaster  $resultMaster
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ResultMaster $resultMaster)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ResultMaster  $resultMaster
     * @return \Illuminate\Http\Response
     */
    public function destroy(ResultMaster $resultMaster)
    {
        //
    }
}

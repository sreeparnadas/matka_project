<?php

namespace App\Http\Controllers;

use App\Http\Resources\ManualResultResource;
use App\Models\ManualResult;
use Illuminate\Http\Request;

class ManualResultController extends Controller
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
    public function save_manual_result(Request $request)
    {
        $requestedData = (object)$request->json()->all();
//        $inputManual = (object)$requestedData;

        $manualResult = new ManualResult();
        $manualResult->draw_master_id = $requestedData->drawMasterId;
        $manualResult->number_combination_id = $requestedData->numberCombinationId;
        $manualResult->game_date ='2021-05-21';
        $manualResult->save();

        return response()->json(['success'=>1,'data'=> new ManualResultResource($manualResult)], 200,[],JSON_NUMERIC_CHECK);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ManualResult  $manualResult
     * @return \Illuminate\Http\Response
     */
    public function show(ManualResult $manualResult)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ManualResult  $manualResult
     * @return \Illuminate\Http\Response
     */
    public function edit(ManualResult $manualResult)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ManualResult  $manualResult
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ManualResult $manualResult)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ManualResult  $manualResult
     * @return \Illuminate\Http\Response
     */
    public function destroy(ManualResult $manualResult)
    {
        //
    }
}

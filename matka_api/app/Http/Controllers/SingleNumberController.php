<?php

namespace App\Http\Controllers;

use App\Models\SingleNumber;
use Illuminate\Http\Request;
use App\Http\Resources\SingleNumbers;

class SingleNumberController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result =  SingleNumber::orderBy('single_order')->get();
        return response()->json(['success'=>1,'data'=>SingleNumbers::collection($result)], 200,[],JSON_NUMERIC_CHECK);
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SingleNumber  $singleNumber
     * @return \Illuminate\Http\Response
     */
    public function show(SingleNumber $singleNumber)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SingleNumber  $singleNumber
     * @return \Illuminate\Http\Response
     */
    public function edit(SingleNumber $singleNumber)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SingleNumber  $singleNumber
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SingleNumber $singleNumber)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SingleNumber  $singleNumber
     * @return \Illuminate\Http\Response
     */
    public function destroy(SingleNumber $singleNumber)
    {
        //
    }
}

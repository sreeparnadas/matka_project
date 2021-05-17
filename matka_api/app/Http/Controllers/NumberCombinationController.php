<?php

namespace App\Http\Controllers;

use App\Models\NumberCombination;
use Illuminate\Http\Request;
use App\Http\Resources\NumberCombinationsResource;

class NumberCombinationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = NumberCombination::get();
        return response()->json(['success'=>1,'data'=> NumberCombinationsResource::collection($result)], 200,[],JSON_NUMERIC_CHECK);
    }

    public function getNumbersBySingleNumber($id){
        $result = NumberCombination::where('single_number_id',$id)->get();
        return response()->json(['success'=>1,'data'=> NumberCombinationsResource::collection($result)], 200,[],JSON_NUMERIC_CHECK);
    }
}

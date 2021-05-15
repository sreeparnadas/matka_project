<?php

namespace App\Http\Controllers;

use App\Models\NumberCombination;
use Illuminate\Http\Request;

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
        return response()->json(['success'=>1,'data'=>$result], 200,[],JSON_NUMERIC_CHECK);
    }

    public function getNumbersBySingleNumber($number){
        $result = NumberCombination::where('single_number',$number)->get();
        return response()->json(['success'=>1,'data'=>$result], 200,[],JSON_NUMERIC_CHECK);
    }
}

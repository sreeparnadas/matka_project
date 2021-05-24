<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\DrawMasterResource;
use App\Models\DrawMaster;
use Illuminate\Http\Request;

class Test extends Controller
{
    public function index()
    {
        $result = DrawMaster::whereDoesnthave('result_masters', function($q){
            $q->where('game_date', '=', '2021-05-24');
        })->get();
        return response()->json(['success'=>1,'data'=>$result], 200,[],JSON_NUMERIC_CHECK);
    }
}

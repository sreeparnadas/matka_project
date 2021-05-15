<?php

namespace App\Http\Controllers;

use App\Models\GameType;
use Illuminate\Http\Request;

class GameTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = GameType::get();
        return response()->json(['success'=>1,'data'=>$result], 200,[],JSON_NUMERIC_CHECK);
    }


}

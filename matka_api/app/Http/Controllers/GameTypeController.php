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
//        $result = get_age('1977-05-20');
        return response()->json(['success'=>1,'data'=>$result], 200,[],JSON_NUMERIC_CHECK);
    }


}

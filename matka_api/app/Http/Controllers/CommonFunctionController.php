<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class CommonFunctionController extends Controller
{
    public function getServerTime(){
        $current_time = Carbon::now()->format('H:i:s');
        return json_encode($current_time);
    }
}

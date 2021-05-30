<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class CommonFunctionController extends Controller
{
    public function getServerTime(){
        $current_time = Carbon::now();
        return array('hour' => $current_time->hour, 'minute' => $current_time->minute,
            'second' => $current_time->second, 'meridiem' => $current_time->meridiem);
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Str;

class CommonFunctionController extends Controller
{
    public function getServerTime(){
        $current_time = Carbon::now();
        return array('hour' => $current_time->hour, 'minute' => $current_time->minute,
            'second' => $current_time->second, 'meridiem' => $current_time->meridiem);
    }

    public function backup_database()
    {
        \Artisan::call('db:dump');
        $result = Artisan::output();
        $replaced = Str::substr($result,6);
        $replaced = Str::replaceLast('\\r\\n', '\r\n', $replaced);
        return response()->json(['success'=>1, 'data' => $replaced], 200);
    }
}

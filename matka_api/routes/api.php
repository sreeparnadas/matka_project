<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\NumberCombinationController;
use App\Http\Controllers\DrawMasterController;
use App\Http\Controllers\GameTypeController;
use App\Http\Controllers\PlayMasterController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post("login",[UserController::class,'login']);



Route::post("register",[UserController::class,'register']);

Route::group(['middleware' => 'auth:sanctum'], function(){
    //All secure URL's
    Route::get("user",[UserController::class,'getCurrentUser']);
    Route::get("logout",[UserController::class,'logout']);

    //get all users
    Route::get("users",[UserController::class,'getAllUsers']);


});




Route::group(array('prefix' => 'dev'), function() {

    //number_combinations
    Route::get("numberCombinations",[NumberCombinationController::class,'index']);
    Route::get("numberCombinations/number/{number}",[NumberCombinationController::class,'getNumbersBySingleNumber']);

    //draw_masters
    Route::get('drawTimes',[DrawMasterController::class,'index']);
    Route::get('drawTimes/active',[DrawMasterController::class,'getActiveDraw']);

    //game_types
    Route::get('gameTypes',[GameTypeController::class,'index']);

    //play_masters
    Route::post('play',[PlayMasterController::class,'savePlayDetails']);




});


<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\NumberCombinationController;
use App\Http\Controllers\DrawMasterController;
use App\Http\Controllers\GameTypeController;
use App\Http\Controllers\PlayMasterController;
use App\Http\Controllers\ResultMasterController;
use App\Http\Controllers\SingleNumberController;
use App\Http\Controllers\ManualResultController;

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

    //single_numbers
    Route::get("singleNumbers",[SingleNumberController::class,'index']);

    //number_combinations
    Route::get("numberCombinations",[NumberCombinationController::class,'index']);
    Route::get("numberCombinations/number/{id}",[NumberCombinationController::class,'getNumbersBySingleNumber']);
    Route::get("numberCombinations/matrix",[NumberCombinationController::class,'getAllInMatrix']);

    //draw_masters
    Route::get('drawTimes',[DrawMasterController::class,'index']);
    Route::get('drawTimes/active',[DrawMasterController::class,'getActiveDraw']);

    //manual_result

    Route::post('manualResult',[ManualResultController::class, 'save_manual_result']);
});




Route::group(array('prefix' => 'dev'), function() {

    //single_numbers
    Route::get("singleNumbers",[SingleNumberController::class,'index']);

    //number_combinations
    Route::get("numberCombinations",[NumberCombinationController::class,'index']);
    Route::get("numberCombinations/number/{number}",[NumberCombinationController::class,'getNumbersBySingleNumber']);
    Route::get("numberCombinations/matrix",[NumberCombinationController::class,'getAllInMatrix']);

    //draw_masters
    Route::get('drawTimes',[DrawMasterController::class,'index']);
    Route::get('drawTimes/active',[DrawMasterController::class,'getActiveDraw']);

    //game_types
    Route::get('gameTypes',[GameTypeController::class,'index']);

    //play_masters
    Route::post('buyTicket',[PlayMasterController::class,'savePlayDetails']);

    //game
    Route::get('playDetails/playId/{id}',[PlayMasterController::class,'get_play_details_by_play_master_id']);

    //result_masters
    Route::get('result_masters',[ResultMasterController::class, 'get_result_masters']);
    Route::post('result_masters',[ResultMasterController::class, 'save_result_masters']);

    //manual_result

    Route::post('manualResult',[ManualResultController::class, 'save_manual_result']);


});


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
use App\Http\Controllers\Test;
use App\Http\Controllers\PlayController;
use App\Http\Controllers\CommonFunctionController;
use App\Http\Controllers\StockistController;
use App\Http\Controllers\CentralController;
use App\Http\Controllers\NextGameDrawController;
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
Route::get("serverTime",[CommonFunctionController::class,'getServerTime']);
Route::get("backupDatabase",[CommonFunctionController::class,'backup_database']);

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
    Route::get('drawTimes/dates/{date}',[DrawMasterController::class,'get_incomplete_games_by_date']);

    //manual_result

    Route::post('manualResult',[ManualResultController::class, 'save_manual_result']);

    //play_masters
    Route::post('buyTicket',[PlayController::class,'save_play_details']);

    Route::get('results/currentDate',[ResultMasterController::class, 'get_results_by_current_date']);

});




Route::group(array('prefix' => 'dev'), function() {

    Route::get("users",[UserController::class,'getAllUsers']);
    Route::patch("users",[UserController::class,'update']);

    //single_numbers
    Route::get("singleNumbers",[SingleNumberController::class,'index']);

    //number_combinations
    Route::get("numberCombinations",[NumberCombinationController::class,'index']);
    Route::get("numberCombinations/number/{number}",[NumberCombinationController::class,'getNumbersBySingleNumber']);
    Route::get("numberCombinations/matrix",[NumberCombinationController::class,'getAllInMatrix']);

    //draw_masters
    Route::get('drawTimes',[DrawMasterController::class,'index']);
    Route::get('drawTimes/active',[DrawMasterController::class,'getActiveDraw']);
    Route::get('drawTimes/dates/{date}',[DrawMasterController::class,'get_incomplete_games_by_date']);

    //game_types
    Route::get('gameTypes',[GameTypeController::class,'index']);

    //play_masters
    Route::post('buyTicket',[PlayController::class,'save_play_details']);


    //game
    Route::get('playDetails/playId/{id}',[PlayMasterController::class,'get_play_details_by_play_master_id']);

    //result_masters
    Route::get('results',[ResultMasterController::class, 'get_results']);
    Route::get('results/currentDate',[ResultMasterController::class, 'get_results_by_current_date']);

    //manual_result

    Route::post('manualResult',[ManualResultController::class, 'save_manual_result']);


    //test
    Route::get('test',[Test::class, 'index']);


    Route::get('stockists',[StockistController::class, 'getAllStockists']);
    Route::post('stockists',[StockistController::class, 'createStockist']);
    Route::put('stockists',[StockistController::class, 'updateStockist']);


    Route::get('terminals',[TerminalController::class, 'getAllTerminals']);
    Route::post('terminals',[TerminalController::class, 'createTerminal']);
    Route::put('terminals',[TerminalController::class, 'updateTerminal']);


    Route::post('createAutoResult', [CentralController::class, 'createResult']);
    Route::post('autoResult', [ResultMasterController::class, 'save_auto_result']);

    Route::get('nextDrawId', [NextGameDrawController::class, 'getNextDrawIdOnly']);
});


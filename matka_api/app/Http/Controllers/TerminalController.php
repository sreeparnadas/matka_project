<?php

namespace App\Http\Controllers;
use App\Models\UserType;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Models\RechargeToUser;

use Illuminate\Support\Facades\DB;
use App\Models\CustomVoucher;

use App\Http\Controllers\Controller;
use App\Http\Resources\TerminalResource;
use App\Models\StockistToTerminal;
use Illuminate\Http\Request;
/////// for log
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;


class TerminalController extends Controller
{
    public function get_all_terminals(){
        $terminals = UserType::find(4)->users;
        return TerminalResource::collection($terminals);
    }

    // public function get_stockist_by_terminal_id(){
    //     $trminals = User::find(StockistToTerminal::whereTerminalId(14)->first()->stockist_id);
    //     return response()->json(['success'=>0, 'data' => $trminals], 500);
    // }



    public function create_terminal(Request $request){
        $requestedData = (object)$request->json()->all();

        DB::beginTransaction();
        try{
            $customVoucher=CustomVoucher::where('voucher_name','=',"terminal")->where('accounting_year',"=",2021)->first();
            if($customVoucher) {
                //already exist
                $customVoucher->last_counter = $customVoucher->last_counter + 1;
                $customVoucher->save();
            }else{
                //fresh entry
                $customVoucher= new CustomVoucher();
                $customVoucher->voucher_name="terminal";
                $customVoucher->accounting_year= 2021;
                $customVoucher->last_counter=3000;
                $customVoucher->delimiter='-';
                $customVoucher->prefix='T';
                $customVoucher->save();
            }
            //adding Zeros before number
            $counter = $customVoucher->last_counter;
            //creating stockist user_id
            $user_id = $counter;

            $user = new User();
            $user->user_name = $requestedData->terminalName;
            $user->email = $user_id;
            $user->password = md5($user_id);
            $user->user_type_id = 4;
            $user->opening_balance = 0;
            $user->closing_balance = 0;

            $user->save();
            $stockistToTerminal= new StockistToTerminal();

            $stockistToTerminal->terminal_id = $user->id;
            $stockistToTerminal->stockist_id = $requestedData->stockistId;
            $stockistToTerminal->save();


            DB::commit();
        }catch(\Exception $e){
            DB::rollBack();
            return response()->json(['success'=>0, 'data' => null, 'error'=>$e->getMessage()], 500);
        }

        return response()->json(['success'=>1,'data'=> new TerminalResource($user)], 200,[],JSON_NUMERIC_CHECK);
    }


    public function update_terminal(Request $request){


        // $terminal = new User();
        // $requestedData=User::find($request->input('id'));
        // $user_name = $requestedData->userName;
        // $stockist_id = $requestedData->stockistId;
        // $terminal->user_name = $user_name;
        // $terminal->id = $stockist_id;
        // $terminal->save();

        $requestedData = (object)$request->json()->all();

        $terminalId = $requestedData->terminalId;
        $terminalName = $requestedData->terminalName;
        $stockist_id = $requestedData->stockistId;

        $terminal = User::findOrFail($terminalId);
        $terminal->user_name = $terminalName;
        
        $terminal->id = $stockist_id;
        $terminal->save();

        return response()->json(['success'=>1,'data'=> new TerminalResource($terminal)], 200,[],JSON_NUMERIC_CHECK);

    }

    public function update_balance_to_terminal(Request $request){
        $requestedData = (object)$request->json()->all();

    // Validation for terminal
       $rules = array(
           'beneficiaryUid'=> ['required',
               function($attribute, $value, $fail){
                   $terminal=User::where('id', $value)->where('user_type_id','=',4)->first();
                   if(!$terminal){
                       return $fail($value.' is not a valid terminal id');
                   }
               }],
       );
       $messages = array(
           'beneficiaryUid.required' => "Terminal required"
       );

       $validator = Validator::make($request->all(),$rules,$messages);
       if ($validator->fails()) {
        return response()->json(['success'=>0, 'data' => $messages], 500);
    }

        DB::beginTransaction();
        try{

            $beneficiaryUid = $requestedData->beneficiaryUid;
            $amount = $requestedData->amount;
            $stockistId = $requestedData->stockistId;
            $beneficiaryObj = User::find($beneficiaryUid);
            $beneficiaryObj->closing_balance = $beneficiaryObj->closing_balance + $amount;
            $beneficiaryObj->save();

            $stockist = User::findOrFail($stockistId);
            $stockist->closing_balance = $stockist->closing_balance - $amount;
            $stockist->save();

            $rechargeToUser = new RechargeToUser();
            $rechargeToUser->beneficiary_uid = $requestedData->beneficiaryUid;
            $rechargeToUser->recharge_done_by_uid = $requestedData->rechargeDoneByUid;
            $rechargeToUser->amount = $requestedData->amount;
            $rechargeToUser->save();
            DB::commit();

        }catch(\Exception $e){
            DB::rollBack();
            return response()->json(['success'=>0, 'data' => null, 'error'=>$e->getMessage()], 500);
        }
        return response()->json(['success'=>1,'data'=> new TerminalResource($beneficiaryObj)], 200,[],JSON_NUMERIC_CHECK);

    }

}

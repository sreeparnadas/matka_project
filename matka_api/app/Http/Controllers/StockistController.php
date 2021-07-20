<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\StockistResource;
use App\Models\RechargeToUser;
use App\Models\User;
use App\Models\UserType;
use App\Models\CustomVoucher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class StockistController extends Controller
{
    public function get_all_stockists(){

        $stockists = UserType::find(3)->users;
//        return response()->json(['success'=>1,'data'=>StockistResource::collection($stockists)], 200,[],JSON_NUMERIC_CHECK);
        return StockistResource::collection($stockists);
    }

    public function create_stockist(Request $request){
        $requestedData = (object)$request->json()->all();

        DB::beginTransaction();
        try{
            $customVoucher=CustomVoucher::where('voucher_name','=',"stockist")->where('accounting_year',"=",2021)->first();
            if($customVoucher) {
                //already exist
                $customVoucher->last_counter = $customVoucher->last_counter + 1;
                $customVoucher->save();
            }else{
                //fresh entry
                $customVoucher= new CustomVoucher();
                $customVoucher->voucher_name="stockist";
                $customVoucher->accounting_year= 2021;
                $customVoucher->last_counter=1;
                $customVoucher->delimiter='-';
                $customVoucher->prefix='S';
                $customVoucher->save();
            }
            //adding Zeros before number
            $counter = str_pad($customVoucher->last_counter,5,"0",STR_PAD_LEFT);
            //creating stockist user_id
            $user_id = $customVoucher->prefix.$counter;

            $user = new User();
            $user->user_name = $requestedData->userName;
            $user->email = $user_id;
            $user->password = md5($user_id);
            $user->user_type_id = 3;
            $user->opening_balance = 0;
            $user->closing_balance = 0;

            $user->save();
            DB::commit();
        }catch(\Exception $e){
            DB::rollBack();
            return response()->json(['success'=>0, 'data' => null, 'error'=>$e->getMessage()], 500);
        }

        return response()->json(['success'=>1,'data'=> new StockistResource($user)], 200,[],JSON_NUMERIC_CHECK);
    }

    public function update_stockist(Request $request){
        $requestedData = (object)$request->json()->all();
        $id = $requestedData->id;
        $user_name = $requestedData->userName;
        $stockist = User::findOrFail($id);
        $stockist->user_name = $user_name;
        $stockist->save();
        return response()->json(['success'=>1,'data'=> new StockistResource($stockist)], 200,[],JSON_NUMERIC_CHECK);
        // return response()->json(['success'=>1,'data'=>$id], 200,[],JSON_NUMERIC_CHECK);

    }

    public function update_balance_to_stockist(Request $request){
        $requestedData = (object)$request->json()->all();
        $rules = array(
            'beneficiaryUid'=> ['required',
                function($attribute, $value, $fail){
                    $stockist=User::where('id', $value)->where('user_type_id','=',3)->first();
                    if(!$stockist){
                        return $fail($value.' is not a valid stockist id');
                    }
                }],
        );
        $messages = array(
            'beneficiaryUid.required' => "Stockist required"
        );

        $validator = Validator::make($request->all(),$rules,$messages);
        if ($validator->fails()) {
            return response()->json(['success'=>0, 'data' => $messages], 500);
        }


        DB::beginTransaction();
        try{
            $requestedData = (object)$request->json()->all();
            $beneficiaryUid = $requestedData->beneficiaryUid;
            $amount = $requestedData->amount;
            $beneficiaryObj = User::find($beneficiaryUid);
            $beneficiaryObj->closing_balance = $beneficiaryObj->closing_balance + $amount;
            $beneficiaryObj->save();

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
        return response()->json(['success'=>1,'data'=> new StockistResource($beneficiaryObj)], 200,[],JSON_NUMERIC_CHECK);

    }

}

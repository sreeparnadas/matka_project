<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Models\UserType;
use App\Models\CustomVoucher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StockistController extends Controller
{
    public function getAllStockists(){
        $stockists = UserType::find(3)->users;
        return UserResource::collection($stockists);
    }
    public function createStockist(Request $request){
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

        return response()->json(['success'=>1,'data'=> new UserResource($user)], 200,[],JSON_NUMERIC_CHECK);
    }

    public function updateStockist(Request $request){
        $requestedData = (object)$request->json()->all();
        $id = $requestedData->id;
        $user_name = $requestedData->userName;
        $stockist = User::findOrFail($id);
        $stockist->user_name = $user_name;
        $stockist->save();
        return response()->json(['success'=>1,'data'=> new UserResource($stockist)], 200,[],JSON_NUMERIC_CHECK);

    }
}

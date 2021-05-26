<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function register(Request $request)
    {

        $user = User::create([
            'email'    => $request->email,
            'password' => $request->password,
            'user_name' => $request->name,
            'user_type_id' => $request->user_type_id
        ]);

//        return response()->json(['success'=>1,'data'=>$user], 200,[],JSON_NUMERIC_CHECK);

        $token = $user->createToken('my-app-token')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];
        return response($response, 201);
    }

    function login(Request $request)
    {
        $user= User::where('email', $request->email)->first();
        // print_r($data);
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['success'=>0,'data'=>null, 'message'=>'Credential does not matched'], 200,[],JSON_NUMERIC_CHECK);
        }

        $token = $user->createToken('my-app-token')->plainTextToken;

        $response = [
            'user' => new UserResource($user),
//            'user' => $user,
            'token' => $token
        ];
        return response()->json(['success'=>1,'data'=>$response, 'message'=>'Welcome'], 200,[],JSON_NUMERIC_CHECK);
    }


    function getCurrentUser(Request $request){
        return $request->user();
//        return User::get();

    }

    function getAllUsers(Request $request){
        return User::get();
    }
    function logout(Request $request){
        $result = $request->user()->currentAccessToken()->delete();
        return $result;
    }

    function  update(Request $request){

        DB::beginTransaction();
        try{
            $requestedData = (object)$request->json()->all();
            $user = User::findOrFail($requestedData->userId);
            $user->closing_balance-= $requestedData->deductAmount;
            $user->save();

            DB::commit();
        }catch (\Exception $e){
            DB::rollBack();
            return response()->json(['success'=>0, 'data' => null, 'error'=>$e->getMessage()], 500);
        }

        return response()->json(['success'=>1,'data'=> new UserResource($user)], 200,[],JSON_NUMERIC_CHECK);
    }
}

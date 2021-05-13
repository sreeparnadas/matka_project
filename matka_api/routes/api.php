<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductCategoryController;
use App\Http\Controllers\UnitController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\VendorController;
use App\Http\Controllers\CustomerCategoryController;
use App\Http\Controllers\StateController;
use App\Http\Controllers\TransactionTypeController;
use App\Http\Controllers\ExtraItemController;
use App\Http\Controllers\PurchaseController;
use App\Http\Controllers\SaleMasterController;
use App\Http\Controllers\SaleController;
use App\Models\TransactionMaster;
use App\Http\Controllers\TransactionController;
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

    //purchase
    Route::post("purchases",[PurchaseController::class,'savePurchase']);
    Route::get("purchases",[PurchaseController::class,'getAllPurchase']);
    Route::get("purchases/{startDate}/{endDate}",[PurchaseController::class,'getAllPurchaseByDateRange']);
});




Route::group(array('prefix' => 'dev'), function() {
    //products
    Route::get("products",[ProductController::class,'getAllProducts']);
    Route::post("products",[ProductController::class,'saveProduct']);
    Route::put("products",[ProductController::class,'updateProduct']);
    Route::delete("products/{id}",[ProductController::class,'deleteProduct']);

    Route::get("products/{id}",[ProductController::class,'getProductById']);

    //product_category
    Route::get("productCategories",[ProductCategoryController::class,'getProductCategories']);
    Route::get("productCategories/isDeletable/{id}",[ProductCategoryController::class,'isDeletable']);

    //units
    Route::get("units",[UnitController::class,'getAllUnits']);

    //customers
    Route::get("customers",[CustomerController::class,'index']);
    Route::post("customers",[CustomerController::class,'store']);
    Route::patch("customers",[CustomerController::class,'update']);
    Route::delete("customers/{id}",[CustomerController::class,'destroy']);
    Route::get("customerCategories",[CustomerCategoryController::class,'index']);

    //vendors
    Route::get("vendors",[VendorController::class,'index']);
    Route::post("vendors",[VendorController::class,'store']);
    Route::patch("vendors",[VendorController::class,'updateVendor']);
    Route::patch("vendors/{id}",[VendorController::class,'updateVendorById']);
    Route::delete("vendors/{id}",[VendorController::class,'destroy']);

    //others
    Route::get("states",[StateController::class,'index']);
    Route::get("states/{id}",[StateController::class, 'getStateByID']);
    Route::post("states",[StateController::class, 'create']);
    Route::patch("states",[StateController::class, 'edit']);
    Route::delete("states/{id}",[StateController::class, 'destroy']);


    Route::get("transactionTypes",[TransactionTypeController::class,'index']);

    Route::get("extraItems",[ExtraItemController::class,'index']);

    //purchase
    Route::post("purchases",[PurchaseController::class,'savePurchase']);
    Route::get("purchases",[PurchaseController::class,'getAllPurchase']);
    Route::get("purchases/{startDate}/{endDate}",[PurchaseController::class,'getAllPurchaseByDateRange']);

    //Sales
    Route::post("sales",[SaleController::class,'saveSale']);
    Route::get("sales",[SaleController::class,'getAllSales']);
    Route::get("sales/{id}",[SaleController::class,'getSaleByTransactionID']);
    Route::get("salesPrint/{id}",[SaleController::class,'getSaleDetailForPrint']);


    //saleMaster
    Route::post("saleMasters",[SaleMasterController::class,'store']);
    Route::get("saleMasters",[SaleMasterController::class,'index']);


    Route::get("transactions/{id}",[TransactionController::class, 'getTransactionByID']);

});


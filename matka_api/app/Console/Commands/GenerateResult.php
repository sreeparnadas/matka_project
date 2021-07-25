<?php

namespace App\Console\Commands;

use App\Models\NextGameDraw;
use App\Models\ResultMaster;
use Illuminate\Console\Command;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use App\Http\Controllers\CentralController;

class GenerateResult extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'generate:result';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create results everyday';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        LOG::info(Carbon::today());
        $centralControllerObj = new CentralController();
        $centralControllerObj->createResult();
    }
}

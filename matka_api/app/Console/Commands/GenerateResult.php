<?php

namespace App\Console\Commands;

use App\Models\ResultMaster;
use Illuminate\Console\Command;
use Illuminate\Support\Carbon;

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
        $resultMaster = new ResultMaster();
        $resultMaster->draw_master_id = 2;
        $resultMaster->number_combination_id = 10;
        $resultMaster->game_date = Carbon::today();
        $resultMaster->save();
        $this->info('Result generated');
    }
}

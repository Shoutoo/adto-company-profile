<?php
namespace App\Jobs;
use App\Models\Vendor;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;
class SendVendorStatusEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    public int $tries = 3;
    public function __construct(public readonly Vendor $vendor) {}
    public function handle(): void
    {
        Mail::to($this->vendor->email)->send(new \App\Mail\VendorStatusMail($this->vendor));
    }
}

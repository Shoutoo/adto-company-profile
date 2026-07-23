<?php
namespace App\Jobs;
use App\Models\Rfq;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;
class SendRfqNotificationEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    public int $tries = 3;
    public function __construct(public readonly Rfq $rfq) {}
    public function handle(): void
    {
        Mail::to(config('mail.admin_address', 'admin@adtociptausahamandiri.co.id'))
            ->send(new \App\Mail\RfqReceivedMail($this->rfq));
    }
}

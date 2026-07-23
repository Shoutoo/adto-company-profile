<?php
namespace App\Jobs;
use App\Mail\ContactReceivedMail;
use App\Models\Contact;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;
class SendContactNotificationEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    public int $tries = 3;
    public int $backoff = 60;
    public function __construct(public readonly Contact $contact) {}
    public function handle(): void
    {
        Mail::to(config('mail.admin_address', 'admin@adtociptausahamandiri.co.id'))
            ->send(new ContactReceivedMail($this->contact));
    }
}

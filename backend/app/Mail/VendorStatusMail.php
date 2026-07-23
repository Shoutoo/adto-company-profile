<?php
namespace App\Mail;
use App\Models\Vendor;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
class VendorStatusMail extends Mailable
{
    use Queueable, SerializesModels;
    public function __construct(public readonly Vendor $vendor) {}
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Vendor Registration Status Update — PT Adto Cipta Usaha Mandiri',
        );
    }
    public function content(): Content
    {
        return new Content(
            markdown: 'emails.vendor.status',
            with: ['vendor' => $this->vendor],
        );
    }
}

<?php
namespace App\Mail;
use App\Models\Rfq;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
class RfqAcknowledgementMail extends Mailable
{
    use Queueable, SerializesModels;
    public function __construct(public readonly Rfq $rfq) {}
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: "RFQ Received — {$this->rfq->rfq_number}",
        );
    }
    public function content(): Content
    {
        return new Content(
            markdown: 'emails.rfq.acknowledgement',
            with: ['rfq' => $this->rfq],
        );
    }
}

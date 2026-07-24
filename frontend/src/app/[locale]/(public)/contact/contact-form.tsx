'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormValues = z.infer<typeof formSchema>;

/**
 * Contact Form Component
 * Client Component for handling user inquiries
 */
export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: '',
    },
  });

  const onSubmit = async (_data: FormValues) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success('Message sent successfully!', {
      description: 'We will get back to you as soon as possible.',
    });

    reset();
    setIsSubmitting(false);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="name">
            Name *
          </label>
          <Input id="name" placeholder="John Doe" {...register('name')} />
          {errors.name && <p className="text-destructive text-xs">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="email">
            Email *
          </label>
          <Input id="email" placeholder="john@example.com" type="email" {...register('email')} />
          {errors.email && <p className="text-destructive text-xs">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="phone">
            Phone
          </label>
          <Input id="phone" placeholder="+1 (555) 000-0000" type="tel" {...register('phone')} />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="subject">
            Subject *
          </label>
          <select
            className="border-input ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-9 w-full items-center justify-between rounded-none border bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
            id="subject"
            {...register('subject')}
          >
            <option disabled value="">
              Select a subject
            </option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Request Quotation">Request Quotation</option>
            <option value="Partnership">Partnership</option>
            <option value="Career">Career</option>
            <option value="Other">Other</option>
          </select>
          {errors.subject && <p className="text-destructive text-xs">{errors.subject.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium" htmlFor="message">
          Message *
        </label>
        <Textarea
          className="min-h-[120px] resize-none"
          id="message"
          placeholder="How can we help you?"
          {...register('message')}
        />
        {errors.message && <p className="text-destructive text-xs">{errors.message.message}</p>}
      </div>

      <Button className="w-full sm:w-auto" disabled={isSubmitting} type="submit">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}

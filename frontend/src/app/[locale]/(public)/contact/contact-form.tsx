'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { useTranslations } from 'next-intl';

/**
 * Contact Form Component
 * Client Component for handling user inquiries
 */
export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const tContact = useTranslations('Contact');

  const formSchema = z.object({
    name: z.string().min(2, tContact('errors.name_min')),
    email: z.string().email(tContact('errors.email_invalid')),
    phone: z.string().optional(),
    subject: z.string().min(1, tContact('errors.subject_required')),
    message: z.string().min(10, tContact('errors.message_min')),
  });

  type FormValues = z.infer<typeof formSchema>;

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

    toast.success(tContact('success_title'), {
      description: tContact('success_desc'),
    });

    reset();
    setIsSubmitting(false);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="name">
            {tContact('form_name')} *
          </label>
          <Input id="name" placeholder="John Doe" {...register('name')} />
          {errors.name && <p className="text-destructive text-xs">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="email">
            {tContact('form_email')} *
          </label>
          <Input id="email" placeholder="john@example.com" type="email" {...register('email')} />
          {errors.email && <p className="text-destructive text-xs">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="phone">
            {tContact('form_phone')}
          </label>
          <Input id="phone" placeholder="+1 (555) 000-0000" type="tel" {...register('phone')} />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="subject">
            {tContact('form_subject')} *
          </label>
          <select
            className="border-input ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-9 w-full items-center justify-between rounded-none border bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
            id="subject"
            {...register('subject')}
          >
            <option disabled value="">
              {tContact('select_subject')}
            </option>
            <option value="General Inquiry">{tContact('subjects.general')}</option>
            <option value="Request Quotation">{tContact('subjects.quotation')}</option>
            <option value="Partnership">{tContact('subjects.partnership')}</option>
            <option value="Career">{tContact('subjects.career')}</option>
            <option value="Other">{tContact('subjects.other')}</option>
          </select>
          {errors.subject && <p className="text-destructive text-xs">{errors.subject.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium" htmlFor="message">
          {tContact('form_message')} *
        </label>
        <Textarea
          className="min-h-[120px] resize-none"
          id="message"
          placeholder={tContact('message_placeholder')}
          {...register('message')}
        />
        {errors.message && <p className="text-destructive text-xs">{errors.message.message}</p>}
      </div>

      <Button className="w-full sm:w-auto" disabled={isSubmitting} type="submit">
        {isSubmitting ? tContact('sending') : tContact('send')}
      </Button>
    </form>
  );
}

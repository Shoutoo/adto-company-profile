'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  companyName: z.string().min(2, 'Company name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(8, 'Phone number is required'),
  serviceType: z.string().min(1, 'Please select a service type'),
  projectLocation: z.string().min(2, 'Project location is required'),
  estimatedBudget: z.string().min(1, 'Please select an estimated budget'),
  projectTimeline: z.string().min(1, 'Please select a project timeline'),
  projectDescription: z.string().min(20, 'Please provide more details about your project'),
});

type FormValues = z.infer<typeof formSchema>;

export function QuotationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (_data: FormValues) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success('Quotation Request Sent', {
        description:
          'Thank you for your request. Our team will review your project details and get back to you shortly.',
      });
      reset();
    } catch {
      toast.error('Submission Failed', {
        description: 'An error occurred while submitting your request. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input id="fullName" placeholder="John Doe" {...register('fullName')} />
          {errors.fullName && <p className="text-destructive text-sm">{errors.fullName.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="companyName">Company Name *</Label>
          <Input id="companyName" placeholder="PT Example Company" {...register('companyName')} />
          {errors.companyName && (
            <p className="text-destructive text-sm">{errors.companyName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input id="email" placeholder="john@example.com" type="email" {...register('email')} />
          {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input id="phone" placeholder="08123456789" {...register('phone')} />
          {errors.phone && <p className="text-destructive text-sm">{errors.phone.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="serviceType">Service Type *</Label>
          <Select
            onValueChange={(value) => {
              setValue('serviceType', value);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="General Construction">General Construction</SelectItem>
              <SelectItem value="MEP Engineering">MEP Engineering</SelectItem>
              <SelectItem value="Procurement">Procurement</SelectItem>
              <SelectItem value="Project Management">Project Management</SelectItem>
              <SelectItem value="Consulting">Consulting</SelectItem>
              <SelectItem value="Trading">Trading</SelectItem>
              <SelectItem value="Maintenance">Maintenance</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.serviceType && (
            <p className="text-destructive text-sm">{errors.serviceType.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="projectLocation">Project Location *</Label>
          <Input
            id="projectLocation"
            placeholder="Jakarta, Indonesia"
            {...register('projectLocation')}
          />
          {errors.projectLocation && (
            <p className="text-destructive text-sm">{errors.projectLocation.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="estimatedBudget">Estimated Budget (IDR) *</Label>
          <Select
            onValueChange={(value) => {
              setValue('estimatedBudget', value);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Under 500M">Under 500 Million</SelectItem>
              <SelectItem value="500M-1B">500 Million - 1 Billion</SelectItem>
              <SelectItem value="1B-5B">1 Billion - 5 Billion</SelectItem>
              <SelectItem value="5B-10B">5 Billion - 10 Billion</SelectItem>
              <SelectItem value="Above 10B">Above 10 Billion</SelectItem>
            </SelectContent>
          </Select>
          {errors.estimatedBudget && (
            <p className="text-destructive text-sm">{errors.estimatedBudget.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="projectTimeline">Project Timeline *</Label>
          <Select
            onValueChange={(value) => {
              setValue('projectTimeline', value);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select expected timeline" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-3 Months">1 - 3 Months</SelectItem>
              <SelectItem value="3-6 Months">3 - 6 Months</SelectItem>
              <SelectItem value="6-12 Months">6 - 12 Months</SelectItem>
              <SelectItem value="12+ Months">More than 12 Months</SelectItem>
            </SelectContent>
          </Select>
          {errors.projectTimeline && (
            <p className="text-destructive text-sm">{errors.projectTimeline.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="projectDescription">Project Description *</Label>
        <Textarea
          className="min-h-[150px]"
          id="projectDescription"
          placeholder="Please describe your project requirements, scope, and any specific details we should know."
          {...register('projectDescription')}
        />
        {errors.projectDescription && (
          <p className="text-destructive text-sm">{errors.projectDescription.message}</p>
        )}
      </div>

      <Button className="w-full sm:w-auto" disabled={isSubmitting} size="lg" type="submit">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting Request...
          </>
        ) : (
          'Submit Quotation Request'
        )}
      </Button>
    </form>
  );
}

'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
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
  companyName: z.string().min(2, 'Company name is required'),
  businessField: z.string().min(2, 'Business field is required'),
  contactPerson: z.string().min(2, 'Contact person is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^(?:\+62|62|0)[2-9]\d{7,11}$/, 'Invalid Indonesian phone number'),
  address: z.string().min(10, 'Please provide complete address'),
  npwp: z.string().min(15, 'NPWP must be at least 15 digits'),
  category: z.string().min(1, 'Please select a category'),
  description: z.string().optional(),
  agree: z.boolean().refine((val) => val, 'You must agree to the terms'),
});

type FormValues = z.infer<typeof formSchema>;

export function VendorForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      agree: false,
    },
  });

  const onSubmit = async (_data: FormValues) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success('Registration Submitted', {
        description:
          'Thank you for registering. Our procurement team will review your application and contact you soon.',
      });
      reset();
    } catch {
      toast.error('Submission Failed', {
        description: 'An error occurred while submitting your registration. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="companyName">Company Name *</Label>
          <Input id="companyName" placeholder="PT Example Company" {...register('companyName')} />
          {errors.companyName && (
            <p className="text-destructive text-sm">{errors.companyName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="businessField">Business Field *</Label>
          <Input
            id="businessField"
            placeholder="e.g. Heavy Equipment"
            {...register('businessField')}
          />
          {errors.businessField && (
            <p className="text-destructive text-sm">{errors.businessField.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contactPerson">Contact Person *</Label>
          <Input id="contactPerson" placeholder="John Doe" {...register('contactPerson')} />
          {errors.contactPerson && (
            <p className="text-destructive text-sm">{errors.contactPerson.message}</p>
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
          <Label htmlFor="npwp">Company NPWP *</Label>
          <Input id="npwp" placeholder="12.345.678.9-012.000" {...register('npwp')} />
          {errors.npwp && <p className="text-destructive text-sm">{errors.npwp.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">Business Category *</Label>
        <Select
          onValueChange={(value) => {
            setValue('category', value);
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select business category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Supplier">Supplier</SelectItem>
            <SelectItem value="Contractor">Contractor</SelectItem>
            <SelectItem value="Consultant">Consultant</SelectItem>
            <SelectItem value="Distributor">Distributor</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
        {errors.category && <p className="text-destructive text-sm">{errors.category.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Company Address *</Label>
        <Textarea
          className="min-h-[100px]"
          id="address"
          placeholder="Complete company address"
          {...register('address')}
        />
        {errors.address && <p className="text-destructive text-sm">{errors.address.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Brief Company Description</Label>
        <Textarea
          className="min-h-[100px]"
          id="description"
          placeholder="Tell us a bit about your company and core capabilities"
          {...register('description')}
        />
      </div>

      <div className="flex items-start space-x-2">
        <Checkbox
          checked={watch('agree')}
          id="agree"
          onCheckedChange={(checked) => {
            setValue('agree', checked as boolean);
          }}
        />
        <div className="grid gap-1.5 leading-none">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="agree"
          >
            I agree to the terms and conditions
          </label>
          <p className="text-muted-foreground text-sm">
            I confirm that the information provided is accurate and authentic.
          </p>
        </div>
      </div>
      {errors.agree && <p className="text-destructive text-sm">{errors.agree.message}</p>}

      <Button className="w-full" disabled={isSubmitting} type="submit">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting Registration...
          </>
        ) : (
          'Submit Registration'
        )}
      </Button>
    </form>
  );
}

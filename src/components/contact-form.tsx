'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { cn } from '@/lib/utils';
import { ArrowRight, Mail, Phone, User } from 'lucide-react';
import { useTransition } from 'react';
import { Icons } from './icons';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

// Utilisation de refine avec un message d'erreur personnalisé pour "consent"
const formSchema = z.object({
  fullName: z.string().min(2, 'Nom trop court'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Numéro invalide'),
  services: z.array(z.string()).min(1, 'Choisissez au moins un service'),
  message: z.string().min(10, 'Message trop court'),
  consent: z.boolean().default(false),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  const [isPending, startTransition] = useTransition();

  // Pour consent, on prend "on" ou "off" depuis watch
  const consentValue = watch('consent');

  const selectedServices = watch('services') || [];

  const handleCheckboxChange = (service: string) => {
    setValue(
      'services',
      selectedServices.includes(service)
        ? selectedServices.filter((s) => s !== service)
        : [...selectedServices, service]
    );
  };

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    startTransition(async () => {
      try {
        await fetch('/api/contact', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        // reset();
      } catch (error) {
        console.log(error);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex-1 space-y-4">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="space-y-2 w-full">
          <Label className="font-bold">Nom complet</Label>
          <div className="relative">
            <User className="absolute left-3 size-4 top-3 text-gray-500" />
            <Input
              {...register('fullName')}
              placeholder="William FORT"
              className="pl-10"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-2">
                {errors.fullName.message}
              </p>
            )}
          </div>
        </div>
        <div className="space-y-2 w-full">
          <Label className="font-bold">Adresse email</Label>
          <div className="relative">
            <Mail className="absolute left-3 size-4 top-3 text-gray-500" />
            <Input
              {...register('email')}
              placeholder="contact@williamfort.fr"
              className="pl-10 "
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label className="font-bold">Numéro de téléphone</Label>
        <div className="relative">
          <Phone className="absolute left-3 size-4 top-3 text-gray-500" />
          <Input
            {...register('phone')}
            placeholder="06 00 00 00 00"
            className="pl-10 "
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-2">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <Label className="font-bold">Service(s) sollicité(s)</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-4">
          {['Développement de votre site internet', 'Automatisation(s)'].map(
            (service, i) => (
              <div
                key={i}
                className="flex items-center whitespace-nowrap space-x-2"
              >
                <Checkbox
                  id={i.toString()}
                  checked={selectedServices.includes(service)}
                  onCheckedChange={() => handleCheckboxChange(service)}
                />
                <label
                  htmlFor={i.toString()}
                  className="select-none cursor-pointer"
                >
                  {service}
                </label>
              </div>
            )
          )}
        </div>
        {errors.services && (
          <p className="text-red-500 text-sm mt-2">{errors.services.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label className="font-bold">Message</Label>
        <Textarea {...register('message')} placeholder="Votre message" />
        {errors.message && (
          <p className="text-red-500 text-sm mt-2">{errors.message.message}</p>
        )}
      </div>

      <div className="flex items-center whitespace-nowrap space-x-2">
        <Checkbox
          id="consent"
          checked={consentValue}
          onCheckedChange={() => setValue('consent', !consentValue)}
        />
        <label htmlFor="consent" className="select-none cursor-pointer text-sm">
          J&apos;accepte que mes informations soient stockées et utilisées pour
          être recontacté(e).
        </label>
      </div>
      {errors.consent && (
        <p className="text-red-500 text-sm mt-2">{errors.consent.message}</p>
      )}

      <Button
        type="submit"
        disabled={isPending}
        className={cn(
          'w-full transition-all hover:opacity-80 active:scale-[98%] ease-in-out duration-300',
          {
            'cursor-not-allowed opacity-50': isPending,
          }
        )}
      >
        {isPending ? (
          <Icons.spinner className="h-5 w-5 animate-spin" />
        ) : (
          <>
            Envoyer
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}

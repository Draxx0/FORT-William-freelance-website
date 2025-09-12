'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import confetti from 'canvas-confetti';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { cn } from '@/lib/utils';
import { ArrowRight, Mail, Phone, User } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState, useTransition } from 'react';
import { Icons } from './icons';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
} from './ui/alert-dialog';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

const formSchema = z.object({
  fullName: z.string().min(2, 'Veuillez renseigner votre nom et prénom.'),
  email: z.string().email('Email invalide.'),
  phone: z.string().min(10, 'Numéro invalide.'),
  services: z.array(z.string()).min(1, 'Choisissez au moins un service.'),
  message: z
    .string()
    .min(10, 'Message trop court, veuillez détailler votre demande.'),
  consent: z.boolean().refine((value) => value === true, {
    message: 'Veuillez accepter les conditions.',
  }),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  const [showAlert, setShowAlert] = useState(false);

  const [isPending, startTransition] = useTransition();

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
        setShowAlert(true);

        reset({
          email: '',
          phone: '',
          message: '',
          fullName: '',
          services: [],
          consent: false,
        });
      } catch (error) {
        console.log(error);
      }
    });
  };

  useEffect(() => {
    if (showAlert) {
      confetti({
        particleCount: 100,
        spread: 70,
        colors: ['#dd3e3e', '#dd3e3e', '#dd3e3e', '#dd3e3e'],
        disableForReducedMotion: true,
        drift: 0.1,
        origin: { x: 0.5, y: 0.5 },
      });
    }
  }, [showAlert]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                className="pl-10"
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
              className="pl-10"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-2">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <Label className="font-bold">Service(s) sollicité(s)</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-4">
            {['Développer mon site', 'Créer mon automatisation'].map(
              (service, i) => (
                <Controller
                  key={i}
                  name="services"
                  control={control}
                  defaultValue={[]}
                  rules={{ required: 'Choisissez au moins un service' }}
                  render={({ field }) => (
                    <div className="flex items-center whitespace-nowrap space-x-2">
                      <Checkbox
                        id={i.toString()}
                        checked={field.value.includes(service)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            field.onChange([...field.value, service]);
                          } else {
                            field.onChange(
                              field.value.filter((s) => s !== service)
                            );
                          }
                        }}
                      />
                      <label
                        htmlFor={i.toString()}
                        className="select-none cursor-pointer"
                      >
                        {service}
                      </label>
                    </div>
                  )}
                />
              )
            )}
          </div>
          {errors.services && (
            <p className="text-red-500 text-sm mt-2">
              {errors.services.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label className="font-bold">Message</Label>
          <Textarea {...register('message')} placeholder="Votre message" />
          {errors.message && (
            <p className="text-red-500 text-sm mt-2">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <Controller
            name="consent"
            control={control}
            defaultValue={false}
            rules={{ required: 'Veuillez accepter les conditions.' }}
            render={({ field }) => (
              <Checkbox
                id="consent"
                checked={field.value ?? false}
                onCheckedChange={(checked) => field.onChange(checked === true)}
              />
            )}
          />
          <label
            htmlFor="consent"
            className="select-none cursor-pointer text-sm"
          >
            J&apos;accepte que mes informations soient stockées et utilisées
            pour être recontacté(e).
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
      <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
        <AlertDialogContent>
          <div className="relative overflow-hidden flex items-center">
            <Image
              src={'/profile.png'}
              alt="Photo de William FORT"
              width={175}
              height={175}
              quality={100}
              className="object-contain pointer-events-none relative top-6"
            />

            <div className="p-6 h-full flex flex-col justify-between flex-1">
              <div className="space-y-4">
                <AlertDialogTitle>Merci pour votre requête 🤝</AlertDialogTitle>
                <AlertDialogDescription>
                  Votre message a bien été envoyé. J&apos;ai pris en compte vos
                  informations et je reviendrai vers vous dans les plus brefs
                  délais pour discuter de vos besoins. Si vous avez
                  d&apos;autres questions ou souhaitez apporter des
                  modifications à votre demande, n&apos;hésitez pas à me
                  contacter à nouveau. Merci beaucoup pour votre confiance.
                </AlertDialogDescription>
              </div>
              <AlertDialogFooter className="mt-4">
                <AlertDialogAction onClick={() => setShowAlert(false)}>
                  OK
                </AlertDialogAction>
              </AlertDialogFooter>
            </div>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

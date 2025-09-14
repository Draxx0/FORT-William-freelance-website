'use client';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const newsletterSchema = z.object({
  email: z.string().email('Veuillez entrer une adresse email valide'),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export const Newsletter = () => {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    startTransition(async () => {
      try {
        const response = await fetch('/api/newsletter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
          toast.success('Inscription réussie !', {
            description: 'Vérifiez votre boîte mail.',
            duration: 5000,
          });
          reset();
        } else if (response.status === 409) {
          toast.info('Vous êtes déjà inscrit, merci !', {
            description: result.message,
            duration: 4000,
          });
        } else {
          toast.error('Erreur', {
            description: result.message || 'Une erreur est survenue.',
            duration: 4000,
          });
        }
      } catch (error) {
        toast.error('Erreur', {
          description: 'Une erreur est survenue. Veuillez réessayer.',
          duration: 4000,
        });
      }
    });
  };

  return (
    <section id="newsletter">
      <div className="px-5 py-14 lg:px-0">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-y-5 rounded-2xl border border-slate-500/20 bg-neutral-50 p-10 shadow-inner dark:bg-neutral-900">
          <h3 className="mx-auto max-w-2xl text-balance text-center text-2xl font-bold text-neutral-800 dark:text-white md:text-3xl lg:text-4xl">
            Restez informé de mes derniers articles et conseils
          </h3>
          <p className="mx-auto text-balance text-center md:text-lg text-neutral-600 dark:text-neutral-300">
            Recevez directement dans votre boîte mail mes articles sur le
            développement web, l&apos;automatisation et les bonnes pratiques.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full max-w-md flex-col gap-4"
          >
            <div className="flex gap-2">
              <Input
                {...register('email')}
                type="email"
                placeholder="Votre adresse email"
                className="flex-1"
                disabled={isPending}
              />
              <Button type="submit" disabled={isPending} className="px-6">
                {isPending ? (
                  <Icons.spinner className="h-5 w-5 animate-spin" />
                ) : (
                  "S'inscrire"
                )}
              </Button>
            </div>

            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

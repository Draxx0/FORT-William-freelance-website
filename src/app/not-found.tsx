'use client';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, Home, Share2Icon } from 'lucide-react';
import Link from 'next/link';

const ease = [0.16, 1, 0.3, 1];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease }}
          className="space-y-6"
        >
          <div className="relative">
            <motion.h1
              className="text-8xl md:text-9xl font-bold  text-primary"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              404
            </motion.h1>
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100">
              Oups ! Page introuvable
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
              La page que vous recherchez semble avoir disparu dans les méandres
              du web. Pas de panique, je vais vous aider à retrouver votre
              chemin !
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: 'default', size: 'lg' }),
                'group relative overflow-hidden bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:opacity-80'
              )}
            >
              <Home className="mr-2 h-5 w-5" />
              Retour à l&apos;accueil
            </Link>

            <button
              onClick={() => window.history.back()}
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'group relative overflow-hidden border-2 border-primary/20 hover:border-primary/40 text-neutral-700 dark:text-neutral-300 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:opacity-80'
              )}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Page précédente
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6, ease }}
            className="pt-12"
          >
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-6">
              Ou explorez mes services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/services/site-vitrine"
                className="group p-4 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">
                      Site vitrine
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Création de sites web modernes
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                href="/services/automatisations"
                className="group p-4 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Share2Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">
                      Automatisations
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Optimisez vos processus
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6, ease }}
            className="pt-8 border-t border-neutral-200 dark:border-neutral-700"
          >
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Besoin d&apos;aide ?{' '}
              <Link
                href="mailto:williamfort.work@gmail.com"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Contactez-moi
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

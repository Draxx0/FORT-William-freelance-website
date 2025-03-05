'use client';
import { motion } from 'framer-motion';
const ease = [0.16, 1, 0.3, 1];
export const BlogPageHeader = () => {
  return (
    <div className="text-center py-16 space-y-8">
      <motion.h1
        className="text-3xl font-bold text-foreground sm:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease,
        }}
      >
        Découvrez comment améliorer vos projets grâce au web et à
        l’automatisation
      </motion.h1>

      <motion.p
        className="text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-9"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease,
        }}
      >
        Explorez comment le développement web et l&apos;automatisation peuvent
        optimiser vos projets et améliorer vos résultats.
      </motion.p>
    </div>
  );
};

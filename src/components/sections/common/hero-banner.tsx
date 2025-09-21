'use client';

import { Icons } from '@/components/icons';
import { BorderBeam } from '@/components/magicui/border-beam';
import Safari from '@/components/safari';
import Section from '@/components/section';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Tag } from '../../ui/tag';

type Props = {
  tag: string;
  title: string[];
  description: string;
  cta: string;
  image?: {
    src: string;
  };
  video?: {
    src: string;
  };
  breadcrumb?: {
    currentPage: string;
    intermediatePages?: {
      href: string;
      text: string;
    }[];
  };
  className?: string;
};

const ease = [0.16, 1, 0.3, 1];

export const HeroBanner = ({
  tag,
  title,
  description,
  cta,
  image,
  video,
  breadcrumb,
  className,
}: Props) => {
  return (
    <Section className={cn('mb-24', className)}>
      {breadcrumb && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mb-8"
        >
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
              </BreadcrumbItem>

              {breadcrumb.intermediatePages &&
                breadcrumb.intermediatePages.map((page, index) => (
                  <>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem key={index}>
                      <BreadcrumbLink href={page.href}>
                        {page.text}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </>
                ))}
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{breadcrumb.currentPage}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </motion.div>
      )}
      <div className="flex flex-col md:flex-row justify-between gap-12">
        <div className="space-y-4 md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
          >
            <Tag>{tag}</Tag>
          </motion.div>

          <motion.h1
            className="text-2xl md:text-3xl font-medium leading-tight text-foreground"
            initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease,
              staggerChildren: 0.2,
            }}
          >
            {title.map((text, index) => (
              <motion.span
                key={index}
                className="inline-block px-1  text-balance font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease,
                }}
              >
                {text}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-9"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.8,
              ease,
            }}
          >
            {description}
          </motion.p>

          <motion.div
            className="w-fit mt-6 flex max-w-2xl flex-col sm:flex-row sm:space-x-4 sm:space-y-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease }}
          >
            <Link
              href="#contact"
              className={cn(
                buttonVariants({ variant: 'default' }),
                'w-full active:scale-[98%] transition-all ease-in-out duration-300 hover:opacity-80 sm:w-auto dark:text-white text-background flex gap-2'
              )}
            >
              {cta}
              <Icons.logo className="h-6 w-6" />
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, ease }}
        >
          <div className="max-h-[400px] min-h-auto rounded-md shadow-md relative">
            {video ? (
              <Safari
                url="https://williamfort.fr"
                videoUrl={video.src}
                className="w-full h-full rounded-md"
              />
            ) : (
              <Safari
                url="https://williamfort.fr"
                src={image?.src || ''}
                className="w-full h-full rounded-md"
              />
            )}
            <BorderBeam duration={8} size={100} borderWidth={2} />
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

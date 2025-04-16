import { Post } from '@/lib/blog';
import { formatDate } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogCard({
  data,
  priority,
}: {
  data: Post;
  priority?: boolean;
}) {
  return (
    <Link href={`/blog/${data.slug}`} className="block">
      <div className="bg-background max-h-[425px] min-h-[425px] md:max-h-[475px] md:min-h-[475px] rounded-lg p-4 mb-4 border hover:border-primary transition-border duration-200">
        {data.image && (
          <Image
            className="rounded-t-lg object-cover w-full h-[200px] border mb-4"
            src={data.image}
            width={100}
            height={100}
            sizes="100vw"
            alt={data.title}
            priority={priority}
          />
        )}
        {!data.image && <div className="bg-gray-200 h-[100px] mb-4 rounded" />}
        <div className="flex-1">
          {' '}
          <p className="mb-2">
            <time
              dateTime={data.publishedAt}
              className="text-sm text-muted-foreground"
            >
              {formatDate(data.publishedAt)}
            </time>
          </p>
          <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
          <p className="text-foreground mb-4">
            {data.summary.length > 120
              ? data.summary.slice(0, 120) + '...'
              : data.summary}
          </p>
        </div>
      </div>
    </Link>
  );
}

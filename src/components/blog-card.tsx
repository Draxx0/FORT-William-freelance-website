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
    <Link href={`/blog/${data.slug}`} className="block group">
      <div className="bg-background flex flex-col justify-between max-h-[400px] min-h-[400px] md:max-h-[500px] md:min-h-[500px] border transition-all duration-300 overflow-hidden">
        {data.image && (
          <div className="overflow-hidden mb-2">
            <Image
              className="object-cover w-full h-[200px] border transition-transform duration-300 group-hover:scale-110"
              src={data.image}
              width={100}
              height={100}
              sizes="100vw"
              alt={data.title}
              priority={priority}
            />
          </div>
        )}
        {!data.image && <div className="bg-gray-200 h-[100px] mb-2" />}
        <div className="flex-1 h-full  p-4 flex flex-col justify-between">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold mb-2 transition-all duration-300 group-hover:underline group-hover:underline-offset-2">
              {data.title}
            </h3>
            <p className="text-muted-foreground mb-4 line-clamp-4">
              {data.summary}
            </p>
          </div>

          <p className="mb-2">
            <time
              dateTime={data.publishedAt}
              className="text-sm text-foreground"
            >
              {formatDate(data.publishedAt)}
            </time>
          </p>
        </div>
      </div>
    </Link>
  );
}

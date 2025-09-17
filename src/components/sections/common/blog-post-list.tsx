'use client';

import BlogCard from '@/components/blog-card';
import { Post } from '@/lib/blog';
import { useIntersectionObserver } from '@/lib/hooks/use-intersection-observer';
import { useEffect, useState } from 'react';

interface BlogPostListProps {
  initialPosts: Post[];
  allPosts: Post[];
}

export const BlogPostList = ({ initialPosts, allPosts }: BlogPostListProps) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const [loadMoreRef, entry] = useIntersectionObserver({
    threshold: 0,
    rootMargin: '100px',
  });

  useEffect(() => {
    if (entry?.isIntersecting && hasMore && !isLoading) {
      loadMorePosts();
    }
  }, [entry?.isIntersecting, hasMore, isLoading]);

  const loadMorePosts = () => {
    setIsLoading(true);

    setTimeout(() => {
      const currentCount = posts.length;
      const nextPosts = allPosts.slice(currentCount, currentCount + 6);

      if (nextPosts.length === 0) {
        setHasMore(false);
      } else {
        setPosts((prev) => [...prev, ...nextPosts]);
      }

      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, idx) => (
          <BlogCard key={post.slug} data={post} priority={idx <= 5} />
        ))}
      </div>

      {hasMore && (
        <div ref={loadMoreRef} className="flex justify-center py-8">
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
              <span className="text-muted-foreground">
                Chargement des articles...
              </span>
            </div>
          ) : (
            <div className="text-muted-foreground text-sm">
              Faites défiler pour voir plus d&apos;articles
            </div>
          )}
        </div>
      )}

      {!hasMore && posts.length > 6 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">
            Vous avez vu tous les articles disponibles
          </p>
        </div>
      )}
    </div>
  );
};

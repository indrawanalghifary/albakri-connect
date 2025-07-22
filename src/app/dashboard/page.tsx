'use client';

import * as React from 'react';
import { CreatePost } from '@/components/feed/CreatePost';
import { CeramahPost } from '@/components/feed/CeramahPost';
import { ceramahPosts } from '@/lib/data';
import { Skeleton } from '@/components/ui/skeleton';

const POSTS_PER_PAGE = 3;

export default function FeedPage() {
  const [posts, setPosts] = React.useState(ceramahPosts.slice(0, POSTS_PER_PAGE));
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasMore, setHasMore] = React.useState(ceramahPosts.length > POSTS_PER_PAGE);
  const observerRef = React.useRef<IntersectionObserver | null>(null);

  const loadMorePosts = React.useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      const currentLength = posts.length;
      const newPosts = ceramahPosts.slice(currentLength, currentLength + POSTS_PER_PAGE);

      if (newPosts.length > 0) {
        setPosts(prevPosts => [...prevPosts, ...newPosts]);
      }
      
      if (currentLength + newPosts.length >= ceramahPosts.length) {
        setHasMore(false);
      }
      setIsLoading(false);
    }, 500); // Simulate network delay
  }, [posts.length]);

  const loadMoreRef = React.useCallback((node: HTMLDivElement | null) => {
    if (isLoading) return;
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMorePosts();
      }
    });

    if (node) observerRef.current.observe(node);
  }, [isLoading, hasMore, loadMorePosts]);


  return (
    <div className="space-y-6">
      <CreatePost />
      {posts.map((post) => (
        <CeramahPost key={post.id} post={post} />
      ))}
      
      {hasMore && (
        <div ref={loadMoreRef} className="flex justify-center items-center py-6">
          <div className="space-y-6 w-full">
            <div className="space-y-4">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            <Skeleton className="w-full h-[400px]" />
          </div>
        </div>
      )}
      {!hasMore && (
        <p className="text-center text-muted-foreground py-6">
          You have reached the end.
        </p>
      )}
    </div>
  );
}

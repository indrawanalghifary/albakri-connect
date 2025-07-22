import { CreatePost } from '@/components/feed/CreatePost';
import { CeramahPost } from '@/components/feed/CeramahPost';
import { ceramahPosts } from '@/lib/data';

export default function FeedPage() {
  return (
    <div className="space-y-6">
      <CreatePost />
      {ceramahPosts.map((post) => (
        <CeramahPost key={post.id} post={post} />
      ))}
    </div>
  );
}

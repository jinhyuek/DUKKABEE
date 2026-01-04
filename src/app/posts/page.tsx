import PostCard from '@/app/posts/_components/PostCard';
import { MOCK_POSTS } from '@/app/posts/mock';
import Link from 'next/link';

const PostsPage = () => {
  return (
    <div className="container py-12 lg:max-w-4xl">
      {/* Title section */}
      <div className="mb-8">
        <h1 className="mb-2 text-4xl font-bold">포스팅</h1>
        <p className="text-muted-foreground">노트 · 빌드 · TIL</p>
      </div>

      <div className="mb-8 grid gap-12">
        {MOCK_POSTS.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;

import { Post } from '@/app/posts/type';
import { Badge } from '@/components/ui/Badge';
import Image from 'next/image';
import Link from 'next/link';

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Link key={post.slug} href={`/posts/${post.slug}`}>
      <div className="group flex gap-8 transition-colors hover:border-primary">
        <div className="grow space-y-3">
          <div className="flex items-start justify-between gap-4">
            <h2 className="line-clamp-1 text-xl font-semibold transition-colors group-hover:text-primary">
              {post.title}
            </h2>
            <Badge variant="secondary" className="shrink-0">
              {post.category}
            </Badge>
          </div>
          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {post.summary}
          </p>
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <time className="shrink-0 text-sm text-muted-foreground">{post.date}</time>
          </div>
        </div>

        <div className="relative hidden shrink-0 overflow-hidden rounded-2xl sm:block sm:h-24 sm:w-36">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;

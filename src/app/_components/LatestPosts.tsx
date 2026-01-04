import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const mockPosts = {
  note: [
    {
      id: 1,
      title: 'React 18의 새로운 기능 정리',
      date: '2025-01-03',
      excerpt: '동시성 렌더링과 자동 배칭에 대해 알아봅니다',
    },
    {
      id: 2,
      title: 'TypeScript 유틸리티 타입 모음',
      date: '2025-01-02',
      excerpt: '자주 쓰는 유틸리티 타입들을 정리했습니다',
    },
    {
      id: 3,
      title: 'Next.js App Router 핵심 개념',
      date: '2025-01-01',
      excerpt: '서버 컴포넌트와 클라이언트 컴포넌트의 차이',
    },
  ],
  build: [
    {
      id: 4,
      title: 'Vercel 배포 시 환경 변수 오류 해결',
      date: '2025-01-03',
      excerpt: '배포 환경에서만 발생하는 오류 트러블슈팅',
    },
    {
      id: 5,
      title: 'Supabase RLS 정책 적용 삽질기',
      date: '2025-01-02',
      excerpt: 'Row Level Security를 처음 적용하며 겪은 일들',
    },
    {
      id: 6,
      title: 'SSR 페이지 성능 최적화 과정',
      date: '2025-01-01',
      excerpt: '서버 사이드 렌더링 속도를 2배 개선한 방법',
    },
  ],
  til: [
    {
      id: 7,
      title: 'CSS grid의 auto-fit과 auto-fill 차이',
      date: '2025-01-03',
      excerpt: '헷갈리는 두 속성의 동작 방식 비교',
    },
    {
      id: 8,
      title: 'useCallback과 useMemo 제대로 쓰기',
      date: '2025-01-02',
      excerpt: '불필요한 최적화를 피하는 방법',
    },
    {
      id: 9,
      title: 'Jest 비동기 테스트 작성법',
      date: '2025-01-01',
      excerpt: 'async/await와 Promise 테스트하기',
    },
  ],
};

const categories = [
  {
    key: 'note' as const,
    title: '노트',
    description: '짧은 정리',
  },
  {
    key: 'build' as const,
    title: '빌드',
    description: '삽질과 해결',
  },
  {
    key: 'til' as const,
    title: 'TIL',
    description: '오늘 배운 것',
  },
];

const LatestPosts = () => {
  return (
    <section className="container py-16 md:py-20">
      <div className="mb-12">
        <h2 className="mb-3 text-3xl font-bold md:text-4xl">최신 포스팅</h2>
        <p className="text-base text-muted-foreground">
          카테고리별로 정리된 최신 글들을 확인하세요.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {categories.map((category) => (
          <div key={category.key} className="space-y-4">
            <div className="border-b pb-2">
              <h3 className="text-lg font-semibold">{category.title}</h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </div>

            <div className="space-y-7">
              {mockPosts[category.key].map((post) => (
                <Link
                  key={post.id}
                  href={`/posts/${post.id}`}
                  className="group block rounded-lg transition-colors"
                >
                  <div>
                    <h4 className="mb-1 text-lg leading-snug font-medium transition-colors group-hover:text-primary">
                      {post.title}
                    </h4>
                    <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <p className="font-mono text-xs text-muted-foreground">{post.date}</p>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href={`/posts?category=${category.key}`}
              className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            >
              더보기
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;

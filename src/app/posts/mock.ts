import { Post } from '@/app/posts/type';

export const MOCK_POSTS: Post[] = [
  {
    slug: 'react-server-components',
    title: 'React Server Components 깊게 이해하기',
    summary:
      'RSC의 동작 원리와 실제 프로젝트에 적용하면서 배운 것들을 정리합니다. 클라이언트 컴포넌트와의 경계를 어떻게 설정할지가 핵심입니다.',
    date: '2024-01-15',
    category: '노트',
    tags: ['React', 'Next.js'],
    image: 'https://picsum.photos/id/1015/800/400',
  },
  {
    slug: 'blog-design-system',
    title: '개인 블로그 디자인 시스템 구축하기',
    summary:
      'Vercel 스타일에서 영감을 받아 나만의 디자인 시스템을 만드는 과정입니다. 올리브 그린을 Primary로 선택한 이유와 다크모드 구현 방법을 다룹니다.',
    date: '2024-01-12',
    category: '빌드',
    tags: ['Design', 'CSS'],
    image: 'https://picsum.photos/id/1018/800/400',
  },
  {
    slug: 'typescript-generic-tips',
    title: 'TypeScript Generic 실전 팁',
    summary:
      '제네릭을 사용하면서 자주 마주치는 상황들과 해결 방법을 모아봤습니다. 타입 안정성을 유지하면서도 유연한 코드를 작성하는 법.',
    date: '2024-01-10',
    category: '노트',
    tags: ['TypeScript', 'Tips'],
    image: 'https://picsum.photos/id/1019/800/400',
  },
  {
    slug: 'learned-debugging-today',
    title: '오늘 배운 디버깅 기법',
    summary: 'Chrome DevTools의 숨겨진 기능을 발견했다. Source Map을 제대로 활용하는 법.',
    date: '2024-01-08',
    category: 'TIL',
    tags: ['Debugging', 'DevTools'],
    image: 'https://picsum.photos/id/1020/800/400',
  },
  {
    slug: 'supabase-auth-setup',
    title: 'Supabase Auth 설정 완전 정복',
    summary:
      'Supabase 인증을 처음부터 끝까지 설정하는 과정입니다. RLS 정책 설정과 미들웨어 구현까지 실제 프로젝트에 적용한 경험을 공유합니다.',
    date: '2024-01-05',
    category: '빌드',
    tags: ['Supabase', 'Auth'],
    image: 'https://picsum.photos/id/1021/800/400',
  },
  {
    slug: 'css-container-queries',
    title: 'CSS Container Queries 사용법',
    summary: '미디어 쿼리 대신 컨테이너 쿼리를 사용하면 더 유연한 반응형 디자인이 가능합니다.',
    date: '2024-01-03',
    category: 'TIL',
    tags: ['CSS', 'Responsive'],
    image: 'https://picsum.photos/id/1022/800/400',
  },
  {
    slug: 'nextjs-middleware-patterns',
    title: 'Next.js Middleware 패턴 모음',
    summary:
      '인증, 리다이렉션, 로깅 등 다양한 상황에서 미들웨어를 활용하는 패턴들을 정리했습니다. Edge Runtime의 제약사항도 함께 다룹니다.',
    date: '2023-12-28',
    category: '노트',
    tags: ['Next.js', 'Middleware'],
    image: 'https://picsum.photos/id/1023/800/400',
  },
  {
    slug: 'web-performance-optimization',
    title: '웹 성능 최적화 실전 가이드',
    summary:
      'LCP, FID, CLS 개선을 위한 구체적인 방법들입니다. 이미지 최적화부터 코드 스플리팅까지.',
    date: '2023-12-25',
    category: '노트',
    tags: ['Performance', 'Web Vitals'],
    image: 'https://picsum.photos/id/1024/800/400',
  },
];

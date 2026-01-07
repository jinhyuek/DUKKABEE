'use client';

import { Mail, Github, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import Avatar from '@/components/ui/Avatar';
import Link from 'next/link';

const tilQuotes = [
  '타입스크립트는 런타임이 아니라 개발 시간에 오류를 잡아줍니다.',
  '작은 컴포넌트가 좋은 컴포넌트입니다.',
  '테스트 코드는 미래의 나를 위한 선물입니다.',
  '성능 최적화는 측정에서 시작합니다.',
  '좋은 네이밍은 주석보다 강력합니다.',
];

const HeroSection = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const handleNextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % tilQuotes.length);
  };

  return (
    <section className="container py-24 md:py-32">
      <div className="flex flex-col items-center gap-8 text-center">
        <Avatar
          src="/toad-video.mp4"
          fallback="🐸"
          alt="dukkabee-avatar"
          className="size-24 ring-2 ring-primary ring-offset-4 ring-offset-background md:size-32"
        />

        <div className="space-y-2">
          <h1 className="text-4xl font-bold md:text-5xl">dukkabee</h1>
          <p className="text-base text-muted-foreground">by Jinhyuek</p>
        </div>

        <p className="max-w-2xl text-lg md:text-xl">길(吉)</p>

        <p className="max-w-2xl text-base text-muted-foreground">
          개발하며 마주한 문제와 해결을 차곡차곡 기록합니다. 가끔은 행운처럼 도움이 되길.
        </p>

        <div className="mt-4 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/posts">
              포스팅 보기
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="https://github.com/jinhyuek" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 size-4" />
              GitHub
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="mailto:yjjongy1@gmail.com">
              <Mail className="mr-2 size-4" />
              이메일
            </a>
          </Button>
        </div>

        <div className="mt-8 w-full max-w-2xl rounded-lg border bg-card p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 text-left">
              <p className="mb-2 text-xs font-medium text-primary">오늘의 한 줄 💡</p>
              <p className="text-sm">{tilQuotes[currentQuote]}</p>
            </div>
            <Button variant="ghost" size="sm" onClick={handleNextQuote}>
              다음
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

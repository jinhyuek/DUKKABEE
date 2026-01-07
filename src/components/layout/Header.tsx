'use client';

import Link from 'next/link';
import { Github, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/Button';

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-semibold">dukkabee</span>
          <span className="size-1.5 rounded-full bg-primary" />
        </Link>

        <nav className="mt-1 hidden flex-1 items-start gap-6 pl-12 md:flex">
          <Link
            href="/posts"
            className="font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            Posts
          </Link>
          <Link
            href="/"
            className="font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            Guestbook
          </Link>
          {/* <Link
            href="/links"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            About
          </Link> */}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="테마 전환"
          >
            <Sun className="size-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute size-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

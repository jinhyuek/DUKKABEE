import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import ThemeProvider from '@/providers/ThemProvider';
import ScrollProgress from '@/components/layout/ScrollProgress';
import Header from '@/components/layout/Header';

export const metadata: Metadata = {
  title: 'dukkabee | 개발 블로그',
  description: '',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollProgress />
          <Header />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

'use client';

import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 right-0 left-0 z-50 h-0.5 bg-border">
      <div
        className="h-full bg-primary transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;

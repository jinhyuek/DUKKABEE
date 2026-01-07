'use client';

import Image from 'next/image';
import { cn } from '@/utils/cn';
import { useState } from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
  className?: string;
  size?: number;
}

const Avatar = ({ src, alt = 'Avatar', fallback, className, size = 32 }: AvatarProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={cn('relative flex shrink-0 overflow-hidden rounded-full', className)}>
      {src && !imageError ? (
        <video
          src={src}
          data-slot="avatar-video"
          className="size-full object-cover"
          autoPlay
          muted
          playsInline
          onError={() => setImageError(true)}
        />
      ) : (
        <div
          data-slot="avatar-fallback"
          className="flex size-full items-center justify-center bg-muted text-muted-foreground"
        >
          {fallback || alt[0]?.toUpperCase()}
        </div>
      )}
    </div>
  );
};

export default Avatar;

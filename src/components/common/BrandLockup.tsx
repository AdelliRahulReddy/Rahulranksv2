'use client';

import Image from 'next/image';
import Link from 'next/link';

import favicon from '@/assets/img/logo/favicon.png';

type BrandLockupProps = {
  className?: string;
  textColor: string;
};

const BrandLockup = ({ className, textColor }: BrandLockupProps) => {
  return (
    <Link className={className} href="/">
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          lineHeight: 1,
        }}
      >
        <Image
          src={favicon}
          alt="Reddystack logo"
          style={{
            width: 'clamp(32px, 2vw, 38px)',
            height: 'auto',
            flexShrink: 0,
          }}
        />
        <span
          style={{
            color: textColor,
            fontFamily: 'var(--tp-ff-dmsans)',
            fontSize: 'clamp(22px, 1.6vw, 30px)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            textTransform: 'lowercase',
            whiteSpace: 'nowrap',
          }}
        >
          reddystack
        </span>
      </span>
    </Link>
  );
};

export default BrandLockup;

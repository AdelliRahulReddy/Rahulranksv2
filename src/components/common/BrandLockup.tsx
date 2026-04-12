'use client';

import Image from 'next/image';
import Link from 'next/link';

import favicon from '@/assets/img/logo/favicon.png';

type BrandLockupProps = {
  className?: string;
  textColor: string;
};

const BrandLockup = ({ className, textColor }: BrandLockupProps) => {
  const boostContrast = textColor === "var(--tp-common-white)";

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
            width: 'clamp(36px, 2.2vw, 42px)',
            height: 'auto',
            flexShrink: 0,
            filter: boostContrast ? 'brightness(1.08) contrast(1.12)' : 'none',
          }}
        />
        <span
          style={{
            color: textColor,
            fontFamily: 'var(--tp-ff-dmsans)',
            fontSize: 'clamp(22px, 1.6vw, 30px)',
            fontWeight: 700,
            fontStyle: 'normal',
            letterSpacing: '-0.04em',
            whiteSpace: 'nowrap',
          }}
        >
          Reddystack
        </span>
      </span>
    </Link>
  );
};

export default BrandLockup;

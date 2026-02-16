// * Next.js
import Image from 'next/image';
import Link from 'next/link';

// * React
import { memo } from 'react';

type TLogoProps = {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
};

const Logo = memo(
  ({
    src = '/assets/images/logo.png',
    alt = 'Logo',
    width = 70,
    height = 70,
  }: TLogoProps) => {
    return (
      <Link href="/">
        <Image src={src} alt={alt} width={width} height={height} />
      </Link>
    );
  },
);

Logo.displayName = 'Logo';

export default Logo;

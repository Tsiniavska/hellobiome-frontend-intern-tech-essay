'use client';

// * Next.js
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// * React
import { memo } from 'react';

// * Data
import LIST from './Navigation.data';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="flex text-text font-accent">
      <ul className="flex gap-12">
        {LIST.map(({ title, to }) => (
          <Item key={title} to={to} title={title} pathname={pathname}></Item>
        ))}
      </ul>
    </nav>
  );
};

type ItemProps = {
  to: string;
  title: string;
  pathname: string | null;
};

const Item = memo(({ to, title, pathname }: ItemProps) => {
  const isActive = pathname === to;

  return (
    <li>
      <Link
        href={to}
        className={`p-2 flex items-center gap-1 hover:text-accent transition-colors duration-300 ${
          isActive ? 'text-accent' : 'text-white'
        }`}
      >
        {title}
      </Link>
    </li>
  );
});

Item.displayName = 'Item';

export default Navigation;

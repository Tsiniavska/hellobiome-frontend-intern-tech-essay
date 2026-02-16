// * Next.js
import type { Metadata } from 'next';
import localFont from 'next/font/local';

// * Components
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

// * Styles
import './globals.css';

const inter = localFont({
  src: [
    {
      path: '../public/assets/fonts/inter/Inter18pt-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/inter/Inter18pt-Regular.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/inter/Inter18pt-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-base',
});

const montserrat = localFont({
  src: [
    {
      path: '../public/assets/fonts/montserrat/Montserrat-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/montserrat/Montserrat-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/montserrat/Montserrat-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-accent',
});

export const metadata: Metadata = {
  title: 'HelloBiome Test Task',
  description: 'Frontend test assignment',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

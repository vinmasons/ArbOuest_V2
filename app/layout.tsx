import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import clsx from 'clsx';
import './globals.css';
import Script from 'next/script';
import { Suspense } from 'react';
const degular = localFont({
  src: [
    {
      path: './components/fonts/Degular-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './components/fonts/Degular-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './components/fonts/Degular-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './components/fonts/Degular-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-degular',
});
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={clsx(
        'font-sans scroll-smooth bg-soft-cream antialiased',
        degular.variable
      )}
    >
      <Script
        strategy="worker"
        type="text/javascript"
        src="//static.klaviyo.com/onsite/js/klaviyo.js?company_id=RN4ngH"
      ></Script>
      <body>
        <Suspense>
          <Navbar />
        </Suspense>

        {children}
        <Footer />
      </body>
    </html>
  );
}
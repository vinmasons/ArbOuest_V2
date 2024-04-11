import { Metadata } from 'next';
import { VisualEditing, toPlainText } from 'next-sanity';
import { draftMode } from 'next/headers';
import '../globals.css';

import localFont from 'next/font/local';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import clsx from 'clsx';

import Script from 'next/script';
import AlertBanner from './alert-banner';

import * as demo from '@/sanity/lib/demo';
import { sanityFetch } from '@/sanity/lib/fetch';
import { SettingsQueryResponse, settingsQuery } from '@/sanity/lib/queries';
import { resolveOpenGraphImage } from '@/sanity/lib/utils';
import { Suspense } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityFetch<SettingsQueryResponse>({
    query: settingsQuery,
    // Metadata should never contain stega
    stega: false,
  });
  const title = settings?.title || demo.title;
  const description = settings?.description || demo.description;

  const ogImage = resolveOpenGraphImage(settings?.ogImage);
  let metadataBase: URL | undefined = undefined;
  try {
    metadataBase = settings?.ogImage?.metadataBase
      ? new URL(settings.ogImage.metadataBase)
      : undefined;
  } catch {
    // ignore
  }
  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: toPlainText(description),
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  };
}

const degular = localFont({
  src: [
    {
      path: '../components/fonts/Degular-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../components/fonts/Degular-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../components/fonts/Degular-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../components/fonts/Degular-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-degular',
});

export default function BlogLayout({
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
          {' '}
          <Navbar />
        </Suspense>

        {draftMode().isEnabled && <AlertBanner />}

        {children}

        {draftMode().isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}

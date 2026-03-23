import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Waun Broderick',
    default: 'Waun Broderick - Software engineer, founder, and a veteran',
  },
  description:
    'I’m Waun, a software engineer, builder, and entrepreneur. I am currently building AI Voice Agents @ Quo, and architecting future AI standards in the legal space with Cordelia.',
  alternates: {
    types: {
      //'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}

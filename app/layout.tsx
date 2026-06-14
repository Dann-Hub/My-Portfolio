import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Open_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({ variable: '--font-open-sans', subsets: ['latin'] })
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Daniel Boateng | Electrical Engineer & Software Developer',
  description:
      'Portfolio of Daniel Osei Boateng, an Elelctrical Engineer & Software Developer who shapes and activates brands through insight, vision and execution.',
  icons: {
    // icon: [
    //   {
    //     url: '/icon-light-32x32.png',
    //     media: '(prefers-color-scheme: light)',
    //   },
    //   {
    //     url: '/icon-dark-32x32.png',
    //     media: '(prefers-color-scheme: dark)',
    //   },
    //   {
    //     url: '/icon.svg',
    //     type: 'image/svg+xml',
    //   },
    // ],
    // apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html
          lang="en"
          className={`${openSans.variable} ${playfair.variable} bg-background`}
      >
      <body className="font-sans antialiased">
      {children}
      {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
      </html>
  )
}

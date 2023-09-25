import { Header } from '@/components/shared/header/header'
import './globals.css'
import './custom.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Educenty',
  description: 'Smartest ways to personalized education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // lang="en"
  return (
    <html >
    <body className={inter.className}>
    <Header/>
    <div className='p-[30px]'></div>
      <div>{children}</div>
      </body>
    </html>
  )
}

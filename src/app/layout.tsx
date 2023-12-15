import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Heater/Header'
import { Footer } from '@/components/Footer/Footer'
import { test } from 'node:test'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: '作品集',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>

        <Footer>
          test
          {/* children  中身ない時この書き方で！<footer />*/}
        </Footer>
      </body>
    </html>
  )
}

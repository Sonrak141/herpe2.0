import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/organisms/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Herpe S.A.S.',
  description: 'TROQUELES PROGRESIVOS CON ALIMENTADORES DE PIEZAS, FABRICAMOS CONEXIONES PARA ELECTRODOMÉSTICOS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

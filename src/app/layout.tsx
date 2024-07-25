"use client"
import './globals.scss'
import { Inter } from 'next/font/google'
import BodyClass from '../utils/BodyClass';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        <body>
          <BodyClass />
            {children}
        </body>
      </html>
    </>
  )
}

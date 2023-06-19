import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Car Next Dave',
  description: 'Belajar Next JS David Nasrulloh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        {children}
        </body>
    </html>
  )
}

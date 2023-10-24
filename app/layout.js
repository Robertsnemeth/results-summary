import { Hanken_Grotesk } from 'next/font/google'
import './globals.css'

const hankerGrotesk = Hanken_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'Results Summary',
  description: 'Frontend Mentor Results Summary Challenge',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={hankerGrotesk.className}>{children}</body>
    </html>
  )
}

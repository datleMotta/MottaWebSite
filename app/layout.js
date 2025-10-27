import './globals.css'

export const metadata = {
  title: 'Motta Financial - Expert Financial Services',
  description: 'Professional financial services and advisory solutions tailored to your needs',
  keywords: 'financial services, financial advisor, wealth management, investment planning',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


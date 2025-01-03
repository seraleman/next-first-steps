import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Title',
  description: 'SEO Title',
  keywords: ['About Page', 'Sergio', 'Información'],
}

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-7xl">About Page</h1>
    </div>
  )
}

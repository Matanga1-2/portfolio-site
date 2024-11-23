import Link from 'next/link'
import { MobileMenu } from './mobile-menu'

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="max-w-[70%] mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-green-400 tracking-wider">MG</Link>
          <nav className="hidden md:flex space-x-8">
            <Link key="about-link" href="#about" className="text-sm text-gray-300 hover:text-green-400 transition-colors">About</Link>
            <Link key="blog-link" href="/blog" className="text-sm text-gray-300 hover:text-green-400 transition-colors">Blog</Link>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}


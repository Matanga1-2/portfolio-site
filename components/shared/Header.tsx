import Link from 'next/link'

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="w-full max-w-[90%] md:max-w-[70%] mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-green-400 tracking-wider">MG</Link>
          <nav className="flex space-x-2">
            <Link key="about-link" href="/about" className="text-sm md:text-base font-medium text-gray-300 hover:text-green-400 transition-colors px-2 md:px-3 py-1 md:py-2">About</Link>
            <Link key="projects-link" href="/projects" className="text-sm md:text-base font-medium text-gray-300 hover:text-green-400 transition-colors px-2 md:px-3 py-1 md:py-2">Projects</Link>
            <Link key="blog-link" href="https://blog.matangr.com/" className="text-sm md:text-base font-medium text-gray-300 hover:text-green-400 transition-colors px-2 md:px-3 py-1 md:py-2">Blog</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

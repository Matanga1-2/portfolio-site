import Image from 'next/image'

export function AboutMe() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-[70%] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div key="about-content">
              <h2 key="about-title" className="text-3xl font-bold mb-6">About Me</h2>
              <p key="about-p1" className="text-gray-300 mb-4">
                As a Product Manager specializing in automation and infrastructure platforms,
                I bring a unique blend of technical expertise and strategic vision to every project.
              </p>
              <p key="about-p2" className="text-gray-300">
                My approach combines deep technical understanding with user-centered design,
                ensuring that complex solutions remain accessible and effective.
              </p>
            </div>
            <div key="about-image" className="relative">
              <div key="image-bg" className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-full"></div>
              <Image
                key="profile-image"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Profile%20Matan.jpg-f7L7lDFX0t0JNMXNkU8561RO2C9oTj.jpeg"
                alt="Matan Grady - Product Manager"
                width={400}
                height={400}
                className="relative rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


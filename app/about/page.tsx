'use client'
import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/shared/Footer'
import Image from 'next/image'
import matanProfileImage from '@/assets/images/matan_profile_image.jpg'
import { useScrollToTop } from '@/app/hooks/useScrollToTop'

export default function AboutPage() {
  useScrollToTop()

  return (
    <div className="min-h-screen flex flex-col text-white relative overflow-hidden bg-navy-primary">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20">
        <div className="w-full sm:max-w-[85%] md:max-w-[70%] mx-auto space-y-16 px-4 sm:px-0">
          <section className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-6">
              Hello 👋🏾 ! I&apos;m Matan
            </p>
            <Image
              src={matanProfileImage}
              alt="Matan Grady - Product Manager"
              width={240}
              height={240}
              className="rounded-full mx-auto mb-6"
            />
          </section>

          <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4 text-green-400">Who I Am</h2>
            <p className="text-gray-300 mb-4">
              I&apos;m a product leader passionate about scaling and managing complex systems. With seven years of experience in B2B and B2C, I specialize in transforming intricate technical challenges into elegant, practical solutions.
            </p>
            <p className="text-gray-300">
              I have a strong technical background and a hands-on approach, allowing me to bridge the gap between intricate details and strategic vision. I&apos;m obsessed with productivity and innovation, constantly seeking new topics to learn and innovative challenges to take on.
            </p>
          </section>

          <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4 text-green-400">My Professional Journey</h2>
            <div className="space-y-4">
              <p className="text-gray-300">
                I currently lead AI initiatives and product teams at Port, building internal developer portals that transform how engineering teams work. I launched one of the first AI agents and MCP server in that space along with my amazing team. With seven years of product management experience, I focus on executing complex products that deliver measurable value and drive clear business outcomes.
              </p>
              <p className="text-gray-300">
                Before Port, I worked at Lusha, where I led scalable platform and infrastructure initiatives. I launched two major infrastructure upgrades that reduced maintenance costs by 30% and supported company growth.
              </p>
              <p className="text-gray-300">
                Prior to that, I grew my expertise at theLotter, focusing on the checkout area processing $80M ARR. I improved payment acceptance rates, integrated new vendors and payment options, and led a comprehensive design system and site architecture overhaul.
              </p>
              <p className="text-gray-300">
                Throughout my career, I&apos;ve been driven by a desire to enhance efficiency and deliver impactful solutions that solve real problems for users and businesses.
              </p>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-4 text-green-400">Philosophy and Approach</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  My approach centers on listening deeply to users, cutting through the noise, and relentlessly focusing on shipping products that deliver real value.
                </p>
                <p>
                  I believe in data-driven decision-making and strategic execution, ensuring every feature aligns with user needs and business objectives.
                </p>
                <p>
                  Collaboration drives my process - the best solutions emerge from diverse perspectives and clear communication across teams.
                </p>
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-4 text-green-400">Vision for the Future</h2>
              <p className="text-gray-300 mb-4">
                I&apos;m amazed by the power of AI and do my best to integrate it into my daily tasks, work processes, and product development.
              </p>
              <p className="text-gray-300">
                I&apos;m looking forward to seeing how technology and products continue to change and evolve, particularly as AI transforms how we build and scale complex systems.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}


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
              I&apos;m a versatile Product Manager with over six years of experience in both B2B and B2C environments.
            </p>
            <p className="text-gray-300">
              My unique expertise lies in extreme communication and responsiveness, cross-functional collaboration, and excellence in execution. I bring a robust technical background, high proficiency in developing data-focused solutions and handling complex business algorithms, and a keen eye for detail and user experience.
            </p>
          </section>

          <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4 text-green-400">My Professional Journey</h2>
            <div className="space-y-4">
              <p className="text-gray-300">
                I currently lead two Product Teams at Port (B2B SaaS), building an internal developer portal to improve developer experience. With over seven years of experience as a Product Manager, I&apos;m always looking for ways to become more efficient and optimize my work. My passion lies in scaling, launching, and executing complex products that deliver value.
              </p>
              <p className="text-gray-300">
                Before Port, I worked at Lusha (B2B SaaS), where I led scalable platform and infrastructure initiatives. I launched two major infrastructure upgrades that reduced maintenance costs by 30% and supported company growth.
              </p>
              <p className="text-gray-300">
                Prior to that, my main growth happened at theLotter, a lottery-gaming product, where I focused on the checkout area, processing $80M ARR, improving payment acceptance rates, integrating new vendors and payment options, and leading a new design system and site architecture.
              </p>
              <p className="text-gray-300">
                Throughout my career, I&apos;ve been driven by a desire to enhance efficiency and deliver impactful solutions. I&apos;m excited to continue this journey at Port, contributing to the next generation of developer experience.
              </p>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-4 text-green-400">Philosophy and Approach</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  My approach to product management is based on the belief that great products come from strategic vision and careful execution.
                </p>
                <p>
                  I strongly support user-centered design and data-driven decision-making, ensuring that every feature and enhancement aligns with our users&apos; goals and challenges.
                </p>
                <p>
                  Collaboration is central to my process, as I believe the best solutions arise from diverse perspectives and open communication.
                </p>
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-4 text-green-400">Vision for the Future</h2>
              <p className="text-gray-300 mb-4">
                I am excited about the future of technology and its potential to transform businesses.
              </p>
              <p className="text-gray-300">
                I aim to continue driving innovation in product management, leveraging emerging trends and technologies to create impactful solutions that empower users and drive growth.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}


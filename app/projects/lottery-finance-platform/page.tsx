'use client'
import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/shared/Footer'
import Image from 'next/image'
import { useScrollToTop } from '@/app/hooks/useScrollToTop'
import lotteryImage from '@/assets/images/thelotter_image.webp'

export default function LotteryFinancePlatformPage() {
  useScrollToTop()

  return (
    <div className="min-h-screen flex flex-col text-white relative overflow-hidden bg-navy-primary">
      <Header />
      <main className="flex-grow container mx-auto px-4 pt-24 pb-20">
        <div className="max-w-[70%] mx-auto space-y-16">
          <section className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Lottery Finance Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Leading Platform Innovation By Redesigning Critical Systems
            </p>
            <Image
              src={lotteryImage}
              style={{ objectFit: 'cover', objectPosition: 'top', height: '315px' }}
              alt="Lottery Finance Platform showing various international lottery jackpots"
              width={180}
              height={30}
              className="mx-auto rounded-lg mb-8"
              priority
            />
          </section>

          <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4 text-green-400">Overview</h2>
            <p className="text-gray-300 mb-4">
              As the Product Manager for theLotter (Online Lottery Platform), I identified critical gaps in our finance service and content management systems that could have improved our integration capabilities and international expansion.
            </p>
            <p className="text-gray-300">
              My role involved spearheading a comprehensive redesign of these systems, ensuring scalability, efficiency, and support for new functionalities.
            </p>
          </section>

          <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4 text-green-400">My Role</h2>
            <h3 className="text-2xl font-semibold mb-2 text-blue-400">Finance Service Overhaul</h3>
            <p className="text-gray-300 mb-4">
              I led the initiative to overhaul the outdated finance service, collaborating with three cross-functional teams. My responsibilities included:
            </p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-4">
              <li value={1}><strong>Identifying Gaps:</strong> Recognized the deficiencies in the current finance service processing $80M annually, including compliance standards and the need to upgrade our infrastructure to support PSD 2 regulation (3DS).</li>
              <li value={2}><strong>Discovery Process:</strong> Discussed with other CTOs, studied the regulations, explored fintech industry solutions, and worked with lead engineers to develop a POC.</li>
              <li value={3}><strong>Securing Buy-In:</strong> I gained approval from stakeholders to proceed with the redesign based on the POC findings. As a result, I received the resources of two teams other than mine.</li>
              <li value={4}><strong>Collaborative Development:</strong> Worked closely with development, design, and QA teams to rebuild the finance area from the ground up, enhancing the system to support over eight payment processors, adding seven new payment methods, and supporting the 3DS process.</li>
            </ol>
            <h3 className="text-2xl font-semibold mb-2 text-blue-400">Content Management System Improvement</h3>
            <p className="text-gray-300 mb-4">
              For the content management system, my collaboration with the Content Manager, CTO, and system architect involved:
            </p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2">
              <li value={1}><strong>Identifying Gaps:</strong> I learned the domain thoroughly and explored the market&apos;s best practices and tools available.</li>
              <li value={2}><strong>Proof of Concept:</strong> Developed a POC that integrated third-party tools and internal solutions to streamline content management.</li>
              <li value={3}><strong>Improved Workflow:</strong> I created a workflow that increased the content team&apos;s efficiency and developers&apos; velocity.</li>
              <li value={4}><strong>Securing Buy-In:</strong> I secured the budget and roadmap for integrating the new workflow.</li>
              <li value={5}><strong>Language Expansion:</strong> Enabled support for right-to-left languages and facilitated the addition of new languages.</li>
            </ol>
          </section>

          <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4 text-green-400">Challenges</h2>
            <p className="text-gray-300 mb-4">
              The primary challenges included:
            </p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2">
              <li value={1}>Thinking ahead about our platform and infrastructure.</li>
              <li value={2}>Identifying trends and necessary upgrades.</li>
              <li value={3}>Aligning multiple teams.</li>
              <li value={4}>Maintaining business-as-usual for our millions of users.</li>
            </ol>
          </section>

          <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4 text-green-400">Solutions</h2>
            <ol className="list-decimal list-inside text-gray-300 space-y-2">
              <li value={1}><strong>Finance System Redesign:</strong> Implemented a scalable architecture for the finance service, ensuring compatibility with multiple payment processors and methods and meeting the PSD 2 compliance standards.</li>
              <li value={2}><strong>Content Management Enhancement:</strong> Developed a robust CMS that supported efficient content updates and translation management, facilitating the expansion to additional languages.</li>
            </ol>
          </section>

          <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4 text-green-400">Outcomes</h2>
            <p className="text-gray-300 mb-4">
              These improvements enhanced the system&apos;s efficiency and drove substantial business outcomes:
            </p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2">
              <li value={1}><strong>Compliance and Revenue:</strong> Met the PSD 2 compliance deadline and secured $2M/month in revenue.</li>
              <li value={2}><strong>Enhanced Payment Options:</strong> Broadened the range of payment methods available, improving user experience and increasing transaction volumes.</li>
              <li value={3}><strong>Content Management Automation:</strong> Innovated the content management process for over 1M keys in 14+ languages, resulting in an estimated 20% saving in manual work through a third-party and events-based integration.</li>
              <li value={4}><strong>Scalability:</strong> Established a scalable foundation for future growth and integrations.</li>
            </ol>
          </section>

          <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4 text-green-400">Personal Achievements</h2>
            <p className="text-gray-300 mb-4">
              Throughout three and a half years, I progressed from a BA position to a Product Manager and eventually to a Product Team Leader. I led various squads in different domains in these roles, demonstrating my ability to lead diverse teams and initiatives.
            </p>
            <p className="text-gray-300 mb-4">
              Here are some achievements I&apos;m incredibly proud of:
            </p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2">
              <li value={1}><strong>Career Progression:</strong> Promoted from L3 PM to L5 PM Manager.</li>
              <li value={2}><strong>Product Methodologies:</strong> Managed 6 Product Managers, and improved the quality of the PM team by integrating agile user story writing and mapping techniques.</li>
              <li value={3}><strong>Design System:</strong> Led a 10-person task force of designers and engineers to create the first design system with over 30 components and a style guide, reaching 85% readiness within three months.</li>
              <li value={4}><strong>Billing Stability:</strong> Reached billing stability while reducing refusal rates by 8% by integrating and upgrading six payment processors and ten payment methods.</li>
            </ol>
          </section>

          <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4 text-green-400">Conclusion</h2>
            <p className="text-gray-300">
              My roles in this company exemplified my ability to lead complex, multi-team initiatives, improve system efficiency, and drive significant business outcomes. My involvement in redesigning the finance and content management systems addressed immediate needs and positioned the product Platform for future growth and success.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}


'use client'
import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/shared/Footer'
import Image from 'next/image'
import hrDiagramImage from '@/assets/images/hr_diagram.svg'
import hrComponentsImage from '@/assets/images/hr_components.png'
import { useScrollToTop } from '@/app/hooks/useScrollToTop'

export default function RecruitmentHRSystemPage() {
  useScrollToTop()

  return (
    <div className="min-h-screen flex flex-col text-white relative overflow-hidden bg-navy-primary">
      <Header />
      <main className="flex-grow container mx-auto px-4 pt-24 pb-20">
        <div className="max-w-[70%] mx-auto space-y-16">
          <section className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Recruitment and HR
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Transforming IDF Recruitment from Internal Innovation to Organizational Efficiency
            </p>
          </section>

          <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4 text-green-400">Overview</h2>
            <p className="text-gray-300 mb-4">
              In my journey from a dedicated department tool to a large-scale organizational solution, I developed and scaled recruitment tools that transformed the Special Courses HR processes.
            </p>
            <p className="text-gray-300 mb-4">
              Starting with a tool for my team to address recruitment challenges, my work was recognized at the highest levels, leading to my transition into the main information technology organization.
            </p>
            <p className="text-gray-300">
              Here, I expanded the solution for hundreds of users, significantly improving efficiency and planning across the organization.
            </p>
          </section>

          <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4 text-green-400">Problem</h2>
            <p className="text-gray-300 mb-4">
              Recruitment in the IDF Special Courses faced several challenges:
            </p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2">
              <li><strong>Data Inadequacies:</strong> The primary company data source lacked essential internal data required for recruitment and assignment tasks.</li>
              <li><strong>Manual Processes:</strong> Recruitment and assignment involved extensive manual work, causing inefficiencies.</li>
              <li><strong>Predictive Shortcomings:</strong> Without proper tools, predicting and planning for future needs was difficult, affecting unit stability.</li>
            </ol>
          </section>

          <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4 text-green-400">Solution</h2>
            <h3 className="text-2xl font-semibold mb-2 text-blue-400">Internal Tool Development</h3>
            <p className="text-gray-300 mb-4">
              I initially created an internal recruitment tool using MS Access and Excel to streamline and automate processes. This tool included:
            </p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>Automated Data Integration:</strong> Built a daily updated database with views for relevant roles and tasks, outlier reports to identify gaps and top action recommendations.</li>
              <li><strong>Predictive Analysis:</strong> Developed an Excel-based tool to generate statistical predictions on future movements using historical trends and macros, updated monthly.</li>
            </ol>
            <p className="text-gray-300 mb-4">
              This tool reduced the team size required from 10 to 7, improving efficiency and planning.
            </p>
            <p className="text-gray-300 mb-4">
              Below is a diagram of the process I&apos;ve built:
            </p>
            <Image
              src={hrDiagramImage}
              alt="Diagram of recruiting software process"
              width={600}
              height={300}
              className="mx-auto rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-blue-400">Recognition And Expansion</h3>
            <p className="text-gray-300 mb-4">
              My efforts were recognized with a Brigadier&apos;s appreciation and a promotion to Captain, leading to a role in the IT sector without prior experience.
            </p>
            <p className="text-gray-300 mb-4">
              In this new role, I scaled the internal tool to support over 250 users, working with 10 engineers to develop a comprehensive HR management solution.
            </p>
            <p className="text-gray-300 mb-4">
              Below is a rough sketch of the solution components:
            </p>
            <Image
              src={hrComponentsImage}
              alt="Sketch of solution components"
              width={360}
              height={180}
              className="mx-auto rounded-lg"
            />
          </section>

          <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4 text-green-400">Results</h2>
            <h3 className="text-2xl font-semibold mb-2 text-blue-400">Efficiency and Planning Gains</h3>
            <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-4">
              <li><strong>Team Efficiency:</strong> Reduced the number of personnel involved in recruitment processes from 10 to 7.</li>
              <li><strong>Improved Planning:</strong> Enhanced the ability to predict and plan, contributing to more stable units.</li>
            </ol>
            <h3 className="text-2xl font-semibold mb-2 text-blue-400">Organizational Impact</h3>
            <ol className="list-decimal list-inside text-gray-300 space-y-2">
              <li><strong>User Expansion:</strong> Scaled the solution to accommodate 250 users, integrating advanced features to meet broader organizational needs.</li>
              <li><strong>Time-to-Assignment:</strong> The average time soldiers spent waiting for an assignment was reduced from 3.5 days to 1 day, significantly enhancing operational efficiency.</li>
              <li><strong>Strategic Focus:</strong> By automating paperwork and routine tasks, HR teams could focus on strategic initiatives, improving overall effectiveness.</li>
            </ol>
          </section>

          <section className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4 text-green-400">Reflections</h2>
            <p className="text-gray-300">
              This project marked a pivotal point in my career, highlighting the impact of scalable solutions on HR management. It taught me the importance of user-centric design and iterative development. Moving forward, I aim to integrate advanced analytics and AI-driven insights to further optimize HR processes.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}


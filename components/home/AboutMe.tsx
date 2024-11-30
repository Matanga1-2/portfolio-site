'use client'

import matanProfileImage from '@/assets/images/matan_profile_image.jpg'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function AboutMe() {
  const [isVisible, setIsVisible] = useState(false)
  const imageRef = useRef(null)

  useEffect(() => {
    const observerTarget = imageRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (observerTarget) {
      observer.observe(observerTarget)
    }

    return () => {
      if (observerTarget) {
        observer.unobserve(observerTarget)
      }
    }
  }, [])

  const imageVariants = {
    hidden: { scale: 0.7, opacity: 0, y: 20 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut"
      } 
    }
  }

  const bgVariants = {
    hidden: { scale: 0.3, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        duration: 0.7, 
        ease: "easeOut", 
        delay: 0.1 
      } 
    }
  }

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-[70%] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div key="about-content">
              <h2 key="about-title" className="text-3xl font-bold mb-6">About Me</h2>
              <p key="about-p1" className="text-gray-300 mb-4">
                Passionate about problem-solving, especially tackling challenges that haven&apos;t been elegantly solved. With a strong background in data analysis and technical expertise, I bridge the gap between hands-on work and effective project leadership. I am known for outstanding execution and communication skills.
              </p>
              <p key="about-p2" className="text-gray-300">
                Obsessed with efficiency, I&apos;ve developed a unique framework that helps me adapt and drive progress swiftly while maintaining focus and a positive outlook.
              </p>
            </div>
            <div key="about-image" className="relative flex justify-center items-center" ref={imageRef}>
              <motion.div
                key="image-bg"
                className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-full scale-75 m-auto"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={bgVariants}
                style={{ rotate: -10 }}
                whileInView={{ rotate: 0 }}
                viewport={{ once: true }}
              />
              <motion.div
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={imageVariants}
              >
                <Image
                  key="profile-image"
                  src={matanProfileImage}
                  alt="Matan Grady - Product Manager"
                  width={240}
                  height={240}
                  className="relative rounded-2xl"
                />
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-12 text-center"
          >
            <Link
              href="/about"
              className="inline-block px-8 py-3 text-sm font-medium text-green-400 border border-green-500 rounded-full hover:bg-green-500/10 transition-colors cursor-pointer hover:shadow-lg active:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Testimonial {
  id: number
  text: string
  author: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Matan has the perfect blend of technical capabilities, business understanding and soft skills required to communicate and manage large scale projects across an organization.",
    author: "Or",
    role: "Chief Revenue Officer"
  },
  {
    id: 2,
    text: "Matan is always willing to help, proactive, and collaborative. His knowledge is vast and extensive, he takes ownership of any kind of task and presents creative solutions to complex problems.",
    author: "Yury",
    role: "Principal Lead Engineer"
  },
  {
    id: 3,
    text: "Matan is a sharp and fast thinker, an analytical person, and always open-minded to fresh new ideas. A great asset for any company.",
    author: "Tamir",
    role: "Product Designer"
  }
]

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  return (
    <div className="relative h-[240px] w-full overflow-hidden pt-[12px]">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={`testimonial-${current}`}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0 flex items-center justify-center -mt-[48px]"
        >
          <div className="w-full max-w-2xl text-center">
            <div className="relative mb-8">
              <div className="absolute -left-4 -top-4 text-4xl text-green-400 opacity-50"></div>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 italic">
                {testimonials[current].text}
              </p>
              <div className="absolute -bottom-4 -right-4 text-4xl text-green-400 opacity-50"></div>
            </div>
            <div className="mt-4">
              <p className="text-white font-semibold text-base">{testimonials[current].author}</p>
              <p className="text-gray-400 text-sm">{testimonials[current].role}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={`testimonial-dot-${index}`}
            onClick={() => {
              setDirection(index > current ? 1 : -1)
              setCurrent(index)
            }}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === current ? 'bg-green-400' : 'bg-gray-600'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}


import * as React from "react"
import { useMood } from "../context/MoodContext"
import { motion } from "framer-motion"

const Contact = () => {
  const { currentMood } = useMood()

  return (
    <div className="sm:px-8 mt-8 flex-1">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-2xl">
            <h1 
              className={`font-bold w-fit text-4xl sm:text-5xl mb-12 py-6 px-6 sm:-mx-2 border-4 border-black rounded-3xl shadow-black shadow-[0px_8px_0px_0px_rgba(0,0,0,0)] transition-colors duration-300 ${currentMood === 'creative' ? 'gradient-bg' : ''}`}
              style={{ 
                backgroundColor: currentMood === 'creative' ? 'transparent' : 'var(--text-color)',
                color: 'black'
              }}
              onMouseOver={(e) => {
                if (currentMood !== 'creative') e.currentTarget.style.backgroundColor = 'var(--hover-color)';
              }}
              onMouseOut={(e) => {
                if (currentMood !== 'creative') e.currentTarget.style.backgroundColor = 'var(--text-color)';
              }}
            >
              <span className="pr-2">
                <span className="animate-wiggle inline-block">📧</span> Contact Me
              </span>
            </h1>
            <div className="prose prose-lg max-w-full dark:prose-invert prose-p:font-body prose-ol:font-body prose-ul:font-body prose-headings:font-sans prose-code:text-[.8em] prose-headings:tracking-tight prose-p:text-zinc-900">
              <div className="rounded-2xl backdrop-blur-sm bg-white/80 p-4">
                <form 
                  action="https://formspree.io/f/xyybjnll"
                  method="POST"
                  className="space-y-4"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium" style={{ color: 'var(--text-color)' }}>
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="mt-1 block w-full rounded-md border-2 border-zinc-200 bg-white/90 shadow-sm focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200 sm:text-sm p-2"
                      required
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium" style={{ color: 'var(--text-color)' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-2 border-zinc-200 bg-white/90 shadow-sm focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200 sm:text-sm p-2"
                      required
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium" style={{ color: 'var(--text-color)' }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      className="mt-1 block w-full rounded-md border-2 border-zinc-200 bg-white/90 shadow-sm focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200 sm:text-sm p-2"
                      required
                    ></textarea>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <button
                      type="submit"
                      className={`font-bold w-full text-lg py-2 px-4 border-2 border-black rounded-xl shadow-black shadow-[0px_4px_0px_0px_rgba(0,0,0,0)] transition-colors duration-300 ${currentMood === 'creative' ? 'gradient-bg' : ''}`}
                      style={{ 
                        backgroundColor: currentMood === 'creative' ? 'transparent' : 'var(--text-color)',
                        color: 'black'
                      }}
                      onMouseOver={(e) => {
                        if (currentMood !== 'creative') e.currentTarget.style.backgroundColor = 'var(--hover-color)';
                      }}
                      onMouseOut={(e) => {
                        if (currentMood !== 'creative') e.currentTarget.style.backgroundColor = 'var(--text-color)';
                      }}
                    >
                      <span className="pr-2">
                        <span className="animate-wiggle inline-block">📤</span> Send Message
                      </span>
                    </button>
                  </motion.div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact 
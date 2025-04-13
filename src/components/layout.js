/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import "./layout.css"
import ParallaxGrid from "./ParallaxGrid"
import MoodButton from "./MoodButton"
import { useMood } from "../context/MoodContext"

const Layout = ({ children }) => {
  const { currentMood, setCurrentMood } = useMood();
  const location = useLocation();
  const isExperiencePage = location.pathname === '/experience';

  return (
    <div className="min-h-screen flex flex-col" data-mood={currentMood}>
      <header className={`sticky top-0 z-50 w-full border-b border-zinc-200 backdrop-blur ${currentMood === 'tech' ? 'bg-black' : 'bg-white/80'}`}>
        <div className="sm:px-8">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-2xl">
                <div className="flex items-center justify-between py-6">
                  <div>
                    <Link to="/" className="font-bold text-lg text-zinc-900 hover:text-zinc-600 transition-colors duration-300 no-underline" style={{ color: currentMood === 'tech' ? 'white' : 'var(--text-color)' }}>
                      @tessawoodard
                    </Link>
                  </div>
                  <nav className="flex items-center space-x-8">
                    <Link
                      to="/experience"
                      className="text-lg font-medium hover:text-gray-900 transition-colors duration-300"
                      style={{ color: currentMood === 'tech' ? 'white' : 'var(--text-color)' }}
                    >
                      Experience
                    </Link>
                    <Link
                      to="https://github.com/tessa-woodard"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium hover:text-gray-900 transition-colors duration-300"
                      style={{ color: currentMood === 'tech' ? 'white' : 'var(--text-color)' }}
                    >
                      Projects
                    </Link>
                    <Link
                      to="/contact"
                      className="text-lg font-medium hover:text-gray-900 transition-colors duration-300"
                      style={{ color: currentMood === 'tech' ? 'white' : 'var(--text-color)' }}
                    >
                      Contact
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 relative">
        <div className="bg-grid absolute inset-0" style={{ height: 'auto', minHeight: '100%' }} />
        {currentMood === 'creative' && (
          <div className="background-emoji-container">
            <div className="background-emoji">🐶</div>
            <div className="background-emoji">🍭</div>
            <div className="background-emoji">🌈</div>
            <div className="background-emoji">💕</div>
            <div className="background-emoji">🦄</div>
            <div className="background-emoji">🧁</div>
            <div className="background-emoji">💅</div>
            <div className="background-emoji">🧋</div>
            <div className="background-emoji">✨</div>
            <div className="background-emoji">😌</div>
            <div className="background-emoji">🪴</div>
            <div className="background-emoji">⭐️</div>
            <div className="background-emoji">😇</div>
            <div className="background-emoji">🍓</div>
            <div className="background-emoji">🍰</div>
            <div className="background-emoji">🍣</div>
            <div className="background-emoji">🥰</div>
            <div className="background-emoji">🍄</div>
          </div>
        )}
        <div className="relative z-10 pb-6">
          {children}
        </div>
      </main>

      <footer className={`border-t border-zinc-200 py-6 relative z-50 backdrop-blur ${currentMood === 'tech' ? 'bg-black' : 'bg-white/80'}`}>
        <div className="sm:px-8">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-2xl">
                <div className="flex items-center justify-between">
                  <div className="text-zinc-500" style={{ color: currentMood === 'tech' ? 'white' : 'var(--text-color)' }}>
                    <span>© {new Date().getFullYear()} Tessa Woodard</span>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/tessa-woodard"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors duration-300 ${currentMood === 'tech' ? 'hover:text-white' : 'text-zinc-500 hover:text-zinc-700'}`}
                      style={{ color: currentMood === 'tech' ? 'white' : 'var(--text-color)' }}
                    >
                      <span className="sr-only">GitHub</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tessa-woodard/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors duration-300 ${currentMood === 'tech' ? 'hover:text-white' : 'text-zinc-500 hover:text-zinc-700'}`}
                      style={{ color: currentMood === 'tech' ? 'white' : 'var(--text-color)' }}
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <MoodButton />
    </div>
  )
}

export default Layout

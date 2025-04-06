import * as React from "react"
import { useMood } from "../context/MoodContext"

const Hero = () => {
  const { currentMood } = useMood()

  return (
    <div className="sm:px-8 mt-8 flex-1">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-2xl">
            <div className="relative z-10">
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
                  <span className="animate-wiggle inline-block">👋</span> Hi, I'm Tessa!
                </span>
              </h1>
            </div>
            <div className="prose prose-lg max-w-full dark:prose-invert prose-p:font-body prose-ol:font-body prose-ul:font-body prose-headings:font-sans prose-code:text-[.8em] prose-headings:tracking-tight prose-p:text-zinc-900">
              <p className="text-lg leading-relaxed">I'm a UI/UX Front End Developer with 5 years of experience. I'm currently contracting at DealerOn — but I'm looking for a full-time role where I can grow, collaborate, and finally call a place home (too cheesy? maybe… but it's true). I'm passionate about clean, thoughtful UI/UX design, subtle but delightful animations, and bringing creativity into every build. My happy place is crafting minimalistic websites with just the right amount of fun and flair.</p>
              <p>Before transitioning into tech, I spent several years in the restaurant industry, where I worked my way into management roles early on. That experience taught me how to lead with empathy, solve problems on the fly, and keep things running smoothly no matter what gets thrown your way. It still shapes how I work today: with intention, curiosity, and a deep appreciation for good teamwork.</p>
              <p>When I'm not coding, you can find me out on a trail with my dog Frankie, hanging with my super chill one-eyed cat Ginger, or trying to keep my mischievous kitten Chunx out of trouble. I also love photography, cooking up something fun in the kitchen, and getting lost in a good video game. If you're into building cool stuff and want a developer who brings heart, humor, and high standards to the table — let's chat.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 
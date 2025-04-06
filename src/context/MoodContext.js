import React, { createContext, useContext, useState, useEffect } from 'react'

const MoodContext = createContext()

export const MoodProvider = ({ children }) => {
  const [currentMood, setCurrentMood] = useState(() => {
    // Try to get saved mood from localStorage
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolioMood') || 'default'
    }
    return 'default'
  })

  useEffect(() => {
    // Save mood preference to localStorage
    localStorage.setItem('portfolioMood', currentMood)
    
    // Apply mood styles
    document.documentElement.setAttribute('data-mood', currentMood)
  }, [currentMood])

  return (
    <MoodContext.Provider value={{ currentMood, setCurrentMood }}>
      {children}
    </MoodContext.Provider>
  )
}

export const useMood = () => {
  const context = useContext(MoodContext)
  if (!context) {
    throw new Error('useMood must be used within a MoodProvider')
  }
  return context
} 
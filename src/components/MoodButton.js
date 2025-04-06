import React, { useState } from 'react'
import { useMood } from '../context/MoodContext'

const MoodButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)
  const { currentMood, setCurrentMood } = useMood()

  const moods = [
    { id: 'default', icon: '🎨', label: 'Default', description: 'Clean and minimal' },
    { id: 'creative', icon: '✨', label: 'Creative', description: 'Vibrant and playful' },
    { id: 'cozy', icon: '☕', label: 'Cozy', description: 'Warm and inviting' },
    { id: 'tech', icon: '💻', label: 'Tech', description: 'Modern and technical' }
  ]

  const handleMoodChange = (moodId) => {
    setCurrentMood(moodId)
    setIsOpen(false)
    setShowTooltip(false)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-lg p-2 w-48">
            <p className="text-sm text-zinc-600">Try different styles for the site!</p>
            <button 
              onClick={() => setShowTooltip(false)}
              className="text-xs text-zinc-400 hover:text-zinc-600 mt-1"
            >
              Got it
            </button>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          aria-label="Change site mood"
        >
          <span className="text-xl">{moods.find(m => m.id === currentMood)?.icon || '🎨'}</span>
        </button>

        {/* Mood Options */}
        {isOpen && (
          <div className="absolute bottom-0 right-0 mb-2 mr-2 bg-white rounded-lg shadow-lg p-2 space-y-2">
            {moods.map((mood) => (
              <button
                key={mood.id}
                onClick={() => handleMoodChange(mood.id)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  currentMood === mood.id ? 'bg-zinc-100' : 'hover:bg-zinc-50'
                }`}
                aria-label={`Set mood to ${mood.label}`}
                title={mood.description}
              >
                <span className="text-xl">{mood.icon}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default MoodButton 
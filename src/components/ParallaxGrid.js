import React, { useEffect, useRef } from 'react'

const ParallaxGrid = () => {
  const gridRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!gridRef.current) return

      const scrollY = window.scrollY
      const speed = 0.5
      
      // Calculate the transform based on scroll position
      const translateY = scrollY * speed
      const scale = 1 + (scrollY * 0.0005)
      
      // Apply the transform
      gridRef.current.style.transform = `translateY(${translateY}px) scale(${scale})`
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)
    
    // Initial call to set the position
    handleScroll()

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div 
      ref={gridRef} 
      className="bg-grid absolute inset-0"
      style={{ 
        height: '100%',
        overflow: 'hidden'
      }}
    />
  )
}

export default ParallaxGrid 
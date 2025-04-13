import React from "react"
import { motion } from "framer-motion"

const ExperienceCard = ({ experience, index }) => {
  const getLogoImage = (company) => {
    switch (company) {
      case "DealerOn":
        return "/dealeron-logo.png"
      case "Crocs":
        return "/crocs-logo.png"
      case "Indicio.tech":
        return "/indicio-logo.png"
      case "Flylance":
        return "/flylance-logo.png"
      case "DevMountain":
        return "/devmountain-logo.png"
      default:
        return null
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-4 mb-6 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold text-gray-900 mt-0"
          >
            {experience.company} - {experience.title}
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-500 text-sm mb-0"
          >
            {experience.duration}
          </motion.p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 sm:block hidden" style={{ width: experience.logo === true ? '10rem' : '5rem' }}>
            {experience.logo === true ? (
              <img
                src={getLogoImage(experience.company)}
                alt={`${experience.company} logo`}
                className="w-full object-contain"
              />
            ) : experience.logo === "🍽️" ? (
              <span className="text-6xl">{experience.logo}</span>
            ) : experience.logo === "💻" ? (
              <span className="text-6xl">{experience.logo}</span>
            ) : null}
          </div>
        </div>
      </div>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-2 text-gray-700"
      >
        {experience.description}
      </motion.p>
      {experience.responsibilities && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-0"
        >
          <h4 className="font-semibold text-gray-900 mt-0">Key Responsibilities:</h4>
          <ul className="list-disc pl-2 mt-2 text-gray-700">
            {experience.responsibilities.map((responsibility, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                className="mb-1"
              >
                {responsibility}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-4"
      >
        <h4 className="font-semibold text-gray-900">Skills:</h4>
        <div className="flex flex-wrap gap-2 mt-2">
          {experience.skills.map((skill, index) => (
            <motion.span 
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ExperienceCard 
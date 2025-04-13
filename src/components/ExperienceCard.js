import React from "react"
import { motion } from "framer-motion"

const ExperienceCard = ({ experience }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-4 mb-6 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex justify-between items-start">
        <div>
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
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-2 text-gray-700"
          >
            {experience.description}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-0"
          >
            <h4 className="font-semibold text-gray-900 mt-0">Key Responsibilities:</h4>
            <ul className="list-disc list-inside mt-2 text-gray-700">
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
        </div>
        {experience.logo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="ml-4 flex-shrink-0"
          >
            <img 
              src={experience.logo} 
              alt={`${experience.company} logo`}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default ExperienceCard 
import * as React from "react"
import { useMood } from "../context/MoodContext"
import ExperienceCard from "./ExperienceCard"
import { motion } from "framer-motion"

const experiences = [
  {
    company: "DealerOn",
    title: "Web Designer",
    duration: "January 2025 - Present",
    skills: ["HTML5", "CSS3", "jQuery", "Responsive Design", "UX Best Practices", "CMS Development"],
    responsibilities: [
      "Design and code responsive web pages using HTML5, CSS3, and jQuery in a proprietary CMS",
      "Create functional, visually appealing designs aligned with branding and UX best practices",
      "Optimize web pages for performance, accessibility, and user experience",
      "Troubleshoot design challenges and collaborate with internal teams on solutions",
      "Implement modern design techniques to stay ahead of industry trends"
    ],
  },
  {
    company: "Crocs",
    title: "Digital Developer, Web",
    duration: "February 2024 - September 2024",
    skills: ["SFCC/Demandware API", "React", "Bitbucket", "Figma", "Contentstack", "Storybook", "ADA Compliance"],
    responsibilities: [
      "Developed e-commerce solutions using SFCC/Demandware API, Sandboxer, and React for storefront code",
      "Streamlined workflows with Bitbucket, Figma, and responsive design tools for wireframing",
      "Enhanced user experiences by optimizing performance and addressing design constraints",
      "Developed cross-browser websites in an Agile environment, completing tasks within sprints",
      "Ensured ADA compliance with accessibility tools and managed CMS platforms like Okra, Contentstack, and Storybook"
    ],
  },
  {
    company: "Crocs",
    title: "Front End GTM Developer",
    duration: "March 2022 - February 2024",
    skills: ["HTML/CSS", "Salesforce Business Manager", "GTM", "ADA Compliance", "Cross-Browser Development", "Agile"],
    responsibilities: [
      "Partnered with UX and Design teams to craft responsive, cross-browser templates for GTM campaigns",
      "Managed e-commerce storefront assets in Salesforce Business Manager, integrating third-party tools",
      "Developed and optimized HTML/CSS to ensure ADA compliance and maintain brand consistency",
      "Diagnosed and resolved global codebase issues, improving platform stability and user experience",
      "Provided accurate effort estimates and project scope guidance for timely B2B and B2C delivery"
    ],
  },
  {
    company: "Indicio.tech",
    title: "UI Software Engineer",
    duration: "February 2021 - March 2022",
    skills: ["React", "Node.js", "Express", "Redux", "Docker", "Postman", "Agile"],
    responsibilities: [
      "Developed scalable identity apps with React, Node.js, and Express, enhancing UX and reliability",
      "Redesigned credential management with intuitive forms, streamlining the issuance process",
      "Boosted app performance with efficient data fetching and improved user management",
      "Created user-friendly interfaces for credential management, enhancing usability and efficiency",
      "Followed an Agile workflow using Kanban to efficiently manage tickets and meet deadlines"
    ],
  },
  {
    company: "Flylance",
    title: "Full-Stack Web Developer",
    duration: "December 2020 - February 2021",
    skills: ["React", "Firebase", "JavaScript", "CSS", "Styled Components", "Problem Solving"],
    responsibilities: [
      "Maximized applications' efficiency by identifying deprecated components",
      "Developed and implemented solutions improving application performance",
      "Improved data quality, scope, operability and flexibility",
      "Simplified client experience by condensing large PDF receipts to relevant concise versions",
      "Managed, optimized, and updated Firebase databases to improve optimization of applications"
    ],
  },
  {
    company: "Freelance",
    title: "Full-Stack Web Developer",
    duration: "October 2020 - December 2020",
    skills: ["React", "Gatsby", "GraphQL", "MongoDB", "TypeScript", "Figma", "Auth0"],
    responsibilities: [
      "Developed full-stack web applications to process, analyze, and rendered data visually",
      "Managed time-sensitive updates, including content changes and database upgrades",
      "Planned, wrote, and debugged web applications and software with complete accuracy",
      "Provided organization to scattered components by using Figma to establish an app prototype",
      "Designed a simple front end using React and styled components for an effortless User Experience"
    ],
  },
  {
    company: "DevMountain",
    title: "Full-Stack Web Developer Student",
    duration: "August 2020 - November 2020",
    skills: ["React", "Node.js", "PostgreSQL", "DigitalOcean", "Heroku", "Redux"],
    responsibilities: [
      "Completed 480 hours of hands-on coding experience, practicing individual, pair, and mob programming",
      "Deployed functioning, Full-Stack web applications using ReactJS and NodeJS with Digital Ocean",
      "Practiced Front-End web design technologies such as CSS and Bootstrap",
      "Served as Teacher's Assistant, helping prospective bootcamp students with HTML, CSS, and JavaScript basics"
    ],
  },
  {
    company: "Restaurant Management Experience",
    title: "Various Leadership Roles",
    duration: "2016 - 2020",
    skills: ["Team Leadership", "Project Management", "Customer Service", "Problem Solving", "Inventory Management"],
    responsibilities: [
      "Managed teams of up to 30 employees, overseeing scheduling, training, and hiring",
      "Implemented process improvements resulting in 20-25% revenue increases",
      "Developed efficient inventory systems reducing costs and waste",
      "Led store openings and rebranding initiatives with successful outcomes",
      "Resolved customer issues and maintained high satisfaction ratings"
    ],
  }
];

const ExperienceContent = () => {
  const { currentMood } = useMood()

  return (
    <div className="sm:px-8 mt-8">
      <div className="mx-auto max-w-2xl lg:max-w-2xl">
        <div className="prose prose-lg max-w-full dark:prose-invert prose-p:font-body prose-ol:font-body prose-ul:font-body prose-headings:font-sans prose-code:text-[.8em] prose-headings:tracking-tight prose-p:text-zinc-900">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-[6px] gap-4">
            <h1 
              className={`font-bold w-fit text-4xl sm:text-5xl py-6 px-6 sm:-mx-2 border-4 border-black rounded-3xl shadow-black shadow-[0px_8px_0px_0px_rgba(0,0,0,0)] transition-colors duration-300 ${currentMood === 'creative' ? 'gradient-bg' : ''}`}
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
                <span className="animate-wiggle inline-block">💼</span> Experience
              </span>
            </h1>
            <a
              href="/resume.pdf"
              download
              className={`font-bold w-fit text-lg py-2 px-4 border-2 border-black rounded-xl shadow-black shadow-[0px_4px_0px_0px_rgba(0,0,0,0)] transition-colors duration-300 ${currentMood === 'creative' ? 'gradient-bg' : ''}`}
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
                <span className="animate-wiggle inline-block">📥</span> Download Resume
              </span>
            </a>
          </div>
          
          <div className="space-y-4">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <ExperienceCard experience={experience} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceContent 
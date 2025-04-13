import React from "react"
import { motion } from "framer-motion"
import ExperienceCard from "./ExperienceCard"
import { useMood } from "../context/MoodContext"
import DealerOnLogo from "../images/dealeron-logo.png"
import CrocsLogo from "../images/crocs-logo.png"
import IndicioLogo from "../images/indicio-logo.png"
import FlylanceLogo from "../images/flylance-logo.png"
import DevMountainLogo from "../images/devmountain-logo.png"

const ExperienceContent = () => {
  const { currentMood } = useMood()

  const experiences = [
    {
      company: "DealerOn",
      title: "Front End Developer",
      duration: "January 2025 - Present",
      description: "Contracting as a Front End Developer, focusing on creating responsive and user-friendly interfaces for automotive dealership websites.",
      skills: [
        "Adobe Creative Suite", "Adobe Photoshop", "Salesforce (Ticketing System)", "Stockpress", 
        "Shutterstock", "HTML5", "Bootstrap 3", "CSS", "WCAG Accessibility Standards", 
        "ADA Compliance", "User Interface Design", "User Experience (UX)", 
        "User Experience Design (UED)", "Problem Solving", "Critical Thinking", 
        "Copyright and Licensing Compliance", "Chrome DevTools", "Data Layer Tagging", 
        "Google Analytics", "Debugging", "Cross-Browser Compatibility", 
        "Responsive Web Design", "Troubleshooting", "CMS Management", 
        "Collaboration", "Dealer Compliance Standards"
      ],
      responsibilities: [
        "Designed and developed responsive web pages using HTML5, CSS3, jQuery, and Bootstrap 3",
        "Ensured ADA and WCAG compliance for accessibility and brand consistency",
        "Created functional, visually appealing designs aligned with UX best practices",
        "Diagnosed and resolved cross-browser and performance issues using Chrome DevTools",
        "Collaborated via Salesforce, adhering to dealership standards and delivering modern design solutions"
      ],
      logo: true
    },
    {
      company: "Crocs",
      title: "Digital Developer, Web",
      duration: "February 2024 - September 2024",
      skills: [
        "Adobe Creative Suite", "Contentstack", "CSS", "Material-UI", "Troubleshooting", 
        "ADA Compliance", "jQuery", "Bitbucket", "Bootstrap", "JavaScript", "SASS", 
        "Git", "Detailed Design", "Styled-Components", "Jira", "Salesforce Commerce Cloud (SFCC)", 
        "GitHub", "Figma", "Teamwork", "Web Applications", "Problem Solving", 
        "User Interface Design", "Agile Methodologies", "Developer Tools", "Storybook", 
        "React.js", "HTML", "Critical Thinking", "User Experience Design (UED)", 
        "User Experience (UX)", "Front-End Development", "Chrome DevTools", "Okra", 
        "Microsoft Visual Studio Code"
      ],
      responsibilities: [
        "Developed e-commerce solutions using SFCC/Demandware API, Sandboxer, and React for storefront code",
        "Streamlined workflows with Bitbucket, Figma, and responsive design tools for wireframing",
        "Enhanced user experiences by optimizing performance and addressing design constraints",
        "Developed cross-browser websites in an Agile environment, completing tasks within sprints",
        "Ensured ADA compliance with accessibility tools and managed CMS platforms like Okra, Contentstack, and Storybook"
      ],
      logo: true
    },
    {
      company: "Crocs",
      title: "Front End GTM Developer",
      duration: "February 2024 - September 2024",
      skills: [
        "Adobe Creative Suite", "CSS", "Troubleshooting", "Adobe XD", "BrowserStack", 
        "ADA Compliance", "Adobe Photoshop", "Bootstrap", "JavaScript", "Git", 
        "Detailed Design", "Styled-Components", "Jira", "Salesforce Commerce Cloud (SFCC)", 
        "GitHub", "Figma", "Teamwork", "Web Applications", "Problem Solving", 
        "User Interface Design", "Agile Methodologies", "Developer Tools", "HTML5", 
        "Critical Thinking", "User Experience Design (UED)", "User Experience (UX)", 
        "Front-End Development", "Chrome DevTools", "Content Hub", "Microsoft Visual Studio Code"
      ],
      responsibilities: [
        "Partnered with UX and Design teams to craft responsive, cross-browser templates for GTM campaigns",
        "Managed e-commerce storefront assets in Salesforce Business Manager, integrating third-party tools",
        "Developed and optimized HTML/CSS to ensure ADA compliance and maintain brand consistency",
        "Diagnosed and resolved global codebase issues, improving platform stability and user experience",
        "Provided accurate effort estimates and project scope guidance for timely B2B and B2C delivery"
      ],
      logo: true
    },
    {
      company: "Indicio.tech",
      title: "UI Software Engineer",
      duration: "February 2021 - March 2022",
      skills: [
        "CSS", "Postman", "Troubleshooting", "jQuery", "JavaScript", "Node.js", 
        "Git", "Docker", "Software Development", "Detailed Design", "Styled-Components", 
        "Jira", "GitHub", "Teamwork", "Express.js", "Problem Solving", 
        "User Interface Design", "Agile Methodologies", "Developer Tools", "Enterprise Software", 
        "HTML5", "React.js", "Critical Thinking", "Redux.js", "User Experience Design (UED)", 
        "User Experience (UX)", "Chrome DevTools", "Microsoft Visual Studio Code"
      ],
      responsibilities: [
        "Developed scalable identity apps with React, Node.js, and Express, enhancing UX and reliability",
        "Redesigned credential management with intuitive forms, streamlining the issuance process",
        "Boosted app performance with efficient data fetching and improved user management",
        "Created user-friendly interfaces for credential management, enhancing usability and efficiency",
        "Followed an Agile workflow using Kanban to efficiently manage tickets and meet deadlines"
      ],
      logo: true
    },
    {
      company: "Flylance",
      title: "Full-Stack Web Developer",
      duration: "December 2020 - February 2021",
      skills: [
        "CSS", "Troubleshooting", "JavaScript", "Git", "Detailed Design", 
        "Styled-Components", "GitHub", "Teamwork", "Problem Solving", 
        "Agile Methodologies", "Developer Tools", "React.js", "HTML", 
        "Critical Thinking", "Chrome DevTools", "Microsoft Visual Studio Code"
      ],
      responsibilities: [
        "Maximized applications' efficiency by identifying deprecated components",
        "Developed and implemented solutions improving application performance",
        "Improved data quality, scope, operability and flexibility",
        "Simplified client experience by condensing large PDF receipts to relevant concise versions",
        "Managed, optimized, and updated Firebase databases to improve optimization of applications"
      ],
      logo: true
    },
    {
      company: "Freelance",
      title: "UI/UX Developer",
      duration: "2022 - 2023",
      skills: [
        "GatsbyJS", "CSS", "Material-UI", "Troubleshooting", "MongoDB", 
        "jQuery", "Contentful", "React Native", "Bootstrap", "JavaScript", 
        "Git", "Formspree.io", "Detailed Design", "Styled-Components", 
        "Strapi.js", "TypeScript", "GitHub", "GitHub API", "Express.js", 
        "Problem Solving", "Snipcart", "Developer Tools", "Context API", 
        "React.js", "HTML", "Critical Thinking", "Netlify", "Auth0", 
        "GraphQL", "Socket.io", "Chrome DevTools", "Firebase", "Microsoft Visual Studio Code"
      ],
      responsibilities: [
        "Developed full-stack web applications to process, analyze, and rendered data visually",
        "Managed time-sensitive updates, including content changes and database upgrades",
        "Planned, wrote, and debugged web applications and software with complete accuracy",
        "Provided organization to scattered components by using Figma to establish an app prototype",
        "Designed a simple front end using React and styled components for an effortless User Experience"
      ],
      logo: "💻"
    },
    {
      company: "DevMountain",
      title: "Full-Stack Web Developer Student",
      duration: "August 2020 - November 2020",
      skills: [
        "CSS", "Postman", "Troubleshooting", "DigitalOcean", "jQuery", 
        "Bootstrap", "Google Maps API", "Heroku", "JavaScript", "Node.js", 
        "Git", "Detailed Design", "Styled-Components", "GitHub", "Teamwork", 
        "PostgreSQL", "Problem Solving", "Developer Tools", "React.js", 
        "HTML", "Critical Thinking", "Redux.js", "Chrome DevTools", 
        "Microsoft Visual Studio Code"
      ],
      responsibilities: [
        "480 hours of hands on coding experience, practicing a combination of individual, pair, and mob programming styles",
        "Deployed functioning, Full-Stack web applications using ReactJS and NodeJS with Digital Ocean",
        "Practiced Front-End web design technologies such as CSS and Bootstrap",
        "Teacher's Assistant, helped prospective bootcamp students with basics of HTML, CSS, and JavaScript"
      ],
      logo: true
    },
    {
      company: "Restaurant Industry",
      title: "Various Management Positions",
      duration: "2015 - 2020",
      skills: [
        "Leadership", "Team Management", "Project Management", "Problem Solving", 
        "Customer Service", "Operations Management", "Training & Development", 
        "Inventory Management", "Cost Analysis", "Process Optimization"
      ],
      responsibilities: [
        "Led teams of up to 30 employees, managing hiring, training, and scheduling",
        "Optimized operations and inventory systems, reducing costs by 15-20%",
        "Implemented new processes and menu items, increasing revenue by 20-25%",
        "Managed store openings and rebranding initiatives, driving $500K+ in annual sales",
        "Developed strong leadership and problem-solving skills in fast-paced environments"
      ],
      logo: "🍽️"
    }
  ]

  return (
    <div className="sm:px-8 mt-8 px-4">
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
              className={`font-bold w-fit text-lg py-2 px-4 border-2 border-black rounded-xl shadow-black shadow-[0px_4px_0px_0px_rgba(0,0,0,0)] transition-colors duration-300 mb-8 md:mb-0 ${currentMood === 'creative' ? 'gradient-bg' : ''}`}
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
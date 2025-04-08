import React from 'react';
import { useMood } from '../context/MoodContext';
import Layout from '../components/layout';

const Experience = () => {
  const { currentMood } = useMood();

  const skills = {
    frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'jQuery', 'Bootstrap', 'Material-UI', 'SASS', 'Styled Components'],
    design: ['Photoshop', 'Adobe XD', 'Figma', 'Responsive Design', 'Cross-Browser Compatibility', 'ADA Compliance', 'Web Accessibility (WCAG)', 'UX Best Practices'],
    tools: ['Salesforce Commerce Cloud (SFCC)', 'Contentstack', 'Storybook', 'Contentful', 'Strapi', 'Okra', 'Version Control (Git, Bitbucket, GitHub)', 'Agile & Scrum Methodologies', 'Chrome DevTools', 'BrowserStack', 'Cross-Browser Testing'],
    optimization: ['Page Speed Optimization', 'SEO Best Practices', 'Lighthouse Audits', 'Performance Debugging', 'Code Efficiency']
  };

  const experience = [
    {
      company: 'DealerOn',
      role: 'Web Designer',
      period: 'January 2025 - Present',
      description: [
        'Design and code responsive web pages using HTML5, CSS3, and jQuery in a proprietary CMS',
        'Create functional, visually appealing designs aligned with branding and UX best practices',
        'Optimize web pages for performance, accessibility, and user experience',
        'Troubleshoot design challenges and collaborate with internal teams on solutions',
        'Implement modern design techniques to stay ahead of industry trends'
      ],
    },
    {
      company: 'Crocs',
      role: 'Digital Developer, Web',
      period: 'February 2024 - September 2024',
      description: [
        'Developed e-commerce solutions using SFCC/Demandware API, Sandboxer, and React for storefront code',
        'Streamlined workflows with Bitbucket, Figma, and responsive design tools for wireframing',
        'Enhanced user experiences by optimizing performance and addressing design constraints',
        'Developed cross-browser websites in an Agile environment, completing tasks within sprints',
        'Ensured ADA compliance with accessibility tools and managed CMS platforms like Okra, Contentstack, and Storybook'
      ],
    },
    {
      company: 'Crocs',
      role: 'Front End GTM Developer',
      period: 'March 2022 - February 2024',
      description: [
        'Partnered with UX and Design teams to craft responsive, cross-browser templates for GTM campaigns',
        'Managed e-commerce storefront assets in Salesforce Business Manager, integrating third-party tools',
        'Developed and optimized HTML/CSS to ensure ADA compliance and maintain brand consistency',
        'Diagnosed and resolved global codebase issues, improving platform stability and user experience',
        'Provided accurate effort estimates and project scope guidance for timely B2B and B2C delivery'
      ],
    }
  ];

  return (
    <Layout>
      <div className="sm:px-8 mt-8 flex-1">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-2xl">
              <h1 
                className={`font-bold w-fit text-4xl sm:text-5xl mb-8 py-6 px-6 sm:-mx-2 border-4 border-black rounded-3xl shadow-black shadow-[0px_8px_0px_0px_rgba(0,0,0,0)] transition-colors duration-300 ${currentMood === 'creative' ? 'gradient-bg' : ''}`}
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
                  <span className="animate-wiggle inline-block">💼</span> Experience & Skills
                </span>
              </h1>

              <div className="mb-8">
                <a
                  href="/TessaWoodard_Resume.pdf"
                  download="TessaWoodard_Resume.pdf"
                  className="resume-button inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-lg transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download Resume
                </a>
              </div>

              <div className="prose prose-lg max-w-full dark:prose-invert prose-p:font-body prose-ol:font-body prose-ul:font-body prose-headings:font-sans prose-code:text-[.8em] prose-headings:tracking-tight">
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-4" style={{ color: 'rgb(24 24 27 / var(--tw-text-opacity, 1))' }}>Work Experience</h2>
                  {experience.map((job, index) => (
                    <div key={index} className="mb-8">
                      <h3 className="text-xl font-semibold" style={{ color: 'rgb(24 24 27 / var(--tw-text-opacity, 1))' }}>{job.role} at {job.company}</h3>
                      <p className="text-zinc-600 mb-2">{job.period}</p>
                      <ul className="list-disc pl-6">
                        {job.description.map((point, i) => (
                          <li key={i} className="mb-1" style={{ color: 'rgb(24 24 27 / var(--tw-text-opacity, 1))' }}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4" style={{ color: 'rgb(24 24 27 / var(--tw-text-opacity, 1))' }}>Skills</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Object.entries(skills).map(([category, items]) => (
                      <div key={category} className="mb-4">
                        <h3 className="text-lg font-semibold capitalize mb-2" style={{ color: 'rgb(24 24 27 / var(--tw-text-opacity, 1))' }}>{category}</h3>
                        <div className="flex flex-wrap gap-1.5">
                          {items.map((skill, index) => (
                            <span 
                              key={index}
                              className="px-2.5 py-1 text-sm rounded-full border border-black"
                              style={{ backgroundColor: 'var(--text-color)', color: 'black' }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Experience; 
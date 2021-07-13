import React from "react"
import { FaEnvelopeSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaEnvelopeSquare className="social-icon"></FaEnvelopeSquare>,
    url: "mailto:tessa.woodard7@gmail.com",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://linkedin.com/in/tessa-woodard",
  },
  {
    id: 3,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/tessa-woodard",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}

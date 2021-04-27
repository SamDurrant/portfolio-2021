import React from 'react'
import './ProjectCard.css'
import TextLink from '../TextLink/TextLink'

export default function ProjectCard({ name, tech, description, links }) {
  return (
    <article className="project">
      <h3 className="project-name">{name}</h3>
      <div className="project-content">
        <p className="project-tech">{tech}</p>
        <p className="project-description">{description}</p>
        <div className="links project-links">
          {links.map((link) => (
            <TextLink
              key={link.text}
              link={link.link}
              linkAriaLabel={link.linkAriaLabel}
              text={link.text}
              target="_blank"
              rel="noreferrer"
            />
          ))}
        </div>
      </div>
    </article>
  )
}

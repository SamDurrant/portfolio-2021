import React from 'react'
import './IconLink.css'

export default function IconLink({ link, linkAriaLabel, icon }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={linkAriaLabel}
      className="icon-link"
    >
      <i className={icon} />
    </a>
  )
}

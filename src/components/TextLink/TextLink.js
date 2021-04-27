import React from 'react'
import './TextLink.css'

export default function TextLink({ link, linkAriaLabel, text, ...props }) {
  return (
    <a
      href={link}
      aria-label={linkAriaLabel}
      className="text-link text-link-border"
      {...props}
    >
      {text}
    </a>
  )
}

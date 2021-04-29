const content = {
  aboutBlurb: [
    `When I was a kid I loved puzzles (who am I kidding, I still do). If someone had told me that I could grow up to work on puzzles for a career, I probably would have laughed. That’s what coding is for me - a puzzle that needs to be put together in such a way that what emerges is something functional, beautiful and organized. When I first picked up coding, I never looked back and I never put it down. I have an eye for design but I’m also able to use my logic and detail-oriented nature to create cool projects.`,
    `If I'm not coding, I'm more than likely found cooking up an awesome meal or out exploring nature. I adventure as often as possible with my dog. I grew up in the forests of the Pacific Northwest but currently reside in the desert. Regardless of where I am, I love finding a nook in nature where I can sit and quietly take in the beauty. I love hiking and camping but more recently I've gotten into biking.`,
  ],

  aboutTech: [
    'React',
    'JavaScript',
    'Node/Express',
    'Postgres',
    'CSS/Sass',
    'Git/Github',
    'Mocha',
    'VS Code',
    'Figma',
  ],

  navLinks: [
    {
      link: '#about',
      linkAriaLabel: 'link to about section',
      text: 'about',
    },
    {
      link: '#projects',
      linkAriaLabel: 'link to projects section',
      text: 'projects',
    },
    {
      link: '#contact',
      linkAriaLabel: 'link to contact section',
      text: 'contact',
    },
  ],

  projectBlurb: [
    `I am always striving to find ways to grow. Whether it’s finding ways to organize my code with architecture or naming standards, reading documentation or coding a new project, I enjoy discovering new methods and tools that help me hone my developer skills. With each project that I work on, I make a concerted effort to learn something new.`,
    `I know that I’m learning something new when it starts to get difficult. I mean, I do get a pretty mean scowl on my face when something’s being super buggery, but I love it because I know that what follows is this really amazing aha moment. Where it all makes sense, something finally starts working or the bug has been squashed.`,
    `Those tough spots have taught me to be very generous with laughing at myself and to try not to take myself too seriously. They've also taught me that the only way to get anywhere is by doing the tough stuff.`,
  ],

  projects: [
    {
      name: 'Great Gradient!',
      description: `A background gradient generating application that allows multiple gradients to be layered. Customize each layer through repositioning or resizing.`,
      tech: '#React #CSS',
      links: [
        {
          link: 'https://greatgradient.netlify.app/',
          linkAriaLabel: 'link to great gradient site',
          text: 'site',
        },
        {
          link: 'https://github.com/SamDurrant/great-gradient',
          linkAriaLabel: 'link to great gradient client code',
          text: 'client',
        },
      ],
    },
    {
      name: 'Scribbles',
      description: `A classic note-taking application using the PERN stack. Increased my understanding of a full stack web application while strengthening my front end skills.`,
      tech: '#React #Express #Postgres #CSS',
      links: [
        {
          link: 'https://scribbles-app.vercel.app/',
          linkAriaLabel: 'link to scribbles site',
          text: 'site',
        },
        {
          link: 'https://github.com/SamDurrant/scribbles-client',
          linkAriaLabel: 'link to scribbles client code',
          text: 'client',
        },
        {
          link: 'https://github.com/SamDurrant/scribbles-api',
          linkAriaLabel: 'link to scribbles server code',
          text: 'server',
        },
      ],
    },
    {
      name: 'Soul Seeds',
      description: `A static site for a fictional monthly/yearly subscription based application inspired by conversations with a friend.`,
      tech: '#React #CSS',
      links: [
        {
          link: 'https://soulseeds.netlify.com/',
          linkAriaLabel: 'link to soul seeds site',
          text: 'site',
        },
        {
          link: 'https://github.com/SamDurrant/SoulSeeds',
          linkAriaLabel: 'link to soul seeds client code',
          text: 'client',
        },
      ],
    },
    {
      name: 'Snaps',
      description: `Get organized with snaps, an application that allows you to organize notes, ideas and vocabulary on double-sided cards.`,
      tech: '#HTML #Sass #JavaScript/ES6',
      links: [
        {
          link: 'https://snaps.netlify.com/',
          linkAriaLabel: 'link to snaps site',
          text: 'site',
        },
        {
          link: 'https://github.com/SamDurrant/snaps',
          linkAriaLabel: 'link to snaps client code',
          text: 'client',
        },
      ],
    },
  ],

  socialLinks: [
    {
      link: 'https://github.com/SamDurrant',
      linkAriaLabel: 'link to github',
      icon: 'fab fa-github',
    },
    {
      link: 'https://www.linkedin.com/in/samantha-durrant',
      linkAriaLabel: 'link to linkedin',
      icon: 'fab fa-linkedin-in',
    },
    {
      link: 'https://twitter.com/SamDurrant_',
      linkAriaLabel: 'link to twitter',
      icon: 'fab fa-twitter',
    },
  ],
}

export default content

import React from 'react'

import GitHubIcon from '../../images/svg/github.svg'
import GitLabIcon from '../../images/svg/gitlab.svg'
import EmailIcon from '../../images/svg/email.svg'

const svgClass = 'text-2xl sm:text-3xl text-slate hover:text-green'

const Footer = (): JSX.Element => (
  <footer className='container max-w-xs mx-auto mt-3 sm:mt-6 p-3 sm:p-6 flex justify-around sm:justify-between items-center'>
    <a href='https://github.com/tedbyron'>
      <GitHubIcon className={svgClass} />
    </a>
    <a href='https://gitlab.com/tedbyron'>
      <GitLabIcon className={svgClass} />
    </a>
    <a href='mailto:ted@tedbyron.com'>
      <EmailIcon className={svgClass} />
    </a>
  </footer>
)

export default Footer

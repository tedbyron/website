import { Link } from 'gatsby'
import React from 'react'

import GitHubIcon from '../../images/svg/github.svg'
import GitLabIcon from '../../images/svg/gitlab.svg'
import EmailIcon from '../../images/svg/email.svg'

const anchorClasses = 'ml-4'
const svgClasses = 'text-2xl md:text-3xl hover:text-green'

const Header = (): JSX.Element => {
  return (
    <header>
      <nav className='max-w-screen-lg flex justify-end items-center container mx-auto p-3 sm:p-6'>
        <Link to='/' className='mr-auto'>
          <div className='w-6 h-6 sm:w-10 sm:h-10 rounded-full drac-bg-animated hover:outline hover:outline-2 hover:outline-green hover:outline-offset-1' />
        </Link>

        <a href='https://github.com/tedbyron' className={anchorClasses}>
          <GitHubIcon className={svgClasses} />
        </a>
        <a href='https://gitlab.com/tedbyron' className={anchorClasses}>
          <GitLabIcon className={svgClasses} />
        </a>
        <a href='mailto:ted@tedbyron.com' className={anchorClasses}>
          <EmailIcon className={svgClasses} />
        </a>
      </nav>
    </header>
  )
}

export default Header

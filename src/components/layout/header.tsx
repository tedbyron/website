import { Link } from 'gatsby'
import React from 'react'

const Header = (): JSX.Element => {
  return (
    <header className='container px-3 pt-3 sm:px-6 sm:pt-6'>
      <nav className='flex justify-center'>
        <Link to='/'>
          <div className='w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-green hover:outline hover:outline-2 hover:outline-green hover:outline-offset-1' />
        </Link>
      </nav>
    </header>
  )
}

export default Header

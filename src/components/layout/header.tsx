import { Link } from 'gatsby'
import React, { useState } from 'react'

const Header = (): JSX.Element => {
  const [navOpen, setNavOpen] = useState(false)

  const burgerClick = (): void => {
    setNavOpen(!navOpen)
  }

  return (
    <header>
      <nav role='navigation' aria-label='main navigation'>
        <div>
          <div>
            <Link to='/'>
              tedbyron.com
            </Link>

            <a href='https://github.com/tedbyron' aria-label='GitHub'>
              <span>
                {/* <FontAwesomeIcon icon={['fab', 'github']} /> */}
              </span>
            </a>
            <a href='https://gitlab.com/tedbyron' aria-label='GitLab'>
              <span>
                {/* <FontAwesomeIcon icon={['fab', 'gitlab']} /> */}
              </span>
            </a>
            <a href='mailto:ted@tedbyron.com' aria-label='email'>
              <span>
                {/* <FontAwesomeIcon icon='envelope' /> */}
              </span>
            </a>

            <button type='button' aria-label='menu' aria-expanded={navOpen} data-target='navbarMenu' onClick={burgerClick}>
              <span aria-hidden='true' />
              <span aria-hidden='true' />
              <span aria-hidden='true' />
            </button>
          </div>

          <div id='navbarMenu'>
            <div>
              <Link to='/about'>About</Link>
            </div>

            <div>
              <div>
                <a href='https://github.com/tedbyron'>
                  <span>
                    {/* <FontAwesomeIcon icon={['fab', 'github']} /> */}
                  </span>
                </a>
                <a href='https://gitlab.com/tedbyron'>
                  <span>
                    {/* <FontAwesomeIcon icon={['fab', 'gitlab']} /> */}
                  </span>
                </a>
                <a href='mailto:ted@tedbyron.com'>
                  <span>
                    {/* <FontAwesomeIcon icon='envelope' /> */}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

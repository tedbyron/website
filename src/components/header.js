import React from 'react'
import { Link } from 'gatsby'

const Header = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      class: ``
    }
  }

  toggleHamburger = () => {
    this.setState({
      active: !this.state.active,
    }, () => {
      this.state.active
        ? this.setState({
            class: ` is-active`,
          })
        : this.setState({
            class: ``,
          })
    })
  }

  render() {
    return (
      <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <span>tedbyron</span>
            </Link>

            <button className={`navbar-burger burger${this.state.class}`} aria-label="menu" aria-expanded={this.state.active} data-target="navbarMenu" onClick={this.toggleHamburger}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>

          <div id="navbarMenu" className={`navbar-menu${this.state.class}`}>
            <div className="navbar-start">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/projects">
                Projects
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header

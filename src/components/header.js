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
        <nav className="navbar is-spaced has-shadow" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                <span>tedbyron</span>
              </Link>

              <a href="https://github.com/tedbyron" className="navbar-item is-hidden-tablet">
                <span className="icon">
                  <i className="fab fa-github"></i>
                </span>
              </a>
              <a href="https://gitlab.com/tedbyron" className="navbar-item is-hidden-tablet">
                <span className="icon">
                  <i className="fab fa-gitlab"></i>
                </span>
              </a>
              <a href="https://instagram.com/tedbyron" className="navbar-item is-hidden-tablet">
                <span className="icon">
                  <i className="fab fa-instagram"></i>
                </span>
              </a>
              <a href="mailto:ted@tedbyron.com" className="navbar-item is-hidden-tablet">
                <span className="icon">
                  <i className="fas fa-envelope"></i>
                </span>
              </a>

              <button className={`navbar-burger burger${this.state.class}`} aria-label="menu" aria-expanded={this.state.active} data-target="navbarMenu" onClick={this.toggleHamburger}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </button>
            </div>

            <div id="navbarMenu" className={`navbar-menu${this.state.class}`}>
              <div className="navbar-start">
                <Link to="/about" className="navbar-item" activeClassName="is-active">About</Link>

                <Link to="/projects" className="navbar-item" activeClassName="is-active" partiallyActive={true}>Projects</Link>

                <Link to="/blog" className="navbar-item" activeClassName="is-active" partiallyActive={true}>Blog</Link>

                <Link to="/contact" className="navbar-item" activeClassName="is-active">Contact</Link>
              </div>

              <div className="navbar-end is-hidden-mobile">
                <div className="field is-grouped">
                    <a href="https://github.com/tedbyron" className="navbar-item">
                      <span className="icon is-medium">
                        <i className="fab fa-lg fa-github"></i>
                      </span>
                    </a>
                    <a href="https://gitlab.com/tedbyron" className="navbar-item">
                      <span className="icon is-medium">
                        <i className="fab fa-lg fa-gitlab"></i>
                      </span>
                    </a>
                    <a href="https://instagram.com/tedbyron" className="navbar-item">
                      <span className="icon is-medium">
                        <i className="fab fa-lg fa-instagram"></i>
                      </span>
                    </a>
                    <a href="mailto:ted@tedbyron.com" className="navbar-item">
                      <span className="icon is-medium">
                        <i className="fas fa-lg fa-envelope"></i>
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
}

export default Header

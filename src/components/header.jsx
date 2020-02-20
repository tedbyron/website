import React from 'react';
import { Link } from 'gatsby';

const Header = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navIsActive: false,
      navClass: '',
    };
  }

  toggleHamburger = () => {
    this.setState(
      (state) => ({ navIsActive: !state.navIsActive }),
      () => {
        const { navIsActive } = this.state;

        if (navIsActive) {
          this.setState({
            navClass: ' is-active',
          });
        } else {
          this.setState({
            navClass: '',
          });
        }
      },
    );
  }

  render() {
    const { navIsActive, navClass } = this.state;

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
                  <i className="fab fa-github" />
                </span>
              </a>
              <a href="https://gitlab.com/tedbyron" className="navbar-item is-hidden-tablet">
                <span className="icon">
                  <i className="fab fa-gitlab" />
                </span>
              </a>
              <a href="https://instagram.com/tedbyron" className="navbar-item is-hidden-tablet">
                <span className="icon">
                  <i className="fab fa-instagram" />
                </span>
              </a>
              <a href="mailto:ted@tedbyron.com" className="navbar-item is-hidden-tablet">
                <span className="icon">
                  <i className="fas fa-envelope" />
                </span>
              </a>

              <button type="button" className={`navbar-burger burger${navClass}`} aria-label="menu" aria-expanded={navIsActive} data-target="navbarMenu" onClick={this.toggleHamburger}>
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </button>
            </div>

            <div id="navbarMenu" className={`navbar-menu${navClass}`}>
              <div className="navbar-start">
                <Link to="/about" className="navbar-item" activeClassName="is-active">About</Link>

                <Link to="/projects" className="navbar-item" activeClassName="is-active" partiallyActive>Projects</Link>

                <Link to="/blog" className="navbar-item" activeClassName="is-active" partiallyActive>Blog</Link>

                <Link to="/contact" className="navbar-item" activeClassName="is-active">Contact</Link>
              </div>

              <div className="navbar-end is-hidden-mobile">
                <div className="field is-grouped">
                  <a href="https://github.com/tedbyron" className="navbar-item">
                    <span className="icon is-medium">
                      <i className="fab fa-lg fa-github" />
                    </span>
                  </a>
                  <a href="https://gitlab.com/tedbyron" className="navbar-item">
                    <span className="icon is-medium">
                      <i className="fab fa-lg fa-gitlab" />
                    </span>
                  </a>
                  <a href="https://instagram.com/tedbyron" className="navbar-item">
                    <span className="icon is-medium">
                      <i className="fab fa-lg fa-instagram" />
                    </span>
                  </a>
                  <a href="mailto:ted@tedbyron.com" className="navbar-item">
                    <span className="icon is-medium">
                      <i className="fas fa-lg fa-envelope" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
};

export default Header;

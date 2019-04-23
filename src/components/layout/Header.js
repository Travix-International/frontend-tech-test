import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



class Header extends Component {
  menuItemClick = () => {
    
    if(document.getElementsByTagName('body')[0].classList.contains('modal-open')) {
      document.querySelector('.menu-items .menu-button').classList.remove('menu-open');
      document.getElementsByTagName('body')[0].classList.remove('modal-open');
      document.getElementById('navbar').classList.remove('menu-dark');
    }
  }
  menuClick (e) {
    var button = e.currentTarget;
    button.classList.toggle('menu-open');
    document.getElementsByTagName('body')[0].classList.toggle('modal-open');
    document.getElementById('navbar').classList.toggle('menu-dark');
  }
  render(){
  const { branding } = this.props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div className="menu-items d-block d-sm-none">
            <button onClick={this.menuClick.bind(this)} className="menu-button" type="button" aria-label="Open Menu" data-aria-label-close="Close Menu"></button>
          </div>
        <div id="navbar" className="navbar-container">
          <ul className="navbar-nav mr-auto nav-modal">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={this.menuItemClick.bind(this)}>
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/todo/add" className="nav-link" onClick={this.menuItemClick.bind(this)}>
                <i className="fas fa-plus" /> Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={this.menuItemClick.bind(this)}>
                <i className="fas fa-question" /> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
}

Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;

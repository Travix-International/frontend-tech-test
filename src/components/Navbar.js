import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import MdAdd from 'react-icons/lib/md/add';
import MdSync from 'react-icons/lib/md/sync';
import { draftTask, filterTasks } from '../redux/actions';
import '../styles/Navbar.scss';

class Navbar extends PureComponent {
  constructor(...args) {
    super(...args);
    this.state = {
      expanded: false
    };

    this.onToggleClick = this.onToggleClick.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
    this.onFilterTextChange = this.onFilterTextChange.bind(this);
  }

  onToggleClick() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  onAddClick(e) {
    e.preventDefault();
    this.props.dispatch(draftTask());
  }

  onFilterTextChange(e) {
    this.props.dispatch(filterTasks(e.target.value));
  }

  render() {
    const { filterText, isSyncing } = this.props;
    const { expanded } = this.state;

    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <a className="navbar-brand" href="#">Travix tasks</a>
        <button
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
          className={classNames("navbar-toggler", { "collapsed": !expanded })} onClick={this.onToggleClick} type="button"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={classNames("collapse navbar-collapse", { "show": expanded })} id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0 mr-auto">
            <input
              aria-label="Search by title" className="form-control" onChange={this.onFilterTextChange}
              placeholder="Search by title" type="text" value={filterText}
            />
          </form>
          {isSyncing && <span className="navbar-text mr-auto"><MdSync /> Syncing...</span>}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={this.onAddClick}><MdAdd /> Add a new task</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  filterText: PropTypes.string,
  isSyncing: PropTypes.bool
};

const mapStateToProps = ({ filterText, isSyncing }) => ({ filterText, isSyncing });

export default connect(mapStateToProps)(Navbar);

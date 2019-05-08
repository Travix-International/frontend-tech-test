import React from 'react';
import PropTypes from 'prop-types';
import {
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap';
import { 
  FiX,
  FiSearch 
} from 'react-icons/fi';
import { debounce } from 'lodash';
import styles from './SearchBar.module.scss';

class SearchBar extends React.PureComponent {
  static propTypes = {
    onSearch: PropTypes.func,
    onClear: PropTypes.func,
  } 

  static defaultProps = {
    onSearch: () => {},
    onClear: () => {}
  }

  constructor (props) {
    super(props);
    this.state = {
      focus: false
    };
    this.inputRef = React.createRef();
    this.onSearchTask = debounce(this.onSearchTask, 300);
  }

  onSearchTask = e => {
    const value = this.inputRef.current.value;
    this.props.onSearch(value);
  }

  onClearSearch = e => {
    this.inputRef.current.value = '';
    this.props.onClear();
  }

  onInputBlur = e => {
    this.setState(prevState => ({
      focus: false
    }));

    if (!this.inputRef.current.value) {
      this.props.onClear();
    }
  }

  onInputClick = e => {
    this.setState(prevState => ({
      focus: true
    }));
  }

  render () {
    const { focus } = this.state;
    return (
      <div className={styles.searchbar}>
        <InputGroup size="sm">
          <Input 
            type="text"
            placeholder="Search task title"
            innerRef={this.inputRef}
            onChange={this.onSearchTask}
            onBlur={this.onInputBlur}
            onClick={this.onInputClick}
          />
          <InputGroupAddon 
            className={styles['input-addon']}
            addonType="append"
            onMouseDown={this.onClearSearch}
          >
            <InputGroupText>
              { focus ? <FiX /> : <FiSearch /> }
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}

export default SearchBar;
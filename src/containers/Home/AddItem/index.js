import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  Button,
} from 'travix-ui-kit';
import './style.scss';

export default class MyComponent extends Component {
  static propTypes = {
    isInvalid: PropTypes.bool.isRequired,
    onChangeDesc: PropTypes.func.isRequired,
    onChangeTitle: PropTypes.func.isRequired,
    onClickSubmit: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func.isRequired,
    valueDesc: PropTypes.string.isRequired,
    valueTitle: PropTypes.string.isRequired,
  }

  render() {
    const {
      valueDesc,
      valueTitle,
      isInvalid,
      onClickSubmit,
      onKeyPress,
      onChangeDesc,
      onChangeTitle,
    } = this.props;
    const placeholderTitle = 'title:';
    const placeholderDesc = 'description:';

    return (
      <div className="add-item">
        <div className="input--title-wrapper">
          <Input mods={['title']} onChange={onChangeTitle} onKeyPress={onKeyPress} placeholder={placeholderTitle} value={valueTitle} />
        </div>
        <div className="input--desc-wrapper">
          <Input mods={['desc']} onChange={onChangeDesc} onKeyPress={onKeyPress} placeholder={placeholderDesc} value={valueDesc} />
        </div>
        <Button disabled={isInvalid} mods={['submit']} onClick={onClickSubmit} size="s">
          submit
        </Button>
      </div>
    );
  }
}

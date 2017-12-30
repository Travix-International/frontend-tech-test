import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  Button,
} from 'travix-ui-kit';
import './edit.scss';

export default class MyComponent extends Component {
  static propTypes = {
    isInvalid: PropTypes.bool.isRequired,
    onChangeDesc: PropTypes.func.isRequired,
    onChangeTitle: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired,
    onClickSubmit: PropTypes.func.isRequired,
    onClickSwitch: PropTypes.func.isRequired,
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
      onClickSwitch,
      onKeyPress,
      onChangeDesc,
      onChangeTitle,
      onClickDelete,
    } = this.props;
    const placeholderTitle = 'title:';
    const placeholderDesc = 'description:';

    return (
      <div className="mode--edit">
        <div className="item__left">
          <Button mods={['error']} onClick={onClickDelete} size="s">x</Button>
        </div>
        <div
          className="item__right"
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          <div
            className="item__right__left"
          >
            <Input mods={['title']} onChange={onChangeTitle} onKeyPress={onKeyPress} placeholder={placeholderTitle} value={valueTitle} />
            <Input mods={['desc']} onChange={onChangeDesc} onKeyPress={onKeyPress} placeholder={placeholderDesc} value={valueDesc} />
          </div>
          <div className="item__right__right">
            <Button disabled={isInvalid} mods={['submit']} onClick={onClickSubmit} size="s">
              submit
            </Button>
            <Button mods={['cancel']} onClick={onClickSwitch} size="s" variation="ghost-inverted">cancel</Button>
          </div>
        </div>
      </div>
    );
  }
}

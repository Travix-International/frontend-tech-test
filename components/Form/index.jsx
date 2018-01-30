import React from 'react';
import PropTypes from 'prop-types';
import { observe } from 'frint-react';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { of } from 'rxjs/observable/of';
import { map, merge, scan } from 'rxjs/operators';
import { Button, Input } from 'travix-ui-kit';

import './index.scss';

function Form(props) {
  function todoAction() {
    if (props.title.trim() === '') {
      return;
    }
    props.clearTitle();
    props.clearDescription();
    props.action(props.title.trim(), props.description.trim());
  }

  function changeDescription(e) {
    props.changeDescription(e.target.value);
  }

  function changeTitle(e) {
    props.changeTitle(e.target.value);
  }

  function submit(e) {
    e.preventDefault();
    todoAction();
  }

  return (
    <form className="ui-form" onSubmit={submit}>
      <label htmlFor="titleInput">
        {props.formTitle}
      </label>
      <Input
        id="titleInput"
        onChange={changeTitle}
        placeholder="Todo title..."
        type="text"
        value={props.title}
      />
      <Input
        multiline
        onChange={changeDescription}
        placeholder="Todo description..."
        type="text"
        value={props.description}
      />
      <Button
        onClick={todoAction}
        size="s"
        type="button"
      >
        {props.actionBtnTitle}
      </Button>
    </form>
  );
}

Form.propTypes = {
  action: PropTypes.func.isRequired,
  actionBtnTitle: PropTypes.string.isRequired,
  changeDescription: PropTypes.func.isRequired,
  changeTitle: PropTypes.func.isRequired,
  clearDescription: PropTypes.func.isRequired,
  clearTitle: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  formTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default observe((app, { value: { action, todoDescription = '', todoTitle = '' } }) => {
  const titleInput$ = new BehaviorSubject(todoTitle).pipe(
    map(title => ({ title })),
  );

  const clearTitle = () => titleInput$.next('');
  const changeTitle = t => titleInput$.next(t);

  const descriptionInput$ = new BehaviorSubject(todoDescription).pipe(
    map(description => ({ description })),
  );

  const clearDescription = () => descriptionInput$.next('');
  const changeDescription = d => descriptionInput$.next(d);

  const actionProps$ = of({
    action: (...args) => action(...args),
    changeDescription,
    clearDescription,
    changeTitle,
    clearTitle,
  });

  return actionProps$.pipe(
    merge(titleInput$, descriptionInput$),
    scan((props, emitted) => {
      return {
        ...props,
        ...emitted,
      };
    }),
  );
})(Form);

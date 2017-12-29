import test from 'ava';
import sinon from 'sinon';
import React from 'react';
import { shallow } from 'enzyme';
import mock from 'mock-require';

mock('react-redux', {
  connect: () => {
    return (comp) => {
      return comp;
    };
  },
});

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */
class MockListComponent extends React.Component {
  render() {
    return (<div />);
  }
}

test('can validate input task', (t) => {
  const withEditTask = mock.reRequire('./withEditTask').default;
  const Edit = withEditTask(MockListComponent);
  const instance = shallow(<Edit />).instance();
  t.is(instance.validate('any', 'Title'), false);
  t.is(instance.validate('any', 'Desc'), false);
  // validate default checking value in state
  instance.setState({
    valueTitle: 'valid',
    valueDesc: 'valid',
  });
  t.is(instance.validate(), true);
});

test('prototype.onChange', (t) => {
  const withEditTask = mock.reRequire('./withEditTask').default;
  const Edit = withEditTask(MockListComponent);
  const instance = shallow(<Edit />).instance();
  const setStateSpy = sinon.spy(instance, 'setState');
  instance.onChange('value', 'Title');
  const args = setStateSpy.args[0][0];
  t.is(args.valueTitle, 'value');
  t.is(args.isInvalid, true);
});

test('prototype.onChangeTitle', (t) => {
  const withEditTask = mock.reRequire('./withEditTask').default;
  const Edit = withEditTask(MockListComponent);
  const instance = shallow(<Edit />).instance();
  const onChangeSpy = sinon.spy(instance, 'onChange');
  instance.onChangeTitle({
    target: {
      value: 'value',
    },
  });
  const args = onChangeSpy.args[0];
  t.is(args[0], 'value');
  t.is(args[1], 'Title');
});

test('prototype.onClickSubmit without taskId', (t) => {
  const postTaskSpy = sinon.stub().returns({
    then: function then(cb) {
      cb();
      return this;
    },
  });
  const withEditTask = mock.reRequire('./withEditTask').default;
  const Edit = withEditTask(MockListComponent);
  const instance = shallow(<Edit postTask={postTaskSpy} />).instance();
  const setStateSpy = sinon.spy(instance, 'setState');
  instance.onClickSubmit();
  // not calling postTaskSpy if input not valid
  t.false(postTaskSpy.called);

  // success
  instance.setState({
    valueTitle: 'valid',
    valueDesc: 'valid',
  });
  setStateSpy.reset();
  instance.onClickSubmit();
  const args = postTaskSpy.args[0][0];
  t.is(args.title, 'valid');
  t.is(args.description, 'valid');
  // reset after successed
  const setStateArgs = setStateSpy.args[0][0];
  t.is(setStateArgs.isInvalid, true);
});

import React from 'react';
import { shallow } from 'enzyme';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import toJson from 'enzyme-to-json';

import List from '../List';

const renderListItem = item => <div className="list-item" key={`list-item-${item}`}>{item}</div>;

describe('Common.List', () => {
  it('should render with props', () => {
    const items = [1, 2];
    const list = shallow(<List renderListItem={renderListItem} items={items} />);

    expect(toJson(list)).toMatchSnapshot();
  });

  it('should render a ListGroup', () => {
    const items = [1, 2];
    const list = shallow(<List renderListItem={renderListItem} items={items} />);

    expect(list.find(ListGroup).length).toBe(1);
  });

  it('should call itemRenderer to render items', () => {
    const renderListItemMock = jest.fn(renderListItem);
    const items = [1, 2];
    shallow(<List renderListItem={renderListItemMock} items={items} />);

    expect(renderListItemMock.mock.calls.length).toBe(2);
  });

  it('should render items', () => {
    const items = [1, 2];
    const list = shallow(<List renderListItem={renderListItem} items={items} />);

    expect(list.find('.list-item').length).toBe(2);
  });

  it('should not render items when empty', () => {
    const items = [];
    const list = shallow(<List renderListItem={renderListItem} items={items} />);

    expect(list.find('.list-item').length).toBe(0);
  });
});

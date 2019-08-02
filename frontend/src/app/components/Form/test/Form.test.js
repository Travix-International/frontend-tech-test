import React from 'react';
import { shallow } from 'enzyme';
import { Input, Button } from '..';

describe('Test Form', () => {
  it('Text renders correctly', () => {
    const SectionSnapshot = shallow(
      <Input defaultValue="value" onChange={value => value} error="" id="id" label="Label" placeholder="Placeholder" />
    );
    expect(SectionSnapshot).toMatchSnapshot();
  });

  it('Textarea renders correctly', () => {
    const SectionSnapshot = shallow(
      <Input
        type="textarea"
        defaultValue="value"
        onChange={value => value}
        error=""
        id="id"
        label="Label"
        placeholder="Placeholder"
      />
    );
    expect(SectionSnapshot).toMatchSnapshot();
  });

  it('Button renders correctly', () => {
    const SectionSnapshot = shallow(
      <Button type="primary" id="id" onClick={() => 'nothing'}>
        Button
      </Button>
    );
    expect(SectionSnapshot).toMatchSnapshot();
  });

  it('Submitting', () => {
    const disabledButton = shallow(
      <Button type="primary" id="id" disabled>
        Submit
      </Button>
    );
    expect(disabledButton.find('#id').props().disabled).toBeTruthy();

    const submittingButton = shallow(
      <Button type="primary" id="id" isSubmiting>
        Submit
      </Button>
    );
    expect(submittingButton.find('#id').props().disabled).toBeTruthy();
  });
});

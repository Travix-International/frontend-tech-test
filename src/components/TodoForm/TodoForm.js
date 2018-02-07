import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import { Row, Col } from 'react-flexbox-grid';
import InputField from '../InputField/';

import validator from '../../helpers/validationHelper';


export default function TodoForm(props) {
  const {
    handleSubmit,
    pristine,
    submitting
  } = props;
  
  return (
    <div className={"todoForm"}>
      <form onSubmit={handleSubmit}>
        <Row bottom={"xs"}>
          <Col
            lg={5}
            md={5}
            sm={5}
            xs={12}
          >
            <Field
              component={InputField}
              label={"Title"}
              name={"title"}
              type={"text"}
              validate={validator.required}
            />
          </Col>
          <Col
            lg={5}
            md={5}
            sm={5}
            xs={12}
          >
            <Field
              component={InputField}
              label={"Description"}
              name={"description"}
              type={"text"}
              validate={validator.required}
            />
          </Col>
          <Col
            lg={2}
            md={2}
            sm={2}
            xs={12}
          >
            <Row>
              <Col
                lg={12}
                md={12}
                sm={12}
                xs={12}
              >
                <button
                  disabled={pristine || submitting}
                  type={"submit"}
                >
                  Save
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </form>
    </div>
  );
}

TodoForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
};

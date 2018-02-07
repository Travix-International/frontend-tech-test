const validator = {
  required: value => (value ? undefined : 'Required field')
};

export default validator;

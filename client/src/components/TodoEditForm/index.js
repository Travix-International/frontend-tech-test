import { reduxForm } from 'redux-form'

import TodoForm from 'components/TodoForm'
import { validate } from 'common/utils'

export default reduxForm({
  form: 'edit',
  validate
})(TodoForm)

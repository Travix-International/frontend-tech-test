/* eslint-disable */
import React from 'react'
import { Bundle } from 'SRC/components'
// import TodoList from 'bundle-loader?lazy&name=[name]!./TodoList'
import TodoList from './TodoList'
import dummyTodos from './dummyTodos'

export {
  dummyTodos,
}

export default TodoList

// export default function TodoListBundle() {
//   return (
//     <Bundle
//       load={TodoList}
//       loading={(<h1 style={{ textAlign: 'center' }}>Loading</h1>)}
//     />
//   )
// }

// import React from 'react'
// import { Bundle } from 'SRC/components'
// import TodoList from 'bundle-loader?lazy&name=[name]!./TodoList'
// import dummyTodos from './dummyTodos'
//
// export {
//   dummyTodos,
// }
//

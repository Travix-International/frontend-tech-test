import React from 'react'
import { render } from 'react-dom'

import Root from './components/Root'

if (!module.hot) render(<Root />, document.querySelector('react'))

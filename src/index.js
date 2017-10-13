import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './css/layout.css'
import { TodoBoard } from './containers'

ReactDOM.render(<TodoBoard />, document.getElementById('root'))

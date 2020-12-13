import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import App from './App'
import './index.scss'

const accessToken = localStorage.getItem('accessToken')
if (accessToken) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
}

ReactDOM.render(<App />, document.getElementById('root'))

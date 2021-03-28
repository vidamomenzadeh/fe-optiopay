import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import reportWebVitals from './reportWebVitals'
import LayoutCmp from './components/LayoutCmp'
import Conversion from './components/conversion/'

ReactDOM.render(
  <React.StrictMode>
    <LayoutCmp>
      <Conversion />
    </LayoutCmp>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()

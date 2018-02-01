import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from 'pages'
import { Header } from 'components'

const Router = () => (
  <BrowserRouter>
    <div>
      <Header />

      <Route exact path="/" component={Home} />
    </div>
  </BrowserRouter>
)

export default Router

import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Home } from 'pages'
import { Header } from 'components'
import store from 'store'

const Router = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
      </div>
    </BrowserRouter>
  </Provider>
)

export default Router

import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Home, Doughnut } from 'pages'
import { Header } from 'components'
import store from 'store'

const Router = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/doughnut/:id" component={Doughnut} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
)

export default Router

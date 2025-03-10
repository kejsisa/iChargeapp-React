import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Fushata from './views/fushata'
import News from './views/news'
import KushtetEPerdorimit from './views/kushtet-e-perdorimit'
import Kontakt from './views/kontakt'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Fushata} exact path="/fushata" />
        <Route component={News} exact path="/news" />
        <Route
          component={KushtetEPerdorimit}
          exact
          path="/kushtet-e-perdorimit"
        />
        <Route component={Kontakt} exact path="/kontakt" />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

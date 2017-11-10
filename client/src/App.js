import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Parks from './components/Parks'


class App extends Component {
  render() {
    return (
     <Router>
       <div>
          <Switch>
              <Route exact path="/" component={Parks} />
          </Switch>
       </div>
     </Router>
    );
  }
}

export default App;

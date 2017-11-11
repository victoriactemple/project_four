import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import ParkList from './components/ParkList'
import Park from './components/Park'

class App extends Component {
  render() {

    return (
     <Router>
       <div>
          <Switch>
              <Route exact path="/" component={ParkList} />
              <Route path="/:park_id" component={Park} />
          </Switch>
       </div>
     </Router>
    );
  }
}

export default App;

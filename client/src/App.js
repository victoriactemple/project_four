import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import ParkList from './components/ParkList'
import Park from './components/Park'


class App extends Component {
  state = {
    parks: []
  }

  async coomponentWillMount() {
    try {
      const response = await axios.get('/api/parks')
      this.setState({parks: response.data})
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const ParkListComponent = () => (<ParkList parks={this.state.parks} />)
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
